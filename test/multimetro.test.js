// Multimetro (motore v2): tensione con propagazione attraverso i carichi, continuita' e resistenza a impianto spento.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createSim, act, measure, setSupply } from '../src/engine/v2/index.js';

const W = (...lines) => lines.map((l, i) => { const [a, b, c] = l.split(' '); return { id: 'w' + i, a, b, c: c || 'marrone' }; });
const comp = (id, type, extra = {}) => ({ id, type, short: id, title: id, terms: {}, ...extra });
const LEVEL = { engine: 2, comps: [comp('Q', 'quadro'), comp('S', 'sw'), comp('L', 'lamp')] };
const WIRES = W('Q.F S.a', 'S.b L.A', 'L.B Q.N blu');
const V = (s, a, b) => measure(s, a, b, 'V');
const R = (s, a, b) => measure(s, a, b, 'R');

test('tensione: a monte dell\'interruttore 230 V, a valle dipende dall\'interruttore', () => {
  const s = createSim(LEVEL, WIRES);
  assert.equal(V(s, 'S.a', 'Q.N').value, 230);
  assert.equal(V(s, 'Q.F', 'Q.PE').value, 230);
  assert.equal(V(s, 'Q.N', 'Q.PE').value, 0);
  // interruttore aperto: il morsetto a valle prende il neutro attraverso la lampada
  assert.equal(V(s, 'S.b', 'Q.N').value, 0);
  assert.equal(V(s, 'S.b', 'S.a').value, 230);
  act(s, 'toggle', 'S');
  assert.equal(V(s, 'S.b', 'Q.N').value, 230);
  assert.equal(V(s, 'S.b', 'S.a').value, 0);
});

test('tensione: neutro interrotto, la lampada porta la fase al suo morsetto neutro', () => {
  const s = createSim(LEVEL, W('Q.F S.a', 'S.b L.A'));
  act(s, 'toggle', 'S');
  assert.equal(V(s, 'L.B', 'Q.N').value, 230);
});

test('tensione: impianto spento, 0 V ovunque', () => {
  const s = createSim(LEVEL, WIRES);
  setSupply(s, false);
  assert.equal(V(s, 'S.a', 'Q.N').value, 0);
});

test('continuita\': filo e contatto chiusi, contatto aperto, carico', () => {
  const s = createSim(LEVEL, WIRES);
  setSupply(s, false);
  assert.equal(R(s, 'Q.N', 'L.B').kind, 'cont');
  assert.equal(R(s, 'S.a', 'S.b').kind, 'open');   // contatto aperto
  act(s, 'toggle', 'S');
  assert.equal(R(s, 'S.a', 'S.b').kind, 'cont');
  assert.equal(R(s, 'Q.F', 'Q.N').kind, 'res');
  assert.ok(R(s, 'Q.F', 'Q.N').ohm > 100);
});

test('continuita\': con tensione la lettura non e\' valida; filo mancante da \'open\'', () => {
  const s = createSim(LEVEL, WIRES);
  assert.equal(R(s, 'S.a', 'Q.N').kind, 'live');
  const t = createSim(LEVEL, W('Q.F S.a', 'S.b L.A'));
  setSupply(t, false);
  assert.equal(R(t, 'Q.N', 'L.B').kind, 'open');
});
