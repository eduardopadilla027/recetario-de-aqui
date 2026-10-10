/* Recetarios de Aquí · Planes de comida (#/planes).
 *
 * Consulta las recetas del recetario según un objetivo (rebajar, ganar masa
 * muscular, mantener, bajo en sodio, bajo en carbohidratos, bajo en azúcar, más
 * nutritivo), la época del año (Navidad, Cuaresma, verano, Acción de Gracias,
 * días de lluvia) y preferencias (vegetariano, rápidas), y arma un plan de
 * 1 o 7 días con desayuno, almuerzo, merienda y cena. Usa la nutrición
 * ESTIMADA de cada receta (js/nutrition.js) y los alérgenos de
 * js/advisories.js. Si la persona pone sus datos, calcula las calorías del día
 * con Mifflin-St Jeor; si no, usa una meta típica del objetivo. Es orientación
 * general, no consejo médico: la vista lo dice siempre.
 *
 * Depende de globales de app.js (t, currentLang, $, esc, coverHTML,
 * readStore, writeStore). Los ajustes se guardan sólo en este navegador. */

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
      nutritivo: ["Más nutritivo", "Más fibra, proteína y vegetales; menos grasa saturada y sodio."]
    },
    seasonLabel: "Época",
    seasons: { auto: "Según la fecha de hoy", todo: "Todo el año", navidad: "Navidad", cuaresma: "Cuaresma y Semana Santa", verano: "Verano y playa", gracias: "Acción de Gracias", lluvia: "Días de lluvia" },
    seasonNow: (name) => `Hoy: ${name}`,
    prefsLabel: "Preferencias",
    prefs: { veg: "Vegetariano", quick: "Sólo rápidas (30 min o menos)" },
    seasonTitle: (name) => `De temporada: ${name}`,
    seasonSub: "Las recetas típicas de la época, incluidos postres y bebidas. En el plan salen primero las que cumplen su objetivo.",
    badges: { prot: "Alta en proteína", fib: "Alta en fibra", sugar: "Baja en azúcar", sodium: "Sodio moderado" },
    fiber: "fibra", sugarW: "azúcar",
    meTitle: "Mis datos (opcional)",
    meHelp: "Con sus datos se calcula la meta de calorías y proteína del día. Se guardan sólo en este navegador.",
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
      nutritivo: "Un plato nutritivo tiene la mitad de vegetales, un cuarto de proteína y un cuarto de vianda, arroz o grano."
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
      nutritivo: ["Most nutritious", "More fiber, protein and vegetables; less saturated fat and sodium."]
    },
    seasonLabel: "Season",
    seasons: { auto: "Based on today's date", todo: "All year", navidad: "Christmas", cuaresma: "Lent and Holy Week", verano: "Summer and beach", gracias: "Thanksgiving", lluvia: "Rainy days" },
    seasonNow: (name) => `Today: ${name}`,
    prefsLabel: "Preferences",
    prefs: { veg: "Vegetarian", quick: "Quick only (30 min or less)" },
    seasonTitle: (name) => `In season: ${name}`,
    seasonSub: "The typical recipes of the season, including desserts and drinks. In the plan, the ones that fit your goal come first.",
    badges: { prot: "High protein", fib: "High fiber", sugar: "Low sugar", sodium: "Moderate sodium" },
    fiber: "fiber", sugarW: "sugar",
    meTitle: "My details (optional)",
    meHelp: "Your details are used to calculate the day's calorie and protein target. They're stored only in this browser.",
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
      nutritivo: "A nutritious plate is half vegetables, a quarter protein and a quarter root vegetable, rice or grain."
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
    ok: { desayuno: (n) => n.p >= 15, main: (n) => n.p >= 30 && n.kcal >= 380, merienda: (n) => n.p >= 8 || n.kcal >= 250 },
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
  }
};

/* ── Épocas: platos típicos por nombre (y categoría) ── */
const SEASONS = {
  navidad: (r, nm) => /coquito|pastel(es|on)? de|pasteles|pernil|lechon|gandul|tembleque|arroz con dulce|ponche|majarete|morcilla|pitorro|turron|guineito|cazuela|mazamorra|flan|budin|bienmesabe|polvo de amor|besito|mantecadito|polvoron|jamon glaseado|ensalada de papa|ensalada de coditos/.test(nm),
  cuaresma: (r, nm) => r.category === "pescados" || /bacalao|serenata|gazpacho|atun|sardina|camaron|pescado|chillo|mero|pulpo|carrucho|juey|habichuela|garbanzo|lenteja|tortilla espanola|majarete|arroz con dulce/.test(nm),
  verano: (r, nm) => ["ensaladas", "jugos"].includes(r.category) || /ceviche|parrilla|carbon|pincho|limber|piragua|helado|frio|fria|coco|mango|parcha|pina|playa|alcapurria|bacalaito|empanadilla|pastelillo|tostones|sandia|yogur|paleta|gazpacho/.test(nm),
  gracias: (r, nm) => /pavo|pavochon|calabaza|batata|mofongo relleno|relleno|arroz con gandules|pie de|flan de calabaza|cranberry|arandano/.test(nm),
  lluvia: (r, nm) => r.category === "sopas" || r.category === "calientes" || /asopao|sancocho|caldo|sopon|guisad|fricase|chocolate caliente|avena|cafe con leche|majarete|mazamorra|crema de/.test(nm)
};
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
const PLAN_MEAT_EXTRA = /\b(bistec|churrasco|entrana|picadillo|carne molida|hamburguesa|pechuga|muslo|alita|pepperoni|salami|pastrami|almeja|mejillon|langostino|anchoa|caldo de pollo|caldo de res|caldo de pescado|gelatina)/;
const isVegetarian = (r) => { const t = planNorm(r.name.es + " " + r.ingredients.es.join(" ")); return !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(t) && !PLAN_MEAT_EXTRA.test(t); };
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
let plan = { goal: "rebajar", sex: "", age: "", weight: "", ft: "", inch: "", activity: "1", avoid: [], prefs: [], season: "auto", days: 1, seed: 1 };
try { Object.assign(plan, JSON.parse(readStore(PLAN_STORE) || "{}")); } catch { /* ajustes dañados: se usan los de fábrica */ }
const savePlan = () => writeStore(PLAN_STORE, JSON.stringify(plan));
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
  if (EXCLUDED_CATS.has(r.category)) return null;
  if (/dulce|mermelada|jalea|almibar|pasta de guayaba|cascos|queso blanco casero|queso de hoja|yogur casero/.test(nm)) return null;
  if (["huevos", "cereales"].includes(r.category) || /desayuno|parfait|bowl de yogur|avena|batida de yogur/.test(nm)) return "desayuno";
  if (["frutas"].includes(r.category) || /^yogur|batida|ensalada de frutas/.test(nm)) return "merienda";
  if (r.category === "bebidas") return /batida|champola/.test(nm) ? "merienda" : null;
  if (r.category === "entremeses") return "merienda";
  if (MAIN_CATS.includes(r.category)) return "main";
  return null;
}
function planInfo(r) {
  const e = estimateNutrition(r);
  const a = getAdvisories(r);
  return { n: e.per, frying: e.frying, allergens: a.allergens.map((x) => x.key), alcohol: a.alerts.some((x) => x.key === "alcoholDrink") };
}
function candidates() {
  const g = PLAN_GOALS[plan.goal];
  const pools = { desayuno: [], main: [], merienda: [] };
  const loose = { desayuno: [], main: [], merienda: [] }; // respetan exclusiones aunque no el objetivo
  const season = activeSeason();
  for (const r of recipes) {
    const slot = slotOf(r);
    if (!slot) continue;
    const info = planInfo(r);
    if (info.alcohol) continue;
    if (g.noFried && info.frying) continue;
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (plan.prefs.includes("veg") && !isVegetarian(r)) continue;
    if (plan.prefs.includes("quick") && !isQuick(r)) continue;
    // Las ensaladas y los entremeses sin proteína no hacen un almuerzo: van de merienda.
    let s = slot;
    if (s === "main" && info.n.kcal < 180 && ["ensaladas", "vegetales"].includes(r.category)) s = "merienda";
    const inSeason0 = season !== "todo" && SEASONS[season](r, planNorm(r.name.es));
    if (!g.ok[s](info.n)) { loose[s].push({ r, n: info.n, inSeason: inSeason0, loose: true, score: g.score(info.n) + (inSeason0 ? 1000 : 0) }); continue; }
    const inSeason = season !== "todo" && SEASONS[season](r, planNorm(r.name.es));
    // Las de la época van primero (sin dejar de cumplir el objetivo).
    pools[s].push({ r, n: info.n, inSeason, score: g.score(info.n) + (inSeason ? 1000 : 0) });
  }
  // Si las exclusiones dejan una comida sin opciones, se usan las que más se acercan al objetivo.
  let relaxed = false;
  for (const k in pools) {
    const min = k === "main" ? 6 : 3; // variedad mínima para no repetir todo el plan
    if (pools[k].length < min && loose[k].length) { pools[k] = pools[k].concat(loose[k]); relaxed = true; }
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
function buildPlan(pools, target) {
  const g = PLAN_GOALS[plan.goal];
  const rand = rng(plan.seed * 7919 + Object.keys(PLAN_GOALS).indexOf(plan.goal) * 131);
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
      const m = slot.key === "merienda" ? Math.min(1.5, portionFor(item, target.kcal * slot.share, 1.5)) : portionFor(item, target.kcal * slot.share, g.maxPortion);
      meals.push({ slot: slot.key, item, m });
    }
    days.push(meals);
  }
  return days;
}

/* ── Vista ── */
function goalButtonsHTML() {
  const tr = pt();
  const icons = { rebajar: "🥗", masa: "💪", mantener: "⚖️", sodio: "🧂", lowcarb: "🥩", azucar: "🍬", nutritivo: "🥦" };
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
          ${Object.keys(tr.prefs).map((k) => `<label class="chip-check chip-pref"><input type="checkbox" data-pref="${k}" ${plan.prefs.includes(k) ? "checked" : ""}><span>${esc(tr.prefs[k])}</span></label>`).join("")}
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
function mealHTML(meal) {
  const tr = pt();
  if (!meal.item) return `<li class="plan-meal plan-meal-empty"><span class="plan-slot">${esc(tr.slots[meal.slot])}</span><span>—</span></li>`;
  const r = meal.item.r;
  return `<li class="plan-meal">
    <span class="plan-slot">${esc(tr.slots[meal.slot])}</span>
    <a class="plan-thumb" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}" tabindex="-1" aria-hidden="true">${coverHTML(r.category, r)}</a>
    <span class="plan-meal-body">
      <a class="plan-meal-name" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(r.name[currentLang])}</a>
      <span class="plan-portion">${esc(tr.portions(meal.m))}</span>
      <span class="plan-nutri">${nutriLine(meal.item.n, meal.m)}</span>
      ${badgesHTML(meal.item.n, meal.m)}
    </span>
  </li>`;
}
function dayHTML(meals, i, target) {
  const tr = pt();
  const tot = { kcal: 0, p: 0, c: 0, na: 0, fib: 0, s: 0 };
  for (const x of meals) if (x.item) for (const k in tot) tot[k] += x.item.n[k] * x.m;
  const pctK = Math.min(130, Math.round((tot.kcal / target.kcal) * 100));
  const pctP = Math.min(130, Math.round((tot.p / target.protein) * 100));
  return `<article class="plan-day">
    ${plan.days > 1 ? `<h3 class="plan-day-title">${esc(tr.day(i + 1))}</h3>` : ""}
    <ol class="plan-meals">${meals.map(mealHTML).join("")}</ol>
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
    if (!SEASONS[season](r, planNorm(r.name.es))) continue;
    if (["salsas"].includes(r.category)) continue;
    const info = planInfo(r);
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (plan.prefs.includes("veg") && !isVegetarian(r)) continue;
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
  const groups = [["desayuno", pools.desayuno], ["almuerzo", pools.main], ["merienda", pools.merienda]];
  return groups.map(([k, list]) => `
    <div class="plans-more-group">
      <h3 class="plans-more-slot">${esc(k === "almuerzo" ? `${tr.slots.almuerzo} / ${tr.slots.cena}` : tr.slots[k])} <span class="plans-count">${list.length}</span></h3>
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
function renderPlanOutput() {
  const tr = pt();
  const target = planTargets();
  const floorHit = target.custom && target.kcal <= (plan.sex === "male" ? 1500 : 1200);
  $("plans-target").innerHTML = `<p>${tr.targets(target.kcal, target.protein, target.custom)}</p>` +
    (floorHit ? `<p class="plans-warn">${esc(tr.minWarn)}</p>` : "") +
    `<p class="plans-note">${esc(tr.goalNotes[plan.goal])}</p>`;
  const pools = candidates();
  const enough = pools.desayuno.length && pools.main.length >= 2 && pools.merienda.length;
  $("plans-output").innerHTML = enough
    ? (pools.relaxed ? `<p class="plans-warn">${esc(tr.relaxed)}</p>` : "") + `<div class="plan-days${plan.days > 1 ? " week" : ""}">${buildPlan(pools, target).map((d, i) => dayHTML(d, i, target)).join("")}</div>`
    : `<p class="plans-warn">${esc(tr.noMatch)}</p>`;
  $("plans-more").innerHTML = moreHTML(pools);
  $("plans-season").innerHTML = seasonHTML();
}

function showPlans() {
  const fromRecipe = !$("view-recipe").hidden;
  current = null;
  $("view-home").hidden = true;
  $("view-recipe").hidden = true;
  $("view-plans").hidden = false;
  document.title = `${pt().title} — ${BRAND}`;
  renderPlansShell();
  if (fromRecipe) window.scrollTo(0, plansScrollY);
  else { window.scrollTo(0, 0); $("plans-title").focus({ preventScroll: true }); }
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
    if (e.target.closest("[data-open]")) plansScrollY = window.scrollY;
  });
  v.addEventListener("input", (e) => {
    const f = e.target.dataset.field;
    if (f) { plan[f] = e.target.value; savePlan(); renderPlanOutput(); }
  });
  v.addEventListener("change", (e) => {
    if (e.target.matches("[data-season]")) { plan.season = e.target.value; savePlan(); renderPlanOutput(); return; }
    const k = e.target.dataset.avoid, p = e.target.dataset.pref;
    if (k) plan.avoid = e.target.checked ? [...new Set([...plan.avoid, k])] : plan.avoid.filter((x) => x !== k);
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
