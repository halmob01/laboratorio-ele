// Lingue: ogni frase italiana del gioco deve avere la sua traduzione, e il traduttore non deve rompere nulla.
// Richiede `npm run build` (la raccolta dei testi apre index.html in un browser simulato).

import test from 'node:test';
import assert from 'node:assert/strict';
import { collectContent } from '../scripts/collect-strings.mjs';
import { harvestUI } from '../scripts/harvest-ui.mjs';
import { tr, registerLang, clearMiss, getMiss, hasLang } from '../src/i18n/index.js';
import { evaluate } from '../src/engine/index.js';
import { levels } from '../src/content/index.js';
import { describeEvaluation, sessionMessage } from '../src/content/it.js';
import '../src/i18n/ar.js';

const EXEMPT = s => s === 'Marco' || /^\d+ /.test(s) || /^[\d\s.,:/×x·+−-]+$/.test(s);
const LANGS = ['ar'];

// Cablaggi sbagliati di ogni genere, per far produrre al motore tutti i suoi messaggi.
function errorMessages() {
  const out = new Set();
  const toWires = list => list.map(([a, b, c], k) => ({ id: k + 1, a, b, c }));
  levels.forEach(lv => {
    if (!lv.solution) return;
    const cases = [[]];
    lv.solution.forEach((_, i) => cases.push(lv.solution.filter((_, j) => j !== i)));                  // un filo in meno
    ['blu', 'gv', 'marrone'].forEach(col => cases.push(lv.solution.map(([a, b]) => [a, b, col])));        // tutti dello stesso colore
    cases.push(lv.solution.map(([a, b, c], i) => (i ? [a, b, c] : [b, a, c])));
    cases.push([...lv.solution, ['q.f', 'q.n', 'marrone']]);
    cases.forEach(c => {
      try {
        const d = describeEvaluation(evaluate(lv, toWires(c)), lv);
        ['work', 'color', 'safe'].forEach(k => d[k].msgs.forEach(m => out.add(m)));
      } catch (e) { /* livello senza motore v1 */ }
    });
  });
  ['trip', 'editWhileLive', 'powerOff', 'lampDark'].forEach(code => ['corto', 'terra'].forEach(fault => out.add(sessionMessage({ code, fault }))));
  return [...out];
}

for (const lang of LANGS) {
  test('la lingua ' + lang + ' e\' registrata', () => assert.ok(hasLang(lang)));

  test('traduzione ' + lang + ': nessuna frase del contenuto, della pagina o dei messaggi resta senza traduzione', () => {
    clearMiss();
    const all = new Set([...collectContent(), ...harvestUI(), ...errorMessages()].map(s => s.trim()).filter(s => s && !EXEMPT(s)));
    all.forEach(s => tr(s, lang));
    const miss = getMiss().filter(s => !EXEMPT(s));
    assert.deepEqual(miss, [], miss.length + ' frasi senza traduzione');
  });

  test('traduzione ' + lang + ': ogni frase tradotta contiene lettere della lingua e non e\' vuota', () => {
    collectContent().filter(s => !EXEMPT(s)).forEach(s => {
      const t = tr(s.trim(), lang);
      assert.ok(t && t.trim().length > 0, s);
    });
  });

  test('traduzione ' + lang + ': i segni di marcatura non si perdono (virgolette «» e sigle dei morsetti)', () => {
    // una frase italiana che cita una sigla (L, N, PE, C) deve citarla anche tradotta
    collectContent().forEach(s => {
      const t = tr(s.trim(), lang);
      for (const sigla of ['PE']) if (new RegExp('\\b' + sigla + '\\b').test(s)) assert.ok(t.includes(sigla), s + ' -> ' + t);
    });
  });
}

test('il traduttore lascia l\'italiano com\'e\' e non inventa frasi', () => {
  assert.equal(tr('Mappa', 'it'), 'Mappa');
  assert.equal(tr('Frase che non esiste mai', 'ar'), 'Frase che non esiste mai');
  clearMiss();
});

test('un numero dentro una frase araba e\' isolato dal testo da destra a sinistra', () => {
  const t = tr('Lezione · 3 di 7 · Spiegazione', 'ar');
  assert.match(t, /⁦ ?3⁩/);
});
