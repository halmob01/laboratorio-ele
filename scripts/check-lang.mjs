// Elenca le frasi senza traduzione in una lingua. Uso: node scripts/check-lang.mjs ar
import { collectContent } from './collect-strings.mjs';
import { harvestUI } from './harvest-ui.mjs';
import { tr, registerLang, clearMiss, getMiss, hasLang } from '../src/i18n/index.js';

export const EXEMPT = s => s === 'Marco' || /^\d+ /.test(s) || /^[\d\s.,:/×x·+−-]+$/.test(s);

export async function missing(lang) {
  await import(`../src/i18n/${lang}.js`);
  clearMiss();
  const all = [...new Set([...collectContent(), ...harvestUI()])].map(s => s.trim()).filter(s => !EXEMPT(s));
  all.forEach(s => tr(s, lang));
  return getMiss().filter(s => !EXEMPT(s)).sort();
}

if (process.argv[1].endsWith('check-lang.mjs')) {
  const m = await missing(process.argv[2] || 'ar');
  console.log(m.length + ' frasi senza traduzione');
  console.log(m.join('\n'));
  process.exit(0);
}
