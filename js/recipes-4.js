/* Recetas añadidas — tercera ampliación (2026-10).
 *
 * Clásicos puertorriqueños que aún faltaban: platos de fonda y de diario
 * (carne bif, salmón y atún guisados, arroz chino boricua, arroz apastelado),
 * frituras y entremeses (domplines, yaniqueques, pastelillos de queso y de
 * pollo, alcapurrias de jueyes) y postres de celebración (sopa borracha,
 * mazamorra). Segunda tanda: riñoncitos y fricasé de cerdo, cetí, ostiones,
 * mofongo de mariscos, pastas criollas, marrayo, coquimol, polvo de amor y
 * ponqué. Tercera tanda: tragos tropicales (mai tai, planter's punch,
 * daiquirí de mangó, mojito de parcha, coco loco, pitorro de parcha…).
 * Cuarta tanda: platos típicos de pueblos (Piñones-Loíza, Luquillo, Orocovis,
 * Guavate-Cayey, Hatillo, Lares, Mayagüez, Yauco).
 * Quinta tanda: mariscos y frituras de playa (pulpo a la parrilla, carrucho,
 * calamares, chicharrones de pescado, empanadillas de carrucho y camarones…).
 * Versiones propias redactadas para esta app. Todas van en
 * categorías que ya existían. */
recipes.push(
  // ── SOPAS ──
  {
    id: "sopon-pollo-arroz",
    category: "sopas",
    name: { es: "Sopón de Pollo con Arroz", en: "Chicken and Rice Sopón" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de presas de pollo",
        "10 tazas de agua",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de arroz de grano mediano",
        "2 papas, peladas y en cubos",
        "1 zanahoria, en ruedas",
        "1 taza de calabaza, en cubos",
        "2 hojas de laurel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds chicken pieces",
        "10 cups water",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup medium-grain rice",
        "2 potatoes, peeled and cubed",
        "1 carrot, sliced",
        "1 cup calabaza (West Indian pumpkin), cubed",
        "2 bay leaves",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el pollo en el agua con el laurel y sal por 30 minutos. Retire el pollo, desmenúcelo y deseche huesos y pellejo.",
        "En la misma olla, añada el sofrito y el sazón al caldo.",
        "Agregue las papas, la zanahoria y la calabaza. Cocine 10 minutos.",
        "Añada el arroz lavado y el pollo desmenuzado. Cocine a fuego medio unos 20 minutos, hasta que el arroz esté blando y la calabaza se deshaga un poco y espese el caldo.",
        "Ajuste la sal y la pimienta. Sirva bien caliente: es el sopón de los días lluviosos y de cuando alguien está enfermo."
      ],
      en: [
        "Boil the chicken in the water with the bay leaves and salt for 30 minutes. Remove the chicken, shred it and discard bones and skin.",
        "In the same pot, add the sofrito and sazón to the broth.",
        "Add the potatoes, carrot and calabaza. Cook 10 minutes.",
        "Add the rinsed rice and the shredded chicken. Cook over medium heat about 20 minutes, until the rice is soft and the calabaza breaks down a little and thickens the broth.",
        "Adjust salt and pepper. Serve piping hot: it's the sopón for rainy days and for when someone is sick."
      ]
    }
  },

  // ── ARROCES ──
  {
    id: "arroz-apastelado",
    category: "arroces",
    name: { es: "Arroz Apastelado", en: "Pastel-Flavored Rice (Arroz Apastelado)" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de arroz de grano mediano",
        "1 libra de carne de cerdo, en cubos pequeños",
        "1 lata de 15 onzas de gandules, escurridos",
        "½ taza de sofrito",
        "¼ taza de aceite de achiote",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas, en ruedas",
        "1 cucharada de alcaparras",
        "4 tazas de agua",
        "2 hojas de plátano, limpias",
        "Sal al gusto"
      ],
      en: [
        "3 cups medium-grain rice",
        "1 pound pork, in small cubes",
        "1 can (15 oz) pigeon peas (gandules), drained",
        "½ cup sofrito",
        "¼ cup annatto oil",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "¼ cup stuffed olives, sliced",
        "1 tablespoon capers",
        "4 cups water",
        "2 plantain leaves, cleaned",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, dore la carne de cerdo en el aceite de achiote por 10 minutos.",
        "Añada el sofrito, el sazón, la salsa de tomate, las aceitunas y las alcaparras. Sofría 5 minutos: es el mismo guiso que llevan los pasteles.",
        "Agregue los gandules, el agua y sal. Cuando hierva, añada el arroz lavado y cocine destapado a fuego medio hasta que se seque el agua.",
        "Voltee el arroz de abajo hacia arriba, cúbralo con las hojas de plátano y tape el caldero.",
        "Cocine a fuego bajo 25–30 minutos. Las hojas le dan al arroz el aroma de los pasteles, sin tener que amarrar ninguno."
      ],
      en: [
        "In a caldero, brown the pork in the annatto oil for 10 minutes.",
        "Add the sofrito, sazón, tomato sauce, olives and capers. Sauté 5 minutes: it's the same filling used in pasteles.",
        "Add the gandules, water and salt. When it boils, add the rinsed rice and cook uncovered over medium heat until the water is absorbed.",
        "Turn the rice from bottom to top, cover it with the plantain leaves and put the lid on.",
        "Cook over low heat 25–30 minutes. The leaves give the rice the aroma of pasteles without having to tie a single one."
      ]
    }
  },
  {
    id: "arroz-chino-boricua",
    category: "arroces",
    name: { es: "Arroz Chino Boricua", en: "Puerto Rican-Style Fried Rice (Arroz Chino)" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "4 tazas de arroz cocido (blanco, del día anterior), frío",
        "1 taza de pollo cocido, en cubitos",
        "1 taza de jamón de cocinar, en cubitos",
        "½ libra de camarones, pelados",
        "2 huevos, batidos",
        "1 taza de habichuelas tiernas (judías), picadas",
        "4 cebollines, picados",
        "3 cucharadas de salsa de soya",
        "1 cucharada de salsa de ostras",
        "3 cucharadas de aceite vegetal",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 cups day-old cooked white rice, cold",
        "1 cup cooked chicken, diced",
        "1 cup cooking ham, diced",
        "½ pound shrimp, peeled",
        "2 eggs, beaten",
        "1 cup green beans, chopped",
        "4 scallions, chopped",
        "3 tablespoons soy sauce",
        "1 tablespoon oyster sauce",
        "3 tablespoons vegetable oil",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Caliente 1 cucharada de aceite en un sartén grande o wok y haga un revoltillo fino con los huevos. Retire y córtelo en tiritas.",
        "Añada otra cucharada de aceite y sofría los camarones 2 minutos. Agregue el jamón, el pollo y las habichuelas tiernas, y cocine 3 minutos más.",
        "Añada el resto del aceite y el arroz frío, separando los granos con la cuchara. Saltee a fuego alto 5 minutos.",
        "Agregue la salsa de soya, la salsa de ostras, el huevo y la mitad de los cebollines. Mezcle hasta que el arroz tome color parejo.",
        "Sirva con el resto del cebollín por encima, como en los restaurantes chinos de la isla, con tostones o papas fritas al lado."
      ],
      en: [
        "Heat 1 tablespoon of oil in a large skillet or wok and make a thin scramble with the eggs. Remove and cut into strips.",
        "Add another tablespoon of oil and sauté the shrimp 2 minutes. Add the ham, chicken and green beans and cook 3 more minutes.",
        "Add the rest of the oil and the cold rice, breaking up the grains with the spoon. Stir-fry over high heat 5 minutes.",
        "Add the soy sauce, oyster sauce, egg and half the scallions. Toss until the rice is evenly colored.",
        "Serve topped with the rest of the scallions, as in the island's Chinese restaurants, with tostones or French fries on the side."
      ]
    }
  },
  {
    id: "arroz-corned-beef",
    category: "arroces",
    name: { es: "Arroz con Carne Bif (Corned Beef)", en: "Rice with Corned Beef" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano mediano",
        "1 lata de 12 onzas de carne bif (corned beef)",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "2 papas, peladas y en cubitos",
        "2 cucharadas de aceite vegetal",
        "2½ tazas de agua",
        "Sal al gusto"
      ],
      en: [
        "2 cups medium-grain rice",
        "1 can (12 oz) corned beef",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "2 potatoes, peeled and diced",
        "2 tablespoons vegetable oil",
        "2½ cups water",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, sofría el sofrito en el aceite por 2 minutos.",
        "Añada la carne bif, desmenuzándola con la cuchara, el sazón, la salsa de tomate y las papas. Cocine 5 minutos.",
        "Agregue el agua y pruebe la sal: la carne bif ya es salada, así que añada poca o ninguna.",
        "Cuando hierva, añada el arroz lavado y cocine destapado hasta que se seque el agua.",
        "Voltee el arroz, tape y cocine a fuego bajo 20–25 minutos. Sirva con aguacate o tostones."
      ],
      en: [
        "In a caldero, sauté the sofrito in the oil for 2 minutes.",
        "Add the corned beef, breaking it up with the spoon, the sazón, tomato sauce and potatoes. Cook 5 minutes.",
        "Add the water and taste for salt: corned beef is already salty, so add little or none.",
        "When it boils, add the rinsed rice and cook uncovered until the water is absorbed.",
        "Turn the rice, cover and cook over low heat 20–25 minutes. Serve with avocado or tostones."
      ]
    }
  },

  // ── CARNES ──
  {
    id: "carne-bif-guisada",
    category: "carnes",
    name: { es: "Carne Bif Guisada (Corned Beef Guisado)", en: "Stewed Corned Beef (Carne Bif Guisada)" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lata de 12 onzas de carne bif (corned beef)",
        "2 papas, peladas y en cubitos",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 cebolla, en ruedas finas",
        "¼ taza de aceitunas rellenas",
        "½ taza de agua",
        "1 cucharada de aceite vegetal"
      ],
      en: [
        "1 can (12 oz) corned beef",
        "2 potatoes, peeled and diced",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 onion, thinly sliced",
        "¼ cup stuffed olives",
        "½ cup water",
        "1 tablespoon vegetable oil"
      ]
    },
    steps: {
      es: [
        "En un sartén hondo, sofría la cebolla y el sofrito en el aceite hasta que la cebolla ablande.",
        "Añada las papas, la salsa de tomate y el agua. Tape y cocine 10 minutos, hasta que las papas estén casi blandas.",
        "Agregue la carne bif desmenuzada y las aceitunas. Cocine destapado 5 minutos, moviendo de vez en cuando.",
        "No añada sal: la carne enlatada ya la trae.",
        "Sirva con arroz blanco y amarillos fritos, o como relleno de sándwich o de pastelillos."
      ],
      en: [
        "In a deep skillet, sauté the onion and sofrito in the oil until the onion softens.",
        "Add the potatoes, tomato sauce and water. Cover and cook 10 minutes, until the potatoes are almost tender.",
        "Add the crumbled corned beef and the olives. Cook uncovered 5 minutes, stirring now and then.",
        "Don't add salt: the canned meat already has it.",
        "Serve with white rice and fried sweet plantains, or as a sandwich or pastelillo filling."
      ]
    }
  },
  {
    id: "salchichas-guisadas",
    category: "carnes",
    name: { es: "Salchichas Guisadas con Papas", en: "Stewed Vienna Sausages with Potatoes" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 4.6 onzas de salchichas, en ruedas",
        "3 papas, peladas y en cubitos",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 cucharadita de sazón",
        "1 taza de agua",
        "1 cucharada de aceite vegetal"
      ],
      en: [
        "2 cans (4.6 oz each) Vienna sausages, sliced",
        "3 potatoes, peeled and diced",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 teaspoon sazón",
        "1 cup water",
        "1 tablespoon vegetable oil"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite por 2 minutos.",
        "Añada las papas, la salsa de tomate, el sazón y el agua. Tape y cocine 12 minutos.",
        "Agregue las salchichas y cocine destapado 5 minutos más, hasta que la salsa espese.",
        "Sirva con arroz blanco: es el almuerzo rápido de toda la vida en las casas de la isla."
      ],
      en: [
        "Sauté the sofrito in the oil for 2 minutes.",
        "Add the potatoes, tomato sauce, sazón and water. Cover and cook 12 minutes.",
        "Add the sausages and cook uncovered 5 more minutes, until the sauce thickens.",
        "Serve with white rice: it's the classic quick lunch in island homes."
      ]
    }
  },

  // ── EMPAREDADOS ──
  {
    id: "sandwich-ensalada-pollo",
    category: "emparedados",
    name: { es: "Sandwichitos de Ensalada de Pollo", en: "Chicken Salad Party Sandwiches" },
    time: "40 min",
    servings: 12,
    ingredients: {
      es: [
        "2 pechugas de pollo",
        "½ taza de mayonesa",
        "¼ taza de pimientos morrones, picados",
        "2 cucharadas de cebolla, picadita",
        "1 tallo de apio, picadito",
        "1 cucharadita de mostaza",
        "1 pan de molde grande (24 rebanadas), sin corteza",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 chicken breasts",
        "½ cup mayonnaise",
        "¼ cup roasted red peppers (pimientos morrones), chopped",
        "2 tablespoons onion, finely chopped",
        "1 celery stalk, finely chopped",
        "1 teaspoon mustard",
        "1 large loaf sandwich bread (24 slices), crusts removed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las pechugas en agua con sal 20 minutos. Deje enfriar y desmenúcelas bien finas.",
        "Mezcle el pollo con la mayonesa, los pimientos, la cebolla, el apio, la mostaza, sal y pimienta.",
        "Unte la mezcla en la mitad de las rebanadas y cúbralas con las otras.",
        "Corte cada sándwich en 2 o 4 triángulos y tápelos con un paño húmedo para que el pan no se seque.",
        "Refrigere hasta servir: son, junto al sándwich de mezcla, los de todas las fiestas y bautizos."
      ],
      en: [
        "Boil the breasts in salted water 20 minutes. Let cool and shred very finely.",
        "Mix the chicken with the mayonnaise, peppers, onion, celery, mustard, salt and pepper.",
        "Spread the mixture on half the slices and top with the rest.",
        "Cut each sandwich into 2 or 4 triangles and cover with a damp towel so the bread doesn't dry out.",
        "Refrigerate until serving: along with the sándwich de mezcla, they're at every party and baptism."
      ]
    }
  },

  // ── PESCADOS ──
  {
    id: "salmon-guisado",
    category: "pescados",
    name: { es: "Salmón Guisado", en: "Stewed Canned Salmon" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lata de 14.75 onzas de salmón, escurrido",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "2 papas, peladas y en cubitos",
        "1 cebolla, en ruedas",
        "¼ taza de aceitunas rellenas",
        "½ taza de agua",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "1 can (14.75 oz) salmon, drained",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "2 potatoes, peeled and diced",
        "1 onion, sliced",
        "¼ cup stuffed olives",
        "½ cup water",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Quite la piel y las espinas grandes del salmón y sepárelo en trozos.",
        "Sofría la cebolla y el sofrito en el aceite hasta que la cebolla ablande.",
        "Añada las papas, la salsa de tomate y el agua. Tape y cocine 10 minutos.",
        "Agregue el salmón y las aceitunas y cocine 5 minutos más, moviendo con cuidado para que no se deshaga del todo.",
        "Sirva con arroz blanco o con viandas hervidas."
      ],
      en: [
        "Remove the skin and large bones from the salmon and break it into chunks.",
        "Sauté the onion and sofrito in the oil until the onion softens.",
        "Add the potatoes, tomato sauce and water. Cover and cook 10 minutes.",
        "Add the salmon and olives and cook 5 more minutes, stirring gently so it doesn't fall apart completely.",
        "Serve with white rice or boiled root vegetables (viandas)."
      ]
    }
  },
  {
    id: "atun-guisado",
    category: "pescados",
    name: { es: "Atún Guisado", en: "Stewed Tuna" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 5 onzas de atún en agua, escurrido",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 papa, pelada y en cubitos",
        "2 cucharadas de pimientos morrones, picados",
        "1 cucharada de alcaparras",
        "½ taza de agua",
        "1 cucharada de aceite de oliva"
      ],
      en: [
        "2 cans (5 oz each) tuna in water, drained",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 potato, peeled and diced",
        "2 tablespoons roasted red peppers (pimientos morrones), chopped",
        "1 tablespoon capers",
        "½ cup water",
        "1 tablespoon olive oil"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite por 2 minutos.",
        "Añada la papa, la salsa de tomate y el agua. Tape y cocine 10 minutos.",
        "Agregue el atún desmenuzado, los pimientos y las alcaparras. Cocine 5 minutos.",
        "Sirva con arroz blanco, tostones o dentro de un pan sobao."
      ],
      en: [
        "Sauté the sofrito in the oil for 2 minutes.",
        "Add the potato, tomato sauce and water. Cover and cook 10 minutes.",
        "Add the flaked tuna, peppers and capers. Cook 5 minutes.",
        "Serve with white rice, tostones or inside a pan sobao."
      ]
    }
  },

  // ── GRANOS ──
  {
    id: "habichuelas-rosadas-guisadas",
    category: "granos",
    name: { es: "Habichuelas Rosadas Guisadas", en: "Stewed Pink Beans" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15.5 onzas de habichuelas rosadas, con su líquido",
        "¼ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "1 taza de calabaza, en cubos",
        "1 papa, pelada y en cubos",
        "¼ taza de jamón de cocinar, en cubitos",
        "1 cucharada de aceite de oliva",
        "1½ tazas de agua",
        "Sal al gusto"
      ],
      en: [
        "2 cans (15.5 oz each) pink beans, with their liquid",
        "¼ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "1 cup calabaza (West Indian pumpkin), cubed",
        "1 potato, peeled and cubed",
        "¼ cup cooking ham, diced",
        "1 tablespoon olive oil",
        "1½ cups water",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En una olla, sofría el jamón en el aceite 2 minutos. Añada el sofrito y sofría 2 minutos más.",
        "Agregue el sazón, la salsa de tomate, la calabaza, la papa y el agua. Cocine tapado 15 minutos.",
        "Añada las habichuelas con su líquido y cocine destapado 15 minutos a fuego medio-bajo.",
        "Machaque unos pedazos de calabaza contra la olla para espesar el caldo. Ajuste la sal.",
        "Sirva sobre arroz blanco: es la pareja más servida de la mesa boricua."
      ],
      en: [
        "In a pot, sauté the ham in the oil 2 minutes. Add the sofrito and sauté 2 more minutes.",
        "Add the sazón, tomato sauce, calabaza, potato and water. Cook covered 15 minutes.",
        "Add the beans with their liquid and cook uncovered 15 minutes over medium-low heat.",
        "Mash a few pieces of calabaza against the pot to thicken the broth. Adjust salt.",
        "Serve over white rice: it's the most-served pairing on the Puerto Rican table."
      ]
    }
  },

  // ── HUEVOS ──
  {
    id: "jamonilla-huevos",
    category: "huevos",
    name: { es: "Jamonilla Frita con Huevos", en: "Fried Luncheon Meat with Eggs" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lata de 12 onzas de jamonilla, en lonjas",
        "4 huevos",
        "1 cucharada de aceite vegetal",
        "Pimienta al gusto"
      ],
      en: [
        "1 can (12 oz) luncheon meat (jamonilla), sliced",
        "4 eggs",
        "1 tablespoon vegetable oil",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite en un sartén y dore las lonjas de jamonilla 2 minutos por lado. Retire.",
        "En el mismo sartén, fría los huevos a su gusto o hágalos revoltillo.",
        "Sirva la jamonilla con los huevos, pan con mantequilla y café con leche, o con arroz blanco y tostones.",
        "La jamonilla es muy salada: no añada sal a los huevos."
      ],
      en: [
        "Heat the oil in a skillet and brown the luncheon meat slices 2 minutes per side. Remove.",
        "In the same skillet, fry the eggs to your liking or scramble them.",
        "Serve the meat with the eggs, buttered bread and café con leche, or with white rice and tostones.",
        "Luncheon meat is very salty: don't add salt to the eggs."
      ]
    }
  },

  // ── VEGETALES ──
  {
    id: "mofongo-yuca",
    category: "vegetales",
    name: { es: "Mofongo de Yuca", en: "Cassava Mofongo" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de yuca, pelada y en trozos",
        "4 dientes de ajo",
        "½ taza de chicharrón de cerdo",
        "3 cucharadas de aceite de oliva",
        "1 taza de caldo de pollo, caliente",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "2 pounds yuca (cassava), peeled and cut into chunks",
        "4 garlic cloves",
        "½ cup pork cracklings (chicharrón)",
        "3 tablespoons olive oil",
        "1 cup hot chicken broth",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con sal unos 20 minutos, hasta que esté blanda pero no se deshaga. Escurra y quite la fibra del centro.",
        "Fría los trozos de yuca en aceite caliente hasta que doren por fuera. Escurra sobre papel.",
        "Maje el ajo con sal y el aceite de oliva en el pilón.",
        "Añada la yuca y el chicharrón por partes y maje, rociando caldo caliente para que quede suave.",
        "Forme bolas o use un tazón para moldear. Sirva con carne frita, camarones al ajillo o caldo aparte."
      ],
      en: [
        "Boil the yuca in salted water about 20 minutes, until tender but not falling apart. Drain and remove the woody center fiber.",
        "Fry the yuca chunks in hot oil until golden outside. Drain on paper.",
        "Mash the garlic with salt and the olive oil in the pilón.",
        "Add the yuca and chicharrón in batches and mash, sprinkling hot broth so it stays soft.",
        "Shape into balls or mold in a bowl. Serve with fried pork, garlic shrimp or broth on the side."
      ]
    }
  },
  {
    id: "yuca-frita",
    category: "vegetales",
    name: { es: "Yuca Frita", en: "Fried Cassava" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de yuca, pelada y en bastones",
        "Aceite vegetal para freír",
        "1 cucharadita de sal"
      ],
      en: [
        "2 pounds yuca (cassava), peeled and cut into sticks",
        "Vegetable oil for frying",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Hierva los bastones de yuca en agua con sal 15–20 minutos, hasta que estén blandos pero firmes. Escurra y quite la fibra del centro.",
        "Séquelos bien con papel toalla: así no salpica el aceite y quedan más crujientes.",
        "Fría en aceite a 350°F hasta que estén dorados, unos 5 minutos.",
        "Escurra, espolvoree la sal y sirva con mayo-ketchup o con mojo de ajo."
      ],
      en: [
        "Boil the yuca sticks in salted water 15–20 minutes, until tender but firm. Drain and remove the woody center fiber.",
        "Dry them well with paper towels: the oil won't splatter and they'll be crispier.",
        "Fry in oil at 350°F until golden, about 5 minutes.",
        "Drain, sprinkle with the salt and serve with mayo-ketchup or garlic mojo."
      ]
    }
  },
  {
    id: "pastelon-yuca",
    category: "vegetales",
    name: { es: "Pastelón de Yuca", en: "Cassava and Beef Casserole (Pastelón de Yuca)" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de yuca, pelada y en trozos",
        "4 cucharadas de mantequilla",
        "½ taza de leche",
        "1 libra de carne molida de res",
        "½ taza de sofrito",
        "1 sobre de sazón",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas, picadas",
        "1 taza de queso de papa (cheddar), rallado",
        "2 huevos, batidos",
        "Sal al gusto"
      ],
      en: [
        "3 pounds yuca (cassava), peeled and cut into chunks",
        "4 tablespoons butter",
        "½ cup milk",
        "1 pound ground beef",
        "½ cup sofrito",
        "1 packet sazón",
        "½ cup tomato sauce",
        "¼ cup stuffed olives, chopped",
        "1 cup cheddar cheese, shredded",
        "2 eggs, beaten",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con sal hasta que esté muy blanda, unos 25 minutos. Escurra, quite la fibra y májela con la mantequilla y la leche hasta formar un puré.",
        "Para el relleno: dore la carne con el sofrito, el sazón, la salsa de tomate y las aceitunas por 15 minutos.",
        "Caliente el horno a 350°F y engrase un molde de 9 × 13 pulgadas.",
        "Extienda la mitad del puré, cubra con la carne y la mitad del queso, y termine con el resto del puré.",
        "Pinte con los huevos batidos, cubra con el queso restante y hornee 30–35 minutos, hasta que dore. Deje reposar 10 minutos antes de cortar."
      ],
      en: [
        "Boil the yuca in salted water until very soft, about 25 minutes. Drain, remove the fiber and mash with the butter and milk into a purée.",
        "For the filling: brown the beef with the sofrito, sazón, tomato sauce and olives for 15 minutes.",
        "Heat the oven to 350°F and grease a 9 × 13-inch dish.",
        "Spread half the purée, top with the beef and half the cheese, and finish with the rest of the purée.",
        "Brush with the beaten eggs, top with the remaining cheese and bake 30–35 minutes, until golden. Let rest 10 minutes before cutting."
      ]
    }
  },

  // ── ENTREMESES ──
  {
    id: "domplines",
    category: "entremeses",
    name: { es: "Domplines de Loíza", en: "Domplines (Fried Dumplings from Loíza)" },
    time: "40 min",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 cucharada de polvo de hornear",
        "1 cucharadita de sal",
        "1 cucharada de azúcar",
        "2 cucharadas de mantequilla, fría",
        "1 taza de leche de coco",
        "Aceite vegetal para freír"
      ],
      en: [
        "3 cups all-purpose flour",
        "1 tablespoon baking powder",
        "1 teaspoon salt",
        "1 tablespoon sugar",
        "2 tablespoons cold butter",
        "1 cup coconut milk",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina, el polvo de hornear, la sal y el azúcar. Desmorone la mantequilla con los dedos hasta que parezca arena.",
        "Añada la leche de coco poco a poco y amase hasta tener una masa suave que no se pegue. Repose tapada 15 minutos.",
        "Divida en 12 bolitas y aplánelas a ¼ de pulgada, como discos.",
        "Fría en aceite a 350°F, 2–3 minutos por lado, hasta que inflen y doren.",
        "Sírvalos calientes con bacalao guisado o solos, como en los kioscos de Piñones y Loíza."
      ],
      en: [
        "Mix the flour, baking powder, salt and sugar. Rub the butter in with your fingers until it looks like sand.",
        "Add the coconut milk little by little and knead into a soft dough that doesn't stick. Rest covered 15 minutes.",
        "Divide into 12 balls and flatten them to ¼ inch, like disks.",
        "Fry in oil at 350°F, 2–3 minutes per side, until puffed and golden.",
        "Serve hot with stewed salt cod or on their own, as at the kiosks of Piñones and Loíza."
      ]
    }
  },
  {
    id: "yaniqueques",
    category: "entremeses",
    name: { es: "Yaniqueques", en: "Yaniqueques (Crispy Johnnycakes)" },
    time: "35 min",
    servings: 10,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de sal",
        "2 cucharadas de mantequilla, derretida",
        "½ taza de agua",
        "Aceite vegetal para freír"
      ],
      en: [
        "2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "½ teaspoon salt",
        "2 tablespoons butter, melted",
        "½ cup water",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina, el polvo de hornear y la sal. Añada la mantequilla y el agua y amase hasta tener una masa lisa.",
        "Divida en 10 bolitas y estírelas con el rodillo hasta que queden muy finas, casi transparentes.",
        "Haga dos o tres cortes pequeños en el centro de cada una para que no se inflen.",
        "Fría en aceite a 350°F hasta que estén doradas y crujientes, 1–2 minutos por lado.",
        "Escurra y sirva con sal por encima, en la playa o con una cerveza bien fría."
      ],
      en: [
        "Mix the flour, baking powder and salt. Add the butter and water and knead into a smooth dough.",
        "Divide into 10 balls and roll them out very thin, almost see-through.",
        "Make two or three small slits in the center of each so they don't puff.",
        "Fry in oil at 350°F until golden and crisp, 1–2 minutes per side.",
        "Drain and serve sprinkled with salt, at the beach or with an ice-cold beer."
      ]
    }
  },
  {
    id: "pastelillos-queso",
    category: "entremeses",
    name: { es: "Pastelillos de Queso", en: "Cheese Turnovers (Pastelillos de Queso)" },
    time: "30 min",
    servings: 10,
    ingredients: {
      es: [
        "10 discos para pastelillos",
        "2 tazas de queso de papa (cheddar) o mozzarella, rallado",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "10 turnover wrappers (discos)",
        "2 cups cheddar or mozzarella cheese, shredded",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Ponga 3 cucharadas de queso en el centro de cada disco.",
        "Pinte el borde con huevo, doble en media luna y selle apretando con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que inflen y doren.",
        "Escurra sobre papel y sirva enseguida, con el queso derretido."
      ],
      en: [
        "Place 3 tablespoons of cheese in the center of each wrapper.",
        "Brush the edge with egg, fold into a half-moon and seal by pressing with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until puffed and golden.",
        "Drain on paper and serve right away, while the cheese is melted."
      ]
    }
  },
  {
    id: "pastelillos-pollo",
    category: "entremeses",
    name: { es: "Pastelillos de Pollo", en: "Chicken Turnovers (Pastelillos de Pollo)" },
    time: "50 min",
    servings: 12,
    ingredients: {
      es: [
        "12 discos para pastelillos",
        "1 pechuga de pollo grande",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 cucharadita de sazón",
        "2 cucharadas de aceitunas rellenas, picadas",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "12 turnover wrappers (discos)",
        "1 large chicken breast",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 teaspoon sazón",
        "2 tablespoons stuffed olives, chopped",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva la pechuga en agua con sal 20 minutos y desmenúcela fina.",
        "Sofría el sofrito, añada el pollo, la salsa de tomate, el sazón y las aceitunas. Cocine hasta que la salsa se seque casi del todo y deje enfriar: un relleno caliente o aguado rompe la masa.",
        "Ponga 2 cucharadas de relleno en cada disco, pinte el borde con huevo, doble y selle con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que doren.",
        "Escurra y sirva calientes con pique o mayo-ketchup."
      ],
      en: [
        "Boil the breast in salted water 20 minutes and shred finely.",
        "Sauté the sofrito, then add the chicken, tomato sauce, sazón and olives. Cook until the sauce is almost dry and let cool: a hot or watery filling tears the dough.",
        "Place 2 tablespoons of filling on each wrapper, brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until golden.",
        "Drain and serve hot with pique or mayo-ketchup."
      ]
    }
  },
  {
    id: "alcapurrias-jueyes",
    category: "entremeses",
    name: { es: "Alcapurrias de Jueyes", en: "Land Crab Alcapurrias" },
    time: "1 hr 30 min",
    servings: 15,
    ingredients: {
      es: [
        "2 libras de yautía, pelada y rallada",
        "6 guineos verdes, pelados y rallados",
        "¼ taza de aceite de achiote",
        "1 libra de carne de jueyes, limpia",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 cucharadita de sazón",
        "Aceite vegetal para freír",
        "1 cucharadita de sal"
      ],
      en: [
        "2 pounds yautía (taro root), peeled and grated",
        "6 green bananas, peeled and grated",
        "¼ cup annatto oil",
        "1 pound land crab meat, cleaned",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 teaspoon sazón",
        "Vegetable oil for frying",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Para la masa: mezcle la yautía y los guineos rallados con el aceite de achiote y la sal. Refrigere 30 minutos para que tome cuerpo.",
        "Para el relleno: sofría el sofrito, añada la carne de jueyes, la salsa de tomate y el sazón, y cocine 10 minutos hasta que seque. Revise que no queden pedacitos de carapacho.",
        "Sobre papel encerado o una hoja de plátano engrasada, extienda 2 cucharadas de masa, ponga 1 cucharada de relleno y cubra con más masa, dándole forma alargada.",
        "Deslice cada alcapurria al aceite a 350°F y fría 4–5 minutos por lado, hasta que estén bien doradas.",
        "Escurra y sirva calientes, como en los kioscos de Luquillo y Piñones."
      ],
      en: [
        "For the dough: mix the grated yautía and green bananas with the annatto oil and salt. Refrigerate 30 minutes so it firms up.",
        "For the filling: sauté the sofrito, add the crab meat, tomato sauce and sazón and cook 10 minutes until dry. Check for any bits of shell.",
        "On wax paper or a greased plantain leaf, spread 2 tablespoons of dough, add 1 tablespoon of filling and cover with more dough, shaping it long.",
        "Slide each alcapurria into oil at 350°F and fry 4–5 minutes per side, until deep golden.",
        "Drain and serve hot, as at the kiosks of Luquillo and Piñones."
      ]
    }
  },

  // ── POSTRES ──
  {
    id: "mazamorra",
    category: "postres",
    name: { es: "Mazamorra (Crema de Maíz Tierno)", en: "Mazamorra (Fresh Corn Pudding)" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "6 mazorcas de maíz tierno",
        "3 tazas de leche",
        "1 taza de leche de coco",
        "¾ taza de azúcar",
        "2 rajas de canela",
        "¼ cucharadita de sal",
        "Canela en polvo para decorar"
      ],
      en: [
        "6 ears fresh corn",
        "3 cups milk",
        "1 cup coconut milk",
        "¾ cup sugar",
        "2 cinnamon sticks",
        "¼ teaspoon salt",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Desgrane el maíz y lícuelo con la leche hasta que quede bien fino.",
        "Cuele por un colador fino o una tela, exprimiendo bien. Deseche el bagazo.",
        "En una olla, mezcle el líquido con la leche de coco, el azúcar, la canela y la sal.",
        "Cocine a fuego medio-bajo sin dejar de mover con cuchara de madera, unos 20 minutos, hasta que espese como una natilla.",
        "Sirva en platitos, espolvoree canela y refrigere. Es el postre de la cosecha de maíz en el campo."
      ],
      en: [
        "Cut the kernels off the cobs and blend with the milk until very smooth.",
        "Strain through a fine sieve or cloth, squeezing well. Discard the pulp.",
        "In a pot, combine the liquid with the coconut milk, sugar, cinnamon and salt.",
        "Cook over medium-low heat, stirring constantly with a wooden spoon, about 20 minutes, until thick like a custard.",
        "Spoon into small dishes, dust with cinnamon and chill. It's the corn-harvest dessert of the countryside."
      ]
    }
  },
  {
    id: "sopa-borracha",
    category: "postres",
    name: { es: "Sopa Borracha", en: "Sopa Borracha (Rum-Soaked Wedding Cake)" },
    time: "1 hr 30 min",
    servings: 16,
    ingredients: {
      es: [
        "1 bizcocho de vainilla de 9 × 13 pulgadas, del día anterior",
        "2 tazas de azúcar",
        "1 taza de agua",
        "1 taza de vino dulce o moscatel",
        "½ taza de ron",
        "4 rajas de canela",
        "6 clavos de olor",
        "1 cucharadita de vainilla",
        "Merengue: 4 claras de huevo",
        "½ taza de azúcar"
      ],
      en: [
        "1 vanilla sponge cake (9 × 13 inches), a day old",
        "2 cups sugar",
        "1 cup water",
        "1 cup sweet wine or muscatel",
        "½ cup rum",
        "4 cinnamon sticks",
        "6 whole cloves",
        "1 teaspoon vanilla",
        "Meringue: 4 egg whites",
        "½ cup sugar"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con las 2 tazas de azúcar, la canela y los clavos por 10 minutos, hasta formar un almíbar ligero.",
        "Añada el vino y el ron y hierva 5 minutos más. Retire del fuego, cuele, añada la vainilla y deje refrescar un poco.",
        "Corte el bizcocho en cuadros, colóquelos en una dulcera y báñelos poco a poco con el almíbar hasta que queden bien empapados.",
        "Bata las claras a punto de nieve y añada la ½ taza de azúcar en lluvia hasta que el merengue esté firme y brillante. Dore por encima con un soplete o 3–4 minutos en el horno a 400°F, para que no quede crudo.",
        "Refrigere al menos 2 horas. Es el postre de las bodas de antes, servido en copitas."
      ],
      en: [
        "Boil the water with the 2 cups of sugar, the cinnamon and cloves for 10 minutes into a light syrup.",
        "Add the wine and rum and boil 5 more minutes. Remove from heat, strain, add the vanilla and let cool a little.",
        "Cut the cake into squares, arrange them in a serving dish and soak them gradually with the syrup until well drenched.",
        "Beat the whites to stiff peaks and add the ½ cup of sugar gradually until the meringue is firm and glossy. Brown the top with a torch or 3–4 minutes in a 400°F oven, so it isn't raw.",
        "Refrigerate at least 2 hours. It's the dessert of old-time weddings, served in little cups."
      ]
    }
  },
  {
    id: "flan-batata",
    category: "postres",
    name: { es: "Flan de Batata", en: "Sweet Potato Flan" },
    time: "1 hr 30 min",
    servings: 10,
    ingredients: {
      es: [
        "1½ tazas de batata blanca hervida y majada",
        "1 lata de 12 onzas de leche evaporada",
        "1 lata de 14 onzas de leche condensada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo",
        "1 taza de azúcar (para el caramelo)"
      ],
      en: [
        "1½ cups boiled and mashed white sweet potato (batata)",
        "1 can (12 oz) evaporated milk",
        "1 can (14 oz) sweetened condensed milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon",
        "1 cup sugar (for the caramel)"
      ]
    },
    steps: {
      es: [
        "Derrita el azúcar en el molde a fuego medio hasta que tome color ámbar y cubra el fondo y los lados. Deje enfriar.",
        "Licúe la batata con las leches, los huevos, la vainilla y la canela hasta que esté muy fina.",
        "Vierta en el molde acaramelado y cubra con papel de aluminio.",
        "Hornee a baño de María a 350°F por 1 hora, hasta que un cuchillo salga limpio.",
        "Deje enfriar, refrigere toda la noche y desmolde volteando sobre un platón."
      ],
      en: [
        "Melt the sugar in the mold over medium heat until amber and swirl to coat the bottom and sides. Let cool.",
        "Blend the sweet potato with the milks, eggs, vanilla and cinnamon until very smooth.",
        "Pour into the caramelized mold and cover with foil.",
        "Bake in a water bath at 350°F for 1 hour, until a knife comes out clean.",
        "Let cool, refrigerate overnight and unmold by flipping onto a platter."
      ]
    }
  },

  // ── CÓCTELES ──
  {
    id: "coquito-guayaba",
    category: "cocteles",
    name: { es: "Coquito de Guayaba", en: "Guava Coquito" },
    time: "15 min + 4 hr de frío",
    servings: 12,
    ingredients: {
      es: [
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "8 onzas de pasta de guayaba, en cubitos",
        "1 taza de ron blanco",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "1 can (15 oz) cream of coconut",
        "1 can (13.5 oz) coconut milk",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "8 oz guava paste, cubed",
        "1 cup white rum",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Derrita la pasta de guayaba con la leche evaporada a fuego bajo, moviendo, hasta que no queden grumos. Deje enfriar.",
        "Licúe la guayaba con la crema de coco, la leche de coco, la leche condensada, la vainilla y la canela.",
        "Añada el ron y licúe unos segundos más.",
        "Embotelle y refrigere al menos 4 horas. Agite antes de servir: la guayaba tiende a asentarse."
      ],
      en: [
        "Melt the guava paste with the evaporated milk over low heat, stirring, until no lumps remain. Let cool.",
        "Blend the guava with the cream of coconut, coconut milk, condensed milk, vanilla and cinnamon.",
        "Add the rum and blend a few more seconds.",
        "Bottle and refrigerate at least 4 hours. Shake before serving: the guava tends to settle."
      ]
    }
  },

  // ── Segunda tanda (2026-10): carnes, pescados, pastas, postres y otros ──

  // ── CARNES ──
  {
    id: "rinones-guisados",
    category: "carnes",
    name: { es: "Riñoncitos Guisados", en: "Stewed Kidneys (Riñoncitos Guisados)" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de riñones de res",
        "½ taza de vinagre blanco (para el agua del remojo)",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "½ taza de vino seco",
        "2 papas, peladas y en cubos",
        "1 cebolla, en ruedas",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de aceite de oliva",
        "1 taza de agua",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds beef kidneys",
        "½ cup white vinegar (for the soaking water)",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "½ cup dry wine",
        "2 potatoes, peeled and cubed",
        "1 onion, sliced",
        "¼ cup stuffed olives",
        "2 tablespoons olive oil",
        "1 cup water",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Abra los riñones a lo largo y quite la parte blanca y dura del centro. Córtelos en trozos pequeños.",
        "Remójelos 30 minutos en agua fría con el vinagre. Escurra, enjuague bien y repita si todavía huelen fuerte: así pierden el olor.",
        "En un caldero, sofría la cebolla y el sofrito en el aceite. Añada los riñones y dore 5 minutos a fuego alto.",
        "Agregue el sazón, la salsa de tomate, el vino, las papas, las aceitunas y el agua. Tape y cocine a fuego medio-bajo 30 minutos, hasta que estén tiernos y la salsa espese.",
        "Ajuste la sal y la pimienta. Sirva con arroz blanco, como en las fondas de antes."
      ],
      en: [
        "Split the kidneys lengthwise and remove the tough white core. Cut into small pieces.",
        "Soak 30 minutes in cold water with the vinegar. Drain, rinse well and repeat if they still smell strong: this removes the odor.",
        "In a caldero, sauté the onion and sofrito in the oil. Add the kidneys and brown 5 minutes over high heat.",
        "Add the sazón, tomato sauce, wine, potatoes, olives and water. Cover and cook over medium-low heat 30 minutes, until tender and the sauce thickens.",
        "Adjust salt and pepper. Serve with white rice, as in the old-time fondas."
      ]
    }
  },
  {
    id: "fricase-cerdo",
    category: "carnes",
    name: { es: "Fricasé de Cerdo", en: "Pork Fricassee" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de carne de cerdo, en cubos",
        "4 dientes de ajo, majados",
        "1 cucharadita de orégano",
        "½ taza de sofrito",
        "½ taza de salsa de tomate",
        "½ taza de vino seco",
        "3 papas, peladas y en cubos",
        "1 pimiento verde, en tiras",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 hojas de laurel",
        "2 cucharadas de aceite vegetal",
        "1½ tazas de agua",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds pork, cubed",
        "4 garlic cloves, mashed",
        "1 teaspoon oregano",
        "½ cup sofrito",
        "½ cup tomato sauce",
        "½ cup dry wine",
        "3 potatoes, peeled and cubed",
        "1 green bell pepper, in strips",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 bay leaves",
        "2 tablespoons vegetable oil",
        "1½ cups water",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Adobe la carne con el ajo, el orégano, sal y pimienta. Deje reposar 30 minutos (o toda la noche en la nevera).",
        "En un caldero, dore la carne en el aceite a fuego alto, por partes, unos 10 minutos.",
        "Añada el sofrito y el pimiento y sofría 3 minutos. Agregue el vino y deje que reduzca un poco.",
        "Incorpore la salsa de tomate, las aceitunas, las alcaparras, el laurel y el agua. Tape y cocine a fuego bajo 40 minutos.",
        "Añada las papas y cocine 20 minutos más, hasta que la carne esté blanda y la salsa espesa. Sirva con arroz blanco y tostones."
      ],
      en: [
        "Season the meat with the garlic, oregano, salt and pepper. Let rest 30 minutes (or overnight in the fridge).",
        "In a caldero, brown the meat in the oil over high heat, in batches, about 10 minutes.",
        "Add the sofrito and bell pepper and sauté 3 minutes. Add the wine and let it reduce a little.",
        "Stir in the tomato sauce, olives, capers, bay leaves and water. Cover and cook over low heat 40 minutes.",
        "Add the potatoes and cook 20 more minutes, until the meat is tender and the sauce thick. Serve with white rice and tostones."
      ]
    }
  },
  {
    id: "chuletas-rellenas-mofongo",
    category: "carnes",
    name: { es: "Chuletas Rellenas de Mofongo", en: "Mofongo-Stuffed Pork Chops" },
    time: "1 hr 15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 chuletas de cerdo gruesas (1½ pulgadas)",
        "1 cucharadita de adobo",
        "2 plátanos verdes, pelados y en ruedas",
        "4 dientes de ajo",
        "¼ taza de chicharrón de cerdo",
        "2 cucharadas de aceite de oliva",
        "½ taza de caldo de pollo, caliente",
        "Aceite vegetal para freír"
      ],
      en: [
        "4 thick pork chops (1½ inches)",
        "1 teaspoon adobo",
        "2 green plantains, peeled and sliced",
        "4 garlic cloves",
        "¼ cup pork cracklings (chicharrón)",
        "2 tablespoons olive oil",
        "½ cup hot chicken broth",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Con un cuchillo fino, abra un bolsillo en el lado grueso de cada chuleta, sin atravesarla. Adóbelas por dentro y por fuera.",
        "Fría las ruedas de plátano a fuego medio hasta que estén blandas y doradas. Escurra.",
        "Maje el ajo con el aceite de oliva en el pilón. Añada el plátano y el chicharrón y maje, rociando caldo, hasta tener un mofongo suave.",
        "Rellene cada chuleta con el mofongo y ciérrela con palillos. Dore las chuletas 3 minutos por lado en un sartén con un poco de aceite.",
        "Termine en el horno a 400°F por 15–20 minutos, hasta que la carne llegue a 145°F por dentro. Deje reposar 3 minutos y quite los palillos antes de servir."
      ],
      en: [
        "With a thin knife, cut a pocket into the thick side of each chop without cutting through. Season inside and out with adobo.",
        "Fry the plantain slices over medium heat until soft and golden. Drain.",
        "Mash the garlic with the olive oil in the pilón. Add the plantain and chicharrón and mash, sprinkling broth, into a soft mofongo.",
        "Stuff each chop with the mofongo and close with toothpicks. Brown the chops 3 minutes per side in a skillet with a little oil.",
        "Finish in a 400°F oven for 15–20 minutes, until the meat reaches 145°F inside. Rest 3 minutes and remove the toothpicks before serving."
      ]
    }
  },

  // ── PESCADOS ──
  {
    id: "frituras-ceti",
    category: "pescados",
    name: { es: "Frituras de Cetí", en: "Cetí Fritters (Tiny River-Mouth Fish)" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de cetí, lavado y escurrido",
        "1 taza de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "2 huevos",
        "¼ taza de agua",
        "2 dientes de ajo, picaditos",
        "1 cucharada de cilantro, picado",
        "½ cucharadita de sal",
        "Aceite vegetal para freír"
      ],
      en: [
        "1 pound cetí (tiny river-mouth fish), rinsed and drained",
        "1 cup all-purpose flour",
        "½ teaspoon baking powder",
        "2 eggs",
        "¼ cup water",
        "2 garlic cloves, finely chopped",
        "1 tablespoon cilantro, chopped",
        "½ teaspoon salt",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Lave el cetí varias veces en un colador fino y escúrralo muy bien: se come entero, sin limpiar.",
        "Mezcle la harina, el polvo de hornear, los huevos, el agua, el ajo, el cilantro y la sal hasta tener una masa espesa.",
        "Incorpore el cetí con cuidado.",
        "Fría por cucharadas en aceite a 350°F, 2–3 minutos por lado, hasta que estén doradas.",
        "Escurra y sirva enseguida con limón. El cetí sólo se pesca en temporada (de septiembre a diciembre, en las desembocaduras de los ríos de Arecibo y del norte): fuera de ella use cetí congelado."
      ],
      en: [
        "Rinse the cetí several times in a fine strainer and drain very well: it's eaten whole, uncleaned.",
        "Mix the flour, baking powder, eggs, water, garlic, cilantro and salt into a thick batter.",
        "Gently fold in the cetí.",
        "Fry by spoonfuls in oil at 350°F, 2–3 minutes per side, until golden.",
        "Drain and serve right away with lime. Cetí is only caught in season (September to December, at the river mouths of Arecibo and the north coast): out of season use frozen cetí."
      ]
    }
  },
  {
    id: "ostiones-escabeche",
    category: "pescados",
    name: { es: "Ostiones en Escabeche", en: "Pickled Oysters (Ostiones en Escabeche)" },
    time: "30 min + 1 día de reposo",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de ostiones sin concha, con su jugo",
        "1 taza de aceite de oliva",
        "½ taza de vinagre blanco",
        "1 cebolla grande, en ruedas finas",
        "4 dientes de ajo, en lascas",
        "10 granos de pimienta",
        "2 hojas de laurel",
        "½ cucharadita de sal"
      ],
      en: [
        "1 pound shucked oysters, with their liquor",
        "1 cup olive oil",
        "½ cup white vinegar",
        "1 large onion, thinly sliced",
        "4 garlic cloves, sliced",
        "10 peppercorns",
        "2 bay leaves",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Ponga los ostiones con su jugo en una olla a fuego medio y cocine 3–4 minutos, hasta que los bordes se encrespen. Escurra.",
        "En otra olla, cocine a fuego bajo el aceite con la cebolla, el ajo, la pimienta y el laurel 10 minutos, sin dorar.",
        "Retire del fuego y añada el vinagre y la sal.",
        "Coloque los ostiones en un frasco de cristal y cúbralos con el escabeche tibio.",
        "Refrigere al menos 24 horas y consuma en 3 días. Sirva frío con galletas, como en los kioscos de Boquerón."
      ],
      en: [
        "Put the oysters and their liquor in a pot over medium heat and cook 3–4 minutes, until the edges curl. Drain.",
        "In another pot, cook the oil with the onion, garlic, peppercorns and bay leaves over low heat 10 minutes, without browning.",
        "Remove from heat and add the vinegar and salt.",
        "Place the oysters in a glass jar and cover with the warm escabeche.",
        "Refrigerate at least 24 hours and eat within 3 days. Serve cold with crackers, as at the kiosks of Boquerón."
      ]
    }
  },
  {
    id: "mofongo-relleno-mariscos",
    category: "pescados",
    name: { es: "Mofongo Relleno de Mariscos", en: "Seafood-Stuffed Mofongo" },
    time: "1 hr",
    servings: 4,
    ingredients: {
      es: [
        "4 plátanos verdes, pelados y en ruedas",
        "4 dientes de ajo",
        "¼ taza de chicharrón de cerdo",
        "3 cucharadas de aceite de oliva",
        "½ libra de camarones, pelados",
        "½ libra de pulpo cocido, en trozos",
        "½ libra de calamares, en ruedas",
        "¼ taza de sofrito",
        "1 taza de salsa de tomate",
        "¼ taza de vino blanco",
        "Aceite vegetal para freír",
        "Sal al gusto"
      ],
      en: [
        "4 green plantains, peeled and sliced",
        "4 garlic cloves",
        "¼ cup pork cracklings (chicharrón)",
        "3 tablespoons olive oil",
        "½ pound shrimp, peeled",
        "½ pound cooked octopus, in chunks",
        "½ pound squid, in rings",
        "¼ cup sofrito",
        "1 cup tomato sauce",
        "¼ cup white wine",
        "Vegetable oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Para la salsa: sofría el sofrito en 1 cucharada de aceite de oliva, añada la salsa de tomate y el vino y cocine 5 minutos.",
        "Agregue los calamares y cocine 2 minutos; añada los camarones y el pulpo y cocine 3 minutos más, sólo hasta que los camarones estén rosados.",
        "Fría las ruedas de plátano a fuego medio hasta que estén blandas y doradas. Escurra.",
        "Maje el ajo con sal y el resto del aceite de oliva. Añada el plátano y el chicharrón por partes y maje hasta tener un mofongo compacto.",
        "Moldee el mofongo en un tazón, voltéelo en el plato, abra un hueco en el centro y rellene con los mariscos y su salsa."
      ],
      en: [
        "For the sauce: sauté the sofrito in 1 tablespoon of the olive oil, add the tomato sauce and wine and cook 5 minutes.",
        "Add the squid and cook 2 minutes; add the shrimp and octopus and cook 3 more minutes, just until the shrimp turn pink.",
        "Fry the plantain slices over medium heat until soft and golden. Drain.",
        "Mash the garlic with salt and the rest of the olive oil. Add the plantain and chicharrón in batches and mash into a firm mofongo.",
        "Mold the mofongo in a bowl, turn it out onto the plate, make a well in the center and fill with the seafood and its sauce."
      ]
    }
  },

  // ── PASTAS ──
  {
    id: "espaguetis-mariscos",
    category: "pastas",
    name: { es: "Espaguetis con Mariscos a la Criolla", en: "Creole-Style Seafood Spaghetti" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de espaguetis",
        "½ libra de camarones, pelados",
        "½ libra de calamares, en ruedas",
        "½ libra de pulpo cocido, en trozos",
        "¼ taza de sofrito",
        "1 lata de 15 onzas de salsa de tomate",
        "¼ taza de vino blanco",
        "3 dientes de ajo, picados",
        "3 cucharadas de aceite de oliva",
        "1 cucharadita de orégano",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 pound spaghetti",
        "½ pound shrimp, peeled",
        "½ pound squid, in rings",
        "½ pound cooked octopus, in chunks",
        "¼ cup sofrito",
        "1 can (15 oz) tomato sauce",
        "¼ cup white wine",
        "3 garlic cloves, chopped",
        "3 tablespoons olive oil",
        "1 teaspoon oregano",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis en agua con sal hasta que estén al dente. Escurra y reserve ½ taza del agua.",
        "En un sartén grande, sofría el ajo y el sofrito en el aceite 2 minutos.",
        "Añada la salsa de tomate, el vino y el orégano. Cocine 10 minutos a fuego medio-bajo.",
        "Agregue los calamares y cocine 2 minutos; luego los camarones y el pulpo, 3 minutos más.",
        "Mezcle con los espaguetis, aflojando con el agua reservada si hace falta. Ajuste la sal y la pimienta y sirva enseguida."
      ],
      en: [
        "Boil the spaghetti in salted water until al dente. Drain, reserving ½ cup of the water.",
        "In a large skillet, sauté the garlic and sofrito in the oil 2 minutes.",
        "Add the tomato sauce, wine and oregano. Cook 10 minutes over medium-low heat.",
        "Add the squid and cook 2 minutes; then the shrimp and octopus, 3 more minutes.",
        "Toss with the spaghetti, loosening with the reserved water if needed. Adjust salt and pepper and serve right away."
      ]
    }
  },
  {
    id: "espaguetis-longaniza",
    category: "pastas",
    name: { es: "Espaguetis con Longaniza", en: "Spaghetti with Longaniza Sausage" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de espaguetis",
        "1 libra de longaniza, en ruedas",
        "¼ taza de sofrito",
        "1 lata de 15 onzas de salsa de tomate",
        "1 cucharadita de sazón",
        "¼ taza de aceitunas rellenas, en ruedas",
        "1 cucharada de aceite de oliva",
        "½ taza de queso parmesano, rallado"
      ],
      en: [
        "1 pound spaghetti",
        "1 pound longaniza sausage, sliced",
        "¼ cup sofrito",
        "1 can (15 oz) tomato sauce",
        "1 teaspoon sazón",
        "¼ cup stuffed olives, sliced",
        "1 tablespoon olive oil",
        "½ cup grated Parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Hierva los espaguetis en agua con sal hasta que estén al dente y escúrralos.",
        "En un caldero, dore la longaniza en el aceite 8 minutos, hasta que suelte la grasa y esté bien cocida. Quite el exceso de grasa.",
        "Añada el sofrito, el sazón, la salsa de tomate y las aceitunas. Cocine 10 minutos a fuego bajo.",
        "Mezcle los espaguetis con la salsa en el caldero.",
        "Sirva con el queso por encima. No añada sal: la longaniza y el sazón ya la traen."
      ],
      en: [
        "Boil the spaghetti in salted water until al dente and drain.",
        "In a caldero, brown the longaniza in the oil 8 minutes, until it releases its fat and is fully cooked. Pour off the excess fat.",
        "Add the sofrito, sazón, tomato sauce and olives. Cook 10 minutes over low heat.",
        "Toss the spaghetti with the sauce in the caldero.",
        "Serve topped with the cheese. Don't add salt: the longaniza and sazón already have it."
      ]
    }
  },
  {
    id: "fideos-guisados-pollo",
    category: "pastas",
    name: { es: "Fideos Guisados con Pollo", en: "Stewed Fideos with Chicken" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "8 onzas de fideos finos",
        "1½ libras de muslos de pollo, sin hueso y en trozos",
        "¼ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "1 papa, pelada y en cubitos",
        "3 tazas de caldo de pollo",
        "1 cucharada de aceite vegetal",
        "Sal al gusto"
      ],
      en: [
        "8 oz thin noodles (fideos)",
        "1½ pounds boneless chicken thighs, in pieces",
        "¼ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "1 potato, peeled and diced",
        "3 cups chicken broth",
        "1 tablespoon vegetable oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, dore el pollo en el aceite 8 minutos.",
        "Añada el sofrito, el sazón y la salsa de tomate y sofría 3 minutos.",
        "Agregue la papa y el caldo. Cuando hierva, cocine tapado 10 minutos.",
        "Añada los fideos partidos con la mano y cocine destapado a fuego medio, moviendo, 8–10 minutos, hasta que absorban casi todo el caldo.",
        "Deje reposar 5 minutos antes de servir: deben quedar jugosos, entre sopa y arroz, como se hacían en casa."
      ],
      en: [
        "In a caldero, brown the chicken in the oil 8 minutes.",
        "Add the sofrito, sazón and tomato sauce and sauté 3 minutes.",
        "Add the potato and broth. When it boils, cook covered 10 minutes.",
        "Add the noodles, broken by hand, and cook uncovered over medium heat, stirring, 8–10 minutes, until they absorb almost all the broth.",
        "Let rest 5 minutes before serving: they should be juicy, between a soup and a rice, the way they were made at home."
      ]
    }
  },

  // ── ENTREMESES ──
  {
    id: "empanadillas-langosta",
    category: "entremeses",
    name: { es: "Empanadillas de Langosta", en: "Lobster Turnovers (Empanadillas de Langosta)" },
    time: "45 min",
    servings: 10,
    ingredients: {
      es: [
        "10 discos para empanadillas",
        "1 libra de carne de langosta cocida, picada",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "2 dientes de ajo, picaditos",
        "2 cucharadas de mantequilla",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "10 turnover wrappers (discos)",
        "1 pound cooked lobster meat, chopped",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "2 garlic cloves, finely chopped",
        "2 tablespoons butter",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla y sofría el ajo y el sofrito 2 minutos.",
        "Añada la langosta y la salsa de tomate y cocine 5 minutos, hasta que la salsa seque. Deje enfriar.",
        "Ponga 2 cucharadas de relleno en cada disco, pinte el borde con huevo, doble y selle con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que estén doradas.",
        "Escurra y sirva calientes, como en los kioscos de la costa."
      ],
      en: [
        "Melt the butter and sauté the garlic and sofrito 2 minutes.",
        "Add the lobster and tomato sauce and cook 5 minutes, until the sauce dries. Let cool.",
        "Place 2 tablespoons of filling on each wrapper, brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until golden.",
        "Drain and serve hot, as at the coastal kiosks."
      ]
    }
  },

  // ── BIZCOCHOS ──
  {
    id: "ponque-boricua",
    category: "bizcochos",
    name: { es: "Ponqué Boricua", en: "Puerto Rican Pound Cake (Ponqué)" },
    time: "1 hr 30 min",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de mantequilla, a temperatura ambiente",
        "2 tazas de azúcar",
        "5 huevos",
        "3 tazas de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "1 taza de leche evaporada",
        "1 cucharada de vainilla",
        "1 cucharadita de ralladura de limón"
      ],
      en: [
        "1 cup butter, at room temperature",
        "2 cups sugar",
        "5 eggs",
        "3 cups all-purpose flour",
        "½ teaspoon baking powder",
        "¼ teaspoon salt",
        "1 cup evaporated milk",
        "1 tablespoon vanilla",
        "1 teaspoon lime zest"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 325°F y engrase y enharine un molde de tubo (bundt).",
        "Bata la mantequilla con el azúcar 5 minutos, hasta que esté blanca y esponjosa.",
        "Añada los huevos de uno en uno, batiendo bien después de cada uno.",
        "Cierna la harina con el polvo de hornear y la sal. Añádala alternando con la leche evaporada, empezando y terminando con harina. Agregue la vainilla y la ralladura.",
        "Vierta en el molde y hornee 1 hora y 10 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos antes de desmoldar. Es el bizcocho de los cafés de la tarde."
      ],
      en: [
        "Heat the oven to 325°F and grease and flour a tube (bundt) pan.",
        "Beat the butter with the sugar 5 minutes, until pale and fluffy.",
        "Add the eggs one at a time, beating well after each.",
        "Sift the flour with the baking powder and salt. Add it alternately with the evaporated milk, starting and ending with flour. Add the vanilla and zest.",
        "Pour into the pan and bake 1 hour 10 minutes, until a toothpick comes out clean. Cool 15 minutes before unmolding. It's the cake of afternoon coffee."
      ]
    }
  },

  // ── POSTRES ──
  {
    id: "marrayo",
    category: "postres",
    name: { es: "Marrayo (Dulce de Coco y Melao)", en: "Marrayo (Coconut and Molasses Candy)" },
    time: "45 min",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de coco rallado fresco",
        "1 taza de melao de caña (melaza)",
        "½ taza de azúcar morena",
        "1 cucharadita de jengibre fresco, rallado",
        "¼ cucharadita de sal"
      ],
      en: [
        "2 cups freshly grated coconut",
        "1 cup sugarcane molasses (melao)",
        "½ cup brown sugar",
        "1 teaspoon fresh ginger, grated",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Engrase una tabla o bandeja y tenga a mano un cuchillo engrasado.",
        "En un caldero, cocine el melao con el azúcar, el jengibre y la sal a fuego medio hasta que hierva.",
        "Añada el coco y cocine sin dejar de mover con cuchara de madera, unos 25 minutos, hasta que la mezcla esté muy espesa y se despegue del fondo. Una gota en agua fría debe quedar dura.",
        "Vierta sobre la tabla y extienda a ½ pulgada con la cuchara engrasada. Cuidado: el almíbar caliente quema mucho.",
        "Cuando esté tibio, corte en cuadritos o barritas. Deje endurecer y guarde en un frasco. Es un dulce de tradición de Loíza."
      ],
      en: [
        "Grease a board or tray and keep a greased knife at hand.",
        "In a caldero, cook the molasses with the sugar, ginger and salt over medium heat until it boils.",
        "Add the coconut and cook, stirring constantly with a wooden spoon, about 25 minutes, until very thick and pulling away from the bottom. A drop in cold water should turn hard.",
        "Pour onto the board and spread ½ inch thick with the greased spoon. Careful: hot syrup burns badly.",
        "While still warm, cut into small squares or bars. Let harden and store in a jar. It's a traditional sweet from Loíza."
      ]
    }
  },
  {
    id: "coquimol",
    category: "postres",
    name: { es: "Coquimol", en: "Coquimol (Coconut Custard Cream)" },
    time: "30 min",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de leche de coco",
        "¾ taza de azúcar",
        "4 yemas de huevo",
        "2 cucharadas de maicena",
        "1 raja de canela",
        "1 cucharadita de vainilla",
        "¼ cucharadita de sal",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "2 cups coconut milk",
        "¾ cup sugar",
        "4 egg yolks",
        "2 tablespoons cornstarch",
        "1 cinnamon stick",
        "1 teaspoon vanilla",
        "¼ teaspoon salt",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Disuelva la maicena en ½ taza de la leche de coco. Bata las yemas con el azúcar.",
        "Caliente el resto de la leche de coco con la raja de canela y la sal hasta que empiece a hervir.",
        "Vierta un poco de la leche caliente sobre las yemas, batiendo, para templarlas. Regrese todo a la olla con la maicena disuelta.",
        "Cocine a fuego bajo sin dejar de mover, 8–10 minutos, hasta que espese como una natilla y llegue a 160°F.",
        "Retire la canela, añada la vainilla y sirva tibio o frío, solo o sobre rebanadas de bizcocho, con canela en polvo por encima."
      ],
      en: [
        "Dissolve the cornstarch in ½ cup of the coconut milk. Beat the yolks with the sugar.",
        "Heat the rest of the coconut milk with the cinnamon stick and salt until it starts to boil.",
        "Pour a little of the hot milk over the yolks, whisking, to temper them. Return everything to the pot with the dissolved cornstarch.",
        "Cook over low heat, stirring constantly, 8–10 minutes, until thick like a custard and it reaches 160°F.",
        "Remove the cinnamon, add the vanilla and serve warm or cold, alone or over slices of cake, dusted with ground cinnamon."
      ]
    }
  },
  {
    id: "polvo-de-amor",
    category: "postres",
    name: { es: "Polvo de Amor", en: "Polvo de Amor (Toasted Coconut Sugar)" },
    time: "40 min",
    servings: 12,
    ingredients: {
      es: [
        "3 tazas de coco rallado fresco",
        "1½ tazas de azúcar",
        "¼ cucharadita de sal"
      ],
      en: [
        "3 cups freshly grated coconut",
        "1½ cups sugar",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "En un caldero grueso, mezcle el coco, el azúcar y la sal.",
        "Cocine a fuego medio-bajo, moviendo sin parar con cuchara de madera, unos 30 minutos.",
        "El azúcar se derrite, el coco suelta su agua y poco a poco todo se seca y toma un color dorado claro: debe quedar suelto, como un polvo grueso.",
        "Extienda en una bandeja para que se enfríe y se termine de secar.",
        "Guarde en un frasco bien cerrado. Se come a cucharadas o en cartuchitos de papel, como lo vendían en las fiestas de pueblo."
      ],
      en: [
        "In a heavy caldero, mix the coconut, sugar and salt.",
        "Cook over medium-low heat, stirring nonstop with a wooden spoon, about 30 minutes.",
        "The sugar melts, the coconut releases its water and little by little everything dries out and turns light golden: it should be loose, like a coarse powder.",
        "Spread on a tray to cool and finish drying.",
        "Store in a tightly closed jar. It's eaten by the spoonful or from little paper cones, as it was sold at town festivals."
      ]
    }
  },

  // ── Tercera tanda (2026-10): tragos tropicales ──
  {
    id: "mai-tai",
    category: "cocteles",
    name: { es: "Mai Tai", en: "Mai Tai" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron blanco",
        "1 oz de ron añejo oscuro",
        "½ oz de licor de naranja (curaçao)",
        "½ oz de almíbar de almendra (orgeat)",
        "¾ oz de jugo de limón fresco",
        "1 taza de hielo picado",
        "Ramita de menta y rueda de limón para decorar"
      ],
      en: [
        "1 oz white rum",
        "1 oz dark aged rum",
        "½ oz orange liqueur (curaçao)",
        "½ oz almond syrup (orgeat)",
        "¾ oz fresh lime juice",
        "1 cup crushed ice",
        "Mint sprig and lime wheel for garnish"
      ]
    },
    steps: {
      es: [
        "En una coctelera con hielo, agite el ron blanco, el licor de naranja, el almíbar de almendra y el jugo de limón por 10 segundos.",
        "Llene un vaso corto con el hielo picado y cuele el trago encima.",
        "Vierta el ron oscuro por encima, despacio sobre el dorso de una cuchara, para que flote.",
        "Decore con la menta y el limón. Es el clásico de los bares tiki: ácido, aromático y fuerte."
      ],
      en: [
        "In a shaker with ice, shake the white rum, orange liqueur, almond syrup and lime juice for 10 seconds.",
        "Fill a short glass with the crushed ice and strain the drink over it.",
        "Pour the dark rum slowly over the back of a spoon so it floats on top.",
        "Garnish with the mint and lime. It's the tiki-bar classic: tart, aromatic and strong."
      ]
    }
  },
  {
    id: "planters-punch",
    category: "cocteles",
    name: { es: "Ponche del Hacendado (Planter's Punch)", en: "Planter's Punch" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "2 oz de ron añejo oscuro",
        "1 oz de jugo de limón fresco",
        "¾ oz de almíbar simple",
        "2 oz de jugo de piña",
        "2 oz de jugo de china",
        "1 cucharadita de granadina",
        "1 taza de hielo",
        "Rodaja de china y cereza para decorar"
      ],
      en: [
        "2 oz dark aged rum",
        "1 oz fresh lime juice",
        "¾ oz simple syrup",
        "2 oz pineapple juice",
        "2 oz orange juice",
        "1 teaspoon grenadine",
        "1 cup ice",
        "Orange slice and cherry for garnish"
      ]
    },
    steps: {
      es: [
        "Ponga todos los líquidos menos la granadina en una coctelera con hielo y agite 10 segundos.",
        "Sirva en un vaso alto con hielo.",
        "Deje caer la granadina por encima: se irá al fondo y hará un degradado rojo.",
        "Decore con la china y la cereza. Es el ponche de las haciendas azucareras del Caribe: \"uno de ácido, dos de dulce, tres de fuerte y cuatro de suave\"."
      ],
      en: [
        "Put all the liquids except the grenadine in a shaker with ice and shake 10 seconds.",
        "Serve in a tall glass with ice.",
        "Drizzle the grenadine on top: it sinks and makes a red gradient.",
        "Garnish with the orange and cherry. It's the punch of the Caribbean sugar estates: \"one of sour, two of sweet, three of strong and four of weak\"."
      ]
    }
  },
  {
    id: "daiquiri-mango",
    category: "cocteles",
    name: { es: "Daiquirí de Mangó", en: "Mango Daiquiri" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "4 oz de ron blanco",
        "1½ tazas de mangó maduro, en cubos",
        "1 oz de jugo de limón fresco",
        "1 oz de almíbar simple",
        "2 tazas de hielo"
      ],
      en: [
        "4 oz white rum",
        "1½ cups ripe mango, cubed",
        "1 oz fresh lime juice",
        "1 oz simple syrup",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe el mangó con el jugo de limón y el almíbar hasta que esté muy fino.",
        "Añada el ron y el hielo y licúe hasta tener una textura de granizado.",
        "Pruebe: si el mangó es muy dulce, añada más limón; si está ácido, un poco más de almíbar.",
        "Sirva enseguida en copas frías, con un cubito de mangó en el borde."
      ],
      en: [
        "Blend the mango with the lime juice and syrup until very smooth.",
        "Add the rum and ice and blend to a slushy texture.",
        "Taste: if the mango is very sweet, add more lime; if tart, a little more syrup.",
        "Serve right away in chilled glasses, with a mango cube on the rim."
      ]
    }
  },
  {
    id: "mojito-parcha",
    category: "cocteles",
    name: { es: "Mojito de Parcha", en: "Passion Fruit Mojito" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "2 oz de ron blanco",
        "1 oz de pulpa de parcha, con semillas",
        "¾ oz de jugo de limón fresco",
        "2 cucharaditas de azúcar",
        "8 hojas de yerbabuena",
        "2 oz de agua de soda",
        "1 taza de hielo"
      ],
      en: [
        "2 oz white rum",
        "1 oz passion fruit pulp, with seeds",
        "¾ oz fresh lime juice",
        "2 teaspoons sugar",
        "8 mint leaves",
        "2 oz club soda",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "En un vaso alto, maje suavemente la yerbabuena con el azúcar y el jugo de limón, sin romper las hojas en pedacitos.",
        "Añada la pulpa de parcha y el ron y mezcle hasta disolver el azúcar.",
        "Llene el vaso con hielo y complete con el agua de soda.",
        "Mezcle de abajo hacia arriba y decore con una ramita de yerbabuena."
      ],
      en: [
        "In a tall glass, gently muddle the mint with the sugar and lime juice, without shredding the leaves.",
        "Add the passion fruit pulp and the rum and stir until the sugar dissolves.",
        "Fill the glass with ice and top with the club soda.",
        "Stir from the bottom up and garnish with a mint sprig."
      ]
    }
  },
  {
    id: "bahama-mama",
    category: "cocteles",
    name: { es: "Bahama Mama", en: "Bahama Mama" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron añejo oscuro",
        "1 oz de ron de coco",
        "½ oz de licor de café",
        "3 oz de jugo de piña",
        "½ oz de jugo de limón fresco",
        "½ oz de granadina",
        "1 taza de hielo"
      ],
      en: [
        "1 oz dark aged rum",
        "1 oz coconut rum",
        "½ oz coffee liqueur",
        "3 oz pineapple juice",
        "½ oz fresh lime juice",
        "½ oz grenadine",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Agite todos los ingredientes con el hielo en una coctelera por 10 segundos.",
        "Sirva sin colar en un vaso alto.",
        "Decore con un triángulo de piña y una cereza.",
        "El licor de café le da un fondo oscuro que equilibra lo dulce de la piña y el coco."
      ],
      en: [
        "Shake all the ingredients with the ice in a shaker for 10 seconds.",
        "Pour unstrained into a tall glass.",
        "Garnish with a pineapple wedge and a cherry.",
        "The coffee liqueur gives a dark base that balances the sweetness of pineapple and coconut."
      ]
    }
  },
  {
    id: "blue-hawaiian",
    category: "cocteles",
    name: { es: "Blue Hawaiian (Azul Tropical)", en: "Blue Hawaiian" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron blanco",
        "1 oz de licor de curaçao azul",
        "2 oz de jugo de piña",
        "1 oz de crema de coco",
        "1 taza de hielo"
      ],
      en: [
        "1 oz white rum",
        "1 oz blue curaçao liqueur",
        "2 oz pineapple juice",
        "1 oz cream of coconut",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes con el hielo hasta que quede cremoso, o agítelos en coctelera si lo prefiere con hielo en cubos.",
        "Sirva en una copa alta o de huracán.",
        "Decore con piña y una cereza.",
        "Es pariente de la piña colada: el curaçao le da el color azul y un toque de naranja."
      ],
      en: [
        "Blend all the ingredients with the ice until creamy, or shake them if you prefer it on the rocks.",
        "Serve in a tall or hurricane glass.",
        "Garnish with pineapple and a cherry.",
        "It's a cousin of the piña colada: the curaçao adds the blue color and a hint of orange."
      ]
    }
  },
  {
    id: "hurricane",
    category: "cocteles",
    name: { es: "Huracán (Hurricane)", en: "Hurricane" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron blanco",
        "1 oz de ron añejo oscuro",
        "2 oz de jugo de parcha",
        "1 oz de jugo de china",
        "½ oz de jugo de limón fresco",
        "½ oz de almíbar simple",
        "1 cucharadita de granadina",
        "1 taza de hielo"
      ],
      en: [
        "1 oz white rum",
        "1 oz dark aged rum",
        "2 oz passion fruit juice",
        "1 oz orange juice",
        "½ oz fresh lime juice",
        "½ oz simple syrup",
        "1 teaspoon grenadine",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Agite todos los ingredientes con hielo en una coctelera por 15 segundos.",
        "Cuele en una copa de huracán llena de hielo.",
        "Decore con una rueda de china y una cereza.",
        "La parcha manda en este trago: use jugo hecho en casa (Jugo de Parcha) si puede."
      ],
      en: [
        "Shake all the ingredients with ice in a shaker for 15 seconds.",
        "Strain into a hurricane glass filled with ice.",
        "Garnish with an orange wheel and a cherry.",
        "Passion fruit leads this drink: use homemade juice (Passion Fruit Juice) if you can."
      ]
    }
  },
  {
    id: "coco-loco",
    category: "cocteles",
    name: { es: "Coco Loco", en: "Coco Loco (Rum in the Coconut)" },
    time: "10 min",
    servings: 1,
    ingredients: {
      es: [
        "½ taza de agua de coco (de 1 coco verde frío, que sirve de vaso)",
        "1 oz de ron blanco",
        "1 oz de ron de coco",
        "1 oz de crema de coco",
        "½ taza de hielo"
      ],
      en: [
        "½ cup coconut water (from 1 chilled young green coconut, used as the cup)",
        "1 oz white rum",
        "1 oz coconut rum",
        "1 oz cream of coconut",
        "½ cup ice"
      ]
    },
    steps: {
      es: [
        "Con cuidado y un machete o cuchillo grande, abra un hueco en la parte de arriba del coco. Use un paño para sujetarlo.",
        "Vierta el agua de coco en una jarra y separe ½ taza.",
        "Mezcle la ½ taza de agua de coco con los rones y la crema de coco.",
        "Vuelva a poner la mezcla dentro del coco con el hielo y sirva con sorbeto, como en los kioscos de la playa."
      ],
      en: [
        "Carefully, with a machete or large knife, open a hole in the top of the coconut. Hold it with a towel.",
        "Pour the coconut water into a pitcher and set aside ½ cup.",
        "Mix the ½ cup of coconut water with the rums and cream of coconut.",
        "Pour the mix back into the coconut with the ice and serve with a straw, as at the beach kiosks."
      ]
    }
  },
  {
    id: "lava-flow",
    category: "cocteles",
    name: { es: "Lava Flow (Colada de Fresa)", en: "Lava Flow (Strawberry Colada)" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1 taza de fresas",
        "1 oz de almíbar simple",
        "2 oz de ron blanco",
        "2 oz de ron de coco",
        "1 guineo maduro",
        "4 oz de jugo de piña",
        "3 oz de crema de coco",
        "2 tazas de hielo"
      ],
      en: [
        "1 cup strawberries",
        "1 oz simple syrup",
        "2 oz white rum",
        "2 oz coconut rum",
        "1 ripe banana",
        "4 oz pineapple juice",
        "3 oz cream of coconut",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe las fresas con el almíbar y el ron blanco hasta tener un puré. Repártalo en el fondo de dos copas altas.",
        "Lave la licuadora y licúe el ron de coco, el guineo, el jugo de piña, la crema de coco y el hielo hasta que esté cremoso.",
        "Vierta la colada despacio sobre el puré de fresa: el rojo subirá por los lados como lava.",
        "Decore con una fresa y piña y sirva enseguida."
      ],
      en: [
        "Blend the strawberries with the syrup and white rum into a purée. Divide it into the bottom of two tall glasses.",
        "Rinse the blender and blend the coconut rum, banana, pineapple juice, cream of coconut and ice until creamy.",
        "Pour the colada slowly over the strawberry purée: the red will rise up the sides like lava.",
        "Garnish with a strawberry and pineapple and serve right away."
      ]
    }
  },
  {
    id: "zombie",
    category: "cocteles",
    name: { es: "Zombi (Zombie)", en: "Zombie" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron blanco",
        "1 oz de ron dorado",
        "1 oz de ron añejo oscuro",
        "1 oz de jugo de limón fresco",
        "1 oz de jugo de piña",
        "1 oz de jugo de parcha",
        "½ oz de granadina",
        "1 taza de hielo picado"
      ],
      en: [
        "1 oz white rum",
        "1 oz gold rum",
        "1 oz dark aged rum",
        "1 oz fresh lime juice",
        "1 oz pineapple juice",
        "1 oz passion fruit juice",
        "½ oz grenadine",
        "1 cup crushed ice"
      ]
    },
    steps: {
      es: [
        "Agite el ron blanco, el dorado, los jugos y la granadina con hielo por 10 segundos.",
        "Sirva en un vaso alto con el hielo picado.",
        "Vierta el ron oscuro por encima para que flote y decore con menta y frutas.",
        "Lleva 3 onzas de ron: es uno de los tragos más fuertes del menú tiki. Uno por persona, y nunca si va a conducir."
      ],
      en: [
        "Shake the white and gold rums, the juices and the grenadine with ice for 10 seconds.",
        "Serve in a tall glass with the crushed ice.",
        "Pour the dark rum on top so it floats and garnish with mint and fruit.",
        "It has 3 ounces of rum: one of the strongest drinks on the tiki menu. One per person, and never if you will drive."
      ]
    }
  },
  {
    id: "pitorro-parcha",
    category: "cocteles",
    name: { es: "Pitorro de Parcha", en: "Passion Fruit Pitorro (Infused Rum)" },
    time: "20 min + 2 semanas de reposo",
    servings: 16,
    ingredients: {
      es: [
        "1 botella de ron blanco o pitorro (750 ml)",
        "1 taza de pulpa de parcha, con semillas",
        "¾ taza de azúcar",
        "1 raja de canela"
      ],
      en: [
        "1 bottle white rum or pitorro (750 ml)",
        "1 cup passion fruit pulp, with seeds",
        "¾ cup sugar",
        "1 cinnamon stick"
      ]
    },
    steps: {
      es: [
        "Disuelva el azúcar en la pulpa de parcha a fuego bajo, sin que hierva. Deje enfriar.",
        "En un frasco de cristal limpio, mezcle la pulpa endulzada con el ron y la canela.",
        "Tape bien y deje reposar en un lugar fresco y oscuro 2 semanas, agitando el frasco cada dos o tres días.",
        "Cuele por una tela fina y embotelle. Sirva frío, en vasitos, como se brinda en Navidad."
      ],
      en: [
        "Dissolve the sugar in the passion fruit pulp over low heat, without boiling. Let cool.",
        "In a clean glass jar, mix the sweetened pulp with the rum and cinnamon.",
        "Seal tightly and let rest in a cool, dark place for 2 weeks, shaking the jar every two or three days.",
        "Strain through a fine cloth and bottle. Serve chilled, in small glasses, the way it's offered at Christmas."
      ]
    }
  },
  {
    id: "ponche-guayaba",
    category: "cocteles",
    name: { es: "Ponche de Guayaba con Ron", en: "Guava Rum Punch" },
    time: "10 min",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de ron dorado",
        "3 tazas de néctar de guayaba",
        "1 taza de jugo de piña",
        "½ taza de jugo de limón fresco",
        "1 taza de agua de soda",
        "4 tazas de hielo",
        "Ruedas de limón y china para decorar"
      ],
      en: [
        "2 cups gold rum",
        "3 cups guava nectar",
        "1 cup pineapple juice",
        "½ cup fresh lime juice",
        "1 cup club soda",
        "4 cups ice",
        "Lime and orange wheels for garnish"
      ]
    },
    steps: {
      es: [
        "En una ponchera grande, mezcle el ron, el néctar de guayaba, el jugo de piña y el jugo de limón.",
        "Refrigere al menos 1 hora.",
        "Justo antes de servir, añada el hielo, el agua de soda y las ruedas de frutas.",
        "Sirva con cucharón en vasos con hielo. Es el ponche de las fiestas de patio."
      ],
      en: [
        "In a large punch bowl, mix the rum, guava nectar, pineapple juice and lime juice.",
        "Refrigerate at least 1 hour.",
        "Right before serving, add the ice, club soda and fruit wheels.",
        "Ladle into glasses with ice. It's the punch of backyard parties."
      ]
    }
  },

  // ── Cuarta tanda (2026-10): platos típicos de pueblos ──
  {
    id: "arepas-rellenas-pulpo",
    category: "entremeses",
    name: { es: "Arepas Rellenas de Pulpo (Piñones, Loíza)", en: "Octopus-Stuffed Coconut Arepas (Piñones, Loíza)" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 taza de leche de coco",
        "2 cucharadas de azúcar",
        "1 cucharadita de polvo de hornear",
        "1 cucharadita de sal",
        "2 cucharadas de mantequilla, derretida",
        "Relleno: 1 libra de pulpo cocido, picado",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "2 cucharadas de aceite de oliva",
        "Aceite vegetal para freír"
      ],
      en: [
        "3 cups all-purpose flour",
        "1 cup coconut milk",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "1 teaspoon salt",
        "2 tablespoons butter, melted",
        "Filling: 1 pound cooked octopus, chopped",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "2 tablespoons olive oil",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Para la masa: mezcle la harina, el azúcar, el polvo de hornear y la sal. Añada la leche de coco y la mantequilla y amase hasta tener una masa suave. Repose tapada 20 minutos.",
        "Para el relleno: sofría el sofrito en el aceite de oliva, añada el pulpo y la salsa de tomate y cocine 8 minutos, hasta que la salsa espese.",
        "Divida la masa en 8 bolas y aplánelas en discos de 5 pulgadas y ¼ de pulgada de grueso.",
        "Fría en aceite a 350°F, 2–3 minutos por lado, hasta que inflen y doren. Escurra.",
        "Abra cada arepa por un lado, como un bolsillo, y rellénela con el pulpo. Así las venden en los kioscos de Piñones, en Loíza, donde la arepa de coco es herencia de la cocina afrocaribeña del pueblo."
      ],
      en: [
        "For the dough: mix the flour, sugar, baking powder and salt. Add the coconut milk and butter and knead into a soft dough. Rest covered 20 minutes.",
        "For the filling: sauté the sofrito in the olive oil, add the octopus and tomato sauce and cook 8 minutes, until the sauce thickens.",
        "Divide the dough into 8 balls and flatten into 5-inch disks, ¼ inch thick.",
        "Fry in oil at 350°F, 2–3 minutes per side, until puffed and golden. Drain.",
        "Slit each arepa open on one side like a pocket and stuff it with the octopus. That's how they're sold at the kiosks of Piñones, in Loíza, where the coconut arepa is part of the town's Afro-Caribbean culinary heritage."
      ]
    }
  },
  {
    id: "empanadillas-pulpo",
    category: "entremeses",
    name: { es: "Empanadillas de Pulpo (Luquillo)", en: "Octopus Turnovers (Luquillo)" },
    time: "45 min",
    servings: 10,
    ingredients: {
      es: [
        "10 discos para empanadillas",
        "1 libra de pulpo cocido, picado",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "½ cucharadita de pimentón",
        "2 cucharadas de aceite de oliva",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "10 turnover wrappers (discos)",
        "1 pound cooked octopus, chopped",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "½ teaspoon paprika",
        "2 tablespoons olive oil",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite de oliva 2 minutos.",
        "Añada el pulpo, la salsa de tomate y el pimentón y cocine 8 minutos, hasta que la salsa se seque. Deje enfriar.",
        "Ponga 2 cucharadas de relleno en cada disco, pinte el borde con huevo, doble y selle con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que estén doradas.",
        "Sirva calientes, como en los kioscos de Luquillo, frente a la playa, con un jugo de coco o una cerveza fría."
      ],
      en: [
        "Sauté the sofrito in the olive oil 2 minutes.",
        "Add the octopus, tomato sauce and paprika and cook 8 minutes, until the sauce dries. Let cool.",
        "Place 2 tablespoons of filling on each wrapper, brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until golden.",
        "Serve hot, as at the Luquillo kiosks facing the beach, with coconut water or an ice-cold beer."
      ]
    }
  },
  {
    id: "pasteles-pollo",
    category: "vegetales",
    name: { es: "Pasteles de Pollo (Orocovis)", en: "Chicken Pasteles (Orocovis)" },
    time: "3 hr",
    servings: 20,
    ingredients: {
      es: [
        "Masa: 10 guineos verdes",
        "2 libras de yautía blanca",
        "1 libra de calabaza",
        "½ taza de leche",
        "½ taza de aceite de achiote (más para untar las hojas)",
        "2 cucharaditas de sal",
        "Relleno: 3 libras de muslos de pollo, sin hueso y en cubitos",
        "½ taza de sofrito",
        "2 sobres de sazón con achiote",
        "½ taza de salsa de tomate",
        "½ taza de aceitunas rellenas, picadas",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "Para envolver: 20 hojas de plátano, limpias y pasadas por el fuego",
        "Papel de pastel",
        "Hilo de cocina"
      ],
      en: [
        "Dough: 10 green bananas",
        "2 pounds white yautía (taro root)",
        "1 pound calabaza (West Indian pumpkin)",
        "½ cup milk",
        "½ cup annatto oil (plus more for the leaves)",
        "2 teaspoons salt",
        "Filling: 3 pounds boneless chicken thighs, diced",
        "½ cup sofrito",
        "2 packets sazón with annatto",
        "½ cup tomato sauce",
        "½ cup stuffed olives, chopped",
        "1 can (15 oz) chickpeas, drained",
        "For wrapping: 20 plantain leaves, cleaned and passed over the flame",
        "Pastel paper",
        "Kitchen twine"
      ]
    },
    steps: {
      es: [
        "Para el relleno: sofría el pollo con el sofrito, el sazón, la salsa de tomate, las aceitunas y los garbanzos por 20 minutos. Deje enfriar.",
        "Para la masa: pele y ralle bien fino los guineos, la yautía y la calabaza. Mézclelos con la leche, el aceite de achiote y la sal hasta tener una masa suave.",
        "Sobre papel de pastel, ponga una hoja de plátano untada de achiote, extienda 3 cucharadas de masa, añada 2 cucharadas de relleno en el centro y doble la hoja y el papel para cerrar.",
        "Amarre los pasteles de dos en dos con el hilo. Se pueden congelar crudos hasta 3 meses.",
        "Hierva en abundante agua con sal por 1 hora (1 hora y 15 minutos si están congelados). Orocovis, en el centro de la isla, celebra cada año el Festival Nacional del Pastel."
      ],
      en: [
        "For the filling: sauté the chicken with the sofrito, sazón, tomato sauce, olives and chickpeas for 20 minutes. Let cool.",
        "For the dough: peel and finely grate the green bananas, yautía and calabaza. Mix with the milk, annatto oil and salt into a soft dough.",
        "On pastel paper, lay a plantain leaf brushed with annatto oil, spread 3 tablespoons of dough, add 2 tablespoons of filling in the center and fold the leaf and paper to close.",
        "Tie the pasteles in pairs with the twine. They can be frozen raw for up to 3 months.",
        "Boil in plenty of salted water for 1 hour (1 hour 15 minutes if frozen). Orocovis, in the center of the island, holds the National Pastel Festival every year."
      ]
    }
  },
  {
    id: "lechon-a-la-vara",
    category: "carnes",
    name: { es: "Lechón a la Vara (Guavate, Cayey)", en: "Spit-Roasted Whole Pig (Guavate, Cayey)" },
    time: "8 hr + 1 noche de adobo",
    servings: 50,
    ingredients: {
      es: [
        "1 lechón entero de 45 libras, limpio",
        "2 tazas de ajo majado",
        "½ taza de orégano",
        "½ taza de sal",
        "2 cucharadas de pimienta",
        "1 taza de jugo de naranja agria",
        "1 taza de aceite de achiote",
        "Una vara de metal o de madera dura, alambre y carbón para asar"
      ],
      en: [
        "1 whole pig (45 pounds), cleaned",
        "2 cups mashed garlic",
        "½ cup oregano",
        "½ cup salt",
        "2 tablespoons pepper",
        "1 cup sour orange juice",
        "1 cup annatto oil",
        "A metal or hardwood spit, wire and charcoal for roasting"
      ]
    },
    steps: {
      es: [
        "La noche antes: mezcle el ajo, el orégano, la sal, la pimienta y la naranja agria. Haga cortes profundos en la carne (no en el cuero) y frote el adobo por dentro y por fuera. Refrigere o mantenga en hielo.",
        "Atraviese el lechón con la vara de la cola a la cabeza y amárrelo bien con alambre para que gire con la vara.",
        "Prepare un fuego de carbón parejo y coloque el lechón a 2 pies por encima. Gire despacio y sin parar (a mano o con motor) durante 6–8 horas, añadiendo carbón para mantener el calor.",
        "En la última hora, unte el cuero con aceite de achiote y acerque un poco el fuego para que el cuero se infle y quede crujiente.",
        "Está listo cuando la parte más gruesa del pernil y la paleta llegue a 190°F y la carne se separe sola. Así se asa en las lechoneras de Guavate, en Cayey, la famosa Ruta del Lechón."
      ],
      en: [
        "The night before: mix the garlic, oregano, salt, pepper and sour orange juice. Make deep cuts in the meat (not the skin) and rub the adobo inside and out. Refrigerate or keep on ice.",
        "Run the spit through the pig from tail to head and tie it firmly with wire so it turns with the spit.",
        "Build an even charcoal fire and set the pig 2 feet above it. Turn slowly and constantly (by hand or with a motor) for 6–8 hours, adding charcoal to keep the heat.",
        "In the last hour, brush the skin with annatto oil and bring the fire a little closer so the skin puffs and turns crisp.",
        "It's done when the thickest part of the leg and shoulder reaches 190°F and the meat pulls apart on its own. That's how it's roasted at the lechoneras of Guavate, in Cayey, the famous Pork Route (Ruta del Lechón)."
      ]
    }
  },
  {
    id: "queso-de-hoja",
    category: "huevos",
    name: { es: "Queso de Hoja (Hatillo)", en: "Queso de Hoja (Layered Stretched Cheese, Hatillo)" },
    time: "2 hr 30 min",
    servings: 8,
    ingredients: {
      es: [
        "1 galón de leche entera (no ultrapasteurizada)",
        "Renina líquida (cuajo para queso), la cantidad que indique el envase para 1 galón",
        "1 cucharada de sal (para el agua de estirar)",
        "8 tazas de agua"
      ],
      en: [
        "1 gallon whole milk (not ultra-pasteurized)",
        "Liquid rennet, the amount the package indicates for 1 gallon",
        "1 tablespoon salt (for the stretching water)",
        "8 cups water"
      ]
    },
    steps: {
      es: [
        "Caliente la leche a 90°F, retire del fuego, añada la renina disuelta en un poco de agua fría y mezcle 30 segundos. Tape y deje reposar 45 minutos, hasta que cuaje firme.",
        "Corte la cuajada en cuadros de 1 pulgada y caliéntela despacio hasta 105°F, moviendo con suavidad. Escurra en un colador con tela y guarde la cuajada.",
        "Caliente el agua con la sal a 175°F. Sumerja la cuajada por partes con una cuchara de madera hasta que se ablande y se pueda estirar.",
        "Estire la masa con las manos (use guantes: está muy caliente) y dóblela sobre sí misma varias veces, como un libro, para formar las capas u \"hojas\".",
        "Enfríe el queso en agua con hielo y refrigere. Se come fresco, en lascas, con pan o con guayaba. Hatillo es el centro de la industria lechera de la isla."
      ],
      en: [
        "Heat the milk to 90°F, remove from heat, add the rennet dissolved in a little cold water and stir 30 seconds. Cover and let rest 45 minutes, until firmly set.",
        "Cut the curd into 1-inch squares and heat it slowly to 105°F, stirring gently. Drain in a cloth-lined colander and keep the curd.",
        "Heat the water with the salt to 175°F. Dip the curd in batches with a wooden spoon until it softens and can be stretched.",
        "Stretch the curd by hand (wear gloves: it's very hot) and fold it over itself several times, like a book, to form the layers or \"leaves\" (hojas).",
        "Cool the cheese in ice water and refrigerate. It's eaten fresh, sliced, with bread or with guava paste. Hatillo is the center of the island's dairy industry."
      ]
    }
  },
  {
    id: "helado-arroz-habichuelas",
    category: "postres",
    name: { es: "Helado de Arroz con Habichuelas (Lares)", en: "Rice and Beans Ice Cream (Lares)" },
    time: "30 min + 6 hr de congelador",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de habichuelas rosadas, cocidas y escurridas",
        "1 taza de arroz cocido",
        "1 lata de 12 onzas de leche evaporada",
        "1 lata de 14 onzas de leche condensada",
        "2 tazas de crema de leche (heavy cream)",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 cup pink beans, cooked and drained",
        "1 cup cooked rice",
        "1 can (12 oz) evaporated milk",
        "1 can (14 oz) sweetened condensed milk",
        "2 cups heavy cream",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Enjuague las habichuelas para quitarles el caldo salado y licúelas con la leche evaporada hasta que estén muy finas.",
        "Añada la leche condensada, la vainilla, la canela y la sal y licúe unos segundos más.",
        "Bata la crema de leche hasta que forme picos suaves e incorpórela con movimientos envolventes.",
        "Añada el arroz cocido (frío) y mezcle: los granos quedan enteros en el helado.",
        "Congele en una heladera, o en el congelador moviendo cada 30 minutos durante las primeras 3 horas. Es uno de los sabores criollos que hicieron famosa a la heladería de la plaza de Lares."
      ],
      en: [
        "Rinse the beans to remove the salty broth and blend them with the evaporated milk until very smooth.",
        "Add the condensed milk, vanilla, cinnamon and salt and blend a few more seconds.",
        "Whip the cream to soft peaks and fold it in.",
        "Add the cooked (cold) rice and mix: the grains stay whole in the ice cream.",
        "Freeze in an ice cream maker, or in the freezer stirring every 30 minutes for the first 3 hours. It's one of the Creole flavors that made the ice cream shop on the Lares town square famous."
      ]
    }
  },
  {
    id: "brazo-gitano-guayaba-queso",
    category: "postres",
    name: { es: "Brazo Gitano de Guayaba y Queso (Mayagüez)", en: "Guava and Cream Cheese Swiss Roll (Mayagüez)" },
    time: "1 hr + 2 hr de frío",
    servings: 12,
    ingredients: {
      es: [
        "5 huevos, separados",
        "¾ taza de azúcar",
        "1 taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "1 cucharadita de vainilla",
        "Relleno: 8 onzas de queso crema, blando",
        "¼ taza de azúcar en polvo",
        "8 onzas de pasta de guayaba",
        "2 cucharadas de agua",
        "Azúcar en polvo para decorar"
      ],
      en: [
        "5 eggs, separated",
        "¾ cup sugar",
        "1 cup all-purpose flour",
        "1 teaspoon baking powder",
        "¼ teaspoon salt",
        "1 teaspoon vanilla",
        "Filling: 8 oz cream cheese, softened",
        "¼ cup powdered sugar",
        "8 oz guava paste",
        "2 tablespoons water",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375°F y forre un molde de 10 × 15 pulgadas con papel encerado engrasado.",
        "Bata las claras a punto de nieve con la mitad del azúcar. Aparte, bata las yemas con el resto del azúcar y la vainilla hasta que estén pálidas. Una ambas mezclas y añada la harina cernida con el polvo de hornear y la sal, con movimientos envolventes.",
        "Extienda en el molde y hornee 10–12 minutos, hasta que esté dorado y rebote al tocarlo. Voltéelo sobre un paño espolvoreado con azúcar en polvo, quite el papel y enróllelo caliente con el paño. Deje enfriar.",
        "Derrita la guayaba con el agua a fuego bajo hasta tener una crema untable. Bata el queso crema con el azúcar en polvo.",
        "Desenrolle el bizcocho, unte el queso y luego la guayaba, y vuelva a enrollar. Refrigere 2 horas y espolvoree azúcar en polvo. Mayagüez es famosa en toda la isla por sus brazos gitanos."
      ],
      en: [
        "Heat the oven to 375°F and line a 10 × 15-inch pan with greased wax paper.",
        "Beat the whites to stiff peaks with half the sugar. Separately, beat the yolks with the rest of the sugar and the vanilla until pale. Combine both and fold in the flour sifted with the baking powder and salt.",
        "Spread in the pan and bake 10–12 minutes, until golden and springy. Turn out onto a towel dusted with powdered sugar, peel off the paper and roll it up warm with the towel. Let cool.",
        "Melt the guava paste with the water over low heat into a spreadable cream. Beat the cream cheese with the powdered sugar.",
        "Unroll the cake, spread the cream cheese and then the guava, and roll it up again. Refrigerate 2 hours and dust with powdered sugar. Mayagüez is famous across the island for its brazos gitanos."
      ]
    }
  },
  {
    id: "bizcocho-cafe",
    category: "bizcochos",
    name: { es: "Bizcocho de Café (Yauco)", en: "Coffee Cake (Yauco)" },
    time: "1 hr 15 min",
    servings: 14,
    ingredients: {
      es: [
        "1 taza de café colado fuerte, a temperatura ambiente",
        "½ taza de mantequilla, blanda",
        "1½ tazas de azúcar",
        "3 huevos",
        "2½ tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "1 cucharadita de canela en polvo",
        "1 cucharadita de vainilla",
        "Glaseado: 1 taza de azúcar en polvo",
        "3 cucharadas de café colado"
      ],
      en: [
        "1 cup strong brewed coffee, at room temperature",
        "½ cup butter, softened",
        "1½ cups sugar",
        "3 eggs",
        "2½ cups all-purpose flour",
        "2 teaspoons baking powder",
        "¼ teaspoon salt",
        "1 teaspoon ground cinnamon",
        "1 teaspoon vanilla",
        "Glaze: 1 cup powdered sugar",
        "3 tablespoons brewed coffee"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase y enharine un molde de tubo.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa. Añada los huevos de uno en uno y la vainilla.",
        "Cierna la harina con el polvo de hornear, la sal y la canela. Añádala alternando con el café, empezando y terminando con harina.",
        "Hornee 45–50 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos y desmolde.",
        "Mezcle el azúcar en polvo con el café y bañe el bizcocho. Use café de la zona cafetalera: Yauco es conocido como el Pueblo del Café."
      ],
      en: [
        "Heat the oven to 350°F and grease and flour a tube pan.",
        "Beat the butter with the sugar until creamy. Add the eggs one at a time and the vanilla.",
        "Sift the flour with the baking powder, salt and cinnamon. Add it alternately with the coffee, starting and ending with flour.",
        "Bake 45–50 minutes, until a toothpick comes out clean. Cool 15 minutes and unmold.",
        "Mix the powdered sugar with the coffee and pour over the cake. Use coffee from the coffee region: Yauco is known as the Coffee Town (Pueblo del Café)."
      ]
    }
  },

  // ── Quinta tanda (2026-10): mariscos y frituras de playa ──
  {
    id: "pulpo-parrilla",
    category: "pescados",
    name: { es: "Pulpo a la Parrilla con Mojo", en: "Grilled Octopus with Mojo" },
    time: "1 hr 30 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de pulpo",
        "1 cebolla, partida a la mitad",
        "2 hojas de laurel",
        "6 dientes de ajo, majados",
        "⅓ taza de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "1 cucharada de perejil, picado",
        "½ cucharadita de pimentón",
        "Sal al gusto"
      ],
      en: [
        "2 pounds octopus",
        "1 onion, halved",
        "2 bay leaves",
        "6 garlic cloves, mashed",
        "⅓ cup olive oil",
        "2 tablespoons lime juice",
        "1 tablespoon parsley, chopped",
        "½ teaspoon paprika",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva el pulpo con la cebolla, el laurel y sal a fuego bajo, tapado, 50–60 minutos, hasta que un tenedor entre fácil en la parte gruesa del tentáculo.",
        "Escúrralo, déjelo enfriar un poco y separe los tentáculos.",
        "Para el mojo: caliente el aceite con el ajo a fuego bajo 1 minuto sin dorar. Retire y añada el limón, el perejil, el pimentón y sal.",
        "Unte los tentáculos con un poco del mojo y áselos en la parrilla bien caliente 3 minutos por lado, hasta que tengan marcas y bordes crujientes.",
        "Sirva bañados con el resto del mojo, con tostones o yuca hervida."
      ],
      en: [
        "Simmer the octopus with the onion, bay leaves and salt over low heat, covered, 50–60 minutes, until a fork slides easily into the thick part of a tentacle.",
        "Drain, let cool a little and separate the tentacles.",
        "For the mojo: warm the oil with the garlic over low heat 1 minute without browning. Remove and add the lime, parsley, paprika and salt.",
        "Brush the tentacles with some mojo and grill over very high heat 3 minutes per side, until marked and crisp at the edges.",
        "Serve drizzled with the rest of the mojo, with tostones or boiled yuca."
      ]
    }
  },
  {
    id: "carrucho-empanado",
    category: "pescados",
    name: { es: "Carrucho Empanado", en: "Breaded Fried Conch" },
    time: "1 hr 15 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de carrucho limpio, en filetes",
        "2 cucharadas de jugo de limón",
        "1 cucharadita de adobo",
        "½ taza de harina de trigo",
        "2 huevos, batidos",
        "1 taza de pan rallado",
        "Aceite vegetal para freír"
      ],
      en: [
        "1½ pounds cleaned conch, in fillets",
        "2 tablespoons lime juice",
        "1 teaspoon adobo",
        "½ cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Aplaste los filetes de carrucho con un mazo de cocina, entre dos plásticos, hasta que tengan ¼ de pulgada de grueso: así se ablanda.",
        "Hiérvalo 30 minutos en agua con sal para que quede tierno. Escurra y seque bien.",
        "Adobe con el limón y el adobo y deje reposar 15 minutos.",
        "Pase cada filete por harina, huevo y pan rallado.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que dore. Sirva con limón y mayo-ajo. Compre carrucho fuera de la veda y de fuentes legales: es una especie protegida."
      ],
      en: [
        "Pound the conch fillets with a meat mallet, between two sheets of plastic, to ¼ inch thick: this tenderizes it.",
        "Boil 30 minutes in salted water so it's tender. Drain and pat very dry.",
        "Season with the lime and adobo and let rest 15 minutes.",
        "Dredge each fillet in flour, egg and breadcrumbs.",
        "Fry in oil at 350°F, 2 minutes per side, until golden. Serve with lime and garlic mayo. Buy conch outside the closed season and from legal sources: it's a protected species."
      ]
    }
  },
  {
    id: "ceviche-camarones",
    category: "pescados",
    name: { es: "Ceviche de Camarones", en: "Shrimp Ceviche" },
    time: "30 min + 1 hr de frío",
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de camarones, pelados",
        "1 taza de jugo de limón",
        "½ taza de jugo de china",
        "1 cebolla roja, en juliana fina",
        "2 tomates, sin semillas y en cubitos",
        "1 pepino, en cubitos",
        "1 aguacate, en cubos",
        "¼ taza de cilantro, picado",
        "1 ají picante, picadito (opcional)",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1½ pounds shrimp, peeled",
        "1 cup lime juice",
        "½ cup orange juice",
        "1 red onion, thinly sliced",
        "2 tomatoes, seeded and diced",
        "1 cucumber, diced",
        "1 avocado, cubed",
        "¼ cup cilantro, chopped",
        "1 hot pepper, finely chopped (optional)",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Para mayor seguridad, hierva los camarones 1 minuto, sólo hasta que se pongan rosados, y páselos a agua con hielo. Córtelos en trozos.",
        "Mezcle los camarones con el jugo de limón y el de china, la cebolla y sal. Refrigere 1 hora.",
        "Añada el tomate, el pepino, el cilantro y el ají.",
        "Justo antes de servir, agregue el aguacate y ajuste la sal y la pimienta.",
        "Sirva bien frío con tostones o galletas, en vasitos, como en los chinchorros de la costa."
      ],
      en: [
        "For extra safety, boil the shrimp 1 minute, just until pink, and move them to ice water. Cut into pieces.",
        "Mix the shrimp with the lime and orange juices, the onion and salt. Refrigerate 1 hour.",
        "Add the tomato, cucumber, cilantro and hot pepper.",
        "Just before serving, add the avocado and adjust salt and pepper.",
        "Serve very cold with tostones or crackers, in small cups, as at the seaside chinchorros."
      ]
    }
  },
  {
    id: "arroz-langosta",
    category: "arroces",
    name: { es: "Arroz con Langosta", en: "Rice with Lobster" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano mediano",
        "1 libra de carne de langosta, en trozos",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "¼ taza de vino blanco",
        "3 tazas de caldo de pescado o de pollo",
        "3 cucharadas de aceite de oliva",
        "½ taza de pimientos morrones, en tiras",
        "Sal al gusto"
      ],
      en: [
        "2 cups medium-grain rice",
        "1 pound lobster meat, in chunks",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "¼ cup white wine",
        "3 cups fish or chicken broth",
        "3 tablespoons olive oil",
        "½ cup roasted red peppers (pimientos morrones), in strips",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "En un caldero, sofría la langosta en el aceite 2 minutos y retírela (terminará de cocinarse con el arroz).",
        "En el mismo aceite, sofría el sofrito, el sazón, la salsa de tomate y las aceitunas 3 minutos. Añada el vino y deje que reduzca.",
        "Agregue el caldo y sal. Cuando hierva, añada el arroz lavado y cocine destapado hasta que se seque el líquido.",
        "Voltee el arroz, coloque la langosta encima, tape y cocine a fuego bajo 20–25 minutos.",
        "Decore con los pimientos morrones y sirva con tostones y ensalada de aguacate."
      ],
      en: [
        "In a caldero, sauté the lobster in the oil 2 minutes and remove it (it finishes cooking with the rice).",
        "In the same oil, sauté the sofrito, sazón, tomato sauce and olives 3 minutes. Add the wine and let it reduce.",
        "Add the broth and salt. When it boils, add the rinsed rice and cook uncovered until the liquid is absorbed.",
        "Turn the rice, place the lobster on top, cover and cook over low heat 20–25 minutes.",
        "Garnish with the roasted peppers and serve with tostones and avocado salad."
      ]
    }
  },
  {
    id: "calamares-fritos",
    category: "entremeses",
    name: { es: "Calamares Fritos", en: "Fried Calamari" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de calamares limpios, en ruedas",
        "1 taza de harina de trigo",
        "½ taza de harina de maíz",
        "1 cucharadita de adobo",
        "½ cucharadita de pimentón",
        "Aceite vegetal para freír",
        "Ruedas de limón para servir"
      ],
      en: [
        "1½ pounds cleaned squid, cut into rings",
        "1 cup all-purpose flour",
        "½ cup cornmeal",
        "1 teaspoon adobo",
        "½ teaspoon paprika",
        "Vegetable oil for frying",
        "Lime wheels for serving"
      ]
    },
    steps: {
      es: [
        "Seque muy bien los calamares con papel toalla.",
        "Mezcle la harina de trigo, la harina de maíz, el adobo y el pimentón.",
        "Pase los calamares por la mezcla, sacudiendo el exceso.",
        "Fría por tandas en aceite a 375°F sólo 1–2 minutos, hasta que estén dorados: más tiempo los pone duros como goma.",
        "Escurra y sirva enseguida con limón y mayo-ajo, como en los kioscos de playa."
      ],
      en: [
        "Pat the squid very dry with paper towels.",
        "Mix the flour, cornmeal, adobo and paprika.",
        "Toss the squid in the mixture, shaking off the excess.",
        "Fry in batches in oil at 375°F for just 1–2 minutes, until golden: longer makes them rubbery.",
        "Drain and serve right away with lime and garlic mayo, as at the beach kiosks."
      ]
    }
  },
  {
    id: "chicharrones-pescado",
    category: "entremeses",
    name: { es: "Chicharrones de Pescado", en: "Fried Fish Bites (Chicharrones de Pescado)" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de filete de dorado o de chillo, en cubos de 1 pulgada",
        "¼ taza de jugo de limón",
        "4 dientes de ajo, majados",
        "1 cucharadita de adobo",
        "1 taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "¾ taza de cerveza fría",
        "Aceite vegetal para freír"
      ],
      en: [
        "2 pounds mahi-mahi or snapper fillet, in 1-inch cubes",
        "¼ cup lime juice",
        "4 garlic cloves, mashed",
        "1 teaspoon adobo",
        "1 cup all-purpose flour",
        "1 teaspoon baking powder",
        "¾ cup cold beer",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe el pescado con el limón, el ajo y el adobo. Deje reposar 20 minutos en la nevera.",
        "Mezcle la harina y el polvo de hornear y añada la cerveza fría hasta tener un batido espeso, como de panqueques.",
        "Seque un poco los cubos de pescado y páselos por el batido.",
        "Fría en aceite a 350°F, 3–4 minutos, hasta que estén dorados y crujientes.",
        "Escurra y sirva con limón, mayo-ketchup o pique, en cartuchos de papel, como en los chinchorros."
      ],
      en: [
        "Season the fish with the lime, garlic and adobo. Let rest 20 minutes in the fridge.",
        "Mix the flour and baking powder and add the cold beer to make a thick, pancake-like batter.",
        "Pat the fish cubes a little dry and dip them in the batter.",
        "Fry in oil at 350°F, 3–4 minutes, until golden and crisp.",
        "Drain and serve with lime, mayo-ketchup or pique, in paper cones, as at the chinchorros."
      ]
    }
  },
  {
    id: "empanadillas-carrucho",
    category: "entremeses",
    name: { es: "Empanadillas de Carrucho", en: "Conch Turnovers (Empanadillas de Carrucho)" },
    time: "1 hr 15 min",
    servings: 10,
    ingredients: {
      es: [
        "10 discos para empanadillas",
        "1 libra de carrucho limpio",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "2 dientes de ajo, picaditos",
        "2 cucharadas de aceite de oliva",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "10 turnover wrappers (discos)",
        "1 pound cleaned conch",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "2 garlic cloves, finely chopped",
        "2 tablespoons olive oil",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Hierva el carrucho en agua con sal 40 minutos, hasta que esté tierno. Escurra y píquelo bien menudo.",
        "Sofría el ajo y el sofrito en el aceite de oliva, añada el carrucho y la salsa de tomate y cocine 8 minutos hasta que seque. Deje enfriar.",
        "Ponga 2 cucharadas de relleno en cada disco, pinte el borde con huevo, doble y selle con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que doren.",
        "Sirva calientes con pique. Compre carrucho fuera de la veda y de fuentes legales."
      ],
      en: [
        "Boil the conch in salted water 40 minutes, until tender. Drain and chop very finely.",
        "Sauté the garlic and sofrito in the olive oil, add the conch and tomato sauce and cook 8 minutes until dry. Let cool.",
        "Place 2 tablespoons of filling on each wrapper, brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until golden.",
        "Serve hot with pique. Buy conch outside the closed season and from legal sources."
      ]
    }
  },
  {
    id: "empanadillas-camarones",
    category: "entremeses",
    name: { es: "Empanadillas de Camarones", en: "Shrimp Turnovers (Empanadillas de Camarones)" },
    time: "40 min",
    servings: 10,
    ingredients: {
      es: [
        "10 discos para empanadillas",
        "1 libra de camarones, pelados y picados",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "3 dientes de ajo, picaditos",
        "2 cucharadas de mantequilla",
        "1 cucharada de cilantro, picado",
        "1 huevo, batido (para sellar)",
        "Aceite vegetal para freír"
      ],
      en: [
        "10 turnover wrappers (discos)",
        "1 pound shrimp, peeled and chopped",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "3 garlic cloves, finely chopped",
        "2 tablespoons butter",
        "1 tablespoon cilantro, chopped",
        "1 egg, beaten (for sealing)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla y sofría el ajo y el sofrito 2 minutos.",
        "Añada los camarones y la salsa de tomate y cocine 4 minutos, hasta que estén rosados y la salsa espese. Agregue el cilantro y deje enfriar.",
        "Ponga 2 cucharadas de relleno en cada disco, pinte el borde con huevo, doble y selle con un tenedor.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que doren.",
        "Escurra y sirva calientes con mayo-ajo o pique."
      ],
      en: [
        "Melt the butter and sauté the garlic and sofrito 2 minutes.",
        "Add the shrimp and tomato sauce and cook 4 minutes, until pink and the sauce thickens. Add the cilantro and let cool.",
        "Place 2 tablespoons of filling on each wrapper, brush the edge with egg, fold and seal with a fork.",
        "Fry in oil at 350°F, 2 minutes per side, until golden.",
        "Drain and serve hot with garlic mayo or pique."
      ]
    }
  },
  {
    id: "mayo-ajo",
    category: "salsas",
    name: { es: "Mayo-Ajo", en: "Garlic Mayo (Mayo-Ajo)" },
    time: "5 min",
    servings: 8,
    ingredients: {
      es: [
        "¾ taza de mayonesa",
        "3 dientes de ajo, majados",
        "1 cucharada de jugo de limón",
        "1 cucharada de aceite de oliva",
        "1 cucharadita de perejil, picadito",
        "Pimienta al gusto"
      ],
      en: [
        "¾ cup mayonnaise",
        "3 garlic cloves, mashed",
        "1 tablespoon lime juice",
        "1 tablespoon olive oil",
        "1 teaspoon parsley, finely chopped",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Maje el ajo hasta formar una pasta.",
        "Mezcle con la mayonesa, el limón, el aceite y el perejil.",
        "Añada pimienta y refrigere 30 minutos para que el ajo se integre.",
        "Sirva con frituras, tostones, calamares o mariscos. Se conserva 3 días en la nevera."
      ],
      en: [
        "Mash the garlic into a paste.",
        "Mix with the mayonnaise, lime, oil and parsley.",
        "Add pepper and refrigerate 30 minutes so the garlic blends in.",
        "Serve with fritters, tostones, calamari or seafood. Keeps 3 days in the fridge."
      ]
    }
  }
);
