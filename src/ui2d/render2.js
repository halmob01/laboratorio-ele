// Disegno dei componenti del motore v2 sul banco (Moduli 2 e 3). Stesse regole di render.js:
// nessuna regola elettrica, solo lo stato letto dall'istantanea (s.obs, s.potential, s.controlStates).
//
// Coordinate locali al componente: (0,0) e' l'angolo in alto a sinistra, w e h le sue dimensioni.
// I morsetti stanno a y = 22 (lato alto) e y = h - 22 (lato basso), a x = w * f.

export const ln = (x1, y1, x2, y2, live, off) => `<line class="cl${live ? ' on' : ''}${off ? ' off' : ''}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
export const dot = (x, y) => `<circle class="ct" cx="${x}" cy="${y}" r="4"/>`;
const lab = (x, y, t, anchor = 'middle') => `<text class="lbl" x="${x}" y="${y}" text-anchor="${anchor}" style="font-size:10px;fill:var(--ink2)">${t}</text>`;

const PH = ['F', 'L1', 'L2', 'L3'];
// Un morsetto e' "in tensione" (alone arancione) se ha una fase o un secondario di trasformatore.
export const isLive = p => !!p && (PH.includes(p) || String(p).includes(':'));

// Un polo che si apre e si chiude: da (x, y1) a (x, y2), con il contatto nel mezzo.
function pole(x, y1, y2, closed, l1, l2) {
  const a = y1 + (y2 - y1) * .34, b = y1 + (y2 - y1) * .66;
  return ln(x, y1, x, a, l1) + ln(x, b, x, y2, l2) + dot(x, a) + dot(x, b) +
    (closed ? ln(x, a, x, b, l1 && l2) : ln(x, a, x + 15, b - 3, false));
}

// Levetta di un interruttore di protezione: su = chiuso, giu' = aperto, a meta' = scattato.
function lever(cx, cy, on, tripped) {
  const ky = on ? cy - 20 : tripped ? cy - 4 : cy + 6;
  return `<rect class="hs" x="${cx - 22}" y="${cy - 28}" width="44" height="56" rx="5"/><rect class="slotr" x="${cx - 7}" y="${cy - 23}" width="14" height="46" rx="3"/><rect class="knob" x="${cx - 9}" y="${ky}" width="18" height="16" rx="3"/><circle class="led ${tripped ? 'trip' : on ? 'on' : ''}" cx="${cx + 15}" cy="${cy - 20}" r="3"/>`;
}

const xs = (c, ids) => ids.map(id => c.w * c.terms[id].f);
const has = (c, id) => !!c.terms[id];
const obsOf = (s, id) => (s.obs && s.obs.parts && s.obs.parts[id]) || {};

// Colonne di poli tra due file di morsetti (contattore, protezioni, termico).
function poles(c, tops, bots, closed, L, y1 = 22, y2 = c.h - 22) {
  let o = '';
  tops.forEach((t, i) => {
    const x = c.w * c.terms[t].f, b = bots[i];
    if (b && has(c, b)) o += pole(x, y1, y2, closed, L(t), L(b));
    else o += ln(x, y1, x, y2, L(t));
  });
  return o;
}

export function schemV2(c, s, L, ui) {
  const w = c.w, h = c.h, st = s.controlStates[c.id] ? 1 : 0, part = obsOf(s, c.id), obs = s.obs || { loads: {}, motors: {}, coils: {} };
  let o = '';
  const mid = h / 2;
  switch (c.type) {
    case 'quadro': {
      // rete: le uscite salgono a una barra; la levetta del quadro compare solo se il livello non ha protezioni proprie
      Object.keys(c.terms).forEach(k => { const x = w * c.terms[k].f; o += ln(x, 38, x, h - 22, L(k)); });
      o += `<rect x="12" y="10" width="${w - 24}" height="18" rx="4" fill="var(--breaker)" stroke="var(--comp-edge)"/>`;
      o += lab(24, 23, c.terms.L1 ? 'RETE 400 V' : 'RETE 230 V', 'start');
      if (!s.selfPowered) {
        const bx = w - 70, ky = s.power ? 8 : s.trip ? 22 : 36;
        o += `<g class="brk" data-q="1" role="button" tabindex="0" aria-label="Magnetotermico"><rect x="${bx - 30}" y="30" width="60" height="${h - 52}" fill="transparent"/><rect class="hs" x="${bx - 22}" y="34" width="44" height="46" rx="5"/><rect class="slotr" x="${bx - 7}" y="38" width="14" height="38" rx="3"/><rect class="knob" x="${bx - 9}" y="${34 + ky}" width="18" height="14" rx="3" /><circle class="led ${s.power ? 'on' : s.trip ? 'trip' : ''}" cx="${bx + 15}" cy="40" r="3"/></g>`;
      } else {
        o += `<circle class="led ${s.power ? 'on' : 'trip'}" cx="${w - 24}" cy="19" r="3.4"/>`;
      }
      break;
    }
    case 'mt': case 'rcd': {
      const [xf, xn] = [w * c.terms['1'].f, w * c.terms.N1.f];
      o += pole(xf, 22, h - 22, part.on, L('1'), L('2')) + pole(xn, 22, h - 22, part.on, L('N1'), L('N2'));
      o += lever(w / 2, mid, part.on, part.tripped);
      if (c.type === 'rcd') o += `<g class="tbtn" data-test="${c.id}" role="button" tabindex="0" aria-label="Tasto di prova ${c.short}"><rect x="${w / 2 + 28}" y="${mid - 12}" width="30" height="24" rx="5" fill="#EDE7D4" stroke="var(--comp-edge)" stroke-width="1.4"/><text x="${w / 2 + 43}" y="${mid + 5}" text-anchor="middle" style="font:600 12px 'IBM Plex Mono',monospace;fill:#222">T</text></g>`;
      break;
    }
    case 'mt3': case 'sez': {
      o += poles(c, ['1', '3', '5'], ['2', '4', '6'], part.on, L);
      o += lever(w / 2, mid, part.on, part.tripped);
      break;
    }
    case 'pb': case 'pbnc': {
      const x = w / 2, closed = c.type === 'pb' ? !!part.pressed : !part.pressed;
      const t = c.type === 'pb' ? ['3', '4'] : ['1', '2'];
      o += pole(x, 22, h - 22, closed, L(t[0]), L(t[1]));
      const col = c.type === 'pb' ? '#2E9E5B' : '#C0262D';
      o += `<circle cx="${x + 54}" cy="${mid}" r="19" fill="${col}" stroke="#1B2230" stroke-width="2" ${part.pressed ? 'opacity=".72"' : ''}/>`;
      o += `<circle cx="${x + 54}" cy="${mid}" r="${part.pressed ? 10 : 13}" fill="${col}" stroke="rgba(255,255,255,.45)" stroke-width="2"/>`;
      o += lab(x + 54, mid + 36, part.pressed ? 'PREMUTO' : c.type === 'pb' ? 'NA' : 'NC');
      break;
    }
    case 'fungo': {
      const x = w / 2, closed = !part.pressed;
      o += pole(x, 22, h - 22, closed, L('1'), L('2'));
      o += `<rect x="${x + 16}" y="${mid - 22}" width="46" height="44" rx="8" fill="#F2C500" stroke="#1B2230" stroke-width="2"/><circle cx="${x + 39}" cy="${mid}" r="${part.pressed ? 13 : 17}" fill="#C0262D" stroke="#1B2230" stroke-width="2"/>`;
      o += lab(x + 39, mid + 38, part.pressed ? 'AZIONATO' : 'EMERGENZA');
      break;
    }
    case 'ri': {
      // coil in alto, contatto in basso
      o += `<rect x="${w * .3}" y="40" width="${w * .4}" height="${h * .36}" rx="4" fill="none" stroke="${obs.coils[c.id] ? '#F59F00' : 'var(--sch)'}" stroke-width="2.6"/>`;
      o += ln(w * c.terms.A1.f, 22, w * c.terms.A1.f, 40, L('A1')) + ln(w * c.terms.A2.f, 22, w * c.terms.A2.f, 40, L('A2'));
      o += lab(w / 2, 40 + h * .22, 'IMPULSO');
      o += pole(w * c.terms['1'].f, h * .56, h - 22, part.on, L('1'), L('2'));
      break;
    }
    case 'tmr': {
      o += `<rect x="${w * .3}" y="40" width="${w * .4}" height="${h * .36}" rx="4" fill="none" stroke="${obs.coils[c.id] ? '#F59F00' : 'var(--sch)'}" stroke-width="2.6"/>`;
      o += ln(w * c.terms.A1.f, 22, w * c.terms.A1.f, 40, L('A1')) + ln(w * c.terms.A2.f, 22, w * c.terms.A2.f, 40, L('A2'));
      o += lab(w / 2, 40 + h * .22, `${c.time || ''} s`);
      o += pole(w * c.terms['1'].f, h * .56, h - 22, part.left > 0, L('1'), L('2'));
      if (part.left > 0 && c.time) o += `<rect x="${w * .3}" y="${40 + h * .36 + 6}" width="${w * .4 * (part.left / c.time)}" height="5" rx="2" fill="#F59F00"/>`;
      break;
    }
    case 'km': {
      const top = ['1', '3', '5'], bot = ['2', '4', '6'];
      const y1 = 22, y2 = h - 22;
      const xc = w * c.terms.A1.f;
      o += `<rect x="${xc - 22}" y="46" width="44" height="${h - 92}" rx="4" fill="none" stroke="${s.obs && s.obs.coils[c.id] ? '#F59F00' : 'var(--sch)'}" stroke-width="2.6"/>`;
      o += ln(xc, y1, xc, 46, L('A1')) + ln(xc, h - 46, xc, y2, L('A2'));
      o += lab(xc, mid + 4, 'KM');
      o += poles(c, top, bot, part.on, L, y1, y2);
      if (has(c, '13')) o += pole(w * c.terms['13'].f, y1, y2, part.on, L('13'), L('14'));
      if (has(c, '21')) o += pole(w * c.terms['21'].f, y1, y2, !part.on, L('21'), L('22'));
      o += lab(xc, mid + 22, part.on ? 'CHIUSO' : 'APERTO');
      break;
    }
    case 'ft': {
      const heat = Math.min(1, (part.heat || 0) / (c.tripAfter || 3));
      o += poles(c, ['1', '3', '5'], ['2', '4', '6'], true, L);
      if (has(c, '95')) o += pole(w * c.terms['95'].f, 22, h - 22, !part.tripped, L('95'), L('96'));
      if (has(c, '97')) o += pole(w * c.terms['97'].f, 22, h - 22, !!part.tripped, L('97'), L('98'));
      o += ` <rect x="${w * .03}" y="${h - 36}" width="${w * .2}" height="8" rx="3" fill="rgba(0,0,0,.08)"/><rect x="${w * .03}" y="${h - 36}" width="${w * .2 * heat}" height="8" rx="3" fill="${heat > .66 ? '#E5484D' : '#F59F00'}"/>`;
      o += lab(w * .13, h - 42, 'TERMICO');
      o += `<g class="tbtn" data-reset="${c.id}" role="button" tabindex="0" aria-label="Riarmo ${c.short}"><rect x="${w * .03}" y="${mid - 14}" width="${w * .2}" height="26" rx="5" fill="#EDE7D4" stroke="var(--comp-edge)" stroke-width="1.4"/><text x="${w * .13}" y="${mid + 4}" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:#222">RESET</text></g>`;
      o += `<circle class="led ${part.tripped ? 'trip' : 'on'}" cx="${w * .13}" cy="${mid - 26}" r="4"/>`;
      break;
    }
    case 'fc': {
      const act = !!part.act;
      o += pole(w * c.terms['1'].f, 22, h - 22, !act, L('1'), L('2')) + pole(w * c.terms['3'].f, 22, h - 22, act, L('3'), L('4'));
      o += lab(w / 2, h - 6, act ? 'PREMUTO DAL PACCO' : 'A RIPOSO');
      break;
    }
    case 'trafo': {
      const cx = w / 2;
      o += ln(w * c.terms['1'].f, 22, w * c.terms['1'].f, 52, L('1')) + ln(w * c.terms['2'].f, 22, w * c.terms['2'].f, 52, L('2'));
      o += ln(w * c.terms['3'].f, h - 52, w * c.terms['3'].f, h - 22, L('3')) + ln(w * c.terms['4'].f, h - 52, w * c.terms['4'].f, h - 22, L('4'));
      for (let i = 0; i < 4; i++) o += `<path d="M${cx - 34 + i * 17} 52 q8.5 -14 17 0" fill="none" stroke="var(--sch)" stroke-width="2.4"/><path d="M${cx - 34 + i * 17} ${h - 52} q8.5 14 17 0" fill="none" stroke="var(--sch)" stroke-width="2.4"/>`;
      o += `<line x1="${cx - 38}" y1="${mid - 3}" x2="${cx + 38}" y2="${mid - 3}" stroke="var(--sch)" stroke-width="2"/><line x1="${cx - 38}" y1="${mid + 3}" x2="${cx + 38}" y2="${mid + 3}" stroke="var(--sch)" stroke-width="2"/>`;
      o += lab(cx, mid + 20, `${c.vout || 12} V`);
      break;
    }
    case 'bell': {
      const on = obs.loads[c.id] === 'on', burnt = obs.loads[c.id] === 'burnt';
      const cx = w / 2, cy = mid + 6;
      o += ln(w * c.terms['1'].f, 22, w * c.terms['1'].f, cy - 8, L('1')) + ln(w * c.terms['2'].f, 22, w * c.terms['2'].f, cy - 8, L('2'));
      o += `<path d="M${cx - 18} ${cy + 14} Q${cx - 18} ${cy - 18} ${cx} ${cy - 18} Q${cx + 18} ${cy - 18} ${cx + 18} ${cy + 14} Z" fill="${burnt ? '#6B1E1E' : on ? '#FFD25E' : 'var(--bulb-off)'}" stroke="var(--comp-edge)" stroke-width="1.6"/><circle cx="${cx}" cy="${cy + 19}" r="4" fill="var(--comp-edge)"/>`;
      if (on) o += `<path d="M${cx + 26} ${cy - 8} q8 8 0 16 M${cx + 33} ${cy - 14} q13 14 0 28 M${cx - 26} ${cy - 8} q-8 8 0 16 M${cx - 33} ${cy - 14} q-13 14 0 28" fill="none" stroke="#E8A100" stroke-width="2"/>`;
      if (burnt) o += lab(cx, h - 6, 'BRUCIATO');
      break;
    }
    case 'spia': {
      const on = obs.loads[c.id] === 'on';
      const cx = w / 2, cy = mid + 4;
      o += ln(w * c.terms.X1.f, 22, w * c.terms.X1.f, cy, L('X1')) + ln(w * c.terms.X2.f, 22, w * c.terms.X2.f, cy, L('X2'));
      o += `<circle cx="${cx}" cy="${cy}" r="14" fill="${on ? '#6FE3A1' : '#B9C8BD'}" stroke="var(--comp-edge)" stroke-width="1.6"/><circle cx="${cx}" cy="${cy}" r="14" fill="none"/>`;
      break;
    }
    case 'lamp': {
      const on = obs.loads[c.id] === 'on', burnt = obs.loads[c.id] === 'burnt';
      const cx = w / 2, cy = 58;
      o += ln(w * .25, 22, w * .25, cy, L('B')) + ln(w * .25, cy, cx - 16, cy, L('B')) + ln(w * .75, 22, w * .75, cy, L('A')) + ln(w * .75, cy, cx + 16, cy, L('A'));
      o += `<circle class="bulb${on ? ' on' : ''}" cx="${cx}" cy="${cy}" r="16" ${burnt ? 'style="fill:#6B1E1E"' : ''}/><path d="M${cx - 9} ${cy - 9} L${cx + 9} ${cy + 9} M${cx + 9} ${cy - 9} L${cx - 9} ${cy + 9}" stroke="${on ? '#7A4A00' : 'var(--sch)'}" stroke-width="2" fill="none"/>`;
      if (obs.loads[c.id] === 'weak') o += lab(cx, cy + 34, 'TENSIONE TROPPO BASSA');
      if (burnt) o += lab(cx, cy + 34, 'BRUCIATA');
      break;
    }
    case 'presa': {
      const cx = w / 2, hy = 84, on = obs.loads[c.id] === 'on';
      o += `<rect class="faceplate" x="${cx - 44}" y="54" width="88" height="46" rx="6"/>`;
      o += ln(w * c.terms.L.f, 22, cx - 24, 54, L('L')) + ln(w * c.terms.PE.f, 22, cx, 54, L('PE')) + ln(w * c.terms.N.f, 22, cx + 24, 54, L('N'));
      [-24, 0, 24].forEach((d, i) => { o += `<circle class="hole" cx="${cx + d}" cy="${hy}" r="${i === 1 ? 4 : 5}"/>`; });
      o += lab(cx, h - 6, on ? 'APPARECCHIO ALIMENTATO' : 'VISTA DA DIETRO');
      break;
    }
    case 'motor3': {
      const cx = w / 2, cy = mid + 6, dir = obs.motors[c.id] || 'off';
      const term = ['U', 'V', 'W'];
      term.forEach(t => { const x = w * c.terms[t].f; o += ln(x, 22, x, cy - 24, L(t)); });
      o += ln(w * c.terms.PE.f, 22, w * c.terms.PE.f, cy - 24, L('PE'));
      o += `<circle cx="${cx}" cy="${cy}" r="30" fill="${dir === 'fwd' || dir === 'rev' ? '#E9F4EC' : '#F0EBDD'}" stroke="var(--comp-edge)" stroke-width="2"/><text x="${cx}" y="${cy + 6}" text-anchor="middle" style="font:600 18px 'IBM Plex Mono',monospace;fill:var(--ink)">M</text>`;
      if (dir === 'fwd' || dir === 'rev') {
        o += `<path d="M${cx - 18} ${cy - 24} A24 24 0 0 ${dir === 'fwd' ? 1 : 0} ${cx + 18} ${cy - 24}" fill="none" stroke="#2E9E5B" stroke-width="3"/><path d="M${cx + (dir === 'fwd' ? 18 : -18)} ${cy - 24} l${dir === 'fwd' ? -2 : 2} -8 m${dir === 'fwd' ? 2 : -2} 8 l${dir === 'fwd' ? -8 : 8} 1" fill="none" stroke="#2E9E5B" stroke-width="3"/>`;
      }
      o += lab(cx, h - 8, dir === 'fwd' ? 'IN AVANTI' : dir === 'rev' ? 'ALL’INDIETRO' : dir === 'hum' ? 'RONZA E NON PARTE' : 'FERMO');
      break;
    }
    default: break;
  }
  return o;
}

// Tipi che il disegno v2 gestisce al posto di quelli del motore v1 (sw, dev e inv restano come nel v1).
export const V2_TYPES = new Set(['quadro', 'mt', 'rcd', 'mt3', 'sez', 'pb', 'pbnc', 'fungo', 'ri', 'tmr', 'km', 'ft', 'fc', 'trafo', 'bell', 'spia', 'lamp', 'presa', 'motor3']);

/* ---------- scena della stanza / della macchina (livelli v2) ---------- */
const DEV = new Set(['lamp', 'spia', 'bell', 'presa', 'motor3']);
const WALLCTL = { sw: 'tog', dev: 'tog', inv: 'tog', pb: 'hold', pbnc: 'hold', fungo: 'hold' };

// Struttura fissa della scena (gli id servono a updateRoomV2, che cambia solo classi e posizioni).
export function roomV2HTML(level) {
  const m = level.machine;
  let o = `<defs><radialGradient id="glow2"><stop offset="0" stop-color="#FFE9A8" stop-opacity=".95"/><stop offset="1" stop-color="#FFD25E" stop-opacity="0"/></radialGradient></defs>`;
  o += `<rect class="wall" x="0" y="0" width="400" height="196"/><rect class="floor" x="0" y="196" width="400" height="54"/><rect class="skirt" x="0" y="190" width="400" height="8"/>`;
  const devs = level.comps.filter(c => DEV.has(c.type) && !(m && c.id === m.motor));
  const n = devs.length + (m ? 0 : 0);
  devs.forEach((c, i) => {
    const x = Math.round(400 * (i + .5) / Math.max(1, n)), y = m ? 40 : 66;
    o += `<g data-dev="${c.id}">`;
    if (c.type === 'lamp' || c.type === 'spia') {
      o += `<line x1="${x}" y1="0" x2="${x}" y2="${y - 22}" stroke="var(--ink)" stroke-width="2.5" opacity=".7"/>`;
      o += `<circle id="gl-${c.id}" class="glowc" cx="${x}" cy="${y}" r="70" fill="url(#glow2)" opacity="0"/>`;
      o += `<circle id="ld-${c.id}" class="bulb" cx="${x}" cy="${y}" r="${c.type === 'spia' ? 9 : 13}"/>`;
      if (c.type === 'lamp') o += `<path class="shade" d="M${x - 30} ${y - 10} Q${x} ${y - 50} ${x + 30} ${y - 10} Z"/>`;
    } else if (c.type === 'bell') {
      o += `<path id="ld-${c.id}" class="bellb" d="M${x - 18} ${y + 14} Q${x - 18} ${y - 16} ${x} ${y - 16} Q${x + 18} ${y - 16} ${x + 18} ${y + 14} Z" fill="#C8A04A" stroke="#7A5E1C" stroke-width="2"/><circle cx="${x}" cy="${y + 18}" r="4" fill="#7A5E1C"/>`;
    } else if (c.type === 'presa') {
      o += `<rect class="plate" x="${x - 26}" y="${y - 22}" width="52" height="44" rx="6"/><circle class="hole" cx="${x - 10}" cy="${y}" r="3.6"/><circle class="hole" cx="${x}" cy="${y}" r="3.2"/><circle class="hole" cx="${x + 10}" cy="${y}" r="3.6"/><circle id="ld-${c.id}" class="led" cx="${x + 18}" cy="${y - 14}" r="3.5"/>`;
    } else if (c.type === 'motor3') {
      o += fanSVG(c.id, x, y);
    }
    o += `<text x="${x}" y="${y + 40}" text-anchor="middle" style="font:600 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${c.short || c.id}</text></g>`;
  });
  if (m) {
    const mt = level.comps.find(c => c.id === m.motor);
    o += `<g data-dev="${m.motor}">${fanSVG(m.motor, 44, 60)}<text x="44" y="100" text-anchor="middle" style="font:600 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${mt ? mt.short || mt.id : m.motor}</text></g>`;
    o += `<rect x="86" y="128" width="268" height="16" rx="8" fill="#4A4F57" stroke="#2A2D33" stroke-width="2"/>`;
    o += `<circle cx="96" cy="136" r="6" fill="#8C9099"/><circle cx="344" cy="136" r="6" fill="#8C9099"/>`;
    o += `<line x1="52" y1="60" x2="96" y2="130" stroke="#4A4F57" stroke-width="2" stroke-dasharray="3 3" opacity=".5"/>`;
    o += `<rect id="fcs" class="fcm" x="80" y="108" width="10" height="20" rx="2"/><rect id="fce" class="fcm" x="350" y="108" width="10" height="20" rx="2"/>`;
    o += `<text x="85" y="104" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink2)">${m.endRev || 'FC1'}</text><text x="355" y="104" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink2)">${m.endFwd || 'FC2'}</text>`;
    o += `<g id="pack"><rect x="0" y="104" width="30" height="24" rx="3" fill="#C98A3E" stroke="#7E5420" stroke-width="2"/><line x1="15" y1="104" x2="15" y2="128" stroke="#7E5420" stroke-width="2"/></g>`;
  }
  // comandi a muro
  const ctl = (level.controls || []).map(id => level.comps.find(c => c.id === id)).filter(c => c && WALLCTL[c.type]);
  ctl.forEach((c, i) => {
    const x = Math.round(400 * (i + .5) / ctl.length), y = 168;
    if (WALLCTL[c.type] === 'hold') {
      const col = c.type === 'pb' ? '#2E9E5B' : '#C0262D';
      o += `<g class="pl" data-hold="${c.id}" role="button" tabindex="0" aria-label="${c.title || c.short}, tieni premuto" style="touch-action:none"><circle cx="${x}" cy="${y}" r="26" fill="transparent"/><circle class="plate" cx="${x}" cy="${y}" r="20"/><circle id="bt-${c.id}" cx="${x}" cy="${y}" r="13" fill="${col}" stroke="rgba(255,255,255,.45)" stroke-width="2"/><text x="${x}" y="${y + 36}" text-anchor="middle" style="font:600 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${c.short}</text></g>`;
    } else {
      o += `<g class="pl" data-ctl="${c.id}" role="button" tabindex="0" aria-label="${c.short}, premi per cambiare"><rect x="${x - 24}" y="${y - 30}" width="48" height="60" fill="transparent"/><rect class="plate" x="${x - 18}" y="${y - 26}" width="36" height="52" rx="6"/><rect id="rt-${c.id}" class="rk hi" x="${x - 12}" y="${y - 20}" width="24" height="20" rx="3"/><rect id="rb-${c.id}" class="rk lo" x="${x - 12}" y="${y}" width="24" height="20" rx="3"/><text x="${x}" y="${y + 42}" text-anchor="middle" style="font:600 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${c.short}</text></g>`;
    }
  });
  return o;
}

function fanSVG(id, cx, cy) {
  return `<circle cx="${cx}" cy="${cy}" r="28" fill="#F0EBDD" stroke="var(--comp-edge)" stroke-width="2"/><g id="fan-${id}" class="fan" style="transform-origin:${cx}px ${cy}px"><path d="M${cx} ${cy} L${cx - 6} ${cy - 22} Q${cx} ${cy - 26} ${cx + 6} ${cy - 22} Z M${cx} ${cy} L${cx + 22} ${cy - 6} Q${cx + 26} ${cy} ${cx + 22} ${cy + 6} Z M${cx} ${cy} L${cx + 6} ${cy + 22} Q${cx} ${cy + 26} ${cx - 6} ${cy + 22} Z M${cx} ${cy} L${cx - 22} ${cy + 6} Q${cx - 26} ${cy} ${cx - 22} ${cy - 6} Z" fill="#5B7FA8"/></g><circle cx="${cx}" cy="${cy}" r="4" fill="#2A2D33"/><text id="mt-${id}" x="${cx}" y="${cy + 46}" text-anchor="middle" style="font:500 10px 'IBM Plex Sans',sans-serif;fill:var(--ink2)"></text>`;
}

export const MOTOR_TXT = { fwd: 'in avanti', rev: 'all’indietro', hum: 'ronza e non parte', off: 'fermo' };

export function updateRoomV2(root, s) {
  const level = s.level, o = s.obs;
  if (!o) return;
  const set = (id, cls) => { const e = root.querySelector('#' + id); if (e) e.setAttribute('class', cls); return e; };
  level.comps.forEach(c => {
    const st = o.loads[c.id];
    if (c.type === 'lamp' || c.type === 'spia') {
      const on = st === 'on';
      set('ld-' + c.id, 'bulb' + (on ? ' on' : ''));
      const g = root.querySelector('#gl-' + c.id); if (g) g.setAttribute('opacity', on ? '1' : '0');
    } else if (c.type === 'bell') {
      set('ld-' + c.id, 'bellb' + (st === 'on' ? ' ring' : ''));
    } else if (c.type === 'presa') {
      set('ld-' + c.id, 'led' + (st === 'on' ? ' on' : ''));
    } else if (c.type === 'motor3') {
      const d = o.motors[c.id] || 'off';
      set('fan-' + c.id, 'fan' + (d === 'fwd' ? ' fwd' : d === 'rev' ? ' rev' : d === 'hum' ? ' hum' : ''));
      const t = root.querySelector('#mt-' + c.id); if (t) t.textContent = MOTOR_TXT[d];
    } else if (WALLCTL[c.type] === 'tog') {
      const on = s.controlStates[c.id] ? 1 : 0;
      set('rt-' + c.id, 'rk ' + (on ? 'hi' : 'lo')); set('rb-' + c.id, 'rk ' + (on ? 'lo' : 'hi'));
    } else if (WALLCTL[c.type] === 'hold') {
      const b = root.querySelector('#bt-' + c.id); if (b) b.setAttribute('opacity', s.controlStates[c.id] ? '.55' : '1');
    }
  });
  const m = level.machine;
  if (m && o.machine) {
    const x = 90 + (o.machine.pos / m.length) * (350 - 90 - 30);
    const p = root.querySelector('#pack'); if (p) p.setAttribute('transform', `translate(${x} 0)`);
    set('fcs', 'fcm' + (o.machine.atStart ? ' act' : '')); set('fce', 'fcm' + (o.machine.atEnd ? ' act' : ''));
  }
}
