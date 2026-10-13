// Vista 2D: collega la sessione del motore al DOM (disegno, tocco, tastiera).
// Le regole del gioco stanno in src/engine/session.js; qui ci sono solo ingressi e uscite grafiche.

import { createSession, cleanName } from '../engine/index.js';
import { levels, deriveFull } from '../content/index.js';
import { HELP } from '../content/it.js';
import { composeComps } from './layout.js';
import * as R from './render.js';
import * as V from './screens.js';
import { INTRO } from '../content/home.js';

const $ = s => document.querySelector(s);
const MQ = window.matchMedia('(max-width:919px)');
const buzz = () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* non disponibile */ } };

/* ---------- salvataggi ---------- */
const STORAGE_KEY = 'fase-e-neutro-1';
const OLD_KEY = 'lab-elettrico-1';       // versione precedente: la sessione ne migra il formato
const PROFILE_KEY = 'fase-e-neutro-profilo';
const read = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
const write = (k, o) => { try { localStorage.setItem(k, JSON.stringify(o)); } catch (e) { /* si continua senza salvare */ } };
const storage = {
  load() { return read(STORAGE_KEY) || read(OLD_KEY) || {}; },
  save(o) { write(STORAGE_KEY, o); },
};
const profile = Object.assign({ name: '', introSeen: false, nameAsked: false }, read(PROFILE_KEY) || {});
const saveProfile = () => write(PROFILE_KEY, profile);
const session = createSession({ levels, deriveFull, storage });

/* ---------- stato della sola vista ---------- */
let S = null;           // ultima istantanea della sessione
let comps = [];         // componenti con geometria per il livello corrente
let lastKey = null;
let rebuild = false;    // forza il ridisegno della scena anche se il livello non cambia
let COL = 'marrone';    // colore del filo selezionato
let SEL = null;         // morsetto selezionato
let KWH = 42.7;         // contatore, solo estetico
const ui = () => ({ mobile: MQ.matches, sel: SEL, kwh: KWH });

/* ---------- disegno ---------- */
function renderPalette() { $('#palette').innerHTML = R.paletteHTML(COL); }
function setRoomVB() { $('#room').setAttribute('viewBox', R.roomViewBox(S.level, MQ.matches)); }
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
  comps = composeComps(S.level);
  SEL = null;
  $('#lvTag').textContent = S.level.code + ' · ' + S.level.name + (S.mode === 'contatore' ? ' · dal contatore' : '') + (S.playMode === 'verifica' ? ' · prova di salto' : '');
  $('#room').innerHTML = R.roomHTML(S.level, comps);
  setRoomVB();
  setInfo('morsetto', null, false);
}

/* ---------- schermate e indirizzi ---------- */
// #/home | #/livello/<id> | #/livello/<id>/verifica
function parseRoute() {
  const m = /^#\/livello\/([^/]+)(\/verifica)?$/.exec(location.hash || '');
  if (m && levels.some(l => l.id === m[1])) return { name: 'level', id: m[1], verify: !!m[2], key: m[0] };
  return { name: 'home', key: '#/home' };
}
let route = parseRoute();
let routeApplied = null;

function renderChrome() {
  $('#appbar').innerHTML = V.appbarHTML(S, profile);
  $('#tabbar').innerHTML = V.tabbarHTML(route, S.last);
}

function renderLevelScreen() {
  const ph = S.unit ? S.unit.phase : 'build';
  const scr = $('#screen-level');
  scr.className = 'phase-' + ((ph === 'lesson' || ph === 'prediction') ? 'learn' : 'play') + (S.playMode === 'verifica' ? ' verify' : '');
  $('#unit').innerHTML = V.unitHTML(S);
  $('#modeBar').hidden = S.playMode === 'verifica' || !!S.unit && ph !== 'build' && ph !== 'done';
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
  $('#screen-home').hidden = !home;
  $('#screen-level').hidden = home;
  if (home) {
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
function addWire(a, b) {
  if (!a || !b || a === b) return;
  session.addWire(a, b, COL);
  buzz();
}

let dragging = false, moved = false, downPt = null, reselect = false;
const bench = $('#bench');
function hidePrev() { const p = $('#prev'); if (p) p.setAttribute('d', ''); }
bench.addEventListener('pointerdown', e => {
  dragging = false;
  const t = e.target.closest('[data-term]');
  if (!t) return;
  const id = t.dataset.term;
  if (SEL && SEL !== id) { const a = SEL; clearSel(); addWire(a, id); return; }
  reselect = (SEL === id);
  clearSel(); SEL = id; dragging = true; moved = false; downPt = { x: e.clientX, y: e.clientY };
  t.classList.add('sel');
});
window.addEventListener('pointermove', e => {
  if (!SEL) return;
  if (dragging && downPt && Math.hypot(e.clientX - downPt.x, e.clientY - downPt.y) > 10) moved = true;
  if (e.pointerType !== 'mouse' && !dragging) return;
  const p = $('#prev'); if (!p) return;
  const a = R.termPos(comps, SEL), q = svgPt(e);
  p.setAttribute('d', `M${a.x} ${a.y} L${q.x} ${q.y}`);
});
window.addEventListener('pointerup', e => {
  if (!dragging) return; dragging = false;
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const t = el && el.closest ? el.closest('[data-term]') : null;
  if (SEL && t && t.dataset.term !== SEL) { const a = SEL; clearSel(); addWire(a, t.dataset.term); }
  else if (SEL && t && t.dataset.term === SEL && reselect && !moved) { clearSel(); }
  else hidePrev();
});
window.addEventListener('pointercancel', () => { dragging = false; hidePrev(); });
bench.addEventListener('click', e => {
  const t = e.target.closest('[data-term]');
  if (t) return;
  const h = e.target.closest('[data-help]'); if (h) { setInfo(h.dataset.help); return; }
  const q = e.target.closest('[data-q]'); if (q) { clearSel(); session.toggleBreaker(); return; }
  const c = e.target.closest('[data-ctl]'); if (c) { clearSel(); session.toggleControl(c.dataset.ctl); return; }
  const w = e.target.closest('[data-wire]'); if (w) { clearSel(); session.removeWire(+w.dataset.wire); return; }
  clearSel();
});
bench.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
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
$('#room').addEventListener('click', e => { const c = e.target.closest('[data-ctl]'); if (c) session.toggleControl(c.dataset.ctl); });
$('#room').addEventListener('keydown', e => {
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
  if (S && S.lit) { KWH += 0.1; const k = $('#kwh'); if (k) k.textContent = R.kwhText(KWH); }
}, 700);
$('#info').addEventListener('click', e => { if (e.target.closest('[data-x]')) $('#info').classList.remove('open'); });
if (window.ResizeObserver) {
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--roomH', Math.ceil($('.roomcard').getBoundingClientRect().height) + 8 + 'px');
  }).observe($('.roomcard'));
}
const onMQ = () => { if (route.name !== 'level' || !comps.length) return; setRoomVB(); renderBench(); if (!MQ.matches) $('#info').classList.add('open'); };
if (MQ.addEventListener) MQ.addEventListener('change', onMQ);
$('#palette').addEventListener('click', e => { const b = e.target.closest('[data-col]'); if (b) { COL = b.dataset.col; renderPalette(); } });
$('#bUndo').addEventListener('click', () => session.undo());
$('#bClear').addEventListener('click', () => session.clear());
$('#bHint').addEventListener('click', showHint);
$('#bSol').addEventListener('click', () => session.toggleSolution());
$('#bCheck').addEventListener('click', () => {
  session.check();
  $('#result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$('#bFlow').addEventListener('click', () => session.toggleFlow());
$('#result').addEventListener('click', e => {
  if (e.target.id === 'bNext') { const n = S.levels[S.levelIndex + 1]; if (n) location.hash = '#/livello/' + n.id; }
});

/* ---------- scheda dell'unita' (lezione, previsione, guasto) ---------- */
$('#unit').addEventListener('click', e => {
  const u = e.target.closest('[data-unit]');
  if (u) {
    const a = u.dataset.unit;
    if (a === 'next') session.unitNext();
    else if (a === 'lesson') session.showLesson();
    else if (a === 'startFault') session.startFault();
    else if (a === 'leaveFault') session.leaveFault();
    return;
  }
  const p = e.target.closest('[data-pred]'); if (p) { session.answerPrediction(p.dataset.pred); return; }
  const d = e.target.closest('[data-diag]'); if (d) session.answerDiagnosis(d.dataset.diag);
});

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

/* ---------- avvio ---------- */
$('#footer').innerHTML = V.footerHTML();
renderPalette();
session.start();
applyRoute();
if (!profile.introSeen) openIntro();
