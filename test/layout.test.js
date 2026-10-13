// La disposizione 2D separata deve ricomporre esattamente la geometria dei componenti originali.

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { levels, deriveFull } from '../src/content/index.js';
import { composeComps } from '../src/ui2d/layout.js';

const legacy = createRequire(import.meta.url)('./fixtures/legacy-engine.cjs');

const norm = c => (c === undefined ? null : JSON.parse(JSON.stringify(c)));

for (const mode of ['quadro', 'contatore']) {
  test('la geometria ricomposta coincide con l\'originale (' + mode + ')', () => {
    levels.forEach((_, i) => {
      const next = mode === 'contatore' ? deriveFull(levels[i]) : levels[i];
      const old = mode === 'contatore' ? legacy.buildFull(legacy.LEVELS[i]) : legacy.LEVELS[i];
      const comps = composeComps(next);
      assert.equal(comps.length, old.comps.length);
      comps.forEach((c, k) => {
        const o = old.comps[k];
        assert.equal(c.id, o.id);
        for (const key of ['x', 'y', 'w', 'h', 'flip', 'bx']) assert.equal(c[key], o[key], c.id + '.' + key);
        assert.deepEqual(norm(c.plate), norm(o.plate), c.id + ' plate');
        assert.deepEqual(Object.keys(c.terms), Object.keys(o.terms));
        Object.keys(o.terms).forEach(t => {
          assert.equal(c.terms[t].f, o.terms[t].f, c.id + '.' + t + ' f');
          assert.equal(c.terms[t].s, o.terms[t].s, c.id + '.' + t + ' s');
          assert.equal(c.terms[t].l, o.terms[t].l);
        });
      });
    });
  });
}

test('ogni morsetto dei livelli ha una posizione nel layout', () => {
  levels.forEach(l => {
    [l, deriveFull(l)].forEach(lv => {
      composeComps(lv).forEach(c =>
        Object.keys(c.terms).forEach(t => {
          assert.ok(typeof c.terms[t].f === 'number' && ['t', 'b'].includes(c.terms[t].s), c.id + '.' + t);
        })
      );
    });
  });
});
