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
 * Sexta tanda: postres y dulces típicos (melcocha, dulces en almíbar de
 * calabaza, cidra y china, flan de piña, torrejas, limber, piragua…).
 * Séptima tanda: más tragos y bebidas tropicales (daiquirí de fresa, margarita
 * de parcha, guarapo con ron, coquito de café, limonadas, agua de jamaica…).
 * Octava tanda: pechugas y alitas de pollo (a la plancha con mojo, rellenas de
 * mofongo, alitas fritas, en BBQ de guayaba, guisadas, agridulces…).
 * Novena tanda: viandas, majados (plátano, yuca, batata, guineo, ñame) y
 * recetas con aguacate.
 * Décima tanda: papas (asadas, majadas, fritas, guisadas, gratinadas…) y
 * majados de malanga.
 * Undécima tanda: cupcakes, bizcochos (zanahoria, marmoleado, parcha), donas,
 * rollos de canela y churros.
 * Duodécima tanda: gelatinas (mosaico, leche, coco, parcha, café, coquito,
 * guayaba, piña colada y chupitos de ron con parcha).
 * Decimotercera tanda: flanes (chocolate, coquito, parcha, mangó, plátano
 * maduro, maíz, calabaza con queso crema y con coco) y bizcochos de calabaza.
 * Decimocuarta tanda: galletitas (chispas de chocolate, maní, coquito, parcha…),
 * ensaladas verdes (berro, espinaca, pepino, brócoli…) y de granos (tres
 * habichuelas, gandules, lentejas, frijoles negros, habichuelas blancas con atún),
 * y gazpachos (de bacalao con aguacate, de tomate y de mangó).
 * Decimoquinta tanda: galletas (cucas de melao de panadería, muñequitos de jengibre,
 * melao y especias, Marías, espirales de guayaba, alfajores…) y más postres (natilla
 * de chocolate, tembleque de calabaza, helados de guayaba y mangó…).
 * Decimosexta tanda: pies tropicales (piña, mangó, parcha con merengue, limón, guineo,
 * piña colada, calabaza, guanábana) y salsas y aderezos para carnes y pollo
 * (chimichurri, BBQ de guayaba y tamarindo, mojo de naranja agria, adobo mojado…).
 * Decimoséptima tanda: yogures tropicales (casero, parfaits y bowls con mangó, piña,
 * parcha y guayaba, batidas, yogur helado, paletas, avena fría y salsa de yogur).
 * Decimoctava tanda: paellas (mariscos clásica, negra, langosta, pulpo; valenciana,
 * mixta, pollo y chorizo a la boricua, vegetales).
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
  },

  // ── Sexta tanda (2026-10): postres y dulces típicos ──
  {
    id: "melcocha",
    category: "postres",
    name: { es: "Melcocha", en: "Melcocha (Pulled Molasses Taffy)" },
    time: "45 min",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de melao de caña (melaza)",
        "½ taza de azúcar",
        "1 cucharada de vinagre",
        "1 cucharada de mantequilla (más para las manos)",
        "1 cucharadita de jengibre en polvo",
        "¼ cucharadita de bicarbonato de sodio"
      ],
      en: [
        "2 cups sugarcane molasses (melao)",
        "½ cup sugar",
        "1 tablespoon vinegar",
        "1 tablespoon butter (plus more for your hands)",
        "1 teaspoon ground ginger",
        "¼ teaspoon baking soda"
      ]
    },
    steps: {
      es: [
        "En una olla grande, hierva el melao con el azúcar y el vinagre a fuego medio, sin mover, hasta que llegue a 260°F (una gota en agua fría forma una bola dura), unos 20 minutos.",
        "Retire del fuego y añada la mantequilla, el jengibre y el bicarbonato: hará espuma. Mezcle rápido.",
        "Vierta sobre una superficie engrasada y deje enfriar hasta que se pueda tocar, unos 5 minutos.",
        "Con las manos engrasadas, estire la melcocha y dóblela una y otra vez durante 10 minutos, hasta que se vuelva dorada clara y brillante. Cuidado: el centro puede seguir muy caliente.",
        "Forme un cordón, córtelo con tijeras engrasadas en pedacitos y envuélvalos en papel encerado. Es el dulce de las fiestas patronales de antes."
      ],
      en: [
        "In a large pot, boil the molasses with the sugar and vinegar over medium heat, without stirring, until it reaches 260°F (a drop in cold water forms a hard ball), about 20 minutes.",
        "Remove from heat and add the butter, ginger and baking soda: it will foam. Stir quickly.",
        "Pour onto a greased surface and let cool until you can touch it, about 5 minutes.",
        "With greased hands, pull and fold the taffy over and over for 10 minutes, until it turns light golden and glossy. Careful: the center can still be very hot.",
        "Shape into a rope, cut into small pieces with greased scissors and wrap them in wax paper. It's the sweet of old-time patron saint festivals."
      ]
    }
  },
  {
    id: "dulce-calabaza",
    category: "frutas",
    name: { es: "Dulce de Calabaza en Almíbar", en: "Calabaza (Pumpkin) in Syrup" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 libras de calabaza, pelada y en trozos de 2 pulgadas",
        "2 tazas de azúcar",
        "2 tazas de agua",
        "3 rajas de canela",
        "6 clavos de olor",
        "1 cucharadita de vainilla",
        "1 cáscara de limón"
      ],
      en: [
        "2 pounds calabaza (West Indian pumpkin), peeled and in 2-inch pieces",
        "2 cups sugar",
        "2 cups water",
        "3 cinnamon sticks",
        "6 whole cloves",
        "1 teaspoon vanilla",
        "1 lime peel"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el azúcar, la canela, los clavos y la cáscara de limón 10 minutos.",
        "Añada la calabaza y cocine a fuego bajo, sin mover para que no se rompa, 30–40 minutos, hasta que esté brillante y el almíbar espese.",
        "Retire del fuego, añada la vainilla y deje enfriar en el almíbar.",
        "Sirva frío, solo o con una lasca de queso blanco del país."
      ],
      en: [
        "Boil the water with the sugar, cinnamon, cloves and lime peel 10 minutes.",
        "Add the calabaza and cook over low heat, without stirring so it doesn't break, 30–40 minutes, until glossy and the syrup thickens.",
        "Remove from heat, add the vanilla and let cool in the syrup.",
        "Serve cold, alone or with a slice of fresh white cheese (queso del país)."
      ]
    }
  },
  {
    id: "dulce-cidra",
    category: "frutas",
    name: { es: "Dulce de Cidra", en: "Citron in Syrup (Dulce de Cidra)" },
    time: "2 hr + 1 noche de remojo",
    servings: 10,
    ingredients: {
      es: [
        "2 cidras grandes",
        "3 tazas de azúcar",
        "3 tazas de agua",
        "2 rajas de canela",
        "4 clavos de olor"
      ],
      en: [
        "2 large citrons (cidras)",
        "3 cups sugar",
        "3 cups water",
        "2 cinnamon sticks",
        "4 whole cloves"
      ]
    },
    steps: {
      es: [
        "Ralle ligeramente la cáscara verde de las cidras, pártalas en cascos y quíteles la pulpa y las semillas: se usa la parte blanca y gruesa.",
        "Remoje los cascos en agua fría toda la noche, cambiando el agua 2 o 3 veces, para quitarles lo amargo.",
        "Hiérvalos en agua limpia 15 minutos y escurra. Repita si todavía amargan.",
        "Haga un almíbar con el azúcar, el agua, la canela y los clavos. Añada los cascos y cocine a fuego bajo 1 hora, hasta que estén transparentes.",
        "Deje enfriar en el almíbar y guarde en frascos en la nevera. Se sirve como los cascos de guayaba, con queso blanco."
      ],
      en: [
        "Lightly grate the green skin of the citrons, cut them into wedges and remove the pulp and seeds: the thick white part is what's used.",
        "Soak the wedges in cold water overnight, changing the water 2 or 3 times, to remove the bitterness.",
        "Boil them in fresh water 15 minutes and drain. Repeat if still bitter.",
        "Make a syrup with the sugar, water, cinnamon and cloves. Add the wedges and cook over low heat 1 hour, until translucent.",
        "Let cool in the syrup and store in jars in the fridge. Serve like guava shells, with white cheese."
      ]
    }
  },
  {
    id: "cascos-china",
    category: "frutas",
    name: { es: "Cascos de China en Almíbar", en: "Orange Shells in Syrup" },
    time: "2 hr + 1 noche de remojo",
    servings: 10,
    ingredients: {
      es: [
        "6 chinas (naranjas) de cáscara gruesa",
        "3 tazas de azúcar",
        "3 tazas de agua",
        "2 rajas de canela",
        "4 clavos de olor"
      ],
      en: [
        "6 thick-skinned oranges",
        "3 cups sugar",
        "3 cups water",
        "2 cinnamon sticks",
        "4 whole cloves"
      ]
    },
    steps: {
      es: [
        "Ralle ligeramente la cáscara de las chinas, pártalas en cuatro y saque la pulpa (úsela para jugo).",
        "Remoje los cascos en agua toda la noche, cambiando el agua varias veces.",
        "Hiérvalos 15 minutos en agua limpia, escurra y repita una vez más para quitar lo amargo.",
        "Cocine los cascos en el almíbar de azúcar, agua, canela y clavos a fuego bajo 1 hora, hasta que estén brillantes y tiernos.",
        "Deje enfriar y sirva con queso blanco del país."
      ],
      en: [
        "Lightly grate the orange peel, quarter the oranges and remove the pulp (use it for juice).",
        "Soak the shells in water overnight, changing the water several times.",
        "Boil them 15 minutes in fresh water, drain and repeat once more to remove the bitterness.",
        "Cook the shells in the syrup of sugar, water, cinnamon and cloves over low heat 1 hour, until glossy and tender.",
        "Let cool and serve with fresh white cheese (queso del país)."
      ]
    }
  },
  {
    id: "flan-pina",
    category: "postres",
    name: { es: "Flan de Piña", en: "Pineapple Flan" },
    time: "1 hr 30 min",
    servings: 10,
    ingredients: {
      es: [
        "1 lata de 20 onzas de piña triturada, con su jugo",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "1 taza de azúcar (para el caramelo)"
      ],
      en: [
        "1 can (20 oz) crushed pineapple, with its juice",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "1 cup sugar (for the caramel)"
      ]
    },
    steps: {
      es: [
        "Derrita el azúcar en el molde a fuego medio hasta que tome color ámbar y cubra el fondo y los lados. Deje enfriar.",
        "Cocine la piña con su jugo 10 minutos a fuego medio para concentrar el sabor (y para que la piña no corte la leche). Deje enfriar.",
        "Licúe la piña con las leches, los huevos y la vainilla.",
        "Vierta en el molde, cubra con papel de aluminio y hornee a baño de María a 350°F por 1 hora, hasta que un cuchillo salga limpio.",
        "Refrigere toda la noche y desmolde volteando sobre un platón."
      ],
      en: [
        "Melt the sugar in the mold over medium heat until amber and swirl to coat the bottom and sides. Let cool.",
        "Cook the pineapple with its juice 10 minutes over medium heat to concentrate the flavor (and so the pineapple doesn't curdle the milk). Let cool.",
        "Blend the pineapple with the milks, eggs and vanilla.",
        "Pour into the mold, cover with foil and bake in a water bath at 350°F for 1 hour, until a knife comes out clean.",
        "Refrigerate overnight and unmold by flipping onto a platter."
      ]
    }
  },
  {
    id: "torrejas",
    category: "postres",
    name: { es: "Torrejas en Almíbar", en: "Torrejas (Fried Bread in Syrup)" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "1 pan de agua del día anterior, en rebanadas de 1 pulgada",
        "2 tazas de leche",
        "½ taza de azúcar",
        "1 raja de canela",
        "3 huevos, batidos",
        "Aceite vegetal para freír",
        "Almíbar: 1 taza de azúcar",
        "1 taza de agua",
        "1 cucharadita de anís en grano",
        "1 cáscara de limón"
      ],
      en: [
        "1 day-old pan de agua (water bread), in 1-inch slices",
        "2 cups milk",
        "½ cup sugar",
        "1 cinnamon stick",
        "3 eggs, beaten",
        "Vegetable oil for frying",
        "Syrup: 1 cup sugar",
        "1 cup water",
        "1 teaspoon anise seed",
        "1 lime peel"
      ]
    },
    steps: {
      es: [
        "Para el almíbar: hierva el azúcar, el agua, el anís y la cáscara de limón 10 minutos. Cuele y reserve.",
        "Caliente la leche con la ½ taza de azúcar y la canela hasta que el azúcar se disuelva. Deje refrescar.",
        "Remoje las rebanadas de pan en la leche, sin que se deshagan, y luego páselas por el huevo batido.",
        "Fría en aceite a 350°F, 2 minutos por lado, hasta que doren. Escurra.",
        "Bañe las torrejas con el almíbar y sirva tibias o frías. Es el dulce de la Cuaresma y de Semana Santa."
      ],
      en: [
        "For the syrup: boil the sugar, water, anise and lime peel 10 minutes. Strain and set aside.",
        "Warm the milk with the ½ cup of sugar and the cinnamon until the sugar dissolves. Let cool slightly.",
        "Soak the bread slices in the milk without letting them fall apart, then dip them in the beaten egg.",
        "Fry in oil at 350°F, 2 minutes per side, until golden. Drain.",
        "Drench the torrejas with the syrup and serve warm or cold. It's the sweet of Lent and Holy Week."
      ]
    }
  },
  {
    id: "limber-mango",
    category: "postres",
    name: { es: "Limber de Mangó", en: "Mango Limber (Frozen Cup)" },
    time: "15 min + 6 hr de congelador",
    servings: 10,
    ingredients: {
      es: [
        "3 tazas de pulpa de mangó maduro",
        "1 taza de leche evaporada",
        "½ taza de azúcar",
        "1½ tazas de agua",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "3 cups ripe mango pulp",
        "1 cup evaporated milk",
        "½ cup sugar",
        "1½ cups water",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Licúe el mangó con el agua, el azúcar y el limón hasta que esté muy fino.",
        "Añada la leche evaporada y licúe unos segundos más.",
        "Reparta en vasitos plásticos de 5 onzas.",
        "Congele al menos 6 horas. Para comerlo, apriete el vaso para que el limber suba, como se hace en el barrio."
      ],
      en: [
        "Blend the mango with the water, sugar and lime until very smooth.",
        "Add the evaporated milk and blend a few more seconds.",
        "Pour into 5-ounce plastic cups.",
        "Freeze at least 6 hours. To eat it, squeeze the cup so the limber rises, the way it's done in the neighborhood."
      ]
    }
  },
  {
    id: "piragua-frambuesa",
    category: "postres",
    name: { es: "Piragua de Frambuesa", en: "Raspberry Piragua (Shaved Ice)" },
    time: "30 min",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de frambuesas o fresas",
        "1½ tazas de azúcar",
        "1 taza de agua",
        "1 cucharada de jugo de limón",
        "8 tazas de hielo raspado"
      ],
      en: [
        "2 cups raspberries or strawberries",
        "1½ cups sugar",
        "1 cup water",
        "1 tablespoon lime juice",
        "8 cups shaved ice"
      ]
    },
    steps: {
      es: [
        "Hierva las frambuesas con el azúcar y el agua 10 minutos, aplastándolas con la cuchara.",
        "Cuele por un colador fino, apretando bien, y añada el limón. Deje enfriar: es el sirope.",
        "Raspe el hielo bien fino y apriételo en un vaso cónico de papel, formando un cono.",
        "Bañe la piragua con el sirope frío poco a poco, dejando que baje por el hielo.",
        "La de frambuesa, roja intensa, es el sabor más pedido en los carritos de piragua de la plaza."
      ],
      en: [
        "Boil the raspberries with the sugar and water 10 minutes, mashing them with the spoon.",
        "Strain through a fine sieve, pressing well, and add the lime. Let cool: this is the syrup.",
        "Shave the ice very fine and pack it into a paper cone cup, forming a cone.",
        "Pour the cold syrup over the piragua little by little, letting it run down through the ice.",
        "Bright red raspberry is the most requested flavor at the piragua carts on the town square."
      ]
    }
  },
  {
    id: "budin-pan-guayaba",
    category: "postres",
    name: { es: "Budín de Pan con Guayaba y Queso", en: "Bread Pudding with Guava and Cheese" },
    time: "1 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "1 libra de pan de agua del día anterior, en pedazos",
        "1 lata de 12 onzas de leche evaporada",
        "2 tazas de leche",
        "1 taza de azúcar",
        "4 huevos",
        "4 cucharadas de mantequilla, derretida",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela en polvo",
        "8 onzas de pasta de guayaba, en cubitos",
        "8 onzas de queso crema, en cubitos"
      ],
      en: [
        "1 pound day-old pan de agua (water bread), torn into pieces",
        "1 can (12 oz) evaporated milk",
        "2 cups milk",
        "1 cup sugar",
        "4 eggs",
        "4 tablespoons butter, melted",
        "1 teaspoon vanilla",
        "1 teaspoon ground cinnamon",
        "8 oz guava paste, cubed",
        "8 oz cream cheese, cubed"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en las dos leches 20 minutos y desbarátelo con las manos.",
        "Caliente el horno a 350°F y engrase un molde de 9 × 13 pulgadas.",
        "Bata los huevos con el azúcar, la mantequilla, la vainilla y la canela e incorpórelos al pan.",
        "Vierta la mitad en el molde, reparta la guayaba y el queso, y cubra con el resto.",
        "Hornee 55–60 minutos, hasta que esté firme y dorado. Deje enfriar antes de cortar: es el budín de pan de siempre con el sabor de los pastelillos de guayaba y queso."
      ],
      en: [
        "Soak the bread in both milks 20 minutes and break it up with your hands.",
        "Heat the oven to 350°F and grease a 9 × 13-inch dish.",
        "Beat the eggs with the sugar, butter, vanilla and cinnamon and stir into the bread.",
        "Pour half into the dish, scatter the guava and cheese, and cover with the rest.",
        "Bake 55–60 minutes, until set and golden. Let cool before cutting: it's the classic bread pudding with the flavor of guava-and-cheese pastelillos."
      ]
    }
  },

  // ── Séptima tanda (2026-10): más tragos y bebidas tropicales ──
  {
    id: "daiquiri-fresa",
    category: "cocteles",
    name: { es: "Daiquirí de Fresa", en: "Strawberry Daiquiri" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "4 oz de ron blanco",
        "1½ tazas de fresas",
        "1 oz de jugo de limón fresco",
        "1½ oz de almíbar simple",
        "2 tazas de hielo"
      ],
      en: [
        "4 oz white rum",
        "1½ cups strawberries",
        "1 oz fresh lime juice",
        "1½ oz simple syrup",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe las fresas con el limón y el almíbar hasta que estén muy finas.",
        "Añada el ron y el hielo y licúe hasta tener una textura de granizado.",
        "Pruebe y ajuste con más limón o almíbar según lo dulces que estén las fresas.",
        "Sirva en copas frías con una fresa en el borde."
      ],
      en: [
        "Blend the strawberries with the lime and syrup until very smooth.",
        "Add the rum and ice and blend to a slushy texture.",
        "Taste and adjust with more lime or syrup depending on how sweet the strawberries are.",
        "Serve in chilled glasses with a strawberry on the rim."
      ]
    }
  },
  {
    id: "margarita-parcha",
    category: "cocteles",
    name: { es: "Margarita de Parcha", en: "Passion Fruit Margarita" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "2 oz de tequila blanco",
        "1 oz de pulpa de parcha",
        "¾ oz de licor de naranja",
        "¾ oz de jugo de limón fresco",
        "½ oz de almíbar simple",
        "1 taza de hielo",
        "Sal gruesa y una rueda de limón para el borde"
      ],
      en: [
        "2 oz blanco tequila",
        "1 oz passion fruit pulp",
        "¾ oz orange liqueur",
        "¾ oz fresh lime juice",
        "½ oz simple syrup",
        "1 cup ice",
        "Coarse salt and a lime wheel for the rim"
      ]
    },
    steps: {
      es: [
        "Frote el borde del vaso con limón y páselo por la sal gruesa.",
        "Agite el tequila, la parcha, el licor de naranja, el limón y el almíbar con hielo 15 segundos.",
        "Cuele en el vaso con hielo nuevo.",
        "Decore con la rueda de limón. La parcha le da un ácido tropical que equilibra el tequila."
      ],
      en: [
        "Rub the rim of the glass with lime and dip it in the coarse salt.",
        "Shake the tequila, passion fruit, orange liqueur, lime and syrup with ice 15 seconds.",
        "Strain into the glass over fresh ice.",
        "Garnish with the lime wheel. Passion fruit adds a tropical tartness that balances the tequila."
      ]
    }
  },
  {
    id: "rum-runner",
    category: "cocteles",
    name: { es: "Rum Runner", en: "Rum Runner" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 oz de ron añejo oscuro",
        "1 oz de ron blanco",
        "½ oz de licor de guineo",
        "½ oz de licor de mora",
        "1 oz de jugo de piña",
        "1 oz de jugo de china",
        "½ oz de granadina",
        "1 taza de hielo"
      ],
      en: [
        "1 oz dark aged rum",
        "1 oz white rum",
        "½ oz banana liqueur",
        "½ oz blackberry liqueur",
        "1 oz pineapple juice",
        "1 oz orange juice",
        "½ oz grenadine",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Agite el ron blanco, los licores, los jugos y la granadina con hielo 10 segundos.",
        "Sirva en un vaso alto con el hielo.",
        "Vierta el ron oscuro por encima para que flote.",
        "Decore con piña y cereza. Nació en los Cayos de la Florida con lo que sobraba en la barra: guineo, mora y ron."
      ],
      en: [
        "Shake the white rum, liqueurs, juices and grenadine with ice 10 seconds.",
        "Serve in a tall glass with the ice.",
        "Float the dark rum on top.",
        "Garnish with pineapple and a cherry. It was born in the Florida Keys from what was left at the bar: banana, blackberry and rum."
      ]
    }
  },
  {
    id: "sangria-blanca-tropical",
    category: "cocteles",
    name: { es: "Sangría Blanca Tropical", en: "Tropical White Sangria" },
    time: "15 min + 2 hr de frío",
    servings: 8,
    ingredients: {
      es: [
        "1 botella de vino blanco seco (750 ml)",
        "½ taza de ron blanco",
        "½ taza de licor de naranja",
        "1 taza de jugo de piña",
        "¼ taza de azúcar",
        "1 taza de piña, en cubos",
        "1 mangó, en cubos",
        "Pulpa de 2 parchas",
        "1 carambola, en estrellas",
        "1 taza de agua de soda"
      ],
      en: [
        "1 bottle dry white wine (750 ml)",
        "½ cup white rum",
        "½ cup orange liqueur",
        "1 cup pineapple juice",
        "¼ cup sugar",
        "1 cup pineapple, cubed",
        "1 mango, cubed",
        "Pulp of 2 passion fruits",
        "1 star fruit, sliced into stars",
        "1 cup club soda"
      ]
    },
    steps: {
      es: [
        "En una jarra grande, disuelva el azúcar en el jugo de piña.",
        "Añada el vino, el ron y el licor de naranja.",
        "Agregue la piña, el mangó, la parcha y la carambola.",
        "Refrigere al menos 2 horas para que la fruta suelte su sabor.",
        "Justo antes de servir, añada el agua de soda y sirva con hielo."
      ],
      en: [
        "In a large pitcher, dissolve the sugar in the pineapple juice.",
        "Add the wine, rum and orange liqueur.",
        "Add the pineapple, mango, passion fruit and star fruit.",
        "Refrigerate at least 2 hours so the fruit releases its flavor.",
        "Right before serving, add the club soda and serve over ice."
      ]
    }
  },
  {
    id: "coco-frio-ron",
    category: "cocteles",
    name: { es: "Coco Frío con Ron", en: "Chilled Coconut Water with Rum" },
    time: "5 min",
    servings: 1,
    ingredients: {
      es: [
        "1 taza de agua de coco bien fría",
        "1½ oz de ron blanco",
        "1 cucharada de jugo de limón",
        "½ taza de hielo"
      ],
      en: [
        "1 cup well-chilled coconut water",
        "1½ oz white rum",
        "1 tablespoon lime juice",
        "½ cup ice"
      ]
    },
    steps: {
      es: [
        "Si tiene un coco verde, ábralo y use su agua; si no, agua de coco natural sin azúcar.",
        "Mezcle el agua de coco con el ron y el limón.",
        "Sirva con hielo, o dentro del mismo coco con un sorbeto.",
        "Es el trago más sencillo de la playa: lo venden así en los kioscos que abren cocos con machete."
      ],
      en: [
        "If you have a green coconut, open it and use its water; if not, unsweetened natural coconut water.",
        "Mix the coconut water with the rum and lime.",
        "Serve over ice, or inside the coconut itself with a straw.",
        "It's the simplest beach drink: sold this way at the kiosks that open coconuts with a machete."
      ]
    }
  },
  {
    id: "guarapo-con-ron",
    category: "cocteles",
    name: { es: "Guarapo de Caña con Ron", en: "Sugarcane Juice with Rum" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 tallos de caña de azúcar, pelados y cortados",
        "4 oz de ron blanco",
        "Jugo de 2 limones",
        "2 tazas de hielo"
      ],
      en: [
        "4 sugarcane stalks, peeled and cut",
        "4 oz white rum",
        "Juice of 2 limes",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Exprima la caña en un trapiche o licúela por partes con muy poca agua y cuele bien: ese es el guarapo.",
        "Mezcle el guarapo con el limón y el ron.",
        "Sirva enseguida sobre hielo: el guarapo fresco se oscurece y se pone agrio en pocas horas.",
        "Une dos tradiciones de la isla: la caña de azúcar de las haciendas y el ron que se hace con ella."
      ],
      en: [
        "Press the cane in a cane press or blend it in batches with very little water and strain well: that's the guarapo.",
        "Mix the guarapo with the lime and rum.",
        "Serve right away over ice: fresh guarapo darkens and sours within a few hours.",
        "It joins two island traditions: the sugarcane of the old estates and the rum made from it."
      ]
    }
  },
  {
    id: "tamarindo-con-ron",
    category: "cocteles",
    name: { es: "Tamarindo con Ron", en: "Tamarind Rum Sour" },
    time: "10 min",
    servings: 1,
    ingredients: {
      es: [
        "2 oz de ron dorado",
        "1 oz de pulpa de tamarindo, sin semillas",
        "½ oz de jugo de limón fresco",
        "¾ oz de almíbar simple",
        "1 pizca de sal",
        "1 taza de hielo"
      ],
      en: [
        "2 oz gold rum",
        "1 oz tamarind pulp, seedless",
        "½ oz fresh lime juice",
        "¾ oz simple syrup",
        "1 pinch salt",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Disuelva la pulpa de tamarindo en el almíbar, aplastándola con una cuchara.",
        "Agite con el ron, el limón, la sal y el hielo por 15 segundos.",
        "Cuele en un vaso corto con hielo nuevo.",
        "La pizca de sal resalta el agridulce del tamarindo, como en las bolitas de tamarindo."
      ],
      en: [
        "Dissolve the tamarind pulp in the syrup, mashing it with a spoon.",
        "Shake with the rum, lime, salt and ice for 15 seconds.",
        "Strain into a short glass over fresh ice.",
        "The pinch of salt brings out tamarind's sweet-sour flavor, just like in tamarind candy balls."
      ]
    }
  },
  {
    id: "coquito-cafe",
    category: "cocteles",
    name: { es: "Coquito de Café", en: "Coffee Coquito" },
    time: "15 min + 4 hr de frío",
    servings: 12,
    ingredients: {
      es: [
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "½ taza de café colado fuerte, frío",
        "1 taza de ron dorado",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "1 can (15 oz) cream of coconut",
        "1 can (13.5 oz) coconut milk",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "½ cup strong brewed coffee, cold",
        "1 cup gold rum",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Licúe la crema de coco, la leche de coco, la leche condensada y la evaporada hasta que estén bien mezcladas.",
        "Añada el café, la vainilla y la canela y licúe unos segundos.",
        "Agregue el ron y mezcle.",
        "Embotelle y refrigere al menos 4 horas. Agite antes de servir en vasitos fríos."
      ],
      en: [
        "Blend the cream of coconut, coconut milk, condensed and evaporated milk until well combined.",
        "Add the coffee, vanilla and cinnamon and blend a few seconds.",
        "Add the rum and mix.",
        "Bottle and refrigerate at least 4 hours. Shake before serving in small chilled glasses."
      ]
    }
  },
  {
    id: "mango-colada",
    category: "cocteles",
    name: { es: "Mangó Colada", en: "Mango Colada" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "4 oz de ron blanco",
        "1 taza de mangó maduro, en cubos",
        "3 oz de crema de coco",
        "3 oz de jugo de piña",
        "2 tazas de hielo"
      ],
      en: [
        "4 oz white rum",
        "1 cup ripe mango, cubed",
        "3 oz cream of coconut",
        "3 oz pineapple juice",
        "2 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe el mangó con la crema de coco y el jugo de piña hasta que esté muy fino.",
        "Añada el ron y el hielo y licúe hasta que quede cremoso.",
        "Sirva en copas altas con un triángulo de piña y un cubito de mangó.",
        "Es la piña colada boricua con mangó maduro: más espesa y perfumada."
      ],
      en: [
        "Blend the mango with the cream of coconut and pineapple juice until very smooth.",
        "Add the rum and ice and blend until creamy.",
        "Serve in tall glasses with a pineapple wedge and a mango cube.",
        "It's the Puerto Rican piña colada with ripe mango: thicker and more fragrant."
      ]
    }
  },
  {
    id: "limonada-coco",
    category: "jugos",
    name: { es: "Limonada de Coco", en: "Coconut Limeade" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "1 taza de jugo de limón fresco",
        "1 lata de 13.5 onzas de leche de coco",
        "½ taza de crema de coco",
        "¼ taza de azúcar",
        "3 tazas de hielo"
      ],
      en: [
        "1 cup fresh lime juice",
        "1 can (13.5 oz) coconut milk",
        "½ cup cream of coconut",
        "¼ cup sugar",
        "3 cups ice"
      ]
    },
    steps: {
      es: [
        "Licúe el jugo de limón con el azúcar hasta que se disuelva.",
        "Añada la leche de coco, la crema de coco y el hielo.",
        "Licúe hasta que esté espumosa y cremosa.",
        "Sirva enseguida, bien fría, con una rueda de limón."
      ],
      en: [
        "Blend the lime juice with the sugar until it dissolves.",
        "Add the coconut milk, cream of coconut and ice.",
        "Blend until frothy and creamy.",
        "Serve right away, very cold, with a lime wheel."
      ]
    }
  },
  {
    id: "limonada-parcha",
    category: "jugos",
    name: { es: "Limonada de Parcha", en: "Passion Fruit Limeade" },
    time: "10 min",
    servings: 6,
    ingredients: {
      es: [
        "½ taza de jugo de limón fresco",
        "½ taza de pulpa de parcha",
        "¾ taza de azúcar",
        "6 tazas de agua fría",
        "Hojas de yerbabuena",
        "Hielo"
      ],
      en: [
        "½ cup fresh lime juice",
        "½ cup passion fruit pulp",
        "¾ cup sugar",
        "6 cups cold water",
        "Mint leaves",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de parcha con 1 taza del agua unos segundos, sin triturar las semillas, y cuele.",
        "En una jarra, disuelva el azúcar en el resto del agua.",
        "Añada el jugo de limón y el de parcha y mezcle.",
        "Sirva con hielo y hojas de yerbabuena."
      ],
      en: [
        "Pulse the passion fruit pulp with 1 cup of the water a few seconds, without crushing the seeds, and strain.",
        "In a pitcher, dissolve the sugar in the rest of the water.",
        "Add the lime and passion fruit juices and stir.",
        "Serve over ice with mint leaves."
      ]
    }
  },
  {
    id: "agua-jamaica",
    category: "bebidas",
    name: { es: "Agua de Flor de Jamaica", en: "Hibiscus (Sorrel) Drink" },
    time: "20 min + 1 hr de frío",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de flor de jamaica seca",
        "8 tazas de agua",
        "¾ taza de azúcar",
        "1 raja de canela",
        "1 pedacito de jengibre fresco",
        "Jugo de 1 limón"
      ],
      en: [
        "1 cup dried hibiscus flowers (sorrel)",
        "8 cups water",
        "¾ cup sugar",
        "1 cinnamon stick",
        "1 small piece fresh ginger",
        "Juice of 1 lime"
      ]
    },
    steps: {
      es: [
        "Hierva 4 tazas del agua con la canela y el jengibre. Apague el fuego.",
        "Añada la flor de jamaica y deje reposar tapado 15 minutos.",
        "Cuele, añada el azúcar y revuelva hasta disolver. Agregue el resto del agua fría y el limón.",
        "Refrigere 1 hora y sirva con hielo. En todo el Caribe se toma, sobre todo en Navidad."
      ],
      en: [
        "Boil 4 cups of the water with the cinnamon and ginger. Turn off the heat.",
        "Add the hibiscus and let steep covered 15 minutes.",
        "Strain, add the sugar and stir until dissolved. Add the rest of the cold water and the lime.",
        "Refrigerate 1 hour and serve over ice. It's drunk all over the Caribbean, especially at Christmas."
      ]
    }
  },
  {
    id: "jugo-carambola",
    category: "jugos",
    name: { es: "Jugo de Carambola", en: "Star Fruit Juice" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "4 carambolas maduras, en trozos",
        "3 tazas de agua fría",
        "¼ taza de azúcar",
        "1 cucharada de jugo de limón",
        "Hielo"
      ],
      en: [
        "4 ripe star fruits, in chunks",
        "3 cups cold water",
        "¼ cup sugar",
        "1 tablespoon lime juice",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Quite los bordes oscuros de las aristas de la carambola y las semillas.",
        "Licúe con el agua, el azúcar y el limón.",
        "Cuele y sirva con hielo, con una estrellita de carambola en el vaso.",
        "Personas con problemas de los riñones deben evitar la carambola: contiene una sustancia que el riñón enfermo no elimina."
      ],
      en: [
        "Trim the dark edges of the star fruit's ridges and remove the seeds.",
        "Blend with the water, sugar and lime.",
        "Strain and serve over ice, with a little star fruit slice in the glass.",
        "People with kidney problems should avoid star fruit: it contains a substance a diseased kidney can't clear."
      ]
    }
  },
  {
    id: "batida-mango",
    category: "bebidas",
    name: { es: "Batida de Mangó", en: "Mango Shake (Batida de Mangó)" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de mangó maduro, en cubos",
        "1 taza de leche",
        "2 cucharadas de azúcar",
        "1 taza de hielo"
      ],
      en: [
        "2 cups ripe mango, cubed",
        "1 cup milk",
        "2 tablespoons sugar",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe el mangó con la leche y el azúcar hasta que esté muy fino.",
        "Añada el hielo y licúe hasta que quede espumosa.",
        "Sirva enseguida. Con mangó bien maduro casi no necesita azúcar."
      ],
      en: [
        "Blend the mango with the milk and sugar until very smooth.",
        "Add the ice and blend until frothy.",
        "Serve right away. With very ripe mango it barely needs sugar."
      ]
    }
  },
  {
    id: "jugo-verde-pina",
    category: "jugos",
    name: { es: "Jugo Verde de Piña", en: "Green Pineapple Juice" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "3 tazas de piña, en cubos",
        "1 pepino, en trozos",
        "2 tallos de apio",
        "1 taza de espinaca",
        "1 pedacito de jengibre fresco",
        "Jugo de 1 limón",
        "2 tazas de agua fría"
      ],
      en: [
        "3 cups pineapple, cubed",
        "1 cucumber, in chunks",
        "2 celery stalks",
        "1 cup spinach",
        "1 small piece fresh ginger",
        "Juice of 1 lime",
        "2 cups cold water"
      ]
    },
    steps: {
      es: [
        "Licúe la piña con el agua hasta que esté fina.",
        "Añada el pepino, el apio, la espinaca, el jengibre y el limón y licúe bien.",
        "Cuele si lo prefiere más ligero y sirva frío.",
        "La piña endulza sola: no necesita azúcar."
      ],
      en: [
        "Blend the pineapple with the water until smooth.",
        "Add the cucumber, celery, spinach, ginger and lime and blend well.",
        "Strain if you prefer it lighter and serve cold.",
        "The pineapple sweetens it on its own: no sugar needed."
      ]
    }
  },

  // ── Octava tanda (2026-10): pechugas y alitas de pollo ──
  {
    id: "pechugas-plancha-mojo",
    category: "aves",
    name: { es: "Pechugas a la Plancha con Mojo", en: "Grilled Chicken Breasts with Mojo" },
    time: "30 min + 30 min de adobo",
    servings: 4,
    ingredients: {
      es: [
        "2 pechugas de pollo grandes, deshuesadas y abiertas en filetes finos",
        "1 cucharadita de adobo",
        "½ cucharadita de orégano",
        "2 cucharadas de jugo de naranja agria o de limón",
        "1 cucharada de aceite de oliva",
        "Mojo: 6 dientes de ajo, majados",
        "¼ taza de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "1 cucharada de cilantro, picado",
        "1 cebolla, en ruedas finas"
      ],
      en: [
        "2 large chicken breasts, boneless and butterflied into thin fillets",
        "1 teaspoon adobo",
        "½ teaspoon oregano",
        "2 tablespoons sour orange or lime juice",
        "1 tablespoon olive oil",
        "Mojo: 6 garlic cloves, mashed",
        "¼ cup olive oil",
        "2 tablespoons lime juice",
        "1 tablespoon cilantro, chopped",
        "1 onion, thinly sliced"
      ]
    },
    steps: {
      es: [
        "Adobe los filetes con el adobo, el orégano, la naranja agria y la cucharada de aceite. Refrigere 30 minutos.",
        "Caliente una plancha o sartén de hierro a fuego medio-alto y cocine los filetes 3–4 minutos por lado, hasta que lleguen a 165°F por dentro.",
        "Para el mojo: caliente el ¼ de taza de aceite con la cebolla a fuego bajo 5 minutos. Añada el ajo 1 minuto sin dorarlo, retire y agregue el limón y el cilantro.",
        "Bañe las pechugas con el mojo caliente.",
        "Sirva con arroz con habichuelas y tostones o amarillos, como el especial de pechuga a la plancha de las fondas."
      ],
      en: [
        "Season the fillets with the adobo, oregano, sour orange and the tablespoon of oil. Refrigerate 30 minutes.",
        "Heat a griddle or cast-iron skillet over medium-high heat and cook the fillets 3–4 minutes per side, until they reach 165°F inside.",
        "For the mojo: warm the ¼ cup of oil with the onion over low heat 5 minutes. Add the garlic for 1 minute without browning, remove and add the lime and cilantro.",
        "Spoon the hot mojo over the chicken.",
        "Serve with rice and beans and tostones or sweet plantains, like the grilled-chicken special at the fondas."
      ]
    }
  },
  {
    id: "pechugas-rellenas-mofongo",
    category: "aves",
    name: { es: "Pechugas Rellenas de Mofongo", en: "Mofongo-Stuffed Chicken Breasts" },
    time: "1 hr 15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 pechugas de pollo, deshuesadas",
        "1 cucharadita de adobo",
        "2 plátanos verdes, pelados y en ruedas",
        "4 dientes de ajo",
        "¼ taza de chicharrón de cerdo",
        "2 cucharadas de aceite de oliva",
        "½ taza de caldo de pollo, caliente",
        "1 taza de salsa criolla (sofrito, salsa de tomate y pimientos)",
        "Aceite vegetal para freír"
      ],
      en: [
        "4 boneless chicken breasts",
        "1 teaspoon adobo",
        "2 green plantains, peeled and sliced",
        "4 garlic cloves",
        "¼ cup pork cracklings (chicharrón)",
        "2 tablespoons olive oil",
        "½ cup hot chicken broth",
        "1 cup Creole sauce (sofrito, tomato sauce and peppers)",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Abra un bolsillo en el lado grueso de cada pechuga sin atravesarla. Adóbelas por dentro y por fuera.",
        "Fría las ruedas de plátano hasta que estén blandas y doradas. Maje el ajo con el aceite de oliva, añada el plátano y el chicharrón y maje rociando caldo hasta tener un mofongo suave.",
        "Rellene las pechugas con el mofongo y ciérrelas con palillos.",
        "Dórelas en un sartén con un poco de aceite 3 minutos por lado y termine en el horno a 375°F por 20 minutos, hasta 165°F por dentro.",
        "Quite los palillos y sirva bañadas con la salsa criolla caliente."
      ],
      en: [
        "Cut a pocket into the thick side of each breast without cutting through. Season inside and out with adobo.",
        "Fry the plantain slices until soft and golden. Mash the garlic with the olive oil, add the plantain and chicharrón and mash, sprinkling broth, into a soft mofongo.",
        "Stuff the breasts with the mofongo and close with toothpicks.",
        "Brown in a skillet with a little oil 3 minutes per side and finish in a 375°F oven for 20 minutes, to 165°F inside.",
        "Remove the toothpicks and serve topped with the hot Creole sauce."
      ]
    }
  },
  {
    id: "sandwich-pechuga-plancha",
    category: "emparedados",
    name: { es: "Sándwich de Pechuga a la Plancha", en: "Grilled Chicken Breast Sandwich" },
    time: "25 min",
    servings: 2,
    ingredients: {
      es: [
        "1 pechuga de pollo, abierta en 2 filetes finos",
        "½ cucharadita de adobo",
        "1 pan de agua o 2 panes sobaos",
        "2 lonjas de queso suizo",
        "2 hojas de lechuga",
        "1 tomate, en ruedas",
        "¼ taza de papitas de lata (papas fritas en hilo)",
        "2 cucharadas de mayo-ketchup",
        "1 cucharada de mantequilla"
      ],
      en: [
        "1 chicken breast, butterflied into 2 thin fillets",
        "½ teaspoon adobo",
        "1 pan de agua or 2 pan sobao rolls",
        "2 slices Swiss cheese",
        "2 lettuce leaves",
        "1 tomato, sliced",
        "¼ cup canned shoestring potato sticks",
        "2 tablespoons mayo-ketchup",
        "1 tablespoon butter"
      ]
    },
    steps: {
      es: [
        "Adobe los filetes y cocínelos en la plancha 3–4 minutos por lado, hasta 165°F por dentro. Ponga el queso encima el último minuto para que se derrita.",
        "Abra el pan, úntelo con mantequilla por fuera y tuéstelo en la plancha.",
        "Unte el mayo-ketchup por dentro y arme con la lechuga, el tomate, la pechuga con queso y las papitas.",
        "Prense el sándwich en la plancha con una sartén encima 1 minuto por lado. Corte en diagonal y sirva caliente, como en los carritos y cafeterías."
      ],
      en: [
        "Season the fillets and cook them on the griddle 3–4 minutes per side, to 165°F inside. Put the cheese on top for the last minute so it melts.",
        "Split the bread, butter the outside and toast it on the griddle.",
        "Spread the mayo-ketchup inside and build with the lettuce, tomato, chicken with cheese and potato sticks.",
        "Press the sandwich on the griddle under a skillet 1 minute per side. Cut diagonally and serve hot, as at the food trucks and cafeterias."
      ]
    }
  },
  {
    id: "alitas-fritas-boricuas",
    category: "aves",
    name: { es: "Alitas Fritas Boricuas", en: "Puerto Rican Fried Chicken Wings" },
    time: "45 min + 1 hr de adobo",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas en tres partes (sin la puntita)",
        "4 dientes de ajo, majados",
        "1 cucharada de adobo",
        "1 cucharadita de orégano",
        "2 cucharadas de jugo de limón",
        "1 taza de harina de trigo",
        "1 cucharadita de pimentón",
        "Aceite vegetal para freír"
      ],
      en: [
        "2½ pounds chicken wings, split into flats and drumettes (tips removed)",
        "4 garlic cloves, mashed",
        "1 tablespoon adobo",
        "1 teaspoon oregano",
        "2 tablespoons lime juice",
        "1 cup all-purpose flour",
        "1 teaspoon paprika",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe las alitas con el ajo, el adobo, el orégano y el limón. Refrigere al menos 1 hora.",
        "Mezcle la harina con el pimentón y pase las alitas, sacudiendo el exceso.",
        "Fría en aceite a 350°F por tandas, 10–12 minutos, volteándolas, hasta que estén doradas y lleguen a 165°F por dentro.",
        "Escurra sobre papel y sirva con tostones y mayo-ketchup, como en los chinchorros."
      ],
      en: [
        "Season the wings with the garlic, adobo, oregano and lime. Refrigerate at least 1 hour.",
        "Mix the flour with the paprika and dredge the wings, shaking off the excess.",
        "Fry in oil at 350°F in batches, 10–12 minutes, turning, until golden and 165°F inside.",
        "Drain on paper and serve with tostones and mayo-ketchup, as at the chinchorros."
      ]
    }
  },
  {
    id: "alitas-bbq-guayaba",
    category: "aves",
    name: { es: "Alitas en BBQ de Guayaba", en: "Guava BBQ Chicken Wings" },
    time: "1 hr",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas",
        "1 cucharada de adobo",
        "8 onzas de pasta de guayaba, en cubitos",
        "½ taza de salsa de tomate",
        "¼ taza de vinagre de manzana",
        "2 cucharadas de azúcar morena",
        "1 cucharada de salsa inglesa",
        "2 dientes de ajo, picaditos",
        "¼ taza de agua"
      ],
      en: [
        "2½ pounds chicken wings, split",
        "1 tablespoon adobo",
        "8 oz guava paste, cubed",
        "½ cup tomato sauce",
        "¼ cup apple cider vinegar",
        "2 tablespoons brown sugar",
        "1 tablespoon Worcestershire sauce",
        "2 garlic cloves, finely chopped",
        "¼ cup water"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425°F. Adobe las alitas y colóquelas en una rejilla sobre una bandeja forrada.",
        "Hornee 40 minutos, volteándolas a la mitad, hasta que estén doradas y a 165°F por dentro.",
        "Mientras tanto, derrita la guayaba con el agua a fuego bajo. Añada la salsa de tomate, el vinagre, el azúcar, la salsa inglesa y el ajo y cocine 10 minutos, hasta que espese.",
        "Mezcle las alitas calientes con la mitad de la salsa y hornéelas 5 minutos más para que se glaseen.",
        "Sirva con el resto de la salsa aparte."
      ],
      en: [
        "Heat the oven to 425°F. Season the wings and set them on a rack over a lined tray.",
        "Bake 40 minutes, turning halfway, until golden and 165°F inside.",
        "Meanwhile, melt the guava paste with the water over low heat. Add the tomato sauce, vinegar, sugar, Worcestershire and garlic and cook 10 minutes, until thick.",
        "Toss the hot wings with half the sauce and bake 5 more minutes to glaze.",
        "Serve with the rest of the sauce on the side."
      ]
    }
  },
  {
    id: "alitas-guisadas",
    category: "aves",
    name: { es: "Alitas Guisadas con Papas", en: "Stewed Chicken Wings with Potatoes" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas",
        "1 cucharadita de adobo",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "3 papas, peladas y en cubos",
        "¼ taza de aceitunas rellenas",
        "1 hoja de laurel",
        "1½ tazas de agua",
        "1 cucharada de aceite vegetal"
      ],
      en: [
        "2½ pounds chicken wings, split",
        "1 teaspoon adobo",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "3 potatoes, peeled and cubed",
        "¼ cup stuffed olives",
        "1 bay leaf",
        "1½ cups water",
        "1 tablespoon vegetable oil"
      ]
    },
    steps: {
      es: [
        "Adobe las alitas y dórelas en el aceite en un caldero, por tandas, 8 minutos.",
        "Añada el sofrito, el sazón y la salsa de tomate y sofría 3 minutos.",
        "Agregue las papas, las aceitunas, el laurel y el agua. Tape y cocine a fuego medio-bajo 25 minutos, hasta que las papas estén blandas y la salsa espese.",
        "Sirva con arroz blanco. Es el guiso de alitas de las casas: rinde, es económico y gusta a los niños."
      ],
      en: [
        "Season the wings and brown them in the oil in a caldero, in batches, 8 minutes.",
        "Add the sofrito, sazón and tomato sauce and sauté 3 minutes.",
        "Add the potatoes, olives, bay leaf and water. Cover and cook over medium-low heat 25 minutes, until the potatoes are tender and the sauce thickens.",
        "Serve with white rice. It's the home-style wing stew: it stretches, it's affordable and kids love it."
      ]
    }
  },
  {
    id: "alitas-mojo-ajo",
    category: "aves",
    name: { es: "Alitas al Horno con Mojo de Ajo", en: "Baked Chicken Wings with Garlic Mojo" },
    time: "55 min",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas",
        "1 cucharada de adobo",
        "1 cucharadita de polvo de hornear",
        "8 dientes de ajo, majados",
        "⅓ taza de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "1 cucharada de perejil, picado"
      ],
      en: [
        "2½ pounds chicken wings, split",
        "1 tablespoon adobo",
        "1 teaspoon baking powder",
        "8 garlic cloves, mashed",
        "⅓ cup olive oil",
        "2 tablespoons lime juice",
        "1 tablespoon parsley, chopped"
      ]
    },
    steps: {
      es: [
        "Seque muy bien las alitas y mézclelas con el adobo y el polvo de hornear: el polvo hace que el pellejo quede crujiente sin freír.",
        "Hornee en una rejilla a 425°F por 45 minutos, volteando a la mitad, hasta que estén doradas y a 165°F por dentro.",
        "Caliente el aceite con el ajo a fuego bajo 1 minuto, sin dorar. Retire y añada el limón y el perejil.",
        "Bañe las alitas con el mojo y sirva enseguida con yuca o tostones."
      ],
      en: [
        "Pat the wings very dry and toss with the adobo and baking powder: the powder makes the skin crisp without frying.",
        "Bake on a rack at 425°F for 45 minutes, turning halfway, until golden and 165°F inside.",
        "Warm the oil with the garlic over low heat 1 minute, without browning. Remove and add the lime and parsley.",
        "Toss the wings with the mojo and serve right away with yuca or tostones."
      ]
    }
  },
  {
    id: "alitas-parcha-pique",
    category: "aves",
    name: { es: "Alitas de Parcha y Pique", en: "Passion Fruit and Hot Sauce Chicken Wings" },
    time: "55 min",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas",
        "1 cucharada de adobo",
        "½ taza de pulpa de parcha",
        "¼ taza de miel",
        "2 cucharadas de pique boricua o salsa picante",
        "1 cucharada de mantequilla",
        "1 diente de ajo, picadito"
      ],
      en: [
        "2½ pounds chicken wings, split",
        "1 tablespoon adobo",
        "½ cup passion fruit pulp",
        "¼ cup honey",
        "2 tablespoons Puerto Rican pique or hot sauce",
        "1 tablespoon butter",
        "1 garlic clove, finely chopped"
      ]
    },
    steps: {
      es: [
        "Adobe las alitas y hornéelas en una rejilla a 425°F por 45 minutos, volteando a la mitad, hasta 165°F por dentro.",
        "Mientras, cocine la parcha, la miel, el pique, la mantequilla y el ajo a fuego medio 8 minutos, hasta que espese como un glaseado.",
        "Mezcle las alitas calientes con el glaseado.",
        "Sirva con ruedas de limón. Ajuste el picor con más o menos pique."
      ],
      en: [
        "Season the wings and bake them on a rack at 425°F for 45 minutes, turning halfway, to 165°F inside.",
        "Meanwhile, cook the passion fruit, honey, pique, butter and garlic over medium heat 8 minutes, until thick like a glaze.",
        "Toss the hot wings with the glaze.",
        "Serve with lime wheels. Adjust the heat with more or less pique."
      ]
    }
  },
  {
    id: "alitas-agridulces",
    category: "aves",
    name: { es: "Alitas Agridulces", en: "Sweet and Sour Chicken Wings" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "2½ libras de alitas de pollo, separadas",
        "1 cucharadita de adobo",
        "½ taza de maicena",
        "1 lata de 8 onzas de piña en trozos, con su jugo",
        "⅓ taza de vinagre blanco",
        "⅓ taza de azúcar",
        "3 cucharadas de salsa de tomate",
        "2 cucharadas de salsa de soya",
        "1 pimiento, en cuadritos",
        "Aceite vegetal para freír"
      ],
      en: [
        "2½ pounds chicken wings, split",
        "1 teaspoon adobo",
        "½ cup cornstarch",
        "1 can (8 oz) pineapple chunks, with juice",
        "⅓ cup white vinegar",
        "⅓ cup sugar",
        "3 tablespoons tomato sauce",
        "2 tablespoons soy sauce",
        "1 bell pepper, diced",
        "Vegetable oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe las alitas, páselas por maicena (guarde 1 cucharada) y fríalas a 350°F, 10–12 minutos, hasta que estén doradas y a 165°F por dentro.",
        "Para la salsa: escurra el jugo de la piña y cocínelo con el vinagre, el azúcar, la salsa de tomate y la soya hasta que hierva.",
        "Disuelva la cucharada de maicena en un poco de agua, añádala y cocine hasta que espese. Agregue la piña y el pimiento 2 minutos.",
        "Mezcle las alitas con la salsa y sirva con arroz frito, como en los restaurantes chinos boricuas."
      ],
      en: [
        "Season the wings, dredge in cornstarch (save 1 tablespoon) and fry at 350°F, 10–12 minutes, until golden and 165°F inside.",
        "For the sauce: drain the pineapple juice and cook it with the vinegar, sugar, tomato sauce and soy sauce until it boils.",
        "Dissolve the tablespoon of cornstarch in a little water, add it and cook until thick. Add the pineapple and bell pepper for 2 minutes.",
        "Toss the wings with the sauce and serve with fried rice, as at Puerto Rican Chinese restaurants."
      ]
    }
  },
  {
    id: "arroz-con-alitas",
    category: "arroces",
    name: { es: "Arroz con Alitas", en: "Rice with Chicken Wings" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de alitas de pollo, separadas",
        "1 cucharadita de adobo",
        "2 tazas de arroz de grano mediano",
        "½ taza de sofrito",
        "1 sobre de sazón con culantro y achiote",
        "½ taza de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "1 lata de 15 onzas de gandules, escurridos",
        "2½ tazas de agua",
        "2 cucharadas de aceite vegetal",
        "Sal al gusto"
      ],
      en: [
        "2 pounds chicken wings, split",
        "1 teaspoon adobo",
        "2 cups medium-grain rice",
        "½ cup sofrito",
        "1 packet sazón with coriander and annatto",
        "½ cup tomato sauce",
        "¼ cup stuffed olives",
        "1 can (15 oz) pigeon peas (gandules), drained",
        "2½ cups water",
        "2 tablespoons vegetable oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Adobe las alitas y dórelas en el aceite en un caldero, 10 minutos.",
        "Añada el sofrito, el sazón, la salsa de tomate y las aceitunas y sofría 3 minutos.",
        "Agregue los gandules, el agua y sal. Cuando hierva, añada el arroz lavado y cocine destapado hasta que se seque el agua.",
        "Voltee el arroz, tape y cocine a fuego bajo 25 minutos, hasta que el arroz esté blando y las alitas a 165°F por dentro.",
        "Es el arroz con pollo económico de diario: las alitas dan mucho sabor al arroz."
      ],
      en: [
        "Season the wings and brown them in the oil in a caldero, 10 minutes.",
        "Add the sofrito, sazón, tomato sauce and olives and sauté 3 minutes.",
        "Add the gandules, water and salt. When it boils, add the rinsed rice and cook uncovered until the water is absorbed.",
        "Turn the rice, cover and cook over low heat 25 minutes, until the rice is tender and the wings are 165°F inside.",
        "It's the everyday budget arroz con pollo: the wings give the rice lots of flavor."
      ]
    }
  },

  // ── Novena tanda (2026-10): viandas, majados y aguacate ──
  {
    id: "majado-platano",
    category: "vegetales",
    name: { es: "Majado de Plátano Verde", en: "Mashed Green Plantains" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "3 plátanos verdes, pelados y en trozos",
        "3 dientes de ajo, majados",
        "3 cucharadas de aceite de oliva",
        "½ taza del agua de hervir los plátanos",
        "1 cebolla pequeña, en ruedas finas",
        "Sal al gusto"
      ],
      en: [
        "3 green plantains, peeled and cut into chunks",
        "3 garlic cloves, mashed",
        "3 tablespoons olive oil",
        "½ cup of the plantain cooking water",
        "1 small onion, thinly sliced",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los plátanos en agua con sal unos 25 minutos, hasta que estén blandos. Guarde ½ taza del agua.",
        "Mientras, sofría la cebolla en el aceite a fuego bajo hasta que esté blanda y añada el ajo 1 minuto.",
        "Maje los plátanos calientes con un majador o en el pilón, añadiendo el agua poco a poco hasta que estén suaves pero con algo de textura.",
        "Mezcle con la cebolla y el ajo con su aceite y ajuste la sal.",
        "Sirva caliente con bistec encebollado, huevo frito o bacalao guisado."
      ],
      en: [
        "Boil the plantains in salted water about 25 minutes, until tender. Save ½ cup of the water.",
        "Meanwhile, sauté the onion in the oil over low heat until soft and add the garlic for 1 minute.",
        "Mash the hot plantains with a masher or in the pilón, adding the water little by little until soft but still a bit textured.",
        "Mix in the onion and garlic with their oil and adjust the salt.",
        "Serve hot with steak and onions, a fried egg or stewed salt cod."
      ]
    }
  },
  {
    id: "majado-yuca",
    category: "vegetales",
    name: { es: "Majado de Yuca con Mojo", en: "Mashed Cassava with Mojo" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de yuca, pelada y en trozos",
        "3 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "4 dientes de ajo, majados",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de jugo de limón",
        "Sal al gusto"
      ],
      en: [
        "2 pounds yuca (cassava), peeled and cut into chunks",
        "3 tablespoons butter",
        "½ cup hot milk",
        "4 garlic cloves, mashed",
        "3 tablespoons olive oil",
        "1 tablespoon lime juice",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con sal 25–30 minutos, hasta que se abra y esté muy blanda. Escurra y quite la fibra del centro.",
        "Maje la yuca caliente con la mantequilla y la leche hasta que esté suave.",
        "Caliente el aceite con el ajo a fuego bajo 1 minuto, sin dorar, y añada el limón.",
        "Sirva el majado con el mojo por encima, al lado de pernil, chuletas o pescado frito."
      ],
      en: [
        "Boil the yuca in salted water 25–30 minutes, until it splits and is very soft. Drain and remove the center fiber.",
        "Mash the hot yuca with the butter and milk until smooth.",
        "Warm the oil with the garlic over low heat 1 minute, without browning, and add the lime.",
        "Serve the mash topped with the mojo, alongside roast pork, pork chops or fried fish."
      ]
    }
  },
  {
    id: "majado-batata",
    category: "vegetales",
    name: { es: "Majado de Batata", en: "Mashed Sweet Potato (Batata)" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de batata blanca o mameya, pelada y en trozos",
        "3 cucharadas de mantequilla",
        "¼ taza de leche caliente",
        "¼ cucharadita de canela en polvo (opcional)",
        "Sal al gusto"
      ],
      en: [
        "2 pounds white or orange sweet potato (batata), peeled and cut into chunks",
        "3 tablespoons butter",
        "¼ cup hot milk",
        "¼ teaspoon ground cinnamon (optional)",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la batata en agua con sal 20 minutos, hasta que esté blanda. Escurra bien.",
        "Maje con la mantequilla y la leche hasta que esté cremosa.",
        "Añada una pizca de canela si la quiere más dulce, o déjela sólo con sal para acompañar carnes.",
        "Sirva caliente con pollo asado o chuletas."
      ],
      en: [
        "Boil the sweet potato in salted water 20 minutes, until tender. Drain well.",
        "Mash with the butter and milk until creamy.",
        "Add a pinch of cinnamon if you want it sweeter, or keep it just salted to go with meats.",
        "Serve hot with roast chicken or pork chops."
      ]
    }
  },
  {
    id: "majado-guineo",
    category: "vegetales",
    name: { es: "Majado de Guineítos Verdes", en: "Mashed Green Bananas" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "8 guineos verdes",
        "3 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "Sal al gusto"
      ],
      en: [
        "8 green bananas",
        "3 tablespoons butter",
        "½ cup hot milk",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Corte las puntas de los guineos y haga un corte a lo largo de la cáscara. Hiérvalos con cáscara en agua con sal 15–20 minutos.",
        "Escurra, pele (la cáscara sale fácil en caliente) y quite cualquier hebra.",
        "Maje los guineos calientes con la mantequilla y la leche hasta que estén suaves.",
        "Ajuste la sal y sirva con salchichas guisadas, bacalao o huevo frito. Unte aceite en las manos para pelarlos: la cáscara mancha."
      ],
      en: [
        "Cut the ends off the bananas and slit the peel lengthwise. Boil them in their peel in salted water 15–20 minutes.",
        "Drain, peel (the peel comes off easily while hot) and remove any strings.",
        "Mash the hot bananas with the butter and milk until smooth.",
        "Adjust the salt and serve with stewed sausages, salt cod or a fried egg. Oil your hands to peel them: the peel stains."
      ]
    }
  },
  {
    id: "majado-name",
    category: "vegetales",
    name: { es: "Majado de Ñame", en: "Mashed Yam (Ñame)" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de ñame, pelado y en trozos",
        "3 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "1 cucharada de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 pounds yam (ñame), peeled and cut into chunks",
        "3 tablespoons butter",
        "½ cup hot milk",
        "1 tablespoon olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele el ñame con guantes o con las manos aceitadas: la cáscara puede dar picazón. Córtelo en trozos y póngalo en agua para que no se oscurezca.",
        "Hierva en agua con sal 25 minutos, hasta que esté blando.",
        "Escurra y maje caliente con la mantequilla, la leche y el aceite de oliva.",
        "Ajuste la sal. Es más firme y harinoso que la yautía: queda muy bien con carne guisada o bacalao."
      ],
      en: [
        "Peel the yam with gloves or oiled hands: the skin can itch. Cut into chunks and keep them in water so they don't darken.",
        "Boil in salted water 25 minutes, until tender.",
        "Drain and mash while hot with the butter, milk and olive oil.",
        "Adjust the salt. It's firmer and starchier than yautía: great with beef stew or salt cod."
      ]
    }
  },
  {
    id: "guineitos-cebolla",
    category: "vegetales",
    name: { es: "Guineítos Verdes con Cebolla", en: "Boiled Green Bananas with Onions" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "8 guineos verdes",
        "1 cebolla grande, en ruedas",
        "¼ taza de aceite de oliva",
        "2 cucharadas de vinagre",
        "Sal al gusto"
      ],
      en: [
        "8 green bananas",
        "1 large onion, sliced",
        "¼ cup olive oil",
        "2 tablespoons vinegar",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los guineos con cáscara en agua con sal 15–20 minutos (con un corte a lo largo de la cáscara). Pele y corte en ruedas.",
        "Sofría la cebolla en el aceite a fuego bajo hasta que esté blanda y transparente. Añada el vinagre y sal.",
        "Bañe los guineítos con la cebolla y su aceite.",
        "Sirva calientes con bacalao, salchichas guisadas o un huevo frito: el desayuno y almuerzo de campo."
      ],
      en: [
        "Boil the bananas in their peel in salted water 15–20 minutes (with a slit along the peel). Peel and slice into rounds.",
        "Sauté the onion in the oil over low heat until soft and translucent. Add the vinegar and salt.",
        "Spoon the onion and its oil over the bananas.",
        "Serve hot with salt cod, stewed sausages or a fried egg: the country breakfast and lunch."
      ]
    }
  },
  {
    id: "batata-asada",
    category: "vegetales",
    name: { es: "Batata Asada", en: "Roasted Sweet Potato (Batata)" },
    time: "1 hr",
    servings: 4,
    ingredients: {
      es: [
        "4 batatas medianas, con cáscara",
        "2 cucharadas de mantequilla",
        "Sal al gusto"
      ],
      en: [
        "4 medium sweet potatoes (batatas), skin on",
        "2 tablespoons butter",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave bien las batatas y pínchelas con un tenedor en varios sitios.",
        "Áselas en el horno a 400°F sobre una bandeja forrada 45–55 minutos, hasta que estén blandas y suelten almíbar.",
        "Ábralas a lo largo y ponga un poco de mantequilla y sal.",
        "También se asan envueltas en papel de aluminio entre las brasas del fogón, como se hacía en el campo."
      ],
      en: [
        "Scrub the sweet potatoes and prick them with a fork in several places.",
        "Roast in a 400°F oven on a lined tray 45–55 minutes, until soft and oozing syrup.",
        "Split them lengthwise and add a little butter and salt.",
        "They can also be roasted wrapped in foil in the embers of a fire, the way it was done in the countryside."
      ]
    }
  },
  {
    id: "viandas-mojo",
    category: "vegetales",
    name: { es: "Viandas al Mojo", en: "Root Vegetables with Garlic Mojo" },
    time: "45 min",
    servings: 8,
    ingredients: {
      es: [
        "1 libra de yuca, pelada y en trozos",
        "1 libra de yautía, pelada y en trozos",
        "1 libra de batata, pelada y en trozos",
        "1 libra de ñame, pelado y en trozos",
        "2 plátanos verdes, pelados y en trozos",
        "Mojo: ½ taza de aceite de oliva",
        "8 dientes de ajo, majados",
        "1 cebolla, en ruedas",
        "2 cucharadas de jugo de limón o de naranja agria",
        "Sal al gusto"
      ],
      en: [
        "1 pound yuca (cassava), peeled and cut into chunks",
        "1 pound yautía (taro root), peeled and cut into chunks",
        "1 pound sweet potato (batata), peeled and cut into chunks",
        "1 pound yam (ñame), peeled and cut into chunks",
        "2 green plantains, peeled and cut into chunks",
        "Mojo: ½ cup olive oil",
        "8 garlic cloves, mashed",
        "1 onion, sliced",
        "2 tablespoons lime or sour orange juice",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Ponga la yuca, el ñame y los plátanos en una olla grande con agua y sal y hierva 10 minutos.",
        "Añada la yautía y la batata (se cocinan más rápido) y siga hirviendo 15–20 minutos, hasta que todo esté blando.",
        "Para el mojo: sofría la cebolla en el aceite a fuego bajo 5 minutos, añada el ajo 1 minuto sin dorar y retire. Agregue el limón y sal.",
        "Escurra las viandas, colóquelas en una fuente y báñelas con el mojo caliente.",
        "Sirva con bacalao guisado, pescado frito o carne frita. Así se aprovechan las viandas de la finca."
      ],
      en: [
        "Put the yuca, yam and plantains in a large pot with salted water and boil 10 minutes.",
        "Add the yautía and sweet potato (they cook faster) and keep boiling 15–20 minutes, until everything is tender.",
        "For the mojo: sauté the onion in the oil over low heat 5 minutes, add the garlic 1 minute without browning and remove. Add the lime and salt.",
        "Drain the root vegetables, arrange them on a platter and pour the hot mojo over them.",
        "Serve with stewed salt cod, fried fish or fried pork. It's how the farm's root vegetables are put to use."
      ]
    }
  },
  {
    id: "aguacates-rellenos",
    category: "ensaladas",
    name: { es: "Aguacates Rellenos de Camarones", en: "Shrimp-Stuffed Avocados" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "2 aguacates grandes, maduros",
        "1 libra de camarones cocidos, pelados y picados",
        "¼ taza de mayonesa",
        "1 cucharada de salsa de tomate (ketchup)",
        "2 cucharadas de cebolla roja, picadita",
        "1 cucharada de cilantro, picado",
        "2 cucharadas de jugo de limón",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 large ripe avocados",
        "1 pound cooked shrimp, peeled and chopped",
        "¼ cup mayonnaise",
        "1 tablespoon ketchup",
        "2 tablespoons red onion, finely chopped",
        "1 tablespoon cilantro, chopped",
        "2 tablespoons lime juice",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle los camarones con la mayonesa, el ketchup, la cebolla, el cilantro, 1 cucharada de limón, sal y pimienta.",
        "Parta los aguacates a la mitad, quite la semilla y rocíe con el resto del limón para que no se oscurezcan.",
        "Rellene cada mitad con la ensalada de camarones.",
        "Sirva frío sobre hojas de lechuga, como entrada o almuerzo ligero."
      ],
      en: [
        "Mix the shrimp with the mayonnaise, ketchup, onion, cilantro, 1 tablespoon of lime, salt and pepper.",
        "Halve the avocados, remove the pits and sprinkle with the rest of the lime so they don't brown.",
        "Fill each half with the shrimp salad.",
        "Serve cold on lettuce leaves, as a starter or a light lunch."
      ]
    }
  },
  {
    id: "guacamole-recao",
    category: "salsas",
    name: { es: "Guacamole con Recao", en: "Guacamole with Recao (Culantro)" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "3 aguacates maduros",
        "1 tomate, sin semillas y en cubitos",
        "¼ taza de cebolla roja, picadita",
        "2 cucharadas de recao (culantro), picado",
        "1 ají dulce, picadito",
        "2 cucharadas de jugo de limón",
        "Sal al gusto"
      ],
      en: [
        "3 ripe avocados",
        "1 tomato, seeded and diced",
        "¼ cup red onion, finely chopped",
        "2 tablespoons recao (culantro), chopped",
        "1 ají dulce (sweet pepper), finely chopped",
        "2 tablespoons lime juice",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Maje los aguacates con un tenedor, dejando algunos trocitos.",
        "Añada el limón y la sal enseguida para que no se oscurezca.",
        "Incorpore el tomate, la cebolla, el recao y el ají dulce.",
        "Sirva con tostones, platanutres o arañitas. El recao y el ají dulce le dan el sabor boricua."
      ],
      en: [
        "Mash the avocados with a fork, leaving some small chunks.",
        "Add the lime and salt right away so it doesn't brown.",
        "Fold in the tomato, onion, recao and ají dulce.",
        "Serve with tostones, plantain chips or arañitas. Recao and ají dulce give it the Puerto Rican flavor."
      ]
    }
  },
  {
    id: "salsa-aguacate-tostones",
    category: "salsas",
    name: { es: "Salsa de Aguacate para Tostones", en: "Avocado Sauce for Tostones" },
    time: "10 min",
    servings: 8,
    ingredients: {
      es: [
        "1 aguacate grande, maduro",
        "¼ taza de aceite de oliva",
        "¼ taza de agua",
        "2 dientes de ajo",
        "2 cucharadas de cilantro",
        "2 cucharadas de jugo de limón",
        "½ cucharadita de sal"
      ],
      en: [
        "1 large ripe avocado",
        "¼ cup olive oil",
        "¼ cup water",
        "2 garlic cloves",
        "2 tablespoons cilantro",
        "2 tablespoons lime juice",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes hasta que la salsa esté lisa y cremosa.",
        "Si está muy espesa, añada un poco más de agua.",
        "Pruebe y ajuste el limón y la sal.",
        "Sirva enseguida con tostones, yuca frita o carne frita. Se guarda 1 día en la nevera bien tapada."
      ],
      en: [
        "Blend all the ingredients until the sauce is smooth and creamy.",
        "If too thick, add a little more water.",
        "Taste and adjust the lime and salt.",
        "Serve right away with tostones, fried yuca or fried pork. Keeps 1 day in the fridge, tightly covered."
      ]
    }
  },

  // ── Décima tanda (2026-10): papas asadas, majadas y fritas ──
  {
    id: "papas-asadas",
    category: "vegetales",
    name: { es: "Papas Asadas con Ajo y Orégano", en: "Roasted Potatoes with Garlic and Oregano" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de papas, con cáscara y en cascos",
        "¼ taza de aceite de oliva",
        "6 dientes de ajo, majados",
        "1 cucharadita de orégano",
        "1 cucharadita de pimentón",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta",
        "1 cucharada de perejil, picado"
      ],
      en: [
        "3 pounds potatoes, skin on, cut into wedges",
        "¼ cup olive oil",
        "6 garlic cloves, mashed",
        "1 teaspoon oregano",
        "1 teaspoon paprika",
        "1 teaspoon salt",
        "½ teaspoon pepper",
        "1 tablespoon parsley, chopped"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425°F.",
        "Mezcle las papas con el aceite, el ajo, el orégano, el pimentón, la sal y la pimienta.",
        "Extiéndalas en una sola capa en una bandeja grande, con la parte cortada hacia abajo.",
        "Hornee 35–40 minutos, volteando a la mitad, hasta que estén doradas por fuera y blandas por dentro.",
        "Espolvoree el perejil y sirva con pollo asado, pernil o chuletas."
      ],
      en: [
        "Heat the oven to 425°F.",
        "Toss the potatoes with the oil, garlic, oregano, paprika, salt and pepper.",
        "Spread them in a single layer on a large tray, cut side down.",
        "Bake 35–40 minutes, turning halfway, until golden outside and tender inside.",
        "Sprinkle with the parsley and serve with roast chicken, pork shoulder or pork chops."
      ]
    }
  },
  {
    id: "papas-majadas-ajo",
    category: "vegetales",
    name: { es: "Papas Majadas con Ajo", en: "Garlic Mashed Potatoes" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de papas, peladas y en trozos",
        "4 dientes de ajo, pelados",
        "4 cucharadas de mantequilla",
        "¾ taza de leche caliente",
        "Sal y pimienta al gusto"
      ],
      en: [
        "3 pounds potatoes, peeled and cut into chunks",
        "4 garlic cloves, peeled",
        "4 tablespoons butter",
        "¾ cup hot milk",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las papas con los dientes de ajo en agua con sal 15–20 minutos, hasta que estén muy blandas.",
        "Escurra bien y deje que suelten el vapor 1 minuto: así no quedan aguadas.",
        "Maje las papas con el ajo, la mantequilla y la leche caliente hasta que estén cremosas. No las licúe: se ponen pegajosas.",
        "Ajuste la sal y la pimienta y sirva con carne guisada, bistec encebollado o pollo frito."
      ],
      en: [
        "Boil the potatoes with the garlic cloves in salted water 15–20 minutes, until very soft.",
        "Drain well and let them steam off 1 minute so they aren't watery.",
        "Mash the potatoes with the garlic, butter and hot milk until creamy. Don't blend them: they turn gluey.",
        "Adjust salt and pepper and serve with beef stew, steak and onions or fried chicken."
      ]
    }
  },
  {
    id: "papas-fritas-caseras",
    category: "vegetales",
    name: { es: "Papas Fritas Caseras", en: "Homemade French Fries" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de papas, peladas y en bastones",
        "Aceite vegetal para freír",
        "1 cucharadita de sal",
        "½ cucharadita de adobo (opcional)"
      ],
      en: [
        "2 pounds potatoes, peeled and cut into sticks",
        "Vegetable oil for frying",
        "1 teaspoon salt",
        "½ teaspoon adobo (optional)"
      ]
    },
    steps: {
      es: [
        "Remoje los bastones en agua fría 30 minutos para quitarles el almidón. Escurra y séquelos muy bien con un paño.",
        "Primera fritura: fría a 325°F por tandas 5 minutos, sin que doren. Saque y deje reposar 10 minutos.",
        "Segunda fritura: suba el aceite a 375°F y fría 2–3 minutos, hasta que estén doradas y crujientes.",
        "Escurra sobre papel, sale enseguida y sirva con mayo-ketchup o con la carne frita del día."
      ],
      en: [
        "Soak the sticks in cold water 30 minutes to remove the starch. Drain and dry them very well with a towel.",
        "First fry: fry at 325°F in batches 5 minutes, without browning. Remove and rest 10 minutes.",
        "Second fry: raise the oil to 375°F and fry 2–3 minutes, until golden and crisp.",
        "Drain on paper, salt right away and serve with mayo-ketchup or with the day's fried pork."
      ]
    }
  },
  {
    id: "papas-guisadas",
    category: "vegetales",
    name: { es: "Papas Guisadas a la Criolla", en: "Creole Stewed Potatoes" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de papas, peladas y en cubos",
        "¼ taza de sofrito",
        "½ taza de salsa de tomate",
        "1 cucharadita de sazón",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 hoja de laurel",
        "1½ tazas de agua",
        "1 cucharada de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 pounds potatoes, peeled and cubed",
        "¼ cup sofrito",
        "½ cup tomato sauce",
        "1 teaspoon sazón",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "1 bay leaf",
        "1½ cups water",
        "1 tablespoon olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite 2 minutos.",
        "Añada la salsa de tomate, el sazón, las aceitunas, las alcaparras y el laurel.",
        "Agregue las papas y el agua. Tape y cocine a fuego medio-bajo 20 minutos, hasta que estén blandas y la salsa espese.",
        "Ajuste la sal. Se comen con arroz blanco o como acompañante de un huevo frito o de pescado."
      ],
      en: [
        "Sauté the sofrito in the oil 2 minutes.",
        "Add the tomato sauce, sazón, olives, capers and bay leaf.",
        "Add the potatoes and water. Cover and cook over medium-low heat 20 minutes, until tender and the sauce thickens.",
        "Adjust the salt. Eat with white rice or as a side to a fried egg or fish."
      ]
    }
  },
  {
    id: "papas-rellenas-horno",
    category: "vegetales",
    name: { es: "Papas Rellenas al Horno", en: "Twice-Baked Stuffed Potatoes" },
    time: "1 hr 30 min",
    servings: 4,
    ingredients: {
      es: [
        "4 papas grandes para hornear",
        "4 cucharadas de mantequilla",
        "½ taza de crema agria",
        "1 taza de queso de papa (cheddar), rallado",
        "4 lonjas de tocineta, cocidas y picadas",
        "2 cebollines, picados",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 large baking potatoes",
        "4 tablespoons butter",
        "½ cup sour cream",
        "1 cup cheddar cheese, shredded",
        "4 slices bacon, cooked and chopped",
        "2 scallions, chopped",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Lave las papas, pínchelas con un tenedor y hornéelas a 400°F por 1 hora, hasta que estén blandas.",
        "Córtelas a lo largo y saque la pulpa con una cuchara, dejando ¼ de pulgada pegada a la cáscara.",
        "Maje la pulpa con la mantequilla, la crema agria, la mitad del queso, la tocineta, sal y pimienta.",
        "Rellene las cáscaras, cubra con el resto del queso y hornee 15 minutos más, hasta que gratinen.",
        "Decore con el cebollín y sirva caliente."
      ],
      en: [
        "Scrub the potatoes, prick with a fork and bake at 400°F for 1 hour, until tender.",
        "Cut them lengthwise and scoop out the flesh, leaving ¼ inch attached to the skin.",
        "Mash the flesh with the butter, sour cream, half the cheese, the bacon, salt and pepper.",
        "Fill the skins, top with the rest of the cheese and bake 15 more minutes, until golden.",
        "Garnish with the scallions and serve hot."
      ]
    }
  },
  {
    id: "papitas-perejil",
    category: "vegetales",
    name: { es: "Papitas a la Mantequilla con Perejil", en: "Buttered Baby Potatoes with Parsley" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de papas pequeñas (papitas rojas o amarillas)",
        "3 cucharadas de mantequilla",
        "2 dientes de ajo, picaditos",
        "2 cucharadas de perejil, picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds small baby potatoes (red or yellow)",
        "3 tablespoons butter",
        "2 garlic cloves, finely chopped",
        "2 tablespoons parsley, chopped",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las papitas enteras con cáscara en agua con sal 15 minutos, hasta que un cuchillo entre fácil. Escurra.",
        "Derrita la mantequilla en un sartén grande y sofría el ajo 1 minuto.",
        "Añada las papitas y saltee 5 minutos, hasta que se doren un poco.",
        "Agregue el perejil, sal y pimienta y sirva con pescado o pollo."
      ],
      en: [
        "Boil the whole potatoes, skin on, in salted water 15 minutes, until a knife slides in easily. Drain.",
        "Melt the butter in a large skillet and sauté the garlic 1 minute.",
        "Add the potatoes and toss 5 minutes, until lightly golden.",
        "Add the parsley, salt and pepper and serve with fish or chicken."
      ]
    }
  },
  {
    id: "papas-con-chorizo",
    category: "vegetales",
    name: { es: "Papas con Chorizo", en: "Potatoes with Chorizo" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de papas, peladas y en cubos pequeños",
        "2 chorizos españoles, en ruedas",
        "1 cebolla, picada",
        "1 pimiento verde, picado",
        "2 dientes de ajo, picados",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de pimentón",
        "Sal al gusto"
      ],
      en: [
        "2 pounds potatoes, peeled and diced",
        "2 Spanish chorizos, sliced",
        "1 onion, chopped",
        "1 green bell pepper, chopped",
        "2 garlic cloves, chopped",
        "2 tablespoons olive oil",
        "½ teaspoon paprika",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las papas en agua con sal 8 minutos, sólo hasta que estén casi blandas. Escurra.",
        "En un sartén grande, dore el chorizo en el aceite 3 minutos para que suelte su grasa.",
        "Añada la cebolla, el pimiento y el ajo y sofría 4 minutos.",
        "Agregue las papas y el pimentón y cocine 10 minutos, moviendo de vez en cuando, hasta que se doren.",
        "Pruebe antes de salar: el chorizo ya trae sal. Sirva con huevos fritos o pan de agua."
      ],
      en: [
        "Boil the potatoes in salted water 8 minutes, just until almost tender. Drain.",
        "In a large skillet, brown the chorizo in the oil 3 minutes so it releases its fat.",
        "Add the onion, bell pepper and garlic and sauté 4 minutes.",
        "Add the potatoes and paprika and cook 10 minutes, stirring now and then, until golden.",
        "Taste before salting: the chorizo is already salty. Serve with fried eggs or pan de agua."
      ]
    }
  },
  {
    id: "papas-gratinadas",
    category: "vegetales",
    name: { es: "Papas Gratinadas", en: "Potatoes au Gratin" },
    time: "1 hr 30 min",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de papas, peladas y en ruedas finas",
        "2 tazas de crema de leche (heavy cream)",
        "1 taza de leche",
        "3 dientes de ajo, majados",
        "1½ tazas de queso suizo o mozzarella, rallado",
        "½ taza de queso parmesano, rallado",
        "2 cucharadas de mantequilla",
        "¼ cucharadita de nuez moscada",
        "1 cucharadita de sal"
      ],
      en: [
        "3 pounds potatoes, peeled and thinly sliced",
        "2 cups heavy cream",
        "1 cup milk",
        "3 garlic cloves, mashed",
        "1½ cups Swiss or mozzarella cheese, shredded",
        "½ cup grated Parmesan cheese",
        "2 tablespoons butter",
        "¼ teaspoon nutmeg",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375°F y engrase un molde de 9 × 13 pulgadas con la mantequilla.",
        "Caliente la crema, la leche, el ajo, la nuez moscada y la sal sin que hierva.",
        "Acomode las papas en capas, cubriendo cada capa con un poco de la crema y del queso suizo.",
        "Termine con la crema restante y el parmesano. Tape con papel de aluminio y hornee 45 minutos.",
        "Destape y hornee 20–25 minutos más, hasta que esté dorado y burbujeante. Es el acompañante del pernil y el pavo en las fiestas."
      ],
      en: [
        "Heat the oven to 375°F and butter a 9 × 13-inch dish.",
        "Warm the cream, milk, garlic, nutmeg and salt without boiling.",
        "Layer the potatoes, covering each layer with some of the cream and Swiss cheese.",
        "Finish with the remaining cream and the Parmesan. Cover with foil and bake 45 minutes.",
        "Uncover and bake 20–25 more minutes, until golden and bubbling. It's the side for roast pork and turkey at holiday meals."
      ]
    }
  },
  {
    id: "croquetas-papa",
    category: "entremeses",
    name: { es: "Croquetas de Papa", en: "Potato Croquettes" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 libras de papas, peladas y en trozos",
        "2 cucharadas de mantequilla",
        "½ taza de queso parmesano, rallado",
        "¼ taza de jamón de cocinar, picadito",
        "1 cucharada de perejil, picado",
        "2 huevos (1 para la mezcla y 1 para empanar)",
        "1 taza de pan rallado",
        "Aceite vegetal para freír",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds potatoes, peeled and cut into chunks",
        "2 tablespoons butter",
        "½ cup grated Parmesan cheese",
        "¼ cup cooking ham, finely chopped",
        "1 tablespoon parsley, chopped",
        "2 eggs (1 for the mixture and 1 for breading)",
        "1 cup breadcrumbs",
        "Vegetable oil for frying",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las papas en agua con sal hasta que estén blandas, escúrralas bien y májelas con la mantequilla. Deje enfriar.",
        "Mezcle con el queso, el jamón, el perejil, 1 huevo, sal y pimienta.",
        "Forme croquetas alargadas, páselas por el otro huevo batido y luego por el pan rallado. Refrigere 15 minutos para que no se abran.",
        "Fría en aceite a 350°F, 2–3 minutos, hasta que estén doradas.",
        "Escurra y sirva calientes con mayo-ketchup."
      ],
      en: [
        "Boil the potatoes in salted water until tender, drain well and mash with the butter. Let cool.",
        "Mix with the cheese, ham, parsley, 1 egg, salt and pepper.",
        "Shape into logs, dip in the other beaten egg and then in the breadcrumbs. Refrigerate 15 minutes so they hold together.",
        "Fry in oil at 350°F, 2–3 minutes, until golden.",
        "Drain and serve hot with mayo-ketchup."
      ]
    }
  },
  {
    id: "papas-encebolladas",
    category: "vegetales",
    name: { es: "Papas Fritas Encebolladas", en: "Pan-Fried Potatoes with Onions" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de papas, peladas y en ruedas de ¼ de pulgada",
        "2 cebollas grandes, en ruedas",
        "⅓ taza de aceite de oliva",
        "1 cucharadita de sal",
        "½ cucharadita de pimienta"
      ],
      en: [
        "2 pounds potatoes, peeled and sliced ¼ inch thick",
        "2 large onions, sliced",
        "⅓ cup olive oil",
        "1 teaspoon salt",
        "½ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Seque bien las ruedas de papa con un paño.",
        "Caliente el aceite en un sartén grande y fría las papas a fuego medio, tapadas, 10 minutos, volteando con cuidado.",
        "Añada la cebolla y siga cocinando destapado 10–12 minutos, hasta que las papas estén doradas y la cebolla blanda y algo caramelizada.",
        "Sale, añada pimienta y sirva con bistec, huevos fritos o chuletas."
      ],
      en: [
        "Dry the potato slices well with a towel.",
        "Heat the oil in a large skillet and fry the potatoes over medium heat, covered, 10 minutes, turning gently.",
        "Add the onion and keep cooking uncovered 10–12 minutes, until the potatoes are golden and the onion soft and slightly caramelized.",
        "Salt, add pepper and serve with steak, fried eggs or pork chops."
      ]
    }
  }
,
  {
    id: "majado-malanga-mojo",
    category: "vegetales",
    name: { es: "Majado de Malanga con Mojo de Ajo", en: "Mashed Malanga with Garlic Mojo" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de malanga (yautía), pelada y en trozos",
        "2 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "Mojo: ¼ taza de aceite de oliva",
        "6 dientes de ajo, majados",
        "1 cucharada de jugo de limón",
        "1 cucharada de cilantro o perejil, picado",
        "Sal al gusto"
      ],
      en: [
        "2 pounds malanga (yautía), peeled and cut into chunks",
        "2 tablespoons butter",
        "½ cup hot milk",
        "Mojo: ¼ cup olive oil",
        "6 garlic cloves, mashed",
        "1 tablespoon lime juice",
        "1 tablespoon cilantro or parsley, chopped",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Pele la malanga con guantes o con las manos aceitadas (la cáscara pica) y póngala en agua para que no se oscurezca.",
        "Hierva en agua con sal 20–25 minutos, hasta que esté muy blanda. Escurra.",
        "Maje caliente con la mantequilla y la leche hasta que esté suave y cremosa: la malanga queda más pegajosa que la papa, es normal.",
        "Para el mojo: caliente el aceite con el ajo a fuego bajo 1 minuto sin dorar, retire y añada el limón, el cilantro y sal.",
        "Sirva el majado con el mojo por encima, con carne guisada, bacalao o pollo. En la isla la malanga y la yautía son la misma vianda."
      ],
      en: [
        "Peel the malanga with gloves or oiled hands (the skin itches) and keep it in water so it doesn't darken.",
        "Boil in salted water 20–25 minutes, until very soft. Drain.",
        "Mash while hot with the butter and milk until smooth and creamy: malanga is stickier than potato, that's normal.",
        "For the mojo: warm the oil with the garlic over low heat 1 minute without browning, remove and add the lime, cilantro and salt.",
        "Serve the mash topped with the mojo, with beef stew, salt cod or chicken. On the island, malanga and yautía are the same root vegetable."
      ]
    }
  },
  {
    id: "pure-malanga-bebes",
    category: "vegetales",
    name: { es: "Puré de Malanga para Bebés", en: "Malanga Purée for Babies" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de malanga (yautía), pelada y en trozos",
        "1 taza del agua de hervir, o leche materna o de fórmula",
        "1 cucharadita de aceite de oliva (opcional)"
      ],
      en: [
        "1 pound malanga (yautía), peeled and cut into chunks",
        "1 cup of the cooking water, or breast milk or formula",
        "1 teaspoon olive oil (optional)"
      ]
    },
    steps: {
      es: [
        "Hierva la malanga en agua sin sal 20–25 minutos, hasta que esté muy blanda.",
        "Májela o lícuela con el líquido poco a poco hasta tener un puré liso, sin grumos. Para bebés más grandes, déjelo más espeso.",
        "No añada sal, azúcar ni miel: los bebés menores de 1 año no deben comerlos.",
        "Sirva tibio. Guarde en la nevera hasta 2 días o congele en porciones. Consulte con el pediatra antes de empezar alimentos sólidos."
      ],
      en: [
        "Boil the malanga in unsalted water 20–25 minutes, until very soft.",
        "Mash or blend it with the liquid little by little into a smooth purée with no lumps. For older babies, leave it thicker.",
        "Don't add salt, sugar or honey: babies under 1 year should not have them.",
        "Serve lukewarm. Keep in the fridge up to 2 days or freeze in portions. Check with the pediatrician before starting solid foods."
      ]
    }
  },

  // ── Undécima tanda (2026-10): cupcakes, bizcochos y panes dulces ──
  {
    id: "cupcakes-vainilla",
    category: "bizcochos",
    name: { es: "Cupcakes (Bizcochitos) de Vainilla", en: "Vanilla Cupcakes" },
    time: "50 min",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de harina de trigo",
        "1½ cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "½ taza de mantequilla, blanda",
        "¾ taza de azúcar",
        "2 huevos",
        "2 cucharaditas de vainilla",
        "½ taza de leche",
        "Frosting: ½ taza de mantequilla, blanda",
        "2 tazas de azúcar en polvo",
        "2 cucharadas de leche",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1½ cups all-purpose flour",
        "1½ teaspoons baking powder",
        "¼ teaspoon salt",
        "½ cup butter, softened",
        "¾ cup sugar",
        "2 eggs",
        "2 teaspoons vanilla",
        "½ cup milk",
        "Frosting: ½ cup butter, softened",
        "2 cups powdered sugar",
        "2 tablespoons milk",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y ponga 12 capacillos de papel en un molde de muffins.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa. Añada los huevos de uno en uno y la vainilla.",
        "Cierna la harina con el polvo de hornear y la sal, y añádala alternando con la leche, sin batir de más.",
        "Llene los capacillos a ⅔ y hornee 18–20 minutos, hasta que un palillo salga limpio. Deje enfriar por completo.",
        "Para el frosting: bata la mantequilla con el azúcar en polvo, la leche y la vainilla hasta que esté esponjoso. Decore con manga o cuchara."
      ],
      en: [
        "Heat the oven to 350°F and line a muffin pan with 12 paper liners.",
        "Beat the butter with the sugar until creamy. Add the eggs one at a time and the vanilla.",
        "Sift the flour with the baking powder and salt and add it alternately with the milk, without overmixing.",
        "Fill the liners ⅔ full and bake 18–20 minutes, until a toothpick comes out clean. Let cool completely.",
        "For the frosting: beat the butter with the powdered sugar, milk and vanilla until fluffy. Pipe or spread on top."
      ]
    }
  },
  {
    id: "cupcakes-chocolate",
    category: "bizcochos",
    name: { es: "Cupcakes de Chocolate", en: "Chocolate Cupcakes" },
    time: "50 min",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de harina de trigo",
        "½ taza de cocoa en polvo",
        "1 cucharadita de bicarbonato de sodio",
        "¼ cucharadita de sal",
        "1 taza de azúcar",
        "1 huevo",
        "½ taza de leche",
        "⅓ taza de aceite vegetal",
        "1 cucharadita de vainilla",
        "½ taza de café colado caliente",
        "Frosting: 4 onzas de chocolate semidulce, derretido",
        "½ taza de mantequilla, blanda",
        "1 taza de azúcar en polvo"
      ],
      en: [
        "1 cup all-purpose flour",
        "½ cup cocoa powder",
        "1 teaspoon baking soda",
        "¼ teaspoon salt",
        "1 cup sugar",
        "1 egg",
        "½ cup milk",
        "⅓ cup vegetable oil",
        "1 teaspoon vanilla",
        "½ cup hot brewed coffee",
        "Frosting: 4 oz semisweet chocolate, melted",
        "½ cup butter, softened",
        "1 cup powdered sugar"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y prepare 12 capacillos.",
        "Mezcle la harina, la cocoa, el bicarbonato, la sal y el azúcar.",
        "Añada el huevo, la leche, el aceite y la vainilla y bata 1 minuto. Incorpore el café caliente: la mezcla queda líquida, es normal (el café realza el chocolate).",
        "Llene los capacillos a ⅔ y hornee 18–20 minutos. Deje enfriar.",
        "Para el frosting: bata la mantequilla con el azúcar en polvo y el chocolate derretido tibio hasta que esté cremoso y decore."
      ],
      en: [
        "Heat the oven to 350°F and prepare 12 liners.",
        "Mix the flour, cocoa, baking soda, salt and sugar.",
        "Add the egg, milk, oil and vanilla and beat 1 minute. Stir in the hot coffee: the batter will be thin, that's normal (coffee boosts the chocolate).",
        "Fill the liners ⅔ full and bake 18–20 minutes. Let cool.",
        "For the frosting: beat the butter with the powdered sugar and the lukewarm melted chocolate until creamy and decorate."
      ]
    }
  },
  {
    id: "cupcakes-guayaba-queso",
    category: "bizcochos",
    name: { es: "Cupcakes de Guayaba y Queso", en: "Guava and Cream Cheese Cupcakes" },
    time: "55 min",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de harina de trigo",
        "1½ cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "½ taza de mantequilla, blanda",
        "¾ taza de azúcar",
        "2 huevos",
        "1 cucharadita de vainilla",
        "½ taza de leche",
        "4 onzas de pasta de guayaba, en 12 cubitos",
        "Frosting: 8 onzas de queso crema, blando",
        "¼ taza de mantequilla, blanda",
        "1½ tazas de azúcar en polvo",
        "2 onzas de pasta de guayaba, derretida con 1 cucharada de agua"
      ],
      en: [
        "1½ cups all-purpose flour",
        "1½ teaspoons baking powder",
        "¼ teaspoon salt",
        "½ cup butter, softened",
        "¾ cup sugar",
        "2 eggs",
        "1 teaspoon vanilla",
        "½ cup milk",
        "4 oz guava paste, in 12 cubes",
        "Frosting: 8 oz cream cheese, softened",
        "¼ cup butter, softened",
        "1½ cups powdered sugar",
        "2 oz guava paste, melted with 1 tablespoon water"
      ]
    },
    steps: {
      es: [
        "Prepare la mezcla como la de los cupcakes de vainilla: mantequilla y azúcar cremosas, huevos, vainilla y la harina alternando con la leche.",
        "Ponga 1 cucharada de mezcla en cada capacillo, un cubito de guayaba en el centro y cubra con más mezcla hasta ⅔.",
        "Hornee a 350°F por 20 minutos y deje enfriar por completo.",
        "Bata el queso crema con la mantequilla y el azúcar en polvo hasta que esté liso.",
        "Decore con el frosting y un hilo de la guayaba derretida por encima: el sabor de los pastelillos de guayaba y queso en un cupcake."
      ],
      en: [
        "Make the batter like the vanilla cupcakes: cream the butter and sugar, add the eggs, vanilla and the flour alternately with the milk.",
        "Put 1 tablespoon of batter in each liner, a guava cube in the center and cover with more batter to ⅔ full.",
        "Bake at 350°F for 20 minutes and let cool completely.",
        "Beat the cream cheese with the butter and powdered sugar until smooth.",
        "Frost and drizzle with the melted guava: the flavor of guava-and-cheese pastries in a cupcake."
      ]
    }
  },
  {
    id: "cupcakes-coquito",
    category: "bizcochos",
    name: { es: "Cupcakes de Coquito", en: "Coquito Cupcakes" },
    time: "55 min",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de harina de trigo",
        "1½ cucharaditas de polvo de hornear",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de nuez moscada",
        "¼ cucharadita de sal",
        "½ taza de mantequilla, blanda",
        "¾ taza de azúcar",
        "2 huevos",
        "½ taza de leche de coco con 1 cucharada de leche condensada (o ½ taza de coquito)",
        "½ taza de coco rallado",
        "Frosting: ½ taza de mantequilla, blanda",
        "2 tazas de azúcar en polvo",
        "3 cucharadas de crema de coco",
        "Canela en polvo para decorar"
      ],
      en: [
        "1½ cups all-purpose flour",
        "1½ teaspoons baking powder",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon nutmeg",
        "¼ teaspoon salt",
        "½ cup butter, softened",
        "¾ cup sugar",
        "2 eggs",
        "½ cup coconut milk with 1 tablespoon condensed milk (or ½ cup coquito)",
        "½ cup shredded coconut",
        "Frosting: ½ cup butter, softened",
        "2 cups powdered sugar",
        "3 tablespoons cream of coconut",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y prepare 12 capacillos.",
        "Bata la mantequilla con el azúcar, añada los huevos de uno en uno.",
        "Cierna la harina con el polvo de hornear, la canela, la nuez moscada y la sal. Añádala alternando con la leche de coco (o el coquito) y agregue el coco rallado.",
        "Hornee 18–20 minutos y deje enfriar.",
        "Bata la mantequilla con el azúcar en polvo y la crema de coco, decore y espolvoree canela. Si usa coquito con ron, el horneado evapora parte del alcohol, no todo."
      ],
      en: [
        "Heat the oven to 350°F and prepare 12 liners.",
        "Beat the butter with the sugar and add the eggs one at a time.",
        "Sift the flour with the baking powder, cinnamon, nutmeg and salt. Add it alternately with the coconut milk (or coquito) and fold in the shredded coconut.",
        "Bake 18–20 minutes and let cool.",
        "Beat the butter with the powdered sugar and cream of coconut, frost and dust with cinnamon. If you use coquito with rum, baking evaporates some of the alcohol, not all of it."
      ]
    }
  },
  {
    id: "bizcocho-zanahoria",
    category: "bizcochos",
    name: { es: "Bizcocho de Zanahoria", en: "Carrot Cake" },
    time: "1 hr 15 min",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de bicarbonato de sodio",
        "2 cucharaditas de canela en polvo",
        "½ cucharadita de sal",
        "4 huevos",
        "1½ tazas de azúcar",
        "1 taza de aceite vegetal",
        "3 tazas de zanahoria rallada",
        "1 lata de 8 onzas de piña triturada, escurrida",
        "½ taza de nueces, picadas",
        "Frosting: 8 onzas de queso crema, blando",
        "¼ taza de mantequilla, blanda",
        "2 tazas de azúcar en polvo"
      ],
      en: [
        "2 cups all-purpose flour",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "2 teaspoons ground cinnamon",
        "½ teaspoon salt",
        "4 eggs",
        "1½ cups sugar",
        "1 cup vegetable oil",
        "3 cups grated carrot",
        "1 can (8 oz) crushed pineapple, drained",
        "½ cup walnuts, chopped",
        "Frosting: 8 oz cream cheese, softened",
        "¼ cup butter, softened",
        "2 cups powdered sugar"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase un molde de 9 × 13 pulgadas.",
        "Mezcle la harina, el polvo de hornear, el bicarbonato, la canela y la sal.",
        "Bata los huevos con el azúcar y el aceite. Añada los secos y luego la zanahoria, la piña y las nueces.",
        "Hornee 40–45 minutos, hasta que un palillo salga limpio. Deje enfriar por completo.",
        "Bata el queso crema con la mantequilla y el azúcar en polvo y cubra el bizcocho. La piña lo mantiene húmedo, como en las reposterías de la isla."
      ],
      en: [
        "Heat the oven to 350°F and grease a 9 × 13-inch pan.",
        "Mix the flour, baking powder, baking soda, cinnamon and salt.",
        "Beat the eggs with the sugar and oil. Add the dry ingredients, then the carrot, pineapple and walnuts.",
        "Bake 40–45 minutes, until a toothpick comes out clean. Let cool completely.",
        "Beat the cream cheese with the butter and powdered sugar and frost the cake. The pineapple keeps it moist, as in the island's bakeries."
      ]
    }
  },
  {
    id: "bizcocho-marmoleado",
    category: "bizcochos",
    name: { es: "Bizcocho Marmoleado", en: "Marble Cake" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "1 taza de mantequilla, blanda",
        "1½ tazas de azúcar",
        "4 huevos",
        "1 cucharada de vainilla",
        "1 taza de leche",
        "3 cucharadas de cocoa en polvo",
        "2 cucharadas de leche caliente"
      ],
      en: [
        "2½ cups all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "1 cup butter, softened",
        "1½ cups sugar",
        "4 eggs",
        "1 tablespoon vanilla",
        "1 cup milk",
        "3 tablespoons cocoa powder",
        "2 tablespoons hot milk"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase y enharine un molde de tubo.",
        "Bata la mantequilla con el azúcar, añada los huevos de uno en uno y la vainilla. Agregue la harina cernida con el polvo de hornear y la sal, alternando con la leche.",
        "Separe un tercio de la mezcla y añádale la cocoa disuelta en la leche caliente.",
        "Alterne cucharadas de mezcla blanca y de chocolate en el molde y pase un cuchillo en zigzag para marmolear.",
        "Hornee 50–55 minutos, hasta que un palillo salga limpio. Deje enfriar 15 minutos antes de desmoldar."
      ],
      en: [
        "Heat the oven to 350°F and grease and flour a tube pan.",
        "Beat the butter with the sugar, add the eggs one at a time and the vanilla. Add the flour sifted with the baking powder and salt, alternating with the milk.",
        "Set aside a third of the batter and stir in the cocoa dissolved in the hot milk.",
        "Alternate spoonfuls of white and chocolate batter in the pan and swirl a knife through in a zigzag.",
        "Bake 50–55 minutes, until a toothpick comes out clean. Cool 15 minutes before unmolding."
      ]
    }
  },
  {
    id: "bizcocho-parcha",
    category: "bizcochos",
    name: { es: "Bizcocho de Parcha", en: "Passion Fruit Cake" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "¼ cucharadita de sal",
        "1 taza de mantequilla, blanda",
        "1½ tazas de azúcar",
        "4 huevos",
        "½ taza de pulpa de parcha, colada",
        "½ taza de leche",
        "Almíbar de parcha: ¼ taza de pulpa de parcha",
        "¼ taza de azúcar",
        "Glaseado: 1 taza de azúcar en polvo",
        "2 cucharadas de pulpa de parcha"
      ],
      en: [
        "2½ cups all-purpose flour",
        "2 teaspoons baking powder",
        "¼ teaspoon salt",
        "1 cup butter, softened",
        "1½ cups sugar",
        "4 eggs",
        "½ cup passion fruit pulp, strained",
        "½ cup milk",
        "Passion fruit syrup: ¼ cup passion fruit pulp",
        "¼ cup sugar",
        "Glaze: 1 cup powdered sugar",
        "2 tablespoons passion fruit pulp"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase y enharine un molde de tubo.",
        "Bata la mantequilla con el azúcar y añada los huevos de uno en uno. Agregue la harina cernida con el polvo de hornear y la sal, alternando con la parcha y la leche.",
        "Hornee 50–55 minutos, hasta que un palillo salga limpio.",
        "Mientras está caliente, píquelo con un palillo y báñelo con el almíbar (parcha y azúcar hervidas 2 minutos).",
        "Desmolde frío y cubra con el glaseado de azúcar en polvo y parcha."
      ],
      en: [
        "Heat the oven to 350°F and grease and flour a tube pan.",
        "Beat the butter with the sugar and add the eggs one at a time. Add the flour sifted with the baking powder and salt, alternating with the passion fruit and milk.",
        "Bake 50–55 minutes, until a toothpick comes out clean.",
        "While still hot, poke it with a toothpick and soak it with the syrup (passion fruit and sugar boiled 2 minutes).",
        "Unmold when cool and cover with the powdered sugar and passion fruit glaze."
      ]
    }
  },
  {
    id: "donas-glaseadas",
    category: "panes",
    name: { es: "Donas Glaseadas", en: "Glazed Doughnuts" },
    time: "2 hr 30 min",
    servings: 14,
    ingredients: {
      es: [
        "3½ tazas de harina de trigo",
        "1 sobre de levadura seca (¼ onza)",
        "¼ taza de azúcar",
        "½ cucharadita de sal",
        "1 taza de leche tibia",
        "2 huevos",
        "¼ taza de mantequilla, derretida",
        "1 cucharadita de vainilla",
        "Aceite vegetal para freír",
        "Glaseado: 2 tazas de azúcar en polvo",
        "¼ taza de leche",
        "1 cucharadita de vainilla"
      ],
      en: [
        "3½ cups all-purpose flour",
        "1 packet active dry yeast (¼ oz)",
        "¼ cup sugar",
        "½ teaspoon salt",
        "1 cup warm milk",
        "2 eggs",
        "¼ cup butter, melted",
        "1 teaspoon vanilla",
        "Vegetable oil for frying",
        "Glaze: 2 cups powdered sugar",
        "¼ cup milk",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura y 1 cucharada del azúcar en la leche tibia y deje reposar 10 minutos, hasta que haga espuma.",
        "Añada el resto del azúcar, los huevos, la mantequilla, la vainilla, la sal y la harina. Amase 8 minutos hasta tener una masa suave. Deje crecer tapada 1 hora, hasta que doble.",
        "Estire a ½ pulgada y corte las donas con un cortador (o un vaso y una tapita para el hueco). Deje crecer 30 minutos más.",
        "Fría en aceite a 350°F, 1 minuto por lado, hasta que estén doradas. Escurra.",
        "Bata el azúcar en polvo con la leche y la vainilla y pase las donas tibias por el glaseado. Deje secar sobre una rejilla."
      ],
      en: [
        "Dissolve the yeast and 1 tablespoon of the sugar in the warm milk and let rest 10 minutes, until foamy.",
        "Add the rest of the sugar, the eggs, butter, vanilla, salt and flour. Knead 8 minutes into a soft dough. Let rise covered 1 hour, until doubled.",
        "Roll out to ½ inch and cut the doughnuts with a cutter (or a glass and a small cap for the hole). Let rise 30 more minutes.",
        "Fry in oil at 350°F, 1 minute per side, until golden. Drain.",
        "Whisk the powdered sugar with the milk and vanilla and dip the warm doughnuts in the glaze. Let set on a rack."
      ]
    }
  },
  {
    id: "donas-rellenas-guayaba",
    category: "panes",
    name: { es: "Donas Rellenas de Guayaba", en: "Guava-Filled Doughnuts" },
    time: "2 hr 30 min",
    servings: 12,
    ingredients: {
      es: [
        "3½ tazas de harina de trigo",
        "1 sobre de levadura seca (¼ onza)",
        "¼ taza de azúcar (más para cubrir)",
        "½ cucharadita de sal",
        "1 taza de leche tibia",
        "2 huevos",
        "¼ taza de mantequilla, derretida",
        "8 onzas de pasta de guayaba",
        "3 cucharadas de agua",
        "Aceite vegetal para freír",
        "½ taza de azúcar para cubrir"
      ],
      en: [
        "3½ cups all-purpose flour",
        "1 packet active dry yeast (¼ oz)",
        "¼ cup sugar (plus more for coating)",
        "½ teaspoon salt",
        "1 cup warm milk",
        "2 eggs",
        "¼ cup butter, melted",
        "8 oz guava paste",
        "3 tablespoons water",
        "Vegetable oil for frying",
        "½ cup sugar for coating"
      ]
    },
    steps: {
      es: [
        "Haga la masa como la de las donas glaseadas y déjela crecer 1 hora.",
        "Estire a ½ pulgada y corte círculos de 3 pulgadas, sin hueco. Deje crecer 30 minutos.",
        "Fría a 350°F, 1–2 minutos por lado. Escurra y páselas por azúcar mientras están tibias.",
        "Derrita la guayaba con el agua a fuego bajo hasta tener una crema y póngala en una manga con boquilla fina.",
        "Haga un hoyito en el lado de cada dona y rellénela con la guayaba. Son las de las panaderías por la mañana, con un café con leche."
      ],
      en: [
        "Make the dough like the glazed doughnuts and let it rise 1 hour.",
        "Roll out to ½ inch and cut 3-inch rounds, without holes. Let rise 30 minutes.",
        "Fry at 350°F, 1–2 minutes per side. Drain and roll in sugar while warm.",
        "Melt the guava paste with the water over low heat into a cream and put it in a piping bag with a thin tip.",
        "Poke a small hole in the side of each doughnut and fill it with the guava. They're the bakery ones in the morning, with café con leche."
      ]
    }
  },
  {
    id: "rollos-canela",
    category: "panes",
    name: { es: "Rollos de Canela", en: "Cinnamon Rolls" },
    time: "2 hr 45 min",
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de harina de trigo",
        "1 sobre de levadura seca (¼ onza)",
        "⅓ taza de azúcar",
        "½ cucharadita de sal",
        "1 taza de leche tibia",
        "2 huevos",
        "⅓ taza de mantequilla, derretida",
        "Relleno: ½ taza de mantequilla, blanda",
        "¾ taza de azúcar morena",
        "2 cucharadas de canela en polvo",
        "Glaseado: 4 onzas de queso crema, blando",
        "1 taza de azúcar en polvo",
        "2 cucharadas de leche"
      ],
      en: [
        "4 cups all-purpose flour",
        "1 packet active dry yeast (¼ oz)",
        "⅓ cup sugar",
        "½ teaspoon salt",
        "1 cup warm milk",
        "2 eggs",
        "⅓ cup butter, melted",
        "Filling: ½ cup butter, softened",
        "¾ cup brown sugar",
        "2 tablespoons ground cinnamon",
        "Glaze: 4 oz cream cheese, softened",
        "1 cup powdered sugar",
        "2 tablespoons milk"
      ]
    },
    steps: {
      es: [
        "Disuelva la levadura en la leche tibia con 1 cucharada del azúcar y deje reposar 10 minutos.",
        "Añada el resto del azúcar, los huevos, la mantequilla, la sal y la harina. Amase 8 minutos y deje crecer tapada 1 hora.",
        "Estire en un rectángulo de 12 × 18 pulgadas, unte la mantequilla blanda y espolvoree el azúcar morena con la canela. Enrolle por el lado largo y corte 12 rollos.",
        "Colóquelos en un molde engrasado, deje crecer 30 minutos y hornee a 350°F por 25–30 minutos, hasta que doren.",
        "Bata el queso crema con el azúcar en polvo y la leche y cubra los rollos tibios."
      ],
      en: [
        "Dissolve the yeast in the warm milk with 1 tablespoon of the sugar and let rest 10 minutes.",
        "Add the rest of the sugar, the eggs, butter, salt and flour. Knead 8 minutes and let rise covered 1 hour.",
        "Roll into a 12 × 18-inch rectangle, spread the soft butter and sprinkle the brown sugar mixed with the cinnamon. Roll up from the long side and cut 12 rolls.",
        "Place in a greased pan, let rise 30 minutes and bake at 350°F for 25–30 minutes, until golden.",
        "Beat the cream cheese with the powdered sugar and milk and spread over the warm rolls."
      ]
    }
  },
  {
    id: "churros-chocolate",
    category: "postres",
    name: { es: "Churros con Chocolate", en: "Churros with Chocolate Sauce" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de agua",
        "2 cucharadas de azúcar",
        "½ cucharadita de sal",
        "2 cucharadas de mantequilla",
        "1 taza de harina de trigo",
        "1 huevo",
        "Aceite vegetal para freír",
        "Para cubrir: ½ taza de azúcar",
        "1 cucharadita de canela en polvo",
        "Salsa: 4 onzas de chocolate semidulce",
        "½ taza de leche"
      ],
      en: [
        "1 cup water",
        "2 tablespoons sugar",
        "½ teaspoon salt",
        "2 tablespoons butter",
        "1 cup all-purpose flour",
        "1 egg",
        "Vegetable oil for frying",
        "Coating: ½ cup sugar",
        "1 teaspoon ground cinnamon",
        "Sauce: 4 oz semisweet chocolate",
        "½ cup milk"
      ]
    },
    steps: {
      es: [
        "Hierva el agua con el azúcar, la sal y la mantequilla. Añada la harina de golpe y mueva hasta que la masa se despegue de la olla.",
        "Deje enfriar 5 minutos y añada el huevo, batiendo hasta que la masa esté lisa.",
        "Pase la masa a una manga con boquilla de estrella y fría tiras de 5 pulgadas en aceite a 350°F, 2–3 minutos, hasta que doren.",
        "Escurra y páselos enseguida por el azúcar con canela.",
        "Para la salsa: caliente la leche y derrita el chocolate en ella. Sirva los churros calientes para mojar, como en las fiestas patronales."
      ],
      en: [
        "Boil the water with the sugar, salt and butter. Add the flour all at once and stir until the dough pulls away from the pot.",
        "Cool 5 minutes and add the egg, beating until the dough is smooth.",
        "Put the dough in a piping bag with a star tip and fry 5-inch strips in oil at 350°F, 2–3 minutes, until golden.",
        "Drain and roll right away in the cinnamon sugar.",
        "For the sauce: heat the milk and melt the chocolate in it. Serve the churros hot for dipping, as at the patron saint festivals."
      ]
    }
  },

  // ── Duodécima tanda (2026-10): gelatinas ──
  {
    id: "gelatina-mosaico",
    category: "postres",
    name: { es: "Gelatina de Mosaico", en: "Mosaic (Stained Glass) Gelatin" },
    time: "40 min + 8 hr de nevera",
    servings: 16,
    ingredients: {
      es: [
        "1 caja de 3 onzas de gelatina de fresa",
        "1 caja de 3 onzas de gelatina de limón",
        "1 caja de 3 onzas de gelatina de uva",
        "3 tazas de agua hirviendo (1 para cada caja)",
        "Base blanca: 2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 box (3 oz) strawberry gelatin",
        "1 box (3 oz) lime gelatin",
        "1 box (3 oz) grape gelatin",
        "3 cups boiling water (1 for each box)",
        "White base: 2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Disuelva cada caja de gelatina en 1 taza de agua hirviendo, en tres moldes cuadrados separados. Refrigere 4 horas, hasta que estén firmes, y córtelas en cubitos.",
        "Para la base: espolvoree la gelatina sin sabor sobre el agua fría y deje que se hidrate 5 minutos. Caliéntela en el microondas 20–30 segundos, hasta que se disuelva (sin hervir).",
        "Mezcle la leche condensada, la evaporada y la vainilla y añada la gelatina disuelta, batiendo.",
        "Reparta los cubitos de colores en un molde engrasado y vierta encima la mezcla blanca, que debe estar a temperatura ambiente (si está caliente derrite los cubitos).",
        "Refrigere toda la noche y desmolde: al cortarla se ve como un vitral. Es la gelatina de los cumpleaños y las fiestas."
      ],
      en: [
        "Dissolve each gelatin box in 1 cup of boiling water, in three separate square pans. Refrigerate 4 hours, until firm, and cut into small cubes.",
        "For the base: sprinkle the unflavored gelatin over the cold water and let it bloom 5 minutes. Microwave 20–30 seconds, until dissolved (without boiling).",
        "Mix the condensed milk, evaporated milk and vanilla and whisk in the dissolved gelatin.",
        "Scatter the colored cubes in a greased mold and pour the white mixture over them, at room temperature (if it's hot it melts the cubes).",
        "Refrigerate overnight and unmold: when sliced it looks like stained glass. It's the gelatin of birthdays and parties."
      ]
    }
  },
  {
    id: "gelatina-leche",
    category: "postres",
    name: { es: "Gelatina de Leche Condensada", en: "Condensed Milk Gelatin" },
    time: "20 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "1 taza de leche",
        "1 cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "1 cup milk",
        "1 teaspoon vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Espolvoree la gelatina sobre el agua fría y deje hidratar 5 minutos.",
        "Caliente la leche hasta que humee (sin hervir), retire y disuelva en ella la gelatina hidratada.",
        "Añada la leche condensada, la evaporada y la vainilla y mezcle bien.",
        "Vierta en un molde engrasado o en vasitos y refrigere 4 horas, hasta que cuaje.",
        "Desmolde y espolvoree canela."
      ],
      en: [
        "Sprinkle the gelatin over the cold water and let it bloom 5 minutes.",
        "Heat the milk until steaming (not boiling), remove and dissolve the bloomed gelatin in it.",
        "Add the condensed milk, evaporated milk and vanilla and mix well.",
        "Pour into a greased mold or small cups and refrigerate 4 hours, until set.",
        "Unmold and dust with cinnamon."
      ]
    }
  },
  {
    id: "gelatina-coco",
    category: "postres",
    name: { es: "Gelatina de Coco", en: "Coconut Gelatin" },
    time: "20 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 15 onzas de crema de coco",
        "1 taza de leche",
        "½ taza de coco rallado, tostado"
      ],
      en: [
        "2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "1 can (13.5 oz) coconut milk",
        "1 can (15 oz) cream of coconut",
        "1 cup milk",
        "½ cup shredded coconut, toasted"
      ]
    },
    steps: {
      es: [
        "Hidrate la gelatina en el agua fría 5 minutos.",
        "Caliente la leche de coco con la leche hasta que humee y disuelva en ella la gelatina.",
        "Retire del fuego y añada la crema de coco, mezclando bien.",
        "Vierta en un molde o en vasitos y refrigere 4 horas.",
        "Sirva con el coco tostado por encima. Es como un tembleque, pero más firme y sin maicena."
      ],
      en: [
        "Bloom the gelatin in the cold water 5 minutes.",
        "Heat the coconut milk with the milk until steaming and dissolve the gelatin in it.",
        "Remove from heat and add the cream of coconut, mixing well.",
        "Pour into a mold or small cups and refrigerate 4 hours.",
        "Serve topped with the toasted coconut. It's like a tembleque, but firmer and without cornstarch."
      ]
    }
  },
  {
    id: "gelatina-parcha",
    category: "postres",
    name: { es: "Gelatina de Parcha Natural", en: "Fresh Passion Fruit Gelatin" },
    time: "20 min + 4 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "1 taza de pulpa de parcha, colada",
        "2 tazas de agua",
        "¾ taza de azúcar"
      ],
      en: [
        "2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "1 cup passion fruit pulp, strained",
        "2 cups water",
        "¾ cup sugar"
      ]
    },
    steps: {
      es: [
        "Hidrate la gelatina en el agua fría 5 minutos.",
        "Caliente las 2 tazas de agua con el azúcar hasta que se disuelva, retire del fuego y disuelva la gelatina.",
        "Añada la pulpa de parcha y mezcle.",
        "Vierta en vasitos y refrigere 4 horas.",
        "Sin colorantes ni sabores artificiales: sólo el color y el ácido de la parcha. Puede guardar unas semillas para decorar."
      ],
      en: [
        "Bloom the gelatin in the cold water 5 minutes.",
        "Heat the 2 cups of water with the sugar until dissolved, remove from heat and dissolve the gelatin.",
        "Add the passion fruit pulp and mix.",
        "Pour into small cups and refrigerate 4 hours.",
        "No coloring or artificial flavors: just the color and tang of passion fruit. Save a few seeds to garnish."
      ]
    }
  },
  {
    id: "gelatina-cafe",
    category: "postres",
    name: { es: "Gelatina de Café", en: "Coffee Gelatin" },
    time: "20 min + 4 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "3 tazas de café colado fuerte, caliente",
        "½ taza de azúcar",
        "Para servir: ½ taza de leche condensada o de crema batida"
      ],
      en: [
        "2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "3 cups strong brewed coffee, hot",
        "½ cup sugar",
        "To serve: ½ cup sweetened condensed milk or whipped cream"
      ]
    },
    steps: {
      es: [
        "Hidrate la gelatina en el agua fría 5 minutos.",
        "Disuelva el azúcar y la gelatina en el café caliente.",
        "Vierta en un molde cuadrado y refrigere 4 horas.",
        "Corte en cubitos y sirva en vasos con un chorrito de leche condensada o con crema batida."
      ],
      en: [
        "Bloom the gelatin in the cold water 5 minutes.",
        "Dissolve the sugar and gelatin in the hot coffee.",
        "Pour into a square pan and refrigerate 4 hours.",
        "Cut into cubes and serve in glasses with a drizzle of condensed milk or with whipped cream."
      ]
    }
  },
  {
    id: "gelatina-fresa-frutas",
    category: "postres",
    name: { es: "Gelatina de Fresa con Frutas", en: "Strawberry Gelatin with Fruit" },
    time: "15 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "2 cajas de 3 onzas de gelatina de fresa",
        "2 tazas de agua hirviendo",
        "1½ tazas de agua fría",
        "1 taza de fresas, en rebanadas",
        "1 lata de 15 onzas de coctel de frutas, escurrido",
        "1 guineo maduro, en ruedas"
      ],
      en: [
        "2 boxes (3 oz each) strawberry gelatin",
        "2 cups boiling water",
        "1½ cups cold water",
        "1 cup strawberries, sliced",
        "1 can (15 oz) fruit cocktail, drained",
        "1 ripe banana, sliced"
      ]
    },
    steps: {
      es: [
        "Disuelva la gelatina en el agua hirviendo, moviendo 2 minutos. Añada el agua fría.",
        "Refrigere 1 hora, hasta que empiece a espesar: así la fruta queda repartida y no se va al fondo.",
        "Incorpore las fresas, el coctel de frutas y el guineo.",
        "Vierta en un molde o en vasitos y refrigere 3 horas más.",
        "No use piña, lechosa ni kiwi frescos: tienen enzimas que no dejan cuajar la gelatina (enlatados sí funcionan)."
      ],
      en: [
        "Dissolve the gelatin in the boiling water, stirring 2 minutes. Add the cold water.",
        "Refrigerate 1 hour, until it starts to thicken: this keeps the fruit suspended instead of sinking.",
        "Fold in the strawberries, fruit cocktail and banana.",
        "Pour into a mold or small cups and refrigerate 3 more hours.",
        "Don't use fresh pineapple, papaya or kiwi: their enzymes keep gelatin from setting (canned ones work)."
      ]
    }
  },
  {
    id: "gelatina-coquito",
    category: "postres",
    name: { es: "Gelatina de Coquito", en: "Coquito Gelatin" },
    time: "20 min + 6 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "3 sobres de gelatina sin sabor (¼ onza cada uno)",
        "¾ taza de agua fría",
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de nuez moscada"
      ],
      en: [
        "3 envelopes unflavored gelatin (¼ oz each)",
        "¾ cup cold water",
        "1 can (15 oz) cream of coconut",
        "1 can (13.5 oz) coconut milk",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "1 teaspoon vanilla",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon nutmeg"
      ]
    },
    steps: {
      es: [
        "Hidrate la gelatina en el agua fría 5 minutos y disuélvala en el microondas 30 segundos, sin hervir.",
        "Licúe la crema de coco, la leche de coco, la condensada, la evaporada, la vainilla, la canela y la nuez moscada.",
        "Añada la gelatina disuelta con la licuadora en marcha.",
        "Vierta en un molde engrasado y refrigere 6 horas o toda la noche.",
        "Desmolde y espolvoree canela: todo el sabor del coquito navideño, sin alcohol, para que la coman también los niños."
      ],
      en: [
        "Bloom the gelatin in the cold water 5 minutes and dissolve it in the microwave 30 seconds, without boiling.",
        "Blend the cream of coconut, coconut milk, condensed milk, evaporated milk, vanilla, cinnamon and nutmeg.",
        "Add the dissolved gelatin with the blender running.",
        "Pour into a greased mold and refrigerate 6 hours or overnight.",
        "Unmold and dust with cinnamon: all the flavor of Christmas coquito, without alcohol, so the kids can have it too."
      ]
    }
  },
  {
    id: "gelatina-guayaba",
    category: "postres",
    name: { es: "Gelatina de Guayaba", en: "Guava Gelatin" },
    time: "20 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "3 tazas de néctar de guayaba",
        "¼ taza de azúcar",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "3 cups guava nectar",
        "¼ cup sugar",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Hidrate la gelatina en el agua fría 5 minutos.",
        "Caliente 1 taza del néctar con el azúcar hasta que humee, retire y disuelva la gelatina.",
        "Añada el resto del néctar y el limón.",
        "Vierta en un molde o en vasitos y refrigere 4 horas.",
        "Sirva con una lasca de queso blanco del país al lado, como la guayaba con queso de siempre."
      ],
      en: [
        "Bloom the gelatin in the cold water 5 minutes.",
        "Heat 1 cup of the nectar with the sugar until steaming, remove and dissolve the gelatin.",
        "Add the rest of the nectar and the lime.",
        "Pour into a mold or small cups and refrigerate 4 hours.",
        "Serve with a slice of fresh white cheese on the side, like the classic guava and cheese."
      ]
    }
  },
  {
    id: "gelatina-pina-colada",
    category: "postres",
    name: { es: "Gelatina de Piña Colada", en: "Piña Colada Gelatin" },
    time: "25 min + 6 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 caja de 3 onzas de gelatina de piña",
        "1 taza de agua hirviendo",
        "1 lata de 20 onzas de piña triturada, con su jugo",
        "Capa de coco: 2 sobres de gelatina sin sabor (¼ onza cada uno)",
        "½ taza de agua fría",
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 12 onzas de leche evaporada"
      ],
      en: [
        "1 box (3 oz) pineapple gelatin",
        "1 cup boiling water",
        "1 can (20 oz) crushed pineapple, with its juice",
        "Coconut layer: 2 envelopes unflavored gelatin (¼ oz each)",
        "½ cup cold water",
        "1 can (15 oz) cream of coconut",
        "1 can (12 oz) evaporated milk"
      ]
    },
    steps: {
      es: [
        "Disuelva la gelatina de piña en el agua hirviendo y añada la piña de lata con su jugo. Vierta en un molde y refrigere 2 horas, hasta que esté firme. Use piña de lata: la fresca no deja cuajar.",
        "Para la capa de coco: hidrate la gelatina sin sabor en el agua fría 5 minutos y disuélvala en el microondas 30 segundos.",
        "Mezcle la crema de coco con la leche evaporada y añada la gelatina disuelta. Deje que llegue a temperatura ambiente.",
        "Vierta la capa de coco con cuidado sobre la de piña y refrigere 4 horas más.",
        "Corte en cuadros: dos capas con el sabor del trago nacional, sin alcohol."
      ],
      en: [
        "Dissolve the pineapple gelatin in the boiling water and add the canned pineapple with its juice. Pour into a pan and refrigerate 2 hours, until firm. Use canned pineapple: fresh won't let it set.",
        "For the coconut layer: bloom the unflavored gelatin in the cold water 5 minutes and dissolve it in the microwave 30 seconds.",
        "Mix the cream of coconut with the evaporated milk and add the dissolved gelatin. Let it come to room temperature.",
        "Gently pour the coconut layer over the pineapple layer and refrigerate 4 more hours.",
        "Cut into squares: two layers with the flavor of the national drink, without alcohol."
      ]
    }
  },
  {
    id: "gelatinas-ron-parcha",
    category: "cocteles",
    name: { es: "Gelatinas de Ron con Parcha (Chupitos)", en: "Passion Fruit Rum Gelatin Shots" },
    time: "15 min + 4 hr de nevera",
    servings: 16,
    ingredients: {
      es: [
        "1 caja de 3 onzas de gelatina de limón o de piña",
        "1 taza de agua hirviendo",
        "½ taza de pulpa de parcha, colada",
        "½ taza de ron blanco, frío"
      ],
      en: [
        "1 box (3 oz) lime or pineapple gelatin",
        "1 cup boiling water",
        "½ cup passion fruit pulp, strained",
        "½ cup white rum, cold"
      ]
    },
    steps: {
      es: [
        "Disuelva la gelatina en el agua hirviendo, moviendo 2 minutos.",
        "Añada la parcha y deje refrescar 10 minutos; luego añada el ron frío (si se añade caliente se evapora).",
        "Reparta en 16 vasitos de 2 onzas.",
        "Refrigere 4 horas. Sólo para adultos: márquelos bien para que no los confundan con las gelatinas de los niños."
      ],
      en: [
        "Dissolve the gelatin in the boiling water, stirring 2 minutes.",
        "Add the passion fruit and let cool 10 minutes; then add the cold rum (if added hot it evaporates).",
        "Divide among 16 two-ounce cups.",
        "Refrigerate 4 hours. Adults only: label them clearly so they aren't mixed up with the kids' gelatins."
      ]
    }
  },

  // ── Decimotercera tanda (2026-10): flanes y bizcochos de calabaza ──
  {
    id: "flan-chocolate",
    category: "postres",
    name: { es: "Flan de Chocolate", en: "Chocolate Flan" },
    time: "1 hr 15 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "4 onzas de chocolate semidulce, picado",
        "1 lata de 12 onzas de leche evaporada",
        "1 lata de 14 onzas de leche condensada",
        "5 huevos",
        "2 cucharadas de cocoa en polvo",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "4 oz semisweet chocolate, chopped",
        "1 can (12 oz) evaporated milk",
        "1 can (14 oz) sweetened condensed milk",
        "5 eggs",
        "2 tablespoons cocoa powder",
        "1 teaspoon vanilla",
        "1 pinch of salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Derrita el azúcar en un sartén hasta que tome color ámbar y cubra con ella el fondo de un molde de flan.",
        "Caliente la leche evaporada sin que hierva, apague y añada el chocolate; mueva hasta que se derrita.",
        "Licúe el chocolate con la leche condensada, los huevos, la cocoa, la vainilla y la sal. Cuele y vierta sobre el caramelo.",
        "Hornee a baño de María 55–60 minutos, hasta que el centro tiemble apenas y un cuchillo salga limpio.",
        "Deje enfriar, refrigere 4 horas como mínimo y desmolde volteándolo sobre un plato."
      ],
      en: [
        "Heat the oven to 350°F. Melt the sugar in a skillet until amber and coat the bottom of a flan mold with it.",
        "Heat the evaporated milk without boiling, turn off the heat and add the chocolate; stir until melted.",
        "Blend the chocolate milk with the condensed milk, eggs, cocoa, vanilla and salt. Strain and pour over the caramel.",
        "Bake in a water bath 55–60 minutes, until the center barely jiggles and a knife comes out clean.",
        "Let cool, refrigerate at least 4 hours and unmold by flipping onto a plate."
      ]
    }
  },
  {
    id: "flan-coquito",
    category: "postres",
    name: { es: "Flan de Coquito", en: "Coquito Flan" },
    time: "1 hr 15 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 12 onzas de leche evaporada",
        "1 lata de 14 onzas de leche condensada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de nuez moscada",
        "1 pizca de clavo molido"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "1 can (15 oz) cream of coconut",
        "1 can (12 oz) evaporated milk",
        "1 can (14 oz) sweetened condensed milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon nutmeg",
        "1 pinch of ground cloves"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe la crema de coco, las dos leches, los huevos, la vainilla y las especias. Cuele para que quede bien liso.",
        "Vierta sobre el caramelo y hornee a baño de María 1 hora, hasta que un cuchillo salga limpio.",
        "Enfríe, refrigere toda la noche si puede y desmolde. Espolvoree canela por encima.",
        "Es el sabor del coquito sin alcohol, así que lo pueden comer los niños. Si es sólo para adultos, se le pueden añadir ¼ taza de ron blanco a la mezcla."
      ],
      en: [
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the cream of coconut, both milks, eggs, vanilla and spices. Strain so it's completely smooth.",
        "Pour over the caramel and bake in a water bath 1 hour, until a knife comes out clean.",
        "Cool, refrigerate overnight if you can and unmold. Dust with cinnamon.",
        "It's the flavor of coquito without alcohol, so kids can eat it too. If it's for adults only, you can add ¼ cup white rum to the mix."
      ]
    }
  },
  {
    id: "flan-parcha",
    category: "postres",
    name: { es: "Flan de Parcha", en: "Passion Fruit Flan" },
    time: "1 hr 10 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "4 onzas de queso crema, blando",
        "5 huevos",
        "½ taza de pulpa de parcha, colada",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "4 oz cream cheese, softened",
        "5 eggs",
        "½ cup passion fruit pulp, strained",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe el queso crema con la leche condensada hasta que no queden grumos. Añada la leche evaporada, los huevos y la vainilla.",
        "Añada la parcha al final y licúe sólo unos segundos (la acidez la espesa enseguida). Vierta sobre el caramelo.",
        "Hornee a baño de María 50–55 minutos, hasta que cuaje.",
        "Enfríe, refrigere 4 horas y desmolde. Queda cremoso y ácido a la vez."
      ],
      en: [
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the cream cheese with the condensed milk until no lumps remain. Add the evaporated milk, eggs and vanilla.",
        "Add the passion fruit last and blend just a few seconds (its acidity thickens the mix quickly). Pour over the caramel.",
        "Bake in a water bath 50–55 minutes, until set.",
        "Cool, refrigerate 4 hours and unmold. It's creamy and tangy at the same time."
      ]
    }
  },
  {
    id: "flan-mango",
    category: "postres",
    name: { es: "Flan de Mangó", en: "Mango Flan" },
    time: "1 hr 10 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "2 mangós maduros, pelados (1½ tazas de pulpa)",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharada de jugo de limón",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "2 ripe mangoes, peeled (1½ cups pulp)",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 tablespoon lime juice",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe la pulpa de mangó hasta que quede un puré fino. Cuele si el mangó es fibroso.",
        "Licúe el puré con las leches, los huevos, el limón y la vainilla. Vierta sobre el caramelo.",
        "Hornee a baño de María 55–60 minutos, hasta que un cuchillo salga limpio.",
        "Enfríe, refrigere 4 horas y desmolde. Decore con cubitos de mangó."
      ],
      en: [
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the mango pulp into a smooth purée. Strain if the mango is fibrous.",
        "Blend the purée with the milks, eggs, lime juice and vanilla. Pour over the caramel.",
        "Bake in a water bath 55–60 minutes, until a knife comes out clean.",
        "Cool, refrigerate 4 hours and unmold. Garnish with diced mango."
      ]
    }
  },
  {
    id: "flan-platano-maduro",
    category: "postres",
    name: { es: "Flan de Plátano Maduro", en: "Sweet Plantain Flan" },
    time: "1 hr 20 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "2 plátanos maduros (bien amarillos con manchas negras)",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharadita de canela en polvo",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "2 ripe plantains (very yellow with black spots)",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 teaspoon ground cinnamon",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Hierva los plátanos pelados y en trozos 15 minutos, hasta que estén blandos. Escurra y deje refrescar.",
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe los plátanos con las leches, los huevos, la canela y la vainilla hasta que quede bien liso. Cuele y vierta sobre el caramelo.",
        "Hornee a baño de María 1 hora, hasta que un cuchillo salga limpio.",
        "Enfríe, refrigere 4 horas y desmolde. Tiene una textura más densa, como de budín."
      ],
      en: [
        "Boil the peeled plantains in chunks 15 minutes, until soft. Drain and let cool.",
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the plantains with the milks, eggs, cinnamon and vanilla until very smooth. Strain and pour over the caramel.",
        "Bake in a water bath 1 hour, until a knife comes out clean.",
        "Cool, refrigerate 4 hours and unmold. It has a denser, pudding-like texture."
      ]
    }
  },
  {
    id: "flan-maiz",
    category: "postres",
    name: { es: "Flan de Maíz", en: "Sweet Corn Flan" },
    time: "1 hr 15 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1 lata de 15 onzas de maíz en grano, escurrido",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "4 huevos",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "1 can (15 oz) corn kernels, drained",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "4 eggs",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe el maíz con la leche evaporada 2 minutos y cuele apretando con una cuchara para sacar todo el jugo (descarte el bagazo).",
        "Licúe ese líquido con la leche condensada, los huevos, la vainilla y la canela. Vierta sobre el caramelo.",
        "Hornee a baño de María 1 hora, hasta que un cuchillo salga limpio.",
        "Enfríe, refrigere 4 horas y desmolde. Sabe a majarete, pero con caramelo."
      ],
      en: [
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the corn with the evaporated milk 2 minutes and strain, pressing with a spoon to get all the liquid (discard the pulp).",
        "Blend that liquid with the condensed milk, eggs, vanilla and cinnamon. Pour over the caramel.",
        "Bake in a water bath 1 hour, until a knife comes out clean.",
        "Cool, refrigerate 4 hours and unmold. It tastes like majarete, but with caramel."
      ]
    }
  },
  {
    id: "flan-calabaza-queso",
    category: "postres",
    name: { es: "Flan de Calabaza y Queso Crema", en: "Pumpkin Cream Cheese Flan" },
    time: "1 hr 30 min + 6 hr de nevera",
    servings: 12,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1½ tazas de calabaza cocida y majada",
        "8 onzas de queso crema, blando",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "5 huevos",
        "1 cucharadita de vainilla",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de jengibre molido",
        "¼ cucharadita de nuez moscada"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "8 oz cream cheese, softened",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "5 eggs",
        "1 teaspoon vanilla",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon ground ginger",
        "¼ teaspoon nutmeg"
      ]
    },
    steps: {
      es: [
        "Hierva la calabaza pelada y en trozos 15–20 minutos, hasta que esté blanda. Escurra muy bien (dejarla en el colador 10 minutos evita un flan aguado) y maje.",
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe el queso crema con la leche condensada hasta que esté liso. Añada la calabaza, la leche evaporada, los huevos, la vainilla y las especias, y licúe. Cuele.",
        "Vierta sobre el caramelo y hornee a baño de María 1 hora 10 minutos, hasta que un cuchillo salga limpio.",
        "Enfríe y refrigere 6 horas o toda la noche: el queso crema necesita ese tiempo para que corte limpio. Desmolde."
      ],
      en: [
        "Boil the peeled calabaza in chunks 15–20 minutes, until soft. Drain very well (leaving it in the colander 10 minutes prevents a watery flan) and mash.",
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the cream cheese with the condensed milk until smooth. Add the calabaza, evaporated milk, eggs, vanilla and spices, and blend. Strain.",
        "Pour over the caramel and bake in a water bath 1 hour 10 minutes, until a knife comes out clean.",
        "Cool and refrigerate 6 hours or overnight: the cream cheese needs that time to slice cleanly. Unmold."
      ]
    }
  },
  {
    id: "flan-calabaza-coco",
    category: "postres",
    name: { es: "Flan de Calabaza y Coco", en: "Pumpkin Coconut Flan" },
    time: "1 hr 20 min + 4 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "1½ tazas de calabaza cocida y majada",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 14 onzas de leche condensada",
        "5 huevos",
        "1 cucharadita de canela en polvo",
        "1 cucharadita de vainilla",
        "¼ taza de coco rallado, tostado"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "1 can (13.5 oz) coconut milk",
        "1 can (14 oz) sweetened condensed milk",
        "5 eggs",
        "1 teaspoon ground cinnamon",
        "1 teaspoon vanilla",
        "¼ cup shredded coconut, toasted"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra el fondo de un molde de flan.",
        "Licúe la calabaza bien escurrida con la leche de coco, la leche condensada, los huevos, la canela y la vainilla. Cuele y vierta sobre el caramelo.",
        "Hornee a baño de María 1 hora, hasta que un cuchillo salga limpio.",
        "Enfríe, refrigere 4 horas y desmolde.",
        "Decore con el coco tostado justo antes de servir para que no se ablande."
      ],
      en: [
        "Heat the oven to 350°F. Make the caramel with the sugar and coat the bottom of a flan mold.",
        "Blend the well-drained calabaza with the coconut milk, condensed milk, eggs, cinnamon and vanilla. Strain and pour over the caramel.",
        "Bake in a water bath 1 hour, until a knife comes out clean.",
        "Cool, refrigerate 4 hours and unmold.",
        "Top with the toasted coconut right before serving so it stays crisp."
      ]
    }
  },
  {
    id: "bizcocho-calabaza-queso-crema",
    category: "bizcochos",
    name: { es: "Bizcocho de Calabaza con Frosting de Queso Crema", en: "Pumpkin Cake with Cream Cheese Frosting" },
    time: "1 hr 15 min",
    servings: 16,
    ingredients: {
      es: [
        "2 tazas de calabaza cocida y majada",
        "2 tazas de harina de trigo",
        "1½ tazas de azúcar",
        "1 taza de aceite",
        "4 huevos",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de bicarbonato",
        "2 cucharaditas de canela en polvo",
        "½ cucharadita de jengibre molido",
        "½ cucharadita de sal",
        "Frosting: 8 onzas de queso crema, blando",
        "¼ taza de mantequilla, blanda",
        "2 tazas de azúcar en polvo",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 cups cooked, mashed calabaza (West Indian pumpkin)",
        "2 cups all-purpose flour",
        "1½ cups sugar",
        "1 cup oil",
        "4 eggs",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "2 teaspoons ground cinnamon",
        "½ teaspoon ground ginger",
        "½ teaspoon salt",
        "Frosting: 8 oz cream cheese, softened",
        "¼ cup butter, softened",
        "2 cups powdered sugar",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase un molde de 9 × 13 pulgadas.",
        "Bata los huevos con el azúcar y el aceite. Añada la calabaza (bien escurrida) y mezcle.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, las especias y la sal, y únala a la mezcla sin batir de más.",
        "Hornee 30–35 minutos, hasta que un palillo salga limpio. Deje enfriar por completo en el molde.",
        "Para el frosting: bata el queso crema con la mantequilla, añada el azúcar en polvo y la vainilla y bata hasta que esté cremoso. Cubra el bizcocho y guárdelo en la nevera."
      ],
      en: [
        "Heat the oven to 350°F and grease a 9 × 13-inch pan.",
        "Beat the eggs with the sugar and oil. Add the calabaza (well drained) and mix.",
        "Sift the flour with the baking powder, baking soda, spices and salt, and fold it in without overmixing.",
        "Bake 30–35 minutes, until a toothpick comes out clean. Let cool completely in the pan.",
        "For the frosting: beat the cream cheese with the butter, add the powdered sugar and vanilla and beat until creamy. Frost the cake and keep it refrigerated."
      ]
    }
  },
  {
    id: "cupcakes-calabaza",
    category: "bizcochos",
    name: { es: "Cupcakes de Calabaza", en: "Pumpkin Cupcakes" },
    time: "50 min",
    servings: 18,
    ingredients: {
      es: [
        "1½ tazas de calabaza cocida y majada",
        "1¾ tazas de harina de trigo",
        "1 taza de azúcar morena",
        "½ taza de aceite",
        "3 huevos",
        "1½ cucharaditas de polvo de hornear",
        "½ cucharadita de bicarbonato",
        "1½ cucharaditas de canela en polvo",
        "¼ cucharadita de nuez moscada",
        "¼ cucharadita de sal",
        "Frosting: 4 onzas de queso crema, blando",
        "2 cucharadas de mantequilla, blanda",
        "1½ tazas de azúcar en polvo",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "1¾ cups all-purpose flour",
        "1 cup brown sugar",
        "½ cup oil",
        "3 eggs",
        "1½ teaspoons baking powder",
        "½ teaspoon baking soda",
        "1½ teaspoons ground cinnamon",
        "¼ teaspoon nutmeg",
        "¼ teaspoon salt",
        "Frosting: 4 oz cream cheese, softened",
        "2 tablespoons butter, softened",
        "1½ cups powdered sugar",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y ponga 18 capacillos de papel en moldes de muffins.",
        "Bata los huevos con el azúcar morena y el aceite. Añada la calabaza.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, las especias y la sal, y únala sin batir de más.",
        "Llene los capacillos a ⅔ y hornee 18–22 minutos, hasta que un palillo salga limpio. Deje enfriar por completo.",
        "Para el frosting: bata el queso crema con la mantequilla, el azúcar en polvo y la canela. Decore con manga o cuchara."
      ],
      en: [
        "Heat the oven to 350°F and line muffin pans with 18 paper liners.",
        "Beat the eggs with the brown sugar and oil. Add the calabaza.",
        "Sift the flour with the baking powder, baking soda, spices and salt, and fold it in without overmixing.",
        "Fill the liners ⅔ full and bake 18–22 minutes, until a toothpick comes out clean. Let cool completely.",
        "For the frosting: beat the cream cheese with the butter, powdered sugar and cinnamon. Pipe or spread on top."
      ]
    }
  },
  {
    id: "bizcocho-calabaza-coco",
    category: "bizcochos",
    name: { es: "Bizcocho de Calabaza y Coco", en: "Pumpkin Coconut Cake" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de calabaza cocida y majada",
        "2 tazas de harina de trigo",
        "1 taza de azúcar",
        "½ taza de mantequilla, derretida",
        "3 huevos",
        "¾ taza de leche de coco",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de bicarbonato",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de sal",
        "1 taza de coco rallado",
        "Glaseado: 1 taza de azúcar en polvo",
        "3 cucharadas de leche de coco"
      ],
      en: [
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "2 cups all-purpose flour",
        "1 cup sugar",
        "½ cup butter, melted",
        "3 eggs",
        "¾ cup coconut milk",
        "2 teaspoons baking powder",
        "½ teaspoon baking soda",
        "1 teaspoon ground cinnamon",
        "½ teaspoon salt",
        "1 cup shredded coconut",
        "Glaze: 1 cup powdered sugar",
        "3 tablespoons coconut milk"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase y enharine un molde Bundt.",
        "Bata los huevos con el azúcar, la mantequilla, la leche de coco y la calabaza.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, la canela y la sal. Únala a la mezcla y añada ¾ taza del coco rallado.",
        "Hornee 45–50 minutos, hasta que un palillo salga limpio. Deje 10 minutos en el molde y desmolde.",
        "Mezcle el azúcar en polvo con la leche de coco, bañe el bizcocho frío y espolvoree el resto del coco."
      ],
      en: [
        "Heat the oven to 350°F and grease and flour a Bundt pan.",
        "Beat the eggs with the sugar, butter, coconut milk and calabaza.",
        "Sift the flour with the baking powder, baking soda, cinnamon and salt. Fold it in and add ¾ cup of the shredded coconut.",
        "Bake 45–50 minutes, until a toothpick comes out clean. Leave 10 minutes in the pan and unmold.",
        "Mix the powdered sugar with the coconut milk, drizzle over the cooled cake and sprinkle with the rest of the coconut."
      ]
    }
  },
  {
    id: "bizcocho-calabaza-pasas-nueces",
    category: "bizcochos",
    name: { es: "Bizcocho de Calabaza con Pasas y Nueces", en: "Pumpkin Cake with Raisins and Walnuts" },
    time: "1 hr 20 min",
    servings: 12,
    ingredients: {
      es: [
        "2 tazas de calabaza cocida y majada",
        "2 tazas de harina de trigo",
        "1 taza de azúcar",
        "½ taza de azúcar morena",
        "¾ taza de aceite",
        "4 huevos",
        "2 cucharaditas de polvo de hornear",
        "1 cucharadita de bicarbonato",
        "2 cucharaditas de canela en polvo",
        "¼ cucharadita de clavo molido",
        "½ cucharadita de sal",
        "¾ taza de pasas",
        "¾ taza de nueces, picadas"
      ],
      en: [
        "2 cups cooked, mashed calabaza (West Indian pumpkin)",
        "2 cups all-purpose flour",
        "1 cup sugar",
        "½ cup brown sugar",
        "¾ cup oil",
        "4 eggs",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "2 teaspoons ground cinnamon",
        "¼ teaspoon ground cloves",
        "½ teaspoon salt",
        "¾ cup raisins",
        "¾ cup walnuts, chopped"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase un molde de tubo o Bundt.",
        "Bata los huevos con los dos azúcares y el aceite. Añada la calabaza.",
        "Cierna la harina con el polvo de hornear, el bicarbonato, las especias y la sal, y únala sin batir de más.",
        "Pase las pasas y las nueces por una cucharada de harina (así no se hunden) y añádalas a la mezcla.",
        "Hornee 55–60 minutos, hasta que un palillo salga limpio. Enfríe 15 minutos y desmolde. Espolvoree azúcar en polvo."
      ],
      en: [
        "Heat the oven to 350°F and grease a tube or Bundt pan.",
        "Beat the eggs with both sugars and the oil. Add the calabaza.",
        "Sift the flour with the baking powder, baking soda, spices and salt, and fold it in without overmixing.",
        "Toss the raisins and walnuts in a tablespoon of flour (so they don't sink) and add them to the batter.",
        "Bake 55–60 minutes, until a toothpick comes out clean. Cool 15 minutes and unmold. Dust with powdered sugar."
      ]
    }
  },
  {
    id: "bizcocho-calabaza-marmoleado",
    category: "bizcochos",
    name: { es: "Bizcocho Marmoleado de Calabaza y Chocolate", en: "Pumpkin Chocolate Marble Cake" },
    time: "1 hr 20 min",
    servings: 12,
    ingredients: {
      es: [
        "1½ tazas de calabaza cocida y majada",
        "2½ tazas de harina de trigo",
        "1½ tazas de azúcar",
        "1 taza de mantequilla, blanda",
        "4 huevos",
        "½ taza de leche",
        "2½ cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "1½ cucharaditas de canela en polvo",
        "⅓ taza de cocoa en polvo",
        "2 cucharadas de leche (para la parte de chocolate)"
      ],
      en: [
        "1½ cups cooked, mashed calabaza (West Indian pumpkin)",
        "2½ cups all-purpose flour",
        "1½ cups sugar",
        "1 cup butter, softened",
        "4 eggs",
        "½ cup milk",
        "2½ teaspoons baking powder",
        "½ teaspoon salt",
        "1½ teaspoons ground cinnamon",
        "⅓ cup cocoa powder",
        "2 tablespoons milk (for the chocolate part)"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y engrase y enharine un molde Bundt.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa y añada los huevos de uno en uno.",
        "Cierna la harina con el polvo de hornear y la sal, y añádala alternando con la leche. Divida la mezcla en dos.",
        "A una mitad añada la calabaza y la canela; a la otra, la cocoa con las 2 cucharadas de leche.",
        "Alterne cucharadas de las dos mezclas en el molde y pase un cuchillo en zigzag una sola vez para marmolear.",
        "Hornee 50–55 minutos, hasta que un palillo salga limpio. Enfríe 15 minutos y desmolde."
      ],
      en: [
        "Heat the oven to 350°F and grease and flour a Bundt pan.",
        "Beat the butter with the sugar until creamy and add the eggs one at a time.",
        "Sift the flour with the baking powder and salt, and add it alternately with the milk. Divide the batter in two.",
        "To one half add the calabaza and cinnamon; to the other, the cocoa with the 2 tablespoons of milk.",
        "Alternate spoonfuls of both batters in the pan and run a knife through in a zigzag just once to marble.",
        "Bake 50–55 minutes, until a toothpick comes out clean. Cool 15 minutes and unmold."
      ]
    }
  },
  {
    id: "brazo-gitano-calabaza",
    category: "bizcochos",
    name: { es: "Brazo Gitano de Calabaza con Queso Crema", en: "Pumpkin Roll with Cream Cheese Filling" },
    time: "1 hr + 2 hr de nevera",
    servings: 10,
    ingredients: {
      es: [
        "3 huevos",
        "1 taza de azúcar",
        "⅔ taza de calabaza cocida y majada",
        "¾ taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "1½ cucharaditas de canela en polvo",
        "¼ cucharadita de jengibre molido",
        "¼ cucharadita de sal",
        "Relleno: 8 onzas de queso crema, blando",
        "2 cucharadas de mantequilla, blanda",
        "1 taza de azúcar en polvo",
        "1 cucharadita de vainilla"
      ],
      en: [
        "3 eggs",
        "1 cup sugar",
        "⅔ cup cooked, mashed calabaza (West Indian pumpkin)",
        "¾ cup all-purpose flour",
        "1 teaspoon baking powder",
        "1½ teaspoons ground cinnamon",
        "¼ teaspoon ground ginger",
        "¼ teaspoon salt",
        "Filling: 8 oz cream cheese, softened",
        "2 tablespoons butter, softened",
        "1 cup powdered sugar",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375°F. Forre con papel de hornear engrasado una bandeja de 10 × 15 pulgadas.",
        "Bata los huevos con el azúcar 5 minutos, hasta que estén pálidos y espesos. Añada la calabaza.",
        "Cierna la harina con el polvo de hornear, las especias y la sal, y únala con espátula, con movimientos envolventes.",
        "Extienda en la bandeja y hornee 13–15 minutos. Vuélquelo enseguida sobre un paño espolvoreado con azúcar en polvo, quite el papel y enróllelo caliente con el paño. Deje enfriar así enrollado.",
        "Bata el queso crema con la mantequilla, el azúcar en polvo y la vainilla. Desenrolle el bizcocho, unte el relleno y vuelva a enrollar sin el paño.",
        "Envuelva en plástico y refrigere 2 horas antes de cortar en ruedas."
      ],
      en: [
        "Heat the oven to 375°F. Line a 10 × 15-inch sheet pan with greased parchment.",
        "Beat the eggs with the sugar 5 minutes, until pale and thick. Add the calabaza.",
        "Sift the flour with the baking powder, spices and salt, and fold it in gently with a spatula.",
        "Spread in the pan and bake 13–15 minutes. Turn it out right away onto a towel dusted with powdered sugar, peel off the paper and roll it up warm with the towel. Let cool rolled up.",
        "Beat the cream cheese with the butter, powdered sugar and vanilla. Unroll the cake, spread the filling and roll it up again without the towel.",
        "Wrap in plastic and refrigerate 2 hours before slicing into rounds."
      ]
    }
  },

  // ── Decimocuarta tanda (2026-10): galletitas, ensaladas verdes y ensaladas de granos ──
  {
    id: "galletas-chispas-chocolate",
    category: "galletitas",
    name: { es: "Galletas con Chispas de Chocolate", en: "Chocolate Chip Cookies" },
    time: "40 min",
    servings: 24,
    ingredients: {
      es: [
        "2¼ tazas de harina de trigo",
        "1 cucharadita de bicarbonato",
        "½ cucharadita de sal",
        "1 taza de mantequilla, blanda",
        "¾ taza de azúcar",
        "¾ taza de azúcar morena",
        "2 huevos",
        "2 cucharaditas de vainilla",
        "2 tazas de chispas de chocolate semidulce"
      ],
      en: [
        "2¼ cups all-purpose flour",
        "1 teaspoon baking soda",
        "½ teaspoon salt",
        "1 cup butter, softened",
        "¾ cup sugar",
        "¾ cup brown sugar",
        "2 eggs",
        "2 teaspoons vanilla",
        "2 cups semisweet chocolate chips"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375°F y forre dos bandejas con papel de hornear.",
        "Mezcle la harina con el bicarbonato y la sal.",
        "Bata la mantequilla con los dos azúcares hasta que esté cremosa. Añada los huevos y la vainilla.",
        "Añada la harina poco a poco y luego las chispas de chocolate.",
        "Forme bolitas de una cucharada, sepárelas 2 pulgadas y hornee 9–11 minutos, hasta que los bordes estén dorados y el centro todavía blando. Deje 5 minutos en la bandeja antes de pasarlas a una rejilla."
      ],
      en: [
        "Heat the oven to 375°F and line two sheet pans with parchment.",
        "Mix the flour with the baking soda and salt.",
        "Beat the butter with both sugars until creamy. Add the eggs and vanilla.",
        "Add the flour gradually, then the chocolate chips.",
        "Form tablespoon balls, space them 2 inches apart and bake 9–11 minutes, until the edges are golden and the center still soft. Leave 5 minutes on the pan before moving to a rack."
      ]
    }
  },
  {
    id: "galletas-mantequilla-mani",
    category: "galletitas",
    name: { es: "Galletas de Mantequilla de Maní", en: "Peanut Butter Cookies" },
    time: "35 min",
    servings: 24,
    ingredients: {
      es: [
        "1 taza de mantequilla de maní cremosa",
        "½ taza de mantequilla, blanda",
        "½ taza de azúcar",
        "½ taza de azúcar morena",
        "1 huevo",
        "1 cucharadita de vainilla",
        "1¼ tazas de harina de trigo",
        "½ cucharadita de bicarbonato",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 cup creamy peanut butter",
        "½ cup butter, softened",
        "½ cup sugar",
        "½ cup brown sugar",
        "1 egg",
        "1 teaspoon vanilla",
        "1¼ cups all-purpose flour",
        "½ teaspoon baking soda",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla de maní con la mantequilla y los azúcares. Añada el huevo y la vainilla.",
        "Añada la harina mezclada con el bicarbonato y la sal.",
        "Forme bolitas, póngalas en la bandeja y aplástelas con un tenedor haciendo una cruz.",
        "Hornee 10–12 minutos. Salen blandas y se endurecen al enfriar."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the peanut butter with the butter and sugars. Add the egg and vanilla.",
        "Add the flour mixed with the baking soda and salt.",
        "Form balls, place them on the pan and press with a fork in a crisscross.",
        "Bake 10–12 minutes. They come out soft and firm up as they cool."
      ]
    }
  },
  {
    id: "galletas-coquito",
    category: "galletitas",
    name: { es: "Galletas de Coquito", en: "Coquito Cookies" },
    time: "45 min",
    servings: 24,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de nuez moscada",
        "½ taza de mantequilla, blanda",
        "½ taza de azúcar",
        "½ taza de crema de coco",
        "1 huevo",
        "1 cucharadita de vainilla",
        "1 taza de coco rallado",
        "Glaseado: 1 taza de azúcar en polvo",
        "2 cucharadas de crema de coco"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ teaspoon baking powder",
        "¼ teaspoon salt",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon nutmeg",
        "½ cup butter, softened",
        "½ cup sugar",
        "½ cup cream of coconut",
        "1 egg",
        "1 teaspoon vanilla",
        "1 cup shredded coconut",
        "Glaze: 1 cup powdered sugar",
        "2 tablespoons cream of coconut"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Mezcle la harina con el polvo de hornear, la sal y las especias.",
        "Bata la mantequilla con el azúcar y la crema de coco. Añada el huevo y la vainilla, luego la harina y el coco rallado.",
        "Forme bolitas de una cucharada y hornee 12–14 minutos, hasta que la base esté dorada.",
        "Mezcle el azúcar en polvo con la crema de coco, bañe las galletas frías y espolvoree canela."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Mix the flour with the baking powder, salt and spices.",
        "Beat the butter with the sugar and cream of coconut. Add the egg and vanilla, then the flour and shredded coconut.",
        "Form tablespoon balls and bake 12–14 minutes, until golden underneath.",
        "Mix the powdered sugar with the cream of coconut, drizzle over the cooled cookies and dust with cinnamon."
      ]
    }
  },
  {
    id: "galletas-parcha",
    category: "galletitas",
    name: { es: "Galletas de Parcha", en: "Passion Fruit Cookies" },
    time: "40 min + 30 min de nevera",
    servings: 24,
    ingredients: {
      es: [
        "1 taza de mantequilla, blanda",
        "½ taza de azúcar en polvo",
        "2 tazas de harina de trigo",
        "¼ cucharadita de sal",
        "1 cucharadita de vainilla",
        "Glaseado: 1½ tazas de azúcar en polvo",
        "3 cucharadas de pulpa de parcha, colada"
      ],
      en: [
        "1 cup butter, softened",
        "½ cup powdered sugar",
        "2 cups all-purpose flour",
        "¼ teaspoon salt",
        "1 teaspoon vanilla",
        "Glaze: 1½ cups powdered sugar",
        "3 tablespoons passion fruit pulp, strained"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el azúcar en polvo y la vainilla. Añada la harina y la sal hasta formar una masa.",
        "Forme un cilindro, envuélvalo en plástico y refrigere 30 minutos.",
        "Caliente el horno a 350°F. Corte ruedas de ¼ pulgada y hornee 12–14 minutos, sin que se doren.",
        "Mezcle el azúcar en polvo con la parcha hasta tener un glaseado espeso.",
        "Cubra las galletas frías con el glaseado y deje que endurezca 20 minutos."
      ],
      en: [
        "Beat the butter with the powdered sugar and vanilla. Add the flour and salt to form a dough.",
        "Shape into a log, wrap in plastic and refrigerate 30 minutes.",
        "Heat the oven to 350°F. Slice ¼-inch rounds and bake 12–14 minutes, without browning.",
        "Mix the powdered sugar with the passion fruit to a thick glaze.",
        "Top the cooled cookies with the glaze and let it set 20 minutes."
      ]
    }
  },
  {
    id: "galletas-guineo-avena",
    category: "galletitas",
    name: { es: "Galletas de Guineo y Avena", en: "Banana Oatmeal Cookies" },
    time: "30 min",
    servings: 18,
    ingredients: {
      es: [
        "2 guineos bien maduros",
        "1½ tazas de avena",
        "¼ taza de mantequilla, derretida",
        "¼ taza de azúcar morena",
        "1 huevo",
        "½ taza de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "1 cucharadita de canela en polvo",
        "1 pizca de sal",
        "½ taza de pasas"
      ],
      en: [
        "2 very ripe bananas",
        "1½ cups rolled oats",
        "¼ cup butter, melted",
        "¼ cup brown sugar",
        "1 egg",
        "½ cup all-purpose flour",
        "½ teaspoon baking powder",
        "1 teaspoon ground cinnamon",
        "1 pinch of salt",
        "½ cup raisins"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre una bandeja con papel de hornear.",
        "Maje los guineos con un tenedor y mézclelos con la mantequilla, el azúcar morena y el huevo.",
        "Añada la avena, la harina, el polvo de hornear, la canela, la sal y las pasas.",
        "Ponga cucharadas en la bandeja y aplánelas un poco (no se extienden solas).",
        "Hornee 14–16 minutos, hasta que estén doradas. Son suaves, como un bizcochito."
      ],
      en: [
        "Heat the oven to 350°F and line a sheet pan with parchment.",
        "Mash the bananas with a fork and mix with the butter, brown sugar and egg.",
        "Add the oats, flour, baking powder, cinnamon, salt and raisins.",
        "Drop spoonfuls on the pan and flatten them a little (they don't spread on their own).",
        "Bake 14–16 minutes, until golden. They're soft, like a little cake."
      ]
    }
  },
  {
    id: "galletas-canela",
    category: "galletitas",
    name: { es: "Galletas de Canela y Azúcar", en: "Cinnamon Sugar Cookies (Snickerdoodles)" },
    time: "35 min",
    servings: 24,
    ingredients: {
      es: [
        "2¾ tazas de harina de trigo",
        "2 cucharaditas de cremor tártaro",
        "1 cucharadita de bicarbonato",
        "¼ cucharadita de sal",
        "1 taza de mantequilla, blanda",
        "1½ tazas de azúcar",
        "2 huevos",
        "Para cubrir: 3 cucharadas de azúcar",
        "1 cucharada de canela en polvo"
      ],
      en: [
        "2¾ cups all-purpose flour",
        "2 teaspoons cream of tartar",
        "1 teaspoon baking soda",
        "¼ teaspoon salt",
        "1 cup butter, softened",
        "1½ cups sugar",
        "2 eggs",
        "For coating: 3 tablespoons sugar",
        "1 tablespoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400°F y forre dos bandejas con papel de hornear.",
        "Mezcle la harina con el cremor tártaro, el bicarbonato y la sal.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa y añada los huevos. Añada la harina.",
        "Forme bolitas y páselas por la mezcla de azúcar y canela.",
        "Hornee 8–10 minutos: salen con grietas y blandas en el centro."
      ],
      en: [
        "Heat the oven to 400°F and line two sheet pans with parchment.",
        "Mix the flour with the cream of tartar, baking soda and salt.",
        "Beat the butter with the sugar until creamy and add the eggs. Add the flour.",
        "Form balls and roll them in the cinnamon sugar.",
        "Bake 8–10 minutes: they come out crackled and soft in the center."
      ]
    }
  },
  {
    id: "galletas-calabaza",
    category: "galletitas",
    name: { es: "Galletas de Calabaza con Especias", en: "Spiced Pumpkin Cookies" },
    time: "40 min",
    servings: 30,
    ingredients: {
      es: [
        "1 taza de calabaza cocida y majada",
        "½ taza de mantequilla, blanda",
        "1 taza de azúcar morena",
        "1 huevo",
        "1 cucharadita de vainilla",
        "2 tazas de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "½ cucharadita de bicarbonato",
        "1½ cucharaditas de canela en polvo",
        "¼ cucharadita de jengibre molido",
        "¼ cucharadita de sal",
        "½ taza de pasas"
      ],
      en: [
        "1 cup cooked, mashed calabaza (West Indian pumpkin)",
        "½ cup butter, softened",
        "1 cup brown sugar",
        "1 egg",
        "1 teaspoon vanilla",
        "2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "½ teaspoon baking soda",
        "1½ teaspoons ground cinnamon",
        "¼ teaspoon ground ginger",
        "¼ teaspoon salt",
        "½ cup raisins"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla con el azúcar morena. Añada el huevo, la vainilla y la calabaza bien escurrida.",
        "Añada la harina mezclada con el polvo de hornear, el bicarbonato, las especias y la sal, y luego las pasas.",
        "Ponga cucharadas en las bandejas y hornee 12–14 minutos.",
        "Salen suaves, como bizcochitos. Espolvoree azúcar en polvo si quiere."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the butter with the brown sugar. Add the egg, vanilla and well-drained calabaza.",
        "Add the flour mixed with the baking powder, baking soda, spices and salt, then the raisins.",
        "Drop spoonfuls on the pans and bake 12–14 minutes.",
        "They come out soft, like little cakes. Dust with powdered sugar if you like."
      ]
    }
  },
  {
    id: "galletas-chocolate-coco",
    category: "galletitas",
    name: { es: "Galletas de Chocolate y Coco", en: "Chocolate Coconut Cookies" },
    time: "35 min",
    servings: 24,
    ingredients: {
      es: [
        "1½ tazas de harina de trigo",
        "½ taza de cocoa en polvo",
        "1 cucharadita de bicarbonato",
        "¼ cucharadita de sal",
        "¾ taza de mantequilla, blanda",
        "1 taza de azúcar",
        "1 huevo",
        "1 cucharadita de vainilla",
        "1 taza de coco rallado"
      ],
      en: [
        "1½ cups all-purpose flour",
        "½ cup cocoa powder",
        "1 teaspoon baking soda",
        "¼ teaspoon salt",
        "¾ cup butter, softened",
        "1 cup sugar",
        "1 egg",
        "1 teaspoon vanilla",
        "1 cup shredded coconut"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Mezcle la harina con la cocoa, el bicarbonato y la sal.",
        "Bata la mantequilla con el azúcar, añada el huevo y la vainilla, y luego la harina.",
        "Añada ¾ taza del coco. Forme bolitas y páselas por el resto del coco.",
        "Hornee 10–12 minutos. Deje enfriar en la bandeja: salen blandas y se afirman al enfriar."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Mix the flour with the cocoa, baking soda and salt.",
        "Beat the butter with the sugar, add the egg and vanilla, then the flour.",
        "Add ¾ cup of the coconut. Form balls and roll them in the rest of the coconut.",
        "Bake 10–12 minutes. Let cool on the pan: they come out soft and firm up as they cool."
      ]
    }
  },
  {
    id: "ensalada-berro-aguacate",
    category: "ensaladas",
    name: { es: "Ensalada de Berro y Aguacate", en: "Watercress and Avocado Salad" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "2 mazos de berro, lavados y sin los tallos gruesos",
        "1 aguacate en cubos",
        "1 tomate en gajos",
        "¼ cebolla roja en aros finos",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de jugo de limón",
        "1 diente de ajo, majado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 bunches watercress, washed, thick stems removed",
        "1 avocado, cubed",
        "1 tomato, in wedges",
        "¼ red onion, in thin rings",
        "3 tablespoons olive oil",
        "1 tablespoon lime juice",
        "1 garlic clove, mashed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Lave el berro en varias aguas y escúrralo muy bien (el agua diluye el aderezo).",
        "Bata el aceite con el limón, el ajo, sal y pimienta.",
        "Acomode el berro en un platón con el aguacate, el tomate y la cebolla.",
        "Aliñe justo al servir: el berro se marchita rápido. Su sabor picantito va muy bien con frituras y carnes."
      ],
      en: [
        "Wash the watercress in several changes of water and drain very well (water dilutes the dressing).",
        "Whisk the oil with the lime juice, garlic, salt and pepper.",
        "Arrange the watercress on a platter with the avocado, tomato and onion.",
        "Dress right before serving: watercress wilts fast. Its peppery flavor goes great with fried foods and meats."
      ]
    }
  },
  {
    id: "ensalada-espinaca-mango",
    category: "ensaladas",
    name: { es: "Ensalada de Espinaca con Mangó y Nueces", en: "Spinach Salad with Mango and Walnuts" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "6 tazas de espinaca tierna",
        "1 mangó maduro en cubos",
        "½ taza de nueces, tostadas",
        "¼ cebolla roja en aros finos",
        "½ taza de queso blanco del país, desmoronado",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de vinagre",
        "1 cucharadita de miel",
        "1 cucharadita de mostaza",
        "Sal al gusto"
      ],
      en: [
        "6 cups baby spinach",
        "1 ripe mango, cubed",
        "½ cup walnuts, toasted",
        "¼ red onion, in thin rings",
        "½ cup local white cheese (queso blanco), crumbled",
        "3 tablespoons olive oil",
        "1 tablespoon vinegar",
        "1 teaspoon honey",
        "1 teaspoon mustard",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Tueste las nueces en un sartén seco 3–4 minutos, moviendo, y deje enfriar.",
        "Bata el aceite con el vinagre, la miel, la mostaza y la sal.",
        "Mezcle la espinaca con el mangó y la cebolla.",
        "Aliñe, y reparta encima el queso y las nueces."
      ],
      en: [
        "Toast the walnuts in a dry skillet 3–4 minutes, stirring, and let cool.",
        "Whisk the oil with the vinegar, honey, mustard and salt.",
        "Toss the spinach with the mango and onion.",
        "Dress it and scatter the cheese and walnuts on top."
      ]
    }
  },
  {
    id: "ensalada-verde-vinagreta-parcha",
    category: "ensaladas",
    name: { es: "Ensalada Verde con Vinagreta de Parcha", en: "Green Salad with Passion Fruit Vinaigrette" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "1 lechuga romana, picada",
        "2 tazas de lechugas mixtas",
        "1 pepino en medias lunas",
        "1 taza de tomates pequeños, en mitades",
        "½ pimiento verde en tiritas",
        "Vinagreta: 3 cucharadas de pulpa de parcha",
        "4 cucharadas de aceite de oliva",
        "1 cucharadita de miel",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 head romaine lettuce, chopped",
        "2 cups mixed greens",
        "1 cucumber, in half-moons",
        "1 cup cherry tomatoes, halved",
        "½ green bell pepper, in strips",
        "Vinaigrette: 3 tablespoons passion fruit pulp",
        "4 tablespoons olive oil",
        "1 teaspoon honey",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Bata la pulpa de parcha (con semillas o colada, a su gusto) con el aceite, la miel, sal y pimienta.",
        "Mezcle las lechugas con el pepino, los tomates y el pimiento.",
        "Aliñe justo antes de servir. La vinagreta se guarda en la nevera hasta 5 días."
      ],
      en: [
        "Whisk the passion fruit pulp (with seeds or strained, as you like) with the oil, honey, salt and pepper.",
        "Toss the lettuces with the cucumber, tomatoes and bell pepper.",
        "Dress right before serving. The vinaigrette keeps in the fridge up to 5 days."
      ]
    }
  },
  {
    id: "ensalada-pepino-tomate",
    category: "ensaladas",
    name: { es: "Ensalada de Pepino y Tomate", en: "Cucumber and Tomato Salad" },
    time: "15 min + 20 min de nevera",
    servings: 4,
    ingredients: {
      es: [
        "2 pepinos en ruedas finas",
        "3 tomates en gajos",
        "½ cebolla roja en aros finos",
        "2 cucharadas de cilantro picado",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "½ cucharadita de sal",
        "Pimienta al gusto"
      ],
      en: [
        "2 cucumbers, thinly sliced",
        "3 tomatoes, in wedges",
        "½ red onion, in thin rings",
        "2 tablespoons chopped cilantro",
        "3 tablespoons olive oil",
        "2 tablespoons vinegar",
        "½ teaspoon salt",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle el pepino, el tomate, la cebolla y el cilantro en un envase.",
        "Bata el aceite con el vinagre, la sal y la pimienta, y aliñe.",
        "Refrigere 20 minutos para que se mezclen los sabores. Se sirve bien fría, con arroz y habichuelas o en un pincho."
      ],
      en: [
        "Combine the cucumber, tomato, onion and cilantro in a bowl.",
        "Whisk the oil with the vinegar, salt and pepper, and dress.",
        "Refrigerate 20 minutes so the flavors blend. Serve very cold, with rice and beans or at a cookout."
      ]
    }
  },
  {
    id: "ensalada-habichuelas-tiernas",
    category: "ensaladas",
    name: { es: "Ensalada de Habichuelas Tiernas", en: "Green Bean Salad" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "1 libra de habichuelas tiernas, sin las puntas",
        "1 tomate en cubos",
        "¼ cebolla roja picada",
        "1 huevo duro picado",
        "3 cucharadas de aceite de oliva",
        "1 cucharada de vinagre",
        "1 diente de ajo, majado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 lb green beans, ends trimmed",
        "1 tomato, diced",
        "¼ red onion, chopped",
        "1 hard-boiled egg, chopped",
        "3 tablespoons olive oil",
        "1 tablespoon vinegar",
        "1 garlic clove, mashed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las habichuelas tiernas en agua con sal 4–5 minutos, hasta que estén tiernas pero crujientes.",
        "Páselas enseguida a agua con hielo para que conserven el color verde. Escurra.",
        "Bata el aceite con el vinagre, el ajo, sal y pimienta.",
        "Mezcle las habichuelas con el tomate y la cebolla, aliñe y reparta el huevo por encima."
      ],
      en: [
        "Boil the green beans in salted water 4–5 minutes, until tender but crisp.",
        "Transfer them right away to ice water so they keep their green color. Drain.",
        "Whisk the oil with the vinegar, garlic, salt and pepper.",
        "Toss the beans with the tomato and onion, dress and scatter the egg on top."
      ]
    }
  },
  {
    id: "ensalada-brocoli",
    category: "ensaladas",
    name: { es: "Ensalada de Brócoli", en: "Broccoli Salad" },
    time: "20 min + 1 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "2 cabezas de brócoli, en arbolitos pequeños",
        "¼ cebolla roja picada",
        "½ taza de pasas",
        "4 tiras de tocineta, cocidas y desmenuzadas",
        "½ taza de mayonesa",
        "1 cucharada de vinagre",
        "1 cucharada de azúcar",
        "Sal al gusto"
      ],
      en: [
        "2 heads broccoli, in small florets",
        "¼ red onion, chopped",
        "½ cup raisins",
        "4 strips bacon, cooked and crumbled",
        "½ cup mayonnaise",
        "1 tablespoon vinegar",
        "1 tablespoon sugar",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle la mayonesa con el vinagre, el azúcar y la sal.",
        "Combine el brócoli crudo con la cebolla y las pasas, y añada el aderezo.",
        "Refrigere 1 hora para que el brócoli se suavice un poco.",
        "Añada la tocineta al servir para que se mantenga crujiente."
      ],
      en: [
        "Mix the mayonnaise with the vinegar, sugar and salt.",
        "Combine the raw broccoli with the onion and raisins, and add the dressing.",
        "Refrigerate 1 hour so the broccoli softens a little.",
        "Add the bacon when serving so it stays crisp."
      ]
    }
  },
  {
    id: "ensalada-tres-habichuelas",
    category: "ensaladas",
    name: { es: "Ensalada de Tres Habichuelas", en: "Three Bean Salad" },
    time: "15 min + 1 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "1 lata de 15 onzas de habichuelas rosadas, escurridas y enjuagadas",
        "1 lata de 15 onzas de garbanzos, escurridos y enjuagados",
        "1 lata de 15 onzas de habichuelas tiernas cortadas, escurridas",
        "½ cebolla roja picada",
        "½ pimiento verde picado",
        "2 cucharadas de cilantro picado",
        "¼ taza de aceite de oliva",
        "¼ taza de vinagre",
        "1 cucharada de azúcar",
        "½ cucharadita de sal"
      ],
      en: [
        "1 can (15 oz) pink beans, drained and rinsed",
        "1 can (15 oz) chickpeas, drained and rinsed",
        "1 can (15 oz) cut green beans, drained",
        "½ red onion, chopped",
        "½ green bell pepper, chopped",
        "2 tablespoons chopped cilantro",
        "¼ cup olive oil",
        "¼ cup vinegar",
        "1 tablespoon sugar",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Bata el aceite con el vinagre, el azúcar y la sal hasta que el azúcar se disuelva.",
        "Mezcle las habichuelas rosadas, los garbanzos y las habichuelas tiernas con la cebolla, el pimiento y el cilantro.",
        "Aliñe y refrigere 1 hora como mínimo, moviendo una vez.",
        "Mejora de un día para otro: es ideal para llevar a la playa o a un compartir."
      ],
      en: [
        "Whisk the oil with the vinegar, sugar and salt until the sugar dissolves.",
        "Combine the pink beans, chickpeas and green beans with the onion, bell pepper and cilantro.",
        "Dress and refrigerate at least 1 hour, stirring once.",
        "It gets better overnight: great to take to the beach or a potluck."
      ]
    }
  },
  {
    id: "ensalada-gandules",
    category: "ensaladas",
    name: { es: "Ensalada de Gandules", en: "Pigeon Pea Salad" },
    time: "15 min + 30 min de nevera",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 15 onzas de gandules verdes, escurridos y enjuagados",
        "1 tomate en cubos",
        "½ cebolla roja picada",
        "½ pimiento rojo picado",
        "2 cucharadas de recao o cilantro picado",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "1 diente de ajo, majado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 cans (15 oz) green pigeon peas, drained and rinsed",
        "1 tomato, diced",
        "½ red onion, chopped",
        "½ red bell pepper, chopped",
        "2 tablespoons chopped culantro or cilantro",
        "3 tablespoons olive oil",
        "2 tablespoons lime juice",
        "1 garlic clove, mashed",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Bata el aceite con el limón, el ajo, sal y pimienta.",
        "Mezcle los gandules con el tomate, la cebolla, el pimiento y el recao.",
        "Aliñe y refrigere 30 minutos. Va muy bien con pernil o pollo asado."
      ],
      en: [
        "Whisk the oil with the lime juice, garlic, salt and pepper.",
        "Toss the pigeon peas with the tomato, onion, bell pepper and culantro.",
        "Dress and refrigerate 30 minutes. Great with roast pork or chicken."
      ]
    }
  },
  {
    id: "ensalada-lentejas",
    category: "ensaladas",
    name: { es: "Ensalada de Lentejas", en: "Lentil Salad" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "1 taza de lentejas secas",
        "1 hoja de laurel",
        "1 zanahoria rallada",
        "1 tomate en cubos",
        "½ cebolla roja picada",
        "2 cucharadas de perejil picado",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "½ cucharadita de comino",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 cup dried lentils",
        "1 bay leaf",
        "1 carrot, grated",
        "1 tomato, diced",
        "½ red onion, chopped",
        "2 tablespoons chopped parsley",
        "3 tablespoons olive oil",
        "2 tablespoons vinegar",
        "½ teaspoon cumin",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Enjuague las lentejas y hiérvalas en agua con el laurel 18–20 minutos, hasta que estén tiernas pero enteras. Añada sal al final.",
        "Escurra, quite el laurel y deje refrescar.",
        "Bata el aceite con el vinagre, el comino, sal y pimienta.",
        "Mezcle las lentejas tibias con la zanahoria, el tomate, la cebolla y el perejil, y aliñe (tibias absorben mejor el aderezo)."
      ],
      en: [
        "Rinse the lentils and boil them in water with the bay leaf 18–20 minutes, until tender but whole. Add salt at the end.",
        "Drain, remove the bay leaf and let cool slightly.",
        "Whisk the oil with the vinegar, cumin, salt and pepper.",
        "Toss the warm lentils with the carrot, tomato, onion and parsley, and dress (warm, they absorb the dressing better)."
      ]
    }
  },
  {
    id: "ensalada-frijoles-negros-maiz",
    category: "ensaladas",
    name: { es: "Ensalada de Frijoles Negros y Maíz", en: "Black Bean and Corn Salad" },
    time: "15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas negras, escurridas y enjuagadas",
        "1 lata de 15 onzas de maíz en grano, escurrido",
        "1 aguacate en cubos",
        "1 tomate en cubos",
        "½ cebolla roja picada",
        "½ pimiento rojo picado",
        "¼ taza de cilantro picado",
        "3 cucharadas de aceite de oliva",
        "3 cucharadas de jugo de limón",
        "½ cucharadita de comino",
        "Sal al gusto"
      ],
      en: [
        "2 cans (15 oz) black beans, drained and rinsed",
        "1 can (15 oz) corn kernels, drained",
        "1 avocado, cubed",
        "1 tomato, diced",
        "½ red onion, chopped",
        "½ red bell pepper, chopped",
        "¼ cup chopped cilantro",
        "3 tablespoons olive oil",
        "3 tablespoons lime juice",
        "½ teaspoon cumin",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Bata el aceite con el limón, el comino y la sal.",
        "Mezcle los frijoles con el maíz, el tomate, la cebolla, el pimiento y el cilantro, y aliñe.",
        "Añada el aguacate al final, con cuidado para que no se deshaga.",
        "Sirva como ensalada, como acompañante de carnes a la parrilla o con tostones."
      ],
      en: [
        "Whisk the oil with the lime juice, cumin and salt.",
        "Toss the beans with the corn, tomato, onion, bell pepper and cilantro, and dress.",
        "Add the avocado last, gently so it doesn't fall apart.",
        "Serve as a salad, alongside grilled meats or with tostones."
      ]
    }
  },
  {
    id: "ensalada-habichuelas-blancas-atun",
    category: "ensaladas",
    name: { es: "Ensalada de Habichuelas Blancas con Atún", en: "White Bean and Tuna Salad" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas blancas, escurridas y enjuagadas",
        "2 latas de 5 onzas de atún en agua, escurrido",
        "½ cebolla roja en tiritas finas",
        "½ pimiento rojo picado",
        "10 aceitunas rellenas, en ruedas",
        "2 cucharadas de perejil picado",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de jugo de limón",
        "Pimienta al gusto"
      ],
      en: [
        "2 cans (15 oz) white beans, drained and rinsed",
        "2 cans (5 oz) tuna in water, drained",
        "½ red onion, in thin strips",
        "½ red bell pepper, chopped",
        "10 stuffed olives, sliced",
        "2 tablespoons chopped parsley",
        "3 tablespoons olive oil",
        "2 tablespoons lime juice",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle las habichuelas con la cebolla, el pimiento, las aceitunas y el perejil.",
        "Añada el atún en lascas, sin desmenuzarlo demasiado.",
        "Aliñe con el aceite, el limón y pimienta. Pruebe antes de salar: el atún y las aceitunas ya traen sal.",
        "Es un almuerzo completo y fresco, sin cocinar."
      ],
      en: [
        "Combine the beans with the onion, bell pepper, olives and parsley.",
        "Add the tuna in flakes, without breaking it up too much.",
        "Dress with the oil, lime juice and pepper. Taste before salting: the tuna and olives are already salty.",
        "It's a complete, fresh lunch with no cooking."
      ]
    }
  },
  {
    id: "gazpacho-bacalao",
    category: "ensaladas",
    name: { es: "Gazpacho de Bacalao con Aguacate", en: "Puerto Rican Salt Cod and Avocado Gazpacho" },
    time: "30 min + desalar el bacalao",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de bacalao seco, sin espinas",
        "2 aguacates en cubos",
        "2 tomates en cubos",
        "1 cebolla en ruedas finas",
        "1 pimiento verde en tiritas",
        "2 huevos duros en ruedas",
        "⅓ taza de aceite de oliva",
        "¼ taza de vinagre",
        "1 diente de ajo, majado",
        "Pimienta al gusto"
      ],
      en: [
        "1 lb dried salt cod, boneless",
        "2 avocados, cubed",
        "2 tomatoes, diced",
        "1 onion, thinly sliced",
        "1 green bell pepper, in strips",
        "2 hard-boiled eggs, sliced",
        "⅓ cup olive oil",
        "¼ cup vinegar",
        "1 garlic clove, mashed",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Remoje el bacalao en agua fría de 8 a 12 horas en la nevera, cambiando el agua 3 o 4 veces.",
        "Hiérvalo en agua limpia 10 minutos, escurra, deje refrescar y desmenúcelo en lascas.",
        "Bata el aceite con el vinagre, el ajo y pimienta, y mezcle con el bacalao, la cebolla y el pimiento. Deje que se marine 15 minutos.",
        "Añada el tomate y el aguacate con cuidado, y decore con el huevo.",
        "Es el gazpacho boricua: una ensalada fresca de bacalao, pariente de la serenata, que se come con viandas, galletas o pan. Pruebe antes de salar."
      ],
      en: [
        "Soak the cod in cold water 8 to 12 hours in the fridge, changing the water 3 or 4 times.",
        "Boil it in fresh water 10 minutes, drain, let cool and flake it.",
        "Whisk the oil with the vinegar, garlic and pepper, and toss with the cod, onion and bell pepper. Let it marinate 15 minutes.",
        "Gently add the tomato and avocado, and garnish with the egg.",
        "This is Puerto Rican gazpacho: a fresh salt cod salad, a cousin of serenata, eaten with root vegetables, crackers or bread. Taste before salting."
      ]
    }
  },
  {
    id: "gazpacho-andaluz",
    category: "sopas",
    name: { es: "Gazpacho de Tomate (Sopa Fría)", en: "Tomato Gazpacho (Cold Soup)" },
    time: "20 min + 2 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de tomates maduros, en trozos",
        "1 pepino pelado, en trozos",
        "1 pimiento verde, en trozos",
        "¼ cebolla",
        "1 diente de ajo",
        "1 rebanada de pan del día anterior, sin corteza",
        "⅓ taza de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharadita de sal",
        "1 taza de agua fría"
      ],
      en: [
        "2 lb ripe tomatoes, in chunks",
        "1 cucumber, peeled, in chunks",
        "1 green bell pepper, in chunks",
        "¼ onion",
        "1 garlic clove",
        "1 slice day-old bread, crust removed",
        "⅓ cup olive oil",
        "2 tablespoons vinegar",
        "1 teaspoon salt",
        "1 cup cold water"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en un poco del agua.",
        "Licúe los tomates, el pepino, el pimiento, la cebolla, el ajo y el pan hasta que quede muy fino.",
        "Con la licuadora andando, añada el aceite en hilo, luego el vinagre y la sal. Añada agua hasta la espesura que guste.",
        "Cuele si lo quiere bien liso y refrigere 2 horas como mínimo: se sirve bien frío.",
        "Sirva con cubitos de pepino, pimiento y pan tostado por encima. Viene de la cocina de España y es ideal para los días de calor."
      ],
      en: [
        "Soak the bread in a little of the water.",
        "Blend the tomatoes, cucumber, bell pepper, onion, garlic and bread until very smooth.",
        "With the blender running, drizzle in the oil, then the vinegar and salt. Add water to the thickness you like.",
        "Strain if you want it very smooth and refrigerate at least 2 hours: it's served very cold.",
        "Serve topped with diced cucumber, bell pepper and toasted bread. It comes from Spanish cooking and is ideal on hot days."
      ]
    }
  },
  {
    id: "gazpacho-mango",
    category: "sopas",
    name: { es: "Gazpacho de Mangó", en: "Mango Gazpacho" },
    time: "15 min + 1 hr de nevera",
    servings: 4,
    ingredients: {
      es: [
        "3 mangós maduros, pelados y en trozos",
        "1 pepino pelado, en trozos",
        "½ pimiento rojo",
        "¼ cebolla roja",
        "2 cucharadas de jugo de limón",
        "2 cucharadas de aceite de oliva",
        "½ cucharadita de sal",
        "½ taza de agua fría",
        "2 cucharadas de cilantro picado"
      ],
      en: [
        "3 ripe mangoes, peeled, in chunks",
        "1 cucumber, peeled, in chunks",
        "½ red bell pepper",
        "¼ red onion",
        "2 tablespoons lime juice",
        "2 tablespoons olive oil",
        "½ teaspoon salt",
        "½ cup cold water",
        "2 tablespoons chopped cilantro"
      ]
    },
    steps: {
      es: [
        "Reserve un poco de mangó y de pepino en cubitos para decorar.",
        "Licúe el resto del mangó con el pepino, el pimiento, la cebolla, el limón, el aceite, la sal y el agua hasta que quede liso.",
        "Refrigere 1 hora como mínimo.",
        "Sirva en vasitos o tazones con los cubitos reservados y el cilantro. Es dulce, ácido y muy refrescante."
      ],
      en: [
        "Set aside a little diced mango and cucumber for garnish.",
        "Blend the rest of the mango with the cucumber, bell pepper, onion, lime juice, oil, salt and water until smooth.",
        "Refrigerate at least 1 hour.",
        "Serve in small glasses or bowls with the reserved dice and cilantro. It's sweet, tangy and very refreshing."
      ]
    }
  },

  // ── Decimoquinta tanda (2026-10): galletas (cucas, jengibre…) y más postres ──
  {
    id: "cucas-melao-panaderia",
    category: "galletitas",
    name: { es: "Cucas de Melao de Panadería (Grandes y Finas)", en: "Bakery-Style Molasses Cucas (Large and Thin)" },
    time: "45 min + 1 hr de nevera",
    servings: 16,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 cucharadita de bicarbonato",
        "½ cucharadita de sal",
        "2 cucharaditas de jengibre en polvo",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de clavo molido",
        "½ taza de manteca vegetal o mantequilla, blanda",
        "½ taza de azúcar morena",
        "¾ taza de melao de caña",
        "1 huevo"
      ],
      en: [
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "½ teaspoon salt",
        "2 teaspoons ground ginger",
        "1 teaspoon ground cinnamon",
        "½ teaspoon ground cloves",
        "½ cup vegetable shortening or butter, softened",
        "½ cup brown sugar",
        "¾ cup cane molasses",
        "1 egg"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina con el bicarbonato, la sal y las especias.",
        "Bata la manteca con el azúcar morena, añada el melao y el huevo, y luego la harina hasta tener una masa firme y oscura.",
        "Envuelva en plástico y refrigere 1 hora (así se estira sin pegarse).",
        "Caliente el horno a 350°F. Estire la masa a ⅛ de pulgada sobre harina y corte círculos grandes con el borde de una lata o un plato pequeño.",
        "Hornee 10–12 minutos en bandejas engrasadas. Salen blandas y se ponen crujientes al enfriar, como las de las panaderías de antes."
      ],
      en: [
        "Mix the flour with the baking soda, salt and spices.",
        "Beat the shortening with the brown sugar, add the molasses and egg, then the flour until you have a firm, dark dough.",
        "Wrap in plastic and refrigerate 1 hour (so it rolls out without sticking).",
        "Heat the oven to 350°F. Roll the dough ⅛ inch thick on a floured surface and cut large circles with the rim of a can or a small plate.",
        "Bake 10–12 minutes on greased sheet pans. They come out soft and turn crisp as they cool, like the old-time bakery ones."
      ]
    }
  },
  {
    id: "munequitos-jengibre",
    category: "galletitas",
    name: { es: "Muñequitos de Jengibre Glaseados", en: "Iced Gingerbread People" },
    time: "1 hr + 2 hr de nevera",
    servings: 24,
    ingredients: {
      es: [
        "3 tazas de harina de trigo",
        "1 cucharadita de bicarbonato",
        "¼ cucharadita de sal",
        "1 cucharada de jengibre en polvo",
        "1½ cucharaditas de canela en polvo",
        "¼ cucharadita de clavo molido",
        "¾ taza de mantequilla, blanda",
        "¾ taza de azúcar morena",
        "1 huevo",
        "½ taza de melao",
        "Glaseado: 1½ tazas de azúcar en polvo",
        "2 cucharadas de leche"
      ],
      en: [
        "3 cups all-purpose flour",
        "1 teaspoon baking soda",
        "¼ teaspoon salt",
        "1 tablespoon ground ginger",
        "1½ teaspoons ground cinnamon",
        "¼ teaspoon ground cloves",
        "¾ cup butter, softened",
        "¾ cup brown sugar",
        "1 egg",
        "½ cup molasses",
        "Icing: 1½ cups powdered sugar",
        "2 tablespoons milk"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina con el bicarbonato, la sal y las especias.",
        "Bata la mantequilla con el azúcar morena, añada el huevo y el melao, y luego la harina.",
        "Divida la masa en dos discos, envuélvalos y refrigere 2 horas.",
        "Caliente el horno a 350°F. Estire a ¼ de pulgada y corte muñequitos (o estrellas y arbolitos). Hornee 8–10 minutos.",
        "Mezcle el azúcar en polvo con la leche hasta tener un glaseado espeso y decore con manga o con una bolsita con la punta cortada. Deje secar 1 hora."
      ],
      en: [
        "Mix the flour with the baking soda, salt and spices.",
        "Beat the butter with the brown sugar, add the egg and molasses, then the flour.",
        "Divide the dough into two disks, wrap and refrigerate 2 hours.",
        "Heat the oven to 350°F. Roll ¼ inch thick and cut out people (or stars and trees). Bake 8–10 minutes.",
        "Mix the powdered sugar with the milk to a thick icing and decorate with a piping bag or a small bag with the tip snipped. Let dry 1 hour."
      ]
    }
  },
  {
    id: "galletas-melao-especias",
    category: "galletitas",
    name: { es: "Galletas Blandas de Melao y Especias", en: "Soft Molasses Spice Cookies" },
    time: "35 min + 30 min de nevera",
    servings: 24,
    ingredients: {
      es: [
        "2¼ tazas de harina de trigo",
        "2 cucharaditas de bicarbonato",
        "¼ cucharadita de sal",
        "1½ cucharaditas de jengibre en polvo",
        "1 cucharadita de canela en polvo",
        "¼ cucharadita de clavo molido",
        "¾ taza de mantequilla, derretida",
        "1 taza de azúcar morena",
        "1 huevo",
        "¼ taza de melao",
        "Para cubrir: ¼ taza de azúcar"
      ],
      en: [
        "2¼ cups all-purpose flour",
        "2 teaspoons baking soda",
        "¼ teaspoon salt",
        "1½ teaspoons ground ginger",
        "1 teaspoon ground cinnamon",
        "¼ teaspoon ground cloves",
        "¾ cup butter, melted",
        "1 cup brown sugar",
        "1 egg",
        "¼ cup molasses",
        "For coating: ¼ cup sugar"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina con el bicarbonato, la sal y las especias.",
        "Bata la mantequilla derretida con el azúcar morena, el huevo y el melao. Añada la harina y refrigere la masa 30 minutos.",
        "Caliente el horno a 350°F. Forme bolitas de una cucharada y páselas por el azúcar.",
        "Hornee 9–10 minutos: salen agrietadas por encima y blanditas por dentro. Deje 5 minutos en la bandeja."
      ],
      en: [
        "Mix the flour with the baking soda, salt and spices.",
        "Whisk the melted butter with the brown sugar, egg and molasses. Add the flour and chill the dough 30 minutes.",
        "Heat the oven to 350°F. Form tablespoon balls and roll them in the sugar.",
        "Bake 9–10 minutes: they come out crackled on top and soft inside. Leave 5 minutes on the pan."
      ]
    }
  },
  {
    id: "galletas-jengibre-limon",
    category: "galletitas",
    name: { es: "Galletas de Jengibre Fresco y Limón", en: "Fresh Ginger and Lime Cookies" },
    time: "35 min",
    servings: 24,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "¾ taza de mantequilla, blanda",
        "¾ taza de azúcar",
        "1 huevo",
        "2 cucharadas de jengibre fresco rallado",
        "1 cucharada de ralladura de limón",
        "Glaseado: 1 taza de azúcar en polvo",
        "2 cucharadas de jugo de limón"
      ],
      en: [
        "2 cups all-purpose flour",
        "½ teaspoon baking powder",
        "¼ teaspoon salt",
        "¾ cup butter, softened",
        "¾ cup sugar",
        "1 egg",
        "2 tablespoons grated fresh ginger",
        "1 tablespoon lime zest",
        "Glaze: 1 cup powdered sugar",
        "2 tablespoons lime juice"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla con el azúcar, el jengibre y la ralladura hasta que esté cremosa. Añada el huevo.",
        "Añada la harina mezclada con el polvo de hornear y la sal.",
        "Forme bolitas, aplánelas con el fondo de un vaso y hornee 11–13 minutos, sin que se doren mucho.",
        "Mezcle el azúcar en polvo con el limón y bañe las galletas frías. El jengibre fresco pica un poquito y refresca."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the butter with the sugar, ginger and zest until creamy. Add the egg.",
        "Add the flour mixed with the baking powder and salt.",
        "Form balls, flatten them with the bottom of a glass and bake 11–13 minutes, without browning much.",
        "Mix the powdered sugar with the lime juice and glaze the cooled cookies. The fresh ginger gives a gentle, refreshing heat."
      ]
    }
  },
  {
    id: "galletas-marias-caseras",
    category: "galletitas",
    name: { es: "Galletas María Caseras", en: "Homemade Maria Cookies" },
    time: "45 min",
    servings: 30,
    ingredients: {
      es: [
        "2 tazas de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "¼ taza de mantequilla, blanda",
        "½ taza de azúcar",
        "1 huevo",
        "3 cucharadas de leche",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2 cups all-purpose flour",
        "1 teaspoon baking powder",
        "¼ teaspoon salt",
        "¼ cup butter, softened",
        "½ cup sugar",
        "1 egg",
        "3 tablespoons milk",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla con el azúcar, añada el huevo, la leche y la vainilla, y luego la harina con el polvo de hornear y la sal.",
        "Estire la masa muy fina (⅛ de pulgada) y corte círculos de 2½ pulgadas.",
        "Pínchelas con un tenedor y, si quiere, marque un borde con la punta de un cuchillo.",
        "Hornee 10–12 minutos, hasta que los bordes doren. Son las de mojar en el café con leche."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the butter with the sugar, add the egg, milk and vanilla, then the flour with the baking powder and salt.",
        "Roll the dough very thin (⅛ inch) and cut 2½-inch circles.",
        "Prick them with a fork and, if you like, mark a border with the tip of a knife.",
        "Bake 10–12 minutes, until the edges are golden. They're the ones for dunking in café con leche."
      ]
    }
  },
  {
    id: "galletas-pasas-ron",
    category: "galletitas",
    name: { es: "Galletas de Pasas al Ron", en: "Rum Raisin Cookies" },
    time: "40 min + 1 hr de remojo",
    servings: 24,
    ingredients: {
      es: [
        "¾ taza de pasas",
        "¼ taza de ron oscuro",
        "2 tazas de harina de trigo",
        "½ cucharadita de bicarbonato",
        "¼ cucharadita de sal",
        "½ cucharadita de canela en polvo",
        "½ taza de mantequilla, blanda",
        "¾ taza de azúcar morena",
        "1 huevo"
      ],
      en: [
        "¾ cup raisins",
        "¼ cup dark rum",
        "2 cups all-purpose flour",
        "½ teaspoon baking soda",
        "¼ teaspoon salt",
        "½ teaspoon ground cinnamon",
        "½ cup butter, softened",
        "¾ cup brown sugar",
        "1 egg"
      ]
    },
    steps: {
      es: [
        "Remoje las pasas en el ron 1 hora (o caliéntelas juntas 1 minuto y deje refrescar).",
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla con el azúcar morena y el huevo. Añada la harina con el bicarbonato, la sal y la canela.",
        "Añada las pasas con el ron que no absorbieron. Ponga cucharadas en las bandejas.",
        "Hornee 11–13 minutos. El alcohol se evapora casi todo en el horno, pero queda el sabor a ron."
      ],
      en: [
        "Soak the raisins in the rum 1 hour (or warm them together 1 minute and let cool).",
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the butter with the brown sugar and egg. Add the flour with the baking soda, salt and cinnamon.",
        "Add the raisins with any rum they didn't absorb. Drop spoonfuls on the pans.",
        "Bake 11–13 minutes. Most of the alcohol bakes off, but the rum flavor stays."
      ]
    }
  },
  {
    id: "espirales-guayaba-queso",
    category: "galletitas",
    name: { es: "Espirales de Guayaba y Queso Crema", en: "Guava and Cream Cheese Pinwheel Cookies" },
    time: "50 min + 1 hr de nevera",
    servings: 30,
    ingredients: {
      es: [
        "½ taza de mantequilla, blanda",
        "4 onzas de queso crema, blando",
        "½ taza de azúcar",
        "1 huevo",
        "1 cucharadita de vainilla",
        "2 tazas de harina de trigo",
        "½ cucharadita de polvo de hornear",
        "¼ cucharadita de sal",
        "8 onzas de pasta de guayaba"
      ],
      en: [
        "½ cup butter, softened",
        "4 oz cream cheese, softened",
        "½ cup sugar",
        "1 egg",
        "1 teaspoon vanilla",
        "2 cups all-purpose flour",
        "½ teaspoon baking powder",
        "¼ teaspoon salt",
        "8 oz guava paste"
      ]
    },
    steps: {
      es: [
        "Bata la mantequilla con el queso crema y el azúcar. Añada el huevo, la vainilla y la harina con el polvo de hornear y la sal.",
        "Derrita la pasta de guayaba con 1 cucharada de agua a fuego bajo, moviendo, hasta que se pueda untar. Deje refrescar.",
        "Estire la masa entre dos papeles en un rectángulo de 10 × 12 pulgadas, unte la guayaba y enróllela como un brazo gitano.",
        "Envuelva y refrigere 1 hora. Caliente el horno a 350°F.",
        "Corte ruedas de ¼ de pulgada y hornee 12–14 minutos, hasta que los bordes doren."
      ],
      en: [
        "Beat the butter with the cream cheese and sugar. Add the egg, vanilla and the flour with the baking powder and salt.",
        "Melt the guava paste with 1 tablespoon of water over low heat, stirring, until spreadable. Let cool.",
        "Roll the dough between two sheets of paper into a 10 × 12-inch rectangle, spread the guava and roll it up like a jelly roll.",
        "Wrap and refrigerate 1 hour. Heat the oven to 350°F.",
        "Slice ¼-inch rounds and bake 12–14 minutes, until the edges are golden."
      ]
    }
  },
  {
    id: "alfajores-maicena",
    category: "galletitas",
    name: { es: "Alfajores de Maicena con Dulce de Leche", en: "Cornstarch Alfajores with Dulce de Leche" },
    time: "50 min",
    servings: 18,
    ingredients: {
      es: [
        "1½ tazas de maicena",
        "1 taza de harina de trigo",
        "1 cucharadita de polvo de hornear",
        "½ taza de mantequilla, blanda",
        "½ taza de azúcar",
        "2 yemas de huevo",
        "1 cucharadita de vainilla",
        "1 lata de 14 onzas de leche condensada, cocida como dulce de leche",
        "½ taza de coco rallado"
      ],
      en: [
        "1½ cups cornstarch",
        "1 cup all-purpose flour",
        "1 teaspoon baking powder",
        "½ cup butter, softened",
        "½ cup sugar",
        "2 egg yolks",
        "1 teaspoon vanilla",
        "1 can (14 oz) sweetened condensed milk, cooked into dulce de leche",
        "½ cup shredded coconut"
      ]
    },
    steps: {
      es: [
        "Para el dulce de leche: hierva la lata cerrada, siempre cubierta de agua, 2½ horas a fuego bajo. Deje enfriar por completo antes de abrirla (abrirla caliente es peligroso).",
        "Caliente el horno a 350°F. Bata la mantequilla con el azúcar, las yemas y la vainilla, y añada la maicena, la harina y el polvo de hornear.",
        "Estire a ¼ de pulgada y corte círculos de 2 pulgadas. Hornee 10 minutos, sin que doren.",
        "Una las galletas frías de dos en dos con una cucharadita de dulce de leche.",
        "Ruede el borde por el coco rallado."
      ],
      en: [
        "For the dulce de leche: boil the closed can, always covered with water, 2½ hours over low heat. Let it cool completely before opening (opening it hot is dangerous).",
        "Heat the oven to 350°F. Beat the butter with the sugar, yolks and vanilla, and add the cornstarch, flour and baking powder.",
        "Roll ¼ inch thick and cut 2-inch circles. Bake 10 minutes, without browning.",
        "Sandwich the cooled cookies in pairs with a teaspoon of dulce de leche.",
        "Roll the edges in the shredded coconut."
      ]
    }
  },
  {
    id: "galletas-avena-coco",
    category: "galletitas",
    name: { es: "Galletas de Avena y Coco", en: "Oatmeal Coconut Cookies" },
    time: "35 min",
    servings: 24,
    ingredients: {
      es: [
        "1½ tazas de avena",
        "1 taza de harina de trigo",
        "1 taza de coco rallado",
        "½ cucharadita de bicarbonato",
        "¼ cucharadita de sal",
        "½ taza de mantequilla, derretida",
        "¾ taza de azúcar morena",
        "1 huevo",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1½ cups rolled oats",
        "1 cup all-purpose flour",
        "1 cup shredded coconut",
        "½ teaspoon baking soda",
        "¼ teaspoon salt",
        "½ cup butter, melted",
        "¾ cup brown sugar",
        "1 egg",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Mezcle la avena, la harina, el coco, el bicarbonato y la sal.",
        "Bata la mantequilla derretida con el azúcar morena, el huevo y la vainilla, y únalo a lo seco.",
        "Ponga cucharadas en las bandejas y aplánelas un poco. Hornee 11–13 minutos, hasta que estén doradas.",
        "Crujientes por fuera y masticables por dentro."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Mix the oats, flour, coconut, baking soda and salt.",
        "Whisk the melted butter with the brown sugar, egg and vanilla, and combine with the dry mix.",
        "Drop spoonfuls on the pans and flatten slightly. Bake 11–13 minutes, until golden.",
        "Crisp outside and chewy inside."
      ]
    }
  },
  {
    id: "galletas-mantequilla-danesas",
    category: "galletitas",
    name: { es: "Galletas de Mantequilla Tipo Danesas", en: "Danish-Style Butter Cookies" },
    time: "40 min",
    servings: 30,
    ingredients: {
      es: [
        "1 taza de mantequilla, blanda",
        "⅔ taza de azúcar en polvo",
        "1 huevo",
        "1½ cucharaditas de vainilla",
        "2¼ tazas de harina de trigo",
        "¼ cucharadita de sal",
        "2 cucharadas de azúcar gruesa para decorar"
      ],
      en: [
        "1 cup butter, softened",
        "⅔ cup powdered sugar",
        "1 egg",
        "1½ teaspoons vanilla",
        "2¼ cups all-purpose flour",
        "¼ teaspoon salt",
        "2 tablespoons coarse sugar for decorating"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F y forre dos bandejas con papel de hornear.",
        "Bata la mantequilla con el azúcar en polvo 3 minutos, hasta que esté muy cremosa. Añada el huevo y la vainilla.",
        "Añada la harina y la sal sin batir de más: la masa debe quedar suave para pasar por la manga.",
        "Con una manga y boquilla de estrella, forme anillos y rositas. Espolvoree el azúcar gruesa.",
        "Hornee 12–14 minutos, hasta que los bordes doren. Se guardan en lata hasta 2 semanas."
      ],
      en: [
        "Heat the oven to 350°F and line two sheet pans with parchment.",
        "Beat the butter with the powdered sugar 3 minutes, until very creamy. Add the egg and vanilla.",
        "Add the flour and salt without overmixing: the dough should stay soft enough to pipe.",
        "With a piping bag and star tip, pipe rings and rosettes. Sprinkle with the coarse sugar.",
        "Bake 12–14 minutes, until the edges are golden. They keep in a tin up to 2 weeks."
      ]
    }
  },
  {
    id: "natilla-chocolate",
    category: "postres",
    name: { es: "Natilla de Chocolate", en: "Chocolate Natilla (Custard)" },
    time: "25 min + 2 hr de nevera",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de leche",
        "½ taza de azúcar",
        "3 cucharadas de maicena",
        "3 cucharadas de cocoa en polvo",
        "3 yemas de huevo",
        "2 onzas de chocolate semidulce, picado",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "3 cups milk",
        "½ cup sugar",
        "3 tablespoons cornstarch",
        "3 tablespoons cocoa powder",
        "3 egg yolks",
        "2 oz semisweet chocolate, chopped",
        "1 teaspoon vanilla",
        "1 pinch of salt"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle en frío la leche, el azúcar, la maicena, la cocoa, las yemas y la sal hasta que no queden grumos.",
        "Cocine a fuego medio-bajo, moviendo sin parar, 10–12 minutos, hasta que espese y cubra la cuchara.",
        "Retire del fuego y añada el chocolate y la vainilla; mueva hasta que el chocolate se derrita.",
        "Reparta en copas, cubra con plástico tocando la superficie (para que no haga nata) y refrigere 2 horas."
      ],
      en: [
        "In a pot, whisk the cold milk, sugar, cornstarch, cocoa, yolks and salt until no lumps remain.",
        "Cook over medium-low heat, stirring constantly, 10–12 minutes, until thick and it coats the spoon.",
        "Remove from the heat and add the chocolate and vanilla; stir until the chocolate melts.",
        "Divide into cups, cover with plastic touching the surface (so no skin forms) and refrigerate 2 hours."
      ]
    }
  },
  {
    id: "budin-pan-coco",
    category: "postres",
    name: { es: "Budín de Pan con Coco", en: "Coconut Bread Pudding" },
    time: "1 hr 15 min",
    servings: 12,
    ingredients: {
      es: [
        "1 libra de pan de agua del día anterior, en pedazos",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "1 lata de 14 onzas de leche condensada",
        "4 huevos",
        "½ taza de coco rallado",
        "¼ taza de mantequilla, derretida",
        "1 cucharadita de canela en polvo",
        "1 cucharadita de vainilla",
        "½ taza de pasas",
        "1 taza de azúcar (para el caramelo)"
      ],
      en: [
        "1 lb day-old Puerto Rican water bread, in pieces",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "1 can (14 oz) sweetened condensed milk",
        "4 eggs",
        "½ cup shredded coconut",
        "¼ cup butter, melted",
        "1 teaspoon ground cinnamon",
        "1 teaspoon vanilla",
        "½ cup raisins",
        "1 cup sugar (for the caramel)"
      ]
    },
    steps: {
      es: [
        "Remoje el pan en la leche de coco y la evaporada 20 minutos, y májelo con las manos hasta que no queden pedazos grandes.",
        "Caliente el horno a 350°F. Haga el caramelo con el azúcar y cubra un molde de 9 × 13 pulgadas o uno redondo.",
        "Añada al pan la leche condensada, los huevos, el coco, la mantequilla, la canela, la vainilla y las pasas. Mezcle bien.",
        "Vierta sobre el caramelo y hornee a baño de María 1 hora, hasta que un cuchillo salga limpio.",
        "Enfríe, desmolde y corte en cuadros."
      ],
      en: [
        "Soak the bread in the coconut and evaporated milks 20 minutes and mash it with your hands until no big pieces remain.",
        "Heat the oven to 350°F. Make the caramel with the sugar and coat a 9 × 13-inch or round pan.",
        "Add the condensed milk, eggs, coconut, butter, cinnamon, vanilla and raisins to the bread. Mix well.",
        "Pour over the caramel and bake in a water bath 1 hour, until a knife comes out clean.",
        "Cool, unmold and cut into squares."
      ]
    }
  },
  {
    id: "tembleque-calabaza",
    category: "postres",
    name: { es: "Tembleque de Calabaza", en: "Pumpkin Tembleque" },
    time: "25 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "2 latas de 13.5 onzas de leche de coco",
        "1 taza de calabaza cocida y majada",
        "½ taza de azúcar",
        "½ taza de maicena",
        "¼ cucharadita de sal",
        "1 cucharadita de canela en polvo",
        "½ cucharadita de vainilla",
        "Canela en polvo para decorar"
      ],
      en: [
        "2 cans (13.5 oz) coconut milk",
        "1 cup cooked, mashed calabaza (West Indian pumpkin)",
        "½ cup sugar",
        "½ cup cornstarch",
        "¼ teaspoon salt",
        "1 teaspoon ground cinnamon",
        "½ teaspoon vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    steps: {
      es: [
        "Licúe la leche de coco con la calabaza bien escurrida hasta que quede lisa.",
        "Páselo a una olla y añada el azúcar, la maicena, la sal y la canela. Mezcle en frío hasta disolver la maicena.",
        "Cocine a fuego medio, moviendo sin parar, hasta que hierva y espese mucho (unos 10 minutos). Añada la vainilla.",
        "Vierta en un molde mojado con agua fría (así desmolda fácil) y refrigere 4 horas.",
        "Desmolde y espolvoree canela. Es el tembleque de siempre con el color y el sabor de la calabaza."
      ],
      en: [
        "Blend the coconut milk with the well-drained calabaza until smooth.",
        "Transfer to a pot and add the sugar, cornstarch, salt and cinnamon. Whisk cold until the cornstarch dissolves.",
        "Cook over medium heat, stirring constantly, until it boils and thickens a lot (about 10 minutes). Add the vanilla.",
        "Pour into a mold rinsed with cold water (so it unmolds easily) and refrigerate 4 hours.",
        "Unmold and dust with cinnamon. It's the classic tembleque with the color and flavor of calabaza."
      ]
    }
  },
  {
    id: "helado-guayaba",
    category: "postres",
    name: { es: "Helado de Guayaba (Sin Máquina)", en: "No-Churn Guava Ice Cream" },
    time: "20 min + 6 hr de congelador",
    servings: 8,
    ingredients: {
      es: [
        "8 onzas de pasta de guayaba",
        "¼ taza de agua",
        "2 tazas de crema espesa (heavy cream), bien fría",
        "1 lata de 14 onzas de leche condensada",
        "4 onzas de queso crema, blando",
        "1 cucharadita de vainilla"
      ],
      en: [
        "8 oz guava paste",
        "¼ cup water",
        "2 cups heavy cream, very cold",
        "1 can (14 oz) sweetened condensed milk",
        "4 oz cream cheese, softened",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Derrita la pasta de guayaba con el agua a fuego bajo, moviendo, hasta tener un sirope espeso. Deje enfriar.",
        "Bata el queso crema con la leche condensada y la vainilla hasta que esté liso.",
        "Bata la crema hasta que forme picos firmes y únala con cuidado a la mezcla de queso.",
        "Vierta la mitad en un molde, ponga cucharadas de guayaba, repita y pase un cuchillo para hacer vetas.",
        "Cubra y congele 6 horas. Sabe a pastelillo de guayaba y queso."
      ],
      en: [
        "Melt the guava paste with the water over low heat, stirring, into a thick syrup. Let cool.",
        "Beat the cream cheese with the condensed milk and vanilla until smooth.",
        "Whip the cream to stiff peaks and gently fold it into the cheese mixture.",
        "Pour half into a pan, add spoonfuls of guava, repeat and run a knife through to swirl.",
        "Cover and freeze 6 hours. It tastes like a guava and cheese pastry."
      ]
    }
  },
  {
    id: "helado-mango",
    category: "postres",
    name: { es: "Helado de Mangó (Sin Máquina)", en: "No-Churn Mango Ice Cream" },
    time: "15 min + 6 hr de congelador",
    servings: 8,
    ingredients: {
      es: [
        "3 mangós maduros, pelados (2 tazas de pulpa)",
        "1 cucharada de jugo de limón",
        "2 tazas de crema espesa (heavy cream), bien fría",
        "1 lata de 14 onzas de leche condensada",
        "1 pizca de sal"
      ],
      en: [
        "3 ripe mangoes, peeled (2 cups pulp)",
        "1 tablespoon lime juice",
        "2 cups heavy cream, very cold",
        "1 can (14 oz) sweetened condensed milk",
        "1 pinch of salt"
      ]
    },
    steps: {
      es: [
        "Licúe la pulpa de mangó con el limón y la sal hasta tener un puré fino.",
        "Mezcle el puré con la leche condensada.",
        "Bata la crema hasta que forme picos firmes y únala con cuidado a la mezcla de mangó, sin perder el aire.",
        "Vierta en un molde, cubra y congele 6 horas. Sáquelo 5 minutos antes de servir para que se pueda servir con cuchara."
      ],
      en: [
        "Blend the mango pulp with the lime juice and salt into a smooth purée.",
        "Mix the purée with the condensed milk.",
        "Whip the cream to stiff peaks and gently fold it into the mango mixture, keeping the air in.",
        "Pour into a pan, cover and freeze 6 hours. Take it out 5 minutes before serving so it scoops easily."
      ]
    }
  },

  // ── Decimosexta tanda (2026-10): pies tropicales y salsas y aderezos para carnes y pollo ──
  {
    id: "pie-pina",
    category: "pasteles_dulces",
    name: { es: "Pie de Piña con Rejilla", en: "Lattice-Top Pineapple Pie" },
    time: "1 hr 20 min",
    servings: 8,
    ingredients: {
      es: [
        "2 masas para pie de 9 pulgadas (una para la base y otra para la rejilla)",
        "1 lata de 20 onzas de piña triturada en su jugo",
        "½ taza de azúcar",
        "3 cucharadas de maicena",
        "1 cucharada de mantequilla",
        "½ cucharadita de canela en polvo",
        "1 huevo batido (para barnizar)"
      ],
      en: [
        "2 pie crusts, 9 inch (one for the bottom and one for the lattice)",
        "1 can (20 oz) crushed pineapple in juice",
        "½ cup sugar",
        "3 tablespoons cornstarch",
        "1 tablespoon butter",
        "½ teaspoon ground cinnamon",
        "1 beaten egg (for brushing)"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle la piña con su jugo, el azúcar, la maicena y la canela. Cocine moviendo hasta que hierva y espese, unos 5 minutos. Añada la mantequilla y deje refrescar.",
        "Caliente el horno a 400°F. Forre un molde de pie con una masa y vierta el relleno frío.",
        "Corte la otra masa en tiras de 1 pulgada y téjalas encima en forma de rejilla. Selle los bordes.",
        "Barnice con el huevo y hornee 15 minutos; baje a 350°F y siga 25–30 minutos, hasta que la masa esté dorada.",
        "Deje refrescar 2 horas antes de cortar para que el relleno asiente."
      ],
      en: [
        "In a pot, mix the pineapple with its juice, sugar, cornstarch and cinnamon. Cook, stirring, until it boils and thickens, about 5 minutes. Add the butter and let cool.",
        "Heat the oven to 400°F. Line a pie pan with one crust and pour in the cooled filling.",
        "Cut the other crust into 1-inch strips and weave them on top in a lattice. Seal the edges.",
        "Brush with the egg and bake 15 minutes; lower to 350°F and continue 25–30 minutes, until golden.",
        "Let cool 2 hours before slicing so the filling sets."
      ]
    }
  },
  {
    id: "pie-mango",
    category: "pasteles_dulces",
    name: { es: "Pie de Mangó", en: "Mango Pie" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "2 masas para pie de 9 pulgadas",
        "4 tazas de mangó maduro pero firme, en lascas",
        "½ taza de azúcar",
        "3 cucharadas de maicena",
        "1 cucharada de jugo de limón",
        "½ cucharadita de canela en polvo",
        "¼ cucharadita de jengibre molido",
        "1 huevo batido (para barnizar)"
      ],
      en: [
        "2 pie crusts, 9 inch",
        "4 cups ripe but firm mango, sliced",
        "½ cup sugar",
        "3 tablespoons cornstarch",
        "1 tablespoon lime juice",
        "½ teaspoon ground cinnamon",
        "¼ teaspoon ground ginger",
        "1 beaten egg (for brushing)"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400°F. Mezcle el mangó con el azúcar, la maicena, el limón y las especias; deje reposar 10 minutos.",
        "Forre un molde con una masa y añada el mangó con su jugo.",
        "Cubra con la otra masa (entera con cortes para el vapor, o en rejilla) y selle los bordes.",
        "Barnice con el huevo y hornee 15 minutos; baje a 350°F y siga 30–35 minutos, hasta que el relleno burbujee.",
        "Deje enfriar por completo antes de cortar. Use mangó que no esté muy blando para que mantenga la forma."
      ],
      en: [
        "Heat the oven to 400°F. Toss the mango with the sugar, cornstarch, lime juice and spices; let sit 10 minutes.",
        "Line a pan with one crust and add the mango with its juices.",
        "Top with the other crust (whole with vents, or as a lattice) and seal the edges.",
        "Brush with the egg and bake 15 minutes; lower to 350°F and continue 30–35 minutes, until the filling bubbles.",
        "Let cool completely before slicing. Use mango that isn't too soft so it holds its shape."
      ]
    }
  },
  {
    id: "pie-parcha-merengue",
    category: "pasteles_dulces",
    name: { es: "Pie de Parcha con Merengue", en: "Passion Fruit Meringue Pie" },
    time: "1 hr 15 min + 3 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie de 9 pulgadas, horneada",
        "1 lata de 14 onzas de leche condensada",
        "½ taza de pulpa de parcha, colada",
        "4 yemas de huevo",
        "Merengue: 4 claras de huevo",
        "½ taza de azúcar",
        "¼ cucharadita de cremor tártaro"
      ],
      en: [
        "1 pie crust, 9 inch, baked",
        "1 can (14 oz) sweetened condensed milk",
        "½ cup passion fruit pulp, strained",
        "4 egg yolks",
        "Meringue: 4 egg whites",
        "½ cup sugar",
        "¼ teaspoon cream of tartar"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Bata la leche condensada con las yemas y añada la parcha: la mezcla espesa enseguida.",
        "Vierta en la masa horneada y hornee 15 minutos para cocinar las yemas.",
        "Para el merengue: bata las claras con el cremor tártaro hasta que hagan espuma y añada el azúcar poco a poco hasta tener picos firmes y brillantes.",
        "Cubra el relleno caliente con el merengue, sellando hasta el borde de la masa (así no se encoge), y haga picos con una cuchara.",
        "Hornee 12–15 minutos más, hasta que el merengue dore. Deje refrescar y refrigere 3 horas."
      ],
      en: [
        "Heat the oven to 350°F. Whisk the condensed milk with the yolks and add the passion fruit: the mixture thickens right away.",
        "Pour into the baked crust and bake 15 minutes to cook the yolks.",
        "For the meringue: beat the whites with the cream of tartar until foamy and add the sugar gradually to stiff, glossy peaks.",
        "Spread the meringue over the hot filling, sealing it to the crust edge (so it doesn't shrink), and make peaks with a spoon.",
        "Bake 12–15 more minutes, until the meringue is golden. Let cool and refrigerate 3 hours."
      ]
    }
  },
  {
    id: "pie-limon",
    category: "pasteles_dulces",
    name: { es: "Pie de Limón (con Limón del País)", en: "Puerto Rican Lime Pie" },
    time: "40 min + 3 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de galleta molida (galletas María o graham)",
        "6 cucharadas de mantequilla, derretida",
        "2 cucharadas de azúcar",
        "1 lata de 14 onzas de leche condensada",
        "½ taza de jugo de limón del país",
        "1 cucharada de ralladura de limón",
        "3 yemas de huevo",
        "1 taza de crema batida para decorar"
      ],
      en: [
        "1½ cups cookie crumbs (Maria or graham crackers)",
        "6 tablespoons butter, melted",
        "2 tablespoons sugar",
        "1 can (14 oz) sweetened condensed milk",
        "½ cup local lime juice",
        "1 tablespoon lime zest",
        "3 egg yolks",
        "1 cup whipped cream for topping"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350°F. Mezcle la galleta molida con la mantequilla y el azúcar, y apriete en un molde de pie. Hornee 8 minutos.",
        "Bata las yemas con la leche condensada, añada el jugo y la ralladura de limón.",
        "Vierta en la base y hornee 15 minutos, hasta que el centro apenas tiemble.",
        "Deje refrescar y refrigere 3 horas. Decore con crema batida y ralladura de limón."
      ],
      en: [
        "Heat the oven to 350°F. Mix the cookie crumbs with the butter and sugar and press into a pie pan. Bake 8 minutes.",
        "Whisk the yolks with the condensed milk, add the lime juice and zest.",
        "Pour into the crust and bake 15 minutes, until the center barely jiggles.",
        "Let cool and refrigerate 3 hours. Top with whipped cream and lime zest."
      ]
    }
  },
  {
    id: "pie-guineo-crema",
    category: "pasteles_dulces",
    name: { es: "Pie de Guineo y Crema", en: "Banana Cream Pie" },
    time: "40 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie de 9 pulgadas, horneada",
        "2½ tazas de leche",
        "½ taza de azúcar",
        "¼ taza de maicena",
        "3 yemas de huevo",
        "2 cucharadas de mantequilla",
        "1 cucharadita de vainilla",
        "3 guineos maduros en ruedas",
        "1½ tazas de crema batida"
      ],
      en: [
        "1 pie crust, 9 inch, baked",
        "2½ cups milk",
        "½ cup sugar",
        "¼ cup cornstarch",
        "3 egg yolks",
        "2 tablespoons butter",
        "1 teaspoon vanilla",
        "3 ripe bananas, sliced",
        "1½ cups whipped cream"
      ]
    },
    steps: {
      es: [
        "En una olla, mezcle en frío la leche, el azúcar, la maicena y las yemas. Cocine a fuego medio moviendo sin parar hasta que espese y hierva 1 minuto.",
        "Retire del fuego y añada la mantequilla y la vainilla. Cubra con plástico tocando la crema y deje refrescar 20 minutos.",
        "Ponga una capa de guineo en la masa, la mitad de la crema, otra capa de guineo y el resto de la crema.",
        "Refrigere 4 horas y cubra con crema batida antes de servir. Decore con ruedas de guineo al momento para que no se oscurezcan."
      ],
      en: [
        "In a pot, whisk the cold milk, sugar, cornstarch and yolks. Cook over medium heat, stirring constantly, until thick and boiling 1 minute.",
        "Remove from the heat and add the butter and vanilla. Cover with plastic touching the custard and let cool 20 minutes.",
        "Layer banana slices in the crust, half the custard, another layer of banana and the rest of the custard.",
        "Refrigerate 4 hours and top with whipped cream before serving. Garnish with banana slices at the last minute so they don't brown."
      ]
    }
  },
  {
    id: "pie-pina-colada",
    category: "pasteles_dulces",
    name: { es: "Pie de Piña Colada (Sin Alcohol)", en: "Piña Colada Pie (Alcohol-Free)" },
    time: "30 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de galleta molida",
        "6 cucharadas de mantequilla, derretida",
        "1 lata de 15 onzas de crema de coco",
        "8 onzas de queso crema, blando",
        "1 lata de 8 onzas de piña triturada, bien escurrida",
        "1 sobre de gelatina sin sabor",
        "¼ taza de agua fría",
        "1 taza de crema batida",
        "¼ taza de coco rallado, tostado"
      ],
      en: [
        "1½ cups cookie crumbs",
        "6 tablespoons butter, melted",
        "1 can (15 oz) cream of coconut",
        "8 oz cream cheese, softened",
        "1 can (8 oz) crushed pineapple, well drained",
        "1 envelope unflavored gelatin",
        "¼ cup cold water",
        "1 cup whipped cream",
        "¼ cup shredded coconut, toasted"
      ]
    },
    steps: {
      es: [
        "Mezcle la galleta molida con la mantequilla y apriete en un molde de pie. Refrigere mientras prepara el relleno.",
        "Hidrate la gelatina en el agua fría 5 minutos y derrítala 20 segundos en el microondas.",
        "Bata el queso crema con la crema de coco hasta que esté liso; añada la gelatina y la piña.",
        "Una con cuidado la crema batida y vierta en la base.",
        "Refrigere 4 horas y decore con el coco tostado. Todo el sabor del trago, sin alcohol."
      ],
      en: [
        "Mix the cookie crumbs with the butter and press into a pie pan. Refrigerate while you make the filling.",
        "Bloom the gelatin in the cold water 5 minutes and melt it 20 seconds in the microwave.",
        "Beat the cream cheese with the cream of coconut until smooth; add the gelatin and pineapple.",
        "Gently fold in the whipped cream and pour into the crust.",
        "Refrigerate 4 hours and top with the toasted coconut. All the flavor of the drink, without alcohol."
      ]
    }
  },
  {
    id: "pie-calabaza-boricua",
    category: "pasteles_dulces",
    name: { es: "Pie de Calabaza a lo Boricua", en: "Puerto Rican-Style Pumpkin Pie" },
    time: "1 hr 15 min + 2 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1 masa para pie de 9 pulgadas",
        "2 tazas de calabaza cocida y majada, bien escurrida",
        "1 lata de 13.5 onzas de leche de coco",
        "¾ taza de azúcar morena",
        "3 huevos",
        "1½ cucharaditas de canela en polvo",
        "½ cucharadita de jengibre molido",
        "¼ cucharadita de clavo molido",
        "¼ cucharadita de sal"
      ],
      en: [
        "1 pie crust, 9 inch",
        "2 cups cooked, mashed calabaza (West Indian pumpkin), well drained",
        "1 can (13.5 oz) coconut milk",
        "¾ cup brown sugar",
        "3 eggs",
        "1½ teaspoons ground cinnamon",
        "½ teaspoon ground ginger",
        "¼ teaspoon ground cloves",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 425°F y forre un molde de pie con la masa.",
        "Licúe la calabaza con la leche de coco, el azúcar morena, los huevos, las especias y la sal hasta que quede liso.",
        "Vierta en la masa y hornee 15 minutos; baje a 350°F y siga 35–40 minutos, hasta que el centro apenas tiemble.",
        "Deje enfriar y refrigere 2 horas. La leche de coco en vez de la evaporada le da el toque isleño."
      ],
      en: [
        "Heat the oven to 425°F and line a pie pan with the crust.",
        "Blend the calabaza with the coconut milk, brown sugar, eggs, spices and salt until smooth.",
        "Pour into the crust and bake 15 minutes; lower to 350°F and continue 35–40 minutes, until the center barely jiggles.",
        "Let cool and refrigerate 2 hours. Coconut milk instead of evaporated milk gives it the island touch."
      ]
    }
  },
  {
    id: "pie-guanabana",
    category: "pasteles_dulces",
    name: { es: "Pie Frío de Guanábana", en: "No-Bake Soursop Pie" },
    time: "30 min + 4 hr de nevera",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de galleta molida",
        "6 cucharadas de mantequilla, derretida",
        "1½ tazas de pulpa de guanábana, sin semillas",
        "1 lata de 14 onzas de leche condensada",
        "8 onzas de queso crema, blando",
        "1 sobre de gelatina sin sabor",
        "¼ taza de agua fría",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "1½ cups cookie crumbs",
        "6 tablespoons butter, melted",
        "1½ cups soursop pulp, seeded",
        "1 can (14 oz) sweetened condensed milk",
        "8 oz cream cheese, softened",
        "1 envelope unflavored gelatin",
        "¼ cup cold water",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Mezcle la galleta molida con la mantequilla y apriete en un molde de pie. Refrigere.",
        "Hidrate la gelatina en el agua fría 5 minutos y derrítala 20 segundos en el microondas.",
        "Licúe la guanábana con la leche condensada, el queso crema y el limón. Añada la gelatina y licúe unos segundos más.",
        "Vierta en la base y refrigere 4 horas, hasta que esté firme. Decore con pulpa de guanábana o hojitas de menta."
      ],
      en: [
        "Mix the cookie crumbs with the butter and press into a pie pan. Refrigerate.",
        "Bloom the gelatin in the cold water 5 minutes and melt it 20 seconds in the microwave.",
        "Blend the soursop with the condensed milk, cream cheese and lime juice. Add the gelatin and blend a few more seconds.",
        "Pour into the crust and refrigerate 4 hours, until firm. Garnish with soursop pulp or mint leaves."
      ]
    }
  },
  {
    id: "chimichurri-boricua",
    category: "salsas",
    name: { es: "Chimichurri Boricua con Recao", en: "Puerto Rican Chimichurri with Culantro" },
    time: "15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de perejil picado fino",
        "½ taza de recao picado fino",
        "6 dientes de ajo, majados",
        "1 cucharadita de orégano seco",
        "½ cucharadita de hojuelas de ají (opcional)",
        "¼ taza de vinagre",
        "¾ taza de aceite de oliva",
        "1 cucharadita de sal"
      ],
      en: [
        "1 cup finely chopped parsley",
        "½ cup finely chopped culantro",
        "6 garlic cloves, mashed",
        "1 teaspoon dried oregano",
        "½ teaspoon red pepper flakes (optional)",
        "¼ cup vinegar",
        "¾ cup olive oil",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Mezcle el perejil, el recao, el ajo, el orégano y el ají en un envase.",
        "Disuelva la sal en el vinagre y añádalo.",
        "Añada el aceite y mezcle. Deje reposar 20 minutos para que se mezclen los sabores.",
        "Sirva sobre churrasco, bistec, chuletas o pollo a la parrilla. Se guarda en la nevera hasta 1 semana."
      ],
      en: [
        "Combine the parsley, culantro, garlic, oregano and pepper flakes in a jar.",
        "Dissolve the salt in the vinegar and add it.",
        "Add the oil and stir. Let rest 20 minutes so the flavors blend.",
        "Serve over skirt steak, steak, pork chops or grilled chicken. It keeps in the fridge up to 1 week."
      ]
    }
  },
  {
    id: "salsa-bbq-guayaba",
    category: "salsas",
    name: { es: "Salsa BBQ de Guayaba", en: "Guava BBQ Sauce" },
    time: "25 min",
    servings: 12,
    ingredients: {
      es: [
        "8 onzas de pasta de guayaba, en cubos",
        "½ taza de agua",
        "½ taza de ketchup",
        "¼ taza de vinagre",
        "2 cucharadas de salsa inglesa",
        "2 cucharadas de jugo de limón",
        "3 dientes de ajo, majados",
        "1 cucharadita de comino",
        "1 cucharadita de pimentón",
        "½ cucharadita de sal"
      ],
      en: [
        "8 oz guava paste, cubed",
        "½ cup water",
        "½ cup ketchup",
        "¼ cup vinegar",
        "2 tablespoons Worcestershire sauce",
        "2 tablespoons lime juice",
        "3 garlic cloves, mashed",
        "1 teaspoon cumin",
        "1 teaspoon paprika",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Derrita la pasta de guayaba con el agua a fuego bajo, moviendo, hasta que esté lisa.",
        "Añada el resto de los ingredientes y cocine a fuego bajo 10–15 minutos, moviendo, hasta que espese.",
        "Para pinchos, costillas, alitas o pollo a la parrilla: úntela en los últimos 10 minutos de cocción para que no se queme.",
        "Separe una porción para servir en la mesa y no use la brocha que tocó carne cruda. Se guarda 2 semanas en la nevera."
      ],
      en: [
        "Melt the guava paste with the water over low heat, stirring, until smooth.",
        "Add the rest of the ingredients and simmer 10–15 minutes, stirring, until thick.",
        "For skewers, ribs, wings or grilled chicken: brush it on in the last 10 minutes of cooking so it doesn't burn.",
        "Set aside a portion for the table and don't use the brush that touched raw meat. Keeps 2 weeks in the fridge."
      ]
    }
  },
  {
    id: "salsa-bbq-tamarindo",
    category: "salsas",
    name: { es: "Salsa BBQ de Tamarindo", en: "Tamarind BBQ Sauce" },
    time: "30 min",
    servings: 12,
    ingredients: {
      es: [
        "½ taza de pulpa de tamarindo, sin semillas",
        "1 taza de agua caliente",
        "½ taza de ketchup",
        "½ taza de azúcar morena",
        "2 cucharadas de salsa de soya",
        "1 cucharada de melao",
        "3 dientes de ajo, majados",
        "1 cucharadita de jengibre fresco rallado",
        "½ cucharadita de pimienta"
      ],
      en: [
        "½ cup tamarind pulp, seeded",
        "1 cup hot water",
        "½ cup ketchup",
        "½ cup brown sugar",
        "2 tablespoons soy sauce",
        "1 tablespoon molasses",
        "3 garlic cloves, mashed",
        "1 teaspoon grated fresh ginger",
        "½ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Remoje el tamarindo en el agua caliente 15 minutos, apriételo con los dedos y cuele, apretando para sacar toda la pulpa.",
        "Ponga el líquido en una olla con el resto de los ingredientes.",
        "Cocine a fuego bajo 12–15 minutos, moviendo, hasta que espese y brille.",
        "Ácida y dulce: va muy bien con costillas, pernil y alitas. Úntela al final de la cocción."
      ],
      en: [
        "Soak the tamarind in the hot water 15 minutes, squeeze it with your fingers and strain, pressing out all the pulp.",
        "Put the liquid in a pot with the rest of the ingredients.",
        "Simmer 12–15 minutes, stirring, until thick and glossy.",
        "Tangy and sweet: great with ribs, roast pork and wings. Brush it on at the end of cooking."
      ]
    }
  },
  {
    id: "mojo-naranja-agria",
    category: "salsas",
    name: { es: "Mojo de Naranja Agria para Pernil y Pollo", en: "Sour Orange Mojo for Roast Pork and Chicken" },
    time: "15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de jugo de naranja agria (o ⅔ taza de jugo de china y ⅓ de limón)",
        "10 dientes de ajo, majados",
        "½ cebolla en ruedas finas",
        "1 cucharadita de orégano seco",
        "1 cucharadita de comino",
        "½ taza de aceite de oliva",
        "1½ cucharaditas de sal",
        "½ cucharadita de pimienta"
      ],
      en: [
        "1 cup sour orange juice (or ⅔ cup orange juice and ⅓ cup lime juice)",
        "10 garlic cloves, mashed",
        "½ onion, thinly sliced",
        "1 teaspoon dried oregano",
        "1 teaspoon cumin",
        "½ cup olive oil",
        "1½ teaspoons salt",
        "½ teaspoon pepper"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con la sal, el orégano, el comino y la pimienta hasta hacer una pasta.",
        "Mézclela con el jugo de naranja agria y la cebolla.",
        "Caliente el aceite hasta que esté tibio (no humeante), apague y añada la mezcla con cuidado: chisporrotea.",
        "Use la mitad para marinar pernil o pollo de 4 horas a toda la noche en la nevera, y la otra mitad (sin tocar la carne cruda) para servir."
      ],
      en: [
        "Mash the garlic with the salt, oregano, cumin and pepper into a paste.",
        "Mix it with the sour orange juice and the onion.",
        "Heat the oil until warm (not smoking), turn off the heat and carefully add the mixture: it sputters.",
        "Use half to marinate pork or chicken 4 hours to overnight in the fridge, and the other half (never touching raw meat) for serving."
      ]
    }
  },
  {
    id: "glaseado-parcha",
    category: "salsas",
    name: { es: "Glaseado de Parcha para Pollo y Cerdo", en: "Passion Fruit Glaze for Chicken and Pork" },
    time: "15 min",
    servings: 8,
    ingredients: {
      es: [
        "½ taza de pulpa de parcha, colada",
        "½ taza de azúcar morena",
        "2 cucharadas de salsa de soya",
        "1 cucharada de vinagre",
        "2 dientes de ajo, majados",
        "1 cucharadita de maicena",
        "2 cucharadas de agua"
      ],
      en: [
        "½ cup passion fruit pulp, strained",
        "½ cup brown sugar",
        "2 tablespoons soy sauce",
        "1 tablespoon vinegar",
        "2 garlic cloves, mashed",
        "1 teaspoon cornstarch",
        "2 tablespoons water"
      ]
    },
    steps: {
      es: [
        "En una olla pequeña, hierva la parcha con el azúcar morena, la soya, el vinagre y el ajo 5 minutos.",
        "Disuelva la maicena en el agua, añádala y cocine 1 minuto más, moviendo, hasta que brille y espese.",
        "Barnice pechugas, muslos, alitas o chuletas en los últimos minutos del horno o la parrilla.",
        "Sirva un poco aparte, en un envase que no haya tocado la carne cruda."
      ],
      en: [
        "In a small pot, boil the passion fruit with the brown sugar, soy sauce, vinegar and garlic 5 minutes.",
        "Dissolve the cornstarch in the water, add it and cook 1 more minute, stirring, until glossy and thick.",
        "Brush on chicken breasts, thighs, wings or pork chops in the last minutes in the oven or on the grill.",
        "Serve some on the side, in a container that hasn't touched raw meat."
      ]
    }
  },
  {
    id: "aderezo-mostaza-miel",
    category: "salsas",
    name: { es: "Aderezo de Mostaza y Miel", en: "Honey Mustard Dressing" },
    time: "5 min",
    servings: 8,
    ingredients: {
      es: [
        "½ taza de mayonesa",
        "¼ taza de mostaza amarilla",
        "3 cucharadas de miel",
        "1 cucharada de jugo de limón",
        "1 pizca de pimentón"
      ],
      en: [
        "½ cup mayonnaise",
        "¼ cup yellow mustard",
        "3 tablespoons honey",
        "1 tablespoon lime juice",
        "1 pinch of paprika"
      ]
    },
    steps: {
      es: [
        "Mezcle todos los ingredientes hasta que quede liso.",
        "Pruebe y ajuste: más miel si lo quiere más dulce, más mostaza si lo quiere más fuerte.",
        "Para mojar chicharrones de pollo, alitas, pechugas empanadas o como aderezo de ensalada. Guárdelo en la nevera hasta 1 semana.",
        "No es apto para menores de 1 año por la miel."
      ],
      en: [
        "Mix all the ingredients until smooth.",
        "Taste and adjust: more honey for sweeter, more mustard for sharper.",
        "For dipping chicken bites, wings, breaded chicken or as a salad dressing. Keeps in the fridge up to 1 week.",
        "Not suitable for babies under 1 year because of the honey."
      ]
    }
  },
  {
    id: "salsa-agridulce-pina",
    category: "salsas",
    name: { es: "Salsa Agridulce de Piña", en: "Pineapple Sweet and Sour Sauce" },
    time: "15 min",
    servings: 8,
    ingredients: {
      es: [
        "1 lata de 8 onzas de piña en trocitos, con su jugo",
        "⅓ taza de azúcar morena",
        "¼ taza de vinagre",
        "3 cucharadas de ketchup",
        "1 cucharada de salsa de soya",
        "½ pimiento rojo en cuadritos",
        "1 cucharada de maicena",
        "2 cucharadas de agua"
      ],
      en: [
        "1 can (8 oz) pineapple tidbits, with juice",
        "⅓ cup brown sugar",
        "¼ cup vinegar",
        "3 tablespoons ketchup",
        "1 tablespoon soy sauce",
        "½ red bell pepper, diced",
        "1 tablespoon cornstarch",
        "2 tablespoons water"
      ]
    },
    steps: {
      es: [
        "Hierva la piña con su jugo, el azúcar morena, el vinagre, el ketchup, la soya y el pimiento 5 minutos.",
        "Disuelva la maicena en el agua, añádala y cocine moviendo hasta que espese y brille.",
        "Sirva sobre pollo frito, masitas de cerdo, chuletas o pinchos, o como salsa para mojar."
      ],
      en: [
        "Boil the pineapple with its juice, the brown sugar, vinegar, ketchup, soy sauce and bell pepper 5 minutes.",
        "Dissolve the cornstarch in the water, add it and cook, stirring, until thick and glossy.",
        "Serve over fried chicken, fried pork chunks, pork chops or skewers, or as a dipping sauce."
      ]
    }
  },
  {
    id: "aderezo-cilantro-ajo",
    category: "salsas",
    name: { es: "Aderezo Cremoso de Cilantro y Ajo", en: "Creamy Cilantro Garlic Sauce" },
    time: "10 min",
    servings: 8,
    ingredients: {
      es: [
        "1 taza de cilantro, con tallos tiernos",
        "¼ taza de recao",
        "½ taza de mayonesa",
        "½ taza de crema agria",
        "3 dientes de ajo",
        "2 cucharadas de jugo de limón",
        "½ cucharadita de sal"
      ],
      en: [
        "1 cup cilantro, with tender stems",
        "¼ cup culantro",
        "½ cup mayonnaise",
        "½ cup sour cream",
        "3 garlic cloves",
        "2 tablespoons lime juice",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes hasta que quede verde y liso.",
        "Pruebe y ajuste la sal y el limón.",
        "Refrigere 15 minutos: espesa un poco. Va con pollo a la plancha, churrasco, tostones y pinchos. Dura 4 días en la nevera."
      ],
      en: [
        "Blend all the ingredients until green and smooth.",
        "Taste and adjust the salt and lime.",
        "Refrigerate 15 minutes: it thickens a bit. Great with grilled chicken, skirt steak, tostones and skewers. Keeps 4 days in the fridge."
      ]
    }
  },
  {
    id: "salsa-champinones",
    category: "salsas",
    name: { es: "Salsa de Champiñones para Carnes", en: "Mushroom Sauce for Meats" },
    time: "25 min",
    servings: 6,
    ingredients: {
      es: [
        "8 onzas de champiñones en lascas",
        "2 cucharadas de mantequilla",
        "½ cebolla picada fina",
        "2 dientes de ajo, picados",
        "2 cucharadas de harina de trigo",
        "1 taza de caldo de res",
        "½ taza de crema de leche (heavy cream)",
        "1 cucharada de salsa inglesa",
        "Sal y pimienta al gusto"
      ],
      en: [
        "8 oz mushrooms, sliced",
        "2 tablespoons butter",
        "½ onion, finely chopped",
        "2 garlic cloves, minced",
        "2 tablespoons all-purpose flour",
        "1 cup beef broth",
        "½ cup heavy cream",
        "1 tablespoon Worcestershire sauce",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla y dore los champiñones a fuego alto 5 minutos, sin moverlos mucho para que se doren.",
        "Añada la cebolla y el ajo y cocine 3 minutos.",
        "Espolvoree la harina y mueva 1 minuto. Añada el caldo poco a poco, moviendo, y la salsa inglesa.",
        "Añada la crema y cocine a fuego bajo 5 minutos, hasta que espese. Sazone.",
        "Sirva sobre bistec, churrasco, chuletas, filete de cerdo o pechugas a la plancha."
      ],
      en: [
        "Melt the butter and brown the mushrooms over high heat 5 minutes, without stirring too much so they brown.",
        "Add the onion and garlic and cook 3 minutes.",
        "Sprinkle in the flour and stir 1 minute. Gradually add the broth, stirring, and the Worcestershire sauce.",
        "Add the cream and simmer 5 minutes, until thick. Season.",
        "Serve over steak, skirt steak, pork chops, pork tenderloin or grilled chicken breasts."
      ]
    }
  },
  {
    id: "adobo-mojado",
    category: "salsas",
    name: { es: "Adobo Mojado para Pernil y Pollo", en: "Wet Adobo Marinade for Roast Pork and Chicken" },
    time: "10 min",
    servings: 10,
    ingredients: {
      es: [
        "1 cabeza de ajo, pelada",
        "2 cucharadas de orégano seco",
        "1 cucharada de sal",
        "1 cucharadita de pimienta en grano",
        "2 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 sobre de sazón con achiote"
      ],
      en: [
        "1 head of garlic, peeled",
        "2 tablespoons dried oregano",
        "1 tablespoon salt",
        "1 teaspoon whole peppercorns",
        "2 tablespoons olive oil",
        "2 tablespoons vinegar",
        "1 packet sazón with annatto"
      ]
    },
    steps: {
      es: [
        "En el pilón, maje el ajo con la sal, el orégano y la pimienta hasta hacer una pasta (o use un procesador).",
        "Añada el aceite, el vinagre y el sazón y mezcle.",
        "Alcanza para un pernil de 8–10 libras o dos pollos enteros. Haga cortes en la carne, rellénelos con el adobo y unte el resto por todas partes.",
        "Deje marinar en la nevera toda la noche (el pernil, hasta 2 días). Lávese las manos después de tocar la carne cruda."
      ],
      en: [
        "In the pilón, mash the garlic with the salt, oregano and pepper into a paste (or use a food processor).",
        "Add the oil, vinegar and sazón and mix.",
        "Enough for an 8–10 lb pork shoulder or two whole chickens. Cut slits in the meat, stuff them with the adobo and rub the rest all over.",
        "Marinate in the fridge overnight (the pork shoulder, up to 2 days). Wash your hands after handling raw meat."
      ]
    }
  },
  {
    id: "salsa-pique-mantequilla",
    category: "salsas",
    name: { es: "Salsa de Pique y Mantequilla para Alitas", en: "Pique Butter Wing Sauce" },
    time: "10 min",
    servings: 6,
    ingredients: {
      es: [
        "½ taza de pique de vinagre (colado)",
        "¼ taza de mantequilla",
        "1 cucharada de miel",
        "2 dientes de ajo, majados",
        "1 cucharadita de pimentón",
        "¼ cucharadita de sal"
      ],
      en: [
        "½ cup vinegar pique (strained)",
        "¼ cup butter",
        "1 tablespoon honey",
        "2 garlic cloves, mashed",
        "1 teaspoon paprika",
        "¼ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla a fuego bajo con el ajo 1 minuto, sin que se dore.",
        "Añada el pique, la miel, el pimentón y la sal, y mueva hasta que se integre.",
        "Mezcle con las alitas recién fritas u horneadas en un envase grande y sacuda para cubrirlas.",
        "Ajuste el picante con más o menos pique. No es apta para menores de 1 año por la miel."
      ],
      en: [
        "Melt the butter over low heat with the garlic 1 minute, without browning.",
        "Add the pique, honey, paprika and salt, and stir until combined.",
        "Toss with freshly fried or baked wings in a large container and shake to coat.",
        "Adjust the heat with more or less pique. Not suitable for babies under 1 year because of the honey."
      ]
    }
  },

  // ── Decimoséptima tanda (2026-10): yogures tropicales ──
  {
    id: "yogur-casero",
    category: "cereales",
    name: { es: "Yogur Casero", en: "Homemade Yogurt" },
    time: "20 min + 8 hr de reposo",
    servings: 8,
    ingredients: {
      es: [
        "8 tazas (½ galón) de leche entera",
        "¼ taza de yogur natural con cultivos vivos (de iniciador)"
      ],
      en: [
        "8 cups (½ gallon) whole milk",
        "¼ cup plain yogurt with live cultures (as a starter)"
      ]
    },
    steps: {
      es: [
        "Caliente la leche a fuego medio, moviendo, hasta 180°F (casi hierve). Esto cambia las proteínas y el yogur sale más espeso.",
        "Deje refrescar hasta 110°F: debe sentirse tibia, no caliente (si está muy caliente, mata los cultivos).",
        "Mezcle el yogur iniciador con una taza de la leche tibia y añádalo al resto.",
        "Tape y mantenga tibio de 8 a 10 horas sin mover: dentro del horno apagado con la luz encendida, o envuelto en toallas.",
        "Refrigere 4 horas. Para yogur griego, cuélelo en un paño 2 horas en la nevera. Guarde ¼ taza para la próxima tanda; dura 2 semanas."
      ],
      en: [
        "Heat the milk over medium heat, stirring, to 180°F (almost boiling). This changes the proteins and makes thicker yogurt.",
        "Cool to 110°F: it should feel warm, not hot (too hot kills the cultures).",
        "Whisk the starter yogurt with a cup of the warm milk and add it to the rest.",
        "Cover and keep warm 8 to 10 hours without moving: inside the turned-off oven with the light on, or wrapped in towels.",
        "Refrigerate 4 hours. For Greek yogurt, strain it in a cloth 2 hours in the fridge. Save ¼ cup for the next batch; it keeps 2 weeks."
      ]
    }
  },
  {
    id: "parfait-yogur-mango",
    category: "frutas",
    name: { es: "Parfait de Yogur con Mangó y Granola", en: "Mango Yogurt Parfait with Granola" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1½ tazas de yogur griego natural",
        "1 mangó maduro en cubitos",
        "½ taza de granola",
        "2 cucharaditas de miel",
        "2 cucharadas de coco rallado, tostado"
      ],
      en: [
        "1½ cups plain Greek yogurt",
        "1 ripe mango, diced",
        "½ cup granola",
        "2 teaspoons honey",
        "2 tablespoons shredded coconut, toasted"
      ]
    },
    steps: {
      es: [
        "En dos vasos, ponga una capa de yogur, una de mangó y una de granola.",
        "Repita las capas y termine con mangó.",
        "Rocíe la miel y espolvoree el coco tostado.",
        "Sirva enseguida para que la granola esté crujiente. No apto para menores de 1 año por la miel."
      ],
      en: [
        "In two glasses, layer yogurt, mango and granola.",
        "Repeat the layers and finish with mango.",
        "Drizzle the honey and sprinkle with the toasted coconut.",
        "Serve right away so the granola stays crunchy. Not for babies under 1 year because of the honey."
      ]
    }
  },
  {
    id: "yogur-pina-coco",
    category: "frutas",
    name: { es: "Yogur con Piña y Coco Tostado", en: "Yogurt with Pineapple and Toasted Coconut" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1½ tazas de yogur natural",
        "1 taza de piña fresca en cubitos",
        "¼ taza de coco rallado",
        "2 cucharadas de nueces o almendras picadas",
        "½ cucharadita de vainilla",
        "1 pizca de canela en polvo"
      ],
      en: [
        "1½ cups plain yogurt",
        "1 cup fresh pineapple, diced",
        "¼ cup shredded coconut",
        "2 tablespoons chopped walnuts or almonds",
        "½ teaspoon vanilla",
        "1 pinch of ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Tueste el coco y las nueces en un sartén seco 3 minutos, moviendo, hasta que doren.",
        "Mezcle el yogur con la vainilla.",
        "Sirva el yogur en tazones, ponga la piña encima y luego el coco y las nueces tostadas. Espolvoree canela.",
        "La piña madura endulza sola: no hace falta azúcar."
      ],
      en: [
        "Toast the coconut and nuts in a dry skillet 3 minutes, stirring, until golden.",
        "Mix the yogurt with the vanilla.",
        "Spoon the yogurt into bowls, top with the pineapple, then the toasted coconut and nuts. Dust with cinnamon.",
        "Ripe pineapple sweetens it on its own: no sugar needed."
      ]
    }
  },
  {
    id: "bowl-yogur-parcha",
    category: "frutas",
    name: { es: "Bowl de Yogur con Parcha, Guineo y Miel", en: "Passion Fruit, Banana and Honey Yogurt Bowl" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1½ tazas de yogur griego natural",
        "2 parchas (la pulpa con semillas)",
        "1 guineo maduro en ruedas",
        "½ taza de fresas en lascas",
        "¼ taza de granola",
        "1 cucharada de miel"
      ],
      en: [
        "1½ cups plain Greek yogurt",
        "2 passion fruits (pulp with seeds)",
        "1 ripe banana, sliced",
        "½ cup sliced strawberries",
        "¼ cup granola",
        "1 tablespoon honey"
      ]
    },
    steps: {
      es: [
        "Reparta el yogur en dos tazones y alíselo con una cuchara.",
        "Acomode el guineo y las fresas en filas, y la granola a un lado.",
        "Ponga la pulpa de parcha en el centro y rocíe la miel.",
        "La acidez de la parcha y lo dulce del guineo se balancean. No apto para menores de 1 año por la miel."
      ],
      en: [
        "Divide the yogurt between two bowls and smooth it with a spoon.",
        "Arrange the banana and strawberries in rows, and the granola to one side.",
        "Spoon the passion fruit pulp in the center and drizzle with honey.",
        "The tang of the passion fruit balances the sweet banana. Not for babies under 1 year because of the honey."
      ]
    }
  },
  {
    id: "yogur-griego-guayaba",
    category: "frutas",
    name: { es: "Yogur Griego con Salsita de Guayaba", en: "Greek Yogurt with Guava Sauce" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "3 tazas de yogur griego natural",
        "4 onzas de pasta de guayaba",
        "¼ taza de agua",
        "1 cucharada de jugo de limón",
        "2 onzas de queso blanco del país, en cubitos",
        "¼ taza de galletas María trituradas"
      ],
      en: [
        "3 cups plain Greek yogurt",
        "4 oz guava paste",
        "¼ cup water",
        "1 tablespoon lime juice",
        "2 oz local white cheese (queso blanco), cubed",
        "¼ cup crushed Maria cookies"
      ]
    },
    steps: {
      es: [
        "Derrita la pasta de guayaba con el agua y el limón a fuego bajo, moviendo, hasta tener una salsita. Deje enfriar.",
        "Sirva el yogur en vasitos o tazones.",
        "Ponga encima la salsita de guayaba, los cubitos de queso y la galleta triturada.",
        "Sabe a pastelillo de guayaba y queso, pero más liviano."
      ],
      en: [
        "Melt the guava paste with the water and lime juice over low heat, stirring, into a sauce. Let cool.",
        "Spoon the yogurt into small glasses or bowls.",
        "Top with the guava sauce, the cheese cubes and the crushed cookies.",
        "It tastes like a guava and cheese pastry, but lighter."
      ]
    }
  },
  {
    id: "batida-yogur-mango-parcha",
    category: "bebidas",
    name: { es: "Batida de Yogur con Mangó y Parcha", en: "Mango Passion Fruit Yogurt Smoothie" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "1 taza de yogur natural",
        "1½ tazas de mangó congelado en cubos",
        "¼ taza de pulpa de parcha",
        "½ taza de jugo de china",
        "1 cucharada de miel"
      ],
      en: [
        "1 cup plain yogurt",
        "1½ cups frozen mango chunks",
        "¼ cup passion fruit pulp",
        "½ cup orange juice",
        "1 tablespoon honey"
      ]
    },
    steps: {
      es: [
        "Ponga todo en la licuadora: primero los líquidos y el yogur, luego el mangó congelado.",
        "Licúe 1 minuto, hasta que esté espesa y lisa. Si está muy espesa, añada un chorrito de jugo.",
        "Sirva enseguida. Con el mangó congelado no hace falta hielo y no se agua."
      ],
      en: [
        "Put everything in the blender: liquids and yogurt first, then the frozen mango.",
        "Blend 1 minute, until thick and smooth. If too thick, add a splash of juice.",
        "Serve right away. With frozen mango you don't need ice and it doesn't get watery."
      ]
    }
  },
  {
    id: "batida-yogur-pina-colada",
    category: "bebidas",
    name: { es: "Batida de Yogur Piña Colada (Sin Alcohol)", en: "Piña Colada Yogurt Smoothie (Alcohol-Free)" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "1 taza de yogur natural",
        "1½ tazas de piña congelada en cubos",
        "½ taza de leche de coco",
        "1 guineo maduro",
        "1 cucharada de crema de coco"
      ],
      en: [
        "1 cup plain yogurt",
        "1½ cups frozen pineapple chunks",
        "½ cup coconut milk",
        "1 ripe banana",
        "1 tablespoon cream of coconut"
      ]
    },
    steps: {
      es: [
        "Licúe el yogur con la leche de coco, el guineo y la crema de coco.",
        "Añada la piña congelada y licúe hasta que quede espesa.",
        "Sirva en vasos con un pedacito de piña en el borde. El sabor del trago, para el desayuno."
      ],
      en: [
        "Blend the yogurt with the coconut milk, banana and cream of coconut.",
        "Add the frozen pineapple and blend until thick.",
        "Serve in glasses with a pineapple wedge on the rim. The flavor of the drink, for breakfast."
      ]
    }
  },
  {
    id: "yogur-helado-mango",
    category: "postres",
    name: { es: "Yogur Helado de Mangó", en: "Mango Frozen Yogurt" },
    time: "10 min + 4 hr de congelador",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de mangó congelado en cubos",
        "1 taza de yogur griego natural",
        "3 cucharadas de miel",
        "1 cucharada de jugo de limón"
      ],
      en: [
        "3 cups frozen mango chunks",
        "1 cup plain Greek yogurt",
        "3 tablespoons honey",
        "1 tablespoon lime juice"
      ]
    },
    steps: {
      es: [
        "Ponga todo en el procesador de alimentos y procese 2–3 minutos, raspando los lados, hasta que esté cremoso.",
        "Sírvalo enseguida, suave como helado de máquina.",
        "Para que quede firme, páselo a un envase y congele 4 horas; sáquelo 10 minutos antes de servir.",
        "No apto para menores de 1 año por la miel."
      ],
      en: [
        "Put everything in a food processor and process 2–3 minutes, scraping the sides, until creamy.",
        "Serve right away, soft like soft-serve.",
        "For a firmer texture, transfer to a container and freeze 4 hours; take it out 10 minutes before serving.",
        "Not for babies under 1 year because of the honey."
      ]
    }
  },
  {
    id: "paletas-yogur-tropicales",
    category: "postres",
    name: { es: "Paletas de Yogur y Frutas Tropicales", en: "Tropical Fruit Yogurt Pops" },
    time: "15 min + 6 hr de congelador",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de yogur natural",
        "¼ taza de miel",
        "1 cucharadita de vainilla",
        "½ taza de mangó en cubitos",
        "½ taza de piña en cubitos",
        "½ taza de fresas picadas",
        "2 cucharadas de pulpa de parcha"
      ],
      en: [
        "2 cups plain yogurt",
        "¼ cup honey",
        "1 teaspoon vanilla",
        "½ cup diced mango",
        "½ cup diced pineapple",
        "½ cup chopped strawberries",
        "2 tablespoons passion fruit pulp"
      ]
    },
    steps: {
      es: [
        "Mezcle el yogur con la miel y la vainilla.",
        "Reparta las frutas en 8 moldes de paleta (o vasitos de papel).",
        "Llene con el yogur, moviendo con un palito para que baje entre las frutas, y ponga encima unas gotas de parcha.",
        "Ponga los palitos y congele 6 horas. Para desmoldar, pase el molde por agua tibia unos segundos.",
        "No apto para menores de 1 año por la miel; para los bebés, endulce con guineo majado."
      ],
      en: [
        "Mix the yogurt with the honey and vanilla.",
        "Divide the fruit among 8 popsicle molds (or paper cups).",
        "Fill with the yogurt, stirring with a stick so it settles between the fruit, and top with a few drops of passion fruit.",
        "Insert the sticks and freeze 6 hours. To unmold, run the mold under warm water a few seconds.",
        "Not for babies under 1 year because of the honey; for babies, sweeten with mashed banana."
      ]
    }
  },
  {
    id: "avena-fria-yogur-guineo",
    category: "cereales",
    name: { es: "Avena Fría con Yogur, Guineo y Coco", en: "Overnight Oats with Yogurt, Banana and Coconut" },
    time: "10 min + toda la noche",
    servings: 2,
    ingredients: {
      es: [
        "1 taza de avena",
        "¾ taza de yogur natural",
        "¾ taza de leche de coco (o leche)",
        "1 guineo maduro, majado",
        "1 cucharada de miel",
        "½ cucharadita de canela en polvo",
        "2 cucharadas de coco rallado",
        "½ taza de mangó o piña en cubitos para servir"
      ],
      en: [
        "1 cup rolled oats",
        "¾ cup plain yogurt",
        "¾ cup coconut milk (or milk)",
        "1 ripe banana, mashed",
        "1 tablespoon honey",
        "½ teaspoon ground cinnamon",
        "2 tablespoons shredded coconut",
        "½ cup diced mango or pineapple for serving"
      ]
    },
    steps: {
      es: [
        "Mezcle la avena, el yogur, la leche de coco, el guineo, la miel y la canela.",
        "Reparta en dos frascos, tape y refrigere toda la noche: la avena se ablanda sin cocinar.",
        "Por la mañana, mueva y ponga encima la fruta y el coco rallado.",
        "Se come fría; dura 2 días en la nevera. No apto para menores de 1 año por la miel."
      ],
      en: [
        "Mix the oats, yogurt, coconut milk, banana, honey and cinnamon.",
        "Divide between two jars, cover and refrigerate overnight: the oats soften without cooking.",
        "In the morning, stir and top with the fruit and shredded coconut.",
        "Eat it cold; it keeps 2 days in the fridge. Not for babies under 1 year because of the honey."
      ]
    }
  },
  {
    id: "salsa-yogur-pepino-recao",
    category: "salsas",
    name: { es: "Salsa de Yogur con Pepino y Recao", en: "Yogurt Sauce with Cucumber and Culantro" },
    time: "15 min",
    servings: 8,
    ingredients: {
      es: [
        "1½ tazas de yogur griego natural",
        "1 pepino, sin semillas y rallado",
        "2 cucharadas de recao picado fino",
        "1 cucharada de menta o yerbabuena picada",
        "1 diente de ajo, majado",
        "1 cucharada de jugo de limón",
        "1 cucharada de aceite de oliva",
        "½ cucharadita de sal"
      ],
      en: [
        "1½ cups plain Greek yogurt",
        "1 cucumber, seeded and grated",
        "2 tablespoons finely chopped culantro",
        "1 tablespoon chopped mint",
        "1 garlic clove, mashed",
        "1 tablespoon lime juice",
        "1 tablespoon olive oil",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Ponga el pepino rallado con una pizca de sal en un colador 10 minutos y exprímalo bien con las manos (si no, la salsa queda aguada).",
        "Mezcle el yogur con el pepino, el recao, la menta, el ajo, el limón y la sal.",
        "Rocíe el aceite por encima.",
        "Fresca y liviana para pinchos, pollo a la plancha, chuletas, alcapurrias o con pan de agua."
      ],
      en: [
        "Put the grated cucumber with a pinch of salt in a colander 10 minutes and squeeze it well with your hands (otherwise the sauce gets watery).",
        "Mix the yogurt with the cucumber, culantro, mint, garlic, lime juice and salt.",
        "Drizzle the oil on top.",
        "Fresh and light for skewers, grilled chicken, pork chops, alcapurrias or with Puerto Rican water bread."
      ]
    }
  },

  // ── Decimoctava tanda (2026-10): paellas de mariscos y de carne ──
  {
    id: "paella-mariscos-clasica",
    category: "arroces",
    name: { es: "Paella de Mariscos Clásica", en: "Classic Seafood Paella" },
    time: "1 hr 10 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto (tipo Valencia o bomba)",
        "1 libra de camarones con cáscara",
        "1 libra de mejillones, limpios",
        "½ libra de almejas, remojadas en agua con sal 30 minutos",
        "½ libra de calamares en anillos",
        "¼ taza de aceite de oliva",
        "1 cebolla picada fina",
        "1 pimiento rojo picado",
        "4 dientes de ajo, picados",
        "1 tomate maduro rallado",
        "½ cucharadita de hebras de azafrán",
        "1 cucharadita de pimentón dulce",
        "5 tazas de caldo de pescado o de mariscos, caliente",
        "½ taza de guisantes (petit pois)",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "1 limón en gajos para servir"
      ],
      en: [
        "2 cups short-grain rice (Valencia or bomba type)",
        "1 lb shrimp, shell on",
        "1 lb mussels, cleaned",
        "½ lb clams, soaked in salted water 30 minutes",
        "½ lb squid rings",
        "¼ cup olive oil",
        "1 onion, finely chopped",
        "1 red bell pepper, chopped",
        "4 garlic cloves, minced",
        "1 ripe tomato, grated",
        "½ teaspoon saffron threads",
        "1 teaspoon sweet paprika",
        "5 cups hot fish or seafood broth",
        "½ cup peas",
        "½ teaspoon salt (taste the broth first)",
        "1 lemon in wedges for serving"
      ]
    },
    steps: {
      es: [
        "Tueste el azafrán 30 segundos en un sartén seco y desmorónelo en el caldo caliente.",
        "En la paellera, caliente el aceite y dore los camarones 1 minuto por lado; sáquelos y resérvelos.",
        "En el mismo aceite, sofría los calamares 2 minutos, luego la cebolla, el pimiento y el ajo 5 minutos. Añada el tomate y el pimentón y cocine 3 minutos más.",
        "Añada el arroz y muévalo 1 minuto para que se impregne. Vierta el caldo con la sal, reparta el arroz parejo y desde aquí no lo mueva más.",
        "Cocine a fuego medio-alto 10 minutos. Acomode los mejillones y las almejas hundiéndolos un poco, y siga a fuego medio-bajo 8–10 minutos, hasta que el arroz absorba el caldo.",
        "Añada los camarones y los guisantes por encima. Suba el fuego 1–2 minutos para que se forme el socarrat (la costrita del fondo): suena como un crujido.",
        "Tape con un paño 5 minutos. Descarte los mejillones y almejas que no abrieron y sirva con limón."
      ],
      en: [
        "Toast the saffron 30 seconds in a dry skillet and crumble it into the hot broth.",
        "In the paella pan, heat the oil and sear the shrimp 1 minute per side; remove and set aside.",
        "In the same oil, sauté the squid 2 minutes, then the onion, pepper and garlic 5 minutes. Add the tomato and paprika and cook 3 more minutes.",
        "Add the rice and stir 1 minute to coat it. Pour in the broth with the salt, spread the rice evenly and from here on don't stir it again.",
        "Cook over medium-high heat 10 minutes. Arrange the mussels and clams, pressing them in a little, and continue over medium-low 8–10 minutes, until the rice absorbs the broth.",
        "Add the shrimp and peas on top. Raise the heat 1–2 minutes to form the socarrat (the crust on the bottom): it sounds like a crackle.",
        "Cover with a towel 5 minutes. Discard any mussels and clams that didn't open and serve with lemon."
      ]
    }
  },
  {
    id: "paella-negra",
    category: "arroces",
    name: { es: "Paella Negra (Arroz Negro con Calamares)", en: "Black Paella (Squid Ink Rice)" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "1½ libras de calamares en anillos (con sus tentáculos)",
        "½ libra de camarones pelados",
        "¼ taza de aceite de oliva",
        "1 cebolla picada fina",
        "1 pimiento verde picado",
        "4 dientes de ajo, picados",
        "1 tomate maduro rallado",
        "2 sobres de tinta de calamar",
        "5 tazas de caldo de pescado, caliente",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "Alioli: ½ taza de mayonesa",
        "2 dientes de ajo, majados"
      ],
      en: [
        "2 cups short-grain rice",
        "1½ lb squid rings (with tentacles)",
        "½ lb peeled shrimp",
        "¼ cup olive oil",
        "1 onion, finely chopped",
        "1 green bell pepper, chopped",
        "4 garlic cloves, minced",
        "1 ripe tomato, grated",
        "2 packets squid ink",
        "5 cups hot fish broth",
        "½ teaspoon salt (taste the broth first)",
        "Aioli: ½ cup mayonnaise",
        "2 garlic cloves, mashed"
      ]
    },
    steps: {
      es: [
        "Disuelva la tinta de calamar en el caldo caliente.",
        "En la paellera, dore los camarones en el aceite 1 minuto por lado y resérvelos.",
        "Sofría los calamares 3 minutos, añada la cebolla, el pimiento y el ajo y cocine 5 minutos. Añada el tomate y cocine 3 minutos.",
        "Añada el arroz, muévalo 1 minuto y vierta el caldo negro con la sal. Reparta parejo y no lo mueva más.",
        "Cocine 10 minutos a fuego medio-alto y 8–10 a fuego medio-bajo. Ponga los camarones encima los últimos 3 minutos.",
        "Para el alioli, mezcle la mayonesa con el ajo majado. Deje reposar la paella 5 minutos tapada y sírvala con el alioli."
      ],
      en: [
        "Dissolve the squid ink in the hot broth.",
        "In the paella pan, sear the shrimp in the oil 1 minute per side and set aside.",
        "Sauté the squid 3 minutes, add the onion, pepper and garlic and cook 5 minutes. Add the tomato and cook 3 minutes.",
        "Add the rice, stir 1 minute and pour in the black broth with the salt. Spread evenly and don't stir again.",
        "Cook 10 minutes over medium-high and 8–10 over medium-low. Put the shrimp on top for the last 3 minutes.",
        "For the aioli, mix the mayonnaise with the mashed garlic. Let the paella rest covered 5 minutes and serve with the aioli."
      ]
    }
  },
  {
    id: "paella-langosta-camarones",
    category: "arroces",
    name: { es: "Paella de Langosta y Camarones", en: "Lobster and Shrimp Paella" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "2 colas de langosta, partidas a lo largo",
        "1 libra de camarones con cáscara",
        "¼ taza de aceite de oliva",
        "½ taza de sofrito",
        "3 dientes de ajo, picados",
        "1 pimiento rojo en tiritas",
        "½ cucharadita de hebras de azafrán",
        "1 cucharadita de pimentón",
        "5 tazas de caldo de mariscos, caliente",
        "½ taza de vino blanco",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "1 limón en gajos"
      ],
      en: [
        "2 cups short-grain rice",
        "2 lobster tails, split lengthwise",
        "1 lb shrimp, shell on",
        "¼ cup olive oil",
        "½ cup sofrito",
        "3 garlic cloves, minced",
        "1 red bell pepper, in strips",
        "½ teaspoon saffron threads",
        "1 teaspoon paprika",
        "5 cups hot seafood broth",
        "½ cup white wine",
        "½ teaspoon salt (taste the broth first)",
        "1 lemon in wedges"
      ]
    },
    steps: {
      es: [
        "Tueste el azafrán y desmorónelo en el caldo caliente.",
        "En la paellera, dore la langosta por el lado de la carne 2 minutos y los camarones 1 minuto por lado. Saque y reserve.",
        "Sofría el sofrito, el ajo y el pimiento 4 minutos. Añada el pimentón y el vino y deje que se evapore la mitad.",
        "Añada el arroz, muévalo 1 minuto y vierta el caldo con la sal. Reparta parejo y no lo mueva más.",
        "Cocine 10 minutos a fuego medio-alto. Acomode la langosta y los camarones encima y siga 8–10 minutos a fuego medio-bajo.",
        "Deje que se forme el socarrat 1–2 minutos a fuego alto, tape con un paño 5 minutos y sirva con limón. La langosta debe quedar blanca y opaca por dentro."
      ],
      en: [
        "Toast the saffron and crumble it into the hot broth.",
        "In the paella pan, sear the lobster flesh side down 2 minutes and the shrimp 1 minute per side. Remove and set aside.",
        "Sauté the sofrito, garlic and pepper 4 minutes. Add the paprika and wine and let it reduce by half.",
        "Add the rice, stir 1 minute and pour in the broth with the salt. Spread evenly and don't stir again.",
        "Cook 10 minutes over medium-high. Arrange the lobster and shrimp on top and continue 8–10 minutes over medium-low.",
        "Let the socarrat form 1–2 minutes over high heat, cover with a towel 5 minutes and serve with lemon. The lobster should be white and opaque inside."
      ]
    }
  },
  {
    id: "paella-pulpo-camarones",
    category: "arroces",
    name: { es: "Paella de Pulpo y Camarones", en: "Octopus and Shrimp Paella" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "1½ libras de pulpo, hervido y en trozos",
        "1 libra de camarones pelados",
        "¼ taza de aceite de oliva",
        "1 cebolla picada fina",
        "1 pimiento rojo picado",
        "4 dientes de ajo, picados",
        "1 tomate maduro rallado",
        "½ cucharadita de hebras de azafrán",
        "1 cucharadita de pimentón dulce",
        "5 tazas de caldo de pescado, caliente",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "2 cups short-grain rice",
        "1½ lb octopus, boiled and cut in pieces",
        "1 lb peeled shrimp",
        "¼ cup olive oil",
        "1 onion, finely chopped",
        "1 red bell pepper, chopped",
        "4 garlic cloves, minced",
        "1 ripe tomato, grated",
        "½ teaspoon saffron threads",
        "1 teaspoon sweet paprika",
        "5 cups hot fish broth",
        "½ teaspoon salt (taste the broth first)",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Si el pulpo está crudo, hiérvalo 45 minutos a 1 hora, hasta que un tenedor entre fácil; use 2 tazas de esa agua como parte del caldo.",
        "Tueste el azafrán y desmorónelo en el caldo caliente.",
        "En la paellera, dore el pulpo en el aceite 3 minutos y resérvelo. Sofría la cebolla, el pimiento y el ajo 5 minutos, y añada el tomate y el pimentón.",
        "Añada el arroz, muévalo 1 minuto y vierta el caldo con la sal. Reparta parejo y no lo mueva más.",
        "Cocine 10 minutos a fuego medio-alto. Acomode el pulpo y los camarones encima y siga 8–10 minutos a fuego medio-bajo.",
        "Forme el socarrat 1–2 minutos, deje reposar tapado 5 minutos y espolvoree el perejil."
      ],
      en: [
        "If the octopus is raw, boil it 45 minutes to 1 hour, until a fork goes in easily; use 2 cups of that water as part of the broth.",
        "Toast the saffron and crumble it into the hot broth.",
        "In the paella pan, brown the octopus in the oil 3 minutes and set aside. Sauté the onion, pepper and garlic 5 minutes, and add the tomato and paprika.",
        "Add the rice, stir 1 minute and pour in the broth with the salt. Spread evenly and don't stir again.",
        "Cook 10 minutes over medium-high. Arrange the octopus and shrimp on top and continue 8–10 minutes over medium-low.",
        "Form the socarrat 1–2 minutes, rest covered 5 minutes and sprinkle with the parsley."
      ]
    }
  },
  {
    id: "paella-valenciana",
    category: "arroces",
    name: { es: "Paella Valenciana (de Pollo y Conejo)", en: "Valencian Paella (Chicken and Rabbit)" },
    time: "1 hr 20 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "1½ libras de muslos de pollo, en trozos",
        "1 libra de conejo en trozos (o más pollo)",
        "¼ taza de aceite de oliva",
        "½ libra de habichuelas tiernas, en trozos",
        "1 taza de habas o judías blancas cocidas",
        "1 tomate maduro rallado",
        "1 cucharadita de pimentón dulce",
        "½ cucharadita de hebras de azafrán",
        "6 tazas de agua o caldo de pollo, caliente",
        "1½ cucharaditas de sal",
        "1 ramita de romero fresco"
      ],
      en: [
        "2 cups short-grain rice",
        "1½ lb chicken thighs, in pieces",
        "1 lb rabbit in pieces (or more chicken)",
        "¼ cup olive oil",
        "½ lb green beans, cut",
        "1 cup cooked lima or white beans",
        "1 ripe tomato, grated",
        "1 teaspoon sweet paprika",
        "½ teaspoon saffron threads",
        "6 cups hot water or chicken broth",
        "1½ teaspoons salt",
        "1 sprig fresh rosemary"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo y el conejo con sal. En la paellera, dórelos en el aceite a fuego medio 15 minutos, volteando, hasta que estén bien dorados (de ahí sale el sabor).",
        "Añada las habichuelas tiernas y sofría 3 minutos. Haga un hueco en el centro y sofría el tomate y el pimentón 2 minutos.",
        "Vierta el agua caliente con el azafrán y la sal y hierva 15 minutos a fuego medio para hacer el caldo en la misma paellera.",
        "Añada el arroz repartido parejo y las habas. Cocine 10 minutos a fuego medio-alto y 8–10 a fuego bajo, sin mover.",
        "Ponga la ramita de romero encima los últimos 5 minutos. Forme el socarrat 1–2 minutos, retire el romero y deje reposar tapado 5 minutos.",
        "El pollo debe llegar a 165°F por dentro. Es la paella original de Valencia: sin mariscos."
      ],
      en: [
        "Season the chicken and rabbit with salt. In the paella pan, brown them in the oil over medium heat 15 minutes, turning, until well browned (that's where the flavor comes from).",
        "Add the green beans and sauté 3 minutes. Make a well in the center and sauté the tomato and paprika 2 minutes.",
        "Pour in the hot water with the saffron and salt and simmer 15 minutes over medium heat to make the broth right in the pan.",
        "Add the rice spread evenly and the beans. Cook 10 minutes over medium-high and 8–10 over low, without stirring.",
        "Put the rosemary sprig on top for the last 5 minutes. Form the socarrat 1–2 minutes, remove the rosemary and rest covered 5 minutes.",
        "The chicken should reach 165°F inside. This is the original paella from Valencia: no seafood."
      ]
    }
  },
  {
    id: "paella-mixta",
    category: "arroces",
    name: { es: "Paella Mixta (Pollo, Chorizo y Mariscos)", en: "Mixed Paella (Chicken, Chorizo and Seafood)" },
    time: "1 hr 20 min",
    servings: 8,
    ingredients: {
      es: [
        "2½ tazas de arroz de grano corto",
        "1½ libras de muslos de pollo deshuesados, en trozos",
        "4 onzas de chorizo español en ruedas",
        "1 libra de camarones con cáscara",
        "1 libra de mejillones, limpios",
        "½ libra de calamares en anillos",
        "¼ taza de aceite de oliva",
        "1 cebolla picada fina",
        "1 pimiento rojo en tiritas",
        "4 dientes de ajo, picados",
        "1 tomate maduro rallado",
        "½ cucharadita de hebras de azafrán",
        "1 cucharadita de pimentón",
        "6 tazas de caldo de pollo, caliente",
        "½ taza de guisantes (petit pois)",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "1 limón en gajos"
      ],
      en: [
        "2½ cups short-grain rice",
        "1½ lb boneless chicken thighs, in pieces",
        "4 oz Spanish chorizo, sliced",
        "1 lb shrimp, shell on",
        "1 lb mussels, cleaned",
        "½ lb squid rings",
        "¼ cup olive oil",
        "1 onion, finely chopped",
        "1 red bell pepper, in strips",
        "4 garlic cloves, minced",
        "1 ripe tomato, grated",
        "½ teaspoon saffron threads",
        "1 teaspoon paprika",
        "6 cups hot chicken broth",
        "½ cup peas",
        "½ teaspoon salt (taste the broth first)",
        "1 lemon in wedges"
      ]
    },
    steps: {
      es: [
        "Tueste el azafrán y desmorónelo en el caldo caliente.",
        "En la paellera, dore el chorizo 2 minutos y sáquelo. En esa grasa, dore el pollo sazonado con sal 8 minutos y sáquelo. Dore los camarones 1 minuto por lado y resérvelos aparte.",
        "Sofría los calamares 2 minutos, luego la cebolla, el pimiento y el ajo 5 minutos. Añada el tomate y el pimentón.",
        "Devuelva el pollo y el chorizo, añada el arroz y muévalo 1 minuto. Vierta el caldo con la sal, reparta parejo y no lo mueva más.",
        "Cocine 10 minutos a fuego medio-alto. Acomode los mejillones y siga 8–10 minutos a fuego medio-bajo. Añada los camarones y los guisantes los últimos 3 minutos.",
        "Forme el socarrat, deje reposar tapado 5 minutos, descarte los mejillones cerrados y sirva con limón. Es la de las fiestas: un poco de todo."
      ],
      en: [
        "Toast the saffron and crumble it into the hot broth.",
        "In the paella pan, brown the chorizo 2 minutes and remove. In that fat, brown the salted chicken 8 minutes and remove. Sear the shrimp 1 minute per side and set aside separately.",
        "Sauté the squid 2 minutes, then the onion, pepper and garlic 5 minutes. Add the tomato and paprika.",
        "Return the chicken and chorizo, add the rice and stir 1 minute. Pour in the broth with the salt, spread evenly and don't stir again.",
        "Cook 10 minutes over medium-high. Arrange the mussels and continue 8–10 minutes over medium-low. Add the shrimp and peas for the last 3 minutes.",
        "Form the socarrat, rest covered 5 minutes, discard any closed mussels and serve with lemon. It's the party one: a little of everything."
      ]
    }
  },
  {
    id: "paella-pollo-chorizo-boricua",
    category: "arroces",
    name: { es: "Paella de Pollo y Chorizo a la Boricua", en: "Puerto Rican-Style Chicken and Chorizo Paella" },
    time: "1 hr 15 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "2 libras de presas de pollo (muslos y encuentros)",
        "4 onzas de chorizo en ruedas",
        "3 cucharadas de aceite de achiote",
        "½ taza de sofrito",
        "¼ taza de salsa de tomate",
        "10 aceitunas rellenas",
        "1 sobre de sazón con azafrán",
        "1 cucharadita de orégano",
        "5 tazas de caldo de pollo, caliente",
        "1 taza de gandules verdes",
        "1 pimiento morrón asado en tiritas",
        "½ cucharadita de sal (pruebe el caldo antes)"
      ],
      en: [
        "2 cups short-grain rice",
        "2 lb chicken pieces (thighs and drumsticks)",
        "4 oz chorizo, sliced",
        "3 tablespoons annatto oil",
        "½ cup sofrito",
        "¼ cup tomato sauce",
        "10 stuffed olives",
        "1 packet sazón with saffron",
        "1 teaspoon oregano",
        "5 cups hot chicken broth",
        "1 cup green pigeon peas",
        "1 roasted red pepper, in strips",
        "½ teaspoon salt (taste the broth first)"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo con la sal y el orégano. En la paellera o un caldero ancho, dore el chorizo en el aceite de achiote y sáquelo; dore el pollo 10 minutos, volteando.",
        "Añada el sofrito, la salsa de tomate, las aceitunas y el sazón, y cocine 4 minutos.",
        "Añada el arroz y los gandules, muévalo 1 minuto y vierta el caldo. Devuelva el chorizo y reparta parejo.",
        "Cocine 10 minutos a fuego medio-alto y 10 a fuego medio-bajo, sin mover, hasta que el pollo llegue a 165°F y el arroz esté suelto.",
        "Decore con el pimiento morrón y deje reposar tapado 5 minutos. Con el sofrito y los gandules, queda entre paella y arroz con gandules."
      ],
      en: [
        "Season the chicken with the salt and oregano. In the paella pan or a wide caldero, brown the chorizo in the annatto oil and remove; brown the chicken 10 minutes, turning.",
        "Add the sofrito, tomato sauce, olives and sazón, and cook 4 minutes.",
        "Add the rice and pigeon peas, stir 1 minute and pour in the broth. Return the chorizo and spread evenly.",
        "Cook 10 minutes over medium-high and 10 over medium-low, without stirring, until the chicken reaches 165°F and the rice is fluffy.",
        "Garnish with the roasted pepper and rest covered 5 minutes. With sofrito and pigeon peas, it lands between paella and arroz con gandules."
      ]
    }
  },
  {
    id: "paella-vegetales",
    category: "arroces",
    name: { es: "Paella de Vegetales", en: "Vegetable Paella" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de arroz de grano corto",
        "¼ taza de aceite de oliva",
        "1 cebolla picada fina",
        "1 pimiento rojo en tiritas",
        "1 pimiento verde en tiritas",
        "4 dientes de ajo, picados",
        "1 berenjena pequeña en cubos",
        "1 calabacín en medias lunas",
        "½ libra de habichuelas tiernas, en trozos",
        "1 lata de 14 onzas de corazones de alcachofa, en cuartos",
        "1 tomate maduro rallado",
        "½ cucharadita de hebras de azafrán",
        "1 cucharadita de pimentón",
        "5 tazas de caldo de vegetales, caliente",
        "½ taza de guisantes (petit pois)",
        "½ cucharadita de sal (pruebe el caldo antes)",
        "1 limón en gajos"
      ],
      en: [
        "2 cups short-grain rice",
        "¼ cup olive oil",
        "1 onion, finely chopped",
        "1 red bell pepper, in strips",
        "1 green bell pepper, in strips",
        "4 garlic cloves, minced",
        "1 small eggplant, cubed",
        "1 zucchini, in half-moons",
        "½ lb green beans, cut",
        "1 can (14 oz) artichoke hearts, quartered",
        "1 ripe tomato, grated",
        "½ teaspoon saffron threads",
        "1 teaspoon paprika",
        "5 cups hot vegetable broth",
        "½ cup peas",
        "½ teaspoon salt (taste the broth first)",
        "1 lemon in wedges"
      ]
    },
    steps: {
      es: [
        "Tueste el azafrán y desmorónelo en el caldo caliente.",
        "En la paellera, dore la berenjena y el calabacín en el aceite 5 minutos y sáquelos.",
        "Sofría la cebolla, los pimientos, el ajo y las habichuelas tiernas 6 minutos. Añada el tomate y el pimentón y cocine 3 minutos.",
        "Añada el arroz, muévalo 1 minuto y vierta el caldo con la sal. Reparta parejo y no lo mueva más.",
        "Cocine 10 minutos a fuego medio-alto. Acomode la berenjena, el calabacín, las alcachofas y los guisantes encima, y siga 8–10 minutos a fuego medio-bajo.",
        "Forme el socarrat, deje reposar tapado 5 minutos y sirva con limón. Apta para vegetarianos y veganos."
      ],
      en: [
        "Toast the saffron and crumble it into the hot broth.",
        "In the paella pan, brown the eggplant and zucchini in the oil 5 minutes and remove.",
        "Sauté the onion, peppers, garlic and green beans 6 minutes. Add the tomato and paprika and cook 3 minutes.",
        "Add the rice, stir 1 minute and pour in the broth with the salt. Spread evenly and don't stir again.",
        "Cook 10 minutes over medium-high. Arrange the eggplant, zucchini, artichokes and peas on top and continue 8–10 minutes over medium-low.",
        "Form the socarrat, rest covered 5 minutes and serve with lemon. Suitable for vegetarians and vegans."
      ]
    }
  }
);
