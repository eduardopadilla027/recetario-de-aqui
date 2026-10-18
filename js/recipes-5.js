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
  },
  // ---------- Tanda 47: más pescados y mariscos (16) ----------
  {
    id: "pastelon-bacalao",
    category: "pescados",
    name: { es: "Pastelón de Bacalao con Amarillos", en: "Salt Cod and Ripe Plantain Pastelón" },
    time: "1 hr 30 min + remojo",
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
    time: "40 min + remojo + 1 día de reposo",
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
    time: "30 min + remojo",
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
    time: "30 min",
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
    time: "35 min",
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
    time: "30 min",
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
    time: "35 min",
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
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de atún fresco de 6 onzas y 1 pulgada de grueso",
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
    time: "30 min",
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
    time: "25 min",
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
    time: "25 min",
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
    time: "1 hr 45 min",
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
    category: "pescados",
    name: { es: "Ensalada Fría de Pulpo y Mangó", en: "Chilled Octopus and Mango Salad" },
    time: "1 hr 15 min + 1 hr de frío",
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
    time: "1 hr 30 min",
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
    time: "35 min",
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
    time: "1 hr",
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
    time: "10 min",
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
    time: "10 min",
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
    time: "30 min",
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
    time: "15 min",
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
    time: "10 min",
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
    time: "15 min",
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
    time: "15 min",
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
    time: "10 min",
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
    time: "10 min",
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
    time: "40 min + frío",
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
    time: "10 min",
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
    time: "10 min",
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
    time: "10 min",
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
    time: "40 min",
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
    time: "10 min",
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
    time: "15 min + 4 hr de remojo",
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
    time: "1 hr 45 min",
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
    time: "50 min",
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
    time: "45 min",
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
    time: "1 hr",
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
    time: "40 min",
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
    time: "35 min",
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
    time: "35 min",
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
    time: "30 min",
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
    time: "25 min",
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
    time: "1 hr",
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
    time: "35 min",
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
    time: "3 hr (con levado)",
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
    time: "2 hr 45 min (con levado)",
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
    time: "3 hr (con levado)",
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
    time: "1 hr 15 min",
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
    time: "3 hr (con levado)",
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
  }
);
