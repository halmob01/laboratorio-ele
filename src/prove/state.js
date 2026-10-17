// Dallo stato della sessione allo stato che le scene 3D delle prove disegnano. Funzioni pure: niente grafica, niente regole.
// Le scene leggono solo questo (vedi src/scene3d): quello che si vede e' sempre quello che il motore osserva.

export const isProvaLevel = level => !!(level && level.prova);

const part = (obs, id) => (obs && obs.parts && obs.parts[id]) || {};

// L'appartamento di notte (c23): il quadro con differenziale e tre linee, le luci, gli apparecchi, la stufetta che disperde.
export function appartamentoState(snap) {
  const o = snap.obs;
  if (!o) return null;
  const breaker = id => ({ id, on: !!part(o, id).on, tripped: !!part(o, id).tripped });
  const cs = snap.controlStates || {};
  return {
    scene: 'appartamento',
    supply: !!o.supply,
    rcd: breaker('D'),
    lines: { luce: breaker('M1'), prese: breaker('M2'), cucina: breaker('M3') },
    switchOn: !!cs.S,
    lamp: o.loads.L === 'on',        // la lampada del corridoio
    socket: o.loads.P === 'on',      // le prese del soggiorno (televisore, stufetta)
    oven: o.loads.PF === 'on',       // il forno in cucina
    heaterPlugged: !!part(o, 'G').on, // l'apparecchio difettoso e' collegato
    dark: !Object.values(o.loads).some(v => v === 'on'),
  };
}

// L'officina (c24): il nastro, il motore, il quadro con salvamotore, contattore e termico, la pulsantiera.
export function officinaState(snap) {
  const o = snap.obs;
  if (!o) return null;
  const cs = snap.controlStates || {};
  const m = o.machine || { pos: 0, atStart: true, atEnd: false };
  const fr = part(o, 'FR');
  return {
    scene: 'officina',
    supply: !!o.supply,
    qm: !!part(o, 'QM').on,
    motor: o.motors.M || 'off',
    pos: m.pos,
    length: (snap.level && snap.level.machine && snap.level.machine.length) || 6,
    atEnd: !!m.atEnd,
    contactor: !!o.coils.KM,
    thermal: { tripped: !!fr.tripped, heat: Math.max(0, Math.min(1, (fr.heat || 0) / ((snap.level && snap.level.comps.find(c => c.id === 'FR') || {}).tripAfter || 3))) },
    start: !!cs.SB1,
    stop: !!cs.SB0,
    emergency: !!cs.SBE,
    lamp: o.loads.H === 'on',
    overload: !!snap.overload,
    // i fili del banco e il loro stato (in tensione, percorsi da corrente): la scena li disegna come sono
    wires: snap.wires || [],
    flow: snap.flow || null,
  };
}

// Il nastro automatico (c46): il nastro con il PLC, i pacchi del modello `pacchi`, la fotocellula, la spia del lotto.
export function automaticoState(snap) {
  const o = snap.obs;
  if (!o) return null;
  const cs = snap.controlStates || {};
  const fr = part(o, 'FR'), plc = part(o, 'PLC'), p = o.process || {};
  const ctu = (((plc.mem || {}).counters || {}).C1 || {}).cv || 0;
  const prog = ((snap.programs || {}).PLC || []).map(r => (r.do || []).find(i => i.op === 'ctu')).find(Boolean);
  return {
    scene: 'automatico',
    supply: !!o.supply,
    qm: !!part(o, 'QM').on,
    motor: o.motors.M || 'off',
    contactor: !!o.coils.KM,
    thermal: { tripped: !!fr.tripped, heat: Math.max(0, Math.min(1, (fr.heat || 0) / ((snap.level && snap.level.comps.find(c => c.id === 'FR') || {}).tripAfter || 3))) },
    start: !!cs.SB1,
    stop: !!cs.SB0,
    emergency: !!cs.SBE,
    lamp: o.loads.H === 'on',                    // spia "lotto pieno"
    beam: !!p.beam,                              // un pacco davanti alla fotocellula
    // i pacchi: il fronte del primo e il passo (la scena li mette in fila da qui)
    lead: p.lead || 0, gap: p.gap || 1.4, size: p.size || 0.48, at: p.at || 4.2, length: p.length || 6, passed: p.passed || 0,
    // il PLC: acceso, ingressi e uscite come li vede lui, il conteggio e a quanto conta
    plc: { on: !!plc.mem, inputs: { ...(plc.inputs || {}) }, outputs: { ...(plc.q || {}) } },
    count: ctu, preset: prog ? prog.pv : 4, resetBy: prog ? prog.r || null : null,
    wires: snap.wires || [],
    flow: snap.flow || null,
  };
}

// La fabbrica (c51, il turno di notte): la cella del robot, la sicurezza, i sensori, il pannello operatore e il turno.
export const CELL_SENSORS = ['ZU', 'ZD', 'XP', 'XL', 'PR'];
export function fabbricaState(snap) {
  const o = snap.obs;
  if (!o) return null;
  const cs = snap.controlStates || {};
  const p = o.process || {}, plc = part(o, 'PLC'), sc = (snap.level && snap.level.scenario) || {};
  const goal = ((sc.expect && sc.expect.trace) || []).find(x => x.v === 'out');
  const sensors = {};
  CELL_SENSORS.forEach(id => { const x = part(o, id); sensors[id] = { act: !!x.act, jam: !!x.jam }; });
  return {
    scene: 'fabbrica',
    supply: !!o.supply,
    powered: o.loads.L === 'on',             // il robot ha potenza (contattore KM chiuso)
    cycle: o.loads.HC === 'on',              // ciclo in corso
    ks: !!part(o, 'KS').on,
    contactor: !!part(o, 'KM').on,
    emergency: !!part(o, 'E').pressed,
    door: !!part(o, 'P').open,
    start: !!cs.SB1, stop: !!cs.SB0, reset: !!cs.SBR,
    robot: { x: p.x || 0, z: p.z || 0, grip: p.grip || 0, holding: !!p.holding, feed: !!p.feed, out: p.out || 0, dropped: p.dropped || 0, crash: !!p.crash },
    sensors,
    plc: { on: !!plc.mem, inputs: { ...(plc.inputs || {}) }, outputs: { ...(plc.q || {}) } },
    hmi: o.hmi || null,
    panelOn: !!part(o, 'HMI').on,
    shift: o.scenario || null,
    goal: goal ? goal.reaches : 0,
    wires: snap.wires || [],
    flow: snap.flow || null,
  };
}

// La casa intelligente (c55, una sera d'inverno): contratto con la scena in docs/PIANO-CASA.md ("Contratto tra cornice e scena").
// Le luci delle stanze dicono dove sono le persone nella serata (un disegno, non una regola): si accendono dopo il tramonto e si
// spengono tutte al buio del contatore o a generale aperto.
const ROOM_HOURS = {
  ingresso: [[17.25, 22]], corridoio: [[17.25, 23]], soggiorno: [[17.25, 23]], cucina: [[19, 21]], bagno: [[21.25, 21.75], [22.5, 23]], camera: [[22.25, 23]],
};
export const CASA_ROOMS = Object.keys(ROOM_HOURS);
export function casaRooms(hour, sun, powered) {
  const out = {};
  CASA_ROOMS.forEach(id => {
    const on = powered && sun < 0.15 && ROOM_HOURS[id].some(([a, b]) => hour >= a && hour < b);
    out[id] = on ? (id === 'corridoio' || id === 'ingresso' ? 0.5 : 1) : 0;
  });
  return out;
}
const num = (x, d = 0) => (Number.isFinite(Number(x)) ? Number(x) : d);
export function casaState(snap) {
  const o = snap.obs;
  if (!o) return null;
  const p = o.process || {}, lv = snap.level || {}, params = { ...((lv.process && lv.process.params) || {}) };
  const qg = !!part(o, 'QG').on, blackout = !!p.blackout;
  const powered = !!o.supply && qg && !blackout;
  const hour = num(p.hour, 16.5);
  const sun = num(p.sun);
  const plc = part(o, 'PLC');
  const minPerSec = 1440 / num(params.dayLen, 1440);      // minuti della serata per secondo simulato
  return {
    scene: 'casa',
    powered,                                 // generale chiuso e contatore non staccato
    blackout,                                // il contatore ha staccato: tutta la casa al buio (momento forte)
    qg,                                      // la leva del generale (chiusa anche al buio)
    hour,                                    // ora della serata dal motore, 16.5 ... 23
    sun,                                     // altezza del sole (0 dopo il tramonto)
    kw: { pv: num(p.pv), load: num(p.load), grid: num(p.grid), batt: num(p.pb), limit: num(params.limit, 6) },
    soc: num(p.soc),
    ev: { plugged: !!part(o, 'EV').on, charging: powered && o.loads.HE === 'on', kwh: num(p.eEv) },
    hp: { on: !!p.hpRun, broken: !!p.broken },
    zones: [
      { id: 'soggiorno', T: num(p.T1, 17), valve: num(p.p1), window: !!part(o, 'W1').on },
      { id: 'camera', T: num(p.T2, 17), valve: num(p.p2), window: false },
    ],
    oven: powered && !!p.oven,
    flood: { wet: !!part(o, 'S2').on, siren: o.loads.B === 'on' },
    silence: !!part(o, 'TA').pressed,        // il tasto di tacitazione tenuto premuto
    rooms: casaRooms(hour, sun, powered),    // luce di ogni stanza 0..1
    shift: o.scenario || null,               // come la fabbrica: duration, t, done, started, faults, events
    // per il pannello e il verbale (non servono alla scena)
    plc: { on: !!plc.mem, outputs: { ...(plc.q || {}) } },
    energy: { prod: num(p.eProd), imp: num(p.eImp), exp: num(p.eExp), cost: num(p.cost) },
    comfort: { soggiorno: Math.round(num(p.out1) * minPerSec), camera: Math.round(num(p.out2) * minPerSec) },
  };
}

export function provaState(snap) {
  const sc = snap && snap.level && snap.level.prova && snap.level.prova.scene;
  if (sc === 'appartamento') return appartamentoState(snap);
  if (sc === 'officina') return officinaState(snap);
  if (sc === 'automatico') return automaticoState(snap);
  if (sc === 'fabbrica') return fabbricaState(snap);
  if (sc === 'casa') return casaState(snap);
  return null;
}
