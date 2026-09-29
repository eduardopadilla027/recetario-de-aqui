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
  F("alita|alitas de pollo", 203, 17.5, 0, 0, 0, 14, 4, 75, { u: 90 }),
  F("pavo", 150, 20, 0, 0, 0, 7, 2, 65, { u: 6000, cup: 140 }),
  F("guinea", 110, 16.4, 0, 0, 0, 4.5, 1.3, 47, { u: 1200 }),
  F("molleja|mollejas de pollo", 94, 17.7, 0, 0, 0, 2.1, 0.5, 69, { u: 30, cup: 145 }),
  // Cerdo
  F("cerdo|carne de cerdo|masitas|paleta|pierna de cerdo", 240, 17, 0, 0, 0, 19, 7, 60, { u: 3000 }),
  F("pernil", 210, 16, 0, 0, 0, 16, 6, 60, { u: 3600 }),
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
  F("longaniza", 300, 15, 2, 0, 0, 25, 9, 900, { u: 100 }),
  F("chorizo", 455, 24, 2, 0, 0, 38, 14, 1235, { u: 75, cup: 130 }),
  F("salami", 336, 22, 1, 0, 0, 26, 9.5, 1740, { cup: 130 }),
  F("pepperoni", 504, 19, 1, 0, 0, 46, 17, 1582, { cup: 130 }),
  F("sangre|sangre de cerdo", 80, 17, 0, 0, 0, 0.5, 0.2, 60, { cup: 240 }),
  // Res y otras carnes
  F("carne|carne de res|res|falda|boliche|punta|palomilla|churrasco|rabo de res", 200, 19, 0, 0, 0, 13, 5, 66, { cup: 225 }),
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
  // Pescados y mariscos
  F("almeja|mejillon", 86, 14.7, 3.6, 0, 0, 1, 0.2, 600, { u: 12, can: 283 }),
  F("hoja de platano", 0, 0, 0, 0, 0, 0, 0, 0),
  F("pescado|filete|mero|chillo|dorado|mahi mahi|tilapia|pargo|sierra", 96, 20, 0, 0, 0, 1.7, 0.4, 60, { u: 170, sl: 170 }),
  F("bacalao", 290, 63, 0, 0, 0, 2.4, 0.5, 1500, { cup: 100 }),
  F("camaron", 85, 20, 0, 0, 0, 0.5, 0.1, 119, { u: 15, cup: 145 }),
  F("langosta", 112, 20.6, 2.4, 0, 0, 1.5, 0.2, 177, { u: 150 }),
  F("pulpo", 82, 15, 2.2, 0, 0, 1, 0.2, 230),
  F("calamar", 150, 15.6, 3, 0, 0, 8, 1.2, 300, { can: 111 }),
  F("juey|cangrejo|carne de juey|carne de cangrejo", 87, 18, 0, 0, 0, 1, 0.2, 290, { u: 40, cup: 135 }),
  F("carrucho|caracol", 130, 26, 1.7, 0, 0, 1.2, 0.3, 153),
  F("atun", 190, 28, 0, 0, 0, 8, 1.5, 350, { can: 142, cup: 150 }),
  // Huevos y lácteos
  F("huevo", 143, 12.6, 0.7, 0.4, 0, 9.5, 3.1, 142, { u: 50, cup: 243 }),
  F("yema", 322, 16, 3.6, 0.6, 0, 27, 9.6, 48, { u: 17 }),
  F("clara", 52, 11, 0.7, 0.7, 0, 0.2, 0, 166, { u: 33 }),
  F("leche", 61, 3.2, 4.8, 5, 0, 3.3, 1.9, 43, { cup: 244 }),
  F("leche evaporada", 134, 6.8, 10, 10, 0, 7.6, 4.6, 106, { cup: 252, can: 354 }),
  F("leche condensada", 321, 7.9, 54, 54, 0, 8.7, 5.5, 127, { cup: 306, can: 397 }),
  F("leche de coco", 197, 2, 2.8, 1, 0, 21, 18.9, 13, { cup: 240, can: 400 }),
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
  F("galleta|galletas de soda", 430, 9, 72, 10, 2.5, 11, 3, 700, { u: 6 }),
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
  F("miel", 304, 0.3, 82, 82, 0.2, 0, 0, 4, { cup: 339 }),
  F("melao|melaza", 290, 0, 75, 74, 0, 0.1, 0, 37, { cup: 328 }),
  F("almibar|almibar simple", 260, 0, 67, 67, 0, 0, 0, 1, { cup: 320 }),
  F("chocolate|chocolate de mesa", 480, 4, 72, 66, 5, 18, 10, 10, { can: 90, cup: 170 }),
  F("cacao|cocoa", 228, 19.6, 58, 1.8, 37, 13.7, 8, 21, { cup: 86 }),
  F("bolitas de cacao|cacao del pais|cacao puro", 501, 12, 29, 0, 17, 52, 32, 20, { u: 30 }),
  F("pasa", 299, 3, 79, 59, 3.7, 0.5, 0.1, 11, { cup: 145 }),
  F("nueces|nuez", 654, 15, 14, 2.6, 6.7, 65, 6, 2, { cup: 117 }),
  F("almendra|almendras molidas", 579, 21, 22, 4.4, 12.5, 50, 3.8, 1, { cup: 95, u: 1.2 }),
  F("ajonjoli", 573, 17.7, 23, 0.3, 11.8, 49.7, 7, 11, { cup: 144 }),
  F("mermelada|jalea", 250, 0.4, 63, 50, 1, 0.1, 0, 30, { cup: 320 }),
  F("pasta de guayaba", 286, 0.4, 75, 60, 2.5, 0.1, 0, 20, { can: 227 }),
  F("cereza|cerezas marrasquino", 165, 0.2, 42, 38, 3, 0.2, 0, 4, { u: 5 }),
  // Legumbres (enlatadas con su líquido, salvo las lentejas secas)
  F("habichuela|frijol", 92, 5.6, 16.5, 0.5, 4.6, 0.4, 0.1, 250, { can: 425, cup: 250 }),
  F("garbanzo", 120, 6.2, 19, 3.5, 5.2, 2.2, 0.2, 250, { can: 425, cup: 240 }),
  F("gandul", 95, 5, 17, 1, 5, 0.5, 0.1, 250, { can: 425, cup: 240 }),
  F("lenteja", 352, 24.6, 63, 2, 10.7, 1, 0.2, 6, { cup: 192 }),
  F("habichuelas tiernas", 31, 1.8, 7, 3.3, 2.7, 0.2, 0, 6, { cup: 110 }),
  F("petit pois|guisante", 81, 5.4, 14.5, 5.7, 5.1, 0.4, 0.1, 5, { cup: 145, can: 250 }),
  // Viandas y vegetales
  // El plátano verde es casi todo almidón; al madurar, ese almidón se vuelve azúcar.
  F("platano|platano verde", 122, 1.3, 32, 2, 2.3, 0.4, 0.1, 4, { u: 180, cup: 200 }),
  F("platano maduro|platano bien maduro|amarillo", 122, 1.3, 32, 20, 2.3, 0.4, 0.1, 4, { u: 180, cup: 200 }),
  F("guineo|guineito", 89, 1.1, 23, 12, 2.6, 0.3, 0.1, 1, { u: 118 }),
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
  F("chayote", 19, 0.8, 4.5, 1.7, 1.7, 0.1, 0, 2, { u: 200 }),
  F("berenjena", 25, 1, 5.9, 3.5, 3, 0.2, 0, 2, { u: 450 }),
  F("aguacate", 160, 2, 8.5, 0.7, 6.7, 14.7, 2.1, 7, { u: 350, cup: 150 }),
  F("remolacha", 43, 1.6, 9.6, 6.8, 2.8, 0.2, 0, 78, { u: 80 }),
  F("guingambo|quimbombo", 33, 1.9, 7.5, 1.5, 3.2, 0.2, 0, 7, { u: 12, cup: 100 }),
  F("cilantro|recao|culantro|perejil|menta|yerbabuena|albahaca|limoncillo", 23, 2, 3.7, 0.9, 2.8, 0.5, 0, 46, { cup: 16, u: 1 }),
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
  F("mamey", 51, 0.5, 12.5, 7, 3, 0.5, 0.1, 15, { u: 500, cup: 170 }),
  F("yogur|crema agria", 100, 5, 5, 4, 0, 7, 4.5, 50, { cup: 245 }),
  F("manzana", 52, 0.3, 14, 10, 2.4, 0.2, 0, 1, { u: 180, cup: 125 }),
  F("fresa", 32, 0.7, 7.7, 4.9, 2, 0.3, 0, 1, { cup: 150 }),
  F("uva", 69, 0.7, 18, 15.5, 0.9, 0.2, 0.1, 2, { cup: 151 }),
  F("coco|coco rallado|coco seco", 354, 3.3, 15, 6, 9, 33.5, 30, 20, { u: 400, cup: 80 }),
  // Jugos y bebidas
  F("jugo de limon|jugo de limon verde", 25, 0.4, 8.4, 1.7, 0.4, 0.1, 0, 1, { cup: 244 }),
  F("jugo de naranja|jugo de china", 45, 0.7, 10.4, 8.4, 0.2, 0.2, 0, 1, { cup: 248 }),
  F("naranja agria|jugo de naranja agria", 25, 0.5, 6, 3, 0.2, 0.1, 0, 1, { cup: 240 }),
  F("jugo de pina", 53, 0.4, 13, 10, 0.2, 0.1, 0, 2, { cup: 250 }),
  F("jugo de guayaba|nectar", 55, 0.1, 14, 13, 0.3, 0.1, 0, 5, { cup: 250 }),
  F("agua de coco", 19, 0.7, 3.7, 2.6, 1.1, 0.2, 0.2, 105, { cup: 240 }),
  F("ron|pitorro", 231, 0, 0, 0, 0, 0, 0, 1, { cup: 240, can: 750 }),
  F("vino", 83, 0.1, 2.6, 0.6, 0, 0, 0, 5, { cup: 240, can: 750 }),
  F("vino dulce", 160, 0.2, 14, 8, 0, 0, 0, 9, { cup: 240, can: 750 }),
  F("licor|licor de anis", 330, 0, 35, 35, 0, 0, 0, 5, { cup: 240, can: 750 }),
  F("refresco|refresco de cola", 42, 0, 10.6, 10.6, 0, 0, 0, 4, { cup: 248, can: 355 }),
  F("malta", 62, 0.5, 15, 13, 0, 0, 0, 10, { can: 355 }),
  F("cerveza", 43, 0.5, 3.6, 0, 0, 0, 0, 4, { cup: 240, can: 355 }),
  F("mabi", 40, 0, 10, 9, 0, 0, 0, 5, { cup: 240 }),
  F("corteza|corteza de mabi", 0, 0, 0, 0, 0, 0, 0, 0),
  F("granadina", 268, 0, 67, 60, 0, 0, 0, 30, { cup: 320 }),
  F("cafe|cafe negro", 1, 0.1, 0, 0, 0, 0, 0, 2, { cup: 240 }),
  F("agua|hielo", 0, 0, 0, 0, 0, 0, 0, 0, { cup: 240 }),
  F("caldo|caldo de pollo|consome", 6, 0.6, 0.4, 0.2, 0, 0.2, 0.1, 343, { cup: 240 }),
  // Grasas, condimentos y sazones
  F("aceite|aceite de oliva|aceite vegetal|aceite con achiote", 884, 0, 0, 0, 0, 100, 14, 0, { cup: 218 }),
  F("manteca|manteca vegetal", 900, 0, 0, 0, 0, 100, 40, 0, { cup: 205 }),
  F("vinagre", 18, 0, 0.04, 0, 0, 0, 0, 2, { cup: 239 }),
  F("ketchup", 101, 1, 27, 22, 0.3, 0.1, 0, 907, { cup: 240 }),
  F("salsa bbq|salsa barbacoa", 172, 0.8, 41, 33, 0.9, 0.6, 0.1, 1027, { cup: 280 }),
  F("salsa marinara", 50, 1.4, 8, 5, 2, 1.5, 0.2, 450, { cup: 250, can: 680 }),
  F("salsa inglesa", 78, 0, 19, 10, 0, 0, 0, 980, { cup: 275 }),
  F("salsa de soya", 53, 8, 4.9, 0.4, 0.8, 0.6, 0.1, 5493, { cup: 255 }),
  F("mostaza", 60, 3.7, 5.3, 0.9, 4, 3.3, 0.2, 1120, { cup: 250 }),
  F("sal|sal gruesa", 0, 0, 0, 0, 0, 0, 0, 38758, { cup: 292 }),
  F("adobo", 150, 5, 30, 1, 5, 1, 0, 42500, { cup: 150 }),
  F("sazon|sazon casero", 150, 5, 30, 1, 5, 1, 0, 27857, { cup: 200, sobre: 1.4 }),
  F("polvo de hornear", 53, 0, 28, 0, 0, 0, 0, 10600, { cup: 220 }),
  F("bicarbonato", 0, 0, 0, 0, 0, 0, 0, 27360, { cup: 220 }),
  F("vainilla", 288, 0.1, 12.6, 12.6, 0, 0.1, 0, 9, { cup: 208 }),
  F("levadura", 325, 40, 41, 0, 27, 7.6, 1, 50, { cup: 150, sobre: 7 }),
  F("canela|clavo|clavos de olor|oregano|comino|pimienta|nuez moscada|laurel|anis|jengibre|achiote|pimenton|cilantro en polvo|coriandro|hojuelas de aji|ajo en polvo|cremor tartaro|colorante|especia", 300, 8, 60, 3, 30, 6, 1, 30, { cup: 110, u: 0.2 })
];

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
  [/^(manojos?|punados?)\b/, { g: 50 }],
  [/^(tallos?)\b/, { stalk: true }],
  [/^(mazorcas?)\b/, { g: 150 }],
  [/^(lonjas?|lascas?|rebanadas?|ruedas?|laminas?)\b/, { slice: true }],
  [/^(pedazos?|trozos?)\b/, { g: 10 }],
  [/^(vainas?)\b/, { g: 12 }],
  [/^(chorritos?)\b/, { g: 5 }],
  [/^(gotas?|granos?)\b/, { g: 0.05 }]
];

const NUTRI_DV = { kcal: 2000, fat: 78, sat: 20, na: 2300, c: 275, fib: 28, p: 50 };

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

const EMPTY_TOTALS = () => ({ kcal: 0, p: 0, c: 0, s: 0, fib: 0, fat: 0, sat: 0, na: 0 });
const nutriCache = new Map();

/** Estimación de una receta: totales, por porción y qué no se pudo contar
 *  (índices de sus ingredientes, para mostrarlos en cualquier idioma). */
function estimateNutrition(recipe) {
  if (nutriCache.has(recipe.id)) return nutriCache.get(recipe.id);
  const total = EMPTY_TOTALS();
  const missing = [];
  let counted = 0, measurable = 0, frying = false;

  const add = (food, grams) => {
    for (const k in total) total[k] += (food.n[k] * grams) / 100;
  };

  recipe.ingredients.es.forEach((line, i) => {
    const n = nutriNorm(line);
    if (/\bopcional\b/.test(n)) return; // lo opcional no se suma
    if (/para el agua/.test(n)) return; // sal o aceite del agua de hervir: se bota
    if (/para freir/.test(n) && !/^\s*[\d½¼¾⅓⅔⅛]/.test(n)) {
      // Aceite absorbido al freír: aprox. ½ cucharada (7 g) por porción.
      frying = true;
      add(findFood("aceite"), 7 * recipe.servings);
      return;
    }
    const parts = splitIngredient(line).map(measurePart);
    const withQty = parts.filter((r) => r.kind !== "free");
    if (!withQty.length) return; // "sal al gusto", "hojas de plátano"…
    measurable++;
    let ok = false;
    for (const r of withQty) {
      if (r.kind === "ok") { add(r.food, r.grams); ok = true; }
      else if (r.kind === "trace") ok = true;
    }
    if (ok) counted++; else missing.push(i);
  });

  const per = {};
  for (const k in total) per[k] = total[k] / recipe.servings;
  const result = { total, per, counted, measurable, missing, frying };
  nutriCache.set(recipe.id, result);
  return result;
}
