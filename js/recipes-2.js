/* Recetas añadidas — ampliación del recetario (2026-09).
 *
 * Platos tradicionales de la cocina puertorriqueña que no estaban en
 * recipes.js. La selección sigue la estructura de los recetarios clásicos de
 * la isla (bebidas calientes, refrescos, frutas, cereales, granos, sopas,
 * carnes, aves, pescados, frituras, pastas, postres). Las recetas son
 * versiones propias redactadas para esta app: no copian el texto de ningún
 * libro.
 *
 * Categorías nuevas: "calientes" (Bebidas Calientes) y "pastas" (Pastas). */
recipes.push(
  // ══════════════════════════════════════
  // ── BEBIDAS CALIENTES (nueva) ──
  // ══════════════════════════════════════
  {
    id: "cafe-colao",
    category: "calientes",
    name: { es: "Café Colao", en: "Cloth-Strained Coffee (Café Colao)" },
    time: "10 min",
    servings: 4,
    ingredients: {
      es: [
        "4 tazas de agua",
        "½ taza de café puertorriqueño molido",
        "Azúcar al gusto",
        "1 colador de tela limpio"
      ],
      en: [
        "4 cups water",
        "½ cup ground Puerto Rican coffee",
        "Sugar to taste",
        "1 clean cloth coffee strainer"
      ]
    },
    steps: {
      es: [
        "Ponga a hervir el agua en una olla pequeña.",
        "Cuando rompa el hervor, apague el fuego y añada el café. Revuelva y deje reposar 1 minuto.",
        "Pase el café por el colador de tela sobre una jarra o cafetera.",
        "Endulce al gusto y sirva bien caliente, solo o con leche."
      ],
      en: [
        "Bring the water to a boil in a small pot.",
        "When it boils, turn off the heat and stir in the coffee. Let it rest 1 minute.",
        "Pour the coffee through the cloth strainer into a pitcher or coffee pot.",
        "Sweeten to taste and serve very hot, black or with milk."
      ]
    }
  },
  {
    id: "cafe-con-leche",
    category: "calientes",
    name: { es: "Café con Leche", en: "Café con Leche" },
    time: "10 min",
    servings: 2,
    ingredients: {
      es: [
        "1 taza de café colao fuerte",
        "1 taza de leche entera",
        "2 cucharadas de azúcar",
        "1 pizca de canela en polvo (opcional)"
      ],
      en: [
        "1 cup strong café colao",
        "1 cup whole milk",
        "2 tablespoons sugar",
        "1 pinch ground cinnamon (optional)"
      ]
    },
    steps: {
      es: [
        "Caliente la leche a fuego medio sin dejar que hierva, batiendo para que haga espuma.",
        "Divida el café caliente en dos tazas y añada el azúcar.",
        "Complete cada taza con la leche espumosa.",
        "Espolvoree canela si desea y sirva de inmediato."
      ],
      en: [
        "Heat the milk over medium heat without letting it boil, whisking to make it foamy.",
        "Divide the hot coffee between two cups and add the sugar.",
        "Top each cup with the foamy milk.",
        "Sprinkle with cinnamon if desired and serve right away."
      ]
    }
  },
  {
    id: "chocolate-caliente",
    category: "calientes",
    name: { es: "Chocolate Caliente con Queso", en: "Hot Chocolate with Cheese" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "4 tazas de leche entera",
        "3 onzas de chocolate de tableta para taza",
        "2 cucharadas de azúcar",
        "1 raja de canela",
        "1 pizca de sal",
        "4 pedazos de queso de papa o queso blanco del país"
      ],
      en: [
        "4 cups whole milk",
        "3 ounces tablet drinking chocolate",
        "2 tablespoons sugar",
        "1 cinnamon stick",
        "1 pinch salt",
        "4 pieces queso de papa or local white cheese"
      ]
    },
    steps: {
      es: [
        "Caliente la leche con la canela a fuego medio-bajo.",
        "Añada el chocolate picado, el azúcar y la sal, y revuelva hasta que se derrita.",
        "Cocine 5 minutos más, batiendo, hasta que espese un poco. No deje que hierva fuerte.",
        "Retire la canela y sirva en tazas con un pedazo de queso dentro o al lado, al estilo tradicional."
      ],
      en: [
        "Heat the milk with the cinnamon over medium-low heat.",
        "Add the chopped chocolate, sugar and salt, and stir until melted.",
        "Cook 5 more minutes, whisking, until slightly thickened. Do not let it boil hard.",
        "Remove the cinnamon and serve in cups with a piece of cheese inside or on the side, the traditional way."
      ]
    }
  },
  {
    id: "guarapo-jengibre",
    category: "calientes",
    name: { es: "Guarapo de Jengibre", en: "Ginger Tea (Guarapo de Jengibre)" },
    time: "20 min",
    servings: 4,
    ingredients: {
      es: [
        "1 pedazo de jengibre fresco de 3 pulgadas, pelado y en rodajas",
        "5 tazas de agua",
        "1 raja de canela",
        "3 clavos de especia",
        "¼ taza de azúcar o miel",
        "Jugo de ½ limón (opcional)"
      ],
      en: [
        "1 piece fresh ginger, 3 inches, peeled and sliced",
        "5 cups water",
        "1 cinnamon stick",
        "3 whole cloves",
        "¼ cup sugar or honey",
        "Juice of ½ lime (optional)"
      ]
    },
    steps: {
      es: [
        "Ponga el agua con el jengibre, la canela y los clavos a hervir.",
        "Baje el fuego y deje hervir suavemente por 15 minutos.",
        "Cuele, endulce con azúcar o miel y añada el limón si desea.",
        "Sirva caliente. Es el remedio casero clásico para el catarro."
      ],
      en: [
        "Bring the water to a boil with the ginger, cinnamon and cloves.",
        "Lower the heat and simmer for 15 minutes.",
        "Strain, sweeten with sugar or honey and add the lime if desired.",
        "Serve hot. It is the classic home remedy for colds."
      ]
    }
  },
  {
    id: "te-limoncillo",
    category: "calientes",
    name: { es: "Té de Limoncillo", en: "Lemongrass Tea" },
    time: "15 min",
    servings: 4,
    ingredients: {
      es: [
        "6 hojas largas de limoncillo, lavadas",
        "4 tazas de agua",
        "Azúcar o miel al gusto"
      ],
      en: [
        "6 long lemongrass leaves, washed",
        "4 cups water",
        "Sugar or honey to taste"
      ]
    },
    steps: {
      es: [
        "Doble o anude las hojas de limoncillo para que quepan en la olla.",
        "Hiérvalas en el agua por 10 minutos.",
        "Apague el fuego, tape y deje reposar 5 minutos.",
        "Cuele, endulce al gusto y sirva caliente."
      ],
      en: [
        "Fold or knot the lemongrass leaves so they fit in the pot.",
        "Boil them in the water for 10 minutes.",
        "Turn off the heat, cover and let steep 5 minutes.",
        "Strain, sweeten to taste and serve hot."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── PASTAS (nueva) ──
  // ══════════════════════════════════════
  {
    id: "espaguetis-pollo",
    category: "pastas",
    name: { es: "Espaguetis con Pollo a la Criolla", en: "Creole Chicken Spaghetti" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de muslos de pollo sin piel",
        "1 libra de espaguetis",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "2 tazas de agua",
        "1 cucharadita de adobo",
        "2 cucharadas de aceite de oliva"
      ],
      en: [
        "2 pounds skinless chicken thighs",
        "1 pound spaghetti",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "2 cups water",
        "1 teaspoon adobo",
        "2 tablespoons olive oil"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con el adobo y dórelo en el aceite en un caldero.",
        "Añada el sofrito y sofría 3 minutos. Agregue la salsa de tomate, el sazón, las aceitunas y las alcaparras.",
        "Vierta el agua, tape y cocine a fuego medio-bajo por 30 minutos.",
        "Mientras tanto, hierva los espaguetis en agua con sal hasta que estén al dente y escúrralos.",
        "Desmenuce el pollo en la salsa, mezcle con los espaguetis y cocine 5 minutos más para que absorban el sabor."
      ],
      en: [
        "Season the chicken with the adobo and brown it in the oil in a caldero (heavy pot).",
        "Add the sofrito and sauté 3 minutes. Stir in the tomato sauce, sazón, olives and capers.",
        "Pour in the water, cover and cook over medium-low heat for 30 minutes.",
        "Meanwhile, boil the spaghetti in salted water until al dente and drain.",
        "Shred the chicken into the sauce, toss with the spaghetti and cook 5 more minutes to absorb the flavor."
      ]
    }
  },
  {
    id: "coditos-carne",
    category: "pastas",
    name: { es: "Coditos con Carne Molida", en: "Elbow Macaroni with Ground Beef" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de coditos",
        "1 libra de carne molida de res",
        "¼ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "1 cucharadita de orégano",
        "½ taza de queso cheddar rallado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "1 pound elbow macaroni",
        "1 pound ground beef",
        "¼ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "1 teaspoon oregano",
        "½ cup shredded cheddar cheese",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva los coditos en agua con sal hasta que estén al dente. Escurra y reserve ½ taza del agua.",
        "Dore la carne molida en un sartén grande, desmenuzándola. Escurra la grasa.",
        "Añada el sofrito, la salsa de tomate, el sazón y el orégano. Cocine 10 minutos a fuego medio-bajo.",
        "Mezcle los coditos con la salsa, usando un poco del agua reservada si queda seca.",
        "Sirva con el queso rallado por encima."
      ],
      en: [
        "Boil the macaroni in salted water until al dente. Drain, saving ½ cup of the water.",
        "Brown the ground beef in a large skillet, breaking it up. Drain the fat.",
        "Add the sofrito, tomato sauce, sazón and oregano. Cook 10 minutes over medium-low heat.",
        "Toss the macaroni with the sauce, adding some reserved water if it looks dry.",
        "Serve topped with the shredded cheese."
      ]
    }
  },
  {
    id: "macarrones-queso",
    category: "pastas",
    name: { es: "Macarrones con Queso al Horno", en: "Baked Macaroni and Cheese" },
    time: "50 min",
    servings: 8,
    ingredients: {
      es: [
        "1 libra de coditos",
        "1 lata de 12 onzas de leche evaporada",
        "2 huevos",
        "3 tazas de queso cheddar rallado",
        "4 cucharadas de mantequilla",
        "½ cucharadita de sal",
        "¼ cucharadita de pimienta",
        "¼ cucharadita de pimentón (paprika)"
      ],
      en: [
        "1 pound elbow macaroni",
        "1 can (12 oz) evaporated milk",
        "2 eggs",
        "3 cups shredded cheddar cheese",
        "4 tablespoons butter",
        "½ teaspoon salt",
        "¼ teaspoon pepper",
        "¼ teaspoon paprika"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase un molde de 9 x 13 pulgadas.",
        "Hierva los coditos 2 minutos menos de lo indicado en el paquete y escúrralos. Mezcle con la mantequilla.",
        "Bata la leche evaporada con los huevos, la sal y la pimienta.",
        "En el molde, alterne capas de coditos y queso, dejando queso para encima. Vierta la mezcla de leche.",
        "Espolvoree el pimentón y hornee 30 minutos, hasta que dore. Deje reposar 10 minutos antes de cortar."
      ],
      en: [
        "Heat the oven to 350 °F and grease a 9 x 13 inch pan.",
        "Boil the macaroni 2 minutes less than the package says and drain. Toss with the butter.",
        "Whisk the evaporated milk with the eggs, salt and pepper.",
        "In the pan, alternate layers of macaroni and cheese, saving cheese for the top. Pour in the milk mixture.",
        "Sprinkle with paprika and bake 30 minutes, until golden. Let rest 10 minutes before cutting."
      ]
    }
  },
  {
    id: "lasana-criolla",
    category: "pastas",
    name: { es: "Lasaña Criolla", en: "Puerto Rican-Style Lasagna" },
    time: "1 hr 30 min",
    servings: 10,
    ingredients: {
      es: [
        "12 láminas de lasaña",
        "2 libras de carne molida de res",
        "½ taza de sofrito",
        "1 frasco de 24 onzas de salsa marinara",
        "1 sobre de sazón con culantro y achiote",
        "¼ taza de aceitunas rellenas, picadas",
        "15 onzas de queso ricotta",
        "1 huevo",
        "3 tazas de queso mozzarella rallado",
        "½ taza de queso parmesano rallado"
      ],
      en: [
        "12 lasagna noodles",
        "2 pounds ground beef",
        "½ cup sofrito",
        "1 jar (24 oz) marinara sauce",
        "1 packet sazón with coriander and annatto",
        "¼ cup stuffed olives, chopped",
        "15 ounces ricotta cheese",
        "1 egg",
        "3 cups shredded mozzarella cheese",
        "½ cup grated parmesan cheese"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 375 °F. Hierva las láminas hasta que estén al dente y extiéndalas sobre papel encerado.",
        "Dore la carne, escurra la grasa y añada el sofrito, el sazón y las aceitunas. Cocine 5 minutos y agregue la salsa marinara.",
        "Mezcle la ricotta con el huevo y la mitad del parmesano.",
        "En un molde de 9 x 13 pulgadas ponga un poco de salsa y luego capas de láminas, ricotta, carne y mozzarella. Repita tres veces.",
        "Termine con mozzarella y parmesano. Tape con papel de aluminio y hornee 30 minutos; destape y hornee 15 minutos más.",
        "Deje reposar 15 minutos antes de cortar."
      ],
      en: [
        "Heat the oven to 375 °F. Boil the noodles until al dente and lay them flat on wax paper.",
        "Brown the beef, drain the fat and add the sofrito, sazón and olives. Cook 5 minutes and stir in the marinara.",
        "Mix the ricotta with the egg and half the parmesan.",
        "In a 9 x 13 inch pan spread a little sauce, then layer noodles, ricotta, meat and mozzarella. Repeat three times.",
        "Finish with mozzarella and parmesan. Cover with foil and bake 30 minutes; uncover and bake 15 minutes more.",
        "Let rest 15 minutes before cutting."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── CARNES ──
  // ══════════════════════════════════════
  {
    id: "patitas-cerdo",
    category: "carnes",
    name: { es: "Patitas de Cerdo con Garbanzos", en: "Pig's Feet Stew with Chickpeas" },
    time: "3 hrs",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de patitas de cerdo, cortadas en pedazos",
        "2 latas de 15 onzas de garbanzos, escurridos",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "2 papas, peladas y en cubos",
        "1 sobre de sazón con culantro y achiote",
        "¼ taza de aceitunas rellenas",
        "2 hojas de laurel",
        "Sal al gusto"
      ],
      en: [
        "3 pounds pig's feet, cut into pieces",
        "2 cans (15 oz each) chickpeas, drained",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "2 potatoes, peeled and cubed",
        "1 packet sazón with coriander and annatto",
        "¼ cup stuffed olives",
        "2 bay leaves",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Lave bien las patitas y hiérvalas en agua con sal y laurel, tapadas, por 2 horas o hasta que estén blandas.",
        "Saque las patitas y reserve 3 tazas del caldo.",
        "En un caldero, sofría el sofrito 3 minutos y añada la salsa de tomate, el sazón y las aceitunas.",
        "Agregue las patitas, el caldo reservado, las papas y los garbanzos.",
        "Cocine a fuego medio 30 minutos, hasta que la salsa espese y las papas estén blandas. Sirva con arroz blanco."
      ],
      en: [
        "Wash the pig's feet well and boil them, covered, in salted water with the bay leaves for 2 hours or until tender.",
        "Remove the pig's feet and save 3 cups of the broth.",
        "In a caldero, sauté the sofrito 3 minutes and add the tomato sauce, sazón and olives.",
        "Add the pig's feet, reserved broth, potatoes and chickpeas.",
        "Cook over medium heat 30 minutes, until the sauce thickens and the potatoes are tender. Serve with white rice."
      ]
    }
  },
  {
    id: "albondigas-guisadas",
    category: "carnes",
    name: { es: "Albóndigas Guisadas", en: "Stewed Meatballs" },
    time: "50 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de carne molida de res",
        "½ taza de pan rallado",
        "1 huevo",
        "2 dientes de ajo, majados",
        "1 cucharadita de adobo",
        "½ taza de sofrito",
        "1 lata de 15 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "1 taza de agua",
        "2 cucharadas de aceite"
      ],
      en: [
        "2 pounds ground beef",
        "½ cup breadcrumbs",
        "1 egg",
        "2 garlic cloves, mashed",
        "1 teaspoon adobo",
        "½ cup sofrito",
        "1 can (15 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "1 cup water",
        "2 tablespoons oil"
      ]
    },
    steps: {
      es: [
        "Mezcle la carne con el pan rallado, el huevo, el ajo y el adobo. Forme bolitas de 1½ pulgadas.",
        "Dore las albóndigas en el aceite en tandas y resérvelas.",
        "En el mismo caldero sofría el sofrito 3 minutos. Añada la salsa de tomate, el sazón y el agua.",
        "Regrese las albóndigas, tape y cocine a fuego bajo 25 minutos.",
        "Sirva con arroz blanco o con espaguetis."
      ],
      en: [
        "Mix the beef with the breadcrumbs, egg, garlic and adobo. Shape into 1½ inch balls.",
        "Brown the meatballs in the oil in batches and set aside.",
        "In the same caldero sauté the sofrito 3 minutes. Add the tomato sauce, sazón and water.",
        "Return the meatballs, cover and cook over low heat 25 minutes.",
        "Serve with white rice or spaghetti."
      ]
    }
  },
  {
    id: "pinchos-cerdo",
    category: "carnes",
    name: { es: "Pinchos de Cerdo", en: "Pork Skewers (Pinchos)" },
    time: "30 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de masa de cerdo (paleta), en cubos de 1 pulgada",
        "4 dientes de ajo, majados",
        "1 cucharada de adobo",
        "1 cucharadita de orégano",
        "2 cucharadas de jugo de naranja agria o limón",
        "2 cucharadas de aceite",
        "1 taza de salsa barbacoa",
        "12 palitos de pincho, remojados en agua"
      ],
      en: [
        "2 pounds boneless pork shoulder, in 1 inch cubes",
        "4 garlic cloves, mashed",
        "1 tablespoon adobo",
        "1 teaspoon oregano",
        "2 tablespoons sour orange or lime juice",
        "2 tablespoons oil",
        "1 cup barbecue sauce",
        "12 skewers, soaked in water"
      ]
    },
    steps: {
      es: [
        "Adobe el cerdo con el ajo, el adobo, el orégano, el jugo y el aceite. Refrigere por lo menos 2 horas.",
        "Ensarte 4 o 5 cubos en cada palito.",
        "Ase a la parrilla o en plancha a fuego medio-alto, volteando, por 12 a 15 minutos.",
        "Pinte con salsa barbacoa en los últimos 3 minutos. Sirva con un pedazo de pan de agua en la punta, como en los kioscos."
      ],
      en: [
        "Marinate the pork with the garlic, adobo, oregano, juice and oil. Refrigerate at least 2 hours.",
        "Thread 4 or 5 cubes onto each skewer.",
        "Grill or griddle over medium-high heat, turning, for 12 to 15 minutes.",
        "Brush with barbecue sauce in the last 3 minutes. Serve with a piece of pan de agua on the tip, like at roadside kiosks."
      ]
    }
  },
  {
    id: "higado-encebollado",
    category: "carnes",
    name: { es: "Hígado Encebollado", en: "Liver and Onions" },
    time: "25 min",
    servings: 4,
    ingredients: {
      es: [
        "1½ libras de hígado de res en filetes finos",
        "2 cebollas grandes, en ruedas",
        "3 dientes de ajo, majados",
        "2 cucharadas de vinagre",
        "1 cucharadita de adobo",
        "½ taza de agua",
        "3 cucharadas de aceite"
      ],
      en: [
        "1½ pounds beef liver in thin fillets",
        "2 large onions, sliced into rings",
        "3 garlic cloves, mashed",
        "2 tablespoons vinegar",
        "1 teaspoon adobo",
        "½ cup water",
        "3 tablespoons oil"
      ]
    },
    steps: {
      es: [
        "Adobe el hígado con el ajo, el vinagre y el adobo por 15 minutos.",
        "Dore los filetes en el aceite caliente 2 minutos por cada lado. No lo cocine de más, porque se endurece.",
        "Saque el hígado y en el mismo sartén cocine la cebolla hasta que esté transparente.",
        "Regrese el hígado, añada el agua, tape y cocine 3 minutos. Sirva con arroz blanco y tostones."
      ],
      en: [
        "Marinate the liver with the garlic, vinegar and adobo for 15 minutes.",
        "Brown the fillets in hot oil 2 minutes per side. Do not overcook or it gets tough.",
        "Remove the liver and cook the onion in the same skillet until translucent.",
        "Return the liver, add the water, cover and cook 3 minutes. Serve with white rice and tostones."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── AVES ──
  // ══════════════════════════════════════
  {
    id: "chicharrones-pollo",
    category: "aves",
    name: { es: "Chicharrones de Pollo", en: "Puerto Rican Fried Chicken Bites" },
    time: "40 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de pollo cortado en pedazos pequeños con hueso",
        "4 dientes de ajo, majados",
        "¼ taza de jugo de limón",
        "1 cucharada de adobo",
        "1 cucharadita de orégano",
        "2 cucharadas de ron (opcional)",
        "1 taza de harina de trigo",
        "Aceite para freír"
      ],
      en: [
        "3 pounds bone-in chicken cut into small pieces",
        "4 garlic cloves, mashed",
        "¼ cup lime juice",
        "1 tablespoon adobo",
        "1 teaspoon oregano",
        "2 tablespoons rum (optional)",
        "1 cup all-purpose flour",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Adobe el pollo con el ajo, el limón, el adobo, el orégano y el ron. Refrigere por lo menos 1 hora.",
        "Escurra el pollo y páselo por la harina, sacudiendo el exceso.",
        "Fría en aceite a 350 °F en tandas, por 12 a 15 minutos, hasta que esté dorado y bien cocido por dentro.",
        "Escurra sobre papel absorbente y sirva con limón y tostones."
      ],
      en: [
        "Marinate the chicken with the garlic, lime, adobo, oregano and rum. Refrigerate at least 1 hour.",
        "Drain the chicken and dredge it in the flour, shaking off the excess.",
        "Fry in 350 °F oil in batches for 12 to 15 minutes, until golden and fully cooked inside.",
        "Drain on paper towels and serve with lime wedges and tostones."
      ]
    }
  },
  {
    id: "pollo-escabeche",
    category: "aves",
    name: { es: "Pollo en Escabeche", en: "Pickled Chicken (Escabeche)" },
    time: "1 hr + reposo",
    servings: 6,
    ingredients: {
      es: [
        "3 libras de presas de pollo",
        "1 cucharada de adobo",
        "1 taza de aceite de oliva",
        "½ taza de vinagre",
        "2 cebollas grandes, en ruedas",
        "1 pimiento morrón, en tiras",
        "6 dientes de ajo, en lascas",
        "10 granos de pimienta",
        "2 hojas de laurel",
        "¼ taza de aceitunas rellenas"
      ],
      en: [
        "3 pounds chicken pieces",
        "1 tablespoon adobo",
        "1 cup olive oil",
        "½ cup vinegar",
        "2 large onions, sliced into rings",
        "1 red bell pepper, in strips",
        "6 garlic cloves, sliced",
        "10 black peppercorns",
        "2 bay leaves",
        "¼ cup stuffed olives"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con el adobo y hiérvalo en agua con sal, tapado, por 30 minutos. Escúrralo.",
        "En una olla, cocine a fuego bajo el aceite con la cebolla, el pimiento, el ajo, la pimienta y el laurel por 10 minutos.",
        "Añada el vinagre y las aceitunas y cocine 5 minutos más.",
        "Ponga el pollo en un envase de cristal y cúbralo con el escabeche caliente.",
        "Deje enfriar y refrigere por lo menos 12 horas antes de servir, frío o a temperatura ambiente."
      ],
      en: [
        "Season the chicken with the adobo and boil it, covered, in salted water for 30 minutes. Drain.",
        "In a pot, cook the oil over low heat with the onion, bell pepper, garlic, peppercorns and bay leaves for 10 minutes.",
        "Add the vinegar and olives and cook 5 minutes more.",
        "Place the chicken in a glass container and cover it with the hot escabeche.",
        "Let cool and refrigerate at least 12 hours before serving, cold or at room temperature."
      ]
    }
  },
  {
    id: "pollo-ajillo",
    category: "aves",
    name: { es: "Pollo al Ajillo", en: "Garlic Chicken" },
    time: "45 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de muslos de pollo",
        "10 dientes de ajo, en lascas",
        "¼ taza de aceite de oliva",
        "½ taza de vino blanco seco",
        "1 cucharadita de adobo",
        "1 hoja de laurel",
        "2 cucharadas de perejil picado"
      ],
      en: [
        "2 pounds chicken thighs",
        "10 garlic cloves, sliced",
        "¼ cup olive oil",
        "½ cup dry white wine",
        "1 teaspoon adobo",
        "1 bay leaf",
        "2 tablespoons chopped parsley"
      ]
    },
    steps: {
      es: [
        "Sazone el pollo con el adobo y dórelo en el aceite a fuego medio, 6 minutos por cada lado. Resérvelo.",
        "Baje el fuego y dore ligeramente el ajo en el mismo aceite, sin dejar que se queme.",
        "Añada el vino y el laurel, y raspe el fondo del sartén.",
        "Regrese el pollo, tape y cocine a fuego bajo 20 minutos.",
        "Espolvoree el perejil y sirva con arroz blanco o papas."
      ],
      en: [
        "Season the chicken with the adobo and brown it in the oil over medium heat, 6 minutes per side. Set aside.",
        "Lower the heat and lightly brown the garlic in the same oil without burning it.",
        "Add the wine and bay leaf, scraping the bottom of the pan.",
        "Return the chicken, cover and cook over low heat 20 minutes.",
        "Sprinkle with parsley and serve with white rice or potatoes."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── PESCADO Y MARISCOS ──
  // ══════════════════════════════════════
  {
    id: "ensalada-carrucho",
    category: "pescados",
    name: { es: "Ensalada de Carrucho", en: "Conch Salad" },
    time: "1 hr 15 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de carrucho limpio",
        "1 cebolla roja, picada fina",
        "1 pimiento verde, picado fino",
        "1 pimiento rojo, picado fino",
        "4 ajíes dulces, picados",
        "2 dientes de ajo, majados",
        "½ taza de aceite de oliva",
        "¼ taza de vinagre",
        "Jugo de 2 limones",
        "2 cucharadas de cilantro picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds cleaned conch",
        "1 red onion, finely chopped",
        "1 green bell pepper, finely chopped",
        "1 red bell pepper, finely chopped",
        "4 ajíes dulces (sweet peppers), chopped",
        "2 garlic cloves, mashed",
        "½ cup olive oil",
        "¼ cup vinegar",
        "Juice of 2 limes",
        "2 tablespoons chopped cilantro",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Ablande el carrucho golpeándolo con un mazo y hiérvalo en agua con sal por 1 hora, o hasta que esté tierno.",
        "Escúrralo, déjelo enfriar y córtelo en pedacitos.",
        "Mezcle el aceite, el vinagre, el limón, el ajo, la sal y la pimienta.",
        "Combine el carrucho con la cebolla, los pimientos, los ajíes y el cilantro, y vierta el aliño.",
        "Refrigere por lo menos 2 horas. Sirva frío con tostones."
      ],
      en: [
        "Tenderize the conch by pounding it with a mallet and boil it in salted water for 1 hour, or until tender.",
        "Drain, let cool and cut into small pieces.",
        "Whisk together the oil, vinegar, lime juice, garlic, salt and pepper.",
        "Combine the conch with the onion, bell peppers, ajíes and cilantro, and pour on the dressing.",
        "Refrigerate at least 2 hours. Serve cold with tostones."
      ]
    }
  },
  {
    id: "camarones-criolla",
    category: "pescados",
    name: { es: "Camarones a la Criolla", en: "Creole Shrimp" },
    time: "30 min",
    servings: 4,
    ingredients: {
      es: [
        "2 libras de camarones pelados y limpios",
        "¼ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 pimiento verde, en tiras",
        "1 cebolla, en ruedas",
        "3 dientes de ajo, majados",
        "¼ taza de vino blanco",
        "2 cucharadas de aceite de oliva",
        "¼ taza de aceitunas rellenas",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds peeled, deveined shrimp",
        "¼ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 green bell pepper, in strips",
        "1 onion, sliced into rings",
        "3 garlic cloves, mashed",
        "¼ cup white wine",
        "2 tablespoons olive oil",
        "¼ cup stuffed olives",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sofría en el aceite la cebolla, el pimiento y el ajo por 5 minutos.",
        "Añada el sofrito, la salsa de tomate, el vino y las aceitunas. Cocine 10 minutos a fuego bajo.",
        "Agregue los camarones y cocine 4 o 5 minutos, solo hasta que se pongan rosados.",
        "Pruebe la sal y sirva con arroz blanco o con mofongo."
      ],
      en: [
        "Sauté the onion, bell pepper and garlic in the oil for 5 minutes.",
        "Add the sofrito, tomato sauce, wine and olives. Cook 10 minutes over low heat.",
        "Add the shrimp and cook 4 to 5 minutes, just until they turn pink.",
        "Adjust the salt and serve with white rice or mofongo."
      ]
    }
  },
  {
    id: "bacalao-vizcaina",
    category: "pescados",
    name: { es: "Bacalao a la Vizcaína", en: "Salt Cod Vizcaína" },
    time: "1 hr + remojo",
    servings: 6,
    ingredients: {
      es: [
        "1½ libras de bacalao sin espinas",
        "3 papas medianas, en ruedas",
        "2 cebollas, en ruedas",
        "1 lata de 8 onzas de salsa de tomate",
        "1 pimiento rojo asado, en tiras",
        "4 dientes de ajo, en lascas",
        "½ taza de aceite de oliva",
        "¼ taza de aceitunas rellenas",
        "1 cucharada de alcaparras",
        "1 hoja de laurel"
      ],
      en: [
        "1½ pounds boneless salt cod",
        "3 medium potatoes, sliced",
        "2 onions, sliced into rings",
        "1 can (8 oz) tomato sauce",
        "1 roasted red pepper, in strips",
        "4 garlic cloves, sliced",
        "½ cup olive oil",
        "¼ cup stuffed olives",
        "1 tablespoon capers",
        "1 bay leaf"
      ]
    },
    steps: {
      es: [
        "Remoje el bacalao en agua fría de 8 a 12 horas, cambiando el agua varias veces. Hiérvalo 10 minutos y desmenúcelo en lascas grandes.",
        "Hierva las papas en agua con sal por 10 minutos, hasta que estén casi blandas.",
        "En un caldero, sofría en el aceite el ajo y la cebolla 5 minutos. Añada la salsa de tomate, el laurel, las aceitunas y las alcaparras.",
        "Acomode en capas las papas, el bacalao y el pimiento, cubriendo con la salsa.",
        "Tape y cocine a fuego bajo 20 minutos, sin revolver para que no se rompa. Sirva con arroz blanco o pan."
      ],
      en: [
        "Soak the cod in cold water 8 to 12 hours, changing the water several times. Boil 10 minutes and flake into large pieces.",
        "Boil the potatoes in salted water for 10 minutes, until almost tender.",
        "In a caldero, sauté the garlic and onion in the oil 5 minutes. Add the tomato sauce, bay leaf, olives and capers.",
        "Layer the potatoes, cod and roasted pepper, covering them with the sauce.",
        "Cover and cook over low heat 20 minutes without stirring so it doesn't break apart. Serve with white rice or bread."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── SOPAS ──
  // ══════════════════════════════════════
  {
    id: "sopon-garbanzos",
    category: "sopas",
    name: { es: "Sopón de Garbanzos", en: "Hearty Chickpea Soup" },
    time: "1 hr",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de garbanzos, escurridos",
        "½ libra de jamón de cocinar, en cubos",
        "¼ taza de sofrito",
        "2 papas, peladas y en cubos",
        "1 libra de calabaza, pelada y en cubos",
        "¼ repollo pequeño, picado",
        "1 sobre de sazón con culantro y achiote",
        "8 tazas de caldo de pollo",
        "Sal al gusto"
      ],
      en: [
        "2 cans (15 oz each) chickpeas, drained",
        "½ pound cooking ham, cubed",
        "¼ cup sofrito",
        "2 potatoes, peeled and cubed",
        "1 pound calabaza (West Indian pumpkin), peeled and cubed",
        "¼ small cabbage, chopped",
        "1 packet sazón with coriander and annatto",
        "8 cups chicken broth",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Dore el jamón en una olla grande y añada el sofrito. Sofría 3 minutos.",
        "Agregue el caldo, el sazón, la calabaza y las papas. Hierva y cocine a fuego medio 20 minutos.",
        "Añada los garbanzos y el repollo, y cocine 15 minutos más.",
        "Aplaste algunos pedazos de calabaza contra la olla para espesar el sopón. Pruebe la sal y sirva caliente."
      ],
      en: [
        "Brown the ham in a large pot and add the sofrito. Sauté 3 minutes.",
        "Add the broth, sazón, calabaza and potatoes. Bring to a boil and cook over medium heat 20 minutes.",
        "Add the chickpeas and cabbage and cook 15 minutes more.",
        "Mash some pumpkin pieces against the pot to thicken the soup. Adjust the salt and serve hot."
      ]
    }
  },
  {
    id: "sopa-vegetales",
    category: "sopas",
    name: { es: "Sopa de Vegetales", en: "Vegetable Soup" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 cucharadas de aceite de oliva",
        "¼ taza de sofrito",
        "2 zanahorias, en ruedas",
        "2 papas, en cubos",
        "1 chayote, pelado y en cubos",
        "1 taza de habichuelas tiernas picadas",
        "1 taza de maíz en grano",
        "1 lata de 8 onzas de salsa de tomate",
        "8 tazas de caldo de vegetales o de pollo",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 tablespoons olive oil",
        "¼ cup sofrito",
        "2 carrots, sliced",
        "2 potatoes, cubed",
        "1 chayote, peeled and cubed",
        "1 cup chopped green beans",
        "1 cup corn kernels",
        "1 can (8 oz) tomato sauce",
        "8 cups vegetable or chicken broth",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito en el aceite por 3 minutos.",
        "Añada el caldo, la salsa de tomate, las zanahorias, las papas y el chayote. Hierva.",
        "Baje el fuego y cocine 20 minutos.",
        "Agregue las habichuelas tiernas y el maíz, y cocine 10 minutos más. Sazone y sirva."
      ],
      en: [
        "Sauté the sofrito in the oil for 3 minutes.",
        "Add the broth, tomato sauce, carrots, potatoes and chayote. Bring to a boil.",
        "Lower the heat and cook 20 minutes.",
        "Add the green beans and corn and cook 10 minutes more. Season and serve."
      ]
    }
  },
  {
    id: "crema-calabaza",
    category: "sopas",
    name: { es: "Crema de Calabaza", en: "Cream of Pumpkin Soup" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de calabaza, pelada y en cubos",
        "1 cebolla, picada",
        "2 dientes de ajo, picados",
        "2 cucharadas de mantequilla",
        "4 tazas de caldo de pollo",
        "½ taza de leche evaporada o crema",
        "1 pizca de nuez moscada",
        "Sal y pimienta al gusto"
      ],
      en: [
        "2 pounds calabaza (West Indian pumpkin), peeled and cubed",
        "1 onion, chopped",
        "2 garlic cloves, chopped",
        "2 tablespoons butter",
        "4 cups chicken broth",
        "½ cup evaporated milk or cream",
        "1 pinch nutmeg",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Cocine la cebolla y el ajo en la mantequilla hasta que estén blandos.",
        "Añada la calabaza y el caldo. Hierva y cocine a fuego medio 20 minutos, hasta que la calabaza esté blanda.",
        "Licúe hasta obtener una crema suave (con cuidado, en tandas si está caliente).",
        "Regrese a la olla, añada la leche y la nuez moscada, y caliente sin hervir. Sazone y sirva."
      ],
      en: [
        "Cook the onion and garlic in the butter until soft.",
        "Add the pumpkin and broth. Bring to a boil and cook over medium heat 20 minutes, until the pumpkin is soft.",
        "Blend until smooth (carefully, in batches if hot).",
        "Return to the pot, add the milk and nutmeg, and heat without boiling. Season and serve."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── ARROCES ──
  // ══════════════════════════════════════
  {
    id: "arroz-blanco",
    category: "arroces",
    name: { es: "Arroz Blanco Boricua", en: "Puerto Rican White Rice" },
    time: "35 min",
    servings: 6,
    ingredients: {
      es: [
        "3 tazas de arroz de grano mediano",
        "3½ tazas de agua",
        "2 cucharadas de aceite",
        "1½ cucharaditas de sal"
      ],
      en: [
        "3 cups medium-grain rice",
        "3½ cups water",
        "2 tablespoons oil",
        "1½ teaspoons salt"
      ]
    },
    steps: {
      es: [
        "En un caldero, hierva el agua con el aceite y la sal.",
        "Añada el arroz lavado y cocine a fuego medio-alto, sin tapar, hasta que el agua se absorba y se vean hoyitos en la superficie.",
        "Voltee el arroz una sola vez con una cuchara, de abajo hacia arriba.",
        "Tape, baje el fuego al mínimo y cocine 20 minutos. Si le gusta el pegao, deje 5 minutos más sin revolver."
      ],
      en: [
        "In a caldero, bring the water to a boil with the oil and salt.",
        "Add the rinsed rice and cook over medium-high heat, uncovered, until the water is absorbed and small holes appear on the surface.",
        "Turn the rice over just once with a spoon, from the bottom up.",
        "Cover, lower the heat to the minimum and cook 20 minutes. For crispy pegao at the bottom, leave it 5 more minutes without stirring."
      ]
    }
  },
  {
    id: "arroz-longaniza",
    category: "arroces",
    name: { es: "Arroz con Longaniza", en: "Rice with Longaniza Sausage" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 libra de longaniza, en ruedas",
        "3 tazas de arroz de grano mediano",
        "½ taza de sofrito",
        "1 lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "¼ taza de aceitunas rellenas",
        "3½ tazas de agua",
        "1 cucharadita de sal"
      ],
      en: [
        "1 pound longaniza sausage, sliced",
        "3 cups medium-grain rice",
        "½ cup sofrito",
        "1 can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "¼ cup stuffed olives",
        "3½ cups water",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Dore la longaniza en un caldero a fuego medio por 5 minutos.",
        "Añada el sofrito, la salsa de tomate, el sazón y las aceitunas. Sofría 3 minutos.",
        "Agregue el agua y la sal, y deje hervir.",
        "Añada el arroz y cocine sin tapar hasta que se seque el agua. Voltee una vez.",
        "Tape y cocine a fuego bajo 20 minutos."
      ],
      en: [
        "Brown the longaniza in a caldero over medium heat for 5 minutes.",
        "Add the sofrito, tomato sauce, sazón and olives. Sauté 3 minutes.",
        "Add the water and salt and bring to a boil.",
        "Add the rice and cook uncovered until the water is absorbed. Turn once.",
        "Cover and cook over low heat 20 minutes."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── GRANOS ──
  // ══════════════════════════════════════
  {
    id: "frijoles-negros",
    category: "granos",
    name: { es: "Habichuelas Negras Guisadas", en: "Stewed Black Beans" },
    time: "40 min",
    servings: 6,
    ingredients: {
      es: [
        "2 latas de 15 onzas de habichuelas negras, sin escurrir",
        "¼ taza de sofrito",
        "2 onzas de jamón de cocinar, en cubitos",
        "1 lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "1 papa pequeña, en cubos",
        "1 taza de agua",
        "1 hoja de laurel",
        "1 cucharadita de orégano"
      ],
      en: [
        "2 cans (15 oz each) black beans, undrained",
        "¼ cup sofrito",
        "2 ounces cooking ham, diced",
        "1 can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "1 small potato, cubed",
        "1 cup water",
        "1 bay leaf",
        "1 teaspoon oregano"
      ]
    },
    steps: {
      es: [
        "Dore el jamón en una olla y añada el sofrito. Sofría 3 minutos.",
        "Agregue la salsa de tomate, el sazón, el orégano y el laurel.",
        "Añada las habichuelas con su líquido, la papa y el agua.",
        "Cocine a fuego medio-bajo 25 minutos, hasta que la papa esté blanda y el caldo espese. Sirva sobre arroz blanco."
      ],
      en: [
        "Brown the ham in a pot and add the sofrito. Sauté 3 minutes.",
        "Add the tomato sauce, sazón, oregano and bay leaf.",
        "Add the beans with their liquid, the potato and the water.",
        "Cook over medium-low heat 25 minutes, until the potato is tender and the broth thickens. Serve over white rice."
      ]
    }
  },
  {
    id: "garbanzos-chorizo",
    category: "granos",
    name: { es: "Garbanzos con Chorizo", en: "Chickpeas with Chorizo" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "2 latas de 15 onzas de garbanzos, escurridos",
        "2 chorizos españoles, en ruedas",
        "¼ taza de sofrito",
        "½ lata de 8 onzas de salsa de tomate",
        "1 papa, en cubos",
        "1½ tazas de caldo de pollo",
        "1 pizca de pimentón"
      ],
      en: [
        "2 cans (15 oz each) chickpeas, drained",
        "2 Spanish chorizos, sliced",
        "¼ cup sofrito",
        "½ can (8 oz) tomato sauce",
        "1 potato, cubed",
        "1½ cups chicken broth",
        "1 pinch paprika"
      ]
    },
    steps: {
      es: [
        "Dore el chorizo en una olla por 3 minutos para que suelte su grasa.",
        "Añada el sofrito y la salsa de tomate, y sofría 3 minutos.",
        "Agregue los garbanzos, la papa, el caldo y el pimentón.",
        "Cocine a fuego medio-bajo 20 minutos, hasta que la papa esté blanda. Sirva con arroz o pan."
      ],
      en: [
        "Brown the chorizo in a pot for 3 minutes to release its fat.",
        "Add the sofrito and tomato sauce and sauté 3 minutes.",
        "Add the chickpeas, potato, broth and paprika.",
        "Cook over medium-low heat 20 minutes, until the potato is tender. Serve with rice or bread."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── VEGETALES Y VIANDAS ──
  // ══════════════════════════════════════
  {
    id: "guingambo-guisado",
    category: "vegetales",
    name: { es: "Guingambó Guisado", en: "Stewed Okra" },
    time: "35 min",
    servings: 4,
    ingredients: {
      es: [
        "1 libra de guingambó (quimbombó), en ruedas",
        "2 cucharadas de vinagre",
        "¼ taza de sofrito",
        "2 onzas de jamón de cocinar, en cubitos",
        "1 lata de 8 onzas de salsa de tomate",
        "½ taza de agua",
        "2 cucharadas de aceite",
        "Sal al gusto"
      ],
      en: [
        "1 pound okra, sliced",
        "2 tablespoons vinegar",
        "¼ cup sofrito",
        "2 ounces cooking ham, diced",
        "1 can (8 oz) tomato sauce",
        "½ cup water",
        "2 tablespoons oil",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Remoje el guingambó en agua con el vinagre por 15 minutos para reducir la baba. Escurra.",
        "Dore el jamón en el aceite y añada el sofrito. Sofría 3 minutos.",
        "Agregue la salsa de tomate, el agua y el guingambó.",
        "Tape y cocine a fuego bajo 15 minutos, hasta que esté tierno. Sirva con arroz blanco."
      ],
      en: [
        "Soak the okra in water with the vinegar for 15 minutes to reduce the sliminess. Drain.",
        "Brown the ham in the oil and add the sofrito. Sauté 3 minutes.",
        "Add the tomato sauce, water and okra.",
        "Cover and cook over low heat 15 minutes, until tender. Serve with white rice."
      ]
    }
  },
  {
    id: "trifongo",
    category: "vegetales",
    name: { es: "Trifongo", en: "Trifongo (Three-Root Mash)" },
    time: "40 min",
    servings: 4,
    ingredients: {
      es: [
        "1 plátano verde",
        "1 plátano maduro",
        "1 libra de yuca, pelada y en trozos",
        "4 dientes de ajo",
        "2 cucharadas de aceite de oliva",
        "½ taza de chicharrón picado (opcional)",
        "½ taza de caldo de pollo caliente",
        "Aceite para freír",
        "Sal al gusto"
      ],
      en: [
        "1 green plantain",
        "1 ripe plantain",
        "1 pound yuca, peeled and in chunks",
        "4 garlic cloves",
        "2 tablespoons olive oil",
        "½ cup chopped chicharrón (optional)",
        "½ cup hot chicken broth",
        "Oil for frying",
        "Salt to taste"
      ]
    },
    steps: {
      es: [
        "Hierva la yuca en agua con sal por 20 minutos, hasta que esté blanda. Escurra y quite la vena del centro.",
        "Pele los plátanos, córtelos en ruedas de 1 pulgada y fríalos a 350 °F hasta que estén dorados y cocidos.",
        "Maje el ajo con la sal y el aceite de oliva en el pilón.",
        "Añada al pilón la yuca, los plátanos y el chicharrón en tandas, majando y humedeciendo con el caldo.",
        "Forme bolas o cúpulas y sirva caliente, solo o con carne o camarones guisados."
      ],
      en: [
        "Boil the yuca in salted water for 20 minutes, until tender. Drain and remove the center fiber.",
        "Peel the plantains, cut into 1 inch rounds and fry at 350 °F until golden and cooked through.",
        "Mash the garlic with the salt and olive oil in the pilón (mortar).",
        "Add the yuca, plantains and chicharrón to the pilón in batches, mashing and moistening with the broth.",
        "Shape into balls or domes and serve hot, plain or with stewed meat or shrimp."
      ]
    }
  },
  {
    id: "canoas-amarillo",
    category: "vegetales",
    name: { es: "Canoas de Amarillo", en: "Stuffed Ripe Plantain Boats (Canoas)" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "4 plátanos bien maduros",
        "1 libra de carne molida guisada (picadillo)",
        "1 taza de queso mozzarella rallado",
        "Aceite para freír"
      ],
      en: [
        "4 very ripe plantains",
        "1 pound cooked seasoned ground beef (picadillo)",
        "1 cup shredded mozzarella cheese",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F.",
        "Pele los plátanos enteros y fríalos a fuego medio, volteando, hasta que estén dorados, unos 8 minutos.",
        "Escúrralos y hágales un corte a lo largo sin llegar al fondo, abriéndolos como una canoa.",
        "Rellene con el picadillo y cubra con el queso.",
        "Hornee 15 minutos, hasta que el queso se derrita."
      ],
      en: [
        "Heat the oven to 350 °F.",
        "Peel the whole plantains and fry over medium heat, turning, until golden, about 8 minutes.",
        "Drain and cut a lengthwise slit without going through the bottom, opening them like a canoe.",
        "Fill with the picadillo and top with the cheese.",
        "Bake 15 minutes, until the cheese melts."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── CEREALES ──
  // ══════════════════════════════════════
  {
    id: "guanimes",
    category: "cereales",
    name: { es: "Guanimes de Maíz", en: "Cornmeal Guanimes" },
    time: "1 hr",
    servings: 8,
    ingredients: {
      es: [
        "2 tazas de harina de maíz fina",
        "1 lata de 13.5 onzas de leche de coco",
        "½ taza de agua tibia",
        "¼ taza de azúcar",
        "1 cucharadita de sal",
        "1 cucharadita de anís en grano (opcional)",
        "Hojas de plátano o papel de aluminio para envolver"
      ],
      en: [
        "2 cups fine cornmeal",
        "1 can (13.5 oz) coconut milk",
        "½ cup warm water",
        "¼ cup sugar",
        "1 teaspoon salt",
        "1 teaspoon anise seed (optional)",
        "Plantain leaves or aluminum foil for wrapping"
      ]
    },
    steps: {
      es: [
        "Mezcle la harina de maíz, el azúcar, la sal y el anís. Añada la leche de coco y el agua hasta formar una masa suave y manejable.",
        "Divida en 8 porciones y forme cilindros de unas 4 pulgadas.",
        "Envuelva cada uno en un pedazo de hoja de plátano (suavizada sobre la llama) o en papel de aluminio, y amárrelos.",
        "Hierva en agua con sal por 40 minutos.",
        "Sirva calientes, tradicionalmente con bacalao guisado."
      ],
      en: [
        "Mix the cornmeal, sugar, salt and anise. Add the coconut milk and water to form a soft, workable dough.",
        "Divide into 8 portions and shape into logs about 4 inches long.",
        "Wrap each one in a piece of plantain leaf (softened over a flame) or aluminum foil, and tie them.",
        "Boil in salted water for 40 minutes.",
        "Serve hot, traditionally with stewed salt cod."
      ]
    }
  },
  {
    id: "crema-arroz",
    category: "cereales",
    name: { es: "Cremita de Arroz", en: "Cream of Rice Porridge" },
    time: "15 min",
    servings: 2,
    ingredients: {
      es: [
        "2 tazas de leche",
        "3 cucharadas de crema de arroz",
        "2 cucharadas de azúcar",
        "1 pizca de sal",
        "1 raja de canela",
        "½ cucharadita de vainilla"
      ],
      en: [
        "2 cups milk",
        "3 tablespoons cream of rice",
        "2 tablespoons sugar",
        "1 pinch salt",
        "1 cinnamon stick",
        "½ teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Disuelva la crema de arroz en la leche fría, sin grumos.",
        "Añada la canela, el azúcar y la sal, y cocine a fuego medio revolviendo constantemente.",
        "Cuando hierva y espese, unos 5 minutos, retire del fuego y añada la vainilla.",
        "Sirva caliente con canela en polvo por encima."
      ],
      en: [
        "Dissolve the cream of rice in the cold milk, with no lumps.",
        "Add the cinnamon, sugar and salt, and cook over medium heat, stirring constantly.",
        "When it boils and thickens, about 5 minutes, remove from heat and add the vanilla.",
        "Serve hot with ground cinnamon on top."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── FRITURAS ──
  // ══════════════════════════════════════
  {
    id: "almojabanas",
    category: "entremeses",
    name: { es: "Almojábanas", en: "Rice Flour Cheese Fritters (Almojábanas)" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "2 tazas de harina de arroz",
        "1 taza de leche",
        "3 huevos",
        "1 taza de queso parmesano rallado",
        "½ taza de queso blanco del país rallado",
        "2 cucharaditas de polvo de hornear",
        "3 cucharadas de mantequilla",
        "½ cucharadita de sal",
        "Aceite para freír"
      ],
      en: [
        "2 cups rice flour",
        "1 cup milk",
        "3 eggs",
        "1 cup grated parmesan cheese",
        "½ cup grated local white cheese",
        "2 teaspoons baking powder",
        "3 tablespoons butter",
        "½ teaspoon salt",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Caliente la leche con la mantequilla y la sal hasta que hierva.",
        "Añada de golpe la harina de arroz y revuelva a fuego bajo hasta que la masa se despegue de la olla. Deje enfriar 10 minutos.",
        "Incorpore los huevos uno a uno, luego los quesos y el polvo de hornear.",
        "Fría cucharadas de masa en aceite a 350 °F, volteando, hasta que se inflen y doren.",
        "Escurra y sirva calientes."
      ],
      en: [
        "Heat the milk with the butter and salt until it boils.",
        "Add the rice flour all at once and stir over low heat until the dough pulls away from the pot. Let cool 10 minutes.",
        "Beat in the eggs one at a time, then the cheeses and baking powder.",
        "Fry spoonfuls of dough in 350 °F oil, turning, until puffed and golden.",
        "Drain and serve hot."
      ]
    }
  },
  {
    id: "croquetas-jamon",
    category: "entremeses",
    name: { es: "Croquetas de Jamón", en: "Ham Croquettes" },
    time: "1 hr + reposo",
    servings: 8,
    ingredients: {
      es: [
        "4 cucharadas de mantequilla",
        "½ taza de harina de trigo",
        "2 tazas de leche",
        "2 tazas de jamón de cocinar, picado muy fino",
        "¼ cebolla, rallada",
        "1 pizca de nuez moscada",
        "2 huevos batidos",
        "1½ tazas de galleta molida",
        "Aceite para freír",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 tablespoons butter",
        "½ cup all-purpose flour",
        "2 cups milk",
        "2 cups cooking ham, very finely chopped",
        "¼ onion, grated",
        "1 pinch nutmeg",
        "2 eggs, beaten",
        "1½ cups cracker crumbs",
        "Oil for frying",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Derrita la mantequilla, cocine la cebolla 2 minutos y añada la harina. Revuelva 1 minuto.",
        "Agregue la leche poco a poco, batiendo, y cocine hasta obtener una bechamel muy espesa.",
        "Añada el jamón, la nuez moscada, la sal y la pimienta. Extienda en un plato y refrigere por lo menos 2 horas.",
        "Forme croquetas alargadas, páselas por el huevo y luego por la galleta molida.",
        "Fría a 350 °F hasta que estén doradas. Escurra y sirva."
      ],
      en: [
        "Melt the butter, cook the onion 2 minutes and add the flour. Stir 1 minute.",
        "Add the milk little by little, whisking, and cook into a very thick béchamel.",
        "Add the ham, nutmeg, salt and pepper. Spread on a plate and refrigerate at least 2 hours.",
        "Shape into logs, dip in egg and then in cracker crumbs.",
        "Fry at 350 °F until golden. Drain and serve."
      ]
    }
  },
  {
    id: "empanadillas-jueyes",
    category: "entremeses",
    name: { es: "Empanadillas de Jueyes", en: "Land Crab Turnovers" },
    time: "1 hr",
    servings: 10,
    ingredients: {
      es: [
        "1 libra de carne de juey (o de cangrejo)",
        "¼ taza de sofrito",
        "½ lata de 8 onzas de salsa de tomate",
        "1 sobre de sazón con culantro y achiote",
        "2 cucharadas de aceitunas picadas",
        "10 discos para empanadillas",
        "Aceite para freír"
      ],
      en: [
        "1 pound land crab meat (or crab meat)",
        "¼ cup sofrito",
        "½ can (8 oz) tomato sauce",
        "1 packet sazón with coriander and annatto",
        "2 tablespoons chopped olives",
        "10 turnover dough discs",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Sofría el sofrito 3 minutos y añada la salsa de tomate, el sazón y las aceitunas.",
        "Agregue la carne de juey y cocine 10 minutos, hasta que esté casi seca. Deje enfriar.",
        "Ponga 2 cucharadas de relleno en cada disco, doble y selle los bordes con un tenedor.",
        "Fría a 350 °F hasta que doren por ambos lados. Escurra y sirva."
      ],
      en: [
        "Sauté the sofrito 3 minutes and add the tomato sauce, sazón and olives.",
        "Add the crab meat and cook 10 minutes, until almost dry. Let cool.",
        "Place 2 tablespoons of filling on each disc, fold and seal the edges with a fork.",
        "Fry at 350 °F until golden on both sides. Drain and serve."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── ENSALADAS ──
  // ══════════════════════════════════════
  {
    id: "ensalada-repollo",
    category: "ensaladas",
    name: { es: "Ensalada de Repollo", en: "Cabbage Salad (Coleslaw)" },
    time: "15 min + reposo",
    servings: 6,
    ingredients: {
      es: [
        "½ repollo mediano, rallado fino",
        "2 zanahorias, ralladas",
        "½ taza de mayonesa",
        "1 cucharada de vinagre",
        "1 cucharadita de azúcar",
        "Sal y pimienta al gusto"
      ],
      en: [
        "½ medium cabbage, finely shredded",
        "2 carrots, shredded",
        "½ cup mayonnaise",
        "1 tablespoon vinegar",
        "1 teaspoon sugar",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Mezcle la mayonesa, el vinagre, el azúcar, la sal y la pimienta.",
        "Combine con el repollo y la zanahoria.",
        "Refrigere 30 minutos antes de servir. Acompaña bien el pernil y el pollo."
      ],
      en: [
        "Mix the mayonnaise, vinegar, sugar, salt and pepper.",
        "Toss with the cabbage and carrot.",
        "Refrigerate 30 minutes before serving. Goes well with pernil and chicken."
      ]
    }
  },
  {
    id: "ensalada-remolacha",
    category: "ensaladas",
    name: { es: "Ensalada de Remolacha", en: "Beet Salad" },
    time: "50 min",
    servings: 4,
    ingredients: {
      es: [
        "4 remolachas medianas",
        "½ cebolla roja, en ruedas finas",
        "3 cucharadas de aceite de oliva",
        "2 cucharadas de vinagre",
        "1 cucharada de perejil picado",
        "Sal y pimienta al gusto"
      ],
      en: [
        "4 medium beets",
        "½ red onion, thinly sliced",
        "3 tablespoons olive oil",
        "2 tablespoons vinegar",
        "1 tablespoon chopped parsley",
        "Salt and pepper to taste"
      ]
    },
    steps: {
      es: [
        "Hierva las remolachas con cáscara por 40 minutos, hasta que estén blandas.",
        "Deje enfriar, pele y corte en ruedas o cubos.",
        "Mezcle con la cebolla, el aceite, el vinagre, la sal y la pimienta.",
        "Espolvoree el perejil y sirva fría."
      ],
      en: [
        "Boil the beets in their skins for 40 minutes, until tender.",
        "Let cool, peel and cut into slices or cubes.",
        "Toss with the onion, oil, vinegar, salt and pepper.",
        "Sprinkle with parsley and serve cold."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── POSTRES Y HELADOS ──
  // ══════════════════════════════════════
  {
    id: "piragua",
    category: "postres",
    name: { es: "Piragua de Tamarindo", en: "Tamarind Piragua (Shaved Ice)" },
    time: "30 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de pulpa de tamarindo",
        "2 tazas de agua",
        "1½ tazas de azúcar",
        "Hielo raspado (o triturado muy fino)",
        "6 vasos cónicos"
      ],
      en: [
        "1 cup tamarind pulp",
        "2 cups water",
        "1½ cups sugar",
        "Shaved ice (or very finely crushed ice)",
        "6 cone-shaped cups"
      ]
    },
    steps: {
      es: [
        "Hierva la pulpa de tamarindo en el agua por 10 minutos y cuele, apretando para sacar todo el sabor.",
        "Regrese el líquido a la olla con el azúcar y cocine a fuego medio 10 minutos, hasta formar un almíbar.",
        "Deje enfriar el almíbar completamente.",
        "Llene los vasos con hielo raspado apretado en forma de pirámide y bañe con el almíbar. Sirva de inmediato."
      ],
      en: [
        "Boil the tamarind pulp in the water for 10 minutes and strain, pressing to extract all the flavor.",
        "Return the liquid to the pot with the sugar and cook over medium heat 10 minutes, until it forms a syrup.",
        "Let the syrup cool completely.",
        "Pack the cups with shaved ice in a pyramid shape and pour the syrup over it. Serve right away."
      ]
    }
  },
  {
    id: "helado-coco",
    category: "postres",
    name: { es: "Helado de Coco", en: "Coconut Ice Cream" },
    time: "20 min + congelación",
    servings: 8,
    ingredients: {
      es: [
        "1 lata de 15 onzas de crema de coco",
        "1 lata de 13.5 onzas de leche de coco",
        "1 lata de 12 onzas de leche evaporada",
        "½ taza de coco rallado",
        "1 cucharadita de vainilla",
        "1 pizca de sal"
      ],
      en: [
        "1 can (15 oz) cream of coconut",
        "1 can (13.5 oz) coconut milk",
        "1 can (12 oz) evaporated milk",
        "½ cup shredded coconut",
        "1 teaspoon vanilla",
        "1 pinch salt"
      ]
    },
    steps: {
      es: [
        "Bata la crema de coco, la leche de coco, la leche evaporada, la vainilla y la sal.",
        "Añada el coco rallado.",
        "Congele en una máquina de helado según las instrucciones, o en un envase de metal, batiendo cada 45 minutos durante 3 horas para romper los cristales.",
        "Deje en el congelador hasta que esté firme y sirva."
      ],
      en: [
        "Whisk the cream of coconut, coconut milk, evaporated milk, vanilla and salt.",
        "Stir in the shredded coconut.",
        "Freeze in an ice cream maker following its instructions, or in a metal container, stirring every 45 minutes for 3 hours to break up the ice crystals.",
        "Keep in the freezer until firm and serve."
      ]
    }
  },
  {
    id: "bunuelos-viento",
    category: "postres",
    name: { es: "Buñuelos de Viento", en: "Puffed Fritters in Syrup (Buñuelos de Viento)" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de agua",
        "4 cucharadas de mantequilla",
        "1 taza de harina de trigo",
        "4 huevos",
        "1 pizca de sal",
        "1 taza de azúcar y ½ taza de agua para el almíbar",
        "1 raja de canela",
        "Aceite para freír"
      ],
      en: [
        "1 cup water",
        "4 tablespoons butter",
        "1 cup all-purpose flour",
        "4 eggs",
        "1 pinch salt",
        "1 cup sugar and ½ cup water for the syrup",
        "1 cinnamon stick",
        "Oil for frying"
      ]
    },
    steps: {
      es: [
        "Prepare el almíbar: hierva el azúcar con el agua y la canela por 10 minutos. Reserve.",
        "Hierva el agua con la mantequilla y la sal. Añada la harina de golpe y revuelva a fuego bajo hasta que la masa se despegue de la olla.",
        "Deje enfriar 5 minutos e incorpore los huevos uno a uno, batiendo bien.",
        "Fría cucharaditas de masa en aceite a 350 °F hasta que se inflen y doren.",
        "Escurra y sirva bañados en el almíbar."
      ],
      en: [
        "Make the syrup: boil the sugar with the water and cinnamon for 10 minutes. Set aside.",
        "Boil the water with the butter and salt. Add the flour all at once and stir over low heat until the dough pulls away from the pot.",
        "Let cool 5 minutes and beat in the eggs one at a time.",
        "Fry teaspoonfuls of dough in 350 °F oil until puffed and golden.",
        "Drain and serve drizzled with the syrup."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── REFRESCOS ──
  // ══════════════════════════════════════
  {
    id: "mabi",
    category: "bebidas",
    name: { es: "Mabí", en: "Mabí (Fermented Bark Drink)" },
    time: "30 min + 3 días",
    servings: 12,
    ingredients: {
      es: [
        "2 onzas de corteza de mabí",
        "1 raja de canela",
        "4 clavos de especia",
        "1 pedazo de jengibre de 1 pulgada",
        "3 litros de agua",
        "2 tazas de azúcar morena",
        "1 taza de mabí ya fermentado (la \"madre\"), si la tiene"
      ],
      en: [
        "2 ounces mabí bark",
        "1 cinnamon stick",
        "4 whole cloves",
        "1 piece ginger, 1 inch",
        "3 liters water",
        "2 cups brown sugar",
        "1 cup already-fermented mabí (the \"mother\"), if you have it"
      ]
    },
    steps: {
      es: [
        "Hierva la corteza con la canela, los clavos y el jengibre en 1 litro de agua por 20 minutos. Cuele.",
        "Disuelva el azúcar en el líquido caliente y añada el resto del agua.",
        "Deje enfriar y añada la madre de mabí si la tiene.",
        "Vierta en botellas o un envase limpio tapado sin apretar, y deje fermentar a temperatura ambiente de 2 a 3 días, hasta que haga espuma.",
        "Refrigere y sirva frío, batiendo antes para que espume. Guarde una taza como madre para la próxima vez."
      ],
      en: [
        "Boil the bark with the cinnamon, cloves and ginger in 1 liter of water for 20 minutes. Strain.",
        "Dissolve the sugar in the hot liquid and add the rest of the water.",
        "Let cool and add the mabí mother if you have it.",
        "Pour into clean bottles or a loosely covered container and let ferment at room temperature for 2 to 3 days, until foamy.",
        "Refrigerate and serve cold, shaking first so it foams. Save a cup as the mother for next time."
      ]
    }
  },
  {
    id: "horchata-ajonjoli",
    category: "bebidas",
    name: { es: "Horchata de Ajonjolí", en: "Sesame Seed Horchata" },
    time: "20 min + remojo",
    servings: 6,
    ingredients: {
      es: [
        "1 taza de semillas de ajonjolí",
        "6 tazas de agua",
        "½ taza de azúcar",
        "1 raja de canela",
        "½ cucharadita de vainilla",
        "Hielo"
      ],
      en: [
        "1 cup sesame seeds",
        "6 cups water",
        "½ cup sugar",
        "1 cinnamon stick",
        "½ teaspoon vanilla",
        "Ice"
      ]
    },
    steps: {
      es: [
        "Remoje el ajonjolí con la canela en 3 tazas de agua por lo menos 4 horas.",
        "Licúe el ajonjolí con el agua del remojo (sin la canela) hasta que esté muy fino.",
        "Cuele por un paño o colador fino, apretando bien.",
        "Añada el resto del agua, el azúcar y la vainilla. Sirva bien fría con hielo."
      ],
      en: [
        "Soak the sesame seeds with the cinnamon in 3 cups of water for at least 4 hours.",
        "Blend the sesame seeds with the soaking water (without the cinnamon) until very fine.",
        "Strain through a cloth or fine sieve, squeezing well.",
        "Add the rest of the water, the sugar and vanilla. Serve very cold over ice."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── PASTELES DULCES ──
  // ══════════════════════════════════════
  {
    id: "pastelillos-guayaba",
    category: "pasteles_dulces",
    name: { es: "Pastelillos de Guayaba", en: "Guava Turnovers" },
    time: "40 min",
    servings: 12,
    ingredients: {
      es: [
        "12 discos para empanadillas",
        "8 onzas de pasta de guayaba, en 12 lascas",
        "4 onzas de queso crema (opcional)",
        "Aceite para freír",
        "Azúcar en polvo para decorar"
      ],
      en: [
        "12 turnover dough discs",
        "8 ounces guava paste, in 12 slices",
        "4 ounces cream cheese (optional)",
        "Oil for frying",
        "Powdered sugar for dusting"
      ]
    },
    steps: {
      es: [
        "Ponga una lasca de guayaba (y un poco de queso crema, si desea) en el centro de cada disco.",
        "Doble y selle bien los bordes con un tenedor para que no se salga el relleno.",
        "Fría a 350 °F hasta que estén dorados por ambos lados.",
        "Escurra y espolvoree con azúcar en polvo. Sirva tibios."
      ],
      en: [
        "Place a slice of guava paste (and a little cream cheese, if desired) in the center of each disc.",
        "Fold and seal the edges well with a fork so the filling doesn't leak.",
        "Fry at 350 °F until golden on both sides.",
        "Drain and dust with powdered sugar. Serve warm."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── SALSAS ──
  // ══════════════════════════════════════
  {
    id: "ajilimojili",
    category: "salsas",
    name: { es: "Ajilimójili", en: "Ajilimójili (Sweet Pepper Garlic Sauce)" },
    time: "10 min",
    servings: 8,
    ingredients: {
      es: [
        "8 ajíes dulces, sin semillas",
        "1 pimiento verde pequeño, sin semillas",
        "6 dientes de ajo",
        "½ taza de aceite de oliva",
        "¼ taza de jugo de limón",
        "2 cucharadas de vinagre",
        "1 cucharadita de sal"
      ],
      en: [
        "8 ajíes dulces (sweet peppers), seeded",
        "1 small green bell pepper, seeded",
        "6 garlic cloves",
        "½ cup olive oil",
        "¼ cup lime juice",
        "2 tablespoons vinegar",
        "1 teaspoon salt"
      ]
    },
    steps: {
      es: [
        "Maje en el pilón (o triture en el procesador) los ajíes, el pimiento y el ajo con la sal.",
        "Añada el limón y el vinagre, y luego el aceite poco a poco, mezclando.",
        "Deje reposar 30 minutos para que se unan los sabores.",
        "Sirva sobre viandas hervidas, tostones, carnes asadas o pescado."
      ],
      en: [
        "Mash the ajíes, bell pepper and garlic with the salt in the pilón (or pulse in a food processor).",
        "Add the lime juice and vinegar, then the oil little by little, stirring.",
        "Let rest 30 minutes so the flavors come together.",
        "Serve over boiled root vegetables, tostones, grilled meats or fish."
      ]
    }
  },
  {
    id: "recaito",
    category: "salsas",
    name: { es: "Recaíto", en: "Recaíto (Culantro Base)" },
    time: "15 min",
    servings: 16,
    ingredients: {
      es: [
        "20 hojas de recao (culantro)",
        "1 manojo de cilantro",
        "10 ajíes dulces, sin semillas",
        "1 cebolla grande, en trozos",
        "1 pimiento cubanela, sin semillas",
        "1 cabeza de ajo, pelada"
      ],
      en: [
        "20 recao (culantro) leaves",
        "1 bunch cilantro",
        "10 ajíes dulces (sweet peppers), seeded",
        "1 large onion, in chunks",
        "1 cubanelle pepper, seeded",
        "1 head garlic, peeled"
      ]
    },
    steps: {
      es: [
        "Lave bien las hierbas y los vegetales.",
        "Triture todo en el procesador o la licuadora hasta formar una pasta verde (añada un chorrito de agua si hace falta).",
        "Guarde en frascos en la nevera hasta una semana, o congele en bandejas de hielo.",
        "Use 1 o 2 cucharadas como base de guisos, arroces y habichuelas."
      ],
      en: [
        "Wash the herbs and vegetables well.",
        "Blend everything in a food processor or blender into a green paste (add a splash of water if needed).",
        "Store in jars in the refrigerator for up to a week, or freeze in ice cube trays.",
        "Use 1 or 2 tablespoons as the base for stews, rice and beans."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── FRUTAS ──
  // ══════════════════════════════════════
  {
    id: "cascos-toronja",
    category: "frutas",
    name: { es: "Cascos de Toronja en Almíbar", en: "Candied Grapefruit Shells" },
    time: "2 hrs + reposo",
    servings: 8,
    ingredients: {
      es: [
        "4 toronjas grandes de cáscara gruesa",
        "4 tazas de azúcar",
        "4 tazas de agua",
        "2 rajas de canela",
        "5 clavos de especia",
        "Queso blanco del país para servir"
      ],
      en: [
        "4 large thick-skinned grapefruits",
        "4 cups sugar",
        "4 cups water",
        "2 cinnamon sticks",
        "5 whole cloves",
        "Local white cheese for serving"
      ]
    },
    steps: {
      es: [
        "Ralle ligeramente la cáscara amarilla de las toronjas. Córtelas en cuartos y saque la pulpa, dejando la parte blanca (los cascos).",
        "Remoje los cascos en agua por 12 horas, cambiando el agua varias veces, para quitar el amargor.",
        "Hierva los cascos en agua limpia 15 minutos, escurra y repita. Exprímalos suavemente.",
        "Prepare un almíbar con el azúcar, el agua, la canela y los clavos. Añada los cascos y cocine a fuego bajo 1 hora, hasta que estén brillosos y tiernos.",
        "Deje enfriar en el almíbar y sirva con queso blanco."
      ],
      en: [
        "Lightly grate off the yellow zest of the grapefruits. Cut into quarters and remove the pulp, leaving the white pith (the shells).",
        "Soak the shells in water for 12 hours, changing the water several times, to remove the bitterness.",
        "Boil the shells in fresh water 15 minutes, drain and repeat. Gently squeeze them.",
        "Make a syrup with the sugar, water, cinnamon and cloves. Add the shells and cook over low heat 1 hour, until glossy and tender.",
        "Let cool in the syrup and serve with white cheese."
      ]
    }
  },
  {
    id: "dulce-grosellas",
    category: "frutas",
    name: { es: "Dulce de Grosellas", en: "Candied Star Gooseberries" },
    time: "45 min",
    servings: 6,
    ingredients: {
      es: [
        "2 libras de grosellas maduras, lavadas",
        "2 tazas de azúcar",
        "2 tazas de agua",
        "1 raja de canela"
      ],
      en: [
        "2 pounds ripe star gooseberries, washed",
        "2 cups sugar",
        "2 cups water",
        "1 cinnamon stick"
      ]
    },
    steps: {
      es: [
        "Hierva las grosellas en agua por 5 minutos y escúrralas para suavizar su acidez.",
        "Prepare un almíbar con el azúcar, las 2 tazas de agua y la canela.",
        "Añada las grosellas y cocine a fuego bajo 30 minutos, hasta que tomen un color rojizo y el almíbar espese.",
        "Deje enfriar y guarde en frascos en la nevera."
      ],
      en: [
        "Boil the gooseberries in water for 5 minutes and drain to soften their tartness.",
        "Make a syrup with the sugar, the 2 cups of water and the cinnamon.",
        "Add the gooseberries and cook over low heat 30 minutes, until they turn reddish and the syrup thickens.",
        "Let cool and store in jars in the refrigerator."
      ]
    }
  },

  // ══════════════════════════════════════
  // ── BIZCOCHOS, PANES Y EMPAREDADOS ──
  // ══════════════════════════════════════
  {
    id: "bizcocho-coco",
    category: "bizcochos",
    name: { es: "Bizcocho de Coco", en: "Coconut Cake" },
    time: "1 hr",
    servings: 12,
    ingredients: {
      es: [
        "2½ tazas de harina de trigo",
        "2 cucharaditas de polvo de hornear",
        "½ cucharadita de sal",
        "1 taza de mantequilla, a temperatura ambiente",
        "1½ tazas de azúcar",
        "4 huevos",
        "1 taza de leche de coco",
        "1 taza de coco rallado",
        "1 cucharadita de vainilla"
      ],
      en: [
        "2½ cups all-purpose flour",
        "2 teaspoons baking powder",
        "½ teaspoon salt",
        "1 cup butter, at room temperature",
        "1½ cups sugar",
        "4 eggs",
        "1 cup coconut milk",
        "1 cup shredded coconut",
        "1 teaspoon vanilla"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 350 °F y engrase y enharine un molde de 9 x 13 pulgadas.",
        "Cierna la harina con el polvo de hornear y la sal.",
        "Bata la mantequilla con el azúcar hasta que esté cremosa. Añada los huevos uno a uno y la vainilla.",
        "Incorpore la harina alternando con la leche de coco, y luego el coco rallado.",
        "Hornee de 35 a 40 minutos, hasta que un palillo salga limpio. Deje enfriar antes de desmoldar."
      ],
      en: [
        "Heat the oven to 350 °F and grease and flour a 9 x 13 inch pan.",
        "Sift the flour with the baking powder and salt.",
        "Beat the butter with the sugar until creamy. Add the eggs one at a time and the vanilla.",
        "Fold in the flour alternating with the coconut milk, then the shredded coconut.",
        "Bake 35 to 40 minutes, until a toothpick comes out clean. Let cool before unmolding."
      ]
    }
  },
  {
    id: "pan-maiz",
    category: "panes",
    name: { es: "Pan de Maíz", en: "Cornbread" },
    time: "35 min",
    servings: 9,
    ingredients: {
      es: [
        "1 taza de harina de maíz",
        "1 taza de harina de trigo",
        "⅓ taza de azúcar",
        "1 cucharada de polvo de hornear",
        "½ cucharadita de sal",
        "1 taza de leche",
        "1 huevo",
        "⅓ taza de mantequilla derretida"
      ],
      en: [
        "1 cup cornmeal",
        "1 cup all-purpose flour",
        "⅓ cup sugar",
        "1 tablespoon baking powder",
        "½ teaspoon salt",
        "1 cup milk",
        "1 egg",
        "⅓ cup melted butter"
      ]
    },
    steps: {
      es: [
        "Caliente el horno a 400 °F y engrase un molde cuadrado de 8 pulgadas.",
        "Mezcle las harinas, el azúcar, el polvo de hornear y la sal.",
        "Bata la leche con el huevo y la mantequilla, y únalo a los secos sin batir de más.",
        "Vierta en el molde y hornee 20 minutos, hasta que dore. Sirva tibio con mantequilla."
      ],
      en: [
        "Heat the oven to 400 °F and grease an 8 inch square pan.",
        "Mix the flours, sugar, baking powder and salt.",
        "Whisk the milk with the egg and butter and stir into the dry ingredients without overmixing.",
        "Pour into the pan and bake 20 minutes, until golden. Serve warm with butter."
      ]
    }
  },
  {
    id: "sandwich-pernil",
    category: "emparedados",
    name: { es: "Sándwich de Pernil", en: "Roast Pork Sandwich" },
    time: "10 min",
    servings: 1,
    ingredients: {
      es: [
        "1 pan de agua (o 2 rebanadas de pan sobao)",
        "4 onzas de pernil asado, desmenuzado",
        "1 lasca de queso suizo",
        "2 ruedas de tomate",
        "Lechuga picada",
        "1 cucharada de mayo-ketchup",
        "1 cucharadita de mantequilla"
      ],
      en: [
        "1 pan de agua roll (or 2 slices pan sobao)",
        "4 ounces roast pernil, shredded",
        "1 slice Swiss cheese",
        "2 tomato slices",
        "Shredded lettuce",
        "1 tablespoon mayo-ketchup",
        "1 teaspoon butter"
      ]
    },
    steps: {
      es: [
        "Caliente el pernil en un sartén con un chorrito de su jugo.",
        "Abra el pan, úntelo con mantequilla por fuera y con mayo-ketchup por dentro.",
        "Rellene con el pernil, el queso, el tomate y la lechuga.",
        "Tueste en plancha o sandwichera, presionando, hasta que el pan esté crujiente y el queso derretido."
      ],
      en: [
        "Warm the pernil in a skillet with a splash of its juices.",
        "Split the bread, butter the outside and spread mayo-ketchup inside.",
        "Fill with the pernil, cheese, tomato and lettuce.",
        "Toast on a griddle or sandwich press, pressing down, until the bread is crisp and the cheese melts."
      ]
    }
  }
);
