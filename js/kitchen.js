/* Recetarios de Aquí · Mi recetario y Lista de compras.
 *
 * Mi recetario (#/mi-recetario): favoritas, colecciones propias ("Navidad en casa de mami"),
 * notas personales en cada receta y el registro de "la hice" (cuántas veces y cuándo).
 * Lista de compras (#/compras): se arma con recetas (a las porciones elegidas) o con el plan de
 * comidas. Suma los ingredientes repetidos (3 recetas con cebolla → una línea), los agrupa por
 * sección del supermercado y se comparte por WhatsApp, se copia o se imprime.
 *
 * Todo se guarda en este navegador (rcb.kitchen.<uid>) y, con la sesión abierta, en la cuenta
 * (Firestore users/{uid}/data/kitchen, ver firestore.rules), para verlo igual en el celular y en
 * la computadora. Depende de app.js, nutrition.js (findFood, splitIngredient, measurePart) y auth.js. */

const KITCHEN_STORE = "rcb.kitchen";
const KT = {
  es: {
    navMine: "Mi recetario", navShop: "Compras",
    mineTitle: "Mi recetario", mineIntro: "Sus favoritas, sus colecciones, sus notas y las recetas que ya hizo. Se guarda en su cuenta.",
    favs: "Favoritas", cols: "Mis colecciones", cooked: "Las que he hecho", noted: "Con mis notas",
    noFavs: "Todavía no tiene favoritas. Toque el corazón de una receta para guardarla aquí.",
    noCols: "Cree una colección desde cualquier receta con el botón «Colección».",
    noCooked: "Cuando termine una receta, márquela con «La hice» y aparecerá aquí.",
    noNotes: "Las notas que escriba en una receta («menos sal», «la hice con pavo») salen aquí.",
    colBtn: "Colección", colTitle: "Guardar en una colección", colNew: "Nueva colección", colNewPh: "Ej.: Navidad en casa de mami",
    colCreate: "Crear", colRename: "Cambiar nombre", colDelete: "Borrar colección", colConfirmDelete: (n) => `¿Borrar la colección «${n}»? Las recetas no se borran.`,
    colRenamePrompt: "Nombre de la colección:", colCount: (n) => (n === 1 ? "1 receta" : `${n} recetas`), colAdded: (c) => `Guardada en «${c}».`, colRemoved: (c) => `Quitada de «${c}».`,
    notesTitle: "Mis notas", notesPh: "Lo que quiera recordar de esta receta: cambios, trucos, para quién la hizo…", notesSaved: "Nota guardada",
    cookedBtn: "La hice", cookedAgain: "La hice otra vez", cookedToast: "¡Anotado! Buen provecho.",
    cookedInfo: (n, d) => (n === 1 ? `La hizo 1 vez · ${d}` : `La hizo ${n} veces · la última: ${d}`), cookedUndo: "Deshacer",
    shopBtn: "Lista de compras", shopAdded: (n) => `Añadida a la lista de compras (${n} ${n === 1 ? "porción" : "porciones"}).`, shopSee: "Ver la lista",
    shopTitle: "Lista de compras", shopIntro: "Los ingredientes de sus recetas, sumados y por sección del supermercado. Marque lo que ya tiene o ya compró.",
    shopEmpty: "La lista está vacía. Añada recetas con el botón «Lista de compras» de cada receta o desde su plan de comidas.",
    shopRecipes: "Recetas en la lista", shopServ: (n) => (n === 1 ? "1 porción" : `${n} porciones`), shopRemove: (n) => `Quitar ${n} de la lista`,
    shopExtra: "Añadir otra cosa", shopExtraPh: "Ej.: papel de aluminio, café…", shopAdd: "Añadir",
    shopShare: "Compartir", shopCopy: "Copiar", shopPrint: "Imprimir", shopClearDone: "Quitar lo marcado", shopClear: "Vaciar la lista",
    shopConfirmClear: "¿Vaciar toda la lista de compras?", shopCopied: "Lista copiada.", shopLeft: (n, m) => `${n} de ${m} por comprar`,
    shopHeader: "Lista de compras — Recetarios de Aquí", shopFrom: "para",
    aisles: { produce: "Frutas, viandas y vegetales", meat: "Carnes, aves y mariscos", dairy: "Lácteos y huevos", bakery: "Panadería", pantry: "Granos, enlatados y despensa", spices: "Especias, sazones y salsas", drinks: "Bebidas", other: "Otros" }
  },
  en: {
    navMine: "My cookbook", navShop: "Shopping",
    mineTitle: "My cookbook", mineIntro: "Your favorites, collections, notes and the recipes you've cooked. Saved to your account.",
    favs: "Favorites", cols: "My collections", cooked: "Recipes I've cooked", noted: "With my notes",
    noFavs: "No favorites yet. Tap a recipe's heart to keep it here.",
    noCols: "Create a collection from any recipe with the “Collection” button.",
    noCooked: "When you finish a recipe, mark it with “I made it” and it will show up here.",
    noNotes: "Notes you write on a recipe (“less salt”, “made it with turkey”) show up here.",
    colBtn: "Collection", colTitle: "Save to a collection", colNew: "New collection", colNewPh: "E.g. Christmas at mom's",
    colCreate: "Create", colRename: "Rename", colDelete: "Delete collection", colConfirmDelete: (n) => `Delete the “${n}” collection? The recipes aren't deleted.`,
    colRenamePrompt: "Collection name:", colCount: (n) => (n === 1 ? "1 recipe" : `${n} recipes`), colAdded: (c) => `Saved to “${c}”.`, colRemoved: (c) => `Removed from “${c}”.`,
    notesTitle: "My notes", notesPh: "Anything you want to remember about this recipe: changes, tips, who you made it for…", notesSaved: "Note saved",
    cookedBtn: "I made it", cookedAgain: "Made it again", cookedToast: "Noted! Enjoy.",
    cookedInfo: (n, d) => (n === 1 ? `Made it once · ${d}` : `Made it ${n} times · last: ${d}`), cookedUndo: "Undo",
    shopBtn: "Shopping list", shopAdded: (n) => `Added to the shopping list (${n} ${n === 1 ? "serving" : "servings"}).`, shopSee: "See the list",
    shopTitle: "Shopping list", shopIntro: "Your recipes' ingredients, added up and grouped by store section. Check what you already have or bought.",
    shopEmpty: "The list is empty. Add recipes with each recipe's “Shopping list” button or from your meal plan.",
    shopRecipes: "Recipes on the list", shopServ: (n) => (n === 1 ? "1 serving" : `${n} servings`), shopRemove: (n) => `Remove ${n} from the list`,
    shopExtra: "Add something else", shopExtraPh: "E.g. foil, coffee…", shopAdd: "Add",
    shopShare: "Share", shopCopy: "Copy", shopPrint: "Print", shopClearDone: "Remove checked", shopClear: "Clear the list",
    shopConfirmClear: "Clear the whole shopping list?", shopCopied: "List copied.", shopLeft: (n, m) => `${n} of ${m} left to buy`,
    shopHeader: "Shopping list — Recetarios de Aquí", shopFrom: "for",
    aisles: { produce: "Fruits, root vegetables and produce", meat: "Meat, poultry and seafood", dairy: "Dairy and eggs", bakery: "Bakery", pantry: "Grains, canned goods and pantry", spices: "Spices, seasonings and sauces", drinks: "Drinks", other: "Other" }
  }
};
const kt = () => KT[currentLang];

/* ── Datos ── */
const KITCHEN_DEFAULTS = () => ({ ts: 0, cols: [], notes: {}, cooked: {}, shop: { recipes: [], extra: [], done: [] } });
let kitchenOwner = "";
const kitchenKey = () => (kitchenOwner ? `${KITCHEN_STORE}.${kitchenOwner}` : KITCHEN_STORE);
function cleanKitchen(src) {
  const k = KITCHEN_DEFAULTS();
  if (!src || typeof src !== "object") return k;
  const str = (x, n) => String(x == null ? "" : x).slice(0, n);
  k.ts = Number.isFinite(+src.ts) ? +src.ts : 0;
  if (Array.isArray(src.cols)) k.cols = src.cols.slice(0, 50).filter((c) => c && c.id).map((c) => ({ id: str(c.id, 40), name: str(c.name, 60), ids: Array.isArray(c.ids) ? c.ids.map((x) => str(x, 100)).slice(0, 300) : [] }));
  if (src.notes && typeof src.notes === "object") for (const [id, v] of Object.entries(src.notes).slice(0, 500)) if (v) k.notes[str(id, 100)] = str(v, 2000);
  if (src.cooked && typeof src.cooked === "object") for (const [id, v] of Object.entries(src.cooked).slice(0, 1000)) if (Array.isArray(v) && v.length) k.cooked[str(id, 100)] = v.map((d) => str(d, 10)).slice(-30);
  const sh = src.shop || {};
  k.shop.recipes = Array.isArray(sh.recipes) ? sh.recipes.filter((x) => x && x.id).slice(0, 80).map((x) => ({ id: str(x.id, 100), f: Number.isFinite(+x.f) && +x.f > 0 ? Math.min(+x.f, 50) : 1 })) : [];
  k.shop.extra = Array.isArray(sh.extra) ? sh.extra.map((x) => str(x, 80)).filter(Boolean).slice(0, 100) : [];
  k.shop.done = Array.isArray(sh.done) ? sh.done.map((x) => str(x, 160)).slice(0, 400) : [];
  return k;
}
function readKitchen() { try { return cleanKitchen(JSON.parse(readStore(kitchenKey()) || "null")); } catch { return KITCHEN_DEFAULTS(); } }
let kitchen = readKitchen();
let kitchenSaveTimer = 0, kitchenPending = false, kitchenLoading = false;
function saveKitchen() {
  kitchen.ts = Date.now();
  writeStore(kitchenKey(), JSON.stringify(kitchen));
  if (typeof fbDb === "undefined" || !fbDb || typeof authUser === "undefined" || !authUser || authState !== "ready" || kitchenLoading) return;
  kitchenPending = true;
  clearTimeout(kitchenSaveTimer);
  kitchenSaveTimer = setTimeout(flushKitchen, 1000);
}
function kitchenRef() { return fbDb.collection("users").doc(authUser.uid).collection("data").doc("kitchen"); }
function flushKitchen() {
  clearTimeout(kitchenSaveTimer);
  if (!kitchenPending || typeof fbDb === "undefined" || !fbDb || !authUser) return Promise.resolve();
  kitchenPending = false;
  try {
    return kitchenRef().set({ kitchen: cleanKitchen(kitchen), updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
      .catch((err) => console.warn("Mi recetario no se guardó en la cuenta:", (err && (err.code || err.message)) || err));
  } catch (err) { console.warn(err); return Promise.resolve(); }
}
/* Al entrar o salir de la cuenta: la copia de esa persona en este navegador. */
function useKitchenOwner(uid) {
  if (uid && !readStore(`${KITCHEN_STORE}.${uid}`) && readStore(KITCHEN_STORE)) {
    writeStore(`${KITCHEN_STORE}.${uid}`, readStore(KITCHEN_STORE));
    writeStore(KITCHEN_STORE, JSON.stringify(KITCHEN_DEFAULTS()));
  }
  kitchenOwner = uid || "";
  kitchen = readKitchen();
  refreshKitchenViews();
}
/* Al entrar: la copia más reciente, la de la cuenta o la de este navegador. */
async function loadUserKitchen() {
  if (typeof authUser === "undefined" || !authUser) return;
  useKitchenOwner(authUser.uid);
  kitchenLoading = true;
  try {
    const snap = await kitchenRef().get();
    kitchenLoading = false;
    const cloud = snap.exists && snap.data().kitchen;
    if (cloud && (+cloud.ts || 0) >= (kitchen.ts || 0)) { kitchen = cleanKitchen(cloud); writeStore(kitchenKey(), JSON.stringify(kitchen)); refreshKitchenViews(); }
    else if (kitchen.ts) { kitchenPending = true; flushKitchen(); }
  } catch (err) { kitchenLoading = false; console.warn("No se leyó Mi recetario de la cuenta:", (err && err.code) || err); }
}
window.addEventListener("pagehide", () => { flushKitchen(); });
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flushKitchen(); });

const recipeById = (id) => recipes.find((r) => r.id === id);
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const fmtDay = (iso) => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", { day: "numeric", month: "short", year: "numeric" }); };

/* ── Colecciones, notas y "la hice" en la receta ── */
let colPanelOpen = false;
function colPanelHTML(id) {
  const tr = kt();
  return `<div class="col-panel" id="col-panel" role="region" aria-label="${esc(tr.colTitle)}">
    <p class="col-panel-title">${esc(tr.colTitle)}</p>
    ${kitchen.cols.length ? `<ul class="col-checks">${kitchen.cols.map((c) => `
      <li><label class="chip-check"><input type="checkbox" data-col-toggle="${esc(c.id)}" ${c.ids.includes(id) ? "checked" : ""}><span>${esc(c.name)}</span></label></li>`).join("")}</ul>` : ""}
    <form class="col-new" data-col-new>
      <label class="sr-only" for="col-new-name">${esc(tr.colNew)}</label>
      <input id="col-new-name" type="text" maxlength="60" placeholder="${esc(tr.colNewPh)}" autocomplete="off">
      <button type="submit" class="btn btn-outline btn-sm">${esc(tr.colCreate)}</button>
    </form>
  </div>`;
}
function cookedButtonHTML(id) {
  const n = (kitchen.cooked[id] || []).length;
  return `<button type="button" class="btn btn-primary" data-cooked="${esc(id)}"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg><span>${esc(n ? kt().cookedAgain : kt().cookedBtn)}</span></button>`;
}
/* Lo que se dibuja en la receta: botones extra, panel de colecciones, notas e historial. */
function renderRecipeKitchen(recipe) {
  const tr = kt();
  const id = recipe.id;
  const inCols = kitchen.cols.filter((c) => c.ids.includes(id)).length;
  const box = $("recipe-kitchen");
  if (!box) return;
  const days = kitchen.cooked[id] || [];
  box.innerHTML = `
    <div class="recipe-actions recipe-actions-2">
      <button type="button" class="btn btn-outline" id="col-btn" aria-expanded="${colPanelOpen}" aria-controls="col-panel" aria-pressed="${inCols > 0}">
        <svg class="icon" aria-hidden="true"><use href="#i-folder"/></svg><span>${esc(tr.colBtn)}${inCols ? ` (${inCols})` : ""}</span></button>
      <button type="button" class="btn btn-outline" data-shop-add="${esc(id)}">
        <svg class="icon" aria-hidden="true"><use href="#i-cart"/></svg><span>${esc(tr.shopBtn)}</span></button>
      ${cookedButtonHTML(id).replace("btn btn-primary", "btn btn-outline")}
    </div>
    ${days.length ? `<p class="cooked-info"><svg class="icon" aria-hidden="true"><use href="#i-check"/></svg>${esc(tr.cookedInfo(days.length, fmtDay(days[days.length - 1])))}</p>` : ""}
    ${colPanelOpen ? colPanelHTML(id) : ""}`;
  const notes = $("recipe-notes");
  if (notes) {
    notes.innerHTML = `<h2 class="panel-title" id="notes-title">${esc(tr.notesTitle)}</h2>
      <label class="sr-only" for="notes-text">${esc(tr.notesTitle)}</label>
      <textarea id="notes-text" class="notes-text" rows="3" maxlength="2000" placeholder="${esc(tr.notesPh)}">${esc(kitchen.notes[id] || "")}</textarea>
      <p class="notes-status" id="notes-status" role="status" aria-live="polite"></p>`;
  }
}
function markCooked(id) {
  const list = kitchen.cooked[id] || (kitchen.cooked[id] = []);
  list.push(todayISO());
  if (list.length > 30) list.splice(0, list.length - 30);
  saveKitchen();
  toast(kt().cookedToast, true);
  if (current && current.id === id) renderRecipeKitchen(current);
  if (typeof renderCook === "function") renderCook();
}

/* ── Lista de compras ── */
// Sección del supermercado según el alimento (primera palabra clave de NUTRI_FOODS).
const AISLE_RX = [
  ["drinks", /^(ron|tequila|brandy|amaretto|vino|licor|cachaca|refresco|malta|cerveza|granadina|cafe|te negro|leche de avena|leche de coco de carton|coquito)/],
  ["meat", /^(pollo|pechuga|muslo|alita|pavo|guinea|molleja|cerdo|pernil|lechon|chuleta|costilla|patita|cuero|cuajo|gandinga|tocino|jamon|salchicha|jamonilla|longaniza|chorizo|salami|pepperoni|sangre|carne|rinon|bistec|picadillo|rabo|higado|lengua|mondongo|cabro|conejo|ternera|ribeye|osobuco|pecho de res|solomillo|panceta|cordero|pato|codorniz|gallinita|higaditos|almeja|pescado|bacalao|camaron|langosta|pulpo|calamar|juey|carrucho|salmon|ceti|ostion|tinta)/],
  ["dairy", /^(huevo|yema|clara|leche$|leche evaporada|leche condensada$|crema$|mantequilla$|queso|ricotta|mantecado|crema agria|yogur)/],
  ["bakery", /^(pan$|pan de hamburguesa|tortilla|bizcocho|hojaldre|disco|masa para pie)/],
  ["spices", /^(sal$|adobo|sazon|canela|curcuma|azafran|cebolla en polvo|vainilla|ketchup|salsa|mostaza|pique|vinagre|mayonesa|polvo de hornear|bicarbonato|levadura)/],
  ["produce", /^(jugo de limon|platano|guineo|yuca|yautia|name|batata|papa$|pana|calabaza|maiz|cebolla|cebollin|pimiento|aji|ajo|tomate$|lechuga|repollo|zanahoria|pepino|apio|espinaca|champinon|romero|calabacin|berro|brocoli|chayote|berenjena|jaca|coliflor|aguacate|remolacha|guingambo|cilantro|tomillo|habichuelas tiernas|pina|mango|papaya|guayaba|parcha|tamarindo|guanabana|quenepa|limon|china|toronja|acerola|sandia|cana|coco|grosella|pajuil|jobo|pomarrosa|pitahaya|caimito|nispero|anon|melon|mamey|manzana|fresa|frambuesa|carambola|cidra|uva|naranja agria|ralladura|hoja de platano|hojas|flor de jamaica|naranjo|apio del pais|sofrito)/]
];
const AISLE_ORDER = ["produce", "meat", "dairy", "bakery", "pantry", "spices", "drinks", "other"];
function aisleOf(food) {
  if (!food) return "other";
  const k = food.kw[0];
  for (const [a, rx] of AISLE_RX) if (rx.test(k)) return a;
  return "pantry";
}
const UNIT_RX = /^(tazas?|cucharadas?|cucharaditas?|libras?|lbs?|onzas?|oz|latas?|sobres?|paquetes?|dientes?|cabezas?|ramitas?|ramas?|pizcas?|botellas?|frascos?|cups?|tablespoons?|teaspoons?|tbsp|tsp|pounds?|ounces?|cans?|packets?|packages?|cloves?|heads?|sprigs?|pinch(?:es)?|bottles?|jars?)\b/i;
/* La medida de una línea, siempre igual en singular o plural ("taza" y "tazas" se suman). */
const UNIT_CANON = [["cucharadit", "cdta"], ["cucharad", "cda"], ["taz", "taza"], ["libr", "lb"], ["lb", "lb"], ["onz", "oz"], ["oz", "oz"], ["lat", "lata"], ["sobr", "sobre"], ["paquet", "paq"], ["dient", "diente"], ["cabez", "cabeza"], ["ram", "rama"], ["pizc", "pizca"], ["botell", "botella"], ["frasc", "frasco"]];
const singular = (w) => { const x = nutriNorm(w); const hit = UNIT_CANON.find(([p]) => x.startsWith(p)); return hit ? hit[1] : x; };
function pluralWord(w) {
  if (currentLang === "en") {
    if (/(s|x|ch|sh)$/i.test(w)) return w + "es";
    if (/[^aeiou]y$/i.test(w)) return w.slice(0, -1) + "ies";
    if (/[^aeiou]o$/i.test(w) && !/^(avocado|taco|burrito)$/i.test(w)) return w + "es";
    return w + "s";
  }
  if (/[aeiouáéó]$/i.test(w)) return w + "s";
  if (/[íú]$/i.test(w)) return w + "es";
  if (/ón$/i.test(w)) return w.slice(0, -2) + "ones";
  if (/z$/i.test(w)) return w.slice(0, -1) + "ces";
  return w + "es";
}
/* "cucharadas" → "cucharada", "dientes" → "diente", "cups" → "cup", "pinches" → "pinch". */
function unitSingular(w) {
  if (/^(oz|lbs?|tbsp|tsp)$/i.test(w) || !/s$/i.test(w)) return w;
  if (/(ches|shes)$/i.test(w)) return w.slice(0, -2);
  return w.slice(0, -1);
}
const NO_SHOP_RX = /^(agua|hielo)$/;
/* Las líneas de compra: se suman las que son el mismo alimento con la misma medida. */
function shoppingItems() {
  const groups = new Map();
  const add = (key, entry) => {
    const g = groups.get(key);
    if (!g) { groups.set(key, entry); return; }
    if (g.qty != null && entry.qty != null) g.qty += entry.qty;
    for (const n of entry.from) if (!g.from.includes(n)) g.from.push(n);
  };
  for (const x of kitchen.shop.recipes) {
    const r = recipeById(x.id);
    if (!r) continue;
    const name = r.name[currentLang];
    r.ingredients.es.forEach((es, i) => {
      const n = nutriNorm(es);
      if (/\bopcional\b|para el agua|^carbon vegetal|astillas de/.test(n)) return;
      const show = r.ingredients[currentLang][i];
      const part = measurePart(splitIngredient(es)[0] || "");
      const food = part.kind === "ok" ? part.food : findFood(n);
      if (food && NO_SHOP_RX.test(food.kw[0])) return;
      const lead = parseLead(es);
      const leadShow = parseLead(show);
      if (!lead || !leadShow) {
        // Sin cantidad ("Sal al gusto", "Aceite para freír"): una sola vez.
        const k = food ? `free|${food.kw[0]}` : `free|${n}`;
        add(k, { key: k, qty: null, text: show.replace(/\s*(al gusto|to taste)\s*$/i, ""), aisle: aisleOf(food), from: [name] });
        return;
      }
      const restEs = es.slice(lead.length).trim();
      const restShow = show.slice(leadShow.length).trim();
      const uEs = (restEs.match(UNIT_RX) || [""])[0];
      const k = `${food ? food.kw[0] : nutriNorm(restEs).slice(0, 40)}|${singular(uEs || "u")}`;
      add(k, { key: k, qty: lead.value * x.f, rest: restShow, aisle: aisleOf(food), from: [name] });
    });
  }
  for (const e of kitchen.shop.extra) add(`extra|${nutriNorm(e)}`, { key: `extra|${nutriNorm(e)}`, qty: null, text: e, aisle: "other", from: [] });
  const items = [...groups.values()].map((g) => {
    if (g.qty == null) return g;
    // "1 taza de arroz" + "2 tazas de arroz" → "3 tazas de arroz"
    let rest = g.rest;
    // "2 cucharadas" × ½ → "1 cucharada": la medida en singular cuando es 1 o menos.
    if (g.qty <= 1) rest = rest.replace(UNIT_RX, unitSingular);
    if (g.qty > 1) {
      const m = rest.match(/^(\S+)(.*)$/);
      if (m && !/^(de|of)$/i.test(m[1])) {
        const w = m[1];
        const isPlural = currentLang === "en" ? /s$/i.test(w) : /(s)$/i.test(w);
        if (!isPlural && /^[a-záéíóúñü]+$/i.test(w)) rest = pluralWord(w) + m[2];
      }
    }
    return { ...g, text: `${formatQty(g.qty)} ${rest}` };
  });
  return items.sort((a, b) => AISLE_ORDER.indexOf(a.aisle) - AISLE_ORDER.indexOf(b.aisle) || a.text.localeCompare(b.text, currentLang));
}
function addToShop(id, factor) {
  const x = kitchen.shop.recipes.find((y) => y.id === id);
  if (x) x.f = Math.round((x.f + factor) * 100) / 100; else kitchen.shop.recipes.push({ id, f: Math.round(factor * 100) / 100 });
  saveKitchen();
  renderNavCounts();
}
function shopText() {
  const tr = kt();
  const items = shoppingItems().filter((x) => !kitchen.shop.done.includes(x.key));
  let out = `${tr.shopHeader}\n`;
  let last = null;
  for (const it of items) {
    if (it.aisle !== last) { out += `\n${tr.aisles[it.aisle].toUpperCase()}\n`; last = it.aisle; }
    out += `☐ ${it.text}\n`;
  }
  return out.trim();
}

/* ── Vistas ── */
function hideAllViews() {
  for (const v of ["view-home", "view-recipe", "view-plans", "view-admin", "view-mine", "view-shop"]) { const el = $(v); if (el) el.hidden = true; }
}
function showMine() {
  current = null;
  hideAllViews();
  $("view-mine").hidden = false;
  document.title = `${kt().mineTitle} — ${BRAND}`;
  renderMine();
  jumpTo(0);
  $("mine-title").focus({ preventScroll: true });
}
function miniList(list, extra = () => "") {
  return `<div class="recipe-grid">${list.map((r, i) => cardHTML(r, i).replace("</article>", `${extra(r)}</article>`)).join("")}</div>`;
}
function renderMine() {
  const tr = kt();
  const v = $("view-mine");
  if (!v) return;
  const favList = [...favorites].map(recipeById).filter(Boolean);
  const cookedList = Object.entries(kitchen.cooked).filter(([id]) => recipeById(id)).sort((a, b) => b[1][b[1].length - 1].localeCompare(a[1][a[1].length - 1]));
  const notedList = Object.keys(kitchen.notes).map(recipeById).filter(Boolean);
  v.innerHTML = `<div class="container mine-wrap">
    <header class="plans-head">
      <h1 class="section-title" id="mine-title" tabindex="-1">${esc(tr.mineTitle)}</h1>
      <p class="section-sub">${esc(tr.mineIntro)}</p>
    </header>
    <section class="mine-section" aria-labelledby="mine-favs"><h2 class="plans-more-title" id="mine-favs">${esc(tr.favs)} <span class="plans-count">${favList.length}</span></h2>
      ${favList.length ? miniList(favList) : `<p class="plans-help">${esc(tr.noFavs)}</p>`}</section>
    <section class="mine-section" aria-labelledby="mine-cols"><h2 class="plans-more-title" id="mine-cols">${esc(tr.cols)} <span class="plans-count">${kitchen.cols.length}</span></h2>
      ${kitchen.cols.length ? kitchen.cols.map((c) => {
        const list = c.ids.map(recipeById).filter(Boolean);
        return `<details class="mine-col" open><summary><span class="mine-col-name">${esc(c.name)}</span> <span class="plans-count">${esc(tr.colCount(list.length))}</span></summary>
          <div class="mine-col-actions"><button type="button" class="btn btn-ghost btn-sm" data-col-rename="${esc(c.id)}">${esc(tr.colRename)}</button>
          <button type="button" class="btn btn-ghost btn-sm" data-col-delete="${esc(c.id)}">${esc(tr.colDelete)}</button></div>
          ${list.length ? miniList(list) : ""}</details>`;
      }).join("") : `<p class="plans-help">${esc(tr.noCols)}</p>`}</section>
    <section class="mine-section" aria-labelledby="mine-cooked"><h2 class="plans-more-title" id="mine-cooked">${esc(tr.cooked)} <span class="plans-count">${cookedList.length}</span></h2>
      ${cookedList.length ? `<ul class="plans-more-list mine-cooked-list">${cookedList.map(([id, days]) => `<li><a href="#/receta/${encodeURIComponent(id)}" data-open="${esc(id)}">${esc(recipeById(id).name[currentLang])}</a>
        <span class="plans-more-n">${esc(tr.cookedInfo(days.length, fmtDay(days[days.length - 1])))}</span></li>`).join("")}</ul>` : `<p class="plans-help">${esc(tr.noCooked)}</p>`}</section>
    <section class="mine-section" aria-labelledby="mine-notes"><h2 class="plans-more-title" id="mine-notes">${esc(tr.noted)} <span class="plans-count">${notedList.length}</span></h2>
      ${notedList.length ? `<ul class="plans-more-list">${notedList.map((r) => `<li><a href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(r.name[currentLang])}</a>
        <span class="mine-note">${esc(kitchen.notes[r.id])}</span></li>`).join("")}</ul>` : `<p class="plans-help">${esc(tr.noNotes)}</p>`}</section>
  </div>`;
}
function showShop() {
  current = null;
  hideAllViews();
  $("view-shop").hidden = false;
  document.title = `${kt().shopTitle} — ${BRAND}`;
  renderShop();
  jumpTo(0);
  $("shop-title").focus({ preventScroll: true });
}
function renderShop() {
  const tr = kt();
  const v = $("view-shop");
  if (!v) return;
  const items = shoppingItems();
  const done = new Set(kitchen.shop.done);
  const left = items.filter((x) => !done.has(x.key)).length;
  let last = null;
  const list = items.map((it) => {
    const head = it.aisle !== last ? `${last ? "</ul></section>" : ""}<section class="shop-aisle"><h2 class="shop-aisle-title">${esc(tr.aisles[it.aisle])}</h2><ul class="shop-list">` : "";
    last = it.aisle;
    return `${head}<li><label class="ing-item${done.has(it.key) ? " is-done" : ""}">
      <input type="checkbox" data-shop-done="${esc(it.key)}" ${done.has(it.key) ? "checked" : ""}>
      <span class="ing-box" aria-hidden="true"><svg class="icon"><use href="#i-check"/></svg></span>
      <span class="ing-text">${esc(it.text)}${it.from.length ? `<span class="shop-from"> · ${esc(it.from.join(", "))}</span>` : ""}</span></label></li>`;
  }).join("") + (last ? "</ul></section>" : "");
  v.innerHTML = `<div class="container shop-wrap">
    <header class="plans-head">
      <h1 class="section-title" id="shop-title" tabindex="-1">${esc(tr.shopTitle)}</h1>
      <p class="section-sub">${esc(tr.shopIntro)}</p>
    </header>
    ${kitchen.shop.recipes.length ? `<div class="shop-recipes"><p class="plans-help">${esc(tr.shopRecipes)}</p><ul class="shop-chips">${kitchen.shop.recipes.map((x) => {
      const r = recipeById(x.id); if (!r) return "";
      const serv = Math.round(x.f * r.servings * 2) / 2;
      return `<li class="shop-chip"><a href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(r.name[currentLang])}</a> <span>${esc(tr.shopServ(formatQty(serv)))}</span>
        <button type="button" class="shop-chip-x" data-shop-remove="${esc(r.id)}" aria-label="${esc(tr.shopRemove(r.name[currentLang]))}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button></li>`;
    }).join("")}</ul></div>` : ""}
    <form class="col-new shop-extra" data-shop-extra>
      <label class="sr-only" for="shop-extra-text">${esc(tr.shopExtra)}</label>
      <input id="shop-extra-text" type="text" maxlength="80" placeholder="${esc(tr.shopExtraPh)}" autocomplete="off">
      <button type="submit" class="btn btn-outline btn-sm">${esc(tr.shopAdd)}</button>
    </form>
    ${items.length ? `<p class="results-count" role="status">${esc(tr.shopLeft(left, items.length))}</p>
      <div class="shop-actions">
        <button type="button" class="btn btn-primary btn-sm" data-shop-act="share"><svg class="icon" aria-hidden="true"><use href="#i-share"/></svg><span>${esc(tr.shopShare)}</span></button>
        <button type="button" class="btn btn-outline btn-sm" data-shop-act="copy"><span>${esc(tr.shopCopy)}</span></button>
        <button type="button" class="btn btn-outline btn-sm" data-shop-act="print"><svg class="icon" aria-hidden="true"><use href="#i-print"/></svg><span>${esc(tr.shopPrint)}</span></button>
        <button type="button" class="btn btn-ghost btn-sm" data-shop-act="clear-done">${esc(tr.shopClearDone)}</button>
        <button type="button" class="btn btn-ghost btn-sm" data-shop-act="clear">${esc(tr.shopClear)}</button>
      </div>
      <div class="shop-body">${list}</div>` : `<p class="plans-help shop-empty">${esc(tr.shopEmpty)}</p>`}
  </div>`;
}
function renderNavCounts() {
  const b = $("shop-count");
  if (!b) return;
  const n = kitchen.shop.recipes.length + kitchen.shop.extra.length;
  b.hidden = !n; b.textContent = String(n);
}
function refreshKitchenViews() {
  renderNavCounts();
  if ($("view-mine") && !$("view-mine").hidden) renderMine();
  if ($("view-shop") && !$("view-shop").hidden) renderShop();
  if (current) renderRecipeKitchen(current);
}

function setupKitchen() {
  document.addEventListener("click", async (e) => {
    const tr = kt();
    if (e.target.closest("#col-btn")) { colPanelOpen = !colPanelOpen; renderRecipeKitchen(current); if (colPanelOpen) $("col-new-name").focus(); return; }
    const sa = e.target.closest("[data-shop-add]");
    if (sa) {
      const r = recipeById(sa.dataset.shopAdd);
      const serv = current && current.id === r.id ? currentServings : r.servings;
      addToShop(r.id, serv / r.servings);
      toast(tr.shopAdded(serv), true);
      return;
    }
    const ck = e.target.closest("[data-cooked]");
    if (ck) { markCooked(ck.dataset.cooked); return; }
    const rm = e.target.closest("[data-shop-remove]");
    if (rm) { kitchen.shop.recipes = kitchen.shop.recipes.filter((x) => x.id !== rm.dataset.shopRemove); saveKitchen(); renderShop(); renderNavCounts(); return; }
    const act = e.target.closest("[data-shop-act]");
    if (act) {
      const a = act.dataset.shopAct;
      if (a === "print") window.print();
      if (a === "copy") { try { await navigator.clipboard.writeText(shopText()); toast(tr.shopCopied, true); } catch { toast(t().shareFail); } }
      if (a === "share") {
        const text = shopText();
        try {
          if (navigator.share) await navigator.share({ title: tr.shopTitle, text });
          else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        } catch (err) { if (!err || err.name !== "AbortError") window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener"); }
      }
      if (a === "clear-done") {
        // Sale lo marcado: los extras marcados y las recetas a las que ya no les queda nada por comprar.
        const done = new Set(kitchen.shop.done);
        const items = shoppingItems();
        kitchen.shop.extra = kitchen.shop.extra.filter((x) => !done.has(`extra|${nutriNorm(x)}`));
        kitchen.shop.recipes = kitchen.shop.recipes.filter((x) => {
          const r = recipeById(x.id);
          return r && items.some((it) => it.from.includes(r.name[currentLang]) && !done.has(it.key));
        });
        const keys = new Set(shoppingItems().map((x) => x.key));
        kitchen.shop.done = [...done].filter((k) => keys.has(k));
        saveKitchen(); renderShop(); renderNavCounts();
      }
      if (a === "clear" && confirm(tr.shopConfirmClear)) { kitchen.shop = { recipes: [], extra: [], done: [] }; saveKitchen(); renderShop(); renderNavCounts(); }
      return;
    }
    const ren = e.target.closest("[data-col-rename]");
    if (ren) {
      const c = kitchen.cols.find((x) => x.id === ren.dataset.colRename);
      const name = c && prompt(tr.colRenamePrompt, c.name);
      if (name && name.trim()) { c.name = name.trim().slice(0, 60); saveKitchen(); renderMine(); }
      return;
    }
    const del = e.target.closest("[data-col-delete]");
    if (del) {
      const c = kitchen.cols.find((x) => x.id === del.dataset.colDelete);
      if (c && confirm(tr.colConfirmDelete(c.name))) { kitchen.cols = kitchen.cols.filter((x) => x !== c); saveKitchen(); renderMine(); }
    }
  });
  document.addEventListener("change", (e) => {
    const tg = e.target.closest("[data-col-toggle]");
    if (tg && current) {
      const c = kitchen.cols.find((x) => x.id === tg.dataset.colToggle);
      if (!c) return;
      if (tg.checked) { if (!c.ids.includes(current.id)) c.ids.push(current.id); toast(kt().colAdded(c.name), true); }
      else { c.ids = c.ids.filter((x) => x !== current.id); toast(kt().colRemoved(c.name), true); }
      saveKitchen();
      renderRecipeKitchen(current);
      const again = document.querySelector(`[data-col-toggle="${CSS.escape(c.id)}"]`); if (again) again.focus();
      return;
    }
    const sd = e.target.closest("[data-shop-done]");
    if (sd) {
      const k = sd.dataset.shopDone;
      kitchen.shop.done = sd.checked ? [...new Set([...kitchen.shop.done, k])] : kitchen.shop.done.filter((x) => x !== k);
      saveKitchen();
      renderShop();
      const again = document.querySelector(`[data-shop-done="${CSS.escape(k)}"]`); if (again) again.focus();
    }
  });
  document.addEventListener("submit", (e) => {
    if (e.target.closest("[data-col-new]")) {
      e.preventDefault();
      const name = $("col-new-name").value.trim().slice(0, 60);
      if (!name || !current) return;
      const c = { id: `c${Date.now().toString(36)}`, name, ids: [current.id] };
      kitchen.cols.push(c);
      saveKitchen();
      toast(kt().colAdded(name), true);
      renderRecipeKitchen(current);
      return;
    }
    if (e.target.closest("[data-shop-extra]")) {
      e.preventDefault();
      const txt = $("shop-extra-text").value.trim().slice(0, 80);
      if (!txt) return;
      kitchen.shop.extra.push(txt);
      saveKitchen(); renderShop(); renderNavCounts();
      $("shop-extra-text").focus();
    }
  });
  let noteTimer = 0;
  document.addEventListener("input", (e) => {
    if (e.target.id !== "notes-text" || !current) return;
    const id = current.id, val = e.target.value.slice(0, 2000);
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => {
      if (val.trim()) kitchen.notes[id] = val; else delete kitchen.notes[id];
      saveKitchen();
      const s = $("notes-status"); if (s) s.textContent = kt().notesSaved;
    }, 600);
  });
  renderNavCounts();
}
document.addEventListener("DOMContentLoaded", setupKitchen);
