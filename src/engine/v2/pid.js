// Regolatore PID didattico (forma ISA, posizionale). Funzione pura. Specifica: docs/SPEC-PROCESSI.md, sezione 5.
//
//   u = Kp · (e + I + D)        e = sp − pv
//   I: integrale di e / Ti      (Ti in secondi; Ti = 0: senza integrale)
//   D: −Td · d(pv)/dt, filtrata (Td in secondi; Td = 0: senza derivativa). Derivativa sulla misura: cambiare il setpoint non da' il colpo.
//
// Anti-windup: con l'uscita satura e l'errore che spinge ancora oltre, l'integrale non cresce (si puo' spegnere per farlo vedere).
// Manuale -> automatico senza scosse: con `track` l'integrale si allinea all'uscita data.

export const newPid = () => ({ i: 0, d: 0, lastPv: null, u: 0 });

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

/**
 * @param {object} st   stato precedente (newPid())
 * @param {{pv:number, sp:number, kp:number, ti?:number, td?:number, lo?:number, hi?:number, dt:number, windup?:boolean, track?:number}} p
 *        windup: true = anti-windup spento (per mostrare il problema); track: uscita manuale a cui allinearsi (regolatore non attivo)
 * @returns {{ state: object, u: number }}
 */
export function pidStep(st, p) {
  const s = { ...(st || newPid()) };
  const lo = p.lo ?? 0, hi = p.hi ?? 100;
  const kp = p.kp > 0 ? p.kp : 0;
  const e = p.sp - p.pv;
  if (p.track !== undefined) {
    // manuale: l'uscita la decide qualcun altro; l'integrale si prepara a ripartire da li'
    s.u = clamp(p.track, lo, hi);
    // senza integrale (Ti = 0) non c'e' niente da allineare: il passaggio al solo P da' il salto, come in un regolatore vero
    s.i = kp > 0 && p.ti > 0 ? s.u / kp - e : 0;
    s.d = 0;
    s.lastPv = p.pv;
    return { state: s, u: s.u };
  }
  const dt = p.dt > 0 ? p.dt : 0;
  // derivativa sulla misura, con un filtro del primo ordine (costante Td/8)
  if (p.td > 0 && dt > 0 && s.lastPv !== null) {
    const raw = -p.td * (p.pv - s.lastPv) / dt;
    const tf = p.td / 8;
    s.d += (raw - s.d) * (dt / (tf + dt));
  } else if (!(p.td > 0)) s.d = 0;
  if (dt > 0 || s.lastPv === null) s.lastPv = p.pv;
  // integrale, con il blocco quando l'uscita e' satura nella stessa direzione dell'errore
  // senza integrale (Ti = 0) l'integrale e' zero sempre, anche con l'uscita satura: un valore rimasto bloccato
  // (dal manuale o da un Ti di prima) terrebbe l'uscita a zero per sempre
  if (!(p.ti > 0)) s.i = 0;
  else {
    const iNext = dt > 0 ? s.i + e * dt / p.ti : s.i;
    const uFree = kp * (e + iNext + s.d);
    const saturatedSameWay = (uFree > hi && e > 0) || (uFree < lo && e < 0);
    if (!(saturatedSameWay && !p.windup)) s.i = iNext;
  }
  s.u = clamp(kp * (e + s.i + s.d), lo, hi);
  return { state: s, u: s.u };
}
