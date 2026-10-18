/* Recetarios de Aquí — buscador inteligente (todo en el navegador, sin servidor).
 *
 * Entiende búsquedas libres en español o inglés y las compara con el nombre,
 * los ingredientes y los pasos de cada receta en ambos idiomas:
 *  - palabras en cualquier orden, sin acentos, singular o plural;
 *  - sinónimos boricuas y traducciones (china = naranja = orange, parcha = maracuyá…);
 *  - errores de escritura (corrige a la palabra más parecida del recetario);
 *  - exclusiones: "sin huevo", "sin gluten", "sin alcohol", "no coco", "gluten free"…;
 *  - ideas: navidad, playa, desayuno, rápido, vegetariano, picante, frío, saludable…;
 *  - categorías por su nombre ("postres", "tragos", "mariscos"…).
 * Devuelve la puntuación de cada receta para ordenar por relevancia y un
 * resumen de lo que entendió, que la interfaz muestra bajo los resultados.
 * Usa estimateNutrition (nutrition.js) y getAdvisories (advisories.js). */

/* Normaliza: minúsculas, sin acentos ni signos. */
const sNorm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9ñ\s-]/g, " ").replace(/ñ/g, "n").replace(/-/g, " ");

/* Plural → singular aproximado ("limones" → "limon", "tomates" → "tomate", "nueces" → "nuez"). */
// Las que terminan en -z hacen el plural en -ces ("arroces", "nueces", "maíces"); "dulces" no (dulce).
const S_Z_PLURAL = new Set("nuez arroz maiz raiz pez codorniz perdiz luz vez cruz lapiz nariz matiz".split(" "));
function sStem(w) {
  if (w.length > 4 && w.endsWith("ces") && S_Z_PLURAL.has(w.slice(0, -3) + "z")) return w.slice(0, -3) + "z";
  if (w.length > 4 && /[nrldz]es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}
const sTokens = (s) => sNorm(s).split(/\s+/).filter((w) => w.length > 1).map(sStem);

/* Palabras que no aportan a la búsqueda. */
const S_STOP = new Set(("y e o u de del la el los las lo un una unos unas con para por a al en que algo alguna algun " +
  "receta recetas plato platos comida quiero quisiera busco buscar hacer preparar me mi como tipo estilo bien muy mas " +
  "sin no libre excepto without free except " +
  // Frases de conversación ("tengo pollo y papas", "¿qué hago con plátano?"): antes contaban como palabras a buscar
  // y, como ninguna receta las tiene, la búsqueda caía en "las más parecidas" con cientos de resultados.
  "tengo tienes tiene tenemos hay hago haga hacemos cocino cocinar cocinarle preparo puedo podria puedes necesito " +
  // "Mañana" es mañana (el día) casi siempre: ya no pide desayunos ("¿qué cocino mañana?").
  "manana tomorrow " +
  "dame dime sugiere sugerencia idea rico rica sabroso sabrosa delicioso deliciosa hoy ahora cual cuales este esta " +
  "estos estas ese esa eso otro otra usar " +
  "and or of the a an with for to in some any recipe recipes dish dishes food want make how style very " +
  "have has got what which can could cook cooking something idea need tonight today give").split(" ").map(sStem));

/* Clave fonética: cómo suena la palabra en Puerto Rico (y = ll, v = b, s = z = c(e,i), h muda, k = qu = c(a,o,u),
 * letras dobles). Así "poyo" se corrige a "pollo" y no a "poco", "vacalao" a "bacalao", "abichuelas" a "habichuelas". */
function sPhon(w) {
  return w.replace(/ch/g, "§").replace(/h/g, "").replace(/§/g, "ch")
    .replace(/ll/g, "y").replace(/v/g, "b").replace(/z/g, "s").replace(/c([ei])/g, "s$1")
    .replace(/qu([ei])/g, "k$1").replace(/c([aou]|$)/g, "k$1").replace(/g([ei])/g, "j$1")
    .replace(/(.)\1+/g, "$1");
}

/* Sinónimos y traducciones (simétricos dentro de cada grupo). */
const S_GROUPS = [
  "china naranja orange", "guineo banana banano", "platano plantain", "habichuela frijol bean judia poroto",
  "gandul guandu pigeon", "cerdo puerco chancho pork marrano", "res beef vaca", "pollo chicken", "gelatina jello gelatin", "dona donut doughnut", "cupcake bizcochito magdalena", "alita ala wing", "pechuga breast", "muslo thigh", "gallina hen",
  "pavo turkey", "camaron shrimp gamba langostino prawn", "pescado fish", "bacalao codfish cod bacalaito",
  "juey cangrejo crab", "pulpo octopus", "calamar squid calamari", "langosta lobster", "carrucho conch caracol",
  "ostion ostra oyster", "parcha maracuya chinola passion passionfruit", "lechosa papaya", "batata boniato camote",
  "yuca cassava mandioca", "yautia malanga taro", "pina pineapple anana", "coco coconut", "guayaba guava",
  "mango", "ron rum", "maiz corn elote choclo", "aguacate avocado palta", "calabaza auyama pumpkin zapallo",
  "queso cheese", "huevo egg", "arroz rice", "tocino tocineta bacon", "salchicha sausage", "cilantro culantro recao",
  "leche milk", "azucar sugar", "cafe coffee", "chocolate cacao cocoa", "harina flour", "pan bread",
  "limon lime lemon", "tamarindo tamarind", "guanabana soursop", "toronja grapefruit pomelo", "fresa strawberry frutilla",
  "papa potato patata", "cebolla onion", "ajo garlic", "tomate tomato", "espagueti spaghetti",
  "fideo noodle", "galleta cookie", "helado ice icecream mantecado", "jugo juice", "batida shake smoothie batido",
  "coctel cocktail", "negro negra black", "blanco blanca white", "rojo roja colorado colorada red",
  "verde green", "maduro madura ripe", "tierno tierna tender", "relleno rellena stuffed", "frito frita fritura fried fritter", "guisado guisada stew stewed guiso",
  "asado asada roast roasted", "empanadilla pastelillo turnover empanada", "bizcocho cake torta ponque",
  "sopa soup", "ensalada salad", "salsa sauce", "flan custard", "dulce sweet", "postre dessert",
  "jengibre ginger", "canela cinnamon", "vainilla vanilla", "carambola starfruit", "mamey", "acerola cereza cherry", "cheesecake chesecake cheescake", "jalea mermelada jam jelly preserves", "hojaldre puff milhojas palmera",
  "chuleta chop", "pernil shoulder", "lechon suckling", "mariscada", "mofongo", "tostone", "alcapurria", "pastel"
].map((g) => g.split(" ").map(sStem));

/* Ampliaciones en un solo sentido: un término general incluye los particulares. */
const S_EXPAND = {
  licor: "licor liquor ron rum brandy amaretto pitorro tequila vino wine",
  liquor: "licor liquor ron rum brandy amaretto pitorro tequila vino wine",
  marisco: "marisco seafood shellfish camaron langosta pulpo calamar carrucho juey cangrejo ostion almeja mejillon",
  seafood: "marisco seafood shellfish camaron langosta pulpo calamar carrucho juey cangrejo ostion",
  carne: "carne meat res cerdo pollo pavo cabro conejo chuleta pernil lechon bistec",
  meat: "carne meat res cerdo pollo pavo cabro conejo chuleta pernil lechon bistec",
  grano: "grano legumbre legume habichuela frijol gandul garbanzo lenteja bean",
  legumbre: "grano legumbre legume habichuela frijol gandul garbanzo lenteja bean",
  legume: "grano legumbre legume habichuela frijol gandul garbanzo lenteja bean",
  vianda: "vianda yuca yautia name batata platano guineo pana malanga",
  fruta: "fruta fruit mango pina coco guayaba parcha lechosa china acerola tamarindo guanabana fresa mamey carambola",
  // A la parrilla: "bbq", "barbacoa", "carbón", "parrilla" y "grill" traen también lo demás que se hace al fuego.
  parrilla: "parrilla carbon bbq barbacoa grill grilled brasa pincho ahumado",
  carbon: "parrilla carbon bbq barbacoa grill grilled brasa pincho ahumado",
  bbq: "parrilla carbon bbq barbacoa grill grilled brasa pincho ahumado",
  barbacoa: "parrilla carbon bbq barbacoa grill grilled brasa pincho ahumado",
  grill: "parrilla carbon bbq barbacoa grill grilled brasa pincho ahumado",
  // Empanados: "pechuga empanada" incluye milanesas, parmesanas y panko.
  empanado: "empanado empanada milanesa parmesana panko breaded cordon",
  empanada: "empanado empanada milanesa parmesana panko breaded",
  breaded: "empanado empanada milanesa parmesana panko breaded",
  tropical: "tropical mango pina coco guayaba parcha lechosa guanabana tamarindo acerola mamey carambola",
  fruit: "fruta fruit mango pina coco guayaba parcha lechosa china acerola tamarindo guanabana fresa mamey carambola"
};

/* Categorías por su nombre o por palabras afines. */
const S_CATS = {
  // Sólo palabras que nombran la categoría: un ingrediente ("habichuela", "queso") ya no trae TODA la categoría,
  // sino las recetas que lo llevan.
  sopas: "sopa soup caldo asopao sopon sancocho", arroces: "arroz rice", carnes: "carne meat",
  aves: "ave poultry", pescados: "pescado fish marisco seafood", ensaladas: "ensalada salad",
  vegetales: "vegetal vegetable verdura vianda", postres: "postre dessert dulce sweet", bebidas: "bebida drink refresco",
  jugos: "jugo juice", cocteles: "coctel cocktail trago bebida alcoholica", panes: "pan bread",
  salsas: "salsa sauce aderezo dip adobo marinada marinade sazon seasoning rub", entremeses: "entremes entremeses aperitivo appetizer picadera picaderas picar picoteo botana bocadito snack fritura fritter frituras",
  frutas: "fruta fruit", cereales: "cereal", granos: "grano legumbre legume",
  huevos: "huevo egg", bizcochos: "bizcocho cake postre dessert", galletitas: "galleta cookie postre dessert",
  pasteles_dulces: "pie postre dessert hojaldre", emparedados: "sandwich emparedado", calientes: "te tea infusion caliente", pastas: "pasta"
};

/* Exclusiones que corresponden a alérgenos de advisories.js. */
const S_ALLERGEN = {
  gluten: ["gluten"], trigo: ["gluten"], wheat: ["gluten"], harina: ["gluten"],
  leche: ["milk"], lactosa: ["milk"], lacteo: ["milk"], dairy: ["milk"], milk: ["milk"], lactose: ["milk"],
  huevo: ["egg"], egg: ["egg"], pescado: ["fish"], fish: ["fish"],
  marisco: ["crustacean", "mollusc"], seafood: ["crustacean", "mollusc"], shellfish: ["crustacean", "mollusc"],
  nuez: ["treenut", "peanut"], nut: ["treenut", "peanut"], almendra: ["treenut"], mani: ["peanut"], peanut: ["peanut"],
  ajonjoli: ["sesame"], sesame: ["sesame"], soya: ["soy"], soy: ["soy"], coco: ["coconut"], coconut: ["coconut"]
};

const S_MEAT_RX = /\b(pollo|chicken|cerdo|pork|res|beef|carne|meat|jamon|ham(?!burg)|tocin|bacon|salchich|sausage|longaniza|chorizo|pavo|turkey|pernil|lechon|chuleta|chicharron|mollej|higado|gandinga|morcilla|cabro|conejo|cordero|lamb|pato|duck|codorni|quail|panceta|guinea|gallina|pescado|fish|bacalao|cod|atun|tuna|sardina|salmon|camaron|shrimp|langost|lobster|pulpo|octopus|calamar|squid|carrucho|conch|juey|crab|ostion|oyster|ceti|mero|chillo|(?<!ron )dorado|sierra|rinon|lengua|rabo|patita|cuero|mondongo|jamonilla|corned|carne bif)/;
const sIsAlcohol = (r) => getAdvisories(r).alerts.some((a) => ["alcoholDrink", "alcoholCooked", "alcoholRaw"].includes(a.key));

/* Ideas: palabras que no son ingredientes sino lo que la persona quiere. */
const S_IDEAS = [
  { words: "navidad navideno christmas parranda", label: { es: "Navidad", en: "Christmas" },
    test: (r, x) => /coquito|pastel(es)? de|pasteles veganos|pernil|lechon|gandul|tembleque|arroz con dulce|ponche|majarete|morcilla|pitorro|bili|turron|guineito|cazuela|mazamorra|sorrel|jamaica|nispero|hojaldre boricua|navideno|christmas/.test(x.nameAll) },
  { words: "playa beach kiosko kiosco chinchorro", label: { es: "Playa y kioscos", en: "Beach and kiosks" },
    test: (r, x) => r.category === "entremeses" || /fritura|calamar|coco loco|coco frio|piragua|alcapurria|bacalaito|empanadilla|pastelillo|arepa|chicharrones de pescado|chillo frito|pescado frito/.test(x.nameAll) || /kiosco|playa|chinchorro|beach|kiosk/.test(x.stepsAll) },
  { words: "desayuno desayunar breakfast", label: { es: "Desayuno", en: "Breakfast" },
    test: (r) => ["huevos", "cereales", "calientes", "panes"].includes(r.category) },
  { words: "rapido rapida facil sencillo quick fast easy simple", label: { es: "Rápidas (30 min o menos)", en: "Quick (30 min or less)" },
    test: (r, x, ctx) => ctx.isQuick(r) },
  { words: "vegetariano vegetariana vegetarian veggie", label: { es: "Vegetarianas", en: "Vegetarian" },
    test: (r, x) => !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(x.ingAll) },
  { words: "vegano vegana veganos veganas vegan", label: { es: "Veganas (sin carne, lácteos, huevo ni miel)", en: "Vegan (no meat, dairy, eggs or honey)" },
    test: (r, x) => !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(x.ingAll) &&
      !/\b(miel|honey|gelatina|gelatin|mantequilla|butter|leche|milk|queso|cheese|crema|cream|huevos?|eggs?|yemas?|claras?|yogur|mayonesa|mayo)\b/.test(x.ingAll.replace(/(mayonesa|mayo|quesos?|crema|mantequilla|leche|yogur) (veganos?|veganas?|vegetal(es)?)|leche (condensada |evaporada )?de (coco|avena|almendra|soya|arroz)|leche vegetal|crema de coco|(sweetened )?(condensed )?coconut (milk|cream)|(oat|almond|soy|rice|plant) milk|mantequilla de mani|peanut butter|cream of tartar|cremor|veganos?|veganas?|vegan/g, "")) },
  { words: "picante spicy", label: { es: "Picantes", en: "Spicy" },
    test: (r, x) => /picante|pique|spicy|hot pepper|chile/.test(x.ingAll) },
  { words: "frio fria fresco fresca refrescante cold refreshing", label: { es: "Frías y refrescantes", en: "Cold and refreshing" },
    test: (r, x) => ["jugos", "bebidas"].includes(r.category) || /helado|limber|piragua|batida|frio|fria|frozen|mantecado|granizado|colada|daiquiri/.test(x.nameAll) },
  { words: "saludable sano sana ligero ligera liviano healthy light", label: { es: "Ligeras (menos de 350 kcal, sin freír)", en: "Light (under 350 kcal, not fried)" },
    test: (r) => { const e = estimateNutrition(r); return e.per.kcal < 350 && !e.frying; } },
  { words: "alcohol alcoholico alcoholica boozy", label: { es: "Con alcohol", en: "With alcohol" },
    test: (r) => sIsAlcohol(r) },
  { words: "mocktail mocktails", label: { es: "Tragos sin alcohol", en: "Alcohol-free drinks" },
    test: (r) => ["bebidas", "jugos", "cocteles"].includes(r.category) && !sIsAlcohol(r) },
  { words: "nino ninos kid kids infantil", label: { es: "Para niños (sin alcohol ni cafeína)", en: "Kid-friendly (no alcohol or caffeine)" },
    // Tampoco los tés que no son para niños (poleo, anamú, anís estrellado, orégano brujo…).
    test: (r) => !getAdvisories(r).alerts.some((a) => ["alcoholDrink", "alcoholCooked", "alcoholRaw", "caffeine", "rawEgg", "rawFish", "starAnise"].includes(a.key)) &&
      !(typeof TEA_INFO !== "undefined" && TEA_INFO[r.id] && (TEA_HIGH.has(r.id) || /niños/.test(TEA_INFO[r.id].es[1]))) }
].map((idea) => ({ ...idea, words: idea.words.split(" ").map(sStem) }));

/* ---------------------------------------------------------------- índice ---- */

const sIndexCache = new Map();
let sVocab = null;

function sIndex(r) {
  let x = sIndexCache.get(r.id);
  if (x) return x;
  const name = `${r.name.es} ${r.name.en}`;
  const ing = `${r.ingredients.es.join(" ")} ${r.ingredients.en.join(" ")}`;
  // Los tés también se encuentran por su uso tradicional ("té para los nervios", "té para dormir").
  const tea = typeof TEA_INFO !== "undefined" && TEA_INFO[r.id] ? ` ${TEA_INFO[r.id].es[0]} ${TEA_INFO[r.id].en[0]}` : "";
  const steps = `${r.steps.es.join(" ")} ${r.steps.en.join(" ")}${tea}`;
  x = {
    name: new Set(sTokens(name)), ing: new Set(sTokens(ing)), steps: new Set(sTokens(steps)),
    nameAll: sNorm(name), ingAll: sNorm(ing), stepsAll: sNorm(steps)
  };
  sIndexCache.set(r.id, x);
  return x;
}

function sGetVocab() {
  if (sVocab && sVocab.n === recipes.length) return sVocab.words;
  // Palabra → cuánto aparece (en nombres vale 5, en ingredientes 1), para preferir la más común al corregir.
  const freq = new Map();
  recipes.forEach((r) => { const x = sIndex(r); x.name.forEach((w) => freq.set(w, (freq.get(w) || 0) + 5)); x.ing.forEach((w) => freq.set(w, (freq.get(w) || 0) + 1)); });
  S_GROUPS.forEach((g) => g.forEach((w) => { if (!freq.has(w)) freq.set(w, 0); }));
  // Palabras del uso tradicional de los tés (catarro, presión, nervios…): conocidas, no se corrigen.
  if (typeof TEA_INFO !== "undefined") Object.values(TEA_INFO).forEach((t) => sTokens(`${t.es[0]} ${t.en[0]}`).forEach((w) => { if (!freq.has(w)) freq.set(w, 0); }));
  Object.values(S_CATS).forEach((v) => v.split(" ").forEach((w) => { const k = sStem(w); if (!freq.has(k)) freq.set(k, 0); }));
  // Clave fonética → la palabra más común que suena así (para corregir "poyo" → "pollo").
  const phon = new Map();
  freq.forEach((f, w) => { const k = sPhon(w); const cur = phon.get(k); if (!cur || f > freq.get(cur)) phon.set(k, w); });
  sVocab = { n: recipes.length, words: [...freq.keys()], freq, phon };
  return sVocab.words;
}

/* Distancia de edición (para corregir errores de escritura). */
function sDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      best = Math.min(best, cur[j]);
    }
    if (best > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

function sVariants(w) {
  const out = new Set([w]);
  S_GROUPS.forEach((g) => { if (g.includes(w)) g.forEach((v) => out.add(v)); });
  return [...out];
}
/* Lo que incluye un término general ("marisco" → camarón, pulpo…): cuenta la mitad. */
/* Claves también en plural ("legumbres" → legumbr), para que la ampliación no dependa de cómo se escriba. */
const S_EXPAND_KEYS = new Map(Object.keys(S_EXPAND).flatMap((k) => [[k, k], [sStem(k + "s"), k], [sStem(k + "es"), k]]));
const sWeak = (w) => {
  const k = S_EXPAND_KEYS.get(w);
  return k ? S_EXPAND[k].split(" ").map(sStem).filter((v) => v !== w) : [];
};

const sCatsFor = (w) => Object.keys(S_CATS).filter((cat) => S_CATS[cat].split(" ").map(sStem).includes(w));
const sIdeaFor = (w) => S_IDEAS.find((idea) => idea.words.includes(w));
/* "sin horno" / "no bake": recetas cuyos pasos no usan el horno (no es excluir la palabra "horno"). */
const S_NOBAKE = { words: [], label: { es: "Sin horno", en: "No-bake" },
  test: (r, x) => !/\bhorno\b|\bhornee\b|\bhornea|\boven\b|\bbake\b|\bbaked\b/.test(x.stepsAll) };

/* ---------------------------------------------------------------- consulta ---- */

/**
 * smartSearch(query, ctx) → null (nada que buscar) o
 * { scores: Map<id, número>, terms, excludes, ideas, corrections, partial }.
 * ctx: { isQuick(r), lang } que aporta la interfaz.
 */
/* Comidas de dos palabras que son UNA ("sweet potato" no es "dulce" + "papa"): se juntan antes de buscar. */
const S_PHRASES = [
  [/\bsweet potato(es)?\b/g, "batata"], [/\bice creams?\b/g, "helado"], [/\bpassion ?fruits?\b/g, "parcha"],
  [/\bstar ?fruits?\b/g, "carambola"], [/\bpigeon peas?\b/g, "gandul"], [/\bsalt(ed)? cod(fish)?\b/g, "bacalao"],
  [/\bpork chops?\b/g, "chuleta"], [/\bbread ?fruits?\b/g, "pana"], [/\bsour oranges?\b/g, "naranja agria"],
  [/\bgreen bananas?\b/g, "guineo verde"], [/\b(sweet|ripe) plantains?\b/g, "amarillo"], [/\bhot dogs?\b/g, "salchicha"],
  [/\bblack beans?\b/g, "habichuela negra"], [/\bred beans?\b/g, "habichuela roja"], [/\bcorned beef\b/g, "carne bif"],
  [/\bpapas? dulces?\b/g, "batata"]
];

function smartSearch(query, ctx) {
  let qText = sNorm(query);
  for (const [rx, to] of S_PHRASES) qText = qText.replace(rx, to);
  const words = qText.split(/\s+/).filter(Boolean);
  // "Adobo sin Sal", "Piña Colada (Sin Alcohol)": si lo escrito es parte del nombre de una receta, "sin" no excluye.
  const qn = words.join(" ");
  // Sólo cuando hay una palabra de exclusión; los nombres se comparan sin paréntesis ni signos.
  const sPlain = (t) => ` ${sNorm(t).replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim()} `;
  const hasNeg = words.some((w) => ["sin", "no", "without", "libre", "free"].includes(w));
  const nameHas = (r) => sPlain(r.name.es).includes(` ${qn} `) || sPlain(r.name.en).includes(` ${qn} `);
  // "sin horno" a secas es la idea "Sin horno", aunque un nombre lo lleve ("Cheesecake… (Sin Horno)").
  const noBakeOnly = /^(sin|no|without) (horno|bake|hornear|baking|oven)$/.test(qn);
  const isName = hasNeg && !noBakeOnly && qn.includes(" ") && recipes.some(nameHas);
  const terms = [], excludes = [], ideas = [], corrections = [];
  const vocab = sGetVocab();
  const vocabSet = new Set(vocab);
  // "salsa para pollo", "postre para niños": lo que va después de "para" es el uso, no el plato.
  let afterPara = false;

  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    if ((w === "para" || w === "for") && terms.length) { afterPara = true; continue; }
    // Exclusiones: "sin X", "no X", "without X", "libre de X", "X free".
    let negate = false;
    if (["sin", "no", "without"].includes(w) && ["horno", "bake", "hornear", "baking", "oven"].includes(words[i + 1])) {
      if (!ideas.includes(S_NOBAKE)) ideas.push(S_NOBAKE);
      i++; continue;
    }
    if (!isName && ["sin", "no", "without", "excepto", "except"].includes(w) && words[i + 1]) { negate = true; w = words[++i]; }
    else if (!isName && w === "libre" && words[i + 1] === "de" && words[i + 2]) { negate = true; i += 2; w = words[i]; }
    else if (!isName && words[i + 1] === "free") { negate = true; i++; }
    const stem = sStem(w);
    if (negate) { excludes.push({ text: w, stem }); continue; }
    if (S_STOP.has(stem) || stem.length < 2) continue;

    const idea = sIdeaFor(stem);
    if (idea) { if (!ideas.includes(idea)) ideas.push(idea); continue; }

    const isLast = i === words.length - 1;
    let variants = sVariants(stem);
    const cats = sCatsFor(stem);
    // Error de escritura: si la palabra no existe en el recetario ni empieza
    // ninguna palabra, se usa la más parecida.
    if (!cats.length && !vocabSet.has(stem) && !(isLast && stem.length >= 3 && vocab.some((v) => v.startsWith(stem)))) {
      const max = stem.length >= 7 ? 2 : stem.length >= 4 ? 1 : 0;
      // Primero, una palabra que suene igual; si no hay, la más parecida al escribirla.
      const sameSound = stem.length >= 3 ? sVocab.phon.get(sPhon(stem)) : null;
      let best = sameSound || null, bestD = sameSound ? 0 : max + 1;
      if (max && !sameSound) for (const v of vocab) {
        const d = sDistance(stem, v, max);
        if (d < bestD || (d === bestD && d <= max && sVocab.freq.get(v) > sVocab.freq.get(best))) { bestD = d; best = v; }
      }
      if (best) { corrections.push({ from: w, to: best }); variants = sVariants(best); }
    }
    terms.push({ text: w, variants, weak: sWeak(variants[0]), cats: cats.length ? cats : sCatsFor(variants[0]), prefix: isLast && stem.length >= 3, use: afterPara });
  }

  if (!terms.length && !excludes.length && !ideas.length) return null;
  // "trago/bebida sin alcohol": se buscan todas las bebidas y la exclusión quita las que llevan alcohol.
  if (excludes.some((e) => ["alcohol", "alcoholico", "alcoholica", "ron", "rum", "licor"].includes(e.stem))) {
    terms.forEach((t) => { if (t.cats.includes("cocteles")) t.cats = ["bebidas", "jugos", "cocteles"]; });
  }

  // Si lo de antes de "para" es una categoría, se busca en ella y el uso sólo ordena.
  const headCats = terms.filter((t) => !t.use).flatMap((t) => t.cats);
  const scoped = headCats.length > 0 && terms.some((t) => t.use);
  const required = scoped ? terms.filter((t) => !t.use).length : terms.length;

  const scoreTerm = (r, x, t) => {
    let s = 0;
    for (const v of t.variants) {
      if (x.name.has(v)) s = Math.max(s, 6);
      else if (x.ing.has(v)) s = Math.max(s, 3);
      else if (x.steps.has(v)) s = Math.max(s, 1);
      if (s < 4 && t.prefix && v.length >= 3) {
        for (const tok of x.name) if (tok.startsWith(v)) { s = Math.max(s, 4); break; }
        if (s < 2) for (const tok of x.ing) if (tok.startsWith(v)) { s = Math.max(s, 2); break; }
      }
    }
    if (s < 3) for (const v of t.weak) {
      if (x.name.has(v)) s = Math.max(s, 3);
      else if (x.ing.has(v)) s = Math.max(s, 1.5);
    }
    if (t.cats.includes(r.category)) s = Math.max(s, 2);
    return s;
  };

  const excluded = (r, x) => excludes.some((e) => {
    const allergens = S_ALLERGEN[e.stem];
    if (allergens && getAdvisories(r).allergens.some((a) => allergens.includes(a.key))) return true;
    // Para alérgenos, la palabra en "sin gluten", "gluten-free"… no cuenta como que lo lleva.
    if (allergens) {
      const vs = [...sVariants(e.stem), ...sWeak(e.stem)].filter((v) => v.length > 2);
      const neg = new RegExp(`\\b(sin|libre de|without|no) (${vs.join("|")})\\w*|\\b(${vs.join("|")})\\w*[- ]free`, "g");
      const txt = (x.nameAll + " " + x.ingAll).replace(neg, " ");
      return vs.some((v) => new RegExp(`\\b${v}`).test(txt));
    }
    if (["alcohol", "alcoholico", "alcoholica", "ron", "rum", "licor", "liquor", "booze"].includes(e.stem)) return sIsAlcohol(r);
    if (["carne", "meat"].includes(e.stem)) return ["carnes", "aves", "pescados"].includes(r.category) || S_MEAT_RX.test(x.ingAll);
    return [...sVariants(e.stem), ...sWeak(e.stem)].some((v) => x.ing.has(v) || x.name.has(v));
  });

  // La frase para desempatar, con las palabras ya corregidas ("polo" → "pollo"), para que una
  // búsqueda con error ordene igual que la bien escrita.
  const fixed = new Map(corrections.map((c) => [c.from, c.to]));
  const phrase = words.map((w) => fixed.get(w) || w).join(" ");
  const run = (needAll) => {
    const scores = new Map();
    for (const r of recipes) {
      const x = sIndex(r);
      if (excluded(r, x)) continue;
      if (!ideas.every((idea) => idea.test(r, x, ctx))) continue;
      if (scoped && !headCats.includes(r.category)) continue;
      let total = 0, hits = 0, reqHits = 0;
      for (const t of terms) {
        const s = scoreTerm(r, x, t);
        if (s) {
          hits++; total += s; if (!scoped || !t.use) reqHits++;
          // La palabra nombra la categoría de la receta ("arroz" → Arroces): éstas primero, antes que "Arroz con Dulce".
          if (t.cats.includes(r.category) && s > 2) total += 2;
        }
      }
      if (terms.length && (needAll ? reqHits < required : hits === 0)) continue;
      // Desempates: el nombre contiene la frase buscada tal cual, o empieza con ella.
      if (phrase.length > 2) {
        const nm = ` ${sNorm(r.name.es)} ${sNorm(r.name.en)} `;
        if (nm.includes(` ${phrase} `) || nm.includes(` ${phrase}`)) total += 3;
        if (sNorm(r.name.es).startsWith(phrase) || sNorm(r.name.en).startsWith(phrase)) total += 2;
      }
      // Cuanto más del nombre es lo buscado, mejor: "Arroz con Pollo" antes que "Sopón de Pollo con Arroz".
      if (terms.length) {
        const nameWords = sTokens(r.name.es).filter((w) => !S_STOP.has(w));
        const covered = nameWords.filter((w) => terms.some((t) => t.variants.includes(w))).length;
        if (nameWords.length) total += (3 * covered) / nameWords.length;
      }
      scores.set(r.id, total + hits * 0.5 + 0.01);
    }
    return scores;
  };

  let scores = run(true), partial = false;
  if (!scores.size && terms.length > 1) { scores = run(false); partial = scores.size > 0; }
  // Lo escrito es parte de un nombre ("pina colada sin alcohol"): sólo esas recetas, aunque una palabra parezca una idea.
  if (isName) {
    const named = new Map();
    for (const r of recipes) if (nameHas(r)) named.set(r.id, (scores.get(r.id) || 0) + 20);
    return { scores: named, terms, excludes: [], ideas: [], corrections, partial: false };
  }
  // "Vegano": primero las recetas que lo son por nombre (flan vegano, coquito vegano…).
  if (ideas.some((i) => i.label.en.startsWith("Vegan ("))) {
    for (const r of recipes) if (scores.has(r.id) && /vegan/.test(sNorm(r.name.es + " " + r.name.en))) scores.set(r.id, scores.get(r.id) + 3);
  }
  // "Trago sin alcohol": primero las versiones sin alcohol de los tragos (mojito, daiquirí, coquito… sin alcohol).
  if (excludes.some((e) => ["alcohol", "alcoholico", "alcoholica", "ron", "rum", "licor"].includes(e.stem)) || ideas.some((i) => i.label.en === "Alcohol-free drinks")) {
    for (const r of recipes) {
      if (scores.has(r.id) && /sin alcohol|alcohol-free|virgin/.test(sNorm(r.name.es + " " + r.name.en))) scores.set(r.id, scores.get(r.id) + 3);
    }
  }
  return { scores, terms, excludes, ideas, corrections, partial };
}
