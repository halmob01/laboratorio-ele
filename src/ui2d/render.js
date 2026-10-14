// Disegno 2D (SVG e HTML) a partire da un'istantanea della sessione.
// Qui non c'e' nessuna regola elettrica: si legge solo lo stato dal motore
// (s.power, s.trip, s.lit, s.potential(morsetto), s.controlStates, s.wires, ...).
//
// `comps` sono i componenti del modello con la geometria del layout (vedi layout.js).

import { WIRE_COLORS } from '../engine/index.js';
import { COLOR_NAMES, describeEvaluation, sessionMessage, flowMessage } from '../content/it.js';
import { WIRE_STYLE } from './palette.js';

/* ---------- geometria dei morsetti e dei fili ---------- */
export function termPosOf(c, id) {
  const t = c.terms[id];
  return { x: c.x + c.w * t.f, y: t.s === 't' ? c.y + 22 : c.y + c.h - 22, s: t.s };
}
export function termPos(comps, tid) {
  const [cid, id] = tid.split('.');
  return termPosOf(comps.find(k => k.id === cid), id);
}
export function wirePath(p1, p2) {
  if (p1.s === 'b' && p2.s === 't' && p2.y - p1.y > 200) {
    const yv = p2.y - 40;
    return `M${p1.x} ${p1.y} L${p1.x} ${yv} C${p1.x} ${yv + 26} ${p2.x} ${p2.y - 40} ${p2.x} ${p2.y}`;
  }
  if (p2.s === 'b' && p1.s === 't' && p1.y - p2.y > 200) return wirePath(p2, p1);
  const s1 = p1.s === 't' ? -1 : 1, s2 = p2.s === 't' ? -1 : 1, d = Math.max(36, Math.abs(p2.y - p1.y) * .45);
  return `M${p1.x} ${p1.y} C${p1.x} ${p1.y + s1 * d} ${p2.x} ${p2.y + s2 * d} ${p2.x} ${p2.y}`;
}

/* ---------- livelli e palette ---------- */
export function paletteHTML(col, level) {
  return ((level && level.palette) || WIRE_COLORS).map(k => {
    const c = WIRE_STYLE[k];
    const bg = c.dash ? `repeating-linear-gradient(90deg,${c.base} 0 6px,${c.dash} 6px 12px)` : c.base;
    return `<button class="chip" data-col="${k}" aria-pressed="${k === col}"><span class="sw" style="background:${bg}"></span>${COLOR_NAMES[k]}</button>`;
  }).join('');
}

/* ---------- stanza ---------- */
export function roomHTML(level, comps) {
  let s = '';
  s += `<defs><radialGradient id="glow"><stop offset="0" stop-color="#FFE9A8" stop-opacity=".95"/><stop offset=".45" stop-color="#FFD25E" stop-opacity=".38"/><stop offset="1" stop-color="#FFD25E" stop-opacity="0"/></radialGradient></defs>`;
  s += `<rect class="wall" x="0" y="0" width="400" height="196"/><rect class="floor" x="0" y="196" width="400" height="54"/><rect class="skirt" x="0" y="190" width="400" height="8"/>`;
  let gx = 200, gy = 58;
  if (level.room === 'tavolo') {
    gx = 135; gy = 108;
    s += `<rect x="52" y="172" width="170" height="10" rx="2" fill="var(--table)"/><rect x="62" y="182" width="8" height="52" fill="var(--table)"/><rect x="204" y="182" width="8" height="52" fill="var(--table)"/>`;
  }
  s += `<rect id="night" class="night" x="0" y="0" width="400" height="250" opacity=".66"/>`;
  s += `<circle id="glow" class="glowc" cx="${gx}" cy="${gy}" r="${level.room === 'tavolo' ? 150 : 190}" fill="url(#glow)" opacity="0"/>`;
  if (level.room === 'tavolo') {
    s += `<path d="M135 170 C150 215 232 222 262 156" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;
    s += `<rect x="262" y="146" width="22" height="16" rx="3" fill="#222"/>`;
    s += `<ellipse cx="135" cy="170" rx="22" ry="5" fill="var(--ink)" opacity=".8"/><rect x="132" y="116" width="6" height="54" fill="var(--ink)" opacity=".8"/>`;
    s += `<circle id="bulb" class="bulb" cx="135" cy="108" r="10"/>`;
    s += `<path class="shade" d="M112 78 H158 L170 116 H100 Z"/>`;
    s += `<rect class="plate" x="284" y="124" width="56" height="52" rx="6"/>`;
    [[300, 150], [312, 150], [324, 150]].forEach(([x, y], i) => { s += `<circle class="hole" cx="${x}" cy="${y}" r="${i === 1 ? 3.2 : 3.8}"/>`; });
    s += `<text x="312" y="196" text-anchor="middle" style="font:500 12px 'Barlow',sans-serif;fill:#EAF0F8">Presa</text>`;
  } else {
    if (!(level.loads && level.loads.length > 1)) {
      s += `<line x1="200" y1="0" x2="200" y2="40" stroke="var(--ink)" stroke-width="2.5" opacity=".7"/>`;
      s += `<rect x="194" y="38" width="12" height="12" rx="2" fill="var(--ink)" opacity=".75"/>`;
    }
    if (level.loads && level.loads.length > 1) {
      // piu' lampade: una per carico, affiancate (il primo filo gia' disegnato e' quello della prima)
      level.loads.forEach((_, i) => {
        const x = level.loads.length === 2 ? 130 + i * 140 : 200;
        s += `<line x1="${x}" y1="0" x2="${x}" y2="40" stroke="var(--ink)" stroke-width="2.5" opacity=".7"/><rect x="${x - 6}" y="38" width="12" height="12" rx="2" fill="var(--ink)" opacity=".75"/>`;
        s += `<circle id="bulb${i}" class="bulb" cx="${x}" cy="62" r="13"/><path class="shade" d="M${x - 32} 52 Q${x} 12 ${x + 32} 52 Z"/>`;
      });
    } else {
      s += `<circle id="bulb" class="bulb" cx="200" cy="62" r="13"/>`;
      s += `<path class="shade" d="M168 52 Q200 12 232 52 Z"/>`;
    }
    comps.filter(c => c.plate).forEach(c => {
      const p = c.plate;
      s += `<g class="pl" data-ctl="${c.id}" role="button" tabindex="0" aria-label="${c.short}, premi per cambiare"><rect x="${p.x - 24}" y="${p.y - 38}" width="48" height="${76 + 20}" fill="transparent"/><rect class="plate" x="${p.x - 20}" y="${p.y - 32}" width="40" height="64" rx="6"/><rect id="rt-${c.id}" class="rk hi" x="${p.x - 13}" y="${p.y - 24}" width="26" height="24" rx="3"/><rect id="rb-${c.id}" class="rk lo" x="${p.x - 13}" y="${p.y}" width="26" height="24" rx="3"/><rect x="${p.x - p.l.length * 3.6 - 7}" y="${p.y + 38}" width="${p.l.length * 7.2 + 14}" height="19" rx="9" fill="rgba(10,16,24,.62)"/><text x="${p.x}" y="${p.y + 52}" text-anchor="middle">${p.l}</text></g>`;
    });
  }
  return s;
}
export function roomViewBox(level) {
  return level.room === 'tavolo' ? '0 50 400 190' : '0 0 400 190';
}
// La stessa stanza, ferma, per le pagine della lezione: ids con prefisso per non confondersi con quella del livello.
export function roomStaticHTML(level, comps, lit) {
  let h = roomHTML(level, comps)
    .replace(/id="glow"/g, 'id="sglow"').replace(/url\(#glow\)/g, 'url(#sglow)')
    .replace(/ tabindex="0"/g, '').replace(/id="night"/g, 'id="snight"').replace(/id="bulb(\d?)"/g, 'id="sbulb$1"');
  if (lit) {
    h = h.replace('class="night" x="0" y="0" width="400" height="250" opacity=".66"', 'class="night" x="0" y="0" width="400" height="250" opacity="0"')
      .replace(/(class="glowc"[^>]*?)opacity="0"/, '$1opacity="1"')
      .replace(/class="bulb"/g, 'class="bulb on"');
  }
  return h;
}
// Aggiorna la scena (luce, posizione dei comandi) senza ridisegnarla.
export function updateRoom(root, s, comps) {
  const n = root.querySelector('#night'), g = root.querySelector('#glow'), b = root.querySelector('#bulb');
  const lit = s.litLoads && s.litLoads.length > 1 ? s.litLoads.some(Boolean) : s.lit;
  if (n) n.setAttribute('opacity', lit ? '0' : '.66');
  if (g) g.setAttribute('opacity', lit ? '1' : '0');
  if (b) b.setAttribute('class', 'bulb' + (lit ? ' on' : ''));
  (s.litLoads || []).forEach((on, i) => { const x = root.querySelector('#bulb' + i); if (x) x.setAttribute('class', 'bulb' + (on ? ' on' : '')); });
  comps.filter(c => c.plate).forEach(c => {
    const t = root.querySelector('#rt-' + c.id), bt = root.querySelector('#rb-' + c.id), st = s.controlStates[c.id] ? 1 : 0;
    if (t) t.setAttribute('class', 'rk ' + (st ? 'hi' : 'lo'));
    if (bt) bt.setAttribute('class', 'rk ' + (st ? 'lo' : 'hi'));
  });
}

/* ---------- banco di lavoro ---------- */
export const kwhText = kwh => kwh.toFixed(1).padStart(6, '0').replace('.', ',') + ' kWh';
const ln = (x1, y1, x2, y2, live, off) => `<line class="cl${live ? ' on' : ''}${off ? ' off' : ''}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
const dot = (x, y) => `<circle class="ct" cx="${x}" cy="${y}" r="4"/>`;

// Disegno interno di un componente (lo schema sul banco).
function schem(c, s, live, lit, ui) {
  const w = c.w, h = c.h, L = t => live(c.id + '.' + t), st = s.controlStates[c.id] ? 1 : 0;
  let o = '';
  if (c.type === 'quadro') {
    const bx = w * (c.bx || .5), tr = s.power ? 'on' : s.trip ? 'trip' : '';
    const ky = s.power ? 16 : s.trip ? 27 : 38;
    const stt = s.power ? 'ACCESO' : s.trip ? 'SCATTATO' : 'SPENTO';
    if (c.full) { [['Fi', 'F'], ['Ni', 'N'], ['PEi', 'PE']].forEach(([i, k]) => { if (c.terms[i] && c.terms[k]) { const x = w * c.terms[i].f; o += ln(x, 22, x, h - 22, L(i)); } }); }
    o += `<g class="brk" data-q="1" role="button" tabindex="0" aria-label="Magnetotermico"><rect x="${bx - 34}" y="6" width="68" height="56" fill="transparent"/><rect class="hs" x="${bx - 26}" y="8" width="52" height="50" rx="5"/><rect class="slotr" x="${bx - 8}" y="13" width="16" height="40" rx="3"/><rect class="knob" x="${bx - 10}" y="${ky}" width="20" height="16" rx="3"/><circle class="led ${tr}" cx="${bx + 18}" cy="16" r="3.2"/></g>`;
    if (c.full) o += `<text class="lbl" x="${bx}" y="80" text-anchor="middle" style="font-size:10px;fill:var(--ink2)">${stt}</text><text class="lbl" x="${bx}" y="94" text-anchor="middle" style="font-size:10px;fill:var(--ink2)">MAGNETOTERMICO</text>`;
    else o += `<text class="lbl" x="${bx - 60}" y="38" text-anchor="end" style="font-size:10px;fill:var(--ink2)">${stt}</text>`;
  }
  if (c.type === 'cont') {
    Object.keys(c.terms).forEach(k => { const x = w * c.terms[k].f; o += ln(x, 32, x, h - 22, L(k)); });
    o += `<text class="lbl" x="${w - 14}" y="17" text-anchor="end" style="font-size:10px;fill:var(--ink2)">DALLA RETE 230 V</text>`;
    o += `<rect x="${w * .58}" y="28" width="${w * .36}" height="40" rx="5" fill="#16231C" stroke="var(--comp-edge)"/><text id="kwh" x="${w * .76}" y="54" text-anchor="middle" style="font:500 15px 'IBM Plex Mono',monospace;fill:#8FE3AE">${kwhText(ui.kwh)}</text><circle class="led ${s.power ? 'on blink' : ''}" cx="${w * .58 + 10}" cy="38" r="3"/>`;
  }
  if (c.type === 'sw') {
    const x = w / 2;
    o += ln(x, 22, x, 52, L('a')) + ln(x, 74, x, h - 22, L('b'));
    o += dot(x, 52) + dot(x, 74);
    o += st ? ln(x, 52, x, 74, L('a') && L('b')) : ln(x, 52, x + 16, 66, false);
  }
  if (c.type === 'dev') {
    const g = c.flip ? `transform="translate(0,${h}) scale(1,-1)"` : '';
    const y2 = h - 22;
    o += `<g ${g}>` + ln(w / 2, 22, w / 2, 46, L('C')) + ln(w * .28, 72, w * .28, y2, L('1')) + ln(w * .72, 72, w * .72, y2, L('2')) + dot(w / 2, 46) + dot(w * .28, 72) + dot(w * .72, 72);
    const tx = st ? w * .72 : w * .28, tl = L('C') && L(st ? '2' : '1');
    o += ln(w / 2, 46, tx, 72, tl) + `</g>`;
  }
  if (c.type === 'inv') {
    const a = w * .28, b = w * .72, y1 = 22, y2 = h - 22;
    const straight = !st, t1 = L('1'), t2 = L('2');
    o += ln(a, y1, a, y2, straight && t1, !straight) + ln(b, y1, b, y2, straight && t2, !straight);
    o += ln(a, y1, b, y2, !straight && t1, straight) + ln(b, y1, a, y2, !straight && t2, straight);
  }
  if (c.type === 'lamp') {
    const cx = w / 2, cy = 58;
    o += ln(w * .25, 22, w * .25, cy, L('B')) + ln(w * .25, cy, cx - 16, cy, L('B')) + ln(w * .75, 22, w * .75, cy, L('A')) + ln(w * .75, cy, cx + 16, cy, L('A'));
    o += `<circle class="bulb${lit ? ' on' : ''}" cx="${cx}" cy="${cy}" r="16"/><path d="M${cx - 9} ${cy - 9} L${cx + 9} ${cy + 9} M${cx + 9} ${cy - 9} L${cx - 9} ${cy + 9}" stroke="${lit ? '#7A4A00' : 'var(--sch)'}" stroke-width="2" fill="none"/>`;
  }
  if (c.type === 'presa') {
    const cx = w / 2, hy = 84;
    o += `<rect class="faceplate" x="${cx - 44}" y="54" width="88" height="46" rx="6"/>`;
    o += ln(w * .2, 22, cx - 24, 54, L('L')) + ln(w * .5, 22, cx, 54, L('PE')) + ln(w * .8, 22, cx + 24, 54, L('N'));
    [-24, 0, 24].forEach((d, i) => { o += `<circle class="hole" cx="${cx + d}" cy="${hy}" r="${i === 1 ? 4 : 5}"/>`; });
    o += `<text class="lbl" x="${cx}" y="${h - 6}" text-anchor="middle" style="font-size:10px;fill:var(--ink2)">VISTA DA DIETRO</text>`;
  }
  return o;
}

function termSVG(c, id, ui) {
  const p = termPosOf(c, id), tid = c.id + '.' + id, t = c.terms[id];
  const rot = ((tid.charCodeAt(0) * 37 + tid.charCodeAt(tid.length - 1) * 17) % 160) - 20;
  const m = ui.mobile, lx = p.x + (m ? 19 : 16);
  return `<g class="term${ui.sel === tid ? ' sel' : ''}" data-term="${tid}" transform="translate(${p.x},${p.y})" role="button" tabindex="0" aria-label="Morsetto ${c.short} ${t.l}"><circle class="hit" r="${m ? 26 : 20}"/><circle class="halo" r="${m ? 18.5 : 15.5}"/><circle class="screw" r="${m ? 13 : 10.5}"/><line class="slot" x1="${m ? -8 : -6}" y1="0" x2="${m ? 8 : 6}" y2="0" transform="rotate(${rot})"/></g><text class="lbl" x="${lx}" y="${p.y + 4.5}">${t.l}</text>`;
}

export function benchViewBox(comps) {
  if (!comps.length) return '0 0 400 100';
  const H = Math.max(...comps.map(c => c.y + c.h)) + 22;
  return `10 -28 400 ${H + 28}`;
}

// La lampada del banco e' accesa? Con piu' carichi si guarda quella del componente.
function litOf(s, c) {
  const loads = s.level && s.level.loads;
  if (!loads || !s.litLoads) return s.lit;
  const i = loads.findIndex(l => l[0].split('.')[0] === c.id);
  return i >= 0 ? s.litLoads[i] : s.lit;
}

// ui: { mobile, sel, kwh }
export function benchHTML(s, comps, ui) {
  const live = id => s.power && s.potential(id) === 'F';
  const H = Math.max(...comps.map(c => c.y + c.h)) + 22;
  let o = `<defs><pattern id="pegs" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1.4" fill="var(--dot)"/></pattern></defs><rect x="0" y="-28" width="420" height="${H + 28}" fill="var(--bench)"/><rect x="0" y="-28" width="420" height="${H + 28}" fill="url(#pegs)"/>`;
  const dimmed = c => ui.focus && !ui.focus.includes(c.id);
  comps.forEach(c => {
    const toggles = c.type === 'sw' || c.type === 'dev' || c.type === 'inv';
    if (dimmed(c)) o += '<g class="dimmed">';
    o += `<text class="ttl" x="${c.x + 2}" y="${c.y - 9}">${c.title}</text>`;
    o += `<g class="help" data-help="${c.type}" role="button" tabindex="0" aria-label="Che cos’è: ${c.title}"><circle cx="${c.x + c.w - 12}" cy="${c.y - 13}" r="19" fill="transparent" stroke="none"/><circle cx="${c.x + c.w - 9}" cy="${c.y - 13}" r="${ui.mobile ? 11 : 9}"/><text x="${c.x + c.w - 9}" y="${c.y - 8.5}" text-anchor="middle">?</text></g>`;
    o += `<rect class="body" x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" rx="10"/>`;
    o += `<g transform="translate(${c.x},${c.y})"${toggles ? ` class="togg" data-ctl="${c.id}" style="cursor:pointer"` : ''}>${toggles ? `<rect x="0" y="0" width="${c.w}" height="${c.h}" rx="10" fill="transparent"/>` : ''}${schem(c, s, live, litOf(s, c), ui)}</g>`;
    if (dimmed(c)) o += '</g>';
  });
  if (s.solutionShown) {
    o += s.level.solution.map(([a, b, col]) => `<path class="ghost" d="${wirePath(termPos(comps, a), termPos(comps, b))}" stroke="${WIRE_STYLE[col].base}"/>`).join('');
  }
  if (s.ghost) {
    const [ga, gb, gc] = s.ghost;
    o += `<path class="ghost guide" d="${wirePath(termPos(comps, ga), termPos(comps, gb))}" stroke="${WIRE_STYLE[gc].base}"/>`;
  }
  // Con la corrente visibile ogni filo ha uno stato: in tensione (alone), percorso da corrente (puntini).
  const fv = s.flowVisible && s.power;
  s.wires.forEach(w => {
    const d = wirePath(termPos(comps, w.a), termPos(comps, w.b)), q = Object.hasOwn(WIRE_STYLE, w.c) ? WIRE_STYLE[w.c] : WIRE_STYLE.nero;
    const pot = s.potential(w.a);
    const st = s.flow.wires[w.id];
    let halo = '', fl = '';
    if (fv) {
      const k = st.net === 'F' ? 'f' : st.net === 'N' ? 'n' : '';
      if (k) halo = `<path class="halo-w ${k}" d="${d}"/>`;
      if (st.current && k) fl = `<path class="flow ${k} cur" d="${d}"/>`;
    } else {
      const k = s.power && pot === 'F' ? 'f' : s.power && pot === 'N' ? 'n' : '';
      if (k) fl = `<path class="flow ${k}" d="${d}"/>`;
    }
    o += `<g data-wire="${w.id}"${ui.newWire === w.id ? ' class="newwire"' : ''}>${halo}<path class="w-hit" d="${d}"/><path class="w-edge" d="${d}"/><path class="w-col" d="${d}" stroke="${q.base}"${ui.newWire === w.id ? ' pathLength="100"' : ''}/>${q.dash ? `<path class="w-col dash" d="${d}" stroke="${q.dash}"/>` : ''}${fl}</g>`;
  });
  if (fv && !s.lit) {
    s.flow.deadEnds.forEach(t => {
      const p = termPos(comps, t);
      o += `<circle class="stop" cx="${p.x}" cy="${p.y}" r="${ui.mobile ? 23 : 19}"/>`;
    });
  }
  comps.forEach(c => {
    const dim = ui.focus && !ui.focus.includes(c.id), ring = ui.focus && ui.focus.includes(c.id);
    Object.keys(c.terms).forEach(id => {
      const p = termPosOf(c, id);
      if (ring) o += `<circle class="focusring" cx="${p.x}" cy="${p.y}" r="${ui.mobile ? 24 : 20}"/>`;
      o += dim ? `<g class="dimmed">${termSVG(c, id, ui)}</g>` : termSVG(c, id, ui);
    });
  });
  o += `<path id="prev" d=""/>`;
  return o;
}

/* ---------- stato e risultato ---------- */
export function statusHTML(s) {
  const q = s.power ? ['Quadro acceso', 'ok'] : s.trip ? ['Quadro scattato', 'bad'] : ['Quadro spento', ''];
  let msg = sessionMessage(s.message);
  if (s.message && s.message.code === 'lampDark' && s.flowVisible) msg += ' ' + flowMessage(s.flow, s.level);
  const multi = s.litLoads && s.litLoads.length > 1;
  const nOn = multi ? s.litLoads.filter(Boolean).length : 0;
  const lampTxt = multi
    ? (nOn === s.litLoads.length ? 'Lampade accese' : nOn ? `Lampade accese: ${nOn} di ${s.litLoads.length}` : 'Lampade spente')
    : `${s.level.room === 'tavolo' ? 'Lampada' : 'Luce'} ${s.lit ? 'accesa' : 'spenta'}`;
  return `<span class="pill ${q[1]}">${q[0]}</span><span class="pill${s.lit || nOn ? ' on' : ''}">${lampTxt}</span><span class="msg" aria-live="polite">${msg}</span>`;
}

const MARK = { ok: '✓', na: '–', ko: '✕' };
export function resultHTML(s) {
  if (!s.result) return '';
  const r = describeEvaluation(s.result, s.level);
  const row = (t, o) => `<div class="row"><span class="mark ${o.status}" aria-hidden="true">${MARK[o.status]}</span><div><b>${t}</b><ul>${o.msgs.map(m => `<li>${m}</li>`).join('')}</ul></div></div>`;
  const isT = id => /^t\d\d-/.test(id);
  const nextL = s.levels[s.levelIndex + 1];
  const toHouse = !!nextL && isT(nextL.id) && !isT(s.level.id);
  const last = !nextL;
  const xp = s.levels[s.levelIndex].xp;
  const u = s.unit;
  const acts = [];
  if (r.pass) {
    if (u && u.summary.length) acts.push('<button class="btn" data-act="summary">Sintesi</button>');
    if (u && u.hasFault && !u.faultSolved && s.playMode !== 'verifica' && s.mode === 'quadro') acts.push('<button class="btn" data-act="fault">Sfida guasto</button>');
    if (s.playMode !== 'verifica' && s.mode === 'quadro' && !s.level.quadroOnly) acts.push('<button class="btn" data-act="full">Sfida: parti dal contatore</button>');
    acts.push(last ? '' : toHouse ? '<button class="btn primary" id="bNext" data-href="#/modulo/1">Vai al trilocale</button>' : '<button class="btn primary" id="bNext">Livello successivo</button>');
  }
  return `<h3>${r.pass ? 'Impianto funzionante' : 'Controllo del circuito'}</h3><div class="stars" aria-label="${r.stars} stelle su 3">${'★'.repeat(r.stars)}<span class="e">${'★'.repeat(3 - r.stars)}</span></div>${row('Funziona', r.work)}${row('Colori dei fili', r.color)}${row('Sicurezza', r.safe)}<p class="xpline">Punti di questo livello: <b>${xp} XP</b></p>${r.pass && last ? '<p class="next"><b>Hai completato tutti i livelli.</b></p>' : r.pass && toHouse ? '<p class="next"><b>Hai completato il Modulo 0.</b></p>' : ''}${acts.length ? `<div class="uact">${acts.join('')}</div>` : ''}`;
}
