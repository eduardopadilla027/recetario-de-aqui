/*
 * Recetarios de Aquí — "Combina mejor con": en las salsas y aderezos, con qué
 * platos se usan mejor (carnes, aves, pescados, viandas, ensaladas...).
 *
 * Se deduce del nombre y de los pasos de la receta ("Sirva con pernil, pollo...")
 * y se completa a mano en PAIRINGS_EXTRA para las que no lo dicen. Cada
 * combinación lleva a su categoría de recetas.
 */

// [clave, categoría a la que lleva, texto, palabras en el nombre o los pasos (sin acentos)]
const PAIR_KINDS = [
  ["carnes", "carnes", { es: "Carnes", en: "Meats" }, /\b(pernil|cerdo|chuletas?|lechon|res|bistec|churrasco|carnes?|costill\w*|jamon|cordero|masitas|filete de res|carne frita)\b/],
  ["aves", "aves", { es: "Aves", en: "Poultry" }, /\b(pollo|pavo|pato|alitas|aves|gallina|codorniz|pechugas?)\b/],
  ["pescados", "pescados", { es: "Pescados y mariscos", en: "Fish and seafood" }, /\b(pescados?|camarones|mariscos|chillo|mero|salmon|bacalao|langosta|pulpo|dorado|atun|jueyes|carrucho|calamares)\b/],
  ["viandas", "vegetales", { es: "Viandas y frituras", en: "Root vegetables and fritters" }, /\b(yuca|tostones|viandas?|platanos?|amarillos|malanga|name|batata|papas?|mofongos?|sorullitos|alcapurrias|frituras|bacalaitos|empanadillas|pastelillos|yautia|guineitos|arepas)\b/],
  ["ensaladas", "ensaladas", { es: "Ensaladas", en: "Salads" }, /\bensaladas?\b/],
  ["vegetales", "vegetales", { es: "Vegetales y tofu", en: "Vegetables and tofu" }, /\b(vegetales|tofu|berenjenas?|calabacin|setas)\b/],
  ["arroces", "arroces", { es: "Arroz y granos", en: "Rice and beans" }, /\b(arroz|habichuelas|granos|bowls?)\b/],
  ["pastas", "pastas", { es: "Pastas", en: "Pasta" }, /\b(pastas|espaguetis|coditos|lasana|fideos|macarrones|pasta (hervida|cocida|corta|larga|caliente))\b/],
  ["emparedados", "emparedados", { es: "Sándwiches y hamburguesas", en: "Sandwiches and burgers" }, /\b(sandwich\w*|emparedados?|hamburguesas?|tripletas?|tacos|wraps?|pan)\b/]
];

// Las que no lo dicen en los pasos (o les falta alguna obvia).
const PAIRINGS_EXTRA = {
  "sofrito": ["carnes", "aves", "pescados", "arroces"],
  "recaito": ["carnes", "aves", "pescados", "arroces"],
  "sazon-casero": ["carnes", "aves", "arroces"],
  "aceite-achiote": ["arroces"],
  "pique": ["carnes", "aves", "pescados", "viandas"],
  "adobo-pr": ["pescados"],
  "mayo-ketchup": ["emparedados"],
  "guacamole-recao": ["emparedados"],
  "mayo-ajo-vegana": ["emparedados", "vegetales"],
  "salsa-queso": ["vegetales"],
  "pesto-recao-mani": ["pastas"],
  "salsa-grosella": ["carnes", "aves"],
  "salsa-acerola": ["carnes", "aves"],
  "pique-pina": ["carnes", "aves", "pescados", "viandas", "arroces"],
  "salsa-mani": ["vegetales", "aves", "ensaladas"],
  "jalea-aji-picante": ["aves", "carnes"]
};

const PAIR_TEXT = {
  es: { label: "Combina mejor con:", go: (c) => `Ver recetas de ${c}` },
  en: { label: "Best paired with:", go: (c) => `See ${c} recipes` }
};

const pairNorm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Combinaciones de una salsa o aderezo, en el orden de PAIR_KINDS ([] si no aplica). */
function getPairings(recipe) {
  if (recipe.category !== "salsas") return [];
  // "sin carne", "sin pollo ni pescado" no cuentan.
  const text = pairNorm(recipe.name.es + " " + recipe.steps.es.join(" ")).replace(/\bsin \w+( ni \w+)*/g, " ");
  const extra = PAIRINGS_EXTRA[recipe.id] || [];
  return PAIR_KINDS.filter(([key, , , rx]) => extra.includes(key) || rx.test(text))
    .map(([key, category, label]) => ({ key, category, label }));
}
