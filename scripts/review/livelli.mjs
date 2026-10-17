// Carica lezioni e livelli (dal lavoro attuale o da un commit) e sceglie i livelli da rivedere.
// Usato da pacchetto-allievo.mjs e misure.mjs. Argomenti comuni:
//   <modulo>            numero del modulo come in mappa (0, 2, 3, 4, 5, 6) oppure un elenco di id: c25-fungo,c26-rele-sicurezza
//   --commit <rev>      legge le lezioni di quel commit (per la prova "prima"), altrimenti il lavoro attuale
import { execFileSync } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

export async function carica(argv) {
  const args = argv.slice(2);
  const ci = args.indexOf('--commit');
  const rev = ci >= 0 ? args[ci + 1] : null;
  const scelta = args.find((a, i) => !a.startsWith('--') && (ci < 0 || i !== ci + 1));
  if (!scelta) throw new Error('Manca il modulo (es. 3) o l\'elenco dei livelli (es. c25-fungo,c26-rele-sicurezza)');
  let root = join(repo, 'src');
  if (rev) {
    const dir = mkdtempSync(join(tmpdir(), 'review-'));
    execFileSync('sh', ['-c', `git -C "${repo}" archive ${rev} src package.json | tar -x -C "${dir}"`]);
    root = join(dir, 'src');
  }
  const imp = f => import(pathToFileURL(join(root, 'content', f)).href);
  const U = { ...(await imp('units.js')).UNITS, ...(await imp('units-v2.js')).UNITS_V2 };
  const { levels } = await imp('index.js');           // ordine di gioco
  const { MODULES } = await imp('home.js');
  let ids;
  if (/^\d+$/.test(scelta)) {
    const m = MODULES.find(x => x.tag === 'MODULO ' + scelta);
    if (!m) throw new Error('Modulo non trovato: ' + scelta);
    ids = m.levels.filter(x => typeof x === 'string');
  } else ids = scelta.split(',');
  const byId = Object.fromEntries(levels.map(l => [l.id, l]));
  ids.forEach(id => { if (!U[id] || !byId[id]) throw new Error('Livello senza lezione: ' + id); });
  const primo = Math.min(...ids.map(id => levels.findIndex(l => l.id === id)));
  const prima = levels.slice(0, primo).filter(l => U[l.id] && !ids.includes(l.id));
  return { U, byId, ids, prima, rev };
}
