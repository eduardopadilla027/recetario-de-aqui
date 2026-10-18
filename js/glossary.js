/* Recetarios de Aquí · Glosario de la cocina boricua (v4.30).
 *
 * Palabras que las recetas usan tal cual, también en inglés (sofrito, recao, caldero, pilón, queso de
 * papa…), con lo que son y, si aplica, con qué se pueden sustituir fuera de Puerto Rico. En cada receta
 * sale el recuadro "Palabras de la cocina boricua" con las que aparecen en ella (renderGlossary, lo llama
 * renderModal de app.js) y la página #/glosario las tiene todas. `rx` se prueba sobre el texto de la
 * receta en minúsculas y sin acentos, en el idioma que se ve.
 * Depende de globales de app.js ($, esc, norm, currentLang, current, jumpTo, BRAND). */

const GLOSSARY = [
  { key: "sofrito", rx: /\bsofrito/, es: ["Sofrito", "Base de muchos platos: se licúan o pican recao, ajíes dulces, cebolla, ajo, pimiento y cilantrillo. Se sofríe al empezar el guiso. Se congela bien en cubitos."], en: ["Sofrito", "The base of many dishes: culantro (recao), sweet peppers, onion, garlic, bell pepper and cilantro, blended or chopped and cooked at the start of a stew. It freezes well in ice-cube trays."] },
  { key: "recao", rx: /\b(recao|recaito|culantro)\b/, es: ["Recao (culantro)", "Hoja larga y dentada de sabor más fuerte que el cilantrillo (Eryngium foetidum). Si no lo consigue, use el doble de cilantrillo. El recaíto es el sofrito verde hecho con recao."], en: ["Recao (culantro)", "A long, serrated leaf with a stronger flavor than cilantro (Eryngium foetidum). If you can't find it, use twice as much cilantro. Recaíto is the green sofrito made with recao."] },
  { key: "aji-dulce", rx: /\baji(es)? dulces?\b|sweet (chili )?peppers? \(aji/, es: ["Ají dulce", "Ají pequeño, aromático y sin picante. Se sustituye con un poco de pimiento rojo o cubanela."], en: ["Ají dulce", "A small, fragrant pepper with no heat. Substitute a little red bell pepper or cubanelle."] },
  { key: "caldero", rx: /\bcaldero/, es: ["Caldero", "Olla de aluminio grueso con tapa, de fondo redondeado, para arroces, guisos y frituras. La hace igual una olla gruesa u horno holandés."], en: ["Caldero", "A heavy cast-aluminum pot with a lid and rounded bottom, used for rice, stews and frying. A heavy pot or Dutch oven works the same."] },
  { key: "pilon", rx: /\bpilon\b|\bmortar\b/, es: ["Pilón", "Mortero de madera para majar ajo, adobos y el mofongo. Se puede usar un procesador o un tazón y un mazo."], en: ["Pilón", "A wooden mortar and pestle for mashing garlic, adobos and mofongo. A food processor, or a bowl and a masher, also work."] },
  { key: "queso-papa", rx: /queso de papa/, es: ["Queso de papa", "Queso amarillo suave que se vende en Puerto Rico (no lleva papa). Se derrite fácil. Sustituto: queso americano o cheddar suave."], en: ["Queso de papa", "A mild yellow cheese sold in Puerto Rico (it has no potato). It melts easily. Substitute: American cheese or a mild cheddar."] },
  { key: "queso-freir", rx: /queso (blanco )?(de|para) freir|frying cheese/, es: ["Queso de freír", "Queso blanco firme que se dora sin derretirse. Sustituto: queso halloumi o paneer."], en: ["Frying cheese (queso de freír)", "A firm white cheese that browns without melting. Substitute: halloumi or paneer."] },
  { key: "achiote", rx: /\b(achiote|annatto)\b/, es: ["Achiote", "Semilla roja que da color y un sabor suave. Se fríe en aceite para hacer «aceite de achiote»."], en: ["Achiote (annatto)", "A red seed that adds color and a mild flavor. It's fried in oil to make “annatto oil”."] },
  { key: "sazon", rx: /\bsazon\b/, es: ["Sazón", "Sobre de condimento con achiote (o azafrán), ajo, comino y sal. Sustituto casero: achiote molido, ajo en polvo, comino y sal."], en: ["Sazón", "A seasoning packet with annatto (or saffron), garlic, cumin and salt. Homemade substitute: ground annatto, garlic powder, cumin and salt."] },
  { key: "adobo", rx: /\badobo\b/, es: ["Adobo", "Mezcla para sazonar carnes: seco (ajo en polvo, orégano, sal y pimienta) o mojado (ajo majado, orégano, aceite y vinagre o limón)."], en: ["Adobo", "A seasoning for meats: dry (garlic powder, oregano, salt and pepper) or wet (mashed garlic, oregano, oil and vinegar or lime)."] },
  { key: "mojo", rx: /\bmojo\b/, es: ["Mojo", "Salsa de ajo y aceite con naranja agria o limón. El mojo isleño (de Salinas) es otra cosa: salsa criolla de tomate, cebolla, pimiento, aceitunas y alcaparras."], en: ["Mojo", "A garlic and oil sauce with sour orange or lime. Mojo isleño (from Salinas) is different: a creole sauce of tomato, onion, bell pepper, olives and capers."] },
  { key: "viandas", rx: /\bviandas?\b|root vegetables/, es: ["Viandas", "Raíces y frutos con almidón que se hierven o fríen: yautía, ñame, malanga, yuca, batata, plátano, guineo verde y pana."], en: ["Viandas", "Starchy roots and fruits that are boiled or fried: yautía, ñame, malanga, cassava, sweet potato, plantain, green banana and breadfruit."] },
  { key: "yautia", rx: /\b(yautia|malanga)\b/, es: ["Yautía / malanga", "Raíz de cáscara peluda y carne blanca o morada, cremosa al hervirla. Se ve como taro o «eddo»."], en: ["Yautía / malanga", "A hairy-skinned root with white or purple flesh, creamy when boiled. Sold as taro or eddo."] },
  { key: "name", rx: /\bname\b|ñame/, es: ["Ñame", "Raíz grande de carne blanca y firme. En inglés es «yam» (el verdadero, no la batata)."], en: ["Ñame", "A large root with firm white flesh: the true yam (not the orange sweet potato)."] },
  { key: "pana", rx: /\b(pana|panapen|breadfruit)\b/, es: ["Pana (panapén)", "Fruto grande y verde del árbol de pana; se come hervido, frito (tostones) o en mofongo como una vianda."], en: ["Pana (breadfruit)", "The large green fruit of the breadfruit tree, eaten boiled, fried (tostones) or in mofongo like a root vegetable."] },
  { key: "guineo", rx: /\bguine(o|itos?)\b/, es: ["Guineo", "Banano. «Guineo verde» es el banano sin madurar que se hierve como vianda o se ralla para pasteles."], en: ["Guineo", "Banana. “Guineo verde” is the unripe banana, boiled like a root vegetable or grated for pasteles."] },
  { key: "amarillos", rx: /\bamarillos?\b|sweet plantains?/, es: ["Amarillos", "Plátanos maduros (amarillos o negros) fritos en tajadas: dulces y suaves."], en: ["Amarillos", "Ripe (yellow or black) plantains fried in slices: sweet and soft."] },
  { key: "tostones", rx: /\btostones?\b/, es: ["Tostones", "Plátano verde frito, aplastado y vuelto a freír hasta quedar crujiente."], en: ["Tostones", "Green plantain fried, flattened and fried again until crisp."] },
  { key: "mofongo", rx: /\bmofongo/, es: ["Mofongo", "Plátano verde frito majado en el pilón con ajo y chicharrón o tocino; también se hace con yuca, pana o amarillos."], en: ["Mofongo", "Fried green plantain mashed in the pilón with garlic and pork cracklings or bacon; also made with cassava, breadfruit or ripe plantain."] },
  { key: "china", rx: /\bchinas?\b/, es: ["China", "Así se le dice en Puerto Rico a la naranja dulce. La naranja agria se usa para adobar."], en: ["China", "What sweet oranges are called in Puerto Rico. Sour orange (naranja agria) is used for marinades."] },
  { key: "habichuelas", rx: /\bhabichuelas?\b|gandules?|pigeon peas/, es: ["Habichuelas y gandules", "Habichuelas son los frijoles (rojos, rosadas, negras, blancas). Gandules son los guandúes (pigeon peas), el grano de la Navidad."], en: ["Habichuelas and gandules", "Habichuelas are beans (red, pink, black, white). Gandules are pigeon peas, the Christmas legume."] },
  { key: "pique", rx: /\bpique\b/, es: ["Pique", "Vinagre o jugo con ajíes picantes, ajo y especias, macerado en botella. Se le echa a gusto en la mesa."], en: ["Pique", "Vinegar or juice steeped with hot peppers, garlic and spices in a bottle, added at the table to taste."] },
  { key: "pan-sobao", rx: /pan sobao/, es: ["Pan sobao", "Pan de agua suave y un poco dulce, con manteca. Sustituto: pan de leche o pan francés suave."], en: ["Pan sobao", "A soft, slightly sweet Puerto Rican bread made with lard. Substitute: a soft French or milk bread."] },
  { key: "bacalao", rx: /\bbacala(o|itos?)\b|salt cod/, es: ["Bacalao", "Pescado salado y seco. Hay que desalarlo antes: remojo en agua fría varias horas (o la noche) cambiando el agua, o hervirlo y escurrirlo."], en: ["Bacalao (salt cod)", "Dried salted fish. It must be desalted first: soak in cold water for several hours (or overnight), changing the water, or boil and drain it."] },
  { key: "papel-pastel", rx: /papel de pastel|hojas? de platano|banana leaves|parchment/, es: ["Hoja de plátano y papel de pastel", "Para envolver pasteles: se pasan las hojas por la llama o agua caliente para que no se rompan; el papel de pastel (encerado) va por fuera."], en: ["Banana leaf and pastel paper", "For wrapping pasteles: pass the leaves over a flame or hot water so they don't tear; the waxed pastel paper goes outside."] }
];

const GLOSS_T = {
  es: { title: "Palabras de la cocina boricua", all: "Ver el glosario completo", pageTitle: "Glosario de la cocina boricua", pageIntro: "Lo que quieren decir las palabras que usan las recetas, y con qué sustituir lo que no se consigue fuera de la isla." },
  en: { title: "Puerto Rican kitchen words", all: "See the full glossary", pageTitle: "Puerto Rican kitchen glossary", pageIntro: "What the words used in the recipes mean, and what to use for ingredients that are hard to find outside the island." }
};

/* Las palabras del glosario que aparecen en una receta (en el idioma que se ve). */
function glossaryFor(recipe) {
  const text = norm([recipe.name[currentLang], ...recipe.ingredients[currentLang], ...recipe.steps[currentLang]].join(" "));
  return GLOSSARY.filter((g) => g.rx.test(text));
}

function glossaryListHTML(items) {
  return `<dl class="gloss-list">${items.map((g) => `<div class="gloss-item" id="gl-${g.key}"><dt>${esc(g[currentLang][0])}</dt><dd>${esc(g[currentLang][1])}</dd></div>`).join("")}</dl>`;
}

function renderGlossary(recipe) {
  const box = $("modal-glossary");
  if (!box) return;
  const items = glossaryFor(recipe);
  box.hidden = !items.length;
  const tr = GLOSS_T[currentLang];
  box.innerHTML = items.length
    ? `<details class="gloss-box"><summary>${esc(tr.title)} (${items.length})</summary>${glossaryListHTML(items)}<p><a href="#/glosario">${esc(tr.all)}</a></p></details>`
    : "";
}

function showGlossary() {
  current = null;
  for (const v of ["view-home", "view-recipe", "view-plans", "view-admin"]) { const el = $(v); if (el) el.hidden = true; }
  const v = $("view-glossary");
  v.hidden = false;
  renderGlossaryView();
  jumpTo(0);
  $("glossary-title").focus({ preventScroll: true });
}
function renderGlossaryView() {
  const v = $("view-glossary");
  if (!v || v.hidden) return;
  const tr = GLOSS_T[currentLang];
  document.title = `${tr.pageTitle} — ${BRAND}`;
  const sorted = [...GLOSSARY].sort((a, b) => a[currentLang][0].localeCompare(b[currentLang][0], currentLang));
  v.innerHTML = `<div class="container terms-wrap">
    <header class="plans-head"><h1 class="section-title" id="glossary-title" tabindex="-1">${esc(tr.pageTitle)}</h1>
      <p class="section-sub">${esc(tr.pageIntro)}</p></header>
    <div class="terms-page">${glossaryListHTML(sorted)}</div>
  </div>`;
}
