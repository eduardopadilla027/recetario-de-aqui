/* Recetarios de Aquí · Cocina Boricua — lógica de la interfaz.
 *
 * Datos: `recipes` (js/recipes.js) con id, category, name{es,en}, time,
 * servings, ingredients{es,en}, steps{es,en}. Campo OPCIONAL `image`
 * (ruta en images/): si una receta lo tiene, su foto sustituye a la portada
 * ilustrada de la categoría. No se inventa ningún dato: lo que no está en
 * recipes.js (fotos, dificultad, valoraciones…) no se muestra. La información
 * nutricional se CALCULA de los ingredientes (js/nutrition.js) y se presenta
 * como estimación, con los ingredientes que no se pudieron contar.
 *
 * Vistas: inicio (#/ o anclas #categorias, #recetas, #rapidas) y detalle
 * (#/receta/<id>). El detalle tiene URL propia: se puede compartir, y "Atrás"
 * del navegador vuelve a los resultados en la misma posición. */

const BRAND = "Recetarios de Aquí";

const translations = {
  es: {
    siteTitle: BRAND,
    subtitle: "Recetario de Cocina Puertorriqueña",
    author: "Versión 1.0",
    heroTitle: ["El Sabor de la Cocina", "Puertorriqueña"], // [texto, palabra destacada]
    searchPlaceholder: "Buscar por nombre o ingrediente…",
    searchLabel: "Buscar recetas por nombre o ingrediente",
    searchBtn: "Buscar",
    clearSearch: "Borrar búsqueda",
    ingredients: "Ingredientes",
    steps: "Preparación",
    time: "Tiempo",
    servings: "Porciones",
    servingOne: "porción",
    recipeCount: "recetas",
    recipeOne: "receta",
    footer: "Recetas de la cocina tradicional puertorriqueña · Versión 1.0",
    skip: "Saltar al contenido",
    menu: "Abrir menú",
    mainNav: "Navegación principal",
    footerNav: "Enlaces del pie",
    language: "Idioma",
    navCategories: "Categorías",
    navRecipes: "Recetas",
    navFavorites: "Favoritas",
    categoriesTitle: "Explora por categoría",
    categoriesSub: "Elige una categoría para ver sus recetas. Vuelve a pulsarla para cerrarla.",
    showing: "Mostrando",
    quickTitle: "Listas en 30 minutos o menos",
    quickSub: "Según el tiempo indicado en cada receta.",
    quickAll: "Ver todas",
    quickShort: "Recetas rápidas",
    results: "Resultados",
    resultsFor: (q) => `Resultados para «${q}»`,
    filters: "Filtros",
    filterQuick: "≤ 30 min",
    clearFilters: "Quitar filtros",
    countFound: (n) => (n === 1 ? "1 receta encontrada" : `${n} recetas encontradas`),
    statsHero: (n, c) => `<strong>${n}</strong> recetas tradicionales · <strong>${c}</strong> categorías`,
    emptyTitle: "No encontramos recetas",
    emptyText: "Prueba con otra palabra o ingrediente, o quita algún filtro.",
    emptyFavTitle: "Aún no tienes favoritas",
    emptyFavText: "Pulsa el corazón de cualquier receta para guardarla aquí. Se guardan en este navegador.",
    back: "Volver a las recetas",
    print: "Imprimir",
    share: "Compartir",
    save: "Guardar",
    saved: "Guardada",
    addFav: (n) => `Guardar «${n}» en favoritas`,
    removeFav: (n) => `Quitar «${n}» de favoritas`,
    favAdded: "Añadida a favoritas",
    favRemoved: "Quitada de favoritas",
    linkCopied: "Enlace copiado",
    shareFail: "No se pudo compartir",
    fewer: "Menos porciones",
    more: "Más porciones",
    scaleNote: (n) => `Cantidades ajustadas para ${n} porciones (aproximadas). Las líneas sin cantidad al inicio no cambian.`,
    recipeTabs: "Secciones de la receta",
    tabRecipe: "Receta",
    tabNutrition: "Información nutricional",
    kcalFact: "Calorías / porción",
    nutriTitle: "Información nutricional",
    nutriPer: (n) => `Estimado por porción · receta para ${n} ${n === 1 ? "porción" : "porciones"}`,
    nutriKcal: "calorías por porción",
    nutriTotal: (k) => `Receta completa: ≈ ${k} kcal`,
    nutriMacros: "De dónde vienen las calorías",
    nutrient: "Nutriente",
    perServing: "Por porción",
    dv: "% VD*",
    nCalories: "Calorías",
    nFat: "Grasa total",
    nSat: "Grasa saturada",
    nSodium: "Sodio",
    nCarbs: "Carbohidratos",
    nFiber: "Fibra",
    nSugars: "Azúcares",
    nProtein: "Proteína",
    nutriCoverage: (a, b) => `Calculado con ${a} de ${b} ingredientes con cantidad.`,
    nutriMissing: "No se pudieron incluir:",
    nutriFrying: "Incluye unos 7 g de aceite absorbido al freír por porción.",
    nutriNote: "Valores aproximados, calculados a partir de los ingredientes con datos de referencia por 100 g (USDA). Varían según las marcas, el tamaño de los ingredientes y la preparación. No se suman los ingredientes sin cantidad (\"sal al gusto\") ni los opcionales.",
    nutriDv: "* % del valor diario según una dieta de 2,000 calorías.",
    nutriNone: "No hay datos suficientes para estimar la información nutricional de esta receta.",
    viewRecipe: (n) => `Ver la receta ${n}`,
    notFound: "No encontramos esa receta.",
    categories: {
      frutas: "Frutas",
      cereales: "Cereales",
      granos: "Granos y Legumbres",
      ensaladas: "Ensaladas",
      sopas: "Sopas",
      carnes: "Carnes",
      aves: "Aves",
      pescados: "Pescado y Mariscos",
      huevos: "Huevos y Queso",
      entremeses: "Croquetas, Buñuelos y Pastelillos",
      bizcochos: "Bizcochos",
      galletitas: "Galletitas",
      pasteles_dulces: "Pasteles Dulces",
      panes: "Pan y Panecillos",
      emparedados: "Emparedados",
      postres: "Helados, Budines, Flan y Otros Postres",
      arroces: "Arroces y Habichuelas",
      vegetales: "Vegetales y Viandas",
      salsas: "Salsas y Aderezos",
      bebidas: "Bebidas",
      cocteles: "Cócteles y Tragos",
      calientes: "Bebidas Calientes",
      pastas: "Pastas"
    }
  },
  en: {
    siteTitle: BRAND,
    subtitle: "Puerto Rican Cookbook",
    author: "Version 1.0",
    heroTitle: ["The Flavor of", "Puerto Rican Cooking"],
    searchPlaceholder: "Search by name or ingredient…",
    searchLabel: "Search recipes by name or ingredient",
    searchBtn: "Search",
    clearSearch: "Clear search",
    ingredients: "Ingredients",
    steps: "Preparation",
    time: "Time",
    servings: "Servings",
    servingOne: "serving",
    recipeCount: "recipes",
    recipeOne: "recipe",
    footer: "Traditional Puerto Rican recipes · Version 1.0",
    skip: "Skip to content",
    menu: "Open menu",
    mainNav: "Main navigation",
    footerNav: "Footer links",
    language: "Language",
    navCategories: "Categories",
    navRecipes: "Recipes",
    navFavorites: "Favorites",
    categoriesTitle: "Browse by category",
    categoriesSub: "Pick a category to see its recipes. Tap it again to close it.",
    showing: "Showing",
    quickTitle: "Ready in 30 minutes or less",
    quickSub: "Based on the time listed in each recipe.",
    quickAll: "See all",
    quickShort: "Quick recipes",
    results: "Results",
    resultsFor: (q) => `Results for “${q}”`,
    filters: "Filters",
    filterQuick: "≤ 30 min",
    clearFilters: "Clear filters",
    countFound: (n) => (n === 1 ? "1 recipe found" : `${n} recipes found`),
    statsHero: (n, c) => `<strong>${n}</strong> traditional recipes · <strong>${c}</strong> categories`,
    emptyTitle: "No recipes found",
    emptyText: "Try another word or ingredient, or remove a filter.",
    emptyFavTitle: "No favorites yet",
    emptyFavText: "Tap the heart on any recipe to save it here. Favorites are stored in this browser.",
    back: "Back to recipes",
    print: "Print",
    share: "Share",
    save: "Save",
    saved: "Saved",
    addFav: (n) => `Save “${n}” to favorites`,
    removeFav: (n) => `Remove “${n}” from favorites`,
    favAdded: "Added to favorites",
    favRemoved: "Removed from favorites",
    linkCopied: "Link copied",
    shareFail: "Couldn't share",
    fewer: "Fewer servings",
    more: "More servings",
    scaleNote: (n) => `Quantities adjusted for ${n} servings (approximate). Lines without a leading quantity don't change.`,
    recipeTabs: "Recipe sections",
    tabRecipe: "Recipe",
    tabNutrition: "Nutrition facts",
    kcalFact: "Calories / serving",
    nutriTitle: "Nutrition facts",
    nutriPer: (n) => `Estimated per serving · recipe makes ${n} ${n === 1 ? "serving" : "servings"}`,
    nutriKcal: "calories per serving",
    nutriTotal: (k) => `Whole recipe: ≈ ${k} kcal`,
    nutriMacros: "Where the calories come from",
    nutrient: "Nutrient",
    perServing: "Per serving",
    dv: "% DV*",
    nCalories: "Calories",
    nFat: "Total fat",
    nSat: "Saturated fat",
    nSodium: "Sodium",
    nCarbs: "Carbohydrates",
    nFiber: "Fiber",
    nSugars: "Sugars",
    nProtein: "Protein",
    nutriCoverage: (a, b) => `Calculated from ${a} of ${b} measured ingredients.`,
    nutriMissing: "Could not be included:",
    nutriFrying: "Includes about 7 g of oil absorbed during frying per serving.",
    nutriNote: "Approximate values, calculated from the ingredients using reference data per 100 g (USDA). They vary with brands, ingredient sizes, and preparation. Ingredients without a quantity (\"salt to taste\") and optional ones are not counted.",
    nutriDv: "* Percent Daily Value based on a 2,000-calorie diet.",
    nutriNone: "There isn't enough data to estimate nutrition for this recipe.",
    viewRecipe: (n) => `View recipe ${n}`,
    notFound: "We couldn't find that recipe.",
    categories: {
      frutas: "Fruits",
      cereales: "Cereals",
      granos: "Legumes & Grains",
      ensaladas: "Salads",
      sopas: "Soups",
      carnes: "Meats",
      aves: "Poultry",
      pescados: "Fish & Seafood",
      huevos: "Eggs & Cheese",
      entremeses: "Croquettes, Fritters & Turnovers",
      bizcochos: "Cakes",
      galletitas: "Cookies",
      pasteles_dulces: "Sweet Pies & Pastries",
      panes: "Bread & Rolls",
      emparedados: "Sandwiches",
      postres: "Ice Cream, Puddings, Flan & Desserts",
      arroces: "Rice & Beans",
      vegetales: "Vegetables & Root Veggies",
      salsas: "Sauces & Dressings",
      bebidas: "Beverages",
      cocteles: "Cocktails & Drinks",
      calientes: "Hot Drinks",
      pastas: "Pasta"
    }
  }
};

/* Ilustración de cada categoría (sólo decorativa, aria-hidden). Los iconos de
 * la interfaz son SVG; estos emojis hacen de "foto" mientras no haya fotos. */
const categoryIcons = {
  frutas: "🍍", cereales: "🌾", granos: "🫘", ensaladas: "🥗", sopas: "🍲",
  carnes: "🥩", aves: "🍗", pescados: "🐟", huevos: "🥚", entremeses: "🥟",
  bizcochos: "🎂", galletitas: "🍪", pasteles_dulces: "🥧", panes: "🍞",
  emparedados: "🥪", postres: "🍮", arroces: "🍚", vegetales: "🥑",
  salsas: "🫙", bebidas: "🥤", cocteles: "🍹",
  calientes: "☕", pastas: "🍝"
};

/* Ilustración de cada plato según su nombre en español (sin acentos), para
 * que las tarjetas de una misma categoría no se vean iguales. Gana la palabra
 * que aparece primero en el nombre, que suele ser el tipo de plato ("Flan de
 * Queso" → flan, no queso); en empate, la más larga ("pastelon" antes que
 * "pastel"). Sin coincidencia: el de la categoría. Sólo decorativo. */
const dishIcons = [
  ["sopa", "🍲"], ["asopao", "🍲"], ["sancocho", "🍲"], ["caldo", "🍲"], ["sopon", "🍲"], ["mondongo", "🍲"], ["crema de calabaza", "🍲"], ["crema de pana", "🍲"],
  ["ensalada", "🥗"], ["serenata", "🥗"], ["ensalada de frutas", "🍇"],
  ["salsa", "🍅"], ["mojito isleno", "🍅"], ["salsa de mango", "🥭"],
  ["ternera", "🥩"], ["chicharrones de pollo", "🍗"], ["rellenos de papa", "🥔"], ["surullito", "🌽"],
  ["guineito", "🍌"], ["guingambo", "🥒"], ["grosella", "🍒"], ["pasta de guayaba", "🫙"], ["cascos de guayaba", "🫙"],
  ["maicena", "🥣"], ["cremita", "🥣"], ["guarapo", "🍵"], ["avena fria", "🥤"],
  ["mero", "🐟"], ["conejo", "🐇"], ["morcilla", "🌭"], ["masitas de res", "🥩"], ["pudin", "🍮"], ["arroz con leche", "🍮"],
  ["bienmesabe", "🍮"], ["mampostial", "🍬"], ["dulce de leche", "🍬"], ["dulce de ajonjoli", "🍬"], ["bolitas de tamarindo", "🍬"], ["tocino del cielo", "🍮"],
  ["sandwich", "🥪"], ["tripleta", "🥪"], ["medianoche", "🥪"], ["emparedado", "🥪"],
  ["arroz con dulce", "🍮"], ["arroz con coco", "🍮"], ["arroz", "🍚"], ["locrio", "🍚"],
  ["habichuela", "🫘"], ["frijol", "🫘"], ["gandul", "🫘"], ["garbanzo", "🫘"], ["lenteja", "🫘"],
  ["langosta", "🦞"], ["camaron", "🦐"], ["pulpo", "🐙"], ["calamar", "🦑"], ["juey", "🦀"], ["carrucho", "🐚"],
  ["bacalao", "🐟"], ["bacalaito", "🐟"], ["pescado", "🐟"], ["chillo", "🐟"], ["filete", "🐟"], ["atun", "🐟"], ["ceviche", "🐟"],
  ["pavo", "🦃"], ["pavochon", "🦃"], ["molleja", "🍗"], ["pollo", "🍗"], ["pechuga", "🍗"], ["gallina", "🍗"],
  ["salchicha", "🌭"], ["longaniza", "🌭"], ["chorizo", "🌭"], ["salami", "🌭"],
  ["lechon", "🍖"], ["pernil", "🍖"], ["chuleta", "🍖"], ["costilla", "🍖"], ["chicharron", "🍖"], ["patitas", "🍖"], ["masitas", "🍖"], ["pincho", "🍢"],
  ["bistec", "🥩"], ["carne", "🥩"], ["rabo", "🥩"], ["ropa vieja", "🥩"], ["churrasco", "🥩"], ["higado", "🥩"], ["albondiga", "🧆"], ["picadillo", "🥩"], ["lengua", "🥩"], ["cabro", "🥩"],
  ["espagueti", "🍝"], ["lasana", "🍝"], ["coditos", "🍝"], ["macarrones", "🍝"], ["canelones", "🍝"], ["fideos", "🍝"],
  ["tortilla", "🍳"], ["revoltillo", "🍳"], ["huevo", "🍳"],
  ["queso", "🧀"], ["quesito", "🥐"],
  ["mofongo", "🍌"], ["trifongo", "🍌"], ["tostones", "🍌"], ["platano", "🍌"], ["amarillo", "🍌"], ["pionono", "🍌"], ["canoa", "🍌"], ["jibarito", "🍌"], ["guineo", "🍌"], ["pastelon", "🥘"], ["platanutre", "🍌"], ["aranita", "🍌"],
  ["tostones de pana", "🍈"], ["mofongo de pana", "🍈"], ["bunuelos de pana", "🧆"], ["bunuelos de yautia", "🧆"],
  ["pasteles de", "🫔"], ["alcapurria", "🥟"], ["empanadilla", "🥟"], ["pastelillo", "🥟"], ["empanada", "🥟"], ["croqueta", "🥟"], ["relleno", "🥟"],
  ["yuca", "🍠"], ["yautia", "🍠"], ["batata", "🍠"], ["panapen", "🍈"], ["pana", "🍈"], ["viandas", "🍠"], ["papa", "🥔"],
  ["maiz", "🌽"], ["sorullito", "🌽"], ["guanime", "🌽"], ["funche", "🌽"], ["majarete", "🍮"], ["arepa", "🫓"], ["casabe", "🫓"],
  ["berenjena", "🍆"], ["calabaza", "🎃"], ["aguacate", "🥑"], ["repollo", "🥬"], ["chayote", "🥒"],
  ["coquito", "🥥"], ["coco", "🥥"], ["tembleque", "🍮"], ["besito", "🥥"],
  ["pina colada", "🍹"], ["pina", "🍍"], ["mango", "🥭"], ["papaya", "🥭"], ["lechosa", "🥭"], ["china", "🍊"], ["naranja", "🍊"], ["toronja", "🍊"], ["limon", "🍋"], ["limonada", "🍋"],
  ["cafe", "☕"], ["chocolate", "🍫"], ["te de", "🍵"],
  ["flan", "🍮"], ["quesillo", "🍮"], ["natilla", "🍮"], ["budin", "🍮"], ["cazuela", "🍮"],
  ["bizcocho boricua", "🎂"], ["bizcocho", "🍰"], ["brazo gitano", "🍰"],
  ["galleta", "🍪"], ["polvoron", "🍪"], ["mantecadito", "🍪"], ["cucas", "🍪"], ["suspiro", "🍪"], ["royal", "🍪"],
  ["pie", "🥧"], ["pastel", "🥧"],
  ["mantecado", "🍨"], ["helado", "🍨"], ["limber", "🍧"], ["piragua", "🍧"],
  ["pan", "🍞"], ["mallorca", "🥐"], ["rosquilla", "🍩"], ["bunuelo", "🍩"], ["barriguita", "🍩"], ["almojabana", "🧆"],
  ["sangria", "🍷"], ["ponche", "🍹"], ["mojito", "🍹"], ["daiquiri", "🍹"], ["cuba libre", "🥃"], ["pitorro", "🥃"], ["chichaito", "🥃"], ["bili", "🥃"], ["limoncello", "🥃"],
  ["jugo", "🧃"], ["batida", "🥤"], ["champola", "🥤"], ["malta", "🥤"], ["avena", "🥣"], ["crema", "🥣"], ["farina", "🥣"],
  ["pique", "🌶️"], ["sofrito", "🌿"], ["recaito", "🌿"], ["ajilimojili", "🌶️"], ["mojo", "🧄"], ["adobo", "🧂"], ["sazon", "🧂"], ["achiote", "🫙"], ["mayo", "🫙"]
];

function dishIcon(recipe) {
  const name = norm(recipe.name.es);
  let best = null;
  for (const [word, icon] of dishIcons) {
    const at = name.search(new RegExp(`\\b${word}`));
    if (at < 0) continue;
    if (!best || at < best.at || (at === best.at && word.length > best.word.length)) best = { at, word, icon };
  }
  return best ? best.icon : categoryIcons[recipe.category];
}

/* Tono de la portada por familia: salados en terracota, dulces en caramelo y
 * rosa, frescos en verde, bebidas en turquesa. [fondo, círculo] */
const categoryTones = {
  frutas: ["#F4D9A0", "#E8B85C"], cereales: ["#EFDDBB", "#D9BC86"], granos: ["#E7CDB4", "#C99B77"],
  ensaladas: ["#D6E6C7", "#A9C98E"], sopas: ["#F1C9A5", "#DE9A68"], carnes: ["#EDBFA8", "#CF8466"],
  aves: ["#F2D1A8", "#DDA46A"], pescados: ["#C9E1E0", "#8DBDBB"], huevos: ["#F6E3A6", "#E6C35E"],
  entremeses: ["#F0CFA0", "#D9A15E"], bizcochos: ["#F5D3D0", "#E3A19C"], galletitas: ["#EED8BC", "#D4AE7E"],
  pasteles_dulces: ["#F2D6C0", "#DDA984"], panes: ["#EDD9B8", "#D2AC72"], emparedados: ["#EBDDBF", "#CDB27E"],
  postres: ["#F3DCC6", "#DBAE7F"], arroces: ["#EFE3C8", "#D4BC8A"], vegetales: ["#D7E5C2", "#A3C27E"],
  salsas: ["#F0C7B4", "#D98F71"], bebidas: ["#CDE5E4", "#93C6C3"], cocteles: ["#F3D0D6", "#E0939F"],
  calientes: ["#E8D2BE", "#B98A63"], pastas: ["#F4DDB0", "#E0A95A"]
};

/* Orden de las categorías en la app. "calientes" y "pastas" se añadieron con
 * las recetas de js/recipes-2.js (capítulos de bebidas calientes y de pastas
 * de los recetarios clásicos). */
const categoryOrder = [
  "calientes", "frutas", "cereales", "granos", "ensaladas", "sopas",
  "carnes", "aves", "pescados", "huevos", "entremeses",
  "pastas", "bizcochos", "galletitas", "pasteles_dulces", "panes",
  "emparedados", "postres", "arroces", "vegetales",
  "salsas", "bebidas", "cocteles"
];

const QUICK_MAX_MIN = 30;
const STORE = { lang: "rcb.lang", favs: "rcb.favorites" };

/* ------------------------------------------------------------ estado ---- */

let currentLang = readStore(STORE.lang) === "en" ? "en" : "es";
let searchQuery = "";
let selectedNavCategory = null; // una categoría elegida: sólo se ve ésa (clic de nuevo = todas)
let onlyFavorites = false;
let onlyQuick = false;
let favorites = new Set(parseJSON(readStore(STORE.favs), []));
let current = null;        // receta en detalle
let currentServings = 0;
let homeScrollY = 0;
let cameFromHome = false;  // el detalle se abrió desde el inicio: "Volver" = atrás del historial
let explicitNav = false;   // el usuario pidió ir a un ancla/inicio (no es un "atrás")

const $ = (id) => document.getElementById(id);
const t = () => translations[currentLang];

function readStore(key) { try { return localStorage.getItem(key); } catch { return null; } }
function writeStore(key, value) { try { localStorage.setItem(key, value); } catch { /* modo privado: no pasa nada */ } }
function parseJSON(s, fallback) { try { return Array.isArray(JSON.parse(s)) ? JSON.parse(s) : fallback; } catch { return fallback; } }
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function norm(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------ tiempo ---- */

/** Minutos del tiempo indicado, o null si incluye esperas ("+ reposo",
 *  "+ 2 semanas") y no puede contarse como receta rápida. */
function parseMinutes(time) {
  if (!time || time.includes("+")) return null;
  let total = 0;
  const h = time.match(/(\d+)(?:\s*-\s*(\d+))?\s*hrs?/i);
  const m = time.match(/(\d+)\s*min/i);
  if (h) total += Number(h[2] || h[1]) * 60;
  if (m) total += Number(m[1]);
  return h || m ? total : null;
}
const isQuick = (r) => { const m = parseMinutes(r.time); return m != null && m <= QUICK_MAX_MIN; };

/** El tiempo se guarda en español; en inglés se traducen las pocas palabras. */
function formatTime(time) {
  if (currentLang !== "en") return time;
  return time
    .replace(/congelación/g, "freezing").replace(/reposo/g, "resting").replace(/remojo/g, "soaking")
    .replace(/semanas/g, "weeks").replace(/semana/g, "week")
    .replace(/días/g, "days").replace(/día/g, "day");
}

/* ------------------------------------------------------ porciones ---- */

const UNI = { "½": 1 / 2, "¼": 1 / 4, "¾": 3 / 4, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 1 / 8 };
const LEAD_RE = /^(\d+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔⅛]|\d+\/\d+)?(?:\s*[-–]\s*(\d+(?:[.,]\d+)?))?(?=\s|$)/;

/** Cantidad al inicio de un ingrediente: "2", "½", "1½", "1 1/2", "6-8". */
function parseLead(text) {
  const m = text.match(LEAD_RE);
  if (!m || !m[0].trim() || (!m[1] && !m[2])) return null;
  const num = (s) => Number(String(s).replace(",", "."));
  let value = m[1] ? num(m[1]) : 0;
  if (m[2]) value += UNI[m[2]] ?? (Number(m[2].split("/")[0]) / Number(m[2].split("/")[1]));
  const to = m[3] ? num(m[3]) : null;
  if (!value || !isFinite(value)) return null;
  return { value, to, length: m[0].length };
}

/** Número "de cocina": enteros a partir de 10; si no, a ⅛, ¼, ⅓, ½, ⅔, ¾. */
function formatQty(v) {
  if (v >= 10) return String(Math.round(v));
  const whole = Math.floor(v);
  const frac = v - whole;
  const opts = [[0, ""], [1 / 8, "⅛"], [1 / 4, "¼"], [1 / 3, "⅓"], [1 / 2, "½"], [2 / 3, "⅔"], [3 / 4, "¾"], [1, ""]];
  let best = opts[0];
  for (const o of opts) if (Math.abs(frac - o[0]) < Math.abs(frac - best[0])) best = o;
  const w = best[0] === 1 ? whole + 1 : whole;
  if (!w && !best[1]) return "⅛";
  return `${w || ""}${best[1]}`;
}

function scaleIngredient(text, factor) {
  const lead = parseLead(text);
  const rest = lead ? text.slice(lead.length) : text;
  if (!lead) return esc(text);
  if (factor === 1) return `<span class="qty">${esc(text.slice(0, lead.length))}</span>${esc(rest)}`;
  const q = formatQty(lead.value * factor) + (lead.to ? `-${formatQty(lead.to * factor)}` : "");
  return `<span class="qty scaled">${q}</span>${esc(rest)}`;
}

/* ------------------------------------------------------------ piezas ---- */

function coverHTML(cat, recipe) {
  const [tone, tone2] = categoryTones[cat] || ["#EAD7BD", "#D2AF84"];
  const img = recipe && recipe.image
    ? `<img src="${esc(recipe.image)}" alt="" loading="lazy" decoding="async" width="800" height="600">`
    : "";
  // Variación estable por receta (posición del círculo) para que las tarjetas
  // de una misma categoría no sean idénticas. Sólo decorativo.
  let v = 0;
  if (recipe) for (const ch of recipe.id) v = (v * 31 + ch.charCodeAt(0)) >>> 0;
  const spots = [["85%", "90%", "30%"], ["12%", "88%", "26%"], ["88%", "14%", "24%"], ["50%", "105%", "34%"]];
  const [cx, cy, cr] = spots[v % spots.length];
  // <span> y no <div>: la portada también va dentro de botones (categorías).
  const icon = recipe ? dishIcon(recipe) : categoryIcons[cat] || "";
  return `<span class="cover" style="--tone:${tone};--tone-2:${tone2};--cx:${cx};--cy:${cy};--cr:${cr}"><span class="cover-emoji" aria-hidden="true">${icon}</span>${img}</span>`;
}

function favButtonHTML(r) {
  const on = favorites.has(r.id);
  const name = r.name[currentLang];
  return `<button type="button" class="fav-toggle" data-fav="${esc(r.id)}" aria-pressed="${on}" aria-label="${esc(on ? t().removeFav(name) : t().addFav(name))}">
    <svg class="icon" aria-hidden="true"><use href="#i-heart"/></svg></button>`;
}

function cardHTML(r, i = 0) {
  const tr = t();
  const name = r.name[currentLang];
  return `<article class="recipe-card reveal" style="--i:${Math.min(i, 12)}">
    ${coverHTML(r.category, r)}
    ${favButtonHTML(r)}
    <div class="card-body">
      <span class="card-cat">${esc(tr.categories[r.category])}</span>
      <h3 class="card-title"><a class="card-link" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(name)}</a></h3>
      <div class="card-meta">
        <span><svg class="icon" aria-hidden="true"><use href="#i-clock"/></svg><span class="sr-only">${tr.time}:</span>${esc(formatTime(r.time))}</span>
        <span><svg class="icon" aria-hidden="true"><use href="#i-users"/></svg>${r.servings} ${r.servings === 1 ? tr.servingOne : tr.servings.toLowerCase()}</span>
      </div>
    </div>
  </article>`;
}

function emptyHTML() {
  const tr = t();
  const favCase = onlyFavorites && favorites.size === 0;
  return `<div class="empty-state">
    <svg class="icon" aria-hidden="true"><use href="#${favCase ? "i-heart" : "i-search"}"/></svg>
    <h3>${favCase ? tr.emptyFavTitle : tr.emptyTitle}</h3>
    <p>${favCase ? tr.emptyFavText : tr.emptyText}</p>
    ${hasFilters() ? `<button type="button" class="btn btn-primary" data-action="clear-filters">${tr.clearFilters}</button>` : ""}
  </div>`;
}

/* ------------------------------------------------------------ filtros ---- */

function hasFilters() {
  return Boolean(searchQuery || selectedNavCategory || onlyFavorites || onlyQuick);
}

function matches(r) {
  if (selectedNavCategory && r.category !== selectedNavCategory) return false;
  if (onlyFavorites && !favorites.has(r.id)) return false;
  if (onlyQuick && !isQuick(r)) return false;
  if (searchQuery) {
    // Busca en el nombre y los ingredientes (como antes), sin distinguir acentos.
    const hay = norm(r.name[currentLang] + " " + r.ingredients[currentLang].join(" "));
    if (!norm(searchQuery).split(/\s+/).every((w) => hay.includes(w))) return false;
  }
  return true;
}

function getFilteredRecipes(category) {
  return recipes.filter((r) => r.category === category && matches(r));
}

/* ------------------------------------------------------------ render ---- */

function renderNavPills() {
  const tr = t();
  $("nav-pills").innerHTML = categoryOrder.map((cat) => {
    const count = recipes.filter((r) => r.category === cat).length;
    const active = selectedNavCategory === cat;
    return `<button type="button" class="cat-tile" data-category="${cat}" aria-pressed="${active}" data-active="${tr.showing}">
      ${coverHTML(cat)}
      <span class="cat-tile-body">
        <span class="cat-tile-name">${esc(tr.categories[cat])}</span>
        <span class="cat-tile-count">${count} ${count === 1 ? tr.recipeOne : tr.recipeCount}</span>
      </span>
    </button>`;
  }).join("");
}

function renderQuick() {
  const quick = recipes.filter(isQuick).sort((a, b) => parseMinutes(a.time) - parseMinutes(b.time));
  $("quick-rail").innerHTML = quick.slice(0, 12).map((r, i) => cardHTML(r, i)).join("");
  $("rapidas").hidden = quick.length === 0;
}

function renderHero() {
  const tr = t();
  $("hero-stats").innerHTML = tr.statsHero(recipes.length, categoryOrder.length);
  $("hero-art").innerHTML = ["arroces", "postres", "pescados", "cocteles"].map((c) => coverHTML(c)).join("");
}

function renderCategories() {
  const tr = t();
  const container = $("categories-container");
  $("filter-quick").setAttribute("aria-pressed", String(onlyQuick));
  $("filter-fav").setAttribute("aria-pressed", String(onlyFavorites));
  $("nav-favorites").setAttribute("aria-pressed", String(onlyFavorites));

  // Sin búsqueda ni filtros no hay listado: la sección de resultados sólo
  // aparece al buscar, elegir una categoría, ver favoritas o las rápidas.
  const active = hasFilters();
  $("recetas").hidden = !active;
  $("filter-clear").hidden = !active;
  if (!active) { container.innerHTML = ""; return; }

  const filtered = recipes.filter(matches);
  let heading = tr.results;
  if (searchQuery) heading = tr.resultsFor(searchQuery);
  else if (selectedNavCategory) heading = tr.categories[selectedNavCategory];
  $("results-heading").textContent = heading;
  $("results-count").textContent = tr.countFound(filtered.length);

  if (!filtered.length) {
    container.innerHTML = emptyHTML();
    return;
  }

  // Una categoría elegida: rejilla directa, sin acordeón.
  if (selectedNavCategory) {
    container.innerHTML = `<div class="recipe-grid">${filtered.map((r, i) => cardHTML(r, i)).join("")}</div>`;
    return;
  }

  // Búsqueda, favoritas o rápidas: resultados agrupados por categoría (sólo
  // las que tienen alguno), con el recuento de cada grupo.
  container.innerHTML = categoryOrder.map((cat) => {
    const catRecipes = getFilteredRecipes(cat);
    if (catRecipes.length === 0) return "";
    const total = recipes.filter((r) => r.category === cat).length;
    const [tone] = categoryTones[cat];
    const countText = catRecipes.length !== total ? `${catRecipes.length} / ${total}` : `${total} ${tr.recipeCount}`;
    return `
      <section class="category-section" id="cat-${cat}" aria-labelledby="cathead-${cat}">
        <h3 class="category-header" id="cathead-${cat}">
          <span class="cat-dot" style="background:${tone}" aria-hidden="true">${categoryIcons[cat]}</span>
          <span class="cat-title">${esc(tr.categories[cat])}</span>
          <span class="cat-count">${countText}</span>
        </h3>
        <div class="category-body">
          <div class="recipe-grid">${catRecipes.map((r, i) => cardHTML(r, i)).join("")}</div>
        </div>
      </section>`;
  }).join("");
}

function renderFavCount() {
  const n = favorites.size;
  const badge = $("fav-count");
  badge.hidden = n === 0;
  badge.textContent = String(n);
}

function renderHome() {
  renderHero();
  renderNavPills();
  renderQuick();
  renderCategories();
  renderFavCount();
}

/* ------------------------------------------------------------ textos ---- */

function updateTexts() {
  const tr = t();
  document.documentElement.lang = currentLang;
  $("site-subtitle").textContent = tr.subtitle;
  $("site-author").textContent = tr.author;
  $("hero-title").innerHTML = `${esc(tr.heroTitle[0])} <span class="hero-accent">${esc(tr.heroTitle[1])}</span>`;
  $("search-input").placeholder = tr.searchPlaceholder;
  $("footer-text").textContent = tr.footer;
  $("brand-link").setAttribute("aria-label", `${BRAND} — ${currentLang === "es" ? "inicio" : "home"}`);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = tr[el.dataset.i18n];
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    const v = tr[el.dataset.i18nLabel];
    if (typeof v === "string") el.setAttribute("aria-label", v);
  });
  $("btn-es").setAttribute("aria-pressed", String(currentLang === "es"));
  $("btn-en").setAttribute("aria-pressed", String(currentLang === "en"));
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  writeStore(STORE.lang, lang);
  updateTexts();
  renderHome();
  if (current) renderModal(current);
}

/* ------------------------------------------------------------ detalle ---- */

function renderModal(recipe) {
  const tr = t();
  const name = recipe.name[currentLang];
  document.title = `${name} — ${BRAND}`;
  $("recipe-art").innerHTML = coverHTML(recipe.category, recipe);
  $("modal-badge").textContent = tr.categories[recipe.category];
  $("modal-badge").dataset.category = recipe.category;
  $("modal-title").textContent = name;
  $("modal-time").textContent = formatTime(recipe.time);
  $("modal-servings").textContent = String(recipe.servings);
  $("modal-ing-count").textContent = String(recipe.ingredients[currentLang].length);
  $("modal-ingredients-title").textContent = tr.ingredients;
  $("modal-steps-title").textContent = tr.steps;
  $("modal-steps-list").innerHTML = recipe.steps[currentLang].map((s) => `<li>${esc(s)}</li>`).join("");
  renderFavButton();
  renderIngredients();
  renderNutrition(recipe);
  renderSafety(recipe);
}

/* Pestaña de información nutricional: estimación de js/nutrition.js. */
function renderNutrition(recipe) {
  const tr = t();
  const est = estimateNutrition(recipe);
  const locale = currentLang === "es" ? "es-PR" : "en-US";
  const fmt = (v, digits = 0) => v.toLocaleString(locale, { maximumFractionDigits: digits });
  // Como en las etiquetas: calorías redondeadas a 5 (a 10 por encima de 50).
  const round = (k) => (k < 50 ? Math.round(k / 5) * 5 : Math.round(k / 10) * 10);
  const panel = $("panel-nutrition");

  if (!est.counted) {
    $("modal-kcal").textContent = "—";
    panel.innerHTML = `<h2 class="panel-title">${tr.nutriTitle}</h2><p class="nutri-empty">${tr.nutriNone}</p>`;
    return;
  }

  const per = est.per;
  const kcal = round(per.kcal);
  $("modal-kcal").textContent = `≈ ${fmt(kcal)}`;

  const fromP = per.p * 4, fromC = per.c * 4, fromF = per.fat * 9;
  const sum = fromP + fromC + fromF || 1;
  const macros = [
    ["m-p", tr.nProtein, Math.round((fromP / sum) * 100)],
    ["m-c", tr.nCarbs, Math.round((fromC / sum) * 100)],
    ["m-f", tr.nFat, Math.round((fromF / sum) * 100)]
  ];
  const grams = (v) => (v < 1 && v > 0 ? "< 1" : fmt(v, v < 10 ? 1 : 0));
  const dv = (v, key) => `${fmt(Math.round((v / NUTRI_DV[key]) * 100))}%`;
  const rows = [
    [tr.nFat, `${grams(per.fat)} g`, dv(per.fat, "fat"), ""],
    [tr.nSat, `${grams(per.sat)} g`, dv(per.sat, "sat"), "sub"],
    [tr.nSodium, `${fmt(Math.round(per.na / 5) * 5)} mg`, dv(per.na, "na"), ""],
    [tr.nCarbs, `${grams(per.c)} g`, dv(per.c, "c"), ""],
    [tr.nFiber, `${grams(per.fib)} g`, dv(per.fib, "fib"), "sub"],
    [tr.nSugars, `${grams(per.s)} g`, "", "sub"],
    [tr.nProtein, `${grams(per.p)} g`, dv(per.p, "p"), ""]
  ];
  const missing = est.missing.map((i) => `<li>${esc(recipe.ingredients[currentLang][i])}</li>`).join("");

  panel.innerHTML = `
    <div class="nutri-head">
      <h2 class="panel-title">${tr.nutriTitle}</h2>
      <p class="nutri-sub">${tr.nutriPer(recipe.servings)}</p>
    </div>
    <div class="nutri-grid">
      <div class="nutri-summary">
        <p class="nutri-kcal"><strong>≈ ${fmt(kcal)}</strong><span>${tr.nutriKcal}</span></p>
        <p class="nutri-total">${tr.nutriTotal(fmt(round(est.total.kcal)))}</p>
        <h3 class="nutri-subtitle">${tr.nutriMacros}</h3>
        <div class="macro-bar" role="img" aria-label="${esc(macros.map(([, l, v]) => `${l} ${v}%`).join(", "))}">
          ${macros.map(([cls, , v]) => `<span class="${cls}" style="width:${v}%"></span>`).join("")}
        </div>
        <ul class="macro-legend">
          ${macros.map(([cls, l, v]) => `<li><span class="macro-dot ${cls}" aria-hidden="true"></span>${l}<strong>${v}%</strong></li>`).join("")}
        </ul>
      </div>
      <table class="nutri-table">
        <caption class="sr-only">${tr.nutriTitle} — ${recipe.name[currentLang]}</caption>
        <thead><tr><th scope="col">${tr.nutrient}</th><th scope="col">${tr.perServing}</th><th scope="col">${tr.dv}</th></tr></thead>
        <tbody>
          <tr class="row-kcal"><th scope="row">${tr.nCalories}</th><td>${fmt(kcal)}</td><td>${dv(per.kcal, "kcal")}</td></tr>
          ${rows.map(([l, v, d, cls]) => `<tr class="${cls}"><th scope="row">${l}</th><td>${v}</td><td>${d}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="nutri-notes">
      <p>${tr.nutriCoverage(est.counted, est.measurable)}${est.frying ? ` ${tr.nutriFrying}` : ""}</p>
      ${missing ? `<p>${tr.nutriMissing}</p><ul class="nutri-missing">${missing}</ul>` : ""}
      <p>${tr.nutriNote}</p>
      <p>${tr.nutriDv}</p>
    </div>`;
}

/* Pestaña de alergias, alertas y manejo seguro: reglas de js/advisories.js. */
function renderSafety(recipe) {
  const at = ADVICE_TEXT[currentLang];
  const adv = getAdvisories(recipe);
  const ings = recipe.ingredients[currentLang];
  const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;
  $("tab-safety-label").textContent = at.tab;

  const line = $("allergen-line");
  line.hidden = !adv.allergens.length;
  line.innerHTML = adv.allergens.length
    ? `${icon("i-alert")}<span><strong>${at.contains}</strong> ${adv.allergens.map((a) => esc(at.allergens[a.key])).join(" · ")}</span>`
    : "";

  const allergens = adv.allergens.length
    ? `<ul class="allergen-list">${adv.allergens.map((a) => `
        <li>
          <span class="allergen-chip">${esc(at.allergens[a.key])}</span>
          <span class="allergen-src">${at.foundIn} ${a.items.map((i) => esc(ings[i])).join("; ")}</span>
        </li>`).join("")}</ul>`
    : `<p class="advice-empty">${at.allergensNone}</p>`;

  const alertText = (a) => {
    const v = at.alerts[a.key];
    return typeof v === "function" ? v(...a.args) : v;
  };
  const alerts = adv.alerts.length
    ? `<ul class="alert-list">${adv.alerts.map((a) => `
        <li class="alert alert-${a.level}">${icon(a.level === "info" ? "i-shield" : "i-alert")}<span>${esc(alertText(a))}</span></li>`).join("")}</ul>`
    : `<p class="advice-empty">${at.alertsNone}</p>`;

  const tips = adv.tips.length
    ? `<section class="advice-block"><h3 class="advice-title">${at.tipsTitle}</h3>
        <ul class="tip-list">${adv.tips.map((k) => `<li>${esc(at.tips[k])}</li>`).join("")}</ul></section>`
    : "";

  $("panel-safety").innerHTML = `
    <h2 class="panel-title">${at.title}</h2>
    <section class="advice-block"><h3 class="advice-title">${at.allergensTitle}</h3>${allergens}</section>
    <section class="advice-block"><h3 class="advice-title">${at.alertsTitle}</h3>${alerts}</section>
    ${tips}
    <p class="advice-note">${at.note}</p>`;
}

const RECIPE_TABS = ["recipe", "nutrition", "safety"];

function selectRecipeTab(which, focus = false) {
  for (const key of RECIPE_TABS) {
    const on = key === which;
    const tab = $(`tab-${key}`);
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
    $(`panel-${key}`).hidden = !on;
  }
  if (focus) $(`tab-${which}`).focus();
}

function renderIngredients() {
  const r = current;
  const tr = t();
  const factor = currentServings / r.servings;
  const checked = new Set([...document.querySelectorAll("#modal-ingredients-list input:checked")].map((i) => i.value));
  $("modal-ingredients-list").innerHTML = r.ingredients[currentLang].map((ing, i) => `
    <li><label class="ing-item">
      <input type="checkbox" value="${i}" ${checked.has(String(i)) ? "checked" : ""}>
      <span class="ing-box" aria-hidden="true"><svg class="icon"><use href="#i-check"/></svg></span>
      <span class="ing-text">${scaleIngredient(ing, factor)}</span>
    </label></li>`).join("");
  $("serv-value").textContent = String(currentServings);
  $("serv-minus").disabled = currentServings <= 1;
  $("serv-plus").disabled = currentServings >= Math.max(r.servings * 4, 12);
  const note = $("scale-note");
  note.hidden = factor === 1;
  note.textContent = factor === 1 ? "" : tr.scaleNote(currentServings);
}

function renderFavButton() {
  if (!current) return;
  const on = favorites.has(current.id);
  const btn = $("fav-btn");
  btn.setAttribute("aria-pressed", String(on));
  $("fav-btn-text").textContent = on ? t().saved : t().save;
  btn.setAttribute("aria-label", on ? t().removeFav(current.name[currentLang]) : t().addFav(current.name[currentLang]));
}

function showRecipe(id) {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) {
    toast(t().notFound);
    history.replaceState(null, "", "#/");
    showHome();
    return;
  }
  const wasHome = !$("view-home").hidden;
  if (wasHome) homeScrollY = window.scrollY;
  current = recipe;
  currentServings = recipe.servings;
  $("modal-ingredients-list").innerHTML = ""; // casillas limpias en cada receta
  selectRecipeTab("recipe");
  renderModal(recipe);
  $("view-home").hidden = true;
  $("view-recipe").hidden = false;
  window.scrollTo(0, 0);
  $("modal-title").focus({ preventScroll: true });
}

function showHome(anchor) {
  const fromRecipe = !$("view-recipe").hidden;
  const lastId = current && current.id;
  const explicit = explicitNav;
  explicitNav = false;
  cameFromHome = false;
  current = null;
  document.title = `${BRAND} — ${t().subtitle}`;
  $("view-recipe").hidden = true;
  $("view-home").hidden = false;
  if (fromRecipe && !explicit) {
    // "Atrás": volver al mismo punto de los resultados y a la tarjeta abierta,
    // aunque la URL anterior fuera un ancla (#recetas).
    window.scrollTo(0, homeScrollY);
    const link = lastId && document.querySelector(`[data-open="${CSS.escape(lastId)}"]`);
    if (link) link.focus({ preventScroll: true });
  } else if (anchor) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: fromRecipe || reduceMotion() ? "auto" : "smooth", block: "start" });
  } else if (explicit) {
    window.scrollTo(0, 0);
  }
}

function goBack() {
  if (cameFromHome) history.back();
  else location.hash = "#/";
}

/* ------------------------------------------------------------ rutas ---- */

function route() {
  const hash = decodeURIComponent(location.hash || "");
  const m = hash.match(/^#\/receta\/(.+)$/);
  if (m) { showRecipe(m[1]); return; }
  const anchor = hash.startsWith("#") && !hash.startsWith("#/") ? hash.slice(1) : null;
  showHome(anchor);
}

/* ------------------------------------------------------------ acciones ---- */

function toggleFavorite(id, sourceBtn) {
  const added = !favorites.has(id);
  if (added) favorites.add(id); else favorites.delete(id);
  writeStore(STORE.favs, JSON.stringify([...favorites]));
  // Actualizar sólo los botones afectados (sin re-render que mueva el scroll).
  document.querySelectorAll(`[data-fav="${CSS.escape(id)}"]`).forEach((b) => {
    const r = recipes.find((x) => x.id === id);
    b.setAttribute("aria-pressed", String(added));
    b.setAttribute("aria-label", added ? t().removeFav(r.name[currentLang]) : t().addFav(r.name[currentLang]));
  });
  if (sourceBtn && !reduceMotion()) {
    sourceBtn.classList.remove("pop"); void sourceBtn.offsetWidth; sourceBtn.classList.add("pop");
  }
  renderFavCount();
  renderFavButton();
  if (onlyFavorites && !current) renderCategories();
  toast(added ? t().favAdded : t().favRemoved, true);
}

let toastTimer = 0;
function toast(message, ok = false) {
  const el = $("toast");
  el.innerHTML = `${ok ? '<svg class="icon" aria-hidden="true"><use href="#i-check"/></svg>' : ""}<span>${esc(message)}</span>`;
  el.hidden = false;
  el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
}

async function shareRecipe() {
  if (!current) return;
  const url = location.href;
  const title = `${current.name[currentLang]} — ${BRAND}`;
  try {
    if (navigator.share) { await navigator.share({ title, url }); return; }
    await navigator.clipboard.writeText(url);
    toast(t().linkCopied, true);
  } catch (err) {
    if (err && err.name === "AbortError") return; // el usuario cerró el menú de compartir
    toast(t().shareFail);
  }
}

function scrollToResults() {
  const el = $("recetas");
  if (el.hidden) return; // sin búsqueda ni filtros no hay resultados que mostrar
  el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
}

function clearFilters() {
  searchQuery = "";
  selectedNavCategory = null;
  onlyFavorites = false;
  onlyQuick = false;
  $("search-input").value = "";
  $("search-clear").hidden = true;
  renderNavPills();
  renderCategories();
}

function closeMenu() {
  $("primary-nav").classList.remove("open");
  $("menu-toggle").setAttribute("aria-expanded", "false");
}

function setupEventListeners() {
  // Búsqueda en vivo (como antes) + botón/Enter que lleva a los resultados.
  const input = $("search-input");
  input.addEventListener("input", () => {
    searchQuery = input.value.trim();
    $("search-clear").hidden = !input.value;
    renderCategories();
  });
  $("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    input.blur();
    scrollToResults();
  });
  $("search-clear").addEventListener("click", () => {
    input.value = "";
    searchQuery = "";
    $("search-clear").hidden = true;
    renderCategories();
    input.focus();
  });

  $("btn-es").addEventListener("click", () => switchLang("es"));
  $("btn-en").addEventListener("click", () => switchLang("en"));

  // Categorías: la misma lógica de las antiguas pastillas (clic = sólo ésa; otra vez = todas).
  $("nav-pills").addEventListener("click", (e) => {
    const tile = e.target.closest(".cat-tile");
    if (!tile) return;
    const cat = tile.dataset.category;
    selectedNavCategory = selectedNavCategory === cat ? null : cat;
    renderNavPills();
    renderCategories();
    const again = document.querySelector(`.cat-tile[data-category="${cat}"]`);
    if (again) again.focus({ preventScroll: true });
    if (selectedNavCategory) scrollToResults();
  });

  // Delegación: favoritas, abrir receta, limpiar filtros, enlaces.
  document.addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav]");
    if (fav) { e.preventDefault(); toggleFavorite(fav.dataset.fav, fav); return; }
    const open = e.target.closest("[data-open]");
    if (open) { cameFromHome = true; return; } // el href hace el resto (#/receta/id)
    if (e.target.closest('[data-action="clear-filters"]')) { clearFilters(); return; }
    // Enlaces del menú, del pie y la marca: navegación pedida, no un "atrás".
    const anchorLink = e.target.closest('a[href^="#"]');
    if (anchorLink) {
      closeMenu();
      const href = anchorLink.getAttribute("href");
      if (href === location.hash || (href === "#/" && !location.hash)) {
        // Misma URL: no habrá hashchange; se resuelve aquí.
        e.preventDefault();
        if (href === "#/") window.scrollTo({ top: 0, behavior: reduceMotion() ? "auto" : "smooth" });
        else document.getElementById(href.slice(1))?.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth" });
      } else {
        explicitNav = true;
      }
    }
  });

  $("filter-quick").addEventListener("click", () => { onlyQuick = !onlyQuick; renderCategories(); });
  $("filter-fav").addEventListener("click", () => { onlyFavorites = !onlyFavorites; renderCategories(); });
  $("filter-clear").addEventListener("click", clearFilters);
  $("quick-all").addEventListener("click", () => { onlyQuick = true; renderCategories(); scrollToResults(); });
  $("nav-favorites").addEventListener("click", () => {
    closeMenu();
    onlyFavorites = !onlyFavorites;
    if (current) { onlyFavorites = true; explicitNav = true; location.hash = "#recetas"; renderCategories(); return; }
    renderCategories();
    scrollToResults();
  });

  // Detalle
  $("back-btn").addEventListener("click", goBack);
  $("modal-badge").addEventListener("click", () => {
    selectedNavCategory = $("modal-badge").dataset.category;
    searchQuery = ""; $("search-input").value = ""; $("search-clear").hidden = true;
    renderNavPills(); renderCategories();
    explicitNav = true;
    location.hash = "#recetas";
  });
  $("fav-btn").addEventListener("click", () => current && toggleFavorite(current.id, $("fav-btn")));
  $("print-btn").addEventListener("click", () => window.print());
  $("share-btn").addEventListener("click", shareRecipe);

  // Pestañas Receta / Nutrición / Alergias y seguridad (flechas, Inicio y Fin
  // como en cualquier lista de pestañas).
  for (const key of RECIPE_TABS) $(`tab-${key}`).addEventListener("click", () => selectRecipeTab(key));
  document.querySelector(".recipe-tabs").addEventListener("keydown", (e) => {
    const n = RECIPE_TABS.length;
    const now = RECIPE_TABS.findIndex((k) => $(`tab-${k}`).getAttribute("aria-selected") === "true");
    let next = null;
    if (e.key === "ArrowRight") next = (now + 1) % n;
    else if (e.key === "ArrowLeft") next = (now + n - 1) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next === null) return;
    e.preventDefault();
    selectRecipeTab(RECIPE_TABS[next], true);
  });
  $("serv-minus").addEventListener("click", () => { if (currentServings > 1) { currentServings--; renderIngredients(); } });
  $("serv-plus").addEventListener("click", () => { currentServings++; renderIngredients(); });

  // Menú móvil
  $("menu-toggle").addEventListener("click", () => {
    const open = !$("primary-nav").classList.contains("open");
    $("primary-nav").classList.toggle("open", open);
    $("menu-toggle").setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if ($("primary-nav").classList.contains("open")) { closeMenu(); $("menu-toggle").focus(); return; }
    if (current) goBack(); // Escape cerraba la receta en la versión anterior
  });

  const header = $("site-header");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
  window.addEventListener("hashchange", route);
}

function init() {
  // El scroll lo gestiona la app (volver a los resultados, abrir el detalle arriba).
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  updateTexts();
  renderHome();
  setupEventListeners();
  route();
}

document.addEventListener("DOMContentLoaded", init);
