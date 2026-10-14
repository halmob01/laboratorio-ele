// Prove dei moduli (P3): impianto gia' cablato, traguardi, regole di sicurezza, verifica.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createSession } from '../src/engine/index.js';
import { levels, deriveFull } from '../src/content/index.js';
import { stepsState } from '../src/engine/index.js';

const open = id => { const s = createSession({ levels, deriveFull, initialLevel: id }); s.start(); s.skipLesson(); return s; };
const done = s => s.snapshot().prova.goals.map(g => g.done);
const tick = (s, n) => { for (let i = 0; i < n; i++) s.tick(0.5); };
const press = (s, id) => { s.press(id); s.release(id); };
const probe = (s, a, b) => { s.toggleMeter(); s.probe(a); s.probe(b); };
const proveLevels = levels.filter(l => l.prova);

test('le prove sono due, hanno i fili gia\' posati e un\'unita\' con i passi sui traguardi', () => {
  assert.deepEqual(proveLevels.map(l => l.id), ['p01-notte', 'p02-officina']);
  proveLevels.forEach(l => {
    assert.ok(l.given.length > 10);
    const ids = l.prova.goals.map(g => g.id);
    assert.equal(new Set(ids).size, ids.length);
    l.prova.goals.forEach(g => { if (g.after) assert.ok(ids.includes(g.after), l.id + ' ' + g.id); });
    const goalSteps = l.unit.steps.filter(x => x.kind === 'goal').map(x => x.id);
    // ogni passo punta a un traguardo che esiste, e ogni traguardo ha il suo passo (salvo quelli senza passo propri)
    goalSteps.forEach(id => assert.ok(ids.includes(id), l.id + ' passo ' + id));
    assert.equal(l.unit.steps[l.unit.steps.length - 1].kind, 'verify');
    assert.ok(l.unit.summary.length >= 3);
    assert.equal(l.unit.lesson.pages[l.unit.lesson.pages.length - 1].type, 'sintesi');
    assert.ok(l.hints.length >= 2);
  });
});

test('i fili non si possono modificare e "Annulla tutto" li lascia', () => {
  proveLevels.forEach(l => {
    const s = open(l.id);
    const n = s.snapshot().wires.length;
    assert.equal(n, l.given.length);
    s.addWire('Q.F', 'Q.N', 'marrone');
    s.removeWire(s.snapshot().wires[0].id);
    s.undo(); s.clear();
    assert.equal(s.snapshot().wires.length, n);
  });
});

test('notte: parte al buio con il differenziale scattato', () => {
  const s = open('p01-notte');
  const o = s.snapshot().obs;
  assert.deepEqual(o.tripped, ['D']);
  assert.ok(Object.values(o.loads).every(v => v === 'off'));
  assert.deepEqual(done(s), [false, false, false, false, false]);
});

test('notte: il percorso giusto passa la prova con tre stelle', () => {
  const s = open('p01-notte');
  ['M1', 'M2', 'M3'].forEach(m => s.toggleControl(m));
  s.toggleControl('D');
  s.toggleControl('M1'); s.toggleControl('M2');
  assert.equal(s.snapshot().obs.loads.L1, 'on');
  s.toggleControl('M3');
  assert.deepEqual(s.snapshot().obs.tripped, ['D']);            // la cucina fa scattare il differenziale
  s.toggleControl('M3');
  probe(s, 'M3.2', 'M3.N2');
  s.toggleControl('SL'); s.toggleControl('D'); s.toggleControl('M3');
  const o = s.snapshot().obs;
  assert.equal(o.loads.FOR, 'on'); assert.equal(o.loads.LAV, 'off'); assert.deepEqual(o.tripped, []);
  const r = s.check();
  assert.equal(r.pass, true); assert.equal(r.stars, 3);
});

test('notte: staccare una spina con la linea chiusa toglie la stella di sicurezza', () => {
  const s = open('p01-notte');
  ['M1', 'M2', 'M3'].forEach(m => s.toggleControl(m));
  s.toggleControl('D'); s.toggleControl('M1'); s.toggleControl('M2'); s.toggleControl('M3');
  s.toggleControl('M3'); probe(s, 'M3.2', 'M3.N2');
  s.toggleControl('M3');                                        // la richiude, poi stacca la spina sotto tensione
  s.toggleControl('D');
  s.toggleControl('SL');
  s.toggleControl('M3'); s.toggleControl('D'); s.toggleControl('M3');   // poi rimette a posto in modo corretto
  assert.equal(s.snapshot().prova.violations.length, 1);
  const r = s.check();
  assert.equal(r.work.ok, true); assert.equal(r.safe.ok, false); assert.equal(r.pass, false); assert.equal(r.stars, 2);
  s.resetProva();
  assert.equal(s.snapshot().prova.violations.length, 0);
  assert.deepEqual(done(s), [false, false, false, false, false]);
  assert.deepEqual(s.snapshot().obs.tripped, ['D']);
});

test('notte: scollegare l\'apparecchio sbagliato non basta, e senza misura la prova non passa', () => {
  const s = open('p01-notte');
  ['M1', 'M2', 'M3'].forEach(m => s.toggleControl(m));
  s.toggleControl('D'); s.toggleControl('M1'); s.toggleControl('M2'); s.toggleControl('M3');
  s.toggleControl('M3');
  s.toggleControl('SF'); s.toggleControl('D'); s.toggleControl('M3');   // stacca il forno: il guasto e' nella lavatrice
  assert.deepEqual(s.snapshot().obs.tripped, ['D']);
  assert.equal(s.check().pass, false);
  s.toggleControl('M3'); s.toggleControl('SF'); s.toggleControl('SL'); s.toggleControl('D'); s.toggleControl('M3');
  assert.equal(s.snapshot().obs.loads.FOR, 'on');
  const r = s.check();
  assert.equal(r.work.ok, false);                                // manca la misura dei 0 V
  assert.equal(r.pass, false);
});

test('officina: parte ferma e il collaudo passa percorrendo i sei traguardi', () => {
  const s = open('p02-officina');
  assert.equal(s.snapshot().obs.motors.M, 'off');
  assert.ok(done(s).every(x => !x));
  press(s, 'SB1'); tick(s, 2); press(s, 'SB0');
  assert.deepEqual(done(s), [true, true, false, false, false, false]);
  press(s, 'SB1'); s.setOverload(true); tick(s, 8);
  assert.deepEqual(s.snapshot().obs.tripped, ['FR']);
  s.setOverload(false); s.resetPart('FR');
  press(s, 'SB1'); tick(s, 30);
  assert.equal(s.snapshot().obs.machine.atEnd, true);
  assert.ok(done(s).every(Boolean));
  const r = s.check();
  assert.equal(r.pass, true); assert.equal(r.stars, 3);
});

test('officina: riarmare il termico con il sovraccarico attivo e\' una violazione', () => {
  const s = open('p02-officina');
  press(s, 'SB1'); tick(s, 2); press(s, 'SB0');
  press(s, 'SB1'); s.setOverload(true); tick(s, 8);
  s.resetPart('FR');
  assert.equal(s.snapshot().prova.violations[0].code, 'safe.provaOverload');
  s.setOverload(false); s.resetPart('FR'); press(s, 'SB1'); tick(s, 30);
  const r = s.check();
  assert.equal(r.work.ok, true); assert.equal(r.safe.ok, false); assert.equal(r.pass, false);
});

test('i traguardi non si segnano fuori ordine', () => {
  const s = open('p02-officina');
  press(s, 'SB1'); tick(s, 30);                                  // a fine corsa senza aver provato il resto
  const d = done(s);
  assert.equal(d[0], true); assert.equal(d[5], false);
});

test('prove: i passi dell\'unita\' seguono i traguardi', () => {
  const s = open('p01-notte');
  const L = levels.find(l => l.id === 'p01-notte');
  let st = stepsState(L.unit.steps, [], { goals: { isola: true, riarma: true } });
  assert.deepEqual(st.done.slice(0, 3), [true, true, false]);
  assert.ok(s.snapshot().steps.list.length === L.unit.steps.length);
});

test('prove: il lavoro non si salva (si riparte dalla scena)', () => {
  const store = {};
  const mem = { load: () => store.p || null, save: p => { store.p = p; }, loadWork: () => store.w || null, saveWork: w => { store.w = w; } };
  const s = createSession({ levels, deriveFull, initialLevel: 'p02-officina', storage: mem });
  s.start(); s.skipLesson();
  press(s, 'SB1');
  assert.ok(!store.w || !store.w.w['p02-officina|quadro']);
});
