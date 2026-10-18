/* Recetarios de Aquí · Revisión de las recetas antes de publicar (v4.30).
 *
 *   node tools/check-recipes.js
 *
 * Falla (código 1) si alguna receta está incompleta o mal escrita, para que no salga una receta a medias
 * (la app además esconde al cargar las que no tienen ingredientes y pasos en los dos idiomas: recipeComplete,
 * js/app.js). Revisa: id único en kebab-case, categoría conocida, nombre ES/EN, `active` y `total` en minutos
 * (total ≥ active) y `wait` del vocabulario, porciones, ingredientes y pasos en los dos idiomas con el mismo
 * número de líneas y sin líneas vacías, temperaturas sólo en °F (la app pone los °C) y palabras que no van
 * ("mojito isleño": es mojo isleño). Avisa (sin fallar) de ingredientes "al gusto" sin cantidad de partida. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const ctx = {};
vm.createContext(ctx);
const files = ["recipes", "recipes-extra", "recipes-2", "recipes-3", "recipes-4", "recipes-5"];
vm.runInContext(files.map((f) => fs.readFileSync(path.join(ROOT, "js", `${f}.js`), "utf8")).join("\n;\n") + "\n;globalThis.__r = recipes;", ctx);
const recipes = ctx.__r;

const app = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");
const CATS = JSON.parse(app.match(/const categoryOrder = (\[[\s\S]*?\]);/)[1].replace(/'/g, '"'));
const WAITS = ["frio", "congelador", "enfriar", "reposo", "adobo", "remojo", "desalar", "levado", "secado"];
const BANNED = [[/mojito isle/i, "«mojito isleño» es un trago: la salsa es «mojo isleño»"]];
// Sin cantidad está bien para lo que no se mide (sal y pimienta, aceite para freír, adornos, lo opcional).
const NO_QTY_OK = /^(sal|pimienta|aceite|agua|hielo)\b|opcional|para (servir|decorar|adornar|espolvorear|engrasar|untar|freír|acompañar|rebozar|cubrir|enharinar|empanizar|barnizar|la plancha|mojar)/i;
const LEAD = /^(\d|[½¼¾⅓⅔⅛]|Jugo de \d|Ralladura de \d|Cáscara de \d|Pulpa de \d|Una? |Medi[oa] |Pizca)/i;

const errors = [], warns = [];
const ids = new Set();
for (const r of recipes) {
  const where = r && r.id ? r.id : JSON.stringify(r).slice(0, 60);
  const bad = (m) => errors.push(`${where}: ${m}`);
  if (!r.id || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id)) bad("id vacío o no está en kebab-case sin acentos");
  if (ids.has(r.id)) bad("id repetido");
  ids.add(r.id);
  if (!CATS.includes(r.category)) bad(`categoría desconocida «${r.category}»`);
  if (!r.name || !r.name.es || !r.name.en) bad("falta el nombre en español o en inglés");
  if ("time" in r) bad("usa `time` (texto): desde v4.30 son `active` y `total` en minutos");
  if (!Number.isInteger(r.active) || r.active <= 0) bad("`active` debe ser un número entero de minutos");
  if (!Number.isInteger(r.total) || r.total < r.active) bad("`total` debe ser un entero ≥ `active` (incluye nevera, adobo, reposo…)");
  if (r.total > r.active && !WAITS.includes(r.wait)) bad(`con esperas, \`wait\` debe ser uno de: ${WAITS.join(", ")}`);
  if (r.total === r.active && r.wait) bad("`wait` sin espera (total = active)");
  if (!Number.isInteger(r.servings) || r.servings < 1) bad("porciones inválidas");
  for (const part of ["ingredients", "steps"]) {
    const o = r[part];
    if (!o || !Array.isArray(o.es) || !Array.isArray(o.en) || !o.es.length || !o.en.length) { bad(`faltan ${part} en español o en inglés`); continue; }
    if (o.es.length !== o.en.length) bad(`${part}: ${o.es.length} líneas en español y ${o.en.length} en inglés`);
    if ([...o.es, ...o.en].some((l) => typeof l !== "string" || !l.trim())) bad(`${part}: hay una línea vacía`);
    for (const l of [...o.es, ...o.en]) {
      if (/\d\s*°\s*C\b/.test(l)) bad(`${part}: temperatura en °C («${l.slice(0, 50)}»): escriba sólo °F, la app convierte`);
      for (const [rx, msg] of BANNED) if (rx.test(l)) bad(`${part}: ${msg}`);
    }
  }
  if (r.ingredients && Array.isArray(r.ingredients.es)) {
    for (const l of r.ingredients.es) if (/al gusto/i.test(l) && !LEAD.test(l) && !NO_QTY_OK.test(l)) warns.push(`${r.id}: «${l}» sin cantidad de partida (p. ej. "2 cucharadas de …, o al gusto")`);
  }
}

for (const w of warns) console.warn(`aviso  ${w}`);
for (const e of errors) console.error(`ERROR  ${e}`);
console.log(`${recipes.length} recetas revisadas: ${errors.length} errores, ${warns.length} avisos.`);
process.exit(errors.length ? 1 : 0);
