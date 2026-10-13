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

export function layoutFor(level) {
  return level.full ? fullLayout(level.id) : BASE[level.id];
}

// Componenti del modello con la geometria sopra: x, y, w, h, flip, bx, plate e, per ogni morsetto, f e s.
// Per il disegno e' piu' comodo avere tutto in un oggetto solo.
export function composeComps(level) {
  const layout = layoutFor(level);
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
