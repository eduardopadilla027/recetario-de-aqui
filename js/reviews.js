/* Recetarios de Aquí · Reseñas: estrellas (1 a 5) + comentario opcional, de la app
 * (sección #opiniones del inicio) y de cada receta (al final de su detalle).
 *
 * Cloud Firestore: reviews/{target}__{uid}, con target "app" o "r:<id de la receta>".
 * Una reseña por persona y por receta (y una de la app); se puede editar o borrar.
 * Campos: target, uid, name (el nombre que la persona escribe; el correo nunca se
 * muestra), stars, text, hasPhoto, status ("pending" | "approved"), createdAt, updatedAt.
 *
 * Foto opcional (tomada con la cámara o subida): js/photo.js la achica en el navegador
 * (≤ 1024 px, ≈ 120 KB, sin metadatos) y se guarda aparte en reviewPhotos/{mismo id}
 * { target, uid, photo (data URL), updatedAt }, para que las listas no la descarguen
 * hasta que la reseña se ve. Se escriben juntas en un batch. ARQUITECTURA.md §7.5.
 *
 * Aprobación previa: toda reseña nueva o editada queda "pending" y sólo la ve su
 * autor hasta que un administrador la aprueba en #/admin ("Reseñas pendientes").
 * Las reglas de firestore.rules (match /reviews) lo hacen cumplir. ARQUITECTURA.md §7.4.
 *
 * Depende de globales de app.js ($, esc, currentLang, current, recipes, jumpTo, toast),
 * de auth.js (fbDb, authUser, authState, authIsAdmin, adminUsers, authStore, fmtDate)
 * y de photo.js (shrinkPhoto, fmtBytes). */

const REVIEW_NAME_KEY = "rcb.reviewName.";   // + uid: último nombre usado (este navegador)
const REVIEW_PAGE = 5;                       // reseñas visibles antes de "Ver más"

const REVIEW_T = {
  es: {
    appTitle: "Opiniones sobre la app",
    appSub: "¿Le gusta Recetarios de Aquí? Cuéntenos qué le parece.",
    recipeTitle: "Reseñas de esta receta",
    write: "Escribir una reseña",
    first: "Todavía no hay reseñas. ¡Sea la primera persona en opinar!",
    yourRating: "Su calificación",
    starN: (n) => (n === 1 ? "1 estrella" : `${n} estrellas`),
    starsOf: (n) => `${n} de 5 estrellas`,
    nameLabel: "Su nombre (se publica)",
    namePh: "Por ejemplo: Carmen de Bayamón",
    textLabel: "Comentario (opcional)",
    textPh: "¿Qué le pareció? ¿Le hizo algún cambio?",
    chars: (n) => `${n} / 1000`,
    note: "Su reseña se publicará cuando un administrador la apruebe. Su correo no se muestra.",
    send: "Enviar reseña",
    update: "Guardar cambios",
    cancel: "Cancelar",
    edit: "Editar",
    del: "Borrar",
    mine: "Su reseña",
    pending: "Pendiente de aprobación",
    approved: "Publicada",
    editNote: "Si la edita, vuelve a quedar pendiente de aprobación.",
    sent: "Gracias. Su reseña se publicará cuando un administrador la apruebe.",
    deleted: "Reseña borrada.",
    confirmDelete: "¿Borrar su reseña? No se puede deshacer.",
    confirmAdminDelete: (name) => `¿Borrar la reseña de ${name}? No se puede deshacer.`,
    needStars: "Escoja de 1 a 5 estrellas.",
    needName: "Escriba un nombre de 2 a 40 letras.",
    count: (n) => (n === 1 ? "1 reseña" : `${n} reseñas`),
    none: "Sin reseñas",
    rateIt: "Opinar",
    more: (n) => `Ver más reseñas (${n})`,
    loading: "Cargando reseñas…",
    error: "No se pudieron cargar las reseñas.",
    noPermission: "Las reseñas todavía no están activadas en el servidor (reglas de Firestore).",
    saveError: "No se pudo guardar la reseña. Inténtelo de nuevo.",
    photoLabel: "Foto del plato (opcional)",
    photoTake: "Tomar foto",
    photoPick: "Subir foto",
    photoChange: "Cambiar foto",
    photoRemove: "Quitar foto",
    photoNote: "La foto se achica en su equipo antes de subirse (se le quitan la ubicación y otros datos).",
    photoWorking: "Preparando la foto…",
    photoReady: (w, h, size) => `Foto lista: ${w} × ${h} px · ${size}`,
    photoErr: {
      type: "Ese archivo no es una imagen.",
      big: "La imagen es demasiado grande (más de 30 MB).",
      decode: "No se pudo leer esa imagen. Pruebe con una foto JPG o PNG.",
      encode: "No se pudo achicar la foto. Pruebe con otra."
    },
    photoBusy: "Espere a que la foto esté lista.",
    photoAlt: (name) => `Foto de la reseña de ${name}`,
    photoOpen: "Ver la foto en grande",
    photoClose: "Cerrar",
    // #/admin
    adminTitle: "Reseñas pendientes",
    adminIntro: "Nada se publica hasta que lo apruebe. El correo del autor sólo lo ven los administradores.",
    adminNone: "No hay reseñas pendientes.",
    approve: "Aprobar",
    approvedToast: "Reseña aprobada y publicada.",
    targetApp: "La app",
    edited: "editada"
  },
  en: {
    appTitle: "What people say about the app",
    appSub: "Do you like Recetarios de Aquí? Tell us what you think.",
    recipeTitle: "Reviews of this recipe",
    write: "Write a review",
    first: "No reviews yet. Be the first to share your opinion!",
    yourRating: "Your rating",
    starN: (n) => (n === 1 ? "1 star" : `${n} stars`),
    starsOf: (n) => `${n} out of 5 stars`,
    nameLabel: "Your name (shown publicly)",
    namePh: "For example: Carmen from Bayamón",
    textLabel: "Comment (optional)",
    textPh: "What did you think? Did you change anything?",
    chars: (n) => `${n} / 1000`,
    note: "Your review will be published once an administrator approves it. Your email is never shown.",
    send: "Send review",
    update: "Save changes",
    cancel: "Cancel",
    edit: "Edit",
    del: "Delete",
    mine: "Your review",
    pending: "Awaiting approval",
    approved: "Published",
    editNote: "If you edit it, it goes back to awaiting approval.",
    sent: "Thank you. Your review will be published once an administrator approves it.",
    deleted: "Review deleted.",
    confirmDelete: "Delete your review? This can't be undone.",
    confirmAdminDelete: (name) => `Delete ${name}'s review? This can't be undone.`,
    needStars: "Choose 1 to 5 stars.",
    needName: "Type a name of 2 to 40 characters.",
    count: (n) => (n === 1 ? "1 review" : `${n} reviews`),
    none: "No reviews",
    rateIt: "Review it",
    more: (n) => `Show more reviews (${n})`,
    loading: "Loading reviews…",
    error: "The reviews couldn't be loaded.",
    noPermission: "Reviews aren't enabled on the server yet (Firestore rules).",
    saveError: "The review couldn't be saved. Please try again.",
    photoLabel: "Photo of the dish (optional)",
    photoTake: "Take photo",
    photoPick: "Upload photo",
    photoChange: "Change photo",
    photoRemove: "Remove photo",
    photoNote: "The photo is shrunk on your device before uploading (location and other data are removed).",
    photoWorking: "Preparing the photo…",
    photoReady: (w, h, size) => `Photo ready: ${w} × ${h} px · ${size}`,
    photoErr: {
      type: "That file isn't an image.",
      big: "The image is too large (over 30 MB).",
      decode: "That image couldn't be read. Try a JPG or PNG photo.",
      encode: "The photo couldn't be shrunk. Try another one."
    },
    photoBusy: "Wait until the photo is ready.",
    photoAlt: (name) => `Photo from ${name}'s review`,
    photoOpen: "View the photo larger",
    photoClose: "Close",
    adminTitle: "Pending reviews",
    adminIntro: "Nothing is published until you approve it. Only administrators see the author's email.",
    adminNone: "No pending reviews.",
    approve: "Approve",
    approvedToast: "Review approved and published.",
    targetApp: "The app",
    edited: "edited"
  }
};
function rt() { return REVIEW_T[currentLang]; }

/* ------------------------------------------------------------ estado ---- */

const reviewCache = new Map();   // target → { list (aprobadas), mine, loading, loaded, error }
const reviewEditing = new Set(); // targets con el formulario abierto
const reviewShown = new Map();   // target → cuántas reseñas se ven
let pendingReviews = null;       // #/admin: null = sin cargar
const photoCache = new Map();    // id de la reseña → data URL | null (sin foto) | Promise (cargando)
const photoDraft = new Map();    // target → { dataUrl, bytes, width, height } | null (quitarla); sin clave = no cambia
const photoBusy = new Set();     // targets con una foto achicándose

function reviewsOn() { return Boolean(fbDb && authUser && authState === "ready"); }
function reviewCol() { return fbDb.collection("reviews"); }
function reviewPhotoCol() { return fbDb.collection("reviewPhotos"); }
function reviewDocId(target) { return `${target}__${authUser.uid}`; }
function recipeTarget(recipe) { return "r:" + recipe.id; }
function reviewTime(r) { const ts = r.updatedAt || r.createdAt; return ts && ts.toMillis ? ts.toMillis() : 0; }
function reviewError(err) {
  console.warn("Reseñas:", (err && (err.code || err.message)) || err);
  return err && err.code === "permission-denied" ? rt().noPermission : rt().error;
}

/* Al cambiar de cuenta (o salir) se olvida todo lo cargado. */
function resetReviews() {
  reviewCache.clear();
  reviewEditing.clear();
  reviewShown.clear();
  pendingReviews = null;
  photoCache.clear();
  photoDraft.clear();
  photoBusy.clear();
}

/* ------------------------------------------------------------ fotos ---- */

/* Descarga (una vez) la foto de una reseña. */
function loadPhoto(id) {
  const had = photoCache.get(id);
  if (had !== undefined) return Promise.resolve(had);
  const p = reviewPhotoCol().doc(id).get()
    .then((snap) => (snap.exists && snap.data().photo) || null)
    .catch((err) => { console.warn("Foto de reseña:", (err && (err.code || err.message)) || err); return null; })
    .then((url) => { photoCache.set(id, url); return url; });
  photoCache.set(id, p);
  return p;
}

/* Pone las fotos en las <img data-photo-id> recién pintadas; si no hay, esconde su botón. */
function hydratePhotos(box) {
  if (!box) return;
  box.querySelectorAll("img[data-photo-id]").forEach((img) => {
    Promise.resolve(loadPhoto(img.dataset.photoId)).then((url) => {
      if (!img.isConnected) return;
      const holder = img.closest(".review-photo, .review-photo-preview");
      if (url) { img.src = url; if (holder) holder.classList.remove("is-loading"); }
      else if (holder) holder.hidden = true;
    });
  });
}

function reviewPhotoHTML(r) {
  if (!r.hasPhoto) return "";
  const tr = rt();
  const cached = photoCache.get(r.id);
  const src = typeof cached === "string" ? ` src="${esc(cached)}"` : "";
  return `<button type="button" class="review-photo${src ? "" : " is-loading"}" data-review="photo" title="${esc(tr.photoOpen)}" aria-label="${esc(tr.photoOpen)}">
      <img data-photo-id="${esc(r.id)}"${src} alt="${esc(tr.photoAlt(r.name || ""))}" loading="lazy" decoding="async" width="160" height="120">
    </button>`;
}

/* Lo que muestra el formulario: la foto nueva, ninguna o la que ya tenía la reseña. */
function formPhotoInner(target, mine) {
  const tr = rt();
  const draft = photoDraft.get(target);
  const busy = photoBusy.has(target);
  let preview = "";
  let info = "";
  if (draft) {
    preview = `<img src="${esc(draft.dataUrl)}" alt="" width="${draft.width}" height="${draft.height}">`;
    info = tr.photoReady(draft.width, draft.height, fmtBytes(draft.bytes, currentLang));
  } else if (draft === undefined && mine && mine.hasPhoto) {
    const cached = photoCache.get(mine.id);
    preview = `<img data-photo-id="${esc(mine.id)}"${typeof cached === "string" ? ` src="${esc(cached)}"` : ""} alt="">`;
  }
  const has = Boolean(preview);
  return `
    <span class="review-label" id="rv-photo-${target.replace(/[^a-z0-9]/gi, "_")}">${esc(tr.photoLabel)}</span>
    ${has ? `<div class="review-photo-preview">${preview}</div>` : ""}
    <p class="review-photo-info" aria-live="polite">${esc(busy ? tr.photoWorking : info)}</p>
    <div class="review-photo-btns">
      <button type="button" class="btn btn-outline btn-sm" data-review="photo-take" data-target="${esc(target)}"${busy ? " disabled" : ""}>
        <svg class="icon" aria-hidden="true"><use href="#i-camera"/></svg>${esc(tr.photoTake)}</button>
      <button type="button" class="btn btn-outline btn-sm" data-review="photo-pick" data-target="${esc(target)}"${busy ? " disabled" : ""}>
        <svg class="icon" aria-hidden="true"><use href="#i-image"/></svg>${esc(has ? tr.photoChange : tr.photoPick)}</button>
      ${has ? `<button type="button" class="btn btn-ghost btn-sm" data-review="photo-remove" data-target="${esc(target)}"${busy ? " disabled" : ""}>${esc(tr.photoRemove)}</button>` : ""}
    </div>
    <input type="file" accept="image/*" capture="environment" data-photo-input="take" hidden tabindex="-1">
    <input type="file" accept="image/*" data-photo-input="pick" hidden tabindex="-1">
    <p class="review-note">${esc(tr.photoNote)}</p>`;
}

function repaintFormPhoto(target) {
  const box = reviewBox(target);
  const field = box && box.querySelector("[data-photo-field]");
  if (!field) return;
  const entry = reviewCache.get(target);
  field.innerHTML = formPhotoInner(target, entry && entry.mine);
  hydratePhotos(field);
  const submit = box.querySelector('[data-review-form] [type="submit"]');
  if (submit) submit.disabled = photoBusy.has(target);
}

async function takePhotoFile(target, file) {
  if (!file) return;
  const tr = rt();
  photoBusy.add(target);
  repaintFormPhoto(target);
  try {
    const out = await shrinkPhoto(file);
    if (reviewEditing.has(target)) photoDraft.set(target, out); // si canceló mientras tanto, se descarta
    photoBusy.delete(target);
    repaintFormPhoto(target);
  } catch (err) {
    photoBusy.delete(target);
    repaintFormPhoto(target);
    const box = reviewBox(target);
    const info = box && box.querySelector("[data-photo-field] .review-photo-info");
    if (info) info.textContent = tr.photoErr[err && err.code] || tr.photoErr.decode;
    console.warn("Foto no preparada:", (err && (err.code || err.message)) || err);
  }
}

/* Vista grande de una foto (un solo <dialog> para toda la app). */
function openPhoto(src, alt) {
  let d = $("photo-dialog");
  if (!d) {
    d = document.createElement("dialog");
    d.id = "photo-dialog";
    d.className = "photo-dialog";
    d.innerHTML = `<img alt=""><button type="button" class="photo-close" data-review="photo-close"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button>`;
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); }); // clic fuera de la foto
    document.body.append(d);
  }
  const img = d.querySelector("img");
  img.src = src;
  img.alt = alt || "";
  const close = d.querySelector(".photo-close");
  close.setAttribute("aria-label", rt().photoClose);
  close.title = rt().photoClose;
  if (d.showModal) d.showModal(); else d.setAttribute("open", "");
  close.focus();
}

/* ------------------------------------------------------------ carga ---- */

async function loadReviews(target, force = false) {
  if (!reviewsOn()) { renderReviews(target); return; }
  const old = reviewCache.get(target);
  if (old && (old.loading || (old.loaded && !force))) { renderReviews(target); return; }
  const entry = { list: [], mine: null, loading: true, loaded: false, error: "" };
  reviewCache.set(target, entry);
  renderReviews(target);
  try {
    // Dos igualdades: Firestore las resuelve sin índice compuesto. Se ordena aquí.
    const [list, mine] = await Promise.all([
      reviewCol().where("target", "==", target).where("status", "==", "approved").get(),
      reviewCol().doc(reviewDocId(target)).get()
    ]);
    entry.list = list.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => reviewTime(b) - reviewTime(a));
    entry.mine = mine.exists ? { id: mine.id, ...mine.data() } : null;
    entry.loaded = true;
  } catch (err) {
    entry.error = reviewError(err);
  }
  entry.loading = false;
  if (reviewCache.get(target) === entry) renderReviews(target);
}

/* Al entrar a la app: la sección del inicio y, si hay una receta abierta, la suya. */
function reviewsOnReady() {
  loadReviews("app");
  if (current) loadReviews(recipeTarget(current));
}

/* ------------------------------------------------------------ pintar ---- */

const STAR_SVG = '<svg class="star-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>';

function starsHTML(value, cls = "") {
  const full = Math.round(value * 2) / 2; // a la media estrella
  let out = "";
  for (let i = 1; i <= 5; i++) {
    const fill = full >= i ? "on" : full >= i - 0.5 ? "half" : "off";
    out += `<span class="star ${fill}">${STAR_SVG}</span>`;
  }
  return `<span class="stars ${cls}" role="img" aria-label="${esc(rt().starsOf(Math.round(value * 10) / 10))}">${out}</span>`;
}

function reviewStats(list) {
  if (!list.length) return { avg: 0, n: 0 };
  return { avg: list.reduce((s, r) => s + (r.stars || 0), 0) / list.length, n: list.length };
}

function fmtAvg(avg) {
  return avg.toLocaleString(currentLang === "es" ? "es-PR" : "en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function reviewDate(r) {
  const ts = r.updatedAt || r.createdAt;
  if (!ts || !ts.toDate) return "";
  return ts.toDate().toLocaleDateString(currentLang === "es" ? "es-PR" : "en-US", { year: "numeric", month: "short", day: "numeric" });
}

function reviewBox(target) {
  if (target === "app") return $("app-reviews");
  return current && recipeTarget(current) === target ? $("recipe-reviews") : null;
}

function renderReviews(target) {
  const box = reviewBox(target);
  if (!box) return;
  const tr = rt();
  const entry = reviewCache.get(target);
  const isApp = target === "app";
  const titleId = isApp ? "app-reviews-title" : "recipe-reviews-title";
  const head = isApp
    ? `<h2 class="section-title" id="${titleId}">${esc(tr.appTitle)}</h2><p class="section-sub">${esc(tr.appSub)}</p>`
    : `<h2 class="panel-title" id="${titleId}">${esc(tr.recipeTitle)}</h2>`;

  if (!isApp) renderRecipeRating(entry);

  if (!entry || entry.loading) { box.innerHTML = `<div class="reviews-head">${head}</div><p class="reviews-empty auth-loading">${esc(tr.loading)}</p>`; return; }
  if (entry.error) { box.innerHTML = `<div class="reviews-head">${head}</div><p class="reviews-empty">${esc(entry.error)}</p>`; return; }

  const { avg, n } = reviewStats(entry.list);
  const summary = n
    ? `<p class="reviews-summary"><span class="reviews-avg">${fmtAvg(avg)}</span>${starsHTML(avg, "stars-lg")}<span class="reviews-count">${esc(tr.count(n))}</span></p>`
    : "";

  const mine = entry.mine;
  let mineHTML;
  if (reviewEditing.has(target)) mineHTML = reviewFormHTML(target, mine);
  else if (mine) mineHTML = reviewItemHTML(mine, { own: true, target });
  else mineHTML = `<button type="button" class="btn btn-primary review-write" data-review="write" data-target="${esc(target)}">
      <svg class="icon" aria-hidden="true"><use href="#i-star"/></svg>${esc(tr.write)}</button>`;

  const others = entry.list.filter((r) => !mine || r.id !== mine.id);
  const shown = reviewShown.get(target) || REVIEW_PAGE;
  const listHTML = others.length
    ? `<ul class="review-list">${others.slice(0, shown).map((r) => reviewItemHTML(r, { target })).join("")}</ul>
       ${others.length > shown ? `<div class="more-results"><button type="button" class="btn btn-outline" data-review="more" data-target="${esc(target)}">${esc(tr.more(others.length - shown))}</button></div>` : ""}`
    : (!mine ? `<p class="reviews-empty">${esc(tr.first)}</p>` : "");

  box.innerHTML = `
    <div class="reviews-head">${head}${summary}</div>
    <div class="review-mine">${mineHTML}</div>
    ${listHTML}`;
  hydratePhotos(box);
}

function reviewItemHTML(r, { own = false, target }) {
  const tr = rt();
  const tag = own ? `<span class="review-tag ${r.status === "approved" ? "is-ok" : "is-pending"}">${esc(r.status === "approved" ? tr.approved : tr.pending)}</span>` : "";
  const actions = own
    ? `<div class="review-actions">
         <button type="button" class="btn btn-ghost btn-sm" data-review="edit" data-target="${esc(target)}">${esc(tr.edit)}</button>
         <button type="button" class="btn btn-ghost btn-sm" data-review="delete" data-target="${esc(target)}">${esc(tr.del)}</button>
       </div>`
    : authIsAdmin
      ? `<div class="review-actions"><button type="button" class="btn btn-ghost btn-sm" data-review="admin-delete" data-target="${esc(target)}" data-id="${esc(r.id)}" data-name="${esc(r.name)}"${r.hasPhoto ? ' data-photo="1"' : ""}>${esc(tr.del)}</button></div>`
      : "";
  const Tag = own ? "div" : "li";
  return `<${Tag} class="review${own ? " review-own" : ""}">
      ${own ? `<p class="review-own-label">${esc(tr.mine)} ${tag}</p>` : ""}
      <div class="review-top">
        ${starsHTML(r.stars || 0)}
        <strong class="review-name">${esc(r.name)}</strong>
        <span class="review-date">${esc(reviewDate(r))}</span>
      </div>
      ${r.text ? `<p class="review-text">${esc(r.text)}</p>` : ""}
      ${reviewPhotoHTML(r)}
      ${own && r.status !== "approved" ? `<p class="review-hint">${esc(tr.sent)}</p>` : ""}
      ${actions}
    </${Tag}>`;
}

function reviewFormHTML(target, mine) {
  const tr = rt();
  const key = target.replace(/[^a-z0-9]/gi, "_");
  const stars = mine ? mine.stars : 0;
  const name = (mine && mine.name) || authStore(REVIEW_NAME_KEY + authUser.uid) || "";
  const text = (mine && mine.text) || "";
  const starInputs = [1, 2, 3, 4, 5].map((n) => `
      <label class="star-pick" title="${esc(tr.starN(n))}">
        <input type="radio" name="stars" value="${n}"${n === stars ? " checked" : ""}>
        ${STAR_SVG}<span class="sr-only">${esc(tr.starN(n))}</span>
      </label>`).join("");
  return `
    <form class="review-form" data-review-form="${esc(target)}" novalidate>
      <fieldset class="star-input">
        <legend class="review-label">${esc(tr.yourRating)}</legend>
        <div class="star-row">${starInputs}</div>
      </fieldset>
      <label class="review-label" for="rv-name-${key}">${esc(tr.nameLabel)}</label>
      <input class="auth-input review-input" id="rv-name-${key}" name="name" type="text" maxlength="40" autocomplete="nickname" placeholder="${esc(tr.namePh)}" value="${esc(name)}" required>
      <label class="review-label" for="rv-text-${key}">${esc(tr.textLabel)}</label>
      <textarea class="review-textarea" id="rv-text-${key}" name="text" maxlength="1000" rows="4" placeholder="${esc(tr.textPh)}">${esc(text)}</textarea>
      <p class="review-chars" aria-live="polite">${esc(tr.chars(text.length))}</p>
      <div class="review-photo-field" data-photo-field role="group" aria-labelledby="rv-photo-${key}">${formPhotoInner(target, mine)}</div>
      <p class="review-note">${esc(mine ? `${tr.editNote} ${tr.note}` : tr.note)}</p>
      <p class="auth-msg review-msg" role="alert" hidden></p>
      <div class="review-actions">
        <button type="submit" class="btn btn-primary"${photoBusy.has(target) ? " disabled" : ""}>${esc(mine ? tr.update : tr.send)}</button>
        <button type="button" class="btn btn-ghost" data-review="cancel" data-target="${esc(target)}">${esc(tr.cancel)}</button>
      </div>
    </form>`;
}

/* Línea bajo los alérgenos de la receta: promedio y número de reseñas. */
function renderRecipeRating(entry) {
  const line = $("recipe-rating");
  if (!line) return;
  const tr = rt();
  if (!entry || entry.loading || entry.error) { line.hidden = true; line.innerHTML = ""; return; }
  const { avg, n } = reviewStats(entry.list);
  line.hidden = false;
  line.innerHTML = n
    ? `<button type="button" class="rating-link" data-review="goto">${starsHTML(avg)}<strong>${fmtAvg(avg)}</strong><span>${esc(tr.count(n))}</span></button>`
    : `<button type="button" class="rating-link" data-review="goto">${starsHTML(0)}<span>${esc(tr.none)} · ${esc(tr.rateIt)}</span></button>`;
}

/* Lo llama renderModal (app.js) al abrir o repintar una receta. */
function renderRecipeReviews(recipe) {
  const target = recipeTarget(recipe);
  if (reviewCache.has(target)) renderReviews(target);
  else loadReviews(target);
}

/* Al cambiar de idioma. */
function renderAllReviews() {
  renderReviews("app");
  if (current) renderReviews(recipeTarget(current));
  if (pendingReviews && $("admin-reviews")) renderPendingReviews();
}

/* ------------------------------------------------------------ escribir, editar, borrar ---- */

function reviewFormMsg(form, text) {
  const el = form.querySelector(".review-msg");
  if (el) { el.textContent = text; el.hidden = !text; }
}

async function submitReview(form) {
  const tr = rt();
  const target = form.dataset.reviewForm;
  const entry = reviewCache.get(target);
  if (!reviewsOn() || !entry) return;
  const picked = form.querySelector('input[name="stars"]:checked');
  const stars = picked ? Number(picked.value) : 0;
  const name = form.elements.name.value.trim().replace(/\s+/g, " ");
  const text = form.elements.text.value.trim().slice(0, 1000);
  if (!(stars >= 1 && stars <= 5)) { reviewFormMsg(form, tr.needStars); form.querySelector('input[name="stars"]').focus(); return; }
  if (name.length < 2 || name.length > 40) { reviewFormMsg(form, tr.needName); form.elements.name.focus(); return; }
  if (photoBusy.has(target)) { reviewFormMsg(form, tr.photoBusy); return; }
  reviewFormMsg(form, "");
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  const ref = reviewCol().doc(reviewDocId(target));
  const photoRef = reviewPhotoCol().doc(ref.id);
  const now = firebase.firestore.FieldValue.serverTimestamp();
  const draft = photoDraft.get(target);          // undefined = la foto no cambia
  const hadPhoto = Boolean(entry.mine && entry.mine.hasPhoto);
  const hasPhoto = draft === undefined ? hadPhoto : Boolean(draft);
  try {
    // Reseña y foto juntas: o se guardan las dos o ninguna.
    const batch = fbDb.batch();
    if (draft) batch.set(photoRef, { target, uid: authUser.uid, photo: draft.dataUrl, updatedAt: now });
    else if (draft === null && hadPhoto) batch.delete(photoRef);
    // Nueva o editada: siempre "pending" (las reglas no aceptan otra cosa del autor).
    batch.set(ref, {
      target, uid: authUser.uid, name, stars, text, hasPhoto, status: "pending",
      createdAt: entry.mine && entry.mine.createdAt ? entry.mine.createdAt : now,
      updatedAt: now
    });
    await batch.commit();
    if (draft !== undefined) photoCache.set(ref.id, draft ? draft.dataUrl : null);
    photoDraft.delete(target);
    authStore(REVIEW_NAME_KEY + authUser.uid, name);
    const snap = await ref.get();
    entry.mine = snap.exists ? { id: snap.id, ...snap.data() } : null;
    entry.list = entry.list.filter((r) => r.id !== ref.id); // sale del público hasta aprobarse
    reviewEditing.delete(target);
    renderReviews(target);
    toast(tr.sent, true);
    if (pendingReviews) loadPendingReviews();
  } catch (err) {
    btn.disabled = false;
    reviewFormMsg(form, err && err.code === "permission-denied" ? tr.noPermission : tr.saveError);
    console.warn("Reseña no guardada:", (err && (err.code || err.message)) || err);
  }
}

async function deleteReview(target, id, adminName, withPhoto) {
  const tr = rt();
  const entry = reviewCache.get(target);
  const own = !id;
  if (!confirm(own ? tr.confirmDelete : tr.confirmAdminDelete(adminName || ""))) return;
  const docId = id || reviewDocId(target);
  if (own) withPhoto = Boolean(entry && entry.mine && entry.mine.hasPhoto);
  try {
    const batch = fbDb.batch();
    batch.delete(reviewCol().doc(docId));
    if (withPhoto) batch.delete(reviewPhotoCol().doc(docId));
    await batch.commit();
    photoCache.delete(docId);
    if (own) photoDraft.delete(target);
    if (entry) {
      if (own) entry.mine = null;
      entry.list = entry.list.filter((r) => r.id !== docId);
    }
    if (pendingReviews) pendingReviews = pendingReviews.filter((r) => r.id !== docId);
    renderReviews(target);
    if ($("admin-reviews")) renderPendingReviews();
    toast(tr.deleted, true);
  } catch (err) { toast(reviewError(err)); }
}

/* ------------------------------------------------------------ #/admin: aprobar ---- */

/* Lo llama loadAdminData (auth.js). */
async function loadPendingReviews() {
  if (!authIsAdmin || !reviewsOn()) return;
  try {
    const snap = await reviewCol().where("status", "==", "pending").get();
    pendingReviews = snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => reviewTime(a) - reviewTime(b));
    renderPendingReviews();
  } catch (err) {
    pendingReviews = null;
    const box = $("admin-reviews");
    if (box) box.innerHTML = `<h2 class="section-title admin-h2">${esc(rt().adminTitle)}</h2><p class="admin-intro">${esc(reviewError(err))}</p>`;
  }
}

function reviewTargetLabel(target) {
  if (target === "app") return `<span class="review-target">${esc(rt().targetApp)}</span>`;
  const id = target.slice(2);
  const r = recipes.find((x) => x.id === id);
  return r
    ? `<a class="review-target" href="#/receta/${encodeURIComponent(id)}">${esc(r.name[currentLang])}</a>`
    : `<span class="review-target">${esc(id)}</span>`;
}

/* Lo llama también renderAdminShell (auth.js) para no perder la lista al repintar. */
function renderPendingReviews() {
  const box = $("admin-reviews");
  if (!box || !pendingReviews) return;
  const tr = rt();
  const emailOf = (uid) => { const u = adminUsers.find((x) => x.id === uid); return u ? u.email : ""; };
  box.innerHTML = `
    <h2 class="section-title admin-h2">${esc(tr.adminTitle)} <span class="admin-count">${pendingReviews.length}</span></h2>
    <p class="admin-intro">${esc(tr.adminIntro)}</p>
    ${pendingReviews.length ? `<ul class="review-list admin-review-list">${pendingReviews.map((r) => `
      <li class="review">
        <p class="review-own-label">${reviewTargetLabel(r.target)}${r.createdAt && r.updatedAt && reviewTime({ updatedAt: r.updatedAt }) - reviewTime({ updatedAt: r.createdAt }) > 1000 ? ` <span class="review-tag is-pending">${esc(tr.edited)}</span>` : ""}</p>
        <div class="review-top">
          ${starsHTML(r.stars || 0)}
          <strong class="review-name">${esc(r.name)}</strong>
          <span class="review-date">${esc(reviewDate(r))}</span>
        </div>
        ${emailOf(r.uid) ? `<p class="review-email">${esc(emailOf(r.uid))}</p>` : ""}
        ${r.text ? `<p class="review-text">${esc(r.text)}</p>` : ""}
        ${reviewPhotoHTML(r)}
        <div class="review-actions">
          <button type="button" class="btn btn-primary btn-sm" data-review="approve" data-id="${esc(r.id)}">${esc(tr.approve)}</button>
          <button type="button" class="btn btn-ghost btn-sm" data-review="admin-delete" data-target="${esc(r.target)}" data-id="${esc(r.id)}" data-name="${esc(r.name)}"${r.hasPhoto ? ' data-photo="1"' : ""}>${esc(tr.del)}</button>
        </div>
      </li>`).join("")}</ul>` : `<p class="admin-intro">${esc(tr.adminNone)}</p>`}`;
  hydratePhotos(box);
}

async function approveReview(id) {
  const r = pendingReviews && pendingReviews.find((x) => x.id === id);
  if (!r) return;
  try {
    await reviewCol().doc(id).update({ status: "approved" });
    pendingReviews = pendingReviews.filter((x) => x.id !== id);
    reviewCache.delete(r.target); // se vuelve a leer con la reseña ya publicada
    if (r.target === "app" || (current && recipeTarget(current) === r.target)) loadReviews(r.target);
    renderPendingReviews();
    toast(rt().approvedToast, true);
  } catch (err) { toast(reviewError(err)); }
}

/* ------------------------------------------------------------ eventos ---- */

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-review]");
  if (!btn) return;
  const act = btn.dataset.review;
  const target = btn.dataset.target;
  if (act === "write" || act === "edit") {
    photoDraft.delete(target);
    reviewEditing.add(target);
    renderReviews(target);
    const box = reviewBox(target);
    const first = box && box.querySelector('input[name="stars"]:checked, input[name="stars"]');
    if (first) first.focus();
  } else if (act === "cancel") {
    photoDraft.delete(target);
    reviewEditing.delete(target);
    renderReviews(target);
    const box = reviewBox(target);
    const again = box && box.querySelector('[data-review="write"], [data-review="edit"]');
    if (again) again.focus();
  } else if (act === "delete") deleteReview(target);
  else if (act === "admin-delete" && authIsAdmin) deleteReview(target, btn.dataset.id, btn.dataset.name, btn.dataset.photo === "1");
  else if (act === "photo-take" || act === "photo-pick") {
    const input = btn.closest("[data-photo-field]").querySelector(`[data-photo-input="${act === "photo-take" ? "take" : "pick"}"]`);
    if (input) { input.value = ""; input.click(); }
  } else if (act === "photo-remove") {
    photoDraft.set(target, null);
    repaintFormPhoto(target);
    const box = reviewBox(target);
    const pick = box && box.querySelector('[data-review="photo-pick"]');
    if (pick) pick.focus();
  } else if (act === "photo") {
    const img = btn.querySelector("img");
    if (img && img.src) openPhoto(img.src, img.alt);
  } else if (act === "photo-close") {
    const d = btn.closest("dialog");
    if (d) d.close();
  }
  else if (act === "approve" && authIsAdmin) approveReview(btn.dataset.id);
  else if (act === "more") { reviewShown.set(target, (reviewShown.get(target) || REVIEW_PAGE) + 20); renderReviews(target); }
  else if (act === "goto") {
    const sec = $("recipe-reviews");
    if (sec) { jumpTo(sec.getBoundingClientRect().top + window.scrollY - 80); const h = $("recipe-reviews-title"); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } }
  }
});

document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-review-form]");
  if (!form) return;
  e.preventDefault();
  submitReview(form);
});

document.addEventListener("change", (e) => {
  const input = e.target.closest && e.target.closest("[data-photo-input]");
  if (!input) return;
  const form = input.closest("[data-review-form]");
  if (form && input.files && input.files[0]) takePhotoFile(form.dataset.reviewForm, input.files[0]);
});

document.addEventListener("input", (e) => {
  if (e.target.name === "text" && e.target.closest("[data-review-form]")) {
    const c = e.target.closest("form").querySelector(".review-chars");
    if (c) c.textContent = rt().chars(e.target.value.length);
  }
});
