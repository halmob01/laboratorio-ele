// Stato della casa: per ogni stanza se la luce e' accesa, calcolato dai circuiti della sessione.
// Funzione pura: non conosce ne' la pagina ne' la scena 3D.
//
// Regola: nel circuito aperto la lampada e' accesa se il quadro e' acceso e il circuito la alimenta.
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
    const lit = p.open ? p.power && p.lit : on && p.passed && p.lit;
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
