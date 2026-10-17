// Pacchetto di lettura per l'"allievo finto" (docs/METODO-REVIEW-PEDAGOGICA.md, par. 7): quello che sa gia'
// (le sintesi dei livelli che vengono prima nel percorso) e le lezioni dei livelli scelti come le vede l'allievo,
// con le previsioni senza la risposta giusta, la sintesi e i passi del banco.
// Uso: node scripts/review/pacchetto-allievo.mjs 3 > pacchetto.txt
//      node scripts/review/pacchetto-allievo.mjs 3 --commit fe4fee0 > pacchetto-prima.txt   (lezioni originali)
import { carica } from './livelli.mjs';

const { U, byId, ids, prima } = await carica(process.argv);
let out = '# CHE COSA SAI GIA\' (sintesi dei livelli fatti prima, in ordine)\n';
for (const l of prima) out += `\n## ${l.title || l.id}\n` + U[l.id].summary.map(s => '- ' + s).join('\n') + '\n';
out += '\n# LE LEZIONI DA LEGGERE, in ordine\n';
for (const id of ids) {
  const u = U[id], L = byId[id];
  out += `\n\n======== LIVELLO ${id}: ${L.title || ''} ========\nObiettivo: ${L.goal || ''}\n\n--- LEZIONE ---\n`;
  for (const p of u.lesson.pages) {
    if (p.type === 'sintesi') continue;
    if (p.type === 'demo') {
      out += '\n[Guarda come si fa: animazione dei fili]\n' + (p.captions?.wires || []).map((c, i) => `  ${i + 1}. ${c}`).join('\n')
        + (p.captions?.power ? '\n  ' + p.captions.power : '') + (p.captions?.controls || []).map(c => '\n  ' + c).join('') + '\n';
      continue;
    }
    if (p.type === 'previsione') {
      out += `\n[Domanda] ${p.question}\n` + p.options.map(o => `  - ${o.text}`).join('\n') + `\n  Spiegazione dopo la risposta: ${p.why}\n`;
      continue;
    }
    out += `\n[${p.type === 'pezzi' ? 'I pezzi' : 'Spiegazione'}] ${p.title || ''}\n` + (p.paras || []).join('\n') + '\n';
    if (p.table) out += 'Tabella: ' + [p.table.head, ...p.table.rows].map(r => r.join(' | ')).join(' / ') + '\n';
    if (p.warn) out += 'Attenzione: ' + p.warn + '\n';
  }
  out += '\n--- SINTESI ---\n' + u.summary.map(s => '- ' + s).join('\n') + '\n';
  out += '\n--- PASSI DEL BANCO ---\n' + (u.steps || []).map((s, i) => `${i + 1}. ${s.title}: ${s.text}`).join('\n') + '\n';
}
process.stdout.write(out);
