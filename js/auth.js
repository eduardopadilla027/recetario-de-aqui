/* Recetarios de Aquí · Acceso con cuenta de correo (#/admin para administradores).
 *
 * Para usar la app hay que entrar con una cuenta de correo validada por su
 * propio proveedor: Gmail (Google), Outlook/Hotmail (Microsoft), Yahoo, iCloud
 * (Apple) o cualquier otro correo con un enlace de validación que llega al buzón.
 * Lo hace Firebase Authentication: la app NUNCA ve ni guarda contraseñas.
 *
 * En Cloud Firestore se guarda sólo, por persona (users/{uid}): el correo, cuántas
 * veces ha usado la app (count: +1 por sesión del navegador; los administradores no
 * cuentan), la primera y la última vez, y `blocked` si un administrador le quitó el acceso. Los ajustes de Planes van
 * aparte, en users/{uid}/data/plan, y sólo los lee la persona dueña. Los administradores son
 * los correos que tienen un documento en admins/{correo}. El dueño está fijo en
 * firestore.rules: al entrar, la app le crea su documento con owner: true (a los
 * demás ese intento se les niega y no pasa nada). ARQUITECTURA.md §7.3. Las reglas de firestore.rules
 * impiden que un usuario lea a otros o cambie su conteo más allá de +1.
 *
 * Depende de globales de app.js (currentLang, $, esc, switchLang, BRAND, route) y
 * de AUTH_CONFIG (js/auth-config.js). El SDK de Firebase (compat) se carga aquí. */

const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.14.1/";
const AUTH_EMAIL_KEY = "rcb.authEmail";      // correo al que se mandó el enlace (este navegador)
const AUTH_USE_KEY = "rcb.useCounted.";      // + uid: el uso de esta sesión ya se contó

const AUTH_T = {
  es: {
    title: "Entre a Recetarios de Aquí",
    intro: "Para usar el recetario, regístrese con su cuenta de correo. Su propio proveedor de correo la valida.",
    privacy: "No guardamos contraseñas: sólo su correo y cuántas veces usa la app.",
    contact: "¿Preguntas o problemas para entrar? Escríbanos a",
    inAppTitle: "Está dentro de Facebook o Instagram",
    inAppText: "Desde aquí Gmail y Yahoo no dejan entrar. Abra la app en su navegador:",
    openChrome: "Abrir en Chrome",
    openSafari: "Abrir en Safari",
    inAppIfNot: "Si no se abre:",
    inAppSteps: ["Toque los tres puntitos ⋯ arriba a la derecha.", "Escoja «Abrir en el navegador» (o «Abrir en navegador externo»)."],
    inAppEmail: "O entre aquí mismo con su correo (también Gmail): escríbalo abajo en «¿Otro correo?» y le enviamos un enlace para entrar.",
    inAppBlocked: "Dentro de Facebook o Instagram, Gmail y Yahoo no dejan entrar. Abra la app en su navegador (arriba) o use «¿Otro correo?».",
    pick: "Escoja su proveedor de correo",
    providers: {
      google: ["Gmail", "Cuentas de Google"],
      microsoft: ["Outlook", "Hotmail, Live y MSN"],
      yahoo: ["Yahoo Mail", "Cuentas de Yahoo"],
      apple: ["iCloud", "Cuentas de Apple"]
    },
    other: "¿Otro correo?",
    otherHelp: "Escríbalo y le enviamos un enlace de validación a su buzón.",
    emailLabel: "Correo electrónico",
    sendLink: "Enviar enlace",
    sentTitle: "Revise su correo",
    sent: (e) => `Le enviamos un enlace a ${e}. Ábralo en este mismo dispositivo para entrar. Si no lo ve, busque en "Correo no deseado".`,
    useOther: "Usar otro correo",
    confirmTitle: "Confirme su correo",
    confirm: "Abrió el enlace en otro navegador. Escriba el mismo correo al que se lo enviamos.",
    confirmBtn: "Entrar",
    verifyTitle: "Valide su correo",
    verify: (e) => `Le enviamos un mensaje a ${e} para validar la cuenta. Abra el enlace del mensaje y luego pulse "Ya lo validé".`,
    verified: "Ya lo validé",
    resend: "Reenviar mensaje",
    resent: "Mensaje reenviado.",
    notYet: "Todavía no aparece validado. Abra el enlace del mensaje y vuelva a intentar.",
    blockedTitle: "Acceso suspendido",
    blocked: "Un administrador suspendió el acceso de esta cuenta.",
    signOut: "Salir",
    loading: "Cargando…",
    unconfiguredTitle: "Acceso sin configurar",
    unconfigured: "Falta la configuración de Firebase en js/auth-config.js (vea ARQUITECTURA.md §7.3).",
    errors: {
      "auth/popup-closed-by-user": "Cerró la ventana antes de terminar.",
      "auth/cancelled-popup-request": "Cerró la ventana antes de terminar.",
      "auth/operation-not-allowed": "Ese proveedor todavía no está activado. Escoja otro.",
      "auth/account-exists-with-different-credential": "Ese correo ya está registrado con otro proveedor. Entre con ese.",
      "auth/invalid-email": "El correo no es válido.",
      "auth/invalid-action-code": "El enlace ya se usó o venció. Pida otro.",
      "auth/expired-action-code": "El enlace venció. Pida otro.",
      "auth/unauthorized-domain": "Este sitio no está autorizado en Firebase (Authentication → Dominios autorizados).",
      "auth/unauthorized-continue-uri": "No se pudo enviar el enlace: este sitio no está autorizado en Firebase (Authentication → Dominios autorizados).",
      "auth/quota-exceeded": "Hoy ya se enviaron demasiados enlaces por correo. Entre con Gmail o Yahoo, o inténtelo mañana.",
      "auth/network-request-failed": "Sin conexión. Revise su internet.",
      "auth/too-many-requests": "Demasiados intentos. Espere unos minutos.",
      "permission-denied": "No tiene permiso para esa acción.",
      generic: "No se pudo completar. Intente de nuevo."
    },
    // barra y panel de administración
    admin: "Administrador",
    account: "Cuenta",
    adminTitle: "Administración de usuarios",
    adminIntro: "Usuarios registrados, cuántas veces han usado la app y su acceso. Sólo se guarda el correo: no hay contraseñas.",
    statUsers: "Usuarios",
    statUses: "Usos en total",
    statActive: "Activos en 7 días",
    search: "Buscar correo",
    refresh: "Actualizar",
    exportCsv: "Exportar CSV",
    colEmail: "Correo",
    colCount: "Veces",
    colFirst: "Primera vez",
    colLast: "Última vez",
    colRole: "Rol",
    colActions: "Acciones",
    roleAdmin: "Administrador",
    roleOwner: "Dueño",
    roleUser: "Usuario",
    blockedTag: "Suspendido",
    makeAdmin: "Hacer admin",
    removeAdmin: "Quitar admin",
    block: "Suspender",
    unblock: "Reactivar",
    you: "usted",
    none: "No hay usuarios que coincidan.",
    confirmBlock: (e) => `¿Suspender el acceso de ${e}?`,
    confirmRemoveAdmin: (e) => `¿Quitarle el rol de administrador a ${e}?`,
    noAccess: "Esta página es sólo para administradores."
  },
  en: {
    title: "Sign in to Recetarios de Aquí",
    intro: "To use the recipe book, sign up with your email account. Your own email provider verifies it.",
    privacy: "We never store passwords: only your email and how many times you use the app.",
    contact: "Questions or trouble signing in? Write to us at",
    inAppTitle: "You're inside Facebook or Instagram",
    inAppText: "Gmail and Yahoo don't allow signing in from here. Open the app in your browser:",
    openChrome: "Open in Chrome",
    openSafari: "Open in Safari",
    inAppIfNot: "If it doesn't open:",
    inAppSteps: ["Tap the three dots ⋯ at the top right.", "Choose “Open in browser” (or “Open in external browser”)."],
    inAppEmail: "Or sign in right here with your email (Gmail too): type it below under “Another email?” and we'll send you a sign-in link.",
    inAppBlocked: "Inside Facebook or Instagram, Gmail and Yahoo don't allow signing in. Open the app in your browser (see above) or use “Another email?”.",
    pick: "Choose your email provider",
    providers: {
      google: ["Gmail", "Google accounts"],
      microsoft: ["Outlook", "Hotmail, Live and MSN"],
      yahoo: ["Yahoo Mail", "Yahoo accounts"],
      apple: ["iCloud", "Apple accounts"]
    },
    other: "Another email?",
    otherHelp: "Type it and we'll send a verification link to your inbox.",
    emailLabel: "Email address",
    sendLink: "Send link",
    sentTitle: "Check your email",
    sent: (e) => `We sent a link to ${e}. Open it on this same device to sign in. If you don't see it, check your spam folder.`,
    useOther: "Use another email",
    confirmTitle: "Confirm your email",
    confirm: "You opened the link in another browser. Type the same email we sent it to.",
    confirmBtn: "Sign in",
    verifyTitle: "Verify your email",
    verify: (e) => `We sent a message to ${e} to verify the account. Open the link in it, then tap "I verified it".`,
    verified: "I verified it",
    resend: "Resend message",
    resent: "Message sent again.",
    notYet: "It doesn't show as verified yet. Open the link in the message and try again.",
    blockedTitle: "Access suspended",
    blocked: "An administrator suspended this account's access.",
    signOut: "Sign out",
    loading: "Loading…",
    unconfiguredTitle: "Sign-in not configured",
    unconfigured: "The Firebase settings are missing in js/auth-config.js (see ARQUITECTURA.md §7.3).",
    errors: {
      "auth/popup-closed-by-user": "You closed the window before finishing.",
      "auth/cancelled-popup-request": "You closed the window before finishing.",
      "auth/operation-not-allowed": "That provider isn't enabled yet. Pick another one.",
      "auth/account-exists-with-different-credential": "That email is already registered with another provider. Sign in with that one.",
      "auth/invalid-email": "That email isn't valid.",
      "auth/invalid-action-code": "The link was already used or expired. Ask for a new one.",
      "auth/expired-action-code": "The link expired. Ask for a new one.",
      "auth/unauthorized-domain": "This site isn't authorized in Firebase (Authentication → Authorized domains).",
      "auth/unauthorized-continue-uri": "The link couldn't be sent: this site isn't authorized in Firebase (Authentication → Authorized domains).",
      "auth/quota-exceeded": "Too many email links were sent today. Sign in with Gmail or Yahoo, or try again tomorrow.",
      "auth/network-request-failed": "No connection. Check your internet.",
      "auth/too-many-requests": "Too many attempts. Wait a few minutes.",
      "permission-denied": "You don't have permission for that.",
      generic: "Couldn't complete it. Please try again."
    },
    admin: "Admin",
    account: "Account",
    adminTitle: "User administration",
    adminIntro: "Registered users, how many times they've used the app and their access. Only the email is stored: no passwords.",
    statUsers: "Users",
    statUses: "Total uses",
    statActive: "Active in 7 days",
    search: "Search email",
    refresh: "Refresh",
    exportCsv: "Export CSV",
    colEmail: "Email",
    colCount: "Uses",
    colFirst: "First time",
    colLast: "Last time",
    colRole: "Role",
    colActions: "Actions",
    roleAdmin: "Admin",
    roleOwner: "Owner",
    roleUser: "User",
    blockedTag: "Suspended",
    makeAdmin: "Make admin",
    removeAdmin: "Remove admin",
    block: "Suspend",
    unblock: "Restore",
    you: "you",
    none: "No users match.",
    confirmBlock: (e) => `Suspend ${e}'s access?`,
    confirmRemoveAdmin: (e) => `Remove admin role from ${e}?`,
    noAccess: "This page is for administrators only."
  }
};

function at() { return AUTH_T[currentLang]; }

/* ------------------------------------------------------------ estado ---- */

let fbAuth = null;
let fbDb = null;
let authUser = null;          // usuario de Firebase con el correo validado
let authIsAdmin = false;
let authState = "loading";    // loading | signin | sent | confirm | verify | blocked | unconfigured | ready
let authMessage = "";         // error o aviso bajo el formulario
let authSentTo = "";
let adminUsers = [];          // filas cargadas en #/admin
let adminEmails = new Set();
let ownerEmails = new Set();  // administradores fijos (owner: true): sin acciones
let adminFilter = "";

const lower = (s) => String(s || "").trim().toLowerCase();
function authStore(key, value) {
  try { if (value === undefined) return localStorage.getItem(key); if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); }
  catch { return null; }
}
function sessionFlag(key, set) {
  try { if (set) sessionStorage.setItem(key, "1"); return sessionStorage.getItem(key) === "1"; }
  catch { return false; }
}
function authError(err) {
  const code = (err && err.code) || "";
  return at().errors[code] || at().errors.generic;
}

function authConfigured() {
  return typeof AUTH_CONFIG === "object" && AUTH_CONFIG.firebase && AUTH_CONFIG.firebase.apiKey;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src; s.onload = resolve; s.onerror = () => reject(new Error("No se cargó " + src));
    document.head.appendChild(s);
  });
}

/* ------------------------------------------------------------ pantalla de entrada ---- */

const PROVIDER_MARKS = {
  // Logo original de Gmail (la "M" en cuatro colores), no una "G" de texto.
  google: '<span class="pmark pmark-google" aria-hidden="true"><svg viewBox="52 42 88 66"><path fill="#4285F4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/><path fill="#34A853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/><path fill="#FBBC04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/><path fill="#EA4335" d="M72 74V48l24 18 24-18v26L96 92"/><path fill="#C5221F" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg></span>',
  microsoft: '<span class="pmark pmark-ms" aria-hidden="true"><i></i><i></i><i></i><i></i></span>',
  yahoo: '<span class="pmark pmark-yahoo" aria-hidden="true">Y!</span>',
  apple: '<span class="pmark pmark-apple" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.5-1-2.5-3.7zM14.2 5.8c.6-.8 1.1-1.8 1-2.8-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.3z"/></svg></span>'
};

function gateShell(title, body) {
  const es = currentLang === "es";
  return `
    <div class="auth-card">
      <div class="auth-top">
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 900 600"><use href="#flag-pr"/></svg></span>
        <span class="brand-text"><span class="brand-name">${esc(BRAND)}</span><span class="brand-sub">Cocina Boricua</span></span>
        <div class="lang-toggle auth-lang" role="group" aria-label="${es ? "Idioma" : "Language"}">
          <button type="button" class="lang-btn" data-auth-lang="es" lang="es" aria-pressed="${es}">ES</button>
          <button type="button" class="lang-btn" data-auth-lang="en" lang="en" aria-pressed="${!es}">EN</button>
        </div>
      </div>
      <h1 class="auth-title" id="auth-title" tabindex="-1">${esc(title)}</h1>
      ${body}
      <p class="auth-msg" id="auth-msg" role="alert"${authMessage ? "" : " hidden"}>${esc(authMessage)}</p>
      ${installButtonHTML("auth-install")}
      <p class="auth-contact">${esc(at().contact)} <a href="mailto:${esc(CONTACT_EMAIL)}">${esc(CONTACT_EMAIL)}</a></p>
    </div>`;
}

/* Dentro de Facebook, Instagram o Messenger (los anuncios abren ahí) Google bloquea la
   entrada ("disallowed_useragent") y Yahoo tampoco funciona bien. Aviso con un botón para
   saltar al navegador: en Android un enlace intent:// a Chrome; en iPhone x-safari-https://
   (iOS 17 o más nuevo). Si no abre, los pasos del menú ⋯. El enlace por correo sí funciona
   aquí: el correo abre el enlace fuera de Facebook. installDevice() está en install.js. */
function externalBrowserURL(d) {
  const q = new URLSearchParams(location.search);
  q.delete("fbclid");
  const rest = location.host + location.pathname + (q.toString() ? "?" + q : "");
  if (d.android) return `intent://${rest}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent("https://" + rest)};end`;
  if (d.ios) return `x-safari-https://${rest}`;
  return "";
}

function inAppNoticeHTML() {
  const d = installDevice();
  if (!d.inApp) return "";
  const tr = at();
  const url = externalBrowserURL(d);
  const btn = url
    ? `<a class="btn btn-primary inapp-open" href="${esc(url)}">${esc(d.android ? tr.openChrome : tr.openSafari)}</a>`
    : "";
  return `
    <section class="inapp-notice" aria-labelledby="inapp-title">
      <h2 class="inapp-title" id="inapp-title"><svg class="icon" aria-hidden="true"><use href="#i-alert"/></svg>${esc(tr.inAppTitle)}</h2>
      <p>${esc(tr.inAppText)}</p>
      <div class="inapp-actions">
        ${btn}
        <button type="button" class="btn btn-outline btn-sm" data-install="copy">${esc(it().copy)}</button>
      </div>
      ${url ? `<p class="inapp-if">${esc(tr.inAppIfNot)}</p>` : ""}
      <ol class="install-steps">${tr.inAppSteps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <p class="inapp-email">${esc(tr.inAppEmail)}</p>
    </section>`;
}

function signOutBtn() {
  return `<button type="button" class="btn btn-ghost auth-link" data-auth="signout">${esc(at().signOut)}</button>`;
}

function renderGate() {
  const gate = $("auth-gate");
  const tr = at();
  const p = (AUTH_CONFIG && AUTH_CONFIG.providers) || {};
  let html;
  switch (authState) {
    case "unconfigured":
      html = gateShell(tr.unconfiguredTitle, `<p class="auth-text">${esc(tr.unconfigured)}</p>`);
      break;
    case "loading":
      html = gateShell(tr.title, `<p class="auth-text auth-loading">${esc(tr.loading)}</p>`);
      break;
    case "sent":
      html = gateShell(tr.sentTitle, `
        <p class="auth-text">${esc(tr.sent(authSentTo))}</p>
        <button type="button" class="btn btn-outline" data-auth="restart">${esc(tr.useOther)}</button>`);
      break;
    case "confirm":
      html = gateShell(tr.confirmTitle, `
        <p class="auth-text">${esc(tr.confirm)}</p>
        <form class="auth-form" data-auth-form="confirm" novalidate>
          <label class="auth-label" for="auth-email">${esc(tr.emailLabel)}</label>
          <div class="auth-row">
            <input class="auth-input" id="auth-email" type="email" autocomplete="email" inputmode="email" required>
            <button type="submit" class="btn btn-primary">${esc(tr.confirmBtn)}</button>
          </div>
        </form>`);
      break;
    case "verify":
      html = gateShell(tr.verifyTitle, `
        <p class="auth-text">${esc(tr.verify(authUser ? authUser.email : ""))}</p>
        <div class="auth-actions">
          <button type="button" class="btn btn-primary" data-auth="checkverified">${esc(tr.verified)}</button>
          <button type="button" class="btn btn-outline" data-auth="resend">${esc(tr.resend)}</button>
          ${signOutBtn()}
        </div>`);
      break;
    case "blocked":
      html = gateShell(tr.blockedTitle, `<p class="auth-text">${esc(tr.blocked)}</p><div class="auth-actions">${signOutBtn()}</div>`);
      break;
    default: { // signin
      const buttons = ["google", "microsoft", "yahoo", "apple"].filter((k) => p[k]).map((k) => `
        <button type="button" class="provider-btn" data-provider="${k}">
          ${PROVIDER_MARKS[k]}
          <span class="provider-text"><span class="provider-name">${esc(tr.providers[k][0])}</span><span class="provider-sub">${esc(tr.providers[k][1])}</span></span>
        </button>`).join("");
      const emailForm = p.email ? `
        <div class="auth-or"><span>${esc(tr.other)}</span></div>
        <form class="auth-form" data-auth-form="link" novalidate>
          <label class="auth-label" for="auth-email">${esc(tr.otherHelp)}</label>
          <div class="auth-row">
            <input class="auth-input" id="auth-email" type="email" autocomplete="email" inputmode="email" placeholder="${esc(tr.emailLabel)}" aria-label="${esc(tr.emailLabel)}" required>
            <button type="submit" class="btn btn-primary"><svg class="icon" aria-hidden="true"><use href="#i-mail"/></svg>${esc(tr.sendLink)}</button>
          </div>
        </form>` : "";
      html = gateShell(tr.title, `
        ${inAppNoticeHTML()}
        <p class="auth-text">${esc(tr.intro)}</p>
        <h2 class="auth-h2">${esc(tr.pick)}</h2>
        <div class="provider-grid">${buttons}</div>
        ${emailForm}
        <p class="auth-privacy"><svg class="icon" aria-hidden="true"><use href="#i-lock"/></svg>${esc(tr.privacy)}</p>`);
    }
  }
  gate.innerHTML = html;
}

function setAuthState(state, message = "") {
  const changed = state !== authState;
  authState = state;
  authMessage = message;
  if (state === "ready") {
    document.body.classList.remove("auth-locked");
    $("auth-gate").hidden = true;
    $("auth-gate").innerHTML = "";
    renderAccountBar();
    return;
  }
  document.body.classList.add("auth-locked");
  $("auth-gate").hidden = false;
  renderGate();
  if (changed && state !== "loading") { const h = $("auth-title"); if (h) h.focus({ preventScroll: true }); }
}

function showAuthMessage(message) {
  authMessage = message;
  const el = $("auth-msg");
  if (el) { el.textContent = message; el.hidden = !message; }
}

/* ------------------------------------------------------------ barra de la cuenta ---- */

function renderAccountBar() {
  const box = $("account-bar");
  if (!box) return;
  if (!authUser || authState !== "ready") { box.hidden = true; box.innerHTML = ""; $("nav-admin").hidden = true; return; }
  const tr = at();
  $("nav-admin").hidden = !authIsAdmin;
  box.hidden = false;
  box.innerHTML = `
    <span class="account-email" title="${esc(authUser.email)}">${esc(authUser.email)}</span>
    <button type="button" class="nav-link account-out" data-auth="signout" title="${esc(authUser.email)}">
      <svg class="icon" aria-hidden="true"><use href="#i-logout"/></svg><span>${esc(tr.signOut)}</span>
    </button>`;
  box.setAttribute("aria-label", tr.account);
}

/* ------------------------------------------------------------ acciones de entrada ---- */

function providerFor(key) {
  const fb = firebase.auth;
  if (key === "google") { const pr = new fb.GoogleAuthProvider(); pr.setCustomParameters({ prompt: "select_account" }); return pr; }
  const pr = new fb.OAuthProvider({ microsoft: "microsoft.com", yahoo: "yahoo.com", apple: "apple.com" }[key]);
  pr.addScope("email");
  if (key === "microsoft") pr.setCustomParameters({ prompt: "select_account" });
  return pr;
}

async function signInWith(key) {
  showAuthMessage("");
  // Dentro de Facebook/Instagram Google mostraría su página de error: mejor explicarlo aquí.
  if (installDevice().inApp) {
    showAuthMessage(at().inAppBlocked);
    const n = document.querySelector(".inapp-notice");
    if (n) n.scrollIntoView({ block: "start" });
    return;
  }
  const provider = providerFor(key);
  try {
    await fbAuth.signInWithPopup(provider);
  } catch (err) {
    if (err.code === "auth/popup-blocked" || err.code === "auth/operation-not-supported-in-this-environment") {
      try { await fbAuth.signInWithRedirect(provider); } catch (e2) { showAuthMessage(authError(e2)); }
    } else {
      showAuthMessage(authError(err));
    }
  }
}

function linkSettings() {
  return { url: location.origin + location.pathname, handleCodeInApp: true };
}

async function sendLink(email) {
  email = lower(email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthMessage(at().errors["auth/invalid-email"]); return; }
  try {
    await fbAuth.sendSignInLinkToEmail(email, linkSettings());
    authStore(AUTH_EMAIL_KEY, email);
    authSentTo = email;
    setAuthState("sent");
  } catch (err) { showAuthMessage(authError(err)); }
}

async function completeLink(email) {
  email = lower(email);
  try {
    await fbAuth.signInWithEmailLink(email, location.href);
    authStore(AUTH_EMAIL_KEY, null);
    // Quitar los parámetros del enlace de la dirección (conserva la ruta #/…).
    history.replaceState(null, "", location.pathname + location.hash);
  } catch (err) {
    setAuthState(authState === "confirm" ? "confirm" : "signin", authError(err));
    if (err.code === "auth/invalid-action-code" || err.code === "auth/expired-action-code") history.replaceState(null, "", location.pathname + location.hash);
  }
}

async function checkVerified() {
  if (!authUser) return;
  try {
    await authUser.reload();
    if (fbAuth.currentUser && fbAuth.currentUser.emailVerified) {
      await fbAuth.currentUser.getIdToken(true); // el token nuevo lleva email_verified para las reglas
      await onUser(fbAuth.currentUser);
    } else showAuthMessage(at().notYet);
  } catch (err) { showAuthMessage(authError(err)); }
}

async function resendVerification() {
  try { await authUser.sendEmailVerification(linkSettings()); showAuthMessage(at().resent); }
  catch (err) { showAuthMessage(authError(err)); }
}

async function signOut() {
  if (authUser) { try { sessionStorage.removeItem(AUTH_USE_KEY + authUser.uid); } catch { /* sin almacenamiento */ } }
  await flushPlanSave(); // el último plan sube a la cuenta antes de cerrar la sesión
  await fbAuth.signOut();
  // Sin sesión se ve la copia anónima, que se deja de fábrica: el plan de la persona
  // queda en su cuenta y en su propia copia de este navegador (rcb.plan.<uid>).
  usePlanOwner("");
  applyPlan(null);
  if (location.hash === "#/admin") location.hash = "#/";
}

/* ------------------------------------------------------------ registro y conteo ---- */

/* Crea el registro la primera vez (count 1) y suma 1 por cada sesión del navegador.
   Los administradores no cuentan: sólo se lee su registro (si lo tienen) para ver si
   están suspendidos, sin crearlo ni sumar. Devuelve los datos del usuario. */
async function recordUse(user, isAdmin) {
  const ref = fbDb.collection("users").doc(user.uid);
  if (isAdmin) {
    const snap = await ref.get();
    return snap.exists ? snap.data() : {};
  }
  const now = firebase.firestore.FieldValue.serverTimestamp();
  const counted = sessionFlag(AUTH_USE_KEY + user.uid);
  const snap = await ref.get();
  if (!snap.exists) {
    await ref.set({ email: lower(user.email), count: 1, firstSeen: now, lastSeen: now });
    sessionFlag(AUTH_USE_KEY + user.uid, true);
    return { count: 1 };
  }
  const data = snap.data();
  if (!counted) {
    await ref.update({ count: firebase.firestore.FieldValue.increment(1), lastSeen: now });
    sessionFlag(AUTH_USE_KEY + user.uid, true);
    data.count = (data.count || 0) + 1;
  }
  return data;
}

async function onUser(user) {
  authUser = user;
  authIsAdmin = false;
  resetReviews(); // js/reviews.js: lo cargado era de la cuenta anterior
  if (!user) { setAuthState("signin"); renderAccountBar(); return; }
  if (!user.email) { await fbAuth.signOut(); setAuthState("signin", at().errors.generic); return; }
  if (!user.emailVerified) {
    // Gmail y el enlace por correo ya vienen validados; otros (p. ej. algunas cuentas
    // de Microsoft) reciben un mensaje de validación de Firebase en su buzón.
    const key = "rcb.verifySent." + user.uid;
    if (!sessionFlag(key)) { try { await user.sendEmailVerification(linkSettings()); sessionFlag(key, true); } catch { /* se puede reenviar */ } }
    setAuthState("verify");
    return;
  }
  setAuthState("loading");
  try {
    // Primero si es administrador: sus usos no se cuentan.
    const admin = await checkAdmin(user);
    const data = await recordUse(user, admin);
    if (data.blocked) { setAuthState("blocked"); return; }
    authIsAdmin = admin;
    setAuthState("ready");
    loadUserPlan();
    reviewsOnReady();
    if (location.hash === "#/admin") route();
  } catch (err) {
    setAuthState("signin", authError(err));
  }
}

/* ¿Es administrador? Si no tiene documento en admins/, intenta crearlo como dueño:
   las reglas sólo lo permiten al correo fijo de firestore.rules. */
async function checkAdmin(user) {
  const ref = fbDb.collection("admins").doc(lower(user.email));
  try {
    if ((await ref.get()).exists) return true;
    await ref.set({ owner: true, addedBy: lower(user.email), addedAt: firebase.firestore.FieldValue.serverTimestamp() });
    return true;
  } catch { return false; }
}

/* ------------------------------------------------------------ datos del usuario (Planes) ---- */

/* users/{uid}/data/plan = { plan: {objetivo, datos, alergias, época…}, updatedAt }.
   Sólo la persona dueña lo lee o escribe (firestore.rules); ni los administradores. */
let planSaveTimer = null;
let planPending = null;       // ajustes que esperan subir a la cuenta
let planWarned = false;
function planRef() { return fbDb.collection("users").doc(authUser.uid).collection("data").doc("plan"); }

/* Sube ya lo pendiente (al salir, al cerrar o esconder la página). Si falla, la copia
   de este navegador (rcb.plan.<uid>) sigue ahí y se vuelve a subir en el próximo cambio. */
function flushPlanSave() {
  clearTimeout(planSaveTimer);
  const p = planPending;
  planPending = null;
  if (!p || !fbDb || !authUser) return Promise.resolve();
  try {
    return planRef().set({ plan: cleanPlan(p), updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
      .catch(planSaveFailed);
  } catch (err) { planSaveFailed(err); return Promise.resolve(); }
}
function planSaveFailed(err) {
  console.warn("Plan no guardado en la cuenta:", (err && (err.code || err.message)) || err);
  if (!planWarned && err && err.code === "permission-denied") {
    planWarned = true;
    toast(currentLang === "es" ? "El plan quedó en este navegador: la cuenta no aceptó guardarlo (revise las reglas de Firestore)." : "The plan stayed in this browser: your account didn't accept it (check the Firestore rules).");
  }
}
let planLoading = false;      // leyendo la cuenta: no subir el plan de fábrica encima
function cloudSavePlan(p) {
  if (!fbDb || !authUser || authState !== "ready" || planLoading) return;
  planPending = p;
  clearTimeout(planSaveTimer);
  planSaveTimer = setTimeout(flushPlanSave, 800);
}

/* Al entrar: se usa la copia más reciente, la de la cuenta o la de este navegador. */
async function loadUserPlan() {
  planLoading = true;
  clearTimeout(planSaveTimer);
  planPending = null;
  usePlanOwner(authUser.uid);
  try {
    const snap = await planRef().get();
    planLoading = false;
    const cloud = snap.exists && snap.data().plan;
    if (cloud && (+cloud.ts || 0) >= (plan.ts || 0)) applyPlan(cloud);
    else { cloudSavePlan(plan); flushPlanSave(); }
  } catch (err) { planLoading = false; console.warn("No se leyó el plan de la cuenta:", err.code || err); }
}
window.addEventListener("pagehide", () => { flushPlanSave(); });
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushPlanSave(); });

/* ------------------------------------------------------------ administración (#/admin) ---- */

function fmtDate(ts) {
  if (!ts || !ts.toDate) return "—";
  return ts.toDate().toLocaleString(currentLang === "es" ? "es-PR" : "en-US", { dateStyle: "medium", timeStyle: "short" });
}

function showAdmin() {
  current = null;
  $("view-home").hidden = true;
  $("view-recipe").hidden = true;
  $("view-plans").hidden = true;
  $("view-admin").hidden = false;
  document.title = `${at().adminTitle} — ${BRAND}`;
  jumpTo(0);
  renderAdminShell();
  if (authIsAdmin) loadAdminData();
}

function renderAdminShell() {
  const v = $("view-admin");
  const tr = at();
  if (!authIsAdmin) {
    v.innerHTML = `<div class="container admin-wrap"><h1 class="section-title" id="admin-title" tabindex="-1">${esc(tr.adminTitle)}</h1><p class="admin-intro">${esc(tr.noAccess)}</p></div>`;
    return;
  }
  v.innerHTML = `
    <div class="container admin-wrap">
      <p class="eyebrow">${esc(tr.admin)}</p>
      <h1 class="section-title" id="admin-title" tabindex="-1">${esc(tr.adminTitle)}</h1>
      <p class="admin-intro">${esc(tr.adminIntro)}</p>
      <div class="admin-stats" id="admin-stats"></div>
      <div class="admin-tools">
        <input class="auth-input admin-search" id="admin-search" type="search" placeholder="${esc(tr.search)}" aria-label="${esc(tr.search)}" value="${esc(adminFilter)}">
        <button type="button" class="btn btn-outline" data-admin="refresh">${esc(tr.refresh)}</button>
        <button type="button" class="btn btn-outline" data-admin="csv">${esc(tr.exportCsv)}</button>
      </div>
      <p class="auth-msg" id="admin-msg" role="alert" hidden></p>
      <div class="admin-table-wrap" id="admin-table"><p class="auth-loading">${esc(tr.loading)}</p></div>
      <section class="admin-reviews" id="admin-reviews" aria-live="polite"></section>
    </div>`;
  $("admin-title").focus({ preventScroll: true });
  if (adminUsers.length) renderAdminTable();
  renderPendingReviews(); // js/reviews.js
}

async function loadAdminData() {
  try {
    const [users, admins] = await Promise.all([
      fbDb.collection("users").orderBy("lastSeen", "desc").get(),
      fbDb.collection("admins").get()
    ]);
    adminUsers = users.docs.map((d) => ({ id: d.id, ...d.data() }));
    adminEmails = new Set(admins.docs.map((d) => d.id));
    ownerEmails = new Set(admins.docs.filter((d) => d.data().owner).map((d) => d.id));
    renderAdminTable();
  } catch (err) { adminMsg(authError(err)); }
  loadPendingReviews(); // js/reviews.js (después: usa adminUsers para el correo del autor)
}

function adminMsg(text) {
  const el = $("admin-msg");
  if (el) { el.textContent = text; el.hidden = !text; }
}

function renderAdminTable() {
  const tr = at();
  const box = $("admin-table");
  if (!box) return;
  const week = Date.now() - 7 * 864e5;
  // Los administradores no cuentan: ni en "Usos" ni en "Activos" (su contador ya no sube).
  const counted = adminUsers.filter((u) => !adminEmails.has(u.email));
  const total = counted.reduce((s, u) => s + (u.count || 0), 0);
  const active = counted.filter((u) => u.lastSeen && u.lastSeen.toMillis() >= week).length;
  const n = (x) => x.toLocaleString(currentLang === "es" ? "es-PR" : "en-US");
  $("admin-stats").innerHTML = [[tr.statUsers, adminUsers.length], [tr.statUses, total], [tr.statActive, active]]
    .map(([k, val]) => `<div class="admin-stat"><span class="admin-stat-num">${n(val)}</span><span class="admin-stat-label">${esc(k)}</span></div>`).join("");

  const q = lower(adminFilter);
  const rows = adminUsers.filter((u) => !q || (u.email || "").includes(q));
  if (!rows.length) { box.innerHTML = `<p class="admin-intro">${esc(tr.none)}</p>`; return; }
  const me = lower(authUser.email);
  box.innerHTML = `
    <table class="admin-table">
      <thead><tr><th scope="col">${esc(tr.colEmail)}</th><th scope="col" class="num">${esc(tr.colCount)}</th><th scope="col">${esc(tr.colFirst)}</th><th scope="col">${esc(tr.colLast)}</th><th scope="col">${esc(tr.colRole)}</th><th scope="col">${esc(tr.colActions)}</th></tr></thead>
      <tbody>${rows.map((u) => {
        const isAdm = adminEmails.has(u.email);
        const self = u.email === me;
        const fixed = self || ownerEmails.has(u.email);
        return `<tr>
          <td data-label="${esc(tr.colEmail)}" class="admin-email">${esc(u.email)}${self ? ` <span class="admin-you">(${esc(tr.you)})</span>` : ""}</td>
          <td data-label="${esc(tr.colCount)}" class="num">${isAdm ? "—" : n(u.count || 0)}</td>
          <td data-label="${esc(tr.colFirst)}" class="admin-date">${esc(fmtDate(u.firstSeen))}</td>
          <td data-label="${esc(tr.colLast)}" class="admin-date">${esc(fmtDate(u.lastSeen))}</td>
          <td data-label="${esc(tr.colRole)}"><span class="role-tag${isAdm ? " is-admin" : ""}">${esc(ownerEmails.has(u.email) ? tr.roleOwner : isAdm ? tr.roleAdmin : tr.roleUser)}</span>${u.blocked ? ` <span class="role-tag is-blocked">${esc(tr.blockedTag)}</span>` : ""}</td>
          <td data-label="${esc(tr.colActions)}" class="admin-actions">${fixed ? "—" : `
            <button type="button" class="btn btn-ghost btn-sm" data-admin="${isAdm ? "unadmin" : "admin"}" data-email="${esc(u.email)}">${esc(isAdm ? tr.removeAdmin : tr.makeAdmin)}</button>
            <button type="button" class="btn btn-ghost btn-sm" data-admin="${u.blocked ? "unblock" : "block"}" data-uid="${esc(u.id)}" data-email="${esc(u.email)}">${esc(u.blocked ? tr.unblock : tr.block)}</button>`}</td>
        </tr>`;
      }).join("")}</tbody>
    </table>`;
}

async function adminAction(btn) {
  const tr = at();
  const act = btn.dataset.admin;
  const email = btn.dataset.email;
  try {
    if (act === "refresh") { adminMsg(""); await loadAdminData(); return; }
    if (act === "csv") { exportCsv(); return; }
    if (act === "admin") { await fbDb.collection("admins").doc(email).set({ addedBy: lower(authUser.email), addedAt: firebase.firestore.FieldValue.serverTimestamp() }); adminEmails.add(email); }
    if (act === "unadmin") { if (!confirm(tr.confirmRemoveAdmin(email))) return; await fbDb.collection("admins").doc(email).delete(); adminEmails.delete(email); }
    if (act === "block" || act === "unblock") {
      if (act === "block" && !confirm(tr.confirmBlock(email))) return;
      const blocked = act === "block";
      await fbDb.collection("users").doc(btn.dataset.uid).update({ blocked });
      const u = adminUsers.find((x) => x.id === btn.dataset.uid); if (u) u.blocked = blocked;
    }
    adminMsg("");
    renderAdminTable();
  } catch (err) { adminMsg(authError(err)); }
}

function exportCsv() {
  const tr = at();
  const iso = (ts) => (ts && ts.toDate ? ts.toDate().toISOString() : "");
  const cell = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const lines = [[tr.colEmail, tr.colCount, tr.colFirst, tr.colLast, tr.colRole, tr.blockedTag].map(cell).join(",")]
    .concat(adminUsers.map((u) => [u.email, adminEmails.has(u.email) ? "" : u.count || 0, iso(u.firstSeen), iso(u.lastSeen),
      adminEmails.has(u.email) ? tr.roleAdmin : tr.roleUser, u.blocked ? "1" : "0"].map(cell).join(",")));
  const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `usuarios-recetarios-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ------------------------------------------------------------ idioma y eventos ---- */

function renderAuthTexts() {
  if (authState !== "ready") renderGate();
  renderAccountBar();
  if (!$("view-admin").hidden) { document.title = `${at().adminTitle} — ${BRAND}`; renderAdminShell(); }
  renderAllReviews(); // js/reviews.js
}

function setupAuthEvents() {
  document.addEventListener("click", (e) => {
    const lang = e.target.closest("[data-auth-lang]");
    if (lang) { switchLang(lang.dataset.authLang); return; }
    const prov = e.target.closest("[data-provider]");
    if (prov) { signInWith(prov.dataset.provider); return; }
    const act = e.target.closest("[data-auth]");
    if (act) {
      const a = act.dataset.auth;
      if (a === "signout") signOut();
      else if (a === "restart") setAuthState("signin");
      else if (a === "checkverified") checkVerified();
      else if (a === "resend") resendVerification();
      return;
    }
    const adm = e.target.closest("[data-admin]");
    if (adm && authIsAdmin) adminAction(adm);
  });
  document.addEventListener("submit", (e) => {
    const form = e.target.closest("[data-auth-form]");
    if (!form) return;
    e.preventDefault();
    const email = $("auth-email").value;
    if (form.dataset.authForm === "link") sendLink(email);
    else completeLink(email);
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "admin-search") { adminFilter = e.target.value; renderAdminTable(); }
  });
}

async function setupAuth() {
  setupAuthEvents();
  if (!authConfigured()) { setAuthState("unconfigured"); return; }
  setAuthState("loading");
  try {
    await loadScript(FIREBASE_SDK + "firebase-app-compat.js");
    await Promise.all([loadScript(FIREBASE_SDK + "firebase-auth-compat.js"), loadScript(FIREBASE_SDK + "firebase-firestore-compat.js")]);
  } catch { setAuthState("signin", at().errors["auth/network-request-failed"]); return; }
  firebase.initializeApp(AUTH_CONFIG.firebase);
  fbAuth = firebase.auth();
  fbDb = firebase.firestore();
  fbAuth.languageCode = currentLang;

  // ¿Se abrió la app desde el enlace del correo?
  if (fbAuth.isSignInWithEmailLink(location.href)) {
    const saved = authStore(AUTH_EMAIL_KEY);
    if (saved) await completeLink(saved);
    else setAuthState("confirm");
  }
  try { await fbAuth.getRedirectResult(); } catch (err) { authMessage = authError(err); }
  fbAuth.onAuthStateChanged((user) => {
    if (!user && authState === "confirm") return; // esperando el correo del enlace
    const msg = authMessage;
    onUser(user).then(() => { if (msg && authState === "signin") showAuthMessage(msg); });
  });
}

document.addEventListener("DOMContentLoaded", setupAuth);
