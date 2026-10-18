/* Recetarios de Aquí · Motor de correo: confirmación del consentimiento (función de Vercel, POST /api/consent-email).
 *
 * La app (js/consent-ui.js) lo llama justo después de guardar la aceptación en Firestore, con la sesión de la persona
 * (Authorization: Bearer <token de Firebase>). Aquí:
 *   1. Se comprueba el token con las llaves públicas de Google (sin cuentas de servicio): que sea de este proyecto, que
 *      no haya vencido y que el correo esté validado. El correo SÓLO se envía al dueño de la sesión.
 *   2. Se lee su registro consents/{uid} de Firestore con esa misma sesión (las reglas sólo se lo dejan leer a ella),
 *      así el correo dice lo que de verdad quedó guardado: versión, casillas, fecha y hora.
 *   3. Se arma el correo con consentEmail() de js/consent.js (mismo texto que la app) y se envía por Resend.
 * Variables en Vercel (Settings → Environment Variables): RESEND_API_KEY (obligatoria), CONSENT_FROM (remitente; el
 * dominio debe estar verificado en Resend) y FIREBASE_PROJECT_ID (si no, "recetario-de-aqui"). Sin RESEND_API_KEY
 * responde 503 y la app lo vuelve a intentar la próxima vez que la persona entre. */

const { consentEmail } = require("../js/consent.js");

const PROJECT = process.env.FIREBASE_PROJECT_ID || "recetario-de-aqui";
const FROM = process.env.CONSENT_FROM || "Recetarios de Aquí <confirmaciones@recetariodeaqui.com>";
const REPLY_TO = "recetariodeaqui@gmail.com";
const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const RESEND_MIN_MS = 10 * 60 * 1000; // no más de un correo cada 10 minutos por persona

const b64url = (s) => Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64");
let jwksCache = { keys: null, until: 0 };
async function googleKeys() {
  if (jwksCache.keys && Date.now() < jwksCache.until) return jwksCache.keys;
  const res = await fetch(JWKS_URL);
  if (!res.ok) throw new Error("jwks");
  const maxAge = Number((/max-age=(\d+)/.exec(res.headers.get("cache-control") || "") || [])[1] || 3600);
  jwksCache = { keys: (await res.json()).keys, until: Date.now() + maxAge * 1000 };
  return jwksCache.keys;
}
/* Token de Firebase (RS256) comprobado con WebCrypto: firma, proyecto, emisor, fechas y correo validado. */
async function verifyIdToken(token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 3) throw new Error("token");
  const header = JSON.parse(b64url(parts[0]).toString("utf8"));
  const payload = JSON.parse(b64url(parts[1]).toString("utf8"));
  if (header.alg !== "RS256" || !header.kid) throw new Error("alg");
  const jwk = (await googleKeys()).find((k) => k.kid === header.kid);
  if (!jwk) throw new Error("kid");
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64url(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
  const now = Math.floor(Date.now() / 1000);
  if (!ok || payload.aud !== PROJECT || payload.iss !== `https://securetoken.google.com/${PROJECT}` || !payload.sub
    || payload.exp <= now || payload.iat > now + 60 || !payload.email || payload.email_verified !== true) throw new Error("claims");
  return payload;
}
/* consents/{uid} por la API REST de Firestore, con la sesión de la persona. */
async function readConsent(uid, token) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/consents/${encodeURIComponent(uid)}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`firestore ${res.status}`);
  const f = (await res.json()).fields || {};
  const str = (k) => (f[k] && f[k].stringValue) || "";
  return {
    email: str("email"), version: str("version"), lang: str("lang") || "es",
    items: ((f.items && f.items.arrayValue && f.items.arrayValue.values) || []).map((v) => v.stringValue),
    at: f.at && f.at.timestampValue, emailSentAt: f.emailSentAt && f.emailSentAt.timestampValue
  };
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return res.status(405).json({ error: "method" }); }
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  let user;
  try { user = await verifyIdToken(token); } catch { return res.status(401).json({ error: "auth" }); }
  let consent;
  try { consent = await readConsent(user.sub, token); } catch (err) { return res.status(502).json({ error: "read", detail: String(err.message || err) }); }
  if (!consent || !consent.version || !consent.at) return res.status(404).json({ error: "no-consent" });
  if (consent.emailSentAt && Date.now() - Date.parse(consent.emailSentAt) < RESEND_MIN_MS) return res.status(429).json({ error: "too-soon" });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ error: "email-not-configured" });

  const to = String(user.email).toLowerCase();
  const mail = consentEmail({ email: to, version: consent.version, at: consent.at, lang: consent.lang, items: consent.items });
  const send = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], reply_to: REPLY_TO, subject: mail.subject, html: mail.html, text: mail.text })
  });
  if (!send.ok) return res.status(502).json({ error: "send", status: send.status, detail: (await send.text()).slice(0, 300) });
  const out = await send.json().catch(() => ({}));
  return res.status(200).json({ ok: true, id: out.id || null });
};
