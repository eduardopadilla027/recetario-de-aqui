/* Recetarios de Aquí · uso sin internet y barra de abajo en el celular.
 *
 * - Registra sw.js (el trabajador de servicio): la app sigue en la web (recetariodeaqui.com), pero
 *   después de la primera visita queda guardada en el navegador del celular y abre sin señal,
 *   también desde el icono de la pantalla de inicio. Avisa cuando no hay conexión.
 * - Barra de abajo (sólo en pantallas pequeñas): Inicio, Buscar, Planes, Mi recetario y Compras. */

const PWA_T = {
  es: { offline: "Sin conexión: está usando la copia guardada del recetario. Lo que guarde se sube a su cuenta al volver la señal.", online: "Conexión de vuelta." },
  en: { offline: "Offline: you're using the saved copy of the cookbook. What you save goes up to your account when you're back online.", online: "Back online." }
};

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((err) => console.warn("Sin modo sin internet:", err));
  });
}

function showOfflineBanner() {
  let b = document.getElementById("offline-banner");
  if (!b) {
    b = document.createElement("p");
    b.id = "offline-banner";
    b.className = "offline-banner";
    b.setAttribute("role", "status");
    document.body.appendChild(b);
  }
  b.textContent = PWA_T[currentLang].offline;
  b.hidden = navigator.onLine;
}
window.addEventListener("offline", showOfflineBanner);
window.addEventListener("online", () => { showOfflineBanner(); toast(PWA_T[currentLang].online, true); });
document.addEventListener("DOMContentLoaded", () => { if (!navigator.onLine) showOfflineBanner(); });

/* ── Barra de abajo ── */
function setBottomNav(hash) {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;
  const key = hash === "#/planes" ? "plans" : hash === "#/mi-recetario" ? "mine" : hash === "#/compras" ? "shop" : hash.startsWith("#/receta/") || hash === "#/admin" ? "" : "home";
  nav.querySelectorAll("[data-bn]").forEach((a) => {
    if (a.dataset.bn === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("bottom-nav");
  if (!nav) return;
  nav.addEventListener("click", (e) => {
    const a = e.target.closest('[data-bn="search"]');
    if (!a) return;
    // "Buscar": al inicio y con el teclado listo en el buscador.
    e.preventDefault();
    if (location.hash && location.hash !== "#/") { explicitNav = true; location.hash = "#/"; }
    setTimeout(() => {
      const input = $("search-input");
      input.scrollIntoView({ block: "center", behavior: "instant" });
      input.focus();
    }, 60);
  });
  setBottomNav(decodeURIComponent(location.hash || ""));
});
