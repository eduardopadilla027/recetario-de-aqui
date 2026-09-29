const recipes = [
  // ══════════════════════════════════════
  // ── SOPAS Y CALDOS ──
  // ══════════════════════════════════════
  {
    id: "sopa-pollo",
    category: "sopas",
    name: { es: "Sopa de Pollo con Fideos", en: "Chicken Noodle Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 pechuga de pollo grande",
        "8 tazas de agua",
        "2 papas medianas, peladas y cortadas en cubos",
        "1 zanahoria grande, cortada en ruedas",
        "1 taza de fideos",
        "1 sobre de sazón con culantro y achiote",
        "2 dientes de ajo, machacados",
        "1 ramita de cilantro",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 large chicken breast",
        "8 cups water",
        "2 medium potatoes, peeled and cubed",
        "1 large carrot, sliced into rounds",
        "1 cup thin noodles",
        "1 packet sazón with coriander and annatto",
        "2 garlic cloves, crushed",
        "1 sprig cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el pollo en las 8 tazas de agua con ajo, cilantro y sal por 25 minutos.",
        "Retire el pollo, desmenúcelo y cuele el caldo.",
        "Regrese el caldo al fuego y añada las papas y la zanahoria. Cocine 10 minutos.",
        "Agregue los fideos, el sazón y el pollo desmenuzado. Cocine 8 minutos más.",
        "Ajuste la sal y pimienta. Sirva caliente."
      ],
      en: [
        "Boil the chicken in 8 cups of water with garlic, cilantro, and salt for 25 minutes.",
        "Remove the chicken, shred it, and strain the broth.",
        "Return the broth to heat and add potatoes and carrots. Cook 10 minutes.",
        "Add the noodles, sazón, and shredded chicken. Cook 8 more minutes.",
        "Adjust salt and pepper. Serve hot."
      ]
    }
  },
  {
    id: "sancocho",
    category: "sopas",
    name: { es: "Sancocho Puertorriqueño", en: "Puerto Rican Sancocho" },
    time: "1 hr 30 min",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de carne de res para guisar",
        "½ lb de pollo, cortado en piezas",
        "1 mazorca de maíz, cortada en trozos",
        "2 plátanos verdes, pelados y cortados",
        "1 lb de yautía, pelada y cortada",
        "2 papas grandes, peladas y cortadas",
        "1 calabaza pequeña, pelada y cortada",
        "1 sobre de sazón",
        "Sofrito al gusto",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb beef stew meat",
        "½ lb chicken, cut into pieces",
        "1 ear of corn, cut into chunks",
        "2 green plantains, peeled and cut",
        "1 lb yautía (taro root), peeled and cut",
        "2 large potatoes, peeled and cut",
        "1 small calabaza (pumpkin), peeled and cut",
        "1 packet sazón",
        "Sofrito to taste",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una olla grande, sofría la carne de res con el sofrito y el sazón por 5 minutos.",
        "Añada 12 tazas de agua y el pollo. Hierva y cocine a fuego medio por 30 minutos.",
        "Agregue el maíz, los plátanos verdes y la yautía. Cocine 15 minutos.",
        "Añada las papas y la calabaza. Cocine 20 minutos más o hasta que todo esté tierno.",
        "Ajuste la sal y pimienta. El caldo debe quedar espeso. Sirva caliente."
      ],
      en: [
        "In a large pot, sauté the beef with sofrito and sazón for 5 minutes.",
        "Add 12 cups of water and the chicken. Boil and cook on medium heat for 30 minutes.",
        "Add the corn, green plantains, and yautía. Cook 15 minutes.",
        "Add potatoes and calabaza. Cook 20 more minutes or until everything is tender.",
        "Adjust salt and pepper. The broth should be thick. Serve hot."
      ]
    }
  },
  {
    id: "sopa-platano",
    category: "sopas",
    name: { es: "Sopa de Plátano", en: "Plantain Soup" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "3 plátanos verdes, pelados y cortados en trozos",
        "6 tazas de caldo de pollo",
        "2 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 dientes de ajo, machacados",
        "1 cucharada de aceite de oliva",
        "Sal y pimienta al gusto",
        "Cilantro fresco para decorar"
      ],
      en: [
        "3 green plantains, peeled and cut into chunks",
        "6 cups chicken broth",
        "2 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 garlic cloves, crushed",
        "1 tablespoon olive oil",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite en una olla. Sofría el sofrito y el ajo por 2 minutos.",
        "Añada el caldo de pollo y el sazón. Hierva.",
        "Agregue los plátanos verdes. Cocine a fuego medio por 25 minutos hasta que estén muy blandos.",
        "Con una licuadora de inmersión o en la licuadora, procese hasta obtener una crema suave.",
        "Ajuste la sal y pimienta. Sirva caliente con cilantro fresco."
      ],
      en: [
        "Heat oil in a pot. Sauté sofrito and garlic for 2 minutes.",
        "Add chicken broth and sazón. Bring to a boil.",
        "Add green plantains. Cook on medium heat for 25 minutes until very soft.",
        "Using an immersion blender or regular blender, process until smooth and creamy.",
        "Adjust salt and pepper. Serve hot garnished with fresh cilantro."
      ]
    }
  },
  {
    id: "caldo-santo",
    category: "sopas",
    name: { es: "Caldo Santo", en: "Holy Broth (Lenten Fish Soup)" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de bacalao seco, desalado",
        "1 lb de chillo u otro pescado fresco",
        "2 plátanos verdes, cortados en ruedas gruesas",
        "2 mazorcas de maíz, cortadas en trozos",
        "1 lb de ñame, pelado y cortado",
        "1 lb de yautía blanca, pelada y cortada",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "Jugo de 2 limones",
        "Sal al gusto"
      ],
      en: [
        "1 lb dried codfish, desalted",
        "1 lb red snapper or other fresh fish",
        "2 green plantains, cut into thick rounds",
        "2 ears of corn, cut into chunks",
        "1 lb yam, peeled and cut",
        "1 lb white yautía, peeled and cut",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "Juice of 2 limes",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla grande, hierva 10 tazas de agua con el sofrito y el sazón.",
        "Añada los plátanos, el maíz, el ñame y la yautía. Cocine 20 minutos.",
        "Agregue el bacalao desmenuzado y los trozos de pescado fresco.",
        "Cocine a fuego bajo por 15 minutos más sin revolver mucho para no deshacer el pescado.",
        "Añada el jugo de limón y sal al gusto. Sirva caliente."
      ],
      en: [
        "In a large pot, boil 10 cups of water with sofrito and sazón.",
        "Add plantains, corn, yam, and yautía. Cook 20 minutes.",
        "Add shredded codfish and fresh fish pieces.",
        "Cook on low heat for 15 more minutes without stirring too much to keep fish intact.",
        "Add lime juice and salt to taste. Serve hot."
      ]
    }
  },
  {
    id: "sopa-habichuelas-negras",
    category: "sopas",
    name: { es: "Sopa de Habichuelas Negras", en: "Black Bean Soup" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de habichuelas negras secas (o 2 latas)",
        "1 pimiento verde, picado",
        "1 cebolla grande, picada",
        "4 dientes de ajo, machacados",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de comino",
        "1 cucharadita de orégano",
        "2 hojas de laurel",
        "2 cucharadas de vinagre",
        "Sal y pimienta al gusto",
        "Arroz blanco para acompañar"
      ],
      en: [
        "1 lb dried black beans (or 2 cans)",
        "1 green bell pepper, diced",
        "1 large onion, diced",
        "4 garlic cloves, crushed",
        "2 tablespoons olive oil",
        "1 teaspoon cumin",
        "1 teaspoon oregano",
        "2 bay leaves",
        "2 tablespoons vinegar",
        "Salt and pepper to taste",
        "White rice to serve alongside"
      ]
    },
    steps: {
      es: [
        "Si usa habichuelas secas, remójelas la noche anterior. Hierva hasta que estén blandas (1 hora aproximadamente).",
        "En una olla, caliente el aceite y sofría la cebolla, el pimiento y el ajo por 5 minutos.",
        "Añada el comino, orégano y las hojas de laurel.",
        "Agregue las habichuelas con su líquido. Cocine a fuego medio por 20 minutos.",
        "Maje algunas habichuelas contra la olla para espesar el caldo.",
        "Añada el vinagre, sal y pimienta. Sirva sobre arroz blanco."
      ],
      en: [
        "If using dried beans, soak overnight. Boil until soft (about 1 hour).",
        "In a pot, heat oil and sauté onion, pepper, and garlic for 5 minutes.",
        "Add cumin, oregano, and bay leaves.",
        "Add beans with their liquid. Cook on medium heat for 20 minutes.",
        "Mash some beans against the pot to thicken the broth.",
        "Add vinegar, salt, and pepper. Serve over white rice."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── ARROCES Y HABICHUELAS ──
  // ══════════════════════════════════════
  {
    id: "arroz-habichuelas",
    category: "arroces",
    name: { es: "Arroz Blanco con Habichuelas Rosadas", en: "White Rice with Pink Beans" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "4½ tazas de agua",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de sal",
        "1 lata de habichuelas rosadas (15 oz)",
        "2 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "1 papa pequeña, cortada en cubos",
        "Aceitunas rellenas al gusto"
      ],
      en: [
        "3 cups medium grain rice",
        "4½ cups water",
        "2 tablespoons olive oil",
        "1 teaspoon salt",
        "1 can pink beans (15 oz)",
        "2 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "1 small potato, cubed",
        "Stuffed olives to taste"
      ]
    },
    steps: {
      es: [
        "Para el arroz: caliente el aceite en un caldero, añada el arroz, el agua y la sal. Hierva sin tapar hasta que el agua se absorba.",
        "Tape, baje el fuego al mínimo y cocine por 20 minutos. No destape mientras cocina.",
        "Para las habichuelas: en otra olla, sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada las habichuelas con su líquido, las papas y las aceitunas. Cocine a fuego medio por 20 minutos.",
        "Sirva las habichuelas sobre el arroz blanco."
      ],
      en: [
        "For the rice: heat oil in a caldero (heavy pot), add rice, water, and salt. Boil uncovered until water is absorbed.",
        "Cover, reduce heat to minimum and cook for 20 minutes. Do not uncover while cooking.",
        "For the beans: in another pot, sauté sofrito with sazón and tomato sauce.",
        "Add beans with their liquid, potatoes, and olives. Cook on medium heat for 20 minutes.",
        "Serve the beans over white rice."
      ]
    }
  },
  {
    id: "arroz-gandules",
    category: "arroces",
    name: { es: "Arroz con Gandules", en: "Rice with Pigeon Peas" },
    time: "55 min",
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "1 lata de gandules verdes (15 oz), escurridos",
        "4 tazas de caldo de pollo",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "1 hoja de recao (culantro)",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 cups medium grain rice",
        "1 can green pigeon peas (15 oz), drained",
        "4 cups chicken broth",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "¼ cup stuffed olives",
        "2 tablespoons olive oil",
        "1 recao leaf (culantro)",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero grande, caliente el aceite y sofría el sofrito por 2 minutos.",
        "Añada el sazón, la salsa de tomate, las aceitunas y los gandules. Mezcle bien.",
        "Agregue el caldo de pollo y el recao. Hierva.",
        "Añada el arroz, mezcle una vez y cocine sin tapa hasta que el líquido se absorba.",
        "Tape, baje el fuego al mínimo y cocine 20-25 minutos. Voltee con cuchara antes de servir."
      ],
      en: [
        "In a large caldero, heat oil and sauté sofrito for 2 minutes.",
        "Add sazón, tomato sauce, olives, and pigeon peas. Mix well.",
        "Add chicken broth and recao leaf. Bring to a boil.",
        "Add rice, stir once, and cook uncovered until liquid is absorbed.",
        "Cover, reduce heat to minimum and cook 20-25 minutes. Fold with a spoon before serving."
      ]
    }
  },
  {
    id: "asopao-pollo",
    category: "arroces",
    name: { es: "Asopao de Pollo", en: "Chicken Asopao (Rice Stew)" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de pollo, cortado en piezas",
        "1½ tazas de arroz grano corto",
        "8 tazas de caldo de pollo",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "1 taza de gandules (opcional)",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 pimiento rojo asado, cortado en tiras",
        "Sal, pimienta y orégano al gusto"
      ],
      en: [
        "2 lbs chicken, cut into pieces",
        "1½ cups short grain rice",
        "8 cups chicken broth",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "1 cup pigeon peas (optional)",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "1 roasted red pepper, cut in strips",
        "Salt, pepper, and oregano to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con sal, pimienta, orégano y ajo. Marine por 15 minutos.",
        "En un caldero grande, dore el pollo en aceite. Retire y reserve.",
        "En el mismo caldero, sofría el sofrito, sazón y salsa de tomate por 3 minutos.",
        "Añada el caldo, el pollo, las aceitunas, alcaparras y gandules. Hierva.",
        "Agregue el arroz, baje el fuego a medio y cocine sin tapa por 30 minutos, revolviendo ocasionalmente.",
        "El asopao debe quedar caldoso. Decore con las tiras de pimiento y sirva."
      ],
      en: [
        "Season chicken with salt, pepper, oregano, and garlic. Marinate 15 minutes.",
        "In a large caldero, brown the chicken in oil. Remove and set aside.",
        "In the same pot, sauté sofrito, sazón, and tomato sauce for 3 minutes.",
        "Add broth, chicken, olives, capers, and pigeon peas. Bring to a boil.",
        "Add rice, lower heat to medium and cook uncovered for 30 minutes, stirring occasionally.",
        "Asopao should be soupy. Garnish with pepper strips and serve."
      ]
    }
  },
  {
    id: "arroz-pollo",
    category: "arroces",
    name: { es: "Arroz con Pollo", en: "Chicken and Rice" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "2 lbs de pollo, cortado en piezas",
        "4 tazas de caldo de pollo",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "½ taza de petit pois",
        "1 pimiento rojo asado en tiras",
        "Sal, pimienta y orégano"
      ],
      en: [
        "3 cups medium grain rice",
        "2 lbs chicken, cut into pieces",
        "4 cups chicken broth",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "½ cup petit pois (green peas)",
        "1 roasted red pepper in strips",
        "Salt, pepper, and oregano"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con sal, pimienta, orégano y ajo. Marine 30 minutos.",
        "Dore el pollo en aceite caliente en un caldero grande. Retire.",
        "Sofría el sofrito, sazón y salsa de tomate por 3 minutos.",
        "Añada el caldo, aceitunas, alcaparras y regrese el pollo. Hierva.",
        "Agregue el arroz, revuelva una vez. Cocine sin tapa hasta absorber el líquido.",
        "Tape, baje el fuego y cocine 25 minutos. Decore con pimiento y petit pois."
      ],
      en: [
        "Season chicken with salt, pepper, oregano, and garlic. Marinate 30 minutes.",
        "Brown chicken in hot oil in a large caldero. Remove.",
        "Sauté sofrito, sazón, and tomato sauce for 3 minutes.",
        "Add broth, olives, capers, and return chicken. Bring to a boil.",
        "Add rice, stir once. Cook uncovered until liquid is absorbed.",
        "Cover, lower heat and cook 25 minutes. Garnish with pepper strips and petit pois."
      ]
    }
  },
  {
    id: "arroz-salchichas",
    category: "arroces",
    name: { es: "Arroz con Salchichas", en: "Rice with Vienna Sausages" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de arroz grano mediano",
        "2 latas de salchichas de Viena, cortadas",
        "3 tazas de agua",
        "2 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de aceite vegetal",
        "Sal al gusto"
      ],
      en: [
        "2 cups medium grain rice",
        "2 cans Vienna sausages, sliced",
        "3 cups water",
        "2 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon vegetable oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, caliente el aceite y dore las salchichas ligeramente. Retire.",
        "Sofría el sofrito con el sazón y la salsa de tomate por 2 minutos.",
        "Añada el agua, las aceitunas y sal. Hierva.",
        "Agregue el arroz y las salchichas. Cocine sin tapa hasta que el agua se absorba.",
        "Tape, baje el fuego al mínimo y cocine 20 minutos."
      ],
      en: [
        "In a caldero, heat oil and lightly brown sausages. Remove.",
        "Sauté sofrito with sazón and tomato sauce for 2 minutes.",
        "Add water, olives, and salt. Bring to a boil.",
        "Add rice and sausages. Cook uncovered until water is absorbed.",
        "Cover, reduce heat to minimum and cook 20 minutes."
      ]
    }
  },
  {
    id: "arroz-mamposteao",
    category: "arroces",
    name: { es: "Arroz Mamposteao", en: "Mashed Rice and Beans" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "3 tazas de arroz blanco cocido (del día anterior)",
        "1 lata de habichuelas rojas o rosadas",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de aceite de oliva",
        "4 lonjas de tocino, cortadas (opcional)",
        "Sal al gusto"
      ],
      en: [
        "3 cups cooked white rice (day-old preferred)",
        "1 can red or pink beans",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons olive oil",
        "4 bacon slices, chopped (optional)",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Si usa tocino, fríalo hasta que esté crujiente. Reserve.",
        "En el mismo caldero, sofría el sofrito con el sazón por 2 minutos.",
        "Añada las habichuelas con todo su líquido. Cocine 5 minutos majando algunas.",
        "Agregue el arroz y mezcle vigorosamente, aplastando y combinando con las habichuelas.",
        "Cocine a fuego medio por 5 minutos, revolviendo. Añada el tocino y sirva."
      ],
      en: [
        "If using bacon, fry until crispy. Set aside.",
        "In the same pot, sauté sofrito with sazón for 2 minutes.",
        "Add beans with all their liquid. Cook 5 minutes, mashing some.",
        "Add rice and mix vigorously, mashing and combining with the beans.",
        "Cook on medium heat for 5 minutes, stirring. Add bacon and serve."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── CARNES ──
  // ══════════════════════════════════════
  {
    id: "carne-guisada",
    category: "carnes",
    name: { es: "Carne Guisada Criolla", en: "Creole Beef Stew" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de carne de res para guisar",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "2 papas grandes, cortadas en cubos",
        "1 zanahoria, cortada en ruedas",
        "½ taza de aceitunas rellenas",
        "2 hojas de laurel",
        "2 tazas de agua",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs beef stew meat",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "2 large potatoes, cubed",
        "1 carrot, sliced into rounds",
        "½ cup stuffed olives",
        "2 bay leaves",
        "2 cups water",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone la carne con sal, pimienta y ajo en polvo.",
        "En un caldero, dore la carne en aceite caliente por todos lados. Retire.",
        "En el mismo caldero, sofría el sofrito con el sazón y la salsa de tomate por 3 minutos.",
        "Regrese la carne, añada el agua, las hojas de laurel y las aceitunas. Tape y cocine a fuego bajo por 40 minutos.",
        "Añada las papas y la zanahoria. Cocine 20 minutos más hasta que la carne esté tierna y la salsa espese."
      ],
      en: [
        "Season beef with salt, pepper, and garlic powder.",
        "In a caldero, brown the meat in hot oil on all sides. Remove.",
        "In the same pot, sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Return the meat, add water, bay leaves, and olives. Cover and cook on low for 40 minutes.",
        "Add potatoes and carrots. Cook 20 more minutes until meat is tender and sauce thickens."
      ]
    }
  },
  {
    id: "bistec-encebollado",
    category: "carnes",
    name: { es: "Bistec Encebollado", en: "Steak with Onions" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "4 bistecs de res, finos",
        "2 cebollas grandes, cortadas en aros",
        "3 dientes de ajo, machacados",
        "2 cucharadas de vinagre",
        "2 cucharadas de aceite de oliva",
        "1 sobre de sazón",
        "Sal, pimienta y orégano al gusto"
      ],
      en: [
        "4 thin beef steaks",
        "2 large onions, sliced into rings",
        "3 garlic cloves, crushed",
        "2 tablespoons vinegar",
        "2 tablespoons olive oil",
        "1 packet sazón",
        "Salt, pepper, and oregano to taste"
      ]
    },
    steps: {
      es: [
        "Adobe los bistecs con ajo, vinagre, sal, pimienta y orégano. Marine por 15 minutos.",
        "Caliente el aceite en un sartén grande a fuego alto. Dore los bistecs 2 minutos por cada lado. Retire.",
        "En el mismo sartén, sofría las cebollas con el sazón hasta que estén transparentes.",
        "Regrese los bistecs al sartén, cubra con las cebollas y cocine 3 minutos más."
      ],
      en: [
        "Season steaks with garlic, vinegar, salt, pepper, and oregano. Marinate 15 minutes.",
        "Heat oil in a large skillet on high heat. Brown steaks 2 minutes per side. Remove.",
        "In the same skillet, sauté onions with sazón until translucent.",
        "Return steaks to skillet, cover with onions and cook 3 more minutes."
      ]
    }
  },
  {
    id: "pernil",
    category: "carnes",
    name: { es: "Pernil Asado", en: "Roast Pork Shoulder" },
    time: "5-6 hrs",
    servings: 15,
    ingredients: {
      es: [
        "1 pernil de cerdo (8-10 lbs)",
        "1 cabeza de ajo, pelada",
        "2 cucharadas de orégano seco",
        "2 cucharadas de aceite de oliva",
        "3 cucharadas de vinagre",
        "2 sobres de sazón con achiote",
        "1 cucharada de pimienta en grano",
        "2 cucharaditas de sal",
        "Jugo de 3 limones"
      ],
      en: [
        "1 pork shoulder (8-10 lbs)",
        "1 head of garlic, peeled",
        "2 tablespoons dried oregano",
        "2 tablespoons olive oil",
        "3 tablespoons vinegar",
        "2 packets sazón with annatto",
        "1 tablespoon peppercorns",
        "2 teaspoons salt",
        "Juice of 3 limes"
      ]
    },
    steps: {
      es: [
        "En un pilón o procesador, maje el ajo con el orégano, la sal, la pimienta, el aceite, el vinagre y el sazón para hacer el adobo.",
        "Con un cuchillo, haga incisiones profundas por todo el pernil.",
        "Unte el adobo por dentro de las incisiones y por toda la superficie. Añada el jugo de limón.",
        "Cubra con papel plástico y refrigere por al menos 12 horas (mejor 24 horas).",
        "Precaliente el horno a 350°F. Cubra el pernil con papel de aluminio.",
        "Hornee por 4 horas tapado. Destape y suba a 375°F por 1 hora más hasta que el cuero esté crujiente.",
        "Deje reposar 20 minutos antes de cortar."
      ],
      en: [
        "In a mortar or food processor, crush garlic with oregano, salt, pepper, oil, vinegar, and sazón to make the adobo.",
        "With a knife, make deep incisions all over the pork shoulder.",
        "Rub the adobo into the incisions and all over the surface. Add lime juice.",
        "Cover with plastic wrap and refrigerate at least 12 hours (24 hours is better).",
        "Preheat oven to 350°F. Cover pork with aluminum foil.",
        "Bake covered for 4 hours. Uncover and raise to 375°F for 1 more hour until skin is crispy.",
        "Let rest 20 minutes before carving."
      ]
    }
  },
  {
    id: "chuletas-kan-kan",
    category: "carnes",
    name: { es: "Chuletas Kan Kan", en: "Kan Kan Pork Chops" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "4 chuletas de cerdo gruesas con el cuero",
        "6 dientes de ajo, machacados",
        "2 cucharadas de vinagre",
        "1 cucharadita de orégano seco",
        "1 sobre de sazón",
        "Aceite vegetal para freír",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 thick pork chops with skin on",
        "6 garlic cloves, crushed",
        "2 tablespoons vinegar",
        "1 teaspoon dried oregano",
        "1 packet sazón",
        "Vegetable oil for frying",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Adobe las chuletas con ajo, vinagre, orégano, sazón, sal y pimienta. Marine por al menos 1 hora.",
        "Haga cortes en el cuero de las chuletas para que se inflen al freír.",
        "Caliente abundante aceite a fuego medio-alto en un sartén hondo.",
        "Fría las chuletas por 8-10 minutos por cada lado hasta que el cuero esté inflado y crujiente.",
        "Escurra sobre papel toalla. Sirva con arroz y habichuelas."
      ],
      en: [
        "Season chops with garlic, vinegar, oregano, sazón, salt, and pepper. Marinate at least 1 hour.",
        "Score the skin of the chops so it puffs when frying.",
        "Heat plenty of oil over medium-high heat in a deep skillet.",
        "Fry chops 8-10 minutes per side until skin is puffed and crispy.",
        "Drain on paper towels. Serve with rice and beans."
      ]
    }
  },
  {
    id: "carne-frita",
    category: "carnes",
    name: { es: "Carne Frita con Cebolla", en: "Fried Pork with Onions" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de masa de cerdo, cortada en trozos",
        "6 dientes de ajo, machacados",
        "2 cucharadas de vinagre",
        "1 cucharadita de orégano",
        "1 sobre de sazón",
        "Aceite para freír",
        "2 cebollas, cortadas en aros",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs pork shoulder, cut into chunks",
        "6 garlic cloves, crushed",
        "2 tablespoons vinegar",
        "1 teaspoon oregano",
        "1 packet sazón",
        "Oil for frying",
        "2 onions, sliced into rings",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Adobe la carne con ajo, vinagre, orégano, sazón, sal y pimienta. Marine por 1 hora.",
        "Hierva la carne en agua con sal por 30 minutos hasta que esté tierna. Escurra bien.",
        "En un sartén hondo, caliente aceite y fría la carne hasta dorar y quedar crujiente por fuera.",
        "Retire la carne y en el mismo aceite sofría las cebollas hasta transparentar.",
        "Sirva la carne cubierta con las cebollas. Acompañe con tostones."
      ],
      en: [
        "Season pork with garlic, vinegar, oregano, sazón, salt, and pepper. Marinate 1 hour.",
        "Boil pork in salted water for 30 minutes until tender. Drain well.",
        "In a deep skillet, heat oil and fry pork until golden and crispy outside.",
        "Remove pork and in the same oil sauté onions until translucent.",
        "Serve pork topped with onions. Pair with tostones."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── AVES ──
  // ══════════════════════════════════════
  {
    id: "pollo-fricasé",
    category: "aves",
    name: { es: "Pollo en Fricasé", en: "Chicken Fricassee" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de pollo, cortado en piezas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "3 papas medianas, cortadas en cuartos",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 hoja de laurel",
        "½ taza de vino blanco para cocinar",
        "Sal, pimienta, orégano y ajo al gusto"
      ],
      en: [
        "3 lbs chicken, cut into pieces",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "3 medium potatoes, quartered",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "1 bay leaf",
        "½ cup cooking white wine",
        "Salt, pepper, oregano, and garlic to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con sal, pimienta, orégano y ajo. Marine por 20 minutos.",
        "Dore el pollo en aceite caliente. Retire y reserve.",
        "En el mismo caldero, sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada el vino blanco, las aceitunas, las alcaparras y la hoja de laurel.",
        "Regrese el pollo, añada 1 taza de agua, tape y cocine a fuego bajo por 25 minutos.",
        "Agregue las papas y cocine 20 minutos más hasta que todo esté tierno."
      ],
      en: [
        "Season chicken with salt, pepper, oregano, and garlic. Marinate 20 minutes.",
        "Brown chicken in hot oil. Remove and set aside.",
        "In the same pot, sauté sofrito with sazón and tomato sauce.",
        "Add white wine, olives, capers, and bay leaf.",
        "Return chicken, add 1 cup water, cover and cook on low for 25 minutes.",
        "Add potatoes and cook 20 more minutes until everything is tender."
      ]
    }
  },
  {
    id: "pollo-asado",
    category: "aves",
    name: { es: "Pollo Asado al Horno", en: "Oven Roasted Chicken" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 pollo entero (3-4 lbs)",
        "6 dientes de ajo, machacados",
        "2 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharadita de orégano seco",
        "1 sobre de sazón",
        "Jugo de 1 limón",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 whole chicken (3-4 lbs)",
        "6 garlic cloves, crushed",
        "2 tablespoons olive oil",
        "2 tablespoons vinegar",
        "1 teaspoon dried oregano",
        "1 packet sazón",
        "Juice of 1 lime",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle el ajo, aceite, vinagre, orégano, sazón, limón, sal y pimienta para hacer el adobo.",
        "Unte el pollo por dentro y por fuera con el adobo. Marine en la nevera por al menos 2 horas.",
        "Precaliente el horno a 350°F (175°C).",
        "Coloque el pollo en una bandeja de hornear. Cubra con papel de aluminio.",
        "Hornee por 1 hora tapado. Destape y hornee 30 minutos más hasta dorar.",
        "Deje reposar 10 minutos antes de cortar y servir."
      ],
      en: [
        "Mix garlic, oil, vinegar, oregano, sazón, lime juice, salt, and pepper to make the adobo.",
        "Rub the chicken inside and out with the adobo. Marinate in the fridge for at least 2 hours.",
        "Preheat oven to 350°F (175°C).",
        "Place chicken in a baking pan. Cover with aluminum foil.",
        "Bake covered for 1 hour. Uncover and bake 30 more minutes until golden.",
        "Let rest 10 minutes before cutting and serving."
      ]
    }
  },
  {
    id: "pollo-guisado",
    category: "aves",
    name: { es: "Pollo Guisado", en: "Puerto Rican Stewed Chicken" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de pollo, cortado en piezas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "2 papas grandes, cortadas en cubos",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 taza de agua o caldo",
        "Adobo: ajo, vinagre, orégano, sal, pimienta"
      ],
      en: [
        "3 lbs chicken, cut into pieces",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "2 large potatoes, cubed",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "1 cup water or broth",
        "Adobo: garlic, vinegar, oregano, salt, pepper"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo con ajo machacado, vinagre, orégano, sal y pimienta. Marine 30 minutos.",
        "En un caldero, dore el pollo en aceite por todos lados. Retire.",
        "Sofría el sofrito con el sazón y la salsa de tomate por 3 minutos.",
        "Regrese el pollo, añada el agua, aceitunas y alcaparras. Tape y cocine 20 minutos a fuego medio.",
        "Añada las papas y cocine 15 minutos más. La salsa debe espesar naturalmente."
      ],
      en: [
        "Season chicken with crushed garlic, vinegar, oregano, salt, and pepper. Marinate 30 minutes.",
        "In a caldero, brown chicken in oil on all sides. Remove.",
        "Sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Return chicken, add water, olives, and capers. Cover and cook 20 minutes on medium heat.",
        "Add potatoes and cook 15 more minutes. Sauce should thicken naturally."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── PESCADOS Y MARISCOS ──
  // ══════════════════════════════════════
  {
    id: "bacalao-guisado",
    category: "pescados",
    name: { es: "Bacalao Guisado", en: "Stewed Codfish" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de bacalao seco, desalado y desmenuzado",
        "3 cucharadas de sofrito",
        "2 papas grandes, cortadas en cubos",
        "¼ taza de salsa de tomate",
        "1 sobre de sazón",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "1 cebolla, cortada en aros",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb dried codfish, desalted and shredded",
        "3 tablespoons sofrito",
        "2 large potatoes, cubed",
        "¼ cup tomato sauce",
        "1 packet sazón",
        "½ cup stuffed olives",
        "2 tablespoons olive oil",
        "1 onion, sliced into rings",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Remoje el bacalao en agua por varias horas, cambiando el agua 2-3 veces para desalar.",
        "Hierva el bacalao por 15 minutos. Escurra y desmenuce.",
        "En un caldero, caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada el bacalao, las papas, las aceitunas y 1 taza de agua.",
        "Cocine a fuego medio por 20 minutos hasta que las papas estén tiernas.",
        "Decore con los aros de cebolla y sirva con arroz blanco."
      ],
      en: [
        "Soak codfish in water for several hours, changing water 2-3 times to desalt.",
        "Boil codfish for 15 minutes. Drain and shred.",
        "In a caldero, heat oil and sauté sofrito with sazón and tomato sauce.",
        "Add codfish, potatoes, olives, and 1 cup water.",
        "Cook on medium heat for 20 minutes until potatoes are tender.",
        "Garnish with onion rings and serve with white rice."
      ]
    }
  },
  {
    id: "camarones-ajillo",
    category: "pescados",
    name: { es: "Camarones al Ajillo", en: "Garlic Shrimp" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de camarones grandes, pelados y limpios",
        "8 dientes de ajo, cortados en láminas",
        "¼ taza de aceite de oliva",
        "¼ taza de vino blanco",
        "1 cucharadita de pimentón",
        "Perejil fresco picado",
        "Jugo de 1 limón",
        "Sal y pimienta al gusto",
        "Hojuelas de chile rojo (opcional)"
      ],
      en: [
        "1 lb large shrimp, peeled and cleaned",
        "8 garlic cloves, thinly sliced",
        "¼ cup olive oil",
        "¼ cup white wine",
        "1 teaspoon paprika",
        "Fresh parsley, chopped",
        "Juice of 1 lime",
        "Salt and pepper to taste",
        "Red pepper flakes (optional)"
      ]
    },
    steps: {
      es: [
        "Sazone los camarones con sal, pimienta y limón.",
        "Caliente el aceite de oliva en un sartén a fuego medio. Añada el ajo y sofría hasta dorar ligeramente.",
        "Suba el fuego a alto, añada los camarones y cocine 2 minutos por cada lado.",
        "Añada el vino blanco y el pimentón. Cocine 1 minuto más.",
        "Retire del fuego, espolvoree con perejil y sirva inmediatamente."
      ],
      en: [
        "Season shrimp with salt, pepper, and lime juice.",
        "Heat olive oil in a skillet over medium heat. Add garlic and sauté until lightly golden.",
        "Raise heat to high, add shrimp and cook 2 minutes per side.",
        "Add white wine and paprika. Cook 1 more minute.",
        "Remove from heat, sprinkle with parsley and serve immediately."
      ]
    }
  },
  {
    id: "chillo-frito",
    category: "pescados",
    name: { es: "Chillo Frito Entero", en: "Whole Fried Red Snapper" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1 chillo entero (2-3 lbs), limpio y con escamas",
        "6 dientes de ajo, machacados",
        "Jugo de 3 limones",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "Aceite vegetal para freír",
        "Mojito isleño para servir"
      ],
      en: [
        "1 whole red snapper (2-3 lbs), cleaned and scaled",
        "6 garlic cloves, crushed",
        "Juice of 3 limes",
        "1 teaspoon salt",
        "½ teaspoon pepper",
        "Vegetable oil for frying",
        "Mojito isleño sauce for serving"
      ]
    },
    steps: {
      es: [
        "Haga 3-4 cortes diagonales en cada lado del pescado.",
        "Marine con ajo, limón, sal y pimienta por 30 minutos.",
        "Seque bien el pescado con papel toalla antes de freír.",
        "Caliente abundante aceite a 375°F en un sartén grande y hondo.",
        "Fría el chillo por 6-8 minutos por cada lado hasta que esté dorado y crujiente.",
        "Escurra y sirva con mojito isleño, tostones y ensalada."
      ],
      en: [
        "Make 3-4 diagonal cuts on each side of the fish.",
        "Marinate with garlic, lime, salt, and pepper for 30 minutes.",
        "Pat fish very dry with paper towels before frying.",
        "Heat plenty of oil to 375°F in a large deep skillet.",
        "Fry snapper 6-8 minutes per side until golden and crispy.",
        "Drain and serve with mojito isleño sauce, tostones, and salad."
      ]
    }
  },
  {
    id: "ensalada-pulpo",
    category: "pescados",
    name: { es: "Ensalada de Pulpo", en: "Octopus Salad" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de pulpo, limpio",
        "1 cebolla grande, picada finamente",
        "1 pimiento rojo, picado",
        "1 pimiento verde, picado",
        "¼ taza de aceite de oliva",
        "3 cucharadas de vinagre",
        "2 dientes de ajo, machacados",
        "Aceitunas rellenas al gusto",
        "Cilantro fresco picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs octopus, cleaned",
        "1 large onion, finely diced",
        "1 red bell pepper, diced",
        "1 green bell pepper, diced",
        "¼ cup olive oil",
        "3 tablespoons vinegar",
        "2 garlic cloves, crushed",
        "Stuffed olives to taste",
        "Fresh cilantro, chopped",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo en agua con sal por 45-60 minutos hasta que esté tierno (pruebe con un tenedor).",
        "Escurra y deje enfriar. Corte en trozos pequeños.",
        "En un tazón, combine el pulpo con la cebolla, los pimientos, las aceitunas y el cilantro.",
        "Mezcle el aceite de oliva, el vinagre, el ajo, sal y pimienta para el aderezo.",
        "Vierta el aderezo sobre la ensalada. Mezcle bien.",
        "Refrigere por al menos 1 hora antes de servir para que los sabores se mezclen."
      ],
      en: [
        "Boil octopus in salted water for 45-60 minutes until tender (test with a fork).",
        "Drain and let cool. Cut into small pieces.",
        "In a bowl, combine octopus with onion, peppers, olives, and cilantro.",
        "Mix olive oil, vinegar, garlic, salt, and pepper for the dressing.",
        "Pour dressing over salad. Mix well.",
        "Refrigerate at least 1 hour before serving to let flavors meld."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── ENSALADAS ──
  // ══════════════════════════════════════
  {
    id: "ensalada-papa",
    category: "ensaladas",
    name: { es: "Ensalada de Papa", en: "Puerto Rican Potato Salad" },
    time: "40 min",
    servings: 8,
    ingredients: {
      es: [
        "5 papas grandes, peladas y cortadas en cubos",
        "4 huevos duros, picados",
        "1 taza de mayonesa",
        "1 manzana verde, pelada y cortada en cubos pequeños",
        "½ taza de petit pois (guisantes)",
        "2 cucharadas de aceitunas rellenas, picadas",
        "1 cucharada de vinagre",
        "Sal y pimienta al gusto",
        "Pimiento morrón para decorar"
      ],
      en: [
        "5 large potatoes, peeled and cubed",
        "4 hard-boiled eggs, chopped",
        "1 cup mayonnaise",
        "1 green apple, peeled and diced",
        "½ cup petit pois (green peas)",
        "2 tablespoons stuffed olives, chopped",
        "1 tablespoon vinegar",
        "Salt and pepper to taste",
        "Pimiento strips for garnish"
      ]
    },
    steps: {
      es: [
        "Hierva las papas en agua con sal hasta que estén tiernas pero firmes. Escurra y deje enfriar.",
        "En un tazón grande, combine las papas, los huevos, la manzana, los petit pois y las aceitunas.",
        "Mezcle la mayonesa con el vinagre, sal y pimienta.",
        "Añada el aderezo a la mezcla de papas y revuelva con cuidado.",
        "Refrigere por al menos 1 hora. Decore con pimiento morrón antes de servir."
      ],
      en: [
        "Boil potatoes in salted water until tender but firm. Drain and let cool.",
        "In a large bowl, combine potatoes, eggs, apple, petit pois, and olives.",
        "Mix mayonnaise with vinegar, salt, and pepper.",
        "Add dressing to potato mixture and fold gently.",
        "Refrigerate at least 1 hour. Garnish with pimiento strips before serving."
      ]
    }
  },
  {
    id: "ensalada-bacalao",
    category: "ensaladas",
    name: { es: "Serenata de Bacalao", en: "Codfish Salad (Serenata)" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "½ lb de bacalao seco, desalado",
        "2 aguacates maduros, cortados en lonjas",
        "2 tomates, cortados en ruedas",
        "1 cebolla grande, cortada en aros",
        "2 huevos duros, cortados en ruedas",
        "Aceite de oliva al gusto",
        "Vinagre al gusto",
        "Lechuga para decorar"
      ],
      en: [
        "½ lb dried codfish, desalted",
        "2 ripe avocados, sliced",
        "2 tomatoes, sliced into rounds",
        "1 large onion, sliced into rings",
        "2 hard-boiled eggs, sliced",
        "Olive oil to taste",
        "Vinegar to taste",
        "Lettuce for garnish"
      ]
    },
    steps: {
      es: [
        "Remoje el bacalao la noche anterior. Hierva por 15 minutos, escurra y desmenuce.",
        "En una fuente, coloque la lechuga como base.",
        "Arregle el bacalao, los aguacates, los tomates, la cebolla y los huevos de forma decorativa.",
        "Rocíe con aceite de oliva y vinagre al gusto. Sirva a temperatura ambiente."
      ],
      en: [
        "Soak codfish overnight. Boil 15 minutes, drain and shred.",
        "On a platter, place lettuce as a base.",
        "Arrange codfish, avocados, tomatoes, onion, and eggs decoratively.",
        "Drizzle with olive oil and vinegar to taste. Serve at room temperature."
      ]
    }
  },
  {
    id: "ensalada-coditos",
    category: "ensaladas",
    name: { es: "Ensalada de Coditos", en: "Macaroni Salad" },
    time: "30 min",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de coditos (macarrones), cocidos y escurridos",
        "1 taza de mayonesa",
        "3 huevos duros, picados",
        "1 manzana verde, pelada y cortada en cubitos",
        "½ taza de jamón cocido, cortado en cubitos",
        "¼ taza de aceitunas rellenas, picadas",
        "½ taza de petit pois",
        "1 cucharada de mostaza",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb elbow macaroni, cooked and drained",
        "1 cup mayonnaise",
        "3 hard-boiled eggs, chopped",
        "1 green apple, peeled and diced",
        "½ cup cooked ham, diced",
        "¼ cup stuffed olives, chopped",
        "½ cup petit pois",
        "1 tablespoon mustard",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Cocine los coditos al dente según las instrucciones del paquete. Escurra y deje enfriar.",
        "En un tazón grande, mezcle la mayonesa con la mostaza, sal y pimienta.",
        "Añada los coditos fríos, los huevos, la manzana, el jamón, las aceitunas y los petit pois.",
        "Mezcle todo con cuidado. Ajuste la sazón.",
        "Refrigere por al menos 2 horas antes de servir."
      ],
      en: [
        "Cook macaroni al dente according to package directions. Drain and let cool.",
        "In a large bowl, mix mayonnaise with mustard, salt, and pepper.",
        "Add cooled macaroni, eggs, apple, ham, olives, and petit pois.",
        "Fold everything together gently. Adjust seasoning.",
        "Refrigerate at least 2 hours before serving."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── VEGETALES Y VIANDAS ──
  // ══════════════════════════════════════
  {
    id: "tostones",
    category: "vegetales",
    name: { es: "Tostones de Plátano Verde", en: "Fried Green Plantain Tostones" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "3 plátanos verdes",
        "Aceite vegetal para freír",
        "Sal al gusto",
        "Agua con ajo y sal para remojar"
      ],
      en: [
        "3 green plantains",
        "Vegetable oil for frying",
        "Salt to taste",
        "Garlic-salt water for soaking"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos y córtelos en ruedas de 1 pulgada.",
        "Caliente abundante aceite a fuego medio-alto.",
        "Fría las ruedas por 3-4 minutos hasta que estén ligeramente doradas. Retire.",
        "Aplaste cada rueda con un tostonero o el fondo de un vaso.",
        "Remoje brevemente en agua con ajo y sal.",
        "Fría nuevamente hasta que estén dorados y crujientes. Escurra y sale."
      ],
      en: [
        "Peel plantains and cut into 1-inch rounds.",
        "Heat plenty of oil over medium-high heat.",
        "Fry rounds for 3-4 minutes until lightly golden. Remove.",
        "Flatten each round with a tostonera or bottom of a glass.",
        "Briefly soak in garlic-salt water.",
        "Fry again until golden and crispy. Drain and salt."
      ]
    }
  },
  {
    id: "mofongo",
    category: "vegetales",
    name: { es: "Mofongo", en: "Mofongo (Mashed Plantain)" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "3 plátanos verdes",
        "6 dientes de ajo, machacados",
        "4 cucharadas de aceite de oliva",
        "Chicharrones de cerdo, triturados",
        "Caldo de pollo para servir",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "3 green plantains",
        "6 garlic cloves, crushed",
        "4 tablespoons olive oil",
        "Pork cracklings, crushed",
        "Chicken broth for serving",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele y corte los plátanos en ruedas. Fría en aceite caliente hasta que estén dorados.",
        "En un pilón (mortero), mezcle el ajo con el aceite de oliva.",
        "Añada las ruedas de plátano fritas y los chicharrones al pilón.",
        "Maje todo junto vigorosamente hasta obtener una masa uniforme.",
        "Forme bolas o moldee en un tazón. Sirva con caldo de pollo caliente al lado."
      ],
      en: [
        "Peel and slice plantains. Fry in hot oil until golden.",
        "In a pilón (mortar), mix garlic with olive oil.",
        "Add fried plantain rounds and pork cracklings to the mortar.",
        "Mash everything together vigorously until you get a uniform mass.",
        "Form into balls or mold in a bowl. Serve with hot chicken broth on the side."
      ]
    }
  },
  {
    id: "amarillos",
    category: "vegetales",
    name: { es: "Amarillos Fritos (Maduros)", en: "Fried Sweet Plantains" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "3 plátanos maduros (con cáscara negra)",
        "Aceite vegetal para freír",
        "Pizca de sal (opcional)"
      ],
      en: [
        "3 ripe plantains (with black skin)",
        "Vegetable oil for frying",
        "Pinch of salt (optional)"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos maduros y córtelos en diagonal en lonjas de ½ pulgada.",
        "Caliente aceite a fuego medio en un sartén.",
        "Fría las lonjas 2-3 minutos por cada lado hasta que estén doradas y caramelizadas.",
        "Escurra sobre papel toalla. Sirva como acompañante."
      ],
      en: [
        "Peel ripe plantains and cut diagonally into ½-inch slices.",
        "Heat oil over medium heat in a skillet.",
        "Fry slices 2-3 minutes per side until golden and caramelized.",
        "Drain on paper towels. Serve as a side dish."
      ]
    }
  },
  {
    id: "guineos-escabeche",
    category: "vegetales",
    name: { es: "Guineos en Escabeche", en: "Pickled Green Bananas" },
    time: "1 hr + reposo",
    servings: 8,
    ingredients: {
      es: [
        "12 guineos verdes",
        "1 cucharada de sal (para el agua)",
        "1 cucharada de aceite (para el agua)",
        "1 taza de aceite de oliva",
        "¾ taza de vinagre",
        "2 cebollas grandes, cortadas en aros",
        "6 dientes de ajo, en láminas",
        "10 granos de pimienta",
        "3 hojas de laurel",
        "½ taza de aceitunas rellenas",
        "1 cucharadita de sal"
      ],
      en: [
        "12 green bananas",
        "1 tablespoon salt (for the water)",
        "1 tablespoon oil (for the water)",
        "1 cup olive oil",
        "¾ cup vinegar",
        "2 large onions, sliced into rings",
        "6 garlic cloves, sliced",
        "10 peppercorns",
        "3 bay leaves",
        "½ cup stuffed olives",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Corte las puntas de los guineos y hágales un corte a lo largo en la cáscara, sin llegar a la pulpa.",
        "Hiérvalos con cáscara en agua con 1 cucharada de sal y 1 de aceite (así no se manchan) por 15-20 minutos, hasta que estén tiernos pero firmes.",
        "Escúrralos, pélelos mientras estén tibios y córtelos en ruedas de ½ pulgada.",
        "Escabeche: caliente el aceite de oliva a fuego bajo y cocine la cebolla, el ajo, la pimienta y el laurel por 10 minutos, sin que doren.",
        "Añada el vinagre, las aceitunas y la sal. Deje que hierva 1 minuto.",
        "Coloque los guineos en un envase de cristal y vierta el escabeche caliente por encima.",
        "Tape y deje reposar al menos 4 horas; es mejor de un día para otro. Sirva a temperatura ambiente, como acompañante o de picadera."
      ],
      en: [
        "Cut off the ends of the green bananas and slit the skin lengthwise without cutting into the flesh.",
        "Boil them in their skins in water with 1 tablespoon salt and 1 of oil (this keeps them from staining) for 15-20 minutes, until tender but firm.",
        "Drain, peel while warm, and cut into ½-inch rounds.",
        "Escabeche: heat the olive oil on low and cook the onion, garlic, peppercorns, and bay leaves for 10 minutes without browning.",
        "Add the vinegar, olives, and salt. Let it boil 1 minute.",
        "Place the bananas in a glass container and pour the hot escabeche over them.",
        "Cover and let rest at least 4 hours; overnight is best. Serve at room temperature, as a side or appetizer."
      ]
    }
  },
  {
    id: "yuca-mojo",
    category: "vegetales",
    name: { es: "Yuca al Mojo", en: "Yuca with Garlic Sauce" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de yuca, pelada y cortada en trozos",
        "6 dientes de ajo, cortados en láminas",
        "½ taza de aceite de oliva",
        "Jugo de 2 limones",
        "1 cebolla mediana, cortada en aros",
        "Sal al gusto",
        "Perejil fresco picado"
      ],
      en: [
        "2 lbs yuca (cassava), peeled and cut into chunks",
        "6 garlic cloves, thinly sliced",
        "½ cup olive oil",
        "Juice of 2 limes",
        "1 medium onion, sliced into rings",
        "Salt to taste",
        "Fresh parsley, chopped"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con sal por 25 minutos hasta que esté tierna. Escurra.",
        "Retire la fibra central de cada trozo de yuca.",
        "En un sartén, caliente el aceite de oliva y dore el ajo hasta que esté fragante.",
        "Añada la cebolla y sofría 2 minutos. Retire del fuego.",
        "Agregue el jugo de limón y sal al aceite.",
        "Vierta el mojo caliente sobre la yuca. Espolvoree con perejil."
      ],
      en: [
        "Boil yuca in salted water for 25 minutes until tender. Drain.",
        "Remove the central fiber from each yuca piece.",
        "In a skillet, heat olive oil and brown garlic until fragrant.",
        "Add onion and sauté 2 minutes. Remove from heat.",
        "Add lime juice and salt to the oil.",
        "Pour the hot mojo over the yuca. Sprinkle with parsley."
      ]
    }
  },
  {
    id: "pasteles",
    category: "vegetales",
    name: { es: "Pasteles de Masa", en: "Pasteles (Plantain & Meat Bundles)" },
    time: "4 hrs",
    servings: 24,
    ingredients: {
      es: [
        "Masa: 12 guineos verdes",
        "2 plátanos verdes",
        "2 lbs de yautía blanca",
        "1 lb de calabaza",
        "½ taza de leche",
        "1 taza del caldo del relleno",
        "½ taza de aceite con achiote (más para untar las hojas)",
        "2 cucharaditas de sal",
        "Relleno: 3 lbs de masitas de cerdo (paleta) en cubitos pequeños",
        "1 cucharada de adobo",
        "½ taza de sofrito",
        "2 sobres de sazón con achiote",
        "½ taza de salsa de tomate",
        "½ taza de aceitunas rellenas, picadas",
        "2 cucharadas de alcaparras",
        "1 lata de garbanzos (15 oz), escurridos",
        "¼ taza de pasas (opcional)",
        "1 cucharadita de orégano",
        "Para envolver: 24 hojas de plátano limpias y pasadas por el fuego",
        "Papel de pastel",
        "Hilo de cocina"
      ],
      en: [
        "Masa: 12 green bananas",
        "2 green plantains",
        "2 lbs white yautía (taro)",
        "1 lb calabaza (West Indian pumpkin)",
        "½ cup milk",
        "1 cup broth from the filling",
        "½ cup annatto oil (plus more for brushing the leaves)",
        "2 teaspoons salt",
        "Filling: 3 lbs pork shoulder, in small cubes",
        "1 tablespoon adobo seasoning",
        "½ cup sofrito",
        "2 packets sazón with annatto",
        "½ cup tomato sauce",
        "½ cup stuffed olives, chopped",
        "2 tablespoons capers",
        "1 can chickpeas (15 oz), drained",
        "¼ cup raisins (optional)",
        "1 teaspoon oregano",
        "For wrapping: 24 banana leaves, cleaned and passed over a flame",
        "Pastel paper",
        "Kitchen twine"
      ]
    },
    steps: {
      es: [
        "Relleno: adobe el cerdo con adobo y orégano. Dórelo en un caldero con un poco de aceite con achiote.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas, las alcaparras y 2 tazas de agua. Tape y cocine a fuego bajo 45 minutos.",
        "Agregue los garbanzos y las pasas y cocine 10 minutos más. Cuele y reserve 1 taza del caldo. Deje enfriar el relleno.",
        "Masa: pele los guineos y plátanos (úntese aceite en las manos para que no manchen). Pele la yautía y la calabaza.",
        "Ralle todo por el lado fino del guayo, o córtelo en trozos y páselo por el procesador hasta que quede una pasta suave.",
        "Mezcle la masa con la leche, el caldo reservado, el aceite con achiote y la sal. Debe quedar suave, como un puré espeso y de color anaranjado.",
        "Arme: coloque un papel de pastel y encima una hoja de plátano untada con aceite con achiote.",
        "Ponga ⅓ de taza de masa en el centro y extiéndala en un rectángulo fino. Coloque 2 cucharadas de relleno en el centro.",
        "Doble la hoja por la mitad para que la masa cubra el relleno. Luego envuelva con el papel como un sobre.",
        "Amarre los pasteles en pares, con las dobleces hacia adentro. Puede congelarlos crudos hasta por 3 meses.",
        "Hierva abundante agua con sal. Añada los pasteles y cocine 1 hora (1 hora 15 minutos si están congelados).",
        "Escúrralos, córteles el hilo y desenvuélvalos en el plato. Sirva con arroz con gandules y pique."
      ],
      en: [
        "Filling: season the pork with adobo and oregano. Brown it in a caldero with a little annatto oil.",
        "Add sofrito, sazón, tomato sauce, olives, capers, and 2 cups water. Cover and cook on low 45 minutes.",
        "Add chickpeas and raisins and cook 10 more minutes. Strain and reserve 1 cup of the broth. Let the filling cool.",
        "Masa: peel the green bananas and plantains (oil your hands so they don't stain). Peel the yautía and calabaza.",
        "Grate everything on the fine side of the grater, or cut into chunks and process until you get a smooth paste.",
        "Mix the masa with the milk, reserved broth, annatto oil, and salt. It should be soft, like a thick orange purée.",
        "Assemble: lay down a sheet of pastel paper and on it a banana leaf brushed with annatto oil.",
        "Place ⅓ cup of masa in the center and spread it into a thin rectangle. Put 2 tablespoons of filling in the center.",
        "Fold the leaf in half so the masa covers the filling. Then wrap in the paper like an envelope.",
        "Tie the pasteles in pairs, folded sides facing in. You can freeze them raw for up to 3 months.",
        "Bring plenty of salted water to a boil. Add the pasteles and cook 1 hour (1 hour 15 minutes if frozen).",
        "Drain, cut the twine, and unwrap on the plate. Serve with rice and pigeon peas and hot sauce."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── POSTRES ──
  // ══════════════════════════════════════
  {
    id: "flan",
    category: "postres",
    name: { es: "Flan de Queso", en: "Cream Cheese Flan" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 paquete de queso crema (8 oz)",
        "1 lata de leche evaporada (12 oz)",
        "1 lata de leche condensada (14 oz)",
        "5 huevos",
        "1 cucharadita de vainilla",
        "1 taza de azúcar para el caramelo"
      ],
      en: [
        "1 package cream cheese (8 oz)",
        "1 can evaporated milk (12 oz)",
        "1 can condensed milk (14 oz)",
        "5 eggs",
        "1 teaspoon vanilla",
        "1 cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Prepare el caramelo: derrita el azúcar en un molde redondo a fuego medio, moviendo hasta que se dore. Cubra todo el fondo.",
        "En la licuadora, mezcle el queso crema, las leches, los huevos y la vainilla hasta que esté suave.",
        "Vierta la mezcla sobre el caramelo.",
        "Cocine en baño de María en el horno a 350°F por 1 hora o hasta que al insertar un palillo salga limpio.",
        "Deje enfriar completamente. Refrigere por al menos 4 horas.",
        "Voltee sobre un plato para servir."
      ],
      en: [
        "Make the caramel: melt sugar in a round mold over medium heat, stirring until golden brown. Coat the entire bottom.",
        "In a blender, mix cream cheese, both milks, eggs, and vanilla until smooth.",
        "Pour mixture over the caramel.",
        "Bake in a water bath (baño de María) at 350°F for 1 hour or until a toothpick comes out clean.",
        "Let cool completely. Refrigerate at least 4 hours.",
        "Flip onto a serving plate to serve."
      ]
    }
  },
  {
    id: "tembleque",
    category: "postres",
    name: { es: "Tembleque", en: "Coconut Pudding (Tembleque)" },
    time: "30 min",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de leche de coco (13.5 oz cada una)",
        "½ taza de azúcar",
        "½ taza de maicena",
        "¼ cucharadita de sal",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cans coconut milk (13.5 oz each)",
        "½ cup sugar",
        "½ cup cornstarch",
        "¼ teaspoon salt",
        "1 teaspoon vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle la leche de coco, el azúcar, la maicena y la sal en frío.",
        "Cocine a fuego medio, revolviendo constantemente con una cuchara de madera.",
        "Cuando espese y hierva, añada la vainilla. Cocine 2 minutos más.",
        "Vierta en un molde humedecido con agua. Deje enfriar.",
        "Refrigere por al menos 4 horas hasta que cuaje.",
        "Desmolde y espolvoree con canela en polvo."
      ],
      en: [
        "In a pot, mix coconut milk, sugar, cornstarch, and salt while cold.",
        "Cook over medium heat, stirring constantly with a wooden spoon.",
        "When it thickens and boils, add vanilla. Cook 2 more minutes.",
        "Pour into a mold rinsed with water. Let cool.",
        "Refrigerate at least 4 hours until set.",
        "Unmold and sprinkle with ground cinnamon."
      ]
    }
  },
  {
    id: "arroz-dulce",
    category: "postres",
    name: { es: "Arroz con Dulce", en: "Sweet Rice Pudding" },
    time: "1 hr 30 min",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de arroz grano corto",
        "4 tazas de leche de coco",
        "4 tazas de agua",
        "2 tazas de azúcar",
        "1 raja de canela",
        "6 clavos de olor",
        "1 cucharadita de jengibre fresco rallado",
        "½ taza de pasas",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cups short grain rice",
        "4 cups coconut milk",
        "4 cups water",
        "2 cups sugar",
        "1 cinnamon stick",
        "6 whole cloves",
        "1 teaspoon fresh grated ginger",
        "½ cup raisins",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Remoje el arroz en agua por 30 minutos. Escurra.",
        "En una olla grande, hierva las 4 tazas de agua con la canela, los clavos y el jengibre por 10 minutos. Cuele.",
        "En la misma olla, añada el arroz y el agua de especias. Cocine a fuego medio hasta que el arroz absorba el agua.",
        "Añada la leche de coco y el azúcar. Cocine a fuego bajo, revolviendo frecuentemente por 45 minutos.",
        "Añada las pasas en los últimos 10 minutos.",
        "El arroz debe quedar espeso y cremoso. Sirva en platos y espolvoree con canela."
      ],
      en: [
        "Soak rice in water for 30 minutes. Drain.",
        "In a large pot, boil 4 cups water with cinnamon, cloves, and ginger for 10 minutes. Strain.",
        "In the same pot, add rice and spiced water. Cook on medium heat until rice absorbs the water.",
        "Add coconut milk and sugar. Cook on low heat, stirring frequently for 45 minutes.",
        "Add raisins in the last 10 minutes.",
        "Rice should be thick and creamy. Serve on plates and sprinkle with cinnamon."
      ]
    }
  },
  {
    id: "budin-pan",
    category: "postres",
    name: { es: "Budín de Pan", en: "Puerto Rican Bread Pudding" },
    time: "1 hr 15 min",
    servings: 10,
    ingredients: {
      es: [
        "1 pan sobao grande (o pan de agua), cortado en trozos",
        "1 lata de leche evaporada (12 oz)",
        "1 lata de leche condensada (14 oz)",
        "1 taza de leche regular",
        "4 huevos",
        "½ taza de pasas",
        "2 cucharadas de mantequilla, derretida",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela",
        "1 taza de azúcar para el caramelo"
      ],
      en: [
        "1 large pan sobao (or white bread), torn into pieces",
        "1 can evaporated milk (12 oz)",
        "1 can condensed milk (14 oz)",
        "1 cup regular milk",
        "4 eggs",
        "½ cup raisins",
        "2 tablespoons butter, melted",
        "1 teaspoon vanilla",
        "1 teaspoon cinnamon",
        "1 cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en las tres leches combinadas por 30 minutos hasta que se ablande.",
        "Prepare el caramelo derritiendo el azúcar en el molde. Cubra el fondo.",
        "Aplaste el pan remojado con las manos o un tenedor.",
        "Añada los huevos, la mantequilla, vainilla, canela y pasas. Mezcle bien.",
        "Vierta la mezcla sobre el caramelo.",
        "Hornee a 350°F en baño de María por 1 hora o hasta que esté firme.",
        "Deje enfriar, refrigere y voltee sobre un plato para servir."
      ],
      en: [
        "Soak bread in the three combined milks for 30 minutes until soft.",
        "Make caramel by melting sugar in the mold. Coat the bottom.",
        "Mash the soaked bread with your hands or a fork.",
        "Add eggs, butter, vanilla, cinnamon, and raisins. Mix well.",
        "Pour mixture over the caramel.",
        "Bake at 350°F in a water bath for 1 hour or until firm.",
        "Let cool, refrigerate, and flip onto a plate to serve."
      ]
    }
  },
  {
    id: "majarete",
    category: "postres",
    name: { es: "Majarete", en: "Corn Pudding (Majarete)" },
    time: "40 min",
    servings: 8,
    ingredients: {
      es: [
        "6 mazorcas de maíz tierno, ralladas",
        "1 lata de leche de coco (13.5 oz)",
        "½ taza de azúcar",
        "½ cucharadita de sal",
        "1 cucharadita de vainilla",
        "1 raja de canela",
        "Canela en polvo para decorar"
      ],
      en: [
        "6 ears of fresh corn, grated",
        "1 can coconut milk (13.5 oz)",
        "½ cup sugar",
        "½ teaspoon salt",
        "1 teaspoon vanilla",
        "1 cinnamon stick",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Ralle las mazorcas de maíz y exprima para obtener la leche de maíz. Cuele.",
        "En una olla, combine la leche de maíz con la leche de coco, el azúcar, la sal y la canela en raja.",
        "Cocine a fuego medio, revolviendo constantemente por 20-25 minutos hasta que espese.",
        "Retire la canela en raja. Añada la vainilla.",
        "Vierta en moldes individuales. Deje enfriar.",
        "Refrigere y espolvoree con canela en polvo antes de servir."
      ],
      en: [
        "Grate corn ears and squeeze to extract corn milk. Strain.",
        "In a pot, combine corn milk with coconut milk, sugar, salt, and cinnamon stick.",
        "Cook over medium heat, stirring constantly for 20-25 minutes until thick.",
        "Remove cinnamon stick. Add vanilla.",
        "Pour into individual molds. Let cool.",
        "Refrigerate and sprinkle with ground cinnamon before serving."
      ]
    }
  },
  {
    id: "cazuela",
    category: "postres",
    name: { es: "Cazuela", en: "Sweet Pumpkin & Coconut Casserole" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "2 lbs de calabaza, pelada y cortada",
        "2 lbs de batata (boniato), pelada y cortada",
        "1 lata de leche de coco (13.5 oz)",
        "1 taza de azúcar",
        "4 huevos",
        "2 cucharadas de mantequilla",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "½ cucharadita de jengibre",
        "½ taza de harina de trigo"
      ],
      en: [
        "2 lbs calabaza (pumpkin), peeled and cut",
        "2 lbs sweet potato, peeled and cut",
        "1 can coconut milk (13.5 oz)",
        "1 cup sugar",
        "4 eggs",
        "2 tablespoons butter",
        "1 teaspoon vanilla",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "½ teaspoon ginger",
        "½ cup all-purpose flour"
      ]
    },
    steps: {
      es: [
        "Hierva la calabaza y la batata hasta que estén muy blandas. Escurra y maje hasta formar un puré.",
        "Añada la leche de coco, el azúcar, los huevos, la mantequilla y la vainilla. Mezcle bien.",
        "Agregue la canela, nuez moscada, jengibre y la harina. Bata hasta obtener una mezcla suave.",
        "Vierta en un molde engrasado.",
        "Hornee a 350°F por 1 hora o hasta que esté firme y dorado por encima.",
        "Deje enfriar, corte en cuadros y sirva."
      ],
      en: [
        "Boil calabaza and sweet potato until very soft. Drain and mash into a purée.",
        "Add coconut milk, sugar, eggs, butter, and vanilla. Mix well.",
        "Add cinnamon, nutmeg, ginger, and flour. Beat until smooth.",
        "Pour into a greased baking dish.",
        "Bake at 350°F for 1 hour or until firm and golden on top.",
        "Let cool, cut into squares, and serve."
      ]
    }
  },
  {
    id: "bizcocho-ron",
    category: "postres",
    name: { es: "Bizcocho de Ron", en: "Puerto Rican Rum Cake" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "1 caja de mezcla de bizcocho amarillo",
        "1 paquete de pudín de vainilla instantáneo",
        "4 huevos",
        "½ taza de agua fría",
        "½ taza de aceite vegetal",
        "½ taza de ron oscuro",
        "1 taza de nueces picadas",
        "Glaseado: ½ taza de mantequilla, 1 taza de azúcar, ¼ taza de agua, ½ taza de ron"
      ],
      en: [
        "1 box yellow cake mix",
        "1 package instant vanilla pudding",
        "4 eggs",
        "½ cup cold water",
        "½ cup vegetable oil",
        "½ cup dark rum",
        "1 cup chopped walnuts",
        "Glaze: ½ cup butter, 1 cup sugar, ¼ cup water, ½ cup rum"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 325°F. Engrase y enharine un molde Bundt. Esparza las nueces en el fondo.",
        "Mezcle la harina de bizcocho, el pudín, los huevos, el agua, el aceite y el ron. Bata 2 minutos.",
        "Vierta la mezcla sobre las nueces en el molde.",
        "Hornee por 1 hora o hasta que al insertar un palillo salga limpio.",
        "Para el glaseado: derrita la mantequilla, añada el azúcar y el agua. Hierva 5 minutos. Retire y añada el ron.",
        "Pique el bizcocho con un tenedor y vierta el glaseado caliente por encima. Deje absorber.",
        "Voltee sobre un plato después de 20 minutos."
      ],
      en: [
        "Preheat oven to 325°F. Grease and flour a Bundt pan. Spread walnuts on the bottom.",
        "Mix cake mix, pudding, eggs, water, oil, and rum. Beat 2 minutes.",
        "Pour batter over the walnuts in the pan.",
        "Bake for 1 hour or until a toothpick comes out clean.",
        "For the glaze: melt butter, add sugar and water. Boil 5 minutes. Remove and add rum.",
        "Poke the cake with a fork and pour the hot glaze over it. Let it absorb.",
        "Flip onto a plate after 20 minutes."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── BEBIDAS ──
  // ══════════════════════════════════════
  {
    id: "coquito",
    category: "bebidas",
    name: { es: "Coquito", en: "Coconut Eggnog (Coquito)" },
    time: "15 min",
    servings: 12,
    ingredients: {
      es: [
        "2 latas de leche de coco (13.5 oz)",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de nuez moscada",
        "Ron blanco al gusto (opcional)",
        "Canela en raja para servir"
      ],
      en: [
        "2 cans coconut milk (13.5 oz)",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "1 teaspoon vanilla",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon nutmeg",
        "White rum to taste (optional)",
        "Cinnamon sticks for serving"
      ]
    },
    steps: {
      es: [
        "En una licuadora, combine la leche de coco, la leche condensada y la leche evaporada.",
        "Añada la vainilla, la canela y la nuez moscada. Licúe hasta que esté suave.",
        "Añada el ron al gusto si desea. Mezcle.",
        "Vierta en botellas de cristal. Refrigere por al menos 4 horas.",
        "Sirva bien frío con una raja de canela en cada vaso. Agite antes de servir."
      ],
      en: [
        "In a blender, combine coconut milk, condensed milk, and evaporated milk.",
        "Add vanilla, cinnamon, and nutmeg. Blend until smooth.",
        "Add rum to taste if desired. Mix.",
        "Pour into glass bottles. Refrigerate at least 4 hours.",
        "Serve very cold with a cinnamon stick in each glass. Shake before serving."
      ]
    }
  },
  {
    id: "limber-coco",
    category: "bebidas",
    name: { es: "Limber de Coco", en: "Coconut Ice Pop (Limber)" },
    time: "10 min + congelación",
    servings: 10,
    ingredients: {
      es: [
        "1 lata de leche de coco (13.5 oz)",
        "1 lata de leche condensada (14 oz)",
        "2 tazas de agua",
        "½ cucharadita de vainilla",
        "Pizca de canela"
      ],
      en: [
        "1 can coconut milk (13.5 oz)",
        "1 can condensed milk (14 oz)",
        "2 cups water",
        "½ teaspoon vanilla",
        "Pinch of cinnamon"
      ]
    },
    steps: {
      es: [
        "Mezcle todos los ingredientes en una licuadora hasta que estén bien combinados.",
        "Vierta la mezcla en vasitos plásticos pequeños.",
        "Congele por al menos 4 horas o hasta que estén sólidos.",
        "Para servir, deje reposar 2 minutos fuera del congelador y disfrute."
      ],
      en: [
        "Blend all ingredients in a blender until well combined.",
        "Pour mixture into small plastic cups.",
        "Freeze for at least 4 hours or until solid.",
        "To serve, let sit 2 minutes out of the freezer and enjoy."
      ]
    }
  },
  {
    id: "champola",
    category: "bebidas",
    name: { es: "Champola de Guanábana", en: "Soursop Smoothie" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de pulpa de guanábana (fresca o congelada)",
        "1 lata de leche evaporada (12 oz)",
        "½ taza de azúcar",
        "2 tazas de hielo",
        "1 taza de agua fría",
        "½ cucharadita de vainilla"
      ],
      en: [
        "2 cups soursop pulp (fresh or frozen)",
        "1 can evaporated milk (12 oz)",
        "½ cup sugar",
        "2 cups ice",
        "1 cup cold water",
        "½ teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Combine la pulpa de guanábana con la leche evaporada, el azúcar y el agua en la licuadora.",
        "Añada la vainilla y el hielo.",
        "Licúe hasta obtener una consistencia suave y cremosa.",
        "Pruebe y ajuste el azúcar. Sirva inmediatamente bien frío."
      ],
      en: [
        "Combine soursop pulp with evaporated milk, sugar, and water in a blender.",
        "Add vanilla and ice.",
        "Blend until smooth and creamy.",
        "Taste and adjust sugar. Serve immediately, very cold."
      ]
    }
  },
  {
    id: "jugo-parcha",
    category: "jugos",
    name: { es: "Jugo de Parcha", en: "Passion Fruit Juice" },
    time: "10 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de pulpa de parcha (maracuyá)",
        "6 tazas de agua fría",
        "¾ taza de azúcar (ajustar al gusto)",
        "Hielo para servir"
      ],
      en: [
        "1 cup passion fruit pulp",
        "6 cups cold water",
        "¾ cup sugar (adjust to taste)",
        "Ice for serving"
      ]
    },
    steps: {
      es: [
        "Extraiga la pulpa de las parchas (si son frescas) o use pulpa congelada.",
        "Mezcle la pulpa con el agua y el azúcar en una jarra.",
        "Revuelva bien hasta disolver el azúcar. Cuele si desea quitar las semillas.",
        "Sirva con abundante hielo."
      ],
      en: [
        "Extract pulp from passion fruits (if fresh) or use frozen pulp.",
        "Mix pulp with water and sugar in a pitcher.",
        "Stir well until sugar dissolves. Strain if you want to remove seeds.",
        "Serve with plenty of ice."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── CÓCTELES Y TRAGOS ──
  // ══════════════════════════════════════
  {
    id: "pina-colada",
    category: "cocteles",
    name: { es: "Piña Colada", en: "Piña Colada" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "2 oz de ron blanco puertorriqueño",
        "4 oz de crema de coco (Coco López)",
        "4 oz de jugo de piña",
        "2 tazas de hielo",
        "Rodaja de piña y cereza para decorar"
      ],
      en: [
        "2 oz Puerto Rican white rum",
        "4 oz cream of coconut (Coco López)",
        "4 oz pineapple juice",
        "2 cups ice",
        "Pineapple slice and cherry for garnish"
      ]
    },
    steps: {
      es: [
        "Combine el ron, la crema de coco, el jugo de piña y el hielo en la licuadora.",
        "Licúe hasta obtener una consistencia suave y cremosa.",
        "Sirva en vasos altos o en una piña vaciada.",
        "Decore con una rodaja de piña y una cereza."
      ],
      en: [
        "Combine rum, cream of coconut, pineapple juice, and ice in a blender.",
        "Blend until smooth and creamy.",
        "Serve in tall glasses or a hollowed-out pineapple.",
        "Garnish with a pineapple slice and a cherry."
      ]
    }
  },
  {
    id: "mojito-pr",
    category: "cocteles",
    name: { es: "Mojito Puertorriqueño", en: "Puerto Rican Mojito" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "2 oz de ron blanco puertorriqueño",
        "1 oz de jugo de limón fresco",
        "2 cucharaditas de azúcar",
        "6-8 hojas de yerba buena (menta)",
        "Agua de soda (club soda)",
        "Hielo",
        "Ramita de menta para decorar"
      ],
      en: [
        "2 oz Puerto Rican white rum",
        "1 oz fresh lime juice",
        "2 teaspoons sugar",
        "6-8 mint leaves",
        "Club soda",
        "Ice",
        "Mint sprig for garnish"
      ]
    },
    steps: {
      es: [
        "En un vaso alto, maje las hojas de menta con el azúcar y el jugo de limón.",
        "Añada el ron y mezcle bien.",
        "Llene el vaso con hielo.",
        "Complete con agua de soda y revuelva suavemente.",
        "Decore con una ramita de menta y una rodaja de limón."
      ],
      en: [
        "In a tall glass, muddle mint leaves with sugar and lime juice.",
        "Add rum and mix well.",
        "Fill glass with ice.",
        "Top with club soda and stir gently.",
        "Garnish with a mint sprig and lime slice."
      ]
    }
  },
  {
    id: "chichaito",
    category: "cocteles",
    name: { es: "Chichaíto", en: "Chichaíto (Anise Shot)" },
    time: "2 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron puertorriqueño",
        "1 oz de anís (licor de anís)",
        "Hielo (opcional)"
      ],
      en: [
        "1 oz Puerto Rican rum",
        "1 oz anisette (anise liqueur)",
        "Ice (optional)"
      ]
    },
    steps: {
      es: [
        "En un vaso de shot o vasito pequeño, vierta primero el anís.",
        "Con cuidado, añada el ron lentamente sobre una cuchara para crear dos capas.",
        "Sirva como shot. También se puede mezclar y servir con hielo."
      ],
      en: [
        "In a shot glass, pour the anisette first.",
        "Carefully add rum slowly over a spoon to create two layers.",
        "Serve as a shot. Can also be mixed and served over ice."
      ]
    }
  },
  {
    id: "ron-ponche",
    category: "cocteles",
    name: { es: "Ponche de Ron", en: "Rum Punch" },
    time: "10 min",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de ron dorado puertorriqueño",
        "1 taza de jugo de piña",
        "1 taza de jugo de parcha (maracuyá)",
        "1 taza de jugo de naranja",
        "½ taza de jugo de limón",
        "½ taza de granadina",
        "2 tazas de agua de soda",
        "Rodajas de frutas para decorar",
        "Hielo abundante"
      ],
      en: [
        "2 cups Puerto Rican golden rum",
        "1 cup pineapple juice",
        "1 cup passion fruit juice",
        "1 cup orange juice",
        "½ cup lime juice",
        "½ cup grenadine",
        "2 cups club soda",
        "Fruit slices for garnish",
        "Plenty of ice"
      ]
    },
    steps: {
      es: [
        "En una ponchera grande, combine todos los jugos y la granadina.",
        "Añada el ron y mezcle bien.",
        "Justo antes de servir, agregue el agua de soda y hielo abundante.",
        "Decore con rodajas de piña, naranja y limón.",
        "Sirva en vasos con hielo adicional."
      ],
      en: [
        "In a large punch bowl, combine all juices and grenadine.",
        "Add rum and mix well.",
        "Just before serving, add club soda and plenty of ice.",
        "Garnish with pineapple, orange, and lime slices.",
        "Serve in glasses with additional ice."
      ]
    }
  },
  {
    id: "coquito-nutella",
    category: "cocteles",
    name: { es: "Coquito de Chocolate", en: "Chocolate Coquito" },
    time: "15 min",
    servings: 10,
    ingredients: {
      es: [
        "2 latas de leche de coco (13.5 oz)",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "½ taza de cacao en polvo",
        "½ taza de chocolate derretido",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela",
        "Ron blanco al gusto"
      ],
      en: [
        "2 cans coconut milk (13.5 oz)",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "½ cup cocoa powder",
        "½ cup melted chocolate",
        "1 teaspoon vanilla",
        "½ teaspoon cinnamon",
        "White rum to taste"
      ]
    },
    steps: {
      es: [
        "En una licuadora, combine las leches de coco, condensada y evaporada.",
        "Añada el cacao en polvo, el chocolate derretido, la vainilla y la canela.",
        "Licúe hasta que esté completamente suave y homogéneo.",
        "Añada el ron al gusto. Mezcle.",
        "Vierta en botellas y refrigere por al menos 4 horas. Agite antes de servir."
      ],
      en: [
        "In a blender, combine coconut milk, condensed milk, and evaporated milk.",
        "Add cocoa powder, melted chocolate, vanilla, and cinnamon.",
        "Blend until completely smooth and uniform.",
        "Add rum to taste. Mix.",
        "Pour into bottles and refrigerate at least 4 hours. Shake before serving."
      ]
    }
  },
  {
    id: "sangria-tropical",
    category: "cocteles",
    name: { es: "Sangría Tropical", en: "Tropical Sangria" },
    time: "15 min + reposo",
    servings: 8,
    ingredients: {
      es: [
        "1 botella de vino tinto",
        "1 taza de ron puertorriqueño",
        "1 taza de jugo de piña",
        "½ taza de jugo de naranja",
        "¼ taza de azúcar",
        "1 piña fresca, cortada en trozos",
        "2 naranjas, cortadas en rodajas",
        "1 mango, cortado en cubos",
        "1 taza de agua de soda"
      ],
      en: [
        "1 bottle red wine",
        "1 cup Puerto Rican rum",
        "1 cup pineapple juice",
        "½ cup orange juice",
        "¼ cup sugar",
        "1 fresh pineapple, cut into chunks",
        "2 oranges, sliced into rounds",
        "1 mango, cubed",
        "1 cup club soda"
      ]
    },
    steps: {
      es: [
        "En una jarra grande, disuelva el azúcar en los jugos de piña y naranja.",
        "Añada el vino tinto y el ron. Mezcle bien.",
        "Agregue todas las frutas cortadas.",
        "Refrigere por al menos 4 horas para que las frutas absorban los sabores.",
        "Antes de servir, añada el agua de soda y hielo. Sirva con las frutas."
      ],
      en: [
        "In a large pitcher, dissolve sugar in pineapple and orange juices.",
        "Add red wine and rum. Mix well.",
        "Add all the cut fruits.",
        "Refrigerate at least 4 hours so fruits absorb the flavors.",
        "Before serving, add club soda and ice. Serve with the fruits."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── PANES Y REPOSTERÍA ──
  // ══════════════════════════════════════
  {
    id: "mallorca",
    category: "panes",
    name: { es: "Pan de Mallorca", en: "Mallorca Bread" },
    time: "3 hrs",
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "½ taza de azúcar",
        "1 sobre de levadura activa",
        "½ taza de leche tibia",
        "4 yemas de huevo",
        "½ taza de mantequilla, derretida",
        "1 cucharadita de sal",
        "Azúcar en polvo para espolvorear"
      ],
      en: [
        "4 cups bread flour",
        "½ cup sugar",
        "1 packet active dry yeast",
        "½ cup warm milk",
        "4 egg yolks",
        "½ cup butter, melted",
        "1 teaspoon salt",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos hasta que burbujee.",
        "En un tazón grande, mezcle la harina, el azúcar y la sal. Haga un hueco en el centro.",
        "Añada la levadura, las yemas y la mantequilla derretida. Mezcle hasta formar una masa suave.",
        "Amase por 10 minutos. La masa será pegajosa pero manejable. Cubra y deje crecer 1 hora.",
        "Divida en 12 porciones. Forme tiras largas y enróllelas en espiral. Coloque en bandeja engrasada.",
        "Deje crecer 30 minutos más. Hornee a 350°F por 15-18 minutos hasta que estén ligeramente dorados.",
        "Espolvoree generosamente con azúcar en polvo al salir del horno."
      ],
      en: [
        "Dissolve yeast in warm milk with 1 tablespoon sugar. Wait 10 minutes until bubbly.",
        "In a large bowl, mix flour, sugar, and salt. Make a well in the center.",
        "Add yeast mixture, egg yolks, and melted butter. Mix until a soft dough forms.",
        "Knead for 10 minutes. Dough will be sticky but manageable. Cover and let rise 1 hour.",
        "Divide into 12 portions. Form long strips and roll into spirals. Place on greased baking sheet.",
        "Let rise 30 more minutes. Bake at 350°F for 15-18 minutes until lightly golden.",
        "Dust generously with powdered sugar right out of the oven."
      ]
    }
  },
  {
    id: "quesito",
    category: "panes",
    name: { es: "Quesitos", en: "Cream Cheese Pastries" },
    time: "45 min",
    servings: 10,
    ingredients: {
      es: [
        "1 paquete de masa de hojaldre (puff pastry), descongelada",
        "1 paquete de queso crema (8 oz), suavizado",
        "½ taza de azúcar",
        "1 cucharadita de vainilla",
        "1 huevo batido (para barnizar)",
        "Almíbar: ½ taza de azúcar + ¼ taza de agua"
      ],
      en: [
        "1 package puff pastry, thawed",
        "1 package cream cheese (8 oz), softened",
        "½ cup sugar",
        "1 teaspoon vanilla",
        "1 beaten egg (for egg wash)",
        "Simple syrup: ½ cup sugar + ¼ cup water"
      ]
    },
    steps: {
      es: [
        "Mezcle el queso crema con el azúcar y la vainilla hasta que esté suave.",
        "Extienda la masa de hojaldre y córtela en rectángulos de 3x5 pulgadas.",
        "Coloque una cucharada del relleno de queso en el centro de cada rectángulo.",
        "Doble la masa sobre el relleno, sellando los bordes con un tenedor.",
        "Barnize con huevo batido. Hornee a 375°F por 18-20 minutos hasta dorar.",
        "Prepare el almíbar hirviendo el azúcar con el agua. Barnize los quesitos al salir del horno."
      ],
      en: [
        "Mix cream cheese with sugar and vanilla until smooth.",
        "Roll out puff pastry and cut into 3x5 inch rectangles.",
        "Place a spoonful of cheese filling in the center of each rectangle.",
        "Fold dough over filling, sealing edges with a fork.",
        "Brush with beaten egg. Bake at 375°F for 18-20 minutes until golden.",
        "Make simple syrup by boiling sugar with water. Brush pastries upon removing from oven."
      ]
    }
  },
  {
    id: "pan-sobao",
    category: "panes",
    name: { es: "Pan Sobao", en: "Puerto Rican Soft Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "6 tazas de harina de pan",
        "¾ taza de azúcar",
        "2 sobres de levadura activa",
        "1 taza de leche tibia",
        "½ taza de manteca vegetal (Crisco)",
        "2 huevos",
        "1½ cucharaditas de sal",
        "¼ taza de mantequilla derretida (para barnizar)"
      ],
      en: [
        "6 cups bread flour",
        "¾ cup sugar",
        "2 packets active dry yeast",
        "1 cup warm milk",
        "½ cup vegetable shortening (Crisco)",
        "2 eggs",
        "1½ teaspoons salt",
        "¼ cup melted butter (for brushing)"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "En un tazón grande, mezcle la harina, el azúcar y la sal.",
        "Añada la levadura activa, los huevos y la manteca. Amase por 10-15 minutos hasta que esté suave y elástica.",
        "Cubra y deje crecer en un lugar tibio por 1½ horas o hasta duplicar.",
        "Divida la masa en 2 porciones. Forme cada una en un óvalo largo tipo pan.",
        "Coloque en bandejas engrasadas. Deje crecer 45 minutos más.",
        "Hornee a 350°F por 25-30 minutos hasta dorar. Barnize con mantequilla derretida al salir del horno."
      ],
      en: [
        "Dissolve yeast in warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "In a large bowl, mix flour, sugar, and salt.",
        "Add activated yeast, eggs, and shortening. Knead 10-15 minutes until smooth and elastic.",
        "Cover and let rise in a warm place for 1½ hours or until doubled.",
        "Divide dough into 2 portions. Shape each into a long oval loaf.",
        "Place on greased baking sheets. Let rise 45 more minutes.",
        "Bake at 350°F for 25-30 minutes until golden. Brush with melted butter right out of the oven."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── SALSAS Y ADEREZOS ──
  // ══════════════════════════════════════
  {
    id: "sofrito",
    category: "salsas",
    name: { es: "Sofrito Puertorriqueño", en: "Puerto Rican Sofrito" },
    time: "15 min",
    servings: 20,
    ingredients: {
      es: [
        "1 manojo de recao (culantro)",
        "1 manojo de cilantro",
        "2 pimientos verdes (ajíes)",
        "1 pimiento rojo",
        "1 cebolla grande",
        "1 cabeza de ajo, pelada",
        "6 ajíes dulces",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "1 bunch recao (culantro)",
        "1 bunch cilantro",
        "2 green bell peppers",
        "1 red bell pepper",
        "1 large onion",
        "1 head of garlic, peeled",
        "6 sweet peppers (ajíes dulces)",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Lave y corte todos los vegetales en trozos grandes.",
        "Coloque todo en el procesador de alimentos o licuadora.",
        "Procese hasta obtener una mezcla homogénea pero con algo de textura.",
        "Guarde en un envase hermético en la nevera hasta por 2 semanas, o congele en cubetas de hielo para usar por porciones."
      ],
      en: [
        "Wash and roughly chop all vegetables.",
        "Place everything in a food processor or blender.",
        "Process until you get a uniform mixture with some texture.",
        "Store in an airtight container in the fridge for up to 2 weeks, or freeze in ice cube trays for portioned use."
      ]
    }
  },
  {
    id: "mojito-isleno",
    category: "salsas",
    name: { es: "Mojito Isleño (Salsa Criolla)", en: "Island Mojito Sauce (Creole Sauce)" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tomates maduros, picados finamente",
        "1 cebolla mediana, picada finamente",
        "1 pimiento verde, picado finamente",
        "2 dientes de ajo, machacados",
        "¼ taza de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharada de alcaparras",
        "Aceitunas picadas al gusto",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 ripe tomatoes, finely diced",
        "1 medium onion, finely diced",
        "1 green bell pepper, finely diced",
        "2 garlic cloves, crushed",
        "¼ cup olive oil",
        "2 tablespoons vinegar",
        "1 tablespoon capers",
        "Chopped olives to taste",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un sartén, caliente el aceite de oliva a fuego medio.",
        "Sofría la cebolla, el pimiento y el ajo hasta que estén blandos.",
        "Añada los tomates, las alcaparras y las aceitunas. Cocine por 5 minutos.",
        "Agregue el vinagre, sal y pimienta. Cocine 3 minutos más.",
        "Sirva sobre pescado frito, tostones o como acompañante."
      ],
      en: [
        "In a skillet, heat olive oil over medium heat.",
        "Sauté onion, pepper, and garlic until soft.",
        "Add tomatoes, capers, and olives. Cook for 5 minutes.",
        "Add vinegar, salt, and pepper. Cook 3 more minutes.",
        "Serve over fried fish, tostones, or as a side."
      ]
    }
  },
  {
    id: "pique",
    category: "salsas",
    name: { es: "Pique Puertorriqueño", en: "Puerto Rican Hot Sauce (Pique)" },
    time: "15 min + reposo",
    servings: 1,
    ingredients: {
      es: [
        "10-15 ajíes caballeros (o habaneros pequeños)",
        "1 taza de vinagre blanco",
        "½ taza de jugo de piña",
        "4 dientes de ajo, enteros",
        "½ cebolla, cortada en trozos",
        "10 granos de pimienta",
        "1 cucharadita de sal",
        "Hojas de recao (culantro)"
      ],
      en: [
        "10-15 hot peppers (or small habaneros)",
        "1 cup white vinegar",
        "½ cup pineapple juice",
        "4 garlic cloves, whole",
        "½ onion, cut into chunks",
        "10 peppercorns",
        "1 teaspoon salt",
        "Recao (culantro) leaves"
      ]
    },
    steps: {
      es: [
        "En una botella de cristal limpia, coloque los ajíes cortados por la mitad.",
        "Añada el ajo, la cebolla, los granos de pimienta y las hojas de recao.",
        "Vierta el vinagre y el jugo de piña. Añada la sal.",
        "Tape la botella y agite bien.",
        "Deje reposar por al menos 3 días antes de usar. El sabor mejora con el tiempo.",
        "Use gotas sobre comida — es muy picante. Rellene con vinagre según se vaya usando."
      ],
      en: [
        "In a clean glass bottle, place peppers cut in half.",
        "Add garlic, onion, peppercorns, and recao leaves.",
        "Pour in vinegar and pineapple juice. Add salt.",
        "Cap the bottle and shake well.",
        "Let sit for at least 3 days before using. Flavor improves over time.",
        "Use drops on food — it's very spicy. Refill with vinegar as you use it."
      ]
    }
  },
  {
    id: "adobo-pr",
    category: "salsas",
    name: { es: "Adobo Puertorriqueño", en: "Puerto Rican Adobo Seasoning" },
    time: "10 min",
    servings: 20,
    ingredients: {
      es: [
        "1 cabeza de ajo, pelada",
        "1 cucharada de pimienta en grano",
        "2 cucharadas de orégano seco",
        "1 cucharada de sal",
        "2 cucharadas de aceite de oliva",
        "¼ taza de vinagre",
        "Jugo de 2 limones"
      ],
      en: [
        "1 head of garlic, peeled",
        "1 tablespoon peppercorns",
        "2 tablespoons dried oregano",
        "1 tablespoon salt",
        "2 tablespoons olive oil",
        "¼ cup vinegar",
        "Juice of 2 limes"
      ]
    },
    steps: {
      es: [
        "En un pilón (mortero), maje el ajo con la pimienta, el orégano y la sal hasta formar una pasta.",
        "Añada el aceite de oliva y mezcle bien.",
        "Agregue el vinagre y el jugo de limón. Combine todo.",
        "Use para marinar carnes, pollo o cerdo antes de cocinar.",
        "Guarde en un envase hermético en la nevera por hasta 2 semanas."
      ],
      en: [
        "In a pilón (mortar), mash garlic with peppercorns, oregano, and salt into a paste.",
        "Add olive oil and mix well.",
        "Add vinegar and lime juice. Combine everything.",
        "Use to marinate beef, chicken, or pork before cooking.",
        "Store in an airtight container in the fridge for up to 2 weeks."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── ENTREMESES Y BOCADILLOS ──
  // ══════════════════════════════════════
  {
    id: "alcapurrias",
    category: "entremeses",
    name: { es: "Alcapurrias", en: "Alcapurrias (Stuffed Fritters)" },
    time: "1 hr 30 min",
    servings: 15,
    ingredients: {
      es: [
        "2 lbs de yautía (o guineos verdes), pelada y rallada",
        "1 plátano verde, pelado y rallado",
        "1 sobre de sazón con achiote",
        "Aceite con achiote al gusto",
        "Relleno: 1 lb de carne molida",
        "Sofrito, salsa de tomate, aceitunas",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "2 lbs yautía (or green bananas), peeled and grated",
        "1 green plantain, peeled and grated",
        "1 packet sazón with annatto",
        "Annatto oil to taste",
        "Filling: 1 lb ground beef",
        "Sofrito, tomato sauce, olives",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Para el relleno: sofría la carne molida con sofrito, sazón, salsa de tomate y aceitunas hasta cocinar. Reserve.",
        "Para la masa: mezcle la yautía rallada, el plátano rallado, el sazón y un poco de aceite con achiote. La masa debe estar suave.",
        "Sobre un pedazo de papel engrasado, extienda una porción de masa en forma ovalada.",
        "Coloque una cucharada de relleno en el centro. Doble la masa usando el papel para cubrir el relleno.",
        "Caliente abundante aceite a 350°F. Deslice las alcapurrias con cuidado al aceite.",
        "Fría hasta que estén doradas y crujientes, aproximadamente 4-5 minutos por lado."
      ],
      en: [
        "For the filling: sauté ground beef with sofrito, sazón, tomato sauce, and olives until cooked. Set aside.",
        "For the dough: mix grated yautía, grated plantain, sazón, and some annatto oil. Dough should be smooth.",
        "On a piece of greased paper, spread a portion of dough into an oval shape.",
        "Place a spoonful of filling in the center. Fold the dough using the paper to cover the filling.",
        "Heat plenty of oil to 350°F. Carefully slide alcapurrias into the oil.",
        "Fry until golden and crispy, about 4-5 minutes per side."
      ]
    }
  },
  {
    id: "pastelillos",
    category: "entremeses",
    name: { es: "Pastelillos de Carne", en: "Meat Turnovers (Pastelillos)" },
    time: "1 hr",
    servings: 15,
    ingredients: {
      es: [
        "1 paquete de discos para empanadillas",
        "1 lb de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "¼ taza de aceitunas rellenas, picadas",
        "Aceite vegetal para freír",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 package empanada discs",
        "1 lb ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "¼ cup stuffed olives, chopped",
        "Vegetable oil for frying",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sofría la carne molida con el sofrito, sazón, salsa de tomate y aceitunas. Cocine hasta que esté lista. Deje enfriar.",
        "Coloque una cucharada del relleno en el centro de cada disco.",
        "Doble el disco por la mitad y selle los bordes presionando con un tenedor.",
        "Caliente aceite a 350°F. Fría los pastelillos hasta que estén dorados, aproximadamente 3 minutos por lado.",
        "Escurra sobre papel toalla y sirva calientes."
      ],
      en: [
        "Sauté ground beef with sofrito, sazón, tomato sauce, and olives. Cook until done. Let cool.",
        "Place a spoonful of filling in the center of each disc.",
        "Fold disc in half and seal edges by pressing with a fork.",
        "Heat oil to 350°F. Fry pastelillos until golden, about 3 minutes per side.",
        "Drain on paper towels and serve hot."
      ]
    }
  },
  {
    id: "bacalaitos",
    category: "entremeses",
    name: { es: "Bacalaítos Fritos", en: "Codfish Fritters" },
    time: "30 min",
    servings: 12,
    ingredients: {
      es: [
        "½ lb de bacalao seco, desalado y desmenuzado",
        "1 taza de harina de trigo",
        "1 taza de agua",
        "2 dientes de ajo, machacados",
        "½ cucharadita de polvo de hornear",
        "1 cucharadita de achiote en polvo (o sazón)",
        "Aceite vegetal para freír",
        "Pimienta al gusto"
      ],
      en: [
        "½ lb dried codfish, desalted and shredded",
        "1 cup all-purpose flour",
        "1 cup water",
        "2 garlic cloves, crushed",
        "½ teaspoon baking powder",
        "1 teaspoon annatto powder (or sazón)",
        "Vegetable oil for frying",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina, el agua, el ajo, el polvo de hornear y el achiote hasta obtener una masa líquida suave.",
        "Añada el bacalao desmenuzado y pimienta. Mezcle bien.",
        "Caliente aceite a 375°F en un sartén hondo.",
        "Con una cuchara, vierta porciones de la masa en el aceite caliente, extendiéndolas lo más finas posible.",
        "Fría hasta que estén dorados y crujientes, 2-3 minutos por lado.",
        "Escurra sobre papel toalla. Sirva calientes como aperitivo."
      ],
      en: [
        "Mix flour, water, garlic, baking powder, and annatto until you get a smooth thin batter.",
        "Add shredded codfish and pepper. Mix well.",
        "Heat oil to 375°F in a deep skillet.",
        "Using a spoon, pour portions of batter into hot oil, spreading as thin as possible.",
        "Fry until golden and crispy, 2-3 minutes per side.",
        "Drain on paper towels. Serve hot as an appetizer."
      ]
    }
  },
  {
    id: "sorullitos",
    category: "entremeses",
    name: { es: "Sorullitos de Maíz", en: "Corn Sticks (Sorullitos)" },
    time: "30 min",
    servings: 15,
    ingredients: {
      es: [
        "2 tazas de agua",
        "1 cucharadita de sal",
        "1 cucharada de azúcar",
        "1½ tazas de harina de maíz (polenta)",
        "½ taza de queso Gouda o cheddar, rallado",
        "Aceite vegetal para freír"
      ],
      en: [
        "2 cups water",
        "1 teaspoon salt",
        "1 tablespoon sugar",
        "1½ cups cornmeal (polenta)",
        "½ cup Gouda or cheddar cheese, shredded",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con la sal y el azúcar.",
        "Baje el fuego y añada la harina de maíz de golpe, revolviendo vigorosamente.",
        "Cocine revolviendo por 3-4 minutos hasta que la masa se despegue de la olla.",
        "Retire del fuego y añada el queso. Mezcle bien.",
        "Cuando pueda manejar la masa, forme cilindros de 3-4 pulgadas de largo.",
        "Caliente aceite a 350°F y fría los sorullitos hasta que estén dorados. Escurra y sirva con mayoketchup."
      ],
      en: [
        "Boil water with salt and sugar.",
        "Lower heat and add cornmeal all at once, stirring vigorously.",
        "Cook stirring for 3-4 minutes until dough pulls away from the pot.",
        "Remove from heat and add cheese. Mix well.",
        "When dough is cool enough to handle, form cylinders 3-4 inches long.",
        "Heat oil to 350°F and fry sorullitos until golden. Drain and serve with mayo-ketchup dip."
      ]
    }
  },
  {
    id: "rellenos-papa",
    category: "entremeses",
    name: { es: "Rellenos de Papa", en: "Stuffed Potato Balls" },
    time: "1 hr",
    servings: 12,
    ingredients: {
      es: [
        "3 lbs de papas, peladas y cortadas",
        "1 lb de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "¼ taza de aceitunas rellenas, picadas",
        "2 huevos batidos",
        "Harina de trigo para empanizar",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "3 lbs potatoes, peeled and cut",
        "1 lb ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "¼ cup stuffed olives, chopped",
        "2 beaten eggs",
        "All-purpose flour for coating",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las papas en agua con sal hasta que estén blandas. Escurra y maje hasta obtener un puré liso sin grumos.",
        "Para el relleno: sofría la carne molida con sofrito, sazón, salsa de tomate y aceitunas. Deje enfriar.",
        "Tome una porción de puré, haga un hueco en el centro y coloque una cucharada de relleno.",
        "Cierre el puré alrededor del relleno formando una bola. Repita.",
        "Pase cada bola por harina, luego por huevo batido.",
        "Fría en aceite caliente a 350°F hasta que estén doradas por todos lados. Escurra y sirva."
      ],
      en: [
        "Boil potatoes in salted water until soft. Drain and mash into a smooth purée with no lumps.",
        "For the filling: sauté ground beef with sofrito, sazón, tomato sauce, and olives. Let cool.",
        "Take a portion of purée, make a well in the center and place a spoonful of filling.",
        "Close the purée around the filling to form a ball. Repeat.",
        "Dredge each ball in flour, then dip in beaten egg.",
        "Fry in hot oil at 350°F until golden on all sides. Drain and serve."
      ]
    }
  },
  {
    id: "pionono",
    category: "entremeses",
    name: { es: "Piononos", en: "Sweet Plantain Meat Cups" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "4 plátanos maduros",
        "1 lb de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "Aceite vegetal para freír",
        "3 huevos batidos",
        "Sal al gusto"
      ],
      en: [
        "4 ripe plantains",
        "1 lb ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "Vegetable oil for frying",
        "3 beaten eggs",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Corte los plátanos maduros en lonjas largas y finas a lo largo.",
        "Fría las lonjas en aceite hasta que estén doradas pero flexibles. Escurra.",
        "Prepare el relleno: sofría la carne con sofrito, sazón y salsa de tomate.",
        "Forme cilindros con las lonjas de plátano, asegurándolos con un palillo.",
        "Rellene cada cilindro con la carne.",
        "Sumerja en huevo batido y fría hasta que el huevo se cocine y se dore. Sirva calientes."
      ],
      en: [
        "Cut ripe plantains into long thin slices lengthwise.",
        "Fry slices in oil until golden but still flexible. Drain.",
        "Make the filling: sauté beef with sofrito, sazón, and tomato sauce.",
        "Form cylinders with the plantain slices, securing with a toothpick.",
        "Fill each cylinder with the meat mixture.",
        "Dip in beaten egg and fry until egg is cooked and golden. Serve hot."
      ]
    }
  },

  // ══════════════════════════════════════════════
  // ── RECETAS ADICIONALES — Edición 1983 ──
  // ══════════════════════════════════════════════

  // ── SOPAS (1983) ──
  {
    id: "sopa-frijoles-blancos",
    category: "sopas",
    name: { es: "Sopa de Frijoles Blancos con Calabaza", en: "White Bean & Pumpkin Soup" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de frijoles blancos secos, remojados",
        "1 lb de calabaza, pelada y cortada en cubos",
        "½ lb de jamón ahumado, cortado en trozos",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "2 papas grandes, peladas y cortadas",
        "1 chorizo español, cortado en ruedas",
        "2 hojas de laurel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb dried white beans, soaked",
        "1 lb calabaza (pumpkin), peeled and cubed",
        "½ lb smoked ham, cut into pieces",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "2 large potatoes, peeled and cut",
        "1 Spanish chorizo, sliced into rounds",
        "2 bay leaves",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Remoje los frijoles la noche anterior. Escurra y enjuague.",
        "En una olla grande, cubra los frijoles con agua fresca y hierva por 30 minutos.",
        "Añada el jamón, el chorizo, el sofrito, el sazón y las hojas de laurel.",
        "Cocine a fuego medio por 20 minutos. Agregue la calabaza y las papas.",
        "Cocine 20 minutos más hasta que todo esté tierno. La calabaza espesará el caldo naturalmente.",
        "Ajuste la sal y pimienta. Sirva caliente con pan."
      ],
      en: [
        "Soak beans overnight. Drain and rinse.",
        "In a large pot, cover beans with fresh water and boil for 30 minutes.",
        "Add ham, chorizo, sofrito, sazón, and bay leaves.",
        "Cook on medium heat for 20 minutes. Add calabaza and potatoes.",
        "Cook 20 more minutes until everything is tender. The calabaza will naturally thicken the broth.",
        "Adjust salt and pepper. Serve hot with bread."
      ]
    }
  },
  {
    id: "sopa-pescado",
    category: "sopas",
    name: { es: "Sopa de Pescado", en: "Fish Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1½ lbs de pescado fresco (chillo o mero), cortado en trozos",
        "2 tomates maduros, picados",
        "1 cebolla grande, picada",
        "3 dientes de ajo, machacados",
        "2 plátanos verdes, cortados en ruedas",
        "2 cucharadas de aceite de oliva",
        "Jugo de 2 limones",
        "Cilantro fresco",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1½ lbs fresh fish (snapper or grouper), cut into chunks",
        "2 ripe tomatoes, diced",
        "1 large onion, diced",
        "3 garlic cloves, crushed",
        "2 green plantains, cut into rounds",
        "2 tablespoons olive oil",
        "Juice of 2 limes",
        "Fresh cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, caliente el aceite y sofría la cebolla, el ajo y los tomates por 5 minutos.",
        "Añada 8 tazas de agua y los plátanos verdes. Hierva y cocine 15 minutos.",
        "Agregue el pescado con cuidado. Baje el fuego y cocine 12 minutos sin revolver mucho.",
        "Añada el jugo de limón, cilantro, sal y pimienta.",
        "Sirva caliente con un poco de cilantro fresco encima."
      ],
      en: [
        "In a pot, heat oil and sauté onion, garlic, and tomatoes for 5 minutes.",
        "Add 8 cups water and green plantains. Boil and cook 15 minutes.",
        "Carefully add the fish. Lower heat and cook 12 minutes without stirring too much.",
        "Add lime juice, cilantro, salt, and pepper.",
        "Serve hot with fresh cilantro on top."
      ]
    }
  },

  // ── ARROCES (1983) ──
  {
    id: "arroz-jueyes",
    category: "arroces",
    name: { es: "Arroz con Jueyes", en: "Rice with Land Crabs" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "1 lb de carne de jueyes (cangrejos de tierra)",
        "4 tazas de caldo (de los jueyes o de pollo)",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 cucharadas de aceite con achiote",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 cups medium grain rice",
        "1 lb land crab meat",
        "4 cups broth (from crabs or chicken)",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "2 tablespoons annatto oil",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, caliente el aceite con achiote y sofría el sofrito por 3 minutos.",
        "Añada el sazón, la salsa de tomate, las aceitunas y las alcaparras.",
        "Agregue la carne de jueyes y sofría 3 minutos.",
        "Vierta el caldo y hierva. Añada el arroz.",
        "Cocine sin tapa hasta que el líquido se absorba. Tape, baje el fuego y cocine 25 minutos.",
        "Voltee con cuchara antes de servir."
      ],
      en: [
        "In a caldero, heat annatto oil and sauté sofrito for 3 minutes.",
        "Add sazón, tomato sauce, olives, and capers.",
        "Add crab meat and sauté 3 minutes.",
        "Pour in broth and bring to a boil. Add rice.",
        "Cook uncovered until liquid is absorbed. Cover, lower heat and cook 25 minutes.",
        "Fold with a spoon before serving."
      ]
    }
  },
  {
    id: "arroz-habichuelas-coloradas",
    category: "arroces",
    name: { es: "Habichuelas Coloradas Guisadas", en: "Stewed Red Kidney Beans" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de habichuelas coloradas (kidney beans)",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "2 papas medianas, peladas y cortadas en cubos",
        "½ taza de calabaza, cortada en cubos",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 cans red kidney beans",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "2 medium potatoes, peeled and cubed",
        "½ cup calabaza (pumpkin), cubed",
        "½ cup stuffed olives",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate por 3 minutos.",
        "Añada las habichuelas con su líquido, las papas, la calabaza y las aceitunas.",
        "Cocine a fuego medio por 25 minutos hasta que las papas y calabaza estén tiernas.",
        "La calabaza espesará la salsa naturalmente. Ajuste la sal.",
        "Sirva sobre arroz blanco."
      ],
      en: [
        "In a pot, heat oil and sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Add beans with their liquid, potatoes, calabaza, and olives.",
        "Cook on medium heat for 25 minutes until potatoes and calabaza are tender.",
        "The calabaza will naturally thicken the sauce. Adjust salt.",
        "Serve over white rice."
      ]
    }
  },

  // ── CARNES (1983) ──
  {
    id: "ternera-empanada",
    category: "carnes",
    name: { es: "Ternera Empanada", en: "Breaded Veal Cutlets" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de ternera finos",
        "2 huevos batidos",
        "1 taza de pan rallado (polvo de galleta)",
        "½ cucharadita de ajo en polvo",
        "½ cucharadita de orégano",
        "Aceite vegetal para freír",
        "Jugo de 1 limón",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 thin veal cutlets",
        "2 beaten eggs",
        "1 cup breadcrumbs (cracker meal)",
        "½ teaspoon garlic powder",
        "½ teaspoon oregano",
        "Vegetable oil for frying",
        "Juice of 1 lime",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone los filetes con limón, sal, pimienta, ajo y orégano. Marine 15 minutos.",
        "Pase cada filete por huevo batido y luego por el pan rallado, cubriendo bien.",
        "Caliente aceite a fuego medio-alto en un sartén.",
        "Fría cada filete por 3-4 minutos por cada lado hasta que estén dorados y crujientes.",
        "Escurra sobre papel toalla. Sirva con arroz y habichuelas."
      ],
      en: [
        "Season cutlets with lime, salt, pepper, garlic, and oregano. Marinate 15 minutes.",
        "Dip each cutlet in beaten egg, then coat well in breadcrumbs.",
        "Heat oil over medium-high heat in a skillet.",
        "Fry each cutlet 3-4 minutes per side until golden and crispy.",
        "Drain on paper towels. Serve with rice and beans."
      ]
    }
  },
  {
    id: "lengua-rellena",
    category: "carnes",
    name: { es: "Lengua Rellena", en: "Stuffed Beef Tongue" },
    time: "3 hrs",
    servings: 8,
    ingredients: {
      es: [
        "1 lengua de res (3-4 lbs)",
        "½ lb de jamón cocido, molido",
        "½ lb de carne de cerdo, molida",
        "2 huevos duros, picados",
        "¼ taza de aceitunas rellenas, picadas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "Hilo de cocina",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 beef tongue (3-4 lbs)",
        "½ lb cooked ham, ground",
        "½ lb pork, ground",
        "2 hard-boiled eggs, chopped",
        "¼ cup stuffed olives, chopped",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "Kitchen twine",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la lengua en agua con sal por 2 horas hasta que esté tierna. Pele la piel exterior.",
        "Haga un corte a lo largo sin atravesarla para crear un bolsillo.",
        "Mezcle el jamón, el cerdo molido, los huevos, las aceitunas, sal y pimienta para el relleno.",
        "Rellene la lengua y cierre con hilo de cocina.",
        "En un caldero, sofría el sofrito con sazón y salsa de tomate. Coloque la lengua rellena.",
        "Añada 2 tazas de agua, tape y cocine a fuego bajo por 45 minutos.",
        "Corte en rodajas y sirva con la salsa."
      ],
      en: [
        "Boil tongue in salted water for 2 hours until tender. Peel off the outer skin.",
        "Make a lengthwise cut without going through to create a pocket.",
        "Mix ham, ground pork, eggs, olives, salt, and pepper for the stuffing.",
        "Stuff the tongue and close with kitchen twine.",
        "In a caldero, sauté sofrito with sazón and tomato sauce. Place stuffed tongue inside.",
        "Add 2 cups water, cover and cook on low for 45 minutes.",
        "Slice into rounds and serve with the sauce."
      ]
    }
  },

  // ── AVES (1983) ──
  {
    id: "pavo-relleno",
    category: "aves",
    name: { es: "Pavo Relleno a la Puertorriqueña", en: "Puerto Rican Stuffed Turkey" },
    time: "4-5 hrs",
    servings: 15,
    ingredients: {
      es: [
        "1 pavo de 12-14 lbs",
        "Adobo: 1 cabeza de ajo, orégano, sal, pimienta, vinagre, aceite de oliva",
        "Relleno: 1 lb de carne molida de cerdo",
        "½ lb de jamón, picado",
        "½ taza de aceitunas rellenas",
        "½ taza de pasas",
        "3 cucharadas de alcaparras",
        "3 huevos duros, cortados",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "Pan sobao remojado en leche",
        "Mantequilla para barnizar"
      ],
      en: [
        "1 turkey, 12-14 lbs",
        "Adobo: 1 head garlic, oregano, salt, pepper, vinegar, olive oil",
        "Stuffing: 1 lb ground pork",
        "½ lb ham, diced",
        "½ cup stuffed olives",
        "½ cup raisins",
        "3 tablespoons capers",
        "3 hard-boiled eggs, cut",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "Pan sobao soaked in milk",
        "Butter for basting"
      ]
    },
    steps: {
      es: [
        "Prepare el adobo machacando ajo con orégano, sal, pimienta, vinagre y aceite. Adobe el pavo por dentro y por fuera. Marine 24 horas.",
        "Para el relleno: sofría el cerdo molido con sofrito, sazón, jamón, aceitunas, pasas y alcaparras. Deje enfriar.",
        "Añada al relleno el pan remojado y los huevos duros. Mezcle bien.",
        "Rellene el pavo y cierre la cavidad con palillos e hilo de cocina.",
        "Precaliente el horno a 325°F. Cubra el pavo con papel de aluminio.",
        "Hornee 3½ a 4 horas (20 minutos por libra), barnizando con mantequilla cada 45 minutos.",
        "Destape la última hora para dorar. La temperatura interna debe llegar a 165°F.",
        "Deje reposar 20 minutos antes de cortar."
      ],
      en: [
        "Make adobo by crushing garlic with oregano, salt, pepper, vinegar, and oil. Season turkey inside and out. Marinate 24 hours.",
        "For stuffing: sauté ground pork with sofrito, sazón, ham, olives, raisins, and capers. Let cool.",
        "Add soaked bread and hard-boiled eggs to the stuffing. Mix well.",
        "Stuff the turkey and close cavity with skewers and kitchen twine.",
        "Preheat oven to 325°F. Cover turkey with aluminum foil.",
        "Bake 3½ to 4 hours (20 minutes per pound), basting with butter every 45 minutes.",
        "Uncover the last hour to brown. Internal temp should reach 165°F.",
        "Let rest 20 minutes before carving."
      ]
    }
  },

  // ── PESCADOS (1983) ──
  {
    id: "pescado-escabeche",
    category: "pescados",
    name: { es: "Pescado en Escabeche", en: "Pickled Fish (Escabeche)" },
    time: "1 hr + reposo",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de pescado (chillo o sierra), en ruedas o filetes",
        "1 taza de aceite de oliva",
        "1 taza de vinagre",
        "2 cebollas grandes, cortadas en aros",
        "1 pimiento verde, cortado en tiras",
        "8 granos de pimienta",
        "3 hojas de laurel",
        "8 aceitunas rellenas",
        "Harina para enharinar",
        "Sal al gusto"
      ],
      en: [
        "2 lbs fish (snapper or kingfish), steaks or fillets",
        "1 cup olive oil",
        "1 cup vinegar",
        "2 large onions, sliced into rings",
        "1 green bell pepper, cut in strips",
        "8 peppercorns",
        "3 bay leaves",
        "8 stuffed olives",
        "Flour for dredging",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sale el pescado y enharine ligeramente. Fría en aceite caliente hasta dorar. Reserve.",
        "En una olla, caliente 1 taza de aceite de oliva. Sofría las cebollas y el pimiento hasta que estén blandos.",
        "Añada el vinagre, los granos de pimienta, las hojas de laurel, las aceitunas y la sal.",
        "Cocine 5 minutos. Retire del fuego.",
        "En un envase hondo, alterne capas de pescado frito y la mezcla de escabeche.",
        "Deje marinar en la nevera por al menos 6 horas o toda la noche. Sirva frío."
      ],
      en: [
        "Salt fish and lightly flour. Fry in hot oil until golden. Set aside.",
        "In a pot, heat 1 cup olive oil. Sauté onions and pepper until soft.",
        "Add vinegar, peppercorns, bay leaves, olives, and salt.",
        "Cook 5 minutes. Remove from heat.",
        "In a deep container, alternate layers of fried fish and the escabeche mixture.",
        "Marinate in the fridge for at least 6 hours or overnight. Serve cold."
      ]
    }
  },
  {
    id: "salmorejo-jueyes",
    category: "pescados",
    name: { es: "Salmorejo de Jueyes", en: "Land Crab Stew (Salmorejo)" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de carne de jueyes (cangrejos de tierra)",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 cucharadas de aceite con achiote",
        "1 taza de agua o caldo",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb land crab meat",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "2 tablespoons annatto oil",
        "1 cup water or broth",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, caliente el aceite con achiote y sofría el sofrito por 3 minutos.",
        "Añada el sazón, la salsa de tomate, las aceitunas y las alcaparras.",
        "Agregue la carne de jueyes y sofría 5 minutos.",
        "Vierta el agua o caldo. Cocine a fuego medio por 20 minutos hasta que la salsa espese.",
        "Ajuste la sal y pimienta. Sirva sobre arroz blanco o tostones."
      ],
      en: [
        "In a caldero, heat annatto oil and sauté sofrito for 3 minutes.",
        "Add sazón, tomato sauce, olives, and capers.",
        "Add crab meat and sauté 5 minutes.",
        "Pour in water or broth. Cook on medium heat for 20 minutes until sauce thickens.",
        "Adjust salt and pepper. Serve over white rice or tostones."
      ]
    }
  },

  // ── ENSALADAS (1983) ──
  {
    id: "ensalada-aguacate",
    category: "ensaladas",
    name: { es: "Ensalada de Aguacate", en: "Avocado Salad" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "2 aguacates maduros, cortados en lonjas",
        "2 tomates maduros, cortados en ruedas",
        "1 cebolla mediana, cortada en aros finos",
        "1 lechuga, lavada y cortada",
        "¼ taza de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 diente de ajo, machacado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 ripe avocados, sliced",
        "2 ripe tomatoes, sliced into rounds",
        "1 medium onion, thinly sliced into rings",
        "1 head lettuce, washed and chopped",
        "¼ cup olive oil",
        "2 tablespoons vinegar",
        "1 garlic clove, crushed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una fuente, coloque la lechuga como base.",
        "Arregle las lonjas de aguacate, las ruedas de tomate y los aros de cebolla de forma decorativa.",
        "Mezcle el aceite de oliva, el vinagre, el ajo, sal y pimienta para hacer el aderezo.",
        "Rocíe el aderezo sobre la ensalada justo antes de servir para que el aguacate no se oscurezca."
      ],
      en: [
        "On a platter, place lettuce as a base.",
        "Arrange avocado slices, tomato rounds, and onion rings decoratively.",
        "Mix olive oil, vinegar, garlic, salt, and pepper to make the dressing.",
        "Drizzle dressing over salad just before serving so avocado doesn't brown."
      ]
    }
  },

  // ── VEGETALES (1983) ──
  {
    id: "guineitos-tierno",
    category: "vegetales",
    name: { es: "Guineítos Niños Envueltos", en: "Finger Bananas in Sauce" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "12 guineítos niños (dátiles/finger bananas)",
        "2 cucharadas de mantequilla",
        "½ taza de azúcar morena",
        "1 raja de canela",
        "½ taza de vino dulce o moscatel",
        "Jugo de 1 naranja",
        "Pizca de sal"
      ],
      en: [
        "12 finger bananas (dátiles)",
        "2 tablespoons butter",
        "½ cup brown sugar",
        "1 cinnamon stick",
        "½ cup sweet wine or muscatel",
        "Juice of 1 orange",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Pele los guineítos con cuidado para mantenerlos enteros.",
        "En un sartén, derrita la mantequilla y añada el azúcar morena. Cocine hasta que se derrita.",
        "Añada el jugo de naranja, el vino y la canela. Cocine 3 minutos.",
        "Coloque los guineítos en la salsa. Cocine a fuego bajo por 15 minutos, bañándolos con la salsa.",
        "Sirva tibios como acompañante o postre con la salsa por encima."
      ],
      en: [
        "Peel finger bananas carefully to keep them whole.",
        "In a skillet, melt butter and add brown sugar. Cook until melted.",
        "Add orange juice, wine, and cinnamon. Cook 3 minutes.",
        "Place bananas in the sauce. Cook on low heat for 15 minutes, basting with sauce.",
        "Serve warm as a side dish or dessert with sauce spooned over."
      ]
    }
  },
  {
    id: "viandas-hervidas",
    category: "vegetales",
    name: { es: "Viandas Hervidas con Bacalao", en: "Boiled Root Vegetables with Codfish" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 plátanos verdes",
        "1 lb de yautía blanca",
        "1 lb de ñame",
        "2 guineos verdes",
        "½ lb de batata",
        "½ lb de bacalao seco, desalado",
        "Aceite de oliva al gusto",
        "1 cebolla, cortada en aros",
        "Vinagre al gusto"
      ],
      en: [
        "2 green plantains",
        "1 lb white yautía (taro)",
        "1 lb yam",
        "2 green bananas",
        "½ lb sweet potato",
        "½ lb dried codfish, desalted",
        "Olive oil to taste",
        "1 onion, sliced into rings",
        "Vinegar to taste"
      ]
    },
    steps: {
      es: [
        "Pele todas las viandas y córtelas en trozos grandes.",
        "Hierva en agua con sal por 25-30 minutos hasta que estén tiernas.",
        "Mientras, hierva el bacalao por 15 minutos. Escurra y desmenuce.",
        "Escurra las viandas y colóquelas en una fuente.",
        "Cubra con el bacalao desmenuzado, los aros de cebolla, aceite de oliva y vinagre.",
        "Sirva caliente como plato principal."
      ],
      en: [
        "Peel all root vegetables and cut into large chunks.",
        "Boil in salted water for 25-30 minutes until tender.",
        "Meanwhile, boil codfish for 15 minutes. Drain and shred.",
        "Drain vegetables and place on a serving platter.",
        "Top with shredded codfish, onion rings, olive oil, and vinegar.",
        "Serve hot as a main dish."
      ]
    }
  },

  // ── POSTRES (1983) ──
  {
    id: "brazo-gitano",
    category: "postres",
    name: { es: "Brazo Gitano", en: "Jelly Roll Cake" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "5 huevos, separados",
        "1 taza de azúcar",
        "1 taza de harina de trigo, cernida",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de vainilla",
        "Pizca de sal",
        "Relleno: mermelada de guayaba o crema pastelera",
        "Azúcar en polvo para decorar"
      ],
      en: [
        "5 eggs, separated",
        "1 cup sugar",
        "1 cup all-purpose flour, sifted",
        "1 teaspoon baking powder",
        "1 teaspoon vanilla",
        "Pinch of salt",
        "Filling: guava jam or pastry cream",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase y forre una bandeja de 15x10 con papel encerado.",
        "Bata las yemas con el azúcar hasta que estén pálidas y espumosas. Añada la vainilla.",
        "Bata las claras con sal a punto de nieve. Incorpore con movimientos envolventes a las yemas.",
        "Cierna la harina con el polvo de hornear sobre la mezcla. Integre con cuidado.",
        "Vierta en la bandeja y extienda uniformemente. Hornee 12-15 minutos.",
        "Voltee inmediatamente sobre un paño limpio espolvoreado con azúcar en polvo. Retire el papel.",
        "Enrolle el bizcocho con el paño mientras esté caliente. Deje enfriar.",
        "Desenrolle, unte con mermelada de guayaba y vuelva a enrollar. Espolvoree con azúcar en polvo."
      ],
      en: [
        "Preheat oven to 350°F. Grease and line a 15x10 jelly roll pan with parchment paper.",
        "Beat yolks with sugar until pale and fluffy. Add vanilla.",
        "Beat whites with salt to stiff peaks. Fold gently into yolk mixture.",
        "Sift flour with baking powder over the mixture. Fold in carefully.",
        "Pour into pan and spread evenly. Bake 12-15 minutes.",
        "Immediately flip onto a clean towel dusted with powdered sugar. Remove paper.",
        "Roll the cake up with the towel while still warm. Let cool.",
        "Unroll, spread with guava jam, and re-roll. Dust with powdered sugar."
      ]
    }
  },
  {
    id: "dulce-papaya",
    category: "postres",
    name: { es: "Dulce de Lechosa (Papaya)", en: "Candied Papaya" },
    time: "2 hrs",
    servings: 10,
    ingredients: {
      es: [
        "1 lechosa verde grande (4-5 lbs), pelada",
        "4 tazas de azúcar",
        "6 tazas de agua",
        "4 rajas de canela",
        "8 clavos de olor",
        "Jugo de 1 limón",
        "Queso del país para servir"
      ],
      en: [
        "1 large green papaya (4-5 lbs), peeled",
        "4 cups sugar",
        "6 cups water",
        "4 cinnamon sticks",
        "8 whole cloves",
        "Juice of 1 lime",
        "Local white cheese for serving"
      ]
    },
    steps: {
      es: [
        "Pele la lechosa, retire las semillas y corte en lonjas o tiras.",
        "Remoje las lonjas en agua con cal (o bicarbonato) por 2 horas para que queden firmes. Enjuague bien.",
        "En una olla grande, prepare un almíbar con el azúcar, el agua, la canela y los clavos. Hierva.",
        "Añada las lonjas de lechosa al almíbar. Cocine a fuego bajo por 1½ horas.",
        "La lechosa debe quedar translúcida y el almíbar espeso. Añada el jugo de limón.",
        "Deje enfriar y sirva con queso del país."
      ],
      en: [
        "Peel papaya, remove seeds and cut into slices or strips.",
        "Soak slices in lime water (or baking soda water) for 2 hours to firm them. Rinse well.",
        "In a large pot, make a syrup with sugar, water, cinnamon, and cloves. Bring to a boil.",
        "Add papaya slices to the syrup. Cook on low heat for 1½ hours.",
        "Papaya should become translucent and syrup thick. Add lime juice.",
        "Let cool and serve with local white cheese."
      ]
    }
  },
  {
    id: "besitos-coco",
    category: "postres",
    name: { es: "Besitos de Coco", en: "Coconut Kisses (Macaroons)" },
    time: "35 min",
    servings: 20,
    ingredients: {
      es: [
        "3 tazas de coco rallado fresco (o seco)",
        "1 taza de azúcar",
        "3 yemas de huevo",
        "2 cucharadas de mantequilla, derretida",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela",
        "Pizca de sal"
      ],
      en: [
        "3 cups fresh grated coconut (or dried)",
        "1 cup sugar",
        "3 egg yolks",
        "2 tablespoons butter, melted",
        "1 teaspoon vanilla",
        "½ teaspoon cinnamon",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase una bandeja de hornear.",
        "Mezcle el coco rallado con el azúcar, las yemas, la mantequilla, la vainilla, la canela y la sal.",
        "Forme bolitas con las manos (como besos) y colóquelas en la bandeja, separadas.",
        "Hornee por 18-20 minutos hasta que estén doradas por fuera.",
        "Deje enfriar en la bandeja. Quedan crujientes por fuera y suaves por dentro."
      ],
      en: [
        "Preheat oven to 350°F. Grease a baking sheet.",
        "Mix grated coconut with sugar, egg yolks, butter, vanilla, cinnamon, and salt.",
        "Form small balls (like kisses) and place on the sheet, spaced apart.",
        "Bake for 18-20 minutes until golden on the outside.",
        "Let cool on the sheet. They should be crispy outside and soft inside."
      ]
    }
  },

  // ── PANES (1983) ──
  {
    id: "panapen-horno",
    category: "panes",
    name: { es: "Panapén (Pana) al Horno", en: "Baked Breadfruit" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "1 panapén (pana de pepita) maduro",
        "3 cucharadas de mantequilla",
        "Sal al gusto",
        "Aceite de oliva (opcional)"
      ],
      en: [
        "1 ripe breadfruit",
        "3 tablespoons butter",
        "Salt to taste",
        "Olive oil (optional)"
      ]
    },
    steps: {
      es: [
        "Lave el panapén y haga cortes en forma de cruz en la base.",
        "Precaliente el horno a 375°F.",
        "Coloque el panapén directamente en la rejilla del horno con una bandeja debajo para recoger los jugos.",
        "Hornee por 1 hora o hasta que la cáscara esté oscura y al insertar un cuchillo la pulpa esté blanda.",
        "Corte a la mitad, retire el corazón y unte con mantequilla y sal.",
        "Corte en porciones y sirva como acompañante."
      ],
      en: [
        "Wash breadfruit and make cross-shaped cuts on the base.",
        "Preheat oven to 375°F.",
        "Place breadfruit directly on oven rack with a tray underneath to catch drips.",
        "Bake for 1 hour or until skin is dark and a knife goes in easily to soft flesh.",
        "Cut in half, remove the core and spread with butter and salt.",
        "Cut into portions and serve as a side dish."
      ]
    }
  },
  {
    id: "rosquillas",
    category: "panes",
    name: { es: "Rosquillas de Viento", en: "Puerto Rican Doughnuts (Rosquillas)" },
    time: "1 hr",
    servings: 15,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ taza de azúcar",
        "2 huevos",
        "¼ taza de mantequilla, suavizada",
        "½ cucharadita de polvo de hornear",
        "½ taza de leche",
        "1 cucharadita de vainilla",
        "Ralladura de 1 limón",
        "Aceite vegetal para freír",
        "Azúcar con canela para rebozar"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ cup sugar",
        "2 eggs",
        "¼ cup butter, softened",
        "½ teaspoon baking powder",
        "½ cup milk",
        "1 teaspoon vanilla",
        "Zest of 1 lime",
        "Vegetable oil for frying",
        "Cinnamon sugar for coating"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina con el polvo de hornear y el azúcar.",
        "Añada los huevos, la mantequilla, la leche, la vainilla y la ralladura. Amase hasta formar una masa suave.",
        "Deje reposar 15 minutos. Estire la masa a ½ pulgada de grosor.",
        "Corte con un cortador de rosquillas (o dos vasos de diferente tamaño).",
        "Caliente aceite a 350°F. Fría las rosquillas hasta que estén doradas, volteando una vez.",
        "Escurra y rebócelas inmediatamente en azúcar con canela."
      ],
      en: [
        "Mix flour with baking powder and sugar.",
        "Add eggs, butter, milk, vanilla, and zest. Knead into a smooth dough.",
        "Rest 15 minutes. Roll out to ½ inch thick.",
        "Cut with a doughnut cutter (or two different-sized glasses).",
        "Heat oil to 350°F. Fry doughnuts until golden, flipping once.",
        "Drain and immediately coat in cinnamon sugar."
      ]
    }
  },

  // ── SALSAS (1983) ──
  {
    id: "salsa-criolla",
    category: "salsas",
    name: { es: "Salsa Criolla para Carnes", en: "Creole Sauce for Meats" },
    time: "20 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tomates maduros, picados",
        "1 pimiento verde, picado",
        "1 cebolla grande, picada",
        "3 dientes de ajo, machacados",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de orégano",
        "1 cucharada de vinagre",
        "1 hoja de laurel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 ripe tomatoes, diced",
        "1 green bell pepper, diced",
        "1 large onion, diced",
        "3 garlic cloves, crushed",
        "2 tablespoons olive oil",
        "1 teaspoon oregano",
        "1 tablespoon vinegar",
        "1 bay leaf",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite en un sartén. Sofría la cebolla, el pimiento y el ajo por 5 minutos.",
        "Añada los tomates, el orégano y la hoja de laurel. Cocine 10 minutos a fuego medio.",
        "Agregue el vinagre, sal y pimienta. Cocine 3 minutos más.",
        "Retire la hoja de laurel. Sirva sobre carnes asadas, chuletas o bistecs."
      ],
      en: [
        "Heat oil in a skillet. Sauté onion, pepper, and garlic for 5 minutes.",
        "Add tomatoes, oregano, and bay leaf. Cook 10 minutes on medium heat.",
        "Add vinegar, salt, and pepper. Cook 3 more minutes.",
        "Remove bay leaf. Serve over roasted meats, pork chops, or steaks."
      ]
    }
  },

  // ── ENTREMESES (1983) ──
  {
    id: "surullitos-dulces",
    category: "entremeses",
    name: { es: "Surullitos Dulces", en: "Sweet Corn Sticks" },
    time: "25 min",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de agua",
        "1½ cucharadas de azúcar",
        "½ cucharadita de sal",
        "½ cucharadita de anís en grano (opcional)",
        "1½ tazas de harina de maíz amarilla",
        "Aceite vegetal para freír"
      ],
      en: [
        "2 cups water",
        "1½ tablespoons sugar",
        "½ teaspoon salt",
        "½ teaspoon anise seeds (optional)",
        "1½ cups yellow cornmeal",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el azúcar, la sal y el anís.",
        "Retire del fuego y añada la harina de maíz de golpe, revolviendo vigorosamente.",
        "Regrese al fuego bajo y revuelva por 3 minutos hasta que la masa se despegue de la olla.",
        "Deje enfriar un poco. Forme cilindros de 3 pulgadas con las manos húmedas.",
        "Fría en aceite caliente a 350°F hasta dorar. Son dulces por el azúcar y el anís.",
        "Escurra sobre papel toalla. Sirva como merienda o acompañante."
      ],
      en: [
        "Boil water with sugar, salt, and anise.",
        "Remove from heat and add cornmeal all at once, stirring vigorously.",
        "Return to low heat and stir for 3 minutes until dough pulls away from pot.",
        "Let cool slightly. Form 3-inch cylinders with wet hands.",
        "Fry in hot oil at 350°F until golden. They're sweet from the sugar and anise.",
        "Drain on paper towels. Serve as a snack or side."
      ]
    }
  },
  {
    id: "empanadillas-chaparro",
    category: "entremeses",
    name: { es: "Empanadillas de Chaparro", en: "Guava & Cheese Turnovers" },
    time: "40 min",
    servings: 12,
    ingredients: {
      es: [
        "1 paquete de discos para empanadillas",
        "1 barra de pasta de guayaba (8 oz), cortada en tiritas",
        "8 oz de queso blanco del país, cortado en tiritas",
        "Aceite vegetal para freír"
      ],
      en: [
        "1 package empanada discs",
        "1 bar guava paste (8 oz), cut into thin strips",
        "8 oz local white cheese, cut into thin strips",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Coloque una tirita de pasta de guayaba y una de queso en el centro de cada disco.",
        "Doble por la mitad y selle los bordes presionando con un tenedor.",
        "Caliente aceite a 350°F.",
        "Fría las empanadillas hasta que estén doradas, aproximadamente 3 minutos por lado.",
        "Escurra sobre papel toalla. El queso derretido con la guayaba es irresistible."
      ],
      en: [
        "Place a strip of guava paste and a strip of cheese in the center of each disc.",
        "Fold in half and seal edges by pressing with a fork.",
        "Heat oil to 350°F.",
        "Fry turnovers until golden, about 3 minutes per side.",
        "Drain on paper towels. The melted cheese with guava is irresistible."
      ]
    }
  },

  // ── CÓCTELES (1983) ──
  {
    id: "bilí",
    category: "cocteles",
    name: { es: "Bilí (Ron con Quenepa)", en: "Bilí (Rum & Quenepa Liqueur)" },
    time: "10 min + 2 semanas",
    servings: 15,
    ingredients: {
      es: [
        "2 lbs de quenepas maduras, peladas",
        "1 botella de ron blanco puertorriqueño (750 ml)",
        "1 taza de azúcar",
        "1 raja de canela",
        "3 clavos de olor"
      ],
      en: [
        "2 lbs ripe quenepas (Spanish limes), peeled",
        "1 bottle Puerto Rican white rum (750 ml)",
        "1 cup sugar",
        "1 cinnamon stick",
        "3 whole cloves"
      ]
    },
    steps: {
      es: [
        "Pele las quenepas y coloque la pulpa con sus semillas en un envase de cristal grande.",
        "Añada el azúcar, la canela y los clavos.",
        "Vierta el ron sobre las quenepas hasta cubrirlas.",
        "Tape bien y guarde en un lugar oscuro y fresco por al menos 2 semanas, agitando cada 2-3 días.",
        "Cuele y embotelle. Sirva bien frío en vasitos. El sabor mejora con el tiempo."
      ],
      en: [
        "Peel quenepas and place the pulp with seeds in a large glass jar.",
        "Add sugar, cinnamon, and cloves.",
        "Pour rum over the quenepas until covered.",
        "Seal well and store in a dark, cool place for at least 2 weeks, shaking every 2-3 days.",
        "Strain and bottle. Serve very cold in small glasses. Flavor improves over time."
      ]
    }
  },
  {
    id: "ponche-crema",
    category: "cocteles",
    name: { es: "Ponche de Crema Navideño", en: "Christmas Cream Punch" },
    time: "20 min",
    servings: 12,
    ingredients: {
      es: [
        "6 yemas de huevo",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "1 cucharadita de vainilla",
        "½ cucharadita de nuez moscada",
        "½ cucharadita de canela en polvo",
        "1 taza de ron dorado puertorriqueño",
        "Canela en raja para servir"
      ],
      en: [
        "6 egg yolks",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "1 teaspoon vanilla",
        "½ teaspoon nutmeg",
        "½ teaspoon ground cinnamon",
        "1 cup Puerto Rican golden rum",
        "Cinnamon sticks for serving"
      ]
    },
    steps: {
      es: [
        "Bata las yemas hasta que estén espesas y de color claro.",
        "Añada gradualmente la leche condensada y la leche evaporada, batiendo constantemente.",
        "Agregue la vainilla, la nuez moscada y la canela. Mezcle bien.",
        "Cocine a baño de María a fuego bajo por 10 minutos, revolviendo, hasta que espese ligeramente. No hierva.",
        "Retire del fuego, deje enfriar y añada el ron.",
        "Refrigere por al menos 4 horas. Sirva frío con una raja de canela."
      ],
      en: [
        "Beat yolks until thick and light in color.",
        "Gradually add condensed milk and evaporated milk, beating constantly.",
        "Add vanilla, nutmeg, and cinnamon. Mix well.",
        "Cook in a double boiler on low heat for 10 minutes, stirring, until slightly thick. Do not boil.",
        "Remove from heat, let cool and add rum.",
        "Refrigerate at least 4 hours. Serve cold with a cinnamon stick."
      ]
    }
  },

  // ══════════════════════════════════════════════════
  // ── NUEVAS CATEGORÍAS — Basadas en Cocine a Gusto
  // ══════════════════════════════════════════════════

  // ── FRUTAS ──
  {
    id: "dulce-coco",
    category: "frutas",
    name: { es: "Dulce de Coco Rallado", en: "Grated Coconut Candy" },
    time: "45 min",
    servings: 12,
    ingredients: {
      es: [
        "1 coco fresco, rallado (3 tazas aproximadamente)",
        "2 tazas de azúcar",
        "½ taza de agua",
        "1 raja de canela",
        "Jugo de 1 limón",
        "Colorante rojo (opcional, para hacer bicolor)"
      ],
      en: [
        "1 fresh coconut, grated (about 3 cups)",
        "2 cups sugar",
        "½ cup water",
        "1 cinnamon stick",
        "Juice of 1 lime",
        "Red food coloring (optional, for bicolor)"
      ]
    },
    steps: {
      es: [
        "En una olla, prepare un almíbar con el azúcar, el agua y la canela. Cocine hasta que forme un hilo al dejar caer de una cuchara.",
        "Añada el coco rallado y el jugo de limón. Revuelva constantemente a fuego medio.",
        "Si desea bicolor, divida la mezcla y añada colorante rojo a una mitad.",
        "Cocine hasta que la mezcla se despegue de la olla (unos 20 minutos).",
        "Vierta sobre una superficie engrasada o papel encerado. Deje enfriar y corte en cuadros."
      ],
      en: [
        "In a pot, make a syrup with sugar, water, and cinnamon. Cook until it forms a thread when dropped from a spoon.",
        "Add grated coconut and lime juice. Stir constantly over medium heat.",
        "If making bicolor, divide the mixture and add red coloring to one half.",
        "Cook until mixture pulls away from pot (about 20 minutes).",
        "Pour onto a greased surface or wax paper. Let cool and cut into squares."
      ]
    }
  },
  {
    id: "dulce-guayaba",
    category: "frutas",
    name: { es: "Pasta de Guayaba Casera", en: "Homemade Guava Paste" },
    time: "1 hr 30 min",
    servings: 15,
    ingredients: {
      es: [
        "3 lbs de guayabas maduras",
        "3 tazas de azúcar",
        "Jugo de 1 limón",
        "½ taza de agua"
      ],
      en: [
        "3 lbs ripe guavas",
        "3 cups sugar",
        "Juice of 1 lime",
        "½ cup water"
      ]
    },
    steps: {
      es: [
        "Lave las guayabas, córtelas y retire las semillas. Cocine en agua hasta que estén blandas.",
        "Pase por un colador fino para obtener la pulpa sin semillas.",
        "En una olla gruesa, combine la pulpa con el azúcar y el jugo de limón.",
        "Cocine a fuego medio-bajo, revolviendo constantemente por 45-60 minutos hasta que espese y se despegue de la olla.",
        "Vierta en un molde engrasado. Deje enfriar completamente y corte en barras.",
        "Sirva con queso blanco del país."
      ],
      en: [
        "Wash guavas, cut and remove seeds. Cook in water until soft.",
        "Pass through a fine strainer to get seedless pulp.",
        "In a heavy pot, combine pulp with sugar and lime juice.",
        "Cook on medium-low heat, stirring constantly for 45-60 minutes until thick and pulling away from pot.",
        "Pour into a greased mold. Let cool completely and cut into bars.",
        "Serve with local white cheese."
      ]
    }
  },
  {
    id: "mermelada-naranja",
    category: "frutas",
    name: { es: "Mermelada de China (Naranja)", en: "Orange Marmalade" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "6 chinas (naranjas) grandes",
        "3 tazas de azúcar",
        "2 tazas de agua",
        "Jugo de 1 limón"
      ],
      en: [
        "6 large oranges",
        "3 cups sugar",
        "2 cups water",
        "Juice of 1 lime"
      ]
    },
    steps: {
      es: [
        "Ralle la cáscara de 3 naranjas finamente. Exprima el jugo de todas las naranjas.",
        "Corte la cáscara rallada en tiritas finas.",
        "Hierva las tiritas de cáscara en agua por 10 minutos. Escurra.",
        "En una olla, combine el jugo de naranja, el azúcar, el agua, las tiritas de cáscara y el jugo de limón.",
        "Cocine a fuego medio, revolviendo, por 30-40 minutos hasta que espese y cubra el dorso de una cuchara.",
        "Vierta en frascos esterilizados. Deje enfriar y refrigere."
      ],
      en: [
        "Finely zest 3 oranges. Juice all oranges.",
        "Cut the zest into thin strips.",
        "Boil strips in water for 10 minutes. Drain.",
        "In a pot, combine orange juice, sugar, water, zest strips, and lime juice.",
        "Cook on medium heat, stirring, for 30-40 minutes until thick and coats the back of a spoon.",
        "Pour into sterilized jars. Let cool and refrigerate."
      ]
    }
  },
  {
    id: "dulce-papaya-verde",
    category: "frutas",
    name: { es: "Dulce de Papaya Verde en Almíbar", en: "Green Papaya in Syrup" },
    time: "2 hrs",
    servings: 10,
    ingredients: {
      es: [
        "1 papaya verde grande, pelada y cortada en tiras",
        "4 tazas de azúcar",
        "4 tazas de agua",
        "3 rajas de canela",
        "6 clavos de olor",
        "1 cucharada de bicarbonato (para remojar)"
      ],
      en: [
        "1 large green papaya, peeled and cut in strips",
        "4 cups sugar",
        "4 cups water",
        "3 cinnamon sticks",
        "6 whole cloves",
        "1 tablespoon baking soda (for soaking)"
      ]
    },
    steps: {
      es: [
        "Remoje las tiras de papaya en agua con bicarbonato por 2 horas para que queden firmes. Enjuague bien.",
        "Prepare un almíbar con el azúcar, el agua, la canela y los clavos. Hierva 5 minutos.",
        "Añada las tiras de papaya al almíbar. Cocine a fuego bajo por 1½ horas.",
        "La papaya debe quedar translúcida y el almíbar espeso.",
        "Sirva fría con queso blanco del país."
      ],
      en: [
        "Soak papaya strips in water with baking soda for 2 hours to firm them. Rinse well.",
        "Make syrup with sugar, water, cinnamon, and cloves. Boil 5 minutes.",
        "Add papaya strips to syrup. Cook on low heat for 1½ hours.",
        "Papaya should become translucent and syrup thick.",
        "Serve cold with local white cheese."
      ]
    }
  },

  // ── CEREALES ──
  {
    id: "funche",
    category: "cereales",
    name: { es: "Funche (Gofio de Maíz)", en: "Funche (Cornmeal Porridge)" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1 taza de harina de maíz amarilla",
        "3 tazas de leche de coco",
        "1 taza de agua",
        "½ taza de azúcar",
        "1 raja de canela",
        "½ cucharadita de sal",
        "1 cucharadita de vainilla",
        "Canela en polvo para espolvorear"
      ],
      en: [
        "1 cup yellow cornmeal",
        "3 cups coconut milk",
        "1 cup water",
        "½ cup sugar",
        "1 cinnamon stick",
        "½ teaspoon salt",
        "1 teaspoon vanilla",
        "Ground cinnamon for sprinkling"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle la harina de maíz con el agua fría hasta que no haya grumos.",
        "Añada la leche de coco, el azúcar, la sal y la canela en raja.",
        "Cocine a fuego medio, revolviendo constantemente por 20 minutos hasta que espese.",
        "Retire la canela en raja. Añada la vainilla.",
        "Vierta en platos hondos o moldes. Espolvoree con canela. Sirva tibio o frío."
      ],
      en: [
        "In a pot, mix cornmeal with cold water until no lumps remain.",
        "Add coconut milk, sugar, salt, and cinnamon stick.",
        "Cook over medium heat, stirring constantly for 20 minutes until thick.",
        "Remove cinnamon stick. Add vanilla.",
        "Pour into bowls or molds. Sprinkle with cinnamon. Serve warm or cold."
      ]
    }
  },
  {
    id: "avena-criolla",
    category: "cereales",
    name: { es: "Avena Criolla", en: "Puerto Rican Oatmeal" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "1 taza de avena",
        "3 tazas de leche",
        "½ taza de azúcar",
        "1 raja de canela",
        "½ cucharadita de vainilla",
        "Pizca de sal",
        "Canela en polvo para servir"
      ],
      en: [
        "1 cup oats",
        "3 cups milk",
        "½ cup sugar",
        "1 cinnamon stick",
        "½ teaspoon vanilla",
        "Pinch of salt",
        "Ground cinnamon for serving"
      ]
    },
    steps: {
      es: [
        "En una olla, combine la leche, la avena, el azúcar, la sal y la canela en raja.",
        "Cocine a fuego medio, revolviendo frecuentemente por 12-15 minutos.",
        "Cuando espese a su gusto, retire la canela y añada la vainilla.",
        "Sirva caliente o fría espolvoreada con canela en polvo."
      ],
      en: [
        "In a pot, combine milk, oats, sugar, salt, and cinnamon stick.",
        "Cook over medium heat, stirring frequently for 12-15 minutes.",
        "When thickened to your liking, remove cinnamon and add vanilla.",
        "Serve hot or cold sprinkled with ground cinnamon."
      ]
    }
  },
  {
    id: "harina-maiz-leche",
    category: "cereales",
    name: { es: "Harina de Maíz con Leche", en: "Cornmeal with Milk" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1 taza de harina de maíz fina",
        "2 tazas de leche",
        "2 tazas de agua",
        "¼ taza de azúcar",
        "½ cucharadita de sal",
        "1 cucharada de mantequilla",
        "Canela al gusto"
      ],
      en: [
        "1 cup fine cornmeal",
        "2 cups milk",
        "2 cups water",
        "¼ cup sugar",
        "½ teaspoon salt",
        "1 tablespoon butter",
        "Cinnamon to taste"
      ]
    },
    steps: {
      es: [
        "Disuelva la harina de maíz en el agua fría.",
        "En una olla, caliente la leche con el azúcar y la sal.",
        "Vierta la harina disuelta en la leche caliente, revolviendo constantemente.",
        "Cocine a fuego medio por 15 minutos, revolviendo para evitar grumos.",
        "Añada la mantequilla. Sirva en platos espolvoreada con canela."
      ],
      en: [
        "Dissolve cornmeal in cold water.",
        "In a pot, heat milk with sugar and salt.",
        "Pour dissolved cornmeal into hot milk, stirring constantly.",
        "Cook over medium heat for 15 minutes, stirring to prevent lumps.",
        "Add butter. Serve in bowls sprinkled with cinnamon."
      ]
    }
  },

  // ── GRANOS Y LEGUMBRES ──
  {
    id: "garbanzos-guisados",
    category: "granos",
    name: { es: "Garbanzos Guisados", en: "Stewed Chickpeas" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de garbanzos (15 oz cada una)",
        "½ lb de calabaza, cortada en cubos",
        "½ lb de jamón de cocinar, cortado en cubos",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "1 chorizo español, cortado en ruedas",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 cans chickpeas (15 oz each)",
        "½ lb calabaza (pumpkin), cubed",
        "½ lb cooking ham, cubed",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "1 Spanish chorizo, sliced into rounds",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada el jamón y el chorizo. Sofría 3 minutos.",
        "Agregue los garbanzos con su líquido y la calabaza.",
        "Cocine a fuego medio por 25 minutos hasta que la calabaza esté tierna y espese la salsa.",
        "Ajuste la sal. Sirva sobre arroz blanco."
      ],
      en: [
        "In a pot, heat oil and sauté sofrito with sazón and tomato sauce.",
        "Add ham and chorizo. Sauté 3 minutes.",
        "Add chickpeas with their liquid and calabaza.",
        "Cook on medium heat for 25 minutes until calabaza is tender and sauce thickens.",
        "Adjust salt. Serve over white rice."
      ]
    }
  },
  {
    id: "habichuelas-blancas",
    category: "granos",
    name: { es: "Habichuelas Blancas Guisadas", en: "Stewed White Beans" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de habichuelas blancas",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de salsa de tomate",
        "2 papas medianas, cortadas en cubos",
        "½ taza de aceitunas rellenas",
        "¼ lb de tocino, cortado en pedazos",
        "Sal al gusto"
      ],
      en: [
        "2 cans white beans",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup tomato sauce",
        "2 medium potatoes, cubed",
        "½ cup stuffed olives",
        "¼ lb bacon, cut into pieces",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Fría el tocino hasta que esté crujiente. En la misma grasa, sofría el sofrito con sazón y salsa de tomate.",
        "Añada las habichuelas con su líquido, las papas y las aceitunas.",
        "Cocine a fuego medio por 25 minutos hasta que las papas estén tiernas.",
        "Agregue el tocino crujiente. Ajuste la sal. Sirva sobre arroz blanco."
      ],
      en: [
        "Fry bacon until crispy. In the same fat, sauté sofrito with sazón and tomato sauce.",
        "Add beans with their liquid, potatoes, and olives.",
        "Cook on medium heat for 25 minutes until potatoes are tender.",
        "Add crispy bacon. Adjust salt. Serve over white rice."
      ]
    }
  },
  {
    id: "gandules-guisados",
    category: "granos",
    name: { es: "Gandules Guisados", en: "Stewed Pigeon Peas" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de gandules verdes",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de calabaza, cortada en cubos",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 cans green pigeon peas",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup calabaza, cubed",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate por 3 minutos.",
        "Añada los gandules con su líquido y la calabaza.",
        "Cocine a fuego medio por 20 minutos hasta que la calabaza se ablande y espese la salsa.",
        "Ajuste la sal. Sirva como acompañante con arroz blanco."
      ],
      en: [
        "In a pot, heat oil and sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Add pigeon peas with their liquid and calabaza.",
        "Cook on medium heat for 20 minutes until calabaza softens and sauce thickens.",
        "Adjust salt. Serve as a side with white rice."
      ]
    }
  },

  // ── HUEVOS Y QUESO ──
  {
    id: "tortilla-espanola",
    category: "huevos",
    name: { es: "Tortilla Española", en: "Spanish Omelette" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "6 huevos",
        "3 papas medianas, peladas y cortadas en rodajas finas",
        "1 cebolla mediana, picada finamente",
        "½ taza de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "6 eggs",
        "3 medium potatoes, peeled and thinly sliced",
        "1 medium onion, finely diced",
        "½ cup olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite en un sartén. Fría las papas y la cebolla a fuego medio-bajo por 15 minutos hasta que estén tiernas. No deben dorarse.",
        "Escurra las papas reservando el aceite. Bata los huevos con sal y añada las papas.",
        "En el mismo sartén con un poco del aceite reservado, vierta la mezcla de huevos y papas.",
        "Cocine a fuego bajo por 5 minutos hasta que cuaje por debajo.",
        "Con un plato grande, voltee la tortilla y cocine por el otro lado 3-4 minutos más.",
        "Sirva a temperatura ambiente cortada en triángulos."
      ],
      en: [
        "Heat oil in a skillet. Fry potatoes and onion over medium-low heat for 15 minutes until tender. They should not brown.",
        "Drain potatoes, reserving the oil. Beat eggs with salt and add potatoes.",
        "In the same skillet with some reserved oil, pour the egg and potato mixture.",
        "Cook on low heat for 5 minutes until set on the bottom.",
        "Using a large plate, flip the tortilla and cook the other side 3-4 more minutes.",
        "Serve at room temperature cut into triangles."
      ]
    }
  },
  {
    id: "revoltillo-bacalao",
    category: "huevos",
    name: { es: "Revoltillo de Bacalao", en: "Scrambled Eggs with Codfish" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "6 huevos",
        "½ lb de bacalao seco, desalado y desmenuzado",
        "1 cebolla mediana, picada",
        "1 tomate maduro, picado",
        "2 cucharadas de aceite de oliva",
        "Pimienta al gusto"
      ],
      en: [
        "6 eggs",
        "½ lb dried codfish, desalted and shredded",
        "1 medium onion, diced",
        "1 ripe tomato, diced",
        "2 tablespoons olive oil",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao cambiando el agua varias veces. Hierva 15 minutos y desmenuce.",
        "En un sartén, caliente el aceite y sofría la cebolla y el tomate por 3 minutos.",
        "Añada el bacalao desmenuzado. Sofría 2 minutos.",
        "Bata los huevos y viértalos en el sartén. Revuelva a fuego bajo hasta que cuajen.",
        "Sirva con pan sobao o tostadas y aguacate."
      ],
      en: [
        "Desalt codfish by changing water several times. Boil 15 minutes and shred.",
        "In a skillet, heat oil and sauté onion and tomato for 3 minutes.",
        "Add shredded codfish. Sauté 2 minutes.",
        "Beat eggs and pour into skillet. Scramble on low heat until set.",
        "Serve with pan sobao or toast and avocado."
      ]
    }
  },
  {
    id: "huevos-rellenos",
    category: "huevos",
    name: { es: "Huevos Rellenos", en: "Deviled Eggs" },
    time: "25 min",
    servings: 6,
    ingredients: {
      es: [
        "6 huevos duros",
        "3 cucharadas de mayonesa",
        "1 cucharadita de mostaza",
        "1 cucharada de aceitunas rellenas, picadas finamente",
        "1 cucharadita de vinagre",
        "Sal y pimienta al gusto",
        "Pimentón para decorar"
      ],
      en: [
        "6 hard-boiled eggs",
        "3 tablespoons mayonnaise",
        "1 teaspoon mustard",
        "1 tablespoon stuffed olives, finely chopped",
        "1 teaspoon vinegar",
        "Salt and pepper to taste",
        "Paprika for garnish"
      ]
    },
    steps: {
      es: [
        "Corte los huevos a la mitad a lo largo. Retire las yemas con cuidado.",
        "Maje las yemas con la mayonesa, mostaza, vinagre, aceitunas, sal y pimienta.",
        "Con una cuchara o manga pastelera, rellene las claras con la mezcla de yema.",
        "Espolvoree con pimentón. Refrigere antes de servir."
      ],
      en: [
        "Cut eggs in half lengthwise. Carefully remove the yolks.",
        "Mash yolks with mayonnaise, mustard, vinegar, olives, salt, and pepper.",
        "Using a spoon or piping bag, fill the whites with the yolk mixture.",
        "Sprinkle with paprika. Refrigerate before serving."
      ]
    }
  },
  {
    id: "queso-frito",
    category: "huevos",
    name: { es: "Queso del País Frito", en: "Fried Local White Cheese" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de queso del país (queso blanco fresco), cortado en lonjas de ½ pulgada",
        "2 cucharadas de aceite de oliva",
        "Pasta de guayaba para acompañar"
      ],
      en: [
        "1 lb local white cheese (queso fresco), cut into ½-inch slices",
        "2 tablespoons olive oil",
        "Guava paste for serving"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite en un sartén a fuego medio.",
        "Coloque las lonjas de queso y fría por 2 minutos por cada lado hasta que estén doradas.",
        "Sirva inmediatamente con lonjas de pasta de guayaba al lado."
      ],
      en: [
        "Heat oil in a skillet over medium heat.",
        "Place cheese slices and fry 2 minutes per side until golden.",
        "Serve immediately with slices of guava paste on the side."
      ]
    }
  },

  // ── BIZCOCHOS ──
  {
    id: "bizcocho-vainilla",
    category: "bizcochos",
    name: { es: "Bizcocho de Vainilla", en: "Vanilla Cake" },
    time: "1 hr",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de harina de trigo, cernida",
        "2 tazas de azúcar",
        "1 taza de mantequilla, suavizada",
        "4 huevos",
        "1 taza de leche",
        "2 cucharaditas de polvo de hornear",
        "2 cucharaditas de vainilla",
        "½ cucharadita de sal"
      ],
      en: [
        "3 cups all-purpose flour, sifted",
        "2 cups sugar",
        "1 cup butter, softened",
        "4 eggs",
        "1 cup milk",
        "2 teaspoons baking powder",
        "2 teaspoons vanilla",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase y enharine dos moldes redondos de 9 pulgadas.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa y esponjosa.",
        "Añada los huevos uno a uno, batiendo bien después de cada uno. Agregue la vainilla.",
        "Cierna la harina con el polvo de hornear y la sal. Añada a la mezcla alternando con la leche.",
        "Vierta en los moldes. Hornee 30-35 minutos hasta que al insertar un palillo salga limpio.",
        "Deje enfriar. Decore con mantecado o glaseado de su preferencia."
      ],
      en: [
        "Preheat oven to 350°F. Grease and flour two 9-inch round pans.",
        "Beat butter with sugar until creamy and fluffy.",
        "Add eggs one at a time, beating well after each. Add vanilla.",
        "Sift flour with baking powder and salt. Add to mixture alternating with milk.",
        "Pour into pans. Bake 30-35 minutes until a toothpick comes out clean.",
        "Let cool. Decorate with frosting of your choice."
      ]
    }
  },
  {
    id: "bizcocho-chocolate",
    category: "bizcochos",
    name: { es: "Bizcocho de Chocolate", en: "Chocolate Cake" },
    time: "1 hr",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "2 tazas de azúcar",
        "¾ taza de cacao en polvo",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de bicarbonato",
        "1 taza de leche",
        "½ taza de aceite vegetal",
        "2 huevos",
        "1 taza de café fuerte caliente",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 cups all-purpose flour",
        "2 cups sugar",
        "¾ cup cocoa powder",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "1 cup milk",
        "½ cup vegetable oil",
        "2 eggs",
        "1 cup hot strong coffee",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase dos moldes de 9 pulgadas.",
        "En un tazón, mezcle todos los ingredientes secos: harina, azúcar, cacao, polvo de hornear, bicarbonato.",
        "Añada la leche, el aceite, los huevos y la vainilla. Bata 2 minutos.",
        "Agregue el café caliente. La masa quedará líquida — es normal.",
        "Vierta en los moldes. Hornee 30-35 minutos.",
        "Deje enfriar y cubra con un glaseado de chocolate."
      ],
      en: [
        "Preheat oven to 350°F. Grease two 9-inch pans.",
        "In a bowl, mix all dry ingredients: flour, sugar, cocoa, baking powder, baking soda.",
        "Add milk, oil, eggs, and vanilla. Beat 2 minutes.",
        "Add hot coffee. The batter will be thin — that's normal.",
        "Pour into pans. Bake 30-35 minutes.",
        "Let cool and cover with chocolate frosting."
      ]
    }
  },
  {
    id: "bizcocho-naranja",
    category: "bizcochos",
    name: { es: "Bizcocho de China (Naranja)", en: "Orange Cake" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "1½ tazas de azúcar",
        "¾ taza de mantequilla, suavizada",
        "3 huevos",
        "¾ taza de jugo de china (naranja) fresco",
        "Ralladura de 2 chinas",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "Glaseado: 1 taza de azúcar en polvo + jugo de china"
      ],
      en: [
        "2½ cups all-purpose flour",
        "1½ cups sugar",
        "¾ cup butter, softened",
        "3 eggs",
        "¾ cup fresh orange juice",
        "Zest of 2 oranges",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "Glaze: 1 cup powdered sugar + orange juice"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase un molde Bundt o de tubo.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa. Añada los huevos uno a uno.",
        "Agregue la ralladura de naranja.",
        "Mezcle la harina con el polvo de hornear y la sal. Añada alternando con el jugo de naranja.",
        "Vierta en el molde. Hornee 40-45 minutos.",
        "Para el glaseado: mezcle el azúcar en polvo con suficiente jugo de naranja para obtener una consistencia que fluya. Vierta sobre el bizcocho frío."
      ],
      en: [
        "Preheat oven to 350°F. Grease a Bundt or tube pan.",
        "Beat butter with sugar until creamy. Add eggs one at a time.",
        "Add orange zest.",
        "Mix flour with baking powder and salt. Add alternating with orange juice.",
        "Pour into pan. Bake 40-45 minutes.",
        "For glaze: mix powdered sugar with enough orange juice to get a flowing consistency. Pour over cooled cake."
      ]
    }
  },

  // ── GALLETITAS ──
  {
    id: "polvorones",
    category: "galletitas",
    name: { es: "Polvorones", en: "Puerto Rican Shortbread Cookies" },
    time: "30 min",
    servings: 24,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "1 taza de manteca vegetal o mantequilla",
        "½ taza de azúcar en polvo",
        "1 cucharadita de vainilla",
        "¼ cucharadita de sal",
        "Azúcar en polvo extra para rebozar"
      ],
      en: [
        "2 cups all-purpose flour",
        "1 cup vegetable shortening or butter",
        "½ cup powdered sugar",
        "1 teaspoon vanilla",
        "¼ teaspoon salt",
        "Extra powdered sugar for coating"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 325°F.",
        "Bata la manteca con el azúcar en polvo y la vainilla hasta que esté esponjosa.",
        "Añada la harina y la sal. Mezcle hasta formar una masa suave.",
        "Forme bolitas de 1 pulgada y colóquelas en una bandeja sin engrasar.",
        "Hornee por 15-18 minutos. No deben dorarse mucho.",
        "Mientras estén tibias, rebócelas en azúcar en polvo. Repita cuando se enfríen."
      ],
      en: [
        "Preheat oven to 325°F.",
        "Beat shortening with powdered sugar and vanilla until fluffy.",
        "Add flour and salt. Mix until a soft dough forms.",
        "Form 1-inch balls and place on an ungreased sheet.",
        "Bake for 15-18 minutes. They should not brown too much.",
        "While still warm, coat in powdered sugar. Repeat when cooled."
      ]
    }
  },
  {
    id: "mantecaditos",
    category: "galletitas",
    name: { es: "Mantecaditos", en: "Lard Cookies (Mantecaditos)" },
    time: "30 min",
    servings: 30,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 taza de manteca vegetal",
        "½ taza de azúcar",
        "1 cucharadita de vainilla o extracto de almendra",
        "½ cucharadita de polvo de hornear",
        "Pizca de sal",
        "Cerezas marraschino para decorar"
      ],
      en: [
        "3 cups all-purpose flour",
        "1 cup vegetable shortening",
        "½ cup sugar",
        "1 teaspoon vanilla or almond extract",
        "½ teaspoon baking powder",
        "Pinch of salt",
        "Maraschino cherries for topping"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F.",
        "Bata la manteca con el azúcar hasta que esté cremosa. Añada la vainilla.",
        "Mezcle la harina con el polvo de hornear y la sal. Incorpore a la mezcla de manteca.",
        "Forme bolitas y colóquelas en una bandeja. Presione una cereza en el centro de cada una.",
        "Hornee 15-18 minutos hasta que estén firmes pero sin dorar mucho.",
        "Deje enfriar en la bandeja."
      ],
      en: [
        "Preheat oven to 350°F.",
        "Beat shortening with sugar until creamy. Add vanilla.",
        "Mix flour with baking powder and salt. Incorporate into shortening mixture.",
        "Form balls and place on a sheet. Press a cherry into the center of each.",
        "Bake 15-18 minutes until firm but not too brown.",
        "Let cool on the sheet."
      ]
    }
  },
  {
    id: "cucas",
    category: "galletitas",
    name: { es: "Cucas (Galletas de Jengibre)", en: "Cucas (Ginger Cookies)" },
    time: "30 min",
    servings: 20,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ taza de mantequilla, suavizada",
        "¾ taza de azúcar morena",
        "1 huevo",
        "¼ taza de melao (melaza)",
        "1 cucharadita de jengibre en polvo",
        "1 cucharadita de canela",
        "½ cucharadita de bicarbonato",
        "¼ cucharadita de clavo en polvo",
        "Pizca de sal"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ cup butter, softened",
        "¾ cup brown sugar",
        "1 egg",
        "¼ cup molasses",
        "1 teaspoon ground ginger",
        "1 teaspoon cinnamon",
        "½ teaspoon baking soda",
        "¼ teaspoon ground cloves",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F.",
        "Bata la mantequilla con el azúcar morena. Añada el huevo y el melao.",
        "Mezcle los ingredientes secos y añádalos a la masa. Mezcle bien.",
        "Forme bolitas y colóquelas en una bandeja engrasada, aplastándolas ligeramente.",
        "Hornee 10-12 minutos hasta que estén firmes.",
        "Deje enfriar. Son crujientes por fuera y suaves por dentro."
      ],
      en: [
        "Preheat oven to 350°F.",
        "Beat butter with brown sugar. Add egg and molasses.",
        "Mix dry ingredients and add to the dough. Mix well.",
        "Form balls and place on a greased sheet, flattening slightly.",
        "Bake 10-12 minutes until firm.",
        "Let cool. They're crispy outside and soft inside."
      ]
    }
  },

  // ── PASTELES DULCES ──
  {
    id: "pastel-guayaba",
    category: "pasteles_dulces",
    name: { es: "Pastel de Guayaba y Queso", en: "Guava & Cheese Pie" },
    time: "50 min",
    servings: 8,
    ingredients: {
      es: [
        "2 masas de hojaldre (puff pastry) descongeladas",
        "1 barra de pasta de guayaba (14 oz), cortada en lonjas finas",
        "8 oz de queso crema, suavizado",
        "1 huevo batido para barnizar",
        "Azúcar para espolvorear"
      ],
      en: [
        "2 puff pastry sheets, thawed",
        "1 bar guava paste (14 oz), thinly sliced",
        "8 oz cream cheese, softened",
        "1 beaten egg for egg wash",
        "Sugar for sprinkling"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 400°F.",
        "Extienda una masa de hojaldre en un molde de pie engrasado.",
        "Unte el queso crema sobre la masa. Cubra con lonjas de pasta de guayaba.",
        "Cubra con la segunda masa de hojaldre. Selle los bordes con un tenedor.",
        "Barnize con huevo batido y espolvoree con azúcar. Haga cortes para que salga el vapor.",
        "Hornee 25-30 minutos hasta que esté dorado. Deje enfriar antes de cortar."
      ],
      en: [
        "Preheat oven to 400°F.",
        "Lay one puff pastry sheet in a greased pie pan.",
        "Spread cream cheese over the pastry. Cover with guava paste slices.",
        "Cover with the second puff pastry sheet. Seal edges with a fork.",
        "Brush with beaten egg and sprinkle with sugar. Cut slits for steam.",
        "Bake 25-30 minutes until golden. Let cool before slicing."
      ]
    }
  },
  {
    id: "flan-calabaza",
    category: "pasteles_dulces",
    name: { es: "Flan de Calabaza", en: "Pumpkin Flan" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de puré de calabaza",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "4 huevos",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "1 cucharadita de vainilla",
        "1 taza de azúcar para el caramelo"
      ],
      en: [
        "2 cups pumpkin purée",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "4 eggs",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "1 teaspoon vanilla",
        "1 cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Prepare el caramelo derritiendo el azúcar en un molde redondo. Cubra el fondo.",
        "Licúe el puré de calabaza, las leches, los huevos, la canela, nuez moscada y vainilla.",
        "Vierta sobre el caramelo.",
        "Hornee en baño de María a 350°F por 1 hora o hasta que cuaje.",
        "Deje enfriar completamente. Refrigere mínimo 4 horas.",
        "Voltee sobre un plato. La combinación de calabaza y caramelo es exquisita."
      ],
      en: [
        "Make caramel by melting sugar in a round mold. Coat the bottom.",
        "Blend pumpkin purée, milks, eggs, cinnamon, nutmeg, and vanilla.",
        "Pour over caramel.",
        "Bake in a water bath at 350°F for 1 hour or until set.",
        "Let cool completely. Refrigerate at least 4 hours.",
        "Flip onto a plate. The pumpkin and caramel combination is exquisite."
      ]
    }
  },
  {
    id: "bienmesabe",
    category: "pasteles_dulces",
    name: { es: "Bienmesabe de Coco", en: "Coconut Bienmesabe" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "1 bizcocho esponjoso, cortado en capas",
        "2 latas de leche de coco (13.5 oz)",
        "1 lata de leche condensada (14 oz)",
        "6 yemas de huevo",
        "½ taza de azúcar",
        "1 cucharadita de vainilla",
        "1 taza de coco rallado",
        "Canela en polvo"
      ],
      en: [
        "1 sponge cake, cut into layers",
        "2 cans coconut milk (13.5 oz)",
        "1 can condensed milk (14 oz)",
        "6 egg yolks",
        "½ cup sugar",
        "1 teaspoon vanilla",
        "1 cup grated coconut",
        "Ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Prepare la crema: mezcle las yemas con el azúcar. Añada la leche de coco y la leche condensada.",
        "Cocine a baño de María, revolviendo constantemente, hasta que espese y cubra el dorso de una cuchara (15 minutos). Añada la vainilla.",
        "En un molde, coloque una capa de bizcocho. Vierta crema encima. Espolvoree coco rallado.",
        "Repita las capas hasta terminar con crema y coco.",
        "Espolvoree canela en polvo. Refrigere por al menos 4 horas.",
        "Sirva frío. Es uno de los postres más elegantes de la cocina puertorriqueña."
      ],
      en: [
        "Make the cream: mix yolks with sugar. Add coconut milk and condensed milk.",
        "Cook in a double boiler, stirring constantly, until it thickens and coats the back of a spoon (15 minutes). Add vanilla.",
        "In a mold, place a layer of cake. Pour cream over it. Sprinkle grated coconut.",
        "Repeat layers until ending with cream and coconut.",
        "Sprinkle ground cinnamon. Refrigerate at least 4 hours.",
        "Serve cold. It's one of the most elegant desserts in Puerto Rican cuisine."
      ]
    }
  },

  // ── EMPAREDADOS ──
  {
    id: "sandwich-mezcla",
    category: "emparedados",
    name: { es: "Sándwich de Mezcla", en: "Puerto Rican Party Sandwich Spread" },
    time: "20 min",
    servings: 12,
    ingredients: {
      es: [
        "1 lata de jamón del diablo (deviled ham)",
        "1 paquete de queso crema (8 oz), suavizado",
        "½ taza de aceitunas rellenas, picadas finamente",
        "2 cucharadas de pimiento morrón, picado",
        "1 cucharada de mostaza",
        "Pan de molde blanco sin corteza"
      ],
      en: [
        "1 can deviled ham",
        "1 package cream cheese (8 oz), softened",
        "½ cup stuffed olives, finely chopped",
        "2 tablespoons pimiento, diced",
        "1 tablespoon mustard",
        "White sandwich bread, crusts removed"
      ]
    },
    steps: {
      es: [
        "Mezcle el jamón del diablo con el queso crema hasta obtener una pasta suave.",
        "Añada las aceitunas, el pimiento morrón y la mostaza. Combine bien.",
        "Unte generosamente sobre el pan de molde sin corteza.",
        "Cubra con otra rebanada de pan. Corte en triángulos o rectángulos.",
        "Sirva como parte del menú de fiestas y actividades."
      ],
      en: [
        "Mix deviled ham with cream cheese until smooth.",
        "Add olives, pimiento, and mustard. Combine well.",
        "Spread generously on crustless bread.",
        "Top with another bread slice. Cut into triangles or rectangles.",
        "Serve as part of a party menu."
      ]
    }
  },
  {
    id: "medianoche",
    category: "emparedados",
    name: { es: "Sándwich de Medianoche", en: "Midnight Sandwich (Medianoche)" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 panes de medianoche (pan dulce tipo egg bread)",
        "½ lb de pernil asado, cortado fino",
        "½ lb de jamón cocido, cortado fino",
        "4 lonjas de queso suizo",
        "Mostaza amarilla",
        "Pepinillos en vinagre, cortados en lonjas",
        "Mantequilla para la plancha"
      ],
      en: [
        "4 medianoche rolls (sweet egg bread)",
        "½ lb roast pork, thinly sliced",
        "½ lb cooked ham, thinly sliced",
        "4 slices Swiss cheese",
        "Yellow mustard",
        "Dill pickles, sliced",
        "Butter for the press"
      ]
    },
    steps: {
      es: [
        "Corte los panes a la mitad horizontalmente. Unte mostaza en ambos lados.",
        "Coloque capas de pernil, jamón, queso y pepinillos.",
        "Cierre los sándwiches. Unte mantequilla por fuera.",
        "Cocine en una plancha o sartén pesado, presionando, hasta que el pan esté dorado y el queso derretido.",
        "Corte a la mitad y sirva caliente."
      ],
      en: [
        "Slice rolls in half horizontally. Spread mustard on both sides.",
        "Layer roast pork, ham, cheese, and pickles.",
        "Close sandwiches. Butter the outside.",
        "Cook on a press or heavy skillet, pressing down, until bread is golden and cheese is melted.",
        "Cut in half and serve hot."
      ]
    }
  },
  {
    id: "cubano",
    category: "emparedados",
    name: { es: "Sándwich Cubano", en: "Cuban Sandwich" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 panes de agua (pan cubano) o baguettes",
        "½ lb de pernil asado, cortado fino",
        "½ lb de jamón cocido",
        "4 lonjas de queso suizo",
        "Mostaza amarilla",
        "Pepinillos en vinagre",
        "Mantequilla para la plancha"
      ],
      en: [
        "4 Cuban bread rolls or baguettes",
        "½ lb roast pork, thinly sliced",
        "½ lb cooked ham",
        "4 slices Swiss cheese",
        "Yellow mustard",
        "Dill pickles",
        "Butter for the press"
      ]
    },
    steps: {
      es: [
        "Corte el pan a lo largo. Unte mostaza generosamente.",
        "Coloque capas de pernil, jamón, queso y pepinillos.",
        "Cierre y unte mantequilla por fuera del pan.",
        "Cocine en una plancha caliente, presionando firmemente, hasta que esté crujiente y el queso se derrita.",
        "Sirva caliente cortado a la mitad."
      ],
      en: [
        "Slice bread lengthwise. Spread mustard generously.",
        "Layer roast pork, ham, cheese, and pickles.",
        "Close and butter the outside of the bread.",
        "Cook on a hot press, pressing firmly, until crispy and cheese melts.",
        "Serve hot cut in half."
      ]
    }
  },

  // ══════════════════════════════════════════════════
  // ── EXPANSIÓN — Recetas Adicionales Tradicionales
  // ══════════════════════════════════════════════════

  // ── SOPAS (adicionales) ──
  {
    id: "asopao-camarones",
    category: "sopas",
    name: { es: "Asopao de Camarones", en: "Shrimp Asopao" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1½ lbs de camarones grandes, pelados y limpios",
        "1½ tazas de arroz grano corto",
        "8 tazas de caldo de camarones o pollo",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 pimiento rojo asado, en tiras",
        "½ taza de petit pois",
        "Sal, pimienta y orégano al gusto"
      ],
      en: [
        "1½ lbs large shrimp, peeled and cleaned",
        "1½ cups short grain rice",
        "8 cups shrimp or chicken broth",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "1 roasted red pepper, in strips",
        "½ cup petit pois",
        "Salt, pepper, and oregano to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, sofría el sofrito con el sazón y la salsa de tomate por 3 minutos.",
        "Añada el caldo, las aceitunas y las alcaparras. Hierva.",
        "Agregue el arroz y cocine a fuego medio sin tapa por 20 minutos, revolviendo ocasionalmente.",
        "Añada los camarones y cocine 5 minutos más hasta que estén rosados.",
        "El asopao debe quedar caldoso. Decore con pimiento, petit pois y sirva."
      ],
      en: [
        "In a caldero, sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Add broth, olives, and capers. Bring to a boil.",
        "Add rice and cook on medium heat uncovered for 20 minutes, stirring occasionally.",
        "Add shrimp and cook 5 more minutes until pink.",
        "Asopao should be soupy. Garnish with pepper strips, petit pois, and serve."
      ]
    }
  },
  {
    id: "sopa-gandules-bolitas",
    category: "sopas",
    name: { es: "Sopa de Gandules con Bolitas de Plátano", en: "Pigeon Pea Soup with Plantain Dumplings" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de gandules verdes",
        "3 plátanos verdes, rallados",
        "½ lb de carne de cerdo, cortada en trozos",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "8 tazas de agua",
        "1 calabaza pequeña, cortada en cubos",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 cans green pigeon peas",
        "3 green plantains, grated",
        "½ lb pork, cut into pieces",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "8 cups water",
        "1 small calabaza, cubed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría el cerdo con el sofrito y el sazón por 5 minutos.",
        "Añada el agua y hierva. Cocine la carne por 20 minutos.",
        "Con el plátano rallado, forme bolitas pequeñas con las manos.",
        "Añada los gandules, la calabaza y las bolitas de plátano.",
        "Cocine a fuego medio por 25 minutos. La calabaza espesará el caldo.",
        "Ajuste la sal y pimienta. Sirva caliente."
      ],
      en: [
        "In a pot, sauté pork with sofrito and sazón for 5 minutes.",
        "Add water and bring to a boil. Cook meat for 20 minutes.",
        "With the grated plantain, form small dumplings with your hands.",
        "Add pigeon peas, calabaza, and plantain dumplings.",
        "Cook on medium heat for 25 minutes. Calabaza will thicken the broth.",
        "Adjust salt and pepper. Serve hot."
      ]
    }
  },
  {
    id: "mondongo",
    category: "sopas",
    name: { es: "Mondongo Criollo", en: "Tripe Stew (Mondongo)" },
    time: "2 hrs 30 min",
    servings: 8,
    ingredients: {
      es: [
        "2 lbs de mondongo (callos), limpio y cortado en trozos",
        "1 pata de cerdo, cortada (opcional)",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "2 papas grandes, cortadas en cubos",
        "1 lb de calabaza, cortada en cubos",
        "2 plátanos verdes, cortados en ruedas",
        "1 lb de yautía, cortada",
        "1 mazorca de maíz, cortada en trozos",
        "½ taza de garbanzos cocidos",
        "Sal al gusto"
      ],
      en: [
        "2 lbs tripe, cleaned and cut into pieces",
        "1 pig's foot, cut (optional)",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "2 large potatoes, cubed",
        "1 lb calabaza, cubed",
        "2 green plantains, cut into rounds",
        "1 lb yautía, cut",
        "1 ear of corn, cut into chunks",
        "½ cup cooked chickpeas",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave el mondongo con limón y sal. Hierva en agua con sal por 1½ horas hasta que esté tierno.",
        "En una olla grande, sofría el sofrito con sazón y salsa de tomate.",
        "Añada el mondongo cocido con su caldo, la pata de cerdo y los garbanzos.",
        "Agregue los plátanos, la yautía, el maíz y la calabaza. Cocine 20 minutos.",
        "Añada las papas y cocine 15 minutos más hasta que todo esté tierno.",
        "La calabaza espesará el caldo. Ajuste la sal y sirva caliente."
      ],
      en: [
        "Wash tripe with lime and salt. Boil in salted water for 1½ hours until tender.",
        "In a large pot, sauté sofrito with sazón and tomato sauce.",
        "Add cooked tripe with its broth, pig's foot, and chickpeas.",
        "Add plantains, yautía, corn, and calabaza. Cook 20 minutes.",
        "Add potatoes and cook 15 more minutes until everything is tender.",
        "Calabaza will thicken the broth. Adjust salt and serve hot."
      ]
    }
  },

  // ── ARROCES (adicionales) ──
  {
    id: "arroz-camarones",
    category: "arroces",
    name: { es: "Arroz con Camarones", en: "Shrimp Rice" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "1½ lbs de camarones, pelados",
        "4 tazas de caldo de camarones o agua",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 cups medium grain rice",
        "1½ lbs shrimp, peeled",
        "4 cups shrimp stock or water",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "2 tablespoons olive oil",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada los camarones y sofría 2 minutos. Retire los camarones y reserve.",
        "Agregue el caldo, las aceitunas y hierva.",
        "Añada el arroz, mezcle una vez. Cocine sin tapa hasta que el líquido se absorba.",
        "Regrese los camarones, tape y baje el fuego. Cocine 20 minutos.",
        "Voltee con cuchara antes de servir."
      ],
      en: [
        "In a caldero, heat oil and sauté sofrito with sazón and tomato sauce.",
        "Add shrimp and sauté 2 minutes. Remove shrimp and set aside.",
        "Add broth, olives, and bring to a boil.",
        "Add rice, stir once. Cook uncovered until liquid is absorbed.",
        "Return shrimp, cover and lower heat. Cook 20 minutes.",
        "Fold with a spoon before serving."
      ]
    }
  },
  {
    id: "arroz-bacalao",
    category: "arroces",
    name: { es: "Arroz con Bacalao", en: "Rice with Codfish" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "1 lb de bacalao seco, desalado y desmenuzado",
        "4 tazas de agua",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "3 cups medium grain rice",
        "1 lb dried codfish, desalted and shredded",
        "4 cups water",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao cambiando el agua varias veces. Hierva 15 minutos y desmenuce.",
        "En un caldero, caliente el aceite y sofría el sofrito con sazón y salsa de tomate.",
        "Añada el bacalao, las aceitunas y las alcaparras. Sofría 3 minutos.",
        "Agregue el agua y hierva. Añada el arroz.",
        "Cocine sin tapa hasta absorber el líquido. Tape y baje el fuego por 20 minutos."
      ],
      en: [
        "Desalt codfish by changing water several times. Boil 15 minutes and shred.",
        "In a caldero, heat oil and sauté sofrito with sazón and tomato sauce.",
        "Add codfish, olives, and capers. Sauté 3 minutes.",
        "Add water and bring to a boil. Add rice.",
        "Cook uncovered until liquid is absorbed. Cover and lower heat for 20 minutes."
      ]
    }
  },
  {
    id: "arroz-pernil",
    category: "arroces",
    name: { es: "Arroz con Pernil", en: "Rice with Roast Pork" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "2 tazas de pernil asado, desmenuzado",
        "4 tazas de caldo del pernil o agua",
        "2 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de aceite con achiote",
        "¼ taza de aceitunas rellenas",
        "Sal al gusto"
      ],
      en: [
        "3 cups medium grain rice",
        "2 cups roast pork, shredded",
        "4 cups pork drippings broth or water",
        "2 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons annatto oil",
        "¼ cup stuffed olives",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, caliente el aceite con achiote y sofría el sofrito con el sazón.",
        "Añada el pernil desmenuzado y las aceitunas. Sofría 3 minutos.",
        "Agregue el caldo y hierva. Añada el arroz.",
        "Cocine sin tapa hasta que se absorba el líquido. Tape, baje el fuego y cocine 20 minutos.",
        "Voltee y sirva. El arroz absorbe el sabor del pernil."
      ],
      en: [
        "In a caldero, heat annatto oil and sauté sofrito with sazón.",
        "Add shredded pork and olives. Sauté 3 minutes.",
        "Add broth and bring to a boil. Add rice.",
        "Cook uncovered until liquid is absorbed. Cover, lower heat and cook 20 minutes.",
        "Fold and serve. The rice absorbs the pork flavor."
      ]
    }
  },
  {
    id: "locrio-salami",
    category: "arroces",
    name: { es: "Locrio de Salami", en: "Salami Rice (Locrio)" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "2 tazas de arroz grano mediano",
        "½ lb de salami, cortado en cubos",
        "3 tazas de agua",
        "2 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "1 cucharada de aceite vegetal",
        "Sal al gusto"
      ],
      en: [
        "2 cups medium grain rice",
        "½ lb salami, cubed",
        "3 cups water",
        "2 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "1 tablespoon vegetable oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, dore el salami en aceite hasta que suelte su grasa. Retire un poco de la grasa.",
        "Sofría el sofrito con el sazón y la salsa de tomate por 2 minutos.",
        "Añada el agua y hierva. Agregue el arroz.",
        "Cocine sin tapa hasta absorber el líquido. Tape y baje el fuego por 20 minutos."
      ],
      en: [
        "In a caldero, brown salami in oil until it releases its fat. Remove some excess fat.",
        "Sauté sofrito with sazón and tomato sauce for 2 minutes.",
        "Add water and bring to a boil. Add rice.",
        "Cook uncovered until liquid is absorbed. Cover and lower heat for 20 minutes."
      ]
    }
  },

  // ── CARNES (adicionales) ──
  {
    id: "carne-mechada",
    category: "carnes",
    name: { es: "Carne Mechada", en: "Stuffed Pot Roast (Carne Mechada)" },
    time: "2 hrs 30 min",
    servings: 8,
    ingredients: {
      es: [
        "3 lbs de carne de res (boliche o punta de anca)",
        "½ lb de jamón cocido, cortado en tiras largas",
        "4 lonjas de tocino",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "½ taza de vino tinto para cocinar",
        "½ taza de aceitunas rellenas",
        "2 zanahorias, cortadas",
        "2 papas grandes, cortadas en cuartos",
        "Sal, pimienta y orégano al gusto"
      ],
      en: [
        "3 lbs beef roast (eye of round or rump)",
        "½ lb cooked ham, cut into long strips",
        "4 bacon slices",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "½ cup red cooking wine",
        "½ cup stuffed olives",
        "2 carrots, cut",
        "2 large potatoes, quartered",
        "Salt, pepper, and oregano to taste"
      ]
    },
    steps: {
      es: [
        "Con un cuchillo largo, haga perforaciones a lo largo de la carne. Rellene con las tiras de jamón y tocino.",
        "Adobe la carne con sal, pimienta, orégano y ajo. Marine 2 horas.",
        "En un caldero grande, dore la carne por todos lados en aceite caliente.",
        "Añada el sofrito, sazón, salsa de tomate, vino y aceitunas. Agregue 2 tazas de agua.",
        "Tape y cocine a fuego bajo por 1½ horas.",
        "Añada las papas y zanahorias. Cocine 30 minutos más.",
        "Corte en rodajas y sirva con la salsa y los vegetales."
      ],
      en: [
        "With a long knife, make deep holes through the meat. Stuff with ham and bacon strips.",
        "Season meat with salt, pepper, oregano, and garlic. Marinate 2 hours.",
        "In a large caldero, brown meat on all sides in hot oil.",
        "Add sofrito, sazón, tomato sauce, wine, and olives. Add 2 cups water.",
        "Cover and cook on low heat for 1½ hours.",
        "Add potatoes and carrots. Cook 30 more minutes.",
        "Slice into rounds and serve with the sauce and vegetables."
      ]
    }
  },
  {
    id: "chicharron-cerdo",
    category: "carnes",
    name: { es: "Chicharrón de Cerdo", en: "Fried Pork Cracklings" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "3 lbs de cuero de cerdo con carne adherida",
        "6 dientes de ajo, machacados",
        "2 cucharadas de vinagre",
        "1 cucharada de orégano",
        "1 cucharadita de sal",
        "Aceite vegetal para freír",
        "Jugo de 2 limones"
      ],
      en: [
        "3 lbs pork skin with meat attached",
        "6 garlic cloves, crushed",
        "2 tablespoons vinegar",
        "1 tablespoon oregano",
        "1 teaspoon salt",
        "Vegetable oil for frying",
        "Juice of 2 limes"
      ]
    },
    steps: {
      es: [
        "Corte el cuero con carne en trozos de 2 pulgadas.",
        "Adobe con ajo, vinagre, orégano, sal y limón. Marine por 1 hora.",
        "Hierva los trozos en agua con sal por 20 minutos. Escurra bien y seque con papel toalla.",
        "Caliente abundante aceite a 350°F en un caldero grande.",
        "Fría los trozos en tandas hasta que estén dorados y crujientes (8-10 minutos).",
        "Escurra y sirva con limón y salsa."
      ],
      en: [
        "Cut pork skin with meat into 2-inch pieces.",
        "Season with garlic, vinegar, oregano, salt, and lime. Marinate 1 hour.",
        "Boil pieces in salted water for 20 minutes. Drain well and pat dry.",
        "Heat plenty of oil to 350°F in a large caldero.",
        "Fry pieces in batches until golden and crispy (8-10 minutes).",
        "Drain and serve with lime and dipping sauce."
      ]
    }
  },
  {
    id: "fricase-cabro",
    category: "carnes",
    name: { es: "Fricasé de Cabro (Chivo)", en: "Goat Fricassee" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de carne de cabro (chivo), cortada en piezas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "3 papas grandes, cortadas en cuartos",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "½ taza de vino blanco",
        "2 hojas de laurel",
        "Adobo: ajo, vinagre, orégano, sal, pimienta"
      ],
      en: [
        "3 lbs goat meat, cut into pieces",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "3 large potatoes, quartered",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "½ cup white wine",
        "2 bay leaves",
        "Adobo: garlic, vinegar, oregano, salt, pepper"
      ]
    },
    steps: {
      es: [
        "Adobe el cabro con ajo, vinagre, orégano, sal y pimienta. Marine toda la noche.",
        "Dore la carne en aceite caliente por todos lados. Retire.",
        "Sofría el sofrito con sazón, salsa de tomate por 3 minutos.",
        "Regrese la carne, añada el vino, aceitunas, alcaparras y laurel. Agregue 1 taza de agua.",
        "Tape y cocine a fuego bajo por 1 hora.",
        "Añada las papas y cocine 25 minutos más hasta que todo esté tierno."
      ],
      en: [
        "Season goat with garlic, vinegar, oregano, salt, and pepper. Marinate overnight.",
        "Brown meat in hot oil on all sides. Remove.",
        "Sauté sofrito with sazón and tomato sauce for 3 minutes.",
        "Return meat, add wine, olives, capers, and bay leaves. Add 1 cup water.",
        "Cover and cook on low heat for 1 hour.",
        "Add potatoes and cook 25 more minutes until everything is tender."
      ]
    }
  },
  {
    id: "ropa-vieja",
    category: "carnes",
    name: { es: "Ropa Vieja", en: "Shredded Beef Stew (Ropa Vieja)" },
    time: "2 hrs",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de falda de res",
        "1 pimiento verde, cortado en tiras",
        "1 pimiento rojo, cortado en tiras",
        "1 cebolla grande, cortada en tiras",
        "3 dientes de ajo, machacados",
        "1 lata de tomates guisados (14 oz)",
        "2 cucharadas de sofrito",
        "1 sobre de sazón",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de alcaparras",
        "2 hojas de laurel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs flank steak",
        "1 green bell pepper, cut in strips",
        "1 red bell pepper, cut in strips",
        "1 large onion, cut in strips",
        "3 garlic cloves, crushed",
        "1 can stewed tomatoes (14 oz)",
        "2 tablespoons sofrito",
        "1 packet sazón",
        "½ cup stuffed olives",
        "2 tablespoons capers",
        "2 bay leaves",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la carne en agua con sal, ajo y laurel por 1½ horas hasta que esté tierna.",
        "Retire la carne y desmenúcela en hebras con dos tenedores. Reserve el caldo.",
        "En un caldero, sofría la cebolla, los pimientos y el ajo por 5 minutos.",
        "Añada el sofrito, el sazón, los tomates, las aceitunas y las alcaparras.",
        "Agregue la carne desmenuzada y 1 taza del caldo. Cocine 20 minutos a fuego medio.",
        "Sirva sobre arroz blanco."
      ],
      en: [
        "Boil beef in salted water with garlic and bay leaves for 1½ hours until tender.",
        "Remove beef and shred into strands with two forks. Reserve broth.",
        "In a caldero, sauté onion, peppers, and garlic for 5 minutes.",
        "Add sofrito, sazón, tomatoes, olives, and capers.",
        "Add shredded beef and 1 cup broth. Cook 20 minutes on medium heat.",
        "Serve over white rice."
      ]
    }
  },
  {
    id: "carne-molida-criolla",
    category: "carnes",
    name: { es: "Picadillo Criollo", en: "Puerto Rican Ground Beef Hash" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de carne molida de res",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "2 papas medianas, cortadas en cubos pequeños",
        "½ taza de aceitunas rellenas, picadas",
        "¼ taza de pasas (opcional)",
        "1 cucharada de alcaparras",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs ground beef",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "2 medium potatoes, diced small",
        "½ cup stuffed olives, chopped",
        "¼ cup raisins (optional)",
        "1 tablespoon capers",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, dore la carne molida desmenuzándola bien. Escurra el exceso de grasa.",
        "Añada el sofrito, el sazón y la salsa de tomate. Sofría 3 minutos.",
        "Agregue las papas, las aceitunas, las pasas y las alcaparras.",
        "Añada ½ taza de agua, tape y cocine a fuego medio por 20 minutos hasta que las papas estén tiernas.",
        "Sirva sobre arroz blanco con amarillos fritos."
      ],
      en: [
        "In a caldero, brown ground beef, breaking it up well. Drain excess fat.",
        "Add sofrito, sazón, and tomato sauce. Sauté 3 minutes.",
        "Add potatoes, olives, raisins, and capers.",
        "Add ½ cup water, cover and cook on medium heat for 20 minutes until potatoes are tender.",
        "Serve over white rice with fried sweet plantains."
      ]
    }
  },

  // ── AVES (adicionales) ──
  {
    id: "pollo-bbq-criollo",
    category: "aves",
    name: { es: "Pollo a la BBQ Criolla", en: "Creole BBQ Chicken" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de pollo, cortado en piezas",
        "Adobo: ajo, orégano, sal, pimienta, vinagre",
        "Salsa BBQ criolla: ½ taza de ketchup, 2 cda de salsa inglesa, 1 cda mostaza, 2 cda azúcar morena, 1 cda vinagre, 1 sobre de sazón"
      ],
      en: [
        "3 lbs chicken, cut into pieces",
        "Adobo: garlic, oregano, salt, pepper, vinegar",
        "Creole BBQ sauce: ½ cup ketchup, 2 tbsp Worcestershire, 1 tbsp mustard, 2 tbsp brown sugar, 1 tbsp vinegar, 1 packet sazón"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo y marine por 1 hora.",
        "Mezcle todos los ingredientes de la salsa BBQ criolla.",
        "Precaliente el horno a 375°F. Coloque el pollo en una bandeja.",
        "Unte generosamente con la salsa BBQ.",
        "Hornee 45 minutos, barnizando con más salsa cada 15 minutos, hasta que esté dorado."
      ],
      en: [
        "Season chicken with adobo and marinate 1 hour.",
        "Mix all Creole BBQ sauce ingredients.",
        "Preheat oven to 375°F. Place chicken on a baking sheet.",
        "Brush generously with BBQ sauce.",
        "Bake 45 minutes, basting with more sauce every 15 minutes, until golden."
      ]
    }
  },
  {
    id: "pollo-agridulce",
    category: "aves",
    name: { es: "Pollo Agridulce Boricua", en: "Puerto Rican Sweet & Sour Chicken" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de muslos de pollo deshuesados, cortados en cubos",
        "1 pimiento verde, cortado en cuadros",
        "1 pimiento rojo, cortado en cuadros",
        "1 cebolla, cortada en cuadros",
        "1 lata de piña en trozos (con su jugo)",
        "2 cucharadas de salsa de soya",
        "2 cucharadas de vinagre",
        "3 cucharadas de azúcar morena",
        "1 cucharada de maicena disuelta en 2 cda de agua",
        "1 sobre de sazón",
        "Aceite para freír"
      ],
      en: [
        "2 lbs boneless chicken thighs, cubed",
        "1 green bell pepper, cubed",
        "1 red bell pepper, cubed",
        "1 onion, cubed",
        "1 can pineapple chunks (with juice)",
        "2 tablespoons soy sauce",
        "2 tablespoons vinegar",
        "3 tablespoons brown sugar",
        "1 tablespoon cornstarch dissolved in 2 tbsp water",
        "1 packet sazón",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con sal y sazón. Dore en aceite caliente. Retire.",
        "Sofría los pimientos y la cebolla por 3 minutos.",
        "Mezcle el jugo de piña, la salsa de soya, el vinagre y el azúcar morena.",
        "Vierta la mezcla en el sartén. Añada el pollo y los trozos de piña.",
        "Agregue la maicena disuelta para espesar. Cocine 5 minutos. Sirva sobre arroz."
      ],
      en: [
        "Season chicken with salt and sazón. Brown in hot oil. Remove.",
        "Sauté peppers and onion for 3 minutes.",
        "Mix pineapple juice, soy sauce, vinegar, and brown sugar.",
        "Pour mixture into the skillet. Add chicken and pineapple chunks.",
        "Add dissolved cornstarch to thicken. Cook 5 minutes. Serve over rice."
      ]
    }
  },
  {
    id: "guineo-pollo",
    category: "aves",
    name: { es: "Pastelón de Pollo", en: "Chicken Casserole (Pastelón)" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "6 plátanos maduros, cortados en lonjas y fritos",
        "2 lbs de pollo, cocido y desmenuzado",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "3 huevos batidos",
        "1 taza de queso cheddar rallado",
        "2 cucharadas de aceite"
      ],
      en: [
        "6 ripe plantains, sliced and fried",
        "2 lbs chicken, cooked and shredded",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "3 beaten eggs",
        "1 cup cheddar cheese, shredded",
        "2 tablespoons oil"
      ]
    },
    steps: {
      es: [
        "Guise el pollo desmenuzado con sofrito, sazón, salsa de tomate y aceitunas.",
        "Fría las lonjas de plátano maduro hasta dorar.",
        "Engrase un molde. Coloque una capa de plátanos, luego pollo guisado, luego queso.",
        "Repita las capas terminando con plátanos arriba.",
        "Vierta los huevos batidos por encima. Espolvoree queso.",
        "Hornee a 350°F por 30 minutos hasta que esté dorado y cuaje."
      ],
      en: [
        "Stew shredded chicken with sofrito, sazón, tomato sauce, and olives.",
        "Fry plantain slices until golden.",
        "Grease a baking dish. Layer plantains, then stewed chicken, then cheese.",
        "Repeat layers ending with plantains on top.",
        "Pour beaten eggs over everything. Sprinkle cheese.",
        "Bake at 350°F for 30 minutes until golden and set."
      ]
    }
  },

  // ── PESCADOS (adicionales) ──
  {
    id: "mofongo-camarones",
    category: "pescados",
    name: { es: "Mofongo Relleno de Camarones", en: "Mofongo Stuffed with Shrimp" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "4 plátanos verdes",
        "1 lb de camarones, pelados",
        "6 dientes de ajo, machacados",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de salsa de tomate",
        "4 cucharadas de aceite de oliva",
        "Chicharrones triturados",
        "Caldo de pollo",
        "Aceite para freír"
      ],
      en: [
        "4 green plantains",
        "1 lb shrimp, peeled",
        "6 garlic cloves, crushed",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup tomato sauce",
        "4 tablespoons olive oil",
        "Crushed pork cracklings",
        "Chicken broth",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Prepare el mofongo: fría los plátanos, maje con ajo, aceite de oliva y chicharrones.",
        "Para la salsa de camarones: sofría el sofrito con sazón y salsa de tomate.",
        "Añada los camarones y ½ taza de caldo. Cocine 5 minutos.",
        "Moldee el mofongo en tazones, haciendo un hueco en el centro.",
        "Rellene con los camarones en salsa. Sirva con caldo caliente al lado."
      ],
      en: [
        "Make mofongo: fry plantains, mash with garlic, olive oil, and cracklings.",
        "For the shrimp sauce: sauté sofrito with sazón and tomato sauce.",
        "Add shrimp and ½ cup broth. Cook 5 minutes.",
        "Mold mofongo into bowls, making a well in the center.",
        "Fill with shrimp in sauce. Serve with hot broth on the side."
      ]
    }
  },
  {
    id: "camarones-empanizados",
    category: "pescados",
    name: { es: "Camarones Empanizados", en: "Breaded Shrimp" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ lbs de camarones jumbo, pelados con cola",
        "1 taza de pan rallado",
        "½ taza de harina de trigo",
        "2 huevos batidos",
        "½ cucharadita de ajo en polvo",
        "½ cucharadita de pimentón",
        "Aceite vegetal para freír",
        "Jugo de limón",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1½ lbs jumbo shrimp, peeled with tails",
        "1 cup breadcrumbs",
        "½ cup all-purpose flour",
        "2 beaten eggs",
        "½ teaspoon garlic powder",
        "½ teaspoon paprika",
        "Vegetable oil for frying",
        "Lime juice",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone los camarones con limón, sal, pimienta y ajo en polvo.",
        "Mezcle el pan rallado con el pimentón.",
        "Pase cada camarón por harina, luego por huevo, luego por pan rallado.",
        "Caliente aceite a 375°F. Fría los camarones 2-3 minutos por lado hasta dorar.",
        "Escurra y sirva con salsa cocktail o mayo-ketchup."
      ],
      en: [
        "Season shrimp with lime, salt, pepper, and garlic powder.",
        "Mix breadcrumbs with paprika.",
        "Dredge each shrimp in flour, then egg, then breadcrumbs.",
        "Heat oil to 375°F. Fry shrimp 2-3 minutes per side until golden.",
        "Drain and serve with cocktail sauce or mayo-ketchup."
      ]
    }
  },
  {
    id: "ceviche-pr",
    category: "pescados",
    name: { es: "Ceviche Puertorriqueño", en: "Puerto Rican Ceviche" },
    time: "20 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de pescado fresco (mahi-mahi o chillo), cortado en cubos pequeños",
        "½ lb de camarones cocidos, cortados",
        "1 taza de jugo de limón fresco",
        "1 cebolla roja, picada finamente",
        "1 pimiento verde, picado",
        "1 tomate, picado",
        "1 aguacate, cortado en cubos",
        "Cilantro fresco picado",
        "Sal y pimienta al gusto",
        "Galletas de soda para servir"
      ],
      en: [
        "1 lb fresh fish (mahi-mahi or snapper), diced small",
        "½ lb cooked shrimp, chopped",
        "1 cup fresh lime juice",
        "1 red onion, finely diced",
        "1 green bell pepper, diced",
        "1 tomato, diced",
        "1 avocado, cubed",
        "Fresh cilantro, chopped",
        "Salt and pepper to taste",
        "Soda crackers for serving"
      ]
    },
    steps: {
      es: [
        "Marine el pescado crudo en el jugo de limón por al menos 2 horas en la nevera.",
        "El pescado debe volverse opaco — el limón lo 'cocina'.",
        "Añada los camarones, la cebolla, el pimiento, el tomate y el cilantro.",
        "Sazone con sal y pimienta. Mezcle con cuidado.",
        "Justo antes de servir, añada el aguacate. Sirva frío con galletas de soda."
      ],
      en: [
        "Marinate raw fish in lime juice for at least 2 hours in the fridge.",
        "Fish should become opaque — the lime 'cooks' it.",
        "Add shrimp, onion, pepper, tomato, and cilantro.",
        "Season with salt and pepper. Mix gently.",
        "Just before serving, add avocado. Serve cold with soda crackers."
      ]
    }
  },

  // ── ENSALADAS (adicionales) ──
  {
    id: "ensalada-chayote",
    category: "ensaladas",
    name: { es: "Ensalada de Chayote", en: "Chayote Salad" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "3 chayotes, pelados y cortados en cubos",
        "1 cebolla mediana, picada",
        "1 pimiento rojo, picado",
        "2 huevos duros, picados",
        "¼ taza de aceite de oliva",
        "2 cucharadas de vinagre",
        "Sal y pimienta al gusto",
        "Cilantro fresco"
      ],
      en: [
        "3 chayotes, peeled and cubed",
        "1 medium onion, diced",
        "1 red bell pepper, diced",
        "2 hard-boiled eggs, chopped",
        "¼ cup olive oil",
        "2 tablespoons vinegar",
        "Salt and pepper to taste",
        "Fresh cilantro"
      ]
    },
    steps: {
      es: [
        "Hierva los chayotes en agua con sal por 15 minutos hasta que estén tiernos pero firmes. Escurra y enfríe.",
        "En un tazón, combine los chayotes con la cebolla, el pimiento y los huevos.",
        "Mezcle el aceite, vinagre, sal y pimienta. Vierta sobre la ensalada.",
        "Decore con cilantro. Sirva fría o a temperatura ambiente."
      ],
      en: [
        "Boil chayotes in salted water for 15 minutes until tender but firm. Drain and cool.",
        "In a bowl, combine chayotes with onion, pepper, and eggs.",
        "Mix oil, vinegar, salt, and pepper. Pour over salad.",
        "Garnish with cilantro. Serve cold or at room temperature."
      ]
    }
  },
  {
    id: "ensalada-garbanzos",
    category: "ensaladas",
    name: { es: "Ensalada de Garbanzos", en: "Chickpea Salad" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de garbanzos, escurridos",
        "1 cebolla roja, picada finamente",
        "1 pimiento rojo, picado",
        "1 pepino, pelado y cortado en cubos",
        "½ taza de aceitunas negras, cortadas",
        "¼ taza de aceite de oliva",
        "3 cucharadas de vinagre de vino",
        "1 diente de ajo, machacado",
        "Perejil o cilantro fresco",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 cans chickpeas, drained",
        "1 red onion, finely diced",
        "1 red bell pepper, diced",
        "1 cucumber, peeled and cubed",
        "½ cup black olives, halved",
        "¼ cup olive oil",
        "3 tablespoons wine vinegar",
        "1 garlic clove, crushed",
        "Fresh parsley or cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un tazón grande, combine los garbanzos, la cebolla, el pimiento, el pepino y las aceitunas.",
        "Mezcle el aceite, vinagre, ajo, sal y pimienta para el aderezo.",
        "Vierta el aderezo sobre la ensalada. Mezcle bien.",
        "Decore con perejil. Refrigere 30 minutos antes de servir para que absorba los sabores."
      ],
      en: [
        "In a large bowl, combine chickpeas, onion, pepper, cucumber, and olives.",
        "Mix oil, vinegar, garlic, salt, and pepper for the dressing.",
        "Pour dressing over salad. Mix well.",
        "Garnish with parsley. Refrigerate 30 minutes before serving to let flavors meld."
      ]
    }
  },

  // ── VEGETALES (adicionales) ──
  {
    id: "chayotes-rellenos",
    category: "vegetales",
    name: { es: "Chayotes Rellenos", en: "Stuffed Chayotes" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "4 chayotes",
        "½ lb de carne molida o jamón picado",
        "2 cucharadas de sofrito",
        "1 sobre de sazón",
        "2 cucharadas de salsa de tomate",
        "½ taza de queso rallado",
        "1 huevo batido",
        "Pan rallado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 chayotes",
        "½ lb ground beef or diced ham",
        "2 tablespoons sofrito",
        "1 packet sazón",
        "2 tablespoons tomato sauce",
        "½ cup shredded cheese",
        "1 beaten egg",
        "Breadcrumbs",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los chayotes enteros por 20 minutos hasta que estén tiernos. Córtelos por la mitad y retire la pulpa, dejando la cáscara intacta.",
        "Pique la pulpa. Sofría la carne con sofrito, sazón y salsa de tomate.",
        "Mezcle la carne con la pulpa de chayote, el huevo y la mitad del queso.",
        "Rellene las cáscaras. Cubra con pan rallado y el queso restante.",
        "Hornee a 375°F por 20 minutos hasta que estén dorados."
      ],
      en: [
        "Boil whole chayotes for 20 minutes until tender. Cut in half and scoop out pulp, leaving shells intact.",
        "Chop the pulp. Sauté meat with sofrito, sazón, and tomato sauce.",
        "Mix meat with chayote pulp, egg, and half the cheese.",
        "Fill shells. Top with breadcrumbs and remaining cheese.",
        "Bake at 375°F for 20 minutes until golden."
      ]
    }
  },
  {
    id: "berenjenas-rellenas",
    category: "vegetales",
    name: { es: "Berenjenas Rellenas", en: "Stuffed Eggplant" },
    time: "1 hr",
    servings: 4,
    ingredients: {
      es: [
        "2 berenjenas grandes",
        "1 lb de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas, picadas",
        "½ taza de queso mozzarella rallado",
        "Pan rallado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 large eggplants",
        "1 lb ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup tomato sauce",
        "¼ cup stuffed olives, chopped",
        "½ cup mozzarella cheese, shredded",
        "Breadcrumbs",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Corte las berenjenas a lo largo. Hierva en agua con sal por 10 minutos. Retire la pulpa dejando la cáscara.",
        "Pique la pulpa. Sofría la carne con sofrito, sazón, salsa de tomate y aceitunas.",
        "Mezcle la carne con la pulpa de berenjena.",
        "Rellene las cáscaras. Cubra con queso y pan rallado.",
        "Hornee a 375°F por 25 minutos hasta que estén doradas."
      ],
      en: [
        "Cut eggplants lengthwise. Boil in salted water for 10 minutes. Scoop out pulp leaving shells.",
        "Chop pulp. Sauté meat with sofrito, sazón, tomato sauce, and olives.",
        "Mix meat with eggplant pulp.",
        "Fill shells. Top with cheese and breadcrumbs.",
        "Bake at 375°F for 25 minutes until golden."
      ]
    }
  },
  {
    id: "platanutres",
    category: "vegetales",
    name: { es: "Platanutres (Mariquitas)", en: "Plantain Chips" },
    time: "20 min",
    servings: 6,
    ingredients: {
      es: [
        "4 plátanos verdes",
        "Aceite vegetal para freír",
        "Sal al gusto",
        "Ajo en polvo (opcional)"
      ],
      en: [
        "4 green plantains",
        "Vegetable oil for frying",
        "Salt to taste",
        "Garlic powder (optional)"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos y córtelos en ruedas muy finas con una mandolina o cuchillo afilado.",
        "Caliente abundante aceite a 350°F.",
        "Fría las ruedas en tandas sin amontonar, 2-3 minutos hasta que estén doradas y crujientes.",
        "Escurra sobre papel toalla. Espolvoree con sal y ajo en polvo inmediatamente.",
        "Sirva como snack o acompañante."
      ],
      en: [
        "Peel plantains and slice very thinly with a mandoline or sharp knife.",
        "Heat plenty of oil to 350°F.",
        "Fry slices in batches without crowding, 2-3 minutes until golden and crispy.",
        "Drain on paper towels. Sprinkle with salt and garlic powder immediately.",
        "Serve as a snack or side dish."
      ]
    }
  },
  {
    id: "pastelon-platano",
    category: "vegetales",
    name: { es: "Pastelón de Plátano Maduro", en: "Sweet Plantain Casserole (Pastelón)" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "6 plátanos maduros, cortados en lonjas largas",
        "2 lbs de carne molida",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas rellenas",
        "3 huevos batidos",
        "2 tazas de queso mozzarella rallado",
        "Aceite para freír"
      ],
      en: [
        "6 ripe plantains, cut into long slices",
        "2 lbs ground beef",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "½ cup stuffed olives",
        "3 beaten eggs",
        "2 cups mozzarella cheese, shredded",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Fría las lonjas de plátano maduro hasta dorar. Reserve.",
        "Sofría la carne con sofrito, sazón, salsa de tomate y aceitunas.",
        "En un molde engrasado, coloque una capa de plátanos, luego carne, luego queso.",
        "Repita las capas. Termine con plátanos y queso encima.",
        "Vierta los huevos batidos por encima.",
        "Hornee a 350°F por 30-35 minutos hasta que esté dorado y firme."
      ],
      en: [
        "Fry plantain slices until golden. Set aside.",
        "Sauté beef with sofrito, sazón, tomato sauce, and olives.",
        "In a greased baking dish, layer plantains, then meat, then cheese.",
        "Repeat layers. End with plantains and cheese on top.",
        "Pour beaten eggs over everything.",
        "Bake at 350°F for 30-35 minutes until golden and firm."
      ]
    }
  },

  // ── POSTRES (adicionales) ──
  {
    id: "natilla",
    category: "postres",
    name: { es: "Natilla de Vainilla", en: "Vanilla Custard (Natilla)" },
    time: "25 min",
    servings: 6,
    ingredients: {
      es: [
        "4 tazas de leche",
        "½ taza de azúcar",
        "4 yemas de huevo",
        "3 cucharadas de maicena",
        "1 cucharadita de vainilla",
        "1 raja de canela",
        "Ralladura de limón",
        "Canela en polvo para decorar"
      ],
      en: [
        "4 cups milk",
        "½ cup sugar",
        "4 egg yolks",
        "3 tablespoons cornstarch",
        "1 teaspoon vanilla",
        "1 cinnamon stick",
        "Lime zest",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Caliente 3 tazas de leche con la canela en raja y la ralladura de limón.",
        "En un tazón, bata las yemas con el azúcar. Añada la maicena disuelta en 1 taza de leche fría.",
        "Vierta la mezcla de yemas en la leche caliente, revolviendo constantemente.",
        "Cocine a fuego medio-bajo, revolviendo, hasta que espese (10-12 minutos).",
        "Retire la canela. Añada la vainilla. Vierta en copas.",
        "Espolvoree con canela. Sirva tibio o frío."
      ],
      en: [
        "Heat 3 cups milk with cinnamon stick and lime zest.",
        "In a bowl, beat yolks with sugar. Add cornstarch dissolved in 1 cup cold milk.",
        "Pour yolk mixture into hot milk, stirring constantly.",
        "Cook on medium-low heat, stirring, until thick (10-12 minutes).",
        "Remove cinnamon. Add vanilla. Pour into cups.",
        "Sprinkle with cinnamon. Serve warm or cold."
      ]
    }
  },
  {
    id: "tres-leches",
    category: "postres",
    name: { es: "Bizcocho de Tres Leches", en: "Three Milks Cake" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "Bizcocho: 5 huevos, 1 taza de azúcar, 1 taza de harina, 1 cda polvo de hornear, ½ taza de leche, 1 cda vainilla",
        "Mezcla de leches: 1 lata de leche condensada, 1 lata de leche evaporada, 1 taza de crema de leche (heavy cream)",
        "Merengue: 3 claras de huevo, ¾ taza de azúcar, 1 cda de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "Cake: 5 eggs, 1 cup sugar, 1 cup flour, 1 tbsp baking powder, ½ cup milk, 1 tbsp vanilla",
        "Milk mixture: 1 can condensed milk, 1 can evaporated milk, 1 cup heavy cream",
        "Meringue: 3 egg whites, ¾ cup sugar, 1 tbsp vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Bata los huevos con el azúcar hasta que dupliquen en volumen. Añada la vainilla.",
        "Cierna la harina con el polvo de hornear. Integre con movimientos envolventes alternando con la leche.",
        "Vierta en un molde 13x9 engrasado. Hornee a 350°F por 25-30 minutos.",
        "Mezcle las tres leches. Con un tenedor, haga agujeros en el bizcocho tibio.",
        "Vierta la mezcla de leches lentamente. Refrigere mínimo 4 horas.",
        "Para el merengue: bata las claras a punto de nieve, añada el azúcar gradualmente. Cubra el bizcocho.",
        "Espolvoree con canela y sirva frío."
      ],
      en: [
        "Beat eggs with sugar until doubled in volume. Add vanilla.",
        "Sift flour with baking powder. Fold in alternating with milk.",
        "Pour into a greased 13x9 pan. Bake at 350°F for 25-30 minutes.",
        "Mix the three milks. With a fork, poke holes all over the warm cake.",
        "Slowly pour milk mixture over cake. Refrigerate at least 4 hours.",
        "For meringue: beat whites to stiff peaks, gradually add sugar. Cover the cake.",
        "Sprinkle with cinnamon and serve cold."
      ]
    }
  },
  {
    id: "mantecado-casero",
    category: "postres",
    name: { es: "Mantecado Casero de Vainilla", en: "Homemade Vanilla Ice Cream" },
    time: "30 min + congelación",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de leche evaporada (12 oz cada una)",
        "1 lata de leche condensada (14 oz)",
        "2 tazas de crema de leche (heavy cream)",
        "2 cucharaditas de vainilla",
        "Pizca de sal"
      ],
      en: [
        "2 cans evaporated milk (12 oz each)",
        "1 can condensed milk (14 oz)",
        "2 cups heavy cream",
        "2 teaspoons vanilla",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Congele una de las latas de leche evaporada por al menos 8 horas.",
        "Bata la crema de leche a punto de nieve.",
        "En otro tazón, bata la leche evaporada congelada hasta que duplique su volumen.",
        "Mezcle la leche condensada con la leche evaporada sin congelar y la vainilla.",
        "Integre la crema batida y la leche evaporada batida con movimientos envolventes.",
        "Vierta en un envase y congele por 6 horas, revolviendo cada 2 horas."
      ],
      en: [
        "Freeze one can of evaporated milk for at least 8 hours.",
        "Whip heavy cream to stiff peaks.",
        "In another bowl, beat frozen evaporated milk until doubled in volume.",
        "Mix condensed milk with unfrozen evaporated milk and vanilla.",
        "Fold in whipped cream and whipped evaporated milk.",
        "Pour into container and freeze 6 hours, stirring every 2 hours."
      ]
    }
  },
  {
    id: "dulce-leche-cortada",
    category: "postres",
    name: { es: "Dulce de Leche Cortada", en: "Curdled Milk Candy" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "1 galón de leche entera",
        "3 tazas de azúcar",
        "Jugo de 2 limones",
        "2 rajas de canela",
        "4 clavos de olor",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 gallon whole milk",
        "3 cups sugar",
        "Juice of 2 limes",
        "2 cinnamon sticks",
        "4 whole cloves",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente la leche en una olla grande. Cuando esté tibia, añada el jugo de limón. La leche se cortará.",
        "Añada el azúcar, la canela y los clavos. Revuelva bien.",
        "Cocine a fuego medio-bajo, revolviendo frecuentemente, por 1-1½ horas.",
        "La mezcla debe reducir y caramelizarse hasta tomar un color dorado oscuro.",
        "Retire la canela y los clavos. Añada la vainilla.",
        "Vierta en un molde engrasado. Deje enfriar y corte en cuadros."
      ],
      en: [
        "Heat milk in a large pot. When warm, add lime juice. The milk will curdle.",
        "Add sugar, cinnamon, and cloves. Stir well.",
        "Cook on medium-low heat, stirring frequently, for 1-1½ hours.",
        "Mixture should reduce and caramelize to a dark golden color.",
        "Remove cinnamon and cloves. Add vanilla.",
        "Pour into a greased mold. Let cool and cut into squares."
      ]
    }
  },
  {
    id: "limber-parcha",
    category: "postres",
    name: { es: "Limber de Parcha", en: "Passion Fruit Ice Pop" },
    time: "10 min + congelación",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de pulpa de parcha (maracuyá)",
        "1 lata de leche condensada (14 oz)",
        "2 tazas de agua",
        "½ taza de azúcar"
      ],
      en: [
        "1 cup passion fruit pulp",
        "1 can condensed milk (14 oz)",
        "2 cups water",
        "½ cup sugar"
      ]
    },
    steps: {
      es: [
        "Mezcle la pulpa de parcha con el agua y el azúcar. Cuele las semillas.",
        "Añada la leche condensada y mezcle bien.",
        "Vierta en vasitos plásticos pequeños.",
        "Congele por al menos 4 horas hasta que estén sólidos.",
        "Para servir, deje reposar 2 minutos fuera del congelador."
      ],
      en: [
        "Mix passion fruit pulp with water and sugar. Strain out seeds.",
        "Add condensed milk and mix well.",
        "Pour into small plastic cups.",
        "Freeze for at least 4 hours until solid.",
        "To serve, let sit 2 minutes out of the freezer."
      ]
    }
  },

  // ── BEBIDAS (adicionales) ──
  {
    id: "malta-huevo",
    category: "bebidas",
    name: { es: "Malta con Huevo", en: "Malt Beverage with Egg" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 botella de malta India (o cualquier malta)",
        "1 huevo crudo",
        "2 cucharadas de leche condensada",
        "½ cucharadita de vainilla",
        "Hielo (opcional)"
      ],
      en: [
        "1 bottle Malta India (or any malt beverage)",
        "1 raw egg",
        "2 tablespoons condensed milk",
        "½ teaspoon vanilla",
        "Ice (optional)"
      ]
    },
    steps: {
      es: [
        "Vierta la malta en la licuadora.",
        "Añada el huevo, la leche condensada y la vainilla.",
        "Licúe por 30 segundos hasta que esté espumoso.",
        "Sirva inmediatamente. Es una bebida energética tradicional puertorriqueña."
      ],
      en: [
        "Pour malt beverage into blender.",
        "Add egg, condensed milk, and vanilla.",
        "Blend 30 seconds until frothy.",
        "Serve immediately. It's a traditional Puerto Rican energy drink."
      ]
    }
  },
  {
    id: "avena-fria",
    category: "bebidas",
    name: { es: "Avena Fría", en: "Cold Oat Drink" },
    time: "15 min + enfriamiento",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de avena",
        "4 tazas de leche",
        "2 tazas de agua",
        "¾ taza de azúcar",
        "1 cucharadita de vainilla",
        "1 raja de canela",
        "Pizca de sal",
        "Canela en polvo para servir"
      ],
      en: [
        "1 cup oats",
        "4 cups milk",
        "2 cups water",
        "¾ cup sugar",
        "1 teaspoon vanilla",
        "1 cinnamon stick",
        "Pinch of salt",
        "Ground cinnamon for serving"
      ]
    },
    steps: {
      es: [
        "Cocine la avena en el agua con la canela en raja por 10 minutos hasta que esté suave.",
        "Retire la canela. Licúe la avena cocida con la leche, el azúcar, la vainilla y la sal.",
        "Cuele si desea una consistencia más suave.",
        "Refrigere por al menos 2 horas. Sirva bien fría con canela en polvo."
      ],
      en: [
        "Cook oats in water with cinnamon stick for 10 minutes until soft.",
        "Remove cinnamon. Blend cooked oats with milk, sugar, vanilla, and salt.",
        "Strain if you want a smoother consistency.",
        "Refrigerate at least 2 hours. Serve very cold with ground cinnamon."
      ]
    }
  },
  {
    id: "morir-sonando",
    category: "bebidas",
    name: { es: "Morir Soñando", en: "Orange Creamsicle Drink" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de jugo de china (naranja) fresco y frío",
        "1 taza de leche evaporada, bien fría",
        "¼ taza de azúcar",
        "1 cucharadita de vainilla",
        "Hielo abundante"
      ],
      en: [
        "2 cups fresh cold orange juice",
        "1 cup evaporated milk, very cold",
        "¼ cup sugar",
        "1 teaspoon vanilla",
        "Plenty of ice"
      ]
    },
    steps: {
      es: [
        "IMPORTANTE: Todos los ingredientes deben estar muy fríos para que la leche no se corte.",
        "Disuelva el azúcar en el jugo de naranja frío.",
        "Añada hielo abundante al jugo. Mezcle.",
        "Vierta la leche evaporada fría lentamente mientras revuelve.",
        "Añada la vainilla. Sirva inmediatamente."
      ],
      en: [
        "IMPORTANT: All ingredients must be very cold so the milk doesn't curdle.",
        "Dissolve sugar in cold orange juice.",
        "Add plenty of ice to the juice. Stir.",
        "Slowly pour cold evaporated milk while stirring.",
        "Add vanilla. Serve immediately."
      ]
    }
  },

  // ── ENTREMESES (adicionales) ──
  {
    id: "aranitas",
    category: "entremeses",
    name: { es: "Arañitas de Plátano", en: "Plantain Spider Fritters" },
    time: "25 min",
    servings: 8,
    ingredients: {
      es: [
        "3 plátanos verdes, rallados grueso",
        "3 dientes de ajo, machacados",
        "1 cucharadita de sal",
        "½ cucharadita de ajo en polvo",
        "Aceite vegetal para freír"
      ],
      en: [
        "3 green plantains, coarsely grated",
        "3 garlic cloves, crushed",
        "1 teaspoon salt",
        "½ teaspoon garlic powder",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Ralle los plátanos en el lado grueso del rallador.",
        "Mezcle con el ajo, la sal y el ajo en polvo.",
        "Caliente aceite a 350°F en un sartén hondo.",
        "Tome porciones de la mezcla y aplástelas ligeramente. Fría en el aceite caliente.",
        "Fría 3-4 minutos por cada lado hasta que estén doradas y crujientes.",
        "Escurra y sirva con mayo-ketchup."
      ],
      en: [
        "Grate plantains on the coarse side of the grater.",
        "Mix with garlic, salt, and garlic powder.",
        "Heat oil to 350°F in a deep skillet.",
        "Take portions of the mixture and flatten slightly. Fry in hot oil.",
        "Fry 3-4 minutes per side until golden and crispy.",
        "Drain and serve with mayo-ketchup."
      ]
    }
  },
  {
    id: "empanadillas-pizza",
    category: "entremeses",
    name: { es: "Empanadillas de Pizza", en: "Pizza Turnovers" },
    time: "40 min",
    servings: 15,
    ingredients: {
      es: [
        "1 paquete de discos para empanadillas",
        "1 taza de salsa de pizza o tomate",
        "1½ tazas de queso mozzarella rallado",
        "½ taza de pepperoni, cortado en pedazos",
        "½ cucharadita de orégano",
        "Aceite vegetal para freír"
      ],
      en: [
        "1 package empanada discs",
        "1 cup pizza or tomato sauce",
        "1½ cups mozzarella cheese, shredded",
        "½ cup pepperoni, chopped",
        "½ teaspoon oregano",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "En el centro de cada disco, coloque una cucharada de salsa, queso y pepperoni.",
        "Espolvoree con orégano.",
        "Doble el disco por la mitad y selle con un tenedor.",
        "Caliente aceite a 350°F. Fría hasta que estén doradas, 3 minutos por lado.",
        "Escurra y sirva calientes."
      ],
      en: [
        "In the center of each disc, place a spoonful of sauce, cheese, and pepperoni.",
        "Sprinkle with oregano.",
        "Fold disc in half and seal with a fork.",
        "Heat oil to 350°F. Fry until golden, 3 minutes per side.",
        "Drain and serve hot."
      ]
    }
  },
  {
    id: "tostones-rellenos",
    category: "entremeses",
    name: { es: "Tostones Rellenos", en: "Stuffed Tostones Cups" },
    time: "40 min",
    servings: 8,
    ingredients: {
      es: [
        "4 plátanos verdes",
        "Aceite vegetal para freír",
        "Relleno de pollo: 1 lb de pollo desmenuzado, sofrito, sazón, salsa de tomate, queso rallado",
        "O relleno de camarones: camarones al ajillo con queso",
        "Sal al gusto"
      ],
      en: [
        "4 green plantains",
        "Vegetable oil for frying",
        "Chicken filling: 1 lb shredded chicken, sofrito, sazón, tomato sauce, shredded cheese",
        "Or shrimp filling: garlic shrimp with cheese",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Corte los plátanos en ruedas gruesas (1½ pulgada). Fría a fuego medio 4 minutos.",
        "Retire y con un tostonero haga forma de canasta/copa (presione el centro dejando los bordes).",
        "Fría las copas de nuevo hasta que estén crujientes y doradas.",
        "Prepare el relleno de su preferencia (pollo guisado o camarones).",
        "Rellene cada copa de tostón. Cubra con queso rallado.",
        "Pase por el horno a 400°F por 3 minutos para derretir el queso. Sirva calientes."
      ],
      en: [
        "Cut plantains into thick rounds (1½ inch). Fry on medium heat 4 minutes.",
        "Remove and with a tostonera shape into cups/baskets (press center leaving edges up).",
        "Fry the cups again until crispy and golden.",
        "Prepare your preferred filling (stewed chicken or shrimp).",
        "Fill each toston cup. Top with shredded cheese.",
        "Broil at 400°F for 3 minutes to melt cheese. Serve hot."
      ]
    }
  },

  // ── EMPAREDADOS (adicionales) ──
  {
    id: "tripleta",
    category: "emparedados",
    name: { es: "Tripleta", en: "Tripleta (Triple Meat Sandwich)" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "4 panes largos de agua o pan sobao",
        "½ lb de bistec, cortado fino y guisado",
        "½ lb de pollo, cortado fino y guisado",
        "½ lb de pernil o jamón",
        "Papas fritas de palito (shoestring)",
        "Lechuga y tomate",
        "Ketchup, mayonesa y mostaza",
        "Queso americano (opcional)"
      ],
      en: [
        "4 long bread rolls",
        "½ lb steak, thinly sliced and seasoned",
        "½ lb chicken, thinly sliced and seasoned",
        "½ lb roast pork or ham",
        "Shoestring potato fries",
        "Lettuce and tomato",
        "Ketchup, mayonnaise, and mustard",
        "American cheese (optional)"
      ]
    },
    steps: {
      es: [
        "Sazone y cocine el bistec y el pollo en un sartén con un poco de sofrito y sazón.",
        "Corte el pan a lo largo. Unte con mayonesa, ketchup y mostaza.",
        "Coloque capas de bistec, pollo y pernil dentro del pan.",
        "Añada queso, lechuga, tomate y papas fritas de palito.",
        "Cierre y sirva inmediatamente. Es el sándwich callejero puertorriqueño por excelencia."
      ],
      en: [
        "Season and cook steak and chicken in a skillet with a little sofrito and sazón.",
        "Slice bread lengthwise. Spread with mayo, ketchup, and mustard.",
        "Layer steak, chicken, and pork inside the bread.",
        "Add cheese, lettuce, tomato, and shoestring fries.",
        "Close and serve immediately. It's the quintessential Puerto Rican street sandwich."
      ]
    }
  },
  {
    id: "jibarito",
    category: "emparedados",
    name: { es: "Jibarito", en: "Plantain Sandwich (Jibarito)" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "4 plátanos verdes",
        "1 lb de bistec fino, sazonado",
        "Lechuga, tomate en ruedas",
        "Mayonesa con ajo (mayo-ajo)",
        "Queso americano o suizo",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "4 green plantains",
        "1 lb thin steak, seasoned",
        "Lettuce, sliced tomato",
        "Garlic mayonnaise",
        "American or Swiss cheese",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele los plátanos, córtelos a lo largo en 2 mitades. Fría hasta que estén dorados.",
        "Aplaste las mitades con un tostonero para aplanar. Fría de nuevo hasta que estén crujientes.",
        "Sazone y cocine los bistecs en un sartén caliente.",
        "Unte mayo-ajo en un lado de cada tostón aplastado.",
        "Coloque el bistec, queso, lechuga y tomate.",
        "Cubra con otro tostón aplastado — como un sándwich pero con plátano en vez de pan."
      ],
      en: [
        "Peel plantains, cut lengthwise in 2 halves. Fry until golden.",
        "Flatten halves with a tostonera. Fry again until crispy.",
        "Season and cook steaks in a hot skillet.",
        "Spread garlic mayo on one side of each flattened toston.",
        "Place steak, cheese, lettuce, and tomato.",
        "Cover with another flattened toston — like a sandwich but with plantain instead of bread."
      ]
    }
  },

  // ── SALSAS (adicionales) ──
  {
    id: "mayo-ketchup",
    category: "salsas",
    name: { es: "Mayo-Ketchup", en: "Mayo-Ketchup Dipping Sauce" },
    time: "5 min",
    servings: 8,
    ingredients: {
      es: [
        "½ taza de mayonesa",
        "½ taza de ketchup",
        "1 diente de ajo, machacado finamente",
        "½ cucharadita de vinagre (opcional)",
        "Pizca de sal"
      ],
      en: [
        "½ cup mayonnaise",
        "½ cup ketchup",
        "1 garlic clove, finely crushed",
        "½ teaspoon vinegar (optional)",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Mezcle la mayonesa y el ketchup en partes iguales.",
        "Añada el ajo machacado, el vinagre y la sal.",
        "Mezcle bien hasta que esté homogéneo.",
        "Sirva como salsa para mojar con tostones, alcapurrias, sorullitos o cualquier fritanga."
      ],
      en: [
        "Mix mayonnaise and ketchup in equal parts.",
        "Add crushed garlic, vinegar, and salt.",
        "Mix well until uniform.",
        "Serve as a dipping sauce with tostones, alcapurrias, sorullitos, or any fritters."
      ]
    }
  },
  {
    id: "salsa-mango",
    category: "salsas",
    name: { es: "Salsa de Mango", en: "Mango Sauce" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 mangós maduros, pelados y cortados",
        "¼ taza de azúcar",
        "Jugo de 2 limones",
        "1 ají dulce, picado finamente",
        "2 cucharadas de cilantro fresco, picado",
        "Pizca de sal"
      ],
      en: [
        "2 ripe mangoes, peeled and cut",
        "¼ cup sugar",
        "Juice of 2 limes",
        "1 sweet pepper, finely diced",
        "2 tablespoons fresh cilantro, chopped",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Licúe la mitad del mango con el azúcar y el jugo de limón hasta obtener un puré suave.",
        "Pique el resto del mango en cubos pequeños.",
        "Mezcle el puré con los cubos de mango, el ají dulce y el cilantro.",
        "Añada sal al gusto. Refrigere.",
        "Sirva sobre pescado, pollo o como dip para tostones."
      ],
      en: [
        "Blend half the mango with sugar and lime juice into a smooth purée.",
        "Dice the remaining mango into small cubes.",
        "Mix purée with mango cubes, sweet pepper, and cilantro.",
        "Add salt to taste. Refrigerate.",
        "Serve over fish, chicken, or as a dip for tostones."
      ]
    }
  },

  // ── GRANOS (adicionales) ──
  {
    id: "lentejas-guisadas",
    category: "granos",
    name: { es: "Lentejas Guisadas", en: "Stewed Lentils" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de lentejas secas",
        "½ lb de calabaza, cortada en cubos",
        "2 papas medianas, cortadas en cubos",
        "½ lb de chorizo español, cortado en ruedas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón",
        "¼ taza de salsa de tomate",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "1 lb dried lentils",
        "½ lb calabaza, cubed",
        "2 medium potatoes, cubed",
        "½ lb Spanish chorizo, sliced into rounds",
        "3 tablespoons sofrito",
        "2 packets sazón",
        "¼ cup tomato sauce",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave las lentejas. Hierva en agua por 15 minutos. Escurra.",
        "En una olla, caliente el aceite y sofría el chorizo por 3 minutos.",
        "Añada el sofrito, sazón y salsa de tomate. Sofría 2 minutos.",
        "Agregue las lentejas, 4 tazas de agua, la calabaza y las papas.",
        "Cocine a fuego medio por 25 minutos hasta que todo esté tierno.",
        "La calabaza espesará la salsa. Sirva sobre arroz blanco."
      ],
      en: [
        "Wash lentils. Boil in water for 15 minutes. Drain.",
        "In a pot, heat oil and sauté chorizo for 3 minutes.",
        "Add sofrito, sazón, and tomato sauce. Sauté 2 minutes.",
        "Add lentils, 4 cups water, calabaza, and potatoes.",
        "Cook on medium heat for 25 minutes until everything is tender.",
        "Calabaza will thicken the sauce. Serve over white rice."
      ]
    }
  },
  {
    id: "habichuelas-pintas",
    category: "granos",
    name: { es: "Habichuelas Pintas Guisadas", en: "Stewed Pinto Beans" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de habichuelas pintas",
        "3 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "¼ taza de salsa de tomate",
        "2 papas medianas, cortadas en cubos",
        "½ taza de calabaza, cortada en cubos",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 cans pinto beans",
        "3 tablespoons sofrito",
        "2 packets sazón with annatto",
        "¼ cup tomato sauce",
        "2 medium potatoes, cubed",
        "½ cup calabaza, cubed",
        "½ cup stuffed olives",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite y sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada las habichuelas con su líquido, las papas, la calabaza y las aceitunas.",
        "Cocine a fuego medio por 25 minutos hasta que las papas y calabaza estén tiernas.",
        "Maje algunas habichuelas para espesar. Sirva sobre arroz blanco."
      ],
      en: [
        "Heat oil and sauté sofrito with sazón and tomato sauce.",
        "Add beans with their liquid, potatoes, calabaza, and olives.",
        "Cook on medium heat for 25 minutes until potatoes and calabaza are tender.",
        "Mash some beans to thicken. Serve over white rice."
      ]
    }
  },

  // ── HUEVOS (adicionales) ──
  {
    id: "tortilla-amarillos",
    category: "huevos",
    name: { es: "Tortilla de Amarillos", en: "Sweet Plantain Omelette" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "3 plátanos maduros, cortados en lonjas y fritos",
        "6 huevos",
        "½ taza de queso del país o cheddar, rallado",
        "2 cucharadas de aceite",
        "Sal al gusto"
      ],
      en: [
        "3 ripe plantains, sliced and fried",
        "6 eggs",
        "½ cup local cheese or cheddar, shredded",
        "2 tablespoons oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Fría las lonjas de plátano maduro hasta que estén doradas. Escurra.",
        "Bata los huevos con sal. Añada el queso rallado.",
        "En un sartén engrasado, coloque los amarillos fritos como base.",
        "Vierta los huevos batidos sobre los amarillos.",
        "Cocine a fuego bajo hasta que cuaje por debajo. Voltee con un plato y cocine el otro lado.",
        "Sirva cortada en triángulos."
      ],
      en: [
        "Fry plantain slices until golden. Drain.",
        "Beat eggs with salt. Add shredded cheese.",
        "In a greased skillet, place fried plantains as a base.",
        "Pour beaten eggs over the plantains.",
        "Cook on low heat until set on bottom. Flip with a plate and cook the other side.",
        "Serve cut into triangles."
      ]
    }
  },
  {
    id: "huevos-habaneros",
    category: "huevos",
    name: { es: "Huevos Habaneros", en: "Eggs in Tomato Sauce (Huevos Habaneros)" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "6 huevos",
        "2 tazas de salsa de tomate casera",
        "1 cebolla, picada",
        "1 pimiento verde, picado",
        "2 dientes de ajo, machacados",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de orégano",
        "Sal y pimienta al gusto",
        "Pan para acompañar"
      ],
      en: [
        "6 eggs",
        "2 cups homemade tomato sauce",
        "1 onion, diced",
        "1 green bell pepper, diced",
        "2 garlic cloves, crushed",
        "2 tablespoons olive oil",
        "½ teaspoon oregano",
        "Salt and pepper to taste",
        "Bread for serving"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el pimiento y el ajo en aceite de oliva por 5 minutos.",
        "Añada la salsa de tomate, el orégano, sal y pimienta. Cocine 5 minutos.",
        "Haga 6 huecos en la salsa. Rompa un huevo en cada hueco.",
        "Tape y cocine a fuego bajo por 5-7 minutos hasta que las claras cuajen pero las yemas queden cremosas.",
        "Sirva directamente del sartén con pan crujiente para mojar."
      ],
      en: [
        "Sauté onion, pepper, and garlic in olive oil for 5 minutes.",
        "Add tomato sauce, oregano, salt, and pepper. Cook 5 minutes.",
        "Make 6 wells in the sauce. Crack an egg into each well.",
        "Cover and cook on low heat for 5-7 minutes until whites are set but yolks are still creamy.",
        "Serve right from the skillet with crusty bread for dipping."
      ]
    }
  },

  // ── BIZCOCHOS (adicionales) ──
  {
    id: "bizcocho-pina",
    category: "bizcochos",
    name: { es: "Bizcocho de Piña Volteado", en: "Pineapple Upside-Down Cake" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "1 lata de piña en ruedas",
        "Cerezas marraschino",
        "¼ taza de mantequilla",
        "¾ taza de azúcar morena",
        "1 caja de mezcla para bizcocho amarillo",
        "Ingredientes según la caja (huevos, aceite, agua)"
      ],
      en: [
        "1 can pineapple rings",
        "Maraschino cherries",
        "¼ cup butter",
        "¾ cup brown sugar",
        "1 box yellow cake mix",
        "Ingredients per box (eggs, oil, water)"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla en un molde de 13x9 en el horno. Esparza el azúcar morena.",
        "Arregle las ruedas de piña sobre el azúcar. Coloque una cereza en el centro de cada rueda.",
        "Prepare la mezcla de bizcocho según las instrucciones de la caja.",
        "Vierta la mezcla sobre las piñas con cuidado.",
        "Hornee a 350°F por 35-40 minutos.",
        "Voltee inmediatamente sobre un plato. La piña caramelizada queda arriba."
      ],
      en: [
        "Melt butter in a 13x9 pan in the oven. Spread brown sugar.",
        "Arrange pineapple rings over sugar. Place a cherry in the center of each ring.",
        "Prepare cake mix according to box instructions.",
        "Carefully pour batter over the pineapples.",
        "Bake at 350°F for 35-40 minutes.",
        "Immediately flip onto a plate. Caramelized pineapple ends up on top."
      ]
    }
  },
  {
    id: "bizcocho-guayaba",
    category: "bizcochos",
    name: { es: "Bizcocho de Guayaba", en: "Guava Cake" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "1½ tazas de azúcar",
        "¾ taza de mantequilla, suavizada",
        "3 huevos",
        "1 taza de jugo de guayaba (o néctar)",
        "1 barra de pasta de guayaba (8 oz), cortada en cubitos",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de vainilla",
        "½ cucharadita de sal",
        "Glaseado: 1 taza de azúcar en polvo + jugo de guayaba"
      ],
      en: [
        "2½ cups all-purpose flour",
        "1½ cups sugar",
        "¾ cup butter, softened",
        "3 eggs",
        "1 cup guava juice (or nectar)",
        "1 bar guava paste (8 oz), diced",
        "2 teaspoons baking powder",
        "1 teaspoon vanilla",
        "½ teaspoon salt",
        "Glaze: 1 cup powdered sugar + guava juice"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F. Engrase un molde Bundt.",
        "Bata la mantequilla con el azúcar hasta cremosa. Añada los huevos uno a uno.",
        "Mezcle la harina con el polvo de hornear y la sal. Añada alternando con el jugo de guayaba.",
        "Integre los cubitos de pasta de guayaba a la masa.",
        "Vierta en el molde. Hornee 45-50 minutos.",
        "Para el glaseado: mezcle azúcar en polvo con jugo de guayaba. Vierta sobre el bizcocho frío."
      ],
      en: [
        "Preheat oven to 350°F. Grease a Bundt pan.",
        "Beat butter with sugar until creamy. Add eggs one at a time.",
        "Mix flour with baking powder and salt. Add alternating with guava juice.",
        "Fold guava paste cubes into the batter.",
        "Pour into pan. Bake 45-50 minutes.",
        "For glaze: mix powdered sugar with guava juice. Pour over cooled cake."
      ]
    }
  },

  // ── GALLETITAS (adicionales) ──
  {
    id: "suspiros",
    category: "galletitas",
    name: { es: "Suspiros (Merengues)", en: "Meringue Cookies (Suspiros)" },
    time: "1 hr 30 min",
    servings: 24,
    ingredients: {
      es: [
        "4 claras de huevo, a temperatura ambiente",
        "1 taza de azúcar",
        "1 cucharadita de vainilla",
        "¼ cucharadita de cremor tártaro",
        "Pizca de sal",
        "Colorante de alimentos (opcional)"
      ],
      en: [
        "4 egg whites, at room temperature",
        "1 cup sugar",
        "1 teaspoon vanilla",
        "¼ teaspoon cream of tartar",
        "Pinch of salt",
        "Food coloring (optional)"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 200°F. Forre bandejas con papel encerado.",
        "Bata las claras con el cremor tártaro y la sal a punto de nieve.",
        "Añada el azúcar gradualmente, cucharada a cucharada, batiendo constantemente.",
        "Continúe batiendo hasta que los picos estén firmes y brillantes. Añada la vainilla.",
        "Con una manga pastelera o cuchara, forme montañitas en la bandeja.",
        "Hornee por 1 hora. Apague el horno y déjelos adentro hasta que se enfríen completamente."
      ],
      en: [
        "Preheat oven to 200°F. Line baking sheets with parchment paper.",
        "Beat egg whites with cream of tartar and salt to soft peaks.",
        "Add sugar gradually, one tablespoon at a time, beating constantly.",
        "Continue beating until stiff, glossy peaks form. Add vanilla.",
        "Using a piping bag or spoon, form small mounds on the sheet.",
        "Bake for 1 hour. Turn off oven and leave them inside until completely cool."
      ]
    }
  },
  {
    id: "royales",
    category: "galletitas",
    name: { es: "Royales (Galletas Reales)", en: "Royal Cookies" },
    time: "35 min",
    servings: 20,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ taza de mantequilla, suavizada",
        "½ taza de azúcar",
        "2 yemas de huevo",
        "1 cucharadita de vainilla",
        "Ralladura de 1 limón",
        "½ cucharadita de polvo de hornear",
        "Mermelada de guayaba para rellenar",
        "Azúcar en polvo para espolvorear"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ cup butter, softened",
        "½ cup sugar",
        "2 egg yolks",
        "1 teaspoon vanilla",
        "Zest of 1 lime",
        "½ teaspoon baking powder",
        "Guava jam for filling",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el azúcar. Añada las yemas, la vainilla y la ralladura.",
        "Mezcle la harina con el polvo de hornear. Integre a la masa. Refrigere 30 minutos.",
        "Estire la masa y corte galletas redondas. Haga un hueco en la mitad de ellas.",
        "Hornee a 350°F por 12-15 minutos hasta que estén doradas.",
        "Unte mermelada de guayaba en las galletas enteras. Cubra con las que tienen hueco.",
        "Espolvoree con azúcar en polvo."
      ],
      en: [
        "Beat butter with sugar. Add yolks, vanilla, and zest.",
        "Mix flour with baking powder. Incorporate into dough. Refrigerate 30 minutes.",
        "Roll out dough and cut round cookies. Cut holes in half of them.",
        "Bake at 350°F for 12-15 minutes until golden.",
        "Spread guava jam on whole cookies. Top with the ones with holes.",
        "Dust with powdered sugar."
      ]
    }
  },

  // ── FRUTAS (adicionales) ──
  {
    id: "dulce-batata",
    category: "frutas",
    name: { es: "Dulce de Batata con Coco", en: "Sweet Potato & Coconut Candy" },
    time: "1 hr",
    servings: 12,
    ingredients: {
      es: [
        "2 lbs de batata (boniato), pelada y cortada",
        "1½ tazas de azúcar",
        "1 lata de leche de coco (13.5 oz)",
        "2 rajas de canela",
        "4 clavos de olor",
        "½ cucharadita de jengibre",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 lbs sweet potato, peeled and cut",
        "1½ cups sugar",
        "1 can coconut milk (13.5 oz)",
        "2 cinnamon sticks",
        "4 whole cloves",
        "½ teaspoon ginger",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Hierva las batatas hasta que estén tiernas. Escurra y maje hasta formar un puré.",
        "En una olla, combine el puré con el azúcar, la leche de coco, la canela, clavos y jengibre.",
        "Cocine a fuego medio-bajo, revolviendo constantemente por 30-40 minutos.",
        "La mezcla debe espesarse y despegarse de la olla.",
        "Retire la canela y los clavos. Añada la vainilla.",
        "Vierta en un molde engrasado. Deje enfriar y corte en cuadros."
      ],
      en: [
        "Boil sweet potatoes until tender. Drain and mash into a purée.",
        "In a pot, combine purée with sugar, coconut milk, cinnamon, cloves, and ginger.",
        "Cook on medium-low heat, stirring constantly for 30-40 minutes.",
        "Mixture should thicken and pull away from the pot.",
        "Remove cinnamon and cloves. Add vanilla.",
        "Pour into a greased mold. Let cool and cut into squares."
      ]
    }
  },
  {
    id: "conserva-guayaba",
    category: "frutas",
    name: { es: "Cascos de Guayaba en Almíbar", en: "Guava Shells in Syrup" },
    time: "1 hr 30 min",
    servings: 8,
    ingredients: {
      es: [
        "2 lbs de guayabas maduras pero firmes",
        "3 tazas de azúcar",
        "4 tazas de agua",
        "2 rajas de canela",
        "Jugo de 1 limón",
        "Queso del país para servir"
      ],
      en: [
        "2 lbs ripe but firm guavas",
        "3 cups sugar",
        "4 cups water",
        "2 cinnamon sticks",
        "Juice of 1 lime",
        "Local white cheese for serving"
      ]
    },
    steps: {
      es: [
        "Pele las guayabas y córtelas por la mitad. Retire las semillas con una cuchara (puede colarlas para hacer jugo).",
        "Prepare un almíbar con el azúcar, el agua y la canela. Hierva 5 minutos.",
        "Añada los cascos de guayaba al almíbar.",
        "Cocine a fuego bajo por 45 minutos a 1 hora hasta que los cascos estén translúcidos y el almíbar espeso.",
        "Añada el jugo de limón. Deje enfriar.",
        "Sirva con queso del país — la combinación clásica puertorriqueña."
      ],
      en: [
        "Peel guavas and cut in half. Scoop out seeds with a spoon (strain them for juice if desired).",
        "Make syrup with sugar, water, and cinnamon. Boil 5 minutes.",
        "Add guava shells to the syrup.",
        "Cook on low heat for 45 minutes to 1 hour until shells are translucent and syrup is thick.",
        "Add lime juice. Let cool.",
        "Serve with local white cheese — the classic Puerto Rican combination."
      ]
    }
  },

  // ── CEREALES (adicionales) ──
  {
    id: "maicena-leche",
    category: "cereales",
    name: { es: "Maicena con Leche", en: "Cornstarch Pudding with Milk" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "4 cucharadas de maicena",
        "3 tazas de leche",
        "½ taza de azúcar",
        "1 raja de canela",
        "1 cucharadita de vainilla",
        "Pizca de sal",
        "Canela en polvo para servir"
      ],
      en: [
        "4 tablespoons cornstarch",
        "3 cups milk",
        "½ cup sugar",
        "1 cinnamon stick",
        "1 teaspoon vanilla",
        "Pinch of salt",
        "Ground cinnamon for serving"
      ]
    },
    steps: {
      es: [
        "Disuelva la maicena en ½ taza de leche fría.",
        "En una olla, caliente el resto de la leche con el azúcar, la sal y la canela en raja.",
        "Cuando la leche esté caliente, vierta la maicena disuelta revolviendo constantemente.",
        "Cocine a fuego medio, revolviendo, hasta que espese (8-10 minutos).",
        "Retire la canela. Añada la vainilla. Sirva en tazas espolvoreada con canela."
      ],
      en: [
        "Dissolve cornstarch in ½ cup cold milk.",
        "In a pot, heat remaining milk with sugar, salt, and cinnamon stick.",
        "When milk is hot, pour in dissolved cornstarch while stirring constantly.",
        "Cook on medium heat, stirring, until thick (8-10 minutes).",
        "Remove cinnamon. Add vanilla. Serve in cups sprinkled with cinnamon."
      ]
    }
  },

  // ── PASTELES DULCES (adicionales) ──
  {
    id: "quesillo",
    category: "pasteles_dulces",
    name: { es: "Quesillo", en: "Cheese Custard (Quesillo)" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "2 paquetes de queso crema (8 oz cada uno)",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "5 huevos",
        "1 cucharadita de vainilla",
        "1 taza de azúcar para el caramelo"
      ],
      en: [
        "2 packages cream cheese (8 oz each)",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "5 eggs",
        "1 teaspoon vanilla",
        "1 cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Prepare el caramelo derritiendo el azúcar en el molde. Cubra el fondo y los lados.",
        "Licúe el queso crema, las leches, los huevos y la vainilla hasta que esté suave.",
        "Vierta la mezcla sobre el caramelo.",
        "Hornee en baño de María a 350°F por 1 hora o hasta que cuaje.",
        "Deje enfriar completamente. Refrigere mínimo 6 horas.",
        "Voltee sobre un plato. Es más cremoso y denso que el flan tradicional."
      ],
      en: [
        "Make caramel by melting sugar in the mold. Coat bottom and sides.",
        "Blend cream cheese, both milks, eggs, and vanilla until smooth.",
        "Pour mixture over caramel.",
        "Bake in a water bath at 350°F for 1 hour or until set.",
        "Let cool completely. Refrigerate at least 6 hours.",
        "Flip onto a plate. It's creamier and denser than traditional flan."
      ]
    }
  },
  {
    id: "flancocho",
    category: "pasteles_dulces",
    name: { es: "Flancocho (Chocoflan)", en: "Flancocho (Chocolate Cake + Flan)" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "Capa de flan: 1 lata leche condensada, 1 lata leche evaporada, 4 huevos, 1 cda vainilla, 1 paquete queso crema (8oz)",
        "Capa de bizcocho: 1 caja mezcla de bizcocho de chocolate",
        "1 taza de azúcar para el caramelo"
      ],
      en: [
        "Flan layer: 1 can condensed milk, 1 can evaporated milk, 4 eggs, 1 tbsp vanilla, 1 package cream cheese (8oz)",
        "Cake layer: 1 box chocolate cake mix",
        "1 cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Prepare el caramelo en un molde Bundt. Cubra todo el fondo.",
        "Prepare la mezcla de bizcocho según las instrucciones. Vierta sobre el caramelo.",
        "Licúe todos los ingredientes del flan. Vierta con cuidado sobre la mezcla de bizcocho.",
        "Hornee en baño de María a 350°F por 1 hora.",
        "La magia: durante el horneado, las capas se invierten — el flan sube y el bizcocho baja.",
        "Deje enfriar. Refrigere 4 horas. Voltee sobre un plato."
      ],
      en: [
        "Make caramel in a Bundt pan. Coat the entire bottom.",
        "Prepare cake mix per instructions. Pour over caramel.",
        "Blend all flan ingredients. Carefully pour over cake batter.",
        "Bake in a water bath at 350°F for 1 hour.",
        "The magic: during baking, the layers swap — flan rises and cake sinks.",
        "Let cool. Refrigerate 4 hours. Flip onto a plate."
      ]
    }
  },

  // ── PANES (adicionales) ──
  {
    id: "pan-agua",
    category: "panes",
    name: { es: "Pan de Agua", en: "Puerto Rican Water Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "5 tazas de harina de pan",
        "2 cucharaditas de sal",
        "1 cucharada de azúcar",
        "2 sobres de levadura activa",
        "2 tazas de agua tibia",
        "2 cucharadas de manteca vegetal"
      ],
      en: [
        "5 cups bread flour",
        "2 teaspoons salt",
        "1 tablespoon sugar",
        "2 packets active dry yeast",
        "2 cups warm water",
        "2 tablespoons vegetable shortening"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en el agua tibia con el azúcar. Espere 10 minutos.",
        "Mezcle la harina con la sal. Haga un hueco y añada la levadura y la manteca.",
        "Amase por 10-15 minutos hasta obtener una masa suave y elástica.",
        "Cubra y deje crecer 1 hora hasta duplicar.",
        "Divida en 2 porciones. Forme panes largos y delgados. Deje crecer 30 minutos más.",
        "Haga cortes diagonales en la superficie. Hornee a 400°F por 25-30 minutos hasta que estén dorados y crujientes.",
        "La corteza debe ser crujiente y el interior suave."
      ],
      en: [
        "Dissolve yeast in warm water with sugar. Wait 10 minutes.",
        "Mix flour with salt. Make a well and add yeast and shortening.",
        "Knead 10-15 minutes until smooth and elastic.",
        "Cover and let rise 1 hour until doubled.",
        "Divide into 2 portions. Shape into long thin loaves. Let rise 30 more minutes.",
        "Score diagonal cuts on surface. Bake at 400°F for 25-30 minutes until golden and crusty.",
        "Crust should be crispy and inside soft."
      ]
    }
  },

  // ── CÓCTELES (adicionales) ──
  {
    id: "limoncello-pr",
    category: "cocteles",
    name: { es: "Limoncello Boricua", en: "Puerto Rican Limoncello" },
    time: "15 min + 2 semanas",
    servings: 15,
    ingredients: {
      es: [
        "10 limones verdes grandes (solo la cáscara)",
        "1 botella de ron blanco puertorriqueño (750 ml)",
        "2 tazas de azúcar",
        "2 tazas de agua"
      ],
      en: [
        "10 large limes (zest only)",
        "1 bottle Puerto Rican white rum (750 ml)",
        "2 cups sugar",
        "2 cups water"
      ]
    },
    steps: {
      es: [
        "Con un pelador, retire solo la cáscara de los limones (sin la parte blanca).",
        "Coloque las cáscaras en un frasco de cristal grande. Vierta el ron.",
        "Tape y guarde en un lugar oscuro por 2 semanas, agitando ocasionalmente.",
        "Prepare un almíbar simple hirviendo el azúcar con el agua. Deje enfriar.",
        "Cuele el ron y mezcle con el almíbar frío.",
        "Embotelle y refrigere. Sirva bien frío como digestivo."
      ],
      en: [
        "With a peeler, remove only the lime zest (not the white pith).",
        "Place zest in a large glass jar. Pour in rum.",
        "Seal and store in a dark place for 2 weeks, shaking occasionally.",
        "Make simple syrup by boiling sugar with water. Let cool.",
        "Strain rum and mix with cooled syrup.",
        "Bottle and refrigerate. Serve very cold as a digestif."
      ]
    }
  },
  {
    id: "coquito-pistacho",
    category: "cocteles",
    name: { es: "Coquito de Pistacho", en: "Pistachio Coquito" },
    time: "15 min",
    servings: 10,
    ingredients: {
      es: [
        "2 latas de leche de coco (13.5 oz)",
        "1 lata de leche condensada (14 oz)",
        "1 lata de leche evaporada (12 oz)",
        "1 paquete de pudín de pistacho instantáneo",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela",
        "Ron blanco al gusto"
      ],
      en: [
        "2 cans coconut milk (13.5 oz)",
        "1 can condensed milk (14 oz)",
        "1 can evaporated milk (12 oz)",
        "1 package instant pistachio pudding",
        "1 teaspoon vanilla",
        "½ teaspoon cinnamon",
        "White rum to taste"
      ]
    },
    steps: {
      es: [
        "En una licuadora, combine todas las leches.",
        "Añada el pudín de pistacho, la vainilla y la canela. Licúe hasta que esté suave.",
        "Agregue el ron al gusto. Mezcle.",
        "Vierta en botellas. Refrigere por al menos 4 horas.",
        "Agite bien antes de servir. El color verde lo hace perfecto para Navidad."
      ],
      en: [
        "In a blender, combine all milks.",
        "Add pistachio pudding, vanilla, and cinnamon. Blend until smooth.",
        "Add rum to taste. Mix.",
        "Pour into bottles. Refrigerate at least 4 hours.",
        "Shake well before serving. The green color makes it perfect for Christmas."
      ]
    }
  }
];
