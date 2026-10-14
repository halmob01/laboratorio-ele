// Percorre l'app costruita (index.html) in un browser simulato e raccoglie tutti i testi italiani mostrati
// (nodi di testo e attributi), fuori dai blocchi data-notr. Serve a compilare e a verificare i dizionari.
// Uso: node scripts/harvest-ui.mjs [--json]    (richiede `npm run build`)

import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { levels } from '../src/content/index.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const ATTRS = ['aria-label', 'title', 'placeholder', 'alt'];
const isPhrase = s => /[A-Za-zÀ-ÿ]{3}/.test(s);

export function harvestUI() {
  const out = new Set();
  const dom = new JSDOM(html, {
    runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.test/',
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.scrollTo = () => {}; w.Element.prototype.scrollIntoView = () => {};
      w.localStorage.setItem('fase-e-neutro-profilo', JSON.stringify({ name: 'Marco', introSeen: true, nameAsked: true }));
    },
  });
  const w = dom.window, d = w.document;
  const fire = (el, t) => el.dispatchEvent(new w.Event(t, { bubbles: true, cancelable: true }));
  const q = s => d.querySelector(s), qa = s => [...d.querySelectorAll(s)];
  const go = h => { w.location.hash = h; w.dispatchEvent(new w.Event('hashchange')); };
  const click = el => el && fire(el, 'click');
  const tap = el => { fire(el, 'pointerdown'); fire(el, 'pointerup'); };
  const grab = () => {
    const walk = n => {
      if (n.nodeType === 3) { const t = n.nodeValue.replace(/\s+/g, ' ').trim(); if (t && isPhrase(t)) out.add(t); return; }
      if (n.nodeType !== 1 || n.hasAttribute('data-notr') || /^(SCRIPT|STYLE)$/.test(n.tagName)) return;
      ATTRS.forEach(a => { const v = n.getAttribute(a); if (v && isPhrase(v)) out.add(v.replace(/\s+/g, ' ').trim()); });
      n.childNodes.forEach(walk);
    };
    walk(d.body);
  };
  const wire = (a, b, c) => { click(q(`[data-col="${c}"]`)); tap(q(`[data-term="${a}"]`)); tap(q(`[data-term="${b}"]`)); };

  grab();
  qa('[data-open]').forEach(b => { try { click(b); grab(); const o = q('#overlay'); if (o) { for (let i = 0; i < 9 && q('[data-intro="next"]'); i++) { click(q('[data-intro="next"]')); grab(); } } d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); } catch (e) { /* si prosegue */ } });
  go('#/quaderno'); grab();
  for (const l of levels) {
    try {
      go('#/livello/' + l.id); grab();
      for (let i = 0; i < 14 && !q('#lesson').hidden; i++) {
        qa('[data-pred]').forEach(p => { click(p); grab(); });
        const nx = q('[data-unit="next"]'); if (!nx) break; click(nx); grab();
      }
      grab();
      click(q('#bCheck')); grab();
      click(q('#bHint')); grab(); click(q('#bHint')); grab();
      qa('[data-help]').forEach(b => { click(b); grab(); });
      qa('[data-mode]').forEach(b => { click(b); grab(); });
      (l.solution || []).forEach(([a, b, c]) => { try { wire(a, b, c); } catch (e) { /* si prosegue */ } });
      click(q('#bCheck')); grab();
      click(q('#bFlow')); grab();
      click(q('#bSol')); grab();
      qa('[data-act],[data-unit],[data-opt],[data-fault]').forEach(b => { try { click(b); grab(); } catch (e) { /* si prosegue */ } });
    } catch (e) { process.stderr.write('livello ' + l.id + ': ' + e.message + '\n'); }
  }
  go('#/home'); grab();
  w.close();
  return [...out].sort();
}

if (process.argv[1].endsWith('harvest-ui.mjs')) {
  const all = harvestUI();
  if (process.argv.includes('--json')) console.log(JSON.stringify(all, null, 1));
  else console.log(all.length + ' testi');
  process.exit(0);
}
