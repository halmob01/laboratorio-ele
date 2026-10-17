// Pannello del processo (P6): scena del serbatoio / forno / nastro, grafico del tracciato e cursori di regolazione.
// Nessuna regola: legge solo l'istantanea (s.obs.process, s.trace, s.tuned) e consegna i cursori a session.tune.
// Specifica: docs/SPEC-PROCESSI.md.
import { writeHTML } from './press.js';

const NS = v => String(Math.round(v * 10) / 10).replace('.', ',');
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const COLORS = ['#2563B0', '#C0262D', '#2E9E5B', '#B8860B'];

// ---------- scene ----------
function tankScene(level, s) {
  const p = s.obs.process, a = s.obs.processAct || {};
  const h = clamp(p.h, 0, 100), top = 20, bot = 138, yH = bot - (bot - top) * h / 100;
  let o = `<rect x="150" y="${top}" width="110" height="${bot - top}" rx="6" fill="#F4F1E6" stroke="var(--comp-edge)" stroke-width="2.4"/>`;
  o += `<rect id="pv-water" x="152" y="${yH}" width="106" height="${bot - yH - 2}" fill="#5AA2D6" opacity=".85"/>`;
  // galleggianti: una tacca per ogni sensore digitale che guarda il livello
  level.comps.filter(c => c.type === 'sens' && c.sense && c.sense.v === 'h').forEach(c => {
    const lvl = c.sense.above !== undefined ? c.sense.above : c.sense.below, y = bot - (bot - top) * lvl / 100;
    const act = !!(s.obs.parts[c.id] || {}).act;
    o += `<line x1="262" y1="${y}" x2="290" y2="${y}" stroke="${act ? '#F59F00' : 'var(--ink2)'}" stroke-width="3"/><circle cx="296" cy="${y}" r="5" fill="${act ? '#F59F00' : 'none'}" stroke="var(--ink2)" stroke-width="1.6"/><text x="306" y="${y + 4}" style="font:600 11px 'IBM Plex Mono',monospace;fill:var(--ink2)">${c.id}</text>`;
  });
  if (level.comps.some(c => c.type === 'tx' && c.sense && c.sense.v === 'h')) o += `<text x="206" y="${top - 6}" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:var(--ink2)">livello ${NS(h)} %</text>`;
  else o += `<text x="206" y="${top - 6}" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:var(--ink2)">${NS(h)} %</text>`;
  // pompa in ingresso
  const pump = a.pump || 0;
  o += `<path d="M40 52 H150" stroke="${pump ? '#5AA2D6' : 'var(--line)'}" stroke-width="6" fill="none"/><circle cx="70" cy="52" r="15" fill="${pump ? '#E9F4EC' : '#F0EBDD'}" stroke="var(--comp-edge)" stroke-width="2"/><text x="70" y="57" text-anchor="middle" style="font:600 13px 'IBM Plex Mono',monospace;fill:var(--ink)">P</text><text x="70" y="82" text-anchor="middle" style="font:500 10px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${pump ? (pump < 1 ? NS(pump * 100) + ' %' : 'in marcia') : 'ferma'}</text>`;
  // scarico
  const valve = a.valve === undefined ? 1 : a.valve;
  o += `<path d="M205 138 V150 H330" stroke="${valve ? '#5AA2D6' : 'var(--line)'}" stroke-width="6" fill="none"/><text x="330" y="146" style="font:500 10px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${valve ? 'scarico' : 'chiuso'}</text>`;
  return o;
}

function ovenScene(level, s) {
  const p = s.obs.process, a = s.obs.processAct || {};
  const T = p.T, heat = clamp(a.heater || 0, 0, 1), t = clamp((T - 20) / 180, 0, 1);
  const r = Math.round(235 + 20 * t), g = Math.round(235 - 140 * t), b = Math.round(225 - 190 * t);
  let o = `<rect x="110" y="24" width="180" height="112" rx="8" fill="rgb(${r},${g},${b})" stroke="var(--comp-edge)" stroke-width="2.4"/>`;
  o += `<path d="M130 122 q10 -14 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="${heat > 0 ? '#E5484D' : 'var(--ink2)'}" stroke-width="${2 + 3 * heat}" opacity="${heat > 0 ? 1 : .5}"/>`;
  o += `<text x="200" y="76" text-anchor="middle" style="font:600 22px 'IBM Plex Mono',monospace;fill:#222">${NS(T)} °C</text>`;
  o += `<text x="200" y="152" text-anchor="middle" style="font:500 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">resistenza ${heat > 0 ? (heat < 1 ? NS(heat * 100) + ' %' : 'accesa') : 'spenta'}</text>`;
  return o;
}

function beltScene(level, s) {
  const p = s.obs.process;
  const speed = clamp(p.v, 0, 100);
  let o = `<rect x="50" y="86" width="300" height="22" rx="11" fill="#4A4F57" stroke="#2A2D33" stroke-width="2"/>`;
  // tacche che scorrono con la velocita'
  const off = ((s.t || 0) * speed * .6) % 30;
  for (let x = 40 - 30 + off; x < 350; x += 30) if (x > 56 && x < 344) o += `<line x1="${x}" y1="90" x2="${x}" y2="104" stroke="#8C9099" stroke-width="3"/>`;
  o += `<text x="200" y="64" text-anchor="middle" style="font:600 18px 'IBM Plex Mono',monospace;fill:var(--ink)">${NS(p.f)} Hz</text>`;
  o += `<text x="200" y="136" text-anchor="middle" style="font:500 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">velocità ${NS(speed)} % della nominale</text>`;
  return o;
}

// Casa con fotovoltaico (modello `energia`): sole sull'arco della giornata, tetto con i pannelli, casa, batteria e contatore.
const kw = v => String(Math.round(v * 100) / 100).replace('.', ',') + ' kW';
function houseScene(level, s) {
  const p = s.obs.process;
  // senza fotovoltaico (pvKw 0, la gestione dei carichi d'inverno) non c'e' il sole: sera, luna e niente pannelli
  const noPv = ((level.process && level.process.params) || {}).pvKw === 0;
  const hr = p.hour, sunUp = !noPv && (p.sun > 0 || (hr > 6 && hr < 20));
  const t = clamp((hr - 6) / 14, 0, 1), sx = 40 + 320 * t, sy = 70 - 52 * Math.sin(Math.PI * t);
  const hh = String(Math.floor(hr)).padStart(2, '0') + ':' + String(Math.floor((hr % 1) * 60)).padStart(2, '0');
  let o = `<rect x="0" y="0" width="400" height="160" fill="${sunUp ? '#EAF3FB' : '#26324A'}" opacity=".55"/>`;
  o += `<path d="M40 70 Q200 -34 360 70" fill="none" stroke="var(--line)" stroke-dasharray="3 5"/>`;
  o += sunUp ? `<circle cx="${sx}" cy="${sy}" r="${10 + 4 * p.sun}" fill="#F5B921" opacity="${.35 + .65 * p.sun}"/>` : `<circle cx="${sx}" cy="${clamp(sy, 14, 70)}" r="9" fill="#C9D3E3"/>`;
  o += `<text x="12" y="20" style="font:600 12px 'IBM Plex Mono',monospace;fill:var(--ink)">ore ${hh}</text>`;
  o += `<path d="M110 120 V86 L170 52 L230 86 V120 Z" fill="#F0EBDD" stroke="var(--comp-edge)" stroke-width="2.2"/><path d="M104 88 L170 48 L236 88" fill="none" stroke="${p.pv > 0.05 ? '#2E9E5B' : 'var(--comp-edge)'}" stroke-width="${3 + 2 * clamp(p.pv / 4, 0, 1)}"/>`;
  o += `<text x="170" y="108" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:var(--ink)">casa ${kw(p.load)}</text>`;
  if (!noPv) o += `<text x="170" y="136" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:#2E9E5B">pannelli ${kw(p.pv)}</text>`;
  // contatore e rete
  const g = p.grid, ex = g < -0.01;
  o += `<rect x="290" y="92" width="44" height="30" rx="4" fill="#EDE7D4" stroke="var(--comp-edge)" stroke-width="1.8"/><text x="312" y="111" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:#222">kWh</text>`;
  o += `<path d="M232 106 H290" stroke="${Math.abs(g) > 0.01 ? (ex ? '#2E9E5B' : '#C0262D') : 'var(--line)'}" stroke-width="4"/>`;
  o += `<path d="M334 106 H372" stroke="var(--ink2)" stroke-width="3"/><text x="312" y="136" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:${ex ? '#2E9E5B' : 'var(--ink)'}">${ex ? 'immette ' + kw(-g) : g > 0.01 ? 'preleva ' + kw(g) : 'in pareggio'}</text>`;
  // carichi comandati dal PLC (gestione dei carichi): auto, pompa di calore, forno acceso dalle persone
  const act = s.obs.processAct || {};
  [[act.ev > 0, 'auto in ricarica'], [act.hp > 0, 'pompa di calore'], [p.oven > 0, 'forno acceso']].filter(x => x[0]).forEach((x, i) => {
    o += `<text x="388" y="${20 + 14 * i}" text-anchor="end" style="font:600 10px 'IBM Plex Mono',monospace;fill:${x[1] === 'forno acceso' ? '#C0262D' : '#2E9E5B'}">${x[1]}</text>`;
  });
  if (p.blackout) o += `<text x="200" y="152" text-anchor="middle" style="font:700 12px 'IBM Plex Mono',monospace;fill:#C0262D">CONTATORE SCATTATO</text>`;
  // batteria
  if (level.process.battery) {
    o += `<rect x="24" y="96" width="34" height="48" rx="4" fill="none" stroke="var(--comp-edge)" stroke-width="2"/><rect x="26" y="${142 - 44 * p.soc / 100}" width="30" height="${44 * p.soc / 100}" fill="${p.pb < -0.01 ? '#F59F00' : '#2E9E5B'}" opacity=".85"/><text x="41" y="90" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink)">${Math.round(p.soc)} %</text>`;
  }
  return o;
}

// Clima per zone (modello `zone`): due o tre stanze affiancate con la temperatura, la valvola della zona e la finestra; a sinistra la pompa di calore.
function zoneScene(level, s) {
  const p = s.obs.process, a = s.obs.processAct || {}, n = clamp(Math.round((level.process.params || {}).n || 2), 1, 3);
  const names = ['soggiorno', 'camera', 'bagno'], w = 96, x0 = 100, gap = 10;
  const hh = String(Math.floor(p.hour)).padStart(2, '0') + ':' + String(Math.floor((p.hour % 1) * 60)).padStart(2, '0');
  let o = `<text x="12" y="20" style="font:600 12px 'IBM Plex Mono',monospace;fill:var(--ink)">ore ${hh}${p.night ? ' · notte' : ''}</text>`;
  o += `<text x="388" y="20" text-anchor="end" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink2)">fuori ${NS((level.process.params || {}).Text ?? 5)} °C</text>`;
  // pompa di calore
  const run = (a.pump || 0) > 0 && !p.broken;
  o += `<rect x="14" y="62" width="62" height="52" rx="6" fill="${p.broken ? '#F6D4D4' : run ? '#E9F4EC' : '#F0EBDD'}" stroke="var(--comp-edge)" stroke-width="2"/>`;
  o += `<text x="45" y="84" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink)">pompa</text><text x="45" y="100" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:${p.broken ? '#C0262D' : run ? '#2E9E5B' : 'var(--ink2)'}">${p.broken ? 'GUASTA' : run ? 'in marcia' : 'ferma'}</text>`;
  if (p.dryRun && !p.broken) o += `<text x="45" y="130" text-anchor="middle" style="font:700 10px 'IBM Plex Mono',monospace;fill:#C0262D">a vuoto!</text>`;
  for (let i = 1; i <= n; i++) {
    const x = x0 + (i - 1) * (w + gap), T = p['T' + i], t = clamp((T - 10) / 15, 0, 1), pos = p['p' + i] || 0, win = (a['w' + i] || 0) > 0;
    const r = Math.round(200 + 55 * t), g = Math.round(215 - 60 * t), b = Math.round(240 - 150 * t);
    o += `<line x1="76" y1="${70 + 8 * i}" x2="${x}" y2="${70 + 8 * i}" stroke="${pos > 0.05 && run ? '#E5484D' : 'var(--line)'}" stroke-width="4"/>`;
    o += `<rect x="${x}" y="40" width="${w}" height="96" rx="6" fill="rgb(${r},${g},${b})" stroke="var(--comp-edge)" stroke-width="2.2"/>`;
    o += `<text x="${x + w / 2}" y="82" text-anchor="middle" style="font:600 20px 'IBM Plex Mono',monospace;fill:#222">${NS(T)} °</text>`;
    o += `<text x="${x + w / 2}" y="56" text-anchor="middle" style="font:600 10px 'IBM Plex Sans',sans-serif;fill:#222">${names[i - 1]}</text>`;
    o += `<text x="${x + w / 2}" y="104" text-anchor="middle" style="font:500 10px 'IBM Plex Mono',monospace;fill:#222">valvola ${pos > 0.95 ? 'aperta' : pos < 0.05 ? 'chiusa' : NS(pos * 100) + ' %'}</text>`;
    if (win) o += `<text x="${x + w / 2}" y="124" text-anchor="middle" style="font:700 10px 'IBM Plex Mono',monospace;fill:#C0262D">finestra aperta</text>`;
  }
  return o;
}

// Linea di prelievo e deposito: punto di prelievo a sinistra, deposito a destra, braccio con pinza che scende e si sposta.
function lineScene(level, s) {
  const p = s.obs.process;
  const x0 = 80, x1 = 300, bx = x0 + (x1 - x0) * p.x, top = 34, zy = top + 62 * p.z;
  let o = `<rect x="20" y="118" width="360" height="10" rx="3" fill="#4A4F57"/>`;
  o += `<rect x="${x0 - 28}" y="100" width="56" height="18" rx="3" fill="#EDE7D4" stroke="var(--comp-edge)" stroke-width="1.6"/><text x="${x0}" y="140" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink2)">prelievo</text>`;
  o += `<rect x="${x1 - 28}" y="100" width="56" height="18" rx="3" fill="#EDE7D4" stroke="var(--comp-edge)" stroke-width="1.6"/><text x="${x1}" y="140" text-anchor="middle" style="font:600 10px 'IBM Plex Mono',monospace;fill:var(--ink2)">deposito: ${p.out}</text>`;
  if (p.feed && !p.holding) o += `<rect x="${x0 - 11}" y="86" width="22" height="14" rx="2" fill="#C98A3E" stroke="#7E5420" stroke-width="1.6"/>`;
  o += `<line x1="30" y1="${top - 12}" x2="370" y2="${top - 12}" stroke="var(--ink2)" stroke-width="5"/>`;
  o += `<line x1="${bx}" y1="${top - 12}" x2="${bx}" y2="${zy}" stroke="var(--ink2)" stroke-width="4"/>`;
  const open = 8 + 6 * (1 - p.grip);
  o += `<path d="M${bx - open} ${zy + 14} V${zy} H${bx + open} V${zy + 14}" fill="none" stroke="${p.crash ? '#C0262D' : 'var(--comp-edge)'}" stroke-width="4" stroke-linecap="round"/>`;
  if (p.holding) o += `<rect x="${bx - 11}" y="${zy + 2}" width="22" height="14" rx="2" fill="#C98A3E" stroke="#7E5420" stroke-width="1.6"/>`;
  if (p.crash) o += `<text x="200" y="22" text-anchor="middle" style="font:700 12px 'IBM Plex Mono',monospace;fill:#C0262D">URTO: il braccio si è mosso da basso</text>`;
  else if (p.dropped) o += `<text x="200" y="22" text-anchor="middle" style="font:700 11px 'IBM Plex Mono',monospace;fill:#C0262D">pezzi caduti: ${p.dropped}</text>`;
  return o;
}

// Nastro a lotti (modello `pacchi`, prova del Modulo 4): i pacchi sul nastro, la fotocellula con il raggio, il bancale in fondo.
function parcelScene(level, s) {
  const p = s.obs.process;
  const x0 = 40, x1 = 330, k = (x1 - x0) / p.length, y = 96;
  let o = `<rect x="${x0}" y="${y}" width="${x1 - x0}" height="12" rx="6" fill="#4A4F57" stroke="#2A2D33" stroke-width="2"/>`;
  for (let i = 0; i < 12; i++) {
    const front = p.lead - i * p.gap;
    if (front < 0) break;
    if (front - p.size > p.length) continue;
    const a = Math.max(0, front - p.size), b = Math.min(p.length, front);
    if (b > a) o += `<rect x="${x0 + a * k}" y="${y - 28}" width="${(b - a) * k}" height="28" rx="2" fill="#C8A26A" stroke="#7A5A2E" stroke-width="1.5"/>`;
  }
  const bx = x0 + p.at * k, on = p.beam;
  o += `<rect x="${bx - 4}" y="${y - 52}" width="8" height="16" fill="var(--ink2)"/><line x1="${bx}" y1="${y - 36}" x2="${bx}" y2="${y - 2}" stroke="${on ? '#E5484D' : '#F59F00'}" stroke-width="2" stroke-dasharray="${on ? '0' : '3 3'}"/>`;
  o += `<text x="${bx}" y="${y - 58}" text-anchor="middle" style="font:600 11px 'IBM Plex Mono',monospace;fill:var(--ink2)">fotocellula</text>`;
  const out = p.out, stack = out ? ((out - 1) % 4) + 1 : 0;   // un bancale per lotto: pieno a quattro, poi se ne prende uno vuoto
  o += `<rect x="${x1 + 8}" y="${y + 6}" width="44" height="8" fill="#9A7B4F"/>`;
  for (let i = 0; i < stack; i++) o += `<rect x="${x1 + 10 + (i % 2) * 20}" y="${y - 14 - Math.floor(i / 2) * 20}" width="19" height="19" fill="#C8A26A" stroke="#7A5A2E" stroke-width="1.2"/>`;
  o += `<text x="200" y="140" text-anchor="middle" style="font:500 11px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">pacchi contati dalla fotocellula: ${p.passed} · sul bancale: ${out}</text>`;
  return o;
}

export const SCENES = { serbatoio: tankScene, forno: ovenScene, nastro: beltScene, energia: houseScene, zone: zoneScene, linea: lineScene, pacchi: parcelScene };

// ---------- grafico ----------
// level.process.graph = { vars: [{ v, label, lo, hi }], window: secondi, lines: [{ tuned: 'sp', var: 'T' }] }
function graphSVG(level, s) {
  const gr = level.process.graph;
  if (!gr) return '';
  const W = 400, H = 150, L = 34, R = 8, T = 10, B = 20;
  const rows = s.trace || [];
  const t1 = rows.length ? rows[rows.length - 1].t : 0, win = gr.window || 300, t0 = Math.max(0, t1 - win);
  const x = t => L + (W - L - R) * (t - t0) / win;
  const part = rows.filter(r => r.t >= t0);
  let o = `<rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="none" stroke="var(--line)"/>`;
  const first = gr.vars[0];
  [0, .5, 1].forEach(f => { const y = T + (H - T - B) * (1 - f); o += `<line x1="${L}" y1="${y}" x2="${W - R}" y2="${y}" stroke="var(--line)" stroke-dasharray="3 4"/><text x="${L - 4}" y="${y + 3}" text-anchor="end" style="font:500 9px 'IBM Plex Mono',monospace;fill:var(--ink2)">${Math.round(first.lo + (first.hi - first.lo) * f)}</text>`; });
  o += `<text x="${L}" y="${H - 6}" style="font:500 9px 'IBM Plex Mono',monospace;fill:var(--ink2)">${Math.round(t0)} s</text><text x="${W - R}" y="${H - 6}" text-anchor="end" style="font:500 9px 'IBM Plex Mono',monospace;fill:var(--ink2)">${Math.round(t1)} s</text>`;
  (gr.lines || []).forEach((ln, i) => {
    const v = ln.tuned ? (s.tuned || {})[ln.tuned] : ln.value;
    const vr = gr.vars.find(q => q.v === (ln.var || first.v)) || first;
    if (v === undefined) return;
    const y = T + (H - T - B) * (1 - clamp((v - vr.lo) / (vr.hi - vr.lo), 0, 1));
    o += `<line x1="${L}" y1="${y}" x2="${W - R}" y2="${y}" stroke="#7A7F88" stroke-width="1.4" stroke-dasharray="6 3"/><text x="${W - R - 2}" y="${y - 3}" text-anchor="end" style="font:500 9px 'IBM Plex Sans',sans-serif;fill:var(--ink2)">${ln.label || ''}</text>`;
  });
  gr.vars.forEach((vr, i) => {
    const pts = part.filter(r => vr.v in r).map(r => `${x(r.t).toFixed(1)},${(T + (H - T - B) * (1 - clamp((r[vr.v] - vr.lo) / (vr.hi - vr.lo), 0, 1))).toFixed(1)}`);
    if (pts.length > 1) o += `<polyline points="${pts.join(' ')}" fill="none" stroke="${vr.color || COLORS[i % COLORS.length]}" stroke-width="2" stroke-linejoin="round"/>`;
  });
  o += gr.vars.map((vr, i) => `<text x="${L + 6 + i * 96}" y="${T + 11}" style="font:600 9.5px 'IBM Plex Sans',sans-serif;fill:${vr.color || COLORS[i % COLORS.length]}">${vr.label || vr.v}</text>`).join('');
  return `<svg class="procgraph" viewBox="0 0 ${W} ${H}" role="img" aria-label="Grafico dell’andamento nel tempo">${o}</svg>`;
}

// ---------- cursori ----------
function slidersHTML(level, s) {
  const tn = level.process.tunable;
  if (!tn) return '';
  const lab = level.process.tunableLabels || {};
  return `<div class="procsliders">` + Object.entries(tn).map(([name, d]) => {
    const v = (s.tuned || {})[name] ?? d.init;
    return `<label class="procsl"><span>${lab[name] || name}</span><input type="range" data-tune="${name}" min="${d.min}" max="${d.max}" step="${d.step || 'any'}" value="${v}" aria-label="${lab[name] || name}"><output data-out="${name}">${NS(v)}${d.unit ? ' ' + d.unit : ''}</output></label>`;
  }).join('') + `</div>`;
}

// Struttura e aggiornamenti. mount: a ogni cambio di livello; update: a ogni istantanea (non tocca i cursori mentre si trascinano).
// ---------- pannello operatore (level.hmi) ----------
const PRIO_TXT = { alta: 'ALTA', media: 'MEDIA', bassa: 'BASSA' };
const STATE_TXT = { attivo: 'da riconoscere', riconosciuto: 'riconosciuto', rientrato: 'rientrato, da riconoscere' };
const ageTxt = a => (a === null ? '' : 'dato vecchio · ' + Math.round(a) + ' s');
function hmiValuesHTML(h) {
  return h.values.map(v => `<div class="hmival${v.stale ? ' stale' : ''}"><span>${v.label}</span><b>${v.text || '—'}</b><i>${v.stale ? ageTxt(v.age) : ''}</i></div>`).join('');
}
function hmiAlarmsHTML(h) {
  if (!h.alarms.length) return '<p class="hmiempty">Nessun allarme</p>';
  return h.alarms.map(a => `<div class="hmialm p-${a.prio} s-${a.state}"><em>${PRIO_TXT[a.prio]}</em><span>${a.text}</span><i>${STATE_TXT[a.state]}${a.since !== null ? ' · a ' + Math.round(a.since) + ' s' : ''}</i></div>`).join('');
}
function hmiSync(el, s) {
  const box = el.querySelector('.hmi');
  const h = s.obs && s.obs.hmi;
  if (!box || !h) return;
  const set = (sel, html) => { const e = box.querySelector(sel); if (e && e.innerHTML !== html) e.innerHTML = html; };
  set('.hmilink', h.link ? 'collegato' : 'collegamento perso');
  box.querySelector('.hmilink').classList.toggle('off', !h.link);
  const horn = box.querySelector('.hmihorn');
  horn.hidden = !h.horn;
  set('.hmivals', hmiValuesHTML(h));
  set('.hmialms', hmiAlarmsHTML(h));
  const ack = box.querySelector('[data-hmiack]');
  ack.disabled = !h.link || !h.alarms.some(a => a.state === 'attivo' || a.state === 'rientrato');
}
const hmiShellHTML = lv => {
  const id = (lv.comps.find(c => c.type === 'hmi') || {}).id || 'HMI';
  return `<div class="hmi" role="region" aria-label="Pannello operatore"><div class="hmitop"><b>PANNELLO OPERATORE</b><span class="hmilink"></span><span class="hmihorn" hidden>SIRENA</span></div><div class="hmivals"></div><div class="hmialms" aria-live="polite"></div><button class="btn hmiack" data-hmiack="${id}">Riconosci gli allarmi</button></div>`;
};

// ---------- turno a guasti (level.scenario) ----------
function scenarioHTML(s) {
  const sc = s.obs.scenario;
  if (!sc) return '';
  const fired = sc.faults.filter(f => f.firedAt !== null), fixed = fired.filter(f => !f.open);
  const left = Math.max(0, Math.ceil(sc.duration - sc.t));
  const mm = String(Math.floor(left / 60)).padStart(2, '0') + ':' + String(left % 60).padStart(2, '0');
  const late = fired.filter(f => f.late);
  const state = sc.done ? 'turno finito' : s.power ? 'turno in corso' : 'dai corrente per cominciare';
  return `<div class="shiftbar" role="status"><span><b>${state}</b></span><span>tempo rimasto ${mm}</span><span>guasti riparati ${fixed.length} di ${sc.faults.length}</span>${late.length ? `<span class="late">in ritardo: ${late.length}</span>` : ''}<button class="btn" data-shift="restart">Ricomincia il turno</button></div>`;
}

export function processMount(el, s) {
  const lv = s.level;
  if (!lv.process || !s.obs) { el.hidden = true; el.innerHTML = ''; el.dataset.key = ''; return; }
  el.hidden = false;
  el.dataset.key = s.levelKey;
  el.innerHTML = `<div class="ladhead"><b>${lv.process.title || 'Il processo'}</b><span data-speed>${s.speed > 1 ? 'tempo × ' + s.speed : ''}</span></div>` +
    (lv.scenario ? '<div class="shiftslot"></div>' : '') +
    `<svg class="procscene" viewBox="0 0 400 160" role="img" aria-label="${lv.process.alt || 'Il processo che si regola'}"></svg>` +
    (lv.hmi ? hmiShellHTML(lv) : '') + (lv.process.graph ? `<div class="procgraphbox"></div>` : '') + slidersHTML(lv, s);
  processUpdate(el, s);
}

// A ogni istantanea: monta se il livello e' nuovo, altrimenti aggiorna soltanto.
export function processSync(el, s) {
  if (!s.level.process || !s.obs || el.hidden || el.dataset.key !== s.levelKey) processMount(el, s);
  else processUpdate(el, s);
}

function processUpdate(el, s) {
  const lv = s.level;
  const scene = SCENES[lv.process.model];
  const sc = el.querySelector('.procscene');
  if (sc && scene) sc.innerHTML = scene(lv, s);
  const gb = el.querySelector('.procgraphbox');
  if (gb) gb.innerHTML = graphSVG(lv, s);
  if (lv.hmi) hmiSync(el, s);
  const sh = el.querySelector('.shiftslot');
  if (sh) writeHTML(sh, scenarioHTML(s));
  el.querySelectorAll('[data-out]').forEach(o => {
    const name = o.dataset.out, d = lv.process.tunable[name], v = (s.tuned || {})[name];
    if (v !== undefined) o.textContent = NS(v) + (d.unit ? ' ' + d.unit : '');
  });
  const inp = document.activeElement;
  el.querySelectorAll('input[data-tune]').forEach(i => { const v = (s.tuned || {})[i.dataset.tune]; if (v !== undefined && i !== inp) i.value = v; });
}
