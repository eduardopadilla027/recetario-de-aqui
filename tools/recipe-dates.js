/* Recetarios de Aquí · Genera js/recipe-dates.js: la fecha en que cada receta entró a la app.
 *
 * Sale del historial de git: la fecha del commit que escribió la línea `id: "…"` de cada receta
 * (git blame). Las recetas que todavía no están en un commit llevan la fecha de hoy.
 * Uso, desde la carpeta del proyecto, después de añadir recetas y antes de hacer commit:
 *   node tools/recipe-dates.js
 * ARQUITECTURA.md §7.8 y §11. (tools/ no se publica: está en .vercelignore.) */

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const files = fs.readdirSync(path.join(root, "js")).filter((f) => /^recipes(-[\w]+)?\.js$/.test(f)).sort();
// Fecha de hoy en la hora local (como git blame --date=short), no en UTC: de noche en Puerto Rico ya es
// "mañana" en UTC y las recetas nuevas salían con un día de más.
const now = new Date();
const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const dates = {};

for (const f of files) {
  let out;
  try {
    out = execFileSync("git", ["blame", "--date=short", "--", `js/${f}`], { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch {
    out = ""; // archivo nuevo, todavía fuera de git
  }
  const lines = out ? out.split("\n") : fs.readFileSync(path.join(root, "js", f), "utf8").split("\n");
  for (const line of lines) {
    const m = line.match(/\bid: "([^"]+)"/);
    if (!m) continue;
    const d = out ? (line.match(/\b(\d{4}-\d{2}-\d{2})\b/) || [])[1] : null;
    const notCommitted = !out || /^0{7,}/.test(line);
    dates[m[1]] = notCommitted || !d ? today : d;
  }
}

const ids = Object.keys(dates).sort();
const body = ids.map((id) => `  ${JSON.stringify(id)}: "${dates[id]}"`).join(",\n");
const header = `/* Recetarios de Aquí · Fecha en que cada receta entró a la app (AAAA-MM-DD).
 * GENERADO por tools/recipe-dates.js a partir del historial de git: no se edita a mano.
 * Sólo lo usa el panel de administración (#/admin → Recetas, js/recipe-admin.js), que lo carga al abrirse. */
`;
fs.writeFileSync(path.join(root, "js", "recipe-dates.js"), `${header}\nconst RECIPE_ADDED = {\n${body}\n};\n`);
const byDay = {};
for (const d of Object.values(dates)) byDay[d] = (byDay[d] || 0) + 1;
console.log(`${ids.length} recetas`, byDay);
