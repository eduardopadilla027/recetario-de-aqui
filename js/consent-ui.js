/* Recetarios de Aquí · Consentimiento en la pantalla de entrada, en la cuenta y en #/terminos.
 *
 * 1. ANTES de entrar (js/auth.js, v4.41): la persona escribe su correo y la app mira si está registrado
 *    (registered/{correo}). Si NO lo está, sale el estado "terms": resumen, "Leer los términos completos", las tres
 *    declaraciones (CONSENT_ITEMS, js/consent.js, ya sin casillas) y el botón "Acepto los términos y condiciones".
 *    Lo aceptado se guarda en este navegador (rcb.consent) con la hora. Si YA está registrado, no ve los términos.
 * 2. AL ENTRAR (onUser en auth.js → consentOnUser): si la cuenta ya tiene un consentimiento guardado (de cualquier
 *    versión) entra directo. Si no, se guarda lo aceptado en Firestore consents/{uid} (versión, declaraciones, idioma,
 *    hora local y del servidor, navegador e historial), se marca registered/{correo} y se pide al servidor
 *    (api/consent-email.js) el correo de confirmación de la primera vez; al enviarse se anota emailSentAt.
 *    Si entró sin haber aceptado aquí (p. ej. con otra cuenta de Google), sale el estado "consent" con el botón.
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
    pvDeleteHelp: "Borra para siempre su registro, su consentimiento, sus planes, Mi recetario, sus reseñas y fotos y su cuenta. No se puede deshacer. Para volver a ver las recetas tendría que registrarse otra vez.",
    pvConfirm: "¿Borrar su cuenta y todos sus datos? No se puede deshacer.", pvWorking: "Borrando sus datos…",
    pvDone: "Su cuenta y sus datos se borraron. Gracias por usar Recetarios de Aquí.",
    pvReauth: "Por seguridad, entre otra vez con su cuenta y vuelva a pulsar «Borrar mi cuenta».",
    pvFail: "No se pudo borrar todo. Inténtelo de nuevo o escríbanos.", pvLoading: "Cargando…",
    footerPrivacy: "Privacidad", pending: "Pendiente", emailed: "correo enviado", notEmailed: "correo sin enviar",
    unmailed: (n) => (n === 1 ? "1 cuenta aceptó los términos y no ha recibido el correo de confirmación:" : `${n} cuentas aceptaron los términos y no han recibido el correo de confirmación:`),
    unmailedMore: (n) => `y ${n} más`, unmailedHelp: "Se vuelve a intentar cuando la persona entra. Si no baja, revise RESEND_API_KEY en Vercel.", csvConsent: "Versión aceptada", csvConsentAt: "Fecha de aceptación", csvEmail: "Correo de confirmación",
    emailFail: "Su aceptación quedó guardada, pero no se pudo enviar el correo de confirmación ahora. Lo intentaremos la próxima vez que entre.", footer: "Términos y condiciones",
    consentFail: "No pudimos guardar ni confirmar su consentimiento en el servidor, así que la cuenta no se abrió. Revise su conexión e intente de nuevo." },
  en: {
    pvTitle: "Privacy and my data", pvIntro: "Without an account we store nothing on the server: your things stay only in this browser. With an account, this is what we store:",
    pvMine: "What's stored for your account", pvEmail: "Email", pvSince: "First time", pvUses: "Times you used the app", pvConsent: "Consent",
    pvPlan: "Plan settings", pvKitchen: "My cookbook", pvReviews: "Reviews", pvYes: "Yes", pvNo: "No",
    pvGuest: "You're not signed in to an account, so nothing of yours is on the server. To remove what's in this browser, clear this site's data in your browser.",
    pvDownload: "Download my data", pvDelete: "Withdraw my consent and delete my account",
    pvDeleteHelp: "Permanently deletes your record, consent, plans, My cookbook, reviews and photos, and your account. This can't be undone. To see the recipes again you'd have to sign up again.",
    pvConfirm: "Delete your account and all your data? This can't be undone.", pvWorking: "Deleting your data…",
    pvDone: "Your account and data were deleted. Thank you for using Recetarios de Aquí.",
    pvReauth: "For security, sign in to your account again and tap “Delete my account” once more.",
    pvFail: "Not everything could be deleted. Try again or write to us.", pvLoading: "Loading…",
    footerPrivacy: "Privacy",
    colConsent: "Consent", pending: "Pending", emailed: "email sent", notEmailed: "email not sent",
    unmailed: (n) => (n === 1 ? "1 account accepted the terms and hasn't received the confirmation email:" : `${n} accounts accepted the terms and haven't received the confirmation email:`),
    unmailedMore: (n) => `and ${n} more`, unmailedHelp: "It's retried when the person signs in. If it doesn't go down, check RESEND_API_KEY in Vercel.", csvConsent: "Accepted version", csvConsentAt: "Acceptance date", csvEmail: "Confirmation email",
    emailFail: "Your acceptance was saved, but the confirmation email couldn't be sent right now. We'll try again next time you sign in.", footer: "Terms and conditions",
    consentFail: "We couldn't save or confirm your consent on the server, so the account wasn't opened. Check your connection and try again." }
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

/* ── Texto completo ── */
function termsBodyHTML(lang = currentLang) {
  const T = TERMS[lang];
  const para = (p) => (Array.isArray(p) ? `<ul>${p.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : `<p>${esc(p)}</p>`);
  return `<p class="terms-meta">${esc(T.meta(CONSENT_VERSION))}</p>
    ${T.sections.map(([h, ps]) => `<section class="terms-sec"><h3>${esc(h)}</h3>${ps.map(para).join("")}</section>`).join("")}`;
}
/* Los términos con un solo botón "Acepto los términos y condiciones": antes de entrar, para un correo que no está
   registrado (mode "new"), o ya dentro, si la cuenta no tiene consentimiento guardado (mode "update"). Las tres
   declaraciones se siguen mostrando como lista (antes eran tres casillas que había que marcar). */
function consentBlockHTML(mode = "new") {
  const T = ctT();
  return `<section class="consent-block" aria-labelledby="consent-title">
    <h2 class="auth-h2" id="consent-title">${esc(mode === "update" ? T.consentIntro : T.title)}</h2>
    ${mode === "new" ? `<p class="auth-text">${esc(T.intro)}</p>` : ""}
    <p class="consent-sum-title">${esc(T.summaryTitle)}</p>
    <ul class="consent-summary">${T.summary.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    <details class="consent-full"><summary>${esc(T.readAll)}</summary><div class="terms-box" tabindex="0">${termsBodyHTML()}</div></details>
    <p class="consent-sum-title">${esc(T.accept)}</p>
    <ul class="consent-summary consent-items">${CONSENT_ITEMS[currentLang].map(([, txt]) => `<li>${esc(txt)}</li>`).join("")}</ul>
    <div class="auth-actions"><button type="button" class="btn btn-primary" data-consent-accept>${esc(T.acceptBtn)}</button>
      ${mode === "update" ? signOutBtn() : `<button type="button" class="btn btn-ghost auth-link" data-auth="restart">${esc(at().useOther)}</button>`}</div>
  </section>`;
}
/* "Acepto": queda aceptado en este navegador (las tres declaraciones) y se sigue: ya dentro, se guarda en la cuenta;
   antes de entrar, se pasa a escoger cómo entrar con ese correo (auth.js, showMethod). */
function acceptConsent() {
  writeLocalConsent({ version: CONSENT_VERSION, items: ALL_ITEMS(), acceptedAt: new Date().toISOString(), lang: currentLang });
  if (fbAuth && fbAuth.currentUser) { setAuthState("loading"); onUser(fbAuth.currentUser); }
  else showMethod();
}

/* ── En la cuenta ── */
const consentRef = (uid) => fbDb.collection("consents").doc(uid);
/* Marca el correo como registrado (registered/{correo}), lo que la pantalla de entrada consulta antes de entrar.
   Sólo guarda la hora; las reglas no dejan listar la colección, sólo leer un correo exacto. */
const registeredRef = (email) => fbDb.collection("registered").doc(lower(email));
async function markRegistered(user) {
  try {
    const ref = registeredRef(user.email);
    if (!(await ref.get()).exists) await ref.set({ at: firebase.firestore.FieldValue.serverTimestamp() });
  } catch (err) { console.warn("No se marcó el registro:", (err && err.code) || err); }
}
/* Devuelve true si se puede entrar: el registro del SERVIDOR (consents/{uid}) existe (de cualquier versión: quien ya
   aceptó no vuelve a ver los términos, v4.41), o la persona los aceptó en esta pantalla y se guardó allí con la hora
   del servidor. La copia del navegador (rcb.consent) sólo
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
  if (saved) {
    markRegistered(user);
    if (!saved.emailSentAt) sendConsentEmail(user, false); // no se pudo enviar antes: se intenta otra vez
    return true;
  }
  const local = consentPending();
  if (!local) { setAuthState("consent"); return false; }
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
    await markRegistered(user);
    sendConsentEmail(user, true); // la confirmación de la primera vez
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
  backfillRegistered();
}
/* Las cuentas que aceptaron antes de v4.41 no tenían registered/{correo}: al abrir #/admin se crean las que falten,
   para que la pantalla de entrada las reconozca sin pedirles los términos otra vez. */
async function backfillRegistered() {
  try {
    const have = new Set((await fbDb.collection("registered").get()).docs.map((d) => d.id));
    const missing = [...new Set([...adminConsents.values()].map((c) => lower(c.email)).filter((e) => e && !have.has(e)))];
    for (let i = 0; i < missing.length; i += 400) {
      const batch = fbDb.batch();
      for (const e of missing.slice(i, i + 400)) batch.set(registeredRef(e), { at: firebase.firestore.FieldValue.serverTimestamp() });
      await batch.commit();
    }
  } catch (err) { console.warn("No se completaron los registros:", (err && err.code) || err); }
}
function consentCellHTML(uid) {
  const c = adminConsents.get(uid);
  if (!c) return `<span class="role-tag is-blocked">${esc(cui().pending)}</span>`;
  const cur = c.version === CONSENT_VERSION;
  return `<span class="role-tag${cur ? " is-admin" : " is-blocked"}">v${esc(c.version)}</span> <span class="admin-date">${esc(fmtDate(c.at))}</span>
    <span class="consent-mail">${esc(c.emailSentAt ? cui().emailed : cui().notEmailed)}</span>`;
}
/* Las cuentas con el consentimiento guardado y sin correo de confirmación: antes sólo se veía fila por fila (revisión 2, N9). */
function consentUnmailedHTML(users) {
  const list = users.filter((u) => { const c = adminConsents.get(u.id); return c && !c.emailSentAt; }).map((u) => u.email || u.id);
  if (!list.length) return "";
  const shown = list.slice(0, 20);
  return `<p class="admin-intro" role="note">${esc(cui().unmailed(list.length))} ${esc(shown.join(", "))}${list.length > shown.length ? ` ${esc(cui().unmailedMore(list.length - shown.length))}` : ""}. ${esc(cui().unmailedHelp)}</p>`;
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

document.addEventListener("click", (e) => { if (e.target.closest && e.target.closest("[data-consent-accept]")) acceptConsent(); });

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
    batch.delete(registeredRef(user.email));
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
