// Recetas adicionales de la cocina puertorriqueña.
// Se cargan después de recipes.js y se añaden al mismo arreglo.
recipes.push(

  // ── FRUTAS ──
  {
    id: "ensalada-frutas-tropicales",
    category: "frutas",
    name: { es: "Ensalada de Frutas Tropicales", en: "Tropical Fruit Salad" },
    time: "20 min",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de piña fresca en cubos",
        "2 mangós maduros en cubos",
        "1 papaya (lechosa) pequeña en cubos",
        "2 guineos maduros en ruedas",
        "1 taza de uvas o fresas",
        "Pulpa de 2 parchas",
        "Jugo de 1 china (naranja)",
        "2 cucharadas de miel",
        "Coco rallado para decorar"
      ],
      en: [
        "2 cups fresh pineapple, cubed",
        "2 ripe mangoes, cubed",
        "1 small papaya, cubed",
        "2 ripe bananas, sliced",
        "1 cup grapes or strawberries",
        "Pulp of 2 passion fruits",
        "Juice of 1 orange",
        "2 tablespoons honey",
        "Shredded coconut for garnish"
      ]
    },
    steps: {
      es: [
        "Combine todas las frutas en un tazón grande.",
        "Mezcle el jugo de china, la pulpa de parcha y la miel.",
        "Vierta sobre las frutas y mezcle con cuidado.",
        "Refrigere 30 minutos. Sirva frío con coco rallado por encima."
      ],
      en: [
        "Combine all fruit in a large bowl.",
        "Mix orange juice, passion fruit pulp, and honey.",
        "Pour over fruit and toss gently.",
        "Refrigerate 30 minutes. Serve cold topped with shredded coconut."
      ]
    }
  },
  {
    id: "pina-asada-canela",
    category: "frutas",
    name: { es: "Piña Asada con Canela y Ron", en: "Grilled Pineapple with Cinnamon & Rum" },
    time: "20 min",
    servings: 6,
    ingredients: {
      es: [
        "1 piña fresca, pelada y cortada en ruedas",
        "¼ taza de azúcar morena",
        "2 cucharadas de mantequilla derretida",
        "1 cucharadita de canela",
        "2 cucharadas de ron oscuro (opcional)",
        "Mantecado de vainilla para servir"
      ],
      en: [
        "1 fresh pineapple, peeled and cut into rings",
        "¼ cup brown sugar",
        "2 tablespoons melted butter",
        "1 teaspoon cinnamon",
        "2 tablespoons dark rum (optional)",
        "Vanilla ice cream for serving"
      ]
    },
    steps: {
      es: [
        "Mezcle la mantequilla, el azúcar morena, la canela y el ron.",
        "Barnice las ruedas de piña con la mezcla.",
        "Ase en una plancha o parrilla caliente 3-4 minutos por lado hasta caramelizar.",
        "Sirva caliente con una bola de mantecado."
      ],
      en: [
        "Mix butter, brown sugar, cinnamon, and rum.",
        "Brush pineapple rings with the mixture.",
        "Grill on a hot griddle or grill 3-4 minutes per side until caramelized.",
        "Serve warm with a scoop of ice cream."
      ]
    }
  },

  // ── CEREALES ──
  {
    id: "crema-harina-platano",
    category: "cereales",
    name: { es: "Crema de Harina de Plátano", en: "Green Plantain Porridge" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "2 plátanos verdes (o ½ taza de harina de plátano)",
        "4 tazas de leche",
        "½ taza de azúcar",
        "1 raja de canela",
        "1 cucharadita de vainilla",
        "Pizca de sal"
      ],
      en: [
        "2 green plantains (or ½ cup plantain flour)",
        "4 cups milk",
        "½ cup sugar",
        "1 cinnamon stick",
        "1 teaspoon vanilla",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Si usa plátanos, rállelos finamente y licúelos con 2 tazas de leche. Cuele.",
        "En una olla, caliente el resto de la leche con la canela, el azúcar y la sal.",
        "Añada la mezcla de plátano (o la harina disuelta en leche fría) revolviendo sin parar.",
        "Cocine a fuego medio-bajo 10 minutos hasta que espese.",
        "Retire la canela, añada la vainilla y sirva caliente."
      ],
      en: [
        "If using plantains, grate finely and blend with 2 cups milk. Strain.",
        "In a pot, heat remaining milk with cinnamon, sugar, and salt.",
        "Add the plantain mixture (or flour dissolved in cold milk), stirring constantly.",
        "Cook on medium-low 10 minutes until thick.",
        "Remove cinnamon, add vanilla, and serve hot."
      ]
    }
  },
  {
    id: "crema-trigo",
    category: "cereales",
    name: { es: "Farina (Crema de Trigo) Criolla", en: "Puerto Rican Farina" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "½ taza de farina (crema de trigo)",
        "3 tazas de leche",
        "1 taza de agua",
        "⅓ taza de azúcar",
        "1 raja de canela",
        "1 cucharadita de vainilla",
        "1 cucharada de mantequilla",
        "Pizca de sal"
      ],
      en: [
        "½ cup farina (cream of wheat)",
        "3 cups milk",
        "1 cup water",
        "⅓ cup sugar",
        "1 cinnamon stick",
        "1 teaspoon vanilla",
        "1 tablespoon butter",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Hierva la leche, el agua, la canela y la sal.",
        "Añada la farina en forma de lluvia batiendo con un batidor para que no se formen grumos.",
        "Baje el fuego y cocine 5 minutos revolviendo.",
        "Añada el azúcar, la vainilla y la mantequilla.",
        "Sirva caliente espolvoreada con canela."
      ],
      en: [
        "Bring milk, water, cinnamon, and salt to a boil.",
        "Sprinkle in farina while whisking so no lumps form.",
        "Lower heat and cook 5 minutes, stirring.",
        "Add sugar, vanilla, and butter.",
        "Serve hot sprinkled with cinnamon."
      ]
    }
  },

  // ── GRANOS ──
  {
    id: "gandules-con-coco",
    category: "granos",
    name: { es: "Gandules con Coco", en: "Pigeon Peas in Coconut Milk" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de gandules verdes",
        "1 lata de leche de coco (13.5 oz)",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de salsa de tomate",
        "1 taza de calabaza en cubos",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 cans green pigeon peas",
        "1 can coconut milk (13.5 oz)",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons tomato sauce",
        "1 cup calabaza, cubed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada los gandules escurridos, la calabaza y la leche de coco.",
        "Cocine a fuego medio-bajo 20 minutos hasta que la calabaza se deshaga y espese.",
        "Ajuste la sal. Sirva con arroz blanco. Es típico de la costa sur y oeste."
      ],
      en: [
        "Sauté sofrito with sazón and tomato sauce.",
        "Add drained pigeon peas, calabaza, and coconut milk.",
        "Cook on medium-low 20 minutes until the calabaza breaks down and thickens.",
        "Adjust salt. Serve with white rice. Typical of the south and west coasts."
      ]
    }
  },
  {
    id: "habichuelas-tiernas-guisadas",
    category: "granos",
    name: { es: "Habichuelas Tiernas Guisadas", en: "Stewed Green Beans" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de habichuelas tiernas, cortadas en pedazos",
        "2 papas en cubos",
        "2 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de salsa de tomate",
        "2 onzas de jamón en cubitos",
        "Sal al gusto"
      ],
      en: [
        "1 lb green beans, cut into pieces",
        "2 potatoes, cubed",
        "2 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup tomato sauce",
        "2 oz ham, diced",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sofría el jamón con el sofrito, el sazón y la salsa de tomate.",
        "Añada las habichuelas tiernas, las papas y 1 taza de agua.",
        "Tape y cocine a fuego medio 20 minutos hasta que todo esté tierno.",
        "Sirva con arroz blanco."
      ],
      en: [
        "Sauté ham with sofrito, sazón, and tomato sauce.",
        "Add green beans, potatoes, and 1 cup water.",
        "Cover and cook on medium 20 minutes until tender.",
        "Serve with white rice."
      ]
    }
  },

  // ── ENSALADAS ──
  {
    id: "ensalada-verde-criolla",
    category: "ensaladas",
    name: { es: "Ensalada Verde Criolla", en: "Creole Green Salad" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lechuga del país (o romana), picada",
        "2 tomates en ruedas",
        "1 pepino en ruedas",
        "½ cebolla roja en aros",
        "1 aguacate en lascas",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de vinagre",
        "Sal al gusto"
      ],
      en: [
        "1 head local or romaine lettuce, chopped",
        "2 tomatoes, sliced",
        "1 cucumber, sliced",
        "½ red onion, in rings",
        "1 avocado, sliced",
        "3 tablespoons olive oil",
        "1 tablespoon vinegar",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Acomode la lechuga en un platón.",
        "Coloque encima el tomate, el pepino, la cebolla y el aguacate.",
        "Aliñe con aceite, vinagre y sal justo antes de servir."
      ],
      en: [
        "Arrange lettuce on a platter.",
        "Top with tomato, cucumber, onion, and avocado.",
        "Dress with oil, vinegar, and salt just before serving."
      ]
    }
  },
  {
    id: "ensalada-camarones",
    category: "ensaladas",
    name: { es: "Ensalada de Camarones", en: "Shrimp Salad" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de camarones cocidos y pelados",
        "½ cebolla roja picada",
        "½ pimiento rojo picado",
        "1 tallo de apio picado",
        "¼ taza de mayonesa",
        "Jugo de 1 limón",
        "Cilantro picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb cooked, peeled shrimp",
        "½ red onion, diced",
        "½ red bell pepper, diced",
        "1 celery stalk, diced",
        "¼ cup mayonnaise",
        "Juice of 1 lime",
        "Chopped cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Corte los camarones en pedazos si son grandes.",
        "Mezcle con la cebolla, el pimiento y el apio.",
        "Añada la mayonesa, el limón, el cilantro, sal y pimienta.",
        "Sirva fría sobre lechuga o con galletas."
      ],
      en: [
        "Cut shrimp into pieces if large.",
        "Mix with onion, pepper, and celery.",
        "Add mayonnaise, lime, cilantro, salt, and pepper.",
        "Serve cold over lettuce or with crackers."
      ]
    }
  },

  // ── SOPAS ──
  {
    id: "sopa-fideos-carne",
    category: "sopas",
    name: { es: "Sopa de Carne con Fideos y Viandas", en: "Beef Soup with Noodles and Root Vegetables" },
    time: "1 hr 45 min",
    servings: 8,
    ingredients: {
      es: [
        "2 lbs de carne de res con hueso",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "1 lb de yautía en pedazos",
        "1 lb de calabaza en pedazos",
        "2 zanahorias en ruedas",
        "1 mazorca de maíz en trozos",
        "1 taza de fideos finos",
        "Sal al gusto"
      ],
      en: [
        "2 lbs bone-in beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "1 lb yautía, in chunks",
        "1 lb calabaza, in chunks",
        "2 carrots, sliced",
        "1 ear of corn, in chunks",
        "1 cup thin noodles",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la carne en 10 tazas de agua con sal por 1 hora, espumando.",
        "Añada el sofrito y el sazón.",
        "Agregue la yautía, la calabaza, la zanahoria y el maíz. Cocine 25 minutos.",
        "Añada los fideos y cocine 8 minutos más.",
        "Sirva caliente con limón y pique."
      ],
      en: [
        "Boil the beef in 10 cups salted water for 1 hour, skimming.",
        "Add sofrito and sazón.",
        "Add yautía, calabaza, carrot, and corn. Cook 25 minutes.",
        "Add noodles and cook 8 more minutes.",
        "Serve hot with lime and hot sauce."
      ]
    }
  },
  {
    id: "asopao-gandules",
    category: "sopas",
    name: { es: "Asopao de Gandules con Bacalao", en: "Pigeon Pea & Codfish Asopao" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de arroz grano corto",
        "1 lata de gandules",
        "½ lb de bacalao desalado y desmenuzado",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas",
        "7 tazas de agua",
        "Sal al gusto"
      ],
      en: [
        "1 cup short grain rice",
        "1 can pigeon peas",
        "½ lb desalted codfish, shredded",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "¼ cup olives",
        "7 cups water",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sofría el bacalao con el sofrito, sazón, salsa de tomate y aceitunas.",
        "Añada el agua y los gandules. Hierva.",
        "Agregue el arroz y cocine a fuego medio 20-25 minutos revolviendo de vez en cuando.",
        "Debe quedar caldoso. Sirva enseguida, tradicional en la época navideña."
      ],
      en: [
        "Sauté codfish with sofrito, sazón, tomato sauce, and olives.",
        "Add water and pigeon peas. Bring to a boil.",
        "Add rice and cook on medium 20-25 minutes, stirring occasionally.",
        "It should be soupy. Serve right away — a Christmas-season tradition."
      ]
    }
  },

  // ── CARNES ──
  {
    id: "lechon-asado",
    category: "carnes",
    name: { es: "Lechón Asado al Horno", en: "Oven-Roasted Suckling Pig (Lechón)" },
    time: "6 hrs + marinado",
    servings: 15,
    ingredients: {
      es: [
        "1 lechón pequeño (15-20 lbs) o 2 paletas con cuero",
        "2 cabezas de ajo",
        "3 cucharadas de orégano seco",
        "4 cucharadas de sal",
        "1 cucharada de pimienta",
        "½ taza de aceite con achiote",
        "½ taza de naranja agria (o vinagre)"
      ],
      en: [
        "1 small suckling pig (15-20 lbs) or 2 skin-on pork shoulders",
        "2 heads of garlic",
        "3 tablespoons dried oregano",
        "4 tablespoons salt",
        "1 tablespoon pepper",
        "½ cup annatto oil",
        "½ cup sour orange juice (or vinegar)"
      ]
    },
    steps: {
      es: [
        "Maje el ajo, el orégano, la sal y la pimienta en el pilón. Añada la naranja agria.",
        "Haga cortes profundos en la carne y rellénelos con el adobo. Frote por dentro y por fuera.",
        "Marine en la nevera 24 horas.",
        "Seque bien el cuero y úntelo con el aceite de achiote.",
        "Ase a 325°F unas 5-6 horas (20 min por libra) hasta 190°F interno.",
        "Suba a 425°F los últimos 20 minutos para que el cuero quede crujiente.",
        "Repose 20 minutos antes de cortar. Sirva con arroz con gandules."
      ],
      en: [
        "Mash garlic, oregano, salt, and pepper in a mortar. Add sour orange.",
        "Make deep cuts in the meat and fill with the adobo. Rub inside and out.",
        "Marinate in the fridge 24 hours.",
        "Pat the skin dry and brush with annatto oil.",
        "Roast at 325°F about 5-6 hours (20 min per pound) to 190°F internal.",
        "Raise to 425°F for the last 20 minutes so the skin gets crispy.",
        "Rest 20 minutes before carving. Serve with rice and pigeon peas."
      ]
    }
  },
  {
    id: "chuletas-fritas",
    category: "carnes",
    name: { es: "Chuletas Fritas", en: "Fried Pork Chops" },
    time: "30 min + marinado",
    servings: 4,
    ingredients: {
      es: [
        "4 chuletas de cerdo",
        "4 dientes de ajo majados",
        "1 cucharadita de orégano",
        "1 cucharada de vinagre",
        "1 cucharadita de adobo",
        "Aceite para freír",
        "1 cebolla en aros (opcional)"
      ],
      en: [
        "4 pork chops",
        "4 garlic cloves, mashed",
        "1 teaspoon oregano",
        "1 tablespoon vinegar",
        "1 teaspoon adobo seasoning",
        "Oil for frying",
        "1 onion, in rings (optional)"
      ]
    },
    steps: {
      es: [
        "Adobe las chuletas con ajo, orégano, vinagre y adobo. Marine al menos 1 hora.",
        "Caliente ½ pulgada de aceite en un sartén.",
        "Fría las chuletas a fuego medio 6-7 minutos por lado hasta dorar.",
        "Si desea, sofría cebolla en el mismo sartén y colóquela encima.",
        "Sirva con arroz, habichuelas y tostones."
      ],
      en: [
        "Season chops with garlic, oregano, vinegar, and adobo. Marinate at least 1 hour.",
        "Heat ½ inch of oil in a skillet.",
        "Fry chops on medium 6-7 minutes per side until golden.",
        "If desired, sauté onion in the same skillet and spoon on top.",
        "Serve with rice, beans, and tostones."
      ]
    }
  },
  {
    id: "costillas-guayaba",
    category: "carnes",
    name: { es: "Costillas con BBQ de Guayaba", en: "Guava BBQ Ribs" },
    time: "3 hrs",
    servings: 6,
    ingredients: {
      es: [
        "2 costillares de cerdo (baby back)",
        "2 cucharadas de adobo",
        "1 cucharada de ajo en polvo",
        "1 cucharadita de comino",
        "Salsa: 8 oz de pasta de guayaba, ½ taza de ketchup, ¼ taza de vinagre, 2 cucharadas de salsa inglesa, 2 dientes de ajo, ½ taza de agua"
      ],
      en: [
        "2 racks baby back pork ribs",
        "2 tablespoons adobo seasoning",
        "1 tablespoon garlic powder",
        "1 teaspoon cumin",
        "Sauce: 8 oz guava paste, ½ cup ketchup, ¼ cup vinegar, 2 tablespoons Worcestershire, 2 garlic cloves, ½ cup water"
      ]
    },
    steps: {
      es: [
        "Sazone las costillas con adobo, ajo en polvo y comino.",
        "Envuelva en papel de aluminio y hornee a 300°F por 2½ horas.",
        "Para la salsa: derrita la pasta de guayaba con el agua y añada el resto de los ingredientes. Cocine 10 minutos.",
        "Destape las costillas, barnice con la salsa y hornee a 425°F 15 minutos (o áselas a la parrilla).",
        "Corte y sirva con más salsa."
      ],
      en: [
        "Season ribs with adobo, garlic powder, and cumin.",
        "Wrap in foil and bake at 300°F for 2½ hours.",
        "For the sauce: melt guava paste with water and add remaining ingredients. Cook 10 minutes.",
        "Unwrap ribs, brush with sauce, and bake at 425°F for 15 minutes (or grill).",
        "Cut and serve with extra sauce."
      ]
    }
  },
  {
    id: "rabo-encendido",
    category: "carnes",
    name: { es: "Rabo Encendido", en: "Spicy Oxtail Stew" },
    time: "3 hrs",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de rabo de res en trozos",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "1 lata de salsa de tomate (8 oz)",
        "1 taza de vino tinto",
        "2 hojas de laurel",
        "1 ají picante (opcional)",
        "2 zanahorias en ruedas",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 lbs oxtail, in pieces",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "1 can tomato sauce (8 oz)",
        "1 cup red wine",
        "2 bay leaves",
        "1 hot pepper (optional)",
        "2 carrots, sliced",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el rabo con sal y pimienta. Dore bien en un caldero con aceite.",
        "Añada el sofrito, sazón, salsa de tomate, vino, laurel y ají.",
        "Cubra con agua, tape y cocine a fuego bajo 2½ horas hasta que la carne se despegue del hueso.",
        "Añada la zanahoria los últimos 30 minutos.",
        "Sirva con arroz blanco y amarillos."
      ],
      en: [
        "Season oxtail with salt and pepper. Brown well in a caldero with oil.",
        "Add sofrito, sazón, tomato sauce, wine, bay leaves, and hot pepper.",
        "Cover with water, cover the pot, and cook on low 2½ hours until meat falls off the bone.",
        "Add carrots the last 30 minutes.",
        "Serve with white rice and sweet plantains."
      ]
    }
  },

  // ── AVES ──
  {
    id: "pollo-frito-criollo",
    category: "aves",
    name: { es: "Pollo Frito Criollo", en: "Puerto Rican Fried Chicken" },
    time: "45 min + marinado",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de presas de pollo",
        "6 dientes de ajo majados",
        "1 cucharada de orégano",
        "2 cucharadas de adobo",
        "Jugo de 2 limones",
        "1 taza de harina",
        "Aceite para freír"
      ],
      en: [
        "3 lbs chicken pieces",
        "6 garlic cloves, mashed",
        "1 tablespoon oregano",
        "2 tablespoons adobo seasoning",
        "Juice of 2 limes",
        "1 cup flour",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo con ajo, orégano, adobo y limón. Marine 4 horas o toda la noche.",
        "Pase cada presa por harina sazonada con un poco de adobo.",
        "Fría en aceite a 325°F, 15-18 minutos, volteando, hasta dorar y cocinar por dentro.",
        "Escurra y sirva con tostones o papas fritas."
      ],
      en: [
        "Season chicken with garlic, oregano, adobo, and lime. Marinate 4 hours or overnight.",
        "Dredge each piece in flour seasoned with a little adobo.",
        "Fry in 325°F oil 15-18 minutes, turning, until golden and cooked through.",
        "Drain and serve with tostones or fries."
      ]
    }
  },
  {
    id: "pechugas-rellenas",
    category: "aves",
    name: { es: "Pechugas Rellenas de Amarillos y Queso", en: "Chicken Breasts Stuffed with Sweet Plantain & Cheese" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "4 pechugas de pollo deshuesadas",
        "1 plátano maduro frito, en tiras",
        "4 lascas de queso suizo",
        "4 lascas de jamón",
        "2 cucharaditas de adobo",
        "1 cucharadita de ajo en polvo",
        "Palillos de dientes"
      ],
      en: [
        "4 boneless chicken breasts",
        "1 fried ripe plantain, in strips",
        "4 slices Swiss cheese",
        "4 slices ham",
        "2 teaspoons adobo seasoning",
        "1 teaspoon garlic powder",
        "Toothpicks"
      ]
    },
    steps: {
      es: [
        "Abra cada pechuga como libro y aplánela. Sazone con adobo y ajo.",
        "Coloque jamón, queso y tiras de amarillo. Enrolle y asegure con palillos.",
        "Dore en un sartén con aceite por todos lados.",
        "Termine en el horno a 375°F por 20 minutos.",
        "Corte en ruedas y sirva."
      ],
      en: [
        "Butterfly each breast and pound flat. Season with adobo and garlic.",
        "Layer ham, cheese, and plantain strips. Roll up and secure with toothpicks.",
        "Brown on all sides in an oiled skillet.",
        "Finish in a 375°F oven for 20 minutes.",
        "Slice into rounds and serve."
      ]
    }
  },

  // ── PESCADOS ──
  {
    id: "langosta-criolla",
    category: "pescados",
    name: { es: "Langosta a la Criolla", en: "Creole Spiny Lobster" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "4 colas de langosta",
        "3 cucharadas de sofrito",
        "1 lata de salsa de tomate (8 oz)",
        "½ taza de vino blanco",
        "4 dientes de ajo majados",
        "3 cucharadas de mantequilla",
        "1 hoja de laurel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 lobster tails",
        "3 tablespoons sofrito",
        "1 can tomato sauce (8 oz)",
        "½ cup white wine",
        "4 garlic cloves, mashed",
        "3 tablespoons butter",
        "1 bay leaf",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Corte las colas por la mitad a lo largo, o saque la carne y córtela en medallones.",
        "Derrita la mantequilla y sofría el ajo y el sofrito.",
        "Añada la salsa de tomate, el vino y el laurel. Cocine 10 minutos.",
        "Agregue la langosta y cocine 8-10 minutos hasta que esté opaca.",
        "Sirva con mofongo o arroz blanco."
      ],
      en: [
        "Split tails lengthwise, or remove the meat and cut into medallions.",
        "Melt butter and sauté garlic and sofrito.",
        "Add tomato sauce, wine, and bay leaf. Cook 10 minutes.",
        "Add lobster and cook 8-10 minutes until opaque.",
        "Serve with mofongo or white rice."
      ]
    }
  },
  {
    id: "filete-pescado-mojo",
    category: "pescados",
    name: { es: "Filete de Pescado al Mojo de Ajo", en: "Fish Fillet in Garlic Mojo" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de dorado (mahi-mahi) o mero",
        "8 dientes de ajo picados",
        "⅓ taza de aceite de oliva",
        "Jugo de 2 limones",
        "Harina para enharinar",
        "Perejil o cilantro picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 mahi-mahi or grouper fillets",
        "8 garlic cloves, chopped",
        "⅓ cup olive oil",
        "Juice of 2 limes",
        "Flour for dredging",
        "Chopped parsley or cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el pescado con sal, pimienta y un poco de limón. Enharine ligeramente.",
        "Dore en un sartén con 2 cucharadas de aceite, 3 minutos por lado. Retire.",
        "En el mismo sartén, caliente el resto del aceite y sofría el ajo a fuego bajo.",
        "Añada el limón restante y el perejil.",
        "Bañe los filetes con el mojo. Sirva con tostones."
      ],
      en: [
        "Season fish with salt, pepper, and a little lime. Dredge lightly in flour.",
        "Brown in a skillet with 2 tablespoons oil, 3 minutes per side. Remove.",
        "In the same skillet, heat remaining oil and sauté garlic on low.",
        "Add remaining lime juice and parsley.",
        "Spoon the mojo over the fillets. Serve with tostones."
      ]
    }
  },

  // ── HUEVOS Y QUESO ──
  {
    id: "queso-blanco-casero",
    category: "huevos",
    name: { es: "Queso Blanco Casero (Queso del País)", en: "Homemade Fresh White Cheese" },
    time: "40 min + escurrido",
    servings: 8,
    ingredients: {
      es: [
        "1 galón de leche entera (no ultrapasteurizada)",
        "⅓ taza de vinagre blanco o jugo de limón",
        "2 cucharaditas de sal",
        "Paño de queso (manta de cielo)"
      ],
      en: [
        "1 gallon whole milk (not ultra-pasteurized)",
        "⅓ cup white vinegar or lime juice",
        "2 teaspoons salt",
        "Cheesecloth"
      ]
    },
    steps: {
      es: [
        "Caliente la leche a fuego medio, revolviendo, hasta casi hervir (185°F).",
        "Apague el fuego y añada el vinagre poco a poco. La leche se cortará en requesón y suero.",
        "Repose 10 minutos. Cuele por el paño de queso.",
        "Añada la sal y mezcle. Amarre el paño y cuelgue 1 hora para escurrir.",
        "Presione con un peso en un molde por 2 horas. Refrigere. Rinde para freír o comer con dulces."
      ],
      en: [
        "Heat milk on medium, stirring, until almost boiling (185°F).",
        "Turn off heat and add vinegar little by little. The milk will separate into curds and whey.",
        "Rest 10 minutes. Strain through cheesecloth.",
        "Add salt and mix. Tie the cloth and hang 1 hour to drain.",
        "Press under a weight in a mold for 2 hours. Refrigerate. Great for frying or serving with sweets."
      ]
    }
  },
  {
    id: "revoltillo-salchichas",
    category: "huevos",
    name: { es: "Revoltillo con Salchichas", en: "Scrambled Eggs with Vienna Sausages" },
    time: "15 min",
    servings: 3,
    ingredients: {
      es: [
        "6 huevos",
        "1 lata de salchichas (Vienna) en ruedas",
        "1 cucharada de sofrito",
        "1 cucharada de salsa de tomate",
        "1 cucharada de mantequilla",
        "Sal al gusto"
      ],
      en: [
        "6 eggs",
        "1 can Vienna sausages, sliced",
        "1 tablespoon sofrito",
        "1 tablespoon tomato sauce",
        "1 tablespoon butter",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sofría las salchichas con el sofrito y la salsa de tomate en la mantequilla.",
        "Bata los huevos con sal y viértalos en el sartén.",
        "Revuelva a fuego bajo hasta que cuajen.",
        "Sirva con pan sobao tostado o arroz blanco."
      ],
      en: [
        "Sauté sausages with sofrito and tomato sauce in the butter.",
        "Beat eggs with salt and pour into the skillet.",
        "Stir on low heat until set.",
        "Serve with toasted soft bread or white rice."
      ]
    }
  },
  {
    id: "tortilla-jamon-queso",
    category: "huevos",
    name: { es: "Tortilla de Jamón y Queso", en: "Ham and Cheese Omelette" },
    time: "15 min",
    servings: 2,
    ingredients: {
      es: [
        "4 huevos",
        "½ taza de jamón picado",
        "½ taza de queso cheddar o suizo rallado",
        "2 cucharadas de cebolla picada",
        "2 cucharadas de pimiento picado",
        "1 cucharada de mantequilla",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 eggs",
        "½ cup diced ham",
        "½ cup shredded cheddar or Swiss",
        "2 tablespoons diced onion",
        "2 tablespoons diced bell pepper",
        "1 tablespoon butter",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el pimiento y el jamón en la mantequilla.",
        "Bata los huevos con sal y pimienta y viértalos sobre el sofrito.",
        "Cuando empiecen a cuajar, añada el queso sobre una mitad.",
        "Doble la tortilla por la mitad y cocine 1 minuto más. Sirva con pan con mantequilla y café."
      ],
      en: [
        "Sauté onion, pepper, and ham in the butter.",
        "Beat eggs with salt and pepper and pour over.",
        "When they begin to set, add cheese over one half.",
        "Fold in half and cook 1 more minute. Serve with buttered bread and coffee."
      ]
    }
  },

  // ── ENTREMESES ──
  {
    id: "bolitas-queso",
    category: "entremeses",
    name: { es: "Bolitas de Queso", en: "Cheese Balls" },
    time: "30 min",
    servings: 24,
    ingredients: {
      es: [
        "2 tazas de queso de bola (Edam) o cheddar rallado",
        "3 claras de huevo",
        "2 cucharadas de harina",
        "Pizca de sal",
        "Pan rallado",
        "Aceite para freír"
      ],
      en: [
        "2 cups grated Edam or cheddar cheese",
        "3 egg whites",
        "2 tablespoons flour",
        "Pinch of salt",
        "Breadcrumbs",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Bata las claras a punto de nieve.",
        "Incorpore el queso, la harina y la sal con movimientos envolventes.",
        "Forme bolitas del tamaño de una nuez y páselas por pan rallado.",
        "Fría en aceite caliente hasta dorar. Escurra y sirva enseguida."
      ],
      en: [
        "Beat egg whites to stiff peaks.",
        "Fold in cheese, flour, and salt.",
        "Form walnut-sized balls and roll in breadcrumbs.",
        "Fry in hot oil until golden. Drain and serve right away."
      ]
    }
  },
  {
    id: "bunuelos-yautia",
    category: "entremeses",
    name: { es: "Buñuelos de Yautía", en: "Taro Root Fritters" },
    time: "30 min",
    servings: 20,
    ingredients: {
      es: [
        "1 lb de yautía blanca, pelada y rallada",
        "1 huevo",
        "2 dientes de ajo majados",
        "1 cucharadita de sal",
        "2 cucharadas de cilantro picado",
        "Aceite para freír"
      ],
      en: [
        "1 lb white yautía (taro), peeled and grated",
        "1 egg",
        "2 garlic cloves, mashed",
        "1 teaspoon salt",
        "2 tablespoons chopped cilantro",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle la yautía rallada con el huevo, el ajo, la sal y el cilantro.",
        "Caliente el aceite a 350°F.",
        "Deje caer cucharadas de la mezcla y fría hasta que estén doradas y crujientes.",
        "Escurra y sirva con mayo-ketchup."
      ],
      en: [
        "Mix grated yautía with egg, garlic, salt, and cilantro.",
        "Heat oil to 350°F.",
        "Drop in spoonfuls and fry until golden and crispy.",
        "Drain and serve with mayo-ketchup."
      ]
    }
  },
  {
    id: "barriguitas-vieja",
    category: "entremeses",
    name: { es: "Barriguitas de Vieja (Buñuelos de Calabaza)", en: "Pumpkin Fritters" },
    time: "35 min",
    servings: 20,
    ingredients: {
      es: [
        "2 tazas de calabaza cocida y majada",
        "1 taza de harina",
        "½ taza de azúcar",
        "1 huevo",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de canela",
        "¼ cucharadita de nuez moscada",
        "Aceite para freír",
        "Azúcar y canela para espolvorear"
      ],
      en: [
        "2 cups cooked, mashed calabaza",
        "1 cup flour",
        "½ cup sugar",
        "1 egg",
        "1 teaspoon baking powder",
        "½ teaspoon cinnamon",
        "¼ teaspoon nutmeg",
        "Oil for frying",
        "Cinnamon sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Mezcle la calabaza con el huevo y el azúcar.",
        "Añada la harina, el polvo de hornear, la canela y la nuez moscada.",
        "Fría cucharadas de la masa en aceite a 350°F hasta dorar por ambos lados.",
        "Escurra y espolvoree con azúcar y canela."
      ],
      en: [
        "Mix calabaza with egg and sugar.",
        "Add flour, baking powder, cinnamon, and nutmeg.",
        "Fry spoonfuls of batter in 350°F oil until golden on both sides.",
        "Drain and dust with cinnamon sugar."
      ]
    }
  },

  // ── BIZCOCHOS ──
  {
    id: "bizcocho-boricua",
    category: "bizcochos",
    name: { es: "Bizcocho Boricua de Cumpleaños (Relleno de Piña)", en: "Puerto Rican Birthday Cake (Pineapple Filled)" },
    time: "2 hrs",
    servings: 16,
    ingredients: {
      es: [
        "Bizcocho: 3 tazas de harina, 2 tazas de azúcar, 1 taza de mantequilla, 5 huevos, 1 taza de leche, 1 cucharada de polvo de hornear, 1 cucharada de vainilla",
        "Almíbar: ½ taza de agua, ½ taza de azúcar, 2 cucharadas de ron",
        "Relleno: 1 lata de piña triturada, ½ taza de azúcar, 2 cucharadas de maicena",
        "Merengue: 4 claras, 1 taza de azúcar, ⅓ taza de agua"
      ],
      en: [
        "Cake: 3 cups flour, 2 cups sugar, 1 cup butter, 5 eggs, 1 cup milk, 1 tablespoon baking powder, 1 tablespoon vanilla",
        "Syrup: ½ cup water, ½ cup sugar, 2 tablespoons rum",
        "Filling: 1 can crushed pineapple, ½ cup sugar, 2 tablespoons cornstarch",
        "Meringue: 4 egg whites, 1 cup sugar, ⅓ cup water"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el azúcar, añada los huevos uno a uno y la vainilla. Alterne la harina con polvo de hornear y la leche.",
        "Hornee en 2 moldes de 9\" a 350°F por 30-35 minutos. Enfríe.",
        "Cocine la piña con el azúcar y la maicena hasta espesar. Enfríe.",
        "Hierva el agua con el azúcar, añada el ron. Moje ambas capas con el almíbar.",
        "Rellene con la piña entre las capas.",
        "Merengue italiano: hierva el azúcar con el agua a punto de bola (240°F) y viértalo en hilo sobre las claras batidas. Bata hasta enfriar y cubra el bizcocho."
      ],
      en: [
        "Cream butter and sugar, add eggs one at a time and vanilla. Alternate flour with baking powder and milk.",
        "Bake in two 9\" pans at 350°F for 30-35 minutes. Cool.",
        "Cook pineapple with sugar and cornstarch until thick. Cool.",
        "Boil water with sugar, add rum. Soak both layers with the syrup.",
        "Fill with pineapple between the layers.",
        "Italian meringue: boil sugar and water to soft-ball stage (240°F) and pour in a thin stream into beaten whites. Beat until cool and frost the cake."
      ]
    }
  },
  {
    id: "bizcocho-calabaza",
    category: "bizcochos",
    name: { es: "Bizcocho de Calabaza", en: "Calabaza Cake" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de calabaza cocida y majada",
        "2 tazas de harina",
        "1½ tazas de azúcar",
        "1 taza de aceite",
        "4 huevos",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de bicarbonato",
        "2 cucharaditas de canela",
        "½ cucharadita de jengibre y nuez moscada",
        "½ cucharadita de sal"
      ],
      en: [
        "2 cups cooked, mashed calabaza",
        "2 cups flour",
        "1½ cups sugar",
        "1 cup oil",
        "4 eggs",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "2 teaspoons cinnamon",
        "½ teaspoon each ginger and nutmeg",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Bata los huevos, el azúcar y el aceite. Añada la calabaza.",
        "Cierna la harina con el polvo de hornear, bicarbonato, especias y sal.",
        "Una ambas mezclas sin batir demasiado.",
        "Vierta en un molde Bundt engrasado y hornee a 350°F por 50-55 minutos.",
        "Enfríe y espolvoree azúcar en polvo."
      ],
      en: [
        "Beat eggs, sugar, and oil. Add calabaza.",
        "Sift flour with baking powder, baking soda, spices, and salt.",
        "Combine both mixtures without overmixing.",
        "Pour into a greased Bundt pan and bake at 350°F for 50-55 minutes.",
        "Cool and dust with powdered sugar."
      ]
    }
  },

  // ── GALLETITAS ──
  {
    id: "galletas-guayaba",
    category: "galletitas",
    name: { es: "Galletas de Guayaba", en: "Guava Thumbprint Cookies" },
    time: "40 min",
    servings: 30,
    ingredients: {
      es: [
        "2 tazas de harina",
        "1 taza de mantequilla",
        "½ taza de azúcar",
        "1 yema de huevo",
        "1 cucharadita de vainilla",
        "Pizca de sal",
        "4 oz de pasta de guayaba en cubitos"
      ],
      en: [
        "2 cups flour",
        "1 cup butter",
        "½ cup sugar",
        "1 egg yolk",
        "1 teaspoon vanilla",
        "Pinch of salt",
        "4 oz guava paste, in small cubes"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el azúcar. Añada la yema y la vainilla.",
        "Incorpore la harina y la sal hasta formar una masa suave.",
        "Forme bolitas y colóquelas en una bandeja. Presione el centro con el pulgar.",
        "Coloque un cubito de guayaba en cada hueco.",
        "Hornee a 350°F por 12-15 minutos hasta que los bordes estén dorados."
      ],
      en: [
        "Cream butter with sugar. Add yolk and vanilla.",
        "Mix in flour and salt to form a soft dough.",
        "Roll into balls and place on a baking sheet. Press the center with your thumb.",
        "Place a guava cube in each well.",
        "Bake at 350°F for 12-15 minutes until the edges are golden."
      ]
    }
  },
  {
    id: "galletas-anis",
    category: "galletitas",
    name: { es: "Galletas de Anís", en: "Anise Cookies" },
    time: "35 min",
    servings: 36,
    ingredients: {
      es: [
        "3 tazas de harina",
        "1 taza de azúcar",
        "¾ taza de manteca vegetal o mantequilla",
        "2 huevos",
        "1 cucharada de semillas de anís",
        "1 cucharadita de polvo de hornear",
        "2 cucharadas de leche"
      ],
      en: [
        "3 cups flour",
        "1 cup sugar",
        "¾ cup shortening or butter",
        "2 eggs",
        "1 tablespoon anise seeds",
        "1 teaspoon baking powder",
        "2 tablespoons milk"
      ]
    },
    steps: {
      es: [
        "Bata la manteca con el azúcar. Añada los huevos y la leche.",
        "Incorpore la harina, el polvo de hornear y el anís.",
        "Estire la masa y corte con moldes, o forme rosquitas.",
        "Hornee a 350°F por 12 minutos hasta que estén ligeramente doradas."
      ],
      en: [
        "Cream shortening with sugar. Add eggs and milk.",
        "Mix in flour, baking powder, and anise.",
        "Roll out and cut with cookie cutters, or shape into small rings.",
        "Bake at 350°F for 12 minutes until lightly golden."
      ]
    }
  },
  {
    id: "galletas-coco",
    category: "galletitas",
    name: { es: "Galletas de Coco", en: "Coconut Cookies" },
    time: "30 min",
    servings: 24,
    ingredients: {
      es: [
        "1½ tazas de harina",
        "½ taza de mantequilla",
        "¾ taza de azúcar",
        "1 huevo",
        "1½ tazas de coco rallado",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1½ cups flour",
        "½ cup butter",
        "¾ cup sugar",
        "1 egg",
        "1½ cups shredded coconut",
        "1 teaspoon baking powder",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el azúcar, el huevo y la vainilla.",
        "Añada la harina, el polvo de hornear y el coco.",
        "Coloque cucharadas en una bandeja y aplaste ligeramente.",
        "Hornee a 350°F por 12-14 minutos."
      ],
      en: [
        "Beat butter with sugar, egg, and vanilla.",
        "Add flour, baking powder, and coconut.",
        "Drop spoonfuls on a baking sheet and flatten slightly.",
        "Bake at 350°F for 12-14 minutes."
      ]
    }
  },

  // ── PASTELES DULCES ──
  {
    id: "pie-batata",
    category: "pasteles_dulces",
    name: { es: "Pastel (Pie) de Batata", en: "Sweet Potato Pie" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie",
        "2 tazas de batata blanca cocida y majada",
        "¾ taza de azúcar",
        "1 lata de leche evaporada",
        "2 huevos",
        "2 cucharadas de mantequilla derretida",
        "1 cucharadita de canela",
        "½ cucharadita de jengibre",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 pie crust",
        "2 cups cooked, mashed white sweet potato (batata)",
        "¾ cup sugar",
        "1 can evaporated milk",
        "2 eggs",
        "2 tablespoons melted butter",
        "1 teaspoon cinnamon",
        "½ teaspoon ginger",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 375°F. Coloque la masa en un molde de pie.",
        "Mezcle la batata con el azúcar, leche, huevos, mantequilla, especias y vainilla hasta que quede suave.",
        "Vierta en la masa.",
        "Hornee 45-50 minutos hasta que el centro cuaje.",
        "Enfríe antes de cortar."
      ],
      en: [
        "Preheat oven to 375°F. Fit the crust into a pie pan.",
        "Blend sweet potato with sugar, milk, eggs, butter, spices, and vanilla until smooth.",
        "Pour into the crust.",
        "Bake 45-50 minutes until the center is set.",
        "Cool before slicing."
      ]
    }
  },
  {
    id: "pie-coco",
    category: "pasteles_dulces",
    name: { es: "Pie de Coco", en: "Coconut Custard Pie" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie",
        "1½ tazas de coco rallado",
        "1 lata de leche condensada",
        "1 taza de leche de coco",
        "3 huevos",
        "2 cucharadas de mantequilla derretida",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 pie crust",
        "1½ cups shredded coconut",
        "1 can condensed milk",
        "1 cup coconut milk",
        "3 eggs",
        "2 tablespoons melted butter",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F.",
        "Mezcle la leche condensada, la leche de coco, los huevos, la mantequilla y la vainilla.",
        "Añada el coco rallado.",
        "Vierta en la masa y hornee 40-45 minutos hasta dorar.",
        "Enfríe y refrigere antes de servir."
      ],
      en: [
        "Preheat oven to 350°F.",
        "Mix condensed milk, coconut milk, eggs, butter, and vanilla.",
        "Stir in shredded coconut.",
        "Pour into the crust and bake 40-45 minutes until golden.",
        "Cool and refrigerate before serving."
      ]
    }
  },

  // ── PANES ──
  {
    id: "pan-manteca",
    category: "panes",
    name: { es: "Pan de Manteca", en: "Puerto Rican Lard Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "5 tazas de harina de pan",
        "1 sobre de levadura",
        "1½ tazas de agua tibia",
        "½ taza de manteca (o manteca vegetal)",
        "2 cucharadas de azúcar",
        "2 cucharaditas de sal"
      ],
      en: [
        "5 cups bread flour",
        "1 packet yeast",
        "1½ cups warm water",
        "½ cup lard (or shortening)",
        "2 tablespoons sugar",
        "2 teaspoons salt"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en el agua tibia. Espere 10 minutos.",
        "Mezcle la harina y la sal, añada la levadura y la manteca.",
        "Amase 10 minutos. Deje crecer 1 hora.",
        "Forme 2 panes largos, colóquelos en bandeja engrasada y deje crecer 45 minutos.",
        "Haga un corte a lo largo y hornee a 375°F por 30 minutos. La miga es suave y la corteza fina."
      ],
      en: [
        "Dissolve yeast and sugar in warm water. Wait 10 minutes.",
        "Mix flour and salt, add yeast and lard.",
        "Knead 10 minutes. Let rise 1 hour.",
        "Shape into 2 long loaves, place on a greased sheet, and let rise 45 minutes.",
        "Slash lengthwise and bake at 375°F for 30 minutes. Soft crumb, thin crust."
      ]
    }
  },
  {
    id: "pan-ajo-sobao",
    category: "panes",
    name: { es: "Pan con Ajo", en: "Puerto Rican Garlic Bread" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "1 pan de agua o pan sobao",
        "½ taza de mantequilla suavizada",
        "6 dientes de ajo majados",
        "2 cucharadas de perejil picado",
        "¼ taza de queso parmesano (opcional)"
      ],
      en: [
        "1 loaf water bread or soft bread",
        "½ cup softened butter",
        "6 garlic cloves, mashed",
        "2 tablespoons chopped parsley",
        "¼ cup parmesan (optional)"
      ]
    },
    steps: {
      es: [
        "Mezcle la mantequilla, el ajo y el perejil.",
        "Corte el pan a lo largo y unte generosamente.",
        "Espolvoree queso si desea.",
        "Hornee a 400°F por 8-10 minutos hasta que esté tostado. Acompañante clásico de las cenas criollas."
      ],
      en: [
        "Mix butter, garlic, and parsley.",
        "Slice the bread lengthwise and spread generously.",
        "Sprinkle with cheese if desired.",
        "Bake at 400°F for 8-10 minutes until toasted. A classic side for Creole dinners."
      ]
    }
  },

  // ── EMPAREDADOS ──
  {
    id: "sandwich-bistec",
    category: "emparedados",
    name: { es: "Sándwich de Bistec", en: "Steak Sandwich" },
    time: "20 min",
    servings: 2,
    ingredients: {
      es: [
        "2 bistecs finos",
        "1 cebolla en aros",
        "1 pan sobao o de agua",
        "2 lascas de queso americano",
        "Lechuga, tomate y papitas de palito",
        "Mayonesa y ketchup",
        "Adobo al gusto"
      ],
      en: [
        "2 thin steaks",
        "1 onion, in rings",
        "1 soft or water bread loaf",
        "2 slices American cheese",
        "Lettuce, tomato, and shoestring potatoes",
        "Mayonnaise and ketchup",
        "Adobo to taste"
      ]
    },
    steps: {
      es: [
        "Sazone los bistecs con adobo y cocínelos en un sartén caliente 2 minutos por lado.",
        "Sofría la cebolla en el mismo sartén.",
        "Coloque el queso sobre los bistecs para derretir.",
        "Arme el sándwich con mayonesa, ketchup, bistec, cebolla, lechuga, tomate y papitas.",
        "Presione en la plancha y sirva."
      ],
      en: [
        "Season steaks with adobo and cook in a hot skillet 2 minutes per side.",
        "Sauté onion in the same skillet.",
        "Place cheese on the steaks to melt.",
        "Build the sandwich with mayo, ketchup, steak, onion, lettuce, tomato, and shoestring potatoes.",
        "Press on a griddle and serve."
      ]
    }
  },
  {
    id: "sandwich-atun-criollo",
    category: "emparedados",
    name: { es: "Sándwich de Atún Criollo", en: "Creole Tuna Sandwich" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de atún escurrido",
        "3 cucharadas de mayonesa",
        "1 cucharada de sofrito",
        "2 cucharadas de cebolla picada",
        "1 cucharada de aceitunas picadas",
        "Jugo de ½ limón",
        "Pan de molde o pan sobao"
      ],
      en: [
        "2 cans tuna, drained",
        "3 tablespoons mayonnaise",
        "1 tablespoon sofrito",
        "2 tablespoons diced onion",
        "1 tablespoon chopped olives",
        "Juice of ½ lime",
        "Sliced bread or soft bread"
      ]
    },
    steps: {
      es: [
        "Mezcle el atún con la mayonesa, el sofrito, la cebolla, las aceitunas y el limón.",
        "Unte sobre el pan.",
        "Añada lechuga si desea. Sirva frío o tostado en la plancha."
      ],
      en: [
        "Mix tuna with mayonnaise, sofrito, onion, olives, and lime.",
        "Spread on the bread.",
        "Add lettuce if desired. Serve cold or toasted on a griddle."
      ]
    }
  },

  // ── POSTRES ──
  {
    id: "flan-vainilla",
    category: "postres",
    name: { es: "Flan de Vainilla (Flan de Leche)", en: "Vanilla Flan" },
    time: "1 hr 15 min + frío",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1 lata de leche condensada",
        "1 lata de leche evaporada",
        "5 huevos",
        "1 cucharada de vainilla",
        "Pizca de sal"
      ],
      en: [
        "1 cup sugar (for caramel)",
        "1 can condensed milk",
        "1 can evaporated milk",
        "5 eggs",
        "1 tablespoon vanilla",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Derrita el azúcar en el molde a fuego medio hasta que esté ámbar. Cubra el fondo.",
        "Licúe las leches, los huevos, la vainilla y la sal. Cuele.",
        "Vierta sobre el caramelo y cubra con papel de aluminio.",
        "Hornee en baño de María a 350°F por 55-60 minutos.",
        "Enfríe y refrigere 6 horas. Voltee sobre un plato."
      ],
      en: [
        "Melt sugar in the mold over medium heat until amber. Coat the bottom.",
        "Blend milks, eggs, vanilla, and salt. Strain.",
        "Pour over the caramel and cover with foil.",
        "Bake in a water bath at 350°F for 55-60 minutes.",
        "Cool and refrigerate 6 hours. Invert onto a plate."
      ]
    }
  },
  {
    id: "arroz-con-coco",
    category: "postres",
    name: { es: "Arroz con Coco", en: "Coconut Rice Pudding" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de arroz grano corto (remojado 2 horas)",
        "2 latas de leche de coco",
        "2 tazas de agua",
        "1 taza de azúcar",
        "½ taza de pasas",
        "1 pedazo de jengibre",
        "4 clavos de olor y 2 rajas de canela",
        "½ cucharadita de sal"
      ],
      en: [
        "1 cup short grain rice (soaked 2 hours)",
        "2 cans coconut milk",
        "2 cups water",
        "1 cup sugar",
        "½ cup raisins",
        "1 piece of ginger",
        "4 cloves and 2 cinnamon sticks",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el jengibre, los clavos y la canela 10 minutos. Cuele.",
        "Añada la leche de coco, la sal y el arroz escurrido. Cocine a fuego medio revolviendo.",
        "Cuando el arroz esté casi blando, añada el azúcar y las pasas.",
        "Cocine hasta que espese pero quede cremoso, unos 30-40 minutos en total.",
        "Vierta en un platón, espolvoree canela y deje cuajar. Es más denso que el arroz con dulce."
      ],
      en: [
        "Boil water with ginger, cloves, and cinnamon 10 minutes. Strain.",
        "Add coconut milk, salt, and drained rice. Cook on medium, stirring.",
        "When the rice is nearly soft, add sugar and raisins.",
        "Cook until thick but creamy, about 30-40 minutes total.",
        "Pour into a platter, sprinkle cinnamon, and let set. Firmer than arroz con dulce."
      ]
    }
  },
  {
    id: "tembleque-cafe",
    category: "postres",
    name: { es: "Tembleque de Café", en: "Coffee Coconut Pudding" },
    time: "20 min + 4 hrs",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de leche de coco",
        "½ taza de café negro fuerte",
        "½ taza de maicena",
        "¾ taza de azúcar",
        "Pizca de sal",
        "Canela en polvo"
      ],
      en: [
        "2 cans coconut milk",
        "½ cup strong black coffee",
        "½ cup cornstarch",
        "¾ cup sugar",
        "Pinch of salt",
        "Ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Mezcle en frío la leche de coco, el café, la maicena, el azúcar y la sal hasta disolver.",
        "Cocine a fuego medio revolviendo sin parar hasta que espese y hierva 1 minuto.",
        "Vierta en moldes humedecidos.",
        "Refrigere 4 horas, desmolde y espolvoree canela."
      ],
      en: [
        "Whisk coconut milk, coffee, cornstarch, sugar, and salt cold until dissolved.",
        "Cook on medium, stirring constantly, until thick and boiling for 1 minute.",
        "Pour into moistened molds.",
        "Refrigerate 4 hours, unmold, and sprinkle with cinnamon."
      ]
    }
  },

  // ── VEGETALES Y VIANDAS ──
  {
    id: "pasteles-yuca",
    category: "vegetales",
    name: { es: "Pasteles de Yuca", en: "Yuca Pasteles" },
    time: "3 hrs",
    servings: 20,
    ingredients: {
      es: [
        "5 lbs de yuca pelada y rallada fina (exprimida)",
        "½ taza de aceite con achiote",
        "1 taza de caldo de cerdo",
        "Relleno: 3 lbs de cerdo en cubitos guisado con sofrito, sazón, salsa de tomate, aceitunas y garbanzos",
        "Hojas de plátano y papel de pastel",
        "Hilo de amarrar",
        "Sal al gusto"
      ],
      en: [
        "5 lbs peeled yuca, finely grated (squeezed dry)",
        "½ cup annatto oil",
        "1 cup pork broth",
        "Filling: 3 lbs diced pork stewed with sofrito, sazón, tomato sauce, olives, and chickpeas",
        "Banana leaves and parchment paper",
        "Kitchen string",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle la yuca rallada con el aceite de achiote, el caldo y sal hasta formar una masa suave.",
        "Coloque papel y una hoja de plátano untada con achiote. Añada 3 cucharadas de masa y extienda.",
        "Ponga 2 cucharadas de relleno en el centro.",
        "Doble para cerrar, envuelva en el papel y amarre en pares.",
        "Hierva en agua con sal 1 hora. Se pueden congelar crudos."
      ],
      en: [
        "Mix grated yuca with annatto oil, broth, and salt into a soft dough.",
        "Lay out parchment and a banana leaf brushed with annatto. Add 3 tablespoons of dough and spread.",
        "Place 2 tablespoons of filling in the center.",
        "Fold to close, wrap in the paper, and tie in pairs.",
        "Boil in salted water 1 hour. They can be frozen raw."
      ]
    }
  },

  // ── SALSAS ──
  {
    id: "sazon-casero",
    category: "salsas",
    name: { es: "Sazón Casero", en: "Homemade Sazón Seasoning" },
    time: "5 min",
    servings: 20,
    ingredients: {
      es: [
        "1 cucharada de achiote en polvo (annatto)",
        "1 cucharada de ajo en polvo",
        "1 cucharada de comino",
        "1 cucharada de cilantro en polvo (coriandro)",
        "1 cucharada de sal",
        "2 cucharaditas de orégano",
        "1 cucharadita de pimienta"
      ],
      en: [
        "1 tablespoon ground annatto",
        "1 tablespoon garlic powder",
        "1 tablespoon cumin",
        "1 tablespoon ground coriander",
        "1 tablespoon salt",
        "2 teaspoons oregano",
        "1 teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Mezcle todos los ingredientes.",
        "Guarde en un frasco hermético.",
        "Use 1½ cucharaditas en lugar de cada sobre de sazón comercial. Sin glutamato ni colorantes."
      ],
      en: [
        "Mix all ingredients.",
        "Store in an airtight jar.",
        "Use 1½ teaspoons in place of each commercial sazón packet. No MSG or artificial colors."
      ]
    }
  },

  // ── BEBIDAS ──
  {
    id: "jugo-tamarindo",
    category: "bebidas",
    name: { es: "Jugo de Tamarindo", en: "Tamarind Juice" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de vainas de tamarindo",
        "8 tazas de agua",
        "1 taza de azúcar",
        "Hielo"
      ],
      en: [
        "1 lb tamarind pods",
        "8 cups water",
        "1 cup sugar",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Pele los tamarindos y quite las hebras.",
        "Remoje la pulpa en 4 tazas de agua caliente por 45 minutos.",
        "Maje con las manos para separar las semillas. Cuele.",
        "Añada el resto del agua y el azúcar. Sirva bien frío con hielo."
      ],
      en: [
        "Peel the tamarinds and remove the strings.",
        "Soak the pulp in 4 cups hot water for 45 minutes.",
        "Squeeze with your hands to separate the seeds. Strain.",
        "Add remaining water and sugar. Serve very cold over ice."
      ]
    }
  },
  {
    id: "limonada-criolla",
    category: "bebidas",
    name: { es: "Limonada Criolla", en: "Puerto Rican Limeade" },
    time: "10 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de jugo de limón verde fresco",
        "¾ taza de azúcar",
        "6 tazas de agua fría",
        "Hojas de menta o yerbabuena",
        "Hielo"
      ],
      en: [
        "1 cup fresh lime juice",
        "¾ cup sugar",
        "6 cups cold water",
        "Mint leaves",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Disuelva el azúcar en 1 taza de agua.",
        "Añada el jugo de limón y el resto del agua.",
        "Machaque ligeramente las hojas de menta y añádalas.",
        "Sirva con abundante hielo."
      ],
      en: [
        "Dissolve sugar in 1 cup water.",
        "Add lime juice and remaining water.",
        "Lightly bruise the mint leaves and add.",
        "Serve over plenty of ice."
      ]
    }
  },

  // ── CÓCTELES ──
  {
    id: "pitorro-coco",
    category: "cocteles",
    name: { es: "Pitorro de Coco", en: "Coconut-Infused Pitorro" },
    time: "15 min + 1 mes",
    servings: 20,
    ingredients: {
      es: [
        "1 botella de ron blanco fuerte o pitorro (750 ml)",
        "1 taza de coco seco en trozos, tostado",
        "½ taza de pasas",
        "2 rajas de canela",
        "3 clavos de olor",
        "¼ taza de azúcar morena"
      ],
      en: [
        "1 bottle strong white rum or pitorro (750 ml)",
        "1 cup dried coconut chunks, toasted",
        "½ cup raisins",
        "2 cinnamon sticks",
        "3 whole cloves",
        "¼ cup brown sugar"
      ]
    },
    steps: {
      es: [
        "Coloque el coco, las pasas, la canela, los clavos y el azúcar en un frasco de cristal.",
        "Vierta el ron, tape bien y agite.",
        "Guarde en un lugar oscuro al menos 1 mes, agitando cada semana. Tradicionalmente se entierra.",
        "Cuele si desea y sirva en copitas en la época navideña. Consuma con moderación."
      ],
      en: [
        "Place coconut, raisins, cinnamon, cloves, and sugar in a glass jar.",
        "Pour in the rum, seal tightly, and shake.",
        "Store in a dark place at least 1 month, shaking weekly. Traditionally it is buried.",
        "Strain if desired and serve in small glasses during the holidays. Drink responsibly."
      ]
    }
  },
  {
    id: "cuba-libre",
    category: "cocteles",
    name: { es: "Cuba Libre", en: "Cuba Libre" },
    time: "2 min",
    servings: 1,
    ingredients: {
      es: [
        "2 onzas de ron blanco puertorriqueño",
        "4 onzas de refresco de cola",
        "½ limón",
        "Hielo"
      ],
      en: [
        "2 oz Puerto Rican white rum",
        "4 oz cola",
        "½ lime",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Exprima el limón en un vaso alto y deje caer la cáscara adentro.",
        "Llene con hielo y añada el ron.",
        "Complete con refresco de cola y revuelva suavemente."
      ],
      en: [
        "Squeeze the lime into a tall glass and drop the shell in.",
        "Fill with ice and add rum.",
        "Top with cola and stir gently."
      ]
    }
  },
  {
    id: "daiquiri-parcha",
    category: "cocteles",
    name: { es: "Daiquirí de Parcha", en: "Passion Fruit Daiquiri" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "4 onzas de ron blanco",
        "½ taza de pulpa de parcha",
        "2 onzas de almíbar simple",
        "1 onza de jugo de limón",
        "2 tazas de hielo"
      ],
      en: [
        "4 oz white rum",
        "½ cup passion fruit pulp",
        "2 oz simple syrup",
        "1 oz lime juice",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes hasta que esté frappé.",
        "Sirva en copas frías.",
        "Decore con una rueda de limón."
      ],
      en: [
        "Blend all ingredients until slushy.",
        "Serve in chilled glasses.",
        "Garnish with a lime wheel."
      ]
    }
  },

  // ── PANA (PANAPÉN) ──
  {
    id: "pana-hervida-bacalao",
    category: "vegetales",
    name: { es: "Pana Hervida con Bacalao Guisado", en: "Boiled Breadfruit with Stewed Codfish" },
    time: "1 hr + desalado",
    servings: 6,
    ingredients: {
      es: [
        "1 pana (panapén) verde pero hecha",
        "1 lb de bacalao desalado y desmenuzado",
        "1 cebolla en aros",
        "1 pimiento verde en tiras",
        "2 tomates picados",
        "3 dientes de ajo majados",
        "½ taza de aceite de oliva",
        "¼ taza de salsa de tomate",
        "Sal al gusto"
      ],
      en: [
        "1 mature green breadfruit",
        "1 lb desalted codfish, shredded",
        "1 onion, in rings",
        "1 green bell pepper, in strips",
        "2 tomatoes, chopped",
        "3 garlic cloves, mashed",
        "½ cup olive oil",
        "¼ cup tomato sauce",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quite el corazón y córtela en pedazos grandes.",
        "Hierva en agua con sal 25-30 minutos hasta que esté blanda. Escurra.",
        "Sofría la cebolla, el pimiento y el ajo en el aceite.",
        "Añada el bacalao, el tomate y la salsa de tomate. Cocine 10 minutos.",
        "Sirva la pana caliente bañada con el bacalao guisado y su aceite."
      ],
      en: [
        "Peel the breadfruit, remove the core, and cut into large pieces.",
        "Boil in salted water 25-30 minutes until tender. Drain.",
        "Sauté onion, pepper, and garlic in the oil.",
        "Add codfish, tomato, and tomato sauce. Cook 10 minutes.",
        "Serve the hot breadfruit topped with the stewed codfish and its oil."
      ]
    }
  },
  {
    id: "mofongo-pana",
    category: "vegetales",
    name: { es: "Mofongo de Pana", en: "Breadfruit Mofongo" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "1 pana verde pero hecha",
        "5 dientes de ajo",
        "3 cucharadas de aceite de oliva",
        "½ taza de chicharrón triturado",
        "¼ taza de caldo de pollo caliente",
        "Aceite para freír",
        "Sal al gusto"
      ],
      en: [
        "1 mature green breadfruit",
        "5 garlic cloves",
        "3 tablespoons olive oil",
        "½ cup crushed pork cracklings",
        "¼ cup hot chicken broth",
        "Oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quite el corazón y córtela en pedazos de 1 pulgada.",
        "Fría a fuego medio 8-10 minutos hasta que esté blanda y ligeramente dorada.",
        "Maje el ajo con sal y aceite de oliva en el pilón.",
        "Añada la pana caliente por partes y maje con el chicharrón y un poco de caldo.",
        "Forme bolas o moldee en una taza. Sirva con carne frita, camarones o caldo."
      ],
      en: [
        "Peel the breadfruit, remove the core, and cut into 1-inch pieces.",
        "Fry on medium 8-10 minutes until soft and lightly golden.",
        "Mash garlic with salt and olive oil in a mortar.",
        "Add the hot breadfruit in batches and mash with the cracklings and a little broth.",
        "Shape into balls or pack into a cup. Serve with fried pork, shrimp, or broth."
      ]
    }
  },
  {
    id: "majado-pana",
    category: "vegetales",
    name: { es: "Majado de Pana", en: "Mashed Breadfruit" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "1 pana madura (amarilla por dentro)",
        "3 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "Sal al gusto"
      ],
      en: [
        "1 ripe breadfruit (yellow inside)",
        "3 tablespoons butter",
        "½ cup hot milk",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quite el corazón y córtela en pedazos.",
        "Hierva en agua con sal 20-25 minutos hasta que esté muy blanda.",
        "Escurra y maje con la mantequilla.",
        "Añada la leche poco a poco hasta que quede cremosa. Sirva con carne guisada."
      ],
      en: [
        "Peel the breadfruit, remove the core, and cut into pieces.",
        "Boil in salted water 20-25 minutes until very soft.",
        "Drain and mash with the butter.",
        "Add milk gradually until creamy. Serve with beef stew."
      ]
    }
  },
  {
    id: "pana-escabeche",
    category: "vegetales",
    name: { es: "Pana en Escabeche", en: "Pickled Breadfruit" },
    time: "40 min + reposo",
    servings: 8,
    ingredients: {
      es: [
        "1 pana verde pero hecha",
        "2 cebollas en aros",
        "6 dientes de ajo en láminas",
        "1 taza de aceite de oliva",
        "½ taza de vinagre",
        "2 hojas de laurel",
        "10 granos de pimienta",
        "¼ taza de aceitunas",
        "Sal al gusto"
      ],
      en: [
        "1 mature green breadfruit",
        "2 onions, in rings",
        "6 garlic cloves, sliced",
        "1 cup olive oil",
        "½ cup vinegar",
        "2 bay leaves",
        "10 peppercorns",
        "¼ cup olives",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quite el corazón y córtela en pedazos. Hierva en agua con sal 20 minutos hasta que esté tierna pero firme.",
        "Cocine a fuego bajo el aceite con la cebolla, el ajo, el laurel y la pimienta 10 minutos.",
        "Añada el vinagre, las aceitunas y sal. Cocine 2 minutos más.",
        "Vierta el escabeche caliente sobre la pana en un envase de cristal.",
        "Deje reposar al menos 4 horas. Mejor al día siguiente, a temperatura ambiente."
      ],
      en: [
        "Peel the breadfruit, remove the core, and cut into pieces. Boil in salted water 20 minutes until tender but firm.",
        "Cook the oil with onion, garlic, bay leaves, and peppercorns on low for 10 minutes.",
        "Add vinegar, olives, and salt. Cook 2 more minutes.",
        "Pour the hot pickle over the breadfruit in a glass container.",
        "Let rest at least 4 hours. Best the next day, at room temperature."
      ]
    }
  },
  {
    id: "pastelon-pana",
    category: "vegetales",
    name: { es: "Pastelón de Pana", en: "Breadfruit Casserole" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 pana madura, hervida y majada",
        "3 cucharadas de mantequilla",
        "½ taza de leche",
        "1½ lbs de picadillo de carne guisado",
        "1½ tazas de queso mozzarella rallado",
        "2 huevos batidos",
        "Sal al gusto"
      ],
      en: [
        "1 ripe breadfruit, boiled and mashed",
        "3 tablespoons butter",
        "½ cup milk",
        "1½ lbs seasoned ground beef (picadillo)",
        "1½ cups shredded mozzarella",
        "2 beaten eggs",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Maje la pana con la mantequilla, la leche y sal hasta que quede suave.",
        "Engrase un molde. Extienda la mitad del majado en el fondo.",
        "Cubra con el picadillo y la mitad del queso.",
        "Extienda el resto de la pana encima, vierta los huevos y cubra con el queso restante.",
        "Hornee a 350°F por 30-35 minutos hasta dorar. Repose 10 minutos antes de cortar."
      ],
      en: [
        "Mash the breadfruit with butter, milk, and salt until smooth.",
        "Grease a baking dish. Spread half the mash on the bottom.",
        "Top with the picadillo and half the cheese.",
        "Spread the remaining breadfruit on top, pour over the eggs, and cover with the rest of the cheese.",
        "Bake at 350°F for 30-35 minutes until golden. Rest 10 minutes before cutting."
      ]
    }
  },
  {
    id: "ensalada-pana",
    category: "ensaladas",
    name: { es: "Ensalada de Pana", en: "Breadfruit Salad" },
    time: "40 min",
    servings: 8,
    ingredients: {
      es: [
        "1 pana verde pero hecha",
        "3 huevos duros picados",
        "½ cebolla picada",
        "½ pimiento rojo picado",
        "¾ taza de mayonesa",
        "1 cucharada de mostaza",
        "1 cucharada de vinagre",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 mature green breadfruit",
        "3 hard-boiled eggs, chopped",
        "½ onion, diced",
        "½ red bell pepper, diced",
        "¾ cup mayonnaise",
        "1 tablespoon mustard",
        "1 tablespoon vinegar",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quite el corazón y córtela en cubos de 1 pulgada.",
        "Hierva en agua con sal 15-20 minutos hasta que esté tierna pero firme. Escurra y enfríe.",
        "Mezcle la mayonesa, la mostaza, el vinagre, sal y pimienta.",
        "Combine con la pana, los huevos, la cebolla y el pimiento.",
        "Refrigere 1 hora. Se sirve como la ensalada de papa, con pollo o lechón."
      ],
      en: [
        "Peel the breadfruit, remove the core, and cut into 1-inch cubes.",
        "Boil in salted water 15-20 minutes until tender but firm. Drain and cool.",
        "Mix mayonnaise, mustard, vinegar, salt, and pepper.",
        "Combine with the breadfruit, eggs, onion, and pepper.",
        "Refrigerate 1 hour. Serve like potato salad, with chicken or roast pork."
      ]
    }
  },
  {
    id: "crema-pana",
    category: "sopas",
    name: { es: "Crema de Pana", en: "Cream of Breadfruit Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "½ pana verde pero hecha, en cubos",
        "1 cebolla picada",
        "3 dientes de ajo",
        "2 cucharadas de mantequilla",
        "5 tazas de caldo de pollo",
        "½ taza de leche de coco o crema",
        "Sal y pimienta al gusto",
        "Cilantro o recao picado"
      ],
      en: [
        "½ mature green breadfruit, cubed",
        "1 onion, chopped",
        "3 garlic cloves",
        "2 tablespoons butter",
        "5 cups chicken broth",
        "½ cup coconut milk or cream",
        "Salt and pepper to taste",
        "Chopped cilantro or culantro"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla y el ajo en la mantequilla.",
        "Añada la pana y el caldo. Hierva 25 minutos hasta que la pana esté blanda.",
        "Licúe hasta obtener una crema suave.",
        "Regrese a la olla, añada la leche de coco, sal y pimienta. Caliente sin hervir.",
        "Sirva con cilantro picado y un chorrito de aceite de oliva."
      ],
      en: [
        "Sauté onion and garlic in the butter.",
        "Add breadfruit and broth. Boil 25 minutes until the breadfruit is soft.",
        "Blend until smooth.",
        "Return to the pot, add coconut milk, salt, and pepper. Heat without boiling.",
        "Serve with chopped cilantro and a drizzle of olive oil."
      ]
    }
  },
  {
    id: "bunuelos-pana",
    category: "entremeses",
    name: { es: "Buñuelos de Pana", en: "Breadfruit Fritters" },
    time: "40 min",
    servings: 20,
    ingredients: {
      es: [
        "2 tazas de pana hervida y majada",
        "1 huevo",
        "2 cucharadas de harina",
        "2 dientes de ajo majados",
        "½ taza de queso rallado",
        "1 cucharadita de sal",
        "Aceite para freír"
      ],
      en: [
        "2 cups boiled, mashed breadfruit",
        "1 egg",
        "2 tablespoons flour",
        "2 garlic cloves, mashed",
        "½ cup grated cheese",
        "1 teaspoon salt",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle la pana majada con el huevo, la harina, el ajo, el queso y la sal.",
        "Forme bolitas del tamaño de una nuez.",
        "Fría en aceite a 350°F hasta que estén doradas por todos lados.",
        "Escurra y sirva con mayo-ketchup o mojo de ajo."
      ],
      en: [
        "Mix the mashed breadfruit with egg, flour, garlic, cheese, and salt.",
        "Form walnut-sized balls.",
        "Fry in 350°F oil until golden on all sides.",
        "Drain and serve with mayo-ketchup or garlic mojo."
      ]
    }
  },
  {
    id: "budin-pana",
    category: "postres",
    name: { es: "Budín de Pana", en: "Breadfruit Pudding" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de pana madura hervida y majada",
        "1 lata de leche de coco",
        "1 lata de leche evaporada",
        "1 taza de azúcar",
        "4 huevos",
        "¼ taza de mantequilla derretida",
        "1 cucharadita de canela",
        "½ cucharadita de jengibre",
        "1 cucharadita de vainilla",
        "½ taza de pasas (opcional)"
      ],
      en: [
        "3 cups ripe breadfruit, boiled and mashed",
        "1 can coconut milk",
        "1 can evaporated milk",
        "1 cup sugar",
        "4 eggs",
        "¼ cup melted butter",
        "1 teaspoon cinnamon",
        "½ teaspoon ginger",
        "1 teaspoon vanilla",
        "½ cup raisins (optional)"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase un molde de 9x13.",
        "Licúe la pana con las leches, el azúcar, los huevos, la mantequilla, las especias y la vainilla.",
        "Añada las pasas y vierta en el molde.",
        "Hornee 60-70 minutos hasta que al insertar un palillo salga limpio.",
        "Enfríe y corte en cuadros. Se come frío o a temperatura ambiente."
      ],
      en: [
        "Preheat oven to 350°F and grease a 9x13 pan.",
        "Blend the breadfruit with both milks, sugar, eggs, butter, spices, and vanilla.",
        "Stir in raisins and pour into the pan.",
        "Bake 60-70 minutes until a toothpick comes out clean.",
        "Cool and cut into squares. Serve cold or at room temperature."
      ]
    }
  },

  // ── POSTRES (más) ──
  {
    id: "arroz-con-leche",
    category: "postres",
    name: { es: "Arroz con Leche", en: "Rice Pudding with Milk" },
    time: "50 min",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de arroz grano corto",
        "2 tazas de agua",
        "4 tazas de leche",
        "1 lata de leche condensada",
        "2 rajas de canela",
        "Cáscara de 1 limón",
        "Pizca de sal",
        "Canela en polvo"
      ],
      en: [
        "1 cup short grain rice",
        "2 cups water",
        "4 cups milk",
        "1 can condensed milk",
        "2 cinnamon sticks",
        "Peel of 1 lime",
        "Pinch of salt",
        "Ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Hierva el arroz en el agua con la canela, la cáscara de limón y la sal hasta que se absorba el agua.",
        "Añada la leche y cocine a fuego medio-bajo 25 minutos, revolviendo a menudo.",
        "Agregue la leche condensada y cocine 10 minutos más hasta que esté cremoso.",
        "Retire la canela y la cáscara. Sirva tibio o frío con canela en polvo."
      ],
      en: [
        "Boil rice in the water with cinnamon, lime peel, and salt until the water is absorbed.",
        "Add milk and cook on medium-low 25 minutes, stirring often.",
        "Stir in condensed milk and cook 10 more minutes until creamy.",
        "Remove cinnamon and peel. Serve warm or cold with ground cinnamon."
      ]
    }
  },
  {
    id: "dulce-ajonjoli",
    category: "postres",
    name: { es: "Dulce de Ajonjolí", en: "Sesame Brittle" },
    time: "25 min",
    servings: 16,
    ingredients: {
      es: [
        "1½ tazas de ajonjolí (semillas de sésamo)",
        "1 taza de azúcar",
        "½ taza de melao o miel",
        "1 cucharada de mantequilla",
        "Pizca de sal"
      ],
      en: [
        "1½ cups sesame seeds",
        "1 cup sugar",
        "½ cup molasses or honey",
        "1 tablespoon butter",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Tueste el ajonjolí en un sartén seco a fuego bajo hasta dorar. Reserve.",
        "Derrita el azúcar con el melao y la mantequilla hasta que tome color ámbar.",
        "Añada el ajonjolí y la sal y mezcle rápido.",
        "Vierta sobre una superficie engrasada y estire con un rodillo engrasado.",
        "Corte en barritas mientras esté tibio. Deje endurecer."
      ],
      en: [
        "Toast sesame seeds in a dry skillet on low until golden. Set aside.",
        "Melt sugar with molasses and butter until amber.",
        "Add sesame seeds and salt and mix quickly.",
        "Pour onto a greased surface and roll flat with a greased rolling pin.",
        "Cut into bars while warm. Let harden."
      ]
    }
  },
  {
    id: "bolitas-tamarindo",
    category: "postres",
    name: { es: "Bolitas de Tamarindo", en: "Tamarind Candy Balls" },
    time: "30 min",
    servings: 20,
    ingredients: {
      es: [
        "1 taza de pulpa de tamarindo sin semillas",
        "2 tazas de azúcar (más para cubrir)",
        "Pizca de sal"
      ],
      en: [
        "1 cup seedless tamarind pulp",
        "2 cups sugar (plus more for coating)",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Pele los tamarindos, quite las hebras y separe la pulpa de las semillas.",
        "Mezcle la pulpa con el azúcar y la sal, amasando con las manos hasta que se forme una pasta.",
        "Forme bolitas del tamaño de una canica.",
        "Páselas por azúcar y déjelas secar al aire unas horas."
      ],
      en: [
        "Peel the tamarinds, remove the strings, and separate the pulp from the seeds.",
        "Mix the pulp with sugar and salt, kneading by hand until a paste forms.",
        "Shape into marble-sized balls.",
        "Roll in sugar and let air-dry a few hours."
      ]
    }
  },
  {
    id: "platanos-almibar",
    category: "postres",
    name: { es: "Plátanos Maduros en Almíbar", en: "Sweet Plantains in Syrup" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "3 plátanos bien maduros, pelados y en rodajas gruesas",
        "1 taza de azúcar morena",
        "1 taza de agua",
        "½ taza de vino tinto dulce o ron",
        "2 rajas de canela",
        "4 clavos de olor",
        "2 cucharadas de mantequilla"
      ],
      en: [
        "3 very ripe plantains, peeled and thickly sliced",
        "1 cup brown sugar",
        "1 cup water",
        "½ cup sweet red wine or rum",
        "2 cinnamon sticks",
        "4 whole cloves",
        "2 tablespoons butter"
      ]
    },
    steps: {
      es: [
        "Dore los plátanos en la mantequilla por ambos lados.",
        "Añada el azúcar, el agua, el vino, la canela y los clavos.",
        "Tape y cocine a fuego bajo 25 minutos hasta que el almíbar espese.",
        "Sirva tibio, solo o con mantecado de vainilla."
      ],
      en: [
        "Brown the plantains in the butter on both sides.",
        "Add sugar, water, wine, cinnamon, and cloves.",
        "Cover and cook on low 25 minutes until the syrup thickens.",
        "Serve warm, plain or with vanilla ice cream."
      ]
    }
  },
  {
    id: "pudin-guineo",
    category: "postres",
    name: { es: "Pudín de Guineo", en: "Banana Pudding" },
    time: "1 hr 10 min",
    servings: 10,
    ingredients: {
      es: [
        "6 guineos bien maduros",
        "4 tazas de pan del día anterior en pedazos",
        "1 lata de leche evaporada",
        "1 taza de leche",
        "¾ taza de azúcar",
        "3 huevos",
        "¼ taza de mantequilla derretida",
        "1 cucharadita de canela",
        "1 cucharadita de vainilla"
      ],
      en: [
        "6 very ripe bananas",
        "4 cups day-old bread, torn",
        "1 can evaporated milk",
        "1 cup milk",
        "¾ cup sugar",
        "3 eggs",
        "¼ cup melted butter",
        "1 teaspoon cinnamon",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en las leches 15 minutos.",
        "Maje los guineos y mézclelos con el pan, el azúcar, los huevos, la mantequilla, la canela y la vainilla.",
        "Vierta en un molde engrasado.",
        "Hornee a 350°F por 50-55 minutos hasta dorar y cuajar.",
        "Sirva tibio o frío."
      ],
      en: [
        "Soak the bread in both milks for 15 minutes.",
        "Mash the bananas and mix with the bread, sugar, eggs, butter, cinnamon, and vanilla.",
        "Pour into a greased dish.",
        "Bake at 350°F for 50-55 minutes until golden and set.",
        "Serve warm or cold."
      ]
    }
  },
  {
    id: "flan-guayaba",
    category: "postres",
    name: { es: "Flan de Guayaba", en: "Guava Flan" },
    time: "1 hr 15 min + frío",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "4 oz de pasta de guayaba",
        "1 paquete de queso crema (8 oz)",
        "1 lata de leche condensada",
        "1 lata de leche evaporada",
        "5 huevos",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup sugar (for caramel)",
        "4 oz guava paste",
        "1 package cream cheese (8 oz)",
        "1 can condensed milk",
        "1 can evaporated milk",
        "5 eggs",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Prepare el caramelo en el molde.",
        "Derrita la pasta de guayaba en el microondas con 2 cucharadas de agua.",
        "Licúe la guayaba con el queso crema, las leches, los huevos y la vainilla.",
        "Vierta sobre el caramelo y hornee en baño de María a 350°F por 1 hora.",
        "Refrigere toda la noche y voltee para servir."
      ],
      en: [
        "Make the caramel in the mold.",
        "Melt the guava paste in the microwave with 2 tablespoons water.",
        "Blend guava with cream cheese, both milks, eggs, and vanilla.",
        "Pour over the caramel and bake in a water bath at 350°F for 1 hour.",
        "Refrigerate overnight and invert to serve."
      ]
    }
  },
  {
    id: "tocino-del-cielo",
    category: "postres",
    name: { es: "Tocino del Cielo", en: "Egg Yolk Custard (Tocino del Cielo)" },
    time: "1 hr + frío",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de azúcar",
        "1 taza de agua",
        "12 yemas de huevo",
        "1 huevo entero",
        "Cáscara de 1 limón",
        "½ taza de azúcar para el caramelo"
      ],
      en: [
        "1½ cups sugar",
        "1 cup water",
        "12 egg yolks",
        "1 whole egg",
        "Peel of 1 lime",
        "½ cup sugar for caramel"
      ]
    },
    steps: {
      es: [
        "Prepare un caramelo con ½ taza de azúcar en un molde pequeño.",
        "Hierva 1½ tazas de azúcar con el agua y la cáscara de limón hasta punto de hilo fino. Enfríe un poco y retire la cáscara.",
        "Bata suavemente las yemas con el huevo sin hacer espuma.",
        "Vierta el almíbar en hilo sobre las yemas, mezclando. Cuele.",
        "Vierta sobre el caramelo, tape y cueza en baño de María a 325°F por 40-45 minutos.",
        "Enfríe, refrigere y voltee. Es muy dulce: sirva porciones pequeñas."
      ],
      en: [
        "Make a caramel with ½ cup sugar in a small mold.",
        "Boil 1½ cups sugar with the water and lime peel to thin-thread stage. Cool slightly and remove the peel.",
        "Gently beat the yolks with the whole egg without making foam.",
        "Pour the syrup in a thin stream over the yolks, mixing. Strain.",
        "Pour over the caramel, cover, and bake in a water bath at 325°F for 40-45 minutes.",
        "Cool, refrigerate, and invert. It is very sweet: serve small portions."
      ]
    }
  },
  {
    id: "dulce-mango",
    category: "postres",
    name: { es: "Dulce de Mangó", en: "Mango Preserves" },
    time: "50 min",
    servings: 10,
    ingredients: {
      es: [
        "6 mangós pintones (casi maduros), pelados y en tiras",
        "2 tazas de azúcar",
        "2 tazas de agua",
        "2 rajas de canela",
        "4 clavos de olor",
        "Jugo de 1 limón"
      ],
      en: [
        "6 nearly ripe mangoes, peeled and cut in strips",
        "2 cups sugar",
        "2 cups water",
        "2 cinnamon sticks",
        "4 whole cloves",
        "Juice of 1 lime"
      ]
    },
    steps: {
      es: [
        "Prepare un almíbar con el azúcar, el agua, la canela y los clavos. Hierva 5 minutos.",
        "Añada el mangó y cocine a fuego bajo 30-35 minutos hasta que esté brilloso.",
        "Agregue el jugo de limón al final.",
        "Enfríe y sirva con queso del país."
      ],
      en: [
        "Make a syrup with sugar, water, cinnamon, and cloves. Boil 5 minutes.",
        "Add the mango and cook on low 30-35 minutes until glossy.",
        "Stir in lime juice at the end.",
        "Cool and serve with local white cheese."
      ]
    }
  },

  // ── PANES (más) ──
  {
    id: "casabe",
    category: "panes",
    name: { es: "Casabe (Pan de Yuca)", en: "Casabe (Cassava Flatbread)" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "3 lbs de yuca pelada",
        "1 cucharadita de sal (opcional)"
      ],
      en: [
        "3 lbs peeled yuca",
        "1 teaspoon salt (optional)"
      ]
    },
    steps: {
      es: [
        "Ralle la yuca finamente.",
        "Exprímala muy bien en un paño hasta sacar todo el líquido. Deje secar la masa 30 minutos y desmorónela.",
        "Añada la sal. Caliente un burén o sartén de hierro a fuego medio.",
        "Extienda una capa fina de yuca y aplánela con una espátula. No se revuelve: se une con el calor.",
        "Cocine 5-6 minutos por lado hasta que esté seca y firme. Es el pan de origen taíno."
      ],
      en: [
        "Grate the yuca finely.",
        "Squeeze very well in a cloth until all the liquid is out. Let the dough dry 30 minutes and crumble it.",
        "Add salt. Heat a burén (griddle) or cast-iron skillet on medium.",
        "Spread a thin layer of yuca and press flat with a spatula. Don't stir: the heat binds it.",
        "Cook 5-6 minutes per side until dry and firm. It is the bread of Taíno origin."
      ]
    }
  },
  {
    id: "arepas-coco",
    category: "panes",
    name: { es: "Arepas de Coco", en: "Coconut Arepas (Loíza Style)" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 taza de leche de coco",
        "¼ taza de azúcar",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de sal",
        "2 cucharadas de mantequilla derretida",
        "Aceite para freír"
      ],
      en: [
        "3 cups flour",
        "1 cup coconut milk",
        "¼ cup sugar",
        "1 teaspoon baking powder",
        "1 teaspoon salt",
        "2 tablespoons melted butter",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina, el azúcar, el polvo de hornear y la sal.",
        "Añada la leche de coco y la mantequilla. Amase hasta tener una masa suave.",
        "Tape y deje reposar 1 hora.",
        "Estire a ¼ de pulgada y corte círculos de 4 pulgadas.",
        "Fría en aceite a 350°F hasta que inflen y doren. Ábralas y rellénelas con bacalao o jueyes, como en Piñones."
      ],
      en: [
        "Mix flour, sugar, baking powder, and salt.",
        "Add coconut milk and butter. Knead into a soft dough.",
        "Cover and rest 1 hour.",
        "Roll to ¼ inch and cut 4-inch rounds.",
        "Fry in 350°F oil until puffed and golden. Split and fill with codfish or crab, as in Piñones."
      ]
    }
  },
  {
    id: "pan-coco",
    category: "panes",
    name: { es: "Pan de Coco", en: "Coconut Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche de coco tibia",
        "⅓ taza de azúcar",
        "1 huevo",
        "¼ taza de mantequilla",
        "1 taza de coco rallado",
        "1 cucharadita de sal"
      ],
      en: [
        "4 cups bread flour",
        "1 packet yeast",
        "1 cup warm coconut milk",
        "⅓ cup sugar",
        "1 egg",
        "¼ cup butter",
        "1 cup shredded coconut",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura con 1 cucharada de azúcar en la leche de coco tibia. Espere 10 minutos.",
        "Mezcle la harina, el resto del azúcar, la sal y el coco. Añada la levadura, el huevo y la mantequilla.",
        "Amase 10 minutos y deje crecer 1 hora.",
        "Forme 2 panes y colóquelos en moldes engrasados. Deje crecer 45 minutos.",
        "Hornee a 350°F por 30 minutos hasta dorar."
      ],
      en: [
        "Dissolve yeast with 1 tablespoon sugar in the warm coconut milk. Wait 10 minutes.",
        "Mix flour, remaining sugar, salt, and coconut. Add yeast, egg, and butter.",
        "Knead 10 minutes and let rise 1 hour.",
        "Shape 2 loaves and place in greased pans. Let rise 45 minutes.",
        "Bake at 350°F for 30 minutes until golden."
      ]
    }
  },
  {
    id: "pan-batata",
    category: "panes",
    name: { es: "Pan de Batata", en: "Sweet Potato Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de batata cocida y majada",
        "4½ tazas de harina de pan",
        "1 sobre de levadura",
        "¾ taza de leche tibia",
        "¼ taza de azúcar",
        "1 huevo",
        "¼ taza de mantequilla",
        "1 cucharadita de sal"
      ],
      en: [
        "1 cup cooked, mashed sweet potato",
        "4½ cups bread flour",
        "1 packet yeast",
        "¾ cup warm milk",
        "¼ cup sugar",
        "1 egg",
        "¼ cup butter",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "Mezcle la batata, el huevo, la mantequilla, el resto del azúcar y la levadura.",
        "Añada la harina y la sal. Amase 10 minutos hasta que esté suave.",
        "Deje crecer 1 hora, forme panecillos o 2 panes y deje crecer 45 minutos más.",
        "Hornee a 350°F: 20 minutos los panecillos, 30 los panes."
      ],
      en: [
        "Dissolve yeast in the warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Mix the sweet potato, egg, butter, remaining sugar, and yeast.",
        "Add flour and salt. Knead 10 minutes until smooth.",
        "Let rise 1 hour, shape rolls or 2 loaves, and let rise 45 more minutes.",
        "Bake at 350°F: 20 minutes for rolls, 30 for loaves."
      ]
    }
  },
  {
    id: "pan-guineo",
    category: "panes",
    name: { es: "Pan de Guineo", en: "Banana Bread" },
    time: "1 hr 15 min",
    servings: 10,
    ingredients: {
      es: [
        "3 guineos bien maduros, majados",
        "2 tazas de harina",
        "¾ taza de azúcar morena",
        "½ taza de mantequilla derretida",
        "2 huevos",
        "1 cucharadita de bicarbonato",
        "1 cucharadita de canela",
        "1 cucharadita de vainilla",
        "½ cucharadita de sal",
        "½ taza de nueces o pasas (opcional)"
      ],
      en: [
        "3 very ripe bananas, mashed",
        "2 cups flour",
        "¾ cup brown sugar",
        "½ cup melted butter",
        "2 eggs",
        "1 teaspoon baking soda",
        "1 teaspoon cinnamon",
        "1 teaspoon vanilla",
        "½ teaspoon salt",
        "½ cup nuts or raisins (optional)"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase un molde de pan.",
        "Mezcle los guineos, la mantequilla, el azúcar, los huevos y la vainilla.",
        "Añada la harina, el bicarbonato, la canela y la sal sin batir demasiado.",
        "Incorpore las nueces o pasas y vierta en el molde.",
        "Hornee 55-60 minutos hasta que un palillo salga limpio."
      ],
      en: [
        "Preheat oven to 350°F and grease a loaf pan.",
        "Mix bananas, butter, sugar, eggs, and vanilla.",
        "Add flour, baking soda, cinnamon, and salt without overmixing.",
        "Fold in nuts or raisins and pour into the pan.",
        "Bake 55-60 minutes until a toothpick comes out clean."
      ]
    }
  },
  {
    id: "panecillos-leche",
    category: "panes",
    name: { es: "Panecillos de Leche", en: "Soft Milk Rolls" },
    time: "2 hrs 30 min",
    servings: 16,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "1¼ tazas de leche tibia",
        "¼ taza de azúcar",
        "1 huevo",
        "¼ taza de mantequilla",
        "1 cucharadita de sal",
        "1 huevo batido para barnizar"
      ],
      en: [
        "4 cups bread flour",
        "1 packet yeast",
        "1¼ cups warm milk",
        "¼ cup sugar",
        "1 egg",
        "¼ cup butter",
        "1 teaspoon salt",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con el azúcar. Espere 10 minutos.",
        "Añada el huevo, la mantequilla, la harina y la sal. Amase 10 minutos.",
        "Deje crecer 1 hora.",
        "Divida en 16 bolitas y colóquelas juntas en un molde engrasado. Deje crecer 40 minutos.",
        "Barnice con huevo y hornee a 375°F por 18-20 minutos."
      ],
      en: [
        "Dissolve yeast in the warm milk with the sugar. Wait 10 minutes.",
        "Add egg, butter, flour, and salt. Knead 10 minutes.",
        "Let rise 1 hour.",
        "Divide into 16 balls and place them close together in a greased pan. Let rise 40 minutes.",
        "Brush with egg and bake at 375°F for 18-20 minutes."
      ]
    }
  },
  {
    id: "pan-calabaza",
    category: "panes",
    name: { es: "Pan de Calabaza", en: "Calabaza Bread" },
    time: "1 hr 15 min",
    servings: 10,
    ingredients: {
      es: [
        "1½ tazas de calabaza cocida y majada",
        "2 tazas de harina",
        "1 taza de azúcar",
        "½ taza de aceite",
        "2 huevos",
        "1 cucharadita de bicarbonato",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "½ cucharadita de sal"
      ],
      en: [
        "1½ cups cooked, mashed calabaza",
        "2 cups flour",
        "1 cup sugar",
        "½ cup oil",
        "2 eggs",
        "1 teaspoon baking soda",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase un molde de pan.",
        "Bata la calabaza con el azúcar, el aceite y los huevos.",
        "Añada la harina, el bicarbonato, las especias y la sal.",
        "Vierta en el molde y hornee 55-60 minutos.",
        "Enfríe antes de cortar."
      ],
      en: [
        "Preheat oven to 350°F and grease a loaf pan.",
        "Beat the calabaza with sugar, oil, and eggs.",
        "Add flour, baking soda, spices, and salt.",
        "Pour into the pan and bake 55-60 minutes.",
        "Cool before slicing."
      ]
    }
  },
  {
    id: "pan-huevo",
    category: "panes",
    name: { es: "Pan de Huevo (Pan Dulce)", en: "Sweet Egg Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "5 tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche tibia",
        "½ taza de azúcar",
        "3 huevos",
        "½ taza de mantequilla",
        "1 cucharadita de sal",
        "1 cucharadita de vainilla",
        "Azúcar para espolvorear"
      ],
      en: [
        "5 cups bread flour",
        "1 packet yeast",
        "1 cup warm milk",
        "½ cup sugar",
        "3 eggs",
        "½ cup butter",
        "1 teaspoon salt",
        "1 teaspoon vanilla",
        "Sugar for sprinkling"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche con 1 cucharada de azúcar. Espere 10 minutos.",
        "Bata 2 huevos con el resto del azúcar, la mantequilla derretida y la vainilla. Añada la levadura.",
        "Incorpore la harina y la sal. Amase 10 minutos y deje crecer 1½ horas.",
        "Forme 2 trenzas y colóquelas en una bandeja. Deje crecer 45 minutos.",
        "Barnice con el huevo restante, espolvoree azúcar y hornee a 350°F por 25-30 minutos."
      ],
      en: [
        "Dissolve yeast in the milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Beat 2 eggs with the remaining sugar, melted butter, and vanilla. Add the yeast.",
        "Mix in flour and salt. Knead 10 minutes and let rise 1½ hours.",
        "Shape 2 braids and place on a baking sheet. Let rise 45 minutes.",
        "Brush with the remaining egg, sprinkle sugar, and bake at 350°F for 25-30 minutes."
      ]
    }
  },

  // ── CARNES (más) ──
  {
    id: "bistec-empanado",
    category: "carnes",
    name: { es: "Bistec Empanado", en: "Breaded Steak" },
    time: "30 min + marinado",
    servings: 4,
    ingredients: {
      es: [
        "4 bistecs finos (palomilla)",
        "3 dientes de ajo majados",
        "Jugo de 1 limón",
        "1 cucharadita de adobo",
        "2 huevos batidos",
        "1½ tazas de galleta molida o pan rallado",
        "Aceite para freír"
      ],
      en: [
        "4 thin steaks (top sirloin)",
        "3 garlic cloves, mashed",
        "Juice of 1 lime",
        "1 teaspoon adobo seasoning",
        "2 beaten eggs",
        "1½ cups cracker meal or breadcrumbs",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe los bistecs con ajo, limón y adobo. Marine 1 hora.",
        "Pase cada bistec por huevo y luego por galleta molida, presionando.",
        "Fría en ½ pulgada de aceite caliente 2-3 minutos por lado hasta dorar.",
        "Escurra y sirva con arroz, habichuelas y ensalada."
      ],
      en: [
        "Season steaks with garlic, lime, and adobo. Marinate 1 hour.",
        "Dip each steak in egg, then in cracker meal, pressing.",
        "Fry in ½ inch hot oil 2-3 minutes per side until golden.",
        "Drain and serve with rice, beans, and salad."
      ]
    }
  },
  {
    id: "carne-cerdo-guisada",
    category: "carnes",
    name: { es: "Carne de Cerdo Guisada", en: "Stewed Pork" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2½ lbs de masitas de cerdo en cubos",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "½ taza de aceitunas",
        "2 papas en cubos",
        "1 hoja de laurel",
        "Adobo: ajo, orégano, sal y vinagre"
      ],
      en: [
        "2½ lbs pork shoulder, cubed",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "½ cup olives",
        "2 potatoes, cubed",
        "1 bay leaf",
        "Adobo: garlic, oregano, salt, and vinegar"
      ]
    },
    steps: {
      es: [
        "Adobe el cerdo y marine al menos 1 hora.",
        "Dore la carne en un caldero con un poco de aceite.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas y el laurel.",
        "Cubra con agua, tape y cocine a fuego bajo 50 minutos.",
        "Agregue las papas y cocine 20 minutos más. Sirva con arroz blanco."
      ],
      en: [
        "Season the pork with adobo and marinate at least 1 hour.",
        "Brown the meat in a caldero with a little oil.",
        "Add sofrito, sazón, tomato sauce, olives, and bay leaf.",
        "Cover with water, cover the pot, and cook on low 50 minutes.",
        "Add potatoes and cook 20 more minutes. Serve with white rice."
      ]
    }
  },
  {
    id: "morcilla",
    category: "carnes",
    name: { es: "Morcilla Boricua", en: "Puerto Rican Blood Sausage (Morcilla)" },
    time: "2 hrs",
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de sangre de cerdo fresca",
        "2 tazas de arroz cocido",
        "1 taza de recao y cilantro picados",
        "6 ajíes dulces picados",
        "1 cebolla picada",
        "4 dientes de ajo majados",
        "½ taza de manteca o grasa de cerdo",
        "1 cucharadita de comino, orégano y clavo molido",
        "Tripas de cerdo limpias",
        "Sal al gusto"
      ],
      en: [
        "4 cups fresh pork blood",
        "2 cups cooked rice",
        "1 cup chopped culantro and cilantro",
        "6 sweet peppers, chopped",
        "1 onion, chopped",
        "4 garlic cloves, mashed",
        "½ cup lard or pork fat",
        "1 teaspoon each cumin, oregano, and ground cloves",
        "Cleaned pork casings",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el ajo, los ajíes, el recao y el cilantro en la manteca.",
        "Mezcle con el arroz, la sangre, las especias y la sal.",
        "Rellene las tripas sin apretar demasiado y amarre en tramos de 6 pulgadas.",
        "Hierva a fuego bajo (sin que borbotee fuerte) 30-40 minutos. Pinche con un alfiler: si sale sangre, cocine más.",
        "Escurra. Sirva así o dorada en el sartén, típica de los cuchifritos y la Navidad."
      ],
      en: [
        "Sauté onion, garlic, sweet peppers, culantro, and cilantro in the lard.",
        "Mix with the rice, blood, spices, and salt.",
        "Fill the casings loosely and tie into 6-inch links.",
        "Simmer gently (not at a rolling boil) 30-40 minutes. Prick with a pin: if blood comes out, cook longer.",
        "Drain. Serve as is or browned in a skillet — a cuchifrito and Christmas classic."
      ]
    }
  },
  {
    id: "cuajito",
    category: "carnes",
    name: { es: "Cuajito", en: "Stewed Pork Stomach (Cuajito)" },
    time: "3 hrs",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de cuajo (estómago de cerdo) limpio",
        "2 limones",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "1 lata de salsa de tomate (8 oz)",
        "¼ taza de aceitunas",
        "1 hoja de laurel",
        "Sal al gusto"
      ],
      en: [
        "2 lbs cleaned pork stomach (cuajo)",
        "2 limes",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "1 can tomato sauce (8 oz)",
        "¼ cup olives",
        "1 bay leaf",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave el cuajo varias veces con agua y limón.",
        "Hierva en agua con sal y laurel 2 horas hasta que esté blando. Escurra y corte en tiras.",
        "Sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada el cuajo, las aceitunas y ½ taza de agua. Cocine 20 minutos.",
        "Sirva con guineítos verdes o arroz blanco."
      ],
      en: [
        "Wash the stomach several times with water and lime.",
        "Boil in salted water with bay leaf 2 hours until tender. Drain and cut into strips.",
        "Sauté sofrito with sazón and tomato sauce.",
        "Add the stomach, olives, and ½ cup water. Cook 20 minutes.",
        "Serve with boiled green bananas or white rice."
      ]
    }
  },
  {
    id: "longaniza-cebolla",
    category: "carnes",
    name: { es: "Longaniza Frita con Cebolla", en: "Fried Longaniza with Onions" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ lbs de longaniza",
        "2 cebollas en aros",
        "1 pimiento verde en tiras",
        "1 cucharada de vinagre",
        "1 cucharada de aceite"
      ],
      en: [
        "1½ lbs longaniza sausage",
        "2 onions, in rings",
        "1 green bell pepper, in strips",
        "1 tablespoon vinegar",
        "1 tablespoon oil"
      ]
    },
    steps: {
      es: [
        "Pinche la longaniza y hiérvala en ½ taza de agua en un sartén tapado 8 minutos.",
        "Destape, deje que se evapore el agua y dore en el aceite volteando.",
        "Retire y corte en pedazos.",
        "Sofría la cebolla y el pimiento en la grasa, añada el vinagre y regrese la longaniza.",
        "Sirva con tostones o arroz y habichuelas."
      ],
      en: [
        "Prick the sausage and simmer in ½ cup water in a covered skillet 8 minutes.",
        "Uncover, let the water evaporate, and brown in the oil, turning.",
        "Remove and cut into pieces.",
        "Sauté onion and pepper in the drippings, add vinegar, and return the sausage.",
        "Serve with tostones or rice and beans."
      ]
    }
  },
  {
    id: "conejo-guisado",
    category: "carnes",
    name: { es: "Conejo Guisado", en: "Stewed Rabbit" },
    time: "1 hr 45 min + marinado",
    servings: 4,
    ingredients: {
      es: [
        "1 conejo (3 lbs) en presas",
        "4 dientes de ajo majados",
        "½ taza de vino tinto",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas y alcaparras",
        "2 papas en cubos",
        "1 hoja de laurel",
        "Sal, pimienta y orégano"
      ],
      en: [
        "1 rabbit (3 lbs), cut in pieces",
        "4 garlic cloves, mashed",
        "½ cup red wine",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup tomato sauce",
        "¼ cup olives and capers",
        "2 potatoes, cubed",
        "1 bay leaf",
        "Salt, pepper, and oregano"
      ]
    },
    steps: {
      es: [
        "Marine el conejo con ajo, vino, sal, pimienta y orégano toda la noche.",
        "Escurra (reserve el adobo) y dore las presas en aceite.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas, las alcaparras, el laurel y el adobo reservado.",
        "Agregue 1 taza de agua, tape y cocine a fuego bajo 1 hora.",
        "Añada las papas y cocine 20 minutos más."
      ],
      en: [
        "Marinate the rabbit with garlic, wine, salt, pepper, and oregano overnight.",
        "Drain (reserve the marinade) and brown the pieces in oil.",
        "Add sofrito, sazón, tomato sauce, olives, capers, bay leaf, and the reserved marinade.",
        "Add 1 cup water, cover, and cook on low 1 hour.",
        "Add potatoes and cook 20 more minutes."
      ]
    }
  },
  {
    id: "chuletas-ahumadas-pina",
    category: "carnes",
    name: { es: "Chuletas Ahumadas con Piña", en: "Smoked Pork Chops with Pineapple" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "4 chuletas ahumadas",
        "1 lata de piña en ruedas (reserve el jugo)",
        "2 cucharadas de azúcar morena",
        "1 cucharada de mantequilla",
        "1 cucharadita de mostaza",
        "Pizca de clavo molido"
      ],
      en: [
        "4 smoked pork chops",
        "1 can pineapple rings (reserve juice)",
        "2 tablespoons brown sugar",
        "1 tablespoon butter",
        "1 teaspoon mustard",
        "Pinch of ground cloves"
      ]
    },
    steps: {
      es: [
        "Dore las chuletas en la mantequilla 3 minutos por lado. Retire.",
        "En el mismo sartén, dore las ruedas de piña.",
        "Añada ½ taza del jugo de piña, el azúcar, la mostaza y el clavo. Cocine hasta que espese un poco.",
        "Regrese las chuletas y bañe con la salsa 2 minutos.",
        "Sirva cada chuleta con una rueda de piña encima."
      ],
      en: [
        "Brown the chops in the butter 3 minutes per side. Remove.",
        "In the same skillet, brown the pineapple rings.",
        "Add ½ cup pineapple juice, brown sugar, mustard, and cloves. Cook until slightly thick.",
        "Return the chops and baste with the sauce 2 minutes.",
        "Serve each chop topped with a pineapple ring."
      ]
    }
  },
  {
    id: "carne-frita-res",
    category: "carnes",
    name: { es: "Masitas de Res Fritas con Mojo", en: "Fried Beef Chunks with Mojo" },
    time: "35 min + marinado",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de carne de res (punta de cadera) en cubos",
        "6 dientes de ajo majados",
        "½ taza de jugo de naranja agria",
        "1 cucharadita de orégano",
        "1 cucharadita de comino",
        "1 cebolla en aros",
        "Aceite para freír",
        "Sal al gusto"
      ],
      en: [
        "2 lbs beef (sirloin tip), cubed",
        "6 garlic cloves, mashed",
        "½ cup sour orange juice",
        "1 teaspoon oregano",
        "1 teaspoon cumin",
        "1 onion, in rings",
        "Oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Marine la carne con ajo, naranja agria, orégano, comino y sal 2 horas.",
        "Escurra bien (reserve el líquido) y seque con papel toalla.",
        "Fría en aceite caliente por tandas hasta dorar y quedar crujiente por fuera.",
        "Sofría la cebolla, añada el líquido reservado y hierva 1 minuto.",
        "Bañe la carne con la cebolla. Sirva con tostones o yuca."
      ],
      en: [
        "Marinate the beef with garlic, sour orange, oregano, cumin, and salt 2 hours.",
        "Drain well (reserve the liquid) and pat dry.",
        "Fry in hot oil in batches until browned and crisp outside.",
        "Sauté the onion, add the reserved liquid, and boil 1 minute.",
        "Top the beef with the onion. Serve with tostones or yuca."
      ]
    }
  },

  // ── PESCADOS (más) ──
  {
    id: "mero-salsa-criolla",
    category: "pescados",
    name: { es: "Mero en Salsa Criolla", en: "Grouper in Creole Sauce" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de mero",
        "3 cucharadas de sofrito",
        "1 lata de salsa de tomate (8 oz)",
        "½ pimiento rojo en tiras",
        "½ cebolla en tiras",
        "¼ taza de aceitunas",
        "¼ taza de vino blanco",
        "2 cucharadas de aceite de oliva",
        "Jugo de 1 limón",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 grouper fillets",
        "3 tablespoons sofrito",
        "1 can tomato sauce (8 oz)",
        "½ red bell pepper, in strips",
        "½ onion, in strips",
        "¼ cup olives",
        "¼ cup white wine",
        "2 tablespoons olive oil",
        "Juice of 1 lime",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el mero con sal, pimienta y limón.",
        "Sofría la cebolla y el pimiento en el aceite. Añada el sofrito.",
        "Agregue la salsa de tomate, el vino y las aceitunas. Cocine 8 minutos.",
        "Acomode el pescado en la salsa, tape y cocine a fuego bajo 10-12 minutos.",
        "Sirva con arroz blanco o tostones."
      ],
      en: [
        "Season the grouper with salt, pepper, and lime.",
        "Sauté onion and pepper in the oil. Add sofrito.",
        "Add tomato sauce, wine, and olives. Cook 8 minutes.",
        "Nestle the fish in the sauce, cover, and cook on low 10-12 minutes.",
        "Serve with white rice or tostones."
      ]
    }
  },
  {
    id: "pescado-empanado",
    category: "pescados",
    name: { es: "Filete de Pescado Empanado", en: "Breaded Fish Fillet" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de pescado blanco (mero, dorado o tilapia)",
        "Jugo de 1 limón",
        "1 cucharadita de adobo",
        "½ taza de harina",
        "2 huevos batidos",
        "1½ tazas de galleta molida o pan rallado",
        "Aceite para freír"
      ],
      en: [
        "4 white fish fillets (grouper, mahi-mahi, or tilapia)",
        "Juice of 1 lime",
        "1 teaspoon adobo seasoning",
        "½ cup flour",
        "2 beaten eggs",
        "1½ cups cracker meal or breadcrumbs",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Sazone el pescado con limón y adobo.",
        "Pase cada filete por harina, huevo y galleta molida.",
        "Fría en ½ pulgada de aceite caliente 3 minutos por lado hasta dorar.",
        "Escurra y sirva con limón, mayo-ketchup y tostones."
      ],
      en: [
        "Season the fish with lime and adobo.",
        "Dredge each fillet in flour, egg, and cracker meal.",
        "Fry in ½ inch hot oil 3 minutes per side until golden.",
        "Drain and serve with lime, mayo-ketchup, and tostones."
      ]
    }
  },
  {
    id: "camarones-coco",
    category: "pescados",
    name: { es: "Camarones al Coco", en: "Coconut Shrimp" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ lbs de camarones grandes, pelados con cola",
        "½ taza de harina",
        "2 huevos batidos",
        "1 taza de coco rallado",
        "½ taza de pan rallado",
        "1 cucharadita de adobo",
        "Aceite para freír",
        "Salsa de mango o de parcha para servir"
      ],
      en: [
        "1½ lbs large shrimp, peeled with tails",
        "½ cup flour",
        "2 beaten eggs",
        "1 cup shredded coconut",
        "½ cup breadcrumbs",
        "1 teaspoon adobo seasoning",
        "Oil for frying",
        "Mango or passion fruit sauce for serving"
      ]
    },
    steps: {
      es: [
        "Sazone los camarones con adobo.",
        "Mezcle el coco con el pan rallado.",
        "Pase cada camarón por harina, huevo y la mezcla de coco, presionando.",
        "Fría en aceite a 350°F 2-3 minutos hasta dorar.",
        "Escurra y sirva con salsa de mango."
      ],
      en: [
        "Season the shrimp with adobo.",
        "Mix coconut with breadcrumbs.",
        "Dredge each shrimp in flour, egg, and the coconut mix, pressing.",
        "Fry in 350°F oil 2-3 minutes until golden.",
        "Drain and serve with mango sauce."
      ]
    }
  },
  {
    id: "pescado-salsa-coco",
    category: "pescados",
    name: { es: "Pescado en Salsa de Coco", en: "Fish in Coconut Sauce" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de filete de pescado (chillo o mero) en pedazos",
        "1 lata de leche de coco",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de salsa de tomate",
        "Jugo de 1 limón",
        "Recao o cilantro picado",
        "Sal al gusto"
      ],
      en: [
        "2 lbs fish fillet (snapper or grouper), in pieces",
        "1 can coconut milk",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons tomato sauce",
        "Juice of 1 lime",
        "Chopped culantro or cilantro",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el pescado con sal y limón.",
        "Sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada la leche de coco y hierva a fuego bajo 5 minutos.",
        "Agregue el pescado, tape y cocine 10 minutos sin revolver para que no se desbarate.",
        "Espolvoree recao. Sirva con arroz blanco. Típico de Loíza."
      ],
      en: [
        "Season the fish with salt and lime.",
        "Sauté sofrito with sazón and tomato sauce.",
        "Add coconut milk and simmer 5 minutes.",
        "Add the fish, cover, and cook 10 minutes without stirring so it stays whole.",
        "Sprinkle with culantro. Serve with white rice. Typical of Loíza."
      ]
    }
  },
  {
    id: "jueyes-hervidos",
    category: "pescados",
    name: { es: "Jueyes Hervidos", en: "Boiled Land Crabs" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "12 jueyes (cangrejos de tierra) vivos y purgados",
        "1 cabeza de ajo",
        "2 hojas de laurel",
        "2 limones",
        "¼ taza de sal",
        "Mojo de ajo para servir"
      ],
      en: [
        "12 live, purged land crabs",
        "1 head garlic",
        "2 bay leaves",
        "2 limes",
        "¼ cup salt",
        "Garlic mojo for serving"
      ]
    },
    steps: {
      es: [
        "Lave bien los jueyes con un cepillo.",
        "Hierva abundante agua con la sal, el ajo partido, el laurel y los limones.",
        "Añada los jueyes y cocine 15-20 minutos hasta que estén rojos.",
        "Escurra y deje refrescar un poco.",
        "Sirva con mojo de ajo, tostones y limón. Se comen partiendo las muelas."
      ],
      en: [
        "Scrub the crabs well with a brush.",
        "Boil plenty of water with the salt, halved garlic, bay leaves, and limes.",
        "Add the crabs and cook 15-20 minutes until red.",
        "Drain and let cool slightly.",
        "Serve with garlic mojo, tostones, and lime. Crack the claws to eat."
      ]
    }
  },
  {
    id: "pulpo-ajillo",
    category: "pescados",
    name: { es: "Pulpo al Ajillo", en: "Garlic Octopus" },
    time: "1 hr 15 min",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de pulpo limpio",
        "8 dientes de ajo en láminas",
        "½ taza de aceite de oliva",
        "1 cucharadita de pimentón",
        "Jugo de 1 limón",
        "Perejil picado",
        "Sal gruesa al gusto"
      ],
      en: [
        "2 lbs cleaned octopus",
        "8 garlic cloves, sliced",
        "½ cup olive oil",
        "1 teaspoon paprika",
        "Juice of 1 lime",
        "Chopped parsley",
        "Coarse salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo en agua con sal 45-60 minutos hasta que esté tierno. Escurra y corte en ruedas.",
        "Caliente el aceite a fuego bajo y dore ligeramente el ajo.",
        "Añada el pulpo y el pimentón y saltee 3 minutos.",
        "Rocíe con limón, espolvoree perejil y sal gruesa.",
        "Sirva caliente con pan o tostones."
      ],
      en: [
        "Boil the octopus in salted water 45-60 minutes until tender. Drain and slice.",
        "Heat the oil on low and lightly brown the garlic.",
        "Add octopus and paprika and sauté 3 minutes.",
        "Drizzle with lime and sprinkle parsley and coarse salt.",
        "Serve hot with bread or tostones."
      ]
    }
  },
  {
    id: "carrucho-criollo",
    category: "pescados",
    name: { es: "Carrucho a la Criolla", en: "Creole Stewed Conch" },
    time: "1 hr 30 min",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de carrucho limpio",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "1 lata de salsa de tomate (8 oz)",
        "½ pimiento verde en tiras",
        "¼ taza de aceitunas",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 lbs cleaned conch",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "1 can tomato sauce (8 oz)",
        "½ green bell pepper, in strips",
        "¼ cup olives",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Ablande el carrucho con un mazo y hiérvalo en agua con sal 45-60 minutos. Corte en pedazos.",
        "Sofría el pimiento, el sofrito y el sazón en el aceite.",
        "Añada la salsa de tomate, las aceitunas y ½ taza de agua.",
        "Agregue el carrucho y cocine a fuego bajo 20 minutos.",
        "Sirva con arroz blanco o mofongo."
      ],
      en: [
        "Tenderize the conch with a mallet and boil in salted water 45-60 minutes. Cut into pieces.",
        "Sauté pepper, sofrito, and sazón in the oil.",
        "Add tomato sauce, olives, and ½ cup water.",
        "Add the conch and cook on low 20 minutes.",
        "Serve with white rice or mofongo."
      ]
    }
  },
  {
    id: "pinchos-camarones",
    category: "pescados",
    name: { es: "Pinchos de Camarones", en: "Shrimp Skewers" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ lbs de camarones grandes, pelados",
        "4 dientes de ajo majados",
        "3 cucharadas de aceite de oliva",
        "Jugo de 1 limón",
        "1 cucharadita de adobo",
        "½ piña en cubos",
        "1 pimiento rojo en cuadros",
        "Palitos de madera remojados"
      ],
      en: [
        "1½ lbs large shrimp, peeled",
        "4 garlic cloves, mashed",
        "3 tablespoons olive oil",
        "Juice of 1 lime",
        "1 teaspoon adobo seasoning",
        "½ pineapple, cubed",
        "1 red bell pepper, in squares",
        "Soaked wooden skewers"
      ]
    },
    steps: {
      es: [
        "Marine los camarones con ajo, aceite, limón y adobo 20 minutos.",
        "Ensarte alternando camarón, piña y pimiento.",
        "Ase a la parrilla o plancha 2-3 minutos por lado.",
        "Sirva con mojo de ajo o salsa de mango."
      ],
      en: [
        "Marinate the shrimp with garlic, oil, lime, and adobo 20 minutes.",
        "Thread alternating shrimp, pineapple, and pepper.",
        "Grill or griddle 2-3 minutes per side.",
        "Serve with garlic mojo or mango sauce."
      ]
    }
  },

  // ── PASTAS ──
  {
    id: "espaguetis-salchichas",
    category: "pastas",
    name: { es: "Espaguetis con Salchichas", en: "Spaghetti with Vienna Sausages" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de espaguetis",
        "2 latas de salchichas (Vienna) en ruedas",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 lata de salsa de tomate (15 oz)",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de aceite",
        "Queso parmesano o cheddar rallado",
        "Sal al gusto"
      ],
      en: [
        "1 lb spaghetti",
        "2 cans Vienna sausages, sliced",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 can tomato sauce (15 oz)",
        "¼ cup stuffed olives",
        "2 tablespoons oil",
        "Grated parmesan or cheddar",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis en agua con sal hasta que estén al dente. Escurra.",
        "Dore las salchichas en el aceite.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas y ½ taza de agua. Cocine 10 minutos.",
        "Mezcle la pasta con la salsa y cocine 2 minutos más.",
        "Sirva con queso rallado. Un clásico rápido de los días de semana."
      ],
      en: [
        "Boil the spaghetti in salted water until al dente. Drain.",
        "Brown the sausages in the oil.",
        "Add sofrito, sazón, tomato sauce, olives, and ½ cup water. Cook 10 minutes.",
        "Toss the pasta with the sauce and cook 2 more minutes.",
        "Serve with grated cheese. A quick weeknight classic."
      ]
    }
  },
  {
    id: "espaguetis-carne-molida",
    category: "pastas",
    name: { es: "Espaguetis con Carne Molida a la Criolla", en: "Creole Spaghetti with Ground Beef" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de espaguetis",
        "1½ lbs de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 lata de salsa de tomate (15 oz)",
        "2 cucharadas de pasta de tomate",
        "¼ taza de aceitunas rellenas picadas",
        "1 hoja de laurel",
        "1 cucharadita de orégano",
        "Queso parmesano rallado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb spaghetti",
        "1½ lbs ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 can tomato sauce (15 oz)",
        "2 tablespoons tomato paste",
        "¼ cup stuffed olives, chopped",
        "1 bay leaf",
        "1 teaspoon oregano",
        "Grated parmesan",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Dore la carne molida desmenuzándola. Escurra el exceso de grasa.",
        "Añada el sofrito, el sazón, la pasta y la salsa de tomate, las aceitunas, el laurel y el orégano.",
        "Agregue 1 taza de agua y cocine a fuego bajo 25 minutos.",
        "Mientras tanto, hierva los espaguetis al dente.",
        "Sirva la pasta con la salsa por encima y queso parmesano."
      ],
      en: [
        "Brown the ground beef, breaking it up. Drain excess fat.",
        "Add sofrito, sazón, tomato paste and sauce, olives, bay leaf, and oregano.",
        "Add 1 cup water and simmer 25 minutes.",
        "Meanwhile, boil the spaghetti al dente.",
        "Serve the pasta topped with the sauce and parmesan."
      ]
    }
  },
  {
    id: "espaguetis-atun",
    category: "pastas",
    name: { es: "Espaguetis con Atún", en: "Spaghetti with Tuna" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "¾ lb de espaguetis",
        "2 latas de atún en aceite, escurrido",
        "2 cucharadas de sofrito",
        "1 lata de salsa de tomate (8 oz)",
        "¼ taza de aceitunas",
        "1 cucharada de alcaparras",
        "3 dientes de ajo majados",
        "3 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "¾ lb spaghetti",
        "2 cans tuna in oil, drained",
        "2 tablespoons sofrito",
        "1 can tomato sauce (8 oz)",
        "¼ cup olives",
        "1 tablespoon capers",
        "3 garlic cloves, mashed",
        "3 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis al dente y reserve ½ taza del agua.",
        "Sofría el ajo y el sofrito en el aceite de oliva.",
        "Añada la salsa de tomate, las aceitunas y las alcaparras. Cocine 5 minutos.",
        "Agregue el atún desmenuzado y caliente 2 minutos.",
        "Mezcle con la pasta, añadiendo agua de la cocción si hace falta. Plato típico de Cuaresma."
      ],
      en: [
        "Boil the spaghetti al dente and reserve ½ cup of the water.",
        "Sauté garlic and sofrito in the olive oil.",
        "Add tomato sauce, olives, and capers. Cook 5 minutes.",
        "Add the flaked tuna and heat 2 minutes.",
        "Toss with the pasta, adding cooking water if needed. A typical Lent dish."
      ]
    }
  },
  {
    id: "espaguetis-camarones-ajillo",
    category: "pastas",
    name: { es: "Espaguetis con Camarones al Ajillo", en: "Garlic Shrimp Spaghetti" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "¾ lb de espaguetis",
        "1 lb de camarones pelados",
        "8 dientes de ajo en láminas",
        "⅓ taza de aceite de oliva",
        "2 cucharadas de mantequilla",
        "¼ taza de vino blanco",
        "Jugo de 1 limón",
        "Perejil o cilantro picado",
        "Pizca de hojuelas de ají (opcional)",
        "Sal y pimienta al gusto"
      ],
      en: [
        "¾ lb spaghetti",
        "1 lb peeled shrimp",
        "8 garlic cloves, sliced",
        "⅓ cup olive oil",
        "2 tablespoons butter",
        "¼ cup white wine",
        "Juice of 1 lime",
        "Chopped parsley or cilantro",
        "Pinch of red pepper flakes (optional)",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis al dente y reserve ½ taza del agua.",
        "Sofría el ajo en el aceite y la mantequilla a fuego bajo sin quemarlo.",
        "Añada los camarones y cocine 2 minutos por lado.",
        "Agregue el vino y el limón y deje reducir 1 minuto.",
        "Mezcle con la pasta, un poco del agua reservada y el perejil."
      ],
      en: [
        "Boil the spaghetti al dente and reserve ½ cup of the water.",
        "Sauté the garlic in the oil and butter on low without burning.",
        "Add the shrimp and cook 2 minutes per side.",
        "Add the wine and lime and let reduce 1 minute.",
        "Toss with the pasta, a little reserved water, and the parsley."
      ]
    }
  },
  {
    id: "lasana-amarillos",
    category: "pastas",
    name: { es: "Lasaña de Amarillos", en: "Sweet Plantain Lasagna" },
    time: "1 hr 30 min",
    servings: 10,
    ingredients: {
      es: [
        "9 láminas de lasaña cocidas",
        "4 plátanos maduros en lonjas largas, fritos",
        "1½ lbs de carne molida guisada con sofrito y sazón",
        "2 tazas de salsa de tomate",
        "1 envase de queso ricotta (15 oz)",
        "1 huevo",
        "3 tazas de queso mozzarella rallado",
        "½ taza de queso parmesano"
      ],
      en: [
        "9 cooked lasagna sheets",
        "4 ripe plantains in long slices, fried",
        "1½ lbs ground beef stewed with sofrito and sazón",
        "2 cups tomato sauce",
        "1 container ricotta (15 oz)",
        "1 egg",
        "3 cups shredded mozzarella",
        "½ cup parmesan"
      ]
    },
    steps: {
      es: [
        "Mezcle la carne guisada con la salsa de tomate. Mezcle la ricotta con el huevo.",
        "En un molde de 9x13, extienda un poco de salsa y coloque 3 láminas.",
        "Haga capas de ricotta, amarillos, carne y mozzarella. Repita dos veces.",
        "Termine con salsa, mozzarella y parmesano.",
        "Tape con papel de aluminio y hornee a 375°F 40 minutos. Destape y hornee 15 más.",
        "Repose 15 minutos antes de cortar."
      ],
      en: [
        "Mix the stewed beef with the tomato sauce. Mix ricotta with the egg.",
        "In a 9x13 dish, spread a little sauce and lay 3 sheets.",
        "Layer ricotta, plantains, beef, and mozzarella. Repeat twice.",
        "Finish with sauce, mozzarella, and parmesan.",
        "Cover with foil and bake at 375°F 40 minutes. Uncover and bake 15 more.",
        "Rest 15 minutes before cutting."
      ]
    }
  },
  {
    id: "canelones-carne",
    category: "pastas",
    name: { es: "Canelones Rellenos de Carne", en: "Beef-Stuffed Cannelloni" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "12 canelones (o manicotti)",
        "1½ lbs de carne molida",
        "3 cucharadas de sofrito",
        "1 sobre de sazón",
        "¼ taza de jamón picado",
        "2 tazas de salsa de tomate",
        "Bechamel: 3 cucharadas de mantequilla, 3 cucharadas de harina, 2 tazas de leche, pizca de nuez moscada",
        "1 taza de queso rallado"
      ],
      en: [
        "12 cannelloni (or manicotti) shells",
        "1½ lbs ground beef",
        "3 tablespoons sofrito",
        "1 packet sazón",
        "¼ cup diced ham",
        "2 cups tomato sauce",
        "Béchamel: 3 tablespoons butter, 3 tablespoons flour, 2 cups milk, pinch of nutmeg",
        "1 cup grated cheese"
      ]
    },
    steps: {
      es: [
        "Hierva los canelones 2 minutos menos de lo indicado. Escurra.",
        "Guise la carne con el sofrito, el sazón y el jamón hasta que seque.",
        "Prepare la bechamel: derrita la mantequilla, añada la harina, luego la leche batiendo hasta espesar. Sazone con nuez moscada y sal.",
        "Rellene los canelones con la carne. Colóquelos sobre la salsa de tomate en un molde.",
        "Cubra con la bechamel y el queso. Hornee a 375°F por 25-30 minutos hasta dorar."
      ],
      en: [
        "Boil the cannelloni 2 minutes less than the package says. Drain.",
        "Stew the beef with sofrito, sazón, and ham until dry.",
        "Make the béchamel: melt butter, add flour, then milk, whisking until thick. Season with nutmeg and salt.",
        "Fill the cannelloni with the beef. Arrange over the tomato sauce in a baking dish.",
        "Cover with béchamel and cheese. Bake at 375°F for 25-30 minutes until golden."
      ]
    }
  },
  {
    id: "fideos-chorizo",
    category: "pastas",
    name: { es: "Fideos Guisados con Chorizo", en: "Stewed Noodles with Chorizo" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "½ lb de fideos finos (cabello de ángel) partidos",
        "½ lb de chorizo en ruedas",
        "2 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "3 tazas de caldo de pollo",
        "1 papa en cubitos",
        "2 cucharadas de aceite",
        "Sal al gusto"
      ],
      en: [
        "½ lb thin noodles (angel hair), broken",
        "½ lb chorizo, sliced",
        "2 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "3 cups chicken broth",
        "1 potato, diced",
        "2 tablespoons oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Dore los fideos en el aceite, revolviendo, hasta que tomen color. Retire.",
        "Dore el chorizo y añada el sofrito, el sazón y la salsa de tomate.",
        "Agregue el caldo y la papa y hierva 10 minutos.",
        "Añada los fideos y cocine a fuego medio 8 minutos hasta que absorban casi todo el caldo.",
        "Deben quedar jugosos. Sirva enseguida."
      ],
      en: [
        "Toast the noodles in the oil, stirring, until golden. Remove.",
        "Brown the chorizo and add sofrito, sazón, and tomato sauce.",
        "Add the broth and potato and boil 10 minutes.",
        "Add the noodles and cook on medium 8 minutes until they absorb most of the broth.",
        "They should stay moist. Serve right away."
      ]
    }
  },
  {
    id: "macarrones-pollo",
    category: "pastas",
    name: { es: "Macarrones con Pollo", en: "Macaroni with Chicken" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de macarrones (coditos o penne)",
        "1½ lbs de pechuga de pollo en cubos",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 lata de salsa de tomate (15 oz)",
        "¼ taza de aceitunas",
        "½ taza de petit pois",
        "1 taza de queso cheddar rallado",
        "Adobo al gusto"
      ],
      en: [
        "1 lb macaroni (elbows or penne)",
        "1½ lbs chicken breast, cubed",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 can tomato sauce (15 oz)",
        "¼ cup olives",
        "½ cup petit pois",
        "1 cup shredded cheddar",
        "Adobo to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con adobo y dórelo en un caldero con aceite.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas y 1 taza de agua. Cocine 15 minutos.",
        "Hierva los macarrones al dente y escurra.",
        "Mezcle la pasta con el pollo guisado y los petit pois.",
        "Cubra con queso, tape 3 minutos para que se derrita y sirva."
      ],
      en: [
        "Season the chicken with adobo and brown it in a caldero with oil.",
        "Add sofrito, sazón, tomato sauce, olives, and 1 cup water. Cook 15 minutes.",
        "Boil the macaroni al dente and drain.",
        "Toss the pasta with the stewed chicken and petit pois.",
        "Top with cheese, cover 3 minutes to melt, and serve."
      ]
    }
  },
  {
    id: "espaguetis-bacalao",
    category: "pastas",
    name: { es: "Espaguetis con Bacalao", en: "Spaghetti with Salt Cod" },
    time: "40 min + desalado",
    servings: 4,
    ingredients: {
      es: [
        "¾ lb de espaguetis",
        "½ lb de bacalao desalado y desmenuzado",
        "1 cebolla en tiras",
        "½ pimiento rojo en tiras",
        "4 dientes de ajo",
        "1 lata de salsa de tomate (8 oz)",
        "¼ taza de aceitunas",
        "⅓ taza de aceite de oliva"
      ],
      en: [
        "¾ lb spaghetti",
        "½ lb desalted salt cod, shredded",
        "1 onion, in strips",
        "½ red bell pepper, in strips",
        "4 garlic cloves",
        "1 can tomato sauce (8 oz)",
        "¼ cup olives",
        "⅓ cup olive oil"
      ]
    },
    steps: {
      es: [
        "Sofría la cebolla, el pimiento y el ajo en el aceite de oliva.",
        "Añada el bacalao y cocine 5 minutos.",
        "Agregue la salsa de tomate, las aceitunas y ½ taza de agua. Cocine 10 minutos.",
        "Hierva los espaguetis al dente, escurra y mezcle con la salsa.",
        "Plato de Cuaresma y Semana Santa."
      ],
      en: [
        "Sauté onion, pepper, and garlic in the olive oil.",
        "Add the salt cod and cook 5 minutes.",
        "Add tomato sauce, olives, and ½ cup water. Cook 10 minutes.",
        "Boil the spaghetti al dente, drain, and toss with the sauce.",
        "A Lent and Holy Week dish."
      ]
    }
  },
  {
    id: "coditos-jamon-horno",
    category: "pastas",
    name: { es: "Coditos con Jamón al Horno", en: "Baked Elbow Macaroni with Ham" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de coditos",
        "1½ tazas de jamón en cubitos",
        "1 lata de leche evaporada",
        "2 huevos",
        "2 tazas de queso cheddar rallado",
        "½ taza de queso de bola (Edam) rallado",
        "2 cucharadas de mantequilla",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb elbow macaroni",
        "1½ cups diced ham",
        "1 can evaporated milk",
        "2 eggs",
        "2 cups shredded cheddar",
        "½ cup grated Edam cheese",
        "2 tablespoons butter",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los coditos al dente y escurra. Mezcle con la mantequilla.",
        "Bata la leche evaporada con los huevos, sal y pimienta.",
        "Mezcle los coditos con el jamón, 1½ tazas de cheddar y la mezcla de leche.",
        "Vierta en un molde engrasado y cubra con el resto del cheddar y el queso de bola.",
        "Hornee a 350°F por 25 minutos hasta que cuaje y dore. Típico de las fiestas."
      ],
      en: [
        "Boil the elbows al dente and drain. Toss with the butter.",
        "Beat the evaporated milk with the eggs, salt, and pepper.",
        "Mix the elbows with the ham, 1½ cups cheddar, and the milk mixture.",
        "Pour into a greased dish and top with the remaining cheddar and Edam.",
        "Bake at 350°F for 25 minutes until set and golden. A party favorite."
      ]
    }
  },

  // ── MOLLEJAS DE POLLO ──
  {
    id: "guineitos-mollejas-escabeche",
    category: "vegetales",
    name: { es: "Guineítos con Mollejas en Escabeche", en: "Green Bananas and Chicken Gizzards in Escabeche" },
    time: "2 hrs + reposo",
    servings: 10,
    ingredients: {
      es: [
        "2 lbs de mollejas de pollo",
        "12 guineos verdes",
        "1 cucharada de sal (para el agua)",
        "1½ tazas de aceite de oliva",
        "1 taza de vinagre",
        "2 cebollas grandes, en aros",
        "8 dientes de ajo, en láminas",
        "1 pimiento rojo, en tiras",
        "12 granos de pimienta",
        "4 hojas de laurel",
        "½ taza de aceitunas rellenas",
        "2 cucharaditas de sal"
      ],
      en: [
        "2 lbs chicken gizzards",
        "12 green bananas",
        "1 tablespoon salt (for the water)",
        "1½ cups olive oil",
        "1 cup vinegar",
        "2 large onions, in rings",
        "8 garlic cloves, sliced",
        "1 red bell pepper, in strips",
        "12 peppercorns",
        "4 bay leaves",
        "½ cup stuffed olives",
        "2 teaspoons salt"
      ]
    },
    steps: {
      es: [
        "Limpie bien las mollejas: quite la piel amarilla y el exceso de grasa. Lávelas con agua y limón.",
        "Hiérvalas en agua con sal y 1 hoja de laurel por 1 hora, hasta que estén blandas. Escurra y corte en pedazos.",
        "Corte las puntas de los guineos, hágales un corte en la cáscara y hiérvalos en agua con sal 15-20 minutos. Pele y corte en ruedas.",
        "Escabeche: cocine a fuego bajo el aceite con la cebolla, el ajo, el pimiento, la pimienta y el resto del laurel por 10 minutos.",
        "Añada el vinagre, las aceitunas y la sal. Hierva 1 minuto.",
        "En un envase de cristal, haga capas de guineos y mollejas y vierta el escabeche caliente encima.",
        "Tape y refrigere de un día para otro. Sirva a temperatura ambiente. Es plato típico de Navidad y de las fiestas patronales."
      ],
      en: [
        "Clean the gizzards well: remove the yellow membrane and excess fat. Rinse with water and lime.",
        "Boil them in salted water with 1 bay leaf for 1 hour, until tender. Drain and cut into pieces.",
        "Trim the ends of the green bananas, slit the skins, and boil in salted water 15-20 minutes. Peel and slice.",
        "Escabeche: cook the oil on low with the onion, garlic, bell pepper, peppercorns, and remaining bay leaves for 10 minutes.",
        "Add the vinegar, olives, and salt. Boil 1 minute.",
        "In a glass container, layer the bananas and gizzards and pour the hot escabeche over them.",
        "Cover and refrigerate overnight. Serve at room temperature. A classic at Christmas and town festivals."
      ]
    }
  },
  {
    id: "mollejas-guisadas",
    category: "aves",
    name: { es: "Mollejas Guisadas", en: "Stewed Chicken Gizzards" },
    time: "1 hr 45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de mollejas de pollo, limpias",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 papas medianas, en cubos",
        "1 hoja de laurel",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite",
        "Jugo de 1 limón"
      ],
      en: [
        "2 lbs chicken gizzards, cleaned",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 medium potatoes, cubed",
        "1 bay leaf",
        "1 teaspoon adobo seasoning",
        "2 tablespoons oil",
        "Juice of 1 lime"
      ]
    },
    steps: {
      es: [
        "Lave las mollejas con el limón, quite la piel dura y córtelas por la mitad.",
        "Hiérvalas en agua con sal 45 minutos para ablandarlas. Escurra y reserve 1 taza del caldo.",
        "En un caldero, caliente el aceite y sofría el sofrito con el sazón y el adobo.",
        "Añada las mollejas, la salsa de tomate, las aceitunas, las alcaparras, el laurel y el caldo reservado.",
        "Tape y cocine a fuego bajo 30 minutos.",
        "Agregue las papas y cocine 20 minutos más hasta que estén tiernas. Sirva con arroz blanco."
      ],
      en: [
        "Wash the gizzards with the lime, remove the tough membrane, and cut in half.",
        "Boil in salted water 45 minutes to soften. Drain and reserve 1 cup of the broth.",
        "In a caldero, heat the oil and sauté the sofrito with the sazón and adobo.",
        "Add the gizzards, tomato sauce, olives, capers, bay leaf, and reserved broth.",
        "Cover and cook on low 30 minutes.",
        "Add the potatoes and cook 20 more minutes until tender. Serve with white rice."
      ]
    }
  },
  {
    id: "mollejas-escabeche",
    category: "entremeses",
    name: { es: "Mollejas en Escabeche", en: "Pickled Chicken Gizzards" },
    time: "1 hr 30 min + reposo",
    servings: 8,
    ingredients: {
      es: [
        "2 lbs de mollejas de pollo, limpias",
        "1 taza de aceite de oliva",
        "¾ taza de vinagre",
        "1 cebolla grande, en aros",
        "6 dientes de ajo, en láminas",
        "1 ají picante (opcional)",
        "10 granos de pimienta",
        "3 hojas de laurel",
        "¼ taza de aceitunas",
        "1 cucharadita de sal"
      ],
      en: [
        "2 lbs chicken gizzards, cleaned",
        "1 cup olive oil",
        "¾ cup vinegar",
        "1 large onion, in rings",
        "6 garlic cloves, sliced",
        "1 hot pepper (optional)",
        "10 peppercorns",
        "3 bay leaves",
        "¼ cup olives",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva las mollejas en agua con sal 1 hora hasta que estén blandas. Escurra y corte en pedazos pequeños.",
        "Cocine a fuego bajo el aceite con la cebolla, el ajo, la pimienta, el laurel y el ají por 10 minutos.",
        "Añada el vinagre, las aceitunas y la sal. Hierva 1 minuto.",
        "Vierta el escabeche caliente sobre las mollejas en un envase de cristal.",
        "Refrigere al menos 24 horas. Sirva de picadera con galletas o tostones."
      ],
      en: [
        "Boil the gizzards in salted water 1 hour until tender. Drain and cut into small pieces.",
        "Cook the oil on low with the onion, garlic, peppercorns, bay leaves, and hot pepper for 10 minutes.",
        "Add the vinegar, olives, and salt. Boil 1 minute.",
        "Pour the hot escabeche over the gizzards in a glass container.",
        "Refrigerate at least 24 hours. Serve as an appetizer with crackers or tostones."
      ]
    }
  },
  {
    id: "mollejas-fritas-ajillo",
    category: "aves",
    name: { es: "Mollejas Fritas al Ajillo", en: "Fried Garlic Chicken Gizzards" },
    time: "1 hr 15 min",
    servings: 4,
    ingredients: {
      es: [
        "2 lbs de mollejas de pollo, limpias",
        "1 cucharadita de adobo",
        "½ taza de harina",
        "8 dientes de ajo, picados",
        "3 cucharadas de mantequilla",
        "2 cucharadas de aceite de oliva",
        "Jugo de 1 limón",
        "Perejil picado",
        "Aceite para freír"
      ],
      en: [
        "2 lbs chicken gizzards, cleaned",
        "1 teaspoon adobo seasoning",
        "½ cup flour",
        "8 garlic cloves, chopped",
        "3 tablespoons butter",
        "2 tablespoons olive oil",
        "Juice of 1 lime",
        "Chopped parsley",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva las mollejas en agua con sal 45 minutos para ablandarlas. Escurra, séquelas y córtelas en pedazos.",
        "Sazone con adobo y páselas por harina.",
        "Fríalas en aceite a 350°F por 4-5 minutos hasta que estén doradas y crujientes. Escurra.",
        "En un sartén, derrita la mantequilla con el aceite de oliva y sofría el ajo a fuego bajo sin quemarlo.",
        "Añada las mollejas fritas, el limón y el perejil y mezcle. Sirva caliente con tostones."
      ],
      en: [
        "Boil the gizzards in salted water 45 minutes to soften. Drain, pat dry, and cut into pieces.",
        "Season with adobo and dredge in flour.",
        "Fry in 350°F oil 4-5 minutes until golden and crisp. Drain.",
        "In a skillet, melt the butter with the olive oil and sauté the garlic on low without burning.",
        "Add the fried gizzards, lime, and parsley and toss. Serve hot with tostones."
      ]
    }
  },
  {
    id: "arroz-mollejas",
    category: "arroces",
    name: { es: "Arroz con Mollejas", en: "Rice with Chicken Gizzards" },
    time: "1 hr 45 min",
    servings: 6,
    ingredients: {
      es: [
        "1½ lbs de mollejas de pollo, limpias",
        "3 tazas de arroz grano mediano",
        "4 tazas del caldo de las mollejas",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "½ taza de petit pois",
        "2 cucharadas de aceite"
      ],
      en: [
        "1½ lbs chicken gizzards, cleaned",
        "3 cups medium grain rice",
        "4 cups gizzard broth",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "¼ cup stuffed olives",
        "½ cup petit pois",
        "2 tablespoons oil"
      ]
    },
    steps: {
      es: [
        "Hierva las mollejas en 6 tazas de agua con sal 1 hora. Córtelas en pedazos y reserve 4 tazas del caldo.",
        "En un caldero, caliente el aceite y sofría el sofrito, el sazón y la salsa de tomate.",
        "Añada las mollejas y las aceitunas y sofría 3 minutos.",
        "Agregue el caldo y, cuando hierva, el arroz. Cocine sin tapa hasta que se seque.",
        "Voltee el arroz, añada los petit pois, tape y cocine a fuego bajo 25 minutos."
      ],
      en: [
        "Boil the gizzards in 6 cups salted water 1 hour. Cut into pieces and reserve 4 cups of the broth.",
        "In a caldero, heat the oil and sauté the sofrito, sazón, and tomato sauce.",
        "Add the gizzards and olives and sauté 3 minutes.",
        "Add the broth and, when it boils, the rice. Cook uncovered until dry.",
        "Fold the rice, add the petit pois, cover, and cook on low 25 minutes."
      ]
    }
  },

  // ── TÉS E INFUSIONES TRADICIONALES ──
  {
    id: "te-hojas-naranjo",
    category: "calientes",
    name: { es: "Té de Hojas de Naranjo", en: "Orange Leaf Tea" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "12 hojas tiernas de naranjo (china o naranja agria), lavadas",
        "4 tazas de agua",
        "Azúcar o miel al gusto"
      ],
      en: [
        "12 young orange tree leaves (sweet or sour orange), washed",
        "4 cups water",
        "Sugar or honey to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el agua.",
        "Estruje un poco las hojas con las manos para que suelten su aroma y añádalas al agua.",
        "Baje el fuego y deje hervir suavemente 5 minutos. Apague, tape y repose 5 minutos más.",
        "Cuele y endulce al gusto. En muchas casas se toma de noche, para relajarse antes de dormir."
      ],
      en: [
        "Bring the water to a boil.",
        "Crush the leaves a little with your hands to release their aroma and add them to the water.",
        "Lower the heat and simmer 5 minutes. Turn off, cover, and steep 5 more minutes.",
        "Strain and sweeten to taste. Many homes drink it at night to relax before bed."
      ]
    }
  },
  {
    id: "te-yerbabuena",
    category: "calientes",
    name: { es: "Té de Yerbabuena", en: "Spearmint Tea" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "1 manojo pequeño de yerbabuena fresca (unas 20 ramitas)",
        "4 tazas de agua",
        "Miel o azúcar al gusto",
        "Rodajas de limón (opcional)"
      ],
      en: [
        "1 small bunch fresh spearmint (about 20 sprigs)",
        "4 cups water",
        "Honey or sugar to taste",
        "Lime slices (optional)"
      ]
    },
    steps: {
      es: [
        "Hierva el agua y apague el fuego.",
        "Añada la yerbabuena lavada, tape y deje reposar 5-7 minutos (si hierve las hojas, amarga).",
        "Cuele y endulce. Sirva con una rodaja de limón.",
        "Se acostumbra tomar después de las comidas."
      ],
      en: [
        "Boil the water and turn off the heat.",
        "Add the washed spearmint, cover, and steep 5-7 minutes (boiling the leaves makes it bitter).",
        "Strain and sweeten. Serve with a lime slice.",
        "It is customary after meals."
      ]
    }
  },
  {
    id: "te-manzanilla",
    category: "calientes",
    name: { es: "Té de Manzanilla", en: "Chamomile Tea" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "2 cucharadas de flores secas de manzanilla (o 4 bolsitas)",
        "4 tazas de agua",
        "Miel al gusto",
        "Cáscara de 1 limón (opcional)"
      ],
      en: [
        "2 tablespoons dried chamomile flowers (or 4 tea bags)",
        "4 cups water",
        "Honey to taste",
        "Peel of 1 lime (optional)"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con la cáscara de limón y apague el fuego.",
        "Añada la manzanilla, tape y deje reposar 5 minutos.",
        "Cuele y endulce con miel.",
        "Es de los tés más comunes en la casa para después de comer o antes de dormir."
      ],
      en: [
        "Boil the water with the lime peel and turn off the heat.",
        "Add the chamomile, cover, and steep 5 minutes.",
        "Strain and sweeten with honey.",
        "One of the most common home teas, after meals or before bed."
      ]
    }
  },
  {
    id: "te-canela",
    category: "calientes",
    name: { es: "Té de Canela", en: "Cinnamon Tea" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "3 rajas de canela",
        "4 clavos de olor",
        "5 tazas de agua",
        "Cáscara de 1 china (naranja)",
        "¼ taza de azúcar morena o miel",
        "1 taza de leche (opcional, para té de canela con leche)"
      ],
      en: [
        "3 cinnamon sticks",
        "4 whole cloves",
        "5 cups water",
        "Peel of 1 orange",
        "¼ cup brown sugar or honey",
        "1 cup milk (optional, for cinnamon tea with milk)"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con la canela, los clavos y la cáscara de china.",
        "Baje el fuego y cocine 15 minutos hasta que tome color ámbar.",
        "Cuele y endulce.",
        "Si desea, añada la leche caliente. Así se da en muchas casas en las mañanas frescas de la montaña."
      ],
      en: [
        "Boil the water with the cinnamon, cloves, and orange peel.",
        "Lower the heat and cook 15 minutes until amber.",
        "Strain and sweeten.",
        "If desired, add hot milk. That is how many mountain homes serve it on cool mornings."
      ]
    }
  },
  {
    id: "te-anis-estrellado",
    category: "calientes",
    name: { es: "Té de Anís Estrellado", en: "Star Anise Tea" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 estrellas de anís estrellado",
        "1 cucharadita de semillas de anís dulce",
        "4 tazas de agua",
        "Azúcar o miel al gusto"
      ],
      en: [
        "4 star anise pods",
        "1 teaspoon sweet anise seeds",
        "4 cups water",
        "Sugar or honey to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el anís estrellado y las semillas de anís.",
        "Baje el fuego y cocine 5 minutos. Apague y deje reposar tapado 5 minutos.",
        "Cuele y endulce.",
        "Se toma después de comidas pesadas. No se les da a bebés ni a niños pequeños."
      ],
      en: [
        "Boil the water with the star anise and anise seeds.",
        "Lower the heat and simmer 5 minutes. Turn off and steep, covered, 5 minutes.",
        "Strain and sweeten.",
        "Enjoyed after heavy meals. Do not give it to babies or young children."
      ]
    }
  },
  {
    id: "te-oregano-brujo",
    category: "calientes",
    name: { es: "Té de Orégano Brujo", en: "Cuban Oregano Tea (Orégano Brujo)" },
    time: "15 min",
    servings: 2,
    ingredients: {
      es: [
        "6 hojas de orégano brujo (orégano de hoja ancha), lavadas",
        "3 tazas de agua",
        "Jugo de ½ limón",
        "1 cucharada de miel"
      ],
      en: [
        "6 Cuban oregano leaves (broad-leaf oregano), washed",
        "3 cups water",
        "Juice of ½ lime",
        "1 tablespoon honey"
      ]
    },
    steps: {
      es: [
        "Hierva el agua y añada las hojas de orégano brujo.",
        "Baje el fuego y cocine 5 minutos. Apague y deje reposar 5 minutos.",
        "Cuele, añada el limón y la miel.",
        "Es el té de la abuela para el catarro y la tos. Tómelo caliente."
      ],
      en: [
        "Boil the water and add the Cuban oregano leaves.",
        "Lower the heat and simmer 5 minutes. Turn off and steep 5 minutes.",
        "Strain, add the lime and honey.",
        "It is grandma's tea for colds and coughs. Drink it hot."
      ]
    }
  },
  {
    id: "te-albahaca",
    category: "calientes",
    name: { es: "Té de Albahaca", en: "Basil Tea" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "1 puñado de hojas de albahaca fresca",
        "4 tazas de agua",
        "Miel al gusto"
      ],
      en: [
        "1 handful fresh basil leaves",
        "4 cups water",
        "Honey to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el agua y apague el fuego.",
        "Añada las hojas de albahaca, tape y deje reposar 7 minutos.",
        "Cuele y endulce con miel. Se toma caliente o frío con hielo."
      ],
      en: [
        "Boil the water and turn off the heat.",
        "Add the basil leaves, cover, and steep 7 minutes.",
        "Strain and sweeten with honey. Drink hot, or cold over ice."
      ]
    }
  },
  {
    id: "te-cascara-pina",
    category: "calientes",
    name: { es: "Té de Cáscara de Piña", en: "Pineapple Peel Tea" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "Cáscara y corazón de 1 piña, bien lavados",
        "6 tazas de agua",
        "2 rajas de canela",
        "4 clavos de olor",
        "1 pedazo de jengibre en rodajas",
        "⅓ taza de azúcar morena o miel"
      ],
      en: [
        "Peel and core of 1 pineapple, well washed",
        "6 cups water",
        "2 cinnamon sticks",
        "4 whole cloves",
        "1 piece ginger, sliced",
        "⅓ cup brown sugar or honey"
      ]
    },
    steps: {
      es: [
        "Restriegue bien la cáscara de la piña con un cepillo antes de pelarla.",
        "Hierva la cáscara y el corazón con el agua, la canela, los clavos y el jengibre.",
        "Baje el fuego y cocine 25 minutos.",
        "Cuele y endulce. Se toma caliente, o frío con hielo como refresco. Aprovecha lo que sobra de la piña."
      ],
      en: [
        "Scrub the pineapple skin well with a brush before peeling.",
        "Boil the peel and core with the water, cinnamon, cloves, and ginger.",
        "Lower the heat and cook 25 minutes.",
        "Strain and sweeten. Drink hot, or cold over ice as a refresher. It uses the parts of the pineapple you'd throw away."
      ]
    }
  },
  {
    id: "te-hojas-guayaba",
    category: "calientes",
    name: { es: "Té de Hojas de Guayaba", en: "Guava Leaf Tea" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "8 hojas tiernas de guayaba, lavadas",
        "4 tazas de agua",
        "Miel al gusto"
      ],
      en: [
        "8 young guava leaves, washed",
        "4 cups water",
        "Honey to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con las hojas de guayaba.",
        "Baje el fuego y cocine 10 minutos, hasta que el agua tome color dorado.",
        "Cuele y endulce con miel.",
        "Tradicionalmente se toma para asentar el estómago."
      ],
      en: [
        "Boil the water with the guava leaves.",
        "Lower the heat and simmer 10 minutes, until the water turns golden.",
        "Strain and sweeten with honey.",
        "Traditionally taken to settle the stomach."
      ]
    }
  },
  {
    id: "te-tilo",
    category: "calientes",
    name: { es: "Té de Tilo", en: "Linden Flower Tea (Tilo)" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "2 cucharadas de flores de tilo secas",
        "4 tazas de agua",
        "Miel al gusto"
      ],
      en: [
        "2 tablespoons dried linden flowers",
        "4 cups water",
        "Honey to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el agua y apague el fuego.",
        "Añada el tilo, tape y deje reposar 5-10 minutos.",
        "Cuele y endulce con miel.",
        "Se consigue en farmacias y botánicas. Es el té de los nervios: se toma de noche para calmarse."
      ],
      en: [
        "Boil the water and turn off the heat.",
        "Add the linden, cover, and steep 5-10 minutes.",
        "Strain and sweeten with honey.",
        "Sold in pharmacies and botánicas. It is the \"nerves\" tea, taken at night to calm down."
      ]
    }
  },

  // ── CHOCOLATE CALIENTE ──
  {
    id: "chocolate-caliente-antigua",
    category: "calientes",
    name: { es: "Chocolate Caliente a la Antigua (Espeso)", en: "Old-Fashioned Thick Hot Chocolate" },
    time: "20 min",
    servings: 6,
    ingredients: {
      es: [
        "6 onzas de chocolate de mesa (tipo Cortés), picado",
        "4 tazas de leche entera",
        "1 lata de leche evaporada (12 oz)",
        "2 cucharadas de maicena",
        "¼ taza de azúcar",
        "2 rajas de canela",
        "3 clavos de olor",
        "1 cucharadita de vainilla",
        "Pizca de sal",
        "Pan de agua con mantequilla, galletas de soda y queso de papa para acompañar"
      ],
      en: [
        "6 oz table chocolate (Cortés style), chopped",
        "4 cups whole milk",
        "1 can evaporated milk (12 oz)",
        "2 tablespoons cornstarch",
        "¼ cup sugar",
        "2 cinnamon sticks",
        "3 whole cloves",
        "1 teaspoon vanilla",
        "Pinch of salt",
        "Buttered water bread, soda crackers, and mild cheese to serve"
      ]
    },
    steps: {
      es: [
        "Caliente 3½ tazas de leche con la leche evaporada, la canela y los clavos a fuego medio-bajo.",
        "Añada el chocolate, el azúcar y la sal. Revuelva hasta que el chocolate se derrita por completo.",
        "Disuelva la maicena en la ½ taza de leche restante, fría, y viértala en la olla revolviendo sin parar.",
        "Cocine 5-7 minutos, batiendo, hasta que espese y cubra la cuchara. No deje que hierva fuerte.",
        "Retire la canela y los clavos, añada la vainilla y bata para que haga espuma.",
        "Sirva bien caliente con pan de agua con mantequilla para mojar, o con galletas de soda y un pedazo de queso. Es el chocolate de las noches de Navidad."
      ],
      en: [
        "Heat 3½ cups milk with the evaporated milk, cinnamon, and cloves over medium-low heat.",
        "Add the chocolate, sugar, and salt. Stir until the chocolate is completely melted.",
        "Dissolve the cornstarch in the remaining ½ cup cold milk and pour it into the pot, stirring constantly.",
        "Cook 5-7 minutes, whisking, until it thickens and coats the spoon. Do not let it boil hard.",
        "Remove the cinnamon and cloves, add the vanilla, and whisk until foamy.",
        "Serve piping hot with buttered water bread for dipping, or with soda crackers and a piece of cheese. It is the hot chocolate of Christmas nights."
      ]
    }
  },
  {
    id: "chocolate-leche-coco",
    category: "calientes",
    name: { es: "Chocolate Caliente con Leche de Coco", en: "Hot Chocolate with Coconut Milk" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 onzas de chocolate de mesa, picado",
        "1 lata de leche de coco (13.5 oz)",
        "2 tazas de leche",
        "3 cucharadas de azúcar",
        "1 raja de canela",
        "½ cucharadita de vainilla",
        "Pizca de sal",
        "Coco rallado tostado para decorar (opcional)"
      ],
      en: [
        "4 oz table chocolate, chopped",
        "1 can coconut milk (13.5 oz)",
        "2 cups milk",
        "3 tablespoons sugar",
        "1 cinnamon stick",
        "½ teaspoon vanilla",
        "Pinch of salt",
        "Toasted shredded coconut for garnish (optional)"
      ]
    },
    steps: {
      es: [
        "Caliente la leche de coco con la leche y la canela a fuego medio-bajo.",
        "Añada el chocolate, el azúcar y la sal, y revuelva hasta derretir.",
        "Cocine 5 minutos batiendo, sin que hierva.",
        "Retire la canela y añada la vainilla.",
        "Sirva con coco tostado por encima. Es la versión de los pueblos de la costa."
      ],
      en: [
        "Heat the coconut milk with the milk and cinnamon over medium-low heat.",
        "Add the chocolate, sugar, and salt, and stir until melted.",
        "Cook 5 minutes, whisking, without boiling.",
        "Remove the cinnamon and add the vanilla.",
        "Serve topped with toasted coconut. It is the coastal towns' version."
      ]
    }
  },
  {
    id: "chocolate-cacao-pais",
    category: "calientes",
    name: { es: "Chocolate de Cacao del País", en: "Hot Chocolate from Local Cacao Balls" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "3 onzas de bolitas de cacao del país (cacao puro), ralladas",
        "4 tazas de leche",
        "⅓ taza de azúcar morena o panela",
        "1 raja de canela",
        "2 clavos de olor",
        "1 pedacito de cáscara de china",
        "Pizca de sal"
      ],
      en: [
        "3 oz local cacao balls (pure cacao), grated",
        "4 cups milk",
        "⅓ cup brown sugar or panela",
        "1 cinnamon stick",
        "2 whole cloves",
        "1 small piece of orange peel",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Ralle las bolitas de cacao por el lado fino del guayo.",
        "Hierva ½ taza de la leche con la canela, los clavos y la cáscara de china por 3 minutos.",
        "Añada el cacao rallado y el azúcar, y revuelva hasta formar una pasta lisa.",
        "Agregue el resto de la leche poco a poco, batiendo, y cocine a fuego bajo 10 minutos.",
        "Cuele para quitar las especias y bata con un molinillo o batidor hasta que haga espuma.",
        "Es más amargo e intenso que el de tableta: endulce más si lo desea. Así se hacía en las fincas de la montaña."
      ],
      en: [
        "Grate the cacao balls on the fine side of the grater.",
        "Boil ½ cup of the milk with the cinnamon, cloves, and orange peel for 3 minutes.",
        "Add the grated cacao and the sugar, and stir into a smooth paste.",
        "Add the rest of the milk gradually, whisking, and cook on low 10 minutes.",
        "Strain out the spices and whisk with a molinillo or whisk until foamy.",
        "It is more bitter and intense than tablet chocolate: sweeten more if you like. This is how it was made on the mountain farms."
      ]
    }
  },

  // ── PESCADOS Y MARISCOS (más) ──
  {
    id: "mariscada",
    category: "pescados",
    name: { es: "Mariscada Criolla", en: "Creole Seafood Stew (Mariscada)" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de camarones grandes, pelados",
        "2 colas de langosta, cortadas en medallones",
        "1 lb de almejas, bien lavadas",
        "½ lb de calamares, en anillos",
        "½ lb de pulpo cocido, en pedazos",
        "1 lb de filete de mero, en pedazos",
        "4 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "1 lata de salsa de tomate (15 oz)",
        "1 taza de vino blanco",
        "1 taza de caldo de pescado o de camarones",
        "6 dientes de ajo, picados",
        "⅓ taza de aceite de oliva",
        "¼ taza de aceitunas rellenas",
        "Cilantro picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb large shrimp, peeled",
        "2 lobster tails, cut into medallions",
        "1 lb clams, well scrubbed",
        "½ lb squid, in rings",
        "½ lb cooked octopus, in pieces",
        "1 lb grouper fillet, in pieces",
        "4 tablespoons sofrito",
        "1 packet sazón with annatto",
        "1 can tomato sauce (15 oz)",
        "1 cup white wine",
        "1 cup fish or shrimp broth",
        "6 garlic cloves, chopped",
        "⅓ cup olive oil",
        "¼ cup stuffed olives",
        "Chopped cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero grande, caliente el aceite y sofría el ajo sin dorar. Añada el sofrito y el sazón y cocine 2 minutos.",
        "Agregue la salsa de tomate, el vino, el caldo y las aceitunas. Hierva a fuego bajo 10 minutos.",
        "Añada el pescado y la langosta y cocine 4 minutos.",
        "Agregue las almejas, tape y cocine hasta que se abran (unos 5 minutos). Descarte las que no abran.",
        "Añada los camarones, los calamares y el pulpo y cocine 3 minutos más, hasta que los camarones estén rosados.",
        "Ajuste la sal, espolvoree cilantro y sirva con arroz blanco, tostones o mofongo."
      ],
      en: [
        "In a large caldero, heat the oil and sauté the garlic without browning. Add the sofrito and sazón and cook 2 minutes.",
        "Add the tomato sauce, wine, broth, and olives. Simmer 10 minutes.",
        "Add the fish and lobster and cook 4 minutes.",
        "Add the clams, cover, and cook until they open (about 5 minutes). Discard any that don't open.",
        "Add the shrimp, squid, and octopus and cook 3 more minutes, until the shrimp are pink.",
        "Adjust salt, sprinkle with cilantro, and serve with white rice, tostones, or mofongo."
      ]
    }
  },
  {
    id: "jueyes-rellenos",
    category: "pescados",
    name: { es: "Jueyes Rellenos al Carapacho", en: "Stuffed Land Crab Shells" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de carne de juey (o de cangrejo), limpia",
        "6 carapachos de juey limpios (o conchas para hornear)",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de salsa de tomate",
        "2 cucharadas de aceitunas picadas",
        "1 cucharada de alcaparras",
        "2 cucharadas de mantequilla",
        "½ taza de pan rallado",
        "Recao picado"
      ],
      en: [
        "1 lb land crab (or crab) meat, picked over",
        "6 cleaned crab shells (or baking shells)",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons tomato sauce",
        "2 tablespoons chopped olives",
        "1 tablespoon capers",
        "2 tablespoons butter",
        "½ cup breadcrumbs",
        "Chopped culantro"
      ]
    },
    steps: {
      es: [
        "Revise la carne de juey y quite cualquier pedacito de carapacho.",
        "En un sartén, derrita 1 cucharada de mantequilla y sofría el sofrito con el sazón y la salsa de tomate.",
        "Añada el juey, las aceitunas, las alcaparras y el recao. Cocine 8 minutos hasta que seque un poco.",
        "Rellene los carapachos, cubra con pan rallado y ponga encima pedacitos del resto de la mantequilla.",
        "Hornee a 375°F por 15-20 minutos hasta que doren. Típicos de los kioscos de Piñones y Luquillo."
      ],
      en: [
        "Check the crab meat and remove any bits of shell.",
        "In a skillet, melt 1 tablespoon of butter and sauté the sofrito with the sazón and tomato sauce.",
        "Add the crab, olives, capers, and culantro. Cook 8 minutes until slightly dry.",
        "Fill the shells, top with breadcrumbs, and dot with the remaining butter.",
        "Bake at 375°F for 15-20 minutes until golden. A favorite at the Piñones and Luquillo kiosks."
      ]
    }
  },
  {
    id: "langosta-parrilla",
    category: "pescados",
    name: { es: "Langosta a la Parrilla con Mantequilla de Ajo", en: "Grilled Lobster with Garlic Butter" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "4 colas de langosta (8 oz cada una)",
        "½ taza de mantequilla",
        "6 dientes de ajo, majados",
        "Jugo de 1 limón",
        "1 cucharadita de pimentón",
        "2 cucharadas de perejil o cilantro picado",
        "Sal al gusto"
      ],
      en: [
        "4 lobster tails (8 oz each)",
        "½ cup butter",
        "6 garlic cloves, mashed",
        "Juice of 1 lime",
        "1 teaspoon paprika",
        "2 tablespoons chopped parsley or cilantro",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla con el ajo a fuego bajo 3 minutos. Añada el limón, el pimentón, el perejil y la sal.",
        "Con tijeras, corte las colas por la mitad a lo largo, a través del carapacho.",
        "Barnice la carne con la mantequilla de ajo.",
        "Ase con la carne hacia abajo 4-5 minutos. Voltee, barnice otra vez y ase 4-5 minutos más, hasta que la carne esté blanca y opaca.",
        "Sirva con el resto de la mantequilla de ajo, tostones y ensalada."
      ],
      en: [
        "Melt the butter with the garlic over low heat 3 minutes. Add the lime, paprika, parsley, and salt.",
        "With kitchen shears, split the tails lengthwise through the shell.",
        "Brush the meat with the garlic butter.",
        "Grill meat-side down 4-5 minutes. Turn, brush again, and grill 4-5 more minutes, until the meat is white and opaque.",
        "Serve with the remaining garlic butter, tostones, and salad."
      ]
    }
  },
  {
    id: "ruedas-sierra",
    category: "pescados",
    name: { es: "Ruedas de Sierra Fritas", en: "Fried Kingfish Steaks" },
    time: "30 min + adobo",
    servings: 4,
    ingredients: {
      es: [
        "4 ruedas de sierra (de 1 pulgada de grueso)",
        "4 dientes de ajo, majados",
        "Jugo de 2 limones",
        "1 cucharadita de orégano",
        "1 cucharadita de adobo",
        "½ taza de harina",
        "Aceite para freír",
        "1 cebolla en aros"
      ],
      en: [
        "4 kingfish steaks (1 inch thick)",
        "4 garlic cloves, mashed",
        "Juice of 2 limes",
        "1 teaspoon oregano",
        "1 teaspoon adobo seasoning",
        "½ cup flour",
        "Oil for frying",
        "1 onion, in rings"
      ]
    },
    steps: {
      es: [
        "Adobe las ruedas con ajo, limón, orégano y adobo. Marine 30 minutos en la nevera.",
        "Séquelas un poco y páselas por harina.",
        "Fría en ½ pulgada de aceite caliente 4-5 minutos por lado, hasta que estén doradas y el centro se separe en lascas.",
        "En el mismo aceite, sofría la cebolla y póngala encima del pescado.",
        "Sirva con tostones, arroz blanco o viandas. Es el pescado frito de los chinchorros de la costa."
      ],
      en: [
        "Season the steaks with garlic, lime, oregano, and adobo. Marinate 30 minutes in the fridge.",
        "Pat them a little dry and dredge in flour.",
        "Fry in ½ inch hot oil 4-5 minutes per side, until golden and the center flakes.",
        "In the same oil, sauté the onion and spoon it over the fish.",
        "Serve with tostones, white rice, or root vegetables. It is the fried fish of the seaside chinchorros."
      ]
    }
  },
  {
    id: "chillo-horno",
    category: "pescados",
    name: { es: "Chillo al Horno con Vegetales", en: "Baked Red Snapper with Vegetables" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "1 chillo entero de 2-3 lbs, limpio y con escamas quitadas",
        "6 dientes de ajo, majados",
        "Jugo de 2 limones",
        "⅓ taza de aceite de oliva",
        "1 cebolla en aros",
        "1 pimiento rojo en tiras",
        "2 tomates en ruedas",
        "2 papas en ruedas finas",
        "¼ taza de aceitunas",
        "1 cucharadita de orégano",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 whole red snapper, 2-3 lbs, cleaned and scaled",
        "6 garlic cloves, mashed",
        "Juice of 2 limes",
        "⅓ cup olive oil",
        "1 onion, in rings",
        "1 red bell pepper, in strips",
        "2 tomatoes, sliced",
        "2 potatoes, thinly sliced",
        "¼ cup olives",
        "1 teaspoon oregano",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hágale 3 cortes diagonales al chillo por cada lado. Frótelo por dentro y por fuera con el ajo, el limón, el orégano, sal y pimienta.",
        "Precaliente el horno a 400°F. Engrase un molde con parte del aceite y acomode las papas en el fondo.",
        "Coloque el chillo encima y rodéelo con la cebolla, el pimiento, el tomate y las aceitunas.",
        "Rocíe con el resto del aceite y tape con papel de aluminio.",
        "Hornee 20 minutos, destape y hornee 10-15 minutos más, hasta que la carne se separe del espinazo.",
        "Sirva en el mismo molde con el jugo del horno."
      ],
      en: [
        "Make 3 diagonal cuts on each side of the snapper. Rub it inside and out with the garlic, lime, oregano, salt, and pepper.",
        "Preheat the oven to 400°F. Grease a baking dish with some of the oil and layer the potatoes on the bottom.",
        "Place the snapper on top and surround it with the onion, bell pepper, tomato, and olives.",
        "Drizzle with the remaining oil and cover with foil.",
        "Bake 20 minutes, uncover, and bake 10-15 more minutes, until the flesh comes off the backbone.",
        "Serve in the same dish with the pan juices."
      ]
    }
  },
  {
    id: "dorado-mango",
    category: "pescados",
    name: { es: "Dorado a la Plancha con Salsa de Mango", en: "Seared Mahi-Mahi with Mango Salsa" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de dorado (mahi-mahi), de 6 oz",
        "2 cucharadas de aceite de oliva",
        "1 cucharadita de adobo",
        "Jugo de 1 limón",
        "Salsa: 1 mangó maduro en cubitos",
        "¼ de cebolla roja picada",
        "½ pimiento rojo picado",
        "2 ajíes dulces picados",
        "2 cucharadas de cilantro picado",
        "Jugo de 1 limón más",
        "Pizca de sal"
      ],
      en: [
        "4 mahi-mahi fillets, 6 oz each",
        "2 tablespoons olive oil",
        "1 teaspoon adobo seasoning",
        "Juice of 1 lime",
        "Salsa: 1 ripe mango, diced",
        "¼ red onion, diced",
        "½ red bell pepper, diced",
        "2 sweet peppers (ají dulce), diced",
        "2 tablespoons chopped cilantro",
        "Juice of 1 more lime",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Mezcle todos los ingredientes de la salsa y refrigere mientras cocina el pescado.",
        "Sazone los filetes con adobo y limón.",
        "Caliente el aceite en una plancha o sartén a fuego medio-alto.",
        "Cocine el dorado 3-4 minutos por lado, hasta que esté dorado por fuera y opaco en el centro.",
        "Sirva con la salsa de mango por encima y arroz blanco o ensalada."
      ],
      en: [
        "Mix all the salsa ingredients and refrigerate while you cook the fish.",
        "Season the fillets with adobo and lime.",
        "Heat the oil on a griddle or skillet over medium-high heat.",
        "Cook the mahi-mahi 3-4 minutes per side, until golden outside and opaque in the center.",
        "Serve topped with the mango salsa, with white rice or salad."
      ]
    }
  },
  {
    id: "pescado-hoja-platano",
    category: "pescados",
    name: { es: "Pescado Asado en Hoja de Plátano", en: "Fish Roasted in Banana Leaves" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de pescado blanco (mero o chillo), de 6 oz",
        "4 pedazos grandes de hoja de plátano, pasados por el fuego",
        "3 cucharadas de recaíto",
        "4 dientes de ajo, majados",
        "Jugo de 1 naranja agria (o 2 limones)",
        "2 cucharadas de aceite con achiote",
        "1 tomate en ruedas",
        "½ cebolla en aros",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 white fish fillets (grouper or snapper), 6 oz each",
        "4 large pieces of banana leaf, passed over a flame",
        "3 tablespoons recaíto",
        "4 garlic cloves, mashed",
        "Juice of 1 sour orange (or 2 limes)",
        "2 tablespoons annatto oil",
        "1 tomato, sliced",
        "½ onion, in rings",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle el recaíto, el ajo, el jugo de naranja agria, el aceite con achiote, sal y pimienta.",
        "Unte los filetes con la mezcla.",
        "Coloque cada filete sobre una hoja de plátano, póngale encima tomate y cebolla y doble la hoja como un paquete.",
        "Ase en la parrilla o en el horno a 400°F por 15-20 minutos, hasta que el pescado se separe en lascas.",
        "Sirva abriendo el paquete en el plato: la hoja le da un aroma especial."
      ],
      en: [
        "Mix the recaíto, garlic, sour orange juice, annatto oil, salt, and pepper.",
        "Rub the fillets with the mixture.",
        "Place each fillet on a banana leaf, top with tomato and onion, and fold the leaf into a packet.",
        "Grill or bake at 400°F for 15-20 minutes, until the fish flakes.",
        "Serve by opening the packet on the plate: the leaf gives it a special aroma."
      ]
    }
  },
  {
    id: "ensalada-mariscos",
    category: "pescados",
    name: { es: "Ensalada de Mariscos", en: "Seafood Salad" },
    time: "1 hr + frío",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de pulpo cocido, en pedazos",
        "1 lb de camarones cocidos y pelados",
        "½ lb de carrucho cocido, en pedazos",
        "½ lb de calamares cocidos, en anillos",
        "1 cebolla roja picada",
        "1 pimiento verde y 1 rojo, picados",
        "4 ajíes dulces picados",
        "½ taza de aceite de oliva",
        "⅓ taza de vinagre",
        "Jugo de 3 limones",
        "¼ taza de aceitunas",
        "Cilantro picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb cooked octopus, in pieces",
        "1 lb cooked, peeled shrimp",
        "½ lb cooked conch, in pieces",
        "½ lb cooked squid, in rings",
        "1 red onion, diced",
        "1 green and 1 red bell pepper, diced",
        "4 sweet peppers (ají dulce), diced",
        "½ cup olive oil",
        "⅓ cup vinegar",
        "Juice of 3 limes",
        "¼ cup olives",
        "Chopped cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Asegúrese de que todos los mariscos estén bien cocidos y fríos.",
        "Combine el pulpo, los camarones, el carrucho y los calamares en un envase de cristal.",
        "Añada la cebolla, los pimientos, los ajíes, las aceitunas y el cilantro.",
        "Mezcle el aceite, el vinagre, el limón, sal y pimienta, y viértalo por encima.",
        "Refrigere al menos 1 hora. Sirva frío con tostones o galletas. Consúmala en 1-2 días."
      ],
      en: [
        "Make sure all the seafood is well cooked and cold.",
        "Combine the octopus, shrimp, conch, and squid in a glass container.",
        "Add the onion, bell peppers, sweet peppers, olives, and cilantro.",
        "Mix the oil, vinegar, lime, salt, and pepper, and pour it over.",
        "Refrigerate at least 1 hour. Serve cold with tostones or crackers. Eat within 1-2 days."
      ]
    }
  },
  {
    id: "coctel-camarones",
    category: "pescados",
    name: { es: "Cóctel de Camarones", en: "Puerto Rican Shrimp Cocktail" },
    time: "20 min + frío",
    servings: 4,
    ingredients: {
      es: [
        "1 lb de camarones medianos, pelados",
        "½ taza de ketchup",
        "Jugo de 2 limones",
        "½ cebolla roja picada",
        "1 tomate picado",
        "1 aguacate en cubitos",
        "2 cucharadas de cilantro picado",
        "Unas gotas de pique o salsa picante",
        "Galletas de soda para servir"
      ],
      en: [
        "1 lb medium shrimp, peeled",
        "½ cup ketchup",
        "Juice of 2 limes",
        "½ red onion, diced",
        "1 tomato, diced",
        "1 avocado, diced",
        "2 tablespoons chopped cilantro",
        "A few drops of pique or hot sauce",
        "Soda crackers to serve"
      ]
    },
    steps: {
      es: [
        "Hierva agua con sal, añada los camarones y cocine 2-3 minutos, hasta que estén rosados. Páselos a agua con hielo y escurra.",
        "Mezcle el ketchup con el limón y el pique.",
        "Añada los camarones, la cebolla, el tomate y el cilantro.",
        "Refrigere 30 minutos. Justo antes de servir, añada el aguacate.",
        "Sirva frío en copas con galletas de soda."
      ],
      en: [
        "Bring salted water to a boil, add the shrimp, and cook 2-3 minutes, until pink. Transfer to ice water and drain.",
        "Mix the ketchup with the lime and hot sauce.",
        "Add the shrimp, onion, tomato, and cilantro.",
        "Refrigerate 30 minutes. Just before serving, add the avocado.",
        "Serve cold in glasses with soda crackers."
      ]
    }
  },
  {
    id: "asopao-mariscos",
    category: "sopas",
    name: { es: "Asopao de Mariscos", en: "Seafood Asopao" },
    time: "50 min",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de arroz grano corto",
        "1 lb de camarones, pelados",
        "1 lb de almejas, bien lavadas",
        "½ lb de calamares, en anillos",
        "1 lb de filete de pescado, en pedazos",
        "4 cucharadas de sofrito",
        "2 sobres de sazón con achiote",
        "½ taza de salsa de tomate",
        "10 tazas de caldo de pescado o de camarones",
        "½ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "½ taza de petit pois",
        "1 pimiento rojo asado, en tiras"
      ],
      en: [
        "1½ cups short grain rice",
        "1 lb shrimp, peeled",
        "1 lb clams, well scrubbed",
        "½ lb squid, in rings",
        "1 lb fish fillet, in pieces",
        "4 tablespoons sofrito",
        "2 packets sazón with annatto",
        "½ cup tomato sauce",
        "10 cups fish or shrimp broth",
        "½ cup stuffed olives",
        "1 tablespoon capers",
        "½ cup petit pois",
        "1 roasted red pepper, in strips"
      ]
    },
    steps: {
      es: [
        "En una olla grande, sofría el sofrito con el sazón y la salsa de tomate 3 minutos.",
        "Añada el caldo, las aceitunas y las alcaparras y hierva.",
        "Agregue el arroz y cocine a fuego medio 18 minutos, revolviendo de vez en cuando.",
        "Añada el pescado y las almejas y cocine 5 minutos, hasta que las almejas abran (descarte las que no abran).",
        "Agregue los camarones y los calamares y cocine 3 minutos más.",
        "Debe quedar caldoso. Decore con los petit pois y el pimiento y sirva enseguida."
      ],
      en: [
        "In a large pot, sauté the sofrito with the sazón and tomato sauce 3 minutes.",
        "Add the broth, olives, and capers and bring to a boil.",
        "Add the rice and cook on medium 18 minutes, stirring now and then.",
        "Add the fish and clams and cook 5 minutes, until the clams open (discard any that don't).",
        "Add the shrimp and squid and cook 3 more minutes.",
        "It should be soupy. Garnish with the petit pois and pepper and serve right away."
      ]
    }
  },
  {
    id: "paella-mariscos",
    category: "arroces",
    name: { es: "Paella de Mariscos a la Boricua", en: "Puerto Rican Seafood Paella" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de arroz grano mediano",
        "1 lb de camarones grandes, con cáscara",
        "1 lb de mejillones o almejas, bien lavados",
        "½ lb de calamares, en anillos",
        "2 colas de langosta, en medallones",
        "½ lb de chorizo en ruedas",
        "4 cucharadas de sofrito",
        "2 sobres de sazón con azafrán (o una pizca de azafrán)",
        "½ taza de salsa de tomate",
        "5 tazas de caldo de pescado o de pollo",
        "⅓ taza de aceite de oliva",
        "1 pimiento rojo en tiras",
        "½ taza de petit pois",
        "Limones en cuartos para servir"
      ],
      en: [
        "3 cups medium grain rice",
        "1 lb large shell-on shrimp",
        "1 lb mussels or clams, well scrubbed",
        "½ lb squid, in rings",
        "2 lobster tails, in medallions",
        "½ lb chorizo, sliced",
        "4 tablespoons sofrito",
        "2 packets sazón with saffron (or a pinch of saffron)",
        "½ cup tomato sauce",
        "5 cups fish or chicken broth",
        "⅓ cup olive oil",
        "1 red bell pepper, in strips",
        "½ cup petit pois",
        "Lime wedges to serve"
      ]
    },
    steps: {
      es: [
        "En un caldero ancho o paellera, caliente el aceite y dore el chorizo. Añada los calamares y el pimiento y sofría 3 minutos.",
        "Agregue el sofrito, el sazón y la salsa de tomate. Añada el arroz y revuelva para que se impregne.",
        "Vierta el caldo caliente, pruebe la sal y cocine sin revolver a fuego medio 15 minutos.",
        "Acomode encima la langosta, los camarones y los mejillones, hundiéndolos un poco en el arroz.",
        "Tape y cocine a fuego bajo 10-12 minutos, hasta que el arroz esté listo y los mejillones abran (descarte los que no abran).",
        "Añada los petit pois, deje reposar 5 minutos y sirva con limón. El pegao del fondo es lo mejor."
      ],
      en: [
        "In a wide caldero or paella pan, heat the oil and brown the chorizo. Add the squid and bell pepper and sauté 3 minutes.",
        "Add the sofrito, sazón, and tomato sauce. Add the rice and stir to coat.",
        "Pour in the hot broth, taste for salt, and cook without stirring on medium 15 minutes.",
        "Arrange the lobster, shrimp, and mussels on top, pressing them slightly into the rice.",
        "Cover and cook on low 10-12 minutes, until the rice is done and the mussels open (discard any that don't).",
        "Add the petit pois, rest 5 minutes, and serve with lime. The crispy pegao at the bottom is the best part."
      ]
    }
  },
  {
    id: "arroz-pulpo",
    category: "arroces",
    name: { es: "Arroz con Pulpo", en: "Rice with Octopus" },
    time: "1 hr 45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de pulpo limpio",
        "3 tazas de arroz grano mediano",
        "4 tazas del caldo del pulpo",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "3 cucharadas de aceite de oliva",
        "1 hoja de laurel"
      ],
      en: [
        "2 lbs cleaned octopus",
        "3 cups medium grain rice",
        "4 cups octopus broth",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "3 tablespoons olive oil",
        "1 bay leaf"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo en agua con sal y laurel 45-60 minutos, hasta que un tenedor entre con facilidad. Reserve 4 tazas del caldo.",
        "Corte el pulpo en pedazos pequeños.",
        "En un caldero, caliente el aceite y sofría el sofrito, el sazón y la salsa de tomate. Añada el pulpo, las aceitunas y las alcaparras.",
        "Agregue el caldo y, cuando hierva, el arroz. Cocine sin tapa hasta que se seque.",
        "Voltee, tape y cocine a fuego bajo 25 minutos. Sirva con tostones o amarillos."
      ],
      en: [
        "Boil the octopus in salted water with the bay leaf 45-60 minutes, until a fork goes in easily. Reserve 4 cups of the broth.",
        "Cut the octopus into small pieces.",
        "In a caldero, heat the oil and sauté the sofrito, sazón, and tomato sauce. Add the octopus, olives, and capers.",
        "Add the broth and, when it boils, the rice. Cook uncovered until dry.",
        "Fold, cover, and cook on low 25 minutes. Serve with tostones or sweet plantains."
      ]
    }
  },

  // ── POSTRES PUERTORRIQUEÑOS (más) ──
  {
    id: "gofio",
    category: "postres",
    name: { es: "Gofio (Dulce de Maíz Tostado)", en: "Gofio (Toasted Cornmeal Candy)" },
    time: "20 min",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de harina de maíz fina",
        "¾ taza de azúcar",
        "½ cucharadita de canela",
        "Pizca de sal"
      ],
      en: [
        "2 cups fine cornmeal",
        "¾ cup sugar",
        "½ teaspoon cinnamon",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Tueste la harina de maíz en un sartén seco a fuego medio-bajo, revolviendo sin parar, 10-12 minutos, hasta que huela a maíz tostado y tome color dorado.",
        "Déjela enfriar por completo.",
        "Mezcle con el azúcar, la canela y la sal.",
        "Sirva en cartuchitos de papel o en montoncitos. Se come a cucharaditas, poco a poco, porque es un polvo seco. Así se vendía en las tiendas de pueblo."
      ],
      en: [
        "Toast the cornmeal in a dry skillet over medium-low heat, stirring constantly, 10-12 minutes, until it smells of toasted corn and turns golden.",
        "Let it cool completely.",
        "Mix with the sugar, cinnamon, and salt.",
        "Serve in small paper cones or little piles. Eat it by the teaspoon, slowly, since it's a dry powder. That's how it was sold in small-town shops."
      ]
    }
  },
  {
    id: "coconetes",
    category: "postres",
    name: { es: "Coconetes", en: "Coconetes (Coconut Cookies)" },
    time: "35 min",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de coco rallado",
        "1½ tazas de harina",
        "¾ taza de azúcar morena",
        "¼ taza de mantequilla derretida",
        "½ taza de leche de coco",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de canela",
        "½ cucharadita de jengibre molido",
        "1 cucharadita de vainilla",
        "Pizca de sal"
      ],
      en: [
        "2 cups shredded coconut",
        "1½ cups flour",
        "¾ cup brown sugar",
        "¼ cup melted butter",
        "½ cup coconut milk",
        "1 teaspoon baking powder",
        "½ teaspoon cinnamon",
        "½ teaspoon ground ginger",
        "1 teaspoon vanilla",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase una bandeja.",
        "Mezcle la harina, el azúcar morena, el polvo de hornear, las especias y la sal.",
        "Añada el coco, la mantequilla, la leche de coco y la vainilla. Debe quedar una masa pegajosa y rústica.",
        "Forme montoncitos irregulares con una cuchara sobre la bandeja.",
        "Hornee 18-20 minutos, hasta que estén dorados por fuera y blanditos por dentro. Son las galletas de coco de las panaderías del país."
      ],
      en: [
        "Preheat the oven to 350°F and grease a baking sheet.",
        "Mix the flour, brown sugar, baking powder, spices, and salt.",
        "Add the coconut, butter, coconut milk, and vanilla. It should be a sticky, rustic dough.",
        "Drop uneven mounds by the spoonful onto the sheet.",
        "Bake 18-20 minutes, until golden outside and soft inside. They're the coconut cookies of Puerto Rican bakeries."
      ]
    }
  },
  {
    id: "dulce-mamey",
    category: "postres",
    name: { es: "Dulce de Mamey en Almíbar", en: "Mamey in Syrup" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 mameyes maduros pero firmes",
        "2 tazas de azúcar",
        "2 tazas de agua",
        "2 rajas de canela",
        "4 clavos de olor",
        "Queso del país para servir"
      ],
      en: [
        "2 ripe but firm mameys (mammee apples)",
        "2 cups sugar",
        "2 cups water",
        "2 cinnamon sticks",
        "4 whole cloves",
        "Local white cheese to serve"
      ]
    },
    steps: {
      es: [
        "Pele los mameyes, quite la piel blanca amarga que queda pegada a la pulpa y saque las semillas.",
        "Corte la pulpa en tiras o pedazos.",
        "Prepare un almíbar con el azúcar, el agua, la canela y los clavos. Hierva 5 minutos.",
        "Añada el mamey y cocine a fuego bajo 35-40 minutos, hasta que esté brilloso y el almíbar espese.",
        "Enfríe y sirva con queso del país."
      ],
      en: [
        "Peel the mameys, remove the bitter white skin stuck to the flesh, and take out the seeds.",
        "Cut the flesh into strips or pieces.",
        "Make a syrup with the sugar, water, cinnamon, and cloves. Boil 5 minutes.",
        "Add the mamey and cook on low 35-40 minutes, until glossy and the syrup thickens.",
        "Cool and serve with local white cheese."
      ]
    }
  },
  {
    id: "majarete-arroz",
    category: "postres",
    name: { es: "Majarete de Harina de Arroz", en: "Rice Flour Majarete" },
    time: "30 min + frío",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de harina de arroz",
        "1 lata de leche de coco (13.5 oz)",
        "2 tazas de leche",
        "¾ taza de azúcar",
        "2 rajas de canela",
        "1 pedazo de jengibre",
        "Cáscara de 1 limón",
        "½ cucharadita de sal",
        "Canela en polvo para decorar"
      ],
      en: [
        "1 cup rice flour",
        "1 can coconut milk (13.5 oz)",
        "2 cups milk",
        "¾ cup sugar",
        "2 cinnamon sticks",
        "1 piece of ginger",
        "Peel of 1 lime",
        "½ teaspoon salt",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Hierva 1 taza de agua con la canela, el jengibre y la cáscara de limón 5 minutos. Cuele y reserve ½ taza de esa agua de especias.",
        "En una olla, disuelva la harina de arroz en la leche de coco y la leche frías, sin grumos.",
        "Añada el azúcar, la sal y el agua de especias.",
        "Cocine a fuego medio, revolviendo sin parar con cuchara de madera, 12-15 minutos, hasta que espese como una crema firme.",
        "Vierta en un platón o en copitas, espolvoree canela y deje enfriar. Es el majarete de las abuelas, antes de hacerse con maíz."
      ],
      en: [
        "Boil 1 cup water with the cinnamon, ginger, and lime peel 5 minutes. Strain and reserve ½ cup of the spiced water.",
        "In a pot, dissolve the rice flour in the cold coconut milk and milk, with no lumps.",
        "Add the sugar, salt, and spiced water.",
        "Cook on medium, stirring constantly with a wooden spoon, 12-15 minutes, until it thickens to a firm cream.",
        "Pour into a platter or small cups, sprinkle with cinnamon, and let cool. It's grandma's majarete, from before it was made with corn."
      ]
    }
  },
  {
    id: "flan-cafe",
    category: "postres",
    name: { es: "Flan de Café", en: "Coffee Flan" },
    time: "1 hr 15 min + frío",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1 lata de leche condensada",
        "1 lata de leche evaporada",
        "½ taza de café puertorriqueño bien fuerte, frío",
        "5 huevos",
        "1 cucharadita de vainilla",
        "Pizca de sal"
      ],
      en: [
        "1 cup sugar (for caramel)",
        "1 can condensed milk",
        "1 can evaporated milk",
        "½ cup very strong Puerto Rican coffee, cold",
        "5 eggs",
        "1 teaspoon vanilla",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Derrita el azúcar en el molde a fuego medio hasta que esté ámbar y cubra el fondo.",
        "Licúe las leches, el café, los huevos, la vainilla y la sal. Cuele.",
        "Vierta sobre el caramelo y tape con papel de aluminio.",
        "Hornee en baño de María a 350°F por 55-60 minutos, hasta que cuaje.",
        "Refrigere al menos 6 horas y voltee para servir."
      ],
      en: [
        "Melt the sugar in the mold over medium heat until amber and coat the bottom.",
        "Blend the milks, coffee, eggs, vanilla, and salt. Strain.",
        "Pour over the caramel and cover with foil.",
        "Bake in a water bath at 350°F for 55-60 minutes, until set.",
        "Refrigerate at least 6 hours and invert to serve."
      ]
    }
  },
  {
    id: "pudin-batata",
    category: "postres",
    name: { es: "Pudín de Batata", en: "Sweet Potato Pudding" },
    time: "1 hr 20 min",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de batata blanca cocida y majada",
        "1 lata de leche de coco",
        "1 lata de leche evaporada",
        "1 taza de azúcar morena",
        "3 huevos",
        "¼ taza de mantequilla derretida",
        "½ taza de harina",
        "1 cucharadita de canela",
        "½ cucharadita de jengibre molido",
        "¼ cucharadita de clavo molido",
        "1 cucharadita de vainilla",
        "½ taza de pasas (opcional)"
      ],
      en: [
        "3 cups cooked, mashed white sweet potato (batata)",
        "1 can coconut milk",
        "1 can evaporated milk",
        "1 cup brown sugar",
        "3 eggs",
        "¼ cup melted butter",
        "½ cup flour",
        "1 teaspoon cinnamon",
        "½ teaspoon ground ginger",
        "¼ teaspoon ground cloves",
        "1 teaspoon vanilla",
        "½ cup raisins (optional)"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase un molde de 9x13.",
        "Licúe la batata con las leches, el azúcar, los huevos, la mantequilla, la harina, las especias y la vainilla.",
        "Añada las pasas y vierta en el molde.",
        "Hornee 60 minutos, hasta que al insertar un palillo salga limpio.",
        "Deje enfriar y corte en cuadros. Es mejor al día siguiente."
      ],
      en: [
        "Preheat the oven to 350°F and grease a 9x13 pan.",
        "Blend the sweet potato with both milks, sugar, eggs, butter, flour, spices, and vanilla.",
        "Stir in the raisins and pour into the pan.",
        "Bake 60 minutes, until a toothpick comes out clean.",
        "Let cool and cut into squares. It's best the next day."
      ]
    }
  },
  {
    id: "bunuelos-batata",
    category: "postres",
    name: { es: "Buñuelos de Batata en Almíbar", en: "Sweet Potato Fritters in Syrup" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de batata cocida y majada",
        "1 taza de harina",
        "2 huevos",
        "2 cucharadas de azúcar",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de anís en semillas",
        "Pizca de sal",
        "Aceite para freír",
        "Almíbar: 1½ tazas de azúcar, 1 taza de agua, 2 rajas de canela, 4 clavos de olor, cáscara de 1 limón"
      ],
      en: [
        "2 cups cooked, mashed sweet potato",
        "1 cup flour",
        "2 eggs",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "½ teaspoon anise seeds",
        "Pinch of salt",
        "Oil for frying",
        "Syrup: 1½ cups sugar, 1 cup water, 2 cinnamon sticks, 4 whole cloves, peel of 1 lime"
      ]
    },
    steps: {
      es: [
        "Prepare el almíbar: hierva todos sus ingredientes 10 minutos, hasta que espese un poco. Reserve tibio.",
        "Mezcle la batata con los huevos, el azúcar, la harina, el polvo de hornear, el anís y la sal.",
        "Caliente el aceite a 350°F y fría cucharadas de la masa hasta que estén dorados por todos lados.",
        "Escúrralos y páselos al almíbar tibio.",
        "Sirva los buñuelos bañados en almíbar. Son dulce típico de Navidad y de Semana Santa."
      ],
      en: [
        "Make the syrup: boil all its ingredients 10 minutes, until slightly thick. Keep warm.",
        "Mix the sweet potato with the eggs, sugar, flour, baking powder, anise, and salt.",
        "Heat the oil to 350°F and fry spoonfuls of the batter until golden all over.",
        "Drain and transfer to the warm syrup.",
        "Serve the fritters bathed in syrup. A traditional sweet at Christmas and Holy Week."
      ]
    }
  },
  {
    id: "helado-coquito",
    category: "postres",
    name: { es: "Helado de Coquito", en: "Coquito Ice Cream" },
    time: "20 min + congelación",
    servings: 10,
    ingredients: {
      es: [
        "1 lata de crema de coco (15 oz)",
        "1 lata de leche condensada",
        "1 lata de leche evaporada",
        "1½ tazas de crema de leche (heavy cream)",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela",
        "¼ cucharadita de nuez moscada",
        "Pizca de sal"
      ],
      en: [
        "1 can cream of coconut (15 oz)",
        "1 can condensed milk",
        "1 can evaporated milk",
        "1½ cups heavy cream",
        "1 teaspoon vanilla",
        "1 teaspoon cinnamon",
        "¼ teaspoon nutmeg",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Licúe la crema de coco, la leche condensada, la leche evaporada, la vainilla, las especias y la sal.",
        "Bata la crema de leche hasta que forme picos suaves.",
        "Incorpore la mezcla de coquito a la crema batida con movimientos envolventes.",
        "Vierta en un envase, tape y congele 6 horas, revolviendo cada 2 horas para que quede cremoso.",
        "Sirva con canela por encima. Es sin alcohol, apto para toda la familia; para adultos, añada 2 onzas de ron al licuar."
      ],
      en: [
        "Blend the cream of coconut, condensed milk, evaporated milk, vanilla, spices, and salt.",
        "Whip the heavy cream to soft peaks.",
        "Fold the coquito mixture into the whipped cream.",
        "Pour into a container, cover, and freeze 6 hours, stirring every 2 hours so it stays creamy.",
        "Serve sprinkled with cinnamon. It's alcohol-free for the whole family; for adults, add 2 oz rum when blending."
      ]
    }
  },
  {
    id: "tres-leches-coco",
    category: "postres",
    name: { es: "Tres Leches de Coco", en: "Coconut Tres Leches Cake" },
    time: "1 hr 30 min + frío",
    servings: 12,
    ingredients: {
      es: [
        "Bizcocho: 5 huevos, 1 taza de azúcar, 1 taza de harina, 1 cucharadita de polvo de hornear, ⅓ taza de leche, 1 cucharadita de vainilla",
        "Mezcla: 1 lata de leche condensada, 1 lata de leche evaporada, 1 lata de leche de coco",
        "Cubierta: 1½ tazas de crema de leche (heavy cream), 3 cucharadas de azúcar",
        "1 taza de coco rallado tostado"
      ],
      en: [
        "Cake: 5 eggs, 1 cup sugar, 1 cup flour, 1 teaspoon baking powder, ⅓ cup milk, 1 teaspoon vanilla",
        "Soak: 1 can condensed milk, 1 can evaporated milk, 1 can coconut milk",
        "Topping: 1½ cups heavy cream, 3 tablespoons sugar",
        "1 cup toasted shredded coconut"
      ]
    },
    steps: {
      es: [
        "Bata los huevos con el azúcar hasta que dupliquen su volumen. Añada la vainilla.",
        "Incorpore la harina con el polvo de hornear en forma envolvente, alternando con la leche.",
        "Hornee en un molde de 9x13 engrasado a 350°F por 25-30 minutos. Enfríe un poco.",
        "Pinche todo el bizcocho con un tenedor y vierta despacio la mezcla de las tres leches. Refrigere 4 horas.",
        "Bata la crema de leche con el azúcar hasta que forme picos y cubra el bizcocho.",
        "Espolvoree el coco tostado y sirva frío."
      ],
      en: [
        "Beat the eggs with the sugar until doubled in volume. Add the vanilla.",
        "Fold in the flour with the baking powder, alternating with the milk.",
        "Bake in a greased 9x13 pan at 350°F for 25-30 minutes. Cool slightly.",
        "Poke the whole cake with a fork and slowly pour over the three-milk soak. Refrigerate 4 hours.",
        "Whip the heavy cream with the sugar to peaks and cover the cake.",
        "Sprinkle with the toasted coconut and serve cold."
      ]
    }
  },
  {
    id: "tarta-queso-guayaba",
    category: "postres",
    name: { es: "Tarta de Queso con Guayaba", en: "Guava Cheesecake" },
    time: "1 hr 30 min + frío",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de galleta molida (tipo graham o María)",
        "⅓ taza de mantequilla derretida",
        "3 paquetes de queso crema (8 oz cada uno)",
        "1 taza de azúcar",
        "3 huevos",
        "½ taza de crema agria o yogur natural",
        "1 cucharadita de vainilla",
        "8 oz de pasta de guayaba",
        "¼ taza de agua"
      ],
      en: [
        "1½ cups cookie crumbs (graham or María)",
        "⅓ cup melted butter",
        "3 packages cream cheese (8 oz each)",
        "1 cup sugar",
        "3 eggs",
        "½ cup sour cream or plain yogurt",
        "1 teaspoon vanilla",
        "8 oz guava paste",
        "¼ cup water"
      ]
    },
    steps: {
      es: [
        "Mezcle la galleta molida con la mantequilla y presione en el fondo de un molde desmontable de 9 pulgadas. Hornee a 350°F por 8 minutos.",
        "Bata el queso crema con el azúcar hasta que esté suave. Añada los huevos uno a uno, la crema agria y la vainilla.",
        "Derrita la pasta de guayaba con el agua a fuego bajo hasta formar una salsa.",
        "Vierta el relleno sobre la base y ponga cucharadas de guayaba por encima; dibuje remolinos con un cuchillo.",
        "Hornee a 325°F por 55-60 minutos, hasta que el centro apenas tiemble. Apague el horno y deje dentro 1 hora con la puerta entreabierta.",
        "Refrigere toda la noche antes de desmoldar."
      ],
      en: [
        "Mix the cookie crumbs with the butter and press into the bottom of a 9-inch springform pan. Bake at 350°F for 8 minutes.",
        "Beat the cream cheese with the sugar until smooth. Add the eggs one at a time, the sour cream, and the vanilla.",
        "Melt the guava paste with the water over low heat into a sauce.",
        "Pour the filling over the crust and drop spoonfuls of guava on top; swirl with a knife.",
        "Bake at 325°F for 55-60 minutes, until the center barely wobbles. Turn off the oven and leave it inside 1 hour with the door ajar.",
        "Refrigerate overnight before unmolding."
      ]
    }
  },
  {
    id: "limber-guanabana",
    category: "postres",
    name: { es: "Limber de Guanábana", en: "Soursop Ice Pop (Limber)" },
    time: "15 min + congelación",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de pulpa de guanábana (fresca o congelada)",
        "1 lata de leche evaporada",
        "½ lata de leche condensada",
        "1 taza de agua",
        "¼ taza de azúcar",
        "½ cucharadita de vainilla"
      ],
      en: [
        "2 cups soursop pulp (fresh or frozen)",
        "1 can evaporated milk",
        "½ can condensed milk",
        "1 cup water",
        "¼ cup sugar",
        "½ teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de guanábana con el agua y cuele para quitar las semillas y las fibras.",
        "Vuelva a licuar con las leches, el azúcar y la vainilla.",
        "Vierta en vasitos plásticos.",
        "Congele al menos 5 horas. Para comerlo, apriete el vasito desde abajo, como se hace con el limber."
      ],
      en: [
        "Blend the soursop pulp with the water and strain out the seeds and fibers.",
        "Blend again with the milks, sugar, and vanilla.",
        "Pour into small plastic cups.",
        "Freeze at least 5 hours. To eat, squeeze the cup from the bottom, the way you eat a limber."
      ]
    }
  },
  {
    id: "helado-parcha",
    category: "postres",
    name: { es: "Helado de Parcha", en: "Passion Fruit Ice Cream" },
    time: "20 min + congelación",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de pulpa de parcha, colada",
        "1 lata de leche condensada",
        "2 tazas de crema de leche (heavy cream)",
        "Pizca de sal"
      ],
      en: [
        "1 cup passion fruit pulp, strained",
        "1 can condensed milk",
        "2 cups heavy cream",
        "Pinch of salt"
      ]
    },
    steps: {
      es: [
        "Mezcle la pulpa de parcha con la leche condensada y la sal.",
        "Bata la crema de leche hasta que forme picos firmes.",
        "Incorpore la mezcla de parcha con movimientos envolventes.",
        "Vierta en un envase, tape y congele 6 horas o toda la noche. No necesita máquina de helado."
      ],
      en: [
        "Mix the passion fruit pulp with the condensed milk and salt.",
        "Whip the heavy cream to stiff peaks.",
        "Fold in the passion fruit mixture.",
        "Pour into a container, cover, and freeze 6 hours or overnight. No ice cream maker needed."
      ]
    }
  },

  // ── PANES PUERTORRIQUEÑOS (más) ──
  {
    id: "pan-jamon",
    category: "panes",
    name: { es: "Pan de Jamón", en: "Ham Bread (Christmas Pan de Jamón)" },
    time: "3 hrs",
    servings: 12,
    ingredients: {
      es: [
        "Masa: 4 tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche tibia",
        "¼ taza de azúcar",
        "1 huevo",
        "¼ taza de mantequilla",
        "1 cucharadita de sal",
        "Relleno: 1 lb de jamón de cocinar en lascas finas",
        "½ lb de tocineta, ligeramente frita",
        "½ taza de pasas",
        "½ taza de aceitunas rellenas, en ruedas",
        "1 huevo batido para barnizar"
      ],
      en: [
        "Dough: 4 cups bread flour",
        "1 packet yeast",
        "1 cup warm milk",
        "¼ cup sugar",
        "1 egg",
        "¼ cup butter",
        "1 teaspoon salt",
        "Filling: 1 lb thinly sliced cooking ham",
        "½ lb bacon, lightly fried",
        "½ cup raisins",
        "½ cup stuffed olives, sliced",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "Añada el resto del azúcar, el huevo, la mantequilla, la harina y la sal. Amase 10 minutos y deje crecer 1 hora.",
        "Estire la masa en un rectángulo de unas 12x16 pulgadas.",
        "Cubra con las lascas de jamón y la tocineta, y reparta las pasas y las aceitunas, dejando 1 pulgada libre en los bordes.",
        "Enrolle por el lado largo, selle bien la costura y las puntas, y colóquelo en una bandeja con la costura hacia abajo. Deje crecer 30 minutos.",
        "Barnice con el huevo, pinche la superficie con un tenedor y hornee a 350°F por 30-35 minutos hasta dorar.",
        "Deje enfriar un poco y corte en ruedas. Es el pan de las fiestas navideñas."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Add the rest of the sugar, the egg, butter, flour, and salt. Knead 10 minutes and let rise 1 hour.",
        "Roll the dough into a rectangle about 12x16 inches.",
        "Cover with the ham slices and bacon, and scatter the raisins and olives, leaving a 1-inch border.",
        "Roll up from the long side, seal the seam and ends well, and place seam-down on a baking sheet. Let rise 30 minutes.",
        "Brush with the egg, prick the top with a fork, and bake at 350°F for 30-35 minutes until golden.",
        "Let cool slightly and slice. It's the bread of the Christmas holidays."
      ]
    }
  },
  {
    id: "mallorcas-guayaba-queso",
    category: "panes",
    name: { es: "Mallorcas Rellenas de Guayaba y Queso", en: "Mallorcas Filled with Guava and Cheese" },
    time: "3 hrs 30 min",
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "¾ taza de leche tibia",
        "½ taza de azúcar",
        "3 yemas de huevo",
        "½ taza de mantequilla suavizada (más 2 cucharadas derretidas)",
        "½ cucharadita de sal",
        "6 oz de pasta de guayaba, en 12 pedacitos",
        "6 oz de queso crema, en 12 pedacitos",
        "Azúcar en polvo para cubrir"
      ],
      en: [
        "4 cups bread flour",
        "1 packet yeast",
        "¾ cup warm milk",
        "½ cup sugar",
        "3 egg yolks",
        "½ cup softened butter (plus 2 tablespoons melted)",
        "½ teaspoon salt",
        "6 oz guava paste, in 12 pieces",
        "6 oz cream cheese, in 12 pieces",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "Añada las yemas, el resto del azúcar, la harina y la sal. Amase e incorpore la mantequilla suavizada poco a poco hasta tener una masa suave y brillosa. Deje crecer 1½ horas.",
        "Divida en 12 bolitas. Estire cada una en una tira larga, ponga en el centro un pedazo de guayaba y uno de queso, cierre y enrolle en espiral, como caracol.",
        "Coloque en bandejas engrasadas y deje crecer 45 minutos.",
        "Hornee a 350°F por 15-18 minutos hasta que doren.",
        "Barnice con la mantequilla derretida y cubra con abundante azúcar en polvo."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Add the yolks, the rest of the sugar, the flour, and the salt. Knead, working in the softened butter little by little until the dough is soft and glossy. Let rise 1½ hours.",
        "Divide into 12 balls. Roll each into a long strip, put a piece of guava and a piece of cheese in the center, close, and coil into a spiral, like a snail.",
        "Place on greased baking sheets and let rise 45 minutes.",
        "Bake at 350°F for 15-18 minutes until golden.",
        "Brush with the melted butter and dust generously with powdered sugar."
      ]
    }
  },
  {
    id: "pan-tostado-plancha",
    category: "panes",
    name: { es: "Pan Tostado a la Plancha", en: "Griddle-Toasted Bread (Tostada)" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1 pan de agua",
        "3 cucharadas de mantequilla suavizada",
        "Café con leche para acompañar"
      ],
      en: [
        "1 water bread loaf",
        "3 tablespoons softened butter",
        "Café con leche to serve"
      ]
    },
    steps: {
      es: [
        "Corte el pan de agua por la mitad a lo largo y luego en dos pedazos.",
        "Unte la mantequilla por el lado de la miga.",
        "Colóquelo en una plancha o sartén caliente con la mantequilla hacia abajo y presiónelo con una espátula o un peso.",
        "Tueste 2-3 minutos hasta que esté dorado y crujiente, y la corteza caliente.",
        "Sírvalo enseguida con café con leche para mojar: es el desayuno de las panaderías."
      ],
      en: [
        "Cut the water bread in half lengthwise and then into two pieces.",
        "Spread the butter on the crumb side.",
        "Place butter-side down on a hot griddle or skillet and press with a spatula or a weight.",
        "Toast 2-3 minutes until golden and crisp, with a warm crust.",
        "Serve right away with café con leche for dunking: it's the classic bakery breakfast."
      ]
    }
  },
  {
    id: "pan-molde-casero",
    category: "panes",
    name: { es: "Pan de Molde Casero", en: "Homemade Sandwich Loaf" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "1¼ tazas de leche tibia",
        "2 cucharadas de azúcar",
        "3 cucharadas de mantequilla",
        "1½ cucharaditas de sal"
      ],
      en: [
        "4 cups bread flour",
        "1 packet yeast",
        "1¼ cups warm milk",
        "2 tablespoons sugar",
        "3 tablespoons butter",
        "1½ teaspoons salt"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en la leche tibia. Espere 10 minutos.",
        "Añada la harina, la mantequilla y la sal. Amase 10 minutos hasta que la masa esté lisa y elástica.",
        "Deje crecer 1 hora, hasta que duplique su tamaño.",
        "Estire la masa en un rectángulo, enróllela bien apretada y colóquela en un molde de pan engrasado. Deje crecer 45 minutos.",
        "Hornee a 375°F por 30 minutos. Desmolde y deje enfriar por completo antes de rebanar. Es el pan de los sándwiches de mezcla."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm milk. Wait 10 minutes.",
        "Add the flour, butter, and salt. Knead 10 minutes until smooth and elastic.",
        "Let rise 1 hour, until doubled.",
        "Roll the dough into a rectangle, roll it up tightly, and place it in a greased loaf pan. Let rise 45 minutes.",
        "Bake at 375°F for 30 minutes. Unmold and cool completely before slicing. It's the bread for party sandwiches (sándwiches de mezcla)."
      ]
    }
  },
  {
    id: "pan-queso-pais",
    category: "panes",
    name: { es: "Pan de Queso del País", en: "Local White Cheese Rolls" },
    time: "2 hrs 30 min",
    servings: 12,
    ingredients: {
      es: [
        "3½ tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche tibia",
        "2 cucharadas de azúcar",
        "1 huevo",
        "3 cucharadas de mantequilla",
        "1 cucharadita de sal",
        "1½ tazas de queso del país rallado",
        "1 huevo batido para barnizar"
      ],
      en: [
        "3½ cups bread flour",
        "1 packet yeast",
        "1 cup warm milk",
        "2 tablespoons sugar",
        "1 egg",
        "3 tablespoons butter",
        "1 teaspoon salt",
        "1½ cups grated local white cheese",
        "1 beaten egg for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y el azúcar en la leche tibia. Espere 10 minutos.",
        "Añada el huevo, la mantequilla, la harina y la sal. Amase 8 minutos.",
        "Incorpore 1 taza del queso y deje crecer 1 hora.",
        "Forme 12 panecillos, colóquelos en una bandeja engrasada y deje crecer 30 minutos.",
        "Barnice con huevo, cubra con el resto del queso y hornee a 375°F por 18-20 minutos. Se comen tibios."
      ],
      en: [
        "Dissolve the yeast and sugar in the warm milk. Wait 10 minutes.",
        "Add the egg, butter, flour, and salt. Knead 8 minutes.",
        "Work in 1 cup of the cheese and let rise 1 hour.",
        "Shape 12 rolls, place on a greased baking sheet, and let rise 30 minutes.",
        "Brush with egg, top with the rest of the cheese, and bake at 375°F for 18-20 minutes. Best eaten warm."
      ]
    }
  },
  {
    id: "pan-mantequilla",
    category: "panes",
    name: { es: "Pan de Mantequilla", en: "Soft Butter Bread" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "4½ tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche tibia",
        "⅓ taza de azúcar",
        "2 huevos",
        "½ taza de mantequilla suavizada",
        "1 cucharadita de sal",
        "2 cucharadas de mantequilla derretida para barnizar"
      ],
      en: [
        "4½ cups bread flour",
        "1 packet yeast",
        "1 cup warm milk",
        "⅓ cup sugar",
        "2 eggs",
        "½ cup softened butter",
        "1 teaspoon salt",
        "2 tablespoons melted butter for brushing"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "Añada los huevos, el resto del azúcar, la harina y la sal. Amase e incorpore la mantequilla poco a poco. Amase 10 minutos más.",
        "Deje crecer 1½ horas.",
        "Divida en 2, forme dos panes y colóquelos en moldes engrasados. Deje crecer 45 minutos.",
        "Hornee a 350°F por 25-30 minutos. Barnice con mantequilla derretida al sacarlos. La miga queda muy suave y amarilla."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Add the eggs, the rest of the sugar, the flour, and the salt. Knead, working in the butter little by little. Knead 10 more minutes.",
        "Let rise 1½ hours.",
        "Divide in 2, shape two loaves, and place in greased pans. Let rise 45 minutes.",
        "Bake at 350°F for 25-30 minutes. Brush with melted butter as they come out. The crumb is very soft and yellow."
      ]
    }
  },
  {
    id: "pan-leche-pasas",
    category: "panes",
    name: { es: "Pan de Leche con Pasas", en: "Sweet Milk Bread with Raisins" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "1 taza de leche evaporada tibia",
        "½ taza de azúcar",
        "2 huevos",
        "¼ taza de mantequilla",
        "1 cucharadita de canela",
        "½ cucharadita de sal",
        "1 taza de pasas",
        "1 huevo batido y 2 cucharadas de azúcar para cubrir"
      ],
      en: [
        "4 cups bread flour",
        "1 packet yeast",
        "1 cup warm evaporated milk",
        "½ cup sugar",
        "2 eggs",
        "¼ cup butter",
        "1 teaspoon cinnamon",
        "½ teaspoon salt",
        "1 cup raisins",
        "1 beaten egg and 2 tablespoons sugar for topping"
      ]
    },
    steps: {
      es: [
        "Remoje las pasas en agua tibia 15 minutos y escúrralas bien.",
        "Disuelva la levadura en la leche tibia con 1 cucharada de azúcar. Espere 10 minutos.",
        "Añada los huevos, el resto del azúcar, la mantequilla, la harina, la canela y la sal. Amase 10 minutos.",
        "Incorpore las pasas y deje crecer 1 hora.",
        "Forme 2 panes redondos o trenzados, colóquelos en una bandeja y deje crecer 40 minutos.",
        "Barnice con huevo, espolvoree azúcar y hornee a 350°F por 25-30 minutos."
      ],
      en: [
        "Soak the raisins in warm water 15 minutes and drain well.",
        "Dissolve the yeast in the warm milk with 1 tablespoon sugar. Wait 10 minutes.",
        "Add the eggs, the rest of the sugar, the butter, flour, cinnamon, and salt. Knead 10 minutes.",
        "Work in the raisins and let rise 1 hour.",
        "Shape 2 round or braided loaves, place on a baking sheet, and let rise 40 minutes.",
        "Brush with egg, sprinkle with sugar, and bake at 350°F for 25-30 minutes."
      ]
    }
  },
  {
    id: "pan-platano-maduro",
    category: "panes",
    name: { es: "Pan de Plátano Maduro", en: "Ripe Plantain Bread" },
    time: "1 hr 20 min",
    servings: 10,
    ingredients: {
      es: [
        "2 plátanos bien maduros (casi negros), majados",
        "2 tazas de harina",
        "¾ taza de azúcar morena",
        "½ taza de aceite",
        "2 huevos",
        "¼ taza de leche de coco",
        "1 cucharadita de bicarbonato",
        "1 cucharadita de canela",
        "½ cucharadita de nuez moscada",
        "1 cucharadita de vainilla",
        "½ cucharadita de sal"
      ],
      en: [
        "2 very ripe plantains (almost black), mashed",
        "2 cups flour",
        "¾ cup brown sugar",
        "½ cup oil",
        "2 eggs",
        "¼ cup coconut milk",
        "1 teaspoon baking soda",
        "1 teaspoon cinnamon",
        "½ teaspoon nutmeg",
        "1 teaspoon vanilla",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Precaliente el horno a 350°F y engrase un molde de pan.",
        "Mezcle los plátanos majados con el aceite, el azúcar, los huevos, la leche de coco y la vainilla.",
        "Añada la harina, el bicarbonato, las especias y la sal, sin batir demasiado.",
        "Vierta en el molde y hornee 55-60 minutos, hasta que un palillo salga limpio.",
        "Deje enfriar antes de cortar. Aprovecha los plátanos que se pasaron de maduros."
      ],
      en: [
        "Preheat the oven to 350°F and grease a loaf pan.",
        "Mix the mashed plantains with the oil, sugar, eggs, coconut milk, and vanilla.",
        "Add the flour, baking soda, spices, and salt without overmixing.",
        "Pour into the pan and bake 55-60 minutes, until a toothpick comes out clean.",
        "Let cool before slicing. It uses up plantains that got too ripe."
      ]
    }
  },
  {
    id: "pan-yautia",
    category: "panes",
    name: { es: "Pan de Yautía", en: "Yautía (Taro) Bread Rolls" },
    time: "3 hrs",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de yautía blanca hervida y majada",
        "4 tazas de harina de pan",
        "1 sobre de levadura",
        "¾ taza de leche tibia",
        "2 cucharadas de azúcar",
        "1 huevo",
        "3 cucharadas de mantequilla",
        "1½ cucharaditas de sal"
      ],
      en: [
        "1 cup boiled, mashed white yautía (taro)",
        "4 cups bread flour",
        "1 packet yeast",
        "¾ cup warm milk",
        "2 tablespoons sugar",
        "1 egg",
        "3 tablespoons butter",
        "1½ teaspoons salt"
      ]
    },
    steps: {
      es: [
        "Hierva la yautía pelada hasta que esté blanda, májela sin grumos y déjela entibiar.",
        "Disuelva la levadura y el azúcar en la leche tibia. Espere 10 minutos.",
        "Mezcle la yautía con la levadura, el huevo y la mantequilla. Añada la harina y la sal y amase 10 minutos.",
        "Deje crecer 1 hora. Forme 16 panecillos, colóquelos en un molde engrasado y deje crecer 40 minutos.",
        "Hornee a 375°F por 20-22 minutos. Quedan muy suaves y húmedos por la yautía."
      ],
      en: [
        "Boil the peeled yautía until soft, mash it smooth, and let it cool to lukewarm.",
        "Dissolve the yeast and sugar in the warm milk. Wait 10 minutes.",
        "Mix the yautía with the yeast, egg, and butter. Add the flour and salt and knead 10 minutes.",
        "Let rise 1 hour. Shape 16 rolls, place in a greased pan, and let rise 40 minutes.",
        "Bake at 375°F for 20-22 minutes. The yautía makes them very soft and moist."
      ]
    }
  },

  // ── SOPAS PUERTORRIQUEÑAS (más) ──
  {
    id: "caldo-pollo-casero",
    category: "sopas",
    name: { es: "Caldo de Pollo Casero", en: "Homemade Chicken Broth" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de muslos de pollo con hueso, sin pellejo",
        "10 tazas de agua",
        "1 cebolla en cuartos",
        "1 pimiento verde en pedazos",
        "4 dientes de ajo machacados",
        "4 hojas de recao",
        "2 zanahorias en ruedas",
        "1 tallo de apio",
        "2 papas en cubos",
        "1 cucharadita de sal",
        "Jugo de 1 limón"
      ],
      en: [
        "2 lbs bone-in chicken thighs, skinless",
        "10 cups water",
        "1 onion, quartered",
        "1 green bell pepper, in pieces",
        "4 garlic cloves, crushed",
        "4 culantro leaves",
        "2 carrots, sliced",
        "1 celery stalk",
        "2 potatoes, cubed",
        "1 teaspoon salt",
        "Juice of 1 lime"
      ]
    },
    steps: {
      es: [
        "Ponga el pollo en una olla con el agua fría y la sal. Cuando empiece a hervir, quite la espuma con una cuchara.",
        "Añada la cebolla, el pimiento, el ajo, el recao y el apio. Cocine tapado a fuego bajo 1 hora.",
        "Saque el pollo, desmenúcelo y descarte los huesos. Cuele el caldo si lo quiere claro.",
        "Regrese el pollo al caldo con la zanahoria y las papas y cocine 20 minutos.",
        "Añada el limón y ajuste la sal. Es el caldo de la casa para el catarro o cuando el estómago está delicado."
      ],
      en: [
        "Put the chicken in a pot with the cold water and salt. When it starts to boil, skim off the foam with a spoon.",
        "Add the onion, bell pepper, garlic, culantro, and celery. Cook covered on low 1 hour.",
        "Remove the chicken, shred it, and discard the bones. Strain the broth if you want it clear.",
        "Return the chicken to the broth with the carrots and potatoes and cook 20 minutes.",
        "Add the lime and adjust the salt. It's the home broth for colds or an upset stomach."
      ]
    }
  },
  {
    id: "sopa-fideos-criolla",
    category: "sopas",
    name: { es: "Sopa de Fideos Criolla con Huevo", en: "Creole Noodle Soup with Egg" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "8 tazas de caldo de pollo",
        "2 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "2 cucharadas de salsa de tomate",
        "1 papa en cubitos",
        "1 zanahoria en cubitos",
        "1 taza de fideos finos",
        "2 huevos batidos",
        "Cilantro picado"
      ],
      en: [
        "8 cups chicken broth",
        "2 tablespoons sofrito",
        "1 packet sazón with annatto",
        "2 tablespoons tomato sauce",
        "1 potato, diced",
        "1 carrot, diced",
        "1 cup thin noodles",
        "2 beaten eggs",
        "Chopped cilantro"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría el sofrito con el sazón y la salsa de tomate 2 minutos.",
        "Añada el caldo, la papa y la zanahoria y hierva 12 minutos.",
        "Agregue los fideos y cocine 6-8 minutos hasta que estén blandos.",
        "Con la sopa hirviendo, vierta los huevos batidos en un hilo fino mientras revuelve para que se formen hebras. Cocine 1 minuto más.",
        "Sirva con cilantro. Es la sopa rápida de los días de lluvia."
      ],
      en: [
        "In a pot, sauté the sofrito with the sazón and tomato sauce 2 minutes.",
        "Add the broth, potato, and carrot and boil 12 minutes.",
        "Add the noodles and cook 6-8 minutes until tender.",
        "With the soup boiling, pour in the beaten eggs in a thin stream while stirring so they form ribbons. Cook 1 more minute.",
        "Serve with cilantro. It's the quick soup for rainy days."
      ]
    }
  },
  {
    id: "sopa-albondigas",
    category: "sopas",
    name: { es: "Sopa de Albóndigas", en: "Meatball Soup" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de carne molida",
        "¼ taza de pan rallado",
        "1 huevo",
        "2 cucharadas de sofrito (para las albóndigas)",
        "3 cucharadas de sofrito (para la sopa)",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "8 tazas de caldo de res o agua",
        "2 papas en cubos",
        "1 zanahoria en ruedas",
        "1 taza de calabaza en cubos",
        "½ taza de arroz",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb ground beef",
        "¼ cup breadcrumbs",
        "1 egg",
        "2 tablespoons sofrito (for the meatballs)",
        "3 tablespoons sofrito (for the soup)",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "8 cups beef broth or water",
        "2 potatoes, cubed",
        "1 carrot, sliced",
        "1 cup calabaza, cubed",
        "½ cup rice",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle la carne, el pan rallado, el huevo, 2 cucharadas de sofrito, sal y pimienta. Forme bolitas del tamaño de una nuez.",
        "En una olla, sofría el resto del sofrito con el sazón y la salsa de tomate.",
        "Añada el caldo y hierva. Eche las albóndigas una a una y cocine 10 minutos sin revolver para que no se rompan.",
        "Agregue las papas, la zanahoria, la calabaza y el arroz. Cocine 20 minutos a fuego medio.",
        "Ajuste la sal. La calabaza se deshace y espesa el caldo."
      ],
      en: [
        "Mix the beef, breadcrumbs, egg, 2 tablespoons sofrito, salt, and pepper. Form walnut-sized balls.",
        "In a pot, sauté the rest of the sofrito with the sazón and tomato sauce.",
        "Add the broth and bring to a boil. Drop in the meatballs one by one and cook 10 minutes without stirring so they hold together.",
        "Add the potatoes, carrot, calabaza, and rice. Cook 20 minutes on medium.",
        "Adjust the salt. The calabaza breaks down and thickens the broth."
      ]
    }
  },
  {
    id: "sopa-lentejas",
    category: "sopas",
    name: { es: "Sopa de Lentejas con Calabaza", en: "Lentil Soup with Calabaza" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "1 lb de lentejas secas",
        "10 tazas de agua",
        "4 onzas de jamón de cocinar en cubitos",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "1 lb de calabaza en cubos",
        "2 papas en cubos",
        "1 zanahoria en ruedas",
        "1 hoja de laurel",
        "2 cucharadas de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "1 lb dried lentils",
        "10 cups water",
        "4 oz cooking ham, diced",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "1 lb calabaza, cubed",
        "2 potatoes, cubed",
        "1 carrot, sliced",
        "1 bay leaf",
        "2 tablespoons olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave las lentejas y revise que no tengan piedritas.",
        "En una olla, dore el jamón en el aceite. Añada el sofrito, el sazón y la salsa de tomate y sofría 2 minutos.",
        "Agregue las lentejas, el agua y el laurel. Hierva y cocine a fuego medio 25 minutos.",
        "Añada la calabaza, las papas y la zanahoria. Cocine 20 minutos más, hasta que todo esté blando.",
        "Maje algunos pedazos de calabaza contra la olla para espesar. Ajuste la sal y sirva con arroz blanco o pan."
      ],
      en: [
        "Rinse the lentils and check for small stones.",
        "In a pot, brown the ham in the oil. Add the sofrito, sazón, and tomato sauce and sauté 2 minutes.",
        "Add the lentils, water, and bay leaf. Bring to a boil and cook on medium 25 minutes.",
        "Add the calabaza, potatoes, and carrot. Cook 20 more minutes, until everything is tender.",
        "Mash some calabaza pieces against the pot to thicken. Adjust salt and serve with white rice or bread."
      ]
    }
  },
  {
    id: "sopa-guineitos",
    category: "sopas",
    name: { es: "Sopa de Guineítos Verdes", en: "Green Banana Soup" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "8 guineítos verdes",
        "1 lb de costillitas de cerdo o carne de res en cubos",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "¼ taza de salsa de tomate",
        "8 tazas de agua",
        "1 taza de calabaza en cubos",
        "Recao picado",
        "Sal al gusto"
      ],
      en: [
        "8 small green bananas",
        "1 lb pork riblets or cubed beef",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "¼ cup tomato sauce",
        "8 cups water",
        "1 cup calabaza, cubed",
        "Chopped culantro",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, dore la carne. Añada el sofrito, el sazón y la salsa de tomate y sofría 3 minutos.",
        "Agregue el agua, tape y cocine a fuego medio 30 minutos.",
        "Mientras tanto, pele los guineítos con las manos aceitadas (manchan) y córtelos en ruedas. Póngalos en agua con sal para que no se oscurezcan.",
        "Escurra los guineítos y añádalos a la olla con la calabaza. Cocine 20 minutos, hasta que estén blandos.",
        "Maje algunas ruedas de guineo para espesar, ajuste la sal y sirva con recao."
      ],
      en: [
        "In a pot, brown the meat. Add the sofrito, sazón, and tomato sauce and sauté 3 minutes.",
        "Add the water, cover, and cook on medium 30 minutes.",
        "Meanwhile, peel the green bananas with oiled hands (they stain) and slice them. Keep them in salted water so they don't darken.",
        "Drain the bananas and add them to the pot with the calabaza. Cook 20 minutes, until tender.",
        "Mash a few banana slices to thicken, adjust the salt, and serve with culantro."
      ]
    }
  },
  {
    id: "crema-yautia",
    category: "sopas",
    name: { es: "Crema de Yautía", en: "Cream of Yautía (Taro) Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de yautía blanca, pelada y en cubos",
        "1 cebolla picada",
        "3 dientes de ajo",
        "2 cucharadas de mantequilla",
        "6 tazas de caldo de pollo",
        "1 taza de leche",
        "Pizca de nuez moscada",
        "Sal y pimienta al gusto",
        "Cebollín o recao picado"
      ],
      en: [
        "2 lbs white yautía (taro), peeled and cubed",
        "1 onion, chopped",
        "3 garlic cloves",
        "2 tablespoons butter",
        "6 cups chicken broth",
        "1 cup milk",
        "Pinch of nutmeg",
        "Salt and pepper to taste",
        "Chopped chives or culantro"
      ]
    },
    steps: {
      es: [
        "Pele la yautía con las manos aceitadas o con guantes y córtela en cubos.",
        "Sofría la cebolla y el ajo en la mantequilla hasta que estén blandos.",
        "Añada la yautía y el caldo y hierva 25 minutos, hasta que esté muy blanda.",
        "Licúe hasta que quede una crema suave. Regrese a la olla, añada la leche, la nuez moscada, sal y pimienta, y caliente sin hervir.",
        "Sirva con cebollín. Es una sopa suave, buena para los niños y para los días de convalecencia."
      ],
      en: [
        "Peel the yautía with oiled hands or gloves and cut into cubes.",
        "Sauté the onion and garlic in the butter until soft.",
        "Add the yautía and broth and boil 25 minutes, until very soft.",
        "Blend into a smooth cream. Return to the pot, add the milk, nutmeg, salt, and pepper, and heat without boiling.",
        "Serve with chives. It's a gentle soup, good for children and for recovery days."
      ]
    }
  },
  {
    id: "sopa-papa-chorizo",
    category: "sopas",
    name: { es: "Sopa de Papa con Chorizo", en: "Potato Soup with Chorizo" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 lbs de papas en cubos",
        "½ lb de chorizo en ruedas",
        "1 cebolla picada",
        "3 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "7 tazas de caldo de pollo",
        "1 taza de repollo picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 lbs potatoes, cubed",
        "½ lb chorizo, sliced",
        "1 onion, chopped",
        "3 tablespoons sofrito",
        "1 packet sazón with annatto",
        "7 cups chicken broth",
        "1 cup chopped cabbage",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, dore el chorizo hasta que suelte su grasa.",
        "Añada la cebolla, el sofrito y el sazón y sofría 3 minutos.",
        "Agregue las papas y el caldo. Hierva y cocine 20 minutos a fuego medio.",
        "Añada el repollo y cocine 10 minutos más.",
        "Maje algunas papas para espesar, ajuste la sal y sirva con pan de agua."
      ],
      en: [
        "In a pot, brown the chorizo until it renders its fat.",
        "Add the onion, sofrito, and sazón and sauté 3 minutes.",
        "Add the potatoes and broth. Bring to a boil and cook 20 minutes on medium.",
        "Add the cabbage and cook 10 more minutes.",
        "Mash some potatoes to thicken, adjust the salt, and serve with water bread."
      ]
    }
  },
  {
    id: "sopa-maiz-tierno",
    category: "sopas",
    name: { es: "Sopa de Maíz Tierno", en: "Fresh Corn Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "4 mazorcas de maíz tierno",
        "1 cebolla picada",
        "2 cucharadas de sofrito",
        "2 cucharadas de mantequilla",
        "6 tazas de caldo de pollo",
        "2 papas en cubitos",
        "½ taza de leche evaporada",
        "Sal y pimienta al gusto",
        "Cilantro picado"
      ],
      en: [
        "4 ears fresh corn",
        "1 onion, chopped",
        "2 tablespoons sofrito",
        "2 tablespoons butter",
        "6 cups chicken broth",
        "2 potatoes, diced",
        "½ cup evaporated milk",
        "Salt and pepper to taste",
        "Chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Desgrane las mazorcas con un cuchillo. Guarde las tusas (los centros).",
        "En una olla, sofría la cebolla y el sofrito en la mantequilla.",
        "Añada el caldo, las tusas y las papas y cocine 15 minutos. Saque las tusas.",
        "Agregue los granos de maíz y cocine 10 minutos. Licúe la mitad de la sopa y regrésela a la olla para espesar.",
        "Añada la leche evaporada, sal y pimienta y caliente sin hervir. Sirva con cilantro."
      ],
      en: [
        "Cut the kernels off the ears with a knife. Keep the cobs.",
        "In a pot, sauté the onion and sofrito in the butter.",
        "Add the broth, cobs, and potatoes and cook 15 minutes. Remove the cobs.",
        "Add the corn kernels and cook 10 minutes. Blend half the soup and return it to the pot to thicken.",
        "Add the evaporated milk, salt, and pepper and heat without boiling. Serve with cilantro."
      ]
    }
  },
  {
    id: "asopao-jueyes",
    category: "sopas",
    name: { es: "Asopao de Jueyes", en: "Land Crab Asopao" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "1 lb de carne de juey (o de cangrejo), limpia",
        "1½ tazas de arroz grano corto",
        "8 tazas de caldo de mariscos o agua",
        "4 cucharadas de sofrito",
        "1 sobre de sazón con achiote",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 cucharadas de aceite con achiote",
        "Recao picado"
      ],
      en: [
        "1 lb land crab (or crab) meat, picked over",
        "1½ cups short grain rice",
        "8 cups seafood broth or water",
        "4 tablespoons sofrito",
        "1 packet sazón with annatto",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 tablespoons annatto oil",
        "Chopped culantro"
      ]
    },
    steps: {
      es: [
        "Revise la carne de juey y quite cualquier pedacito de carapacho.",
        "En una olla, caliente el aceite con achiote y sofría el sofrito, el sazón y la salsa de tomate 3 minutos.",
        "Añada el caldo, las aceitunas y las alcaparras y hierva.",
        "Agregue el arroz y cocine a fuego medio 20 minutos, revolviendo de vez en cuando.",
        "Añada el juey y cocine 5 minutos más. Debe quedar caldoso. Sirva con recao, tostones y limón."
      ],
      en: [
        "Check the crab meat and remove any bits of shell.",
        "In a pot, heat the annatto oil and sauté the sofrito, sazón, and tomato sauce 3 minutes.",
        "Add the broth, olives, and capers and bring to a boil.",
        "Add the rice and cook on medium 20 minutes, stirring now and then.",
        "Add the crab and cook 5 more minutes. It should be soupy. Serve with culantro, tostones, and lime."
      ]
    }
  },
  {
    id: "sopa-ajo-huevo",
    category: "sopas",
    name: { es: "Sopa de Ajo con Huevo", en: "Garlic Soup with Egg" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "8 dientes de ajo, en láminas",
        "¼ taza de aceite de oliva",
        "4 rebanadas de pan de agua del día anterior",
        "1 cucharadita de pimentón",
        "6 tazas de caldo de pollo",
        "4 huevos",
        "Sal al gusto",
        "Perejil picado"
      ],
      en: [
        "8 garlic cloves, sliced",
        "¼ cup olive oil",
        "4 slices day-old water bread",
        "1 teaspoon paprika",
        "6 cups chicken broth",
        "4 eggs",
        "Salt to taste",
        "Chopped parsley"
      ]
    },
    steps: {
      es: [
        "En una olla, dore el ajo en el aceite a fuego bajo sin que se queme.",
        "Añada el pan en pedazos y dórelo un poco. Retire del fuego y añada el pimentón.",
        "Agregue el caldo y hierva 10 minutos, hasta que el pan se deshaga.",
        "Baje el fuego, rompa los huevos dentro de la sopa y cocínelos 4-5 minutos, hasta que las claras estén firmes.",
        "Sirva un huevo en cada plato, con perejil. Es una sopa de origen español que se hacía mucho en la isla."
      ],
      en: [
        "In a pot, brown the garlic in the oil over low heat without burning.",
        "Add the bread in pieces and toast it lightly. Remove from the heat and stir in the paprika.",
        "Add the broth and boil 10 minutes, until the bread breaks down.",
        "Lower the heat, crack the eggs into the soup, and cook 4-5 minutes, until the whites are firm.",
        "Serve one egg per bowl, with parsley. It's a soup of Spanish origin that was very common on the island."
      ]
    }
  }
);
