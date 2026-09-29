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
    servings: 2,
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
  }
);
