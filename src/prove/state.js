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

export function provaState(snap) {
  const sc = snap && snap.level && snap.level.prova && snap.level.prova.scene;
  if (sc === 'appartamento') return appartamentoState(snap);
  if (sc === 'officina') return officinaState(snap);
  if (sc === 'automatico') return automaticoState(snap);
  if (sc === 'fabbrica') return fabbricaState(snap);
  return null;
}
