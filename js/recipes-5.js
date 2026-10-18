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
  },
  // ---------- Tanda 45: más postres puertorriqueños (16) ----------
  {
    id: "nisperos-batata",
    category: "postres",
    name: { es: "Nísperos de Batata", en: "Sweet Potato Nísperos (Coconut Sweet Potato Balls)" },
    time: "1 hr",
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
    time: "30 min",
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
    time: "10 min + congelación",
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
    time: "40 min + congelación",
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
    time: "10 min + congelación",
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
    time: "20 min",
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
    time: "45 min",
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
    time: "1 hr 20 min",
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
    time: "25 min + 2 hr de frío",
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
    time: "5 min",
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
    time: "15 min + 6 hr de congelación",
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
    time: "20 min + 4 hr de frío",
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
    time: "1 hr 15 min",
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
    time: "1 hr 15 min",
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
    time: "2 hr + 1 día de remojo",
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
    time: "1 hr 30 min",
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
    time: "45 min",
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
    time: "1 hr",
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
    time: "1 hr",
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
    time: "10 min",
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
    time: "25 min",
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
    time: "20 min",
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
    time: "15 min",
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
    time: "20 min",
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
    time: "10 min",
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
    time: "15 min + 6 hr de congelación",
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
    time: "15 min + 2 hr de frío",
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
    time: "10 min",
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
    time: "15 min",
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
    time: "10 min",
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
    time: "15 min",
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
    time: "45 min",
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
  }
);
