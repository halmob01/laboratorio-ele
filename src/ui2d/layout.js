// Disposizione dei componenti sul banco 2D: coordinate, dimensioni e lato dei morsetti.
// Questa e' la parte che un'altra vista (per esempio 3D) sostituisce con la propria.
//
// Forma: layout = { comps: { <id>: { x, y, w, h, flip?, bx?, terms: { <idMorsetto>: { f, s } } } },
//                   plates: { <idComando>: { x, y } } }
//   f = posizione del morsetto lungo il componente (0..1), s = lato: 't' (alto) o 'b' (basso)
//   plates = dove sta il comando nella scena della stanza

// c(x, y, w, h, terms, extra): terms come { F: [.2, 'b'] }
const c = (x, y, w, h, terms, extra = {}) => {
  const t = {};
  Object.keys(terms).forEach(k => (t[k] = { f: terms[k][0], s: terms[k][1] }));
  return { x, y, w, h, terms: t, ...extra };
};

import { selfPowered } from '../engine/v2/index.js';
import { TRILOCALE_LAYOUT_OF } from '../content/trilocale.js';

const BASE_ = {
  'c01-circuito-chiuso': {
    comps: {
      Q: c(20, 0, 380, 100, { N: [.12, 'b'], F: [.8, 'b'] }),
      L: c(190, 140, 210, 90, { B: [.25, 't'], A: [.75, 't'] }),
    },
    plates: {},
  },
  'c02-presa': {
    comps: {
      Q: c(20, 0, 380, 100, { F: [.2, 'b'], PE: [.5, 'b'], N: [.8, 'b'] }),
      P: c(110, 170, 200, 120, { L: [.2, 't'], PE: [.5, 't'], N: [.8, 't'] }),
    },
    plates: {},
  },
  'c03-interrotto': {
    comps: {
      Q: c(20, 0, 380, 100, { N: [.12, 'b'], F: [.8, 'b'] }),
      S: c(190, 140, 210, 120, { a: [.5, 't'], b: [.5, 'b'] }),
      L: c(190, 300, 210, 90, { B: [.25, 't'], A: [.75, 't'] }),
    },
    plates: { S: { x: 344, y: 122 } },
  },
  'c04-parallelo': {
    comps: {
      Q: c(20, 0, 380, 100, { N: [.12, 'b'], F: [.8, 'b'] }),
      S: c(190, 140, 210, 120, { a: [.5, 't'], b: [.5, 'b'] }),
      L1: c(20, 300, 185, 90, { B: [.25, 't'], A: [.75, 't'] }),
      L2: c(215, 300, 185, 90, { B: [.25, 't'], A: [.75, 't'] }),
    },
    plates: { S: { x: 344, y: 122 } },
  },
  'c05-deviato': {
    comps: {
      Q: c(20, 0, 380, 100, { N: [.12, 'b'], F: [.8, 'b'] }),
      D1: c(190, 140, 210, 115, { C: [.5, 't'], '1': [.28, 'b'], '2': [.72, 'b'] }),
      D2: c(190, 290, 210, 115, { '1': [.28, 't'], '2': [.72, 't'], C: [.5, 'b'] }, { flip: true }),
      L: c(190, 440, 210, 90, { B: [.25, 't'], A: [.75, 't'] }),
    },
    plates: { D1: { x: 56, y: 122 }, D2: { x: 344, y: 122 } },
  },
  'c06-invertito': {
    comps: {
      Q: c(20, 0, 380, 100, { N: [.12, 'b'], F: [.8, 'b'] }),
      D1: c(190, 140, 210, 112, { C: [.5, 't'], '1': [.28, 'b'], '2': [.72, 'b'] }),
      I: c(190, 286, 210, 112, { '1': [.28, 't'], '2': [.72, 't'], '3': [.28, 'b'], '4': [.72, 'b'] }),
      D2: c(190, 432, 210, 112, { '1': [.28, 't'], '2': [.72, 't'], C: [.5, 'b'] }, { flip: true }),
      L: c(190, 578, 210, 90, { B: [.25, 't'], A: [.75, 't'] }),
    },
    plates: { D1: { x: 56, y: 122 }, I: { x: 200, y: 122 }, D2: { x: 344, y: 122 } },
  },
};

const BASE = new Proxy(BASE_, { get: (o, k) => o[k] || o[TRILOCALE_LAYOUT_OF[k]] });

// Versione "dal contatore": contatore in alto, quadro sotto, il resto spostato piu' in basso.
function fullLayout(id) {
  const base = BASE[id];
  const earthThrough = id === 'c02-presa';
  const pos = earthThrough ? { F: .08, PE: .28, N: .48 } : { N: .08, F: .28, PE: .48 };
  const K = { x: 20, y: 0, w: 380, h: 96, terms: {} };
  const Q = { x: 20, y: 140, w: 380, h: 130, bx: .78, terms: {} };
  Object.keys(pos).forEach(k => {
    K.terms[k] = { f: pos[k], s: 'b' };
    Q.terms[k + 'i'] = { f: pos[k], s: 't' };
    if (k !== 'PE' || earthThrough) Q.terms[k] = { f: pos[k], s: 'b' };
  });
  const others = Object.keys(base.comps).filter(id => id !== 'Q');
  const shift = Q.y + Q.h + 44 - Math.min(...others.map(id => base.comps[id].y));
  const comps = { K, Q };
  others.forEach(id => (comps[id] = { ...base.comps[id], y: base.comps[id].y + shift }));
  return { comps, plates: base.plates };
}

/* ---------- livelli del motore v2: disposizione automatica ---------- */
// Per ogni tipo: [larghezza, altezza] e quali morsetti stanno in alto (t) e in basso (b). I morsetti non elencati vanno in alto.
const FULL = 380, HALF = 185;
const KIND = {
  quadro: [FULL, 100, null, ['L1', 'L2', 'L3', 'F', 'N', 'PE']],
  mt: [HALF, 160, ['1', 'N1'], ['2', 'N2']], rcd: [HALF, 160, ['1', 'N1'], ['2', 'N2']],
  mt3: [FULL, 120, ['1', '3', '5'], ['2', '4', '6']], sez: [FULL, 120, ['1', '3', '5'], ['2', '4', '6']],
  pb: [HALF, 110, ['3'], ['4']], pbnc: [HALF, 110, ['1'], ['2']], fungo: [HALF, 110, ['1'], ['2']],
  ri: [HALF, 130, ['A1', 'A2'], ['1', '2']], tmr: [HALF, 130, ['A1', 'A2'], ['1', '2']],
  gu: [HALF, 112, [], []],
  rel: [HALF, 150, ['A1', 'A2', '11'], ['12', '14']],
  km: [FULL, 190, ['A1', '1', '3', '5', '13', '21'], ['A2', '2', '4', '6', '14', '22']],
  ft: [FULL, 150, ['1', '3', '5', '95', '97'], ['2', '4', '6', '96', '98'], .3],
  fc: [HALF, 110, ['1', '3'], ['2', '4']], trafo: [FULL, 150, ['1', '2'], ['3', '4']],
  bell: [HALF, 110, ['1', '2'], []], spia: [HALF, 100, ['X1', 'X2'], []], lamp: [HALF, 100, ['B', 'A'], []],
  presa: [FULL, 130, ['L', 'PE', 'N'], []], motor3: [FULL, 130, ['U', 'V', 'W', 'PE'], []],
  sw: [HALF, 120, ['a'], ['b']], dev: [HALF, 115, ['C'], ['1', '2']], inv: [HALF, 112, ['1', '2'], ['3', '4']],
};
const spread = (n, a = .1, b = .88) => (n === 1 ? [.5] : n === 2 ? [.28, .72] : n === 3 ? [.2, .5, .8] : Array.from({ length: n }, (_, i) => a + (b - a) * i / (n - 1)));

export function autoLayout(level, cols = 1) {
  const comps = {};
  let y = 0, pending = null;
  const make = (c, x, y0) => {
    const [w, h, top, bot, lead] = KIND[c.type] || [FULL, 110, Object.keys(c.terms), []];
    const ids = Object.keys(c.terms);
    const t = top === null ? [] : ids.filter(i => (top || []).includes(i) || !(bot || []).includes(i));
    const b = top === null ? ids : ids.filter(i => (bot || []).includes(i));
    const terms = {};
    // l'ordine dei morsetti segue la tabella del tipo, per tenerli nella posizione abituale
    const order = (list, ref) => list.slice().sort((p, q) => (ref.indexOf(p) < 0 ? 99 : ref.indexOf(p)) - (ref.indexOf(q) < 0 ? 99 : ref.indexOf(q)));
    const tt = order(t, top || []), bb = order(b, bot || []);
    spread(tt.length, lead || .1).forEach((f, i) => (terms[tt[i]] = { f, s: 't' }));
    const fb = c.type === 'quadro' && !selfPowered(level) && bb.length <= 3 ? [.12, .38, .64].slice(0, bb.length) : spread(bb.length, lead || .1);   // a destra resta la levetta
    fb.forEach((f, i) => (terms[bb[i]] = { f, s: 'b' }));
    return { x, y: y0, w, h, terms };
  };
  const width = c => (KIND[c.type] || [FULL])[0];
  level.comps.forEach(c => {
    if (width(c) === HALF) {
      if (pending) {
        const g = make(c, 215, pending.y);
        comps[c.id] = g;
        y = pending.y + Math.max(pending.h, g.h) + 44;
        pending = null;
      } else {
        const g = make(c, 20, y);
        comps[c.id] = g;
        pending = g;
      }
    } else {
      if (pending) { y = pending.y + pending.h + 44; pending = null; }
      const g = make(c, 20, y);
      comps[c.id] = g;
      y += g.h + 44;
    }
  });
  if (cols > 1) {
    // seconda colonna: le righe dopo la meta' dell'altezza passano a destra, accanto alle prime
    const ids = level.comps.map(c => c.id);
    const total = Math.max(...ids.map(id => comps[id].y + comps[id].h));
    const cut = ids.find(id => comps[id].y >= total / 2 && comps[id].y > 0);
    if (cut) {
      const y0 = comps[cut].y, rest = ids.slice(ids.indexOf(cut));
      rest.forEach(id => { comps[id].x += 410; comps[id].y -= y0; });
    }
  }
  return { comps, plates: {} };
}

export function layoutFor(level, cols = 1) {
  if (level.engine === 2) return autoLayout(level, cols);
  return level.full ? fullLayout(level.id) : BASE[level.id];
}

// Componenti del modello con la geometria sopra: x, y, w, h, flip, bx, plate e, per ogni morsetto, f e s.
// Per il disegno e' piu' comodo avere tutto in un oggetto solo.
export function composeComps(level, cols = 1) {
  const layout = layoutFor(level, cols);
  return level.comps.map(c => {
    const g = layout.comps[c.id];
    const terms = {};
    Object.keys(c.terms).forEach(k => (terms[k] = { ...c.terms[k], f: g.terms[k].f, s: g.terms[k].s }));
    const o = { ...c, x: g.x, y: g.y, w: g.w, h: g.h, terms };
    if (g.flip) o.flip = true;
    if (g.bx !== undefined) o.bx = g.bx;
    if (c.where && layout.plates[c.id]) o.plate = { x: layout.plates[c.id].x, y: layout.plates[c.id].y, l: c.where };
    return o;
  });
}
