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

/* Plural → singular aproximado ("limones" → "limon", "tomates" → "tomate"). */
function sStem(w) {
  if (w.length > 4 && /[nrldz]es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}
const sTokens = (s) => sNorm(s).split(/\s+/).filter((w) => w.length > 1).map(sStem);

/* Palabras que no aportan a la búsqueda. */
const S_STOP = new Set(("y e o u de del la el los las lo un una unos unas con para por a al en que algo alguna algun " +
  "receta recetas plato platos comida quiero quisiera busco buscar hacer preparar me mi como tipo estilo bien muy mas " +
  "sin no libre excepto without free except " +
  "and or of the a an with for to in some any recipe recipes dish dishes food want make how style very").split(" ").map(sStem));

/* Sinónimos y traducciones (simétricos dentro de cada grupo). */
const S_GROUPS = [
  "china naranja orange", "guineo banana banano", "platano plantain", "habichuela frijol bean judia poroto",
  "gandul guandu pigeon", "cerdo puerco chancho pork marrano", "res beef vaca", "pollo chicken", "gallina hen",
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
  "jengibre ginger", "canela cinnamon", "vainilla vanilla", "carambola starfruit", "mamey", "acerola cherry",
  "chuleta chop", "pernil shoulder", "lechon suckling", "mariscada", "mofongo", "tostone", "alcapurria", "pastel"
].map((g) => g.split(" ").map(sStem));

/* Ampliaciones en un solo sentido: un término general incluye los particulares. */
const S_EXPAND = {
  marisco: "marisco seafood shellfish camaron langosta pulpo calamar carrucho juey cangrejo ostion almeja mejillon",
  seafood: "marisco seafood shellfish camaron langosta pulpo calamar carrucho juey cangrejo ostion",
  carne: "carne meat res cerdo pollo pavo cabro conejo chuleta pernil lechon bistec",
  meat: "carne meat res cerdo pollo pavo cabro conejo chuleta pernil lechon bistec",
  vianda: "vianda yuca yautia name batata platano guineo pana malanga",
  fruta: "fruta fruit mango pina coco guayaba parcha lechosa china acerola tamarindo guanabana fresa mamey carambola",
  fruit: "fruta fruit mango pina coco guayaba parcha lechosa china acerola tamarindo guanabana fresa mamey carambola"
};

/* Categorías por su nombre o por palabras afines. */
const S_CATS = {
  sopas: "sopa soup caldo asopao sopon sancocho", arroces: "arroz rice habichuela", carnes: "carne meat",
  aves: "ave poultry", pescados: "pescado fish marisco seafood", ensaladas: "ensalada salad",
  vegetales: "vegetal vegetable verdura vianda", postres: "postre dessert dulce sweet", bebidas: "bebida drink refresco",
  jugos: "jugo juice", cocteles: "coctel cocktail trago bebida alcoholica", panes: "pan bread",
  salsas: "salsa sauce aderezo dip", entremeses: "entremes aperitivo appetizer picadera fritura fritter frituras",
  frutas: "fruta fruit almibar", cereales: "cereal avena oatmeal", granos: "grano legumbre legume",
  huevos: "huevo egg queso cheese", bizcochos: "bizcocho cake", galletitas: "galleta cookie",
  pasteles_dulces: "pie", emparedados: "sandwich emparedado", calientes: "te tea infusion caliente", pastas: "pasta"
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

const S_MEAT_RX = /\b(pollo|chicken|cerdo|pork|res|beef|carne|meat|jamon|ham|tocin|bacon|salchich|sausage|longaniza|chorizo|pavo|turkey|pernil|lechon|chuleta|chicharron|mollej|higado|gandinga|morcilla|cabro|conejo|guinea|gallina|pescado|fish|bacalao|cod|atun|tuna|sardina|salmon|camaron|shrimp|langost|lobster|pulpo|octopus|calamar|squid|carrucho|conch|juey|crab|ostion|oyster|ceti|mero|chillo|dorado|sierra|rinon|lengua|rabo|patita|cuero|mondongo|jamonilla|corned|carne bif)/;
const sIsAlcohol = (r) => getAdvisories(r).alerts.some((a) => a.key === "alcoholDrink" || a.key === "alcoholCooked");

/* Ideas: palabras que no son ingredientes sino lo que la persona quiere. */
const S_IDEAS = [
  { words: "navidad navideno christmas parranda", label: { es: "Navidad", en: "Christmas" },
    test: (r, x) => /coquito|pastel(es)? de|pernil|lechon|gandul|tembleque|arroz con dulce|ponche|majarete|morcilla|pitorro|bili|turron|guineito|cazuela|mazamorra|sorrel|jamaica/.test(x.nameAll) },
  { words: "playa beach kiosko kiosco chinchorro", label: { es: "Playa y kioscos", en: "Beach and kiosks" },
    test: (r, x) => r.category === "entremeses" || /fritura|calamar|coco loco|coco frio|piragua|alcapurria|bacalaito|empanadilla|pastelillo|arepa|chicharrones de pescado|chillo frito|pescado frito/.test(x.nameAll) || /kiosco|playa|chinchorro|beach|kiosk/.test(x.stepsAll) },
  { words: "desayuno breakfast manana morning", label: { es: "Desayuno", en: "Breakfast" },
    test: (r) => ["huevos", "cereales", "calientes", "panes"].includes(r.category) },
  { words: "rapido rapida facil sencillo quick fast easy simple", label: { es: "Rápidas (30 min o menos)", en: "Quick (30 min or less)" },
    test: (r, x, ctx) => ctx.isQuick(r) },
  { words: "vegetariano vegetariana vegetarian veggie", label: { es: "Vegetarianas", en: "Vegetarian" },
    test: (r, x) => !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(x.ingAll) },
  { words: "picante spicy", label: { es: "Picantes", en: "Spicy" },
    test: (r, x) => /picante|pique|spicy|hot pepper|chile/.test(x.ingAll) },
  { words: "frio fria fresco fresca refrescante cold refreshing", label: { es: "Frías y refrescantes", en: "Cold and refreshing" },
    test: (r, x) => ["jugos", "bebidas"].includes(r.category) || /helado|limber|piragua|batida|frio|fria|frozen|mantecado|granizado|colada|daiquiri/.test(x.nameAll) },
  { words: "saludable sano sana ligero ligera liviano healthy light", label: { es: "Ligeras (menos de 350 kcal, sin freír)", en: "Light (under 350 kcal, not fried)" },
    test: (r) => { const e = estimateNutrition(r); return e.per.kcal < 350 && !e.frying; } },
  { words: "alcohol alcoholico alcoholica boozy", label: { es: "Con alcohol", en: "With alcohol" },
    test: (r) => sIsAlcohol(r) },
  { words: "nino ninos kid kids infantil", label: { es: "Para niños (sin alcohol ni cafeína)", en: "Kid-friendly (no alcohol or caffeine)" },
    test: (r) => !getAdvisories(r).alerts.some((a) => ["alcoholDrink", "alcoholCooked", "caffeine", "rawEgg", "rawFish"].includes(a.key)) }
].map((idea) => ({ ...idea, words: idea.words.split(" ").map(sStem) }));

/* ---------------------------------------------------------------- índice ---- */

const sIndexCache = new Map();
let sVocab = null;

function sIndex(r) {
  let x = sIndexCache.get(r.id);
  if (x) return x;
  const name = `${r.name.es} ${r.name.en}`;
  const ing = `${r.ingredients.es.join(" ")} ${r.ingredients.en.join(" ")}`;
  const steps = `${r.steps.es.join(" ")} ${r.steps.en.join(" ")}`;
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
  Object.values(S_CATS).forEach((v) => v.split(" ").forEach((w) => { const k = sStem(w); if (!freq.has(k)) freq.set(k, 0); }));
  sVocab = { n: recipes.length, words: [...freq.keys()], freq };
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
const sWeak = (w) => (S_EXPAND[w] ? S_EXPAND[w].split(" ").map(sStem).filter((v) => v !== w) : []);

const sCatsFor = (w) => Object.keys(S_CATS).filter((cat) => S_CATS[cat].split(" ").map(sStem).includes(w));
const sIdeaFor = (w) => S_IDEAS.find((idea) => idea.words.includes(w));

/* ---------------------------------------------------------------- consulta ---- */

/**
 * smartSearch(query, ctx) → null (nada que buscar) o
 * { scores: Map<id, número>, terms, excludes, ideas, corrections, partial }.
 * ctx: { isQuick(r), lang } que aporta la interfaz.
 */
function smartSearch(query, ctx) {
  const words = sNorm(query).split(/\s+/).filter(Boolean);
  const terms = [], excludes = [], ideas = [], corrections = [];
  const vocab = sGetVocab();
  const vocabSet = new Set(vocab);

  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    // Exclusiones: "sin X", "no X", "without X", "libre de X", "X free".
    let negate = false;
    if (["sin", "no", "without", "excepto", "except"].includes(w) && words[i + 1]) { negate = true; w = words[++i]; }
    else if (w === "libre" && words[i + 1] === "de" && words[i + 2]) { negate = true; i += 2; w = words[i]; }
    else if (words[i + 1] === "free") { negate = true; i++; }
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
      let best = null, bestD = max + 1;
      if (max) for (const v of vocab) {
        const d = sDistance(stem, v, max);
        if (d < bestD || (d === bestD && d <= max && sVocab.freq.get(v) > sVocab.freq.get(best))) { bestD = d; best = v; }
      }
      if (best) { corrections.push({ from: w, to: best }); variants = sVariants(best); }
    }
    terms.push({ text: w, variants, weak: sWeak(variants[0]), cats: cats.length ? cats : sCatsFor(variants[0]), prefix: isLast && stem.length >= 3 });
  }

  if (!terms.length && !excludes.length && !ideas.length) return null;
  // "trago/bebida sin alcohol": se buscan todas las bebidas y la exclusión quita las que llevan alcohol.
  if (excludes.some((e) => ["alcohol", "alcoholico", "alcoholica", "ron", "rum", "licor"].includes(e.stem))) {
    terms.forEach((t) => { if (t.cats.includes("cocteles")) t.cats = ["bebidas", "jugos", "cocteles"]; });
  }

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
    if (["alcohol", "alcoholico", "alcoholica", "ron", "rum", "licor", "liquor", "booze"].includes(e.stem)) return sIsAlcohol(r);
    if (["carne", "meat"].includes(e.stem)) return ["carnes", "aves", "pescados"].includes(r.category) || S_MEAT_RX.test(x.ingAll);
    return [...sVariants(e.stem), ...sWeak(e.stem)].some((v) => x.ing.has(v) || x.name.has(v));
  });

  const phrase = words.join(" ");
  const run = (needAll) => {
    const scores = new Map();
    for (const r of recipes) {
      const x = sIndex(r);
      if (excluded(r, x)) continue;
      if (!ideas.every((idea) => idea.test(r, x, ctx))) continue;
      let total = 0, hits = 0;
      for (const t of terms) { const s = scoreTerm(r, x, t); if (s) { hits++; total += s; } }
      if (terms.length && (needAll ? hits < terms.length : hits === 0)) continue;
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
  return { scores, terms, excludes, ideas, corrections, partial };
}
