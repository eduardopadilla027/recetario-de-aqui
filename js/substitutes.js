/* Sustitutos para cada alérgeno de una receta (pestaña "Alergias y seguridad").
 *
 * ALLERGEN_SUBS[alérgeno] = lista de [expresión sobre la línea de ingrediente (sin acentos),
 * { es, en }]. Para cada alérgeno se miran sólo las líneas donde se encontró y se muestran
 * los sustitutos que aplican (sin repetir); si ninguno aplica, el general del alérgeno.
 * EGG_IS_BASE: recetas donde el huevo es la base (flan, tortilla…): no tienen buen sustituto.
 * Es orientación general: con alergias graves hay que revisar cada etiqueta. */
const SUBS_TEXT = {
  es: { label: "Puede usar:", note: "Los sustitutos son orientación general y pueden cambiar el sabor o la textura. Con alergias graves, revise cada etiqueta (puede haber trazas por contaminación cruzada) y consulte a su alergista." },
  en: { label: "You can use:", note: "Substitutes are general guidance and may change the flavor or texture. With severe allergies, check every label (cross-contamination can leave traces) and ask your allergist." }
};

const ALLERGEN_SUBS = {
  gluten: [
    [/pan rallado|panko|galleta molida/, { es: "Pan rallado → pan rallado sin gluten, harina de maíz o avena certificada sin gluten molida.", en: "Breadcrumbs → gluten-free breadcrumbs, cornmeal or ground certified gluten-free oats." }],
    [/\bharina\b(?!\s+de\s+(maiz|arroz|platano|yuca|coco|pana))/, { es: "Harina de trigo → harina sin gluten «1 a 1» (ya trae goma xantana); para espesar salsas, la mitad de cantidad de maicena.", en: "Wheat flour → a gluten-free 1-to-1 flour blend (it includes xanthan gum); to thicken sauces, half the amount of cornstarch." }],
    [/espagueti|codito|macarron|fideo|\bpasta\b(?! de (guayaba|tomate))|lasana|canelon|manicotti/, { es: "Pasta → pasta de arroz, de maíz o de garbanzo (se cocina más rápido: pruébela antes).", en: "Pasta → rice, corn or chickpea pasta (it cooks faster: taste it early)." }],
    [/salsa de soya|salsa inglesa/, { es: "Salsa de soya → tamari sin gluten o aminos de coco; salsa inglesa → una marca que diga «sin gluten».", en: "Soy sauce → gluten-free tamari or coconut aminos; Worcestershire → a brand labeled gluten-free." }],
    [/farina|crema de trigo/, { es: "Farina (crema de trigo) → crema de arroz o harina de maíz fina.", en: "Farina (cream of wheat) → cream of rice or fine cornmeal." }],
    [/avena|granola/, { es: "Avena → avena certificada sin gluten (la común se contamina con trigo).", en: "Oats → certified gluten-free oats (regular oats are cross-contaminated with wheat)." }],
    [/cerveza|malta/, { es: "Cerveza → cerveza sin gluten; la malta no tiene sustituto sin gluten.", en: "Beer → gluten-free beer; malta has no gluten-free substitute." }],
    [/\bpan(es)?\b(?! rallado)|tortillas? de harina|discos? para (empanadillas|pastelillos)|masas? para pie|hojaldre|bizcocho|galletas?(?! molidas?)|mezcla para bizcocho/, { es: "Pan, tortillas, masas, discos y galletas → las versiones sin gluten que se venden (revise la etiqueta).", en: "Bread, tortillas, doughs, turnover discs and cookies → store-bought gluten-free versions (check the label)." }]
  ],
  milk: [
    [/leche evaporada/, { es: "Leche evaporada → leche de coco en lata (cambia un poco el sabor).", en: "Evaporated milk → canned coconut milk (the flavor changes slightly)." }],
    [/leche condensada/, { es: "Leche condensada → leche condensada de coco.", en: "Condensed milk → sweetened condensed coconut milk." }],
    [/crema de leche|heavy cream|crema batida|\bcrema\b(?!\s+de\s+(coco|arroz|trigo|pana|calabaza))/, { es: "Crema de leche → crema de coco bien fría (también se bate).", en: "Heavy cream → well-chilled coconut cream (it whips too)." }],
    [/queso crema/, { es: "Queso crema → queso crema vegetal (de coco o de anacardo, si no hay alergia a las nueces).", en: "Cream cheese → plant-based cream cheese (coconut, or cashew if there's no tree-nut allergy)." }],
    [/(?<!pano de )\bquesos?\b|parmesano|ricotta/, { es: "Queso → queso vegetal, o simplemente omítalo; los quesos vegetales no se derriten igual.", en: "Cheese → plant-based cheese, or just leave it out; plant cheeses don't melt the same way." }],
    [/mantequilla(?!\s+de\s+mani)|margarina/, { es: "Mantequilla → aceite vegetal o de coco, o margarina vegetal que no diga «suero» ni «caseína».", en: "Butter → vegetable or coconut oil, or a plant margarine without whey or casein." }],
    [/yogur/, { es: "Yogur → yogur de coco o de soya (si no hay alergia a la soya).", en: "Yogurt → coconut or soy yogurt (if there's no soy allergy)." }],
    [/mantecado|helado/, { es: "Mantecado → sorbete o mantecado de coco.", en: "Ice cream → sorbet or coconut ice cream." }],
    [/nutella/, { es: "Nutella → crema de avellanas y cacao sin leche.", en: "Nutella → a dairy-free hazelnut cocoa spread." }],
    [/\bleches?\b(?!\s+(de\s+coco|evaporada|condensada))/, { es: "Leche → leche de avena, de coco o de almendra (si no hay alergia a las nueces); sin azúcar para los platos salados.", en: "Milk → oat, coconut or almond milk (if there's no tree-nut allergy); unsweetened for savory dishes." }]
  ],
  egg: [
    [/mayonesa|mayo/, { es: "Mayonesa → mayonesa vegana (sin huevo).", en: "Mayonnaise → vegan (egg-free) mayonnaise." }],
    [/merengue|claras?/, { es: "Claras para merengue → aquafaba (el líquido de los garbanzos en lata), batida igual que las claras.", en: "Whites for meringue → aquafaba (the liquid from canned chickpeas), whipped like egg whites." }],
    [/\bhuevos?\b|\byemas?\b/, null] // se decide abajo: hornear, empanizar o unir
  ],
  fish: [
    [/salsa inglesa|anchoa/, { es: "Salsa inglesa → una marca vegana (sin anchoas).", en: "Worcestershire → a vegan brand (no anchovies)." }],
    [/./, { es: "Pescado → en guisos, pollo o garbanzos; en empanadillas y alcapurrias, jaca o palmito desmenuzado.", en: "Fish → in stews, chicken or chickpeas; in turnovers and alcapurrias, shredded jackfruit or hearts of palm." }]
  ],
  crustacean: [
    [/./, { es: "Camarones, langosta o jueyes → pollo en trocitos, pescado (si no hay alergia), palmito o setas; ajuste el tiempo de cocción.", en: "Shrimp, lobster or crab → diced chicken, fish (if there's no allergy), hearts of palm or mushrooms; adjust the cooking time." }]
  ],
  mollusc: [
    [/ostra/, { es: "Salsa de ostras → salsa de setas vegetariana.", en: "Oyster sauce → vegetarian mushroom sauce." }],
    [/./, { es: "Pulpo, calamar, carrucho o almejas → setas (hongos ostra), palmito o pollo.", en: "Octopus, squid, conch or clams → oyster mushrooms, hearts of palm or chicken." }]
  ],
  treenut: [
    [/extracto de almendra/, { es: "Extracto de almendra → vainilla.", en: "Almond extract → vanilla." }],
    [/leche de almendra/, { es: "Leche de almendra → leche de avena o de coco.", en: "Almond milk → oat or coconut milk." }],
    [/nutella|avellana/, { es: "Crema de avellanas → crema de semillas de girasol con cacao.", en: "Hazelnut spread → sunflower-seed cocoa spread." }],
    [/./, { es: "Nueces, almendras o pistachos → semillas de girasol o de calabaza tostadas, coco tostado (si no hay alergia al coco), o simplemente omítalos.", en: "Walnuts, almonds or pistachios → toasted sunflower or pumpkin seeds, toasted coconut (if there's no coconut allergy), or leave them out." }]
  ],
  peanut: [
    [/mantequilla de mani/, { es: "Mantequilla de maní → mantequilla de semillas de girasol.", en: "Peanut butter → sunflower-seed butter." }],
    [/./, { es: "Maní → semillas de girasol o de calabaza tostadas.", en: "Peanuts → toasted sunflower or pumpkin seeds." }]
  ],
  sesame: [
    [/aceite de ajonjoli/, { es: "Aceite de ajonjolí → aceite vegetal o de oliva.", en: "Sesame oil → vegetable or olive oil." }],
    [/tahini|tahina/, { es: "Tahini → mantequilla de semillas de girasol.", en: "Tahini → sunflower-seed butter." }],
    [/./, { es: "Ajonjolí → omítalo o use semillas de calabaza.", en: "Sesame seeds → leave them out or use pumpkin seeds." }]
  ],
  soy: [
    [/salsa de soya|soja/, { es: "Salsa de soya → aminos de coco (sin soya ni trigo).", en: "Soy sauce → coconut aminos (soy- and wheat-free)." }],
    [/tofu/, { es: "Tofu → garbanzos, jaca o pollo.", en: "Tofu → chickpeas, jackfruit or chicken." }],
    [/./, { es: "Revise las etiquetas: la soya aparece en muchos productos (lecitina, aceite, cremas para untar).", en: "Check labels: soy shows up in many products (lecithin, oil, spreads)." }]
  ],
  coconut: [
    [/leche de coco|crema de coco/, { es: "Leche o crema de coco → leche evaporada o crema de leche (si no hay alergia a la leche), o leche de avena.", en: "Coconut milk or cream → evaporated milk or heavy cream (if there's no milk allergy), or oat milk." }],
    [/aceite de coco/, { es: "Aceite de coco → mantequilla o aceite vegetal.", en: "Coconut oil → butter or vegetable oil." }],
    [/coco rallado|coco seco/, { es: "Coco rallado → avena tostada, o simplemente omítalo.", en: "Shredded coconut → toasted oats, or leave it out." }],
    [/coquito/, { es: "Coquito → ponche de crema sin alcohol (no lleva coco).", en: "Coquito → alcohol-free ponche de crema (no coconut)." }],
    [/./, { es: "Coco rallado → avena tostada, o simplemente omítalo.", en: "Shredded coconut → toasted oats, or leave it out." }]
  ],
  sulfites: [
    [/\bvinos?\b/, { es: "Vino → caldo con un chorrito de vinagre (en guisos) o jugo de uva (en postres).", en: "Wine → broth with a splash of vinegar (in stews) or grape juice (in desserts)." }],
    [/pasas|marrasquino/, { es: "Pasas o cerezas en almíbar → frutas secas o cerezas que digan «sin sulfitos».", en: "Raisins or maraschino cherries → dried fruit or cherries labeled sulfite-free." }]
  ]
};

// Recetas donde el huevo es la base: cuaja, levanta o es el plato.
const EGG_IS_BASE = /flan|coquimol|crepas|bunuelos de viento|churros|quesillo|tocino del cielo|revoltillo|tortilla(?! de harina)|^huevos|huevos rellenos|habaneros|merengue|suspiros|pavlova|ponche de crema|malta con huevo|natilla|soufle|mousse|panna cotta/;

const EGG_TEXT = {
  base: { es: "Aquí el huevo es la base de la receta (cuaja o da la textura): no tiene un buen sustituto; mejor escoja otra receta.", en: "Egg is the base of this recipe (it sets it or gives the texture): there's no good substitute; better choose another recipe." },
  bake: { es: "Huevo en masas horneadas → por cada huevo, 1 cucharada de linaza molida con 3 de agua (repose 5 minutos), o ¼ taza de puré de guineo o de compota de manzana; funciona bien hasta 2 huevos.", en: "Egg in baked goods → per egg, 1 tablespoon ground flaxseed with 3 of water (rest 5 minutes), or ¼ cup mashed banana or applesauce; works well up to 2 eggs." },
  bread: { es: "Huevo para empanizar → pase lo que va a empanizar por leche, mostaza o aquafaba (el líquido de los garbanzos) antes del pan rallado.", en: "Egg for breading → dip what you're breading in milk, mustard or aquafaba (chickpea liquid) before the crumbs." },
  hard: { es: "Huevo duro (en ensaladas o rellenos) → omítalo, o use aguacate o garbanzos para el mismo toque cremoso.", en: "Hard-boiled egg (in salads or fillings) → leave it out, or use avocado or chickpeas for the same creamy touch." },
  seal: { es: "Huevo para sellar o barnizar → agua para pegar los bordes, y leche o aceite por encima para que dore.", en: "Egg to seal or brush → water to glue the edges, and milk or oil on top for browning." },
  scramble: { es: "Huevo revuelto o frito → tofu revuelto con una pizca de cúrcuma (si no hay alergia a la soya), o simplemente omítalo.", en: "Scrambled or fried egg → scrambled tofu with a pinch of turmeric (if there's no soy allergy), or just leave it out." },
  custard: { es: "Yemas en cremas cocidas → 1 cucharada más de maicena por cada yema y una pizca de cúrcuma para el color.", en: "Yolks in cooked custards → 1 extra tablespoon of cornstarch per yolk and a pinch of turmeric for color." },
  soak: { es: "Huevo para remojar (torrejas) → 1 taza de leche con 2 cucharadas de maicena y canela.", en: "Egg for soaking (torrejas) → 1 cup milk with 2 tablespoons cornstarch and cinnamon." },
  bind: { es: "Huevo para unir (croquetas, tortitas, albóndigas) → 1 cucharada de linaza molida con 3 de agua por huevo, o un poco más de pan rallado o harina.", en: "Egg as a binder (croquettes, patties, meatballs) → 1 tablespoon ground flaxseed with 3 of water per egg, or a little more breadcrumbs or flour." }
};

/* Sustitutos que aplican a un alérgeno de la receta: [{ es, en }]. */
function getSubstitutes(recipe, allergen) {
  const rules = ALLERGEN_SUBS[allergen.key];
  if (!rules) return [];
  const lines = allergen.items.map((i) => nutriNorm(recipe.ingredients.es[i]));
  const out = [];
  const add = (t) => { if (t && !out.includes(t)) out.push(t); };
  if (allergen.key === "egg") {
    const name = nutriNorm(recipe.name.es);
    if (EGG_IS_BASE.test(name)) return [EGG_TEXT.base];
    for (const [rx, t] of rules) if (t && lines.some((l) => rx.test(l))) add(t);
    const steps = nutriNorm(recipe.steps.es.join(" "));
    const all = lines.join(" ");
    const raw = lines.filter((l) => /\bhuevos?\b|\byemas?\b/.test(l) && !/mayonesa|duros?|hervid|cocid|para sellar|para barnizar|para pintar/.test(l));
    if (lines.some((l) => /\bhuevos?\b/.test(l) && /duros?|hervid|cocid/.test(l))) add(EGG_TEXT.hard);
    if (/para sellar|para barnizar|para pintar/.test(all) || /(unte|untelos|untelas|barnice|pinte)[^.]{0,30}huevo/.test(steps)) add(EGG_TEXT.seal);
    if (raw.length) {
      const baked = ["bizcochos", "galletitas", "panes", "pasteles_dulces"].includes(recipe.category) || (recipe.category === "postres" && /horn/.test(steps));
      if (/torrejas/.test(name)) add(EGG_TEXT.soak);
      else if ((/huevos?[^.]{0,60}(revuel|revolt|cuaj|escalf)|(revuel|revolt|escalf)[^.]{0,40}huevo|huevos? frito|fria los huevos/.test(steps) || /con huevo/.test(name) || recipe.category === "arroces") && !baked) add(EGG_TEXT.scramble);
      else if (raw.some((l) => /yemas?/.test(l)) && !baked) add(EGG_TEXT.custard);
      else if (baked) add(EGG_TEXT.bake);
      else if (/pan rallado|panko|galleta molida|empaniz|empan/.test(all + " " + steps) && /(pase|pasar|paselas?|paselos?).{0,40}huevo|huevo batido/.test(steps + " " + all)) add(EGG_TEXT.bread);
      else add(EGG_TEXT.bind);
    }
    return out;
  }
  // Primero los sustitutos de ingredientes concretos; el general (/./) sólo si no hubo ninguno.
  for (const [rx, t] of rules) if (rx.source !== "." && lines.some((l) => rx.test(l))) add(t);
  if (!out.length) for (const [rx, t] of rules) if (rx.source === "." && lines.length) add(t);
  return out;
}
