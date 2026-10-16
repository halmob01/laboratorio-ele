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

export function provaState(snap) {
  const sc = snap && snap.level && snap.level.prova && snap.level.prova.scene;
  if (sc === 'appartamento') return appartamentoState(snap);
  if (sc === 'officina') return officinaState(snap);
  return null;
}
