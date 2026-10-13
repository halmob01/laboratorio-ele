// Vista 2D: collega la sessione del motore al DOM (disegno, tocco, tastiera).
// Le regole del gioco stanno in src/engine/session.js; qui ci sono solo ingressi e uscite grafiche.

import { createSession } from '../engine/index.js';
import { levels, deriveFull } from '../content/index.js';
import { HELP } from '../content/it.js';
import { composeComps } from './layout.js';
import * as R from './render.js';

const $ = s => document.querySelector(s);
const MQ = window.matchMedia('(max-width:919px)');
const buzz = () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* non disponibile */ } };

const STORAGE_KEY = 'lab-elettrico-1';
const storage = {
  load() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (e) { return {}; } },
  save(o) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(o)); } catch (e) { /* si continua senza salvare */ } },
};
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
  $('#info').innerHTML = `<button class="x" data-x="1" aria-label="Chiudi">Chiudi</button><h3>Suggerimento ${h.index + 1} di ${h.total}</h3><p>${h.text}</p>`;
  $('#info').classList.add('open');
}

function onLevelChange() {
  comps = composeComps(S.level);
  SEL = null;
  $('#kick').textContent = 'Livello ' + S.level.n + ' di ' + S.levelCount + (S.mode === 'contatore' ? ' · dal contatore' : '');
  $('#lvName').textContent = S.level.title;
  $('#lvGoal').textContent = S.level.goal;
  $('#room').innerHTML = R.roomHTML(S.level, comps);
  setRoomVB();
  setInfo('morsetto', null, false);
}

// Ogni cambiamento della sessione ridisegna tutto: e' poco e resta semplice.
session.subscribe(s => {
  S = s;
  if (s.levelKey !== lastKey || rebuild) { lastKey = s.levelKey; rebuild = false; onLevelChange(); }
  $('#bSol').textContent = s.solutionShown ? 'Nascondi soluzione' : 'Mostra soluzione';
  $('#bSol').setAttribute('aria-pressed', String(s.solutionShown));
  $('#levels').innerHTML = R.levelsHTML(s);
  renderBench();
  renderStatus();
  renderResult();
});

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
const onMQ = () => { setRoomVB(); renderBench(); if (!MQ.matches) $('#info').classList.add('open'); };
if (MQ.addEventListener) MQ.addEventListener('change', onMQ);
$('#palette').addEventListener('click', e => { const b = e.target.closest('[data-col]'); if (b) { COL = b.dataset.col; renderPalette(); } });
$('#levels').addEventListener('click', e => { const b = e.target.closest('[data-lv]'); if (b) { rebuild = true; session.selectLevel(+b.dataset.lv); } });
$('#bUndo').addEventListener('click', () => session.undo());
$('#bClear').addEventListener('click', () => session.clear());
$('#bHint').addEventListener('click', showHint);
$('#bSol').addEventListener('click', () => session.toggleSolution());
$('#bCheck').addEventListener('click', () => {
  session.check();
  $('#result').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$('#result').addEventListener('click', e => {
  if (e.target.id === 'bNext') { rebuild = true; session.nextLevel(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
});

renderPalette();
session.start();
