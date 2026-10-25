/* Recetarios de Aquí — estimación nutricional.
 *
 * Calcula calorías y nutrientes por porción a partir del texto de los
 * ingredientes (en español) de cada receta: lee la cantidad y la unidad
 * ("2 tazas", "1½ lbs", "1 lata (14 oz)"), la pasa a gramos y usa valores de
 * referencia por 100 g (aproximados a las tablas del USDA) para cada
 * alimento. Es una ESTIMACIÓN: la interfaz lo dice y muestra qué ingredientes
 * no se pudieron contar. Lo que no tiene cantidad ("sal al gusto") no se suma.
 */

/* Alimento: palabras clave (sin acentos, separadas por "|"), y por 100 g:
 * kcal, proteína, carbohidratos, azúcares, fibra, grasa, grasa saturada (g) y
 * sodio (mg). `m` da los gramos de las medidas: cup = una taza, u = una
 * unidad ("2 cebollas"), can = lata/paquete/envase, sl = lonja/lámina,
 * sobre = un sobre. */
function F(kw, kcal, p, c, s, fib, fat, sat, na, m = {}) {
  return { kw: kw.split("|"), n: { kcal, p, c, s, fib, fat, sat, na }, m };
}

const NUTRI_FOODS = [
  // Aves
  // Pollo, gallina y guinea en presas o enteros: por 100 g tal como se compran,
  // con hueso (sólo ~70% se come). La pechuga y el muslo van aparte.
  F("pollo|presas de pollo|gallina", 150, 12.6, 0, 0, 0, 10.5, 3, 60, { u: 1500, cup: 140 }),
  F("pechuga|pechuga de pollo", 120, 22.5, 0, 0, 0, 2.6, 0.6, 45, { u: 170, cup: 140 }),
  F("muslo|muslos de pollo", 177, 17.5, 0, 0, 0, 11, 3, 80, { u: 115 }),
  // v4.37: la cadera (cuarto de pierna: muslo y encuentro) de USDA "leg, meat and skin, raw"; ~255 g sin el hueso.
  F("cadera de pollo|caderas de pollo|cuartos de pierna", 187, 18.2, 0, 0, 0, 12.1, 3.4, 84, { u: 255 }),
  // Alitas: tal como se compran, con hueso (sólo ~55% se come).
  F("alita|alitas de pollo", 110, 9.5, 0, 0, 0, 7.7, 2.2, 45, { u: 90 }),
  F("pavo", 150, 20, 0, 0, 0, 7, 2, 65, { u: 6000, cup: 140 }),
  F("guinea", 110, 16.4, 0, 0, 0, 4.5, 1.3, 47, { u: 1200 }),
  F("molleja|mollejas de pollo", 94, 17.7, 0, 0, 0, 2.1, 0.5, 69, { u: 30, cup: 145 }),
  // Cerdo
  F("cerdo|carne de cerdo|masitas|paleta|pierna de cerdo", 240, 17, 0, 0, 0, 19, 7, 60, { u: 3000 }),
  F("pernil", 210, 16, 0, 0, 0, 16, 6, 60, { u: 3600, cup: 140 }), // taza de pernil desmenuzado ≈ 140 g
  F("lechon", 170, 14, 0, 0, 0, 12, 4.5, 55, { u: 7000 }),
  F("chuleta|chuletas de cerdo", 200, 19, 0, 0, 0, 13, 4.7, 55, { u: 200 }),
  F("chuleta ahumada", 150, 19, 1, 1, 0, 8, 2.8, 1100, { u: 150 }),
  F("costilla|costillar", 200, 13, 0, 0, 0, 16, 6, 70, { u: 900 }),
  F("patita|pata de cerdo|pata", 106, 11.5, 0, 0, 0, 6.3, 1.8, 60, { u: 250 }),
  F("cuero|cuero de cerdo", 400, 20, 0, 0, 0, 35, 13, 60),
  F("chicharron", 544, 61, 0, 0, 0, 31, 11, 1818, { cup: 40 }),
  F("cuajo", 159, 16, 0, 0, 0, 10, 3.5, 70),
  F("gandinga", 130, 18, 1, 0, 0, 5, 1.7, 90),
  F("tocino|tocineta", 417, 13, 1.4, 0, 0, 40, 13, 830, { sl: 25, cup: 150 }),
  F("jamon", 145, 21, 1.5, 0, 0, 6, 2, 1200, { cup: 140, sl: 28 }),
  F("salchicha", 230, 10, 2, 1, 0, 20, 7, 900, { can: 130, u: 16 }),
  // Jamonilla: carne de cerdo enlatada (luncheon meat), muy salada.
  F("jamonilla", 315, 13, 3, 1, 0, 27, 10, 1400, { can: 340, sl: 56 }),
  F("longaniza", 300, 15, 2, 0, 0, 25, 9, 900, { u: 100 }),
  F("chorizo", 455, 24, 2, 0, 0, 38, 14, 1235, { u: 75, cup: 130 }),
  F("salami", 336, 22, 1, 0, 0, 26, 9.5, 1740, { cup: 130 }),
  F("pepperoni", 504, 19, 1, 0, 0, 46, 17, 1582, { cup: 130 }),
  F("sangre|sangre de cerdo", 80, 17, 0, 0, 0, 0.5, 0.2, 60, { cup: 240 }),
  // Res y otras carnes
  F("carne|carne de res|res|falda|boliche|punta|palomilla|churrasco|rabo de res", 200, 19, 0, 0, 0, 13, 5, 66, { cup: 225 }),
  // Carne bif: corned beef de lata, cocida y salada.
  F("carne bif|corned beef", 250, 27, 0, 0, 0, 15, 6, 1000, { can: 340 }),
  F("rinon|rinones de res", 99, 17.4, 0.3, 0, 0, 3.1, 0.9, 182, { u: 300 }),
  F("bistec", 180, 21, 0, 0, 0, 10, 4, 60, { u: 150 }),
  F("carne molida", 254, 17, 0, 0, 0, 20, 7.6, 66, { cup: 225 }),
  F("picadillo", 250, 17, 4, 2, 1, 18, 6.5, 400, { cup: 225 }),
  F("rabo", 130, 10, 0, 0, 0, 10, 4, 60),
  F("higado", 135, 20, 4, 0, 0, 3.6, 1.2, 69),
  F("lengua", 224, 15, 0, 0, 0, 16, 7, 69, { u: 1200 }),
  F("mondongo|callo", 85, 12, 0, 0, 0, 3.7, 1.3, 97),
  F("cabro|chivo|cabrito", 109, 20.6, 0, 0, 0, 2.3, 0.7, 82),
  F("conejo", 136, 20, 0, 0, 0, 5.5, 1.7, 45, { u: 1400 }),
  F("ternera", 112, 20, 0, 0, 0, 3, 1, 80, { u: 150 }),
  // Otros cortes (tanda 33). Crudos, por 100 g tal como se compran (con hueso cuando lo llevan).
  F("ribeye|rib eye", 291, 24, 0, 0, 0, 22, 9, 55),
  F("osobuco|jarrete", 150, 20, 0, 0, 0, 7.5, 2.8, 70),
  F("pecho de res|brisket", 250, 18, 0, 0, 0, 20, 8, 60),
  F("solomillo|solomillo de cerdo|tenderloin", 120, 21, 0, 0, 0, 3.5, 1.2, 50),
  F("panceta|barriga de cerdo|pork belly", 518, 9.3, 0, 0, 0, 53, 19, 32),
  F("cordero|pierna de cordero|chuletas de cordero", 250, 17, 0, 0, 0, 20, 8.5, 60),
  F("pato", 200, 11, 0, 0, 0, 17, 5.5, 45),
  F("codorniz|codornices", 192, 19.6, 0, 0, 0, 12, 3.4, 53, { u: 120 }),
  F("gallinita|gallinitas|cornish", 150, 12.6, 0, 0, 0, 10.5, 3, 60, { u: 560 }),
  F("higaditos|higado de pollo|higados de pollo", 119, 17, 0.7, 0, 0, 4.8, 1.6, 71),
  // Pescados y mariscos
  F("almeja|mejillon", 86, 14.7, 3.6, 0, 0, 1, 0.2, 600, { u: 12, can: 283 }),
  F("hoja de platano", 0, 0, 0, 0, 0, 0, 0, 0),
  F("pescado|filete|carne de chapin|chapin|mero|chillo|dorado|mahi mahi|tilapia|pargo|sierra", 96, 20, 0, 0, 0, 1.7, 0.4, 60, { u: 170, sl: 170 }),
  F("bacalao", 290, 63, 0, 0, 0, 2.4, 0.5, 1500, { cup: 100 }),
  F("camaron", 85, 20, 0, 0, 0, 0.5, 0.1, 119, { u: 15, cup: 145 }),
  F("langosta", 112, 20.6, 2.4, 0, 0, 1.5, 0.2, 177, { u: 150 }),
  F("pulpo", 82, 15, 2.2, 0, 0, 1, 0.2, 230),
  F("calamar", 150, 15.6, 3, 0, 0, 8, 1.2, 300, { can: 111 }),
  F("juey|cangrejo|carne de juey|carne de cangrejo", 87, 18, 0, 0, 0, 1, 0.2, 290, { u: 40, cup: 135 }),
  F("carrucho|caracol", 130, 26, 1.7, 0, 0, 1.2, 0.3, 153),
  F("atun", 190, 28, 0, 0, 0, 8, 1.5, 350, { can: 142, cup: 150 }),
  F("salmon", 140, 20, 0, 0, 0, 6, 1.4, 400, { can: 418, cup: 140 }),
  F("ceti", 90, 18, 0, 0, 0, 2, 0.5, 80, { cup: 150 }),
  F("ostion|ostiones", 68, 7, 3.9, 0, 0, 2.5, 0.8, 211, { u: 15, cup: 248 }),
  // v4.34: USDA SR Legacy, a mano (también en tools/usda/map.js). "atun" de arriba es el de lata; el fresco
  // tiene mucha menos grasa y sodio.
  F("atun fresco", 109, 24.4, 0, 0, 0, 0.5, 0.2, 45, { u: 170 }),
  F("vieira|vieiras|scallops", 69, 12.1, 3.2, 0, 0, 0.5, 0.1, 392, { u: 30 }),
  // Huevos y lácteos
  F("huevo", 143, 12.6, 0.7, 0.4, 0, 9.5, 3.1, 142, { u: 50, cup: 243 }),
  F("yema", 322, 16, 3.6, 0.6, 0, 27, 9.6, 48, { u: 17 }),
  F("clara", 52, 11, 0.7, 0.7, 0, 0.2, 0, 166, { u: 33 }),
  F("leche", 61, 3.2, 4.8, 5, 0, 3.3, 1.9, 43, { cup: 244 }),
  F("leche evaporada", 134, 6.8, 10, 10, 0, 7.6, 4.6, 106, { cup: 252, can: 354 }),
  F("leche condensada", 321, 7.9, 54, 54, 0, 8.7, 5.5, 127, { cup: 306, can: 397 }),
  F("leche de coco", 197, 2, 2.8, 1, 0, 21, 18.9, 13, { cup: 240, can: 400 }),
  // La de cartón (para beber) es mucho más ligera que la de lata.
  F("leche de coco de carton|bebida de coco", 19, 0.2, 2.9, 2.5, 0, 2, 1.8, 19, { cup: 240 }),
  F("crema de coco", 324, 1.6, 44, 42, 0, 16, 14, 20, { cup: 300, can: 425 }),
  F("crema|crema de leche|heavy cream", 340, 2.8, 2.7, 2.9, 0, 36, 23, 38, { cup: 238 }),
  F("mantequilla|margarina", 717, 0.9, 0.1, 0.1, 0, 81, 51, 643, { cup: 227, can: 113 }),
  F("queso", 380, 24, 2, 0.5, 0, 30, 18, 620, { cup: 113, sl: 21, u: 227 }),
  F("queso blanco|queso del pais|queso fresco", 310, 20, 2.5, 2, 0, 24, 15, 700, { cup: 130, u: 450 }),
  F("queso crema", 342, 6, 4, 3.2, 0, 34, 20, 321, { cup: 232, can: 227 }),
  F("ricotta", 174, 11, 3, 0.3, 0, 13, 8.3, 84, { cup: 246, can: 425 }),
  F("queso parmesano|parmesano", 431, 38, 4, 0.9, 0, 29, 17, 1529, { cup: 100 }),
  F("queso de bola|edam", 357, 25, 1.4, 1.4, 0, 28, 17.6, 965, { cup: 113 }),
  F("mayonesa", 680, 1, 0.6, 0.6, 0, 75, 12, 635, { cup: 220 }),
  F("mantecado|helado", 207, 3.5, 24, 21, 0.7, 11, 6.8, 80, { cup: 132 }),
  // Cereales, harinas y pastas
  F("arroz", 360, 6.6, 79, 0.1, 1.3, 0.6, 0.2, 1, { cup: 200 }),
  F("arroz cocido", 130, 2.7, 28, 0, 0.4, 0.3, 0.1, 1, { cup: 158 }),
  F("harina|harina de trigo|harina de pan", 364, 10, 76, 0.3, 2.7, 1, 0.2, 2, { cup: 125 }),
  F("harina de arroz|crema de arroz", 366, 6, 80, 0.1, 2.4, 1.4, 0.4, 0, { cup: 158 }),
  F("harina de maiz|gofio", 370, 7, 79, 0.6, 7, 1.8, 0.3, 35, { cup: 157 }),
  F("harina de platano", 350, 3.6, 89, 10, 6, 1, 0.3, 5, { cup: 120 }),
  F("maicena", 381, 0.3, 91, 0, 0.9, 0.1, 0, 9, { cup: 128 }),
  F("farina|crema de trigo", 370, 10, 76, 0.4, 2, 1.5, 0.3, 3, { cup: 170 }),
  F("avena", 379, 13, 68, 1, 10, 6.5, 1.1, 6, { cup: 81 }),
  F("pan rallado", 395, 13, 72, 6, 4.5, 5.3, 1.2, 732, { cup: 108 }),
  F("galleta molida", 420, 9, 72, 5, 2.5, 10, 2.5, 700, { cup: 100 }),
  F("galleta|galletas de soda", 430, 9, 72, 10, 2.5, 11, 3, 700, { u: 6, cup: 90 }), // taza de galletas trituradas ≈ 90 g
  F("espagueti|codito|macarron|fideo|pasta|lasana|canelon|manicotti", 371, 13, 75, 2.7, 3.2, 1.5, 0.3, 6, { cup: 105, sl: 20, u: 12 }),
  F("pan|pan de agua|pan sobao", 270, 9, 50, 5, 2.5, 3.5, 0.8, 490, { u: 250, sl: 30, cup: 45 }),
  F("hojaldre|masa de hojaldre", 558, 7.4, 46, 1, 1.5, 38, 10, 253, { can: 490, sl: 245, u: 245 }),
  F("bizcocho|bizcocho esponjoso", 297, 7, 58, 38, 0.5, 4.3, 1.3, 250, { u: 400 }),
  F("disco|discos para empanadillas", 360, 8, 50, 2, 2, 14, 6, 600, { can: 450, u: 45 }),
  F("masa para pie", 457, 5.5, 50, 4, 1.5, 26, 10, 470, { u: 230 }),
  F("mezcla para bizcocho|mezcla de bizcocho", 425, 4.5, 78, 46, 1, 10, 2.5, 675, { can: 432 }),
  F("pudin", 370, 0, 93, 75, 0, 0, 0, 1500, { can: 96 }),
  // Azúcares y dulces
  F("azucar", 387, 0, 100, 100, 0, 0, 0, 1, { cup: 200 }),
  F("azucar morena", 380, 0.1, 98, 97, 0, 0, 0, 28, { cup: 213 }),
  F("azucar en polvo", 389, 0, 100, 98, 0, 0, 0, 2, { cup: 120 }),
  // Gelatina en polvo con sabor (de caja) y sin sabor (sobres de ¼ onza, 7 g).
  F("gelatina|gelatina en polvo", 370, 7.8, 85, 81, 0, 0, 0, 470, { can: 85, sobre: 85 }),
  F("gelatina sin sabor|grenetina", 335, 85, 0, 0, 0, 0.1, 0, 196, { sobre: 7 }),
  F("miel", 304, 0.3, 82, 82, 0.2, 0, 0, 4, { cup: 339 }),
  F("melao|melaza", 290, 0, 75, 74, 0, 0.1, 0, 37, { cup: 328 }),
  F("almibar|almibar simple|sirope simple", 260, 0, 67, 67, 0, 0, 0, 1, { cup: 320 }),
  F("chocolate|chocolate de mesa", 480, 4, 72, 66, 5, 18, 10, 10, { can: 90, cup: 170 }),
  F("cacao|cocoa", 228, 19.6, 58, 1.8, 37, 13.7, 8, 21, { cup: 86 }),
  F("bolitas de cacao|cacao del pais|cacao puro", 501, 12, 29, 0, 17, 52, 32, 20, { u: 30 }),
  F("pasa", 299, 3, 79, 59, 3.7, 0.5, 0.1, 11, { cup: 145 }),
  F("nueces|nuez", 654, 15, 14, 2.6, 6.7, 65, 6, 2, { cup: 117 }),
  F("almendra|almendras molidas", 579, 21, 22, 4.4, 12.5, 50, 3.8, 1, { cup: 95, u: 1.2 }),
  F("ajonjoli", 573, 17.7, 23, 0.3, 11.8, 49.7, 7, 11, { cup: 144 }),
  F("pistacho|pistachos", 562, 20, 28, 7.7, 10, 45, 5.6, 1, { cup: 123 }),
  F("dulce de leche|cajeta", 315, 6.8, 55, 50, 0, 7.4, 4.6, 129, { can: 370, cup: 300 }),
  F("coquito sin alcohol", 260, 4, 30, 28, 1, 14, 11, 70, { cup: 250 }),
  // Ingredientes veganos (tanda 40).
  F("leche de avena|leche de almendra|leche de soya|leche de arroz|leche vegetal", 46, 1, 7, 4, 0.8, 1.5, 0.2, 40, { cup: 240 }),
  F("leche condensada de coco", 320, 2.5, 52, 50, 0, 12, 10, 40, { can: 310, cup: 300 }),
  F("levadura nutricional", 325, 50, 36, 0, 22, 4, 1, 50, { cup: 60 }),
  F("aquafaba", 18, 1, 3, 0, 0, 0, 0, 30, { cup: 240 }),
  F("chia|semillas de chia", 486, 17, 42, 0, 34, 31, 3.3, 16, { cup: 170 }),
  F("agar agar|agar", 0, 0, 0, 0, 0, 0, 0, 0, { cup: 100 }),
  F("pectina|pectina en polvo", 325, 0.3, 90, 0, 86, 0.3, 0, 200, { cup: 120 }),
  F("mani|cacahuate", 585, 24, 21, 4.2, 8, 50, 7, 6, { cup: 146 }),
  F("mantequilla de mani", 588, 25, 20, 9, 6, 50, 10, 430, { cup: 258 }),
  F("mermelada|jalea", 250, 0.4, 63, 50, 1, 0.1, 0, 30, { cup: 320 }),
  F("pasta de guayaba", 286, 0.4, 75, 60, 2.5, 0.1, 0, 20, { can: 227 }),
  F("cereza|cerezas marrasquino", 165, 0.2, 42, 38, 3, 0.2, 0, 4, { u: 5 }),
  // Legumbres (enlatadas con su líquido, salvo las lentejas secas)
  F("habichuela|frijol", 92, 5.6, 16.5, 0.5, 4.6, 0.4, 0.1, 250, { can: 425, cup: 250 }),
  F("garbanzo", 120, 6.2, 19, 3.5, 5.2, 2.2, 0.2, 250, { can: 425, cup: 240 }),
  F("gandul", 95, 5, 17, 1, 5, 0.5, 0.1, 250, { can: 425, cup: 240 }),
  F("lenteja", 352, 24.6, 63, 2, 10.7, 1, 0.2, 6, { cup: 192 }),
  // Secas, crudas (para cocinar desde cero; v4.32): valores de USDA SR Legacy, añadidos a mano
  // porque js/nutrition-usda.js no se regeneró (tools/usda/map.js ya las tiene para la próxima vez).
  F("habichuelas rosadas secas|habichuelas coloradas secas|habichuelas secas", 343, 21, 64.2, 2.2, 12.7, 1.1, 0.3, 8, { cup: 210 }),
  F("gandules secos", 343, 21.7, 62.8, 0, 15, 1.5, 0.3, 17, { cup: 205 }),
  F("habichuelas tiernas", 31, 1.8, 7, 3.3, 2.7, 0.2, 0, 6, { cup: 110 }),
  F("petit pois|guisante", 81, 5.4, 14.5, 5.7, 5.1, 0.4, 0.1, 5, { cup: 145, can: 250 }),
  // Viandas y vegetales
  // El plátano verde es casi todo almidón; al madurar, ese almidón se vuelve azúcar.
  F("platano|platano verde", 122, 1.3, 32, 2, 2.3, 0.4, 0.1, 4, { u: 180, cup: 200 }),
  F("platano maduro|platano bien maduro|amarillo", 122, 1.3, 32, 20, 2.3, 0.4, 0.1, 4, { u: 180, cup: 200 }),
  F("guineo|guineito", 89, 1.1, 23, 12, 2.6, 0.3, 0.1, 1, { u: 118 }),
  // Guineo verde: casi todo almidón (al madurar ese almidón se vuelve azúcar).
  F("guineo verde|guineito verde", 89, 1.1, 23, 1.5, 2.6, 0.3, 0.1, 1, { u: 118 }),
  F("yuca", 160, 1.4, 38, 1.7, 1.8, 0.3, 0.1, 14, { u: 400, cup: 206 }),
  F("yautia|malanga", 98, 1.5, 24, 0.5, 4, 0.4, 0.1, 21, { u: 300, cup: 135 }),
  F("name", 118, 1.5, 28, 0.5, 4.1, 0.2, 0, 9, { u: 400, cup: 150 }),
  F("batata", 86, 1.6, 20, 4.2, 3, 0.1, 0, 55, { u: 250, cup: 250 }),
  F("papa", 77, 2, 17, 0.8, 2.2, 0.1, 0, 6, { u: 200, cup: 150 }),
  F("papitas|papitas de palito", 522, 6, 52, 1, 4, 34, 5, 400, { cup: 40 }),
  F("pana|panapen", 103, 1.1, 27, 11, 4.9, 0.2, 0, 2, { u: 1000, cup: 220 }),
  F("calabaza", 26, 1, 6.5, 2.8, 0.5, 0.1, 0.1, 1, { u: 800, cup: 180 }),
  F("maiz|maiz en grano", 86, 3.3, 19, 3.2, 2.7, 1.4, 0.2, 15, { cup: 154, can: 420, u: 150 }),
  F("cebolla", 40, 1.1, 9.3, 4.2, 1.7, 0.1, 0, 4, { u: 150, cup: 160 }),
  F("cebollin|cebollino", 32, 1.8, 7.3, 2.3, 2.6, 0.2, 0, 16, { u: 15, cup: 100 }),
  F("pimiento|cubanela", 26, 1, 6, 4.2, 2.1, 0.3, 0, 4, { u: 150, cup: 150 }),
  F("aji|aji dulce|aji picante", 30, 1.5, 6, 3, 1.5, 0.3, 0, 5, { u: 10, cup: 150 }),
  F("ajo", 149, 6.4, 33, 1, 2.1, 0.5, 0.1, 17, { u: 3, cup: 136 }),
  F("tomate", 18, 0.9, 3.9, 2.6, 1.2, 0.2, 0, 5, { u: 120, cup: 180, can: 400 }),
  F("salsa de tomate|salsa de pizza", 24, 1.2, 5.3, 3.6, 1.5, 0.3, 0, 560, { cup: 245, can: 227 }),
  F("pasta de tomate", 82, 4.3, 19, 12, 4, 0.5, 0.1, 59, { cup: 262, can: 170 }),
  F("sofrito|recaito", 35, 1, 7, 3, 2, 0.2, 0, 10, { cup: 240 }),
  F("aceituna", 145, 1, 3.8, 0, 3.3, 15, 2, 1556, { cup: 135, u: 4 }),
  F("alcaparra", 23, 2.4, 4.9, 0.4, 3.2, 0.9, 0.2, 2348, { cup: 136 }),
  F("lechuga", 15, 1.4, 2.9, 0.8, 1.3, 0.2, 0, 28, { u: 360, cup: 47 }),
  F("repollo", 25, 1.3, 5.8, 3.2, 2.5, 0.1, 0, 18, { u: 900, cup: 89 }),
  F("zanahoria", 41, 0.9, 9.6, 4.7, 2.8, 0.2, 0, 69, { u: 60, cup: 128 }),
  F("pepino", 15, 0.7, 3.6, 1.7, 0.5, 0.1, 0, 2, { u: 300 }),
  F("apio", 16, 0.7, 3, 1.3, 1.6, 0.2, 0, 80, { u: 40 }),
  F("espinaca", 23, 2.9, 3.6, 0.4, 2.2, 0.4, 0.1, 79, { cup: 30 }),
  F("champinon|champinones|setas|hongos", 22, 3.1, 3.3, 2, 1, 0.3, 0, 5, { cup: 70 }),
  F("azafran|hebras de azafran", 310, 11, 65, 0, 4, 6, 1.6, 148, { cup: 30 }),
  F("romero|ramita de romero", 131, 3.3, 21, 0, 14, 5.9, 2.8, 26, { u: 1, cup: 30 }), // hojas frescas: una taza ≈ 30 g
  F("habas|judias blancas|judias", 110, 7.6, 20, 1.8, 5.4, 0.4, 0.1, 5, { cup: 170 }),
  F("calabacin|zucchini", 17, 1.2, 3.1, 2.5, 1, 0.3, 0.1, 8, { u: 200, cup: 120 }),
  F("alcachofa|corazones de alcachofa", 47, 3.3, 10.5, 1, 5.4, 0.2, 0, 300, { can: 240, u: 30 }),
  F("tinta de calamar", 70, 6, 3, 0, 0, 1, 0, 600, { sobre: 4 }),
  F("pan de hamburguesa|panes de hamburguesa", 270, 9, 49, 6, 2, 3.5, 0.8, 480, { u: 55 }),
  F("cebolla en polvo", 341, 10, 79, 6.6, 15, 1, 0.2, 73, { cup: 110 }),
  F("ralladura de limon|ralladura", 47, 1.5, 16, 4, 10, 0.3, 0, 6, { cup: 96, u: 2 }),
  F("nutella|crema de avellanas", 539, 6.3, 57.5, 56.3, 3.4, 30.9, 10.6, 41, { cup: 296 }),
  F("panko", 395, 12, 79, 4, 4, 3.5, 0.8, 300, { cup: 60 }),
  F("queso mozzarella|mozzarella", 280, 28, 3, 1, 0, 17, 10, 630, { cup: 113, sl: 28 }),
  F("queso suizo", 380, 27, 1.5, 0, 0, 28, 18, 190, { sl: 28, cup: 108 }), // rallado: una taza ≈ 108 g
  F("avellana|avellanas", 628, 15, 17, 4.3, 9.7, 61, 4.5, 0, { cup: 115 }),
  F("cachaca|aguardiente", 231, 0, 0, 0, 0, 0, 0, 1, { cup: 237 }),
  F("tortilla de harina|tortillas de harina", 306, 8, 50, 3, 3.5, 8, 3, 600, { u: 70 }),
  F("apio del pais|arracacha", 101, 0.8, 24, 1, 1.8, 0.2, 0, 20, { u: 300 }),
  F("queso cheddar|cheddar", 403, 25, 1.3, 0.5, 0, 33, 21, 620, { cup: 113, sl: 28 }),
  F("tomillo", 101, 5.6, 24, 1.7, 14, 1.7, 0.5, 9, { cup: 30 }),
  F("sardina|sardinas|sardinas en salsa de tomate", 186, 17, 1.6, 0.5, 0.3, 12, 3, 410, { can: 120 }),
  F("berro", 11, 2.3, 1.3, 0.2, 0.5, 0.1, 0, 41, { cup: 34 }),
  F("brocoli", 34, 2.8, 6.6, 1.7, 2.6, 0.4, 0, 33, { u: 600, cup: 91 }),
  F("chayote", 19, 0.8, 4.5, 1.7, 1.7, 0.1, 0, 2, { u: 200 }),
  F("berenjena", 25, 1, 5.9, 3.5, 3, 0.2, 0, 2, { u: 450 }),
  F("pepinillo|pepinillos", 12, 0.5, 2.3, 1.1, 1, 0.2, 0, 875, { cup: 140, u: 35 }),
  F("tortilla de maiz|tortillas de maiz", 218, 5.7, 45, 0.9, 6.3, 2.9, 0.4, 45, { u: 26 }),
  F("jaca|jaca verde", 33, 0.9, 6.5, 0, 3, 0.2, 0, 180, { can: 280, cup: 150 }),
  F("tofu|tofu firme", 144, 17, 3, 0.6, 2.3, 8.7, 1.3, 14, { pack: 400, cup: 250 }),
  F("quinoa", 368, 14, 64, 0, 7, 6, 0.7, 5, { cup: 170 }),
  F("coliflor", 25, 1.9, 5, 1.9, 2, 0.3, 0.1, 30, { u: 600, cup: 107 }),
  F("queso de freir", 320, 21, 2, 1, 0, 25, 16, 1100, { cup: 130 }),
  F("aguacate", 160, 2, 8.5, 0.7, 6.7, 14.7, 2.1, 7, { u: 350, cup: 150 }),
  F("remolacha", 43, 1.6, 9.6, 6.8, 2.8, 0.2, 0, 78, { u: 80 }),
  F("guingambo|quimbombo", 33, 1.9, 7.5, 1.5, 3.2, 0.2, 0, 7, { u: 12, cup: 100 }),
  F("cilantro|recao|culantro|perejil|menta|yerbabuena|albahaca|limoncillo", 23, 2, 3.7, 0.9, 2.8, 0.5, 0, 46, { cup: 16, u: 1 }),
  // Flor de jamaica: en infusión, casi todo se queda en las flores coladas.
  F("flor de jamaica|jamaica", 5, 0.1, 1.2, 0, 0, 0, 0, 1, { cup: 40 }),
  // Hierbas para té: en infusión casi no aportan nada.
  F("naranjo|manzanilla|tilo|flores de tilo|oregano brujo|anis estrellado", 5, 0, 1, 0, 0, 0, 0, 1, { cup: 30, u: 0.5 }),
  // Frutas
  F("pina|pina triturada", 50, 0.5, 13, 10, 1.4, 0.1, 0, 1, { u: 900, cup: 165, can: 567, sl: 56 }),
  F("mango", 60, 0.8, 15, 13.7, 1.6, 0.4, 0.1, 1, { u: 250, cup: 165 }),
  F("papaya|lechosa", 43, 0.5, 11, 7.8, 1.7, 0.3, 0.1, 8, { u: 600, cup: 145 }),
  F("guayaba", 68, 2.6, 14, 9, 5.4, 1, 0.3, 2, { u: 100, cup: 165 }),
  F("parcha|maracuya", 97, 2.2, 23, 11, 10, 0.7, 0.1, 28, { u: 18, cup: 236 }),
  F("tamarindo", 239, 2.8, 62.5, 57, 5, 0.6, 0.3, 28, { cup: 120, u: 12 }),
  F("guanabana", 66, 1, 17, 13.5, 3.3, 0.3, 0.1, 14, { cup: 225, u: 500 }),
  F("quenepa", 58, 0.5, 15, 12, 1, 0.2, 0, 3, { u: 8 }),
  F("limon", 29, 1.1, 9.3, 2.5, 2.8, 0.3, 0, 2, { u: 44 }),
  // Por unidad cuenta lo que se exprime (en las recetas la china y la toronja
  // enteras se usan para jugo).
  F("china|naranja", 47, 0.9, 12, 9.4, 2.4, 0.1, 0, 0, { u: 85 }),
  F("toronja", 42, 0.8, 10.7, 6.9, 1.6, 0.1, 0, 0, { u: 150 }),
  F("acerola", 32, 0.4, 7.7, 0, 1.1, 0.3, 0, 7, { cup: 98, u: 5 }),
  F("sandia", 30, 0.6, 7.6, 6.2, 0.4, 0.2, 0, 1, { cup: 152, u: 4500 }),
  // Por 100 g de caña pelada: lo que da de guarapo (un tallo ~350 g).
  F("cana de azucar|cana", 50, 0, 13, 13, 0, 0, 0, 5, { u: 350 }),
  F("coco de agua|coco verde", 19, 0.7, 3.7, 2.6, 1.1, 0.2, 0.2, 105, { u: 350 }),
  F("grosella", 44, 0.9, 10, 7, 4, 0.5, 0, 1, { cup: 150 }),
  // Pajuil (cajuil): la fruta del marañón, no la semilla.
  F("pajuil|pajuiles|cajuil", 46, 0.8, 11.6, 10, 1.7, 0.1, 0, 10, { u: 80, cup: 150 }),
  // Frutas de la isla (tanda 46). Por 100 g de pulpa; `u` = lo que se come de una fruta.
  F("jobo|jobos", 46, 0.8, 12, 8, 1.5, 0.2, 0, 2, { u: 15, cup: 150 }),
  F("pomarrosa|pomarrosas", 25, 0.6, 5.7, 5, 1, 0.3, 0, 0, { u: 30, cup: 120 }),
  F("pitahaya|fruta del dragon", 57, 0.4, 15.2, 9.8, 3.1, 0.1, 0, 0, { u: 350, cup: 230 }),
  F("caimito|caimitos", 67, 1.5, 14.7, 10, 3.3, 0.6, 0.1, 5, { u: 150, cup: 230 }),
  F("nispero|nisperos", 83, 0.4, 20, 15, 5.3, 1.1, 0.2, 12, { u: 120, cup: 240 }),
  F("anon|anones|corazon (fruta)", 94, 2.1, 23.6, 18, 4.4, 0.3, 0, 9, { u: 150, cup: 250 }),
  F("melon|cantalupo", 34, 0.8, 8.2, 7.9, 0.9, 0.2, 0, 16, { u: 700, cup: 160 }),
  F("frutas abrillantadas|fruta abrillantada|frutas confitadas", 322, 0.3, 82, 81, 1.6, 0.1, 0, 98, { cup: 180 }),
  F("ciruelas secas|ciruela seca|ciruelas pasas", 240, 2.2, 64, 38, 7, 0.4, 0.1, 2, { cup: 175, u: 9.5 }),
  F("mamey", 51, 0.5, 12.5, 7, 3, 0.5, 0.1, 15, { u: 500, cup: 170 }),
  F("crema agria", 198, 2.4, 4.6, 3.4, 0, 19, 11, 31, { cup: 230 }),
  F("yogur|yogur natural", 61, 3.5, 4.7, 4.7, 0, 3.3, 2.1, 46, { cup: 245 }),
  F("yogur griego", 97, 9, 3.9, 3.6, 0, 5, 3.2, 35, { cup: 225 }),
  F("granola", 471, 10, 64, 20, 7, 20, 4, 25, { cup: 120 }),
  F("manzana", 52, 0.3, 14, 10, 2.4, 0.2, 0, 1, { u: 180, cup: 125 }),
  F("fresa", 32, 0.7, 7.7, 4.9, 2, 0.3, 0, 1, { cup: 150 }),
  F("frambuesa", 52, 1.2, 12, 4.4, 6.5, 0.7, 0, 1, { cup: 123 }),
  F("coctel de frutas|fruit cocktail", 57, 0.4, 15, 13, 1, 0.1, 0, 5, { can: 425, cup: 245 }),
  F("carambola", 31, 1, 6.7, 4, 2.8, 0.3, 0, 2, { u: 90, cup: 110 }),
  // Cidra: se usa la parte blanca de la cáscara (la pulpa se bota).
  F("cidra", 30, 0.5, 9, 3, 3, 0.2, 0, 2, { u: 300 }),
  F("uva", 69, 0.7, 18, 15.5, 0.9, 0.2, 0.1, 2, { cup: 151 }),
  // v4.36: aproximados (no están en USDA SR Legacy). El coco tierno (de coco de agua) tiene mucha menos grasa que
  // el maduro; el hicaco (icaco, cocoplum) es una fruta de poca azúcar.
  F("coco tierno", 98, 1.5, 7, 4, 2, 7, 6, 15, { cup: 160 }),
  F("hicaco|hicacos|icaco", 47, 0.4, 12, 9, 1.5, 0.2, 0, 2, { cup: 150 }),
  F("coco|coco rallado|coco seco", 354, 3.3, 15, 6, 9, 33.5, 30, 20, { u: 400, cup: 80 }),
  // Jugos y bebidas
  F("jugo de limon|jugo de limon verde", 25, 0.4, 8.4, 1.7, 0.4, 0.1, 0, 1, { cup: 244 }),
  F("jugo de naranja|jugo de china", 45, 0.7, 10.4, 8.4, 0.2, 0.2, 0, 1, { cup: 248 }),
  F("naranja agria|jugo de naranja agria", 25, 0.5, 6, 3, 0.2, 0.1, 0, 1, { cup: 240 }),
  F("jugo de pina", 53, 0.4, 13, 10, 0.2, 0.1, 0, 2, { cup: 250 }),
  F("jugo de guayaba|nectar", 55, 0.1, 14, 13, 0.3, 0.1, 0, 5, { cup: 250 }),
  F("agua de coco", 19, 0.7, 3.7, 2.6, 1.1, 0.2, 0.2, 105, { cup: 240 }),
  F("ron|pitorro", 231, 0, 0, 0, 0, 0, 0, 1, { cup: 240, can: 750 }),
  F("tequila", 231, 0, 0, 0, 0, 0, 0, 1, { cup: 240, can: 750 }),
  F("brandy|cognac|conac", 231, 0, 0, 0, 0, 0, 0, 1, { cup: 240, can: 750 }),
  F("amaretto|licor de almendra", 310, 0, 33, 33, 0, 0, 0, 5, { cup: 240, can: 750 }),
  F("vino", 83, 0.1, 2.6, 0.6, 0, 0, 0, 5, { cup: 240, can: 750 }),
  F("vino dulce", 160, 0.2, 14, 8, 0, 0, 0, 9, { cup: 240, can: 750 }),
  F("amargo de angostura|angostura", 0, 0, 0, 0, 0, 0, 0, 0), // unas gotas: no suma
  F("licor|licor de anis", 330, 0, 35, 35, 0, 0, 0, 5, { cup: 240, can: 750 }),
  F("refresco|refresco de cola", 42, 0, 10.6, 10.6, 0, 0, 0, 4, { cup: 248, can: 355 }),
  F("malta", 62, 0.5, 15, 13, 0, 0, 0, 10, { can: 355 }),
  F("cerveza", 43, 0.5, 3.6, 0, 0, 0, 0, 4, { cup: 240, can: 355 }),
  F("mabi", 40, 0, 10, 9, 0, 0, 0, 5, { cup: 240 }),
  F("corteza|corteza de mabi", 0, 0, 0, 0, 0, 0, 0, 0),
  F("granadina", 268, 0, 67, 60, 0, 0, 0, 30, { cup: 320 }),
  F("te negro|te verde|te suelto", 1, 0, 0.3, 0, 0, 0, 0, 3, { cup: 2, u: 2 }),
  // Hojas y semillas para té: se cuelan, casi no aportan.
  F("hojas de parcha|hojas de limon|hojas de guanabana|moringa|semillas de hinojo|hinojo|penca de maguey|maguey|anamu|poleo|hojas secas de aguacate|hojas de aguacate|hojas tiernas de mango|hojas de mango|llanten|flores de sauco|sauco|toronjil|mejorana|cundeamor", 5, 0, 1, 0, 0, 0, 0, 1, { cup: 30, u: 0.5 }),
  F("curcuma", 312, 9.7, 67, 3.2, 22, 3.3, 1.8, 27, { cup: 110, u: 0.2 }),
  F("cafe|cafe negro", 1, 0.1, 0, 0, 0, 0, 0, 2, { cup: 240 }),
  F("agua|hielo", 0, 0, 0, 0, 0, 0, 0, 0, { cup: 240 }),
  F("caldo|caldo de pollo|consome", 6, 0.6, 0.4, 0.2, 0, 0.2, 0.1, 343, { cup: 240 }),
  // v4.39: USDA SR Legacy, a mano (también en tools/usda/map.js).
  F("aderezo cesar", 542, 2.2, 3.3, 2.8, 0.3, 57.9, 8.8, 1209, { cup: 235 }),
  F("panecillos de hamburguesa|panecillo de hamburguesa|pan de hamburguesa", 279, 9.5, 49.4, 6.9, 2.1, 4.3, 1, 479, { u: 50 }),
  F("salchichon", 407, 22.6, 1.6, 0.5, 0, 33.7, 11.9, 2260, { u: 10 }),
  // v4.35: el caldo "bajo en sodio" de lata o caja (≈140 mg por taza) y el cubito (≈1,000 mg cada uno).
  F("caldo bajo en sodio|caldo de pollo bajo en sodio|caldo de res bajo en sodio|caldo de vegetales bajo en sodio|caldo de pescado bajo en sodio", 6, 0.6, 0.4, 0.2, 0, 0.2, 0.1, 58, { cup: 240 }),
  F("cubito de caldo", 267, 16.7, 18, 13.9, 0, 13.9, 3.5, 24000, { u: 4 }),
  // Grasas, condimentos y sazones
  F("aceite|aceite de oliva|aceite vegetal|aceite con achiote", 884, 0, 0, 0, 0, 100, 14, 0, { cup: 218 }),
  F("manteca|manteca vegetal", 900, 0, 0, 0, 0, 100, 40, 0, { cup: 205 }),
  F("vinagre", 18, 0, 0.04, 0, 0, 0, 0, 2, { cup: 239 }),
  F("ketchup", 101, 1, 27, 22, 0.3, 0.1, 0, 907, { cup: 240 }),
  F("salsa bbq|salsa barbacoa", 172, 0.8, 41, 33, 0.9, 0.6, 0.1, 1027, { cup: 280 }),
  F("salsa marinara", 50, 1.4, 8, 5, 2, 1.5, 0.2, 450, { cup: 250, can: 680 }),
  F("salsa inglesa", 78, 0, 19, 10, 0, 0, 0, 980, { cup: 275 }),
  F("salsa de soya", 53, 8, 4.9, 0.4, 0.8, 0.6, 0.1, 5493, { cup: 255 }),
  F("salsa de ostras", 51, 1.4, 11, 0, 0.3, 0.3, 0, 2733, { cup: 290 }),
  F("pique|salsa picante", 12, 0.5, 2, 1, 0.5, 0.2, 0, 300, { cup: 240 }),
  F("mostaza", 60, 3.7, 5.3, 0.9, 4, 3.3, 0.2, 1120, { cup: 250 }),
  F("sal|sal gruesa", 0, 0, 0, 0, 0, 0, 0, 38758, { cup: 292 }),
  F("adobo", 150, 5, 30, 1, 5, 1, 0, 42500, { cup: 150 }),
  F("sazon|sazon casero", 150, 5, 30, 1, 5, 1, 0, 27857, { cup: 200, sobre: 1.4 }),
  F("polvo de hornear", 53, 0, 28, 0, 0, 0, 0, 10600, { cup: 220 }),
  F("bicarbonato", 0, 0, 0, 0, 0, 0, 0, 27360, { cup: 220 }),
  F("vainilla", 288, 0.1, 12.6, 12.6, 0, 0.1, 0, 9, { cup: 208 }),
  F("levadura", 325, 40, 41, 0, 27, 7.6, 1, 50, { cup: 150, sobre: 7 }),
  F("canela|clavo|clavos de olor|oregano|comino|pimienta|nuez moscada|laurel|anis|jengibre|achiote|pimenton|cilantro en polvo|coriandro|hojuelas de aji|ajo en polvo|cremor tartaro|chile en polvo|colorante|especia", 300, 8, 60, 3, 30, 6, 1, 30, { cup: 110, u: 0.2 })
];

/* ── Valores oficiales del USDA (js/nutrition-usda.js) ──
 * Si el alimento está en FoodData Central, sus valores salen de allí (por 100 g comestibles ×
 * la parte comestible de como se compra) y lleva su número FDC en `src`. Si no está (productos de
 * aquí o de marca), se queda con el estimado de arriba y los minerales de NUTRI_LOCAL_X. */
const NUTRI_KEYS = ["kcal", "p", "c", "s", "fib", "fat", "sat", "na", "chol", "trans", "ca", "fe", "k", "vd"];
/* Productos locales: [colesterol mg, grasa trans g, calcio mg, hierro mg, potasio mg, vitamina D mcg] por 100 g
 * (estimados de etiquetas típicas y de alimentos parecidos; las cantidades en las recetas son pequeñas). */
const NUTRI_LOCAL_X = {
  picadillo: [60, 1, 20, 2, 270, 0.1], cuero: [80, 0, 10, 0.5, 60, 0], sangre: [10, 0, 6, 25, 80, 0],
  rabo: [60, 0.5, 10, 1.5, 180, 0.1], chorizo: [80, 0, 10, 1.5, 400, 0.5], "harina de platano": [0, 0, 10, 1, 1300, 0],
  "coquito sin alcohol": [10, 0, 110, 0.3, 200, 0.5], "leche condensada de coco": [0, 0, 10, 1, 150, 0],
  "levadura nutricional": [0, 0, 30, 4, 1800, 0], aquafaba: [0, 0, 20, 0.5, 40, 0], "pasta de guayaba": [0, 0, 15, 0.4, 100, 0],
  gandul: [0, 0, 40, 1.5, 250, 0], sofrito: [0, 0, 25, 0.5, 220, 0], "apio del pais": [0, 0, 25, 0.9, 400, 0],
  quenepa: [0, 0, 15, 0.7, 250, 0], "cana de azucar": [0, 0, 10, 0.4, 40, 0], pajuil: [0, 0, 10, 0.3, 120, 0],
  jobo: [0, 0, 20, 0.9, 250, 0], pitahaya: [0, 0, 18, 0.7, 120, 0], caimito: [0, 0, 17, 0.3, 250, 0], cidra: [0, 0, 40, 0.3, 150, 0],
  malta: [0, 0, 10, 0.1, 40, 0], mabi: [0, 0, 5, 0.2, 30, 0], adobo: [0, 0, 200, 3, 300, 0], sazon: [0, 0, 200, 3, 300, 0],
  "guineo verde": [0, 0, 5, 0.4, 360, 0], jaca: [0, 0, 24, 0.3, 300, 0], nutella: [0, 0, 100, 3.5, 400, 0]
};
/* Cómo se prepara antes de cocinar y qué le quita al valor del USDA. El bacalao del USDA es el seco y
   salado (7,027 mg de sodio por 100 g); en la cocina de aquí siempre se desala (se remoja y se hierve
   botando el agua), lo que le quita cerca del 80 % de la sal. */
const NUTRI_PREP = { bacalao: { na: 0.21, es: "desalado: se cuenta un 79 % menos de sodio", en: "desalted: 79% less sodium counted" } };
/* Parte de los azúcares que es azúcar AÑADIDA (la de la fruta y la leche no cuenta), para la línea
 * "Incluye azúcares añadidos" de la etiqueta y el límite de las Guías Alimentarias 2025–2030. */
const NUTRI_ADDED = {
  azucar: 1, "azucar morena": 1, "azucar en polvo": 1, miel: 1, melao: 1, almibar: 1, granadina: 1, refresco: 1, malta: 1,
  gelatina: 1, pudin: 1, "mezcla para bizcocho": 1, bizcocho: 1, "galleta molida": 1, galleta: 1, pan: 1, "pan de hamburguesa": 1,
  "masa para pie": 1, disco: 1, hojaldre: 1, "tortilla de harina": 1, mayonesa: 1, licor: 1, amaretto: 1, "salsa de ostras": 1,
  mermelada: 0.9, "pasta de guayaba": 0.85, "leche condensada": 0.78, "leche condensada de coco": 0.9, "crema de coco": 0.9,
  "dulce de leche": 0.75, chocolate: 0.9, nutella: 0.95, "frutas abrillantadas": 0.8, cereza: 0.8, "coctel de frutas": 0.4,
  mantecado: 0.75, ketchup: 0.85, "salsa bbq": 0.9, "salsa marinara": 0.3, "leche de coco de carton": 0.9, "coquito sin alcohol": 0.7,
  granola: 0.8, "jugo de guayaba": 0.6, "leche de avena": 0.7, mabi: 0.8, "salsa inglesa": 0.8
};
/* Grupos de alimentos de las Guías Alimentarias 2025–2030: [grupo, gramos del alimento como se compra
 * que dan 1 porción, ¿grano integral?]. veg/fruit/dairy en tazas equivalentes, grain y prot en onzas
 * equivalentes (como las mide el USDA). Carnes: 1 oz cocida ≈ 37.8 g crudos comestibles. */
const NUTRI_GROUPS = (() => {
  const g = {};
  const put = (group, grams, list, whole = false) => { for (const k of list.split("|")) g[k] = [group, grams, whole]; };
  put("prot", 0, "pollo|pechuga|muslo|alita|pavo|guinea|molleja|cerdo|pernil|lechon|chuleta|costilla|patita|cuajo|gandinga|carne|rinon|bistec|carne molida|picadillo|rabo|higado|lengua|mondongo|cabro|conejo|ternera|ribeye|osobuco|pecho de res|solomillo|cordero|pato|codorniz|gallinita|higaditos|pescado|camaron|langosta|pulpo|calamar|juey|carrucho|salmon|ceti|almeja|ostion");
  put("prot", 28, "jamon|salchicha|jamonilla|longaniza|chorizo|salami|pepperoni|chuleta ahumada|carne bif|atun|sardina");
  put("prot", 12, "bacalao");
  put("prot", 50, "huevo"); put("prot", 66, "clara");
  put("prot", 65, "habichuela|garbanzo|gandul|habas"); put("prot", 20, "lenteja"); put("prot", 63, "tofu");
  put("prot", 14, "mani|nueces|almendra|ajonjoli|pistacho|avellana|chia"); put("prot", 16, "mantequilla de mani");
  put("grain", 28, "arroz|harina|harina de arroz|harina de maiz|farina|pan rallado|panko|galleta|espagueti|pan|pan de hamburguesa");
  put("grain", 93, "arroz cocido"); put("grain", 30, "tortilla de harina|tortilla de maiz");
  put("grain", 28, "avena|quinoa|granola", true);
  put("veg", 125, "habichuelas tiernas|calabaza|maiz|cebolla|cebollin|pimiento|aji|ajo|tomate|sofrito|zanahoria|pepino|apio|brocoli|coliflor|chayote|berenjena|calabacin|alcachofa|remolacha|guingambo|jaca|petit pois");
  put("veg", 150, "platano|platano maduro|guineo verde|yuca|yautia|name|batata|papa|pana|apio del pais|aguacate|harina de platano");
  put("veg", 60, "lechuga|espinaca|berro"); put("veg", 89, "repollo"); put("veg", 70, "champinon");
  put("veg", 245, "salsa de tomate|salsa marinara"); put("veg", 65, "pasta de tomate");
  put("fruit", 150, "guineo|pina|mango|papaya|guayaba|parcha|tamarindo|guanabana|quenepa|china|toronja|acerola|sandia|grosella|pajuil|jobo|pomarrosa|pitahaya|caimito|nispero|anon|melon|mamey|manzana|fresa|frambuesa|carambola|uva");
  put("fruit", 240, "jugo de limon|jugo de naranja|naranja agria|jugo de pina|coco de agua|agua de coco"); put("fruit", 80, "pasa|ciruelas secas");
  put("fruit", 250, "coctel de frutas");
  put("dairy", 244, "leche"); put("dairy", 126, "leche evaporada"); put("dairy", 102, "leche condensada");
  put("dairy", 42, "queso|queso cheddar|queso suizo|queso mozzarella|queso de bola|queso blanco|queso de freir"); put("dairy", 30, "queso parmesano");
  put("dairy", 124, "ricotta"); put("dairy", 245, "yogur"); put("dairy", 200, "yogur griego");
  return g;
})();
for (const food of NUTRI_FOODS) {
  const k0 = food.kw[0];
  const u = typeof NUTRI_USDA !== "undefined" && NUTRI_USDA[k0];
  if (u) {
    const [fdc, ef, desc, ...v] = u;
    food.n = {};
    NUTRI_KEYS.forEach((k, i) => { food.n[k] = (v[i] || 0) * ef; });
    food.src = { fdc, ef, desc };
    const prep = NUTRI_PREP[k0];
    if (prep) { for (const k of NUTRI_KEYS) if (prep[k]) food.n[k] *= prep[k]; food.src.prep = { es: prep.es, en: prep.en }; }
  } else {
    const x = NUTRI_LOCAL_X[k0] || [0, 0, 0, 0, 0, 0];
    ["chol", "trans", "ca", "fe", "k", "vd"].forEach((k, i) => { food.n[k] = x[i]; });
    food.src = null;
  }
  food.n.add = food.n.s * (NUTRI_ADDED[k0] || 0);
  const grp = NUTRI_GROUPS[k0];
  // Carnes y mariscos: la porción depende de lo comestible (1 oz cocida ≈ 37.8 g crudos sin hueso).
  food.g = grp ? [grp[0], grp[1] || 37.8 / ((food.src && food.src.ef) || 1), grp[2]] : null;
}

/* Unidades → cómo se pasan a gramos. `g` fijo, o una medida del alimento. */
const NUTRI_UNITS = [
  [/^(lbs?|libras?)\b/, { g: 453.6 }],
  [/^(oz|onzas?)\b/, { g: 28.35 }],
  [/^(kg|kilos?)\b/, { g: 1000 }],
  [/^(g|gramos?)\b/, { g: 1 }],
  [/^(ml|mililitros?)\b/, { ml: 1 }],
  [/^(litros?)\b/, { ml: 1000 }],
  [/^(galon|galones)\b/, { ml: 3785 }],
  [/^(tazas?)\b/, { cup: 1 }],
  [/^(cucharadas?|cdas?)\b/, { cup: 1 / 16 }],
  [/^(cucharaditas?|cdtas?)\b/, { cup: 1 / 48 }],
  [/^(latas?|paquetes?|envases?|barras?|botellas?|cajas?|frascos?)\b/, { pack: true }],
  [/^(sobres?)\b/, { sobre: true }],
  [/^(dientes?)\b/, { g: 3 }],
  [/^(cabezas?)\b/, { head: true }],
  [/^(hojas?)\b/, { g: 0.5 }],
  [/^(pizcas?)\b/, { g: 0.4 }],
  [/^(rajas?|ramas?|ramitas?)\b/, { g: 2.5 }],
  [/^(manojos?|mazos?|punados?)\b/, { g: 50 }],
  [/^(tallos?)\b/, { stalk: true }],
  [/^(mazorcas?)\b/, { g: 150 }],
  [/^(lonjas?|lascas?|rebanadas?|ruedas?|laminas?|tiras?)\b/, { slice: true }],
  [/^(pedazos?|trozos?)\b/, { g: 10 }],
  [/^(vainas?)\b/, { g: 12 }],
  [/^(chorritos?)\b/, { g: 5 }],
  [/^(gotas?|granos?)\b/, { g: 0.05 }]
];

/* Valores diarios de la etiqueta de la FDA (dieta de 2,000 calorías). */
const NUTRI_DV = { kcal: 2000, fat: 78, sat: 20, na: 2300, c: 275, fib: 28, p: 50, chol: 300, add: 50, vd: 20, ca: 1300, fe: 18, k: 4700 };

const nutriNorm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* Cada palabra clave admite plural en cada palabra ("chuletas ahumadas"). */
const NUTRI_INDEX = NUTRI_FOODS.flatMap((food) => food.kw.map((kw) => ({
  food, kw,
  rx: new RegExp(`\\b${kw.split(" ").map((w) => `${w}(?:s|es)?`).join("\\s+")}\\b`)
})));

/** El alimento que aparece primero en el texto; en empate, la clave más
 *  larga ("leche de coco" antes que "leche"). */
function findFood(text) {
  let best = null;
  for (const e of NUTRI_INDEX) {
    const m = e.rx.exec(text);
    if (!m) continue;
    if (!best || m.index < best.at || (m.index === best.at && e.kw.length > best.kw.length)) {
      best = { at: m.index, kw: e.kw, food: e.food };
    }
  }
  return best && best.food;
}

const FRAC = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3, "⅛": 0.125 };
const QTY_RE = /^(\d+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔⅛]|\d+\/\d+)?(?:\s*[-–]\s*(\d+(?:[.,]\d+)?)([½¼¾⅓⅔⅛])?)?(?=\s|$)/;

/** Cantidad al inicio ("2", "1½", "6-8" → 7). */
function readQty(text) {
  const m = text.match(QTY_RE);
  if (!m || !m[0].trim() || (!m[1] && !m[2])) return null;
  const num = (s) => Number(String(s).replace(",", "."));
  const frac = (f) => (f ? FRAC[f] ?? Number(f.split("/")[0]) / Number(f.split("/")[1]) : 0);
  let v = (m[1] ? num(m[1]) : 0) + frac(m[2]);
  if (m[3]) v = (v + num(m[3]) + frac(m[4])) / 2;
  return v > 0 ? { v, len: m[0].length } : null;
}

/** Peso indicado entre paréntesis o con "de": "(14 oz)", "(3-4 lbs)", "de 12-14 lbs". */
function readWeight(text) {
  const m = text.match(/(?:\(|\bde\s)(\d+(?:[.,]\d+)?)(?:\s*-\s*(\d+(?:[.,]\d+)?))?\s*(oz|onzas?|lbs?|libras?|ml|g)\b/);
  if (!m) return null;
  const a = Number(m[1].replace(",", "."));
  const v = m[2] ? (a + Number(m[2].replace(",", "."))) / 2 : a;
  const unit = m[3];
  if (/^(oz|onza)/.test(unit)) return v * 28.35;
  if (/^(lb|libra)/.test(unit)) return v * 453.6;
  return v; // ml o g
}

/* Jugo exprimido por fruta, en gramos. */
const JUICE_G = { limon: 30, limones: 30, china: 85, chinas: 85, naranja: 85, naranjas: 85, toronja: 150, toronjas: 150 };

/** Gramos y alimento de un fragmento de ingrediente, o el motivo por el que
 *  no se cuenta: "free" (sin cantidad), "unknown" (no reconocido). */
function measurePart(part) {
  // Las alternativas entre paréntesis no son el peso de esta cantidad:
  // "4 filetes de mero (o 1 chillo entero de 2 libras)".
  let text = part.replace(/\(o\s[^)]*\)/g, "").trim();

  // "Jugo de 2 limones", "Pulpa de 2 parchas", "Cáscara de 1 limón"
  const pre = text.match(/^(jugo|pulpa|cascara|ralladura) de\s+(.*)$/);
  if (pre && !/^[\d½¼¾⅓⅔⅛]/.test(pre[2])) return { kind: "free" }; // "Jugo de limón" sin cantidad
  if (pre) {
    if (pre[1] === "cascara" || pre[1] === "ralladura") return { kind: "trace" };
    const q = readQty(pre[2]);
    if (q) {
      const fruit = pre[2].slice(q.len).trim().split(/\s+/)[0];
      if (pre[1] === "jugo" && JUICE_G[fruit]) {
        const food = findFood(/^lim/.test(fruit) ? "jugo de limon" : "jugo de naranja");
        return { kind: "ok", food, grams: q.v * JUICE_G[fruit] };
      }
      const food = findFood(pre[2].slice(q.len));
      if (food && food.m.u) return { kind: "ok", food, grams: q.v * food.m.u };
    }
    return { kind: "unknown" };
  }

  const q = readQty(text);
  if (!q) return { kind: "free" };
  let rest = text.slice(q.len).trim();

  let unit = null;
  for (const [rx, def] of NUTRI_UNITS) {
    const m = rest.match(rx);
    if (m) { unit = def; rest = rest.slice(m[0].length).trim(); break; }
  }
  // Utensilios con cantidad ("12 palitos de pincho, remojados en agua",
  // "6 vasos"): no son comida, aunque mencionen alguna.
  if (/^(de\s+)?(colador|palitos?|palillos?|vasos?|moldes?|papel|hilo|bolsas?|carapachos?|conchas?)\b/.test(rest)) return { kind: "free" };
  const food = findFood(rest.replace(/^de\s+/, ""));
  if (!food) return { kind: "unknown" };

  const m = food.m;
  const weight = readWeight(text);
  const cupG = m.cup || 240;
  let grams = null;
  if (!unit) grams = weight ? q.v * weight : m.u ? q.v * m.u : null;
  else if (unit.g != null) grams = q.v * unit.g;
  else if (unit.ml) grams = q.v * unit.ml * (cupG / 240);
  else if (unit.cup) grams = q.v * unit.cup * cupG;
  else if (unit.pack) grams = q.v * (weight || m.can || 400);
  else if (unit.sobre) grams = q.v * (m.sobre || 7);
  else if (unit.head) grams = q.v * (food.kw[0] === "ajo" ? 40 : m.u || 300);
  else if (unit.slice) grams = q.v * (m.sl || 20);
  else if (unit.stalk) grams = q.v * (m.u && m.u > 40 ? m.u : 40); // apio 40 g; caña, un tallo entero
  if (grams == null) return { kind: "unknown" };
  return { kind: "ok", food, grams };
}

/** Separa "Salsa: 8 oz de guayaba, ½ taza de ketchup y 2 cucharadas de…" en
 *  sus partes con cantidad. */
function splitIngredient(line) {
  let t = nutriNorm(line);
  const colon = t.indexOf(":");
  if (colon > -1 && !/\d/.test(t.slice(0, colon))) t = t.slice(colon + 1);
  return t.split(/,\s*(?=[\d½¼¾⅓⅔⅛])|\s+y\s+(?=[\d½¼¾⅓⅔⅛])/);
}

const EMPTY_TOTALS = () => ({ kcal: 0, p: 0, c: 0, s: 0, fib: 0, fat: 0, sat: 0, na: 0, chol: 0, trans: 0, ca: 0, fe: 0, k: 0, vd: 0, add: 0 });
// vegNS: los vegetales que no son vianda (v4.48), para el "plato saludable" de los planes: el USDA cuenta las
// viandas como vegetales (con almidón), pero la mitad del plato se refiere a los otros.
const EMPTY_GROUPS = () => ({ veg: 0, vegNS: 0, fruit: 0, grain: 0, wgrain: 0, prot: 0, dairy: 0 });
const NUTRI_STARCHY = new Set(["platano", "platano maduro", "guineo verde", "yuca", "yautia", "name", "batata", "papa", "pana", "apio del pais", "harina de platano"]);

/* Viandas, vegetales, granos y pastas que se hierven y se escurren pierden en el agua parte de sus
 * minerales. Factores aproximados a la Tabla de factores de retención del USDA (Release 6, 2007)
 * para "hervido y escurrido"; en sopas y guisos el caldo se come y no se aplica. */
const NUTRI_RETAIN_DRAINED = { k: 0.75, ca: 0.95, fe: 0.95 };
const isDrained = (recipe) => {
  const st = nutriNorm(recipe.steps.es.join(" "));
  return /(hierv|herv|sancoch|cocine en agua)/.test(st) && /(escurr|cuele|bote el agua|saque del agua)/.test(st) && !["sopas"].includes(recipe.category);
};

/** Gramos de una línea de ingredientes (para ver las medidas en gramos o ml). */
function lineGrams(line) {
  let grams = 0, ok = false, liquid = false;
  for (const r of splitIngredient(line).map(measurePart)) {
    if (r.kind !== "ok") continue;
    grams += r.grams; ok = true;
    if (/^(leche|agua|caldo|jugo|aceite|vinagre|ron|vino|cerveza|licor|refresco|crema|coco de agua|agua de coco|melao|miel|almibar|cafe|te negro|salsa)/.test(r.food.kw[0])) liquid = true;
  }
  return ok ? { grams, liquid } : null;
}
const nutriCache = new Map();

/** Estimación de una receta: totales, por porción y qué no se pudo contar
 *  (índices de sus ingredientes, para mostrarlos en cualquier idioma). */
/* Alcohol (etanol) en gramos por cada 100 g de la bebida, según la primera palabra clave del alimento:
 * ron, pitorro, tequila y cachaça ≈ 40% vol.; vino ≈ 12%; vino dulce ≈ 16%; licores ≈ 25%; cerveza ≈ 5%.
 * Con esto la pestaña de seguridad calcula los tragos estándar (14 g de alcohol) de cada porción. */
const NUTRI_ALCOHOL = { "ron": 33, "tequila": 33, "cachaca": 33, "brandy": 33, "amaretto": 22, "vino": 9.6, "vino dulce": 12.7, "licor": 19, "cerveza": 3.9 };

function estimateNutrition(recipe) {
  if (nutriCache.has(recipe.id)) return nutriCache.get(recipe.id);
  const total = EMPTY_TOTALS();
  const missing = [];
  const partial = []; // líneas contadas sólo en parte
  const noQty = [];   // líneas sin cantidad (no se suman)
  const groups = EMPTY_GROUPS();
  const sources = []; // por línea: los alimentos con que se contó (y su número FDC del USDA)
  let counted = 0, measurable = 0, frying = false, alcohol = 0;
  const drained = isDrained(recipe);

  const add = (food, grams, line = -1) => {
    const retain = drained && food.g && (food.g[0] === "veg" || food.g[0] === "grain") ? NUTRI_RETAIN_DRAINED : null;
    for (const k in total) total[k] += ((food.n[k] || 0) * grams * (retain && retain[k] ? retain[k] : 1)) / 100;
    const alc = NUTRI_ALCOHOL[food.kw[0]];
    if (alc) alcohol += (alc * grams) / 100;
    if (food.g) {
      groups[food.g[0]] += grams / food.g[1];
      if (food.g[2]) groups.wgrain += grams / food.g[1];
      if (food.g[0] === "veg" && !NUTRI_STARCHY.has(food.kw[0])) groups.vegNS += grams / food.g[1];
    }
    if (line > -1) (sources[line] = sources[line] || []).push(food);
  };

  recipe.ingredients.es.forEach((line, i) => {
    const n = nutriNorm(line);
    if (/\bopcional\b/.test(n)) { noQty.push(i); return; } // lo opcional no se suma (pero se lista)
    if (/para el agua/.test(n)) return; // sal o aceite del agua de hervir: se bota
    if (/^carbon vegetal|astillas de/.test(n)) return; // combustible de la parrilla: no se come
    if (/para freir/.test(n) && !/^\s*[\d½¼¾⅓⅔⅛]/.test(n)) {
      // Aceite absorbido al freír: aprox. ½ cucharada (7 g) por porción.
      frying = true;
      add(findFood("aceite"), 7 * recipe.servings);
      return;
    }
    const parts = splitIngredient(line).map(measurePart);
    const withQty = parts.filter((r) => r.kind !== "free");
    if (!withQty.length) { noQty.push(i); return; } // "sal al gusto", "hojas de plátano"…: se listan, no se suman
    measurable++;
    let ok = false, lost = false;
    for (const r of withQty) {
      if (r.kind === "ok") { add(r.food, r.grams, i); ok = true; }
      else if (r.kind === "trace") ok = true;
      else lost = true;
    }
    // Una línea con varias cosas ("Salsa: ½ taza de ketchup, 2 cda de…") donde una parte no se reconoció:
    // antes se contaba como completa; ahora se dice que se contó sólo en parte.
    if (ok) { counted++; if (lost) partial.push(i); } else missing.push(i);
  });

  const per = {};
  for (const k in total) per[k] = total[k] / recipe.servings;
  // Porciones de cada grupo de alimentos (Guías Alimentarias) en una porción de la receta.
  const groupsPer = {};
  for (const k in groups) groupsPer[k] = groups[k] / recipe.servings;
  // alcohol: gramos de etanol por porción (0 si no lleva).
  const result = { total, per, counted, measurable, missing, partial, noQty, frying, alcohol: alcohol / recipe.servings, groups: groupsPer, sources, drained };
  nutriCache.set(recipe.id, result);
  return result;
}
