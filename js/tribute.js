/*
 * Recetarios de Aquí — Dedicatoria al Master Chef Alfredo Ayala Colón (ruta #/dedicatoria).
 * Enlazada desde el menú del encabezado y el pie de la página.
 *
 * Foto: poner la imagen en images/ y su ruta en TRIBUTE_PHOTO (p. ej. "images/alfredo-ayala.jpg");
 * mientras esté vacía, un retrato dibujado (gorro de chef con sus iniciales). Usar sólo una
 * foto con permiso de uso, y poner el crédito en TRIBUTE_PHOTO_CREDIT.
 * La biografía está redactada a partir de las fuentes de TRIBUTE_SOURCES.
 */

const TRIBUTE_PHOTO = "";
const TRIBUTE_PHOTO_CREDIT = "";

const TRIBUTE_SOURCES = [
  ["Great Chefs — Alfredo Ayala", "https://greatchefs.com/chef/alfredo-ayala-cuisine-techniques/"],
  ["Metro Puerto Rico (2014) — Homenaje al colosal de la gastronomía puertorriqueña", "https://www.metro.pr/noticias/2014/10/29/homenaje-al-colosal-de-la-gastronomia-puertorriquena"],
  ["Metro Puerto Rico (2019) — Homenaje al chef Alfredo Ayala por una buena causa", "https://www.metro.pr/estilo-vida/2019/02/20/homenaje-al-chef-alfredo-ayala-una-buena-causa"],
  ["Noticel — Celebración en honor a Alfredo Ayala", "https://noticel.com/?p=93010"],
  ["El Nuevo Día — Memorias de Don Paco Villón y Alfredo Ayala", "https://www.elnuevodia.com/entretenimiento/cultura/notas/memorias-de-don-paco-villon-y-alfredo-ayala-dos-visionarios-de-la-gastronomia/"],
  ["San Francisco Chronicle — The quest to preserve Puerto Rican culture", "https://preview-prod.w.sfchronicle.com/home/article/The-quest-to-preserve-Puerto-Rican-culture-with-12926905.php"]
];

const TRIBUTE_TEXT = {
  es: {
    title: "Dedicatoria",
    kicker: "En memoria",
    name: "Master Chef Alfredo Ayala Colón",
    tagline: "Padre de la nueva cocina puertorriqueña · Barranquitas, Puerto Rico",
    photoAlt: "Retrato del chef Alfredo Ayala Colón",
    dedication: [
      "Este recetario está dedicado al Master Chef Alfredo Ayala Colón, que nos enseñó que la cocina criolla merece la misma técnica, el mismo cuidado y el mismo orgullo que cualquier gran cocina del mundo.",
      "Cada sofrito, cada caldero de arroz y cada dulce de estas páginas lleva un poco de su lección: respetar lo nuestro, cocinarlo bien y compartirlo con la mesa entera."
    ],
    bioTitle: "Su vida",
    bio: [
      ["Barranquitas y la ingeniería", "Nació en Barranquitas y se graduó de Ingeniería Industrial en la Universidad de Puerto Rico. Pero lo suyo era la cocina, y decidió dedicarle la vida."],
      ["California, 1979", "Comenzó como asistente en el restaurante Roundtree, en California, y se formó con distintos chefs del Área de la Bahía de San Francisco."],
      ["Ali-Oli, 1981", "De regreso a Puerto Rico abrió Ali-Oli en Villa Carolina, que luego mudó al Hotel Excelsior en Miramar. Ganó el Tenedor de Oro al mejor restaurante de Puerto Rico durante seis años seguidos."],
      ["París, 1986", "Pasó una temporada en Jamin, el restaurante de Joël Robuchon, en busca de ideas y técnicas nuevas para la cocina de aquí."],
      ["Yuquiyú y Chayote", "En 1988 abrió Yuquiyú, restaurante y barra de sushi en San Juan, y en 1994 Chayote, de cocina caribeña contemporánea, que más tarde pasó a manos de su pupilo Mario Pagán."],
      ["Por toda la isla", "Siguieron Su Casa en el Hyatt Dorado Beach, Las Vegas cerca de El Yunque, Alexandra y Las Palmas Café en el Copamarina de Guánica, y Delirio, entre otros."],
      ["Embajador de nuestra cocina", "Cocinó en la James Beard House de Nueva York y apareció en la serie de televisión Great Chefs of the Caribbean (1997). El chef Éric Ripert, de Le Bernardin, fue su gran amigo."]
    ],
    legacyTitle: "Su legado",
    legacy: [
      "Se le reconoce como el padre de la nueva cocina puertorriqueña: llevó los ingredientes y recetas criollas a la técnica de la alta cocina en los años 80 y 90.",
      "Fue maestro y mentor de chefs como Mario Pagán y José Santaella, y de muchos otros que hoy dirigen las cocinas de la isla.",
      "Falleció en 2016. En 2019 se celebraron cenas en su honor a beneficio de becas para estudiantes de hotelería y artes culinarias, como fue su deseo, y la Universidad Ana G. Méndez en Carolina abrió una sala con su nombre."
    ],
    quote: "Gracias, chef, por enseñarnos a mirar nuestra cocina con orgullo.",
    sourcesTitle: "Fuentes",
    sourcesNote: "Biografía redactada a partir de estas fuentes. Si alguna fecha no coincide entre ellas, se usó la más citada.",
    back: "Volver al recetario"
  },
  en: {
    title: "Dedication",
    kicker: "In memoriam",
    name: "Master Chef Alfredo Ayala Colón",
    tagline: "Father of the new Puerto Rican cuisine · Barranquitas, Puerto Rico",
    photoAlt: "Portrait of chef Alfredo Ayala Colón",
    dedication: [
      "This cookbook is dedicated to Master Chef Alfredo Ayala Colón, who taught us that creole cooking deserves the same technique, care and pride as any great cuisine in the world.",
      "Every sofrito, every caldero of rice and every sweet in these pages carries a bit of his lesson: respect what is ours, cook it well and share it with the whole table."
    ],
    bioTitle: "His life",
    bio: [
      ["Barranquitas and engineering", "He was born in Barranquitas and earned a degree in Industrial Engineering from the University of Puerto Rico. But his calling was the kitchen, and he devoted his life to it."],
      ["California, 1979", "He started as an assistant at the Roundtree restaurant in California and trained with several San Francisco Bay Area chefs."],
      ["Ali-Oli, 1981", "Back in Puerto Rico he opened Ali-Oli in Villa Carolina, later moving it to the Hotel Excelsior in Miramar. It won the Golden Fork for best restaurant in Puerto Rico six years in a row."],
      ["Paris, 1986", "He spent time at Jamin, Joël Robuchon's restaurant, looking for new ideas and techniques for the island's cooking."],
      ["Yuquiyú and Chayote", "In 1988 he opened Yuquiyú, a restaurant and sushi bar in San Juan, and in 1994 Chayote, a contemporary Caribbean restaurant later taken over by his protégé Mario Pagán."],
      ["Across the island", "Then came Su Casa at the Hyatt Dorado Beach, Las Vegas near El Yunque, Alexandra and Las Palmas Café at Copamarina in Guánica, and Delirio, among others."],
      ["Ambassador of our cuisine", "He cooked at the James Beard House in New York and appeared on the TV series Great Chefs of the Caribbean (1997). Chef Éric Ripert of Le Bernardin was a close friend."]
    ],
    legacyTitle: "His legacy",
    legacy: [
      "He is recognized as the father of the new Puerto Rican cuisine: in the 1980s and 1990s he brought creole ingredients and recipes to fine-dining technique.",
      "He was teacher and mentor to chefs such as Mario Pagán and José Santaella, and to many others who lead the island's kitchens today.",
      "He passed away in 2016. In 2019, dinners were held in his honor to fund scholarships for hospitality and culinary students, as he wished, and Universidad Ana G. Méndez in Carolina opened a room in his name."
    ],
    quote: "Thank you, chef, for teaching us to look at our cooking with pride.",
    sourcesTitle: "Sources",
    sourcesNote: "Biography written from these sources. Where dates differ between them, the most cited one was used.",
    back: "Back to the cookbook"
  }
};

const trt = () => TRIBUTE_TEXT[currentLang];

// Retrato dibujado mientras no haya foto: gorro de chef con las iniciales.
const TRIBUTE_PORTRAIT = `<svg class="tribute-portrait" viewBox="0 0 160 160" role="img" aria-hidden="true">
  <circle cx="80" cy="80" r="78" fill="#F3E9DA"/><circle cx="80" cy="80" r="70" fill="none" stroke="#C8912E" stroke-width="2" stroke-dasharray="3 5"/>
  <path d="M46 78C34 76 30 58 44 52C44 36 64 30 72 40C78 28 98 30 100 44C116 40 128 56 116 70C114 76 110 78 106 78Z" fill="#FFFFFF" stroke="#D9CDB8" stroke-width="2"/>
  <rect x="50" y="76" width="60" height="18" rx="3" fill="#FFFFFF" stroke="#D9CDB8" stroke-width="2"/>
  <path d="M62 78V92M80 78V92M98 78V92" stroke="#E6D8C4" stroke-width="2"/>
  <text x="80" y="124" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#A63A12">AA</text>
</svg>`;

function renderTribute() {
  const tr = trt();
  const v = $("view-tribute");
  v.innerHTML = `
  <div class="container tribute-wrap">
    <a href="#/" class="btn btn-ghost back-btn"><svg class="icon" aria-hidden="true"><use href="#i-arrow-left"/></svg>${esc(tr.back)}</a>
    <article class="tribute-card">
      <header class="tribute-head">
        <div class="tribute-photo" id="tribute-photo">${TRIBUTE_PORTRAIT}</div>
        <div>
          <p class="tribute-kicker">${esc(tr.kicker)}</p>
          <h1 class="section-title" id="tribute-title" tabindex="-1">${esc(tr.name)}</h1>
          <p class="tribute-tagline">${esc(tr.tagline)}</p>
        </div>
      </header>
      <section class="tribute-dedication" aria-label="${esc(tr.title)}">
        ${tr.dedication.map((p) => `<p>${esc(p)}</p>`).join("")}
      </section>
      <section class="tribute-block">
        <h2 class="tribute-h2">${esc(tr.bioTitle)}</h2>
        <ol class="tribute-timeline">${tr.bio.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("")}</ol>
      </section>
      <section class="tribute-block">
        <h2 class="tribute-h2">${esc(tr.legacyTitle)}</h2>
        <ul class="tribute-legacy">${tr.legacy.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <blockquote class="tribute-quote">${esc(tr.quote)}</blockquote>
      </section>
      <footer class="tribute-sources">
        <h2 class="tribute-h3">${esc(tr.sourcesTitle)}</h2>
        <p>${esc(tr.sourcesNote)}</p>
        <ul>${TRIBUTE_SOURCES.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul>
      </footer>
    </article>
  </div>`;
  // La foto real, cuando haya una con permiso.
  if (!TRIBUTE_PHOTO) return;
  const img = new Image();
  img.onload = () => {
    const box = $("tribute-photo");
    if (box) { img.alt = tr.photoAlt; img.className = "tribute-img"; box.replaceChildren(img); if (TRIBUTE_PHOTO_CREDIT) box.title = TRIBUTE_PHOTO_CREDIT; }
  };
  img.src = TRIBUTE_PHOTO;
}

function showTribute() {
  current = null;
  $("view-home").hidden = true;
  $("view-recipe").hidden = true;
  $("view-plans").hidden = true;
  $("view-tribute").hidden = false;
  document.title = `${trt().title} — ${BRAND}`;
  renderTribute();
  window.scrollTo(0, 0);
  $("tribute-title").focus({ preventScroll: true });
}
