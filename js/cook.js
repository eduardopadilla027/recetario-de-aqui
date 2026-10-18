/* Recetarios de Aquí · Modo cocina, temporizadores y voz.
 *
 * "Modo cocina" abre la receta a pantalla completa, un paso a la vez, con letra grande:
 * - La pantalla no se apaga mientras está abierto (Wake Lock, donde el navegador lo permite).
 * - Cada paso que dice un tiempo ("20 minutos", "1 hora") trae su botón de temporizador; los
 *   temporizadores siguen corriendo al cerrar el modo cocina (se ven en una pastilla flotante) y
 *   al terminar suenan, vibran y lo dicen en voz alta.
 * - "Leer en voz alta" lee cada paso con la voz del celular (speechSynthesis, gratis y sin servidor).
 * - "Manos libres" escucha "siguiente", "atrás", "repite", "ingredientes" y "temporizador"
 *   (reconocimiento de voz del navegador: Chrome, Edge, Safari y Android; si no hay, no sale el botón).
 * - Al final: "¡Buen provecho!" y "La hice" (js/kitchen.js).
 * Los mismos botones de tiempo salen también en los pasos de la receta (stepTimersHTML).
 * Depende de app.js (t, currentLang, current, currentServings, esc, scaleIngredient, toast, $). */

const COOK_T = {
  es: {
    open: "Modo cocina", close: "Salir del modo cocina", step: (i, n) => `Paso ${i} de ${n}`,
    prev: "Anterior", next: "Siguiente", finish: "Terminé", ingredients: "Ingredientes", hideIng: "Ver el paso",
    read: "Leer en voz alta", reading: "Leyendo", listen: "Manos libres", listening: "Escuchando…",
    listenHelp: "Diga: «siguiente», «atrás», «repite», «ingredientes» o «temporizador».",
    awake: "La pantalla se mantiene encendida.",
    timer: (txt) => `Temporizador ${txt}`, timerStart: (txt) => `Temporizador de ${txt} empezado.`,
    timerDone: (lbl) => `¡Tiempo! Terminó el temporizador: ${lbl}.`, timerStep: (i) => `paso ${i}`,
    timers: "Temporizadores", stop: "Parar", pause: "Pausar", resume: "Seguir", add1: "+1 min",
    doneTitle: "¡Buen provecho!", doneText: "Terminó todos los pasos.", cookedBtn: "Marcar que la hice", backToRecipe: "Volver a la receta",
    of: "de"
  },
  en: {
    open: "Cook mode", close: "Exit cook mode", step: (i, n) => `Step ${i} of ${n}`,
    prev: "Previous", next: "Next", finish: "Done", ingredients: "Ingredients", hideIng: "Back to the step",
    read: "Read aloud", reading: "Reading", listen: "Hands-free", listening: "Listening…",
    listenHelp: "Say: “next”, “back”, “repeat”, “ingredients” or “timer”.",
    awake: "The screen stays on.",
    timer: (txt) => `Timer ${txt}`, timerStart: (txt) => `${txt} timer started.`,
    timerDone: (lbl) => `Time's up! Timer finished: ${lbl}.`, timerStep: (i) => `step ${i}`,
    timers: "Timers", stop: "Stop", pause: "Pause", resume: "Resume", add1: "+1 min",
    doneTitle: "Enjoy your meal!", doneText: "You finished every step.", cookedBtn: "Mark as cooked", backToRecipe: "Back to the recipe",
    of: "of"
  }
};
const ct = () => COOK_T[currentLang];

/* ── Tiempos dentro de un paso ── */
// "20 minutos", "15 a 20 min", "1 hora", "1½ horas", "45 segundos"; en inglés "20 minutes", "1 hour".
const TIME_RX = /(\d+(?:[.,]\d+)?|[½¼¾])\s*(½|¼|¾)?(?:\s*(?:a|-|–|to|or|ó|o)\s*(\d+(?:[.,]\d+)?))?\s*(horas?|hrs?|hours?|minutos?|mins?|minutes?|segundos?|seconds?|secs?)\b/gi;
const FRAC_V = { "½": 0.5, "¼": 0.25, "¾": 0.75 };
function stepTimes(text) {
  const out = [];
  for (const m of text.matchAll(TIME_RX)) {
    let a = FRAC_V[m[1]] ?? Number(m[1].replace(",", "."));
    if (m[2]) a += FRAC_V[m[2]];
    const b = m[3] ? Number(m[3].replace(",", ".")) : null;
    const unit = m[4].toLowerCase();
    const mult = /^h/.test(unit) ? 3600 : /^(s)/.test(unit) ? 1 : 60;
    // Con un rango ("15 a 20 minutos") se usa el menor: se revisa antes y se añade si hace falta.
    const secs = Math.round(a * mult);
    if (secs < 30 || secs > 12 * 3600) continue;
    out.push({ secs, label: m[0].trim(), to: b ? Math.round(b * mult) : null });
  }
  // Sin repetir el mismo tiempo en un paso.
  return out.filter((x, i) => out.findIndex((y) => y.secs === x.secs) === i).slice(0, 3);
}
function fmtClock(s) {
  s = Math.max(0, Math.round(s));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  const mm = String(m).padStart(h ? 2 : 1, "0"), ss = String(sec).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
function fmtSpan(secs) {
  if (secs % 3600 === 0) return currentLang === "es" ? `${secs / 3600} h` : `${secs / 3600} hr`;
  if (secs >= 3600) return `${Math.floor(secs / 3600)} h ${Math.round((secs % 3600) / 60)} min`;
  if (secs % 60 === 0) return `${secs / 60} min`;
  return `${secs} s`;
}
/* Botones de tiempo debajo de cada paso (en la receta y en el modo cocina). */
function stepTimersHTML(text, stepNo) {
  const times = stepTimes(text);
  if (!times.length) return "";
  return `<span class="step-timers">${times.map((x) => `
    <button type="button" class="timer-chip" data-timer="${x.secs}" data-timer-step="${stepNo}" aria-label="${esc(ct().timer(fmtSpan(x.secs)))}">
      <svg class="icon" aria-hidden="true"><use href="#i-timer"/></svg><span>${esc(fmtSpan(x.secs))}</span></button>`).join("")}</span>`;
}

/* ── Temporizadores ── */
let cookTimers = []; // { id, label, recipe, total, end, left (pausado), done }
let timerTick = 0;
let audioCtx = null;
function beep() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    for (let i = 0; i < 3; i++) {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = "sine"; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, now + i * 0.45);
      g.gain.exponentialRampToValueAtTime(0.4, now + i * 0.45 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.45 + 0.35);
      o.connect(g).connect(audioCtx.destination);
      o.start(now + i * 0.45); o.stop(now + i * 0.45 + 0.4);
    }
  } catch { /* sin audio */ }
}
function startTimer(secs, label) {
  // El primer toque desbloquea el audio en el celular (los navegadores lo exigen).
  try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); audioCtx.resume(); } catch { /* sin audio */ }
  const t0 = { id: Date.now() + Math.random(), label, recipe: current ? current.name[currentLang] : "", recipeId: current ? current.id : "", total: secs, end: Date.now() + secs * 1000, left: null, done: false };
  cookTimers.push(t0);
  if ("Notification" in window && Notification.permission === "default") { try { Notification.requestPermission(); } catch { /* nada */ } }
  toast(ct().timerStart(fmtSpan(secs)), true);
  ensureTick();
  renderTimers();
}
function timerLeft(x) { return x.left != null ? x.left : (x.end - Date.now()) / 1000; }
function ensureTick() {
  if (timerTick) return;
  timerTick = setInterval(() => {
    let active = false;
    for (const x of cookTimers) {
      if (x.done || x.left != null) { active = active || x.left != null; continue; }
      active = true;
      if (timerLeft(x) <= 0) {
        x.done = true;
        const msg = ct().timerDone(`${x.label}${x.recipe ? ` (${x.recipe})` : ""}`);
        beep();
        if (navigator.vibrate) navigator.vibrate([400, 150, 400, 150, 400]);
        speak(msg, true);
        toast(msg);
        if ("Notification" in window && Notification.permission === "granted" && document.visibilityState !== "visible") {
          try { new Notification(BRAND, { body: msg, icon: "icons/icon-192.png" }); } catch { /* nada */ }
        }
      }
    }
    renderTimers();
    if (!active && !cookTimers.some((x) => x.done)) { clearInterval(timerTick); timerTick = 0; }
  }, 500);
}
function timersHTML() {
  const tr = ct();
  if (!cookTimers.length) return "";
  return `<ul class="timer-list">${cookTimers.map((x) => {
    const left = timerLeft(x);
    const paused = x.left != null;
    return `<li class="timer-item${x.done ? " is-done" : ""}">
      <span class="timer-clock" aria-hidden="true">${x.done ? "0:00" : fmtClock(left)}</span>
      <span class="timer-label">${esc(x.label)}${x.recipe ? ` · ${esc(x.recipe)}` : ""}</span>
      <span class="timer-btns">
        ${x.done ? "" : `<button type="button" class="btn btn-ghost btn-sm" data-timer-act="add" data-id="${x.id}">${esc(tr.add1)}</button>
        <button type="button" class="btn btn-ghost btn-sm" data-timer-act="${paused ? "resume" : "pause"}" data-id="${x.id}">${esc(paused ? tr.resume : tr.pause)}</button>`}
        <button type="button" class="btn btn-ghost btn-sm" data-timer-act="stop" data-id="${x.id}">${esc(tr.stop)}</button>
      </span></li>`;
  }).join("")}</ul>`;
}
function renderTimers() {
  const box = $("cook-timers");
  if (box) box.innerHTML = timersHTML();
  // Pastilla flotante cuando el modo cocina está cerrado.
  const fab = $("timer-fab");
  if (!fab) return;
  const live = cookTimers.filter((x) => !x.done);
  const ringing = cookTimers.some((x) => x.done);
  fab.hidden = !cookTimers.length || cookOpen;
  if (fab.hidden) return;
  const next = live.sort((a, b) => timerLeft(a) - timerLeft(b))[0];
  fab.classList.toggle("is-done", ringing);
  fab.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-timer"/></svg><span>${ringing ? "0:00" : fmtClock(timerLeft(next))}</span><span class="sr-only">${esc(ct().timers)}</span>`;
}
function timerAction(act, id) {
  const x = cookTimers.find((y) => String(y.id) === String(id));
  if (!x) return;
  if (act === "stop") cookTimers = cookTimers.filter((y) => y !== x);
  if (act === "pause") x.left = timerLeft(x);
  if (act === "resume") { x.end = Date.now() + x.left * 1000; x.left = null; ensureTick(); }
  if (act === "add") { if (x.left != null) x.left += 60; else x.end += 60000; }
  renderTimers();
}

/* ── Voz ── */
let readAloud = false;
function speak(text, force = false) {
  if (!("speechSynthesis" in window) || (!readAloud && !force)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = currentLang === "es" ? "es-PR" : "en-US";
    const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith(currentLang));
    if (v) u.voice = v;
    u.rate = 0.95;
    speechSynthesis.speak(u);
  } catch { /* sin voz */ }
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recog = null, listening = false;
function startListening() {
  if (!SR) return;
  recog = new SR();
  recog.lang = currentLang === "es" ? "es-PR" : "en-US";
  recog.continuous = true;
  recog.interimResults = false;
  recog.onresult = (e) => {
    const said = norm(e.results[e.results.length - 1][0].transcript);
    if (/\b(siguiente|proximo|next|adelante)\b/.test(said)) cookGo(1);
    else if (/\b(atras|anterior|back|previous)\b/.test(said)) cookGo(-1);
    else if (/\b(repite|repetir|otra vez|repeat|again)\b/.test(said)) speak(cookStepText(), true);
    else if (/\b(ingrediente|ingredients?)\b/.test(said)) { cookShowIng = !cookShowIng; renderCook(); }
    else if (/\b(temporizador|cronometro|timer)\b/.test(said)) {
      const tm = stepTimes(cookStepText())[0];
      if (tm) startTimer(tm.secs, ct().timerStep(cookStep + 1));
    }
  };
  // El navegador corta la escucha cada tanto: se reanuda mientras siga activa.
  recog.onend = () => { if (listening && cookOpen) { try { recog.start(); } catch { /* ya empezó */ } } };
  recog.onerror = (e) => { if (e.error === "not-allowed" || e.error === "service-not-allowed") { listening = false; renderCook(); } };
  try { recog.start(); listening = true; } catch { listening = false; }
}
function stopListening() { listening = false; try { recog && recog.stop(); } catch { /* nada */ } }

/* ── Pantalla encendida ── */
let wakeLock = null;
async function keepAwake() {
  try { if ("wakeLock" in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request("screen"); wakeLock.addEventListener("release", () => { wakeLock = null; }); } } catch { wakeLock = null; }
}
function releaseAwake() { try { wakeLock && wakeLock.release(); } catch { /* nada */ } wakeLock = null; }
document.addEventListener("visibilitychange", () => { if (cookOpen && document.visibilityState === "visible") keepAwake(); });

/* ── Vista ── */
let cookOpen = false, cookStep = 0, cookShowIng = false, cookLastFocus = null;
const cookSteps = () => (current ? current.steps[currentLang] : []);
const cookStepText = () => cookSteps()[cookStep] || "";
function openCook() {
  if (!current) return;
  cookLastFocus = document.activeElement;
  cookOpen = true; cookStep = 0; cookShowIng = false;
  $("cook-mode").hidden = false;
  document.body.classList.add("cook-on");
  keepAwake();
  renderCook();
  $("cook-title").focus();
  speak(cookStepText());
}
function closeCook() {
  cookOpen = false;
  stopListening();
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  releaseAwake();
  $("cook-mode").hidden = true;
  document.body.classList.remove("cook-on");
  renderTimers();
  if (cookLastFocus && cookLastFocus.focus) cookLastFocus.focus({ preventScroll: true });
}
function cookGo(d) {
  const n = cookSteps().length;
  const next = cookStep + d;
  if (next < 0) return;
  cookStep = Math.min(next, n); // n = pantalla final
  cookShowIng = false;
  renderCook();
  if (cookStep < n) speak(cookStepText());
  else speak(ct().doneTitle);
}
function renderCook() {
  if (!cookOpen || !current) return;
  const tr = ct();
  const steps = cookSteps();
  const n = steps.length;
  const finished = cookStep >= n;
  const factor = currentServings / current.servings;
  $("cook-mode").innerHTML = `
    <div class="cook-top">
      <div class="cook-head">
        <p class="cook-recipe">${esc(current.name[currentLang])}</p>
        <h2 class="cook-title" id="cook-title" tabindex="-1">${finished ? esc(tr.doneTitle) : esc(tr.step(cookStep + 1, n))}</h2>
      </div>
      <button type="button" class="icon-btn cook-close" data-cook="close" aria-label="${esc(tr.close)}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    </div>
    <div class="cook-progress" aria-hidden="true"><span style="width:${Math.round((Math.min(cookStep, n) / n) * 100)}%"></span></div>
    <div class="cook-tools">
      <button type="button" class="chip" data-cook="ing" aria-pressed="${cookShowIng}"><svg class="icon" aria-hidden="true"><use href="#i-list"/></svg><span>${esc(tr.ingredients)}</span></button>
      ${"speechSynthesis" in window ? `<button type="button" class="chip" data-cook="read" aria-pressed="${readAloud}"><svg class="icon" aria-hidden="true"><use href="#i-volume"/></svg><span>${esc(readAloud ? tr.reading : tr.read)}</span></button>` : ""}
      ${SR ? `<button type="button" class="chip" data-cook="listen" aria-pressed="${listening}"><svg class="icon" aria-hidden="true"><use href="#i-mic"/></svg><span>${esc(listening ? tr.listening : tr.listen)}</span></button>` : ""}
    </div>
    ${listening ? `<p class="cook-help">${esc(tr.listenHelp)}</p>` : ""}
    <div class="cook-body" aria-live="polite">
      ${cookShowIng
        ? `<ul class="cook-ing">${current.ingredients[currentLang].map((ing) => `<li>${scaleIngredient(ing, factor)}</li>`).join("")}</ul>`
        : finished
          ? `<div class="cook-done"><p>${esc(tr.doneText)}</p>
              ${typeof cookedButtonHTML === "function" ? cookedButtonHTML(current.id) : ""}
              <button type="button" class="btn btn-outline" data-cook="close">${esc(tr.backToRecipe)}</button></div>`
          : `<p class="cook-step">${esc(steps[cookStep])}</p>${stepTimersHTML(steps[cookStep], cookStep + 1)}`}
    </div>
    <div class="cook-timers" id="cook-timers">${timersHTML()}</div>
    <div class="cook-nav">
      <button type="button" class="btn btn-outline cook-prev" data-cook="prev" ${cookStep === 0 ? "disabled" : ""}><svg class="icon" aria-hidden="true"><use href="#i-arrow-left"/></svg><span>${esc(tr.prev)}</span></button>
      ${finished ? "" : `<button type="button" class="btn btn-primary cook-next" data-cook="next"><span>${esc(cookStep === n - 1 ? tr.finish : tr.next)}</span><svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>`}
    </div>
    ${"wakeLock" in navigator ? `<p class="cook-awake">${esc(tr.awake)}</p>` : ""}`;
}

function setupCook() {
  document.addEventListener("click", (e) => {
    const timerBtn = e.target.closest("[data-timer]");
    if (timerBtn) { startTimer(+timerBtn.dataset.timer, ct().timerStep(timerBtn.dataset.timerStep)); return; }
    const act = e.target.closest("[data-timer-act]");
    if (act) { timerAction(act.dataset.timerAct, act.dataset.id); return; }
    if (e.target.closest("#timer-fab")) {
      // Lleva a la receta del temporizador más próximo y abre el modo cocina.
      const x = cookTimers[0];
      if (x && x.recipeId && (!current || current.id !== x.recipeId)) { location.hash = `#/receta/${encodeURIComponent(x.recipeId)}`; setTimeout(openCook, 50); }
      else if (current) openCook();
      return;
    }
    if (e.target.closest("#cook-btn")) { openCook(); return; }
    const c = e.target.closest("[data-cook]");
    if (!c) return;
    const k = c.dataset.cook;
    if (k === "close") closeCook();
    else if (k === "next") cookGo(1);
    else if (k === "prev") cookGo(-1);
    else if (k === "ing") { cookShowIng = !cookShowIng; renderCook(); }
    else if (k === "read") { readAloud = !readAloud; renderCook(); if (readAloud) speak(cookStepText()); else if ("speechSynthesis" in window) speechSynthesis.cancel(); }
    else if (k === "listen") { if (listening) stopListening(); else startListening(); renderCook(); }
  });
  document.addEventListener("keydown", (e) => {
    if (!cookOpen) return;
    if (e.key === "Escape") { e.stopImmediatePropagation(); closeCook(); }
    else if (e.key === "ArrowRight") cookGo(1);
    else if (e.key === "ArrowLeft") cookGo(-1);
  }, true);
  // Deslizar el dedo: izquierda = siguiente, derecha = anterior.
  let x0 = null;
  $("cook-mode").addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  $("cook-mode").addEventListener("touchend", (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 60) cookGo(dx < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener("hashchange", () => { if (cookOpen && !location.hash.startsWith("#/receta/")) closeCook(); });
}
document.addEventListener("DOMContentLoaded", setupCook);
