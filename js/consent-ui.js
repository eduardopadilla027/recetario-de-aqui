/* Recetarios de Aquí · Consentimiento en la pantalla de entrada, en la cuenta y en #/terminos.
 *
 * 1. ANTES de entrar (pantalla de entrada, js/auth.js): resumen de los términos, "Leer los términos completos" y
 *    las tres casillas (CONSENT_ITEMS, js/consent.js). Los botones de Gmail, Yahoo… y el enlace por correo quedan
 *    apagados hasta marcarlas todas. Lo aceptado se guarda en este navegador (rcb.consent) con la hora.
 * 2. AL ENTRAR (onUser en auth.js → consentOnUser): si la cuenta no tiene la versión vigente aceptada, se guarda en
 *    Firestore consents/{uid} (versión, casillas, idioma, hora local y del servidor, navegador e historial) y se
 *    pide al servidor (api/consent-email.js) que envíe el correo de confirmación; al enviarse se anota emailSentAt.
 *    Si la cuenta ya había entrado antes sin aceptar (o cambió la versión), sale el estado "consent" con las
 *    casillas y "Acepto y continúo".
 * 3. Los administradores ven en #/admin la columna "Consentimiento" (versión, fecha y si se envió el correo).
 * 4. #/terminos muestra los términos completos para leerlos o imprimirlos. */

const CONSENT_STORE = "rcb.consent";
const CUI_T = {
  es: { colConsent: "Consentimiento", pending: "Pendiente", emailed: "correo enviado", notEmailed: "correo sin enviar", csvConsent: "Versión aceptada", csvConsentAt: "Fecha de aceptación", csvEmail: "Correo de confirmación",
    emailFail: "Su aceptación quedó guardada, pero no se pudo enviar el correo de confirmación ahora. Lo intentaremos la próxima vez que entre.", footer: "Términos y condiciones" },
  en: { colConsent: "Consent", pending: "Pending", emailed: "email sent", notEmailed: "email not sent", csvConsent: "Accepted version", csvConsentAt: "Acceptance date", csvEmail: "Confirmation email",
    emailFail: "Your acceptance was saved, but the confirmation email couldn't be sent right now. We'll try again next time you sign in.", footer: "Terms and conditions" }
};
const cui = () => CUI_T[currentLang];
const ctT = () => TERMS[currentLang];

/* ── Lo aceptado en este navegador ── */
function readLocalConsent() { try { return JSON.parse(localStorage.getItem(CONSENT_STORE) || "null"); } catch { return null; } }
function writeLocalConsent(v) { try { if (v) localStorage.setItem(CONSENT_STORE, JSON.stringify(v)); else localStorage.removeItem(CONSENT_STORE); } catch { /* sin almacenamiento */ } }
const ALL_ITEMS = () => CONSENT_ITEMS.es.map(([k]) => k);
function consentPending() {
  const c = readLocalConsent();
  return c && c.version === CONSENT_VERSION && ALL_ITEMS().every((k) => (c.items || []).includes(k)) ? c : null;
}
let consentChecks = new Set(); // casillas marcadas en la pantalla (todavía sin aceptar)

/* ── Texto completo ── */
function termsBodyHTML(lang = currentLang) {
  const T = TERMS[lang];
  const para = (p) => (Array.isArray(p) ? `<ul>${p.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p>${esc(p)}</p>`);
  return `<p class="terms-meta">${esc(T.meta(CONSENT_VERSION))}</p>
    ${T.sections.map(([h, ps]) => `<section class="terms-sec"><h3>${esc(h)}</h3>${ps.map(para).join("")}</section>`).join("")}`;
}
/* El bloque de la pantalla de entrada (mode "pre") o del estado "consent" (mode "update"). */
function consentBlockHTML(mode = "pre") {
  const T = ctT();
  const done = consentPending();
  if (mode === "pre" && done) consentChecks = new Set(done.items);
  return `<section class="consent-block" aria-labelledby="consent-title">
    <h2 class="auth-h2" id="consent-title">${esc(mode === "update" ? T.consentIntro : T.title)}</h2>
    ${mode === "pre" ? `<p class="auth-text">${esc(T.intro)}</p>` : ""}
    <p class="consent-sum-title">${esc(T.summaryTitle)}</p>
    <ul class="consent-summary">${T.summary.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <details class="consent-full"><summary>${esc(T.readAll)}</summary><div class="terms-box" tabindex="0">${termsBodyHTML()}</div></details>
    <fieldset class="consent-checks"><legend>${esc(T.accept)}</legend>
      ${CONSENT_ITEMS[currentLang].map(([k, txt]) => `<label class="consent-item"><input type="checkbox" data-consent-item="${k}" ${consentChecks.has(k) ? "checked" : ""}><span>${esc(txt)}</span></label>`).join("")}
    </fieldset>
    <p class="consent-status" id="consent-status" role="status">${done && mode === "pre" ? esc(T.acceptedLocal) : ""}</p>
    ${mode === "update" ? `<div class="auth-actions"><button type="button" class="btn btn-primary" data-consent-accept ${ALL_ITEMS().every((k) => consentChecks.has(k)) ? "" : "aria-disabled=\"true\""}>${esc(T.acceptBtn)}</button>${signOutBtn()}</div>` : ""}
  </section>`;
}
/* Al marcar o desmarcar: con las tres, queda aceptado en este navegador y se encienden las formas de entrar. */
function onConsentCheck(input) {
  const k = input.dataset.consentItem;
  if (input.checked) consentChecks.add(k); else consentChecks.delete(k);
  const all = ALL_ITEMS().every((x) => consentChecks.has(x));
  writeLocalConsent(all ? { version: CONSENT_VERSION, items: [...consentChecks], acceptedAt: new Date().toISOString(), lang: currentLang } : null);
  const entry = $("auth-entry");
  if (entry) entry.disabled = !all;
  const st = $("consent-status");
  if (st) st.textContent = all ? ctT().acceptedLocal : "";
  const btn = document.querySelector("[data-consent-accept]");
  if (btn) { if (all) btn.removeAttribute("aria-disabled"); else btn.setAttribute("aria-disabled", "true"); }
}

/* ── En la cuenta ── */
const consentRef = (uid) => fbDb.collection("consents").doc(uid);
/* Devuelve true si se puede entrar (ya aceptó la versión vigente, o la aceptó en esta pantalla y se guardó).
   Si no, deja el estado "consent". Si Firestore todavía no tiene las reglas de consents, se entra con lo aceptado
   en este navegador (y se avisa en la consola). */
async function consentOnUser(user) {
  let saved = null, rulesOk = true;
  try { const snap = await consentRef(user.uid).get(); saved = snap.exists ? snap.data() : null; }
  catch (err) { rulesOk = false; console.warn("No se leyó el consentimiento (¿faltan las reglas de consents?):", (err && err.code) || err); }
  if (saved && saved.version === CONSENT_VERSION) {
    if (!saved.emailSentAt) sendConsentEmail(user, false); // no se pudo enviar antes: se intenta otra vez
    return true;
  }
  const local = consentPending();
  if (!local) { consentChecks = new Set(); setAuthState("consent"); return false; }
  if (!rulesOk) return true;
  try {
    const history = saved ? [...(saved.history || []), `${saved.version}`].slice(-20) : [];
    await consentRef(user.uid).set({
      uid: user.uid, email: lower(user.email), version: CONSENT_VERSION, lang: local.lang || currentLang,
      items: local.items, acceptedAt: String(local.acceptedAt || "").slice(0, 40),
      ua: String(navigator.userAgent || "").slice(0, 200), history,
      at: firebase.firestore.FieldValue.serverTimestamp()
    });
    sendConsentEmail(user, true);
  } catch (err) { console.warn("No se guardó el consentimiento en la cuenta:", (err && err.code) || err); }
  return true;
}
/* Pide al servidor el correo de confirmación (api/consent-email.js). El servidor lee el registro de la cuenta con la
   misma sesión, así que el correo dice lo que de verdad quedó guardado. */
async function sendConsentEmail(user, announce) {
  try {
    const token = await user.getIdToken();
    const res = await fetch("/api/consent-email", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ lang: currentLang }) });
    // 503: el servicio de correo todavía no está configurado en Vercel (RESEND_API_KEY); se reintenta al volver a entrar, sin aviso.
    if (res.status === 503) { console.warn("Correo de confirmación: falta configurar RESEND_API_KEY en Vercel."); return; }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await consentRef(user.uid).update({ emailSentAt: firebase.firestore.FieldValue.serverTimestamp() });
    if (announce) toast(ctT().emailSent(user.email), true);
  } catch (err) {
    console.warn("Correo de confirmación sin enviar:", (err && err.message) || err);
    if (announce) toast(cui().emailFail);
  }
}

/* ── Administración: la columna "Consentimiento" ── */
let adminConsents = new Map();
async function loadAdminConsents() {
  try { const snap = await fbDb.collection("consents").get(); adminConsents = new Map(snap.docs.map((d) => [d.id, d.data()])); }
  catch (err) { adminConsents = new Map(); console.warn("No se leyeron los consentimientos:", (err && err.code) || err); }
}
function consentCellHTML(uid) {
  const c = adminConsents.get(uid);
  if (!c) return `<span class="role-tag is-blocked">${esc(cui().pending)}</span>`;
  const cur = c.version === CONSENT_VERSION;
  return `<span class="role-tag${cur ? " is-admin" : " is-blocked"}">v${esc(c.version)}</span> <span class="admin-date">${esc(fmtDate(c.at))}</span>
    <span class="consent-mail">${esc(c.emailSentAt ? cui().emailed : cui().notEmailed)}</span>`;
}
function consentCSV(uid) {
  const c = adminConsents.get(uid);
  return c ? [c.version, fmtDate(c.at), c.emailSentAt ? fmtDate(c.emailSentAt) : ""] : ["", "", ""];
}

/* ── #/terminos ── */
function showTerms() {
  current = null;
  for (const v of ["view-home", "view-recipe", "view-plans", "view-admin", "view-mine", "view-shop"]) { const el = $(v); if (el) el.hidden = true; }
  const v = $("view-terms");
  v.hidden = false;
  document.title = `${ctT().viewTitle} — ${BRAND}`;
  renderTermsView();
  jumpTo(0);
  $("terms-title").focus({ preventScroll: true });
  if (typeof authUser !== "undefined" && authUser && fbDb) {
    consentRef(authUser.uid).get().then((s) => {
      const c = s.exists && s.data();
      const p = $("terms-mine");
      if (c && p) { p.textContent = ctT().myConsent(c.version, c.at ? consentDate(c.at.toDate(), currentLang) : ""); p.hidden = false; }
    }).catch(() => {});
  }
}
function renderTermsView() {
  const v = $("view-terms");
  if (!v || v.hidden) return;
  v.innerHTML = `<div class="container terms-wrap">
    <header class="plans-head"><h1 class="section-title" id="terms-title" tabindex="-1">${esc(ctT().title)}</h1>
      <p class="plans-note" id="terms-mine" hidden></p></header>
    <div class="terms-page">${termsBodyHTML()}</div>
    <button type="button" class="btn btn-outline" onclick="window.print()"><svg class="icon" aria-hidden="true"><use href="#i-print"/></svg><span>${esc(ctT().printBtn)}</span></button>
  </div>`;
}

document.addEventListener("change", (e) => { if (e.target.matches && e.target.matches("[data-consent-item]")) onConsentCheck(e.target); });
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest("[data-consent-accept]");
  if (!b) return;
  if (b.getAttribute("aria-disabled") === "true") { const st = $("consent-status"); if (st) st.textContent = ctT().needAll; return; }
  if (fbAuth && fbAuth.currentUser) { setAuthState("loading"); onUser(fbAuth.currentUser); }
});
