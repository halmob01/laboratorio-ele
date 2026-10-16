// Pannello del processo (P6): scena del serbatoio / forno / nastro, grafico del tracciato e cursori di regolazione.
// Nessuna regola: legge solo l'istantanea (s.obs.process, s.trace, s.tuned) e consegna i cursori a session.tune.
// Specifica: docs/SPEC-PROCESSI.md.

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

const SCENES = { serbatoio: tankScene, forno: ovenScene, nastro: beltScene };

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

export function processMount(el, s) {
  const lv = s.level;
  if (!lv.process || !s.obs) { el.hidden = true; el.innerHTML = ''; el.dataset.key = ''; return; }
  el.hidden = false;
  el.dataset.key = s.levelKey;
  el.innerHTML = `<div class="ladhead"><b>${lv.process.title || 'Il processo'}</b><span data-speed>${s.speed > 1 ? 'tempo × ' + s.speed : ''}</span></div>` +
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
  el.querySelectorAll('[data-out]').forEach(o => {
    const name = o.dataset.out, d = lv.process.tunable[name], v = (s.tuned || {})[name];
    if (v !== undefined) o.textContent = NS(v) + (d.unit ? ' ' + d.unit : '');
  });
  const inp = document.activeElement;
  el.querySelectorAll('input[data-tune]').forEach(i => { const v = (s.tuned || {})[i.dataset.tune]; if (v !== undefined && i !== inp) i.value = v; });
}
