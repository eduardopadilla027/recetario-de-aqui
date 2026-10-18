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
 * Vistas: inicio (#/ o anclas #categorias, #recetas, #rapidas), detalle
 * (#/receta/<id>) y planes de comida (#/planes, en js/plans.js). El detalle tiene URL propia: se puede compartir, y "Atrás"
 * del navegador vuelve a los resultados en la misma posición. */

const BRAND = "Recetarios de Aquí";
const CONTACT_EMAIL = "recetariodeaqui@gmail.com"; // pie de página y pantalla de entrada (auth.js)

// Versión de la app = "Versión del documento" de ARQUITECTURA.md, y la fecha de su última actualización.
// Se cambian juntas en cada commit (§13); también el texto inicial de #site-author y #footer-text en index.html.
const APP_VERSION = "4.27.0";
const APP_REVISED = "2026-10-18";
/* Lo que se muestra al público: "Más de 1,000 recetas", no el total exacto (que cambia con cada
   tanda). El total exacto sólo sale en #/admin (auth.js). Baja al millar: 1,054 → "1,000". */
function publicRecipeCount() {
  const n = recipes.length;
  const step = n > 1000 ? 1000 : 100;
  return (Math.floor((n - 1) / step) * step).toLocaleString(currentLang === "es" ? "es-PR" : "en-US");
}
const revisedOn = (locale) => new Date(APP_REVISED + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

const translations = {
  es: {
    siteTitle: BRAND,
    subtitle: "Recetario de Cocina Puertorriqueña",
    author: `Versión ${APP_VERSION} · Revisada el ${revisedOn("es-PR")}`,
    heroTitle: ["El Sabor de la Cocina", "Puertorriqueña"], // [texto, palabra destacada]
    searchPlaceholder: "Plato, ingrediente o idea: pollo y arroz, postre sin huevo, navidad…",
    searchLabel: "Buscar recetas por nombre, ingredientes o una idea (por ejemplo: postre sin huevo)",
    searchBtn: "Buscar",
    clearSearch: "Borrar búsqueda",
    ingredients: "Ingredientes",
    steps: "Preparación",
    time: "Tiempo",
    servings: "Porciones",
    servingOne: "porción",
    recipeCount: "recetas",
    recipeOne: "receta",
    footer: `Recetas de la cocina tradicional puertorriqueña · Versión ${APP_VERSION} · Revisión: ${revisedOn("es-PR")}`,
    skip: "Saltar al contenido",
    menu: "Abrir menú",
    mainNav: "Navegación principal",
    footerNav: "Enlaces del pie",
    language: "Idioma",
    navCategories: "Categorías",
    navRecipes: "Recetas",
    navFavorites: "Favoritas",
    navPlans: "Planes",
    navMine: "Mi recetario", navShop: "Compras", bnHome: "Inicio", bnMine: "Recetario",
    cookMode: "Modo cocina", levelFact: "Dificultad", listenRecipe: "Escuchar receta",
    navReviews: "Opiniones",
    contactLabel: "Contacto:",
    navInstall: "Póngala en su celular",
    navAdmin: "Administrador",
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
    moreResults: (n) => `Ver más resultados (${n})`,
    understood: { looking: "Busco", without: "Sin", ideas: "Ideas", corrected: "Corregí", partial: "Ninguna receta tiene todo: estas son las más parecidas.", order: "Ordenadas por relevancia." },
    statsHero: (n, c) => `<strong>Más de ${n}</strong> recetas tradicionales · <strong>${c}</strong> categorías`,
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
      jugos: "Jugos Naturales",
      calientes: "Bebidas Calientes",
      pastas: "Pastas"
    }
  },
  en: {
    siteTitle: BRAND,
    subtitle: "Puerto Rican Cookbook",
    author: `Version ${APP_VERSION} · Revised ${revisedOn("en-US")}`,
    heroTitle: ["The Flavor of", "Puerto Rican Cooking"],
    searchPlaceholder: "Dish, ingredient or idea: chicken and rice, dessert without eggs, christmas…",
    searchLabel: "Search recipes by name, ingredients or an idea (for example: dessert without eggs)",
    searchBtn: "Search",
    clearSearch: "Clear search",
    ingredients: "Ingredients",
    steps: "Preparation",
    time: "Time",
    servings: "Servings",
    servingOne: "serving",
    recipeCount: "recipes",
    recipeOne: "recipe",
    footer: `Traditional Puerto Rican recipes · Version ${APP_VERSION} · Revised ${revisedOn("en-US")}`,
    skip: "Skip to content",
    menu: "Open menu",
    mainNav: "Main navigation",
    footerNav: "Footer links",
    language: "Language",
    navCategories: "Categories",
    navRecipes: "Recipes",
    navFavorites: "Favorites",
    navPlans: "Meal plans",
    navMine: "My cookbook", navShop: "Shopping", bnHome: "Home", bnMine: "Cookbook",
    cookMode: "Cook mode", levelFact: "Difficulty", listenRecipe: "Listen to recipe",
    navReviews: "Reviews",
    contactLabel: "Contact:",
    navInstall: "Put it on your phone",
    navAdmin: "Admin",
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
    moreResults: (n) => `Show more results (${n})`,
    understood: { looking: "Looking for", without: "Without", ideas: "Ideas", corrected: "Corrected", partial: "No recipe has everything: these are the closest.", order: "Sorted by relevance." },
    statsHero: (n, c) => `<strong>Over ${n}</strong> traditional recipes · <strong>${c}</strong> categories`,
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
      jugos: "Natural Juices",
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
  salsas: "🫙", bebidas: "🥤", jugos: "svg:ic-jugo-natural", cocteles: "🍹", // 🧃 es jugo de cajita: los jugos son naturales
  calientes: "☕", pastas: "🍝"
};

/* Ilustración de cada plato según su nombre en español (sin acentos), para
 * que las tarjetas de una misma categoría no se vean iguales. Gana la palabra
 * que aparece primero en el nombre, que suele ser el tipo de plato ("Flan de
 * Queso" → flan, no queso); en empate, la más larga ("pastelon" antes que
 * "pastel"). Sin coincidencia: el de la categoría. Sólo decorativo. */
/* El plátano no tiene emoji (🍌 es guineo maduro): dos dibujos propios del
 * sprite de index.html, verde y maduro. En savory, "guineo" es guineo verde. */
const VERDE = "svg:ic-platano-verde";
const MADURO = "svg:ic-platano-maduro";
/* Tampoco hay emoji de embutido (🌭 es un perro caliente en su pan). */
const LONGANIZA = "svg:ic-longaniza";
const MORCILLA = "svg:ic-morcilla";
/* Ni de yuca (🍠 es batata) ni de pincho de camarones (🍢 es oden japonés). */
const YUCA = "svg:ic-yuca";
/* Yautía y malanga (en Puerto Rico, la misma vianda): tampoco tienen emoji. */
const YAUTIA = "svg:ic-yautia";
const PINCHO_CAMARONES = "svg:ic-pincho-camarones";
/* Ni de albóndigas (🧆 es falafel). */
const ALBONDIGAS = "svg:ic-albondigas";
/* 🍖 es carne de caricatura en hueso y 🥩 un bistec crudo: chuleta y churrasco tienen dibujo propio. */
const CHULETA = "svg:ic-chuleta";
const CHURRASCO = "svg:ic-churrasco";

const dishIcons = [
  ["sopa", "🍲"], ["asopao", "🍲"], ["sancocho", "🍲"], ["caldo", "🍲"], ["sopon", "🍲"], ["mondongo", "🍲"], ["crema de calabaza", "🍲"], ["crema de pana", "🍲"], ["crema de yautia", "🍲"],
  ["ensalada", "🥗"], ["serenata", "🥗"], ["ensalada de frutas", "🍇"],
  ["salsa", "🍅"], ["mojito isleno", "🍅"], ["gazpacho", "🍅"], ["gazpacho de bacalao", "🐟"], ["gazpacho de mango", "🥭"], ["salsa de mango", "🥭"],
  ["ternera", "🥩"], ["chicharrones de pollo", "🍗"], ["rellenos de papa", "🥔"], ["surullito", "🌽"],
  ["guineito", VERDE], ["guineitos ninos", "🍌"], ["guingambo", "🥒"], ["grosella", "🍒"], ["pasta de guayaba", "🫙"], ["cascos de guayaba", "🫙"],
  ["maicena", "🥣"], ["cremita", "🥣"], ["guarapo", "🍵"], ["avena fria", "🥤"],
  ["mero", "🐟"], ["conejo", "🐇"], ["morcilla", MORCILLA], ["masitas de res", "🥩"], ["pudin", "🍮"], ["arroz con leche", "🍮"],
  ["gofio", "🍬"], ["coconete", "🍪"], ["mamey", "🍑"], ["tres leches", "🍰"], ["tarta", "🍰"],
  ["bienmesabe", "🍮"], ["mampostial", "🍬"], ["dulce de leche", "🍬"], ["dulce de ajonjoli", "🍬"], ["bolitas de tamarindo", "🍬"], ["tocino del cielo", "🍮"],
  ["sandwich", "🥪"], ["tripleta", "🥪"], ["medianoche", "🥪"], ["emparedado", "🥪"],
  ["arroz con dulce", "🍮"], ["arroz con coco", "🍮"], ["arroz", "🍚"], ["locrio", "🍚"],
  ["habichuela", "🫘"], ["frijol", "🫘"], ["gandul", "🫘"], ["garbanzo", "🫘"], ["lenteja", "🫘"],
  ["langosta", "🦞"], ["camaron", "🦐"], ["pulpo", "🐙"], ["calamar", "🦑"], ["juey", "🦀"], ["carrucho", "🐚"],
  ["mariscada", "🦞"], ["paella", "🥘"], ["sierra", "🐟"], ["dorado", "🐟"],
  ["bacalao", "🐟"], ["bacalaito", "🐟"], ["pescado", "🐟"], ["chillo", "🐟"], ["filete", "🐟"], ["atun", "🐟"], ["ceviche", "🐟"],
  ["pavo", "🦃"], ["pavochon", "🦃"], ["molleja", "🍗"], ["guinea", "🍗"], ["muslo", "🍗"], ["pollo", "🍗"], ["pechuga", "🍗"], ["gallina", "🍗"],
  ["salchicha", LONGANIZA], ["longaniza", LONGANIZA], ["chorizo", LONGANIZA], ["salami", LONGANIZA],
  ["lechon", "🍖"], ["pernil", "🍖"], ["chuleta", CHULETA], ["costilla", "🍖"], ["chicharron", "🍖"], ["patitas", "🍖"], ["masitas", "🍖"], ["pincho", "svg:ic-pincho-cerdo"], ["pinchos de pollo", "svg:ic-pincho-pollo"], ["pincho de pollo", "svg:ic-pincho-pollo"], ["pinchos de camarones", PINCHO_CAMARONES], ["pincho de camarones", PINCHO_CAMARONES],
  ["bistec", "🥩"], ["carne", "🥩"], ["rabo", "🥩"], ["ropa vieja", "🥩"], ["churrasco", CHURRASCO], ["higado", "🥩"], ["albondiga", ALBONDIGAS], ["picadillo", "🥩"], ["lengua", "🥩"], ["cabro", "🥩"], ["cabrito", "🥩"], ["carne de cerdo", "🍖"], ["costillita", "🍖"], ["cuajito", "🍖"], ["salpicon", "🥩"], ["lomo", "🍖"], ["jamon", "🍖"],
  ["espagueti", "🍝"], ["lasana", "🍝"], ["coditos", "🍝"], ["macarrones", "🍝"], ["canelones", "🍝"], ["fideos", "🍝"],
  ["tortilla", "🍳"], ["revoltillo", "🍳"], ["huevo", "🍳"],
  ["queso", "🧀"], ["quesito", "🥐"],
  ["mofongo", VERDE], ["trifongo", VERDE], ["tostones", VERDE], ["platano", VERDE], ["jibarito", VERDE], ["guineo", VERDE], ["platanutre", VERDE], ["aranita", VERDE],
  ["amarillo", MADURO], ["platanos maduros", MADURO], ["platano maduro", MADURO], ["pionono", MADURO], ["canoa", MADURO], ["pastelon", "🥘"],
  ["tostones de pana", "🍈"], ["mofongo de pana", "🍈"], ["bunuelos de pana", "🧆"], ["bunuelos de yautia", "🧆"],
  ["pasteles de", "🫔"], ["alcapurria", "🥟"], ["empanadilla", "🥟"], ["pastelillo", "🥟"], ["empanada", "🥟"], ["croqueta", "🥟"], ["relleno", "🥟"],
  ["yuca", YUCA], ["yautia", YAUTIA], ["batata", "🍠"], ["panapen", "🍈"], ["pana", "🍈"], ["viandas", "svg:ic-viandas"], ["papa", "🥔"],
  ["maiz", "🌽"], ["sorullito", "🌽"], ["guanime", "🌽"], ["funche", "🌽"], ["majarete", "🍮"], ["arepa", "🫓"], ["casabe", "🫓"],
  ["mazamorra", "🌽"], ["domplines", "🫓"], ["yaniqueques", "🫓"], ["mofongo de yuca", YUCA], ["sopa borracha", "🍰"],
  ["ostiones", "🦪"], ["chicharrones de pescado", "🐟"], ["ceviche de camarones", "🦐"],
  ["melcocha", "🍬"], ["cidra", "🍋"], ["torrejas", "🍞"], ["flor de jamaica", "🌺"], ["jugo de carambola", "⭐"], ["alitas", "🍗"], ["name", "svg:ic-name"], ["papita", "🥔"], ["malanga", YAUTIA],
  ["cupcake", "🧁"], ["donas", "🍩"], ["rollos de canela", "🥐"], ["churros", "🥖"], ["gelatina", "🍮"], ["guacamole", "🥑"], ["salsa de aguacate", "🥑"], ["fricase de cerdo", "🍖"], ["polvo de amor", "🥥"], ["coquimol", "🥥"],
  ["berenjena", "🍆"], ["calabaza", "🎃"], ["aguacate", "🥑"], ["repollo", "🥬"], ["chayote", "svg:ic-chayote"],
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
  ["jugo de china", "🍊"], ["jugo de toronja", "🍊"], ["jugo de mango", "🥭"], ["jugo de pina", "🍍"], ["jugo de acerola", "🍒"],
  ["jugo de sandia", "🍉"], ["guarapo", "svg:ic-jugo-guarapo-cana"], ["agua de coco", "🥥"],
  ["jugo", "svg:ic-jugo-natural"], ["batida", "🥤"], ["champola", "🥤"], ["malta", "🥤"], ["avena", "🥣"], ["crema", "🥣"], ["farina", "🥣"],
  ["pique", "🌶️"], ["sofrito", "🌿"], ["recaito", "🌿"], ["ajilimojili", "🌶️"], ["mojo", "🧄"], ["adobo", "🧂"], ["sazon", "🧂"], ["achiote", "🫙"], ["mayo", "🫙"]
];

/* Carnes y aves: el emoji (🥩 🍖 🍗) era el mismo para casi todo, así que el
 * dibujo sale del tipo de plato: guiso en caldero, encebollado, empanado,
 * desmenuzado, asado, frito… Las reglas van en orden y gana la primera; las
 * piezas con dibujo propio (chuleta, churrasco, embutidos…) siguen por dishIcons. */
const meatIcons = {
  carnes: [
    // Otros cortes (tanda 33): primero, para que no los tomen "chuleta", "costill" ni las reglas generales.
    [/^falda de res rellena/, "svg:ic-corte-falda-rellena"],
    [/picanha/, "svg:ic-corte-picanha"],
    [/^ribeye/, "svg:ic-corte-ribeye"],
    [/short ribs/, "svg:ic-corte-short-ribs"],
    [/^osobuco/, "svg:ic-corte-osobuco"],
    [/^pecho de res/, "svg:ic-corte-brisket"],
    [/^solomillo/, "svg:ic-corte-solomillo"],
    [/^cerdo desmenuzado/, "svg:ic-corte-desmenuzado"],
    [/^panceta/, "svg:ic-corte-panceta"],
    [/^pierna de cordero/, "svg:ic-corte-pierna-cordero"],
    [/^chuletitas de cordero/, "svg:ic-corte-chuletas-cordero"],
    [/^lomo de cerdo al horno/, "svg:ic-pernil"], // tanda 50
    [/chuleta|churrasco|albondiga|longaniza|salchicha|morcilla|conejo|pincho|mofongo/, null],
    [/jamonilla/, "svg:ic-jamonilla"],
    [/napolitana/, "svg:ic-parmesana"],
    [/milanesa/, "svg:ic-empanado"],
    [/^costillas de res a la parrilla/, "svg:ic-parrilla-costillas"],
    [/costill/, "svg:ic-costillas"],
    [/jamon/, "svg:ic-jamon"],
    [/encebollad|con cebolla/, "svg:ic-encebollado"],
    [/empanad/, "svg:ic-empanado"],
    [/ropa vieja|salpicon/, "svg:ic-desmenuzada"],
    [/picadillo/, "svg:ic-picadillo"],
    [/lechon a la vara/, "svg:ic-lechon-vara"],
    [/lechon/, "svg:ic-lechon"],
    [/lengua/, "svg:ic-lengua-rellena"],
    [/mechada|lomo de cerdo relleno/, "svg:ic-carne-mechada"],
    [/pernil|asad|rellen/, "svg:ic-pernil"],
    [/chicharron|masitas|frit/, "svg:ic-masitas"],
    [/./, "svg:ic-guiso-carne"]
  ],
  aves: [
    // Otras aves y cortes (tanda 33).
    [/^pato/, "svg:ic-corte-pato"],
    [/^codornices/, "svg:ic-corte-codornices"],
    [/^gallinitas/, "svg:ic-corte-gallinitas"],
    [/^pollo abierto/, "svg:ic-corte-pollo-mariposa"],
    [/^pechuga de pavo/, "svg:ic-corte-pechuga-pavo"],
    [/^muslos de pavo/, "svg:ic-corte-muslos-pavo"],
    [/^higaditos/, "svg:ic-corte-higaditos"],
    [/pincho|pastelon|albondiga/, null],
    [/^muslos de pollo al carbon/, "svg:ic-parrilla-muslos"],
    [/parmesana/, "svg:ic-parmesana"],
    [/cordon bleu/, "svg:ic-cordon-bleu"],
    [/milanesa|panko/, "svg:ic-empanado"],
    [/alita/, "svg:ic-alitas"],
    [/empanad/, "svg:ic-empanado"],
    [/pechuga/, "svg:ic-pechuga"],
    [/frit|chicharron/, "svg:ic-pollo-frito"],
    [/asad|rellen|al carbon|al horno|pavochon/, "svg:ic-pollo-asado"],
    [/muslo|bbq/, "🍗"],
    [/./, "svg:ic-fricase-pollo"]
  ]
};

/* Postres: 🍮 servía para 40 recetas (flanes, gelatinas, tembleques, budines,
 * arroz con dulce…). Cada tipo tiene su dibujo y el color sigue al sabor. Van
 * por nombre y en orden; gana la primera. */
const dessertIcons = [
  // Grosellas (tanda 43).
  [/^mermelada de grosellas/, "svg:ic-gr-mermelada"],
  [/^grosellas curadas/, "svg:ic-gr-sal-limon"],
  [/^limber de grosella/, "svg:ic-gr-limber"],
  [/^pie de grosellas/, "svg:ic-gr-pie"],
  [/^bizcocho volteado de grosellas/, "svg:ic-gr-bizcocho-volteado"],
  [/^refresco de grosellas/, "svg:ic-gr-refresco"],
  [/^chutney de grosellas/, "svg:ic-gr-chutney"],
  [/^glaseado de grosellas/, "svg:ic-gr-glaseado-jamon"],
  [/^pique de grosellas/, "svg:ic-gr-pique"],
  [/^vinagreta de grosellas/, "svg:ic-gr-vinagreta"],
  // Sopas, pastas y panes dulces (tanda 49): los panes usan 🍞 como los demás panes.
  [/^asopao de res/, "svg:ic-sop-asopao-res"],
  [/^asopao de chuletas/, "svg:ic-sop-asopao-chuletas"],
  [/^asopao de habichuelas/, "svg:ic-sop-asopao-habichuelas"],
  [/^crema de batata/, "🍠"],
  [/^pasta con (pesto|pollo)/, "🍝"],
  // Jugos y bebidas tropicales (tanda 48): los jugos tienen su vaso en dishIcon() (ic-jugo-*); las batidas, 🥤.
  [/^horchata de arroz/, "🥛"],
  [/^jugo de zanahoria/, "🥕"],
  // Pescados y mariscos (tanda 47); tres reutilizan el dibujo de un plato parecido.
  [/^pastelon de bacalao/, "svg:ic-mar-pastelon-bacalao"],
  [/^bacalao en escabeche/, "svg:ic-pez-escabeche"],
  [/^bacalao rebozado/, "svg:ic-mar-bacalao-rebozado"],
  [/^filete de pescado encebollado/, "svg:ic-mar-encebollado"],
  [/^pescado sudado/, "svg:ic-mar-sudado"],
  [/^filete de pescado con costra/, "svg:ic-mar-costra-platanutre"],
  [/^dorado con costra de coco/, "svg:ic-mar-costra-coco"],
  [/^atun a la plancha/, "svg:ic-mar-atun-plancha"],
  [/^tortitas de atun/, "svg:ic-pes-tortitas"],
  [/^tilapia en salsa/, "svg:ic-pes-tilapia"],
  [/^camarones glaseados/, "svg:ic-mar-camarones-guayaba"],
  [/^pulpo guisado/, "svg:ic-mar-pulpo-guisado"],
  [/^ensalada fria de pulpo/, "svg:ic-mar-pulpo-mango"],
  [/^carrucho en salsa de coco/, "svg:ic-mar-carrucho-coco"],
  // Frutas tropicales de la isla (tanda 46).
  [/^quenepas en almibar/, "svg:ic-fr-quenepas"],
  [/^dulce de jobos/, "svg:ic-fr-jobos"],
  [/^jalea de pomarrosa/, "svg:ic-fr-pomarrosa"],
  [/^bowl de pitahaya/, "svg:ic-fr-pitahaya"],
  [/^pinchos de frutas/, "svg:ic-fr-pinchos-frutas"],
  [/^ensalada de carambola/, "svg:ic-fr-ensalada-carambola"],
  [/^ensalada de lechosa verde/, "svg:ic-fr-ensalada-lechosa"],
  [/^ensalada de sandia/, "svg:ic-fr-ensalada-sandia"],
  [/^helado de mamey/, "svg:ic-fr-helado-mamey"],
  [/^crema fria de caimito/, "svg:ic-fr-crema-caimito"],
  [/^pico de gallo de frutas/, "svg:ic-fr-pico-gallo"],
  [/^jugo de melon/, "🍈"],
  // Postres puertorriqueños (tanda 45).
  [/^nisperos de batata/, "svg:ic-pos-nisperos-batata"],
  [/^dulce de mani/, "svg:ic-pos-dulce-mani"],
  [/^limber de mani/, "svg:ic-pos-limber-mani"],
  [/^limber de tamarindo/, "svg:ic-pos-limber-tamarindo"],
  [/^limber de guayaba/, "svg:ic-pos-limber-guayaba"],
  [/^piragua de coco/, "svg:ic-pos-piragua-coco"],
  [/^tembleque de chocolate/, "svg:ic-pos-tembleque-chocolate"],
  [/^pasta de guayaba con queso/, "svg:ic-pos-guayaba-queso"],
  [/^dulce de pajuil/, "svg:ic-pos-dulce-pajuil"],
  [/^hojaldre boricua/, "svg:ic-pos-hojaldre"],
  [/^bizcocho navideno de frutas/, "svg:ic-pos-bizcocho-frutas"],
  // Más veganas (tanda 44), con la hojita verde.
  [/^arroz con gandules vegano/, "svg:ic-vg-arroz-gandules"],
  [/^pasteles veganos/, "svg:ic-vg-pasteles"],
  [/^tripleta vegana/, "svg:ic-vg-tripleta"],
  [/^setas encebolladas/, "svg:ic-vg-setas-encebolladas"],
  [/^crema vegana de calabaza/, "svg:ic-vg-crema-calabaza"],
  [/^ensalada de papa vegana/, "svg:ic-vg-ensalada-papa"],
  [/^rellenos de papa veganos/, "svg:ic-vg-rellenos-papa"],
  [/^budin de pan vegano/, "svg:ic-vg-budin-pan"],
  [/^galletitas veganas/, "svg:ic-vg-galletitas"],
  // Salsas y aderezos, y platos fuertes veganos (tanda 42).
  [/^salsa agridulce de grosellas/, "svg:ic-sz-grosella"],
  [/^salsa de cereza del pais/, "svg:ic-sz-acerola"],
  [/^vinagreta de mango/, "svg:ic-sz-vinagreta-mango"],
  [/^pique de pina/, "svg:ic-sz-pique-pina"],
  [/^mojo de parcha/, "svg:ic-sz-mojo-parcha"],
  [/^mayo-ketchup de mango/, "svg:ic-sz-mayo-ketchup-mango"],
  [/^aderezo cremoso de aguacate/, "svg:ic-sz-aderezo-aguacate"],
  [/^salsa de mani/, "svg:ic-sz-mani"],
  [/^salsa de cebolla caramelizada/, "svg:ic-sz-cebolla-caramelizada"],
  [/^jalea de aji picante/, "svg:ic-sz-jalea-aji"],
  [/^garbanzos guisados con calabaza/, "svg:ic-vg-garbanzos-calabaza"],
  [/^tofu en salsa de coco/, "svg:ic-vg-tofu-coco"],
  [/^lentejas guisadas con viandas/, "svg:ic-vg-lentejas-viandas"],
  [/^pinchos de tofu/, "svg:ic-vg-pinchos-tofu"],
  [/^arroz mamposteao vegano/, "svg:ic-vg-mamposteao"],
  [/^espaguetis con bolo/, "svg:ic-vg-espaguetis-lentejas"],
  [/^chili boricua/, "svg:ic-vg-chili"],
  [/^tacos de jaca/, "svg:ic-vg-tacos-jaca"],
  // Recetas veganas (tanda 40), con la hojita verde.
  [/^picadillo vegano/, "svg:ic-vg-picadillo"],
  [/^pastelon vegano/, "svg:ic-vg-pastelon"],
  [/^alcapurrias veganas/, "svg:ic-vg-alcapurrias"],
  [/^empanadillas veganas/, "svg:ic-vg-empanadillas"],
  [/^asopao vegano/, "svg:ic-vg-asopao"],
  [/^revoltillo vegano/, "svg:ic-vg-revoltillo-tofu"],
  [/^hamburguesa vegana/, "svg:ic-vg-hamburguesa"],
  [/^ensalada de quinoa/, "svg:ic-vg-quinoa-mango"],
  [/^flan vegano/, "svg:ic-vg-flan-coco"],
  [/^bizcocho vegano/, "svg:ic-vg-bizcocho-chocolate"],
  [/^mantecado vegano/, "svg:ic-vg-nice-cream"],
  [/^coquito vegano/, "svg:ic-vg-coquito"],
  [/^mayo-ajo vegana/, "svg:ic-vg-mayo-ajo"],
  [/^salsa vegana tipo queso/, "svg:ic-vg-salsa-queso"],
  // Arroces de hierbas, vegetales y sabores (tanda 39).
  [/^arroz con cilantro/, "svg:ic-arroz-cilantro"],
  [/^arroz verde/, "svg:ic-arroz-verde"],
  [/^arroz con ajo/, "svg:ic-arroz-ajo"],
  [/^arroz amarillo/, "svg:ic-arroz-amarillo"],
  [/^arroz con calabaza/, "svg:ic-arroz-calabaza"],
  [/^arroz con espinaca/, "svg:ic-arroz-espinaca"],
  [/^arroz con champinones/, "svg:ic-arroz-champinones"],
  [/^arroz con amarillos/, "svg:ic-arroz-amarillos-queso"],
  [/^arroz cremoso/, "svg:ic-arroz-cremoso"],
  [/^arroz frito con pina/, "svg:ic-arroz-frito-pina"],
  [/^arroz con tocineta/, "svg:ic-arroz-tocineta"],
  [/^arroz frito con huevo/, "svg:ic-arroz-frito-huevo"],
  // Panqueques (tanda 38), antes de la regla general de panqueques.
  [/^panqueques esponjosos/, "svg:ic-pq-clasicos"],
  [/^panqueques de guineo/, "svg:ic-pq-guineo"],
  [/^panqueques de coco/, "svg:ic-pq-coco-parcha"],
  [/^panqueques de calabaza/, "svg:ic-pq-calabaza"],
  [/^panqueques con chispas/, "svg:ic-pq-chocolate"],
  [/^panqueques rellenos de guayaba/, "svg:ic-pq-guayaba-queso"],
  [/^panqueques de pina/, "svg:ic-pq-pina"],
  [/^panqueques de yogur/, "svg:ic-pq-proteina"],
  [/^panqueques de harina de platano/, "svg:ic-pq-harina-platano"],
  [/^panqueques salados/, "svg:ic-pq-maiz-queso"],
  // Rosquillas de viento y donas (antes las tres 🍩).
  [/^rosquillas de viento/, "svg:ic-pan-rosquillas"],
  [/^donas glaseadas/, "svg:ic-pan-donas-glaseadas"],
  [/^donas rellenas de guayaba/, "svg:ic-pan-donas-guayaba"],
  // Bizcochos mojados, con licor y de sabores (tanda 37).
  [/^bizcocho mojado de brandy/, "svg:ic-biz-brandy"],
  [/^bizcocho de almendra con amaretto/, "svg:ic-biz-amaretto"],
  [/^bizcocho mojado de almendra/, "svg:ic-biz-mojado-almendra"],
  [/^bizcocho mojado de vainilla/, "svg:ic-biz-mojado-vainilla"],
  [/^bizcocho mojado de coquito/, "svg:ic-biz-mojado-coquito"],
  [/^bizcocho mojado de cafe/, "svg:ic-biz-mojado-cafe"],
  [/^bizcocho mojado de dulce de leche/, "svg:ic-biz-mojado-dulce-leche"],
  [/^bizcocho mojado de pina colada/, "svg:ic-biz-mojado-pina-colada"],
  [/^bizcocho de limon/, "svg:ic-biz-limon"],
  [/^bizcocho red velvet/, "svg:ic-biz-red-velvet"],
  [/^bizcocho de pistacho/, "svg:ic-biz-pistacho"],
  [/^bizcocho de mantequilla/, "svg:ic-biz-mantequilla"],
  // Vegetales y viandas (tanda 36).
  [/^name frito/, "svg:ic-veg-name-frito"],
  [/^chips de viandas/, "svg:ic-veg-chips"],
  [/^batatas fritas/, "svg:ic-veg-batatas-fritas"],
  [/^yuca en escabeche/, "svg:ic-veg-yuca-escabeche"],
  [/^malanga gratinada/, "svg:ic-veg-malanga-gratinada"],
  [/^mofongo de amarillo/, "svg:ic-veg-mofongo-amarillo"],
  [/^calabaza guisada/, "svg:ic-veg-calabaza-guisada"],
  [/^calabacin al ajillo/, "svg:ic-veg-calabacin"],
  [/^repollo guisado/, "svg:ic-veg-repollo-guisado"],
  [/^coliflor gratinada/, "svg:ic-veg-coliflor-gratinada"],
  [/^brocoli salteado/, "svg:ic-veg-brocoli"],
  [/^espinacas salteadas/, "svg:ic-veg-espinacas-garbanzos"],
  [/^chayote guisado/, "svg:ic-veg-chayote-guisado"],
  [/^maiz guisado/, "svg:ic-veg-maiz-guisado"],
  [/^champinones al ajillo/, "svg:ic-veg-champinones"],
  [/^habichuelas tiernas salteadas/, "svg:ic-veg-habichuelas-tiernas"],
  // Entremeses y frituras: cada uno con su forma (antes casi todos 🥟).
  [/^empanadillas de chaparro/, "svg:ic-ent-emp-chaparro"],
  [/^empanadillas de pizza/, "svg:ic-ent-emp-pizza"],
  [/^empanadillas de jueyes/, "svg:ic-ent-emp-jueyes"],
  [/^empanadillas de langosta/, "svg:ic-ent-emp-langosta"],
  [/^empanadillas de pulpo/, "svg:ic-ent-emp-pulpo"],
  [/^empanadillas de carrucho/, "svg:ic-ent-emp-carrucho"],
  [/^empanadillas de camarones/, "svg:ic-ent-emp-camarones"],
  [/^empanadillas de espinaca/, "svg:ic-ent-emp-espinaca"],
  [/^empanadillas de bacalao/, "svg:ic-ent-emp-bacalao"],
  [/^empanadillas de chapin/, "svg:ic-ent-emp-chapin"],
  [/^pastelillos de hojaldre/, "svg:ic-ent-pastelillo-hojaldre"],
  [/^pastelillos de carne/, "svg:ic-ent-pastelillo-carne"],
  [/^pastelillos de queso/, "svg:ic-ent-pastelillo-queso"],
  [/^pastelillos de pollo/, "svg:ic-ent-pastelillo-pollo"],
  [/^tarta de hojaldre con jamon/, "svg:ic-ent-tarta-hojaldre"],
  [/^alcapurrias de jueyes/, "svg:ic-ent-alcapurria-jueyes"],
  [/^alcapurrias de yuca/, "svg:ic-ent-alcapurria-yuca"],
  [/^alcapurrias de pulpo/, "svg:ic-ent-alcapurria-pulpo"],
  [/^alcapurrias$/, "svg:ic-ent-alcapurria"],
  [/^croquetas de jamon/, "svg:ic-ent-croqueta-jamon"],
  [/^croquetas de bacalao/, "svg:ic-ent-croqueta-bacalao"],
  [/^croquetas de papa/, "svg:ic-ent-croqueta-papa"],
  [/^croquetas de pollo/, "svg:ic-ent-croqueta-pollo"],
  [/^croquetas de yuca/, "svg:ic-ent-croqueta-yuca"],
  [/^rellenos de papa/, "svg:ic-ent-rellenos-papa"],
  [/^rellenos de yuca/, "svg:ic-ent-rellenos-yuca"],
  [/^bolitas de queso/, "svg:ic-ent-bolitas-queso"],
  [/^bolitas de amarillo/, "svg:ic-ent-bolitas-amarillo"],
  [/^bolitas de mofongo/, "svg:ic-ent-bolitas-mofongo"],
  [/^frituras \(bolitas\) de malanga/, "svg:ic-ent-bolitas-malanga"],
  [/^bunuelos de yautia/, "svg:ic-ent-bunuelos-yautia"],
  [/^bunuelos de pana/, "svg:ic-ent-bunuelos-pana"],
  [/^barriguitas de vieja/, "svg:ic-ent-barriguitas"],
  [/^bunuelos de name/, "svg:ic-ent-bunuelos-name"],
  [/^almojabanas/, "svg:ic-ent-almojabanas"],
  [/^sorullitos de maiz/, "svg:ic-ent-sorullitos"],
  [/^surullitos dulces/, "svg:ic-ent-surullitos-dulces"],
  [/^piononos/, "svg:ic-ent-piononos"],
  [/^aranitas/, "svg:ic-ent-aranitas"],
  [/^tostones rellenos/, "svg:ic-ent-tostones-rellenos"],
  [/^domplines/, "svg:ic-ent-domplines"],
  [/^yaniqueques/, "svg:ic-ent-yaniqueques"],
  [/^empanadas de yuca/, "svg:ic-ent-empanadas-yuca"],
  [/^arepas rellenas de pulpo/, "svg:ic-ent-arepas-pulpo"],
  [/^calamares fritos/, "svg:ic-ent-calamares"],
  [/^queso de freir a la parrilla/, "svg:ic-ent-queso-guayaba"],
  [/^mollejas en escabeche/, "svg:ic-ent-mollejas-escabeche"],
  [/^taquitos de pollo/, "svg:ic-ent-taquitos"],
  [/^deditos de queso/, "svg:ic-ent-deditos"],
  // Tés: cada uno con su hoja, flor o especia (antes todos 🍵).
  [/^te de hojas de naranjo/, "svg:ic-te-naranjo"],
  [/^te de maguey/, "svg:ic-te-maguey"],
  [/^te de anamu/, "svg:ic-te-anamu"],
  [/^te de poleo/, "svg:ic-te-poleo"],
  [/^te de hojas de aguacate/, "svg:ic-te-hojas-aguacate"],
  [/^te de hojas de mango/, "svg:ic-te-hojas-mango"],
  [/^te de llanten/, "svg:ic-te-llanten"],
  [/^te de flor de sauco/, "svg:ic-te-flor-sauco"],
  [/^te de toronjil/, "svg:ic-te-toronjil"],
  [/^te de mejorana/, "svg:ic-te-mejorana"],
  [/^te de cundeamor/, "svg:ic-te-cundeamor"],
  [/^te de yerbabuena/, "svg:ic-te-yerbabuena"],
  [/^te de manzanilla/, "svg:ic-te-manzanilla"],
  [/^te de canela/, "svg:ic-te-canela"],
  [/^te de anis estrellado/, "svg:ic-te-anis"],
  [/^te de oregano brujo/, "svg:ic-te-oregano-brujo"],
  [/^te de albahaca/, "svg:ic-te-albahaca"],
  [/^te de cascara de pina/, "svg:ic-te-cascara-pina"],
  [/^te de hojas de guayaba/, "svg:ic-te-guayaba"],
  [/^te de tilo/, "svg:ic-te-tilo"],
  [/^te de limoncillo/, "svg:ic-te-limoncillo"],
  [/^guarapo de jengibre/, "svg:ic-te-jengibre"],
  [/^te de hojas de parcha/, "svg:ic-te-hojas-parcha"],
  [/^te de hojas de limon/, "svg:ic-te-hojas-limon"],
  [/^te de hojas de guanabana/, "svg:ic-te-hoja-guanabana"],
  [/^te de moringa/, "svg:ic-te-moringa"],
  [/^te de curcuma/, "svg:ic-te-curcuma"],
  [/^te caliente de flor de jamaica/, "svg:ic-te-jamaica"],
  [/^te de romero/, "svg:ic-te-romero"],
  [/^te de semillas de hinojo/, "svg:ic-te-hinojo"],
  [/^te verde/, "svg:ic-te-verde"],
  [/^te de cascara de china/, "svg:ic-te-cascara-china"],
  [/^te chai/, "svg:ic-te-chai"],
  // Tragos sin alcohol (tanda 31).
  [/^mojito de parcha sin alcohol/, "svg:ic-sin-mojito-parcha"],
  [/^coquito sin alcohol/, "svg:ic-sin-coquito"],
  [/^daiquiri de fresa sin alcohol/, "svg:ic-sin-daiquiri-fresa"],
  [/^margarita de mango sin alcohol/, "svg:ic-sin-margarita-mango"],
  [/^sangria sin alcohol/, "svg:ic-sin-sangria"],
  [/^ponche tropical para fiestas/, "svg:ic-sin-ponche-fiestas"],
  [/^ponche de crema sin alcohol/, "svg:ic-sin-ponche-crema"],
  [/^bahama mama sin alcohol/, "svg:ic-sin-bahama-mama"],
  [/^lava flow sin alcohol/, "svg:ic-sin-lava-flow"],
  [/^refresco de jengibre/, "svg:ic-sin-jengibre"],
  [/^spritzer de parcha/, "svg:ic-sin-spritzer"],
  [/^te helado de parcha/, "svg:ic-sin-te-helado"],
  [/^frappe de cafe con coco/, "svg:ic-sin-cafe-frappe"],
  [/^agua fresca de pepino/, "svg:ic-sin-agua-pepino"],
  // Postres tropicales (tanda 30): primero, para que no los tomen las reglas generales (tembleque, mangó, piña…).
  [/^mousse de parcha/, "svg:ic-pos-mousse-parcha"],
  [/^tres leches de mango/, "svg:ic-pos-tres-leches-mango"],
  [/^panna cotta/, "svg:ic-pos-panna-cotta"],
  [/^tembleque de mango/, "svg:ic-pos-tembleque-mango"],
  [/^guineos flambeados/, "svg:ic-pos-guineos-flambeados"],
  [/^sorbete de pina/, "svg:ic-pos-sorbete-pina"],
  [/^pavlova/, "svg:ic-pos-pavlova"],
  [/^copa tropical/, "svg:ic-pos-copa-tropical"],
  [/^crumble/, "svg:ic-pos-crumble"],
  [/^crema fria de guanabana/, "svg:ic-pos-crema-guanabana"],
  [/^bizcocho de guineo/, "svg:ic-pos-bizcocho-guineo"],
  [/^bizcocho de mango/, "svg:ic-pos-bizcocho-mango"],
  [/^pastelillos de pina/, "svg:ic-pos-pastelillos-pina"],
  [/^dulce de pina en almibar/, "svg:ic-pos-dulce-pina"],
  [/^mango verde/, "svg:ic-pos-mango-verde"],
  [/^milanesa|a la milanesa/, "svg:ic-empanado"],
  // Pescados que antes usaban 🐟: entero, filete, ruedas, guisado o frituras según el plato.
  [/^bacalao guisado con berenjena/, "svg:ic-pez-bacalao-berenjena"],
  [/^bacalao guisado/, "svg:ic-pez-bacalao-guisado"],
  [/^bacalao a la vizcaina/, "svg:ic-pez-vizcaina"],
  [/^chillo frito/, "svg:ic-pez-chillo-frito"],
  [/^chillo al horno/, "svg:ic-pez-chillo-horno"],
  [/^bacalaitos/, "svg:ic-pez-bacalaitos"],
  [/^pescado en escabeche/, "svg:ic-pez-escabeche"],
  [/^ceviche puertorriqueno/, "svg:ic-pez-ceviche"],
  [/^filete de pescado al mojo/, "svg:ic-pez-filete-mojo"],
  [/^mero en salsa criolla/, "svg:ic-pez-mero-criolla"],
  [/^filete de pescado empanado/, "svg:ic-pez-empanado"],
  [/^pescado en salsa de coco/, "svg:ic-pez-salsa-coco"],
  [/^ruedas de sierra/, "svg:ic-pez-ruedas"],
  [/^dorado a la plancha/, "svg:ic-pez-dorado-mango"],
  [/^pescado asado en hoja de platano/, "svg:ic-pez-hoja-platano"],
  [/^pescado al mojo isleno/, "svg:ic-pez-mojo-isleno"],
  [/^salmon guisado/, "svg:ic-pez-salmon-guisado"],
  [/^atun guisado/, "svg:ic-pez-atun-guisado"],
  [/^frituras de ceti/, "svg:ic-pez-ceti"],
  [/^chicharrones de pescado/, "svg:ic-pez-chicharrones"],
  [/^gazpacho de bacalao/, "svg:ic-pez-gazpacho-bacalao"],
  // Pescados y mariscos, salsas y aderezos, y cereales (tanda 29).
  [/^tilapia al horno/, "svg:ic-pes-tilapia"],
  [/^camarones en salsa de parcha/, "svg:ic-pes-camarones-parcha"],
  [/^calamares guisados/, "svg:ic-pes-calamares"],
  [/^salmon glaseado/, "svg:ic-pes-salmon-guayaba"],
  [/^bacalao al horno con papas/, "svg:ic-pes-bacalao-papas"],
  [/^camarones enchilados/, "svg:ic-pes-camarones-enchilados"],
  [/^almejas/, "svg:ic-pes-almejas"],
  [/^mejillones/, "svg:ic-pes-mejillones"],
  [/^pescado en papillote/, "svg:ic-pes-papillote"],
  [/^tacos de pescado/, "svg:ic-pes-tacos"],
  [/^tortitas de salmon/, "svg:ic-pes-tortitas"],
  [/^salsa tartara/, "svg:ic-salsa-tartara"],
  [/^salsa coctel/, "svg:ic-salsa-coctel"],
  [/^salsa de coco y limon/, "svg:ic-salsa-coco-limon"],
  [/^vinagreta de parcha/, "svg:ic-vinagreta-parcha"],
  [/^vinagreta criolla/, "svg:ic-vinagreta-ajo"],
  [/^aderezo ranch/, "svg:ic-salsa-ranch"],
  [/^salsa teriyaki/, "svg:ic-salsa-teriyaki"],
  [/^pesto/, "svg:ic-pesto-recao"],
  [/^salsa de queso/, "svg:ic-salsa-queso"],
  [/^avena horneada/, "svg:ic-avena-horneada"],
  [/^granola/, "svg:ic-granola"],
  [/^avena con calabaza/, "svg:ic-avena-calabaza"],
  [/^quinoa con leche/, "svg:ic-quinoa-leche"],
  [/^panqueques/, "svg:ic-panqueques"],
  [/^avena salada/, "svg:ic-avena-salada"],
  // Platos vegetarianos con dibujo propio.
  [/^jaca mechada/, "svg:ic-veg-jaca"],
  [/^tofu/, "svg:ic-veg-tofu"],
  [/^coliflor/, "svg:ic-veg-coliflor"],
  [/^pinchos de vegetales/, "svg:ic-veg-pinchos"],
  [/^pimientos rellenos/, "svg:ic-veg-pimientos"],
  [/^serenata vegetariana/, "svg:ic-veg-serenata"],
  [/^hamburguesa vegetariana/, "svg:ic-veg-hamburguesa"],
  [/^quinoa/, "svg:ic-quinoa"],
  [/^pasta en crema de calabaza/, "svg:ic-pasta-calabaza"],
  // Arroces y granos según lo que llevan (las paellas y los asopaos tienen su propio dibujo).
  [/^arroz blanco con habichuelas/, "svg:ic-arroz-habichuelas"],
  [/^arroz blanco/, "svg:ic-arroz-blanco"],
  [/^moros y cristianos/, "svg:ic-arroz-moros"],
  [/^arroz mamposteao/, "svg:ic-arroz-moros"],
  [/^arroz integral/, "svg:ic-arroz-integral"],
  [/^arroz con gandules/, "svg:ic-arroz-gandules"],
  [/^arroz con (pollo|alitas|guinea|mollejas)/, "svg:ic-arroz-pollo"],
  [/^arroz con (camarones|calamares|langosta|jueyes|pulpo)/, "svg:ic-arroz-mariscos"],
  [/^arroz con (bacalao|sardinas|atun)/, "svg:ic-arroz-pescado"],
  [/^arroz con (longaniza|salchichas|garbanzos y chorizo|carne bif)|^locrio/, "svg:ic-arroz-carne"],
  [/^arroz con (pernil|costillitas)/, "svg:ic-arroz-cerdo"],
  [/^arroz con maiz/, "svg:ic-arroz-maiz"],
  [/^arroz guisado con vegetales|^arroz apastelado/, "svg:ic-arroz-vegetales"],
  [/^arroz chino/, "svg:ic-arroz-chino"],
  [/^habichuelas (coloradas|rojas)/, "svg:ic-granos-rojas"],
  [/^habichuelas rosadas/, "svg:ic-granos-rosadas"],
  [/^habichuelas negras/, "svg:ic-granos-negras"],
  [/^habichuelas blancas/, "svg:ic-granos-blancas"],
  [/^habichuelas pintas/, "svg:ic-granos-pintas"],
  [/^habichuelas tiernas/, "svg:ic-granos-tiernas"],
  [/^garbanzos crujientes/, "svg:ic-garbanzos-crujientes"],
  [/^garbanzos/, "svg:ic-granos-garbanzos"],
  [/^gandules/, "svg:ic-granos-gandules"],
  [/^lentejas/, "svg:ic-granos-lentejas"],
  [/^habas/, "svg:ic-granos-habas"],
  [/^guisantes/, "svg:ic-granos-guisantes"],
  [/^hummus/, "svg:ic-hummus"],
  // Sopas, cremas y asopaos según su contenido.
  [/^asopao de langosta/, "svg:ic-asopao-langosta"],
  [/^asopao de pulpo/, "svg:ic-asopao-pulpo"],
  [/^asopao de camarones/, "svg:ic-asopao-camarones"],
  [/^asopao de jueyes/, "svg:ic-asopao-jueyes"],
  [/^asopao de mariscos/, "svg:ic-asopao-mariscos"],
  [/^asopao de bacalao/, "svg:ic-asopao-bacalao"],
  [/^asopao de gandules/, "svg:ic-asopao-gandules"],
  [/^asopao|^sopon de pollo/, "svg:ic-asopao-pollo"],
  [/^crema de calabaza/, "svg:ic-crema-calabaza"],
  [/^crema de pana/, "svg:ic-crema-pana"],
  [/^crema de yautia/, "svg:ic-crema-yautia"],
  [/^crema de apio/, "svg:ic-crema-apio"],
  [/^crema de name/, "svg:ic-crema-name"],
  [/^crema de brocoli/, "svg:ic-crema-brocoli"],
  [/^crema de champinones/, "svg:ic-crema-champinones"],
  [/^sopa de maiz/, "svg:ic-crema-maiz"],
  [/^sopa de (pollo con )?fideos|^caldo de pollo|^sopa de gallina/, "svg:ic-sopa-fideos"],
  [/^sopa de habichuelas (coloradas|rosadas)/, "svg:ic-sopa-habichuelas-rojas"],
  [/^sopa de habichuelas negras/, "svg:ic-sopa-habichuelas-negras"],
  [/^sopa de frijoles blancos|^caldo gallego/, "svg:ic-sopa-habichuelas-blancas"],
  [/^sopon de garbanzos/, "svg:ic-sopa-garbanzos"],
  [/^sopa de lentejas/, "svg:ic-sopa-lentejas"],
  [/^sancocho|^sopa de res|^sopa de carne/, "svg:ic-sopa-sancocho"],
  [/^sopa de pescado|^caldo santo/, "svg:ic-sopa-pescado"],
  [/^sopa de guingambo/, "svg:ic-sopa-guingambo"],
  [/^sopa de albondigas/, "svg:ic-sopa-albondigas"],
  [/^sopa de (platano|guineitos)|^sopa de gandules/, "svg:ic-sopa-platano"],
  [/^sopa de coditos/, "svg:ic-sopa-coditos"],
  [/^mondongo/, "svg:ic-sopa-mondongo"],
  [/^sopa de vegetales|^sopa de papa|^sopa de ajo/, "svg:ic-sopa-vegetales"],
  // Emparedados según el pan y el relleno.
  [/^sandwich de (churrasco|bistec)|^tripleta/, "svg:ic-sandwich-churrasco"],
  [/^sandwich de (lechon|pernil)/, "svg:ic-sandwich-lechon"],
  [/^choripan/, "svg:ic-choripan"],
  [/^sandwich de pavochon/, "svg:ic-sandwich-pavochon"],
  [/^sandwich de pescado/, "svg:ic-sandwich-pescado"],
  [/^sandwich de desayuno/, "svg:ic-sandwich-desayuno"],
  [/^sandwich de queso derretido/, "svg:ic-sandwich-queso-guayaba"],
  [/^sandwich club/, "svg:ic-sandwich-club"],
  [/^wrap/, "svg:ic-wrap-pollo"],
  [/^jibarito/, "svg:ic-jibarito"],
  // Tragos tropicales en su vaso.
  [/^painkiller/, "svg:ic-trago-painkiller"],
  [/^guanabana colada/, "svg:ic-trago-guanabana"],
  [/^jungle bird/, "svg:ic-trago-jungle"],
  [/^caipirina/, "svg:ic-trago-caipirinha"],
  [/^paloma/, "svg:ic-trago-paloma"],
  [/^mojito de coco/, "svg:ic-trago-mojito-coco"],
  [/^daiquiri de guayaba/, "svg:ic-trago-daiquiri-guayaba"],
  [/^ponche de acerola/, "svg:ic-trago-ponche"],
  [/^tequila sunrise/, "svg:ic-trago-sunrise"],
  [/^dark & stormy|^dark and stormy/, "svg:ic-trago-dark-stormy"],
  [/^michelada/, "svg:ic-trago-michelada"],
  // Cheesecakes.
  [/^cheesecake de parcha/, "svg:ic-cheesecake-parcha"],
  [/^cheesecake de mango/, "svg:ic-cheesecake-mango"],
  [/^cheesecake de coco/, "svg:ic-cheesecake-coco"],
  [/^cheesecake de pina colada/, "svg:ic-cheesecake-pina-colada"],
  [/^cheesecake de coquito/, "svg:ic-cheesecake-coquito"],
  [/^cheesecake de guanabana/, "svg:ic-cheesecake-guanabana"],
  [/^mini cheesecakes/, "svg:ic-mini-cheesecakes"],
  [/^tarta de queso con guayaba|^cheesecake/, "svg:ic-cheesecake-guayaba"],
  // Dulces y mermeladas de frutas.
  [/^dulce de cerezas/, "svg:ic-dulce-acerola"],
  [/^mermelada de acerola/, "svg:ic-mermelada-acerola"],
  [/^jalea de guayaba/, "svg:ic-jalea-guayaba"],
  [/^jalea de grosellas|^dulce de grosellas/, "svg:ic-jalea-grosella"],
  [/^dulce de carambola/, "svg:ic-dulce-carambola"],
  [/^mermelada de mango/, "svg:ic-mermelada-mango"],
  [/^mermelada de parcha/, "svg:ic-mermelada-parcha"],
  [/^mermelada de pina/, "svg:ic-mermelada-pina"],
  // Berenjena.
  [/^berenjena guisada/, "svg:ic-berenjena-guisada"],
  [/^berenjena en escabeche/, "svg:ic-berenjena-escabeche"],
  [/^berenjena frita/, "svg:ic-berenjena-frita"],
  [/^lasana de berenjena/, "svg:ic-lasana-berenjena"],
  [/^dip de berenjena/, "svg:ic-dip-berenjena"],
  [/^revoltillo de berenjena/, "svg:ic-revoltillo-berenjena"],
  [/^pastelon de berenjena/, "svg:ic-pastelon-berenjena"],
  // Hojaldre.
  [/^palmeras/, "svg:ic-palmeras"],
  [/^milhojas/, "svg:ic-milhojas"],
  [/^trenza de hojaldre/, "svg:ic-trenza-hojaldre"],
  [/^tarta de hojaldre/, "svg:ic-tarta-salada"],
  [/^empanada gallega/, "svg:ic-empanada-gallega"],
  [/^pastelillos de hojaldre/, "svg:ic-pastelillo-hojaldre"],
  [/^cachitos/, "🥐"],
  [/gelatina de mosaico/, "svg:ic-gelatina-mosaico"],
  [/gelatina de (parcha|pina)|gelatinas de ron con parcha/, "svg:ic-gelatina-amarilla"],
  [/gelatina de (leche|coco|coquito)/, "svg:ic-gelatina-blanca"],
  [/gelatina de cafe/, "svg:ic-gelatina-cafe"],
  [/gelatina de guayaba/, "svg:ic-gelatina-guayaba"],
  [/^gelatina/, "svg:ic-gelatina"],
  [/^tembleque de cafe/, "svg:ic-tembleque-cafe"],
  [/^tembleque de calabaza/, "svg:ic-tembleque-calabaza"],
  [/^tembleque/, "svg:ic-tembleque"],
  [/^arroz con dulce/, "svg:ic-arroz-dulce"],
  [/^arroz con (leche|coco)/, "svg:ic-arroz-leche"],
  [/^tocino del cielo/, "svg:ic-tocino-cielo"],
  [/^flan de (chocolate|nutella)|^flancocho/, "svg:ic-flan-chocolate"],
  [/^flan de cafe/, "svg:ic-flan-cafe"],
  [/^flan de (coco|coquito)/, "svg:ic-flan-coco"],
  [/^flan de guayaba/, "svg:ic-flan-guayaba"],
  [/^flan de (parcha|pina|mango|maiz|platano)/, "svg:ic-flan-fruta"],
  [/^flan de (calabaza|batata)/, "svg:ic-flan-calabaza"],
  [/^flan de queso/, "svg:ic-flan-queso"],
  [/^flan\b|^quesillo/, "svg:ic-flan"],
  [/^(pudin|budin) de (batata|calabaza)|^cazuela/, "svg:ic-budin-batata"],
  [/^(pudin|budin) de guineo/, "svg:ic-budin-guineo"],
  [/^(pudin|budin)/, "svg:ic-budin"],
  [/^natilla de chocolate/, "svg:ic-natilla-chocolate"],
  [/^natilla/, "svg:ic-natilla"],
  [/^majarete|^bienmesabe/, "svg:ic-majarete"],
  // Galletas: 🍪 era el mismo dibujo para todas; ahora va por tipo.
  [/^cucas/, "svg:ic-cuca"],
  [/munequitos de jengibre/, "svg:ic-munequito-jengibre"],
  [/^alfajores/, "svg:ic-alfajor"],
  [/^espirales/, "svg:ic-espiral-guayaba"],
  [/^suspiros/, "svg:ic-suspiro"],
  [/^polvorones|galletas de maicena/, "svg:ic-polvoron"],
  [/^mantecaditos de chocolate/, "svg:ic-mantecadito-chocolate"],
  [/^mantecaditos/, "svg:ic-mantecadito"],
  [/^coconetes/, "svg:ic-coconete"],
  [/galletas de coco$/, "svg:ic-galleta-coco"],
  [/con chispas/, "svg:ic-galleta-chispas"],
  [/galletas de chocolate/, "svg:ic-galleta-chocolate"],
  [/melao y especias/, "svg:ic-galleta-agrietada"],
  [/canela y azucar/, "svg:ic-galleta-canela"],
  [/mantequilla de mani/, "svg:ic-galleta-mani"],
  [/^royales/, "svg:ic-galleta-tenedor"],
  [/^galletas.*avena/, "svg:ic-galleta-avena"],
  [/pasas al ron/, "svg:ic-galleta-pasas"],
  [/galletas de (calabaza|batata)/, "svg:ic-galleta-naranja"],
  [/galletas de parcha/, "svg:ic-galleta-parcha"],
  [/galletas de coquito/, "svg:ic-galleta-coquito"],
  [/galletas de (limon|jengibre)/, "svg:ic-galleta-glaseada"],
  [/galletas de guayaba|con mermelada/, "svg:ic-galleta-mermelada"],
  [/galletas de anis/, "svg:ic-galleta-anis"],
  [/galletas de ajonjoli/, "svg:ic-galleta-ajonjoli"],
  [/galletas de almendra/, "svg:ic-galleta-almendra"],
  [/galletas de cafe/, "svg:ic-galleta-cafe"],
  [/galletas maria/, "svg:ic-galleta-maria"],
  [/galletas de soda/, "svg:ic-galleta-soda"],
  [/tipo danesas/, "svg:ic-galleta-danesa"],
  // Pies: el relleno lleva el color de su fruta y la cubierta según el tipo.
  [/^pie de pina colada/, "svg:ic-pie-pina-colada"],
  [/^pie de pina/, "svg:ic-pie-pina"],
  [/^pie de mango/, "svg:ic-pie-mango"],
  [/^pie de parcha/, "svg:ic-pie-merengue"],
  [/^pie de limon/, "svg:ic-pie-limon"],
  [/^pie de guineo/, "svg:ic-pie-guineo"],
  [/^pie frio de guanabana/, "svg:ic-pie-guanabana"],
  [/^pie de calabaza|^pastel \(pie\) de batata/, "svg:ic-pie-calabaza"],
  [/^pie de coco/, "svg:ic-pie-coco"],
  [/^pastel de guayaba/, "svg:ic-pie-guayaba"],
  // Salsas y aderezos para carnes y pollo.
  [/^chimichurri/, "svg:ic-salsa-chimichurri"],
  [/^salsa bbq de guayaba/, "svg:ic-salsa-bbq"],
  [/^salsa bbq de tamarindo/, "svg:ic-salsa-tamarindo"],
  [/^mojo de naranja agria/, "svg:ic-salsa-mojo"],
  [/^glaseado de parcha/, "svg:ic-salsa-parcha"],
  [/^aderezo de mostaza/, "svg:ic-salsa-mostaza-miel"],
  [/^salsa agridulce/, "svg:ic-salsa-agridulce"],
  [/^aderezo cremoso de cilantro/, "svg:ic-salsa-cilantro"],
  [/^salsa de champinones/, "svg:ic-salsa-champinones"],
  [/^adobo mojado de limon/, "svg:ic-adobo-pollo"],
  [/^adobo mojado/, "svg:ic-pilon-adobo"],
  [/^adobo seco para res/, "svg:ic-adobo-res"],
  [/^adobo para pescado/, "svg:ic-adobo-pescado"],
  [/^adobo para pavo/, "svg:ic-adobo-pavo"],
  [/^adobo para cabro/, "svg:ic-adobo-cabro"],
  [/^adobo seco ahumado/, "svg:ic-adobo-bbq"],
  [/^adobo para vegetales/, "svg:ic-adobo-vegetales"],
  [/^adobo de limon/, "svg:ic-adobo-limon"],
  [/^adobo sin sal/, "svg:ic-adobo-sin-sal"],
  [/^adobo puertorriqueno/, "svg:ic-adobo"],
  [/^salsa de pique/, "svg:ic-salsa-pique"],
  // Yogures.
  [/^jamonilla/, "svg:ic-jamonilla"],
  // Parmesanas, milanesas y Nutella.
  [/a la parmesana/, "svg:ic-parmesana"],
  [/a la milanesa/, "svg:ic-empanado"],
  [/^crepas de nutella/, "svg:ic-crepas-nutella"],
  [/^brownies/, "svg:ic-brownies"],
  [/^galletas de nutella/, "svg:ic-galleta-chocolate"],
  // A la parrilla y al carbón.
  [/^hamburguesas/, "🍔"],
  [/^chillo entero a la parrilla/, "svg:ic-parrilla-pescado"],
  [/^camarones a la parrilla/, "svg:ic-parrilla-camarones"],
  [/^salmon a la parrilla/, "svg:ic-parrilla-salmon"],
  [/^maiz asado/, "svg:ic-parrilla-maiz"],
  [/^platanos maduros asados al carbon/, "svg:ic-parrilla-maduros"],
  [/^vegetales a la parrilla/, "svg:ic-parrilla-vegetales"],
  [/^queso de freir a la parrilla/, "svg:ic-parrilla-queso"],
  // Paellas (🥘 era el mismo para todas).
  [/^paella negra/, "svg:ic-paella-negra"],
  [/^paella de langosta/, "svg:ic-paella-langosta"],
  [/^paella de pulpo/, "svg:ic-paella-pulpo"],
  [/^paella valenciana/, "svg:ic-paella-valenciana"],
  [/^paella mixta/, "svg:ic-paella-mixta"],
  [/^paella de pollo/, "svg:ic-paella-pollo-chorizo"],
  [/^paella de vegetales/, "svg:ic-paella-vegetales"],
  [/^paella/, "svg:ic-paella-mariscos"],
  // Platos de huevo.
  [/^tortilla espanola/, "svg:ic-tortilla-espanola"],
  [/^tortilla de amarillos/, "svg:ic-tortilla-amarillos"],
  [/^tortilla de jamon/, "svg:ic-tortilla-jamon-queso"],
  [/^revoltillo de bacalao/, "svg:ic-revoltillo-bacalao"],
  [/^revoltillo/, "svg:ic-revoltillo-salchichas"],
  [/^huevos rellenos/, "svg:ic-huevos-rellenos"],
  [/^huevos habaneros/, "svg:ic-huevos-habaneros"],
  [/^parfait de yogur/, "svg:ic-yogur-parfait"],
  [/^yogur con pina/, "svg:ic-yogur-pina-coco"],
  [/^bowl de yogur/, "svg:ic-yogur-parcha"],
  [/^yogur griego con salsita de guayaba/, "svg:ic-yogur-guayaba"],
  [/^yogur helado/, "svg:ic-yogur-helado"],
  [/^yogur casero/, "svg:ic-yogur-frasco"],
  [/^avena fria con yogur/, "svg:ic-avena-fria"],
  [/^paletas de yogur/, "svg:ic-paletas-yogur"],
  [/^salsa de yogur/, "svg:ic-salsa-yogur"]
];

function dishIcon(recipe) {
  // Jugos naturales: un vaso con el color del jugo y su fruta (ic-jugo-<id> en el sprite de index.html);
  // si un jugo nuevo todavía no tiene dibujo, el vaso de la categoría. El de grosella conserva el suyo.
  if (recipe.category === "jugos" && recipe.id !== "refresco-grosella") {
    const own = `ic-jugo-${recipe.id}`;
    return `svg:${typeof document !== "undefined" && document.getElementById(own) ? own : "ic-jugo-natural"}`;
  }
  const name = norm(recipe.name.es);
  for (const [re, icon] of meatIcons[recipe.category] || []) {
    if (re.test(name)) { if (icon) return icon; break; }
  }
  for (const [re, icon] of dessertIcons) if (re.test(name)) return icon;
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
  salsas: ["#F0C7B4", "#D98F71"], bebidas: ["#CDE5E4", "#93C6C3"], jugos: ["#FBE2B8", "#F2AE52"], cocteles: ["#F3D0D6", "#E0939F"],
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
  "salsas", "bebidas", "jugos", "cocteles"
];

const QUICK_MAX_MIN = 30;
const STORE = { lang: "rcb.lang", favs: "rcb.favorites", units: "rcb.units" };
/* Medidas: "home" (tazas, cucharadas, °F, como están escritas) o "metric" (además ≈ g / ml y °C). */
let unitsMode = readStore("rcb.units") === "metric" ? "metric" : "home";
const UNITS_T = {
  es: { label: "Medidas", home: "Caseras", metric: "Gramos y °C", note: "Gramos y mililitros aproximados, calculados con los pesos de cada ingrediente." },
  en: { label: "Measures", home: "Cups & °F", metric: "Grams & °C", note: "Approximate grams and milliliters, from each ingredient's weights." }
};
/* "350°F" → "350°F (175°C)" en modo métrico. */
function withCelsius(text) {
  if (unitsMode !== "metric") return esc(text);
  return esc(text).replace(/(\d{2,3})\s*°\s*F\b(?!\s*\()/g, (m, f) => `${m} <span class="metric">(${Math.round(((+f - 32) * 5) / 9 / 5) * 5}°C)</span>`);
}
function metricHTML(line, factor) {
  if (unitsMode !== "metric" || typeof lineGrams !== "function") return "";
  const g = lineGrams(line);
  if (!g || g.grams < 1) return "";
  const v = g.grams * factor;
  const n = v >= 1000 ? `${(v / 1000).toLocaleString(currentLang === "es" ? "es-PR" : "en-US", { maximumFractionDigits: 2 })} ${g.liquid ? "L" : "kg"}` : `${v < 10 ? Math.round(v * 2) / 2 : Math.round(v / 5) * 5} ${g.liquid ? "ml" : "g"}`;
  return ` <span class="metric">≈ ${n}</span>`;
}

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

/* Un icono es un emoji o "svg:<id>" (dibujo del sprite de index.html). */
function iconArt(icon, cls = "cover-svg") {
  return icon && icon.startsWith("svg:") ? `<svg class="${cls}" viewBox="0 0 64 64"><use href="#${icon.slice(4)}"/></svg>` : icon || "";
}

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
  const art = iconArt(icon);
  return `<span class="cover" style="--tone:${tone};--tone-2:${tone2};--cx:${cx};--cy:${cy};--cr:${cr}"><span class="cover-emoji" aria-hidden="true">${art}</span>${img}</span>`;
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
  return Boolean(searchQuery || selectedNavCategory || onlyFavorites || onlyQuick || (typeof advActive === "function" && advActive()));
}

/* Búsqueda inteligente (js/search.js): se calcula una vez por texto e idioma. */
let searchCache = { q: null, lang: null, res: null };
/* Resultados de búsqueda por tandas: cuántas tarjetas se ven de la vista actual. */
const RESULT_PAGE = 30;
let resultView = { key: null, limit: RESULT_PAGE };
function currentSearch() {
  if (!searchQuery) return null;
  if (searchCache.q !== searchQuery || searchCache.lang !== currentLang) {
    searchCache = { q: searchQuery, lang: currentLang, res: smartSearch(searchQuery, { isQuick, lang: currentLang }) };
  }
  return searchCache.res;
}
const searchScore = (r) => { const s = currentSearch(); return s ? s.scores.get(r.id) || 0 : 0; };
const byScore = (a, b) => searchScore(b) - searchScore(a);

function matches(r) {
  if (selectedNavCategory && r.category !== selectedNavCategory) return false;
  if (onlyFavorites && !favorites.has(r.id)) return false;
  if (onlyQuick && !isQuick(r)) return false;
  const s = currentSearch();
  if (s && !s.scores.has(r.id)) return false;
  if (typeof advOk === "function" && !advOk(r)) return false; // js/filters.js
  return true;
}

/* Con "lo que tengo" (js/filters.js) y sin búsqueda: por cuánto de lo que tiene usa cada receta. */
const haveSorting = () => !currentSearch() && typeof adv !== "undefined" && adv.have.length > 0;

function getFilteredRecipes(category) {
  const list = recipes.filter((r) => r.category === category && matches(r));
  // Al buscar, por parecido; si no, por familia (js/families.js) y nombre.
  return currentSearch() ? list.sort(byScore) : haveSorting() ? advSort(list) : sortByFamily(list, currentLang);
}

/* Lo que entendió el buscador: términos, exclusiones, ideas y correcciones. */
function renderUnderstood() {
  const box = $("search-understood");
  const s = currentSearch();
  if (!s) { box.hidden = true; box.innerHTML = ""; return; }
  const u = t().understood;
  const chip = (txt) => `<span class="su-chip">${esc(txt)}</span>`;
  const parts = [];
  if (s.terms.length) parts.push(`<span class="su-label">${u.looking}:</span> ${s.terms.map((x) => chip(x.text)).join(" ")}`);
  if (s.excludes.length) parts.push(`<span class="su-label">${u.without}:</span> ${s.excludes.map((x) => chip(x.text)).join(" ")}`);
  if (s.ideas.length) parts.push(`<span class="su-label">${u.ideas}:</span> ${s.ideas.map((x) => chip(x.label[currentLang])).join(" ")}`);
  if (s.corrections.length) parts.push(`<span class="su-label">${u.corrected}:</span> ${s.corrections.map((c) => chip(`${c.from} → ${c.to}`)).join(" ")}`);
  box.innerHTML = `<span class="su-line">${parts.join('<span class="su-sep" aria-hidden="true">·</span>')}</span>` +
    (s.partial ? `<span class="su-note">${u.partial}</span>` : (s.terms.length && s.scores.size > 1 ? `<span class="su-note">${u.order}</span>` : ""));
  box.hidden = false;
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
  $("hero-stats").innerHTML = tr.statsHero(publicRecipeCount(), categoryOrder.length);
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
  $("view-home").classList.toggle("is-searching", Boolean(searchQuery));
  $("recetas").hidden = !active;
  $("filter-clear").hidden = !active;
  if (!active) { container.innerHTML = ""; renderUnderstood(); return; }

  const filtered = recipes.filter(matches);
  if (currentSearch()) filtered.sort(byScore);
  else if (haveSorting()) advSort(filtered);
  renderUnderstood();
  let heading = tr.results;
  if (searchQuery) heading = tr.resultsFor(searchQuery);
  else if (selectedNavCategory) heading = tr.categories[selectedNavCategory];
  $("results-heading").textContent = heading;
  $("results-count").textContent = tr.countFound(filtered.length);

  if (!filtered.length) {
    container.innerHTML = emptyHTML();
    return;
  }

  // Al buscar se dibujan las tarjetas por tandas (RESULT_PAGE): dibujar cientos
  // en cada letra era lo lento en el celular. "Ver más" añade la siguiente tanda.
  const viewKey = `${searchQuery}|${selectedNavCategory}|${onlyFavorites}|${onlyQuick}|${currentLang}|${typeof advKey === "function" ? advKey() : ""}`;
  if (viewKey !== resultView.key) resultView = { key: viewKey, limit: RESULT_PAGE };
  const paged = Boolean(currentSearch()) || haveSorting();
  const limit = paged ? resultView.limit : Infinity;
  const hidden = Math.max(0, filtered.length - limit);
  const moreBtn = hidden
    ? `<div class="more-results"><button type="button" class="btn btn-outline" data-action="more-results">${esc(tr.moreResults(hidden))}</button></div>`
    : "";

  // Una categoría elegida: sin búsqueda, agrupada por familia con un subtítulo
  // para cada una (flanes, tembleques…; res, cerdo…); al buscar, por parecido.
  if (selectedNavCategory) {
    if (paged) {
      container.innerHTML = `<div class="recipe-grid">${filtered.slice(0, limit).map((r, i) => cardHTML(r, i)).join("")}</div>${moreBtn}`;
      return;
    }
    let n = 0;
    const groups = groupByFamily(filtered, selectedNavCategory, currentLang);
    container.innerHTML = groups.map((g) => `
      <section class="family-group" aria-label="${esc(g.label || "")}">
        ${g.label && groups.length > 1 ? `<h4 class="family-head"><span class="family-name">${esc(g.label)}</span><span class="family-count">${g.recipes.length}</span></h4>` : ""}
        <div class="recipe-grid">${g.recipes.map((r) => cardHTML(r, n++)).join("")}</div>
      </section>`).join("");
    return;
  }

  // Búsqueda, favoritas o rápidas: resultados agrupados por categoría (sólo
  // las que tienen alguno), con el recuento de cada grupo. Se reparten en una
  // sola pasada; al buscar, `filtered` ya viene por parecido, así que cada grupo
  // sale en el orden de su mejor receta.
  const buckets = new Map();
  for (const r of filtered) {
    if (!buckets.has(r.category)) buckets.set(r.category, []);
    buckets.get(r.category).push(r);
  }
  const groups = paged ? [...buckets.keys()] : categoryOrder.filter((c) => buckets.has(c));
  let left = limit;
  container.innerHTML = groups.map((cat) => {
    if (left <= 0) return "";
    const all = paged ? buckets.get(cat) : sortByFamily(buckets.get(cat), currentLang);
    const catRecipes = all.slice(0, left);
    left -= catRecipes.length;
    const total = recipes.filter((r) => r.category === cat).length;
    const [tone] = categoryTones[cat];
    const countText = all.length !== total ? `${all.length} / ${total}` : `${total} ${tr.recipeCount}`;
    return `
      <section class="category-section" id="cat-${cat}" aria-labelledby="cathead-${cat}">
        <h3 class="category-header" id="cathead-${cat}">
          <span class="cat-dot" style="background:${tone}" aria-hidden="true">${iconArt(categoryIcons[cat], "cat-dot-svg")}</span>
          <span class="cat-title">${esc(tr.categories[cat])}</span>
          <span class="cat-count">${countText}</span>
        </h3>
        <div class="category-body">
          <div class="recipe-grid">${catRecipes.map((r, i) => cardHTML(r, i)).join("")}</div>
        </div>
      </section>`;
  }).join("") + moreBtn;
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
  if (!$("view-plans").hidden) renderPlansShell();
  if (typeof refreshKitchenViews === "function") refreshKitchenViews();
  if (typeof renderAdvPanel === "function") renderAdvPanel();
  if (typeof renderCook === "function") renderCook();
  if (typeof renderSeasonal === "function") renderSeasonal();
  renderAuthTexts();
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
  $("modal-steps-list").innerHTML = recipe.steps[currentLang].map((s, i) => `<li>${withCelsius(s)}${typeof stepTimersHTML === "function" ? stepTimersHTML(s, i + 1) : ""}</li>`).join("");
  if (typeof recipeLevel === "function") $("modal-level").textContent = FT[currentLang].levelTag[recipeLevel(recipe)];
  renderPairings(recipe);
  renderFavButton();
  renderIngredients();
  renderNutrition(recipe);
  renderSafety(recipe);
  renderRecipeReviews(recipe); // js/reviews.js
  if (typeof renderRecipeKitchen === "function") renderRecipeKitchen(recipe); // js/kitchen.js
}

/* Salsas y aderezos: con qué platos combinan mejor (js/pairings.js). Cada uno lleva a su categoría. */
function renderPairings(recipe) {
  const box = $("modal-pairings");
  const pairs = getPairings(recipe);
  box.hidden = !pairs.length;
  const pt = PAIR_TEXT[currentLang];
  box.innerHTML = pairs.length
    ? `<h3 class="pairings-title">${esc(pt.label)}</h3><ul class="pairing-list">${pairs.map((p) => `
        <li><button type="button" class="pairing-chip" data-pair-cat="${p.category}" aria-label="${esc(pt.go(p.label[currentLang].toLowerCase()))}">${esc(p.label[currentLang])}</button></li>`).join("")}</ul>`
    : "";
}

/* Textos nuevos de la pestaña de nutrición (etiqueta completa, grupos y fuentes del USDA). */
const NUTRI_UI_T = {
  es: {
    chol: "Colesterol", trans: "Grasa trans", add: (g) => `Incluye ${g} de azúcares añadidos`, vd: "Vitamina D", ca: "Calcio", fe: "Hierro", k: "Potasio",
    groupsTitle: "Grupos de alimentos en una porción", groupsNote: "Según las Guías Alimentarias para Estadounidenses 2025–2030 (USDA/HHS).",
    groups: { veg: "Vegetales y viandas", fruit: "Frutas", grain: "Granos", wgrain: "de ellos integrales", prot: "Proteína", dairy: "Lácteos" },
    gUnits: { veg: "taza", fruit: "taza", grain: "oz", wgrain: "oz", prot: "oz", dairy: "taza" },
    srcTitle: "Fuentes de cada ingrediente", srcUsda: "USDA FoodData Central", srcLocal: "Estimado de la app (producto de Puerto Rico o de marca que no está en el USDA)",
    srcEdible: (p) => `se cuenta la parte comestible: ${p}%`, srcIntro: (a, b) => `${a} de ${b} ingredientes contados tienen su número oficial del USDA. Toque uno para ver la ficha del USDA.`,
    drained: "Las viandas, vegetales o pastas se hierven y se escurren: se descuenta lo que se pierde en el agua (potasio −25 %, calcio y hierro −5 %), como en la Tabla de factores de retención del USDA.",
    method: "Cómo se calcula: cada ingrediente crudo, como se compra, por su peso y los valores por 100 g de USDA FoodData Central (base SR Legacy). Las carnes con hueso cuentan sólo lo que se come."
  },
  en: {
    chol: "Cholesterol", trans: "Trans fat", add: (g) => `Includes ${g} added sugars`, vd: "Vitamin D", ca: "Calcium", fe: "Iron", k: "Potassium",
    groupsTitle: "Food groups in one serving", groupsNote: "Per the Dietary Guidelines for Americans 2025–2030 (USDA/HHS).",
    groups: { veg: "Vegetables", fruit: "Fruit", grain: "Grains", wgrain: "of which whole", prot: "Protein", dairy: "Dairy" },
    gUnits: { veg: "cup", fruit: "cup", grain: "oz", wgrain: "oz", prot: "oz", dairy: "cup" },
    srcTitle: "Source of each ingredient", srcUsda: "USDA FoodData Central", srcLocal: "App estimate (Puerto Rican or brand-name product not in the USDA database)",
    srcEdible: (p) => `edible part counted: ${p}%`, srcIntro: (a, b) => `${a} of ${b} counted ingredients have their official USDA number. Tap one to see the USDA record.`,
    drained: "Root vegetables, vegetables or pasta are boiled and drained: what's lost in the water is subtracted (potassium −25%, calcium and iron −5%), as in the USDA Table of Nutrient Retention Factors.",
    method: "How it's calculated: each raw ingredient, as purchased, by weight, with the per-100 g values from USDA FoodData Central (SR Legacy). Bone-in meats count only the edible part."
  }
};

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
  const ut = NUTRI_UI_T[currentLang];
  const mg = (v) => `${fmt(v < 10 ? Math.round(v * 10) / 10 : Math.round(v), 1)} mg`;
  // Como en la etiqueta de la FDA: menos de 0.5 g de grasa trans se declara 0 g.
  const transG = (v) => (v < 0.5 ? "0" : grams(v));
  // Mismo orden que la etiqueta "Nutrition Facts" de la FDA.
  const rows = [
    [tr.nFat, `${grams(per.fat)} g`, dv(per.fat, "fat"), ""],
    [tr.nSat, `${grams(per.sat)} g`, dv(per.sat, "sat"), "sub"],
    [ut.trans, `${transG(per.trans)} g`, "", "sub"],
    [ut.chol, `${fmt(Math.round(per.chol / 5) * 5)} mg`, dv(per.chol, "chol"), ""],
    [tr.nSodium, `${fmt(Math.round(per.na / 5) * 5)} mg`, dv(per.na, "na"), ""],
    [tr.nCarbs, `${grams(per.c)} g`, dv(per.c, "c"), ""],
    [tr.nFiber, `${grams(per.fib)} g`, dv(per.fib, "fib"), "sub"],
    [tr.nSugars, `${grams(per.s)} g`, "", "sub"],
    [ut.add(`${grams(per.add)} g`), "", dv(per.add, "add"), "sub2"],
    [tr.nProtein, `${grams(per.p)} g`, dv(per.p, "p"), ""],
    [ut.vd, `${fmt(Math.round(per.vd * 10) / 10)} mcg`, dv(per.vd, "vd"), "micro"],
    [ut.ca, mg(per.ca), dv(per.ca, "ca"), "micro"],
    [ut.fe, mg(per.fe), dv(per.fe, "fe"), "micro"],
    [ut.k, mg(per.k), dv(per.k, "k"), "micro"]
  ];
  // Grupos de alimentos de una porción (Guías Alimentarias 2025–2030).
  const gr = est.groups || {};
  const half = (v) => { const r = Math.round(v * 4) / 4; return r ? fmt(r, 2) : "0"; };
  const groupsHTML = ["veg", "fruit", "grain", "prot", "dairy"].map((k) => gr[k] >= 0.125
    ? `<li><span class="ng-name">${esc(ut.groups[k])}</span><span class="ng-val">${half(gr[k])} ${esc(ut.gUnits[k])}${k === "grain" && gr.wgrain >= 0.125 ? ` · ${esc(ut.groups.wgrain)} ${half(gr.wgrain)}` : ""}</span></li>` : "").join("");
  // Fuente de cada ingrediente contado: número FDC del USDA o estimado propio.
  let usdaN = 0, srcN = 0;
  const srcRows = (est.sources || []).map((foods, i) => {
    if (!foods) return "";
    srcN++;
    const uniq = foods.filter((f, k) => foods.indexOf(f) === k);
    if (uniq.every((f) => f.src)) usdaN++;
    return `<li><span class="src-ing">${esc(recipe.ingredients[currentLang][i])}</span>${uniq.map((f) => f.src
      ? `<a class="src-fdc" href="https://fdc.nal.usda.gov/food-details/${f.src.fdc}/nutrients" target="_blank" rel="noopener">FDC #${f.src.fdc}</a> <span class="src-desc">${esc(f.src.desc)}${f.src.ef < 1 ? ` · ${esc(ut.srcEdible(Math.round(f.src.ef * 100)))}` : ""}${f.src.prep ? ` · ${esc(f.src.prep[currentLang])}` : ""}</span>`
      : `<span class="src-local">${esc(ut.srcLocal)}</span>`).join("<br>")}</li>`;
  }).join("");
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
          ${rows.map(([l, v, d, cls]) => `<tr class="${cls}"><th scope="row">${esc(l)}</th><td>${v}</td><td>${d}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="nutri-notes">
      <p>${tr.nutriCoverage(est.counted, est.measurable)}${est.frying ? ` ${tr.nutriFrying}` : ""}</p>
      ${missing ? `<p>${tr.nutriMissing}</p><ul class="nutri-missing">${missing}</ul>` : ""}
      <p>${tr.nutriNote}</p>
      <p>${tr.nutriDv}</p>
      ${est.drained ? `<p>${esc(ut.drained)}</p>` : ""}
    </div>
    ${groupsHTML ? `<section class="nutri-groups"><h3 class="nutri-subtitle">${esc(ut.groupsTitle)}</h3><ul class="ng-list">${groupsHTML}</ul><p class="nutri-sources-note">${esc(ut.groupsNote)}</p></section>` : ""}
    <details class="nutri-sources">
      <summary>${esc(ut.srcTitle)} · ${esc(ut.srcUsda)}</summary>
      <p class="nutri-sources-note">${esc(ut.method)}</p>
      <p class="nutri-sources-note">${esc(ut.srcIntro(usdaN, srcN))}</p>
      <ul class="src-list">${srcRows}</ul>
    </details>`;
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

  // Sustitutos de js/substitutes.js para cada alérgeno, según la línea donde aparece.
  const subsHTML = (al) => {
    const subs = getSubstitutes(recipe, al);
    return subs.length ? `<span class="allergen-sub"><strong>${esc(SUBS_TEXT[currentLang].label)}</strong> ${subs.map((t) => `<span class="allergen-sub-item">${esc(t[currentLang])}</span>`).join("")}</span>` : "";
  };
  const allergens = adv.allergens.length
    ? `<ul class="allergen-list">${adv.allergens.map((a) => `
        <li>
          <span class="allergen-chip">${esc(at.allergens[a.key])}</span>
          <span class="allergen-src">${at.foundIn} ${a.items.map((i) => esc(ings[i])).join("; ")}</span>
          ${subsHTML(a)}
        </li>`).join("")}</ul><p class="allergen-subs-note">${esc(SUBS_TEXT[currentLang].note)}</p>`
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
  const ut = UNITS_T[currentLang];
  $("units-toggle").innerHTML = `<span class="units-label">${ut.label}:</span>${["home", "metric"].map((k) => `<button type="button" class="units-btn" data-units="${k}" aria-pressed="${unitsMode === k}">${ut[k]}</button>`).join("")}`;
  $("units-note").hidden = unitsMode !== "metric";
  $("units-note").textContent = ut.note;
  const esLines = r.ingredients.es;
  $("modal-ingredients-list").innerHTML = r.ingredients[currentLang].map((ing, i) => `
    <li><label class="ing-item">
      <input type="checkbox" value="${i}" ${checked.has(String(i)) ? "checked" : ""}>
      <span class="ing-box" aria-hidden="true"><svg class="icon"><use href="#i-check"/></svg></span>
      <span class="ing-text">${scaleIngredient(ing, factor)}${metricHTML(esLines[i], factor)}</span>
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

/* Saltar a una posición sin animación. El CSS tiene `scroll-behavior: smooth`,
 * así que `scrollTo(0, 0)` se deslizaba poco a poco: al abrir una receta en el
 * celular se veía primero el final y, si se tocaba la pantalla durante el
 * deslizamiento, se quedaba abajo. Al cambiar de vista se salta al instante. */
function jumpTo(y) {
  window.scrollTo({ top: y, left: 0, behavior: "instant" });
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
  $("view-plans").hidden = true;
  $("view-admin").hidden = true;
  $("view-recipe").hidden = false;
  jumpTo(0);
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
  $("view-plans").hidden = true;
  $("view-admin").hidden = true;
  $("view-home").hidden = false;
  if (fromRecipe && !explicit) {
    // "Atrás": volver al mismo punto de los resultados y a la tarjeta abierta,
    // aunque la URL anterior fuera un ancla (#recetas).
    jumpTo(homeScrollY);
    const link = lastId && document.querySelector(`[data-open="${CSS.escape(lastId)}"]`);
    if (link) link.focus({ preventScroll: true });
  } else if (anchor) {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: fromRecipe || reduceMotion() ? "instant" : "smooth", block: "start" });
  } else if (explicit) {
    jumpTo(0);
  }
}

/* Ir a los resultados de una categoría (insignia de la receta y "Combina mejor con"). */
function goToCategory(cat) {
  selectedNavCategory = cat;
  searchQuery = ""; $("search-input").value = ""; $("search-clear").hidden = true;
  renderNavPills(); renderCategories();
  explicitNav = true;
  location.hash = "#recetas";
}

function goBack() {
  if (cameFromHome) history.back();
  else location.hash = "#/";
}

/* ------------------------------------------------------------ rutas ---- */

function route() {
  const hash = decodeURIComponent(location.hash || "");
  // Las vistas de js/kitchen.js se esconden aquí; las demás las esconde cada show*().
  for (const id of ["view-mine", "view-shop"]) { const el = $(id); if (el) el.hidden = true; }
  if (typeof setBottomNav === "function") setBottomNav(hash);
  const m = hash.match(/^#\/receta\/(.+)$/);
  if (m) { showRecipe(m[1]); return; }
  if (hash === "#/planes") { showPlans(); return; }
  if (hash === "#/admin") { showAdmin(); return; }
  if (hash === "#/mi-recetario") { showMine(); return; }  // js/kitchen.js
  if (hash === "#/compras") { showShop(); return; }       // js/kitchen.js
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
  if (typeof clearAdvFilters === "function") clearAdvFilters();
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
  // Búsqueda en vivo + botón/Enter que lleva a los resultados.
  // - Espera a que se deje de escribir (SEARCH_DELAY) en vez de buscar y dibujar en cada letra.
  // - Desde 2 letras (una sola daría todas las recetas); con Enter busca aunque sea una.
  // - Busca en todo el recetario: escribir quita la categoría elegida (antes buscaba sólo
  //   dentro de ella sin decirlo, y "pollo" con Postres elegida daba 0 recetas).
  // - Mientras hay búsqueda, la cuadrícula de categorías y las rápidas se esconden
  //   (`.is-searching`) para que los resultados queden justo debajo del buscador.
  const input = $("search-input");
  const SEARCH_DELAY = 180;
  let searchTimer = 0;
  const runSearch = (text) => {
    clearTimeout(searchTimer);
    if (text === searchQuery) return;
    searchQuery = text;
    if (searchQuery && selectedNavCategory) { selectedNavCategory = null; renderNavPills(); }
    renderCategories();
  };
  input.addEventListener("input", () => {
    $("search-clear").hidden = !input.value;
    const text = input.value.trim();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => runSearch(text.length >= 2 ? text : ""), text ? SEARCH_DELAY : 0);
  });
  $("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    runSearch(input.value.trim());
    input.blur();
    scrollToResults();
  });
  $("search-clear").addEventListener("click", () => {
    input.value = "";
    $("search-clear").hidden = true;
    runSearch("");
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
    if (e.target.closest('[data-action="more-results"]')) {
      // La siguiente tanda; el foco va a la primera tarjeta nueva.
      const first = resultView.limit;
      resultView.limit += RESULT_PAGE;
      renderCategories();
      const links = document.querySelectorAll("#categories-container .card-link");
      if (links[first]) links[first].focus({ preventScroll: true });
      return;
    }
    const pair = e.target.closest("[data-pair-cat]");
    if (pair) { goToCategory(pair.dataset.pairCat); return; }
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
  $("modal-badge").addEventListener("click", () => goToCategory($("modal-badge").dataset.category));
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
  $("units-toggle").addEventListener("click", (e) => {
    const b = e.target.closest("[data-units]");
    if (!b || b.dataset.units === unitsMode) return;
    unitsMode = b.dataset.units;
    writeStore(STORE.units, unitsMode);
    renderIngredients();
    $("modal-steps-list").innerHTML = current.steps[currentLang].map((s, i) => `<li>${withCelsius(s)}${typeof stepTimersHTML === "function" ? stepTimersHTML(s, i + 1) : ""}</li>`).join("");
    const again = document.querySelector(`[data-units="${unitsMode}"]`); if (again) again.focus();
  });

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
  setupPlans();
  route();
}

document.addEventListener("DOMContentLoaded", init);
