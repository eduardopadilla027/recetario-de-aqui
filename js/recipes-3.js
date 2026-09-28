/* Recetas añadidas — segunda ampliación (2026-09).
 *
 * Platos tradicionales puertorriqueños que aún faltaban (cuchifritos,
 * platos de pana, pavochón, pasteles de arroz, bases como el aceite de
 * achiote…). Versiones propias redactadas para esta app. Todas van en
 * categorías que ya existían. */
recipes.push(
  // ── SOPAS ──
  {
    id: "caldo-gallego",
    category: "sopas",
    name: { es: "Caldo Gallego", en: "Galician Bean and Greens Soup (Caldo Gallego)" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas blancas, escurridas",
        "2 chorizos españoles, en ruedas",
        "¼ libra de jamón de cocinar, en cubos",
        "3 papas, peladas y en cubos",
        "1 cebolla, picada",
        "3 dientes de ajo, picados",
        "4 tazas de col rizada (kale) o repollo, picado",
        "8 tazas de caldo de pollo",
        "2 cucharadas de aceite de oliva",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 cans (15 oz each) white beans, drained",
        "2 Spanish chorizos, sliced",
        "¼ pound cooking ham, cubed",
        "3 potatoes, peeled and cubed",
        "1 onion, chopped",
        "3 garlic cloves, chopped",
        "4 cups kale or cabbage, chopped",
        "8 cups chicken broth",
        "2 tablespoons olive oil",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "En una olla grande, dore el chorizo y el jamón en el aceite por 5 minutos.",
        "Añada la cebolla y el ajo y cocine hasta que ablanden.",
        "Agregue el caldo y las papas. Hierva y cocine a fuego medio 20 minutos.",
        "Añada las habichuelas y la col, y cocine 15 minutos más.",
        "Aplaste algunas papas contra la olla para espesar. Pruebe la sal y sirva con pan."
      ],
      en: [
        "In a large pot, brown the chorizo and ham in the oil for 5 minutes.",
        "Add the onion and garlic and cook until soft.",
        "Add the broth and potatoes. Bring to a boil and cook over medium heat 20 minutes.",
        "Add the beans and greens and cook 15 minutes more.",
        "Mash a few potatoes against the pot to thicken. Adjust the salt and serve with bread."
      ]
    }
  },

  // ── CARNES ──
  {
    id: "gandinga",
    category: "carnes",
    name: { es: "Gandinga", en: "Gandinga (Pork Offal Stew)" },
    time: "1 hr 30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de hígado de cerdo",
        "1 libra de corazón de cerdo",
        "½ libra de riñones de cerdo",
        "2 limones",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "2 papas, en cubos",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 sobre de sazón con culantro y achiote",
        "2 tazas de agua",
        "Sal al gusto"
      ],
      en: [
        "1 pound pork liver",
        "1 pound pork heart",
        "½ pound pork kidneys",
        "2 limes",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "2 potatoes, cubed",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "1 packet sazón with coriander and annatto",
        "2 cups water",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave bien las carnes, quite los nervios de los riñones y frótelas con el limón. Enjuague.",
        "Hierva el corazón y los riñones en agua con sal por 30 minutos. Escurra y corte todo en cubitos, incluido el hígado crudo.",
        "Sofría el sofrito 3 minutos y añada la salsa de tomate, el sazón, las aceitunas y las alcaparras.",
        "Agregue las carnes, las papas y el agua. Tape y cocine a fuego medio-bajo 40 minutos, hasta que todo esté tierno.",
        "Sirva con arroz blanco o con viandas hervidas."
      ],
      en: [
        "Wash the meats well, trim the kidneys and rub everything with the lime. Rinse.",
        "Boil the heart and kidneys in salted water for 30 minutes. Drain and dice everything, including the raw liver.",
        "Sauté the sofrito 3 minutes and add the tomato sauce, sazón, olives and capers.",
        "Add the meats, potatoes and water. Cover and cook over medium-low heat 40 minutes, until everything is tender.",
        "Serve with white rice or boiled root vegetables."
      ]
    }
  },
  {
    id: "masitas-cerdo",
    category: "carnes",
    name: { es: "Masitas de Cerdo Fritas", en: "Fried Pork Chunks (Masitas)" },
    time: "1 hr 15 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de masa de cerdo (paleta), en cubos de 1½ pulgadas",
        "6 dientes de ajo, majados",
        "1 cucharada de adobo",
        "1 cucharadita de orégano",
        "½ taza de jugo de naranja agria (o limón con china)",
        "2 tazas de agua",
        "2 cucharadas de aceite",
        "1 cebolla, en ruedas (para servir)"
      ],
      en: [
        "3 pounds boneless pork shoulder, in 1½ inch cubes",
        "6 garlic cloves, mashed",
        "1 tablespoon adobo",
        "1 teaspoon oregano",
        "½ cup sour orange juice (or lime mixed with orange)",
        "2 cups water",
        "2 tablespoons oil",
        "1 onion, sliced into rings (for serving)"
      ]
    },
    steps: {
      es: [
        "Adobe el cerdo con el ajo, el adobo, el orégano y el jugo. Refrigere por lo menos 2 horas.",
        "Ponga el cerdo con su adobo, el agua y el aceite en un caldero. Hierva y cocine destapado a fuego medio hasta que el agua se evapore, unos 45 minutos.",
        "Cuando quede solo la grasa, siga cocinando y volteando las masitas hasta que estén doradas y crujientes por fuera.",
        "Escurra y sirva con la cebolla cruda o salteada, tostones o yuca."
      ],
      en: [
        "Marinate the pork with the garlic, adobo, oregano and juice. Refrigerate at least 2 hours.",
        "Put the pork with its marinade, the water and the oil in a caldero. Bring to a boil and cook uncovered over medium heat until the water evaporates, about 45 minutes.",
        "Once only the fat is left, keep cooking and turning the pieces until golden and crisp outside.",
        "Drain and serve with the onion, raw or sautéed, and tostones or yuca."
      ]
    }
  },
  {
    id: "churrasco",
    category: "carnes",
    name: { es: "Churrasco con Chimichurri", en: "Skirt Steak with Chimichurri" },
    time: "30 min + reposo",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de churrasco (entraña)",
        "1 cucharada de adobo",
        "4 dientes de ajo, majados",
        "1 taza de perejil picado",
        "½ taza de aceite de oliva",
        "3 cucharadas de vinagre de vino tinto",
        "1 cucharadita de orégano",
        "½ cucharadita de pimiento rojo en hojuelas",
        "Sal al gusto"
      ],
      en: [
        "2 pounds skirt steak",
        "1 tablespoon adobo",
        "4 garlic cloves, mashed",
        "1 cup chopped parsley",
        "½ cup olive oil",
        "3 tablespoons red wine vinegar",
        "1 teaspoon oregano",
        "½ teaspoon red pepper flakes",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Sazone el churrasco con el adobo y la mitad del ajo. Deje reposar 30 minutos.",
        "Para el chimichurri, mezcle el perejil, el resto del ajo, el aceite, el vinagre, el orégano, el pimiento y la sal.",
        "Ase el churrasco en parrilla o plancha bien caliente, 3 o 4 minutos por lado para término medio.",
        "Deje reposar 5 minutos, corte en tiras contra la fibra y sirva con el chimichurri."
      ],
      en: [
        "Season the steak with the adobo and half the garlic. Let rest 30 minutes.",
        "For the chimichurri, mix the parsley, remaining garlic, oil, vinegar, oregano, pepper flakes and salt.",
        "Grill or sear the steak over very high heat, 3 to 4 minutes per side for medium.",
        "Rest 5 minutes, slice against the grain and serve with the chimichurri."
      ]
    }
  },

  // ── AVES ──
  {
    id: "pavochon",
    category: "aves",
    name: { es: "Pavochón", en: "Pavochón (Turkey Seasoned Like Pernil)" },
    time: "4 hrs + reposo",
    servings: 12,
    ingredients: {
      es: [
        "1 pavo de 12 libras, descongelado",
        "1 cabeza de ajo, pelada",
        "2 cucharadas de orégano seco",
        "2 cucharadas de sal",
        "1 cucharada de pimienta",
        "¼ taza de aceite de oliva",
        "¼ taza de vinagre",
        "2 sobres de sazón con culantro y achiote",
        "2 tazas de caldo de pollo"
      ],
      en: [
        "1 turkey, 12 pounds, thawed",
        "1 head garlic, peeled",
        "2 tablespoons dried oregano",
        "2 tablespoons salt",
        "1 tablespoon pepper",
        "¼ cup olive oil",
        "¼ cup vinegar",
        "2 packets sazón with coriander and annatto",
        "2 cups chicken broth"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con el orégano, la sal y la pimienta. Añada el aceite, el vinagre y el sazón para formar el adobo.",
        "Seque el pavo, despegue la piel de la pechuga con los dedos y unte el adobo por debajo de la piel, por fuera y por dentro.",
        "Tape y refrigere de 24 a 48 horas.",
        "Hornee a 325 °F con el caldo en el fondo del molde, tapado con papel de aluminio, unas 3½ horas (15 minutos por libra). Destape la última hora para dorar la piel.",
        "Está listo cuando el muslo marca 165 °F en un termómetro. Deje reposar 30 minutos antes de trinchar."
      ],
      en: [
        "Mash the garlic with the oregano, salt and pepper. Add the oil, vinegar and sazón to make the adobo.",
        "Pat the turkey dry, loosen the breast skin with your fingers and rub the adobo under the skin, outside and inside.",
        "Cover and refrigerate 24 to 48 hours.",
        "Roast at 325 °F with the broth in the bottom of the pan, covered with foil, about 3½ hours (15 minutes per pound). Uncover for the last hour to brown the skin.",
        "It is done when the thigh reads 165 °F on a thermometer. Rest 30 minutes before carving."
      ]
    }
  },

  // ── PESCADO ──
  {
    id: "pescado-mojo-isleno",
    category: "pescados",
    name: { es: "Pescado al Mojo Isleño", en: "Fried Fish with Mojo Isleño" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "4 filetes de chillo o mero (o 1 chillo entero de 2 libras)",
        "1 cucharadita de adobo",
        "½ taza de harina de trigo",
        "½ taza de aceite de oliva",
        "2 cebollas, en ruedas",
        "1 pimiento verde, en tiras",
        "4 dientes de ajo, en lascas",
        "1 lata de 8 onzas de salsa de tomate",
        "¼ taza de vinagre",
        "½ taza de aceitunas rellenas",
        "2 cucharadas de alcaparras",
        "1 hoja de laurel",
        "Aceite para freír"
      ],
      en: [
        "4 red snapper or grouper fillets (or 1 whole 2-pound snapper)",
        "1 teaspoon adobo",
        "½ cup all-purpose flour",
        "½ cup olive oil",
        "2 onions, sliced into rings",
        "1 green bell pepper, in strips",
        "4 garlic cloves, sliced",
        "1 can (8 oz) tomato sauce",
        "¼ cup vinegar",
        "½ cup stuffed olives",
        "2 tablespoons capers",
        "1 bay leaf",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Para el mojo isleño: cocine en el aceite de oliva la cebolla, el pimiento y el ajo a fuego bajo por 10 minutos.",
        "Añada la salsa de tomate, el vinagre, las aceitunas, las alcaparras y el laurel. Cocine 15 minutos a fuego bajo.",
        "Sazone el pescado con el adobo, páselo por harina y fríalo hasta que esté dorado y cocido.",
        "Sirva el pescado bañado con el mojo isleño caliente, con tostones o arroz blanco."
      ],
      en: [
        "For the mojo isleño: cook the onion, bell pepper and garlic in the olive oil over low heat for 10 minutes.",
        "Add the tomato sauce, vinegar, olives, capers and bay leaf. Cook 15 minutes over low heat.",
        "Season the fish with the adobo, dredge in flour and fry until golden and cooked through.",
        "Serve the fish topped with the hot mojo isleño, with tostones or white rice."
      ]
    }
  },

  // ── FRITURAS ──
  {
    id: "empanadas-yuca",
    category: "entremeses",
    name: { es: "Empanadas de Yuca", en: "Yuca Turnovers" },
    time: "1 hr 15 min",
    servings: 8,
    ingredients: {
      es: [
        "3 libras de yuca, pelada y rallada fina",
        "2 cucharadas de aceite de achiote",
        "1½ cucharaditas de sal",
        "1 libra de carne molida guisada (picadillo), fría",
        "Hojas de plátano o papel encerado",
        "Aceite para freír"
      ],
      en: [
        "3 pounds yuca, peeled and finely grated",
        "2 tablespoons annatto oil",
        "1½ teaspoons salt",
        "1 pound cooked seasoned ground beef (picadillo), cooled",
        "Plantain leaves or wax paper",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Exprima la yuca rallada en un paño para sacarle el líquido.",
        "Mezcle la yuca con el aceite de achiote y la sal hasta formar una masa.",
        "Sobre un pedazo de hoja engrasada, extienda ⅓ taza de masa en forma de óvalo, ponga 1 cucharada de picadillo en el centro y doble con la ayuda de la hoja para cerrar la empanada.",
        "Fría a 350 °F, volteando, de 6 a 8 minutos, hasta que estén doradas.",
        "Escurra y sirva calientes."
      ],
      en: [
        "Squeeze the grated yuca in a cloth to remove the liquid.",
        "Mix the yuca with the annatto oil and salt into a dough.",
        "On a greased piece of leaf, spread ⅓ cup of dough into an oval, place 1 tablespoon of picadillo in the center and use the leaf to fold it closed.",
        "Fry at 350 °F, turning, for 6 to 8 minutes, until golden.",
        "Drain and serve hot."
      ]
    }
  },
  {
    id: "croquetas-bacalao",
    category: "entremeses",
    name: { es: "Croquetas de Bacalao", en: "Salt Cod Croquettes" },
    time: "1 hr + remojo",
    servings: 8,
    ingredients: {
      es: [
        "½ libra de bacalao sin espinas",
        "2 libras de papas",
        "2 huevos",
        "2 dientes de ajo, majados",
        "2 cucharadas de perejil picado",
        "1 taza de galleta molida",
        "Aceite para freír",
        "Pimienta al gusto"
      ],
      en: [
        "½ pound boneless salt cod",
        "2 pounds potatoes",
        "2 eggs",
        "2 garlic cloves, mashed",
        "2 tablespoons chopped parsley",
        "1 cup cracker crumbs",
        "Oil for frying",
        "Pepper to taste"
      ]
    },
    steps: {
      es: [
        "Desale el bacalao en agua de 8 a 12 horas, cambiando el agua. Hiérvalo 10 minutos y desmenúcelo fino.",
        "Hierva las papas, pélelas y hágalas puré.",
        "Mezcle el puré con el bacalao, 1 huevo, el ajo, el perejil y la pimienta. Pruebe antes de añadir sal.",
        "Forme croquetas, páselas por el otro huevo batido y luego por la galleta molida.",
        "Fría a 350 °F hasta que doren. Escurra y sirva."
      ],
      en: [
        "Desalt the cod in water for 8 to 12 hours, changing the water. Boil 10 minutes and flake finely.",
        "Boil the potatoes, peel and mash them.",
        "Mix the mash with the cod, 1 egg, garlic, parsley and pepper. Taste before adding any salt.",
        "Shape into croquettes, dip in the other beaten egg and then in the cracker crumbs.",
        "Fry at 350 °F until golden. Drain and serve."
      ]
    }
  },

  // ── VEGETALES Y VIANDAS ──
  {
    id: "majado-yautia",
    category: "vegetales",
    name: { es: "Majado de Yautía", en: "Mashed Yautía (Taro Root)" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de yautía blanca o lila, pelada y en trozos",
        "3 cucharadas de mantequilla",
        "½ taza de leche caliente",
        "1 cucharada de aceite de oliva",
        "Sal al gusto"
      ],
      en: [
        "2 pounds white or purple yautía (taro root), peeled and in chunks",
        "3 tablespoons butter",
        "½ cup hot milk",
        "1 tablespoon olive oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la yautía en agua con sal por 20 minutos, hasta que esté muy blanda.",
        "Escúrrala y májela en caliente con la mantequilla.",
        "Añada la leche poco a poco hasta obtener un majado suave.",
        "Rocíe el aceite de oliva por encima y sirva. Es tradicional para los niños y para quienes están delicados del estómago."
      ],
      en: [
        "Boil the yautía in salted water for 20 minutes, until very soft.",
        "Drain and mash it while hot with the butter.",
        "Add the milk little by little until smooth.",
        "Drizzle the olive oil on top and serve. It is a traditional food for children and upset stomachs."
      ]
    }
  },
  {
    id: "tostones-pana",
    category: "vegetales",
    name: { es: "Tostones de Pana", en: "Breadfruit Tostones" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "1 pana (panapén) verde y firme",
        "Aceite para freír",
        "Sal al gusto",
        "Mojo de ajo para servir (opcional)"
      ],
      en: [
        "1 green, firm breadfruit",
        "Oil for frying",
        "Salt to taste",
        "Garlic mojo for serving (optional)"
      ]
    },
    steps: {
      es: [
        "Pele la pana, quítele el corazón y córtela en trozos de 1 pulgada.",
        "Hierva los trozos en agua con sal por 10 minutos y escúrralos bien.",
        "Fríalos a 325 °F por 5 minutos, sáquelos y aplástelos con una tostonera o un plato.",
        "Fríalos otra vez a 375 °F hasta que estén dorados y crujientes.",
        "Escurra, sale y sirva con mojo de ajo."
      ],
      en: [
        "Peel the breadfruit, remove the core and cut into 1 inch pieces.",
        "Boil the pieces in salted water for 10 minutes and drain well.",
        "Fry at 325 °F for 5 minutes, remove and flatten them with a tostonera or a plate.",
        "Fry again at 375 °F until golden and crisp.",
        "Drain, salt and serve with garlic mojo."
      ]
    }
  },
  {
    id: "pasteles-arroz",
    category: "vegetales",
    name: { es: "Pasteles de Arroz", en: "Rice Pasteles" },
    time: "3 hrs",
    servings: 12,
    ingredients: {
      es: [
        "4 tazas de arroz de grano mediano, remojado 2 horas",
        "2 libras de masa de cerdo, en cubos pequeños",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "2 sobres de sazón con culantro y achiote",
        "½ taza de aceitunas rellenas",
        "1 lata de 15 onzas de garbanzos, escurridos",
        "¼ taza de aceite de achiote",
        "4 tazas de agua",
        "Hojas de plátano y papel de pasteles",
        "Hilo de cocina"
      ],
      en: [
        "4 cups medium-grain rice, soaked 2 hours",
        "2 pounds boneless pork, in small cubes",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "2 packets sazón with coriander and annatto",
        "½ cup stuffed olives",
        "1 can (15 oz) chickpeas, drained",
        "¼ cup annatto oil",
        "4 cups water",
        "Plantain leaves and pastel paper",
        "Kitchen string"
      ]
    },
    steps: {
      es: [
        "Guise el cerdo: dórelo, añada el sofrito, la salsa de tomate, el sazón, las aceitunas, los garbanzos y el agua. Cocine tapado 45 minutos.",
        "Escurra el arroz y mézclelo con el guiso caliente (con su caldo) y la mitad del aceite de achiote. Cocine 5 minutos, revolviendo; el arroz debe quedar a medio cocer.",
        "Engrase cada hoja con aceite de achiote, ponga ¾ taza de la mezcla en el centro y doble la hoja y el papel para formar un paquete. Amarre los pasteles de dos en dos.",
        "Hierva en agua con sal, sumergidos por completo, por 1 hora.",
        "Saque, desamarre y sirva calientes."
      ],
      en: [
        "Stew the pork: brown it, then add the sofrito, tomato sauce, sazón, olives, chickpeas and water. Cook covered 45 minutes.",
        "Drain the rice and mix it with the hot stew (and its broth) and half the annatto oil. Cook 5 minutes, stirring; the rice should be only half cooked.",
        "Grease each leaf with annatto oil, place ¾ cup of the mixture in the center and fold the leaf and paper into a packet. Tie the pasteles in pairs.",
        "Boil fully submerged in salted water for 1 hour.",
        "Remove, untie and serve hot."
      ]
    }
  },

  // ── ARROCES ──
  {
    id: "arroz-calamares",
    category: "arroces",
    name: { es: "Arroz con Calamares", en: "Rice with Squid" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 4 onzas de calamares en su tinta o en salsa",
        "3 tazas de arroz de grano mediano",
        "½ taza de sofrito",
        "½ lata de 8 onzas de salsa de tomate",
        "¼ taza de aceitunas rellenas",
        "2 cucharadas de aceite",
        "3½ tazas de agua",
        "1 cucharadita de sal"
      ],
      en: [
        "2 cans (4 oz each) squid in ink or in sauce",
        "3 cups medium-grain rice",
        "½ cup sofrito",
        "½ can (8 oz) tomato sauce",
        "¼ cup stuffed olives",
        "2 tablespoons oil",
        "3½ cups water",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite por 3 minutos. Añada la salsa de tomate y las aceitunas.",
        "Pique los calamares y agréguelos con su salsa. Cocine 2 minutos.",
        "Añada el agua y la sal, y deje hervir.",
        "Agregue el arroz y cocine sin tapar hasta que se seque el agua. Voltee una vez.",
        "Tape y cocine a fuego bajo 20 minutos."
      ],
      en: [
        "Sauté the sofrito in the oil for 3 minutes. Add the tomato sauce and olives.",
        "Chop the squid and add it with its sauce. Cook 2 minutes.",
        "Add the water and salt and bring to a boil.",
        "Add the rice and cook uncovered until the water is absorbed. Turn once.",
        "Cover and cook over low heat 20 minutes."
      ]
    }
  },
  {
    id: "arroz-maiz",
    category: "arroces",
    name: { es: "Arroz con Maíz", en: "Rice with Corn" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz de grano mediano",
        "1 lata de 15 onzas de maíz en grano, escurrido",
        "¼ libra de jamón de cocinar, en cubitos",
        "½ taza de sofrito",
        "½ lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "2 cucharadas de aceite",
        "3½ tazas de agua",
        "1 cucharadita de sal"
      ],
      en: [
        "3 cups medium-grain rice",
        "1 can (15 oz) corn kernels, drained",
        "¼ pound cooking ham, diced",
        "½ cup sofrito",
        "½ can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "2 tablespoons oil",
        "3½ cups water",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Dore el jamón en el aceite y añada el sofrito. Sofría 3 minutos.",
        "Agregue la salsa de tomate, el sazón y el maíz.",
        "Añada el agua y la sal, y deje hervir.",
        "Agregue el arroz y cocine sin tapar hasta que se seque. Voltee una vez, tape y cocine a fuego bajo 20 minutos."
      ],
      en: [
        "Brown the ham in the oil and add the sofrito. Sauté 3 minutes.",
        "Add the tomato sauce, sazón and corn.",
        "Add the water and salt and bring to a boil.",
        "Add the rice and cook uncovered until dry. Turn once, cover and cook over low heat 20 minutes."
      ]
    }
  },

  // ── POSTRES ──
  {
    id: "flan-coco",
    category: "postres",
    name: { es: "Flan de Coco", en: "Coconut Flan" },
    time: "1 hr 15 min + reposo",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "5 huevos",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "½ taza de coco rallado",
        "1 cucharadita de vainilla"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "5 eggs",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "½ cup shredded coconut",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F. Derrita el azúcar en un sartén hasta que tome color ámbar y cubra con ella un molde de flan.",
        "Licúe los huevos, las tres leches y la vainilla. Añada el coco rallado y vierta en el molde.",
        "Hornee a baño de María por 1 hora, hasta que al insertar un cuchillo salga limpio.",
        "Deje enfriar y refrigere por lo menos 4 horas. Desmolde volteándolo sobre un plato."
      ],
      en: [
        "Heat the oven to 350 °F. Melt the sugar in a skillet until amber and coat a flan mold with it.",
        "Blend the eggs, the three milks and the vanilla. Stir in the shredded coconut and pour into the mold.",
        "Bake in a water bath for 1 hour, until a knife inserted comes out clean.",
        "Let cool and refrigerate at least 4 hours. Unmold by flipping onto a plate."
      ]
    }
  },
  {
    id: "flan-pana",
    category: "postres",
    name: { es: "Flan de Pana", en: "Breadfruit Flan" },
    time: "1 hr 30 min + reposo",
    servings: 10,
    ingredients: {
      es: [
        "1 taza de azúcar (para el caramelo)",
        "2 tazas de pana madura hervida y majada",
        "5 huevos",
        "1 lata de 14 onzas de leche condensada",
        "1 lata de 12 onzas de leche evaporada",
        "1 cucharadita de vainilla",
        "½ cucharadita de canela en polvo"
      ],
      en: [
        "1 cup sugar (for the caramel)",
        "2 cups ripe breadfruit, boiled and mashed",
        "5 eggs",
        "1 can (14 oz) sweetened condensed milk",
        "1 can (12 oz) evaporated milk",
        "1 teaspoon vanilla",
        "½ teaspoon ground cinnamon"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F. Haga un caramelo con el azúcar y cubra un molde de flan.",
        "Licúe la pana con los huevos, las leches, la vainilla y la canela hasta que esté muy suave. Cuele si quedan fibras.",
        "Vierta en el molde y hornee a baño de María 1 hora y 15 minutos, hasta que cuaje.",
        "Deje enfriar, refrigere por lo menos 4 horas y desmolde."
      ],
      en: [
        "Heat the oven to 350 °F. Make a caramel with the sugar and coat a flan mold.",
        "Blend the breadfruit with the eggs, milks, vanilla and cinnamon until very smooth. Strain if any fibers remain.",
        "Pour into the mold and bake in a water bath 1 hour and 15 minutes, until set.",
        "Let cool, refrigerate at least 4 hours and unmold."
      ]
    }
  },
  {
    id: "mampostial",
    category: "postres",
    name: { es: "Mampostial", en: "Mampostial (Coconut Molasses Candy)" },
    time: "45 min",
    servings: 16,
    ingredients: {
      es: [
        "3 tazas de coco rallado fresco",
        "1½ tazas de azúcar morena",
        "¼ taza de melao de caña o melaza",
        "½ taza de agua",
        "1 cucharadita de jengibre rallado",
        "1 pizca de sal"
      ],
      en: [
        "3 cups freshly grated coconut",
        "1½ cups brown sugar",
        "¼ cup cane syrup or molasses",
        "½ cup water",
        "1 teaspoon grated ginger",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "En una olla gruesa, cocine el azúcar, el melao, el agua, el jengibre y la sal hasta que hierva.",
        "Añada el coco y cocine a fuego medio-bajo, revolviendo sin parar, unos 30 minutos, hasta que la mezcla se despegue del fondo.",
        "Vierta sobre una bandeja engrasada, extienda a ½ pulgada de grosor y deje enfriar un poco.",
        "Corte en barritas mientras está tibio y deje enfriar por completo."
      ],
      en: [
        "In a heavy pot, cook the sugar, molasses, water, ginger and salt until boiling.",
        "Add the coconut and cook over medium-low heat, stirring constantly, about 30 minutes, until the mixture pulls away from the bottom.",
        "Pour onto a greased tray, spread ½ inch thick and let cool slightly.",
        "Cut into bars while warm and let cool completely."
      ]
    }
  },

  // ── BEBIDAS ──
  {
    id: "batida-lechosa",
    category: "bebidas",
    name: { es: "Batida de Lechosa", en: "Papaya Shake" },
    time: "5 min",
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de lechosa madura en cubos",
        "1 taza de leche fría",
        "2 cucharadas de azúcar o leche condensada",
        "½ cucharadita de vainilla",
        "1 taza de hielo"
      ],
      en: [
        "2 cups ripe papaya, cubed",
        "1 cup cold milk",
        "2 tablespoons sugar or condensed milk",
        "½ teaspoon vanilla",
        "1 cup ice"
      ]
    },
    steps: {
      es: [
        "Licúe todos los ingredientes hasta que la batida esté suave y espumosa.",
        "Pruebe y ajuste el dulce.",
        "Sirva de inmediato, bien fría."
      ],
      en: [
        "Blend all the ingredients until smooth and foamy.",
        "Taste and adjust the sweetness.",
        "Serve right away, very cold."
      ]
    }
  },

  // ── SALSAS Y BASES ──
  {
    id: "aceite-achiote",
    category: "salsas",
    name: { es: "Aceite de Achiote", en: "Annatto Oil" },
    time: "10 min",
    servings: 16,
    ingredients: {
      es: [
        "1 taza de aceite vegetal o de oliva",
        "¼ taza de semillas de achiote (bija)"
      ],
      en: [
        "1 cup vegetable or olive oil",
        "¼ cup annatto (achiote) seeds"
      ]
    },
    steps: {
      es: [
        "Caliente el aceite con las semillas a fuego bajo, sin que llegue a humear.",
        "Cuando el aceite tome un color rojo anaranjado intenso, unos 5 minutos, retire del fuego. Si las semillas crujen fuerte, el fuego está muy alto.",
        "Deje enfriar y cuele.",
        "Guarde en un frasco. Se usa para dar color a arroces, pasteles, masas de alcapurrias y empanadas."
      ],
      en: [
        "Heat the oil with the seeds over low heat, without letting it smoke.",
        "When the oil turns a deep red-orange, about 5 minutes, remove from heat. If the seeds crackle loudly, the heat is too high.",
        "Let cool and strain.",
        "Store in a jar. It adds color to rice, pasteles, and alcapurria and turnover doughs."
      ]
    }
  },
  {
    id: "mojo-ajo",
    category: "salsas",
    name: { es: "Mojo de Ajo", en: "Garlic Mojo" },
    time: "10 min",
    servings: 6,
    ingredients: {
      es: [
        "10 dientes de ajo",
        "½ taza de aceite de oliva",
        "2 cucharadas de jugo de limón o de naranja agria",
        "1 cucharada de perejil o cilantro picado",
        "½ cucharadita de sal"
      ],
      en: [
        "10 garlic cloves",
        "½ cup olive oil",
        "2 tablespoons lime or sour orange juice",
        "1 tablespoon chopped parsley or cilantro",
        "½ teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Maje el ajo con la sal en el pilón hasta formar una pasta.",
        "Caliente el aceite a fuego bajo, añada el ajo y cocine 1 minuto, sin dorarlo.",
        "Retire del fuego y añada el jugo y el perejil.",
        "Sirva tibio sobre tostones, yuca hervida, mofongo o pescado."
      ],
      en: [
        "Mash the garlic with the salt in the pilón into a paste.",
        "Warm the oil over low heat, add the garlic and cook 1 minute without browning.",
        "Remove from heat and add the juice and parsley.",
        "Serve warm over tostones, boiled yuca, mofongo or fish."
      ]
    }
  }
);
