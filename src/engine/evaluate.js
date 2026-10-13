// Verifica di un cablaggio rispetto a un livello.
//
// Il risultato non contiene frasi: contiene CODICI con i loro parametri.
// Il testo (in italiano o in un'altra lingua) si compone altrove (src/content/it.js),
// e una vista 3D puo' usare gli stessi codici per evidenziare o animare.
//
// Risultato:
//   { work, color, safe, stars, pass }
//   ogni sezione: { ok, status: 'ok' | 'ko' | 'na', items: [{ code, ...parametri }] }
//     'na' = non valutabile (la sicurezza si controlla solo se il circuito funziona)

import { analyse, connect, makeUF, sourceOf } from './circuit.js';
import { contactsOf } from './components.js';
import { allowedColors } from './wires.js';

function section() {
  return { ok: false, status: 'ko', items: [] };
}

function finish(sec) {
  if (sec.ok) sec.status = 'ok';
  else if (sec.items.length && sec.items[0].code === 'safe.skipped') sec.status = 'na';
  else sec.status = 'ko';
}

export function evaluate(level, wires) {
  const ctl = level.controls;
  const combos = [];
  for (let m = 0; m < (1 << ctl.length); m++) {
    const st = {};
    ctl.forEach((id, i) => (st[id] = (m >> i) & 1));
    combos.push(st);
  }
  const res = combos.map(st => analyse(level, wires, st));
  const out = { work: section(), color: section(), safe: section() };
  const add = (sec, code, params) => out[sec].items.push(params ? { code, ...params } : { code });

  if (!wires.length) {
    add('work', 'work.noWires');
    add('color', 'color.noWires');
    add('safe', 'safe.skipped');
    out.stars = 0;
    out.pass = false;
    finish(out.work);
    finish(out.color);
    finish(out.safe);
    return out;
  }

  /* funziona */
  const faults = res.filter(r => r.fault);
  if (faults.length) {
    add('work', faults[0].fault === 'corto' ? 'work.short' : 'work.phaseToEarth');
  } else if (!ctl.length) {
    if (res[0].lit) {
      out.work.ok = true;
      add('work', 'work.socketLit');
    } else {
      const r = res[0];
      const anyF = r.a === r.F || r.b === r.F;
      const anyN = r.a === r.N || r.b === r.N;
      if (!anyF) add('work', 'work.noPhaseAtSocket');
      if (!anyN) add('work', 'work.noNeutralAtSocket');
      if (anyF && anyN) add('work', 'work.wrongSocketTerminals');
    }
  } else {
    const anyLit = res.some(r => r.lit);
    if (!anyLit) {
      const anyF = res.some(r => r.a === r.F || r.b === r.F);
      const anyN = res.some(r => r.a === r.N || r.b === r.N);
      add('work', 'work.neverLit');
      if (!anyF) add('work', 'work.noPhaseAtLoad');
      if (!anyN) add('work', 'work.noNeutralAtLoad');
    } else {
      let allGood = true;
      ctl.forEach((id, i) => {
        let flips = 0;
        combos.forEach((st, m) => {
          if (res[m].lit !== res[m ^ (1 << i)].lit) flips++;
        });
        if (flips === 0) {
          allGood = false;
          add('work', 'work.controlNoEffect', { comp: id });
        } else if (flips < combos.length) {
          allGood = false;
          add('work', 'work.controlPartial', { comp: id });
        }
      });
      if (allGood) {
        out.work.ok = true;
        add('work', 'work.allControlsOk');
      }
    }
  }

  /* colori: il ruolo di ogni filo si deduce dalla rete, non dalla sua posizione */
  const uw = makeUF();
  wires.forEach(w => uw.u(w.a, w.b));
  level.comps
    .filter(c => c.type === 'quadro')
    .forEach(c => contactsOf(c, 0).forEach(([a, b]) => uw.u(c.id + '.' + a, c.id + '.' + b)));
  const sr = sourceOf(level);
  const Fn = uw.f(sr.F), Nn = uw.f(sr.N), Pn = uw.f(sr.PE);
  const bad = [];
  wires.forEach(w => {
    const k = uw.f(w.a);
    let role = 'fase';
    if (k === Nn && k !== Fn) role = 'neutro';
    else if (k === Pn && k !== Fn) role = 'terra';
    if (!allowedColors(role).includes(w.c)) bad.push({ code: 'color.wrong', a: w.a, b: w.b, role });
  });
  if (!bad.length) {
    out.color.ok = true;
    add('color', 'color.ok', { earth: !!level.earth });
  } else {
    bad.slice(0, 3).forEach(b => out.color.items.push(b));
    if (bad.length > 3) add('color', 'color.more', { n: bad.length - 3 });
  }

  /* sicurezza */
  if (!out.work.ok) {
    add('safe', 'safe.skipped');
  } else {
    const r0 = res[0];
    let ok = true;
    if (level.full && (r0.uf.f('Q.Fi') === r0.N || r0.uf.f('Q.Ni') === r0.F)) {
      ok = false;
      add('safe', 'safe.sourceSwapped');
    }
    if (level.earth) {
      if (r0.uf.f(level.earth[1]) !== r0.uf.f(level.earth[0])) {
        ok = false;
        add('safe', 'safe.noEarthAtSocket');
      }
      if (r0.uf.f(level.pol) !== r0.F) {
        ok = false;
        add('safe', 'safe.socketPolarity');
      }
    } else {
      const alwaysN = level.load.some(t => res.every(r => r.uf.f(t) === r.N));
      if (!alwaysN) {
        ok = false;
        add('safe', 'safe.neutralBroken');
      }
    }
    if (level.mustEarth && r0.uf.f(level.mustEarth[0]) !== r0.uf.f(level.mustEarth[1])) {
      ok = false;
      add('safe', 'safe.noPanelEarth');
    }
    if (ok) {
      out.safe.ok = true;
      add('safe', 'safe.ok', { variant: level.earth ? 'socket' : level.full ? 'full' : 'basic' });
    }
  }

  out.stars = (out.work.ok ? 1 : 0) + (out.color.ok ? 1 : 0) + (out.safe.ok ? 1 : 0);
  out.pass = out.stars === 3;
  finish(out.work);
  finish(out.color);
  finish(out.safe);
  return out;
}
