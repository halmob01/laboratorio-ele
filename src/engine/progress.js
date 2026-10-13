// Progressi, XP e gradi. Nessuna grafica e nessun testo: i nomi dei gradi stanno in src/content/it.js.
//
// Forma salvata (versione 2):
//   {
//     v: 2,
//     stars: { '<idLivello>': 0..3, '<idLivello>c': 0..3 },   // 'c' = versione "dal contatore"
//     best:  { '<idLivello>': { base, pred, fault, skipped } },
//     last:  '<idLivello>' | null
//   }
// Il formato precedente (senza `v`) era una mappa piatta { '1': stelle, '2': stelle, '1c': stelle }
// indicata con il numero del livello nel prototipo: migrateProgress lo converte.

export const PROGRESS_VERSION = 2;

export function emptyProgress() {
  return { v: PROGRESS_VERSION, stars: {}, best: {}, last: null };
}

/**
 * Porta qualunque contenuto salvato alla versione corrente.
 * @param {object} data    quello che c'era nel deposito (anche vuoto o rovinato)
 * @param {object[]} levels livelli del gioco (servono id e n)
 */
export function migrateProgress(data, levels) {
  if (!data || typeof data !== 'object') return emptyProgress();
  if (data.v >= PROGRESS_VERSION) {
    const out = emptyProgress();
    const isObj = o => o && typeof o === 'object' && !Array.isArray(o);
    const num = (x, max) => { const n = Math.floor(Number(x)); return n >= 0 ? Math.min(n, max) : 0; };
    if (isObj(data.stars)) Object.keys(data.stars).forEach(k => { out.stars[k] = num(data.stars[k], 3); });
    if (isObj(data.best)) {
      Object.keys(data.best).forEach(k => {
        const r = data.best[k];
        if (!isObj(r)) return;
        out.best[k] = { base: num(r.base, 110), pred: r.pred === true, fault: r.fault === true, skipped: r.skipped === true };
      });
    }
    out.last = typeof data.last === 'string' ? data.last : null;
    return out;
  }
  const out = emptyProgress();
  const byN = {};
  levels.forEach(l => { if (l.n > 0) byN[l.n] = l.id; });
  Object.keys(data).forEach(k => {
    const m = /^(\d+)(c?)$/.exec(k);
    const stars = Number(data[k]);
    if (!m || !byN[m[1]] || !(stars >= 0 && stars <= 3)) return;
    out.stars[byN[m[1]] + m[2]] = Math.floor(stars);
  });
  return out;
}

/* ---------- XP ---------- */

export const XP = { work: 40, color: 30, safe: 30, noHint: 10, hintCost: 5, solutionCap: 30, prediction: 10, fault: 20 };

// XP di un tentativo di verifica, senza i bonus di previsione e guasto (si sommano a parte).
export function attemptBase(result, usage) {
  let base = (result.work.ok ? XP.work : 0) + (result.color.ok ? XP.color : 0) + (result.safe.ok ? XP.safe : 0);
  if (usage.solution) base = Math.min(base, XP.solutionCap);
  base = Math.max(0, base - XP.hintCost * usage.hints);
  if (result.pass && !usage.solution && usage.hints === 0) base += XP.noHint;
  return base;
}

export function xpOf(rec) {
  if (!rec) return 0;
  return (rec.base || 0) + (rec.pred ? XP.prediction : 0) + (rec.fault ? XP.fault : 0);
}

export function totalXp(progress) {
  return Object.keys(progress.best).reduce((sum, k) => sum + xpOf(progress.best[k]), 0);
}

// Soglie provvisorie: si tarano dopo la prima prova in classe.
export const RANKS = [
  { id: 'apprendista', min: 0 },
  { id: 'aiutante', min: 100 },
  { id: 'operatore', min: 250 },
  { id: 'installatore', min: 450 },
  { id: 'collaudatore', min: 700 },
];

export function rankOf(xp) {
  let i = 0;
  RANKS.forEach((r, k) => { if (xp >= r.min) i = k; });
  const next = RANKS[i + 1] || null;
  return { id: RANKS[i].id, index: i, min: RANKS[i].min, next: next && { id: next.id, min: next.min } };
}
