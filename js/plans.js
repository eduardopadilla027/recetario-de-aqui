/* Recetarios de Aquí · Planes de comida (#/planes).
 *
 * Consulta las recetas del recetario según un objetivo (rebajar, ganar masa
 * muscular, mantener, bajo en sodio, bajo en carbohidratos, bajo en azúcar, más
 * nutritivo), la época del año (Navidad, Cuaresma, verano, Acción de Gracias,
 * días de lluvia) y preferencias (vegetariano, rápidas), y arma un plan de
 * 1 o 7 días con desayuno, almuerzo, merienda y cena. El almuerzo y la cena son
 * plato principal + acompañantes según el objetivo (arroz y habichuelas para masa,
 * ensalada o vegetales para rebajar…), salvo los platos completos (asopao, paella,
 * arroz con…, sancocho, pastelón, sándwiches), que van solos. Usa la nutrición
 * ESTIMADA de cada receta (js/nutrition.js) y los alérgenos de
 * js/advisories.js. Si la persona pone sus datos, calcula las calorías del día
 * con Mifflin-St Jeor; si no, usa una meta típica del objetivo. Es orientación
 * general, no consejo médico: la vista lo dice siempre.
 *
 * Depende de globales de app.js (t, currentLang, $, esc, coverHTML,
 * readStore, writeStore). Los ajustes se guardan en este navegador y, con la sesión
 * abierta, en la cuenta del usuario en Firestore (js/auth.js: cloudSavePlan). */

const PLAN_STORE = "rcb.plan";

const PLAN_T = {
  es: {
    title: "Planes de comida",
    intro: "Elija un objetivo y el recetario le arma un plan con recetas de aquí. Las calorías y la proteína son estimaciones calculadas de los ingredientes.",
    goalLabel: "Objetivo",
    goals: {
      rebajar: ["Rebajar", "Menos calorías, más proteína y fibra; sin frituras."],
      masa: ["Ganar masa muscular", "Más proteína y calorías suficientes para crecer."],
      mantener: ["Mantener", "Platos balanceados para el día a día."],
      sodio: ["Bajo en sodio", "Para cuidar la presión: poco sodio por plato."],
      lowcarb: ["Bajo en carbohidratos", "Proteína y vegetales; pocos almidones y azúcar."],
      azucar: ["Bajo en azúcar", "Poca azúcar por plato y más fibra; para quien cuida el azúcar."],
      nutritivo: ["Más nutritivo", "Más fibra, proteína y vegetales; menos grasa saturada y sodio."],
      vegetariano: ["Vegetariano", "Sin carne, pollo ni pescado; con huevo, queso y mucho grano."],
      vegano: ["Vegano", "Sólo plantas: sin carne, lácteos, huevo ni miel; proteína de granos y tofu."]
    },
    seasonLabel: "Época",
    seasons: { auto: "Según la fecha de hoy", todo: "Todo el año", navidad: "Navidad", cuaresma: "Cuaresma y Semana Santa", verano: "Verano y playa", gracias: "Acción de Gracias", lluvia: "Días de lluvia" },
    seasonNow: (name) => `Hoy: ${name}`,
    prefsLabel: "Preferencias",
    prefs: { quick: "Sólo rápidas (30 min o menos)" },
    diets: { normal: "Normal (de todo)", veg: "Vegetariano", vegan: "Vegano" },
    dietHelp: "Normal sugiere cualquier receta al azar según su objetivo.",
    periodDay: (d) => `Plan de hoy, ${d}. Mañana le sugerimos otro.`,
    periodWeek: (a, b, next) => `Plan del ${a} al ${b}. El ${next} empieza otro.`,
    savedNote: "Se guarda en su cuenta: al volver verá el mismo plan hasta que toque cambiarlo.",
    protLabel: "Proteína del almuerzo y la cena",
    protHelp: "Escoja una o varias; sin ninguna, entra de todo.",
    protOpts: { aves: "Aves (pollo, pavo)", pescado: "Pescado", mariscos: "Mariscos", res: "Res", cerdo: "Cerdo", cabro: "Cabro, cordero y conejo", granos: "Granos y vegetales" },
    seasonTitle: (name) => `De temporada: ${name}`,
    seasonSub: "Las recetas típicas de la época, incluidos postres y bebidas. En el plan salen primero las que cumplen su objetivo.",
    badges: { prot: "Alta en proteína", fib: "Alta en fibra", sugar: "Baja en azúcar", sodium: "Sodio moderado" },
    fiber: "fibra", sugarW: "azúcar",
    sidesTitle: "Acompañantes",
    withSide: "con",
    meTitle: "Mis datos (opcional)",
    meHelp: "Con sus datos se calcula la meta de calorías y proteína del día. Se guardan en su cuenta; sólo usted los ve.",
    sex: "Sexo", female: "Mujer", male: "Hombre",
    age: "Edad", weight: "Peso (libras)", height: "Estatura", feet: "pies", inches: "pulgadas",
    activity: "Actividad",
    activities: ["Poca (sentado casi todo el día)", "Ligera (1–3 días de ejercicio)", "Moderada (3–5 días)", "Alta (6–7 días o trabajo físico)"],
    avoid: "Evitar",
    avoidOpts: { gluten: "Gluten", milk: "Leche", egg: "Huevo", fish: "Pescado", shellfish: "Mariscos", nuts: "Maní y nueces", pork: "Cerdo" },
    targets: (kcal, p, custom) => `Meta del día: <strong>${kcal.toLocaleString("en-US")} calorías</strong> y <strong>${p} g de proteína</strong> ${custom ? "(calculada con sus datos)" : "(meta típica; ponga sus datos para ajustarla)"}.`,
    minWarn: "Por seguridad, la meta no baja de 1,200 calorías (mujeres) o 1,500 (hombres) sin supervisión profesional.",
    oneDay: "1 día", sevenDays: "7 días",
    another: "Otro plan",
    swap: "Cambiar",
    swapLabel: (name) => `Cambiar ${name} por otro sugerido`,
    swapTitle: (slot) => `Otros sugeridos para ${slot.toLowerCase()}`,
    swapSideTitle: "Otros acompañantes sugeridos",
    swapHelp: "Cumplen su objetivo y sus ajustes, y no se repiten en este día. Toque uno para ponerlo en el plan.",
    swapMore: "Ver más sugeridos",
    swapNone: "No hay más sugeridos con estos ajustes. Pruebe a quitar algo de «Evitar» o de la proteína.",
    swapClose: "Cerrar",
    swapView: "Ver receta",
    swapDone: (name) => `Listo: ${name} está en su plan.`,
    day: (n) => `Día ${n}`,
    slots: { desayuno: "Desayuno", almuerzo: "Almuerzo", merienda: "Merienda", cena: "Cena" },
    portions: (m) => (m === 1 ? "1 porción" : `${fmtPortion(m)} porciones`),
    perPortion: "por porción",
    total: "Total del día",
    kcal: "cal", prot: "proteína", carbs: "carbohidratos", fat: "grasa", sodium: "sodio",
    noMatch: "No hay suficientes recetas que cumplan el objetivo con esas exclusiones. Quite alguna para ver más opciones.",
    relaxed: "Con esas exclusiones no hay recetas que cumplan el objetivo en todas las comidas; en algunas se usó la que más se acerca.",
    moreTitle: "Recetas que encajan con su objetivo",
    moreSub: "Para consultar o cambiar alguna comida del plan. Ordenadas de mejor a peor para el objetivo.",
    disclaimer: "Orientación general basada en estimaciones de los ingredientes; no sustituye el consejo de un médico o nutricionista. Si está embarazada o lactando, es menor de edad, o tiene diabetes, enfermedad del riñón, del corazón u otra condición, consulte a un profesional antes de cambiar su alimentación.",
    goalNotes: {
      rebajar: "Para rebajar de forma segura se busca bajar de ½ a 2 libras por semana. Beba agua, camine y duerma bien.",
      masa: "La proteína sólo construye músculo junto con entrenamiento de fuerza (pesas o ejercicios con su propio peso) 3–4 veces por semana.",
      mantener: "Varíe las proteínas y los colores en el plato durante la semana.",
      sodio: "La recomendación general es menos de 2,300 mg de sodio al día (1,500 mg si su médico se lo indica). Pruebe antes de salar y use adobo sin sal.",
      lowcarb: "Si tiene diabetes o toma medicamentos para el azúcar, hable con su médico antes de bajar mucho los carbohidratos.",
      azucar: "Se busca menos de 25–50 g de azúcar añadida al día. Si tiene diabetes, su médico o educador en diabetes le dirá cuántos carbohidratos le tocan en cada comida.",
      nutritivo: "Un plato nutritivo tiene la mitad de vegetales, un cuarto de proteína y un cuarto de vianda, arroz o grano.",
      vegetariano: "Combine granos (habichuelas, garbanzos, gandules, lentejas) con arroz o maíz para una proteína completa; el huevo y el queso también suman.",
      vegano: "Incluya habichuelas, garbanzos, lentejas, tofu o quinoa en cada comida principal. La vitamina B12 sólo viene de alimentos fortificados o suplementos: hable con su médico. Coma el hierro de los granos y la espinaca con vitamina C (limón, china) para aprovecharlo mejor."
    }
  },
  en: {
    title: "Meal plans",
    intro: "Pick a goal and the cookbook builds a plan with local recipes. Calories and protein are estimates calculated from the ingredients.",
    goalLabel: "Goal",
    goals: {
      rebajar: ["Lose weight", "Fewer calories, more protein and fiber; no fried foods."],
      masa: ["Build muscle", "More protein and enough calories to grow."],
      mantener: ["Maintain", "Balanced dishes for every day."],
      sodio: ["Low sodium", "For blood pressure: little sodium per dish."],
      lowcarb: ["Low carb", "Protein and vegetables; few starches and sugar."],
      azucar: ["Low sugar", "Little sugar per dish and more fiber; for those watching sugar."],
      nutritivo: ["Most nutritious", "More fiber, protein and vegetables; less saturated fat and sodium."],
      vegetariano: ["Vegetarian", "No meat, chicken or fish; with eggs, cheese and plenty of beans."],
      vegano: ["Vegan", "Plants only: no meat, dairy, eggs or honey; protein from beans and tofu."]
    },
    seasonLabel: "Season",
    seasons: { auto: "Based on today's date", todo: "All year", navidad: "Christmas", cuaresma: "Lent and Holy Week", verano: "Summer and beach", gracias: "Thanksgiving", lluvia: "Rainy days" },
    seasonNow: (name) => `Today: ${name}`,
    prefsLabel: "Preferences",
    prefs: { quick: "Quick only (30 min or less)" },
    diets: { normal: "Regular (everything)", veg: "Vegetarian", vegan: "Vegan" },
    dietHelp: "Regular suggests any recipe at random for your goal.",
    periodDay: (d) => `Today's plan, ${d}. Tomorrow we'll suggest another.`,
    periodWeek: (a, b, next) => `Plan from ${a} to ${b}. A new one starts ${next}.`,
    savedNote: "Saved to your account: you'll see the same plan until it's time to change it.",
    protLabel: "Lunch and dinner protein",
    protHelp: "Pick one or more; with none, everything goes.",
    protOpts: { aves: "Poultry (chicken, turkey)", pescado: "Fish", mariscos: "Shellfish", res: "Beef", cerdo: "Pork", cabro: "Goat, lamb and rabbit", granos: "Beans and vegetables" },
    seasonTitle: (name) => `In season: ${name}`,
    seasonSub: "The typical recipes of the season, including desserts and drinks. In the plan, the ones that fit your goal come first.",
    badges: { prot: "High protein", fib: "High fiber", sugar: "Low sugar", sodium: "Moderate sodium" },
    fiber: "fiber", sugarW: "sugar",
    sidesTitle: "Sides",
    withSide: "with",
    meTitle: "My details (optional)",
    meHelp: "Your details are used to calculate the day's calorie and protein target. They're saved to your account; only you can see them.",
    sex: "Sex", female: "Female", male: "Male",
    age: "Age", weight: "Weight (pounds)", height: "Height", feet: "feet", inches: "inches",
    activity: "Activity",
    activities: ["Low (sitting most of the day)", "Light (exercise 1–3 days)", "Moderate (3–5 days)", "High (6–7 days or physical work)"],
    avoid: "Avoid",
    avoidOpts: { gluten: "Gluten", milk: "Milk", egg: "Egg", fish: "Fish", shellfish: "Shellfish", nuts: "Peanuts and nuts", pork: "Pork" },
    targets: (kcal, p, custom) => `Daily target: <strong>${kcal.toLocaleString("en-US")} calories</strong> and <strong>${p} g protein</strong> ${custom ? "(calculated from your details)" : "(typical target; add your details to adjust it)"}.`,
    minWarn: "For safety, the target doesn't go below 1,200 calories (women) or 1,500 (men) without professional supervision.",
    oneDay: "1 day", sevenDays: "7 days",
    another: "Another plan",
    swap: "Change",
    swapLabel: (name) => `Change ${name} for another suggestion`,
    swapTitle: (slot) => `Other suggestions for ${slot.toLowerCase()}`,
    swapSideTitle: "Other suggested sides",
    swapHelp: "They fit your goal and settings and aren't repeated that day. Tap one to put it in your plan.",
    swapMore: "Show more suggestions",
    swapNone: "No more suggestions with these settings. Try removing something from “Avoid” or the protein.",
    swapClose: "Close",
    swapView: "See recipe",
    swapDone: (name) => `Done: ${name} is in your plan.`,
    day: (n) => `Day ${n}`,
    slots: { desayuno: "Breakfast", almuerzo: "Lunch", merienda: "Snack", cena: "Dinner" },
    portions: (m) => (m === 1 ? "1 serving" : `${fmtPortion(m)} servings`),
    perPortion: "per serving",
    total: "Day total",
    kcal: "cal", prot: "protein", carbs: "carbs", fat: "fat", sodium: "sodium",
    noMatch: "Not enough recipes meet the goal with those exclusions. Remove one to see more options.",
    relaxed: "With those exclusions no recipes meet the goal for every meal; for some, the closest one was used.",
    moreTitle: "Recipes that fit your goal",
    moreSub: "To browse or swap a meal in the plan. Sorted from best to worst for the goal.",
    disclaimer: "General guidance based on ingredient estimates; it doesn't replace advice from a doctor or dietitian. If you're pregnant or breastfeeding, under 18, or have diabetes, kidney or heart disease or another condition, talk to a professional before changing how you eat.",
    goalNotes: {
      rebajar: "Safe weight loss is about ½ to 2 pounds a week. Drink water, walk and sleep well.",
      masa: "Protein only builds muscle together with strength training (weights or bodyweight exercises) 3–4 times a week.",
      mantener: "Vary proteins and colors on the plate through the week.",
      sodio: "The general guideline is under 2,300 mg of sodium a day (1,500 mg if your doctor says so). Taste before salting and use salt-free adobo.",
      lowcarb: "If you have diabetes or take blood-sugar medication, talk to your doctor before cutting carbs a lot.",
      azucar: "Aim for under 25–50 g of added sugar a day. If you have diabetes, your doctor or diabetes educator will tell you how many carbs fit each meal.",
      nutritivo: "A nutritious plate is half vegetables, a quarter protein and a quarter root vegetable, rice or grain.",
      vegetariano: "Pair beans, chickpeas, pigeon peas or lentils with rice or corn for complete protein; eggs and cheese help too.",
      vegano: "Include beans, chickpeas, lentils, tofu or quinoa at every main meal. Vitamin B12 only comes from fortified foods or supplements: talk to your doctor. Eat iron from beans and spinach with vitamin C (lime, orange) to absorb it better."
    }
  }
};
const pt = () => PLAN_T[currentLang];
// En Puerto Rico los miles llevan coma (3,100), también en español.
function fmtPortion(m) {
  const whole = Math.floor(m), half = m - whole >= 0.5;
  if (!whole) return "½";
  return half ? `${whole}½` : String(whole);
}

/* ── Objetivos: meta típica, ajuste sobre el gasto, proteína por kilo y criterios por comida ── */
const MAIN_CATS = ["carnes", "aves", "pescados", "arroces", "sopas", "pastas", "vegetales", "ensaladas", "emparedados", "granos"];
const SLOTS = [
  { key: "desayuno", share: 0.25 },
  { key: "almuerzo", share: 0.35 },
  { key: "merienda", share: 0.10 },
  { key: "cena", share: 0.30 }
];
const PLAN_GOALS = {
  rebajar: {
    typical: 1600, adjust: -0.2, protPerKg: 1.6, maxPortion: 1.5, noFried: true,
    ok: { desayuno: (n) => n.kcal <= 450 && n.p >= 10, main: (n) => n.kcal >= 180 && n.kcal <= 600 && n.p >= 20 && n.s <= 15, merienda: (n) => n.kcal <= 250 && n.s <= 20 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 100 + n.fib * 2 - n.sat * 0.5
  },
  masa: {
    typical: 2700, adjust: 0.12, protPerKg: 2.0, maxPortion: 2.5,
    ok: { desayuno: (n) => n.p >= 15, main: (n) => n.p >= 30 && n.kcal >= 250, merienda: (n) => n.p >= 8 || n.kcal >= 250 },
    score: (n) => n.p + n.kcal / 60
  },
  mantener: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 2,
    ok: { desayuno: (n) => n.kcal >= 180 && n.kcal <= 600, main: (n) => n.kcal >= 280 && n.kcal <= 800 && n.p >= 15 && n.sat <= 12, merienda: (n) => n.kcal <= 320 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 60 + n.fib - Math.abs(n.kcal - 550) / 100 - n.sat * 0.3
  },
  sodio: {
    typical: 2000, adjust: 0, protPerKg: 1.0, maxPortion: 1.5,
    ok: { desayuno: (n) => n.na <= 400, main: (n) => n.na <= 600 && n.p >= 12 && n.kcal >= 200, merienda: (n) => n.na <= 200 },
    score: (n) => -n.na / 80 + n.p / 4 + n.fib
  },
  lowcarb: {
    typical: 1800, adjust: -0.1, protPerKg: 1.6, maxPortion: 1.5,
    ok: { desayuno: (n) => n.c <= 20 && n.p >= 10, main: (n) => n.c <= 25 && n.p >= 18, merienda: (n) => n.c <= 15 },
    score: (n) => n.p - n.c * 0.8 + n.fib
  },
  azucar: {
    typical: 1800, adjust: -0.05, protPerKg: 1.3, maxPortion: 1.5,
    ok: { desayuno: (n) => n.s <= 10, main: (n) => n.s <= 8 && n.p >= 15 && n.kcal >= 200, merienda: (n) => n.s <= 10 },
    score: (n) => -n.s * 1.5 + n.fib * 2 + n.p / 4
  },
  nutritivo: {
    typical: 2000, adjust: 0, protPerKg: 1.3, maxPortion: 2,
    ok: { desayuno: (n) => n.kcal >= 150 && n.sat <= 8, main: (n) => n.p >= 18 && n.fib >= 3 && n.sat <= 10 && n.na <= 1200, merienda: (n) => n.fib >= 2 || n.p >= 8 },
    score: (n) => n.fib * 3 + n.p / 3 - n.sat - n.na / 500 - n.s / 4
  },
  vegetariano: {
    typical: 2000, adjust: 0, protPerKg: 1.1, maxPortion: 2, diet: "veg",
    ok: { desayuno: (n) => n.kcal >= 150, main: (n) => n.kcal >= 250 && n.p >= 10, merienda: (n) => n.kcal <= 400 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 60 + n.fib * 1.5 - n.sat * 0.3
  },
  vegano: {
    typical: 2000, adjust: 0, protPerKg: 1.1, maxPortion: 2, diet: "vegan",
    ok: { desayuno: (n) => n.kcal >= 120, main: (n) => n.kcal >= 220 && n.p >= 8, merienda: (n) => n.kcal <= 400 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 70 + n.fib * 2 - n.sat * 0.3
  }

};

/* ── Épocas: platos típicos por nombre (y categoría) ── */
const SEASONS = {
  navidad: (r, nm) => /coquito|pastel(es|on)? de|pasteles|pernil|lechon|gandul|tembleque|arroz con dulce|ponche|majarete|morcilla|pitorro|turron|guineito|cazuela|mazamorra|flan|budin|bienmesabe|polvo de amor|besito|mantecadito|polvoron|jamon glaseado|ensalada de papa|ensalada de coditos/.test(nm),
  cuaresma: (r, nm) => r.category === "pescados" || /bacalao|serenata|gazpacho|atun|sardina|camaron|pescado|chillo|mero|pulpo|carrucho|juey|habichuela|garbanzo|lenteja|tortilla espanola|majarete|arroz con dulce/.test(nm),
  verano: (r, nm) => ["ensaladas", "jugos"].includes(r.category) || /ceviche|parrilla|carbon|pincho|limber|piragua|helado|frio|fria|coco|mango|parcha|pina|playa|alcapurria|bacalaito|empanadilla|pastelillo|tostones|sandia|yogur|paleta|gazpacho/.test(nm),
  gracias: (r, nm) => /pavo|pavochon|calabaza|batata|mofongo relleno|relleno|arroz con gandules|pie de|flan de calabaza|cranberry|arandano/.test(nm),
  lluvia: (r, nm) => r.category === "sopas" || (r.category === "calientes" && !(typeof TEA_HIGH !== "undefined" && TEA_HIGH.has(r.id))) || /asopao|sancocho|caldo|sopon|guisad|fricase|chocolate caliente|avena|cafe con leche|majarete|mazamorra|crema de/.test(nm)
};
/* Temporada recomendada de cada receta: la que dan las reglas de arriba (puede ser más de una) o
   la que fijó un administrador en #/admin → Recetas (Firestore recipeMeta, js/recipe-admin.js).
   ["todo"] = todo el año (no se adelanta en ninguna época). */
const SEASON_KEYS = ["navidad", "cuaresma", "verano", "gracias", "lluvia"];
const autoSeasonCache = new Map();
function autoSeasonsOf(r) {
  if (!autoSeasonCache.has(r.id)) {
    const nm = planNorm(r.name.es);
    const list = SEASON_KEYS.filter((k) => SEASONS[k](r, nm));
    autoSeasonCache.set(r.id, list.length ? list : ["todo"]);
  }
  return autoSeasonCache.get(r.id);
}
let RECIPE_SEASONS = new Map(); // id → temporadas fijadas por un administrador
const seasonsOf = (r) => RECIPE_SEASONS.get(r.id) || autoSeasonsOf(r);
const inSeasonOf = (r, season) => season !== "todo" && seasonsOf(r).includes(season);
function autoSeason(d = new Date()) {
  const m = d.getMonth() + 1, day = d.getDate();
  if (m === 12 || (m === 1 && day <= 15) || (m === 11 && day >= 25)) return "navidad";
  if (m === 11) return "gracias";
  if (m === 3 || (m === 2 && day >= 10) || (m === 4 && day <= 20)) return "cuaresma";
  if (m >= 6 && m <= 8) return "verano";
  if (m === 9 || m === 10) return "lluvia";
  return "todo";
}
const activeSeason = () => (plan.season === "auto" ? autoSeason() : plan.season);
// Además de las carnes del buscador (S_MEAT_RX): cortes y nombres que allí no están.
const PLAN_MEAT_EXTRA = /\b(bistec|churrasco|entrana|picadillo(?! de lentejas)|carne molida|(?<!de )hamburguesas?(?! vegetarian)|pechuga|muslo|alita|pepperoni|salami|pastrami|almeja|mejillon|langostino|anchoa|caldo de pollo|caldo de res|caldo de pescado|gelatina)/;
const isVegetarian = (r) => { const t = planNorm(r.name.es + " " + r.ingredients.es.join(" ")); return !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(t) && !PLAN_MEAT_EXTRA.test(t); };
const isVegan = (r) => isVegetarian(r) && !getAdvisories(r).allergens.some((a) => a.key === "milk" || a.key === "egg") && !getAdvisories(r).alerts.some((a) => a.key === "honey");
// La dieta del objetivo (vegetariano, vegano) o, si no trae, la de Preferencias
// (normal, vegetariano, vegano) vale para todo el plan.
const activeDiet = () => PLAN_GOALS[plan.goal].diet || (plan.diet !== "normal" ? plan.diet : null);
const dietOk = (r) => {
  const d = activeDiet();
  if (d && !isVegetarian(r)) return false;
  return d !== "vegan" || isVegan(r);
};
/* ── Proteína preferida del plato principal ── */
// Primero por el nombre; si el nombre no dice, por la categoría y los ingredientes.
const PROTEINS = {
  aves: /\b(pollo|pavo|pechugas?|muslos?|alitas?|gallina|codorni|guinea|pato|chicharrones de pollo)/,
  pescado: /\b(pescado|bacalao|bacalaitos?|atun|salmon|chillo|mero|dorado|tilapia|sierra|carite|pargo|sardinas?|arenque|filete de pez|mahi|robalo|cetis?|trucha)/,
  mariscos: /\b(camarones|camaron|langosta|langostinos?|jueyes|juey|cangrejo|pulpo|calamar(es)?|carrucho|almejas?|mejillones|ostiones|mariscos|vieiras)/,
  res: /\b(res|carne de res|bistec|churrasco|entrana|carne molida|picadillo(?! de lentejas)|ternera|rabo|carne mechada|lengua|filete mignon|carne guisada|carne frita|hamburguesas?(?! vegetarian)|albondigas|carne bif|corned|costillas de res|pastelon de carne|roast beef|tasajo|mondongo|picanha|punta trasera)/,
  cerdo: /\b(cerdo|pernil|lechon|chuletas?|costillas?(?! de res)|longaniza|chorizo|jamon|tocino|tocineta|cuchifritos?|gandinga|morcilla|chicharron(?! de pollo)|masitas|patitas|salchichas?|salami|salchichon)/,
  cabro: /\b(cabro|cabrito|chivo|cordero|carnero|conejo)/
};
const protCache = new Map();
function proteinsOf(r) {
  if (protCache.has(r.id)) return protCache.get(r.id);
  const nm = planNorm(r.name.es);
  let found = Object.keys(PROTEINS).filter((k) => PROTEINS[k].test(nm));
  if (!found.length) {
    if (r.category === "aves") found = ["aves"];
    else if (r.category === "pescados") found = ["pescado"];
    else {
      const ing = planNorm(r.ingredients.es.join(" "));
      found = Object.keys(PROTEINS).filter((k) => PROTEINS[k].test(ing));
    }
  }
  if (!found.length && isVegetarian(r)) found = ["granos"];
  protCache.set(r.id, found);
  return found;
}
// La preferencia no aplica con dieta vegetariana o vegana (ya manda la dieta).
const protActive = () => plan.protein.length > 0 && !activeDiet();
const protOk = (r) => !protActive() || proteinsOf(r).some((k) => plan.protein.includes(k));

function badgesOf(n, m = 1) {
  const b = [];
  n = { p: n.p * m, fib: n.fib * m, s: n.s * m, na: n.na * m };
  if (n.p >= 25) b.push("prot");
  if (n.fib >= 5) b.push("fib");
  if (n.s <= 5) b.push("sugar");
  if (n.na <= 600) b.push("sodium");
  return b;
}
const AVOID = {
  gluten: (a) => a.includes("gluten"),
  milk: (a) => a.includes("milk"),
  egg: (a) => a.includes("egg"),
  fish: (a) => a.includes("fish"),
  shellfish: (a) => a.includes("crustacean") || a.includes("mollusc"),
  nuts: (a) => a.includes("peanut") || a.includes("treenut"),
  pork: (a, r) => /\b(cerdo|pernil|lechon|chuleta|tocineta|tocino|jamon|jamonilla|longaniza|chorizo|morcilla|cuerito|chicharron|costilla de cerdo|masitas de cerdo|salchichon)/.test(planNorm(r.ingredients.es.join(" ") + " " + r.name.es))
};
const planNorm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* ── Ajustes guardados ── */
// `saved` = el plan sugerido del período (hoy, o 7 días desde `start`), para verlo igual al volver.
const PLAN_DEFAULTS = { goal: "rebajar", diet: "normal", sex: "", age: "", weight: "", ft: "", inch: "", activity: "1", avoid: [], prefs: [], protein: [], season: "auto", days: 1, seed: 1, ts: 0, saved: null };
const PLAN_DIETS = ["normal", "veg", "vegan"];
// Cada usuario tiene su copia en este navegador (rcb.plan.<uid>); sin sesión, rcb.plan.
let planOwner = "";
const planKey = () => (planOwner ? `${PLAN_STORE}.${planOwner}` : PLAN_STORE);
function readLocalPlan() {
  try { return cleanPlan(JSON.parse(readStore(planKey()) || "{}")); } catch { return cleanPlan(null); } // dañados: de fábrica
}
let plan = readLocalPlan();
// `auto`: el plan del período se armó solo (no es un cambio de la persona) y no cuenta como más reciente.
const savePlan = (auto = false) => {
  if (!auto) plan.ts = Date.now(); // para saber cuál copia es la más reciente (navegador o cuenta)
  writeStore(planKey(), JSON.stringify(plan));
  if (typeof cloudSavePlan === "function") cloudSavePlan(plan);
};
/* Al entrar o salir: usa la copia de ese usuario en este navegador. */
function usePlanOwner(uid) {
  // Primera vez con copias por usuario: hereda la copia anónima de antes (y la deja de fábrica).
  if (uid && !readStore(`${PLAN_STORE}.${uid}`) && readStore(PLAN_STORE)) {
    writeStore(`${PLAN_STORE}.${uid}`, readStore(PLAN_STORE));
    writeStore(PLAN_STORE, JSON.stringify(cleanPlan(null)));
  }
  planOwner = uid || "";
  plan = readLocalPlan();
  if (!$("view-plans").hidden) renderPlansShell();
}
/* Sólo las claves conocidas, con su tipo (para guardar o recibir de la nube). */
function cleanPlan(src) {
  const out = {};
  for (const [k, def] of Object.entries(PLAN_DEFAULTS)) {
    const v = src && src[k];
    if (k === "saved") out[k] = cleanSaved(v);
    else if (Array.isArray(def)) out[k] = Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, 20) : [];
    else if (typeof def === "number") out[k] = Number.isFinite(+v) ? +v : def;
    else out[k] = typeof v === "string" ? v.slice(0, 40) : def;
  }
  // Antes "Vegetariano" era una casilla de preferencias; ahora es la dieta.
  if (src && Array.isArray(src.prefs) && src.prefs.includes("veg") && !(src.diet && src.diet !== "normal")) out.diet = "veg";
  out.prefs = out.prefs.filter((p) => p === "quick");
  if (!PLAN_DIETS.includes(out.diet)) out.diet = "normal";
  if (![1, 7].includes(out.days)) out.days = 1;
  return out;
}
/* Plan guardado: { start: "AAAA-MM-DD", days, seed, sig, meals: [{ items: [{ slot, id, m, sides: [{ id, m }] }] }] }
   (cada día es un objeto: Firestore no admite listas dentro de listas). */
function cleanSaved(v) {
  if (!v || typeof v !== "object" || typeof v.start !== "string" || !Array.isArray(v.meals)) return null;
  const num = (x) => (Number.isFinite(+x) ? +x : 1);
  const str = (x) => String(x || "").slice(0, 120);
  return {
    start: v.start.slice(0, 10), days: num(v.days), seed: num(v.seed), sig: String(v.sig || "").slice(0, 1500),
    meals: v.meals.slice(0, 7).map((day) => ({ items: (day && Array.isArray(day.items) ? day.items.slice(0, 4) : []).map((x) => ({
      slot: str(x && x.slot), id: x && x.id ? str(x.id) : null, m: num(x && x.m),
      sides: Array.isArray(x && x.sides) ? x.sides.slice(0, 4).map((s) => ({ id: str(s && s.id), m: num(s && s.m) })) : []
    })) }))
  };
}
/* Ajustes de la cuenta (al entrar, si son más recientes) o de fábrica. */
function applyPlan(data) {
  plan = cleanPlan(data || PLAN_DEFAULTS);
  writeStore(planKey(), JSON.stringify(plan));
  if (!$("view-plans").hidden) renderPlansShell();
}
let plansScrollY = 0;

/* ── Metas del día ── */
function planTargets() {
  const g = PLAN_GOALS[plan.goal];
  const lb = parseFloat(plan.weight), age = parseFloat(plan.age);
  const inches = (parseFloat(plan.ft) || 0) * 12 + (parseFloat(plan.inch) || 0);
  const custom = plan.sex && lb > 60 && age >= 14 && inches > 48;
  const kg = custom ? lb * 0.4536 : 77;
  let kcal = g.typical;
  if (custom) {
    const cm = inches * 2.54;
    const bmr = 10 * kg + 6.25 * cm - 5 * age + (plan.sex === "male" ? 5 : -161);
    const factor = [1.2, 1.375, 1.55, 1.725][+plan.activity || 0];
    kcal = bmr * factor * (1 + g.adjust);
    const floor = plan.sex === "male" ? 1500 : 1200;
    if (kcal < floor) kcal = floor;
  }
  kcal = Math.round(kcal / 50) * 50;
  const protein = Math.round(kg * g.protPerKg / 5) * 5;
  return { kcal, protein, custom };
}

/* ── Qué recetas sirven para cada comida ── */
const EXCLUDED_CATS = new Set(["cocteles", "salsas", "postres", "bizcochos", "galletitas", "pasteles_dulces", "calientes", "jugos", "panes"]);
function slotOf(r) {
  const nm = planNorm(r.name.es);
  if (/^panqueques/.test(nm)) return "desayuno";
  if (EXCLUDED_CATS.has(r.category)) return null;
  if (/dulce|mermelada|jalea|almibar|pasta de guayaba|cascos|queso blanco casero|queso de hoja|yogur casero/.test(nm)) return null;
  if (["huevos", "cereales"].includes(r.category) || /desayuno|parfait|bowl de yogur|avena|batida de yogur/.test(nm)) return "desayuno";
  if (["frutas"].includes(r.category) || /^yogur|batida|ensalada de frutas/.test(nm)) return "merienda";
  if (r.category === "bebidas") return /batida|champola/.test(nm) ? "merienda" : null;
  if (r.category === "entremeses") return "merienda";
  if (MAIN_CATS.includes(r.category)) return "main";
  return null;
}
/* ── Acompañantes ── */
// Qué tipo de acompañante es una receta (o null si es un plato principal o no aplica).
const SIDE_MEAT_RX = /pollo|pernil|carne|salchich|longaniza|camaron|bacalao|atun|sardina|jueyes|langosta|pulpo|calamar|costillita|chorizo|salami|mollej|alita|guinea|cerdo|res\b|chicharron|picadillo/;
function sideKind(r, n) {
  const nm = planNorm(r.name.es);
  // Los platos fuertes veganos (guisos de granos, tofu, jaca) y el chili o los tacos van de principal.
  if (/\bvegan[oa]s?\b|\bchili\b|^tacos/.test(nm)) return null;
  if (r.category === "granos") return /hummus|crujientes/.test(nm) || SIDE_MEAT_RX.test(nm) ? null : "granos";
  if (r.category === "arroces") return /^(arroz (blanco|integral|con gandules|con maiz|guisado con vegetales|apastelado|con cilantro|verde|con ajo|amarillo|con calabaza|con champinones)|moros)/.test(nm) && !SIDE_MEAT_RX.test(nm) ? "arroz" : null;
  if (r.category === "ensaladas") return n.p < 12 && !SIDE_MEAT_RX.test(nm) ? "ensalada" : null;
  if (r.category === "vegetales") {
    if (/rellen|pastelon|lasana|parmesana/.test(nm) || SIDE_MEAT_RX.test(nm) || n.p >= 15) return null;
    return /tostones|maduro|amarillo|yuca|papa|batata|name|yautia|malanga|pana\b|panapen|vianda|guineo|platano|majado|mofongo|pure|arepa|funche/.test(nm) ? "vianda" : "vegetal";
  }
  return null;
}
// Platos completos: llevan su almidón o su vianda y van sin acompañante.
const isComplete = (r) => ["arroces", "sopas", "pastas", "emparedados"].includes(r.category) ||
  /asopao|paella|sancocho|pastelon|lasana|mofongo|arroz con|wrap|ensalada de|con papas|con viandas|con yuca|con tostones|con (garbanzos|habichuelas|gandules|lentejas|arroz)|jibarito|^tacos/.test(planNorm(r.name.es));
// Por objetivo: qué acompañantes y con qué criterio. Cada grupo de "kinds" es un acompañante.
const SIDE_RULES = {
  rebajar: { kinds: [["ensalada", "vegetal", "granos"]], ok: (n) => n.kcal <= 250 && n.s <= 10, score: (n) => n.fib * 2 + n.p / 3 - n.kcal / 100 },
  masa: { kinds: [["arroz", "vianda"], ["granos"]], ok: (n) => n.kcal >= 100, score: (n) => n.kcal / 50 + n.p / 2 },
  mantener: { kinds: [["arroz", "vianda"], ["granos", "ensalada", "vegetal"]], ok: (n) => n.kcal <= 400, score: (n) => n.fib + n.p / 4 - n.sat / 2 },
  sodio: { kinds: [["arroz", "vianda", "ensalada", "vegetal", "granos"]], ok: (n) => n.na <= 400, score: (n) => -n.na / 80 + n.fib },
  lowcarb: { kinds: [["ensalada", "vegetal"]], ok: (n) => n.c <= 15, score: (n) => -n.c + n.fib * 2 },
  azucar: { kinds: [["granos", "ensalada", "vegetal"]], ok: (n) => n.s <= 6, score: (n) => n.fib * 2 - n.s },
  vegetariano: { kinds: [["arroz", "vianda"], ["granos", "ensalada", "vegetal"]], ok: (n) => n.kcal <= 400, score: (n) => n.p / 2 + n.fib - n.sat / 2 },
  vegano: { kinds: [["arroz", "vianda"], ["granos"]], ok: (n) => n.kcal <= 400, score: (n) => n.p / 2 + n.fib * 1.5 },
  nutritivo: { kinds: [["granos"], ["ensalada", "vegetal"]], ok: (n) => n.fib >= 2 || n.p >= 5, score: (n) => n.fib * 3 + n.p / 3 - n.na / 500 }
};
function planInfo(r) {
  const e = estimateNutrition(r);
  const a = getAdvisories(r);
  return { n: e.per, frying: e.frying, allergens: a.allergens.map((x) => x.key), alcohol: a.alerts.some((x) => x.key === "alcoholDrink") };
}
function candidates() {
  const g = PLAN_GOALS[plan.goal];
  const pools = { desayuno: [], main: [], merienda: [], side: [] };
  const loose = { desayuno: [], main: [], merienda: [], side: [] }; // respetan exclusiones aunque no el objetivo
  const sr = SIDE_RULES[plan.goal];
  const season = activeSeason();
  const offProt = []; // platos principales de otra proteína: sólo si faltan opciones
  for (const r of recipes) {
    const slot = slotOf(r);
    if (!slot) continue;
    const info = planInfo(r);
    if (info.alcohol) continue;
    if (g.noFried && info.frying) continue;
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (!dietOk(r)) continue;
    if (plan.prefs.includes("quick") && !isQuick(r)) continue;
    // Acompañantes (arroz, granos, viandas, vegetales y ensaladas ligeras): no son plato principal.
    const kind = slot === "main" ? sideKind(r, info.n) : null;
    if (kind) {
      const entry = { r, n: info.n, kind, score: sr.score(info.n) };
      (sr.ok(info.n) ? pools.side : loose.side).push(entry);
      continue;
    }
    let s = slot;
    if (s === "main" && info.n.kcal < 180 && ["ensaladas", "vegetales"].includes(r.category)) s = "merienda";
    if (s === "main" && !protOk(r)) { offProt.push({ r, n: info.n, loose: true, score: g.score(info.n) - 500 }); continue; }
    const inSeason0 = inSeasonOf(r, season);
    if (!g.ok[s](info.n)) { loose[s].push({ r, n: info.n, inSeason: inSeason0, loose: true, score: g.score(info.n) + (inSeason0 ? 1000 : 0) }); continue; }
    const inSeason = inSeasonOf(r, season);
    // Las de la época van primero (sin dejar de cumplir el objetivo).
    pools[s].push({ r, n: info.n, inSeason, score: g.score(info.n) + (inSeason ? 1000 : 0) });
  }
  // Si las exclusiones dejan una comida sin opciones, se usan las que más se acercan al objetivo.
  let relaxed = false;
  pools.side.sort((x, y) => y.score - x.score);
  // Acompañantes: si a un tipo que pide el objetivo no le queda ninguno, se usan los que más se acercan.
  for (const group of sr.kinds) {
    if (!pools.side.some((x) => group.includes(x.kind))) {
      const extra = loose.side.filter((x) => group.includes(x.kind));
      if (extra.length) { pools.side = pools.side.concat(extra); relaxed = true; }
    }
  }
  for (const k of ["desayuno", "main", "merienda"]) {
    const min = k === "main" ? 6 : 3; // variedad mínima para no repetir todo el plan
    if (pools[k].length < min && loose[k].length) { pools[k] = pools[k].concat(loose[k]); relaxed = true; }
    if (k === "main" && pools.main.length < 3 && offProt.length) { pools.main = pools.main.concat(offProt); relaxed = true; }
    pools[k].sort((x, y) => y.score - x.score);
  }
  pools.relaxed = relaxed;
  return pools;
}

/* ── Armar el plan ── */
function rng(seed) { let s = seed % 2147483647 || 1; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
function pickFrom(list, used, rand, avoidCat) {
  const top = list.slice(0, Math.max(12, Math.ceil(list.length * 0.4)));
  let options = top.filter((x) => !used.has(x.r.id) && x.r.category !== avoidCat);
  if (!options.length) options = top.filter((x) => !used.has(x.r.id));
  if (!options.length) options = top;
  if (!options.length) return null;
  return options[Math.floor(rand() * options.length)];
}
function portionFor(item, slotKcal, max) {
  if (!item || item.n.kcal <= 0) return 1;
  const m = Math.round((slotKcal / item.n.kcal) * 2) / 2;
  return Math.min(max, Math.max(0.5, m));
}
/* ── Período del plan: cambia solo cada día (1 día) o cada 7 días (7 días) ── */
const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const parseDay = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parseDay(s); d.setDate(d.getDate() + n); return isoDay(d); };
function periodStart() {
  const today = isoDay(new Date());
  const sv = plan.saved;
  // Un plan de 7 días sigue hasta su séptimo día; después empieza otro desde hoy.
  if (sv && sv.days === plan.days && plan.days === 7 && sv.start <= today && today < addDays(sv.start, 7)) return sv.start;
  return today;
}
function hashStr(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); }
// Ajustes que cambian las recetas o las porciones: si cambian, se arma otro plan.
const planSig = (target) => JSON.stringify([plan.goal, plan.diet, plan.prefs, plan.protein, plan.avoid, activeSeason(), target.kcal, target.protein]);
function hydrateSaved(sv) {
  const byId = (id) => recipes.find((r) => r.id === id);
  const item = (id) => { const r = byId(id); return r ? { r, n: planInfo(r).n } : undefined; };
  if (sv.meals.length !== sv.days || sv.meals.some((d) => !d.items.length)) return null; // incompleto o de otro formato
  const days = [];
  for (const day of sv.meals) {
    const meals = [];
    for (const x of day.items) {
      const it = x.id ? item(x.id) : null;
      if (it === undefined) return null; // una receta ya no existe: se arma otro
      const sides = [];
      for (const s of x.sides) { const si = item(s.id); if (!si) return null; sides.push({ item: si, m: s.m }); }
      meals.push({ slot: x.slot, item: it, m: x.m, sides });
    }
    days.push(meals);
  }
  return days;
}
/* El plan del período: el guardado si sigue valiendo; si no, uno nuevo al azar que se guarda. */
function periodPlan(pools, target) {
  const start = periodStart();
  const sig = planSig(target);
  const sv = plan.saved;
  if (sv && sv.start === start && sv.days === plan.days && sv.seed === plan.seed && sv.sig === sig) {
    const days = hydrateSaved(sv);
    if (days) return { start, days };
  }
  const days = buildPlan(pools, target, hashStr(start) + plan.seed * 7919 + Object.keys(PLAN_GOALS).indexOf(plan.goal) * 131);
  plan.saved = {
    start, days: plan.days, seed: plan.seed, sig,
    meals: days.map((meals) => ({ items: meals.map((x) => ({
      slot: x.slot, id: x.item ? x.item.r.id : null, m: x.m || 1,
      sides: (x.sides || []).map((s) => ({ id: s.item.r.id, m: s.m }))
    })) }))
  };
  savePlan(true);
  return { start, days };
}
function dayName(iso, opts) {
  const s = parseDay(iso).toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", opts);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildPlan(pools, target, seed) {
  const g = PLAN_GOALS[plan.goal];
  const rand = rng(seed);
  const usedWeek = new Set();
  const days = [];
  for (let d = 0; d < plan.days; d++) {
    const usedDay = new Set(usedWeek);
    const meals = [];
    let lastMainCat = null;
    for (const slot of SLOTS) {
      const pool = slot.key === "desayuno" ? pools.desayuno : slot.key === "merienda" ? pools.merienda : pools.main;
      const item = pickFrom(pool, usedDay, rand, slot.key === "cena" ? lastMainCat : null);
      if (!item) { meals.push({ slot: slot.key, item: null }); continue; }
      usedDay.add(item.r.id);
      if (["almuerzo", "cena"].includes(slot.key)) { usedWeek.add(item.r.id); lastMainCat = item.r.category; }
      const slotKcal = target.kcal * slot.share;
      if (slot.key === "merienda") { meals.push({ slot: slot.key, item, m: Math.min(1.5, portionFor(item, slotKcal, 1.5)) }); continue; }
      // Almuerzo y cena: principal + acompañantes (menos los platos completos y el desayuno).
      const sides = [];
      if (["almuerzo", "cena"].includes(slot.key) && !isComplete(item.r)) {
        for (const group of SIDE_RULES[plan.goal].kinds) {
          const options = pools.side.filter((x) => group.includes(x.kind));
          const side = pickFrom(options, usedDay, rand, null);
          if (side) { usedDay.add(side.r.id); sides.push({ item: side }); }
        }
      }
      const mainShare = sides.length ? 0.55 : 1;
      const m = portionFor(item, slotKcal * mainShare, g.maxPortion);
      for (const sd of sides) sd.m = Math.min(1.5, portionFor(sd.item, (slotKcal * (1 - mainShare)) / sides.length, 1.5));
      meals.push({ slot: slot.key, item, m, sides });
    }
    days.push(meals);
  }
  return days;
}

/* ── Cambiar una comida o un acompañante por otro sugerido ──
   "Cambiar" abre, debajo de esa comida, la lista de las otras recetas que el plan habría podido
   escoger (mismos candidatos: objetivo, dieta, proteína, época y lo que se evita), sin las que ya
   están ese día. Al escoger una se recalcula la porción y se guarda en `plan.saved`, así que el
   cambio se queda (y sube a la cuenta) hasta que toque otro plan o se cambien los ajustes. */
let planPools = null;   // candidatos del último render
let planDays = null;    // días del plan que se ve
let planSwap = null;    // { key: "día-comida" o "día-comida-acompañante", limit }
const SWAP_PAGE = 8;

function swapRef(key) {
  const [d, j, s] = key.split("-").map(Number);
  const meal = planDays && planDays[d] && planDays[d][j];
  if (!meal || !meal.item) return null;
  if (!Number.isNaN(s) && s !== undefined && !(meal.sides && meal.sides[s])) return null;
  return { d, j, s: Number.isNaN(s) || s === undefined ? null : s, meal };
}
function dayIds(meals) {
  const ids = new Set();
  for (const x of meals) { if (x.item) ids.add(x.item.r.id); for (const sd of x.sides || []) ids.add(sd.item.r.id); }
  return ids;
}
function swapOptions(ref) {
  const used = dayIds(planDays[ref.d]);
  if (ref.s !== null) {
    const cur = ref.meal.sides[ref.s].item;
    const kinds = SIDE_RULES[plan.goal].kinds;
    const kind = cur.kind || sideKind(cur.r, cur.n);
    const group = kinds.find((g) => g.includes(kind)) || kinds.flat();
    return planPools.side.filter((x) => group.includes(x.kind) && !used.has(x.r.id));
  }
  const pool = ref.meal.slot === "desayuno" ? planPools.desayuno : ref.meal.slot === "merienda" ? planPools.merienda : planPools.main;
  return pool.filter((x) => !used.has(x.r.id));
}
function applySwap(ref, id) {
  const sv = plan.saved;
  const opt = swapOptions(ref).find((x) => x.r.id === id);
  if (!sv || !sv.meals[ref.d] || !opt) return null;
  const meal = ref.meal;
  const g = PLAN_GOALS[plan.goal];
  const slotKcal = planTargets().kcal * SLOTS.find((x) => x.key === meal.slot).share;
  if (ref.s !== null) meal.sides[ref.s] = { item: opt, m: 1 };
  else {
    meal.item = opt;
    if (["almuerzo", "cena"].includes(meal.slot)) {
      // Un plato completo va sin acompañantes; uno que no lo es y no tenía, los recibe como en el plan.
      if (isComplete(opt.r)) meal.sides = [];
      else if (!(meal.sides || []).length) {
        const used = dayIds(planDays[ref.d]);
        meal.sides = [];
        for (const group of SIDE_RULES[plan.goal].kinds) {
          const side = planPools.side.find((x) => group.includes(x.kind) && !used.has(x.r.id));
          if (side) { used.add(side.r.id); meal.sides.push({ item: side, m: 1 }); }
        }
      }
    }
  }
  // Porciones como en buildPlan().
  const sides = meal.sides || [];
  if (meal.slot === "merienda") meal.m = Math.min(1.5, portionFor(meal.item, slotKcal, 1.5));
  else {
    const share = sides.length ? 0.55 : 1;
    meal.m = portionFor(meal.item, slotKcal * share, g.maxPortion);
    for (const sd of sides) sd.m = Math.min(1.5, portionFor(sd.item, (slotKcal * (1 - share)) / sides.length, 1.5));
  }
  sv.meals[ref.d].items[ref.j] = { slot: meal.slot, id: meal.item.r.id, m: meal.m, sides: sides.map((sd) => ({ id: sd.item.r.id, m: sd.m })) };
  savePlan(); // es un cambio de la persona: cuenta como el más reciente y sube a la cuenta
  return opt.r;
}
function swapButtonHTML(key, name) {
  const tr = pt();
  const open = planSwap && planSwap.key === key;
  return `<button type="button" class="plan-swap-btn" data-swap="${key}" aria-expanded="${open}" aria-controls="swap-${key}" aria-label="${esc(tr.swapLabel(name))}">
    <svg class="icon" aria-hidden="true"><use href="#i-swap"/></svg><span>${esc(tr.swap)}</span></button>`;
}
function swapPanelHTML(key) {
  const tr = pt();
  const ref = swapRef(key);
  if (!ref) return "";
  const opts = swapOptions(ref);
  const title = ref.s !== null ? tr.swapSideTitle : tr.swapTitle(tr.slots[ref.meal.slot]);
  return `<div class="plan-swap-panel" id="swap-${key}" role="region" aria-label="${esc(title)}">
    <div class="plan-swap-head"><strong>${esc(title)}</strong>
      <button type="button" class="btn btn-ghost btn-sm" data-swap-close>${esc(tr.swapClose)}</button></div>
    <p class="plans-help">${esc(tr.swapHelp)}</p>
    ${opts.length ? `<ul class="plan-swap-list">${opts.slice(0, planSwap.limit).map((x) => `
      <li>
        <button type="button" class="plan-swap-opt" data-swap-pick="${esc(x.r.id)}">
          <span class="plan-swap-thumb" aria-hidden="true">${coverHTML(x.r.category, x.r)}</span>
          <span class="plan-swap-body">
            <span class="plan-swap-name">${esc(x.r.name[currentLang])}</span>
            <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot} · ${esc(tr.perPortion)}</span>
            ${badgesHTML(x.n)}
          </span>
        </button>
        <a class="plan-swap-view" href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(tr.swapView)}</a>
      </li>`).join("")}</ul>` : `<p class="plans-warn">${esc(tr.swapNone)}</p>`}
    ${opts.length > planSwap.limit ? `<button type="button" class="btn btn-outline btn-sm plan-swap-more" data-swap-more>${esc(tr.swapMore)} (${opts.length - planSwap.limit})</button>` : ""}
  </div>`;
}

/* ── Vista ── */
function goalButtonsHTML() {
  const tr = pt();
  const icons = { rebajar: "🥗", masa: "💪", mantener: "⚖️", sodio: "🧂", lowcarb: "🥩", azucar: "🍬", nutritivo: "🥦", vegetariano: "🥕", vegano: "🌱" };
  return Object.keys(PLAN_GOALS).map((k) => `
    <button type="button" class="goal-card" role="radio" aria-checked="${plan.goal === k}" data-goal="${k}">
      <span class="goal-icon" aria-hidden="true">${icons[k]}</span>
      <span class="goal-name">${esc(tr.goals[k][0])}</span>
      <span class="goal-desc">${esc(tr.goals[k][1])}</span>
    </button>`).join("");
}
function renderPlansShell() {
  const tr = pt();
  const v = $("view-plans");
  v.innerHTML = `
  <div class="container plans-wrap">
    <header class="plans-head">
      <h1 class="section-title" id="plans-title" tabindex="-1">${esc(tr.title)}</h1>
      <p class="section-sub">${esc(tr.intro)}</p>
    </header>
    <div class="goal-grid" role="radiogroup" aria-label="${esc(tr.goalLabel)}">${goalButtonsHTML()}</div>
    <div class="plans-controls">
      <details class="plans-me" ${plan.sex ? "open" : ""}>
        <summary>${esc(tr.meTitle)}</summary>
        <p class="plans-help">${esc(tr.meHelp)}</p>
        <div class="plans-form">
          <label>${esc(tr.sex)}
            <select data-field="sex"><option value="">—</option><option value="female">${esc(tr.female)}</option><option value="male">${esc(tr.male)}</option></select></label>
          <label>${esc(tr.age)}<input type="number" inputmode="numeric" min="14" max="100" data-field="age"></label>
          <label>${esc(tr.weight)}<input type="number" inputmode="decimal" min="70" max="600" data-field="weight"></label>
          <fieldset class="plans-height"><legend>${esc(tr.height)}</legend>
            <label><input type="number" inputmode="numeric" min="3" max="8" data-field="ft"> ${esc(tr.feet)}</label>
            <label><input type="number" inputmode="numeric" min="0" max="11" data-field="inch"> ${esc(tr.inches)}</label>
          </fieldset>
          <label class="plans-activity">${esc(tr.activity)}
            <select data-field="activity">${tr.activities.map((a, i) => `<option value="${i}">${esc(a)}</option>`).join("")}</select></label>
        </div>
      </details>
      <div class="plans-side">
        <label class="plans-season-pick">${esc(tr.seasonLabel)}
          <select data-season>${Object.keys(tr.seasons).map((k) => `<option value="${k}" ${plan.season === k ? "selected" : ""}>${esc(k === "auto" ? `${tr.seasons.auto} (${tr.seasons[autoSeason()]})` : tr.seasons[k])}</option>`).join("")}</select>
        </label>
        <fieldset class="plans-avoid"><legend>${esc(tr.prefsLabel)}</legend>
          <p class="plans-help">${esc(tr.dietHelp)}</p>
          ${PLAN_DIETS.map((k) => `<label class="chip-check chip-pref chip-radio"><input type="radio" name="plan-diet" data-diet="${k}" ${plan.diet === k ? "checked" : ""}><span>${esc(tr.diets[k])}</span></label>`).join("")}
          ${Object.keys(tr.prefs).map((k) => `<label class="chip-check chip-pref"><input type="checkbox" data-pref="${k}" ${plan.prefs.includes(k) ? "checked" : ""}><span>${esc(tr.prefs[k])}</span></label>`).join("")}
        </fieldset>
        <fieldset class="plans-avoid"><legend>${esc(tr.protLabel)}</legend>
          <p class="plans-help">${esc(tr.protHelp)}</p>
          ${Object.keys(tr.protOpts).map((k) => `<label class="chip-check chip-pref"><input type="checkbox" data-prot="${k}" ${plan.protein.includes(k) ? "checked" : ""}><span>${esc(tr.protOpts[k])}</span></label>`).join("")}
        </fieldset>
        <fieldset class="plans-avoid"><legend>${esc(tr.avoid)}</legend>
          ${Object.keys(AVOID).map((k) => `<label class="chip-check"><input type="checkbox" data-avoid="${k}" ${plan.avoid.includes(k) ? "checked" : ""}><span>${esc(tr.avoidOpts[k])}</span></label>`).join("")}
        </fieldset>
      </div>
    </div>
    <div class="plans-target" id="plans-target" aria-live="polite"></div>
    <div class="plans-actions">
      <div class="seg" role="group">
        <button type="button" class="btn btn-outline" data-days="1" aria-pressed="${plan.days === 1}">${esc(tr.oneDay)}</button>
        <button type="button" class="btn btn-outline" data-days="7" aria-pressed="${plan.days === 7}">${esc(tr.sevenDays)}</button>
      </div>
      <button type="button" class="btn btn-primary" id="plans-another">${esc(tr.another)}</button>
    </div>
    <div id="plans-output"></div>
    <div id="plans-season"></div>
    <section class="plans-more" aria-labelledby="plans-more-title">
      <h2 class="plans-more-title" id="plans-more-title">${esc(tr.moreTitle)}</h2>
      <p class="plans-help">${esc(tr.moreSub)}</p>
      <div id="plans-more"></div>
    </section>
    <p class="plans-disclaimer" role="note">${esc(tr.disclaimer)}</p>
  </div>`;
  for (const el of v.querySelectorAll("[data-field]")) el.value = plan[el.dataset.field] ?? "";
  renderPlanOutput();
}
function nutriLine(n, m = 1) {
  const tr = pt();
  return `<span>${Math.round(n.kcal * m)} ${tr.kcal}</span><span>${Math.round(n.p * m)} g ${tr.prot}</span><span>${Math.round(n.c * m)} g ${tr.carbs}</span><span>${Math.round(n.na * m)} mg ${tr.sodium}</span>`;
}
function mealHTML(meal, d, j) {
  const tr = pt();
  if (!meal.item) return `<li class="plan-meal plan-meal-empty"><span class="plan-slot">${esc(tr.slots[meal.slot])}</span><span>—</span></li>`;
  const r = meal.item.r;
  const key = `${d}-${j}`;
  const openKey = planSwap && planSwap.key;
  return `<li class="plan-meal">
    <span class="plan-slot">${esc(tr.slots[meal.slot])}</span>
    <a class="plan-thumb" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}" tabindex="-1" aria-hidden="true">${coverHTML(r.category, r)}</a>
    <span class="plan-meal-body">
      <span class="plan-meal-top">
        <a class="plan-meal-name" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(r.name[currentLang])}</a>
        ${swapButtonHTML(key, r.name[currentLang])}
      </span>
      <span class="plan-portion">${esc(tr.portions(meal.m))}</span>
      <span class="plan-nutri">${nutriLine(meal.item.n, meal.m)}</span>
      ${badgesHTML(meal.item.n, meal.m)}
      ${(meal.sides || []).length ? `<ul class="plan-sides">${meal.sides.map((sd, s) => `
        <li><span class="plan-side-plus" aria-hidden="true">+</span>
          <span class="plan-side-main">
            <a href="#/receta/${encodeURIComponent(sd.item.r.id)}" data-open="${esc(sd.item.r.id)}">${esc(sd.item.r.name[currentLang])}</a>
            <span class="plan-side-n">${esc(tr.portions(sd.m))} · ${Math.round(sd.item.n.kcal * sd.m)} ${tr.kcal} · ${Math.round(sd.item.n.p * sd.m)} g ${tr.prot}</span>
          </span>
          ${swapButtonHTML(`${key}-${s}`, sd.item.r.name[currentLang])}</li>`).join("")}</ul>` : ""}
    </span>
    ${openKey === key || (openKey || "").startsWith(`${key}-`) ? swapPanelHTML(openKey) : ""}
  </li>`;
}
function dayHTML(meals, i, target, iso) {
  const tr = pt();
  const tot = { kcal: 0, p: 0, c: 0, na: 0, fib: 0, s: 0 };
  for (const x of meals) {
    if (!x.item) continue;
    for (const k in tot) tot[k] += x.item.n[k] * x.m;
    for (const sd of x.sides || []) for (const k in tot) tot[k] += sd.item.n[k] * sd.m;
  }
  const pctK = Math.min(130, Math.round((tot.kcal / target.kcal) * 100));
  const pctP = Math.min(130, Math.round((tot.p / target.protein) * 100));
  return `<article class="plan-day">
    ${plan.days > 1 ? `<h3 class="plan-day-title">${esc(iso ? dayName(iso, { weekday: "long", day: "numeric", month: "short" }) : tr.day(i + 1))}</h3>` : ""}
    <ol class="plan-meals">${meals.map((m, j) => mealHTML(m, i, j)).join("")}</ol>
    <div class="plan-total">
      <span class="plan-total-label">${esc(tr.total)}</span>
      <span class="plan-bar"><span class="plan-bar-fill" style="width:${Math.min(100, pctK)}%"></span></span>
      <span class="plan-total-val">${Math.round(tot.kcal).toLocaleString("en-US")} / ${target.kcal.toLocaleString("en-US")} ${tr.kcal}</span>
      <span class="plan-bar plan-bar-p"><span class="plan-bar-fill" style="width:${Math.min(100, pctP)}%"></span></span>
      <span class="plan-total-val">${Math.round(tot.p)} / ${target.protein} g ${tr.prot}</span>
      <span class="plan-total-extra">${Math.round(tot.c)} g ${tr.carbs} · ${Math.round(tot.fib)} g ${tr.fiber} · ${Math.round(tot.s)} g ${tr.sugarW} · ${Math.round(tot.na).toLocaleString("en-US")} mg ${tr.sodium}</span>
    </div>
  </article>`;
}
function seasonList() {
  const season = activeSeason();
  if (season === "todo") return [];
  const g = PLAN_GOALS[plan.goal];
  const out = [];
  for (const r of recipes) {
    if (!inSeasonOf(r, season)) continue;
    if (["salsas"].includes(r.category)) continue;
    const info = planInfo(r);
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (!dietOk(r)) continue;
    if (plan.prefs.includes("quick") && !isQuick(r)) continue;
    out.push({ r, n: info.n, alcohol: info.alcohol, score: g.score(info.n) });
  }
  return out.sort((a, b) => b.score - a.score);
}
function badgesHTML(n, m = 1) {
  const tr = pt();
  const b = badgesOf(n, m);
  return b.length ? `<span class="plan-badges">${b.map((k) => `<span class="plan-badge plan-badge-${k}">${esc(tr.badges[k])}</span>`).join("")}</span>` : "";
}
function moreHTML(pools) {
  const tr = pt();
  const groups = [["desayuno", pools.desayuno], ["almuerzo", pools.main], ["acomp", pools.side], ["merienda", pools.merienda]];
  return groups.map(([k, list]) => `
    <div class="plans-more-group">
      <h3 class="plans-more-slot">${esc(k === "almuerzo" ? `${tr.slots.almuerzo} / ${tr.slots.cena}` : k === "acomp" ? tr.sidesTitle : tr.slots[k])} <span class="plans-count">${list.length}</span></h3>
      <ul class="plans-more-list">${list.slice(0, 12).map((x) => `
        <li><a href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(x.r.name[currentLang])}</a>
        <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot} · ${esc(tr.perPortion)}</span>${badgesHTML(x.n)}</li>`).join("")}
      </ul>
    </div>`).join("");
}
function seasonHTML() {
  const tr = pt();
  const season = activeSeason();
  if (season === "todo") return "";
  const list = seasonList();
  return `<section class="plans-season" aria-labelledby="plans-season-title">
    <h2 class="plans-more-title" id="plans-season-title">${esc(tr.seasonTitle(tr.seasons[season]))} <span class="plans-count">${list.length}</span></h2>
    <p class="plans-help">${esc(tr.seasonSub)}</p>
    <ul class="plans-season-list">${list.slice(0, 24).map((x) => `
      <li><a href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(x.r.name[currentLang])}</a>
      <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot}</span></li>`).join("")}
    </ul>
  </section>`;
}
function planPeriodHTML(pools, target) {
  const tr = pt();
  const { start, days } = periodPlan(pools, target);
  planDays = days;
  const long ={ weekday: "long", day: "numeric", month: "long" };
  const period = plan.days === 1
    ? tr.periodDay(dayName(start, long).toLowerCase())
    : tr.periodWeek(dayName(start, { day: "numeric", month: "long" }), dayName(addDays(start, 6), { day: "numeric", month: "long" }), dayName(addDays(start, 7), long).toLowerCase());
  return (pools.relaxed ? `<p class="plans-warn">${esc(tr.relaxed)}</p>` : "") +
    `<p class="plans-period">${esc(period)} <span class="plans-saved">${esc(tr.savedNote)}</span></p>` +
    `<div class="plan-days${plan.days > 1 ? " week" : ""}">${days.map((d, i) => dayHTML(d, i, target, addDays(start, i))).join("")}</div>`;
}
function renderPlanOutput(keepSwap = false) {
  const tr = pt();
  if (!keepSwap) planSwap = null; // otro objetivo, otros ajustes u otro plan: se cierra la lista
  const target = planTargets();
  const floorHit = target.custom && target.kcal <= (plan.sex === "male" ? 1500 : 1200);
  $("plans-target").innerHTML = `<p>${tr.targets(target.kcal, target.protein, target.custom)}</p>` +
    (floorHit ? `<p class="plans-warn">${esc(tr.minWarn)}</p>` : "") +
    `<p class="plans-note">${esc(tr.goalNotes[plan.goal])}</p>`;
  const pools = candidates();
  planPools = pools;
  const enough = pools.desayuno.length && pools.main.length >= 2 && pools.merienda.length;
  $("plans-output").innerHTML = enough
    ? planPeriodHTML(pools, target)
    : `<p class="plans-warn">${esc(tr.noMatch)}</p>`;
  $("plans-more").innerHTML = moreHTML(pools);
  $("plans-season").innerHTML = seasonHTML();
}

function showPlans() {
  const fromRecipe = !$("view-recipe").hidden;
  current = null;
  $("view-home").hidden = true;
  $("view-recipe").hidden = true;
  $("view-admin").hidden = true;
  $("view-plans").hidden = false;
  document.title = `${pt().title} — ${BRAND}`;
  renderPlansShell();
  if (fromRecipe) jumpTo(plansScrollY);
  else { jumpTo(0); $("plans-title").focus({ preventScroll: true }); }
}

function setupPlans() {
  const v = $("view-plans");
  v.addEventListener("click", (e) => {
    const goal = e.target.closest("[data-goal]");
    if (goal) {
      plan.goal = goal.dataset.goal; savePlan();
      v.querySelectorAll("[data-goal]").forEach((b) => b.setAttribute("aria-checked", String(b === goal)));
      renderPlanOutput(); return;
    }
    const days = e.target.closest("[data-days]");
    if (days) {
      plan.days = +days.dataset.days; savePlan();
      v.querySelectorAll("[data-days]").forEach((b) => b.setAttribute("aria-pressed", String(b === days)));
      renderPlanOutput(); return;
    }
    if (e.target.closest("#plans-another")) { plan.seed = (plan.seed % 9973) + 1; savePlan(); renderPlanOutput(); return; }
    // Cambiar una comida: abrir o cerrar su lista, ver más, o escoger una.
    const swapBtn = e.target.closest("[data-swap]");
    if (swapBtn) {
      const key = swapBtn.dataset.swap;
      planSwap = planSwap && planSwap.key === key ? null : { key, limit: SWAP_PAGE };
      renderPlanOutput(true);
      const first = planSwap && v.querySelector(`#swap-${key} [data-swap-pick]`);
      (first || v.querySelector(`[data-swap="${key}"]`)).focus({ preventScroll: true });
      return;
    }
    if (e.target.closest("[data-swap-close]") && planSwap) {
      const key = planSwap.key;
      planSwap = null; renderPlanOutput(true);
      const b = v.querySelector(`[data-swap="${key}"]`); if (b) b.focus({ preventScroll: true });
      return;
    }
    if (e.target.closest("[data-swap-more]") && planSwap) {
      const shown = planSwap.limit;
      planSwap.limit += SWAP_PAGE; renderPlanOutput(true);
      const next = v.querySelectorAll(`#swap-${planSwap.key} [data-swap-pick]`)[shown];
      if (next) next.focus({ preventScroll: true });
      return;
    }
    const pick = e.target.closest("[data-swap-pick]");
    if (pick && planSwap) {
      const key = planSwap.key;
      const ref = swapRef(key);
      const r = ref && applySwap(ref, pick.dataset.swapPick);
      planSwap = null; renderPlanOutput(true);
      const b = v.querySelector(`[data-swap="${key}"]`); if (b) b.focus({ preventScroll: true });
      if (r) toast(pt().swapDone(r.name[currentLang]), true);
      return;
    }
    if (e.target.closest("[data-open]")) plansScrollY = window.scrollY;
  });
  v.addEventListener("input", (e) => {
    const f = e.target.dataset.field;
    if (f) { plan[f] = e.target.value; savePlan(); renderPlanOutput(); }
  });
  v.addEventListener("change", (e) => {
    if (e.target.matches("[data-season]")) { plan.season = e.target.value; savePlan(); renderPlanOutput(); return; }
    const k = e.target.dataset.avoid, p = e.target.dataset.pref, pr = e.target.dataset.prot, dt = e.target.dataset.diet;
    if (dt) plan.diet = dt;
    else if (k) plan.avoid = e.target.checked ? [...new Set([...plan.avoid, k])] : plan.avoid.filter((x) => x !== k);
    else if (pr) plan.protein = e.target.checked ? [...new Set([...plan.protein, pr])] : plan.protein.filter((x) => x !== pr);
    else if (p) plan.prefs = e.target.checked ? [...new Set([...plan.prefs, p])] : plan.prefs.filter((x) => x !== p);
    else return;
    savePlan(); renderPlanOutput();
  });
  // Flechas entre objetivos, como un grupo de opciones.
  v.addEventListener("keydown", (e) => {
    const cur = e.target.closest("[data-goal]");
    if (!cur || !["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
    e.preventDefault();
    const all = [...v.querySelectorAll("[data-goal]")];
    const i = all.indexOf(cur), n = all.length;
    const next = all[(i + (["ArrowRight", "ArrowDown"].includes(e.key) ? 1 : n - 1)) % n];
    next.focus(); next.click();
  });
}
