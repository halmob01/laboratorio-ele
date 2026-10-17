// Misure delle lezioni per la review (docs/METODO-REVIEW-PEDAGOGICA.md, par. 6 e 6 bis): numero di slide, parole per slide
// di spiegazione e pezzi (tabelle escluse), e per ogni previsione quanto e' lunga la risposta giusta rispetto alla sbagliata
// piu' lunga. Segnala con ! le slide oltre 110 parole (obiettivo: circa 90) e le previsioni dove la giusta e' piu' lunga di oltre il 15 %.
// Uso: node scripts/review/misure.mjs 2      oppure      node scripts/review/misure.mjs 2 --commit fe4fee0
import { carica } from './livelli.mjs';

const { U, ids } = await carica(process.argv);
const w = s => (s || '').split(/\s+/).filter(Boolean).length;
let avvisi = 0;
for (const id of ids) {
  const pages = U[id].lesson.pages;
  const parole = pages.filter(p => p.type === 'spiegazione' || p.type === 'pezzi').map(p => {
    const n = (p.paras || []).reduce((a, t) => a + w(t), 0);
    if (n > 110) avvisi++;
    return n > 110 ? n + "!" : String(n);
  });
  const prev = pages.filter(p => p.type === 'previsione').map(p => {
    const len = p.options.map(o => o.text.length), g = len[p.options.findIndex(o => o.id === p.correct)];
    const r = g / Math.max(...len.filter((_, i) => p.options[i].id !== p.correct));
    if (r > 1.15) avvisi++;
    return r.toFixed(2) + (r > 1.15 ? '!' : '');
  });
  console.log(`${id.padEnd(26)} slide ${String(pages.length).padStart(2)}   parole per slide ${parole.join(', ')}   giusta/sbagliata piu' lunga ${prev.join(', ') || '-'}`);
}
console.log(avvisi ? `\n${avvisi} avvisi (!)` : '\nNessun avviso');
