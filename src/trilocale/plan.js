// Pianta della casa in SVG: stanze, punti luce, comandi e linee dei circuiti (schema unifilare).
// E' la vista "Pianta" della scena e il ripiego dove non c'e' il 3D.
// I trattini sulle linee indicano il numero di conduttori del tratto (valori da far controllare al laboratorio).

import { HOUSE } from '../content/trilocale.js';
import { houseControls } from './house.js';

const K = 40, M = 16;                      // pixel per metro, margine
const px = v => Math.round(v * K + M);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Linee dei circuiti: punti in metri e numero di conduttori per tratto.
// Il tratto parte dal quadro (ingresso) e arriva alla lampada passando dai comandi.
const LINES = {
  bagno: { pts: [[0.1, 6.5], [0.1, 3.8], [3.3, 3.8], [3.3, 3.5], [3.3, 1.75], [4, 1.75]], cond: [2, 2, 2, 2, 3] },
  camera: { pts: [[0.1, 6.5], [0.1, 3.65], [5.4, 3.65], [5.4, 3.5], [5.4, 2.6], [8.9, 2.6], [9, 1.4], [7, 1.4], [7, 1.75]], cond: [2, 2, 2, 3, 3, 3, 2, 2] },
  corridoio: { pts: [[0.1, 6.5], [0.1, 4.25], [4, 4.25], [4, 5], [4, 4.6], [9, 4.6], [9, 4.25], [5, 4.25], [4.5, 4.25]], cond: [2, 3, 3, 2, 3, 3, 3, 2] },
};

function ticks(x1, y1, x2, y2, n) {
  // piccoli trattini obliqui a meta' del tratto
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  let o = '';
  for (let i = 0; i < n; i++) {
    const t = (i - (n - 1) / 2) * 4;
    o += `<line class="ptick" x1="${mx + t - 3}" y1="${my + 5}" x2="${mx + t + 3}" y2="${my - 5}"/>`;
  }
  return o;
}

/**
 * @param {{rooms: object}} house   risultato di houseState
 * @param {{select?: string}} ui    circuito selezionato (id) per evidenziarlo
 */
export function planHTML(house, ui = {}) {
  const W = px(HOUSE.size.w) + M, H = px(HOUSE.size.d) + M;
  let o = `<svg class="plan" viewBox="0 0 ${W} ${H}" role="img" aria-label="Pianta della casa">`;
  HOUSE.rooms.forEach(r => {
    const st = house.rooms[r.id] || {};
    o += `<g class="proom${st.lit ? ' lit' : ''}${ui.select && st.circuit === ui.select ? ' sel' : ''}" data-room="${r.id}"><rect x="${px(r.x)}" y="${px(r.z)}" width="${r.w * K}" height="${r.d * K}"/><text class="pname" x="${px(r.x) + 6}" y="${px(r.z + r.d) - 6}">${esc(r.name)}</text></g>`;
  });
  Object.keys(LINES).forEach(id => {
    const L = LINES[id];
    for (let i = 0; i < L.pts.length - 1; i++) {
      const [x1, y1] = L.pts[i].map(px), [x2, y2] = L.pts[i + 1].map(px);
      o += `<line class="pline" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>${ticks(x1, y1, x2, y2, L.cond[i])}`;
    }
  });
  HOUSE.rooms.filter(r => r.lamp).forEach(r => {
    const [x, y] = r.lamp.map(px), lit = house.rooms[r.id] && house.rooms[r.id].lit;
    o += `<g class="plamp${lit ? ' lit' : ''}"><circle cx="${x}" cy="${y}" r="8"/><path d="M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x + 5} ${y - 5} L${x - 5} ${y + 5}"/></g>`;
  });
  houseControls().forEach(c => {
    o += `<g class="pctl" data-circuit="${c.circuit}" data-ctl="${c.id}"><rect x="${px(c.x) - 6}" y="${px(c.z) - 6}" width="12" height="12" rx="2"/><title>${esc(c.label)}</title></g>`;
  });
  const b = HOUSE.breaker;
  o += `<g class="pbrk" data-breaker="1"><rect x="${px(b.x) - 9}" y="${px(b.z) - 9}" width="18" height="18" rx="3"/><text x="${px(b.x)}" y="${px(b.z) + 4}" text-anchor="middle">Q</text></g>`;
  return o + '</svg>';
}
