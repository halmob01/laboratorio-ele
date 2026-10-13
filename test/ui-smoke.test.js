// Prova a livello di pagina: si apre index.html (quello costruito) in un browser simulato,
// si cablano i livelli con le soluzioni toccando i morsetti e si controlla che la pagina risponda.
// Richiede di aver eseguito prima `npm run build` (lo fa anche `npm run check`).

import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { levels, deriveFull } from '../src/content/index.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

// La pagina ha un timer (il contatore): le finestre vanno chiuse o il processo non termina.
const windows = [];
after(() => windows.forEach(w => w.close()));

function openPage() {
  const errors = [];
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'https://example.test/',
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.scrollTo = () => {};
      w.Element.prototype.scrollIntoView = () => {};
      w.addEventListener('error', e => errors.push(e.error || e.message));
    },
  });
  windows.push(dom.window);
  return { w: dom.window, d: dom.window.document, errors };
}

const fire = (w, el, type) => el.dispatchEvent(new w.Event(type, { bubbles: true, cancelable: true }));
const q = (d, s) => d.querySelector(s);
const term = (d, tid) => q(d, `[data-term="${tid}"]`);

// Collega due morsetti come farebbe l'allievo: tocca il primo, poi il secondo.
function wire(w, d, a, b, color) {
  fire(w, q(d, `[data-col="${color}"]`), 'click');
  fire(w, term(d, a), 'pointerdown');
  fire(w, term(d, b), 'pointerdown');
}

test('la pagina si apre senza errori e mostra il primo livello', () => {
  const { d, errors } = openPage();
  assert.deepEqual(errors, []);
  assert.equal(q(d, '#lvName').textContent, 'La presa di corrente');
  assert.equal(d.querySelectorAll('#levels .lv').length, 4);
  assert.equal(d.querySelectorAll('#bench [data-term]').length, 6);
  assert.equal(d.querySelectorAll('#palette .chip').length, 5);
});

for (const mode of ['quadro', 'contatore']) {
  test('si superano tutti i livelli cablando la soluzione (' + mode + ')', () => {
    const { w, d, errors } = openPage();
    if (mode === 'contatore') fire(w, q(d, '[data-mode="contatore"]'), 'click');
    levels.forEach((_, i) => {
      const lv = mode === 'contatore' ? deriveFull(levels[i]) : levels[i];
      fire(w, d.querySelectorAll('#levels .lv')[i], 'click');
      assert.equal(q(d, '#lvName').textContent, lv.title);
      lv.solution.forEach(([a, b, c]) => wire(w, d, a, b, c));
      assert.equal(d.querySelectorAll('#bench [data-wire]').length, lv.solution.length);
      fire(w, q(d, '#bCheck'), 'click');
      assert.match(q(d, '#result h3').textContent, /Livello superato/, 'livello ' + lv.n);
      assert.equal(d.querySelectorAll('#result .mark.ok').length, 3);
    });
    assert.deepEqual(errors, []);
  });
}

test('si da corrente, la luce si accende e un comando la spegne', () => {
  const { w, d } = openPage();
  fire(w, d.querySelectorAll('#levels .lv')[1], 'click');
  levels[1].solution.forEach(([a, b, c]) => wire(w, d, a, b, c));
  fire(w, q(d, '[data-q]'), 'click');
  assert.match(q(d, '#status').textContent, /Quadro acceso/);
  assert.match(q(d, '#status').textContent, /Luce spenta/);   // interruttore aperto
  fire(w, q(d, '#bench [data-ctl="S"]'), 'click');
  assert.match(q(d, '#status').textContent, /Luce accesa/);
  assert.equal(q(d, '#glow').getAttribute('opacity'), '1');
  fire(w, q(d, '#bench [data-ctl="S"]'), 'click');
  assert.match(q(d, '#status').textContent, /Luce spenta/);
});

test('un cortocircuito fa scattare il quadro e toccare i fili con corrente lo spegne', () => {
  const { w, d } = openPage();
  fire(w, d.querySelectorAll('#levels .lv')[1], 'click');
  wire(w, d, 'Q.F', 'Q.N', 'marrone');
  fire(w, q(d, '[data-q]'), 'click');
  assert.match(q(d, '#status').textContent, /Quadro scattato/);
  assert.match(q(d, '#status .msg').textContent, /cortocircuito/);

  fire(w, q(d, '#bClear'), 'click');
  levels[1].solution.forEach(([a, b, c]) => wire(w, d, a, b, c));
  fire(w, q(d, '[data-q]'), 'click');
  assert.match(q(d, '#status').textContent, /Quadro acceso/);
  fire(w, q(d, '#bUndo'), 'click');
  assert.match(q(d, '#status').textContent, /Quadro spento/);
  assert.match(q(d, '#status .msg').textContent, /Per sicurezza/);
});

test('suggerimenti, soluzione e verifica di un cablaggio sbagliato', () => {
  const { w, d } = openPage();
  fire(w, q(d, '#bHint'), 'click');
  assert.match(q(d, '#info').textContent, /Suggerimento 1 di 3/);
  fire(w, q(d, '#bHint'), 'click');
  assert.match(q(d, '#info').textContent, /Suggerimento 2 di 3/);
  fire(w, q(d, '#bSol'), 'click');
  assert.equal(d.querySelectorAll('#bench .ghost').length, 3);
  fire(w, q(d, '#bSol'), 'click');
  assert.equal(d.querySelectorAll('#bench .ghost').length, 0);

  wire(w, d, 'Q.F', 'P.L', 'blu');   // colore sbagliato sulla fase
  wire(w, d, 'Q.N', 'P.N', 'blu');
  wire(w, d, 'Q.PE', 'P.PE', 'gv');
  fire(w, q(d, '#bCheck'), 'click');
  assert.match(q(d, '#result').textContent, /deve essere marrone, nero o grigio/);
  assert.equal(d.querySelectorAll('#result .mark.ok').length, 2);
});

test('i progressi si salvano e tornano alla riapertura', () => {
  const { w, d } = openPage();
  levels[0].solution.forEach(([a, b, c]) => wire(w, d, a, b, c));
  fire(w, q(d, '#bCheck'), 'click');
  assert.match(q(d, '#levels .lv').textContent, /★★★/);
  assert.equal(JSON.parse(w.localStorage.getItem('lab-elettrico-1'))['1'], 3);
});
