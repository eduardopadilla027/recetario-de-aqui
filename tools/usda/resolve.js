// Paso 1 de 2 — node tools/usda/resolve.js <carpeta del proyecto> <carpeta SR Legacy> <fdc.json>
// Une cada alimento de NUTRI_FOODS con su registro de USDA FoodData Central (SR Legacy, CSV de
// https://fdc.nal.usda.gov/download-datasets) según map.js, y avisa con "DIF" si las calorías cambian más de 25 %.
// Paso 2: node tools/usda/gen.js <fdc.json> js/nutrition-usda.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const [proj, sr, outFile] = process.argv.slice(2);
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(proj, "js/nutrition.js"), "utf8") + "\nthis.NUTRI_FOODS = NUTRI_FOODS;", ctx);
const foods = ctx.NUTRI_FOODS;
const map = require("./map.js");

function csv(file, onRow) {
  const txt = fs.readFileSync(path.join(sr, file), "utf8");
  const lines = txt.split(/\r?\n/);
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const cells = []; let cur = "", q = false;
    const L = lines[i];
    for (let j = 0; j < L.length; j++) {
      const ch = L[j];
      if (ch === '"') {
        if (q && L[j + 1] === '"') { cur += '"'; j++; } else q = !q;
      }
      else if (ch === "," && !q) { cells.push(cur); cur = ""; }
      else cur += ch;
    }
    cells.push(cur);
    onRow(cells);
  }
}
const desc = new Map();
csv("food.csv", (c) => desc.set(c[0], c[2]));
const NUT = { 1008: "kcal", 1003: "p", 1005: "c", 2000: "s", 1079: "fib", 1004: "fat", 1258: "sat", 1093: "na", 1253: "chol", 1257: "trans", 1087: "ca", 1089: "fe", 1092: "k", 1114: "vd" };
const vals = new Map();
csv("food_nutrient.csv", (c) => {
  const k = NUT[c[2]]; if (!k) return;
  if (!vals.has(c[1])) vals.set(c[1], {});
  vals.get(c[1])[k] = Number(c[3]);
});
const all = [...desc.entries()];
const out = {}, report = [];
for (const f of foods) {
  const k0 = f.kw[0];
  if (!(k0 in map)) { report.push(`SIN MAPA  ${k0}`); continue; }
  const m = map[k0];
  if (m === null) { out[k0] = null; report.push(`local     ${k0}`); continue; }
  const rx = new RegExp(m[0], "i");
  const hit = all.find(([, d]) => rx.test(d));
  if (!hit) { report.push(`NO HALLA  ${k0}  /${m[0]}/`); continue; }
  const v = vals.get(hit[0]) || {};
  const ef = m[1];
  const fdcK = (v.kcal || 0) * ef;
  const diff = f.n.kcal ? Math.round(((fdcK - f.n.kcal) / f.n.kcal) * 100) : 0;
  out[k0] = { fdc: +hit[0], ef, desc: hit[1], v };
  report.push(`${Math.abs(diff) > 25 ? "DIF " + String(diff).padStart(4) + "%" : "ok        "} ${k0.padEnd(22)} app ${String(f.n.kcal).padStart(4)} usda ${Math.round(fdcK).toString().padStart(4)}  #${hit[0]} ${hit[1]}`);
}
fs.writeFileSync(outFile, JSON.stringify(out, null, 1));
console.log(report.join("\n"));
