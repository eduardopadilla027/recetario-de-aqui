/* Familias de recetas dentro de cada categoría, para mostrarlas en orden (flanes con
 * flanes, res con res, tés con tés…) en vez de en el orden en que se añadieron.
 *
 * RECIPE_FAMILIES[categoría] = lista de familias EN EL ORDEN EN QUE SE MUESTRAN:
 *   [clave, { es, en }, expresión sobre el nombre en español sin acentos].
 * Al clasificar se prueban en el orden de FAMILY_MATCH_ORDER (si existe para la
 * categoría) o en el mismo orden; la última familia sin expresión recoge el resto.
 * Dentro de cada familia, las recetas van en orden alfabético del idioma activo. */
const RECIPE_FAMILIES = {
  calientes: [
    ["cafe", { es: "Café", en: "Coffee" }, /^cafe/],
    ["chocolate", { es: "Chocolate Caliente", en: "Hot Chocolate" }, /^chocolate/],
    ["especias", { es: "Tés de Especias y Cáscaras", en: "Spice and Peel Teas" }, /^(?!.*jamaica).*(canela|anis|jengibre|curcuma|chai|cascara|hinojo)/],
    ["hierbas", { es: "Tés de Hojas, Flores y Hierbas", en: "Leaf, Flower and Herb Teas" }, null]
  ],
  frutas: [
    ["almibar", { es: "Dulces en Almíbar", en: "Fruits in Syrup" }, /almibar|^cascos|^dulce/],
    ["mermeladas", { es: "Mermeladas, Jaleas y Pastas", en: "Jams, Jellies and Pastes" }, /mermelada|jalea|pasta de/],
    ["yogur", { es: "Con Yogur", en: "With Yogurt" }, /yogur|parfait|bowl/],
    ["frescas", { es: "Frutas Frescas y Asadas", en: "Fresh and Grilled Fruit" }, null]
  ],
  cereales: [
    ["avena", { es: "Avena", en: "Oats" }, /avena|granola/],
    ["cremas", { es: "Cremas y Harinas Calientes", en: "Hot Cereals" }, /crema|cremita|farina|maicena|harina|funche|quinoa/],
    ["otros", { es: "Otros", en: "Other" }, null]
  ],
  granos: [
    ["habichuelas", { es: "Habichuelas", en: "Beans" }, /habichuelas/],
    ["garbanzos", { es: "Garbanzos", en: "Chickpeas" }, /garbanzos|hummus/],
    ["gandules", { es: "Gandules", en: "Pigeon Peas" }, /gandules/],
    ["lentejas", { es: "Lentejas", en: "Lentils" }, /lentejas/],
    ["otros", { es: "Habas y Guisantes", en: "Fava Beans and Peas" }, null]
  ],
  ensaladas: [
    ["verdes", { es: "Verdes y de Vegetales", en: "Green and Vegetable Salads" }, null],
    ["granos", { es: "De Granos", en: "Bean and Grain Salads" }, /frijoles|gandules|garbanzos|habichuelas|lentejas/],
    ["papa", { es: "De Papa, Pasta, Arroz y Viandas", en: "Potato, Pasta, Rice and Root Salads" }, /papa|coditos|pana|yuca|arroz|pasta/],
    ["mariscos", { es: "De Pescado y Mariscos", en: "Fish and Seafood Salads" }, /camarones|bacalao|atun|serenata|pulpo|mariscos|carrucho|ceviche|jueyes/]
  ],
  sopas: [
    ["asopaos", { es: "Asopaos", en: "Asopaos" }, /^asopao/],
    ["sancochos", { es: "Sancochos, Caldos y Sopones", en: "Sancochos, Broths and Sopones" }, /sancocho|caldo|sopon|mondongo/],
    ["cremas", { es: "Cremas", en: "Cream Soups" }, /^crema/],
    ["granos", { es: "De Granos", en: "Bean Soups" }, /habichuelas|frijoles|lentejas|gandules|garbanzos/],
    ["carnes", { es: "De Pollo y Carnes", en: "Chicken and Meat Soups" }, /pollo|gallina|res|carne|albondigas|salchichas|chorizo|cabro/],
    ["pescado", { es: "De Pescado y Mariscos", en: "Fish and Seafood Soups" }, /pescado|mariscos/],
    ["frias", { es: "Gazpachos (Frías)", en: "Gazpachos (Cold)" }, /gazpacho/],
    ["vegetales", { es: "De Vegetales, Viandas y Fideos", en: "Vegetable, Root and Noodle Soups" }, null]
  ],
  carnes: [
    ["res", { es: "Res", en: "Beef" }, /bistec|churrasco|carne (guisada|mechada|bif)|ropa vieja|picadillo|salpicon|de res|res |falda|picanha|ribeye|osobuco|napolitana|ternera|rabo|albondigas|pastelon/],
    ["cerdo", { es: "Cerdo", en: "Pork" }, null],
    ["otras", { es: "Cabro, Cordero y Conejo", en: "Goat, Lamb and Rabbit" }, /cabr|chivo|cordero|conejo/],
    ["embutidos", { es: "Embutidos", en: "Sausages" }, /longaniza|salchichas|morcilla/],
    ["visceras", { es: "Vísceras", en: "Offal" }, /lengua|higado|gandinga|cuajito|rinoncitos/]
  ],
  aves: [
    ["pollo", { es: "Pollo Entero y en Presas", en: "Whole and Cut-Up Chicken" }, null],
    ["pechugas", { es: "Pechugas", en: "Chicken Breasts" }, /^pechuga(s)? (?!de pavo)/],
    ["alitas", { es: "Alitas y Muslos", en: "Wings and Thighs" }, /^alitas|^muslos (de pollo|glaseados)/],
    ["pavo", { es: "Pavo", en: "Turkey" }, /pavo/],
    ["otras", { es: "Guinea, Gallina, Pato y Otras Aves", en: "Guinea Hen, Hen, Duck and Other Birds" }, /guinea|gallinitas|gallina|pato|codorn/],
    ["menudos", { es: "Mollejas e Higaditos", en: "Gizzards and Livers" }, /mollejas|higaditos/]
  ],
  pescados: [
    ["pescados", { es: "Pescados", en: "Fish" }, null],
    ["bacalao", { es: "Bacalao", en: "Salt Cod" }, /bacalao/],
    ["camarones", { es: "Camarones", en: "Shrimp" }, /camarones/],
    ["langosta", { es: "Langosta y Jueyes", en: "Lobster and Land Crab" }, /langosta|jueyes/],
    ["moluscos", { es: "Pulpo, Calamar y Carrucho", en: "Octopus, Squid and Conch" }, /pulpo|calamar|carrucho/],
    ["conchas", { es: "Almejas, Mejillones, Ostiones y Vieiras", en: "Clams, Mussels, Oysters and Scallops" }, /almejas|mejillones|ostiones|vieiras/],
    ["mariscadas", { es: "Mariscadas y Mofongos", en: "Seafood Medleys and Mofongos" }, /mariscada|mofongo/],
    ["frios", { es: "Ceviches, Cócteles y Ensaladas", en: "Ceviches, Cocktails and Salads" }, /ceviche|coctel|ensalada/]
  ],
  huevos: [
    ["huevos", { es: "Huevos", en: "Eggs" }, /^huevos|jamonilla|huevo frito|ensalada de huevo/],
    ["tortillas", { es: "Tortillas y Revoltillos", en: "Omelets and Scrambles" }, /tortilla|revoltillo|omelet|quiche/],
    ["quesos", { es: "Quesos", en: "Cheeses" }, /queso/]
  ],
  entremeses: [
    ["empanadillas", { es: "Empanadillas y Pastelillos", en: "Turnovers" }, /empanadillas|pastelillos|tarta de hojaldre/],
    ["alcapurrias", { es: "Alcapurrias y Frituras de Plátano y Yuca", en: "Alcapurrias and Plantain and Cassava Fritters" }, /alcapurrias|piononos|tostones rellenos|tostones con|aranitas|empanadas de yuca/],
    ["bolitas", { es: "Bolitas, Buñuelos y Rellenos", en: "Fritter Balls, Buñuelos and Stuffed Fritters" }, /bolitas|bunuelos|barriguitas|rellenos de|almojabanas/],
    ["mar", { es: "Bacalaítos y Frituras de Mar", en: "Codfish Fritters and Seafood Fritters" }, /bacalaitos|calamares|pescado|pulpo/],
    ["croquetas", { es: "Croquetas", en: "Croquettes" }, /croquetas/],
    ["masa", { es: "Sorullitos, Domplines y Otras Frituras", en: "Sorullitos, Dumplings and Other Fritters" }, null],
    ["otros", { es: "Otros Entremeses", en: "Other Appetizers" }, /mollejas|queso de freir/]
  ],
  pastas: [
    ["espaguetis", { es: "Espaguetis", en: "Spaghetti" }, /espaguetis/],
    ["coditos", { es: "Coditos y Macarrones", en: "Elbows and Macaroni" }, /coditos|macarrones/],
    ["horno", { es: "Lasañas y Canelones", en: "Lasagna and Cannelloni" }, /lasana|canelones/],
    ["fideos", { es: "Fideos y Otras Pastas", en: "Noodles and Other Pasta" }, null]
  ],
  bizcochos: [
    ["clasicos", { es: "Clásicos", en: "Classics" }, null],
    ["mojados", { es: "Mojados y con Licor", en: "Soaked and Liquor Cakes" }, /mojado|brandy|amaretto/],
    ["frutas", { es: "De Frutas y Coco", en: "Fruit and Coconut Cakes" }, /^(?!.*cumpleanos).*(pina|guayaba|china|parcha|coco|guineo|mango|zanahoria|limon|grosella|guanabana|platano)/],
    ["calabaza", { es: "De Calabaza", en: "Pumpkin Cakes" }, /calabaza/],
    ["cupcakes", { es: "Cupcakes", en: "Cupcakes" }, /cupcakes/],
    ["otros", { es: "Brazos Gitanos y Brownies", en: "Rolled Cakes and Brownies" }, /brazo gitano|brownies/]
  ],
  galletitas: [
    ["jengibre", { es: "Cucas y Galletas de Jengibre", en: "Cucas and Ginger Cookies" }, /cucas|jengibre|melao|munequitos/],
    ["mantequilla", { es: "De Mantequilla y Maicena", en: "Butter and Cornstarch Cookies" }, /mantequilla(?! de mani)|maicena|mantecaditos|polvorones|danesas|royales|alfajores|maria|soda/],
    ["frutas", { es: "De Frutas y Coco", en: "Fruit and Coconut Cookies" }, /^(?!.*chocolate).*(coco|guayaba|parcha|limon|guineo|batata|calabaza|pasas|espirales|pina)/],
    ["otras", { es: "De Chocolate, Café, Avena y Otras", en: "Chocolate, Coffee, Oat and Other Cookies" }, null]
  ],
  pasteles_dulces: [
    ["pies", { es: "Pies", en: "Pies" }, /^pie|pastel \(pie\)/],
    ["flanes", { es: "Flanes y Quesillos", en: "Flans and Quesillos" }, /flan|quesillo/],
    ["hojaldre", { es: "Hojaldre y Pastelillos", en: "Puff Pastry and Turnovers" }, /hojaldre|palmeras|milhojas|pastelillos|quesitos|trenza/],
    ["otros", { es: "Otros Pasteles", en: "Other Pastries" }, null]
  ],
  panes: [
    ["panqueques", { es: "Panqueques", en: "Pancakes" }, /^panqueques/],
    ["agua", { es: "Pan de Agua, Sobao y de Molde", en: "Water Bread, Sobao and Sandwich Bread" }, /pan de agua|sobao|manteca|pan de mantequilla|molde|tostado|pan con ajo|pan de papa|integral|panecillos de hamburguesa/],
    ["dulces", { es: "Panes Dulces y Donas", en: "Sweet Breads and Doughnuts" }, null],
    ["viandas", { es: "De Viandas y Maíz", en: "Root Vegetable and Corn Breads" }, /yautia|maiz|casabe|arepas|panapen|apio/],
    ["salados", { es: "Con Queso y Jamón", en: "Cheese and Ham Breads" }, /^(?!mallorca|trenza).*(queso|jamon|quesitos|cachitos)/]
  ],
  emparedados: [
    ["clasicos", { es: "Clásicos Boricuas", en: "Puerto Rican Classics" }, /cubano|medianoche|tripleta|jibarito(?! de pollo)|mezcla|club|desayuno/],
    ["carnes", { es: "De Carnes", en: "Meat Sandwiches" }, /bistec|churrasco|pernil|lechon|choripan|hamburguesas boricuas|jamon y queso|picadillo|salchichon/],
    ["aves", { es: "De Pollo y Pavo", en: "Chicken and Turkey Sandwiches" }, /pollo|pechuga|pavochon|pavo/],
    ["mar", { es: "De Pescado y Mariscos", en: "Fish and Seafood Sandwiches" }, /pescado|atun|camarones/],
    ["otros", { es: "Vegetarianos y Otros", en: "Vegetarian and Other" }, null]
  ],
  postres: [
    ["flanes", { es: "Flanes", en: "Flans" }, /^flan|tocino del cielo/],
    ["tembleques", { es: "Tembleques, Majaretes y Natillas", en: "Tembleques, Majaretes and Custards" }, /tembleque|majarete|natilla|mazamorra|panna cotta|mousse|crema fria|crema catalana/],
    ["arroces", { es: "Arroces Dulces", en: "Sweet Rice" }, /^arroz con/],
    ["budines", { es: "Budines, Pudines y Torrejas", en: "Bread Puddings and Puddings" }, /budin|pudin|cazuela|torrejas|sopa borracha/],
    ["cheesecakes", { es: "Cheesecakes", en: "Cheesecakes" }, /cheesecake|tarta de queso/],
    ["gelatinas", { es: "Gelatinas", en: "Gelatins" }, /gelatina/],
    ["helados", { es: "Helados, Limbers y Piraguas", en: "Ice Creams, Limbers and Piraguas" }, /helado|limber|piragua|mantecado|paletas|sorbete/],
    ["bizcochos", { es: "Bizcochos, Tres Leches y Tartas", en: "Cakes, Tres Leches and Tarts" }, /bizcocho|tres leches|brazo gitano|pavlova|copa|crumble|crepas|churros|tiramisu|tarta de guineo/],
    ["dulces", { es: "Dulces de Coco y Frutas", en: "Coconut and Fruit Sweets" }, null]
  ],
  arroces: [
    ["granos", { es: "Con Gandules, Habichuelas y Garbanzos", en: "With Pigeon Peas, Beans and Chickpeas" }, /gandules|habichuelas|moros|mamposteao|garbanzos|lentejas/],
    ["carnes", { es: "Con Pollo y Carnes", en: "With Chicken and Meats" }, /pollo|alitas|guinea|mollejas|pernil|costillitas|longaniza|salchichas|carne bif|salami|locrio|chorizo|tocineta|carne molida|chuletas|pavo|imperial/],
    ["mar", { es: "Con Pescado y Mariscos", en: "With Fish and Seafood" }, /camarones|langosta|jueyes|pulpo|calamares|bacalao|atun|sardinas|pescado/],
    ["fritos", { es: "Arroces Fritos", en: "Fried Rice" }, /chino|frito/],
    ["paellas", { es: "Paellas", en: "Paellas" }, /paella/],
    ["otros", { es: "Arroz Blanco, de Hierbas y de Sabores", en: "White, Herb and Flavored Rice" }, null]
  ],
  vegetales: [
    ["platanos", { es: "Tostones, Amarillos y Guineítos", en: "Tostones, Sweet Plantains and Green Bananas" }, /tostones|amarillo|platanutres|maduros|guineitos|guineos/],
    ["mofongos", { es: "Mofongos, Majados y Trifongo", en: "Mofongos, Mashes and Trifongo" }, /mofongo|majado|trifongo/],
    ["pasteles", { es: "Pasteles y Pastelones", en: "Pasteles and Pastelones" }, /^pasteles|pastelon|^pinon/],
    ["viandas", { es: "Yuca, Pana y Otras Viandas", en: "Cassava, Breadfruit and Other Roots" }, /yuca|\bpana\b|batata|viandas|malanga|name|yautia|apio/],
    ["papas", { es: "Papas", en: "Potatoes" }, /^(?!fricase).*(papas|papitas)/],
    ["berenjenas", { es: "Berenjenas", en: "Eggplant" }, /berenjena/],
    ["rellenos", { es: "Rellenos y Gratinados", en: "Stuffed and Gratin Vegetables" }, /rellen|gratinad|pimientos/],
    ["otros", { es: "Vegetales Guisados, Salteados y Asados", en: "Stewed, Sautéed and Roasted Vegetables" }, null]
  ],
  salsas: [
    ["bases", { es: "Sofrito y Sazones", en: "Sofrito and Seasonings" }, /^(sofrito|recaito|sazon|aceite de achiote)/],
    ["adobos", { es: "Adobos", en: "Adobos" }, /^adobo/],
    ["mojos", { es: "Mojos, Piques y Salsas Criollas", en: "Mojos, Hot Sauces and Creole Sauces" }, /mojo|mojito|ajilimojili|criolla|chimichurri|pique/],
    ["bbq", { es: "BBQ y Glaseados", en: "BBQ Sauces and Glazes" }, /bbq|glaseado|agridulce|teriyaki/],
    ["aderezos", { es: "Aderezos, Mayos y Vinagretas", en: "Dressings, Mayos and Vinaigrettes" }, /aderezo|vinagreta|mayo/],
    ["salsas", { es: "Salsas y Dips", en: "Sauces and Dips" }, null]
  ],
  bebidas: [
    ["batidas", { es: "Batidas y Champolas", en: "Shakes and Champolas" }, /batida|champola/],
    ["sinalcohol", { es: "Tragos sin Alcohol", en: "Alcohol-Free Drinks" }, /sin alcohol|spritzer|refresco/],
    ["cafe", { es: "Café y Té Fríos", en: "Iced Coffee and Tea" }, /cafe|frappe|te helado|te frio/],
    ["tipicas", { es: "Bebidas Típicas", en: "Traditional Drinks" }, null]
  ],
  jugos: [
    ["jugos", { es: "Jugos de Frutas", en: "Fruit Juices" }, /^jugo|^refresco/],
    ["limonadas", { es: "Limonadas", en: "Lemonades" }, /limonada/],
    ["aguas", { es: "Agua de Coco y Guarapo", en: "Coconut Water and Cane Juice" }, null]
  ],
  cocteles: [
    ["coladas", { es: "Coladas", en: "Coladas" }, /colada|lava flow|painkiller|blue hawaiian|coco loco|coco frio/],
    ["mojitos", { es: "Mojitos, Daiquirís y Margaritas", en: "Mojitos, Daiquiris and Margaritas" }, /mojito|daiquiri|caipirina|margarita/],
    ["tiki", { es: "Tragos Tiki y Otros Clásicos", en: "Tiki and Other Classic Drinks" }, null],
    ["coquitos", { es: "Coquitos y Ponches", en: "Coquitos and Punches" }, /coquito|ponche/],
    ["caseros", { es: "Sangrías, Pitorros y Licores Caseros", en: "Sangrias, Pitorros and Homemade Liqueurs" }, /sangria|pitorro|bili|limoncello|chichaito/]
  ]
};

// Orden en que se prueban las familias cuando difiere del orden en que se muestran
// (p. ej. "costillas de res" antes que el cerdo, "pechuga de pavo" antes que las pechugas).
const FAMILY_MATCH_ORDER = {
  carnes: ["visceras", "embutidos", "otras", "res", "cerdo"],
  aves: ["menudos", "pavo", "otras", "pechugas", "alitas", "pollo"],
  pescados: ["frios", "mariscadas", "bacalao", "camarones", "langosta", "moluscos", "conchas", "pescados"],
  ensaladas: ["granos", "mariscos", "papa", "verdes"],
  sopas: ["asopaos", "frias", "cremas", "sancochos", "granos", "pescado", "carnes", "vegetales"],
  entremeses: ["empanadillas", "croquetas", "otros", "alcapurrias", "bolitas", "mar", "masa"],
  bizcochos: ["cupcakes", "otros", "mojados", "calabaza", "frutas", "clasicos"],
  galletitas: ["jengibre", "mantequilla", "frutas", "otras"],
  panes: ["panqueques", "salados", "agua", "viandas", "dulces"],
  vegetales: ["pasteles", "mofongos", "berenjenas", "papas", "platanos", "viandas", "rellenos", "otros"],
  arroces: ["paellas", "mar", "fritos", "carnes", "granos", "otros"],
  postres: ["cheesecakes", "flanes", "gelatinas", "helados", "tembleques", "arroces", "budines", "bizcochos", "dulces"],
  bebidas: ["batidas", "sinalcohol", "cafe", "tipicas"],
  salsas: ["bases", "adobos", "aderezos", "bbq", "mojos", "salsas"],
  cocteles: ["coquitos", "caseros", "coladas", "mojitos", "tiki"]
};

const familyNorm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const familyCache = new Map();

/* Índice (en el orden en que se muestra) de la familia de una receta en su categoría. */
function recipeFamily(r) {
  if (familyCache.has(r.id)) return familyCache.get(r.id);
  const fams = RECIPE_FAMILIES[r.category];
  let idx = 0;
  if (fams) {
    const name = familyNorm(r.name.es);
    const order = (FAMILY_MATCH_ORDER[r.category] || fams.map((f) => f[0])).map((k) => fams.findIndex((f) => f[0] === k));
    const hit = order.find((i) => fams[i][2] && fams[i][2].test(name));
    idx = hit !== undefined ? hit : fams.findIndex((f) => !f[2]);
    if (idx < 0) idx = fams.length - 1;
  }
  familyCache.set(r.id, idx);
  return idx;
}

/* Ordena una lista por familia y, dentro de cada una, por nombre en el idioma dado. */
function sortByFamily(list, lang) {
  return list.slice().sort((a, b) =>
    (a.category === b.category ? recipeFamily(a) - recipeFamily(b) : 0) ||
    a.name[lang].localeCompare(b.name[lang], lang, { sensitivity: "base" }));
}

/* Agrupa las recetas de una categoría: [{ key, label, recipes }] en el orden de las familias. */
function groupByFamily(list, category, lang) {
  const fams = RECIPE_FAMILIES[category];
  if (!fams) return [{ key: "all", label: null, recipes: sortByFamily(list, lang) }];
  const groups = fams.map(([key, label]) => ({ key, label: label[lang], recipes: [] }));
  for (const r of sortByFamily(list, lang)) groups[recipeFamily(r)].recipes.push(r);
  return groups.filter((g) => g.recipes.length);
}
