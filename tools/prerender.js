/* Recetarios de Aquí · Páginas propias de cada receta para Google y para compartir (v4.30).
 *
 * La app vive en index.html con rutas #/receta/<id>, que Google no indexa por separado (todo
 * lo que va después de # es, para él, la portada). Este script genera, sin dependencias:
 *
 *   receta/<id>.html   una página ligera por receta (sale en https://recetariodeaqui.com/receta/<id>,
 *                      vercel.json → cleanUrls): título, descripción y vista previa propias, la receta
 *                      completa en español y en inglés, datos estructurados schema.org/Recipe (JSON-LD,
 *                      con tiempo activo y total, porciones, ingredientes, pasos, categoría y calorías
 *                      estimadas) y el botón "Abrir en la app" (#/receta/<id>: porciones, modo cocina…).
 *   recetas.html       /recetas: el índice de todas las recetas por categoría (para leer sin JavaScript y para Google).
 *   sitemap.xml        la portada, /recetas y todas las recetas (con la fecha de ingreso de cada una).
 *   robots.txt         todo se puede indexar menos /api/; dice dónde está el sitemap.
 *
 * Uso (desde la carpeta del proyecto, después de añadir o cambiar recetas y antes de publicar):
 *   node tools/prerender.js
 * Borra las páginas de recetas que ya no existen. ARQUITECTURA.md §7.15. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE = "https://recetariodeaqui.com";
const OUT = path.join(ROOT, "receta");

/* ── Cargar los datos como lo hace el navegador (scripts clásicos que comparten el ámbito global) ── */
const noop = () => {};
const ctx = {
  console, setTimeout, clearTimeout,
  localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
  document: { addEventListener: noop, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], documentElement: {} },
  window: { matchMedia: () => ({ matches: false }), addEventListener: noop },
  history: {}, location: { hash: "" }, navigator: {}
};
vm.createContext(ctx);
const files = ["recipes", "recipes-extra", "recipes-2", "recipes-3", "recipes-4", "recipes-5", "nutrition-usda", "nutrition",
  "advisories", "substitutes", "search", "families", "pairings", "app", "recipe-dates"];
vm.runInContext(files.map((f) => fs.readFileSync(path.join(ROOT, "js", `${f}.js`), "utf8")).join("\n;\n") +
  "\n;globalThis.__x = { recipes, estimateNutrition, getAdvisories, ADVICE_TEXT, translations, categoryOrder, WAIT_T, RECIPE_ADDED: typeof RECIPE_ADDED === 'undefined' ? {} : RECIPE_ADDED };", ctx);
const { recipes, estimateNutrition, getAdvisories, ADVICE_TEXT, translations, categoryOrder, WAIT_T, RECIPE_ADDED } = ctx.__x;

/* ── Utilidades ── */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const iso = (min) => { const h = Math.floor(min / 60), m = Math.round(min % 60); return `PT${h ? `${h}H` : ""}${m || !h ? `${m}M` : ""}`; };
function fmtMin(min, lang) {
  if (min >= 2 * 1440) { const d = Math.round(min / 1440); return lang === "es" ? `${d} días` : `${d} days`; }
  const h = Math.floor(min / 60), m = Math.round(min % 60);
  return h ? `${h} h${m ? ` ${m} min` : ""}` : `${m} min`;
}
function timeText(r, lang) {
  if (r.total === r.active) return fmtMin(r.active, lang);
  const w = r.wait ? ` (${WAIT_T[lang][r.wait] || r.wait})` : "";
  return lang === "es" ? `${fmtMin(r.active, "es")} de cocina · ${fmtMin(r.total, "es")} en total${w}` : `${fmtMin(r.active, "en")} cooking · ${fmtMin(r.total, "en")} total${w}`;
}
const cut = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/[\s,;:]+\S*$/, "")}…`);
// "2 tazas de arroz" → "arroz" (para la descripción)
const mainWord = (line) => line.replace(/^[\d½¼¾⅓⅔⅛\s/.,-]+/, "").replace(/^(tazas?|cucharadas?|cucharaditas?|libras?|onzas?|latas?|sobres?|dientes?|paquetes?|ramitas?|hojas?|pizcas?|unidades?)\s+(de\s+)?/i, "").replace(/,.*$/, "").replace(/\(.*?\)/g, "").trim();

function description(r) {
  const tr = translations.es;
  const ings = r.ingredients.es.filter((l) => !/al gusto|opcional|para servir|para freír/i.test(l)).slice(0, 4).map(mainWord).filter(Boolean);
  return cut(`${r.name.es}: receta puertorriqueña paso a paso para ${r.servings} ${r.servings === 1 ? "porción" : "porciones"}. Lleva ${ings.join(", ")}. Lista en ${fmtMin(r.total, "es")}. ${tr.categories[r.category]}.`, 158);
}

function jsonLd(r, kcal, desc) {
  const tr = translations.es;
  const data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: r.name.es,
    alternateName: r.name.en,
    description: desc,
    url: `${SITE}/receta/${r.id}`,
    inLanguage: "es",
    author: { "@type": "Organization", name: "Recetarios de Aquí", url: SITE },
    publisher: { "@type": "Organization", name: "Recetarios de Aquí", url: SITE },
    recipeCuisine: "Puertorriqueña",
    recipeCategory: tr.categories[r.category],
    keywords: `${r.name.es}, receta puertorriqueña, cocina boricua, ${tr.categories[r.category]}`,
    cookTime: iso(r.active),
    totalTime: iso(r.total),
    recipeYield: `${r.servings} ${r.servings === 1 ? "porción" : "porciones"}`,
    recipeIngredient: r.ingredients.es,
    recipeInstructions: r.steps.es.map((s, i) => ({ "@type": "HowToStep", position: i + 1, text: s, url: `${SITE}/receta/${r.id}#paso-${i + 1}` }))
  };
  if (RECIPE_ADDED[r.id]) data.datePublished = RECIPE_ADDED[r.id];
  if (kcal) data.nutrition = { "@type": "NutritionInformation", calories: `${kcal} calories`, servingSize: "1 porción" };
  // < y > escapados: el JSON va dentro de <script>.
  return JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

function page(r, related) {
  const tr = translations.es;
  const est = estimateNutrition(r);
  const kcal = est.counted ? Math.round(est.per.kcal / 10) * 10 : 0;
  const adv = getAdvisories(r);
  const allergens = adv.allergens.map((a) => a.key);
  const desc = description(r);
  const url = `${SITE}/receta/${r.id}`;
  const title = `${r.name.es} — Receta puertorriqueña | Recetarios de Aquí`;
  const cat = tr.categories[r.category];
  const breadcrumb = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Recetarios de Aquí", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: r.name.es, item: url }
    ]
  }).replace(/</g, "\\u003c");
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${url}">
  <meta name="theme-color" content="#FBF6EE">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Recetarios de Aquí · Cocina Boricua">
  <meta property="og:title" content="${esc(r.name.es)} · Receta puertorriqueña">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/icons/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Recetarios de Aquí: recetas de la cocina puertorriqueña">
  <meta property="og:locale" content="es_PR">
  <meta property="og:locale:alternate" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(r.name.es)} · Receta puertorriqueña">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${SITE}/icons/og-image.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png">
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
  <link rel="stylesheet" href="/css/receta.css">
  <script type="application/ld+json">${jsonLd(r, kcal, desc)}</script>
  <script type="application/ld+json">${breadcrumb}</script>
</head>
<body>
  <header class="top"><a class="brand" href="/">Recetarios de Aquí <span>Cocina Boricua</span></a></header>
  <main class="wrap">
    <nav class="crumbs" aria-label="Migas de pan"><a href="/">Inicio</a> › <a href="/?cat=${r.category}#recetas">${esc(cat)}</a></nav>
    <h1>${esc(r.name.es)}</h1>
    <p class="en-name" lang="en">${esc(r.name.en)}</p>
    <ul class="facts">
      <li><strong>Tiempo:</strong> ${esc(timeText(r, "es"))}</li>
      <li><strong>Porciones:</strong> ${r.servings}</li>
      ${kcal ? `<li><strong>Calorías:</strong> ≈ ${kcal} por porción (estimado)</li>` : ""}
      ${allergens.length ? `<li><strong>Contiene:</strong> ${esc(allergens.map((k) => ADVICE_TEXT.es.allergens[k] || k).join(", "))}</li>` : ""}
    </ul>
    <p><a class="open" href="/#/receta/${encodeURIComponent(r.id)}">Abrir en la app: ajustar porciones, modo cocina, nutrición y alergias</a></p>
    <section>
      <h2>Ingredientes</h2>
      <ul class="ings">${r.ingredients.es.map((l) => `\n        <li>${esc(l)}</li>`).join("")}
      </ul>
    </section>
    <section>
      <h2>Preparación</h2>
      <ol class="steps">${r.steps.es.map((s, i) => `\n        <li id="paso-${i + 1}">${esc(s)}</li>`).join("")}
      </ol>
    </section>
    <section lang="en" class="english">
      <h2>In English: ${esc(r.name.en)}</h2>
      <p><strong>Time:</strong> ${esc(timeText(r, "en"))} · <strong>Servings:</strong> ${r.servings}</p>
      <h3>Ingredients</h3>
      <ul class="ings">${r.ingredients.en.map((l) => `\n        <li>${esc(l)}</li>`).join("")}
      </ul>
      <h3>Preparation</h3>
      <ol class="steps">${r.steps.en.map((s) => `\n        <li>${esc(s)}</li>`).join("")}
      </ol>
    </section>
    <p class="note">La información nutricional y los alérgenos son estimados a partir de los ingredientes. No es consejo médico.</p>
    ${related.length ? `<section class="related">
      <h2>Más recetas: ${esc(cat)}</h2>
      <ul>${related.map((x) => `\n        <li><a href="/receta/${encodeURIComponent(x.id)}">${esc(x.name.es)}</a></li>`).join("")}
      </ul>
    </section>` : ""}
  </main>
  <footer class="foot">
    <p><a href="/">Todas las recetas</a> · <a href="/#/glosario">Glosario</a> · <a href="/#/terminos">Términos</a> · <a href="/#/privacidad">Privacidad</a></p>
    <p>Recetarios de Aquí · Cocina tradicional puertorriqueña · <a href="mailto:recetariodeaqui@gmail.com">recetariodeaqui@gmail.com</a></p>
  </footer>
</body>
</html>
`;
}


/* ── Escribir ── */
fs.mkdirSync(OUT, { recursive: true });
const keep = new Set();
const byCat = new Map();
for (const r of recipes) { if (!byCat.has(r.category)) byCat.set(r.category, []); byCat.get(r.category).push(r); }
for (const r of recipes) {
  const sib = byCat.get(r.category);
  const i = sib.indexOf(r);
  const related = [1, 2, 3, 4, 5, 6].map((k) => sib[(i + k) % sib.length]).filter((x) => x !== r);
  const file = `${r.id}.html`;
  keep.add(file);
  fs.writeFileSync(path.join(OUT, file), page(r, [...new Set(related)]));
}
let removed = 0;
for (const f of fs.readdirSync(OUT)) if (f.endsWith(".html") && !keep.has(f)) { fs.unlinkSync(path.join(OUT, f)); removed++; }

/* recetas.html (/recetas): el índice de todas las recetas por categoría, con enlaces a sus páginas. */
const tr = translations.es;
fs.writeFileSync(path.join(ROOT, "recetas.html"), `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todas las recetas puertorriqueñas (${recipes.length}) — Recetarios de Aquí</title>
  <meta name="description" content="Las ${recipes.length} recetas de Recetarios de Aquí, por categoría: ${categoryOrder.map((c) => tr.categories[c]).slice(0, 8).join(", ")} y más. Cocina tradicional puertorriqueña paso a paso, en español e inglés.">
  <link rel="canonical" href="${SITE}/recetas">
  <meta name="theme-color" content="#FBF6EE">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Todas las recetas · Recetarios de Aquí">
  <meta property="og:url" content="${SITE}/recetas">
  <meta property="og:image" content="${SITE}/icons/og-image.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png">
  <link rel="stylesheet" href="/css/receta.css">
</head>
<body>
  <header class="top"><a class="brand" href="/">Recetarios de Aquí <span>Cocina Boricua</span></a></header>
  <main class="wrap">
    <h1>Todas las recetas (${recipes.length.toLocaleString("es-PR")})</h1>
    <p><a class="open" href="/">Abrir el recetario: buscador, filtros y planes</a></p>
    ${categoryOrder.filter((c) => byCat.has(c)).map((c) => `<section class="related" id="${c}">
      <h2>${esc(tr.categories[c])} (${byCat.get(c).length})</h2>
      <ul>${[...byCat.get(c)].sort((a, b) => a.name.es.localeCompare(b.name.es, "es")).map((r) => `<li><a href="/receta/${encodeURIComponent(r.id)}">${esc(r.name.es)}</a></li>`).join("")}</ul>
    </section>`).join("\n    ")}
  </main>
  <footer class="foot"><p><a href="/">Inicio</a> · <a href="/#/glosario">Glosario</a> · <a href="/#/terminos">Términos</a> · <a href="/#/privacidad">Privacidad</a></p></footer>
</body>
</html>
`);

const today = new Date().toISOString().slice(0, 10);
const urls = [
  `  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
  `  <url><loc>${SITE}/recetas</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`,
  ...categoryOrder.flatMap((c) => byCat.get(c) || []).map((r) =>
    `  <url><loc>${SITE}/receta/${encodeURIComponent(r.id)}</loc>${RECIPE_ADDED[r.id] ? `<lastmod>${RECIPE_ADDED[r.id]}</lastmod>` : ""}<priority>0.8</priority></url>`)
];
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(ROOT, "robots.txt"), `# Recetarios de Aquí · generado por tools/prerender.js\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`${keep.size} páginas en receta/ (${removed} borradas), sitemap.xml con ${urls.length} direcciones y robots.txt.`);
