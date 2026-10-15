// Disegno del programma ladder (sola lettura): gradini con contatti, rami in parallelo e uscite.
// Legge il programma (dato) e lo stato osservato del PLC (obs.plc[id]): non ha regole proprie.

const CW = 68, CH = 54, PAD = 14, OUT_W = 96;

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Valore di un'espressione sui bit osservati (per colorare i contatti).
export function evalBits(e, bits) {
  if (typeof e === 'string') return !!bits[e];
  if (!Array.isArray(e)) return false;
  const [op, ...a] = e;
  if (op === 'not') return !evalBits(a[0], bits);
  if (op === 'and') return a.every(x => evalBits(x, bits));
  if (op === 'or') return a.some(x => evalBits(x, bits));
  if (op === 'rise') return !!bits[a[0]];
  return false;
}

function size(e) {
  if (typeof e === 'string' || (Array.isArray(e) && (e[0] === 'not' || e[0] === 'rise'))) return { w: CW, h: CH };
  const kids = e.slice(1).map(size);
  if (e[0] === 'and') return { w: kids.reduce((s, k) => s + k.w, 0), h: Math.max(...kids.map(k => k.h)) };
  return { w: Math.max(...kids.map(k => k.w)) + 2 * PAD, h: kids.reduce((s, k) => s + k.h, 0) };
}

// Disegna e ritorna l'SVG. Il filo corre a y + CH/2 (la "riga" del gradino).
function draw(e, x, y, w, bits, names, on) {
  const my = y + CH / 2;
  if (typeof e === 'string' || (Array.isArray(e) && (e[0] === 'not' || e[0] === 'rise'))) {
    const addr = typeof e === 'string' ? e : e[1], nc = Array.isArray(e) && e[0] === 'not', rise = Array.isArray(e) && e[0] === 'rise';
    const v = evalBits(e, bits);
    const cx = x + w / 2;
    const col = v ? 'lad-on' : 'lad-off';
    let o = `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${cx - 11}M${cx + 11} ${my}H${x + w}"/>`;
    o += `<path class="lad-c ${col}" d="M${cx - 11} ${my - 13}V${my + 13}M${cx + 11} ${my - 13}V${my + 13}"/>`;
    if (nc) o += `<path class="lad-c ${col}" d="M${cx - 15} ${my + 14}L${cx + 15} ${my - 14}"/>`;
    if (rise) o += `<text class="lad-s" x="${cx}" y="${my + 4}" text-anchor="middle">P</text>`;
    o += `<text class="lad-n" x="${cx}" y="${y + 8}" text-anchor="middle">${esc(names[addr] || '')}</text>`;
    o += `<text class="lad-a" x="${cx}" y="${y + CH - 2}" text-anchor="middle">${addr}</text>`;
    return o;
  }
  const [op, ...kids] = e;
  if (op === 'and') {
    let o = '', cx = x;
    const sizes = kids.map(size);
    const extra = (w - sizes.reduce((s, k) => s + k.w, 0)) / kids.length;
    kids.forEach((k, i) => { const kw = sizes[i].w + extra; o += draw(k, cx, y, kw, bits, names, on); cx += kw; });
    return o;
  }
  // parallelo: ogni ramo su una riga, uniti da due barre verticali
  let o = '', cy = y;
  const rows = [];
  kids.forEach(k => {
    const s = size(k);
    rows.push(cy + CH / 2);
    o += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${cy + CH / 2}H${x + PAD}M${x + w - PAD} ${cy + CH / 2}H${x + w}"/>`;
    o += draw(k, x + PAD, cy, w - 2 * PAD, bits, names, on);
    cy += s.h;
  });
  o += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${rows[0]}V${rows[rows.length - 1]}M${x + w} ${rows[0]}V${rows[rows.length - 1]}"/>`;
  return o;
}

const OUT_TXT = { coil: '( )', set: '(S)', reset: '(R)' };
function drawOut(ins, x, y, bits, names, on) {
  const my = y + CH / 2;
  if (ins.op === 'ton' || ins.op === 'ctu') {
    const t = ins.op === 'ton' ? `TON ${ins.pt} s` : `CTU ${ins.pv}`;
    return `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${x + 10}"/><rect class="lad-box ${bits[ins.id] ? 'lad-done' : ''}" x="${x + 10}" y="${y + 6}" width="${OUT_W - 10}" height="${CH - 12}" rx="5"/><text class="lad-s" x="${x + 10 + (OUT_W - 10) / 2}" y="${my - 1}" text-anchor="middle">${t}</text><text class="lad-a" x="${x + 10 + (OUT_W - 10) / 2}" y="${my + 12}" text-anchor="middle">${ins.id}</text>`;
  }
  const v = !!bits[ins.a];
  const cx = x + OUT_W / 2;
  return `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${cx - 13}"/><text class="lad-coil ${v ? 'lad-on' : 'lad-off'}" x="${cx}" y="${my + 8}" text-anchor="middle">${OUT_TXT[ins.op]}</text><text class="lad-n" x="${cx}" y="${y + 8}" text-anchor="middle">${esc(names[ins.a] || '')}</text><text class="lad-a" x="${cx}" y="${y + CH - 2}" text-anchor="middle">${ins.a}</text>`;
}

/**
 * @param {object[]} program   gradini
 * @param {{bits?:object, rungs?:boolean[]}|null} st   stato osservato (obs.plc[id])
 * @param {Record<string,string>} names   nomi dei bit (es. { I0: 'Arresto' })
 * @param {{current?: number|null}} [opt]
 */
export function ladderHTML(program, st, names = {}, opt = {}) {
  const bits = (st && st.bits) || {};
  const rungs = (st && st.rungs) || [];
  const rows = program.map(r => ({ r, s: size(r.if) }));
  const W = Math.max(...rows.map(x => x.s.w)) + OUT_W + 52;
  let y = 6, body = '';
  rows.forEach(({ r, s }, i) => {
    const h = Math.max(s.h, r.do.length * CH);
    const on = !!rungs[i];
    const x0 = 22, w = Math.max(...rows.map(q => q.s.w));
    body += `<text class="lad-num" x="2" y="${y + CH / 2 + 4}">${i + 1}</text>`;
    body += `<path class="lad-rail" d="M${x0} ${y}V${y + h}M${x0 + w + OUT_W + 8} ${y}V${y + h}"/>`;
    body += `<g>${draw(r.if, x0, y, w, bits, names, on)}</g>`;
    body += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x0 + s.w} ${y + CH / 2}H${x0 + w + 4}"/>`;
    r.do.forEach((ins, k) => { body += drawOut(ins, x0 + w + 4, y + k * CH, bits, names, on); });
    y += h + 14;
  });
  return `<svg class="ladder" viewBox="0 0 ${W} ${y}" role="img" aria-label="Programma del PLC, ${program.length} gradini" preserveAspectRatio="xMinYMin meet">${body}</svg>`;
}
