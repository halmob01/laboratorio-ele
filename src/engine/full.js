// Versione "dal contatore" di un livello: aggiunge il contatore e porta in ingresso al quadro
// i tre fili di arrivo. E' una trasformazione del modello, senza geometria.
//
// I testi (nomi dei componenti, frase nell'obiettivo, primo suggerimento) arrivano dai contenuti:
//   text = { components: { K: {short,title}, Q: {short,title} }, goalSuffix, hint }

const NAMES = { F: 'FASE', N: 'NEUTRO', PE: 'TERRA' };

export function buildFull(base, text) {
  const lv = JSON.parse(JSON.stringify(base));
  // L'ordine dei morsetti segue il quadro semplice: con la presa c'e' anche la terra in uscita.
  const earthThrough = !!base.earth;
  const order = earthThrough ? ['F', 'PE', 'N'] : ['N', 'F', 'PE'];

  const K = { id: 'K', type: 'cont', ...text.components.K, terms: {} };
  const Q = { id: 'Q', type: 'quadro', full: true, ...text.components.Q, terms: {} };
  order.forEach(k => {
    K.terms[k] = { l: NAMES[k], n: NAMES[k] };
    Q.terms[k + 'i'] = { l: NAMES[k], n: NAMES[k] + ' (ingresso)' };
    if (k !== 'PE' || earthThrough) Q.terms[k] = { l: NAMES[k], n: NAMES[k] + ' (uscita)' };
  });

  const others = lv.comps.filter(c => c.id !== 'Q');
  lv.comps = [K, Q].concat(others);
  lv.src = { F: 'K.F', N: 'K.N', PE: 'K.PE' };
  lv.full = true;
  lv.solution = [['K.F', 'Q.Fi', 'marrone'], ['K.N', 'Q.Ni', 'blu'], ['K.PE', 'Q.PEi', 'gv']].concat(
    base.solution
  );
  if (lv.earth) lv.earth = ['K.PE', lv.earth[1]];
  else lv.mustEarth = ['K.PE', 'Q.PEi'];
  lv.hints = [text.hint].concat(base.hints);
  lv.goal = base.goal + text.goalSuffix;
  return lv;
}
