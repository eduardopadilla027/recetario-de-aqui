# ARQUITECTURA — Recetarios de Aquí · Cocina Boricua

> **Última actualización:** 2026-10-10 · **Versión del documento:** 1.17.0 · **Recetas:** 620 en 24 categorías
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

Las recetas son **versiones propias redactadas para esta app** (no copias de libros ni webs).

## 2. Dónde vive

| Qué | Dónde |
|---|---|
| Carpeta local | `C:\Users\EDUARDOP\Desktop\cocine-a-gusto` |
| Repositorio | https://github.com/eduardopadilla027/recetario-de-aqui (rama `master`) |
| Publicación | Vercel, proyecto `recetario-de-aqui` → https://recetario-de-aqui.vercel.app |
| Servidor local | `npx serve -l 3000 <carpeta>` (configuración en `.claude/launch.json`) → http://localhost:3000 |

`.vercel/` está en `.gitignore` (es la vinculación local con Vercel).

**Publicar:** Vercel **no** está conectado al repositorio de GitHub: cada versión se publica a mano desde la carpeta con
`vercel --prod` después de hacer commit y push a `master`. `.vercelignore` deja fuera de la web `ARQUITECTURA.md`,
`CLAUDE.md` y `.claude/`.

## 3. Stack

- **HTML + CSS + JavaScript sin frameworks ni build.** Scripts clásicos (no módulos) cargados en orden desde `index.html`;
  todo comparte el ámbito global (`recipes`, `estimateNutrition`, `getAdvisories`…).
- Sin backend ni base de datos: los datos están en archivos `.js`. Preferencias en `localStorage`.
- Tipografía: Tahoma/Verdana del sistema; sólo la cursiva de "Puertorriqueña" viene de Google Fonts (Playfair Display).
- Iconos de la interfaz: sprite SVG en `index.html` (sin emojis en la interfaz). Las "portadas" de los platos usan emojis
  o dibujos SVG propios mientras no haya fotos.

## 4. Estructura de archivos

```
cocine-a-gusto/
├── index.html            estructura de la página, sprite SVG (iconos, bandera, plátanos, embutidos, yuca, yautía, pincho de camarones, albóndigas, chuleta, churrasco y
│                         los dibujos de carnes y aves por tipo de plato) y orden de scripts
├── css/styles.css        estilos (tokens en :root, responsive, movimiento reducido, impresión)
├── js/
│   ├── recipes.js        crea el arreglo `const recipes = [...]` (recetas base)
│   ├── recipes-extra.js  recipes.push(...) — ampliaciones por categoría (la más grande)
│   ├── recipes-2.js      recipes.push(...) — bebidas calientes y pastas, entre otras
│   ├── recipes-3.js      recipes.push(...) — segunda ampliación (2026-09): cuchifritos, pana, bases…
│   ├── recipes-4.js      recipes.push(...) — tercera ampliación (2026-10): clásicos, tragos tropicales, platos de pueblos, mariscos y frituras de playa, postres y dulces, más bebidas tropicales, pechugas y alitas, viandas, majados y aguacate, papas y malanga, cupcakes, bizcochos y panes dulces, gelatinas, flanes y bizcochos de calabaza, y galletitas, ensaladas verdes y de granos y gazpachos, en catorce tandas (ver §13)
│   ├── nutrition.js      tabla de alimentos y estimación nutricional (estimateNutrition)
│   ├── advisories.js     alérgenos, alertas y manejo seguro (getAdvisories)
│   ├── search.js         buscador inteligente (smartSearch), sin servidor
│   └── app.js            interfaz: textos ES/EN, categorías, iconos, rutas, render, filtros, porciones
├── images/               (vacía: reservada para fotos)
├── .claude/launch.json   servidor local para la vista previa
├── .vercelignore         archivos que no se publican en Vercel
├── ARQUITECTURA.md       este documento (fuente de verdad)
└── CLAUDE.md             instrucciones para Claude Code: leer y actualizar este documento en cada cambio
```

**Orden de carga (`index.html`):** `recipes.js` → `recipes-extra.js` → `recipes-2.js` → `recipes-3.js` → `recipes-4.js`
→ `nutrition.js` → `advisories.js` → `search.js` → `app.js`. Un archivo de recetas nuevo **debe** añadirse aquí, después de los anteriores.

## 5. Modelo de datos: la receta

```js
{
  id: "arroz-con-gandules",          // único, kebab-case, sin acentos; se usa en la URL #/receta/<id>
  category: "arroces",               // una de las 24 claves de categoryOrder (§6)
  name: { es: "…", en: "…" },
  time: "1 hr 30 min",               // en español: "45 min", "1 hr", "15 min + 4 hr de frío"
  servings: 8,                       // porciones base (el usuario las ajusta)
  ingredients: { es: [ … ], en: [ … ] },   // mismas líneas y en el mismo orden en ambos idiomas
  steps:       { es: [ … ], en: [ … ] }    // ídem
}
```

**Reglas de redacción** (para que funcionen porciones, nutrición y alertas):

- La **cantidad va al inicio** de la línea: `"2 tazas de …"`, `"½ libra de …"`, `"1 lata de 15 onzas de …"`. Lo que no tiene
  cantidad ("Sal al gusto") no se escala ni se suma.
- Unidades en español: taza, cucharada, cucharadita, libra, onza, lata, sobre, diente, ramita… (ver `NUTRI_UNITS`).
- Ojo con palabras que la tabla usa para otra cosa: "papitas" son las papitas de bolsa (chips); para papas pequeñas
  escriba "papas pequeñas". Revise siempre el resultado de la nutrición de una receta nueva.
- Fritura: `"Aceite vegetal para freír"` (la nutrición suma ~½ cucharada absorbida por porción).
- Lo opcional lleva la palabra "opcional" (no se suma). Sal o aceite "para el agua" tampoco.
- **Platos de un pueblo:** el pueblo va entre paréntesis en el nombre ("Pasteles de Pollo (Orocovis)") y el último paso explica
  el vínculo con el lugar. Sólo se atribuye un plato a un pueblo cuando la tradición es conocida; no se inventan orígenes.
- Pasos en **usted** ("Hierva…", "Añada…"), temperaturas en °F, nombres boricuas (china, guineo, habichuelas, gandules…).
- `ingredients.es` es la fuente de la nutrición y de los alérgenos: el inglés es sólo traducción.

## 6. Categorías

Definidas en `js/app.js`: nombre ES/EN (`translations.*.categories`), icono (`categoryIcons`), tono de portada
(`categoryTones`) y orden (`categoryOrder`). Las 24 categorías y su número de recetas:

| Clave | Nombre | Recetas |
|---|---|---|
| calientes | Bebidas Calientes | 18 |
| frutas | Frutas | 13 |
| cereales | Cereales | 8 |
| granos | Granos y Legumbres | 10 |
| ensaladas | Ensaladas | 24 |
| sopas | Sopas | 31 |
| carnes | Carnes | 47 |
| aves | Aves | 35 |
| pescados | Pescado y Mariscos | 40 |
| huevos | Huevos y Queso | 11 |
| entremeses | Croquetas, Buñuelos y Pastelillos | 34 |
| pastas | Pastas | 17 |
| bizcochos | Bizcochos | 23 |
| galletitas | Galletitas | 26 |
| pasteles_dulces | Pasteles Dulces | 8 |
| panes | Pan y Panecillos | 29 |
| emparedados | Emparedados | 10 |
| postres | Helados, Budines, Flan y Otros Postres | 77 |
| arroces | Arroces y Habichuelas | 25 |
| vegetales | Vegetales y Viandas | 48 |
| salsas | Salsas y Aderezos | 15 |
| bebidas | Bebidas | 17 |
| jugos | Jugos Naturales | 18 |
| cocteles | Cócteles y Tragos | 36 |

**Añadir una categoría:** clave en `categoryOrder`, nombre en `translations.es.categories` y `translations.en.categories`,
`categoryIcons` y `categoryTones`. En `advisories.js`, revisar si es bebida (`isDrink`).

## 7. Interfaz y navegación (`js/app.js`)

- **Rutas por hash:** `#/` inicio · anclas `#categorias`, `#rapidas`, `#recetas` · detalle `#/receta/<id>`
  (URL propia: se comparte y "Atrás" vuelve a la misma posición).
- **Inicio:** hero con buscador y estadísticas (`statsHero(recetas, categorías)`, se calculan solas), cuadrícula de
  categorías (clic = sólo esa categoría; clic de nuevo = todas), carril "Listas en 30 minutos o menos"
  (`QUICK_MAX_MIN = 30`), y resultados agrupados por categoría (acordeón) con filtros *Rápidas* y *Favoritas*.
- **Detalle:** portada (icono del plato), datos (tiempo, porciones, ingredientes, kcal/porción), línea de alérgenos,
  botones Favorito / Imprimir / Compartir, y tres pestañas: **Receta** (ingredientes con selector de porciones + pasos),
  **Información nutricional** y **Alergias y seguridad**.
- **Porciones:** `scaleIngredient` multiplica la cantidad inicial de cada línea y la escribe como número "de cocina"
  (½, ¼, ⅓…; enteros desde 10).
- **Icono de cada plato (`dishIcon`):** busca palabras de `dishIcons` en el nombre en español; gana la que aparece primero
  y, en empate, la más larga. Sin coincidencia: el icono de la categoría. Valores `svg:<id>` usan dibujos del sprite
  (plátano verde y maduro, longaniza, morcilla, yuca, yautía, pincho de camarones, albóndigas, chuleta, churrasco) porque
  no hay emoji correcto (🍠 es batata, 🍢 es oden japonés, 🧆 es falafel, 🍖 es carne de caricatura).
- **Carnes y aves (`meatIcons`):** antes de `dishIcons`, las recetas de las categorías `carnes` y `aves` buscan su
  dibujo por tipo de plato con una lista de expresiones en orden (gana la primera): guiso en caldero (`ic-guiso-carne`,
  `ic-fricase-pollo`, ambos sobre `ic-caldero`), encebollado, empanado, desmenuzado (ropa vieja, salpicón), picadillo,
  asado con cuerito (`ic-pernil`), masitas fritas, costillas, jamón con piña, pollo asado entero, pollo frito, alitas y
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
  (y, con, de, para, receta, algo, quiero, and, with…). Las palabras pueden ir en cualquier orden.
- **Sinónimos** (`S_GROUPS`): china = naranja = orange, parcha = maracuyá = chinola, habichuela = frijol = bean,
  guineo = banana, juey = cangrejo, alita = ala = wing, pechuga = breast, dona = donut, cupcake = bizcochito, gelatina = jello, negro = negra, etc. **Términos generales** (`S_EXPAND`, cuentan la mitad):
  "mariscos" incluye camarón, pulpo, langosta…; "carne" incluye res, cerdo, pollo…
- **Categorías por su nombre** (`S_CATS`): "postres", "tragos", "sopas", "frituras"…
- **Errores de escritura:** si una palabra no existe en el recetario, se corrige a la más parecida (distancia de edición
  1–2), prefiriendo las que más aparecen en nombres ("polo" → "pollo").
- **Exclusiones:** "sin X", "no X", "without X", "libre de X", "X free". Alérgenos (gluten, leche/lactosa, huevo,
  pescado, mariscos, nueces, maní, ajonjolí, soya, coco) usan `getAdvisories`; "sin alcohol" usa las alertas de alcohol
  ("trago sin alcohol" busca entre todas las bebidas); "sin carne" excluye carnes, aves y pescados; cualquier otra palabra
  excluye las recetas que la llevan en los ingredientes.
- **Ideas** (`S_IDEAS`): navidad, playa/kioscos, desayuno, rápido (≤ 30 min), vegetariano, picante, frío y refrescante,
  saludable/ligero (< 350 kcal y sin freír), con alcohol, para niños (sin alcohol, cafeína ni crudos).
- **Orden:** suma de puntuaciones + desempates (el nombre contiene la frase buscada, empieza con ella, o la búsqueda cubre
  la mayor parte del nombre: "Arroz con Pollo" antes que "Sopón de Pollo con Arroz").
- **Si nada tiene todas las palabras**, muestra las recetas que tienen alguna y lo dice ("Ninguna receta tiene todo…").
- Rendimiento: índice por receta en caché; cada búsqueda tarda unos milisegundos (la primera con alérgenos, ~0.25 s).

## 8. Estimación nutricional (`js/nutrition.js`)

- `NUTRI_FOODS`: alimentos con palabras clave (sin acentos) y valores por 100 g (kcal, proteína, carbohidratos, azúcares,
  fibra, grasa, grasa saturada, sodio), aproximados a las tablas del USDA, y pesos por medida (`cup`, `u`, `can`, `sl`).
- `estimateNutrition(receta)` lee cada línea de `ingredients.es`: cantidad + unidad → gramos → nutrientes. Devuelve
  totales, valores por porción, cuántas líneas contó y cuáles **no pudo contar** (`missing`).
- La interfaz la presenta como **estimación** y lista lo no contado. % de valor diario con `NUTRI_DV` (dieta de 2,000 kcal).
- **Objetivo de calidad:** ninguna receta con ingredientes sin contar (hoy: 0 de 620). Si una receta nueva usa un alimento
  que no está, se añade a `NUTRI_FOODS` en su sección (aves, cerdo, res, pescados, lácteos, harinas, dulces, legumbres,
  viandas, frutas, bebidas, grasas y condimentos).

## 9. Alergias, alertas y manejo seguro (`js/advisories.js`)

- **Alérgenos** (`ALLERGENS`): expresiones regulares sobre cada línea de ingredientes: gluten, leche, huevo, pescado,
  crustáceos, moluscos, nueces, maní, ajonjolí, soya, coco y sulfitos. Se muestran con la línea donde aparecen.
- **Alertas** (`getAdvisories`): pescado crudo (ceviche), huevo crudo (`RAW_EGG_IDS` + bebidas con huevo), alcohol
  (bebida o cocinado), miel (bebés), anís estrellado, cafeína, tés de hierbas, ciguatera, mercurio (atún), veda de
  mariscos, toronja con medicamentos, quenepa (atragantamiento), carambola (peligrosa con enfermedad renal), sazón/adobo comerciales (sodio y glutamato) y alertas
  nutricionales con los umbrales de las etiquetas (sodio o grasa saturada ≥ 20 % VD, azúcar ≥ 25 g, ≥ 700 kcal).
- **Manejo seguro:** temperaturas internas según el USDA según el tipo de carne o marisco.
- Es información general: la interfaz pide revisar etiquetas y consultar al médico.

## 10. Diseño

- Tokens en `:root` de `css/styles.css`: crema `#FBF6EE` (fondo), marfil, arena, tinta `#2B1D14`, **achiote** `#A63A12`
  (primario), **verde plátano** `#2F5D34` (secundario), oro decorativo. Contrastes AA anotados junto a cada token.
- Portadas de categoría con tonos por familia: salados en terracota, dulces en caramelo y rosa, frescos en verde y bebidas
  en turquesa (`categoryTones`).
- Bandera de Puerto Rico como logotipo y favicon (SVG, proporción 3:2).
- Responsive con un menú plegable en móvil; sin desbordes horizontales a 375 px.

## 11. Cómo añadir recetas (procedimiento)

1. Escribir las recetas en el archivo de ampliación más reciente (`js/recipes-4.js`) o crear `recipes-5.js` con
   `recipes.push(...)` y añadir su `<script>` en `index.html` antes de `nutrition.js`.
2. Respetar el modelo (§5): `id` único, categoría existente, ES y EN con el mismo número de líneas.
3. Comprobar que no haya ingredientes sin contar en la nutrición; si falta un alimento, añadirlo a `NUTRI_FOODS` (§8).
4. Revisar alérgenos y alertas: si aparece un ingrediente nuevo con alérgeno, ampliar `ALLERGENS` (§9).
5. Revisar el icono del plato; si no encaja, añadir la palabra a `dishIcons` (§7).
6. Probar en el navegador (español e inglés, móvil): la receta abre, porciones, pestañas, sin desbordes.
7. Actualizar **este documento** (conteos de §6, encabezado y §13) en el mismo commit.

## 12. Verificación

No hay pruebas automáticas en el repositorio. La verificación de cada cambio se hace:

- **Datos:** cargando los scripts en Node (`vm`) en el mismo orden que `index.html` y comprobando ids únicos,
  categorías válidas, ES/EN con el mismo número de líneas y `estimateNutrition(r).missing` vacío en todas las recetas.
- **Navegador:** abrir todas las recetas por `#/receta/<id>` en ES y EN a 375 px: sin errores de consola, sin desbordes
  horizontales y con el nombre correcto en la página.

## 13. Registro de cambios

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
