/* Recetarios de Aquí · Planes de comida (#/planes).
 *
 * Consulta las recetas del recetario según un objetivo (rebajar, ganar masa
 * muscular, mantener, bajo en sodio, bajo en carbohidratos, bajo en azúcar, más
 * nutritivo), la época del año (Navidad, Cuaresma, verano, Acción de Gracias,
 * días de lluvia) y preferencias (vegetariano, rápidas), y arma un plan de
 * 1 o 7 días con desayuno, almuerzo, merienda y cena. El almuerzo y la cena son
 * plato principal + acompañantes según el objetivo (arroz y habichuelas para masa,
 * ensalada o vegetales para rebajar…), salvo los platos completos (asopao, paella,
 * arroz con…, sancocho, pastelón, sándwiches), que van solos. Usa la nutrición
 * ESTIMADA de cada receta (js/nutrition.js) y los alérgenos de
 * js/advisories.js. Si la persona pone sus datos, calcula las calorías del día
 * con Mifflin-St Jeor; si no, usa una meta típica del objetivo. Es orientación
 * general, no consejo médico: la vista lo dice siempre.
 *
 * Depende de globales de app.js (t, currentLang, $, esc, coverHTML,
 * readStore, writeStore). Los ajustes se guardan en este navegador y, con la sesión
 * abierta, en la cuenta del usuario en Firestore (js/auth.js: cloudSavePlan). */

const PLAN_STORE = "rcb.plan";

const PLAN_T = {
  es: {
    title: "Planes de comida",
    intro: "Elija un objetivo y el recetario le arma un plan con recetas de aquí. Las calorías y la proteína son estimaciones calculadas de los ingredientes.",
    goalLabel: "Objetivo",
    goals: {
      rebajar: ["Rebajar", "Menos calorías, más proteína y fibra; sin frituras."],
      masa: ["Ganar masa muscular", "Más proteína y calorías suficientes para crecer."],
      mantener: ["Mantener", "Platos balanceados para el día a día."],
      sodio: ["Bajo en sodio", "Para cuidar la presión: poco sodio por plato."],
      lowcarb: ["Bajo en carbohidratos", "Proteína y vegetales; pocos almidones y azúcar."],
      azucar: ["Bajo en azúcar", "Poca azúcar por plato y más fibra; para quien cuida el azúcar."],
      nutritivo: ["Más nutritivo", "Más fibra, proteína y vegetales; menos grasa saturada y sodio."],
      vegetariano: ["Vegetariano", "Sin carne, pollo ni pescado; con huevo, queso y mucho grano."],
      vegano: ["Vegano", "Sólo plantas: sin carne, lácteos, huevo ni miel; proteína de granos y tofu."],
      diabetes: ["Diabetes", "Carbohidratos contados por comida, más fibra y poca azúcar añadida."],
      dash: ["Presión alta (DASH)", "Poco sodio, más potasio y calcio: viandas, frutas, granos y lácteos."],
      colesterol: ["Colesterol alto", "Poca grasa saturada y colesterol, sin frituras; más fibra de granos, avena y vegetales."],
      autismo: ["Autismo", "No existe una dieta que trate el autismo. Este plan ayuda con la rutina, recetas sencillas de sabor suave, y cuida fibra, calcio y vitamina D."],
    },
    seasonLabel: "Época",
    seasons: { auto: "Según la fecha de hoy", todo: "Todo el año", navidad: "Navidad", cuaresma: "Cuaresma y Semana Santa", verano: "Verano y playa", gracias: "Acción de Gracias", lluvia: "Días de lluvia" },
    seasonNow: (name) => `Hoy: ${name}`,
    prefsLabel: "Preferencias",
    prefs: { quick: "Sólo rápidas (30 min o menos)" },
    diets: { normal: "Normal (de todo)", veg: "Vegetariano", vegan: "Vegano" },
    dietHelp: "Normal sugiere cualquier receta al azar según su objetivo.",
    periodDay: (d) => `Plan de hoy, ${d}. Mañana le sugerimos otro.`,
    periodWeek: (a, b, next) => `Plan del ${a} al ${b}. El ${next} empieza otro.`,
    savedNote: "Se guarda en su cuenta: al volver verá el mismo plan hasta que toque cambiarlo.",
    protLabel: "Proteína del almuerzo y la cena",
    protHelp: "Escoja una o varias; sin ninguna, entra de todo.",
    protOpts: { aves: "Aves (pollo, pavo)", pescado: "Pescado", mariscos: "Mariscos", res: "Res", cerdo: "Cerdo", cabro: "Cabro, cordero y conejo", granos: "Granos y vegetales" },
    seasonTitle: (name) => `De temporada: ${name}`,
    seasonSub: "Las recetas típicas de la época, incluidos postres y bebidas. En el plan salen primero las que cumplen su objetivo.",
    badges: { prot: "Alta en proteína", fib: "Alta en fibra", sugar: "Baja en azúcar", sodium: "Sodio moderado" },
    fiber: "fibra", sugarW: "azúcar",
    sidesTitle: "Acompañantes",
    withSide: "con",
    meTitle: "Mis datos (opcional)",
    meHelp: "Con sus datos se calcula la meta de calorías y proteína del día. Se guardan en su cuenta; sólo usted los ve.",
    sex: "Sexo", female: "Mujer", male: "Hombre",
    age: "Edad", weight: "Peso (libras)", height: "Estatura", feet: "pies", inches: "pulgadas",
    activity: "Actividad",
    activities: ["Poca (sentado casi todo el día)", "Ligera (1–3 días de ejercicio)", "Moderada (3–5 días)", "Alta (6–7 días o trabajo físico)"],
    avoid: "Evitar",
    avoidOpts: { gluten: "Gluten", milk: "Leche", egg: "Huevo", fish: "Pescado", shellfish: "Mariscos", nuts: "Maní y nueces", pork: "Cerdo" },
    targets: (kcal, p, custom) => `Meta del día: <strong>${kcal.toLocaleString("en-US")} calorías</strong> y <strong>${p} g de proteína</strong> ${custom ? "(calculada con sus datos)" : "(meta típica; ponga sus datos para ajustarla)"}.`,
    minWarn: "Por seguridad, la meta no baja de 1,200 calorías (mujeres) o 1,500 (hombres) sin supervisión profesional.",
    oneDay: "1 día", sevenDays: "7 días",
    another: "Otro plan",
    swap: "Cambiar",
    swapLabel: (name) => `Cambiar ${name} por otro sugerido`,
    swapTitle: (slot) => `Otros sugeridos para ${slot.toLowerCase()}`,
    swapSideTitle: "Otros acompañantes sugeridos",
    swapHelp: "Cumplen su objetivo y sus ajustes, y no se repiten en este día. Toque uno para ponerlo en el plan.",
    swapMore: "Ver más sugeridos",
    swapNone: "No hay más sugeridos con estos ajustes. Pruebe a quitar algo de «Evitar» o de la proteína.",
    swapClose: "Cerrar",
    swapView: "Ver receta",
    swapDone: (name) => `Listo: ${name} está en su plan.`,
    day: (n) => `Día ${n}`,
    slots: { desayuno: "Desayuno", almuerzo: "Almuerzo", merienda: "Merienda", cena: "Cena" },
    portions: (m) => (m === 1 ? "1 porción" : `${fmtPortion(m)} porciones`),
    perPortion: "por porción",
    total: "Total del día",
    kcal: "cal", prot: "proteína", carbs: "carbohidratos", fat: "grasa", sodium: "sodio",
    noMatch: "No hay suficientes recetas que cumplan el objetivo con esas exclusiones. Quite alguna para ver más opciones.",
    relaxed: "Con esas exclusiones no hay recetas que cumplan el objetivo en todas las comidas; en algunas se usó la que más se acerca.",
    moreTitle: "Recetas que encajan con su objetivo",
    moreSub: "Para consultar o cambiar alguna comida del plan. Ordenadas de mejor a peor para el objetivo.",
    disclaimer: "Orientación general basada en estimaciones de los ingredientes; no sustituye el consejo de un médico o nutricionista. Si está embarazada o lactando, es menor de edad, o tiene diabetes, enfermedad del riñón, del corazón u otra condición, consulte a un profesional antes de cambiar su alimentación.",
    goalNotes: {
      rebajar: "Para rebajar de forma segura se busca bajar de ½ a 2 libras por semana. Beba agua, camine y duerma bien.",
      masa: "La proteína sólo construye músculo junto con entrenamiento de fuerza (pesas o ejercicios con su propio peso) 3–4 veces por semana.",
      mantener: "Varíe las proteínas y los colores en el plato durante la semana.",
      sodio: "La recomendación general es menos de 2,300 mg de sodio al día (1,500 mg si su médico se lo indica). Pruebe antes de salar y use adobo sin sal.",
      lowcarb: "Si tiene diabetes o toma medicamentos para el azúcar, hable con su médico antes de bajar mucho los carbohidratos.",
      azucar: "Se busca menos de 25–50 g de azúcar añadida al día. Si tiene diabetes, su médico o educador en diabetes le dirá cuántos carbohidratos le tocan en cada comida.",
      nutritivo: "Un plato nutritivo tiene la mitad de vegetales, un cuarto de proteína y un cuarto de vianda, arroz o grano.",
      vegetariano: "Combine granos (habichuelas, garbanzos, gandules, lentejas) con arroz o maíz para una proteína completa; el huevo y el queso también suman.",
      vegano: "Incluya habichuelas, garbanzos, lentejas, tofu o quinoa en cada comida principal. La vitamina B12 sólo viene de alimentos fortificados o suplementos: hable con su médico. Coma el hierro de los granos y la espinaca con vitamina C (limón, china) para aprovecharlo mejor.",
      diabetes: "Se busca de 45 a 60 g de carbohidratos por comida (hasta 75 g si su meta pasa de 2,000 calorías) y de 15 a 20 g en la merienda (una «porción de carbohidrato» son 15 g). Su médico o educador en diabetes le dirá su cantidad exacta, sobre todo si usa insulina. Viandas, arroz, pan y frutas son carbohidratos: cuéntelos. Tome agua en vez de jugos, maltas o refrescos.",
      autismo: ["Realmente no existe una dieta que cure ni trate el autismo. Lo que sí ayuda en el día a día:",
        "Rutina: el desayuno y la merienda se repiten toda la semana; el almuerzo y la cena cambian poco a poco.",
        "Recetas sencillas y de sabor suave: sin picante, alcohol ni cafeína, y sin frituras.",
        "Ofrezca lo nuevo poco a poco: una porción pequeña al lado de algo que ya le gusta, sin obligar. Puede tomar 10 a 15 veces aceptar un alimento.",
        "Fibra y agua para evitar el estreñimiento, que es común: habichuelas, avena, frutas y viandas.",
        "Calcio y vitamina D: suelen quedarse cortos cuando se come poca variedad o sin leche. Un vaso de leche fortificada o un yogur ayuda.",
        "Las dietas sin gluten ni caseína no han mostrado beneficio en los estudios; si su familia la usa (en «Evitar»), hágalo con un profesional para no quedarse corto de calcio y vitamina D.",
        "Si come muy pocos alimentos, se atraganta, vomita o pierde peso, consulte al pediatra y a un terapeuta de alimentación (terapia ocupacional o del habla)."],
      colesterol: "Para bajar el colesterol LDL se busca menos de 6 % de las calorías de grasa saturada, nada de grasa trans y poco colesterol de la comida (yemas, vísceras, embutidos); la fibra soluble (habichuelas, garbanzos, avena, berenjena, guineo) ayuda. Si toma medicinas para el colesterol, siga las indicaciones de su médico.",
      dash: "El plan DASH baja la presión con poco sodio (menos de 2,300 mg al día, o 1,500 mg si su médico lo indica) y mucho potasio, calcio y fibra. Si tiene enfermedad del riñón o toma medicinas que suben el potasio, consulte antes a su médico."
    },
    people: "Personas en casa", printPlan: "Imprimir plan", shopPlan: "Lista de compras del plan",
    shopPlanDone: (n) => `Listo: ${n} recetas del plan en la lista de compras.`, shopPlanSee: "Ver la lista",
    moveTo: "Pasar a", moveHelp: (name) => `Pasar ${name} a otro día`, moved: "Cambiado de día.",
    leftover: "Sobras para mañana", leftoverLabel: "Sobras de ayer", leftoverDone: "Mañana almuerza las sobras.",
    leftoverConfirm: (a, b) => `El almuerzo de mañana es «${b}». ¿Cambiarlo por las sobras de «${a}»?`,
    keepWhich: "Su cuenta ya tiene un plan de comidas distinto al de este navegador.\n\nAceptar: conservar el plan de este navegador (reemplaza el de la cuenta).\nCancelar: usar el plan guardado en la cuenta.",
    ageKids: "Para menores de 14 años la meta se calcula sólo en el objetivo «Autismo» (de 2 a 13 años). En los demás se usa una meta típica de adulto, que no sirve para niños: consulte al pediatra.",
    ageTooLow: "La app no calcula metas para menores de 2 años. Consulte al pediatra.",
    healthTitle: "Orientación general, no consejo médico",
    healthText: "Este objetivo es para una condición de salud. Las metas y las recetas son estimados generales: no sustituyen a su médico ni a un nutricionista-dietista licenciado. Consúltelos antes de seguir el plan, sobre todo si usa insulina u otros medicamentos.",
    dgaTitle: "Guías Alimentarias 2025–2030 (USDA)", dgaSub: (k) => `Porciones de cada grupo para una dieta de ${k.toLocaleString("en-US")} calorías.`,
    dga: { veg: "Vegetales y viandas", fruit: "Frutas", wgrain: "Granos integrales", grain: "Granos (todos)", dairy: "Lácteos", prot: "Proteína" },
    dgaUnits: { veg: "tazas", fruit: "tazas", wgrain: "onzas", grain: "onzas", dairy: "tazas", prot: "g" },
    limits: "Límites del día", limSat: (p) => `Grasa saturada: ${p}% de las calorías (meta: menos de 10%)`,
    limAdd: (n) => (n ? `Azúcar añadida: ${n} comida(s) con más de 10 g (meta: 10 g o menos por comida)` : "Azúcar añadida: 10 g o menos en cada comida"),
    limNa: (mg) => `Sodio: ${mg.toLocaleString("en-US")} mg (meta: menos de 2,300 mg)`,
    limProt: (g, a, b) => `Proteína: ${g} g (las Guías: de ${a} a ${b} g para su peso)`,
    limK: (mg, ai) => `Potasio: ${mg.toLocaleString("en-US")} mg (meta DASH: ${ai.toLocaleString("en-US")} mg o más)`,
    limChol: (mg, max) => `Colesterol: ${mg.toLocaleString("en-US")} mg (meta: menos de ${max} mg)`,
    limSatChol: (p) => `Grasa saturada: ${p}% de las calorías (meta para el colesterol: menos de 6%)`,
    chol: "colesterol",
    limFib: (g, goal) => `Fibra: ${g} g (meta: ${goal} g o más)`,
    limCa: (mg, goal) => `Calcio: ${mg.toLocaleString("en-US")} mg (meta para su edad: ${goal.toLocaleString("en-US")} mg; un vaso de leche o un yogur suma unos 300 mg)`,
    limVd: (mcg) => `Vitamina D: ${mcg} mcg (meta: 15 mcg; casi siempre hace falta leche fortificada, huevo, pescado o sol)`,
    routine: "Rutina: el mismo desayuno y la misma merienda todos los días. Para cambiarlos, use «Cambiar» en el primer día.",
    targetsChild: (kcal, p) => `Meta del día: <strong>${kcal.toLocaleString("en-US")} calorías</strong> y <strong>${p} g de proteína</strong> (para su edad, según las Guías Alimentarias y la ración diaria recomendada para niños).`,
    limNaChild: (mg, max) => `Sodio: ${mg.toLocaleString("en-US")} mg (meta para su edad: menos de ${max.toLocaleString("en-US")} mg)`,
    limProtChild: (g, p) => `Proteína: ${g} g (ración recomendada para su edad: ${p} g)`,
    carbChoices: (g) => `${g} g de carbohidratos ≈ ${Math.round((g / 15) * 2) / 2} porciones de carbohidrato`,
    dgaNote: "Cálculo aproximado con los alimentos de cada receta (FoodData Central del USDA). La proteína y los lácteos se cuentan según su receta.",
    // v4.48: resumen arriba, objetivos agrupados, días en pestañas y revisión del día.
    goalGroups: { peso: "Peso", estilo: "Estilo de comida", salud: "Salud" },
    summary: (goal, kcal, p) => `<strong>${goal}</strong> · ${kcal.toLocaleString("en-US")} calorías · ${p} g de proteína`,
    summaryNoData: "meta típica", summaryData: "con sus datos",
    setupOpen: "Cambiar objetivo y ajustes", setupClose: "Ver mi plan",
    stepGoal: "1. Su objetivo", stepMore: "2. Sus datos y preferencias",
    dataCta: "Su meta es un estimado típico. Con su sexo, edad, peso y estatura se calcula la suya.",
    dataBtn: "Poner mis datos",
    dietByGoal: (g) => `La dieta la fija el objetivo «${g}».`,
    adjusted: "Por su peso, la proteína se calcula con el peso ajustado (el ideal más 40 % de la diferencia), como lo hace un nutricionista.",
    yields: (n) => `de las ${n} que rinde la receta`,
    sum: { kcal: "Calorías", prot: "Proteína", na: "Sodio", water: "Agua", veg: "Vegetales y viandas", fruit: "Frutas" },
    waterVal: (n) => `${n} vasos`, cups: "tazas",
    sumHelp: "Verde: dentro de la meta. Amarillo: cerca. Rojo: lejos.",
    plateOk: "Plato saludable: ½ plato de vegetales",
    plateTip: "Para el plato saludable, añada una ensalada o vegetales (½ plato).",
    protTip: { vegan: "Para llegar a la proteína: un vaso de leche de soya (7 g), un puñado de maní (7 g) o tofu.", veg: "Para llegar a la proteína: un yogur griego (15 g), un huevo (6 g) o un vaso de leche (8 g).", normal: "Para llegar a la proteína: un yogur griego (15 g), un huevo (6 g) o una lata pequeña de atún (20 g)." },
    naTip: (cap) => `El día pasa de ${cap.toLocaleString("en-US")} mg de sodio: use adobo sin sal y no añada sal en la mesa.`,
    fruitTip: "Falta fruta: añada una china, un guineo o una taza de lechosa en la merienda o el desayuno.",
    weekTitle: "Resumen de la semana",
    weekAvg: (k, p) => `En promedio: ${k}% de las calorías y ${p}% de la proteína de su meta.`,
    weekNa: (n, cap) => `${n} de 7 días con el sodio bajo ${cap.toLocaleString("en-US")} mg.`,
    weekFish: (n) => `Pescado o mariscos: ${n} ${n === 1 ? "vez" : "veces"} (se recomiendan 2 por semana).`,
    weekBeans: (n) => `Habichuelas, garbanzos, gandules o lentejas: ${n} ${n === 1 ? "vez" : "veces"} (se recomiendan 3 o más).`,
    weekProc: (n) => `Embutidos (salchichas, jamón, chorizo…): ${n} ${n === 1 ? "vez" : "veces"} (mejor 1 o menos).`,
    dayTabs: "Días del plan",
    seasonFold: (name, n) => `De temporada: ${name} (${n})`,
    moreFold: "Recetas que encajan con su objetivo"
  },
  en: {
    title: "Meal plans",
    intro: "Pick a goal and the cookbook builds a plan with local recipes. Calories and protein are estimates calculated from the ingredients.",
    goalLabel: "Goal",
    goals: {
      rebajar: ["Lose weight", "Fewer calories, more protein and fiber; no fried foods."],
      masa: ["Build muscle", "More protein and enough calories to grow."],
      mantener: ["Maintain", "Balanced dishes for every day."],
      sodio: ["Low sodium", "For blood pressure: little sodium per dish."],
      lowcarb: ["Low carb", "Protein and vegetables; few starches and sugar."],
      azucar: ["Low sugar", "Little sugar per dish and more fiber; for those watching sugar."],
      nutritivo: ["Most nutritious", "More fiber, protein and vegetables; less saturated fat and sodium."],
      vegetariano: ["Vegetarian", "No meat, chicken or fish; with eggs, cheese and plenty of beans."],
      vegano: ["Vegan", "Plants only: no meat, dairy, eggs or honey; protein from beans and tofu."],
      diabetes: ["Diabetes", "Carbs counted per meal, more fiber and little added sugar."],
      dash: ["High blood pressure (DASH)", "Low sodium, more potassium and calcium: root vegetables, fruit, beans and dairy."],
      colesterol: ["High cholesterol", "Little saturated fat and cholesterol, no fried foods; more fiber from beans, oats and vegetables."],
      autismo: ["Autism", "No diet treats autism. This plan helps with routine and simple mild-flavored recipes, and watches fiber, calcium and vitamin D."],
    },
    seasonLabel: "Season",
    seasons: { auto: "Based on today's date", todo: "All year", navidad: "Christmas", cuaresma: "Lent and Holy Week", verano: "Summer and beach", gracias: "Thanksgiving", lluvia: "Rainy days" },
    seasonNow: (name) => `Today: ${name}`,
    prefsLabel: "Preferences",
    prefs: { quick: "Quick only (30 min or less)" },
    diets: { normal: "Regular (everything)", veg: "Vegetarian", vegan: "Vegan" },
    dietHelp: "Regular suggests any recipe at random for your goal.",
    periodDay: (d) => `Today's plan, ${d}. Tomorrow we'll suggest another.`,
    periodWeek: (a, b, next) => `Plan from ${a} to ${b}. A new one starts ${next}.`,
    savedNote: "Saved to your account: you'll see the same plan until it's time to change it.",
    protLabel: "Lunch and dinner protein",
    protHelp: "Pick one or more; with none, everything goes.",
    protOpts: { aves: "Poultry (chicken, turkey)", pescado: "Fish", mariscos: "Shellfish", res: "Beef", cerdo: "Pork", cabro: "Goat, lamb and rabbit", granos: "Beans and vegetables" },
    seasonTitle: (name) => `In season: ${name}`,
    seasonSub: "The typical recipes of the season, including desserts and drinks. In the plan, the ones that fit your goal come first.",
    badges: { prot: "High protein", fib: "High fiber", sugar: "Low sugar", sodium: "Moderate sodium" },
    fiber: "fiber", sugarW: "sugar",
    sidesTitle: "Sides",
    withSide: "with",
    meTitle: "My details (optional)",
    meHelp: "Your details are used to calculate the day's calorie and protein target. They're saved to your account; only you can see them.",
    sex: "Sex", female: "Female", male: "Male",
    age: "Age", weight: "Weight (pounds)", height: "Height", feet: "feet", inches: "inches",
    activity: "Activity",
    activities: ["Low (sitting most of the day)", "Light (exercise 1–3 days)", "Moderate (3–5 days)", "High (6–7 days or physical work)"],
    avoid: "Avoid",
    avoidOpts: { gluten: "Gluten", milk: "Milk", egg: "Egg", fish: "Fish", shellfish: "Shellfish", nuts: "Peanuts and nuts", pork: "Pork" },
    targets: (kcal, p, custom) => `Daily target: <strong>${kcal.toLocaleString("en-US")} calories</strong> and <strong>${p} g protein</strong> ${custom ? "(calculated from your details)" : "(typical target; add your details to adjust it)"}.`,
    minWarn: "For safety, the target doesn't go below 1,200 calories (women) or 1,500 (men) without professional supervision.",
    oneDay: "1 day", sevenDays: "7 days",
    another: "Another plan",
    swap: "Change",
    swapLabel: (name) => `Change ${name} for another suggestion`,
    swapTitle: (slot) => `Other suggestions for ${slot.toLowerCase()}`,
    swapSideTitle: "Other suggested sides",
    swapHelp: "They fit your goal and settings and aren't repeated that day. Tap one to put it in your plan.",
    swapMore: "Show more suggestions",
    swapNone: "No more suggestions with these settings. Try removing something from “Avoid” or the protein.",
    swapClose: "Close",
    swapView: "See recipe",
    swapDone: (name) => `Done: ${name} is in your plan.`,
    day: (n) => `Day ${n}`,
    slots: { desayuno: "Breakfast", almuerzo: "Lunch", merienda: "Snack", cena: "Dinner" },
    portions: (m) => (m === 1 ? "1 serving" : `${fmtPortion(m)} servings`),
    perPortion: "per serving",
    total: "Day total",
    kcal: "cal", prot: "protein", carbs: "carbs", fat: "fat", sodium: "sodium",
    noMatch: "Not enough recipes meet the goal with those exclusions. Remove one to see more options.",
    relaxed: "With those exclusions no recipes meet the goal for every meal; for some, the closest one was used.",
    moreTitle: "Recipes that fit your goal",
    moreSub: "To browse or swap a meal in the plan. Sorted from best to worst for the goal.",
    disclaimer: "General guidance based on ingredient estimates; it doesn't replace advice from a doctor or dietitian. If you're pregnant or breastfeeding, under 18, or have diabetes, kidney or heart disease or another condition, talk to a professional before changing how you eat.",
    goalNotes: {
      rebajar: "Safe weight loss is about ½ to 2 pounds a week. Drink water, walk and sleep well.",
      masa: "Protein only builds muscle together with strength training (weights or bodyweight exercises) 3–4 times a week.",
      mantener: "Vary proteins and colors on the plate through the week.",
      sodio: "The general guideline is under 2,300 mg of sodium a day (1,500 mg if your doctor says so). Taste before salting and use salt-free adobo.",
      lowcarb: "If you have diabetes or take blood-sugar medication, talk to your doctor before cutting carbs a lot.",
      azucar: "Aim for under 25–50 g of added sugar a day. If you have diabetes, your doctor or diabetes educator will tell you how many carbs fit each meal.",
      nutritivo: "A nutritious plate is half vegetables, a quarter protein and a quarter root vegetable, rice or grain.",
      vegetariano: "Pair beans, chickpeas, pigeon peas or lentils with rice or corn for complete protein; eggs and cheese help too.",
      vegano: "Include beans, chickpeas, lentils, tofu or quinoa at every main meal. Vitamin B12 only comes from fortified foods or supplements: talk to your doctor. Eat iron from beans and spinach with vitamin C (lime, orange) to absorb it better.",
      diabetes: "The usual aim is 45 to 60 g of carbs per meal (up to 75 g if your target is over 2,000 calories) and 15 to 20 g for a snack (one “carb choice” is 15 g). Your doctor or diabetes educator will give you your exact amount, especially if you use insulin. Root vegetables, rice, bread and fruit are carbs: count them. Drink water instead of juice, malta or soda.",
      autismo: ["There really is no diet that cures or treats autism. What does help day to day:",
        "Routine: breakfast and snack repeat all week; lunch and dinner change little by little.",
        "Simple, mild-flavored recipes: no spicy food, alcohol or caffeine, and no fried foods.",
        "Offer new foods slowly: a small portion next to something already liked, without forcing. It can take 10 to 15 tries to accept a food.",
        "Fiber and water to prevent constipation, which is common: beans, oats, fruit and root vegetables.",
        "Calcium and vitamin D often run low with little variety or no dairy. A glass of fortified milk or a yogurt helps.",
        "Gluten-free, casein-free diets haven't shown benefit in studies; if your family uses one (under “Avoid”), do it with a professional so calcium and vitamin D don't run short.",
        "If very few foods are eaten, or there's choking, vomiting or weight loss, see the pediatrician and a feeding therapist (occupational or speech therapy)."],
      colesterol: "To lower LDL cholesterol, aim for under 6% of calories from saturated fat, no trans fat and little dietary cholesterol (egg yolks, organ meats, cured meats); soluble fiber (beans, chickpeas, oats, eggplant, bananas) helps. If you take cholesterol medicine, follow your doctor's instructions.",
      dash: "The DASH plan lowers blood pressure with little sodium (under 2,300 mg a day, or 1,500 mg if your doctor says so) and plenty of potassium, calcium and fiber. If you have kidney disease or take medicine that raises potassium, ask your doctor first."
    },
    people: "People at home", printPlan: "Print plan", shopPlan: "Plan shopping list",
    shopPlanDone: (n) => `Done: ${n} plan recipes on the shopping list.`, shopPlanSee: "See the list",
    moveTo: "Move to", moveHelp: (name) => `Move ${name} to another day`, moved: "Moved to another day.",
    leftover: "Leftovers tomorrow", leftoverLabel: "Yesterday's leftovers", leftoverDone: "Tomorrow's lunch is the leftovers.",
    leftoverConfirm: (a, b) => `Tomorrow's lunch is “${b}”. Replace it with the leftovers of “${a}”?`,
    keepWhich: "Your account already has a meal plan that's different from the one in this browser.\n\nOK: keep this browser's plan (replaces the one in your account).\nCancel: use the plan saved in your account.",
    ageKids: "For children under 14, the target is only calculated in the “Autism” goal (ages 2 to 13). The other goals use a typical adult target, which isn't right for children: ask the pediatrician.",
    ageTooLow: "The app doesn't calculate targets for children under 2. Ask the pediatrician.",
    healthTitle: "General guidance, not medical advice",
    healthText: "This goal is for a health condition. The targets and recipes are general estimates: they don't replace your doctor or a licensed dietitian. Check with them before following the plan, especially if you use insulin or other medication.",
    dgaTitle: "Dietary Guidelines 2025–2030 (USDA)", dgaSub: (k) => `Servings of each food group for a ${k.toLocaleString("en-US")}-calorie diet.`,
    dga: { veg: "Vegetables", fruit: "Fruit", wgrain: "Whole grains", grain: "Grains (all)", dairy: "Dairy", prot: "Protein" },
    dgaUnits: { veg: "cups", fruit: "cups", wgrain: "oz", grain: "oz", dairy: "cups", prot: "g" },
    limits: "Daily limits", limSat: (p) => `Saturated fat: ${p}% of calories (goal: under 10%)`,
    limAdd: (n) => (n ? `Added sugar: ${n} meal(s) over 10 g (goal: 10 g or less per meal)` : "Added sugar: 10 g or less at every meal"),
    limNa: (mg) => `Sodium: ${mg.toLocaleString("en-US")} mg (goal: under 2,300 mg)`,
    limProt: (g, a, b) => `Protein: ${g} g (Guidelines: ${a} to ${b} g for your weight)`,
    limK: (mg, ai) => `Potassium: ${mg.toLocaleString("en-US")} mg (DASH goal: ${ai.toLocaleString("en-US")} mg or more)`,
    limChol: (mg, max) => `Cholesterol: ${mg.toLocaleString("en-US")} mg (goal: under ${max} mg)`,
    limSatChol: (p) => `Saturated fat: ${p}% of calories (cholesterol goal: under 6%)`,
    chol: "cholesterol",
    limFib: (g, goal) => `Fiber: ${g} g (goal: ${goal} g or more)`,
    limCa: (mg, goal) => `Calcium: ${mg.toLocaleString("en-US")} mg (goal for the age: ${goal.toLocaleString("en-US")} mg; a glass of milk or a yogurt adds about 300 mg)`,
    limVd: (mcg) => `Vitamin D: ${mcg} mcg (goal: 15 mcg; fortified milk, eggs, fish or sun are usually needed)`,
    routine: "Routine: the same breakfast and snack every day. To change them, use “Change” on the first day.",
    targetsChild: (kcal, p) => `Daily target: <strong>${kcal.toLocaleString("en-US")} calories</strong> and <strong>${p} g protein</strong> (for the age, from the Dietary Guidelines and the children's recommended allowance).`,
    limNaChild: (mg, max) => `Sodium: ${mg.toLocaleString("en-US")} mg (goal for the age: under ${max.toLocaleString("en-US")} mg)`,
    limProtChild: (g, p) => `Protein: ${g} g (recommended for the age: ${p} g)`,
    carbChoices: (g) => `${g} g carbs ≈ ${Math.round((g / 15) * 2) / 2} carb choices`,
    dgaNote: "Approximate, from each recipe's ingredients (USDA FoodData Central). Protein and dairy are counted from the recipe.",
    goalGroups: { peso: "Weight", estilo: "Eating style", salud: "Health" },
    summary: (goal, kcal, p) => `<strong>${goal}</strong> · ${kcal.toLocaleString("en-US")} calories · ${p} g protein`,
    summaryNoData: "typical target", summaryData: "from your details",
    setupOpen: "Change goal and settings", setupClose: "See my plan",
    stepGoal: "1. Your goal", stepMore: "2. Your details and preferences",
    dataCta: "Your target is a typical estimate. Your sex, age, weight and height give you your own.",
    dataBtn: "Add my details",
    dietByGoal: (g) => `The diet is set by the “${g}” goal.`,
    adjusted: "Because of your weight, protein uses the adjusted weight (ideal plus 40% of the difference), as a dietitian does.",
    yields: (n) => `of the ${n} the recipe makes`,
    sum: { kcal: "Calories", prot: "Protein", na: "Sodium", water: "Water", veg: "Vegetables (incl. starchy)", fruit: "Fruit" },
    waterVal: (n) => `${n} glasses`, cups: "cups",
    sumHelp: "Green: on target. Yellow: close. Red: far off.",
    plateOk: "Healthy plate: ½ plate vegetables",
    plateTip: "For a healthy plate, add a salad or vegetables (½ plate).",
    protTip: { vegan: "To reach your protein: a glass of soy milk (7 g), a handful of peanuts (7 g) or tofu.", veg: "To reach your protein: a Greek yogurt (15 g), an egg (6 g) or a glass of milk (8 g).", normal: "To reach your protein: a Greek yogurt (15 g), an egg (6 g) or a small can of tuna (20 g)." },
    naTip: (cap) => `The day goes over ${cap.toLocaleString("en-US")} mg of sodium: use salt-free adobo and don't salt at the table.`,
    fruitTip: "Fruit is short: add an orange, a banana or a cup of papaya at snack or breakfast.",
    weekTitle: "Week summary",
    weekAvg: (k, p) => `On average: ${k}% of your calorie and ${p}% of your protein target.`,
    weekNa: (n, cap) => `${n} of 7 days with sodium under ${cap.toLocaleString("en-US")} mg.`,
    weekFish: (n) => `Fish or seafood: ${n} ${n === 1 ? "time" : "times"} (2 a week recommended).`,
    weekBeans: (n) => `Beans, chickpeas, pigeon peas or lentils: ${n} ${n === 1 ? "time" : "times"} (3 or more recommended).`,
    weekProc: (n) => `Processed meats (sausage, ham, chorizo…): ${n} ${n === 1 ? "time" : "times"} (best 1 or fewer).`,
    dayTabs: "Plan days",
    seasonFold: (name, n) => `In season: ${name} (${n})`,
    moreFold: "Recipes that fit your goal"
  }
};
const pt = () => PLAN_T[currentLang];
// En Puerto Rico los miles llevan coma (3,100), también en español.
function fmtPortion(m) {
  const whole = Math.floor(m), half = m - whole >= 0.5;
  if (!whole) return "½";
  return half ? `${whole}½` : String(whole);
}

/* ── Objetivos: meta típica, ajuste sobre el gasto, proteína por kilo y criterios por comida ── */
const MAIN_CATS = ["carnes", "aves", "pescados", "arroces", "sopas", "pastas", "vegetales", "ensaladas", "emparedados", "granos"];
const SLOTS = [
  { key: "desayuno", share: 0.25 },
  { key: "almuerzo", share: 0.35 },
  { key: "merienda", share: 0.10 },
  { key: "cena", share: 0.30 }
];
const PLAN_GOALS = {
  rebajar: {
    typical: 1600, adjust: -0.2, protPerKg: 1.6, maxPortion: 1.5, noFried: true,
    ok: { desayuno: (n) => n.kcal <= 450 && n.p >= 10, main: (n) => n.kcal >= 180 && n.kcal <= 600 && n.p >= 20 && n.s <= 15, merienda: (n) => n.kcal <= 250 && n.s <= 20 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 100 + n.fib * 2 - n.sat * 0.5
  },
  masa: {
    typical: 2700, adjust: 0.12, protPerKg: 2.0, maxPortion: 2.5,
    ok: { desayuno: (n) => n.p >= 15, main: (n) => n.p >= 30 && n.kcal >= 250, merienda: (n) => n.p >= 8 || n.kcal >= 250 },
    score: (n) => n.p + n.kcal / 60
  },
  mantener: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 2,
    ok: { desayuno: (n) => n.kcal >= 180 && n.kcal <= 600, main: (n) => n.kcal >= 280 && n.kcal <= 800 && n.p >= 15 && n.sat <= 12, merienda: (n) => n.kcal <= 320 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 60 + n.fib - Math.abs(n.kcal - 550) / 100 - n.sat * 0.3
  },
  sodio: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 1.5,
    ok: { desayuno: (n) => n.na <= 400, main: (n) => n.na <= 600 && n.p >= 12 && n.kcal >= 200, merienda: (n) => n.na <= 200 },
    score: (n) => -n.na / 80 + n.p / 4 + n.fib
  },
  lowcarb: {
    typical: 1800, adjust: -0.1, protPerKg: 1.6, maxPortion: 1.5,
    ok: { desayuno: (n) => n.c <= 20 && n.p >= 10, main: (n) => n.c <= 25 && n.p >= 18, merienda: (n) => n.c <= 15 },
    score: (n) => n.p - n.c * 0.8 + n.fib
  },
  azucar: {
    typical: 1800, adjust: -0.05, protPerKg: 1.3, maxPortion: 1.5,
    ok: { desayuno: (n) => n.s <= 10, main: (n) => n.s <= 8 && n.p >= 15 && n.kcal >= 200, merienda: (n) => n.s <= 10 },
    score: (n) => -n.s * 1.5 + n.fib * 2 + n.p / 4
  },
  nutritivo: {
    typical: 2000, adjust: 0, protPerKg: 1.3, maxPortion: 2,
    ok: { desayuno: (n) => n.kcal >= 150 && n.sat <= 8, main: (n) => n.p >= 18 && n.fib >= 3 && n.sat <= 10 && n.na <= 1200, merienda: (n) => n.fib >= 2 || n.p >= 8 },
    score: (n) => n.fib * 3 + n.p / 3 - n.sat - n.na / 500 - n.s / 4
  },
  vegetariano: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 2, diet: "veg",
    ok: { desayuno: (n) => n.kcal >= 150, main: (n) => n.kcal >= 250 && n.p >= 10, merienda: (n) => n.kcal <= 400 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 60 + n.fib * 1.5 - n.sat * 0.3
  },
  vegano: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 2, diet: "vegan",
    ok: { desayuno: (n) => n.kcal >= 120, main: (n) => n.kcal >= 220 && n.p >= 8, merienda: (n) => n.kcal <= 400 },
    score: (n) => (n.p / Math.max(n.kcal, 50)) * 70 + n.fib * 2 - n.sat * 0.3
  },
  // Diabetes: carbohidratos contados (45–60 g por comida, 15–20 g en la merienda), fibra y poca azúcar añadida.
  diabetes: {
    typical: 1800, adjust: -0.05, protPerKg: 1.2, maxPortion: 1.5, carbMeal: 60, carbSnack: 20,
    ok: { desayuno: (n) => n.c <= 45 && n.add <= 10, main: (n) => n.c <= 45 && n.p >= 15 && n.add <= 10, merienda: (n) => n.c <= 20 && n.add <= 5 },
    score: (n) => n.fib * 2 + n.p / 3 - n.add * 1.5 - Math.max(0, n.c - 30) / 3
  },
  // DASH (presión alta): poco sodio y grasa saturada; más potasio, calcio y fibra.
  dash: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 1.5, dash: true,
    ok: { desayuno: (n) => n.na <= 400 && n.sat <= 5, main: (n) => n.na <= 600 && n.sat <= 6 && n.p >= 15 && n.kcal >= 200, merienda: (n) => n.na <= 200 },
    score: (n) => n.k / 150 + n.fib * 2 + n.ca / 100 - n.na / 100 - n.sat
  },
  // Colesterol alto: grasa saturada bajo 6 % de las calorías (Asociación Americana del Corazón), poco colesterol de la
  // comida y sin grasa trans ni frituras; más fibra (la soluble de granos y avena baja el LDL). Con tope de sodio
  // por comida, porque el corazón también lo pide.
  colesterol: {
    typical: 2000, adjust: 0, protPerKg: 1.2, maxPortion: 2, noFried: true, chol: true,
    ok: { desayuno: (n) => n.sat <= 3 && n.chol <= 60 && n.trans < 0.5 && n.na <= 500, main: (n) => n.sat <= 3.5 && n.chol <= 80 && n.trans < 0.5 && n.na <= 800 && n.p >= 15 && n.kcal >= 200, merienda: (n) => n.sat <= 2 && n.chol <= 30 && n.na <= 300 },
    score: (n) => n.fib * 2.5 + n.p / 4 - n.sat * 2.5 - n.chol / 25 - n.trans * 5
  },
  // Autismo: no hay dieta que lo trate. Rutina (desayuno y merienda iguales toda la semana), recetas sencillas
  // (no "elaboradas", hasta 12 ingredientes), sabor suave (sin picante) y aptas para niños (sin alcohol, cafeína,
  // huevo o pescado crudo ni tés de riesgo); la puntuación premia fibra, calcio y vitamina D y castiga el azúcar
  // añadida y los muchos ingredientes. Acepta edades de 2 a 13 años (planTargets).
  autismo: {
    typical: 1800, adjust: 0, protPerKg: 1.2, maxPortion: 2, routine: true, kids: true, noFried: true,
    only: (r) => r.ingredients.es.length <= 12 && (typeof recipeLevel !== "function" || recipeLevel(r) !== "hard") && !SPICY_RX.test(planNorm(r.ingredients.es.join(" ") + " " + r.name.es)) && kidsOk(r),
    ok: { desayuno: (n) => n.kcal >= 150 && n.add <= 10 && n.na <= 450, main: (n) => n.kcal >= 200 && n.p >= 12 && n.add <= 10 && n.na <= 600, merienda: (n) => n.add <= 10 && n.na <= 250 && (n.ca >= 100 || n.fib >= 3) },
    score: (n) => n.fib * 1.5 + n.ca / 30 + n.vd * 3 + n.p / 4 - n.add
  }
};
const SPICY_RX = /\b(pique|picante|aji picante|ajies picantes|jalapen|chiles?\b|hojuelas de aji|cayena|habanero|chipotle|sriracha|wasabi|curry)/;
const kidsOk = (r) => typeof sKidSafe !== "function" || sKidSafe(r);

/* ── Épocas: platos típicos por nombre (y categoría) ── */
const SEASONS = {
  navidad: (r, nm) => /coquito|pastel(es|on)? de|pasteles|pernil|lechon|gandul|tembleque|arroz con dulce|ponche|majarete|morcilla|pitorro|turron|guineito|cazuela|mazamorra|flan|budin|bienmesabe|polvo de amor|besito|mantecadito|polvoron|jamon glaseado|ensalada de papa|ensalada de coditos/.test(nm),
  cuaresma: (r, nm) => r.category === "pescados" || /bacalao|serenata|gazpacho|atun|sardina|camaron|pescado|chillo|mero|pulpo|carrucho|juey|habichuela|garbanzo|lenteja|tortilla espanola|majarete|arroz con dulce/.test(nm),
  verano: (r, nm) => ["ensaladas", "jugos"].includes(r.category) || /ceviche|parrilla|carbon|pincho|limber|piragua|helado|frio|fria|coco|mango|parcha|pina|playa|alcapurria|bacalaito|empanadilla|pastelillo|tostones|sandia|yogur|paleta|gazpacho/.test(nm),
  gracias: (r, nm) => /pavo|pavochon|calabaza|batata|mofongo relleno|relleno|arroz con gandules|pie de|flan de calabaza|cranberry|arandano/.test(nm),
  lluvia: (r, nm) => r.category === "sopas" || (r.category === "calientes" && !(typeof TEA_HIGH !== "undefined" && TEA_HIGH.has(r.id))) || /asopao|sancocho|caldo|sopon|guisad|fricase|chocolate caliente|avena|cafe con leche|majarete|mazamorra|crema de/.test(nm)
};
/* Temporada recomendada de cada receta: la que dan las reglas de arriba (puede ser más de una) o
   la que fijó un administrador en #/admin → Recetas (Firestore recipeMeta, js/recipe-admin.js).
   ["todo"] = todo el año (no se adelanta en ninguna época). */
const SEASON_KEYS = ["navidad", "cuaresma", "verano", "gracias", "lluvia"];
const autoSeasonCache = new Map();
function autoSeasonsOf(r) {
  if (!autoSeasonCache.has(r.id)) {
    const nm = planNorm(r.name.es);
    const list = SEASON_KEYS.filter((k) => SEASONS[k](r, nm));
    autoSeasonCache.set(r.id, list.length ? list : ["todo"]);
  }
  return autoSeasonCache.get(r.id);
}
let RECIPE_SEASONS = new Map(); // id → temporadas fijadas por un administrador
const seasonsOf = (r) => RECIPE_SEASONS.get(r.id) || autoSeasonsOf(r);
const inSeasonOf = (r, season) => season !== "todo" && seasonsOf(r).includes(season);
function autoSeason(d = new Date()) {
  const m = d.getMonth() + 1, day = d.getDate();
  if (m === 12 || (m === 1 && day <= 15) || (m === 11 && day >= 25)) return "navidad";
  if (m === 11) return "gracias";
  if (m === 3 || (m === 2 && day >= 10) || (m === 4 && day <= 20)) return "cuaresma";
  if (m >= 6 && m <= 8) return "verano";
  if (m === 9 || m === 10) return "lluvia";
  return "todo";
}
const activeSeason = () => (plan.season === "auto" ? autoSeason() : plan.season);
// Además de las carnes del buscador (S_MEAT_RX): cortes y nombres que allí no están.
const PLAN_MEAT_EXTRA = /\b(bistec|churrasco|entrana|picadillo(?! de lentejas)|carne molida|(?<!de )hamburguesas?(?! vegetarian)|pechuga|muslo|alita|pepperoni|salami|pastrami|almeja|mejillon|langostino|anchoa|caldo de pollo|caldo de res|caldo de pescado|gelatina)/;
const isVegetarian = (r) => { const t = planNorm(r.name.es + " " + r.ingredients.es.join(" ")); return !["carnes", "aves", "pescados"].includes(r.category) && !S_MEAT_RX.test(t) && !PLAN_MEAT_EXTRA.test(t); };
const isVegan = (r) => isVegetarian(r) && !getAdvisories(r).allergens.some((a) => a.key === "milk" || a.key === "egg") && !getAdvisories(r).alerts.some((a) => a.key === "honey");
// La dieta del objetivo (vegetariano, vegano) o, si no trae, la de Preferencias
// (normal, vegetariano, vegano) vale para todo el plan.
const activeDiet = () => PLAN_GOALS[plan.goal].diet || (plan.diet !== "normal" ? plan.diet : null);
const dietOk = (r) => {
  const d = activeDiet();
  if (d && !isVegetarian(r)) return false;
  return d !== "vegan" || isVegan(r);
};
/* ── Proteína preferida del plato principal ── */
// Primero por el nombre; si el nombre no dice, por la categoría y los ingredientes.
const PROTEINS = {
  aves: /\b(pollo|pavo|pechugas?|muslos?|alitas?|gallina|codorni|guinea|pato|chicharrones de pollo)/,
  pescado: /\b(pescado|bacalao|bacalaitos?|atun|salmon|chillo|mero|dorado|tilapia|sierra|carite|pargo|sardinas?|arenque|filete de pez|mahi|robalo|cetis?|trucha)/,
  mariscos: /\b(camarones|camaron|langosta|langostinos?|jueyes|juey|cangrejo|pulpo|calamar(es)?|carrucho|almejas?|mejillones|ostiones|mariscos|vieiras)/,
  res: /\b(res|carne de res|bistec|churrasco|entrana|carne molida|picadillo(?! de lentejas)|ternera|rabo|carne mechada|lengua|filete mignon|carne guisada|carne frita|hamburguesas?(?! vegetarian)|albondigas|carne bif|corned|costillas de res|pastelon de carne|roast beef|tasajo|mondongo|picanha|punta trasera)/,
  cerdo: /\b(cerdo|pernil|lechon|chuletas?|costillas?(?! de res)|longaniza|chorizo|jamon|tocino|tocineta|cuchifritos?|gandinga|morcilla|chicharron(?! de pollo)|masitas|patitas|salchichas?|salami|salchichon)/,
  cabro: /\b(cabro|cabrito|chivo|cordero|carnero|conejo)/
};
const protCache = new Map();
function proteinsOf(r) {
  if (protCache.has(r.id)) return protCache.get(r.id);
  const nm = planNorm(r.name.es);
  let found = Object.keys(PROTEINS).filter((k) => PROTEINS[k].test(nm));
  if (!found.length) {
    if (r.category === "aves") found = ["aves"];
    else if (r.category === "pescados") found = ["pescado"];
    else {
      const ing = planNorm(r.ingredients.es.join(" "));
      found = Object.keys(PROTEINS).filter((k) => PROTEINS[k].test(ing));
    }
  }
  if (!found.length && isVegetarian(r)) found = ["granos"];
  protCache.set(r.id, found);
  return found;
}
// La preferencia no aplica con dieta vegetariana o vegana (ya manda la dieta).
const protActive = () => plan.protein.length > 0 && !activeDiet();
const protOk = (r) => !protActive() || proteinsOf(r).some((k) => plan.protein.includes(k));

function badgesOf(n, m = 1) {
  const b = [];
  n = { p: n.p * m, fib: n.fib * m, s: n.s * m, na: n.na * m };
  if (n.p >= 25) b.push("prot");
  if (n.fib >= 5) b.push("fib");
  if (n.s <= 5) b.push("sugar");
  if (n.na <= 600) b.push("sodium");
  return b;
}
const AVOID = {
  gluten: (a) => a.includes("gluten"),
  milk: (a) => a.includes("milk"),
  egg: (a) => a.includes("egg"),
  fish: (a) => a.includes("fish"),
  shellfish: (a) => a.includes("crustacean") || a.includes("mollusc"),
  nuts: (a) => a.includes("peanut") || a.includes("treenut"),
  pork: (a, r) => /\b(cerdo|pernil|lechon|chuleta|tocineta|tocino|jamon|jamonilla|longaniza|chorizo|morcilla|cuerito|chicharron|costilla de cerdo|masitas de cerdo|salchichon)/.test(planNorm(r.ingredients.es.join(" ") + " " + r.name.es))
};
const planNorm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* ── Ajustes guardados ── */
// `saved` = el plan sugerido del período (hoy, o 7 días desde `start`), para verlo igual al volver.
const PLAN_DEFAULTS = { goal: "rebajar", diet: "normal", sex: "", age: "", weight: "", ft: "", inch: "", activity: "1", avoid: [], prefs: [], protein: [], season: "auto", days: 1, seed: 1, people: 1, ts: 0, saved: null };
const PLAN_DIETS = ["normal", "veg", "vegan"];
// Cada usuario tiene su copia en este navegador (rcb.plan.<uid>); sin sesión, rcb.plan.
let planOwner = "";
const planKey = () => (planOwner ? `${PLAN_STORE}.${planOwner}` : PLAN_STORE);
function parsePlanStore(key) {
  try { return cleanPlan(JSON.parse(readStore(key) || "{}")); } catch { return cleanPlan(null); } // dañados: de fábrica
}
function readLocalPlan() { return parsePlanStore(planKey()); }
/* ¿Dos copias del plan dicen lo mismo? (sin contar la hora de guardado) */
function samePlan(a, b) {
  const strip = (p) => JSON.stringify({ ...cleanPlan(p), ts: 0 });
  return strip(a) === strip(b);
}
let plan = readLocalPlan();
// `auto`: el plan del período se armó solo (no es un cambio de la persona) y no cuenta como más reciente.
const savePlan = (auto = false) => {
  if (!auto) plan.ts = Date.now(); // para saber cuál copia es la más reciente (navegador o cuenta)
  writeStore(planKey(), JSON.stringify(plan));
  if (typeof cloudSavePlan === "function") cloudSavePlan(plan);
};
/* Al entrar o salir: usa la copia de ese usuario en este navegador. */
function usePlanOwner(uid) {
  // Al entrar: el plan que armó sin cuenta en este navegador pasa a su copia si es más reciente
  // que la que ya tenía aquí (antes se perdía si la cuenta ya había entrado en este equipo).
  if (uid && readStore(PLAN_STORE)) {
    const anon = parsePlanStore(PLAN_STORE), mine = parsePlanStore(`${PLAN_STORE}.${uid}`);
    if (anon.ts && anon.ts > (mine.ts || 0)) writeStore(`${PLAN_STORE}.${uid}`, JSON.stringify(anon));
    else if (!readStore(`${PLAN_STORE}.${uid}`)) writeStore(`${PLAN_STORE}.${uid}`, readStore(PLAN_STORE));
    writeStore(PLAN_STORE, JSON.stringify(cleanPlan(null)));
  }
  planOwner = uid || "";
  plan = readLocalPlan();
  if (!$("view-plans").hidden) renderPlansShell();
}
/* Sólo las claves conocidas, con su tipo (para guardar o recibir de la nube). */
function cleanPlan(src) {
  const out = {};
  for (const [k, def] of Object.entries(PLAN_DEFAULTS)) {
    const v = src && src[k];
    if (k === "saved") out[k] = cleanSaved(v);
    else if (Array.isArray(def)) out[k] = Array.isArray(v) ? v.filter((x) => typeof x === "string").slice(0, 20) : [];
    else if (typeof def === "number") out[k] = Number.isFinite(+v) ? +v : def;
    else out[k] = typeof v === "string" ? v.slice(0, 40) : def;
  }
  // Antes "Vegetariano" era una casilla de preferencias; ahora es la dieta.
  if (src && Array.isArray(src.prefs) && src.prefs.includes("veg") && !(src.diet && src.diet !== "normal")) out.diet = "veg";
  out.prefs = out.prefs.filter((p) => p === "quick");
  if (!PLAN_DIETS.includes(out.diet)) out.diet = "normal";
  if (![1, 7].includes(out.days)) out.days = 1;
  out.people = Math.min(12, Math.max(1, Math.round(out.people) || 1));
  if (!PLAN_GOALS[out.goal]) out.goal = "rebajar";
  return out;
}
/* Plan guardado: { start: "AAAA-MM-DD", days, seed, sig, meals: [{ items: [{ slot, id, m, sides: [{ id, m }] }] }] }
   (cada día es un objeto: Firestore no admite listas dentro de listas). */
function cleanSaved(v) {
  if (!v || typeof v !== "object" || typeof v.start !== "string" || !Array.isArray(v.meals)) return null;
  const num = (x) => (Number.isFinite(+x) ? +x : 1);
  const str = (x) => String(x || "").slice(0, 120);
  return {
    start: v.start.slice(0, 10), days: num(v.days), seed: num(v.seed), sig: String(v.sig || "").slice(0, 1500),
    meals: v.meals.slice(0, 7).map((day) => ({ items: (day && Array.isArray(day.items) ? day.items.slice(0, 4) : []).map((x) => ({
      slot: str(x && x.slot), id: x && x.id ? str(x.id) : null, m: num(x && x.m), lo: x && x.lo ? 1 : 0,
      sides: Array.isArray(x && x.sides) ? x.sides.slice(0, 4).map((s) => ({ id: str(s && s.id), m: num(s && s.m) })) : []
    })) }))
  };
}
/* Ajustes de la cuenta (al entrar, si son más recientes) o de fábrica. */
function applyPlan(data) {
  plan = cleanPlan(data || PLAN_DEFAULTS);
  writeStore(planKey(), JSON.stringify(plan));
  if (!$("view-plans").hidden) renderPlansShell();
}
let plansScrollY = 0;

/* ── Metas del día ── */
function planTargets() {
  const g = PLAN_GOALS[plan.goal];
  const lb = parseFloat(plan.weight), age = parseFloat(plan.age);
  const inches = (parseFloat(plan.ft) || 0) * 12 + (parseFloat(plan.inch) || 0);
  // Niños de 2 a 13 años (objetivo de autismo): calorías de las Guías Alimentarias (moderadamente activos) y
  // proteína de la RDA infantil (0.95 g/kg).
  if (g.kids && plan.sex && lb >= 20 && age >= 2 && age < 14) {
    const kgC = lb * 0.4536;
    const kcalC = age < 4 ? 1200 : age < 9 ? 1500 : plan.sex === "male" ? 2000 : 1800;
    return { kcal: kcalC, protein: Math.round(kgC * 0.95), custom: true, kg: kgC, child: true, age };
  }
  const custom = plan.sex && lb > 60 && age >= 14 && inches > 48;
  const kg = custom ? lb * 0.4536 : 77;
  let kcal = g.typical;
  if (custom) {
    const cm = inches * 2.54;
    const bmr = 10 * kg + 6.25 * cm - 5 * age + (plan.sex === "male" ? 5 : -161);
    const factor = [1.2, 1.375, 1.55, 1.725][+plan.activity || 0];
    kcal = bmr * factor * (1 + g.adjust);
    const floor = plan.sex === "male" ? 1500 : 1200;
    if (kcal < floor) kcal = floor;
  }
  kcal = Math.round(kcal / 50) * 50;
  // Con obesidad (IMC 30 o más) la proteína se calcula con el peso ajustado, como lo hace un nutricionista:
  // peso ideal (Devine) + 40 % de lo que pasa de él. Con el peso actual salían metas que no se alcanzaban.
  let protKg = kg, adjusted = false;
  if (custom && inches > 58) {
    const bmi = kg / ((inches * 0.0254) ** 2);
    if (bmi >= 30) {
      const ibw = (plan.sex === "male" ? 50 : 45.5) + 2.3 * (inches - 60);
      protKg = ibw + 0.4 * (kg - ibw);
      adjusted = true;
    }
  }
  const protein = Math.round(protKg * g.protPerKg / 5) * 5;
  return { kcal, protein, custom, kg, age, adjusted };
}
/* Tope de sodio del día: 2,300 mg (valor diario de la FDA), 1,500 mg en bajo en sodio y DASH, y el de la
   edad en niños (Academias Nacionales 2019). */
function sodiumCap(target) {
  if (target.child) return target.age < 4 ? 1200 : target.age < 9 ? 1500 : 1800;
  return ["sodio", "dash"].includes(plan.goal) ? 1500 : 2300;
}
/* Agua: unos 35 ml por kilo en adultos (vasos de 8 onzas, entre 6 y 13); en niños, según la edad. */
function waterGlasses(target) {
  if (target.child) return target.age < 4 ? 4 : target.age < 9 ? 5 : 7;
  if (!target.custom) return 8;
  return Math.min(13, Math.max(6, Math.round((target.kg * 35) / 237)));
}

/* ── Qué recetas sirven para cada comida ── */
const EXCLUDED_CATS = new Set(["cocteles", "salsas", "postres", "bizcochos", "galletitas", "pasteles_dulces", "calientes", "jugos", "panes"]);
function slotOf(r) {
  const nm = planNorm(r.name.es);
  if (/^panqueques/.test(nm)) return "desayuno";
  if (EXCLUDED_CATS.has(r.category)) return null;
  if (/dulce|mermelada|jalea|almibar|pasta de guayaba|cascos|queso blanco casero|queso de hoja|yogur casero/.test(nm)) return null;
  if (["huevos", "cereales"].includes(r.category) || /desayuno|parfait|bowl de yogur|avena|batida de yogur/.test(nm)) return "desayuno";
  if (["frutas"].includes(r.category) || /^yogur|batida|ensalada de frutas/.test(nm)) return "merienda";
  if (r.category === "bebidas") return /batida|champola/.test(nm) ? "merienda" : null;
  if (r.category === "entremeses") return "merienda";
  if (MAIN_CATS.includes(r.category)) return "main";
  return null;
}
/* ── Acompañantes ── */
// Qué tipo de acompañante es una receta (o null si es un plato principal o no aplica).
const SIDE_MEAT_RX = /pollo|pernil|carne|salchich|longaniza|camaron|bacalao|atun|sardina|jueyes|langosta|pulpo|calamar|costillita|chorizo|salami|mollej|alita|guinea|cerdo|res\b|chicharron|picadillo/;
function sideKind(r, n) {
  const nm = planNorm(r.name.es);
  // Los platos fuertes veganos (guisos de granos, tofu, jaca) y el chili o los tacos van de principal.
  if (/\bvegan[oa]s?\b|\bchili\b|^tacos/.test(nm)) return null;
  if (r.category === "granos") return /hummus|crujientes/.test(nm) || SIDE_MEAT_RX.test(nm) ? null : "granos";
  if (r.category === "arroces") return /^(arroz (blanco|integral|con gandules|con maiz|guisado con vegetales|apastelado|con cilantro|verde|con ajo|amarillo|con calabaza|con champinones)|moros)/.test(nm) && !SIDE_MEAT_RX.test(nm) ? "arroz" : null;
  if (r.category === "ensaladas") return n.p < 12 && !SIDE_MEAT_RX.test(nm) ? "ensalada" : null;
  if (r.category === "vegetales") {
    if (/rellen|pastelon|lasana|parmesana/.test(nm) || SIDE_MEAT_RX.test(nm) || n.p >= 15) return null;
    return /tostones|maduro|amarillo|yuca|papa|batata|name|yautia|malanga|pana\b|panapen|vianda|guineo|platano|majado|mofongo|pure|arepa|funche/.test(nm) ? "vianda" : "vegetal";
  }
  return null;
}
// Platos completos: llevan su almidón o su vianda y van sin acompañante.
const isComplete = (r) => ["arroces", "sopas", "pastas", "emparedados"].includes(r.category) ||
  /asopao|paella|sancocho|pastelon|lasana|mofongo|arroz con|wrap|ensalada de|con papas|con viandas|con yuca|con tostones|con (garbanzos|habichuelas|gandules|lentejas|arroz)|jibarito|^tacos/.test(planNorm(r.name.es));
// Por objetivo: qué acompañantes y con qué criterio. Cada grupo de "kinds" es un acompañante.
const SIDE_RULES = {
  rebajar: { kinds: [["ensalada", "vegetal", "granos"]], ok: (n) => n.kcal <= 250 && n.s <= 10, score: (n) => n.fib * 2 + n.p / 3 - n.kcal / 100 },
  masa: { kinds: [["arroz", "vianda"], ["granos"]], ok: (n) => n.kcal >= 100, score: (n) => n.kcal / 50 + n.p / 2 },
  mantener: { kinds: [["arroz", "vianda"], ["granos", "ensalada", "vegetal"]], ok: (n) => n.kcal <= 400, score: (n) => n.fib + n.p / 4 - n.sat / 2 },
  sodio: { kinds: [["arroz", "vianda", "ensalada", "vegetal", "granos"]], ok: (n) => n.na <= 400, score: (n) => -n.na / 80 + n.fib },
  lowcarb: { kinds: [["ensalada", "vegetal"]], ok: (n) => n.c <= 15, score: (n) => -n.c + n.fib * 2 },
  azucar: { kinds: [["granos", "ensalada", "vegetal"]], ok: (n) => n.s <= 6, score: (n) => n.fib * 2 - n.s },
  vegetariano: { kinds: [["arroz", "vianda"], ["granos", "ensalada", "vegetal"]], ok: (n) => n.kcal <= 400, score: (n) => n.p / 2 + n.fib - n.sat / 2 },
  vegano: { kinds: [["arroz", "vianda"], ["granos"]], ok: (n) => n.kcal <= 400, score: (n) => n.p / 2 + n.fib * 1.5 },
  nutritivo: { kinds: [["granos"], ["ensalada", "vegetal"]], ok: (n) => n.fib >= 2 || n.p >= 5, score: (n) => n.fib * 3 + n.p / 3 - n.na / 500 },
  diabetes: { kinds: [["ensalada", "vegetal", "granos"]], ok: (n) => n.c <= 20 && n.add <= 3, score: (n) => n.fib * 2 + n.p / 3 - n.c / 4 },
  dash: { kinds: [["arroz", "vianda", "granos"], ["ensalada", "vegetal"]], ok: (n) => n.na <= 300, score: (n) => n.k / 100 + n.fib - n.na / 80 },
  autismo: { kinds: [["arroz", "vianda", "granos", "vegetal"]], ok: (n) => n.add <= 3 && n.na <= 300, score: (n) => n.fib * 2 + n.ca / 40 + n.p / 4 },
  colesterol: { kinds: [["granos"], ["ensalada", "vegetal"]], ok: (n) => n.sat <= 1.5 && n.chol <= 15 && n.na <= 400, score: (n) => n.fib * 3 + n.p / 4 - n.sat * 3 }
};
function planInfo(r) {
  const e = estimateNutrition(r);
  const a = getAdvisories(r);
  return { n: e.per, g: e.groups, frying: e.frying, allergens: a.allergens.map((x) => x.key), alcohol: a.alerts.some((x) => x.key === "alcoholDrink") };
}
function candidates() {
  const g = PLAN_GOALS[plan.goal];
  const pools = { desayuno: [], main: [], merienda: [], side: [] };
  const loose = { desayuno: [], main: [], merienda: [], side: [] }; // respetan exclusiones aunque no el objetivo
  const sr = SIDE_RULES[plan.goal];
  const season = activeSeason();
  const offProt = []; // platos principales de otra proteína: sólo si faltan opciones
  for (const r of recipes) {
    const slot = slotOf(r);
    if (!slot) continue;
    const info = planInfo(r);
    if (info.alcohol) continue;
    if (g.noFried && info.frying) continue;
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (!dietOk(r)) continue;
    if (g.only && !g.only(r)) continue;
    if (plan.prefs.includes("quick") && !isQuick(r)) continue;
    // Acompañantes (arroz, granos, viandas, vegetales y ensaladas ligeras): no son plato principal.
    const kind = slot === "main" ? sideKind(r, info.n) : null;
    if (kind) {
      const entry = { r, n: info.n, g: info.g, kind, score: sr.score(info.n) };
      (sr.ok(info.n) ? pools.side : loose.side).push(entry);
      continue;
    }
    let s = slot;
    if (s === "main" && info.n.kcal < 180 && ["ensaladas", "vegetales"].includes(r.category)) s = "merienda";
    // Frutas y viandas de temporada en la isla (js/seasonal.js): un empujón pequeño.
    const fresh = typeof seasonalBonus === "function" ? seasonalBonus(r) : 0;
    if (s === "main" && !protOk(r)) { offProt.push({ r, n: info.n, g: info.g, loose: true, score: g.score(info.n) - 500 + fresh }); continue; }
    const inSeason0 = inSeasonOf(r, season);
    if (!g.ok[s](info.n)) { loose[s].push({ r, n: info.n, g: info.g, inSeason: inSeason0, loose: true, score: g.score(info.n) + fresh + (inSeason0 ? 1000 : 0) }); continue; }
    const inSeason = inSeasonOf(r, season);
    // Las de la época van primero (sin dejar de cumplir el objetivo).
    pools[s].push({ r, n: info.n, g: info.g, inSeason, score: g.score(info.n) + fresh + (inSeason ? 1000 : 0) });
  }
  // Si las exclusiones dejan una comida sin opciones, se usan las que más se acercan al objetivo.
  let relaxed = false;
  pools.side.sort((x, y) => y.score - x.score);
  // Acompañantes: si a un tipo que pide el objetivo no le queda ninguno, se usan los que más se acercan.
  for (const group of sr.kinds) {
    if (!pools.side.some((x) => group.includes(x.kind))) {
      const extra = loose.side.filter((x) => group.includes(x.kind));
      if (extra.length) { pools.side = pools.side.concat(extra); relaxed = true; }
    }
  }
  for (const k of ["desayuno", "main", "merienda"]) {
    const min = k === "main" ? 6 : 3; // variedad mínima para no repetir todo el plan
    if (pools[k].length < min && loose[k].length) { pools[k] = pools[k].concat(loose[k]); relaxed = true; }
    if (k === "main" && pools.main.length < 3 && offProt.length) { pools.main = pools.main.concat(offProt); relaxed = true; }
    pools[k].sort((x, y) => y.score - x.score);
  }
  pools.relaxed = relaxed;
  return pools;
}

/* ── Armar el plan ── */
function rng(seed) { let s = seed % 2147483647 || 1; return () => (s = (s * 16807) % 2147483647) / 2147483647; }
function pickFrom(list, used, rand, avoidCat) {
  const top = list.slice(0, Math.max(12, Math.ceil(list.length * 0.4)));
  let options = top.filter((x) => !used.has(x.r.id) && x.r.category !== avoidCat);
  if (!options.length) options = top.filter((x) => !used.has(x.r.id));
  if (!options.length) options = top;
  if (!options.length) return null;
  return options[Math.floor(rand() * options.length)];
}
function portionFor(item, slotKcal, max) {
  if (!item || item.n.kcal <= 0) return 1;
  const m = Math.round((slotKcal / item.n.kcal) * 2) / 2;
  return Math.min(max, Math.max(0.5, m));
}
/* ── Período del plan: cambia solo cada día (1 día) o cada 7 días (7 días) ── */
const isoDay = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const parseDay = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parseDay(s); d.setDate(d.getDate() + n); return isoDay(d); };
function periodStart() {
  const today = isoDay(new Date());
  const sv = plan.saved;
  // Un plan de 7 días sigue hasta su séptimo día; después empieza otro desde hoy.
  if (sv && sv.days === plan.days && plan.days === 7 && sv.start <= today && today < addDays(sv.start, 7)) return sv.start;
  return today;
}
function hashStr(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); }
// Ajustes que cambian las recetas o las porciones: si cambian, se arma otro plan.
// PLAN_ENGINE sube cuando cambia cómo se arma el plan, para que los guardados se vuelvan a armar (v4.48: ajuste del día).
const PLAN_ENGINE = 2;
const planSig = (target) => JSON.stringify([plan.goal, plan.diet, plan.prefs, plan.protein, plan.avoid, activeSeason(), target.kcal, target.protein, PLAN_ENGINE]);
function hydrateSaved(sv) {
  const byId = (id) => recipes.find((r) => r.id === canonicalId(id));
  const item = (id) => { const r = byId(id); if (!r) return undefined; const i = planInfo(r); return { r, n: i.n, g: i.g }; };
  if (sv.meals.length !== sv.days || sv.meals.some((d) => !d.items.length)) return null; // incompleto o de otro formato
  const days = [];
  for (const day of sv.meals) {
    const meals = [];
    for (const x of day.items) {
      const it = x.id ? item(x.id) : null;
      if (it === undefined) return null; // una receta ya no existe: se arma otro
      const sides = [];
      for (const s of x.sides) { const si = item(s.id); if (!si) return null; sides.push({ item: si, m: s.m }); }
      meals.push({ slot: x.slot, item: it, m: x.m, sides, lo: x.lo ? 1 : 0 });
    }
    days.push(meals);
  }
  return days;
}
/* El plan del período: el guardado si sigue valiendo; si no, uno nuevo al azar que se guarda. */
function periodPlan(pools, target) {
  const start = periodStart();
  const sig = planSig(target);
  const sv = plan.saved;
  if (sv && sv.start === start && sv.days === plan.days && sv.seed === plan.seed && sv.sig === sig) {
    const days = hydrateSaved(sv);
    if (days) return { start, days };
  }
  const days = buildPlan(pools, target, hashStr(start) + plan.seed * 7919 + Object.keys(PLAN_GOALS).indexOf(plan.goal) * 131);
  plan.saved = {
    start, days: plan.days, seed: plan.seed, sig,
    meals: days.map((meals) => ({ items: meals.map((x) => ({
      slot: x.slot, id: x.item ? x.item.r.id : null, m: x.m || 1,
      sides: (x.sides || []).map((s) => ({ id: s.item.r.id, m: s.m }))
    })) }))
  };
  savePlan(true);
  return { start, days };
}
function dayName(iso, opts) {
  const s = parseDay(iso).toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", opts);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* Objetivo con tope de carbohidratos (diabetes): se baja la porción, de ½ en ½, hasta que quepa. */
function mealCarbs(meal) { return (meal.item ? meal.item.n.c * meal.m : 0) + (meal.sides || []).reduce((a, sd) => a + sd.item.n.c * sd.m, 0); }
// Con más de 2,000 calorías (hombres, personas activas) el tope sube en proporción: 75 g por comida a 2,500 (v4.48).
let carbScale = 1;
const setCarbScale = (target) => { carbScale = Math.max(1, target.kcal / 2000); };
function capCarbs(meal, g) {
  const cap = (meal.slot === "merienda" ? g.carbSnack : g.carbMeal) * carbScale;
  if (!cap || !meal.item) return;
  for (let i = 0; i < 8 && mealCarbs(meal) > cap; i++) {
    const big = [meal, ...(meal.sides || [])].filter((x) => x.m > 0.5).sort((a, b) => b.item.n.c * b.m - a.item.n.c * a.m)[0];
    if (!big) break;
    big.m -= 0.5;
  }
}

function buildPlan(pools, target, seed) {
  const g = PLAN_GOALS[plan.goal];
  setCarbScale(target);
  const rand = rng(seed);
  const usedWeek = new Set();
  const days = [];
  for (let d = 0; d < plan.days; d++) {
    const usedDay = new Set(usedWeek);
    const meals = [];
    let lastMainCat = null;
    for (const slot of SLOTS) {
      if (g.routine && d > 0 && ["desayuno", "merienda"].includes(slot.key)) {
        const first = days[0].find((x) => x.slot === slot.key);
        meals.push({ ...first, sides: (first.sides || []).map((s) => ({ ...s })) });
        if (first.item) usedDay.add(first.item.r.id);
        continue;
      }
      const pool = slot.key === "desayuno" ? pools.desayuno : slot.key === "merienda" ? pools.merienda : pools.main;
      const item = pickFrom(pool, usedDay, rand, slot.key === "cena" ? lastMainCat : null);
      if (!item) { meals.push({ slot: slot.key, item: null }); continue; }
      usedDay.add(item.r.id);
      if (["almuerzo", "cena"].includes(slot.key)) { usedWeek.add(item.r.id); lastMainCat = item.r.category; }
      const slotKcal = target.kcal * slot.share;
      if (slot.key === "merienda") { const meal = { slot: slot.key, item, m: Math.min(1.5, portionFor(item, slotKcal, 1.5)) }; capCarbs(meal, g); meals.push(meal); continue; }
      // Almuerzo y cena: principal + acompañantes (menos los platos completos y el desayuno).
      const sides = [];
      if (["almuerzo", "cena"].includes(slot.key) && !isComplete(item.r)) {
        for (const group of SIDE_RULES[plan.goal].kinds) {
          const options = pools.side.filter((x) => group.includes(x.kind));
          const side = pickFrom(options, usedDay, rand, null);
          if (side) { usedDay.add(side.r.id); sides.push({ item: side }); }
        }
      }
      const mainShare = sides.length ? 0.55 : 1;
      const m = portionFor(item, slotKcal * mainShare, g.maxPortion);
      for (const sd of sides) sd.m = Math.min(1.5, portionFor(sd.item, (slotKcal * (1 - mainShare)) / sides.length, 1.5));
      const meal = { slot: slot.key, item, m, sides };
      capCarbs(meal, g);
      meals.push(meal);
    }
    tuneDay(meals, pools, target, usedDay, usedWeek, (x) => g.routine && d > 0 && ["desayuno", "merienda"].includes(x.slot));
    days.push(meals);
  }
  return days;
}

/* ── Ajuste del día, como lo revisaría un nutricionista (v4.48) ──
   El azar escoge platos que cumplen el objetivo uno por uno, pero el día completo podía pasarse de sodio
   (hasta 8,000 mg en ganar masa) o quedarse corto de proteína (62 % en vegano). Aquí se revisa el día: si el
   sodio pasa del tope, la proteína no llega al 90 % de la meta o las calorías se alejan más de 10 %, se cambia
   la pieza que más ayuda (plato, acompañante o media porción más o menos) por otra del mismo grupo que siga
   cumpliendo el objetivo y los ajustes. Hasta 8 cambios por día. */
function dayTotals(meals) {
  const t = { kcal: 0, p: 0, na: 0, chol: 0 };
  for (const x of meals) {
    if (!x.item) continue;
    for (const [it, m] of [[x.item, x.m], ...(x.sides || []).map((sd) => [sd.item, sd.m])]) { t.kcal += it.n.kcal * m; t.p += it.n.p * m; t.na += it.n.na * m; t.chol += (it.n.chol || 0) * m; }
  }
  return t;
}
// Colesterol: 300 mg (valor diario de la FDA), con menos peso que el sodio y la proteína; 200 mg con el objetivo de colesterol.
const cholCap = () => (PLAN_GOALS[plan.goal].chol ? 200 : 300);
function dayPenalty(t, target, cap) {
  return (Math.max(0, t.na - cap) / cap) * 4 + (Math.max(0, target.protein * 0.9 - t.p) / target.protein) * 3 + Math.max(0, Math.abs(t.kcal - target.kcal) / target.kcal - 0.05) + Math.max(0, t.chol - cholCap()) / cholCap();
}
const dayFits = (t, target, cap) => t.na <= cap && t.p >= target.protein * 0.9 && Math.abs(t.kcal - target.kcal) <= target.kcal * 0.1 && t.chol <= cholCap();
function tuneDay(meals, pools, target, used, usedWeek, locked) {
  const g = PLAN_GOALS[plan.goal];
  const cap = sodiumCap(target);
  const kinds = SIDE_RULES[plan.goal].kinds;
  for (let step = 0; step < 8; step++) {
    const now = dayTotals(meals);
    if (dayFits(now, target, cap)) return;
    const base = dayPenalty(now, target, cap);
    let best = null;
    for (const meal of meals) {
      if (!meal.item || locked(meal)) continue;
      const main = ["almuerzo", "cena"].includes(meal.slot);
      const parts = [{ s: null, cur: meal.item, m: meal.m }, ...(meal.sides || []).map((sd, s) => ({ s, cur: sd.item, m: sd.m }))];
      for (const part of parts) {
        const max = part.s !== null || meal.slot === "merienda" ? 1.5 : g.maxPortion;
        let pool;
        if (part.s !== null) { const grp = kinds.find((k) => k.includes(part.cur.kind)) || [part.cur.kind]; pool = pools.side.filter((x) => grp.includes(x.kind)); }
        else pool = meal.slot === "desayuno" ? pools.desayuno : meal.slot === "merienda" ? pools.merienda : pools.main;
        const top = pool.slice(0, Math.max(30, Math.ceil(pool.length * 0.4)));
        // Opciones: la misma receta con media porción más o menos, u otra del grupo con las mismas calorías.
        const opts = [[part.cur, part.m + 0.5], [part.cur, part.m - 0.5]];
        for (const alt of top) {
          if (used.has(alt.r.id)) continue;
          if (part.s === null && main && isComplete(alt.r) !== isComplete(part.cur.r)) continue; // los acompañantes siguen igual
          opts.push([alt, Math.min(max, portionFor(alt, part.cur.n.kcal * part.m, max))]);
        }
        for (const [alt, m2] of opts) {
          if (m2 < 0.5 || m2 > max) continue;
          const set = (it, m) => { if (part.s === null) { meal.item = it; meal.m = m; } else { meal.sides[part.s].item = it; meal.sides[part.s].m = m; } };
          set(alt, m2);
          const pen = dayPenalty(dayTotals(meals), target, cap);
          set(part.cur, part.m);
          if (pen < base - 0.01 && (!best || pen < best.pen)) best = { meal, part, alt, m2, pen, main };
        }
      }
    }
    if (!best) return;
    const { meal, part, alt, m2 } = best;
    if (part.s === null) { meal.item = alt; meal.m = m2; } else { meal.sides[part.s].item = alt; meal.sides[part.s].m = m2; }
    if (alt !== part.cur) {
      used.delete(part.cur.r.id); used.add(alt.r.id);
      if (part.s === null && best.main) { usedWeek.delete(part.cur.r.id); usedWeek.add(alt.r.id); }
    }
    capCarbs(meal, g);
  }
}

/* ── Cambiar una comida o un acompañante por otro sugerido ──
   "Cambiar" abre, debajo de esa comida, la lista de las otras recetas que el plan habría podido
   escoger (mismos candidatos: objetivo, dieta, proteína, época y lo que se evita), sin las que ya
   están ese día. Al escoger una se recalcula la porción y se guarda en `plan.saved`, así que el
   cambio se queda (y sube a la cuenta) hasta que toque otro plan o se cambien los ajustes. */
let planPools = null;   // candidatos del último render
let planDays = null;    // días del plan que se ve
let planSwap = null;    // { key: "día-comida" o "día-comida-acompañante", limit }
const SWAP_PAGE = 8;

function swapRef(key) {
  const [d, j, s] = key.split("-").map(Number);
  const meal = planDays && planDays[d] && planDays[d][j];
  if (!meal || !meal.item) return null;
  if (!Number.isNaN(s) && s !== undefined && !(meal.sides && meal.sides[s])) return null;
  return { d, j, s: Number.isNaN(s) || s === undefined ? null : s, meal };
}
function dayIds(meals) {
  const ids = new Set();
  for (const x of meals) { if (x.item) ids.add(x.item.r.id); for (const sd of x.sides || []) ids.add(sd.item.r.id); }
  return ids;
}
function swapOptions(ref) {
  const used = dayIds(planDays[ref.d]);
  if (ref.s !== null) {
    const cur = ref.meal.sides[ref.s].item;
    const kinds = SIDE_RULES[plan.goal].kinds;
    const kind = cur.kind || sideKind(cur.r, cur.n);
    const group = kinds.find((g) => g.includes(kind)) || kinds.flat();
    return planPools.side.filter((x) => group.includes(x.kind) && !used.has(x.r.id));
  }
  const pool = ref.meal.slot === "desayuno" ? planPools.desayuno : ref.meal.slot === "merienda" ? planPools.merienda : planPools.main;
  return pool.filter((x) => !used.has(x.r.id));
}
function applySwap(ref, id) {
  const sv = plan.saved;
  const opt = swapOptions(ref).find((x) => x.r.id === id);
  if (!sv || !sv.meals[ref.d] || !opt) return null;
  const meal = ref.meal;
  const g = PLAN_GOALS[plan.goal];
  const tgt = planTargets();
  setCarbScale(tgt);
  const slotKcal = tgt.kcal * SLOTS.find((x) => x.key === meal.slot).share;
  if (ref.s !== null) meal.sides[ref.s] = { item: opt, m: 1 };
  else {
    meal.item = opt;
    if (["almuerzo", "cena"].includes(meal.slot)) {
      // Un plato completo va sin acompañantes; uno que no lo es y no tenía, los recibe como en el plan.
      if (isComplete(opt.r)) meal.sides = [];
      else if (!(meal.sides || []).length) {
        const used = dayIds(planDays[ref.d]);
        meal.sides = [];
        for (const group of SIDE_RULES[plan.goal].kinds) {
          const side = planPools.side.find((x) => group.includes(x.kind) && !used.has(x.r.id));
          if (side) { used.add(side.r.id); meal.sides.push({ item: side, m: 1 }); }
        }
      }
    }
  }
  // Porciones como en buildPlan().
  const sides = meal.sides || [];
  if (meal.slot === "merienda") meal.m = Math.min(1.5, portionFor(meal.item, slotKcal, 1.5));
  else {
    const share = sides.length ? 0.55 : 1;
    meal.m = portionFor(meal.item, slotKcal * share, g.maxPortion);
    for (const sd of sides) sd.m = Math.min(1.5, portionFor(sd.item, (slotKcal * (1 - share)) / sides.length, 1.5));
  }
  capCarbs(meal, g);
  meal.lo = 0;
  sv.meals[ref.d].items[ref.j] = { slot: meal.slot, id: meal.item.r.id, m: meal.m, lo: 0, sides: sides.map((sd) => ({ id: sd.item.r.id, m: sd.m })) };
  savePlan(); // es un cambio de la persona: cuenta como el más reciente y sube a la cuenta
  return opt.r;
}
function swapButtonHTML(key, name) {
  const tr = pt();
  const open = planSwap && planSwap.key === key;
  return `<button type="button" class="plan-swap-btn" data-swap="${key}" aria-expanded="${open}" aria-controls="swap-${key}" aria-label="${esc(tr.swapLabel(name))}">
    <svg class="icon" aria-hidden="true"><use href="#i-swap"/></svg><span>${esc(tr.swap)}</span></button>`;
}
function swapPanelHTML(key) {
  const tr = pt();
  const ref = swapRef(key);
  if (!ref) return "";
  const opts = swapOptions(ref);
  const title = ref.s !== null ? tr.swapSideTitle : tr.swapTitle(tr.slots[ref.meal.slot]);
  return `<div class="plan-swap-panel" id="swap-${key}" role="region" aria-label="${esc(title)}">
    <div class="plan-swap-head"><strong>${esc(title)}</strong>
      <button type="button" class="btn btn-ghost btn-sm" data-swap-close>${esc(tr.swapClose)}</button></div>
    <p class="plans-help">${esc(tr.swapHelp)}</p>
    ${opts.length ? `<ul class="plan-swap-list">${opts.slice(0, planSwap.limit).map((x) => `
      <li>
        <button type="button" class="plan-swap-opt" data-swap-pick="${esc(x.r.id)}">
          <span class="plan-swap-thumb" aria-hidden="true">${coverHTML(x.r.category, x.r)}</span>
          <span class="plan-swap-body">
            <span class="plan-swap-name">${esc(x.r.name[currentLang])}</span>
            <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot} · ${esc(tr.perPortion)}</span>
            ${badgesHTML(x.n)}
          </span>
        </button>
        <a class="plan-swap-view" href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(tr.swapView)}</a>
      </li>`).join("")}</ul>` : `<p class="plans-warn">${esc(tr.swapNone)}</p>`}
    ${opts.length > planSwap.limit ? `<button type="button" class="btn btn-outline btn-sm plan-swap-more" data-swap-more>${esc(tr.swapMore)} (${opts.length - planSwap.limit})</button>` : ""}
  </div>`;
}

/* ── Vista ── */
/* Los 13 objetivos en tres grupos (v4.48): antes iban todos seguidos y mezclaban el peso, el estilo de comida
   y las condiciones de salud. */
const GOAL_GROUPS = [["peso", ["rebajar", "mantener", "masa"]], ["estilo", ["nutritivo", "vegetariano", "vegano", "lowcarb", "azucar"]], ["salud", ["sodio", "diabetes", "dash", "colesterol", "autismo"]]];
const GOAL_ICONS = { rebajar: "🥗", masa: "💪", mantener: "⚖️", sodio: "🧂", lowcarb: "🥩", azucar: "🍬", nutritivo: "🥦", vegetariano: "🥕", vegano: "🌱", diabetes: "🩺", dash: "❤️", colesterol: "🫀", autismo: "♾️" };
function goalButtonsHTML() {
  const tr = pt();
  return GOAL_GROUPS.map(([grp, keys]) => `
    <div class="goal-group">
      <h3 class="goal-group-title">${esc(tr.goalGroups[grp])}</h3>
      <div class="goal-grid">${keys.map((k) => `
        <button type="button" class="goal-card" role="radio" aria-checked="${plan.goal === k}" data-goal="${k}">
          <span class="goal-icon" aria-hidden="true">${GOAL_ICONS[k]}</span>
          <span class="goal-name">${esc(tr.goals[k][0])}</span>
          <span class="goal-desc">${esc(tr.goals[k][1])}</span>
        </button>`).join("")}</div>
    </div>`).join("");
}
/* Los ajustes se abren la primera vez; después el plan va arriba y los ajustes, plegados tras el resumen. */
let plansSetupOpen = null;
function setPlansSetup(open) {
  plansSetupOpen = open;
  const box = $("plans-setup"), btn = $("plans-setup-btn");
  if (box) box.hidden = !open;
  if (btn) { btn.setAttribute("aria-expanded", String(open)); btn.querySelector("span").textContent = open ? pt().setupClose : pt().setupOpen; }
}
function renderPlansShell() {
  const tr = pt();
  const v = $("view-plans");
  if (plansSetupOpen === null) plansSetupOpen = !plan.ts;
  v.innerHTML = `
  <div class="container plans-wrap">
    <header class="plans-head">
      <h1 class="section-title" id="plans-title" tabindex="-1">${esc(tr.title)}</h1>
      <p class="section-sub">${esc(tr.intro)}</p>
    </header>
    <div class="plans-summary">
      <p class="plans-summary-text" id="plans-summary" aria-live="polite"></p>
      <button type="button" class="btn btn-outline" id="plans-setup-btn" aria-controls="plans-setup" aria-expanded="${plansSetupOpen}"><svg class="icon" aria-hidden="true"><use href="#i-filter"/></svg><span>${esc(plansSetupOpen ? tr.setupClose : tr.setupOpen)}</span></button>
    </div>
    <div class="plans-setup" id="plans-setup" ${plansSetupOpen ? "" : "hidden"}>
    <h2 class="plans-step">${esc(tr.stepGoal)}</h2>
    <div class="goal-groups" role="radiogroup" aria-label="${esc(tr.goalLabel)}">${goalButtonsHTML()}</div>
    <h2 class="plans-step">${esc(tr.stepMore)}</h2>
    <div class="plans-controls">
      <details class="plans-me" ${plan.sex ? "open" : ""}>
        <summary>${esc(tr.meTitle)}</summary>
        <p class="plans-help">${esc(tr.meHelp)}</p>
        <div class="plans-form">
          <label>${esc(tr.sex)}
            <select data-field="sex"><option value="">—</option><option value="female">${esc(tr.female)}</option><option value="male">${esc(tr.male)}</option></select></label>
          <label>${esc(tr.age)}<input type="number" inputmode="numeric" min="2" max="100" data-field="age"></label>
          <label>${esc(tr.weight)}<input type="number" inputmode="decimal" min="70" max="600" data-field="weight"></label>
          <fieldset class="plans-height"><legend>${esc(tr.height)}</legend>
            <label><input type="number" inputmode="numeric" min="3" max="8" data-field="ft"> ${esc(tr.feet)}</label>
            <label><input type="number" inputmode="numeric" min="0" max="11" data-field="inch"> ${esc(tr.inches)}</label>
          </fieldset>
          <label class="plans-activity">${esc(tr.activity)}
            <select data-field="activity">${tr.activities.map((a, i) => `<option value="${i}">${esc(a)}</option>`).join("")}</select></label>
        </div>
      </details>
      <div class="plans-side">
        <label class="plans-season-pick">${esc(tr.seasonLabel)}
          <select data-season>${Object.keys(tr.seasons).map((k) => `<option value="${k}" ${plan.season === k ? "selected" : ""}>${esc(k === "auto" ? `${tr.seasons.auto} (${tr.seasons[autoSeason()]})` : tr.seasons[k])}</option>`).join("")}</select>
        </label>
        <fieldset class="plans-avoid" id="plans-prefs"></fieldset>
        <fieldset class="plans-avoid"><legend>${esc(tr.protLabel)}</legend>
          <p class="plans-help">${esc(tr.protHelp)}</p>
          ${Object.keys(tr.protOpts).map((k) => `<label class="chip-check chip-pref"><input type="checkbox" data-prot="${k}" ${plan.protein.includes(k) ? "checked" : ""}><span>${esc(tr.protOpts[k])}</span></label>`).join("")}
        </fieldset>
        <fieldset class="plans-avoid"><legend>${esc(tr.avoid)}</legend>
          ${Object.keys(AVOID).map((k) => `<label class="chip-check"><input type="checkbox" data-avoid="${k}" ${plan.avoid.includes(k) ? "checked" : ""}><span>${esc(tr.avoidOpts[k])}</span></label>`).join("")}
        </fieldset>
      </div>
    </div>
    <button type="button" class="btn btn-primary plans-setup-done" data-setup-done>${esc(tr.setupClose)}</button>
    </div>
    <div id="plans-health"></div>
    <div class="plans-target" id="plans-target" aria-live="polite"></div>
    <div class="plans-actions">
      <div class="plans-actions-main">
        <div class="seg" role="group">
          <button type="button" class="btn btn-outline" data-days="1" aria-pressed="${plan.days === 1}">${esc(tr.oneDay)}</button>
          <button type="button" class="btn btn-outline" data-days="7" aria-pressed="${plan.days === 7}">${esc(tr.sevenDays)}</button>
        </div>
        <button type="button" class="btn btn-primary" id="plans-another">${esc(tr.another)}</button>
      </div>
      <div class="plans-actions-more">
        <label class="plans-people">${esc(tr.people)}
          <input type="number" inputmode="numeric" min="1" max="12" data-people value="${plan.people}"></label>
        <button type="button" class="btn btn-outline" id="plans-shop"><svg class="icon" aria-hidden="true"><use href="#i-cart"/></svg><span>${esc(tr.shopPlan)}</span></button>
        <button type="button" class="btn btn-outline" id="plans-print"><svg class="icon" aria-hidden="true"><use href="#i-print"/></svg><span>${esc(tr.printPlan)}</span></button>
      </div>
    </div>
    <div id="plans-output"></div>
    <details class="plans-fold" id="plans-season-fold">
      <summary class="plans-more-title" id="plans-season-sum"></summary>
      <div id="plans-season"></div>
    </details>
    <details class="plans-fold plans-more">
      <summary class="plans-more-title">${esc(tr.moreFold)}</summary>
      <p class="plans-help">${esc(tr.moreSub)}</p>
      <div id="plans-more"></div>
    </details>
    <p class="plans-disclaimer" role="note">${esc(tr.disclaimer)}</p>
  </div>`;
  for (const el of v.querySelectorAll("[data-field]")) el.value = plan[el.dataset.field] ?? "";
  renderPlanOutput();
}
function nutriLine(n, m = 1) {
  const tr = pt();
  return `<span>${Math.round(n.kcal * m)} ${tr.kcal}</span><span>${Math.round(n.p * m)} g ${tr.prot}</span><span>${Math.round(n.c * m)} g ${tr.carbs}</span><span>${Math.round(n.na * m)} mg ${tr.sodium}</span>${PLAN_GOALS[plan.goal].chol ? `<span>${Math.round(n.chol * m)} mg ${tr.chol}</span>` : ""}`;
}
function mealHTML(meal, d, j) {
  const tr = pt();
  if (!meal.item) return `<li class="plan-meal plan-meal-empty"><span class="plan-slot">${esc(tr.slots[meal.slot])}</span><span>—</span></li>`;
  const r = meal.item.r;
  const key = `${d}-${j}`;
  const openKey = planSwap && planSwap.key;
  return `<li class="plan-meal">
    <span class="plan-slot">${esc(tr.slots[meal.slot])}</span>
    <a class="plan-thumb" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}" tabindex="-1" aria-hidden="true">${coverHTML(r.category, r)}</a>
    <span class="plan-meal-body">
      <span class="plan-meal-top">
        <a class="plan-meal-name" href="#/receta/${encodeURIComponent(r.id)}" data-open="${esc(r.id)}">${esc(r.name[currentLang])}</a>
        ${swapButtonHTML(key, r.name[currentLang])}
      </span>
      ${meal.lo ? `<span class="plan-badge plan-badge-lo">${esc(tr.leftoverLabel)}</span>` : ""}
      <span class="plan-portion">${esc(tr.portions(meal.m))} <span class="plan-yield">${esc(tr.yields(r.servings))}</span></span>
      <span class="plan-nutri">${nutriLine(meal.item.n, meal.m)}</span>
      ${PLAN_GOALS[plan.goal].carbMeal ? `<span class="plan-carbs">${esc(tr.carbChoices(Math.round(mealCarbs(meal))))}</span>` : ""}
      ${badgesHTML(meal.item.n, meal.m)}
      ${plateHTML(meal)}
      ${(meal.sides || []).length ? `<ul class="plan-sides">${meal.sides.map((sd, s) => `
        <li><span class="plan-side-plus" aria-hidden="true">+</span>
          <span class="plan-side-main">
            <a href="#/receta/${encodeURIComponent(sd.item.r.id)}" data-open="${esc(sd.item.r.id)}">${esc(sd.item.r.name[currentLang])}</a>
            <span class="plan-side-n">${esc(tr.portions(sd.m))} · ${Math.round(sd.item.n.kcal * sd.m)} ${tr.kcal} · ${Math.round(sd.item.n.p * sd.m)} g ${tr.prot}</span>
          </span>
          ${swapButtonHTML(`${key}-${s}`, sd.item.r.name[currentLang])}</li>`).join("")}</ul>` : ""}
    </span>
    ${calendarToolsHTML(meal, d, j)}
    ${openKey === key || (openKey || "").startsWith(`${key}-`) ? swapPanelHTML(openKey) : ""}
  </li>`;
}
/* Plan de 7 días: pasar una comida a otro día (se intercambia con la de ese día) y dejar sobras. */
function calendarToolsHTML(meal, d, j) {
  if (plan.days < 2 || !planStart) return "";
  const tr = pt();
  const name = meal.item.r.name[currentLang];
  const canLeft = ["almuerzo", "cena"].includes(meal.slot) && d < plan.days - 1 && !meal.lo;
  return `<span class="plan-cal">
    <label class="plan-move"><span>${esc(tr.moveTo)}</span>
      <select data-move="${d}-${j}" aria-label="${esc(tr.moveHelp(name))}">
        <option value="">—</option>
        ${Array.from({ length: plan.days }, (_, i) => i).filter((i) => i !== d).map((i) => `<option value="${i}">${esc(dayName(addDays(planStart, i), { weekday: "short", day: "numeric" }))}</option>`).join("")}
      </select></label>
    ${canLeft ? `<button type="button" class="btn btn-ghost btn-sm" data-leftover="${d}-${j}">${esc(tr.leftover)}</button>` : ""}
  </span>`;
}
let planStart = null;
function moveMeal(d, j, d2) {
  const sv = plan.saved;
  if (!sv || !sv.meals[d] || !sv.meals[d2]) return;
  const a = sv.meals[d].items[j], b = sv.meals[d2].items[j];
  if (!a || !b) return;
  sv.meals[d].items[j] = b; sv.meals[d2].items[j] = a;
  const pa = planDays[d][j]; planDays[d][j] = planDays[d2][j]; planDays[d2][j] = pa;
  savePlan();
}
function leftoverMeal(d, j) {
  const sv = plan.saved;
  const src = sv && sv.meals[d] && sv.meals[d].items[j];
  const lunch = SLOTS.findIndex((s) => s.key === "almuerzo");
  if (!src || !sv.meals[d + 1]) return false;
  // Antes se reemplazaba el almuerzo de mañana sin avisar.
  const had = planDays[d + 1][lunch], now = planDays[d][j];
  if (had && had.item && now && now.item && had.item.r.id !== now.item.r.id && !confirm(pt().leftoverConfirm(now.item.r.name[currentLang], had.item.r.name[currentLang]))) return false;
  sv.meals[d + 1].items[lunch] = { slot: "almuerzo", id: src.id, m: src.m, lo: 1, sides: src.sides.map((s) => ({ ...s })) };
  const m = planDays[d][j];
  planDays[d + 1][lunch] = { slot: "almuerzo", item: m.item, m: m.m, sides: (m.sides || []).map((s) => ({ ...s })), lo: 1 };
  savePlan();
  return true;
}
/* Plato saludable (almuerzo y cena): la mitad del plato de vegetales, que son ~1 taza o más. */
function plateHTML(meal) {
  if (!["almuerzo", "cena"].includes(meal.slot)) return "";
  const tr = pt();
  // Sólo los vegetales que no son vianda (vegNS): la mitad del plato es de ésos. ¾ de taza o más ya lo cumple.
  const veg = [[meal.item, meal.m], ...(meal.sides || []).map((sd) => [sd.item, sd.m])].reduce((a, [it, m]) => a + ((it.g && it.g.vegNS) || 0) * m, 0);
  return veg >= 0.75 ? `<span class="plan-plate is-ok">✓ ${esc(tr.plateOk)}</span>` : `<span class="plan-plate">${esc(tr.plateTip)}</span>`;
}
function dayStats(meals) {
  const tot = { kcal: 0, p: 0, c: 0, na: 0, fib: 0, s: 0, sat: 0, k: 0, chol: 0, ca: 0, vd: 0 };
  const grp = { veg: 0, fruit: 0, grain: 0, wgrain: 0, dairy: 0 };
  let addOver = 0;
  for (const x of meals) {
    if (!x.item) continue;
    const parts = [{ it: x.item, m: x.m }, ...(x.sides || []).map((sd) => ({ it: sd.item, m: sd.m }))];
    let add = 0;
    for (const { it, m } of parts) {
      for (const k in tot) tot[k] += (it.n[k] || 0) * m;
      add += (it.n.add || 0) * m;
      if (it.g) for (const k in grp) grp[k] += (it.g[k] || 0) * m;
    }
    if (add > 10) addOver++;
  }
  return { tot, grp, addOver };
}
/* Semáforo del día, arriba (v4.48; antes los totales iban al final del día): verde dentro de la meta,
   amarillo cerca y rojo lejos, con ✓ o ! para no depender sólo del color. */
function daySummaryHTML(tot, grp, target) {
  const tr = pt();
  const cap = sodiumCap(target);
  const tg = dgaTargets(target.kcal);
  const rk = tot.kcal / target.kcal, rp = tot.p / target.protein;
  const lvl = (ok, warn) => (ok ? "ok" : warn ? "warn" : "bad");
  const cell = (label, val, level, pct) => `<li class="plan-sum is-${level}"><span class="plan-sum-label"><span aria-hidden="true">${level === "ok" ? "✓" : "!"}</span> ${esc(label)}</span><span class="plan-sum-val">${val}</span>${pct === undefined ? "" : `<span class="plan-bar"><span class="plan-bar-fill" style="width:${Math.min(100, Math.round(pct * 100))}%"></span></span>`}</li>`;
  const tips = [];
  if (rp < 0.9) tips.push(tr.protTip[activeDiet() === "vegan" ? "vegan" : activeDiet() ? "veg" : "normal"]);
  if (tot.na > cap) tips.push(tr.naTip(cap));
  if (grp.fruit < tg.fruit * 0.5 && !PLAN_GOALS[plan.goal].carbMeal) tips.push(tr.fruitTip);
  return `<ul class="plan-sums" aria-label="${esc(tr.total)}">
      ${cell(tr.sum.kcal, `${Math.round(tot.kcal).toLocaleString("en-US")} / ${target.kcal.toLocaleString("en-US")}`, lvl(rk >= 0.9 && rk <= 1.1, rk >= 0.8 && rk <= 1.2), rk)}
      ${cell(tr.sum.prot, `${Math.round(tot.p)} / ${target.protein} g`, lvl(rp >= 0.9, rp >= 0.75), rp)}
      ${cell(tr.sum.na, `${(Math.round(tot.na / 10) * 10).toLocaleString("en-US")} / ${cap.toLocaleString("en-US")} mg`, lvl(tot.na <= cap, tot.na <= cap * 1.2), tot.na / cap)}
      ${cell(tr.sum.veg, `${fmtHalf(grp.veg)} / ${tg.veg} ${tr.cups}`, lvl(grp.veg >= tg.veg * 0.9, grp.veg >= tg.veg * 0.5), grp.veg / tg.veg)}
      ${cell(tr.sum.fruit, `${fmtHalf(grp.fruit)} / ${tg.fruit} ${tr.cups}`, lvl(grp.fruit >= tg.fruit * 0.9, grp.fruit >= tg.fruit * 0.5), grp.fruit / tg.fruit)}
      <li class="plan-sum is-water"><span class="plan-sum-label"><span aria-hidden="true">💧</span> ${esc(tr.sum.water)}</span><span class="plan-sum-val">${esc(tr.waterVal(waterGlasses(target)))}</span></li>
    </ul>
    <p class="plan-sum-extra">${Math.round(tot.c)} g ${tr.carbs} · ${Math.round(tot.fib)} g ${tr.fiber} · ${Math.round(tot.s)} g ${tr.sugarW} · ${Math.round(tot.chol).toLocaleString("en-US")} mg ${tr.chol}</p>
    ${tips.length ? `<ul class="plan-tips">${tips.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}`;
}
function dayHTML(meals, i, target, iso, active) {
  const tr = pt();
  const { tot, grp, addOver } = dayStats(meals);
  const week = plan.days > 1;
  return `<article class="plan-day" ${week ? `id="plan-day-${i}" role="tabpanel" aria-labelledby="plan-tab-${i}" ${active ? "" : "hidden"}` : ""}>
    ${week ? `<h3 class="plan-day-title">${esc(iso ? dayName(iso, { weekday: "long", day: "numeric", month: "short" }) : tr.day(i + 1))}</h3>` : ""}
    ${daySummaryHTML(tot, grp, target)}
    <ol class="plan-meals">${meals.map((m, j) => mealHTML(m, i, j)).join("")}</ol>
    ${dgaHTML(tot, grp, addOver, target)}
  </article>`;
}
/* Resumen de la semana (plan de 7 días): promedios contra la meta y la variedad que pide un nutricionista. */
const PROCESSED_RX = /salchich|longaniza|chorizo|jamon|salami|tocineta|tocino|salchichon|pepperoni|jamonilla|mortadela|spam/;
const BEANS_RX = /habichuela|garbanzo|gandul|lenteja|frijol|hummus/;
function weekHTML(days, target) {
  const tr = pt();
  const cap = sodiumCap(target);
  let k = 0, p = 0, naOk = 0, fish = 0, beans = 0, proc = 0;
  for (const meals of days) {
    const { tot } = dayStats(meals);
    k += tot.kcal / target.kcal; p += tot.p / target.protein; if (tot.na <= cap) naOk++;
    for (const x of meals) {
      if (!x.item || x.lo) continue;
      const items = [x.item, ...(x.sides || []).map((sd) => sd.item)];
      if (proteinsOf(x.item.r).some((q) => q === "pescado" || q === "mariscos")) fish++;
      if (items.some((it) => BEANS_RX.test(planNorm(it.r.name.es)))) beans++;
      if (items.some((it) => PROCESSED_RX.test(planNorm(it.r.name.es)))) proc++;
    }
  }
  const n = days.length;
  const row = (ok, txt) => `<li class="${ok ? "is-ok" : "is-warn"}"><span aria-hidden="true">${ok ? "✓" : "!"}</span> ${esc(txt)}</li>`;
  const hasFish = !activeDiet() && !plan.avoid.includes("fish") && !(plan.protein.length && !plan.protein.some((q) => q === "pescado" || q === "mariscos"));
  return `<section class="plan-week" aria-labelledby="plan-week-title">
    <h3 class="plan-week-title" id="plan-week-title">${esc(tr.weekTitle)}</h3>
    <ul class="dga-limits">
      ${row(Math.abs(k / n - 1) <= 0.1 && p / n >= 0.9, tr.weekAvg(Math.round((k / n) * 100), Math.round((p / n) * 100)))}
      ${row(naOk === n, tr.weekNa(naOk, cap))}
      ${hasFish ? row(fish >= 2, tr.weekFish(fish)) : ""}
      ${row(beans >= 3, tr.weekBeans(beans))}
      ${activeDiet() ? "" : row(proc <= 1, tr.weekProc(proc))}
    </ul>
  </section>`;
}
/* Guías Alimentarias para Estadounidenses 2025–2030 (USDA/HHS): para 2,000 calorías, 3 porciones de
   vegetales, 2 de frutas, 2–4 de granos integrales y 3 de lácteos; proteína de 1.2 a 1.6 g por kilo;
   grasa saturada bajo 10% de las calorías y 10 g o menos de azúcar añadida por comida. Sodio: el
   valor diario de la etiqueta de la FDA (2,300 mg). Vegetales, frutas y granos se ajustan a la meta. */
function dgaTargets(kcal) {
  const f = kcal / 2000;
  const half = (v) => Math.max(0.5, Math.round(v * 2) / 2);
  return { veg: half(3 * f), fruit: half(2 * f), wgrain: [half(2 * f), half(4 * f)], dairy: 3 };
}
function dgaHTML(tot, grp, addOver, target) {
  const tr = pt();
  const tg = dgaTargets(target.kcal);
  const kg = target.kg;
  const row = (k, val, goal) => {
    const lo = Array.isArray(goal) ? goal[0] : goal;
    const pct = Math.min(100, Math.round((val / lo) * 100));
    const goalTxt = Array.isArray(goal) ? `${goal[0]}–${goal[1]}` : goal;
    return `<li class="dga-row${val >= lo * 0.9 ? " is-ok" : ""}"><span class="dga-name">${esc(tr.dga[k])}</span>
      <span class="plan-bar"><span class="plan-bar-fill" style="width:${pct}%"></span></span>
      <span class="dga-val">${fmtHalf(val)} / ${goalTxt} ${esc(tr.dgaUnits[k])}</span></li>`;
  };
  const satPct = tot.kcal ? Math.round(((tot.sat * 9) / tot.kcal) * 100) : 0;
  const pA = Math.round(kg * 1.2), pB = Math.round(kg * 1.6);
  const lim = (ok, txt) => `<li class="${ok ? "is-ok" : "is-warn"}"><span aria-hidden="true">${ok ? "✓" : "!"}</span> ${esc(txt)}</li>`;
  const kAI = plan.sex === "female" ? 2600 : 3400; // ingesta adecuada de potasio (Academias Nacionales, 2019)
  // Colesterol de la comida: 300 mg es el valor diario de la etiqueta de la FDA; con el objetivo de colesterol, 200 mg.
  const cholMax = PLAN_GOALS[plan.goal].chol ? 200 : 300;
  // Sodio para niños: límite de las Academias Nacionales (2019) por edad.
  const naChild = !target.child ? 2300 : target.age < 4 ? 1200 : target.age < 9 ? 1500 : 1800;
  return `<details class="plan-dga">
    <summary>${esc(tr.dgaTitle)}</summary>
    <p class="plans-help">${esc(tr.dgaSub(target.kcal))}</p>
    <ul class="dga-list">${row("veg", grp.veg, tg.veg)}${row("fruit", grp.fruit, tg.fruit)}${row("wgrain", grp.wgrain, tg.wgrain)}${row("dairy", grp.dairy, tg.dairy)}</ul>
    <p class="dga-sub">${esc(tr.limits)}</p>
    <ul class="dga-limits">
      ${PLAN_GOALS[plan.goal].chol ? lim(satPct < 6, tr.limSatChol(satPct)) : lim(satPct < 10, tr.limSat(satPct))}
      ${lim(tot.chol < cholMax, tr.limChol(Math.round(tot.chol / 5) * 5, cholMax))}
      ${lim(!addOver, tr.limAdd(addOver))}
      ${target.child ? lim(tot.na < naChild, tr.limNaChild(Math.round(tot.na / 10) * 10, naChild)) : lim(tot.na < 2300, tr.limNa(Math.round(tot.na / 10) * 10))}
      ${target.child ? lim(tot.p >= target.protein * 0.9, tr.limProtChild(Math.round(tot.p), target.protein)) : lim(tot.p >= pA * 0.9, tr.limProt(Math.round(tot.p), pA, pB))}
      ${PLAN_GOALS[plan.goal].dash ? lim(tot.k >= kAI, tr.limK(Math.round(tot.k / 10) * 10, kAI)) : ""}
      ${PLAN_GOALS[plan.goal].kids ? autismLimits(tot, target, lim, tr) : ""}
    </ul>
    <p class="plans-help">${esc(tr.dgaNote)}</p>
  </details>`;
}
/* Fibra: 14 g por cada 1,000 calorías (Guías Alimentarias). Calcio: RDA por edad (1,300 mg de 9 a 18 años; 1,000 mg de
   4 a 8 y adultos hasta 50; 700 mg de 1 a 3; 1,200 mg mujeres de 51+ y todos de 71+). Vitamina D: 15 mcg (RDA). */
function autismLimits(tot, target, lim, tr) {
  const fibGoal = Math.round((target.kcal / 1000) * 14);
  const a = target.age || 30;
  const caGoal = a < 4 ? 700 : a < 9 ? 1000 : a < 19 ? 1300 : a > 70 || (a > 50 && plan.sex === "female") ? 1200 : 1000;
  return lim(tot.fib >= fibGoal * 0.9, tr.limFib(Math.round(tot.fib), fibGoal)) +
    lim(tot.ca >= caGoal * 0.9, tr.limCa(Math.round(tot.ca / 10) * 10, caGoal)) +
    lim(tot.vd >= 15 * 0.9, tr.limVd(Math.round(tot.vd * 10) / 10));
}
const fmtHalf = (v) => { const r = Math.round(v * 2) / 2; return r % 1 ? `${Math.floor(r) || ""}½` : String(r); };
function seasonList() {
  const season = activeSeason();
  if (season === "todo") return [];
  const g = PLAN_GOALS[plan.goal];
  const out = [];
  for (const r of recipes) {
    if (!inSeasonOf(r, season)) continue;
    if (["salsas"].includes(r.category)) continue;
    const info = planInfo(r);
    if (plan.avoid.some((k) => AVOID[k] && AVOID[k](info.allergens, r))) continue;
    if (!dietOk(r)) continue;
    if (plan.prefs.includes("quick") && !isQuick(r)) continue;
    out.push({ r, n: info.n, alcohol: info.alcohol, score: g.score(info.n) });
  }
  return out.sort((a, b) => b.score - a.score);
}
function badgesHTML(n, m = 1) {
  const tr = pt();
  const b = badgesOf(n, m);
  return b.length ? `<span class="plan-badges">${b.map((k) => `<span class="plan-badge plan-badge-${k}">${esc(tr.badges[k])}</span>`).join("")}</span>` : "";
}
function moreHTML(pools) {
  const tr = pt();
  const groups = [["desayuno", pools.desayuno], ["almuerzo", pools.main], ["acomp", pools.side], ["merienda", pools.merienda]];
  return groups.map(([k, list]) => `
    <div class="plans-more-group">
      <h3 class="plans-more-slot">${esc(k === "almuerzo" ? `${tr.slots.almuerzo} / ${tr.slots.cena}` : k === "acomp" ? tr.sidesTitle : tr.slots[k])} <span class="plans-count">${list.length}</span></h3>
      <ul class="plans-more-list">${list.slice(0, 12).map((x) => `
        <li><a href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(x.r.name[currentLang])}</a>
        <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot} · ${esc(tr.perPortion)}</span>${badgesHTML(x.n)}</li>`).join("")}
      </ul>
    </div>`).join("");
}
/* Lo de temporada va plegado (v4.48): antes ocupaba ~1,600 px debajo del plan en el celular. */
function seasonHTML(list) {
  const tr = pt();
  return `<div class="plans-season">
    <p class="plans-help">${esc(tr.seasonSub)}</p>
    <ul class="plans-season-list">${list.slice(0, 24).map((x) => `
      <li><a href="#/receta/${encodeURIComponent(x.r.id)}" data-open="${esc(x.r.id)}">${esc(x.r.name[currentLang])}</a>
      <span class="plans-more-n">${Math.round(x.n.kcal)} ${tr.kcal} · ${Math.round(x.n.p)} g ${tr.prot}</span></li>`).join("")}
    </ul>
  </div>`;
}
/* Preferencias: la dieta sólo se escoge cuando el objetivo no la trae (antes salía dos veces). */
function prefsHTML() {
  const tr = pt();
  const gd = PLAN_GOALS[plan.goal].diet;
  return `<legend>${esc(tr.prefsLabel)}</legend>
    ${gd ? `<p class="plans-help">${esc(tr.dietByGoal(tr.goals[plan.goal][0]))}</p>`
      : `<p class="plans-help">${esc(tr.dietHelp)}</p>${PLAN_DIETS.map((k) => `<label class="chip-check chip-pref chip-radio"><input type="radio" name="plan-diet" data-diet="${k}" ${plan.diet === k ? "checked" : ""}><span>${esc(tr.diets[k])}</span></label>`).join("")}`}
    ${Object.keys(tr.prefs).map((k) => `<label class="chip-check chip-pref"><input type="checkbox" data-pref="${k}" ${plan.prefs.includes(k) ? "checked" : ""}><span>${esc(tr.prefs[k])}</span></label>`).join("")}`;
}
function planPeriodHTML(pools, target) {
  const tr = pt();
  const { start, days } = periodPlan(pools, target);
  planDays = days;
  planStart = start;
  const long ={ weekday: "long", day: "numeric", month: "long" };
  const period = plan.days === 1
    ? tr.periodDay(dayName(start, long).toLowerCase())
    : tr.periodWeek(dayName(start, { day: "numeric", month: "long" }), dayName(addDays(start, 6), { day: "numeric", month: "long" }), dayName(addDays(start, 7), long).toLowerCase());
  // 7 días: un día a la vez con pestañas (v4.48; antes los 7 seguidos). Empieza en el día de hoy.
  const week = plan.days > 1;
  if (week && (planDayTab === null || planDayTab >= days.length)) {
    const today = Math.round((parseDay(isoDay(new Date())) - parseDay(start)) / 86400000);
    planDayTab = Math.min(days.length - 1, Math.max(0, today));
  }
  const tabs = week ? `<div class="plan-tabs" role="tablist" aria-label="${esc(tr.dayTabs)}">${days.map((_, i) => {
    const iso = addDays(start, i), on = i === planDayTab;
    return `<button type="button" class="plan-tab" role="tab" id="plan-tab-${i}" aria-controls="plan-day-${i}" aria-selected="${on}" tabindex="${on ? 0 : -1}" data-day-tab="${i}"><span>${esc(dayName(iso, { weekday: "short" }))}</span><strong>${esc(dayName(iso, { day: "numeric" }))}</strong></button>`;
  }).join("")}</div>` : "";
  return (pools.relaxed ? `<p class="plans-warn">${esc(tr.relaxed)}</p>` : "") +
    `<p class="plans-period">${esc(period)} <span class="plans-saved">${esc(tr.savedNote)}</span></p>` +
    (week ? weekHTML(days, target) : "") + tabs +
    `<div class="plan-days">${days.map((d, i) => dayHTML(d, i, target, addDays(start, i), !week || i === planDayTab)).join("")}</div>`;
}
let planDayTab = null;
function selectDayTab(i, focus) {
  planDayTab = i;
  const v = $("view-plans");
  v.querySelectorAll("[data-day-tab]").forEach((b) => { const on = +b.dataset.dayTab === i; b.setAttribute("aria-selected", String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
  v.querySelectorAll(".plan-day[role=tabpanel]").forEach((d) => { d.hidden = d.id !== `plan-day-${i}`; });
}
function renderPlanOutput(keepSwap = false) {
  const tr = pt();
  if (!keepSwap) planSwap = null; // otro objetivo, otros ajustes u otro plan: se cierra la lista
  const target = planTargets();
  const floorHit = target.custom && !target.child && target.kcal <= (plan.sex === "male" ? 1500 : 1200);
  $("plans-summary").innerHTML = `${tr.summary(esc(tr.goals[plan.goal][0]), target.kcal, target.protein)} <span class="plans-summary-src">(${esc(target.custom ? tr.summaryData : tr.summaryNoData)})</span>`;
  $("plans-prefs").innerHTML = prefsHTML();
  $("plans-target").innerHTML = `<p>${target.child ? tr.targetsChild(target.kcal, target.protein) : tr.targets(target.kcal, target.protein, target.custom)}</p>` +
    (!target.custom ? `<p class="plans-data-cta">${esc(tr.dataCta)} <button type="button" class="btn btn-outline btn-sm" data-open-me>${esc(tr.dataBtn)}</button></p>` : "") +
    (target.adjusted ? `<p class="plans-note">${esc(tr.adjusted)}</p>` : "") +
    (PLAN_GOALS[plan.goal].routine ? `<p class="plans-note">${esc(tr.routine)}</p>` : "") +
    (floorHit ? `<p class="plans-warn">${esc(tr.minWarn)}</p>` : "") +
    ageNoteHTML() +
    goalNoteHTML(tr.goalNotes[plan.goal]);
  $("plans-health").innerHTML = HEALTH_GOALS.has(plan.goal)
    ? `<div class="plans-callout plans-health" role="note"><p><strong>${esc(tr.healthTitle)}</strong></p><p>${esc(tr.healthText)}</p></div>` : "";
  const pools = candidates();
  planPools = pools;
  const enough = pools.desayuno.length && pools.main.length >= 2 && pools.merienda.length;
  $("plans-output").innerHTML = enough
    ? planPeriodHTML(pools, target)
    : `<p class="plans-warn">${esc(tr.noMatch)}</p>`;
  $("plans-more").innerHTML = moreHTML(pools);
  const season = activeSeason();
  const sList = season === "todo" ? [] : seasonList();
  $("plans-season-fold").hidden = !sList.length;
  $("plans-season-sum").textContent = sList.length ? tr.seasonFold(tr.seasons[season], sList.length) : "";
  $("plans-season").innerHTML = sList.length ? seasonHTML(sList) : "";
}

/* El plan entero a la lista de compras (js/kitchen.js): cada receta por las porciones del plan ×
   las personas en casa; las sobras no se compran otra vez. */
function addPlanToShop() {
  if (!planDays || typeof addToShop !== "function") return;
  const need = new Map();
  const put = (it, m) => { const r = it.r; need.set(r.id, (need.get(r.id) || 0) + (m * plan.people) / r.servings); };
  for (const day of planDays) for (const x of day) {
    if (!x.item || x.lo) continue;
    put(x.item, x.m);
    for (const sd of x.sides || []) put(sd.item, sd.m);
  }
  for (const [id, f] of need) addToShop(id, f);
  toast(pt().shopPlanDone(need.size), true);
}

/* Objetivos para una condición de salud: llevan el aviso médico arriba, junto a las metas. */
const HEALTH_GOALS = new Set(["sodio", "diabetes", "dash", "colesterol", "autismo"]);
/* La edad que la app no sabe calcular se dice (antes, menores de 14 recibían la meta típica de adulto sin aviso). */
function ageNoteHTML() {
  const age = parseFloat(plan.age);
  if (!(age > 0)) return "";
  if (age < 2) return `<p class="plans-warn">${esc(pt().ageTooLow)}</p>`;
  if (age < 14 && !PLAN_GOALS[plan.goal].kids) return `<p class="plans-warn">${esc(pt().ageKids)}</p>`;
  return "";
}

/* La nota del objetivo: un párrafo, o (autismo) un recuadro con el aviso en negrita y las recomendaciones. */
function goalNoteHTML(note) {
  if (!Array.isArray(note)) return `<p class="plans-note">${esc(note)}</p>`;
  const [head, ...tips] = note;
  return `<div class="plans-callout" role="note"><p><strong>${esc(head)}</strong></p><ul>${tips.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
}

function showPlans() {
  const fromRecipe = !$("view-recipe").hidden;
  current = null;
  $("view-home").hidden = true;
  $("view-recipe").hidden = true;
  $("view-admin").hidden = true;
  $("view-plans").hidden = false;
  document.title = `${pt().title} — ${BRAND}`;
  renderPlansShell();
  if (fromRecipe) jumpTo(plansScrollY);
  else { jumpTo(0); $("plans-title").focus({ preventScroll: true }); }
}

function setupPlans() {
  const v = $("view-plans");
  v.addEventListener("click", (e) => {
    const goal = e.target.closest("[data-goal]");
    if (goal) {
      plan.goal = goal.dataset.goal; savePlan();
      v.querySelectorAll("[data-goal]").forEach((b) => b.setAttribute("aria-checked", String(b === goal)));
      renderPlanOutput(); return;
    }
    const days = e.target.closest("[data-days]");
    if (days) {
      plan.days = +days.dataset.days; savePlan();
      v.querySelectorAll("[data-days]").forEach((b) => b.setAttribute("aria-pressed", String(b === days)));
      renderPlanOutput(); return;
    }
    if (e.target.closest("#plans-setup-btn")) { setPlansSetup(!plansSetupOpen); return; }
    if (e.target.closest("[data-setup-done]")) {
      setPlansSetup(false);
      const out = $("plans-target"); if (out) jumpTo(out.getBoundingClientRect().top + window.scrollY - 80);
      return;
    }
    if (e.target.closest("[data-open-me]")) {
      setPlansSetup(true);
      const me = v.querySelector(".plans-me"); if (me) { me.open = true; me.scrollIntoView({ block: "start" }); const f = me.querySelector("[data-field]"); if (f) f.focus({ preventScroll: true }); }
      return;
    }
    const tab = e.target.closest("[data-day-tab]");
    if (tab) { selectDayTab(+tab.dataset.dayTab); return; }
    if (e.target.closest("#plans-another")) { plan.seed = (plan.seed % 9973) + 1; savePlan(); renderPlanOutput(); return; }
    if (e.target.closest("#plans-print")) {
      document.body.classList.add("print-plan");
      v.querySelectorAll(".plan-dga").forEach((d) => { d.open = true; });
      window.print();
      setTimeout(() => document.body.classList.remove("print-plan"), 500);
      return;
    }
    if (e.target.closest("#plans-shop")) { addPlanToShop(); return; }
    const lo = e.target.closest("[data-leftover]");
    if (lo) {
      const [d, j] = lo.dataset.leftover.split("-").map(Number);
      if (leftoverMeal(d, j)) { renderPlanOutput(true); toast(pt().leftoverDone, true); }
      return;
    }
    // Cambiar una comida: abrir o cerrar su lista, ver más, o escoger una.
    const swapBtn = e.target.closest("[data-swap]");
    if (swapBtn) {
      const key = swapBtn.dataset.swap;
      planSwap = planSwap && planSwap.key === key ? null : { key, limit: SWAP_PAGE };
      renderPlanOutput(true);
      const first = planSwap && v.querySelector(`#swap-${key} [data-swap-pick]`);
      (first || v.querySelector(`[data-swap="${key}"]`)).focus({ preventScroll: true });
      return;
    }
    if (e.target.closest("[data-swap-close]") && planSwap) {
      const key = planSwap.key;
      planSwap = null; renderPlanOutput(true);
      const b = v.querySelector(`[data-swap="${key}"]`); if (b) b.focus({ preventScroll: true });
      return;
    }
    if (e.target.closest("[data-swap-more]") && planSwap) {
      const shown = planSwap.limit;
      planSwap.limit += SWAP_PAGE; renderPlanOutput(true);
      const next = v.querySelectorAll(`#swap-${planSwap.key} [data-swap-pick]`)[shown];
      if (next) next.focus({ preventScroll: true });
      return;
    }
    const pick = e.target.closest("[data-swap-pick]");
    if (pick && planSwap) {
      const key = planSwap.key;
      const ref = swapRef(key);
      const r = ref && applySwap(ref, pick.dataset.swapPick);
      planSwap = null; renderPlanOutput(true);
      const b = v.querySelector(`[data-swap="${key}"]`); if (b) b.focus({ preventScroll: true });
      if (r) toast(pt().swapDone(r.name[currentLang]), true);
      return;
    }
    if (e.target.closest("[data-open]")) plansScrollY = window.scrollY;
  });
  v.addEventListener("input", (e) => {
    const f = e.target.dataset.field;
    if (f) { plan[f] = e.target.value; savePlan(); renderPlanOutput(); }
  });
  v.addEventListener("change", (e) => {
    if (e.target.matches("[data-season]")) { plan.season = e.target.value; savePlan(); renderPlanOutput(); return; }
    if (e.target.matches("[data-people]")) { plan.people = Math.min(12, Math.max(1, +e.target.value || 1)); e.target.value = plan.people; savePlan(); return; }
    if (e.target.matches("[data-move]") && e.target.value !== "") {
      const [d, j] = e.target.dataset.move.split("-").map(Number);
      moveMeal(d, j, +e.target.value); renderPlanOutput(true); toast(pt().moved, true);
      return;
    }
    const k = e.target.dataset.avoid, p = e.target.dataset.pref, pr = e.target.dataset.prot, dt = e.target.dataset.diet;
    if (dt) plan.diet = dt;
    else if (k) plan.avoid = e.target.checked ? [...new Set([...plan.avoid, k])] : plan.avoid.filter((x) => x !== k);
    else if (pr) plan.protein = e.target.checked ? [...new Set([...plan.protein, pr])] : plan.protein.filter((x) => x !== pr);
    else if (p) plan.prefs = e.target.checked ? [...new Set([...plan.prefs, p])] : plan.prefs.filter((x) => x !== p);
    else return;
    savePlan(); renderPlanOutput();
  });
  // Flechas entre objetivos, como un grupo de opciones.
  v.addEventListener("keydown", (e) => {
    // Flechas entre las pestañas de los días.
    const tab = e.target.closest("[data-day-tab]");
    if (tab && ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const n = v.querySelectorAll("[data-day-tab]").length, i = +tab.dataset.dayTab;
      selectDayTab(e.key === "Home" ? 0 : e.key === "End" ? n - 1 : (i + (e.key === "ArrowRight" ? 1 : n - 1)) % n, true);
      return;
    }
    const cur = e.target.closest("[data-goal]");
    if (!cur || !["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
    e.preventDefault();
    const all = [...v.querySelectorAll("[data-goal]")];
    const i = all.indexOf(cur), n = all.length;
    const next = all[(i + (["ArrowRight", "ArrowDown"].includes(e.key) ? 1 : n - 1)) % n];
    next.focus(); next.click();
  });
}
