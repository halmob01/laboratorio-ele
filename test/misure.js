// Aiuti per i test dei livelli con il multimetro: le letture che la verifica pretende, fatte davvero con la sessione
// oppure simulate come registro (per le prove che non usano la sessione).

export const loggedMeasures = L => (L.measures || []).map(m => ({ a: m.between[0], b: m.between[1], mode: m.mode || 'V', kind: m.reading || 'v', value: m.value === undefined ? null : m.value, live: m.live }));

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
