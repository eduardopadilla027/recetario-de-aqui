/* Recetarios de Aquí — alergias, alertas y manejo seguro de alimentos.
 *
 * Todo se deduce de los ingredientes (en español), la categoría y la
 * estimación nutricional de cada receta: no hay datos escritos a mano por
 * receta, salvo la lista corta de recetas con huevo crudo o poco cocido, que
 * no se puede deducir del texto. Es información general: la interfaz pide
 * revisar las etiquetas y consultar al médico ante alergias o condiciones.
 * Temperaturas internas según las guías del USDA.
 */

/* Alérgenos: expresión sobre cada línea de ingredientes (sin acentos). */
const ALLERGENS = [
  ["gluten", /\bharina\b(?!\s+de\s+(maiz|arroz|platano|yuca|coco|pana))|\bpan(es)?\b|pan rallado|\bgalletas?\b|\bespaguetis?\b|\bfideos?\b|\bcoditos?\b|\bmacarrones\b|\blasana\b|\bcanelones\b|\bmanicotti\b|\bpasta\b(?!\s+de\s+(tomate|guayaba))|hojaldre|\bdiscos?\b|masa para pie|mezcla (para|de) bizcocho|\bfarina\b|crema de trigo|\bcerveza\b|\bmalta\b|salsa de soya|\bavena\b|\bbizcocho\b/],
  ["milk", /\bleches?\b(?!\s+de\s+coco)|(?<!pano de )\bquesos?\b|mantequilla(?!\s+de\s+mani)|\bcrema\b(?!\s+de\s+(coco|arroz|trigo|pana|calabaza))|ricotta|parmesano|mantecado|\bhelado\b|\byogur/],
  ["egg", /\bhuevos?\b|\byemas?\b|\bclaras?\b|mayonesa|merengue/],
  ["fish", /\bpescado|bacalao|bacalaito|\batun\b|\bmero\b|\bchillo\b|(?<!ron )\bdorado\b|mahi|tilapia|\bpargo\b|\bsierra\b|salsa inglesa|anchoa|sardina|salmon|\bfiletes? de (pescado|mero|chillo|dorado|pargo)/],
  ["crustacean", /camaron|langost|\bjuey|cangrejo/],
  ["mollusc", /\bpulpo\b|calamar|carrucho|caracol|ostion|almeja|mejillon/],
  ["treenut", /\bnuez\b(?!\s+moscada)|\bnueces\b|almendra|pistacho|avellana|maranon|pecana|mazapan/],
  ["peanut", /\bmani\b|cacahuate/],
  ["sesame", /ajonjoli|sesamo/],
  ["soy", /\bsoya\b|\bsoja\b|\btofu\b/],
  ["coconut", /\bcoco\b|coquito/],
  ["sulfites", /\bvinos?\b|\bpasas\b|marrasquino/]
];

/* Recetas con huevo crudo o poco cocido (no se deduce del texto). */
const RAW_EGG_IDS = new Set(["malta-huevo", "tres-leches", "ponche-crema"]);

const ADVICE_TEXT = {
  es: {
    tab: "Alergias y seguridad",
    title: "Alergias, alertas y manejo seguro",
    contains: "Contiene:",
    allergensTitle: "Alérgenos",
    allergensNone: "No se encontraron los alérgenos más comunes en los ingredientes de esta receta.",
    foundIn: "En:",
    alertsTitle: "Alertas",
    alertsNone: "No hay alertas especiales para esta receta.",
    tipsTitle: "Manejo seguro de los alimentos",
    note: "Información general, calculada automáticamente a partir de los ingredientes. Revise siempre las etiquetas (los productos pueden tener trazas de otros alérgenos) y consulte a su médico si tiene alergias, está embarazada o tiene alguna condición de salud.",
    allergens: {
      gluten: "Trigo (gluten)", milk: "Leche", egg: "Huevo", fish: "Pescado",
      crustacean: "Crustáceos (camarón, langosta, jueyes)", mollusc: "Moluscos (pulpo, calamar, carrucho)",
      treenut: "Frutos secos (nueces)", peanut: "Maní", sesame: "Ajonjolí (sésamo)", soy: "Soya",
      coconut: "Coco", sulfites: "Sulfitos (vino, pasas)"
    },
    alerts: {
      sodium: (mg, pct) => `Alto en sodio: ≈ ${mg} mg por porción (${pct}% del valor diario). Si cuida la presión, use menos sal, adobo, sazón y embutidos, o use el Sazón Casero.`,
      sat: (g, pct) => `Alto en grasa saturada: ≈ ${g} g por porción (${pct}% del valor diario). Quite la grasa visible y el cuero, y hornee en vez de freír cuando se pueda.`,
      sugar: (g) => `Alto en azúcar: ≈ ${g} g por porción. Si tiene diabetes, prefiera una porción pequeña.`,
      kcal: (k) => `Porción muy calórica (≈ ${k} kcal). Puede servir porciones más pequeñas acompañadas de ensalada o vegetales.`,
      alcoholDrink: "Bebida alcohólica: no apta para menores de 18 años, embarazadas ni si va a conducir. Tome con moderación.",
      alcoholCooked: "Lleva alcohol. Una parte se evapora al cocinar, pero no todo: téngalo en cuenta con niños, en el embarazo o si evita el alcohol.",
      rawEgg: "Lleva huevo crudo o poco cocido, con riesgo de salmonela. Use huevos pasteurizados y evítelo en el embarazo, en niños pequeños, envejecientes y personas con las defensas bajas.",
      rawFish: "El pescado del ceviche no se cocina: el limón no mata las bacterias ni los parásitos como el calor. Use pescado muy fresco de una pescadería confiable (mejor si fue congelado antes) y evítelo en el embarazo, en niños pequeños, envejecientes y personas con las defensas bajas.",
      honey: "No les dé miel a bebés menores de 1 año (riesgo de botulismo infantil).",
      caffeine: "Contiene cafeína: con moderación en niños, en el embarazo y de noche.",
      starAnise: "No les dé té de anís estrellado a bebés ni a niños pequeños: puede ser tóxico si está mezclado con anís japonés.",
      herbal: "Las infusiones de hierbas pueden interactuar con algunos medicamentos. Consulte a su médico si está embarazada, lactando o toma medicinas.",
      sazon: "El sazón y el adobo comerciales suelen llevar glutamato monosódico (MSG) y colorantes como el amarillo 5; si le caen mal, use el Sazón Casero y el Adobo del recetario.",
      ciguatera: "En el Caribe, algunos peces grandes de arrecife (picúa, barracuda, meros y pargos muy grandes) pueden causar ciguatera. Compre en pescaderías confiables y evite las piezas muy grandes.",
      mercury: "En el embarazo, limite el atún blanco (albacore), que tiene más mercurio; el atún claro (light) es mejor opción, en 2-3 porciones de pescado a la semana.",
      veda: "Respete las vedas y los tamaños mínimos del DRNA para el carrucho, la langosta y los jueyes: compre a pescadores o pescaderías autorizados."
    },
    tips: {
      poultry: "Aves: cocínelas hasta 165°F (74°C) en la parte más gruesa. No lave el pollo crudo (salpica bacterias por la cocina); use tabla y cuchillo aparte y lávese las manos. Descongele en la nevera, nunca sobre el mostrador.",
      turkey: "Pavo: uno congelado necesita unas 24 horas de nevera por cada 4-5 libras para descongelarse. Mida la temperatura en el muslo, sin tocar el hueso.",
      pork: "Cerdo: los cortes enteros se cocinan hasta 145°F (63°C) con 3 minutos de reposo; la carne molida y la longaniza fresca, hasta 160°F (71°C). El pernil y el lechón que se desmenuzan se cocinan hasta unos 190°F (88°C).",
      beef: "Res y otras carnes: los cortes enteros hasta 145°F (63°C) con 3 minutos de reposo.",
      ground: "Carne molida (picadillo, albóndigas, rellenos): cocínela siempre hasta 160°F (71°C), sin nada rosado por dentro.",
      offal: "Vísceras (hígado, mondongo, mollejas, lengua): son muy perecederas. Cómprelas frescas, límpielas bien, manténgalas en la nevera y cocínelas en 1-2 días, siempre bien cocidas.",
      blood: "Sangre: use sangre fresca de un proveedor confiable, manténgala fría y cocine la morcilla hasta que al pincharla no salga sangre.",
      marinate: "Adobe y marine siempre dentro de la nevera, y no use el adobo que tuvo carne cruda como salsa sin antes hervirlo.",
      fish: "Pescado: el fresco huele a mar (no a amoníaco) y tiene los ojos claros y la carne firme. Guárdelo en hielo o en la nevera, cocínelo en 1-2 días y hasta 145°F (63°C), cuando se separe en lascas.",
      shellfish: "Mariscos: cocínelos hasta que estén opacos (los camarones, rosados y firmes). Los jueyes y la langosta se compran vivos y activos (los jueyes, purgados); descarte los que estén muertos antes de cocinarlos. El pulpo y el carrucho, bien cocidos.",
      bacalao: "Bacalao: desálelo en la nevera, en agua fría, de 24 a 48 horas, cambiando el agua 3 o 4 veces. Aun desalado sigue siendo salado: pruebe antes de añadir sal.",
      yuca: "Yuca: nunca se come cruda. Pélela bien, quítele la vena del centro y cocínela por completo.",
      tubers: "Yautía, malanga y ñame: pélelos con las manos aceitadas o con guantes, porque pueden picar la piel. Siempre se comen cocidos.",
      frying: "Frituras: use un caldero hondo lleno hasta la mitad como máximo y seque bien los alimentos antes de freír. Nunca le eche agua al aceite caliente: si se prende, tape la olla y apague el fuego. No reutilice el aceite más de 2 o 3 veces.",
      preserves: "Conservas caseras (escabeches, dulces en almíbar): guárdelas en frascos de cristal limpios, en la nevera, y consúmalas en 1-2 semanas. Para guardarlas fuera de la nevera hace falta un proceso de envasado seguro.",
      pasteles: "Pasteles: guárdelos crudos en el congelador (hasta 3 meses) y hiérvalos sin descongelar. No deje la masa ni el relleno fuera de la nevera más de 2 horas.",
      rawMilk: "Use leche pasteurizada: la leche cruda puede tener bacterias peligrosas.",
      leftovers: "Sobras: refrigérelas antes de 2 horas (1 hora si hace mucho calor) y recaliéntelas hasta que hiervan o a 165°F (74°C). El arroz cocido que se queda fuera de la nevera puede causar intoxicación."
    }
  },
  en: {
    tab: "Allergies & safety",
    title: "Allergies, alerts, and safe handling",
    contains: "Contains:",
    allergensTitle: "Allergens",
    allergensNone: "None of the most common allergens were found in this recipe's ingredients.",
    foundIn: "In:",
    alertsTitle: "Alerts",
    alertsNone: "No special alerts for this recipe.",
    tipsTitle: "Safe food handling",
    note: "General information, generated automatically from the ingredients. Always check product labels (products may contain traces of other allergens) and talk to your doctor if you have allergies, are pregnant, or have a health condition.",
    allergens: {
      gluten: "Wheat (gluten)", milk: "Milk", egg: "Egg", fish: "Fish",
      crustacean: "Shellfish (shrimp, lobster, crab)", mollusc: "Mollusks (octopus, squid, conch)",
      treenut: "Tree nuts", peanut: "Peanuts", sesame: "Sesame", soy: "Soy",
      coconut: "Coconut", sulfites: "Sulfites (wine, raisins)"
    },
    alerts: {
      sodium: (mg, pct) => `High in sodium: ≈ ${mg} mg per serving (${pct}% of the daily value). If you watch your blood pressure, use less salt, adobo, sazón, and cured meats, or use the Homemade Sazón.`,
      sat: (g, pct) => `High in saturated fat: ≈ ${g} g per serving (${pct}% of the daily value). Trim visible fat and skin, and bake instead of frying when you can.`,
      sugar: (g) => `High in sugar: ≈ ${g} g per serving. If you have diabetes, choose a small portion.`,
      kcal: (k) => `Very high-calorie serving (≈ ${k} kcal). Consider smaller portions with salad or vegetables.`,
      alcoholDrink: "Alcoholic drink: not for anyone under 18, during pregnancy, or if you will drive. Drink in moderation.",
      alcoholCooked: "Contains alcohol. Some evaporates during cooking, but not all: keep that in mind for children, pregnancy, or if you avoid alcohol.",
      rawEgg: "Contains raw or undercooked egg, with a salmonella risk. Use pasteurized eggs and avoid it during pregnancy and for young children, older adults, and people with weakened immunity.",
      rawFish: "Ceviche fish is not cooked: lime juice does not kill bacteria or parasites the way heat does. Use very fresh fish from a trusted fishmonger (ideally previously frozen) and avoid it during pregnancy and for young children, older adults, and people with weakened immunity.",
      honey: "Do not give honey to babies under 1 year old (risk of infant botulism).",
      caffeine: "Contains caffeine: in moderation for children, during pregnancy, and at night.",
      starAnise: "Do not give star anise tea to babies or young children: it can be toxic if mixed with Japanese star anise.",
      herbal: "Herbal teas can interact with some medications. Ask your doctor if you are pregnant, breastfeeding, or take medicines.",
      sazon: "Store-bought sazón and adobo often contain MSG and colorings such as Yellow 5; if they bother you, use the Homemade Sazón and Adobo recipes.",
      ciguatera: "In the Caribbean, some large reef fish (barracuda, very large grouper and snapper) can cause ciguatera. Buy from trusted fishmongers and avoid very large fish.",
      mercury: "During pregnancy, limit white (albacore) tuna, which is higher in mercury; light tuna is a better choice, within 2-3 fish servings a week.",
      veda: "Respect the DRNA closed seasons and minimum sizes for conch, lobster, and land crabs: buy from licensed fishers or fish markets."
    },
    tips: {
      poultry: "Poultry: cook to 165°F (74°C) in the thickest part. Don't rinse raw chicken (it splashes bacteria around the kitchen); use a separate board and knife and wash your hands. Thaw in the fridge, never on the counter.",
      turkey: "Turkey: a frozen one needs about 24 hours in the fridge for every 4-5 pounds to thaw. Check the temperature in the thigh without touching the bone.",
      pork: "Pork: whole cuts to 145°F (63°C) with a 3-minute rest; ground pork and fresh sausage to 160°F (71°C). Pork shoulder and lechón meant for shredding go to about 190°F (88°C).",
      beef: "Beef and other meats: whole cuts to 145°F (63°C) with a 3-minute rest.",
      ground: "Ground meat (picadillo, meatballs, fillings): always cook to 160°F (71°C), with no pink inside.",
      offal: "Organ meats (liver, tripe, gizzards, tongue): very perishable. Buy them fresh, clean them well, keep them refrigerated, and cook within 1-2 days, always well done.",
      blood: "Blood: use fresh blood from a trusted supplier, keep it cold, and cook the morcilla until no blood comes out when pricked.",
      marinate: "Always season and marinate in the fridge, and don't use a marinade that held raw meat as a sauce unless you boil it first.",
      fish: "Fish: fresh fish smells like the sea (not ammonia) and has clear eyes and firm flesh. Keep it on ice or refrigerated, cook within 1-2 days, and to 145°F (63°C), when it flakes.",
      shellfish: "Seafood: cook until opaque (shrimp pink and firm). Buy land crabs and lobster alive and active (crabs purged); discard any that die before cooking. Cook octopus and conch thoroughly.",
      bacalao: "Salt cod: desalt it in the fridge, in cold water, for 24-48 hours, changing the water 3-4 times. It stays salty even so: taste before adding salt.",
      yuca: "Yuca: never eat it raw. Peel it well, remove the center vein, and cook it completely.",
      tubers: "Yautía, malanga, and yam: peel with oiled hands or gloves, since they can itch the skin. Always eat them cooked.",
      frying: "Frying: use a deep pot filled no more than halfway and dry foods well before frying. Never pour water on hot oil: if it catches fire, cover the pot and turn off the heat. Don't reuse oil more than 2-3 times.",
      preserves: "Homemade preserves (escabeche, fruits in syrup): store in clean glass jars in the fridge and eat within 1-2 weeks. Keeping them outside the fridge requires a safe canning process.",
      pasteles: "Pasteles: store them raw in the freezer (up to 3 months) and boil without thawing. Don't leave the masa or filling out of the fridge for more than 2 hours.",
      rawMilk: "Use pasteurized milk: raw milk can carry dangerous bacteria.",
      leftovers: "Leftovers: refrigerate within 2 hours (1 hour if it's very hot) and reheat until boiling or to 165°F (74°C). Cooked rice left out of the fridge can cause food poisoning."
    }
  }
};

const adviceCache = new Map();

/** Alérgenos (con los índices de los ingredientes donde aparecen), alertas
 *  ({ key, level, args }) y consejos de manejo de una receta. */
function getAdvisories(recipe) {
  if (adviceCache.has(recipe.id)) return adviceCache.get(recipe.id);
  const lines = recipe.ingredients.es.map(nutriNorm);
  const all = lines.join("\n");
  const steps = nutriNorm(recipe.steps.es.join(" "));
  const name = nutriNorm(recipe.name.es);
  const cat = recipe.category;
  const has = (rx) => rx.test(all);

  const allergens = [];
  for (const [key, rx] of ALLERGENS) {
    const items = lines.map((l, i) => (rx.test(l) ? i : -1)).filter((i) => i >= 0);
    if (items.length) allergens.push({ key, items });
  }

  const alerts = [];
  const push = (key, level, args = []) => alerts.push({ key, level, args });
  const isDrink = ["bebidas", "cocteles", "calientes"].includes(cat);
  const alcohol = /\b(ron|licor|pitorro|cerveza|limoncello)\b|(?<!vinagre de )\bvinos?\b/;

  if (/ceviche/.test(name)) push("rawFish", "high");
  if (RAW_EGG_IDS.has(recipe.id) || (isDrink && has(/\b(huevos?|yemas?)\b/))) push("rawEgg", "high");
  if (cat === "cocteles" || (isDrink && has(alcohol))) push("alcoholDrink", "high");
  else if (has(alcohol)) push("alcoholCooked", "caution");
  if (has(/\bmiel\b/)) push("honey", "caution");
  if (has(/anis estrellado/)) push("starAnise", "caution");
  if (has(/\bcafe\b/)) push("caffeine", "info");
  if (cat === "calientes" && /^(te-|guarapo)/.test(recipe.id)) push("herbal", "info");
  if (has(/\b(mero|pargo|picua|barracuda|sierra)\b/)) push("ciguatera", "info");
  if (has(/\batun\b/)) push("mercury", "info");
  if (has(/carrucho|caracol|langost|\bjuey|cangrejo/)) push("veda", "info");
  // Sazón o adobo de sobre/frasco (con cantidad); "Adobo: ajo, orégano…" es casero.
  if (has(/\bsazon\b(?!\s+casero)|\d[^\n:]*\badobo\b|adobo al gusto/) && !/^(sazon-casero|adobo)$/.test(recipe.id)) push("sazon", "info");

  // Alertas nutricionales, con los mismos umbrales que usan las etiquetas:
  // "alto" = 20% o más del valor diario por porción.
  const est = typeof estimateNutrition === "function" ? estimateNutrition(recipe) : null;
  if (est && est.counted) {
    const p = est.per;
    const pct = (v, key) => Math.round((v / NUTRI_DV[key]) * 100);
    if (pct(p.na, "na") >= 20) push("sodium", "caution", [Math.round(p.na / 10) * 10, pct(p.na, "na")]);
    if (pct(p.sat, "sat") >= 20) push("sat", "caution", [Math.round(p.sat), pct(p.sat, "sat")]);
    if (p.s >= 25) push("sugar", "caution", [Math.round(p.s)]);
    if (p.kcal >= 700) push("kcal", "info", [Math.round(p.kcal / 10) * 10]);
  }

  const tips = [];
  const tip = (key, when) => { if (when) tips.push(key); };
  // Para las carnes crudas no cuentan los caldos ("caldo de pollo") ni lo que
  // ya viene cocido ("chicharrón triturado").
  const raw = lines.filter((l) => !/\bcaldos?\b|consome|chicharron/.test(l)).join("\n");
  const hasRaw = (rx) => rx.test(raw);
  const poultry = hasRaw(/\b(pollos?|pavos?|gallinas?|pechugas?|muslos?|alitas?|mollejas?)\b/);
  const pork = hasRaw(/\b(cerdo|pernil|lechon|chuletas?|costillas?|costillar|masitas|paleta|patitas?|cuero|longaniza)\b/);
  const ground = hasRaw(/carne molida|picadillo|albondiga/);
  const beef = hasRaw(/\b(res|bistecs?|falda|churrasco|rabo|cabro|chivo|cabrito|conejo|ternera|palomilla|boliche|lengua)\b|\bcarne\b(?!\s+(molida|de\s+(juey|cangrejo|cerdo)))/);
  const offal = hasRaw(/\b(higado|mondongo|callos?|lengua|mollejas?|gandinga|cuajo|sangre|tripas?)\b/);
  const fish = hasRaw(/\bpescado|bacalao|\batun\b|\bmero\b|\bchillo\b|(?<!ron )\bdorado\b|mahi|tilapia|\bpargo\b|\bsierra\b|salmon|sardina/);
  const shellfish = hasRaw(ALLERGENS[4][1]) || hasRaw(ALLERGENS[5][1]);
  const rawProtein = poultry || pork || beef || ground || offal || fish || shellfish;

  tip("poultry", poultry);
  tip("turkey", has(/\bpavos?\b/));
  tip("pork", pork);
  tip("beef", beef);
  tip("ground", ground);
  tip("offal", offal);
  tip("blood", has(/\bsangre\b/));
  tip("marinate", rawProtein && /marin|adob/.test(steps));
  tip("fish", fish);
  tip("shellfish", shellfish);
  tip("bacalao", has(/bacalao/));
  tip("yuca", has(/\byuca\b/));
  tip("tubers", has(/\b(yautia|malanga|name)\b/));
  // "Fría en aceite", "fríalos"… pero no "agua fría", "sirva fría" ni
  // "rinde para freír"; y sólo si la receta usa aceite o manteca.
  const fryWords = steps.replace(/\b(agua|leche|sirva|servir|bien|muy|mezcla|masa)\s+fria\b|para freir/g, "");
  tip("frying", /para freir/.test(all) ||
    (/(?<!so)\bfreir\b|\bfri(alos|alas|ala|alo)\b|\bfria (en|a|los|las|el|la|hasta|por)\b/.test(fryWords) && /aceite|manteca|tocino/.test(all + steps)));
  tip("preserves", /escabeche|almibar|mermelada|pasta de guayaba|cascos/.test(name));
  tip("pasteles", /\bpasteles\b/.test(name));
  tip("rawMilk", recipe.id === "queso-blanco-casero");
  tip("leftovers", ["sopas", "arroces", "carnes", "aves", "pescados", "granos", "pastas"].includes(cat));

  const result = { allergens, alerts, tips };
  adviceCache.set(recipe.id, result);
  return result;
}
