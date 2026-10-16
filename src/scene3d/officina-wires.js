// Fili dell'officina nella scena: dal morsetto del banco al punto 3D, e il percorso di ogni filo.
// Funzioni pure (niente three.js): la scena le usa per disegnare i fili veri del banco, compreso quello che scavalca il termico.
// Coordinate in metri, come in officina.js: quadro sulla parete di fondo (x 2.6-3.4, z 0.1), pulsantiera a (6.4, 5.5),
// finecorsa in fondo al nastro (8.68, 3.92), motore a (8.6, 4.35). I fili che escono dal quadro salgono alla passerella.

export const TRAY_Y = 3.05;                 // passerella sospesa lungo la parete di fondo
export const TRAY_Z = 0.4;
const CAB_Z = 0.21;                         // davanti ai moduli del quadro
const TOP = 2.0, BOT = 1.68;                // file dei morsetti alti (1, 3, 5) e bassi (2, 4, 6) dei moduli
const MOD = { QM: 2.7, KM: 3.0, FR: 3.3 };
const POLE = { 1: -0.05, 2: -0.05, 3: 0, 4: 0, 5: 0.05, 6: 0.05 };

// Morsetto -> { p: [x, y, z], zone }. zone: 'cab' nel quadro, altrimenti il nome del dispositivo in campo.
export function anchorOf(term) {
  const [id, t] = term.split('.');
  if (id === 'Q') {
    const i = ['L1', 'L2', 'L3', 'N', 'PE'].indexOf(t);
    return i < 0 ? null : { p: [2.58 + i * 0.07, 2.16, CAB_Z], zone: 'cab' };
  }
  if (MOD[id] && POLE[t] !== undefined) return { p: [MOD[id] + POLE[t], Number(t) % 2 ? TOP : BOT, CAB_Z], zone: 'cab' };
  if (id === 'KM') {
    const k = { A1: [2.88, 1.86], A2: [3.12, 1.86], 13: [2.88, 1.76], 14: [3.12, 1.76] }[t];
    return k ? { p: [k[0], k[1], CAB_Z], zone: 'cab' } : null;
  }
  if (id === 'FR') {
    const k = { 95: [3.25, 1.6], 96: [3.31, 1.6], 97: [3.37, 1.6], 98: [3.43, 1.6] }[t];
    return k ? { p: [k[0], k[1], CAB_Z], zone: 'cab' } : null;
  }
  // pulsantiera (dietro la targa gialla): Marcia a sinistra, Arresto a destra, fungo sotto; la spia in cima
  const st = { SB1: [6.31, 1.75], SB0: [6.49, 1.75], SBE: [6.4, 1.5], H: [6.4, 2.0] }[id];
  if (st) {
    const k = { 1: -0.02, 3: -0.02, X1: -0.02, 2: 0.02, 4: 0.02, X2: 0.02 }[t];
    return k === undefined ? null : { p: [st[0] + k, st[1], 5.4], zone: 'st' };
  }
  if (id === 'FC') {
    const k = { 1: -0.03, 2: -0.01, 3: 0.01, 4: 0.03 }[t];
    return k === undefined ? null : { p: [8.68 + k, 1.0, 3.84], zone: 'fc' };
  }
  if (id === 'M') {
    const k = { U: -0.04, V: 0, W: 0.04, PE: 0.08 }[t];
    return k === undefined ? null : { p: [8.6 + k, 0.95, 4.37], zone: 'mot' };
  }
  return null;
}

// Dal quadro alla passerella e poi al dispositivo: discesa sopra il dispositivo, alla sua x e z.
const FIELD = { st: [6.4, 5.4], fc: [8.68, 3.84], mot: [8.6, 4.37] };

/**
 * Percorso di un filo del banco: punti [x, y, z] ad angoli retti, su una corsia sua (i) per non sovrapporsi agli altri.
 * @returns {number[][]|null} null se un morsetto non ha posto nella scena
 */
export function routeOf(a, b, i = 0) {
  const A = anchorOf(a), B = anchorOf(b);
  if (!A || !B) return null;
  const lane = ((i % 9) - 4) * 0.022;
  const zf = CAB_Z + 0.03 + Math.abs(lane) * 0.6;
  if (A.zone === 'cab' && B.zone === 'cab') {
    // nel quadro: in avanti, poi su o giu' fino alla quota di corsia, di lato, e di nuovo al morsetto
    const y = Math.min(A.p[1], B.p[1]) - 0.06 - (i % 4) * 0.025;
    return [A.p, [A.p[0], A.p[1], zf], [A.p[0], y, zf], [B.p[0], y, zf], [B.p[0], B.p[1], zf], B.p];
  }
  const y = TRAY_Y + lane * 0.3;
  if (A.zone !== 'cab' && B.zone !== 'cab') {
    // tra due morsetti dello stesso dispositivo (per esempio tra i pulsanti): un ponticello poco sopra
    if (A.zone === B.zone) { const yb = Math.max(A.p[1], B.p[1]) + 0.08 + (i % 3) * 0.03; return [A.p, [A.p[0], yb, A.p[2] - 0.03], [B.p[0], yb, B.p[2] - 0.03], B.p]; }
    // tra due dispositivi in campo: su alla passerella, lungo la passerella, giu'
    return [...legOf(A, lane, y).reverse(), ...legOf(B, lane, y)];
  }
  // dal quadro: in avanti, su fino alla passerella, lungo la parete, poi sopra il dispositivo e giu'
  const [C, F] = A.zone === 'cab' ? [A, B] : [B, A];
  const path = [C.p, [C.p[0], C.p[1], zf], [C.p[0], y, zf], [C.p[0], y, TRAY_Z + lane], ...legOf(F, lane, y)];
  return A.zone === 'cab' ? path : path.reverse();
}
// dalla passerella (alla x del dispositivo) fino al morsetto del dispositivo
function legOf(F, lane, y) {
  const fx = FIELD[F.zone][0] + lane;
  return [[fx, y, TRAY_Z + lane], [fx, y, F.p[2]], [F.p[0], y, F.p[2]], F.p];
}

/**
 * I fili del banco nella scena, con il loro stato: in tensione (fase), percorsi da corrente.
 * @param {{id, a, b, c}[]} wires   fili del banco (snapshot.wires)
 * @param {{wires: Record<string, {net, current}>}} flow   snapshot.flow
 * @returns {{id:string, pts:number[][], color:string, live:boolean, current:boolean}[]}
 */
export function officinaWires(wires, flow) {
  const out = [];
  (wires || []).forEach((w, i) => {
    const pts = routeOf(w.a, w.b, i);
    if (!pts) return;
    const f = (flow && flow.wires && flow.wires[w.id]) || {};
    const current = !!f.current;
    out.push({ id: String(w.id) + ':' + w.a + '-' + w.b, pts, color: w.c, live: f.net === 'fase' || (f.net === 'neutro' && current), current });
  });
  return out;
}
