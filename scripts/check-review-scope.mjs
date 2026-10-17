// Rete di sicurezza della review pedagogica (docs/PIANO-FASE-2.md, blocco B0).
// Uso: node scripts/check-review-scope.mjs [commit-di-partenza]   (predefinito: fe4fee0)
// Fallisce se, rispetto al commit di partenza, e' cambiato altro che i testi delle lezioni:
//  - file toccati fuori da units.js, units-v2.js, src/i18n/ar*.js, docs/, test/ e dai file costruiti;
//  - in un livello: steps, fault, summary, support, o le slide che non sono 'spiegazione'
//    (previsione, pezzi, demo, sintesi), che devono restare identiche e nello stesso ordine.
// Si possono invece riscrivere i testi e aggiungere, togliere o spostare slide 'spiegazione'.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { pathToFileURL } from 'node:url';

const base = process.argv[2] || 'fe4fee0';
const git = (...a) => execFileSync('git', a, { encoding: 'utf8', maxBuffer: 1 << 28 });
const problems = [];

const ALLOWED = [
  /^src\/content\/units(-v2)?\.js$/, /^src\/i18n\/ar(-\d+)?\.js$/, /^docs\//, /^test\//, /^scripts\//,
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
      if (k === 'lesson') continue;
      if (!isDeepStrictEqual(a[k], b[k])) problems.push(`${id}: cambiato '${k}'`);
    }
    for (const k of new Set([...Object.keys(a.lesson), ...Object.keys(b.lesson)])) {
      if (k !== 'pages' && !isDeepStrictEqual(a.lesson[k], b.lesson[k])) problems.push(`${id}: cambiato lesson.${k}`);
    }
    const fixed = l => l.pages.filter(p => p.type !== 'spiegazione');
    if (!isDeepStrictEqual(fixed(a.lesson), fixed(b.lesson))) problems.push(`${id}: cambiate slide che non sono 'spiegazione' (previsione, pezzi, demo, sintesi)`);
  }
} finally { rmSync(tmp, { recursive: true, force: true }); }

if (problems.length) { console.error(problems.join('\n')); console.error(`\n${problems.length} problemi rispetto a ${base}`); process.exit(1); }
console.log(`Perimetro della review rispettato rispetto a ${base}`);
