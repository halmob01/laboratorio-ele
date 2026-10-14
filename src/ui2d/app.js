// Vista 2D: collega la sessione del motore al DOM (disegno, tocco, tastiera).
// Le regole del gioco stanno in src/engine/session.js; qui ci sono solo ingressi e uscite grafiche.

import { WIRE_COLORS } from '../engine/index.js';
import { createSession, cleanName, demoFrames, blankSnap } from '../engine/index.js';
import { levels, deriveFull } from '../content/index.js';
import { HELP } from '../content/it.js';
import { composeComps } from './layout.js';
// Su computer i livelli con molti componenti si dispongono su due colonne, per dare scala al banco.
const colsFor = lv => (!MQ.matches && lv.engine === 2 && lv.comps.length >= 5 ? 2 : 1);
import * as R from './render.js';
import * as V from './screens.js';
import { INTRO } from '../content/home.js';
import { setLang, detect, onLang } from '../i18n/index.js';
import '../i18n/ar.js';
import { createHouse, isHouseLevel, firstCircuit } from '../trilocale/page.js';

const $ = s => document.querySelector(s);
const MQ = window.matchMedia('(max-width:919px)');
const buzz = () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* non disponibile */ } };

/* ---------- salvataggi ---------- */
const STORAGE_KEY = 'fase-e-neutro-1';
const OLD_KEY = 'lab-elettrico-1';       // versione precedente: la sessione ne migra il formato
const PROFILE_KEY = 'fase-e-neutro-profilo';
const WORK_KEY = 'fase-e-neutro-lavoro';
const read = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
const write = (k, o) => { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) { /* si continua senza salvare */ } };
const storage = {
  load() { return read(STORAGE_KEY) || read(OLD_KEY) || {}; },
  save(o) { write(STORAGE_KEY, o); },
  loadWork() { return read(WORK_KEY) || {}; },
  saveWork(o) { write(WORK_KEY, o); },
};
const profile = Object.assign({ name: '', introSeen: false, nameAsked: false }, read(PROFILE_KEY) || {});
const saveProfile = () => write(PROFILE_KEY, profile);
const session = createSession({ levels, deriveFull, storage });

/* ---------- stato della sola vista ---------- */
let S = null;           // ultima istantanea della sessione
const house = createHouse(document.querySelector('#house'), { session, go: h => { location.hash = h; }, reduced: () => REDUCED.matches });
let comps = [];         // componenti con geometria per il livello corrente
let lastKey = null;
let rebuild = false;    // forza il ridisegno della scena anche se il livello non cambia
let COL = 'marrone';    // colore del filo selezionato
let SEL = null;         // morsetto selezionato
let KWH = 42.7;         // contatore, solo estetico
const ui = () => ({ mobile: MQ.matches, sel: SEL, kwh: KWH });

/* ---------- disegno ---------- */
function renderPalette() {
  const lv = S && S.level;
  const pal = (lv && lv.palette) || WIRE_COLORS;
  if (lv && !pal.includes(COL)) COL = pal[0];
  $('#palette').innerHTML = R.paletteHTML(COL, lv);
}
function setRoomVB() {
  const r = $('#room');
  r.classList.toggle('full', S.level.room !== 'tavolo' && (S.level.controls || []).length > 0);
  r.setAttribute('viewBox', R.roomViewBox(S.level));
  r.setAttribute('preserveAspectRatio', S.level.room === 'tavolo' ? 'xMidYMid slice' : 'xMidYMin slice');
}
function renderBench() {
  const b = $('#bench');
  b.setAttribute('viewBox', R.benchViewBox(comps));
  b.innerHTML = R.benchHTML(S, comps, ui());
}
function renderStatus() {
  $('#status').innerHTML = R.statusHTML(S);
  R.updateRoom($('#room'), S, comps);
}
function renderResult() { $('#result').innerHTML = R.resultHTML(S); }
function setInfo(key, extra, open) {
  const h = HELP[key];
  $('#info').innerHTML = `<button class="x" data-x="1" aria-label="Chiudi">Chiudi</button><h3>${h[0]}</h3><p>${h[1]}</p>${extra ? `<p style="margin-top:8px"><b>Suggerimento:</b> ${extra}</p>` : ''}`;
  $('#info').classList.toggle('open', open !== false);
}
function showHint() {
  const h = session.requestHint();
  if (!h) return;
  $('#info').innerHTML = `<button class="x" data-x="1" aria-label="Chiudi">Chiudi</button><h3>Suggerimento ${h.index + 1} di ${h.total}</h3><p>${h.text}</p>`;
  $('#info').classList.add('open');
}

function onLevelChange() {
  stopDemo();
  comps = composeComps(S.level, colsFor(S.level));
  SEL = null;
  renderPalette();
  $('#lvTag').textContent = S.level.name + (S.mode === 'contatore' ? ' · dal contatore' : '') + (S.playMode === 'verifica' ? ' · prova di salto' : '');
  $('#room').innerHTML = R.roomHTML(S.level, comps);
  setRoomVB();
  setInfo('morsetto', null, false);
}

/* ---------- schermate e indirizzi ---------- */
// #/home | #/livello/<id> | #/livello/<id>/verifica
function parseRoute() {
  const m = /^#\/livello\/([^/]+)(\/verifica)?$/.exec(location.hash || '');
  if (m && levels.some(l => l.id === m[1])) return { name: 'level', id: m[1], verify: !!m[2], key: m[0] };
  if (location.hash === '#/modulo/1') {
    const id = firstCircuit(session);
    try { history.replaceState(null, '', '#/livello/' + id); } catch (e) { location.hash = '#/livello/' + id; }
    return { name: 'level', id, verify: false, key: '#/livello/' + id };
  }
  if (location.hash === '#/quaderno') return { name: 'quaderno', key: '#/quaderno' };
  return { name: 'home', key: '#/home' };
}
let route = parseRoute();
let routeApplied = null;

function renderChrome() {
  $('#appbar').innerHTML = V.appbarHTML(S, profile);
  $('#tabbar').innerHTML = V.tabbarHTML(route, S.last);
}

/* ---------- lezione: pagine e dimostrazione ---------- */
const REDUCED = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
let demo = { page: -1, frames: [], i: 0, timer: null, playing: false };
function stopDemo() { if (demo.timer) clearTimeout(demo.timer); demo.timer = null; demo.playing = false; }
function drawDemo() {
  const f = demo.frames[demo.i];
  const b = $('#demoBench');
  if (!f || !b) return;
  b.innerHTML = R.benchHTML(f.snap, comps, { mobile: MQ.matches, sel: null, kwh: KWH, newWire: f.newWire });
  $('#demoCap').textContent = f.caption;
  $('#demoN').textContent = String(demo.i + 1);
  $('#demoCount').textContent = (demo.i + 1) + ' / ' + demo.frames.length;
  const t = document.querySelector('[data-demo="toggle"]');
  if (t) { t.textContent = demo.playing ? 'Pausa' : 'Riprendi'; t.setAttribute('aria-label', t.textContent); }
}
// Tempo di ogni passo della demo: abbastanza per guardare il filo e leggere la didascalia
// (circa 3,5 s, di piu' per le didascalie lunghe, al massimo 7 s).
const demoDelay = f => Math.min(7000, 3500 + ((f && f.caption) || '').length * 30);
function demoTick() {
  if (demo.i < demo.frames.length - 1) { demo.i++; drawDemo(); }
  if (demo.i >= demo.frames.length - 1) { stopDemo(); drawDemo(); return; }
  demo.timer = setTimeout(demoTick, demoDelay(demo.frames[demo.i]));
}
function startDemo() {
  stopDemo();
  if (REDUCED.matches || demo.i >= demo.frames.length - 1) { drawDemo(); return; }
  demo.playing = true;
  demo.timer = setTimeout(demoTick, demoDelay(demo.frames[demo.i]));
  drawDemo();
}

function renderLesson() {
  const pg = S.unit.pageData, extra = {}, ui2 = { mobile: MQ.matches, sel: null, kwh: KWH };
  if (pg.type !== 'demo') stopDemo();
  if (pg.type === 'spiegazione' && pg.room) extra.roomInner = R.roomStaticHTML(S.level, comps, pg.room === 'lit');
  if (pg.type === 'pezzi') {
    extra.benchBox = R.benchViewBox(comps);
    extra.benchInner = R.benchHTML(blankSnap(S.level), comps, { ...ui2, focus: pg.focus });
  }
  let fresh = false;
  if (pg.type === 'demo') {
    const key = S.levelKey + '|' + S.unit.page;
    if (demo.page !== key) { stopDemo(); demo = { page: key, frames: demoFrames(S.level, pg.captions), i: 0, timer: null, playing: false }; fresh = true; }
    const f = demo.frames[demo.i];
    extra.benchBox = R.benchViewBox(comps);
    extra.benchInner = R.benchHTML(f.snap, comps, { ...ui2, newWire: f.newWire });
    extra.caption = f.caption; extra.frame = demo.i; extra.frames = demo.frames.length; extra.playing = demo.playing;
  } else {
    demo.page = -1;
  }
  $('#lesson').innerHTML = V.lessonHTML(S, extra);
  if (fresh) startDemo();
}

function renderLevelScreen() {
  const ph = S.unit ? S.unit.phase : 'build';
  const inLesson = !!S.unit && ph === 'lesson' && S.playMode === 'apprendimento';
  const scr = $('#screen-level');
  const hl = isHouseLevel(S.level.id);
  scr.className = 'phase-' + (inLesson ? 'learn' : 'play') + (S.playMode === 'verifica' ? ' verify' : '') + (hl ? ' with-house' : '');
  $('#house').hidden = !hl;
  if (hl) house.sync(S); else if (house.isMounted()) house.unmount();
  $('#lesson').hidden = !inLesson;
  $('#work').hidden = inLesson;
  if (inLesson) { renderLesson(); return; }
  stopDemo();
  demo.page = -1;
  $('#lesson').innerHTML = '';
  $('#work').classList.toggle('passed', !!(S.result && S.result.pass));
  $('#unit').innerHTML = V.unitHTML(S);
  $('#sideLinks').innerHTML = V.sideLinksHTML(S);
  const doneBefore = (S.levels.find(l => l.id === S.level.id) || {}).stars > 0;
  $('#modeBar').hidden = S.level.quadroOnly || S.playMode === 'verifica' || (!!S.unit && ph !== 'done' && !doneBefore);
  $('#bHint').hidden = $('#bSol').hidden = S.playMode === 'verifica';
  $('#bSol').textContent = S.solutionShown ? 'Nascondi soluzione' : 'Mostra soluzione';
  $('#bSol').setAttribute('aria-pressed', String(S.solutionShown));
  const fl = $('#bFlow');
  fl.hidden = S.level.flow !== 'onDemand' || S.playMode === 'verifica';
  fl.setAttribute('aria-pressed', String(S.flowVisible));
  fl.textContent = S.flowVisible ? 'Nascondi la corrente' : 'Mostra la corrente';
  const lg = $('#flowLegend');
  lg.hidden = !S.flowVisible;
  lg.innerHTML = S.flowVisible ? '<span><i class="lg f"></i>in tensione, fase</span><span><i class="lg n"></i>in tensione, neutro</span><span><i class="lg c"></i>percorso da corrente</span><span><i class="lg s"></i>qui la tensione si ferma</span>' : '';
  renderBench();
  renderStatus();
  renderResult();
}

function render() {
  if (!S) return;
  renderChrome();
  const home = route.name === 'home';
  const qd = route.name === 'quaderno';
  $('#screen-home').hidden = !home;
  $('#screen-quaderno').hidden = !qd;
  $('#screen-level').hidden = home || qd;
  if (home || qd) house.unmount();
  if (qd) { stopDemo(); demo.page = -1; $('#screen-quaderno').innerHTML = V.quadernoHTML(S, levels); return; }
  if (home) {
    stopDemo(); demo.page = -1;
    $('#screen-home').innerHTML = V.homeHTML(S);
    return;
  }
  const vk = S.levelKey + '|' + S.playMode;
  if (vk !== lastKey || rebuild) { lastKey = vk; rebuild = false; onLevelChange(); }
  renderLevelScreen();
}

// Applica l'indirizzo corrente: apre il livello nella sessione, poi disegna.
function applyRoute() {
  route = parseRoute();
  if (routeApplied === route.key) { render(); return; }
  routeApplied = route.key;
  if (route.name === 'level') {
    rebuild = true;
    if (!profile.introSeen && !overlayKind) openIntro();   // l'introduzione si apre al primo tentativo di giocare
    session.selectLevel(route.id, { verify: route.verify });   // emette: disegna
  } else {
    render();
  }
  window.scrollTo(0, 0);
  const m = $('#main'); if (m && m.focus) m.focus({ preventScroll: true });
}
window.addEventListener('hashchange', applyRoute);

// Ogni cambiamento della sessione ridisegna tutto: e' poco e resta semplice.
session.subscribe(s => { S = s; render(); });

/* ---------- selezione dei morsetti e fili ---------- */
function svgPt(e) {
  const b = $('#bench'), pt = b.createSVGPoint();
  pt.x = e.clientX; pt.y = e.clientY;
  return pt.matrixTransform(b.getScreenCTM().inverse());
}
function clearSel() {
  SEL = null;
  document.querySelectorAll('.term.sel').forEach(n => n.classList.remove('sel'));
  const p = $('#prev'); if (p) p.setAttribute('d', '');
}
let lastWireAt = 0, lastWireId = null;
function addWire(a, b) {
  if (!a || !b || a === b) return;
  session.addWire(a, b, COL);
  const ws = session.snapshot().wires;
  lastWireAt = Date.now(); lastWireId = ws.length ? String(ws[ws.length - 1].id) : null;
  buzz();
}

let dragging = false, moved = false, downPt = null, reselect = false, downTerm = null, prevSel = null;
const bench = $('#bench');
function hidePrev() { const p = $('#prev'); if (p) p.setAttribute('d', ''); }
// Il filo si crea al rilascio, non alla pressione: un dito che tocca un morsetto per scorrere la pagina
// o che scivola via non deve creare fili per sbaglio (bug su telefono).
bench.addEventListener('pointerdown', e => {
  dragging = false; downTerm = null;
  const t = e.target.closest('[data-term]');
  if (!t) return;
  const id = t.dataset.term;
  prevSel = SEL; downTerm = id;
  reselect = (SEL === id);
  dragging = true; moved = false; downPt = { x: e.clientX, y: e.clientY };
  if (!SEL) { SEL = id; t.classList.add('sel'); }
});
// Sul telefono il browser prende il gesto per scorrere la pagina e annulla il trascinamento (pointercancel):
// touch-action sugli elementi SVG non basta. Se il dito parte da un morsetto, la pagina non deve scorrere.
bench.addEventListener('touchstart', e => {
  if (e.target.closest && e.target.closest('[data-term]')) e.preventDefault();
}, { passive: false });
window.addEventListener('pointermove', e => {
  if (!SEL) return;
  if (dragging && downPt && Math.hypot(e.clientX - downPt.x, e.clientY - downPt.y) > 10) moved = true;
  if (e.pointerType !== 'mouse' && !dragging) return;
  if (dragging && prevSel && prevSel !== downTerm) return;   // tocco su un secondo morsetto: niente anteprima finché non si rilascia
  const p = $('#prev'); if (!p) return;
  const a = R.termPos(comps, SEL), q = svgPt(e);
  p.setAttribute('d', `M${a.x} ${a.y} L${q.x} ${q.y}`);
});
window.addEventListener('pointerup', e => {
  if (!dragging) return; dragging = false;
  const el = document.elementFromPoint ? document.elementFromPoint(e.clientX, e.clientY) : null;
  const t = el && el.closest ? el.closest('[data-term]') : null;
  const up = t ? t.dataset.term : null;
  if (!moved) {
    // tocco: completa il filo dal morsetto già scelto, oppure deseleziona toccando di nuovo lo stesso
    if (prevSel && prevSel !== downTerm) { clearSel(); addWire(prevSel, downTerm); }
    else if (reselect) clearSel();
    else hidePrev();
  } else if (up && SEL && up !== SEL && downTerm === SEL) {
    // trascinamento da un morsetto a un altro
    const a = SEL; clearSel(); addWire(a, up);
  } else hidePrev();
  downTerm = null;
});
window.addEventListener('pointercancel', () => { dragging = false; hidePrev(); });
bench.addEventListener('click', e => {
  const t = e.target.closest('[data-term]');
  if (t) return;
  const h = e.target.closest('[data-help]'); if (h) { setInfo(h.dataset.help); return; }
  const q = e.target.closest('[data-q]'); if (q) { clearSel(); session.toggleBreaker(); return; }
  const tp = e.target.closest('[data-test]'); if (tp) { clearSel(); session.testPart(tp.dataset.test); return; }
  const rp = e.target.closest('[data-reset]'); if (rp) { clearSel(); session.resetPart(rp.dataset.reset); return; }
  const c = e.target.closest('[data-ctl]'); if (c) { clearSel(); session.toggleControl(c.dataset.ctl); return; }
  // Il "click" che il telefono genera dopo il tocco arriva quando il banco e' gia' stato ridisegnato:
  // puo' cadere sul filo appena creato e cancellarlo. Quel filo non si cancella nel primo mezzo secondo.
  const w = e.target.closest('[data-wire]'); if (w) { clearSel(); if (!(w.dataset.wire === lastWireId && Date.now() - lastWireAt < 600)) session.removeWire(+w.dataset.wire); return; }
  clearSel();
});
/* ---------- pulsanti a impulso (motore v2): attivi finche' si tengono premuti ---------- */
// Un tocco breve vale premi e rilascia, con una pressione minima di 250 ms perche' il circuito faccia in tempo a rispondere.
const HOLD_MIN = 250;
let held = null;   // { id, at }
let pendingRelease = null;   // { id, timer }: rilascio ritardato di un tocco breve
function holdStart(id) {
  if (held) return;
  if (pendingRelease) { clearTimeout(pendingRelease.timer); session.release(pendingRelease.id); pendingRelease = null; }
  held = { id, at: Date.now() };
  clearSel(); session.press(id);
}
function holdEnd() {
  if (!held) return;
  const h = held; held = null;
  const rest = HOLD_MIN - (Date.now() - h.at);
  if (rest > 0) {
    pendingRelease = { id: h.id, timer: setTimeout(() => { pendingRelease = null; session.release(h.id); }, rest) };
  } else session.release(h.id);
}
document.addEventListener('pointerdown', e => {
  const h = e.target.closest('[data-hold]');
  if (!h) return;
  e.preventDefault();
  holdStart(h.dataset.hold);
});
window.addEventListener('pointerup', holdEnd);
window.addEventListener('pointercancel', holdEnd);
window.addEventListener('blur', holdEnd);
document.addEventListener('keyup', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  if (e.target.closest('[data-hold]')) { e.preventDefault(); holdEnd(); }
});
bench.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const hd = e.target.closest('[data-hold]');
  if (hd) { e.preventDefault(); if (!e.repeat) holdStart(hd.dataset.hold); return; }
  const tr_ = e.target.closest('[data-test],[data-reset]');
  if (tr_) { e.preventDefault(); if (tr_.dataset.test) session.testPart(tr_.dataset.test); else session.resetPart(tr_.dataset.reset); return; }
  const t = e.target.closest('[data-term]');
  if (t) {
    e.preventDefault();
    const id = t.dataset.term;
    if (SEL && SEL !== id) { const a = SEL; clearSel(); addWire(a, id); }
    else { clearSel(); SEL = id; t.classList.add('sel'); }
    return;
  }
  const q = e.target.closest('[data-q]'); if (q) { e.preventDefault(); session.toggleBreaker(); return; }
  const h = e.target.closest('[data-help]'); if (h) { e.preventDefault(); setInfo(h.dataset.help); }
});
document.addEventListener('click', e => { if (e.target.closest('[data-overload]')) session.setOverload(!S.overload); });
document.addEventListener('click', e => { if (e.target.closest('[data-rewind]')) session.rewind(); });
$('#room').addEventListener('click', e => { const c = e.target.closest('[data-ctl]'); if (c) session.toggleControl(c.dataset.ctl); });
$('#room').addEventListener('keydown', e => {
  const hd = e.target.closest('[data-hold]');
  if (hd && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); if (!e.repeat) holdStart(hd.dataset.hold); return; }
  if (e.key === 'Enter' || e.key === ' ') {
    const c = e.target.closest('[data-ctl]');
    if (c) { e.preventDefault(); session.toggleControl(c.dataset.ctl); }
  }
});

/* ---------- comandi della pagina ---------- */
document.querySelector('.mode').addEventListener('click', e => {
  const b = e.target.closest('[data-mode]');
  if (!b || b.dataset.mode === S.mode) return;
  document.querySelectorAll('.seg').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.mode === b.dataset.mode)));
  session.setMode(b.dataset.mode);
});
setInterval(() => {
  if (S && (S.lit || (S.litLoads && S.litLoads.some(Boolean)))) { KWH += 0.1; const k = $('#kwh'); if (k) k.textContent = R.kwhText(KWH); }
}, 700);
// Orologio del circuito (temporizzatori, protezioni termiche): solo quando serve e la scheda e' visibile.
setInterval(() => { if (S && S.needsClock && !document.hidden && route.name === 'level') session.tick(0.5); }, 500);
$('#info').addEventListener('click', e => { if (e.target.closest('[data-x]')) $('#info').classList.remove('open'); });
if (window.ResizeObserver) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--roomH', Math.ceil($('.roomcard').getBoundingClientRect().height) + 8 + 'px');
  }).observe($('.roomcard'));
}
const onMQ = () => { if (route.name !== 'level' || !comps.length) return; comps = composeComps(S.level, colsFor(S.level)); setRoomVB(); renderBench(); if (!MQ.matches) $('#info').classList.add('open'); };
if (MQ.addEventListener) MQ.addEventListener('change', onMQ);
$('#palette').addEventListener('click', e => { const b = e.target.closest('[data-col]'); if (b) { COL = b.dataset.col; renderPalette(); } });
$('#bUndo').addEventListener('click', () => session.undo());
$('#bClear').addEventListener('click', () => session.clear());
$('#bHint').addEventListener('click', showHint);
$('#bSol').addEventListener('click', () => session.toggleSolution());
$('#bCheck').addEventListener('click', () => {
  const r = session.check();
  const behavior = REDUCED.matches ? 'auto' : 'smooth';
  // se l'impianto funziona si scorre fino alla stanza accesa, altrimenti all'esito dei controlli
  if (r.pass && isHouseLevel(S.level.id)) house.passed();
  (r.pass ? (isHouseLevel(S.level.id) ? $('#house') : $('.roomcard')) : $('#result')).scrollIntoView({ behavior, block: r.pass ? 'start' : 'nearest' });
});
$('#bFlow').addEventListener('click', () => session.toggleFlow());
$('#result').addEventListener('click', e => {
  if (e.target.id === 'bNext') { const n = S.levels[S.levelIndex + 1]; if (e.target.dataset.href) location.hash = e.target.dataset.href; else if (n) location.hash = '#/livello/' + n.id; }
});

/* ---------- scheda dell'unita' (lezione, previsione, guasto, azioni dopo la verifica) ---------- */
function onUnitClick(e) {
  const u = e.target.closest('[data-unit]');
  if (u && !u.disabled) {
    const a = u.dataset.unit;
    if (a === 'next') session.unitNext();
    else if (a === 'back') session.unitBack();
    else if (a === 'skip') session.skipLesson();
    else if (a === 'lesson') session.showLesson();
    else if (a === 'leaveFault') session.leaveFault();
    if (a === 'next' || a === 'back') { const h = document.querySelector('#lesson h2'); if (h) h.focus({ preventScroll: true }); }   // il lettore di schermo riparte dal titolo della pagina
    return;
  }
  const act = e.target.closest('[data-act]');
  if (act) {
    opener = act;
    const a = act.dataset.act;
    if (a === 'summary') openOverlay('summary', V.summaryHTML(S));
    else if (a === 'fault') session.startFault();
    else if (a === 'full') { document.querySelectorAll('.seg').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.mode === 'contatore'))); session.setMode('contatore'); }
    return;
  }
  const dm = e.target.closest('[data-demo]');
  if (dm) {
    const a = dm.dataset.demo;
    if (a === 'toggle') { if (demo.playing) { stopDemo(); drawDemo(); } else { if (demo.i >= demo.frames.length - 1) demo.i = 0; startDemo(); } }
    else if (a === 'step') { stopDemo(); if (demo.i < demo.frames.length - 1) demo.i++; drawDemo(); }
    else if (a === 'restart') { demo.i = 0; startDemo(); }
    return;
  }
  const p = e.target.closest('[data-pred]'); if (p) { session.answerPrediction(p.dataset.pred); return; }
  const d = e.target.closest('[data-diag]'); if (d) session.answerDiagnosis(d.dataset.diag);
}
['#unit', '#lesson', '#sideLinks', '#result'].forEach(id => $(id).addEventListener('click', onUnitClick));

/* ---------- finestre: introduzione, nome, schede informative ---------- */
const overlay = $('#overlay');
let overlayKind = null, introI = 0, opener = null;
function openOverlay(kind, html) {
  overlayKind = kind;
  overlay.innerHTML = html;
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  const wrap = document.querySelector('.wrap'); if (wrap) wrap.inert = true;
  const f = overlay.querySelector('input,button,a'); if (f && f.focus) f.focus({ preventScroll: true });
}
function closeOverlay() {
  overlay.hidden = true;
  overlay.innerHTML = '';
  overlayKind = null;
  document.body.style.overflow = '';
  const wrap = document.querySelector('.wrap'); if (wrap) wrap.inert = false;
  if (opener && opener.focus && document.contains(opener)) opener.focus({ preventScroll: true });
  else { const m = $('#main'); if (m && m.focus) m.focus({ preventScroll: true }); }   // senza un punto di ritorno, il fuoco riparte dalla pagina
  opener = null;
}
function openIntro() { introI = 0; openOverlay('intro', V.introHTML(0)); }
function finishIntro() {
  profile.introSeen = true; saveProfile();
  closeOverlay();
  if (!profile.nameAsked) openName(true);
}
function openName(first) { openOverlay('name', V.nameDialogHTML(profile, first)); overlay.dataset.first = first ? '1' : ''; }
function openInfo(kind) { openOverlay(kind, V.modalHTML(kind)); }

overlay.addEventListener('click', e => {
  const i = e.target.closest('[data-intro]');
  if (i) {
    if (i.dataset.intro === 'skip' || introI >= INTRO.length - 1) finishIntro();
    else { introI++; overlay.innerHTML = V.introHTML(introI); const b = overlay.querySelector('button'); if (b) b.focus({ preventScroll: true }); }
    return;
  }
  if (e.target.closest('[data-close]')) { closeOverlay(); return; }
  // toccando lo sfondo scuro si chiude la finestra (non l'introduzione al primo avvio)
  if (e.target === overlay && !overlay.querySelector('[data-intro]')) { closeOverlay(); return; }
  if (e.target.closest('[data-skipname]')) { profile.nameAsked = true; saveProfile(); closeOverlay(); render(); }
});
overlay.addEventListener('submit', e => {
  if (e.target.id !== 'nameForm') return;
  e.preventDefault();
  profile.name = cleanName(e.target.elements.name.value);
  profile.nameAsked = true;
  saveProfile();
  closeOverlay();
  render();
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape' || overlay.hidden) return;
  if (overlayKind === 'intro') finishIntro();
  else { if (overlayKind === 'name') { profile.nameAsked = true; saveProfile(); } closeOverlay(); render(); }
});
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o) { opener = o; const k = o.dataset.open; if (k === 'intro') openIntro(); else openInfo(k); return; }
  if (e.target.closest('#bPlayer')) { opener = e.target.closest('#bPlayer'); openName(false); }
});

/* ---------- lingua ---------- */
document.addEventListener('change', e => {
  if (e.target.id !== 'langSel') return;
  setLang(e.target.value);
  $('#langSel') && $('#langSel').focus();
});

/* ---------- avvio ---------- */
setLang(detect(), document.body, false);
$('#footer').innerHTML = V.footerHTML();
renderPalette();
session.start();
applyRoute();

document.addEventListener('click', e => { if (e.target.closest('[data-act="print"]')) window.print(); });
