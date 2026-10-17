/* Recetarios de Aquí · "Póngala en su celular": crea el icono de la app en la pantalla de inicio.
 *
 * El manifiesto usa "display": "browser" (§10: en modo standalone el acceso con Google puede
 * fallar), así que el navegador no ofrece "Instalar" por su cuenta: el icono se crea con
 * "Añadir a pantalla de inicio" y abre la app en el navegador. Esto lo explica paso a paso
 * según el equipo:
 *  - dentro de Facebook o Instagram (los anuncios abren ahí): primero abrirla en el navegador,
 *    porque en ese navegador interno no hay "Añadir a pantalla de inicio" ni deja entrar con Google;
 *  - iPhone/iPad (Safari): Compartir → Añadir a pantalla de inicio;
 *  - Android (Chrome): menú ⋮ → Añadir a pantalla de inicio. Si el navegador ofrece el aviso
 *    de instalar (beforeinstallprompt), un botón lo lanza directamente;
 *  - computadora: copiar o compartir el enlace para abrirlo en el celular.
 * Botones con data-install="open" lo abren; el enlace con ?instalar (el de los anuncios) lo
 * abre solo al llegar. ARQUITECTURA.md §7.6. Depende de app.js ($, esc, currentLang, toast). */

const APP_URL = "https://recetario-de-aqui.vercel.app/";

const INSTALL_T = {
  es: {
    btn: "Crear el icono en su celular",
    title: "Ponga la app en su celular",
    intro: "Cree un icono en su pantalla de inicio para abrir Recetarios de Aquí con un toque. Es gratis y no ocupa espacio.",
    inApp: "Está viendo esto dentro de Facebook o Instagram. Primero ábralo en su navegador:",
    inAppSteps: ["Toque los tres puntitos ⋯ arriba a la derecha.", "Escoja «Abrir en el navegador» (o «Abrir en Safari / Chrome»).", "Allí toque otra vez «Crear el icono en su celular»."],
    inAppWhy: "Dentro de Facebook e Instagram no se puede crear el icono ni entrar con Google.",
    iosSteps: ["Toque el botón Compartir (el cuadrito con la flecha hacia arriba), abajo en Safari.", "Baje y escoja «Añadir a pantalla de inicio».", "Toque «Añadir». El icono con la bandera aparece en su pantalla."],
    iosOther: "Si usa otro navegador en el iPhone, abra este enlace en Safari.",
    androidSteps: ["Toque el menú ⋮ arriba a la derecha en Chrome.", "Escoja «Añadir a pantalla de inicio» (o «Instalar app»).", "Toque «Añadir». El icono con la bandera aparece en su pantalla."],
    promptBtn: "Crear el icono ahora",
    desktop: "Abra este enlace en su celular y toque «Crear el icono en su celular»:",
    copy: "Copiar el enlace",
    copied: "Enlace copiado.",
    share: "Compartir el enlace",
    shareText: "Recetas puertorriqueñas gratis, paso a paso:",
    close: "Cerrar",
    done: "Listo: busque el icono en su pantalla de inicio."
  },
  en: {
    btn: "Add the icon to your phone",
    title: "Put the app on your phone",
    intro: "Add an icon to your home screen to open Recetarios de Aquí with one tap. It's free and takes no space.",
    inApp: "You're viewing this inside Facebook or Instagram. First open it in your browser:",
    inAppSteps: ["Tap the three dots ⋯ at the top right.", "Choose “Open in browser” (or “Open in Safari / Chrome”).", "There, tap “Add the icon to your phone” again."],
    inAppWhy: "Inside Facebook and Instagram you can't add the icon or sign in with Google.",
    iosSteps: ["Tap the Share button (the square with the up arrow) at the bottom of Safari.", "Scroll down and choose “Add to Home Screen”.", "Tap “Add”. The flag icon shows up on your screen."],
    iosOther: "If you use another browser on your iPhone, open this link in Safari.",
    androidSteps: ["Tap the ⋮ menu at the top right in Chrome.", "Choose “Add to Home screen” (or “Install app”).", "Tap “Add”. The flag icon shows up on your screen."],
    promptBtn: "Add the icon now",
    desktop: "Open this link on your phone and tap “Add the icon to your phone”:",
    copy: "Copy the link",
    copied: "Link copied.",
    share: "Share the link",
    shareText: "Free Puerto Rican recipes, step by step:",
    close: "Close",
    done: "Done: look for the icon on your home screen."
  }
};
function it() { return INSTALL_T[currentLang]; }

let installPrompt = null; // evento beforeinstallprompt, si el navegador lo ofrece
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installPrompt = e; });
window.addEventListener("appinstalled", () => { installPrompt = null; toast(it().done, true); });

function installDevice() {
  const ua = navigator.userAgent || "";
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  return {
    inApp: /FBAN|FBAV|FB_IAB|FBIOS|Instagram|Messenger/i.test(ua),
    ios,
    iosSafari: ios && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA\//.test(ua),
    android: /Android/i.test(ua),
    mobile: ios || /Android|Mobi/i.test(ua)
  };
}

/* ¿Ya se abrió desde el icono? (sólo detectable si el navegador la abre como app) */
function installStandalone() {
  return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
}

/* Botón para la pantalla de entrada (auth.js) y el inicio: sólo en celulares. */
function installButtonHTML(cls = "") {
  if (!installDevice().mobile || installStandalone()) return "";
  return `<button type="button" class="btn btn-outline install-btn ${cls}" data-install="open">
      <svg class="icon" aria-hidden="true"><use href="#i-phone"/></svg>${esc(it().btn)}</button>`;
}

function stepsHTML(steps) {
  return `<ol class="install-steps">${steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`;
}

function installBodyHTML() {
  const tr = it();
  const d = installDevice();
  let body;
  if (d.inApp) {
    body = `<p class="install-text"><strong>${esc(tr.inApp)}</strong></p>${stepsHTML(tr.inAppSteps)}<p class="install-note">${esc(tr.inAppWhy)}</p>`;
  } else if (d.ios) {
    body = stepsHTML(tr.iosSteps) + (d.iosSafari ? "" : `<p class="install-note">${esc(tr.iosOther)}</p>`);
  } else if (d.android) {
    body = (installPrompt ? `<button type="button" class="btn btn-primary install-now" data-install="prompt">${esc(tr.promptBtn)}</button>` : "") + stepsHTML(tr.androidSteps);
  } else {
    body = `<p class="install-text">${esc(tr.desktop)}</p><p class="install-url">${esc(APP_URL.replace(/\/$/, ""))}</p>`;
  }
  return `
    <div class="install-head">
      <img src="icons/icon-192.png" alt="" width="56" height="56" class="install-icon">
      <h2 class="install-title" id="install-title">${esc(tr.title)}</h2>
    </div>
    <p class="install-text">${esc(tr.intro)}</p>
    ${body}
    <div class="install-actions">
      <button type="button" class="btn btn-outline btn-sm" data-install="copy">${esc(tr.copy)}</button>
      ${navigator.share ? `<button type="button" class="btn btn-outline btn-sm" data-install="share">${esc(tr.share)}</button>` : ""}
      <button type="button" class="btn btn-ghost btn-sm" data-install="close">${esc(tr.close)}</button>
    </div>`;
}

function openInstall() {
  let d = $("install-dialog");
  if (!d) {
    d = document.createElement("dialog");
    d.id = "install-dialog";
    d.className = "install-dialog";
    d.setAttribute("aria-labelledby", "install-title");
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
    document.body.append(d);
  }
  d.innerHTML = installBodyHTML();
  if (d.showModal) { if (!d.open) d.showModal(); } else d.setAttribute("open", "");
  const first = d.querySelector(".install-now, [data-install='copy']");
  if (first) first.focus();
}

async function copyAppLink() {
  try {
    await navigator.clipboard.writeText(APP_URL);
  } catch (_) { // navegadores sin permiso de portapapeles
    const t = document.createElement("textarea");
    t.value = APP_URL;
    t.setAttribute("readonly", "");
    t.style.position = "fixed"; t.style.opacity = "0";
    document.body.append(t); t.select();
    try { document.execCommand("copy"); } catch (__) { /* sin remedio */ }
    t.remove();
  }
  toast(it().copied, true);
}

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-install]");
  if (!btn) return;
  const act = btn.dataset.install;
  if (act === "open") openInstall();
  else if (act === "close") { const d = $("install-dialog"); if (d) d.close(); }
  else if (act === "copy") copyAppLink();
  else if (act === "share") {
    try { await navigator.share({ title: BRAND, text: it().shareText, url: APP_URL }); } catch (_) { /* canceló */ }
  } else if (act === "prompt" && installPrompt) {
    const p = installPrompt;
    installPrompt = null;
    p.prompt();
    try { await p.userChoice; } catch (_) { /* nada */ }
    const d = $("install-dialog");
    if (d && d.open) d.innerHTML = installBodyHTML();
  }
});

/* Enlace de los anuncios: …/?instalar abre la guía al llegar (y se quita de la barra). */
(function installFromLink() {
  const q = new URLSearchParams(location.search);
  if (!q.has("instalar") && !q.has("install")) return;
  q.delete("instalar"); q.delete("install");
  const rest = q.toString();
  history.replaceState(null, "", location.pathname + (rest ? "?" + rest : "") + location.hash);
  if (installDevice().mobile && !installStandalone()) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", openInstall);
    else setTimeout(openInstall, 0);
  }
})();
