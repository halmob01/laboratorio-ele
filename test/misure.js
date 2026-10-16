// Aiuti per i test dei livelli con il multimetro: le letture che la verifica pretende, fatte davvero con la sessione
// oppure simulate come registro (per le prove che non usano la sessione).

const lockout = L => (L.safety && L.safety.lockout) || null;
// Letture della procedura del lucchetto (safety.lockout): lo strumento sul punto in tensione e 0 V su ogni punto a valle.
const lockReads = L => (lockout(L) ? [...(lockout(L).known ? [[lockout(L).known, 230]] : []), ...lockout(L).test.map(p => [p, 0])] : []);
export const loggedMeasures = L => (L.measures || []).map(m => ({ a: m.between[0], b: m.between[1], mode: m.mode || 'V', kind: m.reading || 'v', value: m.value === undefined ? null : m.value, live: m.live }))
  .concat(lockReads(L).map(([[a, b], value]) => ({ a, b, mode: 'V', kind: 'v', value, live: true })));

export function doMeasures(s, L) {
  (L.measures || []).forEach(m => {
    let sn = s.snapshot();
    if (!sn.meter.on) s.toggleMeter();
    s.setMeterMode(m.mode || 'V');
    sn = s.snapshot();
    if (sn.power !== !!m.live) s.toggleBreaker();
    Object.entries(m.setup || {}).forEach(([id, v]) => { if ((s.snapshot().controlStates[id] ? 1 : 0) !== v) s.toggleControl(id); });
    s.clearProbes();
    s.probe(m.between[0]); s.probe(m.between[1]);
  });
}

// Portate che la soluzione richiede (level.solutionRatings): si cambia la portata del magnetotermico fino al valore voluto.
export function doRatings(s, L) {
  Object.entries(L.solutionRatings || {}).forEach(([id, want]) => {
    for (let i = 0; i < 8 && s.snapshot().obs.parts[id].in !== want; i++) s.rateControl(id);
  });
}

// Lavoro fuori tensione: prima di cablare si apre il sezionamento (se e' chiuso).
export function openIsolators(s, L) {
  ((L.safety && L.safety.deadWork) || []).forEach(id => { if (s.snapshot().controlStates[id] === 1) s.toggleControl(id); });
  const lo = lockout(L);
  if (!lo) return;
  // procedura del lucchetto: aprire, bloccare (una volta sola), provare lo strumento e verificare l'assenza di tensione
  if (!s.snapshot().power) s.start();   // la sessione dell'interfaccia parte sempre da start(): con le protezioni proprie l'impianto e' alimentato
  if (s.snapshot().controlStates[lo.iso] === 1) s.toggleControl(lo.iso);
  if (!s.snapshot().lockout.locked) s.lockControl(lo.iso);
  if (!s.snapshot().meter.on) s.toggleMeter();
  s.setMeterMode('V');
  lockReads(L).forEach(([[a, b]]) => { s.clearProbes(); s.probe(a); s.probe(b); s.snapshot(); });
  s.clearProbes();
}

// Programma di soluzione dei livelli in cui l'allievo scrive il ladder (level.solutionPrograms).
export function doPrograms(s, L) {
  Object.entries(L.solutionPrograms || {}).forEach(([id, prog]) => s.setProgram(id, prog));
  Object.entries(L.solutionTuned || {}).forEach(([name, v]) => s.tune(name, v));   // cursori di regolazione dei livelli con un processo
}
