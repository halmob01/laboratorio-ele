// L'ordine dei livelli segue MODULES di home.js: e' da li' che dipendono "Livello successivo" e "Continua".
import test from 'node:test';
import assert from 'node:assert/strict';
import { levels } from '../src/content/index.js';
import { MODULES } from '../src/content/home.js';

test('ordine dei livelli: Modulo 0, trilocale, poi i moduli seguenti come in MODULES', () => {
  const ids = levels.map(l => l.id);
  const fromMap = MODULES.flatMap(m => m.levels.filter(x => typeof x === 'string'));
  assert.deepEqual(ids.filter(id => fromMap.includes(id)), fromMap);
  const tri = ids.filter(id => id.startsWith('t0'));
  const last0 = ids.indexOf(MODULES[0].levels[MODULES[0].levels.length - 1]);
  const first2 = ids.indexOf(MODULES[1].levels[0]);
  assert.ok(tri.length > 0 && tri.every(id => ids.indexOf(id) > last0 && ids.indexOf(id) < first2));
});
