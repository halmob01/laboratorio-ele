// Disegno del programma ladder: gradini con contatti, rami in parallelo e uscite. Con `edit` i contatti, le bobine e i
// gradini si possono toccare (data-lad). Legge il programma (dato) e lo stato osservato del PLC (obs.plc[id]): nessuna regola propria.

import { toCells } from '../engine/ladder-edit.js';

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

const isLeaf = e => typeof e === 'string' || (Array.isArray(e) && (e[0] === 'not' || e[0] === 'rise'));

function size(e) {
  if (e === undefined || e === null) return { w: CW, h: CH };
  if (isLeaf(e)) return { w: CW, h: CH };
  const kids = e.slice(1).map(size);
  if (e[0] === 'and') return { w: kids.reduce((s, k) => s + k.w, 0), h: Math.max(...kids.map(k => k.h)) };
  return { w: Math.max(...kids.map(k => k.w)) + 2 * PAD, h: kids.reduce((s, k) => s + k.h, 0) };
}

const same = (a, b) => a && b && a.kind === b.kind && a.r === b.r && a.cell === b.cell && a.alt === b.alt && a.out === b.out;

// Disegna e ritorna l'SVG. Il filo corre a y + CH/2 (la "riga" del gradino). `cx`: { edit, sel, r } per i punti di tocco.
function draw(e, x, y, w, bits, names, on, cx, path = []) {
  const my = y + CH / 2;
  if (isLeaf(e)) {
    const addr = typeof e === 'string' ? e : e[1], nc = Array.isArray(e) && e[0] === 'not', rise = Array.isArray(e) && e[0] === 'rise';
    const v = evalBits(e, bits);
    const mx = x + w / 2;
    const col = v ? 'lad-on' : 'lad-off';
    let o = `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${mx - 11}M${mx + 11} ${my}H${x + w}"/>`;
    o += `<path class="lad-c ${col}" d="M${mx - 11} ${my - 13}V${my + 13}M${mx + 11} ${my - 13}V${my + 13}"/>`;
    if (nc) o += `<path class="lad-c ${col}" d="M${mx - 15} ${my + 14}L${mx + 15} ${my - 14}"/>`;
    if (rise) o += `<text class="lad-s" x="${mx}" y="${my + 4}" text-anchor="middle">P</text>`;
    o += `<text class="lad-n" x="${mx}" y="${y + 8}" text-anchor="middle">${esc(names[addr] || '')}</text>`;
    o += `<text class="lad-a" x="${mx}" y="${y + CH - 2}" text-anchor="middle">${addr}</text>`;
    if (cx.edit) {
      const t = { kind: 'c', r: cx.r, cell: path.length ? path[0] : 0, alt: path.length > 1 ? path[1] : 0 };
      o += `<rect class="lad-hit${same(cx.sel, t) ? ' lad-sel' : ''}" data-lad="c" data-r="${t.r}" data-cell="${t.cell}" data-alt="${t.alt}" x="${x + 4}" y="${y + 2}" width="${w - 8}" height="${CH - 4}" rx="8" tabindex="0" role="button" aria-label="Contatto ${esc(names[addr] || addr)}${nc ? ', normalmente chiuso' : ''}"/>`;
    }
    return o;
  }
  const [op, ...kids] = e;
  if (op === 'and') {
    let o = '', px = x;
    const sizes = kids.map(size);
    const extra = (w - sizes.reduce((s, k) => s + k.w, 0)) / kids.length;
    kids.forEach((k, i) => { const kw = sizes[i].w + extra; o += draw(k, px, y, kw, bits, names, on, cx, path.length ? path : [i]); px += kw; });
    return o;
  }
  // parallelo: ogni ramo su una riga, uniti da due barre verticali
  let o = '', py = y;
  const rows = [];
  kids.forEach((k, j) => {
    const s = size(k);
    rows.push(py + CH / 2);
    o += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${py + CH / 2}H${x + PAD}M${x + w - PAD} ${py + CH / 2}H${x + w}"/>`;
    o += draw(k, x + PAD, py, w - 2 * PAD, bits, names, on, cx, path.length ? path.concat([j]) : [0, j]);
    py += s.h;
  });
  o += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${rows[0]}V${rows[rows.length - 1]}M${x + w} ${rows[0]}V${rows[rows.length - 1]}"/>`;
  return o;
}

const OUT_TXT = { coil: '( )', set: '(S)', reset: '(R)' };
function drawOut(ins, x, y, bits, names, on, cx, k) {
  const my = y + CH / 2;
  const hit = cx.edit ? `<rect class="lad-hit${same(cx.sel, { kind: 'o', r: cx.r, out: k }) ? ' lad-sel' : ''}" data-lad="o" data-r="${cx.r}" data-out="${k}" x="${x + 6}" y="${y + 2}" width="${OUT_W - 8}" height="${CH - 4}" rx="8" tabindex="0" role="button" aria-label="Uscita ${esc(names[ins.a || ins.id] || ins.a || ins.id)}"/>` : '';
  if (ins.op === 'ton' || ins.op === 'ctu') {
    const t = ins.op === 'ton' ? `TON ${ins.pt} s` : `CTU ${ins.pv}`;
    return `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${x + 10}"/><rect class="lad-box ${bits[ins.id] ? 'lad-done' : ''}" x="${x + 10}" y="${y + 6}" width="${OUT_W - 10}" height="${CH - 12}" rx="5"/><text class="lad-s" x="${x + 10 + (OUT_W - 10) / 2}" y="${my - 1}" text-anchor="middle">${t}</text><text class="lad-a" x="${x + 10 + (OUT_W - 10) / 2}" y="${my + 12}" text-anchor="middle">${ins.id}</text>${hit}`;
  }
  const v = !!bits[ins.a];
  const mx = x + OUT_W / 2;
  return `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x} ${my}H${mx - 13}"/><text class="lad-coil ${v ? 'lad-on' : 'lad-off'}" x="${mx}" y="${my + 8}" text-anchor="middle">${OUT_TXT[ins.op]}</text><text class="lad-n" x="${mx}" y="${y + 8}" text-anchor="middle">${esc(names[ins.a] || '')}</text><text class="lad-a" x="${mx}" y="${y + CH - 2}" text-anchor="middle">${ins.a}</text>${hit}`;
}

/**
 * @param {object[]} program   gradini
 * @param {{bits?:object, rungs?:boolean[]}|null} st   stato osservato (obs.plc[id])
 * @param {Record<string,string>} names   nomi dei bit (es. { I0: 'Arresto' })
 * @param {{edit?: boolean, sel?: object|null}} [opt]   edit: contatti e bobine toccabili; sel: elemento scelto { kind:'r'|'c'|'o', r, cell, alt, out }
 */
export function ladderHTML(program, st, names = {}, opt = {}) {
  const bits = (st && st.bits) || {};
  const rungs = (st && st.rungs) || [];
  if (!program.length) {
    return `<svg class="ladder" viewBox="0 0 360 70" role="img" aria-label="Programma vuoto"><path class="lad-rail" d="M22 6V64M330 6V64"/><text class="lad-a" x="176" y="40" text-anchor="middle">Programma vuoto</text></svg>`;
  }
  const rows = program.map(r => ({ r, s: size(r.if) }));
  const W = Math.max(...rows.map(x => x.s.w)) + OUT_W + 52;
  let y = 6, body = '';
  rows.forEach(({ r, s }, i) => {
    const outs = r.do.length ? r.do : [null];
    const h = Math.max(s.h, outs.length * CH);
    const on = !!rungs[i];
    const x0 = 22, w = Math.max(...rows.map(q => q.s.w));
    const cx = { edit: !!opt.edit, sel: opt.sel || null, r: i };
    const rungSel = opt.sel && opt.sel.kind === 'r' && opt.sel.r === i;
    body += `<text class="lad-num${rungSel ? ' lad-numsel' : ''}" x="2" y="${y + CH / 2 + 4}">${i + 1}</text>`;
    if (opt.edit) body += `<rect class="lad-hit${rungSel ? ' lad-sel' : ''}" data-lad="r" data-r="${i}" x="0" y="${y}" width="20" height="${h}" rx="6" tabindex="0" role="button" aria-label="Gradino ${i + 1}"/>`;
    body += `<path class="lad-rail" d="M${x0} ${y}V${y + h}M${x0 + w + OUT_W + 8} ${y}V${y + h}"/>`;
    if (r.if === undefined || r.if === null) {
      body += `<path class="lad-wire" d="M${x0} ${y + CH / 2}H${x0 + w + 4}" stroke-dasharray="4 6"/><text class="lad-a" x="${x0 + 10}" y="${y + CH / 2 - 8}">nessun contatto</text>`;
    } else {
      body += `<g>${draw(r.if, x0, y, w, bits, names, on, cx)}</g>`;
      body += `<path class="lad-wire ${on ? 'lad-on' : ''}" d="M${x0 + s.w} ${y + CH / 2}H${x0 + w + 4}"/>`;
    }
    if (r.do.length) r.do.forEach((ins, k) => { body += drawOut(ins, x0 + w + 4, y + k * CH, bits, names, on, cx, k); });
    else body += `<text class="lad-a" x="${x0 + w + 10}" y="${y + CH / 2 + 4}">nessuna uscita</text>`;
    y += h + 14;
  });
  return `<svg class="ladder" viewBox="0 0 ${W} ${y}" role="img" aria-label="Programma del PLC, ${program.length} gradini" preserveAspectRatio="xMinYMin meet">${body}</svg>`;
}

// Quali gradini l'editor sa modificare (gli altri si vedono e basta).
export const rungEditable = r => toCells(r.if) !== null;

/**
 * Pannello dell'editor sotto il disegno. `addrs`: elenchi di indirizzi scelibili; `text`: funzione codice-errore -> frase.
 */
export function editorPanelHTML(program, sel, names, addrs, ops, errors, text) {
  const label = a => `${a}${names[a] ? ' · ' + esc(names[a]) : ''}`;
  const opt = (list, cur) => list.map(a => `<option value="${a}"${a === cur ? ' selected' : ''}>${label(a)}</option>`).join('');
  const contactAddrs = [...addrs.inputs, ...addrs.outputs, ...addrs.markers, ...addrs.timers, ...addrs.counters];
  const outAddrs = [...addrs.outputs, ...addrs.markers];
  let body = '';
  if (!sel) body = '<p class="ladhelp">Tocca un gradino (il numero a sinistra) o un contatto per modificarlo.</p>';
  else if (!program[sel.r]) body = '';
  else if (sel.kind === 'r') {
    const r = program[sel.r];
    body = `<div class="ladrow"><b>Gradino ${sel.r + 1}</b><div class="ladbtns">
      <button class="btn" data-lac="addContact">Aggiungi contatto</button>
      <button class="btn" data-lac="addOut"${r.do.length >= 3 ? ' disabled' : ''}>Aggiungi uscita</button>
      <button class="btn" data-lac="up"${sel.r === 0 ? ' disabled' : ''}>Su</button>
      <button class="btn" data-lac="down"${sel.r === program.length - 1 ? ' disabled' : ''}>Giù</button>
      <button class="btn" data-lac="delRung">Elimina gradino</button></div></div>`;
  } else if (sel.kind === 'c') {
    const cells = toCells(program[sel.r].if) || [];
    const c = cells[sel.cell] && cells[sel.cell].alts[sel.alt];
    if (c) {
      const t = c.rise ? 'rise' : c.not ? 'not' : 'no';
      body = `<div class="ladrow"><b>Contatto</b>
        <div class="ladseg" role="group" aria-label="Tipo di contatto">${[['no', 'Normalmente aperto'], ['not', 'Normalmente chiuso'], ['rise', 'Fronte di salita']].map(([v, l]) => `<button class="chip seg" data-lac="type" data-v="${v}" aria-pressed="${t === v}">${l}</button>`).join('')}</div>
        <label class="ladsel">Bit <select data-lac="addr">${opt(contactAddrs, c.a)}</select></label>
        <div class="ladbtns"><button class="btn" data-lac="parallel">In parallelo</button><button class="btn" data-lac="delContact">Elimina contatto</button></div></div>`;
    }
  } else if (sel.kind === 'o') {
    const ins = program[sel.r].do[sel.out];
    if (ins) {
      const OPN = { coil: 'Bobina', set: 'Set', reset: 'Reset', ton: 'Temporizzatore', ctu: 'Contatore' };
      let fields = '';
      if (ins.op === 'ton') fields = `<label class="ladsel">Temporizzatore <select data-lac="outid">${opt(addrs.timers, ins.id)}</select></label><label class="ladsel">Tempo (secondi) <input type="number" inputmode="numeric" min="1" max="600" step="1" value="${ins.pt}" data-lac="pt"></label>`;
      else if (ins.op === 'ctu') fields = `<label class="ladsel">Contatore <select data-lac="outid">${opt(addrs.counters, ins.id)}</select></label><label class="ladsel">Conta fino a <input type="number" inputmode="numeric" min="1" max="999" step="1" value="${ins.pv}" data-lac="pv"></label><label class="ladsel">Si azzera con <select data-lac="ctur"><option value="">nessun ingresso</option>${opt(addrs.inputs, ins.r)}</select></label>`;
      else fields = `<label class="ladsel">Bit <select data-lac="outaddr">${opt(outAddrs, ins.a)}</select></label>`;
      body = `<div class="ladrow"><b>${OPN[ins.op]}</b>
        <div class="ladseg" role="group" aria-label="Tipo di uscita">${ops.map(o => `<button class="chip seg" data-lac="optype" data-v="${o}" aria-pressed="${ins.op === o}">${OPN[o]}</button>`).join('')}</div>
        ${fields}
        <div class="ladbtns"><button class="btn" data-lac="delOut">Elimina</button></div></div>`;
    }
  }
  const errs = errors.length ? `<ul class="laderr">${errors.slice(0, 4).map(e => `<li>${esc(text(e))}</li>`).join('')}</ul>` : '';
  return `<div class="ladpanel">${body}<div class="ladbtns"><button class="btn primary" data-lac="addRung">Nuovo gradino</button></div>${errs}</div>`;
}
