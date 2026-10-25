/* Recetarios de Aquí · Modo cocina, temporizadores y voz.
 *
 * "Modo cocina" abre la receta a pantalla completa, un paso a la vez, con letra grande:
 * - La pantalla no se apaga mientras está abierto (Wake Lock, donde el navegador lo permite).
 * - Cada paso que dice un tiempo ("20 minutos", "1 hora") trae su botón de temporizador; los
 *   temporizadores siguen corriendo al cerrar el modo cocina (se ven en una pastilla flotante) y
 *   al terminar suenan, vibran y lo dicen en voz alta.
 * - "Escuchar receta" (en la receta) abre el modo cocina con la voz y los comandos encendidos: lee los
 *   ingredientes y luego cada paso. "Leer en voz alta" lo enciende o apaga dentro del modo cocina.
 * - Voz de mujer o de hombre (o una voz exacta) y velocidad, guardadas en rcb.voice (speechSynthesis: las voces
 *   del celular o la computadora, gratis y sin servidor).
 * - "Manos libres": comandos cortos por voz — siguiente/continúa, atrás, comienzo, "paso 3", repite,
 *   ingredientes, temporizador, para/silencio y salir (reconocimiento de voz del navegador: Chrome, Edge, Safari
 *   y Android; donde no hay, el botón sale apagado con la explicación). No escucha mientras habla.
 * - Al final: "¡Buen provecho!" y "La hice" (js/kitchen.js).
 * Los mismos botones de tiempo salen también en los pasos de la receta (stepTimersHTML).
 * Depende de app.js (t, currentLang, current, currentServings, esc, scaleIngredient, toast, $). */

const COOK_T = {
  es: {
    open: "Modo cocina", close: "Salir del modo cocina", step: (i, n) => `Paso ${i} de ${n}`,
    prev: "Anterior", next: "Siguiente", finish: "Terminé", ingredients: "Ingredientes", hideIng: "Ver el paso",
    read: "Leer en voz alta", reading: "Leyendo", listen: "Manos libres", listening: "Escuchando…",
    listenHelp: "Diga: «siguiente» o «continúa», «atrás», «comienzo», «paso 3», «repite», «ingredientes», «temporizador», «para» o «salir».",
    listenTip: "Toque «Manos libres» para decirle «siguiente», «atrás» o «comienzo» sin tocar la pantalla.",
    noSR: "Este navegador no entiende comandos de voz. Use Chrome (Android o computadora) o Safari (iPhone). La lectura en voz alta sí funciona.",
    micDenied: "Sin permiso para el micrófono: actívelo en el navegador para usar los comandos de voz.",
    heard: (x) => `Escuché: «${x}»`, notUnderstood: (x) => `No entendí «${x}». Diga «siguiente», «atrás» o «comienzo».`,
    sayHelp: "Puede decirme: siguiente, atrás, comienzo, repite o para.", sayIngNext: "Diga siguiente para empezar con el paso 1.",
    atStart: "Ya está en el primer paso.", toSteps: "Empezar",
    voiceBtn: (g) => `Voz: ${g}`, voiceTitle: "Voz", voiceExact: "Voz exacta", genders: { female: "Mujer", male: "Hombre" }, approx: "aprox.",
    noGender: (g) => `Este aparato no tiene una voz de ${g} en español; se usa la que hay${g === "hombre" ? ", más grave" : ""}. En el celular se pueden bajar más voces en Ajustes → Accesibilidad → Contenido leído (iPhone) o Texto a voz (Android); en Windows, en Configuración → Hora e idioma → Voz.`,
    noVoices: "Este aparato no tiene voces instaladas para leer en voz alta.",
    speed: "Velocidad", slow: "Lenta", normal: "Normal", fast: "Rápida", test: "Probar",
    testText: "Hola, así leo sus recetas. Diga siguiente para continuar.",
    awake: "La pantalla se mantiene encendida.",
    timer: (txt) => `Temporizador ${txt}`, timerStart: (txt) => `Temporizador de ${txt} empezado.`,
    timerDone: (lbl) => `¡Tiempo! Terminó el temporizador: ${lbl}.`, timerStep: (i) => `paso ${i}`,
    timers: "Temporizadores", stop: "Parar", pause: "Pausar", resume: "Seguir", add1: "+1 min", doneTag: "¡Listo!",
    doneTitle: "¡Buen provecho!", doneText: "Terminó todos los pasos.", cookedBtn: "Marcar que la hice", backToRecipe: "Volver a la receta",
    of: "de"
  },
  en: {
    open: "Cook mode", close: "Exit cook mode", step: (i, n) => `Step ${i} of ${n}`,
    prev: "Previous", next: "Next", finish: "Done", ingredients: "Ingredients", hideIng: "Back to the step",
    read: "Read aloud", reading: "Reading", listen: "Hands-free", listening: "Listening…",
    listenHelp: "Say: “next” or “continue”, “back”, “start”, “step 3”, “repeat”, “ingredients”, “timer”, “stop” or “exit”.",
    listenTip: "Tap “Hands-free” to say “next”, “back” or “start” without touching the screen.",
    noSR: "This browser doesn't understand voice commands. Use Chrome (Android or computer) or Safari (iPhone). Reading aloud still works.",
    micDenied: "No microphone permission: allow it in the browser to use voice commands.",
    heard: (x) => `I heard: “${x}”`, notUnderstood: (x) => `I didn't get “${x}”. Say “next”, “back” or “start”.`,
    sayHelp: "You can say: next, back, start, repeat or stop.", sayIngNext: "Say next to begin with step 1.",
    atStart: "You're already on the first step.", toSteps: "Start",
    voiceBtn: (g) => `Voice: ${g}`, voiceTitle: "Voice", voiceExact: "Exact voice", genders: { female: "Female", male: "Male" }, approx: "approx.",
    noGender: (g) => `This device has no ${g} English voice; the available one is used${g === "male" ? ", at a lower pitch" : ""}. On phones you can download more voices in Settings → Accessibility → Spoken Content (iPhone) or Text-to-speech (Android); on Windows, in Settings → Time & language → Speech.`,
    noVoices: "This device has no voices installed for reading aloud.",
    speed: "Speed", slow: "Slow", normal: "Normal", fast: "Fast", test: "Test",
    testText: "Hi, this is how I read your recipes. Say next to continue.",
    awake: "The screen stays on.",
    timer: (txt) => `Timer ${txt}`, timerStart: (txt) => `${txt} timer started.`,
    timerDone: (lbl) => `Time's up! Timer finished: ${lbl}.`, timerStep: (i) => `step ${i}`,
    timers: "Timers", stop: "Stop", pause: "Pause", resume: "Resume", add1: "+1 min", doneTag: "Done!",
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
    // Sin temporizadores corriendo no hace falta seguir: los terminados se quedan quietos en "¡Listo!".
    if (!active) { clearInterval(timerTick); timerTick = 0; }
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
      ${x.done ? `<span class="timer-done-tag">${esc(tr.doneTag)}</span>` : ""}
      <span class="timer-label">${esc(x.label)}${x.recipe ? ` · ${esc(x.recipe)}` : ""}</span>
      <span class="timer-btns">
        ${x.done ? "" : `<button type="button" class="btn btn-ghost btn-sm" data-timer-act="add" data-id="${x.id}">${esc(tr.add1)}</button>
        <button type="button" class="btn btn-ghost btn-sm" data-timer-act="${paused ? "resume" : "pause"}" data-id="${x.id}">${esc(paused ? tr.resume : tr.pause)}</button>`}
        <button type="button" class="btn btn-ghost btn-sm" data-timer-act="stop" data-id="${x.id}">${esc(tr.stop)}</button>
      </span></li>`;
  }).join("")}</ul>`;
}
/* Sólo se vuelve a pintar lo que cambió: así el aviso de "terminado" late unas veces y se queda quieto
   (antes se repintaba cada medio segundo y el latido no paraba nunca). */
let timersLast = "", fabLast = "";
function renderTimers() {
  const box = $("cook-timers");
  const html = timersHTML();
  if (box && (html !== timersLast || !box.innerHTML)) { box.innerHTML = html; timersLast = html; }
  // Pastilla flotante cuando el modo cocina está cerrado.
  const fab = $("timer-fab");
  if (!fab) return;
  const live = cookTimers.filter((x) => !x.done);
  const ringing = cookTimers.some((x) => x.done);
  fab.hidden = !cookTimers.length || cookOpen;
  if (fab.hidden) return;
  const next = live.sort((a, b) => timerLeft(a) - timerLeft(b))[0];
  fab.classList.toggle("is-done", ringing);
  const fh = `<svg class="icon" aria-hidden="true"><use href="#i-timer"/></svg><span>${ringing ? ct().doneTag : fmtClock(timerLeft(next))}</span><span class="sr-only">${esc(ct().timers)}</span>`;
  if (fh !== fabLast) { fab.innerHTML = fh; fabLast = fh; }
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

/* ── Voz que lee la receta ──
 * speechSynthesis usa las voces que trae el celular o la computadora: los nombres cambian de un aparato a otro
 * y no dicen si son de hombre o de mujer, así que se reconocen por el nombre (VOICE_FEMALE / VOICE_MALE). La
 * persona escoge "Mujer" u "Hombre" (y, si quiere, una voz exacta) y la velocidad; se guarda en rcb.voice. */
const VOICE_STORE = "rcb.voice";
/* Los nombres se comparan sin acentos (voiceKey): \b no funciona junto a una letra acentuada, y "José" o
 * "Álvaro" no se reconocían. v4.45: se añadieron las voces naturales de Edge de cada país (Karina y Víctor de
 * Puerto Rico, Alonso, Emilio, Mateo…) y las del iPhone (Eddy, Reed, Rocko y Grandpa son de hombre). */
const VOICE_FEMALE = /\b(helena|laura|sabina|paulina|monica|marisol|elvira|dalia|ximena|paloma|lucia|isabela|francisca|camila|lupe|mia|penelope|conchita|carmen|sofia|angelica|elena|esperanza|valentina|catalina|renata|beatriz|karina|salome|belkys|ramona|andrea|teresa|marta|karla|yolanda|margarita|tania|lorena|paola|irene|estrella|abril|laia|triana|vera|candela|carlota|larissa|marina|nuria|soledad|flo|sandy|shelley|grandma|zira|aria|jenny|samantha|karen|susan|hazel|catherine|victoria|allison|ava|joanna|salli|kimberly|kendra|emma|amy|moira|tessa|fiona|veena|michelle|libby|sonia|female|mujer)\b/i;
const VOICE_MALE = /\b(pablo|raul|jorge|juan|diego|carlos|alvaro|alonso|gonzalo|enrique|miguel|andres|david|gerardo|federico|tomas|jose|alberto|antonio|manuel|victor|lorenzo|emilio|luis|javier|roberto|mario|rodrigo|mateo|sebastian|marcelo|arnau|dario|elias|saul|teo|cecilio|liberto|luciano|pelayo|yago|eddy|reed|rocko|grandpa|mark|guy|james|george|daniel|alex|fred|tom|aaron|arthur|matthew|joey|justin|rishi|ryan|eric|brian|christopher|liam|thomas|oliver|male|hombre)\b/i;
// Las voces "Google español" de Chrome (computadora) son de mujer.
const VOICE_GOOGLE_FEMALE = /^google\b/i;
const voiceKey = (v) => String(v.name || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
let voicePrefs = (() => { try { return Object.assign({ gender: "female", name: "", rate: 1 }, JSON.parse(localStorage.getItem(VOICE_STORE) || "{}")); } catch { return { gender: "female", name: "", rate: 1 }; } })();
const saveVoicePrefs = () => { try { localStorage.setItem(VOICE_STORE, JSON.stringify(voicePrefs)); } catch { /* sin almacenamiento */ } };
function voiceGender(v) {
  const k = voiceKey(v);
  return VOICE_MALE.test(k) ? "male" : VOICE_FEMALE.test(k) || VOICE_GOOGLE_FEMALE.test(k) ? "female" : "";
}
/* Voces del idioma de la app, primero las de Puerto Rico, EE. UU. y México. */
function langVoices() {
  if (!("speechSynthesis" in window)) return [];
  const pref = currentLang === "es" ? ["es-pr", "es-us", "es-mx", "es-419", "es-es"] : ["en-us", "en-gb"];
  const rank = (v) => { const i = pref.indexOf((v.lang || "").toLowerCase().replace("_", "-")); return i < 0 ? 9 : i; };
  return speechSynthesis.getVoices().filter((v) => (v.lang || "").toLowerCase().startsWith(currentLang)).sort((a, b) => rank(a) - rank(b));
}
function pickVoice() {
  const list = langVoices();
  if (voicePrefs.name) { const v = list.find((x) => x.name === voicePrefs.name); if (v) return v; }
  return list.find((v) => voiceGender(v) === voicePrefs.gender) || list.find((v) => !voiceGender(v)) || list[0] || null;
}
const hasGender = (g) => langVoices().some((v) => voiceGender(v) === g);
/* Si se pidió hombre y el aparato no tiene una voz de hombre en el idioma, se lee con la que hay más grave
 * (pitch) en vez de leer con voz de mujer como si nada; el botón lo dice ("Hombre (aprox.)"). */
const voiceApprox = (v) => !voicePrefs.name && voicePrefs.gender === "male" && (!v || voiceGender(v) !== "male");
function voiceLabel() {
  const tr = ct();
  const v = pickVoice();
  if (voiceApprox(v)) return tr.voiceBtn(`${tr.genders.male} (${tr.approx})`);
  return tr.voiceBtn(tr.genders[(v && voiceGender(v)) || voicePrefs.gender]);
}
if ("speechSynthesis" in window) speechSynthesis.addEventListener?.("voiceschanged", () => { if (cookOpen) renderCook(); });

/* Lo que se lee: fracciones y abreviaturas en palabras ("1½ tazas" → "1 y media tazas", "350°F" → "350 grados"). */
function sayText(text) {
  const es = currentLang === "es";
  const fr = es ? { "½": "media", "¼": "un cuarto", "¾": "tres cuartos", "⅓": "un tercio", "⅔": "dos tercios", "⅛": "un octavo" }
    : { "½": "a half", "¼": "a quarter", "¾": "three quarters", "⅓": "a third", "⅔": "two thirds", "⅛": "an eighth" };
  return String(text)
    .replace(/(\d)\s*([½¼¾⅓⅔⅛])/g, (m, d, f) => `${d} ${es ? "y" : "and"} ${fr[f]}`)
    .replace(/[½¼¾⅓⅔⅛]/g, (f) => fr[f])
    .replace(/(\d+)\s*°\s*F\b/g, es ? "$1 grados" : "$1 degrees")
    .replace(/(\d+)\s*°\s*C\b/g, es ? "$1 grados centígrados" : "$1 degrees Celsius")
    .replace(/\blbs?\b\.?/gi, es ? "libras" : "pounds").replace(/\boz\b\.?/gi, es ? "onzas" : "ounces")
    .replace(/\bcdta\b\.?/gi, "cucharadita").replace(/\bcda\b\.?/gi, "cucharada")
    .replace(/\bmin\b\.?/gi, es ? "minutos" : "minutes").replace(/\bhrs?\b\.?/gi, es ? "horas" : "hours");
}

let readAloud = false;
let speaking = false;
let voicesWait = null, voicesPending = null, voicesTried = false;
function speak(text, force = false, onDone = null) {
  if (!("speechSynthesis" in window) || (!readAloud && !force)) return;
  // Chrome entrega las voces un momento después de cargar: si todavía no hay, se espera a "voiceschanged"
  // (máximo 1.5 s, una sola vez) y se lee lo último que se pidió. Antes se leía con la voz por defecto del
  // aparato, que suele ser de mujer.
  if (!speechSynthesis.getVoices().length && !voicesTried) {
    voicesPending = [text, force, onDone];
    if (voicesWait) return;
    const go = () => {
      if (!voicesWait) return;
      clearTimeout(voicesWait); voicesWait = null; voicesTried = true;
      speechSynthesis.removeEventListener?.("voiceschanged", go);
      if (cookOpen) renderCook();
      speak(...voicesPending);
    };
    voicesWait = setTimeout(go, 1500);
    speechSynthesis.addEventListener?.("voiceschanged", go);
    return;
  }
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(sayText(text));
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = currentLang === "es" ? "es-PR" : "en-US";
    u.rate = voicePrefs.rate || 1;
    u.pitch = voiceApprox(v) ? 0.7 : 1;
    // Mientras habla, no se escucha (para que no se oiga a sí misma decir "siguiente").
    u.onstart = () => { speaking = true; pauseListening(); };
    u.onend = u.onerror = () => { speaking = false; resumeListening(); if (onDone) onDone(); };
    speechSynthesis.speak(u);
  } catch { /* sin voz */ }
}
function stopSpeaking() { if ("speechSynthesis" in window) speechSynthesis.cancel(); speaking = false; resumeListening(); }
/* Lo que se dice en cada pantalla del modo cocina. */
function cookSay() {
  const tr = ct();
  if (!current) return "";
  if (cookShowIng) return `${tr.ingredients}: ${current.ingredients[currentLang].map((x, i) => (i ? ". " : "") + x).join("")}. ${tr.sayIngNext}`;
  const n = cookSteps().length;
  if (cookStep >= n) return `${tr.doneTitle} ${tr.doneText}`;
  return `${tr.step(cookStep + 1, n)}. ${cookStepText()}`;
}

/* ── Comandos de voz (manos libres) ── */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let recog = null, listening = false, heard = "";
const VOICE_CMDS = [
  ["next", /\b(siguiente|sigue|seguir|continua|continuar|continue|proximo|proxima|pasa|pasale|otra|otro paso|adelante|listo|ya|next|go on|ok next|done)\b/],
  ["prev", /\b(atras|anterior|regresa|regresar|vuelve|volver|back|previous|go back)\b/],
  ["start", /\b(comienzo|comienza|inicio|empezar|empieza|principio|desde el principio|start|beginning|start over|restart)\b/],
  ["repeat", /\b(repite|repetir|otra vez|de nuevo|lee|leer|repeat|again|read)\b/],
  ["ing", /\b(ingrediente|ingredientes|ingredients?)\b/],
  ["timer", /\b(temporizador|cronometro|timer)\b/],
  ["stop", /\b(para|parar|pausa|silencio|callate|calla|stop|pause|quiet)\b/],
  ["close", /\b(salir|cerrar|terminar|exit|close)\b/]
];
const NUM_WORDS = { uno: 1, una: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10, once: 11, doce: 12, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
function runVoiceCommand(said) {
  // "paso 3" / "step three": ir a ese paso.
  const m = said.match(/\b(?:paso|step)\s+(\d+|[a-z]+)\b/);
  if (m) { const n = Number(m[1]) || NUM_WORDS[m[1]]; if (n) { cookGoTo(n - 1); return true; } }
  const hit = VOICE_CMDS.find(([, rx]) => rx.test(said));
  if (!hit) return false;
  const k = hit[0];
  if (k === "next") cookGo(1);
  else if (k === "prev") cookGo(-1);
  else if (k === "start") cookGoTo(0);
  else if (k === "repeat") speak(cookSay(), true);
  else if (k === "ing") { cookShowIng = !cookShowIng; renderCook(); speak(cookSay(), true); }
  else if (k === "timer") { const tm = stepTimes(cookStepText())[0]; if (tm) startTimer(tm.secs, ct().timerStep(cookStep + 1)); }
  else if (k === "stop") stopSpeaking();
  else if (k === "close") closeCook();
  return true;
}
function startListening() {
  if (!SR) return;
  recog = new SR();
  recog.lang = currentLang === "es" ? "es-PR" : "en-US";
  recog.continuous = true;
  recog.interimResults = false;
  recog.onresult = (e) => {
    if (speaking) return;
    const said = norm(e.results[e.results.length - 1][0].transcript);
    heard = said;
    const ok = runVoiceCommand(said);
    const h = $("cook-heard");
    if (h) h.textContent = ok ? ct().heard(said) : ct().notUnderstood(said);
  };
  // El navegador corta la escucha cada tanto: se reanuda mientras siga activa (menos mientras habla).
  recog.onend = () => { if (listening && cookOpen && !speaking) { try { recog.start(); } catch { /* ya empezó */ } } };
  recog.onerror = (e) => { if (e.error === "not-allowed" || e.error === "service-not-allowed") { listening = false; toast(ct().micDenied); renderCook(); } };
  try { recog.start(); listening = true; } catch { listening = false; }
}
function pauseListening() { if (listening && recog) { try { recog.abort(); } catch { /* nada */ } } }
function resumeListening() { if (listening && recog && cookOpen) { try { recog.start(); } catch { /* ya escucha */ } } }
function stopListening() { listening = false; try { recog && recog.abort(); } catch { /* nada */ } }

/* ── Pantalla encendida ── */
let wakeLock = null;
async function keepAwake() {
  try { if ("wakeLock" in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request("screen"); wakeLock.addEventListener("release", () => { wakeLock = null; }); } } catch { wakeLock = null; }
}
function releaseAwake() { try { wakeLock && wakeLock.release(); } catch { /* nada */ } wakeLock = null; }
document.addEventListener("visibilitychange", () => { if (cookOpen && document.visibilityState === "visible") keepAwake(); });

/* ── Vista ── */
let cookOpen = false, cookStep = 0, cookShowIng = false, cookLastFocus = null, voicePanel = false;
const cookSteps = () => (current ? current.steps[currentLang] : []);
const cookStepText = () => cookSteps()[cookStep] || "";
/* withVoice: "Escuchar receta" abre con la voz y los comandos encendidos, y empieza por los ingredientes. */
function openCook(withVoice = false) {
  if (!current) return;
  cookLastFocus = document.activeElement;
  cookOpen = true; cookStep = 0; cookShowIng = withVoice; voicePanel = false; heard = "";
  if (withVoice) { readAloud = true; if (SR && !listening) startListening(); }
  $("cook-mode").hidden = false;
  document.body.classList.add("cook-on");
  keepAwake();
  renderCook();
  $("cook-title").focus();
  if (withVoice) speak(`${current.name[currentLang]}. ${cookSay()}${SR ? ` ${ct().sayHelp}` : ""}`);
  else speak(cookSay());
}
function closeCook() {
  cookOpen = false;
  stopListening();
  stopSpeaking();
  releaseAwake();
  $("cook-mode").hidden = true;
  document.body.classList.remove("cook-on");
  renderTimers();
  if (cookLastFocus && cookLastFocus.focus) cookLastFocus.focus({ preventScroll: true });
}
function cookGo(d) {
  // Desde los ingredientes, "siguiente" va al paso en que estaba.
  if (cookShowIng && d > 0) { cookShowIng = false; renderCook(); speak(cookSay()); return; }
  const n = cookSteps().length;
  const next = cookStep + d;
  if (next < 0) { speak(ct().atStart); return; }
  cookStep = Math.min(next, n); // n = pantalla final
  cookShowIng = false;
  renderCook();
  speak(cookSay());
}
function cookGoTo(i) {
  const n = cookSteps().length;
  cookStep = Math.max(0, Math.min(i, n - 1));
  cookShowIng = false;
  renderCook();
  speak(cookSay());
}
function voicePanelHTML() {
  const tr = ct();
  const list = langVoices();
  if (!list.length) return `<div class="cook-voice-panel"><p class="cook-help">${esc(tr.noVoices)}</p></div>`;
  const cur = pickVoice();
  const g = (k) => `<label class="chip-check chip-radio"><input type="radio" name="cook-gender" data-voice-gender="${k}" ${voicePrefs.gender === k && !voicePrefs.name ? "checked" : ""}><span>${esc(tr.genders[k])}</span></label>`;
  return `<div class="cook-voice-panel" role="group" aria-label="${esc(tr.voiceTitle)}">
    <div class="cook-voice-row"><span class="cook-voice-label">${esc(tr.voiceTitle)}</span>${g("female")}${g("male")}</div>
    ${!hasGender(voicePrefs.gender) ? `<p class="cook-help">${esc(tr.noGender(tr.genders[voicePrefs.gender].toLowerCase()))}</p>` : ""}
    <div class="cook-voice-row">
      <label class="cook-voice-label" for="cook-voice-name">${esc(tr.voiceExact)}</label>
      <select id="cook-voice-name" data-voice-name>${list.map((v) => `<option value="${esc(v.name)}" ${cur && cur.name === v.name ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})${voiceGender(v) ? ` · ${esc(tr.genders[voiceGender(v)])}` : ""}</option>`).join("")}</select>
    </div>
    <div class="cook-voice-row"><span class="cook-voice-label">${esc(tr.speed)}</span>
      ${[[0.8, tr.slow], [1, tr.normal], [1.2, tr.fast]].map(([r, l]) => `<label class="chip-check chip-radio"><input type="radio" name="cook-rate" data-voice-rate="${r}" ${voicePrefs.rate === r ? "checked" : ""}><span>${esc(l)}</span></label>`).join("")}
      <button type="button" class="btn btn-outline btn-sm" data-cook="test">${esc(tr.test)}</button>
    </div>
  </div>`;
}
function renderCook() {
  if (!cookOpen || !current) return;
  const tr = ct();
  const steps = cookSteps();
  const n = steps.length;
  const finished = cookStep >= n;
  const factor = currentServings / current.servings;
  const voiceOk = "speechSynthesis" in window;
  $("cook-mode").innerHTML = `
    <div class="cook-top">
      <div class="cook-head">
        <p class="cook-recipe">${esc(current.name[currentLang])}</p>
        <h2 class="cook-title" id="cook-title" tabindex="-1">${cookShowIng ? esc(tr.ingredients) : finished ? esc(tr.doneTitle) : esc(tr.step(cookStep + 1, n))}</h2>
      </div>
      <button type="button" class="icon-btn cook-close" data-cook="close" aria-label="${esc(tr.close)}"><svg class="icon" aria-hidden="true"><use href="#i-x"/></svg></button>
    </div>
    <div class="cook-progress" aria-hidden="true"><span style="width:${Math.round((Math.min(cookStep, n) / n) * 100)}%"></span></div>
    <div class="cook-tools">
      <button type="button" class="chip" data-cook="ing" aria-pressed="${cookShowIng}"><svg class="icon" aria-hidden="true"><use href="#i-list"/></svg><span>${esc(tr.ingredients)}</span></button>
      ${voiceOk ? `<button type="button" class="chip" data-cook="read" aria-pressed="${readAloud}"><svg class="icon" aria-hidden="true"><use href="#i-volume"/></svg><span>${esc(readAloud ? tr.reading : tr.read)}</span></button>
        <button type="button" class="chip" data-cook="voice" aria-expanded="${voicePanel}"><span>${esc(voiceLabel())}</span></button>` : ""}
      <button type="button" class="chip" data-cook="listen" aria-pressed="${listening}" ${SR ? "" : "disabled"}><svg class="icon" aria-hidden="true"><use href="#i-mic"/></svg><span>${esc(listening ? tr.listening : tr.listen)}</span></button>
    </div>
    ${voicePanel ? voicePanelHTML() : ""}
    ${!SR ? `<p class="cook-help">${esc(tr.noSR)}</p>` : listening ? `<p class="cook-help">${esc(tr.listenHelp)}</p><p class="cook-heard" id="cook-heard" aria-live="polite">${heard ? esc(tr.heard(heard)) : ""}</p>` : `<p class="cook-help">${esc(tr.listenTip)}</p>`}
    <div class="cook-body" aria-live="polite">
      ${cookShowIng
        ? `<ul class="cook-ing">${current.ingredients[currentLang].map((ing) => `<li>${scaleIngredient(ing, factor)}</li>`).join("")}</ul>`
        : finished
          ? `<div class="cook-done"><p>${esc(tr.doneText)}</p>
              ${typeof cookedButtonHTML === "function" ? cookedButtonHTML(current.id) : ""}
              <button type="button" class="btn btn-outline" data-cook="close">${esc(tr.backToRecipe)}</button></div>`
          : `<p class="cook-step">${withCelsius(steps[cookStep])}</p>${stepTimersHTML(steps[cookStep], cookStep + 1)}`}
    </div>
    <div class="cook-timers" id="cook-timers">${timersHTML()}</div>
    <div class="cook-nav">
      <button type="button" class="btn btn-outline cook-prev" data-cook="prev" ${cookStep === 0 && !cookShowIng ? "disabled" : ""}><svg class="icon" aria-hidden="true"><use href="#i-arrow-left"/></svg><span>${esc(tr.prev)}</span></button>
      ${finished ? "" : `<button type="button" class="btn btn-primary cook-next" data-cook="next"><span>${esc(cookShowIng ? tr.toSteps : cookStep === n - 1 ? tr.finish : tr.next)}</span><svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>`}
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
      if (x && x.recipeId && (!current || current.id !== x.recipeId)) { location.hash = `#/receta/${encodeURIComponent(x.recipeId)}`; setTimeout(() => openCook(), 50); }
      else if (current) openCook();
      return;
    }
    if (e.target.closest("#cook-btn")) { openCook(); return; }
    if (e.target.closest("#listen-btn")) { openCook(true); return; }
    const c = e.target.closest("[data-cook]");
    if (!c) return;
    const k = c.dataset.cook;
    if (k === "close") closeCook();
    else if (k === "next") cookGo(1);
    else if (k === "prev") { if (cookShowIng) { cookShowIng = false; renderCook(); speak(cookSay()); } else cookGo(-1); }
    else if (k === "ing") { cookShowIng = !cookShowIng; renderCook(); speak(cookSay()); }
    else if (k === "read") { readAloud = !readAloud; renderCook(); if (readAloud) speak(cookSay()); else stopSpeaking(); }
    else if (k === "voice") { voicePanel = !voicePanel; renderCook(); }
    else if (k === "test") speak(ct().testText, true);
    else if (k === "listen") { if (listening) stopListening(); else { startListening(); speak(ct().sayHelp, true); } renderCook(); }
  });
  document.addEventListener("change", (e) => {
    const el = e.target;
    if (el.dataset.voiceGender) { voicePrefs.gender = el.dataset.voiceGender; voicePrefs.name = ""; }
    else if (el.matches("[data-voice-name]")) { voicePrefs.name = el.value; const v = langVoices().find((x) => x.name === el.value); if (v && voiceGender(v)) voicePrefs.gender = voiceGender(v); }
    else if (el.dataset.voiceRate) voicePrefs.rate = +el.dataset.voiceRate;
    else return;
    saveVoicePrefs();
    renderCook();
    speak(ct().testText, true);
  });
  document.addEventListener("keydown", (e) => {
    if (!cookOpen) return;
    if (e.target.closest && e.target.closest("select, input")) return;
    if (e.key === "Escape") { e.stopImmediatePropagation(); closeCook(); }
    else if (e.key === "ArrowRight") cookGo(1);
    else if (e.key === "ArrowLeft") cookGo(-1);
  }, true);
  // Deslizar el dedo: izquierda = siguiente, derecha = anterior.
  let x0 = null;
  $("cook-mode").addEventListener("touchstart", (e) => { x0 = e.target.closest("select, input, .cook-voice-panel") ? null : e.touches[0].clientX; }, { passive: true });
  $("cook-mode").addEventListener("touchend", (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 60) cookGo(dx < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener("hashchange", () => { if (cookOpen && !location.hash.startsWith("#/receta/")) closeCook(); });
}
document.addEventListener("DOMContentLoaded", setupCook);
