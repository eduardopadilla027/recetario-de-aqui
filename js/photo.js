/* Recetarios de Aquí · Motor de fotos: achica una foto en el propio navegador antes de subirla.
 *
 * shrinkPhoto(file) toma la imagen escogida o tomada con la cámara (JPG, PNG, WebP; HEIC sólo
 * donde el navegador la sabe leer, como Safari) y devuelve un data URL WebP (o JPEG si el
 * navegador no codifica WebP) de a lo sumo PHOTO_MAX_SIDE px por el lado largo y unos
 * PHOTO_MAX_BYTES. Respeta la orientación EXIF y, al redibujar, descarta todos los metadatos
 * (ubicación GPS, modelo del teléfono…). Sin servidor ni librerías. ARQUITECTURA.md §7.5.
 *
 * Errores (err.code): "type" (no es imagen), "big" (archivo de más de PHOTO_MAX_INPUT),
 * "decode" (el navegador no la pudo leer), "encode" (no se pudo achicar lo suficiente). */

const PHOTO_MAX_SIDE = 1024;              // px del lado largo
const PHOTO_MIN_SIDE = 320;               // no se baja de aquí al buscar el peso
const PHOTO_MAX_BYTES = 120 * 1024;       // peso final aproximado (binario; en base64 ≈ +33 %)
const PHOTO_MAX_INPUT = 30 * 1024 * 1024; // archivo de entrada
const PHOTO_QUALITIES = [0.82, 0.72, 0.62, 0.52];

function photoError(code) { const e = new Error("photo:" + code); e.code = code; return e; }

let photoMime = null; // "image/webp" o "image/jpeg", según lo que el navegador sepa codificar
function photoOutputType() {
  if (!photoMime) {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    photoMime = c.toDataURL("image/webp").startsWith("data:image/webp") ? "image/webp" : "image/jpeg";
  }
  return photoMime;
}

/* Bytes reales de un data URL base64. */
function dataUrlBytes(url) {
  const b64 = url.slice(url.indexOf(",") + 1);
  return Math.floor(b64.length * 3 / 4) - (b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0);
}

/* Lee la imagen ya girada según su EXIF. */
async function decodePhoto(file) {
  if (window.createImageBitmap) {
    try { return await createImageBitmap(file, { imageOrientation: "from-image" }); } catch (_) { /* se prueba con <img> */ }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } catch (_) {
    throw photoError("decode");
  } finally {
    URL.revokeObjectURL(url);
  }
}

function drawPhoto(src, w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#fff"; // las PNG transparentes no quedan negras en JPEG
  ctx.fillRect(0, 0, w, h);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, 0, 0, w, h);
  return c;
}

/* Reducción por mitades hasta cerca del tamaño final: más nítida que un solo salto grande. */
function scalePhoto(src, srcW, srcH, w, h) {
  let cur = src, cw = srcW, ch = srcH;
  while (cw / 2 >= w * 1.2 && ch / 2 >= h * 1.2) {
    cw = Math.round(cw / 2);
    ch = Math.round(ch / 2);
    cur = drawPhoto(cur, cw, ch);
  }
  return drawPhoto(cur, w, h);
}

async function shrinkPhoto(file, opts = {}) {
  const maxSide = opts.maxSide || PHOTO_MAX_SIDE;
  const maxBytes = opts.maxBytes || PHOTO_MAX_BYTES;
  const looksImage = /^image\//.test((file && file.type) || "") || /\.(jpe?g|png|webp|gif|heic|heif|avif)$/i.test((file && file.name) || "");
  if (!looksImage) throw photoError("type");
  if (file.size > PHOTO_MAX_INPUT) throw photoError("big");

  const src = await decodePhoto(file);
  const srcW = src.naturalWidth || src.width;
  const srcH = src.naturalHeight || src.height;
  if (!srcW || !srcH) throw photoError("decode");

  const type = photoOutputType();
  let side = Math.min(maxSide, Math.max(srcW, srcH));
  let best = null;
  try {
    for (;;) {
      const k = side / Math.max(srcW, srcH);
      const w = Math.max(1, Math.round(srcW * k));
      const h = Math.max(1, Math.round(srcH * k));
      const canvas = scalePhoto(src, srcW, srcH, w, h);
      for (const q of PHOTO_QUALITIES) {
        const dataUrl = canvas.toDataURL(type, q);
        const bytes = dataUrlBytes(dataUrl);
        if (!best || bytes < best.bytes) best = { dataUrl, bytes, width: w, height: h, type };
        if (bytes <= maxBytes) return best;
      }
      if (side <= PHOTO_MIN_SIDE) break;
      side = Math.max(PHOTO_MIN_SIDE, Math.round(side * 0.8));
    }
  } finally {
    if (src.close) src.close(); // ImageBitmap: libera la memoria de la foto original
  }
  // Ni al mínimo cupo: se acepta si no pasa de 1.5 veces el límite (fotos con mucho detalle).
  if (best && best.bytes <= maxBytes * 1.5) return best;
  throw photoError("encode");
}

/* "84 KB" / "1.2 MB" */
function fmtBytes(n, lang) {
  const loc = lang === "es" ? "es-PR" : "en-US";
  if (n < 1024 * 1024) return `${Math.max(1, Math.round(n / 1024)).toLocaleString(loc)} KB`;
  return `${(n / 1024 / 1024).toLocaleString(loc, { maximumFractionDigits: 1 })} MB`;
}
