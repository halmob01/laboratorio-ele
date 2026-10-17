// Pannelli che non perdono i clic (src/ui2d/press.js): mentre si tiene premuto un pulsante, il suo pannello non si riscrive;
// si riscrive al rilascio, dopo il click. Morsetti e pulsanti a impulso non fermano la riscrittura.

import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<div id="a"></div><div id="b"></div>');
globalThis.document = dom.window.document;
const { writeHTML } = await import('../src/ui2d/press.js');
const d = dom.window.document, a = d.getElementById('a'), b = d.getElementById('b');
const fire = (el, type) => el.dispatchEvent(new dom.window.Event(type, { bubbles: true }));
const tick = () => new Promise(r => setTimeout(r, 5));

test('stesso HTML: il pannello non si riscrive e il pulsante resta lo stesso', () => {
  writeHTML(a, '<button data-unit="next">Avanti</button>');
  const btn = a.querySelector('button');
  writeHTML(a, '<button data-unit="next">Avanti</button>');
  assert.equal(a.querySelector('button'), btn);
});

test('tenendo premuto un pulsante, il pannello si riscrive solo dopo il rilascio', async () => {
  writeHTML(a, '<button>Avanti</button><i>1</i>');
  const btn = a.querySelector('button');
  fire(btn, 'pointerdown');
  writeHTML(a, '<button>Avanti</button><i>2</i>');
  writeHTML(b, '<p>altro pannello</p>');
  assert.equal(a.querySelector('button'), btn, 'il pulsante premuto non viene sostituito');
  assert.equal(b.innerHTML, '<p>altro pannello</p>', 'gli altri pannelli si riscrivono subito');
  fire(btn, 'pointerup');
  assert.equal(a.querySelector('i').textContent, '1', 'il click arriva ancora sul pulsante vecchio');
  await tick();
  assert.equal(a.querySelector('i').textContent, '2', 'dopo il rilascio vale l\'ultimo HTML');
});

test('morsetti e pulsanti a impulso non fermano la riscrittura', () => {
  writeHTML(a, '<b data-term="X.1">1</b><b data-hold="SB1">2</b>');
  for (const sel of ['[data-term]', '[data-hold]']) {
    fire(a.querySelector(sel), 'pointerdown');
    const html = `<b data-term="X.1">${sel}</b><b data-hold="SB1">x</b>`;
    writeHTML(a, html);
    assert.equal(a.innerHTML, html);
    fire(a.querySelector(sel), 'pointerup');
  }
});
