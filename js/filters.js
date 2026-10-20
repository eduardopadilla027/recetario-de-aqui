/* Recetarios de Aquí · "¿Qué tengo en la nevera?" y filtros combinables.
 *
 * Un panel bajo el buscador (botón "Filtros") con:
 * - Lo que tengo: escriba ingredientes ("pollo", "papa", "cilantro") y salen las recetas que los
 *   llevan todos (o al menos uno), ordenadas por las que menos cosas le faltan.
 * - Tiempo, dificultad (calculada de ingredientes, pasos y tiempo), calorías por porción,
 *   sin alérgenos, dieta (vegetariana o vegana), época y "para niños".
 * Se combinan entre sí, con el buscador, la categoría, las rápidas y las favoritas: app.js llama a
 * advActive(), advOk() y advKey(). Depende de app.js, nutrition.js, advisories.js, plans.js y search.js. */

const FT = {
  es: {
    btn: "Filtros", title: "Filtros", close: "Cerrar filtros", clear: "Quitar estos filtros",
    haveTitle: "¿Qué tengo en la nevera?", haveHelp: "Escriba lo que tiene y pulse Añadir (o Enter). Salen las recetas que lo usan.",
    havePh: "Ej.: pollo, papa, cilantro", haveAdd: "Añadir", haveRemove: (x) => `Quitar ${x}`,
    haveAll: "Que lleven todo", haveAny: "Que lleven al menos uno",
    time: "Tiempo", timeAny: "Cualquiera", timeOpt: (m) => `${m} min o menos`, timeHour: "1 hora o menos",
    level: "Dificultad", levels: { "": "Cualquiera", easy: "Fácil", medium: "Intermedia", hard: "Elaborada" },
    kcal: "Calorías por porción", kcalAny: "Cualquiera", kcalOpt: (k) => `${k} o menos`,
    free: "Sin…", diet: "Dieta", diets: { "": "De todo", veg: "Vegetariana", vegan: "Vegana" },
    season: "Época", seasonAny: "Cualquiera", kids: "Para niños (sin alcohol ni cafeína)",
    count: (n) => (n === 1 ? "1 filtro" : `${n} filtros`),
    levelTag: { easy: "Fácil", medium: "Intermedia", hard: "Elaborada" },
    missing: (n) => (n ? `le faltan ${n} de sus ingredientes` : "tiene todo"),
    lacks: "Le falta:", hasAll: "Tiene lo principal", more: (n) => `y ${n} más`,
    haveMax: (n) => `Máximo ${n} ingredientes: quite uno para añadir otro.`,
    haveLeft: (n) => `Puede añadir ${n} más.`,
    found: (n) => (n === 1 ? "1 receta usa lo que tiene." : `${n} recetas usan lo que tiene.`),
    kcalOut: (n) => (n === 1 ? "1 receta sin estimado de calorías queda fuera de este filtro." : `${n} recetas sin estimado de calorías quedan fuera de este filtro.`),
    timeOut: (n) => (n === 1 ? "1 receta sin tiempo anotado queda fuera del filtro de tiempo." : `${n} recetas sin tiempo anotado quedan fuera del filtro de tiempo.`),
    kidsOff: "El filtro \"Para niños\" no se pudo cargar: no se muestran recetas con él. Recargue la página o quítelo."
  },
  en: {
    btn: "Filters", title: "Filters", close: "Close filters", clear: "Clear these filters",
    haveTitle: "What's in my fridge?", haveHelp: "Type what you have and press Add (or Enter). Recipes that use it show up.",
    havePh: "E.g. chicken, potato, cilantro", haveAdd: "Add", haveRemove: (x) => `Remove ${x}`,
    haveAll: "Use all of them", haveAny: "Use at least one",
    time: "Time", timeAny: "Any", timeOpt: (m) => `${m} min or less`, timeHour: "1 hour or less",
    level: "Difficulty", levels: { "": "Any", easy: "Easy", medium: "Intermediate", hard: "Elaborate" },
    kcal: "Calories per serving", kcalAny: "Any", kcalOpt: (k) => `${k} or less`,
    free: "Free of…", diet: "Diet", diets: { "": "Everything", veg: "Vegetarian", vegan: "Vegan" },
    season: "Season", seasonAny: "Any", kids: "Kid-friendly (no alcohol or caffeine)",
    count: (n) => (n === 1 ? "1 filter" : `${n} filters`),
    levelTag: { easy: "Easy", medium: "Intermediate", hard: "Elaborate" },
    missing: (n) => (n ? `${n} of your ingredients missing` : "you have it all"),
    lacks: "Missing:", hasAll: "You have the main things", more: (n) => `and ${n} more`,
    haveMax: (n) => `Up to ${n} ingredients: remove one to add another.`,
    haveLeft: (n) => `You can add ${n} more.`,
    found: (n) => (n === 1 ? "1 recipe uses what you have." : `${n} recipes use what you have.`),
    kcalOut: (n) => (n === 1 ? "1 recipe without a calorie estimate is left out by this filter." : `${n} recipes without a calorie estimate are left out by this filter.`),
    timeOut: (n) => (n === 1 ? "1 recipe with no time listed is left out by the time filter." : `${n} recipes with no time listed are left out by the time filter.`),
    kidsOff: "The \"Kid-friendly\" filter couldn't load, so it shows no recipes. Reload the page or turn it off."
  }
};
const ft = () => FT[currentLang];
const FREE_KEYS = ["gluten", "milk", "egg", "fish", "crustacean", "mollusc", "peanut", "treenut", "soy", "sesame"];
const ADV_DEFAULT = () => ({ have: [], haveAny: false, time: 0, level: "", kcal: 0, free: [], diet: "", season: "", kids: false });
let adv = ADV_DEFAULT();
let advOpen = false;

/* ── Dificultad: por ingredientes, pasos y tiempo ── */
const levelCache = new Map();
function recipeLevel(r) {
  if (levelCache.has(r.id)) return levelCache.get(r.id);
  const ing = r.ingredients.es.length, steps = r.steps.es.length;
  const min = r.active; // la dificultad depende del trabajo, no de la nevera
  const waits = r.total > r.active;
  let lv = "medium";
  if (ing <= 8 && steps <= 5 && min != null && min <= 45) lv = "easy";
  else if (ing >= 14 || steps >= 9 || (min != null && min > 120) || (waits && steps >= 7)) lv = "hard";
  levelCache.set(r.id, lv);
  return lv;
}

/* ── Lo que tengo ── */
const HAVE_MAX = 8;
let haveNote = "";
const haveRx = (term) => new RegExp(`\\b${nutriNorm(term).trim().split(/\s+/).map((w) => `${w.replace(/(es|s)$/, "")}(?:s|es)?`).join("\\s+")}\\b`);
function haveCount(r) {
  if (!adv.have.length) return { hit: 0, miss: 0 };
  const txt = nutriNorm(r.ingredients.es.join(" | ") + " | " + r.ingredients.en.join(" | "));
  let hit = 0;
  for (const h of adv.have) if (haveRx(h).test(txt)) hit++;
  return { hit, miss: adv.have.length - hit };
}

/* Lo que le falta para una receta (sin contar sal, pimienta, aceite, agua, lo opcional ni lo de adornar),
   para mostrarlo en cada tarjeta: "Le falta: cilantro, ajíes dulces". */
const HAVE_SKIP = /^(sal|pimienta|aceite|agua|hielo)\b|\bopcional\b|al gusto|para (servir|decorar|adornar|espolvorear|engrasar|untar|freir|acompanar|rebozar|cubrir)|^(hilo|palillos?|palitos?|papel|carbon)/;
function haveMissing(r) {
  const out = [];
  r.ingredients.es.forEach((es, i) => {
    const n = nutriNorm(es);
    if (HAVE_SKIP.test(n)) return;
    const both = `${n} | ${nutriNorm(r.ingredients.en[i])}`;
    if (adv.have.some((h) => haveRx(h).test(both))) return;
    // "2 tazas de arroz de grano mediano, lavado" → "arroz de grano mediano"
    // Quita cantidad y medida (también la segunda: "1 lata de 15 onzas de garbanzos" → "garbanzos").
    const UNIT = /^\s*[\d½¼¾⅓⅔⅛.\/-]*\s*(tazas?|cucharadas?|cucharaditas?|libras?|lbs?|onzas?|oz|latas?|sobres?|dientes?|paquetes?|ramitas?|pizcas?|cups?|tablespoons?|teaspoons?|pounds?|ounces?|cans?|packets?|cloves?|sprigs?|pinch)\b\.?\s*(de\s+|of\s+)?/i;
    const shown = r.ingredients[currentLang][i].replace(LEAD_RE, "").replace(UNIT, "").replace(UNIT, "").replace(/\s*[,(].*$/, "").trim();
    if (shown && !out.includes(shown.toLowerCase())) out.push(shown.toLowerCase());
  });
  return out;
}
/* La línea de la tarjeta (app.js, cardHTML) cuando hay algo en "lo que tengo". */
function haveCardHTML(r) {
  if (!adv.have.length) return "";
  const tr = ft();
  const miss = haveMissing(r);
  if (!miss.length) return `<p class="card-have is-all">${esc(tr.hasAll)}</p>`;
  const shown = miss.slice(0, 3).join(", ");
  return `<p class="card-have"><strong>${esc(tr.lacks)}</strong> ${esc(shown)}${miss.length > 3 ? ` ${esc(tr.more(miss.length - 3))}` : ""}</p>`;
}

function advActive() {
  return Boolean(adv.have.length || adv.time || adv.level || adv.kcal || adv.free.length || adv.diet || adv.season || adv.kids);
}
function advCount() {
  return (adv.have.length ? 1 : 0) + (adv.time ? 1 : 0) + (adv.level ? 1 : 0) + (adv.kcal ? 1 : 0) + adv.free.length + (adv.diet ? 1 : 0) + (adv.season ? 1 : 0) + (adv.kids ? 1 : 0);
}
const advKey = () => JSON.stringify(adv);
const KIDS_IDEA = () => (typeof S_IDEAS !== "undefined" ? S_IDEAS.find((i) => i.label.es.startsWith("Para niños")) : null);
function advOk(r) {
  if (adv.have.length) {
    const c = haveCount(r);
    if (adv.haveAny ? c.hit === 0 : c.miss > 0) return false;
  }
  if (adv.time) { const m = totalMinutes(r); if (m == null || m > adv.time) return false; }
  if (adv.level && recipeLevel(r) !== adv.level) return false;
  if (adv.kcal) { const e = estimateNutrition(r); if (!e.counted || e.per.kcal > adv.kcal) return false; }
  if (adv.free.length) { const keys = getAdvisories(r).allergens.map((a) => a.key); if (adv.free.some((k) => keys.includes(k))) return false; }
  if (adv.diet === "veg" && !isVegetarian(r)) return false;
  if (adv.diet === "vegan" && !isVegan(r)) return false;
  if (adv.season && !inSeasonOf(r, adv.season)) return false;
  // Sin la regla de "para niños" no pasa ninguna (antes pasaban todas, sin aviso; revisión 2, N8): advNotes() lo dice.
  if (adv.kids) { const idea = KIDS_IDEA(); if (!idea || !idea.test(r, { nameAll: nutriNorm(r.name.es + " " + r.name.en) })) return false; }
  return true;
}
/* Avisos junto al conteo de resultados (app.js, renderRecipes): lo que un filtro deja fuera sin decirlo. */
function advNotes() {
  const tr = ft(), out = [];
  if (adv.time) { const n = recipes.filter((r) => totalMinutes(r) == null).length; if (n) out.push(tr.timeOut(n)); }
  if (adv.kcal) { const n = recipes.filter((r) => !estimateNutrition(r).counted).length; if (n) out.push(tr.kcalOut(n)); }
  if (adv.kids && !KIDS_IDEA()) out.push(tr.kidsOff);
  return out;
}
/* Con "lo que tengo" y sin búsqueda: primero las que usan más de lo que tiene. */
function advSort(list) {
  if (!adv.have.length) return list;
  return list.sort((a, b) => haveCount(b).hit - haveCount(a).hit || a.ingredients.es.length - b.ingredients.es.length);
}

/* ── Vista ── */
function renderAdvButton() {
  const b = $("adv-toggle");
  if (!b) return;
  const n = advCount();
  b.setAttribute("aria-expanded", String(advOpen));
  b.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-filter"/></svg><span>${esc(ft().btn)}</span>${n ? `<span class="nav-badge">${n}</span>` : ""}`;
}
function renderAdvPanel() {
  const box = $("adv-filters");
  if (!box) return;
  // Lo que se está escribiendo no se pierde cuando el panel se vuelve a pintar (antes se borraba).
  const typing = $("adv-have-text");
  const draft = typing ? { value: typing.value, focus: document.activeElement === typing, a: typing.selectionStart, b: typing.selectionEnd } : null;
  box.hidden = !advOpen;
  renderAdvButton();
  if (!advOpen) return;
  const tr = ft();
  const ADV = ADVICE_TEXT[currentLang];
  const seasons = PLAN_T[currentLang].seasons;
  const radio = (name, value, label, on) => `<label class="chip-check chip-radio"><input type="radio" name="adv-${name}" data-adv="${name}" value="${value}" ${on ? "checked" : ""}><span>${esc(label)}</span></label>`;
  box.innerHTML = `
    <div class="container adv-inner">
      <div class="adv-head"><h2 class="panel-title">${esc(tr.title)}</h2>
        <button type="button" class="icon-btn" data-adv-close aria-label="${esc(tr.close)}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button></div>
      <div class="adv-have">
        <h3 class="adv-title">${esc(tr.haveTitle)}</h3>
        <p class="plans-help">${esc(tr.haveHelp)}</p>
        <form class="col-new" data-adv-have>
          <label class="sr-only" for="adv-have-text">${esc(tr.haveTitle)}</label>
          <input id="adv-have-text" type="text" maxlength="200" placeholder="${esc(tr.havePh)}" autocomplete="off" enterkeyhint="done">
          <button type="submit" class="btn btn-outline btn-sm">${esc(tr.haveAdd)}</button>
        </form>
        <p class="adv-note" role="status">${esc(haveNote || (adv.have.length ? `${tr.found(recipes.filter(advOk).length)} ${adv.have.length < HAVE_MAX ? tr.haveLeft(HAVE_MAX - adv.have.length) : tr.haveMax(HAVE_MAX)}` : ""))}</p>
        ${adv.have.length ? `<ul class="shop-chips">${adv.have.map((h, i) => `<li class="shop-chip"><span>${esc(h)}</span>
          <button type="button" class="shop-chip-x" data-adv-have-x="${i}" aria-label="${esc(tr.haveRemove(h))}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button></li>`).join("")}</ul>
          <div class="adv-row">${radio("haveAny", "0", tr.haveAll, !adv.haveAny)}${radio("haveAny", "1", tr.haveAny, adv.haveAny)}</div>` : ""}
      </div>
      <div class="adv-grid">
        <fieldset class="adv-set"><legend>${esc(tr.time)}</legend>
          ${radio("time", 0, tr.timeAny, !adv.time)}${[15, 30, 45].map((m) => radio("time", m, tr.timeOpt(m), adv.time === m)).join("")}${radio("time", 60, tr.timeHour, adv.time === 60)}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.level)}</legend>
          ${Object.entries(tr.levels).map(([k, l]) => radio("level", k, l, adv.level === k)).join("")}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.kcal)}</legend>
          ${radio("kcal", 0, tr.kcalAny, !adv.kcal)}${[300, 500, 700].map((k) => radio("kcal", k, tr.kcalOpt(k), adv.kcal === k)).join("")}
          ${adv.kcal ? `<p class="adv-note">${esc(tr.kcalOut(recipes.filter((r) => !estimateNutrition(r).counted).length))}</p>` : ""}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.diet)}</legend>
          ${Object.entries(tr.diets).map(([k, l]) => radio("diet", k, l, adv.diet === k)).join("")}</fieldset>
        <fieldset class="adv-set adv-wide"><legend>${esc(tr.free)}</legend>
          ${FREE_KEYS.map((k) => `<label class="chip-check"><input type="checkbox" data-adv-free="${k}" ${adv.free.includes(k) ? "checked" : ""}><span>${esc(ADV.allergens[k].replace(/\s*\(.*\)$/, ""))}</span></label>`).join("")}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.season)}</legend>
          ${radio("season", "", tr.seasonAny, !adv.season)}${SEASON_KEYS.map((k) => radio("season", k, seasons[k], adv.season === k)).join("")}</fieldset>
        <fieldset class="adv-set"><legend class="sr-only">${esc(tr.kids)}</legend>
          <label class="chip-check"><input type="checkbox" data-adv-kids ${adv.kids ? "checked" : ""}><span>${esc(tr.kids)}</span></label></fieldset>
      </div>
      ${advActive() ? `<button type="button" class="btn btn-ghost btn-sm" data-adv-clear>${esc(tr.clear)}</button>` : ""}
    </div>`;
  const again = $("adv-have-text");
  if (draft && again) {
    again.value = draft.value;
    if (draft.focus) { again.focus({ preventScroll: true }); try { again.setSelectionRange(draft.a, draft.b); } catch { /* sin selección */ } }
  }
}
function advChanged(focusSel) {
  renderAdvPanel();
  renderCategories();
  if (focusSel) { const el = document.querySelector(focusSel); if (el) el.focus({ preventScroll: true }); }
}
function setupFilters() {
  const box = $("adv-filters");
  if (!box) return;
  $("adv-toggle").addEventListener("click", () => {
    advOpen = !advOpen; renderAdvPanel();
    if (advOpen) { box.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" }); $("adv-have-text").focus({ preventScroll: true }); }
  });
  box.addEventListener("click", (e) => {
    if (e.target.closest("[data-adv-close]")) { advOpen = false; renderAdvPanel(); $("adv-toggle").focus(); return; }
    if (e.target.closest("[data-adv-clear]")) { adv = ADV_DEFAULT(); haveNote = ""; advChanged(); return; }
    const x = e.target.closest("[data-adv-have-x]");
    if (x) { adv.have.splice(+x.dataset.advHaveX, 1); haveNote = ""; advChanged("#adv-have-text"); }
  });
  box.addEventListener("submit", (e) => {
    if (!e.target.closest("[data-adv-have]")) return;
    e.preventDefault();
    const input = $("adv-have-text");
    // Varias a la vez: "pollo, papa y cilantro".
    const terms = input.value.split(/,|\s+y\s+|\s+and\s+/).map((s) => s.trim().toLowerCase()).filter((s) => s.length >= 2);
    const left = [];
    for (const term of terms) {
      if (adv.have.includes(term)) continue;
      if (adv.have.length < HAVE_MAX) adv.have.push(term); else left.push(term);
    }
    // Antes lo que pasaba de 8 se perdía sin aviso: ahora se dice y se queda escrito.
    haveNote = left.length ? ft().haveMax(HAVE_MAX) : "";
    input.value = left.join(", ");
    advChanged("#adv-have-text");
    scrollToResultsSoon();
  });
  box.addEventListener("change", (e) => {
    const el = e.target;
    if (el.dataset.adv) {
      const k = el.dataset.adv;
      adv[k] = k === "haveAny" ? el.value === "1" : ["time", "kcal"].includes(k) ? +el.value : el.value;
      advChanged(`[data-adv="${k}"][value="${CSS.escape(el.value)}"]`);
    } else if (el.dataset.advFree) {
      const k = el.dataset.advFree;
      adv.free = el.checked ? [...adv.free, k] : adv.free.filter((x) => x !== k);
      advChanged(`[data-adv-free="${k}"]`);
    } else if (el.matches("[data-adv-kids]")) { adv.kids = el.checked; advChanged("[data-adv-kids]"); }
  });
  renderAdvButton();
}
let scrollSoonTimer = 0;
function scrollToResultsSoon() { clearTimeout(scrollSoonTimer); scrollSoonTimer = setTimeout(() => { if (window.innerWidth < 760) scrollToResults(); }, 50); }
function clearAdvFilters() { adv = ADV_DEFAULT(); renderAdvPanel(); }
document.addEventListener("DOMContentLoaded", setupFilters);
