// Vista 2D: collega la sessione del motore al DOM (disegno, tocco, tastiera).
// Le regole del gioco stanno in src/engine/session.js; qui ci sono solo ingressi e uscite grafiche.

import { WIRE_COLORS } from '../engine/index.js';
import { createSession, cleanName, demoFrames, blankSnap } from '../engine/index.js';
import { levels, deriveFull } from '../content/index.js';
import { HELP, termName } from '../content/it.js';
import { composeComps } from './layout.js';
// Su computer i livelli con molti componenti si dispongono su due colonne, per dare scala al banco.
const colsFor = lv => (!MQ.matches && lv.engine === 2 && lv.comps.length >= 5 ? 2 : 1);
import * as R from './render.js';
import * as V from './screens.js';
import { ladderHTML, editorPanelHTML } from './ladder.js';
import { processSync } from './process.js';
import { addRung, removeRung, moveRung, addContact, setContact, removeContact, addParallel, addOut, setOut, removeOut, toCells, addressesFor } from '../engine/ladder-edit.js';
import { validateProgram } from '../engine/v2/plc.js';
import { INTRO } from '../content/home.js';
import { progText } from '../content/it.js';
import { setLang, detect, onLang } from '../i18n/index.js';
import '../i18n/ar.js';
import { createHouse, isHouseLevel, firstCircuit } from '../trilocale/page.js';
import { createProva } from '../prove/page.js';
import { isProvaLevel } from '../prove/state.js';

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
const house = createHouse(document.querySelector('#house'), {
  session, go: h => { location.hash = h; }, reduced: () => REDUCED.matches,
  // trilocale a tutto schermo: il banco si apre in un pannello accanto alla casa
  bench: open => $('#screen-level').classList.toggle('bench', !!open),
  name: () => profile.name,
});
const prova = createProva(document.querySelector('#house'), {
  session, reduced: () => REDUCED.matches,
  // prove a tutto schermo: lo schema (banco, multimetro, esito) si apre a lato; la sintesi nella finestra solita
  drawer: open => $('#screen-level').classList.toggle('drawer', !!open),
  summary: () => { opener = document.activeElement; openOverlay('summary', V.summaryHTML(S)); },
});
let comps = [];         // componenti con geometria per il livello corrente
let lastKey = null;
let rebuild = false;    // forza il ridisegno della scena anche se il livello non cambia
let COL = 'marrone';    // colore del filo selezionato
let SEL = null;         // morsetto selezionato
let KWH = 42.7;         // contatore, solo estetico
const ui = () => ({ mobile: MQ.matches, sel: SEL, kwh: KWH, probes: S && S.meter && S.meter.on ? [S.meter.a, S.meter.b] : null });

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
  LADSEL = null;
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
  const hl = isHouseLevel(S.level.id), pv = isProvaLevel(S.level);
  const ms = (hl || pv && S.playMode !== 'verifica' && prova.framed(S));     // scena a tutto schermo con la cornice
  const drawer = scr.classList.contains('drawer'), bench = scr.classList.contains('bench');
  scr.className = 'phase-' + (inLesson ? 'learn' : 'play') + (S.playMode === 'verifica' ? ' verify' : '') + (hl || pv ? ' with-house' : '') + (ms ? ' milestone' : '') + (hl ? ' trimode' : '') + (hl && bench ? ' bench' : '') + (pv && ms && drawer && !inLesson ? ' drawer' : '');
  document.body.classList.toggle('ms-mode', ms);
  $('#house').hidden = !(hl || pv);
  // prima si smonta la vista che si lascia, poi si monta l'altra (condividono il contenitore)
  if (!hl && house.isMounted()) house.unmount();
  if (!pv && prova.isMounted()) prova.unmount();
  if (hl) house.sync(S);
  if (pv) prova.sync(S);
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
  const mt = $('#bMeter'), mp = $('#meter');
  mt.hidden = !S.meter;
  mt.setAttribute('aria-pressed', String(!!(S.meter && S.meter.on)));
  mp.hidden = !(S.meter && S.meter.on);
  mp.innerHTML = S.meter && S.meter.on ? R.meterHTML(S.meter, t => termName(S.level, t)) : '';
  renderBench();
  renderLadder();
  processSync($('#process'), S);
  renderStatus();
  renderResult();
}

// Il programma del PLC del livello: in sola lettura se il programma e' del livello, modificabile se e' dell'allievo (comp.edit).
let LADSEL = null;   // elemento scelto nell'editor: { kind: 'r'|'c'|'o', r, cell, alt, out }
const ladPlc = () => S.level.comps && S.level.comps.find(c => c.type === 'plc' && (c.program || c.edit));
const ladProgram = plc => (plc.edit ? (S.programs && S.programs[plc.id]) || [] : plc.program);
function renderLadder() {
  const el = $('#ladder');
  const plc = ladPlc();
  el.hidden = !plc;
  $('#work').classList.toggle('lad-first', !!(plc && plc.edit));   // se il programma si scrive, l'editor viene prima del banco
  if (!plc) { el.innerHTML = ''; return; }
  const st = S.obs && S.obs.plc && S.obs.plc[plc.id];
  const prog = ladProgram(plc);
  const names = plc.symbols || {};
  const ed = !!plc.edit;
  const head = `<div class="ladhead"><b>${ed ? 'Scrivi il programma del PLC' : 'Programma del PLC'}</b><span>${st && st.powered ? 'in esecuzione' : 'spento'}</span></div>`;
  let html = head + `<div class="ladscroll">${ladderHTML(prog, st, names, { edit: ed, sel: LADSEL })}</div>`;
  if (ed) {
    const addrs = addressesFor(plc, plc.edit);
    // ingressi analogici: i morsetti AIk+; uscite analogiche: quelle che il processo del livello legge (non hanno morsetti)
    const aq = Object.values((S.level.process && S.level.process.actuators) || {}).map(a => a.analog && a.analog.startsWith(plc.id + '.AQ') ? Number(a.analog.slice(plc.id.length + 3)) + 1 : 0);
    const errors = validateProgram(prog, { I: addrs.inputs.length, Q: addrs.outputs.length, AI: Object.keys(plc.terms).filter(t => /^AI\d+\+$/.test(t)).length, AQ: Math.max(0, ...aq) });
    if (LADSEL && !prog[LADSEL.r]) LADSEL = null;
    html += editorPanelHTML(prog, LADSEL, names, addrs, plc.edit.ops || ['coil'], errors, e => progText(e));
    if (S.solutionShown && S.level.solutionPrograms && S.level.solutionPrograms[plc.id]) {
      html += `<div class="ladhead" style="margin-top:12px"><b>Soluzione</b></div><div class="ladscroll">${ladderHTML(S.level.solutionPrograms[plc.id], st, names)}</div>`;
    }
  }
  el.innerHTML = html;
}
// Modifica del programma: ogni azione dell'editor calcola il programma nuovo e lo consegna alla sessione.
function ladderAct(act, data) {
  const plc = ladPlc();
  if (!plc || !plc.edit) return;
  const prog = ladProgram(plc);
  const addrs = addressesFor(plc, plc.edit);
  const sel = LADSEL;
  let next = null, nsel = sel;
  const cells = sel && prog[sel.r] ? toCells(prog[sel.r].if) || [] : [];
  const cur = sel && sel.kind === 'c' && cells[sel.cell] ? cells[sel.cell].alts[sel.alt] : null;
  if (act === 'addRung') { next = addRung(prog); nsel = { kind: 'r', r: next.length - 1 }; }
  else if (!sel) return;
  else if (act === 'addContact') { next = addContact(prog, sel.r, { a: addrs.inputs[0] }); nsel = { kind: 'c', r: sel.r, cell: cells.length, alt: 0 }; }
  else if (act === 'addOut') {
    const used = new Set(prog.flatMap(r => r.do.map(x => x.a)));
    const a = addrs.outputs.find(x => !used.has(x)) || addrs.outputs[0];
    next = addOut(prog, sel.r, { op: 'coil', a }); nsel = { kind: 'o', r: sel.r, out: prog[sel.r].do.length };
  }
  else if (act === 'up' || act === 'down') { const d = act === 'up' ? -1 : 1; next = moveRung(prog, sel.r, d); nsel = { kind: 'r', r: sel.r + d }; }
  else if (act === 'delRung') { next = removeRung(prog, sel.r); nsel = null; }
  else if (cur && act === 'type') next = setContact(prog, sel.r, sel.cell, sel.alt, { a: cur.a, ...(data.v === 'not' ? { not: true } : data.v === 'rise' ? { rise: true } : {}) });
  else if (cur && act === 'addr') next = setContact(prog, sel.r, sel.cell, sel.alt, { ...cur, a: data.v });
  else if (cur && act === 'parallel') { next = addParallel(prog, sel.r, sel.cell, { a: cur.a }); nsel = { kind: 'c', r: sel.r, cell: sel.cell, alt: cells[sel.cell].alts.length }; }
  else if (cur && act === 'delContact') { next = removeContact(prog, sel.r, sel.cell, sel.alt); nsel = { kind: 'r', r: sel.r }; }
  else if (sel.kind === 'o' && prog[sel.r] && prog[sel.r].do[sel.out]) {
    const ins = prog[sel.r].do[sel.out];
    if (act === 'optype') {
      const used = new Set(prog.flatMap(r => r.do.map(x => x.id)));
      next = setOut(prog, sel.r, sel.out, data.v === 'ton' ? { op: 'ton', id: addrs.timers.find(t => !used.has(t)) || addrs.timers[0], pt: 5 }
        : data.v === 'ctu' ? { op: 'ctu', id: addrs.counters.find(t => !used.has(t)) || addrs.counters[0], pv: 3 }
        : { op: data.v, a: ins.a && /^[QM]/.test(ins.a) ? ins.a : addrs.outputs[0] });
    }
    else if (act === 'outaddr') next = setOut(prog, sel.r, sel.out, { op: ins.op, a: data.v });
    else if (act === 'outid') next = setOut(prog, sel.r, sel.out, { ...ins, id: data.v });
    else if (act === 'pt') next = setOut(prog, sel.r, sel.out, { ...ins, pt: Math.max(1, Math.min(600, Math.round(Number(data.v)) || 1)) });
    else if (act === 'pv') next = setOut(prog, sel.r, sel.out, { ...ins, pv: Math.max(1, Math.min(999, Math.round(Number(data.v)) || 1)) });
    else if (act === 'ctur') { const o = { ...ins }; if (data.v) o.r = data.v; else delete o.r; next = setOut(prog, sel.r, sel.out, o); }
    else if (act === 'delOut') { next = removeOut(prog, sel.r, sel.out); nsel = { kind: 'r', r: sel.r }; }
  }
  if (!next) return;
  LADSEL = nsel;
  session.setProgram(plc.id, next);
}
$('#ladder').addEventListener('click', e => {
  const a = e.target.closest('[data-lac]');
  if (a && !a.disabled && a.tagName !== 'SELECT') { ladderAct(a.dataset.lac, { v: a.dataset.v }); return; }
  const t = e.target.closest('[data-lad]');
  if (t) {
    const d = t.dataset;
    LADSEL = d.lad === 'r' ? { kind: 'r', r: +d.r } : d.lad === 'c' ? { kind: 'c', r: +d.r, cell: +d.cell, alt: +d.alt } : { kind: 'o', r: +d.r, out: +d.out };
    renderLadder();
  }
});
$('#ladder').addEventListener('change', e => {
  const a = e.target.closest('select[data-lac], input[data-lac]');
  if (a) ladderAct(a.dataset.lac, { v: a.value });
});
$('#ladder').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const t = e.target.closest('[data-lad]');
  if (t) { e.preventDefault(); t.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
});

function render() {
  if (!S) return;
  renderChrome();
  const home = route.name === 'home';
  const qd = route.name === 'quaderno';
  $('#screen-home').hidden = !home;
  $('#screen-quaderno').hidden = !qd;
  $('#screen-level').hidden = home || qd;
  if (home || qd) { house.unmount(); prova.unmount(); document.body.classList.remove('ms-mode'); }
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
  if (S.meter && S.meter.on) { e.preventDefault(); session.probe(id); return; }   // con il multimetro i tocchi posano i puntali, non i fili
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
  if (prevSel && prevSel !== downTerm) {
    // secondo tocco, con un morsetto gia scelto: collega anche se il dito si e spostato un po'
    // (un tocco vero sul telefono si sposta spesso di 10-20 px). Vale il morsetto dove si alza il dito,
    // altrimenti quello premuto.
    const target = (up && up !== prevSel) ? up : downTerm;
    clearSel(); addWire(prevSel, target);
  } else if (!moved) {
    // tocco: deseleziona toccando di nuovo lo stesso morsetto
    if (reselect) clearSel(); else hidePrev();
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
  const rt = e.target.closest('[data-rate]'); if (rt) { clearSel(); session.rateControl(rt.dataset.rate); return; }
  const tp = e.target.closest('[data-test]'); if (tp) { clearSel(); session.testPart(tp.dataset.test); return; }
  const rp = e.target.closest('[data-reset]'); if (rp) { clearSel(); session.resetPart(rp.dataset.reset); return; }
  const c = e.target.closest('[data-ctl]'); if (c) { clearSel(); session.toggleControl(c.dataset.ctl); return; }
  // Il "click" che il telefono genera dopo il tocco arriva quando il banco e' gia' stato ridisegnato:
  // puo' cadere sul filo appena creato e cancellarlo. Quel filo non si cancella nel primo mezzo secondo.
  const w = e.target.closest('[data-wire]'); if (w && S.meter && S.meter.on) return; if (w) { clearSel(); if (!(w.dataset.wire === lastWireId && Date.now() - lastWireAt < 600)) session.removeWire(+w.dataset.wire); return; }
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
  const rt_ = e.target.closest('[data-rate]');
  if (rt_) { e.preventDefault(); session.rateControl(rt_.dataset.rate); return; }
  const tr_ = e.target.closest('[data-test],[data-reset]');
  if (tr_) { e.preventDefault(); if (tr_.dataset.test) session.testPart(tr_.dataset.test); else session.resetPart(tr_.dataset.reset); return; }
  const t = e.target.closest('[data-term]');
  if (t) {
    e.preventDefault();
    const id = t.dataset.term;
    if (S.meter && S.meter.on) { session.probe(id); return; }   // con il multimetro anche la tastiera posa i puntali
    if (SEL && SEL !== id) { const a = SEL; clearSel(); addWire(a, id); }
    else { clearSel(); SEL = id; t.classList.add('sel'); }
    return;
  }
  const q = e.target.closest('[data-q]'); if (q) { e.preventDefault(); session.toggleBreaker(); return; }
  const h = e.target.closest('[data-help]'); if (h) { e.preventDefault(); setInfo(h.dataset.help); }
});
$('#process').addEventListener('input', e => { const t = e.target.closest('[data-tune]'); if (t) session.tune(t.dataset.tune, Number(t.value)); });
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
  if (isHouseLevel(S.level.id)) {         // trilocale: la stanza si accende nella casa; se no, l'esito nel pannello
    if (r.pass) house.passed(); else $('#result').scrollIntoView({ behavior, block: 'nearest' });
    return;
  }
  (r.pass ? (isHouseLevel(S.level.id) ? $('#house') : $('.roomcard')) : $('#result')).scrollIntoView({ behavior, block: r.pass ? 'start' : 'nearest' });
});
$('#bFlow').addEventListener('click', () => session.toggleFlow());
// miniatura del traguardo nell'intestazione del modulo: porta alla scheda della milestone
document.addEventListener('click', e => {
  const g = e.target.closest('[data-goto]');
  if (!g) return;
  const t = document.getElementById(g.dataset.goto);
  if (t) t.scrollIntoView({ behavior: REDUCED.matches ? 'auto' : 'smooth', block: 'center' });
});
$('#bDrawerClose').addEventListener('click', () => (house.isMounted() ? house.closeBench() : prova.closeDrawer()));
$('#bMeter').addEventListener('click', () => { clearSel(); session.toggleMeter(); });
$('#meter').addEventListener('click', e => {
  const md = e.target.closest('[data-meter-mode]'); if (md) { session.setMeterMode(md.dataset.meterMode); return; }
  if (e.target.closest('[data-meter-clear]')) session.clearProbes();
});
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
  const c = $('.langpick .langcode'); if (c) c.textContent = e.target.value.toUpperCase();
  $('#langSel') && $('#langSel').focus();
});

/* ---------- avvio ---------- */
setLang(detect(), document.body, false);
$('#footer').innerHTML = V.footerHTML();
renderPalette();
session.start();
applyRoute();

document.addEventListener('click', e => { if (e.target.closest('[data-act="print"]')) window.print(); });
