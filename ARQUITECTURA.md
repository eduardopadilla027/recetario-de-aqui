# ARQUITECTURA — Recetarios de Aquí · Cocina Boricua

> **Última actualización:** 2026-10-25 · **Versión del documento:** 4.60.0 · **Versión de la app:** 4.60.0 (revisada el 25 de octubre de 2026; es la misma que la del documento) · **Recetas:** 1,428 en 24 categorías
>
> Este archivo es la **fuente de verdad** del proyecto *cocine-a-gusto* (app "Recetarios de Aquí").
> **Regla:** cada vez que Claude Code (o cualquier persona) cambie el proyecto, este documento se actualiza en el
> mismo commit: las secciones afectadas, el número de versión, la fecha y una entrada en el [Registro de cambios](#13-registro-de-cambios).

---

## 1. Qué es

Recetario digital de **cocina tradicional puertorriqueña**, bilingüe (español / inglés). Permite:

- **Buscador inteligente:** por nombre, ingredientes o una idea ("postre sin huevo", "navidad"), con sinónimos,
  errores de escritura y español/inglés (§7.1). Filtrar por categoría, por "rápidas" (≤ 30 min) y por favoritos.
- Ver cada receta con ingredientes, pasos y **porciones ajustables** (las cantidades se recalculan).
- Ver una **estimación nutricional** por porción calculada de los ingredientes.
- Ver **alérgenos, alertas y manejo seguro** deducidos de los ingredientes.
- Guardar favoritos, imprimir y compartir la receta (enlace propio por receta).
- **Herramientas de cocina (v4.24):** modo cocina paso a paso con temporizadores y voz (§7.9), lista de compras que suma
  ingredientes y Mi recetario con colecciones, notas y "la hice" (§7.10), "¿Qué tengo en la nevera?" y filtros
  combinables (§7.11), frutas y viandas de temporada en la isla (§7.12), medidas en gramos y °C, y uso sin internet con
  barra de abajo en el celular (§7.13).
- **Nutrición con datos oficiales del USDA** (FoodData Central, con el número de cada alimento), etiqueta completa como
  la de la FDA y planes revisados contra las Guías Alimentarias 2025–2030, con objetivos de Diabetes y Presión alta (§8, §7.2).
- **Se entra con el correo electrónico (v4.41):** para ver las recetas hay que registrarse. La persona escribe su correo;
  si no está registrado ve los Términos y Condiciones con el botón "Acepto"; si ya lo está, entra sin verlos (con Gmail,
  botón de Google; con otro correo, un enlace de validación). La primera vez recibe un correo de confirmación. La cuenta
  guarda favoritas, planes y Mi recetario en la nube y permite escribir y reportar reseñas (§7.3). Las páginas
  `/receta/<id>` siguen públicas para Google (§7.15). **Panel de administración** con los usuarios y
  cuántas veces usa cada uno la app. No se guardan contraseñas. "Privacidad y mis datos" deja borrar la cuenta (§7.17).
- **Cada receta con su página propia** para Google y para compartir (`/receta/<id>`, datos estructurados, sitemap; §7.15).

Las recetas son **versiones propias redactadas para esta app** (no copias de libros ni webs).

## 2. Dónde vive

| Qué | Dónde |
|---|---|
| Carpeta local | `C:\Users\EDUARDOP\Desktop\cocine-a-gusto` |
| Repositorio | https://github.com/eduardopadilla027/recetario-de-aqui (rama `master`) |
| Publicación | Vercel, proyecto `recetario-de-aqui` → **https://recetariodeaqui.com** (dominio comprado en Vercel el 2026-10-17, renueva a $11.25/año el 17 de octubre; DNS de Vercel). `www.recetariodeaqui.com` y `recetario-de-aqui.vercel.app` redirigen a él (`vercel.json`) |
| Servidor local | `npx serve -l 3000 <carpeta>` (configuración en `.claude/launch.json`) → http://localhost:3000 |
| Correo de contacto | recetariodeaqui@gmail.com (`CONTACT_EMAIL` en `js/app.js`; se muestra en el pie y en la pantalla de entrada) |

`.vercel/` está en `.gitignore` (es la vinculación local con Vercel).

**Publicar:** Vercel **no** está conectado al repositorio de GitHub: cada versión se publica a mano desde la carpeta con
`vercel --prod` después de hacer commit y push a `master`. `.vercelignore` deja fuera de la web `marketing/`, `ARQUITECTURA.md`,
`CLAUDE.md`, `.claude/` y `firestore.rules`.

## 3. Stack

- **HTML + CSS + JavaScript sin frameworks ni build.** Scripts clásicos (no módulos) cargados en orden desde `index.html`;
  todo comparte el ámbito global (`recipes`, `estimateNutrition`, `getAdvisories`…).
- Sin backend propio: las recetas están en archivos `.js`. Preferencias en `localStorage`.
- **Acceso:** Firebase Authentication (Google, Microsoft, Yahoo, Apple y enlace por correo, sin contraseñas) y Cloud
  Firestore (correo + conteo de usos). El SDK *compat* 10.14.1 se carga desde `www.gstatic.com` sólo si
  `js/auth-config.js` tiene la configuración (§7.3).
- **Uso sin internet:** `sw.js` (trabajador de servicio) guarda la página, los scripts y los iconos en el navegador
  (red primero, copia guardada si no hay señal); `js/pwa.js` lo registra (§7.13). La app sigue publicada en la web.
- Tipografía: Tahoma/Verdana del sistema; sólo la cursiva de "Puertorriqueña" viene de Google Fonts (Playfair Display).
- Iconos de la interfaz: sprite SVG en `index.html` (sin emojis en la interfaz). Las "portadas" de los platos usan emojis
  o dibujos SVG propios mientras no haya fotos.

## 4. Estructura de archivos

```
cocine-a-gusto/
├── index.html            estructura de la página, sprite SVG (iconos, bandera, plátanos, embutidos, yuca, yautía, ñame, viandas, chayote, pinchos de camarones, cerdo y pollo, albóndigas, chuleta, churrasco y
│                         los dibujos de carnes, aves y postres por tipo de plato) y orden de scripts
├── css/styles.css        estilos (tokens en :root, responsive, movimiento reducido, impresión)
├── js/
│   ├── recipes.js        crea el arreglo `const recipes = [...]` (recetas base)
│   ├── recipes-extra.js  recipes.push(...) — ampliaciones por categoría (la más grande)
│   ├── recipes-2.js      recipes.push(...) — bebidas calientes y pastas, entre otras
│   ├── recipes-3.js      recipes.push(...) — segunda ampliación (2026-09): cuchifritos, pana, bases…
│   ├── recipes-4.js      recipes.push(...) — tercera ampliación (2026-10): clásicos, tragos tropicales, platos de pueblos, mariscos y frituras de playa, postres y dulces, más bebidas tropicales, pechugas y alitas, viandas, majados y aguacate, papas y malanga, cupcakes, bizcochos y panes dulces, gelatinas, flanes y bizcochos de calabaza, galletitas, ensaladas verdes y de granos y gazpachos, galletas (cucas, jengibre…) y más postres, pies tropicales y salsas para carnes y pollo, yogures tropicales, paellas, recetas a la parrilla y al carbón, adobos criollos, parmesanas, milanesas y recetas con Nutella, dulces de frutas tropicales, berenjena y hojaldre, cheesecakes tropicales, más tragos tropicales, más emparedados, más sopas, cremas y asopaos, más arroces y granos, recetas vegetarianas, y más pescados y mariscos, salsas y aderezos, y cereales, más postres tropicales, tragos sin alcohol, más tés, otros cortes de carnes y aves, tés tradicionales, más entremeses y frituras, más vegetales y viandas, bizcochos mojados y de sabores, panqueques, más arroces, recetas veganas, desayunos y meriendas veganos, más salsas y aderezos y platos fuertes veganos, y dulces y salsas de grosella, en cuarenta y tres tandas (ver §13)
│   ├── recipes-5.js      recipes.push(...) — cuarta ampliación (2026-10): más veganas y vegetarianas (tanda 44), postres puertorriqueños (tanda 45), frutas tropicales de la isla (tanda 46), pescados y mariscos (tanda 47), jugos y bebidas tropicales (tanda 48), sopas, asopaos, pastas y panes dulces (tanda 49) carnes y aves (tanda 50), salsas, aderezos y huevos (tanda 51) , veganas con proteína para los planes (tanda 57: desayunos, platos y meriendas), batidas y champolas (tanda 58), nutritivas boricuas de carnes, aves, pescado, granos, arroces y viandas (tanda 59) bizcochos, galletitas y brazos gitanos (tanda 60) bebidas, cócteles y un brazo gitano de pistacho y guayaba (tanda 61) y mallorcas y dulces de repostería (tanda 62), ver §13
│   ├── nutrition-usda.js GENERADO (tools/usda/): número FDC y valores oficiales del USDA de cada alimento (§8)
│   ├── nutrition.js      tabla de alimentos y estimación nutricional (estimateNutrition)
│   ├── advisories.js     alérgenos, alertas y manejo seguro (getAdvisories)
│   ├── substitutes.js    sustitutos para cada alérgeno según el ingrediente (getSubstitutes)
│   ├── search.js         buscador inteligente (smartSearch), sin servidor
│   ├── families.js       familias de recetas por categoría (flanes, tembleques…; res, cerdo…) y su orden
│   ├── pairings.js       "Combina mejor con" de las salsas y aderezos (getPairings)
│   ├── app.js            interfaz: textos ES/EN, categorías, iconos, rutas, render, filtros, porciones, tiempos
│   ├── glossary.js       glosario de la cocina boricua: recuadro en cada receta y página #/glosario (§7.16)
│   ├── plans.js          planes de comida (#/planes): objetivos, época, preferencias, plan de 1 o 7 días, Guías 2025–2030
│   ├── seasonal.js       frutas, viandas y vegetales de temporada en Puerto Rico (§7.12)
│   ├── filters.js        "¿Qué tengo en la nevera?" y filtros combinables (§7.11)
│   ├── cook.js           modo cocina, temporizadores y voz (§7.9)
│   ├── auth-config.js    configuración web de Firebase y proveedores de correo que se muestran (§7.3)
│   ├── consent.js        Términos y Condiciones (ES/EN), las 3 casillas y el correo de confirmación; también lo usa api/ (§7.14)
│   ├── consent-ui.js     consentimiento en la entrada, en la cuenta (consents/{uid}), en #/admin, #/terminos y #/privacidad (§7.14, §7.17)
│   ├── auth.js           cuenta opcional (entrada que se abre cuando hace falta), validación del correo, conteo de usos y panel #/admin (§7.3)
│   ├── install.js        "Póngala en su celular": guía para crear el icono en la pantalla de inicio (§7.6)
│   ├── photo.js          motor de fotos: achica en el navegador la foto tomada o subida antes de guardarla (§7.5)
│   ├── reviews.js        reseñas (estrellas + comentario + foto opcional) de la app y de cada receta, con aprobación previa (§7.4)
│   ├── recipe-admin.js   #/admin → Recetas: temporada recomendada (editable) y fecha de ingreso de cada receta (§7.8)
│   ├── recipe-dates.js   GENERADO: fecha de ingreso de cada receta (RECIPE_ADDED); sólo lo carga el panel (§7.8)
│   ├── kitchen.js        Mi recetario (#/mi-recetario) y Lista de compras (#/compras) (§7.10)
│   └── pwa.js            registra sw.js, aviso sin conexión y barra de abajo del celular (§7.13)
├── sw.js                 trabajador de servicio: la app sin internet (§7.13)
├── receta/<id>.html      GENERADO (tools/prerender.js): página propia de cada receta → /receta/<id> (§7.15)
├── recetas.html          GENERADO: índice de todas las recetas por categoría → /recetas (§7.15)
├── sitemap.xml, robots.txt  GENERADOS: para Google (§7.15)
├── 404.html              página "No encontramos esa página" con buscador (Vercel la sirve sola) (§7.15)
├── css/receta.css        estilos de las páginas propias, de recetas.html y de la 404 (con tema oscuro)
├── api/consent-email.js  función de Vercel: envía el correo que confirma el consentimiento (§7.14)
├── marketing/            anuncios de Facebook e Instagram: build-ads.js (genera los PNG con Edge sin ventana),
│                         ads/ (5 conceptos × feed 4:5 e historias 9:16) y GUIA-ANUNCIOS.md (textos, público,
│                         presupuesto, calendario y reglas de Meta). No se publica (.vercelignore).
├── tools/usda/           map.js (alimento → registro del USDA), resolve.js y gen.js: generan js/nutrition-usda.js (§8)
├── tools/recipe-dates.js genera js/recipe-dates.js del historial de git (no se publica: .vercelignore) (§7.8, §11)
├── tools/prerender.js    genera receta/, recetas.html, sitemap.xml y robots.txt (§7.15, §11)
├── tools/check-recipes.js revisa las recetas antes de publicar: falla si alguna está incompleta (§11, §12)
├── images/               (vacía: reservada para fotos)
├── icons/                iconos de la app (bandera sobre crema): apple-touch-icon 180, 192, 512, maskable 512, favicon 32;
│                         og-image.png 1200×630 (vista previa al compartir el enlace, §7.7)
├── manifest.webmanifest  nombre e iconos para la pantalla de inicio del celular (Android)
├── firestore.rules       reglas de seguridad de Cloud Firestore (se pegan en la consola de Firebase)
├── .claude/launch.json   servidor local para la vista previa
├── .vercelignore         archivos que no se publican en Vercel
├── vercel.json           redirecciones de www y de recetario-de-aqui.vercel.app a recetariodeaqui.com (§2); cleanUrls (/receta/<id>)
├── ARQUITECTURA.md       este documento (fuente de verdad)
└── CLAUDE.md             instrucciones para Claude Code: leer y actualizar este documento en cada cambio
```

**Orden de carga (`index.html`):** `recipes.js` → `recipes-extra.js` → `recipes-2.js` → `recipes-3.js` → `recipes-4.js` → `recipes-5.js`
→ `nutrition-usda.js` → `nutrition.js` → `advisories.js` → `substitutes.js` → `search.js` → `families.js` → `pairings.js` → `app.js` → `glossary.js` → `plans.js` (usa funciones de `app.js`) → `seasonal.js` → `filters.js` → `cook.js` → `install.js` (usa `app.js`; antes de `auth.js`, que llama a `installButtonHTML()`) → `consent.js` → `auth-config.js` → `auth.js` (usa `app.js`) → `photo.js` → `reviews.js` (usa `app.js`, `auth.js` y `photo.js`) → `recipe-admin.js` (usa `app.js`, `plans.js` y `auth.js`; carga `recipe-dates.js` al abrir el panel) → `kitchen.js` (usa `app.js`, `nutrition.js` y `auth.js`) → `pwa.js`.
`app.js` llama a las funciones de los archivos de después (`advOk`, `stepTimersHTML`, `renderRecipeKitchen`, `showMine`…) sólo
cuando la página ya cargó, con `typeof … === "function"`. Un archivo de recetas nuevo **debe** añadirse aquí, después de los anteriores.

## 5. Modelo de datos: la receta

```js
{
  id: "arroz-con-gandules",          // único, kebab-case, sin acentos; se usa en la URL #/receta/<id>
  category: "arroces",               // una de las 24 claves de categoryOrder (§6)
  name: { es: "…", en: "…" },
  active: 90, total: 90,             // minutos: preparar y cocinar / en total con las esperas (v4.30)
  wait: "frio",                      // sólo si total > active: la espera mayor (frio, congelador, enfriar,
                                     // reposo, adobo, remojo, desalar, levado, secado)
  servings: 8,                       // porciones base (el usuario las ajusta)
  ingredients: { es: [ … ], en: [ … ] },   // mismas líneas y en el mismo orden en ambos idiomas
  steps:       { es: [ … ], en: [ … ] }    // ídem
}
```

**Tiempos (v4.30):** antes `time` era un texto ("15 min", "1 hr + reposo", "5-6 hrs") y las esperas no contaban: el
coquito (4 horas de nevera) y el flan salían en "Listas en 30 minutos". Ahora cada receta guarda dos números en minutos:
`active` (preparar y cocinar) y `total` (con nevera, adobo, reposo, remojo, desalar…), y `wait` dice cuál espera es la
mayor. "Rápidas" y el filtro de tiempo usan **el total**; la dificultad, el activo. Las tarjetas muestran el total y la
receta "15 min de preparación · 4 h 15 min en total (nevera)" (antes "de cocina", que no cuadraba con el coquito; v4.40). La migración leyó el texto viejo y las esperas escritas en los
pasos ("refrigere por al menos 4 horas", "marine toda la noche", "desale el bacalao de 8 a 12 horas"); no cuenta lo que
es de guardar ("se guarda en la nevera 5 días") ni las esperas de menos de 15 minutos. Una receta nueva pone los dos
números a mano.

**Ids que cambiaron (v4.30):** `RECIPE_ALIASES` en `app.js` (`mojito-isleno` → `mojo-isleno`, `coquito-nutella` →
`coquito-chocolate`, `pollo-fricasé` → `pollo-fricase`, `bilí` → `bili`): los enlaces, favoritas, colecciones y planes
viejos siguen funcionando y las reseñas se quedan con el id viejo (`reviewTargetId`).

**Reglas de redacción** (para que funcionen porciones, nutrición y alertas):

- La **cantidad va al inicio** de la línea: `"2 tazas de …"`, `"½ libra de …"`, `"1 lata de 15 onzas de …"`. Lo que no tiene
  cantidad ("Sal al gusto") no se escala ni se suma. Lo que sí se mide lleva una cantidad de partida aunque sea a gusto:
  `"3 cucharadas de sofrito, o al gusto"` (v4.30: sofrito, chicharrón, adobos, aceitunas, miel de los tés…).
- Una sola cosa por línea, o varias con su número cada una; nada de "1 pimiento verde y 1 rojo" (el "1 rojo" no se
  reconoce): mejor "2 pimientos, uno verde y uno rojo".
- Unidades en español: taza, cucharada, cucharadita, libra, onza, lata, sobre, diente, ramita… (ver `NUTRI_UNITS`).
- Ojo con palabras que la tabla usa para otra cosa: "papitas" son las papitas de bolsa (chips); para papas pequeñas
  escriba "papas pequeñas". Revise siempre el resultado de la nutrición de una receta nueva.
- Fritura: `"Aceite vegetal para freír"` (la nutrición suma ~½ cucharada absorbida por porción).
- Lo opcional lleva la palabra "opcional" (no se suma). Sal o aceite "para el agua" tampoco.
- **Platos de un pueblo:** el pueblo va entre paréntesis en el nombre ("Pasteles de Pollo (Orocovis)") y el último paso explica
  el vínculo con el lugar. Sólo se atribuye un plato a un pueblo cuando la tradición es conocida; no se inventan orígenes.
- Pasos en **usted** ("Hierva…", "Añada…"), temperaturas **sólo en °F** (la app pone los °C con "Gramos y °C", también en
  rangos: "450–500°F (230–260°C)"), nombres boricuas (china, guineo, habichuelas, gandules…). "Mojo isleño", nunca
  "mojito isleño" (es un trago). `tools/check-recipes.js` revisa ambas cosas.
- `ingredients.es` es la fuente de la nutrición y de los alérgenos: el inglés es sólo traducción.

## 6. Categorías

Definidas en `js/app.js`: nombre ES/EN (`translations.*.categories`), icono (`categoryIcons`: un emoji o `"svg:<id>"` del sprite, que `iconArt()` pinta en la portada y en el encabezado de la categoría; Jugos Naturales usa `svg:ic-jugo-natural`), tono de portada
(`categoryTones`) y orden (`categoryOrder`). Las 24 categorías y su número de recetas:

| Clave | Nombre | Recetas |
|---|---|---|
| calientes | Bebidas Calientes | 39 |
| frutas | Frutas | 37 |
| cereales | Cereales | 26 |
| granos | Granos y Legumbres | 35 |
| ensaladas | Ensaladas | 43 |
| sopas | Sopas | 71 |
| carnes | Carnes | 84 |
| aves | Aves | 70 |
| pescados | Pescado y Mariscos | 90 |
| huevos | Huevos y Queso | 23 |
| entremeses | Croquetas, Buñuelos y Pastelillos | 66 |
| pastas | Pastas | 31 |
| bizcochos | Bizcochos | 62 |
| galletitas | Galletitas | 50 |
| pasteles_dulces | Pasteles Dulces | 32 |
| panes | Pan y Panecillos | 62 |
| emparedados | Emparedados | 35 |
| postres | Helados, Budines, Flan y Otros Postres | 148 |
| arroces | Arroces y Habichuelas | 68 |
| vegetales | Vegetales y Viandas | 103 |
| salsas | Salsas y Aderezos | 78 |
| bebidas | Bebidas | 73 |
| jugos | Jugos Naturales | 36 |
| cocteles | Cócteles y Tragos | 66 |

**Recetas que cambiaron de categoría (v4.30):** ensaladas de pulpo, de mariscos y de carrucho y la ensalada fría de pulpo
y mangó pasan de Pescados a Ensaladas (familia "De pescado y mariscos"); los pasteles de masa, de yuca y de arroz pasan
de Vegetales a Carnes y los de pollo a Aves (como los mofongos rellenos, por su relleno; los veganos siguen en Vegetales);
el coquito pasa de Bebidas a Cócteles, con los demás coquitos con ron (los sin alcohol siguen en Bebidas). Jugos
Naturales tiene 30 recetas: no se junta con Bebidas.

**Añadir una categoría:** clave en `categoryOrder`, nombre en `translations.es.categories` y `translations.en.categories`,
`categoryIcons`, `categoryTones` y sus familias en `RECIPE_FAMILIES` (`js/families.js`). En `advisories.js`, revisar si es bebida (`isDrink`).

## 7. Interfaz y navegación (`js/app.js`)

- **"Combina mejor con" (`js/pairings.js`):** en las salsas y aderezos, debajo de la preparación, un recuadro verde con
  botones de con qué platos se usan mejor: carnes, aves, pescados y mariscos, viandas y frituras, ensaladas, vegetales y
  tofu, arroz y granos, pastas, y sándwiches y hamburguesas. `getPairings()` lo saca del nombre y los pasos en español
  (`PAIR_KINDS`: "Sirva con pernil, pollo…"; no cuenta "sin carne…") y `PAIRINGS_EXTRA` completa a mano las que no lo
  dicen (sofrito, recaíto, sazón, pique…). Cada botón lleva a su categoría (`goToCategory()`, lo mismo que la insignia de
  la receta). Hoy las 62 salsas tienen al menos una combinación.
- **Orden por familia (`js/families.js`):** al elegir una categoría (sin búsqueda), las recetas salen agrupadas por familia
  con un subtítulo y su número (p. ej. postres: flanes, tembleques/majaretes/natillas, arroces dulces, budines,
  cheesecakes, gelatinas, helados/limbers/piraguas, bizcochos y tres leches, dulces de coco y frutas; carnes: res, cerdo,
  cabro/cordero/conejo, embutidos, vísceras; calientes: café, chocolate, tés de especias, tés de hojas y flores). Dentro de
  cada familia, por orden alfabético del idioma activo. `RECIPE_FAMILIES[categoría]` = familias en el orden en que se
  muestran (clave, nombre ES/EN, expresión sobre el nombre en español sin acentos; la que no tiene expresión recoge el
  resto); `FAMILY_MATCH_ORDER` dice en qué orden se prueban cuando no es el mismo ("costillas de res" antes que el cerdo,
  "pechuga de pavo" antes que las pechugas). Favoritas y rápidas también siguen este orden; al buscar, por parecido.
  **Títulos de las familias (v4.46):** como los nombres de las categorías, cada palabra empieza con mayúscula menos los
  conectores (ES: y, e, o, u, de, del, la, las, el, los, con, en, a, al, sin, para, por; EN: and, or, of, with, in, the,
  a, an, for, to, on, without): "Tés de Hojas, Flores y Hierbas", "Leaf, Flower and Herb Teas". Una familia nueva se
  escribe igual.
  Una receta nueva se clasifica sola por su nombre: revise que caiga en la familia correcta. Entremeses: empanadillas y
  pastelillos; alcapurrias y frituras de plátano y yuca; bolitas, buñuelos y rellenos; bacalaítos y frituras de mar;
  croquetas; sorullitos, domplines y otras frituras; otros. Vegetales: tostones y amarillos; mofongos y majados;
  pasteles y pastelones; viandas; papas; berenjenas; rellenos y gratinados; guisados, salteados y asados. Panes:
  panqueques (primero, por ser de desayuno); pan de agua, sobao y de molde; dulces y donas; de viandas y maíz; con
  queso y jamón. Arroces: con gandules, habichuelas y garbanzos; con pollo y carnes; con pescado y mariscos;
  fritos; paellas; arroz blanco, de hierbas y de sabores.

- **Rutas por hash:** `#/` inicio · anclas `#categorias`, `#recetas` · detalle `#/receta/<id>`
  ("Atrás" vuelve a la misma posición) · `#/planes`, `#/mi-recetario`, `#/compras`, `#/terminos`, `#/privacidad`,
  `#/glosario`, `#/admin`. **Compartir** da la página propia `https://recetariodeaqui.com/receta/<id>` (§7.15), y la app
  cambia el `<link rel="canonical">` y la descripción según la vista (`setPageMeta`). **Enlaces de afuera:** `?q=<texto>`
  busca y `?cat=<categoría>` abre una categoría (`applyUrlParams`; los usan la 404, las páginas propias y Google).
- **Cambio de vista sin deslizar (`jumpTo(y)`):** el CSS tiene `scroll-behavior: smooth`, así que `scrollTo(0, 0)` se
  deslizaba: en el celular la receta se veía primero por el final y, si se tocaba la pantalla, se quedaba abajo. Abrir
  una receta, volver a los resultados, los planes y `#/admin` usan `jumpTo()` (`behavior: "instant"`). El deslizamiento
  suave queda para los enlaces dentro de la misma página.
- **Inicio:** hero con buscador, la frase "Recetas boricuas paso a paso, en español e inglés." con la etiqueta **"¡Gratis!"** (`.hero-free`, color
  achiote; desde v4.37 ya no dice "sin registrarse") (`#site-author`; desde
  v4.30 la versión sólo sale en el pie) y estadísticas (`statsHero(publicRecipeCount(), categorías)`: "**Más de 1,000** recetas
  tradicionales · 24 categorías"; `publicRecipeCount()` baja el total al millar. En la v4.30 se puso el total exacto y en la
  v4.31.1 se volvió a "Más de 1,000" a pedido; el total exacto sale en `#/admin` y en `/recetas`), cuadrícula de
  categorías (clic = sólo esa categoría; clic de nuevo = todas) cuya **primera pestaña es "Listas en 30 minutos o
  menos"** (v4.42, `quickTileHTML()`: rayo `i-bolt` y cuántas hay; pulsarla enciende `onlyQuick` y muestra las rápidas
  en los resultados con ese título; elegir una categoría la apaga y viceversa; `QUICK_MAX_MIN = 30`, contando el tiempo
  **total**). Antes era una sección aparte (`#rapidas`) con una tira de 12 tarjetas: se quitó, y "Recetas rápidas" del
  pie (`#footer-quick`) enciende la pestaña. Luego los resultados agrupados por categoría (acordeón) con filtros *Rápidas* y *Favoritas*.
- **Recetas incompletas:** al cargar, `recipeComplete()` quita (y avisa en la consola) cualquier receta sin nombre,
  tiempos, ingredientes o pasos en los dos idiomas o con líneas que no casan; `tools/check-recipes.js` lo revisa antes.
- **Detalle:** portada (icono del plato), datos (tiempo, porciones, ingredientes, kcal/porción), línea de alérgenos,
  botones Favorito / Imprimir / Compartir, y tres pestañas: **Receta** (ingredientes con selector de porciones + pasos),
  **Información nutricional** y **Alergias y seguridad**.
- **Porciones:** `scaleIngredient` multiplica la cantidad inicial de cada línea y la escribe como número "de cocina"
  (½, ¼, ⅓…; enteros desde 10).
- **Icono de cada plato (`dishIcon`):** busca palabras de `dishIcons` en el nombre en español; gana la que aparece primero
  y, en empate, la más larga. Sin coincidencia: el icono de la categoría. Valores `svg:<id>` usan dibujos del sprite
  (plátano verde y maduro, longaniza, morcilla, yuca, yautía, ñame, viandas, pinchos de camarones, cerdo y pollo, albóndigas, chuleta, churrasco) porque
  no hay emoji correcto (🍠 es batata, 🍢 es oden japonés, 🧆 es falafel, 🍖 es carne de caricatura).
  Cada palabra va **una sola vez** en `dishIcons`: en empate (misma posición y largo) gana la primera, así que una
  repetida más abajo no se usa nunca (v4.43: "guarapo" estaba con 🍵 y con su vaso de caña; ganaba el té).
  **Lechosa y toronja (v4.44):** no tienen emoji (🥭 es mangó y 🍊 es china). `ic-lechosa` (lechosa madura partida a
  lo largo, en forma de pera, con sus semillas negras) e `ic-toronja` (toronja entera y media rosada) para las palabras
  "lechosa", "papaya" y "toronja"; los dulces en almíbar tienen su tazón con canela: `ic-dulce-lechosa` (tiras de
  lechosa verde y la lechosa verde con semillas blancas al lado) e `ic-cascos-toronja` (cascos con el borde amarillo y
  media toronja al lado). Los dibujos se generan con un script de Node (`<symbol>` fijos junto a `ic-dulce-carambola`).
  **Tanda de iconos v4.47** (todas sus reglas van al principio de `dessertIcons`, para que no las tomen las generales):
  limbers en su vaso con el color del sabor y la fruta (`ic-pos-limber-*`, `ic-limber` para la palabra); piraguas con
  el sirope del color de la fruta (`ic-pos-piragua-*`, `ic-piragua`); brazos gitanos con la espiral del relleno
  (`ic-brazo-*`); dulces y buñuelos en tazón con almíbar, en platito o en cucurucho (`ic-dulce-*`, `ic-cascos-*`,
  `ic-bunuelos-*`, `ic-besitos-coco`, `ic-melcocha`, `ic-gofio`, `ic-churros-chocolate`…); pastas con la forma de su
  plato (`ic-pasta-*`: nido de espaguetis con su salsa y acompañante, lasaña en capas, canelones y macarrones en molde,
  coditos en tazón, fideos en caldero, fideuá en paellera); sopas en el tazón de barro con su caldo y lo que llevan, los
  gazpachos en copa y la de cebolla gratinada (`ic-sopa-*`, `ic-asopao-*`, `ic-crema-*`, `ic-caldo-*`,
  `ic-gazpacho-*`); panes con su forma y su miga (`ic-pan-*`, `ic-panecillos-*`, `ic-mallorca*`, `ic-rollos-canela`,
  `ic-trenza-*`, `ic-arepas-coco`, `ic-casabe`, `ic-quesitos`, `ic-cachitos`, `ic-rosca-reyes`, `ic-panapen-horno`);
  bizcochos en pedazo con su miga, relleno, cubierta y adorno (`ic-biz-*`, `ic-ponque-boricua`), cupcakes
  (`ic-cupcake-*`) y cada flan con el color de su receta (`ic-flan-*`, `ic-flancocho`, `ic-quesillo`). Ningún dibujo
  se repite dentro de pastas (31), sopas (70) y flanes (23); ningún pan ni bizcocho queda con emoji.
- **Postres (`dessertIcons`):** después de `meatIcons` y antes de `dishIcons`, por nombre y en orden (gana la primera):
  flan (con caramelo; el color sigue al sabor: vainilla, queso, chocolate y flancocho, café, coco con hojuelas, guayaba,
  frutas, calabaza y batata), tocino del cielo, gelatina en molde (roja, amarilla, blanca, café, guayaba y mosaico),
  tembleque (blanco y de café), arroz con dulce y arroz con leche o coco en tazón, budín en pedazo (pan, batata/cazuela,
  guineo) y natilla, majarete y bienmesabe en copa. Variantes de color: natilla de chocolate, tembleque de calabaza.
  **Galletas** (mismas reglas): 30 dibujos por tipo — cucas oscuras con azúcar, muñequitos de jengibre, agrietadas,
  chispas, chocolate, glaseadas (limón/jengibre, parcha, coquito), con mermelada, mantecaditos (con cereza o mitad en
  chocolate), tenedor (maní, royales), avena, pasas, anaranjadas (calabaza, batata), polvorones y maicena, anís, ajonjolí,
  almendra, café, Marías, soda, danesas, suspiros, alfajores, espirales, coco y coconetes.
  **Pies y salsas** (mismas reglas): pie con un pedazo servido, relleno del color de la fruta y cubierta según el tipo
  (rejilla, merengue, crema, natilla); salsas en tazón con su adorno (brocha para BBQ, cuchara, palito de miel) y el
  adobo mojado en el pilón. **Yogures:** parfait en vaso, tazones (piña y coco, parcha, guayaba, yogur helado), frascos
  (yogur casero, avena fría), paletas y salsa de yogur. **Jamonilla frita** con su propio dibujo (va antes que la regla
  de "jamon", que la confundía con el jamón glaseado). **Huevos:** tortilla española y de amarillos (gruesas, con un
  pedazo servido y sus capas), tortilla de jamón y queso (doblada), revoltillo de bacalao y con salchichas (en sartén),
  huevos rellenos y huevos habaneros (en cazuela con salsa criolla). **Paellas:** paellera con asas y arroz de azafrán;
  encima los ingredientes de cada una (mariscos, negra con calamares y alioli, langosta, pulpo, valenciana con pollo y
  habichuelas tiernas, mixta, pollo y chorizo a la boricua en arroz anaranjado, vegetales). **A la parrilla:** parrilla
  redonda de carbón con brasas y rejilla, con la comida encima (muslos, chillo entero, camarones, salmón, costillas de res,
  maíz, maduros, vegetales, queso de freír); hamburguesas 🍔. **Adobos:** frasco con etiqueta que dice para qué es
  (bistec, muslito, pescado, pavo, cuernitos de cabro, llama de BBQ, pimiento, limón, salero tachado para el sin sal);
  secos con polvo y tapa de salero, mojados con pasta; el adobo mojado para pernil sigue en el pilón. **Empanados:**
  parmesana (con salsa y queso gratinado; también berenjena y napolitana), cordon bleu (ruedas con espiral de jamón y
  queso); las milanesas y el panko usan el empanado con limón. **Nutella:** crepas con guineo y brownies; flan y galletas
  usan las versiones de chocolate. **Conservas:** frasco con tapa de tela a cuadros, color de la fruta y su fruta en la
  etiqueta (acerola, guayaba, grosella, carambola, mangó, parcha, piña). **Berenjena:** guisada, escabeche en frasco,
  frita, lasaña, dip, revoltillo y pastelón. **Hojaldre:** palmeras, milhojas, trenza, tarta salada, empanada gallega y
  pastelillos de hojaldre; cachitos 🥐. **Cheesecakes:** pedazo con base de galleta, relleno cremoso y la cubierta de
  cada sabor (parcha con semillas, mangó en cubitos, coco, piña colada, coquito con canela, guanábana con menta,
  guayaba); los mini van en capacillos. La tarta de queso con guayaba usa el de guayaba. **Tragos:** cada uno en su vaso
  (copa hurricane, vaso alto, vaso bajo, coupé, ponchera, jarra) con el color del trago y su adorno (cuña de piña,
  rueda de cítrico, yerbabuena, sorbeto, borde de sal o de coco, degradado del sunrise, capas del dark & stormy).
  **Emparedados:** pan largo con el relleno de cada uno (churrasco, bistec y tripleta; lechón y pernil; choripán;
  pavochón), pan de hamburguesa con pescado, desayuno en pan sobao, triángulos de queso con guayaba, club de dos pisos,
  wrap cortado y jibaritos con tostones como pan. **Sopas:** tazón de barro con el contenido de cada una: asopaos rojizos
  con arroz, aceitunas y su marisco o carne; cremas lisas con espiral y adorno, del color de su vianda o vegetal; sopas de
  caldo con fideos, habichuelas rojas/negras/blancas, garbanzos, lentejas, sancocho con mazorca, pescado, guingambó,
  albóndigas, plátano, coditos o mondongo. Los gazpachos conservan 🍅 y 🥭. **Vegetarianos:** jaca mechada en salsa
  con pimiento y aceitunas, tofu guisado en tazón, ramitos de coliflor con salsa de guayaba, pinchos de queso de freír y
  vegetales, pimientos rellenos rojo y verde, serenata con viandas, huevo y aguacate, hamburguesa de habichuelas negras,
  quinoa con gandules y penne en crema de calabaza (`ic-veg-*`, `ic-quinoa`, `ic-pasta-calabaza`). **Tanda 29:**
  pescados en plato o tazón de barro con lo que llevan (`ic-pes-*`: filete con limón, camarones en C, anillos de calamar,
  almejas y mejillones abiertos, papillote, tacos abiertos, tortitas); salsas en tazoncito blanco del color de la salsa o
  en aceitera para las vinagretas; cereales en tazón de desayuno, molde, frasco de granola o pila de panqueques.
  **Pescados (`ic-pez-*`, antes 🐟):** chillo entero frito o al horno con vegetales, filetes (al mojo, en salsa criolla,
  empanado, dorado con marcas de plancha y mangó), ruedas de sierra con el hueso, guisados en tazón de barro (bacalao,
  con berenjena, salmón, atún, en salsa de coco), bacalao a la vizcaína en cazuela, escabeche con aros de cebolla, ceviche
  en copa, pescado en hoja de plátano, mojo isleño, bacalaítos, frituras de cetí, chicharrones en cono y gazpacho de bacalao.
  **Postres tropicales (`ic-pos-*`, tanda 30):** van al principio de `dessertIcons` para que no los tomen las reglas
  generales; mousse y copa en copa de vidrio, panna cotta en vasito, tembleque anaranjado, guineos flambeados en sartén
  con llama, sorbete en bolas, pavlova con frutas, crumble en molde con mantecado, crema de guanábana en capas, bizcocho
  de guineo en pan, bundt de mangó glaseado, pastelillos de piña, frasco de piña en almíbar y tiritas de mangó verde.
  **Tragos sin alcohol (`ic-sin-*`, tanda 31):** vaso alto, copa, botella, jarra, ponchera o frasco según el trago, con
  su color (capas de granadina, rojo de fresa subiendo, burbujas) y su adorno (menta, limón, piña y cereza, romero).
  **Tés (`ic-te-*`):** taza en su platito con el color de cada té y, al lado, su hoja, flor o especia (naranjo,
  yerbabuena, manzanillas, canela y clavos, anís estrellado, orégano brujo, albahaca, cáscara de piña, guayaba, tilo,
  limoncillo, jengibre, hoja y flor de parcha, limón, guanábana, moringa, cúrcuma, jamaica, romero, hinojo, chai…).
  **Otros cortes (`ic-corte-*`, tanda 33):** van al principio de `meatIcons` (carnes y aves) para que no los tomen
  "chuleta" ni "costill": ruedas de falda rellena, picanha en C con su grasa, ribeye con marcas y mantequilla, short
  ribs con hueso, osobuco con tuétano, brisket en lascas, medallones de solomillo, cerdo desmenuzado, panceta con
  cuero, pierna y chuletitas de cordero, pato, codornices, gallinitas, pollo en mariposa en la parrilla, pechuga de pavo,
  muslo de pavo guisado e higaditos con cebolla.
  **Entremeses (`ic-ent-*`):** todos con su forma (antes casi todos 🥟): empanadillas en media luna con el borde de
  tenedor y una mordida que enseña el relleno, con su seña al lado (camarón, muela de juey, langosta, tentáculo, carrucho,
  espinaca, pizza, bacalao, pescado); pastelillos más pálidos y con burbujas; alcapurrias en torpedo con el relleno a la
  vista; croquetas empanadas con el centro de su color; rellenos ovalados; bolitas, buñuelos y almojábanas; sorullitos,
  piononos, arañitas, tostones rellenos, domplines, yaniqueques, taquitos y deditos de queso.
  **Vegetales y viandas (`ic-veg-*`, tanda 36):** bastones de ñame con mojo, chips de tres colores, batatas fritas con
  mayo-ajo, frasco de yuca en escabeche, molde gratinado, mofongo de amarillo, tazones de calabaza, repollo, chayote y
  maíz, ramitos de brócoli, espinacas con garbanzos, sartén de champiñones y habichuelas tiernas con almendras.
  **Bizcochos (`ic-biz-*`, tanda 37):** bundts con su glaseado y adorno (brandy y amaretto con su botellita, pistacho,
  mantequilla), pedazos de bizcocho mojado con la base húmeda y su cubierta (almendras, almíbar con vainilla, coquito
  con canela, café con crema y cocoa, dulce de leche, piña colada), bizcocho de limón glaseado y red velvet en capas.
  **Rosquillas y donas (`ic-pan-*`):** rosquillas de viento como aros dorados sin glaseado, rebozados en azúcar con
  canela; donas glaseadas (rosado y chocolate, con grageas); donas rellenas con azúcar en polvo y la guayaba saliendo.
  **Panqueques (`ic-pq-*`, tanda 38):** pilas del color de cada masa con su cobertura (mantequilla y melao, guineo,
  sirop de parcha con semillas, nueces, chispas y fresas, guayaba y queso crema entre capas, rueda de piña con cereza,
  yogur con fruta, sello verde "sin gluten" en el de harina de plátano, huevo frito en el salado de maíz). Van antes
  de la regla general de panqueques (`ic-panqueques`, que sigue para el de avena y guineo).
  **Arroces (tanda 39):** el mismo montoncito de los arroces, del color de cada uno y con lo que lleva encima
  (cilantro y limón, verde de recao con ají, ajo tostado, achiote con aceitunas, calabaza, espinaca y garbanzos,
  champiñones, amarillos y queso, piña y jamón, tocineta y pimientos, huevo y vegetales); el cremoso, en tazón.
  **Veganas (`ic-vg-*`, tanda 40):** cada una con su forma y una hojita verde en un círculo arriba a la derecha.
  **Salsas y aderezos (`ic-sz-*`, tanda 42):** tazón con el color de la salsa y su fruta al lado (grosellas, acerolas,
  parcha, tostón, aguacate, maní), aceitera de vinagreta, botella de pique con piña y ajíes, sartén de cebolla y frasco de
  jalea; las veganas, con la hojita. Los platos fuertes veganos de la tanda 42 siguen el estilo `ic-vg-*` (cazuela de
  barro, pinchos, plato de mamposteao y de espaguetis, tacos).
  **Grosellas (`ic-gr-*`, tanda 43):** la grosella redonda con sus gajos (verde amarillenta cruda, rojiza cocida) junto a
  cada forma: frasco de mermelada con canela, tazón de curadas con sal y limón, vaso de limber, pie con rejilla, bizcocho
  volteado, vaso de refresco, chutney con pasas y jengibre, jamón glaseado, botella de pique y aceitera de vinagreta.
  **Arroces:** montoncito en plato del color de
  cada uno (blanco con vapor, amarillo de achiote, anaranjado, oscuro de habichuelas negras, integral, frito chino) con lo
  que lleva encima (gandules, pollo, mariscos, pescado, embutidos, costillitas, maíz, vegetales); el arroz con
  habichuelas va con su tazoncito al lado. **Granos:** tazón de barro con el grano y su salsa (habichuelas rojas,
  rosadas, negras, blancas, pintas y tiernas, garbanzos, gandules, lentejas, habas, guisantes, hummus) y los garbanzos
  crujientes en plato.
- **Carnes y aves (`meatIcons`):** antes de `dishIcons`, las recetas de las categorías `carnes` y `aves` buscan su
  dibujo por tipo de plato con una lista de expresiones en orden (gana la primera): guiso en caldero (`ic-guiso-carne`,
  `ic-fricase-pollo`, ambos sobre `ic-caldero`), encebollado, empanado, desmenuzado (ropa vieja, salpicón), picadillo,
  lechón entero (`ic-lechon`, `ic-lechon-vara`), lengua rellena, carne mechada (también lomo
  relleno), asado con cuerito (`ic-pernil`: pernil, cabrito), masitas fritas, costillas, jamón con piña, pollo asado entero, pollo frito, alitas y
  pechuga a la plancha. Una regla con `null` deja pasar el nombre a `dishIcons` (chuletas, churrasco, embutidos,
  albóndigas, conejo, pinchos, mofongo, pastelón). Los dibujos se generan con un script de Node (contornos irregulares
  deterministas) y quedan como `<symbol>` fijos en `index.html`.
- **Idioma:** ES/EN con `translations`; se recuerda en `localStorage` (`rcb.lang`). Favoritos en `rcb.favorites`.
- **Accesibilidad:** enlace "Saltar al contenido", pestañas con `role="tab"`, `aria-live` en conteos, foco visible,
  contraste AA de los tokens de color, `prefers-reduced-motion` e impresión limpia de la receta.

### 7.1 Buscador inteligente (`js/search.js`)

Funciona todo en el navegador (sin servidor ni servicios externos, gratis y al instante). `smartSearch(texto, { isQuick, lang })`
devuelve una puntuación por receta y un resumen de lo que entendió; `app.js` filtra con ella, **ordena por relevancia**
(y los grupos de categoría por su mejor receta) y muestra bajo el conteo la línea *Busco · Sin · Ideas · Corregí*
(`#search-understood`, textos en `translations.*.understood`).

- **Dónde busca:** nombre (vale 6), ingredientes (3) y pasos (1) de cada receta, **en español e inglés a la vez**
  (así "chicken rice" encuentra "Arroz con Pollo" y "loiza" encuentra los platos de Loíza que lo mencionan en los pasos).
- **Normaliza:** sin acentos ni mayúsculas; singular y plural ("limones" = "limón"); ignora palabras vacías
  (y, con, de, para, receta, algo, quiero, and, with…) y frases de conversación (tengo, hay, hago, cocino, puedo,
  necesito, dime, rico, sabroso, hoy, have, what, cook, tonight…): "tengo pollo y papas" busca pollo **y** papas
  (antes "tengo" contaba, ninguna receta lo tenía y caía en "las más parecidas" con 232 resultados). Las palabras
  pueden ir en cualquier orden.
- **En la interfaz (`app.js`):** busca en vivo cuando se deja de escribir (`SEARCH_DELAY` = 180 ms) y desde 2 letras
  (con Enter, aunque sea una); escribir **quita la categoría elegida** (antes buscaba sólo dentro de ella sin decirlo:
  "pollo" con Postres elegida daba 0); mientras hay búsqueda se esconden las categorías y las rápidas
  (`#view-home.is-searching`) para que los resultados queden justo debajo del buscador; y se dibujan **por tandas de
  30** (`RESULT_PAGE`) con "Ver más resultados (N)". Los grupos por categoría se arman en una sola pasada.
- **Sinónimos** (`S_GROUPS`): china = naranja = orange, parcha = maracuyá = chinola, habichuela = frijol = bean,
  guineo = banana, juey = cangrejo, alita = ala = wing, pechuga = breast, dona = donut, cupcake = bizcochito, gelatina = jello, negro = negra, etc. **Términos generales** (`S_EXPAND`, cuentan la mitad):
  "mariscos" incluye camarón, pulpo, langosta…; "carne" incluye res, cerdo, pollo…
- **A la parrilla:** `bbq`, `barbacoa`, `carbon`, `parrilla` y `grill` amplían a todo lo que se hace al fuego
  (parrilla, carbón, brasa, pinchos, ahumado).
- **"sin" dentro de un nombre:** si la búsqueda lleva "sin/no/libre/free" y coincide tal cual con nombres de recetas
  ("adobo sin sal", "pina colada sin alcohol"), se muestran esas recetas y "sin" no excluye; si no, la exclusión
  funciona como siempre ("trago sin alcohol", "postre sin huevo"). Las palabras adobo, marinada, sazón y rub cuentan
  como la categoría salsas ("adobo para pollo" usa la regla "X para Y").
- **"Sin horno" / "no bake":** es una idea (pasos que no usan el horno), no la exclusión de la palabra "horno"
  ("cheesecake sin horno", "pie sin horno"). "Sin horno" a secas no cuenta como parte de un nombre (si no, sólo salía
  "Cheesecake de Guanábana (Sin Horno)"). Sinónimo cheesecake = chesecake = cheescake.
- **Sinónimos nuevos:** cereza = acerola (en Puerto Rico la "cereza" es la acerola), jalea = mermelada, hojaldre =
  milhojas = palmera. "postre" también cubre pasteles dulces, bizcochos y galletitas ("postre de hojaldre").
- **Empanados:** `empanado`, `empanada` y `breaded` amplían a milanesa, parmesana y panko ("pechuga empanada",
  "breaded chicken").
- **"X para Y"**: si lo de antes de "para"/"for" nombra una categoría ("salsa para pollo", "postre para Navidad"), se
  busca sólo en esa categoría y lo de después ordena los resultados sin ser obligatorio.
- **Categorías por su nombre** (`S_CATS`): "postres", "tragos", "sopas", "frituras"…
- **Errores de escritura:** si una palabra no existe en el recetario, primero se busca una que **suene igual**
  (`sPhon`: y = ll, v = b, s = z = c(e,i), h muda, k = qu = c(a,o,u), g(e,i) = j, letras dobles): "poyo" → "pollo" (antes
  "poco"), "vacalao" → "bacalao", "abichuelas" → "habichuelas". Si no hay, la más parecida al escribirla (distancia de
  edición 1–2), prefiriendo las que más aparecen en nombres ("polo" → "pollo"). Los desempates por frase usan la palabra
  ya corregida, así que "polo" ordena igual que "pollo".
- **La palabra nombra una categoría:** si la palabra corresponde a la categoría de la receta ("arroz" → Arroces), suma
  2: "arroz" muestra primero Arroz con Gandules y no Arroz con Dulce.
- **Exclusiones:** "sin X", "no X", "without X", "libre de X", "X free". Alérgenos (gluten, leche/lactosa, huevo,
  pescado, mariscos, nueces, maní, ajonjolí, soya, coco) usan `getAdvisories`; "sin alcohol" usa las alertas de alcohol
  ("trago sin alcohol" busca entre todas las bebidas); "sin carne" excluye carnes, aves y pescados; cualquier otra palabra
  excluye las recetas que la llevan en los ingredientes.
- **Ideas** (`S_IDEAS`): navidad, playa/kioscos, desayuno, rápido (≤ 30 min), vegetariano, vegano (las recetas con "vegano" en el nombre van primero; además sin lácteos, huevo, miel ni
  gelatina; la leche y crema de coco y la mantequilla de maní sí valen), picante, frío y refrescante,
  saludable/ligero (< 350 kcal y sin freír), con alcohol y "mocktail" (tragos sin alcohol). La idea "para niños" se quitó en v4.59; su regla quedó
  interna como `sKidSafe()` (sin alcohol, cafeína, crudos, anís estrellado ni tés fuertes) para el plan de autismo.
  "Trago/bebida sin alcohol" y "mocktail" ponen primero las recetas cuyo nombre dice "sin alcohol".
- **Orden:** suma de puntuaciones + desempates (el nombre contiene la frase buscada, empieza con ella, o la búsqueda cubre
  la mayor parte del nombre: "Arroz con Pollo" antes que "Sopón de Pollo con Arroz").
- **Si nada tiene todas las palabras**, muestra las recetas que tienen alguna y lo dice ("Ninguna receta tiene todo…").
- Rendimiento: índice por receta en caché; cada búsqueda tarda unos milisegundos (la primera con alérgenos, ~0.25 s).
- **Arreglos de v4.30:** "mañana" ya no es la idea Desayuno (es una palabra vacía: "¿qué cocino mañana?"; la idea usa
  desayuno/desayunar/breakfast); comidas de dos palabras se juntan antes de buscar (`S_PHRASES`: "sweet potato" →
  batata, "ice cream" → helado, "pigeon peas" → gandul, "salt cod" → bacalao, "passion fruit" → parcha…; antes "sweet"
  traía postres); plurales en -ces (`S_Z_PLURAL`: nueces → nuez, arroces → arroz, sin tocar "dulces"); y `S_CATS` tiene
  sólo palabras que nombran la categoría: "habichuela" ya no trae todos los Arroces ni "queso" todos los Huevos y Queso,
  sino las recetas que los llevan. Una búsqueda que sólo tiene palabras vacías no muestra el recetario entero.

### 7.3 Acceso y administración (`js/auth.js`, `js/auth-config.js`, ruta `#/admin`)

- **Entrada con correo, obligatoria (v4.41):** `setupAuth()` abre `#auth-gate` desde el principio y no se cierra
  (`GATE_CLOSABLE` vacío, sin "Seguir sin cuenta"): `<body class="auth-locked">` esconde la app hasta entrar. Pasos:
  **1. `signin`** — "Entre con su correo electrónico", campo de correo y **Continuar**, y debajo "Lo que trae la app".
  **2. `checkEmail()`** lee `registered/{correo}` (público por correo exacto, no se puede listar; §7.14). Si no existe
  (o no se puede leer) → **`terms`**: los términos con el botón "Acepto los términos y condiciones" (`consentBlockHTML("new")`).
  Si existe, no ve los términos. **3. `showMethod()`** → **`method`** si el correo es de un proveedor activado
  (`providerForEmail`: Gmail → Google, con `login_hint`; fuera de Facebook/Instagram) con "Enviarme un enlace al
  correo"; si no, envía el enlace directamente (`sent`). Al entrar, `consentOnUser` (§7.14). Sin usuario, `onUser(null)`
  deja la entrada en `signin` (o donde iba: `terms`, `method`, `sent`, `confirm`). Si el SDK no carga, `offline` con
  **Reintentar**. Sin señal, quien ya había entrado sigue con lo de este navegador (`enterOffline`, estado `guest`).
  Suspendida: "Acceso suspendido" con **Salir**.
- **Antes (v4.30–4.40), cuenta opcional:** la app abría sin cuenta (estado `guest`): recetas, buscador, filtros, planes y Mi recetario
  funcionan y guardan en el navegador. Antes `<body class="auth-locked">` tapaba todo hasta entrar (con una vitrina de 4
  platos) y los enlaces compartidos caían en la entrada. Ahora `#auth-gate` sólo se abre con **Entrar** (barra de la
  cuenta, en el menú) o cuando algo necesita la cuenta: `requireAccount(motivo, después)` / `openSignIn()` (escribir o
  reportar una reseña, `#/admin`), con el motivo arriba ("Para escribir una reseña, entre con su cuenta.") y, al entrar,
  sigue lo que se iba a hacer (p. ej. abre el formulario). **Seguir sin cuenta** (`closeSignIn`) la cierra y vuelve al
  mismo punto de la página; si había una sesión a medias (sin validar, sin aceptar los términos o suspendida) se sale de
  ella. Mientras Firebase carga la app ya se usa; si no carga (sin señal), "Entrar" lo reintenta (estado `offline`).
  "Para qué sirve la cuenta" reemplaza la vitrina: favoritas, planes y Mi recetario en todos sus equipos, y reseñas.
  Las tres casillas de los términos siguen siendo obligatorias, pero sólo para crear la cuenta.
- **Pantalla de entrada:** la persona **escoge su proveedor de correo**: Gmail
  (Google), Outlook/Hotmail/Live (Microsoft), Yahoo Mail, iCloud (Apple) u **"¿Otro correo?"**, que envía un enlace de
  validación al buzón (Firebase *email link*, sin contraseña). Qué botones salen se decide en `AUTH_CONFIG.providers`
  (Apple viene apagado: exige cuenta de Apple Developer). **Estado (2026-10-15):** Gmail, Yahoo y el enlace por correo
  encendidos; Microsoft apagado hasta que su proveedor esté guardado en Firebase. Para comprobar un proveedor sin entrar:
  `POST https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=<apiKey>` con
  `{ providerId: "microsoft.com", continueUri: "https://recetario-de-aqui.firebaseapp.com/__/auth/handler" }` devuelve
  `authUri` si está configurado u `OPERATION_NOT_ALLOWED … configuration is not found` si no.
  Cada botón lleva el logo original del proveedor
  (`PROVIDER_MARKS`): Gmail con su "M" de cuatro colores (antes una "G" de texto), Microsoft con sus cuatro cuadros.
- **Validación:** con Google y con el enlace el correo llega validado. Si un proveedor lo entrega sin validar (algunas
  cuentas de Microsoft), Firebase envía un mensaje de validación y la vista "Valide su correo" espera ("Ya lo validé" /
  "Reenviar"). Si el enlace se abre en otro navegador, se pide el correo otra vez.
- **Qué se guarda (Firestore `users/{uid}`):** `email`, `count` (veces que usa la app: +1 por sesión del navegador,
  marcada en `sessionStorage`), `firstSeen`, `lastSeen` y `blocked` si un administrador suspende la cuenta.
  **Los administradores no cuentan:** `onUser()` pregunta primero `checkAdmin()` y, si lo es, `recordUse(user, true)`
  sólo lee su registro (para ver si está suspendido) sin crearlo ni sumar `count` ni `lastSeen`. Los conteos que ya
  tenían quedan guardados pero no se muestran ni se suman (borrarlos exigiría cambiar `firestore.rules`).
  **Nunca contraseñas**: la app no las ve. (Firebase Authentication guarda la cuenta: correo y proveedor.)
- **Ajustes de Planes en la cuenta (`users/{uid}/data/plan`):** `{ plan, updatedAt }` con objetivo, datos personales
  (sexo, edad, peso, estatura, actividad), alergias, preferencias, época y días. `savePlan()` (plans.js) los guarda en el
  navegador y llama a `cloudSavePlan()` (auth.js, con 0.8 s de espera). Al entrar, `loadUserPlan()` trae los de la cuenta
  (o sube los del navegador si la cuenta no tiene); al salir, `applyPlan(null)` deja el navegador con los de fábrica.
  `cleanPlan()` sólo acepta las claves de `PLAN_DEFAULTS`. Sólo la persona dueña los lee: **ni los administradores**.
- **Mi recetario en la cuenta (`users/{uid}/data/kitchen`, v4.24):** `{ kitchen, updatedAt }` con colecciones, notas,
  "la hice" y la lista de compras (§7.10); mismas reglas de dueño que el plan. **Hay que publicar las reglas nuevas** de
  `firestore.rules` (bloque `docId == 'kitchen'`) en la consola de Firebase; sin ellas todo queda en el navegador.
- **Sin internet:** la marca de "equipo de confianza" (`rcb.trusted.<uid>`, que la persona podía editar) se quitó en v4.30
  (y se borra del navegador). Sin señal, `enterOffline()` deja a la persona como invitada con su propia copia de este
  navegador (planes y Mi recetario), sin acceso al servidor; al volver la conexión, `onUser()` revisa de nuevo
  (suspendida, administrador, conteo) y lo hecho sin señal sube a la cuenta.
- **Suspensión al momento (v4.30):** con la sesión abierta, `watchUser()` escucha `users/{uid}`; si un administrador la
  suspende, la app pasa enseguida al estado `blocked` ("Puede seguir viendo las recetas sin cuenta") en vez de esperar a
  que recargue. Y las reglas de Firestore se lo impiden en el servidor (`notBlocked()`): una cuenta suspendida no
  guarda planes, Mi recetario, consentimientos, reseñas, fotos ni reportes, aunque tenga una pestaña abierta.
- **Al entrar no se pierde nada (v4.30):** el plan y Mi recetario que se hicieron sin cuenta pasan a la copia de la
  persona (`usePlanOwner`, `useKitchenOwner`). Si la cuenta ya tenía **otro** plan, se pregunta cuál conservar (antes
  ganaba el más reciente y el otro se perdía sin aviso). Mi recetario se **junta** (`mergeKitchen`: colecciones, notas,
  "la hice", lista de compras y favoritas). **Favoritas en la cuenta:** `kitchen.favs` (las del navegador y las de la
  cuenta se juntan al entrar).
- **Administradores:** los correos con documento en `admins/{correo}`. Ven "Administrador" en el menú y `#/admin`:
  totales (usuarios = todas las cuentas; usos y activos en 7 días = sólo las que no son de administrador; **recetas en la app** = el total exacto, `recipes.length`), búsqueda,
  tabla con correo, veces ("—" para los administradores, también en el CSV), primera y última vez y rol, acciones
  **Hacer/Quitar admin** y **Suspender/Reactivar** (no sobre sí mismos) y **Exportar CSV**. En el encabezado está el
  correo de la sesión y "Salir".
- **Seguridad (`firestore.rules`):** cada quien lee sólo su registro; al crearlo sólo puede poner su correo validado y
  `count = 1`; después sólo puede subir `count` exactamente 1 y `lastSeen`. Sólo los administradores leen a todos,
  cambian `blocked` y crean o borran `admins`. Público (sin cuenta): reseñas aprobadas, sus fotos y `recipeMeta`.
  La persona puede borrar su registro, sus datos, su consentimiento, sus reseñas, fotos y reportes (§7.17), aun suspendida.
- **Pruebas de las reglas (v4.30):** con el emulador de Firestore (`firebase emulators:exec` + `@firebase/rules-unit-testing`)
  se comprobó que un usuario no lee a otros, no se hace administrador ni dueño, no aprueba su reseña ni se quita
  `blocked`; que una cuenta suspendida no escribe pero sí borra su cuenta; que el anónimo lee sólo lo publicado; y el
  borrador, los reportes, borrar la cuenta y el consentimiento con la hora del servidor (30 de 30). **Hay que publicar
  `firestore.rules` en la consola de Firebase** para que todo esto valga en el sitio.

**Puesta en marcha (una vez, en https://console.firebase.google.com):**

1. Crear un proyecto y una app **Web**; copiar `apiKey`, `authDomain`, `projectId` y `appId` en `js/auth-config.js`.
2. **Authentication → Método de acceso:** activar *Correo electrónico/contraseña* con **Vínculo de correo electrónico
   (acceso sin contraseña)**, y *Google*. Para Outlook: *Microsoft* (requiere registrar una app en Azure / Microsoft
   Entra). Para Yahoo: *Yahoo* (app en developer.yahoo.com). Para iCloud: *Apple* y poner `apple: true`.
3. **Authentication → Configuración → Dominios autorizados:** añadir `recetariodeaqui.com` y `www.recetariodeaqui.com` (y `recetario-de-aqui.vercel.app`, el anterior; localhost ya está). Sin esto, en ese dominio no se puede entrar.
4. **Firestore Database:** crearla y publicar el contenido de `firestore.rules` en *Reglas*.
5. **Administrador dueño:** `eduardo.padilla027@gmail.com`, fijo en `firestore.rules` (`ownerEmail()`). Al entrar por
   primera vez la app le crea `admins/eduardo.padilla027@gmail.com` con `owner: true`; sale como "Dueño" y nadie le
   puede quitar el rol ni suspenderlo. Los demás administradores se nombran desde `#/admin`. Para cambiar de dueño se
   edita `ownerEmail()` y se vuelven a publicar las reglas. El correo no va en el código del sitio.

Sin `apiKey` la app se usa igual sin cuenta; "Entrar" muestra "Acceso sin configurar".

### 7.4 Reseñas de la app y de las recetas (`js/reviews.js`)
- **Qué es:** 1 a 5 estrellas + comentario opcional (hasta 1,000 letras) + **foto opcional** del plato (§7.5) y un
  **nombre que escribe la persona** (2 a 40 letras; se recuerda en este navegador en `rcb.reviewName.<uid>`). El correo
  **nunca** se publica. Una reseña por persona
  y por receta, y una de la app; se puede **Editar** o **Borrar**.
- **Dónde:** la de la app en la sección `#opiniones` del inicio (enlace "Opiniones" en el pie; se esconde al buscar); la de
  cada receta en `#recipe-reviews`, al final del detalle, y un resumen (promedio y número) en `#recipe-rating`, bajo los
  alérgenos, que lleva a las reseñas. Se ven las 5 más recientes y "Ver más reseñas". Todo en ES/EN.
- **Aprobación previa:** toda reseña nueva o editada queda `pending` y sólo la ve su autor ("Pendiente de aprobación").
  En `#/admin`, bajo la tabla de usuarios, **Reseñas pendientes** (las más viejas primero) con la receta o "La app", el
  correo del autor (sólo para administradores), **Aprobar** y **Borrar**. Los administradores también pueden borrar
  reseñas publicadas desde la receta o desde `#opiniones`.
- **Datos:** `reviews/{target}__{uid}` con `target` = `app` o `r:<id de la receta>`: `{ target, uid, name, stars, text,
  hasPhoto, status, createdAt, updatedAt }` (las reseñas viejas no tienen `hasPhoto`: cuenta como `false`). La foto va
  aparte en `reviewPhotos/{mismo id}` (§7.5). Lecturas: `where(target).where(status == approved)` (sin índice compuesto; se ordena en
  el navegador), la propia por su id y, para administradores, `where(status == pending)`.
- **Ganchos:** `renderModal()` (app.js) → `renderRecipeReviews()`; `onUser()` (auth.js) → `resetReviews()` y, al entrar,
  `reviewsOnReady()`; `renderAuthTexts()` → `renderAllReviews()` al cambiar de idioma; `renderAdminShell()` y
  `loadAdminData()` → `renderPendingReviews()` / `loadPendingReviews()`. Todo texto del usuario pasa por `esc()`.
- **Sin cuenta (v4.30):** las publicadas (y su promedio) las ve todo el mundo; antes, sin cuenta, se quedaba en
  "Cargando reseñas…" para siempre. Sin Firebase (sin señal o sin configurar) dice "Las reseñas no se pueden ver ahora".
  "Entrar para escribir una reseña" abre la entrada y, al entrar, el formulario.
- **Editar una publicada (v4.30):** ya no la esconde ni baja el promedio. Los cambios se guardan en `draft`
  (`{ name, stars, text, hasPhoto, newPhoto }`) con `pendingEdit: true`, la foto nueva en `reviewPhotos/{id}__draft`, y se
  sigue viendo la versión aprobada. La persona ve sus cambios con "Cambios pendientes de aprobación". En `#/admin`
  salen con "Cambios propuestos a una reseña publicada" y **Aprobar cambios** (pasan a la reseña, y la foto nueva a la de
  la reseña) o **Descartar cambios**. Una pendiente que nunca se aprobó se edita como antes.
- **Reportar (v4.30):** cada reseña publicada de otra persona tiene **Reportar** (con cuenta; sin cuenta pide entrar):
  pregunta el motivo y guarda `reports/{id de la reseña}__{uid}` = `{ review, target, uid, reason, at }`. En `#/admin`,
  **Reseñas reportadas** con los motivos, **Descartar reporte** y **Borrar** la reseña.
- **Seguridad (`firestore.rules`, `match /reviews/{rid}`):** el id debe ser `target__uid` propio; sólo esas 9 claves,
  tipos y largos válidos; el autor sólo escribe `status: 'pending'` con `updatedAt` del servidor (y `createdAt` igual al
  anterior al editar); una cuenta suspendida no puede escribir. Leer: las publicadas, cualquiera que entre; las
  pendientes, su autor y los administradores. Los administradores sólo cambian `status`. Borrar: el autor o un
  administrador. **Al cambiar las reglas hay que volver a publicarlas** (Firestore Database → Reglas → pegar → Publicar);
  sin eso la app muestra "Las reseñas todavía no están activadas en el servidor".

### 7.5 Fotos de las reseñas (`js/photo.js` + `js/reviews.js`)
- **Qué hace:** en el formulario de la reseña, **Tomar foto** (abre la cámara trasera del celular: `<input type="file"
  accept="image/*" capture="environment">`; en computadora abre el selector) y **Subir foto** (galería o archivos). Al
  escogerla, **`shrinkPhoto(file)`** la achica en el propio navegador **antes de subirla**: sin servidor ni librerías.
- **Motor (`js/photo.js`):** lee la imagen con `createImageBitmap(file, { imageOrientation: "from-image" })` (o `<img>`),
  respetando la orientación EXIF; la reduce por mitades hasta ≤ **1024 px** por el lado largo (`PHOTO_MAX_SIDE`) con
  suavizado alto y fondo blanco (PNG transparentes); la codifica en **WebP** (o JPEG si el navegador no sabe WebP) con
  calidad 0.82 → 0.52 hasta quedar en ≈ **120 KB** (`PHOTO_MAX_BYTES`); si no cabe, baja el tamaño 20 % por vuelta hasta
  320 px. Al redibujarla se pierden **todos los metadatos** (GPS, modelo del teléfono…). Entrada máxima 30 MB. Errores
  (`err.code`): `type`, `big`, `decode` (p. ej. HEIC fuera de Safari), `encode`. Ejemplos medidos: foto de 4032 × 3024
  de 8.4 MB → 1024 × 768 WebP de 98 KB (≈ 0.5 s); 4032 × 3024 de 349 KB → 5 KB.
- **Formulario:** vista previa (4:3), "Foto lista: 1024 × 768 px · 98 KB", **Cambiar foto** y **Quitar foto**; mientras se
  prepara dice "Preparando la foto…" y el botón de enviar espera. Editar sin tocar la foto la conserva.
- **Dónde se guarda:** en Cloud Firestore (no se usa Firebase Storage, que exige el plan de pago), en
  `reviewPhotos/{target}__{uid}` = `{ target, uid, photo (data URL base64), updatedAt }`, **aparte** de la reseña para que
  las listas no descarguen fotos; la reseña sólo lleva `hasPhoto`. Reseña y foto se escriben o se borran juntas en un
  **batch**. Cada foto se descarga una sola vez (`photoCache`) cuando su reseña se pinta.
- **Vista:** miniatura de 160 px en la reseña (y en "Reseñas pendientes" de `#/admin`); al tocarla se abre en grande
  en un `<dialog id="photo-dialog">` (cerrar con la X, Esc o tocando fuera). Iconos `i-camera` e `i-image`.
- **Seguridad (`match /reviewPhotos/{rid}`):** leer con las mismas condiciones que la reseña (publicada, su autor o un
  administrador; la regla consulta `reviews/{rid}.status`); escribir sólo el autor, id `target__uid` propio, 4 claves,
  `photo` ≤ 250,000 caracteres y sólo `data:image/(webp|jpeg);base64,…`, `updatedAt` del servidor, cuenta no suspendida.
  Borrar: el autor o un administrador. **Hay que publicar las reglas de nuevo** para que las fotos funcionen.

### 7.6 Icono en el celular (`js/install.js`)
- **Para qué:** que quien llega desde un anuncio cree el icono de la app (la bandera, `icons/`) en la pantalla de inicio de
  su celular. Desde v4.30 el manifiesto usa `"display": "standalone"` (§10): el icono abre la app sin la barra del
  navegador, como una app. Si el navegador lanza `beforeinstallprompt`, sale además un botón **Crear el icono ahora**.
- **Dónde:** botón **Crear el icono en su celular** al final de toda pantalla de entrada (`gateShell()` en `auth.js`,
  sólo en celulares) y botón **Póngala en su celular** en el pie (siempre; en computadora muestra el enlace para abrirlo
  en el celular). Cualquier elemento con `data-install="open"` abre la guía (`<dialog id="install-dialog">`).
- **Guía según el equipo** (`installDevice()`, por el *user agent*): **dentro de Facebook, Instagram o Messenger**
  (`FBAN|FBAV|FB_IAB|Instagram|Messenger`) primero "⋯ → Abrir en el navegador", porque ahí no se puede crear el icono ni
  entrar con Google; **iPhone/iPad**: Compartir → Añadir a pantalla de inicio → Añadir (y, fuera de Safari, abrirla en
  Safari); **Android**: menú ⋮ → Añadir a pantalla de inicio (o Instalar app) → Añadir; **computadora**: el enlace.
  Siempre: **Copiar el enlace** y, si el equipo puede, **Compartir el enlace** (`navigator.share`). Textos ES/EN.
- **Enlace de los anuncios:** `https://recetariodeaqui.com/?instalar` (`APP_URL` en `install.js`) abre la guía sola al llegar en un
  celular y quita `?instalar` de la barra (también acepta `?install`).

### 7.7 Anuncios en Facebook e Instagram
- **Vista previa del enlace:** etiquetas Open Graph y `twitter:*` en el `<head>` de `index.html` (título, descripción,
  `og:locale` es_PR con en_US de alterno, `canonical`) e imagen `icons/og-image.png` de 1200×630: bandera, "Recetarios de
  Aquí · Cocina Boricua", "Más de 1,000 recetas de la cocina Puertorriqueña, paso a paso" y "Gratis · Planes de comida ·
  Español · English", centrado para que sobreviva el recorte cuadrado de WhatsApp. Las URL son absolutas a
  `https://recetariodeaqui.com/`. Se generó con Edge sin ventana (`msedge --headless --screenshot --window-size=1200,630`) desde una página HTML
  con la letra y los colores de la app. **Si cambia el número de recetas o el dominio**, actualizar la imagen y las
  etiquetas, y en https://developers.facebook.com/tools/debug/ pulsar "Volver a extraer". Como las rutas son `#/…`, un
  enlace a una receta muestra la misma tarjeta de la app.
- **Navegador interno de Facebook, Instagram o Messenger** (`installDevice().inApp`, de `install.js`): ahí Google
  bloquea la entrada (`disallowed_useragent`). La pantalla de entrada muestra arriba un aviso (`inAppNoticeHTML()` en
  `auth.js`) con **Abrir en Chrome** (Android: `intent://…#Intent;scheme=https;package=com.android.chrome;
  S.browser_fallback_url=…;end`) o **Abrir en Safari** (iPhone: `x-safari-https://…`, iOS 17 o más nuevo), **Copiar el
  enlace**, los pasos del menú ⋯ por si no abre, y que el enlace por correo ("¿Otro correo?", también para Gmail) sí
  funciona ahí. El enlace externo quita `fbclid` y el `#…`. Tocar Gmail o Yahoo ahí no abre Google: `signInWith()`
  muestra el mensaje `inAppBlocked`.
- **Vitrina en la pantalla de entrada** (`showcaseHTML()` en `auth.js`, sólo en el estado "signin", después del aviso de
  Facebook si lo hay): "Lo que encontrará adentro" con las portadas ilustradas (`coverHTML()`) de cuatro platos típicos
  (`SHOWCASE_DISHES`: arroz con gandules, mofongo, alcapurrias, flan; sin el paréntesis del nombre en inglés) y cuatro
  puntos: "Más de 1,000 recetas boricuas" (`publicRecipeCount()`) y el número de categorías (`t().categories`), buscar por plato/ingrediente/idea,
  planes de comida y nutrición/alergias; al final "Gratis · En español e inglés". Así quien llega de un anuncio ve qué
  trae la app antes de registrarse. Si se borra uno de esos platos, se omite sin error.

### 7.8 Ficha interna de las recetas (`js/recipe-admin.js`, `#/admin` → Recetas)
- **Qué es:** sección **Recetas** al final del panel de administración (sólo administradores; el público no ve nada de
  esto). Tabla de todas las recetas, de 50 en 50 ("Ver más recetas"), con nombre (enlace a la receta) y categoría,
  **temporada recomendada** (etiquetas de color y si es "automática" o "corregida"), **fecha de ingreso** y el botón
  **Cambiar temporada**. Buscador (nombre ES/EN o id, sin acentos), filtros por categoría y por temporada (o "Corregidas
  a mano"), orden (más recientes, más antiguas, A–Z), resumen "Ingresos por día" y **Exportar CSV** de lo filtrado.
  En el celular, la tabla se ve en fichas como la de usuarios.
- **Temporada recomendada:** `autoSeasonsOf()` en `plans.js` aplica las reglas de `SEASONS` (Navidad, Cuaresma y Semana
  Santa, verano y playa, Acción de Gracias, días de lluvia); una receta puede tener varias, o `["todo"]` (todo el año).
  El administrador la corrige con casillas ("Todo el año" quita las demás): se guarda en Firestore `recipeMeta/{id}` =
  `{ seasons, updatedBy, updatedAt }`; "Volver a la automática" borra el documento. Si queda igual a la automática no se
  guarda nada. `loadRecipeSeasons()` lee `recipeMeta` al entrar cualquier persona y llena `RECIPE_SEASONS`;
  `seasonsOf()`/`inSeasonOf()` la usan en vez de la automática, así que **los planes de comida** (recetas de la época
  primero y la lista de la época) siguen la corrección del administrador.
- **Fecha de ingreso:** `RECIPE_ADDED` en `js/recipe-dates.js`, GENERADO por `node tools/recipe-dates.js` desde el
  historial de git (fecha del commit que escribió la línea `id: "…"`; las que aún no están en un commit, la de hoy).
  Hoy: 161 del 28 de junio de 2026, 275 del 28 de septiembre, 144 del 9 de octubre, 313 del 10, 109 del 11, 112 del 17 y 202 del 18 (las 4 recetas que cambiaron de id en la v4.30 salen con la fecha del cambio).
  Se carga con `loadScript()` sólo al abrir el panel. **Después de añadir recetas, hay que volver a generarlo** (§11).
- **Seguridad (`firestore.rules`, `match /recipeMeta/{id}`):** leer, cualquiera que entre; escribir y borrar, sólo
  administradores, con sólo esas 3 claves, `seasons` entre `todo`, `navidad`, `cuaresma`, `verano`, `gracias` y `lluvia`
  (1 a 6), `updatedBy` = su correo y `updatedAt` del servidor. **Hay que publicar las reglas de nuevo**; mientras tanto
  se usan las temporadas automáticas y al guardar sale "publique las reglas nuevas".

### 7.9 Modo cocina, temporizadores y voz (`js/cook.js`)

- **Botón "Modo cocina"** (primero de las acciones de la receta): pantalla completa, un paso a la vez con letra grande,
  barra de avance, "Anterior/Siguiente" (también flechas del teclado y deslizar el dedo), "Ingredientes" (a las porciones
  elegidas) y una pantalla final "¡Buen provecho!" con "Marcar que la hice" (§7.10). Escape o la X lo cierran.
- **Pantalla encendida:** Wake Lock (`navigator.wakeLock`) mientras está abierto; se vuelve a pedir al regresar a la pestaña.
- **Temporizadores:** `stepTimes()` encuentra los tiempos de cada paso ("20 minutos", "15 a 20 min" → el menor, "1½ horas",
  "45 minutes"; de 30 s a 12 h, hasta 3 por paso) y `stepTimersHTML()` pone un botón por tiempo, en el modo cocina **y en
  los pasos de la receta**. Varios a la vez; pausar, +1 min y parar. Al terminar: tres pitidos (Web Audio), vibración,
  aviso en pantalla, voz y notificación del sistema si la pestaña no está a la vista (se pide permiso al primer
  temporizador). Con el modo cocina cerrado siguen corriendo en una pastilla flotante (`#timer-fab`) que vuelve a la receta.
- **Escuchar receta (v4.27):** botón en la receta, junto a "Modo cocina" (`#listen-btn` → `openCook(true)`): abre el modo
  cocina con la lectura y los comandos encendidos, dice el nombre, lee los **ingredientes** (a las porciones elegidas) y
  explica los comandos; "siguiente" empieza el paso 1. Cada pantalla se lee con `cookSay()` ("Paso 2 de 8. …") y
  `sayText()` pasa a palabras lo que la voz lee mal (1½ → "1 y media", 350°F → "350 grados", lbs, oz, min).
- **Voz de mujer o de hombre (v4.27):** `speechSynthesis` usa las voces del aparato, que no dicen si son de hombre o de
  mujer: se reconocen por el nombre (`VOICE_FEMALE`/`VOICE_MALE`: Paulina, Mónica, Marisol, Sabina, Helena, "Google
  español"… / Jorge, Juan, Diego, Pablo, Raúl…). En el modo cocina, **"Voz: Mujer/Hombre"** abre el panel: Mujer u Hombre,
  la voz exacta (todas las del idioma, primero es-PR, es-US y es-MX), la velocidad (lenta, normal, rápida) y "Probar"; se
  guarda en `rcb.voice`. Si el aparato no tiene voz de ese tipo, lo dice y explica dónde bajar más voces (iPhone: Ajustes
  → Accesibilidad → Contenido leído; Android: Texto a voz; Windows: Configuración → Hora e idioma → Voz).
- **Voz de hombre sin trampas (v4.45):** los nombres se comparan sin acentos (`voiceKey`; `\b` no funciona junto a una
  letra acentuada y "José" o "Álvaro" no se reconocían) y las listas incluyen las voces naturales de Edge de cada país
  (Karina/Víctor de Puerto Rico, Paloma/Alonso, Dalia/Jorge, Elvira/Álvaro, Emilio, Mateo, Sebastián…) y las del iPhone
  (Eddy, Reed, Rocko y Grandpa de hombre; Flo, Sandy, Shelley y Grandma de mujer). Si se pide Hombre y el aparato no
  tiene ninguna voz de hombre en el idioma (Chrome en Windows sin el paquete de voz, Android), se lee con la que hay en
  tono más grave (`pitch` 0.7, `voiceApprox`) y el botón dice **"Voz: Hombre (aprox.)"**; antes decía "Hombre" y leía
  con voz de mujer. `voiceLabel()` pone en el botón el tipo de la voz que de verdad se usa. Si las voces todavía no
  cargaron (Chrome las entrega un momento después), `speak()` espera a `voiceschanged` (hasta 1.5 s, una vez) y lee lo
  último que se pidió, en vez de usar la voz por defecto del aparato.
- **Acento boricua (v4.51):** la app no puede cambiar el acento de una voz (usa las del aparato o del navegador), pero
  escoge la de acento más parecido: `ACCENT_ORDER`/`voiceRank()` ordena Puerto Rico (es-PR), el Caribe (es-DO, es-CU,
  es-VE, es-PA, es-CO), EE. UU., Latinoamérica (es-419) y México, los demás países y España al final (antes el Caribe
  quedaba detrás de España). La lista "Voz exacta" dice el país de cada voz (`voiceCountry()`, con `Intl.DisplayNames`:
  "Víctor · Puerto Rico · Hombre") y el panel dice el acento: "Acento: Puerto Rico" o, si el aparato no tiene voces de
  Puerto Rico, cuál usa y que Microsoft Edge en la computadora trae las voces Karina y Víctor de Puerto Rico. iPhone,
  Android y Chrome no traen voces de Puerto Rico: se usa la de EE. UU., México o la del Caribe que haya.
- **Manos libres (comandos cortos, v4.27):** `SpeechRecognition` (Chrome, Edge, Safari, Android). `VOICE_CMDS` entiende
  **siguiente / continúa / sigue / próximo / pasa / listo**, **atrás / anterior / regresa / vuelve**, **comienzo / inicio /
  desde el principio**, **"paso 3"** (también "paso tres"), **repite / otra vez / lee**, **ingredientes**, **temporizador**,
  **para / pausa / silencio** y **salir / cerrar** (y en inglés next, continue, back, start, "step 3", repeat, ingredients,
  timer, stop, exit). Muestra "Escuché: «…»" o "No entendí". **No escucha mientras habla** (`pauseListening` al empezar a
  leer y `resumeListening` al terminar), para no oírse a sí misma. Si el navegador no tiene reconocimiento, el botón sale
  apagado con la explicación; si se niega el micrófono, lo avisa.

### 7.10 Mi recetario y Lista de compras (`js/kitchen.js`, rutas `#/mi-recetario` y `#/compras`)

- **Datos:** `kitchen = { ts, cols: [{ id, name, ids }], notes: { id: texto }, cooked: { id: [AAAA-MM-DD…] }, shop: { recipes:
  [{ id, f }], extra: [texto], done: [clave] } }` en `localStorage` (`rcb.kitchen.<uid>`, como el plan) y en la cuenta
  (§7.3). `cleanKitchen()` limita tamaños y tipos. Gana la copia más reciente (`ts`).
- **En la receta** (`#recipe-kitchen`, `renderRecipeKitchen()`): **Colección** (panel con casillas de cada colección y
  "Nueva colección"), **Lista de compras** (añade la receta a las porciones que se ven; si ya está, suma) y **La hice**
  (anota la fecha; debajo "La hizo N veces · la última: …"). Debajo de la preparación, **Mis notas** (se guardan solas).
- **Mi recetario:** favoritas, colecciones (cambiar nombre, borrar; las recetas no se borran), las que he hecho y las que
  tienen notas.
- **Borrar notas y "la hice" (v4.53):** en "Las que he hecho" cada receta enseña su nota (si tiene) con **"Borrar
  nota"** y el botón **"Quitar"** (la saca de la lista y borra las veces que se marcó); en "Con mis notas", **"Borrar
  nota"**. Las dos preguntan antes (`confirm`) y el foco vuelve al título de la sección. `deleteNote()` y
  `unmarkCooked()` apuntan lo borrado en **`shop.gone`** (`{"n:<id>" | "c:<id>": milisegundos}`, se guarda 400 días),
  y `mergeKitchen()` lo respeta: al juntar la copia de este navegador con la de la cuenta (o con la de otro aparato),
  una nota o un "la hice" que sólo está en una copia guardada **antes** de borrarlo no vuelve; si se escribe o se marca
  otra vez después, se queda. Va dentro de `shop` porque las reglas de Firestore sólo aceptan las claves `ts, cols,
  notes, cooked, shop, favs` en Mi recetario (así no hay que cambiar las reglas). Vaciar la nota en la receta también
  la borra con su marca.
- **Lista de compras:** `shoppingItems()` recorre las líneas de cada receta × su factor y **suma** las que son el mismo
  alimento (`findFood`, §8) con la misma medida (`UNIT_CANON`: "taza" y "tazas" son la misma), con la cantidad "de cocina"
  (`formatQty`) y la medida en singular o plural (`unitSingular`, `pluralWord`). Lo que no tiene cantidad ("sal al
  gusto") sale una vez; el agua no se compra. Por sección (`AISLE_RX`: frutas y viandas, carnes, lácteos, panadería,
  despensa, especias, bebidas, otros), con de qué receta viene. Marcar, "Quitar lo marcado" (saca también las recetas que
  ya no tienen nada pendiente), añadir otra cosa, **Compartir** (menú del celular o WhatsApp), Copiar e Imprimir.
- En el menú: "Mi recetario" y "Compras" (con el número de recetas y cosas en la lista).

### 7.11 "¿Qué tengo en la nevera?" y filtros (`js/filters.js`)

- Botón **Filtros** bajo el buscador (con el número de filtros activos) que abre `#adv-filters`.
- **Ayuda (v4.57–4.58):** bajo el botón (más marcado), `#filters-help` explica en una línea para qué sirven los
  filtros y cuáles hay; se escribe en `renderAdvButton()`. Dentro del panel, una frase de entrada (`.adv-intro`) y una
  explicación corta bajo cada grupo (`.adv-hint`). En v4.57 hubo además seis chips de filtros rápidos junto al botón;
  se quitaron en v4.58 a pedido (el "≤ 30 min" sigue en la barra de resultados y en el mosaico "Rápidas").
- **Micrófono (v4.57):** en el buscador (`#search-mic`) y en "¿Qué tengo en la nevera?" (`[data-adv-mic]`), con
  `startDictation()` de `app.js` (Web Speech API, es-PR o en-US, una frase): escribe lo que oye mientras habla (los
  resultados salen al momento) y al terminar busca o añade los ingredientes ("pollo y papa y cilantro" → tres). Mientras
  escucha el botón se pone rojo y late; tocarlo otra vez lo para. Avisa si no hay permiso, si no oyó nada o si falla.
  Sin reconocimiento de voz (Firefox) no se muestra. Abrir el modo cocina lo para (`stopDictation()`), para no competir
  con los comandos de voz.
- **Lo que tengo:** se escriben ingredientes (varios con comas o "y"); salen las recetas que los llevan **todos** (o "al
  menos uno"), buscando en los ingredientes en español e inglés, con plural. Sin búsqueda de texto se ordenan por cuántos
  usan y luego por menos ingredientes (`advSort`).
- **Filtros:** tiempo (15, 30, 45 min, 1 hora), **dificultad** (`recipeLevel()`: fácil = ≤ 8 ingredientes, ≤ 5 pasos y
  ≤ 45 min; elaborada = ≥ 14 ingredientes, ≥ 9 pasos, más de 2 horas o espera con ≥ 7 pasos; si no, intermedia; también
  sale en los datos de la receta), calorías por porción (300, 500, 700), **sin** alérgenos (gluten, leche, huevo, pescado,
  crustáceos, moluscos, maní, nueces, soya, ajonjolí), dieta (vegetariana/vegana, las de los planes) y época ("para niños" se quitó
  en v4.59). Se combinan con el buscador, la categoría, las rápidas y las favoritas: `hasFilters()`,
  `matches()` y la clave de la vista de `app.js` llaman a `advActive()`, `advOk()` y `advKey()`.
- **Más claro (v4.30):** cada tarjeta dice **"Le falta: cilantro, ajíes dulces y 2 más"** o "Tiene lo principal"
  (`haveMissing`/`haveCardHTML`: sin sal, pimienta, aceite, agua, lo opcional ni lo de adornar); el panel dice cuántas
  recetas usan lo que tiene y cuántos ingredientes más puede añadir; al pasar de 8 (`HAVE_MAX`) lo avisa y deja escrito
  lo que no cupo (antes se perdía); con el filtro de calorías dice cuántas recetas sin estimado quedan fuera; y lo que se
  está escribiendo no se borra cuando el panel se vuelve a pintar.
- **v4.40:** `advNotes()` pone junto al conteo de resultados ("N recetas encontradas", con cualquier combinación) lo que
  un filtro deja fuera: recetas sin tiempo con el filtro de tiempo, sin estimado con el de calorías. (El aviso de "para niños"
  se fue con ese filtro en v4.59.)

### 7.12 De temporada en la isla (`js/seasonal.js`)

- `PR_PRODUCE`: frutas, viandas y vegetales con sus meses de más abundancia en Puerto Rico (`m`, 1–12, o "all") y la
  expresión que los busca en las recetas. **Es un calendario aproximado** (lo dice la página): cambia con el año, la lluvia
  y la zona; para ajustarlo se cambian los meses.
- En el inicio, `#temporada` (después de las categorías): "De temporada en la isla · <mes>" con un botón por cada uno
  (y cuántas recetas lo usan) que lo busca; "Todo el año" en un desplegable. Los planes dan +3 a las recetas que usan algo
  de temporada (`seasonalBonus`).

### 7.13 Uso sin internet y barra de abajo (`sw.js`, `js/pwa.js`)

- **Cómo funciona:** la app sigue en la web. En la primera visita `sw.js` guarda en el navegador `index.html` y todo
  `<script src>`/`<link href>` local (los saca de la propia página), el manifiesto y los iconos. Después, con internet
  pide siempre lo nuevo (**red primero**, para no mezclar versiones) y actualiza la copia; sin señal, o si la red tarda
  más de 4 s, usa la copia. También guarda los archivos fijos de Google (SDK de Firebase y la letra), nunca datos de la
  cuenta. Sin señal se ve un aviso; lo que se guarde sube a la cuenta al volver la conexión (§7.3).
- **Al publicar una versión nueva:** subir `SW_VERSION` en `sw.js` (igual que `APP_VERSION`) para que se borre la copia
  vieja. `vercel.json` sirve `sw.js` con `Cache-Control: no-cache`.
- **Páginas propias (v4.30):** sólo la portada se guarda como `index.html` (antes cualquier página que se abriera la
  pisaba); `/receta/<id>` se guarda con su dirección y, sin señal y sin copia, redirige a `/#/receta/<id>` en la app
  guardada. La portada se pide como `./` (con `cleanUrls`, `/index.html` redirige y una respuesta redirigida no sirve
  para abrir la página). También guarda `css/receta.css`.
- **Barra de abajo** (pantallas de 760 px o menos): Inicio, Buscar (va al inicio y abre el teclado en el buscador),
  Planes, Recetario y Compras; `setBottomNav()` (llamada desde `route()`) marca la página actual. No sale con la
  pantalla de entrada ni en el modo cocina.

### 7.14 Términos, consentimiento y correo de confirmación (`js/consent.js`, `js/consent-ui.js`, `api/consent-email.js`)

- **Texto:** `TERMS` (ES/EN): resumen de 5 puntos y 15 secciones (quiénes somos y aceptación; edad y menores; qué
  ofrece; **no es consejo médico ni nutricional** con la lista de cuándo consultar y el aviso del autismo; la nutrición es
  estimada y el USDA no avala la app; alergias y seguridad; responsabilidad de la persona; cuenta y uso aceptable;
  **privacidad**: qué se guarda, para qué, dónde y quién lo ve; reseñas y fotos; propiedad intelectual; limitación de
  responsabilidad; cambios; ley de Puerto Rico; contacto). `CONSENT_ITEMS`: tres casillas obligatorias — `terms` (acepto
  los términos), `health` (los planes y la nutrición son orientación, no consejo médico) y `data` (18 años o permiso del
  tutor, y autorizo guardar mis datos, incluidos los de salud). **Desde v4.41 ya no son casillas:** se muestran como lista
  ("Al aceptar, usted declara:") y se aceptan todas con el botón **"Acepto los términos y condiciones"**
  (`acceptConsent()`). **Conviene que lo revise un abogado en Puerto Rico.**
- **`CONSENT_VERSION`** (hoy "2026-10-19.1"): la versión que acepta cada cuenta nueva. **Desde v4.41 quien ya aceptó
  cualquier versión no vuelve a ver los términos** al entrar (pedido del dueño).
- **`registered/{correo}` (v4.41):** `{ at }`. Lo crea `markRegistered()` al guardar el consentimiento (y al entrar, si
  falta); `backfillRegistered()` crea los de las cuentas anteriores cuando un administrador abre `#/admin`. Se borra con
  la cuenta. Reglas: `get` público, `list` sólo administradores, escribir sólo el propio correo o un administrador.
  Cualquiera puede saber si un correo exacto está registrado (es lo que permite saltar los términos antes de entrar).
- **Antes de entrar (v4.28–4.40):** la pantalla de entrada mostraba el resumen, "Leer los términos completos" (caja con todo el texto)
  y las casillas; los botones de Gmail, Yahoo… y el enlace por correo están en `<fieldset id="auth-entry" disabled>`
  hasta marcar las tres. Lo aceptado se guarda en el navegador (`rcb.consent`: versión, casillas, hora e idioma).
- **Al entrar (`consentOnUser`, desde `onUser` en auth.js, después de revisar si está suspendida):** si
  `consents/{uid}` ya tiene la versión vigente, entra (y si el correo no se había enviado, lo reintenta). Si no, y hay
  aceptación en el navegador, guarda `consents/{uid} = { uid, email, version, lang, items, acceptedAt (hora local al
  marcar), ua (navegador), history (versiones anteriores), at (hora del servidor) }` y pide el correo. Si no hay
  aceptación (cuentas que ya existían, otro navegador, versión nueva), estado **"consent"** ("Antes de continuar"): las
  casillas y "Acepto y continúo". **Desde v4.30 vale sólo el registro del servidor:** si no se puede leer, o si después
  de guardarlo no está (con su `at` del servidor), la cuenta no se abre ("No pudimos guardar ni confirmar su
  consentimiento…"; la app se sigue usando sin cuenta). Antes, si no se podía leer, se entraba con la copia del navegador.
  `acceptedAt` (hora del navegador) queda sólo como dato; la constancia es `at`.
- **`CONSENT_VERSION` "2026-10-18.2" (v4.30):** los términos dicen que la cuenta es opcional, que sin cuenta no se guarda
  nada en el servidor, cuánto tiempo se guardan los datos (mientras exista la cuenta) y que se puede borrar todo desde
  "Privacidad y mis datos". Todos aceptan otra vez al entrar.
- **`CONSENT_VERSION` "2026-10-18.3" (v4.39):** en el resumen y en la sección 9 (Privacidad) se añade que el correo
  también se usa para enviar notificaciones de la app, recetas nuevas y recetas de la temporada, por medio del mismo
  proveedor de correos; cada correo dirá cómo dejar de recibirlos (o se pide a `CONSENT_CONTACT`) y dejar de recibirlos
  no afecta la cuenta; los avisos indispensables (como la confirmación del consentimiento) se envían siempre. Como cambia
  el uso de los datos, todos aceptan otra vez al entrar. **Pendiente:** la app todavía no envía esos correos; cuando se
  haga, cada uno debe llevar el enlace o la instrucción para darse de baja (CAN-SPAM) y la app debe guardar quién se dio
  de baja.
- **Administración:** `#/admin` lee `consents` (`loadAdminConsents`) y muestra la columna **Consentimiento**: versión
  (verde si es la vigente), fecha y hora, y "correo enviado / sin enviar"; "Pendiente" si no aceptó. El CSV añade
  "Versión aceptada", "Fecha de aceptación" y "Correo de confirmación". Nadie puede borrar un consentimiento desde la app.
- **Motor de correo (`api/consent-email.js`, función de Vercel, `POST /api/consent-email`):** comprueba el token de
  Firebase de la persona con las llaves públicas de Google (WebCrypto, sin cuentas de servicio: firma, proyecto,
  emisor, vencimiento y correo validado), lee su `consents/{uid}` por la API REST de Firestore con esa misma sesión,
  arma el correo con `consentEmail()` (mismo texto de `js/consent.js`: saludo, fecha y hora de Puerto Rico, versión, las
  casillas aceptadas, el resumen, el enlace a `#/terminos` y el contacto; HTML y texto) y lo envía por **Resend** sólo al
  correo de la sesión, con respuesta a recetariodeaqui@gmail.com. Máximo un correo cada 10 minutos por persona. Al
  enviarse, la app anota `emailSentAt`. Sin `RESEND_API_KEY` responde 503 y la app reintenta al volver a entrar, sin aviso.
- **Puesta en marcha del correo (una vez):** (1) cuenta en https://resend.com; (2) Domains → añadir
  `recetariodeaqui.com` y poner sus registros DNS en Vercel (Domains → recetariodeaqui.com → DNS); (3) API Keys → crear
  una con permiso de envío; (4) en Vercel → proyecto → Settings → Environment Variables: `RESEND_API_KEY` (y, si se
  quiere otro remitente, `CONSENT_FROM`, por defecto "Recetarios de Aquí <confirmaciones@recetariodeaqui.com>"); (5)
  volver a publicar.
- **Reglas:** publicar el bloque `match /consents/{uid}` de `firestore.rules` (la persona crea o cambia el suyo con la
  hora del servidor; sólo puede añadir después `emailSentAt`; lo leen ella y los administradores).
- **`#/terminos`:** los términos completos para leer o imprimir (enlace en el pie) y, con la sesión abierta, "Usted aceptó
  la versión X el …".

### 7.15 Páginas propias de las recetas, Google y vista previa al compartir (`tools/prerender.js`, v4.30)

- **Por qué:** la app usa `#/receta/<id>`, y para Google todo lo que va después de `#` es la portada: ninguna receta salía
  en las búsquedas ("receta de pernil") y todos los enlaces compartidos se veían iguales (título, texto y bandera).
- **`node tools/prerender.js`** (sin dependencias; carga los scripts en `vm` como el navegador) genera:
  `receta/<id>.html` (1,428 páginas, ≈ 9 MB en total), servidas en **`/receta/<id>`** gracias a `"cleanUrls": true` en
  `vercel.json`. Cada una es ligera y se lee sin JavaScript: título y descripción propios, `canonical`, Open Graph y
  Twitter con el nombre del plato, tiempo de preparación y total, porciones, calorías estimadas, alérgenos, ingredientes y
  pasos en español y en inglés, seis recetas de la misma categoría y el botón **"Abrir en la app"** (`/#/receta/<id>`:
  porciones, modo cocina…). **Descripción (v4.40):** siempre una oración completa de 155 caracteres o menos, sin "…"
  ("Coquito: receta puertorriqueña paso a paso, 12 porciones, lista en 4 h 15 min con leche de coco, leche condensada,
  leche evaporada y vainilla."); `description()` quita ingredientes hasta que quepa y `mainWord()` deja sólo el nombre
  del ingrediente (sin cantidades, medidas, paréntesis ni "picado"). **Medidas métricas (v4.40):** cada ingrediente lleva
  "≈ 450 g / 25 ml / 4.08 kg" (`lineGrams` de nutrition.js) y cada °F de los pasos su °C, como el modo "Gramos y °C" de
  la app. Datos estructurados **schema.org/Recipe** (JSON-LD: `prepTime` = activo, `totalTime`, `recipeYield`,
  `recipeIngredient`, `recipeInstructions` con cada paso, `recipeCategory`, `recipeCuisine`, `nutrition.calories`,
  `datePublished` de `RECIPE_ADDED`) y `BreadcrumbList`. Estilos en `css/receta.css` (también en oscuro).
  También `recetas.html` (**/recetas**: todas las recetas por categoría, enlazado en el pie), `sitemap.xml` (portada,
  /recetas y cada receta con su fecha) y `robots.txt` (todo menos `/api/`, con el sitemap).
- **La portada** lleva el JSON-LD `WebSite` con `SearchAction` (`/?q=`). La imagen de la vista previa sigue siendo
  `og-image.png` (las fotos de los platos no son parte de esta versión).
- **Direcciones que no existen** (`recetariodeaqui.com/L`, enlaces viejos): `404.html` con buscador (`/?q=`) y "Ver todas
  las recetas"; si parece una receta (`/receta/<algo>`) pone ese nombre en el buscador. `noindex`.
- **Después de publicar:** en Google Search Console, añadir la propiedad `recetariodeaqui.com` y enviar
  `https://recetariodeaqui.com/sitemap.xml`. Se vuelve a correr `prerender.js` cada vez que se añaden o cambian recetas.

### 7.16 Glosario de la cocina boricua (`js/glossary.js`, ruta `#/glosario`, v4.30)

- `GLOSSARY`: 25 palabras que las recetas usan tal cual, también en inglés (sofrito, recao/culantro, ají dulce, caldero,
  pilón, queso de papa, queso de freír, achiote, sazón, adobo, mojo y mojo isleño, viandas, yautía, ñame, pana, guineo,
  amarillos, tostones, mofongo, china, habichuelas y gandules, pique, pan sobao, bacalao, hoja de plátano), con lo que
  son y con qué sustituirlas fuera de la isla, en ES y EN. En cada receta, bajo la preparación, el recuadro plegable
  **"Palabras de la cocina boricua (N)"** con las que aparecen en ella (en el idioma que se ve; `renderGlossary`, desde
  `renderModal`) y el enlace al glosario completo, que también está en el pie.

### 7.17 Privacidad y mis datos (`js/consent-ui.js`, ruta `#/privacidad`, v4.30)

- Enlace en el pie y, con la sesión abierta, el escudo de la barra de la cuenta. Muestra la sección de privacidad de los
  términos y, con la sesión abierta, **lo que hay guardado** (correo, primera vez, usos, consentimiento con su fecha,
  si hay plan y Mi recetario, cuántas reseñas). Sin cuenta explica que no hay nada en el servidor.
- **Descargar mis datos:** un JSON con el registro, el consentimiento, el plan, Mi recetario y las reseñas.
- **Retirar mi consentimiento y borrar mi cuenta** (`deleteMyAccount`): confirma; Firebase exige haber entrado hace
  poco, así que si no, con Gmail/Yahoo/Microsoft se vuelve a entrar en una ventanita y con el enlace por correo se cierra
  la sesión y se pide entrar otra vez. Luego borra en un batch sus reseñas y fotos (también las de borrador), sus
  reportes, `users/{uid}/data/plan` y `kitchen`, `consents/{uid}` y `users/{uid}`; quita su rol de administrador si lo
  tenía (el dueño no), borra sus copias de este navegador y, al final, la cuenta de Firebase Authentication.
  Probado con los emuladores de Authentication y Firestore: no queda nada de la cuenta.

### 7.2 Planes de comida (`js/plans.js`, ruta `#/planes`)
- **Acceso:** enlace "Planes" / "Meal plans" en el menú y en el pie. Vista `<section id="view-plans">`; `route()` llama a
  `showPlans()`; `showHome()` y `showRecipe()` la ocultan. Desde un plan, una receta se abre con `data-open` y "Atrás"
  vuelve al plan en la misma posición.
- **Aviso médico arriba (v4.30):** en los objetivos para una condición de salud (`HEALTH_GOALS`: bajo en sodio, diabetes,
  presión alta, colesterol y autismo), sobre las metas del día, el recuadro **"Orientación general, no consejo médico"**:
  las metas son estimados y hay que consultar al médico o a un nutricionista-dietista licenciado antes de seguir el plan,
  sobre todo con insulina u otros medicamentos (además del aviso de siempre al final). Conviene que un dietista
  licenciado revise estos objetivos.
- **No se pierde trabajo (v4.30):** "Sobras para mañana" pregunta antes de reemplazar un almuerzo distinto; con edad
  menor de 14 fuera del objetivo de autismo (o menor de 2) se avisa que la meta es de adulto o que no se calcula
  (`ageNoteHTML`); y al entrar a la cuenta se pregunta qué plan conservar (§7.3).
- **Objetivos (`PLAN_GOALS`):** rebajar, ganar masa muscular, mantener, bajo en sodio, bajo en carbohidratos, bajo en
  azúcar, más nutritivo, **vegetariano**, **vegano**, **diabetes**, **presión alta (DASH)** (v4.24), **colesterol alto** (v4.25) y **autismo** (v4.26, ver abajo). Estos dos llevan `diet` ("veg" o "vegan"): `dietOk()` deja en el
  plan (comidas, acompañantes, época y "Recetas que encajan") sólo las recetas de esa familia (`isVegetarian`; `isVegan`
  = vegetariana y sin alérgeno de leche ni huevo ni alerta de miel), con criterios de proteína vegetal (plato principal
  ≥ 10 g en vegetariano, ≥ 8 g en vegano) y acompañantes de arroz o vianda y granos. Cada uno trae: meta típica de calorías, ajuste sobre el gasto (rebajar −20 %, masa +12 %…),
  proteína por kilo (1.0–2.0 g/kg), porción máxima, criterios por comida (desayuno, plato principal, merienda) sobre la
  nutrición estimada por porción, y una puntuación para ordenar. Rebajar excluye frituras.
- **Dieta en Preferencias (`plan.diet`, `PLAN_DIETS`):** Normal (de todo, al azar según el objetivo), Vegetariano o
  Vegano, una sola a la vez; "Sólo rápidas" sigue aparte. `activeDiet()`: manda la dieta del objetivo (Vegetariano/Vegano)
  y, si el objetivo no trae, la de Preferencias. La antigua casilla "Vegetariano" (`prefs: ["veg"]`) se convierte sola.
- **Plan del período y guardado (`plan.saved`, `periodPlan()`):** con **1 día** el plan es el de hoy y mañana sale otro
  al azar; con **7 días** cubre del día en que empezó al séptimo (cada día con su fecha) y al octavo empieza otro. El
  azar sale de la fecha de inicio + `plan.seed` ("Otro plan" sube `seed`). El plan se guarda (ids de recetas y porciones
  por día, `{ items: [...] }` porque Firestore no admite listas dentro de listas) en el navegador y en la cuenta, y al
  volver se muestra el mismo mientras sigan iguales el período, `seed` y `planSig()` (objetivo, dieta, preferencias,
  proteína, evitar, época y metas); si algo cambia o una receta ya no existe, se arma y guarda otro.
- **Cambiar una comida (`swapPanelHTML()`, `swapOptions()`, `applySwap()`):** cada comida y cada acompañante tiene un
  botón **Cambiar** (icono `i-swap`) que abre, a todo el ancho de esa comida, la lista de los otros sugeridos: los mismos
  candidatos de `candidates()` para esa comida (desayuno, merienda o plato principal; para un acompañante, los del mismo
  grupo de `SIDE_RULES` del objetivo), en orden de puntuación y sin las recetas que ya están ese día. Se ven 8 y "Ver
  más sugeridos" añade 8; cada uno tiene "Ver receta". Al tocar uno se pone en el plan con la porción recalculada como en
  `buildPlan()`; si el nuevo principal es un plato completo pierde los acompañantes, y si no lo es y no tenía, recibe los
  del objetivo. El cambio se escribe en `plan.saved` y se guarda como cambio de la persona (`savePlan()`, sube a la
  cuenta), así que se mantiene al volver hasta que toque otro período, se pulse "Otro plan" o se cambien los ajustes.
  `planSwap` guarda qué lista está abierta; `renderPlanOutput(true)` la conserva y cualquier otro cambio la cierra.
- **Proteína del almuerzo y la cena (`plan.protein`, `PROTEINS`, `proteinsOf()`):** aves, pescado, mariscos, res, cerdo,
  cabro/cordero/conejo y granos y vegetales; una o varias. Se reconoce por el nombre y, si no, por la categoría y los
  ingredientes ("granos" = vegetariana sin otra proteína). Sólo filtra el plato principal (no desayuno, merienda ni
  acompañantes). Si deja menos de 3 platos, entran los de otra proteína (aviso de plan ajustado). No aplica en los
  objetivos vegetariano y vegano ni con la preferencia "Vegetariano".
- **Mis datos (opcional):** sexo, edad, peso (libras), estatura (pies y pulgadas) y actividad. Calorías con Mifflin-St Jeor
  × factor de actividad (1.2–1.725) × ajuste del objetivo; mínimo 1,200 (mujer) o 1,500 (hombre), con aviso.
- **Época (`SEASONS`):** Navidad, Cuaresma y Semana Santa, verano y playa, Acción de Gracias y días de lluvia, por nombre y
  categoría (o la que fijó un administrador, `seasonsOf()`, §7.8); "Según la fecha de hoy" la elige con `autoSeason()`. Las recetas de la época van primero en el plan (sin dejar
  de cumplir el objetivo) y una lista aparte muestra todas las de la época, también postres y bebidas.
- **Preferencias y exclusiones:** vegetariano (también por el objetivo; categoría + `S_MEAT_RX` + `PLAN_MEAT_EXTRA`: bistec, pechuga, gelatina…; "hamburguesa" no cuenta si es
  vegetariana o es el pan, ni "picadillo" si es de lentejas),
  sólo rápidas (`isQuick`), y evitar gluten, leche, huevo, pescado, mariscos, maní y nueces (de `getAdvisories`) o cerdo.
  Nunca entran tragos con alcohol, salsas ni dulces en los planes.
- **Plan:** 1 o 7 días; desayuno 25 %, almuerzo 35 %, merienda 10 % y cena 30 % de la meta. La porción sugerida (½ a 2½) se
  ajusta a la parte de la meta de cada comida. Sin repetir platos principales en la semana, y la cena evita la categoría
  del almuerzo. "Otro plan" cambia la semilla. Totales del día: calorías y proteína con barras, carbohidratos, fibra,
  azúcar y sodio. Etiquetas por comida (con la porción sugerida): alta en proteína (≥25 g), alta en fibra (≥5 g), baja en
  azúcar (≤5 g), sodio moderado (≤600 mg).
- **Plato principal + acompañantes:** el almuerzo y la cena llevan acompañantes según el objetivo (`SIDE_RULES`):
  masa → arroz o vianda + granos; rebajar → ensalada, vegetal o granos; mantener → arroz o vianda + granos, ensalada o
  vegetal; bajo en carbohidratos → ensalada o vegetal; más nutritivo → granos + ensalada o vegetal; sodio y azúcar → uno
  que cumpla su límite. `sideKind()` clasifica arroces sencillos, granos sin carne, ensaladas ligeras (<12 g de proteína)
  y viandas o vegetales sin carne como acompañantes (no entran como plato principal), menos los platos fuertes veganos
  ("vegano" en el nombre), el chili y los tacos, que van de principal. Los platos completos
  (`isComplete()`: arroces, sopas, pastas, emparedados, asopao, paella, sancocho, pastelón, lasaña, mofongo, "arroz
  con…", "con papas/yuca/tostones/garbanzos/habichuelas…", jibarito, tacos) van solos. Con acompañantes, el principal lleva el
  55 % de las calorías de esa comida y los acompañantes se reparten el resto (porción hasta 1½). Los totales del día los
  incluyen, y "Recetas que encajan" tiene un grupo "Acompañantes".
- **Si las exclusiones dejan una comida con pocas opciones** (menos de 6 platos principales o 3 desayunos/meriendas), se
  completa con las que más se acercan al objetivo y se avisa.
- **"Recetas que encajan":** las mejores 12 de cada comida para el objetivo, para consultar o cambiar.
- **Salud de Puerto Rico (v4.24):** **Diabetes** cuenta carbohidratos: 45–60 g por comida y 15–20 g en la merienda
  (`carbMeal`/`carbSnack`); `capCarbs()` baja la porción de ½ en ½ hasta que la comida quepa, y cada comida dice
  "X g ≈ N porciones de carbohidrato (15 g)". Criterios con poca azúcar añadida (`n.add`) y fibra. **Presión alta
  (DASH)**: poco sodio y grasa saturada, más potasio, calcio y fibra (`score` con `n.k` y `n.ca`), y el día revisa el
  potasio contra la ingesta adecuada (3,400 mg hombres, 2,600 mg mujeres).
- **Colesterol (v4.25):** todos los planes suman el **colesterol** del día (en los totales) y lo revisan contra 300 mg, el
  valor diario de la etiqueta de la FDA. El objetivo **Colesterol alto** (`chol: true`) busca grasa saturada bajo 6 % de las
  calorías (Asociación Americana del Corazón) y menos de 200 mg de colesterol al día: sin frituras ni grasa trans; desayuno
  ≤ 3 g de saturada, ≤ 60 mg de colesterol y ≤ 500 mg de sodio; plato principal ≤ 3.5 g, ≤ 80 mg y ≤ 800 mg; merienda ≤ 2 g,
  ≤ 30 mg y ≤ 300 mg; acompañantes de granos y de ensalada o vegetales (≤ 1.5 g, ≤ 15 mg, ≤ 400 mg); puntuación que premia
  la fibra (la soluble de habichuelas y avena baja el LDL) y castiga la saturada y el colesterol; porción hasta 2. Cada
  comida muestra su colesterol. Prueba de 7 días: ~1,865 de 1,850 calorías, colesterol 48–124 mg por día y saturada 2–7 %.
- **Autismo (v4.26):** la tarjeta del objetivo y la nota al escogerlo dicen primero que **no existe una dieta que cure ni
  trate el autismo**; la nota es un recuadro (`goalNoteHTML()`, `.plans-callout`; `goalNotes.autismo` es una lista: aviso y
  7 recomendaciones: rutina, sabor suave, lo nuevo poco a poco, fibra y agua, calcio y vitamina D, dietas sin gluten ni
  caseína sin beneficio probado, y cuándo ir al pediatra o a un terapeuta de alimentación). El plan (`autismo`): **rutina**
  (`routine: true`: `buildPlan()` repite el desayuno y la merienda del primer día toda la semana); sólo recetas sencillas
  (`only`: hasta 12 ingredientes y no "elaboradas", §7.11), de sabor suave (`SPICY_RX`: sin pique, ají picante, chile…),
  aptas para niños (`kidsOk`: `sKidSafe()` de `search.js`) y sin frituras; topes de azúcar añadida y de sodio por
  comida (desayuno 450, principal 600, merienda 250, acompañante 300 mg); un acompañante; la puntuación premia fibra,
  calcio y vitamina D. Acepta **niños de 2 a 13 años** (`kids: true` en `planTargets()`): calorías de las Guías
  Alimentarias por edad (2–3 años 1,200; 4–8 1,500; 9–13 1,800 niñas y 2,000 niños) y proteína de la ración recomendada
  infantil (0.95 g/kg); la edad del formulario baja a 2. La revisión del día añade fibra (14 g por 1,000 calorías), calcio
  por edad (700–1,300 mg; "un vaso de leche o un yogur suma unos 300 mg") y vitamina D (15 mcg); para niños, el sodio se
  compara con su límite por edad (1,200, 1,500 o 1,800 mg, Academias Nacionales 2019) y la proteína con la ración infantil.
  Prueba con un niño de 7 años: ~1,400–1,600 de 1,500 calorías, mismo desayuno y merienda los 7 días, nada picante, sodio
  570–1,440 mg; el calcio suele quedar corto (lo dice la revisión del día).
- **Guías Alimentarias 2025–2030 (`dgaHTML()`):** cada día trae un desplegable con las porciones de los grupos que pide
  la guía para 2,000 calorías, ajustadas a la meta (vegetales 3, frutas 2, granos integrales 2–4; lácteos 3) con lo que
  suman las recetas (`estimateNutrition().groups`, §8), y los límites del día: grasa saturada bajo 10 % de las
  calorías, azúcar añadida 10 g o menos por comida, sodio bajo 2,300 mg (valor diario de la FDA) y proteína de 1.2 a
  1.6 g por kilo. Por eso la proteína mínima de todos los objetivos es ahora 1.2 g/kg (bajo en sodio, vegetariano y
  vegano tenían 1.0–1.1).
- **Calendario (v4.24, plan de 7 días):** cada comida tiene **"Pasar a"** (otro día; se intercambia con la misma comida de
  ese día, `moveMeal()`) y el almuerzo o la cena **"Sobras para mañana"** (`leftoverMeal()`: el almuerzo del día
  siguiente es esa misma comida, marcado `lo: 1` en `plan.saved` y con la etiqueta "Sobras de ayer"). **Personas en
  casa** (`plan.people`, 1–12) y **"Lista de compras del plan"** (`addPlanToShop()`: cada receta por porción × personas;
  las sobras no se compran dos veces). **"Imprimir plan"** imprime sólo los días (`body.print-plan`).
- **Temporada en la isla:** las recetas con fruta o vianda de temporada suman +3 a su puntuación (`seasonalBonus`, §7.12).
- **Avisos:** orientación general, no consejo médico (embarazo, menores, diabetes, riñón, corazón); nota propia de cada
  objetivo (ritmo seguro al rebajar, entrenamiento de fuerza para masa, límite de sodio, azúcar añadida, plato saludable).
- **Ajustes:** en `localStorage` (`rcb.plan`), sólo en ese navegador. Números con coma de miles (3,100) en los dos idiomas.
- **Ajuste del día como un nutricionista (v4.48, `tuneDay()`):** después de escoger al azar, cada día se revisa con
  `dayPenalty()`: sodio sobre el tope (`sodiumCap()`: 2,300 mg; 1,500 en bajo en sodio y DASH; 1,200/1,500/1,800 en
  niños), proteína bajo el 90 % de la meta, calorías a más de 10 % y colesterol sobre 300 mg (200 con el objetivo de
  colesterol). Si no cumple, se cambia la pieza que más ayuda (plato, acompañante o media porción más o menos) por otra
  del mismo grupo y del mismo objetivo, con la porción para las mismas calorías; hasta 8 cambios por día. Los platos
  completos se cambian sólo por otros completos (los acompañantes siguen igual); en autismo no se tocan el desayuno y
  la merienda de rutina. `PLAN_ENGINE` va en `planSig()`: al subirlo, los planes guardados se vuelven a armar.
  Simulación de 7 días × 3 planes × 13 objetivos (mujer de 40 años, 165 lb, 5'4"): antes el sodio promediaba más de
  2,300 mg en 9 objetivos (ganar masa 4,023 y un día de 8,111; diabetes 3,108) y la proteína se quedaba en 62 % en
  vegano, 72 % en vegetariano y 79 % en rebajar; ahora el sodio queda bajo el tope en 264 de 273 días y la proteína en
  92–117 %, salvo vegano (87 %: hay pocos desayunos veganos con proteína; el día dice cómo completarla).
- **Peso ajustado para la proteína (v4.48):** con IMC de 30 o más, `planTargets()` usa el peso ideal (Devine) más 40 %
  de la diferencia (`adjusted`, con nota); antes un hombre de 240 lb en "ganar masa" tenía 220 g de proteína.
- **Diabetes con más calorías (v4.48):** el tope de carbohidratos por comida sube en proporción a la meta sobre 2,000
  calorías (`carbScale`: 75 g a 2,500); antes el plan de 2,500 calorías llegaba sólo al 79 %.
- **Pantalla (v4.48):** arriba un **resumen** (objetivo, calorías, proteína, de dónde sale la meta) con "Cambiar
  objetivo y ajustes"; los ajustes (`#plans-setup`) se abren la primera vez y después van plegados (`plansSetupOpen`).
  Los objetivos van en tres grupos (`GOAL_GROUPS`: Peso, Estilo de comida, Salud); en el celular sólo el escogido
  enseña su descripción. La dieta de Preferencias no sale cuando el objetivo ya la fija (vegetariano, vegano). Sin
  datos personales, un aviso con "Poner mis datos". Cada día empieza con un **semáforo** (`daySummaryHTML()`: calorías,
  proteína, sodio, vegetales y viandas, frutas, en verde/amarillo/rojo con ✓ o !, y el **agua** del día:
  `waterGlasses()`, ~35 ml por kilo) y consejos cuando falta proteína (según la dieta), sobra sodio o falta fruta. Cada
  almuerzo y cena dice si cumple el **plato saludable** (½ plato de vegetales que no son vianda: `groups.vegNS` de
  `js/nutrition.js`, ¾ de taza o más). La porción dice cuántas rinde la receta. El plan de 7 días tiene un **resumen
  de la semana** (`weekHTML()`: promedios contra la meta, días con el sodio bajo el tope, pescado 2 veces, granos 3 o
  más, embutidos 1 o menos) y **pestañas por día** (`planDayTab`, flechas, empieza hoy; al imprimir salen los 7). "De
  temporada" y "Recetas que encajan" van plegados. En el celular la página bajó de ~10,900 px a ~4,000 y el plan
  empieza a ~970 px (antes ~2,800). "Alta en proteína" va en verde como las otras etiquetas buenas.

## 8. Estimación nutricional (`js/nutrition.js`, `js/nutrition-usda.js`)

- **Nada se cuenta en silencio (v4.30):** `estimateNutrition` devuelve además `partial` (líneas con varias cosas donde una
  parte no se reconoció: antes contaban como completas) y `noQty` (sin cantidad u opcionales). La pestaña de nutrición
  lista "No se pudieron incluir", "Contados sólo en parte" y "Sin cantidad u opcionales, no se suman", y las calorías
  dicen "(aproximado)". Se arreglaron las 6 líneas que quedaban en parte ("1 pimiento verde y 1 rojo" → "2 pimientos,
  uno verde y uno rojo"…) y se añadió el peso de una taza a pernil (140 g), galleta triturada (90 g), queso suizo rallado
  (108 g) y romero (30 g): ya ningún alimento medido en tazas usa los 240 g de reserva. Casi todos los demás ya tenían
  su taza (`m.cup`).

- **Datos oficiales del USDA (v4.24):** `js/nutrition-usda.js` (GENERADO por `tools/usda/`) une cada alimento de
  `NUTRI_FOODS` (por su primera palabra clave) con su registro de **USDA FoodData Central, base SR Legacy** (abril 2018,
  CSV de https://fdc.nal.usda.gov/download-datasets): número FDC, descripción oficial y por 100 g comestibles kcal,
  proteína, carbohidratos, azúcares, fibra, grasa, grasa saturada, sodio, **colesterol, grasa trans, calcio, hierro,
  potasio y vitamina D**. Al cargar, `nutrition.js` reemplaza los valores de cada alimento con los del USDA × su **parte
  comestible** (`ef`: pollo entero 0.7, alitas 0.55, pavo y guinea 0.75, chuleta y pernil 0.8, patita 0.5…, porque las
  recetas dan el peso como se compra) y guarda `food.src = { fdc, ef, desc }`. **255 de 290 alimentos** están en el USDA
  y el 93 % de las líneas de ingredientes se cuentan sólo con ellos.
- **Los que no están en el USDA** (35: productos de aquí o de marca como sofrito, adobo, sazón, pasta de guayaba, gandules
  de lata, quenepa, pajuil, jobos, caimito, malta, coquito, chorizo español, Nutella; y guineo verde y jaca verde, que
  en el USDA sólo están maduros) conservan el estimado propio y sus minerales de `NUTRI_LOCAL_X`; la pestaña dice
  "Estimado de la app".
- **Preparación (`NUTRI_PREP`):** el bacalao del USDA es el seco y salado (7,027 mg de sodio por 100 g); en las recetas
  siempre se desala, así que se cuenta con 79 % menos sodio (≈ 1,500 mg, como antes).
- **Azúcar añadida (`NUTRI_ADDED`):** la parte de los azúcares de cada alimento que es añadida (azúcar, melao, almíbar,
  refrescos = 1; leche condensada 0.78; pasta de guayaba 0.85; ketchup 0.85…); la de la fruta y la leche no cuenta.
- **Grupos de alimentos (`NUTRI_GROUPS`):** gramos del alimento que dan 1 porción de su grupo según el USDA (vegetales,
  frutas y lácteos en tazas equivalentes; granos y proteína en onzas equivalentes; carnes 1 oz cocida ≈ 37.8 g crudos
  comestibles; las viandas cuentan como vegetales). `estimateNutrition().groups` da las porciones de una porción de la
  receta (los planes las suman, §7.2).
- **Hervido y escurrido (`isDrained`, `NUTRI_RETAIN_DRAINED`):** si los pasos hierven y escurren (y no es sopa), a las
  viandas, vegetales y granos se les descuenta lo que se pierde en el agua: potasio −25 %, calcio y hierro −5 %
  (aproximado a la Tabla de factores de retención del USDA, Release 6).
- **Pestaña:** etiqueta en el orden de la FDA (grasa total, saturada, **trans**, **colesterol**, sodio, carbohidratos,
  fibra, azúcares, **"Incluye X g de azúcares añadidos"**, proteína, y **vitamina D, calcio, hierro y potasio**) con su % de
  valor diario (`NUTRI_DV`, los de la FDA: colesterol 300 mg, azúcar añadida 50 g, vitamina D 20 mcg, calcio 1,300 mg,
  hierro 18 mg, potasio 4,700 mg); grupos de alimentos de la porción; y el desplegable **"Fuentes de cada ingrediente ·
  USDA FoodData Central"** con el número FDC (enlace a la ficha del USDA), la descripción, la parte comestible y la
  preparación de cada ingrediente contado. Menos de 0.5 g de grasa trans se declara 0 g, como en la etiqueta.
- **Medidas métricas:** `lineGrams(línea)` da los gramos (o ml si es líquido) de una línea; la receta los muestra con
  el botón "Medidas: Gramos y °C", que también añade °C a los °F de los pasos (`withCelsius`, `metricHTML` en `app.js`).
- **Para volver a generar** (cuando se añade un alimento a `NUTRI_FOODS`): añadir su primera palabra clave a
  `tools/usda/map.js` (expresión sobre la descripción del USDA y parte comestible, o `null` si no está), y correr
  `node tools/usda/resolve.js . <carpeta SR Legacy> fdc.json` (avisa "DIF" si las calorías cambian más de 25 %) y
  `node tools/usda/gen.js fdc.json js/nutrition-usda.js`. El CSV del USDA (~6 MB) no va en el repositorio.
- **Importante:** el USDA no avala ni certifica apps; la app dice "datos de USDA FoodData Central" y "según las Guías
  Alimentarias", sin logos del USDA.

- `NUTRI_FOODS`: alimentos con palabras clave (sin acentos) y valores por 100 g (kcal, proteína, carbohidratos, azúcares,
  fibra, grasa, grasa saturada, sodio) —el estimado propio, que el USDA reemplaza cuando el alimento está allí— y pesos por medida (`cup`, `u`, `can`, `sl`).
- `estimateNutrition(receta)` lee cada línea de `ingredients.es`: cantidad + unidad → gramos → nutrientes. Devuelve
  totales, valores por porción, cuántas líneas contó y cuáles **no pudo contar** (`missing`).
- La interfaz la presenta como **estimación** y lista lo no contado. % de valor diario con `NUTRI_DV` (dieta de 2,000 kcal).
- **Objetivo de calidad:** ninguna receta con ingredientes sin contar (hoy: 0 de 1,428). Si una receta nueva usa un alimento
  que no está, se añade a `NUTRI_FOODS` en su sección (aves, cerdo, res, pescados, lácteos, harinas, dulces, legumbres,
  viandas, frutas, bebidas, grasas y condimentos).

## 9. Alergias, alertas y manejo seguro (`js/advisories.js`)

- **Alérgenos** (`ALLERGENS`): expresiones regulares sobre cada línea de ingredientes: gluten, leche, huevo, pescado,
  crustáceos, moluscos, nueces, maní, ajonjolí, soya, coco y sulfitos. Se muestran con la línea donde aparecen.
  Los de grupo (sulfitos, crustáceos, moluscos) dicen entre paréntesis **sólo lo que la receta lleva** (`ALLERGEN_SOURCES`,
  `allergenLabel()`, v4.40): la sangría dice "Sulfitos (vino)", no "Sulfitos (vino, pasas)"; lo usan la receta, la
  pestaña de seguridad y las páginas de `receta/`.
- **Sustitutos** (`js/substitutes.js`): debajo de cada alérgeno, "Puede usar:" con el sustituto de cada ingrediente donde
  aparece (`ALLERGEN_SUBS`: harina → mezcla sin gluten 1 a 1, pan rallado, pasta, salsa de soya, avena certificada;
  leche evaporada → leche de coco, condensada de coco, crema de coco, mantequilla → aceite o margarina vegetal, quesos
  vegetales; nueces → semillas; maní → girasol; vino → caldo con vinagre o jugo de uva; etc.); si ninguno aplica, el
  general del alérgeno. El huevo se decide según su papel: base del plato (flan, tortilla, revoltillo, merengue… →
  "no tiene buen sustituto", `EGG_IS_BASE`), masas horneadas (linaza o puré de guineo), empanizar (leche, mostaza o
  aquafaba), unir, huevo duro, sellar o barnizar, revuelto o frito (tofu revuelto), yemas en cremas (más maicena) y
  torrejas. Una nota recuerda revisar etiquetas por la contaminación cruzada. Las 1,356 apariciones de alérgenos en las
  recetas tienen al menos un sustituto o la indicación de que no lo hay.
- **Alertas** (`getAdvisories`): pescado crudo (ceviche), huevo crudo (`RAW_EGG_IDS` + bebidas con huevo), alcohol
  (bebida o cocinado), miel (bebés), anís estrellado, cafeína, tés de hierbas, ciguatera, mercurio (atún), veda de
  mariscos, toronja con medicamentos, quenepa (atragantamiento), carambola (peligrosa con enfermedad renal), sazón/adobo comerciales (sodio y glutamato) y alertas
  nutricionales con los umbrales de las etiquetas (sodio o grasa saturada ≥ 20 % VD, azúcar ≥ 25 g, ≥ 700 kcal).
- **Bebidas con alcohol:** `estimateNutrition` suma los gramos de alcohol (`NUTRI_ALCOHOL`: ron, tequila y cachaça ≈ 40%
  vol., vino 12%, vino dulce 16%, licores 25%, cerveza 5%) y devuelve `alcohol` por porción. La alerta dice los gramos y
  los tragos estándar (14 g); si el ron va "al gusto", explica cómo contarlo. Otra alerta (`drinkDriving`) resume la
  Ley 22 de Vehículos y Tránsito de Puerto Rico: 0.08% (21 años o más) y 0.02% (18 a 20 años, motoras, camiones, guaguas
  escolares, vehículos pesados y de transporte público; menores de 18, nada), cuántas horas tarda en eliminarse esa
  porción (≈ 1 trago por hora) y que no hay una cantidad segura para conducir. Los cócteles "sin alcohol" no la llevan.
  Los postres cuyo licor va sin cocinar (`RAW_ALCOHOL_IDS`: bizcochos de brandy, de amaretto y de ron) llevan la alerta
  alta `alcoholRaw` con los gramos y tragos por porción, en vez de "una parte se evapora"; el buscador los cuenta como
  con alcohol ("sin alcohol"; el plan de autismo, con `sKidSafe()`).
- **Tés** (`TEA_INFO`, por id, 33 tés): uso tradicional en Puerto Rico (aclarando que es remedio casero y no sustituye al
  médico) y una precaución propia de cada planta (manzanilla y alergia a la familia de la margarita, canela y cumarina,
  anís estrellado japonés, tilo y sedantes, hojas de guayaba con medicinas para la diabetes…). Los de riesgo serio
  (`TEA_HIGH`: poleo, anamú, cundeamor, hoja de guanábana) llevan la precaución en rojo, no salen en el plan de autismo (`sKidSafe()`, que
  tampoco deja los tés cuya precaución dice "niños" ni el anís estrellado) ni en la lista de la época de lluvia de
  los planes. No se incluyen ruda, yerba bruja, epazote, higuereta ni sábila tomada, por ser tóxicas.
- **Manejo seguro:** temperaturas internas según el USDA según el tipo de carne o marisco.
- Es información general: la interfaz pide revisar etiquetas y consultar al médico.

## 10. Diseño

- Tokens en `:root` de `css/styles.css`: crema `#FBF6EE` (fondo), marfil, arena, tinta `#2B1D14`, **achiote** `#A63A12`
  (primario), **verde plátano** `#2F5D34` (secundario), oro decorativo. Contrastes AA anotados junto a cada token.
- Portadas de categoría con tonos por familia: salados en terracota, dulces en caramelo y rosa, frescos en verde y bebidas
  en turquesa (`categoryTones`).
- Bandera de Puerto Rico como logotipo y favicon (SVG, proporción 3:2).
- **Icono en la pantalla de inicio del celular:** la misma bandera sobre el crema de la app, en PNG (`icons/`):
  `apple-touch-icon.png` (iPhone/iPad), `icon-192/512.png` y `icon-maskable-512.png` (Android, bandera dentro de la zona
  segura) en `manifest.webmanifest`, y `favicon-32.png` de respaldo. El manifiesto usa `"display": "standalone"` desde
  v4.30: la app abre sin la barra del navegador. Antes era `"browser"` porque entrar con Google podía fallar por las
  ventanas emergentes en ese modo; ahora la cuenta es opcional y, si la ventanita no abre, `auth.js` pasa a la
  redirección. Si en un iPhone no se puede entrar desde el icono, se entra desde Safari.
  Para regenerarlos: script de PowerShell con System.Drawing que dibuja `#flag-pr` con sus coordenadas.
- Responsive con un menú plegable en móvil y la barra de abajo (§7.13); sin desbordes horizontales a 360 px.
- **Celular, tarjetas y receta (v4.43, ≤ 560 px):** las tarjetas de receta (`.recipe-grid .recipe-card`) son una fila
  compacta: el plato en un cuadro de 96 px a la izquierda, categoría (una línea, con "…"), nombre, tiempo y porciones a
  la derecha y el corazón centrado a la derecha; lo que Mi recetario añade debajo ocupa todo el ancho. En la receta la
  portada es 2:1, los datos van en dos columnas y los botones en una cuadrícula de 6: Modo cocina y Escuchar a media
  fila, Guardar/Imprimir/Compartir a un tercio, Colección y Lista de compras a media fila y "La hice" entera. La pestaña
  "Listas en 30 minutos o menos" ocupa las dos columnas de categorías.
- **Celular y accesibilidad (v4.30):** ningún texto baja de 14 px (`.875rem`: categorías, insignias, conteos, pestañas,
  barra de abajo) y el cuerpo es de 16 px; todo lo que se toca mide al menos 44 px (cambiar comida del plan, chips de
  temporizador, enlaces de reseñas, botones pequeños, medidas, mover comida, quitar de la lista). Bajo 380 px el botón de
  buscar queda como lupa (antes se escondía). El temporizador terminado late 3 veces y se queda quieto con "¡Listo!"
  (se repintaba cada medio segundo y no paraba). Enlaces dentro del texto subrayados; foco visible en las tarjetas en
  navegadores sin `:has()`; las insignias se imprimen con su color (`print-color-adjust: exact`).
- **Tema oscuro (v4.30):** sigue el ajuste del equipo (`prefers-color-scheme: dark`): los mismos tokens con valores
  oscuros, `--on-accent` (texto sobre el achiote, oscuro en este tema) y `--field` (campos y tarjetas blancas). El pie
  sigue oscuro y las portadas no cambian.
- **Iconos nuevos del sprite (v4.24):** `i-timer`, `i-volume`, `i-mic`, `i-cart`, `i-folder`, `i-filter`, `i-home`, `i-pot`,
  `i-calendar`, `i-leaf`, `i-book` (mismo trazo de 24×24). Lo nuevo usa los mismos tokens: verde plátano para tiempo,
  temporada y lo que cumple; achiote para lo que falta. Impresión: la lista de compras y el plan (`body.print-plan`) se
  imprimen limpios.

## 11. Cómo añadir recetas (procedimiento)

1. Escribir las recetas en el archivo de ampliación más reciente (`js/recipes-5.js`) o crear `recipes-6.js` con
   `recipes.push(...)` y añadir su `<script>` en `index.html` antes de `nutrition.js`.
2. Respetar el modelo (§5): `id` único en kebab-case sin acentos, categoría existente, `active` y `total` en minutos (con
   `wait` si hay espera), ES y EN con el mismo número de líneas, cantidades de partida en lo que se mide.
3. Comprobar que no haya ingredientes sin contar en la nutrición; si falta un alimento, añadirlo a `NUTRI_FOODS` (§8) y
   a `tools/usda/map.js`, y volver a generar `js/nutrition-usda.js` (§8).
4. Revisar alérgenos y alertas: si aparece un ingrediente nuevo con alérgeno, ampliar `ALLERGENS` (§9).
5. Revisar el icono del plato; si no encaja, añadir la palabra a `dishIcons` (§7).
6. Probar en el navegador (español e inglés, móvil): la receta abre, porciones, pestañas, sin desbordes.
7. Generar las fechas de ingreso: `node tools/recipe-dates.js` (actualiza `js/recipe-dates.js`, §7.8).
8. Revisar: `node tools/check-recipes.js` (0 errores: ids en kebab-case sin acentos, `active`/`total`/`wait`, ES y EN
   completos, sólo °F…) y generar las páginas: `node tools/prerender.js` (§7.15). Las dos cosas van en el mismo commit.
9. Actualizar **este documento** (conteos de §6, encabezado y §13) en el mismo commit.

## 12. Verificación

`node tools/check-recipes.js` revisa los datos (falla con código 1). Además, la verificación de cada cambio se hace:

- **Datos:** cargando los scripts en Node (`vm`) en el mismo orden que `index.html` y comprobando ids únicos,
  categorías válidas, ES/EN con el mismo número de líneas y `estimateNutrition(r).missing` vacío en todas las recetas.
- **Navegador:** abrir todas las recetas por `#/receta/<id>` en ES y EN a 375 px: sin errores de consola, sin desbordes
  horizontales y con el nombre correcto en la página.
- **Planes (v4.24):** cargar los scripts en Node y armar un plan de 7 días con cada objetivo: ninguna comida vacía, calorías
  cerca de la meta y, en Diabetes, ninguna comida sobre 60 g de carbohidratos. Desde v4.30 la interfaz se ve sin entrar.
- **Cuenta, reseñas y reglas (v4.30):** con los emuladores de Firebase (`firebase emulators:exec --only auth,firestore`),
  `@firebase/rules-unit-testing` para las reglas y Playwright sirviendo el SDK de Firebase local y llamando a
  `useEmulator`: invitada → entrar desde "Escribir una reseña" → términos → reseña → aprobar → editar (borrador) →
  suspender al momento → reactivar → borrar la cuenta.

## 13. Registro de cambios

**Versión:** la app muestra la misma versión que este documento. En cada cambio se sube la versión aquí (arriba y en la
entrada nueva) y, en el mismo commit, `APP_VERSION` y `APP_REVISED` (fecha AAAA-MM-DD) en `js/app.js`, `SW_VERSION` en
`sw.js` y el texto inicial de `#footer-text` en `index.html`. Desde v4.30 la versión sólo sale en el pie: "… · Versión X ·
Revisión: …" (EN "Version X · Revised …"); la fecha se escribe con `toLocaleDateString` (es-PR / en-US).

### 2026-10-25 — v4.60.0 · "Porciones" también en el móvil
- *Pedido:* en las recetas del móvil no salía la palabra "Porciones" junto al − / + de los ingredientes (en la web sí).
- **`css/styles.css`:** en pantallas de 760 px o menos ya no se esconde `.stepper-label`; sale un poco más pequeña
  (0.75 rem) y el control baja a su propia línea bajo "Ingredientes" cuando no cabe al lado.
- *Verificado* a 375 px: "PORCIONES − 12 +" (EN "SERVINGS") sin desbordes.
### 2026-10-25 — v4.59.0 · Fuera todo lo que dice "para niños"
- *Pedido:* eliminar todo lo que diga "para niños".
- **Filtros** (`js/filters.js`): fuera la casilla "Para niños (sin alcohol ni cafeína)", su aviso y `adv.kids`; la
  explicación bajo "Filtros" ya no lo nombra.
- **Buscador** (`js/search.js`): fuera la idea "Para niños" (palabras niño, kid, infantil): "postre para niños" ahora
  busca postres como cualquier texto. Su regla queda interna como `sKidSafe()`, porque el plan de autismo (2 a 13
  años, `plans.js`, `kidsOk`) la necesita para dejar fuera alcohol, cafeína y crudos.
- **Recetas** (`js/recipes-5.js`): "Ponche de China y Granadina para Niños" pasa a "Ponche de China y Granadina" (id
  `ponche-china-granadina`, antes `…-ninos`; su dibujo `ic-tg-ponche-china-granadina`; la página vieja se borró) y
  "Deditos de Pescado al Horno (para Niños)" a "Deditos de Pescado al Horno"; en inglés sin "Kids'"/"Kid-Friendly".
- **Se quedan a propósito:** los avisos de seguridad que nombran a niños (miel antes de 1 año, huevo y pescado crudos,
  alcohol sin cocinar, cafeína, quenepa, poleo, anís estrellado) y 14 consejos dentro de pasos de recetas; los textos
  legales del consentimiento y los del plan de autismo para menores; y "guineítos niños", que es la fruta.
- *Verificado:* `check-recipes` 0 errores; el panel no dice "niños"; el plan de autismo sigue sin mojito ni café;
  0 dibujos faltantes; `recipe-dates` y `prerender` (1,428 páginas, 1 borrada); sin errores en la consola.
### 2026-10-25 — v4.58.0 · Sólo el botón "Filtros" con su explicación
- *Pedido:* quitar los chips de filtros añadidos en v4.57 y dejar el botón de Filtros con su explicación.
- **`index.html`, `js/filters.js`, `js/app.js`, `css/styles.css`:** fuera los seis chips (`QUICK`, `renderQuickChips`,
  `#quick-chips`, la fila deslizable). Queda "Filtros" (más marcado, con el número de filtros puestos) y debajo una línea
  nueva que dice para qué sirve: "Toque «Filtros» para ver sólo las recetas que quiere: por tiempo, dificultad, calorías,
  dieta, sin alérgenos, época o con «¿Qué tengo en la nevera?». Se suman entre sí y con lo que busque."
  Las explicaciones dentro del panel y los micrófonos siguen igual.
- *Verificado* en el navegador: no queda ningún chip; el panel abre con sus 6 explicaciones, un filtro marca "Filtros 1"
  y da 892 recetas; la ayuda cambia a inglés; sin desbordes a 375 px ni errores en la consola.
### 2026-10-25 — v4.57.0 · Buscar por voz y filtros a la vista
- *Pedido:* un micrófono para la búsqueda principal y los filtros; los filtros más relevantes a la vista, con una reseña
  corta de su uso.
- **Micrófono** (`index.html`, `js/app.js`, `js/filters.js`, `js/cook.js`): botón en el buscador y en "¿Qué tengo en la
  nevera?" (§7.11). Escribe lo que oye mientras habla, busca al terminar y avisa si no hay permiso o no oyó nada; no sale
  en navegadores sin reconocimiento de voz.
- **Filtros a la vista** (`index.html`, `js/filters.js`, `css/styles.css`): bajo el buscador, "Filtros" (más marcado) y seis
  chips (≤ 30 min, Fácil, Vegetariana, Sin gluten, ≤ 500 calorías, Para niños), con una línea de ayuda; en el panel, una
  frase de entrada y una explicación corta en cada grupo (tiempo, dificultad, calorías, dieta, alérgenos, época).
- *Verificado* en el navegador con un reconocedor de voz simulado (el panel de pruebas no deja usar el micrófono):
  "arroz con pollo" se escribe y da 62 recetas; sin permiso y sin voz dan su aviso; "pollo y papa y cilantro" añade tres
  ingredientes. Los chips filtran y se sincronizan con la barra de resultados; "Quitar filtros" los apaga. Sin desbordes
  a 375 px, en claro y oscuro, en ES y EN; sin errores en la consola. *Falta* probarlo con el micrófono real en un
  teléfono.
### 2026-10-25 — v4.56.0 · 8 recetas de mallorcas y 10 dulces de repostería
- *Pedido:* más recetas de mallorcas y de dulces de repostería.
- **Recetas** (`js/recipes-5.js`, tanda 62; 1,410 → 1,428): mallorcas rellenas de crema pastelera y de dulce de leche,
  de coco, de chocolate, integrales (con miel y la mitad del azúcar), de calabaza y canela (Pan y Panecillos); mallorca
  de desayuno con jamón, queso y huevo (Emparedados; "desayuno" en el nombre la pone en el desayuno de los planes); budín
  de mallorca para las que se pusieron duras (Postres); y en Pasteles Dulces: quesitos de guayaba y queso, pañuelos de
  crema, danés de queso y guayaba, pastelitos de coco, tartaletas de frutas tropicales, lionesas con crema de coco,
  relámpagos (éclairs) de café, cuernitos de guayaba, cortaditos de guayaba y hojaldritos de queso y parcha. El horno
  cuenta como tiempo activo; `enfriar` sólo donde la crema o las barras tienen que enfriar.
- **Nutrición** (`js/nutrition.js`): "harina integral" (fibra 10.7 g/100 g; antes contaba como harina blanca) y
  "mallorca" (90 g la unidad), para la de desayuno y el budín.
- **Iconos** (`index.html`, `js/app.js`): 17 dibujos al principio de `dessertIcons`: la mallorca en espiral con el color
  de su masa (coco, chocolate, integral, calabaza) o abierta con su relleno (crema, dulce de leche; jamón, queso y huevo),
  y cada dulce con su forma: pañuelo doblado, danés con marquito, pastelito en triángulo con marcas de tenedor,
  tartaleta con fruta, lionesas, relámpagos con cobertura de café, cuernitos, cortaditos con su capa de guayaba,
  molinetes de parcha y los quesitos con la guayaba en las puntas. El budín usa `ic-budin`. Antes salían 🥐, 🧀, 🥧 o
  la mallorca de guayaba.
- *Verificado:* `node tools/check-recipes.js` 0 errores; 0 de 1,428 recetas con ingredientes sin contar;
  `node tools/recipe-dates.js` y `node tools/prerender.js` (1,428 páginas); las 18 abren en ES y EN a 375 px sin
  desbordes ni errores.
### 2026-10-25 — v4.55.0 · 7 bebidas, 12 cócteles y el brazo gitano de pistacho y guayaba; cada trago en su vaso
- *Pedido:* más recetas de bebidas, tragos y cócteles; y el brazo gitano de pistacho y guayaba.
- **Recetas** (`js/recipes-5.js`, tanda 61; 1,390 → 1,410): refresco de tamarindo, limonada de acerola, té helado de
  guanábana, frappé de mangó, chicha de piña y jengibre (con las cáscaras), agua de sandía con limón y ponche de china y
  granadina para niños (Bebidas); mojitos de guayaba y de acerola, daiquirís de piña y de guanábana, margarita de
  guanábana, mai tai de parcha, Ron Collins de parcha, sangría rosada con guayaba, carajillo boricua (café, ron y coco),
  mamey colada, pitorro de guayaba (con ron comprado, curado 2 semanas) y ron con agua de coco y limón (Cócteles); y el
  brazo gitano de pistacho y guayaba (bizcocho con pistacho molido, queso crema y pasta de guayaba; en Bizcochos). La
  limonada de coco y el agua de coco con piña ya existían y no se repitieron.
- **Iconos** (`index.html`, `js/app.js`): 64 dibujos `ic-tg-<id>`, por id en `SHAKE_ICONS`: cada trago en su vaso real
  (alto con hielo o yerbabuena, bajo, copa con borde de sal, huracán, copa de vino con fruta, botella con vasito para
  coquitos y pitorros, frasco para el bilí y coco con sombrilla), con el color del trago y su fruta. Cubre los 18 nuevos
  y los 46 que todavía eran 🍹🥃🥥🍷🥤🌺🥛. El brazo de pistacho (`ic-brazo-pistacho-guayaba`, regla al principio de
  `dessertIcons`): bizcocho verde con la espiral rosada de guayaba.
- *Verificado:* `node tools/check-recipes.js` 0 errores; 0 de 1,410 recetas con ingredientes sin contar; los cócteles
  dan los avisos de alcohol y de no manejar, el ponche de niños el de azúcar; ninguna bebida entra a los planes (igual
  que antes); `node tools/recipe-dates.js` y `node tools/prerender.js` (1,410 páginas); las 20 abren en ES y EN a
  375 px sin desbordes ni errores.
### 2026-10-25 — v4.54.0 · 8 bizcochos, 8 galletitas y 4 brazos gitanos más
- *Pedido:* más recetas de bizcocho, galletitas y brazos gitanos.
- **Recetas** (`js/recipes-5.js`, tanda 60; 1,370 → 1,390): bizcochos de acerola con glaseado, tamarindo con glaseado
  de melao, mamey, mocha de chocolate y café de Puerto Rico, lechosa y coco, integral de avena y guineo (con la mitad
  del azúcar), nueces y melao, y ajonjolí y miel; galletas de mangó glaseadas, acerola con azúcar, coco y piña, maní y
  melao, queso del país con guayaba, plátano maduro y canela, guanábana con glaseado y tembleque (coco y canela);
  brazos gitanos de chocolate con crema de café, parcha, piña y dulce de leche con nueces (en Bizcochos).
- **Iconos** (`index.html`, `js/app.js`): 20 dibujos nuevos con el sabor de cada uno, al principio de `dessertIcons`:
  el pedazo de bizcocho (`ic-biz-*`), las tres galletas con su cubierta (glaseado, azúcar, coco, maní, canela o
  guayaba en el centro; `ic-galleta-*`) y el rollo con la espiral del relleno (`ic-brazo-*`). Antes salían 🍰, 🍪 o el
  mismo brazo gitano de guayaba.
- *Verificado:* `node tools/check-recipes.js` 0 errores; 0 de 1,390 recetas con ingredientes sin contar (alérgenos
  correctos: gluten, leche, huevo, coco, maní, nueces, ajonjolí y sulfitos de las pasas); `node tools/recipe-dates.js`
  y `node tools/prerender.js` (1,390 páginas); las 20 abren en ES y EN a 375 px con su dibujo, sin desbordes ni errores.
### 2026-10-25 — v4.53.0 · Borrar notas y recetas de "Las que he hecho" en Mi recetario
- *Pedido:* tener la opción de borrar el comentario en Mi recetario → "Las que he hecho".
- **`js/kitchen.js`** (§7.10): "Borrar nota" y "Quitar" en "Las que he hecho" (con la nota a la vista), "Borrar nota"
  en "Con mis notas", con confirmación; `shop.gone` para que lo borrado no vuelva al juntar copias de otro aparato.
  **`css/styles.css`**: los botones y la nota en su recuadro.
- *Verificado (servidor local):* "Cancelar" no borra; "Aceptar" borra sólo esa nota o esa receta y el foco vuelve a
  la sección; juntar con una copia vieja (en los dos órdenes) no devuelve lo borrado; una nota escrita después de
  borrar se queda; `shop.gone` sobrevive a `cleanKitchen()`; 375 px sin desbordes ni errores en la consola. Las reglas
  de Firestore no cambian.
### 2026-10-25 — v4.52.0 · 22 recetas nutritivas de carnes, aves, pescado, granos, arroces y viandas
- *Pedido:* más recetas nutritivas de la cocina puertorriqueña basadas en carne, aves, pescado, granos, viandas,
  vegetales y arroz.
- **Recetas** (`js/recipes-5.js`, tanda 59; 1,348 → 1,370), todas al horno, a la plancha o guisadas, con vegetales y
  poco sodio (adobo sin sal, caldo bajo en sodio, salsa de tomate sin sal, enlatados enjuagados): carnes — picadillo
  magro con chayote, solomillo a la plancha con mojo de recao y batata, albóndigas magras al horno, carne con viandas;
  aves — pechugas guisadas con gandules y calabaza, pollo al horno con viandas en una bandeja, picadillo de pavo con
  berenjena, salpicón de pollo con repollo; pescado — sierra al horno con alcaparras, bacalao con garbanzos y espinaca,
  pescado en salsa de calabaza, camarones con gandules y calabaza; granos — garbanzos con bacalao y papas, gandules
  con bolitas de plátano, habichuelas rosadas con calabaza y yautía; arroces — integral junto con habichuelas y
  calabaza, arroz con pollo y vegetales bajo en sodio, arroz con camarones y gandules; viandas y vegetales — yautía y
  calabaza al horno con mojo, repollo guisado con garbanzos, guineítos con bacalao y aguacate, guiso de calabaza,
  habichuelas tiernas y maíz. Por porción: 17–46 g de proteína en los platos de carne, ave y pescado, 1–4 g de grasa
  saturada y 160–830 mg de sodio.
- **Nutrición** (`js/nutrition.js`, §8): alimentos propios para la **carne molida de res magra** (90/10), la **res
  magra para guisar**, la **leche de coco light** y la **salsa de tomate sin sal** (antes contaban como la carne con
  grasa, la leche de coco entera y la salsa con sal).
- **Iconos** (`js/app.js`): reglas al principio de `dessertIcons` y en `meatIcons.aves` para que el picadillo de pavo,
  el salpicón de pollo, las pechugas guisadas, la sierra, el pescado en salsa, los camarones y el guiso de calabaza
  usen el dibujo de su tipo de plato.
- *Verificado:* `node tools/check-recipes.js` 0 errores; 0 de 1,370 recetas con ingredientes sin contar;
  `node tools/recipe-dates.js` y `node tools/prerender.js` (1,370 páginas); las 22 abren en ES y EN a 375 px sin
  desbordes ni errores. El bacalao se bajó a 6 onzas en 3 recetas (con 1 libra pasaba de 1,300 mg de sodio por porción).
### 2026-10-25 — v4.51.0 · La voz busca el acento más parecido al de Puerto Rico
- *Pedido:* que el acento de la voz en español se parezca más al puertorriqueño.
- **`js/cook.js`** (§7.9): orden de voces por acento (Puerto Rico, Caribe, EE. UU., Latinoamérica, México, otros y
  España al final), país de cada voz en "Voz exacta" y nota del acento en el panel, con la recomendación de Edge en la
  computadora (voces Karina y Víctor de Puerto Rico) cuando el aparato no tiene voces de Puerto Rico.
- *Verificado (servidor local):* con las voces de Edge (con y sin Puerto Rico), Chrome en Windows, iPhone y Android,
  Mujer y Hombre escogen la de acento más parecido (Karina/Víctor; si no, República Dominicana antes que España;
  Paulina/Juan de México en el iPhone; EE. UU. en Chrome y Android) y el panel lo dice; sin errores en la consola.
### 2026-10-25 — v4.50.0 · 16 batidas y champolas más, y cada batida con su vaso
- *Pedido:* añadir más recetas de batidas vegetarianas y de frutas, y champolas.
- **Recetas** (`js/recipes-5.js`, tanda 58, categoría Bebidas; 1,332 → 1,348): batidas de guayaba con leche; carambola
  y china (con aviso para quien tiene enfermedad de los riñones); melón con leche y canela; sandía y fresa con
  yerbabuena; mañanera de china, zanahoria y jengibre; calabaza con canela y guineo; remolacha, fresa y china; verde de
  pepino, piña y yerbabuena (vegana); zanahoria, mangó y coco; verde de espinaca, guineo y maní (14 g de proteína);
  yogur griego con guayaba y avena (17 g); chocolate y guineo. Champolas de mamey, níspero, mangó y acerola. Todas
  vegetarianas, sin ingredientes sin contar.
- **Iconos** (`index.html`, `js/app.js`): `SHAKE_ICONS` (por id, porque los nombres se parecen) da a las 40 batidas y
  champolas su dibujo: batidas en vaso alto con espuma, sorbeto y su fruta en el borde (`ic-bat-*`); champolas en vaso
  bajo y ancho con canela (`ic-champola-*`), del color de cada una. Antes 22 eran 🥤 y una 🥑. Ninguna repite dibujo.
- *Verificado:* `node tools/check-recipes.js` 0 errores; `node tools/recipe-dates.js` y `node tools/prerender.js`
  (1,348 páginas); las 16 abren en ES y EN a 375 px con su dibujo, sin desbordes ni errores en la consola.
### 2026-10-25 — v4.49.0 · 16 recetas veganas con proteína (desayunos, platos y meriendas)
- *Pedido:* añadir recetas veganas en desayunos, platos principales y meriendas, como se recomendó al revisar los
  planes (el plan vegano llegaba al 87 % de la proteína: de 8 desayunos veganos sólo uno pasaba de 7 g).
- **Recetas** (`js/recipes-5.js`, tanda 57; 1,316 → 1,332): desayunos — avena con leche de soya, mantequilla de maní
  y guineo (17 g de proteína por porción); revoltillo de tofu y garbanzos con sofrito (24 g); quinoa con leche de
  soya, mangó y almendras (16 g); pudín de chía y leche de soya con parcha (13 g); panqueques de avena y garbanzos
  (17 g); avena salada con tofu y espinaca (26 g). Platos — arroz con habichuelas y tofu guisado (26 g); picadillo de
  lentejas y tofu con arroz y maduros (24 g); chili boricua de habichuelas y quinoa con tostones (18 g); tofu al horno
  en mojo isleño con gandules y batata (25 g); asopao de garbanzos y tofu (23 g); pastelón de amarillos con picadillo
  de lentejas y tofu (22 g). Meriendas — garbanzos crujientes con adobo (11 g); batida de leche de soya, guineo y maní
  (13 g); hummus de gandules con vegetales (7 g); bolitas energéticas de guineo y maní (10 g).
- **Nutrición** (`js/nutrition.js`, §8): la **leche de soya** tiene su propio alimento (2.9 g de proteína por 100 g,
  ~7 g por taza; antes contaba como las otras leches vegetales, 1 g) y el **adobo sin sal** también (antes contaba con
  el sodio del adobo, 42,500 mg por 100 g; corrige además 3 recetas que ya lo usaban). Ninguna receta con
  ingredientes sin contar (0 de 1,332).
- **Iconos** (`index.html`, `js/app.js`): 7 dibujos veganos nuevos con la hojita (`ic-vg-avena-mani`,
  `ic-vg-pudin-chia`, `ic-vg-avena-salada`, `ic-vg-arroz-habichuelas-tofu`, `ic-vg-batida-mani`, `ic-vg-bolitas-mani`,
  `ic-vg-panqueques`) y los veganos que ya había para el revoltillo, el picadillo, el asopao, el pastelón y la quinoa
  (sin esto salían un huevo 🍳, carne 🥩 o el asopao de pollo).
- *Verificado:* `node tools/check-recipes.js` 0 errores; `node tools/recipe-dates.js` y `node tools/prerender.js`
  (1,332 páginas; 54 páginas viejas cambian sólo sus recetas relacionadas); las 16 abren en ES y EN a 375 px sin
  desbordes ni errores. Plan vegano (7 días × 3 planes): proteína del 87 % (mín. 45 %) al 97 % (mín. 86–88 %), con
  una mujer de 165 lb y un hombre de 240 lb; el vegetariano también las usa (95–98 %).
### 2026-10-25 — v4.48.0 · Planes revisados como lo haría un nutricionista, y pantalla más ordenada
- *Pedido:* revisar el motor de los planes, mejorar la interfaz y la organización, e implementar las recomendaciones
  de un nutricionista.
- **Motor** (`js/plans.js`, §7.2): ajuste de cada día (`tuneDay()`) con tope de sodio, proteína al 90 % de la meta,
  calorías ±10 % y colesterol; peso ajustado para la proteína con IMC ≥ 30; tope de carbohidratos de diabetes según las
  calorías; agua del día; `PLAN_ENGINE` para rearmar los planes guardados.
- **Pantalla** (`js/plans.js`, `css/styles.css`): resumen arriba y ajustes plegados, objetivos en tres grupos, aviso
  para poner los datos, semáforo del día con consejos, plato saludable por comida, porción con lo que rinde la receta,
  resumen de la semana, pestañas por día, listas largas plegadas y la dieta sin repetir.
- **Nutrición** (`js/nutrition.js`, §8): `groups.vegNS`, los vegetales que no son vianda.
- *Verificado (servidor local):* simulación de 7 días × 3 planes × 13 objetivos con dos personas (mujer de 165 lb y
  hombre de 240 lb, IMC 35): calorías 90–103 % de la meta, proteína 87–117 %, sodio bajo el tope en casi todos los días;
  375 px y escritorio, ES y EN, sin desbordes ni errores en la consola; pestañas con clic y flechas, "Cambiar",
  "Sobras para mañana" y la dieta según el objetivo funcionan. *Pendiente:* más desayunos veganos con proteína.
### 2026-10-25 — v4.47.0 · Iconos propios para limbers, piraguas, dulces, pastas, sopas, panes, bizcochos y flanes
- *Pedido:* el icono del limber era incorrecto; la piragua, del color de la fruta; el brazo gitano, incorrecto; los
  buñuelos y los dulces, muy genéricos; los churros con chocolate, incorrectos; las pastas, todas iguales; muchas sopas,
  genéricas y repetidas; los panes, los bizcochos y los flanes, acordes con la receta.
- **Dibujos nuevos** (`index.html`, §7; generados con scripts de Node): 5 limbers + 1 genérico (antes 🍧, que es
  piragua; el de piña usaba el de guayaba), 3 piraguas + 1 genérica, 4 brazos gitanos (antes 🍰), 26 dulces, buñuelos
  y churros (antes 🍬 🥥 🍩 🍊 🥭 🍑 🎃 🍞 🥖), 29 pastas (antes 🍝), 35 sopas (7 compartían el del sancocho y 5 el de
  fideos; 6 eran emoji), 41 panes (antes 🍞 🥐 🫓 👑 🍈), 28 bizcochos y cupcakes (antes 🍰 🎂 🧁) y 15 flanes (7 de
  fruta compartían uno y 8 más compartían con otro sabor).
- **Asignación** (`js/app.js`): reglas al principio de `dessertIcons`; "limber", "piragua" y "brazo gitano" en
  `dishIcons` usan ahora `ic-limber`, `ic-piragua` e `ic-brazo-gitano`.
- *Verificado (servidor local):* todos los dibujos revisados a tamaño grande; al recalcular `dishIcon` de las 1,316
  recetas cambiaron sólo las previstas (ninguna fuera de cada grupo), todos los `svg:` existen en el sprite y no hay
  ids repetidos; pastas 31/31, sopas 70/70 y flanes 23/23 con dibujo distinto; `node tools/check-recipes.js` 0 errores;
  sin errores en la consola.
### 2026-10-25 — v4.46.0 · Títulos de las subcategorías con mayúscula en cada palabra
- *Pedido:* en los títulos de las subcategorías de más de una palabra, que cada palabra empiece con mayúscula.
- **`js/families.js`** (§7): 95 títulos (ES y EN) pasan a la misma forma que los nombres de las categorías, con los
  conectores en minúscula ("Chocolate caliente" → "Chocolate Caliente", "Tragos sin alcohol" → "Tragos sin Alcohol",
  "Pollo entero y en presas" → "Pollo Entero y en Presas"); los de una sola palabra no cambian. Sólo cambian los
  textos: las claves y las expresiones que clasifican las recetas son las mismas.
- `node tools/prerender.js`: las páginas no usan estos títulos; sólo cambia la fecha de la portada en `sitemap.xml`.
- *Verificado (servidor local):* los títulos se ven así en los resultados por categoría, sin errores en la consola;
  repetir la conversión no cambia nada (0 títulos).
### 2026-10-25 — v4.45.0 · La voz de hombre ya no sale de mujer
- *Pedido:* al escoger la voz de hombre salía de mujer; verificar que todo esté correcto.
- **Causas** (`js/cook.js`, §7.9): (1) sin una voz de hombre reconocida se usaba una sin clasificar o la primera, casi
  siempre de mujer, y el botón seguía diciendo "Hombre"; (2) faltaban muchos nombres de hombre (voces naturales de
  Edge como Víctor de Puerto Rico, y Eddy, Reed, Rocko y Grandpa del iPhone); (3) "José" y "Álvaro" no se reconocían
  por el acento; (4) al abrir "Escuchar receta" recién cargada la página, Chrome todavía no daba las voces y se leía con
  la voz por defecto.
- **Arreglo:** nombres sin acentos (`voiceKey`) y listas ampliadas; Hombre sin voz de hombre → la que hay, más grave,
  con "Voz: Hombre (aprox.)" y el aviso de dónde bajar voces (también Windows); `speak()` espera a que carguen las voces.
- *Verificado (servidor local):* con las listas de voces de Chrome y Edge en Windows (con y sin español), voces
  naturales de Edge, iPhone (con y sin Jorge) y Android, Mujer y Hombre escogen la voz correcta o la aproximada con su
  aviso; en el modo cocina real (inglés: David, Mark y Zira) al escoger Hombre se lee con David, el siguiente paso
  también, se guarda en `rcb.voice`, y con las voces sin cargar se espera y se lee con David.
### 2026-10-25 — v4.44.0 · Iconos propios para la lechosa y la toronja
- *Pedido:* los iconos de la toronja y de la papaya no eran los adecuados.
- **Dibujos nuevos** (`index.html`, §7): `ic-lechosa`, `ic-toronja`, `ic-dulce-lechosa` e `ic-cascos-toronja`.
- **Asignación** (`js/app.js`, `dishIcons`): Dulce de Lechosa (Papaya) y Dulce de Papaya Verde en Almíbar (🥭 →
  `ic-dulce-lechosa`), Cascos de Toronja en Almíbar (🍊 → `ic-cascos-toronja`); las palabras "lechosa", "papaya" y
  "toronja" usan ahora `ic-lechosa` e `ic-toronja`. El jugo de toronja, el de lechosa con china, la Paloma, la ensalada
  de lechosa verde y la de toronja con aguacate ya tenían dibujo propio o de su tipo de plato y no cambian.
- *Verificado (servidor local):* los dibujos revisados a tamaño grande y de tarjeta (también en el celular a 375 px);
  al recalcular `dishIcon` de las 1,316 recetas sólo cambiaron esas 3; `node tools/check-recipes.js` 0 errores.
### 2026-10-25 — v4.43.0 · Celular más compacto y revisión de los iconos de las 1,316 recetas
- *Pedido:* análisis exhaustivo del proyecto, mejorar la interfaz en la web y en el celular, y validar que el icono de
  cada receta corresponda a la receta.
- **Celular** (`css/styles.css`, §10): tarjetas de receta en fila compacta (antes ~440 px cada una con el dibujo
  pequeño; Postres pedía deslizar 147 tarjetas así; ahora caben unas 4 por pantalla); en la receta, portada más baja
  (el título se ve sin deslizar), datos en dos columnas y botones en cuadrícula pareja (antes 2-2-1-2-1); la pestaña de
  las rápidas a lo ancho (su nombre salía en 4 líneas).
- **Iconos** (`js/app.js`, §7): se calculó `dishIcon` de las 1,316 recetas con un script (cargando los archivos en `vm`):
  todos los `svg:` existen en el sprite; 733 salen de `dessertIcons`, 117 de `meatIcons`, 35 jugos con su vaso, 414 por
  palabra y 17 con el de la categoría. Se revisaron a mano los 431 de palabra/categoría y los 77 de reglas cuyo dibujo
  no comparte palabra con el nombre. Corregidos: Guarapo de Caña con Ron (🍵 → vaso de guarapo, se quitó la entrada
  repetida), Café Frío con Leche (☕ → `ic-sin-cafe-frappe`), Fettuccine con Camarones (🦐 → 🍝), Mofongo de Batata
  con Chicharrón (plátano verde → 🍠) y Croquetas de Calabaza y Queso (🥟 → `ic-ent-croqueta-papa`).
- *Verificado (servidor local):* 375 y 360 px en ES y EN sin desbordes, ningún botón con el texto cortado;
  `node tools/check-recipes.js` 0 errores; sólo cambiaron los 5 iconos previstos.
### 2026-10-19 — v4.42.0 · Pestaña "Listas en 30 minutos o menos" y encabezado más ordenado
- *Pedido:* añadir una pestaña "Listas en 30 minutos o menos" en "Explora por categoría", quitar esa sección de la
  portada y que busque las rápidas al pulsarla. Y ordenar mejor el encabezado: con la cuenta de administrador los enlaces
  quedaban pegados al nombre de la app; que se vea más atractivo.
- **Pestaña de las rápidas** (`js/app.js`, §7): primera de la cuadrícula de categorías, con el rayo y el número de
  recetas (417 hoy). Al pulsarla se ven en los resultados ("Listas en 30 minutos o menos"); es una pestaña más: elegir
  una categoría la apaga. Se quitaron la sección `#rapidas`, `renderQuick()` y los textos `quickSub`/`quickAll`; el chip
  "≤ 30 min" de los resultados sigue y queda sincronizado con la pestaña.
- **Encabezado** (`index.html`, `css/styles.css`, `js/app.js`, `js/auth.js`): la marca y los enlaces no se parten en
  renglones (`white-space: nowrap`) y hay más aire entre la marca y el menú; cada enlace lleva su icono (lista,
  calendario, libro, carrito, personas, corazón); **Administrador** es una pastilla color achiote; la cuenta es un círculo
  con el icono de persona (el correo sale al pasar el ratón y completo en el menú), Privacidad y Salir. El encabezado usa
  hasta 1440 px de ancho. **`fitHeader()`** mide si todo cabe en una línea (cambia con el idioma, la cuenta y el ancho);
  si no, recoge los enlaces en un botón **"☰ Menú"** con un panel a la derecha (`.header-collapsed`), que se cierra al
  tocar fuera. En el celular sigue el menú de siempre.
- *Verificado (servidor local, como administrador):* 1600 y 1366 px en una línea; 1024 px con "Menú" y su panel; 375 px
  sin desbordes; la pestaña muestra 417 recetas y se apaga al elegir Postres.
### 2026-10-19 — v4.41.0 · Entrada con el correo electrónico y términos sin casillas
- *Pedido:* corregir la forma de entrar: escribir el correo y validar si está registrado; si no lo está, que salgan los
  términos y condiciones con la opción de aceptar; si ya está registrado, que entre sin ver los términos. Quitar sólo las
  3 casillas de los términos (la información se queda). Para ver las recetas hay que registrarse con el correo, y la
  primera vez se le envía la confirmación a su correo.
- **Entrada** (`js/auth.js`, §7.3): pasos `signin` (correo) → `terms` (sólo si no está registrado) → `method` / `sent`.
  Las recetas vuelven a pedir cuenta: la entrada se abre al cargar y no se cierra (se quitó "Seguir sin cuenta"). Gmail
  entra con el botón de Google (sin gastar enlaces por correo); los demás correos reciben el enlace.
- **Términos** (`js/consent.js`, `js/consent-ui.js`, §7.14): sin casillas; las tres declaraciones como lista y un botón
  "Acepto los términos y condiciones". `CONSENT_VERSION` "2026-10-19.1": la introducción y las secciones 1, 8 y 9 dicen
  que las recetas piden cuenta. Quien ya aceptó cualquier versión entra sin verlos. El correo de confirmación de la
  primera vez dice "Usted aceptó lo siguiente:".
- **Firestore** (`firestore.rules`): colección nueva `registered/{correo}`. **Hay que pegar las reglas en la consola de
  Firebase** (Firestore → Reglas → Publicar). Mientras no estén, todos los correos se tratan como nuevos (ven los
  términos), pero al entrar las cuentas que ya aceptaron se reconocen por su consentimiento. Al abrir `#/admin` se
  crean los `registered` de las cuentas anteriores.
- **Textos:** sin "sin cuenta" en la entrada, la suspensión y "Privacidad y mis datos".
- *Verificado (servidor local):* la app queda tapada hasta entrar; correo nuevo → términos con un botón → "Entrar" con
  Gmail o enlace; correo registrado → sin términos; 375 px sin desbordes. *Sin probar:* una entrada real completa (Google
  o enlace) ni el correo de confirmación en producción.
### 2026-10-19 — v4.40.0 · Segunda revisión del sitio
- *Pedido:* aplicar la segunda revisión externa (sobre v4.35.0). Lo que ya estaba resuelto en v4.36–4.39 se comprobó y
  no se tocó: el JSON-LD Recipe sí está en cada página y el sitemap tiene las 1,316 recetas (N2); los avisos de los
  planes sí salen (meta de salud, menores de 14, menores de 2, "¿cuál plan conservar?") y `fmtHalf` existe (N6); las
  habichuelas rosadas ya se distinguen ("sin carne") y no hay pastelillos de hojaldre duplicados (N5).
- **Páginas de las recetas** (`tools/prerender.js`, §7.15): descripción completa de ≤ 155 caracteres sin "…" (N1);
  gramos/mililitros y °C junto a las medidas caseras (punto 12); "de preparación" en vez de "de cocina" y `prepTime` en
  vez de `cookTime` en el JSON-LD (N3); alérgenos con lo que la receta lleva.
- **Tiempos** (N3): la app también dice "15 min de preparación · …" (`formatTimeLong`). Pernil asado: 5 h 40 min de
  preparación y horno (cuadra con los pasos: 4 h + 1 h + 20 min de reposo) y 17 h 40 min en total con el adobo.
- **Alérgenos** (N4, §9): `allergenLabel()` nombra sólo lo que se encontró ("Sulfitos (vino)", "Crustáceos (camarón)").
- **Buscador** (N7, §7.1): "alcohol-free drink" en inglés ahora trae primero los tragos sin alcohol (el guion se quitaba
  antes de comprobarlo, "drink" no buscaba en cócteles y el empuje era menor que "drink" en el nombre: ahora +8). El
  vocabulario se rehace cuando cambia `APP_VERSION` o el número de recetas (antes sólo el número).
- **Filtros** (N8, §7.11): avisos junto al conteo y "para niños" falla cerrado.
- **Reseñas** (N9, §7.4): botón **Reintentar** cuando no cargan; al aprobar cambios con foto nueva que ya no está, se queda
  la foto anterior (antes se marcaba "con foto" sin foto).
- **Administración** (N9, §7.14): bajo las cifras, la lista de cuentas que aceptaron los términos y no han recibido el
  correo de confirmación (`consentUnmailedHTML`).
- **Datos** (N5, punto 11): Mollejas en Escabeche pasa de Entremeses a Aves (como las demás mollejas); "Gazpacho de
  Bacalao con Aguacate (Ensalada)" (el gazpacho boricua de bacalao es ensalada: se queda en Ensaladas); mofongo con
  "2 tazas de caldo de pollo caliente" y "aceite para freír (unas 3 tazas: 2 pulgadas de hondo)" (≈ 453 kcal por
  porción; el aceite se sigue contando como absorbido). Sin cambiar: `guineo-pollo` (Pastelón de Pollo) conserva su
  dirección porque las favoritas y Mi recetario guardan el id; Yogur Casero sigue en Cereales (no hay categoría de lácteos).
- *Pendiente de la revisión:* fotos de los platos y su uso como imagen al compartir (puntos 3 y 6); confirmar en la Prueba
  de resultados enriquecidos de Google y en Search Console (≈ 1,318 direcciones).
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; `node tools/prerender.js` 1,316 páginas (todas las
  descripciones ≤ 155 sin "…"); navegador: alérgenos de la sangría y los camarones, tiempos, búsqueda ES/EN, avisos de
  planes (10 y 1 año, diabetes), botón Reintentar, página /receta/pernil; sin errores en la consola.
### 2026-10-18 — v4.39.0 · Más ensaladas y emparedados; el correo también para notificaciones y recetas
- *Pedido:* más recetas de ensaladas y emparedados. Y en privacidad: incluir que el correo electrónico también se usa para enviar notificaciones, recetas nuevas y recetas de la temporada.
- Sexagésima tanda en `js/recipes-5.js` (versiones propias), 18 que no estaban (había 34 ensaladas y 25 emparedados):
  - **Ensaladas (9):** de pollo con piña y pasas, de yuca con mojo, César con pollo a la plancha, de maíz con aguacate y
    tomate, fría de arroz con vegetales y jamón, de pasta tricolor con queso del país, de jueyes con aguacate, de toronja
    con aguacate y berro, y de tomate y cebolla con recao.
  - **Emparedados (9):** jamón y queso prensado en pan sobao, pan con tortilla de papa, sándwich de pollo frito con
    ensalada de repollo, de picadillo (sloppy joe boricua), de salchichón y queso de papa, de pavo con aguacate y queso
    suizo, jibarito de pernil, de camarones al ajillo en pan de agua y wrap vegano de vegetales asados con hummus de recao.
  - Menos jamón, salchichón, adobo, pepinillos o sal donde el sodio se pasaba. Los de jamón y de salchichón siguen
    altos (≈1,100–1,450 mg) porque son embutidos: la app lo avisa.
- **Privacidad** (`js/consent.js`): `CONSENT_VERSION` pasa a "2026-10-18.3". El resumen y la sección 9 (ES y EN) dicen
  que el correo también se usa para enviar notificaciones de la app, recetas nuevas y recetas de la temporada, cómo dejar
  de recibirlas y que los avisos indispensables se envían siempre. "Privacidad y mis datos" lo muestra solo (lee la
  sección 9). Todos aceptan los términos otra vez al entrar (§7.14).
- **Nutrición** (`nutrition.js`): "aderezo César", "panecillos de hamburguesa" y "salchichón" (USDA SR Legacy, a mano;
  también en `tools/usda/map.js`).
- **Familias** (`families.js`): en Ensaladas, "De papa, pasta y viandas" pasa a "De papa, pasta, arroz y viandas" (incluye
  yuca, arroz y pasta) y "jueyes" va con mariscos; en Emparedados, jamón y queso, picadillo y salchichón van con carnes,
  pavo con pollo y pavo, y "De pescado y atún" pasa a "De pescado y mariscos" (incluye camarones). Ninguna receta
  anterior cambió.
- **Iconos:** tortilla española para el pan con tortilla y jibarito para el de pernil; el resto 🥗 y 🥪.
- Fechas regeneradas y `node tools/prerender.js`: 1,316 páginas y `sitemap.xml` con 1,318 direcciones. Total: **1,298 →
  1,316 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 18 en ES y EN
  a 375 px.
### 2026-10-18 — v4.38.0 · Jugos y bebidas tropicales y recetas con apio del país
- *Pedido:* más recetas de jugos y bebidas tropicales, y recetas con el apio.
- Quincuagésima novena tanda en `js/recipes-5.js` (versiones propias), 19 que no estaban:
  - **Jugos naturales (6):** uvas de playa, piña con jengibre y cúrcuma, limonada de fresa, remolacha con zanahoria y
    china, limonada frappé de hierbabuena, y guayaba con parcha. Cada uno tiene su vaso con el color del jugo y su fruta
    (`ic-jugo-<id>` en el sprite de `index.html`; tres adornos nuevos: uva de playa, remolacha y cúrcuma, y fresa).
  - **Bebidas tropicales (6):** batida de pitahaya, batida de aguacate, champola de parcha, té frío de limoncillo y
    jengibre, batida de fresa y guineo, y ponche de parcha y piña sin alcohol para fiestas.
  - **Con apio del país (7):** majado de apio, apio en escabeche, pastelón de apio con picadillo de pollo y puré de apio
    para bebés (en Vegetales); buñuelos de apio con queso (Entremeses); pan de apio (Panes); y budín de apio y coco
    (Postres). Antes sólo estaba la crema de apio. Los ingredientes dicen "apio del país" para que la nutrición lo cuente
    como arracacha y no como el apio de ensalada (celery).
- **Iconos:** limoncillo para el té frío, 🥑 para la batida de aguacate, viandas, escabeche, crema de apio y buñuelos para
  las de apio.
- **Familias** (`families.js`): "té frío" va con café y té fríos; "apio" va con las viandas en Vegetales y en Panes.
  Ninguna receta anterior cambió.
- **Fechas** (`tools/recipe-dates.js`): la fecha de hoy de las recetas sin commit salía en UTC (de noche ya era "mañana");
  ahora usa la hora local, como git. Por eso la v4.37.0 decía que sus 35 recetas eran del 19: son del 18, y el pie y
  `APP_REVISED` vuelven al 18.
- `node tools/prerender.js`: 1,298 páginas y `sitemap.xml` con 1,300 direcciones. Total: **1,279 → 1,298 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 19 en ES y EN
  a 375 px, con su dibujo.
### 2026-10-18 — v4.37.0 · Panes, viandas, ajonjolí, salsas de jobos, caderas de pollo, cereales y pastas; "¡Gratis!", carrito azul y corazón rojo
- *Pedido:* más panes y panes dulces, vegetales y viandas, dulce de ajonjolí, salsas y aderezos (por ejemplo con jobos),
  aves (por ejemplo caderas de pollo), cereales y pastas. Y en la portada: quitar "sin registrarse" y que "Gratis" llame
  la atención; el ícono del carrito en azul y el corazón en rojo.
- **Portada:** la frase queda "Recetas boricuas paso a paso, en español e inglés." seguida de una etiqueta **"¡Gratis!"**
  ("Free!" en inglés) en color achiote, un poco inclinada (`.hero-free` en `css/styles.css`; textos `author` y `free` en
  `js/app.js`; también en `index.html`).
- Quincuagésima octava tanda en `js/recipes-5.js` (versiones propias), 35 que no estaban:
  - **Panes (8):** pan de papa, pan integral de avena y miel, pan relleno de chorizo y queso, panecillos de hamburguesa,
    rosca de Reyes boricua, pan dulce de chocolate, pan de pasas y canela en espiral y pan de mangó.
  - **Vegetales y viandas (5):** pastelón de batata con picadillo, calabaza asada con ajo y miel, guingambó frito
    empanado, tostones de yautía y mofongo de batata con chicharrón.
  - **Ajonjolí (2, en Postres):** turrón de ajonjolí con melao y dulce de ajonjolí y coco (el dulce de ajonjolí clásico ya
    estaba).
  - **Salsas y aderezos (6):** salsa agridulce de jobos para cerdo, pique de jobos, vinagreta de jobos y miel, chutney de
    jobos y jengibre, salsa picante de carambola y aderezo de guayaba y mostaza.
  - **Caderas de pollo (5, en Aves):** al horno con adobo y papas, guisadas, fritas estilo kiosco, al carbón con BBQ de
    guayaba y con arroz al horno en un solo molde.
  - **Cereales (4):** avena de coquito (sin alcohol), granola de avena, ajonjolí y melao, maicena de chocolate y harina de
    maíz con leche de coco (vegana).
  - **Pastas (5):** espaguetis con albóndigas, lasaña de pollo en salsa blanca, fideuá boricua de mariscos, espaguetis con
    chuletas ahumadas y pasta con garbanzos y espinaca (vegana).
  - Menos adobo, sal o chuleta ahumada donde el sodio pasaba de ~900 mg.
- **Nutrición** (`nutrition.js`): "caderas de pollo" (USDA leg, meat and skin, crudo; ~255 g sin hueso cada una; antes
  contaban como pollos enteros). También en `tools/usda/map.js`.
- **Filtro de dieta** (`search.js`, `S_MEAT_RX`): "cod" (bacalao en inglés) atrapaba "coditos"; ahora es `cod\b`. Los
  "Macarrones con Queso al Horno" y la "Pasta con Pesto de Recao y Queso del País" vuelven a salir como vegetarianos.
- **Colores de dos íconos** (`css/styles.css`): el carrito (`#i-cart`) siempre azul (`--cart-blue`) y el corazón
  (`#i-heart`) siempre rojo (`--heart-red`), en el menú, la barra de abajo, los botones y las tarjetas, con su versión
  clara para el tema oscuro. Se aplica con `svg.icon:has(> use[href="#i-cart"])`; en navegadores sin `:has()` quedan
  del color de antes.
- **Iconos:** 👑 para la rosca de Reyes, pastelón para el de batata, yautía para los tostones, 🍬 para el turrón, 🌶️
  para la salsa de carambola; el resto usa los que había.
- **Familias** (`families.js`): "Pan de agua, sobao y de molde" incluye pan de papa, integral y panecillos de
  hamburguesa; en Vegetales, "pana" sólo cuenta como palabra suelta (el guingambó "empanado" ya no cae en viandas).
  Ninguna receta anterior cambió.
- Fechas regeneradas y `node tools/prerender.js`: 1,279 páginas y `sitemap.xml` con 1,281
  direcciones. Total: **1,244 → 1,279 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 35 en ES y EN
  a 375 px y la portada con "¡Gratis!" en claro y oscuro.
### 2026-10-18 — v4.36.0 · Más postres puertorriqueños
- *Pedido:* más recetas de postres puertorriqueños.
- Quincuagésima séptima tanda en `js/recipes-5.js` (versiones propias), 12 que no estaban (había 132 postres): alfajor
  boricua de yuca, melao y jengibre; dulce de hicacos en almíbar; tembleque de parcha y tembleque de guanábana (veganos);
  limber de piña; helado de guanábana sin máquina; dulce de coco tierno; pudín de calabaza; piragua de parcha; brazo
  gitano de crema de coco; flan de queso con guayaba; y natilla de calabaza con canela.
- **Nutrición** (`nutrition.js`): "coco tierno" (de coco de agua, con mucha menos grasa que el maduro) e "hicacos", con
  valores aproximados porque no están en USDA SR Legacy.
- **Iconos:** los dibujos de postres que había (dulce de maní para el alfajor, dulce en almíbar para los hicacos,
  tembleque de mangó para el de parcha, limber para el de piña).
- **Familias:** cada una cae en su grupo con las reglas que había; no hizo falta tocar `families.js`.
- Fechas regeneradas y `node tools/prerender.js`: 1,244 páginas y `sitemap.xml` con 1,246 direcciones. Total: **1,232 →
  1,244 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 12 en ES y EN
  a 375 px.
### 2026-10-18 — v4.35.0 · Más sopas y asopaos
- *Pedido:* más recetas de sopas y asopaos.
- Quincuagésima sexta tanda en `js/recipes-5.js` (versiones propias), 16 que no estaban (había 54 sopas):
  - **Asopaos (6):** de gandules con pollo, de pescado con recao, de calamares, de longaniza, de pavo (con el que sobra)
    y de salchichas (económico).
  - **Sopas, cremas y caldos (10):** sopa de cebolla gratinada con queso de papa, sopa de tomate asado con recao, crema
    de malanga, crema de chayote, crema de zanahoria y china (vegana), sopa de pollo con viandas (de domingo), sopa de
    mariscos criolla, sopa de cabro con viandas, sopa de hueso de res con fideos y viandas, y gazpacho de sandía y pepino.
- **Nutrición** (`nutrition.js`, §8): el caldo "bajo en sodio" (≈140 mg por taza) ya no cuenta como caldo regular
  (≈820 mg por taza), y el "cubito de caldo" se reconoce (≈1,000 mg cada uno). Las recetas nuevas usan caldo bajo en
  sodio; la única anterior que lo usaba ahora cuenta su sodio real.
- **Iconos:** los dibujos de asopaos, cremas y sopas que había; 🍅 para la de tomate y 🍉 para el gazpacho de sandía.
- **Familias** (`families.js`, sopas): "De pescado" pasa a "De pescado y mariscos" (incluye "mariscos") y "De pollo y
  carnes" incluye "cabro". Ninguna receta anterior cambió.
- Fechas regeneradas y `node tools/prerender.js`: 1,232 páginas y `sitemap.xml` con 1,234 direcciones. Total: **1,216 →
  1,232 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 16 en ES y EN
  a 375 px.
### 2026-10-18 — v4.34.0 · Más pescados y mariscos
- *Pedido:* más recetas de pescados y mariscos.
- Quincuagésima quinta tanda en `js/recipes-5.js` (versiones propias), 18 que no estaban (había 68 en Pescado y Mariscos):
  - **Pescados (9):** sierra guisada con papas, atún fresco en escabeche, salmón al horno con mojo de naranja agria,
    filetes de tilapia a la vizcaína, deditos de pescado al horno (para niños), filetes de chillo al ajillo, mero a la
    parrilla con chimichurri de recao, sardinas guisadas con cebolla y viandas, y bacalao guisado en leche de coco.
  - **Mariscos (9):** camarones al ron con piña, langosta en salsa de coco y recao, jueyes al ajillo, calamares a la
    plancha, pulpo a la gallega con papas, vieiras con mantequilla de parcha, almejas en salsa criolla, ostiones a la
    parrilla con mantequilla de ajo y carrucho al ajillo.
  - Menos sal o menos cantidad donde el sodio pasaba de ~900 mg (pulpo, bacalao, atún, tilapia, almejas, vieiras sin sal
    añadida); las sardinas rinden 6.
- **Nutrición** (`nutrition.js`): nuevos "atún fresco" (USDA yellowfin crudo: 109 kcal y 45 mg de sodio; antes contaba
  como atún de lata) y "vieiras" (USDA scallop crudo). También en `tools/usda/map.js`. El "Atún a la Plancha con Mojo de
  Recao", que ya estaba, ahora cuenta su atún como fresco.
- **Alérgenos** (`advisories.js`): las vieiras cuentan como moluscos.
- **Iconos:** los dibujos de pescado que había (guiso criollo, escabeche, salmón, vizcaína, empanado, filete con mojo,
  parrilla) y emojis para jueyes 🦀 y vieiras 🐚.
- **Familias** (`families.js`): "Almejas, mejillones y ostiones" pasa a "Almejas, mejillones, ostiones y vieiras".
  Ninguna receta anterior cambió.
- Fechas regeneradas y `node tools/prerender.js`: 1,216 páginas y `sitemap.xml` con 1,218 direcciones. Total: **1,198 →
  1,216 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 18 en ES y EN
  a 375 px.
### 2026-10-18 — v4.33.0 · Frituras, veganas, galletitas, carnes con conejo, aves y tragos
- *Pedido:* más frituras y aperitivos, veganas, vegetarianas, galletitas, carnes (con conejo), aves, cócteles y tragos.
- Quincuagésima cuarta tanda en `js/recipes-5.js` (versiones propias), 32 que no estaban:
  - **Frituras y aperitivos (7):** alcapurrias de camarones, pastelillos de guayaba y queso, empanadillas de pollo BBQ,
    arañitas de yuca (veganas), sorullitos rellenos de queso, tostones con camarones al ajillo y croquetas veganas de
    garbanzos y recao.
  - **Veganas y vegetarianas (5):** fricasé vegano de jaca, mofongo relleno de garbanzos (vegano), filetes de coliflor con
    mojo (vegano), piñón vegetariano de amarillos y espinaca, y quiche de calabaza y queso blanco (en Huevos). Con las
    arañitas y las croquetas son 5 veganas y 2 vegetarianas nuevas.
  - **Galletitas (4):** rellenas de dulce de piña, de pistacho, de chocolate blanco y macadamia, y saladitas de cheddar.
  - **Carnes (6):** conejo al ajillo, fricasé de conejo y conejo al horno con mojo de naranja agria (antes sólo había el
    conejo guisado), carne guisada en malta, cordero guisado y lengua guisada.
  - **Aves (4):** muslos glaseados con tamarindo, pechugas rellenas de espinaca y queso blanco, pato asado con naranja
    agria y ron, y pollo al horno con limón, ajo y recao.
  - **Cócteles (6):** coquito de calabaza, margarita de tamarindo, mojito de piña, mimosa tropical, old fashioned de ron
    con melao y ron sour de acerola.
  - Ajustes: el fricasé de jaca rinde 6, sin sal añadida y con agua en vez de caldo (bajó de ~1,360 a 570 mg de sodio);
    menos sal en la coliflor y en el borde de la margarita; el pato rinde 6.
- **Nutrición** (`nutrition.js`): "sirope simple" cuenta como almíbar y "amargo de angostura" se reconoce (unas gotas: no
  suma).
- **Corrección en el filtro de dieta** (`search.js`, `S_MEAT_RX`): "dorado" (el pez) ya no atrapa "ron dorado"; 6
  cócteles que ya había (ponche de ron, ponche de crema, zombi, ponche de guayaba, tamarindo con ron y coquito de café)
  salían como no vegetarianos y ahora sí lo son.
- **Iconos:** las nuevas usan dibujos que había (alcapurria, pastelillos, tostones rellenos, croqueta, jaca, coliflor,
  tarta salada, galletas, tragos); el conejo sale con 🐇.
- **Familias** (`families.js`): "tostones con" va con alcapurrias y frituras de plátano (se movió también "Tostones con
  Guacamole de Recao", que estaba en "otras frituras"); "piñón" con pasteles y pastelones; "quiche" con tortillas; "piña"
  en galletas de frutas; Papas ya no atrapa el fricasé de jaca. Ninguna otra receta cambió.
- **Asopao de Pollo** (`asopao-pollo`, en `js/recipes.js`) estaba en Arroces; pasa a **Sopas** (familia Asopaos), como
  los demás asopaos. Sopas 53 → 54 y Arroces 65 → 64.
- Fechas regeneradas y `node tools/prerender.js`: 1,198 páginas y `sitemap.xml` con 1,200 direcciones. Total: **1,166 →
  1,198 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 32 en ES y EN
  a 375 px.
### 2026-10-18 — v4.32.0 · Más arroces y habichuelas
- *Pedido:* más recetas de arroces y habichuelas.
- Quincuagésima tercera tanda en `js/recipes-5.js` (versiones propias), 16 que no estaban (había 56 arroces y 22 granos):
  - **Arroces (9):** arroz junto con habichuelas rosadas, arroz imperial boricua (con el arroz y el pollo del día
    anterior), arroz blanco con leche de coco (salado), arroz con pescado y recao, arroz con carne molida, arroz con
    chuletas ahumadas, pegao crujiente de arroz, arroz con lentejas y cebolla caramelizada (vegano) y arroz con pavo (con
    el pavo que sobra).
  - **Habichuelas y granos (7):** habichuelas rosadas desde cero (secas, en olla de presión, con remojo), potaje de
    habichuelas blancas con repollo y chorizo, habichuelas con bolitas de plátano, habichuelas rosadas con salchichas,
    habichuelas negras con calabaza y cilantro (veganas), gandules secos desde cero y habichuelas coloradas con patitas.
  - Menos sal o caldo donde el sodio pasaba de ~900 mg (arroz con pescado, arroz con chuletas, habichuelas con bolitas).
- **Nutrición** (`nutrition.js`, §8): nuevos granos secos crudos, "habichuelas rosadas/coloradas secas" (343 kcal) y
  "gandules secos" (343 kcal), con valores de USDA SR Legacy añadidos a mano; antes la tabla sólo tenía los de lata (92
  kcal) y los contaba igual. También están en `tools/usda/map.js` para la próxima vez que se regenere
  `js/nutrition-usda.js` (no se regeneró: hace falta descargar la base SR Legacy). La sopa de habichuelas coloradas, que
  lleva 1 libra de secas, pasa de 174 a 370 kcal por porción.
- **Iconos:** usan los dibujos de arroz y de granos que había (arroz con habichuelas, cremoso, con pescado, con carne,
  con cerdo, con ajo para el pegao, lentejas, arroz con pollo para el de pavo, habichuelas blancas y rosadas); antes 8
  arroces salían con 🍚.
- **Familias** (`families.js`, arroces): "Con pollo y carnes" incluye carne molida, chuletas, pavo y el imperial; "Con
  pescado y mariscos", pescado; "Con gandules, habichuelas y garbanzos", lentejas. Ninguna receta anterior cambió.
- Fechas regeneradas y `node tools/prerender.js`: 1,166 páginas y `sitemap.xml` con 1,168 direcciones. Total: **1,150 →
  1,166 recetas**.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 16 en ES y EN
  a 375 px con su nombre y su dibujo, sin desbordes ni errores de consola; las habichuelas desde cero muestran "1 h 15 min
  de cocina · 9 h 15 min en total (remojo)".
### 2026-10-18 — v4.31.1 · La portada vuelve a decir "Más de 1,000 recetas"
- *Pedido:* volver a poner "más de 1,000 recetas" en la portada (la revisión del sitio, v4.30, había puesto el total exacto).
- `js/app.js`: `publicRecipeCount()` vuelve a bajar el total al millar (1,150 → "1,000") y `statsHero` dice "Más de 1,000
  recetas tradicionales · 24 categorías" (EN "Over 1,000 traditional recipes"). El total exacto sigue en `#/admin`
  ("Recetas en la app") y en la página pública `/recetas`; la vista previa del enlace ya decía "Más de 1,000".
- *Verificado:* portada en ES y EN con "Más de 1,000" / "Over 1,000"; sin errores de consola.
### 2026-10-18 — v4.31.0 · Más postres y bizcochos
- *Pedido:* más recetas de postres y bizcochos.
- Quincuagésima segunda tanda en `js/recipes-5.js` (versiones propias, ya con `active`/`total`/`wait` de la v4.30), 16 que
  no estaban (había 123 postres y 42 bizcochos):
  - **Postres (9):** flan de guineo, tembleque de guayaba, mousse de guayaba, tiramisú de café boricua (sin huevo crudo),
    crema catalana de coco (las yemas hierven 1 minuto), helado de piña colada (sin máquina, sin alcohol), majarete de
    chocolate (con chocolate de taza), tarta de guineo y dulce de leche (sin horno, 12 porciones) y trufas de chocolate y
    coco.
  - **Bizcochos (7):** de batata con canela, de plátano maduro, de guanábana con crema, de maíz con coco, cupcakes de
    tembleque, ponqué de queso crema y bizcocho de jengibre y melao.
- **Alérgenos** (`advisories.js`): las soletillas (ladyfingers) cuentan como huevo; antes el tiramisú no salía con él.
- **Iconos:** 3 dibujos recoloreados de los que había (`ic-pos-tembleque-guayaba`, `ic-pos-mousse-guayaba`,
  `ic-pos-majarete-chocolate`); el flan de guineo usa el de flan de fruta, el tiramisú el del bizcocho mojado de café, la
  crema catalana el de flan, el ponqué de queso crema el del ponqué de mantequilla (salía 🧀) y la tarta 🥧. Los demás
  bizcochos usan 🍰 como la mayoría de los que había.
- **Familias** (`families.js`): la crema catalana va con tembleques y natillas; el tiramisú y la tarta de guineo con
  bizcochos y tartas; los bizcochos de guanábana y de plátano con los de frutas. Ninguna receta anterior cambió de familia.
- Fechas de ingreso regeneradas; `node tools/prerender.js`: 1,150 páginas en `receta/` y `sitemap.xml` con 1,152
  direcciones. Total: **1,134 → 1,150 recetas**.
- Nota: esta tanda se escribió primero sobre la 4.29.1 y se publicó en Vercel un momento sin la revisión del sitio
  (4.30.0, que estaba en GitHub y no en esta copia); se volvió a publicar la 4.30.0 enseguida y la tanda se rehízo encima.
- *Verificado:* `node tools/check-recipes.js` 0 errores y 0 avisos; nutrición 0 sin contar; navegador: las 16 en ES y EN
  a 375 px con su nombre y su dibujo, sin desbordes ni errores de consola.
### 2026-10-18 — v4.30.0 · Revisión del sitio: recetas sin cuenta, Google, tiempos reales, privacidad y accesibilidad
- *Pedido:* aplicar la revisión del sitio (versión 4.29.0) menos la sugerencia 6 (fotos de los platos).
- **Acceso (1):** la app se usa sin cuenta; la entrada sólo se abre para guardar en la nube, escribir o reportar reseñas,
  o `#/admin`, y se cierra con "Seguir sin cuenta" (§7.3).
- **Google y compartir (2, 3, 5):** página propia por receta en `/receta/<id>` con schema.org/Recipe, sitemap, robots,
  `/recetas`, búsqueda `?q=` y 404 con buscador; compartir da esa página, con título y descripción del plato (§7.15).
- **Instalar (4):** el manifiesto pasa a `"display": "standalone"` (§7.6, §10).
- **Tiempos (7):** `time` (texto) pasa a `active`/`total` en minutos y `wait`; rápidas por el total (§5).
- **Palabras (8):** "mojito isleño" → mojo isleño (también el id de la salsa); glosario de 25 palabras (§7.16).
- **Recetas incompletas (9):** la Sangría Tropical estaba completa (la revisión leyó el archivo en parte), pero ahora
  `tools/check-recipes.js` y `recipeComplete()` evitan que salga una receta a medias. Encontró y se arreglaron dos ids
  con acento (`pollo-fricasé`, `bilí`) y dos recetas sin tipo de espera.
- **Categorías (10):** ensaladas de mariscos a Ensaladas, pasteles a Carnes/Aves, coquito a Cócteles; `coquito-nutella`
  → `coquito-chocolate` (no lleva Nutella). Jugos tiene 30 recetas, no una: se queda (§6). Ids viejos con alias (§5).
- **Cantidades (11):** 88 líneas con cantidad de partida ("3 cucharadas de sofrito, o al gusto"), los adobos de pollo
  guisado, fricasé de cabro, pollo BBQ y carne de cerdo guisada desglosados, el chicharrón del mofongo, la miel de los tés.
- **Temperaturas (12):** sólo °F en las recetas (se quitó el único "(175°C)"); la app convierte también rangos y en el modo
  cocina.
- **Conteo (13):** el inicio dice el total exacto (1,134), sacado de los datos.
- **Buscador (14), "lo que tengo" (15), planes (16, 17), nutrición (18), reseñas (19):** §7.1, §7.11, §7.2, §8, §7.4.
- **Celular y accesibilidad (20–24):** 14 px mínimo, 44 px para tocar, lupa en pantallas pequeñas, temporizador que no
  late para siempre, enlaces subrayados, foco en tarjetas, tema oscuro, insignias al imprimir, versión sólo en el pie (§10).
- **Seguridad y privacidad (25–28):** reglas con `notBlocked()` y lecturas públicas sólo de lo publicado, probadas con el
  emulador (30 de 30); suspensión al momento; sin marca de "equipo de confianza"; `#/privacidad` con descargar y borrar
  la cuenta; consentimiento sólo con el registro del servidor; términos v2026-10-18.2 (§7.3, §7.14, §7.17).
  **Hay que publicar `firestore.rules`** en la consola de Firebase. Conviene que un abogado revise los términos y un
  dietista licenciado los objetivos de salud.

### 2026-10-18 — v4.29.1 · Anuncios para Facebook e Instagram
- *Pedido:* la publicidad recomendada para Facebook e Instagram, que llame la atención del público en general.
- `marketing/build-ads.js` arma cada anuncio en HTML con la identidad de la app (crema, achiote, verde plátano, bandera y
  los dibujos de los platos del sprite) y lo convierte en PNG exacto con Microsoft Edge sin ventana. Cinco conceptos:
  **Abuela** (nostalgia), **¿Qué cocino hoy?** (la nevera, la voz y la lista de compras), **Navidad boricua** (1 nov–6 ene),
  **Diáspora** (bilingüe) y **Comer balanceado** (planes, sin aludir a condiciones de salud), cada uno en feed 4:5
  (1080×1350) y en historias/reels 9:16 (1080×1920) con zona segura de 230 px arriba y 290 px abajo.
- `marketing/GUIA-ANUNCIOS.md`: textos (principal, título, descripción, botón y variante B), enlaces con UTM, públicos de
  Puerto Rico y de la diáspora, presupuesto de prueba, calendario, reglas de Meta (sin atributos de salud, sin promesas,
  sin alcohol, sin logo del USDA) y publicaciones orgánicas. La app no cambia.

### 2026-10-18 — v4.29.0 · Más salsas, aderezos y huevos
- *Pedido:* más recetas de salsas y aderezos y de huevos.
- Quincuagésima primera tanda en `js/recipes-5.js` (versiones propias), 16 que no estaban (había 64 salsas y aderezos y
  14 de huevos y queso):
  - **Salsas y aderezos (8):** salsa roja de tomate casera, salsa blanca (bechamel), salsa holandesa fácil con limón
    (las yemas se cocinan a 160 °F al baño de María), mojo verde de cilantro y recao, salsa de pimiento asado y
    almendras, aderezo César con queso del país (con mayonesa, sin huevo crudo), dip de guayaba picante para frituras y
    vinagreta cremosa de ajo asado y limón.
  - **Huevos (8):** huevos benedictinos boricuas en pan sobao (con la holandesa), arroz blanco con huevo frito y maduros,
    revoltillo criollo con sofrito y tomate, huevos hervidos duros y tiernos (7 y 11 minutos, baño de hielo), ensalada de
    huevo para emparedados, tortilla de vegetales al horno con queso del país, omelet de espinaca y champiñones, y
    huevos a la flamenca con jamón y guisantes.
  - Seguridad en los pasos: huevos hasta que la clara cuaje (160 °F en lo horneado), yema firme para embarazadas y niños
    pequeños, y la ensalada de huevo no más de 2 horas fuera de la nevera.
- **Nutrición:** 0 ingredientes sin contar (la holandesa de los benedictinos va como línea con sus ingredientes, para que
  cuente la mantequilla y salga el alérgeno de la leche). El aderezo César sale con pescado por la salsa inglesa.
- **Iconos** (`dessertIcons`, primero): las salsas usan el tazón de la salsa más parecida (cóctel para la roja, queso para
  la bechamel, mostaza y miel para la holandesa, cilantro para el mojo verde, agridulce para la de pimiento, ranch para
  el César, BBQ de guayaba para el dip); 🥚 huevos hervidos, 🥪 ensalada de huevo, tortilla doblada para el omelet,
  tortilla española para la de vegetales y la cazuela de los huevos habaneros para los de flamenca.
- **Familias:** "Huevos" ahora incluye "huevo frito" y "ensalada de huevo", y "Tortillas y revoltillos" el omelet (antes
  caían en "Quesos").
- Verificado: las 16 abren en ES y EN sin errores ni desbordes; 1,134 recetas sin ingredientes sin contar. Fechas de
  ingreso regeneradas. Total: **1,118 → 1,134 recetas**.

### 2026-10-18 — v4.28.0 · Términos y Condiciones, consentimiento y correo de confirmación
- *Pedido:* términos y consentimiento sobre el uso de la app (sobre todo los planes de comida) que el usuario acepte
  antes de entrar con su correo; guardar la aceptación como parte de la información de administrador del usuario; y un
  motor que le envíe por correo la confirmación de lo que aceptó, con su texto.
- `js/consent.js` (texto ES/EN, 3 casillas, correo), `js/consent-ui.js` (entrada, estado "consent", `consents/{uid}`,
  columna en `#/admin` y CSV, `#/terminos`), `api/consent-email.js` (función de Vercel con Resend) y reglas
  `consents` en `firestore.rules` (§7.14).
- **Pendiente del dueño:** publicar las reglas en Firebase y configurar Resend + `RESEND_API_KEY` en Vercel (§7.14);
  hasta entonces se guarda la aceptación en el navegador y el correo se reintenta al entrar.
- Verificado: los botones de entrar se encienden sólo con las tres casillas; estado "consent" con "Acepto y continúo";
  ES/EN; `#/terminos` con las 15 secciones; sin desbordes a 375 px; la función rechaza pedidos sin sesión, con otro
  método o con un token falso; el correo de muestra se genera bien.

### 2026-10-18 — v4.27.0 · Escuchar la receta, voz de hombre o mujer y comandos cortos
- *Pedido:* poder dictar (oír) las recetas por voz, escoger voz de hombre o de mujer, y hablarle con comandos cortos:
  continuar con el próximo paso, atrás o al comienzo.
- Botón **"Escuchar receta"** en cada receta; panel de **voz** (mujer/hombre, voz exacta, velocidad, probar); **comandos**
  siguiente/continúa, atrás, comienzo, "paso N", repite, ingredientes, temporizador, para y salir; lee fracciones y °F en
  palabras; no escucha mientras habla (§7.9). Las opciones escogidas de una sola elección se marcan con ✓ (antes ✕).
- Verificado en el navegador: los comandos llevan al paso correcto y el panel cambia a voz de hombre; la voz y el
  micrófono reales se prueban en el celular (el navegador de prueba no tiene voces ni micrófono).

### 2026-10-18 — v4.26.0 · Planes para autismo
- *Pedido:* crear planes para autismo, con el aviso de que realmente no existe una dieta que trate el autismo y las
  recomendaciones al escogerlo.
- Objetivo **Autismo** (13 objetivos): aviso en la tarjeta y recuadro con 7 recomendaciones; rutina (mismo desayuno y
  merienda), recetas sencillas, de sabor suave y aptas para niños, sin frituras, con topes de sodio y azúcar añadida; metas
  para niños de 2 a 13 años; revisión del día con fibra, calcio, vitamina D y el sodio para su edad (§7.2).
- Verificado: planes de 7 días con los 13 objetivos sin comidas vacías; en el navegador, sin errores ni desbordes.

### 2026-10-18 — v4.25.0 · Colesterol en los planes
- *Pedido:* incluir el colesterol en los planes.
- Los totales de cada día dicen los mg de colesterol y la revisión del día lo compara con 300 mg (valor diario de la FDA).
- Objetivo nuevo **Colesterol alto** (12 objetivos): poca grasa saturada (bajo 6 %), colesterol bajo 200 mg al día, sin
  frituras ni grasa trans, con tope de sodio por comida y más fibra; cada comida muestra su colesterol (§7.2).
- Verificado: planes de 7 días con los 12 objetivos sin comidas vacías; en el navegador, sin errores ni desbordes.

### 2026-10-18 — v4.24.0 · Herramientas de cocina, nutrición del USDA y salud de Puerto Rico
- *Pedido:* las recomendaciones 1–3 y 5–10 de la evaluación (interfaz y herramientas), los puntos 1–5 de la nutrición
  respaldada por el USDA, el enfoque de salud de Puerto Rico y las frutas y viandas de temporada; aclarar el uso sin internet.
- **Modo cocina** con temporizadores (también en los pasos), voz y manos libres (§7.9).
- **Lista de compras** que suma ingredientes por sección, y **Mi recetario** con colecciones, notas y "la hice", en la
  cuenta (§7.10). **Hay que publicar `firestore.rules`** (nuevo bloque `kitchen`) en la consola de Firebase.
- **"¿Qué tengo en la nevera?" y filtros** combinables (tiempo, dificultad, calorías, sin alérgenos, dieta, época, niños) (§7.11).
- **Medidas** en gramos/ml y °C (§8). **Dificultad** en los datos de cada receta.
- **Planes:** calendario de 7 días (pasar comidas de día, sobras), personas en casa, lista de compras del plan e imprimir;
  objetivos **Diabetes** (carbohidratos contados) y **Presión alta (DASH)**; revisión diaria contra las **Guías
  Alimentarias 2025–2030**; proteína mínima 1.2 g/kg (§7.2).
- **Nutrición del USDA:** 255 de 290 alimentos con su número de FoodData Central, parte comestible, colesterol, grasa
  trans, azúcar añadida, vitamina D, calcio, hierro y potasio; grupos de alimentos; descuento por hervir y escurrir;
  etiqueta como la de la FDA y fuentes por ingrediente (§8). Las calorías por porción cambian menos de 10 % en 1,024 de
  1,118 recetas; las que más bajan son las de carnes con hueso (codorniz, osobuco, pavo, chuletas), porque ahora se
  descuenta el hueso como hace el USDA. El bacalao se cuenta desalado.
- **De temporada en la isla** en el inicio y en los planes (§7.12).
- **Uso sin internet** (`sw.js`) y **barra de abajo** en el celular (§7.13); la cuenta entra sin señal en un navegador
  donde ya entró (§7.3).
- Verificado: 1,118 recetas sin ingredientes sin contar; las 1,118 abren en ES y EN a 375 px sin errores ni desbordes;
  planes de 7 días con los 11 objetivos sin comidas vacías; lista de compras, colecciones, notas, temporizadores y copia
  sin internet probados en el navegador.

### 2026-10-17 — v4.23.0 · Más carnes y aves
- *Pedido:* más recetas de carnes y aves.
- Quincuagésima tanda en `js/recipes-5.js` (versiones propias), 16 platos que no estaban (ya había 63 de carnes y 47 de
  aves):
  - **Carnes (8):** lomo de cerdo al horno con mojo de naranja agria, pernil al caldero (sin horno), pinchos de res con
    chimichurri de recao, costillas de cerdo al horno con mojo de ajo, cerdo agridulce con piña, res guisada en leche de
    coco y recao, albóndigas glaseadas con guayaba y chuletas al ajillo con limón.
  - **Aves (8):** pollo al horno con naranja agria y orégano brujo, pechugas en salsa de champiñones, pollo a la
    vizcaína, pollo mechado a la criolla (también de relleno), pollo "frito" al horno o en freidora de aire, albóndigas
    de pavo en salsa criolla (con avena), pollo guisado con garbanzos y muslos al horno con mojo de recao.
  - Temperaturas seguras en los pasos: cerdo y res 145 °F con reposo, carne molida 160 °F, pollo 165 °F (muslos 175 °F).
  - Las costillas rinden 8 porciones con menos aceite (509 kcal) y el pollo con garbanzos lleva sólo una pizca de sal
    (el adobo, la salsa y los garbanzos ya traen).
- **Iconos:** usan los dibujos de su tipo (`meatIcons`: asado, costillas, chuleta, albóndigas, pechuga, pollo asado,
  frito, fricasé). Se corrigieron dos: el lomo al horno salía con el de guiso (ahora el de asado) y las albóndigas de
  pavo con el de fricasé (ahora el de albóndigas: `aves` deja pasar `albondiga` a `dishIcons`).
- Fechas de ingreso regeneradas. Total: **1,102 → 1,118 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ("pollo" 7/7, "cerdo" 5/5, "res" 3/3, "freidora de aire" y
  "air fryer") ✔; navegador: los 16 en ES y EN a 375 px con su nombre y su dibujo, sin desbordes ni errores ✔.
### 2026-10-17 — v4.22.0 · Jugos naturales con su vaso y su fruta (no 🧃)
- *Pedido:* cambiar el icono de Jugos Naturales, que era 🧃 (jugo procesado de cajita), y que cada jugo tenga el icono
  más parecido a su receta.
- 30 dibujos nuevos en el sprite de `index.html` (`ic-jugo-*`), en el estilo del vaso del refresco de grosella: vaso de
  cristal con el color del jugo, hielo, sorbeto y la fruta de la receta en el borde (china, toronja, limón, piña, mangó,
  parcha, guayaba, guanábana, acerola, quenepa, coco, sandía, carambola, melón, lechosa, pitahaya, jobos, pomarrosa,
  zanahoria, tamarindo, jengibre, canela, menta; los jugos de dos frutas llevan las dos). El guarapo usa la caña de
  sorbeto y el agua de coco va en el coco verde con su sorbeto. `ic-jugo-natural` (jugo de china con su rueda) es el
  icono de la categoría y el de cualquier jugo nuevo que todavía no tenga dibujo. El refresco de grosella conserva el suyo.
- `js/app.js`: `categoryIcons.jugos = "svg:ic-jugo-natural"`; `dishIcon()` da a cada receta de jugos su
  `ic-jugo-<id>` (o el de la categoría); nueva `iconArt()` para pintar emoji o dibujo, que usan `coverHTML()` y el
  encabezado de la categoría (`.cat-dot-svg`). El guarapo con ron (cócteles) y cualquier nombre con "jugo" fuera de la
  categoría ya no usan 🧃. Antes 13 jugos y la categoría salían con 🧃 y otros con un emoji suelto (🍋, 🥥, 🍍…).
- *Verificado:* los 30 jugos con su dibujo y ninguno sin él; la tarjeta de la categoría y el encabezado en los
  resultados con el vaso; ninguna receta con 🧃; a 375 px y sin errores de consola ✔.
### 2026-10-17 — v4.21.0 · Más sopas y asopaos, pastas y panes dulces
- *Pedido:* más recetas de sopas y asopaos, pastas y panes dulces.
- Cuadragésima novena tanda en `js/recipes-5.js` (versiones propias), 16 recetas que no estaban:
  - **Sopas y asopaos (6):** asopao de res, asopao de chuletas ahumadas, asopao de habichuelas rosadas con calabaza
    (vegano), sopa de pavo con arroz y vegetales (la de después de Acción de Gracias), crema de batata y jengibre y
    sopa de camarones con coco y recao.
  - **Pastas (5):** espaguetis con pernil a la criolla, fettuccine con camarones en salsa de ajo y recao, pasta con pesto
    de recao y queso del país, espaguetis al horno con queso y pasta con pollo en salsa de coco y achiote.
  - **Panes dulces (5):** trenza de pan dulce con guayaba y queso, pan de anís, pan dulce de ron con pasas (glaseado
    sin cocinar: sólo leche para niños), pan de parcha con glaseado de parcha y pan de medianoche.
  - Menos caldo y sal donde el sodio pasaba de ~1,000 mg (asopao de habichuelas, sopa de pavo, crema de batata);
    "pasta tipo fettuccine" para que cuente en la nutrición y salga con gluten; el pesto y el fettuccine rinden 6
    porciones (436 y 505 kcal).
- **Iconos:** 3 dibujos de asopao `ic-sop-*` (res, chuletas, habichuelas con la hojita vegana); antes los tres salían
  con el del asopao de pollo. 🍠 para la crema de batata y 🍝 para las pastas de pesto y de pollo (salían 🧀 y 🍗).
  Los panes usan 🍞 como los demás.
- **Familias** (`families.js`): "Con queso y jamón" ya no toma la trenza de guayaba, que va con los panes dulces.
- Fechas de ingreso regeneradas (`tools/recipe-dates.js`). Total: **1,086 → 1,102 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ("asopao" 3/3, "pasta" 5/5) ✔; familias ✔; navegador: las 16
  en ES y EN a 375 px con su nombre y su dibujo, sin desbordes ni errores de consola ✔.
### 2026-10-17 — v4.20.0 · Ficha interna de las recetas (temporada y fecha de ingreso) y más jugos y bebidas tropicales
- *Pedido:* evaluar internamente en cada receta la temporada recomendada y la fecha de ingreso a la app, y poder
  trabajarlo como administrador; y más recetas de jugos y bebidas tropicales.
- Nuevo `js/recipe-admin.js` (§7.8): sección **Recetas** en `#/admin` con temporada recomendada (automática o corregida),
  fecha de ingreso, buscador, filtros, orden, resumen por día y CSV; "Cambiar temporada" guarda en `recipeMeta/{id}`.
  `plans.js`: `SEASON_KEYS`, `autoSeasonsOf()`, `RECIPE_SEASONS`, `seasonsOf()` e `inSeasonOf()` (los planes usan la
  temporada corregida). `auth.js`: `loadRecipeSeasons()` al entrar y la sección en `renderAdminShell()`.
  `firestore.rules`: `match /recipeMeta/{id}` (hay que publicarla). Nuevo `tools/recipe-dates.js` → `js/recipe-dates.js`
  (fechas del historial de git); `tools` en `.vercelignore`; §11 paso 7. CSS `.admin-recipes`, `.ra-*`.
- Cuadragésima octava tanda en `js/recipes-5.js` (versiones propias), 16 bebidas sin alcohol:
  - **Jugos (10):** lechosa con china, pitahaya y limón, jobos, pomarrosa con limón, mangó y parcha, zanahoria con china
    y jengibre, limonada de melao y jengibre, agua de coco con piña y menta, refresco de parcha con agua de coco y agua
    de cáscara de piña con canela y jengibre (aprovecha la cáscara; se guarda en la nevera porque fermenta).
  - **Bebidas (6):** batida de acerola y guineo, batida verde tropical (espinaca, piña y mangó, vegana), batida de
    guineo, avena y maní, batida de tamarindo, batida de mangó y coco (sin leche) y horchata de arroz y coco.
- **Nutrición:** nueva "leche de coco de cartón" (la de beber, mucho más ligera que la de lata: la batida de mangó y coco
  bajó de 358 a 144 kcal). **Iconos:** 🥛 para la horchata (salía 🍚) y 🥕 para el jugo de zanahoria; los demás, 🧃 y 🥤
  como los otros jugos y batidas.
- Total: **1,070 → 1,086 recetas** (la portada sigue con "Más de 1,000").
- *Verificado:* panel con Firestore simulado: 1,086 recetas con su temporada y fecha, resumen por día, buscar y filtrar;
  corregir la piragua de coco a Navidad + verano → se guarda en `recipeMeta`, sale "corregida", el filtro "Corregidas a
  mano" la encuentra y el plan la pone en Navidad; "Todo el año" quita las demás; "Volver a la automática" la borra;
  `loadRecipeSeasons()` aplica las guardadas; a 375 px en fichas sin desbordes ✔. Bebidas: datos en Node ✔ (0 sin
  contar), buscador ("jugos", "batida", "agua de coco") ✔, las 16 en ES y EN a 375 px sin errores ✔.
### 2026-10-17 — v4.19.0 · Planes: cambiar una comida por otra sugerida
- *Pedido:* que en los planes se pueda cambiar lo sugerido y escoger de una lista de sugeridos.
- `js/plans.js` (§7.2): botón **Cambiar** en cada comida y acompañante, con la lista de los otros sugeridos que cumplen
  el objetivo y los ajustes, sin repetir lo que ya hay ese día; "Ver más sugeridos" y "Ver receta"; al escoger, la
  porción se recalcula, el cambio se guarda en el plan y en la cuenta y sale el aviso "Listo: … está en su plan". Textos
  ES/EN `swap*`. `index.html`: icono `i-swap`. CSS `.plan-swap-*`, `.plan-meal-top`, `.plan-side-main`.
- *Verificado (navegador, 375 px):* cambiar el almuerzo → la lista trae 8 (16 con "Ver más"), se guarda en
  `plan.saved` y en el navegador, y sigue igual al recargar; cambiar un acompañante → sólo ofrece los del grupo del
  objetivo (rebajar: ensalada, vegetal o granos); un plato completo quita los acompañantes y uno que no lo es los recibe;
  en 7 días y en inglés funciona y no repite recetas en el día; la lista va a todo el ancho y sin desbordes; sin errores
  de consola ✔.
### 2026-10-17 — v4.18.0 · Más pescados y mariscos
- *Pedido:* más recetas de pescados y mariscos.
- Cuadragésima séptima tanda en `js/recipes-5.js` (versiones propias), 16 platos que no estaban (ya había 115 recetas con
  pescado o mariscos):
  - **Bacalao (3):** pastelón de bacalao con amarillos (el de Cuaresma), bacalao en escabeche y bacalao rebozado.
  - **Pescado (7):** filete encebollado, pescado sudado a la criolla, filete con costra de platanutres, dorado con costra
    de coco y salsa de piña, atún a la plancha con mojo de recao, tortitas de atún con maíz y tilapia en salsa de
    alcaparras y limón.
  - **Mariscos (5):** camarones glaseados con guayaba, pulpo guisado a la criolla con papas, ensalada fría de pulpo y
    mangó, carrucho en salsa de coco y colas de langosta rellenas al horno. **Sopas (1):** sancocho de pescado con viandas.
  - Avisos en los pasos: cómo desalar el bacalao, temperatura del pescado (145 °F) y de la langosta (140 °F), atún poco
    hecho y embarazo o defensas bajas, temporada legal del carrucho, espinas en el sancocho. Las alertas de
    `advisories.js` (ciguatera en mero y dorado, mercurio en el atún, veda del carrucho y la langosta) salen solas.
- **Iconos:** 11 dibujos nuevos `ic-mar-*` en el estilo de los `ic-pez-*`; el bacalao en escabeche, las tortitas de atún
  y la tilapia reutilizan `ic-pez-escabeche`, `ic-pes-tortitas` e `ic-pes-tilapia` (la tilapia salía con 🍅). La langosta
  usa 🦞 y el sancocho el dibujo de sancocho.
- La portada sigue diciendo "Más de 1,000 recetas"; el total exacto (1,070) está en `#/admin`.
- Total: **1,054 → 1,070 recetas**.
- *Verificado:* datos en Node ✔ (ids únicos, ES/EN parejos, 0 sin contar); buscador: "bacalao" trae los 3 nuevos,
  "pescado" los 16, "pulpo" los 2 ✔; navegador: los 16 en ES y EN a 375 px con su nombre y su dibujo, sin desbordes ni
  errores de consola ✔.
### 2026-10-17 — v4.17.0 · "Más de 1,000 recetas" al público; el total exacto, sólo para administradores
- *Pedido:* poner "más de 1,000 recetas tradicionales" en vez del total, y guardar el total en la cuenta de administrador.
- `js/app.js`: `publicRecipeCount()` baja el total al millar (1,054 → "1,000"; con menos de 1,000, a la centena). La
  portada dice "Más de 1,000 recetas tradicionales · 24 categorías" (EN "Over 1,000 traditional recipes"). `js/auth.js`:
  la vitrina de la entrada dice "Más de 1,000 recetas boricuas"; en `#/admin` hay un cuarto total, **Recetas en la app**,
  con el número exacto. CSS: los totales del panel en 4 columnas (2 en el celular). La vista previa del enlace ya decía
  "Más de 1,000 recetas" (v4.14.0).
- *Verificado:* portada ES y EN, vitrina de la entrada y panel de administración con datos simulados ("1,054 Recetas
  en la app"; 2 × 2 a 375 px) ✔.
### 2026-10-17 — v4.16.0 · Más recetas de frutas tropicales
- *Pedido:* más recetas de frutas tropicales.
- Cuadragésima sexta tanda en `js/recipes-5.js` (versiones propias), 16 recetas con las frutas de la isla que menos
  aparecían (ya había muchas de mangó, piña, parcha y coco):
  - **Frutas (6):** quenepas en almíbar con canela, dulce de jobos, jalea de pomarrosa, bowl de pitahaya con mangó, coco
    y granola, piña rellena de frutas tropicales y pinchos de frutas tropicales con salsa de parcha.
  - **Ensaladas (3):** carambola, pepino y menta; lechosa verde con recao y maní; sandía, queso del país y menta.
  - **Postres (2):** helado de mamey (sin máquina) y crema fría de caimito. **Bebidas (2):** batida de níspero y batida
    de anón. **Jugos (1):** melón con limón y menta. **Salsas (2):** pico de gallo de frutas tropicales y chutney de mangó
    y piña.
  - Avisos en los pasos: semilla de la quenepa y niños pequeños, carambola y enfermedad de los riñones, semillas del
    anón (no licuarlas), látex de la lechosa verde y del caimito, lavar la cáscara del melón, miel y bebés. Las alertas
    de `advisories.js` de quenepa, carambola y miel salen solas.
- **Nutrición:** nuevos jobo, pomarrosa, pitahaya, caimito, níspero, anón y melón (por 100 g de pulpa). Ninguna receta
  anterior cambia (se revisó que "marañón" no tome el anón).
- **Iconos:** 11 dibujos nuevos `ic-fr-*` (frascos de quenepas, jobos y pomarrosa, bowl de pitahaya, pinchos de frutas,
  tres ensaladas, helado de mamey, crema de caimito y pico de gallo); el jugo de melón usa 🍈. Antes de los dibujos, los
  pinchos de frutas salían con el de pinchos de cerdo y tres dulces con la piña de la categoría.
- Total: **1,038 → 1,054 recetas**.
- *Verificado:* datos en Node ✔ (ids únicos, ES/EN parejos, 0 sin contar); buscador: "quenepa", "pitahaya"/"dragon
  fruit", "carambola", "nispero" y "frutas tropicales" las encuentran ✔; "Combina mejor con" en las dos salsas nuevas ✔;
  navegador: las 16 en ES y EN a 375 px con su nombre y su dibujo, sin desbordes ni errores de consola ✔.

### 2026-10-17 — v4.15.0 · Más postres puertorriqueños
- *Pedido:* más recetas de postres puertorriqueños.
- Cuadragésima quinta tanda en `js/recipes-5.js` (versiones propias), 16 postres tradicionales que no estaban:
  - **Postres (13):** nísperos de batata, dulce de maní con melao, limber de maní, de tamarindo y de guayaba, piragua
    de coco, buñuelos de plátano maduro en almíbar, budín de yuca y coco, natilla de coco, pasta de guayaba con queso del
    país, helado de maní (sin máquina), tembleque de chocolate y arroz con dulce de coquito (sin alcohol).
  - **Bizcochos (2):** hojaldre boricua (el bizcocho de especias de Navidad y bodas, no la masa de hojaldre) y bizcocho
    navideño de frutas al ron.
  - **Frutas (1):** dulce de pajuil (cajuil) en almíbar, con el aviso de no tocar la nuez cruda.
- **Nutrición:** nuevos pajuil, frutas abrillantadas y ciruelas secas. El helado de maní rinde 10 porciones (~410 kcal).
- **Alérgenos:** maní en el dulce, el limber y el helado; nueces en el bizcocho de frutas; el pajuil sale con frutos
  secos (la fruta del marañón) a propósito. Alcohol cocido en el hojaldre (vino) y el bizcocho de frutas (ron).
- **Iconos:** 11 dibujos nuevos `ic-pos-*` (nísperos, dulce de maní, tres limbers, piragua de coco, tembleque de
  chocolate, guayaba con queso, frasco de pajuil, hojaldre y bizcocho de frutas). Los demás usan los de su tipo
  (budín, natilla, arroz con dulce, 🍩, 🍨).
- **Buscador** (`search.js`): la idea "Navidad" incluye ahora nísperos, el hojaldre boricua, los bizcochos navideños y
  los pasteles veganos (antes "pastel(es)? de" los dejaba fuera).
- Total: **1,022 → 1,038 recetas**.
- *Verificado:* datos en Node ✔ (ids únicos, ES/EN parejos, 0 sin contar); buscador: "navidad"/"christmas" 78 recetas con
  las 6 nuevas de Navidad, "limber" 8, "mani" incluye los 3 de maní, "playa" incluye la piragua ✔; navegador: los 16 en
  ES y EN a 375 px con su nombre y su dibujo, sin desbordes ni errores de consola ✔.

### 2026-10-17 — v4.14.0 · Más recetas veganas y vegetarianas
- *Pedido:* más recetas veganas y vegetarianas.
- Cuadragésima cuarta tanda, en el archivo nuevo `js/recipes-5.js` (versiones propias; `<script>` después de
  `recipes-4.js`), 16 recetas de platos que no estaban:
  - **Veganas (9), sin carne, lácteos, huevo ni miel:** arroz con gandules vegano (achiote, aceitunas y alcaparras en
    vez de tocino), pasteles veganos de garbanzos y setas, tripleta vegana de setas, tofu y jaca, setas encebolladas con
    viandas, crema vegana de calabaza, coco y jengibre, ensalada de papa vegana (mayonesa de aquafaba), rellenos de papa
    veganos con picadillo de lentejas (la maicena pega el pan rallado), budín de pan vegano con coco y pasas, y galletitas
    veganas de avena, guineo y coco.
  - **Vegetarianas (7):** canelones de espinaca y ricotta en salsa criolla, piononos de espinaca y queso, huevos rancheros
    a la boricua con habichuelas y tostones, macarrones con queso y calabaza al horno, sándwich de queso de freír,
    aguacate y tomate, ensalada de aguacate, mangó y queso del país, y croquetas de calabaza y queso.
  - Redacción: en las veganas el pan dice "revise que sea vegano" (no "sin leche ni huevo", que `advisories.js` leería
    como alérgenos); menos sal y caldo donde el sodio pasaba de ~1,000 mg por porción.
- **Iconos:** 9 dibujos con la hojita verde (`ic-vg-*` de la tanda 44): tres reutilizan con `<use>` el del plato
  tradicional (arroz con gandules, rellenos de papa, budín) y seis son nuevos (pasteles, tripleta, setas encebolladas,
  crema de calabaza, ensalada de papa, galletitas). Las vegetarianas usan los de su tipo (🍝, piononos, 🍳, 🥪, 🥗, 🥟).
- **Vista previa del enlace** (§7.7): `og:title`, `twitter:title`, `og:image:alt` y la imagen dicen ahora "Más de 1,000
  recetas", para no rehacerlas en cada tanda.
- Total: **1,006 → 1,022 recetas**.
- *Verificado:* datos en Node ✔ (ids únicos, ES/EN parejos, 0 sin contar); las 9 veganas sin alérgeno de leche ni huevo
  y en "vegano"/"vegana", las 7 vegetarianas fuera de "vegano" y las 16 en "vegetariano" ✔; familias de cada categoría
  ✔; navegador: las 16 en ES y EN a 375 px con su nombre, su dibujo, sin desbordes ni errores de consola ✔.

### 2026-10-17 — v4.13.0 · Pantalla de entrada con lo que trae la app
- *Pedido:* punto 3 de la revisión de la publicidad, opción A: que la pantalla de entrada muestre qué hay adentro.
- `js/auth.js`: `SHOWCASE_DISHES` y `showcaseHTML()` (§7.7), textos ES/EN `show*`. CSS `.gate-show`, `.gate-dishes`,
  `.gate-points`, `.gate-free`. `APP_VERSION` 4.13.0 en `app.js` e `index.html`.
- *Verificado (vista de celular):* entrada con 4 platos y 4 puntos ("1,006 recetas boricuas… en 24 categorías"), EN ✔;
  con user agent de Instagram el aviso sale primero y luego la vitrina; sin desbordes a 375 px ni errores de consola ✔.

### 2026-10-17 — v4.12.0 · La app muestra la versión de la arquitectura
- *Pedido:* actualizar la versión de la app según este documento. Decía "Versión 2.0 · Revisada el 10 de octubre de
  2026" desde la v2.0.0; ahora "Versión 4.12.0 · Revisada el 17 de octubre de 2026" (EN "Version 4.12.0 · Revised
  October 17, 2026") en la portada y el pie.
- `js/app.js`: constantes `APP_VERSION`, `APP_REVISED` y `revisedOn()`; `author` y `footer` (ES/EN) las usan.
  `index.html`: texto inicial de `#site-author` y `#footer-text`. Regla de versión arriba de este registro.
- *Verificado:* portada y pie en ES ("Versión 4.12.0 · Revisada el 17 de octubre de 2026") y EN ("Version 4.12.0 ·
  Revised October 17, 2026") al cambiar de idioma; sin errores de consola ✔.

### 2026-10-17 — v4.11.0 · Dominio propio: recetariodeaqui.com
- *Pedido:* poner la app en un dominio económico; se compró `recetariodeaqui.com` en Vercel.
- Vercel: `recetariodeaqui.com` y `www.recetariodeaqui.com` añadidos al proyecto (`vercel domains add`). Nuevo
  `vercel.json`: `www` y `recetario-de-aqui.vercel.app` redirigen (308, con la ruta y la consulta) a
  `https://recetariodeaqui.com/`. El patrón es `"/(.*)"` → `/$1`: con `"/:path*"` la página principal `/` no se
  redirigía (Vercel servía `index.html` directamente). `index.html` (`canonical`, `og:*`, `twitter:image`) e `install.js` (`APP_URL`) usan el
  dominio nuevo. Firebase: dominios autorizados añadidos en la consola (§7.3, paso 3). Sin ellos el enlace por correo no
  se envía (`UNAUTHORIZED_DOMAIN`, comprobado con `accounts:sendOobCode`); `auth.js` ahora explica ese error
  (`auth/unauthorized-continue-uri`) y el de límite diario de enlaces (`auth/quota-exceeded`) en vez del mensaje general.
- Quien ya había entrado en `vercel.app` tendrá que entrar otra vez (la sesión es por dominio); su plan está en su cuenta.
- *Verificado:* Firebase lista los 6 dominios autorizados (`recetariodeaqui.com` y `www` incluidos);
  `recetario-de-aqui.vercel.app/` y `/?instalar` → 308 a `https://recetariodeaqui.com/` (con `?instalar`); `www` → 308;
  `https://recetariodeaqui.com/` 200 con `og:url` nuevo; `icons/og-image.png` 200 ✔.

### 2026-10-17 — v4.10.0 · Anuncios: vista previa del enlace y entrada desde Facebook/Instagram
- *Pedido:* revisar la publicidad en Facebook e Instagram y arreglar (1) la entrada desde el navegador interno y (2) la
  vista previa del enlace.
- `index.html`: etiquetas Open Graph, `twitter:*` y `canonical`. Nuevo `icons/og-image.png` (1200×630).
- `js/auth.js`: `externalBrowserURL()` e `inAppNoticeHTML()` en la pantalla de entrada; `signInWith()` no abre Google
  dentro de Facebook/Instagram; textos ES/EN `inApp*`, `openChrome`, `openSafari`. CSS `.inapp-*` (§7.7).
- *Verificado (vista de celular, user agent cambiado):* Android + Facebook (`FB_IAB/FB4A`) → aviso con "Abrir en Chrome"
  (`intent://…package=com.android.chrome…`); tocar Gmail → mensaje, sin ir a Google; iPhone + Instagram → "Abrir en Safari"
  (`x-safari-https://…`, sin `fbclid` ni `#/receta/…`); EN ✔; Chrome normal en Android → sin aviso; sin desbordes a
  375 px ni errores de consola ✔. No probado dentro de las apps reales de Facebook e Instagram.

### 2026-10-17 — v4.9.0 · Crear el icono de la app en el celular
- *Pedido:* que quien vea la publicidad en el celular tenga un botón para guardar el enlace y crear un icono en su
  celular.
- Nuevo `js/install.js` (§7.6): guía paso a paso según el equipo (Facebook/Instagram, iPhone, Android, computadora),
  Copiar y Compartir el enlace, `beforeinstallprompt` cuando exista y apertura automática con `?instalar`. `index.html`:
  icono `i-phone`, botón en el pie y `<script src="js/install.js">` antes de `auth-config.js`. `auth.js`: botón en
  `gateShell()`. `app.js`: texto `navInstall`. CSS `.install-*` y `.footer-install`.
- *Verificado (vista de celular, Android emulado):* `/?instalar=1` abre la guía con los pasos de Android y deja la barra en
  `/`; con el *user agent* cambiado: iPhone/Safari → pasos de Compartir sin la nota de Safari; Facebook (FBAN) e Instagram
  → "Primero ábralo en su navegador"; computadora → enlace y sin botón en la entrada; Copiar el enlace copia
  `https://recetario-de-aqui.vercel.app/`; sin errores de consola ✔. No probado en un iPhone o Android reales.

### 2026-10-17 — v4.8.1 · Correo de contacto
- *Pedido:* poner en la app el correo recetariodeaqui@gmail.com.
- `js/app.js`: constante `CONTACT_EMAIL` y texto `contactLabel` (ES "Contacto:", EN "Contact:"). `index.html`: línea
  `.footer-contact` en el pie con enlace `mailto:`. `js/auth.js`: `gateShell()` añade al final de toda pantalla de entrada
  "¿Preguntas o problemas para entrar? Escríbanos a …" (EN "Questions or trouble signing in? Write to us at …"), así lo ve
  también quien todavía no ha entrado. CSS `.footer-contact` y `.auth-contact`.
- *Verificado:* pantalla de entrada en ES y EN a 375 px con el enlace `mailto:recetariodeaqui@gmail.com`, sin desbordes ni
  errores de consola; pie con "Contacto: recetariodeaqui@gmail.com" en blanco sobre el fondo oscuro ✔.

### 2026-10-17 — v4.8.0 · Foto en las reseñas (tomada o subida, achicada antes de subirse)
- *Pedido:* que en la reseña se pueda subir una foto o tomarla, y convertirla al subirla a una resolución más baja para
  ocupar menos espacio.
- Nuevo `js/photo.js` (§7.5): `shrinkPhoto()` achica en el navegador a ≤ 1024 px y ≈ 120 KB en WebP/JPEG, respeta la
  orientación y quita los metadatos. `js/reviews.js`: botones Tomar foto / Subir foto / Cambiar / Quitar, vista previa,
  miniatura en la reseña y en `#/admin`, vista grande en `<dialog>`, guardado y borrado en batch con `reviewPhotos/{id}`
  y campo `hasPhoto`. `index.html`: iconos `i-camera`, `i-image` y `<script src="js/photo.js">`. CSS de la foto.
- `firestore.rules`: `hasPhoto` en las reseñas y regla nueva `match /reviewPhotos/{rid}` (**hay que publicarlas**).
- *Verificado (Firestore simulado, sin cuentas reales):* motor: 4032 × 3024 de 8.4 MB → 1024 × 768 WebP de 98 KB;
  1500 × 2000 PNG de 8.1 MB → 614 × 819 de 101 KB; texto → `type`; JPG dañado → `decode`. Formulario: escoger foto →
  "Preparando la foto…" → vista previa y "Foto lista"; enviar → batch de 2 (reseña `pending` + foto); editar sin tocarla
  la conserva (batch de 1); Quitar foto → borra la foto y `hasPhoto: false`; borrar la reseña (autor y administrador)
  borra las dos; foto ajena publicada → miniatura y vista grande centrada; EN a 375 px sin desbordes ni errores ✔.

### 2026-10-15 — v4.7.0 · Reseñas de la app y de las recetas
- Nuevo `js/reviews.js` (§7.4): estrellas (1–5) + comentario opcional + nombre que escribe la persona, para la app
  (sección `#opiniones` del inicio y enlace "Opiniones" en el pie) y para cada receta (resumen bajo los alérgenos y
  sección al final). Una por persona y receta; se edita o se borra. Aprobación previa: quedan pendientes hasta que un
  administrador las aprueba en `#/admin` → "Reseñas pendientes".
- `firestore.rules`: regla nueva `match /reviews/{rid}` (hay que publicarla en la consola de Firebase). `index.html`:
  `#recipe-rating`, `#recipe-reviews`, `#opiniones`, icono `i-star` y `<script src="js/reviews.js">`. `app.js`:
  `renderModal()` llama a `renderRecipeReviews()`; texto `navReviews`. `auth.js`: ganchos en `onUser()`,
  `renderAuthTexts()`, `renderAdminShell()` y `loadAdminData()`. CSS de estrellas, formulario, lista y panel.
- *Verificado (Firestore simulado, sin cuentas reales):* la app con 2 publicadas y 1 pendiente → se ven 2 (4.5 ★);
  sin estrellas o con nombre de 1 letra → mensaje; enviar → "Pendiente de aprobación" con Editar/Borrar; editar
  conserva `createdAt` y vuelve a `pending`; nombre y comentario con HTML se muestran como texto; en `#/admin` salen las
  2 pendientes ("editada" en la que se editó), Aprobar → publicada (4.7 ★, 3 reseñas) y Borrar → eliminada; receta con
  acento en el id (`pollo-fricasé`) en EN a 375 px: resumen 4.0 ★, formulario con estrellas, sin desbordes ni errores ✔.

### 2026-10-15 — v4.6.2 · Los administradores no cuentan como uso
- Al entrar, se ve primero si la cuenta es de administrador; si lo es, no se suma su uso ni se crea su registro
  (`recordUse(user, isAdmin)`). En `#/admin`, la columna "Veces" muestra "—" para los administradores (también en el
  CSV) y "Usos en total" y "Activos en 7 días" cuentan sólo a los demás. "Usuarios" sigue siendo el total de cuentas.
- *Verificado (Firestore simulado):* administrador con registro → 0 escrituras; administrador nuevo → no se crea
  registro; usuario → `count` sube 1 ✔. Panel con 2 administradores (120 y 40 usos) y 2 usuarios (9 y 3): "—" en los
  administradores, 12 usos, 1 activo en 7 días, 4 usuarios ✔; sin errores de consola ✔.

### 2026-10-15 — v4.6.1 · Entrar con Yahoo
- `AUTH_CONFIG.providers.yahoo = true`: la pantalla de entrada muestra "Yahoo Mail" debajo de Gmail.
- Microsoft (Outlook/Hotmail) sigue apagado: Firebase responde "configuration is not found", es decir, el proveedor no
  quedó guardado en *Authentication → Método de acceso*. Se enciende con `microsoft: true` cuando lo esté.
- *Verificado:* `createAuthUri` da Google ✔, Yahoo ✔ (api.login.yahoo.com con el `redirect_uri` de Firebase) y
  Microsoft ✘; en localhost el botón de Yahoo lleva a "Sign in | Yahoo" (con la ventana emergente bloqueada, por
  redirección) ✔; sin errores de consola ✔.

### 2026-10-15 — v4.6.0 · Buscador más rápido y certero, recetas que abren arriba, logo de Gmail e icono de la app
- **Buscador:** ignora frases de conversación ("tengo pollo y papas": 37 resultados en vez de 232; "qué hago con plátano
  y queso": 14 en vez de 215); corrige por cómo suena (poyo → pollo, vacalao → bacalao, abichuelas → habichuelas); la
  palabra que nombra una categoría pone esa categoría primero ("arroz" → Arroz con Gandules); la frase de desempate usa
  la palabra corregida. En la interfaz: escribir quita la categoría elegida (con Postres elegida, "pollo" daba 0), espera
  180 ms a que se deje de escribir y busca desde 2 letras, esconde categorías y rápidas para que los resultados queden
  debajo del buscador (de >1,000 px a ~230 px en el celular) y dibuja 30 tarjetas con "Ver más resultados". Buscar ya
  costaba ≤ 8 ms; lo lento era dibujar (1,006 tarjetas ≈ 105 ms en computadora, varias veces más en el celular).
- **Recetas en el celular:** abrían deslizándose desde la posición anterior (≈ 0.7 s) por `scroll-behavior: smooth`; se
  veía el final y al tocar se quedaba abajo. `jumpTo()` salta arriba al instante; "Atrás" vuelve al mismo punto.
- **Entrada:** el botón de Gmail lleva el logo original (la "M" de cuatro colores) en vez de una "G" de texto.
- **Icono de la app:** `apple-touch-icon`, iconos de Android y `manifest.webmanifest` con la bandera; antes el celular
  mostraba una letra o una captura de la página.
- *Verificado:* a 375 px, abrir una receta desde abajo de Postres deja la página en 0 desde el primer cuadro y "Atrás"
  vuelve a la misma posición ✔; 48 búsquedas de este documento (grosella, sin horno, mocktail, vegano, tés, "X para Y",
  empanados, bbq, loíza, alérgenos, ideas…) siguen dando lo mismo ✔; "Ver más" añade 30 ✔; pantalla de entrada con el
  logo de Gmail ✔; manifiesto e iconos servidos (200, tipos correctos) ✔; sin errores de consola ✔.

### 2026-10-12 — v4.5.1 · El último plan se conserva al volver a entrar
- *Problema:* al entrar otra vez el mismo día no salía el último plan. Causas: (1) "Salir" cancelaba la subida pendiente
  (0.8 s) y borraba la copia del navegador; (2) al entrar, antes de leer la cuenta, se armaba un plan de fábrica que
  contaba como más reciente y se subía encima del de la cuenta.
- Cada usuario tiene su copia en el navegador (`rcb.plan.<uid>`; la anónima `rcb.plan` se hereda la primera vez).
  `plan.ts` marca el último cambio **de la persona** (`savePlan(true)` del plan armado solo no lo cambia); al entrar se
  usa la copia más reciente, cuenta o navegador. Mientras se lee la cuenta no se sube nada (`planLoading`).
- `flushPlanSave()` sube lo pendiente al salir, al cerrar o esconder la página. Si la cuenta lo rechaza
  (`permission-denied`), un aviso dice que el plan quedó en el navegador (revisar las reglas de Firestore).
- *Verificado (Firestore simulado con lectura lenta):* escoger Vegano, 7 días y "Otro plan", salir y entrar → mismo plan;
  igual con el navegador borrado (sólo desde la cuenta); otra persona en el mismo navegador ve el de fábrica; y la
  primera, de nuevo, su último plan ✔.

### 2026-10-12 — v4.5.0 · Planes: dieta Normal/Vegetariano/Vegano y plan que cambia cada día o cada 7 días
- *Pedido:* en Preferencias, además de Vegetariano, incluir Vegano y Normal (cualquier receta sugerida al azar); que el
  plan cambie a otras recetas al azar el próximo día (1 día) o los próximos 7 días (7 días), y que se guarde.
- Preferencias: dieta Normal / Vegetariano / Vegano (§7.2). Plan del período con fechas, guardado en el navegador y en la
  cuenta (`plan.saved`); "Mis datos" ya no dice que se guardan sólo en el navegador.
- `cloudSavePlan()` atrapa también los errores síncronos de Firestore y los anota en la consola como aviso.
- *Verificado:* el mismo plan al redibujar; otro al día siguiente (fecha simulada); en 7 días, igual al tercer día y otro
  al octavo; días con su fecha (lunes 12 oct…); con Vegano todas las recetas son veganas; la casilla vieja "Vegetariano"
  se convierte; el plan guardado no lleva listas dentro de listas y pasa por `cleanPlan()` sin cambios ✔.

### 2026-10-12 — v4.4.0 · Planes: proteína preferida
- *Pedido:* en Planes, poder escoger otras preferencias: aves, pescado, carnes, etc.
- Nuevo grupo "Proteína del almuerzo y la cena" (§7.2) con aves, pescado, mariscos, res, cerdo, cabro/cordero/conejo y
  granos y vegetales; se guarda con los demás ajustes (también en la cuenta).
- Reparto de los 438 platos principales: granos y vegetales 109, cerdo 100, aves 97, res 56, mariscos 49, pescado 46,
  cabro 6; 2 sin clasificar (un plato puede tener varias).
- *Verificado:* con pescado + mariscos, un plan de 7 días trae sólo platos de pescado y mariscos; sin desbordes ni errores ✔.

### 2026-10-12 — v4.3.0 · Planes guardados en la cuenta del usuario
- *Pedido:* Planes no guardaba los datos del usuario que entró con su correo (sólo quedaban en el navegador).
- Los ajustes de Planes se guardan en Firestore `users/{uid}/data/plan` y se cargan al entrar desde cualquier dispositivo;
  al salir se borran del navegador (§7.3). `plans.js`: `PLAN_DEFAULTS`, `cleanPlan()`, `applyPlan()`; `auth.js`:
  `cloudSavePlan()`, `loadUserPlan()`. `firestore.rules`: regla nueva para `users/{uid}/data/{docId}` (hay que volver a
  publicarlas en la consola).
- *Verificado:* con Firestore simulado, al entrar se cargan los datos de la cuenta en el formulario (claves extrañas
  descartadas) y un cambio se sube una vez tras 0.8 s; sin errores en la consola ✔.

### 2026-10-12 — v4.2.0 · Proyecto de Firebase conectado
- `js/auth-config.js` con la configuración web del proyecto de Firebase `recetario-de-aqui`.
- Por ahora sólo se muestran **Gmail** y **"¿Otro correo?"**: Outlook (Microsoft) y Yahoo quedan en `false` hasta
  registrar sus apps en Microsoft Entra y Yahoo Developer y activarlos en Firebase.
- Los botones de proveedor ocupan todo el ancho cuando hay uno solo.
- *Verificado:* el SDK de Firebase carga y se inicializa en localhost, pantalla de entrada sin errores en la consola ✔.

### 2026-10-12 — v4.1.0 · Administrador dueño
- *Pedido:* el correo de administrador es eduardo.padilla027@gmail.com.
- `firestore.rules`: `ownerEmail()` es administrador siempre; no se le puede quitar el rol (`owner: true`) ni suspender.
- `js/auth.js`: `checkAdmin()` crea el documento de admin del dueño al entrar; el panel lo muestra como "Dueño" sin acciones.
- *Verificado:* sintaxis de `auth.js` y panel con datos de prueba (fila del dueño sin acciones) ✔.

### 2026-10-12 — v4.0.0 · Acceso con cuenta de correo y administrador; sin dedicatoria
- *Pedido:* eliminar la dedicatoria; acceso con usuario administrador; los demás se registran con una cuenta de correo
  validada por su proveedor, escogiendo entre los proveedores existentes; guardar sólo el correo y un conteo de usos, nunca
  la contraseña.
- **Dedicatoria eliminada:** fuera `js/tribute.js`, la vista `#/dedicatoria`, sus enlaces del menú y del pie, sus textos
  y los estilos `.tribute-*`/`.footer-dedication`.
- Nuevos `js/auth.js`, `js/auth-config.js` y `firestore.rules` (§7.3): pantalla de entrada (Gmail, Outlook, Yahoo,
  iCloud u otro correo con enlace), validación del correo, conteo de usos, panel `#/admin` (usuarios, veces, roles,
  suspender, CSV) y cuenta + "Salir" en el encabezado. Iconos `i-mail`, `i-lock` e `i-logout`.
- **Pendiente del dueño:** crear el proyecto de Firebase y llenar `js/auth-config.js` (pasos en §7.3).
- *Verificado:* pantalla de entrada ES/EN y a 375 px sin desbordes; "Acceso sin configurar" sin `apiKey`; panel de
  administración con datos de prueba (tabla y fichas en móvil); planes y recetas siguen funcionando; sin errores en la
  consola ✔. El inicio de sesión real queda por probar cuando haya proyecto de Firebase.

### 2026-10-11 — v3.23.0 · Dedicatoria al Master Chef Alfredo Ayala Colón
- *Pedido:* una dedicatoria al Master Chef Alfredo Ayala Colón, con su biografía y una foto, enlazada en el encabezado y
  el pie de la aplicación.
- Nuevo `js/tribute.js` y vista `#/dedicatoria` (§7.3); enlaces "Dedicatoria" en el menú y en el pie, y línea de
  dedicatoria en el pie; estilos `.tribute-*` y `.footer-dedication`.
- Biografía de Great Chefs, Metro Puerto Rico (2014 y 2019), Noticel, El Nuevo Día y el San Francisco Chronicle.
- **Foto:** retrato dibujado hasta tener una foto con permiso de uso (no se encontró ninguna de licencia libre).
- *Verificado:* menú y pie llevan a la página; ES y EN; a 375 px sin desbordes; al ir a una receta o a los planes la
  dedicatoria se oculta; sin errores en la consola ✔.

### 2026-10-11 — v3.22.0 · Grosellas en dulces y salsas
- *Pedido:* recetas de grosellas, dulces y salsas.
- Cuadragésima tercera tanda en `js/recipes-4.js` (versiones propias), 10 recetas que se suman al dulce, la jalea y la
  salsa agridulce que ya había. **Dulces y bebidas (6):** mermelada de grosellas con canela, grosellas curadas con sal,
  limón y ají, limber, pie con rejilla, bizcocho volteado y refresco. **Salsas (4):** chutney de grosellas y jengibre,
  glaseado para jamón y pernil, pique de grosellas y ají caballero, y vinagreta de grosellas y miel. Todas explican sacar
  la semilla dura.
- **Familias:** "refresco" va con los jugos de frutas y "grosella" con los bizcochos de frutas.
- **Iconos:** 10 dibujos nuevos (§7).
- Total: **996 → 1,006 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); "grosella" da 13 recetas, "salsa de grosella" las 5 salsas, "postre de
  grosella" los 3 postres; buscador sin búsquedas vacías ✔; las 4 salsas con "Combina mejor con"; las 10 en ES y EN a
  375 px sin errores ni desbordes ✔.

### 2026-10-11 — v3.21.0 · Más salsas y aderezos, "Combina mejor con" y platos fuertes veganos
- *Pedido:* más salsas y aderezos (p. ej. de grosella o de cereza) y más veganas; y en salsas y aderezos, recomendar con
  qué se combinan mejor (carnes, aves, pescado, viandas, ensaladas).
- Cuadragésima segunda tanda en `js/recipes-4.js` (versiones propias), 18 recetas. **Salsas y aderezos (10):** salsa
  agridulce de grosellas, salsa de cereza del país (acerola), vinagreta de mangó y cilantro, pique de piña, mojo de parcha,
  mayo-ketchup de mangó, aderezo cremoso de aguacate (vegano), salsa de maní con lima (vegana), salsa de cebolla
  caramelizada y jalea de ají picante (vegana). **Platos fuertes veganos (8):** garbanzos con calabaza y espinaca, tofu en
  salsa de coco y achiote, lentejas con viandas, pinchos de tofu y piña, arroz mamposteao, espaguetis con boloñesa de
  lentejas, chili boricua de habichuelas y maíz, y tacos de jaca al pastor. **Nutrición:** nuevos chile en polvo y pectina.
- Nuevo `js/pairings.js` y recuadro **"Combina mejor con"** en las 58 salsas (§7); `goToCategory()` en `app.js`.
- **Planes:** los platos fuertes veganos, el chili y los tacos ya no se toman por acompañantes (`sideKind()`); el plan
  vegano pasa de 10 a 17 platos principales.
- **Iconos:** 18 dibujos nuevos (§7).
- Total: **978 → 996 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador sin búsquedas vacías ✔ ("salsa de grosella", "salsa de cereza",
  "tofu"); los 9 objetivos × 1 y 7 días sin errores, vegano de 7 días con 28 recetas distintas, todas veganas ✔; las 58
  salsas y los 8 platos en ES y EN a 375 px sin errores ni desbordes, y el botón lleva a la categoría ✔.

### 2026-10-11 — v3.20.0 · Planes vegetariano y vegano
- *Pedido:* en Planes, un plan de comida "Vegetariano" y otro "Vegano" que busque todas las recetas de esa familia.
- `js/plans.js`: dos objetivos nuevos (🥕 Vegetariano, 🌱 Vegano) con sus textos y notas en ES y EN (proteína completa
  combinando granos y arroz o maíz; en vegano, granos o tofu en cada comida, vitamina B12 fortificada o en suplemento y
  hierro con vitamina C); `isVegan()` y `dietOk()` (§7.2); acompañantes propios en `SIDE_RULES`. También: los
  panqueques entran al desayuno y los arroces sencillos nuevos (cilantro, verde, ajo, amarillo, calabaza, champiñones)
  sirven de acompañante en todos los planes.
- Cuadragésima primera tanda en `js/recipes-4.js`, 5 recetas veganas de desayuno y merienda para que el plan vegano no
  se repita tanto: avena de coco y canela, panqueques de guineo, pudín de chía con mangó, batida de mangó y avena, y
  tostones con guacamole de recao. **Nutrición:** nueva chía.
- *Verificado:* los 9 objetivos × preferencias × exclusiones × 1 y 7 días sin errores; planes de 7 días: vegetariano con
  32–38 recetas distintas y vegano con 22–26, ninguna fuera de su familia; ES y EN y 375 px sin errores ni desbordes ✔.

### 2026-10-11 — v3.19.0 · Recetas veganas
- *Pedido:* más recetas veganas.
- Cuadragésima tanda en `js/recipes-4.js` (versiones propias), 14 recetas sin carne, lácteos, huevo ni miel: picadillo
  de setas y lentejas, pastelón de amarillos con lentejas (la maicena une las capas en vez del huevo), alcapurrias de jaca,
  empanadillas de gandules y calabaza (con discos veganos), asopao de gandules y calabaza, revoltillo de tofu con
  sofrito, hamburguesa de garbanzos y plátano, ensalada de quinoa con mangó y habichuelas negras, flan de coco (con agar),
  bizcocho de chocolate (vinagre y bicarbonato), mantecado de guineo y coco, coquito vegano, mayo-ajo con aquafaba y salsa
  tipo queso de viandas.
- **Alérgenos:** "leche de avena, almendra, soya o arroz" y "leche condensada o evaporada de coco" ya no cuentan como
  leche. **Nutrición:** nuevas leches vegetales, leche condensada de coco, levadura nutricional, aquafaba y agar.
- **Buscador:** la idea "vegano" no cuenta las leches ni las mayonesas o quesos "veganos/vegetales" como lácteos, y pone
  primero las recetas con "vegano" en el nombre ("postre vegano", "vegano").
- **Iconos:** 14 dibujos nuevos con la hojita de vegano (§7). El picadillo vegano antes salía con 🥩 y el revoltillo de
  tofu con el dibujo de salchichas.
- Total: **959 → 973 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); las 14 salen en "vegano" y "vegetariano", y las que llevan leche o huevo
  siguen fuera ✔; navegador: las 14 en ES y EN a 375 px sin errores ni desbordes ✔.

### 2026-10-11 — v3.18.0 · Sustitutos para los alérgenos
- *Pedido:* cuando una receta tenga un alérgeno, recomendar un sustituto si aplica.
- Nuevo `js/substitutes.js` (`ALLERGEN_SUBS`, `EGG_IS_BASE`, `EGG_TEXT`, `SUBS_TEXT`, `getSubstitutes`), en español e
  inglés (§9). `app.js` (`renderSafety`): bloque verde "Puede usar:" bajo cada alérgeno, un sustituto por línea, y la
  nota de precaución al final de la lista. Estilos `.allergen-sub`, `.allergen-sub-item` y `.allergen-subs-note`.
- *Verificado:* en Node, las 1,356 apariciones de alérgenos tienen sustituto (o "no tiene buen sustituto"); el papel del
  huevo revisado receta por receta en los casos dudosos; en el navegador, las 1,284 recetas con alérgenos en ES y EN sin
  errores, y sin desbordes a 375 px ✔.

### 2026-10-11 — v3.17.0 · Más arroces (con cilantro y otros)
- *Pedido:* más recetas de arroz, por ejemplo con cilantro.
- Trigésima novena tanda en `js/recipes-4.js` (versiones propias), 12 recetas en **arroces**: con cilantro y limón
  (el cilantro se añade al final para que no pierda color ni olor), verde con recao y ají dulce, con ajo tostado,
  amarillo con achiote (sin sazón de sobre), con calabaza, con espinaca y garbanzos (vegetariano y completo), con
  champiñones, con amarillos y queso, cremoso con queso del país, frito con piña y jamón, con tocineta y pimientos, y
  frito con huevo y vegetales (con arroz del día anterior). Menos sal añadida en los que llevan caldo.
- **Familias:** nueva "Arroces fritos" (chino, con piña, con huevo); los garbanzos van con los granos y la tocineta con
  las carnes; la familia general pasa a "Arroz blanco, de hierbas y de sabores" (§7).
- **Iconos:** 12 dibujos nuevos (§7).
- Total: **947 → 959 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "arroz con cilantro", "arroz verde", "arroz frito", "arroz
  con queso" ✔; navegador: las 12 en ES y EN a 375 px sin errores ni desbordes ✔.

### 2026-10-11 — v3.16.0 · Panqueques
- *Pedido:* recetas de panqueques.
- Trigésima octava tanda en `js/recipes-4.js` (versiones propias), 10 recetas en **panes** (familia nueva
  "Panqueques"): esponjosos clásicos (con el truco de no batir de más), de guineo con canela, de coco con sirop de
  parcha, de calabaza con especias, con chispas de chocolate, rellenos de guayaba y queso crema, de piña volteados, de
  yogur griego (altos en proteína y sin azúcar añadida), de harina de plátano sin gluten y salados de maíz con queso del
  país. El de avena y guineo sigue en cereales.
- **Buscador:** en las exclusiones por alérgeno, "sin gluten", "gluten-free"… en el nombre o los ingredientes ya no
  cuentan como que la receta lleva gluten ("panqueques sin gluten" encuentra el de harina de plátano; antes, nada).
- **Iconos:** 10 dibujos nuevos (§7).
- Total: **937 → 947 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "panqueques", "pancakes", "panqueques sin gluten", "postre sin
  huevo" y "galletas sin maní" (mismos resultados que antes) ✔; navegador: los 10 en ES y EN a 375 px sin errores ni
  desbordes ✔.

### 2026-10-11 — v3.15.1 · Icono de las rosquillas de viento
- *Pedido:* corregir el icono de las rosquillas de viento (usaban 🍩, igual que las donas).
- 3 dibujos nuevos (§7): rosquillas de viento (aros fritos con azúcar con canela, como dice la receta), donas glaseadas
  y donas rellenas de guayaba, para que ya no se confundan entre sí.
- *Verificado:* las tres con su dibujo en el navegador ✔.

### 2026-10-11 — v3.15.0 · Bizcochos mojados, con licor y de sabores
- *Pedido:* más bizcochos, por ejemplo con brandy o amaretto, y mojados con sabor a almendra, vainilla y otros.
- Trigésima séptima tanda en `js/recipes-4.js` (versiones propias), 12 recetas en **bizcochos**:
  - **Con licor (2):** bizcocho mojado de brandy y bizcocho de almendra con amaretto (con la opción sin licor).
  - **Mojados (6):** de almendra (leches con extracto), de vainilla con almíbar (sin licor), de coquito sin alcohol, de
    café, de dulce de leche y de piña colada sin alcohol.
  - **Sabores (4):** limón con glaseado, red velvet con frosting de queso crema, pistacho y mantequilla (la base).
- **Nutrición:** nuevos brandy, amaretto (con su alcohol en `NUTRI_ALCOHOL`), pistacho, dulce de leche y coquito sin
  alcohol. **Alertas:** nueva `alcoholRaw` para el licor sin cocinar (§9), también para el bizcocho de ron que ya
  existía (su glaseado lleva el ron fuera del fuego).
- **Buscador:** "licor" incluye ron, brandy, amaretto, pitorro, tequila y vino ("bizcocho con licor", "postre con licor");
  "sin alcohol" y "para niños" dejan fuera los postres con licor sin cocinar.
- **Familias:** nueva familia "Mojados y con licor" en bizcochos; el de limón va con los de frutas (§7).
- **Iconos:** 12 dibujos nuevos (§7).
- Total: **925 → 937 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; navegador: los 12 en ES y EN a 375 px sin errores ni
  desbordes, con la alerta del licor sin cocinar ✔.

### 2026-10-11 — v3.14.0 · Más vegetales y viandas
- *Pedido:* más recetas de vegetales y viandas.
- Trigésima sexta tanda en `js/recipes-4.js` (versiones propias), 16 recetas en **vegetales**:
  - **Viandas (6):** ñame frito con mojo de ajo, chips de yautía, malanga y batata, batatas fritas con mayo-ajo, yuca en
    escabeche, malanga gratinada con queso y mofongo de amarillo.
  - **Vegetales (10):** calabaza guisada, calabacín al ajillo, repollo guisado con jamón, coliflor gratinada, brócoli con
    ajo y limón, espinacas con garbanzos, chayote guisado, maíz guisado, champiñones al ajillo y habichuelas tiernas con
    ajo y almendras.
  - La sal del agua de hervir va como "para el agua" (no se suma al plato).
- **Familias:** "Otros vegetales" se divide en "Rellenos y gratinados" y "Vegetales guisados, salteados y asados" (§7).
- **Iconos:** 16 dibujos nuevos (§7).
- Total: **909 → 925 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; navegador: las 16 en ES y EN a 375 px sin errores ni
  desbordes ✔.

### 2026-10-11 — v3.13.0 · Más entremeses y frituras
- *Pedido:* más recetas de entremeses y frituras.
- Trigésima quinta tanda en `js/recipes-4.js` (versiones propias), 12 recetas: alcapurrias de yuca con carne y de pulpo,
  empanadillas de bacalao y de chapín (con la piel del chapín, que tiene toxina, bien descartada), croquetas de pollo,
  rellenos de yuca con queso, taquitos de pollo, deditos de queso, bolitas de amarillo con queso, bolitas de mofongo con
  chicharrón, frituras de malanga y queso, y buñuelos de ñame.
- **Nutrición:** "carne de chapín" cuenta como pescado. **Manejo seguro:** el chapín, como pescado.
- **Buscador:** "para picar", "picadera", "picoteo", "botana" y "snack" llevan a los entremeses.
- **Familias:** los entremeses pasan de 4 a 7 familias (§7).
- **Iconos:** 49 dibujos para todos los entremeses (§7); bacalaítos y chicharrones de pescado ya tenían el suyo.
- Total: **897 → 909 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; navegador: las 12 en ES y EN a 375 px sin errores ni
  desbordes, los 51 entremeses con dibujo ✔.

### 2026-10-10 — v3.12.0 · Recetas en orden por familia
- *Pedido:* evaluar todas las categorías y poner las recetas en orden por familia.
- Nuevo `js/families.js` (`RECIPE_FAMILIES`, `FAMILY_MATCH_ORDER`, `recipeFamily`, `sortByFamily`, `groupByFamily`):
  familias para las 24 categorías (3 a 9 cada una). `app.js`: la vista de una categoría muestra un subtítulo por familia
  (`.family-head` en `css/styles.css`); `getFilteredRecipes` ordena por familia y nombre cuando no hay búsqueda.
- Revisión de casos dudosos: la carne frita y el mofongo de carne frita van en cerdo (en Puerto Rico la carne frita es de
  cerdo); las gallinitas, en "otras aves"; el adobo mojado, en adobos; la vinagreta criolla, en aderezos; el bizcocho de
  cumpleaños, en clásicos; las mallorcas, en panes dulces; las galletas de chocolate y coco, en chocolate.
- *Verificado:* las 897 recetas clasificadas (ninguna perdida: cada categoría muestra todas); las 24 categorías en ES y EN
  sin errores; a 375 px sin desbordes ✔.

### 2026-10-10 — v3.11.0 · Tés tradicionales: maguey, anamú, poleo y otros
- *Pedido:* el té de maguey, anamú, poleo y otros que falten.
- Trigésima cuarta tanda en `js/recipes-4.js` (versiones propias), 10 tés en **calientes**: maguey, anamú, poleo (sólo
  adultos), hojas de aguacate, hojas de mangó, llantén, flor de saúco, toronjil, mejorana y cundeamor. Cantidades
  pequeñas y por pocos días.
- **Seguridad** (`TEA_INFO`, §9): uso tradicional y precaución de cada uno, revisados con fuentes (Drugs.com,
  MedicineNet, MSKCC, Poison Control, Healthline, estudios en animales). El poleo explica la pulegona, las muertes de
  bebés con té de poleo y el teléfono de Control de Envenenamiento (1-800-222-1222); el anamú, el riesgo de pérdida del
  embarazo, el azúcar, la presión y la cumarina; el cundeamor, el azúcar baja, el embarazo y la G6PD; el saúco, que sólo
  se usan las flores; el aguacate, que sus hojas son tóxicas para mascotas. Nuevo `TEA_HIGH` (precaución en rojo).
- **Buscador:** "para niños" deja fuera los tés que no son para niños; "té para la diabetes", "té para la tos" y "té
  para dormir" encuentran los nuevos. **Planes:** la época de lluvia no lista los tés de `TEA_HIGH`.
- **Iconos:** 10 tazas nuevas con su planta (el poleo, con un triángulo de precaución) (§7).
- Total: **887 → 897 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; navegador: los 10 en ES y EN a 375 px con uso tradicional
  y precaución (en rojo los de riesgo serio), sin errores ni desbordes ✔.

### 2026-10-10 — v3.10.0 · Otros cortes de carnes y aves
- *Pedido:* recetas de otros cortes de carnes y aves.
- Trigésima tercera tanda en `js/recipes-4.js` (versiones propias), 18 recetas:
  - **11 carnes:** falda de res rellena de vegetales, picanha a la parrilla con mojo, ribeye a la plancha con mantequilla
    de ajo y recao, short ribs guisadas, osobuco a la criolla, pecho de res (brisket) al horno, solomillo de cerdo con
    glaseado de parcha, cerdo desmenuzado con mojo, panceta crujiente, pierna de cordero al horno y chuletitas de
    cordero al ajillo.
  - **7 aves:** pato guisado, codornices al ajillo, gallinitas rellenas de arroz con gandules, pollo en mariposa a la
    parrilla, pechuga de pavo al horno, muslos de pavo guisados e higaditos de pollo encebollados.
  - Cada una con su temperatura del USDA (145 °F res, cerdo y cordero; 165 °F aves e higaditos; ~195-200 °F para
    desmenuzar el cerdo y el brisket).
- **Nutrición:** nuevos ribeye, osobuco, pecho de res, solomillo, panceta, cordero, pato y gallinitas (enteros, tal como
  se compran), codornices e higaditos. El "adobo casero" se escribe con sus ingredientes (ajo, orégano, sal y pimienta)
  para no contarlo como adobo de sobre.
- **Alertas:** la alerta de sazón/adobo comercial ya no sale con "adobo casero" ni "adobo seco"; el manejo seguro reconoce
  pato, codornices, gallinitas, higaditos (aves), panceta y solomillo (cerdo), y ribeye, picanha, osobuco y cordero (res y
  otras carnes). El buscador y los planes vegetarianos también excluyen cordero, pato, codorniz y panceta.
- **Iconos:** 18 dibujos nuevos (§7).
- Total: **869 → 887 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "cordero", "pato", "ribeye", "brisket", "codornices" ✔; plan
  vegetariano sin estas recetas ✔; navegador: las 18 en ES y EN a 375 px, con su consejo de temperatura, sin errores ni
  desbordes ✔.

### 2026-10-10 — v3.9.0 · Más tés
- *Pedido:* más recetas de té.
- Trigésima segunda tanda en `js/recipes-4.js` (versiones propias), 11 tés en **calientes**: hojas de parcha, hojas de
  limón, hojas de guanábana, moringa con limón, cúrcuma y jengibre, jamaica caliente con canela, romero y limón, semillas
  de hinojo, té verde con menta, cáscara de china con canela y chai con especias del país.
- **Seguridad:** cada uno con su uso tradicional y su precaución en `TEA_INFO` (§9). La hoja de guanábana aclara que no
  hay pruebas de que cure el cáncer y advierte del daño a los nervios con el uso prolongado; la moringa y la jamaica, de
  las medicinas para la presión y la diabetes; el té verde y el chai, de la cafeína.
- **Nutrición:** té verde, hojas para té (parcha, limón, guanábana, moringa, hinojo) y cúrcuma.
- **Buscador:** los tés se encuentran también por su uso ("té para dormir", "té para los nervios", "té para el catarro",
  "té para la digestión", "té para la presión"); esas palabras ya no se "corrigen" (catarro → chaparro).
- **Iconos:** 23 dibujos de tés (los 12 que había usaban todos 🍵) (§7).
- Total: **858 → 869 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; navegador: los 11 en ES y EN a 375 px con uso tradicional y
  precaución, sin errores ni desbordes ✔.

### 2026-10-10 — v3.8.0 · Tragos sin alcohol
- *Pedido:* más recetas de tragos sin alcohol.
- Trigésima primera tanda en `js/recipes-4.js` (versiones propias), 14 recetas en **bebidas** (no en cócteles, que
  siempre llevan la alerta de alcohol): mojito de parcha, coquito (sin ron ni huevo), daiquirí de fresa, margarita de
  mangó, sangría de flor de jamaica, ponche tropical para fiestas, ponche de crema (yemas cocidas a 160 °F), bahama
  mama y lava flow sin alcohol; refresco de jengibre casero, spritzer de parcha y romero, té helado de parcha, frappé de
  café con coco y agua fresca de pepino, limón y menta.
- **Nutrición:** nuevo té negro. **Alertas:** la cafeína también cuenta el té negro o verde; las bebidas con yemas
  cocidas a 160 °F ya no llevan la alerta de huevo crudo; la sal del borde de la margarita es opcional (no se suma).
- **Buscador:** idea "mocktail"; "trago sin alcohol", "bebida sin alcohol" y "mocktail" ponen primero las versiones
  sin alcohol.
- **Iconos:** 14 dibujos nuevos (§7).
- Total: **844 → 858 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); ninguna lleva alerta de alcohol ni de la Ley 22 ✔; buscador ✔;
  navegador: las 14 en ES y EN a 375 px sin errores ni desbordes ✔.

### 2026-10-10 — v3.7.0 · Alcohol y Ley 22; uso tradicional de los tés
- *Pedido:* en los tés, poner en "Alergias y seguridad" su uso principal; en los tragos, una precaución de cuánto tomar
  para no pasarse de los límites de la Ley 22 de Puerto Rico al conducir.
- `js/nutrition.js`: `NUTRI_ALCOHOL` y `alcohol` (g por porción) en `estimateNutrition`.
- `js/advisories.js`: alerta de alcohol con gramos y tragos estándar; nueva alerta `drinkDriving` con los límites de la
  Ley 22 (0.08% y 0.02%), el tiempo para eliminar la porción y la recomendación de no conducir; `TEA_INFO` con uso
  tradicional y precaución de los 12 tés (`teaUse`, `teaCaution`), en español e inglés (§9).
- *Verificado:* 45 bebidas con su cálculo (de 0.2 a 2.0 tragos por porción; el coquito, con ron al gusto, explica cómo
  contarlo); mojito, coquito, piña colada y té de manzanilla en ES y EN en el navegador ✔; sin errores ✔.

### 2026-10-10 — v3.6.0 · Más postres tropicales
- *Pedido:* más recetas de postres tropicales.
- Trigésima tanda en `js/recipes-4.js` (versiones propias), 15 recetas:
  - **10 postres:** mousse de parcha, tres leches de mangó, panna cotta de coco con salsa de parcha, tembleque de mangó,
    guineos flambeados con ron (con aviso de seguridad y opción sin alcohol), sorbete de piña y menta sin máquina,
    pavlova tropical, copa tropical (bizcocho, crema y frutas), crumble de mangó y coco, y crema fría de guanábana.
  - **2 bizcochos:** de guineo y coco, y de mangó con glaseado. **1 pastel dulce:** pastelillos de piña al horno.
  - **2 frutas:** dulce de piña en almíbar con clavos, y mangó verde con sal, limón y ají.
- **Buscador:** "sin horno" a secas daba un solo resultado porque coincidía con el nombre "Cheesecake de Guanábana (Sin
  Horno)"; ahora usa la idea "Sin horno" (§7.1).
- **Iconos:** 15 dibujos nuevos (§7).
- Total: **829 → 844 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "postres tropicales", "postre de mango", "parcha",
  "guanabana", "pavlova", "postre con ron", "sin horno", "postre sin horno", "no bake", y la batería de siempre ✔;
  navegador: las 15 recetas en ES y EN a 375 px sin errores ni desbordes ✔.

### 2026-10-10 — v3.5.1 · Dibujos de los pescados
- *Pedido:* dibujar los iconos de los pescados que usaban 🐟.
- 21 dibujos nuevos (`ic-pez-*`, §7) para los 18 pescados, bacalaítos, chicharrones de pescado y gazpacho de bacalao;
  ya ninguna receta usa 🐟.
- *Verificado:* los 21 con su dibujo en el navegador ✔; sin errores en la consola ✔.

### 2026-10-10 — v3.5.0 · Más pescados y mariscos, salsas y aderezos, y cereales
- *Pedido:* más recetas de pescados y mariscos, salsas y aderezos, y cereales.
- Vigesimonovena tanda en `js/recipes-4.js` (versiones propias), 26 recetas:
  - **11 pescados y mariscos:** tilapia al horno con ajo y limón, camarones en salsa de parcha, calamares guisados a la
    criolla, salmón glaseado con guayaba, bacalao al horno con papas, camarones enchilados, almejas en salsa verde con
    recao, mejillones al vino con sofrito, pescado en papillote, tacos de pescado con salsa de mangó y tortitas de salmón.
  - **9 salsas y aderezos:** tártara con recao, cóctel para mariscos, coco y limón para mariscos, vinagreta de parcha,
    vinagreta criolla de ajo y orégano, ranch de recao, teriyaki de piña, pesto de recao y maní, y salsa de queso.
  - **6 cereales:** avena horneada con guineo y coco, granola de coco y maní, avena con calabaza, quinoa con leche y
    canela, panqueques de avena y guineo, y avena salada con huevo y aguacate.
- **Nutrición:** nuevos maní, mantequilla de maní, pepinillos y tortillas de maíz. Almejas y mejillones por unidad
  (36 y 48) para contar sólo la carne, no la concha.
- **Iconos:** 26 dibujos nuevos (§7).
- Total: **803 → 829 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "mariscos", "pescado", "tilapia", "almejas", "salsa para
  mariscos", "vinagreta", "aderezo", "cereal", "avena", "granola" ✔; navegador: las 26 recetas en ES y EN a 375 px sin
  errores ni desbordes ✔.

### 2026-10-10 — v3.4.0 · Recetas vegetarianas
- *Pedido:* buscar recetas vegetarianas.
- Vigesimoctava tanda en `js/recipes-4.js` (versiones propias), 16 recetas, todas vegetarianas y varias veganas:
  - **Vegetales y viandas (9):** jaca mechada guisada (vegana), canoas de amarillo con picadillo de lentejas, mofongo
    relleno de vegetales al ajillo, tofu guisado a la criolla, coliflor al horno con BBQ de guayaba, pinchos de vegetales y
    queso de freír, chayotes rellenos de queso y maíz, pimientos rellenos de arroz, habichuelas y queso, y serenata
    vegetariana de viandas, huevo y aguacate.
  - **Otras:** sancocho vegetariano (sopas), hamburguesa vegetariana de habichuelas negras (emparedados), empanadillas de
    espinaca y queso y croquetas de yuca y queso (entremeses), quinoa con gandules (arroces), pasta en crema de calabaza y
    recao (pastas) y albóndigas de lentejas en salsa criolla (granos).
- **Nutrición:** nuevos alimentos jaca verde, tofu, quinoa, coliflor y queso de freír. Menos sal en la jaca, el sancocho
  (mitad caldo, mitad agua) y las albóndigas de lentejas.
- **Buscador:** nueva idea "vegano/vegana" (§7.1). `S_MEAT_RX` ya no confunde "ham" con "hamburger"/"hamburguesa", que
  sacaba de "vegetariano" las recetas con pan de hamburguesa.
- **Planes:** `PLAN_MEAT_EXTRA` deja pasar la hamburguesa vegetariana, el pan de hamburguesa y el picadillo de lentejas.
- **Iconos:** 9 dibujos nuevos (§7); los demás usan los de su tipo (mofongo, canoas, empanadillas, sancocho, albóndigas).
- Total: **787 → 803 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "vegetariano", "vegano", "tofu", "quinoa", "jaca", "coliflor",
  "hamburguesa vegetariana" ✔; plan vegetariano de 7 días usa las nuevas ✔; navegador: las 16 recetas en ES y EN a 375 px
  sin errores ni desbordes ✔.

### 2026-10-10 — v3.3.0 · Planes: plato principal + acompañantes
- *Pedido:* que los planes armen el almuerzo y la cena con plato principal y acompañante (arroz, habichuelas, viandas…).
- `js/plans.js`: `sideKind()`, `isComplete()` y `SIDE_RULES` por objetivo (§7.2); el plato principal de masa ahora pide
  ≥250 kcal (antes ≥380), porque los acompañantes completan las calorías. Vista con filas "+" debajo del principal
  (`.plan-sides` en `css/styles.css`).
- *Verificado:* los 7 objetivos × vegetariano × exclusiones × 1 y 7 días (56 combinaciones) sin errores; ningún
  acompañante con carne; ejemplo masa: "Mariscada Criolla + Arroz Guisado con Vegetales + Habichuelas Rosadas Guisadas".

### 2026-10-10 — v3.2.0 · Más arroces y granos
- *Pedido:* más recetas de arroces y granos.
- Vigesimoséptima tanda en `js/recipes-4.js` (versiones propias), 16 recetas:
  - **8 arroces:** con gandules y coco, moros y cristianos, con garbanzos y chorizo, guisado con vegetales (vegano), con
    sardinas, con atún (con nota sobre el mercurio), con costillitas de cerdo e integral con gandules (menos sodio).
  - **8 granos:** habichuelas blancas con bacalao, lentejas con plátano maduro, habas guisadas, garbanzos crujientes al
    horno, hummus con recao, habichuelas rosadas sin carne con calabaza (veganas), habichuelas negras majadas y guisantes
    guisados.
- **Nutrición:** nuevo alimento sardinas (antes "sardinas en salsa de tomate" se contaba como salsa de tomate).
- **Iconos:** 26 dibujos de arroces y granos (§7); los arroces y granos que ya existían también los usan.
- Total: **771 → 787 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "arroz", "habichuelas", "granos", "moros", "arroz con sardinas"
  ✔; navegador: las 16 recetas en ES y EN a 375 px sin errores ni desbordes ✔; todos los arroces y granos con dibujo ✔.

### 2026-10-10 — v3.1.0 · Más sopas, cremas y asopaos
- *Pedido:* más recetas de sopas y asopaos.
- Vigesimosexta tanda en `js/recipes-4.js` (versiones propias), 12 recetas: asopao de langosta, de pulpo y de bacalao;
  sopa de gallina criolla, de habichuelas coloradas con calabaza (con el hervor fuerte de 10 minutos que piden las
  habichuelas coloradas), de guingambó, de coditos con salchichas y de res con vegetales y mazorca; cremas de apio del
  país, de ñame con ajo asado, de brócoli con queso y de champiñones (licuar caliente por tandas y con un paño).
- **Nutrición:** "apio" en la tabla es el apio de tallo (celery); nueva entrada "apio del país" (arracacha, la raíz de
  los sancochos). Nuevos también queso cheddar y tomillo.
- **Iconos:** 30 tazones (§7) para todas las sopas, cremas y asopaos (antes todos 🍲).
- Total: **759 → 771 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "asopao", "sopa", "crema", "sopa de pollo", "apio" ✔;
  navegador: las 12 recetas en ES y EN a 375 px sin errores ni desbordes ✔; dibujos revisados ✔.

### 2026-10-10 — v3.0.0 · Planes de comida
- *Pedidos:* una pestaña de consulta con estas recetas y opciones predeterminadas para dietas de rebajar y ganar masa
  muscular; también recomendaciones por época, bajo en azúcar, valor nutritivo y lo que la gente busca para una buena
  recomendación.
- Nuevo `js/plans.js` y vista `#/planes` (ver §7.2): 7 objetivos, calculadora de calorías y proteína con datos opcionales,
  5 épocas más la automática, preferencias (vegetariano, rápidas), exclusiones por alérgenos y cerdo, plan de 1 o 7 días
  con porciones sugeridas, totales y etiquetas nutricionales, lista de recetas que encajan y lista de temporada.
- `app.js`: ruta `#/planes`, textos `navPlans`, la vista se oculta al ir al inicio o a una receta y se redibuja al
  cambiar de idioma. `index.html`: enlace en el menú y el pie, `<section id="view-plans">` y `<script src="js/plans.js">`.
  `styles.css`: estilos `.plans-*`, `.goal-*`, `.plan-*` (dos columnas de objetivos en celular).
- *Verificado:* los 7 objetivos × 6 épocas × preferencias × exclusiones arman plan sin errores (252 combinaciones); metas
  calculadas comprobadas a mano (hombre, 30 años, 180 lb, 5'10", moderada, masa → 3,100 cal y 165 g de proteína); abrir
  una receta del plan y volver; ES y EN; 375 px sin desbordes; sin errores en la consola.

### 2026-10-10 — v2.9.0 · Más emparedados
- *Pedido:* más recetas de emparedados.
- Vigesimoquinta tanda en `js/recipes-4.js` (versiones propias), 10 recetas: sándwich de desayuno (huevo, jamón y queso
  en pan sobao), de churrasco con chimichurri, de pescado frito con mayo-ajo, de lechón con pique, choripán boricua, de
  queso derretido con guayaba, jibarito de pollo, club boricua, wrap de pollo con aguacate y recao, y de pavochón (con la
  regla de guardar las sobras en 2 horas y comerlas en 3–4 días).
- **Nutrición:** el pan de los sándwiches se contaba como una barra entera por porción (250 g); ahora se escribe en
  libras ("1 libra de pan de agua, en 4 pedazos" ≈ 113 g por sándwich). Corregidos también el cubano y la tripleta (de
  ~980 a ~610 kcal). Nuevo alimento tortilla de harina.
- **Iconos:** 10 dibujos de emparedados (§7); el de pernil, el de bistec y la tripleta usan los nuevos.
- Total: **749 → 759 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); navegador: los 21 emparedados en ES y EN a 375 px sin errores ni
  desbordes ✔; dibujos revisados ✔.

### 2026-10-10 — v2.8.0 · Más tragos tropicales
- *Pedido:* recetas de más tragos tropicales.
- Vigesimocuarta tanda en `js/recipes-4.js` (versiones propias), 11 tragos que no estaban: painkiller, jungle bird,
  caipiriña de parcha, paloma de toronja, mojito de coco, daiquirí de guayaba, ponche de acerola con ron (para 8, con
  versión sin alcohol), tequila sunrise tropical, dark & stormy boricua, guanábana colada y michelada boricua con pique.
- **Nutrición:** nuevo alimento cachaça. Se evitó "cerveza clara" (la regla de huevo lee "clara" como clara de huevo).
- **Iconos:** 11 vasos dibujados (§7).
- Total: **738 → 749 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar; los 11 con su alerta de alcohol); buscador: "tragos tropicales",
  "painkiller", "tequila", "michelada" ✔; navegador: los 11 en ES y EN a 375 px sin errores ni desbordes ✔; dibujos ✔.

### 2026-10-10 — v2.7.0 · Cheesecakes tropicales
- *Pedido:* recetas de cheesecake tropicales.
- Vigesimotercera tanda en `js/recipes-4.js` (versiones propias), 7 recetas (ya existía la tarta de queso con guayaba):
  cheesecake de parcha, de mangó (con vetas), de coco, de piña colada y de coquito (ambos sin alcohol), de guanábana sin
  horno y mini cheesecakes de guayaba.
- Técnica en las recetas: ingredientes a temperatura ambiente, batir a velocidad baja y añadir los huevos sin batir de
  más, baño de María con el molde envuelto, sacar cuando el centro apenas tiembla (unos 150°F), enfriar 1 hora en el
  horno apagado con la puerta entreabierta, nevera toda la noche y cuchillo caliente para cortar.
- **Iconos y buscador:** ver §7 y §7.1 (8 dibujos; idea "Sin horno").
- Total: **731 → 738 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "chesecake tropicales" (con el error de escritura), "cheesecake",
  "cheesecake sin horno", "pie sin horno" ✔; navegador: las 7 recetas en ES y EN a 375 px sin errores ni desbordes y la
  idea "Sin horno" en la búsqueda ✔; dibujos revisados ✔.

### 2026-10-10 — v2.6.0 · Dulces de frutas tropicales, berenjena y hojaldre
- *Pedidos:* dulces de cereza o grosellas y de otras frutas tropicales; platos con berenjena; platos y postres con masa
  de hojaldre.
- Vigesimosegunda tanda en `js/recipes-4.js` (versiones propias), 23 recetas:
  - **8 dulces:** cerezas (acerolas) en almíbar, mermelada de acerola, jalea de guayaba, jalea de grosellas, carambola en
    almíbar (con aviso para enfermos de los riñones), mermeladas de mangó, parcha y piña. Punto de la jalea: 220°F o la
    gota que cuaja en un plato frío.
  - **8 con berenjena:** guisada a la criolla, en escabeche, frita empanada, bacalao con berenjena, lasaña sin pasta, dip
    de berenjena asada, revoltillo y pastelón con picadillo (salar la berenjena para quitar el amargor).
  - **7 de hojaldre:** pastelillos de carne, tarta de jamón y queso, empanada gallega de atún, cachitos de jamón y queso,
    palmeras, milhojas de crema pastelera y trenza de piña y coco (relleno siempre frío).
- **Nutrición:** "1 hoja de masa de hojaldre" se leía como una hoja de laurel (medio gramo); ahora se escribe "½ paquete
  de masa de hojaldre (1 hoja)". **Alérgenos:** "pasta de ajonjolí/maní/tamarindo" ya no cuenta como gluten.
- **Iconos y buscador:** ver §7 y §7.1 (21 dibujos nuevos).
- Total: **708 → 731 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "dulce de cereza", "mermelada", "jalea", "berenjena", "hojaldre",
  "postre de hojaldre", "grosellas" ✔ y las consultas de siempre funcionando; navegador: las 23 recetas en ES y EN a 375 px
  sin errores ni desbordes ✔; dibujos revisados ✔.

### 2026-10-10 — v2.5.0 · Parmesanas, milanesas y recetas con Nutella
- *Pedido:* recetas de pechuga a la parmesana, milanesas y otras, y recetas con Nutella.
- Vigesimoprimera tanda en `js/recipes-4.js` (versiones propias), 15 recetas: pechuga a la parmesana, milanesa de pollo,
  milanesa a la napolitana (res), milanesa de cerdo, pescado a la milanesa, pechuga cordon bleu, pechugas crujientes al
  horno con panko, berenjena a la parmesana; crepas de Nutella y guineo, brownies, galletas y flan de Nutella, quesitos de
  Nutella (hojaldre), pastelillos de Nutella y guineo y batida de Nutella y guineo.
- **Nutrición:** nuevos alimentos Nutella, panko, mozzarella, queso suizo y avellana. El aceite de freír se escribe sin
  cantidad ("Aceite para freír") para que cuente sólo lo absorbido; con cantidad se sumaba entero.
- **Alérgenos:** la Nutella cuenta como frutos secos (avellana), leche y soya (lecitina); el panko, como gluten.
- **Iconos y buscador:** ver §7 y §7.1.
- Total: **693 → 708 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "parmesana", "milanesa", "nutella", "pechuga empanada",
  "breaded chicken" ✔; navegador: las 15 recetas en ES y EN a 375 px sin errores ni desbordes ✔; dibujos revisados ✔.

### 2026-10-10 — v2.4.0 · Tips de parrilla (temperatura y tiempo)
- *Pedido:* en las recetas de BBQ, los mejores tips de temperatura y tiempo.
- Último paso "Tip de parrilla" / "Grill tip" en 26 recetas de parrilla, carbón y BBQ (las 11 de la tanda 19, pollo al
  carbón, chuletas, churrasco, pulpo, langosta, costillas y pollo BBQ, alitas BBQ, los tres pinchos, piña asada, las dos
  salsas BBQ y el adobo seco para BBQ). Incluyen la temperatura de la parrilla, el tiempo por grosor o por libra, la
  temperatura interna (USDA: aves 165°F, carne molida 160°F, cerdo y pescado 145°F; temperaturas de "listo para
  desmenuzar" 195–203°F en pernil y costillas), la prueba de la mano para medir el fuego, fuego directo e indirecto, el
  estancamiento del pernil, el método 3-2-1 de costillas, el reposo y que el azúcar de las salsas se quema por encima de
  unos 265°F.
- Se generan con un script que añade el paso a los arreglos `es` y `en` y no repite si ya está.
- *Verificado:* datos en Node ✔ (pasos ES/EN parejos); el tip se ve en ES y EN en la receta ✔.

### 2026-10-10 — v2.3.0 · Adobos criollos
- *Pedido:* recetas de adobos criollos para carnes, pollo, mariscos y otras categorías que los ameriten.
- Vigésima tanda en `js/recipes-4.js` (versiones propias), 9 adobos con cuánto rinde y cuánto tiempo marinar: seco para
  res y cerdo, mojado de limón y achiote para pollo, para pescado y mariscos (máximo 30 minutos por el limón), para pavo o
  pavochón (con descongelado seguro y 165°F), para cabro, seco ahumado para BBQ, para vegetales y viandas (vegano), de
  limón y pimienta para alitas y pescado, y sin sal (bajo en sodio, con nota sobre sustitutos de potasio).
- **Nutrición:** nuevos alimentos cebolla en polvo y ralladura de limón.
- **Buscador e iconos:** ver §7 y §7.1 (10 frascos de adobo; regla de "sin" dentro de un nombre).
- Total: **684 → 693 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "adobo para pollo", "adobo para mariscos", "adobo para pavo",
  "adobo sin sal", "pina colada sin alcohol", "trago sin alcohol" ✔ y las consultas de siempre sin cambios; navegador:
  los 11 adobos en ES y EN a 375 px sin errores ni desbordes ✔; dibujos revisados ✔.

### 2026-10-10 — v2.2.0 · A la parrilla y al carbón
- *Pedido:* recetas para utilizar el BBQ o cocinar al carbón.
- Decimonovena tanda en `js/recipes-4.js` (versiones propias), 11 recetas: pernil ahumado al carbón (fuego indirecto),
  muslos de pollo al carbón con adobo de achiote, hamburguesas boricuas, chillo entero con mojo, camarones con mojo de
  ajo, salmón con glaseado de parcha, costillas de res con chimichurri, maíz asado con mayo-ajo y queso, maduros asados
  en su cáscara, vegetales con mojo y queso de freír con guayaba. No se repiten las que ya había (pollo al carbón,
  chuletas, pulpo y langosta a la parrilla, costillas y pollo BBQ, pinchos).
- Técnica y seguridad en las recetas: carbón en dos zonas (directo e indirecto), chimenea de encendido, temperaturas
  internas (pollo 165–175°F, carne molida 160°F, pescado 145°F), bandeja aparte para lo cocido, parrilla limpia y
  engrasada para el pescado, cocinar al aire libre y no dejar el carbón solo.
- **Nutrición:** nuevo alimento pan de hamburguesa (antes contaba como un pan de agua entero); el carbón y las astillas
  de la parrilla no se cuentan.
- **Buscador e iconos:** ver §7 y §7.1.
- Total: **673 → 684 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "bbq", "barbacoa", "al carbon", "parrilla", "pollo bbq",
  "pescado a la parrilla" ✔ y las consultas de siempre sin cambios; navegador: las 11 recetas en ES y EN a 375 px sin
  errores ni desbordes ✔; dibujos revisados a tamaño grande ✔.

### 2026-10-10 — v2.1.0 · Paellas de mariscos y de carne
- *Pedido:* recetas de paellas de mariscos y paella regular.
- Decimoctava tanda en `js/recipes-4.js` (versiones propias), 8 paellas (ya existía la de mariscos a la boricua):
  mariscos clásica, negra (con tinta de calamar y alioli), langosta y camarones, pulpo y camarones, valenciana (pollo y
  conejo, sin mariscos), mixta, pollo y chorizo a la boricua (con sofrito y gandules) y vegetales (vegana).
- Técnica en las recetas: azafrán tostado en el caldo caliente, no mover el arroz después de añadir el caldo, socarrat
  al final, reposo tapado, descartar mejillones y almejas cerrados; sal reducida porque el caldo ya trae ("pruebe el
  caldo antes").
- **Nutrición:** nuevos alimentos azafrán, romero, habas/judías, calabacín, alcachofa y tinta de calamar.
- **Iconos:** 8 dibujos de paellera (§7); la paella de mariscos a la boricua usa el de mariscos.
- Total: **665 → 673 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador: "paella", "paella de mariscos", "paella de pollo", "paella
  sin mariscos", "paella negra" ✔; navegador: las 9 paellas en ES y EN a 375 px sin errores ni desbordes ✔.

### 2026-10-10 — v2.0.0 · Versión 2.0 de la app e iconos de huevos
- *Pedido:* cambiar la versión a 2.0 con la fecha de revisión de hoy y corregir los iconos de los huevos.
- **Versión de la app:** portada y pie de página dicen "Versión 2.0 · Revisada el 10 de octubre de 2026" (ES) y
  "Version 2.0 · Revised October 10, 2026" (EN); textos en `translations` (`author`, `footer`) y en `index.html`.
  Este documento también pasa a 2.0.0 para seguir a la app.
- **Iconos de huevos:** 7 dibujos nuevos (antes todos 🍳): ver §7. Los quesos siguen con 🧀.
- *Verificado:* textos de versión en ES y EN en la página; dibujos revisados a tamaño grande (las tortillas se
  rehicieron con tostado y capas porque parecían quesos); `dishIcon` correcto en las 7 recetas ✔.

### 2026-10-10 — v1.24.0 · Yogures tropicales e icono de jamonilla
- *Pedidos:* recetas de yogur tropicales; corregir el icono de la jamonilla frita.
- Decimoséptima tanda en `js/recipes-4.js` (versiones propias), 11 recetas: yogur casero (con yogur griego colado),
  parfait de mangó y granola, yogur con piña y coco tostado, bowl de parcha, guineo y miel, yogur griego con salsita de
  guayaba, batidas de yogur (mangó y parcha; piña colada sin alcohol), yogur helado de mangó, paletas de yogur y frutas,
  avena fría con yogur, guineo y coco, y salsa de yogur con pepino y recao para carnes.
- **Nutrición:** el yogur tenía los valores de la crema agria; ahora hay entradas propias para yogur natural, yogur
  griego, crema agria y granola. **Alérgenos:** la granola cuenta como gluten (igual que la avena).
- **Buscador:** `tropical` amplía a las frutas tropicales ("yogur tropical", "pie tropical", "trago tropical").
- **Iconos:** 9 dibujos de yogur y `ic-jamonilla` (lascas doradas y huevos fritos en sartén). La regla de galletas de
  avena ahora exige "galletas" (atrapaba la avena fría) y las gelatinas de ron con parcha usan la gelatina amarilla.
- Total: **654 → 665 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔; dibujos revisados a tamaño grande; revisión de que ninguna
  receta fuera de su familia caiga en una regla ajena ✔; navegador: las 11 recetas nuevas, la jamonilla y las gelatinas de
  ron en ES y EN a 375 px, sin errores ni desbordes ✔.

### 2026-10-10 — v1.23.0 · Pies tropicales y salsas para carnes y pollo
- *Pedido:* recetas de pies tropicales y de salsas y aderezos para carnes y pollos.
- Decimosexta tanda en `js/recipes-4.js` (versiones propias):
  - **8 pies:** piña con rejilla, mangó, parcha con merengue, limón del país, guineo y crema, piña colada (sin
    alcohol), calabaza a lo boricua (con leche de coco), guanábana (frío).
  - **11 salsas:** chimichurri boricua con recao, BBQ de guayaba, BBQ de tamarindo, mojo de naranja agria, glaseado de
    parcha, aderezo de mostaza y miel, agridulce de piña, aderezo cremoso de cilantro y ajo, salsa de champiñones, adobo
    mojado para pernil y pollo, salsa de pique y mantequilla para alitas.
- Seguridad en las recetas: separar la salsa para la mesa y no usar la brocha ni el envase que tocaron carne cruda; miel
  no apta para menores de 1 año (con su alerta).
- **Nutrición:** nuevo alimento champiñones. **Alérgenos:** "masas para pie" (plural) ahora cuenta como gluten.
- **Buscador:** regla "X para Y" (ver §7.1): "salsa para pollo", "aderezo para pollo" y "sauce for chicken" ya dan
  salsas y no platos de pollo.
- **Iconos:** 21 dibujos nuevos de pies y salsas (§7); los pies de batata y coco y el pastel de guayaba también los usan.
- Total: **635 → 654 recetas**.
- *Verificado:* datos en Node ✔ (0 sin contar); buscador ✔ y consultas de siempre sin cambios; navegador: las 19
  recetas nuevas y los pies de coco y batata en ES y EN a 375 px, sin errores ni desbordes y con su dibujo ✔.

### 2026-10-10 — v1.22.0 · Galletas (cucas, jengibre…), más postres e iconos de galletas
- *Pedidos:* más recetas de galletas como la cuca y de jengibre y otros postres; los iconos de galletas eran todos iguales.
- Decimoquinta tanda en `js/recipes-4.js` (versiones propias):
  - **10 galletas:** cucas de melao de panadería (grandes y finas, estiradas y cortadas), muñequitos de jengibre
    glaseados, galletas blandas de melao y especias, de jengibre fresco y limón, María caseras, de pasas al ron,
    espirales de guayaba y queso crema, alfajores de maicena con dulce de leche, de avena y coco, de mantequilla tipo danesas.
  - **5 postres:** natilla de chocolate, budín de pan con coco, tembleque de calabaza, helados sin máquina de guayaba y de mangó.
- Seguridad en las recetas: el dulce de leche en lata se hierve siempre cubierto de agua y se abre frío; las galletas
  de pasas al ron llevan la alerta de alcohol cocido.
- **Iconos:** 30 dibujos SVG de galletas por tipo (antes todas 🍪) y variantes `ic-natilla-chocolate` e
  `ic-tembleque-calabaza`; reglas en `dessertIcons` (§7).
- Total: **620 → 635 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "cucas", "jengibre", "galletas de melao",
  "alfajores", "natilla", "helado de guayaba", "gingerbread" ✔; navegador: las 15 recetas nuevas y todas las galletitas
  (41) en ES y EN a 375 px, sin errores ni desbordes y con su dibujo ✔; dibujos revisados en conjunto y ampliados ✔.

### 2026-10-10 — v1.21.0 · Iconos de lechón, lengua rellena y carne mechada
- *Pedido:* corregir los iconos de lechón, lengua rellena y carne mechada (compartían el dibujo del pernil).
- Dibujos SVG nuevos: `ic-lechon` (lechón entero dorado, con oreja, manzana en la boca y rabito, en bandeja),
  `ic-lechon-vara` (el mismo ensartado en la vara sobre horquetas y brasas), `ic-lengua-rellena` (lengua entera en salsa,
  ancha atrás y fina en la punta, con el corte y dos ruedas que muestran el relleno) e `ic-carne-mechada` (rollo amarrado
  con hilo, corte y rueda con chorizo, tocineta y aceituna). El Lomo de Cerdo Relleno usa también el de la mechada; el
  pernil y el cabrito asado siguen con `ic-pernil`.
- *Verificado:* los cuatro revisados a tamaño grande y de tarjeta (la lengua se rehízo porque parecía una salchicha);
  `dishIcon` correcto en las siete recetas ✔.

### 2026-10-10 — v1.20.0 · Iconos de pinchos de cerdo y de pollo
- *Pedido:* corregir el icono del pincho de cerdo (🍢 es oden japonés).
- Dibujos SVG nuevos `ic-pincho-cerdo` e `ic-pincho-pollo`: palito con tres trozos a la parrilla glaseados con BBQ,
  pimiento y cebolla entre medio y el pedacito de pan en la punta, como en los kioscos. El de pollo, más dorado.
  Ya ninguna receta usa 🍢.
- *Verificado:* ambos revisados a tamaño grande y de tarjeta; `dishIcon` correcto en los tres pinchos ✔.

### 2026-10-10 — v1.19.0 · Iconos de ñame y viandas
- *Pedido:* iconos de ñame y viandas (salían con 🍠, que es batata).
- Dibujos SVG nuevos: `ic-name` (ñame grande y nudoso, de cáscara áspera, con corte y una rueda de pulpa blanca) e
  `ic-viandas` (surtido que reutiliza con `<use>` los dibujos de plátano verde, ñame y yautía, más dos ruedas de batata
  de cáscara morada). Los usan Majado de Ñame, Viandas al Mojo y Viandas Hervidas con Bacalao; la sopa con viandas
  conserva 🍲. 🍠 queda sólo para la batata.
- *Verificado:* ambos dibujos revisados a tamaño grande y de tarjeta; `dishIcon` correcto en las tres recetas ✔.

### 2026-10-10 — v1.18.0 · Iconos de postres y chayote
- *Pedido:* actualizar el icono del chayote (🥒 es pepinillo) y los de Helados, Budines, Flan y Otros Postres.
- Antes 40 postres compartían 🍮. Dibujos SVG nuevos (25): 8 flanes por sabor, tocino del cielo, 6 gelatinas, 2
  tembleques, 2 arroces en tazón, 3 budines, 2 copas (natilla, majarete) y `ic-chayote` (chayote con surcos y una mitad
  cortada). Reglas en `dessertIcons` (§7). Ya no queda ninguna receta con 🍮; helados 🍨, limbers y piraguas 🍧, dulces
  🍬 y bizcochos 🍰 siguen igual.
- *Verificado:* los 25 dibujos revisados en conjunto y ampliados; todas las recetas de postres y de chayote abren sin
  errores y con su dibujo ✔.

### 2026-10-10 — v1.17.0 · Icono de yautía y malanga
- *Pedido:* los iconos de yautía y malanga eran incorrectos (🍠 es batata).
- Dibujo SVG nuevo `ic-yautia`: yautía entera (marrón, con anillos, pelitos y el tallito) y media yautía cortada (pulpa
  blanca con pintas lilas). Lo usan Majado de Yautía, Majado de Malanga con Mojo de Ajo y Puré de Malanga para Bebés;
  pan, buñuelos y crema de yautía conservan el icono de su tipo de plato (🍞 🧆 🍲).
- *Verificado:* dibujo revisado a tamaño grande y de tarjeta; `dishIcon` devuelve `svg:ic-yautia` en las tres recetas ✔.

### 2026-10-10 — v1.16.0 · Iconos de carnes y aves
- *Pedidos:* corregir el icono de las chuletas y del churrasco; los de carnes y pollos eran muy genéricos.
- Antes: 19 carnes con 🥩, 13 con 🍖 y 30 aves con 🍗.
- Dibujos SVG nuevos: `ic-chuleta` (con borde de grasa, hueso de costilla y marcas de parrilla), `ic-churrasco` (tira
  a la parrilla con chimichurri) y 14 por tipo de plato (ver §7, `meatIcons`).
- Reparto: guiso de carne 11, fricasé de pollo 12, asados 7, chuletas 7, pollo asado 6, alitas 6, encebollado 3,
  empanado 3, masitas 3, pollo frito 3, pechuga 3, costillas 2, desmenuzada 2, picadillo 1, jamón 1; quedan con 🍗 sólo
  los muslos glaseados y el pollo a la BBQ.
- Alitas (`ic-alitas`): una alita entera en V (muslito con su huesito, coyuntura y ala plana terminada en punta), glaseada,
  con ajonjolí y cebollín; reemplaza las piezas sueltas, que parecían salchichas.
- *Verificado:* cada dibujo revisado a tamaño grande; las 82 recetas de carnes y aves abren sin errores y con su dibujo ✔.

### 2026-10-10 — v1.15.0 · Galletitas, ensaladas verdes y de granos, gazpachos e iconos nuevos
- *Pedidos:* buscar recetas de galletitas y de ensaladas verdes y de granos; recetas de gazpacho; cambiar el icono de
  los pinchos de camarones, de las yucas y de las albóndigas.
- Decimocuarta tanda en `js/recipes-4.js` (versiones propias):
  - **8 galletitas:** chispas de chocolate, mantequilla de maní, coquito, parcha, guineo y avena, canela y azúcar,
    calabaza con especias, chocolate y coco.
  - **6 ensaladas verdes:** berro y aguacate, espinaca con mangó y nueces, verde con vinagreta de parcha, pepino y
    tomate, habichuelas tiernas, brócoli.
  - **5 ensaladas de granos:** tres habichuelas, gandules, lentejas, frijoles negros y maíz, habichuelas blancas con atún.
  - **3 gazpachos:** de bacalao con aguacate (el gazpacho boricua, ensaladas), de tomate (sopa fría) y de mangó (sopas).
- **Nutrición:** nuevos alimentos berro y brócoli; unidades nuevas "mazo" (como manojo, 50 g) y "tira" (como lonja).
- **Buscador:** ampliaciones `grano` / `legumbre` / `legume` → habichuela, frijol, gandul, garbanzo, lenteja; las claves
  de `S_EXPAND` ahora se reconocen también en plural ("legumbres", "granos").
- **Iconos:** dibujos SVG propios `ic-yuca` (yuca al mojo, frita, majada, mofongo de yuca), `ic-pincho-camarones` y
  `ic-albondigas` (albóndigas guisadas); gazpacho 🍅, gazpacho de bacalao 🐟, gazpacho de mangó 🥭.
- Total: **598 → 620 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "ensalada de granos", "ensalada de legumbres",
  "bean salad", "ensalada verde", "galletas de mani", "gaspacho" (corrige a gazpacho), "sopa fria" ✔ y las consultas de
  siempre sin cambios; navegador: las 22 recetas nuevas y las de pinchos y yuca en ES y EN a 375 px sin errores ni
  desbordes ✔; los tres dibujos nuevos revisados a tamaño grande ✔.

### 2026-10-10 — v1.14.0 · Flanes y bizcochos de calabaza
- *Pedido:* buscar recetas de flanes y de bizcochos de calabaza.
- Decimotercera tanda en `js/recipes-4.js` (versiones propias), sin repetir los que ya había (flan de vainilla, queso,
  coco, café, guayaba, piña, pana, batata, calabaza, flancocho, quesillo y bizcocho de calabaza):
  - **8 flanes** (postres): chocolate, coquito (sin alcohol), parcha (con queso crema), mangó, plátano maduro, maíz,
    calabaza y queso crema, calabaza y coco.
  - **6 bizcochos de calabaza** (bizcochos): con frosting de queso crema, cupcakes, calabaza y coco, con pasas y nueces,
    marmoleado de calabaza y chocolate, brazo gitano de calabaza con queso crema.
- Técnica en las recetas: escurrir bien la calabaza hervida (evita un flan aguado), añadir la parcha al final y licuar
  poco, enharinar pasas y nueces para que no se hundan, enrollar el brazo gitano en caliente.
- No hizo falta añadir alimentos a la nutrición ni sinónimos al buscador; los iconos 🍮 / 🍰 / 🧁 salen de las reglas existentes.
- Total: **584 → 598 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "flan", "bizcocho de calabaza", "flan de calabaza",
  "pumpkin cake", "cupcake calabaza", "flan sin coco" ✔; navegador: las 14 recetas en ES y EN a 375 px, pestañas de
  receta, nutrición y seguridad, sin errores ni desbordes ✔.

### 2026-10-09 — v1.13.0 · Gelatinas
- *Pedido:* incluir recetas de hacer gelatinas.
- Duodécima tanda en `js/recipes-4.js` (versiones propias):
  - Postres: Gelatina de Mosaico, de Leche Condensada, de Coco, de Parcha Natural, de Café, de Fresa con Frutas,
    de Coquito (sin alcohol), de Guayaba y de Piña Colada (sin alcohol).
  - Cócteles: Gelatinas de Ron con Parcha (chupitos, sólo adultos).
- Técnica en las recetas: hidratar la gelatina sin sabor en agua fría 5 minutos y disolverla sin hervir; no usar piña,
  lechosa ni kiwi frescos (sus enzimas impiden que cuaje; enlatados sí).
- **Nutrición:** nuevos alimentos gelatina en polvo con sabor (caja de 3 oz), gelatina sin sabor (sobre de ¼ oz) y
  coctel de frutas en lata.
- Buscador: sinónimo gelatina = jello = gelatin. Icono: gelatinas 🍮.
- Total: **574 → 584 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "gelatina", "jello", "gelatina sin alcohol" ✔;
  navegador: las 10 recetas en ES y EN a 375 px, sin errores ni desbordes.

### 2026-10-09 — v1.12.0 · Cupcakes, bizcochos y panes dulces
- *Pedido:* buscar recetas de bizcochos, incluidos los cupcakes, y de panes dulces como donas y otros.
- Undécima tanda en `js/recipes-4.js` (versiones propias):
  - Bizcochos: Cupcakes de Vainilla, de Chocolate, de Guayaba y Queso y de Coquito; Bizcocho de Zanahoria, Bizcocho
    Marmoleado, Bizcocho de Parcha.
  - Panes: Donas Glaseadas, Donas Rellenas de Guayaba, Rollos de Canela.
  - Postres: Churros con Chocolate.
- Buscador: sinónimos dona = donut = doughnut y cupcake = bizcochito = magdalena.
- Iconos: cupcakes 🧁, donas 🍩, rollos de canela 🥐, churros 🥖.
- Total: **563 → 574 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "cupcakes", "donas", "donut", "bizcochitos" ✔;
  navegador: las 11 recetas en ES y EN a 375 px, sin errores ni desbordes.

### 2026-10-09 — v1.11.0 · Papas y majados de malanga
- *Pedido:* buscar recetas con papas (asadas, majadas o fritas) y recetas de majado de malanga.
- Décima tanda en `js/recipes-4.js` (versiones propias):
  - Vegetales y viandas: Papas Asadas con Ajo y Orégano, Papas Majadas con Ajo, Papas Fritas Caseras (doble fritura),
    Papas Guisadas a la Criolla, Papas Rellenas al Horno, Papitas a la Mantequilla con Perejil, Papas con Chorizo,
    Papas Gratinadas, Papas Fritas Encebolladas.
  - Entremeses: Croquetas de Papa.
  - Malanga: Majado de Malanga con Mojo de Ajo y Puré de Malanga para Bebés (sin sal, azúcar ni miel). En Puerto Rico
    malanga y yautía son la misma vianda: ya existía el Majado de Yautía y el buscador ya trataba malanga = yautía.
- Iconos: papitas 🥔, malanga 🍠.
- Total: **551 → 563 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar; se corrigió "papitas" que contaba como chips); buscador:
  "malanga", "majado de malanga", "papas", "papas fritas", "potatoes" ✔; navegador: las 12 recetas en ES y EN a 375 px,
  sin errores ni desbordes.

### 2026-10-09 — v1.10.0 · Viandas, majados y aguacate
- *Pedido:* buscar recetas de viandas y diferentes majados, incluyendo recetas con aguacate.
- Novena tanda en `js/recipes-4.js` (versiones propias):
  - Vegetales y viandas: Majado de Plátano Verde, Majado de Yuca con Mojo, Majado de Batata, Majado de Guineítos Verdes,
    Majado de Ñame, Guineítos Verdes con Cebolla, Batata Asada, Viandas al Mojo (yuca, yautía, batata, ñame y plátano).
  - Con aguacate: Aguacates Rellenos de Camarones (*Ensaladas*), Guacamole con Recao y Salsa de Aguacate para Tostones
    (*Salsas*).
- **Nutrición:** nueva entrada `guineo verde` (casi todo almidón, 1.5 g de azúcar por 100 g). Antes los guineos verdes
  se contaban como maduros (12 g): corrige también el azúcar de recetas anteriores con guineos verdes (escabeche,
  pasteles, etc.).
- Iconos: ñame 🍠, guacamole y salsa de aguacate 🥑.
- Total: **540 → 551 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "majado", "viandas", "aguacate", "avocado" ✔;
  navegador: las 11 recetas en ES y EN a 375 px, sin errores ni desbordes.

### 2026-10-09 — v1.9.0 · Pechugas y alitas de pollo
- *Pedido:* buscar recetas puertorriqueñas con pechugas y alitas de pollo.
- Octava tanda en `js/recipes-4.js` (versiones propias; todas indican cocinar el pollo a 165°F por dentro):
  - Aves: Pechugas a la Plancha con Mojo, Pechugas Rellenas de Mofongo, Alitas Fritas Boricuas, Alitas en BBQ de
    Guayaba, Alitas Guisadas con Papas, Alitas al Horno con Mojo de Ajo, Alitas de Parcha y Pique, Alitas Agridulces.
  - Emparedados: Sándwich de Pechuga a la Plancha. Arroces: Arroz con Alitas.
- **Nutrición:** la entrada de alitas pasa a valores "tal como se compran, con hueso" (como el pollo en presas): antes
  daba ~750 kcal por porción; ahora ~440–540. Ninguna receta anterior usaba alitas. Nuevo alimento: pique / salsa picante.
- **Buscador:** sinónimos alita = ala = wing, pechuga = breast, muslo = thigh ("alas de pollo" encuentra las alitas).
- Icono: alitas 🍗.
- Total: **530 → 540 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); buscador: "alitas", "alas de pollo", "chicken wings",
  "pechuga", "chicken breast" ✔; navegador: las 10 recetas en ES y EN a 375 px, sin errores ni desbordes.

### 2026-10-09 — v1.8.0 · Buscador inteligente
- *Pedido:* mejorar el buscador "con AI" para buscar por ingredientes de cualquier receta o por palabras clave. Se eligió
  el **buscador inteligente dentro de la app** (sin servidor ni clave de API, gratis y sin enviar datos).
- Nuevo `js/search.js` (ver §7.1): español e inglés a la vez, sinónimos boricuas, plurales, errores de escritura,
  exclusiones "sin …" (alérgenos, alcohol, carne o cualquier ingrediente), ideas (navidad, playa, desayuno, rápido,
  vegetariano, picante, frío, ligero, con alcohol, para niños), categorías por nombre y búsqueda en los pasos (pueblos).
- `app.js`: `matches` usa `smartSearch`; resultados y grupos ordenados por relevancia; línea "Busco · Sin · Ideas ·
  Corregí" bajo el conteo (`renderUnderstood`); nuevo texto del campo: "Plato, ingrediente o idea: pollo y arroz, postre
  sin huevo, navidad…" (ES/EN).
- `index.html`: `<script src="js/search.js">` antes de `app.js` y `<p id="search-understood">`. `styles.css`: estilos `.su-*`.
- *Verificado:* 40 búsquedas de prueba en Node (p. ej. "pollo y arroz" → Arroz con Pollo primero; "polo" → pollo;
  "trago sin alcohol" → sólo bebidas sin alcohol; "frijoles negros" → habichuelas negras; "loiza" → platos de Loíza);
  navegador a 375 px en ES y EN: sin errores ni desbordes, la línea aparece y desaparece al borrar la búsqueda.

### 2026-10-09 — v1.7.0 · Más tragos y bebidas tropicales
- *Pedido:* buscar más tragos y bebidas tropicales.
- Séptima tanda en `js/recipes-4.js` (versiones propias):
  - Cócteles y tragos: Daiquirí de Fresa, Margarita de Parcha, Rum Runner, Sangría Blanca Tropical, Coco Frío con Ron,
    Guarapo de Caña con Ron, Tamarindo con Ron, Coquito de Café, Mangó Colada.
  - Sin alcohol: Limonada de Coco, Limonada de Parcha, Jugo de Carambola y Jugo Verde de Piña (*Jugos Naturales*);
    Agua de Flor de Jamaica y Batida de Mangó (*Bebidas*).
- **Alerta nueva `starfruit`** (nivel alto): toda receta con carambola avisa que las personas con enfermedad de los
  riñones no deben comerla (contiene una toxina que el riñón enfermo no elimina). Textos ES/EN en `ADVICE_TEXT`.
- **Nutrición:** nuevos alimentos tequila, carambola, espinaca y flor de jamaica (en infusión, casi sin aporte).
- Iconos: flor de jamaica 🌺, jugo de carambola ⭐.
- Total: **515 → 530 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: las 15 recetas en ES y EN a 375 px, con sus tres
  pestañas, sin errores ni desbordes, y la alerta de la carambola visible en ambos idiomas.

### 2026-10-09 — v1.6.0 · Postres y dulces típicos
- *Pedido:* buscar más recetas de postres y dulces típicos.
- Sexta tanda en `js/recipes-4.js` (versiones propias):
  - Postres: Melcocha, Flan de Piña, Torrejas en Almíbar, Limber de Mangó, Piragua de Frambuesa, Budín de Pan con
    Guayaba y Queso.
  - Dulces de frutas (categoría *Frutas*, junto a los cascos de guayaba y toronja): Dulce de Calabaza en Almíbar,
    Dulce de Cidra, Cascos de China en Almíbar.
- **Nutrición:** nuevos alimentos cidra (parte blanca de la cáscara) y frambuesa.
- Iconos: melcocha 🍬, cidra 🍋, torrejas 🍞.
- Total: **506 → 515 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: las 9 recetas en ES y EN a 375 px, con sus tres
  pestañas, sin errores ni desbordes.

### 2026-10-09 — v1.5.0 · Mariscos y frituras de playa
- *Pedido:* buscar más recetas de mariscos y frituras de playa.
- Quinta tanda en `js/recipes-4.js` (versiones propias):
  - Pescados y mariscos: Pulpo a la Parrilla con Mojo, Carrucho Empanado, Ceviche de Camarones.
  - Arroces: Arroz con Langosta.
  - Frituras (entremeses): Calamares Fritos, Chicharrones de Pescado, Empanadillas de Carrucho, Empanadillas de Camarones.
  - Salsas: Mayo-Ajo (para las frituras).
- Las recetas de carrucho recuerdan comprarlo fuera de la veda y de fuentes legales (además de la alerta automática de
  veda). El ceviche de camarones escalda los camarones 1 minuto por seguridad (la alerta de marisco crudo se mantiene).
- Iconos: chicharrones de pescado 🐟 y ceviche de camarones 🦐.
- Total: **497 → 506 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: las 9 recetas en ES y EN a 375 px, con sus tres
  pestañas, sin errores ni desbordes.

### 2026-10-09 — v1.4.0 · Platos típicos de pueblos
- *Pedido:* buscar más platos típicos de Loíza, Ponce, Mayagüez, Orocovis, Luquillo, Fajardo, Humacao, Naguabo, Arecibo,
  Hatillo, Aguadilla u otros pueblos.
- Cuarta tanda en `js/recipes-4.js` (versiones propias, con el pueblo en el nombre):
  - Arepas Rellenas de Pulpo (Piñones, Loíza) y Empanadillas de Pulpo (Luquillo) — entremeses.
  - Pasteles de Pollo (Orocovis, sede del Festival Nacional del Pastel) — vegetales y viandas.
  - Lechón a la Vara (Guavate, Cayey — Ruta del Lechón) — carnes.
  - Queso de Hoja (Hatillo, centro lechero) — huevos y queso.
  - Helado de Arroz con Habichuelas (Lares) y Brazo Gitano de Guayaba y Queso (Mayagüez) — postres.
  - Bizcocho de Café (Yauco, Pueblo del Café) — bizcochos.
- Ya estaban en el recetario platos de otros pueblos pedidos: Domplines de Loíza, Marrayo (Loíza), Alcapurrias de Jueyes
  (Luquillo/Piñones), Frituras de Cetí (Arecibo). No se añadió un plato "típico" de Ponce, Fajardo, Humacao, Naguabo ni
  Aguadilla para no atribuir orígenes sin una tradición clara.
- Sal del lechón: ½ taza para 45 libras. En el queso de hoja la sal va en el agua de estirar (no se suma).
- Total: **489 → 497 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: las 8 recetas en ES y EN a 375 px, con sus tres
  pestañas, sin errores ni desbordes.

### 2026-10-09 — v1.3.0 · 12 tragos tropicales
- *Pedido:* buscar más recetas de tragos tropicales.
- Tercera tanda en `js/recipes-4.js` (categoría *Cócteles y Tragos*, versiones propias): Mai Tai, Ponche del Hacendado
  (Planter's Punch), Daiquirí de Mangó, Mojito de Parcha, Bahama Mama, Blue Hawaiian, Huracán (Hurricane), Coco Loco,
  Lava Flow (colada de fresa), Zombi, Pitorro de Parcha y Ponche de Guayaba con Ron.
- Se dejó fuera el "Painkiller" porque el nombre es una marca registrada.
- Sin cambios en nutrición ni alérgenos: los ingredientes ya estaban en las tablas (el almíbar de almendra del Mai Tai
  sale como fruto seco; el licor de café del Bahama Mama, como cafeína). El Coco Loco cuenta sólo la ½ taza de agua de coco
  que lleva, no el coco entero que sirve de vaso.
- Total: **477 → 489 recetas**.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: los 12 tragos en ES y EN a 375 px, con sus tres
  pestañas, sin errores ni desbordes.

### 2026-10-09 — v1.2.0 · 14 recetas más: carnes, pescados, pastas, postres y otros
- *Pedido:* buscar más recetas puertorriqueñas de carnes, pescados, pastas, postres y otras.
- Segunda tanda en `js/recipes-4.js` (versiones propias):
  - Carnes: Riñoncitos Guisados, Fricasé de Cerdo, Chuletas Rellenas de Mofongo.
  - Pescados y mariscos: Frituras de Cetí, Ostiones en Escabeche, Mofongo Relleno de Mariscos.
  - Pastas: Espaguetis con Mariscos a la Criolla, Espaguetis con Longaniza, Fideos Guisados con Pollo.
  - Postres: Marrayo (dulce de coco y melao), Coquimol, Polvo de Amor. Bizcochos: Ponqué Boricua.
  - Entremeses: Empanadillas de Langosta.
- **Nutrición:** nuevos alimentos riñón de res, cetí y ostiones (antes los riñones se contaban como carne de res).
  Las 477 recetas se cuentan completas.
- **Alérgenos:** el cetí se detecta como pescado.
- **Iconos:** ostiones 🦪, fricasé de cerdo 🍖, polvo de amor y coquimol 🥥.
- Total: **463 → 477 recetas**. Publicado con `vercel --prod`.
- *Verificado:* datos en Node ✔ (0 ingredientes sin contar); navegador: las 14 recetas nuevas en ES y EN a 375 px, con sus
  tres pestañas, sin errores ni desbordes.

### 2026-10-09 — v1.1.0 · 23 recetas puertorriqueñas nuevas y este documento
- *Pedido:* buscar más recetas de la cocina puertorriqueña y crear `ARQUITECTURA.md` como fuente de verdad, actualizado
  en cada cambio.
- **Nuevo `js/recipes-4.js`** (tercera ampliación, 23 recetas, versiones propias):
  - Sopas: Sopón de Pollo con Arroz.
  - Arroces: Arroz Apastelado, Arroz Chino Boricua, Arroz con Carne Bif (Corned Beef).
  - Carnes: Carne Bif Guisada, Salchichas Guisadas con Papas.
  - Pescados: Salmón Guisado, Atún Guisado.
  - Granos: Habichuelas Rosadas Guisadas. Huevos: Jamonilla Frita con Huevos.
  - Vegetales y viandas: Mofongo de Yuca, Yuca Frita, Pastelón de Yuca.
  - Entremeses: Domplines de Loíza, Yaniqueques, Pastelillos de Queso, Pastelillos de Pollo, Alcapurrias de Jueyes.
  - Emparedados: Sandwichitos de Ensalada de Pollo.
  - Postres: Mazamorra, Sopa Borracha, Flan de Batata. Cócteles: Coquito de Guayaba.
- **Nutrición:** nuevos alimentos jamonilla, carne bif (corned beef), salmón enlatado, cebollín y salsa de ostras.
  Las 463 recetas se cuentan completas (0 ingredientes sin contar).
- **Alérgenos:** "ostras" se detecta como molusco (salsa de ostras).
- **Iconos:** mazamorra 🌽, domplines y yaniqueques 🫓, mofongo de yuca 🍠, sopa borracha 🍰.
- Nuevos `ARQUITECTURA.md` (este documento) y `CLAUDE.md` (regla de mantenerlo al día), y `.vercelignore` para no publicarlos.
- Publicado con `vercel --prod` (Vercel no despliega solo desde GitHub).
- Total: **440 → 463 recetas**.
- *Verificado:* datos en Node (ids, categorías, ES/EN, nutrición) ✔; navegador: 463 recetas × 2 idiomas a 375 px sin
  errores ni desbordes.

### Historial anterior (resumen del repositorio)
- **2026-09-28** — Pestaña Jugos Naturales, aves, guinea, galletitas y bebidas (440). Carnes y dibujos de plátano verde y
  maduro (400). Sopas (390), panes (380), postres (371), pescados y mariscos (359). Pestaña de alergias y seguridad y
  tipografía Tahoma. Pestaña de información nutricional y 69 recetas (347). 45 recetas (278). 19 recetas (233).
  Rediseño "Recetarios Cocina Boricua v1.0" con 49 recetas.
- **2026-06-28** — Primera versión "Recetas de Aquí", ~50 recetas tradicionales, filtro por categoría, diseño móvil,
  cambio de nombre a "Recetarios de Aquí".
