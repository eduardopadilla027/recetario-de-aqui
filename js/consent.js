/* Recetarios de Aquí · Términos y Condiciones de Uso, consentimiento y correo de confirmación.
 *
 * - El texto de los términos (ES/EN), las tres casillas de consentimiento y el correo que confirma la aceptación.
 * - Lo usan la app (js/auth.js: pantalla de entrada y estado "consent"; #/terminos) y el motor de correo
 *   (api/consent-email.js, en el servidor de Vercel), que lo carga con require(): por eso el final exporta.
 * - Si se cambia el texto de forma importante, se sube CONSENT_VERSION: todos deberán aceptar otra vez al entrar.
 * Texto redactado para la app; conviene que lo revise un abogado con licencia en Puerto Rico antes de depender de él. */

const CONSENT_VERSION = "2026-10-18.2";
const CONSENT_SITE = "https://recetariodeaqui.com";
const CONSENT_CONTACT = "recetariodeaqui@gmail.com";

/* Las tres casillas (todas obligatorias). Su clave se guarda en el registro del consentimiento. */
const CONSENT_ITEMS = {
  es: [
    ["terms", "He leído y acepto los Términos y Condiciones de Uso de Recetarios de Aquí."],
    ["health", "Entiendo que los planes de comida, las metas de calorías y la información nutricional son orientación general y estimada, no consejo médico ni nutricional, y que debo consultar a mi médico o a un nutricionista-dietista licenciado antes de cambiar mi alimentación si tengo una condición de salud, estoy embarazada o lactando, o los uso para un menor."],
    ["data", "Tengo 18 años o más (o uso la app con permiso y supervisión de mi padre, madre o tutor legal) y autorizo que se guarden los datos que yo ponga, incluidos los de salud como edad, peso y estatura, para calcular mis planes, según la sección de Privacidad."]
  ],
  en: [
    ["terms", "I have read and accept the Recetarios de Aquí Terms and Conditions of Use."],
    ["health", "I understand that the meal plans, calorie targets and nutrition information are general, estimated guidance, not medical or nutrition advice, and that I should talk to my doctor or a licensed dietitian before changing how I eat if I have a health condition, am pregnant or breastfeeding, or use them for a minor."],
    ["data", "I am 18 or older (or use the app with the permission and supervision of my parent or legal guardian) and I authorize storing the information I enter, including health data such as age, weight and height, to calculate my plans, as described in the Privacy section."]
  ]
};

/* Los términos: [título de la sección, párrafos o listas]. Una lista se escribe como arreglo dentro del arreglo. */
const TERMS = {
  es: {
    title: "Términos y Condiciones de Uso y Consentimiento",
    meta: (v) => `Versión ${v} · Vigentes desde el 18 de octubre de 2026`,
    intro: "Lea con calma. Las recetas se pueden ver sin cuenta. Para crear una cuenta debe aceptar estos términos marcando las tres casillas; le enviaremos a su correo una confirmación de lo que aceptó.",
    summaryTitle: "En resumen",
    summary: [
      "Las recetas, los planes de comida y la nutrición son orientación general, no consejo médico.",
      "Si tiene una condición de salud, está embarazada o cocina para un menor, consulte a un profesional antes de cambiar su alimentación.",
      "La información nutricional y los alérgenos son estimados: lea siempre las etiquetas.",
      "Con cuenta guardamos su correo, su uso de la app, este consentimiento y lo que usted ponga en sus planes; no lo vendemos y usted lo puede borrar todo desde «Privacidad y mis datos».",
      "Usted cocina y come bajo su propia responsabilidad."
    ],
    sections: [
      ["1. Quiénes somos y aceptación", [
        "Recetarios de Aquí (recetariodeaqui.com, «la app», «nosotros») es un recetario digital gratuito de cocina puertorriqueña. Estos Términos y Condiciones («los términos») son un acuerdo entre usted y nosotros sobre el uso de la app.",
        "Al usar la app, y al marcar las casillas de consentimiento para crear una cuenta, usted declara que leyó, entendió y acepta estos términos. Si no está de acuerdo con alguna parte, no use la app."
      ]],
      ["2. Edad y menores", [
        "Debe tener 18 años o más para crear una cuenta. Si es menor de 18 años, sólo puede usar la app con el permiso y la supervisión de su padre, madre o tutor legal, quien acepta estos términos en su nombre y es responsable de su uso.",
        "Los planes que se calculan para niños (de 2 a 13 años) deben usarlos y supervisarlos un adulto responsable, junto con el pediatra del niño."
      ]],
      ["3. Qué ofrece la app", [
        "Recetas, porciones ajustables, información nutricional estimada, alérgenos y alertas, planes de comida, listas de compras, temporizadores, lectura en voz alta y otras herramientas. La app es gratis y la ofrecemos «tal como está». Podemos cambiar, añadir o quitar funciones, o suspender la app, en cualquier momento."
      ]],
      ["4. No es consejo médico ni nutricional profesional", [
        "Los planes de comida, las metas de calorías y proteína, la información nutricional, los objetivos (por ejemplo: rebajar, ganar masa muscular, bajo en sodio, diabetes, presión alta, colesterol alto, autismo, vegetariano o vegano), los usos tradicionales de los tés y cualquier otra información de la app son de carácter general y educativo.",
        "No sustituyen la evaluación, el diagnóstico ni el tratamiento de un médico, de un nutricionista-dietista licenciado ni de otro profesional de la salud, y no crean una relación profesional entre usted y nosotros.",
        "Consulte a un profesional antes de seguir un plan o cambiar su alimentación si:",
        ["está embarazada o lactando;", "es menor de edad o cocina para un menor;", "tiene diabetes, enfermedad del riñón, del corazón o del hígado, presión alta, colesterol alto, un trastorno de la alimentación, alergias a alimentos o cualquier otra condición;", "toma medicamentos (por ejemplo, insulina u otras medicinas para el azúcar, anticoagulantes, o medicinas que interactúan con la toronja o con el potasio)."],
        "Nunca deje, cambie ni retrase un tratamiento por algo que leyó en la app. Sobre el autismo: no existe una dieta que cure ni trate el autismo; ese plan sólo ayuda con la rutina de las comidas. En una emergencia, llame al 9-1-1."
      ]],
      ["5. La información nutricional es estimada", [
        "Las calorías y los nutrientes se calculan a partir de los ingredientes con datos de USDA FoodData Central y con estimados propios para productos que no están allí. Son aproximados: cambian según las marcas, el tamaño de los ingredientes, la preparación y las porciones reales.",
        "Las metas diarias se calculan con fórmulas generales (como Mifflin-St Jeor y las Guías Alimentarias para Estadounidenses) y pueden no ser las adecuadas para usted. El USDA, la FDA y otras agencias no avalan ni certifican esta app; los mencionamos sólo como fuente de los datos y las guías."
      ]],
      ["6. Alergias y seguridad de los alimentos", [
        "Los alérgenos y las alertas se detectan automáticamente en el texto de las recetas y pueden fallar u omitir ingredientes. Lea siempre las etiquetas de los productos que compra y tenga en cuenta la contaminación cruzada. Los sustitutos sugeridos no garantizan que un plato sea seguro para una persona alérgica.",
        "Siga las temperaturas seguras de cocción, tenga cuidado con los alimentos crudos (huevo, pescado, mariscos) y con las hierbas y tés, que pueden tener efectos o interacciones. Las bebidas con alcohol son sólo para personas con la edad legal para beber; no maneje después de beber."
      ]],
      ["7. Su responsabilidad", [
        "Usted decide qué cocina, qué come y en qué cantidad. Es responsable de revisar los ingredientes, las porciones, las temperaturas y el uso seguro de cuchillos, fuego, aceite caliente y equipos de cocina, y de supervisar a los niños en la cocina."
      ]],
      ["8. Su cuenta y el uso aceptable", [
        "La cuenta es opcional: las recetas, el buscador, los planes y Mi recetario se usan sin ella (lo suyo queda sólo en su navegador). Para crear una cuenta se necesita un correo validado; no guardamos contraseñas. Usted es responsable de su cuenta. No use la app para fines ilegales, para dañarla, para enviar contenido ofensivo o engañoso, ni para obtener datos de otras personas. Podemos suspender o cerrar una cuenta que no cumpla estos términos."
      ]],
      ["9. Privacidad: qué guardamos y para qué", [
        "Guardamos:",
        ["su correo electrónico, la primera y la última vez que entró y cuántas veces usa la app;", "este consentimiento: la versión aceptada, la fecha y la hora, el idioma, las casillas marcadas y el tipo de navegador;", "los ajustes de sus planes, incluidos datos que usted da de forma voluntaria (sexo, edad, peso, estatura, actividad y objetivo de salud);", "Mi recetario: colecciones, notas, recetas que hizo y su lista de compras;", "las reseñas y fotos que usted publique."],
        "Sin cuenta no guardamos nada en el servidor: sus favoritas, planes y Mi recetario quedan sólo en su navegador.",
        "Para qué: para darle acceso, calcular sus planes, guardar lo suyo en su cuenta, enviarle la confirmación de este consentimiento y cuidar la app. Dónde: en los servicios de Google Firebase (en Estados Unidos) y en su navegador; el correo de confirmación se envía por medio de un proveedor de envío de correos.",
        "Quién lo ve: usted. Los administradores de la app ven su correo, sus fechas y visitas, su consentimiento y el estado de su cuenta, pero no ven sus planes, sus datos de salud ni sus notas. No vendemos sus datos ni los compartimos para publicidad.",
        "Cuánto tiempo: mientras tenga la cuenta, hasta que usted la borre o nos pida borrarla. Las reseñas se guardan mientras estén publicadas o hasta que usted las borre. Al borrar la cuenta no nos quedamos con copia de sus datos en la app.",
        `Sus derechos: en «Privacidad y mis datos» (en el menú, con la sesión abierta) puede ver qué guardamos, retirar su consentimiento y borrar su cuenta con todos sus datos (registro, consentimiento, planes, Mi recetario, reseñas y fotos) en un solo paso. También puede pedirlo escribiendo a ${CONSENT_CONTACT}.`
      ]],
      ["10. Reseñas y fotos", [
        "Usted es responsable de lo que publica. Al publicar una reseña o una foto nos da permiso, gratis y sin límite de tiempo, para mostrarla en la app. Las revisamos antes de publicarlas y podemos no publicarlas o quitarlas. No publique fotos de otras personas sin su permiso ni contenido que no sea suyo."
      ]],
      ["11. Propiedad intelectual", [
        "Las recetas de la app son versiones propias redactadas para la app; los textos, las ilustraciones y el diseño son nuestros. Puede usarlos para cocinar en su casa y compartir los enlaces, pero no copiarlos para publicarlos ni venderlos sin nuestro permiso."
      ]],
      ["12. Limitación de responsabilidad", [
        "La app se ofrece «tal como está» y «según esté disponible», sin garantías de ningún tipo. Hasta donde lo permita la ley, no somos responsables de daños que resulten del uso de la app o de la información que contiene, incluidos reacciones alérgicas, enfermedades, cambios de peso o de salud, lesiones en la cocina o resultados de seguir un plan. Nada en estos términos limita los derechos que la ley no permite renunciar."
      ]],
      ["13. Cambios a estos términos", [
        "Podemos actualizar estos términos. Cada versión lleva su número y su fecha. Si el cambio es importante, le pediremos que los acepte otra vez al entrar y le enviaremos una nueva confirmación."
      ]],
      ["14. Ley aplicable", [
        "Estos términos se rigen por las leyes del Estado Libre Asociado de Puerto Rico y por las leyes federales de los Estados Unidos que apliquen. Cualquier reclamación se presentará ante los tribunales con competencia en Puerto Rico."
      ]],
      ["15. Contacto", [
        `Preguntas sobre estos términos o sobre sus datos: ${CONSENT_CONTACT}.`
      ]]
    ],
    readAll: "Leer los términos completos", accept: "Para entrar, marque las tres casillas:",
    acceptBtn: "Acepto y continúo", acceptedLocal: "Gracias. Ahora escoja cómo entrar.",
    needAll: "Marque las tres casillas para continuar.", consentTitle: "Antes de continuar",
    consentIntro: "Actualizamos los Términos y Condiciones de Uso. Para seguir usando la app, léalos y acéptelos.",
    emailSent: (e) => `Le enviamos a ${e} la confirmación de lo que aceptó.`,
    viewTitle: "Términos y Condiciones", printBtn: "Imprimir", myConsent: (v, d) => `Usted aceptó la versión ${v} el ${d}.`
  },
  en: {
    title: "Terms and Conditions of Use and Consent",
    meta: (v) => `Version ${v} · Effective October 18, 2026`,
    intro: "Please read carefully. Recipes can be viewed without an account. To create an account you must accept these terms by checking the three boxes; we'll email you a confirmation of what you accepted.",
    summaryTitle: "In short",
    summary: [
      "Recipes, meal plans and nutrition are general guidance, not medical advice.",
      "If you have a health condition, are pregnant or cook for a minor, talk to a professional before changing how you eat.",
      "Nutrition information and allergens are estimates: always read the labels.",
      "With an account we store your email, your use of the app, this consent and what you enter in your plans; we don't sell it and you can delete all of it from “Privacy and my data”.",
      "You cook and eat at your own responsibility."
    ],
    sections: [
      ["1. Who we are and acceptance", [
        "Recetarios de Aquí (recetariodeaqui.com, “the app”, “we”) is a free digital cookbook of Puerto Rican cooking. These Terms and Conditions (“the terms”) are an agreement between you and us about using the app.",
        "By using the app, and by checking the consent boxes to create an account, you state that you have read, understood and accept these terms. If you don't agree with any part, do not use the app."
      ]],
      ["2. Age and minors", [
        "You must be 18 or older to create an account. If you are under 18, you may only use the app with the permission and supervision of your parent or legal guardian, who accepts these terms on your behalf and is responsible for your use.",
        "Plans calculated for children (ages 2 to 13) must be used and supervised by a responsible adult, together with the child's pediatrician."
      ]],
      ["3. What the app offers", [
        "Recipes, adjustable servings, estimated nutrition information, allergens and alerts, meal plans, shopping lists, timers, read-aloud and other tools. The app is free and provided “as is”. We may change, add or remove features, or suspend the app, at any time."
      ]],
      ["4. Not medical or professional nutrition advice", [
        "The meal plans, calorie and protein targets, nutrition information, goals (for example: weight loss, muscle gain, low sodium, diabetes, high blood pressure, high cholesterol, autism, vegetarian or vegan), traditional uses of teas and any other information in the app are general and educational.",
        "They do not replace evaluation, diagnosis or treatment by a doctor, a licensed dietitian or another health professional, and they do not create a professional relationship between you and us.",
        "Talk to a professional before following a plan or changing how you eat if you:",
        ["are pregnant or breastfeeding;", "are a minor or cook for a minor;", "have diabetes, kidney, heart or liver disease, high blood pressure, high cholesterol, an eating disorder, food allergies or any other condition;", "take medication (for example insulin or other blood-sugar medicine, blood thinners, or medicine that interacts with grapefruit or potassium)."],
        "Never stop, change or delay a treatment because of something you read in the app. About autism: no diet cures or treats autism; that plan only helps with mealtime routine. In an emergency, call 9-1-1."
      ]],
      ["5. Nutrition information is estimated", [
        "Calories and nutrients are calculated from the ingredients with USDA FoodData Central data and with our own estimates for products not listed there. They are approximate: they change with brands, ingredient sizes, preparation and actual portions.",
        "Daily targets use general formulas (such as Mifflin-St Jeor and the Dietary Guidelines for Americans) and may not be right for you. The USDA, the FDA and other agencies do not endorse or certify this app; we mention them only as the source of the data and guidelines."
      ]],
      ["6. Allergies and food safety", [
        "Allergens and alerts are detected automatically from the recipe text and may miss or misidentify ingredients. Always read the labels of the products you buy and consider cross-contamination. Suggested substitutes do not guarantee that a dish is safe for someone with allergies.",
        "Follow safe cooking temperatures, be careful with raw foods (eggs, fish, shellfish) and with herbs and teas, which can have effects or interactions. Alcoholic drinks are only for people of legal drinking age; don't drive after drinking."
      ]],
      ["7. Your responsibility", [
        "You decide what you cook, what you eat and how much. You are responsible for checking ingredients, portions, temperatures and the safe use of knives, fire, hot oil and kitchen equipment, and for supervising children in the kitchen."
      ]],
      ["8. Your account and acceptable use", [
        "An account is optional: recipes, search, plans and My cookbook work without one (your things stay only in your browser). Creating an account requires a verified email; we don't store passwords. You are responsible for your account. Don't use the app for illegal purposes, to harm it, to post offensive or misleading content, or to collect other people's data. We may suspend or close an account that doesn't follow these terms."
      ]],
      ["9. Privacy: what we store and why", [
        "We store:",
        ["your email address, the first and last time you entered and how many times you use the app;", "this consent: the accepted version, date and time, language, the boxes checked and the type of browser;", "your plan settings, including information you choose to give (sex, age, weight, height, activity and health goal);", "My cookbook: collections, notes, recipes you made and your shopping list;", "the reviews and photos you post."],
        "Without an account we store nothing on the server: your favorites, plans and My cookbook stay only in your browser.",
        "Why: to give you access, calculate your plans, keep your things in your account, send you the confirmation of this consent and look after the app. Where: in Google Firebase services (in the United States) and in your browser; the confirmation email is sent through an email delivery provider.",
        "Who sees it: you. The app's administrators see your email, dates and visits, your consent and your account status, but not your plans, health data or notes. We don't sell your data or share it for advertising.",
        "How long: while you have the account, until you delete it or ask us to. Reviews are kept while they are published or until you delete them. When you delete the account we keep no copy of your data in the app.",
        `Your rights: in “Privacy and my data” (in the menu, when signed in) you can see what we store, withdraw your consent and delete your account with all its data (record, consent, plans, My cookbook, reviews and photos) in one step. You can also ask by writing to ${CONSENT_CONTACT}.`
      ]],
      ["10. Reviews and photos", [
        "You are responsible for what you post. By posting a review or photo you give us free, unlimited-time permission to show it in the app. We review them before publishing and may decline or remove them. Don't post photos of other people without their permission or content that isn't yours."
      ]],
      ["11. Intellectual property", [
        "The app's recipes are our own versions written for the app; the texts, illustrations and design are ours. You may use them to cook at home and share the links, but not copy them to publish or sell without our permission."
      ]],
      ["12. Limitation of liability", [
        "The app is provided “as is” and “as available”, without warranties of any kind. To the extent permitted by law, we are not liable for damages arising from the use of the app or its information, including allergic reactions, illness, weight or health changes, kitchen injuries or the results of following a plan. Nothing in these terms limits rights that the law does not allow you to waive."
      ]],
      ["13. Changes to these terms", [
        "We may update these terms. Each version has its number and date. If a change is important, we will ask you to accept them again when you enter and send you a new confirmation."
      ]],
      ["14. Governing law", [
        "These terms are governed by the laws of the Commonwealth of Puerto Rico and by the applicable federal laws of the United States. Any claim shall be brought before the courts with jurisdiction in Puerto Rico."
      ]],
      ["15. Contact", [
        `Questions about these terms or your data: ${CONSENT_CONTACT}.`
      ]]
    ],
    readAll: "Read the full terms", accept: "To enter, check the three boxes:",
    acceptBtn: "I accept and continue", acceptedLocal: "Thank you. Now choose how to sign in.",
    needAll: "Check the three boxes to continue.", consentTitle: "Before you continue",
    consentIntro: "We updated the Terms and Conditions of Use. To keep using the app, please read and accept them.",
    emailSent: (e) => `We emailed ${e} a confirmation of what you accepted.`,
    viewTitle: "Terms and Conditions", printBtn: "Print", myConsent: (v, d) => `You accepted version ${v} on ${d}.`
  }
};

/* Fecha y hora de Puerto Rico, para la pantalla y el correo. */
function consentDate(date, lang) {
  return new Date(date).toLocaleString(lang === "en" ? "en-US" : "es-PR", { timeZone: "America/Puerto_Rico", dateStyle: "long", timeStyle: "short" }) + (lang === "en" ? " (Puerto Rico time)" : " (hora de Puerto Rico)");
}

/* El correo de confirmación que recibe la persona (lo arma el servidor con el registro guardado en su cuenta). */
function consentEmail({ email, version, at, lang, items }) {
  const es = lang !== "en";
  const L = es ? "es" : "en";
  const T = TERMS[L];
  const when = consentDate(at, L);
  const accepted = CONSENT_ITEMS[L].filter(([k]) => (items || []).includes(k)).map(([, txt]) => txt);
  const link = `${CONSENT_SITE}/#/terminos`;
  const subject = es ? "Confirmación de su aceptación de los Términos — Recetarios de Aquí" : "Confirmation of your acceptance of the Terms — Recetarios de Aquí";
  const lines = es ? {
    hi: "Hola:",
    p1: `Gracias por usar Recetarios de Aquí. Este correo confirma que, con la cuenta ${email}, usted aceptó los ${T.title}, versión ${version}, el ${when}.`,
    p2: "Usted marcó y aceptó lo siguiente:",
    p3: "Le recordamos lo más importante:",
    p4: `Puede leer los términos completos cuando quiera en ${link}. Guarde este correo como constancia.`,
    p5: `Si usted no hizo esta aceptación o tiene alguna pregunta, escríbanos a ${CONSENT_CONTACT}.`,
    bye: "Buen provecho,", team: "Recetarios de Aquí · Cocina Boricua",
    auto: "Este es un mensaje automático; puede responderlo si necesita ayuda."
  } : {
    hi: "Hello,",
    p1: `Thank you for using Recetarios de Aquí. This email confirms that, with the account ${email}, you accepted the ${T.title}, version ${version}, on ${when}.`,
    p2: "You checked and accepted the following:",
    p3: "A reminder of the most important points:",
    p4: `You can read the full terms anytime at ${link}. Keep this email as a record.`,
    p5: `If you didn't make this acceptance or have any questions, write to us at ${CONSENT_CONTACT}.`,
    bye: "Enjoy your meal,", team: "Recetarios de Aquí · Cocina Boricua",
    auto: "This is an automatic message; you can reply if you need help."
  };
  const h = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const text = [lines.hi, "", lines.p1, "", lines.p2, ...accepted.map((x) => `  ✓ ${x}`), "", lines.p3, ...T.summary.map((x) => `  • ${x}`), "", lines.p4, "", lines.p5, "", lines.bye, lines.team, "", lines.auto].join("\n");
  const html = `<!doctype html><html lang="${L}"><body style="margin:0;background:#FBF6EE;font-family:Tahoma,Verdana,Arial,sans-serif;color:#2B1D14">
  <div style="max-width:600px;margin:0 auto;padding:24px">
    <p style="font-size:18px;font-weight:bold;color:#A63A12;margin:0 0 16px">Recetarios de Aquí</p>
    <div style="background:#FFFDF9;border:1px solid #E6D8C4;border-radius:14px;padding:24px;line-height:1.55;font-size:15px">
      <p>${h(lines.hi)}</p>
      <p>${h(lines.p1)}</p>
      <p><strong>${h(lines.p2)}</strong></p>
      <ul style="padding-left:20px">${accepted.map((x) => `<li style="margin-bottom:8px">${h(x)}</li>`).join("")}</ul>
      <p><strong>${h(lines.p3)}</strong></p>
      <ul style="padding-left:20px">${T.summary.map((x) => `<li style="margin-bottom:6px">${h(x)}</li>`).join("")}</ul>
      <p><a href="${link}" style="display:inline-block;background:#A63A12;color:#fff;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:bold">${h(es ? "Leer los términos completos" : "Read the full terms")}</a></p>
      <p>${h(lines.p4)}</p>
      <p>${h(lines.p5)}</p>
      <p>${h(lines.bye)}<br><strong>${h(lines.team)}</strong></p>
    </div>
    <p style="font-size:12px;color:#7A6453;margin-top:16px">${h(lines.auto)}</p>
  </div></body></html>`;
  return { subject, text, html };
}

if (typeof module !== "undefined") module.exports = { CONSENT_VERSION, CONSENT_ITEMS, TERMS, consentEmail, consentDate };
