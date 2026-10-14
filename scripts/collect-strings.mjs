// Elenca tutte le frasi italiane del contenuto (livelli, lezioni, mappa, glossario, schede).
// Uso: node scripts/collect-strings.mjs [--json]
// Le chiavi tecniche (id, tipi, colori, codici) non sono frasi e si saltano.

import { levels } from '../src/content/index.js';
import * as home from '../src/content/home.js';
import * as it from '../src/content/it.js';

const SKIP_KEYS = new Set(['id', 'code', 'type', 'kind', 'color', 'c', 'room', 'art', 'flow', 'support', 'engine', 'correct', 'from', 'to', 'sample', 'href', 'mail', 'tag', 'status', 'phase', 'focus', 'comp', 'comps', 'terms', 'load', 'loads', 'solution', 'src', 'safety', 'checks', 'do', 'caption', 'machine', 'l']);
const isPhrase = s => typeof s === 'string' && /[A-Za-zÀ-ÿ]{2}/.test(s) && !/^[a-z0-9_.\-|:]+$/.test(s);

export function collectContent() {
  const out = new Set();
  const walk = (v, key) => {
    if (typeof v === 'string') { if (!SKIP_KEYS.has(key) && isPhrase(v)) out.add(v); return; }
    if (Array.isArray(v)) { v.forEach(x => walk(x, key)); return; }
    if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => walk(x, k));
  };
  levels.forEach(l => {
    const { comps, ...rest } = l;
    walk(rest);
    comps.forEach(c => { out.add(c.short); out.add(c.title); if (c.where) out.add(c.where); Object.values(c.terms).forEach(t => { if (t.l && /[A-Za-zÀ-ÿ]{3}/.test(t.l)) out.add(t.l); }); });
  });
  [home, it].forEach(m => Object.entries(m).forEach(([k, v]) => { if (typeof v !== 'function') walk(v, k); }));
  return [...out].filter(isPhrase).sort();
}

if (process.argv[1].endsWith('collect-strings.mjs')) {
  const all = collectContent();
  if (process.argv.includes('--json')) console.log(JSON.stringify(all, null, 1));
  else console.log(all.length + ' frasi, ' + all.join(' ').split(/\s+/).length + ' parole');
}
