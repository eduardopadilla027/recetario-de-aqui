/* Recetarios de Aquí · trabajador de servicio (uso sin internet).
 *
 * La primera visita guarda en el celular o la computadora la página, los estilos, los scripts (las
 * recetas son archivos .js) y los iconos. Después:
 * - Con internet, siempre se pide lo nuevo al servidor (red primero) y se actualiza la copia.
 * - Sin internet (o si la red tarda más de 4 s), se usa la copia guardada: el recetario abre igual.
 * No se tocan las llamadas a Firebase (cuenta, planes, reseñas): ésas las maneja su propio SDK.
 * Al publicar una versión nueva, subir SW_VERSION (igual que APP_VERSION en js/app.js) para que se
 * borren las copias viejas. */
const SW_VERSION = "4.35.0";
const CACHE = `rda-${SW_VERSION}`;
const NET_TIMEOUT = 4000;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // La lista sale de la propia página: todo <script src> y <link href> locales.
    // "/" y no "index.html": con cleanUrls (vercel.json) /index.html redirige a /, y una respuesta
    // redirigida no se puede usar para abrir la página.
    const res = await fetch("./", { cache: "reload" });
    const html = await res.clone().text();
    await cache.put("index.html", res);
    const urls = new Set(["manifest.webmanifest", "css/receta.css", "icons/icon-192.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"]);
    for (const m of html.matchAll(/<(?:script|link)[^>]+(?:src|href)="([^"#:]+)"/g)) urls.add(m[1]);
    await Promise.all([...urls].map((u) => cache.add(new Request(u, { cache: "reload" })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("rda-") && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

// Sólo lo de la app y los archivos fijos de Google (SDK de Firebase, letra): nada de datos de la cuenta.
const STATIC_HOSTS = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];
function cacheable(url) {
  if (url.origin === self.location.origin) return !url.pathname.startsWith("/__");
  return STATIC_HOSTS.includes(url.hostname) && !/\/(firebasejs\/.*\/.*-sw|recaptcha)/.test(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (!cacheable(url)) return;
  event.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const url = new URL(req.url);
  // Sólo la portada se guarda como "index.html". Las páginas propias de las recetas (/receta/<id>,
  // tools/prerender.js) y la 404 se guardan con su dirección: antes cualquier página pisaba la app.
  const isApp = req.mode === "navigate" && (url.pathname === "/" || url.pathname === "/index.html");
  const key = isApp ? "index.html" : req;
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, reject) => setTimeout(() => reject(new Error("lenta")), NET_TIMEOUT))
    ]);
    if (res && (res.ok || res.type === "opaque") && !res.redirected) cache.put(key, res.clone()).catch(() => {});
    return res;
  } catch {
    const hit = await cache.match(key, { ignoreSearch: isApp });
    if (hit) return hit;
    // Sin señal y sin copia de esa receta: se abre en la app guardada (#/receta/<id>).
    const m = req.mode === "navigate" && url.pathname.match(/^\/receta\/([^/.]+)/);
    if (m && (await cache.match("index.html"))) return Response.redirect(`/#/receta/${m[1]}`, 302);
    // Una red lenta (no caída) sin copia guardada: esperar a la red.
    return fetch(req);
  }
}
