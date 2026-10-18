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
 * 4. #/terminos muestra los términos completos para leerlos o imprimirlos.
 * 5. #/privacidad: qué se guarda y para qué (sección 9 de los términos) y, con la sesión abierta, lo que hay
 *    guardado de la persona, "Descargar mis datos" (JSON) y "Retirar mi consentimiento y borrar mi cuenta",
 *    que borra en un paso su registro, su consentimiento, sus planes, Mi recetario, sus reseñas y fotos, sus
 *    reportes y la cuenta de Firebase Authentication. */

const CONSENT_STORE = "rcb.consent";
const CUI_T = {
  es: {
    colConsent: "Consentimiento",
    pvTitle: "Privacidad y mis datos", pvIntro: "Sin cuenta no guardamos nada en el servidor: lo suyo queda sólo en este navegador. Con cuenta, esto es lo que guardamos:",
    pvMine: "Lo que hay guardado de su cuenta", pvEmail: "Correo", pvSince: "Primera vez", pvUses: "Veces que usó la app", pvConsent: "Consentimiento",
    pvPlan: "Ajustes de planes", pvKitchen: "Mi recetario", pvReviews: "Reseñas", pvYes: "Sí", pvNo: "No",
    pvGuest: "No ha entrado con una cuenta, así que no hay nada suyo en el servidor. Para borrar lo de este navegador, borre los datos del sitio en su navegador.",
    pvDownload: "Descargar mis datos", pvDelete: "Retirar mi consentimiento y borrar mi cuenta",
    pvDeleteHelp: "Borra para siempre su registro, su consentimiento, sus planes, Mi recetario, sus reseñas y fotos y su cuenta. No se puede deshacer. Las recetas las puede seguir viendo sin cuenta.",
    pvConfirm: "¿Borrar su cuenta y todos sus datos? No se puede deshacer.", pvWorking: "Borrando sus datos…",
    pvDone: "Su cuenta y sus datos se borraron. Puede seguir usando la app sin cuenta.",
    pvReauth: "Por seguridad, entre otra vez con su cuenta y vuelva a pulsar «Borrar mi cuenta».",
    pvFail: "No se pudo borrar todo. Inténtelo de nuevo o escríbanos.", pvLoading: "Cargando…",
    footerPrivacy: "Privacidad", pending: "Pendiente", emailed: "correo enviado", notEmailed: "correo sin enviar", csvConsent: "Versión aceptada", csvConsentAt: "Fecha de aceptación", csvEmail: "Correo de confirmación",
    emailFail: "Su aceptación quedó guardada, pero no se pudo enviar el correo de confirmación ahora. Lo intentaremos la próxima vez que entre.", footer: "Términos y condiciones",
    consentFail: "No pudimos guardar ni confirmar su consentimiento en el servidor, así que la cuenta no se abrió. Revise su conexión e intente de nuevo; mientras tanto puede usar la app sin cuenta." },
  en: {
    pvTitle: "Privacy and my data", pvIntro: "Without an account we store nothing on the server: your things stay only in this browser. With an account, this is what we store:",
    pvMine: "What's stored for your account", pvEmail: "Email", pvSince: "First time", pvUses: "Times you used the app", pvConsent: "Consent",
    pvPlan: "Plan settings", pvKitchen: "My cookbook", pvReviews: "Reviews", pvYes: "Yes", pvNo: "No",
    pvGuest: "You're not signed in to an account, so nothing of yours is on the server. To remove what's in this browser, clear this site's data in your browser.",
    pvDownload: "Download my data", pvDelete: "Withdraw my consent and delete my account",
    pvDeleteHelp: "Permanently deletes your record, consent, plans, My cookbook, reviews and photos, and your account. This can't be undone. You can keep viewing recipes without an account.",
    pvConfirm: "Delete your account and all your data? This can't be undone.", pvWorking: "Deleting your data…",
    pvDone: "Your account and data were deleted. You can keep using the app without an account.",
    pvReauth: "For security, sign in to your account again and tap “Delete my account” once more.",
    pvFail: "Not everything could be deleted. Try again or write to us.", pvLoading: "Loading…",
    footerPrivacy: "Privacy",
    colConsent: "Consent", pending: "Pending", emailed: "email sent", notEmailed: "email not sent", csvConsent: "Accepted version", csvConsentAt: "Acceptance date", csvEmail: "Confirmation email",
    emailFail: "Your acceptance was saved, but the confirmation email couldn't be sent right now. We'll try again next time you sign in.", footer: "Terms and conditions",
    consentFail: "We couldn't save or confirm your consent on the server, so the account wasn't opened. Check your connection and try again; meanwhile you can use the app without an account." }
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
/* Devuelve true si se puede entrar: el registro del SERVIDOR (consents/{uid}) tiene la versión vigente, o la persona
   la aceptó en esta pantalla y se guardó allí con la hora del servidor. La copia del navegador (rcb.consent) sólo
   recuerda las casillas marcadas antes de entrar: nunca basta por sí sola (antes, si el registro no se podía leer,
   se entraba con ella). Sin registro en el servidor no se abre la cuenta; la app se sigue usando sin cuenta. */
async function consentOnUser(user) {
  let saved = null;
  try { const snap = await consentRef(user.uid).get(); saved = snap.exists ? snap.data() : null; }
  catch (err) {
    console.warn("No se leyó el consentimiento:", (err && err.code) || err);
    setAuthState("signin", cui().consentFail);
    await fbAuth.signOut().catch(() => {});
    return false;
  }
  if (saved && saved.version === CONSENT_VERSION) {
    if (!saved.emailSentAt) sendConsentEmail(user, false); // no se pudo enviar antes: se intenta otra vez
    return true;
  }
  const local = consentPending();
  if (!local) { consentChecks = new Set(); setAuthState("consent"); return false; }
  try {
    const history = saved ? [...(saved.history || []), `${saved.version}`].slice(-20) : [];
    await consentRef(user.uid).set({
      uid: user.uid, email: lower(user.email), version: CONSENT_VERSION, lang: local.lang || currentLang,
      items: local.items, acceptedAt: String(local.acceptedAt || "").slice(0, 40),
      ua: String(navigator.userAgent || "").slice(0, 200), history,
      at: firebase.firestore.FieldValue.serverTimestamp()
    });
    // Se vuelve a leer: lo que vale es lo que quedó en el servidor (con su hora), no lo que se mandó.
    const check = await consentRef(user.uid).get();
    if (!check.exists || check.data().version !== CONSENT_VERSION || !check.data().at) throw new Error("sin registro");
    sendConsentEmail(user, true);
  } catch (err) {
    console.warn("No se guardó el consentimiento en la cuenta:", (err && (err.code || err.message)) || err);
    setAuthState("consent", cui().consentFail);
    return false;
  }
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

/* ── #/privacidad: qué guardamos, descargar mis datos y borrar mi cuenta ── */
function privacySection(lang = currentLang) {
  return TERMS[lang].sections.find(([h]) => /^9\./.test(h));
}
async function myDataSnapshot() {
  const uid = authUser.uid;
  const [user, consent, planDoc, kitchenDoc, reviews] = await Promise.all([
    fbDb.collection("users").doc(uid).get(),
    consentRef(uid).get(),
    fbDb.collection("users").doc(uid).collection("data").doc("plan").get(),
    fbDb.collection("users").doc(uid).collection("data").doc("kitchen").get(),
    fbDb.collection("reviews").where("uid", "==", uid).get()
  ]);
  return { user, consent, planDoc, kitchenDoc, reviews };
}
function showPrivacy() {
  current = null;
  for (const v of ["view-home", "view-recipe", "view-plans", "view-admin", "view-mine", "view-shop", "view-terms"]) { const el = $(v); if (el) el.hidden = true; }
  const v = $("view-privacy");
  v.hidden = false;
  document.title = `${cui().pvTitle} — ${BRAND}`;
  renderPrivacyView();
  jumpTo(0);
  $("privacy-title").focus({ preventScroll: true });
}
function renderPrivacyView() {
  const v = $("view-privacy");
  if (!v || v.hidden) return;
  const tr = cui();
  const sec = privacySection();
  const para = (p) => (Array.isArray(p) ? `<ul>${p.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p>${esc(p)}</p>`);
  const signed = typeof authUser !== "undefined" && authUser && authState === "ready" && fbDb;
  v.innerHTML = `<div class="container terms-wrap">
    <header class="plans-head"><h1 class="section-title" id="privacy-title" tabindex="-1">${esc(tr.pvTitle)}</h1>
      <p class="section-sub">${esc(tr.pvIntro)}</p></header>
    <div class="terms-page"><section class="terms-sec"><h3>${esc(sec[0])}</h3>${sec[1].map(para).join("")}</section>
      <p><a href="#/terminos">${esc(ctT().viewTitle)}</a></p></div>
    <section class="privacy-mine" aria-labelledby="privacy-mine-title">
      <h2 class="plans-more-title" id="privacy-mine-title">${esc(tr.pvMine)}</h2>
      <div id="privacy-data">${signed ? `<p class="auth-loading">${esc(tr.pvLoading)}</p>` : `<p>${esc(tr.pvGuest)}</p>`}</div>
      ${signed ? `<div class="privacy-actions">
        <button type="button" class="btn btn-outline" data-privacy="download"><svg class="icon" aria-hidden="true"><use href="#i-list"/></svg><span>${esc(tr.pvDownload)}</span></button>
        <button type="button" class="btn btn-danger" data-privacy="delete"><svg class="icon" aria-hidden="true"><use href="#i-trash"/></svg><span>${esc(tr.pvDelete)}</span></button>
      </div>
      <p class="plans-help">${esc(tr.pvDeleteHelp)}</p>
      <p class="auth-msg" id="privacy-msg" role="alert" hidden></p>` : ""}
    </section>
  </div>`;
  if (signed) myDataSnapshot().then((d) => {
    const box = $("privacy-data");
    if (!box) return;
    const u = d.user.exists ? d.user.data() : {};
    const c = d.consent.exists ? d.consent.data() : null;
    const yes = (b) => esc(b ? tr.pvYes : tr.pvNo);
    box.innerHTML = `<dl class="privacy-list">
      <dt>${esc(tr.pvEmail)}</dt><dd>${esc(authUser.email)}</dd>
      <dt>${esc(tr.pvSince)}</dt><dd>${esc(fmtDate(u.firstSeen))}</dd>
      <dt>${esc(tr.pvUses)}</dt><dd>${esc(String(u.count || 0))}</dd>
      <dt>${esc(tr.pvConsent)}</dt><dd>${c ? esc(ctT().myConsent(c.version, c.at ? consentDate(c.at.toDate(), currentLang) : "")) : "—"}</dd>
      <dt>${esc(tr.pvPlan)}</dt><dd>${yes(d.planDoc.exists)}</dd>
      <dt>${esc(tr.pvKitchen)}</dt><dd>${yes(d.kitchenDoc.exists)}</dd>
      <dt>${esc(tr.pvReviews)}</dt><dd>${esc(String(d.reviews.size))}</dd>
    </dl>`;
  }).catch((err) => { const box = $("privacy-data"); if (box) box.textContent = cui().pvFail; console.warn("Mis datos:", (err && err.code) || err); });
}
function privacyMsg(text) { const el = $("privacy-msg"); if (el) { el.textContent = text; el.hidden = !text; } }

/* Todo lo de la cuenta en un archivo JSON (fechas como texto). */
async function downloadMyData() {
  const d = await myDataSnapshot();
  const plain = (x) => JSON.parse(JSON.stringify(x, (k, v) => (v && typeof v.toDate === "function" ? v.toDate().toISOString() : v)));
  const out = {
    exportedAt: new Date().toISOString(), email: authUser.email,
    user: d.user.exists ? plain(d.user.data()) : null, consent: d.consent.exists ? plain(d.consent.data()) : null,
    plan: d.planDoc.exists ? plain(d.planDoc.data()) : null, kitchen: d.kitchenDoc.exists ? plain(d.kitchenDoc.data()) : null,
    reviews: d.reviews.docs.map((r) => ({ id: r.id, ...plain(r.data()) }))
  };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 2)], { type: "application/json" }));
  a.download = `mis-datos-recetarios-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* Borrar la cuenta: Firebase exige haber entrado hace poco. Con Gmail/Yahoo/Microsoft se vuelve a entrar
   en una ventanita; con el enlace por correo se cierra la sesión y se pide entrar otra vez. Primero se borran
   los datos de Firestore (con la sesión todavía abierta) y al final la cuenta de Authentication. */
async function deleteMyAccount() {
  const tr = cui();
  if (!confirm(tr.pvConfirm)) return;
  const user = fbAuth.currentUser;
  if (!user) return;
  const recent = Date.now() - new Date(user.metadata.lastSignInTime).getTime() < 4 * 60 * 1000;
  if (!recent) {
    const pid = (user.providerData[0] || {}).providerId;
    const key = { "google.com": "google", "yahoo.com": "yahoo", "microsoft.com": "microsoft", "apple.com": "apple" }[pid];
    try {
      if (!key) throw Object.assign(new Error("enlace"), { code: "auth/requires-recent-login" });
      await user.reauthenticateWithPopup(providerFor(key));
    } catch (err) {
      if (err && err.code === "auth/popup-closed-by-user") return;
      privacyMsg(tr.pvReauth);
      await signOut();
      location.hash = "#/privacidad";
      openSignIn(tr.pvReauth);
      return;
    }
  }
  privacyMsg(tr.pvWorking);
  const uid = user.uid;
  try {
    await flushPlanSave().catch(() => {});
    stopWatchingUser();
    const [reviews, reports] = await Promise.all([
      fbDb.collection("reviews").where("uid", "==", uid).get(),
      fbDb.collection("reports").where("uid", "==", uid).get()
    ]);
    const batch = fbDb.batch();
    for (const r of reviews.docs) {
      batch.delete(r.ref);
      batch.delete(fbDb.collection("reviewPhotos").doc(r.id));
      batch.delete(fbDb.collection("reviewPhotos").doc(`${r.id}__draft`));
    }
    for (const r of reports.docs) batch.delete(r.ref);
    const data = fbDb.collection("users").doc(uid).collection("data");
    batch.delete(data.doc("plan"));
    batch.delete(data.doc("kitchen"));
    batch.delete(consentRef(uid));
    batch.delete(fbDb.collection("users").doc(uid));
    await batch.commit();
    if (authIsAdmin) await fbDb.collection("admins").doc(lower(user.email)).delete().catch(() => {}); // el dueño no se puede quitar
    // Lo de esta cuenta en este navegador también.
    for (const k of [`rcb.plan.${uid}`, `rcb.kitchen.${uid}`, `rcb.reviewName.${uid}`, CONSENT_STORE]) authStore(k, null);
    await user.delete();
    usePlanOwner(""); applyPlan(null);
    if (typeof useKitchenOwner === "function") useKitchenOwner("");
    location.hash = "#/";
    toast(tr.pvDone, true);
  } catch (err) {
    console.warn("Borrar cuenta:", (err && (err.code || err.message)) || err);
    privacyMsg(tr.pvFail);
  }
}
document.addEventListener("click", (e) => {
  const b = e.target.closest && e.target.closest("[data-privacy]");
  if (!b) return;
  if (b.dataset.privacy === "download") downloadMyData().catch(() => privacyMsg(cui().pvFail));
  if (b.dataset.privacy === "delete") deleteMyAccount();
});
