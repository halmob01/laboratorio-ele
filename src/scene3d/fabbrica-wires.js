// Fili della cella della fabbrica nella scena: dal morsetto del banco al punto 3D, e il percorso di ogni filo.
// Funzioni pure (niente three.js), come officina-wires.js. Coordinate in metri del capannone (capannone.js): armadio sulla
// parete di fondo (x 2,5-3,5), cella con centro in CELL, pulsantiera davanti alla portella; i fili che escono dall'armadio
// salgono alla passerella lungo la parete e scendono sopra il dispositivo.

import { TRAY_Y, TRAY_Z } from './officina-wires.js';

export const CELL_C = { x: 6.0, z: 3.4 };                 // centro della cella: sotto la fila di plafoniere accesa di notte
export const STATION = { x: 6.4, z: 5.5 };                // pulsantiera (davanti alla portella, a destra)
export const HMI_AT = { x: 4.0, z: 5.3 };                 // pannello operatore (a sinistra della portella)
export const KS_AT = { x: 3.2, y: 1.28 };                 // relè di sicurezza sulla guida bassa dell'armadio
export const PLC_AT = { x: 2.82, y: 1.28 };               // PLC accanto
export const LAMP_AT = [3.43, 2.14, 0.13];                // spia "robot alimentato" in cima all'armadio
const CAB_Z = 0.21;

// posizioni nella cella (pezzi di parts-cella.js e parts-reparto.js, con la cella in CELL_C)
const XP_AT = [CELL_C.x - 1.3, 2.08, CELL_C.z + 0.2];
const XL_AT = [CELL_C.x + 1.3, 2.08, CELL_C.z + 0.2];
const BEAM_AT = [CELL_C.x, 2.42, CELL_C.z];              // catena portacavi del carrello: ZU e ZD viaggiano con lui
export const PR_AT = [CELL_C.x - 1.1 + 0.32, 0.95, CELL_C.z + 0.22];     // sensore "pezzo pronto" accanto al nastro di arrivo
export const DOOR_SW = [CELL_C.x - 0.105, 1.25, CELL_C.z + 1.245];      // interruttore di sicurezza della portella

// zone in campo: [x, z] della discesa dalla passerella
const FIELD = {
  st: [STATION.x, STATION.z - 0.1],
  door: [DOOR_SW[0], DOOR_SW[2]],
  xp: [XP_AT[0], XP_AT[2]], xl: [XL_AT[0], XL_AT[2]],
  beam: [BEAM_AT[0], BEAM_AT[2]],
  pr: [PR_AT[0], PR_AT[2]],
};

const row = (cx, y, names, step) => Object.fromEntries(names.map((n, i) => [n, [cx + (i - (names.length - 1) / 2) * step, y]]));
const KM_T = { A1: [2.88, 1.86], A2: [3.12, 1.86], 1: [2.95, 2.0], 2: [2.95, 1.68], 13: [2.88, 1.76], 14: [3.12, 1.76], 21: [3.05, 2.0], 22: [3.05, 1.68] };
const KS_T = { ...row(KS_AT.x, KS_AT.y + 0.08, ['A1', 'S12', 'S22', 'R', '13', '23'], 0.018), ...row(KS_AT.x, KS_AT.y - 0.08, ['A2', '14', '24'], 0.03) };
const PLC_T = { ...row(PLC_AT.x, PLC_AT.y + 0.08, ['A1', 'A2', 'IC', 'I0', 'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7'], 0.03), ...row(PLC_AT.x, PLC_AT.y - 0.08, ['Q0A', 'Q0B', 'Q1A', 'Q1B', 'Q2A', 'Q2B', 'Q3A', 'Q3B'], 0.04) };
const ST_Y = { SB1: 1.75, SB0: 1.75, E: 1.5, SBR: 1.62, HC: 1.98 };
const ST_X = { SB1: -0.09, SB0: 0.09, E: 0, SBR: 0.16, HC: 0 };

// Morsetto -> { p: [x, y, z], zone }. zone 'cab' nell'armadio, altrimenti la zona in campo.
export function anchorOf(term) {
  const [id, t] = term.split('.');
  const pair = { 1: -0.012, 3: -0.012, X1: -0.012, A: -0.012, 2: 0.012, 4: 0.012, X2: 0.012, B: 0.012 }[t];
  if (id === 'Q') { const i = ['F', 'N', 'PE'].indexOf(t); return i < 0 ? null : { p: [2.6 + i * 0.07, 2.16, CAB_Z], zone: 'cab' }; }
  if (id === 'KM' && KM_T[t]) return { p: [KM_T[t][0], KM_T[t][1], CAB_Z], zone: 'cab' };
  if (id === 'KS' && KS_T[t]) return { p: [KS_T[t][0], KS_T[t][1], CAB_Z], zone: 'cab' };
  if (id === 'PLC' && PLC_T[t]) return { p: [PLC_T[t][0], PLC_T[t][1], CAB_Z], zone: 'cab' };
  if (id === 'L' && pair !== undefined) return { p: [LAMP_AT[0] + pair, LAMP_AT[1], LAMP_AT[2] + 0.05], zone: 'cab' };
  if (ST_Y[id] !== undefined && pair !== undefined) return { p: [STATION.x + ST_X[id] + pair, ST_Y[id], STATION.z - 0.1], zone: 'st' };
  if (id === 'P' && pair !== undefined) return { p: [DOOR_SW[0] + pair, DOOR_SW[1] + (t > '2' ? -0.03 : 0.03), DOOR_SW[2] - 0.02], zone: 'door' };
  if (pair === undefined) return null;
  if (id === 'XP') return { p: [XP_AT[0] + pair, XP_AT[1] + 0.05, XP_AT[2]], zone: 'xp' };
  if (id === 'XL') return { p: [XL_AT[0] + pair, XL_AT[1] + 0.05, XL_AT[2]], zone: 'xl' };
  if (id === 'ZU' || id === 'ZD') return { p: [BEAM_AT[0] + pair + (id === 'ZD' ? 0.05 : 0), BEAM_AT[1], BEAM_AT[2]], zone: 'beam' };
  if (id === 'PR') return { p: [PR_AT[0] + pair, PR_AT[1] + 0.06, PR_AT[2]], zone: 'pr' };
  return null;
}

// dalla passerella (alla x del dispositivo) fino al morsetto
function legOf(F, lane, y) {
  const [fx, fz] = FIELD[F.zone];
  return [[fx + lane, y, TRAY_Z + lane], [fx + lane, y, fz + lane * 0.5], [F.p[0], y, fz + lane * 0.5], F.p];
}

/** Percorso di un filo, ad angoli retti, su una corsia sua (i). null se un morsetto non ha posto nella scena. */
export function routeOf(a, b, i = 0) {
  const A = anchorOf(a), B = anchorOf(b);
  if (!A || !B) return null;
  const lane = ((i % 11) - 5) * 0.018;
  const zf = CAB_Z + 0.03 + Math.abs(lane) * 0.5;
  const y = TRAY_Y + lane * 0.3;
  if (A.zone === 'cab' && B.zone === 'cab') {
    const yb = Math.min(A.p[1], B.p[1]) - 0.05 - (i % 5) * 0.02;
    return [A.p, [A.p[0], A.p[1], zf], [A.p[0], yb, zf], [B.p[0], yb, zf], [B.p[0], B.p[1], zf], B.p];
  }
  if (A.zone !== 'cab' && B.zone !== 'cab') {
    if (A.zone === B.zone) { const yb = Math.max(A.p[1], B.p[1]) + 0.06 + (i % 3) * 0.02; return [A.p, [A.p[0], yb, A.p[2] - 0.03], [B.p[0], yb, B.p[2] - 0.03], B.p]; }
    return [...legOf(A, lane, y).reverse(), ...legOf(B, lane, y)];
  }
  const [C, F] = A.zone === 'cab' ? [A, B] : [B, A];
  const path = [C.p, [C.p[0], C.p[1], zf], [C.p[0], y, zf], [C.p[0], y, TRAY_Z + lane], ...legOf(F, lane, y)];
  return A.zone === 'cab' ? path : path.reverse();
}

/**
 * I fili del banco nella scena con il loro stato (in tensione, percorsi da corrente).
 * @returns {{id:string, pts:number[][], color:string, live:boolean, current:boolean}[]}
 */
export function fabbricaWires(wires, flow) {
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
