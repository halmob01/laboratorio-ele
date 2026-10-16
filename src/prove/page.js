// Pagina delle prove 3D (milestone: appartamento di notte, officina). La scena occupa tutto lo schermo e sopra ci sta la cornice
// (pezzi in hud.js, testi in content/prove.js). La prova e' raccontata in atti:
//   chiamata -> arrivo (la casa vista da fuori si spegne) -> lezione (se non vista) -> trova il quadro -> gioco -> finale.
// La sessione non sa niente degli atti: la pagina sceglie solo cosa mostrare e quando. Non contiene regole del gioco.

import { HOUSE } from '../content/trilocale.js';
import { provaState } from './state.js';
import * as H from './hud.js';
import { sound } from './sound.js';
import { loaderHTML } from '../ui2d/tower.js';

const VIEW_LABEL = {
  insieme: 'Vista d’insieme', quadro: 'Quadro', soggiorno: 'Soggiorno', cucina: 'Cucina',
  pulsantiera: 'Pulsantiera', motore: 'Motore', plc: 'PLC', fotocellula: 'Fotocellula', bancale: 'Bancale',
};
const SOUND_KEY = 'fase-e-neutro-suono';
const LOAD_MAX = 8000;          // la chiamata aspetta la scena al massimo questo, poi si gioca con i comandi
const ROW_MS = 180;             // officina: le file di plafoniere si accendono a questa distanza (come ROW_MS in scene3d/capannone.js)

// Caricamento del pacchetto 3D: una sola volta per pagina.
let scriptPromise = null;
function loadScript() {
  if (window.FaseNeutroProve) return Promise.resolve(true);
  if (!scriptPromise) {
    scriptPromise = new Promise(resolve => {
      const el = document.createElement('script');
      el.src = 'prove3d.js';
      el.onload = () => resolve(true);
      el.onerror = () => { el.remove(); scriptPromise = null; resolve(false); };
      document.head.appendChild(el);
    });
  }
  return scriptPromise;
}

/**
 * @param {HTMLElement} host   contenitore (#house)
 * @param {{session, reduced:()=>boolean, drawer?:(open:boolean)=>void, summary?:()=>void, name?:()=>string}} env
 */
export function createProva(host, env) {
  let scene = null, sceneState = 'idle', mounted = false, token = 0, name = null, lastSnap = null;
  let el = {};
  const holding = new Set();
  const timers = new Set();
  // stato della sola cornice
  let mem = H.newMemory(), log = [], minutes = 0, phase = null, sheet = null;
  let act = null, override = null, story = null, t0clock = 0, callT0 = 0;
  // officina: lo stato di prima (per gli eventi che arrivano col tempo: finecorsa, termico) e l'azione in corso
  let prevPs = null, pending = null, pointerHold = null;
  const ui = { schema: false, torch: false, sound: true, wires: true, log: false, delta: false, alarm: false };
  try { ui.sound = localStorage.getItem(SOUND_KEY) !== '0'; } catch (e) { /* predefinito: suono acceso */ }
  sound.setEnabled(ui.sound);

  const s = () => env.session;
  const plant = () => H.isPlant(name);        // officina e nastro automatico: pulsantiera, verbale, eventi letti dallo stato
  let progSig = null;                         // nastro automatico: il programma di prima, per accorgersi che e' cambiato
  const cfg = () => H.provaOf(name);
  const reduced = () => !!(env.reduced && env.reduced());
  const inLesson = () => !!(lastSnap && lastSnap.unit && lastSnap.unit.phase === 'lesson');
  const later = (ms, fn) => { const t = setTimeout(() => { timers.delete(t); if (mounted) fn(); }, reduced() ? 0 : ms); timers.add(t); return t; };
  const clearLater = () => { timers.forEach(clearTimeout); timers.clear(); };
  const wires = () => (scene && scene.wires ? scene.wires() : null);

  function build() {
    el = {};
    if (!cfg()) {
      // prova senza cornice (ancora da progettare): la scena accanto al banco, con i pulsanti delle viste
      host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div><div class="htools" id="pTools"></div><div class="hmsg" id="pMsg" role="status" hidden></div></div>`;
      ['pScene', 'pTools', 'pMsg'].forEach(id => (el[id] = host.querySelector('#' + id)));
      host.onclick = e => { const b = e.target.closest('[data-pview]'); if (b && scene) scene.look(b.dataset.pview); };
      return;
    }
    host.innerHTML = `<div class="hstage"><div class="hscene" id="pScene"></div><div class="hmsg" id="pMsg" role="status" hidden></div><div class="pflash" id="pFlash"></div><div class="pvig"></div></div>
      <header class="phud ptop" id="pTop"></header>${cfg().shiftHours ? '<div class="phud pshift" id="pShift"></div>' : ''}
      <nav class="phud psteps-box" id="pSteps" aria-label="Il metodo"></nav>
      <section class="phud pdock" id="pDock" aria-label="Comandi"></section>
      <aside class="phud plogbox" id="pLog" aria-label="Registro" hidden></aside>
      <div class="psub" id="pSub" aria-live="assertive"></div>
      <button class="ppin" id="pPin" type="button" data-pui="openPanel" hidden><span>Quadro</span></button>
      <div class="psheet" id="pSheet" hidden></div>
      <div class="pintro" id="pIntro" hidden></div>`;
    ['pScene', 'pMsg', 'pFlash', 'pTop', 'pShift', 'pSteps', 'pDock', 'pLog', 'pSub', 'pPin', 'pSheet', 'pIntro'].forEach(id => (el[id] = host.querySelector('#' + id)));
    host.onclick = onClick;
    el.pScene.addEventListener('pointermove', e => { if (scene && scene.aim && ui.torch) scene.aim(e.clientX, e.clientY); });
    // passando su una leva si illumina la sua linea nei fili
    const hi = e => { const l = e.target.closest && e.target.closest('[data-line]'); const w = wires(); if (w) w.highlight(l ? l.dataset.line : null); };
    el.pDock.addEventListener('pointerover', hi);
    el.pDock.addEventListener('pointerleave', () => { const w = wires(); if (w) w.highlight(null); });
    el.pDock.addEventListener('focusin', hi);
    el.pDock.addEventListener('focusout', () => { const w = wires(); if (w) w.highlight(null); });
    // officina: Marcia e Arresto si tengono premuti (il tocco breve basta: il contattore si autoalimenta)
    el.pDock.addEventListener('pointerdown', e => {
      const b = e.target.closest('[data-phold]');
      if (!b) return;
      e.preventDefault();
      pointerHold = b.dataset.phold;
      try { b.setPointerCapture(e.pointerId); } catch (x) { /* ok */ }
      press({ id: pointerHold });
    });
    const up = () => { if (!pointerHold) return; const id = pointerHold; pointerHold = null; release({ id }); };
    el.pDock.addEventListener('pointerup', up);
    el.pDock.addEventListener('pointercancel', up);
  }

  /* ---------- tocchi: tutto passa da act(), che registra cosa e' successo ---------- */
  function doAct(action, run) {
    if (plant()) { pending = action; run(); pending = null; renderHud(); return; }   // gli eventi li legge sync()
    if (story) { endStory(); return; }                  // un tocco durante la sequenza la porta alla fine
    const before = lastSnap && provaState(lastSnap);
    run();
    const after = provaState(s().snapshot());
    if (!before || !after) return;
    mem = H.remember(name, mem, action, before, after);
    const ev = H.describe(name, action, before, after);
    const st = H.tripStory(name, action, before, after);
    if (ev) note(ev.text, ev);
    if (st) playStory(st, after);
    else {
      sound.click();
      if (ev && ev.view && scene) scene.look(ev.view);
    }
    renderHud();
  }
  // l'ora della cornice: nella fabbrica e' l'ora del turno (dal motore), altrove avanza di un minuto per ogni cosa che succede
  const shiftNow = () => { const ps = lastSnap && provaState(lastSnap); return ps && ps.shift; };
  const clockNow = () => (cfg().shiftHours ? H.shiftClock(cfg(), shiftNow()) : H.clockText(cfg(), minutes));
  function note(text, ev = {}) { minutes++; log.push({ clock: clockNow(), text, trip: !!ev.trip, good: !!ev.good }); if (log.length > 40) log.shift(); }

  function tap(u) {
    if (inLesson() || (act && act !== 'play')) return;
    if (u.kind === 'toggle') doAct({ kind: 'toggle', id: u.id }, () => s().toggleControl(u.id));
    else if (u.kind === 'test') doAct({ kind: 'test', id: u.part }, () => s().testPart(u.part));
    else if (u.kind === 'reset') doAct({ kind: 'reset', id: u.part }, () => s().resetPart(u.part));
    else if (u.kind === 'repair') {
      // fabbrica: si sostituisce solo un sensore guasto; uno buono si controlla e basta (nessuna azione nel motore)
      const ps = provaState(lastSnap);
      if (ps && ps.sensors[u.id] && ps.sensors[u.id].jam) doAct({ kind: 'repair', id: u.id }, () => s().jamPart(u.id));
      else { note(cfg().log.repairOk); renderHud(); }
    }
  }
  function press(u) {
    if (inLesson() || (act && act !== 'play')) return;
    holding.add(u.id);
    if (plant()) { sound.click(); doAct({ kind: 'press', id: u.id }, () => s().press(u.id)); } else s().press(u.id);
  }
  function release(u) { if (!holding.delete(u.id)) return; if (plant()) doAct({ kind: 'release', id: u.id }, () => s().release(u.id)); else s().release(u.id); }

  function onClick(e) {
    const rp = e.target.closest('[data-prepair]');
    if (rp) { tap({ kind: 'repair', id: rp.dataset.prepair }); return; }
    const a = e.target.closest('[data-pact]');
    if (a) { const k = a.dataset.pact; tap(k === 'test' || k === 'reset' ? { kind: k, part: a.dataset.pid } : { kind: 'toggle', id: a.dataset.pid }); return; }
    // tasti da tenere premuti azionati da tastiera (Invio, spazio): premi e rilascia
    const hb = e.target.closest('[data-phold]');
    if (hb) { if (e.detail === 0 && !inLesson() && act === 'play') { sound.click(); doAct({ kind: 'press', id: hb.dataset.phold }, () => s().toggleControl(hb.dataset.phold)); } return; }
    const d = e.target.closest('[data-pdiag]');
    if (d) {
      s().answerDiagnosis(d.dataset.pdiag);
      const dg = s().snapshot().unit.diag;
      if (dg) note(dg.correct ? cfg().log.answerOk : cfg().log.answerKo, { good: dg.correct });
      if (dg && dg.correct) sound.chime(1);
      renderHud();
      return;
    }
    const u = e.target.closest('[data-pui]');
    if (!u) { if (story) endStory(); return; }
    const k = u.dataset.pui;
    if (k === 'enter') { sound.unlock(); arrive(); }
    else if (k === 'skipIntro') { sound.unlock(); skipArrive(); }
    else if (k === 'openPanel') openPanel();
    else if (k === 'answer') { sheet = 'question'; renderHud(); focusSheet(); }
    else if (k === 'finale') { sheet = 'finale'; renderHud(); focusSheet(); }
    else if (k === 'closeSheet') { const wasFinale = sheet === 'finale'; sheet = null; renderHud(); if (wasFinale) backInside(); }
    else if (k === 'check') check();
    else if (k === 'again') { sheet = null; backInside(); s().startFault(); if (cfg().shiftHours) s().restartShift(); }
    else if (k === 'summary') { if (env.summary) env.summary(); }
    else if (k === 'schema') schema();
    // incastrare un pacco: il pacco riparte dall'inizio, cosi' il termico (3 s) arriva sempre prima del finecorsa (6 s)
    else if (k === 'overload') { if (act === 'play' && !inLesson()) doAct({ kind: 'overload' }, () => { const on = !lastSnap.overload; if (on) s().rewind(); s().setOverload(on); }); }
    else if (k === 'rewind') { if (act === 'play' && !inLesson()) doAct({ kind: 'rewind' }, () => s().rewind()); }
    else if (k === 'ack') { if (act === 'play' && !inLesson()) doAct({ kind: 'ack' }, () => s().ackPanel('HMI')); }
    else if (k === 'cable') { if (act === 'play' && !inLesson()) doAct({ kind: 'cable' }, () => s().toggleControl('HMI')); }
    else if (k === 'torch') { setTorch(!ui.torch); renderHud(); }
    else if (k === 'wires') { ui.wires = !ui.wires; const w = wires(); if (w) w.setVisible(ui.wires); renderHud(); }
    else if (k === 'log') { ui.log = !ui.log; renderHud(); }
    else if (k === 'sound') { ui.sound = !ui.sound; sound.setEnabled(ui.sound); if (ui.sound) { sound.unlock(); hums(); } try { localStorage.setItem(SOUND_KEY, ui.sound ? '1' : '0'); } catch (x) { /* ok */ } renderHud(); }
    else if (k === 'insieme' || k === 'quadro') { if (scene) scene.look(k); }
  }
  function setTorch(on) { ui.torch = on; if (scene && scene.torch) scene.torch(on); }
  // Il banco a lato. Nell'officina, per correggere si lavora fuori tensione: con il salvamotore chiuso prima lo si apre.
  function schema() {
    const opening = !ui.schema;
    // nel nastro automatico il programma si cambia a nastro fermo: con il nastro in marcia il banco aspetta
    if (opening && name === 'automatico' && lastSnap.unit.phase === 'fault' && lastSnap.unit.diag && lastSnap.unit.diag.correct && !mem.fixed) {
      const ps = provaState(lastSnap);
      if (ps && ps.motor === 'fwd') { subtitle('', cfg().story.running, 3600); return; }
    }
    if (opening && name === 'officina' && lastSnap.unit.phase === 'fault' && lastSnap.unit.diag && lastSnap.unit.diag.correct && !mem.fixed) {
      const ps = provaState(lastSnap);
      if (ps && ps.qm) { subtitle('', cfg().story.dead, 3600); if (scene) scene.look('quadro', 900); return; }
      if (scene) scene.look('quadro', 900);
    }
    ui.schema = opening; if (env.drawer) env.drawer(ui.schema); renderHud();
    if (!opening && plant() && scene) scene.look('insieme', 900);
  }

  function check() {
    const sh = cfg().shiftHours && shiftNow();
    if (sh && !sh.done) { subtitle('', sh.started ? 'Il turno non è finito: tieni la cella in produzione fino alle 6:00.' : 'Il turno non è cominciato: riarma e premi Marcia.', 3200); return; }
    const r = s().check();
    note(r.pass ? cfg().log.checkOk : cfg().log.checkKo, { good: r.pass, trip: !r.pass });
    if (r.pass) { if (lastSnap.unit.phase !== 'done') finale(); }      // impianto a posto ma prova non chiusa (diagnosi sbagliata): esito lo stesso
    else {
      subtitle('', 'Qualcosa non va ancora: nello schema trovi i controlli che non passano.', 3200);
      ui.schema = true; if (env.drawer) env.drawer(true);
    }
    renderHud();
  }
  function focusSheet() { const b = el.pSheet && el.pSheet.querySelector('button,a'); if (b && b.focus) b.focus({ preventScroll: true }); }
  function onKey(e) {
    if (e.key !== 'Escape') return;
    if (story) { endStory(); return; }
    if (sheet) { const wasFinale = sheet === 'finale'; sheet = null; renderHud(); if (wasFinale) backInside(); }
    else if (ui.log) { ui.log = false; renderHud(); }
  }

  /* ---------- sottotitoli, lampo, suoni ---------- */
  function subtitle(big, small, ms, button) {
    const n = el.pSub;
    if (!n) return;
    n.innerHTML = `${big ? `<b>${big}</b>` : ''}${small ? `<span>${small}</span>` : ''}${button || ''}`;
    n.classList.remove('go'); void n.offsetWidth; n.classList.add('go');
    clearTimeout(n._h);
    if (ms) n._h = setTimeout(() => n.classList.remove('go'), ms);
  }
  function flash() {
    if (reduced() || !el.pFlash) return;
    el.pFlash.classList.remove('go'); void el.pFlash.offsetWidth; el.pFlash.classList.add('go');
    host.classList.remove('shake'); void host.offsetWidth; host.classList.add('shake');
  }
  function tac(text) {
    sound.tac(); sound.silence(); sound.vibrate([30, 40, 80]);
    flash();
    subtitle('Tac.', text, 3600);
  }
  // i ronzii seguono lo stato vero: frigorifero sulla linea cucina, TV e stufetta sulla linea prese; nell'officina il motore
  function hums(ps) {
    ps = ps || override || (lastSnap && provaState(lastSnap));
    if (!ps || act === 'call') return;
    if (name === 'fabbrica') { sound.motor(act !== 'finale' && ps.powered && ps.cycle, 0); return; }
    if (plant()) { sound.motor(act !== 'finale' && ps.motor === 'fwd', ps.overload ? 1 : ps.thermal.heat * 0.5); return; }
    if (name !== 'appartamento') return;
    sound.hum('frigo', !!ps.oven);
    sound.hum('tv', !!ps.socket);
    sound.hum('stufa', !!(ps.socket && ps.heaterPlugged));
  }

  /* ---------- officina: eventi del nastro e momento forte ---------- */
  // Chiamata da sync() a ogni nuovo stato: confronta con lo stato di prima (azione in corso o tempo che passa).
  function observePlant(snapshot) {
    const ps = provaState(snapshot);
    if (!ps) return;
    const before = prevPs; prevPs = ps;
    const sig = name === 'automatico' ? JSON.stringify(snapshot.programs || {}) : null, progBefore = progSig; progSig = sig;
    if (!before || act !== 'play' || inLesson() || snapshot.unit.phase === 'lesson') return;
    const action = pending;
    const events = H.plantEvents(name, action, before, ps);
    mem = H.remember(name, mem, action, before, ps);
    const wasFixed = mem.fixed;
    mem = H.rememberFixed(mem, snapshot.unit.phase === 'fault' && H.plantFixed(name, snapshot));
    events.forEach(e => note(e.text, e));
    const c = cfg();
    if (sig !== null && progBefore !== null && sig !== progBefore) note(before.motor === 'fwd' ? c.log.programLive : c.log.program, { trip: before.motor === 'fwd' });
    if (!wasFixed && mem.fixed) { note(c.log.fixed, { good: true }); sound.chime(1); }
    events.forEach(e => {
      if (e.kind === 'tripKo') {
        // il termico scatta ma il nastro continua: il momento forte
        ui.alarm = true;
        sound.tac(); sound.vibrate([30, 40, 80]); flash();
        subtitle(c.story.nonStop, c.story.pressStop, 0);
        if (scene) scene.look('insieme', 900);
      } else if (e.kind === 'overload' && ps.overload && ps.motor !== 'fwd') {
        subtitle('', c.story.jamStart, 3600);
      } else if (e.kind === 'tripOk') {
        sound.clunk(); later(250, () => sound.chime(1));
        if (c.story.stopped) subtitle(c.story.stopped, '', 3000);
      } else if (e.kind === 'nuovoKo') {
        // il nastro automatico non riparte: Marcia arriva al PLC, il programma non la lascia passare
        sound.tac(); sound.vibrate([30, 40, 80]); flash();
        subtitle(c.story.stuck, c.story.stuckWhy, 4200);
        if (scene && scene.alert) scene.alert(2600);
      } else if (e.kind === 'stop') {
        // la cella si ferma: il primo fermo e' il momento forte, i successivi solo il sottotitolo
        if (!mem.stopSeen) { mem = { ...mem, stopSeen: true }; sound.tac(); sound.vibrate([30, 40, 80]); flash(); }
        subtitle(c.story.stop, c.story.stopWhy, 4200);
        if (scene && scene.alert) scene.alert(2600);
      } else if (e.kind === 'safety') subtitle(c.story.safety, c.story.safetyWhy, 3200);
      else if (e.kind === 'panelLost') subtitle('', c.story.panel, 3200);
      else if (e.kind === 'repairLive') { sound.tac(); subtitle('', c.story.inside, 4200); }
      else if (e.kind === 'fixed' && e.good) sound.chime(1);
      else if (e.kind === 'end') { sound.siren(); subtitle(c.story.end, '', 3200); }
      else if (e.kind === 'lotto') {
        sound.clunk(); later(250, () => sound.chime(1));
        subtitle(c.story.lot, '', 2600);
      }
    });
    // l'allarme finisce quando il nastro si ferma: con il fungo (giusto) o perche' il pacco arriva in fondo
    if (ui.alarm && ps.motor !== 'fwd') {
      ui.alarm = false;
      if (ps.emergency) { el.pSub.classList.remove('go'); sound.silence(); }
      else subtitle('', c.story.endStop, 3200);
    }
    if (events.some(e => ['marcia', 'arresto', 'fungo', 'fine', 'reset', 'doorOpen', 'doorClose'].includes(e.kind)) && !events.some(e => e.kind === 'tripKo')) sound.click();
  }

  /* ---------- le tre storie dello scatto ---------- */
  function playStory(st, after) {
    const c = cfg();
    if (!scene || reduced()) { ui.delta = true; tac(c.story[st.kind]); later(1600, () => { ui.delta = false; renderHud(); }); return; }
    const on = l => st.closed && st.closed.includes(l);
    // un attimo prima dello scatto: il differenziale ancora armato, le linee chiuse in tensione
    override = { ...after, rcd: { ...after.rcd, on: true, tripped: false }, lamp: on('luce') && after.switchOn, socket: on('prese'), oven: on('cucina'), dark: false, leak: st.kind === 'test' ? null : st.kind };
    story = { st, t: [] };
    push(); hums(override);
    if (st.kind === 'isolated') scene.look('dispersione', 500);
    story.t.push(later(st.kind === 'test' ? 150 : 600, () => { ui.delta = true; renderHud(); }));
    story.t.push(later(st.kind === 'isolated' ? 1250 : st.kind === 'multi' ? 1000 : 650, endStory));
  }
  function endStory() {
    if (!story) return;
    const st = story.st;
    story.t.forEach(t => { clearTimeout(t); timers.delete(t); });
    story = null; override = null;
    push();
    tac(cfg().story[st.kind]);
    later(1800, () => { ui.delta = false; renderHud(); });
    renderHud();
  }

  /* ---------- atti ---------- */
  function setAct(a) {
    act = a; host.dataset.act = a;
    document.body.classList.toggle('ms-intro', a === 'call' || a === 'arrive');      // la scheda della lezione aspetta l'arrivo
    renderHud();
  }
  // La chiamata: la scena intanto si carica, la casa e' accesa e vista da lontano.
  function startCall() {
    setAct('call');
    callT0 = Date.now();
    el.pIntro.innerHTML = H.callHTML(cfg(), sceneState === 'ready');
    el.pIntro.hidden = false; el.pIntro.classList.remove('out');
    const b = el.pIntro.querySelector('[data-pui="enter"]'); if (b && b.focus) b.focus({ preventScroll: true });
  }
  function litHouse() {
    const ps = lastSnap && provaState(lastSnap);
    if (!ps) return null;
    return { ...ps, rcd: { ...ps.rcd, on: true, tripped: false }, lines: { luce: { on: true }, prese: { on: true }, cucina: { on: true } }, lamp: true, socket: true, oven: true, dark: false, allRooms: true };
  }
  function prepareOutside() {
    if (scene && plant()) { scene.outside(); const w = wires(); if (w) w.setVisible(false); return; }
    if (!scene || !scene.setRoof) return;
    override = litHouse();
    scene.setRoof(true, 1);
    scene.windows(true);
    scene.door(0);
    const w = wires(); if (w) w.setVisible(false);
    scene.look('lontano', 1);
    push();
  }
  function hideCall() {
    el.pIntro.classList.add('out');
    later(900, () => { if (el.pIntro) el.pIntro.hidden = true; });
  }
  // Arrivo: carrellata sulla casa accesa, tac, buio e silenzio, il tetto si alza, si scende sull'ingresso.
  function arrive() {
    if (act !== 'call') return;
    if (sceneState === 'loading' && Date.now() - callT0 < LOAD_MAX) {
      el.pIntro.classList.add('waiting');
      const t = setTimeout(() => { timers.delete(t); if (mounted) arrive(); }, 200); timers.add(t);
      return;
    }
    hideCall();
    if (!scene || sceneState !== 'ready') { afterArrive(); return; }
    setAct('arrive');
    if (scene.arrival) { later(300, () => later(scene.arrival(), afterArrive)); return; }   // nastro automatico: di giorno si entra dal piazzale
    if (name === 'officina') {
      // la saracinesca sale, le plafoniere si accendono una fila alla volta, si entra
      later(300, () => { scene.shutter(true, 1600); sound.shutter(1600); });
      later(1700, () => { scene.lampsOn(); for (let i = 0; i < 4; i++) later(i * ROW_MS, () => sound.click()); });
      later(2000, () => scene.look('insieme', 2200));
      later(4300, afterArrive);
      return;
    }
    hums(override);
    scene.look('esterno', 2400);
    later(2500, () => {
      override = null; scene.windows(false); push();
      tac(cfg().log.start);
    });
    later(3300, () => { scene.setRoof(false, 1300); scene.look('ingresso', 1700); });
    later(5100, afterArrive);
  }
  function skipArrive() {
    if (act !== 'call' && act !== 'arrive') return;
    clearLater(); hideCall();
    override = null;
    if (scene && plant()) { scene.inside(); scene.look('insieme', 1); }
    if (scene && scene.setRoof) { scene.windows(false); scene.setRoof(false, 1); scene.look('ingresso', 1); }
    push();
    afterArrive();
  }
  function afterArrive() {
    const w = wires(); if (w) w.setVisible(ui.wires);
    if (inLesson()) { setAct('brief'); return; }
    if (plant()) { mem.panel = true; setAct('play'); subtitle('', H.hintOf(name, H.stepsOf(name, provaState(lastSnap), lastSnap.unit, mem)), 3600); return; }
    findPanel();
  }
  // Trova il quadro: al buio, con la torcia. Toccandolo lo sportello si apre e i comandi salgono.
  function findPanel() {
    if (plant()) { mem.panel = true; setAct('play'); return; }
    if (!scene || mem.panel) { mem.panel = true; if (scene) scene.door(1); setAct('play'); return; }
    setAct('find');
    setTorch(true);
    if (scene.aim) { const r = host.getBoundingClientRect(); const p = scene.screenOf && scene.screenOf('D'); if (p) scene.aim(r.left + p.x, r.top + p.y); }
    placePin();
    subtitle('', cfg().findHint, 0, '<button class="pbtn y" type="button" data-pui="openPanel">Apri il quadro</button>');
  }
  function placePin() {
    if (!el.pPin) return;
    const p = act === 'find' && scene && scene.screenOf && scene.screenOf('D');
    el.pPin.hidden = !p;
    if (p) el.pPin.style.transform = `translate(${Math.round(p.x)}px, ${Math.round(p.y)}px)`;
  }
  function openPanel() {
    if (act !== 'find') return;
    mem.panel = true;
    el.pSub.classList.remove('go');
    el.pPin.hidden = true;
    if (!scene) { setAct('play'); return; }
    setAct('opening');
    scene.look('quadro', 900);
    later(950, () => {
      sound.click();
      const t0 = performance.now();
      const step = () => { const k = Math.min(1, (performance.now() - t0) / 500); scene.door(k * k * (3 - 2 * k)); if (k < 1 && mounted) requestAnimationFrame(step); };
      if (reduced()) scene.door(1); else step();
    });
    later(1700, () => { scene.look('insieme', 1000); setTorch(false); });
    later(2100, () => setAct('play'));
  }
  // Finale: la casa si riaccende vista da fuori, poi il rapporto d'intervento.
  function finale() {
    if (act === 'finale') return;
    setAct('finale');
    hums();
    if (plant()) {
      // le 7:00 (le 14:00 nel nastro automatico): la sirena del turno, i pacchi scorrono uno dietro l'altro, poi il verbale di collaudo
      ui.alarm = false;
      if (ui.schema) { ui.schema = false; if (env.drawer) env.drawer(false); }
      sound.siren();
      if (scene) { scene.shift(true); scene.look('turno', 2600); later(1300, () => subtitle(cfg().report.end, '', 2600)); }
      later(scene ? 3900 : 0, () => {
        sheet = 'finale'; setAct('play'); focusSheet();
        const lv = lastSnap.levels.find(l => l.id === lastSnap.level.id) || {};
        const n = (lastSnap.result && lastSnap.result.stars) || lv.stars || 0;
        for (let i = 0; i < n; i++) later(300 + i * 280, () => sound.chime(i));
      });
      return;
    }
    if (scene && scene.setRoof) {
      // da fuori la casa si riaccende tutta, come la si era vista arrivando
      later(500, () => { override = litHouse(); push(); scene.setRoof(true, 1400); scene.windows(true); scene.look('esterno', 2200); });
      later(1800, () => subtitle(H.clockText(cfg(), minutes), cfg().report.end, 2400));
    }
    later(scene ? 3600 : 0, () => {
      sheet = 'finale'; setAct('play'); focusSheet();
      const lv = lastSnap.levels.find(l => l.id === lastSnap.level.id) || {};
      const n = (lastSnap.result && lastSnap.result.stars) || lv.stars || 0;
      for (let i = 0; i < n; i++) later(300 + i * 280, () => sound.chime(i));
    });
  }
  // Chiuso il rapporto si torna dentro la casa.
  function backInside() {
    if (scene && plant()) { scene.shift(false); scene.look('insieme', 1200); return; }
    if (!scene || !scene.setRoof) return;
    override = null; push();
    scene.setRoof(false, 1100); scene.windows(false); scene.look('insieme', 1200);
  }

  /* ---------- scena ---------- */
  function loadScene(snap) {
    if (sceneState !== 'idle') return;
    sceneState = 'loading';
    const my = ++token;
    name = snap.level.prova.scene;
    loadScript().then(ok => {
      if (!mounted || my !== token) return;
      el.pScene.hidden = false;       // la scena misura il contenitore: va mostrato prima di crearla
      const api = ok && window.FaseNeutroProve && window.FaseNeutroProve.createScene(name, el.pScene, { reduced: reduced(), onTap: tap, onPress: press, onRelease: release });
      if (api) {
        scene = api; sceneState = 'ready'; host._scene = api;
        if (el.pTools) el.pTools.innerHTML = api.views.map(v => `<button class="btn small" data-pview="${v}">${VIEW_LABEL[v] || v}</button>`).join('');
        if (act === 'call') prepareOutside();
        else if (cfg() && scene.door) { scene.door(mem.panel ? 1 : 0); if (act === 'play') scene.door(1); }
        if (ui.torch && api.torch) api.torch(true);
        if (act === 'find') findPanel();
      } else sceneState = 'failed';
      apply(); push();
      if (el.pIntro && act === 'call') { const l = el.pIntro.querySelector('.pload'); if (l) l.classList.add('done'); }
    });
  }
  function apply() {
    el.pMsg.hidden = !(sceneState === 'loading' || sceneState === 'failed') || act === 'call';
    // Il loader si scrive una volta sola: riscriverlo a ogni aggiornamento farebbe ripartire l'animazione.
    const loading = sceneState === 'loading', k = loading ? 'load' : 'fail';
    if (el.pMsg.dataset.k !== k) {
      el.pMsg.dataset.k = k;
      el.pMsg.classList.toggle('load', loading);
      if (loading) el.pMsg.innerHTML = loaderHTML('Caricamento della scena');
      else el.pMsg.textContent = 'La scena 3D non è disponibile su questo dispositivo: la prova funziona con i comandi e con lo schema.';
    }
    el.pScene.hidden = sceneState !== 'ready';
    host.classList.toggle('noscene', sceneState === 'failed');
    const st = host.querySelector('.hstage');
    if (el.pTools) { st.style.height = sceneState === 'failed' ? 'auto' : ''; st.style.minHeight = sceneState === 'failed' ? '0' : ''; }
  }
  // Stato per la scena: l'appartamento riusa il trilocale, che vuole anche le stanze accese.
  function push() {
    if (!scene || !lastSnap) return;
    const ps = override || provaState(lastSnap);
    if (!ps) return;
    if (ps.scene === 'appartamento') {
      const rooms = {};
      HOUSE.rooms.forEach(r => { rooms[r.id] = { lit: ps.allRooms ? !!r.lamp : (r.id === 'corridoio' && ps.lamp), controls: {} }; });
      scene.update({ rooms, prova: ps });
    } else scene.update(ps);
  }

  /* ---------- cornice ---------- */
  // Si riscrive un pezzo solo se cambia, e si rimette il fuoco sul comando che lo aveva (tastiera).
  function setHTML(node, html) {
    if (!node || node._html === html) return;
    const a = document.activeElement, keep = a && node.contains(a) ? a.getAttribute('data-pid') || a.getAttribute('data-pui') || a.getAttribute('data-pdiag') : null;
    node.innerHTML = html; node._html = html;
    if (keep) { const b = node.querySelector(`[data-pid="${keep}"],[data-pui="${keep}"],[data-pdiag="${keep}"]`); if (b && b.focus) b.focus({ preventScroll: true }); }
  }
  function renderHud() {
    const c = cfg();
    if (!c || !lastSnap) return;
    // durante la sequenza dello scatto i comandi mostrano l'attimo prima (differenziale armato, linee in tensione)
    const ps = (story && override) || provaState(lastSnap), unit = lastSnap.unit;
    host.classList.toggle('lesson', inLesson() || act === 'brief');
    if (!ps) return;
    const steps = H.stepsOf(name, ps, unit, mem);
    setHTML(el.pTop, H.topHTML(c, clockNow(), ui));
    if (el.pShift) setHTML(el.pShift, H.shiftHTML(c, ps));
    setHTML(el.pSteps, H.stepsHTML(steps) + (unit.phase === 'fault' && act === 'play' ? `<p class="phint">${H.hintOf(name, steps)}</p>` : ''));
    setHTML(el.pDock, H.dockHTML(c, ps, unit, ui));
    el.pLog.hidden = !ui.log;
    if (ui.log) setHTML(el.pLog, H.logHTML(log));
    let sh = '';
    if (sheet === 'question' && unit.phase === 'fault') sh = H.questionHTML(lastSnap.level.unit, unit.diag);
    else if (sheet === 'finale') {
      const lv = lastSnap.levels.find(l => l.id === lastSnap.level.id) || {};
      const stars = (lastSnap.result && lastSnap.result.stars) || lv.stars || 0;
      sh = c.shiftHours ? H.turnoReportHTML(c, stars, !!unit.faultSolved, ps, env.name ? env.name() : '', !(lastSnap.result && lastSnap.result.safe && lastSnap.result.safe.items.some(i => i.code === 'safe.repairLive')))
        : c.tests ? H.verbaleHTML(c, stars, !!unit.faultSolved, H.clockText(c, 0), H.clockText(c, Math.max(minutes, 20)), env.name ? env.name() : '')
        : H.reportHTML(c, stars, !!unit.faultSolved, H.clockText(c, 0), H.clockText(c, minutes));
    } else sheet = null;
    el.pSheet.hidden = !sh;
    setHTML(el.pSheet, sh);
    placePin();
  }
  // Ogni volta che la prova (ri)parte da capo: registro e passi azzerati, la casa al buio.
  function restart(keepPanel) {
    mem = { ...H.newMemory(), panel: !!keepPanel }; log = []; minutes = 0; sheet = null;
    note(cfg().log.start, { trip: name === 'appartamento' });
    prevPs = lastSnap ? provaState(lastSnap) : null; ui.alarm = false;     // il confronto riparte da adesso: la prima azione conta
  }
  function onResize() { placePin(); }

  return {
    // Chiamata a ogni ridisegno della pagina con il livello aperto.
    sync(snapshot) {
      if (mounted && name && snapshot.level.prova && snapshot.level.prova.scene !== name) this.unmount();   // da una prova a un'altra: scena nuova
      const first = !mounted;
      if (first) {
        mounted = true; name = snapshot.level.prova.scene; build(); apply();
        host.classList.toggle('ofc', plant());
        document.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
      }
      const ph = snapshot.unit ? snapshot.unit.phase : null;
      const prevPhase = phase;
      lastSnap = snapshot;
      if (plant() && cfg()) observePlant(snapshot);
      if (sceneState === 'idle') loadScene(snapshot);
      if (cfg()) {
        if (first) {
          if (ph === 'lesson' || ph === 'fault') { if (ph === 'fault') restart(false); startCall(); }
          else { mem.panel = true; setAct('play'); }
        } else if (ph === 'fault' && prevPhase === 'lesson') { restart(false); findPanel(); }
        else if (ph === 'fault' && prevPhase === 'done') {
          // "Rifai la prova": il quadro e' gia' aperto, la casa si spegne di nuovo
          restart(true); setAct('play');
          if (plant()) { if (scene) scene.shift(false); prevPs = provaState(snapshot); }
          else {
            override = litHouse(); push();
            later(700, () => { override = null; push(); tac(cfg().log.start); });
          }
        } else if (ph === 'done' && prevPhase === 'fault' && act !== 'finale') finale();
      }
      phase = ph;
      if (!override) push();
      hums();
      renderHud();
    },
    unmount() {
      holding.forEach(id => { try { s().release(id); } catch (e) { /* si lascia la pagina */ } });
      holding.clear();
      clearLater();
      sound.silence();
      document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize);
      if (scene) { scene.dispose(); scene = null; }
      if (ui.schema && env.drawer) env.drawer(false);
      progSig = null;
      host._scene = null; name = null; override = null; story = null; act = null; prevPs = null; pending = null; pointerHold = null; ui.alarm = false;
      sceneState = 'idle'; mounted = false; lastSnap = null; token++; phase = null; ui.schema = false; ui.torch = false; ui.log = false; ui.delta = false;
      host.innerHTML = ''; host.onclick = null; delete host.dataset.act;
      document.body.classList.remove('ms-intro');
      host.className = host.className.replace(/\b(lesson|noscene|shake|ofc)\b/g, '').trim();
    },
    isMounted: () => mounted,
    // lo schema si chiude anche dal suo pulsante (sul telefono copre i comandi)
    closeDrawer() { ui.schema = false; if (env.drawer) env.drawer(false); renderHud(); if (plant() && scene) scene.look('insieme', 900); const b = el.pDock && el.pDock.querySelector('[data-pui="schema"]'); if (b && b.focus) b.focus({ preventScroll: true }); },
    // la prova ha la cornice a tutto schermo (milestone)?
    framed: snapshot => !!(snapshot && snapshot.level.prova && H.provaOf(snapshot.level.prova.scene)),
  };
}
