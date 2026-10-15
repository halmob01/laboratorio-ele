// Stato della casa: per ogni stanza se la luce e' accesa, calcolato dai circuiti della sessione.
// Funzione pura: non conosce ne' la pagina ne' la scena 3D.
//
// Regola: nel circuito aperto la lampada e' accesa se il quadro e' acceso e il circuito la alimenta (o se e' gia' verificato e il quadro generale non e' stato spento da te).
// Negli altri circuiti, che non si vedono "dal vivo" senza aprirli, la luce e' accesa se il circuito
// e' stato verificato e con i comandi nell'ultima posizione lo alimenta. Un circuito mai verificato resta spento.

import { HOUSE } from '../content/trilocale.js';

/**
 * @param {{ peek: (id: string) => object | null }} session
 * @param {boolean} [on]   quadro generale acceso (vale per i circuiti non aperti)
 * @returns {{ rooms: Record<string, {lit: boolean, state: 'da cablare'|'in corso'|'funziona', controls: object, circuit: string|null}> }}
 */
export function houseState(session, on = true) {
  const rooms = {};
  HOUSE.rooms.forEach(r => {
    if (!r.circuit) { rooms[r.id] = { lit: false, state: null, controls: {}, circuit: null }; return; }
    const p = session.peek(r.circuit);
    if (!p) { rooms[r.id] = { lit: false, state: 'da cablare', controls: {}, circuit: r.circuit }; return; }
    // Circuito aperto: con la levetta del suo quadro alzata vale lo stato attuale; se il circuito e' gia' verificato e la levetta
    // non e' stata toccata (riaprendolo la sessione riparte con la levetta giu') la casa resta alimentata come per gli altri.
    const lit = p.open && p.power ? p.lit : on && p.passed && p.lit;
    const state = p.passed ? 'funziona' : p.wired > 0 ? 'in corso' : 'da cablare';
    rooms[r.id] = { lit, state, controls: p.controls, circuit: r.circuit, open: p.open };
  });
  return { rooms };
}

// Tutti i comandi con la posizione sul muro e la stanza a cui appartengono: la scena e la pianta li disegnano.
export function houseControls() {
  const out = [];
  HOUSE.rooms.filter(r => r.circuit).forEach(r => {
    const map = HOUSE.controls[r.circuit] || {};
    Object.keys(map).forEach(id => out.push({ room: r.id, circuit: r.circuit, id, ...map[id] }));
  });
  return out;
}

// ---- fili del banco nella casa 3D ----
// Ogni componente del circuito ha un punto nella casa: il quadro all'ingresso, le placche sui muri, la lampada al soffitto.
// Un filo del banco diventa un percorso: sale dal primo punto sopra il taglio dei muri, corre lungo x e poi lungo z, scende al secondo.
const FACE = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] };
const RUN_Y = 1.52;          // appena sopra il taglio dei muri (1.45): dall'alto i fili si leggono nella sezione
function anchorsOf(circuit) {
  const bk = HOUSE.breaker;
  const out = { Q: [bk.x + 0.09, 1.15, bk.z] };
  const room = HOUSE.rooms.find(r => r.circuit === circuit);
  if (room && room.lamp) out.L = [room.lamp[0], 2.0, room.lamp[1]];
  const ctl = HOUSE.controls[circuit] || {};
  Object.keys(ctl).forEach(id => { const c = ctl[id], d = FACE[c.face]; out[id] = [c.x + d[0] * 0.09, 1.1, c.z + d[1] * 0.09]; });
  return out;
}
const TERM_SHIFT = { a: -1, b: 1, F: -1, N: 1, C: 0, '1': -1, '2': 1, '3': -1, '4': 1, A: -1, B: 1 };

/**
 * @param {string} circuit  id del livello (t01-bagno ...)
 * @param {{id:number, a:string, b:string, c:string}[]} wires  fili del banco
 * @returns {{id:string, pts:number[][], color:string}[]}
 */
export function wires3D(circuit, wires) {
  const A = anchorsOf(circuit);
  const at = t => {
    const [comp, term] = t.split('.');
    const p = A[comp];
    if (!p) return null;
    const s = (TERM_SHIFT[term] || 0) * 0.035;
    return [p[0] + s, p[1], p[2] + s];
  };
  const out = [];
  wires.forEach((w, i) => {
    const a = at(w.a), b = at(w.b);
    if (!a || !b) return;
    const lane = ((i % 6) - 2.5) * 0.045;          // fili diversi su corsie diverse, per non sovrapporsi
    const y = RUN_Y + (i % 3) * 0.02;
    out.push({
      id: String(w.id),
      color: w.c,
      pts: [a, [a[0], y, a[2]], [a[0] + lane, y, a[2] + lane], [b[0] + lane, y, a[2] + lane], [b[0] + lane, y, b[2] + lane], [b[0], y, b[2]], b],
    });
  });
  return out;
}

// Punti dove la cornice mette i segnaposti: la lampada di ogni stanza, le placche di ogni circuito.
export function roomPoint(roomId) { const r = HOUSE.rooms.find(x => x.id === roomId); return r && r.lamp ? [r.lamp[0], 1.7, r.lamp[1]] : null; }
export function controlPoints(circuit) {
  const ctl = HOUSE.controls[circuit] || {};
  return Object.keys(ctl).map(id => { const c = ctl[id], d = FACE[c.face]; return { id, label: c.label, pt: [c.x + d[0] * 0.09, 1.35, c.z + d[1] * 0.09] }; });
}
