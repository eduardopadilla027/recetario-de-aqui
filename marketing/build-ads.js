/* Recetarios de Aquí · Generador de anuncios para Facebook e Instagram.
 *
 * Arma una página HTML por anuncio con la identidad de la app (crema, achiote, verde plátano, bandera y los dibujos de
 * los platos del sprite de index.html) y la convierte en PNG exacto con Microsoft Edge (o Chrome) sin ventana.
 * Formatos: feed 4:5 (1080×1350) e historias/reels 9:16 (1080×1920).
 * Uso, desde la carpeta del proyecto:  node marketing/build-ads.js
 * Salida: marketing/ads/*.png (y los .html, para retocar). marketing/ no se publica (.vercelignore). */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const out = path.join(__dirname, "ads");
fs.mkdirSync(out, { recursive: true });
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
// El sprite completo: desde <svg class="sprite"> hasta su cierre, justo antes del encabezado de la página.
const spriteEnd = html.lastIndexOf("</svg>", html.indexOf("<!-- Encabezado -->")) + 6;
const sprite = html.slice(html.indexOf('<svg class="sprite"'), spriteEnd);
const BROWSERS = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Google/Chrome/Application/chrome.exe"];
const browser = BROWSERS.find((b) => fs.existsSync(b));

/* Platos: dibujo del sprite (svg:id) o emoji, con el tono de su categoría. */
const DISH = {
  gandules: ["svg:ic-arroz-gandules", "#F1D3A8", "#E3AE6B", "Arroz con gandules"],
  pernil: ["svg:ic-pernil", "#EAC0A0", "#D48F62", "Pernil"],
  tembleque: ["svg:ic-tembleque", "#F4E3C8", "#E6C48F", "Tembleque"],
  flan: ["svg:ic-flan-queso", "#F4DDB5", "#E5B970", "Flan de queso"],
  alcapurria: ["svg:ic-ent-alcapurria", "#EBCB9C", "#D9A35A", "Alcapurrias"],
  bacalaitos: ["svg:ic-pez-bacalaitos", "#E9D3AE", "#D6AE6E", "Bacalaítos"],
  pastelillos: ["svg:ic-ent-pastelillo-carne", "#EDD2A4", "#DCA963", "Pastelillos"],
  mofongo: ["svg:ic-platano-verde", "#D8E3C3", "#AFC48C", "Plátano verde"],
  pasteles: ["🫔", "#D8E3C3", "#A9C08A", "Pasteles"],
  dulce: ["svg:ic-arroz-dulce", "#F2DCC0", "#DDB283", "Arroz con dulce"],
  sancocho: ["svg:ic-sopa-sancocho", "#EAD0AE", "#D3A672", "Sancocho"],
  pollo: ["svg:ic-fricase-pollo", "#EFCFA8", "#D9A46B", "Pollo guisado"]
};
const plate = (k, size, label = false) => {
  const [icon, tone, tone2, name] = DISH[k];
  const art = icon.startsWith("svg:") ? `<svg viewBox="0 0 64 64"><use href="#${icon.slice(4)}"/></svg>` : `<span class="emo">${icon}</span>`;
  return `<figure class="dish" style="--s:${size}px;--tone:${tone};--tone2:${tone2}"><div class="plate"><div class="inner">${art}</div></div>${label ? `<figcaption>${name}</figcaption>` : ""}</figure>`;
};
const flag = (w) => `<svg class="flag" viewBox="0 0 900 600" style="width:${w}px"><use href="#flag-pr"/></svg>`;
const brand = (sz = 1) => `<div class="brand" style="--b:${sz}">${flag(78 * sz)}<div><div class="bn">Recetarios de Aquí</div><div class="bs">COCINA BORICUA</div></div></div>`;
const cta = (txt) => `<div class="cta"><span>${txt}</span><b>recetariodeaqui.com</b></div>`;

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;0,900;1,700;1,800&display=swap');
*{box-sizing:border-box;margin:0}
html,body{width:var(--W);height:var(--H);overflow:hidden}
body{font-family:Tahoma,Verdana,"Segoe UI",sans-serif;color:#2B1D14;background:#FBF6EE;position:relative}
.sprite{position:absolute;width:0;height:0;overflow:hidden}
.bg{position:absolute;inset:0;background:
  radial-gradient(900px 700px at 100% 0%,rgba(200,145,46,.20),transparent 60%),
  radial-gradient(900px 800px at 0% 100%,rgba(47,93,52,.14),transparent 60%),#FBF6EE}
.bg::after{content:"";position:absolute;inset:0;opacity:.07;background-image:repeating-linear-gradient(45deg,#2B1D14 0 1px,transparent 1px 16px)}
.wrap{position:absolute;inset:0;padding:72px 72px;display:flex;flex-direction:column;z-index:1}
/* Historias y Reels: 250 px libres arriba y 290 abajo (ahí van el perfil, el botón y los comentarios). */
.historia .wrap{padding:230px 72px 290px !important}
.brand{display:flex;align-items:center;gap:calc(18px*var(--b))}
.flag{border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.18);display:block}
.bn{font-weight:800;font-size:calc(36px*var(--b));letter-spacing:-.01em}
.bs{font-size:calc(17px*var(--b));letter-spacing:.24em;color:#2F5D34;font-weight:700}
.kicker{display:inline-block;align-self:flex-start;background:#2F5D34;color:#fff;font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:26px;padding:12px 22px;border-radius:999px}
h1{font-family:"Playfair Display",Georgia,serif;font-weight:900;line-height:1.02;letter-spacing:-.02em;color:#2B1D14}
h1 em{font-style:italic;font-weight:800;color:#A63A12}
.sub{font-size:38px;line-height:1.35;color:#5E4A3C;font-weight:700}
.sub b{color:#2B1D14}
.dish{display:flex;flex-direction:column;align-items:center;gap:12px}
.dishes{display:flex;align-items:flex-end;justify-content:center}
.plate{width:var(--s);height:var(--s);border-radius:50%;display:grid;place-items:center;
  background:radial-gradient(circle at 75% 85%,var(--tone2) 0 34%,transparent 35%),var(--tone);
  box-shadow:0 18px 40px -14px rgba(43,29,20,.45),inset 0 0 0 calc(var(--s)*.035) rgba(255,255,255,.55)}
.inner{width:72%;height:72%;border-radius:50%;background:#FFFDF9;display:grid;place-items:center;box-shadow:inset 0 0 0 calc(var(--s)*.02) #E6D8C4,0 6px 14px rgba(43,29,20,.12)}
.inner svg{width:74%;height:74%}
.emo{font-size:calc(var(--s)*.36);line-height:1}
figcaption{font-weight:800;font-size:24px;color:#5E4A3C}
.cta{display:flex;align-items:center;justify-content:space-between;gap:20px;background:#A63A12;color:#fff;border-radius:999px;padding:26px 40px;font-size:34px;font-weight:800;box-shadow:0 14px 30px -12px rgba(166,58,18,.65)}
.cta b{font-weight:700;opacity:.95;font-size:28px;background:rgba(255,255,255,.16);padding:8px 18px;border-radius:999px}
.pill{display:inline-flex;align-items:center;gap:12px;background:#FFFDF9;border:2px solid #E6D8C4;border-radius:999px;padding:12px 22px;font-weight:800;font-size:28px}
.pill i{font-style:normal;color:#2F5D34}
.row{display:flex;gap:16px;flex-wrap:wrap}
.free{font-weight:800;color:#2F5D34}
.stripe{position:absolute;left:0;right:0;height:16px;background:linear-gradient(90deg,#ED0000 0 20%,#fff 20% 40%,#ED0000 40% 60%,#fff 60% 80%,#ED0000 80%);opacity:.9}
.card{background:#FFFDF9;border:2px solid #E6D8C4;border-radius:36px;box-shadow:0 30px 60px -30px rgba(43,29,20,.45);padding:40px}
.chip{display:inline-block;padding:14px 26px;border-radius:999px;border:3px solid #2F5D34;background:#E3EDDF;color:#2F5D34;font-weight:800;font-size:32px}
.big{font-family:"Playfair Display",Georgia,serif;font-weight:900;color:#A63A12}
.meal{display:grid;grid-template-columns:200px 1fr;gap:22px;align-items:center;padding:16px 0;border-bottom:2px dashed #E6D8C4}
.meal:last-child{border:0}
.meal .slot{font-size:22px;letter-spacing:.1em;text-transform:uppercase;color:#7A6453;font-weight:800}
.meal .nm{font-size:32px;font-weight:800}
.meal .kc{font-size:24px;color:#2F5D34;font-weight:800}
.star{color:#C8912E}
`;

/* ── Los 5 conceptos (feed 4:5 y historias 9:16) ── */
const ADS = {
  /* 1. Nostalgia: el sabor de abuela */
  abuela: (story) => `
    <div class="wrap" style="gap:${story ? 46 : 34}px">
      ${brand(story ? 1.15 : 1)}
      <div style="margin-top:${story ? 10 : 20}px"><span class="kicker">Más de 1,000 recetas · Gratis</span></div>
      <h1 style="font-size:${story ? 96 : 86}px">¿Se acuerda del arroz con gandules de <em>abuela?</em></h1>
      <p class="sub" style="font-size:${story ? 44 : 38}px">Ahora lo hace <b>usted</b>, paso a paso, con el mismo sazón.</p>
      <div class="dishes" style="flex:1;min-height:0;gap:${story ? 0 : 28}px;${story ? "flex-direction:column;align-items:center;justify-content:center" : "align-items:center"}">
        ${story ? `<div class="dishes" style="gap:22px">${plate("pernil", 230, true)}${plate("gandules", 290, true)}${plate("tembleque", 230, true)}</div>`
          : `<div class="dishes" style="gap:28px">${plate("pernil", 230, true)}${plate("gandules", 290, true)}${plate("tembleque", 230, true)}</div>`}
      </div>
      ${cta("Cocine hoy →")}
    </div>`,
  /* 2. Utilidad sorpresa: dígale lo que tiene en la nevera */
  nevera: (story) => `
    <div class="wrap" style="gap:${story ? 44 : 30}px">
      ${brand(story ? 1.15 : 1)}
      <h1 style="font-size:${story ? 110 : 104}px;margin-top:${story ? 0 : 16}px">¿Qué cocino <em>hoy?</em></h1>
      <p class="sub" style="font-size:${story ? 44 : 38}px">Dígale lo que tiene en la nevera…</p>
      <div class="card" style="display:grid;gap:26px">
        <div class="row"><span class="chip">pollo</span><span class="chip">papa</span><span class="chip">cilantro</span></div>
        <div style="display:flex;align-items:center;gap:26px">
          <span class="big" style="font-size:${story ? 130 : 128}px;line-height:1">27</span>
          <span style="font-size:${story ? 42 : 36}px;font-weight:800;line-height:1.25">recetas boricuas<br>que puede hacer <span style="color:#2F5D34">ya</span></span>
        </div>
        <div style="display:flex;gap:18px;justify-content:center">${plate("pollo", story ? 200 : 210)}${plate("sancocho", story ? 200 : 210)}${plate("pastelillos", story ? 200 : 210)}</div>
      </div>
      <div class="row" style="justify-content:center">
        <span class="pill"><i>🎙️</i> Se la lee en voz alta</span>
        <span class="pill"><i>⏱️</i> Con temporizadores</span>
        <span class="pill"><i>🛒</i> Y su lista de compras</span>
      </div>
      <div style="flex:1"></div>
      ${cta("Pruébelo gratis →")}
    </div>`,
  /* 3. Temporada: Navidad boricua (nov–ene) */
  navidad: (story) => `
    <div class="stripe" style="top:0"></div><div class="stripe" style="bottom:0"></div>
    <div class="wrap" style="gap:${story ? 44 : 30}px;padding-top:${story ? 90 : 76}px">
      ${brand(story ? 1.15 : 1)}
      <div style="margin-top:${story ? 0 : 10}px"><span class="kicker" style="background:#A63A12">★ Navidad boricua</span></div>
      <h1 style="font-size:${story ? 92 : 90}px">Este año, los pasteles <em>los hace usted.</em></h1>
      <p class="sub" style="font-size:${story ? 44 : 36}px">Pasteles, pernil, arroz con dulce y tembleque — con la <b>lista de compras</b> hecha.</p>
      <div style="flex:1;min-height:0;display:grid;grid-template-columns:repeat(${story ? 2 : 4},auto);justify-content:center;align-content:center;gap:${story ? "16px 60px" : "10px 18px"}">
        ${plate("pasteles", story ? 190 : 210, true)}${plate("pernil", story ? 190 : 210, true)}${plate("dulce", story ? 190 : 210, true)}${plate("tembleque", story ? 190 : 210, true)}
      </div>
      ${cta("Arme su menú →")}
    </div>`,
  /* 4. Diáspora: lejos de la isla, cerca del sazón (bilingüe) */
  diaspora: (story) => `
    <div class="wrap" style="gap:${story ? 46 : 30}px">
      ${brand(story ? 1.15 : 1)}
      <h1 style="font-size:${story ? 108 : 102}px;margin-top:${story ? 10 : 18}px">Lejos de la isla.<br><em>Cerca del sazón.</em></h1>
      <p class="sub" style="font-size:${story ? 46 : 40}px;font-family:'Playfair Display',Georgia,serif;font-style:italic;color:#2F5D34">Far from the island. Close to home.</p>
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:${story ? 22 : 26}px;${story ? "flex-wrap:wrap" : ""}">
        ${plate("alcapurria", story ? 270 : 260, true)}${plate("mofongo", story ? 270 : 260, true)}${plate("bacalaitos", story ? 270 : 260, true)}
      </div>
      <div class="row" style="justify-content:center"><span class="pill"><i>ES</i> Español</span><span class="pill"><i>EN</i> English</span><span class="pill"><i>✓</i> Gratis · Free</span></div>
      ${cta("Cocine como en casa →")}
    </div>`,
  /* 5. Comer balanceado a la boricua (sin aludir a condiciones de salud de la persona) */
  planes: (story) => `
    <div class="wrap" style="gap:${story ? 44 : 30}px">
      ${brand(story ? 1.15 : 1)}
      <h1 style="font-size:${story ? 96 : 94}px;margin-top:${story ? 0 : 14}px">Comer balanceado <em>sin dejar el arroz y habichuelas.</em></h1>
      <p class="sub" style="font-size:${story ? 42 : 36}px">Planes de comida con recetas de aquí y la nutrición de cada plato.</p>
      <div class="card" style="padding:${story ? "44px 48px" : "30px 40px"}">
        <div class="meal"><span class="slot">Desayuno</span><div><div class="nm">Revoltillo criollo</div><div class="kc">203 cal · 13 g proteína</div></div></div>
        <div class="meal"><span class="slot">Almuerzo</span><div><div class="nm">Pollo guisado + habichuelas</div><div class="kc">Alta en proteína · Alta en fibra</div></div></div>
        <div class="meal"><span class="slot">Cena</span><div><div class="nm">Sancocho</div><div class="kc">Viandas de la isla</div></div></div>
      </div>
      <div class="row" style="justify-content:center"><span class="pill"><i>✓</i> Calorías por receta</span><span class="pill"><i>✓</i> Lista de compras</span>${story ? `<span class="pill"><i>✓</i> Frutas de temporada</span>` : ""}</div>
      <div style="flex:1"></div>
      ${cta("Arme su plan →")}
    </div>`
};

const files = [];
for (const [name, fn] of Object.entries(ADS)) {
  for (const [fmt, W, H] of [["feed", 1080, 1350], ["historia", 1080, 1920]]) {
    const page = `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>:root{--W:${W}px;--H:${H}px}${CSS}</style></head>
<body class="${fmt}">${sprite}<div class="bg"></div>${fn(fmt === "historia")}</body></html>`;
    const f = path.join(out, `${name}-${fmt}.html`);
    fs.writeFileSync(f, page);
    files.push([f, W, H]);
  }
}
if (!browser) { console.log("No encontré Edge ni Chrome: abra los .html y tome la captura a mano."); process.exit(0); }
for (const [f, W, H] of files) {
  const png = f.replace(/\.html$/, ".png");
  execFileSync(browser, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1", "--virtual-time-budget=4000",
    `--window-size=${W},${H}`, `--screenshot=${png}`, "file:///" + f.replace(/\\/g, "/")], { stdio: "ignore" });
  console.log("✓", path.basename(png));
}
