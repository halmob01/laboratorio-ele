// Cornice delle prove 3D (milestone): i pezzi della pagina come HTML, a partire dallo stato.
// Funzioni pure: niente DOM, niente regole del gioco. La pagina (page.js) le usa e collega i tocchi alla sessione.
// Lo stesso schema vale per ogni prova; il contenuto (comandi, passi, frasi) sta in src/content/prove.js.

import { PROVE } from '../content/prove.js';

const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const provaOf = name => PROVE[name] || null;

/* ---------- memoria della prova e passi ---------- */

// Quello che lo stato del momento non dice ma i passi devono ricordare (le linee sono gia' state aperte tutte, ecc.).
export const newMemory = () => ({ opened: false, rearmed: false, found: false });

// action: { kind: 'toggle' | 'test', id }; before/after: provaState prima e dopo l'azione.
export function remember(name, mem, action, before, after) {
  if (name !== 'appartamento' || !after) return mem;
  const m = { ...mem };
  const lines = after.lines;
  if (!lines.luce.on && !lines.prese.on && !lines.cucina.on) m.opened = true;
  if (m.opened && after.rcd.on) m.rearmed = true;
  const line = action && lineOf(name, action.id);
  if (m.rearmed && line && before && before.rcd.on && !before.lines[line].on && after.lines[line].on && after.rcd.tripped) m.found = true;
  return m;
}
const lineOf = (name, id) => { const c = (PROVE[name].controls || []).find(x => x.id === id); return c ? c.line : null; };

// Passi della prova: { text, done, cur }. Il passo corrente e' il primo non fatto dopo l'ultimo fatto.
export function stepsOf(name, ps, unit, mem) {
  const cfg = PROVE[name];
  if (!cfg || !ps) return [];
  let done;
  if (name === 'appartamento') {
    const diagOk = !!(unit && unit.diag && unit.diag.correct);
    done = [mem.opened, mem.rearmed, mem.found, diagOk, !ps.heaterPlugged, unit && unit.phase === 'done'];
  } else done = cfg.steps.map(() => false);
  if (unit && unit.phase === 'done') done = done.map(() => true);
  const last = done.lastIndexOf(true);
  const cur = done.findIndex((d, i) => !d && i > last);
  return cfg.steps.map((text, i) => ({ text, done: !!done[i], cur: i === cur }));
}

/* ---------- registro ---------- */

// Che cosa e' successo con un'azione: { text, trip, good, view } (view: dove guardare dopo). null se niente da dire.
export function describe(name, action, before, after) {
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

export function introHTML(cfg) {
  return `<div class="pintro-box"><span class="pk">${esc(cfg.kick)} · ${esc(cfg.place)}</span>
      <h2>${esc(cfg.title)}</h2>
      <span class="pload" aria-hidden="true"><i></i></span>
      <span class="ptag">${esc(cfg.tagline)}</span></div>
    <button class="pskip" type="button" data-pui="skipIntro">Salta</button>`;
}

export function missionHTML(cfg, steps, clock) {
  const li = steps.map((st, i) => `<li class="${st.done ? 'done' : st.cur ? 'cur' : ''}" data-n="${i + 1}"><span>${esc(st.text)}</span></li>`).join('');
  return `<div class="pback"><a href="#/home">&larr; Mappa</a><span class="pk">${esc(cfg.kick)}</span><span class="pclock" aria-label="Ora">${esc(clock)}</span></div>
    <h2>${esc(cfg.title)}</h2>
    <p class="pgoal">${esc(cfg.goal)}</p>
    <ol class="psteps">${li}</ol>`;
}

export function logHTML(entries, tools) {
  const li = entries.map(e => `<li class="${e.trip ? 'trip' : e.good ? 'good' : ''}"><time>${esc(e.clock)}</time><span>${esc(e.text)}</span></li>`).join('');
  const t = (k, label, pressed) => `<button class="pchip" type="button" data-pui="${k}"${pressed === undefined ? '' : ` aria-pressed="${!!pressed}"`}>${label}</button>`;
  return `<h2>Registro</h2><ol class="plog" aria-live="polite">${li}</ol>
    <div class="ptools">${t('insieme', 'Vista d’insieme')}${t('quadro', 'Quadro')}${t('torch', 'Torcia', tools.torch)}${t('sound', 'Suono', tools.sound)}</div>`;
}

const STATE_WORD = { on: 'Chiuso', off: 'Aperto', tripped: 'Scattato', armed: 'Armato' };

// Comandi in basso: i moduli del quadro con la leva, la tensione a valle e, dopo la diagnosi, l'apparecchio da scollegare.
export function dockHTML(cfg, ps, unit, ui) {
  const mods = cfg.controls.map(c => {
    let on, trip, live;
    if (c.kind === 'rcd') { on = ps.rcd.on; trip = ps.rcd.tripped; live = ps.supply && ps.rcd.on; }
    else { const l = ps.lines[c.line]; on = l.on; trip = l.tripped; live = ps.supply && ps.rcd.on && l.on; }
    const word = trip ? STATE_WORD.tripped : c.kind === 'rcd' ? (on ? STATE_WORD.armed : STATE_WORD.off) : (on ? STATE_WORD.on : STATE_WORD.off);
    const test = c.kind === 'rcd' ? `<button class="ptest" type="button" data-pact="test" data-pid="${c.id}" aria-label="Tasto di prova del differenziale">T</button>` : '';
    return `<div class="pmod ${c.kind}" data-on="${on}" data-trip="${!!trip}">
        <button class="plever" type="button" data-pact="toggle" data-pid="${c.id}"><span class="pname">${esc(c.short || c.name)}</span><span class="pknob" aria-hidden="true"></span><span class="pword">${word}</span></button>
        <span class="pvolt${live ? ' live' : ''}"><span class="vh">Tensione a valle</span> ${live ? '230 V' : '0 V'}</span>${test}<span class="psub">${esc(c.sub)}</span>
      </div>`;
  }).join('');
  const d = cfg.device, diagOk = !!(unit && unit.diag && unit.diag.correct);
  const dev = d && diagOk && unit.phase === 'fault'
    ? `<button class="pdev" type="button" data-pact="toggle" data-pid="${d.id}"><b>${esc(d.name)}</b><span>${esc(ps.heaterPlugged ? d.plugged : d.unplugged)}</span><span class="pdo">${esc(ps.heaterPlugged ? d.act : d.undo)}</span></button>` : '';
  let main = '';
  if (unit && unit.phase === 'fault') main = diagOk ? '<button class="pbtn y" type="button" data-pui="check">Verifica</button>' : '<button class="pbtn y" type="button" data-pui="answer">Rispondi</button>';
  else if (unit && unit.phase === 'done') main = '<button class="pbtn y" type="button" data-pui="finale">Esito della prova</button>';
  return `<div class="pdockhead"><h2>${esc(cfg.dockTitle)}</h2><div class="prow">
      <button class="pchip" type="button" data-pui="schema" aria-pressed="${!!ui.schema}">${ui.schema ? 'Chiudi lo schema' : 'Schema e multimetro'}</button>
      <button class="pchip only-phone" type="button" data-pui="torch" aria-pressed="${!!ui.torch}">Torcia</button>${main}</div></div>
    <div class="prail">${mods}</div>${dev}
    <p class="phint" role="status">${esc(ui.hint || '')}</p>`;
}

// Suggerimento sotto il quadro: dice il passo corrente con parole sue.
export function hintOf(name, steps) {
  if (name !== 'appartamento') return '';
  const i = steps.findIndex(s => s.cur);
  return [
    'Prima apri le tre linee: così il differenziale potrà restare armato.',
    'Ora riarma il differenziale: con le linee aperte non ha niente da sentire.',
    'Richiudi una linea alla volta e guarda la casa: quale fa scattare tutto?',
    'Hai visto quale linea lo fa scattare. Rispondi.',
    'Togli la causa: scollega l’apparecchio che disperde, nella scena o qui sotto.',
    'Riarma il differenziale, richiudi le tre linee e premi Verifica.',
  ][i] || '';
}

// Domanda della prova: le opzioni della diagnosi, con l'esito dopo la risposta.
export function questionHTML(unitDef, diag) {
  const f = unitDef.fault, q = f.diagnosis;
  const opts = q.options.map(o => {
    const cls = diag && diag.option === o.id ? (diag.correct ? ' yes' : ' no') : '';
    return `<button class="popt${cls}" type="button" data-pdiag="${o.id}"${diag && diag.correct ? ' disabled' : ''}>${esc(o.text)}</button>`;
  }).join('');
  const fb = !diag ? '' : diag.correct
    ? `<p class="pfb ok"><b>Giusto.</b> ${esc(q.why)}</p><p class="pfb">${esc(f.fixSay)}</p>`
    : '<p class="pfb ko"><b>Non proprio.</b> Richiudi solo quella linea con il differenziale armato: se non scatta, non è lei.</p>';
  return `<div class="pcard" role="dialog" aria-modal="true" aria-labelledby="pQ"><span class="pk">Prova</span><h2 id="pQ">${esc(q.question)}</h2>${opts}${fb}
      <div class="prow"><button class="pbtn${diag && diag.correct ? ' y' : ''}" type="button" data-pui="closeSheet">${diag && diag.correct ? 'Torna al quadro' : 'Chiudi'}</button></div></div>`;
}

const STAR = on => `<svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.9 7.4.7-5.6 4.9 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3L1.6 9.6 9 8.9z" fill="${on ? '#F5B800' : 'none'}" stroke="${on ? '#1B2230' : '#7C8494'}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;

export function finaleHTML(cfg, stars, solved) {
  return `<div class="pcard" role="dialog" aria-modal="true" aria-labelledby="pW"><span class="pk">${solved ? 'Prova superata' : 'Impianto funzionante'}</span><h2 id="pW">${esc(cfg.win.title)}</h2>
      <div class="pstars" role="img" aria-label="${stars} stelle su 3">${[0, 1, 2].map(i => STAR(i < stars)).join('')}</div>
      <p>${esc(cfg.win.text)}</p>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-pui="again">Rifai la prova</button><button class="pbtn" type="button" data-pui="summary">Sintesi</button><button class="pbtn" type="button" data-pui="closeSheet">Guarda la casa</button></div></div>`;
}
