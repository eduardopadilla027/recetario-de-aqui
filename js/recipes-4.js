/* Recetas añadidas — tercera ampliación (2026-10).
 *
 * Clásicos puertorriqueños que aún faltaban: platos de fonda y de diario
 * (carne bif, salmón y atún guisados, arroz chino boricua, arroz apastelado),
 * frituras y entremeses (domplines, yaniqueques, pastelillos de queso y de
 * pollo, alcapurrias de jueyes) y postres de celebración (sopa borracha,
 * mazamorra). Segunda tanda: riñoncitos y fricasé de cerdo, cetí, ostiones,
 * mofongo de mariscos, pastas criollas, marrayo, coquimol, polvo de amor y
 * ponqué. Versiones propias redactadas para esta app. Todas van en
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
  }
);
