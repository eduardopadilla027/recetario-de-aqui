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
  }
);
