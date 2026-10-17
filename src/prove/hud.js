// Cornice delle prove 3D (milestone): i pezzi della pagina come HTML, a partire dallo stato.
// Funzioni pure: niente DOM, niente regole del gioco. La pagina (page.js) le usa e collega i tocchi alla sessione.
// Lo stesso schema vale per ogni prova; il contenuto (comandi, passi, frasi) sta in src/content/prove.js.

import { PROVE } from '../content/prove.js';

const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const provaOf = name => PROVE[name] || null;

/* ---------- memoria della prova e passi ---------- */

// Quello che lo stato del momento non dice ma i passi devono ricordare (quadro trovato, linee gia' aperte tutte, ecc.).
export const newMemory = () => ({ panel: false, opened: false, rearmed: false, found: false, tests: {}, fixed: false });

// action: { kind: 'toggle' | 'test', id }; before/after: provaState prima e dopo l'azione.
export function remember(name, mem, action, before, after) {
  if (isPlant(name)) return rememberEvents(mem, plantEvents(name, action, before, after));
  if (name !== 'appartamento' || !after) return mem;
  const m = { ...mem };
  const lines = after.lines;
  if (!lines.luce.on && !lines.prese.on && !lines.cucina.on) m.opened = true;
  if (m.opened && after.rcd.on) m.rearmed = true;
  const line = action && lineOf(name, action.id);
  if (m.rearmed && line && before && before.rcd.on && !before.lines[line].on && after.lines[line].on && after.rcd.tripped) m.found = true;
  return m;
}
// Le prove "di reparto" (officina, nastro automatico): pulsantiera in basso, verbale delle prove, eventi letti dallo stato.
export const isPlant = name => name === 'officina' || name === 'automatico' || name === 'fabbrica' || name === 'casa';
export const plantEvents = (name, action, before, after) => (name === 'automatico' ? automaticoEvents(action, before, after) : name === 'fabbrica' ? fabbricaEvents(action, before, after) : name === 'casa' ? casaEvents(action, before, after) : officinaEvents(action, before, after));
const lineOf = (name, id) => { const c = (PROVE[name].controls || []).find(x => x.id === id); return c ? c.line : null; };

// Passi della prova: { text, done, cur }. Il passo corrente e' il primo non fatto dopo l'ultimo fatto.
export function stepsOf(name, ps, unit, mem) {
  const cfg = PROVE[name];
  if (!cfg || !ps) return [];
  let done;
  let ko = [];
  const diagOk = !!(unit && unit.diag && unit.diag.correct);
  if (name === 'appartamento') {
    done = [mem.panel, mem.opened, mem.rearmed, mem.found, diagOk, !ps.heaterPlugged, unit && unit.phase === 'done'];
  } else if (name === 'fabbrica') {
    // il turno: avvio, risposta, primo guasto riparato, tutti i guasti in tempo, fine turno, verifica
    const sh = (ps && ps.shift) || { faults: [] }, f0 = sh.faults[0] || {};
    const allFixed = sh.faults.length > 0 && sh.faults.every(f => f.fixedAt !== null && !f.late);
    done = [!!sh.started, diagOk, f0.fixedAt != null && !f0.late, allFixed, !!sh.done, unit && unit.phase === 'done'];
    ko = [false, false, !!f0.late || (!!sh.done && f0.fixedAt == null), sh.faults.some(f => f.late || (sh.done && f.fixedAt === null)), false, false];
  } else if (name === 'casa') {
    // la serata: generale, la serata guardata (fino al buio o alle 23), la risposta, il programma corretto, la serata rifatta fino
    // alle 23 senza buio, la consegna. Rifatta e saltata di nuovo: il passo e' rosso.
    const sh = (ps && ps.shift) || {};
    done = [!!sh.started || !!mem.blackout, !!mem.blackout || (!!sh.done && !ps.blackout), diagOk, !!mem.fixed, !!mem.fixed && !!sh.done && !ps.blackout, unit && unit.phase === 'done'];
    ko = [false, false, false, false, !!mem.fixed && !!ps.blackout, false];
  } else if (isPlant(name)) {
    // le cinque prove del verbale, poi diagnosi, correzione, ricollaudo; una prova non superata conta come fatta (ma in rosso)
    const t = mem.tests || {};
    done = cfg.tests.map(x => t[x.id] === 'ok').concat([diagOk, !!mem.fixed, unit && unit.phase === 'done']);
    ko = cfg.tests.map(x => t[x.id] === 'ko');
  } else done = cfg.steps.map(() => false);
  if (unit && unit.phase === 'done') { done = done.map(() => true); ko = []; }
  const last = Math.max(done.lastIndexOf(true), ko.lastIndexOf(true));
  const cur = done.findIndex((d, i) => !d && !ko[i] && i > last);
  return cfg.steps.map((text, i) => ({ text, done: !!done[i], ko: !!ko[i], cur: i === cur }));
}

/* ---------- officina: le prove del collaudo dagli eventi ---------- */

const running = ps => ps.motor === 'fwd';
// Che cosa e' successo tra due stati dell'officina, per un'azione o per il tempo che passa (action null):
// [{ text, test?, result?, trip?, good?, kind }]. Le prove si riconoscono da quello che fa davvero il nastro.
export function officinaEvents(action, before, after) {
  if (!before || !after) return [];
  const L = PROVE.officina.log, ev = [];
  const id = action && action.id;
  const kind = action && action.kind;
  if (id === 'SB1' && (kind === 'press' || kind === 'toggle')) {
    if (!running(before) && running(after)) ev.push({ kind: 'marcia', text: L.marcia, test: 'marcia', result: after.lamp ? 'ok' : null, good: true });
    else if (!running(after)) ev.push({ kind: 'marciaNo', text: L.marciaNo });
  } else if (id === 'SB0' && (kind === 'press' || kind === 'toggle')) {
    if (running(before) && !running(after)) ev.push({ kind: 'arresto', text: L.arresto, test: 'arresto', result: 'ok', good: true });
    else ev.push({ kind: 'arrestoIdle', text: L.arrestoIdle });
  } else if (id === 'SBE' && kind === 'toggle') {
    if (after.emergency && running(before) && !running(after)) ev.push({ kind: 'fungo', text: L.fungo, test: 'emergenza', result: 'ok', good: true });
    else ev.push({ kind: after.emergency ? 'fungoIdle' : 'fungoUp', text: after.emergency ? L.fungoIdle : L.fungoUp });
  } else if (kind === 'overload') ev.push({ kind: 'overload', text: after.overload ? L.overloadOn : L.overloadOff });
  else if (kind === 'reset') ev.push({ kind: 'reset', text: L.reset, good: true });
  else if (id === 'QM' && kind === 'toggle') ev.push({ kind: after.qm ? 'qmOn' : 'qmOff', text: after.qm ? L.qmOn : L.qmOff });
  else if (kind === 'rewind') ev.push({ kind: 'rewind', text: L.rewind });
  // cambiamenti di stato che non dipendono dal tasto premuto: lo scatto del termico, il finecorsa
  if (!before.thermal.tripped && after.thermal.tripped) {
    if (after.contactor) ev.push({ kind: 'tripKo', text: L.tripKo, test: 'sovraccarico', result: 'ko', trip: true });
    else ev.push({ kind: 'tripOk', text: L.tripOk, test: 'sovraccarico', result: 'ok', good: true });
  }
  if (running(before) && after.atEnd && !before.atEnd && !running(after)) ev.push({ kind: 'fine', text: L.fine, test: 'fine', result: 'ok', good: true });
  return ev;
}
// Il nastro automatico (c46): le prove del collaudo dagli eventi. Il lotto si riconosce dal nastro che si ferma da solo con la
// spia accesa; il lotto nuovo da Marcia premuto a lotto pieno.
export function automaticoEvents(action, before, after) {
  if (!before || !after) return [];
  const L = PROVE.automatico.log, ev = [];
  const id = action && action.id;
  const kind = action && action.kind;
  const pressed = kind === 'press' || kind === 'toggle';
  if (id === 'SB1' && pressed) {
    if (before.lamp && !running(before)) {
      if (running(after)) ev.push({ kind: 'nuovo', text: L.nuovo, test: 'nuovo', result: 'ok', good: true });
      else ev.push({ kind: 'nuovoKo', text: L.nuovoKo, test: 'nuovo', result: 'ko', trip: true });
    } else if (!running(before) && running(after)) ev.push({ kind: 'marcia', text: L.marcia, test: 'marcia', result: 'ok', good: true });
    else if (!running(after)) ev.push({ kind: 'marciaNo', text: L.marciaNo });
  } else if (id === 'SB0' && pressed) {
    if (running(before) && !running(after)) ev.push({ kind: 'arresto', text: L.arresto, test: 'arresto', result: 'ok', good: true });
    else ev.push({ kind: 'arrestoIdle', text: L.arrestoIdle });
  } else if (id === 'SBE' && kind === 'toggle') {
    if (after.emergency && running(before) && !running(after)) ev.push({ kind: 'fungo', text: L.fungo, test: 'emergenza', result: 'ok', good: true });
    else ev.push({ kind: after.emergency ? 'fungoIdle' : 'fungoUp', text: after.emergency ? L.fungoIdle : L.fungoUp });
  } else if (kind === 'reset') ev.push({ kind: 'reset', text: L.reset, good: true });
  else if (id === 'QM' && kind === 'toggle') ev.push({ kind: after.qm ? 'qmOn' : 'qmOff', text: after.qm ? L.qmOn : L.qmOff });
  if (!before.thermal.tripped && after.thermal.tripped) ev.push({ kind: 'tripOk', text: L.tripOk, good: true });
  // il nastro si ferma da solo e la spia si accende: un lotto e' completo (da 4, come vuole l'ordine)
  if (!action && running(before) && !running(after) && !before.lamp && after.lamp) ev.push({ kind: 'lotto', text: L.lotto, test: 'lotto', result: after.count === 4 ? 'ok' : 'ko', good: after.count === 4 });
  return ev;
}
// Il contatore si azzera con Marcia e conta fino a 4? Si guarda il programma come lo vede il banco (solo lettura).
export function automaticoFixed(programs) {
  const ctu = ((programs || {}).PLC || []).map(r => (r.do || []).find(i => i.op === 'ctu')).find(Boolean);
  return !!ctu && ctu.r === 'I1' && ctu.pv === 4;
}
export const plantFixed = (name, snap) => (name === 'automatico' ? automaticoFixed(snap.programs) : name === 'fabbrica' ? false : name === 'casa' ? casaFixed(snap.programs, snap.level) : officinaFixed(snap.wires));

/* ---------- fabbrica: il turno di notte ---------- */

// Ora del turno: dalle 22:00 (cfg.clock) per cfg.shiftHours ore, in proporzione al tempo dello scenario.
export const shiftMinutes = (cfg, sh) => (sh && sh.duration ? Math.round((sh.t / sh.duration) * cfg.shiftHours * 60) : 0);
export const shiftClock = (cfg, sh, t = sh ? sh.t : 0) => clockText(cfg, sh && sh.duration ? Math.round((t / sh.duration) * cfg.shiftHours * 60) : 0);
// secondi dello scenario -> durata nel turno, "1 h 05" o "47 min"
export function shiftSpan(cfg, sh, sec) {
  const m = sh && sh.duration ? Math.round((sec / sh.duration) * cfg.shiftHours * 60) : 0;
  return m >= 60 ? Math.floor(m / 60) + ' h ' + String(m % 60).padStart(2, '0') : m + ' min';
}
const alarmState = (h, text) => { const a = h && h.alarms && h.alarms.find(x => x.text === text); return a ? a.state : 'off'; };
// La cella e' ferma adesso (per la barra del turno): senza potenza, o con "Ciclo bloccato".
export const cellDown = ps => !!(ps && ps.shift && ps.shift.started && !ps.shift.done && (!ps.powered || ['attivo', 'riconosciuto'].includes(alarmState(ps.hmi, 'Ciclo bloccato'))));

// Che cosa e' successo nella cella, per un'azione o per il tempo che passa. Il registro dice i sintomi (il pannello), non la
// causa: il guasto si nomina solo quando e' riparato.
export function fabbricaEvents(action, before, after) {
  if (!before || !after) return [];
  const P = PROVE.fabbrica, L = P.log, ev = [];
  const id = action && action.id, kind = action && action.kind;
  // Marcia e Riarmo contano a pulsante rilasciato (o premuti e rilasciati da tastiera)
  const released = btn => kind === 'release' || (kind === 'press' && !after[btn]);
  if (id === 'SBR' && released('reset')) ev.push(after.ks ? { kind: 'reset', text: L.reset, good: true } : { kind: 'resetKo', text: L.resetKo, trip: true });
  else if (id === 'SB1' && released('start')) ev.push(after.cycle ? { kind: 'marcia', text: L.marcia, good: true } : { kind: 'marciaIdle', text: L.marciaIdle });
  else if (id === 'SB0' && kind === 'press') ev.push({ kind: 'arresto', text: L.arresto });
  else if (id === 'E' && kind === 'toggle') ev.push(after.emergency ? { kind: 'fungo', text: L.fungo } : { kind: 'fungoUp', text: L.fungoUp });
  else if (id === 'P' && kind === 'toggle') ev.push(after.door ? { kind: 'doorOpen', text: L.doorOpen } : { kind: 'doorClose', text: L.doorClose });
  else if (kind === 'repair') {
    const name = P.sensorNames[id] || id;
    if (before.powered) ev.push({ kind: 'repairLive', text: L.repairLive, trip: true });
    ev.push({ kind: 'repair', text: L.repair + name + '.', good: !before.powered });
  } else if (kind === 'cable') ev.push({ kind: 'cable', text: L.cable, good: true });
  else if (kind === 'ack') ev.push({ kind: 'ack', text: L.ack });
  const b = before.shift || { faults: [] }, a = after.shift || { faults: [] };
  if (!b.started && a.started) ev.push({ kind: 'shiftStart', text: L.shiftStart, good: true });
  // allarmi nuovi sul pannello (solo se il pannello comunica)
  if (after.hmi && after.hmi.link) (after.hmi.alarms || []).forEach(x => {
    if (x.state !== 'attivo' || alarmState(before.hmi, x.text) === 'attivo') return;
    const k = x.text === 'Ciclo bloccato' ? 'stop' : x.text === 'Sicurezze aperte' ? 'safety' : 'alarm';
    if (k === 'safety' && !a.started) return;       // prima del riarmo le sicurezze sono aperte per forza
    ev.push({ kind: k, text: L.alarm + x.text + '.', trip: true });
  });
  if (before.hmi && before.hmi.link && after.hmi && !after.hmi.link) ev.push({ kind: 'panelLost', text: L.panelLost, trip: true });
  a.faults.forEach(f => {
    const was = b.faults.find(x => x.id === f.id);
    if (f.fixedAt !== null && (!was || was.fixedAt === null)) ev.push({ kind: 'fixed', text: (f.late ? L.late : L.fixed) + f.label + '.', good: !f.late, trip: f.late });
  });
  if (!b.done && a.done) ev.push({ kind: 'end', text: L.end, good: true });
  return ev;
}

// Barra del turno sotto la barra in alto: ora, pezzi contro obiettivo, fermo (rosso quando la cella e' ferma), guasti.
export function shiftHTML(cfg, ps, mem) {
  if (ps && ps.scene === 'casa') return casaShiftHTML(cfg, ps, mem);
  const sh = ps && ps.shift;
  if (!sh) return '';
  const fired = sh.faults.filter(f => f.firedAt !== null), fixed = fired.filter(f => f.fixedAt !== null);
  const left = sh.started ? shiftSpan(cfg, sh, Math.max(0, sh.duration - sh.t)) : '';
  const state = !sh.started ? 'Cella ferma: riarma e avvia' : sh.done ? 'Turno finito' : 'Fine turno tra ' + left;
  return `<div class="pshift-in" role="status"><span class="pshift-state">${esc(state)}</span>
    <span>Pezzi ${ps.robot.out} / ${ps.goal}</span>
    <span class="pshift-down${cellDown(ps) ? ' on' : ''}">Fermo ${esc(shiftSpan(cfg, sh, sh.down || 0))}</span>
    <span>Guasti riparati ${fixed.length} di ${fired.length}</span></div>`;
}

// La pulsantiera della cella con il pannello operatore, la portella e i sensori della cella (con il LED e "Sostituisci").
function fabbricaDockHTML(cfg, ps, unit, ui) {
  const diagOk = !!(unit && unit.diag && unit.diag.correct);
  let main = '';
  if (unit && unit.phase === 'fault') main = diagOk ? '<button class="pbtn y" type="button" data-pui="check">Verifica</button>' : '<button class="pbtn y" type="button" data-pui="answer">Rispondi</button>';
  else if (unit && unit.phase === 'done') main = '<button class="pbtn y" type="button" data-pui="finale">Rapporto</button>';
  const h = ps.hmi || { link: false, values: [], alarms: [] };
  const STATE = { attivo: 'da riconoscere', riconosciuto: 'riconosciuto', rientrato: 'rientrato' };
  const alarms = h.link
    ? ((h.alarms || []).filter(a => a.state !== 'off').map(a => `<li class="phmi-a ${esc(a.state)}"><b>${esc(a.text)}</b><span>${esc(STATE[a.state] || a.state)}</span></li>`).join('') || '<li class="phmi-none">Nessun allarme</li>')
    : '<li class="phmi-none">Nessun dato: il pannello non comunica</li>';
  const values = h.link ? (h.values || []).map(v => `<span><i>${esc(v.label)}</i><b>${esc(v.text || '—')}</b></span>`).join('') : '';
  // i sensori della cella: il LED dice se il PLC li vede azionati; un tocco sostituisce il sensore
  const sensors = Object.keys(cfg.sensorNames).map(id => `<button class="psens-b" type="button" data-prepair="${id}" aria-label="Sostituisci il sensore ${esc(cfg.sensorNames[id])} (${ps.sensors[id] && ps.sensors[id].act ? 'azionato' : 'a riposo'})"><span class="psens-led${ps.sensors[id] && ps.sensors[id].act ? ' on' : ''}" aria-hidden="true"></span>${esc(cfg.sensorNames[id])}</button>`).join('');
  return `<div class="pbox pstation pfab"><div class="pboxhead"><h2>${esc(cfg.dockTitle)}</h2><div class="prow">
      <button class="pchip" type="button" data-pui="schema" aria-pressed="${!!ui.schema}">${ui.schema ? 'Chiudi il banco' : 'Banco e schema'}</button>${main}</div></div>
    <div class="pst">
      <div class="pst-panel">
        <button class="pst-btn pst-go" type="button" data-phold="SB1" data-pid="SB1" aria-pressed="${!!ps.start}"><span class="pst-cap" aria-hidden="true"></span><span>Marcia</span></button>
        <button class="pst-btn pst-stop" type="button" data-phold="SB0" data-pid="SB0" aria-pressed="${!!ps.stop}"><span class="pst-cap" aria-hidden="true"></span><span>Arresto</span></button>
        <button class="pst-mush" type="button" data-pact="toggle" data-pid="E" aria-pressed="${!!ps.emergency}"><span class="pst-cap" aria-hidden="true"></span><span>${ps.emergency ? 'Sblocca' : 'Emergenza'}</span></button>
        <button class="pst-btn pst-reset" type="button" data-phold="SBR" data-pid="SBR" aria-pressed="${!!ps.reset}"><span class="pst-cap" aria-hidden="true"></span><span>Riarmo</span></button>
        <span class="pst-lamp${ps.powered ? ' on' : ''}"><span class="pst-cap" aria-hidden="true"></span><span>Robot</span><span class="vh">${ps.powered ? 'alimentato' : 'senza potenza'}</span></span>
      </div>
      <div class="pst-side pfab-side">
        <div class="phmi${h.link ? '' : ' off'}"><div class="phmi-head"><b>Pannello operatore</b>${h.link ? '<button class="pchip" type="button" data-pui="ack">Riconosci</button>' : '<button class="pchip" type="button" data-pui="cable">Ricollega il cavo</button>'}</div>
          <div class="phmi-v">${values}</div><ul class="phmi-al" aria-live="polite">${alarms}</ul></div>
        <div class="pst-mod pfab-door${ps.door ? ' open' : ''}"><span class="pst-name">Portella</span><button class="pst-sw" type="button" data-pact="toggle" data-pid="P" aria-pressed="${!!ps.door}">${ps.door ? 'Aperta' : 'Chiusa'}</button></div>
      </div>
    </div>
    <div class="psens"><span class="pst-name">Sensori della cella · tocca per sostituire</span><div class="psens-row">${sensors}</div></div></div>`;
}

// Il finale della fabbrica: il rapporto di fine turno, con i numeri del turno.
export function turnoReportHTML(cfg, stars, solved, ps, who, safeOk) {
  const R = cfg.report, sh = ps.shift;
  const rows = sh.faults.filter(f => f.firedAt !== null).map(f => `<li><span>${esc(f.label)}</span><b class="${f.fixedAt === null ? 'ko' : f.late ? 'late' : ''}">${esc(R.arrived)} ${esc(shiftClock(cfg, sh, f.firedAt))}, ${f.fixedAt === null ? esc(R.open) : esc(R.fixed) + ' ' + esc(shiftClock(cfg, sh, f.fixedAt)) + (f.late ? ' (' + esc(R.late) + ')' : '')}</b></li>`).join('');
  return `<div class="pcard preport pverbale" role="dialog" aria-modal="true" aria-labelledby="pW">
      <div class="prep-head"><span class="pk">${solved ? esc(cfg.kick.split(' · ')[0] + ' completato') : 'Turno consegnato'}</span><span class="prep-time">${esc(shiftClock(cfg, sh, 0))}–${esc(shiftClock(cfg, sh))}</span></div>
      <h2 id="pW">${esc(R.title)}</h2><p class="pverb-sub">${esc(R.sub)}</p>
      <dl class="prep">
        <dt>${esc(R.pieces)}</dt><dd>${esc(ps.robot.out + ' (' + R.goal + ' ' + ps.goal + ')')}</dd>
        <dt>${esc(R.down)}</dt><dd>${esc(shiftSpan(cfg, sh, sh.down || 0))}</dd>
        <dt>${esc(R.faults)}</dt><dd><ul class="pverb-tests">${rows}</ul></dd>
        <dt>${esc(R.safety)}</dt><dd>${esc(safeOk ? R.safeOk : R.safeKo)}</dd>
        <dt>Esito</dt><dd><span class="pstars" role="img" aria-label="${stars} stelle su 3">${[0, 1, 2].map(i => `<span class="pstar" style="--i:${i}">${STAR(i < stars)}</span>`).join('')}</span></dd>
        <dt>Manutentore</dt><dd class="tsign"${who ? ' data-notr' : ''}>${esc(who || 'Giocatore')}</dd>
      </dl>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-pui="again">Rifai il turno</button><button class="pbtn" type="button" data-pui="summary">Sintesi</button><button class="pbtn" type="button" data-pui="closeSheet">Guarda la cella</button></div></div>`;
}
function rememberEvents(mem, events) {
  if (!events.length) return mem;
  const m = { ...mem, tests: { ...(mem.tests || {}) } };
  // casa: il buio del contatore si ricorda (il passo "guarda la serata" resta fatto anche dopo Rifai la serata), con l'ora
  events.forEach(e => { if (e.kind === 'blackout') { m.blackout = true; m.blackoutAt = e.clock || m.blackoutAt || null; } });
  // una prova superata resta superata; il sovraccarico non superato si corregge solo superandolo
  events.forEach(e => { if (e.test && e.result && m.tests[e.test] !== 'ok') m.tests[e.test] = e.result; });
  return m;
}
// Il comando passa per il 95-96 del termico? Si guarda il cablaggio come lo vede il banco (solo lettura).
export function officinaFixed(wires) {
  const has = t => (wires || []).some(w => w.a === t || w.b === t);
  const bypass = (wires || []).some(w => [w.a, w.b].sort().join('~') === 'QM.2~SBE.1');
  return has('FR.95') && has('FR.96') && !bypass;
}
// Cablaggio corretto per la prima volta: le cinque prove si rifanno (il ricollaudo).
export function rememberFixed(mem, fixed) {
  if (!fixed || mem.fixed) return mem;
  return { ...mem, fixed: true, tests: {} };
}

/* ---------- scatti: quale storia raccontare ---------- */

// Uno scatto del differenziale appena successo, e cosa mostrare:
//  'isolated': una sola linea chiusa, quella che disperde: si vede dove scappa la corrente;
//  'multi':    piu' linee chiuse: il differenziale sente la dispersione ma non sa da dove (serve il metodo);
//  'test':     il tasto T, che crea apposta una piccola dispersione.
// null se non e' scattato niente.
export function tripStory(name, action, before, after) {
  if (name !== 'appartamento' || !before || !after || !action) return null;
  const tripped = after.rcd.tripped && (!before.rcd.tripped || (action.kind === 'toggle' && action.id === 'D'));
  if (!tripped) return null;
  if (action.kind === 'test') return { kind: 'test' };
  const closed = ['luce', 'prese', 'cucina'].filter(l => after.lines[l].on);
  if (closed.length === 1 && closed[0] === 'prese' && after.heaterPlugged) return { kind: 'isolated', line: 'prese', closed };
  return { kind: 'multi', closed };
}

/* ---------- registro ---------- */

// Che cosa e' successo con un'azione: { text, trip, good, view } (view: dove guardare dopo). null se niente da dire.
export function describe(name, action, before, after) {
  if (isPlant(name)) { const ev = plantEvents(name, action, before, after); return ev.length ? ev[ev.length - 1] : null; }
  const cfg = PROVE[name];
  if (!cfg || !before || !after || !action) return null;
  const L = cfg.log;
  const newTrip = !before.rcd.tripped && after.rcd.tripped;
  if (action.kind === 'test') return after.rcd.tripped ? { text: L.test, trip: newTrip, view: 'insieme' } : null;
  const id = action.id;
  if (id === 'D') {
    if (after.rcd.on) return { text: L.rearm, good: true };
    if (after.rcd.tripped && !before.rcd.on) return { text: L.rearmTrip, trip: true, view: 'insieme' };
    return { text: L.rcdOff };
  }
  const line = lineOf(name, id);
  if (line) {
    if (after.lines[line].on && !before.lines[line].on) {
      if (newTrip) return { text: L.lineOnTrip[line], trip: true, view: 'insieme' };
      const ctl = cfg.controls.find(c => c.id === id);
      return { text: L.lineOn[line], good: after.rcd.on, view: after.rcd.on ? ctl.view : null };
    }
    if (!after.lines[line].on && before.lines[line].on) return { text: L.lineOff[line] };
    return null;
  }
  if (cfg.device && id === cfg.device.id) {
    if (!after.heaterPlugged) return { text: L.unplug, good: true, view: cfg.device.view };
    return newTrip ? { text: L.plugTrip, trip: true, view: 'insieme' } : { text: L.plug, view: cfg.device.view };
  }
  if (id === 'S') return { text: after.switchOn ? L.switchOn : L.switchOff, view: after.lamp ? 'corridoio' : null };
  return null;
}

export const clockText = (cfg, minutes) => {
  const t = cfg.clock[0] * 60 + cfg.clock[1] + minutes;
  const h = Math.floor(t / 60) % 24, m = t % 60;
  return h + ':' + (m < 10 ? '0' : '') + m;
};

/* ---------- pezzi della pagina ---------- */

// La chiamata che apre la prova. Il pulsante sblocca anche l'audio.
export function callHTML(cfg, ready) {
  return `<div class="pcall"><span class="pk">${esc(cfg.kick)} · ${esc(cfg.place)}</span>
      <div class="pcall-head">${cfg.call.label ? `<span class="pcall-label">${esc(cfg.call.label)}</span>` : '<span class="pcall-dot" aria-hidden="true"></span>'}<span class="pcall-time">${esc(clockText(cfg, 0))}</span><span class="pcall-where">${esc(cfg.call.where)}</span></div>
      <h2>${esc(cfg.title)}</h2>
      <p class="pcall-quote">${esc(cfg.call.quote)}</p>
      <button class="pbtn y pgo" type="button" data-pui="enter">${esc(cfg.call.go || 'Entra')}</button>
      <span class="pload${ready ? ' done' : ''}" aria-hidden="true"><i></i></span></div>
    <button class="pskip" type="button" data-pui="skipIntro">Salta</button>`;
}

const TOOL = { wires: 'Fili', torch: 'Torcia', sound: 'Suono', log: 'Registro' };
// Barra in alto: mappa, titolo e ora; a destra gli strumenti.
export function topHTML(cfg, clock, ui) {
  const t = (k, label, pressed) => `<button class="pchip" type="button" data-pui="${k}"${pressed === undefined ? '' : ` aria-pressed="${!!pressed}"`}>${label}</button>`;
  return `<a class="pmap" href="#/home">&larr; Mappa</a>
    <div class="ptitle"><span class="pk">${esc(cfg.kick)}</span><b>${esc(cfg.title)}</b></div>
    <div class="ptools"><span class="pclock" aria-label="Ora">${esc(clock)}</span>${(cfg.tools || ['wires', 'torch', 'sound', 'log']).map(k => t(k, TOOL[k], ui[k])).join('')}</div>`;
}

// Il metodo come il binario della mappa: fase e neutro, un nodo per passo; il passo corrente e' scritto grande.
export function stepsHTML(steps) {
  const li = steps.map((st, i) => `<li class="${st.ko ? 'ko' : st.done ? 'done' : st.cur ? 'cur' : ''}"><span class="pnode" aria-hidden="true"></span><span class="ptxt"><span class="vh">${i + 1}. </span>${esc(st.text)}</span></li>`).join('');
  return `<h2 class="vh">Il metodo</h2><ol class="psteps">${li}</ol>`;
}

export function logHTML(entries) {
  const li = entries.map(e => `<li class="${e.trip ? 'trip' : e.good ? 'good' : ''}"><time>${esc(e.clock)}</time><span>${esc(e.text)}</span></li>`).join('');
  return `<div class="plog-head"><h2>Registro</h2><button class="pchip" type="button" data-pui="log">Chiudi</button></div><ol class="plog" aria-live="polite">${li}</ol>`;
}

const STATE_WORD = { on: 'Chiuso', off: 'Aperto', tripped: 'Scattato', armed: 'Armato' };

// Il quadro in basso: moduli DIN con la leva, la spia, la tensione a valle; sul differenziale il tasto T e il bollino Δ.
// Dopo la diagnosi giusta, anche l'apparecchio da scollegare.
export function dockHTML(cfg, ps, unit, ui) {
  if (cfg.shiftHours) return ps.scene === 'casa' ? casaDockHTML(cfg, ps, unit, ui) : fabbricaDockHTML(cfg, ps, unit, ui);
  if (cfg.tests) return stationHTML(cfg, ps, unit, ui);
  const mods = cfg.controls.map(c => {
    let on, trip, live;
    if (c.kind === 'rcd') { on = ps.rcd.on; trip = ps.rcd.tripped; live = ps.supply && ps.rcd.on; }
    else { const l = ps.lines[c.line]; on = l.on; trip = l.tripped; live = ps.supply && ps.rcd.on && l.on; }
    const word = trip ? STATE_WORD.tripped : c.kind === 'rcd' ? (on ? STATE_WORD.armed : STATE_WORD.off) : (on ? STATE_WORD.on : STATE_WORD.off);
    const test = c.kind === 'rcd' ? `<button class="ptest" type="button" data-pact="test" data-pid="${c.id}" aria-label="Tasto di prova del differenziale">T</button>` : '';
    const delta = c.kind === 'rcd' && ui.delta ? `<span class="pdelta" role="status">${esc(cfg.story.delta)}</span>` : '';
    return `<div class="pmod ${c.kind}" data-on="${on}" data-trip="${!!trip}"${c.line ? ` data-line="${c.line}"` : ''}>
        <span class="pled${live ? ' on' : ''}" aria-hidden="true"></span>${test}${delta}
        <button class="plever" type="button" data-pact="toggle" data-pid="${c.id}"${c.line ? ` data-line="${c.line}"` : ''}><span class="pknob" aria-hidden="true"></span><span class="pword">${word}</span></button>
        <span class="pname">${esc(c.short || c.name)}</span>
        <span class="pvolt${live ? ' live' : ''}"><span class="vh">Tensione a valle</span> ${live ? '230 V' : '0 V'}</span><span class="pamp">${esc(c.sub)}</span>
      </div>`;
  }).join('');
  const d = cfg.device, diagOk = !!(unit && unit.diag && unit.diag.correct);
  const dev = d && diagOk && unit.phase === 'fault'
    ? `<button class="pdev" type="button" data-pact="toggle" data-pid="${d.id}"><b>${esc(d.name)}</b><span>${esc(ps.heaterPlugged ? d.plugged : d.unplugged)}</span><span class="pdo">${esc(ps.heaterPlugged ? d.act : d.undo)}</span></button>` : '';
  let main = '';
  if (unit && unit.phase === 'fault') main = diagOk ? '<button class="pbtn y" type="button" data-pui="check">Verifica</button>' : '<button class="pbtn y" type="button" data-pui="answer">Rispondi</button>';
  else if (unit && unit.phase === 'done') main = '<button class="pbtn y" type="button" data-pui="finale">Rapporto</button>';
  return `<div class="pbox"><div class="pboxhead"><h2>${esc(cfg.dockTitle)}</h2><div class="prow">
      <button class="pchip" type="button" data-pui="schema" aria-pressed="${!!ui.schema}">${ui.schema ? 'Chiudi lo schema' : 'Schema e multimetro'}</button>${main}</div></div>
    <div class="prail">${mods}</div>${dev}</div>`;
}

// Suggerimento: dice il passo corrente con parole sue.
export function hintOf(name, steps) {
  if (isPlant(name)) return PROVE[name].hints[steps.findIndex(s => s.cur)] || '';
  if (name !== 'appartamento') return '';
  const i = steps.findIndex(s => s.cur);
  return [
    PROVE.appartamento.findHint,
    'Prima apri le tre linee: così il differenziale potrà restare armato.',
    'Ora riarma il differenziale: con le linee aperte non ha niente da sentire.',
    'Richiudi una linea alla volta e guarda i fili: quale fa scattare tutto?',
    'Hai visto quale linea lo fa scattare. Rispondi.',
    'Togli la causa: scollega l’apparecchio che disperde, nella scena o qui sotto.',
    'Riarma il differenziale, richiudi le tre linee e premi Verifica.',
  ][i] || '';
}

// Domanda della prova: le opzioni della diagnosi come carte con la lettera, con l'esito dopo la risposta.
export function questionHTML(unitDef, diag) {
  const f = unitDef.fault, q = f.diagnosis;
  const opts = q.options.map((o, i) => {
    const cls = diag && diag.option === o.id ? (diag.correct ? ' yes' : ' no') : '';
    return `<button class="popt${cls}" type="button" data-pdiag="${o.id}"${diag && diag.correct ? ' disabled' : ''}><span class="pletter" aria-hidden="true">${'ABCD'[i]}</span><span>${esc(o.text)}</span></button>`;
  }).join('');
  const fb = !diag ? '' : diag.correct
    ? `<p class="pfb ok"><b>Giusto.</b> ${esc(q.why)}</p><p class="pfb">${esc(f.fixSay)}</p>`
    : '<p class="pfb ko"><b>Non proprio.</b> Richiudi solo quella linea con il differenziale armato: se non scatta, non è lei.</p>';
  return `<div class="pcard" role="dialog" aria-modal="true" aria-labelledby="pQ"><span class="pk">Prova</span><h2 id="pQ">${esc(q.question)}</h2><div class="popts">${opts}</div>${fb}
      <div class="prow"><button class="pbtn${diag && diag.correct ? ' y' : ''}" type="button" data-pui="closeSheet">${diag && diag.correct ? 'Torna al quadro' : 'Chiudi'}</button></div></div>`;
}

// La pulsantiera dell'officina, come oggetto: Marcia e Arresto (da tenere premuti il tempo di un tocco), il fungo che si
// blocca, la spia. Accanto: la leva del sovraccarico, il salvamotore (con il cartellino dei lavori quando e' aperto),
// il termico con il tasto di riarmo, e il pacco da rimettere all'inizio.
function stationHTML(cfg, ps, unit, ui) {
  const diagOk = !!(unit && unit.diag && unit.diag.correct);
  let main = '';
  if (unit && unit.phase === 'fault') main = diagOk ? '<button class="pbtn y" type="button" data-pui="check">Verifica</button>' : '<button class="pbtn y" type="button" data-pui="answer">Rispondi</button>';
  else if (unit && unit.phase === 'done') main = '<button class="pbtn y" type="button" data-pui="finale">Verbale</button>';
  const fr = ps.thermal.tripped ? 'Scattato' : ps.thermal.heat > 0.02 ? 'Scalda' : 'Armato';
  const auto = ps.scene === 'automatico';
  // nel nastro automatico, al posto della leva del sovraccarico: il conteggio del PLC e la spia del lotto
  const left = auto
    ? `<div class="pst-count" role="status"><span class="pst-name">Pacchi nel lotto</span><b>${ps.plc.on ? ps.count : '–'}<small> / ${ps.preset}</small></b><span class="pst-cbar" style="--k:${Math.min(1, ps.count / Math.max(1, ps.preset))}" aria-hidden="true"></span></div>`
    : `<button class="pst-lever" type="button" data-pui="overload" aria-pressed="${!!ps.overload}"><span class="pst-knob" aria-hidden="true"></span><span>${ps.overload ? 'Libera il pacco' : 'Incastra un pacco'}</span></button>`;
  return `<div class="pbox pstation"><div class="pboxhead"><h2>${esc(cfg.dockTitle)}</h2><div class="prow">
      <button class="pchip" type="button" data-pui="schema" aria-pressed="${!!ui.schema}">${ui.schema ? 'Chiudi il banco' : 'Banco e schema'}</button>${main}</div></div>
    <div class="pst">
      <div class="pst-panel">
        <button class="pst-btn pst-go" type="button" data-phold="SB1" data-pid="SB1" aria-pressed="${!!ps.start}"><span class="pst-cap" aria-hidden="true"></span><span>Marcia</span></button>
        <button class="pst-btn pst-stop" type="button" data-phold="SB0" data-pid="SB0" aria-pressed="${!!ps.stop}"><span class="pst-cap" aria-hidden="true"></span><span>Arresto</span></button>
        <button class="pst-mush${ui.alarm ? ' alarm' : ''}" type="button" data-pact="toggle" data-pid="SBE" aria-pressed="${!!ps.emergency}"><span class="pst-cap" aria-hidden="true"></span><span>${ps.emergency ? 'Sblocca' : 'Emergenza'}</span></button>
        <span class="pst-lamp${ps.lamp ? ' on' : ''}${auto ? ' lot' : ''}"><span class="pst-cap" aria-hidden="true"></span><span>${auto ? 'Lotto pieno' : 'Spia'}</span><span class="vh">${ps.lamp ? 'accesa' : 'spenta'}</span></span>
      </div>
      <div class="pst-side">
        ${left}
        <div class="pst-mod qm${ps.qm ? '' : ' open'}"><span class="pst-name">Salvamotore</span><button class="pst-sw" type="button" data-pact="toggle" data-pid="QM" aria-pressed="${!!ps.qm}">${ps.qm ? 'Chiuso' : 'Aperto'}</button>${ps.qm ? '' : '<span class="pst-tag">Lavori in corso</span>'}</div>
        <div class="pst-mod fr${ps.thermal.tripped ? ' trip' : ''}"><span class="pst-name">Termico</span><span class="pst-heat" style="--h:${Math.round(ps.thermal.heat * 100)}%" aria-hidden="true"></span><span class="pst-state">${fr}</span><button class="pst-sw" type="button" data-pact="reset" data-pid="FR"${ps.thermal.tripped ? '' : ' disabled'}>Riarma</button></div>
        ${auto ? '' : '<button class="pchip" type="button" data-pui="rewind">Rimetti il pacco</button>'}
      </div>
    </div></div>`;
}

// Il finale dell'officina: il verbale di collaudo, con l'esito di ogni prova.
export function verbaleHTML(cfg, stars, solved, from, to, who) {
  const R = cfg.report;
  const rows = cfg.tests.map(t => `<li><span>${esc(t.name)}</span><b>${esc(R.ok)}</b></li>`).join('');
  return `<div class="pcard preport pverbale" role="dialog" aria-modal="true" aria-labelledby="pW">
      <div class="prep-head"><span class="pk">${solved ? esc(cfg.kick.split(' · ')[0] + ' completato') : 'Impianto funzionante'}</span><span class="prep-time">${esc(from)}–${esc(to)}</span></div>
      <h2 id="pW">${esc(R.title)}</h2><p class="pverb-sub">${esc(R.sub)}</p>
      <dl class="prep">
        <dt>Dove</dt><dd>${esc(cfg.call.where)}</dd>
        <dt>Prove</dt><dd><ul class="pverb-tests">${rows}</ul></dd>
        <dt>Guasto</dt><dd>${esc(R.fault)}</dd>
        <dt>Intervento</dt><dd>${esc(R.fix)}</dd>
        <dt>Esito</dt><dd><span class="pstars" role="img" aria-label="${stars} stelle su 3">${[0, 1, 2].map(i => `<span class="pstar" style="--i:${i}">${STAR(i < stars)}</span>`).join('')}</span></dd>
        <dt>Collaudatore</dt><dd class="tsign"${who ? ' data-notr' : ''}>${esc(who || 'Giocatore')}</dd>
      </dl>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-pui="again">Rifai la prova</button><button class="pbtn" type="button" data-pui="summary">Sintesi</button><button class="pbtn" type="button" data-pui="closeSheet">Guarda il nastro</button></div></div>`;
}

const STAR = on => `<svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.9 7.4.7-5.6 4.9 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3L1.6 9.6 9 8.9z" fill="${on ? '#F5B800' : 'none'}" stroke="${on ? '#1B2230' : '#7C8494'}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

// Il finale: il rapporto d'intervento, come quello che l'elettricista lascia al cliente.
export function reportHTML(cfg, stars, solved, from, to) {
  const R = cfg.report;
  return `<div class="pcard preport" role="dialog" aria-modal="true" aria-labelledby="pW">
      <div class="prep-head"><span class="pk">${solved ? 'Prova superata' : 'Impianto funzionante'}</span><span class="prep-time">${esc(from)}–${esc(to)}</span></div>
      <h2 id="pW">${esc(R.title)}</h2>
      <dl class="prep">
        <dt>Dove</dt><dd>${esc(cfg.call.where)}</dd>
        <dt>Guasto</dt><dd>${esc(R.fault)}</dd>
        <dt>Intervento</dt><dd>${esc(R.fix)}</dd>
        <dt>Esito</dt><dd><span class="pstars" role="img" aria-label="${stars} stelle su 3">${[0, 1, 2].map(i => `<span class="pstar" style="--i:${i}">${STAR(i < stars)}</span>`).join('')}</span></dd>
      </dl>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-pui="again">Rifai la prova</button><button class="pbtn" type="button" data-pui="summary">Sintesi</button><button class="pbtn" type="button" data-pui="closeSheet">Guarda la casa</button></div></div>`;
}


/* ---------- casa: una sera d'inverno (c55) ---------- */

// Le soglie del distacco nel programma (confronti "MW0 maggiore di") stanno sotto il limite del contatore? Si guarda il programma
// come lo vede il banco (solo lettura). Nessuna soglia nel programma: non corretto.
export function casaFixed(programs, level) {
  const limit = (((level && level.process && level.process.params) || {}).limit || 6) * 1000;
  const found = [];
  const walk = e => { if (!Array.isArray(e)) return; if (e[0] === 'gt' && e[1] === 'MW0' && typeof e[2] === 'number') found.push(e[2]); else e.slice(1).forEach(walk); };
  ((programs || {}).PLC || []).forEach(r => walk(r.if));
  return found.length > 0 && found.every(x => x < limit);
}

// Che cosa e' successo nella casa, per un'azione dell'allievo o per il tempo che passa (gli eventi della serata li fa il motore).
export function casaEvents(action, before, after) {
  if (!before || !after) return [];
  const L = PROVE.casa.log, ev = [];
  const id = action && action.id, kind = action && action.kind;
  const b = before.shift || { faults: [], events: [] }, a = after.shift || { faults: [], events: [] };
  if (id === 'QG' && kind === 'toggle') {
    if (!b.started && a.started) ev.push({ kind: 'shiftStart', text: L.shiftStart, good: true });
    else ev.push({ kind: after.qg ? 'qgOn' : 'qgOff', text: after.qg ? L.qgOn : L.qgOff });
  } else if (id === 'S2' && kind === 'toggle' && before.flood.wet && !after.flood.wet) ev.push({ kind: 'dried', text: L.dried, good: true });
  // la tacitazione si giudica al rilascio: con la sonda ancora bagnata la sirena riparte (la riuscita la dice "allagamento gestito")
  else if (id === 'TA' && kind === 'release' && after.flood.siren && after.flood.wet) ev.push({ kind: 'silenceWet', text: L.silenceWet, trip: true });
  // cambiamenti che vengono dalla serata (eventi, regole del PLC, modello)
  if (!before.ev.plugged && after.ev.plugged) ev.push({ kind: 'car', text: L.car, view: 'tettoia' });
  else if (before.ev.plugged && after.ev.plugged && after.powered) {
    if (before.ev.charging && !after.ev.charging) ev.push({ kind: 'shed', text: L.shed });
    else if (!before.ev.charging && after.ev.charging && before.powered) ev.push({ kind: 'unshed', text: L.unshed, good: true });
  }
  if (!before.oven && after.oven) ev.push({ kind: 'oven', text: L.oven });
  else if (before.oven && !after.oven && after.powered) ev.push({ kind: 'ovenOff', text: L.ovenOff });
  const w0 = before.zones[0].window, w1 = after.zones[0].window;
  if (w0 !== w1) ev.push({ kind: w1 ? 'windowOpen' : 'windowClose', text: w1 ? L.windowOpen : L.windowClose });
  if (!before.flood.wet && after.flood.wet) ev.push({ kind: 'flood', text: L.flood, trip: true, view: 'bagno' });
  if (!before.blackout && after.blackout) ev.push({ kind: 'blackout', text: L.blackout, trip: true, view: 'esterno' });
  if (!before.hp.broken && after.hp.broken) ev.push({ kind: 'broken', text: L.broken, trip: true });
  a.faults.forEach(f => {
    const was = b.faults.find(x => x.id === f.id);
    if (f.fixedAt !== null && (!was || was.fixedAt === null)) ev.push({ kind: 'fixed', text: f.late ? L.late : L.fixed, good: !f.late, trip: f.late });
  });
  if (!b.done && a.done) ev.push({ kind: 'end', text: L.end, good: !after.blackout });
  return ev;
}

const kwText = x => (Math.round(x * 10) / 10).toFixed(1).replace('.', ',') + ' kW';
const num1 = x => (Math.round(x * 10) / 10).toFixed(1).replace('.', ',');
// fondo scala del misuratore del contatore (6 kW, satura a 20,5 mA: circa 6,4 kW)
const meterKw = (g, limit) => Math.min(g, limit * (1 + 0.5 / 16 * 2));

// Barra della serata sotto la barra in alto: stato, rete contro limite, batteria, auto.
function casaShiftHTML(cfg, ps, mem) {
  const sh = ps.shift;
  if (!sh) return '';
  const left = sh.started ? shiftSpan(cfg, sh, Math.max(0, sh.duration - sh.t)) : '';
  const state = ps.blackout ? 'Casa al buio' + (mem && mem.blackoutAt ? ' dalle ' + mem.blackoutAt : '') : !sh.started ? 'Generale aperto: chiudilo per cominciare' : sh.done ? 'Serata finita' : 'Fine serata tra ' + left;
  const over = ps.kw.grid > ps.kw.limit;
  return `<div class="pshift-in" role="status"><span class="pshift-state">${esc(state)}</span>
    <span class="pshift-down${over || ps.blackout ? ' on' : ''}">Rete ${esc(kwText(ps.kw.grid))} / ${esc(kwText(ps.kw.limit))}</span>
    <span>Batteria ${Math.round(ps.soc)} %</span>
    <span>Auto ${esc(num1(ps.ev.kwh))} kWh</span></div>`;
}

// Il pannello a muro della casa (un tablet): potenze, batteria, auto, le due zone, la pompa, gli allarmi; tasti del generale, della
// tacitazione, della sonda e della finestra. Al buio il tablet resta acceso con la sua batteria e mostra gli ultimi valori
// prima dello stacco (ui.lastLit: lo stato della casa prima del buio, lo tiene la pagina).
function casaDockHTML(cfg, ps, unit, ui) {
  const diagOk = !!(unit && unit.diag && unit.diag.correct);
  const sh = ps.shift || {};
  let main = '';
  if (unit && unit.phase === 'fault') main = diagOk ? '<button class="pbtn y" type="button" data-pui="check">Verifica</button>' : '<button class="pbtn y" type="button" data-pui="answer">Rispondi</button>';
  else if (unit && unit.phase === 'done') main = '<button class="pbtn y" type="button" data-pui="finale">Verbale</button>';
  const replay = unit && unit.phase === 'fault' && (ps.blackout || sh.done) ? '<button class="pchip" type="button" data-pui="replay">Rifai la serata</button>' : '';
  const v = ps.blackout && ui && ui.lastLit ? ui.lastLit : ps;      // i valori da mostrare
  const k = v.kw, lim = k.limit;
  const bar = x => Math.max(0, Math.min(1, x / (lim * 1.5)));
  const metered = meterKw(k.grid, lim), sat = k.grid > metered + 1e-6;
  const zones = v.zones.map(z => `<div class="pcasa-z${z.window ? ' win' : ''}"><span class="pst-name">${esc(cfg.zoneNames[z.id] || z.id)}</span><b>${esc(num1(z.T))} °C</b><span>${z.valve > 0.5 ? 'valvola aperta' : 'valvola chiusa'}${z.window ? ' · finestra aperta' : ''}</span></div>`).join('');
  const alarms = [];
  if (ps.blackout) alarms.push(`<li class="phmi-a attivo"><b>Contatore staccato</b><span>${esc(ui && ui.blackoutAt ? 'alle ' + ui.blackoutAt : '')}</span></li>`);
  if (ps.flood.siren || ps.flood.wet) alarms.push(`<li class="phmi-a ${ps.flood.siren ? 'attivo' : 'rientrato'}"><b>Allagamento in bagno</b><span>${ps.flood.wet ? 'sonda bagnata' : 'sonda asciutta'}${ps.flood.siren ? ' · sirena' : ''}</span></li>`);
  if (ps.hp.broken) alarms.push('<li class="phmi-a attivo"><b>Pompa di calore guasta</b><span>ha girato a vuoto</span></li>');
  const hp = ps.hp.broken ? 'guasta' : v.hp.on ? 'in funzione' : 'ferma';
  const car = !v.ev.plugged ? 'non c’è' : v.ev.charging ? 'in carica' : 'attaccata, ferma';
  return `<div class="pbox pstation pcasa"><div class="pboxhead"><h2>${esc(cfg.dockTitle)}</h2><div class="prow">
      <button class="pchip" type="button" data-pui="schema" aria-pressed="${!!(ui && ui.schema)}">${ui && ui.schema ? 'Chiudi il banco' : 'Banco e programma'}</button>${replay}${main}</div></div>
    <div class="pcasa-in">
      <div class="phmi pcasa-tab${ps.blackout ? ' dark' : ''}">
        <div class="phmi-head"><b>${ps.blackout ? 'Ultimi valori prima del buio' : 'La casa adesso'}</b><span>${esc(clockText(cfg, Math.round((v.hour - cfg.clock[0] - cfg.clock[1] / 60) * 60)))}</span></div>
        <div class="pcasa-p">
          <span><i>Sole</i><b>${esc(kwText(k.pv))}</b></span>
          <span><i>Casa</i><b>${esc(kwText(k.load))}</b></span>
          <span><i>Batteria</i><b>${Math.round(v.soc)} %</b><small>${esc(k.batt > 0.05 ? 'si carica ' + kwText(k.batt) : k.batt < -0.05 ? 'dà ' + kwText(-k.batt) + ' alla casa' : 'ferma')}</small></span>
          <span class="pcasa-grid${k.grid > lim ? ' over' : ''}"><i>Rete</i><b>${esc(kwText(k.grid))}</b><span class="pcasa-bar" style="--g:${bar(k.grid)};--l:${bar(lim)}" aria-hidden="true"></span><small>limite ${esc(kwText(lim))} · il misuratore legge ${esc(kwText(metered))}${sat ? ' (fondo scala)' : ''}</small></span>
        </div>
        <div class="pcasa-row"><span><i>Auto</i><b>${esc(car)}</b><small>${esc(num1(v.ev.kwh))} kWh</small></span><span><i>Pompa di calore</i><b>${esc(hp)}</b></span><span><i>Forno</i><b>${v.oven ? 'acceso' : 'spento'}</b></span></div>
        <div class="pcasa-zs">${zones}</div>
        <ul class="phmi-al" aria-live="polite">${alarms.join('') || '<li class="phmi-none">Nessun allarme</li>'}</ul>
      </div>
      <div class="pst-side pcasa-keys">
        <div class="pst-mod${ps.qg ? '' : ' open'}"><span class="pst-name">Generale</span><button class="pst-sw" type="button" data-pact="toggle" data-pid="QG" aria-pressed="${!!ps.qg}">${ps.qg ? 'Chiuso' : 'Aperto'}</button></div>
        <button class="pst-btn pst-reset" type="button" data-phold="TA" data-pid="TA" aria-pressed="${!!ps.silence}"><span class="pst-cap" aria-hidden="true"></span><span>Tacitazione</span></button>
        <button class="pchip" type="button" data-pact="toggle" data-pid="S2"${ps.flood.wet ? '' : ' disabled'}>Asciuga la sonda</button>
        <button class="pchip" type="button" data-pact="toggle" data-pid="W1" aria-pressed="${!!ps.zones[0].window}">${ps.zones[0].window ? 'Chiudi la finestra' : 'Apri la finestra'}</button>
      </div>
    </div></div>`;
}

// Il finale della casa: il verbale di consegna, con i numeri della serata.
export function serataReportHTML(cfg, stars, solved, ps, who, safeOk, mem = {}) {
  const R = cfg.report, sh = ps.shift || { faults: [] }, e = ps.energy;
  const fl = (sh.faults || []).find(f => f.id === 'allagamento');
  const flood = !fl || fl.firedAt === null ? R.none
    : `${R.arrived} ${shiftClock(cfg, sh, fl.firedAt)}, ${fl.fixedAt === null ? R.open : R.fixed + ' ' + shiftClock(cfg, sh, fl.fixedAt) + (fl.late ? ' (' + R.late + ')' : '')}`;
  const euro = x => (Math.round(x * 100) / 100).toFixed(2).replace('.', ',') + ' €';
  return `<div class="pcard preport pverbale" role="dialog" aria-modal="true" aria-labelledby="pW">
      <div class="prep-head"><span class="pk">${solved ? esc(cfg.kick.split(' · ')[0] + ' completato') : 'Casa consegnata'}</span><span class="prep-time">${esc(shiftClock(cfg, sh, 0))}–${esc(shiftClock(cfg, sh))}</span></div>
      <h2 id="pW">${esc(R.title)}</h2><p class="pverb-sub">${esc(R.sub)}</p>
      <dl class="prep">
        <dt>${esc(R.energy)}</dt><dd>${esc(`${R.prod} ${num1(e.prod)} kWh · ${R.imp} ${num1(e.imp)} kWh · ${R.exp} ${num1(e.exp)} kWh · ${R.cost} ${euro(e.cost)}`)}</dd>
        <dt>${esc(R.car)}</dt><dd>${esc(num1(ps.ev.kwh) + ' kWh')}</dd>
        <dt>${esc(R.comfort)}</dt><dd>${esc(`${cfg.zoneNames.soggiorno} ${ps.comfort.soggiorno} · ${cfg.zoneNames.camera} ${ps.comfort.camera}`)}</dd>
        <dt>${esc(R.pump)}</dt><dd>${esc(ps.hp.broken ? R.pumpKo : R.pumpOk)}</dd>
        <dt>${esc(R.meter)}</dt><dd>${esc(ps.blackout ? R.meterKo + ' ' + (mem.blackoutAt || '') : R.meterOk)}</dd>
        <dt>${esc(R.flood)}</dt><dd>${esc(flood)}</dd>
        ${solved ? `<dt>Guasto</dt><dd>${esc(R.fault)}</dd><dt>Intervento</dt><dd>${esc(R.fix)}</dd>` : ''}
        <dt>${esc(R.safety)}</dt><dd>${esc(safeOk ? R.safeOk : R.safeKo)}</dd>
        <dt>Esito</dt><dd><span class="pstars" role="img" aria-label="${stars} stelle su 3">${[0, 1, 2].map(i => `<span class="pstar" style="--i:${i}">${STAR(i < stars)}</span>`).join('')}</span></dd>
        <dt>Installatore</dt><dd class="tsign"${who ? ' data-notr' : ''}>${esc(who || 'Giocatore')}</dd>
      </dl>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-pui="again">Rifai la serata</button><button class="pbtn" type="button" data-pui="summary">Sintesi</button><button class="pbtn" type="button" data-pui="closeSheet">Guarda la casa</button></div></div>`;
}
