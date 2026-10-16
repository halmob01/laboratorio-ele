// Cornice a tutto schermo delle prove 3D (milestone): passi, registro, comandi, domanda e finale.
// Prima i pezzi puri (src/prove/hud.js) su una partita vera della sessione, poi la pagina costruita in un browser simulato
// (senza WebGL: la scena non c'e', la prova si gioca con i comandi della cornice).

import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { provaState } from '../src/prove/state.js';
import * as H from '../src/prove/hud.js';
import { PROVE } from '../src/content/prove.js';

const ID = 'c23-appartamento-notte';
const open = () => { const s = createSession({ levels, deriveFull, initialLevel: ID }); s.start(); s.skipLesson(); return s; };

// Gioca come la pagina: ogni azione passa da remember/describe con lo stato prima e dopo.
function player() {
  const s = open();
  let mem = { ...H.newMemory(), panel: true };      // il quadro e' gia' stato trovato e aperto
  const log = [], stories = [];
  const act = (kind, id) => {
    const before = provaState(s.snapshot());
    if (kind === 'test') s.testPart(id); else s.toggleControl(id);
    const after = provaState(s.snapshot());
    mem = H.remember('appartamento', mem, { kind, id }, before, after);
    const ev = H.describe('appartamento', { kind, id }, before, after);
    if (ev) log.push(ev);
    stories.push(H.tripStory('appartamento', { kind, id }, before, after));
    return ev;
  };
  const steps = () => H.stepsOf('appartamento', provaState(s.snapshot()), s.snapshot().unit, mem);
  return { s, act, steps, log, stories, mem: () => mem };
}
const doneCount = st => st.filter(x => x.done).length;
const cur = st => st.findIndex(x => x.cur);

test('passi: il primo e\' trovare il quadro', () => {
  const s = open();
  const st = H.stepsOf('appartamento', provaState(s.snapshot()), s.snapshot().unit, H.newMemory());
  assert.equal(st.length, 7);
  assert.equal(cur(st), 0);
  assert.equal(st[0].text, 'Trova il quadro');
});

test('passi: avanzano con il metodo giusto, dalla casa al buio alla verifica', () => {
  const p = player();
  assert.equal(doneCount(p.steps()), 1);
  assert.equal(cur(p.steps()), 1);
  ['M1', 'M2', 'M3'].forEach(id => p.act('toggle', id));
  assert.equal(cur(p.steps()), 2, 'linee aperte: tocca riarmare');
  p.act('toggle', 'D');
  assert.equal(cur(p.steps()), 3, 'riarmato: una linea alla volta');
  p.act('toggle', 'M1'); p.act('toggle', 'M3');
  assert.equal(cur(p.steps()), 3, 'luce e cucina non scattano: si continua a cercare');
  const ev = p.act('toggle', 'M2');
  assert.equal(ev.trip, true);
  assert.equal(ev.text, PROVE.appartamento.log.lineOnTrip.prese);
  assert.equal(cur(p.steps()), 4, 'trovata: si risponde');
  p.s.answerDiagnosis('b');
  assert.equal(cur(p.steps()), 5, 'risposta giusta: si toglie la causa');
  p.act('toggle', 'G');
  assert.equal(cur(p.steps()), 6);
  p.act('toggle', 'D');
  assert.equal(p.s.check().pass, true);
  assert.equal(doneCount(p.steps()), 7, 'prova chiusa: tutti i passi fatti');
});

test('scatti: la dispersione si vede solo con la linea isolata; con piu\' linee il differenziale non sa da dove viene', () => {
  // riarmare senza aprire niente: scatta con tre linee chiuse
  let p = player();
  p.act('toggle', 'D');
  assert.deepEqual(p.stories.at(-1), { kind: 'multi', closed: ['luce', 'prese', 'cucina'] });
  // il metodo: tutte aperte, riarmo, luce e cucina non scattano, prese da sola si'
  p = player();
  ['M1', 'M2', 'M3', 'D', 'M2'].forEach(id => p.act('toggle', id));
  assert.deepEqual(p.stories.at(-1), { kind: 'isolated', line: 'prese', closed: ['prese'] });
  // con luce e cucina gia' chiuse la linea prese fa scattare, ma le linee chiuse sono tre: niente rivelazione
  p = player();
  ['M1', 'M2', 'M3', 'D', 'M1', 'M3', 'M2'].forEach(id => p.act('toggle', id));
  assert.equal(p.stories.at(-1).kind, 'multi');
  assert.equal(p.stories.slice(0, -1).filter(Boolean).length, 0, 'aprire e chiudere linee sane non fa scattare niente');
  // il tasto T
  p = player();
  ['M1', 'M2', 'M3', 'D'].forEach(id => p.act('toggle', id));
  p.act('test', 'D');
  assert.deepEqual(p.stories.at(-1), { kind: 'test' });
  // stufetta scollegata: niente scatti
  p = player();
  ['G', 'D'].forEach(id => p.act('toggle', id));
  assert.equal(p.stories.at(-1), null);
});

test('passi: chi risponde subito senza cercare salta avanti, ma i passi saltati restano da fare', () => {
  const p = player();
  p.s.answerDiagnosis('b');
  const st = p.steps();
  assert.equal(st[4].done, true);
  assert.equal(st[1].done, false, 'le linee non sono state aperte');
  assert.equal(cur(st), 5);
});

test('registro: riarmare con la linea colpevole chiusa scatta subito; il tasto T scatta; luce e stufetta', () => {
  const p = player();
  const L = PROVE.appartamento.log;
  let ev = p.act('toggle', 'D');
  assert.deepEqual([ev.text, ev.trip], [L.rearmTrip, true]);
  ev = p.act('toggle', 'M2');
  assert.equal(ev.text, L.lineOff.prese);
  ev = p.act('toggle', 'D');
  assert.deepEqual([ev.text, ev.good], [L.rearm, true]);
  ev = p.act('toggle', 'M2');                   // M1 e M3 chiusi: lui scatta
  assert.equal(ev.trip, true);
  p.act('toggle', 'M2'); p.act('toggle', 'D');
  ev = p.act('test', 'D');
  assert.deepEqual([ev.text, ev.trip], [L.test, true]);
  p.act('toggle', 'D');
  ev = p.act('toggle', 'G');
  assert.deepEqual([ev.text, ev.view], [L.unplug, 'soggiorno']);
  ev = p.act('toggle', 'M2');
  assert.equal(ev.view, 'soggiorno', 'la linea si accende: la camera va a guardare la stanza');
  assert.equal(ev.trip, undefined);
});

test('orologio della notte e comandi del quadro', () => {
  const c = PROVE.appartamento;
  assert.equal(H.clockText(c, 0), '22:40');
  assert.equal(H.clockText(c, 25), '23:05');
  assert.equal(H.clockText(c, 90), '0:10');
  const s = open();
  const ps = provaState(s.snapshot());
  const html = H.dockHTML(c, ps, s.snapshot().unit, {});
  assert.match(html, /data-pid="D"/);
  assert.match(html, /Scattato/);
  assert.equal((html.match(/data-pact="toggle"/g) || []).length, 4, 'differenziale e tre linee, la stufetta non ancora');
  assert.match(html, /data-pui="answer"/);
  s.answerDiagnosis('b');
  const html2 = H.dockHTML(c, provaState(s.snapshot()), s.snapshot().unit, {});
  assert.match(html2, /data-pid="G"/, 'dopo la diagnosi giusta si puo\' scollegare da qui');
  assert.match(html2, /data-pui="check"/);
});

/* ---------- pagina ---------- */
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const windows = [];
after(() => windows.forEach(w => w.close()));
function page(hash) {
  const errors = [];
  const dom = new JSDOM(html, {
    runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/' + hash,
    beforeParse(w) {
      w.matchMedia = q => ({ matches: /reduce/.test(q), addEventListener() {}, removeEventListener() {} });   // movimento ridotto: niente attese
      w.scrollTo = () => {};
      w.Element.prototype.scrollIntoView = () => {};
      w.addEventListener('error', e => errors.push(e.error || e.message));
      w.localStorage.setItem('fase-e-neutro-profilo', JSON.stringify({ name: '', introSeen: true, nameAsked: true }));
    },
  });
  windows.push(dom.window);
  return { w: dom.window, d: dom.window.document, errors };
}
const click = (w, el) => el.dispatchEvent(new w.MouseEvent('click', { bubbles: true, cancelable: true }));
const wait = ms => new Promise(r => setTimeout(r, ms));

test('pagina: la prova si apre a tutto schermo e si gioca dalla cornice fino al finale', async () => {
  const { w, d, errors } = page('#/livello/' + ID);
  const $ = s => d.querySelector(s);
  assert.ok($('#screen-level').classList.contains('milestone'));
  assert.ok(d.body.classList.contains('ms-mode'));
  assert.ok($('#pIntro'), 'ingresso');
  assert.match($('#pIntro').textContent, /Via Roma 7/, 'la chiamata');
  assert.ok($('#pIntro [data-pui="enter"]'));
  click(w, $('[data-pui="skipIntro"]'));
  click(w, $('[data-unit="skip"]'));
  await wait(400);
  assert.equal($('#house').dataset.act, 'play', 'senza scena 3D si arriva subito ai comandi');
  assert.match($('#pTop').textContent, /Una notte senza luce/);
  assert.equal(d.querySelectorAll('#pSteps .psteps li').length, 7);
  click(w, $('[data-pui="log"]'));
  assert.equal($('#pLog').hidden, false);
  assert.match($('#pLog').textContent, /Il differenziale è scattato/);
  const lever = id => $(`#pDock [data-pact="toggle"][data-pid="${id}"]`);
  ['M1', 'M2', 'M3', 'D', 'M1', 'M3', 'M2'].forEach(id => click(w, lever(id)));
  assert.match($('#pLog').textContent, /Chiusa la linea prese: il differenziale scatta/);
  assert.equal(d.querySelectorAll('#pSteps .psteps li.done').length, 4);
  assert.match($('#pSub').textContent, /Tac\./, 'lo scatto si racconta nei sottotitoli');
  click(w, $('[data-pui="answer"]'));
  assert.equal($('#pSheet').hidden, false);
  click(w, $('[data-pdiag="b"]'));
  assert.match($('#pSheet').textContent, /Giusto/);
  click(w, $('[data-pui="closeSheet"]'));
  assert.equal($('#pSheet').hidden, true);
  click(w, lever('G'));
  click(w, lever('D'));
  click(w, $('[data-pui="check"]'));
  await wait(50);
  assert.equal($('#pSheet').hidden, false, 'finale');
  assert.match($('#pSheet').textContent, /Prova superata/);
  assert.match($('#pSheet').textContent, /Rapporto d’intervento/);
  assert.match($('#pSheet').textContent, /Via Roma 7/);
  click(w, $('[data-pui="schema"]'));
  assert.ok($('#screen-level').classList.contains('drawer'), 'lo schema si apre a lato');
  click(w, $('#bDrawerClose'));
  assert.ok(!$('#screen-level').classList.contains('drawer'), 'e si chiude dal suo pulsante');
  assert.deepEqual(errors, []);
  w.location.hash = '#/home';
  await wait(20);
  assert.ok(!d.body.classList.contains('ms-mode'), 'tornando alla mappa la pagina torna normale');
});

/* ---------- officina (Modulo 3): collaudo del nastro ---------- */
const OFC = 'c24-officina';
function officina() {
  const s = createSession({ levels, deriveFull, initialLevel: OFC }); s.start(); s.skipLesson();
  let mem = H.newMemory();
  const kinds = [];
  const ps = () => provaState(s.snapshot());
  const step = (action, run) => { const b = ps(); run(); const a = ps(); H.officinaEvents(action, b, a).forEach(e => kinds.push(e.kind)); mem = H.remember('officina', mem, action, b, a); };
  const tick = n => { for (let i = 0; i < n; i++) step(null, () => s.tick(0.5)); };
  const press = id => { step({ kind: 'press', id }, () => s.press(id)); step({ kind: 'release', id }, () => s.release(id)); };
  const steps = () => H.stepsOf('officina', ps(), s.snapshot().unit, mem);
  return { s, ps, step, tick, press, steps, kinds, mem: () => mem, setMem: m => (mem = m) };
}

test('officina: le cinque prove si riconoscono da quello che fa il nastro; il sovraccarico non passa', () => {
  const o = officina();
  assert.equal(o.steps().length, 8);
  assert.equal(cur(o.steps()), 0, 'si comincia dalla marcia');
  o.press('SB1');
  assert.equal(o.ps().motor, 'fwd');
  o.tick(16);                                   // il pacco arriva in fondo: il finecorsa ferma il nastro
  o.step({ kind: 'rewind' }, () => o.s.rewind());
  o.press('SB1'); o.press('SB0');
  o.step({ kind: 'rewind' }, () => o.s.rewind());
  o.press('SB1'); o.step({ kind: 'toggle', id: 'SBE' }, () => o.s.toggleControl('SBE'));
  o.step({ kind: 'toggle', id: 'SBE' }, () => o.s.toggleControl('SBE'));
  o.step({ kind: 'rewind' }, () => o.s.rewind());
  o.press('SB1'); o.step({ kind: 'overload' }, () => o.s.setOverload(true));
  o.tick(8);
  assert.deepEqual(o.kinds.filter(k => ['marcia', 'fine', 'arresto', 'fungo', 'tripKo'].includes(k)), ['marcia', 'fine', 'marcia', 'arresto', 'marcia', 'fungo', 'marcia', 'tripKo']);
  assert.equal(o.ps().motor, 'fwd', 'il termico e\' scattato ma il nastro gira: il guasto');
  assert.deepEqual(o.mem().tests, { marcia: 'ok', fine: 'ok', arresto: 'ok', emergenza: 'ok', sovraccarico: 'ko' });
  const st = o.steps();
  assert.equal(st.filter(x => x.done).length, 4);
  assert.equal(st[4].ko, true, 'il sovraccarico e\' segnato in rosso');
  assert.equal(cur(st), 5, 'tocca trovare il guasto');
  assert.equal(H.describe('officina', null, { ...o.ps(), thermal: { tripped: false, heat: 0.9 } }, o.ps()).text, PROVE.officina.log.tripKo);
});

test('officina: correzione a salvamotore aperto, ricollaudo e verifica', () => {
  const o = officina();
  o.press('SB1'); o.step({ kind: 'overload' }, () => o.s.setOverload(true)); o.tick(8);
  o.s.answerDiagnosis('a');
  o.step({ kind: 'toggle', id: 'SBE' }, () => o.s.toggleControl('SBE'));
  o.step({ kind: 'toggle', id: 'QM' }, () => o.s.toggleControl('QM'));
  assert.equal(o.ps().qm, false);
  assert.equal(H.officinaFixed(o.s.snapshot().wires), false);
  const bad = o.s.snapshot().wires.find(w => [w.a, w.b].sort().join('~') === 'QM.2~SBE.1');
  o.s.removeWire(bad.id); o.s.addWire('QM.2', 'FR.95', 'rosso'); o.s.addWire('FR.96', 'SBE.1', 'rosso');
  assert.equal(H.officinaFixed(o.s.snapshot().wires), true);
  o.setMem(H.rememberFixed(o.mem(), true));
  assert.deepEqual(o.mem().tests, {}, 'corretto: le prove si rifanno');
  assert.equal(cur(o.steps()), 7, 'ricollaudo e verifica');
  // cambiando i fili il motore riparte dai comandi iniziali: fungo sbloccato, termico armato; resta da richiudere il salvamotore
  assert.equal(o.ps().emergency, false);
  o.step({ kind: 'toggle', id: 'QM' }, () => o.s.toggleControl('QM'));
  o.step({ kind: 'overload' }, () => o.s.setOverload(false));
  o.step({ kind: 'rewind' }, () => o.s.rewind());
  o.press('SB1'); o.step({ kind: 'overload' }, () => o.s.setOverload(true)); o.tick(8);
  assert.equal(o.kinds.at(-1), 'tripOk', 'ora il termico ferma il nastro');
  assert.equal(o.ps().motor, 'off');
  assert.equal(o.mem().tests.sovraccarico, 'ok');
  o.step({ kind: 'overload' }, () => o.s.setOverload(false)); o.step({ kind: 'reset' }, () => o.s.resetPart('FR'));
  const r = o.s.check();
  assert.equal(r.pass, true);
  assert.equal(o.s.snapshot().unit.phase, 'done');
  assert.equal(o.steps().filter(x => x.done).length, 8);
  const v = H.verbaleHTML(PROVE.officina, 3, true, '6:40', '7:00', 'Sara');
  assert.match(v, /Verbale di collaudo/);
  assert.equal((v.match(/Superata/g) || []).length, 5);
  assert.match(v, /Sara/);
});

test('officina: ogni filo del banco ha il suo percorso nella scena, acceso secondo lo stato vero', async () => {
  const { officinaWires, anchorOf } = await import('../src/scene3d/officina-wires.js');
  const lv = levels.find(l => l.id === OFC);
  const all = lv.solution.concat(lv.unit.fault.wires).map(([a, b, c], i) => ({ id: i + 1, a, b, c }));
  all.forEach(w => { assert.ok(anchorOf(w.a), w.a); assert.ok(anchorOf(w.b), w.b); });
  const o = officina();
  o.press('SB1');
  const snap = o.s.snapshot();
  const list = officinaWires(snap.wires, snap.flow);
  assert.equal(list.length, snap.wires.length);
  list.forEach(w => assert.ok(w.pts.length >= 4 && w.pts.every(p => p.length === 3 && p.every(Number.isFinite)), w.id));
  assert.ok(list.some(w => w.live && w.current), 'in marcia: fili in tensione e percorsi da corrente');
  const bypass = list.find(w => /QM\.2-SBE\.1/.test(w.id));
  assert.ok(bypass && bypass.live, 'il filo che scavalca il termico e\' in tensione');
});

test('pagina: l’officina a tutto schermo: scheda di collaudo, pulsantiera, il nastro che non si ferma, lavoro fuori tensione', async () => {
  const { w, d, errors } = page('#/livello/' + OFC);
  const $ = q => d.querySelector(q);
  assert.ok($('#screen-level').classList.contains('milestone'));
  assert.match($('#pIntro').textContent, /Scheda di collaudo/);
  assert.match($('#pIntro').textContent, /Capannone Ferri/);
  click(w, $('[data-pui="skipIntro"]'));
  click(w, $('[data-unit="skip"]'));
  await wait(400);
  assert.equal($('#house').dataset.act, 'play');
  assert.match($('#pTop').textContent, /L’officina/);
  assert.ok(!$('#pTop [data-pui="torch"]'), 'niente torcia nell’officina');
  assert.equal(d.querySelectorAll('#pSteps .psteps li').length, 8);
  assert.ok($('#pDock [data-phold="SB1"]') && $('#pDock [data-phold="SB0"]') && $('#pDock [data-pid="SBE"]'));
  // i tasti si devono poter toccare: nessuno stile del banco (per esempio .stop, che non riceve tocchi) li deve colpire
  ['SB1', 'SB0'].forEach(id => assert.notEqual(w.getComputedStyle($(`#pDock [data-phold="${id}"]`)).pointerEvents, 'none', id));
  click(w, $('#pDock [data-phold="SB1"]'));               // da tastiera (click senza puntatore): premi e rilascia
  await wait(20);
  assert.ok($('#pDock .pst-lamp.on'), 'la spia si accende');
  click(w, $('[data-pui="log"]'));
  assert.match($('#pLog').textContent, /Premuto Marcia: il nastro parte/, 'la prima azione dopo la lezione si registra');
  assert.ok(d.querySelector('#pSteps li.done'), 'la marcia e\' spuntata');
  click(w, $('[data-pui="log"]'));
  click(w, $('#pDock [data-pui="overload"]'));
  await wait(3800);                                        // l'orologio della pagina: il termico scatta dopo 3 s
  assert.match($('#pSub').textContent, /Il nastro non si ferma/);
  assert.ok($('#pDock .pst-mush.alarm'), 'il fungo pulsa');
  assert.ok(d.querySelector('#pSteps li.ko'), 'sovraccarico non superato');
  click(w, $('#pDock [data-pid="SBE"]'));
  await wait(20);
  assert.ok(!$('#pDock .pst-mush.alarm'));
  click(w, $('[data-pui="log"]'));
  assert.match($('#pLog').textContent, /il nastro continua/);
  click(w, $('[data-pui="answer"]'));
  click(w, $('[data-pdiag="a"]'));
  assert.match($('#pSheet').textContent, /Giusto/);
  click(w, $('[data-pui="closeSheet"]'));
  click(w, $('[data-pui="schema"]'));
  assert.ok(!$('#screen-level').classList.contains('drawer'), 'con il salvamotore chiuso il banco non si apre');
  assert.match($('#pSub').textContent, /Apri il salvamotore/);
  click(w, $('#pDock [data-pact="toggle"][data-pid="QM"]'));
  assert.match($('#pDock').textContent, /Lavori in corso/);
  click(w, $('[data-pui="schema"]'));
  assert.ok($('#screen-level').classList.contains('drawer'), 'a salvamotore aperto il banco si apre a lato');
  assert.deepEqual(errors, []);
});

/* ---------- nastro automatico (Modulo 4): collaudo del programma ---------- */
const AUTO = 'c46-nastro-automatico';
function automatico() {
  const s = createSession({ levels, deriveFull, initialLevel: AUTO }); s.start(); s.skipLesson();
  let mem = H.newMemory();
  const kinds = [];
  const ps = () => provaState(s.snapshot());
  const step = (action, run) => { const b = ps(); run(); const a = ps(); H.automaticoEvents(action, b, a).forEach(e => kinds.push(e.kind)); mem = H.remember('automatico', mem, action, b, a); };
  const tick = n => { for (let i = 0; i < n; i++) step(null, () => s.tick(0.5)); };
  const press = id => { step({ kind: 'press', id }, () => s.press(id)); step({ kind: 'release', id }, () => s.release(id)); };
  const steps = () => H.stepsOf('automatico', ps(), s.snapshot().unit, mem);
  return { s, ps, step, tick, press, steps, kinds, mem: () => mem, setMem: m => (mem = m) };
}

test('nastro automatico: il lotto da 4 riesce, il lotto nuovo no; arresto ed emergenza', () => {
  const o = automatico();
  assert.equal(o.steps().length, 8);
  assert.equal(o.ps().scene, 'automatico');
  assert.equal(o.ps().preset, 4);
  o.press('SB1');
  assert.equal(o.ps().motor, 'fwd');
  o.tick(28);                                   // quattro pacchi davanti alla fotocellula: il nastro si ferma
  assert.equal(o.ps().count, 4);
  assert.equal(o.ps().lamp, true);
  o.press('SB1');                               // il lotto nuovo non parte: il contatore resta pieno
  assert.equal(o.ps().motor, 'off');
  assert.deepEqual(o.kinds.filter(k => ['marcia', 'lotto', 'nuovo', 'nuovoKo'].includes(k)), ['marcia', 'lotto', 'nuovoKo']);
  assert.deepEqual(o.mem().tests, { marcia: 'ok', lotto: 'ok', nuovo: 'ko' });
  const st = o.steps();
  assert.equal(st[2].ko, true, 'lotto nuovo in rosso');
  assert.equal(cur(st), 3, 'si va avanti con l’arresto');
  assert.equal(H.automaticoFixed(o.s.snapshot().programs), false);
});

test('nastro automatico: correzione del programma a nastro fermo, ricollaudo e verifica', async () => {
  const { LEVELS_V2 } = await import('../src/content/levels-v2.js');
  const sol = LEVELS_V2.find(l => l.id === AUTO).solutionPrograms.PLC;
  const o = automatico();
  o.press('SB1'); o.tick(28); o.press('SB1');
  o.s.answerDiagnosis('b');
  o.s.setProgram('PLC', sol);
  assert.equal(H.automaticoFixed(o.s.snapshot().programs), true);
  o.setMem(H.rememberFixed(o.mem(), true));
  assert.equal(cur(o.steps()), 7, 'ricollaudo e verifica');
  o.press('SB1'); o.tick(28); o.press('SB1');
  assert.equal(o.ps().motor, 'fwd', 'ora il lotto nuovo parte');
  assert.equal(o.kinds.at(-1), 'nuovo');
  o.press('SB0');
  o.press('SB1'); o.step({ kind: 'toggle', id: 'SBE' }, () => o.s.toggleControl('SBE'));
  o.step({ kind: 'toggle', id: 'SBE' }, () => o.s.toggleControl('SBE'));
  assert.deepEqual(o.mem().tests, { marcia: 'ok', lotto: 'ok', nuovo: 'ok', arresto: 'ok', emergenza: 'ok' });
  const r = o.s.check();
  assert.equal(r.pass, true, JSON.stringify(r.checks.filter(c => !c.ok)));
  assert.equal(o.s.snapshot().unit.phase, 'done');
  const v = H.verbaleHTML(PROVE.automatico, 3, true, '13:30', '14:00', 'Sara');
  assert.match(v, /Modulo 4 completato/);
  assert.equal((v.match(/Superata/g) || []).length, 5);
});

test('nastro automatico: ogni filo del banco ha il suo percorso nella scena', async () => {
  const { officinaWires, anchorOf } = await import('../src/scene3d/officina-wires.js');
  const lv = levels.find(l => l.id === AUTO);
  lv.solution.forEach(([a, b]) => { assert.ok(anchorOf(a), a); assert.ok(anchorOf(b), b); });
  const o = automatico();
  o.press('SB1');
  const snap = o.s.snapshot();
  const list = officinaWires(snap.wires, snap.flow);
  assert.equal(list.length, snap.wires.length);
  assert.ok(list.some(w => w.live && w.current), 'in marcia: fili in tensione e percorsi da corrente');
});

test('pagina: il nastro automatico a tutto schermo: ordine di modifica, conteggio, il lotto che non riparte, banco a nastro fermo', async () => {
  const { w, d, errors } = page('#/livello/' + AUTO);
  const $ = q => d.querySelector(q);
  assert.ok($('#screen-level').classList.contains('milestone'));
  assert.match($('#pIntro').textContent, /Ordine di modifica/);
  click(w, $('[data-pui="skipIntro"]'));
  click(w, $('[data-unit="skip"]'));
  await wait(400);
  assert.equal($('#house').dataset.act, 'play');
  assert.match($('#pTop').textContent, /Il cambio formato/);
  assert.equal(d.querySelectorAll('#pSteps .psteps li').length, 8);
  assert.match($('#pDock .pst-count').textContent, /0\s*\/\s*4/);
  assert.ok(!$('#pDock [data-pui="overload"]'), 'niente leva del sovraccarico');
  click(w, $('#pDock [data-phold="SB1"]'));
  await wait(20);
  click(w, $('[data-pui="answer"]'));
  click(w, $('[data-pdiag="b"]'));
  assert.match($('#pSheet').textContent, /Giusto/);
  click(w, $('[data-pui="closeSheet"]'));
  click(w, $('[data-pui="schema"]'));
  assert.ok(!$('#screen-level').classList.contains('drawer'), 'con il nastro in marcia il banco non si apre');
  assert.match($('#pSub').textContent, /Ferma il nastro/);
  click(w, $('#pDock [data-phold="SB0"]'));
  await wait(20);
  click(w, $('[data-pui="schema"]'));
  assert.ok($('#screen-level').classList.contains('drawer'), 'a nastro fermo il banco si apre a lato');
  assert.deepEqual(errors, []);
});

/* ---------- schede delle milestone nella mappa ---------- */
function home(storage) {
  const errors = [];
  const dom = new JSDOM(html, {
    runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/',
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.scrollTo = () => {};
      w.addEventListener('error', e => errors.push(e.error || e.message));
      w.localStorage.setItem('fase-e-neutro-profilo', JSON.stringify({ name: '', introSeen: true, nameAsked: true }));
      if (storage) w.localStorage.setItem('fase-e-neutro-1', JSON.stringify(storage));
    },
  });
  windows.push(dom.window);
  return { w: dom.window, d: dom.window.document, errors };
}

test('mappa: ogni modulo chiude con la scheda della sua milestone, preceduta dal capolinea del binario', () => {
  const { d, errors } = home();
  const cards = [...d.querySelectorAll('.msc')];
  assert.deepEqual(cards.map(c => c.id), ['ms-trilocale', 'ms-c23-appartamento-notte', 'ms-c24-officina', 'ms-c46-nastro-automatico', 'ms-casa', 'ms-fabbrica']);
  cards.forEach(c => assert.doesNotMatch(c.textContent, /Milestone/));
  assert.equal(d.querySelectorAll('.terminus').length, 6);
  // il binario delle Fondamenta finisce al capolinea del trilocale
  const fond = d.querySelector('section.module[aria-label*="Fondamenta"]');
  assert.ok(fond.querySelector('.rail + .terminus + #ms-trilocale'), 'Fondamenta: binario, capolinea, trilocale');
  assert.ok(fond.querySelector('.msteaser[data-goto="ms-trilocale"]'));
  assert.ok(!d.querySelector('.tricard'), 'le vecchie schede non ci sono piu');
  // le quattro con una scena vera mostrano la foto, le altre il disegno tecnico
  assert.deepEqual([...d.querySelectorAll('.msc:not(.soon) img')].map(i => i.getAttribute('src')),
    ['assets/milestone/trilocale.jpg', 'assets/milestone/appartamento.jpg', 'assets/milestone/officina.jpg', 'assets/milestone/automatico.jpg']);
  assert.equal(d.querySelectorAll('.msc.soon svg').length, 2);
  assert.equal(d.querySelectorAll('.msc.soon a').length, 0, 'in arrivo: niente pulsante');
  assert.deepEqual(errors, []);
});

test('mappa: la scheda porta al livello giusto e mostra cosa si usa e quanto del modulo e fatto', () => {
  const { d } = home();
  const app = d.querySelector('#ms-c23-appartamento-notte');
  assert.equal(app.querySelector('a.msc-cta').getAttribute('href'), '#/livello/c23-appartamento-notte');
  assert.match(app.textContent, /Entra nell’appartamento/);
  assert.match(app.textContent, /Multimetro/);
  assert.match(app.textContent, /Livelli del modulo: 0 di 9/);
  assert.equal(d.querySelector('#ms-trilocale a.msc-cta').getAttribute('href'), '#/modulo/1');
  assert.equal(d.querySelectorAll('#ms-trilocale .msc-rooms li').length, 3);
  assert.ok(d.querySelector('[data-goto="ms-c23-appartamento-notte"]'), 'miniatura del traguardo nell\'intestazione del modulo');
});

test('mappa: stati della milestone: completato con le stelle, in corso, trilocale con le stanze accese', () => {
  const { d } = home({ v: 2, stars: { 'c24-officina': 3, 'c23-appartamento-notte': 1, 't01-bagno': 3, 't02-camera': 1 } });
  const off = d.querySelector('#ms-c24-officina');
  assert.equal(off.dataset.st, 'completato');
  assert.equal(off.querySelectorAll('.starrow svg').length, 3);
  assert.match(off.textContent, /Rifai la prova/);
  assert.match(off.textContent, /Completato/);
  const app = d.querySelector('#ms-c23-appartamento-notte');
  assert.equal(app.dataset.st, 'in-corso', 'con meno di tre stelle il livello resta in corso, come tutti gli altri');
  assert.match(app.querySelector('a.msc-cta').textContent, /Continua/);
  const tri = d.querySelector('#ms-trilocale');
  assert.equal(tri.dataset.st, 'in-corso');
  assert.deepEqual([...tri.querySelectorAll('.msc-rooms li')].map(li => li.classList.contains('lit')), [true, true, false]);
  assert.match(tri.textContent, /Continua nel trilocale/);
  assert.match(tri.textContent, /Circuiti: 2 di 3/);
});
