// Rete di sicurezza della review pedagogica (docs/PIANO-FASE-2.md, blocco B0; regole in docs/METODO-REVIEW-PEDAGOGICA.md, par. 6).
// Uso: node scripts/check-review-scope.mjs [commit-di-partenza]   (predefinito: BASE qui sotto)
// Fallisce se, rispetto al commit di partenza, e' cambiato altro che la lezione:
//  - file toccati fuori da units.js, units-v2.js, src/i18n/ar*.js, docs/, test/, dai file costruiti e da src/ui2d/style.css
//    (lo stile delle lezioni si puo' cambiare, deciso da Gianluca il 17 ottobre; lo stile di banco ed esercizio no: chi lo tocca lo dice nel commit);
//  - in un livello: steps, fault, support; le slide 'demo' (identiche); il 'focus' delle slide 'pezzi';
//    l'ordine di demo e pezzi; il numero di slide 'previsione' (danno i punti).
// Si possono invece: riscrivere, aggiungere, togliere, spostare slide 'spiegazione'; riscrivere titolo e testi dei 'pezzi';
// riscrivere domanda, opzioni, risposta giusta e spiegazione delle 'previsione' (la risposta giusta deve essere una delle opzioni);
// riscrivere la sintesi (summary: elenco di frasi non vuote; slide 'sintesi': una sola, l'ultima, con un titolo).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { pathToFileURL } from 'node:url';

// Punto di partenza: B0, B1, spazio nelle tabelle, Attenzione nei pezzi (17 ottobre). Le lezioni sono identiche a fe4fee0; cambia solo la vista.
const BASE = 'a9b7e45';
const base = process.argv[2] || BASE;
const git = (...a) => execFileSync('git', a, { encoding: 'utf8', maxBuffer: 1 << 28 });
const problems = [];

const ALLOWED = [
  /^src\/content\/units(-v2)?\.js$/, /^src\/ui2d\/style\.css$/, /^src\/i18n\/ar(-\d+)?\.js$/, /^docs\//, /^test\//, /^scripts\//,
  /^index\.html$/, /^trilocale\.js$/, /^prove3d\.js$/, /^README\.md$/, /^CLAUDE\.md$/,
];
for (const f of git('diff', '--name-only', base, 'HEAD').split('\n').filter(Boolean)) {
  if (!ALLOWED.some(r => r.test(f))) problems.push(`file fuori dal perimetro della review: ${f}`);
}

const tmp = mkdtempSync(join(tmpdir(), 'review-scope-'));
async function load(rev, dir) {
  execFileSync('sh', ['-c', `mkdir -p "${dir}" && git archive ${rev} src package.json | tar -x -C "${dir}"`]);
  const u1 = (await import(pathToFileURL(join(dir, 'src/content/units.js')).href)).UNITS;
  const u2 = (await import(pathToFileURL(join(dir, 'src/content/units-v2.js')).href)).UNITS_V2;
  return { ...u1, ...u2 };
}
try {
  const before = await load(base, join(tmp, 'a'));
  const after = await load('HEAD', join(tmp, 'b'));
  for (const id of new Set([...Object.keys(before), ...Object.keys(after)])) {
    const a = before[id], b = after[id];
    if (!a || !b) { problems.push(`${id}: livello ${a ? 'tolto' : 'aggiunto'}`); continue; }
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (k === 'lesson' || k === 'summary') continue;
      if (!isDeepStrictEqual(a[k], b[k])) problems.push(`${id}: cambiato '${k}'`);
    }
    for (const k of new Set([...Object.keys(a.lesson), ...Object.keys(b.lesson)])) {
      if (k !== 'pages' && !isDeepStrictEqual(a.lesson[k], b.lesson[k])) problems.push(`${id}: cambiato lesson.${k}`);
    }
    if (!Array.isArray(b.summary) || !b.summary.length || !b.summary.every(t => typeof t === 'string' && t.trim())) problems.push(`${id}: summary deve restare un elenco di frasi non vuote`);
    const sint = b.lesson.pages.filter(p => p.type === 'sintesi');
    if (sint.length !== 1 || b.lesson.pages[b.lesson.pages.length - 1].type !== 'sintesi' || typeof sint[0].title !== 'string' || !sint[0].title.trim()) problems.push(`${id}: deve esserci una sola slide 'sintesi', l'ultima, con un titolo`);
    const fixed = l => l.pages.filter(p => p.type === 'demo' || p.type === 'pezzi').map(p => (p.type === 'pezzi' ? { type: 'pezzi', focus: p.focus } : p));
    if (!isDeepStrictEqual(fixed(a.lesson), fixed(b.lesson))) problems.push(`${id}: cambiate le slide 'demo' o il 'focus' dei 'pezzi' (o il loro ordine)`);
    const preds = l => l.pages.filter(p => p.type === 'previsione');
    if (preds(a.lesson).length !== preds(b.lesson).length) problems.push(`${id}: cambiato il numero di slide 'previsione'`);
    for (const p of preds(b.lesson)) {
      const ok = typeof p.question === 'string' && p.question.trim() && typeof p.why === 'string' && p.why.trim()
        && Array.isArray(p.options) && p.options.length >= 2 && p.options.every(o => o.id && typeof o.text === 'string' && o.text.trim())
        && new Set(p.options.map(o => o.id)).size === p.options.length && p.options.some(o => o.id === p.correct);
      if (!ok) problems.push(`${id}: previsione non valida (domanda, opzioni con id diversi, risposta giusta tra le opzioni, spiegazione)`);
    }
    for (const p of b.lesson.pages.filter(p => p.type === 'pezzi')) {
      if (!Array.isArray(p.paras) || !p.paras.length || !p.paras.every(t => typeof t === 'string' && t.trim())) problems.push(`${id}: slide 'pezzi' senza testi`);
    }
  }
} finally { rmSync(tmp, { recursive: true, force: true }); }

if (problems.length) { console.error(problems.join('\n')); console.error(`\n${problems.length} problemi rispetto a ${base}`); process.exit(1); }
console.log(`Perimetro della review rispettato rispetto a ${base}`);
