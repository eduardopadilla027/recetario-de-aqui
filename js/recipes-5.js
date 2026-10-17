/* Recetarios de Aquí · Recetas (quinto archivo de ampliación).
 * Se carga después de recipes-4.js y añade recetas con recipes.push(...).
 * Mismo modelo que recipes.js (ARQUITECTURA.md §5). */

recipes.push(
  // ---------- Tanda 44: más veganas (9) y vegetarianas (7) ----------
  {
    id: "arroz-gandules-vegano",
    category: "arroces",
    name: { es: "Arroz con Gandules Vegano", en: "Vegan Rice with Pigeon Peas" },
    time: "50 min",
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
    time: "2 hr 30 min",
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
    time: "35 min",
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
    time: "40 min",
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
    time: "40 min",
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
    time: "40 min + 1 hr de frío",
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
    time: "1 hr 15 min",
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
    time: "1 hr 15 min",
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
    time: "30 min",
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
    time: "1 hr 10 min",
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
    time: "50 min",
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
    time: "35 min",
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
    time: "45 min",
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
    time: "15 min",
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
    time: "15 min",
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
    time: "1 hr + 1 hr de frío",
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
  }
);
