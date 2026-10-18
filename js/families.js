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
    ["chocolate", { es: "Chocolate caliente", en: "Hot chocolate" }, /^chocolate/],
    ["especias", { es: "Tés de especias y cáscaras", en: "Spice and peel teas" }, /^(?!.*jamaica).*(canela|anis|jengibre|curcuma|chai|cascara|hinojo)/],
    ["hierbas", { es: "Tés de hojas, flores y hierbas", en: "Leaf, flower and herb teas" }, null]
  ],
  frutas: [
    ["almibar", { es: "Dulces en almíbar", en: "Fruits in syrup" }, /almibar|^cascos|^dulce/],
    ["mermeladas", { es: "Mermeladas, jaleas y pastas", en: "Jams, jellies and pastes" }, /mermelada|jalea|pasta de/],
    ["yogur", { es: "Con yogur", en: "With yogurt" }, /yogur|parfait|bowl/],
    ["frescas", { es: "Frutas frescas y asadas", en: "Fresh and grilled fruit" }, null]
  ],
  cereales: [
    ["avena", { es: "Avena", en: "Oats" }, /avena|granola/],
    ["cremas", { es: "Cremas y harinas calientes", en: "Hot cereals" }, /crema|cremita|farina|maicena|harina|funche|quinoa/],
    ["otros", { es: "Otros", en: "Other" }, null]
  ],
  granos: [
    ["habichuelas", { es: "Habichuelas", en: "Beans" }, /habichuelas/],
    ["garbanzos", { es: "Garbanzos", en: "Chickpeas" }, /garbanzos|hummus/],
    ["gandules", { es: "Gandules", en: "Pigeon peas" }, /gandules/],
    ["lentejas", { es: "Lentejas", en: "Lentils" }, /lentejas/],
    ["otros", { es: "Habas y guisantes", en: "Fava beans and peas" }, null]
  ],
  ensaladas: [
    ["verdes", { es: "Verdes y de vegetales", en: "Green and vegetable salads" }, null],
    ["granos", { es: "De granos", en: "Bean and grain salads" }, /frijoles|gandules|garbanzos|habichuelas|lentejas/],
    ["papa", { es: "De papa, pasta y viandas", en: "Potato, pasta and root salads" }, /papa|coditos|pana/],
    ["mariscos", { es: "De pescado y mariscos", en: "Fish and seafood salads" }, /camarones|bacalao|atun|serenata|pulpo|mariscos|carrucho|ceviche/]
  ],
  sopas: [
    ["asopaos", { es: "Asopaos", en: "Asopaos" }, /^asopao/],
    ["sancochos", { es: "Sancochos, caldos y sopones", en: "Sancochos, broths and sopones" }, /sancocho|caldo|sopon|mondongo/],
    ["cremas", { es: "Cremas", en: "Cream soups" }, /^crema/],
    ["granos", { es: "De granos", en: "Bean soups" }, /habichuelas|frijoles|lentejas|gandules|garbanzos/],
    ["carnes", { es: "De pollo y carnes", en: "Chicken and meat soups" }, /pollo|gallina|res|carne|albondigas|salchichas|chorizo|cabro/],
    ["pescado", { es: "De pescado y mariscos", en: "Fish and seafood soups" }, /pescado|mariscos/],
    ["frias", { es: "Gazpachos (frías)", en: "Gazpachos (cold)" }, /gazpacho/],
    ["vegetales", { es: "De vegetales, viandas y fideos", en: "Vegetable, root and noodle soups" }, null]
  ],
  carnes: [
    ["res", { es: "Res", en: "Beef" }, /bistec|churrasco|carne (guisada|mechada|bif)|ropa vieja|picadillo|salpicon|de res|res |falda|picanha|ribeye|osobuco|napolitana|ternera|rabo|albondigas|pastelon/],
    ["cerdo", { es: "Cerdo", en: "Pork" }, null],
    ["otras", { es: "Cabro, cordero y conejo", en: "Goat, lamb and rabbit" }, /cabr|chivo|cordero|conejo/],
    ["embutidos", { es: "Embutidos", en: "Sausages" }, /longaniza|salchichas|morcilla/],
    ["visceras", { es: "Vísceras", en: "Offal" }, /lengua|higado|gandinga|cuajito|rinoncitos/]
  ],
  aves: [
    ["pollo", { es: "Pollo entero y en presas", en: "Whole and cut-up chicken" }, null],
    ["pechugas", { es: "Pechugas", en: "Chicken breasts" }, /^pechuga(s)? (?!de pavo)/],
    ["alitas", { es: "Alitas y muslos", en: "Wings and thighs" }, /^alitas|^muslos (de pollo|glaseados)/],
    ["pavo", { es: "Pavo", en: "Turkey" }, /pavo/],
    ["otras", { es: "Guinea, gallina, pato y otras aves", en: "Guinea hen, hen, duck and other birds" }, /guinea|gallinitas|gallina|pato|codorn/],
    ["menudos", { es: "Mollejas e higaditos", en: "Gizzards and livers" }, /mollejas|higaditos/]
  ],
  pescados: [
    ["pescados", { es: "Pescados", en: "Fish" }, null],
    ["bacalao", { es: "Bacalao", en: "Salt cod" }, /bacalao/],
    ["camarones", { es: "Camarones", en: "Shrimp" }, /camarones/],
    ["langosta", { es: "Langosta y jueyes", en: "Lobster and land crab" }, /langosta|jueyes/],
    ["moluscos", { es: "Pulpo, calamar y carrucho", en: "Octopus, squid and conch" }, /pulpo|calamar|carrucho/],
    ["conchas", { es: "Almejas, mejillones, ostiones y vieiras", en: "Clams, mussels, oysters and scallops" }, /almejas|mejillones|ostiones|vieiras/],
    ["mariscadas", { es: "Mariscadas y mofongos", en: "Seafood medleys and mofongos" }, /mariscada|mofongo/],
    ["frios", { es: "Ceviches, cócteles y ensaladas", en: "Ceviches, cocktails and salads" }, /ceviche|coctel|ensalada/]
  ],
  huevos: [
    ["huevos", { es: "Huevos", en: "Eggs" }, /^huevos|jamonilla|huevo frito|ensalada de huevo/],
    ["tortillas", { es: "Tortillas y revoltillos", en: "Omelets and scrambles" }, /tortilla|revoltillo|omelet|quiche/],
    ["quesos", { es: "Quesos", en: "Cheeses" }, /queso/]
  ],
  entremeses: [
    ["empanadillas", { es: "Empanadillas y pastelillos", en: "Turnovers" }, /empanadillas|pastelillos|tarta de hojaldre/],
    ["alcapurrias", { es: "Alcapurrias y frituras de plátano y yuca", en: "Alcapurrias and plantain and cassava fritters" }, /alcapurrias|piononos|tostones rellenos|tostones con|aranitas|empanadas de yuca/],
    ["bolitas", { es: "Bolitas, buñuelos y rellenos", en: "Fritter balls, buñuelos and stuffed fritters" }, /bolitas|bunuelos|barriguitas|rellenos de|almojabanas/],
    ["mar", { es: "Bacalaítos y frituras de mar", en: "Codfish fritters and seafood fritters" }, /bacalaitos|calamares|pescado|pulpo/],
    ["croquetas", { es: "Croquetas", en: "Croquettes" }, /croquetas/],
    ["masa", { es: "Sorullitos, domplines y otras frituras", en: "Sorullitos, dumplings and other fritters" }, null],
    ["otros", { es: "Otros entremeses", en: "Other appetizers" }, /mollejas|queso de freir/]
  ],
  pastas: [
    ["espaguetis", { es: "Espaguetis", en: "Spaghetti" }, /espaguetis/],
    ["coditos", { es: "Coditos y macarrones", en: "Elbows and macaroni" }, /coditos|macarrones/],
    ["horno", { es: "Lasañas y canelones", en: "Lasagna and cannelloni" }, /lasana|canelones/],
    ["fideos", { es: "Fideos y otras pastas", en: "Noodles and other pasta" }, null]
  ],
  bizcochos: [
    ["clasicos", { es: "Clásicos", en: "Classics" }, null],
    ["mojados", { es: "Mojados y con licor", en: "Soaked and liquor cakes" }, /mojado|brandy|amaretto/],
    ["frutas", { es: "De frutas y coco", en: "Fruit and coconut cakes" }, /^(?!.*cumpleanos).*(pina|guayaba|china|parcha|coco|guineo|mango|zanahoria|limon|grosella|guanabana|platano)/],
    ["calabaza", { es: "De calabaza", en: "Pumpkin cakes" }, /calabaza/],
    ["cupcakes", { es: "Cupcakes", en: "Cupcakes" }, /cupcakes/],
    ["otros", { es: "Brazos gitanos y brownies", en: "Rolled cakes and brownies" }, /brazo gitano|brownies/]
  ],
  galletitas: [
    ["jengibre", { es: "Cucas y galletas de jengibre", en: "Cucas and ginger cookies" }, /cucas|jengibre|melao|munequitos/],
    ["mantequilla", { es: "De mantequilla y maicena", en: "Butter and cornstarch cookies" }, /mantequilla(?! de mani)|maicena|mantecaditos|polvorones|danesas|royales|alfajores|maria|soda/],
    ["frutas", { es: "De frutas y coco", en: "Fruit and coconut cookies" }, /^(?!.*chocolate).*(coco|guayaba|parcha|limon|guineo|batata|calabaza|pasas|espirales|pina)/],
    ["otras", { es: "De chocolate, café, avena y otras", en: "Chocolate, coffee, oat and other cookies" }, null]
  ],
  pasteles_dulces: [
    ["pies", { es: "Pies", en: "Pies" }, /^pie|pastel \(pie\)/],
    ["flanes", { es: "Flanes y quesillos", en: "Flans and quesillos" }, /flan|quesillo/],
    ["hojaldre", { es: "Hojaldre y pastelillos", en: "Puff pastry and turnovers" }, /hojaldre|palmeras|milhojas|pastelillos|quesitos|trenza/],
    ["otros", { es: "Otros pasteles", en: "Other pastries" }, null]
  ],
  panes: [
    ["panqueques", { es: "Panqueques", en: "Pancakes" }, /^panqueques/],
    ["agua", { es: "Pan de agua, sobao y de molde", en: "Water bread, sobao and sandwich bread" }, /pan de agua|sobao|manteca|pan de mantequilla|molde|tostado|pan con ajo/],
    ["dulces", { es: "Panes dulces y donas", en: "Sweet breads and doughnuts" }, null],
    ["viandas", { es: "De viandas y maíz", en: "Root vegetable and corn breads" }, /yautia|maiz|casabe|arepas|panapen/],
    ["salados", { es: "Con queso y jamón", en: "Cheese and ham breads" }, /^(?!mallorca|trenza).*(queso|jamon|quesitos|cachitos)/]
  ],
  emparedados: [
    ["clasicos", { es: "Clásicos boricuas", en: "Puerto Rican classics" }, /cubano|medianoche|tripleta|jibarito(?! de pollo)|mezcla|club|desayuno/],
    ["carnes", { es: "De carnes", en: "Meat sandwiches" }, /bistec|churrasco|pernil|lechon|choripan|hamburguesas boricuas/],
    ["aves", { es: "De pollo y pavo", en: "Chicken and turkey sandwiches" }, /pollo|pechuga|pavochon/],
    ["mar", { es: "De pescado y atún", en: "Fish and tuna sandwiches" }, /pescado|atun/],
    ["otros", { es: "Vegetarianos y otros", en: "Vegetarian and other" }, null]
  ],
  postres: [
    ["flanes", { es: "Flanes", en: "Flans" }, /^flan|tocino del cielo/],
    ["tembleques", { es: "Tembleques, majaretes y natillas", en: "Tembleques, majaretes and custards" }, /tembleque|majarete|natilla|mazamorra|panna cotta|mousse|crema fria|crema catalana/],
    ["arroces", { es: "Arroces dulces", en: "Sweet rice" }, /^arroz con/],
    ["budines", { es: "Budines, pudines y torrejas", en: "Bread puddings and puddings" }, /budin|pudin|cazuela|torrejas|sopa borracha/],
    ["cheesecakes", { es: "Cheesecakes", en: "Cheesecakes" }, /cheesecake|tarta de queso/],
    ["gelatinas", { es: "Gelatinas", en: "Gelatins" }, /gelatina/],
    ["helados", { es: "Helados, limbers y piraguas", en: "Ice creams, limbers and piraguas" }, /helado|limber|piragua|mantecado|paletas|sorbete/],
    ["bizcochos", { es: "Bizcochos, tres leches y tartas", en: "Cakes, tres leches and tarts" }, /bizcocho|tres leches|brazo gitano|pavlova|copa|crumble|crepas|churros|tiramisu|tarta de guineo/],
    ["dulces", { es: "Dulces de coco y frutas", en: "Coconut and fruit sweets" }, null]
  ],
  arroces: [
    ["granos", { es: "Con gandules, habichuelas y garbanzos", en: "With pigeon peas, beans and chickpeas" }, /gandules|habichuelas|moros|mamposteao|garbanzos|lentejas/],
    ["carnes", { es: "Con pollo y carnes", en: "With chicken and meats" }, /pollo|alitas|guinea|mollejas|pernil|costillitas|longaniza|salchichas|carne bif|salami|locrio|chorizo|tocineta|carne molida|chuletas|pavo|imperial/],
    ["mar", { es: "Con pescado y mariscos", en: "With fish and seafood" }, /camarones|langosta|jueyes|pulpo|calamares|bacalao|atun|sardinas|pescado/],
    ["fritos", { es: "Arroces fritos", en: "Fried rice" }, /chino|frito/],
    ["paellas", { es: "Paellas", en: "Paellas" }, /paella/],
    ["otros", { es: "Arroz blanco, de hierbas y de sabores", en: "White, herb and flavored rice" }, null]
  ],
  vegetales: [
    ["platanos", { es: "Tostones, amarillos y guineítos", en: "Tostones, sweet plantains and green bananas" }, /tostones|amarillo|platanutres|maduros|guineitos|guineos/],
    ["mofongos", { es: "Mofongos, majados y trifongo", en: "Mofongos, mashes and trifongo" }, /mofongo|majado|trifongo/],
    ["pasteles", { es: "Pasteles y pastelones", en: "Pasteles and pastelones" }, /^pasteles|pastelon|^pinon/],
    ["viandas", { es: "Yuca, pana y otras viandas", en: "Cassava, breadfruit and other roots" }, /yuca|pana|batata|viandas|malanga|name|yautia/],
    ["papas", { es: "Papas", en: "Potatoes" }, /^(?!fricase).*(papas|papitas)/],
    ["berenjenas", { es: "Berenjenas", en: "Eggplant" }, /berenjena/],
    ["rellenos", { es: "Rellenos y gratinados", en: "Stuffed and gratin vegetables" }, /rellen|gratinad|pimientos/],
    ["otros", { es: "Vegetales guisados, salteados y asados", en: "Stewed, sautéed and roasted vegetables" }, null]
  ],
  salsas: [
    ["bases", { es: "Sofrito y sazones", en: "Sofrito and seasonings" }, /^(sofrito|recaito|sazon|aceite de achiote)/],
    ["adobos", { es: "Adobos", en: "Adobos" }, /^adobo/],
    ["mojos", { es: "Mojos, piques y salsas criollas", en: "Mojos, hot sauces and creole sauces" }, /mojo|mojito|ajilimojili|criolla|chimichurri|pique/],
    ["bbq", { es: "BBQ y glaseados", en: "BBQ sauces and glazes" }, /bbq|glaseado|agridulce|teriyaki/],
    ["aderezos", { es: "Aderezos, mayos y vinagretas", en: "Dressings, mayos and vinaigrettes" }, /aderezo|vinagreta|mayo/],
    ["salsas", { es: "Salsas y dips", en: "Sauces and dips" }, null]
  ],
  bebidas: [
    ["batidas", { es: "Batidas y champolas", en: "Shakes and champolas" }, /batida|champola/],
    ["sinalcohol", { es: "Tragos sin alcohol", en: "Alcohol-free drinks" }, /sin alcohol|spritzer|refresco/],
    ["cafe", { es: "Café y té fríos", en: "Iced coffee and tea" }, /cafe|frappe|te helado/],
    ["tipicas", { es: "Bebidas típicas", en: "Traditional drinks" }, null]
  ],
  jugos: [
    ["jugos", { es: "Jugos de frutas", en: "Fruit juices" }, /^jugo|^refresco/],
    ["limonadas", { es: "Limonadas", en: "Lemonades" }, /limonada/],
    ["aguas", { es: "Agua de coco y guarapo", en: "Coconut water and cane juice" }, null]
  ],
  cocteles: [
    ["coladas", { es: "Coladas", en: "Coladas" }, /colada|lava flow|painkiller|blue hawaiian|coco loco|coco frio/],
    ["mojitos", { es: "Mojitos, daiquirís y margaritas", en: "Mojitos, daiquiris and margaritas" }, /mojito|daiquiri|caipirina|margarita/],
    ["tiki", { es: "Tragos tiki y otros clásicos", en: "Tiki and other classic drinks" }, null],
    ["coquitos", { es: "Coquitos y ponches", en: "Coquitos and punches" }, /coquito|ponche/],
    ["caseros", { es: "Sangrías, pitorros y licores caseros", en: "Sangrias, pitorros and homemade liqueurs" }, /sangria|pitorro|bili|limoncello|chichaito/]
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
