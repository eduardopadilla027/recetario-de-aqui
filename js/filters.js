/* Recetarios de Aquí · "¿Qué tengo en la nevera?" y filtros combinables.
 *
 * Un panel bajo el buscador (botón "Filtros") con:
 * - Lo que tengo: escriba ingredientes ("pollo", "papa", "cilantro") y salen las recetas que los
 *   llevan todos (o al menos uno), ordenadas por las que menos cosas le faltan.
 * - Tiempo, dificultad (calculada de ingredientes, pasos y tiempo), calorías por porción,
 *   sin alérgenos, dieta (vegetariana o vegana) y época.
 * - Bajo el botón, una línea que explica para qué sirve; dentro del panel (v4.57), una explicación corta de cada grupo y el micrófono para decir los ingredientes (startDictation, app.js).
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
    season: "Época", seasonAny: "Cualquiera",
    count: (n) => (n === 1 ? "1 filtro" : `${n} filtros`),
    levelTag: { easy: "Fácil", medium: "Intermedia", hard: "Elaborada" },
    missing: (n) => (n ? `le faltan ${n} de sus ingredientes` : "tiene todo"),
    lacks: "Le falta:", hasAll: "Tiene lo principal", more: (n) => `y ${n} más`,
    haveMax: (n) => `Máximo ${n} ingredientes: quite uno para añadir otro.`,
    haveLeft: (n) => `Puede añadir ${n} más.`,
    found: (n) => (n === 1 ? "1 receta usa lo que tiene." : `${n} recetas usan lo que tiene.`),
    kcalOut: (n) => (n === 1 ? "1 receta sin estimado de calorías queda fuera de este filtro." : `${n} recetas sin estimado de calorías quedan fuera de este filtro.`),
    timeOut: (n) => (n === 1 ? "1 receta sin tiempo anotado queda fuera del filtro de tiempo." : `${n} recetas sin tiempo anotado quedan fuera del filtro de tiempo.`),
    help: "Toque «Filtros» para ver sólo las recetas que quiere: por tiempo, dificultad, calorías, dieta, sin alérgenos, época o con «¿Qué tengo en la nevera?». Se suman entre sí y con lo que busque.",
    intro: "Marque lo que quiera: los filtros se suman entre sí y con la búsqueda, y el número del botón dice cuántos tiene puestos.",
    hints: {
      time: "Del principio hasta servir, con nevera y esperas.",
      level: "Según los ingredientes, los pasos y el tiempo.",
      kcal: "Estimado por porción.",
      diet: "Vegetariana: sin carne ni pescado. Vegana: tampoco huevo, leche ni miel.",
      free: "Quita las recetas que llevan ese alérgeno.",
      season: "Recetas de la temporada o de la fiesta."
    },
    micHave: "Decir los ingredientes", haveVoice: "O toque el micrófono y dígalos con «y»: «pollo y papa y cilantro»."
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
    season: "Season", seasonAny: "Any",
    count: (n) => (n === 1 ? "1 filter" : `${n} filters`),
    levelTag: { easy: "Easy", medium: "Intermediate", hard: "Elaborate" },
    missing: (n) => (n ? `${n} of your ingredients missing` : "you have it all"),
    lacks: "Missing:", hasAll: "You have the main things", more: (n) => `and ${n} more`,
    haveMax: (n) => `Up to ${n} ingredients: remove one to add another.`,
    haveLeft: (n) => `You can add ${n} more.`,
    found: (n) => (n === 1 ? "1 recipe uses what you have." : `${n} recipes use what you have.`),
    kcalOut: (n) => (n === 1 ? "1 recipe without a calorie estimate is left out by this filter." : `${n} recipes without a calorie estimate are left out by this filter.`),
    timeOut: (n) => (n === 1 ? "1 recipe with no time listed is left out by the time filter." : `${n} recipes with no time listed are left out by the time filter.`),
    help: "Tap «Filters» to see only the recipes you want: by time, difficulty, calories, diet, allergen-free, season or with «What's in my fridge?». They add up with each other and with your search.",
    intro: "Pick what you want: filters add up with each other and with the search, and the number on the button shows how many are on.",
    hints: {
      time: "From start to serving, including fridge and waiting.",
      level: "Based on ingredients, steps and time.",
      kcal: "Estimated per serving.",
      diet: "Vegetarian: no meat or fish. Vegan: also no eggs, milk or honey.",
      free: "Leaves out recipes with that allergen.",
      season: "Recipes for the season or the holiday."
    },
    micHave: "Say the ingredients", haveVoice: "Or tap the microphone and say them with «and»: «chicken and potato and cilantro»."
  }
};
const ft = () => FT[currentLang];
const FREE_KEYS = ["gluten", "milk", "egg", "fish", "crustacean", "mollusc", "peanut", "treenut", "soy", "sesame"];
const ADV_DEFAULT = () => ({ have: [], haveAny: false, time: 0, level: "", kcal: 0, free: [], diet: "", season: "" });
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
  return Boolean(adv.have.length || adv.time || adv.level || adv.kcal || adv.free.length || adv.diet || adv.season);
}
function advCount() {
  return (adv.have.length ? 1 : 0) + (adv.time ? 1 : 0) + (adv.level ? 1 : 0) + (adv.kcal ? 1 : 0) + adv.free.length + (adv.diet ? 1 : 0) + (adv.season ? 1 : 0);
}
const advKey = () => JSON.stringify(adv);
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
  return true;
}
/* Avisos junto al conteo de resultados (app.js, renderRecipes): lo que un filtro deja fuera sin decirlo. */
function advNotes() {
  const tr = ft(), out = [];
  if (adv.time) { const n = recipes.filter((r) => totalMinutes(r) == null).length; if (n) out.push(tr.timeOut(n)); }
  if (adv.kcal) { const n = recipes.filter((r) => !estimateNutrition(r).counted).length; if (n) out.push(tr.kcalOut(n)); }
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
  $("filters-help").textContent = ft().help;
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
  const hint = (k) => `<p class="adv-hint">${esc(tr.hints[k])}</p>`;
  const voice = Boolean(dictationClass());
  box.innerHTML = `
    <div class="container adv-inner">
      <div class="adv-head"><h2 class="panel-title">${esc(tr.title)}</h2>
        <button type="button" class="icon-btn" data-adv-close aria-label="${esc(tr.close)}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button></div>
      <p class="adv-intro">${esc(tr.intro)}</p>
      <div class="adv-have">
        <h3 class="adv-title">${esc(tr.haveTitle)}</h3>
        <p class="plans-help">${esc(tr.haveHelp)}${voice ? ` ${esc(tr.haveVoice)}` : ""}</p>
        <form class="col-new" data-adv-have>
          <label class="sr-only" for="adv-have-text">${esc(tr.haveTitle)}</label>
          <input id="adv-have-text" type="text" maxlength="200" placeholder="${esc(tr.havePh)}" autocomplete="off" enterkeyhint="done">
          ${voice ? `<button type="button" class="search-mic adv-mic" data-adv-mic aria-pressed="false" aria-label="${esc(tr.micHave)}"><svg class="icon" aria-hidden="true"><use href="#i-mic"/></svg></button>` : ""}
          <button type="submit" class="btn btn-outline btn-sm">${esc(tr.haveAdd)}</button>
        </form>
        <p class="adv-note" role="status">${esc(haveNote || (adv.have.length ? `${tr.found(recipes.filter(advOk).length)} ${adv.have.length < HAVE_MAX ? tr.haveLeft(HAVE_MAX - adv.have.length) : tr.haveMax(HAVE_MAX)}` : ""))}</p>
        ${adv.have.length ? `<ul class="shop-chips">${adv.have.map((h, i) => `<li class="shop-chip"><span>${esc(h)}</span>
          <button type="button" class="shop-chip-x" data-adv-have-x="${i}" aria-label="${esc(tr.haveRemove(h))}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button></li>`).join("")}</ul>
          <div class="adv-row">${radio("haveAny", "0", tr.haveAll, !adv.haveAny)}${radio("haveAny", "1", tr.haveAny, adv.haveAny)}</div>` : ""}
      </div>
      <div class="adv-grid">
        <fieldset class="adv-set"><legend>${esc(tr.time)}</legend>${hint("time")}
          ${radio("time", 0, tr.timeAny, !adv.time)}${[15, 30, 45].map((m) => radio("time", m, tr.timeOpt(m), adv.time === m)).join("")}${radio("time", 60, tr.timeHour, adv.time === 60)}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.level)}</legend>${hint("level")}
          ${Object.entries(tr.levels).map(([k, l]) => radio("level", k, l, adv.level === k)).join("")}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.kcal)}</legend>${hint("kcal")}
          ${radio("kcal", 0, tr.kcalAny, !adv.kcal)}${[300, 500, 700].map((k) => radio("kcal", k, tr.kcalOpt(k), adv.kcal === k)).join("")}
          ${adv.kcal ? `<p class="adv-note">${esc(tr.kcalOut(recipes.filter((r) => !estimateNutrition(r).counted).length))}</p>` : ""}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.diet)}</legend>${hint("diet")}
          ${Object.entries(tr.diets).map(([k, l]) => radio("diet", k, l, adv.diet === k)).join("")}</fieldset>
        <fieldset class="adv-set adv-wide"><legend>${esc(tr.free)}</legend>${hint("free")}
          ${FREE_KEYS.map((k) => `<label class="chip-check"><input type="checkbox" data-adv-free="${k}" ${adv.free.includes(k) ? "checked" : ""}><span>${esc(ADV.allergens[k].replace(/\s*\(.*\)$/, ""))}</span></label>`).join("")}</fieldset>
        <fieldset class="adv-set"><legend>${esc(tr.season)}</legend>${hint("season")}
          ${radio("season", "", tr.seasonAny, !adv.season)}${SEASON_KEYS.map((k) => radio("season", k, seasons[k], adv.season === k)).join("")}</fieldset>
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
    const mic = e.target.closest("[data-adv-mic]");
    if (mic) {
      // Lo dicho se añade como si lo hubiera escrito: "pollo y papa y cilantro" → tres ingredientes.
      startDictation($("adv-have-text"), mic, () => {
        const form = box.querySelector("[data-adv-have]");
        if (form.requestSubmit) form.requestSubmit(); else form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      });
      return;
    }
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
    }
  });
  renderAdvButton();
}
let scrollSoonTimer = 0;
function scrollToResultsSoon() { clearTimeout(scrollSoonTimer); scrollSoonTimer = setTimeout(() => { if (window.innerWidth < 760) scrollToResults(); }, 50); }
function clearAdvFilters() { adv = ADV_DEFAULT(); renderAdvPanel(); }
document.addEventListener("DOMContentLoaded", setupFilters);
