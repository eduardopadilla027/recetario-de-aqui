// Paso 2 de 2 — node tools/usda/gen.js <fdc.json de resolve.js> js/nutrition-usda.js
const fs = require("fs");
const [inFile, outFile] = process.argv.slice(2);
const data = JSON.parse(fs.readFileSync(inFile, "utf8"));
const r = (v, d = 2) => { const f = 10 ** d; return Math.round((v || 0) * f) / f; };
const KEYS = ["kcal", "p", "c", "s", "fib", "fat", "sat", "na", "chol", "trans", "ca", "fe", "k", "vd"];
const lines = [];
for (const [k, v] of Object.entries(data)) {
  if (!v) continue;
  const vals = KEYS.map((key) => r(v.v[key], key === "na" || key === "k" || key === "ca" || key === "chol" || key === "kcal" ? 0 : 2));
  lines.push(`  ${JSON.stringify(k)}: [${v.fdc}, ${v.ef}, ${JSON.stringify(v.desc)}, ${vals.join(", ")}]`);
}
const out = `/* Recetarios de Aquí — datos oficiales del USDA para js/nutrition.js.
 *
 * GENERADO con tools/usda/ (map.js, resolve.js y gen.js) a partir de USDA FoodData Central, base "SR Legacy"
 * (FoodData_Central_sr_legacy_food_csv_2018-04), descargada de https://fdc.nal.usda.gov.
 * Cada alimento de NUTRI_FOODS (por su primera palabra clave) lleva:
 *   [número FDC, parte comestible (1 = todo; 0.7 = pollo con hueso tal como se compra),
 *    descripción del USDA, y por 100 g comestibles: kcal, proteína, carbohidratos, azúcares,
 *    fibra, grasa, grasa saturada (g), sodio (mg), colesterol (mg), grasa trans (g), calcio (mg),
 *    hierro (mg), potasio (mg) y vitamina D (mcg)].
 * nutrition.js multiplica cada valor por la parte comestible. Los alimentos que no están aquí
 * (productos de Puerto Rico o de marca: sofrito, adobo, sazón, quenepa, malta…) usan el estimado
 * propio de nutrition.js y NUTRI_LOCAL_X. No editar a mano: volver a generar. */
const NUTRI_USDA_SOURCE = { name: "USDA FoodData Central · SR Legacy", release: "2018-04", url: "https://fdc.nal.usda.gov/" };
const NUTRI_USDA = {
${lines.join(",\n")}
};
`;
fs.writeFileSync(outFile, out);
console.log("alimentos:", lines.length);
