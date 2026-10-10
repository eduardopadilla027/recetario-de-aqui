# ARQUITECTURA — Recetarios de Aquí · Cocina Boricua

> **Última actualización:** 2026-10-10 · **Versión del documento:** 2.4.0 · **Versión de la app:** 2.0 (revisada el 10 de octubre de 2026) · **Recetas:** 693 en 24 categorías
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
├── index.html            estructura de la página, sprite SVG (iconos, bandera, plátanos, embutidos, yuca, yautía, ñame, viandas, chayote, pinchos de camarones, cerdo y pollo, albóndigas, chuleta, churrasco y
│                         los dibujos de carnes, aves y postres por tipo de plato) y orden de scripts
├── css/styles.css        estilos (tokens en :root, responsive, movimiento reducido, impresión)
├── js/
│   ├── recipes.js        crea el arreglo `const recipes = [...]` (recetas base)
│   ├── recipes-extra.js  recipes.push(...) — ampliaciones por categoría (la más grande)
│   ├── recipes-2.js      recipes.push(...) — bebidas calientes y pastas, entre otras
│   ├── recipes-3.js      recipes.push(...) — segunda ampliación (2026-09): cuchifritos, pana, bases…
│   ├── recipes-4.js      recipes.push(...) — tercera ampliación (2026-10): clásicos, tragos tropicales, platos de pueblos, mariscos y frituras de playa, postres y dulces, más bebidas tropicales, pechugas y alitas, viandas, majados y aguacate, papas y malanga, cupcakes, bizcochos y panes dulces, gelatinas, flanes y bizcochos de calabaza, galletitas, ensaladas verdes y de granos y gazpachos, galletas (cucas, jengibre…) y más postres, pies tropicales y salsas para carnes y pollo, yogures tropicales, paellas, recetas a la parrilla y al carbón, y adobos criollos, en veinte tandas (ver §13)
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
| frutas | Frutas | 17 |
| cereales | Cereales | 10 |
| granos | Granos y Legumbres | 10 |
| ensaladas | Ensaladas | 24 |
| sopas | Sopas | 31 |
| carnes | Carnes | 49 |
| aves | Aves | 36 |
| pescados | Pescado y Mariscos | 43 |
| huevos | Huevos y Queso | 11 |
| entremeses | Croquetas, Buñuelos y Pastelillos | 35 |
| pastas | Pastas | 17 |
| bizcochos | Bizcochos | 23 |
| galletitas | Galletitas | 36 |
| pasteles_dulces | Pasteles Dulces | 16 |
| panes | Pan y Panecillos | 29 |
| emparedados | Emparedados | 11 |
| postres | Helados, Budines, Flan y Otros Postres | 84 |
| arroces | Arroces y Habichuelas | 33 |
| vegetales | Vegetales y Viandas | 51 |
| salsas | Salsas y Aderezos | 36 |
| bebidas | Bebidas | 19 |
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
  (plátano verde y maduro, longaniza, morcilla, yuca, yautía, ñame, viandas, pinchos de camarones, cerdo y pollo, albóndigas, chuleta, churrasco) porque
  no hay emoji correcto (🍠 es batata, 🍢 es oden japonés, 🧆 es falafel, 🍖 es carne de caricatura).
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
  secos con polvo y tapa de salero, mojados con pasta; el adobo mojado para pernil sigue en el pilón.
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
  (y, con, de, para, receta, algo, quiero, and, with…). Las palabras pueden ir en cualquier orden.
- **Sinónimos** (`S_GROUPS`): china = naranja = orange, parcha = maracuyá = chinola, habichuela = frijol = bean,
  guineo = banana, juey = cangrejo, alita = ala = wing, pechuga = breast, dona = donut, cupcake = bizcochito, gelatina = jello, negro = negra, etc. **Términos generales** (`S_EXPAND`, cuentan la mitad):
  "mariscos" incluye camarón, pulpo, langosta…; "carne" incluye res, cerdo, pollo…
- **A la parrilla:** `bbq`, `barbacoa`, `carbon`, `parrilla` y `grill` amplían a todo lo que se hace al fuego
  (parrilla, carbón, brasa, pinchos, ahumado).
- **"sin" dentro de un nombre:** si la búsqueda lleva "sin/no/libre/free" y coincide tal cual con nombres de recetas
  ("adobo sin sal", "pina colada sin alcohol"), se muestran esas recetas y "sin" no excluye; si no, la exclusión
  funciona como siempre ("trago sin alcohol", "postre sin huevo"). Las palabras adobo, marinada, sazón y rub cuentan
  como la categoría salsas ("adobo para pollo" usa la regla "X para Y").
- **"X para Y"**: si lo de antes de "para"/"for" nombra una categoría ("salsa para pollo", "postre para niños"), se
  busca sólo en esa categoría y lo de después ordena los resultados sin ser obligatorio.
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
- **Objetivo de calidad:** ninguna receta con ingredientes sin contar (hoy: 0 de 693). Si una receta nueva usa un alimento
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
