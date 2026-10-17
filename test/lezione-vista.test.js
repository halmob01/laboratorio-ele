// La vista della lezione mostra tutto quello che il contenuto dichiara (testi, tabelle, riquadri "Attenzione").

import test from 'node:test';
import assert from 'node:assert/strict';
import { lessonHTML } from '../src/ui2d/screens.js';
import { levels } from '../src/content/index.js';

test('ogni riquadro "Attenzione" delle slide spiegazione e pezzi compare nella pagina', () => {
  let n = 0;
  for (const L of levels) {
    const pages = L.unit && L.unit.lesson.pages;
    if (!pages) continue;
    pages.forEach((pg, page) => {
      if (!pg.warn || (pg.type !== 'spiegazione' && pg.type !== 'pezzi')) return;
      const html = lessonHTML({ level: L, unit: { pageData: pg, page, pages: pages.length } }, { benchBox: '0 0 10 10' });
      assert.ok(html.includes('lwarn'), `${L.id}, pagina ${page + 1}`);
      n++;
    });
  }
  assert.ok(n > 20);
});
