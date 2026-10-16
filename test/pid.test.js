import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pidStep, newPid } from '../src/engine/v2/pid.js';

// Impianto del primo ordine: y' = (K·u − y) / tau (u 0-100 %, y in unità di processo).
function firstOrder({ K = 1, tau = 20 } = {}) {
  let y = 0;
  return { get y() { return y; }, step(u, dt) { y += (K * u - y) * dt / tau; } };
}
// Due costanti di tempo in serie (come il forno).
function secondOrder({ K = 1, t1 = 30, t2 = 10 } = {}) {
  let a = 0, y = 0;
  return { get y() { return y; }, step(u, dt) { a += (K * u - a) * dt / t1; y += (a - y) * dt / t2; } };
}

function run(plant, pid, seconds, dt = 0.5, spAt = () => pid.sp) {
  let st = newPid();
  const rows = [];
  for (let t = 0; t < seconds; t += dt) {
    const r = pidStep(st, { ...pid, sp: spAt(t), pv: plant.y, dt });
    st = r.state;
    plant.step(r.u, dt);
    rows.push({ t, y: plant.y, u: r.u, i: st.i });
  }
  return rows;
}

const last = rows => rows[rows.length - 1];
const maxY = rows => Math.max(...rows.map(r => r.y));

test('solo proporzionale: resta un errore a regime', () => {
  const rows = run(firstOrder(), { sp: 50, kp: 2, ti: 0, td: 0 }, 300);
  const y = last(rows).y;
  // a regime y = K·kp·e e e = sp − y -> y = sp·kp/(1+kp) = 33,3
  assert.ok(Math.abs(y - 100 / 3) < 0.5, 'y=' + y);
});

test('PI: arriva al setpoint senza errore a regime', () => {
  const rows = run(firstOrder(), { sp: 50, kp: 2, ti: 20, td: 0 }, 400);
  assert.ok(Math.abs(last(rows).y - 50) < 0.2, 'y=' + last(rows).y);
});

test('PID su un secondo ordine: stabile, a regime al setpoint', () => {
  const rows = run(secondOrder(), { sp: 60, kp: 1.5, ti: 40, td: 6 }, 900);
  assert.ok(Math.abs(last(rows).y - 60) < 0.3, 'y=' + last(rows).y);
  // stabile: nell'ultimo quarto non oscilla
  const tail = rows.slice(-rows.length / 4).map(r => r.y);
  assert.ok(Math.max(...tail) - Math.min(...tail) < 0.6);
});

test('guadagno troppo alto su un secondo ordine con ritardo: oscilla (la lezione lo fa vedere)', () => {
  // ritardo puro di 5 s davanti all'impianto
  const p = secondOrder();
  const buf = Array(10).fill(0);
  const delayed = { get y() { return p.y; }, step(u, dt) { buf.push(u); p.step(buf.shift(), dt); } };
  const rows = run(delayed, { sp: 50, kp: 12, ti: 10, td: 0 }, 600);
  const tail = rows.slice(-200).map(r => r.y);
  assert.ok(Math.max(...tail) - Math.min(...tail) > 5, 'deve oscillare');
});

test('uscita limitata tra lo e hi', () => {
  const rows = run(firstOrder(), { sp: 80, kp: 50, ti: 5, td: 0, lo: 0, hi: 100 }, 100);
  assert.ok(rows.every(r => r.u >= 0 && r.u <= 100));
  const r2 = run(firstOrder(), { sp: 80, kp: 50, ti: 5, td: 0, lo: 10, hi: 60 }, 100);
  assert.ok(r2.every(r => r.u >= 10 && r.u <= 60));
});

test('anti-windup: dopo una saturazione lunga supera poco il setpoint; senza, supera molto', () => {
  // impianto lento con guadagno basso: per arrivare a 60 serve u vicino a 100, l'uscita resta satura a lungo
  const plant = () => firstOrder({ K: 0.8, tau: 60 });
  const pid = { sp: 60, kp: 4, ti: 15, td: 0 };
  const good = run(plant(), pid, 900);
  const bad = run(plant(), { ...pid, windup: true }, 900);
  const overGood = maxY(good) - 60, overBad = maxY(bad) - 60;
  assert.ok(overGood < 3, 'con anti-windup ' + overGood);
  assert.ok(overBad > overGood + 5, 'senza anti-windup ' + overBad);
  // entrambi alla fine arrivano
  assert.ok(Math.abs(last(good).y - 60) < 0.5 && Math.abs(last(bad).y - 60) < 1.5);
});

test('derivativa sulla misura: un gradino di setpoint non dà il colpo', () => {
  // impianto a regime, poi il setpoint salta: la derivativa non vede il salto
  let st = newPid();
  for (let k = 0; k < 10; k++) st = pidStep(st, { pv: 40, sp: 40, kp: 2, ti: 0, td: 10, dt: 0.5 }).state;
  const before = pidStep(st, { pv: 40, sp: 40, kp: 2, ti: 0, td: 10, dt: 0.5 });
  const after = pidStep(st, { pv: 40, sp: 50, kp: 2, ti: 0, td: 10, dt: 0.5 });
  // solo la parte proporzionale: 2·10 = 20
  assert.equal(after.u - before.u, 20);
  assert.equal(after.state.d, 0);
});

test('derivativa: frena quando la misura sale in fretta', () => {
  let st = newPid();
  st = pidStep(st, { pv: 10, sp: 50, kp: 1, ti: 0, td: 10, dt: 0.5 }).state;
  const r = pidStep(st, { pv: 14, sp: 50, kp: 1, ti: 0, td: 10, dt: 0.5 });
  assert.ok(r.state.d < 0);
  assert.ok(r.u < 36);
});

test('dt = 0: non integra e non deriva', () => {
  let st = newPid();
  st = pidStep(st, { pv: 10, sp: 50, kp: 1, ti: 10, td: 5, dt: 0.5 }).state;
  const a = pidStep(st, { pv: 20, sp: 50, kp: 1, ti: 10, td: 5, dt: 0 });
  assert.equal(a.state.i, st.i);
  assert.equal(a.state.d, st.d);
  assert.equal(a.state.lastPv, st.lastPv);
});

test('manuale -> automatico senza scosse', () => {
  let st = newPid();
  // in manuale l'operatore tiene l'uscita al 35 %
  for (let k = 0; k < 5; k++) st = pidStep(st, { pv: 42, sp: 50, kp: 2, ti: 30, td: 0, dt: 0.5, track: 35 }).state;
  const auto = pidStep(st, { pv: 42, sp: 50, kp: 2, ti: 30, td: 0, dt: 0.5 });
  // al primo passo in automatico l'uscita si muove solo di quello che integra in mezzo secondo
  assert.ok(Math.abs(auto.u - 35) < 0.5, 'u=' + auto.u);
});

test('Ti = 0 vuol dire senza integrale', () => {
  let st = newPid();
  for (let k = 0; k < 20; k++) st = pidStep(st, { pv: 0, sp: 10, kp: 1, ti: 0, td: 0, dt: 0.5 }).state;
  assert.equal(st.i, 0);
  assert.equal(st.u, 10);
});

test('solo P con l\'uscita satura all\'avvio: l\'integrale non resta bloccato (revisione P6)', () => {
  // in manuale a 0 %, poi automatico con Kp 3 e Ti 0: l'errore di 40 satura l'uscita, che deve andare al 100 %
  let st = pidStep(newPid(), { pv: 20, sp: 60, kp: 3, ti: 0, td: 0, dt: 0.5, track: 0 }).state;
  const r = pidStep(st, { pv: 20, sp: 60, kp: 3, ti: 0, td: 0, dt: 0.5 });
  assert.equal(r.u, 100);
  assert.equal(r.state.i, 0);
  // Ti tolto con l'uscita satura: l'integrale accumulato prima sparisce
  st = { ...newPid(), i: -40, lastPv: 20 };
  assert.equal(pidStep(st, { pv: 20, sp: 60, kp: 5, ti: 0, td: 0, dt: 0.5 }).u, 100);
});
