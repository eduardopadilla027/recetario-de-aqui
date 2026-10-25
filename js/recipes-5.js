/* Recetarios de Aquí · Recetas (quinto archivo de ampliación).
 * Se carga después de recipes-4.js y añade recetas con recipes.push(...).
 * Mismo modelo que recipes.js (ARQUITECTURA.md §5). */

recipes.push(
  // ---------- Tanda 44: más veganas (9) y vegetarianas (7) ----------
  {
    id: "arroz-gandules-vegano",
    category: "arroces",
    name: { es: "Arroz con Gandules Vegano", en: "Vegan Rice with Pigeon Peas" },
    active: 50, total: 50,
    servings: 8,
    ingredients: {
      es: [
        "3 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "½ taza de salsa de tomate",
        "1 cucharadita de comino",
        "1 cucharadita de orégano",
        "1 lata de 15 onzas de gandules verdes, escurridos",
        "3 tazas de arroz grano mediano, lavado",
        "2 tazas de caldo de vegetales y 2 tazas de agua",
        "½ cucharadita de sal",
        "1 hoja de plátano (opcional)"
      ],
      en: [
        "3 tablespoons annatto oil",
        "½ cup sofrito",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "½ cup tomato sauce",
        "1 teaspoon cumin",
        "1 teaspoon oregano",
        "1 can (15 oz) green pigeon peas, drained",
        "3 cups medium-grain rice, rinsed",
        "2 cups vegetable broth and 2 cups water",
        "½ teaspoon salt",
        "1 plantain leaf (optional)"
      ]
    },
    steps: {
      es: [
        "En un caldero, sofría el sofrito en el aceite de achiote 3 minutos a fuego medio.",
        "Añada las aceitunas, las alcaparras, la salsa de tomate, el comino y el orégano, y cocine 2 minutos.",
        "Añada los gandules, el arroz, el caldo, el agua y la sal. Mezcle una vez y deje hervir hasta que el líquido baje al nivel del arroz.",
        "Baje el fuego al mínimo, cubra con la hoja de plátano (si la usa) y la tapa, y cocine 20 minutos sin destapar.",
        "Voltee el arroz de abajo hacia arriba, tape y cocine 10 minutos más. El sabor que da el tocino lo ponen aquí el achiote, las aceitunas y las alcaparras."
      ],
      en: [
        "In a caldero, sauté the sofrito in the annatto oil 3 minutes over medium heat.",
        "Add the olives, capers, tomato sauce, cumin and oregano and cook 2 minutes.",
        "Add the pigeon peas, rice, broth, water and salt. Stir once and boil until the liquid drops to the level of the rice.",
        "Lower the heat to the minimum, cover with the plantain leaf (if using) and the lid, and cook 20 minutes without uncovering.",
        "Turn the rice from the bottom up, cover and cook 10 more minutes. The annatto, olives and capers bring the flavor that salt pork usually adds."
      ]
    }
  },
  {
    id: "pasteles-veganos-garbanzos",
    category: "vegetales",
    name: { es: "Pasteles Veganos de Garbanzos y Setas", en: "Vegan Chickpea and Mushroom Pasteles" },
    active: 150, total: 150,
    servings: 12,
    ingredients: {
      es: [
        "8 guineos verdes",
        "1 libra de yautía blanca",
        "½ libra de calabaza",
        "½ taza de aceite de achiote",
        "1 taza de caldo de vegetales",
        "2 cucharaditas de sal",
        "½ taza de sofrito",
        "1 libra de setas o champiñones picados",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "¼ taza de aceitunas rellenas picadas",
        "½ taza de salsa de tomate",
        "1 cucharadita de comino",
        "12 hojas de plátano, soasadas",
        "Papel de pastel e hilo para amarrar"
      ],
      en: [
        "8 green bananas",
        "1 pound white yautía (taro)",
        "½ pound calabaza (West Indian pumpkin)",
        "½ cup annatto oil",
        "1 cup vegetable broth",
        "2 teaspoons salt",
        "½ cup sofrito",
        "1 pound mushrooms, chopped",
        "1 can (15 oz) chickpeas, drained",
        "¼ cup stuffed olives, chopped",
        "½ cup tomato sauce",
        "1 teaspoon cumin",
        "12 plantain leaves, wilted over the flame",
        "Pastel paper and string to tie"
      ]
    },
    steps: {
      es: [
        "Pele los guineos, la yautía y la calabaza, y rállelos fino (o páselos por el procesador). Mezcle la masa con ¼ taza del aceite de achiote, el caldo y 1 cucharadita de sal.",
        "Para el relleno, sofría el sofrito en 2 cucharadas del aceite de achiote. Añada las setas y cocine 8 minutos hasta que suelten el agua y se doren.",
        "Añada los garbanzos, las aceitunas, la salsa de tomate, el comino y la otra cucharadita de sal. Cocine 5 minutos y deje enfriar.",
        "Unte un poco de aceite de achiote en cada hoja, ponga ½ taza de masa, extiéndala y coloque 2 cucharadas de relleno en el centro.",
        "Doble la hoja como un sobre, envuélvala en el papel y amarre de dos en dos.",
        "Hierva los pasteles en agua con sal 1 hora, volteándolos a la media hora. Sáquelos, quíteles el hilo y sirva. Se congelan crudos hasta 3 meses."
      ],
      en: [
        "Peel the green bananas, yautía and calabaza and grate them finely (or use a food processor). Mix the masa with ¼ cup of the annatto oil, the broth and 1 teaspoon salt.",
        "For the filling, sauté the sofrito in 2 tablespoons of the annatto oil. Add the mushrooms and cook 8 minutes until they release their water and brown.",
        "Add the chickpeas, olives, tomato sauce, cumin and the other teaspoon of salt. Cook 5 minutes and let cool.",
        "Brush a little annatto oil on each leaf, add ½ cup masa, spread it and place 2 tablespoons of filling in the center.",
        "Fold the leaf like an envelope, wrap it in the paper and tie the pasteles in pairs.",
        "Boil the pasteles in salted water 1 hour, turning them after 30 minutes. Remove, untie and serve. They freeze uncooked for up to 3 months."
      ]
    }
  },
  {
    id: "tripleta-vegana",
    category: "emparedados",
    name: { es: "Tripleta Vegana de Setas, Tofu y Jaca", en: "Vegan Tripleta with Mushrooms, Tofu and Jackfruit" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "1 paquete de 14 onzas de tofu firme, prensado y en lonjas finas",
        "½ libra de setas portobello en tiras",
        "1 lata de 20 onzas de jaca verde en salmuera, escurrida y desmenuzada",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de salsa de soya",
        "1 cucharadita de orégano",
        "1 cucharadita de ajo en polvo",
        "2 panes de agua, cortados en dos (revise que sean veganos)",
        "2 tazas de repollo picado fino",
        "2 tomates en ruedas",
        "½ taza de papitas de bolsa",
        "¼ taza de ketchup",
        "2 cucharadas de mostaza"
      ],
      en: [
        "1 package (14 oz) firm tofu, pressed and thinly sliced",
        "½ pound portobello mushrooms, in strips",
        "1 can (20 oz) green jackfruit in brine, drained and shredded",
        "2 tablespoons olive oil",
        "1 tablespoon soy sauce",
        "1 teaspoon oregano",
        "1 teaspoon garlic powder",
        "2 water-bread loaves, cut in half (check that they are vegan)",
        "2 cups finely shredded cabbage",
        "2 tomatoes, sliced",
        "½ cup potato sticks (papitas)",
        "¼ cup ketchup",
        "2 tablespoons mustard"
      ]
    },
    steps: {
      es: [
        "Dore el tofu en 1 cucharada de aceite 3 minutos por lado, con la mitad de la salsa de soya. Sáquelo.",
        "En el mismo sartén, dore las setas en ½ cucharada de aceite 5 minutos con el ajo en polvo. Sáquelas.",
        "Enjuague la jaca para quitarle la sal y dórela en el resto del aceite con el resto de la soya y el orégano, aplastándola, 6 minutos hasta que quede como carne desmenuzada.",
        "Abra cada pedazo de pan y caliéntelo en la plancha. Mezcle el ketchup y la mostaza como salsa.",
        "Arme: salsa, repollo, tomate, el tofu, las setas y la jaca, y termine con las papitas. Aplaste un poco en la plancha y sirva caliente, como en los carritos."
      ],
      en: [
        "Brown the tofu in 1 tablespoon oil 3 minutes per side with half the soy sauce. Remove.",
        "In the same skillet, brown the mushrooms in ½ tablespoon oil 5 minutes with the garlic powder. Remove.",
        "Rinse the jackfruit to remove the salt and brown it in the remaining oil with the rest of the soy sauce and the oregano, mashing it, 6 minutes until it looks like shredded meat.",
        "Split each piece of bread and warm it on the griddle. Mix the ketchup and mustard as the sauce.",
        "Build: sauce, cabbage, tomato, tofu, mushrooms and jackfruit, and top with the potato sticks. Press lightly on the griddle and serve hot, food-truck style."
      ]
    }
  },
  {
    id: "setas-encebolladas-viandas",
    category: "vegetales",
    name: { es: "Setas Encebolladas con Viandas (Vegano)", en: "Mushrooms Smothered in Onions with Root Vegetables (Vegan)" },
    active: 40, total: 55, wait: "reposo",
    servings: 4,
    ingredients: {
      es: [
        "1 libra de setas portobello en lonjas gruesas",
        "2 cebollas grandes en ruedas",
        "4 dientes de ajo machacados",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharada de salsa de soya",
        "1 cucharadita de orégano",
        "½ cucharadita de sal",
        "1 libra de yuca",
        "1 libra de batata",
        "½ libra de yautía"
      ],
      en: [
        "1 pound portobello mushrooms, in thick slices",
        "2 large onions, sliced in rings",
        "4 garlic cloves, crushed",
        "3 tablespoons olive oil",
        "2 tablespoons vinegar",
        "1 tablespoon soy sauce",
        "1 teaspoon oregano",
        "½ teaspoon salt",
        "1 pound yuca (cassava)",
        "1 pound batata (sweet potato)",
        "½ pound yautía (taro)"
      ]
    },
    steps: {
      es: [
        "Adobe las setas con el ajo, el vinagre, la soya, el orégano y la sal. Deje reposar 15 minutos.",
        "Mientras, pele las viandas, córtelas en trozos y hiérvalas en agua con sal 20 a 25 minutos hasta que estén blandas.",
        "Dore las setas en 2 cucharadas de aceite a fuego alto, 3 minutos por lado. Sáquelas.",
        "En el mismo sartén, cocine la cebolla en el resto del aceite 8 minutos hasta que se ablande. Añada el líquido del adobo y ¼ taza de agua.",
        "Vuelva las setas al sartén, tape y cocine 5 minutos. Sirva sobre las viandas con la cebolla y su salsa por encima, como un bistec encebollado."
      ],
      en: [
        "Season the mushrooms with the garlic, vinegar, soy sauce, oregano and salt. Let rest 15 minutes.",
        "Meanwhile, peel the root vegetables, cut into chunks and boil in salted water 20 to 25 minutes until tender.",
        "Brown the mushrooms in 2 tablespoons oil over high heat, 3 minutes per side. Remove.",
        "In the same skillet, cook the onion in the remaining oil 8 minutes until soft. Add the marinade liquid and ¼ cup water.",
        "Return the mushrooms to the skillet, cover and cook 5 minutes. Serve over the root vegetables with the onions and sauce on top, like bistec encebollado."
      ]
    }
  },
  {
    id: "crema-calabaza-coco-vegana",
    category: "sopas",
    name: { es: "Crema Vegana de Calabaza, Coco y Jengibre", en: "Vegan Calabaza, Coconut and Ginger Soup" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de calabaza pelada en cubos",
        "1 cebolla picada",
        "3 dientes de ajo",
        "1 cucharada de jengibre fresco rallado",
        "2 cucharadas de aceite de oliva",
        "3 tazas de caldo de vegetales",
        "1 lata de 13.5 onzas de leche de coco",
        "½ cucharadita de sal",
        "½ cucharadita de nuez moscada",
        "2 cucharadas de semillas de calabaza tostadas",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "2 pounds peeled calabaza (West Indian pumpkin), cubed",
        "1 onion, chopped",
        "3 garlic cloves",
        "1 tablespoon grated fresh ginger",
        "2 tablespoons olive oil",
        "3 cups vegetable broth",
        "1 can (13.5 oz) coconut milk",
        "½ teaspoon salt",
        "½ teaspoon nutmeg",
        "2 tablespoons toasted pumpkin seeds",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el ajo y el jengibre en el aceite 5 minutos.",
        "Añada la calabaza y el caldo. Hierva tapado 20 minutos hasta que la calabaza esté blanda.",
        "Licúe con cuidado (el vapor empuja la tapa) hasta que quede bien cremosa.",
        "Vuelva a la olla, añada la leche de coco, la sal y la nuez moscada, y caliente sin que hierva.",
        "Sirva con las semillas de calabaza y el cilantro por encima. Va bien con tostones o pan de agua."
      ],
      en: [
        "Sauté the onion, garlic and ginger in the oil 5 minutes.",
        "Add the calabaza and broth. Boil covered 20 minutes until the calabaza is soft.",
        "Blend carefully (the steam pushes the lid) until very creamy.",
        "Return to the pot, add the coconut milk, salt and nutmeg and heat without boiling.",
        "Serve topped with the pumpkin seeds and cilantro. Good with tostones or water bread."
      ]
    }
  },
  {
    id: "ensalada-papa-vegana",
    category: "ensaladas",
    name: { es: "Ensalada de Papa Vegana", en: "Vegan Potato Salad" },
    active: 40, total: 100, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de papas en cubos",
        "¼ taza de aquafaba (el líquido de una lata de garbanzos)",
        "1 cucharada de jugo de limón",
        "1 cucharadita de mostaza",
        "1 diente de ajo",
        "¾ taza de aceite vegetal",
        "1 cucharadita de sal",
        "½ taza de pimientos morrones picados",
        "¼ taza de cebolla roja picada fina",
        "1 tallo de apio picado",
        "½ taza de guisantes (petit pois) cocidos",
        "1 manzana verde en cubitos (opcional)",
        "1 pizca de pimentón"
      ],
      en: [
        "3 pounds potatoes, cubed",
        "¼ cup aquafaba (the liquid from a can of chickpeas)",
        "1 tablespoon lemon juice",
        "1 teaspoon mustard",
        "1 garlic clove",
        "¾ cup vegetable oil",
        "1 teaspoon salt",
        "½ cup chopped roasted red peppers (pimientos morrones)",
        "¼ cup finely chopped red onion",
        "1 celery stalk, chopped",
        "½ cup cooked green peas",
        "1 green apple, diced (optional)",
        "1 pinch paprika"
      ]
    },
    steps: {
      es: [
        "Hierva las papas en agua con sal 10 a 12 minutos, hasta que estén blandas pero firmes. Escurra y deje enfriar.",
        "Para la mayonesa de garbanzo: licúe la aquafaba, el limón, la mostaza, el ajo y la mitad de la sal. Con la licuadora encendida, añada el aceite en un chorrito fino hasta que espese.",
        "En un envase grande, mezcle las papas con los pimientos, la cebolla, el apio, los guisantes y la manzana (si la usa).",
        "Añada la mayonesa de garbanzo y el resto de la sal, y mezcle con cuidado para no romper las papas.",
        "Espolvoree el pimentón y refrigere 1 hora. Acompaña el arroz con gandules igual que la de huevo."
      ],
      en: [
        "Boil the potatoes in salted water 10 to 12 minutes, until tender but firm. Drain and let cool.",
        "For the chickpea mayo: blend the aquafaba, lemon juice, mustard, garlic and half the salt. With the blender running, add the oil in a thin stream until thickened.",
        "In a large bowl, mix the potatoes with the peppers, onion, celery, peas and apple (if using).",
        "Add the chickpea mayo and the rest of the salt and fold gently so the potatoes don't break.",
        "Sprinkle with paprika and refrigerate 1 hour. It goes with arroz con gandules just like the egg version."
      ]
    }
  },
  {
    id: "rellenos-papa-veganos",
    category: "entremeses",
    name: { es: "Rellenos de Papa Veganos con Picadillo de Lentejas", en: "Vegan Stuffed Potato Balls with Lentil Picadillo" },
    active: 75, total: 75,
    servings: 12,
    ingredients: {
      es: [
        "3 libras de papas peladas",
        "3 cucharadas de maicena",
        "1 cucharadita de sal",
        "2 cucharadas de aceite de oliva",
        "¼ taza de sofrito",
        "1 taza de lentejas cocidas",
        "¼ taza de salsa de tomate",
        "2 cucharadas de pasas",
        "1 cucharada de aceitunas rellenas picadas",
        "½ cucharadita de comino",
        "1 taza de pan rallado",
        "Aceite vegetal para freír"
      ],
      en: [
        "3 pounds peeled potatoes",
        "3 tablespoons cornstarch",
        "1 teaspoon salt",
        "2 tablespoons olive oil",
        "¼ cup sofrito",
        "1 cup cooked lentils",
        "¼ cup tomato sauce",
        "2 tablespoons raisins",
        "1 tablespoon chopped stuffed olives",
        "½ teaspoon cumin",
        "1 cup breadcrumbs",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva las papas 20 minutos hasta que estén blandas. Májelas con la sal y deje enfriar. Mezcle con 2 cucharadas de maicena.",
        "Para el picadillo, sofría el sofrito en el aceite de oliva. Añada las lentejas, la salsa de tomate, las pasas, las aceitunas y el comino. Cocine 8 minutos, aplastando un poco las lentejas, hasta que se seque. Deje enfriar.",
        "Con las manos húmedas, haga 12 bolas de puré, ábrales un hueco, rellene con 1 cucharada de picadillo y ciérrelas.",
        "Disuelva la otra cucharada de maicena en ¼ taza de agua. Pase cada relleno por esa mezcla y luego por el pan rallado (la maicena pega el pan sin huevo).",
        "Fría en aceite a 350 °F 3 a 4 minutos hasta que estén dorados. Escurra en papel toalla y sirva calientes."
      ],
      en: [
        "Boil the potatoes 20 minutes until tender. Mash with the salt and let cool. Mix in 2 tablespoons of the cornstarch.",
        "For the picadillo, sauté the sofrito in the olive oil. Add the lentils, tomato sauce, raisins, olives and cumin. Cook 8 minutes, mashing the lentils a little, until dry. Let cool.",
        "With wet hands, shape 12 balls of mash, make a hollow, fill with 1 tablespoon of picadillo and close them.",
        "Dissolve the other tablespoon of cornstarch in ¼ cup water. Dip each ball in that mixture and then in the breadcrumbs (the cornstarch makes the crumbs stick without egg).",
        "Fry in oil at 350 °F 3 to 4 minutes until golden. Drain on paper towels and serve hot."
      ]
    }
  },
  {
    id: "budin-pan-vegano",
    category: "postres",
    name: { es: "Budín de Pan Vegano con Coco y Pasas", en: "Vegan Coconut Raisin Bread Pudding" },
    active: 75, total: 95, wait: "remojo",
    servings: 10,
    ingredients: {
      es: [
        "1 libra de pan de agua del día anterior (revise que sea vegano), en pedazos",
        "2 latas de 13.5 onzas de leche de coco",
        "1 taza de leche de avena",
        "1 taza de azúcar morena",
        "¼ taza de maicena",
        "2 cucharadas de aceite de coco derretido",
        "1 cucharada de vainilla",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "¼ cucharadita de sal",
        "½ taza de pasas",
        "½ taza de azúcar para el caramelo"
      ],
      en: [
        "1 pound day-old water bread (check that it is vegan), torn in pieces",
        "2 cans (13.5 oz) coconut milk",
        "1 cup oat milk",
        "1 cup brown sugar",
        "¼ cup cornstarch",
        "2 tablespoons melted coconut oil",
        "1 tablespoon vanilla",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "¼ teaspoon salt",
        "½ cup raisins",
        "½ cup sugar for the caramel"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en la leche de coco y la leche de avena 20 minutos y desbarátelo con las manos.",
        "Caliente el horno a 350 °F. Derrita el azúcar para el caramelo en un molde de 9 pulgadas a fuego medio hasta que tome color ámbar, y cubra el fondo.",
        "Mezcle la maicena con el azúcar morena y añádala al pan con el aceite de coco, la vainilla, la canela, la nuez moscada, la sal y las pasas. Mezcle bien.",
        "Vierta en el molde y hornee a baño de María 1 hora, hasta que al insertar un palillo salga limpio. La maicena hace el trabajo del huevo.",
        "Deje enfriar por completo y refrigere antes de voltear sobre un plato, para que corte firme."
      ],
      en: [
        "Soak the bread in the coconut milk and oat milk 20 minutes and break it up with your hands.",
        "Heat the oven to 350 °F. Melt the caramel sugar in a 9-inch pan over medium heat until amber and coat the bottom.",
        "Mix the cornstarch with the brown sugar and add to the bread with the coconut oil, vanilla, cinnamon, nutmeg, salt and raisins. Mix well.",
        "Pour into the pan and bake in a water bath 1 hour, until a toothpick comes out clean. The cornstarch does the egg's job.",
        "Cool completely and refrigerate before turning out onto a plate, so it slices firm."
      ]
    }
  },
  {
    id: "galletitas-avena-guineo-veganas",
    category: "galletitas",
    name: { es: "Galletitas Veganas de Avena, Guineo y Coco", en: "Vegan Oat, Banana and Coconut Cookies" },
    active: 30, total: 30,
    servings: 18,
    ingredients: {
      es: [
        "2 guineos maduros majados",
        "¼ taza de aceite de coco derretido",
        "⅓ taza de azúcar morena",
        "1 cucharadita de vainilla",
        "2 tazas de avena en hojuelas",
        "½ taza de harina de trigo",
        "½ taza de coco rallado sin azúcar",
        "1 cucharadita de canela",
        "½ cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "½ taza de pasas o chispas de chocolate oscuro veganas"
      ],
      en: [
        "2 ripe bananas, mashed",
        "¼ cup melted coconut oil",
        "⅓ cup brown sugar",
        "1 teaspoon vanilla",
        "2 cups rolled oats",
        "½ cup all-purpose flour",
        "½ cup unsweetened shredded coconut",
        "1 teaspoon cinnamon",
        "½ teaspoon baking powder",
        "¼ teaspoon salt",
        "½ cup raisins or vegan dark chocolate chips"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y cubra una bandeja con papel de hornear.",
        "Mezcle el guineo majado con el aceite de coco, el azúcar morena y la vainilla.",
        "Añada la avena, la harina, el coco, la canela, el polvo de hornear y la sal, y luego las pasas o las chispas.",
        "Forme 18 bolitas, colóquelas en la bandeja y aplástelas un poco (no se expanden solas).",
        "Hornee 14 a 16 minutos hasta que los bordes estén dorados. Deje enfriar en la bandeja 5 minutos para que endurezcan."
      ],
      en: [
        "Heat the oven to 350 °F and line a baking sheet with parchment paper.",
        "Mix the mashed banana with the coconut oil, brown sugar and vanilla.",
        "Add the oats, flour, coconut, cinnamon, baking powder and salt, then the raisins or chips.",
        "Shape 18 balls, place them on the sheet and flatten them a little (they don't spread on their own).",
        "Bake 14 to 16 minutes until the edges are golden. Cool on the sheet 5 minutes so they firm up."
      ]
    }
  },
  {
    id: "canelones-espinaca-ricotta",
    category: "pastas",
    name: { es: "Canelones de Espinaca y Ricotta en Salsa Criolla", en: "Spinach Ricotta Cannelloni in Criollo Sauce" },
    active: 70, total: 70,
    servings: 6,
    ingredients: {
      es: [
        "12 tubos de canelones",
        "1 envase de 15 onzas de queso ricotta",
        "1 paquete de 10 onzas de espinaca congelada, descongelada y exprimida",
        "1 taza de queso mozzarella rallado",
        "½ taza de queso parmesano rallado",
        "1 huevo",
        "¼ cucharadita de nuez moscada",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 28 onzas de tomates triturados",
        "1 cucharadita de orégano",
        "1 cucharadita de sal"
      ],
      en: [
        "12 cannelloni tubes",
        "1 container (15 oz) ricotta cheese",
        "1 package (10 oz) frozen spinach, thawed and squeezed dry",
        "1 cup shredded mozzarella cheese",
        "½ cup grated parmesan cheese",
        "1 egg",
        "¼ teaspoon nutmeg",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 can (28 oz) crushed tomatoes",
        "1 teaspoon oregano",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva los canelones en agua con sal 2 minutos menos de lo que dice el paquete. Escurra y páselos por agua fría.",
        "Para la salsa criolla, sofría el sofrito en el aceite 3 minutos, añada los tomates, el orégano y ½ cucharadita de sal, y cocine 15 minutos.",
        "Mezcle la ricotta, la espinaca, la mitad del mozzarella, la mitad del parmesano, el huevo, la nuez moscada y el resto de la sal.",
        "Caliente el horno a 375 °F. Rellene los canelones con una manga o una cuchara y colóquelos sobre una capa de salsa en un molde.",
        "Cúbralos con el resto de la salsa y de los quesos. Tape con papel de aluminio y hornee 25 minutos; destape y hornee 10 más hasta que el queso dore."
      ],
      en: [
        "Boil the cannelloni in salted water 2 minutes less than the package says. Drain and rinse with cold water.",
        "For the criollo sauce, sauté the sofrito in the oil 3 minutes, add the tomatoes, oregano and ½ teaspoon salt, and cook 15 minutes.",
        "Mix the ricotta, spinach, half the mozzarella, half the parmesan, the egg, nutmeg and remaining salt.",
        "Heat the oven to 375 °F. Fill the cannelloni with a piping bag or spoon and lay them over a layer of sauce in a baking dish.",
        "Cover with the rest of the sauce and cheeses. Cover with foil and bake 25 minutes; uncover and bake 10 more until the cheese browns."
      ]
    }
  },
  {
    id: "piononos-espinaca-queso",
    category: "entremeses",
    name: { es: "Piononos Vegetarianos de Espinaca y Queso", en: "Vegetarian Spinach and Cheese Piononos" },
    active: 50, total: 50,
    servings: 8,
    ingredients: {
      es: [
        "3 plátanos maduros (amarillos)",
        "Aceite vegetal para freír",
        "1 taza de espinaca fresca picada",
        "1 taza de queso blanco del país desmoronado",
        "½ taza de queso mozzarella rallado",
        "2 cucharadas de sofrito",
        "1 cucharada de aceite de oliva",
        "2 huevos batidos",
        "2 cucharadas de harina de trigo",
        "¼ cucharadita de sal",
        "Palillos de madera"
      ],
      en: [
        "3 ripe plantains (amarillos)",
        "Vegetable oil for frying",
        "1 cup chopped fresh spinach",
        "1 cup crumbled Puerto Rican white cheese (queso del país)",
        "½ cup shredded mozzarella cheese",
        "2 tablespoons sofrito",
        "1 tablespoon olive oil",
        "2 eggs, beaten",
        "2 tablespoons all-purpose flour",
        "¼ teaspoon salt",
        "Wooden toothpicks"
      ]
    },
    steps: {
      es: [
        "Pele los amarillos y córtelos a lo largo en 4 tiras cada uno. Fríalas en aceite a 350 °F 2 minutos por lado, sin que se endurezcan. Escurra.",
        "Sofría el sofrito en el aceite de oliva, añada la espinaca y cocine 2 minutos hasta que se marchite. Deje enfriar y mezcle con los dos quesos.",
        "Forme anillos con las tiras de amarillo, cerrándolos con un palillo, y rellénelos con la mezcla de espinaca y queso, apretando.",
        "Bata los huevos con la harina y la sal. Pase cada pionono por el batido por arriba y por abajo para sellarlo.",
        "Fría en aceite a 350 °F 2 minutos por lado hasta que el huevo dore. Escurra, quite los palillos y sirva calientes."
      ],
      en: [
        "Peel the ripe plantains and cut each lengthwise into 4 strips. Fry at 350 °F 2 minutes per side, without letting them harden. Drain.",
        "Sauté the sofrito in the olive oil, add the spinach and cook 2 minutes until wilted. Cool and mix with both cheeses.",
        "Shape rings with the plantain strips, closing them with a toothpick, and fill them with the spinach and cheese mixture, pressing.",
        "Beat the eggs with the flour and salt. Dip the top and bottom of each pionono in the batter to seal it.",
        "Fry at 350 °F 2 minutes per side until the egg browns. Drain, remove the toothpicks and serve hot."
      ]
    }
  },
  {
    id: "huevos-rancheros-boricuas",
    category: "huevos",
    name: { es: "Huevos Rancheros a la Boricua con Habichuelas y Tostones", en: "Puerto Rican-Style Huevos Rancheros with Beans and Tostones" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "2 plátanos verdes",
        "Aceite vegetal para freír",
        "1 lata de 15 onzas de habichuelas rosadas, con su líquido",
        "2 cucharadas de sofrito",
        "1 cucharada de aceite de oliva",
        "1 taza de salsa de tomate",
        "½ cucharadita de comino",
        "½ cucharadita de sal",
        "4 huevos",
        "½ taza de queso blanco del país desmoronado",
        "1 aguacate en lascas",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "2 green plantains",
        "Vegetable oil for frying",
        "1 can (15 oz) pink beans, with their liquid",
        "2 tablespoons sofrito",
        "1 tablespoon olive oil",
        "1 cup tomato sauce",
        "½ teaspoon cumin",
        "½ teaspoon salt",
        "4 eggs",
        "½ cup crumbled Puerto Rican white cheese (queso del país)",
        "1 avocado, sliced",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Haga tostones: corte los plátanos en ruedas, fríalas 4 minutos, aplástelas y fríalas otra vez 2 minutos. Sale con sal.",
        "Sofría el sofrito en el aceite de oliva, añada las habichuelas, la salsa de tomate, el comino y la sal, y cocine 10 minutos hasta que espese.",
        "Haga 4 huecos en la salsa con una cuchara, rompa un huevo en cada uno, tape y cocine a fuego bajo 5 a 6 minutos hasta que la clara cuaje.",
        "Espolvoree el queso y el cilantro.",
        "Sirva cada huevo con su salsa sobre tostones, con aguacate al lado. Para huevo bien cocido (embarazo, niños pequeños), deje la yema firme."
      ],
      en: [
        "Make tostones: slice the plantains, fry 4 minutes, flatten and fry again 2 minutes. Salt them.",
        "Sauté the sofrito in the olive oil, add the beans, tomato sauce, cumin and salt, and cook 10 minutes until thickened.",
        "Make 4 wells in the sauce with a spoon, crack an egg into each, cover and cook over low heat 5 to 6 minutes until the whites set.",
        "Sprinkle with the cheese and cilantro.",
        "Serve each egg with its sauce over tostones, with avocado on the side. For fully cooked eggs (pregnancy, young children), cook until the yolk is firm."
      ]
    }
  },
  {
    id: "macarrones-queso-calabaza",
    category: "pastas",
    name: { es: "Macarrones con Queso y Calabaza al Horno", en: "Baked Mac and Cheese with Calabaza" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "1 libra de macarrones",
        "1½ tazas de calabaza cocida y majada",
        "2 cucharadas de mantequilla",
        "2 cucharadas de harina de trigo",
        "2 tazas de leche",
        "2 tazas de queso cheddar rallado",
        "1 taza de queso de papa (americano) rallado",
        "1 cucharadita de sal",
        "¼ cucharadita de nuez moscada",
        "½ taza de pan rallado",
        "¼ taza de queso parmesano rallado"
      ],
      en: [
        "1 pound elbow macaroni",
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "2 tablespoons butter",
        "2 tablespoons all-purpose flour",
        "2 cups milk",
        "2 cups shredded cheddar cheese",
        "1 cup shredded American cheese (queso de papa)",
        "1 teaspoon salt",
        "¼ teaspoon nutmeg",
        "½ cup breadcrumbs",
        "¼ cup grated parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Hierva los macarrones en agua con sal 2 minutos menos de lo que dice el paquete y escurra. Caliente el horno a 375 °F.",
        "Derrita la mantequilla, añada la harina y cocine 1 minuto. Añada la leche poco a poco, batiendo, y cocine hasta que espese.",
        "Fuera del fuego, añada la calabaza, el cheddar, el queso de papa, la sal y la nuez moscada, y bata hasta que la salsa quede lisa.",
        "Mezcle con los macarrones y páselos a un molde engrasado.",
        "Cubra con el pan rallado mezclado con el parmesano y hornee 20 minutos hasta que dore. La calabaza da color, fibra y cremosidad con menos queso."
      ],
      en: [
        "Boil the macaroni in salted water 2 minutes less than the package says and drain. Heat the oven to 375 °F.",
        "Melt the butter, add the flour and cook 1 minute. Add the milk little by little, whisking, and cook until thickened.",
        "Off the heat, add the calabaza, cheddar, American cheese, salt and nutmeg and whisk until the sauce is smooth.",
        "Mix with the macaroni and transfer to a greased baking dish.",
        "Top with the breadcrumbs mixed with the parmesan and bake 20 minutes until golden. The calabaza adds color, fiber and creaminess with less cheese."
      ]
    }
  },
  {
    id: "sandwich-queso-freir-aguacate",
    category: "emparedados",
    name: { es: "Sándwich de Queso de Freír, Aguacate y Tomate", en: "Frying Cheese, Avocado and Tomato Sandwich" },
    active: 15, total: 15,
    servings: 2,
    ingredients: {
      es: [
        "4 onzas de queso de freír en lascas de ½ pulgada",
        "1 cucharada de aceite de oliva",
        "4 rebanadas de pan sobao",
        "½ aguacate majado",
        "1 cucharadita de jugo de limón",
        "1 tomate en ruedas",
        "1 taza de lechuga",
        "1 pizca de pimienta",
        "1 cucharada de pique (opcional)"
      ],
      en: [
        "4 ounces frying cheese (queso de freír), in ½-inch slices",
        "1 tablespoon olive oil",
        "4 slices pan sobao (sweet Puerto Rican bread)",
        "½ avocado, mashed",
        "1 teaspoon lime juice",
        "1 tomato, sliced",
        "1 cup lettuce",
        "1 pinch black pepper",
        "1 tablespoon pique hot sauce (optional)"
      ]
    },
    steps: {
      es: [
        "Dore el queso de freír en el aceite a fuego medio-alto 1 a 2 minutos por lado, hasta que tenga costra.",
        "Tueste el pan en el mismo sartén.",
        "Maje el aguacate con el limón y la pimienta, y úntelo en dos rebanadas (el queso ya trae sal).",
        "Ponga la lechuga, el tomate y el queso caliente, con unas gotas de pique si le gusta.",
        "Cierre con el otro pan y sirva enseguida, cuando el queso todavía está suave."
      ],
      en: [
        "Brown the frying cheese in the oil over medium-high heat 1 to 2 minutes per side, until crusty.",
        "Toast the bread in the same skillet.",
        "Mash the avocado with the lime juice and pepper and spread it on two slices (the cheese is already salty).",
        "Add the lettuce, tomato and hot cheese, with a few drops of pique if you like.",
        "Close with the other bread and serve right away, while the cheese is still soft."
      ]
    }
  },
  {
    id: "ensalada-aguacate-mango-queso",
    category: "ensaladas",
    name: { es: "Ensalada de Aguacate, Mangó y Queso del País", en: "Avocado, Mango and Puerto Rican Cheese Salad" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "2 aguacates en cubos",
        "1 mangó maduro en cubos",
        "1 taza de queso blanco del país en cubitos",
        "½ cebolla roja en tiras finas",
        "1 taza de tomates cereza en mitades",
        "4 tazas de lechuga mixta",
        "2 cucharadas de jugo de limón",
        "3 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "2 avocados, cubed",
        "1 ripe mango, cubed",
        "1 cup Puerto Rican white cheese (queso del país), diced",
        "½ red onion, thinly sliced",
        "1 cup cherry tomatoes, halved",
        "4 cups mixed lettuce",
        "2 tablespoons lime juice",
        "3 tablespoons olive oil",
        "½ teaspoon salt",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Remoje la cebolla en agua fría 10 minutos para suavizarla y escúrrala.",
        "Bata el limón, el aceite, la sal y el cilantro.",
        "En una fuente, ponga la lechuga y, encima, el aguacate, el mangó, el queso, los tomates y la cebolla.",
        "Rocíe la vinagreta justo antes de servir.",
        "Sirva como plato ligero o al lado de arroz con habichuelas. Para hacerla vegana, cambie el queso por garbanzos."
      ],
      en: [
        "Soak the onion in cold water 10 minutes to mellow it, then drain.",
        "Whisk the lime juice, oil, salt and cilantro.",
        "On a platter, lay the lettuce and top with the avocado, mango, cheese, tomatoes and onion.",
        "Drizzle the vinaigrette just before serving.",
        "Serve as a light meal or next to rice and beans. For a vegan version, swap the cheese for chickpeas."
      ]
    }
  },
  {
    id: "croquetas-calabaza-queso",
    category: "entremeses",
    name: { es: "Croquetas de Calabaza y Queso", en: "Calabaza and Cheese Croquettes" },
    active: 60, total: 120, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "2 libras de calabaza pelada en cubos",
        "1 taza de queso mozzarella rallado",
        "½ taza de queso parmesano rallado",
        "½ taza de harina de trigo",
        "1 huevo para la mezcla",
        "½ cucharadita de sal",
        "¼ cucharadita de nuez moscada",
        "2 huevos batidos para empanar",
        "1½ tazas de pan rallado",
        "Aceite vegetal para freír"
      ],
      en: [
        "2 pounds peeled calabaza (West Indian pumpkin), cubed",
        "1 cup shredded mozzarella cheese",
        "½ cup grated parmesan cheese",
        "½ cup all-purpose flour",
        "1 egg for the mixture",
        "½ teaspoon salt",
        "¼ teaspoon nutmeg",
        "2 beaten eggs for breading",
        "1½ cups breadcrumbs",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva la calabaza 15 minutos hasta que esté blanda. Escúrrala muy bien y májela; póngala en un colador 15 minutos para que suelte el agua.",
        "Mezcle la calabaza con los quesos, la harina, 1 huevo, la sal y la nuez moscada. Refrigere 1 hora para que endurezca.",
        "Con las manos húmedas, forme 16 croquetas alargadas.",
        "Páselas por el huevo batido y luego por el pan rallado.",
        "Fría en aceite a 350 °F 3 minutos hasta que estén doradas. Escurra y sirva con mayo-ketchup."
      ],
      en: [
        "Boil the calabaza 15 minutes until soft. Drain very well and mash; leave in a colander 15 minutes to release the water.",
        "Mix the calabaza with the cheeses, flour, 1 egg, salt and nutmeg. Refrigerate 1 hour to firm up.",
        "With wet hands, shape 16 long croquettes.",
        "Dip them in the beaten egg and then in the breadcrumbs.",
        "Fry at 350 °F 3 minutes until golden. Drain and serve with mayo-ketchup."
      ]
    }
  },
  // ---------- Tanda 45: más postres puertorriqueños (16) ----------
  {
    id: "nisperos-batata",
    category: "postres",
    name: { es: "Nísperos de Batata", en: "Sweet Potato Nísperos (Coconut Sweet Potato Balls)" },
    active: 60, total: 60,
    servings: 20,
    ingredients: {
      es: [
        "2 libras de batata blanca",
        "1 taza de azúcar",
        "1 taza de coco rallado sin azúcar",
        "½ cucharadita de canela",
        "1 pizca de sal",
        "1 cucharadita de vainilla",
        "½ taza de azúcar para cubrir",
        "20 clavos de especia enteros"
      ],
      en: [
        "2 pounds white sweet potato (batata)",
        "1 cup sugar",
        "1 cup unsweetened shredded coconut",
        "½ teaspoon cinnamon",
        "1 pinch salt",
        "1 teaspoon vanilla",
        "½ cup sugar for coating",
        "20 whole cloves"
      ]
    },
    steps: {
      es: [
        "Pele la batata, córtela en trozos y hiérvala 20 minutos hasta que esté bien blanda. Escúrrala y májela hasta que no queden grumos.",
        "En un caldero, cocine el puré con 1 taza de azúcar, el coco, la canela y la sal a fuego medio-bajo, moviendo sin parar, 15 a 20 minutos, hasta que la masa se despegue del fondo.",
        "Fuera del fuego, añada la vainilla y deje enfriar hasta que se pueda tocar.",
        "Con las manos húmedas, forme bolitas del tamaño de un níspero, páselas por el azúcar y clave un clavo de especia arriba, como el rabito de la fruta.",
        "Déjelas secar 1 hora sobre papel encerado. Son un dulce de Navidad; avise que el clavo no se come."
      ],
      en: [
        "Peel the sweet potato, cut into chunks and boil 20 minutes until very soft. Drain and mash until smooth.",
        "In a caldero, cook the mash with 1 cup sugar, the coconut, cinnamon and salt over medium-low heat, stirring constantly, 15 to 20 minutes, until the mixture pulls away from the bottom.",
        "Off the heat, add the vanilla and let cool until you can handle it.",
        "With wet hands, shape balls the size of a níspero (sapodilla), roll in sugar and stick a clove on top, like the fruit's stem.",
        "Let them dry 1 hour on wax paper. They are a Christmas sweet; tell guests the clove is not eaten."
      ]
    }
  },
  {
    id: "dulce-mani-melao",
    category: "postres",
    name: { es: "Dulce de Maní con Melao", en: "Peanut Brittle with Cane Syrup" },
    active: 30, total: 30,
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de maní tostado sin sal",
        "1 taza de azúcar morena",
        "½ taza de melao de caña",
        "¼ taza de agua",
        "1 cucharada de jengibre fresco rallado",
        "1 cucharadita de bicarbonato",
        "1 pizca de sal",
        "1 cucharadita de aceite para engrasar"
      ],
      en: [
        "2 cups unsalted roasted peanuts",
        "1 cup brown sugar",
        "½ cup cane syrup (melao)",
        "¼ cup water",
        "1 tablespoon grated fresh ginger",
        "1 teaspoon baking soda",
        "1 pinch salt",
        "1 teaspoon oil for greasing"
      ]
    },
    steps: {
      es: [
        "Engrase una bandeja o una tabla de mármol.",
        "En un caldero, hierva el azúcar morena, el melao, el agua y el jengibre a fuego medio, sin mover, hasta que una gota en agua fría se ponga dura y quebradiza (300 °F en el termómetro), unos 12 minutos.",
        "Añada el maní y la sal, y mezcle rápido 1 minuto.",
        "Fuera del fuego, añada el bicarbonato (la mezcla sube y se pone clara) y viértala enseguida en la bandeja, extendiéndola con una cuchara engrasada.",
        "Cuando endurezca, rómpala en pedazos. Es el dulce de maní de los kioscos y las fiestas de pueblo. El azúcar caliente quema: mantenga a los niños lejos."
      ],
      en: [
        "Grease a baking sheet or a marble board.",
        "In a caldero, boil the brown sugar, cane syrup, water and ginger over medium heat, without stirring, until a drop in cold water turns hard and brittle (300 °F on a thermometer), about 12 minutes.",
        "Add the peanuts and salt and stir quickly 1 minute.",
        "Off the heat, add the baking soda (the mixture foams and lightens) and pour it right away onto the sheet, spreading with a greased spoon.",
        "Once hard, break into pieces. It's the peanut candy sold at kiosks and town fiestas. Hot sugar burns: keep children away."
      ]
    }
  },
  {
    id: "limber-mani",
    category: "postres",
    name: { es: "Limber de Maní", en: "Peanut Limber (Ice Pop)" },
    active: 10, total: 310, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "½ taza de mantequilla de maní",
        "1 lata de 12 onzas de leche evaporada",
        "1½ tazas de agua",
        "½ taza de azúcar",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela",
        "1 pizca de sal"
      ],
      en: [
        "½ cup peanut butter",
        "1 can (12 oz) evaporated milk",
        "1½ cups water",
        "½ cup sugar",
        "1 teaspoon vanilla",
        "½ teaspoon cinnamon",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes hasta que la mantequilla de maní se disuelva por completo.",
        "Pruebe y añada azúcar si lo quiere más dulce (al congelarse se siente menos dulce).",
        "Vierta en vasitos plásticos pequeños.",
        "Congele al menos 5 horas hasta que estén sólidos.",
        "Para comerlo, apriete el vasito desde abajo. Es de los limbers más pedidos en las casas que los venden."
      ],
      en: [
        "Blend all the ingredients until the peanut butter dissolves completely.",
        "Taste and add sugar if you want it sweeter (it tastes less sweet once frozen).",
        "Pour into small plastic cups.",
        "Freeze at least 5 hours until solid.",
        "To eat, squeeze the cup from the bottom. It's one of the most requested flavors at homes that sell limbers."
      ]
    }
  },
  {
    id: "limber-tamarindo",
    category: "postres",
    name: { es: "Limber de Tamarindo", en: "Tamarind Limber (Ice Pop)" },
    active: 40, total: 310, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "½ libra de tamarindos en vaina",
        "4 tazas de agua",
        "¾ taza de azúcar",
        "1 pizca de sal"
      ],
      en: [
        "½ pound tamarind pods",
        "4 cups water",
        "¾ cup sugar",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Pele los tamarindos y quíteles las fibras.",
        "Remójelos en 2 tazas de agua caliente 30 minutos y desbarate la pulpa con las manos.",
        "Cuele, apretando para sacar toda la pulpa y dejar las semillas. Añada el resto del agua, el azúcar y la sal, y mezcle hasta que el azúcar se disuelva.",
        "Vierta en vasitos plásticos pequeños y congele al menos 4 horas.",
        "Queda agridulce y refrescante; si lo prefiere cremoso, cambie 1 taza de agua por leche evaporada."
      ],
      en: [
        "Peel the tamarinds and remove the strings.",
        "Soak them in 2 cups hot water 30 minutes and break up the pulp with your hands.",
        "Strain, pressing to get all the pulp and leave the seeds behind. Add the rest of the water, the sugar and salt, and stir until the sugar dissolves.",
        "Pour into small plastic cups and freeze at least 4 hours.",
        "It turns out sweet-tart and refreshing; for a creamy version, swap 1 cup of water for evaporated milk."
      ]
    }
  },
  {
    id: "limber-guayaba",
    category: "postres",
    name: { es: "Limber de Guayaba", en: "Guava Limber (Ice Pop)" },
    active: 10, total: 250, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "1 lata de 12 onzas de néctar de guayaba",
        "4 onzas de pasta de guayaba en cubitos",
        "1 lata de 14 onzas de leche condensada",
        "1½ tazas de agua",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "1 can (12 oz) guava nectar",
        "4 ounces guava paste, diced",
        "1 can (14 oz) condensed milk",
        "1½ cups water",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Caliente la pasta de guayaba con ½ taza del agua a fuego bajo hasta que se derrita. Deje enfriar.",
        "Licúe la guayaba derretida con el néctar, la leche condensada, el resto del agua y el limón.",
        "Vierta en vasitos plásticos pequeños.",
        "Congele al menos 4 horas hasta que estén sólidos.",
        "Para un limber de guayaba y queso, añada 2 onzas de queso crema al licuar."
      ],
      en: [
        "Heat the guava paste with ½ cup of the water over low heat until melted. Let cool.",
        "Blend the melted guava with the nectar, condensed milk, the rest of the water and the lime juice.",
        "Pour into small plastic cups.",
        "Freeze at least 4 hours until solid.",
        "For a guava-and-cheese limber, add 2 ounces cream cheese when blending."
      ]
    }
  },
  {
    id: "piragua-coco",
    category: "postres",
    name: { es: "Piragua de Coco", en: "Coconut Piragua (Shaved Ice)" },
    active: 20, total: 20,
    servings: 6,
    ingredients: {
      es: [
        "1 lata de 15 onzas de crema de coco",
        "½ taza de azúcar",
        "½ taza de agua",
        "½ cucharadita de vainilla",
        "1 pizca de sal",
        "6 tazas de hielo raspado"
      ],
      en: [
        "1 can (15 oz) cream of coconut",
        "½ cup sugar",
        "½ cup water",
        "½ teaspoon vanilla",
        "1 pinch salt",
        "6 cups shaved ice"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el azúcar 3 minutos hasta que se disuelva. Deje enfriar.",
        "Mezcle el almíbar con la crema de coco, la vainilla y la sal. Refrigere el sirope.",
        "Raspe el hielo bien fino (o tritúrelo en la licuadora con la función de hielo).",
        "Apriete el hielo en un vaso cónico de papel para darle la forma de pirámide de la piragua.",
        "Báñela con 3 a 4 cucharadas del sirope de coco y sirva con sorbeto. Combina con un chorrito de sirope de frambuesa o de tamarindo."
      ],
      en: [
        "Boil the water with the sugar 3 minutes until dissolved. Let cool.",
        "Mix the syrup with the cream of coconut, vanilla and salt. Refrigerate.",
        "Shave the ice very fine (or crush it in the blender on the ice setting).",
        "Pack the ice into a paper cone cup to give it the piragua's pyramid shape.",
        "Pour 3 to 4 tablespoons of coconut syrup over it and serve with a straw. Pairs well with a splash of raspberry or tamarind syrup."
      ]
    }
  },
  {
    id: "bunuelos-maduro-almibar",
    category: "postres",
    name: { es: "Buñuelos de Plátano Maduro en Almíbar", en: "Ripe Plantain Fritters in Syrup" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "3 plátanos bien maduros (negros)",
        "1 huevo",
        "½ taza de harina de trigo",
        "2 cucharadas de azúcar",
        "½ cucharadita de canela",
        "½ cucharadita de polvo de hornear",
        "1 pizca de sal",
        "Aceite vegetal para freír",
        "1 taza de azúcar para el almíbar",
        "1 taza de agua",
        "1 raja de canela",
        "4 clavos de especia",
        "1 cáscara de limón"
      ],
      en: [
        "3 very ripe (black) plantains",
        "1 egg",
        "½ cup all-purpose flour",
        "2 tablespoons sugar",
        "½ teaspoon cinnamon",
        "½ teaspoon baking powder",
        "1 pinch salt",
        "Vegetable oil for frying",
        "1 cup sugar for the syrup",
        "1 cup water",
        "1 cinnamon stick",
        "4 whole cloves",
        "1 lime peel"
      ]
    },
    steps: {
      es: [
        "Para el almíbar, hierva el azúcar, el agua, la canela en raja, los clavos y la cáscara de limón 10 minutos hasta que espese un poco.",
        "Pele los plátanos y májelos bien. Añada el huevo, la harina, el azúcar, la canela en polvo, el polvo de hornear y la sal, y mezcle hasta tener una masa espesa.",
        "Caliente el aceite a 350 °F y eche la masa por cucharadas, sin llenar el caldero.",
        "Fría 2 a 3 minutos, volteando, hasta que estén dorados. Escurra en papel toalla.",
        "Pase los buñuelos al almíbar caliente y déjelos 10 minutos para que lo absorban. Sirva tibios con un poco de almíbar."
      ],
      en: [
        "For the syrup, boil the sugar, water, cinnamon stick, cloves and lime peel 10 minutes until slightly thickened.",
        "Peel the plantains and mash well. Add the egg, flour, sugar, ground cinnamon, baking powder and salt, and mix into a thick batter.",
        "Heat the oil to 350 °F and drop the batter by spoonfuls, without crowding the pot.",
        "Fry 2 to 3 minutes, turning, until golden. Drain on paper towels.",
        "Move the fritters into the hot syrup and leave them 10 minutes to soak it up. Serve warm with a little syrup."
      ]
    }
  },
  {
    id: "budin-yuca-coco",
    category: "postres",
    name: { es: "Budín de Yuca y Coco", en: "Cassava Coconut Pudding" },
    active: 80, total: 80,
    servings: 12,
    ingredients: {
      es: [
        "2 libras de yuca pelada",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "1 taza de azúcar",
        "3 huevos",
        "4 cucharadas de mantequilla derretida",
        "½ taza de coco rallado sin azúcar",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela",
        "½ cucharadita de jengibre en polvo",
        "¼ cucharadita de sal"
      ],
      en: [
        "2 pounds peeled yuca (cassava)",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "1 cup sugar",
        "3 eggs",
        "4 tablespoons melted butter",
        "½ cup unsweetened shredded coconut",
        "1 teaspoon vanilla",
        "1 teaspoon cinnamon",
        "½ teaspoon ground ginger",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Ralle la yuca bien fina (o procésela con un poco de la leche de coco). Quítele la vena del centro antes.",
        "Mezcle la yuca con la leche de coco, la leche evaporada, el azúcar, los huevos, la mantequilla, el coco, la vainilla, las especias y la sal.",
        "Vierta en el molde y hornee 55 a 60 minutos, hasta que los bordes doren y el centro esté firme.",
        "Deje enfriar antes de cortar en cuadros: con el frío toma la textura densa del budín de yuca de las abuelas."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 13-inch pan.",
        "Grate the yuca very finely (or process it with a little of the coconut milk). Remove the woody center first.",
        "Mix the yuca with the coconut milk, evaporated milk, sugar, eggs, butter, coconut, vanilla, spices and salt.",
        "Pour into the pan and bake 55 to 60 minutes, until the edges brown and the center is firm.",
        "Cool before cutting into squares: as it cools it takes the dense texture of grandma's cassava pudding."
      ]
    }
  },
  {
    id: "natilla-coco",
    category: "postres",
    name: { es: "Natilla de Coco", en: "Coconut Natilla (Custard)" },
    active: 25, total: 145, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "1 lata de 13.5 onzas de leche de coco",
        "1½ tazas de leche",
        "½ taza de azúcar",
        "4 yemas de huevo",
        "3 cucharadas de maicena",
        "1 pizca de sal",
        "1 cucharadita de vainilla",
        "¼ taza de coco rallado tostado",
        "Canela en polvo para decorar"
      ],
      en: [
        "1 can (13.5 oz) coconut milk",
        "1½ cups milk",
        "½ cup sugar",
        "4 egg yolks",
        "3 tablespoons cornstarch",
        "1 pinch salt",
        "1 teaspoon vanilla",
        "¼ cup toasted shredded coconut",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "Bata las yemas con el azúcar, la maicena, la sal y ½ taza de la leche hasta que no queden grumos.",
        "Caliente el resto de la leche y la leche de coco hasta que empiecen a humear.",
        "Añada la mezcla de yemas poco a poco, batiendo, y cocine a fuego medio-bajo, moviendo sin parar, hasta que hierva y espese, unos 8 minutos.",
        "Fuera del fuego, añada la vainilla y vierta en copas.",
        "Refrigere 2 horas. Sirva con el coco tostado y un poco de canela."
      ],
      en: [
        "Whisk the yolks with the sugar, cornstarch, salt and ½ cup of the milk until smooth.",
        "Heat the rest of the milk and the coconut milk until steaming.",
        "Add the yolk mixture little by little, whisking, and cook over medium-low heat, stirring constantly, until it boils and thickens, about 8 minutes.",
        "Off the heat, add the vanilla and pour into dessert cups.",
        "Refrigerate 2 hours. Serve with the toasted coconut and a little cinnamon."
      ]
    }
  },
  {
    id: "pasta-guayaba-queso-pais",
    category: "postres",
    name: { es: "Pasta de Guayaba con Queso del País", en: "Guava Paste with Puerto Rican White Cheese" },
    active: 5, total: 5,
    servings: 6,
    ingredients: {
      es: [
        "8 onzas de pasta de guayaba",
        "8 onzas de queso blanco del país",
        "12 galletas de soda (opcional)"
      ],
      en: [
        "8 ounces guava paste",
        "8 ounces Puerto Rican white cheese (queso del país)",
        "12 soda crackers (optional)"
      ]
    },
    steps: {
      es: [
        "Corte la pasta de guayaba en lascas de ¼ pulgada.",
        "Corte el queso del país en lascas del mismo tamaño.",
        "Ponga una lasca de guayaba sobre cada lasca de queso.",
        "Sirva frío, solo o sobre galletas de soda.",
        "Es el postre más sencillo de la mesa boricua: lo dulce de la guayaba con lo salado del queso."
      ],
      en: [
        "Cut the guava paste into ¼-inch slices.",
        "Cut the white cheese into slices of the same size.",
        "Place a slice of guava on each slice of cheese.",
        "Serve cold, on its own or on soda crackers.",
        "It's the simplest dessert on the Puerto Rican table: sweet guava with salty cheese."
      ]
    }
  },
  {
    id: "helado-mani",
    category: "postres",
    name: { es: "Helado de Maní (Sin Máquina)", en: "No-Churn Peanut Ice Cream" },
    active: 15, total: 375, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de crema espesa para batir, fría",
        "1 lata de 14 onzas de leche condensada",
        "½ taza de mantequilla de maní",
        "1 cucharadita de vainilla",
        "1 pizca de sal",
        "½ taza de maní tostado picado"
      ],
      en: [
        "2 cups cold heavy whipping cream",
        "1 can (14 oz) condensed milk",
        "½ cup peanut butter",
        "1 teaspoon vanilla",
        "1 pinch salt",
        "½ cup chopped roasted peanuts"
      ]
    },
    steps: {
      es: [
        "Bata la leche condensada con la mantequilla de maní, la vainilla y la sal hasta que quede lisa.",
        "En otro envase, bata la crema fría hasta que forme picos firmes.",
        "Incorpore la crema a la mezcla de maní en tres partes, con movimientos envolventes para no bajarla.",
        "Pase a un envase con tapa, riegue el maní picado por encima y congele 6 horas.",
        "Saque 5 minutos antes de servir. Recuerda al helado de maní de las heladerías de pueblo."
      ],
      en: [
        "Beat the condensed milk with the peanut butter, vanilla and salt until smooth.",
        "In another bowl, whip the cold cream to stiff peaks.",
        "Fold the cream into the peanut mixture in three parts, gently so it doesn't deflate.",
        "Transfer to a lidded container, sprinkle the chopped peanuts on top and freeze 6 hours.",
        "Take it out 5 minutes before serving. It's like the peanut ice cream at town ice-cream shops."
      ]
    }
  },
  {
    id: "tembleque-chocolate",
    category: "postres",
    name: { es: "Tembleque de Chocolate", en: "Chocolate Tembleque" },
    active: 20, total: 260, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 13.5 onzas de leche de coco",
        "½ taza de maicena",
        "½ taza de azúcar",
        "¼ taza de cacao en polvo sin azúcar",
        "1 pizca de sal",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cans (13.5 oz) coconut milk",
        "½ cup cornstarch",
        "½ cup sugar",
        "¼ cup unsweetened cocoa powder",
        "1 pinch salt",
        "1 teaspoon vanilla",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "Moje un molde o copas con agua fría (así el tembleque sale sin pegarse).",
        "En un caldero frío, mezcle la maicena, el azúcar, el cacao y la sal. Añada la leche de coco poco a poco, batiendo, hasta que no queden grumos.",
        "Cocine a fuego medio, moviendo sin parar con cuchara de madera, hasta que hierva y espese bien, unos 10 minutos.",
        "Fuera del fuego, añada la vainilla y vierta en el molde.",
        "Refrigere 4 horas, voltee y espolvoree con canela. Como el tembleque clásico, no lleva leche de vaca ni huevo."
      ],
      en: [
        "Wet a mold or cups with cold water (so the tembleque comes out without sticking).",
        "In a cold caldero, mix the cornstarch, sugar, cocoa and salt. Add the coconut milk little by little, whisking, until smooth.",
        "Cook over medium heat, stirring constantly with a wooden spoon, until it boils and thickens well, about 10 minutes.",
        "Off the heat, add the vanilla and pour into the mold.",
        "Refrigerate 4 hours, unmold and sprinkle with cinnamon. Like the classic tembleque, it has no cow's milk or eggs."
      ]
    }
  },
  {
    id: "arroz-dulce-coquito",
    category: "postres",
    name: { es: "Arroz con Dulce de Coquito (Sin Alcohol)", en: "Coquito Arroz con Dulce (Alcohol-Free)" },
    active: 75, total: 135, wait: "remojo",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de arroz grano corto",
        "4 tazas de agua",
        "1 pedazo de jengibre fresco de 2 pulgadas, machacado",
        "3 rajas de canela",
        "6 clavos de especia",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 14 onzas de leche condensada",
        "½ taza de pasas",
        "½ cucharadita de sal",
        "1 cucharadita de vainilla",
        "½ cucharadita de nuez moscada",
        "Canela en polvo para decorar"
      ],
      en: [
        "1 cup short-grain rice",
        "4 cups water",
        "1 2-inch piece fresh ginger, crushed",
        "3 cinnamon sticks",
        "6 whole cloves",
        "1 can (13.5 oz) coconut milk",
        "1 can (15 oz) cream of coconut",
        "1 can (14 oz) condensed milk",
        "½ cup raisins",
        "½ teaspoon salt",
        "1 teaspoon vanilla",
        "½ teaspoon nutmeg",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "Remoje el arroz en agua 1 hora y escúrralo.",
        "Hierva las 4 tazas de agua con el jengibre, la canela en raja y los clavos 10 minutos. Cuele y vuelva el agua de especias al caldero.",
        "Añada el arroz, la leche de coco y la sal, y cocine a fuego medio-bajo, moviendo a menudo, 25 minutos hasta que el arroz esté blando.",
        "Añada la crema de coco, la leche condensada, las pasas, la vainilla y la nuez moscada, y cocine 10 minutos más, moviendo, hasta que espese.",
        "Pase a una fuente, espolvoree canela y deje refrescar. Sabe al coquito de Navidad, sin el ron."
      ],
      en: [
        "Soak the rice in water 1 hour and drain.",
        "Boil the 4 cups of water with the ginger, cinnamon sticks and cloves 10 minutes. Strain and return the spiced water to the caldero.",
        "Add the rice, coconut milk and salt, and cook over medium-low heat, stirring often, 25 minutes until the rice is soft.",
        "Add the cream of coconut, condensed milk, raisins, vanilla and nutmeg, and cook 10 more minutes, stirring, until thickened.",
        "Transfer to a serving dish, sprinkle with cinnamon and let cool. It tastes like Christmas coquito, without the rum."
      ]
    }
  },
  {
    id: "hojaldre-boricua",
    category: "bizcochos",
    name: { es: "Hojaldre Boricua (Bizcocho de Especias)", en: "Puerto Rican Hojaldre (Spice Cake)" },
    active: 75, total: 90, wait: "enfriar",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "2 cucharaditas de canela",
        "1 cucharadita de nuez moscada",
        "½ cucharadita de clavo en polvo",
        "1 taza de mantequilla a temperatura ambiente",
        "2 tazas de azúcar",
        "5 huevos",
        "¾ taza de vino dulce",
        "¼ taza de jugo de china",
        "1 cucharada de ralladura de china",
        "1 cucharadita de vainilla",
        "Azúcar en polvo para decorar"
      ],
      en: [
        "3 cups all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "2 teaspoons cinnamon",
        "1 teaspoon nutmeg",
        "½ teaspoon ground cloves",
        "1 cup butter, at room temperature",
        "2 cups sugar",
        "5 eggs",
        "¾ cup sweet wine",
        "¼ cup orange juice",
        "1 tablespoon orange zest",
        "1 teaspoon vanilla",
        "Powdered sugar to decorate"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F. Engrase y enharine un molde de tubo (bundt) de 10 pulgadas.",
        "Cierna la harina con el polvo de hornear, la sal y las especias.",
        "Bata la mantequilla con el azúcar 5 minutos hasta que esté cremosa. Añada los huevos de uno en uno, batiendo después de cada uno.",
        "Mezcle el vino, el jugo de china, la ralladura y la vainilla. Añada la harina en tres partes, alternando con el vino, y bata sólo hasta unir.",
        "Hornee 55 a 60 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos, desmolde y espolvoree azúcar en polvo. El hojaldre de las abuelas no es masa de hojaldre sino este bizcocho de especias, de Navidad y de bodas."
      ],
      en: [
        "Heat the oven to 350 °F. Grease and flour a 10-inch bundt pan.",
        "Sift the flour with the baking powder, salt and spices.",
        "Beat the butter with the sugar 5 minutes until creamy. Add the eggs one at a time, beating after each.",
        "Mix the wine, orange juice, zest and vanilla. Add the flour in three parts, alternating with the wine, and beat just until combined.",
        "Bake 55 to 60 minutes, until a toothpick comes out clean. Cool 15 minutes, unmold and dust with powdered sugar. Grandma's hojaldre isn't puff pastry but this spice cake, for Christmas and weddings."
      ]
    }
  },
  {
    id: "bizcocho-frutas-ron",
    category: "bizcochos",
    name: { es: "Bizcocho Navideño de Frutas al Ron", en: "Christmas Rum Fruitcake" },
    active: 120, total: 1560, wait: "remojo",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de frutas abrillantadas picadas",
        "1 taza de pasas",
        "½ taza de ciruelas secas picadas",
        "1 taza de ron oscuro",
        "2 tazas de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de sal",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "1 taza de mantequilla a temperatura ambiente",
        "1 taza de azúcar morena",
        "4 huevos",
        "¼ taza de melao de caña",
        "1 taza de nueces picadas"
      ],
      en: [
        "2 cups chopped candied fruit",
        "1 cup raisins",
        "½ cup chopped prunes",
        "1 cup dark rum",
        "2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "½ teaspoon salt",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "1 cup butter, at room temperature",
        "1 cup brown sugar",
        "4 eggs",
        "¼ cup cane syrup (melao)",
        "1 cup chopped walnuts"
      ]
    },
    steps: {
      es: [
        "Un día antes, remoje las frutas abrillantadas, las pasas y las ciruelas en ¾ taza del ron, tapadas.",
        "Caliente el horno a 300 °F. Engrase un molde de pan grande (o dos pequeños) y fórrelo con papel de hornear.",
        "Cierna la harina con el polvo de hornear, la sal y las especias. Pase las frutas escurridas y las nueces por 2 cucharadas de esa harina (así no se van al fondo).",
        "Bata la mantequilla con el azúcar morena, añada los huevos de uno en uno y el melao. Añada la harina, el ron del remojo, las frutas y las nueces.",
        "Hornee 1 hora 30 minutos, hasta que un palillo salga limpio. Rocíelo caliente con el resto del ron y envuélvalo; mejora a los 2 o 3 días. Lleva alcohol: no es para niños ni embarazadas."
      ],
      en: [
        "A day ahead, soak the candied fruit, raisins and prunes in ¾ cup of the rum, covered.",
        "Heat the oven to 300 °F. Grease a large loaf pan (or two small ones) and line with parchment paper.",
        "Sift the flour with the baking powder, salt and spices. Toss the drained fruit and nuts in 2 tablespoons of that flour (so they don't sink).",
        "Beat the butter with the brown sugar, add the eggs one at a time and the cane syrup. Add the flour, the soaking rum, the fruit and the nuts.",
        "Bake 1 hour 30 minutes, until a toothpick comes out clean. Brush it hot with the rest of the rum and wrap it; it improves after 2 or 3 days. It contains alcohol: not for children or pregnant women."
      ]
    }
  },
  {
    id: "dulce-pajuil",
    category: "frutas",
    name: { es: "Dulce de Pajuil (Cajuil) en Almíbar", en: "Cashew Apple (Pajuil) in Syrup" },
    active: 90, total: 90,
    servings: 8,
    ingredients: {
      es: [
        "2 libras de pajuiles maduros (la fruta del marañón), sin la semilla",
        "2 tazas de azúcar",
        "3 tazas de agua",
        "2 rajas de canela",
        "4 clavos de especia",
        "1 cáscara de limón"
      ],
      en: [
        "2 pounds ripe cashew apples (pajuil), seeds removed",
        "2 cups sugar",
        "3 cups water",
        "2 cinnamon sticks",
        "4 whole cloves",
        "1 lime peel"
      ]
    },
    steps: {
      es: [
        "Quite la semilla (la nuez) de cada pajuil sin tocarla con las manos desnudas: la cáscara cruda de la nuez irrita la piel. Use guantes.",
        "Pinche las frutas con un tenedor y hiérvalas en agua 5 minutos para quitarles lo áspero. Bote esa agua.",
        "Hierva las 3 tazas de agua con el azúcar, la canela, los clavos y la cáscara de limón 5 minutos.",
        "Añada los pajuiles y cocine a fuego bajo 45 minutos a 1 hora, hasta que estén brillosos y el almíbar espese.",
        "Deje enfriar y guarde en frascos limpios en la nevera. Sirva con queso del país, como los dulces de las abuelas."
      ],
      en: [
        "Remove the seed (the nut) from each cashew apple without touching it with bare hands: the raw nut's shell irritates the skin. Wear gloves.",
        "Prick the fruit with a fork and boil in water 5 minutes to remove the astringency. Discard that water.",
        "Boil the 3 cups water with the sugar, cinnamon, cloves and lime peel 5 minutes.",
        "Add the cashew apples and cook over low heat 45 minutes to 1 hour, until glossy and the syrup thickens.",
        "Cool and store in clean jars in the fridge. Serve with queso del país, like grandma's fruit sweets."
      ]
    }
  },
  // ---------- Tanda 46: frutas tropicales de la isla (16) ----------
  {
    id: "quenepas-almibar",
    category: "frutas",
    name: { es: "Quenepas en Almíbar con Canela", en: "Quenepas (Spanish Limes) in Cinnamon Syrup" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de quenepas",
        "1½ tazas de azúcar",
        "2 tazas de agua",
        "2 rajas de canela",
        "3 clavos de especia",
        "1 cáscara de limón"
      ],
      en: [
        "2 pounds quenepas (Spanish limes)",
        "1½ cups sugar",
        "2 cups water",
        "2 cinnamon sticks",
        "3 whole cloves",
        "1 lime peel"
      ]
    },
    steps: {
      es: [
        "Pele las quenepas apretándolas entre los dientes de un cuchillo o con las uñas; deje la pulpa pegada a la semilla.",
        "Hierva el agua con el azúcar, la canela, los clavos y la cáscara de limón 5 minutos.",
        "Añada las quenepas peladas y cocine a fuego bajo 25 minutos, hasta que la pulpa esté brillosa y el almíbar tome color.",
        "Deje enfriar en el almíbar y guarde en frascos limpios en la nevera.",
        "Se comen chupando la pulpa de la semilla, como frescas. No se las dé a niños pequeños: la semilla es grande y resbalosa, y puede atragantarlos."
      ],
      en: [
        "Peel the quenepas by cracking the skin with your nails or a knife; leave the pulp on the seed.",
        "Boil the water with the sugar, cinnamon, cloves and lime peel 5 minutes.",
        "Add the peeled quenepas and simmer 25 minutes, until the pulp is glossy and the syrup takes on color.",
        "Let cool in the syrup and store in clean jars in the fridge.",
        "Eat them by sucking the pulp off the seed, like fresh ones. Don't give them to small children: the seed is big and slippery and can choke them."
      ]
    }
  },
  {
    id: "dulce-jobos",
    category: "frutas",
    name: { es: "Dulce de Jobos", en: "Hog Plum (Jobo) Sweet" },
    active: 60, total: 60,
    servings: 8,
    ingredients: {
      es: [
        "2 libras de jobos maduros",
        "1½ tazas de azúcar",
        "2 tazas de agua",
        "1 raja de canela",
        "1 pedazo de jengibre de 1 pulgada",
        "1 pizca de sal"
      ],
      en: [
        "2 pounds ripe jobos (hog plums)",
        "1½ cups sugar",
        "2 cups water",
        "1 cinnamon stick",
        "1 1-inch piece ginger",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Lave los jobos y pínchelos con un tenedor.",
        "Hiérvalos en agua 5 minutos y bote esa agua (les quita lo agrio y la resina de la cáscara).",
        "Hierva las 2 tazas de agua con el azúcar, la canela, el jengibre y la sal 5 minutos. Añada los jobos.",
        "Cocine a fuego bajo 40 minutos, hasta que estén blandos y el almíbar espese.",
        "Sirva frío, solo o con queso del país. Es un dulce del campo, de cuando los jobos caen maduros de los árboles en los caminos."
      ],
      en: [
        "Wash the jobos and prick them with a fork.",
        "Boil them in water 5 minutes and discard that water (it removes sourness and resin from the skin).",
        "Boil the 2 cups water with the sugar, cinnamon, ginger and salt 5 minutes. Add the jobos.",
        "Simmer 40 minutes, until soft and the syrup thickens.",
        "Serve cold, on its own or with queso del país. It's a country sweet, from when ripe jobos fall from roadside trees."
      ]
    }
  },
  {
    id: "jalea-pomarrosa",
    category: "frutas",
    name: { es: "Jalea de Pomarrosa", en: "Rose Apple (Pomarrosa) Jelly" },
    active: 60, total: 60,
    servings: 16,
    ingredients: {
      es: [
        "2 libras de pomarrosas, sin semillas y en pedazos",
        "3 tazas de agua",
        "2 tazas de azúcar",
        "¼ taza de jugo de limón",
        "1 sobre de 1.75 onzas de pectina"
      ],
      en: [
        "2 pounds rose apples (pomarrosas), seeded and chopped",
        "3 cups water",
        "2 cups sugar",
        "¼ cup lime juice",
        "1 envelope (1.75 oz) pectin"
      ]
    },
    steps: {
      es: [
        "Hierva las pomarrosas en el agua 20 minutos hasta que se ablanden.",
        "Cuele por una tela o un colador fino sin apretar mucho, para que la jalea quede clara. Deben salir unas 3 tazas de líquido.",
        "Vuelva el líquido al caldero con el limón y la pectina, y deje hervir fuerte.",
        "Añada el azúcar de una vez y hierva 1 minuto exacto, moviendo. Quite la espuma.",
        "Vierta en frascos limpios y calientes, y tape. Tiene el olor a rosas de la fruta; va bien con galletas de soda y queso."
      ],
      en: [
        "Boil the rose apples in the water 20 minutes until soft.",
        "Strain through cheesecloth or a fine strainer without pressing too much, so the jelly stays clear. You should get about 3 cups liquid.",
        "Return the liquid to the pot with the lime juice and pectin and bring to a hard boil.",
        "Add the sugar all at once and boil exactly 1 minute, stirring. Skim the foam.",
        "Pour into clean, hot jars and cover. It has the fruit's rose scent; good with soda crackers and cheese."
      ]
    }
  },
  {
    id: "bowl-pitahaya-mango",
    category: "frutas",
    name: { es: "Bowl de Pitahaya con Mangó, Coco y Granola", en: "Dragon Fruit Bowl with Mango, Coconut and Granola" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 pitahaya roja (fruta del dragón)",
        "1 guineo maduro congelado",
        "½ taza de yogur griego natural",
        "1 mangó maduro en cubos",
        "¼ taza de granola",
        "2 cucharadas de coco rallado sin azúcar",
        "1 cucharada de semillas de chía",
        "1 cucharadita de miel (opcional)"
      ],
      en: [
        "1 red dragon fruit (pitahaya)",
        "1 frozen ripe banana",
        "½ cup plain Greek yogurt",
        "1 ripe mango, cubed",
        "¼ cup granola",
        "2 tablespoons unsweetened shredded coconut",
        "1 tablespoon chia seeds",
        "1 teaspoon honey (optional)"
      ]
    },
    steps: {
      es: [
        "Pele la pitahaya y separe unos cubos para decorar.",
        "Licúe el resto de la pitahaya con el guineo congelado y el yogur hasta tener una crema espesa (añada un chorrito de agua si no se mueve).",
        "Sirva en dos bols.",
        "Cubra con el mangó, los cubos de pitahaya, la granola, el coco y la chía, en filas.",
        "Termine con la miel si la usa. La pitahaya se da cada vez más en Puerto Rico y pinta el bol de un rosado intenso."
      ],
      en: [
        "Peel the dragon fruit and set aside a few cubes for topping.",
        "Blend the rest of the dragon fruit with the frozen banana and yogurt into a thick cream (add a splash of water if it won't move).",
        "Divide between two bowls.",
        "Top with the mango, dragon fruit cubes, granola, coconut and chia, in rows.",
        "Finish with the honey if using. Dragon fruit is grown more and more in Puerto Rico and turns the bowl a bright pink."
      ]
    }
  },
  {
    id: "pina-rellena-frutas",
    category: "frutas",
    name: { es: "Piña Rellena de Frutas Tropicales", en: "Pineapple Boat with Tropical Fruit" },
    active: 25, total: 25,
    servings: 6,
    ingredients: {
      es: [
        "1 piña grande con su corona",
        "1 mangó maduro en cubos",
        "1 taza de lechosa (papaya) en cubos",
        "2 carambolas en estrellas",
        "1 taza de uvas o de quenepas peladas",
        "2 parchas (la pulpa)",
        "2 cucharadas de jugo de limón",
        "1 cucharada de azúcar",
        "6 hojas de menta"
      ],
      en: [
        "1 large pineapple with its crown",
        "1 ripe mango, cubed",
        "1 cup papaya (lechosa), cubed",
        "2 star fruits, sliced into stars",
        "1 cup grapes or peeled quenepas",
        "2 passion fruits (the pulp)",
        "2 tablespoons lime juice",
        "1 tablespoon sugar",
        "6 mint leaves"
      ]
    },
    steps: {
      es: [
        "Corte la piña a lo largo por la mitad, con la corona, para tener dos barquitos.",
        "Saque la pulpa con un cuchillo pequeño dejando ½ pulgada de borde; quite el corazón y corte la pulpa en cubos.",
        "Mezcle la piña con el mangó, la lechosa, la carambola y las uvas o quenepas.",
        "Bata la pulpa de parcha con el limón y el azúcar, y báñe las frutas.",
        "Rellene los barquitos, decore con la menta y sirva frío. Es el centro de mesa de los cumpleaños y las fiestas de playa."
      ],
      en: [
        "Cut the pineapple in half lengthwise, through the crown, to make two boats.",
        "Scoop out the flesh with a small knife leaving a ½-inch rim; remove the core and cube the flesh.",
        "Mix the pineapple with the mango, papaya, star fruit and grapes or quenepas.",
        "Whisk the passion fruit pulp with the lime juice and sugar and pour over the fruit.",
        "Fill the boats, garnish with the mint and serve cold. It's the centerpiece at birthdays and beach parties."
      ]
    }
  },
  {
    id: "brochetas-frutas-parcha",
    category: "frutas",
    name: { es: "Pinchos de Frutas Tropicales con Salsa de Parcha", en: "Tropical Fruit Skewers with Passion Fruit Sauce" },
    active: 20, total: 20,
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de piña en cubos",
        "1 mangó en cubos",
        "2 guineos en ruedas gruesas",
        "1 taza de sandía en cubos",
        "1 carambola en estrellas",
        "½ taza de pulpa de parcha",
        "¼ taza de miel",
        "1 cucharada de jugo de limón",
        "8 palitos de madera"
      ],
      en: [
        "2 cups pineapple, cubed",
        "1 mango, cubed",
        "2 bananas, in thick slices",
        "1 cup watermelon, cubed",
        "1 star fruit, sliced into stars",
        "½ cup passion fruit pulp",
        "¼ cup honey",
        "1 tablespoon lime juice",
        "8 wooden skewers"
      ]
    },
    steps: {
      es: [
        "Bata la pulpa de parcha con la miel y el limón. Refrigere la salsa.",
        "Pase el guineo por un poco de jugo de limón para que no se oscurezca.",
        "Ensarte las frutas alternando colores, con una estrella de carambola al final de cada palito.",
        "Si quiere, áselas en la plancha caliente 1 minuto por lado para caramelizar la piña y el mangó (la sandía, póngala después).",
        "Sirva con la salsa de parcha para mojar. Para niños menores de 1 año, cambie la miel por azúcar."
      ],
      en: [
        "Whisk the passion fruit pulp with the honey and lime juice. Refrigerate the sauce.",
        "Toss the banana in a little lime juice so it doesn't darken.",
        "Thread the fruit alternating colors, with a star fruit slice at the end of each skewer.",
        "If you like, grill on a hot griddle 1 minute per side to caramelize the pineapple and mango (add the watermelon afterwards).",
        "Serve with the passion fruit sauce for dipping. For babies under 1 year, use sugar instead of honey."
      ]
    }
  },
  {
    id: "ensalada-carambola-pepino",
    category: "ensaladas",
    name: { es: "Ensalada de Carambola, Pepino y Menta", en: "Star Fruit, Cucumber and Mint Salad" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "3 carambolas en estrellas",
        "1 pepino en medias lunas finas",
        "½ cebolla roja en tiras finas",
        "2 cucharadas de menta picada",
        "2 cucharadas de cilantro picado",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de azúcar",
        "½ cucharadita de sal",
        "1 pizca de ají picante en polvo (opcional)"
      ],
      en: [
        "3 star fruits, sliced into stars",
        "1 cucumber, in thin half-moons",
        "½ red onion, thinly sliced",
        "2 tablespoons chopped mint",
        "2 tablespoons chopped cilantro",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "1 teaspoon sugar",
        "½ teaspoon salt",
        "1 pinch hot chili powder (optional)"
      ]
    },
    steps: {
      es: [
        "Quite con un pelador el borde oscuro de las puntas de la carambola antes de cortarla.",
        "Bata el limón, el aceite, el azúcar, la sal y el ají.",
        "Mezcle la carambola, el pepino y la cebolla con la vinagreta.",
        "Añada la menta y el cilantro justo antes de servir.",
        "Sirva frío al lado de pescado frito o pollo asado. Si tiene enfermedad de los riñones, no coma carambola: tiene una toxina que los riñones enfermos no eliminan."
      ],
      en: [
        "Use a peeler to remove the dark edge along the star fruit's ridges before slicing.",
        "Whisk the lime juice, oil, sugar, salt and chili.",
        "Toss the star fruit, cucumber and onion with the vinaigrette.",
        "Add the mint and cilantro just before serving.",
        "Serve cold next to fried fish or roast chicken. If you have kidney disease, don't eat star fruit: it has a toxin that diseased kidneys can't clear."
      ]
    }
  },
  {
    id: "ensalada-lechosa-verde",
    category: "ensaladas",
    name: { es: "Ensalada de Lechosa Verde con Recao y Maní", en: "Green Papaya Salad with Culantro and Peanuts" },
    active: 20, total: 20,
    servings: 4,
    ingredients: {
      es: [
        "1 lechosa verde (papaya verde) de 2 libras, pelada y rallada en tiras",
        "1 zanahoria rallada en tiras",
        "1 taza de tomates cereza en mitades",
        "4 hojas de recao picadas fino",
        "1 diente de ajo machacado",
        "1 ají picante pequeño picado (opcional)",
        "3 cucharadas de jugo de limón",
        "1 cucharada de azúcar morena",
        "1 cucharada de salsa de soya",
        "¼ taza de maní tostado picado"
      ],
      en: [
        "1 green papaya (2 lb), peeled and shredded",
        "1 carrot, shredded",
        "1 cup cherry tomatoes, halved",
        "4 culantro (recao) leaves, finely chopped",
        "1 garlic clove, crushed",
        "1 small hot pepper, chopped (optional)",
        "3 tablespoons lime juice",
        "1 tablespoon brown sugar",
        "1 tablespoon soy sauce",
        "¼ cup chopped roasted peanuts"
      ]
    },
    steps: {
      es: [
        "Pele la lechosa verde, sáquele las semillas blancas y rállela en tiras largas (con el lado grueso del rallo o un pelador de juliana). Use guantes: la leche de la cáscara irrita la piel.",
        "Remoje las tiras en agua con hielo 10 minutos para que queden crujientes, y escúrralas bien.",
        "Maje el ajo y el ají con el azúcar, y bata con el limón y la soya.",
        "Mezcle la lechosa, la zanahoria y los tomates con el aliño, apretando un poco con las manos.",
        "Añada el recao y el maní justo antes de servir. Es como la ensalada tailandesa, con el recao de aquí."
      ],
      en: [
        "Peel the green papaya, remove the white seeds and shred into long strips (on the coarse side of a grater or with a julienne peeler). Wear gloves: the latex in the skin irritates.",
        "Soak the strips in ice water 10 minutes so they turn crisp, and drain well.",
        "Mash the garlic and hot pepper with the sugar, then whisk with the lime juice and soy sauce.",
        "Toss the papaya, carrot and tomatoes with the dressing, squeezing a little with your hands.",
        "Add the culantro and peanuts just before serving. It's like the Thai salad, with our own recao."
      ]
    }
  },
  {
    id: "ensalada-sandia-queso",
    category: "ensaladas",
    name: { es: "Ensalada de Sandía, Queso del País y Menta", en: "Watermelon, Puerto Rican Cheese and Mint Salad" },
    active: 10, total: 10,
    servings: 6,
    ingredients: {
      es: [
        "4 tazas de sandía en cubos, sin semillas",
        "1 taza de queso blanco del país en cubitos",
        "1 pepino en cubos",
        "¼ cebolla roja en tiras finas",
        "¼ taza de hojas de menta",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "1 pizca de sal"
      ],
      en: [
        "4 cups seedless watermelon, cubed",
        "1 cup Puerto Rican white cheese (queso del país), diced",
        "1 cucumber, cubed",
        "¼ red onion, thinly sliced",
        "¼ cup mint leaves",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Ponga la sandía, el pepino y la cebolla en una fuente.",
        "Reparta el queso por encima.",
        "Bata el limón, el aceite y la sal, y rocíe la ensalada.",
        "Rompa la menta con las manos sobre la ensalada.",
        "Sirva bien fría. El queso del país, salado, hace resaltar lo dulce de la sandía; es ideal para un día de playa."
      ],
      en: [
        "Place the watermelon, cucumber and onion on a platter.",
        "Scatter the cheese on top.",
        "Whisk the lime juice, oil and salt and drizzle over the salad.",
        "Tear the mint over the salad with your hands.",
        "Serve very cold. The salty white cheese brings out the watermelon's sweetness; perfect for a beach day."
      ]
    }
  },
  {
    id: "helado-mamey",
    category: "postres",
    name: { es: "Helado de Mamey (Sin Máquina)", en: "No-Churn Mamey Ice Cream" },
    active: 15, total: 375, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de pulpa de mamey maduro",
        "1 lata de 14 onzas de leche condensada",
        "2 tazas de crema espesa para batir, fría",
        "1 cucharada de jugo de limón",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "2 cups ripe mamey pulp",
        "1 can (14 oz) condensed milk",
        "2 cups cold heavy whipping cream",
        "1 tablespoon lime juice",
        "1 teaspoon vanilla",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de mamey con la leche condensada, el limón, la vainilla y la sal hasta que quede lisa.",
        "Bata la crema fría hasta que forme picos firmes.",
        "Incorpore la crema al mamey en tres partes, con movimientos envolventes.",
        "Pase a un envase con tapa y congele 6 horas.",
        "Saque 5 minutos antes de servir. El mamey da un color salmón y un sabor entre batata, almendra y melocotón."
      ],
      en: [
        "Blend the mamey pulp with the condensed milk, lime juice, vanilla and salt until smooth.",
        "Whip the cold cream to stiff peaks.",
        "Fold the cream into the mamey in three parts.",
        "Transfer to a lidded container and freeze 6 hours.",
        "Take out 5 minutes before serving. Mamey gives a salmon color and a flavor between sweet potato, almond and peach."
      ]
    }
  },
  {
    id: "crema-caimito",
    category: "postres",
    name: { es: "Crema Fría de Caimito", en: "Chilled Star Apple (Caimito) Cream" },
    active: 15, total: 135, wait: "frio",
    servings: 4,
    ingredients: {
      es: [
        "4 caimitos maduros",
        "½ taza de leche evaporada",
        "2 cucharadas de leche condensada",
        "1 cucharada de jugo de china",
        "1 pizca de canela",
        "1 taza de hielo"
      ],
      en: [
        "4 ripe star apples (caimitos)",
        "½ cup evaporated milk",
        "2 tablespoons condensed milk",
        "1 tablespoon orange juice",
        "1 pinch cinnamon",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Parta los caimitos por la mitad y saque la pulpa con una cuchara, sin raspar la cáscara (la leche blanca de la cáscara es pegajosa y amarga). Quite las semillas.",
        "Licúe la pulpa con la leche evaporada, la leche condensada, el jugo de china y el hielo hasta que quede cremosa.",
        "Sirva en copas.",
        "Refrigere 2 horas para que espese un poco.",
        "Espolvoree la canela al servir. El caimito morado da un color lila y un sabor suave como de uva y leche."
      ],
      en: [
        "Halve the star apples and scoop out the pulp with a spoon, without scraping the skin (its white latex is sticky and bitter). Remove the seeds.",
        "Blend the pulp with the evaporated milk, condensed milk, orange juice and ice until creamy.",
        "Pour into dessert cups.",
        "Refrigerate 2 hours to thicken slightly.",
        "Sprinkle with cinnamon to serve. Purple star apple gives a lilac color and a mild flavor like grape and milk."
      ]
    }
  },
  {
    id: "batida-nispero",
    category: "bebidas",
    name: { es: "Batida de Níspero", en: "Sapodilla (Níspero) Shake" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "4 nísperos maduros, pelados y sin semillas",
        "1½ tazas de leche fría",
        "2 cucharadas de azúcar",
        "½ cucharadita de vainilla",
        "1 pizca de canela",
        "1 taza de hielo"
      ],
      en: [
        "4 ripe sapodillas (nísperos), peeled and seeded",
        "1½ cups cold milk",
        "2 tablespoons sugar",
        "½ teaspoon vanilla",
        "1 pinch cinnamon",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Use nísperos bien maduros, que estén blandos al apretarlos: verdes amarran la boca.",
        "Pélelos y quíteles las semillas negras (son duras y no se comen).",
        "Licúe la pulpa con la leche, el azúcar, la vainilla y la canela.",
        "Añada el hielo y licúe otra vez hasta que quede espumosa.",
        "Sirva enseguida. Sabe a azúcar morena y pera, como un batido de caramelo natural."
      ],
      en: [
        "Use very ripe sapodillas, soft when pressed: unripe ones make your mouth pucker.",
        "Peel them and remove the black seeds (they're hard and not eaten).",
        "Blend the pulp with the milk, sugar, vanilla and cinnamon.",
        "Add the ice and blend again until frothy.",
        "Serve right away. It tastes of brown sugar and pear, like a natural caramel shake."
      ]
    }
  },
  {
    id: "batida-anon",
    category: "bebidas",
    name: { es: "Batida de Anón", en: "Sugar Apple (Anón) Shake" },
    active: 15, total: 15,
    servings: 2,
    ingredients: {
      es: [
        "2 anones maduros",
        "1 taza de leche fría",
        "½ taza de agua fría",
        "1 cucharada de azúcar",
        "1 cucharada de jugo de limón",
        "1 taza de hielo"
      ],
      en: [
        "2 ripe sugar apples (anones)",
        "1 cup cold milk",
        "½ cup cold water",
        "1 tablespoon sugar",
        "1 tablespoon lime juice",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Abra los anones con las manos (maduros se desarman solos) y saque la pulpa blanca con una cuchara.",
        "Quite todas las semillas negras con paciencia, apretando la pulpa entre los dedos: no las licúe, porque son tóxicas si se trituran.",
        "Licúe la pulpa con la leche, el agua, el azúcar y el limón.",
        "Añada el hielo y licúe hasta que quede cremosa.",
        "Sirva enseguida. El anón es muy dulce, con sabor a natilla; el limón lo equilibra. Lo mismo sirve para el corazón y la guanábana."
      ],
      en: [
        "Open the sugar apples with your hands (ripe ones fall apart) and scoop out the white pulp with a spoon.",
        "Patiently remove all the black seeds, squeezing the pulp between your fingers: don't blend them, they're toxic when crushed.",
        "Blend the pulp with the milk, water, sugar and lime juice.",
        "Add the ice and blend until creamy.",
        "Serve right away. Sugar apple is very sweet, with a custard flavor; the lime balances it. The same works for custard apple (corazón) and soursop."
      ]
    }
  },
  {
    id: "jugo-melon-menta",
    category: "jugos",
    name: { es: "Jugo de Melón con Limón y Menta", en: "Cantaloupe Juice with Lime and Mint" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "1 melón (cantalupo) maduro, pelado y sin semillas",
        "2 tazas de agua fría",
        "3 cucharadas de jugo de limón",
        "2 cucharadas de azúcar",
        "6 hojas de menta",
        "Hielo"
      ],
      en: [
        "1 ripe cantaloupe, peeled and seeded",
        "2 cups cold water",
        "3 tablespoons lime juice",
        "2 tablespoons sugar",
        "6 mint leaves",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Lave bien el melón por fuera antes de cortarlo: la cáscara rugosa puede tener bacterias que el cuchillo pasa a la pulpa.",
        "Corte la pulpa en pedazos.",
        "Licúe el melón con el agua, el limón, el azúcar y la menta.",
        "Cuele si lo quiere más fino.",
        "Sirva sobre hielo enseguida, o guárdelo en la nevera y úselo el mismo día."
      ],
      en: [
        "Scrub the outside of the cantaloupe well before cutting: the rough rind can carry bacteria the knife drags into the flesh.",
        "Cut the flesh into chunks.",
        "Blend the melon with the water, lime juice, sugar and mint.",
        "Strain if you want it smoother.",
        "Serve over ice right away, or refrigerate and drink it the same day."
      ]
    }
  },
  {
    id: "pico-gallo-frutas",
    category: "salsas",
    name: { es: "Pico de Gallo de Frutas Tropicales", en: "Tropical Fruit Pico de Gallo" },
    active: 15, total: 15,
    servings: 6,
    ingredients: {
      es: [
        "1 mangó maduro en cubitos",
        "1 taza de piña en cubitos",
        "1 taza de lechosa (papaya) en cubitos",
        "½ cebolla roja picada fina",
        "½ pimiento rojo picado fino",
        "1 ají caballero o jalapeño sin semillas, picado fino (opcional)",
        "¼ taza de cilantro picado",
        "3 cucharadas de jugo de limón",
        "½ cucharadita de sal"
      ],
      en: [
        "1 ripe mango, finely diced",
        "1 cup pineapple, finely diced",
        "1 cup papaya (lechosa), finely diced",
        "½ red onion, finely chopped",
        "½ red bell pepper, finely chopped",
        "1 hot pepper or jalapeño, seeded and finely chopped (optional)",
        "¼ cup chopped cilantro",
        "3 tablespoons lime juice",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Corte todas las frutas y vegetales del mismo tamaño, en cubitos de ¼ pulgada.",
        "Mezcle el mangó, la piña, la lechosa, la cebolla, el pimiento y el ají.",
        "Añada el cilantro, el limón y la sal, y mezcle con cuidado.",
        "Deje reposar 10 minutos en la nevera para que suelte sus jugos.",
        "Sirva con pescado a la plancha, pinchos de pollo, tostones o mariquitas. Se come el mismo día."
      ],
      en: [
        "Cut all the fruit and vegetables the same size, in ¼-inch dice.",
        "Mix the mango, pineapple, papaya, onion, bell pepper and hot pepper.",
        "Add the cilantro, lime juice and salt and toss gently.",
        "Let rest 10 minutes in the fridge so it releases its juices.",
        "Serve with grilled fish, chicken skewers, tostones or plantain chips. Eat it the same day."
      ]
    }
  },
  {
    id: "chutney-mango-pina",
    category: "salsas",
    name: { es: "Chutney de Mangó y Piña", en: "Mango Pineapple Chutney" },
    active: 45, total: 45,
    servings: 12,
    ingredients: {
      es: [
        "2 mangós verdes o pintones, en cubos",
        "2 tazas de piña en cubitos",
        "1 cebolla picada",
        "1 cucharada de jengibre fresco rallado",
        "2 dientes de ajo picados",
        "¾ taza de azúcar morena",
        "½ taza de vinagre de manzana",
        "¼ taza de pasas",
        "½ cucharadita de canela",
        "¼ cucharadita de clavo en polvo",
        "½ cucharadita de sal",
        "1 pizca de ají picante en polvo"
      ],
      en: [
        "2 green or half-ripe mangoes, cubed",
        "2 cups pineapple, finely diced",
        "1 onion, chopped",
        "1 tablespoon grated fresh ginger",
        "2 garlic cloves, minced",
        "¾ cup brown sugar",
        "½ cup apple cider vinegar",
        "¼ cup raisins",
        "½ teaspoon cinnamon",
        "¼ teaspoon ground cloves",
        "½ teaspoon salt",
        "1 pinch hot chili powder"
      ]
    },
    steps: {
      es: [
        "Ponga todos los ingredientes en una olla de fondo grueso.",
        "Deje hervir, baje el fuego y cocine destapado 35 minutos, moviendo a menudo, hasta que espese y el mangó esté transparente.",
        "Aplaste un poco con la cuchara si lo quiere menos en trozos.",
        "Vierta caliente en frascos limpios y tape.",
        "Guárdelo en la nevera hasta 3 semanas. Va con pernil, chuletas, pollo asado o con queso y galletas."
      ],
      en: [
        "Put all the ingredients in a heavy-bottomed pot.",
        "Bring to a boil, lower the heat and cook uncovered 35 minutes, stirring often, until thick and the mango turns translucent.",
        "Mash a little with the spoon if you want it less chunky.",
        "Pour hot into clean jars and cover.",
        "Keep refrigerated up to 3 weeks. Goes with pernil, pork chops, roast chicken, or with cheese and crackers."
      ]
    }
  },
  // ---------- Tanda 47: más pescados y mariscos (16) ----------
  {
    id: "pastelon-bacalao",
    category: "pescados",
    name: { es: "Pastelón de Bacalao con Amarillos", en: "Salt Cod and Ripe Plantain Pastelón" },
    active: 90, total: 810, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "1 libra de bacalao salado sin espinas",
        "5 plátanos maduros (amarillos)",
        "Aceite vegetal para freír",
        "3 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 cebolla en ruedas finas",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "1 cucharada de alcaparras",
        "4 huevos batidos",
        "1 taza de queso mozzarella rallado"
      ],
      en: [
        "1 pound boneless salt cod",
        "5 ripe plantains (amarillos)",
        "Vegetable oil for frying",
        "3 tablespoons olive oil",
        "½ cup sofrito",
        "1 onion, thinly sliced",
        "½ cup tomato sauce",
        "¼ cup chopped stuffed olives",
        "1 tablespoon capers",
        "4 eggs, beaten",
        "1 cup shredded mozzarella cheese"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao: remójelo en agua fría 12 horas en la nevera, cambiando el agua 3 veces. Hiérvalo 10 minutos, escúrralo y desmenúcelo.",
        "Pele los amarillos, córtelos a lo largo en lascas finas y fríalas en aceite a 350 °F hasta que doren. Escurra.",
        "Sofría el sofrito y la cebolla en el aceite de oliva 4 minutos. Añada el bacalao, la salsa de tomate, las aceitunas y las alcaparras, y cocine 8 minutos.",
        "Caliente el horno a 350 °F. En un molde engrasado, ponga la mitad del huevo, una capa de amarillos, todo el bacalao, la mitad del queso y otra capa de amarillos. Cubra con el resto del huevo y del queso.",
        "Hornee 30 minutos hasta que el huevo cuaje y el queso dore. Deje reposar 10 minutos antes de cortar. Es el pastelón de Cuaresma, cuando no se come carne."
      ],
      en: [
        "Desalt the cod: soak in cold water 12 hours in the fridge, changing the water 3 times. Boil 10 minutes, drain and flake.",
        "Peel the ripe plantains, slice lengthwise thinly and fry at 350 °F until golden. Drain.",
        "Sauté the sofrito and onion in the olive oil 4 minutes. Add the cod, tomato sauce, olives and capers, and cook 8 minutes.",
        "Heat the oven to 350 °F. In a greased dish, layer half the egg, a layer of plantains, all the cod, half the cheese and another layer of plantains. Top with the rest of the egg and cheese.",
        "Bake 30 minutes until the egg sets and the cheese browns. Let rest 10 minutes before cutting. It's the Lenten pastelón, for when meat isn't eaten."
      ]
    }
  },
  {
    id: "bacalao-escabeche",
    category: "pescados",
    name: { es: "Bacalao en Escabeche", en: "Pickled Salt Cod (Escabeche)" },
    active: 40, total: 1480, wait: "remojo",
    servings: 8,
    ingredients: {
      es: [
        "1½ libras de bacalao salado sin espinas",
        "¾ taza de aceite de oliva",
        "½ taza de vinagre",
        "2 cebollas grandes en ruedas",
        "6 dientes de ajo en lascas",
        "1 pimiento rojo en tiras",
        "10 granos de pimienta",
        "3 hojas de laurel",
        "¼ taza de aceitunas rellenas"
      ],
      en: [
        "1½ pounds boneless salt cod",
        "¾ cup olive oil",
        "½ cup vinegar",
        "2 large onions, sliced",
        "6 garlic cloves, sliced",
        "1 red bell pepper, in strips",
        "10 black peppercorns",
        "3 bay leaves",
        "¼ cup stuffed olives"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao 12 horas en agua fría en la nevera, cambiando el agua 3 veces. Hiérvalo 10 minutos y sepárelo en lascas grandes.",
        "Cocine la cebolla, el ajo y el pimiento en el aceite a fuego bajo 10 minutos, sin dorar.",
        "Añada el vinagre, la pimienta en grano y el laurel, y deje hervir 2 minutos.",
        "En un envase de cristal, ponga el bacalao y cúbralo con el escabeche caliente y las aceitunas.",
        "Tape y refrigere al menos 1 día. Se sirve frío o a temperatura ambiente con guineítos verdes hervidos; dura una semana en la nevera."
      ],
      en: [
        "Desalt the cod 12 hours in cold water in the fridge, changing the water 3 times. Boil 10 minutes and separate into large flakes.",
        "Cook the onion, garlic and bell pepper in the oil over low heat 10 minutes, without browning.",
        "Add the vinegar, peppercorns and bay leaves and boil 2 minutes.",
        "In a glass container, place the cod and cover with the hot escabeche and the olives.",
        "Cover and refrigerate at least 1 day. Serve cold or at room temperature with boiled green bananas; it keeps a week in the fridge."
      ]
    }
  },
  {
    id: "bacalao-rebozado",
    category: "pescados",
    name: { es: "Bacalao Rebozado (Frito)", en: "Battered Fried Salt Cod" },
    active: 30, total: 1470, wait: "frio",
    servings: 4,
    ingredients: {
      es: [
        "1 libra de bacalao salado en lomos",
        "1 taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "1 huevo",
        "¾ taza de agua fría con gas",
        "1 cucharadita de ajo en polvo",
        "Aceite vegetal para freír",
        "2 limones en cuartos"
      ],
      en: [
        "1 pound salt cod loins",
        "1 cup all-purpose flour",
        "1 teaspoon baking powder",
        "1 egg",
        "¾ cup cold sparkling water",
        "1 teaspoon garlic powder",
        "Vegetable oil for frying",
        "2 limes, quartered"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao 24 horas en agua fría en la nevera, cambiando el agua 4 veces. Séquelo bien y córtelo en trozos de 2 pulgadas.",
        "Bata la harina, el polvo de hornear, el huevo, el agua con gas y el ajo en polvo hasta tener un batido espeso. No le ponga sal.",
        "Caliente el aceite a 350 °F.",
        "Pase cada trozo de bacalao por el batido y fríalo 3 a 4 minutos hasta que esté dorado e inflado.",
        "Escurra en papel toalla y sirva caliente con limón, con viandas o con ensalada de aguacate."
      ],
      en: [
        "Desalt the cod 24 hours in cold water in the fridge, changing the water 4 times. Pat dry and cut into 2-inch pieces.",
        "Whisk the flour, baking powder, egg, sparkling water and garlic powder into a thick batter. Don't add salt.",
        "Heat the oil to 350 °F.",
        "Dip each piece of cod in the batter and fry 3 to 4 minutes until golden and puffed.",
        "Drain on paper towels and serve hot with lime, with root vegetables or with avocado salad."
      ]
    }
  },
  {
    id: "pescado-encebollado",
    category: "pescados",
    name: { es: "Filete de Pescado Encebollado", en: "Fish Fillets Smothered in Onions" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de pescado blanco (mero, chillo o tilapia) de 6 onzas",
        "3 dientes de ajo machacados",
        "2 cucharadas de jugo de limón",
        "1 cucharadita de orégano",
        "½ cucharadita de sal",
        "¼ taza de harina de trigo",
        "3 cucharadas de aceite de oliva",
        "2 cebollas grandes en ruedas",
        "2 cucharadas de vinagre",
        "½ taza de caldo de pescado o de vegetales",
        "1 pimiento verde en tiras"
      ],
      en: [
        "4 white fish fillets (grouper, snapper or tilapia), 6 oz each",
        "3 garlic cloves, crushed",
        "2 tablespoons lime juice",
        "1 teaspoon oregano",
        "½ teaspoon salt",
        "¼ cup all-purpose flour",
        "3 tablespoons olive oil",
        "2 large onions, sliced",
        "2 tablespoons vinegar",
        "½ cup fish or vegetable broth",
        "1 green bell pepper, in strips"
      ]
    },
    steps: {
      es: [
        "Adobe el pescado con el ajo, el limón, el orégano y la sal 15 minutos.",
        "Séquelo, páselo por la harina y dórelo en 2 cucharadas de aceite 3 minutos por lado. Sáquelo.",
        "En el mismo sartén, cocine la cebolla y el pimiento en el resto del aceite 8 minutos hasta que se ablanden.",
        "Añada el vinagre y el caldo, y deje hervir 2 minutos.",
        "Vuelva el pescado al sartén, cúbralo con la cebolla y cocine tapado 4 minutos, hasta que se desmenuce con un tenedor (145 °F). Sirva con arroz blanco y tostones."
      ],
      en: [
        "Season the fish with the garlic, lime juice, oregano and salt for 15 minutes.",
        "Pat dry, dredge in the flour and brown in 2 tablespoons oil 3 minutes per side. Remove.",
        "In the same skillet, cook the onion and bell pepper in the remaining oil 8 minutes until soft.",
        "Add the vinegar and broth and boil 2 minutes.",
        "Return the fish to the skillet, cover with the onions and cook covered 4 minutes, until it flakes with a fork (145 °F). Serve with white rice and tostones."
      ]
    }
  },
  {
    id: "pescado-sudado",
    category: "pescados",
    name: { es: "Pescado Sudado a la Criolla", en: "Criollo Steamed Fish (Pescado Sudado)" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de pescado blanco de 6 onzas",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 cebolla en ruedas",
        "2 tomates en ruedas",
        "1 pimiento rojo en tiras",
        "½ taza de caldo de pescado o de vegetales",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "4 white fish fillets, 6 oz each",
        "1 teaspoon adobo",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 onion, sliced",
        "2 tomatoes, sliced",
        "1 red bell pepper, in strips",
        "½ cup fish or vegetable broth",
        "2 tablespoons lime juice",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Adobe el pescado y déjelo reposar mientras prepara la base.",
        "En un sartén ancho con tapa, sofría el sofrito en el aceite 3 minutos.",
        "Haga una cama con la cebolla, el tomate y el pimiento, y añada el caldo y el limón.",
        "Ponga el pescado encima, tape bien y cocine a fuego medio-bajo 10 a 12 minutos: el pescado se cocina en el vapor de los vegetales, sin voltearlo.",
        "Termine con el cilantro y sirva con arroz blanco o viandas, con su salsa por encima. Es un plato liviano, sin freír."
      ],
      en: [
        "Season the fish with the adobo and let it rest while you make the base.",
        "In a wide skillet with a lid, sauté the sofrito in the oil 3 minutes.",
        "Make a bed of onion, tomato and bell pepper, and add the broth and lime juice.",
        "Lay the fish on top, cover tightly and cook over medium-low heat 10 to 12 minutes: the fish cooks in the steam from the vegetables, without turning.",
        "Finish with the cilantro and serve with white rice or root vegetables, with the sauce on top. It's a light dish, no frying."
      ]
    }
  },
  {
    id: "pescado-costra-platanutre",
    category: "pescados",
    name: { es: "Filete de Pescado con Costra de Platanutres", en: "Plantain Chip–Crusted Fish Fillets" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de pescado blanco de 6 onzas",
        "1 cucharadita de adobo",
        "1 bolsa de 5 onzas de platanutres",
        "2 cucharadas de cilantro picado",
        "¼ taza de harina de trigo",
        "2 huevos batidos",
        "2 cucharadas de aceite de oliva",
        "½ taza de mayonesa",
        "1 diente de ajo machacado",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "4 white fish fillets, 6 oz each",
        "1 teaspoon adobo",
        "1 bag (5 oz) plantain chips (platanutres)",
        "2 tablespoons chopped cilantro",
        "¼ cup all-purpose flour",
        "2 eggs, beaten",
        "2 tablespoons olive oil",
        "½ cup mayonnaise",
        "1 garlic clove, crushed",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F y engrase una bandeja con el aceite.",
        "Triture los platanutres en una bolsa con el rodillo (que queden en pedacitos, no en polvo) y mézclelos con el cilantro.",
        "Adobe el pescado, páselo por la harina, el huevo y los platanutres, apretando para que pegue la costra.",
        "Hornee 12 a 15 minutos, hasta que la costra dore y el pescado se desmenuce (145 °F).",
        "Mezcle la mayonesa, el ajo y el limón para hacer mayo-ajo y sirva al lado. Los platanutres ya traen sal: no le añada más."
      ],
      en: [
        "Heat the oven to 400 °F and grease a baking sheet with the oil.",
        "Crush the plantain chips in a bag with a rolling pin (into small bits, not powder) and mix with the cilantro.",
        "Season the fish with adobo, dredge in flour, egg and the plantain chips, pressing so the crust sticks.",
        "Bake 12 to 15 minutes, until the crust browns and the fish flakes (145 °F).",
        "Mix the mayonnaise, garlic and lime juice into mayo-ajo and serve on the side. The chips are already salty: don't add more."
      ]
    }
  },
  {
    id: "dorado-costra-coco",
    category: "pescados",
    name: { es: "Dorado con Costra de Coco y Salsa de Piña", en: "Coconut-Crusted Mahi-Mahi with Pineapple Sauce" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de dorado (mahi-mahi) de 6 onzas",
        "½ cucharadita de sal",
        "¼ taza de harina de trigo",
        "2 huevos batidos",
        "1 taza de coco rallado sin azúcar",
        "½ taza de panko",
        "Aceite vegetal para freír",
        "1 taza de piña en cubitos",
        "¼ taza de jugo de piña",
        "1 cucharada de jugo de limón",
        "1 cucharadita de jengibre rallado",
        "1 pizca de ají picante en polvo"
      ],
      en: [
        "4 mahi-mahi (dorado) fillets, 6 oz each",
        "½ teaspoon salt",
        "¼ cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup unsweetened shredded coconut",
        "½ cup panko",
        "Vegetable oil for frying",
        "1 cup pineapple, finely diced",
        "¼ cup pineapple juice",
        "1 tablespoon lime juice",
        "1 teaspoon grated ginger",
        "1 pinch hot chili powder"
      ]
    },
    steps: {
      es: [
        "Para la salsa, hierva la piña, el jugo de piña, el limón, el jengibre y el ají 8 minutos hasta que espese un poco. Deje enfriar.",
        "Sale el pescado. Mezcle el coco con el panko.",
        "Pase cada filete por la harina, el huevo y la mezcla de coco, apretando.",
        "Fría en ½ pulgada de aceite a 350 °F 3 minutos por lado, hasta que la costra esté dorada (el coco se quema rápido: no suba el fuego).",
        "Escurra y sirva con la salsa de piña por encima, con arroz con coco o tostones."
      ],
      en: [
        "For the sauce, boil the pineapple, pineapple juice, lime juice, ginger and chili 8 minutes until slightly thickened. Let cool.",
        "Salt the fish. Mix the coconut with the panko.",
        "Dredge each fillet in flour, egg and the coconut mixture, pressing.",
        "Fry in ½ inch of oil at 350 °F 3 minutes per side, until the crust is golden (coconut burns fast: don't raise the heat).",
        "Drain and serve with the pineapple sauce on top, with coconut rice or tostones."
      ]
    }
  },
  {
    id: "atun-plancha-mojo-recao",
    category: "pescados",
    name: { es: "Atún a la Plancha con Mojo de Recao", en: "Seared Tuna with Culantro Mojo" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de atún fresco de 6 onzas (de una pulgada de grueso)",
        "1 cucharada de aceite de oliva para la plancha",
        "½ cucharadita de sal",
        "½ cucharadita de pimienta",
        "8 hojas de recao",
        "¼ taza de cilantro",
        "3 dientes de ajo",
        "¼ taza de aceite de oliva",
        "3 cucharadas de jugo de limón",
        "1 pizca de sal para el mojo"
      ],
      en: [
        "4 fresh tuna steaks, 6 oz each and 1 inch thick",
        "1 tablespoon olive oil for the griddle",
        "½ teaspoon salt",
        "½ teaspoon pepper",
        "8 culantro (recao) leaves",
        "¼ cup cilantro",
        "3 garlic cloves",
        "¼ cup olive oil",
        "3 tablespoons lime juice",
        "1 pinch salt for the mojo"
      ]
    },
    steps: {
      es: [
        "Para el mojo, licúe o maje el recao, el cilantro, el ajo, el aceite, el limón y la pizca de sal.",
        "Seque el atún y sazónelo con la sal y la pimienta.",
        "Caliente bien una plancha o sartén de hierro con el aceite.",
        "Selle el atún 2 minutos por lado para que quede rosado por dentro, o 4 minutos por lado para que quede cocido (145 °F). En el embarazo, para niños pequeños y personas con las defensas bajas, cocínelo por completo.",
        "Corte en lascas y sirva con el mojo de recao por encima, con arroz y aguacate."
      ],
      en: [
        "For the mojo, blend or mash the culantro, cilantro, garlic, oil, lime juice and the pinch of salt.",
        "Pat the tuna dry and season with the salt and pepper.",
        "Heat a griddle or cast-iron skillet very hot with the oil.",
        "Sear the tuna 2 minutes per side for pink inside, or 4 minutes per side for fully cooked (145 °F). During pregnancy, for small children and people with weak immune systems, cook it through.",
        "Slice and serve with the culantro mojo on top, with rice and avocado."
      ]
    }
  },
  {
    id: "tortitas-atun-maiz",
    category: "pescados",
    name: { es: "Tortitas de Atún con Maíz", en: "Tuna and Corn Patties" },
    active: 30, total: 45, wait: "frio",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 5 onzas de atún en agua, escurrido",
        "1 taza de maíz en grano escurrido",
        "2 huevos",
        "½ taza de pan rallado",
        "2 cucharadas de sofrito",
        "2 cucharadas de cebolla picada fina",
        "1 cucharada de mostaza",
        "¼ cucharadita de pimienta",
        "3 cucharadas de aceite vegetal"
      ],
      en: [
        "2 cans (5 oz) tuna in water, drained",
        "1 cup drained corn kernels",
        "2 eggs",
        "½ cup breadcrumbs",
        "2 tablespoons sofrito",
        "2 tablespoons finely chopped onion",
        "1 tablespoon mustard",
        "¼ teaspoon pepper",
        "3 tablespoons vegetable oil"
      ]
    },
    steps: {
      es: [
        "Desmenuce el atún en un envase.",
        "Añada el maíz, los huevos, el pan rallado, el sofrito, la cebolla, la mostaza y la pimienta, y mezcle bien.",
        "Forme 8 tortitas de ½ pulgada de grueso; si se desarman, refrigere la mezcla 15 minutos.",
        "Dórelas en el aceite a fuego medio 3 a 4 minutos por lado.",
        "Sirva con arroz con habichuelas o en pan con lechuga. Son una forma barata de comer pescado entre semana."
      ],
      en: [
        "Flake the tuna in a bowl.",
        "Add the corn, eggs, breadcrumbs, sofrito, onion, mustard and pepper and mix well.",
        "Shape 8 patties ½ inch thick; if they fall apart, refrigerate the mixture 15 minutes.",
        "Brown them in the oil over medium heat 3 to 4 minutes per side.",
        "Serve with rice and beans or in bread with lettuce. They're an inexpensive way to eat fish on weeknights."
      ]
    }
  },
  {
    id: "tilapia-alcaparras",
    category: "pescados",
    name: { es: "Tilapia en Salsa de Alcaparras y Limón", en: "Tilapia in Caper Lemon Sauce" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de tilapia de 5 onzas",
        "½ cucharadita de sal",
        "¼ taza de harina de trigo",
        "2 cucharadas de aceite de oliva",
        "2 cucharadas de mantequilla",
        "3 dientes de ajo picados",
        "2 cucharadas de alcaparras",
        "½ taza de caldo de pescado o de vegetales",
        "3 cucharadas de jugo de limón",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "4 tilapia fillets, 5 oz each",
        "½ teaspoon salt",
        "¼ cup all-purpose flour",
        "2 tablespoons olive oil",
        "2 tablespoons butter",
        "3 garlic cloves, minced",
        "2 tablespoons capers",
        "½ cup fish or vegetable broth",
        "3 tablespoons lemon juice",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Sale la tilapia y pásela por la harina, sacudiendo el exceso.",
        "Dórela en el aceite 2 a 3 minutos por lado. Sáquela a un plato.",
        "En el mismo sartén, derrita la mantequilla y sofría el ajo 1 minuto.",
        "Añada las alcaparras, el caldo y el limón, y deje hervir 2 minutos raspando el fondo.",
        "Vuelva la tilapia a la salsa 1 minuto, espolvoree el perejil y sirva con arroz blanco o papas."
      ],
      en: [
        "Salt the tilapia and dredge in flour, shaking off the excess.",
        "Brown in the oil 2 to 3 minutes per side. Move to a plate.",
        "In the same skillet, melt the butter and sauté the garlic 1 minute.",
        "Add the capers, broth and lemon juice and boil 2 minutes, scraping the bottom.",
        "Return the tilapia to the sauce for 1 minute, sprinkle with parsley and serve with white rice or potatoes."
      ]
    }
  },
  {
    id: "camarones-guayaba",
    category: "pescados",
    name: { es: "Camarones Glaseados con Guayaba", en: "Guava-Glazed Shrimp" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de camarones grandes, pelados y limpios",
        "1 cucharadita de adobo",
        "4 onzas de pasta de guayaba en cubitos",
        "¼ taza de agua",
        "2 cucharadas de salsa de soya",
        "2 cucharadas de vinagre",
        "1 cucharada de jengibre rallado",
        "2 dientes de ajo machacados",
        "1 cucharada de aceite vegetal",
        "2 cebollines picados"
      ],
      en: [
        "1½ pounds large shrimp, peeled and deveined",
        "1 teaspoon adobo",
        "4 ounces guava paste, diced",
        "¼ cup water",
        "2 tablespoons soy sauce",
        "2 tablespoons vinegar",
        "1 tablespoon grated ginger",
        "2 garlic cloves, crushed",
        "1 tablespoon vegetable oil",
        "2 scallions, chopped"
      ]
    },
    steps: {
      es: [
        "Derrita la pasta de guayaba con el agua a fuego bajo. Añada la soya, el vinagre, el jengibre y el ajo, y cocine 3 minutos hasta tener un glaseado.",
        "Adobe los camarones.",
        "Saltéelos en el aceite a fuego alto 1 a 2 minutos por lado, hasta que estén rosados.",
        "Añada el glaseado y mueva 1 minuto para que los cubra (no los cocine de más o se ponen duros).",
        "Termine con el cebollín y sirva con arroz blanco o tostones."
      ],
      en: [
        "Melt the guava paste with the water over low heat. Add the soy sauce, vinegar, ginger and garlic, and cook 3 minutes into a glaze.",
        "Season the shrimp with adobo.",
        "Sauté in the oil over high heat 1 to 2 minutes per side, until pink.",
        "Add the glaze and stir 1 minute to coat (don't overcook or they turn rubbery).",
        "Finish with the scallions and serve with white rice or tostones."
      ]
    }
  },
  {
    id: "pulpo-guisado-papas",
    category: "pescados",
    name: { es: "Pulpo Guisado a la Criolla con Papas", en: "Criollo Octopus Stew with Potatoes" },
    active: 105, total: 105,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de pulpo limpio",
        "3 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 cebolla picada",
        "1 lata de 8 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 hoja de laurel",
        "1 libra de papas en cubos",
        "2 tazas del agua de hervir el pulpo",
        "½ cucharadita de sal"
      ],
      en: [
        "2 pounds cleaned octopus",
        "3 tablespoons olive oil",
        "½ cup sofrito",
        "1 onion, chopped",
        "1 can (8 oz) tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "1 bay leaf",
        "1 pound potatoes, cubed",
        "2 cups octopus cooking water",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo en agua sin sal 50 minutos a 1 hora, hasta que un tenedor entre fácil en la parte gruesa. Guarde 2 tazas del agua y corte el pulpo en trozos.",
        "Sofría el sofrito y la cebolla en el aceite 4 minutos.",
        "Añada la salsa de tomate, las aceitunas, las alcaparras y el laurel, y cocine 3 minutos.",
        "Añada las papas, el agua del pulpo y la sal, y cocine tapado 15 minutos hasta que las papas estén blandas.",
        "Añada el pulpo y cocine 10 minutos más para que tome sabor. Sirva con arroz blanco o pan."
      ],
      en: [
        "Boil the octopus in unsalted water 50 minutes to 1 hour, until a fork slides easily into the thick part. Save 2 cups of the water and cut the octopus into pieces.",
        "Sauté the sofrito and onion in the oil 4 minutes.",
        "Add the tomato sauce, olives, capers and bay leaf and cook 3 minutes.",
        "Add the potatoes, octopus water and salt and cook covered 15 minutes until the potatoes are tender.",
        "Add the octopus and cook 10 more minutes to take on flavor. Serve with white rice or bread."
      ]
    }
  },
  {
    id: "ceviche-pulpo-mango",
    category: "ensaladas",
    name: { es: "Ensalada Fría de Pulpo y Mangó", en: "Chilled Octopus and Mango Salad" },
    active: 75, total: 135, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de pulpo limpio",
        "1 mangó pintón en cubos",
        "½ cebolla roja picada fina",
        "1 pimiento rojo picado fino",
        "1 ají dulce picado",
        "¼ taza de cilantro picado",
        "½ taza de jugo de limón",
        "3 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "1 aguacate en cubos"
      ],
      en: [
        "2 pounds cleaned octopus",
        "1 half-ripe mango, cubed",
        "½ red onion, finely chopped",
        "1 red bell pepper, finely chopped",
        "1 ají dulce (sweet pepper), chopped",
        "¼ cup chopped cilantro",
        "½ cup lime juice",
        "3 tablespoons olive oil",
        "½ teaspoon salt",
        "1 avocado, cubed"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo en agua sin sal 50 minutos a 1 hora, hasta que esté blando. Escúrralo, déjelo enfriar y córtelo en rueditas.",
        "Mezcle el pulpo con el mangó, la cebolla, el pimiento, el ají y el cilantro.",
        "Bata el limón, el aceite y la sal, y añádalo.",
        "Refrigere 1 hora para que se mezclen los sabores.",
        "Añada el aguacate al servir. Como el pulpo va cocido, es apta para quien no come pescado crudo; sirva con tostones o galletas de soda."
      ],
      en: [
        "Boil the octopus in unsalted water 50 minutes to 1 hour, until tender. Drain, cool and slice into rounds.",
        "Mix the octopus with the mango, onion, bell pepper, ají dulce and cilantro.",
        "Whisk the lime juice, oil and salt and add.",
        "Refrigerate 1 hour so the flavors blend.",
        "Add the avocado to serve. Because the octopus is cooked, it's fine for people who don't eat raw fish; serve with tostones or soda crackers."
      ]
    }
  },
  {
    id: "carrucho-salsa-coco",
    category: "pescados",
    name: { es: "Carrucho en Salsa de Coco", en: "Conch in Coconut Sauce" },
    active: 90, total: 90,
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de carrucho limpio",
        "1 limón",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 13.5 onzas de leche de coco",
        "2 tomates picados",
        "1 pimiento rojo picado",
        "4 hojas de recao picadas",
        "½ cucharadita de sal",
        "1 pizca de ají picante en polvo"
      ],
      en: [
        "1½ pounds cleaned conch",
        "1 lime",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (13.5 oz) coconut milk",
        "2 tomatoes, chopped",
        "1 red bell pepper, chopped",
        "4 culantro (recao) leaves, chopped",
        "½ teaspoon salt",
        "1 pinch hot chili powder"
      ]
    },
    steps: {
      es: [
        "Frote el carrucho con el limón, enjuáguelo y macháquelo con un mazo para ablandarlo.",
        "Hiérvalo en agua 45 minutos a 1 hora hasta que esté blando (o 20 minutos en olla de presión). Córtelo en trozos.",
        "Sofría el sofrito en el aceite de achiote 3 minutos. Añada los tomates y el pimiento, y cocine 3 minutos.",
        "Añada la leche de coco, el recao, la sal y el ají, y deje hervir. Añada el carrucho y cocine a fuego bajo 15 minutos.",
        "Sirva con arroz blanco o tostones. Use carrucho de temporada legal y de pesca autorizada: es una especie protegida."
      ],
      en: [
        "Rub the conch with the lime, rinse and pound with a mallet to tenderize.",
        "Boil in water 45 minutes to 1 hour until tender (or 20 minutes in a pressure cooker). Cut into pieces.",
        "Sauté the sofrito in the annatto oil 3 minutes. Add the tomatoes and bell pepper and cook 3 minutes.",
        "Add the coconut milk, culantro, salt and chili and bring to a boil. Add the conch and simmer 15 minutes.",
        "Serve with white rice or tostones. Use conch from the legal season and licensed fishing: it's a protected species."
      ]
    }
  },
  {
    id: "colas-langosta-rellenas",
    category: "pescados",
    name: { es: "Colas de Langosta Rellenas al Horno", en: "Baked Stuffed Lobster Tails" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 colas de langosta de 6 onzas",
        "4 cucharadas de mantequilla derretida",
        "3 dientes de ajo machacados",
        "½ taza de pan rallado",
        "2 cucharadas de queso parmesano rallado",
        "2 cucharadas de perejil picado",
        "1 cucharada de jugo de limón",
        "½ cucharadita de pimentón",
        "1 pizca de sal",
        "1 limón en cuartos"
      ],
      en: [
        "4 lobster tails, 6 oz each",
        "4 tablespoons melted butter",
        "3 garlic cloves, crushed",
        "½ cup breadcrumbs",
        "2 tablespoons grated parmesan cheese",
        "2 tablespoons chopped parsley",
        "1 tablespoon lemon juice",
        "½ teaspoon paprika",
        "1 pinch salt",
        "1 lemon, quartered"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F.",
        "Con unas tijeras, corte la concha de cada cola por arriba hasta la aleta, levante la carne y apóyela sobre la concha.",
        "Mezcle la mantequilla con el ajo, el limón y la sal. Unte la mitad sobre la carne.",
        "Mezcle el resto con el pan rallado, el queso, el perejil y el pimentón, y cubra la langosta con ese relleno.",
        "Hornee 12 a 15 minutos, hasta que la carne esté blanca y opaca (140 °F) y el relleno dorado. Sirva con limón, arroz o tostones."
      ],
      en: [
        "Heat the oven to 425 °F.",
        "With kitchen shears, cut the top of each tail's shell down to the fin, lift the meat and rest it on top of the shell.",
        "Mix the butter with the garlic, lemon juice and salt. Brush half over the meat.",
        "Mix the rest with the breadcrumbs, cheese, parsley and paprika, and cover the lobster with that stuffing.",
        "Bake 12 to 15 minutes, until the meat is white and opaque (140 °F) and the stuffing golden. Serve with lemon, rice or tostones."
      ]
    }
  },
  {
    id: "sancocho-pescado",
    category: "sopas",
    name: { es: "Sancocho de Pescado con Viandas", en: "Fish Sancocho with Root Vegetables" },
    active: 60, total: 60,
    servings: 8,
    ingredients: {
      es: [
        "2 libras de pescado firme (mero o dorado) en trozos grandes",
        "1 limón",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "8 tazas de agua",
        "1 libra de yautía en trozos",
        "1 libra de yuca en trozos",
        "2 plátanos verdes en ruedas",
        "1 mazorca de maíz en ruedas",
        "½ libra de calabaza en trozos",
        "1½ cucharaditas de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "2 pounds firm fish (grouper or mahi-mahi), in large chunks",
        "1 lime",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "8 cups water",
        "1 pound yautía (taro), in chunks",
        "1 pound yuca (cassava), in chunks",
        "2 green plantains, sliced",
        "1 ear of corn, in rounds",
        "½ pound calabaza (West Indian pumpkin), in chunks",
        "1½ teaspoons salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Frote el pescado con el limón, enjuáguelo y refrigérelo mientras cocina las viandas.",
        "En una olla grande, sofría el sofrito en el aceite de achiote 3 minutos. Añada el agua, la yautía, la yuca, los plátanos, el maíz, la calabaza y la sal.",
        "Hierva tapado 30 minutos, hasta que las viandas estén blandas y la calabaza se deshaga y espese el caldo.",
        "Añada el pescado y el recao, y cocine a fuego bajo 8 a 10 minutos, sin mover mucho para que no se desbarate.",
        "Sirva caliente con arroz blanco y aguacate. Avise de las espinas si el pescado no es en filetes."
      ],
      en: [
        "Rub the fish with the lime, rinse and refrigerate while the vegetables cook.",
        "In a large pot, sauté the sofrito in the annatto oil 3 minutes. Add the water, yautía, yuca, plantains, corn, calabaza and salt.",
        "Boil covered 30 minutes, until the vegetables are tender and the calabaza falls apart and thickens the broth.",
        "Add the fish and culantro and simmer 8 to 10 minutes, without stirring much so it doesn't break apart.",
        "Serve hot with white rice and avocado. Warn about bones if the fish isn't filleted."
      ]
    }
  },
  // ---------- Tanda 48: jugos y bebidas tropicales (16) ----------
  {
    id: "jugo-lechosa-china",
    category: "jugos",
    name: { es: "Jugo de Lechosa con China", en: "Papaya Orange Juice" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de lechosa (papaya) madura en cubos",
        "2 tazas de jugo de china",
        "1 taza de agua fría",
        "1 cucharada de jugo de limón",
        "1 cucharada de azúcar (opcional)",
        "1 taza de hielo"
      ],
      en: [
        "2 cups ripe papaya (lechosa), cubed",
        "2 cups orange juice",
        "1 cup cold water",
        "1 tablespoon lime juice",
        "1 tablespoon sugar (optional)",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Quite las semillas negras de la lechosa.",
        "Licúe la lechosa con el jugo de china, el agua y el limón hasta que quede liso.",
        "Pruebe: si la lechosa está bien madura no necesita azúcar.",
        "Añada el hielo y licúe unos segundos.",
        "Sirva enseguida. El limón quita el olor fuerte que a algunos no les gusta de la lechosa."
      ],
      en: [
        "Remove the black seeds from the papaya.",
        "Blend the papaya with the orange juice, water and lime juice until smooth.",
        "Taste: very ripe papaya doesn't need sugar.",
        "Add the ice and blend a few seconds.",
        "Serve right away. The lime takes away the strong papaya smell some people dislike."
      ]
    }
  },
  {
    id: "jugo-pitahaya-limon",
    category: "jugos",
    name: { es: "Jugo de Pitahaya y Limón", en: "Dragon Fruit Limeade" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "1 pitahaya roja (fruta del dragón), pelada",
        "4 tazas de agua fría",
        "¼ taza de jugo de limón",
        "3 cucharadas de azúcar",
        "6 hojas de menta",
        "1 taza de hielo"
      ],
      en: [
        "1 red dragon fruit (pitahaya), peeled",
        "4 cups cold water",
        "¼ cup lime juice",
        "3 tablespoons sugar",
        "6 mint leaves",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Corte la pitahaya en pedazos (las semillitas negras se comen).",
        "Licúe la pitahaya con 2 tazas del agua, el limón y el azúcar.",
        "Añada el resto del agua y la menta, y licúe 5 segundos.",
        "Sirva sobre hielo.",
        "Sale de un fucsia intenso. Con pitahaya blanca queda clara y más suave."
      ],
      en: [
        "Cut the dragon fruit into pieces (the tiny black seeds are edible).",
        "Blend the dragon fruit with 2 cups of the water, the lime juice and sugar.",
        "Add the rest of the water and the mint and blend 5 seconds.",
        "Serve over ice.",
        "It comes out bright fuchsia. White dragon fruit makes it pale and milder."
      ]
    }
  },
  {
    id: "jugo-jobos",
    category: "jugos",
    name: { es: "Jugo de Jobos", en: "Hog Plum (Jobo) Juice" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de jobos maduros",
        "6 tazas de agua",
        "½ taza de azúcar",
        "1 pizca de sal",
        "1 taza de hielo"
      ],
      en: [
        "2 pounds ripe jobos (hog plums)",
        "6 cups water",
        "½ cup sugar",
        "1 pinch salt",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Lave los jobos y hiérvalos en 3 tazas del agua 10 minutos para ablandarlos.",
        "Deje enfriar y desbarate la pulpa con las manos o un tenedor, sin romper las semillas.",
        "Cuele apretando, para dejar las semillas y la cáscara.",
        "Añada el resto del agua, el azúcar y la sal, y mezcle hasta disolver.",
        "Sirva bien frío sobre hielo. Es agridulce, como una limonada de fruta del campo."
      ],
      en: [
        "Wash the jobos and boil them in 3 cups of the water 10 minutes to soften.",
        "Let cool and break up the pulp with your hands or a fork, without crushing the seeds.",
        "Strain, pressing, to leave the seeds and skins behind.",
        "Add the rest of the water, the sugar and salt, and stir to dissolve.",
        "Serve very cold over ice. It's sweet-tart, like a country fruit lemonade."
      ]
    }
  },
  {
    id: "jugo-pomarrosa-limon",
    category: "jugos",
    name: { es: "Jugo de Pomarrosa con Limón", en: "Rose Apple Juice with Lime" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 libra de pomarrosas, sin semillas",
        "3 tazas de agua fría",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de azúcar",
        "1 taza de hielo"
      ],
      en: [
        "1 pound rose apples (pomarrosas), seeded",
        "3 cups cold water",
        "2 tablespoons lime juice",
        "2 tablespoons sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Lave las pomarrosas, pártalas y saque la semilla del centro.",
        "Licúe la pulpa con el agua, el limón y el azúcar.",
        "Cuele si lo quiere sin pedacitos.",
        "Sirva sobre hielo.",
        "Tiene el olor a rosas de la fruta; tómelo el mismo día."
      ],
      en: [
        "Wash the rose apples, halve them and remove the seed in the center.",
        "Blend the flesh with the water, lime juice and sugar.",
        "Strain if you want it smooth.",
        "Serve over ice.",
        "It has the fruit's rose scent; drink it the same day."
      ]
    }
  },
  {
    id: "jugo-mango-parcha",
    category: "jugos",
    name: { es: "Jugo de Mangó y Parcha", en: "Mango Passion Fruit Juice" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "2 mangós maduros en pedazos",
        "½ taza de pulpa de parcha",
        "3 tazas de agua fría",
        "2 cucharadas de azúcar",
        "1 taza de hielo"
      ],
      en: [
        "2 ripe mangoes, in pieces",
        "½ cup passion fruit pulp",
        "3 cups cold water",
        "2 tablespoons sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de parcha con 1 taza del agua unos segundos y cuele las semillas.",
        "Vuelva el jugo de parcha a la licuadora con el mangó, el resto del agua y el azúcar.",
        "Licúe hasta que quede liso.",
        "Añada el hielo y licúe otra vez.",
        "Sirva enseguida: lo dulce del mangó con lo ácido de la parcha."
      ],
      en: [
        "Blend the passion fruit pulp with 1 cup of the water a few seconds and strain out the seeds.",
        "Return the passion fruit juice to the blender with the mango, the rest of the water and the sugar.",
        "Blend until smooth.",
        "Add the ice and blend again.",
        "Serve right away: sweet mango with tart passion fruit."
      ]
    }
  },
  {
    id: "jugo-zanahoria-china-jengibre",
    category: "jugos",
    name: { es: "Jugo de Zanahoria, China y Jengibre", en: "Carrot, Orange and Ginger Juice" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 libra de zanahorias peladas en ruedas",
        "2 tazas de jugo de china",
        "1 taza de agua fría",
        "1 pedazo de jengibre fresco de 1 pulgada, pelado",
        "1 cucharada de jugo de limón",
        "1 taza de hielo"
      ],
      en: [
        "1 pound peeled carrots, sliced",
        "2 cups orange juice",
        "1 cup cold water",
        "1 1-inch piece fresh ginger, peeled",
        "1 tablespoon lime juice",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la zanahoria con el agua y el jengibre 1 minuto, hasta que quede bien fina.",
        "Cuele apretando con una cuchara (o use un extractor de jugos y sáltese este paso).",
        "Mezcle con el jugo de china y el limón.",
        "Sirva sobre hielo.",
        "No lleva azúcar: la zanahoria y la china ya son dulces."
      ],
      en: [
        "Blend the carrots with the water and ginger 1 minute, until very fine.",
        "Strain, pressing with a spoon (or use a juicer and skip this step).",
        "Mix with the orange juice and lime juice.",
        "Serve over ice.",
        "No added sugar: carrot and orange are already sweet."
      ]
    }
  },
  {
    id: "limonada-melao-jengibre",
    category: "jugos",
    name: { es: "Limonada de Melao y Jengibre", en: "Cane Syrup Ginger Lemonade" },
    active: 15, total: 15,
    servings: 6,
    ingredients: {
      es: [
        "¾ taza de jugo de limón",
        "⅓ taza de melao de caña",
        "1 pedazo de jengibre fresco de 2 pulgadas, rallado",
        "6 tazas de agua fría",
        "1 pizca de sal",
        "1 taza de hielo",
        "1 limón en ruedas"
      ],
      en: [
        "¾ cup lime juice",
        "⅓ cup cane syrup (melao)",
        "1 2-inch piece fresh ginger, grated",
        "6 cups cold water",
        "1 pinch salt",
        "1 cup ice",
        "1 lime, sliced"
      ]
    },
    steps: {
      es: [
        "Caliente 1 taza del agua con el jengibre rallado 5 minutos sin que hierva fuerte. Cuele.",
        "Disuelva el melao en el agua de jengibre todavía tibia.",
        "Mezcle con el jugo de limón, el resto del agua y la sal.",
        "Refrigere o sirva sobre hielo con ruedas de limón.",
        "El melao le da un color ámbar y un sabor a caña distinto al del azúcar blanca."
      ],
      en: [
        "Heat 1 cup of the water with the grated ginger 5 minutes without a hard boil. Strain.",
        "Dissolve the cane syrup in the warm ginger water.",
        "Mix with the lime juice, the rest of the water and the salt.",
        "Refrigerate or serve over ice with lime slices.",
        "Cane syrup gives an amber color and a cane flavor different from white sugar."
      ]
    }
  },
  {
    id: "agua-coco-pina-menta",
    category: "jugos",
    name: { es: "Agua de Coco con Piña y Menta", en: "Coconut Water with Pineapple and Mint" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "3 tazas de agua de coco",
        "2 tazas de piña en pedazos",
        "8 hojas de menta",
        "1 cucharada de jugo de limón",
        "1 taza de hielo"
      ],
      en: [
        "3 cups coconut water",
        "2 cups pineapple, in pieces",
        "8 mint leaves",
        "1 tablespoon lime juice",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la piña con 1 taza del agua de coco y la menta.",
        "Cuele si lo quiere sin fibra.",
        "Mezcle con el resto del agua de coco y el limón.",
        "Sirva sobre hielo.",
        "No lleva azúcar. Es buena para refrescarse después de la playa o de hacer ejercicio."
      ],
      en: [
        "Blend the pineapple with 1 cup of the coconut water and the mint.",
        "Strain if you want it without fiber.",
        "Mix with the rest of the coconut water and the lime juice.",
        "Serve over ice.",
        "No added sugar. Good for cooling off after the beach or exercise."
      ]
    }
  },
  {
    id: "refresco-parcha-agua-coco",
    category: "jugos",
    name: { es: "Refresco de Parcha con Agua de Coco", en: "Passion Fruit Coconut Water Cooler" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "½ taza de pulpa de parcha",
        "3 tazas de agua de coco",
        "1 taza de agua fría",
        "2 cucharadas de azúcar",
        "1 taza de hielo"
      ],
      en: [
        "½ cup passion fruit pulp",
        "3 cups coconut water",
        "1 cup cold water",
        "2 tablespoons sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de parcha con el agua unos segundos (sin triturar las semillas) y cuele.",
        "Mezcle con el agua de coco y el azúcar hasta disolverla.",
        "Pruebe y ajuste el azúcar.",
        "Sirva sobre hielo.",
        "Si le quedan semillas enteras, puede dejar unas pocas en el vaso por el color."
      ],
      en: [
        "Blend the passion fruit pulp with the water a few seconds (without crushing the seeds) and strain.",
        "Mix with the coconut water and sugar until dissolved.",
        "Taste and adjust the sugar.",
        "Serve over ice.",
        "If you have whole seeds left, you can add a few to the glass for color."
      ]
    }
  },
  {
    id: "agua-cascara-pina",
    category: "jugos",
    name: { es: "Agua de Cáscara de Piña con Canela y Jengibre", en: "Pineapple Peel Water with Cinnamon and Ginger" },
    active: 40, total: 280, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "Las cáscaras y el corazón de 1 piña, bien lavados",
        "8 tazas de agua",
        "2 rajas de canela",
        "1 pedazo de jengibre de 1 pulgada",
        "4 clavos de especia",
        "⅓ taza de azúcar morena",
        "1 taza de hielo"
      ],
      en: [
        "The peels and core of 1 pineapple, well washed",
        "8 cups water",
        "2 cinnamon sticks",
        "1 1-inch piece ginger",
        "4 whole cloves",
        "⅓ cup brown sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Restriegue bien la piña por fuera con un cepillo antes de pelarla.",
        "Hierva las cáscaras y el corazón con el agua, la canela, el jengibre y los clavos 25 minutos.",
        "Apague, añada el azúcar morena y deje reposar tapado hasta que enfríe.",
        "Cuele y refrigere.",
        "Sirva sobre hielo. Aprovecha lo que se bota de la piña; guárdelo en la nevera y tómelo en 2 días (no lo deje fuera, porque se fermenta)."
      ],
      en: [
        "Scrub the outside of the pineapple well with a brush before peeling.",
        "Boil the peels and core with the water, cinnamon, ginger and cloves 25 minutes.",
        "Turn off the heat, add the brown sugar and let it rest covered until cool.",
        "Strain and refrigerate.",
        "Serve over ice. It uses what's usually thrown away; keep it refrigerated and drink within 2 days (don't leave it out, it ferments)."
      ]
    }
  },
  {
    id: "batida-acerola-guineo",
    category: "bebidas",
    name: { es: "Batida de Acerola y Guineo", en: "Acerola Cherry Banana Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 taza de acerolas (cerezas del país), sin semillas",
        "1 guineo maduro",
        "1 taza de leche fría",
        "1 cucharada de miel (opcional)",
        "1 taza de hielo"
      ],
      en: [
        "1 cup acerola cherries, pitted",
        "1 ripe banana",
        "1 cup cold milk",
        "1 tablespoon honey (optional)",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Parta las acerolas y saque las semillitas (son duras).",
        "Licúe las acerolas con el guineo, la leche y la miel.",
        "Añada el hielo y licúe hasta que quede espumosa.",
        "Sirva enseguida: la vitamina C de la acerola se pierde si espera mucho.",
        "Para niños menores de 1 año, no use miel."
      ],
      en: [
        "Halve the acerolas and remove the little seeds (they're hard).",
        "Blend the acerolas with the banana, milk and honey.",
        "Add the ice and blend until frothy.",
        "Serve right away: acerola's vitamin C fades if it sits.",
        "For babies under 1 year, skip the honey."
      ]
    }
  },
  {
    id: "batida-verde-tropical",
    category: "bebidas",
    name: { es: "Batida Verde Tropical (Espinaca, Piña y Mangó)", en: "Tropical Green Smoothie (Spinach, Pineapple and Mango)" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 taza de espinaca fresca",
        "1 taza de piña en pedazos",
        "1 taza de mangó en pedazos, congelado",
        "1 guineo maduro",
        "1 taza de agua de coco",
        "1 cucharada de jugo de limón",
        "½ cucharadita de jengibre rallado"
      ],
      en: [
        "1 cup fresh spinach",
        "1 cup pineapple, in pieces",
        "1 cup frozen mango pieces",
        "1 ripe banana",
        "1 cup coconut water",
        "1 tablespoon lime juice",
        "½ teaspoon grated ginger"
      ]
    },
    steps: {
      es: [
        "Licúe la espinaca con el agua de coco primero, hasta que no queden pedacitos.",
        "Añada la piña, el mangó, el guineo, el limón y el jengibre.",
        "Licúe hasta que quede cremosa (el mangó congelado la enfría sin hielo).",
        "Sirva enseguida.",
        "Es vegana y sin azúcar añadida; la fruta la endulza y no se siente la espinaca."
      ],
      en: [
        "Blend the spinach with the coconut water first, until no bits remain.",
        "Add the pineapple, mango, banana, lime juice and ginger.",
        "Blend until creamy (the frozen mango chills it without ice).",
        "Serve right away.",
        "It's vegan with no added sugar; the fruit sweetens it and you can't taste the spinach."
      ]
    }
  },
  {
    id: "batida-guineo-avena-mani",
    category: "bebidas",
    name: { es: "Batida de Guineo, Avena y Maní", en: "Banana, Oat and Peanut Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "2 guineos maduros congelados en ruedas",
        "¼ taza de avena en hojuelas",
        "2 cucharadas de mantequilla de maní",
        "1½ tazas de leche fría",
        "½ cucharadita de canela",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 ripe bananas, sliced and frozen",
        "¼ cup rolled oats",
        "2 tablespoons peanut butter",
        "1½ cups cold milk",
        "½ teaspoon cinnamon",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Licúe la avena con la leche 30 segundos para que se ablande.",
        "Añada el guineo congelado, la mantequilla de maní, la canela y la vainilla.",
        "Licúe hasta que quede espesa y cremosa.",
        "Sirva enseguida.",
        "Es un desayuno rápido con proteína y fibra. Con leche de avena o de soya queda vegana."
      ],
      en: [
        "Blend the oats with the milk 30 seconds to soften them.",
        "Add the frozen banana, peanut butter, cinnamon and vanilla.",
        "Blend until thick and creamy.",
        "Serve right away.",
        "It's a quick breakfast with protein and fiber. With oat or soy milk it's vegan."
      ]
    }
  },
  {
    id: "batida-tamarindo",
    category: "bebidas",
    name: { es: "Batida de Tamarindo", en: "Tamarind Shake" },
    active: 40, total: 70, wait: "remojo",
    servings: 4,
    ingredients: {
      es: [
        "¼ libra de tamarindos en vaina",
        "2 tazas de agua caliente",
        "1 taza de leche evaporada",
        "¼ taza de leche condensada",
        "1 pizca de canela",
        "2 tazas de hielo"
      ],
      en: [
        "¼ pound tamarind pods",
        "2 cups hot water",
        "1 cup evaporated milk",
        "¼ cup condensed milk",
        "1 pinch cinnamon",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Pele los tamarindos y remójelos en el agua caliente 30 minutos.",
        "Desbarate la pulpa con las manos y cuele, apretando, para dejar las semillas.",
        "Licúe el agua de tamarindo con la leche evaporada, la leche condensada y la canela.",
        "Añada el hielo y licúe hasta que quede espumosa.",
        "Sirva enseguida. Es agridulce y cremosa, como la de los kioscos."
      ],
      en: [
        "Peel the tamarinds and soak them in the hot water 30 minutes.",
        "Break up the pulp with your hands and strain, pressing, to leave the seeds behind.",
        "Blend the tamarind water with the evaporated milk, condensed milk and cinnamon.",
        "Add the ice and blend until frothy.",
        "Serve right away. Sweet-tart and creamy, like the kiosk version."
      ]
    }
  },
  {
    id: "batida-mango-coco",
    category: "bebidas",
    name: { es: "Batida de Mangó y Coco (Sin Leche)", en: "Dairy-Free Mango Coconut Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de mangó en pedazos, congelado",
        "1 taza de leche de coco de cartón",
        "½ taza de agua de coco",
        "1 cucharada de jugo de limón",
        "1 cucharada de coco rallado tostado"
      ],
      en: [
        "2 cups frozen mango pieces",
        "1 cup carton coconut milk",
        "½ cup coconut water",
        "1 tablespoon lime juice",
        "1 tablespoon toasted shredded coconut"
      ]
    },
    steps: {
      es: [
        "Licúe el mangó congelado con la leche de coco, el agua de coco y el limón.",
        "Si no se mueve, añada un chorrito más de agua de coco.",
        "Licúe hasta que quede cremosa.",
        "Sirva con el coco tostado por encima.",
        "Es vegana, sin leche de vaca ni azúcar añadida."
      ],
      en: [
        "Blend the frozen mango with the coconut milk, coconut water and lime juice.",
        "If it won't move, add a splash more coconut water.",
        "Blend until creamy.",
        "Serve topped with the toasted coconut.",
        "It's vegan, with no cow's milk or added sugar."
      ]
    }
  },
  {
    id: "horchata-arroz-coco",
    category: "bebidas",
    name: { es: "Horchata de Arroz y Coco", en: "Rice and Coconut Horchata" },
    active: 15, total: 255, wait: "remojo",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de arroz blanco crudo",
        "4 tazas de agua",
        "1 lata de 13.5 onzas de leche de coco",
        "½ taza de azúcar",
        "2 rajas de canela",
        "1 cucharadita de vainilla",
        "1 taza de hielo"
      ],
      en: [
        "1 cup uncooked white rice",
        "4 cups water",
        "1 can (13.5 oz) coconut milk",
        "½ cup sugar",
        "2 cinnamon sticks",
        "1 teaspoon vanilla",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Remoje el arroz y la canela en el agua 4 horas (o toda la noche en la nevera).",
        "Licúe el arroz con su agua y la canela 2 minutos, hasta que quede bien fino.",
        "Cuele por una tela o un colador fino, apretando.",
        "Mezcle con la leche de coco, el azúcar y la vainilla hasta disolver.",
        "Sirva bien fría sobre hielo, con canela en polvo. Mueva antes de servir: el arroz se asienta."
      ],
      en: [
        "Soak the rice and cinnamon in the water 4 hours (or overnight in the fridge).",
        "Blend the rice with its water and the cinnamon 2 minutes, until very fine.",
        "Strain through cloth or a fine strainer, pressing.",
        "Mix with the coconut milk, sugar and vanilla until dissolved.",
        "Serve very cold over ice, with ground cinnamon. Stir before serving: the rice settles."
      ]
    }
  },
  // ---------- Tanda 49: sopas y asopaos (6), pastas (5) y panes dulces (5) ----------
  {
    id: "asopao-res",
    category: "sopas",
    name: { es: "Asopao de Res", en: "Beef Asopao" },
    active: 105, total: 105,
    servings: 8,
    ingredients: {
      es: [
        "1½ libras de carne de res para guisar en cubos pequeños",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "10 tazas de agua",
        "1½ tazas de arroz grano mediano",
        "1 libra de papas en cubos",
        "1 taza de guisantes (petit pois)",
        "1 cucharadita de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "1½ pounds stewing beef, in small cubes",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "10 cups water",
        "1½ cups medium-grain rice",
        "1 pound potatoes, cubed",
        "1 cup green peas",
        "1 teaspoon salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Adobe la carne y dórela en el aceite de achiote en una olla grande 5 minutos.",
        "Añada el sofrito, la salsa de tomate, las aceitunas y las alcaparras, y cocine 3 minutos.",
        "Añada el agua, tape y cocine a fuego bajo 1 hora, hasta que la carne esté blanda.",
        "Añada el arroz, las papas y la sal, y cocine destapado 20 minutos, moviendo de vez en cuando, hasta que el arroz esté blando y el caldo espese.",
        "Añada los guisantes y el recao, cocine 3 minutos y sirva enseguida con tostones (el arroz sigue chupando caldo: si espesa mucho, añada agua caliente)."
      ],
      en: [
        "Season the beef with adobo and brown it in the annatto oil in a large pot 5 minutes.",
        "Add the sofrito, tomato sauce, olives and capers and cook 3 minutes.",
        "Add the water, cover and simmer 1 hour, until the beef is tender.",
        "Add the rice, potatoes and salt and cook uncovered 20 minutes, stirring now and then, until the rice is soft and the broth thickens.",
        "Add the peas and culantro, cook 3 minutes and serve right away with tostones (the rice keeps soaking up broth: if it gets too thick, add hot water)."
      ]
    }
  },
  {
    id: "asopao-chuletas-ahumadas",
    category: "sopas",
    name: { es: "Asopao de Chuletas Ahumadas", en: "Smoked Pork Chop Asopao" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de chuletas ahumadas, sin hueso y en cubos",
        "1 cucharada de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "8 tazas de agua",
        "1½ tazas de arroz grano mediano",
        "1 lata de 15 onzas de gandules verdes, escurridos",
        "¼ taza de aceitunas rellenas",
        "4 hojas de recao picadas"
      ],
      en: [
        "1 pound boneless smoked pork chops, cubed",
        "1 tablespoon annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "8 cups water",
        "1½ cups medium-grain rice",
        "1 can (15 oz) green pigeon peas, drained",
        "¼ cup stuffed olives",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Dore las chuletas en el aceite de achiote 4 minutos.",
        "Añada el sofrito y la salsa de tomate, y cocine 3 minutos.",
        "Añada el agua y deje hervir. Añada el arroz, los gandules y las aceitunas.",
        "Cocine destapado a fuego medio-bajo 20 a 25 minutos, moviendo a veces, hasta que el arroz esté blando y el caldo espese.",
        "Añada el recao y sirva caliente. No le ponga sal sin probar: la chuleta ahumada ya es salada."
      ],
      en: [
        "Brown the pork chops in the annatto oil 4 minutes.",
        "Add the sofrito and tomato sauce and cook 3 minutes.",
        "Add the water and bring to a boil. Add the rice, pigeon peas and olives.",
        "Cook uncovered over medium-low heat 20 to 25 minutes, stirring at times, until the rice is soft and the broth thickens.",
        "Add the culantro and serve hot. Don't add salt without tasting: smoked pork chops are already salty."
      ]
    }
  },
  {
    id: "asopao-habichuelas-calabaza",
    category: "sopas",
    name: { es: "Asopao de Habichuelas Rosadas con Calabaza", en: "Pink Bean and Calabaza Asopao" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 lata de 15 onzas de habichuelas rosadas, con su líquido",
        "1 libra de calabaza en cubos",
        "4 tazas de caldo de vegetales y 4 tazas de agua",
        "1 taza de arroz grano mediano",
        "Sal al gusto (pruebe primero)",
        "½ cucharadita de comino",
        "¼ taza de cilantro picado"
      ],
      en: [
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 can (15 oz) pink beans, with their liquid",
        "1 pound calabaza (West Indian pumpkin), cubed",
        "4 cups vegetable broth and 4 cups water",
        "1 cup medium-grain rice",
        "Salt to taste (taste first)",
        "½ teaspoon cumin",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite 3 minutos. Añada la salsa de tomate y el comino.",
        "Añada las habichuelas, la calabaza, el caldo y el agua, y deje hervir 10 minutos.",
        "Añada el arroz y cocine destapado 20 minutos, moviendo a veces.",
        "Aplaste algunos pedazos de calabaza contra la olla para espesar el caldo.",
        "Pruebe y añada sal si hace falta (las habichuelas de lata y el caldo ya traen). Termine con el cilantro y sirva con aguacate. Es vegetariano y vegano, y llena como un asopao de pollo."
      ],
      en: [
        "Sauté the sofrito in the oil 3 minutes. Add the tomato sauce and cumin.",
        "Add the beans, calabaza, broth and water and boil 10 minutes.",
        "Add the rice and cook uncovered 20 minutes, stirring at times.",
        "Mash some calabaza pieces against the pot to thicken the broth.",
        "Taste and add salt if needed (canned beans and broth already have some). Finish with the cilantro and serve with avocado. It's vegetarian and vegan, and as filling as a chicken asopao."
      ]
    }
  },
  {
    id: "sopa-pavo-arroz",
    category: "sopas",
    name: { es: "Sopa de Pavo con Arroz y Vegetales", en: "Turkey Rice and Vegetable Soup" },
    active: 60, total: 60,
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de pavo asado desmenuzado (lo que sobró)",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "2 zanahorias en ruedas",
        "2 tallos de apio picados",
        "6 tazas de caldo de pollo y 4 tazas de agua",
        "½ taza de arroz grano largo",
        "1 libra de papas en cubos",
        "1 taza de calabaza en cubos",
        "1 cucharadita de orégano",
        "½ cucharadita de sal",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "3 cups shredded roast turkey (leftovers)",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "2 carrots, sliced",
        "2 celery stalks, chopped",
        "6 cups chicken broth and 4 cups water",
        "½ cup long-grain rice",
        "1 pound potatoes, cubed",
        "1 cup calabaza (West Indian pumpkin), cubed",
        "1 teaspoon oregano",
        "½ teaspoon salt",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito, la zanahoria y el apio en el aceite 5 minutos.",
        "Añada el caldo, el agua, el orégano y la sal, y deje hervir.",
        "Añada el arroz, las papas y la calabaza, y cocine tapado 20 minutos.",
        "Añada el pavo y cocine 10 minutos más.",
        "Termine con el cilantro. Es la sopa de los días después de Acción de Gracias; use el pavo en 3 o 4 días de guardado en la nevera."
      ],
      en: [
        "Sauté the sofrito, carrots and celery in the oil 5 minutes.",
        "Add the broth, water, oregano and salt and bring to a boil.",
        "Add the rice, potatoes and calabaza and cook covered 20 minutes.",
        "Add the turkey and cook 10 more minutes.",
        "Finish with the cilantro. It's the soup for the days after Thanksgiving; use the turkey within 3 or 4 days in the fridge."
      ]
    }
  },
  {
    id: "crema-batata-jengibre",
    category: "sopas",
    name: { es: "Crema de Batata y Jengibre", en: "Sweet Potato Ginger Soup" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de batata blanca pelada en cubos",
        "1 cebolla picada",
        "2 dientes de ajo",
        "1 cucharada de jengibre fresco rallado",
        "2 cucharadas de aceite de oliva",
        "3 tazas de caldo de vegetales y 2 tazas de agua",
        "½ taza de leche evaporada",
        "½ cucharadita de sal",
        "¼ cucharadita de nuez moscada",
        "2 cucharadas de cebollín picado"
      ],
      en: [
        "2 pounds white sweet potato (batata), peeled and cubed",
        "1 onion, chopped",
        "2 garlic cloves",
        "1 tablespoon grated fresh ginger",
        "2 tablespoons olive oil",
        "3 cups vegetable broth and 2 cups water",
        "½ cup evaporated milk",
        "½ teaspoon salt",
        "¼ teaspoon nutmeg",
        "2 tablespoons chopped scallions"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el ajo y el jengibre en el aceite 5 minutos.",
        "Añada la batata, el caldo y el agua, y hierva tapado 20 minutos hasta que esté blanda.",
        "Licúe con cuidado hasta que quede cremosa.",
        "Vuelva a la olla, añada la leche evaporada, la sal y la nuez moscada, y caliente sin que hierva.",
        "Sirva con cebollín por encima. Con leche de coco en vez de evaporada queda vegana."
      ],
      en: [
        "Sauté the onion, garlic and ginger in the oil 5 minutes.",
        "Add the sweet potato, broth and water and boil covered 20 minutes until soft.",
        "Blend carefully until creamy.",
        "Return to the pot, add the evaporated milk, salt and nutmeg and heat without boiling.",
        "Serve topped with scallions. With coconut milk instead of evaporated it's vegan."
      ]
    }
  },
  {
    id: "sopa-camarones-coco",
    category: "sopas",
    name: { es: "Sopa de Camarones con Coco y Recao", en: "Coconut Shrimp Soup with Culantro" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de camarones medianos, pelados",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 13.5 onzas de leche de coco",
        "4 tazas de caldo de pescado o de vegetales",
        "1 libra de yautía en cubos",
        "1 mazorca de maíz en ruedas",
        "1 pimiento rojo picado",
        "½ cucharadita de sal",
        "6 hojas de recao picadas",
        "2 cucharadas de jugo de limón"
      ],
      en: [
        "1 pound medium shrimp, peeled",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (13.5 oz) coconut milk",
        "4 cups fish or vegetable broth",
        "1 pound yautía (taro), cubed",
        "1 ear of corn, in rounds",
        "1 red bell pepper, chopped",
        "½ teaspoon salt",
        "6 culantro (recao) leaves, chopped",
        "2 tablespoons lime juice"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito y el pimiento en el aceite de achiote 3 minutos.",
        "Añada el caldo, la yautía, el maíz y la sal, y hierva tapado 15 minutos hasta que la yautía esté blanda.",
        "Añada la leche de coco y deje que vuelva a hervir suave.",
        "Añada los camarones y el recao, y cocine 3 minutos, sólo hasta que estén rosados.",
        "Fuera del fuego, añada el limón y sirva con arroz blanco aparte."
      ],
      en: [
        "Sauté the sofrito and bell pepper in the annatto oil 3 minutes.",
        "Add the broth, yautía, corn and salt and boil covered 15 minutes until the yautía is tender.",
        "Add the coconut milk and let it return to a gentle boil.",
        "Add the shrimp and culantro and cook 3 minutes, just until pink.",
        "Off the heat, add the lime juice and serve with white rice on the side."
      ]
    }
  },
  {
    id: "espaguetis-pernil-criolla",
    category: "pastas",
    name: { es: "Espaguetis con Pernil a la Criolla", en: "Spaghetti with Pernil Criollo Sauce" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de espaguetis",
        "2 tazas de pernil asado desmenuzado (lo que sobró)",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 15 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharadita de orégano",
        "½ cucharadita de sal",
        "½ taza de queso parmesano rallado"
      ],
      en: [
        "1 pound spaghetti",
        "2 cups shredded roast pernil (leftovers)",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 can (15 oz) tomato sauce",
        "¼ cup stuffed olives",
        "1 teaspoon oregano",
        "½ teaspoon salt",
        "½ cup grated parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis en agua con sal según el paquete. Guarde ½ taza del agua y escurra.",
        "Sofría el sofrito en el aceite 3 minutos. Añada el pernil y dórelo un poco.",
        "Añada la salsa de tomate, las aceitunas, el orégano y la sal, y cocine 10 minutos.",
        "Mezcle los espaguetis con la salsa, añadiendo agua de la pasta si hace falta.",
        "Sirva con el queso. Es la mejor forma de aprovechar el pernil de la Navidad."
      ],
      en: [
        "Boil the spaghetti in salted water per the package. Save ½ cup of the water and drain.",
        "Sauté the sofrito in the oil 3 minutes. Add the pernil and brown it a little.",
        "Add the tomato sauce, olives, oregano and salt and cook 10 minutes.",
        "Toss the spaghetti with the sauce, adding pasta water if needed.",
        "Serve with the cheese. It's the best way to use up Christmas pernil."
      ]
    }
  },
  {
    id: "fettuccine-camarones-recao",
    category: "pastas",
    name: { es: "Fettuccine con Camarones en Salsa de Ajo y Recao", en: "Shrimp Fettuccine in Garlic Culantro Sauce" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "¾ libra de pasta tipo fettuccine",
        "1 libra de camarones medianos, pelados",
        "1 cucharadita de adobo",
        "2 cucharadas de mantequilla",
        "1 cucharada de aceite de oliva",
        "5 dientes de ajo picados",
        "1 taza de crema espesa (heavy cream)",
        "½ taza de queso parmesano rallado",
        "6 hojas de recao picadas fino",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "¾ pound fettuccine pasta",
        "1 pound medium shrimp, peeled",
        "1 teaspoon adobo",
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "5 garlic cloves, minced",
        "1 cup heavy cream",
        "½ cup grated parmesan cheese",
        "6 culantro (recao) leaves, finely chopped",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Hierva el fettuccine en agua con sal según el paquete. Guarde ½ taza del agua y escurra.",
        "Adobe los camarones y saltéelos en el aceite 1 a 2 minutos por lado. Sáquelos.",
        "Derrita la mantequilla y sofría el ajo 1 minuto sin dorar. Añada la crema y deje hervir suave 3 minutos.",
        "Añada el queso, el recao y el limón, y mezcle hasta que la salsa espese.",
        "Mezcle con la pasta y los camarones, aflojando con agua de la pasta. Sirva enseguida."
      ],
      en: [
        "Boil the fettuccine in salted water per the package. Save ½ cup of the water and drain.",
        "Season the shrimp with adobo and sauté in the oil 1 to 2 minutes per side. Remove.",
        "Melt the butter and sauté the garlic 1 minute without browning. Add the cream and simmer 3 minutes.",
        "Add the cheese, culantro and lime juice and stir until the sauce thickens.",
        "Toss with the pasta and shrimp, loosening with pasta water. Serve right away."
      ]
    }
  },
  {
    id: "pasta-pesto-recao",
    category: "pastas",
    name: { es: "Pasta con Pesto de Recao y Queso del País", en: "Pasta with Culantro Pesto and Puerto Rican Cheese" },
    active: 25, total: 25,
    servings: 6,
    ingredients: {
      es: [
        "¾ libra de pasta corta (penne o coditos)",
        "12 hojas de recao",
        "1 taza de cilantro",
        "2 dientes de ajo",
        "⅓ taza de nueces o almendras",
        "⅓ taza de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "½ cucharadita de sal",
        "1 taza de queso blanco del país desmoronado",
        "1 taza de tomates cereza en mitades"
      ],
      en: [
        "¾ pound short pasta (penne or elbows)",
        "12 culantro (recao) leaves",
        "1 cup cilantro",
        "2 garlic cloves",
        "⅓ cup walnuts or almonds",
        "⅓ cup olive oil",
        "2 tablespoons lime juice",
        "½ teaspoon salt",
        "1 cup crumbled Puerto Rican white cheese (queso del país)",
        "1 cup cherry tomatoes, halved"
      ]
    },
    steps: {
      es: [
        "Hierva la pasta en agua con sal según el paquete. Guarde ½ taza del agua y escurra.",
        "Licúe el recao, el cilantro, el ajo, las nueces, el aceite, el limón y la sal hasta tener un pesto.",
        "Mezcle la pasta caliente con el pesto, aflojando con agua de la pasta.",
        "Añada los tomates y el queso del país por encima.",
        "Sirva tibia o fría como ensalada. El recao le da el sabor del sofrito al pesto."
      ],
      en: [
        "Boil the pasta in salted water per the package. Save ½ cup of the water and drain.",
        "Blend the culantro, cilantro, garlic, nuts, oil, lime juice and salt into a pesto.",
        "Toss the hot pasta with the pesto, loosening with pasta water.",
        "Top with the tomatoes and the white cheese.",
        "Serve warm or cold as a salad. The culantro gives the pesto a sofrito flavor."
      ]
    }
  },
  {
    id: "espaguetis-horno-queso",
    category: "pastas",
    name: { es: "Espaguetis al Horno con Queso", en: "Baked Spaghetti with Cheese" },
    active: 60, total: 60,
    servings: 10,
    ingredients: {
      es: [
        "1 libra de espaguetis",
        "1 libra de carne molida de res",
        "½ taza de sofrito",
        "1 lata de 28 onzas de salsa de tomate",
        "1 cucharadita de orégano",
        "½ cucharadita de sal",
        "2 huevos",
        "½ taza de leche",
        "2 tazas de queso mozzarella rallado",
        "1 taza de queso cheddar rallado",
        "¼ taza de queso parmesano rallado"
      ],
      en: [
        "1 pound spaghetti",
        "1 pound ground beef",
        "½ cup sofrito",
        "1 can (28 oz) tomato sauce",
        "1 teaspoon oregano",
        "½ teaspoon salt",
        "2 eggs",
        "½ cup milk",
        "2 cups shredded mozzarella cheese",
        "1 cup shredded cheddar cheese",
        "¼ cup grated parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis 2 minutos menos de lo que dice el paquete y escurra. Caliente el horno a 350 °F.",
        "Dore la carne con el sofrito 8 minutos. Añada la salsa de tomate, el orégano y la sal, y cocine 10 minutos.",
        "Bata los huevos con la leche y mézclelos con los espaguetis (así el pastelón corta firme).",
        "En un molde de 9 × 13, ponga la mitad de los espaguetis, la mitad de la salsa y la mitad del mozzarella; repita y cubra con el cheddar y el parmesano.",
        "Hornee 30 minutos hasta que el queso dore y burbujee. Deje reposar 10 minutos antes de cortar. Es el plato de los cumpleaños y los compartires."
      ],
      en: [
        "Boil the spaghetti 2 minutes less than the package says and drain. Heat the oven to 350 °F.",
        "Brown the beef with the sofrito 8 minutes. Add the tomato sauce, oregano and salt and cook 10 minutes.",
        "Beat the eggs with the milk and mix into the spaghetti (so it slices firm).",
        "In a 9 × 13 dish, layer half the spaghetti, half the sauce and half the mozzarella; repeat and top with the cheddar and parmesan.",
        "Bake 30 minutes until the cheese browns and bubbles. Let rest 10 minutes before cutting. It's the birthday and potluck dish."
      ]
    }
  },
  {
    id: "pasta-pollo-coco-achiote",
    category: "pastas",
    name: { es: "Pasta con Pollo en Salsa de Coco y Achiote", en: "Pasta with Chicken in Coconut Annatto Sauce" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de pasta corta (penne o rigatoni)",
        "1½ libras de pechugas de pollo en tiras",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 13.5 onzas de leche de coco",
        "½ taza de caldo de pollo",
        "1 pimiento rojo en tiras",
        "1 taza de espinaca fresca",
        "½ cucharadita de sal",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "1 pound short pasta (penne or rigatoni)",
        "1½ pounds chicken breasts, in strips",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (13.5 oz) coconut milk",
        "½ cup chicken broth",
        "1 red bell pepper, in strips",
        "1 cup fresh spinach",
        "½ teaspoon salt",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Hierva la pasta en agua con sal según el paquete y escurra.",
        "Adobe el pollo y dórelo en el aceite de achiote 5 minutos, hasta que esté cocido (165 °F). Sáquelo.",
        "Sofría el sofrito y el pimiento 3 minutos. Añada la leche de coco, el caldo y la sal, y hierva suave 5 minutos.",
        "Añada la espinaca y el pollo, y cocine 2 minutos hasta que la espinaca se marchite.",
        "Mezcle con la pasta y termine con el cilantro. La salsa sale anaranjada y suave, sin crema de leche."
      ],
      en: [
        "Boil the pasta in salted water per the package and drain.",
        "Season the chicken with adobo and brown in the annatto oil 5 minutes, until cooked (165 °F). Remove.",
        "Sauté the sofrito and bell pepper 3 minutes. Add the coconut milk, broth and salt and simmer 5 minutes.",
        "Add the spinach and chicken and cook 2 minutes until the spinach wilts.",
        "Toss with the pasta and finish with cilantro. The sauce turns orange and silky, without dairy cream."
      ]
    }
  },
  {
    id: "trenza-guayaba-queso",
    category: "panes",
    name: { es: "Trenza de Pan Dulce con Guayaba y Queso", en: "Guava and Cheese Sweet Bread Braid" },
    active: 180, total: 180,
    servings: 12,
    ingredients: {
      es: [
        "3½ tazas de harina de trigo",
        "1 sobre de 0.25 onzas de levadura seca",
        "⅓ taza de azúcar",
        "1 taza de leche tibia",
        "1 huevo",
        "4 cucharadas de mantequilla derretida",
        "½ cucharadita de sal",
        "8 onzas de pasta de guayaba en lascas finas",
        "8 onzas de queso crema",
        "1 huevo batido para barnizar",
        "2 cucharadas de azúcar para espolvorear"
      ],
      en: [
        "3½ cups all-purpose flour",
        "1 envelope (0.25 oz) active dry yeast",
        "⅓ cup sugar",
        "1 cup warm milk",
        "1 egg",
        "4 tablespoons melted butter",
        "½ teaspoon salt",
        "8 ounces guava paste, thinly sliced",
        "8 ounces cream cheese",
        "1 beaten egg for brushing",
        "2 tablespoons sugar for sprinkling"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada del azúcar y deje espumar 10 minutos. Mezcle con la harina, el resto del azúcar, el huevo, la mantequilla y la sal, y amase 8 minutos hasta tener una masa suave.",
        "Tape y deje levar 1 hora en un lugar tibio, hasta que doble su tamaño.",
        "Estire la masa en un rectángulo de 10 × 14 pulgadas sobre papel de hornear. Unte el queso crema en una franja por el centro y ponga la guayaba encima.",
        "Corte tiras diagonales de 1 pulgada a los dos lados y crúcelas sobre el relleno como una trenza. Deje levar 30 minutos.",
        "Barnice con el huevo, espolvoree el azúcar y hornee a 350 °F 25 a 30 minutos, hasta que dore. Deje enfriar 15 minutos antes de cortar."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon of the sugar and let foam 10 minutes. Mix with the flour, the rest of the sugar, the egg, butter and salt, and knead 8 minutes into a soft dough.",
        "Cover and let rise 1 hour in a warm place, until doubled.",
        "Roll the dough into a 10 × 14-inch rectangle on parchment. Spread the cream cheese in a strip down the center and lay the guava on top.",
        "Cut 1-inch diagonal strips on both sides and cross them over the filling like a braid. Let rise 30 minutes.",
        "Brush with the egg, sprinkle with sugar and bake at 350 °F 25 to 30 minutes, until golden. Cool 15 minutes before slicing."
      ]
    }
  },
  {
    id: "pan-anis",
    category: "panes",
    name: { es: "Pan de Anís (Bollos Dulces)", en: "Anise Sweet Rolls" },
    active: 165, total: 165,
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de harina de trigo",
        "1 sobre de 0.25 onzas de levadura seca",
        "½ taza de azúcar",
        "1 taza de leche tibia",
        "2 huevos",
        "6 cucharadas de mantequilla derretida",
        "1 cucharada de semillas de anís",
        "1 cucharadita de ralladura de china",
        "½ cucharadita de sal",
        "1 huevo batido para barnizar"
      ],
      en: [
        "4 cups all-purpose flour",
        "1 envelope (0.25 oz) active dry yeast",
        "½ cup sugar",
        "1 cup warm milk",
        "2 eggs",
        "6 tablespoons melted butter",
        "1 tablespoon anise seeds",
        "1 teaspoon orange zest",
        "½ teaspoon salt",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Tueste las semillas de anís en un sartén seco 1 minuto, hasta que huelan.",
        "Disuelva la levadura en la leche tibia con 1 cucharada del azúcar y deje espumar 10 minutos. Mezcle con la harina, el resto del azúcar, los huevos, la mantequilla, el anís, la ralladura y la sal, y amase 10 minutos.",
        "Tape y deje levar 1 hora, hasta que doble.",
        "Divida en 12 bolas, póngalas en una bandeja engrasada y deje levar 45 minutos más.",
        "Barnice con el huevo y hornee a 350 °F 18 a 20 minutos, hasta que doren. Van con café con leche."
      ],
      en: [
        "Toast the anise seeds in a dry skillet 1 minute, until fragrant.",
        "Dissolve the yeast in the warm milk with 1 tablespoon of the sugar and let foam 10 minutes. Mix with the flour, the rest of the sugar, the eggs, butter, anise, zest and salt, and knead 10 minutes.",
        "Cover and let rise 1 hour, until doubled.",
        "Divide into 12 balls, place on a greased sheet and let rise 45 more minutes.",
        "Brush with the egg and bake at 350 °F 18 to 20 minutes, until golden. Serve with café con leche."
      ]
    }
  },
  {
    id: "pan-dulce-ron-pasas",
    category: "panes",
    name: { es: "Pan Dulce de Ron con Pasas", en: "Rum Raisin Sweet Bread" },
    active: 180, total: 180,
    servings: 12,
    ingredients: {
      es: [
        "¾ taza de pasas",
        "¼ taza de ron oscuro",
        "3½ tazas de harina de trigo",
        "1 sobre de 0.25 onzas de levadura seca",
        "⅓ taza de azúcar morena",
        "1 taza de leche tibia",
        "1 huevo",
        "4 cucharadas de mantequilla derretida",
        "1 cucharadita de canela",
        "½ cucharadita de sal",
        "1 taza de azúcar en polvo",
        "2 cucharadas de leche para el glaseado"
      ],
      en: [
        "¾ cup raisins",
        "¼ cup dark rum",
        "3½ cups all-purpose flour",
        "1 envelope (0.25 oz) active dry yeast",
        "⅓ cup brown sugar",
        "1 cup warm milk",
        "1 egg",
        "4 tablespoons melted butter",
        "1 teaspoon cinnamon",
        "½ teaspoon salt",
        "1 cup powdered sugar",
        "2 tablespoons milk for the glaze"
      ]
    },
    steps: {
      es: [
        "Remoje las pasas en el ron 30 minutos (o en jugo de china si no quiere alcohol).",
        "Disuelva la levadura en la leche tibia con 1 cucharada del azúcar y deje espumar. Mezcle con la harina, el resto del azúcar, el huevo, la mantequilla, la canela y la sal, y amase 8 minutos. Incorpore las pasas escurridas.",
        "Deje levar tapado 1 hora. Forme un pan, póngalo en un molde de 9 × 5 engrasado y deje levar 45 minutos.",
        "Hornee a 350 °F 35 a 40 minutos, hasta que suene hueco al tocarlo por debajo. Deje enfriar.",
        "Mezcle el azúcar en polvo con la leche y el ron del remojo (unas gotas), y bañe el pan. El alcohol del glaseado no se cocina: para niños, use sólo leche."
      ],
      en: [
        "Soak the raisins in the rum 30 minutes (or in orange juice for no alcohol).",
        "Dissolve the yeast in the warm milk with 1 tablespoon of the sugar and let foam. Mix with the flour, the rest of the sugar, the egg, butter, cinnamon and salt, and knead 8 minutes. Work in the drained raisins.",
        "Let rise covered 1 hour. Shape a loaf, place in a greased 9 × 5 pan and let rise 45 minutes.",
        "Bake at 350 °F 35 to 40 minutes, until it sounds hollow when tapped underneath. Cool.",
        "Mix the powdered sugar with the milk and a few drops of the soaking rum, and drizzle over the bread. The alcohol in the glaze isn't cooked: for children, use milk only."
      ]
    }
  },
  {
    id: "pan-parcha-glaseado",
    category: "panes",
    name: { es: "Pan de Parcha con Glaseado de Parcha", en: "Passion Fruit Loaf with Passion Fruit Glaze" },
    active: 75, total: 90, wait: "enfriar",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "1½ cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "½ taza de mantequilla a temperatura ambiente",
        "1 taza de azúcar",
        "2 huevos",
        "½ taza de pulpa de parcha colada",
        "½ taza de yogur natural",
        "1 cucharadita de vainilla",
        "1 taza de azúcar en polvo",
        "2 cucharadas de pulpa de parcha para el glaseado"
      ],
      en: [
        "2 cups all-purpose flour",
        "1½ teaspoons baking powder",
        "¼ teaspoon salt",
        "½ cup butter, at room temperature",
        "1 cup sugar",
        "2 eggs",
        "½ cup strained passion fruit pulp",
        "½ cup plain yogurt",
        "1 teaspoon vanilla",
        "1 cup powdered sugar",
        "2 tablespoons passion fruit pulp for the glaze"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de pan de 9 × 5.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa. Añada los huevos de uno en uno.",
        "Añada la parcha, el yogur y la vainilla. Incorpore la harina con el polvo de hornear y la sal, sin batir de más.",
        "Hornee 50 a 55 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos y desmolde.",
        "Mezcle el azúcar en polvo con las 2 cucharadas de parcha (con algunas semillas, por el color) y bañe el pan frío."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 5 loaf pan.",
        "Beat the butter with the sugar until creamy. Add the eggs one at a time.",
        "Add the passion fruit, yogurt and vanilla. Fold in the flour with the baking powder and salt, without overmixing.",
        "Bake 50 to 55 minutes, until a toothpick comes out clean. Cool 15 minutes and unmold.",
        "Mix the powdered sugar with the 2 tablespoons of passion fruit (with a few seeds, for color) and glaze the cooled loaf."
      ]
    }
  },
  {
    id: "pan-medianoche",
    category: "panes",
    name: { es: "Pan de Medianoche", en: "Medianoche Sweet Egg Bread" },
    active: 180, total: 180,
    servings: 8,
    ingredients: {
      es: [
        "3½ tazas de harina de trigo",
        "1 sobre de 0.25 onzas de levadura seca",
        "¼ taza de azúcar",
        "¾ taza de leche tibia",
        "2 huevos",
        "4 cucharadas de mantequilla derretida",
        "1 cucharadita de sal",
        "1 huevo batido para barnizar"
      ],
      en: [
        "3½ cups all-purpose flour",
        "1 envelope (0.25 oz) active dry yeast",
        "¼ cup sugar",
        "¾ cup warm milk",
        "2 eggs",
        "4 tablespoons melted butter",
        "1 teaspoon salt",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada del azúcar y deje espumar 10 minutos.",
        "Mezcle con la harina, el resto del azúcar, los huevos, la mantequilla y la sal, y amase 10 minutos hasta que la masa esté lisa y elástica. Deje levar tapado 1 hora.",
        "Divida en 8 pedazos y forme panecillos alargados de 6 pulgadas. Póngalos en una bandeja engrasada y deje levar 1 hora.",
        "Barnice con el huevo y hornee a 350 °F 15 a 18 minutos, hasta que estén dorados y brillosos.",
        "Es el pan dulce y suave del sándwich de medianoche (pernil, jamón, queso suizo, pepinillo y mostaza, a la plancha)."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon of the sugar and let foam 10 minutes.",
        "Mix with the flour, the rest of the sugar, the eggs, butter and salt, and knead 10 minutes until smooth and elastic. Let rise covered 1 hour.",
        "Divide into 8 pieces and shape 6-inch long rolls. Place on a greased sheet and let rise 1 hour.",
        "Brush with the egg and bake at 350 °F 15 to 18 minutes, until golden and shiny.",
        "It's the soft sweet bread for the medianoche sandwich (pernil, ham, Swiss cheese, pickle and mustard, pressed on the griddle)."
      ]
    }
  },
  // ---------- Tanda 50: más carnes (8) y aves (8) ----------
  {
    id: "lomo-cerdo-naranja-agria",
    category: "carnes",
    name: { es: "Lomo de Cerdo al Horno con Mojo de Naranja Agria", en: "Roast Pork Loin with Sour Orange Mojo" },
    active: 90, total: 330, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de lomo de cerdo sin hueso",
        "8 dientes de ajo machacados",
        "½ taza de jugo de naranja agria",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de orégano",
        "2 cucharaditas de sal",
        "1 cucharadita de pimienta",
        "1 cebolla en ruedas",
        "½ taza de caldo de pollo"
      ],
      en: [
        "3 pounds boneless pork loin",
        "8 garlic cloves, crushed",
        "½ cup sour orange juice",
        "2 tablespoons olive oil",
        "1 tablespoon oregano",
        "2 teaspoons salt",
        "1 teaspoon pepper",
        "1 onion, sliced",
        "½ cup chicken broth"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con la sal, la pimienta y el orégano. Mezcle con la naranja agria y el aceite para hacer el mojo.",
        "Haga cortes de ½ pulgada en el lomo, frótelo con la mitad del mojo y déjelo en la nevera al menos 4 horas (mejor de un día para otro).",
        "Caliente el horno a 375 °F. Ponga la cebolla y el caldo en un molde y el lomo encima.",
        "Hornee 1 hora a 1 hora 15 minutos, bañándolo con su jugo, hasta 145 °F en el centro. Déjelo reposar 10 minutos tapado.",
        "Corte en lascas y báñelas con el resto del mojo calentado y la cebolla del molde. Sin naranja agria: mitad jugo de china y mitad de limón."
      ],
      en: [
        "Mash the garlic with the salt, pepper and oregano. Mix with the sour orange juice and oil to make the mojo.",
        "Make ½-inch slits in the loin, rub with half the mojo and refrigerate at least 4 hours (best overnight).",
        "Heat the oven to 375 °F. Put the onion and broth in a pan and the loin on top.",
        "Roast 1 hour to 1 hour 15 minutes, basting with its juices, to 145 °F in the center. Rest 10 minutes covered.",
        "Slice and top with the rest of the mojo, warmed, and the onions from the pan. No sour orange: use half orange juice and half lime."
      ]
    }
  },
  {
    id: "pernil-caldero",
    category: "carnes",
    name: { es: "Pernil al Caldero", en: "Stovetop Caldero Pernil" },
    active: 180, total: 660, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "4 libras de pernil de cerdo sin hueso, en 2 o 3 trozos",
        "10 dientes de ajo",
        "1 cucharada de orégano",
        "2½ cucharaditas de sal",
        "1 cucharadita de pimienta",
        "3 cucharadas de vinagre",
        "3 cucharadas de aceite de oliva",
        "1 cebolla en ruedas",
        "1 taza de agua"
      ],
      en: [
        "4 pounds boneless pork shoulder (pernil), in 2 or 3 pieces",
        "10 garlic cloves",
        "1 tablespoon oregano",
        "2½ teaspoons salt",
        "1 teaspoon pepper",
        "3 tablespoons vinegar",
        "3 tablespoons olive oil",
        "1 onion, sliced",
        "1 cup water"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con el orégano, la sal y la pimienta; añada el vinagre y 1 cucharada del aceite. Adobe el pernil por todos lados y déjelo en la nevera de un día para otro.",
        "En un caldero grueso, dore los trozos en el resto del aceite a fuego medio-alto, 4 minutos por lado.",
        "Añada la cebolla y el agua, tape bien y cocine a fuego bajo 2½ horas, volteando cada 30 minutos y añadiendo agua si se seca.",
        "Destape los últimos 20 minutos para que el líquido se reduzca y la carne dore en su grasa. Debe desmenuzarse con un tenedor.",
        "Desmenuce o corte en trozos y sirva con su salsa. Es el pernil de cuando no hay horno, o para hacer menos cantidad."
      ],
      en: [
        "Mash the garlic with the oregano, salt and pepper; add the vinegar and 1 tablespoon of the oil. Season the pork all over and refrigerate overnight.",
        "In a heavy caldero, brown the pieces in the rest of the oil over medium-high heat, 4 minutes per side.",
        "Add the onion and water, cover tightly and cook over low heat 2½ hours, turning every 30 minutes and adding water if it dries out.",
        "Uncover the last 20 minutes so the liquid reduces and the meat browns in its own fat. It should shred with a fork.",
        "Shred or cut into pieces and serve with its sauce. It's the pernil for when there's no oven, or for a smaller batch."
      ]
    }
  },
  {
    id: "pinchos-res-chimichurri",
    category: "carnes",
    name: { es: "Pinchos de Res con Chimichurri de Recao", en: "Beef Skewers with Culantro Chimichurri" },
    active: 40, total: 70, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de lomo de res (sirloin) en cubos de 1½ pulgada",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de oliva",
        "1 pimiento rojo en cuadros",
        "1 cebolla roja en cuadros",
        "12 palitos de pincho",
        "8 hojas de recao",
        "½ taza de perejil",
        "3 dientes de ajo",
        "⅓ taza de aceite de oliva para el chimichurri",
        "3 cucharadas de vinagre",
        "½ cucharadita de sal",
        "¼ cucharadita de ají picante en polvo"
      ],
      en: [
        "2 pounds beef sirloin, in 1½-inch cubes",
        "1 teaspoon adobo",
        "2 tablespoons olive oil",
        "1 red bell pepper, in squares",
        "1 red onion, in squares",
        "12 skewers",
        "8 culantro (recao) leaves",
        "½ cup parsley",
        "3 garlic cloves",
        "⅓ cup olive oil for the chimichurri",
        "3 tablespoons vinegar",
        "½ teaspoon salt",
        "¼ teaspoon hot chili powder"
      ]
    },
    steps: {
      es: [
        "Adobe la carne con el adobo y las 2 cucharadas de aceite, y déjela 30 minutos. Si los palitos son de madera, remójelos en agua.",
        "Pique fino (o pulse en el procesador) el recao, el perejil y el ajo, y mézclelos con el aceite, el vinagre, la sal y el ají.",
        "Ensarte la carne alternando con el pimiento y la cebolla.",
        "Ase en la parrilla o plancha bien caliente 8 a 10 minutos, volteando, hasta el término que guste (145 °F término medio).",
        "Sirva con el chimichurri de recao por encima, con tostones o arroz."
      ],
      en: [
        "Season the beef with the adobo and 2 tablespoons oil and let it sit 30 minutes. If the skewers are wooden, soak them in water.",
        "Finely chop (or pulse in a processor) the culantro, parsley and garlic and mix with the oil, vinegar, salt and chili.",
        "Thread the beef alternating with the bell pepper and onion.",
        "Grill on a very hot grill or griddle 8 to 10 minutes, turning, to your liking (145 °F medium).",
        "Serve with the culantro chimichurri on top, with tostones or rice."
      ]
    }
  },
  {
    id: "costillas-cerdo-mojo-ajo",
    category: "carnes",
    name: { es: "Costillas de Cerdo al Horno con Mojo de Ajo", en: "Oven-Baked Pork Ribs with Garlic Mojo" },
    active: 165, total: 165,
    servings: 8,
    ingredients: {
      es: [
        "4 libras de costillas de cerdo",
        "2 cucharaditas de adobo",
        "1 cucharadita de orégano",
        "1 cucharadita de comino",
        "½ taza de agua",
        "10 dientes de ajo picados",
        "3 cucharadas de aceite de oliva",
        "¼ taza de jugo de naranja agria o de limón",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "4 pounds pork ribs",
        "2 teaspoons adobo",
        "1 teaspoon oregano",
        "1 teaspoon cumin",
        "½ cup water",
        "10 garlic cloves, minced",
        "3 tablespoons olive oil",
        "¼ cup sour orange or lime juice",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 300 °F. Frote las costillas con el adobo, el orégano y el comino.",
        "Póngalas en un molde con el agua, tápelas bien con papel de aluminio y hornee 2 horas, hasta que la carne se separe del hueso.",
        "Para el mojo, caliente el aceite con el ajo a fuego bajo 3 minutos sin dorar. Apague y añada la naranja agria y el cilantro.",
        "Destape las costillas, suba el horno a 425 °F, unte la mitad del mojo y hornee 20 a 25 minutos hasta que doren.",
        "Corte entre los huesos y sirva con el resto del mojo, con yuca o tostones."
      ],
      en: [
        "Heat the oven to 300 °F. Rub the ribs with the adobo, oregano and cumin.",
        "Place in a pan with the water, cover tightly with foil and bake 2 hours, until the meat pulls from the bone.",
        "For the mojo, heat the oil with the garlic over low heat 3 minutes without browning. Turn off and add the sour orange juice and cilantro.",
        "Uncover the ribs, raise the oven to 425 °F, brush with half the mojo and bake 20 to 25 minutes until browned.",
        "Cut between the bones and serve with the rest of the mojo, with yuca or tostones."
      ]
    }
  },
  {
    id: "cerdo-agridulce-pina",
    category: "carnes",
    name: { es: "Cerdo Agridulce con Piña", en: "Sweet and Sour Pork with Pineapple" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de lomo de cerdo en cubos",
        "1 cucharadita de adobo",
        "3 cucharadas de maicena",
        "3 cucharadas de aceite vegetal",
        "1 pimiento rojo en cuadros",
        "1 pimiento verde en cuadros",
        "1 cebolla en cuadros",
        "2 tazas de piña en cubos",
        "½ taza de jugo de piña",
        "¼ taza de ketchup",
        "3 cucharadas de vinagre",
        "2 cucharadas de azúcar morena",
        "2 cucharadas de salsa de soya"
      ],
      en: [
        "2 pounds pork loin, cubed",
        "1 teaspoon adobo",
        "3 tablespoons cornstarch",
        "3 tablespoons vegetable oil",
        "1 red bell pepper, in squares",
        "1 green bell pepper, in squares",
        "1 onion, in squares",
        "2 cups pineapple, cubed",
        "½ cup pineapple juice",
        "¼ cup ketchup",
        "3 tablespoons vinegar",
        "2 tablespoons brown sugar",
        "2 tablespoons soy sauce"
      ]
    },
    steps: {
      es: [
        "Adobe el cerdo y páselo por 2 cucharadas de la maicena.",
        "Dórelo en el aceite a fuego alto 6 a 8 minutos, en dos tandas, hasta que esté cocido (145 °F). Sáquelo.",
        "En el mismo sartén, saltee los pimientos y la cebolla 3 minutos, que queden crujientes.",
        "Mezcle el jugo de piña, el ketchup, el vinagre, el azúcar, la soya y la otra cucharada de maicena; añádalo con la piña y deje hervir hasta que espese.",
        "Vuelva el cerdo a la salsa, mezcle 1 minuto y sirva con arroz blanco."
      ],
      en: [
        "Season the pork with adobo and toss in 2 tablespoons of the cornstarch.",
        "Brown in the oil over high heat 6 to 8 minutes, in two batches, until cooked (145 °F). Remove.",
        "In the same skillet, stir-fry the peppers and onion 3 minutes, keeping them crisp.",
        "Mix the pineapple juice, ketchup, vinegar, sugar, soy sauce and the other tablespoon of cornstarch; add with the pineapple and boil until thickened.",
        "Return the pork to the sauce, toss 1 minute and serve with white rice."
      ]
    }
  },
  {
    id: "res-guisada-coco-recao",
    category: "carnes",
    name: { es: "Res Guisada en Leche de Coco y Recao", en: "Beef Stewed in Coconut Milk and Culantro" },
    active: 120, total: 120,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de carne de res para guisar en cubos",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 lata de 13.5 onzas de leche de coco",
        "1 taza de agua",
        "1 libra de yautía en cubos",
        "2 zanahorias en ruedas",
        "½ cucharadita de sal",
        "6 hojas de recao picadas"
      ],
      en: [
        "2 pounds stewing beef, cubed",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 can (13.5 oz) coconut milk",
        "1 cup water",
        "1 pound yautía (taro), cubed",
        "2 carrots, sliced",
        "½ teaspoon salt",
        "6 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Adobe la carne y dórela en el aceite de achiote en un caldero, en dos tandas.",
        "Añada el sofrito y la salsa de tomate, y cocine 3 minutos.",
        "Añada la leche de coco y el agua, tape y cocine a fuego bajo 1 hora 15 minutos, hasta que la carne esté casi blanda.",
        "Añada la yautía, la zanahoria y la sal, y cocine 25 minutos más hasta que todo esté blando y la salsa espese.",
        "Añada el recao al final y sirva con arroz blanco. El coco suaviza la salsa y la yautía la espesa."
      ],
      en: [
        "Season the beef with adobo and brown in the annatto oil in a caldero, in two batches.",
        "Add the sofrito and tomato sauce and cook 3 minutes.",
        "Add the coconut milk and water, cover and simmer 1 hour 15 minutes, until the beef is almost tender.",
        "Add the yautía, carrots and salt and cook 25 more minutes until everything is tender and the sauce thickens.",
        "Add the culantro at the end and serve with white rice. The coconut softens the sauce and the yautía thickens it."
      ]
    }
  },
  {
    id: "albondigas-guayaba",
    category: "carnes",
    name: { es: "Albóndigas Glaseadas con Guayaba", en: "Guava-Glazed Meatballs" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de carne molida de res",
        "½ taza de pan rallado",
        "1 huevo",
        "2 cucharadas de sofrito",
        "1 cucharadita de adobo",
        "6 onzas de pasta de guayaba en cubitos",
        "½ taza de agua",
        "¼ taza de ketchup",
        "2 cucharadas de vinagre",
        "1 cucharada de salsa de soya",
        "1 diente de ajo machacado"
      ],
      en: [
        "1½ pounds ground beef",
        "½ cup breadcrumbs",
        "1 egg",
        "2 tablespoons sofrito",
        "1 teaspoon adobo",
        "6 ounces guava paste, diced",
        "½ cup water",
        "¼ cup ketchup",
        "2 tablespoons vinegar",
        "1 tablespoon soy sauce",
        "1 garlic clove, crushed"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F. Mezcle la carne, el pan rallado, el huevo, el sofrito y el adobo sin amasar de más.",
        "Forme 24 albóndigas y hornéelas en una bandeja 15 minutos, hasta 160 °F por dentro.",
        "Derrita la guayaba con el agua a fuego bajo. Añada el ketchup, el vinagre, la soya y el ajo, y cocine 3 minutos hasta tener un glaseado.",
        "Pase las albóndigas al glaseado y muévalas 2 minutos para que brillen.",
        "Sirva con palillos como entremés o con arroz blanco como plato principal."
      ],
      en: [
        "Heat the oven to 400 °F. Mix the beef, breadcrumbs, egg, sofrito and adobo without overworking.",
        "Shape 24 meatballs and bake on a sheet 15 minutes, to 160 °F inside.",
        "Melt the guava with the water over low heat. Add the ketchup, vinegar, soy sauce and garlic and cook 3 minutes into a glaze.",
        "Add the meatballs to the glaze and toss 2 minutes until glossy.",
        "Serve with toothpicks as an appetizer or with white rice as a main."
      ]
    }
  },
  {
    id: "chuletas-ajillo-limon",
    category: "carnes",
    name: { es: "Chuletas al Ajillo con Limón", en: "Garlic Lime Pork Chops" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "4 chuletas de cerdo de 1 pulgada",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de oliva",
        "8 dientes de ajo en lascas",
        "¼ taza de caldo de pollo",
        "3 cucharadas de jugo de limón",
        "1 cucharada de mantequilla",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "4 pork chops, 1 inch thick",
        "1 teaspoon adobo",
        "2 tablespoons olive oil",
        "8 garlic cloves, sliced",
        "¼ cup chicken broth",
        "3 tablespoons lime juice",
        "1 tablespoon butter",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Seque las chuletas y adóbelas por los dos lados.",
        "Dórelas en el aceite a fuego medio-alto 4 a 5 minutos por lado, hasta 145 °F. Sáquelas y déjelas reposar.",
        "Baje el fuego y sofría el ajo en el mismo sartén 1 minuto, sin que se queme.",
        "Añada el caldo y el limón, raspe el fondo y deje reducir 2 minutos. Apague y añada la mantequilla.",
        "Bañe las chuletas con la salsa de ajo y espolvoree el perejil. Sirva con arroz y habichuelas o con tostones."
      ],
      en: [
        "Pat the chops dry and season both sides with adobo.",
        "Brown in the oil over medium-high heat 4 to 5 minutes per side, to 145 °F. Remove and let rest.",
        "Lower the heat and sauté the garlic in the same skillet 1 minute, without burning.",
        "Add the broth and lime juice, scrape the bottom and reduce 2 minutes. Turn off and add the butter.",
        "Spoon the garlic sauce over the chops and sprinkle with parsley. Serve with rice and beans or tostones."
      ]
    }
  },
  {
    id: "pollo-horno-naranja-agria",
    category: "aves",
    name: { es: "Pollo al Horno con Naranja Agria y Orégano Brujo", en: "Roast Chicken with Sour Orange and Cuban Oregano" },
    active: 90, total: 330, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "1 pollo entero de 4 libras",
        "8 dientes de ajo",
        "6 hojas de orégano brujo picadas (o 1 cucharadita de orégano seco)",
        "2 cucharaditas de sal",
        "½ cucharadita de pimienta",
        "½ taza de jugo de naranja agria",
        "2 cucharadas de aceite de oliva",
        "1 cebolla en ruedas"
      ],
      en: [
        "1 whole chicken (4 lb)",
        "8 garlic cloves",
        "6 Cuban oregano (orégano brujo) leaves, chopped (or 1 teaspoon dried oregano)",
        "2 teaspoons salt",
        "½ teaspoon pepper",
        "½ cup sour orange juice",
        "2 tablespoons olive oil",
        "1 onion, sliced"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con el orégano brujo, la sal y la pimienta; añada la naranja agria y el aceite.",
        "Despegue la piel del pollo con los dedos y unte el adobo por debajo, por fuera y por dentro. Déjelo en la nevera al menos 4 horas.",
        "Caliente el horno a 400 °F. Ponga el pollo sobre la cebolla en un molde, con la pechuga hacia arriba.",
        "Hornee 1 hora a 1 hora 15 minutos, bañándolo con su jugo, hasta 165 °F en la parte gruesa del muslo.",
        "Deje reposar 10 minutos antes de cortar. El orégano brujo (de hoja gruesa) da el sabor de los patios de la isla."
      ],
      en: [
        "Mash the garlic with the Cuban oregano, salt and pepper; add the sour orange juice and oil.",
        "Loosen the chicken skin with your fingers and rub the marinade under it, outside and inside. Refrigerate at least 4 hours.",
        "Heat the oven to 400 °F. Set the chicken on the onion in a pan, breast up.",
        "Roast 1 hour to 1 hour 15 minutes, basting with its juices, to 165 °F in the thick part of the thigh.",
        "Rest 10 minutes before carving. Cuban oregano (the thick-leaf kind) gives the flavor of island backyards."
      ]
    }
  },
  {
    id: "pechugas-salsa-champinones",
    category: "aves",
    name: { es: "Pechugas en Salsa de Champiñones", en: "Chicken Breasts in Mushroom Sauce" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 pechugas de pollo deshuesadas, aplanadas a ½ pulgada",
        "1 cucharadita de adobo",
        "¼ taza de harina de trigo",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de mantequilla",
        "½ libra de champiñones en lascas",
        "2 dientes de ajo picados",
        "½ taza de caldo de pollo",
        "½ taza de leche evaporada",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "4 boneless chicken breasts, pounded to ½ inch",
        "1 teaspoon adobo",
        "¼ cup all-purpose flour",
        "2 tablespoons olive oil",
        "1 tablespoon butter",
        "½ pound mushrooms, sliced",
        "2 garlic cloves, minced",
        "½ cup chicken broth",
        "½ cup evaporated milk",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Adobe las pechugas y páselas por la harina.",
        "Dórelas en el aceite 4 minutos por lado, hasta 165 °F. Sáquelas.",
        "Derrita la mantequilla en el mismo sartén y dore los champiñones 5 minutos. Añada el ajo 1 minuto.",
        "Añada el caldo y la leche evaporada, y hierva suave 4 minutos hasta que espese.",
        "Vuelva las pechugas a la salsa 2 minutos, espolvoree el perejil y sirva con arroz o puré de papas."
      ],
      en: [
        "Season the chicken with adobo and dredge in flour.",
        "Brown in the oil 4 minutes per side, to 165 °F. Remove.",
        "Melt the butter in the same skillet and brown the mushrooms 5 minutes. Add the garlic for 1 minute.",
        "Add the broth and evaporated milk and simmer 4 minutes until thickened.",
        "Return the chicken to the sauce for 2 minutes, sprinkle with parsley and serve with rice or mashed potatoes."
      ]
    }
  },
  {
    id: "pollo-vizcaina",
    category: "aves",
    name: { es: "Pollo a la Vizcaína", en: "Chicken Vizcaína" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: [
        "3 libras de presas de pollo",
        "1 cucharadita de adobo",
        "3 cucharadas de aceite de oliva",
        "2 cebollas en ruedas",
        "1 pimiento rojo en tiras",
        "4 dientes de ajo en lascas",
        "1 lata de 15 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de alcaparras",
        "2 hojas de laurel",
        "1 libra de papas en ruedas gruesas",
        "1 taza de agua"
      ],
      en: [
        "3 pounds chicken pieces",
        "1 teaspoon adobo",
        "3 tablespoons olive oil",
        "2 onions, sliced",
        "1 red bell pepper, in strips",
        "4 garlic cloves, sliced",
        "1 can (15 oz) tomato sauce",
        "¼ cup stuffed olives",
        "2 tablespoons capers",
        "2 bay leaves",
        "1 pound potatoes, in thick slices",
        "1 cup water"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo y dórelo en el aceite en un caldero, 5 minutos por lado. Sáquelo.",
        "Sofría la cebolla, el pimiento y el ajo 5 minutos en la misma grasa.",
        "Añada la salsa de tomate, las aceitunas, las alcaparras, el laurel y el agua, y deje hervir.",
        "Vuelva el pollo, ponga las papas alrededor, tape y cocine a fuego bajo 35 minutos, hasta que las papas estén blandas y el pollo llegue a 165 °F.",
        "Sirva con arroz blanco. Es la misma salsa del bacalao a la vizcaína, con pollo."
      ],
      en: [
        "Season the chicken with adobo and brown in the oil in a caldero, 5 minutes per side. Remove.",
        "Sauté the onion, bell pepper and garlic 5 minutes in the same fat.",
        "Add the tomato sauce, olives, capers, bay leaves and water and bring to a boil.",
        "Return the chicken, arrange the potatoes around it, cover and simmer 35 minutes, until the potatoes are tender and the chicken reaches 165 °F.",
        "Serve with white rice. It's the same sauce as salt cod vizcaína, with chicken."
      ]
    }
  },
  {
    id: "pollo-mechado-criolla",
    category: "aves",
    name: { es: "Pollo Mechado a la Criolla", en: "Criollo Shredded Chicken" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de pechugas o muslos de pollo deshuesados",
        "4 tazas de agua",
        "1 hoja de laurel",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "1 cucharadita de comino",
        "½ cucharadita de orégano",
        "½ cucharadita de sal"
      ],
      en: [
        "2 pounds boneless chicken breasts or thighs",
        "4 cups water",
        "1 bay leaf",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "¼ cup chopped stuffed olives",
        "1 teaspoon cumin",
        "½ teaspoon oregano",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva el pollo en el agua con el laurel 20 a 25 minutos, hasta 165 °F. Guarde 1 taza del caldo.",
        "Deje enfriar un poco y desmenúcelo con dos tenedores.",
        "Sofría el sofrito en el aceite de achiote 3 minutos. Añada la salsa de tomate, las aceitunas, el comino, el orégano y la sal.",
        "Añada el pollo y el caldo guardado, y cocine 10 minutos hasta que la salsa se reduzca y lo cubra.",
        "Sirva con arroz, en sándwich, o úselo de relleno para pastelillos, alcapurrias, canoas o tacos."
      ],
      en: [
        "Boil the chicken in the water with the bay leaf 20 to 25 minutes, to 165 °F. Save 1 cup of the broth.",
        "Let cool slightly and shred with two forks.",
        "Sauté the sofrito in the annatto oil 3 minutes. Add the tomato sauce, olives, cumin, oregano and salt.",
        "Add the chicken and the saved broth and cook 10 minutes until the sauce reduces and coats it.",
        "Serve with rice, in a sandwich, or use as a filling for pastelillos, alcapurrias, canoas or tacos."
      ]
    }
  },
  {
    id: "pollo-frito-horno",
    category: "aves",
    name: { es: "Pollo \"Frito\" al Horno o en Freidora de Aire", en: "Oven or Air-Fryer \"Fried\" Chicken" },
    active: 60, total: 120, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de muslos y patas de pollo con piel",
        "1 cucharada de adobo",
        "1 cucharadita de ajo en polvo",
        "1 cucharadita de pimentón",
        "1 cucharadita de orégano",
        "½ taza de harina de trigo",
        "2 cucharadas de maicena",
        "1 cucharadita de polvo de hornear",
        "2 cucharadas de aceite de oliva en aerosol o con brocha"
      ],
      en: [
        "3 pounds chicken thighs and drumsticks, skin on",
        "1 tablespoon adobo",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "1 teaspoon oregano",
        "½ cup all-purpose flour",
        "2 tablespoons cornstarch",
        "1 teaspoon baking powder",
        "2 tablespoons olive oil, sprayed or brushed"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo con el adobo, el ajo en polvo, el pimentón y el orégano, y déjelo en la nevera al menos 1 hora.",
        "Mezcle la harina, la maicena y el polvo de hornear (el polvo de hornear hace la piel crujiente), y pase el pollo por la mezcla, sacudiendo el exceso.",
        "Rocíe o unte el aceite por todos lados.",
        "Horno: en una rejilla sobre una bandeja a 425 °F, 40 a 45 minutos volteando a la mitad. Freidora de aire: a 380 °F, 22 a 25 minutos en una sola capa, volteando a la mitad.",
        "Está listo cuando la piel está dorada y el muslo marca 175 °F. Queda crujiente como frito, con mucho menos aceite."
      ],
      en: [
        "Season the chicken with the adobo, garlic powder, paprika and oregano and refrigerate at least 1 hour.",
        "Mix the flour, cornstarch and baking powder (the baking powder makes the skin crisp) and dredge the chicken, shaking off the excess.",
        "Spray or brush the oil on all sides.",
        "Oven: on a rack over a sheet at 425 °F, 40 to 45 minutes, turning halfway. Air fryer: at 380 °F, 22 to 25 minutes in a single layer, turning halfway.",
        "It's done when the skin is golden and the thigh reads 175 °F. Crisp like fried, with much less oil."
      ]
    }
  },
  {
    id: "albondigas-pavo-criolla",
    category: "aves",
    name: { es: "Albóndigas de Pavo en Salsa Criolla", en: "Turkey Meatballs in Criollo Sauce" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de pavo molido",
        "½ taza de avena en hojuelas",
        "1 huevo",
        "3 cucharadas de sofrito",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de oliva",
        "1 lata de 15 onzas de salsa de tomate",
        "½ taza de agua",
        "¼ taza de aceitunas rellenas",
        "1 cucharadita de orégano",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "1½ pounds ground turkey",
        "½ cup rolled oats",
        "1 egg",
        "3 tablespoons sofrito",
        "1 teaspoon adobo",
        "2 tablespoons olive oil",
        "1 can (15 oz) tomato sauce",
        "½ cup water",
        "¼ cup stuffed olives",
        "1 teaspoon oregano",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Mezcle el pavo, la avena, el huevo, 1 cucharada del sofrito y el adobo. Forme 24 albóndigas con las manos húmedas.",
        "Dórelas en el aceite 5 minutos, moviéndolas para que doren parejo. Sáquelas.",
        "Sofría el resto del sofrito 2 minutos. Añada la salsa de tomate, el agua, las aceitunas y el orégano, y deje hervir.",
        "Vuelva las albóndigas, tape y cocine a fuego bajo 15 minutos, hasta 165 °F por dentro.",
        "Termine con el cilantro y sirva con arroz, espaguetis o en pan. La avena las mantiene jugosas sin pan rallado."
      ],
      en: [
        "Mix the turkey, oats, egg, 1 tablespoon of the sofrito and the adobo. Shape 24 meatballs with wet hands.",
        "Brown in the oil 5 minutes, rolling them to brown evenly. Remove.",
        "Sauté the rest of the sofrito 2 minutes. Add the tomato sauce, water, olives and oregano and bring to a boil.",
        "Return the meatballs, cover and simmer 15 minutes, to 165 °F inside.",
        "Finish with the cilantro and serve with rice, spaghetti or in bread. The oats keep them juicy without breadcrumbs."
      ]
    }
  },
  {
    id: "pollo-guisado-garbanzos",
    category: "aves",
    name: { es: "Pollo Guisado con Garbanzos", en: "Chicken Stewed with Chickpeas" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: [
        "3 libras de presas de pollo sin piel",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "1 libra de papas en cubos",
        "1½ tazas de agua",
        "¼ taza de aceitunas rellenas",
        "½ cucharadita de comino",
        "1 pizca de sal"
      ],
      en: [
        "3 pounds skinless chicken pieces",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 can (15 oz) chickpeas, drained",
        "1 pound potatoes, cubed",
        "1½ cups water",
        "¼ cup stuffed olives",
        "½ teaspoon cumin",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo y dórelo en el aceite de achiote 6 minutos.",
        "Añada el sofrito, la salsa de tomate y el comino, y cocine 3 minutos.",
        "Añada los garbanzos, las papas, el agua, las aceitunas y la sal.",
        "Tape y cocine a fuego bajo 35 minutos, hasta que las papas estén blandas y el pollo llegue a 165 °F.",
        "Destape 5 minutos si quiere la salsa más espesa. Sirva con arroz blanco; los garbanzos suman proteína y fibra."
      ],
      en: [
        "Season the chicken with adobo and brown in the annatto oil 6 minutes.",
        "Add the sofrito, tomato sauce and cumin and cook 3 minutes.",
        "Add the chickpeas, potatoes, water, olives and salt.",
        "Cover and simmer 35 minutes, until the potatoes are tender and the chicken reaches 165 °F.",
        "Uncover 5 minutes if you want a thicker sauce. Serve with white rice; the chickpeas add protein and fiber."
      ]
    }
  },
  {
    id: "muslos-mojo-recao-horno",
    category: "aves",
    name: { es: "Muslos de Pollo al Horno con Mojo de Recao", en: "Baked Chicken Thighs with Culantro Mojo" },
    active: 50, total: 110, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de muslos de pollo con hueso",
        "1 cucharadita de adobo",
        "10 hojas de recao",
        "½ taza de cilantro",
        "6 dientes de ajo",
        "⅓ taza de aceite de oliva",
        "3 cucharadas de jugo de limón",
        "½ cucharadita de sal",
        "1 cucharadita de comino"
      ],
      en: [
        "3 pounds bone-in chicken thighs",
        "1 teaspoon adobo",
        "10 culantro (recao) leaves",
        "½ cup cilantro",
        "6 garlic cloves",
        "⅓ cup olive oil",
        "3 tablespoons lime juice",
        "½ teaspoon salt",
        "1 teaspoon cumin"
      ]
    },
    steps: {
      es: [
        "Licúe el recao, el cilantro, el ajo, el aceite, el limón, la sal y el comino hasta tener un mojo verde.",
        "Adobe los muslos y úntelos con la mitad del mojo. Déjelos en la nevera al menos 1 hora.",
        "Caliente el horno a 425 °F y ponga los muslos con la piel hacia arriba en un molde.",
        "Hornee 35 a 40 minutos, hasta que la piel dore y marquen 175 °F.",
        "Sirva con el resto del mojo verde por encima, con arroz con gandules o viandas."
      ],
      en: [
        "Blend the culantro, cilantro, garlic, oil, lime juice, salt and cumin into a green mojo.",
        "Season the thighs with adobo and coat with half the mojo. Refrigerate at least 1 hour.",
        "Heat the oven to 425 °F and place the thighs skin side up in a pan.",
        "Bake 35 to 40 minutes, until the skin is golden and they read 175 °F.",
        "Serve with the rest of the green mojo on top, with arroz con gandules or root vegetables."
      ]
    }
  },
  // ---------- Tanda 51: más salsas y aderezos (8) y huevos (8) ----------
  {
    id: "salsa-roja-tomate-casera",
    category: "salsas",
    name: { es: "Salsa Roja de Tomate Casera", en: "Homemade Red Tomato Sauce" },
    active: 35, total: 35,
    servings: 8,
    ingredients: {
      es: [
        "2 cucharadas de aceite de oliva",
        "1 cebolla mediana, picada fina",
        "4 dientes de ajo, picados",
        "2 cucharadas de sofrito",
        "1 lata de 28 onzas de tomates triturados",
        "2 cucharadas de pasta de tomate",
        "1 cucharadita de orégano seco",
        "1 cucharadita de azúcar",
        "½ cucharadita de sal",
        "2 hojas de laurel",
        "6 hojas de albahaca fresca"
      ],
      en: [
        "2 tablespoons olive oil",
        "1 medium onion, finely chopped",
        "4 garlic cloves, minced",
        "2 tablespoons sofrito",
        "1 28-ounce can crushed tomatoes",
        "2 tablespoons tomato paste",
        "1 teaspoon dried oregano",
        "1 teaspoon sugar",
        "½ teaspoon salt",
        "2 bay leaves",
        "6 fresh basil leaves"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite a fuego medio y sofría la cebolla 5 minutos, hasta que esté blanda.",
        "Añada el ajo y el sofrito y cocine 2 minutos sin que se queme el ajo.",
        "Agregue los tomates, la pasta de tomate, el orégano, el azúcar, la sal y el laurel.",
        "Cocine destapado a fuego bajo 25 minutos, moviendo de vez en cuando, hasta que espese.",
        "Saque el laurel, añada la albahaca picada y pruebe la sal. Sirve para pastas, pastelón, lasaña o albóndigas; se congela hasta 3 meses."
      ],
      en: [
        "Heat the oil over medium heat and sauté the onion 5 minutes, until soft.",
        "Add the garlic and sofrito and cook 2 minutes without burning the garlic.",
        "Add the tomatoes, tomato paste, oregano, sugar, salt and bay leaves.",
        "Simmer uncovered over low heat 25 minutes, stirring now and then, until thick.",
        "Remove the bay leaves, add the chopped basil and taste for salt. Use it for pasta, pastelón, lasagna or meatballs; it freezes up to 3 months."
      ]
    }
  },
  {
    id: "salsa-blanca-bechamel",
    category: "salsas",
    name: { es: "Salsa Blanca (Bechamel)", en: "White Sauce (Béchamel)" },
    active: 15, total: 15,
    servings: 6,
    ingredients: {
      es: [
        "3 cucharadas de mantequilla",
        "3 cucharadas de harina de trigo",
        "2 tazas de leche",
        "¼ cucharadita de sal",
        "⅛ cucharadita de nuez moscada",
        "⅛ cucharadita de pimienta blanca"
      ],
      en: [
        "3 tablespoons butter",
        "3 tablespoons all-purpose flour",
        "2 cups milk",
        "¼ teaspoon salt",
        "⅛ teaspoon nutmeg",
        "⅛ teaspoon white pepper"
      ]
    },
    steps: {
      es: [
        "Caliente la leche sin que hierva y apártela.",
        "Derrita la mantequilla a fuego medio-bajo, añada la harina y mueva 2 minutos sin que dore.",
        "Vierta la leche caliente poco a poco, batiendo con un batidor para que no se hagan grumos.",
        "Cocine 5 a 6 minutos moviendo, hasta que cubra la parte de atrás de una cuchara.",
        "Sazone con la sal, la nuez moscada y la pimienta. Úsela en lasañas, canelones, croquetas o pastelón de vegetales."
      ],
      en: [
        "Heat the milk without boiling and set aside.",
        "Melt the butter over medium-low heat, add the flour and stir 2 minutes without browning.",
        "Pour in the hot milk little by little, whisking so no lumps form.",
        "Cook 5 to 6 minutes, stirring, until it coats the back of a spoon.",
        "Season with the salt, nutmeg and pepper. Use it in lasagna, cannelloni, croquettes or vegetable pastelón."
      ]
    }
  },
  {
    id: "salsa-holandesa-facil",
    category: "salsas",
    name: { es: "Salsa Holandesa Fácil con Limón", en: "Easy Hollandaise Sauce with Lime" },
    active: 15, total: 15,
    servings: 6,
    ingredients: {
      es: [
        "3 yemas de huevo",
        "2 cucharadas de jugo de limón",
        "1 cucharada de agua",
        "½ taza de mantequilla sin sal, derretida",
        "¼ cucharadita de sal",
        "1 pizca de pimentón"
      ],
      en: [
        "3 egg yolks",
        "2 tablespoons lime juice",
        "1 tablespoon water",
        "½ cup unsalted butter, melted",
        "¼ teaspoon salt",
        "1 pinch paprika"
      ]
    },
    steps: {
      es: [
        "Ponga un tazón de metal o vidrio sobre una olla con agua que apenas hierva, sin que el tazón toque el agua.",
        "Bata las yemas con el limón y el agua sin parar 3 a 4 minutos, hasta que espesen y lleguen a 160 °F (así el huevo queda seguro).",
        "Saque el tazón del calor y añada la mantequilla derretida en hilo, batiendo, hasta que la salsa esté cremosa.",
        "Sazone con la sal y el pimentón. Si se corta, bata 1 cucharada de agua tibia y vuelva a incorporar la salsa poco a poco.",
        "Sírvala enseguida sobre huevos benedictinos, espárragos, pescado o vegetales al vapor."
      ],
      en: [
        "Set a metal or glass bowl over a pot of barely simmering water, without the bowl touching the water.",
        "Whisk the yolks with the lime juice and water nonstop 3 to 4 minutes, until thick and at 160 °F (so the egg is safe).",
        "Take the bowl off the heat and drizzle in the melted butter, whisking, until the sauce is creamy.",
        "Season with the salt and paprika. If it breaks, whisk 1 tablespoon of warm water and slowly whisk the sauce back in.",
        "Serve right away over eggs Benedict, asparagus, fish or steamed vegetables."
      ]
    }
  },
  {
    id: "mojo-verde-cilantro-recao",
    category: "salsas",
    name: { es: "Mojo Verde de Cilantro y Recao", en: "Green Mojo with Cilantro and Culantro" },
    active: 10, total: 25, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de cilantro",
        "10 hojas de recao",
        "6 dientes de ajo",
        "1 ají dulce, sin semillas",
        "½ taza de aceite de oliva",
        "¼ taza de jugo de limón",
        "1 cucharadita de comino",
        "½ cucharadita de sal",
        "2 cucharadas de agua"
      ],
      en: [
        "1 cup cilantro",
        "10 culantro (recao) leaves",
        "6 garlic cloves",
        "1 sweet pepper (ají dulce), seeded",
        "½ cup olive oil",
        "¼ cup lime juice",
        "1 teaspoon cumin",
        "½ teaspoon salt",
        "2 tablespoons water"
      ]
    },
    steps: {
      es: [
        "Lave y seque bien el cilantro y el recao.",
        "Licúe todos los ingredientes en pulsaciones cortas hasta tener una salsa con pedacitos, no un puré.",
        "Pruebe y ajuste el limón y la sal.",
        "Déjelo reposar 15 minutos para que el ajo suelte su sabor.",
        "Sírvalo con tostones, yuca hervida, pescado o carnes a la parrilla. Dura 4 días en la nevera, en frasco tapado."
      ],
      en: [
        "Wash and dry the cilantro and culantro well.",
        "Blend everything in short pulses into a chunky sauce, not a purée.",
        "Taste and adjust the lime juice and salt.",
        "Let it rest 15 minutes so the garlic releases its flavor.",
        "Serve with tostones, boiled cassava, fish or grilled meats. It keeps 4 days in the fridge in a covered jar."
      ]
    }
  },
  {
    id: "salsa-pimiento-asado-almendras",
    category: "salsas",
    name: { es: "Salsa de Pimiento Asado y Almendras", en: "Roasted Pepper and Almond Sauce" },
    active: 15, total: 15,
    servings: 8,
    ingredients: {
      es: [
        "1 frasco de 12 onzas de pimientos morrones asados, escurridos",
        "½ taza de almendras tostadas",
        "2 dientes de ajo",
        "1 rebanada de pan sobao tostado",
        "¼ taza de aceite de oliva",
        "1 cucharada de vinagre",
        "1 cucharadita de pimentón",
        "½ cucharadita de sal"
      ],
      en: [
        "1 12-ounce jar roasted red peppers, drained",
        "½ cup toasted almonds",
        "2 garlic cloves",
        "1 slice toasted pan sobao",
        "¼ cup olive oil",
        "1 tablespoon vinegar",
        "1 teaspoon paprika",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Ponga en el procesador las almendras, el ajo y el pan en pedazos, y muela hasta que queden finos.",
        "Añada los pimientos, el vinagre, el pimentón y la sal.",
        "Con el procesador encendido, vierta el aceite en hilo hasta tener una salsa espesa.",
        "Si la quiere más suelta, añada 1 o 2 cucharadas de agua.",
        "Sírvala con pollo o pescado a la plancha, vegetales asados, papas o como dip con tostones."
      ],
      en: [
        "Put the almonds, garlic and torn bread in the food processor and grind fine.",
        "Add the peppers, vinegar, paprika and salt.",
        "With the processor running, drizzle in the oil until you have a thick sauce.",
        "If you want it looser, add 1 or 2 tablespoons of water.",
        "Serve with grilled chicken or fish, roasted vegetables, potatoes or as a dip with tostones."
      ]
    }
  },
  {
    id: "aderezo-cesar-queso-pais",
    category: "salsas",
    name: { es: "Aderezo César con Queso del País", en: "Caesar Dressing with Puerto Rican White Cheese" },
    active: 10, total: 10,
    servings: 8,
    ingredients: {
      es: [
        "½ taza de mayonesa",
        "¼ taza de queso parmesano rallado",
        "¼ taza de queso blanco del país, desmoronado",
        "2 dientes de ajo, majados",
        "2 cucharadas de jugo de limón",
        "1 cucharadita de mostaza",
        "1 cucharadita de salsa inglesa",
        "3 cucharadas de leche",
        "¼ cucharadita de pimienta"
      ],
      en: [
        "½ cup mayonnaise",
        "¼ cup grated Parmesan cheese",
        "¼ cup crumbled Puerto Rican white cheese (queso del país)",
        "2 garlic cloves, mashed",
        "2 tablespoons lime juice",
        "1 teaspoon mustard",
        "1 teaspoon Worcestershire sauce",
        "3 tablespoons milk",
        "¼ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Bata la mayonesa con el ajo, el limón, la mostaza y la salsa inglesa.",
        "Añada los dos quesos y mezcle.",
        "Afloje con la leche, una cucharada a la vez, hasta que tenga la consistencia que le guste.",
        "Sazone con la pimienta (no necesita sal: los quesos y la salsa inglesa ya traen).",
        "Úsela con lechuga romana y croutones, o con pollo a la plancha. Se hace con mayonesa, sin huevo crudo; dura 4 días en la nevera."
      ],
      en: [
        "Whisk the mayonnaise with the garlic, lime juice, mustard and Worcestershire sauce.",
        "Add both cheeses and mix.",
        "Thin with the milk, one tablespoon at a time, to the consistency you like.",
        "Season with the pepper (it needs no salt: the cheeses and Worcestershire already have it).",
        "Use it with romaine lettuce and croutons, or with grilled chicken. It's made with mayonnaise, no raw egg; it keeps 4 days in the fridge."
      ]
    }
  },
  {
    id: "dip-guayaba-picante",
    category: "salsas",
    name: { es: "Dip de Guayaba Picante para Frituras", en: "Spicy Guava Dip for Fritters" },
    active: 15, total: 15,
    servings: 10,
    ingredients: {
      es: [
        "8 onzas de pasta de guayaba, en cubitos",
        "½ taza de agua",
        "2 cucharadas de vinagre",
        "1 cucharada de jugo de limón",
        "2 cucharaditas de pique",
        "1 diente de ajo, majado",
        "¼ cucharadita de sal"
      ],
      en: [
        "8 ounces guava paste, diced",
        "½ cup water",
        "2 tablespoons vinegar",
        "1 tablespoon lime juice",
        "2 teaspoons Puerto Rican hot sauce (pique)",
        "1 garlic clove, mashed",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Ponga la guayaba con el agua en una olla pequeña a fuego bajo.",
        "Mueva 6 a 8 minutos, aplastando, hasta que la guayaba se derrita del todo.",
        "Retire del fuego y añada el vinagre, el limón, el pique, el ajo y la sal.",
        "Deje enfriar: espesa al refrescar. Si queda muy espesa, añada una cucharada de agua.",
        "Sírvalo con alcapurrias, bacalaítos, sorullitos, alitas o pinchos. Ajuste el pique a su gusto (para niños, sin pique)."
      ],
      en: [
        "Put the guava paste and water in a small pot over low heat.",
        "Stir 6 to 8 minutes, mashing, until the guava melts completely.",
        "Remove from the heat and add the vinegar, lime juice, hot sauce, garlic and salt.",
        "Let it cool: it thickens as it cools. If it gets too thick, add a tablespoon of water.",
        "Serve with alcapurrias, bacalaítos, sorullitos, wings or skewers. Adjust the hot sauce to taste (for kids, leave it out)."
      ]
    }
  },
  {
    id: "vinagreta-cremosa-ajo-asado",
    category: "salsas",
    name: { es: "Vinagreta Cremosa de Ajo Asado y Limón", en: "Creamy Roasted Garlic and Lime Vinaigrette" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "1 cabeza de ajo",
        "½ taza de aceite de oliva",
        "¼ taza de jugo de limón",
        "¼ taza de yogur natural",
        "1 cucharadita de mostaza",
        "1 cucharadita de miel",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta"
      ],
      en: [
        "1 head of garlic",
        "½ cup olive oil",
        "¼ cup lime juice",
        "¼ cup plain yogurt",
        "1 teaspoon mustard",
        "1 teaspoon honey",
        "½ teaspoon salt",
        "¼ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Corte la punta de la cabeza de ajo, póngale una cucharadita del aceite y envuélvala en papel de aluminio.",
        "Hornee a 400 °F unos 35 minutos, hasta que los dientes estén blandos y dorados. Deje enfriar.",
        "Exprima los dientes de ajo asado en la licuadora.",
        "Añada el resto del aceite, el limón, el yogur, la mostaza, la miel, la sal y la pimienta, y licúe hasta que quede cremosa.",
        "Úsela en ensaladas verdes, de papa o de pasta, o sobre pollo y vegetales asados. Dura 5 días en la nevera."
      ],
      en: [
        "Cut the top off the garlic head, drizzle with a teaspoon of the oil and wrap in foil.",
        "Bake at 400 °F about 35 minutes, until the cloves are soft and golden. Let cool.",
        "Squeeze the roasted garlic cloves into the blender.",
        "Add the rest of the oil, the lime juice, yogurt, mustard, honey, salt and pepper, and blend until creamy.",
        "Use it on green, potato or pasta salads, or over chicken and roasted vegetables. It keeps 5 days in the fridge."
      ]
    }
  },
  {
    id: "huevos-benedictinos-boricuas",
    category: "huevos",
    name: { es: "Huevos Benedictinos Boricuas en Pan Sobao", en: "Puerto Rican Eggs Benedict on Pan Sobao" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "4 rebanadas gruesas de pan sobao",
        "4 lonjas de jamón",
        "4 huevos",
        "1 cucharada de vinagre",
        "Salsa holandesa: 3 yemas de huevo, 2 cucharadas de jugo de limón y ½ taza de mantequilla derretida (vea «Salsa Holandesa Fácil con Limón»)",
        "1 cucharada de cilantro picado",
        "1 pizca de pimentón"
      ],
      en: [
        "4 thick slices pan sobao",
        "4 slices ham",
        "4 eggs",
        "1 tablespoon vinegar",
        "Hollandaise: 3 egg yolks, 2 tablespoons lime juice and ½ cup melted butter (see “Easy Hollandaise Sauce with Lime”)",
        "1 tablespoon chopped cilantro",
        "1 pinch paprika"
      ]
    },
    steps: {
      es: [
        "Prepare la salsa holandesa y manténgala tibia sobre el agua caliente, sin fuego.",
        "Tueste el pan sobao y dore el jamón en un sartén 1 minuto por lado.",
        "Hierva agua con el vinagre en una olla honda y baje el fuego para que apenas burbujee.",
        "Rompa cada huevo en una taza, deslícelo al agua y cocine 4 minutos, hasta que la clara esté firme. Sáquelo con una espumadera.",
        "Monte el pan, el jamón y el huevo, cubra con la holandesa y adorne con cilantro y pimentón. Si cocina para embarazadas o niños pequeños, deje la yema firme."
      ],
      en: [
        "Make the hollandaise and keep it warm over the hot water, heat off.",
        "Toast the pan sobao and brown the ham in a skillet 1 minute per side.",
        "Bring water with the vinegar to a boil in a deep pot and lower the heat to a bare simmer.",
        "Crack each egg into a cup, slide it into the water and cook 4 minutes, until the white is set. Lift it out with a slotted spoon.",
        "Stack the bread, ham and egg, top with hollandaise and garnish with cilantro and paprika. If cooking for pregnant women or small children, cook the yolk firm."
      ]
    }
  },
  {
    id: "arroz-huevo-frito-maduros",
    category: "huevos",
    name: { es: "Arroz Blanco con Huevo Frito y Maduros", en: "White Rice with Fried Egg and Sweet Plantains" },
    active: 25, total: 25,
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de arroz cocido",
        "1 plátano maduro",
        "2 cucharadas de aceite vegetal",
        "2 huevos",
        "1 pizca de sal",
        "1 pizca de pimienta",
        "½ aguacate, en lascas"
      ],
      en: [
        "2 cups cooked white rice",
        "1 ripe plantain",
        "2 tablespoons vegetable oil",
        "2 eggs",
        "1 pinch salt",
        "1 pinch pepper",
        "½ avocado, sliced"
      ]
    },
    steps: {
      es: [
        "Pele el maduro y córtelo en lascas diagonales.",
        "Fría las lascas en 1½ cucharadas de aceite a fuego medio, 3 minutos por lado, hasta que estén doradas. Escúrralas.",
        "En el mismo sartén, con el resto del aceite, fría los huevos hasta que la clara esté firme y la yema como le guste.",
        "Caliente el arroz y sírvalo con el huevo encima, sazonado con sal y pimienta.",
        "Acompañe con los maduros y el aguacate. Es el almuerzo rápido de toda la vida en Puerto Rico."
      ],
      en: [
        "Peel the ripe plantain and cut it into diagonal slices.",
        "Fry the slices in 1½ tablespoons of oil over medium heat, 3 minutes per side, until golden. Drain.",
        "In the same skillet, with the rest of the oil, fry the eggs until the white is set and the yolk is how you like it.",
        "Heat the rice and serve it with the egg on top, seasoned with salt and pepper.",
        "Serve with the plantains and avocado. It's the classic quick lunch in Puerto Rico."
      ]
    }
  },
  {
    id: "revoltillo-criollo-sofrito",
    category: "huevos",
    name: { es: "Revoltillo Criollo con Sofrito y Tomate", en: "Creole Scrambled Eggs with Sofrito and Tomato" },
    active: 15, total: 15,
    servings: 3,
    ingredients: {
      es: [
        "6 huevos",
        "1 cucharada de aceite de oliva",
        "2 cucharadas de sofrito",
        "1 tomate, picado",
        "¼ taza de pimiento verde picado",
        "2 cucharadas de leche",
        "¼ cucharadita de sal",
        "1 cucharada de cilantro picado"
      ],
      en: [
        "6 eggs",
        "1 tablespoon olive oil",
        "2 tablespoons sofrito",
        "1 tomato, chopped",
        "¼ cup chopped green pepper",
        "2 tablespoons milk",
        "¼ teaspoon salt",
        "1 tablespoon chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Bata los huevos con la leche y la sal.",
        "Caliente el aceite a fuego medio y sofría el sofrito y el pimiento 2 minutos.",
        "Añada el tomate y cocine 2 minutos más, hasta que suelte su jugo.",
        "Baje el fuego, vierta los huevos y mueva despacio con una espátula hasta que cuajen, cremosos pero sin partes líquidas.",
        "Termine con el cilantro. Sírvalo con pan de agua tostado o con tostones."
      ],
      en: [
        "Beat the eggs with the milk and salt.",
        "Heat the oil over medium heat and sauté the sofrito and pepper 2 minutes.",
        "Add the tomato and cook 2 more minutes, until it releases its juice.",
        "Lower the heat, pour in the eggs and stir slowly with a spatula until set, creamy but with no runny parts.",
        "Finish with the cilantro. Serve with toasted pan de agua or tostones."
      ]
    }
  },
  {
    id: "huevos-hervidos-duros-tiernos",
    category: "huevos",
    name: { es: "Huevos Hervidos Duros y Tiernos", en: "Hard- and Soft-Boiled Eggs" },
    active: 20, total: 20,
    servings: 6,
    ingredients: {
      es: [
        "6 huevos",
        "6 tazas de agua",
        "4 tazas de hielo",
        "1 pizca de sal"
      ],
      en: [
        "6 eggs",
        "6 cups water",
        "4 cups ice",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Hierva el agua en una olla y baje el fuego a medio para que hierva suave.",
        "Baje los huevos con una cuchara, uno a uno, para que no se rompan.",
        "Tiernos (yema cremosa): 7 minutos. Duros (yema firme): 11 minutos.",
        "Páselos enseguida a un tazón con agua y el hielo por 5 minutos: así se pelan fácil y la yema no se pone verdosa.",
        "Pélelos bajo el agua del grifo y sazone con la sal. Los duros, sin pelar, duran 7 días en la nevera; para embarazadas y niños pequeños, use los duros."
      ],
      en: [
        "Bring the water to a boil in a pot and lower the heat to medium for a gentle boil.",
        "Lower the eggs in with a spoon, one at a time, so they don't crack.",
        "Soft (creamy yolk): 7 minutes. Hard (firm yolk): 11 minutes.",
        "Move them right away to a bowl of water and the ice for 5 minutes: they peel easily and the yolk doesn't turn green.",
        "Peel them under running water and season with the salt. Unpeeled hard-boiled eggs keep 7 days in the fridge; for pregnant women and small children, use hard-boiled."
      ]
    }
  },
  {
    id: "ensalada-huevo-emparedados",
    category: "huevos",
    name: { es: "Ensalada de Huevo para Emparedados", en: "Egg Salad for Sandwiches" },
    active: 25, total: 165, wait: "frio",
    servings: 4,
    ingredients: {
      es: [
        "6 huevos duros, pelados",
        "¼ taza de mayonesa",
        "1 cucharadita de mostaza",
        "2 cucharadas de cebolla picada fina",
        "2 cucharadas de pimiento morrón picado",
        "1 cucharada de cilantro picado",
        "¼ cucharadita de sal",
        "¼ cucharadita de pimienta",
        "8 rebanadas de pan de molde"
      ],
      en: [
        "6 hard-boiled eggs, peeled",
        "¼ cup mayonnaise",
        "1 teaspoon mustard",
        "2 tablespoons finely chopped onion",
        "2 tablespoons chopped pimiento",
        "1 tablespoon chopped cilantro",
        "¼ teaspoon salt",
        "¼ teaspoon pepper",
        "8 slices sandwich bread"
      ]
    },
    steps: {
      es: [
        "Pique los huevos duros en pedacitos o aplástelos con un tenedor.",
        "Mezcle la mayonesa con la mostaza, la sal y la pimienta.",
        "Añada los huevos, la cebolla, el pimiento morrón y el cilantro, y mezcle con cuidado.",
        "Enfríe al menos 20 minutos antes de servir.",
        "Unte sobre el pan para 4 emparedados. Manténgala en la nevera y no la deje fuera más de 2 horas (1 hora si hace mucho calor)."
      ],
      en: [
        "Chop the hard-boiled eggs into small pieces or mash them with a fork.",
        "Mix the mayonnaise with the mustard, salt and pepper.",
        "Add the eggs, onion, pimiento and cilantro, and mix gently.",
        "Chill at least 20 minutes before serving.",
        "Spread on the bread for 4 sandwiches. Keep it refrigerated and don't leave it out more than 2 hours (1 hour if it's very hot)."
      ]
    }
  },
  {
    id: "tortilla-vegetales-horno-queso-pais",
    category: "huevos",
    name: { es: "Tortilla de Vegetales al Horno con Queso del País", en: "Baked Vegetable Omelet with Puerto Rican White Cheese" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "8 huevos",
        "½ taza de leche",
        "1 cucharada de aceite de oliva",
        "1 calabacín, en cubitos",
        "1 pimiento rojo, en cubitos",
        "½ cebolla, picada",
        "2 tazas de espinaca",
        "½ taza de queso blanco del país, desmoronado",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta"
      ],
      en: [
        "8 eggs",
        "½ cup milk",
        "1 tablespoon olive oil",
        "1 zucchini, diced",
        "1 red bell pepper, diced",
        "½ onion, chopped",
        "2 cups spinach",
        "½ cup crumbled Puerto Rican white cheese (queso del país)",
        "½ teaspoon salt",
        "¼ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375 °F y engrase un molde de 9 pulgadas.",
        "Sofría la cebolla, el pimiento y el calabacín en el aceite 5 minutos; añada la espinaca y cocine 1 minuto hasta que se marchite.",
        "Bata los huevos con la leche, la sal y la pimienta.",
        "Ponga los vegetales en el molde, vierta los huevos y reparta el queso por encima.",
        "Hornee 20 a 25 minutos, hasta que el centro esté firme (160 °F). Deje reposar 5 minutos y corte en 6 pedazos; se come caliente o fría."
      ],
      en: [
        "Heat the oven to 375 °F and grease a 9-inch pan.",
        "Sauté the onion, pepper and zucchini in the oil 5 minutes; add the spinach and cook 1 minute until wilted.",
        "Beat the eggs with the milk, salt and pepper.",
        "Put the vegetables in the pan, pour in the eggs and scatter the cheese on top.",
        "Bake 20 to 25 minutes, until the center is set (160 °F). Rest 5 minutes and cut into 6 pieces; eat it hot or cold."
      ]
    }
  },
  {
    id: "omelet-espinaca-champinones",
    category: "huevos",
    name: { es: "Omelet de Espinaca y Champiñones", en: "Spinach and Mushroom Omelet" },
    active: 15, total: 15,
    servings: 1,
    ingredients: {
      es: [
        "2 huevos",
        "1 cucharada de leche",
        "1 cucharadita de mantequilla",
        "½ taza de champiñones en lascas",
        "½ taza de espinaca",
        "2 cucharadas de queso mozzarella rallado",
        "1 pizca de sal",
        "1 pizca de pimienta"
      ],
      en: [
        "2 eggs",
        "1 tablespoon milk",
        "1 teaspoon butter",
        "½ cup sliced mushrooms",
        "½ cup spinach",
        "2 tablespoons shredded mozzarella cheese",
        "1 pinch salt",
        "1 pinch pepper"
      ]
    },
    steps: {
      es: [
        "Bata los huevos con la leche, la sal y la pimienta.",
        "Derrita la mantequilla en un sartén antiadherente y dore los champiñones 3 minutos; añada la espinaca hasta que se marchite y sáquelos.",
        "Vierta los huevos en el mismo sartén a fuego medio-bajo y mueva el sartén para cubrir el fondo.",
        "Cuando los bordes cuajen y el centro esté casi firme (unos 3 minutos), ponga los vegetales y el queso en una mitad.",
        "Doble el omelet, cocine 1 minuto más hasta que el queso se derrita y sírvalo."
      ],
      en: [
        "Beat the eggs with the milk, salt and pepper.",
        "Melt the butter in a nonstick skillet and brown the mushrooms 3 minutes; add the spinach until wilted and remove them.",
        "Pour the eggs into the same skillet over medium-low heat and tilt to cover the bottom.",
        "When the edges set and the center is almost firm (about 3 minutes), put the vegetables and cheese on one half.",
        "Fold the omelet, cook 1 more minute until the cheese melts, and serve."
      ]
    }
  },
  {
    id: "huevos-flamenca-jamon-guisantes",
    category: "huevos",
    name: { es: "Huevos a la Flamenca con Jamón y Guisantes", en: "Flamenco-Style Eggs with Ham and Peas" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "2 cucharadas de aceite de oliva",
        "1 cebolla, picada",
        "2 dientes de ajo, picados",
        "1 taza de jamón en cubitos",
        "1 lata de 15 onzas de salsa de tomate",
        "1 taza de guisantes",
        "½ cucharadita de pimentón",
        "¼ cucharadita de sal",
        "8 huevos",
        "1 cucharada de perejil picado"
      ],
      en: [
        "2 tablespoons olive oil",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "1 cup diced ham",
        "1 15-ounce can tomato sauce",
        "1 cup peas",
        "½ teaspoon paprika",
        "¼ teaspoon salt",
        "8 eggs",
        "1 tablespoon chopped parsley"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375 °F.",
        "Sofría la cebolla y el ajo en el aceite 4 minutos; añada el jamón y dore 2 minutos.",
        "Agregue la salsa de tomate, los guisantes, el pimentón y la sal, y cocine 5 minutos.",
        "Pase la salsa a un molde o a cazuelitas, haga 8 huecos y rompa un huevo en cada uno.",
        "Hornee 12 a 15 minutos, hasta que las claras estén firmes. Adorne con perejil y sirva con pan para mojar."
      ],
      en: [
        "Heat the oven to 375 °F.",
        "Sauté the onion and garlic in the oil 4 minutes; add the ham and brown 2 minutes.",
        "Add the tomato sauce, peas, paprika and salt, and cook 5 minutes.",
        "Move the sauce to a baking dish or small casseroles, make 8 wells and crack an egg into each.",
        "Bake 12 to 15 minutes, until the whites are set. Garnish with parsley and serve with bread for dipping."
      ]
    }
  },
  // ---------- Tanda 52: más postres (9) y bizcochos (7) ----------
  {
    id: "flan-guineo",
    category: "postres",
    name: { es: "Flan de Guineo", en: "Banana Flan" },
    active: 75, total: 315, wait: "frio",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar para el caramelo",
        "3 guineos bien maduros",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela",
        "1 pizca de sal"
      ],
      en: [
        "1 cup sugar for the caramel",
        "3 very ripe bananas",
        "1 can (14 oz) condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "½ teaspoon cinnamon",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F. Derrita el azúcar en el molde de flan a fuego medio, moviendo, hasta que tome color ámbar, y cubra el fondo y los lados.",
        "Licúe los guineos con la leche condensada, la leche evaporada, los huevos, la vainilla, la canela y la sal hasta que quede liso.",
        "Cuele sobre el caramelo para que el flan quede fino.",
        "Hornee a baño de María 1 hora, hasta que al mover el molde el centro tiemble apenas y un cuchillo salga limpio.",
        "Deje enfriar y refrigere 4 horas antes de voltearlo. Los guineos con manchas negras dan más sabor."
      ],
      en: [
        "Heat the oven to 350 °F. Melt the sugar in the flan mold over medium heat, stirring, until amber, and coat the bottom and sides.",
        "Blend the bananas with the condensed milk, evaporated milk, eggs, vanilla, cinnamon and salt until smooth.",
        "Strain over the caramel so the flan is silky.",
        "Bake in a water bath 1 hour, until the center barely jiggles and a knife comes out clean.",
        "Cool and refrigerate 4 hours before unmolding. Bananas with black spots give more flavor."
      ]
    }
  },
  {
    id: "tembleque-guayaba",
    category: "postres",
    name: { es: "Tembleque de Guayaba", en: "Guava Tembleque" },
    active: 20, total: 260, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 13.5 onzas de leche de coco",
        "4 onzas de pasta de guayaba en cubitos",
        "½ taza de maicena",
        "⅓ taza de azúcar",
        "1 pizca de sal",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cans (13.5 oz) coconut milk",
        "4 ounces guava paste, diced",
        "½ cup cornstarch",
        "⅓ cup sugar",
        "1 pinch salt",
        "1 teaspoon vanilla",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "Moje un molde o copas con agua fría.",
        "Caliente 1 taza de la leche de coco con la guayaba a fuego bajo hasta que se derrita.",
        "En otro envase, disuelva la maicena, el azúcar y la sal en el resto de la leche de coco fría. Únalo con la guayaba.",
        "Cocine a fuego medio, moviendo sin parar con cuchara de madera, hasta que hierva y espese bien, unos 10 minutos. Añada la vainilla.",
        "Vierta en el molde, refrigere 4 horas, voltee y espolvoree canela. Sale rosado, con el dulce de la guayaba y la suavidad del tembleque."
      ],
      en: [
        "Wet a mold or cups with cold water.",
        "Heat 1 cup of the coconut milk with the guava over low heat until melted.",
        "In another bowl, dissolve the cornstarch, sugar and salt in the rest of the cold coconut milk. Combine with the guava.",
        "Cook over medium heat, stirring constantly with a wooden spoon, until it boils and thickens well, about 10 minutes. Add the vanilla.",
        "Pour into the mold, refrigerate 4 hours, unmold and sprinkle with cinnamon. It turns pink, with guava sweetness and tembleque's softness."
      ]
    }
  },
  {
    id: "mousse-guayaba",
    category: "postres",
    name: { es: "Mousse de Guayaba", en: "Guava Mousse" },
    active: 20, total: 200, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "8 onzas de pasta de guayaba en cubitos",
        "¼ taza de agua",
        "1 cucharada de jugo de limón",
        "4 onzas de queso crema a temperatura ambiente",
        "1 taza de crema espesa para batir, fría",
        "2 cucharadas de azúcar",
        "6 galletas María trituradas"
      ],
      en: [
        "8 ounces guava paste, diced",
        "¼ cup water",
        "1 tablespoon lime juice",
        "4 ounces cream cheese, at room temperature",
        "1 cup cold heavy whipping cream",
        "2 tablespoons sugar",
        "6 Maria cookies, crushed"
      ]
    },
    steps: {
      es: [
        "Derrita la guayaba con el agua y el limón a fuego bajo hasta tener un puré. Deje enfriar por completo.",
        "Bata el queso crema hasta que esté suave y añada el puré de guayaba poco a poco.",
        "Bata la crema con el azúcar hasta que forme picos firmes.",
        "Incorpore la crema a la guayaba en tres partes, con movimientos envolventes.",
        "Sirva en copas con las galletas María trituradas por encima y refrigere 3 horas. Sabe a pastelillo de guayaba y queso."
      ],
      en: [
        "Melt the guava with the water and lime juice over low heat into a purée. Cool completely.",
        "Beat the cream cheese until smooth and add the guava purée little by little.",
        "Whip the cream with the sugar to stiff peaks.",
        "Fold the cream into the guava in three parts.",
        "Spoon into cups, top with the crushed Maria cookies and refrigerate 3 hours. It tastes like a guava-and-cheese pastry."
      ]
    }
  },
  {
    id: "tiramisu-cafe-boricua",
    category: "postres",
    name: { es: "Tiramisú de Café Boricua", en: "Puerto Rican Coffee Tiramisu" },
    active: 30, total: 390, wait: "frio",
    servings: 10,
    ingredients: {
      es: [
        "1½ tazas de café puertorriqueño colado fuerte, frío",
        "2 cucharadas de azúcar para el café",
        "8 onzas de queso crema a temperatura ambiente",
        "½ taza de leche condensada",
        "1½ tazas de crema espesa para batir, fría",
        "1 cucharadita de vainilla",
        "2 paquetes de 7 onzas de galletas soletillas (ladyfingers)",
        "2 cucharadas de cacao en polvo sin azúcar"
      ],
      en: [
        "1½ cups strong brewed Puerto Rican coffee, cold",
        "2 tablespoons sugar for the coffee",
        "8 ounces cream cheese, at room temperature",
        "½ cup condensed milk",
        "1½ cups cold heavy whipping cream",
        "1 teaspoon vanilla",
        "2 packages (7 oz) ladyfingers",
        "2 tablespoons unsweetened cocoa powder"
      ]
    },
    steps: {
      es: [
        "Disuelva el azúcar en el café frío.",
        "Bata el queso crema con la leche condensada y la vainilla hasta que quede liso. Aparte, bata la crema hasta que forme picos y únala al queso con movimientos envolventes.",
        "Pase las soletillas rápido por el café (1 segundo por lado, para que no se desbaraten) y haga una capa en un molde de 8 × 8 pulgadas.",
        "Cubra con la mitad de la crema y repita con otra capa de soletillas y el resto de la crema.",
        "Refrigere al menos 6 horas y espolvoree el cacao al servir. No lleva huevo crudo (las soletillas sí llevan huevo, ya horneado); la cafeína del café queda en el postre."
      ],
      en: [
        "Dissolve the sugar in the cold coffee.",
        "Beat the cream cheese with the condensed milk and vanilla until smooth. Separately, whip the cream to peaks and fold it into the cheese.",
        "Dip the ladyfingers quickly in the coffee (1 second per side, so they don't fall apart) and make a layer in an 8 × 8-inch dish.",
        "Cover with half the cream and repeat with another layer of ladyfingers and the rest of the cream.",
        "Refrigerate at least 6 hours and dust with cocoa to serve. It has no raw egg (the ladyfingers do contain baked egg); the coffee's caffeine stays in the dessert."
      ]
    }
  },
  {
    id: "crema-catalana-coco",
    category: "postres",
    name: { es: "Crema Catalana de Coco", en: "Coconut Crème Brûlée (Crema Catalana)" },
    active: 30, total: 270, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "1 lata de 13.5 onzas de leche de coco",
        "1 taza de leche",
        "5 yemas de huevo",
        "½ taza de azúcar",
        "2 cucharadas de maicena",
        "1 cáscara de limón",
        "1 raja de canela",
        "6 cucharadas de azúcar para quemar"
      ],
      en: [
        "1 can (13.5 oz) coconut milk",
        "1 cup milk",
        "5 egg yolks",
        "½ cup sugar",
        "2 tablespoons cornstarch",
        "1 lime peel",
        "1 cinnamon stick",
        "6 tablespoons sugar for torching"
      ]
    },
    steps: {
      es: [
        "Caliente la leche de coco y la leche con la cáscara de limón y la canela hasta que empiece a humear. Apague y deje reposar 10 minutos; saque la cáscara y la canela.",
        "Bata las yemas con el azúcar y la maicena hasta que blanqueen.",
        "Añada la leche caliente poco a poco, batiendo, y vuelva al fuego medio-bajo moviendo sin parar hasta que espese y hierva 1 minuto (así la yema queda cocida).",
        "Reparta en 6 cazuelitas y refrigere 4 horas.",
        "Antes de servir, cubra cada una con 1 cucharada de azúcar y quémela con un soplete (o bajo el asador del horno 1 a 2 minutos, vigilando) hasta tener una costra dorada."
      ],
      en: [
        "Heat the coconut milk and milk with the lime peel and cinnamon until steaming. Turn off and let steep 10 minutes; remove the peel and cinnamon.",
        "Beat the yolks with the sugar and cornstarch until pale.",
        "Add the hot milk gradually, whisking, and return to medium-low heat stirring constantly until it thickens and boils 1 minute (so the yolks are cooked).",
        "Divide among 6 ramekins and refrigerate 4 hours.",
        "Before serving, top each with 1 tablespoon sugar and torch it (or broil 1 to 2 minutes, watching) until a golden crust forms."
      ]
    }
  },
  {
    id: "helado-pina-colada",
    category: "postres",
    name: { es: "Helado de Piña Colada (Sin Máquina, Sin Alcohol)", en: "No-Churn Piña Colada Ice Cream (Alcohol-Free)" },
    active: 15, total: 375, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de crema espesa para batir, fría",
        "1 lata de 14 onzas de leche condensada",
        "½ taza de crema de coco",
        "1½ tazas de piña triturada, bien escurrida",
        "½ taza de coco rallado tostado",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "2 cups cold heavy whipping cream",
        "1 can (14 oz) condensed milk",
        "½ cup cream of coconut",
        "1½ cups crushed pineapple, well drained",
        "½ cup toasted shredded coconut",
        "1 teaspoon vanilla",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Mezcle la leche condensada, la crema de coco, la vainilla y la sal.",
        "Exprima bien la piña en un colador (el agua de la piña hace cristales de hielo).",
        "Bata la crema fría hasta que forme picos firmes e incorpórela a la mezcla de coco con movimientos envolventes.",
        "Añada la piña y la mitad del coco tostado, pase a un envase con tapa y espolvoree el resto del coco.",
        "Congele 6 horas y saque 5 minutos antes de servir. Sabe a piña colada, sin ron, para toda la familia."
      ],
      en: [
        "Mix the condensed milk, cream of coconut, vanilla and salt.",
        "Squeeze the pineapple well in a strainer (pineapple juice makes ice crystals).",
        "Whip the cold cream to stiff peaks and fold into the coconut mixture.",
        "Add the pineapple and half the toasted coconut, transfer to a lidded container and sprinkle with the rest of the coconut.",
        "Freeze 6 hours and take out 5 minutes before serving. It tastes like a piña colada, without rum, for the whole family."
      ]
    }
  },
  {
    id: "majarete-chocolate",
    category: "postres",
    name: { es: "Majarete de Chocolate", en: "Chocolate Majarete" },
    active: 25, total: 205, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "1 lata de 13.5 onzas de leche de coco",
        "2 tazas de leche",
        "½ taza de harina de arroz",
        "½ taza de azúcar",
        "3 onzas de chocolate de taza (de hacer chocolate caliente), rallado",
        "1 raja de canela",
        "1 pizca de sal",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "1 can (13.5 oz) coconut milk",
        "2 cups milk",
        "½ cup rice flour",
        "½ cup sugar",
        "3 ounces drinking chocolate (for hot chocolate), grated",
        "1 cinnamon stick",
        "1 pinch salt",
        "1 teaspoon vanilla",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "En un caldero frío, disuelva la harina de arroz, el azúcar y la sal en la leche y la leche de coco hasta que no queden grumos.",
        "Añada el chocolate rallado y la canela en raja.",
        "Cocine a fuego medio, moviendo sin parar, hasta que el chocolate se derrita y la mezcla hierva y espese, unos 12 minutos.",
        "Saque la canela, añada la vainilla y vierta en un platón o en copas.",
        "Refrigere 3 horas y espolvoree canela. Es el majarete de siempre con el sabor del chocolate caliente de la abuela."
      ],
      en: [
        "In a cold caldero, dissolve the rice flour, sugar and salt in the milk and coconut milk until smooth.",
        "Add the grated chocolate and cinnamon stick.",
        "Cook over medium heat, stirring constantly, until the chocolate melts and the mixture boils and thickens, about 12 minutes.",
        "Remove the cinnamon, add the vanilla and pour into a dish or cups.",
        "Refrigerate 3 hours and sprinkle with cinnamon. It's the classic majarete with grandma's hot chocolate flavor."
      ]
    }
  },
  {
    id: "tarta-guineo-dulce-leche",
    category: "postres",
    name: { es: "Tarta de Guineo y Dulce de Leche (Sin Horno)", en: "No-Bake Banana Dulce de Leche Tart" },
    active: 30, total: 210, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de galletas María trituradas",
        "6 cucharadas de mantequilla derretida",
        "1 lata de 13.4 onzas de dulce de leche",
        "3 guineos maduros en ruedas",
        "1½ tazas de crema espesa para batir, fría",
        "2 cucharadas de azúcar",
        "1 cucharadita de canela",
        "1 onza de chocolate oscuro rallado"
      ],
      en: [
        "2 cups crushed Maria cookies",
        "6 tablespoons melted butter",
        "1 can (13.4 oz) dulce de leche",
        "3 ripe bananas, sliced",
        "1½ cups cold heavy whipping cream",
        "2 tablespoons sugar",
        "1 teaspoon cinnamon",
        "1 ounce dark chocolate, grated"
      ]
    },
    steps: {
      es: [
        "Mezcle las galletas trituradas con la mantequilla y apriételas en el fondo y los lados de un molde de pie de 9 pulgadas. Refrigere 20 minutos.",
        "Unte el dulce de leche sobre la base.",
        "Cubra con las ruedas de guineo.",
        "Bata la crema con el azúcar y la canela hasta que forme picos y extiéndala encima.",
        "Decore con el chocolate rallado y refrigere 3 horas. Sírvala el mismo día: el guineo se oscurece."
      ],
      en: [
        "Mix the crushed cookies with the butter and press into the bottom and sides of a 9-inch pie pan. Refrigerate 20 minutes.",
        "Spread the dulce de leche over the crust.",
        "Top with the banana slices.",
        "Whip the cream with the sugar and cinnamon to peaks and spread on top.",
        "Garnish with the grated chocolate and refrigerate 3 hours. Serve the same day: the banana darkens."
      ]
    }
  },
  {
    id: "trufas-chocolate-coco",
    category: "postres",
    name: { es: "Trufas de Chocolate y Coco", en: "Chocolate Coconut Truffles" },
    active: 30, total: 150, wait: "frio",
    servings: 24,
    ingredients: {
      es: [
        "8 onzas de chocolate semidulce picado",
        "½ taza de crema de coco",
        "1 cucharada de mantequilla",
        "1 cucharadita de vainilla",
        "1 pizca de sal",
        "1 taza de coco rallado tostado"
      ],
      en: [
        "8 ounces semisweet chocolate, chopped",
        "½ cup cream of coconut",
        "1 tablespoon butter",
        "1 teaspoon vanilla",
        "1 pinch salt",
        "1 cup toasted shredded coconut"
      ]
    },
    steps: {
      es: [
        "Caliente la crema de coco hasta que empiece a hervir y viértala sobre el chocolate picado. Deje reposar 2 minutos.",
        "Mezcle hasta que quede liso y brillante, y añada la mantequilla, la vainilla y la sal.",
        "Refrigere 2 horas, hasta que esté firme para formar bolitas.",
        "Con una cucharita, forme 24 bolitas y páselas por el coco tostado.",
        "Guárdelas en la nevera en un envase tapado hasta 1 semana. Son un regalo de Navidad fácil."
      ],
      en: [
        "Heat the cream of coconut until it starts to boil and pour over the chopped chocolate. Let sit 2 minutes.",
        "Stir until smooth and glossy, then add the butter, vanilla and salt.",
        "Refrigerate 2 hours, until firm enough to roll.",
        "With a teaspoon, shape 24 balls and roll them in the toasted coconut.",
        "Keep refrigerated in a covered container up to 1 week. They're an easy Christmas gift."
      ]
    }
  },
  {
    id: "bizcocho-batata-canela",
    category: "bizcochos",
    name: { es: "Bizcocho de Batata con Canela", en: "Sweet Potato Cinnamon Cake" },
    active: 75, total: 75,
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de batata cocida y majada",
        "2 tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de bicarbonato",
        "½ cucharadita de sal",
        "2 cucharaditas de canela",
        "½ cucharadita de nuez moscada",
        "1 taza de azúcar morena",
        "½ taza de aceite vegetal",
        "3 huevos",
        "½ taza de leche",
        "1 cucharadita de vainilla",
        "1 taza de azúcar en polvo",
        "2 cucharadas de leche para el glaseado"
      ],
      en: [
        "1½ cups cooked, mashed sweet potato (batata)",
        "2 cups all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon baking soda",
        "½ teaspoon salt",
        "2 teaspoons cinnamon",
        "½ teaspoon nutmeg",
        "1 cup brown sugar",
        "½ cup vegetable oil",
        "3 eggs",
        "½ cup milk",
        "1 teaspoon vanilla",
        "1 cup powdered sugar",
        "2 tablespoons milk for the glaze"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de tubo (bundt) de 10 pulgadas.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, la sal, la canela y la nuez moscada.",
        "Bata la batata con el azúcar morena, el aceite, los huevos, la leche y la vainilla.",
        "Incorpore la harina sin batir de más y hornee 45 a 50 minutos, hasta que un palillo salga limpio.",
        "Deje enfriar 15 minutos, desmolde y bañe con el azúcar en polvo mezclada con la leche y una pizca de canela."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 10-inch bundt pan.",
        "Sift the flour with the baking powder, baking soda, salt, cinnamon and nutmeg.",
        "Beat the sweet potato with the brown sugar, oil, eggs, milk and vanilla.",
        "Fold in the flour without overmixing and bake 45 to 50 minutes, until a toothpick comes out clean.",
        "Cool 15 minutes, unmold and drizzle with the powdered sugar mixed with the milk and a pinch of cinnamon."
      ]
    }
  },
  {
    id: "bizcocho-platano-maduro",
    category: "bizcochos",
    name: { es: "Bizcocho de Plátano Maduro", en: "Ripe Plantain Cake" },
    active: 70, total: 70,
    servings: 12,
    ingredients: {
      es: [
        "3 plátanos bien maduros (negros)",
        "2 tazas de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de bicarbonato",
        "½ cucharadita de sal",
        "1 cucharadita de canela",
        "½ taza de mantequilla derretida",
        "¾ taza de azúcar morena",
        "2 huevos",
        "½ taza de yogur natural",
        "1 cucharadita de vainilla",
        "½ taza de nueces picadas (opcional)"
      ],
      en: [
        "3 very ripe (black) plantains",
        "2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "1 teaspoon baking soda",
        "½ teaspoon salt",
        "1 teaspoon cinnamon",
        "½ cup melted butter",
        "¾ cup brown sugar",
        "2 eggs",
        "½ cup plain yogurt",
        "1 teaspoon vanilla",
        "½ cup chopped walnuts (optional)"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 9 pulgadas.",
        "Pele los plátanos y májelos bien (bien negros se majan fácil, como un guineo).",
        "Bata el plátano con la mantequilla, el azúcar morena, los huevos, el yogur y la vainilla.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, la sal y la canela, e incorpórela; añada las nueces si las usa.",
        "Hornee 40 a 45 minutos, hasta que un palillo salga limpio. Es más denso y menos dulce que el de guineo, con sabor a amarillo."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 9-inch pan.",
        "Peel the plantains and mash well (very black ones mash easily, like a banana).",
        "Beat the plantain with the butter, brown sugar, eggs, yogurt and vanilla.",
        "Sift the flour with the baking powder, baking soda, salt and cinnamon and fold in; add the walnuts if using.",
        "Bake 40 to 45 minutes, until a toothpick comes out clean. It's denser and less sweet than banana cake, with a ripe-plantain flavor."
      ]
    }
  },
  {
    id: "bizcocho-guanabana-crema",
    category: "bizcochos",
    name: { es: "Bizcocho de Guanábana con Crema", en: "Soursop Cream Cake" },
    active: 90, total: 210, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "2¼ tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "½ taza de mantequilla a temperatura ambiente",
        "1¼ tazas de azúcar",
        "3 huevos",
        "1 taza de pulpa de guanábana colada",
        "¼ taza de leche",
        "1 cucharadita de vainilla",
        "1½ tazas de crema espesa para batir, fría",
        "¼ taza de azúcar en polvo",
        "½ taza de pulpa de guanábana para la crema"
      ],
      en: [
        "2¼ cups all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "½ cup butter, at room temperature",
        "1¼ cups sugar",
        "3 eggs",
        "1 cup strained soursop pulp",
        "¼ cup milk",
        "1 teaspoon vanilla",
        "1½ cups cold heavy whipping cream",
        "¼ cup powdered sugar",
        "½ cup soursop pulp for the cream"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase dos moldes redondos de 8 pulgadas.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa y añada los huevos de uno en uno.",
        "Mezcle la guanábana, la leche y la vainilla. Añada la harina cernida con el polvo de hornear y la sal, alternando con la guanábana.",
        "Hornee 28 a 32 minutos, hasta que un palillo salga limpio. Deje enfriar por completo.",
        "Bata la crema con el azúcar en polvo hasta que forme picos e incorpore la guanábana. Rellene y cubra el bizcocho, y refrigere 2 horas."
      ],
      en: [
        "Heat the oven to 350 °F and grease two 8-inch round pans.",
        "Beat the butter with the sugar until creamy and add the eggs one at a time.",
        "Mix the soursop, milk and vanilla. Add the flour sifted with the baking powder and salt, alternating with the soursop.",
        "Bake 28 to 32 minutes, until a toothpick comes out clean. Cool completely.",
        "Whip the cream with the powdered sugar to peaks and fold in the soursop. Fill and frost the cake and refrigerate 2 hours."
      ]
    }
  },
  {
    id: "bizcocho-maiz-coco",
    category: "bizcochos",
    name: { es: "Bizcocho de Maíz con Coco", en: "Corn Coconut Cake" },
    active: 60, total: 60,
    servings: 12,
    ingredients: {
      es: [
        "1 taza de harina de maíz fina",
        "1 taza de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "1 lata de 13.5 onzas de leche de coco",
        "¾ taza de azúcar",
        "3 huevos",
        "¼ taza de mantequilla derretida",
        "1 lata de 15 onzas de maíz en grano, escurrido",
        "½ taza de coco rallado",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup fine cornmeal",
        "1 cup all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "1 can (13.5 oz) coconut milk",
        "¾ cup sugar",
        "3 eggs",
        "¼ cup melted butter",
        "1 can (15 oz) corn kernels, drained",
        "½ cup shredded coconut",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Licúe el maíz en grano con la leche de coco hasta que quede casi liso.",
        "Bata los huevos con el azúcar, la mantequilla y la vainilla, y añada lo licuado.",
        "Incorpore la harina de maíz, la harina de trigo, el polvo de hornear, la sal y el coco.",
        "Hornee 35 a 40 minutos, hasta que dore y un palillo salga limpio. Queda húmedo, entre bizcocho y majarete."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 13-inch pan.",
        "Blend the corn kernels with the coconut milk until almost smooth.",
        "Beat the eggs with the sugar, butter and vanilla, and add the blended corn.",
        "Fold in the cornmeal, flour, baking powder, salt and coconut.",
        "Bake 35 to 40 minutes, until golden and a toothpick comes out clean. It's moist, between a cake and a majarete."
      ]
    }
  },
  {
    id: "cupcakes-tembleque",
    category: "bizcochos",
    name: { es: "Cupcakes de Tembleque", en: "Tembleque Cupcakes" },
    active: 60, total: 120, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de harina de trigo",
        "1½ cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "½ taza de mantequilla a temperatura ambiente",
        "¾ taza de azúcar",
        "2 huevos",
        "½ taza de leche de coco",
        "1 cucharadita de vainilla",
        "1 taza de leche de coco para el tembleque",
        "3 cucharadas de maicena",
        "3 cucharadas de azúcar para el tembleque",
        "Canela en polvo para decorar"
      ],
      en: [
        "1½ cups all-purpose flour",
        "1½ teaspoons baking powder",
        "¼ teaspoon salt",
        "½ cup butter, at room temperature",
        "¾ cup sugar",
        "2 eggs",
        "½ cup coconut milk",
        "1 teaspoon vanilla",
        "1 cup coconut milk for the tembleque",
        "3 tablespoons cornstarch",
        "3 tablespoons sugar for the tembleque",
        "Ground cinnamon to garnish"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y ponga 12 capacillos en un molde de cupcakes.",
        "Bata la mantequilla con el azúcar, añada los huevos, y luego la harina, el polvo de hornear y la sal alternando con la leche de coco y la vainilla. Llene los capacillos ⅔ y hornee 18 a 20 minutos. Deje enfriar.",
        "Para el tembleque, disuelva la maicena y el azúcar en la leche de coco fría y cocine moviendo sin parar hasta que hierva y espese. Deje entibiar.",
        "Abra un hueco en el centro de cada cupcake con un cuchillo pequeño y rellénelo y cúbralo con el tembleque.",
        "Espolvoree canela y refrigere 1 hora para que el tembleque cuaje."
      ],
      en: [
        "Heat the oven to 350 °F and line a cupcake pan with 12 liners.",
        "Beat the butter with the sugar, add the eggs, then the flour, baking powder and salt alternating with the coconut milk and vanilla. Fill the liners ⅔ full and bake 18 to 20 minutes. Cool.",
        "For the tembleque, dissolve the cornstarch and sugar in the cold coconut milk and cook stirring constantly until it boils and thickens. Let cool slightly.",
        "Cut a hollow in the center of each cupcake with a small knife and fill and top with the tembleque.",
        "Sprinkle with cinnamon and refrigerate 1 hour so the tembleque sets."
      ]
    }
  },
  {
    id: "ponque-queso-crema",
    category: "bizcochos",
    name: { es: "Ponqué de Queso Crema", en: "Cream Cheese Pound Cake" },
    active: 90, total: 90,
    servings: 14,
    ingredients: {
      es: [
        "1 taza de mantequilla a temperatura ambiente",
        "8 onzas de queso crema a temperatura ambiente",
        "2½ tazas de azúcar",
        "6 huevos a temperatura ambiente",
        "3 tazas de harina de trigo",
        "¼ cucharadita de sal",
        "2 cucharaditas de vainilla",
        "1 cucharadita de ralladura de limón"
      ],
      en: [
        "1 cup butter, at room temperature",
        "8 ounces cream cheese, at room temperature",
        "2½ cups sugar",
        "6 eggs, at room temperature",
        "3 cups all-purpose flour",
        "¼ teaspoon salt",
        "2 teaspoons vanilla",
        "1 teaspoon lime zest"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 325 °F. Engrase y enharine un molde de tubo (bundt) de 10 pulgadas.",
        "Bata la mantequilla con el queso crema 2 minutos y añada el azúcar; bata 5 minutos más hasta que esté bien cremosa.",
        "Añada los huevos de uno en uno, batiendo después de cada uno.",
        "Incorpore la harina con la sal a velocidad baja, sólo hasta unir, y añada la vainilla y la ralladura.",
        "Hornee 1 hora 10 minutos a 1 hora 20 minutos, hasta que un palillo salga limpio. Deje enfriar 20 minutos antes de desmoldar. Es húmedo y aguanta varios días tapado."
      ],
      en: [
        "Heat the oven to 325 °F. Grease and flour a 10-inch bundt pan.",
        "Beat the butter with the cream cheese 2 minutes and add the sugar; beat 5 more minutes until very creamy.",
        "Add the eggs one at a time, beating after each.",
        "Fold in the flour with the salt on low speed, just until combined, and add the vanilla and zest.",
        "Bake 1 hour 10 minutes to 1 hour 20 minutes, until a toothpick comes out clean. Cool 20 minutes before unmolding. It's moist and keeps several days covered."
      ]
    }
  },
  {
    id: "bizcocho-jengibre-melao",
    category: "bizcochos",
    name: { es: "Bizcocho de Jengibre y Melao", en: "Ginger Cane Syrup Cake" },
    active: 60, total: 60,
    servings: 12,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "1½ cucharaditas de bicarbonato",
        "½ cucharadita de sal",
        "1 cucharada de jengibre en polvo",
        "1 cucharadita de canela",
        "¼ cucharadita de clavo en polvo",
        "1 cucharada de jengibre fresco rallado",
        "¾ taza de melao de caña",
        "½ taza de azúcar morena",
        "½ taza de aceite vegetal",
        "2 huevos",
        "1 taza de agua caliente"
      ],
      en: [
        "2½ cups all-purpose flour",
        "1½ teaspoons baking soda",
        "½ teaspoon salt",
        "1 tablespoon ground ginger",
        "1 teaspoon cinnamon",
        "¼ teaspoon ground cloves",
        "1 tablespoon grated fresh ginger",
        "¾ cup cane syrup (melao)",
        "½ cup brown sugar",
        "½ cup vegetable oil",
        "2 eggs",
        "1 cup hot water"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Cierna la harina con el bicarbonato, la sal y las especias.",
        "Bata el melao con el azúcar morena, el aceite, los huevos y el jengibre fresco.",
        "Añada la harina y, al final, el agua caliente (la masa queda líquida: así sale húmedo).",
        "Hornee 30 a 35 minutos, hasta que un palillo salga limpio. Sirva tibio con crema batida; huele a la Navidad de las cucas."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 13-inch pan.",
        "Sift the flour with the baking soda, salt and spices.",
        "Beat the cane syrup with the brown sugar, oil, eggs and fresh ginger.",
        "Add the flour and, last, the hot water (the batter is thin: that keeps it moist).",
        "Bake 30 to 35 minutes, until a toothpick comes out clean. Serve warm with whipped cream; it smells like Christmas cucas."
      ]
    }
  },
  // ---------- Tanda 53: más arroces (9) y habichuelas (7) ----------
  {
    id: "arroz-junto-habichuelas",
    category: "arroces",
    name: { es: "Arroz Junto con Habichuelas Rosadas", en: "Rice Cooked Together with Pink Beans (Arroz Junto)" },
    active: 50, total: 50,
    servings: 8,
    ingredients: {
      es: [
        "3 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "2 onzas de jamón de cocinar en cubitos",
        "½ taza de salsa de tomate",
        "1 cucharadita de comino",
        "1 lata de 15 onzas de habichuelas rosadas, con su líquido",
        "3 tazas de arroz grano mediano, lavado",
        "3½ tazas de agua",
        "1 cucharadita de sal",
        "1 hoja de laurel"
      ],
      en: [
        "3 tablespoons annatto oil",
        "½ cup sofrito",
        "2 ounces cooking ham, diced",
        "½ cup tomato sauce",
        "1 teaspoon cumin",
        "1 can (15 oz) pink beans, with their liquid",
        "3 cups medium-grain rice, rinsed",
        "3½ cups water",
        "1 teaspoon salt",
        "1 bay leaf"
      ]
    },
    steps: {
      es: [
        "En un caldero, sofría el jamón y el sofrito en el aceite de achiote 4 minutos.",
        "Añada la salsa de tomate, el comino y el laurel, y cocine 2 minutos.",
        "Añada las habichuelas con su líquido, el agua y la sal, y deje hervir. Pruebe el caldo: debe estar un poco salado.",
        "Añada el arroz, mezcle una vez y cocine a fuego medio hasta que el líquido baje al nivel del arroz. Tape y cocine a fuego bajo 20 minutos.",
        "Voltee de abajo hacia arriba, tape y cocine 10 minutos más. Es el arroz y las habichuelas en una sola olla, con su pegao."
      ],
      en: [
        "In a caldero, sauté the ham and sofrito in the annatto oil 4 minutes.",
        "Add the tomato sauce, cumin and bay leaf and cook 2 minutes.",
        "Add the beans with their liquid, the water and salt and bring to a boil. Taste the broth: it should be slightly salty.",
        "Add the rice, stir once and cook over medium heat until the liquid drops to the level of the rice. Cover and cook over low heat 20 minutes.",
        "Turn from the bottom up, cover and cook 10 more minutes. It's rice and beans in one pot, with its pegao."
      ]
    }
  },
  {
    id: "arroz-imperial",
    category: "arroces",
    name: { es: "Arroz Imperial Boricua", en: "Puerto Rican Arroz Imperial (Baked Chicken Rice)" },
    active: 45, total: 55, wait: "reposo",
    servings: 10,
    ingredients: {
      es: [
        "4 tazas de arroz amarillo cocido (con achiote)",
        "3 tazas de pollo mechado o guisado, desmenuzado",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "½ taza de mayonesa",
        "2 tazas de queso mozzarella rallado",
        "1 taza de queso cheddar rallado",
        "½ taza de pimientos morrones en tiras"
      ],
      en: [
        "4 cups cooked yellow rice (with annatto)",
        "3 cups shredded stewed or shredded chicken",
        "½ cup tomato sauce",
        "¼ cup chopped stuffed olives",
        "½ cup mayonnaise",
        "2 cups shredded mozzarella cheese",
        "1 cup shredded cheddar cheese",
        "½ cup roasted red pepper strips (pimientos morrones)"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Mezcle el pollo con la salsa de tomate y las aceitunas.",
        "Haga capas: la mitad del arroz, todo el pollo, la mitad de la mayonesa untada y la mitad de los quesos; luego el resto del arroz.",
        "Cubra con el resto de la mayonesa, los quesos y los pimientos morrones.",
        "Hornee 25 a 30 minutos hasta que el queso dore. Deje reposar 10 minutos. Es el plato de los compartires: se prepara con el arroz y el pollo del día anterior."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 13-inch dish.",
        "Mix the chicken with the tomato sauce and olives.",
        "Layer: half the rice, all the chicken, half the mayonnaise spread over, and half the cheeses; then the rest of the rice.",
        "Top with the rest of the mayonnaise, the cheeses and the roasted peppers.",
        "Bake 25 to 30 minutes until the cheese browns. Let rest 10 minutes. It's the potluck dish: made with the previous day's rice and chicken."
      ]
    }
  },
  {
    id: "arroz-blanco-coco",
    category: "arroces",
    name: { es: "Arroz Blanco con Leche de Coco", en: "Coconut Milk White Rice" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz grano largo, lavado",
        "1 lata de 13.5 onzas de leche de coco",
        "1¼ tazas de agua",
        "1 cucharadita de sal",
        "1 cucharada de aceite de coco",
        "2 dientes de ajo machacados"
      ],
      en: [
        "2 cups long-grain rice, rinsed",
        "1 can (13.5 oz) coconut milk",
        "1¼ cups water",
        "1 teaspoon salt",
        "1 tablespoon coconut oil",
        "2 garlic cloves, crushed"
      ]
    },
    steps: {
      es: [
        "Sofría el ajo en el aceite de coco 1 minuto en un caldero.",
        "Añada la leche de coco, el agua y la sal, y deje hervir.",
        "Añada el arroz, mezcle una vez y cocine destapado a fuego medio hasta que el líquido baje al nivel del arroz.",
        "Tape y cocine a fuego bajo 20 minutos sin destapar.",
        "Voltee con un tenedor y sirva. Es salado, no dulce: va con pescado, camarones o habichuelas negras."
      ],
      en: [
        "Sauté the garlic in the coconut oil 1 minute in a caldero.",
        "Add the coconut milk, water and salt and bring to a boil.",
        "Add the rice, stir once and cook uncovered over medium heat until the liquid drops to the level of the rice.",
        "Cover and cook over low heat 20 minutes without uncovering.",
        "Fluff with a fork and serve. It's savory, not sweet: serve with fish, shrimp or black beans."
      ]
    }
  },
  {
    id: "arroz-pescado-recao",
    category: "arroces",
    name: { es: "Arroz con Pescado y Recao", en: "Rice with Fish and Culantro" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de filetes de pescado firme (mero o dorado) en trozos",
        "1 limón",
        "3 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "2 tazas de arroz grano mediano, lavado",
        "1½ tazas de caldo de pescado o de vegetales y 1½ tazas de agua",
        "½ cucharadita de sal",
        "1 pimiento rojo en tiras",
        "8 hojas de recao picadas"
      ],
      en: [
        "1½ pounds firm fish fillets (grouper or mahi-mahi), in chunks",
        "1 lime",
        "3 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "2 cups medium-grain rice, rinsed",
        "1½ cups fish or vegetable broth and 1½ cups water",
        "½ teaspoon salt",
        "1 red bell pepper, in strips",
        "8 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Frote el pescado con el limón, enjuáguelo y refrigérelo mientras empieza el arroz.",
        "Sofría el sofrito en el aceite de achiote 3 minutos; añada la salsa de tomate y las aceitunas.",
        "Añada el caldo, el agua y la sal, deje hervir y añada el arroz. Cocine destapado hasta que el líquido baje al nivel del arroz.",
        "Acomode el pescado y el pimiento encima, tape y cocine a fuego bajo 20 minutos, sin voltear para que el pescado no se desbarate.",
        "Esparza el recao, tape 2 minutos y sirva con aguacate y limón."
      ],
      en: [
        "Rub the fish with the lime, rinse and refrigerate while you start the rice.",
        "Sauté the sofrito in the annatto oil 3 minutes; add the tomato sauce and olives.",
        "Add the broth, water and salt, bring to a boil and add the rice. Cook uncovered until the liquid drops to the level of the rice.",
        "Lay the fish and bell pepper on top, cover and cook over low heat 20 minutes, without stirring so the fish doesn't fall apart.",
        "Scatter the culantro, cover 2 minutes and serve with avocado and lime."
      ]
    }
  },
  {
    id: "arroz-carne-molida",
    category: "arroces",
    name: { es: "Arroz con Carne Molida", en: "Rice with Ground Beef" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "1 libra de carne molida de res",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de pasas (opcional)",
        "1 taza de guisantes (petit pois)",
        "3 tazas de arroz grano mediano, lavado",
        "4 tazas de agua",
        "1 cucharadita de sal"
      ],
      en: [
        "1 pound ground beef",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "2 tablespoons raisins (optional)",
        "1 cup green peas",
        "3 cups medium-grain rice, rinsed",
        "4 cups water",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Dore la carne con el adobo en el aceite de achiote, desbaratándola, 6 minutos.",
        "Añada el sofrito, la salsa de tomate, las aceitunas y las pasas, y cocine 3 minutos.",
        "Añada el agua y la sal, deje hervir y añada el arroz. Cocine destapado hasta que el líquido baje al nivel del arroz.",
        "Tape y cocine a fuego bajo 20 minutos. Añada los guisantes, voltee el arroz, tape y cocine 10 minutos más.",
        "Sirva con tostones o ensalada. Es un arroz de picadillo, rápido y económico."
      ],
      en: [
        "Brown the beef with the adobo in the annatto oil, breaking it up, 6 minutes.",
        "Add the sofrito, tomato sauce, olives and raisins and cook 3 minutes.",
        "Add the water and salt, bring to a boil and add the rice. Cook uncovered until the liquid drops to the level of the rice.",
        "Cover and cook over low heat 20 minutes. Add the peas, turn the rice, cover and cook 10 more minutes.",
        "Serve with tostones or salad. It's a picadillo rice, quick and inexpensive."
      ]
    }
  },
  {
    id: "arroz-chuletas-ahumadas",
    category: "arroces",
    name: { es: "Arroz con Chuletas Ahumadas", en: "Rice with Smoked Pork Chops" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "1 libra de chuletas ahumadas, sin hueso y en cubos",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 lata de 15 onzas de gandules verdes, escurridos",
        "3 tazas de arroz grano mediano, lavado",
        "4 tazas de agua",
        "1 pizca de sal"
      ],
      en: [
        "1 pound boneless smoked pork chops, cubed",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "1 can (15 oz) green pigeon peas, drained",
        "3 cups medium-grain rice, rinsed",
        "4 cups water",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Dore las chuletas en el aceite de achiote 5 minutos.",
        "Añada el sofrito y la salsa de tomate, y cocine 3 minutos.",
        "Añada los gandules, el agua y la sal (poca: la chuleta ahumada ya es salada) y deje hervir.",
        "Añada el arroz y cocine destapado hasta que el líquido baje al nivel del arroz; tape y cocine a fuego bajo 20 minutos.",
        "Voltee, tape y cocine 10 minutos más. El ahumado de la chuleta perfuma todo el arroz."
      ],
      en: [
        "Brown the pork chops in the annatto oil 5 minutes.",
        "Add the sofrito and tomato sauce and cook 3 minutes.",
        "Add the pigeon peas, water and salt (a little: smoked chops are already salty) and bring to a boil.",
        "Add the rice and cook uncovered until the liquid drops to the level of the rice; cover and cook over low heat 20 minutes.",
        "Turn, cover and cook 10 more minutes. The smoky chops perfume all the rice."
      ]
    }
  },
  {
    id: "pegao-crujiente",
    category: "arroces",
    name: { es: "Pegao Crujiente de Arroz", en: "Crispy Rice Pegao" },
    active: 40, total: 40,
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de arroz grano mediano, lavado",
        "2½ tazas de agua",
        "1 cucharadita de sal",
        "3 cucharadas de aceite de achiote",
        "1 diente de ajo machacado"
      ],
      en: [
        "2 cups medium-grain rice, rinsed",
        "2½ cups water",
        "1 teaspoon salt",
        "3 tablespoons annatto oil",
        "1 garlic clove, crushed"
      ]
    },
    steps: {
      es: [
        "En un caldero de aluminio o de hierro, caliente el aceite con el ajo 1 minuto.",
        "Añada el agua y la sal, deje hervir, añada el arroz y cocine destapado hasta que el líquido baje al nivel del arroz.",
        "Tape y cocine a fuego bajo 20 minutos. No voltee el arroz.",
        "Suba el fuego a medio 8 a 10 minutos más, sin destapar, hasta que huela a tostado (no a quemado).",
        "Saque el arroz suelto para otra comida y despegue el pegao del fondo con una cuchara de metal, en pedazos. Se come solo, con habichuelas por encima o con un poco de sal."
      ],
      en: [
        "In an aluminum or cast-iron caldero, heat the oil with the garlic 1 minute.",
        "Add the water and salt, bring to a boil, add the rice and cook uncovered until the liquid drops to the level of the rice.",
        "Cover and cook over low heat 20 minutes. Don't turn the rice.",
        "Raise the heat to medium 8 to 10 more minutes, without uncovering, until it smells toasted (not burnt).",
        "Remove the loose rice for another meal and pry the pegao off the bottom with a metal spoon, in pieces. Eat it on its own, topped with beans, or with a little salt."
      ]
    }
  },
  {
    id: "arroz-lentejas-cebolla",
    category: "arroces",
    name: { es: "Arroz con Lentejas y Cebolla Caramelizada", en: "Rice and Lentils with Caramelized Onions" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: [
        "1 taza de lentejas secas, lavadas",
        "5 tazas de agua",
        "1½ tazas de arroz grano largo, lavado",
        "3 cebollas grandes en ruedas finas",
        "¼ taza de aceite de oliva",
        "1 cucharadita de comino",
        "½ cucharadita de canela",
        "1½ cucharaditas de sal",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "1 cup dried lentils, rinsed",
        "5 cups water",
        "1½ cups long-grain rice, rinsed",
        "3 large onions, thinly sliced",
        "¼ cup olive oil",
        "1 teaspoon cumin",
        "½ teaspoon cinnamon",
        "1½ teaspoons salt",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Hierva las lentejas en el agua 15 minutos, hasta que estén casi blandas. No las escurra.",
        "Mientras, cocine la cebolla en el aceite a fuego medio-bajo 25 minutos, moviendo a menudo, hasta que esté bien dorada.",
        "Saque la mitad de la cebolla. A la otra mitad, añada el comino y la canela, y luego las lentejas con su agua y la sal.",
        "Cuando hierva, añada el arroz, tape y cocine a fuego bajo 20 minutos hasta que se seque.",
        "Sirva con la cebolla reservada y el perejil por encima. Es vegano, con proteína de las lentejas; va con ensalada de tomate o yogur."
      ],
      en: [
        "Boil the lentils in the water 15 minutes, until almost tender. Don't drain.",
        "Meanwhile, cook the onions in the oil over medium-low heat 25 minutes, stirring often, until deeply browned.",
        "Remove half the onions. To the other half, add the cumin and cinnamon, then the lentils with their water and the salt.",
        "When it boils, add the rice, cover and cook over low heat 20 minutes until dry.",
        "Serve with the reserved onions and parsley on top. It's vegan, with protein from the lentils; serve with tomato salad or yogurt."
      ]
    }
  },
  {
    id: "arroz-pavo",
    category: "arroces",
    name: { es: "Arroz con Pavo (con el Pavo que Sobra)", en: "Rice with Leftover Turkey" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de pavo asado desmenuzado",
        "3 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "3 tazas de arroz grano mediano, lavado",
        "3 tazas de caldo de pollo y 1 taza de agua",
        "½ cucharadita de sal",
        "1 taza de guisantes (petit pois)"
      ],
      en: [
        "3 cups shredded roast turkey",
        "3 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "3 cups medium-grain rice, rinsed",
        "3 cups chicken broth and 1 cup water",
        "½ teaspoon salt",
        "1 cup green peas"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite de achiote 3 minutos. Añada la salsa de tomate, las aceitunas y las alcaparras.",
        "Añada el caldo, el agua y la sal, y deje hervir.",
        "Añada el arroz y cocine destapado hasta que el líquido baje al nivel del arroz.",
        "Acomode el pavo encima, tape y cocine a fuego bajo 20 minutos. Añada los guisantes, voltee, tape y cocine 10 minutos más.",
        "Es como el arroz con pollo, con el pavo de Acción de Gracias o de Navidad. Use el pavo dentro de 3 o 4 días de guardado en la nevera."
      ],
      en: [
        "Sauté the sofrito in the annatto oil 3 minutes. Add the tomato sauce, olives and capers.",
        "Add the broth, water and salt and bring to a boil.",
        "Add the rice and cook uncovered until the liquid drops to the level of the rice.",
        "Lay the turkey on top, cover and cook over low heat 20 minutes. Add the peas, turn, cover and cook 10 more minutes.",
        "It's like arroz con pollo, with Thanksgiving or Christmas turkey. Use the turkey within 3 or 4 days in the fridge."
      ]
    }
  },
  {
    id: "habichuelas-rosadas-desde-cero",
    category: "granos",
    name: { es: "Habichuelas Rosadas desde Cero (Secas, en Olla de Presión)", en: "Pink Beans from Scratch (Dried, Pressure Cooker)" },
    active: 75, total: 555, wait: "remojo",
    servings: 8,
    ingredients: {
      es: [
        "1 libra de habichuelas rosadas secas",
        "8 tazas de agua para el remojo",
        "6 tazas de agua para cocinar",
        "1 hoja de laurel",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 libra de calabaza en cubos",
        "1 papa en cubos",
        "1½ cucharaditas de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "1 pound dried pink beans",
        "8 cups water for soaking",
        "6 cups water for cooking",
        "1 bay leaf",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "1 pound calabaza (West Indian pumpkin), cubed",
        "1 potato, cubed",
        "1½ teaspoons salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Escoja las habichuelas (quite piedritas y las dañadas), lávelas y remójelas en el agua de remojo 8 horas o toda la noche. Bote esa agua.",
        "En la olla de presión, cocínelas con las 6 tazas de agua y el laurel 25 minutos a presión alta; deje que la presión baje sola. Sin olla de presión, hiérvalas tapadas 1½ horas.",
        "En un sartén, sofría el sofrito en el aceite 3 minutos y añada la salsa de tomate.",
        "Pase el sofrito a las habichuelas con la calabaza, la papa y la sal, y cocine destapado a fuego medio 25 minutos, hasta que la calabaza se deshaga y el caldo espese.",
        "Añada el recao y sirva sobre arroz blanco. Salen más baratas y menos saladas que las de lata; se congelan hasta 3 meses."
      ],
      en: [
        "Sort the beans (remove pebbles and bad ones), rinse and soak in the soaking water 8 hours or overnight. Discard that water.",
        "In the pressure cooker, cook them with the 6 cups water and the bay leaf 25 minutes at high pressure; let the pressure release naturally. Without a pressure cooker, simmer covered 1½ hours.",
        "In a skillet, sauté the sofrito in the oil 3 minutes and add the tomato sauce.",
        "Add the sofrito to the beans with the calabaza, potato and salt and cook uncovered over medium heat 25 minutes, until the calabaza falls apart and the broth thickens.",
        "Add the culantro and serve over white rice. They're cheaper and less salty than canned; they freeze up to 3 months."
      ]
    }
  },
  {
    id: "potaje-habichuelas-blancas",
    category: "granos",
    name: { es: "Potaje de Habichuelas Blancas con Repollo y Chorizo", en: "White Bean Stew with Cabbage and Chorizo" },
    active: 50, total: 50,
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas blancas, con su líquido",
        "4 onzas de chorizo español en ruedas",
        "1 cucharada de aceite de oliva",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "3 tazas de repollo picado",
        "1 libra de papas en cubos",
        "4 tazas de agua",
        "½ cucharadita de pimentón",
        "½ cucharadita de sal"
      ],
      en: [
        "2 cans (15 oz) white beans, with their liquid",
        "4 ounces Spanish chorizo, sliced",
        "1 tablespoon olive oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "3 cups chopped cabbage",
        "1 pound potatoes, cubed",
        "4 cups water",
        "½ teaspoon paprika",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Dore el chorizo en el aceite 3 minutos para que suelte su grasa roja.",
        "Añada el sofrito, la salsa de tomate y el pimentón, y cocine 3 minutos.",
        "Añada las habichuelas, las papas, el repollo, el agua y la sal.",
        "Cocine tapado a fuego medio-bajo 30 minutos, hasta que las papas estén blandas y el repollo suave.",
        "Aplaste algunas papas para espesar y sirva en plato hondo con pan o arroz blanco. Es un potaje de días frescos y de lluvia."
      ],
      en: [
        "Brown the chorizo in the oil 3 minutes so it releases its red fat.",
        "Add the sofrito, tomato sauce and paprika and cook 3 minutes.",
        "Add the beans, potatoes, cabbage, water and salt.",
        "Cook covered over medium-low heat 30 minutes, until the potatoes are tender and the cabbage soft.",
        "Mash a few potatoes to thicken and serve in a deep bowl with bread or white rice. It's a stew for cool, rainy days."
      ]
    }
  },
  {
    id: "habichuelas-bolitas-platano",
    category: "granos",
    name: { es: "Habichuelas con Bolitas de Plátano", en: "Beans with Green Plantain Dumplings" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas rosadas, con su líquido",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "4 tazas de agua",
        "½ libra de calabaza en cubos",
        "2 plátanos verdes",
        "1 cucharada de aceite de achiote para la masa",
        "½ cucharadita de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "2 cans (15 oz) pink beans, with their liquid",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "4 cups water",
        "½ pound calabaza (West Indian pumpkin), cubed",
        "2 green plantains",
        "1 tablespoon annatto oil for the dough",
        "½ teaspoon salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite de achiote 3 minutos. Añada la salsa de tomate, las habichuelas, la calabaza, el agua y la mitad de la sal, y deje hervir 10 minutos.",
        "Pele los plátanos y rállelos fino. Mezcle con la cucharada de aceite de achiote y el resto de la sal.",
        "Con las manos mojadas, forme bolitas del tamaño de una canica grande.",
        "Échelas al caldo hirviendo una a una y cocine 15 a 20 minutos, sin mover mucho, hasta que estén firmes por dentro.",
        "Añada el recao y sirva caliente en plato hondo. Las bolitas espesan el caldo; si queda muy espeso, añada agua caliente."
      ],
      en: [
        "Sauté the sofrito in the annatto oil 3 minutes. Add the tomato sauce, beans, calabaza, water and half the salt and boil 10 minutes.",
        "Peel the plantains and grate finely. Mix with the tablespoon of annatto oil and the rest of the salt.",
        "With wet hands, shape balls the size of a large marble.",
        "Drop them into the boiling broth one by one and cook 15 to 20 minutes, without stirring much, until firm inside.",
        "Add the culantro and serve hot in a deep bowl. The dumplings thicken the broth; if it gets too thick, add hot water."
      ]
    }
  },
  {
    id: "habichuelas-salchichas",
    category: "granos",
    name: { es: "Habichuelas Rosadas con Salchichas", en: "Pink Beans with Vienna Sausages" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas rosadas, con su líquido",
        "1 lata de 5 onzas de salchichas, en ruedas",
        "1 cucharada de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 papa en cubos",
        "1½ tazas de agua",
        "¼ cucharadita de comino"
      ],
      en: [
        "2 cans (15 oz) pink beans, with their liquid",
        "1 can (5 oz) Vienna sausages, sliced",
        "1 tablespoon annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "1 potato, cubed",
        "1½ cups water",
        "¼ teaspoon cumin"
      ]
    },
    steps: {
      es: [
        "Dore las salchichas en el aceite de achiote 3 minutos.",
        "Añada el sofrito, la salsa de tomate y el comino, y cocine 3 minutos.",
        "Añada las habichuelas, la papa y el agua.",
        "Cocine tapado a fuego medio 15 minutos, hasta que la papa esté blanda y el caldo espese.",
        "No le añada sal sin probar: las salchichas y las habichuelas de lata ya traen. Sirva con arroz blanco; es la comida rápida de toda la vida."
      ],
      en: [
        "Brown the sausages in the annatto oil 3 minutes.",
        "Add the sofrito, tomato sauce and cumin and cook 3 minutes.",
        "Add the beans, potato and water.",
        "Cook covered over medium heat 15 minutes, until the potato is tender and the broth thickens.",
        "Don't add salt without tasting: the sausages and canned beans already have some. Serve with white rice; it's the classic quick meal."
      ]
    }
  },
  {
    id: "habichuelas-negras-calabaza",
    category: "granos",
    name: { es: "Habichuelas Negras con Calabaza y Cilantro (Veganas)", en: "Black Beans with Calabaza and Cilantro (Vegan)" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas negras, con su líquido",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 cucharadita de comino",
        "1 cucharadita de orégano",
        "1 libra de calabaza en cubos",
        "1½ tazas de agua",
        "1 cucharada de vinagre",
        "¼ taza de cilantro picado"
      ],
      en: [
        "2 cans (15 oz) black beans, with their liquid",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 teaspoon cumin",
        "1 teaspoon oregano",
        "1 pound calabaza (West Indian pumpkin), cubed",
        "1½ cups water",
        "1 tablespoon vinegar",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite 3 minutos con el comino y el orégano.",
        "Añada las habichuelas, la calabaza y el agua.",
        "Cocine tapado a fuego medio 20 minutos, hasta que la calabaza esté blanda.",
        "Aplaste algunos pedazos de calabaza y habichuelas contra la olla para espesar, y añada el vinagre.",
        "Termine con el cilantro y sirva con arroz blanco o arroz con coco. No llevan carne ni productos animales."
      ],
      en: [
        "Sauté the sofrito in the oil 3 minutes with the cumin and oregano.",
        "Add the beans, calabaza and water.",
        "Cook covered over medium heat 20 minutes, until the calabaza is tender.",
        "Mash some calabaza and beans against the pot to thicken, and add the vinegar.",
        "Finish with the cilantro and serve with white rice or coconut rice. They have no meat or animal products."
      ]
    }
  },
  {
    id: "gandules-secos-desde-cero",
    category: "granos",
    name: { es: "Gandules Secos desde Cero", en: "Dried Pigeon Peas from Scratch" },
    active: 90, total: 570, wait: "remojo",
    servings: 8,
    ingredients: {
      es: [
        "1 libra de gandules secos",
        "8 tazas de agua para el remojo",
        "7 tazas de agua para cocinar",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "2 onzas de jamón de cocinar en cubitos",
        "½ taza de salsa de tomate",
        "½ libra de calabaza en cubos",
        "1½ cucharaditas de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "1 pound dried pigeon peas",
        "8 cups water for soaking",
        "7 cups water for cooking",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "2 ounces cooking ham, diced",
        "½ cup tomato sauce",
        "½ pound calabaza (West Indian pumpkin), cubed",
        "1½ teaspoons salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Escoja y lave los gandules, y remójelos en el agua de remojo 8 horas o toda la noche. Bote esa agua.",
        "Hiérvalos en las 7 tazas de agua tapados 1 hora a 1 hora 15 minutos, hasta que estén blandos (30 minutos a presión alta en olla de presión).",
        "Sofría el jamón y el sofrito en el aceite de achiote 4 minutos y añada la salsa de tomate.",
        "Pase el sofrito a los gandules con la calabaza y la sal, y cocine destapado 20 minutos hasta que el caldo espese.",
        "Añada el recao. Son los gandules de la Navidad; con su caldo se puede hacer el arroz con gandules en vez de usar agua."
      ],
      en: [
        "Sort and rinse the pigeon peas and soak them in the soaking water 8 hours or overnight. Discard that water.",
        "Simmer them covered in the 7 cups water 1 hour to 1 hour 15 minutes, until tender (30 minutes at high pressure in a pressure cooker).",
        "Sauté the ham and sofrito in the annatto oil 4 minutes and add the tomato sauce.",
        "Add the sofrito to the pigeon peas with the calabaza and salt and cook uncovered 20 minutes until the broth thickens.",
        "Add the culantro. These are Christmas gandules; use their broth instead of water to make arroz con gandules."
      ]
    }
  },
  {
    id: "habichuelas-coloradas-patitas",
    category: "granos",
    name: { es: "Habichuelas Coloradas con Patitas de Cerdo", en: "Red Beans with Pig's Feet" },
    active: 150, total: 150,
    servings: 8,
    ingredients: {
      es: [
        "2 libras de patitas de cerdo cortadas en pedazos, limpias",
        "8 tazas de agua",
        "1 hoja de laurel",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "2 latas de 15 onzas de habichuelas coloradas, con su líquido",
        "½ libra de calabaza en cubos",
        "1 cucharadita de sal",
        "4 hojas de recao picadas"
      ],
      en: [
        "2 pounds pig's feet, cut in pieces, cleaned",
        "8 cups water",
        "1 bay leaf",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "2 cans (15 oz) red kidney beans, with their liquid",
        "½ pound calabaza (West Indian pumpkin), cubed",
        "1 teaspoon salt",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Hierva las patitas en el agua con el laurel, tapadas, 1 hora 30 minutos a 2 horas, hasta que la carne se despegue del hueso (45 minutos en olla de presión). Guarde 3 tazas del caldo.",
        "Sofría el sofrito en el aceite de achiote 3 minutos y añada la salsa de tomate.",
        "Añada las patitas, el caldo guardado, las habichuelas, la calabaza y la sal.",
        "Cocine destapado a fuego medio 25 minutos, hasta que la calabaza se deshaga y el caldo espese.",
        "Añada el recao y sirva con arroz blanco. El colágeno de las patitas hace el caldo espeso y brilloso."
      ],
      en: [
        "Simmer the pig's feet in the water with the bay leaf, covered, 1 hour 30 minutes to 2 hours, until the meat comes off the bone (45 minutes in a pressure cooker). Save 3 cups of the broth.",
        "Sauté the sofrito in the annatto oil 3 minutes and add the tomato sauce.",
        "Add the pig's feet, the saved broth, the beans, calabaza and salt.",
        "Cook uncovered over medium heat 25 minutes, until the calabaza falls apart and the broth thickens.",
        "Add the culantro and serve with white rice. The collagen from the pig's feet makes the broth thick and glossy."
      ]
    }
  },
  // ---------- Tanda 54: frituras y aperitivos (7), vegetales veganos y vegetarianos (4), huevos (1),
  // galletitas (4), carnes con conejo (6), aves (4) y cócteles (6) ----------
  {
    id: "alcapurrias-camarones",
    category: "entremeses",
    name: { es: "Alcapurrias de Camarones", en: "Shrimp Alcapurrias" },
    active: 75, total: 105, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "6 guineos verdes",
        "1 libra de yautía blanca",
        "2 cucharadas de aceite de achiote",
        "1 cucharadita de sal",
        "1 libra de camarones pelados y picados",
        "2 cucharadas de sofrito",
        "2 cucharadas de salsa de tomate",
        "2 dientes de ajo picados",
        "1 cucharada de aceite de oliva",
        "Aceite para freír"
      ],
      en: [
        "6 green bananas",
        "1 pound white yautía (taro root)",
        "2 tablespoons annatto oil",
        "1 teaspoon salt",
        "1 pound shrimp, peeled and chopped",
        "2 tablespoons sofrito",
        "2 tablespoons tomato sauce",
        "2 garlic cloves, chopped",
        "1 tablespoon olive oil",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Pele los guineos y la yautía, rállelos por el lado fino y mézclelos con el aceite de achiote y la sal. Refrigere la masa 30 minutos para que agarre cuerpo.",
        "Sofría el ajo y el sofrito en el aceite de oliva 2 minutos, añada los camarones y la salsa de tomate y cocine 3 minutos. Deje enfriar.",
        "Sobre una hoja de plátano o papel encerado engrasado con achiote, extienda 2 cucharadas de masa, ponga 1 cucharada de camarones y cubra con más masa, dándole forma alargada.",
        "Fría en aceite a 350 °F, de 3 en 3, unos 4 minutos por lado, hasta que estén doradas.",
        "Escurra sobre papel toalla. Es la alcapurria de los kioscos de la costa."
      ],
      en: [
        "Peel the bananas and yautía, grate them on the fine side and mix with the annatto oil and salt. Refrigerate the dough 30 minutes so it firms up.",
        "Sauté the garlic and sofrito in the olive oil 2 minutes, add the shrimp and tomato sauce and cook 3 minutes. Let cool.",
        "On a banana leaf or wax paper greased with annatto oil, spread 2 tablespoons of dough, add 1 tablespoon of shrimp and cover with more dough, shaping it long.",
        "Fry in oil at 350 °F, 3 at a time, about 4 minutes per side, until golden.",
        "Drain on paper towels. It's the alcapurria of the beachside kiosks."
      ]
    }
  },
  {
    id: "pastelillos-guayaba-queso",
    category: "entremeses",
    name: { es: "Pastelillos de Guayaba y Queso", en: "Guava and Cheese Turnovers (Pastelillos)" },
    active: 35, total: 35,
    servings: 12,
    ingredients: {
      es: [
        "12 discos de masa para empanadillas",
        "6 onzas de pasta de guayaba en 12 lascas",
        "6 onzas de queso blanco del país en 12 lascas",
        "1 huevo batido",
        "Aceite para freír",
        "2 cucharadas de azúcar en polvo"
      ],
      en: [
        "12 turnover dough discs (empanadilla wrappers)",
        "6 ounces guava paste, in 12 slices",
        "6 ounces Puerto Rican white cheese (queso blanco), in 12 slices",
        "1 egg, beaten",
        "Oil for frying",
        "2 tablespoons powdered sugar"
      ]
    },
    steps: {
      es: [
        "Ponga una lasca de guayaba y una de queso en el centro de cada disco.",
        "Pase huevo batido por el borde, doble en media luna y selle con un tenedor.",
        "Fría en aceite a 350 °F, de 3 en 3, unos 2 minutos por lado, hasta que inflen y doren.",
        "Escurra sobre papel toalla y espolvoree el azúcar en polvo.",
        "Sírvalos tibios: el queso queda suave y la guayaba derretida. No los deje sin vigilar; la guayaba quema si se sale."
      ],
      en: [
        "Place a slice of guava and one of cheese in the center of each disc.",
        "Brush the edge with beaten egg, fold into a half-moon and seal with a fork.",
        "Fry in oil at 350 °F, 3 at a time, about 2 minutes per side, until puffed and golden.",
        "Drain on paper towels and dust with the powdered sugar.",
        "Serve warm: the cheese stays soft and the guava melted. Don't leave them unattended; guava burns if it leaks."
      ]
    }
  },
  {
    id: "empanadillas-pollo-bbq",
    category: "entremeses",
    name: { es: "Empanadillas de Pollo BBQ con Queso", en: "BBQ Chicken and Cheese Turnovers" },
    active: 40, total: 40,
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de pollo cocido desmenuzado",
        "½ taza de salsa BBQ",
        "1 taza de queso mozzarella rallado",
        "¼ taza de cebolla picadita",
        "12 discos de masa para empanadillas",
        "1 huevo batido",
        "Aceite para freír"
      ],
      en: [
        "2 cups shredded cooked chicken",
        "½ cup BBQ sauce",
        "1 cup shredded mozzarella cheese",
        "¼ cup finely chopped onion",
        "12 turnover dough discs (empanadilla wrappers)",
        "1 egg, beaten",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle el pollo con la salsa BBQ y la cebolla.",
        "Ponga 2 cucharadas de pollo y 1 cucharada de queso en cada disco.",
        "Pase huevo por el borde, doble y selle con un tenedor.",
        "Fría en aceite a 350 °F unos 2 a 3 minutos por lado, hasta que doren. También puede hornearlas a 400 °F 18 minutos, untadas de huevo.",
        "Escurra y sirva. Es la empanadilla de las fiestas de pueblo que más rápido se acaba."
      ],
      en: [
        "Mix the chicken with the BBQ sauce and onion.",
        "Place 2 tablespoons of chicken and 1 tablespoon of cheese on each disc.",
        "Brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350 °F about 2 to 3 minutes per side, until golden. You can also bake them at 400 °F for 18 minutes, brushed with egg.",
        "Drain and serve. It's the festival turnover that sells out first."
      ]
    }
  },
  {
    id: "aranitas-yuca",
    category: "entremeses",
    name: { es: "Arañitas de Yuca con Mojo", en: "Crispy Shredded Cassava Fritters (Arañitas de Yuca)" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de yuca pelada",
        "2 dientes de ajo majados",
        "½ cucharadita de sal",
        "Aceite para freír",
        "¼ taza de mojo de ajo para servir"
      ],
      en: [
        "2 pounds cassava (yuca), peeled",
        "2 garlic cloves, mashed",
        "½ teaspoon salt",
        "Oil for frying",
        "¼ cup garlic mojo for serving"
      ]
    },
    steps: {
      es: [
        "Ralle la yuca por el lado grueso del guayo y sáquele el exceso de agua apretándola en un paño.",
        "Mézclela con el ajo y la sal.",
        "Caliente el aceite a 350 °F. Con dos cucharas, forme montoncitos sueltos (no los apriete) y aplánelos un poco al echarlos.",
        "Fría unos 3 minutos por lado, hasta que estén dorados y crujientes.",
        "Escurra y sirva con el mojo. Son veganas: las hebras de yuca quedan como patitas de araña."
      ],
      en: [
        "Grate the cassava on the coarse side of the grater and squeeze out the excess water in a towel.",
        "Mix it with the garlic and salt.",
        "Heat the oil to 350 °F. With two spoons, form loose mounds (don't pack them) and flatten them slightly as you drop them in.",
        "Fry about 3 minutes per side, until golden and crisp.",
        "Drain and serve with the mojo. They're vegan: the cassava strands look like little spider legs."
      ]
    }
  },
  {
    id: "sorullitos-rellenos-queso",
    category: "entremeses",
    name: { es: "Sorullitos de Maíz Rellenos de Queso", en: "Cheese-Stuffed Cornmeal Fritters (Sorullitos)" },
    active: 40, total: 55, wait: "enfriar",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de agua",
        "½ cucharadita de sal",
        "1 cucharada de mantequilla",
        "1½ tazas de harina de maíz fina",
        "4 onzas de queso de papa (gouda) en bastoncitos",
        "Aceite para freír",
        "¼ taza de mayo-ketchup para servir"
      ],
      en: [
        "2 cups water",
        "½ teaspoon salt",
        "1 tablespoon butter",
        "1½ cups fine cornmeal",
        "4 ounces gouda (queso de papa), in small sticks",
        "Oil for frying",
        "¼ cup mayo-ketchup for serving"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con la sal y la mantequilla. Retire del fuego y añada la harina de maíz de golpe, moviendo hasta formar una masa que se despegue del caldero.",
        "Deje enfriar 15 minutos, hasta que pueda tocarla.",
        "Tome 2 cucharadas de masa, aplánela en la mano, ponga un bastoncito de queso en el centro y enróllela como un cigarro, sellando bien las puntas.",
        "Fría en aceite a 350 °F unos 4 minutos, dándoles vuelta, hasta que doren.",
        "Escurra y sirva con mayo-ketchup. El queso por dentro queda derretido."
      ],
      en: [
        "Boil the water with the salt and butter. Remove from the heat and add the cornmeal all at once, stirring until it forms a dough that pulls away from the pot.",
        "Let cool 15 minutes, until you can handle it.",
        "Take 2 tablespoons of dough, flatten it in your hand, place a stick of cheese in the center and roll it like a cigar, sealing the ends well.",
        "Fry in oil at 350 °F about 4 minutes, turning, until golden.",
        "Drain and serve with mayo-ketchup. The cheese inside stays melted."
      ]
    }
  },
  {
    id: "tostones-camarones-ajillo",
    category: "entremeses",
    name: { es: "Tostones con Camarones al Ajillo", en: "Tostones Topped with Garlic Shrimp" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "3 plátanos verdes",
        "Aceite para freír",
        "1 libra de camarones pelados",
        "6 dientes de ajo picados",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de mantequilla",
        "1 cucharada de jugo de limón",
        "¼ taza de cilantro picado",
        "½ cucharadita de sal"
      ],
      en: [
        "3 green plantains",
        "Oil for frying",
        "1 pound shrimp, peeled",
        "6 garlic cloves, chopped",
        "3 tablespoons olive oil",
        "1 tablespoon butter",
        "1 tablespoon lime juice",
        "¼ cup chopped cilantro",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos y córtelos en ruedas de 1 pulgada. Fríalos a 325 °F 4 minutos, aplástelos y fríalos otra vez a 375 °F hasta que estén crujientes. Escurra.",
        "En un sartén, caliente el aceite de oliva y la mantequilla y dore el ajo 1 minuto sin que se queme.",
        "Añada los camarones y la sal y cocine 2 minutos por lado, hasta que estén rosados.",
        "Apague, añada el limón y el cilantro.",
        "Ponga 1 o 2 camarones con su ajillo sobre cada tostón. Sirva enseguida, antes de que el tostón se ablande."
      ],
      en: [
        "Peel the plantains and cut into 1-inch rounds. Fry at 325 °F for 4 minutes, flatten and fry again at 375 °F until crisp. Drain.",
        "In a skillet, heat the olive oil and butter and brown the garlic 1 minute without burning it.",
        "Add the shrimp and salt and cook 2 minutes per side, until pink.",
        "Turn off the heat and add the lime juice and cilantro.",
        "Top each tostón with 1 or 2 shrimp and their garlic sauce. Serve right away, before the tostones soften."
      ]
    }
  },
  {
    id: "croquetas-garbanzos-recao",
    category: "entremeses",
    name: { es: "Croquetas Veganas de Garbanzos y Recao", en: "Vegan Chickpea and Culantro Croquettes" },
    active: 35, total: 65, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de garbanzos, escurridos",
        "¼ taza de sofrito",
        "6 hojas de recao picadas",
        "2 dientes de ajo",
        "1 cucharadita de comino",
        "½ cucharadita de sal",
        "½ taza de pan rallado",
        "Aceite para freír",
        "½ taza de mayo-ajo vegana para servir"
      ],
      en: [
        "2 cans (15 oz) chickpeas, drained",
        "¼ cup sofrito",
        "6 culantro (recao) leaves, chopped",
        "2 garlic cloves",
        "1 teaspoon cumin",
        "½ teaspoon salt",
        "½ cup breadcrumbs",
        "Oil for frying",
        "½ cup vegan garlic mayo for serving"
      ]
    },
    steps: {
      es: [
        "En el procesador, muela los garbanzos, el sofrito, el recao, el ajo, el comino y la sal hasta que quede una pasta gruesa, no un puré.",
        "Añada la mitad del pan rallado y refrigere 30 minutos.",
        "Forme 18 croquetas y páselas por el resto del pan rallado.",
        "Fríalas en aceite a 350 °F unos 3 minutos, hasta que estén doradas. También puede hornearlas a 400 °F 20 minutos, rociadas con aceite.",
        "Sirva con la mayo-ajo vegana. Son el falafel con sabor a sofrito."
      ],
      en: [
        "In a food processor, grind the chickpeas, sofrito, culantro, garlic, cumin and salt to a coarse paste, not a purée.",
        "Add half the breadcrumbs and refrigerate 30 minutes.",
        "Form 18 croquettes and coat them in the rest of the breadcrumbs.",
        "Fry in oil at 350 °F about 3 minutes, until golden. You can also bake them at 400 °F for 20 minutes, sprayed with oil.",
        "Serve with the vegan garlic mayo. It's falafel with a sofrito flavor."
      ]
    }
  },
  {
    id: "fricase-jaca",
    category: "vegetales",
    name: { es: "Fricasé Vegano de Jaca y Papas", en: "Vegan Jackfruit and Potato Fricassée" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 20 onzas de jaca verde en agua, escurrida",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de vino blanco seco",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "3 papas en cubos",
        "1½ tazas de agua",
        "1 hoja de laurel",
        "½ cucharadita de orégano"
      ],
      en: [
        "2 cans (20 oz) young green jackfruit in water, drained",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup dry white wine",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "3 potatoes, cubed",
        "1½ cups water",
        "1 bay leaf",
        "½ teaspoon oregano"
      ]
    },
    steps: {
      es: [
        "Enjuague la jaca, córtela en pedazos grandes, quitándole la parte dura del centro, y séquela con papel toalla.",
        "Dórela en el aceite 5 minutos para que agarre color.",
        "Añada el sofrito y sofría 3 minutos. Agregue el vino y deje que se evapore.",
        "Añada la salsa de tomate, las aceitunas, las alcaparras, las papas, el agua, el laurel y el orégano. Tape y cocine a fuego bajo 25 minutos, hasta que las papas estén blandas.",
        "Destape y cocine 5 minutos más para espesar la salsa. Pruebe la sal: las aceitunas y las alcaparras ya la traen. Sirva con arroz blanco. La jaca se deshilacha como el pollo de un fricasé."
      ],
      en: [
        "Rinse the jackfruit, cut it into large pieces, removing the hard core, and pat dry with paper towels.",
        "Brown it in the oil for 5 minutes so it takes on color.",
        "Add the sofrito and sauté 3 minutes. Add the wine and let it evaporate.",
        "Add the tomato sauce, olives, capers, potatoes, water, bay leaf and oregano. Cover and cook over low heat 25 minutes, until the potatoes are tender.",
        "Uncover and cook 5 more minutes to thicken the sauce. Taste for salt: the olives and capers already bring some. Serve with white rice. The jackfruit shreds like the chicken in a fricassée."
      ]
    }
  },
  {
    id: "mofongo-garbanzos",
    category: "vegetales",
    name: { es: "Mofongo Relleno de Garbanzos Guisados (Vegano)", en: "Mofongo Stuffed with Stewed Chickpeas (Vegan)" },
    active: 45, total: 45,
    servings: 4,
    ingredients: {
      es: [
        "4 plátanos verdes",
        "Aceite para freír",
        "6 dientes de ajo",
        "3 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "½ taza de caldo de vegetales",
        "¼ taza de cilantro picado"
      ],
      en: [
        "4 green plantains",
        "Oil for frying",
        "6 garlic cloves",
        "3 tablespoons olive oil",
        "½ teaspoon salt",
        "1 can (15 oz) chickpeas, drained",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "½ cup vegetable broth",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en 1 cucharada del aceite de oliva 3 minutos. Añada los garbanzos, la salsa de tomate y el caldo, y cocine 10 minutos hasta que espese. Añada el cilantro.",
        "Pele los plátanos, córtelos en ruedas y fríalos a 325 °F unos 8 minutos, hasta que estén blandos pero sin dorar mucho.",
        "En el pilón, maje el ajo con la sal y el resto del aceite de oliva.",
        "Maje los plátanos calientes con el ajo, poco a poco. Forme 4 copas con la ayuda de un tazón.",
        "Rellene cada copa con los garbanzos guisados y sirva enseguida."
      ],
      en: [
        "Sauté the sofrito in 1 tablespoon of the olive oil 3 minutes. Add the chickpeas, tomato sauce and broth and cook 10 minutes until thickened. Add the cilantro.",
        "Peel the plantains, cut into rounds and fry at 325 °F about 8 minutes, until tender but not very browned.",
        "In the pilón (mortar), mash the garlic with the salt and the rest of the olive oil.",
        "Mash the hot plantains with the garlic, a little at a time. Shape 4 cups using a bowl.",
        "Fill each cup with the stewed chickpeas and serve right away."
      ]
    }
  },
  {
    id: "filetes-coliflor-mojo",
    category: "vegetales",
    name: { es: "Filetes de Coliflor al Horno con Mojo de Ajo (Vegano)", en: "Roasted Cauliflower Steaks with Garlic Mojo (Vegan)" },
    active: 45, total: 45,
    servings: 4,
    ingredients: {
      es: [
        "2 coliflores medianas",
        "3 cucharadas de aceite de oliva",
        "1 cucharadita de adobo sin sal",
        "½ cucharadita de pimentón",
        "¼ cucharadita de sal",
        "¼ taza de mojo de ajo",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "2 medium heads cauliflower",
        "3 tablespoons olive oil",
        "1 teaspoon salt-free adobo",
        "½ teaspoon paprika",
        "¼ teaspoon salt",
        "¼ cup garlic mojo",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F y cubra una bandeja con papel de hornear.",
        "Quite las hojas de la coliflor y, sin quitarle el tronco, córtela de arriba hacia abajo en filetes de 1 pulgada. Saldrán 2 de cada coliflor; guarde los ramitos que se caigan para otro plato.",
        "Unte los filetes con el aceite, el adobo, el pimentón y la sal.",
        "Hornee 30 minutos, volteándolos a la mitad, hasta que estén dorados por fuera y blandos en el centro.",
        "Rocíe el mojo de ajo y el cilantro. Sirva con arroz con gandules o con tostones."
      ],
      en: [
        "Heat the oven to 425 °F and line a baking sheet with parchment paper.",
        "Remove the leaves from the cauliflower and, keeping the stem, cut it top to bottom into 1-inch steaks. You'll get 2 from each head; save the florets that fall off for another dish.",
        "Rub the steaks with the oil, adobo, paprika and salt.",
        "Bake 30 minutes, turning halfway, until golden outside and tender in the center.",
        "Drizzle with the garlic mojo and cilantro. Serve with arroz con gandules or tostones."
      ]
    }
  },
  {
    id: "pinon-vegetariano-espinaca",
    category: "vegetales",
    name: { es: "Piñón Vegetariano de Amarillos, Espinaca y Queso", en: "Vegetarian Sweet Plantain Lasagna with Spinach and Cheese (Piñón)" },
    active: 80, total: 90, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "5 plátanos maduros",
        "Aceite para freír",
        "1 cucharada de aceite de oliva",
        "¼ taza de sofrito",
        "1 libra de espinaca fresca picada",
        "1 taza de maíz en grano",
        "½ taza de salsa de tomate",
        "6 huevos",
        "2 tazas de queso mozzarella rallado",
        "½ taza de queso parmesano rallado",
        "¼ cucharadita de sal"
      ],
      en: [
        "5 ripe plantains",
        "Oil for frying",
        "1 tablespoon olive oil",
        "¼ cup sofrito",
        "1 pound fresh spinach, chopped",
        "1 cup corn kernels",
        "½ cup tomato sauce",
        "6 eggs",
        "2 cups shredded mozzarella cheese",
        "½ cup grated Parmesan cheese",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos, córtelos a lo largo en 4 tajadas y fríalos hasta que doren. Escurra.",
        "Sofría el sofrito en el aceite de oliva, añada la espinaca hasta que se marchite, el maíz y la salsa de tomate. Cocine 5 minutos hasta que se seque un poco.",
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas. Bata los huevos con la sal y vierta la mitad en el molde.",
        "Haga capas: amarillos, la mitad de la espinaca y un tercio de la mozzarella; repita y termine con amarillos. Vierta el resto del huevo y cubra con el resto de los quesos.",
        "Hornee 35 minutos, hasta que el huevo cuaje y el queso dore. Deje reposar 10 minutos antes de cortar."
      ],
      en: [
        "Peel the plantains, cut lengthwise into 4 slices and fry until golden. Drain.",
        "Sauté the sofrito in the olive oil, add the spinach until wilted, the corn and the tomato sauce. Cook 5 minutes until a little dry.",
        "Heat the oven to 350 °F and grease a 9 × 13-inch dish. Beat the eggs with the salt and pour half into the dish.",
        "Layer: plantains, half the spinach and a third of the mozzarella; repeat and finish with plantains. Pour in the rest of the egg and top with the rest of the cheese.",
        "Bake 35 minutes, until the egg sets and the cheese browns. Let rest 10 minutes before cutting."
      ]
    }
  },
  {
    id: "quiche-calabaza-queso",
    category: "huevos",
    name: { es: "Quiche de Calabaza y Queso Blanco", en: "Calabaza and White Cheese Quiche" },
    active: 70, total: 85, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie de 9 pulgadas, sin hornear",
        "2 tazas de calabaza en cubitos",
        "1 cucharada de aceite de oliva",
        "½ cebolla picada",
        "4 huevos",
        "1 taza de leche evaporada",
        "1 taza de queso blanco del país desmoronado",
        "½ taza de queso suizo rallado",
        "¼ cucharadita de nuez moscada",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 unbaked 9-inch pie crust",
        "2 cups diced calabaza (West Indian pumpkin)",
        "1 tablespoon olive oil",
        "½ onion, chopped",
        "4 eggs",
        "1 cup evaporated milk",
        "1 cup crumbled Puerto Rican white cheese (queso blanco)",
        "½ cup shredded Swiss cheese",
        "¼ teaspoon nutmeg",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375 °F. Pinche la masa con un tenedor y hornéela 10 minutos.",
        "Sofría la cebolla y la calabaza en el aceite, tapado, 10 minutos, hasta que la calabaza esté blanda pero entera.",
        "Bata los huevos con la leche, la nuez moscada y la sal.",
        "Reparta la calabaza y los quesos en la masa y vierta el huevo encima.",
        "Hornee 35 a 40 minutos, hasta que el centro apenas tiemble. Deje reposar 15 minutos antes de cortar. Es vegetariano y sirve igual para el desayuno que para un compartir."
      ],
      en: [
        "Heat the oven to 375 °F. Prick the crust with a fork and bake it 10 minutes.",
        "Sauté the onion and calabaza in the oil, covered, 10 minutes, until the calabaza is tender but whole.",
        "Beat the eggs with the milk, nutmeg and salt.",
        "Spread the calabaza and cheeses in the crust and pour the egg over the top.",
        "Bake 35 to 40 minutes, until the center barely jiggles. Let rest 15 minutes before cutting. It's vegetarian and works for breakfast or a potluck."
      ]
    }
  },
  {
    id: "galletas-pina-rellenas",
    category: "galletitas",
    name: { es: "Galletas Rellenas de Dulce de Piña", en: "Pineapple Jam-Filled Cookies" },
    active: 55, total: 100, wait: "frio",
    servings: 24,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ taza de azúcar",
        "1 taza de mantequilla fría en cubos",
        "1 huevo",
        "1 cucharadita de vainilla",
        "¼ cucharadita de sal",
        "¾ taza de mermelada de piña",
        "1 huevo batido para barnizar"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ cup sugar",
        "1 cup cold butter, cubed",
        "1 egg",
        "1 teaspoon vanilla",
        "¼ teaspoon salt",
        "¾ cup pineapple jam",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina, el azúcar y la sal. Añada la mantequilla y desmorónela con los dedos hasta que parezca arena gruesa.",
        "Añada el huevo y la vainilla y una la masa sin amasar de más. Envuélvala y refrigere 45 minutos.",
        "Caliente el horno a 350 °F. Estire la masa a ⅛ de pulgada y corte 48 círculos de 2½ pulgadas.",
        "Ponga 1 cucharadita de mermelada de piña en 24 círculos, cubra con los otros, selle el borde con un tenedor y haga un corte en el centro. Barnice con huevo.",
        "Hornee 15 a 18 minutos, hasta que doren por el borde. Deje enfriar en la bandeja. Son las de las panaderías, como pastelillos de piña chiquitos."
      ],
      en: [
        "Mix the flour, sugar and salt. Add the butter and crumble it with your fingers until it looks like coarse sand.",
        "Add the egg and vanilla and bring the dough together without overworking it. Wrap and refrigerate 45 minutes.",
        "Heat the oven to 350 °F. Roll the dough to ⅛ inch and cut 48 circles of 2½ inches.",
        "Place 1 teaspoon of pineapple jam on 24 circles, top with the others, seal the edge with a fork and cut a slit in the center. Brush with egg.",
        "Bake 15 to 18 minutes, until the edges brown. Let cool on the tray. They're the bakery ones, like little pineapple turnovers."
      ]
    }
  },
  {
    id: "galletas-pistacho",
    category: "galletitas",
    name: { es: "Galletas de Pistacho", en: "Pistachio Cookies" },
    active: 30, total: 50, wait: "frio",
    servings: 24,
    ingredients: {
      es: [
        "1 taza de pistachos pelados sin sal",
        "1¾ tazas de harina de trigo",
        "¾ taza de mantequilla blanda",
        "½ taza de azúcar",
        "1 huevo",
        "½ cucharadita de extracto de almendra",
        "¼ cucharadita de polvo de hornear",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 cup shelled unsalted pistachios",
        "1¾ cups all-purpose flour",
        "¾ cup softened butter",
        "½ cup sugar",
        "1 egg",
        "½ teaspoon almond extract",
        "¼ teaspoon baking powder",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Muela ¾ taza de los pistachos con 2 cucharadas del azúcar hasta que quede un polvo fino. Pique el resto.",
        "Bata la mantequilla con el resto del azúcar hasta que esté cremosa. Añada el huevo y el extracto.",
        "Añada la harina, el pistacho molido, el polvo de hornear y la sal, y mezcle. Refrigere 20 minutos.",
        "Caliente el horno a 350 °F. Forme 24 bolitas, páselas por el pistacho picado y aplástelas un poco en la bandeja.",
        "Hornee 12 a 14 minutos, hasta que estén firmes y apenas doradas abajo. Salen verdecitas por dentro."
      ],
      en: [
        "Grind ¾ cup of the pistachios with 2 tablespoons of the sugar to a fine powder. Chop the rest.",
        "Beat the butter with the rest of the sugar until creamy. Add the egg and extract.",
        "Add the flour, ground pistachio, baking powder and salt and mix. Refrigerate 20 minutes.",
        "Heat the oven to 350 °F. Form 24 balls, roll them in the chopped pistachios and flatten slightly on the tray.",
        "Bake 12 to 14 minutes, until firm and barely golden underneath. They come out a little green inside."
      ]
    }
  },
  {
    id: "galletas-chocolate-blanco-macadamia",
    category: "galletitas",
    name: { es: "Galletas de Chocolate Blanco y Macadamia", en: "White Chocolate Macadamia Cookies" },
    active: 35, total: 35,
    servings: 24,
    ingredients: {
      es: [
        "2¼ tazas de harina de trigo",
        "1 cucharadita de bicarbonato de sodio",
        "½ cucharadita de sal",
        "1 taza de mantequilla blanda",
        "¾ taza de azúcar morena",
        "½ taza de azúcar",
        "2 huevos",
        "2 cucharaditas de vainilla",
        "1 taza de chispas de chocolate blanco",
        "1 taza de nueces de macadamia picadas"
      ],
      en: [
        "2¼ cups all-purpose flour",
        "1 teaspoon baking soda",
        "½ teaspoon salt",
        "1 cup softened butter",
        "¾ cup brown sugar",
        "½ cup sugar",
        "2 eggs",
        "2 teaspoons vanilla",
        "1 cup white chocolate chips",
        "1 cup chopped macadamia nuts"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F.",
        "Bata la mantequilla con las dos azúcares hasta que esté cremosa. Añada los huevos y la vainilla.",
        "Añada la harina, el bicarbonato y la sal, y mezcle. Incorpore el chocolate blanco y las macadamias.",
        "Ponga bolas de 2 cucharadas en la bandeja, separadas 2 pulgadas.",
        "Hornee 10 a 12 minutos, hasta que el borde dore y el centro se vea un poco crudo. Deje enfriar 5 minutos en la bandeja para que queden blanditas."
      ],
      en: [
        "Heat the oven to 350 °F.",
        "Beat the butter with both sugars until creamy. Add the eggs and vanilla.",
        "Add the flour, baking soda and salt and mix. Fold in the white chocolate and macadamias.",
        "Drop 2-tablespoon balls on the tray, 2 inches apart.",
        "Bake 10 to 12 minutes, until the edges brown and the center looks slightly underdone. Let cool 5 minutes on the tray so they stay soft."
      ]
    }
  },
  {
    id: "galletas-queso-cheddar",
    category: "galletitas",
    name: { es: "Galletitas Saladas de Queso Cheddar", en: "Savory Cheddar Cheese Crackers" },
    active: 35, total: 80, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de queso cheddar fuerte rallado",
        "½ taza de mantequilla fría en cubos",
        "1¼ tazas de harina de trigo",
        "¼ cucharadita de sal",
        "¼ cucharadita de pimentón",
        "1 pizca de pimienta de cayena",
        "2 cucharadas de agua fría"
      ],
      en: [
        "2 cups shredded sharp cheddar cheese",
        "½ cup cold butter, cubed",
        "1¼ cups all-purpose flour",
        "¼ teaspoon salt",
        "¼ teaspoon paprika",
        "1 pinch cayenne pepper",
        "2 tablespoons cold water"
      ]
    },
    steps: {
      es: [
        "En el procesador, mezcle el queso, la mantequilla, la harina, la sal, el pimentón y la cayena hasta que parezca arena.",
        "Añada el agua y pulse hasta que se forme una bola.",
        "Haga un rollo de 1½ pulgadas de grueso, envuélvalo y refrigere 45 minutos.",
        "Caliente el horno a 350 °F. Corte el rollo en ruedas de ¼ de pulgada y póngalas en la bandeja.",
        "Hornee 12 a 15 minutos, hasta que el borde dore. Deje enfriar: se ponen crujientes. Son para picar con el coctel."
      ],
      en: [
        "In a food processor, mix the cheese, butter, flour, salt, paprika and cayenne until it looks like sand.",
        "Add the water and pulse until a ball forms.",
        "Shape into a 1½-inch-thick log, wrap and refrigerate 45 minutes.",
        "Heat the oven to 350 °F. Slice the log into ¼-inch rounds and place on the tray.",
        "Bake 12 to 15 minutes, until the edges brown. Let cool: they crisp up. They're for nibbling with cocktails."
      ]
    }
  },
  {
    id: "conejo-ajillo",
    category: "carnes",
    name: { es: "Conejo al Ajillo", en: "Garlic Rabbit (Conejo al Ajillo)" },
    active: 50, total: 170, wait: "adobo",
    servings: 4,
    ingredients: {
      es: [
        "1 conejo de 3 libras en presas",
        "10 dientes de ajo en lascas",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "1 cucharadita de orégano",
        "2 cucharadas de jugo de limón",
        "¼ taza de aceite de oliva",
        "½ taza de vino blanco seco",
        "½ taza de caldo de pollo",
        "¼ taza de perejil picado"
      ],
      en: [
        "1 rabbit (3 pounds), cut in pieces",
        "10 garlic cloves, sliced",
        "1 teaspoon salt",
        "½ teaspoon pepper",
        "1 teaspoon oregano",
        "2 tablespoons lime juice",
        "¼ cup olive oil",
        "½ cup dry white wine",
        "½ cup chicken broth",
        "¼ cup chopped parsley"
      ]
    },
    steps: {
      es: [
        "Adobe el conejo con la sal, la pimienta, el orégano y el limón, y déjelo 2 horas en la nevera.",
        "En un caldero, dore las lascas de ajo en el aceite a fuego bajo hasta que estén doraditas. Sáquelas y guárdelas.",
        "Suba el fuego y dore las presas de conejo en ese aceite, unos 5 minutos por lado.",
        "Añada el vino y deje hervir 2 minutos. Agregue el caldo, tape y cocine a fuego bajo 35 a 40 minutos, hasta que la carne esté tierna.",
        "Destape, devuelva el ajo y cocine 5 minutos para que la salsa reduzca. Añada el perejil y sirva con papas fritas o arroz blanco. El conejo es magro; no lo cocine de más o se seca."
      ],
      en: [
        "Season the rabbit with the salt, pepper, oregano and lime juice and refrigerate 2 hours.",
        "In a caldero, brown the garlic slices in the oil over low heat until golden. Remove and set aside.",
        "Raise the heat and brown the rabbit pieces in that oil, about 5 minutes per side.",
        "Add the wine and boil 2 minutes. Add the broth, cover and cook over low heat 35 to 40 minutes, until the meat is tender.",
        "Uncover, return the garlic and cook 5 minutes so the sauce reduces. Add the parsley and serve with fries or white rice. Rabbit is lean; don't overcook it or it dries out."
      ]
    }
  },
  {
    id: "conejo-fricase",
    category: "carnes",
    name: { es: "Fricasé de Conejo", en: "Rabbit Fricassée" },
    active: 90, total: 570, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "1 conejo de 3 libras en presas",
        "4 dientes de ajo majados",
        "1 cucharadita de orégano",
        "1 cucharadita de sal",
        "1 taza de vino tinto",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 cucharadas de pasas",
        "3 papas en cubos",
        "2 zanahorias en ruedas",
        "1 taza de agua",
        "1 hoja de laurel"
      ],
      en: [
        "1 rabbit (3 pounds), cut in pieces",
        "4 garlic cloves, mashed",
        "1 teaspoon oregano",
        "1 teaspoon salt",
        "1 cup red wine",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 tablespoons raisins",
        "3 potatoes, cubed",
        "2 carrots, sliced",
        "1 cup water",
        "1 bay leaf"
      ]
    },
    steps: {
      es: [
        "Adobe el conejo con el ajo, el orégano, la sal y el vino, y déjelo toda la noche (o al menos 8 horas) en la nevera.",
        "Escurra las presas (guarde el vino del adobo) y dórelas en el aceite en un caldero.",
        "Añada el sofrito y sofría 3 minutos. Agregue el vino del adobo y deje hervir 3 minutos.",
        "Añada la salsa de tomate, las aceitunas, las alcaparras, las pasas, el agua y el laurel. Tape y cocine a fuego bajo 45 minutos.",
        "Añada las papas y las zanahorias y cocine 25 minutos más, hasta que estén blandas y la salsa espese. Es el fricasé de las fincas del centro de la isla, donde se crían conejos."
      ],
      en: [
        "Season the rabbit with the garlic, oregano, salt and wine and refrigerate overnight (or at least 8 hours).",
        "Drain the pieces (save the wine from the marinade) and brown them in the oil in a caldero.",
        "Add the sofrito and sauté 3 minutes. Add the marinade wine and boil 3 minutes.",
        "Add the tomato sauce, olives, capers, raisins, water and bay leaf. Cover and cook over low heat 45 minutes.",
        "Add the potatoes and carrots and cook 25 more minutes, until tender and the sauce thickens. It's the fricassée of the farms in the island's interior, where rabbits are raised."
      ]
    }
  },
  {
    id: "conejo-horno-mojo",
    category: "carnes",
    name: { es: "Conejo al Horno con Mojo de Naranja Agria", en: "Oven-Roasted Rabbit with Sour Orange Mojo" },
    active: 100, total: 280, wait: "adobo",
    servings: 4,
    ingredients: {
      es: [
        "1 conejo de 3 libras en presas",
        "½ taza de jugo de naranja agria",
        "8 dientes de ajo majados",
        "1 cucharadita de orégano",
        "½ cucharadita de comino",
        "1 cucharadita de sal",
        "¼ taza de aceite de oliva",
        "1 cebolla en ruedas",
        "1 libra de papas rojas pequeñas, partidas a la mitad"
      ],
      en: [
        "1 rabbit (3 pounds), cut in pieces",
        "½ cup sour orange juice",
        "8 garlic cloves, mashed",
        "1 teaspoon oregano",
        "½ teaspoon cumin",
        "1 teaspoon salt",
        "¼ cup olive oil",
        "1 onion, sliced into rings",
        "1 pound small red potatoes, halved"
      ]
    },
    steps: {
      es: [
        "Mezcle la naranja agria, el ajo, el orégano, el comino, la sal y el aceite. Adobe el conejo con ese mojo y déjelo 3 horas en la nevera.",
        "Caliente el horno a 375 °F. Ponga la cebolla y las papas en un molde y el conejo encima, con todo el mojo.",
        "Tape con papel de aluminio y hornee 45 minutos.",
        "Destape, bañe el conejo con el jugo del molde y hornee 25 a 30 minutos más, hasta que dore.",
        "Sirva con el juguito del molde por encima. Si no consigue naranja agria, use mitad jugo de china y mitad jugo de limón."
      ],
      en: [
        "Mix the sour orange juice, garlic, oregano, cumin, salt and oil. Marinate the rabbit in that mojo in the refrigerator for 3 hours.",
        "Heat the oven to 375 °F. Place the onion and potatoes in a baking dish with the rabbit on top, with all the mojo.",
        "Cover with aluminum foil and bake 45 minutes.",
        "Uncover, baste the rabbit with the pan juices and bake 25 to 30 more minutes, until browned.",
        "Serve with the pan juices on top. If you can't find sour orange, use half orange juice and half lime juice."
      ]
    }
  },
  {
    id: "carne-guisada-malta",
    category: "carnes",
    name: { es: "Carne Guisada en Malta", en: "Beef Stewed in Malta" },
    active: 150, total: 150,
    servings: 6,
    ingredients: {
      es: [
        "2½ libras de carne de res para guisar en cubos",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "2 cucharadas de aceite",
        "½ taza de sofrito",
        "1 lata de 12 onzas de malta",
        "½ taza de salsa de tomate",
        "1 taza de agua",
        "2 hojas de laurel",
        "3 papas en cubos",
        "2 zanahorias en ruedas"
      ],
      en: [
        "2½ pounds beef stew meat, cubed",
        "1 teaspoon salt",
        "½ teaspoon pepper",
        "2 tablespoons oil",
        "½ cup sofrito",
        "1 can (12 oz) malta (malt soda)",
        "½ cup tomato sauce",
        "1 cup water",
        "2 bay leaves",
        "3 potatoes, cubed",
        "2 carrots, sliced"
      ]
    },
    steps: {
      es: [
        "Sazone la carne con la sal y la pimienta y dórela en el aceite, en tandas, en un caldero.",
        "Añada el sofrito y sofría 3 minutos.",
        "Agregue la malta, la salsa de tomate, el agua y el laurel. Tape y cocine a fuego bajo 1 hora 30 minutos, hasta que la carne esté casi tierna.",
        "Añada las papas y las zanahorias y cocine 30 minutos más.",
        "Destape los últimos minutos si la salsa está muy líquida. La malta le da un dulzor oscuro, como de melao, que va muy bien con arroz blanco."
      ],
      en: [
        "Season the beef with the salt and pepper and brown it in the oil, in batches, in a caldero.",
        "Add the sofrito and sauté 3 minutes.",
        "Add the malta, tomato sauce, water and bay leaves. Cover and cook over low heat 1 hour 30 minutes, until the beef is almost tender.",
        "Add the potatoes and carrots and cook 30 more minutes.",
        "Uncover for the last few minutes if the sauce is too thin. The malta gives it a dark, molasses-like sweetness that goes great with white rice."
      ]
    }
  },
  {
    id: "cordero-guisado",
    category: "carnes",
    name: { es: "Cordero Guisado a la Criolla", en: "Creole-Style Lamb Stew" },
    active: 135, total: 135,
    servings: 6,
    ingredients: {
      es: [
        "2½ libras de paleta de cordero en cubos, sin grasa",
        "1 cucharadita de sal",
        "1 cucharadita de orégano",
        "4 dientes de ajo majados",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "½ taza de vino tinto",
        "½ taza de salsa de tomate",
        "1½ tazas de agua",
        "¼ taza de aceitunas rellenas",
        "1 libra de calabaza en cubos",
        "2 papas en cubos"
      ],
      en: [
        "2½ pounds lamb shoulder, cubed, trimmed of fat",
        "1 teaspoon salt",
        "1 teaspoon oregano",
        "4 garlic cloves, mashed",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "½ cup red wine",
        "½ cup tomato sauce",
        "1½ cups water",
        "¼ cup stuffed olives",
        "1 pound calabaza (West Indian pumpkin), cubed",
        "2 potatoes, cubed"
      ]
    },
    steps: {
      es: [
        "Sazone el cordero con la sal, el orégano y el ajo.",
        "Dórelo en el aceite en un caldero, en tandas.",
        "Añada el sofrito y sofría 3 minutos. Agregue el vino y deje hervir 2 minutos.",
        "Añada la salsa de tomate, el agua y las aceitunas. Tape y cocine a fuego bajo 1 hora 15 minutos.",
        "Añada la calabaza y las papas y cocine 30 minutos más. La calabaza se deshace y espesa la salsa. Sirva con arroz blanco."
      ],
      en: [
        "Season the lamb with the salt, oregano and garlic.",
        "Brown it in the oil in a caldero, in batches.",
        "Add the sofrito and sauté 3 minutes. Add the wine and boil 2 minutes.",
        "Add the tomato sauce, water and olives. Cover and cook over low heat 1 hour 15 minutes.",
        "Add the calabaza and potatoes and cook 30 more minutes. The calabaza falls apart and thickens the sauce. Serve with white rice."
      ]
    }
  },
  {
    id: "lengua-guisada",
    category: "carnes",
    name: { es: "Lengua Guisada en Salsa Criolla", en: "Beef Tongue Stewed in Creole Sauce" },
    active: 200, total: 200,
    servings: 6,
    ingredients: {
      es: [
        "1 lengua de res (3 libras)",
        "10 tazas de agua",
        "1 cebolla partida",
        "2 hojas de laurel",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "½ taza de vino blanco seco",
        "¼ taza de aceitunas rellenas",
        "1 pimiento morrón en tiras",
        "½ cucharadita de sal"
      ],
      en: [
        "1 beef tongue (3 pounds)",
        "10 cups water",
        "1 onion, halved",
        "2 bay leaves",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "½ cup dry white wine",
        "¼ cup stuffed olives",
        "1 roasted red pepper, in strips",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva la lengua con el agua, la cebolla y el laurel, tapada, 2 horas 30 minutos (1 hora en olla de presión), hasta que esté blanda. Guarde 1 taza del caldo.",
        "Sáquela y, todavía caliente, pélele la piel gruesa. Córtela en lascas de ½ pulgada.",
        "En un caldero, sofría el sofrito en el aceite 3 minutos. Añada el vino, la salsa de tomate, el caldo guardado, las aceitunas, el pimiento y la sal.",
        "Añada las lascas de lengua y cocine tapado a fuego bajo 20 minutos para que agarren el sabor.",
        "Sirva con arroz blanco y tostones. Queda suave como la carne mechada."
      ],
      en: [
        "Simmer the tongue with the water, onion and bay leaves, covered, 2 hours 30 minutes (1 hour in a pressure cooker), until tender. Save 1 cup of the broth.",
        "Remove it and, while still hot, peel off the thick skin. Cut into ½-inch slices.",
        "In a caldero, sauté the sofrito in the oil 3 minutes. Add the wine, tomato sauce, saved broth, olives, pepper and salt.",
        "Add the tongue slices and cook covered over low heat 20 minutes so they soak up the flavor.",
        "Serve with white rice and tostones. It turns out as tender as carne mechada."
      ]
    }
  },
  {
    id: "muslos-tamarindo",
    category: "aves",
    name: { es: "Muslos de Pollo Glaseados con Tamarindo", en: "Tamarind-Glazed Chicken Thighs" },
    active: 55, total: 70, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "8 muslos de pollo con hueso",
        "1 cucharadita de adobo",
        "½ taza de pulpa de tamarindo sin semillas",
        "¼ taza de azúcar morena",
        "2 cucharadas de salsa de soya baja en sodio",
        "2 dientes de ajo majados",
        "½ taza de agua",
        "2 cebollines picados"
      ],
      en: [
        "8 bone-in chicken thighs",
        "1 teaspoon adobo",
        "½ cup seedless tamarind pulp",
        "¼ cup brown sugar",
        "2 tablespoons low-sodium soy sauce",
        "2 garlic cloves, mashed",
        "½ cup water",
        "2 scallions, chopped"
      ]
    },
    steps: {
      es: [
        "Sazone los muslos con el adobo y déjelos 15 minutos.",
        "En una olla, cocine la pulpa de tamarindo, el azúcar, la soya, el ajo y el agua 8 minutos, hasta que espese como un sirope.",
        "Caliente el horno a 400 °F. Ponga los muslos en una bandeja, con la piel hacia arriba, y hornee 25 minutos.",
        "Unte los muslos con la mitad del glaseado y hornee 10 minutos. Repita con el resto y hornee 5 minutos más, hasta que brillen.",
        "Espolvoree el cebollín. Es agridulce, como los dulces de tamarindo de la plaza."
      ],
      en: [
        "Season the thighs with the adobo and let sit 15 minutes.",
        "In a pot, cook the tamarind pulp, sugar, soy sauce, garlic and water 8 minutes, until thick like a syrup.",
        "Heat the oven to 400 °F. Place the thighs on a tray skin side up and bake 25 minutes.",
        "Brush the thighs with half the glaze and bake 10 minutes. Repeat with the rest and bake 5 more minutes, until glossy.",
        "Sprinkle with the scallions. It's sweet and sour, like the tamarind candies at the market."
      ]
    }
  },
  {
    id: "pechugas-rellenas-espinaca",
    category: "aves",
    name: { es: "Pechugas Rellenas de Espinaca y Queso Blanco", en: "Chicken Breasts Stuffed with Spinach and White Cheese" },
    active: 55, total: 55,
    servings: 4,
    ingredients: {
      es: [
        "4 pechugas de pollo deshuesadas",
        "1 cucharadita de adobo",
        "2 tazas de espinaca fresca",
        "2 dientes de ajo picados",
        "2 cucharadas de aceite de oliva",
        "4 onzas de queso blanco del país desmoronado",
        "2 onzas de queso crema",
        "½ cucharadita de pimentón"
      ],
      en: [
        "4 boneless chicken breasts",
        "1 teaspoon adobo",
        "2 cups fresh spinach",
        "2 garlic cloves, chopped",
        "2 tablespoons olive oil",
        "4 ounces crumbled Puerto Rican white cheese (queso blanco)",
        "2 ounces cream cheese",
        "½ teaspoon paprika"
      ]
    },
    steps: {
      es: [
        "Saltee el ajo y la espinaca en 1 cucharada del aceite hasta que se marchite. Escurra y pique. Mézclela con los dos quesos.",
        "Caliente el horno a 375 °F. Abra un bolsillo a lo largo de cada pechuga con un cuchillo, sin atravesarla.",
        "Rellene las pechugas y ciérrelas con palillos. Sazone con el adobo y el pimentón.",
        "Dórelas en el resto del aceite 3 minutos por lado en un sartén que vaya al horno.",
        "Hornee 18 a 20 minutos, hasta que el centro llegue a 165 °F. Deje reposar 5 minutos, saque los palillos y corte en ruedas."
      ],
      en: [
        "Sauté the garlic and spinach in 1 tablespoon of the oil until wilted. Drain and chop. Mix with both cheeses.",
        "Heat the oven to 375 °F. Cut a lengthwise pocket into each breast with a knife, without cutting through.",
        "Stuff the breasts and close with toothpicks. Season with the adobo and paprika.",
        "Brown them in the rest of the oil 3 minutes per side in an ovenproof skillet.",
        "Bake 18 to 20 minutes, until the center reaches 165 °F. Let rest 5 minutes, remove the toothpicks and slice."
      ]
    }
  },
  {
    id: "pato-asado-naranja",
    category: "aves",
    name: { es: "Pato Asado con Naranja Agria y Ron", en: "Roast Duck with Sour Orange and Rum" },
    active: 210, total: 690, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "1 pato de 5 libras",
        "1 cucharadita de sal",
        "6 dientes de ajo majados",
        "1 cucharadita de orégano",
        "½ taza de jugo de naranja agria",
        "1 china en cuartos",
        "¼ taza de ron oscuro",
        "2 cucharadas de melao de caña"
      ],
      en: [
        "1 duck (5 pounds)",
        "1 teaspoon salt",
        "6 garlic cloves, mashed",
        "1 teaspoon oregano",
        "½ cup sour orange juice",
        "1 orange, quartered",
        "¼ cup dark rum",
        "2 tablespoons cane molasses"
      ]
    },
    steps: {
      es: [
        "Pinche la piel del pato por todas partes con un tenedor, sin llegar a la carne. Adóbelo por dentro y por fuera con la sal, el ajo, el orégano y la naranja agria, y déjelo toda la noche en la nevera.",
        "Caliente el horno a 325 °F. Ponga la china dentro del pato y colóquelo sobre una rejilla en un molde, con la pechuga hacia arriba.",
        "Hornee 2 horas 30 minutos, sacando la grasa del molde cada 45 minutos (guárdela para freír papas).",
        "Mezcle el ron y el melao, unte el pato y suba el horno a 400 °F. Hornee 15 minutos más, hasta que la piel brille y esté crujiente.",
        "Deje reposar 15 minutos antes de trinchar. Es para las fiestas: se sirve con arroz con gandules."
      ],
      en: [
        "Prick the duck skin all over with a fork, without reaching the meat. Season it inside and out with the salt, garlic, oregano and sour orange juice and refrigerate overnight.",
        "Heat the oven to 325 °F. Put the orange inside the duck and set it on a rack in a roasting pan, breast side up.",
        "Roast 2 hours 30 minutes, removing the fat from the pan every 45 minutes (save it for frying potatoes).",
        "Mix the rum and molasses, brush the duck and raise the oven to 400 °F. Roast 15 more minutes, until the skin is glossy and crisp.",
        "Let rest 15 minutes before carving. It's for the holidays: serve it with arroz con gandules."
      ]
    }
  },
  {
    id: "pollo-limon-ajo-horno",
    category: "aves",
    name: { es: "Pollo al Horno con Limón, Ajo y Recao", en: "Oven-Roasted Chicken with Lime, Garlic and Culantro" },
    active: 70, total: 130, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "1 pollo de 4 libras en presas",
        "¼ taza de jugo de limón",
        "1 cucharadita de ralladura de limón",
        "8 dientes de ajo majados",
        "6 hojas de recao picadas",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "3 cucharadas de aceite de oliva",
        "1 limón en ruedas"
      ],
      en: [
        "1 chicken (4 pounds), cut in pieces",
        "¼ cup lime juice",
        "1 teaspoon lime zest",
        "8 garlic cloves, mashed",
        "6 culantro (recao) leaves, chopped",
        "1 teaspoon salt",
        "½ teaspoon pepper",
        "3 tablespoons olive oil",
        "1 lime, sliced"
      ]
    },
    steps: {
      es: [
        "Mezcle el jugo y la ralladura de limón, el ajo, el recao, la sal, la pimienta y el aceite.",
        "Adobe el pollo con esa mezcla, metiéndola debajo de la piel, y déjelo 1 hora en la nevera.",
        "Caliente el horno a 400 °F. Ponga el pollo en un molde con la piel hacia arriba y las ruedas de limón alrededor.",
        "Hornee 45 a 50 minutos, bañándolo con su jugo a la mitad, hasta que la piel dore y el muslo llegue a 175 °F.",
        "Sirva con el jugo del molde. El recao le da el olor de la cocina de abuela."
      ],
      en: [
        "Mix the lime juice and zest, garlic, culantro, salt, pepper and oil.",
        "Rub the chicken with the mixture, getting it under the skin, and refrigerate 1 hour.",
        "Heat the oven to 400 °F. Place the chicken in a baking dish skin side up with the lime slices around it.",
        "Roast 45 to 50 minutes, basting halfway, until the skin is golden and the thigh reaches 175 °F.",
        "Serve with the pan juices. The culantro gives it the smell of grandma's kitchen."
      ]
    }
  },
  {
    id: "coquito-calabaza",
    category: "cocteles",
    name: { es: "Coquito de Calabaza", en: "Pumpkin Coquito" },
    active: 15, total: 255, wait: "frio",
    servings: 12,
    ingredients: {
      es: [
        "1 lata de 15 onzas de puré de calabaza",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "1 taza de ron blanco",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de nuez moscada",
        "¼ cucharadita de clavos molidos",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 can (15 oz) pumpkin purée",
        "1 can (13.5 oz) coconut milk",
        "1 can (15 oz) cream of coconut",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "1 cup white rum",
        "1 teaspoon ground cinnamon",
        "½ teaspoon nutmeg",
        "¼ teaspoon ground cloves",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Ponga todo en la licuadora, menos el ron, y licúe 1 minuto.",
        "Añada el ron y licúe unos segundos más.",
        "Pase por un colador fino a botellas de vidrio.",
        "Refrigere al menos 4 horas. Agite antes de servir porque la calabaza se asienta.",
        "Sirva frío en vasitos con canela por encima. Dura 2 semanas en la nevera. Para niños, haga una tanda sin el ron."
      ],
      en: [
        "Put everything except the rum in the blender and blend 1 minute.",
        "Add the rum and blend a few more seconds.",
        "Strain through a fine sieve into glass bottles.",
        "Refrigerate at least 4 hours. Shake before serving because the pumpkin settles.",
        "Serve cold in small glasses with cinnamon on top. It keeps 2 weeks in the refrigerator. For kids, make a batch without the rum."
      ]
    }
  },
  {
    id: "margarita-tamarindo",
    category: "cocteles",
    name: { es: "Margarita de Tamarindo", en: "Tamarind Margarita" },
    active: 15, total: 15,
    servings: 2,
    ingredients: {
      es: [
        "3 onzas de tequila blanco",
        "¼ taza de pulpa de tamarindo sin semillas",
        "1 onza de licor de naranja",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de sirope simple",
        "¼ taza de agua",
        "¼ cucharadita de sal",
        "1 cucharada de azúcar",
        "1 pizca de chile en polvo",
        "Hielo"
      ],
      en: [
        "3 ounces blanco tequila",
        "¼ cup seedless tamarind pulp",
        "1 ounce orange liqueur",
        "2 tablespoons lime juice",
        "2 tablespoons simple syrup",
        "¼ cup water",
        "¼ teaspoon salt",
        "1 tablespoon sugar",
        "1 pinch chili powder",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Disuelva la pulpa de tamarindo en el agua, aplastándola con un tenedor, y cuele.",
        "Mezcle la sal, el azúcar y el chile en un plato. Moje el borde de dos vasos con limón y páselos por la mezcla.",
        "En una coctelera con hielo, agite el tequila, el tamarindo, el licor de naranja, el limón y el sirope 15 segundos.",
        "Cuele en los vasos con hielo nuevo.",
        "Sirva enseguida. Es agria, dulce y con un toque picante."
      ],
      en: [
        "Dissolve the tamarind pulp in the water, mashing with a fork, and strain.",
        "Mix the salt, sugar and chili in a plate. Wet the rim of two glasses with lime and dip them in the mixture.",
        "In a shaker with ice, shake the tequila, tamarind, orange liqueur, lime juice and syrup 15 seconds.",
        "Strain into the glasses over fresh ice.",
        "Serve right away. It's sour, sweet and slightly spicy."
      ]
    }
  },
  {
    id: "mojito-pina",
    category: "cocteles",
    name: { es: "Mojito de Piña", en: "Pineapple Mojito" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 taza de piña fresca en cubitos",
        "16 hojas de menta (yerbabuena)",
        "2 cucharadas de azúcar",
        "2 cucharadas de jugo de limón",
        "3 onzas de ron blanco",
        "1 taza de agua con gas",
        "Hielo"
      ],
      en: [
        "1 cup fresh pineapple, diced",
        "16 mint leaves (yerbabuena)",
        "2 tablespoons sugar",
        "2 tablespoons lime juice",
        "3 ounces white rum",
        "1 cup sparkling water",
        "Ice"
      ]
    },
    steps: {
      es: [
        "En dos vasos altos, maje la piña, la menta, el azúcar y el limón con un majador, hasta que la piña suelte su jugo.",
        "Añada el ron y mezcle.",
        "Llene los vasos de hielo.",
        "Complete con el agua con gas y mezcle de abajo hacia arriba.",
        "Adorne con una ramita de menta y un triángulo de piña."
      ],
      en: [
        "In two tall glasses, muddle the pineapple, mint, sugar and lime juice until the pineapple releases its juice.",
        "Add the rum and stir.",
        "Fill the glasses with ice.",
        "Top with the sparkling water and stir from the bottom up.",
        "Garnish with a mint sprig and a pineapple wedge."
      ]
    }
  },
  {
    id: "mimosa-tropical",
    category: "cocteles",
    name: { es: "Mimosa Tropical de China y Parcha", en: "Tropical Orange and Passion Fruit Mimosa" },
    active: 5, total: 5,
    servings: 6,
    ingredients: {
      es: [
        "1 botella de 750 ml de vino espumoso frío",
        "1 taza de jugo de china frío",
        "½ taza de jugo de parcha frío",
        "2 cucharadas de sirope simple"
      ],
      en: [
        "1 bottle (750 ml) chilled sparkling wine",
        "1 cup chilled orange juice",
        "½ cup chilled passion fruit juice",
        "2 tablespoons simple syrup"
      ]
    },
    steps: {
      es: [
        "Mezcle el jugo de china, el de parcha y el sirope en una jarrita.",
        "Ponga ¼ taza de la mezcla en cada copa.",
        "Complete despacio con el vino espumoso, inclinando la copa para que no se derrame la espuma.",
        "No la mezcle con cuchara: las burbujas la mezclan solas.",
        "Sirva enseguida. Es para el brunch del domingo."
      ],
      en: [
        "Mix the orange juice, passion fruit juice and syrup in a small pitcher.",
        "Pour ¼ cup of the mix into each glass.",
        "Slowly top with the sparkling wine, tilting the glass so the foam doesn't spill.",
        "Don't stir with a spoon: the bubbles mix it on their own.",
        "Serve right away. It's for Sunday brunch."
      ]
    }
  },
  {
    id: "old-fashioned-ron-melao",
    category: "cocteles",
    name: { es: "Old Fashioned de Ron Añejo con Melao", en: "Aged Rum Old Fashioned with Cane Molasses" },
    active: 5, total: 5,
    servings: 1,
    ingredients: {
      es: [
        "2 onzas de ron añejo",
        "1 cucharadita de melao de caña",
        "1 cucharadita de agua tibia",
        "3 gotas de amargo de angostura",
        "1 tira de cáscara de china",
        "Hielo (1 cubo grande)"
      ],
      en: [
        "2 ounces aged rum",
        "1 teaspoon cane molasses",
        "1 teaspoon warm water",
        "3 dashes Angostura bitters",
        "1 strip orange peel",
        "Ice (1 large cube)"
      ]
    },
    steps: {
      es: [
        "En un vaso corto, disuelva el melao en el agua tibia.",
        "Añada el amargo y el ron, y mezcle.",
        "Ponga el cubo de hielo y mezcle 20 segundos para enfriar y aguar un poco.",
        "Exprima la cáscara de china sobre el vaso para que suelte su aceite y pásela por el borde.",
        "Échela dentro y sirva. El melao le da el sabor de la caña de las haciendas."
      ],
      en: [
        "In a short glass, dissolve the molasses in the warm water.",
        "Add the bitters and rum and stir.",
        "Add the ice cube and stir 20 seconds to chill and dilute slightly.",
        "Squeeze the orange peel over the glass to release its oil and rub it around the rim.",
        "Drop it in and serve. The molasses gives it the flavor of the old sugar-cane estates."
      ]
    }
  },
  {
    id: "ron-sour-acerola",
    category: "cocteles",
    name: { es: "Ron Sour de Acerola", en: "Acerola Rum Sour" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "3 onzas de ron dorado",
        "½ taza de jugo de acerola colado",
        "2 cucharadas de jugo de limón",
        "3 cucharadas de sirope simple",
        "1 clara de huevo pasteurizada",
        "Hielo"
      ],
      en: [
        "3 ounces gold rum",
        "½ cup strained acerola juice",
        "2 tablespoons lime juice",
        "3 tablespoons simple syrup",
        "1 pasteurized egg white",
        "Ice"
      ]
    },
    steps: {
      es: [
        "En una coctelera sin hielo, agite el ron, la acerola, el limón, el sirope y la clara 15 segundos para que haga espuma.",
        "Añada hielo y agite 15 segundos más.",
        "Cuele en dos copas.",
        "Deje reposar unos segundos para que la espuma suba.",
        "Sirva enseguida. La acerola le da un color rosado y mucha vitamina C. Puede omitir la clara; queda sin espuma."
      ],
      en: [
        "In a shaker without ice, shake the rum, acerola, lime juice, syrup and egg white 15 seconds to foam.",
        "Add ice and shake 15 more seconds.",
        "Strain into two glasses.",
        "Let sit a few seconds so the foam rises.",
        "Serve right away. The acerola gives it a pink color and lots of vitamin C. You can skip the egg white; it'll have no foam."
      ]
    }
  },
  // ---------- Tanda 55: más pescados y mariscos (18) ----------
  {
    id: "sierra-guisada-papas",
    category: "pescados",
    name: { es: "Sierra Guisada con Papas", en: "Kingfish Stewed with Potatoes" },
    active: 40, total: 55, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de sierra en ruedas de 1 pulgada",
        "2 cucharadas de jugo de limón",
        "1 cucharadita de sal",
        "3 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 hoja de laurel",
        "1 taza de agua",
        "3 papas en ruedas finas",
        "1 cebolla en ruedas"
      ],
      en: [
        "2 pounds kingfish (sierra), in 1-inch steaks",
        "2 tablespoons lime juice",
        "1 teaspoon salt",
        "3 tablespoons olive oil",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "¼ cup stuffed olives",
        "1 bay leaf",
        "1 cup water",
        "3 potatoes, thinly sliced",
        "1 onion, sliced into rings"
      ]
    },
    steps: {
      es: [
        "Sazone las ruedas de sierra con el limón y la mitad de la sal, y déjelas 15 minutos.",
        "En un caldero ancho, sofría la cebolla y el sofrito en el aceite 4 minutos.",
        "Añada la salsa de tomate, las aceitunas, el laurel, el agua, las papas y el resto de la sal. Tape y cocine 15 minutos, hasta que las papas estén casi blandas.",
        "Acomode las ruedas de sierra encima, en una sola capa, y bañelas con la salsa.",
        "Tape y cocine a fuego bajo 10 a 12 minutos, sin moverlas, hasta que el pescado se separe con un tenedor. Sirva con arroz blanco."
      ],
      en: [
        "Season the kingfish steaks with the lime juice and half the salt and let sit 15 minutes.",
        "In a wide caldero, sauté the onion and sofrito in the oil 4 minutes.",
        "Add the tomato sauce, olives, bay leaf, water, potatoes and the rest of the salt. Cover and cook 15 minutes, until the potatoes are almost tender.",
        "Arrange the kingfish on top in a single layer and spoon the sauce over it.",
        "Cover and cook over low heat 10 to 12 minutes, without stirring, until the fish flakes with a fork. Serve with white rice."
      ]
    }
  },
  {
    id: "camarones-ron-pina",
    category: "pescados",
    name: { es: "Camarones al Ron con Piña", en: "Rum Shrimp with Pineapple" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de camarones grandes pelados",
        "½ cucharadita de sal",
        "2 cucharadas de mantequilla",
        "3 dientes de ajo picados",
        "1 taza de piña fresca en cubitos",
        "¼ taza de ron oscuro",
        "2 cucharadas de azúcar morena",
        "1 cucharada de jugo de limón",
        "1 pizca de hojuelas de pimiento rojo",
        "2 cebollines picados"
      ],
      en: [
        "1½ pounds large shrimp, peeled",
        "½ teaspoon salt",
        "2 tablespoons butter",
        "3 garlic cloves, chopped",
        "1 cup fresh pineapple, diced",
        "¼ cup dark rum",
        "2 tablespoons brown sugar",
        "1 tablespoon lime juice",
        "1 pinch red pepper flakes",
        "2 scallions, chopped"
      ]
    },
    steps: {
      es: [
        "Sazone los camarones con la sal.",
        "En un sartén grande, derrita la mantequilla y dore la piña 4 minutos, hasta que se acaramele un poco.",
        "Añada el ajo y los camarones y cocine 2 minutos por lado.",
        "Retire el sartén del fuego, añada el ron (con cuidado, que puede encenderse) y vuelva al fuego. Agregue el azúcar, el limón y el pimiento, y cocine 2 minutos hasta que la salsa brille.",
        "Espolvoree el cebollín y sirva con arroz blanco o tostones."
      ],
      en: [
        "Season the shrimp with the salt.",
        "In a large skillet, melt the butter and brown the pineapple 4 minutes, until lightly caramelized.",
        "Add the garlic and shrimp and cook 2 minutes per side.",
        "Take the skillet off the heat, add the rum (carefully, it may flame) and return to the heat. Add the sugar, lime juice and pepper flakes and cook 2 minutes until the sauce is glossy.",
        "Sprinkle with the scallions and serve with white rice or tostones."
      ]
    }
  },
  {
    id: "langosta-salsa-coco",
    category: "pescados",
    name: { es: "Langosta en Salsa de Coco y Recao", en: "Lobster in Coconut and Culantro Sauce" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 colas de langosta (6 onzas cada una)",
        "2 cucharadas de aceite de oliva",
        "¼ taza de sofrito",
        "1 lata de 13.5 onzas de leche de coco",
        "2 cucharadas de salsa de tomate",
        "4 hojas de recao picadas",
        "1 cucharada de jugo de limón",
        "½ cucharadita de sal"
      ],
      en: [
        "4 lobster tails (6 ounces each)",
        "2 tablespoons olive oil",
        "¼ cup sofrito",
        "1 can (13.5 oz) coconut milk",
        "2 tablespoons tomato sauce",
        "4 culantro (recao) leaves, chopped",
        "1 tablespoon lime juice",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Con unas tijeras, corte la concha de las colas por debajo, saque la carne entera y córtela en medallones de 1 pulgada.",
        "Sofría el sofrito en el aceite 3 minutos.",
        "Añada la leche de coco, la salsa de tomate y la sal, y deje hervir suave 8 minutos, hasta que espese un poco.",
        "Añada la langosta y cocine 4 a 5 minutos, moviendo poco, hasta que esté blanca y firme. No la cocine de más o se pone dura.",
        "Apague, añada el recao y el limón. Sirva con arroz blanco o con mofongo."
      ],
      en: [
        "With kitchen shears, cut the shell of the tails underneath, remove the meat whole and cut it into 1-inch medallions.",
        "Sauté the sofrito in the oil 3 minutes.",
        "Add the coconut milk, tomato sauce and salt and simmer gently 8 minutes, until slightly thickened.",
        "Add the lobster and cook 4 to 5 minutes, stirring little, until white and firm. Don't overcook it or it turns tough.",
        "Turn off the heat and add the culantro and lime juice. Serve with white rice or mofongo."
      ]
    }
  },
  {
    id: "jueyes-ajillo",
    category: "pescados",
    name: { es: "Jueyes al Ajillo", en: "Garlic Land Crab (Jueyes al Ajillo)" },
    active: 20, total: 20,
    servings: 4,
    ingredients: {
      es: [
        "1 libra de carne de juey limpia",
        "¼ taza de aceite de oliva",
        "8 dientes de ajo en lascas",
        "1 ají dulce picado",
        "2 cucharadas de mantequilla",
        "1 cucharada de jugo de limón",
        "¼ taza de perejil picado",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 pound cleaned land crab meat (or lump crab meat)",
        "¼ cup olive oil",
        "8 garlic cloves, sliced",
        "1 ají dulce (sweet chili pepper), chopped",
        "2 tablespoons butter",
        "1 tablespoon lime juice",
        "¼ cup chopped parsley",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Revise la carne de juey con los dedos y saque cualquier pedacito de carapacho.",
        "En un sartén, dore el ajo en el aceite a fuego bajo hasta que esté doradito.",
        "Añada el ají dulce y la mantequilla y cocine 1 minuto.",
        "Añada el juey y la sal, y mezcle con cuidado 3 a 4 minutos, sólo hasta que esté caliente.",
        "Apague, añada el limón y el perejil. Sirva con tostones o arepas de coco, como en los kioscos de Piñones."
      ],
      en: [
        "Check the crab meat with your fingers and remove any bits of shell.",
        "In a skillet, brown the garlic in the oil over low heat until golden.",
        "Add the ají dulce and butter and cook 1 minute.",
        "Add the crab and salt and fold gently 3 to 4 minutes, just until hot.",
        "Turn off the heat and add the lime juice and parsley. Serve with tostones or coconut arepas, like at the Piñones kiosks."
      ]
    }
  },
  {
    id: "calamares-plancha",
    category: "pescados",
    name: { es: "Calamares a la Plancha con Ajo y Perejil", en: "Griddled Squid with Garlic and Parsley" },
    active: 20, total: 20,
    servings: 4,
    ingredients: {
      es: [
        "2 libras de calamares limpios (cuerpos y tentáculos)",
        "3 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "4 dientes de ajo picaditos",
        "¼ taza de perejil picado",
        "2 cucharadas de jugo de limón",
        "1 limón en cuñas"
      ],
      en: [
        "2 pounds cleaned squid (bodies and tentacles)",
        "3 tablespoons olive oil",
        "½ teaspoon salt",
        "4 garlic cloves, finely chopped",
        "¼ cup chopped parsley",
        "2 tablespoons lime juice",
        "1 lime, in wedges"
      ]
    },
    steps: {
      es: [
        "Abra los cuerpos de calamar a lo largo y márquelos por dentro con cortes en cruz, sin atravesarlos. Séquelos muy bien.",
        "Mezcle el ajo, el perejil, el limón y 2 cucharadas del aceite. Guarde este aliño.",
        "Caliente una plancha o sartén de hierro a fuego alto. Unte los calamares con el resto del aceite y la sal.",
        "Cocínelos 1 a 2 minutos por lado, en tandas, hasta que se enrosquen y doren. Más tiempo los pone gomosos.",
        "Rocíe el aliño de ajo y perejil y sirva enseguida con las cuñas de limón."
      ],
      en: [
        "Open the squid bodies lengthwise and score them inside in a crosshatch, without cutting through. Dry them very well.",
        "Mix the garlic, parsley, lime juice and 2 tablespoons of the oil. Set this dressing aside.",
        "Heat a griddle or cast-iron skillet over high heat. Rub the squid with the rest of the oil and the salt.",
        "Cook 1 to 2 minutes per side, in batches, until they curl and brown. Longer makes them rubbery.",
        "Drizzle with the garlic-parsley dressing and serve right away with the lime wedges."
      ]
    }
  },
  {
    id: "pulpo-gallega",
    category: "pescados",
    name: { es: "Pulpo a la Gallega con Papas", en: "Galician-Style Octopus with Potatoes" },
    active: 75, total: 75,
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de pulpo limpio (congelado y descongelado)",
        "1 cebolla partida",
        "1 hoja de laurel",
        "4 papas medianas con cáscara",
        "¼ taza de aceite de oliva",
        "1 cucharadita de pimentón dulce",
        "½ cucharadita de pimentón picante",
        "¼ cucharadita de sal gruesa"
      ],
      en: [
        "2½ pounds cleaned octopus (frozen and thawed)",
        "1 onion, halved",
        "1 bay leaf",
        "4 medium potatoes, unpeeled",
        "¼ cup olive oil",
        "1 teaspoon sweet paprika",
        "½ teaspoon hot paprika",
        "¼ teaspoon coarse salt"
      ]
    },
    steps: {
      es: [
        "Hierva agua suficiente con la cebolla y el laurel. Sumerja el pulpo 3 veces por 5 segundos (así se rizan las patas) y luego déjelo dentro.",
        "Cocine a fuego medio 45 a 50 minutos, hasta que un palillo entre fácil en la parte gruesa. Apague y deje reposar 10 minutos en el agua.",
        "Mientras, hierva las papas en otra olla 20 minutos, pélelas y córtelas en ruedas gruesas.",
        "Corte el pulpo en ruedas de ½ pulgada con unas tijeras.",
        "Ponga las papas en un plato de madera o fuente, el pulpo encima, y termine con el aceite, los dos pimentones y la sal gruesa. Sirva tibio."
      ],
      en: [
        "Bring plenty of water to a boil with the onion and bay leaf. Dip the octopus 3 times for 5 seconds (this curls the tentacles) and then leave it in.",
        "Cook over medium heat 45 to 50 minutes, until a toothpick slides easily into the thick part. Turn off and let rest 10 minutes in the water.",
        "Meanwhile, boil the potatoes in another pot 20 minutes, peel them and cut into thick rounds.",
        "Cut the octopus into ½-inch rounds with kitchen shears.",
        "Place the potatoes on a wooden board or platter, the octopus on top, and finish with the oil, both paprikas and the coarse salt. Serve warm."
      ]
    }
  },
  {
    id: "bacalao-coco",
    category: "pescados",
    name: { es: "Bacalao Guisado en Leche de Coco", en: "Salt Cod Stewed in Coconut Milk" },
    active: 40, total: 760, wait: "desalar",
    servings: 6,
    ingredients: {
      es: [
        "¾ libra de bacalao salado sin espinas",
        "2 cucharadas de aceite de oliva",
        "1 cebolla en tiras",
        "1 pimiento verde en tiras",
        "¼ taza de sofrito",
        "2 tomates picados",
        "1 lata de 13.5 onzas de leche de coco",
        "¼ taza de cilantro picado",
        "1 pizca de pimienta"
      ],
      en: [
        "¾ pound boneless salt cod",
        "2 tablespoons olive oil",
        "1 onion, sliced",
        "1 green bell pepper, sliced",
        "¼ cup sofrito",
        "2 tomatoes, chopped",
        "1 can (13.5 oz) coconut milk",
        "¼ cup chopped cilantro",
        "1 pinch pepper"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao en agua fría 12 horas, cambiando el agua 3 o 4 veces. Escúrralo y desmenúcelo en lascas.",
        "Sofría la cebolla, el pimiento y el sofrito en el aceite 5 minutos.",
        "Añada los tomates y cocine 5 minutos hasta que se deshagan.",
        "Añada la leche de coco, el bacalao y la pimienta. Cocine destapado a fuego bajo 15 minutos, hasta que la salsa espese. Pruebe antes de añadir sal: el bacalao suele traer suficiente.",
        "Añada el cilantro y sirva con viandas hervidas o arroz blanco. Así se cocina en la costa de Loíza."
      ],
      en: [
        "Desalt the cod in cold water for 12 hours, changing the water 3 or 4 times. Drain and flake it.",
        "Sauté the onion, bell pepper and sofrito in the oil 5 minutes.",
        "Add the tomatoes and cook 5 minutes until they break down.",
        "Add the coconut milk, cod and pepper. Cook uncovered over low heat 15 minutes, until the sauce thickens. Taste before adding salt: the cod usually brings enough.",
        "Add the cilantro and serve with boiled root vegetables or white rice. This is how it's cooked on the Loíza coast."
      ]
    }
  },
  {
    id: "atun-escabeche",
    category: "pescados",
    name: { es: "Atún Fresco en Escabeche", en: "Fresh Tuna Escabeche" },
    active: 30, total: 270, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de atún fresco en filetes de 1 pulgada",
        "½ cucharadita de sal",
        "½ taza de aceite de oliva",
        "2 cebollas en ruedas",
        "1 pimiento rojo en tiras",
        "6 dientes de ajo en lascas",
        "½ taza de vinagre",
        "10 granos de pimienta",
        "2 hojas de laurel",
        "¼ taza de aceitunas rellenas"
      ],
      en: [
        "2 pounds fresh tuna, in 1-inch steaks",
        "½ teaspoon salt",
        "½ cup olive oil",
        "2 onions, sliced into rings",
        "1 red bell pepper, sliced",
        "6 garlic cloves, sliced",
        "½ cup vinegar",
        "10 black peppercorns",
        "2 bay leaves",
        "¼ cup stuffed olives"
      ]
    },
    steps: {
      es: [
        "Sazone el atún con la mitad de la sal y dórelo en 2 cucharadas del aceite, 2 minutos por lado. Córtelo en cubos grandes y póngalo en un envase de cristal.",
        "En el mismo sartén, cocine a fuego bajo el resto del aceite con las cebollas, el pimiento, el ajo, la pimienta y el laurel, 8 minutos, sin que doren.",
        "Añada el vinagre, el resto de la sal y las aceitunas, y deje hervir 2 minutos.",
        "Vierta el escabeche caliente sobre el atún, cubriéndolo bien.",
        "Deje enfriar y refrigere al menos 4 horas. Sirva frío con guineítos o galletas de soda. Dura 5 días en la nevera."
      ],
      en: [
        "Season the tuna with half the salt and sear it in 2 tablespoons of the oil, 2 minutes per side. Cut into large cubes and put in a glass container.",
        "In the same skillet, cook the rest of the oil over low heat with the onions, bell pepper, garlic, peppercorns and bay leaves, 8 minutes, without browning.",
        "Add the vinegar, the rest of the salt and the olives and boil 2 minutes.",
        "Pour the hot escabeche over the tuna, covering it well.",
        "Let cool and refrigerate at least 4 hours. Serve cold with green bananas or soda crackers. It keeps 5 days in the refrigerator."
      ]
    }
  },
  {
    id: "salmon-naranja-agria",
    category: "pescados",
    name: { es: "Salmón al Horno con Mojo de Naranja Agria", en: "Baked Salmon with Sour Orange Mojo" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de salmón (6 onzas cada uno)",
        "¼ taza de jugo de naranja agria",
        "4 dientes de ajo majados",
        "½ cucharadita de orégano",
        "½ cucharadita de comino",
        "½ cucharadita de sal",
        "2 cucharadas de aceite de oliva",
        "1 cebolla roja en ruedas finas"
      ],
      en: [
        "4 salmon fillets (6 ounces each)",
        "¼ cup sour orange juice",
        "4 garlic cloves, mashed",
        "½ teaspoon oregano",
        "½ teaspoon cumin",
        "½ teaspoon salt",
        "2 tablespoons olive oil",
        "1 red onion, thinly sliced"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F.",
        "Mezcle la naranja agria, el ajo, el orégano, el comino, la sal y el aceite.",
        "Ponga la cebolla en un molde, los filetes encima con la piel hacia abajo, y vierta el mojo por encima.",
        "Hornee 12 a 15 minutos, hasta que el salmón se separe en lascas pero siga jugoso en el centro.",
        "Sirva con la cebolla y el jugo del molde por encima. Si no consigue naranja agria, use mitad jugo de china y mitad de limón."
      ],
      en: [
        "Heat the oven to 400 °F.",
        "Mix the sour orange juice, garlic, oregano, cumin, salt and oil.",
        "Put the onion in a baking dish, the fillets on top skin side down, and pour the mojo over them.",
        "Bake 12 to 15 minutes, until the salmon flakes but is still juicy in the center.",
        "Serve with the onion and pan juices on top. If you can't find sour orange, use half orange juice and half lime juice."
      ]
    }
  },
  {
    id: "tilapia-vizcaina",
    category: "pescados",
    name: { es: "Filetes de Tilapia a la Vizcaína", en: "Tilapia Fillets Vizcaína-Style" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de tilapia (6 onzas cada uno)",
        "¼ cucharadita de sal",
        "3 cucharadas de aceite de oliva",
        "1 cebolla en ruedas",
        "1 pimiento verde en tiras",
        "3 dientes de ajo picados",
        "1 lata de 8 onzas de salsa de tomate",
        "¼ taza de vino blanco seco",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 papas hervidas en ruedas"
      ],
      en: [
        "4 tilapia fillets (6 ounces each)",
        "¼ teaspoon salt",
        "3 tablespoons olive oil",
        "1 onion, sliced into rings",
        "1 green bell pepper, sliced",
        "3 garlic cloves, chopped",
        "1 can (8 oz) tomato sauce",
        "¼ cup dry white wine",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 boiled potatoes, sliced"
      ]
    },
    steps: {
      es: [
        "Sazone los filetes con la sal.",
        "En un sartén ancho, sofría la cebolla, el pimiento y el ajo en el aceite 5 minutos.",
        "Añada el vino y deje hervir 1 minuto. Agregue la salsa de tomate, las aceitunas y las alcaparras, y cocine 5 minutos.",
        "Acomode las papas y los filetes en la salsa, bañándolos por encima.",
        "Tape y cocine a fuego bajo 8 a 10 minutos, hasta que el pescado esté blanco y se separe. Sirva con arroz blanco."
      ],
      en: [
        "Season the fillets with the salt.",
        "In a wide skillet, sauté the onion, bell pepper and garlic in the oil 5 minutes.",
        "Add the wine and boil 1 minute. Add the tomato sauce, olives and capers and cook 5 minutes.",
        "Nestle the potatoes and fillets in the sauce, spooning it over them.",
        "Cover and cook over low heat 8 to 10 minutes, until the fish is white and flakes. Serve with white rice."
      ]
    }
  },
  {
    id: "deditos-pescado-horno",
    category: "pescados",
    name: { es: "Deditos de Pescado al Horno (para Niños)", en: "Baked Fish Sticks (Kid-Friendly)" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de filete de pescado blanco firme (mero o dorado)",
        "½ cucharadita de sal",
        "½ cucharadita de ajo en polvo",
        "½ taza de harina de trigo",
        "2 huevos batidos",
        "1½ tazas de panko",
        "¼ taza de queso parmesano rallado",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "1½ pounds firm white fish fillet (grouper or mahi mahi)",
        "½ teaspoon salt",
        "½ teaspoon garlic powder",
        "½ cup all-purpose flour",
        "2 eggs, beaten",
        "1½ cups panko",
        "¼ cup grated Parmesan cheese",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F y ponga una rejilla sobre una bandeja.",
        "Corte el pescado en bastones de ¾ de pulgada y sazone con la sal y el ajo en polvo.",
        "Mezcle el panko con el parmesano y el aceite.",
        "Pase cada bastón por la harina, el huevo y el panko, apretando para que se pegue. Acomódelos en la rejilla.",
        "Hornee 12 a 14 minutos, hasta que estén dorados. Sirva con salsa tártara o mayo-ketchup. Revise que no tengan espinas antes de dárselos a los niños."
      ],
      en: [
        "Heat the oven to 425 °F and set a rack on a baking sheet.",
        "Cut the fish into ¾-inch sticks and season with the salt and garlic powder.",
        "Mix the panko with the Parmesan and oil.",
        "Coat each stick in the flour, egg and panko, pressing so it sticks. Arrange them on the rack.",
        "Bake 12 to 14 minutes, until golden. Serve with tartar sauce or mayo-ketchup. Check for bones before giving them to kids."
      ]
    }
  },
  {
    id: "chillo-ajillo",
    category: "pescados",
    name: { es: "Filetes de Chillo al Ajillo", en: "Red Snapper Fillets in Garlic Sauce" },
    active: 20, total: 20,
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de chillo con piel (6 onzas cada uno)",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta",
        "¼ taza de aceite de oliva",
        "8 dientes de ajo en lascas",
        "2 cucharadas de mantequilla",
        "2 cucharadas de jugo de limón",
        "¼ taza de perejil picado"
      ],
      en: [
        "4 skin-on red snapper fillets (6 ounces each)",
        "½ teaspoon salt",
        "¼ teaspoon pepper",
        "¼ cup olive oil",
        "8 garlic cloves, sliced",
        "2 tablespoons butter",
        "2 tablespoons lime juice",
        "¼ cup chopped parsley"
      ]
    },
    steps: {
      es: [
        "Seque bien los filetes y sazónelos con la sal y la pimienta.",
        "En un sartén, caliente 2 cucharadas del aceite a fuego medio-alto y cocine los filetes con la piel hacia abajo 4 minutos, apretándolos al principio para que no se enrosquen. Voltee y cocine 2 minutos. Sáquelos.",
        "Baje el fuego, añada el resto del aceite y el ajo, y dórelo hasta que esté doradito.",
        "Añada la mantequilla, el limón y el perejil, y mueva el sartén para que se una la salsa.",
        "Bañe los filetes con el ajillo y sirva con tostones o arroz blanco."
      ],
      en: [
        "Dry the fillets well and season with the salt and pepper.",
        "In a skillet, heat 2 tablespoons of the oil over medium-high and cook the fillets skin side down 4 minutes, pressing them at first so they don't curl. Flip and cook 2 minutes. Remove.",
        "Lower the heat, add the rest of the oil and the garlic and cook until golden.",
        "Add the butter, lime juice and parsley and swirl the skillet to bring the sauce together.",
        "Spoon the garlic sauce over the fillets and serve with tostones or white rice."
      ]
    }
  },
  {
    id: "mero-parrilla-chimichurri",
    category: "pescados",
    name: { es: "Mero a la Parrilla con Chimichurri de Recao", en: "Grilled Grouper with Culantro Chimichurri" },
    active: 25, total: 55, wait: "adobo",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes gruesos de mero (6 onzas cada uno)",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de jugo de limón",
        "½ cucharadita de sal",
        "8 hojas de recao",
        "½ taza de perejil",
        "3 dientes de ajo",
        "⅓ taza de aceite de oliva para el chimichurri",
        "2 cucharadas de vinagre",
        "1 pizca de hojuelas de pimiento rojo"
      ],
      en: [
        "4 thick grouper fillets (6 ounces each)",
        "2 tablespoons olive oil",
        "1 tablespoon lime juice",
        "½ teaspoon salt",
        "8 culantro (recao) leaves",
        "½ cup parsley",
        "3 garlic cloves",
        "⅓ cup olive oil for the chimichurri",
        "2 tablespoons vinegar",
        "1 pinch red pepper flakes"
      ]
    },
    steps: {
      es: [
        "Unte el mero con las 2 cucharadas de aceite, el limón y la mitad de la sal, y déjelo 30 minutos en la nevera.",
        "Pique muy fino el recao, el perejil y el ajo, y mézclelos con el aceite del chimichurri, el vinagre, el pimiento y el resto de la sal.",
        "Caliente la parrilla a fuego medio-alto, límpiela y úntela con aceite.",
        "Ase el mero 4 minutos sin moverlo, voltéelo con una espátula ancha y ase 3 a 4 minutos más, hasta que se separe en lascas.",
        "Sirva con el chimichurri de recao por encima."
      ],
      en: [
        "Rub the grouper with the 2 tablespoons of oil, the lime juice and half the salt and refrigerate 30 minutes.",
        "Finely chop the culantro, parsley and garlic and mix with the chimichurri oil, vinegar, pepper flakes and the rest of the salt.",
        "Heat the grill to medium-high, clean it and oil the grates.",
        "Grill the grouper 4 minutes without moving it, flip with a wide spatula and grill 3 to 4 more minutes, until it flakes.",
        "Serve with the culantro chimichurri on top."
      ]
    }
  },
  {
    id: "vieiras-parcha",
    category: "pescados",
    name: { es: "Vieiras Doradas con Mantequilla de Parcha", en: "Seared Scallops with Passion Fruit Butter" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de vieiras grandes (scallops)",
        "1 cucharada de aceite",
        "3 cucharadas de mantequilla",
        "¼ taza de pulpa de parcha",
        "1 cucharadita de miel",
        "1 cucharada de cebollín picado"
      ],
      en: [
        "1½ pounds large sea scallops",
        "1 tablespoon oil",
        "3 tablespoons butter",
        "¼ cup passion fruit pulp",
        "1 teaspoon honey",
        "1 tablespoon chopped chives"
      ]
    },
    steps: {
      es: [
        "Quite el músculo pequeño del lado de las vieiras y séquelas muy bien con papel toalla. No les ponga sal: ya son saladitas.",
        "Caliente el aceite en un sartén de hierro a fuego alto hasta que humee un poco.",
        "Ponga las vieiras separadas y no las mueva 2 minutos, hasta que tengan una costra dorada. Voltee y cocine 1 minuto más. Sáquelas.",
        "Baje el fuego, añada la mantequilla, la parcha y la miel, y mueva 1 minuto hasta que espese.",
        "Bañe las vieiras con la mantequilla de parcha y espolvoree el cebollín. Sirva enseguida."
      ],
      en: [
        "Remove the small side muscle from the scallops and dry them very well with paper towels. Don't salt them: they're naturally briny.",
        "Heat the oil in a cast-iron skillet over high heat until it smokes slightly.",
        "Add the scallops spaced apart and don't move them for 2 minutes, until they have a golden crust. Flip and cook 1 more minute. Remove.",
        "Lower the heat, add the butter, passion fruit and honey and stir 1 minute until thickened.",
        "Spoon the passion fruit butter over the scallops and sprinkle with the chives. Serve right away."
      ]
    }
  },
  {
    id: "almejas-criolla",
    category: "pescados",
    name: { es: "Almejas en Salsa Criolla", en: "Clams in Creole Sauce" },
    active: 30, total: 50, wait: "remojo",
    servings: 4,
    ingredients: {
      es: [
        "30 almejas pequeñas (unas 2½ libras)",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "3 dientes de ajo picados",
        "½ taza de salsa de tomate",
        "½ taza de vino blanco seco",
        "½ taza de agua",
        "4 hojas de recao picadas",
        "4 rebanadas gruesas de pan de agua para mojar"
      ],
      en: [
        "30 small clams (about 2½ pounds)",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "3 garlic cloves, chopped",
        "½ cup tomato sauce",
        "½ cup dry white wine",
        "½ cup water",
        "4 culantro (recao) leaves, chopped",
        "4 thick slices Puerto Rican water bread for dipping"
      ]
    },
    steps: {
      es: [
        "Remoje las almejas 20 minutos en agua fría con un poco de sal para que suelten la arena. Bote las que estén abiertas o rotas.",
        "En una olla ancha, sofría el sofrito y el ajo en el aceite 3 minutos.",
        "Añada el vino, la salsa de tomate y el agua, y deje hervir 3 minutos.",
        "Añada las almejas, tape y cocine 6 a 8 minutos, moviendo la olla, hasta que se abran. Bote las que no abran.",
        "Añada el recao y sirva en platos hondos con el pan para mojar la salsa. No necesita sal: las almejas sueltan su agua salada."
      ],
      en: [
        "Soak the clams 20 minutes in cold water with a little salt so they release their sand. Discard any that are open or broken.",
        "In a wide pot, sauté the sofrito and garlic in the oil 3 minutes.",
        "Add the wine, tomato sauce and water and boil 3 minutes.",
        "Add the clams, cover and cook 6 to 8 minutes, shaking the pot, until they open. Discard any that don't open.",
        "Add the culantro and serve in bowls with the bread to dip in the sauce. It needs no salt: the clams release their briny water."
      ]
    }
  },
  {
    id: "sardinas-guisadas",
    category: "pescados",
    name: { es: "Sardinas Guisadas con Cebolla y Viandas", en: "Stewed Sardines with Onion and Root Vegetables" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de sardinas en salsa de tomate",
        "2 cucharadas de aceite de oliva",
        "1 cebolla grande en ruedas",
        "½ pimiento verde picado",
        "2 dientes de ajo picados",
        "2 cucharadas de sofrito",
        "1 cucharada de vinagre",
        "1 libra de yautía en trozos",
        "2 guineos verdes"
      ],
      en: [
        "2 cans (15 oz) sardines in tomato sauce",
        "2 tablespoons olive oil",
        "1 large onion, sliced into rings",
        "½ green bell pepper, chopped",
        "2 garlic cloves, chopped",
        "2 tablespoons sofrito",
        "1 tablespoon vinegar",
        "1 pound yautía (taro root), in chunks",
        "2 green bananas"
      ]
    },
    steps: {
      es: [
        "Hierva la yautía y los guineos pelados en agua sin sal 20 minutos, hasta que estén blandos. Escurra.",
        "Mientras, sofría la cebolla, el pimiento y el ajo en el aceite 5 minutos, hasta que la cebolla esté blandita.",
        "Añada el sofrito y el vinagre y cocine 1 minuto.",
        "Añada las sardinas con su salsa, en pedazos grandes, y cocine 5 minutos sin mover mucho.",
        "Sirva las sardinas sobre las viandas. Es el almuerzo rápido de siempre, hecho con lo que hay en la alacena."
      ],
      en: [
        "Boil the yautía and peeled green bananas in unsalted water 20 minutes, until tender. Drain.",
        "Meanwhile, sauté the onion, bell pepper and garlic in the oil 5 minutes, until the onion is soft.",
        "Add the sofrito and vinegar and cook 1 minute.",
        "Add the sardines with their sauce, in large pieces, and cook 5 minutes without stirring much.",
        "Serve the sardines over the root vegetables. It's the classic quick lunch made from what's in the pantry."
      ]
    }
  },
  {
    id: "ostiones-parrilla-ajo",
    category: "pescados",
    name: { es: "Ostiones a la Parrilla con Mantequilla de Ajo", en: "Grilled Oysters with Garlic Butter" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "24 ostiones frescos en su concha",
        "½ taza de mantequilla blanda",
        "4 dientes de ajo majados",
        "2 cucharadas de perejil picado",
        "1 cucharada de jugo de limón",
        "¼ taza de queso parmesano rallado",
        "1 limón en cuñas"
      ],
      en: [
        "24 fresh oysters in the shell",
        "½ cup softened butter",
        "4 garlic cloves, mashed",
        "2 tablespoons chopped parsley",
        "1 tablespoon lime juice",
        "¼ cup grated Parmesan cheese",
        "1 lime, in wedges"
      ]
    },
    steps: {
      es: [
        "Mezcle la mantequilla, el ajo, el perejil y el limón.",
        "Restriegue bien las conchas de los ostiones con un cepillo bajo agua fría.",
        "Ábralos con un cuchillo de ostiones, protegiéndose la mano con un paño, y suelte el ostión de la concha de abajo sin botar su jugo.",
        "Ponga 1 cucharadita de mantequilla de ajo y un poco de parmesano sobre cada uno.",
        "Áselos en la parrilla caliente, tapada, 4 a 5 minutos, hasta que la mantequilla burbujee y los bordes se enrosquen. Sirva con limón."
      ],
      en: [
        "Mix the butter, garlic, parsley and lime juice.",
        "Scrub the oyster shells well with a brush under cold water.",
        "Open them with an oyster knife, protecting your hand with a towel, and loosen each oyster from the bottom shell without losing its liquor.",
        "Put 1 teaspoon of garlic butter and a little Parmesan on each one.",
        "Grill them on a hot covered grill 4 to 5 minutes, until the butter bubbles and the edges curl. Serve with lime."
      ]
    }
  },
  {
    id: "carrucho-ajillo",
    category: "pescados",
    name: { es: "Carrucho al Ajillo", en: "Garlic Conch (Carrucho al Ajillo)" },
    active: 100, total: 100,
    servings: 4,
    ingredients: {
      es: [
        "2 libras de carrucho limpio",
        "8 tazas de agua",
        "1 hoja de laurel",
        "¼ taza de aceite de oliva",
        "10 dientes de ajo picados",
        "1 ají dulce picado",
        "2 cucharadas de jugo de limón",
        "¼ taza de cilantro picado",
        "½ cucharadita de sal"
      ],
      en: [
        "2 pounds cleaned conch",
        "8 cups water",
        "1 bay leaf",
        "¼ cup olive oil",
        "10 garlic cloves, chopped",
        "1 ají dulce (sweet chili pepper), chopped",
        "2 tablespoons lime juice",
        "¼ cup chopped cilantro",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Golpee el carrucho con un mazo de carne para ablandarlo.",
        "Hiérvalo en el agua con el laurel, tapado, 1 hora a 1 hora 15 minutos (20 minutos en olla de presión), hasta que esté blando. Escurra y córtelo en tiritas finas.",
        "En un sartén, cocine el ajo en el aceite a fuego bajo 3 minutos, sin que se queme.",
        "Añada el ají dulce, el carrucho y la sal, y saltee 4 minutos.",
        "Apague, añada el limón y el cilantro. Sirva con tostones o arroz blanco, como en las pescaderías de Fajardo."
      ],
      en: [
        "Pound the conch with a meat mallet to tenderize it.",
        "Simmer it in the water with the bay leaf, covered, 1 hour to 1 hour 15 minutes (20 minutes in a pressure cooker), until tender. Drain and cut into thin strips.",
        "In a skillet, cook the garlic in the oil over low heat 3 minutes, without burning it.",
        "Add the ají dulce, conch and salt and sauté 4 minutes.",
        "Turn off the heat and add the lime juice and cilantro. Serve with tostones or white rice, like at the Fajardo fish markets."
      ]
    }
  },
  // ---------- Tanda 56: más asopaos (6) y sopas, cremas y caldos (10) ----------
  {
    id: "asopao-gandules-pollo",
    category: "sopas",
    name: { es: "Asopao de Gandules con Pollo", en: "Pigeon Pea and Chicken Asopao" },
    active: 60, total: 60,
    servings: 8,
    ingredients: {
      es: [
        "2 libras de muslos de pollo sin piel",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 lata de 15 onzas de gandules, escurridos",
        "8 tazas de agua",
        "1 cubito de caldo de pollo",
        "1 taza de arroz grano mediano, lavado",
        "¼ taza de aceitunas rellenas",
        "4 hojas de recao picadas"
      ],
      en: [
        "2 pounds skinless chicken thighs",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "1 can (15 oz) pigeon peas (gandules), drained",
        "8 cups water",
        "1 chicken bouillon cube",
        "1 cup medium-grain rice, rinsed",
        "¼ cup stuffed olives",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con el adobo y dórelo en el aceite de achiote en una olla grande.",
        "Añada el sofrito y la salsa de tomate y sofría 3 minutos.",
        "Agregue el agua y el cubito, tape y cocine 25 minutos. Saque el pollo, desmenúcelo y devuélvalo sin los huesos.",
        "Añada los gandules, el arroz y las aceitunas, y cocine destapado 20 minutos a fuego medio, moviendo de vez en cuando, hasta que el arroz esté blando y el caldo espese.",
        "Añada el recao y sirva enseguida con tostones. Si se espesa al reposar, añada agua caliente."
      ],
      en: [
        "Season the chicken with the adobo and brown it in the annatto oil in a large pot.",
        "Add the sofrito and tomato sauce and sauté 3 minutes.",
        "Add the water and bouillon cube, cover and cook 25 minutes. Remove the chicken, shred it and return it without the bones.",
        "Add the pigeon peas, rice and olives and cook uncovered 20 minutes over medium heat, stirring now and then, until the rice is tender and the broth thickens.",
        "Add the culantro and serve right away with tostones. If it thickens as it sits, add hot water."
      ]
    }
  },
  {
    id: "asopao-pescado-recao",
    category: "sopas",
    name: { es: "Asopao de Pescado con Recao", en: "Fish Asopao with Culantro" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de filete de pescado blanco firme (mero o chillo) en cubos",
        "1 cucharada de jugo de limón",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "6 tazas de caldo de pescado bajo en sodio (o de vegetales)",
        "1 taza de arroz grano mediano, lavado",
        "1 taza de calabaza en cubitos",
        "¼ taza de aceitunas rellenas",
        "6 hojas de recao picadas",
        "½ cucharadita de sal"
      ],
      en: [
        "1½ pounds firm white fish fillet (grouper or red snapper), cubed",
        "1 tablespoon lime juice",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "6 cups low-sodium fish or vegetable broth",
        "1 cup medium-grain rice, rinsed",
        "1 cup diced calabaza (West Indian pumpkin)",
        "¼ cup stuffed olives",
        "6 culantro (recao) leaves, chopped",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Mezcle el pescado con el limón y la sal, y guárdelo en la nevera mientras prepara el caldo.",
        "En una olla, sofría el sofrito en el aceite de achiote 3 minutos y añada la salsa de tomate.",
        "Agregue el caldo, la calabaza, el arroz y las aceitunas, y cocine destapado 18 minutos, moviendo de vez en cuando.",
        "Añada el pescado y cocine 5 a 6 minutos más, moviendo con cuidado para que no se desbarate.",
        "Apague, añada el recao y sirva enseguida, antes de que el arroz chupe todo el caldo."
      ],
      en: [
        "Toss the fish with the lime juice and salt and refrigerate while you start the broth.",
        "In a pot, sauté the sofrito in the annatto oil 3 minutes and add the tomato sauce.",
        "Add the broth, calabaza, rice and olives and cook uncovered 18 minutes, stirring now and then.",
        "Add the fish and cook 5 to 6 more minutes, stirring gently so it doesn't fall apart.",
        "Turn off the heat, add the culantro and serve right away, before the rice soaks up all the broth."
      ]
    }
  },
  {
    id: "asopao-calamares",
    category: "sopas",
    name: { es: "Asopao de Calamares", en: "Squid Asopao" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de calamares limpios, en anillos",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "3 dientes de ajo picados",
        "½ taza de salsa de tomate",
        "¼ taza de vino blanco seco",
        "6 tazas de caldo de pescado bajo en sodio (o de vegetales)",
        "1 taza de arroz grano mediano, lavado",
        "½ taza de guisantes (petit pois)",
        "¼ taza de perejil picado"
      ],
      en: [
        "1½ pounds cleaned squid, cut into rings",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "3 garlic cloves, chopped",
        "½ cup tomato sauce",
        "¼ cup dry white wine",
        "6 cups low-sodium fish or vegetable broth",
        "1 cup medium-grain rice, rinsed",
        "½ cup green peas",
        "¼ cup chopped parsley"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría el sofrito y el ajo en el aceite 3 minutos.",
        "Añada el vino y deje hervir 1 minuto. Agregue la salsa de tomate y el caldo.",
        "Cuando hierva, añada el arroz y cocine destapado 15 minutos, moviendo de vez en cuando.",
        "Añada los calamares y los guisantes y cocine 3 minutos, sólo hasta que los calamares se pongan blancos. Más tiempo los pone gomosos.",
        "Añada el perejil y sirva enseguida. Pruebe la sal antes de añadir: el caldo suele traer suficiente."
      ],
      en: [
        "In a pot, sauté the sofrito and garlic in the oil 3 minutes.",
        "Add the wine and boil 1 minute. Add the tomato sauce and broth.",
        "When it boils, add the rice and cook uncovered 15 minutes, stirring now and then.",
        "Add the squid and peas and cook 3 minutes, just until the squid turns white. Longer makes it rubbery.",
        "Add the parsley and serve right away. Taste before adding salt: the broth usually brings enough."
      ]
    }
  },
  {
    id: "asopao-longaniza",
    category: "sopas",
    name: { es: "Asopao de Longaniza", en: "Longaniza Sausage Asopao" },
    active: 45, total: 45,
    servings: 8,
    ingredients: {
      es: [
        "1 libra de longaniza en ruedas",
        "1 cucharada de aceite",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "8 tazas de agua",
        "1½ tazas de arroz grano mediano, lavado",
        "2 papas en cubitos",
        "1 taza de calabaza en cubitos",
        "¼ taza de aceitunas rellenas",
        "4 hojas de recao picadas"
      ],
      en: [
        "1 pound longaniza sausage, sliced",
        "1 tablespoon oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "8 cups water",
        "1½ cups medium-grain rice, rinsed",
        "2 potatoes, diced",
        "1 cup diced calabaza (West Indian pumpkin)",
        "¼ cup stuffed olives",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "En una olla, dore la longaniza en el aceite 6 minutos. Saque un poco de la grasa si suelta mucha.",
        "Añada el sofrito y la salsa de tomate y sofría 3 minutos.",
        "Agregue el agua, las papas y la calabaza, y cocine 10 minutos.",
        "Añada el arroz y las aceitunas, y cocine destapado 18 a 20 minutos, moviendo de vez en cuando, hasta que el arroz esté blando. No le ponga sal: la longaniza y las aceitunas la traen.",
        "Añada el recao y sirva caliente. Es el asopao de las noches de lluvia en el campo."
      ],
      en: [
        "In a pot, brown the longaniza in the oil 6 minutes. Spoon off some fat if it releases a lot.",
        "Add the sofrito and tomato sauce and sauté 3 minutes.",
        "Add the water, potatoes and calabaza and cook 10 minutes.",
        "Add the rice and olives and cook uncovered 18 to 20 minutes, stirring now and then, until the rice is tender. Don't add salt: the longaniza and olives bring it.",
        "Add the culantro and serve hot. It's the asopao for rainy nights in the countryside."
      ]
    }
  },
  {
    id: "asopao-pavo",
    category: "sopas",
    name: { es: "Asopao de Pavo (con el Pavo que Sobra)", en: "Leftover Turkey Asopao" },
    active: 40, total: 40,
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de pavo asado desmenuzado",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "8 tazas de caldo de pollo bajo en sodio",
        "1 taza de arroz grano mediano, lavado",
        "1 taza de gandules, escurridos",
        "¼ taza de aceitunas rellenas",
        "¼ taza de cilantro picado"
      ],
      en: [
        "3 cups shredded roast turkey",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "8 cups low-sodium chicken broth",
        "1 cup medium-grain rice, rinsed",
        "1 cup pigeon peas (gandules), drained",
        "¼ cup stuffed olives",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría el sofrito en el aceite de achiote 3 minutos y añada la salsa de tomate.",
        "Agregue el caldo y deje hervir.",
        "Añada el arroz, los gandules y las aceitunas, y cocine destapado 18 minutos, moviendo de vez en cuando.",
        "Añada el pavo y cocine 5 minutos más, hasta que esté caliente y el caldo espese.",
        "Añada el cilantro y sirva. Es lo que se hace con el pavo de Acción de Gracias o de Navidad."
      ],
      en: [
        "In a pot, sauté the sofrito in the annatto oil 3 minutes and add the tomato sauce.",
        "Add the broth and bring to a boil.",
        "Add the rice, pigeon peas and olives and cook uncovered 18 minutes, stirring now and then.",
        "Add the turkey and cook 5 more minutes, until hot and the broth thickens.",
        "Add the cilantro and serve. It's what's made with the Thanksgiving or Christmas turkey."
      ]
    }
  },
  {
    id: "asopao-salchichas",
    category: "sopas",
    name: { es: "Asopao de Salchichas (Económico)", en: "Vienna Sausage Asopao (Budget-Friendly)" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 4.6 onzas de salchichas, en ruedas",
        "1 cucharada de aceite de achiote",
        "¼ taza de sofrito",
        "¼ taza de salsa de tomate",
        "6 tazas de agua",
        "1 taza de arroz grano mediano, lavado",
        "1 papa en cubitos",
        "½ taza de guisantes (petit pois)",
        "2 hojas de recao picadas"
      ],
      en: [
        "2 cans (4.6 oz) Vienna sausages, sliced",
        "1 tablespoon annatto oil",
        "¼ cup sofrito",
        "¼ cup tomato sauce",
        "6 cups water",
        "1 cup medium-grain rice, rinsed",
        "1 potato, diced",
        "½ cup green peas",
        "2 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría las salchichas en el aceite de achiote 3 minutos.",
        "Añada el sofrito y la salsa de tomate y sofría 2 minutos.",
        "Agregue el agua y la papa y deje hervir.",
        "Añada el arroz y cocine destapado 18 minutos, moviendo de vez en cuando. Los últimos 3 minutos añada los guisantes.",
        "Añada el recao y sirva. Es el asopao de fin de mes: se hace con lo que hay en la alacena."
      ],
      en: [
        "In a pot, sauté the sausages in the annatto oil 3 minutes.",
        "Add the sofrito and tomato sauce and sauté 2 minutes.",
        "Add the water and potato and bring to a boil.",
        "Add the rice and cook uncovered 18 minutes, stirring now and then. Add the peas for the last 3 minutes.",
        "Add the culantro and serve. It's the end-of-the-month asopao, made with what's in the pantry."
      ]
    }
  },
  {
    id: "sopa-cebolla-criolla",
    category: "sopas",
    name: { es: "Sopa de Cebolla Gratinada con Queso de Papa", en: "French Onion Soup with Gouda (Puerto Rican Style)" },
    active: 75, total: 75,
    servings: 6,
    ingredients: {
      es: [
        "3 cucharadas de mantequilla",
        "4 cebollas grandes en ruedas finas",
        "1 cucharadita de azúcar",
        "2 dientes de ajo picados",
        "½ taza de vino blanco seco",
        "6 tazas de caldo de res bajo en sodio",
        "1 ramita de tomillo",
        "6 rebanadas de pan de agua tostado",
        "1½ tazas de queso de papa (gouda) rallado"
      ],
      en: [
        "3 tablespoons butter",
        "4 large onions, thinly sliced",
        "1 teaspoon sugar",
        "2 garlic cloves, chopped",
        "½ cup dry white wine",
        "6 cups low-sodium beef broth",
        "1 sprig thyme",
        "6 slices toasted Puerto Rican water bread",
        "1½ cups shredded gouda (queso de papa)"
      ]
    },
    steps: {
      es: [
        "En una olla gruesa, cocine las cebollas en la mantequilla con el azúcar a fuego medio-bajo 40 minutos, moviendo cada 5 minutos, hasta que estén color caramelo.",
        "Añada el ajo y cocine 1 minuto. Agregue el vino y raspe el fondo.",
        "Añada el caldo y el tomillo y cocine 15 minutos.",
        "Caliente el horno en asar (broil). Sirva la sopa en tazones que vayan al horno, ponga una rebanada de pan encima y cúbrala con el queso.",
        "Gratine 2 a 3 minutos, hasta que el queso burbujee y dore. Cuidado: los tazones salen muy calientes."
      ],
      en: [
        "In a heavy pot, cook the onions in the butter with the sugar over medium-low heat 40 minutes, stirring every 5 minutes, until caramel-colored.",
        "Add the garlic and cook 1 minute. Add the wine and scrape the bottom.",
        "Add the broth and thyme and cook 15 minutes.",
        "Heat the broiler. Ladle the soup into ovenproof bowls, top with a slice of bread and cover with the cheese.",
        "Broil 2 to 3 minutes, until the cheese bubbles and browns. Careful: the bowls come out very hot."
      ]
    }
  },
  {
    id: "sopa-tomate-recao",
    category: "sopas",
    name: { es: "Sopa de Tomate Asado con Recao", en: "Roasted Tomato Soup with Culantro" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "3 libras de tomates maduros partidos a la mitad",
        "1 cebolla en cuartos",
        "6 dientes de ajo",
        "3 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "3 tazas de caldo de vegetales bajo en sodio",
        "6 hojas de recao",
        "¼ taza de crema de coco o de leche"
      ],
      en: [
        "3 pounds ripe tomatoes, halved",
        "1 onion, quartered",
        "6 garlic cloves",
        "3 tablespoons olive oil",
        "½ teaspoon salt",
        "3 cups low-sodium vegetable broth",
        "6 culantro (recao) leaves",
        "¼ cup coconut cream or heavy cream"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F. Ponga los tomates, la cebolla y el ajo en una bandeja, rocíe el aceite y la sal.",
        "Hornee 35 minutos, hasta que los tomates estén arrugados y con orillas tostadas.",
        "Pase todo a una olla con el caldo y el recao y deje hervir 5 minutos.",
        "Licúe hasta que esté suave (con cuidado, en tandas, tapando la licuadora con un paño).",
        "Añada la crema y sirva. Con crema de coco es vegana. Va bien con un sándwich de queso de papa a la plancha."
      ],
      en: [
        "Heat the oven to 425 °F. Place the tomatoes, onion and garlic on a tray and drizzle with the oil and salt.",
        "Roast 35 minutes, until the tomatoes are wrinkled with charred edges.",
        "Transfer everything to a pot with the broth and culantro and boil 5 minutes.",
        "Blend until smooth (carefully, in batches, covering the blender with a towel).",
        "Stir in the cream and serve. With coconut cream it's vegan. It goes great with a grilled gouda sandwich."
      ]
    }
  },
  {
    id: "crema-malanga",
    category: "sopas",
    name: { es: "Crema de Malanga con Ajo y Recao", en: "Cream of Malanga Soup with Garlic and Culantro" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de malanga pelada en cubos",
        "2 cucharadas de mantequilla",
        "1 cebolla picada",
        "4 dientes de ajo",
        "5 tazas de caldo de pollo bajo en sodio",
        "½ taza de leche evaporada",
        "4 hojas de recao",
        "½ cucharadita de sal"
      ],
      en: [
        "2 pounds malanga, peeled and cubed",
        "2 tablespoons butter",
        "1 onion, chopped",
        "4 garlic cloves",
        "5 cups low-sodium chicken broth",
        "½ cup evaporated milk",
        "4 culantro (recao) leaves",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría la cebolla y el ajo en la mantequilla 4 minutos, sin que doren.",
        "Añada la malanga, el caldo y la sal. Tape y cocine 25 minutos, hasta que la malanga se deshaga al pincharla.",
        "Añada el recao y licúe hasta que esté suave.",
        "Devuelva a la olla, añada la leche evaporada y caliente sin que hierva.",
        "Si queda muy espesa, añada caldo. La malanga es suave para el estómago: es la crema que se le da a los convalecientes."
      ],
      en: [
        "In a pot, sauté the onion and garlic in the butter 4 minutes, without browning.",
        "Add the malanga, broth and salt. Cover and cook 25 minutes, until the malanga falls apart when pierced.",
        "Add the culantro and blend until smooth.",
        "Return to the pot, add the evaporated milk and heat without boiling.",
        "If it's too thick, add broth. Malanga is easy on the stomach: it's the soup given to people recovering from illness."
      ]
    }
  },
  {
    id: "crema-chayote",
    category: "sopas",
    name: { es: "Crema de Chayote", en: "Cream of Chayote Soup" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "4 chayotes pelados, sin semilla, en cubos",
        "1 papa en cubos",
        "2 cucharadas de aceite de oliva",
        "1 cebolla picada",
        "2 dientes de ajo",
        "5 tazas de caldo de vegetales bajo en sodio",
        "½ cucharadita de sal",
        "¼ cucharadita de nuez moscada",
        "¼ taza de queso parmesano rallado"
      ],
      en: [
        "4 chayotes, peeled, seeded and cubed",
        "1 potato, cubed",
        "2 tablespoons olive oil",
        "1 onion, chopped",
        "2 garlic cloves",
        "5 cups low-sodium vegetable broth",
        "½ teaspoon salt",
        "¼ teaspoon nutmeg",
        "¼ cup grated Parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Pele los chayotes bajo el chorro de agua o con guantes: sueltan una savia que pega en las manos.",
        "En una olla, sofría la cebolla y el ajo en el aceite 4 minutos.",
        "Añada los chayotes, la papa, el caldo y la sal. Tape y cocine 20 minutos, hasta que estén blandos.",
        "Licúe con la nuez moscada hasta que esté suave.",
        "Sirva con el parmesano por encima. Es liviana: el chayote es casi todo agua y fibra."
      ],
      en: [
        "Peel the chayotes under running water or with gloves: they release a sap that sticks to your hands.",
        "In a pot, sauté the onion and garlic in the oil 4 minutes.",
        "Add the chayotes, potato, broth and salt. Cover and cook 20 minutes, until tender.",
        "Blend with the nutmeg until smooth.",
        "Serve topped with the Parmesan. It's light: chayote is almost all water and fiber."
      ]
    }
  },
  {
    id: "crema-zanahoria-china",
    category: "sopas",
    name: { es: "Crema de Zanahoria y China (Vegana)", en: "Carrot and Orange Soup (Vegan)" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: [
        "2 libras de zanahorias en ruedas",
        "2 cucharadas de aceite de oliva",
        "1 cebolla picada",
        "1 cucharada de jengibre fresco rallado",
        "4 tazas de caldo de vegetales bajo en sodio",
        "1 taza de jugo de china",
        "1 cucharadita de ralladura de china",
        "½ cucharadita de sal",
        "½ taza de leche de coco"
      ],
      en: [
        "2 pounds carrots, sliced",
        "2 tablespoons olive oil",
        "1 onion, chopped",
        "1 tablespoon grated fresh ginger",
        "4 cups low-sodium vegetable broth",
        "1 cup orange juice",
        "1 teaspoon orange zest",
        "½ teaspoon salt",
        "½ cup coconut milk"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría la cebolla en el aceite 5 minutos. Añada el jengibre y cocine 1 minuto.",
        "Añada las zanahorias, el caldo y la sal. Tape y cocine 25 minutos, hasta que estén muy blandas.",
        "Añada el jugo y la ralladura de china y licúe hasta que esté suave.",
        "Devuelva a la olla con la leche de coco y caliente sin que hierva.",
        "Sirva con un hilito de leche de coco por encima. Es vegana y de color naranja brillante; a los niños les gusta."
      ],
      en: [
        "In a pot, sauté the onion in the oil 5 minutes. Add the ginger and cook 1 minute.",
        "Add the carrots, broth and salt. Cover and cook 25 minutes, until very tender.",
        "Add the orange juice and zest and blend until smooth.",
        "Return to the pot with the coconut milk and heat without boiling.",
        "Serve with a swirl of coconut milk on top. It's vegan and bright orange; kids like it."
      ]
    }
  },
  {
    id: "sopa-pollo-viandas",
    category: "sopas",
    name: { es: "Sopa de Pollo con Viandas (Sopa de Domingo)", en: "Chicken Soup with Root Vegetables (Sunday Soup)" },
    active: 75, total: 75,
    servings: 8,
    ingredients: {
      es: [
        "3 libras de presas de pollo con hueso",
        "12 tazas de agua",
        "½ taza de sofrito",
        "¼ taza de salsa de tomate",
        "1 cubito de caldo de pollo",
        "1 libra de yautía en trozos",
        "1 libra de calabaza en trozos",
        "1 plátano verde en ruedas",
        "2 mazorcas de maíz en pedazos",
        "2 zanahorias en ruedas",
        "1 cucharadita de sal",
        "6 hojas de recao picadas"
      ],
      en: [
        "3 pounds bone-in chicken pieces",
        "12 cups water",
        "½ cup sofrito",
        "¼ cup tomato sauce",
        "1 chicken bouillon cube",
        "1 pound yautía (taro root), in chunks",
        "1 pound calabaza (West Indian pumpkin), in chunks",
        "1 green plantain, sliced",
        "2 ears of corn, cut in pieces",
        "2 carrots, sliced",
        "1 teaspoon salt",
        "6 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "En una olla grande, hierva el pollo en el agua con el sofrito, la salsa de tomate y el cubito, tapado, 30 minutos. Quite la espuma al principio.",
        "Añada la yautía, el plátano y las zanahorias, y cocine 15 minutos.",
        "Añada la calabaza, el maíz y la sal, y cocine 15 minutos más, hasta que todo esté blando y la calabaza espese el caldo.",
        "Saque el pollo, quítele la piel y los huesos, y devuélvalo en pedazos.",
        "Añada el recao y sirva con arroz blanco aparte. Es la sopa grande de los domingos en casa de abuela."
      ],
      en: [
        "In a large pot, simmer the chicken in the water with the sofrito, tomato sauce and bouillon, covered, 30 minutes. Skim the foam at the start.",
        "Add the yautía, plantain and carrots and cook 15 minutes.",
        "Add the calabaza, corn and salt and cook 15 more minutes, until everything is tender and the calabaza thickens the broth.",
        "Remove the chicken, take off the skin and bones and return it in pieces.",
        "Add the culantro and serve with white rice on the side. It's the big Sunday soup at grandma's house."
      ]
    }
  },
  {
    id: "sopa-mariscos-criolla",
    category: "sopas",
    name: { es: "Sopa de Mariscos Criolla", en: "Creole Seafood Soup" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "½ libra de camarones pelados",
        "½ libra de calamares en anillos",
        "½ libra de filete de pescado blanco en cubos",
        "1 libra de mejillones limpios",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito",
        "3 dientes de ajo picados",
        "1 lata de 8 onzas de salsa de tomate",
        "½ taza de vino blanco seco",
        "6 tazas de caldo de pescado bajo en sodio",
        "2 papas en cubitos",
        "4 hojas de recao picadas"
      ],
      en: [
        "½ pound shrimp, peeled",
        "½ pound squid rings",
        "½ pound white fish fillet, cubed",
        "1 pound mussels, cleaned",
        "2 tablespoons olive oil",
        "½ cup sofrito",
        "3 garlic cloves, chopped",
        "1 can (8 oz) tomato sauce",
        "½ cup dry white wine",
        "6 cups low-sodium fish broth",
        "2 potatoes, diced",
        "4 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "En una olla grande, sofría el sofrito y el ajo en el aceite 3 minutos.",
        "Añada el vino y deje hervir 1 minuto. Agregue la salsa de tomate, el caldo y las papas, y cocine 15 minutos.",
        "Añada el pescado y los mejillones, tape y cocine 4 minutos, hasta que los mejillones abran. Bote los que no abran.",
        "Añada los camarones y los calamares y cocine 3 minutos más, sólo hasta que estén rosados y blancos.",
        "Añada el recao y sirva con pan de agua. Pruebe antes de añadir sal: los mariscos sueltan la suya."
      ],
      en: [
        "In a large pot, sauté the sofrito and garlic in the oil 3 minutes.",
        "Add the wine and boil 1 minute. Add the tomato sauce, broth and potatoes and cook 15 minutes.",
        "Add the fish and mussels, cover and cook 4 minutes, until the mussels open. Discard any that don't open.",
        "Add the shrimp and squid and cook 3 more minutes, just until pink and white.",
        "Add the culantro and serve with water bread. Taste before adding salt: the seafood releases its own."
      ]
    }
  },
  {
    id: "sopa-cabro",
    category: "sopas",
    name: { es: "Sopa de Cabro con Viandas", en: "Goat Soup with Root Vegetables" },
    active: 150, total: 150,
    servings: 8,
    ingredients: {
      es: [
        "2½ libras de carne de cabro con hueso, en pedazos",
        "2 cucharadas de jugo de limón",
        "12 tazas de agua",
        "½ taza de sofrito",
        "¼ taza de salsa de tomate",
        "2 hojas de laurel",
        "1 cucharadita de comino",
        "1 libra de yautía en trozos",
        "1 libra de ñame en trozos",
        "1 libra de calabaza en trozos",
        "1½ cucharaditas de sal",
        "6 hojas de recao picadas"
      ],
      en: [
        "2½ pounds bone-in goat meat, in pieces",
        "2 tablespoons lime juice",
        "12 cups water",
        "½ cup sofrito",
        "¼ cup tomato sauce",
        "2 bay leaves",
        "1 teaspoon cumin",
        "1 pound yautía (taro root), in chunks",
        "1 pound ñame (yam), in chunks",
        "1 pound calabaza (West Indian pumpkin), in chunks",
        "1½ teaspoons salt",
        "6 culantro (recao) leaves, chopped"
      ]
    },
    steps: {
      es: [
        "Lave el cabro con agua y el limón, y escúrralo.",
        "Hiérvalo en el agua con el sofrito, la salsa de tomate, el laurel y el comino, tapado, 1 hora 30 minutos (40 minutos en olla de presión), hasta que esté tierno. Quite la espuma al principio.",
        "Añada la yautía, el ñame, la calabaza y la sal, y cocine 30 minutos, hasta que las viandas estén blandas y el caldo espese.",
        "Saque los huesos sueltos y pruebe la sal.",
        "Añada el recao y sirva bien caliente. Es la sopa de los velorios y las fiestas patronales del campo."
      ],
      en: [
        "Rinse the goat with water and the lime juice and drain.",
        "Simmer it in the water with the sofrito, tomato sauce, bay leaves and cumin, covered, 1 hour 30 minutes (40 minutes in a pressure cooker), until tender. Skim the foam at the start.",
        "Add the yautía, ñame, calabaza and salt and cook 30 minutes, until the root vegetables are tender and the broth thickens.",
        "Remove any loose bones and taste for salt.",
        "Add the culantro and serve piping hot. It's the soup of country wakes and patron saint festivals."
      ]
    }
  },
  {
    id: "sopa-hueso-res",
    category: "sopas",
    name: { es: "Sopa de Hueso de Res con Fideos y Viandas", en: "Beef Bone Soup with Noodles and Root Vegetables" },
    active: 180, total: 180,
    servings: 8,
    ingredients: {
      es: [
        "3 libras de huesos de res con carne (de pecho o de rabo)",
        "14 tazas de agua",
        "1 cebolla partida",
        "½ taza de sofrito",
        "¼ taza de salsa de tomate",
        "1 libra de yautía en trozos",
        "2 zanahorias en ruedas",
        "1 mazorca de maíz en pedazos",
        "2 onzas de fideos finos",
        "1½ cucharaditas de sal",
        "¼ taza de cilantro picado"
      ],
      en: [
        "3 pounds meaty beef bones (brisket or oxtail)",
        "14 cups water",
        "1 onion, halved",
        "½ cup sofrito",
        "¼ cup tomato sauce",
        "1 pound yautía (taro root), in chunks",
        "2 carrots, sliced",
        "1 ear of corn, cut in pieces",
        "2 ounces fine noodles (fideos)",
        "1½ teaspoons salt",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Hierva los huesos en el agua con la cebolla, tapado, a fuego bajo 2 horas, quitando la espuma, hasta que la carne se despegue.",
        "Saque los huesos, despegue la carne y devuélvala al caldo. Bote los huesos y la cebolla.",
        "Añada el sofrito, la salsa de tomate, la yautía, las zanahorias, el maíz y la sal, y cocine 25 minutos.",
        "Añada los fideos y cocine 5 minutos más.",
        "Añada el cilantro y sirva. El caldo de hueso cocinado despacio es la base de todas las sopas de abuela."
      ],
      en: [
        "Simmer the bones in the water with the onion, covered, over low heat 2 hours, skimming the foam, until the meat comes away.",
        "Remove the bones, pull off the meat and return it to the broth. Discard the bones and onion.",
        "Add the sofrito, tomato sauce, yautía, carrots, corn and salt and cook 25 minutes.",
        "Add the noodles and cook 5 more minutes.",
        "Add the cilantro and serve. Slow-cooked bone broth is the base of all of grandma's soups."
      ]
    }
  },
  {
    id: "gazpacho-sandia",
    category: "sopas",
    name: { es: "Gazpacho de Sandía y Pepino (Sopa Fría)", en: "Watermelon and Cucumber Gazpacho (Cold Soup)" },
    active: 15, total: 135, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "6 tazas de sandía sin semillas en cubos",
        "1 pepino pelado en cubos",
        "1 tomate maduro",
        "¼ de cebolla roja",
        "1 ají dulce",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "2 cucharadas de menta (yerbabuena) picada"
      ],
      en: [
        "6 cups seedless watermelon, cubed",
        "1 cucumber, peeled and cubed",
        "1 ripe tomato",
        "¼ red onion",
        "1 ají dulce (sweet chili pepper)",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "½ teaspoon salt",
        "2 tablespoons chopped mint (yerbabuena)"
      ]
    },
    steps: {
      es: [
        "Guarde ½ taza de sandía y ¼ del pepino en cubitos para decorar.",
        "Licúe el resto de la sandía y del pepino con el tomate, la cebolla, el ají dulce, el limón, el aceite y la sal hasta que esté suave.",
        "Refrigere al menos 2 horas: tiene que estar bien frío.",
        "Pruebe y ajuste el limón y la sal.",
        "Sirva en vasos o tazones con los cubitos de sandía y pepino y la menta. Es vegano y perfecto para el calor de agosto."
      ],
      en: [
        "Set aside ½ cup of watermelon and ¼ of the cucumber, diced small, for garnish.",
        "Blend the rest of the watermelon and cucumber with the tomato, onion, ají dulce, lime juice, oil and salt until smooth.",
        "Refrigerate at least 2 hours: it must be very cold.",
        "Taste and adjust the lime juice and salt.",
        "Serve in glasses or bowls with the diced watermelon and cucumber and the mint. It's vegan and perfect for the August heat."
      ]
    }
  },
  // ---------- Tanda 57: más postres puertorriqueños (12) ----------
  {
    id: "alfajor-boricua",
    category: "postres",
    name: { es: "Alfajor Boricua de Yuca, Melao y Jengibre", en: "Puerto Rican Alfajor (Cassava, Molasses and Ginger Bars)" },
    active: 30, total: 100, wait: "enfriar",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de melao de caña",
        "½ taza de azúcar morena",
        "2 cucharadas de jengibre fresco rallado",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de clavos molidos",
        "1 pizca de sal",
        "2 tazas de harina de yuca (casabe molido) o de harina de trigo tostada",
        "1 cucharada de mantequilla"
      ],
      en: [
        "1 cup cane molasses",
        "½ cup brown sugar",
        "2 tablespoons grated fresh ginger",
        "1 teaspoon ground cinnamon",
        "½ teaspoon ground cloves",
        "1 pinch salt",
        "2 cups cassava flour (ground casabe) or toasted wheat flour",
        "1 tablespoon butter"
      ]
    },
    steps: {
      es: [
        "Engrase con la mantequilla un molde de 8 × 8 pulgadas.",
        "En una olla, hierva el melao con el azúcar, el jengibre, la canela, los clavos y la sal 5 minutos, moviendo, hasta que espese un poco.",
        "Retire del fuego y añada la harina poco a poco, moviendo con fuerza con una cuchara de madera, hasta formar una masa espesa y brillosa.",
        "Extiéndala en el molde y aplánela con una espátula mojada.",
        "Deje enfriar 1 hora y córtela en 16 cuadritos. Es el alfajor antiguo de la isla, de las ventas de los pueblos: oscuro, picante de jengibre y masticable."
      ],
      en: [
        "Grease an 8 × 8-inch pan with the butter.",
        "In a pot, boil the molasses with the sugar, ginger, cinnamon, cloves and salt 5 minutes, stirring, until slightly thick.",
        "Remove from the heat and add the flour little by little, stirring hard with a wooden spoon, until it forms a thick, glossy dough.",
        "Spread it in the pan and flatten it with a wet spatula.",
        "Let cool 1 hour and cut into 16 squares. It's the island's old-style alfajor from small-town candy stands: dark, spicy with ginger and chewy."
      ]
    }
  },
  {
    id: "dulce-hicacos",
    category: "postres",
    name: { es: "Dulce de Hicacos en Almíbar", en: "Cocoplums (Hicacos) in Syrup" },
    active: 40, total: 160, wait: "enfriar",
    servings: 8,
    ingredients: {
      es: [
        "2 libras de hicacos maduros",
        "2 tazas de azúcar",
        "3 tazas de agua",
        "2 rajitas de canela",
        "4 clavos de especia",
        "1 tira de cáscara de limón"
      ],
      en: [
        "2 pounds ripe cocoplums (hicacos)",
        "2 cups sugar",
        "3 cups water",
        "2 cinnamon sticks",
        "4 whole cloves",
        "1 strip lime peel"
      ]
    },
    steps: {
      es: [
        "Lave los hicacos y pínchelos 2 o 3 veces con un palillo para que no revienten.",
        "Hiérvalos en agua 5 minutos y escúrralos.",
        "En una olla, hierva el azúcar y las 3 tazas de agua con la canela, los clavos y la cáscara de limón 10 minutos.",
        "Añada los hicacos y cocine a fuego bajo 25 minutos, hasta que estén brillosos y el almíbar espese.",
        "Deje enfriar en el almíbar y sirva frío con queso blanco del país. Es un dulce de la costa, donde crecen los hicacos junto a la playa."
      ],
      en: [
        "Wash the cocoplums and prick them 2 or 3 times with a toothpick so they don't burst.",
        "Boil them in water 5 minutes and drain.",
        "In a pot, boil the sugar and the 3 cups of water with the cinnamon, cloves and lime peel 10 minutes.",
        "Add the cocoplums and cook over low heat 25 minutes, until glossy and the syrup thickens.",
        "Let cool in the syrup and serve cold with Puerto Rican white cheese. It's a coastal sweet: cocoplums grow right by the beach."
      ]
    }
  },
  {
    id: "tembleque-parcha",
    category: "postres",
    name: { es: "Tembleque de Parcha", en: "Passion Fruit Tembleque" },
    active: 20, total: 260, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 13.5 onzas de leche de coco",
        "½ taza de pulpa de parcha colada",
        "¾ taza de azúcar",
        "½ taza de maicena",
        "1 pizca de sal",
        "2 cucharadas de pulpa de parcha con semillas para decorar"
      ],
      en: [
        "2 cans (13.5 oz) coconut milk",
        "½ cup strained passion fruit pulp",
        "¾ cup sugar",
        "½ cup cornstarch",
        "1 pinch salt",
        "2 tablespoons passion fruit pulp with seeds for garnish"
      ]
    },
    steps: {
      es: [
        "En una olla, disuelva la maicena en la leche de coco fría. Añada el azúcar y la sal.",
        "Cocine a fuego medio, moviendo sin parar, hasta que hierva y espese, unos 10 minutos.",
        "Retire del fuego y añada la pulpa de parcha colada, moviendo rápido para que quede lisa.",
        "Vierta en un molde mojado con agua o en copitas y deje enfriar.",
        "Refrigere al menos 4 horas. Desmolde y decore con la parcha con semillas. Es vegano: no lleva leche de vaca ni huevo."
      ],
      en: [
        "In a pot, dissolve the cornstarch in the cold coconut milk. Add the sugar and salt.",
        "Cook over medium heat, stirring constantly, until it boils and thickens, about 10 minutes.",
        "Remove from the heat and stir in the strained passion fruit pulp quickly so it stays smooth.",
        "Pour into a mold rinsed with water or into small cups and let cool.",
        "Refrigerate at least 4 hours. Unmold and garnish with the passion fruit pulp with seeds. It's vegan: no dairy or eggs."
      ]
    }
  },
  {
    id: "tembleque-guanabana",
    category: "postres",
    name: { es: "Tembleque de Guanábana", en: "Soursop Tembleque" },
    active: 20, total: 260, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 13.5 onzas de leche de coco",
        "1 taza de pulpa de guanábana colada",
        "¾ taza de azúcar",
        "½ taza de maicena",
        "1 pizca de sal",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cans (13.5 oz) coconut milk",
        "1 cup strained soursop (guanábana) pulp",
        "¾ cup sugar",
        "½ cup cornstarch",
        "1 pinch salt",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Licúe la leche de coco con la guanábana, la maicena, el azúcar y la sal.",
        "Pase a una olla y cocine a fuego medio, moviendo sin parar, hasta que hierva y espese, unos 10 a 12 minutos.",
        "Cocine 1 minuto más después de que espese para que no sepa a maicena cruda.",
        "Vierta en un molde mojado con agua o en copitas y deje enfriar.",
        "Refrigere al menos 4 horas. Desmolde y espolvoree canela. Es vegano y muy fresco."
      ],
      en: [
        "Blend the coconut milk with the soursop, cornstarch, sugar and salt.",
        "Transfer to a pot and cook over medium heat, stirring constantly, until it boils and thickens, about 10 to 12 minutes.",
        "Cook 1 more minute after it thickens so it doesn't taste of raw cornstarch.",
        "Pour into a mold rinsed with water or into small cups and let cool.",
        "Refrigerate at least 4 hours. Unmold and dust with cinnamon. It's vegan and very refreshing."
      ]
    }
  },
  {
    id: "limber-pina",
    category: "postres",
    name: { es: "Limber de Piña", en: "Pineapple Limber (Frozen Cup)" },
    active: 15, total: 375, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "3 tazas de piña fresca en cubos",
        "1 taza de jugo de piña",
        "1 lata de 12 onzas de leche evaporada",
        "½ taza de azúcar",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "3 cups fresh pineapple, cubed",
        "1 cup pineapple juice",
        "1 can (12 oz) evaporated milk",
        "½ cup sugar",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Licúe la piña con el jugo de piña y el azúcar hasta que esté suave.",
        "Añada la leche evaporada y el limón y licúe unos segundos más. Si la quiere sin pedacitos, cuélela.",
        "Vierta en 10 vasitos plásticos de 5 onzas.",
        "Congele al menos 6 horas.",
        "Para sacarlo, apriete el vaso o páselo por agua tibia unos segundos. Se come chupándolo desde arriba, como en las casas del barrio."
      ],
      en: [
        "Blend the pineapple with the pineapple juice and sugar until smooth.",
        "Add the evaporated milk and lime juice and blend a few more seconds. Strain if you want it smooth.",
        "Pour into 10 plastic 5-ounce cups.",
        "Freeze at least 6 hours.",
        "To unmold, squeeze the cup or run it under warm water a few seconds. It's eaten by sucking it from the top, like at neighborhood homes."
      ]
    }
  },
  {
    id: "helado-guanabana",
    category: "postres",
    name: { es: "Helado de Guanábana (Sin Máquina)", en: "Soursop Ice Cream (No-Churn)" },
    active: 15, total: 375, wait: "congelador",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de crema de batir (heavy cream) fría",
        "1 lata de 14 onzas de leche condensada",
        "1½ tazas de pulpa de guanábana colada",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "2 cups cold heavy cream",
        "1 can (14 oz) sweetened condensed milk",
        "1½ cups strained soursop (guanábana) pulp",
        "1 teaspoon vanilla",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Mezcle la leche condensada con la guanábana, la vainilla y la sal.",
        "Bata la crema hasta que forme picos firmes.",
        "Incorpore la crema a la mezcla de guanábana en 3 partes, con movimientos envolventes, sin batir de más.",
        "Vierta en un molde de pan, tape con papel plástico pegado a la superficie.",
        "Congele al menos 6 horas. Sáquelo 10 minutos antes de servir para que se pueda servir con cuchara."
      ],
      en: [
        "Mix the condensed milk with the soursop, vanilla and salt.",
        "Whip the cream to stiff peaks.",
        "Fold the cream into the soursop mixture in 3 parts, gently, without overmixing.",
        "Pour into a loaf pan and cover with plastic wrap pressed onto the surface.",
        "Freeze at least 6 hours. Take it out 10 minutes before serving so it can be scooped."
      ]
    }
  },
  {
    id: "dulce-coco-tierno",
    category: "postres",
    name: { es: "Dulce de Coco Tierno", en: "Young Coconut Sweet (Dulce de Coco Tierno)" },
    active: 40, total: 100, wait: "enfriar",
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de coco tierno en tiritas (de 3 o 4 cocos de agua)",
        "1 taza de agua de coco",
        "1 taza de azúcar",
        "1 rajita de canela",
        "3 clavos de especia",
        "1 pizca de sal",
        "1 cucharadita de vainilla"
      ],
      en: [
        "3 cups young coconut, in strips (from 3 or 4 water coconuts)",
        "1 cup coconut water",
        "1 cup sugar",
        "1 cinnamon stick",
        "3 whole cloves",
        "1 pinch salt",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Abra los cocos de agua, guarde el agua y saque la carne tierna con una cuchara. Córtela en tiritas.",
        "En una olla, hierva el agua de coco con el azúcar, la canela, los clavos y la sal 8 minutos.",
        "Añada el coco tierno y cocine a fuego bajo 20 a 25 minutos, moviendo de vez en cuando, hasta que el almíbar espese y el coco esté transparente.",
        "Apague y añada la vainilla.",
        "Deje enfriar y sirva frío. Es más suave que el dulce de coco rallado: el coco tierno queda como gelatina."
      ],
      en: [
        "Open the water coconuts, save the water and scoop out the tender meat with a spoon. Cut it into strips.",
        "In a pot, boil the coconut water with the sugar, cinnamon, cloves and salt 8 minutes.",
        "Add the young coconut and cook over low heat 20 to 25 minutes, stirring now and then, until the syrup thickens and the coconut turns translucent.",
        "Turn off the heat and add the vanilla.",
        "Let cool and serve cold. It's softer than grated coconut sweet: young coconut turns almost jelly-like."
      ]
    }
  },
  {
    id: "pudin-calabaza",
    category: "postres",
    name: { es: "Pudín de Calabaza", en: "Calabaza Pudding (Pudín de Calabaza)" },
    active: 85, total: 140, wait: "enfriar",
    servings: 12,
    ingredients: {
      es: [
        "2 libras de calabaza pelada en trozos",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "1 taza de azúcar",
        "4 huevos",
        "¾ taza de harina de trigo",
        "4 cucharadas de mantequilla derretida",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de jengibre en polvo",
        "¼ cucharadita de clavos molidos",
        "1 pizca de sal",
        "½ taza de pasas"
      ],
      en: [
        "2 pounds calabaza (West Indian pumpkin), peeled and cut in chunks",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "1 cup sugar",
        "4 eggs",
        "¾ cup all-purpose flour",
        "4 tablespoons melted butter",
        "1 teaspoon ground cinnamon",
        "½ teaspoon ground ginger",
        "¼ teaspoon ground cloves",
        "1 pinch salt",
        "½ cup raisins"
      ]
    },
    steps: {
      es: [
        "Hierva la calabaza en agua 15 minutos, hasta que esté blanda. Escúrrala muy bien.",
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Licúe la calabaza con la leche de coco, la leche evaporada, el azúcar, los huevos, la harina, la mantequilla, las especias y la sal.",
        "Vierta en el molde y riegue las pasas por encima.",
        "Hornee 55 a 60 minutos, hasta que un palillo salga limpio del centro. Deje enfriar antes de cortar. Es el pudín de las Navidades del campo."
      ],
      en: [
        "Boil the calabaza in water 15 minutes, until tender. Drain very well.",
        "Heat the oven to 350 °F and grease a 9 × 13-inch pan.",
        "Blend the calabaza with the coconut milk, evaporated milk, sugar, eggs, flour, butter, spices and salt.",
        "Pour into the pan and scatter the raisins on top.",
        "Bake 55 to 60 minutes, until a toothpick comes out clean from the center. Let cool before cutting. It's the country Christmas pudding."
      ]
    }
  },
  {
    id: "piragua-parcha",
    category: "postres",
    name: { es: "Piragua de Parcha", en: "Passion Fruit Piragua (Shaved Ice)" },
    active: 20, total: 80, wait: "enfriar",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de pulpa de parcha",
        "1½ tazas de azúcar",
        "1 taza de agua",
        "8 tazas de hielo raspado o picado bien fino"
      ],
      en: [
        "1 cup passion fruit pulp",
        "1½ cups sugar",
        "1 cup water",
        "8 cups shaved or very finely crushed ice"
      ]
    },
    steps: {
      es: [
        "En una olla, hierva el agua con el azúcar 5 minutos, hasta que se disuelva y espese un poco.",
        "Añada la pulpa de parcha y cocine 3 minutos más.",
        "Cuele para sacar las semillas y deje enfriar el sirope por completo, 1 hora.",
        "Apriete el hielo raspado en vasos de papel en forma de cono, formando una pirámide.",
        "Bañe con 3 a 4 cucharadas del sirope y sirva enseguida, con pajita, como en el carrito del piragüero."
      ],
      en: [
        "In a pot, boil the water with the sugar 5 minutes, until dissolved and slightly thick.",
        "Add the passion fruit pulp and cook 3 more minutes.",
        "Strain out the seeds and let the syrup cool completely, 1 hour.",
        "Pack the shaved ice into cone-shaped paper cups, forming a pyramid.",
        "Drizzle with 3 to 4 tablespoons of the syrup and serve right away, with a straw, like from the piragüero's cart."
      ]
    }
  },
  {
    id: "brazo-gitano-coco",
    category: "postres",
    name: { es: "Brazo Gitano de Crema de Coco", en: "Coconut Cream Swiss Roll (Brazo Gitano)" },
    active: 50, total: 170, wait: "frio",
    servings: 10,
    ingredients: {
      es: [
        "5 huevos, separadas las claras de las yemas",
        "½ taza de azúcar para el bizcocho",
        "½ taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de vainilla",
        "1 lata de 13.5 onzas de leche de coco",
        "¼ taza de azúcar para la crema",
        "3 cucharadas de maicena",
        "½ taza de coco rallado tostado",
        "2 cucharadas de azúcar en polvo"
      ],
      en: [
        "5 eggs, separated",
        "½ cup sugar for the cake",
        "½ cup all-purpose flour",
        "1 teaspoon baking powder",
        "1 teaspoon vanilla",
        "1 can (13.5 oz) coconut milk",
        "¼ cup sugar for the cream",
        "3 tablespoons cornstarch",
        "½ cup toasted shredded coconut",
        "2 tablespoons powdered sugar"
      ]
    },
    steps: {
      es: [
        "Para la crema: cocine la leche de coco con el azúcar y la maicena, moviendo sin parar, hasta que espese. Tape con papel plástico pegado y deje enfriar.",
        "Caliente el horno a 375 °F y forre una bandeja de 10 × 15 pulgadas con papel de hornear engrasado. Bata las claras a punto de nieve con el azúcar; añada las yemas y la vainilla, y luego la harina cernida con el polvo de hornear, con movimientos envolventes.",
        "Extienda en la bandeja y hornee 10 a 12 minutos, hasta que rebote al tocarlo. Vuélquelo sobre un paño espolvoreado con azúcar en polvo, quite el papel y enróllelo caliente con el paño. Deje enfriar 20 minutos.",
        "Desenrolle, unte la crema de coco, espolvoree la mitad del coco tostado y enrolle otra vez, sin el paño.",
        "Espolvoree el resto del coco y el azúcar en polvo. Refrigere 1 hora antes de cortar. Es otro de los sabores de los brazos gitanos de Mayagüez."
      ],
      en: [
        "For the cream: cook the coconut milk with the sugar and cornstarch, stirring constantly, until thick. Cover with plastic wrap pressed on the surface and let cool.",
        "Heat the oven to 375 °F and line a 10 × 15-inch pan with greased parchment. Beat the egg whites to stiff peaks with the sugar; add the yolks and vanilla, then fold in the flour sifted with the baking powder.",
        "Spread in the pan and bake 10 to 12 minutes, until it springs back when touched. Turn it out onto a towel dusted with powdered sugar, peel off the paper and roll it up warm with the towel. Let cool 20 minutes.",
        "Unroll, spread the coconut cream, sprinkle half the toasted coconut and roll it up again, without the towel.",
        "Sprinkle with the rest of the coconut and the powdered sugar. Refrigerate 1 hour before slicing. It's another of the Mayagüez brazo gitano flavors."
      ]
    }
  },
  {
    id: "flan-queso-guayaba",
    category: "postres",
    name: { es: "Flan de Queso con Guayaba", en: "Cream Cheese Flan with Guava" },
    active: 100, total: 340, wait: "frio",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar para el caramelo",
        "1 paquete de 8 onzas de queso crema blando",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "4 onzas de pasta de guayaba en cubitos",
        "2 cucharadas de agua caliente"
      ],
      en: [
        "1 cup sugar for the caramel",
        "1 package (8 oz) softened cream cheese",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "4 ounces guava paste, in small cubes",
        "2 tablespoons hot water"
      ]
    },
    steps: {
      es: [
        "Derrita el azúcar en un sartén a fuego medio hasta que tenga color ámbar y viértalo en un molde de flan, cubriendo el fondo.",
        "Derrita la guayaba con el agua caliente en el microondas 30 segundos, moviendo hasta que quede una pasta suave. Riéguela por cucharaditas sobre el caramelo.",
        "Caliente el horno a 350 °F. Licúe el queso crema, las leches, los huevos y la vainilla, y vierta con cuidado sobre la guayaba.",
        "Tape con papel de aluminio y hornee a baño de María 1 hora a 1 hora 10 minutos, hasta que el centro apenas tiemble.",
        "Deje enfriar y refrigere al menos 4 horas. Desmolde volteándolo en un plato hondo: la guayaba queda arriba con el caramelo."
      ],
      en: [
        "Melt the sugar in a skillet over medium heat until amber and pour it into a flan mold, coating the bottom.",
        "Melt the guava with the hot water in the microwave 30 seconds, stirring into a smooth paste. Dot it by teaspoons over the caramel.",
        "Heat the oven to 350 °F. Blend the cream cheese, both milks, eggs and vanilla and pour gently over the guava.",
        "Cover with aluminum foil and bake in a water bath 1 hour to 1 hour 10 minutes, until the center barely jiggles.",
        "Let cool and refrigerate at least 4 hours. Unmold by flipping onto a deep plate: the guava ends up on top with the caramel."
      ]
    }
  },
  {
    id: "natilla-calabaza",
    category: "postres",
    name: { es: "Natilla de Calabaza con Canela", en: "Calabaza Custard with Cinnamon" },
    active: 30, total: 210, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de calabaza hervida y majada",
        "3 tazas de leche",
        "½ taza de azúcar",
        "4 yemas de huevo",
        "¼ taza de maicena",
        "1 rajita de canela",
        "1 tira de cáscara de limón",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "1 cup boiled and mashed calabaza (West Indian pumpkin)",
        "3 cups milk",
        "½ cup sugar",
        "4 egg yolks",
        "¼ cup cornstarch",
        "1 cinnamon stick",
        "1 strip lime peel",
        "1 teaspoon vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Hierva 2½ tazas de la leche con la rajita de canela y la cáscara de limón 5 minutos. Saque la canela y el limón.",
        "Licúe la calabaza con el resto de la leche, las yemas, el azúcar y la maicena.",
        "Añada la mezcla a la leche caliente y cocine a fuego medio-bajo, moviendo sin parar, hasta que espese y cubra la cuchara, unos 8 minutos. No deje que hierva fuerte.",
        "Apague y añada la vainilla. Sirva en copitas.",
        "Deje enfriar y refrigere al menos 2 horas. Espolvoree canela antes de servir."
      ],
      en: [
        "Simmer 2½ cups of the milk with the cinnamon stick and lime peel 5 minutes. Remove the cinnamon and peel.",
        "Blend the calabaza with the rest of the milk, the yolks, sugar and cornstarch.",
        "Add the mixture to the hot milk and cook over medium-low heat, stirring constantly, until thick enough to coat the spoon, about 8 minutes. Don't let it boil hard.",
        "Turn off the heat and add the vanilla. Pour into small cups.",
        "Let cool and refrigerate at least 2 hours. Dust with cinnamon before serving."
      ]
    }
  },
  // ---------- Tanda 58: panes (4) y panes dulces (4), vegetales y viandas (5), dulces de ajonjolí (2),
  // salsas y aderezos con jobos (6), caderas de pollo (5), cereales (4) y pastas (5) ----------
  {
    id: "pan-papa",
    category: "panes",
    name: { es: "Pan de Papa", en: "Potato Bread" },
    active: 65, total: 200, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1 papa grande hervida y majada (1 taza)",
        "1 taza del agua de hervir la papa, tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "2 cucharadas de azúcar",
        "4 tazas de harina de trigo",
        "1½ cucharaditas de sal",
        "3 cucharadas de mantequilla blanda",
        "1 huevo batido para barnizar"
      ],
      en: [
        "1 large potato, boiled and mashed (1 cup)",
        "1 cup of the potato cooking water, lukewarm",
        "1 packet active dry yeast (2¼ teaspoons)",
        "2 tablespoons sugar",
        "4 cups all-purpose flour",
        "1½ teaspoons salt",
        "3 tablespoons softened butter",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en el agua tibia de la papa y deje 10 minutos, hasta que haga espuma.",
        "Mezcle la harina y la sal. Añada la papa majada, la levadura y la mantequilla, y amase 10 minutos hasta que la masa esté suave y un poco pegajosa.",
        "Tape y deje levar 1 hora 15 minutos, hasta que doble su tamaño.",
        "Forme 12 bolitas, acomódelas juntas en un molde engrasado de 9 × 13 pulgadas, tape y deje levar 45 minutos más.",
        "Caliente el horno a 375 °F, barnice con huevo y hornee 25 minutos, hasta que doren. La papa los deja suavecitos por días."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm potato water and let sit 10 minutes, until foamy.",
        "Mix the flour and salt. Add the mashed potato, yeast and butter and knead 10 minutes until the dough is smooth and slightly sticky.",
        "Cover and let rise 1 hour 15 minutes, until doubled.",
        "Shape 12 balls, place them close together in a greased 9 × 13-inch pan, cover and let rise 45 more minutes.",
        "Heat the oven to 375 °F, brush with egg and bake 25 minutes, until golden. The potato keeps them soft for days."
      ]
    }
  },
  {
    id: "pan-integral-avena",
    category: "panes",
    name: { es: "Pan Integral de Avena y Miel", en: "Whole Wheat Oat and Honey Bread" },
    active: 70, total: 200, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de agua tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "3 cucharadas de miel",
        "2 tazas de harina de trigo integral",
        "1½ tazas de harina de trigo",
        "¾ taza de avena en hojuelas, y un poco más para decorar",
        "1½ cucharaditas de sal",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "1½ cups lukewarm water",
        "1 packet active dry yeast (2¼ teaspoons)",
        "3 tablespoons honey",
        "2 cups whole wheat flour",
        "1½ cups all-purpose flour",
        "¾ cup rolled oats, plus a little more for topping",
        "1½ teaspoons salt",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y la miel en el agua tibia y deje 10 minutos.",
        "Mezcle las harinas, la avena y la sal. Añada la levadura y el aceite, y amase 10 minutos.",
        "Tape y deje levar 1 hora 15 minutos, hasta que doble.",
        "Forme un pan, póngalo en un molde de 9 × 5 pulgadas engrasado, moje la superficie y espolvoree avena. Deje levar 45 minutos.",
        "Hornee a 375 °F 35 minutos, hasta que suene hueco al tocarlo por debajo. Deje enfriar antes de rebanar."
      ],
      en: [
        "Dissolve the yeast and honey in the warm water and let sit 10 minutes.",
        "Mix the flours, oats and salt. Add the yeast and oil and knead 10 minutes.",
        "Cover and let rise 1 hour 15 minutes, until doubled.",
        "Shape a loaf, place it in a greased 9 × 5-inch pan, wet the top and sprinkle with oats. Let rise 45 minutes.",
        "Bake at 375 °F 35 minutes, until it sounds hollow when tapped underneath. Let cool before slicing."
      ]
    }
  },
  {
    id: "pan-chorizo-queso",
    category: "panes",
    name: { es: "Pan Relleno de Chorizo y Queso", en: "Chorizo and Cheese Stuffed Bread" },
    active: 75, total: 190, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "2 cucharadas de azúcar",
        "3½ tazas de harina de trigo",
        "1 cucharadita de sal",
        "4 cucharadas de mantequilla blanda",
        "1 huevo",
        "6 onzas de chorizo en lascas finas",
        "1½ tazas de queso de papa (gouda) rallado",
        "1 huevo batido para barnizar"
      ],
      en: [
        "1 cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "2 tablespoons sugar",
        "3½ cups all-purpose flour",
        "1 teaspoon salt",
        "4 tablespoons softened butter",
        "1 egg",
        "6 ounces chorizo, thinly sliced",
        "1½ cups shredded gouda (queso de papa)",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en la leche tibia y deje 10 minutos.",
        "Añada la harina, la sal, la mantequilla y el huevo, y amase 10 minutos. Tape y deje levar 1 hora.",
        "Estire la masa en un rectángulo de 12 × 16 pulgadas, cubra con el chorizo y el queso, y enróllela por el lado largo, sellando bien.",
        "Póngala en una bandeja con la unión hacia abajo, tape y deje levar 40 minutos. Caliente el horno a 350 °F.",
        "Barnice con huevo y hornee 30 a 35 minutos, hasta que dore. Deje reposar 10 minutos antes de rebanar. Es como el pan de jamón, pero con chorizo."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm milk and let sit 10 minutes.",
        "Add the flour, salt, butter and egg and knead 10 minutes. Cover and let rise 1 hour.",
        "Roll the dough into a 12 × 16-inch rectangle, cover with the chorizo and cheese and roll it up from the long side, sealing well.",
        "Place on a tray seam side down, cover and let rise 40 minutes. Heat the oven to 350 °F.",
        "Brush with egg and bake 30 to 35 minutes, until golden. Let rest 10 minutes before slicing. It's like pan de jamón, but with chorizo."
      ]
    }
  },
  {
    id: "panecillos-hamburguesa",
    category: "panes",
    name: { es: "Panecillos de Hamburguesa Caseros", en: "Homemade Hamburger Buns" },
    active: 50, total: 165, wait: "levado",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "2 cucharadas de azúcar",
        "3½ tazas de harina de trigo",
        "1 cucharadita de sal",
        "3 cucharadas de mantequilla blanda",
        "1 huevo",
        "1 huevo batido para barnizar",
        "1 cucharada de semillas de ajonjolí"
      ],
      en: [
        "1 cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "2 tablespoons sugar",
        "3½ cups all-purpose flour",
        "1 teaspoon salt",
        "3 tablespoons softened butter",
        "1 egg",
        "1 beaten egg for brushing",
        "1 tablespoon sesame seeds"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en la leche tibia y deje 10 minutos.",
        "Añada la harina, la sal, la mantequilla y el huevo, y amase 8 minutos. Tape y deje levar 1 hora.",
        "Divida en 8 bolas, aplánelas a 3½ pulgadas y póngalas separadas en una bandeja. Tape y deje levar 40 minutos.",
        "Caliente el horno a 400 °F. Barnice con huevo y espolvoree el ajonjolí.",
        "Hornee 15 minutos, hasta que doren. Deje enfriar sobre una rejilla antes de abrirlos."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm milk and let sit 10 minutes.",
        "Add the flour, salt, butter and egg and knead 8 minutes. Cover and let rise 1 hour.",
        "Divide into 8 balls, flatten them to 3½ inches and place them apart on a tray. Cover and let rise 40 minutes.",
        "Heat the oven to 400 °F. Brush with egg and sprinkle with the sesame seeds.",
        "Bake 15 minutes, until golden. Let cool on a rack before splitting."
      ]
    }
  },
  {
    id: "rosca-reyes",
    category: "panes",
    name: { es: "Rosca de Reyes Boricua", en: "Puerto Rican Three Kings Bread (Rosca de Reyes)" },
    active: 80, total: 230, wait: "levado",
    servings: 14,
    ingredients: {
      es: [
        "¾ taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "½ taza de azúcar",
        "4 tazas de harina de trigo",
        "½ cucharadita de sal",
        "3 huevos",
        "½ taza de mantequilla blanda",
        "1 cucharada de ralladura de china",
        "1 cucharadita de agua de azahar o vainilla",
        "1 huevo batido para barnizar",
        "½ taza de frutas abrillantadas",
        "4 onzas de pasta de guayaba en tiras",
        "2 cucharadas de azúcar para decorar"
      ],
      en: [
        "¾ cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "½ cup sugar",
        "4 cups all-purpose flour",
        "½ teaspoon salt",
        "3 eggs",
        "½ cup softened butter",
        "1 tablespoon orange zest",
        "1 teaspoon orange blossom water or vanilla",
        "1 beaten egg for brushing",
        "½ cup candied fruit",
        "4 ounces guava paste, in strips",
        "2 tablespoons sugar for decorating"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y 1 cucharada del azúcar en la leche tibia y deje 10 minutos.",
        "Añada la harina, el resto del azúcar, la sal, los huevos, la mantequilla, la ralladura y el azahar. Amase 10 minutos hasta que la masa esté elástica. Tape y deje levar 1 hora 30 minutos.",
        "Forme un cilindro largo, únalo en forma de rosca sobre una bandeja con papel de hornear y, si quiere, esconda un muñequito de cerámica por debajo. Deje levar 45 minutos.",
        "Caliente el horno a 350 °F. Barnice con huevo, decore con las tiras de guayaba y las frutas abrillantadas, y espolvoree el azúcar.",
        "Hornee 25 a 30 minutos, hasta que dore. Se comparte el 6 de enero, Día de Reyes: a quien le toque el muñequito le toca la próxima fiesta. Avise que lo tiene antes de servir a los niños."
      ],
      en: [
        "Dissolve the yeast and 1 tablespoon of the sugar in the warm milk and let sit 10 minutes.",
        "Add the flour, the rest of the sugar, the salt, eggs, butter, zest and orange blossom water. Knead 10 minutes until elastic. Cover and let rise 1 hour 30 minutes.",
        "Shape a long log and join it into a ring on a parchment-lined tray; if you like, tuck a small ceramic figurine underneath. Let rise 45 minutes.",
        "Heat the oven to 350 °F. Brush with egg, decorate with the guava strips and candied fruit and sprinkle with the sugar.",
        "Bake 25 to 30 minutes, until golden. It's shared on January 6, Three Kings Day: whoever finds the figurine hosts the next party. Warn everyone it's inside before serving to kids."
      ]
    }
  },
  {
    id: "pan-chocolate-dulce",
    category: "panes",
    name: { es: "Pan Dulce de Chocolate", en: "Sweet Chocolate Bread" },
    active: 70, total: 195, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "½ taza de azúcar",
        "3 tazas de harina de trigo",
        "⅓ taza de cacao en polvo sin azúcar",
        "½ cucharadita de sal",
        "1 huevo",
        "4 cucharadas de mantequilla blanda",
        "¾ taza de chispas de chocolate semidulce"
      ],
      en: [
        "1 cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "½ cup sugar",
        "3 cups all-purpose flour",
        "⅓ cup unsweetened cocoa powder",
        "½ teaspoon salt",
        "1 egg",
        "4 tablespoons softened butter",
        "¾ cup semisweet chocolate chips"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y 1 cucharada del azúcar en la leche tibia y deje 10 minutos.",
        "Mezcle la harina, el cacao, el resto del azúcar y la sal. Añada la levadura, el huevo y la mantequilla, y amase 10 minutos.",
        "Incorpore las chispas de chocolate. Tape y deje levar 1 hora 15 minutos.",
        "Forme un pan en un molde de 9 × 5 pulgadas engrasado y deje levar 45 minutos.",
        "Hornee a 350 °F 35 minutos. Deje enfriar antes de rebanar. Tostado con mantequilla es el desayuno de los domingos."
      ],
      en: [
        "Dissolve the yeast and 1 tablespoon of the sugar in the warm milk and let sit 10 minutes.",
        "Mix the flour, cocoa, the rest of the sugar and the salt. Add the yeast, egg and butter and knead 10 minutes.",
        "Knead in the chocolate chips. Cover and let rise 1 hour 15 minutes.",
        "Shape a loaf in a greased 9 × 5-inch pan and let rise 45 minutes.",
        "Bake at 350 °F 35 minutes. Let cool before slicing. Toasted with butter, it's Sunday breakfast."
      ]
    }
  },
  {
    id: "pan-pasas-canela",
    category: "panes",
    name: { es: "Pan de Pasas y Canela en Espiral", en: "Cinnamon Raisin Swirl Bread" },
    active: 70, total: 195, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "¼ taza de azúcar",
        "3½ tazas de harina de trigo",
        "1 cucharadita de sal",
        "1 huevo",
        "4 cucharadas de mantequilla blanda",
        "¾ taza de pasas",
        "⅓ taza de azúcar morena",
        "1 cucharada de canela en polvo",
        "1 cucharada de mantequilla derretida"
      ],
      en: [
        "1 cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "¼ cup sugar",
        "3½ cups all-purpose flour",
        "1 teaspoon salt",
        "1 egg",
        "4 tablespoons softened butter",
        "¾ cup raisins",
        "⅓ cup brown sugar",
        "1 tablespoon ground cinnamon",
        "1 tablespoon melted butter"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y 1 cucharada del azúcar en la leche tibia y deje 10 minutos.",
        "Añada la harina, el resto del azúcar, la sal, el huevo y la mantequilla blanda; amase 10 minutos e incorpore las pasas. Tape y deje levar 1 hora 15 minutos.",
        "Estire la masa en un rectángulo de 9 × 16 pulgadas, unte la mantequilla derretida y espolvoree la azúcar morena mezclada con la canela.",
        "Enróllela por el lado corto, póngala en un molde de 9 × 5 pulgadas engrasado y deje levar 45 minutos.",
        "Hornee a 350 °F 35 minutos. Al rebanarlo se ve la espiral de canela."
      ],
      en: [
        "Dissolve the yeast and 1 tablespoon of the sugar in the warm milk and let sit 10 minutes.",
        "Add the flour, the rest of the sugar, the salt, egg and softened butter; knead 10 minutes and work in the raisins. Cover and let rise 1 hour 15 minutes.",
        "Roll the dough into a 9 × 16-inch rectangle, brush with the melted butter and sprinkle with the brown sugar mixed with the cinnamon.",
        "Roll it up from the short side, place it in a greased 9 × 5-inch pan and let rise 45 minutes.",
        "Bake at 350 °F 35 minutes. When sliced, the cinnamon swirl shows."
      ]
    }
  },
  {
    id: "pan-mango",
    category: "panes",
    name: { es: "Pan de Mangó", en: "Mango Bread" },
    active: 75, total: 90, wait: "enfriar",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "1 cucharadita de bicarbonato de sodio",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de sal",
        "2 huevos",
        "¾ taza de azúcar",
        "½ taza de aceite",
        "1½ tazas de mangó maduro majado",
        "1 cucharadita de ralladura de limón",
        "½ taza de coco rallado"
      ],
      en: [
        "2 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon salt",
        "2 eggs",
        "¾ cup sugar",
        "½ cup oil",
        "1½ cups mashed ripe mango",
        "1 teaspoon lime zest",
        "½ cup shredded coconut"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 × 5 pulgadas.",
        "Mezcle la harina, el bicarbonato, la canela y la sal.",
        "En otro tazón, bata los huevos con el azúcar y el aceite. Añada el mangó y la ralladura.",
        "Una ambas mezclas sin batir de más e incorpore el coco. Vierta en el molde.",
        "Hornee 55 a 60 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos antes de desmoldar. Use los mangós bien maduros de la temporada."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 × 5-inch loaf pan.",
        "Mix the flour, baking soda, cinnamon and salt.",
        "In another bowl, beat the eggs with the sugar and oil. Add the mango and zest.",
        "Combine both mixtures without overmixing and fold in the coconut. Pour into the pan.",
        "Bake 55 to 60 minutes, until a toothpick comes out clean. Let cool 15 minutes before unmolding. Use the very ripe mangoes of the season."
      ]
    }
  },
  {
    id: "pastelon-batata",
    category: "vegetales",
    name: { es: "Pastelón de Batata con Picadillo", en: "Sweet Potato Pastelón with Picadillo" },
    active: 60, total: 105, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de batata mameya pelada en ruedas de ¼ de pulgada",
        "2 cucharadas de aceite de oliva",
        "1 libra de carne molida de res",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "½ cucharadita de sal",
        "4 huevos batidos",
        "1½ tazas de queso mozzarella rallado"
      ],
      en: [
        "3 pounds orange-fleshed sweet potato (batata mameya), peeled and cut into ¼-inch rounds",
        "2 tablespoons olive oil",
        "1 pound ground beef",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup chopped stuffed olives",
        "½ teaspoon salt",
        "4 eggs, beaten",
        "1½ cups shredded mozzarella cheese"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F. Unte las ruedas de batata con el aceite y hornéelas en bandejas 15 minutos, hasta que estén blandas.",
        "Dore la carne con el sofrito, añada la salsa de tomate, las aceitunas y la sal, y cocine 10 minutos hasta que se seque un poco.",
        "Baje el horno a 350 °F. Engrase un molde de 9 × 13 pulgadas y vierta la mitad del huevo.",
        "Haga capas: batata, picadillo, un tercio del queso; repita y termine con batata. Vierta el resto del huevo y cubra con el queso.",
        "Hornee 30 minutos, hasta que dore. Deje reposar 15 minutos antes de cortar. Es como el pastelón de amarillos, pero con batata."
      ],
      en: [
        "Heat the oven to 400 °F. Brush the sweet potato rounds with the oil and bake on trays 15 minutes, until tender.",
        "Brown the beef with the sofrito, add the tomato sauce, olives and salt and cook 10 minutes until a little dry.",
        "Lower the oven to 350 °F. Grease a 9 × 13-inch dish and pour in half the egg.",
        "Layer: sweet potato, picadillo, a third of the cheese; repeat and finish with sweet potato. Pour in the rest of the egg and top with the cheese.",
        "Bake 30 minutes, until golden. Let rest 15 minutes before cutting. It's like plantain pastelón, but with sweet potato."
      ]
    }
  },
  {
    id: "calabaza-asada-miel",
    category: "vegetales",
    name: { es: "Calabaza Asada con Ajo y Miel", en: "Roasted Calabaza with Garlic and Honey" },
    active: 50, total: 50,
    servings: 6,
    ingredients: {
      es: [
        "3 libras de calabaza con cáscara, en lascas de 1 pulgada",
        "3 cucharadas de aceite de oliva",
        "4 dientes de ajo majados",
        "2 cucharadas de miel",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta",
        "½ cucharadita de canela en polvo",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "3 pounds calabaza (West Indian pumpkin) with skin, cut into 1-inch wedges",
        "3 tablespoons olive oil",
        "4 garlic cloves, mashed",
        "2 tablespoons honey",
        "½ teaspoon salt",
        "¼ teaspoon pepper",
        "½ teaspoon ground cinnamon",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F y cubra una bandeja con papel de hornear.",
        "Mezcle el aceite, el ajo, la miel, la sal, la pimienta y la canela.",
        "Unte las lascas de calabaza con la mezcla y acomódelas sin amontonar.",
        "Hornee 30 a 35 minutos, volteándolas a la mitad, hasta que estén blandas y con orillas caramelizadas.",
        "Espolvoree el cilantro. Acompaña bien el pernil o el pollo. La cáscara se ablanda y se puede comer."
      ],
      en: [
        "Heat the oven to 425 °F and line a baking sheet with parchment paper.",
        "Mix the oil, garlic, honey, salt, pepper and cinnamon.",
        "Toss the calabaza wedges in the mixture and spread them out without crowding.",
        "Roast 30 to 35 minutes, turning halfway, until tender with caramelized edges.",
        "Sprinkle with the cilantro. It goes well with pernil or chicken. The skin softens and can be eaten."
      ]
    }
  },
  {
    id: "guingambo-frito",
    category: "vegetales",
    name: { es: "Guingambó (Quimbombó) Frito Empanado", en: "Fried Breaded Okra (Guingambó)" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "1 libra de guingambó fresco, en ruedas de ½ pulgada",
        "1 huevo batido con 2 cucharadas de leche",
        "½ taza de harina de maíz fina",
        "¼ taza de harina de trigo",
        "½ cucharadita de sal",
        "½ cucharadita de pimentón",
        "Aceite para freír",
        "¼ taza de mayo-ketchup para servir"
      ],
      en: [
        "1 pound fresh okra (guingambó), cut into ½-inch rounds",
        "1 egg beaten with 2 tablespoons milk",
        "½ cup fine cornmeal",
        "¼ cup all-purpose flour",
        "½ teaspoon salt",
        "½ teaspoon paprika",
        "Oil for frying",
        "¼ cup mayo-ketchup for serving"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina de maíz, la harina de trigo, la sal y el pimentón.",
        "Pase las ruedas de guingambó por el huevo y luego por la mezcla de harinas.",
        "Caliente el aceite a 350 °F.",
        "Fría en tandas 3 a 4 minutos, hasta que estén doradas y crujientes. Así fritas no quedan babosas.",
        "Escurra y sirva enseguida con mayo-ketchup."
      ],
      en: [
        "Mix the cornmeal, flour, salt and paprika.",
        "Dip the okra rounds in the egg and then in the flour mixture.",
        "Heat the oil to 350 °F.",
        "Fry in batches 3 to 4 minutes, until golden and crisp. Fried this way they aren't slimy.",
        "Drain and serve right away with mayo-ketchup."
      ]
    }
  },
  {
    id: "tostones-yautia",
    category: "vegetales",
    name: { es: "Tostones de Yautía con Mojo", en: "Yautía (Taro Root) Tostones with Mojo" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "2 libras de yautía blanca pelada",
        "Aceite para freír",
        "½ cucharadita de sal",
        "¼ taza de mojo de ajo"
      ],
      en: [
        "2 pounds white yautía (taro root), peeled",
        "Oil for frying",
        "½ teaspoon salt",
        "¼ cup garlic mojo"
      ]
    },
    steps: {
      es: [
        "Corte la yautía en ruedas de ¾ de pulgada y séquelas bien.",
        "Fríalas a 325 °F 6 a 8 minutos, hasta que estén blandas por dentro pero sin dorar mucho.",
        "Sáquelas y aplástelas con una tostonera o el fondo de un vaso.",
        "Fríalas otra vez a 375 °F 2 a 3 minutos, hasta que estén doradas y crujientes.",
        "Escurra, espolvoree la sal y sirva con el mojo. Quedan más cremosas por dentro que los de plátano."
      ],
      en: [
        "Cut the yautía into ¾-inch rounds and dry them well.",
        "Fry at 325 °F for 6 to 8 minutes, until tender inside but not very browned.",
        "Remove and flatten them with a tostonera or the bottom of a glass.",
        "Fry again at 375 °F for 2 to 3 minutes, until golden and crisp.",
        "Drain, sprinkle with the salt and serve with the mojo. They're creamier inside than plantain tostones."
      ]
    }
  },
  {
    id: "mofongo-batata",
    category: "vegetales",
    name: { es: "Mofongo de Batata con Chicharrón", en: "Sweet Potato Mofongo with Pork Cracklings" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: [
        "2 libras de batata blanca (boniato) pelada en trozos",
        "Aceite para freír",
        "5 dientes de ajo",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "1 taza de chicharrón de cerdo desmoronado"
      ],
      en: [
        "2 pounds white sweet potato (boniato), peeled and cut into chunks",
        "Oil for frying",
        "5 garlic cloves",
        "2 tablespoons olive oil",
        "½ teaspoon salt",
        "1 cup crumbled pork cracklings (chicharrón)"
      ]
    },
    steps: {
      es: [
        "Fría los trozos de batata a 325 °F unos 10 minutos, hasta que estén blandos por dentro y dorados por fuera. Escurra.",
        "En el pilón, maje el ajo con la sal y el aceite de oliva.",
        "Añada la batata caliente por partes y májela con el ajo.",
        "Incorpore el chicharrón y maje un poco más.",
        "Forme 4 bolas o copas y sirva enseguida con caldo de pollo o carne guisada. Es dulce y salado a la vez."
      ],
      en: [
        "Fry the sweet potato chunks at 325 °F about 10 minutes, until tender inside and golden outside. Drain.",
        "In the pilón (mortar), mash the garlic with the salt and olive oil.",
        "Add the hot sweet potato in batches and mash it with the garlic.",
        "Work in the cracklings and mash a little more.",
        "Shape 4 balls or cups and serve right away with chicken broth or carne guisada. It's sweet and salty at once."
      ]
    }
  },
  {
    id: "turron-ajonjoli-melao",
    category: "postres",
    name: { es: "Turrón de Ajonjolí con Melao", en: "Sesame Brittle with Cane Molasses" },
    active: 25, total: 70, wait: "enfriar",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de ajonjolí crudo",
        "¾ taza de azúcar",
        "¼ taza de melao de caña",
        "2 cucharadas de agua",
        "1 cucharada de mantequilla",
        "1 cucharadita de jengibre fresco rallado",
        "1 pizca de sal"
      ],
      en: [
        "2 cups raw sesame seeds",
        "¾ cup sugar",
        "¼ cup cane molasses",
        "2 tablespoons water",
        "1 tablespoon butter",
        "1 teaspoon grated fresh ginger",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Tueste el ajonjolí en un sartén seco a fuego medio-bajo 5 minutos, moviendo, hasta que esté doradito y huela. Engrase una bandeja.",
        "En una olla, cocine el azúcar, el melao, el agua, el jengibre y la sal sin mover, hasta que hierva con burbujas grandes y tome color oscuro, unos 8 minutos (300 °F en un termómetro de caramelo).",
        "Apague, añada la mantequilla y el ajonjolí, y mezcle rápido.",
        "Vierta en la bandeja y extienda a ¼ de pulgada con una espátula engrasada. Cuidado: quema mucho.",
        "Marque los cuadritos mientras esté tibio y deje enfriar 45 minutos. Pártalo y guárdelo en un frasco tapado. Es el primo crujiente del dulce de ajonjolí."
      ],
      en: [
        "Toast the sesame seeds in a dry skillet over medium-low heat 5 minutes, stirring, until golden and fragrant. Grease a baking sheet.",
        "In a pot, cook the sugar, molasses, water, ginger and salt without stirring, until it boils with large bubbles and turns dark, about 8 minutes (300 °F on a candy thermometer).",
        "Turn off the heat, add the butter and sesame seeds and mix quickly.",
        "Pour onto the sheet and spread to ¼ inch with a greased spatula. Careful: it's extremely hot.",
        "Score into squares while warm and let cool 45 minutes. Break it up and store it in a closed jar. It's the crunchy cousin of dulce de ajonjolí."
      ]
    }
  },
  {
    id: "dulce-ajonjoli-coco",
    category: "postres",
    name: { es: "Dulce de Ajonjolí y Coco", en: "Sesame and Coconut Candy" },
    active: 35, total: 95, wait: "enfriar",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de ajonjolí crudo",
        "1½ tazas de coco rallado",
        "1 taza de azúcar morena",
        "½ taza de leche de coco",
        "1 rajita de canela",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "1 cup raw sesame seeds",
        "1½ cups shredded coconut",
        "1 cup brown sugar",
        "½ cup coconut milk",
        "1 cinnamon stick",
        "1 teaspoon vanilla",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Tueste el ajonjolí en un sartén seco a fuego medio-bajo 5 minutos, hasta que esté doradito. Engrase un molde de 8 × 8 pulgadas.",
        "En una olla, hierva el azúcar, la leche de coco, la canela y la sal 5 minutos.",
        "Añada el coco y el ajonjolí y cocine a fuego medio-bajo 15 a 20 minutos, moviendo sin parar, hasta que la mezcla se despegue del fondo.",
        "Saque la canela, añada la vainilla y extienda en el molde apretando con una cuchara mojada.",
        "Deje enfriar 1 hora y corte en 16 cuadritos. Queda masticable, entre el dulce de ajonjolí y el coquimol."
      ],
      en: [
        "Toast the sesame seeds in a dry skillet over medium-low heat 5 minutes, until golden. Grease an 8 × 8-inch pan.",
        "In a pot, boil the sugar, coconut milk, cinnamon and salt 5 minutes.",
        "Add the coconut and sesame seeds and cook over medium-low heat 15 to 20 minutes, stirring constantly, until the mixture pulls away from the bottom.",
        "Remove the cinnamon, add the vanilla and spread in the pan, pressing with a wet spoon.",
        "Let cool 1 hour and cut into 16 squares. It's chewy, somewhere between dulce de ajonjolí and coquimol."
      ]
    }
  },
  {
    id: "salsa-jobos-cerdo",
    category: "salsas",
    name: { es: "Salsa Agridulce de Jobos para Cerdo", en: "Sweet and Sour Hog Plum (Jobo) Sauce for Pork" },
    active: 35, total: 35,
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de jobos maduros",
        "1 taza de agua",
        "⅓ taza de azúcar morena",
        "2 cucharadas de vinagre",
        "1 cucharada de aceite de oliva",
        "¼ taza de cebolla picadita",
        "2 dientes de ajo picados",
        "½ ají caballero picado, sin semillas (opcional)",
        "¼ cucharadita de sal"
      ],
      en: [
        "2 cups ripe hog plums (jobos)",
        "1 cup water",
        "⅓ cup brown sugar",
        "2 tablespoons vinegar",
        "1 tablespoon olive oil",
        "¼ cup finely chopped onion",
        "2 garlic cloves, chopped",
        "½ ají caballero (hot chili), chopped and seeded (optional)",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva los jobos en el agua 10 minutos, hasta que la pulpa se despegue de la semilla. Páselos por un colador apretando con una cuchara para sacar la pulpa; bote las semillas y las cáscaras.",
        "En una olla pequeña, sofría la cebolla y el ajo en el aceite 3 minutos.",
        "Añada la pulpa de jobo, el azúcar, el vinagre, el ají y la sal.",
        "Cocine a fuego bajo 10 a 12 minutos, moviendo, hasta que espese como una salsa BBQ.",
        "Sirva con chuletas, pernil o costillas. Los jobos se dan en el verano y son agrios como la ciruela."
      ],
      en: [
        "Boil the hog plums in the water 10 minutes, until the pulp comes away from the seed. Press them through a strainer with a spoon to extract the pulp; discard seeds and skins.",
        "In a small pot, sauté the onion and garlic in the oil 3 minutes.",
        "Add the jobo pulp, sugar, vinegar, chili and salt.",
        "Cook over low heat 10 to 12 minutes, stirring, until thick like a BBQ sauce.",
        "Serve with pork chops, pernil or ribs. Jobos ripen in summer and are tart like plums."
      ]
    }
  },
  {
    id: "pique-jobos",
    category: "salsas",
    name: { es: "Pique de Jobos y Ají Caballero", en: "Hog Plum (Jobo) Hot Sauce" },
    active: 30, total: 30,
    servings: 16,
    ingredients: {
      es: [
        "1½ tazas de jobos maduros",
        "½ taza de agua",
        "6 ajíes caballero",
        "4 ajíes dulces",
        "2 dientes de ajo",
        "¾ taza de vinagre",
        "1 cucharadita de sal",
        "1 cucharada de azúcar"
      ],
      en: [
        "1½ cups ripe hog plums (jobos)",
        "½ cup water",
        "6 ají caballero (hot chilies)",
        "4 ají dulce (sweet chili peppers)",
        "2 garlic cloves",
        "¾ cup vinegar",
        "1 teaspoon salt",
        "1 tablespoon sugar"
      ]
    },
    steps: {
      es: [
        "Hierva los jobos en el agua 10 minutos y saque la pulpa con un colador, botando semillas y cáscaras.",
        "Póngase guantes y quite el tallo a los ajíes caballero.",
        "Licúe la pulpa con los ajíes caballero, los ajíes dulces, el ajo, el vinagre, la sal y el azúcar.",
        "Hierva el pique 5 minutos y deje enfriar.",
        "Envase en frascos o botellas limpias. Dura 2 meses en la nevera. Unas gotas bastan: es muy picante."
      ],
      en: [
        "Boil the hog plums in the water 10 minutes and extract the pulp with a strainer, discarding seeds and skins.",
        "Put on gloves and remove the stems from the hot chilies.",
        "Blend the pulp with the hot chilies, sweet peppers, garlic, vinegar, salt and sugar.",
        "Boil the sauce 5 minutes and let cool.",
        "Store in clean jars or bottles. It keeps 2 months in the refrigerator. A few drops are enough: it's very hot."
      ]
    }
  },
  {
    id: "vinagreta-jobos",
    category: "salsas",
    name: { es: "Vinagreta de Jobos y Miel", en: "Hog Plum (Jobo) and Honey Vinaigrette" },
    active: 25, total: 25,
    servings: 8,
    ingredients: {
      es: [
        "1 taza de jobos maduros",
        "½ taza de agua",
        "2 cucharadas de vinagre de manzana",
        "1 cucharada de miel",
        "1 cucharadita de mostaza Dijon",
        "⅓ taza de aceite de oliva",
        "¼ cucharadita de sal",
        "1 pizca de pimienta"
      ],
      en: [
        "1 cup ripe hog plums (jobos)",
        "½ cup water",
        "2 tablespoons apple cider vinegar",
        "1 tablespoon honey",
        "1 teaspoon Dijon mustard",
        "⅓ cup olive oil",
        "¼ teaspoon salt",
        "1 pinch pepper"
      ]
    },
    steps: {
      es: [
        "Hierva los jobos en el agua 10 minutos y saque la pulpa con un colador, botando semillas y cáscaras. Deje enfriar.",
        "Bata ¼ taza de la pulpa con el vinagre, la miel, la mostaza, la sal y la pimienta.",
        "Añada el aceite en hilo, batiendo, hasta que se una.",
        "Pruebe: si está muy agria, añada un poco más de miel.",
        "Sirva sobre ensaladas verdes con aguacate o queso blanco. Dura 5 días en la nevera; agítela antes de usar."
      ],
      en: [
        "Boil the hog plums in the water 10 minutes and extract the pulp with a strainer, discarding seeds and skins. Let cool.",
        "Whisk ¼ cup of the pulp with the vinegar, honey, mustard, salt and pepper.",
        "Drizzle in the oil while whisking until emulsified.",
        "Taste: if it's too tart, add a little more honey.",
        "Serve over green salads with avocado or white cheese. It keeps 5 days in the refrigerator; shake before using."
      ]
    }
  },
  {
    id: "chutney-jobos",
    category: "salsas",
    name: { es: "Chutney de Jobos y Jengibre", en: "Hog Plum (Jobo) and Ginger Chutney" },
    active: 45, total: 45,
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de jobos maduros",
        "1 taza de agua",
        "½ taza de azúcar morena",
        "⅓ taza de vinagre de manzana",
        "½ cebolla roja picadita",
        "1 cucharada de jengibre fresco rallado",
        "¼ taza de pasas",
        "½ cucharadita de canela en polvo",
        "¼ cucharadita de sal"
      ],
      en: [
        "3 cups ripe hog plums (jobos)",
        "1 cup water",
        "½ cup brown sugar",
        "⅓ cup apple cider vinegar",
        "½ red onion, finely chopped",
        "1 tablespoon grated fresh ginger",
        "¼ cup raisins",
        "½ teaspoon ground cinnamon",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva los jobos en el agua 10 minutos y saque la pulpa con un colador, botando semillas y cáscaras.",
        "En una olla, ponga la pulpa con el azúcar, el vinagre, la cebolla, el jengibre, las pasas, la canela y la sal.",
        "Cocine a fuego bajo 25 minutos, moviendo de vez en cuando, hasta que espese como una mermelada.",
        "Deje enfriar y envase en un frasco limpio.",
        "Sirva con quesos, jamón de Navidad o pollo asado. Dura 3 semanas en la nevera."
      ],
      en: [
        "Boil the hog plums in the water 10 minutes and extract the pulp with a strainer, discarding seeds and skins.",
        "In a pot, combine the pulp with the sugar, vinegar, onion, ginger, raisins, cinnamon and salt.",
        "Cook over low heat 25 minutes, stirring now and then, until thick like jam.",
        "Let cool and store in a clean jar.",
        "Serve with cheeses, Christmas ham or roast chicken. It keeps 3 weeks in the refrigerator."
      ]
    }
  },
  {
    id: "pique-carambola",
    category: "salsas",
    name: { es: "Salsa Picante de Carambola", en: "Star Fruit (Carambola) Hot Salsa" },
    active: 15, total: 45, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "3 carambolas maduras en cubitos",
        "¼ de cebolla roja picadita",
        "1 ají caballero picadito, sin semillas",
        "2 ajíes dulces picaditos",
        "2 cucharadas de cilantro picado",
        "2 cucharadas de jugo de limón",
        "1 cucharadita de miel",
        "¼ cucharadita de sal"
      ],
      en: [
        "3 ripe star fruits (carambola), diced",
        "¼ red onion, finely chopped",
        "1 ají caballero (hot chili), finely chopped and seeded",
        "2 ají dulce (sweet chili peppers), finely chopped",
        "2 tablespoons chopped cilantro",
        "2 tablespoons lime juice",
        "1 teaspoon honey",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Quítele el borde oscuro a las puntas de la carambola antes de cortarla.",
        "Mezcle la carambola, la cebolla, los ajíes y el cilantro.",
        "Bata el limón con la miel y la sal, y viértalo encima.",
        "Deje reposar 30 minutos en la nevera para que suelte su jugo.",
        "Sirva con pescado a la parrilla, tacos de pescado o chicharrones. Las personas con problemas de los riñones no deben comer carambola."
      ],
      en: [
        "Trim the dark edge off the star fruit ridges before cutting.",
        "Mix the star fruit, onion, peppers and cilantro.",
        "Whisk the lime juice with the honey and salt and pour over the top.",
        "Let rest 30 minutes in the refrigerator so it releases its juice.",
        "Serve with grilled fish, fish tacos or chicharrones. People with kidney problems shouldn't eat star fruit."
      ]
    }
  },
  {
    id: "aderezo-guayaba-mostaza",
    category: "salsas",
    name: { es: "Aderezo de Guayaba y Mostaza", en: "Guava Mustard Dressing" },
    active: 10, total: 10,
    servings: 8,
    ingredients: {
      es: [
        "3 onzas de pasta de guayaba",
        "3 cucharadas de agua caliente",
        "2 cucharadas de mostaza Dijon",
        "2 cucharadas de vinagre de manzana",
        "⅓ taza de aceite de oliva",
        "¼ cucharadita de sal",
        "1 pizca de pimienta"
      ],
      en: [
        "3 ounces guava paste",
        "3 tablespoons hot water",
        "2 tablespoons Dijon mustard",
        "2 tablespoons apple cider vinegar",
        "⅓ cup olive oil",
        "¼ teaspoon salt",
        "1 pinch pepper"
      ]
    },
    steps: {
      es: [
        "Derrita la guayaba con el agua caliente en el microondas 30 segundos y bata hasta que esté lisa.",
        "Añada la mostaza, el vinagre, la sal y la pimienta.",
        "Añada el aceite en hilo, batiendo, hasta que espese.",
        "Pruebe y ajuste el vinagre.",
        "Úselo en ensaladas con queso, para untar sándwiches de pavo o para glasear pollo al final del horno."
      ],
      en: [
        "Melt the guava with the hot water in the microwave 30 seconds and whisk until smooth.",
        "Add the mustard, vinegar, salt and pepper.",
        "Drizzle in the oil while whisking until thickened.",
        "Taste and adjust the vinegar.",
        "Use it on salads with cheese, to spread on turkey sandwiches or to glaze chicken at the end of baking."
      ]
    }
  },
  {
    id: "caderas-pollo-horno",
    category: "aves",
    name: { es: "Caderas de Pollo al Horno con Adobo y Papas", en: "Baked Chicken Leg Quarters with Adobo and Potatoes" },
    active: 80, total: 140, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "6 caderas de pollo (cuartos de pierna)",
        "1 cucharada de adobo",
        "4 dientes de ajo majados",
        "1 cucharadita de orégano",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "1½ libras de papas en cuartos",
        "1 cebolla en ruedas"
      ],
      en: [
        "6 chicken leg quarters (caderas)",
        "1 tablespoon adobo",
        "4 garlic cloves, mashed",
        "1 teaspoon oregano",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "1½ pounds potatoes, quartered",
        "1 onion, sliced into rings"
      ]
    },
    steps: {
      es: [
        "Haga 2 cortes en cada cadera. Adóbelas con el adobo, el ajo, el orégano, el limón y el aceite, metiéndolo debajo de la piel. Déjelas 1 hora en la nevera.",
        "Caliente el horno a 400 °F. Ponga las papas y la cebolla en un molde grande y las caderas encima, con la piel hacia arriba.",
        "Hornee 45 minutos.",
        "Bañe las caderas con el juguito del molde y hornee 10 a 15 minutos más, hasta que la piel esté crujiente y el muslo llegue a 175 °F.",
        "Sirva con arroz y habichuelas. Las caderas son la presa más económica y la más jugosa."
      ],
      en: [
        "Make 2 cuts in each leg quarter. Season with the adobo, garlic, oregano, lime juice and oil, getting it under the skin. Refrigerate 1 hour.",
        "Heat the oven to 400 °F. Place the potatoes and onion in a large dish with the leg quarters on top, skin side up.",
        "Bake 45 minutes.",
        "Baste the leg quarters with the pan juices and bake 10 to 15 more minutes, until the skin is crisp and the thigh reaches 175 °F.",
        "Serve with rice and beans. Leg quarters are the cheapest and juiciest cut."
      ]
    }
  },
  {
    id: "caderas-pollo-guisadas",
    category: "aves",
    name: { es: "Caderas de Pollo Guisadas", en: "Stewed Chicken Leg Quarters" },
    active: 70, total: 70,
    servings: 6,
    ingredients: {
      es: [
        "6 caderas de pollo (cuartos de pierna), sin piel y partidas en dos",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 hoja de laurel",
        "1½ tazas de agua",
        "3 papas en cubos",
        "2 zanahorias en ruedas",
        "½ cucharadita de sal"
      ],
      en: [
        "6 chicken leg quarters (caderas), skinless and cut in two",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 bay leaf",
        "1½ cups water",
        "3 potatoes, cubed",
        "2 carrots, sliced",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Sazone las presas con el adobo y dórelas en el aceite de achiote en un caldero.",
        "Añada el sofrito y sofría 3 minutos. Agregue la salsa de tomate, las aceitunas y el laurel.",
        "Añada el agua, tape y cocine a fuego bajo 25 minutos.",
        "Añada las papas, las zanahorias y la sal, y cocine 20 minutos más, hasta que estén blandas y la salsa espese.",
        "Sirva con arroz blanco. Pida en la carnicería que le parta las caderas en muslo y encuentro."
      ],
      en: [
        "Season the pieces with the adobo and brown them in the annatto oil in a caldero.",
        "Add the sofrito and sauté 3 minutes. Add the tomato sauce, olives and bay leaf.",
        "Add the water, cover and cook over low heat 25 minutes.",
        "Add the potatoes, carrots and salt and cook 20 more minutes, until tender and the sauce thickens.",
        "Serve with white rice. Ask the butcher to split the leg quarters into thigh and drumstick."
      ]
    }
  },
  {
    id: "caderas-pollo-fritas",
    category: "aves",
    name: { es: "Caderas de Pollo Fritas Estilo Kiosco", en: "Kiosk-Style Fried Chicken Leg Quarters" },
    active: 50, total: 290, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "6 caderas de pollo (cuartos de pierna), partidas en dos",
        "1 cucharada de adobo",
        "6 dientes de ajo majados",
        "¼ taza de jugo de limón",
        "1½ tazas de harina de trigo",
        "1 cucharadita de pimentón",
        "½ cucharadita de pimienta",
        "Aceite para freír"
      ],
      en: [
        "6 chicken leg quarters (caderas), cut in two",
        "1 tablespoon adobo",
        "6 garlic cloves, mashed",
        "¼ cup lime juice",
        "1½ cups all-purpose flour",
        "1 teaspoon paprika",
        "½ teaspoon pepper",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe las presas con el adobo, el ajo y el limón, y déjelas al menos 4 horas en la nevera.",
        "Mezcle la harina con el pimentón y la pimienta. Pase cada presa por la harina, apretando.",
        "Caliente el aceite a 325 °F en un caldero hondo, a la mitad de su altura.",
        "Fría de 3 en 3, unos 15 minutos, dándoles vuelta, hasta que estén doradas y el muslo llegue a 175 °F. Mantenga el aceite entre 300 y 325 °F para que se cocinen por dentro sin quemarse.",
        "Escurra sobre una rejilla. Es el pollo frito de los kioscos de carretera: se come con tostones o arañitas."
      ],
      en: [
        "Season the pieces with the adobo, garlic and lime juice and refrigerate at least 4 hours.",
        "Mix the flour with the paprika and pepper. Dredge each piece in the flour, pressing.",
        "Heat the oil to 325 °F in a deep caldero, halfway up the sides.",
        "Fry 3 at a time, about 15 minutes, turning, until golden and the thigh reaches 175 °F. Keep the oil between 300 and 325 °F so they cook through without burning.",
        "Drain on a rack. It's roadside-kiosk fried chicken: eat it with tostones or arañitas."
      ]
    }
  },
  {
    id: "caderas-pollo-bbq-guayaba",
    category: "aves",
    name: { es: "Caderas de Pollo al Carbón con BBQ de Guayaba", en: "Charcoal-Grilled Chicken Leg Quarters with Guava BBQ" },
    active: 60, total: 180, wait: "adobo",
    servings: 6,
    ingredients: {
      es: [
        "6 caderas de pollo (cuartos de pierna)",
        "1 cucharadita de adobo",
        "4 dientes de ajo majados",
        "2 cucharadas de jugo de naranja agria",
        "1 cucharada de aceite",
        "½ taza de salsa BBQ de guayaba"
      ],
      en: [
        "6 chicken leg quarters (caderas)",
        "1 teaspoon adobo",
        "4 garlic cloves, mashed",
        "2 tablespoons sour orange juice",
        "1 tablespoon oil",
        "½ cup guava BBQ sauce"
      ]
    },
    steps: {
      es: [
        "Adobe las caderas con el adobo, el ajo, la naranja agria y el aceite, y déjelas 2 horas en la nevera.",
        "Prepare el carbón para fuego indirecto: todo el carbón encendido a un lado de la parrilla.",
        "Ase las caderas en el lado sin fuego, tapado, 40 minutos, volteándolas a la mitad.",
        "Páselas al lado del fuego, úntelas con la BBQ de guayaba y ase 10 a 15 minutos, volteando y untando, hasta que se caramelicen y el muslo llegue a 175 °F.",
        "Es el pollo de los cumpleaños en el patio."
      ],
      en: [
        "Season the leg quarters with the adobo, garlic, sour orange juice and oil and refrigerate 2 hours.",
        "Set up the charcoal for indirect heat: all the lit coals on one side of the grill.",
        "Grill the leg quarters on the side without coals, covered, 40 minutes, turning halfway.",
        "Move them over the coals, brush with the guava BBQ and grill 10 to 15 minutes, turning and brushing, until caramelized and the thigh reaches 175 °F.",
        "It's backyard birthday-party chicken."
      ]
    }
  },
  {
    id: "caderas-pollo-arroz-horno",
    category: "aves",
    name: { es: "Caderas de Pollo con Arroz al Horno (Todo en un Molde)", en: "One-Pan Baked Chicken Leg Quarters and Rice" },
    active: 85, total: 95, wait: "reposo",
    servings: 6,
    ingredients: {
      es: [
        "6 caderas de pollo (cuartos de pierna)",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "2 tazas de arroz grano largo",
        "1 taza de gandules, escurridos",
        "3½ tazas de caldo de pollo bajo en sodio",
                "¼ taza de aceitunas rellenas"
      ],
      en: [
        "6 chicken leg quarters (caderas)",
        "1 teaspoon adobo",
        "2 tablespoons annatto oil",
        "½ cup sofrito",
        "2 cups long-grain rice",
        "1 cup pigeon peas (gandules), drained",
        "3½ cups low-sodium chicken broth",
                "¼ cup stuffed olives"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375 °F. Sazone las caderas con el adobo.",
        "En un molde hondo de 9 × 13 pulgadas, mezcle el arroz crudo, el sofrito, el aceite de achiote, los gandules, y las aceitunas (no le ponga sal: el adobo y las aceitunas la traen).",
        "Vierta el caldo caliente y acomode las caderas encima, con la piel hacia arriba.",
        "Tape bien con papel de aluminio y hornee 50 minutos. Destape y hornee 15 minutos más para que la piel dore.",
        "Deje reposar 10 minutos tapado antes de servir. El arroz se cocina con el jugo del pollo."
      ],
      en: [
        "Heat the oven to 375 °F. Season the leg quarters with the adobo.",
        "In a deep 9 × 13-inch dish, mix the raw rice, sofrito, annatto oil, pigeon peas, and olives (no salt needed: the adobo and olives bring it).",
        "Pour in the hot broth and arrange the leg quarters on top, skin side up.",
        "Cover tightly with aluminum foil and bake 50 minutes. Uncover and bake 15 more minutes so the skin browns.",
        "Let rest 10 minutes covered before serving. The rice cooks in the chicken juices."
      ]
    }
  },
  {
    id: "avena-coquito",
    category: "cereales",
    name: { es: "Avena de Coquito (Sin Alcohol)", en: "Coquito Oatmeal (Alcohol-Free)" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de avena en hojuelas",
        "1 lata de 13.5 onzas de leche de coco",
        "2 tazas de leche",
        "¼ taza de leche condensada",
        "1 rajita de canela",
        "¼ cucharadita de nuez moscada",
        "1 cucharadita de vainilla",
        "1 pizca de sal",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cups rolled oats",
        "1 can (13.5 oz) coconut milk",
        "2 cups milk",
        "¼ cup sweetened condensed milk",
        "1 cinnamon stick",
        "¼ teaspoon nutmeg",
        "1 teaspoon vanilla",
        "1 pinch salt",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "En una olla, caliente la leche de coco, la leche, la canela y la sal.",
        "Cuando empiece a hervir, añada la avena y baje el fuego.",
        "Cocine 6 a 8 minutos, moviendo, hasta que espese.",
        "Saque la canela y añada la leche condensada, la nuez moscada y la vainilla.",
        "Sirva caliente con canela por encima. Sabe al coquito de Navidad, pero es para el desayuno."
      ],
      en: [
        "In a pot, heat the coconut milk, milk, cinnamon stick and salt.",
        "When it starts to boil, add the oats and lower the heat.",
        "Cook 6 to 8 minutes, stirring, until thickened.",
        "Remove the cinnamon stick and add the condensed milk, nutmeg and vanilla.",
        "Serve hot with cinnamon on top. It tastes like Christmas coquito, but for breakfast."
      ]
    }
  },
  {
    id: "granola-ajonjoli-melao",
    category: "cereales",
    name: { es: "Granola de Avena, Ajonjolí y Melao", en: "Oat, Sesame and Molasses Granola" },
    active: 45, total: 60, wait: "enfriar",
    servings: 10,
    ingredients: {
      es: [
        "3 tazas de avena en hojuelas",
        "½ taza de ajonjolí crudo",
        "½ taza de coco rallado sin azúcar",
        "½ taza de almendras picadas",
        "¼ taza de melao de caña",
        "¼ taza de miel",
        "¼ taza de aceite de coco derretido",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de sal",
        "½ taza de pasas"
      ],
      en: [
        "3 cups rolled oats",
        "½ cup raw sesame seeds",
        "½ cup unsweetened shredded coconut",
        "½ cup chopped almonds",
        "¼ cup cane molasses",
        "¼ cup honey",
        "¼ cup melted coconut oil",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon salt",
        "½ cup raisins"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 325 °F y cubra una bandeja grande con papel de hornear.",
        "Mezcle la avena, el ajonjolí, el coco, las almendras, la canela y la sal.",
        "Caliente el melao, la miel y el aceite de coco hasta que estén líquidos y viértalos sobre la avena, mezclando bien.",
        "Extienda en la bandeja y hornee 25 a 30 minutos, moviendo a la mitad, hasta que esté dorada.",
        "Añada las pasas y deje enfriar en la bandeja sin mover: así se forman los grumos. Guárdela en un frasco tapado hasta 2 semanas."
      ],
      en: [
        "Heat the oven to 325 °F and line a large baking sheet with parchment paper.",
        "Mix the oats, sesame seeds, coconut, almonds, cinnamon and salt.",
        "Warm the molasses, honey and coconut oil until liquid and pour over the oats, mixing well.",
        "Spread on the sheet and bake 25 to 30 minutes, stirring halfway, until golden.",
        "Add the raisins and let cool on the sheet without stirring: that's how the clusters form. Store in a closed jar up to 2 weeks."
      ]
    }
  },
  {
    id: "maicena-chocolate",
    category: "cereales",
    name: { es: "Maicena de Chocolate", en: "Chocolate Cornstarch Porridge (Maicena)" },
    active: 12, total: 12,
    servings: 4,
    ingredients: {
      es: [
        "4 tazas de leche",
        "¼ taza de maicena",
        "¼ taza de azúcar",
        "2 cucharadas de cacao en polvo sin azúcar",
        "1 rajita de canela",
        "1 pizca de sal",
        "1 cucharadita de vainilla"
      ],
      en: [
        "4 cups milk",
        "¼ cup cornstarch",
        "¼ cup sugar",
        "2 tablespoons unsweetened cocoa powder",
        "1 cinnamon stick",
        "1 pinch salt",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "En una olla fría, disuelva la maicena, el azúcar, el cacao y la sal en 1 taza de la leche, sin grumos.",
        "Añada el resto de la leche y la canela.",
        "Cocine a fuego medio, moviendo sin parar, hasta que hierva y espese, unos 8 minutos.",
        "Saque la canela y añada la vainilla.",
        "Sirva caliente en tazones. Es la maicena de siempre, pero de chocolate: a los niños les encanta en las mañanas frescas."
      ],
      en: [
        "In a cold pot, dissolve the cornstarch, sugar, cocoa and salt in 1 cup of the milk, with no lumps.",
        "Add the rest of the milk and the cinnamon stick.",
        "Cook over medium heat, stirring constantly, until it boils and thickens, about 8 minutes.",
        "Remove the cinnamon and add the vanilla.",
        "Serve hot in bowls. It's classic maicena, but chocolate: kids love it on cool mornings."
      ]
    }
  },
  {
    id: "harina-maiz-coco",
    category: "cereales",
    name: { es: "Harina de Maíz con Leche de Coco (Vegana)", en: "Cornmeal Porridge with Coconut Milk (Vegan)" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 lata de 13.5 onzas de leche de coco",
        "2½ tazas de agua",
        "½ taza de harina de maíz fina",
        "¼ taza de azúcar morena",
        "1 rajita de canela",
        "3 clavos de especia",
        "1 pizca de sal",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 can (13.5 oz) coconut milk",
        "2½ cups water",
        "½ cup fine cornmeal",
        "¼ cup brown sugar",
        "1 cinnamon stick",
        "3 whole cloves",
        "1 pinch salt",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Disuelva la harina de maíz en 1 taza del agua fría.",
        "En una olla, hierva el resto del agua y la leche de coco con la canela, los clavos y la sal.",
        "Añada la harina disuelta poco a poco, moviendo sin parar para que no se hagan grumos.",
        "Cocine a fuego bajo 8 a 10 minutos, moviendo, hasta que espese. Añada el azúcar y la vainilla, y saque la canela y los clavos.",
        "Sirva caliente. Es vegana y más cremosa que la de leche de vaca."
      ],
      en: [
        "Dissolve the cornmeal in 1 cup of the cold water.",
        "In a pot, boil the rest of the water and the coconut milk with the cinnamon, cloves and salt.",
        "Add the dissolved cornmeal little by little, stirring constantly so no lumps form.",
        "Cook over low heat 8 to 10 minutes, stirring, until thickened. Add the sugar and vanilla and remove the cinnamon and cloves.",
        "Serve hot. It's vegan and creamier than the cow's milk version."
      ]
    }
  },
  {
    id: "espaguetis-albondigas",
    category: "pastas",
    name: { es: "Espaguetis con Albóndigas en Salsa Criolla", en: "Spaghetti and Meatballs in Creole Sauce" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de carne molida de res",
        "½ taza de pan rallado",
        "1 huevo",
        "2 cucharadas de sofrito para las albóndigas",
        "½ cucharadita de sal",
        "2 cucharadas de aceite de oliva",
        "½ taza de sofrito para la salsa",
        "1 lata de 28 onzas de tomates triturados",
        "1 hoja de laurel",
        "1 libra de espaguetis",
        "½ taza de queso parmesano rallado"
      ],
      en: [
        "1 pound ground beef",
        "½ cup breadcrumbs",
        "1 egg",
        "2 tablespoons sofrito for the meatballs",
        "½ teaspoon salt",
        "2 tablespoons olive oil",
        "½ cup sofrito for the sauce",
        "1 can (28 oz) crushed tomatoes",
        "1 bay leaf",
        "1 pound spaghetti",
        "½ cup grated Parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Mezcle la carne, el pan rallado, el huevo, las 2 cucharadas de sofrito y la sal, sin apretar de más. Forme 24 albóndigas.",
        "Dórelas en el aceite en un caldero, en tandas, y sáquelas.",
        "En el mismo caldero, sofría la ½ taza de sofrito 3 minutos, añada los tomates y el laurel, y devuelva las albóndigas. Tape y cocine a fuego bajo 25 minutos.",
        "Mientras, hierva los espaguetis en agua con sal hasta que estén al dente y escúrralos.",
        "Sirva los espaguetis con la salsa, las albóndigas y el parmesano por encima."
      ],
      en: [
        "Mix the beef, breadcrumbs, egg, the 2 tablespoons of sofrito and the salt without overworking. Shape 24 meatballs.",
        "Brown them in the oil in a caldero, in batches, and remove.",
        "In the same caldero, sauté the ½ cup of sofrito 3 minutes, add the tomatoes and bay leaf and return the meatballs. Cover and cook over low heat 25 minutes.",
        "Meanwhile, boil the spaghetti in salted water until al dente and drain.",
        "Serve the spaghetti with the sauce, the meatballs and Parmesan on top."
      ]
    }
  },
  {
    id: "lasana-pollo",
    category: "pastas",
    name: { es: "Lasaña de Pollo en Salsa Blanca", en: "Chicken Lasagna in White Sauce" },
    active: 95, total: 115, wait: "reposo",
    servings: 10,
    ingredients: {
      es: [
        "12 láminas de lasaña",
        "3 tazas de pollo cocido desmenuzado",
        "2 cucharadas de mantequilla",
        "¼ taza de sofrito",
        "1 taza de maíz en grano",
        "1 taza de espinaca picada",
        "4 cucharadas de mantequilla para la salsa blanca",
        "⅓ taza de harina de trigo",
        "4 tazas de leche",
        "¼ cucharadita de nuez moscada",
        "1 taza de queso ricotta",
        "2 tazas de queso mozzarella rallado",
        "½ taza de queso parmesano rallado"
      ],
      en: [
        "12 lasagna noodles",
        "3 cups shredded cooked chicken",
        "2 tablespoons butter",
        "¼ cup sofrito",
        "1 cup corn kernels",
        "1 cup chopped spinach",
        "4 tablespoons butter for the white sauce",
        "⅓ cup all-purpose flour",
        "4 cups milk",
        "¼ teaspoon nutmeg",
        "1 cup ricotta cheese",
        "2 cups shredded mozzarella cheese",
        "½ cup grated Parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Hierva las láminas de lasaña al dente y extiéndalas sobre un paño engrasado. Para la salsa blanca, derrita las 4 cucharadas de mantequilla, añada la harina y cocine 1 minuto; añada la leche poco a poco, batiendo, y cocine hasta que espese. Añada la nuez moscada.",
        "Sofría el sofrito en la mantequilla, añada el pollo, el maíz y la espinaca, y cocine 5 minutos. Mezcle con 1 taza de la salsa blanca.",
        "Caliente el horno a 375 °F. En un molde de 9 × 13 pulgadas, ponga 1 taza de salsa blanca, 4 láminas, la mitad del pollo, la mitad de la ricotta y un tercio de la mozzarella. Repita.",
        "Termine con 4 láminas, el resto de la salsa blanca, la mozzarella y el parmesano.",
        "Tape con papel de aluminio y hornee 30 minutos; destape y hornee 15 más, hasta que dore. Deje reposar 20 minutos antes de cortar."
      ],
      en: [
        "Boil the lasagna noodles al dente and lay them on a greased towel. For the white sauce, melt the 4 tablespoons of butter, add the flour and cook 1 minute; whisk in the milk little by little and cook until thick. Add the nutmeg.",
        "Sauté the sofrito in the butter, add the chicken, corn and spinach and cook 5 minutes. Mix with 1 cup of the white sauce.",
        "Heat the oven to 375 °F. In a 9 × 13-inch dish, spread 1 cup of white sauce, 4 noodles, half the chicken, half the ricotta and a third of the mozzarella. Repeat.",
        "Finish with 4 noodles, the rest of the white sauce, the mozzarella and the Parmesan.",
        "Cover with aluminum foil and bake 30 minutes; uncover and bake 15 more, until golden. Let rest 20 minutes before cutting."
      ]
    }
  },
  {
    id: "fideua-mariscos",
    category: "pastas",
    name: { es: "Fideos con Mariscos (Fideuá Boricua)", en: "Seafood Noodle Paella (Puerto Rican Fideuá)" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de fideos finos cortos",
        "3 cucharadas de aceite de oliva",
        "½ libra de camarones pelados",
        "½ libra de calamares en anillos",
        "½ taza de sofrito",
        "3 dientes de ajo picados",
        "½ taza de salsa de tomate",
        "1 sobre de sazón con azafrán",
        "4 tazas de caldo de pescado bajo en sodio",
        "1 libra de mejillones limpios",
        "1 limón en cuñas"
      ],
      en: [
        "1 pound short thin noodles (fideos)",
        "3 tablespoons olive oil",
        "½ pound shrimp, peeled",
        "½ pound squid rings",
        "½ cup sofrito",
        "3 garlic cloves, chopped",
        "½ cup tomato sauce",
        "1 packet sazón with saffron",
        "4 cups low-sodium fish broth",
        "1 pound mussels, cleaned",
        "1 lime, in wedges"
      ]
    },
    steps: {
      es: [
        "En un caldero ancho o paellera, dore los fideos en el aceite 4 minutos, moviendo, hasta que estén doraditos. Sáquelos.",
        "En el mismo aceite, saltee los camarones y los calamares 2 minutos y sáquelos.",
        "Sofría el sofrito y el ajo 3 minutos, añada la salsa de tomate, el sazón y el caldo, y deje hervir.",
        "Añada los fideos y cocine a fuego medio 8 minutos sin mover. Hunda los mejillones, los camarones y los calamares, y cocine 4 minutos más, hasta que los mejillones abran y el caldo se absorba.",
        "Deje reposar 3 minutos y sirva con limón. Bote los mejillones que no abran."
      ],
      en: [
        "In a wide caldero or paella pan, toast the noodles in the oil 4 minutes, stirring, until golden. Remove.",
        "In the same oil, sauté the shrimp and squid 2 minutes and remove.",
        "Sauté the sofrito and garlic 3 minutes, add the tomato sauce, sazón and broth and bring to a boil.",
        "Add the noodles and cook over medium heat 8 minutes without stirring. Press in the mussels, shrimp and squid and cook 4 more minutes, until the mussels open and the broth is absorbed.",
        "Let rest 3 minutes and serve with lime. Discard any mussels that don't open."
      ]
    }
  },
  {
    id: "espaguetis-chuletas-ahumadas",
    category: "pastas",
    name: { es: "Espaguetis con Chuletas Ahumadas", en: "Spaghetti with Smoked Pork Chops" },
    active: 35, total: 35,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de espaguetis",
        "2 chuletas ahumadas deshuesadas, en cubitos",
        "1 cucharada de aceite de oliva",
        "½ taza de sofrito",
        "1 lata de 15 onzas de tomates triturados",
        "½ taza de agua",
        "¼ taza de aceitunas rellenas",
        "½ taza de queso parmesano rallado"
      ],
      en: [
        "1 pound spaghetti",
        "2 boneless smoked pork chops, diced",
        "1 tablespoon olive oil",
        "½ cup sofrito",
        "1 can (15 oz) crushed tomatoes",
        "½ cup water",
        "¼ cup stuffed olives",
        "½ cup grated Parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Dore los cubitos de chuleta en el aceite 5 minutos.",
        "Añada el sofrito y sofría 3 minutos.",
        "Agregue los tomates, el agua y las aceitunas, y cocine 15 minutos a fuego bajo. No le ponga sal: la chuleta ahumada ya la trae.",
        "Mientras, hierva los espaguetis en agua con sal hasta que estén al dente y escúrralos.",
        "Mezcle los espaguetis con la salsa y sirva con el parmesano."
      ],
      en: [
        "Brown the diced chops in the oil 5 minutes.",
        "Add the sofrito and sauté 3 minutes.",
        "Add the tomatoes, water and olives and cook 15 minutes over low heat. Don't add salt: smoked pork chops already bring it.",
        "Meanwhile, boil the spaghetti in salted water until al dente and drain.",
        "Toss the spaghetti with the sauce and serve with the Parmesan."
      ]
    }
  },
  {
    id: "pasta-garbanzos-espinaca",
    category: "pastas",
    name: { es: "Pasta con Garbanzos, Espinaca y Ajo (Vegana)", en: "Pasta with Chickpeas, Spinach and Garlic (Vegan)" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "12 onzas de pasta corta (penne o coditos)",
        "¼ taza de aceite de oliva",
        "6 dientes de ajo en lascas",
        "1 pizca de hojuelas de pimiento rojo",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "5 tazas de espinaca fresca",
        "1 cucharada de jugo de limón",
        "½ cucharadita de sal",
        "2 cucharadas de levadura nutricional (opcional)"
      ],
      en: [
        "12 ounces short pasta (penne or elbows)",
        "¼ cup olive oil",
        "6 garlic cloves, sliced",
        "1 pinch red pepper flakes",
        "1 can (15 oz) chickpeas, drained",
        "5 cups fresh spinach",
        "1 tablespoon lime juice",
        "½ teaspoon salt",
        "2 tablespoons nutritional yeast (optional)"
      ]
    },
    steps: {
      es: [
        "Hierva la pasta en agua con sal hasta que esté al dente. Guarde ½ taza del agua y escurra.",
        "En un sartén grande, dore el ajo en el aceite a fuego bajo con el pimiento.",
        "Añada los garbanzos y la sal y cocine 5 minutos, hasta que estén un poco crujientes.",
        "Añada la espinaca y mueva hasta que se marchite. Agregue la pasta y el agua guardada, y mezcle.",
        "Apague, añada el limón y la levadura nutricional. Es vegana y está lista en 25 minutos."
      ],
      en: [
        "Boil the pasta in salted water until al dente. Save ½ cup of the water and drain.",
        "In a large skillet, brown the garlic in the oil over low heat with the pepper flakes.",
        "Add the chickpeas and salt and cook 5 minutes, until slightly crisp.",
        "Add the spinach and stir until wilted. Add the pasta and the saved water and toss.",
        "Turn off the heat and add the lime juice and nutritional yeast. It's vegan and ready in 25 minutes."
      ]
    }
  },
  // ---------- Tanda 59: jugos naturales (6), bebidas tropicales (6) y recetas con apio del país (7) ----------
  {
    id: "jugo-uva-playa",
    category: "jugos",
    name: { es: "Jugo de Uvas de Playa", en: "Sea Grape Juice (Uvas de Playa)" },
    active: 25, total: 25,
    servings: 6,
    ingredients: {
      es: [
        "4 tazas de uvas de playa bien maduras (moradas)",
        "5 tazas de agua",
        "½ taza de azúcar",
        "2 cucharadas de jugo de limón",
        "1 taza de hielo"
      ],
      en: [
        "4 cups very ripe sea grapes (purple)",
        "5 cups water",
        "½ cup sugar",
        "2 tablespoons lime juice",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Desgrane las uvas de playa, lávelas y use sólo las moradas y blanditas.",
        "Hiérvalas en 2 tazas del agua 8 minutos, aplastándolas con una cuchara para que suelten la pulpa.",
        "Cuele apretando para dejar las semillas grandes y las cáscaras.",
        "Añada el resto del agua, el azúcar y el limón, y mezcle hasta disolver.",
        "Sirva bien frío sobre hielo. Las uvas de playa se dan en el verano en los árboles de la costa; tienen un sabor como de uva y ciruela."
      ],
      en: [
        "Pull the sea grapes off the clusters, wash them and use only the purple, soft ones.",
        "Boil them in 2 cups of the water 8 minutes, mashing with a spoon so they release the pulp.",
        "Strain, pressing, to leave behind the large seeds and skins.",
        "Add the rest of the water, the sugar and lime juice and stir to dissolve.",
        "Serve very cold over ice. Sea grapes ripen in summer on coastal trees; they taste like a cross between grape and plum."
      ]
    }
  },
  {
    id: "jugo-pina-jengibre-curcuma",
    category: "jugos",
    name: { es: "Jugo de Piña, Jengibre y Cúrcuma", en: "Pineapple, Ginger and Turmeric Juice" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "4 tazas de piña fresca en cubos",
        "1 pedazo de jengibre fresco de 1 pulgada, pelado",
        "1 pedazo de cúrcuma fresca de 1 pulgada, pelada, o ½ cucharadita en polvo",
        "2 tazas de agua fría",
        "1 cucharada de jugo de limón",
        "1 pizca de pimienta negra",
        "1 taza de hielo"
      ],
      en: [
        "4 cups fresh pineapple, cubed",
        "1-inch piece fresh ginger, peeled",
        "1-inch piece fresh turmeric, peeled, or ½ teaspoon ground",
        "2 cups cold water",
        "1 tablespoon lime juice",
        "1 pinch black pepper",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la piña con el jengibre, la cúrcuma y el agua hasta que esté muy suave.",
        "Cuele por un colador fino, apretando con una cuchara.",
        "Añada el limón y la pimienta, y mezcle. La pimienta ayuda a aprovechar la cúrcuma.",
        "Pruebe: la piña madura no necesita azúcar.",
        "Sirva sobre hielo enseguida. Ojo: la cúrcuma mancha la ropa y las tablas de cortar."
      ],
      en: [
        "Blend the pineapple with the ginger, turmeric and water until very smooth.",
        "Strain through a fine sieve, pressing with a spoon.",
        "Add the lime juice and pepper and stir. Pepper helps the body use the turmeric.",
        "Taste: ripe pineapple needs no sugar.",
        "Serve over ice right away. Careful: turmeric stains clothes and cutting boards."
      ]
    }
  },
  {
    id: "limonada-fresa",
    category: "jugos",
    name: { es: "Limonada de Fresa", en: "Strawberry Lemonade" },
    active: 10, total: 10,
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de fresas sin hojas",
        "¾ taza de jugo de limón",
        "½ taza de azúcar",
        "5 tazas de agua fría",
        "1 taza de hielo",
        "Ruedas de limón para decorar"
      ],
      en: [
        "2 cups hulled strawberries",
        "¾ cup lime juice",
        "½ cup sugar",
        "5 cups cold water",
        "1 cup ice",
        "Lime slices for garnish"
      ]
    },
    steps: {
      es: [
        "Licúe las fresas con el azúcar y 1 taza del agua hasta que estén suaves.",
        "Cuele para sacar las semillitas, si quiere.",
        "En una jarra, mezcle el puré de fresa con el limón y el resto del agua.",
        "Pruebe y ajuste el azúcar o el limón.",
        "Sirva sobre hielo con ruedas de limón. Las fresas de Jayuya y Adjuntas se dan de diciembre a abril."
      ],
      en: [
        "Blend the strawberries with the sugar and 1 cup of the water until smooth.",
        "Strain out the seeds, if you like.",
        "In a pitcher, mix the strawberry purée with the lime juice and the rest of the water.",
        "Taste and adjust the sugar or lime.",
        "Serve over ice with lime slices. Strawberries from Jayuya and Adjuntas are in season December through April."
      ]
    }
  },
  {
    id: "jugo-remolacha-zanahoria-china",
    category: "jugos",
    name: { es: "Jugo de Remolacha, Zanahoria y China", en: "Beet, Carrot and Orange Juice" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 remolacha mediana pelada en cubos",
        "3 zanahorias en ruedas",
        "2 tazas de jugo de china fresco",
        "1 taza de agua fría",
        "1 cucharadita de jengibre fresco rallado",
        "1 taza de hielo"
      ],
      en: [
        "1 medium beet, peeled and cubed",
        "3 carrots, sliced",
        "2 cups fresh orange juice",
        "1 cup cold water",
        "1 teaspoon grated fresh ginger",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe la remolacha y las zanahorias con el agua hasta que estén muy finas.",
        "Cuele por un colador fino o un paño, apretando bien.",
        "Mezcle con el jugo de china y el jengibre.",
        "Pruebe: es dulce por sí solo y no necesita azúcar.",
        "Sirva sobre hielo. Póngase un delantal: la remolacha mancha."
      ],
      en: [
        "Blend the beet and carrots with the water until very fine.",
        "Strain through a fine sieve or cloth, pressing well.",
        "Mix with the orange juice and ginger.",
        "Taste: it's naturally sweet and needs no sugar.",
        "Serve over ice. Wear an apron: beets stain."
      ]
    }
  },
  {
    id: "limonada-hierbabuena",
    category: "jugos",
    name: { es: "Limonada Frappé de Hierbabuena", en: "Frozen Mint Lemonade" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "½ taza de jugo de limón",
        "½ taza de azúcar",
        "1 taza de hojas de hierbabuena (yerbabuena)",
        "2 tazas de agua fría",
        "3 tazas de hielo"
      ],
      en: [
        "½ cup lime juice",
        "½ cup sugar",
        "1 cup mint leaves (yerbabuena)",
        "2 cups cold water",
        "3 cups ice"
      ]
    },
    steps: {
      es: [
        "Ponga en la licuadora el limón, el azúcar, la hierbabuena y el agua.",
        "Licúe 30 segundos, hasta que la hierbabuena esté bien picadita.",
        "Añada el hielo y licúe hasta que quede como un granizado.",
        "Pruebe y ajuste el azúcar.",
        "Sirva enseguida en vasos fríos con una ramita de hierbabuena. Es la limonada de los días de calor."
      ],
      en: [
        "Put the lime juice, sugar, mint and water in the blender.",
        "Blend 30 seconds, until the mint is finely chopped.",
        "Add the ice and blend until slushy.",
        "Taste and adjust the sugar.",
        "Serve right away in chilled glasses with a sprig of mint. It's the lemonade for hot days."
      ]
    }
  },
  {
    id: "jugo-guayaba-parcha",
    category: "jugos",
    name: { es: "Jugo de Guayaba y Parcha", en: "Guava and Passion Fruit Juice" },
    active: 20, total: 20,
    servings: 6,
    ingredients: {
      es: [
        "4 guayabas maduras",
        "½ taza de pulpa de parcha",
        "5 tazas de agua fría",
        "½ taza de azúcar",
        "1 taza de hielo"
      ],
      en: [
        "4 ripe guavas",
        "½ cup passion fruit pulp",
        "5 cups cold water",
        "½ cup sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Lave las guayabas, quíteles las puntas y córtelas en cuartos.",
        "Licúelas con 2 tazas del agua y cuele apretando para sacar las semillas.",
        "Licúe la pulpa de parcha con 1 taza del agua unos segundos (sin romper las semillas) y cuele.",
        "Mezcle los dos jugos con el resto del agua y el azúcar.",
        "Sirva bien frío sobre hielo. Es rosado y agridulce."
      ],
      en: [
        "Wash the guavas, trim the ends and cut into quarters.",
        "Blend them with 2 cups of the water and strain, pressing, to remove the seeds.",
        "Pulse the passion fruit pulp with 1 cup of the water a few seconds (without crushing the seeds) and strain.",
        "Mix both juices with the rest of the water and the sugar.",
        "Serve very cold over ice. It's pink and sweet-tart."
      ]
    }
  },
  {
    id: "batida-pitahaya",
    category: "bebidas",
    name: { es: "Batida de Pitahaya", en: "Dragon Fruit (Pitahaya) Shake" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 pitahaya roja pelada en cubos (o 1 paquete de pulpa congelada)",
        "1 guineo maduro",
        "1 taza de leche",
        "½ taza de yogur natural",
        "1 cucharada de miel",
        "1 taza de hielo"
      ],
      en: [
        "1 red dragon fruit (pitahaya), peeled and cubed (or 1 pack frozen pulp)",
        "1 ripe banana",
        "1 cup milk",
        "½ cup plain yogurt",
        "1 tablespoon honey",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Ponga en la licuadora la pitahaya, el guineo, la leche, el yogur y la miel.",
        "Licúe hasta que esté suave.",
        "Añada el hielo y licúe otra vez.",
        "Pruebe y ajuste la miel.",
        "Sirva enseguida: tiene un color fucsia brillante que encanta a los niños."
      ],
      en: [
        "Put the dragon fruit, banana, milk, yogurt and honey in the blender.",
        "Blend until smooth.",
        "Add the ice and blend again.",
        "Taste and adjust the honey.",
        "Serve right away: it's a bright fuchsia that kids love."
      ]
    }
  },
  {
    id: "batida-aguacate",
    category: "bebidas",
    name: { es: "Batida de Aguacate", en: "Avocado Shake" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1 aguacate del país maduro, sin semilla",
        "1½ tazas de leche fría",
        "3 cucharadas de leche condensada",
        "½ cucharadita de vainilla",
        "1 taza de hielo"
      ],
      en: [
        "1 ripe Caribbean avocado, pitted",
        "1½ cups cold milk",
        "3 tablespoons sweetened condensed milk",
        "½ teaspoon vanilla",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Saque la pulpa del aguacate con una cuchara.",
        "Licúela con la leche, la leche condensada y la vainilla hasta que esté muy cremosa.",
        "Añada el hielo y licúe otra vez.",
        "Si queda muy espesa, añada un poco más de leche.",
        "Sirva enseguida. El aguacate dulce es raro para algunos, pero queda como un mantecado de vainilla verde."
      ],
      en: [
        "Scoop out the avocado flesh with a spoon.",
        "Blend it with the milk, condensed milk and vanilla until very creamy.",
        "Add the ice and blend again.",
        "If it's too thick, add a little more milk.",
        "Serve right away. Sweet avocado surprises some people, but it tastes like a green vanilla ice cream."
      ]
    }
  },
  {
    id: "champola-parcha",
    category: "bebidas",
    name: { es: "Champola de Parcha", en: "Passion Fruit Champola (Milk Shake)" },
    active: 10, total: 10,
    servings: 4,
    ingredients: {
      es: [
        "¾ taza de pulpa de parcha colada",
        "1 lata de 12 onzas de leche evaporada fría",
        "1 taza de agua fría",
        "½ taza de azúcar",
        "½ cucharadita de vainilla",
        "2 tazas de hielo"
      ],
      en: [
        "¾ cup strained passion fruit pulp",
        "1 can (12 oz) cold evaporated milk",
        "1 cup cold water",
        "½ cup sugar",
        "½ teaspoon vanilla",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe la parcha con el agua, el azúcar y la vainilla.",
        "Con la licuadora encendida, añada la leche evaporada poco a poco.",
        "Añada el hielo y licúe hasta que esté espumosa.",
        "Pruebe y ajuste el azúcar: la parcha es muy ácida.",
        "Sirva enseguida, bien fría. Si la deja reposar mucho, la leche se puede cortar con el ácido."
      ],
      en: [
        "Blend the passion fruit with the water, sugar and vanilla.",
        "With the blender running, add the evaporated milk little by little.",
        "Add the ice and blend until frothy.",
        "Taste and adjust the sugar: passion fruit is very tart.",
        "Serve right away, very cold. If it sits too long, the acid can curdle the milk."
      ]
    }
  },
  {
    id: "te-frio-limoncillo-jengibre",
    category: "bebidas",
    name: { es: "Té Frío de Limoncillo y Jengibre", en: "Iced Lemongrass and Ginger Tea" },
    active: 15, total: 135, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "6 tallos de limoncillo machacados",
        "1 pedazo de jengibre fresco de 2 pulgadas, en lascas",
        "6 tazas de agua",
        "⅓ taza de miel",
        "2 cucharadas de jugo de limón",
        "2 tazas de hielo"
      ],
      en: [
        "6 lemongrass stalks, bruised",
        "2-inch piece fresh ginger, sliced",
        "6 cups water",
        "⅓ cup honey",
        "2 tablespoons lime juice",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el limoncillo y el jengibre 10 minutos.",
        "Apague, tape y deje reposar 10 minutos más.",
        "Cuele y añada la miel mientras está caliente, moviendo hasta disolver.",
        "Deje enfriar y refrigere al menos 2 horas.",
        "Añada el limón y sirva sobre hielo. El limoncillo se da en casi todos los patios de la isla."
      ],
      en: [
        "Boil the water with the lemongrass and ginger 10 minutes.",
        "Turn off, cover and let steep 10 more minutes.",
        "Strain and stir in the honey while hot until dissolved.",
        "Let cool and refrigerate at least 2 hours.",
        "Add the lime juice and serve over ice. Lemongrass grows in almost every backyard on the island."
      ]
    }
  },
  {
    id: "batida-fresa-guineo",
    category: "bebidas",
    name: { es: "Batida de Fresa y Guineo", en: "Strawberry Banana Shake" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "1½ tazas de fresas sin hojas",
        "1 guineo maduro",
        "1 taza de leche",
        "½ taza de yogur de vainilla",
        "1 cucharada de miel",
        "1 taza de hielo"
      ],
      en: [
        "1½ cups hulled strawberries",
        "1 ripe banana",
        "1 cup milk",
        "½ cup vanilla yogurt",
        "1 tablespoon honey",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Ponga las fresas, el guineo, la leche, el yogur y la miel en la licuadora.",
        "Licúe hasta que esté suave.",
        "Añada el hielo y licúe otra vez.",
        "Pruebe y ajuste la miel.",
        "Sirva enseguida. Con fresas y guineo congelados no necesita hielo y queda más espesa."
      ],
      en: [
        "Put the strawberries, banana, milk, yogurt and honey in the blender.",
        "Blend until smooth.",
        "Add the ice and blend again.",
        "Taste and adjust the honey.",
        "Serve right away. With frozen strawberries and banana it needs no ice and comes out thicker."
      ]
    }
  },
  {
    id: "ponche-parcha-sin-alcohol",
    category: "bebidas",
    name: { es: "Ponche de Parcha y Piña sin Alcohol (para Fiestas)", en: "Passion Fruit and Pineapple Party Punch (Alcohol-Free)" },
    active: 15, total: 15,
    servings: 12,
    ingredients: {
      es: [
        "1 taza de pulpa de parcha colada",
        "4 tazas de jugo de piña",
        "2 tazas de jugo de china",
        "½ taza de azúcar",
        "1 litro de refresco de limón (soda) frío",
        "2 tazas de piña en cubitos",
        "1 china en ruedas",
        "4 tazas de hielo"
      ],
      en: [
        "1 cup strained passion fruit pulp",
        "4 cups pineapple juice",
        "2 cups orange juice",
        "½ cup sugar",
        "1 liter cold lemon-lime soda",
        "2 cups diced pineapple",
        "1 orange, sliced",
        "4 cups ice"
      ]
    },
    steps: {
      es: [
        "En una ponchera, disuelva el azúcar en la parcha.",
        "Añada el jugo de piña y el de china, y mezcle.",
        "Añada la piña en cubitos y las ruedas de china. Refrigere hasta la hora de servir.",
        "Justo antes de servir, añada el hielo y el refresco, despacio para que no pierda las burbujas.",
        "Sirva con cucharón. Es el ponche de los cumpleaños y las graduaciones."
      ],
      en: [
        "In a punch bowl, dissolve the sugar in the passion fruit.",
        "Add the pineapple and orange juices and stir.",
        "Add the diced pineapple and orange slices. Refrigerate until serving time.",
        "Right before serving, add the ice and soda, slowly so it keeps its bubbles.",
        "Serve with a ladle. It's the punch for birthdays and graduations."
      ]
    }
  },
  {
    id: "majado-apio",
    category: "vegetales",
    name: { es: "Majado de Apio con Mantequilla y Ajo", en: "Mashed Arracacha (Apio) with Butter and Garlic" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "3 libras de apio del país pelado en trozos",
        "4 cucharadas de mantequilla",
        "3 dientes de ajo majados",
        "½ taza de leche caliente",
        "1 cucharadita de sal",
        "¼ cucharadita de pimienta"
      ],
      en: [
        "3 pounds Puerto Rican apio (arracacha), peeled and cut in chunks",
        "4 tablespoons butter",
        "3 garlic cloves, mashed",
        "½ cup hot milk",
        "1 teaspoon salt",
        "¼ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Pele el apio con un cuchillo (la cáscara es fina y amarillenta) y póngalo en agua para que no se oscurezca.",
        "Hiérvalo en agua con la mitad de la sal 15 a 20 minutos, hasta que se deshaga al pincharlo. No lo cocine de más o se pone aguado.",
        "Escurra muy bien.",
        "Derrita la mantequilla con el ajo 1 minuto, y májela con el apio, la leche, el resto de la sal y la pimienta.",
        "Sirva caliente con carne guisada o bistec encebollado. El apio tiene un sabor entre papa, zanahoria y apio de ensalada."
      ],
      en: [
        "Peel the apio with a knife (the skin is thin and yellowish) and keep it in water so it doesn't darken.",
        "Boil it in water with half the salt 15 to 20 minutes, until it falls apart when pierced. Don't overcook it or it gets watery.",
        "Drain very well.",
        "Melt the butter with the garlic 1 minute and mash it with the apio, milk, the rest of the salt and the pepper.",
        "Serve hot with carne guisada or bistec encebollado. Apio tastes like a cross of potato, carrot and celery."
      ]
    }
  },
  {
    id: "apio-escabeche",
    category: "vegetales",
    name: { es: "Apio en Escabeche", en: "Pickled Arracacha (Apio en Escabeche)" },
    active: 35, total: 515, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de apio del país pelado en ruedas de ½ pulgada",
        "1 cucharadita de sal",
        "¾ taza de aceite de oliva",
        "2 cebollas en ruedas",
        "6 dientes de ajo en lascas",
        "½ taza de vinagre",
        "10 granos de pimienta",
        "2 hojas de laurel",
        "¼ taza de aceitunas rellenas"
      ],
      en: [
        "3 pounds Puerto Rican apio (arracacha), peeled and cut into ½-inch rounds",
        "1 teaspoon salt",
        "¾ cup olive oil",
        "2 onions, sliced into rings",
        "6 garlic cloves, sliced",
        "½ cup vinegar",
        "10 black peppercorns",
        "2 bay leaves",
        "¼ cup stuffed olives"
      ]
    },
    steps: {
      es: [
        "Hierva el apio en agua con la mitad de la sal 10 a 12 minutos, hasta que esté blando pero firme. Escúrralo con cuidado.",
        "En un sartén, cocine a fuego bajo el aceite con las cebollas, el ajo, la pimienta y el laurel 10 minutos, sin que doren.",
        "Añada el vinagre, el resto de la sal y las aceitunas, y deje hervir 2 minutos.",
        "Ponga el apio en un envase de cristal y vierta el escabeche caliente por encima.",
        "Deje enfriar y refrigere toda la noche. Sírvalo frío o a temperatura ambiente, como los guineítos en escabeche."
      ],
      en: [
        "Boil the apio in water with half the salt 10 to 12 minutes, until tender but firm. Drain gently.",
        "In a skillet, cook the oil over low heat with the onions, garlic, peppercorns and bay leaves 10 minutes, without browning.",
        "Add the vinegar, the rest of the salt and the olives and boil 2 minutes.",
        "Put the apio in a glass container and pour the hot escabeche over it.",
        "Let cool and refrigerate overnight. Serve cold or at room temperature, like guineítos en escabeche."
      ]
    }
  },
  {
    id: "pastelon-apio",
    category: "vegetales",
    name: { es: "Pastelón de Apio con Picadillo de Pollo", en: "Arracacha (Apio) Pastelón with Chicken Picadillo" },
    active: 70, total: 85, wait: "reposo",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de apio del país pelado en trozos",
        "3 cucharadas de mantequilla",
        "¼ taza de leche",
        "¾ cucharadita de sal",
        "1 cucharada de aceite de oliva",
        "1 libra de pechuga de pollo molida",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "2 huevos batidos",
        "1½ tazas de queso mozzarella rallado"
      ],
      en: [
        "3 pounds Puerto Rican apio (arracacha), peeled and cut in chunks",
        "3 tablespoons butter",
        "¼ cup milk",
        "¾ teaspoon salt",
        "1 tablespoon olive oil",
        "1 pound ground chicken breast",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "¼ cup chopped stuffed olives",
        "2 eggs, beaten",
        "1½ cups shredded mozzarella cheese"
      ]
    },
    steps: {
      es: [
        "Hierva el apio en agua 15 a 20 minutos hasta que esté blando. Escúrralo y májelo con la mantequilla, la leche y la mitad de la sal. Deje entibiar y mézclelo con los huevos.",
        "Sofría el sofrito en el aceite, añada el pollo y cocine 6 minutos. Agregue la salsa de tomate, las aceitunas y el resto de la sal, y cocine 8 minutos hasta que se seque un poco.",
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Extienda la mitad del majado, cubra con el picadillo y la mitad del queso, y termine con el resto del majado y el queso.",
        "Hornee 30 minutos, hasta que dore. Deje reposar 15 minutos antes de cortar. Queda suave y un poco dulce, como un pastelón de papa más sabroso."
      ],
      en: [
        "Boil the apio in water 15 to 20 minutes until tender. Drain and mash with the butter, milk and half the salt. Let cool slightly and mix in the eggs.",
        "Sauté the sofrito in the oil, add the chicken and cook 6 minutes. Add the tomato sauce, olives and the rest of the salt and cook 8 minutes until a little dry.",
        "Heat the oven to 350 °F and grease a 9 × 13-inch dish.",
        "Spread half the mash, top with the picadillo and half the cheese, and finish with the rest of the mash and cheese.",
        "Bake 30 minutes, until golden. Let rest 15 minutes before cutting. It's soft and slightly sweet, like a tastier potato pastelón."
      ]
    }
  },
  {
    id: "bunuelos-apio-queso",
    category: "entremeses",
    name: { es: "Buñuelos de Apio con Queso", en: "Arracacha (Apio) and Cheese Fritters" },
    active: 30, total: 30,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de apio del país pelado",
        "1 huevo",
        "½ taza de queso blanco del país rallado",
        "2 cucharadas de harina de trigo",
        "1 diente de ajo majado",
        "½ cucharadita de sal",
        "Aceite para freír"
      ],
      en: [
        "1½ pounds Puerto Rican apio (arracacha), peeled",
        "1 egg",
        "½ cup grated Puerto Rican white cheese (queso blanco)",
        "2 tablespoons all-purpose flour",
        "1 garlic clove, mashed",
        "½ teaspoon salt",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Ralle el apio por el lado fino del guayo.",
        "Mézclelo con el huevo, el queso, la harina, el ajo y la sal hasta formar una masa suave.",
        "Caliente el aceite a 350 °F.",
        "Eche cucharadas de masa al aceite y fría 2 a 3 minutos por lado, hasta que estén doradas.",
        "Escurra sobre papel toalla y sirva calientes con mayo-ketchup. Son como los buñuelos de yautía, pero más suaves y un poco dulces."
      ],
      en: [
        "Grate the apio on the fine side of the grater.",
        "Mix it with the egg, cheese, flour, garlic and salt into a soft batter.",
        "Heat the oil to 350 °F.",
        "Drop spoonfuls of batter into the oil and fry 2 to 3 minutes per side, until golden.",
        "Drain on paper towels and serve hot with mayo-ketchup. They're like yautía fritters, but softer and slightly sweet."
      ]
    }
  },
  {
    id: "pan-apio",
    category: "panes",
    name: { es: "Pan de Apio", en: "Arracacha (Apio) Bread" },
    active: 65, total: 200, wait: "levado",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de apio del país hervido y majado",
        "¾ taza de leche tibia",
        "1 sobre de levadura seca (2¼ cucharaditas)",
        "3 cucharadas de azúcar",
        "3½ tazas de harina de trigo",
        "1 cucharadita de sal",
        "3 cucharadas de mantequilla blanda",
        "1 huevo",
        "1 huevo batido para barnizar"
      ],
      en: [
        "1 cup boiled and mashed Puerto Rican apio (arracacha)",
        "¾ cup lukewarm milk",
        "1 packet active dry yeast (2¼ teaspoons)",
        "3 tablespoons sugar",
        "3½ cups all-purpose flour",
        "1 teaspoon salt",
        "3 tablespoons softened butter",
        "1 egg",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en la leche tibia y deje 10 minutos.",
        "Mezcle la harina y la sal. Añada el apio majado, la levadura, la mantequilla y el huevo, y amase 10 minutos.",
        "Tape y deje levar 1 hora 15 minutos, hasta que doble.",
        "Forme 12 panecillos, póngalos en una bandeja engrasada, tape y deje levar 45 minutos.",
        "Barnice con huevo y hornee a 375 °F 20 a 22 minutos. El apio les da un color amarillito y una miga muy suave."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm milk and let sit 10 minutes.",
        "Mix the flour and salt. Add the mashed apio, yeast, butter and egg and knead 10 minutes.",
        "Cover and let rise 1 hour 15 minutes, until doubled.",
        "Shape 12 rolls, place them on a greased tray, cover and let rise 45 minutes.",
        "Brush with egg and bake at 375 °F 20 to 22 minutes. Apio gives them a pale yellow color and a very soft crumb."
      ]
    }
  },
  {
    id: "budin-apio-coco",
    category: "postres",
    name: { es: "Budín de Apio y Coco", en: "Arracacha (Apio) and Coconut Pudding" },
    active: 85, total: 145, wait: "enfriar",
    servings: 12,
    ingredients: {
      es: [
        "2 libras de apio del país pelado en trozos",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "1 taza de azúcar",
        "3 huevos",
        "4 cucharadas de mantequilla derretida",
        "½ taza de harina de trigo",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de jengibre en polvo",
        "1 pizca de sal",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 pounds Puerto Rican apio (arracacha), peeled and cut in chunks",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "1 cup sugar",
        "3 eggs",
        "4 tablespoons melted butter",
        "½ cup all-purpose flour",
        "1 teaspoon ground cinnamon",
        "½ teaspoon ground ginger",
        "1 pinch salt",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Hierva el apio en agua 15 a 20 minutos, hasta que esté blando. Escúrralo muy bien.",
        "Caliente el horno a 350 °F y engrase un molde de 9 × 13 pulgadas.",
        "Licúe el apio con las dos leches, el azúcar, los huevos, la mantequilla, la harina, las especias, la sal y la vainilla.",
        "Vierta en el molde.",
        "Hornee 55 a 60 minutos, hasta que un palillo salga limpio. Deje enfriar antes de cortar. Es como el budín de batata, de las abuelas del centro de la isla."
      ],
      en: [
        "Boil the apio in water 15 to 20 minutes, until tender. Drain very well.",
        "Heat the oven to 350 °F and grease a 9 × 13-inch pan.",
        "Blend the apio with both milks, the sugar, eggs, butter, flour, spices, salt and vanilla.",
        "Pour into the pan.",
        "Bake 55 to 60 minutes, until a toothpick comes out clean. Let cool before cutting. It's like sweet potato pudding, from the grandmothers of the island's interior."
      ]
    }
  },
  {
    id: "pure-apio-bebes",
    category: "vegetales",
    name: { es: "Puré de Apio para Bebés", en: "Arracacha (Apio) Purée for Babies" },
    active: 25, total: 25,
    servings: 6,
    ingredients: {
      es: [
        "1 libra de apio del país pelado en trozos",
        "1 zanahoria en ruedas",
        "2 tazas de agua",
        "1 cucharadita de aceite de oliva"
      ],
      en: [
        "1 pound Puerto Rican apio (arracacha), peeled and cut in chunks",
        "1 carrot, sliced",
        "2 cups water",
        "1 teaspoon olive oil"
      ]
    },
    steps: {
      es: [
        "Hierva el apio y la zanahoria en el agua, sin sal, 15 a 20 minutos, hasta que estén muy blandos. Guarde el agua.",
        "Licúe o maje con un poco del agua de hervir hasta que quede bien suave.",
        "Añada el aceite de oliva.",
        "Sirva tibio. Pruebe la temperatura antes de dárselo al bebé.",
        "Para bebés de 6 meses en adelante, cuando el pediatra lo autorice. No le ponga sal ni azúcar. Se puede congelar en porciones en una bandeja de cubitos de hielo."
      ],
      en: [
        "Boil the apio and carrot in the water, without salt, 15 to 20 minutes, until very soft. Save the water.",
        "Blend or mash with a little of the cooking water until very smooth.",
        "Add the olive oil.",
        "Serve warm. Test the temperature before feeding the baby.",
        "For babies 6 months and older, when the pediatrician approves. Don't add salt or sugar. It can be frozen in portions in an ice cube tray."
      ]
    }
  },
  // ---------- Tanda 60: más ensaladas (9) y emparedados (9) ----------
  {
    id: "ensalada-pollo-pina",
    category: "ensaladas",
    name: { es: "Ensalada de Pollo con Piña y Pasas", en: "Chicken Salad with Pineapple and Raisins" },
    active: 20, total: 80, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de pechuga de pollo cocida y desmenuzada",
        "1 taza de piña en cubitos, escurrida",
        "½ taza de apio de ensalada picadito",
        "¼ taza de cebolla roja picadita",
        "¼ taza de pasas",
        "½ taza de mayonesa",
        "¼ taza de yogur griego natural",
        "1 cucharada de jugo de limón",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta",
        "6 hojas de lechuga"
      ],
      en: [
        "3 cups shredded cooked chicken breast",
        "1 cup diced pineapple, drained",
        "½ cup finely chopped celery",
        "¼ cup finely chopped red onion",
        "¼ cup raisins",
        "½ cup mayonnaise",
        "¼ cup plain Greek yogurt",
        "1 tablespoon lime juice",
        "½ teaspoon salt",
        "¼ teaspoon pepper",
        "6 lettuce leaves"
      ]
    },
    steps: {
      es: [
        "Mezcle la mayonesa, el yogur, el limón, la sal y la pimienta.",
        "Añada el pollo, la piña, el apio, la cebolla y las pasas, y mezcle bien.",
        "Pruebe y ajuste la sal.",
        "Refrigere al menos 1 hora para que los sabores se unan.",
        "Sirva sobre las hojas de lechuga o en galletas de soda. Es la ensalada de pollo de los cumpleaños y las Navidades."
      ],
      en: [
        "Mix the mayonnaise, yogurt, lime juice, salt and pepper.",
        "Add the chicken, pineapple, celery, onion and raisins and mix well.",
        "Taste and adjust the salt.",
        "Refrigerate at least 1 hour so the flavors come together.",
        "Serve on the lettuce leaves or on soda crackers. It's the chicken salad of birthdays and Christmas."
      ]
    }
  },
  {
    id: "ensalada-yuca-mojo",
    category: "ensaladas",
    name: { es: "Ensalada de Yuca con Mojo y Cebolla", en: "Cassava Salad with Mojo and Onion" },
    active: 35, total: 65, wait: "reposo",
    servings: 6,
    ingredients: {
      es: [
        "2½ libras de yuca pelada en trozos",
        "1 cucharadita de sal",
        "⅓ taza de aceite de oliva",
        "6 dientes de ajo majados",
        "¼ taza de jugo de naranja agria o de limón",
        "1 cebolla roja en ruedas finas",
        "½ pimiento rojo en tiritas",
        "¼ taza de cilantro picado"
      ],
      en: [
        "2½ pounds cassava (yuca), peeled and cut into chunks",
        "1 teaspoon salt",
        "⅓ cup olive oil",
        "6 garlic cloves, mashed",
        "¼ cup sour orange or lime juice",
        "1 red onion, thinly sliced",
        "½ red bell pepper, in thin strips",
        "¼ cup chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con la mitad de la sal 20 a 25 minutos, hasta que esté blanda pero entera. Escúrrala, quítele la vena del centro y córtela en cubos.",
        "Caliente el aceite con el ajo a fuego bajo 2 minutos, sin que dore. Apague y añada la naranja agria y el resto de la sal.",
        "Vierta el mojo caliente sobre la yuca y mezcle con cuidado.",
        "Añada la cebolla, el pimiento y el cilantro, y deje reposar 30 minutos para que la yuca chupe el mojo.",
        "Sirva tibia o a temperatura ambiente. Acompaña bien el lechón y el pollo asado."
      ],
      en: [
        "Boil the cassava in water with half the salt 20 to 25 minutes, until tender but whole. Drain, remove the center fiber and cut into cubes.",
        "Warm the oil with the garlic over low heat 2 minutes, without browning. Turn off and add the sour orange juice and the rest of the salt.",
        "Pour the hot mojo over the cassava and toss gently.",
        "Add the onion, bell pepper and cilantro and let rest 30 minutes so the cassava soaks up the mojo.",
        "Serve warm or at room temperature. It goes well with roast pork and roast chicken."
      ]
    }
  },
  {
    id: "ensalada-cesar-pollo",
    category: "ensaladas",
    name: { es: "Ensalada César con Pollo a la Plancha", en: "Grilled Chicken Caesar Salad" },
    active: 25, total: 25,
    servings: 4,
    ingredients: {
      es: [
        "2 pechugas de pollo deshuesadas",
        "½ cucharadita de adobo",
        "1 cucharada de aceite de oliva",
        "2 lechugas romanas picadas",
        "1 taza de croutons (cubitos de pan tostado)",
        "⅓ taza de aderezo César",
        "¼ taza de queso parmesano rallado",
        "1 limón en cuñas"
      ],
      en: [
        "2 boneless chicken breasts",
        "½ teaspoon adobo",
        "1 tablespoon olive oil",
        "2 heads romaine lettuce, chopped",
        "1 cup croutons",
        "⅓ cup Caesar dressing",
        "¼ cup grated Parmesan cheese",
        "1 lime, in wedges"
      ]
    },
    steps: {
      es: [
        "Abra las pechugas en mariposa para que queden finas y sazónelas con el adobo.",
        "Cocínelas en una plancha caliente con el aceite 4 a 5 minutos por lado, hasta que lleguen a 165 °F. Deje reposar 5 minutos y córtelas en tiras.",
        "En un tazón grande, mezcle la lechuga con el aderezo.",
        "Reparta en platos y ponga el pollo, los croutons y el parmesano encima.",
        "Sirva con cuñas de limón. Con el aderezo César con queso del país de esta app queda más boricua."
      ],
      en: [
        "Butterfly the chicken breasts so they're thin and season with the adobo.",
        "Cook them on a hot griddle with the oil 4 to 5 minutes per side, until they reach 165 °F. Let rest 5 minutes and slice into strips.",
        "In a large bowl, toss the lettuce with the dressing.",
        "Divide among plates and top with the chicken, croutons and Parmesan.",
        "Serve with lime wedges. With this app's Caesar dressing with queso del país, it's more Puerto Rican."
      ]
    }
  },
  {
    id: "ensalada-maiz-aguacate",
    category: "ensaladas",
    name: { es: "Ensalada de Maíz, Aguacate y Tomate", en: "Corn, Avocado and Tomato Salad" },
    active: 15, total: 15,
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de maíz en grano (de 4 mazorcas asadas o congelado)",
        "1 aguacate del país en cubos",
        "1 taza de tomates cereza partidos a la mitad",
        "¼ de cebolla roja picadita",
        "2 ajíes dulces picaditos",
        "¼ taza de cilantro picado",
        "3 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de sal"
      ],
      en: [
        "3 cups corn kernels (from 4 grilled ears or frozen)",
        "1 Caribbean avocado, cubed",
        "1 cup cherry tomatoes, halved",
        "¼ red onion, finely chopped",
        "2 ají dulce (sweet chili peppers), finely chopped",
        "¼ cup chopped cilantro",
        "3 tablespoons lime juice",
        "2 tablespoons olive oil",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Si usa maíz congelado, dórelo en un sartén caliente sin aceite 5 minutos para que agarre sabor a asado. Deje enfriar.",
        "Bata el limón, el aceite y la sal.",
        "Mezcle el maíz, los tomates, la cebolla, los ajíes y el cilantro con el aderezo.",
        "Añada el aguacate al final y mezcle con cuidado para que no se desbarate.",
        "Sirva enseguida. Es vegana y va bien con todo lo de la parrilla."
      ],
      en: [
        "If using frozen corn, toast it in a hot dry skillet 5 minutes for a grilled flavor. Let cool.",
        "Whisk the lime juice, oil and salt.",
        "Toss the corn, tomatoes, onion, peppers and cilantro with the dressing.",
        "Add the avocado last and fold gently so it doesn't fall apart.",
        "Serve right away. It's vegan and goes with anything off the grill."
      ]
    }
  },
  {
    id: "ensalada-arroz-fria",
    category: "ensaladas",
    name: { es: "Ensalada Fría de Arroz con Vegetales y Jamón", en: "Cold Rice Salad with Vegetables and Ham" },
    active: 20, total: 80, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "4 tazas de arroz blanco cocido y frío",
        "1 taza de guisantes (petit pois) cocidos",
        "1 taza de zanahoria en cubitos, cocida",
        "½ taza de pimiento rojo picadito",
        "4 onzas de jamón de cocinar en cubitos",
        "¼ taza de aceitunas rellenas picadas",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharadita de mostaza",
        "¼ cucharadita de sal",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "4 cups cooked and cooled white rice",
        "1 cup cooked green peas",
        "1 cup diced cooked carrot",
        "½ cup finely chopped red bell pepper",
        "4 ounces cooking ham, diced",
        "¼ cup chopped stuffed olives",
        "3 tablespoons olive oil",
        "2 tablespoons vinegar",
        "1 teaspoon mustard",
        "¼ teaspoon salt",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Bata el aceite, el vinagre, la mostaza y la sal.",
        "En un tazón grande, suelte el arroz frío con un tenedor.",
        "Añada los guisantes, la zanahoria, el pimiento, el jamón y las aceitunas.",
        "Vierta el aderezo y mezcle bien. Refrigere 1 hora.",
        "Espolvoree el perejil y sirva fría. Es buena para aprovechar el arroz del día anterior y para llevar a la playa."
      ],
      en: [
        "Whisk the oil, vinegar, mustard and salt.",
        "In a large bowl, fluff the cold rice with a fork.",
        "Add the peas, carrot, bell pepper, ham and olives.",
        "Pour in the dressing and mix well. Refrigerate 1 hour.",
        "Sprinkle with the parsley and serve cold. It's a good way to use yesterday's rice and to take to the beach."
      ]
    }
  },
  {
    id: "ensalada-pasta-queso-pais",
    category: "ensaladas",
    name: { es: "Ensalada de Pasta Tricolor con Queso del País", en: "Tricolor Pasta Salad with Puerto Rican White Cheese" },
    active: 25, total: 85, wait: "frio",
    servings: 8,
    ingredients: {
      es: [
        "12 onzas de pasta tricolor de espirales (rotini)",
        "1 taza de tomates cereza partidos a la mitad",
        "1 pepino en cubitos",
        "½ pimiento verde picadito",
        "¼ taza de cebolla roja picadita",
        "6 onzas de queso blanco del país en cubitos",
        "¼ taza de aceitunas negras en ruedas",
        "⅓ taza de vinagreta criolla de ajo y orégano",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "12 ounces tricolor spiral pasta (rotini)",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "½ green bell pepper, finely chopped",
        "¼ cup finely chopped red onion",
        "6 ounces Puerto Rican white cheese (queso blanco), cubed",
        "¼ cup sliced black olives",
        "⅓ cup creole garlic-oregano vinaigrette",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Hierva la pasta en agua con sal hasta que esté al dente. Escúrrala y enjuáguela con agua fría.",
        "En un tazón grande, mezcle la pasta con los tomates, el pepino, el pimiento, la cebolla y las aceitunas.",
        "Añada la vinagreta y mezcle bien.",
        "Incorpore el queso con cuidado y refrigere 1 hora.",
        "Espolvoree el cilantro y sirva fría. Es vegetariana y aguanta bien en una nevera portátil."
      ],
      en: [
        "Boil the pasta in salted water until al dente. Drain and rinse with cold water.",
        "In a large bowl, toss the pasta with the tomatoes, cucumber, bell pepper, onion and olives.",
        "Add the vinaigrette and mix well.",
        "Fold in the cheese gently and refrigerate 1 hour.",
        "Sprinkle with the cilantro and serve cold. It's vegetarian and holds up well in a cooler."
      ]
    }
  },
  {
    id: "ensalada-jueyes",
    category: "ensaladas",
    name: { es: "Ensalada de Jueyes con Aguacate", en: "Land Crab Salad with Avocado" },
    active: 20, total: 50, wait: "frio",
    servings: 4,
    ingredients: {
      es: [
        "1 libra de carne de juey limpia",
        "¼ taza de cebolla roja picadita",
        "2 ajíes dulces picaditos",
        "¼ taza de pimiento rojo picadito",
        "2 cucharadas de cilantro picado",
        "3 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "¼ cucharadita de sal",
        "1 aguacate del país en cubos"
      ],
      en: [
        "1 pound cleaned land crab meat (or lump crab meat)",
        "¼ cup finely chopped red onion",
        "2 ají dulce (sweet chili peppers), finely chopped",
        "¼ cup finely chopped red bell pepper",
        "2 tablespoons chopped cilantro",
        "3 tablespoons lime juice",
        "2 tablespoons olive oil",
        "¼ teaspoon salt",
        "1 Caribbean avocado, cubed"
      ]
    },
    steps: {
      es: [
        "Revise la carne de juey con los dedos y saque cualquier pedacito de carapacho.",
        "Bata el limón, el aceite y la sal.",
        "Mezcle el juey con la cebolla, los ajíes, el pimiento, el cilantro y el aderezo, sin desbaratar mucho la carne.",
        "Refrigere 30 minutos.",
        "Justo antes de servir, añada el aguacate. Sirva con tostones o galletas de soda, como en los kioscos de Piñones."
      ],
      en: [
        "Check the crab meat with your fingers and remove any bits of shell.",
        "Whisk the lime juice, oil and salt.",
        "Toss the crab with the onion, peppers, bell pepper, cilantro and dressing, without breaking up the meat much.",
        "Refrigerate 30 minutes.",
        "Right before serving, add the avocado. Serve with tostones or soda crackers, like at the Piñones kiosks."
      ]
    }
  },
  {
    id: "ensalada-toronja-aguacate",
    category: "ensaladas",
    name: { es: "Ensalada de Toronja, Aguacate y Berro", en: "Grapefruit, Avocado and Watercress Salad" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "2 toronjas",
        "1 aguacate del país en lascas",
        "2 tazas de berro",
        "¼ de cebolla roja en ruedas finas",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de miel",
        "¼ cucharadita de sal",
        "2 cucharadas de nueces tostadas picadas"
      ],
      en: [
        "2 grapefruits",
        "1 Caribbean avocado, sliced",
        "2 cups watercress",
        "¼ red onion, thinly sliced",
        "2 tablespoons olive oil",
        "1 teaspoon honey",
        "¼ teaspoon salt",
        "2 tablespoons chopped toasted walnuts"
      ]
    },
    steps: {
      es: [
        "Pele las toronjas a lo vivo con un cuchillo (quitando también lo blanco) y saque los gajos entre las membranas, sobre un tazón para recoger el jugo.",
        "Bata 2 cucharadas del jugo de toronja con el aceite, la miel y la sal.",
        "Acomode el berro en una fuente y ponga encima los gajos, el aguacate y la cebolla.",
        "Rocíe el aderezo y espolvoree las nueces.",
        "Sirva enseguida. Ojo: la toronja no se debe combinar con algunos medicamentos; consulte a su médico si toma alguno."
      ],
      en: [
        "Peel the grapefruits with a knife (removing the white pith too) and cut out the segments between the membranes, over a bowl to catch the juice.",
        "Whisk 2 tablespoons of the grapefruit juice with the oil, honey and salt.",
        "Arrange the watercress on a platter and top with the segments, avocado and onion.",
        "Drizzle with the dressing and sprinkle with the walnuts.",
        "Serve right away. Note: grapefruit interacts with some medications; ask your doctor if you take any."
      ]
    }
  },
  {
    id: "ensalada-tomate-cebolla-recao",
    category: "ensaladas",
    name: { es: "Ensalada de Tomate y Cebolla con Recao", en: "Tomato and Onion Salad with Culantro" },
    active: 10, total: 25, wait: "reposo",
    servings: 4,
    ingredients: {
      es: [
        "4 tomates maduros en ruedas",
        "½ cebolla en ruedas finas",
        "4 hojas de recao picadas finas",
        "2 cucharadas de aceite de oliva",
        "1 cucharada de vinagre",
        "¼ cucharadita de sal",
        "1 pizca de pimienta"
      ],
      en: [
        "4 ripe tomatoes, sliced",
        "½ onion, thinly sliced",
        "4 culantro (recao) leaves, finely chopped",
        "2 tablespoons olive oil",
        "1 tablespoon vinegar",
        "¼ teaspoon salt",
        "1 pinch pepper"
      ]
    },
    steps: {
      es: [
        "Ponga la cebolla en agua fría 10 minutos para quitarle lo fuerte. Escúrrala.",
        "Acomode las ruedas de tomate en un plato.",
        "Ponga la cebolla y el recao encima.",
        "Bata el aceite, el vinagre, la sal y la pimienta, y rocíelo por encima. Deje reposar 5 minutos.",
        "Sirva con arroz y habichuelas o con carne frita. Es la ensalada más sencilla de la cocina boricua."
      ],
      en: [
        "Soak the onion in cold water 10 minutes to mellow it. Drain.",
        "Arrange the tomato slices on a plate.",
        "Top with the onion and culantro.",
        "Whisk the oil, vinegar, salt and pepper and drizzle over the top. Let rest 5 minutes.",
        "Serve with rice and beans or carne frita. It's the simplest salad in Puerto Rican cooking."
      ]
    }
  },
  {
    id: "sandwich-jamon-queso-prensado",
    category: "emparedados",
    name: { es: "Sándwich de Jamón y Queso Prensado en Pan Sobao", en: "Pressed Ham and Cheese Sandwich on Pan Sobao" },
    active: 15, total: 15,
    servings: 2,
    ingredients: {
      es: [
        "1 pan sobao de 8 pulgadas",
        "1 cucharada de mantequilla blanda",
        "1 cucharada de mostaza",
        "3 onzas de jamón de sándwich en lascas finas",
        "2 lascas de queso suizo",
        "2 ruedas de pepinillo"
      ],
      en: [
        "1 Puerto Rican pan sobao (8 inches)",
        "1 tablespoon softened butter",
        "1 tablespoon mustard",
        "3 ounces thinly sliced deli ham",
        "2 slices Swiss cheese",
        "2 pickle slices"
      ]
    },
    steps: {
      es: [
        "Abra el pan a lo largo y unte la mostaza por dentro.",
        "Ponga el jamón, el queso y los pepinillos, y cierre.",
        "Unte la mantequilla por fuera del pan.",
        "Prénselo en una sandwichera o en un sartén caliente con un peso encima (otro sartén), 3 a 4 minutos por lado, hasta que el pan esté crujiente y el queso se derrita.",
        "Córtelo en diagonal y sirva caliente. Es el sándwich de la panadería del barrio."
      ],
      en: [
        "Split the bread lengthwise and spread the mustard inside.",
        "Add the ham, cheese and pickles and close it.",
        "Spread the butter on the outside of the bread.",
        "Press it in a sandwich press or in a hot skillet with a weight on top (another skillet), 3 to 4 minutes per side, until the bread is crisp and the cheese melts.",
        "Cut diagonally and serve hot. It's the neighborhood bakery sandwich."
      ]
    }
  },
  {
    id: "sandwich-tortilla",
    category: "emparedados",
    name: { es: "Pan con Tortilla de Papa", en: "Spanish Potato Omelet Sandwich" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "2 papas peladas en lascas finas",
        "½ cebolla en tiritas",
        "¼ taza de aceite de oliva",
        "5 huevos",
        "½ cucharadita de sal",
        "4 pedazos de pan de agua de 6 pulgadas",
        "2 cucharadas de mayo-ajo"
      ],
      en: [
        "2 potatoes, peeled and thinly sliced",
        "½ onion, in thin strips",
        "¼ cup olive oil",
        "5 eggs",
        "½ teaspoon salt",
        "4 pieces Puerto Rican water bread, 6 inches each",
        "2 tablespoons garlic mayo"
      ]
    },
    steps: {
      es: [
        "Cocine las papas y la cebolla en el aceite a fuego medio-bajo, tapado, 12 minutos, hasta que estén blandas. Escurra el aceite y guarde 1 cucharada.",
        "Bata los huevos con la sal y mézclelos con las papas.",
        "En un sartén de 9 pulgadas con el aceite guardado, cocine la tortilla a fuego bajo 6 minutos. Voltéela con la ayuda de un plato y cocine 3 minutos más.",
        "Corte la tortilla en 4 pedazos.",
        "Abra los panes, unte el mayo-ajo y rellene con la tortilla. Es el desayuno de las cafeterías de pueblo."
      ],
      en: [
        "Cook the potatoes and onion in the oil over medium-low heat, covered, 12 minutes, until tender. Drain the oil and save 1 tablespoon.",
        "Beat the eggs with the salt and mix with the potatoes.",
        "In a 9-inch skillet with the saved oil, cook the omelet over low heat 6 minutes. Flip it using a plate and cook 3 more minutes.",
        "Cut the omelet into 4 pieces.",
        "Split the bread, spread with the garlic mayo and fill with the omelet. It's the small-town cafeteria breakfast."
      ]
    }
  },
  {
    id: "sandwich-pollo-frito",
    category: "emparedados",
    name: { es: "Sándwich de Pollo Frito con Ensalada de Repollo", en: "Fried Chicken Sandwich with Coleslaw" },
    active: 35, total: 155, wait: "adobo",
    servings: 4,
    ingredients: {
      es: [
        "4 muslos de pollo deshuesados y sin piel",
        "½ cucharadita de adobo",
        "2 dientes de ajo majados",
        "2 cucharadas de jugo de limón",
        "1 taza de harina de trigo",
        "½ cucharadita de pimentón",
        "Aceite para freír",
        "4 panecillos de hamburguesa",
        "1 taza de repollo rallado fino",
        "3 cucharadas de mayonesa",
        "1 cucharadita de vinagre",
        "4 ruedas de pepinillo"
      ],
      en: [
        "4 boneless, skinless chicken thighs",
        "½ teaspoon adobo",
        "2 garlic cloves, mashed",
        "2 tablespoons lime juice",
        "1 cup all-purpose flour",
        "½ teaspoon paprika",
        "Oil for frying",
        "4 hamburger buns",
        "1 cup finely shredded cabbage",
        "3 tablespoons mayonnaise",
        "1 teaspoon vinegar",
        "4 pickle slices"
      ]
    },
    steps: {
      es: [
        "Adobe los muslos con el adobo, el ajo y el limón, y déjelos 2 horas en la nevera.",
        "Mezcle el repollo con la mayonesa y el vinagre, y guárdelo en la nevera.",
        "Mezcle la harina con el pimentón y pase los muslos por la harina, apretando.",
        "Fríalos a 350 °F 6 a 7 minutos, volteándolos, hasta que estén dorados y lleguen a 175 °F por dentro. Escurra sobre una rejilla.",
        "Tueste los panecillos y arme los sándwiches con el pollo, los pepinillos y la ensalada de repollo. Sirva enseguida."
      ],
      en: [
        "Season the thighs with the adobo, garlic and lime juice and refrigerate 2 hours.",
        "Mix the cabbage with the mayonnaise and vinegar and refrigerate.",
        "Mix the flour with the paprika and dredge the thighs in the flour, pressing.",
        "Fry at 350 °F for 6 to 7 minutes, turning, until golden and 175 °F inside. Drain on a rack.",
        "Toast the buns and build the sandwiches with the chicken, pickles and coleslaw. Serve right away."
      ]
    }
  },
  {
    id: "sandwich-picadillo",
    category: "emparedados",
    name: { es: "Sándwich de Picadillo (Sloppy Joe Boricua)", en: "Picadillo Sandwich (Puerto Rican Sloppy Joe)" },
    active: 25, total: 25,
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de carne molida de res",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "2 cucharadas de ketchup",
        "1 cucharada de azúcar morena",
        "¼ taza de aceitunas rellenas picadas",
        "¼ cucharadita de sal",
        "6 panecillos de hamburguesa",
        "6 lascas de queso americano"
      ],
      en: [
        "1½ pounds ground beef",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "2 tablespoons ketchup",
        "1 tablespoon brown sugar",
        "¼ cup chopped stuffed olives",
        "¼ teaspoon salt",
        "6 hamburger buns",
        "6 slices American cheese"
      ]
    },
    steps: {
      es: [
        "Dore la carne en un sartén, desmenuzándola. Escurra la grasa.",
        "Añada el sofrito y cocine 3 minutos.",
        "Agregue la salsa de tomate, el ketchup, el azúcar, las aceitunas y la sal, y cocine 10 minutos a fuego bajo hasta que espese.",
        "Tueste los panecillos y ponga una lasca de queso en la tapa de abajo.",
        "Rellene con el picadillo caliente y tape. Se derrama: sírvalo con servilletas."
      ],
      en: [
        "Brown the beef in a skillet, breaking it up. Drain the fat.",
        "Add the sofrito and cook 3 minutes.",
        "Add the tomato sauce, ketchup, sugar, olives and salt and cook 10 minutes over low heat until thick.",
        "Toast the buns and put a slice of cheese on each bottom half.",
        "Fill with the hot picadillo and close. It's messy: serve with napkins."
      ]
    }
  },
  {
    id: "sandwich-salchichon-queso",
    category: "emparedados",
    name: { es: "Sándwich de Salchichón y Queso de Papa", en: "Salchichón and Gouda Sandwich" },
    active: 10, total: 10,
    servings: 3,
    ingredients: {
      es: [
        "1 pan de agua de 12 pulgadas",
        "2 cucharadas de mayonesa",
        "2 onzas de salchichón en lascas finas",
        "2 onzas de queso de papa (gouda) en lascas",
        "1 tomate en ruedas",
        "2 hojas de lechuga"
      ],
      en: [
        "1 Puerto Rican water bread (12 inches)",
        "2 tablespoons mayonnaise",
        "2 ounces salchichón (dry sausage), thinly sliced",
        "2 ounces gouda (queso de papa), sliced",
        "1 tomato, sliced",
        "2 lettuce leaves"
      ]
    },
    steps: {
      es: [
        "Corte el pan en 3 pedazos y ábralos a lo largo.",
        "Unte la mayonesa por dentro.",
        "Ponga el salchichón, el queso, el tomate y la lechuga.",
        "Cierre y, si quiere, caliéntelo en la plancha 2 minutos por lado.",
        "Sirva enseguida. Es el sándwich de la merienda de la escuela y de los viajes a la isla."
      ],
      en: [
        "Cut the bread into 3 pieces and split them lengthwise.",
        "Spread the mayonnaise inside.",
        "Add the salchichón, cheese, tomato and lettuce.",
        "Close it and, if you like, warm it on the griddle 2 minutes per side.",
        "Serve right away. It's the school-lunch and road-trip sandwich."
      ]
    }
  },
  {
    id: "sandwich-pavo-aguacate",
    category: "emparedados",
    name: { es: "Sándwich de Pavo, Aguacate y Queso Suizo", en: "Turkey, Avocado and Swiss Sandwich" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: [
        "4 rebanadas de pan integral",
        "1 aguacate del país majado",
        "1 cucharada de jugo de limón",
        "4 onzas de pechuga de pavo asada en lascas",
        "2 lascas de queso suizo",
        "1 tomate en ruedas",
        "½ taza de berro o lechuga",
        "1 pizca de sal"
      ],
      en: [
        "4 slices whole wheat bread",
        "1 Caribbean avocado, mashed",
        "1 tablespoon lime juice",
        "4 ounces sliced roast turkey breast",
        "2 slices Swiss cheese",
        "1 tomato, sliced",
        "½ cup watercress or lettuce",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Tueste el pan.",
        "Maje el aguacate con el limón y la sal.",
        "Unte el aguacate en 2 rebanadas.",
        "Ponga el pavo, el queso, el tomate y el berro, y tape con las otras rebanadas.",
        "Corte en triángulos y sirva. Con pavo asado en casa tiene mucho menos sodio que con el de paquete."
      ],
      en: [
        "Toast the bread.",
        "Mash the avocado with the lime juice and salt.",
        "Spread the avocado on 2 slices.",
        "Add the turkey, cheese, tomato and watercress and top with the other slices.",
        "Cut into triangles and serve. With home-roasted turkey it has much less sodium than with packaged deli turkey."
      ]
    }
  },
  {
    id: "jibarito-pernil",
    category: "emparedados",
    name: { es: "Jibarito de Pernil", en: "Roast Pork Jibarito (Plantain Sandwich)" },
    active: 30, total: 30,
    servings: 2,
    ingredients: {
      es: [
        "1 plátano verde grande",
        "Aceite para freír",
        "1½ tazas de pernil asado desmenuzado",
        "2 cucharadas de mojo de ajo",
        "2 lascas de queso suizo",
        "2 hojas de lechuga",
        "1 tomate en ruedas",
        "2 cucharadas de mayo-ajo"
      ],
      en: [
        "1 large green plantain",
        "Oil for frying",
        "1½ cups shredded roast pork (pernil)",
        "2 tablespoons garlic mojo",
        "2 slices Swiss cheese",
        "2 lettuce leaves",
        "1 tomato, sliced",
        "2 tablespoons garlic mayo"
      ]
    },
    steps: {
      es: [
        "Pele el plátano y córtelo a lo largo en 2 tajadas. Fríalas a 325 °F 4 minutos hasta que estén blandas.",
        "Aplástelas entre dos tablas o con un sartén hasta que queden de ¼ de pulgada, y fríalas otra vez a 375 °F hasta que estén crujientes.",
        "Caliente el pernil en un sartén con el mojo y ponga el queso encima para que se derrita.",
        "Unte el mayo-ajo en las tajadas de plátano.",
        "Arme el jibarito con el pernil, la lechuga y el tomate entre las dos tajadas. Sirva enseguida, cuando el plátano está crujiente."
      ],
      en: [
        "Peel the plantain and cut it lengthwise into 2 slabs. Fry at 325 °F for 4 minutes until tender.",
        "Flatten them between two boards or with a skillet to ¼ inch and fry again at 375 °F until crisp.",
        "Heat the pork in a skillet with the mojo and lay the cheese on top to melt.",
        "Spread the garlic mayo on the plantain slabs.",
        "Build the jibarito with the pork, lettuce and tomato between the two slabs. Serve right away, while the plantain is crisp."
      ]
    }
  },
  {
    id: "sandwich-camarones-ajillo",
    category: "emparedados",
    name: { es: "Sándwich de Camarones al Ajillo en Pan de Agua", en: "Garlic Shrimp Sandwich on Water Bread" },
    active: 20, total: 20,
    servings: 2,
    ingredients: {
      es: [
        "½ libra de camarones pelados",
        "2 cucharadas de aceite de oliva",
        "4 dientes de ajo picados",
        "1 cucharada de mantequilla",
        "1 cucharada de jugo de limón",
        "1 cucharada de perejil picado",
        "1 pizca de pimienta",
        "1 pan de agua de 12 pulgadas",
        "2 cucharadas de mayo-ajo",
        "1 taza de lechuga picada"
      ],
      en: [
        "½ pound shrimp, peeled",
        "2 tablespoons olive oil",
        "4 garlic cloves, chopped",
        "1 tablespoon butter",
        "1 tablespoon lime juice",
        "1 tablespoon chopped parsley",
        "1 pinch pepper",
        "1 Puerto Rican water bread (12 inches)",
        "2 tablespoons garlic mayo",
        "1 cup chopped lettuce"
      ]
    },
    steps: {
      es: [
        "En un sartén, dore el ajo en el aceite a fuego bajo 1 minuto.",
        "Añada los camarones y la pimienta y cocine 2 minutos por lado, hasta que estén rosados.",
        "Apague y añada la mantequilla, el limón y el perejil.",
        "Corte el pan en 2 pedazos, ábralos, tuéstelos un poco y unte el mayo-ajo.",
        "Rellene con la lechuga y los camarones con su ajillo. Sirva enseguida."
      ],
      en: [
        "In a skillet, cook the garlic in the oil over low heat 1 minute.",
        "Add the shrimp and pepper and cook 2 minutes per side, until pink.",
        "Turn off the heat and add the butter, lime juice and parsley.",
        "Cut the bread into 2 pieces, split them, toast lightly and spread with the garlic mayo.",
        "Fill with the lettuce and the shrimp with their garlic sauce. Serve right away."
      ]
    }
  },
  {
    id: "wrap-vegetales-hummus",
    category: "emparedados",
    name: { es: "Wrap de Vegetales Asados con Hummus de Recao (Vegano)", en: "Roasted Vegetable Wrap with Culantro Hummus (Vegan)" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: [
        "1 calabacín en tiras",
        "1 berenjena pequeña en tiras",
        "1 pimiento rojo en tiras",
        "½ cebolla roja en tiras",
        "2 cucharadas de aceite de oliva",
        "¼ cucharadita de sal",
        "1 cucharadita de orégano",
        "4 tortillas de harina grandes",
        "¾ taza de hummus de garbanzos con recao",
        "2 tazas de espinaca fresca"
      ],
      en: [
        "1 zucchini, cut in strips",
        "1 small eggplant, cut in strips",
        "1 red bell pepper, cut in strips",
        "½ red onion, cut in strips",
        "2 tablespoons olive oil",
        "¼ teaspoon salt",
        "1 teaspoon oregano",
        "4 large flour tortillas",
        "¾ cup culantro chickpea hummus",
        "2 cups fresh spinach"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425 °F. Mezcle los vegetales con el aceite, la sal y el orégano, y extiéndalos en una bandeja.",
        "Hornee 18 a 20 minutos, hasta que estén blandos y con orillas doradas.",
        "Caliente las tortillas en un sartén seco 20 segundos por lado.",
        "Unte el hummus en cada tortilla, ponga la espinaca y los vegetales asados.",
        "Enrolle doblando los lados hacia adentro y corte a la mitad. Es vegano y se puede llevar al trabajo."
      ],
      en: [
        "Heat the oven to 425 °F. Toss the vegetables with the oil, salt and oregano and spread them on a tray.",
        "Roast 18 to 20 minutes, until tender with golden edges.",
        "Warm the tortillas in a dry skillet 20 seconds per side.",
        "Spread the hummus on each tortilla and add the spinach and roasted vegetables.",
        "Roll up, folding in the sides, and cut in half. It's vegan and easy to take to work."
      ]
    }
  },
  // Tanda 57 (v4.49): veganas con proteína para los planes — desayunos, platos principales y meriendas.
  // Antes el plan vegano llegaba al 87 % de la proteína: de 8 desayunos veganos sólo uno pasaba de 7 g.
  {
    id: "avena-soya-mani-guineo",
    category: "cereales",
    name: { es: "Avena con Leche de Soya, Mantequilla de Maní y Guineo (Vegana)", en: "Oatmeal with Soy Milk, Peanut Butter and Banana (Vegan)" },
    active: 12, total: 12,
    servings: 2,
    ingredients: {
      es: [
        "1 taza de avena en hojuelas",
        "2 tazas de leche de soya sin azúcar",
        "1 pizca de sal",
        "½ cucharadita de canela en polvo",
        "1 cucharada de semillas de chía",
        "2 cucharadas de mantequilla de maní natural",
        "1 guineo maduro en ruedas"
      ],
      en: [
        "1 cup rolled oats",
        "2 cups unsweetened soy milk",
        "1 pinch salt",
        "½ teaspoon ground cinnamon",
        "1 tablespoon chia seeds",
        "2 tablespoons natural peanut butter",
        "1 ripe banana, sliced"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle la avena, la leche de soya, la sal y la canela.",
        "Cocine a fuego medio, moviendo, de 5 a 6 minutos, hasta que espese.",
        "Apague, añada la chía y deje reposar 2 minutos.",
        "Sirva en 2 tazones con la mantequilla de maní por encima y las ruedas de guineo.",
        "Cada tazón tiene unos 18 g de proteína: la leche de soya y el maní la ponen."
      ],
      en: [
        "In a pot, mix the oats, soy milk, salt and cinnamon.",
        "Cook over medium heat, stirring, 5 to 6 minutes, until thick.",
        "Turn off the heat, add the chia and let it rest 2 minutes.",
        "Serve in 2 bowls topped with the peanut butter and banana slices.",
        "Each bowl has about 18 g of protein: the soy milk and peanuts provide it."
      ]
    }
  },
  {
    id: "desayuno-revoltillo-tofu-garbanzos",
    category: "granos",
    name: { es: "Desayuno Criollo: Revoltillo de Tofu y Garbanzos con Sofrito (Vegano)", en: "Puerto Rican Breakfast: Tofu and Chickpea Scramble with Sofrito (Vegan)" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 paquete de 14 onzas de tofu firme, escurrido",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "1 cucharada de aceite de oliva",
        "3 cucharadas de sofrito",
        "½ pimiento rojo picadito",
        "½ cucharadita de cúrcuma",
        "1 cucharada de levadura nutricional",
        "½ cucharadita de sal",
        "2 tazas de espinaca fresca"
      ],
      en: [
        "1 package (14 ounces) firm tofu, drained",
        "1 can (15 ounces) chickpeas, drained",
        "1 tablespoon olive oil",
        "3 tablespoons sofrito",
        "½ red bell pepper, finely chopped",
        "½ teaspoon turmeric",
        "1 tablespoon nutritional yeast",
        "½ teaspoon salt",
        "2 cups fresh spinach"
      ]
    },
    steps: {
      es: [
        "Desmorone el tofu con las manos y aplaste un poco los garbanzos con un tenedor.",
        "En un sartén con el aceite, sofría el sofrito y el pimiento 2 minutos.",
        "Añada el tofu, los garbanzos, la cúrcuma, la levadura nutricional y la sal; cocine 5 minutos moviendo.",
        "Agregue la espinaca y cocine 1 minuto, hasta que se ablande.",
        "Sirva caliente. Rinde 4 porciones de unos 22 g de proteína: un desayuno criollo sin huevo."
      ],
      en: [
        "Crumble the tofu with your hands and lightly mash the chickpeas with a fork.",
        "In a skillet with the oil, sauté the sofrito and bell pepper 2 minutes.",
        "Add the tofu, chickpeas, turmeric, nutritional yeast and salt; cook 5 minutes, stirring.",
        "Add the spinach and cook 1 minute, until wilted.",
        "Serve hot. Makes 4 servings of about 22 g of protein: a Puerto Rican breakfast without eggs."
      ]
    }
  },
  {
    id: "desayuno-quinoa-coco-mango",
    category: "cereales",
    name: { es: "Desayuno de Quinoa con Leche de Soya, Mangó y Almendras (Vegano)", en: "Quinoa Breakfast Bowl with Soy Milk, Mango and Almonds (Vegan)" },
    active: 20, total: 20,
    servings: 3,
    ingredients: {
      es: [
        "1 taza de quinoa, enjuagada",
        "2 tazas de leche de soya sin azúcar",
        "½ taza de agua",
        "1 cucharadita de canela en polvo",
        "1 cucharadita de vainilla",
        "2 cucharadas de semillas de chía",
        "¼ taza de almendras picadas",
        "1 mangó en cubitos",
        "2 cucharadas de coco rallado sin azúcar"
      ],
      en: [
        "1 cup quinoa, rinsed",
        "2 cups unsweetened soy milk",
        "½ cup water",
        "1 teaspoon ground cinnamon",
        "1 teaspoon vanilla",
        "2 tablespoons chia seeds",
        "¼ cup chopped almonds",
        "1 mango, diced",
        "2 tablespoons unsweetened shredded coconut"
      ]
    },
    steps: {
      es: [
        "En una olla, hierva la quinoa con la leche de soya, el agua y la canela.",
        "Baje el fuego, tape y cocine 15 minutos, hasta que la quinoa abra y absorba el líquido.",
        "Apague y añada la vainilla y la chía.",
        "Sirva en 3 tazones con el mangó, las almendras y el coco.",
        "Se puede preparar la noche antes y comer frío. Cada tazón tiene unos 18 g de proteína."
      ],
      en: [
        "In a pot, bring the quinoa, soy milk, water and cinnamon to a boil.",
        "Lower the heat, cover and cook 15 minutes, until the quinoa opens and absorbs the liquid.",
        "Turn off the heat and add the vanilla and chia.",
        "Serve in 3 bowls with the mango, almonds and coconut.",
        "It can be made the night before and eaten cold. Each bowl has about 18 g of protein."
      ]
    }
  },
  {
    id: "pudin-chia-soya-parcha",
    category: "cereales",
    name: { es: "Pudín de Chía y Leche de Soya con Parcha y Maní (Vegano)", en: "Chia and Soy Milk Pudding with Passion Fruit and Peanuts (Vegan)" },
    active: 10, total: 250, wait: "frio",
    servings: 2,
    ingredients: {
      es: [
        "⅓ taza de semillas de chía",
        "1½ tazas de leche de soya sin azúcar",
        "1 cucharadita de vainilla",
        "1 cucharada de melao de caña",
        "2 parchas (la pulpa)",
        "2 cucharadas de maní tostado sin sal, picado"
      ],
      en: [
        "⅓ cup chia seeds",
        "1½ cups unsweetened soy milk",
        "1 teaspoon vanilla",
        "1 tablespoon sugarcane molasses",
        "2 passion fruits (the pulp)",
        "2 tablespoons unsalted roasted peanuts, chopped"
      ]
    },
    steps: {
      es: [
        "En un frasco, mezcle la chía, la leche de soya, la vainilla y el melao.",
        "Revuelva bien, espere 5 minutos y revuelva otra vez para que la chía no se pegue.",
        "Tape y refrigere por al menos 4 horas o toda la noche.",
        "Sirva en 2 vasos con la pulpa de parcha y el maní por encima.",
        "Cada vaso tiene unos 14 g de proteína y mucha fibra."
      ],
      en: [
        "In a jar, mix the chia, soy milk, vanilla and molasses.",
        "Stir well, wait 5 minutes and stir again so the chia doesn't clump.",
        "Cover and refrigerate at least 4 hours or overnight.",
        "Serve in 2 glasses topped with the passion fruit pulp and peanuts.",
        "Each glass has about 14 g of protein and plenty of fiber."
      ]
    }
  },
  {
    id: "panqueques-avena-garbanzo",
    category: "panes",
    name: { es: "Panqueques de Avena y Garbanzos con Mantequilla de Maní (Veganos)", en: "Oat and Chickpea Pancakes with Peanut Butter (Vegan)" },
    active: 25, total: 25,
    servings: 3,
    ingredients: {
      es: [
        "1 taza de avena en hojuelas",
        "1 lata de 15 onzas de garbanzos, escurridos y enjuagados",
        "1 taza de leche de soya sin azúcar",
        "1 guineo maduro",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de canela en polvo",
        "1 pizca de sal",
        "1 cucharada de aceite de coco para el sartén",
        "3 cucharadas de mantequilla de maní natural"
      ],
      en: [
        "1 cup rolled oats",
        "1 can (15 ounces) chickpeas, drained and rinsed",
        "1 cup unsweetened soy milk",
        "1 ripe banana",
        "2 teaspoons baking powder",
        "1 teaspoon ground cinnamon",
        "1 pinch salt",
        "1 tablespoon coconut oil for the skillet",
        "3 tablespoons natural peanut butter"
      ]
    },
    steps: {
      es: [
        "Muela la avena en la licuadora hasta que parezca harina.",
        "Añada los garbanzos, la leche de soya, el guineo, el polvo de hornear, la canela y la sal, y licúe hasta que quede una mezcla lisa.",
        "Caliente un sartén a fuego medio-bajo y engráselo con un poco del aceite de coco.",
        "Eche ¼ de taza de mezcla por panqueque y cocine 2 a 3 minutos por lado, hasta que estén dorados.",
        "Sirva con la mantequilla de maní por encima. Nadie nota los garbanzos, y cada porción tiene unos 17 g de proteína."
      ],
      en: [
        "Grind the oats in the blender until they look like flour.",
        "Add the chickpeas, soy milk, banana, baking powder, cinnamon and salt, and blend until smooth.",
        "Heat a skillet over medium-low heat and grease it with a little of the coconut oil.",
        "Pour ¼ cup of batter per pancake and cook 2 to 3 minutes per side, until golden.",
        "Serve topped with the peanut butter. Nobody notices the chickpeas, and each serving has about 17 g of protein."
      ]
    }
  },
  {
    id: "avena-salada-tofu-sofrito",
    category: "cereales",
    name: { es: "Avena Salada con Tofu, Espinaca y Sofrito (Vegana)", en: "Savory Oatmeal with Tofu, Spinach and Sofrito (Vegan)" },
    active: 15, total: 15,
    servings: 2,
    ingredients: {
      es: [
        "1 cucharadita de aceite de oliva",
        "2 cucharadas de sofrito",
        "7 onzas de tofu firme, desmoronado",
        "¾ taza de avena en hojuelas",
        "1½ tazas de caldo de vegetales bajo en sodio",
        "1 taza de espinaca fresca",
        "1 cucharada de levadura nutricional",
        "¼ de aguacate en lascas",
        "1 cucharada de semillas de ajonjolí tostado"
      ],
      en: [
        "1 teaspoon olive oil",
        "2 tablespoons sofrito",
        "7 ounces firm tofu, crumbled",
        "¾ cup rolled oats",
        "1½ cups low-sodium vegetable broth",
        "1 cup fresh spinach",
        "1 tablespoon nutritional yeast",
        "¼ avocado, sliced",
        "1 tablespoon toasted sesame seeds"
      ]
    },
    steps: {
      es: [
        "En una olla con el aceite, sofría el sofrito 1 minuto.",
        "Añada el tofu y dórelo 3 minutos.",
        "Agregue la avena y el caldo, y cocine a fuego medio 5 minutos, moviendo, hasta que espese.",
        "Añada la espinaca y la levadura nutricional y cocine 1 minuto más.",
        "Sirva con el aguacate y el ajonjolí por encima. Es un desayuno salado de unos 20 g de proteína por tazón."
      ],
      en: [
        "In a pot with the oil, sauté the sofrito 1 minute.",
        "Add the tofu and brown it 3 minutes.",
        "Add the oats and broth and cook over medium heat 5 minutes, stirring, until thick.",
        "Add the spinach and nutritional yeast and cook 1 more minute.",
        "Serve topped with the avocado and sesame seeds. It's a savory breakfast with about 20 g of protein per bowl."
      ]
    }
  },
  {
    id: "arroz-habichuelas-tofu-guisado",
    category: "arroces",
    name: { es: "Arroz con Habichuelas y Tofu Guisado a la Criolla (Vegano)", en: "Rice and Beans with Creole Stewed Tofu (Vegan)" },
    active: 40, total: 40,
    servings: 4,
    ingredients: {
      es: [
        "1 paquete de 14 onzas de tofu firme, en cubos",
        "2 cucharadas de aceite de oliva",
        "4 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 lata de 8 onzas de salsa de tomate",
        "1 lata de 15 onzas de habichuelas rosadas, con su líquido",
        "1 taza de calabaza en cubos",
        "½ taza de agua",
        "2 tazas de arroz cocido"
      ],
      en: [
        "1 package (14 ounces) firm tofu, cubed",
        "2 tablespoons olive oil",
        "4 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 can (8 ounces) tomato sauce",
        "1 can (15 ounces) pink beans, with their liquid",
        "1 cup cubed pumpkin",
        "½ cup water",
        "2 cups cooked rice"
      ]
    },
    steps: {
      es: [
        "Seque el tofu con papel toalla. Dórelo en un caldero con 1 cucharada de aceite, 8 minutos, volteándolo.",
        "Sáquelo y, en el mismo caldero con el resto del aceite, sofría el sofrito y el sazón 2 minutos.",
        "Añada la salsa de tomate, las habichuelas, la calabaza y el agua; hierva y cocine tapado 15 minutos.",
        "Devuelva el tofu y cocine 5 minutos más, hasta que la salsa espese y la calabaza se deshaga un poco.",
        "Sirva sobre el arroz. Cada plato tiene unos 25 g de proteína: tofu y habichuelas juntos."
      ],
      en: [
        "Pat the tofu dry with paper towels. Brown it in a caldero with 1 tablespoon of oil, 8 minutes, turning.",
        "Remove it and, in the same caldero with the rest of the oil, sauté the sofrito and sazón 2 minutes.",
        "Add the tomato sauce, beans, pumpkin and water; bring to a boil and cook covered 15 minutes.",
        "Return the tofu and cook 5 more minutes, until the sauce thickens and the pumpkin breaks down a little.",
        "Serve over the rice. Each plate has about 25 g of protein: tofu and beans together."
      ]
    }
  },
  {
    id: "picadillo-lentejas-tofu-arroz",
    category: "granos",
    name: { es: "Picadillo de Lentejas y Tofu con Arroz y Maduros (Vegano)", en: "Lentil and Tofu Picadillo with Rice and Sweet Plantains (Vegan)" },
    active: 45, total: 45,
    servings: 4,
    ingredients: {
      es: [
        "1 taza de lentejas secas, enjuagadas",
        "3 tazas de agua",
        "7 onzas de tofu firme, desmoronado",
        "1 cucharada de aceite de oliva",
        "4 cucharadas de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "10 aceitunas rellenas, picadas",
        "1 cucharadita de comino",
        "½ cucharadita de sal",
        "2 tazas de arroz cocido",
        "1 plátano maduro en tajadas, horneado"
      ],
      en: [
        "1 cup dried lentils, rinsed",
        "3 cups water",
        "7 ounces firm tofu, crumbled",
        "1 tablespoon olive oil",
        "4 tablespoons sofrito",
        "1 can (8 ounces) tomato sauce",
        "10 stuffed olives, chopped",
        "1 teaspoon cumin",
        "½ teaspoon salt",
        "2 cups cooked rice",
        "1 ripe plantain, sliced and baked"
      ]
    },
    steps: {
      es: [
        "Hierva las lentejas en el agua 20 minutos, hasta que estén blandas pero enteras; escúrralas.",
        "En un sartén con el aceite, dore el tofu desmoronado 5 minutos.",
        "Añada el sofrito, la salsa de tomate, las aceitunas, el comino y la sal, y cocine 3 minutos.",
        "Agregue las lentejas y cocine 5 minutos más, hasta que parezca picadillo.",
        "Sirva con el arroz y las tajadas de maduro horneadas (20 minutos a 400 °F). Unos 24 g de proteína por plato."
      ],
      en: [
        "Boil the lentils in the water 20 minutes, until tender but whole; drain.",
        "In a skillet with the oil, brown the crumbled tofu 5 minutes.",
        "Add the sofrito, tomato sauce, olives, cumin and salt and cook 3 minutes.",
        "Add the lentils and cook 5 more minutes, until it looks like picadillo.",
        "Serve with the rice and the baked plantain slices (20 minutes at 400 °F). About 24 g of protein per plate."
      ]
    }
  },
  {
    id: "chili-habichuelas-quinoa-tostones",
    category: "granos",
    name: { es: "Chili Boricua de Habichuelas y Quinoa con Tostones (Vegano)", en: "Puerto Rican Bean and Quinoa Chili with Tostones (Vegan)" },
    active: 45, total: 45,
    servings: 5,
    ingredients: {
      es: [
        "1 cucharada de aceite de oliva",
        "1 cebolla picada",
        "4 cucharadas de sofrito",
        "1 lata de 15 onzas de habichuelas negras, escurridas",
        "1 lata de 15 onzas de habichuelas coloradas, escurridas",
        "1 lata de 15 onzas de gandules, escurridos",
        "½ taza de quinoa, enjuagada",
        "1 lata de 14 onzas de tomates picados",
        "2 tazas de caldo de vegetales bajo en sodio",
        "2 cucharaditas de comino",
        "1 cucharadita de orégano",
        "2 plátanos verdes",
        "Aceite vegetal para freír"
      ],
      en: [
        "1 tablespoon olive oil",
        "1 onion, chopped",
        "4 tablespoons sofrito",
        "1 can (15 ounces) black beans, drained",
        "1 can (15 ounces) red kidney beans, drained",
        "1 can (15 ounces) pigeon peas, drained",
        "½ cup quinoa, rinsed",
        "1 can (14 ounces) diced tomatoes",
        "2 cups low-sodium vegetable broth",
        "2 teaspoons cumin",
        "1 teaspoon oregano",
        "2 green plantains",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "En una olla con el aceite, sofría la cebolla y el sofrito 4 minutos.",
        "Añada las habichuelas, los gandules, la quinoa, los tomates, el caldo, el comino y el orégano.",
        "Hierva, baje el fuego y cocine destapado 25 minutos, moviendo a veces, hasta que espese.",
        "Mientras, haga tostones con los plátanos: fríalos en ruedas 4 minutos, aplástelos y fríalos otra vez 2 minutos.",
        "Sirva el chili con los tostones al lado. Unos 22 g de proteína por plato, sin carne."
      ],
      en: [
        "In a pot with the oil, sauté the onion and sofrito 4 minutes.",
        "Add the beans, pigeon peas, quinoa, tomatoes, broth, cumin and oregano.",
        "Bring to a boil, lower the heat and cook uncovered 25 minutes, stirring now and then, until thick.",
        "Meanwhile, make tostones with the plantains: fry the slices 4 minutes, flatten them and fry again 2 minutes.",
        "Serve the chili with the tostones on the side. About 22 g of protein per plate, without meat."
      ]
    }
  },
  {
    id: "tofu-mojo-isleno-gandules",
    category: "vegetales",
    name: { es: "Tofu al Horno en Mojo Isleño con Gandules y Batata (Vegano)", en: "Baked Tofu in Mojo Isleño with Pigeon Peas and Sweet Potato (Vegan)" },
    active: 40, total: 55,
    wait: "adobo",
    servings: 4,
    ingredients: {
      es: [
        "1 paquete de 14 onzas de tofu extra firme, en lascas gruesas",
        "1 cucharadita de adobo sin sal",
        "2 cucharadas de aceite de oliva",
        "1 cebolla en ruedas",
        "1 pimiento rojo en tiras",
        "1 lata de 8 onzas de salsa de tomate",
        "10 aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 cucharada de vinagre",
        "1 lata de 15 onzas de gandules, escurridos",
        "1 batata grande en cubos"
      ],
      en: [
        "1 package (14 ounces) extra-firm tofu, cut in thick slices",
        "1 teaspoon salt-free adobo",
        "2 tablespoons olive oil",
        "1 onion, cut in rings",
        "1 red bell pepper, cut in strips",
        "1 can (8 ounces) tomato sauce",
        "10 stuffed olives",
        "1 tablespoon capers",
        "1 tablespoon vinegar",
        "1 can (15 ounces) pigeon peas, drained",
        "1 large sweet potato, cubed"
      ]
    },
    steps: {
      es: [
        "Seque el tofu, sazónelo con el adobo y déjelo reposar 15 minutos.",
        "Caliente el horno a 400 °F. Hornee el tofu y la batata en una bandeja con 1 cucharada de aceite, 25 minutos, volteándolos a la mitad.",
        "Mientras, haga el mojo isleño: sofría la cebolla y el pimiento en el resto del aceite 5 minutos.",
        "Añada la salsa de tomate, las aceitunas, las alcaparras, el vinagre y los gandules; cocine 8 minutos.",
        "Ponga el tofu y la batata en una fuente y cúbralos con el mojo. Unos 21 g de proteína por plato; la receta del mojo isleño de Salinas, sin pescado."
      ],
      en: [
        "Pat the tofu dry, season it with the adobo and let it rest 15 minutes.",
        "Heat the oven to 400 °F. Bake the tofu and sweet potato on a tray with 1 tablespoon of oil, 25 minutes, turning halfway.",
        "Meanwhile, make the mojo isleño: sauté the onion and bell pepper in the rest of the oil 5 minutes.",
        "Add the tomato sauce, olives, capers, vinegar and pigeon peas; cook 8 minutes.",
        "Arrange the tofu and sweet potato on a platter and cover with the mojo. About 21 g of protein per plate; Salinas-style mojo isleño, without fish."
      ]
    }
  },
  {
    id: "asopao-garbanzos-tofu",
    category: "sopas",
    name: { es: "Asopao de Garbanzos y Tofu con Recao (Vegano)", en: "Chickpea and Tofu Asopao with Culantro (Vegan)" },
    active: 40, total: 40,
    servings: 5,
    ingredients: {
      es: [
        "2 cucharadas de aceite de oliva",
        "4 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 taza de arroz de grano mediano",
        "6 tazas de caldo de vegetales bajo en sodio",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "1 paquete de 14 onzas de tofu firme, en cubos",
        "½ taza de salsa de tomate",
        "1 taza de calabaza en cubos",
        "4 hojas de recao picadas",
        "10 aceitunas rellenas"
      ],
      en: [
        "2 tablespoons olive oil",
        "4 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 cup medium-grain rice",
        "6 cups low-sodium vegetable broth",
        "1 can (15 ounces) chickpeas, drained",
        "1 package (14 ounces) firm tofu, cubed",
        "½ cup tomato sauce",
        "1 cup cubed pumpkin",
        "4 culantro leaves, chopped",
        "10 stuffed olives"
      ]
    },
    steps: {
      es: [
        "En un caldero con el aceite, sofría el sofrito y el sazón 2 minutos.",
        "Añada el arroz y muévalo 1 minuto para que coja el color.",
        "Agregue el caldo, los garbanzos, la salsa de tomate y la calabaza; hierva y cocine tapado 15 minutos.",
        "Añada el tofu y las aceitunas y cocine 5 minutos más, hasta que el arroz esté blando y el caldo espeso.",
        "Apague, eche el recao y sirva enseguida, que el asopao sigue espesando. Unos 20 g de proteína por plato."
      ],
      en: [
        "In a caldero with the oil, sauté the sofrito and sazón 2 minutes.",
        "Add the rice and stir 1 minute so it takes on the color.",
        "Add the broth, chickpeas, tomato sauce and pumpkin; bring to a boil and cook covered 15 minutes.",
        "Add the tofu and olives and cook 5 more minutes, until the rice is tender and the broth thick.",
        "Turn off the heat, add the culantro and serve right away, since asopao keeps thickening. About 20 g of protein per plate."
      ]
    }
  },
  {
    id: "pastelon-amarillos-lentejas-tofu",
    category: "vegetales",
    name: { es: "Pastelón de Amarillos con Picadillo de Lentejas y Tofu (Vegano)", en: "Sweet Plantain Pastelón with Lentil and Tofu Picadillo (Vegan)" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: [
        "4 plátanos maduros, en tajadas a lo largo",
        "2 cucharadas de aceite de oliva",
        "1 taza de lentejas secas, cocidas y escurridas",
        "1 paquete de 14 onzas de tofu firme, desmoronado",
        "4 cucharadas de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "10 aceitunas rellenas, picadas",
        "1 cucharadita de comino",
        "½ cucharadita de sal",
        "1 taza de habichuelas tiernas picadas",
        "2 cucharadas de levadura nutricional"
      ],
      en: [
        "4 ripe plantains, sliced lengthwise",
        "2 tablespoons olive oil",
        "1 cup dried lentils, cooked and drained",
        "1 package (14 ounces) firm tofu, crumbled",
        "4 tablespoons sofrito",
        "1 can (8 ounces) tomato sauce",
        "10 stuffed olives, chopped",
        "1 teaspoon cumin",
        "½ teaspoon salt",
        "1 cup chopped green beans",
        "2 tablespoons nutritional yeast"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F. Barnice las tajadas de amarillo con 1 cucharada de aceite y hornéelas 15 minutos.",
        "En un sartén con el resto del aceite, dore el tofu 5 minutos; añada el sofrito, la salsa de tomate, las aceitunas, el comino y la sal.",
        "Agregue las lentejas y las habichuelas tiernas, y cocine 8 minutos.",
        "En un molde, ponga capas de amarillo y picadillo, y termine con amarillo y la levadura nutricional por encima.",
        "Baje el horno a 375 °F y hornee 25 minutos. Deje reposar 10 minutos antes de cortar. Unos 18 g de proteína por pedazo."
      ],
      en: [
        "Heat the oven to 400 °F. Brush the plantain slices with 1 tablespoon of oil and bake 15 minutes.",
        "In a skillet with the rest of the oil, brown the tofu 5 minutes; add the sofrito, tomato sauce, olives, cumin and salt.",
        "Add the lentils and green beans and cook 8 minutes.",
        "In a baking dish, layer plantain and picadillo, and finish with plantain and the nutritional yeast on top.",
        "Lower the oven to 375 °F and bake 25 minutes. Let rest 10 minutes before cutting. About 18 g of protein per piece."
      ]
    }
  },
  {
    id: "garbanzos-crujientes-adobo-limon",
    category: "entremeses",
    name: { es: "Garbanzos Crujientes al Horno con Adobo y Limón (Veganos)", en: "Crunchy Baked Chickpeas with Adobo and Lime (Vegan)" },
    active: 45, total: 45,
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 15 onzas de garbanzos, escurridos y enjuagados",
        "1 cucharada de aceite de oliva",
        "1 cucharadita de adobo sin sal",
        "½ cucharadita de pimentón",
        "¼ cucharadita de sal",
        "1 limón (la ralladura)"
      ],
      en: [
        "2 cans (15 ounces each) chickpeas, drained and rinsed",
        "1 tablespoon olive oil",
        "1 teaspoon salt-free adobo",
        "½ teaspoon paprika",
        "¼ teaspoon salt",
        "1 lime (the zest)"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F. Seque muy bien los garbanzos con papel toalla y quíteles los pellejitos sueltos.",
        "Extiéndalos en una bandeja y hornéelos solos 15 minutos para que se sequen.",
        "Sáquelos, mézclelos con el aceite, el adobo, el pimentón y la sal.",
        "Hornee 20 a 25 minutos más, moviendo la bandeja a la mitad, hasta que suenen crujientes.",
        "Échele la ralladura de limón y deje enfriar: se ponen más crujientes. Unos 11 g de proteína por porción, para picar."
      ],
      en: [
        "Heat the oven to 400 °F. Dry the chickpeas very well with paper towels and remove any loose skins.",
        "Spread them on a tray and bake them plain 15 minutes so they dry out.",
        "Take them out and toss with the oil, adobo, paprika and salt.",
        "Bake 20 to 25 more minutes, shaking the tray halfway, until they sound crunchy.",
        "Add the lime zest and let cool: they get crunchier. About 11 g of protein per serving, for snacking."
      ]
    }
  },
  {
    id: "batida-soya-mani-guineo",
    category: "bebidas",
    name: { es: "Batida de Leche de Soya, Guineo y Maní (Vegana)", en: "Soy Milk, Banana and Peanut Shake (Vegan)" },
    active: 5, total: 5,
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de leche de soya sin azúcar",
        "2 guineos maduros congelados, en pedazos",
        "2 cucharadas de mantequilla de maní natural",
        "2 cucharadas de avena en hojuelas",
        "½ cucharadita de canela en polvo",
        "Hielo al gusto"
      ],
      en: [
        "2 cups unsweetened soy milk",
        "2 ripe bananas, frozen, in pieces",
        "2 tablespoons natural peanut butter",
        "2 tablespoons rolled oats",
        "½ teaspoon ground cinnamon",
        "Ice to taste"
      ]
    },
    steps: {
      es: [
        "Ponga todo en la licuadora.",
        "Licúe a velocidad alta 1 minuto, hasta que quede cremosa.",
        "Si la quiere más espesa, añada otro pedazo de guineo congelado.",
        "Sirva enseguida en 2 vasos.",
        "Cada vaso tiene unos 14 g de proteína: buena merienda después de hacer ejercicio."
      ],
      en: [
        "Put everything in the blender.",
        "Blend on high 1 minute, until creamy.",
        "For a thicker shake, add another piece of frozen banana.",
        "Serve right away in 2 glasses.",
        "Each glass has about 14 g of protein: a good snack after exercise."
      ]
    }
  },
  {
    id: "hummus-gandules-vegetales",
    category: "entremeses",
    name: { es: "Hummus de Gandules con Palitos de Vegetales (Vegano)", en: "Pigeon Pea Hummus with Vegetable Sticks (Vegan)" },
    active: 15, total: 15,
    servings: 4,
    ingredients: {
      es: [
        "1 lata de 15 onzas de gandules, escurridos",
        "2 cucharadas de ajonjolí tostado",
        "2 cucharadas de aceite de oliva",
        "1 diente de ajo",
        "1 limón (el jugo)",
        "2 hojas de recao",
        "¼ cucharadita de comino",
        "3 cucharadas de agua fría",
        "2 zanahorias en palitos",
        "1 pepino en palitos",
        "1 pimiento rojo en tiras"
      ],
      en: [
        "1 can (15 ounces) pigeon peas, drained",
        "2 tablespoons toasted sesame seeds",
        "2 tablespoons olive oil",
        "1 garlic clove",
        "1 lime (the juice)",
        "2 culantro leaves",
        "¼ teaspoon cumin",
        "3 tablespoons cold water",
        "2 carrots, cut in sticks",
        "1 cucumber, cut in sticks",
        "1 red bell pepper, cut in strips"
      ]
    },
    steps: {
      es: [
        "Muela el ajonjolí en el procesador hasta que suelte su aceite y parezca una pasta.",
        "Añada los gandules, el aceite, el ajo, el jugo de limón, el recao y el comino.",
        "Procese 2 minutos, añadiendo el agua fría poco a poco, hasta que quede bien cremoso.",
        "Sirva en un tazón con un chorrito de aceite por encima.",
        "Acompañe con los palitos de zanahoria, pepino y pimiento para mojar. El hummus boricua, con gandules."
      ],
      en: [
        "Grind the sesame seeds in the food processor until they release their oil and look like a paste.",
        "Add the pigeon peas, oil, garlic, lime juice, culantro and cumin.",
        "Process 2 minutes, adding the cold water little by little, until very creamy.",
        "Serve in a bowl with a drizzle of oil on top.",
        "Serve with the carrot, cucumber and bell pepper sticks for dipping. Puerto Rican hummus, with pigeon peas."
      ]
    }
  },
  {
    id: "bolitas-guineo-avena-mani",
    category: "frutas",
    name: { es: "Bolitas Energéticas de Guineo y Maní sin Horno (Veganas)", en: "No-Bake Banana and Peanut Energy Bites (Vegan)" },
    active: 15, total: 45, wait: "frio",
    servings: 6,
    ingredients: {
      es: [
        "2 guineos maduros majados",
        "1½ tazas de avena en hojuelas",
        "½ taza de mantequilla de maní natural",
        "2 cucharadas de semillas de chía",
        "¼ taza de maní tostado sin sal, picado",
        "1 cucharadita de canela en polvo",
        "2 cucharadas de coco rallado sin azúcar"
      ],
      en: [
        "2 ripe bananas, mashed",
        "1½ cups rolled oats",
        "½ cup natural peanut butter",
        "2 tablespoons chia seeds",
        "¼ cup unsalted roasted peanuts, chopped",
        "1 teaspoon ground cinnamon",
        "2 tablespoons unsweetened shredded coconut"
      ]
    },
    steps: {
      es: [
        "En un tazón, mezcle el guineo majado con la mantequilla de maní hasta que quede parejo.",
        "Añada la avena, la chía, el maní y la canela, y mezcle bien.",
        "Refrigere la mezcla 15 minutos para que sea más fácil de formar.",
        "Forme 18 bolitas con las manos mojadas y páselas por el coco rallado.",
        "Refrigere 15 minutos más. Se guardan 5 días en la nevera; 3 bolitas tienen unos 10 g de proteína."
      ],
      en: [
        "In a bowl, mix the mashed banana with the peanut butter until even.",
        "Add the oats, chia, peanuts and cinnamon and mix well.",
        "Refrigerate the mixture 15 minutes so it's easier to shape.",
        "Shape 18 balls with wet hands and roll them in the shredded coconut.",
        "Refrigerate 15 more minutes. They keep 5 days in the fridge; 3 bites have about 10 g of protein."
      ]
    }
  },
  // Tanda 58 (v4.50): batidas de frutas y vegetales (vegetarianas) y champolas tradicionales.
  {
    id: "batida-guayaba-leche",
    category: "bebidas",
    name: { es: "Batida de Guayaba con Leche", en: "Guava Milkshake" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: ["2 tazas de guayaba madura en pedazos", "1 taza de agua", "1½ tazas de leche fría", "2 cucharadas de azúcar", "½ cucharadita de vainilla", "Hielo al gusto"],
      en: ["2 cups ripe guava, in pieces", "1 cup water", "1½ cups cold milk", "2 tablespoons sugar", "½ teaspoon vanilla", "Ice to taste"]
    },
    steps: {
      es: ["Licúe la guayaba con el agua 1 minuto.", "Cuele para sacar las semillas, apretando la pulpa con una cuchara.", "Vuelva a la licuadora con la leche, el azúcar, la vainilla y el hielo, y licúe 30 segundos.", "Sirva enseguida, bien fría. Una guayaba tiene más vitamina C que una china."],
      en: ["Blend the guava with the water 1 minute.", "Strain to remove the seeds, pressing the pulp with a spoon.", "Return to the blender with the milk, sugar, vanilla and ice and blend 30 seconds.", "Serve right away, well chilled. A guava has more vitamin C than an orange."]
    }
  },
  {
    id: "batida-carambola-china",
    category: "bebidas",
    name: { es: "Batida de Carambola y China", en: "Star Fruit and Orange Smoothie" },
    active: 8, total: 8,
    servings: 2,
    ingredients: {
      es: ["2 carambolas maduras en pedazos", "1 taza de jugo de china fresco", "1 guineo maduro", "½ taza de yogur natural", "Hielo al gusto"],
      en: ["2 ripe star fruits, in pieces", "1 cup fresh orange juice", "1 ripe banana", "½ cup plain yogurt", "Ice to taste"]
    },
    steps: {
      es: ["Corte una rueda de carambola para adornar y reserve.", "Licúe el resto de la carambola con el jugo de china, el guineo, el yogur y el hielo, 1 minuto.", "Sirva en 2 vasos con la estrellita de carambola en el borde.", "Si tiene enfermedad de los riñones, evite la carambola: consulte a su médico."],
      en: ["Cut one star fruit slice for garnish and set aside.", "Blend the rest of the star fruit with the orange juice, banana, yogurt and ice, 1 minute.", "Serve in 2 glasses with the star fruit slice on the rim.", "If you have kidney disease, avoid star fruit: check with your doctor."]
    }
  },
  {
    id: "batida-melon-leche",
    category: "bebidas",
    name: { es: "Batida de Melón con Leche y Canela", en: "Cantaloupe Milkshake with Cinnamon" },
    active: 8, total: 8,
    servings: 2,
    ingredients: {
      es: ["3 tazas de melón (cantalupo) en pedazos, frío", "1 taza de leche fría", "1 cucharada de azúcar", "¼ cucharadita de canela en polvo", "Hielo al gusto"],
      en: ["3 cups cantaloupe, in pieces, chilled", "1 cup cold milk", "1 tablespoon sugar", "¼ teaspoon ground cinnamon", "Ice to taste"]
    },
    steps: {
      es: ["Ponga el melón, la leche, el azúcar y el hielo en la licuadora.", "Licúe 1 minuto, hasta que quede espumosa.", "Sirva en 2 vasos con una pizca de canela por encima.", "Tómela enseguida: el melón con leche se separa si espera."],
      en: ["Put the cantaloupe, milk, sugar and ice in the blender.", "Blend 1 minute, until frothy.", "Serve in 2 glasses with a pinch of cinnamon on top.", "Drink it right away: cantaloupe and milk separate if left to stand."]
    }
  },
  {
    id: "batida-sandia-fresa",
    category: "bebidas",
    name: { es: "Batida de Sandía y Fresa con Yerbabuena", en: "Watermelon and Strawberry Smoothie with Mint" },
    active: 8, total: 8,
    servings: 3,
    ingredients: {
      es: ["4 tazas de sandía sin semillas, en pedazos", "1 taza de fresas congeladas", "1 limón verde (el jugo)", "6 hojas de yerbabuena", "1 cucharadita de miel, o al gusto"],
      en: ["4 cups seedless watermelon, in pieces", "1 cup frozen strawberries", "1 lime (the juice)", "6 mint leaves", "1 teaspoon honey, or to taste"]
    },
    steps: {
      es: ["Licúe la sandía sola 30 segundos.", "Añada las fresas, el jugo de limón, la yerbabuena y la miel.", "Licúe 1 minuto más: las fresas congeladas la ponen fría y espesa sin hielo.", "Sirva con una hojita de yerbabuena. Es ligera y refrescante para el calor de la isla."],
      en: ["Blend the watermelon alone 30 seconds.", "Add the strawberries, lime juice, mint and honey.", "Blend 1 more minute: the frozen strawberries make it cold and thick without ice.", "Serve with a mint leaf. It's light and refreshing for island heat."]
    }
  },
  {
    id: "batida-china-zanahoria",
    category: "bebidas",
    name: { es: "Batida Mañanera de China, Zanahoria y Jengibre", en: "Morning Orange, Carrot and Ginger Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: ["1½ tazas de jugo de china fresco", "2 zanahorias peladas, en ruedas", "1 mangó maduro en pedazos", "1 cucharadita de jengibre fresco rallado", "½ taza de yogur natural", "Hielo al gusto"],
      en: ["1½ cups fresh orange juice", "2 carrots, peeled and sliced", "1 ripe mango, in pieces", "1 teaspoon fresh grated ginger", "½ cup plain yogurt", "Ice to taste"]
    },
    steps: {
      es: ["Licúe las zanahorias con el jugo de china 1 minuto, hasta que estén bien deshechas.", "Añada el mangó, el jengibre, el yogur y el hielo.", "Licúe 1 minuto más, hasta que quede cremosa.", "Sirva en el desayuno: tiene vitamina A de la zanahoria y el mangó, y vitamina C de la china."],
      en: ["Blend the carrots with the orange juice 1 minute, until well broken down.", "Add the mango, ginger, yogurt and ice.", "Blend 1 more minute, until creamy.", "Serve at breakfast: it has vitamin A from the carrot and mango, and vitamin C from the orange."]
    }
  },
  {
    id: "batida-calabaza-canela",
    category: "bebidas",
    name: { es: "Batida de Calabaza con Canela y Guineo", en: "Pumpkin Smoothie with Cinnamon and Banana" },
    active: 25, total: 55, wait: "enfriar",
    servings: 2,
    ingredients: {
      es: ["1½ tazas de calabaza en cubos", "1 guineo maduro congelado", "1½ tazas de leche fría", "1 cucharada de melao de caña", "½ cucharadita de canela en polvo", "1 pizca de nuez moscada"],
      en: ["1½ cups cubed pumpkin", "1 ripe banana, frozen", "1½ cups cold milk", "1 tablespoon sugarcane molasses", "½ teaspoon ground cinnamon", "1 pinch nutmeg"]
    },
    steps: {
      es: ["Hierva la calabaza en agua 15 minutos, hasta que esté blanda; escúrrala.", "Déjela enfriar en la nevera al menos 30 minutos (o use calabaza cocida del día antes).", "Licúe la calabaza con el guineo, la leche, el melao, la canela y la nuez moscada, 1 minuto.", "Sirva fría con canela por encima. Sabe a tembleque de calabaza en vaso."],
      en: ["Boil the pumpkin in water 15 minutes, until tender; drain.", "Let it cool in the fridge at least 30 minutes (or use pumpkin cooked the day before).", "Blend the pumpkin with the banana, milk, molasses, cinnamon and nutmeg, 1 minute.", "Serve cold with cinnamon on top. It tastes like pumpkin tembleque in a glass."]
    }
  },
  {
    id: "batida-remolacha-fresa",
    category: "bebidas",
    name: { es: "Batida de Remolacha, Fresa y China", en: "Beet, Strawberry and Orange Smoothie" },
    active: 8, total: 8,
    servings: 2,
    ingredients: {
      es: ["1 remolacha pequeña cocida, pelada y en pedazos", "1 taza de fresas congeladas", "1 taza de jugo de china fresco", "½ taza de yogur natural", "1 cucharadita de miel, o al gusto"],
      en: ["1 small cooked beet, peeled and in pieces", "1 cup frozen strawberries", "1 cup fresh orange juice", "½ cup plain yogurt", "1 teaspoon honey, or to taste"]
    },
    steps: {
      es: ["Ponga la remolacha, las fresas, el jugo de china, el yogur y la miel en la licuadora.", "Licúe 1 minuto, hasta que no queden pedazos.", "Pruebe y añada más miel si la quiere más dulce.", "Sirva enseguida: el color fucsia es de la remolacha, que casi no se siente."],
      en: ["Put the beet, strawberries, orange juice, yogurt and honey in the blender.", "Blend 1 minute, until no pieces remain.", "Taste and add more honey if you want it sweeter.", "Serve right away: the fuchsia color comes from the beet, which you barely taste."]
    }
  },
  {
    id: "batida-verde-pepino-pina",
    category: "bebidas",
    name: { es: "Batida Verde de Pepino, Piña y Yerbabuena", en: "Green Cucumber, Pineapple and Mint Smoothie" },
    active: 8, total: 8,
    servings: 2,
    ingredients: {
      es: ["1 pepino pelado, en pedazos", "2 tazas de piña en pedazos", "1 taza de espinaca fresca", "8 hojas de yerbabuena", "1 limón verde (el jugo)", "1 taza de agua fría", "Hielo al gusto"],
      en: ["1 cucumber, peeled and in pieces", "2 cups pineapple, in pieces", "1 cup fresh spinach", "8 mint leaves", "1 lime (the juice)", "1 cup cold water", "Ice to taste"]
    },
    steps: {
      es: ["Ponga el pepino, la piña, la espinaca y la yerbabuena en la licuadora.", "Añada el jugo de limón, el agua y el hielo.", "Licúe 1 minuto, hasta que quede lisa.", "Sirva enseguida. Es baja en calorías: buena merienda para rebajar."],
      en: ["Put the cucumber, pineapple, spinach and mint in the blender.", "Add the lime juice, water and ice.", "Blend 1 minute, until smooth.", "Serve right away. It's low in calories: a good snack for losing weight."]
    }
  },
  {
    id: "batida-zanahoria-mango-jengibre",
    category: "bebidas",
    name: { es: "Batida de Zanahoria, Mangó y Coco", en: "Carrot, Mango and Coconut Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: ["2 zanahorias peladas, en ruedas", "1½ tazas de mangó congelado en pedazos", "1 taza de agua de coco", "½ taza de leche", "1 cucharadita de jengibre fresco rallado"],
      en: ["2 carrots, peeled and sliced", "1½ cups frozen mango, in pieces", "1 cup coconut water", "½ cup milk", "1 teaspoon fresh grated ginger"]
    },
    steps: {
      es: ["Licúe las zanahorias con el agua de coco 1 minuto.", "Añada el mangó, la leche y el jengibre.", "Licúe hasta que quede cremosa, 1 minuto más.", "Sirva bien fría. El agua de coco le da potasio sin azúcar añadida."],
      en: ["Blend the carrots with the coconut water 1 minute.", "Add the mango, milk and ginger.", "Blend until creamy, 1 more minute.", "Serve well chilled. The coconut water adds potassium without added sugar."]
    }
  },
  {
    id: "batida-espinaca-guineo-mani",
    category: "bebidas",
    name: { es: "Batida Verde de Espinaca, Guineo y Maní con Leche", en: "Green Spinach, Banana and Peanut Milk Smoothie" },
    active: 5, total: 5,
    servings: 2,
    ingredients: {
      es: ["2 tazas de espinaca fresca", "2 guineos maduros congelados", "2 tazas de leche fría", "2 cucharadas de mantequilla de maní", "1 cucharada de avena en hojuelas", "½ cucharadita de canela en polvo"],
      en: ["2 cups fresh spinach", "2 ripe bananas, frozen", "2 cups cold milk", "2 tablespoons peanut butter", "1 tablespoon rolled oats", "½ teaspoon ground cinnamon"]
    },
    steps: {
      es: ["Licúe la espinaca con la leche 30 segundos.", "Añada los guineos, la mantequilla de maní, la avena y la canela.", "Licúe 1 minuto, hasta que quede cremosa.", "Sirva enseguida. El guineo tapa el sabor de la espinaca y cada vaso tiene unos 15 g de proteína."],
      en: ["Blend the spinach with the milk 30 seconds.", "Add the bananas, peanut butter, oats and cinnamon.", "Blend 1 minute, until creamy.", "Serve right away. The banana hides the spinach, and each glass has about 15 g of protein."]
    }
  },
  {
    id: "batida-yogur-griego-guayaba",
    category: "bebidas",
    name: { es: "Batida de Yogur Griego con Guayaba y Avena", en: "Greek Yogurt, Guava and Oat Smoothie" },
    active: 10, total: 10,
    servings: 2,
    ingredients: {
      es: ["1 taza de yogur griego natural", "1 taza de guayaba madura en pedazos, sin semillas", "1 taza de leche fría", "2 cucharadas de avena en hojuelas", "1 cucharada de miel", "Hielo al gusto"],
      en: ["1 cup plain Greek yogurt", "1 cup ripe guava, in pieces, seeded", "1 cup cold milk", "2 tablespoons rolled oats", "1 tablespoon honey", "Ice to taste"]
    },
    steps: {
      es: ["Licúe la guayaba con la leche y cuélela para sacar las semillitas que queden.", "Vuelva a la licuadora con el yogur griego, la avena, la miel y el hielo.", "Licúe 1 minuto, hasta que quede espesa.", "Sirva enseguida. Cada vaso tiene unos 17 g de proteína: buena para después del ejercicio."],
      en: ["Blend the guava with the milk and strain out any remaining seeds.", "Return to the blender with the Greek yogurt, oats, honey and ice.", "Blend 1 minute, until thick.", "Serve right away. Each glass has about 17 g of protein: good after exercise."]
    }
  },
  {
    id: "batida-chocolate-guineo",
    category: "bebidas",
    name: { es: "Batida de Chocolate y Guineo con Leche", en: "Chocolate Banana Milkshake" },
    active: 5, total: 5,
    servings: 2,
    ingredients: {
      es: ["2 guineos maduros congelados", "2 tazas de leche fría", "2 cucharadas de cacao en polvo sin azúcar", "1 cucharada de azúcar", "½ cucharadita de vainilla"],
      en: ["2 ripe bananas, frozen", "2 cups cold milk", "2 tablespoons unsweetened cocoa powder", "1 tablespoon sugar", "½ teaspoon vanilla"]
    },
    steps: {
      es: ["Ponga todo en la licuadora.", "Licúe 1 minuto, hasta que quede espesa y cremosa.", "Pruebe: si la quiere más dulce, añada otro pedazo de guineo en vez de más azúcar.", "Sirva enseguida. Es la batida favorita de los nenes para la merienda."],
      en: ["Put everything in the blender.", "Blend 1 minute, until thick and creamy.", "Taste: if you want it sweeter, add another piece of banana instead of more sugar.", "Serve right away. It's the kids' favorite shake for a snack."]
    }
  },
  {
    id: "champola-mamey",
    category: "bebidas",
    name: { es: "Champola de Mamey", en: "Mamey Champola" },
    active: 10, total: 10,
    servings: 3,
    ingredients: {
      es: ["2 tazas de pulpa de mamey maduro", "2 tazas de leche fría", "½ taza de leche evaporada", "3 cucharadas de azúcar", "½ cucharadita de vainilla", "1 pizca de canela en polvo", "Hielo al gusto"],
      en: ["2 cups ripe mamey pulp", "2 cups cold milk", "½ cup evaporated milk", "3 tablespoons sugar", "½ teaspoon vanilla", "1 pinch ground cinnamon", "Ice to taste"]
    },
    steps: {
      es: ["Pele el mamey, quítele la semilla y la piel fina de alrededor, y corte la pulpa.", "Licúe la pulpa con la leche, la leche evaporada, el azúcar y la vainilla.", "Añada el hielo y licúe 30 segundos más.", "Sirva con una pizca de canela. La champola es la batida de pulpa y leche de siempre en la isla."],
      en: ["Peel the mamey, remove the seed and the thin skin around it, and cut up the pulp.", "Blend the pulp with the milk, evaporated milk, sugar and vanilla.", "Add the ice and blend 30 more seconds.", "Serve with a pinch of cinnamon. Champola is the classic island shake of fruit pulp and milk."]
    }
  },
  {
    id: "champola-nispero",
    category: "bebidas",
    name: { es: "Champola de Níspero", en: "Sapodilla Champola" },
    active: 10, total: 10,
    servings: 3,
    ingredients: {
      es: ["4 nísperos maduros", "1½ tazas de leche fría", "½ taza de leche evaporada", "1 cucharada de azúcar", "½ cucharadita de vainilla", "Hielo al gusto"],
      en: ["4 ripe sapodillas", "1½ cups cold milk", "½ cup evaporated milk", "1 tablespoon sugar", "½ teaspoon vanilla", "Ice to taste"]
    },
    steps: {
      es: ["Pele los nísperos, quíteles las semillas negras y corte la pulpa.", "Licúe la pulpa con la leche, la leche evaporada, el azúcar y la vainilla.", "Añada el hielo y licúe 30 segundos.", "Sirva enseguida. El níspero ya es muy dulce: pruebe antes de añadir más azúcar."],
      en: ["Peel the sapodillas, remove the black seeds and cut up the pulp.", "Blend the pulp with the milk, evaporated milk, sugar and vanilla.", "Add the ice and blend 30 seconds.", "Serve right away. Sapodilla is already very sweet: taste before adding more sugar."]
    }
  },
  {
    id: "champola-mango",
    category: "bebidas",
    name: { es: "Champola de Mangó", en: "Mango Champola" },
    active: 10, total: 10,
    servings: 3,
    ingredients: {
      es: ["2 mangós maduros en pedazos", "2 tazas de leche fría", "½ taza de leche evaporada", "2 cucharadas de azúcar", "1 limón verde (unas gotas)", "Hielo al gusto"],
      en: ["2 ripe mangoes, in pieces", "2 cups cold milk", "½ cup evaporated milk", "2 tablespoons sugar", "1 lime (a few drops)", "Ice to taste"]
    },
    steps: {
      es: ["Licúe el mangó con la leche y la leche evaporada 1 minuto.", "Si el mangó es de hebra, cuele la mezcla.", "Vuelva a la licuadora con el azúcar, unas gotas de limón y el hielo, y licúe 30 segundos.", "Sirva bien fría en temporada de mangó, de mayo a agosto."],
      en: ["Blend the mango with the milk and evaporated milk 1 minute.", "If the mango is stringy, strain the mixture.", "Return to the blender with the sugar, a few drops of lime and the ice, and blend 30 seconds.", "Serve well chilled in mango season, May to August."]
    }
  },
  {
    id: "champola-acerola",
    category: "bebidas",
    name: { es: "Champola de Acerola (Cereza del País)", en: "Acerola (Puerto Rican Cherry) Champola" },
    active: 15, total: 15,
    servings: 3,
    ingredients: {
      es: ["2 tazas de acerolas", "1 taza de agua", "2 tazas de leche fría", "½ taza de leche condensada", "Hielo al gusto"],
      en: ["2 cups acerolas", "1 cup water", "2 cups cold milk", "½ cup sweetened condensed milk", "Ice to taste"]
    },
    steps: {
      es: ["Licúe las acerolas con el agua 30 segundos, sin moler mucho las semillas.", "Cuele bien, apretando la pulpa.", "Licúe el jugo con la leche, la leche condensada y el hielo.", "Sirva enseguida, que la acerola con leche se corta si espera. Tiene muchísima vitamina C."],
      en: ["Blend the acerolas with the water 30 seconds, without grinding the seeds much.", "Strain well, pressing the pulp.", "Blend the juice with the milk, condensed milk and ice.", "Serve right away, since acerola and milk curdle if left to stand. It's very high in vitamin C."]
    }
  },
  // Tanda 59 (v4.52): recetas nutritivas de la cocina boricua — carnes y aves magras, pescado, granos, arroces y
  // viandas: al horno, a la plancha o guisadas, con más vegetales y fibra, y poco sodio (adobo sin sal, caldo bajo
  // en sodio, enlatados enjuagados).
  {
    id: "picadillo-magro-chayote",
    category: "carnes",
    name: { es: "Picadillo Magro con Chayote y Zanahoria", en: "Lean Picadillo with Chayote and Carrot" },
    active: 35, total: 35,
    servings: 5,
    ingredients: {
      es: ["1 libra de carne molida de res magra (90 % o más)", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 chayote pelado, en cubitos", "1 zanahoria en cubitos", "1 lata de 8 onzas de salsa de tomate sin sal añadida", "10 aceitunas rellenas, picadas", "1 cucharadita de comino", "1 cucharadita de adobo sin sal", "¼ cucharadita de sal", "½ taza de agua"],
      en: ["1 pound lean ground beef (90% or leaner)", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 chayote, peeled and diced", "1 carrot, diced", "1 can (8 ounces) no-salt-added tomato sauce", "10 stuffed olives, chopped", "1 teaspoon cumin", "1 teaspoon salt-free adobo", "¼ teaspoon salt", "½ cup water"]
    },
    steps: {
      es: ["En un sartén grande con el aceite, dore la carne 6 minutos, desmenuzándola; escurra la grasa que suelte.", "Añada el sofrito, el comino y el adobo, y cocine 2 minutos.", "Agregue el chayote, la zanahoria, la salsa de tomate, las aceitunas, la sal y el agua.", "Tape y cocine a fuego bajo 15 minutos, hasta que el chayote esté blando.", "Sirva con arroz integral o viandas. El chayote rinde la carne y le añade fibra con pocas calorías."],
      en: ["In a large skillet with the oil, brown the beef 6 minutes, breaking it up; drain off the fat it releases.", "Add the sofrito, cumin and adobo and cook 2 minutes.", "Add the chayote, carrot, tomato sauce, olives, salt and water.", "Cover and cook over low heat 15 minutes, until the chayote is tender.", "Serve with brown rice or root vegetables. The chayote stretches the meat and adds fiber with few calories."]
    }
  },
  {
    id: "solomillo-plancha-mojo-batata",
    category: "carnes",
    name: { es: "Solomillo de Cerdo a la Plancha con Mojo de Recao y Batata Asada", en: "Seared Pork Tenderloin with Culantro Mojo and Roasted Sweet Potato" },
    active: 40, total: 70, wait: "adobo",
    servings: 4,
    ingredients: {
      es: ["1½ libras de solomillo de cerdo, sin grasa visible", "1 cucharadita de adobo sin sal", "¼ taza de jugo de naranja agria", "4 dientes de ajo machacados", "2 batatas medianas en cubos", "2 cucharadas de aceite de oliva", "6 hojas de recao picadas", "1 limón verde (el jugo)", "¼ cucharadita de sal"],
      en: ["1½ pounds pork tenderloin, visible fat trimmed", "1 teaspoon salt-free adobo", "¼ cup sour orange juice", "4 garlic cloves, crushed", "2 medium sweet potatoes, cubed", "2 tablespoons olive oil", "6 culantro leaves, chopped", "1 lime (the juice)", "¼ teaspoon salt"]
    },
    steps: {
      es: ["Adobe el solomillo con el adobo, el jugo de naranja agria y la mitad del ajo; déjelo 30 minutos en la nevera.", "Caliente el horno a 425 °F y ase la batata con 1 cucharada de aceite, 25 minutos.", "Dore el solomillo en un sartén caliente 3 minutos por lado y termínelo en el horno 12 a 15 minutos, hasta 145 °F por dentro.", "Para el mojo, mezcle el recao, el resto del ajo y del aceite, el jugo de limón y la sal.", "Deje reposar la carne 5 minutos, córtela en medallones y sírvala con la batata y el mojo. Es un corte de cerdo tan magro como la pechuga."],
      en: ["Season the tenderloin with the adobo, sour orange juice and half the garlic; refrigerate 30 minutes.", "Heat the oven to 425 °F and roast the sweet potato with 1 tablespoon of oil, 25 minutes.", "Sear the tenderloin in a hot skillet 3 minutes per side and finish it in the oven 12 to 15 minutes, to 145 °F inside.", "For the mojo, mix the culantro, the rest of the garlic and oil, the lime juice and the salt.", "Rest the meat 5 minutes, slice it into medallions and serve with the sweet potato and mojo. It's a pork cut as lean as chicken breast."]
    }
  },
  {
    id: "albondigas-res-avena-horno",
    category: "carnes",
    name: { es: "Albóndigas Magras de Res al Horno en Salsa Criolla", en: "Baked Lean Beef Meatballs in Creole Sauce" },
    active: 45, total: 45,
    servings: 5,
    ingredients: {
      es: ["1 libra de carne molida de res magra", "½ taza de avena en hojuelas", "1 huevo", "3 cucharadas de sofrito", "1 cucharadita de adobo sin sal", "¼ cucharadita de sal", "1 lata de 15 onzas de salsa de tomate sin sal añadida", "½ taza de caldo de res bajo en sodio", "1 pimiento verde en tiras", "1 cucharadita de orégano"],
      en: ["1 pound lean ground beef", "½ cup rolled oats", "1 egg", "3 tablespoons sofrito", "1 teaspoon salt-free adobo", "¼ teaspoon salt", "1 can (15 ounces) no-salt-added tomato sauce", "½ cup low-sodium beef broth", "1 green bell pepper, cut in strips", "1 teaspoon oregano"]
    },
    steps: {
      es: ["Caliente el horno a 400 °F. Mezcle la carne, la avena, el huevo, 2 cucharadas de sofrito, el adobo y la sal.", "Forme 20 albóndigas y hornéelas en una bandeja 15 minutos, sin aceite.", "Mientras, en un caldero, cocine el resto del sofrito con el pimiento 3 minutos; añada la salsa de tomate, el caldo y el orégano.", "Pase las albóndigas a la salsa y cocine tapado 10 minutos a fuego bajo.", "Sirva con arroz y habichuelas o con espaguetis integrales. La avena las hace jugosas y añade fibra en vez de pan."],
      en: ["Heat the oven to 400 °F. Mix the beef, oats, egg, 2 tablespoons sofrito, adobo and salt.", "Shape 20 meatballs and bake them on a tray 15 minutes, without oil.", "Meanwhile, in a caldero, cook the rest of the sofrito with the bell pepper 3 minutes; add the tomato sauce, broth and oregano.", "Move the meatballs to the sauce and cook covered 10 minutes over low heat.", "Serve with rice and beans or whole-wheat spaghetti. The oats keep them juicy and add fiber instead of bread."]
    }
  },
  {
    id: "carne-guisada-viandas-calabaza",
    category: "carnes",
    name: { es: "Carne con Viandas: Res Guisada con Yautía, Calabaza y Zanahoria", en: "Beef with Root Vegetables: Stew with Taro, Pumpkin and Carrot" },
    active: 90, total: 90,
    servings: 6,
    ingredients: {
      es: ["1½ libras de carne de res magra para guisar, en cubos", "1 cucharadita de adobo sin sal", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 lata de 8 onzas de salsa de tomate sin sal añadida", "4 tazas de caldo de res bajo en sodio", "2 yautías peladas, en trozos", "2 tazas de calabaza en trozos", "2 zanahorias en ruedas", "1 hoja de laurel", "½ cucharadita de sal"],
      en: ["1½ pounds stewing beef, trimmed, cubed", "1 teaspoon salt-free adobo", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 can (8 ounces) no-salt-added tomato sauce", "4 cups low-sodium beef broth", "2 taro roots (yautía), peeled, in chunks", "2 cups pumpkin chunks", "2 carrots, sliced", "1 bay leaf", "½ teaspoon salt"]
    },
    steps: {
      es: ["Sazone la carne con el adobo y dórela en un caldero con el aceite, 8 minutos.", "Añada el sofrito y la salsa de tomate y cocine 3 minutos.", "Agregue el caldo y el laurel, tape y cocine a fuego bajo 45 minutos, hasta que la carne esté casi blanda.", "Añada la yautía, la calabaza, la zanahoria y la sal, y cocine 25 minutos más, hasta que las viandas estén blandas y la calabaza espese la salsa.", "Saque el laurel y sirva. Es un plato completo, con la carne, las viandas y los vegetales en la misma olla."],
      en: ["Season the beef with the adobo and brown it in a caldero with the oil, 8 minutes.", "Add the sofrito and tomato sauce and cook 3 minutes.", "Add the broth and bay leaf, cover and cook over low heat 45 minutes, until the beef is nearly tender.", "Add the taro, pumpkin, carrot and salt and cook 25 more minutes, until the vegetables are tender and the pumpkin thickens the sauce.", "Remove the bay leaf and serve. It's a complete meal, with the meat, root vegetables and vegetables in one pot."]
    }
  },
  {
    id: "pechugas-guisadas-gandules-calabaza",
    category: "aves",
    name: { es: "Pechugas Guisadas con Gandules y Calabaza", en: "Stewed Chicken Breasts with Pigeon Peas and Pumpkin" },
    active: 40, total: 40,
    servings: 4,
    ingredients: {
      es: ["1½ libras de pechuga de pollo sin piel, en trozos", "1 cucharadita de adobo sin sal", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "1 lata de 15 onzas de gandules, escurridos y enjuagados", "2 tazas de calabaza en cubos", "1½ tazas de caldo de pollo bajo en sodio", "½ taza de salsa de tomate sin sal añadida", "4 hojas de recao picadas"],
      en: ["1½ pounds skinless chicken breast, in pieces", "1 teaspoon salt-free adobo", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "1 can (15 ounces) pigeon peas, drained and rinsed", "2 cups cubed pumpkin", "1½ cups low-sodium chicken broth", "½ cup no-salt-added tomato sauce", "4 culantro leaves, chopped"]
    },
    steps: {
      es: ["Sazone el pollo con el adobo y dórelo en un caldero con el aceite, 5 minutos.", "Añada el sofrito y el sazón y cocine 2 minutos.", "Agregue los gandules, la calabaza, el caldo y la salsa de tomate.", "Tape y cocine a fuego bajo 20 minutos, hasta que el pollo esté cocido y la calabaza se deshaga un poco.", "Apague y añada el recao. Unos 40 g de proteína por plato, con la fibra de los gandules."],
      en: ["Season the chicken with the adobo and brown it in a caldero with the oil, 5 minutes.", "Add the sofrito and sazón and cook 2 minutes.", "Add the pigeon peas, pumpkin, broth and tomato sauce.", "Cover and cook over low heat 20 minutes, until the chicken is cooked and the pumpkin breaks down a little.", "Turn off the heat and add the culantro. About 40 g of protein per plate, with the fiber of the pigeon peas."]
    }
  },
  {
    id: "pollo-horno-viandas-mojo",
    category: "aves",
    name: { es: "Pollo al Horno con Viandas y Mojo en una Bandeja", en: "One-Pan Baked Chicken with Root Vegetables and Mojo" },
    active: 55, total: 85, wait: "adobo",
    servings: 4,
    ingredients: {
      es: ["4 muslos de pollo sin piel", "1 cucharadita de adobo sin sal", "¼ taza de jugo de naranja agria", "1 batata en trozos", "1 yautía en trozos", "1 plátano maduro en ruedas", "1 cebolla en gajos", "6 dientes de ajo machacados", "2 cucharadas de aceite de oliva", "1 cucharadita de orégano", "¼ cucharadita de sal"],
      en: ["4 skinless chicken thighs", "1 teaspoon salt-free adobo", "¼ cup sour orange juice", "1 sweet potato, in chunks", "1 taro root (yautía), in chunks", "1 ripe plantain, sliced", "1 onion, cut in wedges", "6 garlic cloves, crushed", "2 tablespoons olive oil", "1 teaspoon oregano", "¼ teaspoon salt"]
    },
    steps: {
      es: ["Adobe el pollo con el adobo, el jugo de naranja agria y la mitad del ajo; déjelo 30 minutos en la nevera.", "Caliente el horno a 425 °F. Mezcle las viandas, el plátano y la cebolla con el aceite, el resto del ajo, el orégano y la sal.", "Ponga todo en una bandeja grande, con el pollo encima.", "Hornee 40 a 45 minutos, volteando las viandas a la mitad, hasta que el pollo llegue a 165 °F y las viandas estén doradas.", "Sirva con una ensalada verde. Sin freír, y se lava una sola bandeja."],
      en: ["Season the chicken with the adobo, sour orange juice and half the garlic; refrigerate 30 minutes.", "Heat the oven to 425 °F. Toss the root vegetables, plantain and onion with the oil, the rest of the garlic, the oregano and salt.", "Spread everything on a large tray with the chicken on top.", "Bake 40 to 45 minutes, turning the vegetables halfway, until the chicken reaches 165 °F and the vegetables are golden.", "Serve with a green salad. No frying, and only one tray to wash."]
    }
  },
  {
    id: "picadillo-pavo-berenjena",
    category: "aves",
    name: { es: "Picadillo de Pavo con Berenjena", en: "Ground Turkey Picadillo with Eggplant" },
    active: 35, total: 35,
    servings: 5,
    ingredients: {
      es: ["1 libra de pavo molido", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 berenjena en cubitos", "1 pimiento rojo picadito", "1 lata de 8 onzas de salsa de tomate sin sal añadida", "2 cucharadas de pasas", "10 aceitunas rellenas, picadas", "1 cucharadita de comino", "1 cucharadita de adobo sin sal", "¼ cucharadita de sal"],
      en: ["1 pound ground turkey", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 eggplant, diced", "1 red bell pepper, finely chopped", "1 can (8 ounces) no-salt-added tomato sauce", "2 tablespoons raisins", "10 stuffed olives, chopped", "1 teaspoon cumin", "1 teaspoon salt-free adobo", "¼ teaspoon salt"]
    },
    steps: {
      es: ["En un sartén grande con el aceite, dore el pavo 6 minutos, desmenuzándolo.", "Añada el sofrito, el comino y el adobo, y cocine 2 minutos.", "Agregue la berenjena y el pimiento y cocine 5 minutos, moviendo.", "Añada la salsa de tomate, las pasas, las aceitunas y la sal; tape y cocine 12 minutos, hasta que la berenjena esté blanda.", "Sirva con arroz o úselo para rellenar pimientos o canoas al horno. El pavo y la berenjena lo hacen más ligero."],
      en: ["In a large skillet with the oil, brown the turkey 6 minutes, breaking it up.", "Add the sofrito, cumin and adobo and cook 2 minutes.", "Add the eggplant and bell pepper and cook 5 minutes, stirring.", "Add the tomato sauce, raisins, olives and salt; cover and cook 12 minutes, until the eggplant is tender.", "Serve with rice or use it to stuff peppers or baked plantain canoes. Turkey and eggplant make it lighter."]
    }
  },
  {
    id: "salpicon-pollo-repollo",
    category: "aves",
    name: { es: "Salpicón de Pollo con Repollo y Zanahoria", en: "Shredded Chicken Salpicón with Cabbage and Carrot" },
    active: 40, total: 40,
    servings: 4,
    ingredients: {
      es: ["1½ libras de pechuga de pollo sin piel", "4 tazas de agua", "1 hoja de laurel", "2 tazas de repollo en tiras finas", "1 zanahoria rallada", "1 tomate en cubitos", "½ cebolla roja en tiritas", "2 cucharadas de aceite de oliva", "1 limón verde (el jugo)", "2 cucharadas de vinagre", "4 hojas de recao picadas", "½ cucharadita de sal"],
      en: ["1½ pounds skinless chicken breast", "4 cups water", "1 bay leaf", "2 cups thinly sliced cabbage", "1 carrot, grated", "1 tomato, diced", "½ red onion, thinly sliced", "2 tablespoons olive oil", "1 lime (the juice)", "2 tablespoons vinegar", "4 culantro leaves, chopped", "½ teaspoon salt"]
    },
    steps: {
      es: ["Hierva el pollo en el agua con el laurel 20 minutos, a fuego bajo; déjelo refrescar en el caldo.", "Desmenúcelo en hebras con dos tenedores (guarde el caldo para una sopa).", "En un tazón, mezcle el repollo, la zanahoria, el tomate y la cebolla.", "Bata el aceite, el jugo de limón, el vinagre, el recao y la sal, y mézclelo con el pollo y los vegetales.", "Sirva frío o a temperatura de ambiente, solo o en pan sobao. Es fresco, alto en proteína y con vegetales crudos."],
      en: ["Simmer the chicken in the water with the bay leaf 20 minutes over low heat; let it cool in the broth.", "Shred it with two forks (save the broth for soup).", "In a bowl, mix the cabbage, carrot, tomato and onion.", "Whisk the oil, lime juice, vinegar, culantro and salt, and toss with the chicken and vegetables.", "Serve cold or at room temperature, on its own or on pan sobao. It's fresh, high in protein and full of raw vegetables."]
    }
  },
  {
    id: "sierra-horno-tomate-alcaparras",
    category: "pescados",
    name: { es: "Sierra al Horno con Tomate, Cebolla y Alcaparras", en: "Baked Kingfish with Tomato, Onion and Capers" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: ["4 ruedas de sierra (6 onzas cada una)", "1 cucharadita de adobo sin sal", "1 limón verde (el jugo)", "2 cucharadas de aceite de oliva", "1 cebolla en ruedas", "1 pimiento verde en tiras", "3 tomates en ruedas", "1 cucharada de alcaparras, enjuagadas", "4 dientes de ajo en lascas", "1 cucharadita de orégano"],
      en: ["4 kingfish steaks (6 ounces each)", "1 teaspoon salt-free adobo", "1 lime (the juice)", "2 tablespoons olive oil", "1 onion, sliced into rings", "1 green bell pepper, cut in strips", "3 tomatoes, sliced", "1 tablespoon capers, rinsed", "4 garlic cloves, sliced", "1 teaspoon oregano"]
    },
    steps: {
      es: ["Caliente el horno a 400 °F. Sazone la sierra con el adobo y el jugo de limón.", "En un molde, ponga la mitad de la cebolla y el pimiento, la sierra encima y luego el tomate.", "Reparta el resto de la cebolla y el pimiento, las alcaparras, el ajo y el orégano, y rocíe el aceite.", "Hornee 20 a 25 minutos, hasta que el pescado se desmenuce fácil con un tenedor.", "Sirva con viandas hervidas. La sierra es rica en omega-3, y al horno no lleva la grasa de la fritura."],
      en: ["Heat the oven to 400 °F. Season the kingfish with the adobo and lime juice.", "In a baking dish, layer half the onion and bell pepper, the fish on top and then the tomato.", "Scatter the rest of the onion and pepper, the capers, garlic and oregano, and drizzle with the oil.", "Bake 20 to 25 minutes, until the fish flakes easily with a fork.", "Serve with boiled root vegetables. Kingfish is rich in omega-3, and baking skips the fat of frying."]
    }
  },
  {
    id: "bacalao-garbanzos-espinaca",
    category: "pescados",
    name: { es: "Bacalao Guisado con Garbanzos y Espinaca", en: "Stewed Salt Cod with Chickpeas and Spinach" },
    active: 35, total: 755, wait: "desalar",
    servings: 5,
    ingredients: {
      es: ["6 onzas de bacalao sin espinas", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 lata de 15 onzas de garbanzos, escurridos y enjuagados", "1 lata de 8 onzas de salsa de tomate sin sal añadida", "1 taza de agua", "2 papas en cubos", "4 tazas de espinaca fresca", "1 cucharadita de pimentón"],
      en: ["6 ounces boneless salt cod", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 can (15 ounces) chickpeas, drained and rinsed", "1 can (8 ounces) no-salt-added tomato sauce", "1 cup water", "2 potatoes, cubed", "4 cups fresh spinach", "1 teaspoon paprika"]
    },
    steps: {
      es: ["Desale el bacalao en agua fría de 8 a 12 horas, cambiando el agua 3 o 4 veces; desmenúcelo.", "En un caldero con el aceite, sofría el sofrito y el pimentón 2 minutos.", "Añada el bacalao, los garbanzos, la salsa de tomate, el agua y las papas; tape y cocine 20 minutos.", "Agregue la espinaca y cocine 3 minutos más, hasta que se ablande.", "Sirva con arroz o viandas. No lleva sal: el bacalao bien desalado da la justa."],
      en: ["Soak the salt cod in cold water 8 to 12 hours, changing the water 3 or 4 times; flake it.", "In a caldero with the oil, sauté the sofrito and paprika 2 minutes.", "Add the cod, chickpeas, tomato sauce, water and potatoes; cover and cook 20 minutes.", "Add the spinach and cook 3 more minutes, until wilted.", "Serve with rice or root vegetables. No added salt: well-soaked cod gives just enough."]
    }
  },
  {
    id: "pescado-salsa-calabaza-recao",
    category: "pescados",
    name: { es: "Pescado en Salsa de Calabaza y Recao", en: "Fish in Pumpkin and Culantro Sauce" },
    active: 35, total: 35,
    servings: 4,
    ingredients: {
      es: ["4 filetes de pescado blanco (mero o chillo), 6 onzas cada uno", "1 cucharadita de adobo sin sal", "1 cucharada de aceite de oliva", "3 cucharadas de sofrito", "2 tazas de calabaza en cubos", "1 taza de caldo de pescado bajo en sodio", "½ taza de leche de coco light", "6 hojas de recao picadas", "¼ cucharadita de sal"],
      en: ["4 white fish fillets (grouper or snapper), 6 ounces each", "1 teaspoon salt-free adobo", "1 tablespoon olive oil", "3 tablespoons sofrito", "2 cups cubed pumpkin", "1 cup low-sodium fish broth", "½ cup light coconut milk", "6 culantro leaves, chopped", "¼ teaspoon salt"]
    },
    steps: {
      es: ["En una olla con el aceite, sofría el sofrito 2 minutos; añada la calabaza y el caldo, y cocine tapado 15 minutos.", "Licúe la calabaza con su caldo y la leche de coco hasta que quede una salsa lisa.", "Devuelva la salsa a un sartén ancho con la sal y póngala a hervir suave.", "Sazone el pescado con el adobo y cocínelo en la salsa, tapado, 8 a 10 minutos.", "Eche el recao por encima y sirva con arroz. La salsa es cremosa sin crema: la espesa la calabaza."],
      en: ["In a pot with the oil, sauté the sofrito 2 minutes; add the pumpkin and broth and cook covered 15 minutes.", "Blend the pumpkin with its broth and the coconut milk into a smooth sauce.", "Return the sauce to a wide skillet with the salt and bring to a gentle simmer.", "Season the fish with the adobo and cook it in the sauce, covered, 8 to 10 minutes.", "Sprinkle with the culantro and serve with rice. The sauce is creamy without cream: the pumpkin thickens it."]
    }
  },
  {
    id: "camarones-guisados-gandules-calabaza",
    category: "pescados",
    name: { es: "Camarones Guisados con Gandules y Calabaza", en: "Stewed Shrimp with Pigeon Peas and Pumpkin" },
    active: 30, total: 30,
    servings: 4,
    ingredients: {
      es: ["1 libra de camarones pelados y limpios", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "1 lata de 15 onzas de gandules, escurridos y enjuagados", "2 tazas de calabaza en cubitos", "1 taza de caldo de pescado bajo en sodio", "½ taza de salsa de tomate sin sal añadida", "4 hojas de recao picadas"],
      en: ["1 pound shrimp, peeled and deveined", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "1 can (15 ounces) pigeon peas, drained and rinsed", "2 cups diced pumpkin", "1 cup low-sodium fish broth", "½ cup no-salt-added tomato sauce", "4 culantro leaves, chopped"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito y el sazón 2 minutos.", "Añada los gandules, la calabaza, el caldo y la salsa de tomate; tape y cocine 15 minutos.", "Agregue los camarones y cocine 4 minutos, sólo hasta que se pongan rosados.", "Apague y añada el recao.", "Sirva con arroz blanco o integral. Los camarones se cocinan en minutos: si se pasan, se ponen duros."],
      en: ["In a caldero with the oil, sauté the sofrito and sazón 2 minutes.", "Add the pigeon peas, pumpkin, broth and tomato sauce; cover and cook 15 minutes.", "Add the shrimp and cook 4 minutes, just until pink.", "Turn off the heat and add the culantro.", "Serve with white or brown rice. Shrimp cook in minutes: overcooked, they turn tough."]
    }
  },
  {
    id: "garbanzos-bacalao-papas",
    category: "granos",
    name: { es: "Garbanzos Guisados con Bacalao y Papas", en: "Stewed Chickpeas with Salt Cod and Potatoes" },
    active: 40, total: 760, wait: "desalar",
    servings: 6,
    ingredients: {
      es: ["6 onzas de bacalao sin espinas", "2 latas de 15 onzas de garbanzos, escurridos y enjuagados", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 lata de 8 onzas de salsa de tomate sin sal añadida", "3 tazas de agua", "2 papas en cubos", "1 taza de calabaza en cubos", "½ cucharadita de orégano"],
      en: ["6 ounces boneless salt cod", "2 cans (15 ounces each) chickpeas, drained and rinsed", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 can (8 ounces) no-salt-added tomato sauce", "3 cups water", "2 potatoes, cubed", "1 cup cubed pumpkin", "½ teaspoon oregano"]
    },
    steps: {
      es: ["Desale el bacalao en agua fría de 8 a 12 horas, cambiando el agua varias veces; desmenúcelo.", "En un caldero con el aceite, sofría el sofrito 2 minutos y añada la salsa de tomate.", "Agregue los garbanzos, el agua, las papas, la calabaza, el bacalao y el orégano.", "Tape y cocine a fuego bajo 25 minutos, hasta que las papas estén blandas y el caldo espese.", "Sirva con arroz. Es un plato de Cuaresma lleno de fibra y proteína, sin carne."],
      en: ["Soak the salt cod in cold water 8 to 12 hours, changing the water several times; flake it.", "In a caldero with the oil, sauté the sofrito 2 minutes and add the tomato sauce.", "Add the chickpeas, water, potatoes, pumpkin, cod and oregano.", "Cover and cook over low heat 25 minutes, until the potatoes are tender and the broth thickens.", "Serve with rice. It's a Lenten dish full of fiber and protein, without meat."]
    }
  },
  {
    id: "gandules-bolitas-platano",
    category: "granos",
    name: { es: "Gandules Guisados con Bolitas de Plátano", en: "Stewed Pigeon Peas with Plantain Dumplings" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: ["2 latas de 15 onzas de gandules, escurridos y enjuagados", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "½ taza de salsa de tomate sin sal añadida", "4 tazas de caldo de pollo bajo en sodio", "1 taza de calabaza en cubos", "2 plátanos verdes", "1 diente de ajo machacado", "¼ cucharadita de sal"],
      en: ["2 cans (15 ounces each) pigeon peas, drained and rinsed", "1 tablespoon olive oil", "4 tablespoons sofrito", "½ cup no-salt-added tomato sauce", "4 cups low-sodium chicken broth", "1 cup cubed pumpkin", "2 green plantains", "1 garlic clove, crushed", "¼ teaspoon salt"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito 2 minutos; añada la salsa de tomate, los gandules, el caldo y la calabaza, y hierva.", "Pele los plátanos y rállelos por el lado fino del guayo; mézclelos con el ajo y la sal.", "Con las manos mojadas, forme bolitas del tamaño de una nuez.", "Échelas en el caldo hirviendo y cocine tapado a fuego bajo 20 minutos, sin mover mucho para que no se rompan.", "Sirva caliente. Las bolitas de plátano son la vianda del plato: sólo hace falta una ensalada."],
      en: ["In a caldero with the oil, sauté the sofrito 2 minutes; add the tomato sauce, pigeon peas, broth and pumpkin and bring to a boil.", "Peel the plantains and grate them on the fine side of the grater; mix with the garlic and salt.", "With wet hands, shape walnut-sized balls.", "Drop them into the boiling broth and cook covered over low heat 20 minutes, without stirring much so they don't break.", "Serve hot. The plantain dumplings are the starch of the dish: just add a salad."]
    }
  },
  {
    id: "habichuelas-rosadas-viandas",
    category: "granos",
    name: { es: "Habichuelas Rosadas con Calabaza, Yautía y Recao", en: "Pink Beans with Pumpkin, Taro and Culantro" },
    active: 40, total: 40,
    servings: 6,
    ingredients: {
      es: ["2 latas de 15 onzas de habichuelas rosadas, escurridas y enjuagadas", "1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "½ taza de salsa de tomate sin sal añadida", "3 tazas de caldo de vegetales bajo en sodio", "1½ tazas de calabaza en cubos", "1 yautía pelada, en cubos", "6 hojas de recao picadas"],
      en: ["2 cans (15 ounces each) pink beans, drained and rinsed", "1 tablespoon olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "½ cup no-salt-added tomato sauce", "3 cups low-sodium vegetable broth", "1½ cups cubed pumpkin", "1 taro root (yautía), peeled and cubed", "6 culantro leaves, chopped"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito y el sazón 2 minutos.", "Añada la salsa de tomate, las habichuelas, el caldo, la calabaza y la yautía.", "Tape y cocine a fuego bajo 25 minutos, hasta que la yautía esté blanda y la calabaza espese el caldo.", "Aplaste unas cuantas habichuelas contra el caldero para que quede más espeso.", "Eche el recao y sirva sobre arroz. Sin jamón ni salchichas: el sabor lo dan el sofrito y el recao."],
      en: ["In a caldero with the oil, sauté the sofrito and sazón 2 minutes.", "Add the tomato sauce, beans, broth, pumpkin and taro.", "Cover and cook over low heat 25 minutes, until the taro is tender and the pumpkin thickens the broth.", "Mash a few beans against the pot so it gets thicker.", "Add the culantro and serve over rice. No ham or sausage: the flavor comes from the sofrito and culantro."]
    }
  },
  {
    id: "arroz-integral-habichuelas-calabaza",
    category: "arroces",
    name: { es: "Arroz Integral Junto con Habichuelas Rosadas y Calabaza", en: "Brown Rice Cooked with Pink Beans and Pumpkin" },
    active: 60, total: 60,
    servings: 6,
    ingredients: {
      es: ["2 tazas de arroz integral", "1 lata de 15 onzas de habichuelas rosadas, escurridas y enjuagadas", "1½ tazas de calabaza en cubitos", "2 cucharadas de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "4 tazas de caldo de vegetales bajo en sodio", "½ cucharadita de sal"],
      en: ["2 cups brown rice", "1 can (15 ounces) pink beans, drained and rinsed", "1½ cups diced pumpkin", "2 tablespoons olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "4 cups low-sodium vegetable broth", "½ teaspoon salt"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito y el sazón 2 minutos.", "Añada el arroz y muévalo 1 minuto; agregue el caldo, las habichuelas, la calabaza y la sal.", "Hierva destapado hasta que el caldo baje al nivel del arroz.", "Tape, baje el fuego al mínimo y cocine 40 minutos sin destapar.", "Voltee el arroz con un tenedor y sirva. El arroz integral tiene 3 veces más fibra que el blanco."],
      en: ["In a caldero with the oil, sauté the sofrito and sazón 2 minutes.", "Add the rice and stir 1 minute; add the broth, beans, pumpkin and salt.", "Boil uncovered until the broth drops to the level of the rice.", "Cover, lower the heat to minimum and cook 40 minutes without lifting the lid.", "Fluff the rice with a fork and serve. Brown rice has 3 times the fiber of white."]
    }
  },
  {
    id: "arroz-pollo-vegetales-integral",
    category: "arroces",
    name: { es: "Arroz con Pollo y Vegetales Bajo en Sodio", en: "Low-Sodium Chicken and Vegetable Rice" },
    active: 55, total: 55,
    servings: 6,
    ingredients: {
      es: ["1½ libras de pechuga de pollo sin piel, en trozos", "1 cucharadita de adobo sin sal", "2 cucharadas de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "2 tazas de arroz de grano mediano", "3½ tazas de caldo de pollo bajo en sodio", "1 taza de habichuelas tiernas picadas", "1 zanahoria en cubitos", "1 taza de maíz en grano", "½ pimiento rojo en tiras", "½ cucharadita de sal"],
      en: ["1½ pounds skinless chicken breast, in pieces", "1 teaspoon salt-free adobo", "2 tablespoons olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "2 cups medium-grain rice", "3½ cups low-sodium chicken broth", "1 cup chopped green beans", "1 carrot, diced", "1 cup corn kernels", "½ red bell pepper, in strips", "½ teaspoon salt"]
    },
    steps: {
      es: ["Sazone el pollo con el adobo y dórelo en un caldero con el aceite, 5 minutos.", "Añada el sofrito y el sazón y cocine 2 minutos; agregue el arroz y muévalo 1 minuto.", "Añada el caldo, las habichuelas tiernas, la zanahoria, el maíz y la sal; hierva destapado hasta que el caldo baje al nivel del arroz.", "Tape, baje el fuego al mínimo y cocine 20 minutos; voltee el arroz, ponga el pimiento encima y cocine 5 minutos más.", "Sirva con aguacate. Tiene la mitad del sodio del arroz con pollo de siempre porque usa caldo bajo en sodio y adobo sin sal."],
      en: ["Season the chicken with the adobo and brown it in a caldero with the oil, 5 minutes.", "Add the sofrito and sazón and cook 2 minutes; add the rice and stir 1 minute.", "Add the broth, green beans, carrot, corn and salt; boil uncovered until the broth drops to the level of the rice.", "Cover, lower the heat to minimum and cook 20 minutes; turn the rice, lay the bell pepper on top and cook 5 more minutes.", "Serve with avocado. It has half the sodium of the usual arroz con pollo thanks to low-sodium broth and salt-free adobo."]
    }
  },
  {
    id: "arroz-camarones-gandules",
    category: "arroces",
    name: { es: "Arroz con Camarones y Gandules", en: "Rice with Shrimp and Pigeon Peas" },
    active: 45, total: 45,
    servings: 6,
    ingredients: {
      es: ["1 libra de camarones pelados y limpios", "2 cucharadas de aceite de oliva", "4 cucharadas de sofrito", "1 sobre de sazón con achiote", "2 tazas de arroz de grano mediano", "1 lata de 15 onzas de gandules, escurridos y enjuagados", "3½ tazas de caldo de pescado bajo en sodio", "10 aceitunas rellenas", "½ cucharadita de sal", "4 hojas de recao picadas"],
      en: ["1 pound shrimp, peeled and deveined", "2 tablespoons olive oil", "4 tablespoons sofrito", "1 packet sazón with annatto", "2 cups medium-grain rice", "1 can (15 ounces) pigeon peas, drained and rinsed", "3½ cups low-sodium fish broth", "10 stuffed olives", "½ teaspoon salt", "4 culantro leaves, chopped"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito y el sazón 2 minutos.", "Añada el arroz y muévalo 1 minuto; agregue los gandules, el caldo, las aceitunas y la sal.", "Hierva destapado hasta que el caldo baje al nivel del arroz; tape, baje el fuego al mínimo y cocine 20 minutos.", "Voltee el arroz, ponga los camarones encima, tape y cocine 6 minutos más, hasta que estén rosados.", "Eche el recao y sirva. Es el arroz con gandules de las fiestas, con proteína de mar."],
      en: ["In a caldero with the oil, sauté the sofrito and sazón 2 minutes.", "Add the rice and stir 1 minute; add the pigeon peas, broth, olives and salt.", "Boil uncovered until the broth drops to the level of the rice; cover, lower the heat to minimum and cook 20 minutes.", "Turn the rice, lay the shrimp on top, cover and cook 6 more minutes, until pink.", "Add the culantro and serve. It's the holiday arroz con gandules, with seafood protein."]
    }
  },
  {
    id: "yautia-calabaza-horno-mojo",
    category: "vegetales",
    name: { es: "Yautía y Calabaza al Horno con Mojo de Recao", en: "Roasted Taro and Pumpkin with Culantro Mojo" },
    active: 45, total: 45,
    servings: 4,
    ingredients: {
      es: ["2 yautías peladas, en bastones", "3 tazas de calabaza en trozos", "2 cucharadas de aceite de oliva", "1 cucharadita de adobo sin sal", "6 hojas de recao", "3 dientes de ajo", "1 limón verde (el jugo)", "¼ cucharadita de sal"],
      en: ["2 taro roots (yautía), peeled, cut in sticks", "3 cups pumpkin chunks", "2 tablespoons olive oil", "1 teaspoon salt-free adobo", "6 culantro leaves", "3 garlic cloves", "1 lime (the juice)", "¼ teaspoon salt"]
    },
    steps: {
      es: ["Caliente el horno a 425 °F. Hierva la yautía 8 minutos y escúrrala bien.", "Mezcle la yautía y la calabaza con 1 cucharada de aceite y el adobo, y extiéndalas en una bandeja.", "Hornee 25 a 30 minutos, volteándolas a la mitad, hasta que estén doradas.", "Para el mojo, maje el recao y el ajo con el resto del aceite, el jugo de limón y la sal.", "Sirva las viandas con el mojo por encima. Saben a frituras, sin freír."],
      en: ["Heat the oven to 425 °F. Boil the taro 8 minutes and drain well.", "Toss the taro and pumpkin with 1 tablespoon oil and the adobo and spread them on a tray.", "Bake 25 to 30 minutes, turning halfway, until golden.", "For the mojo, mash the culantro and garlic with the rest of the oil, the lime juice and salt.", "Serve the vegetables topped with the mojo. They taste like fritters, without frying."]
    }
  },
  {
    id: "repollo-guisado-garbanzos-calabaza",
    category: "vegetales",
    name: { es: "Repollo Guisado con Garbanzos y Calabaza", en: "Stewed Cabbage with Chickpeas and Pumpkin" },
    active: 30, total: 30,
    servings: 5,
    ingredients: {
      es: ["1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "½ repollo en tiras", "1 lata de 15 onzas de garbanzos, escurridos y enjuagados", "2 tazas de calabaza en cubos", "½ taza de salsa de tomate sin sal añadida", "1 taza de caldo de vegetales bajo en sodio", "1 cucharadita de comino", "¼ cucharadita de sal"],
      en: ["1 tablespoon olive oil", "4 tablespoons sofrito", "½ cabbage, sliced in strips", "1 can (15 ounces) chickpeas, drained and rinsed", "2 cups cubed pumpkin", "½ cup no-salt-added tomato sauce", "1 cup low-sodium vegetable broth", "1 teaspoon cumin", "¼ teaspoon salt"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito y el comino 2 minutos.", "Añada el repollo y muévalo 3 minutos, hasta que empiece a ablandarse.", "Agregue los garbanzos, la calabaza, la salsa de tomate, el caldo y la sal.", "Tape y cocine a fuego bajo 15 minutos, hasta que la calabaza esté blanda.", "Sirva con arroz o como acompañante. Es el repollo guisado de siempre, sin jamón y con proteína de garbanzos."],
      en: ["In a caldero with the oil, sauté the sofrito and cumin 2 minutes.", "Add the cabbage and stir 3 minutes, until it starts to soften.", "Add the chickpeas, pumpkin, tomato sauce, broth and salt.", "Cover and cook over low heat 15 minutes, until the pumpkin is tender.", "Serve with rice or as a side. It's the classic stewed cabbage, without ham and with chickpea protein."]
    }
  },
  {
    id: "guineitos-bacalao-guisado",
    category: "vegetales",
    name: { es: "Guineítos Verdes con Bacalao Guisado y Aguacate", en: "Green Bananas with Stewed Salt Cod and Avocado" },
    active: 40, total: 760, wait: "desalar",
    servings: 4,
    ingredients: {
      es: ["8 guineítos verdes", "6 onzas de bacalao sin espinas", "1 cucharada de aceite de oliva", "1 cebolla en ruedas", "1 pimiento rojo en tiras", "2 tomates picados", "2 dientes de ajo", "1 aguacate en lascas"],
      en: ["8 green bananas", "6 ounces boneless salt cod", "1 tablespoon olive oil", "1 onion, sliced into rings", "1 red bell pepper, cut in strips", "2 tomatoes, chopped", "2 garlic cloves", "1 avocado, sliced"]
    },
    steps: {
      es: ["Desale el bacalao en agua fría de 8 a 12 horas, cambiando el agua varias veces; desmenúcelo.", "Corte las puntas de los guineítos, hágales un corte a lo largo y hiérvalos en agua 15 minutos; pélelos.", "En un sartén con el aceite, sofría la cebolla, el pimiento y el ajo 4 minutos; añada el tomate y el bacalao, y cocine 8 minutos.", "Sirva los guineítos con el bacalao guisado por encima.", "Acompañe con el aguacate. Es el desayuno o almuerzo del campo, con viandas, pescado y grasa buena."],
      en: ["Soak the salt cod in cold water 8 to 12 hours, changing the water several times; flake it.", "Trim the ends of the green bananas, slit them lengthwise and boil 15 minutes; peel.", "In a skillet with the oil, sauté the onion, bell pepper and garlic 4 minutes; add the tomato and cod and cook 8 minutes.", "Serve the green bananas topped with the stewed cod.", "Serve with the avocado. It's the countryside breakfast or lunch, with root vegetables, fish and good fat."]
    }
  },
  {
    id: "calabaza-habichuelas-tiernas-maiz",
    category: "vegetales",
    name: { es: "Guiso de Calabaza, Habichuelas Tiernas y Maíz", en: "Pumpkin, Green Bean and Corn Stew" },
    active: 30, total: 30,
    servings: 5,
    ingredients: {
      es: ["1 cucharada de aceite de oliva", "4 cucharadas de sofrito", "3 tazas de calabaza en cubos", "2 tazas de habichuelas tiernas picadas", "1½ tazas de maíz en grano", "1 chayote pelado, en cubos", "1 taza de caldo de vegetales bajo en sodio", "½ cucharadita de orégano", "¼ cucharadita de sal", "4 hojas de recao picadas"],
      en: ["1 tablespoon olive oil", "4 tablespoons sofrito", "3 cups cubed pumpkin", "2 cups chopped green beans", "1½ cups corn kernels", "1 chayote, peeled and cubed", "1 cup low-sodium vegetable broth", "½ teaspoon oregano", "¼ teaspoon salt", "4 culantro leaves, chopped"]
    },
    steps: {
      es: ["En un caldero con el aceite, sofría el sofrito 2 minutos.", "Añada la calabaza, las habichuelas tiernas, el maíz, el chayote, el caldo, el orégano y la sal.", "Tape y cocine a fuego bajo 18 minutos, hasta que todo esté blando.", "Aplaste un poco de la calabaza para espesar el guiso.", "Eche el recao y sirva con arroz, o como acompañante de pollo o pescado. Muchos colores en un solo caldero."],
      en: ["In a caldero with the oil, sauté the sofrito 2 minutes.", "Add the pumpkin, green beans, corn, chayote, broth, oregano and salt.", "Cover and cook over low heat 18 minutes, until everything is tender.", "Mash a little of the pumpkin to thicken the stew.", "Add the culantro and serve with rice, or as a side for chicken or fish. Lots of colors in one caldero."]
    }
  }
);
