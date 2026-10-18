/* Recetarios de Aquí · #/admin → Recetas: ficha interna de cada receta para los administradores.
 *
 * Por receta: categoría, **temporada recomendada** y **fecha de ingreso** a la app.
 *  - Temporada: la evalúan las reglas de épocas de plans.js (`autoSeasonsOf()`: Navidad, Cuaresma,
 *    verano, Acción de Gracias, días de lluvia; puede ser más de una o "Todo el año"). Un
 *    administrador la puede corregir: se guarda en Firestore recipeMeta/{id} = { seasons,
 *    updatedBy, updatedAt } y desde ahí la usan también los planes (`RECIPE_SEASONS`).
 *  - Fecha de ingreso: js/recipe-dates.js (RECIPE_ADDED), generado del historial de git con
 *    tools/recipe-dates.js. Se carga sólo al abrir esta sección.
 * Nada de esto se muestra al público. ARQUITECTURA.md §7.8.
 * Depende de app.js ($, esc, currentLang, recipes, t, toast), plans.js (SEASON_KEYS, autoSeasonsOf,
 * RECIPE_SEASONS, PLAN_T, renderPlanOutput) y auth.js (fbDb, authUser, authIsAdmin, authState, loadScript, lower). */

const RA_PAGE = 50;
const RA_T = {
  es: {
    title: "Recetas",
    intro: "Ficha interna de cada receta: temporada recomendada y fecha en que entró a la app. Sólo la ven los administradores. Si corrige la temporada, los planes de comida la usan.",
    search: "Buscar receta",
    allCats: "Todas las categorías",
    allSeasons: "Todas las temporadas",
    edited: "Corregidas a mano",
    sortNew: "Más recientes primero",
    sortOld: "Más antiguas primero",
    sortAz: "De la A a la Z",
    count: (n, total) => (n === total ? `${n.toLocaleString("es-PR")} recetas` : `${n.toLocaleString("es-PR")} de ${total.toLocaleString("es-PR")} recetas`),
    colRecipe: "Receta",
    colSeason: "Temporada recomendada",
    colAdded: "Ingreso",
    colActions: "Acciones",
    auto: "automática",
    manual: "corregida",
    edit: "Cambiar temporada",
    save: "Guardar",
    reset: "Volver a la automática",
    cancel: "Cancelar",
    pickHelp: "Marque una o varias. «Todo el año» quita las demás.",
    saved: "Temporada guardada.",
    resetDone: "Vuelve a la temporada automática.",
    more: (n) => `Ver más recetas (${n})`,
    csv: "Exportar CSV",
    byDay: "Ingresos por día",
    loading: "Cargando…",
    noRules: "No se pudo guardar: publique las reglas nuevas de firestore.rules en Firebase (Firestore Database → Reglas).",
    error: "No se pudo guardar. Inténtelo de nuevo.",
    none: "Ninguna receta con esos filtros."
  },
  en: {
    title: "Recipes",
    intro: "Internal record for each recipe: recommended season and the date it was added. Only administrators see it. If you correct the season, the meal plans use it.",
    search: "Search recipe",
    allCats: "All categories",
    allSeasons: "All seasons",
    edited: "Corrected by hand",
    sortNew: "Newest first",
    sortOld: "Oldest first",
    sortAz: "A to Z",
    count: (n, total) => (n === total ? `${n.toLocaleString("en-US")} recipes` : `${n.toLocaleString("en-US")} of ${total.toLocaleString("en-US")} recipes`),
    colRecipe: "Recipe",
    colSeason: "Recommended season",
    colAdded: "Added",
    colActions: "Actions",
    auto: "automatic",
    manual: "corrected",
    edit: "Change season",
    save: "Save",
    reset: "Back to automatic",
    cancel: "Cancel",
    pickHelp: "Check one or more. “All year” clears the others.",
    saved: "Season saved.",
    resetDone: "Back to the automatic season.",
    more: (n) => `Show more recipes (${n})`,
    csv: "Export CSV",
    byDay: "Added per day",
    loading: "Loading…",
    noRules: "Couldn't save: publish the new firestore.rules in Firebase (Firestore Database → Rules).",
    error: "Couldn't save. Please try again.",
    none: "No recipes match those filters."
  }
};
const rat = () => RA_T[currentLang];
const seasonName = (k) => PLAN_T[currentLang].seasons[k] || k;

let raState = { q: "", cat: "", season: "", sort: "new", limit: RA_PAGE, editing: null };
let raDatesReady = typeof RECIPE_ADDED !== "undefined";

/* ------------------------------------------------------------ temporadas fijadas (todos) ---- */

/* Al entrar cualquier persona: los planes usan las temporadas que fijó un administrador. */
async function loadRecipeSeasons() {
  if (!fbDb || !authUser) return;
  try {
    const snap = await fbDb.collection("recipeMeta").get();
    const map = new Map();
    for (const d of snap.docs) {
      const s = d.data().seasons;
      if (Array.isArray(s) && s.length) map.set(d.id, s.filter((k) => k === "todo" || SEASON_KEYS.includes(k)));
    }
    RECIPE_SEASONS = map;
    if (!$("view-plans").hidden) renderPlanOutput();
    if (!$("view-admin").hidden) renderRecipeAdminList();
  } catch (err) {
    // Sin las reglas nuevas publicadas: se usan las automáticas.
    console.warn("Temporadas de recetas:", (err && (err.code || err.message)) || err);
  }
}

/* ------------------------------------------------------------ sección del panel ---- */

function renderRecipeAdmin() {
  const box = $("admin-recipes");
  if (!box || !authIsAdmin) return;
  const tr = rat();
  const cats = categoryOrder.map((c) => `<option value="${c}" ${raState.cat === c ? "selected" : ""}>${esc(t().categories[c])}</option>`).join("");
  const seasons = ["todo", ...SEASON_KEYS].map((k) => `<option value="${k}" ${raState.season === k ? "selected" : ""}>${esc(seasonName(k))}</option>`).join("");
  box.innerHTML = `
    <h2 class="section-title admin-h2" id="admin-recipes-title">${esc(tr.title)}</h2>
    <p class="admin-intro">${esc(tr.intro)}</p>
    <div class="admin-tools ra-tools">
      <input class="auth-input admin-search" type="search" data-ra="q" placeholder="${esc(tr.search)}" aria-label="${esc(tr.search)}" value="${esc(raState.q)}">
      <select class="ra-select" data-ra="cat" aria-label="${esc(tr.allCats)}"><option value="">${esc(tr.allCats)}</option>${cats}</select>
      <select class="ra-select" data-ra="season" aria-label="${esc(tr.allSeasons)}"><option value="">${esc(tr.allSeasons)}</option>${seasons}<option value="manual" ${raState.season === "manual" ? "selected" : ""}>${esc(tr.edited)}</option></select>
      <select class="ra-select" data-ra="sort" aria-label="${esc(tr.sortNew)}">
        <option value="new" ${raState.sort === "new" ? "selected" : ""}>${esc(tr.sortNew)}</option>
        <option value="old" ${raState.sort === "old" ? "selected" : ""}>${esc(tr.sortOld)}</option>
        <option value="az" ${raState.sort === "az" ? "selected" : ""}>${esc(tr.sortAz)}</option>
      </select>
      <button type="button" class="btn btn-outline" data-ra-act="csv">${esc(tr.csv)}</button>
    </div>
    <div class="ra-summary" id="ra-summary"></div>
    <p class="results-count" id="ra-count" role="status" aria-live="polite"></p>
    <div class="admin-table-wrap" id="ra-list"><p class="auth-loading">${esc(tr.loading)}</p></div>`;
  if (raDatesReady) renderRecipeAdminList();
  else {
    loadScript("js/recipe-dates.js")
      .then(() => { raDatesReady = true; renderRecipeAdminList(); })
      .catch(() => { raDatesReady = true; renderRecipeAdminList(); }); // sin fechas: se ve "—"
  }
}

const addedOf = (r) => (typeof RECIPE_ADDED !== "undefined" && RECIPE_ADDED[r.id]) || "";
function fmtAdded(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", { day: "numeric", month: "short", year: "numeric" });
}

function raFiltered() {
  const q = lower(raState.q).normalize("NFD").replace(/[̀-ͯ]/g, "");
  let list = recipes.filter((r) => {
    if (raState.cat && r.category !== raState.cat) return false;
    if (raState.season === "manual") { if (!RECIPE_SEASONS.has(r.id)) return false; }
    else if (raState.season && !seasonsOf(r).includes(raState.season)) return false;
    if (q && !lower(r.name.es + " " + r.name.en + " " + r.id).normalize("NFD").replace(/[̀-ͯ]/g, "").includes(q)) return false;
    return true;
  });
  const name = (r) => r.name[currentLang];
  if (raState.sort === "az") list.sort((a, b) => name(a).localeCompare(name(b), currentLang));
  else {
    const dir = raState.sort === "new" ? -1 : 1;
    list.sort((a, b) => (addedOf(a) === addedOf(b) ? name(a).localeCompare(name(b), currentLang) : addedOf(a) < addedOf(b) ? -dir : dir));
  }
  return list;
}

function seasonChips(r) {
  const tr = rat();
  const manual = RECIPE_SEASONS.has(r.id);
  return `<span class="ra-chips">${seasonsOf(r).map((k) => `<span class="ra-chip ra-${k}">${esc(seasonName(k))}</span>`).join("")}
    <span class="ra-src${manual ? " is-manual" : ""}">${esc(manual ? tr.manual : tr.auto)}</span></span>`;
}

function editRowHTML(r) {
  const tr = rat();
  const cur = new Set(seasonsOf(r));
  return `<div class="ra-edit" data-ra-edit="${esc(r.id)}">
    <p class="plans-help">${esc(tr.pickHelp)}</p>
    <div class="ra-picks">${["todo", ...SEASON_KEYS].map((k) => `
      <label class="chip-check"><input type="checkbox" value="${k}" ${cur.has(k) ? "checked" : ""}><span>${esc(seasonName(k))}</span></label>`).join("")}</div>
    <div class="review-actions">
      <button type="button" class="btn btn-primary btn-sm" data-ra-act="save" data-id="${esc(r.id)}">${esc(tr.save)}</button>
      ${RECIPE_SEASONS.has(r.id) ? `<button type="button" class="btn btn-outline btn-sm" data-ra-act="reset" data-id="${esc(r.id)}">${esc(tr.reset)}</button>` : ""}
      <button type="button" class="btn btn-ghost btn-sm" data-ra-act="cancel">${esc(tr.cancel)}</button>
    </div>
    <p class="auth-msg ra-msg" role="alert" hidden></p>
  </div>`;
}

function renderRecipeAdminList() {
  const box = $("ra-list");
  if (!box) return;
  const tr = rat();
  const list = raFiltered();
  $("ra-count").textContent = tr.count(list.length, recipes.length);
  // Resumen: cuántas recetas entraron cada día (de la más reciente a la más antigua).
  const days = {};
  for (const r of recipes) { const d = addedOf(r); if (d) days[d] = (days[d] || 0) + 1; }
  const dayKeys = Object.keys(days).sort().reverse();
  $("ra-summary").innerHTML = dayKeys.length ? `<span class="ra-summary-label">${esc(tr.byDay)}:</span> ${dayKeys.map((d) => `<span class="ra-day">${esc(fmtAdded(d))} <strong>${days[d]}</strong></span>`).join("")}` : "";
  if (!list.length) { box.innerHTML = `<p class="admin-intro">${esc(tr.none)}</p>`; return; }
  const shown = list.slice(0, raState.limit);
  box.innerHTML = `
    <table class="admin-table ra-table">
      <thead><tr><th scope="col">${esc(tr.colRecipe)}</th><th scope="col">${esc(tr.colSeason)}</th><th scope="col">${esc(tr.colAdded)}</th><th scope="col">${esc(tr.colActions)}</th></tr></thead>
      <tbody>${shown.map((r) => `
        <tr>
          <td data-label="${esc(tr.colRecipe)}" class="ra-name"><a href="#/receta/${encodeURIComponent(r.id)}">${esc(r.name[currentLang])}</a><span class="ra-cat">${esc(t().categories[r.category])}</span></td>
          <td data-label="${esc(tr.colSeason)}" class="ra-season">${seasonChips(r)}${raState.editing === r.id ? editRowHTML(r) : ""}</td>
          <td data-label="${esc(tr.colAdded)}" class="admin-date">${esc(fmtAdded(addedOf(r)))}</td>
          <td data-label="${esc(tr.colActions)}" class="admin-actions">${raState.editing === r.id ? "" : `<button type="button" class="btn btn-ghost btn-sm" data-ra-act="edit" data-id="${esc(r.id)}">${esc(tr.edit)}</button>`}</td>
        </tr>`).join("")}</tbody>
    </table>
    ${list.length > shown.length ? `<div class="more-results"><button type="button" class="btn btn-outline" data-ra-act="more">${esc(tr.more(list.length - shown.length))}</button></div>` : ""}`;
}

/* ------------------------------------------------------------ guardar ---- */

async function saveRecipeSeasons(id, seasons) {
  const ref = fbDb.collection("recipeMeta").doc(id);
  if (seasons === null) {
    await ref.delete();
    RECIPE_SEASONS.delete(id);
  } else {
    await ref.set({ seasons, updatedBy: lower(authUser.email), updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    RECIPE_SEASONS.set(id, seasons);
  }
}

function raMsg(id, text) {
  const el = document.querySelector(`[data-ra-edit="${CSS.escape(id)}"] .ra-msg`);
  if (el) { el.textContent = text; el.hidden = !text; }
}

function raExportCsv() {
  const tr = rat();
  const cell = (s) => `"${String(s).replace(/"/g, '""')}"`;
  const lines = [[tr.colRecipe, "id", "Categoría", tr.colSeason, "Origen", tr.colAdded].map(cell).join(",")]
    .concat(raFiltered().map((r) => [r.name.es, r.id, t().categories[r.category], seasonsOf(r).map(seasonName).join(" / "),
      RECIPE_SEASONS.has(r.id) ? tr.manual : tr.auto, addedOf(r)].map(cell).join(",")));
  const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `recetas-recetarios-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ------------------------------------------------------------ eventos ---- */

document.addEventListener("input", (e) => {
  const f = e.target.closest("[data-ra]");
  if (!f || f.dataset.ra !== "q") return;
  raState.q = f.value; raState.limit = RA_PAGE;
  renderRecipeAdminList();
});
document.addEventListener("change", (e) => {
  const f = e.target.closest("[data-ra]");
  if (f && f.dataset.ra !== "q") { raState[f.dataset.ra] = f.value; raState.limit = RA_PAGE; renderRecipeAdminList(); return; }
  // "Todo el año" no se mezcla con las épocas.
  const box = e.target.closest("[data-ra-edit]");
  if (box && e.target.type === "checkbox" && e.target.checked) {
    for (const c of box.querySelectorAll('input[type="checkbox"]')) {
      if (c !== e.target && (e.target.value === "todo" || c.value === "todo")) c.checked = false;
    }
  }
});
document.addEventListener("click", async (e) => {
  const b = e.target.closest("[data-ra-act]");
  if (!b || !authIsAdmin) return;
  const tr = rat();
  const act = b.dataset.raAct, id = b.dataset.id;
  if (act === "more") { raState.limit += RA_PAGE; renderRecipeAdminList(); return; }
  if (act === "csv") { raExportCsv(); return; }
  if (act === "edit") { raState.editing = id; renderRecipeAdminList(); const f = document.querySelector(`[data-ra-edit="${CSS.escape(id)}"] input`); if (f) f.focus(); return; }
  if (act === "cancel") { const was = raState.editing; raState.editing = null; renderRecipeAdminList(); const btn = document.querySelector(`[data-ra-act="edit"][data-id="${CSS.escape(was || "")}"]`); if (btn) btn.focus(); return; }
  if (act === "save" || act === "reset") {
    let seasons = null;
    if (act === "save") {
      seasons = [...document.querySelectorAll(`[data-ra-edit="${CSS.escape(id)}"] input:checked`)].map((c) => c.value);
      if (!seasons.length) seasons = ["todo"];
      // Igual que la automática: no hace falta guardarla.
      const auto = autoSeasonsOf(recipes.find((r) => r.id === id));
      if (!RECIPE_SEASONS.has(id) && seasons.join() === auto.join()) { raState.editing = null; renderRecipeAdminList(); return; }
    }
    b.disabled = true;
    try {
      await saveRecipeSeasons(id, seasons);
      raState.editing = null;
      renderRecipeAdminList();
      const btn = document.querySelector(`[data-ra-act="edit"][data-id="${CSS.escape(id)}"]`); if (btn) btn.focus();
      toast(act === "save" ? tr.saved : tr.resetDone, true);
    } catch (err) {
      b.disabled = false;
      raMsg(id, err && err.code === "permission-denied" ? tr.noRules : tr.error);
      console.warn("Temporada no guardada:", (err && (err.code || err.message)) || err);
    }
  }
});
