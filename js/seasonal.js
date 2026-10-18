/* Recetarios de Aquí · Frutas, viandas y vegetales de temporada en Puerto Rico.
 *
 * Calendario APROXIMADO de la cosecha típica en la isla (meses de más abundancia); cambia con el
 * año, la lluvia y la zona. En el inicio, la sección "De temporada en la isla" muestra lo de este
 * mes: cada botón busca las recetas que lo usan. Los planes de comida dan un pequeño empujón a las
 * recetas con algo de temporada (seasonalBonus, js/plans.js).
 * Para ajustar un mes, cambie `m` (1 = enero … 12 = diciembre). `rx` busca en los ingredientes. */

const PR_PRODUCE = [
  { es: "Mangó", en: "Mango", m: [5, 6, 7, 8], rx: /\bmangos?\b/ },
  { es: "Quenepas", en: "Spanish limes (quenepas)", m: [7, 8, 9], rx: /\bquenepas?\b/ },
  { es: "Aguacate", en: "Avocado", m: [7, 8, 9, 10, 11, 12, 1], rx: /\baguacates?\b/ },
  { es: "Panapén y pana", en: "Breadfruit", m: [7, 8, 9, 10], rx: /\b(panapen|panas?|pana de pepitas)\b/ },
  { es: "Guanábana", en: "Soursop", m: [3, 4, 5, 6, 7, 8], rx: /\bguanabanas?\b/ },
  { es: "Parcha", en: "Passion fruit", m: [6, 7, 8, 9, 10, 11, 12], rx: /\bparchas?\b/ },
  { es: "China (naranja)", en: "Oranges", m: [10, 11, 12, 1, 2, 3], rx: /\b(chinas?|naranjas?)\b(?! agria)/ },
  { es: "Toronja", en: "Grapefruit", m: [10, 11, 12, 1, 2, 3], rx: /\btoronjas?\b/ },
  { es: "Guayaba", en: "Guava", m: [8, 9, 10, 11], rx: /\bguayabas?\b(?! en|, pasta)|pulpa de guayaba/ },
  { es: "Acerola", en: "Acerola", m: [4, 5, 6, 7, 8, 9, 10, 11], rx: /\bacerolas?\b/ },
  { es: "Carambola", en: "Star fruit", m: [8, 9, 10, 11, 12, 1, 2], rx: /\bcarambolas?\b/ },
  { es: "Pajuil", en: "Cashew apple", m: [4, 5, 6], rx: /\bpajuil(es)?\b/ },
  { es: "Níspero", en: "Sapodilla", m: [2, 3, 4, 5, 6], rx: /\bnisperos?\b/ },
  { es: "Jobos", en: "Hog plums (jobos)", m: [8, 9, 10], rx: /\bjobos?\b/ },
  { es: "Caimito", en: "Star apple", m: [2, 3, 4, 5], rx: /\bcaimitos?\b/ },
  { es: "Tamarindo", en: "Tamarind", m: [1, 2, 3, 4], rx: /\btamarindos?\b/ },
  { es: "Mamey", en: "Mamey", m: [5, 6, 7, 8], rx: /\bmamey(es)?\b/ },
  { es: "Melón de agua (sandía)", en: "Watermelon", m: [5, 6, 7, 8], rx: /\bsandias?\b|melon de agua/ },
  { es: "Guingambó", en: "Okra", m: [5, 6, 7, 8, 9], rx: /\b(guingambos?|quimbombos?)\b/ },
  { es: "Gandules verdes", en: "Fresh pigeon peas", m: [11, 12, 1, 2], rx: /\bgandules?\b/ },
  { es: "Ñame", en: "Yam (ñame)", m: [11, 12, 1, 2, 3], rx: /\bnames?\b/ },
  { es: "Chayote", en: "Chayote", m: [10, 11, 12, 1, 2, 3], rx: /\bchayotes?\b/ },
  // Todo el año
  { es: "Plátano y guineo", en: "Plantains and bananas", m: "all", rx: /\b(platanos?|guineos?|guineitos?)\b/ },
  { es: "Yautía, yuca y batata", en: "Taro, cassava and sweet potato", m: "all", rx: /\b(yautias?|yucas?|batatas?)\b/ },
  { es: "Calabaza", en: "Calabaza squash", m: "all", rx: /\bcalabaza\b/ },
  { es: "Piña", en: "Pineapple", m: "all", rx: /\bpinas?\b/ },
  { es: "Lechosa", en: "Papaya", m: "all", rx: /\b(lechosas?|papayas?)\b/ },
  { es: "Coco", en: "Coconut", m: "all", rx: /\bcoco\b(?! en polvo)/ },
  { es: "Ají dulce y recao", en: "Sweet peppers and culantro", m: "all", rx: /\b(aji dulce|ajies dulces|recao)\b/ },
  { es: "Limón", en: "Lime", m: "all", rx: /\blimon(es)?\b/ }
];
const SEASONAL_T = {
  es: { title: (mes) => `De temporada en la isla · ${mes}`, sub: "Lo que más abunda este mes en Puerto Rico: más fresco, más sabroso y casi siempre más barato. Toque uno para ver sus recetas.", all: "Todo el año", note: "Calendario aproximado de la cosecha típica; cambia con el año, la lluvia y la zona.", recipes: (n) => `${n} recetas` },
  en: { title: (mes) => `In season on the island · ${mes}`, sub: "What's most plentiful in Puerto Rico this month: fresher, tastier and usually cheaper. Tap one to see its recipes.", all: "All year", note: "Approximate calendar of the typical harvest; it changes with the year, the rain and the area.", recipes: (n) => `${n} recipes` }
};
const monthNow = () => new Date().getMonth() + 1;
const produceNow = (m = monthNow()) => PR_PRODUCE.filter((p) => p.m !== "all" && p.m.includes(m));
const produceCount = new Map();
function produceRecipes(p) {
  if (!produceCount.has(p.es)) produceCount.set(p.es, recipes.filter((r) => p.rx.test(nutriNorm(r.ingredients.es.join(" | ") + " | " + r.name.es))).length);
  return produceCount.get(p.es);
}
/* Planes: una receta con algo de temporada (no de todo el año) sube un poco. */
const seasonalCache = new Map();
function seasonalBonus(r) {
  if (!seasonalCache.has(r.id)) {
    const txt = nutriNorm(r.ingredients.es.join(" | ") + " | " + r.name.es);
    seasonalCache.set(r.id, produceNow().some((p) => p.rx.test(txt)) ? 3 : 0);
  }
  return seasonalCache.get(r.id);
}
function renderSeasonal() {
  const box = $("temporada");
  if (!box) return;
  const tr = SEASONAL_T[currentLang];
  const now = produceNow().filter((p) => produceRecipes(p) > 0);
  const all = PR_PRODUCE.filter((p) => p.m === "all" && produceRecipes(p) > 0);
  const mes = new Date().toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", { month: "long" });
  const chip = (p) => `<li><button type="button" class="season-chip" data-produce="${esc(p.es)}">${esc(p[currentLang])}<span class="season-n">${produceRecipes(p)}</span></button></li>`;
  box.hidden = !now.length;
  box.innerHTML = `<div class="container">
    <div class="section-head">
      <h2 class="section-title" id="season-heading"><svg class="icon" aria-hidden="true"><use href="#i-leaf"/></svg> ${esc(tr.title(mes))}</h2>
      <p class="section-sub">${esc(tr.sub)}</p>
    </div>
    <ul class="season-list">${now.map(chip).join("")}</ul>
    <details class="season-all"><summary>${esc(tr.all)}</summary><ul class="season-list">${all.map(chip).join("")}</ul></details>
    <p class="plans-help">${esc(tr.note)}</p>
  </div>`;
}
function setupSeasonal() {
  renderSeasonal();
  const box = $("temporada");
  if (!box) return;
  box.addEventListener("click", (e) => {
    const b = e.target.closest("[data-produce]");
    if (!b) return;
    const p = PR_PRODUCE.find((x) => x.es === b.dataset.produce);
    // Busca por el primer nombre (sin lo de paréntesis): "China (naranja)" → "china".
    const q = p.es.replace(/\s*\(.*\)/, "").split(/ y |,/)[0].toLowerCase();
    const input = $("search-input");
    input.value = q;
    $("search-clear").hidden = false;
    $("search-form").requestSubmit();
  });
}
document.addEventListener("DOMContentLoaded", setupSeasonal);
