// Suoni delle prove, sintetizzati con WebAudio (niente file): leve, scatto del differenziale e i ronzii della casa
// legati allo stato vero (frigorifero sulla linea cucina, TV e stufetta sulla linea prese). L'effetto sta nel contrasto:
// quando scatta il differenziale tutto tace insieme. Si attiva solo dopo un tocco (regola dei browser).

let ac = null, master = null, enabled = true;
const hums = {};

function ctx() {
  if (ac) return ac;
  try {
    ac = new (window.AudioContext || window.webkitAudioContext)();
    master = ac.createGain();
    master.gain.value = 0.9;
    master.connect(ac.destination);
  } catch (e) { ac = null; }
  return ac;
}

function burst(dur, gain, freq, q = 1, type = 'bandpass') {
  const a = ctx();
  if (!a || !enabled) return;
  const n = Math.floor(a.sampleRate * dur), b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 4);
  const s = a.createBufferSource(); s.buffer = b;
  const f = a.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = a.createGain(); g.gain.value = gain;
  s.connect(f); f.connect(g); g.connect(master); s.start();
}
function thump(freq, gain, dur) {
  const a = ctx();
  if (!a || !enabled) return;
  const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
  o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(freq * 0.5, t + dur);
  g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
}

// Ronzii continui, a volume bassissimo. kind: 'frigo' | 'tv' | 'stufa'
function makeHum(kind) {
  const a = ctx();
  if (!a) return null;
  const g = a.createGain(); g.gain.value = 0; g.connect(master);
  const nodes = [];
  if (kind === 'frigo') {
    [50, 100, 150].forEach((f, i) => { const o = a.createOscillator(); o.frequency.value = f; const og = a.createGain(); og.gain.value = [0.5, 0.35, 0.12][i]; o.connect(og); og.connect(g); o.start(); nodes.push(o); });
  } else {
    const n = a.sampleRate * 2, b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource(); s.buffer = b; s.loop = true;
    const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = kind === 'tv' ? 1800 : 300; f.Q.value = kind === 'tv' ? 0.6 : 0.4;
    s.connect(f); f.connect(g); s.start(); nodes.push(s);
    if (kind === 'tv') {     // la TV "respira": un leggero tremolio di volume
      const lfo = a.createOscillator(), lg = a.createGain(); lfo.frequency.value = 0.7; lg.gain.value = 0.004; lfo.connect(lg); lg.connect(g.gain); lfo.start(); nodes.push(lfo);
    }
  }
  return { g, level: { frigo: 0.018, tv: 0.008, stufa: 0.01 }[kind] };
}

// il motore: tre armoniche gravi piu' un fruscio, sempre lo stesso nodo (si alza e si abbassa)
let motorNode = null;
function makeMotor(a) {
  const g = a.createGain(); g.gain.value = 0; g.connect(master);
  const osc = [100, 200, 300].map((f, i) => { const o = a.createOscillator(); o.type = i ? 'sine' : 'triangle'; o.frequency.value = f; const og = a.createGain(); og.gain.value = [0.6, 0.25, 0.1][i]; o.connect(og); og.connect(g); o.start(); return o; });
  return { g, osc };
}
function motorStop(instant) {
  if (!motorNode || !ac) return;
  const t = ac.currentTime;
  motorNode.g.gain.cancelScheduledValues(t);
  if (instant) motorNode.g.gain.setValueAtTime(0, t);
  else { motorNode.g.gain.setValueAtTime(motorNode.g.gain.value, t); motorNode.g.gain.linearRampToValueAtTime(0, t + 0.5); }
}

export const sound = {
  // da chiamare dentro un tocco: sblocca l'audio
  unlock() { const a = ctx(); if (a && a.state === 'suspended') a.resume(); },
  setEnabled(on) { enabled = !!on; if (!enabled) Object.keys(hums).forEach(k => this.hum(k, false, true)); },
  enabled: () => enabled,
  click() { burst(0.04, 0.5, 2400, 1.2); thump(140, 0.15, 0.06); },
  tac() { burst(0.16, 1.4, 900, 0.9); thump(90, 0.6, 0.18); burst(0.05, 0.6, 3200, 2); },
  chime(i = 0) {
    const a = ctx();
    if (!a || !enabled) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime;
    o.type = 'sine'; o.frequency.value = [660, 880, 1100][i % 3];
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.55);
  },
  // acceso o spento un ronzio; instant: si ferma di colpo (lo scatto)
  hum(kind, on, instant) {
    const a = ctx();
    if (!a) return;
    if (!hums[kind]) { if (!on) return; hums[kind] = makeHum(kind); }
    const h = hums[kind];
    if (!h) return;
    const t = a.currentTime, v = on && enabled ? h.level : 0;
    h.g.gain.cancelScheduledValues(t);
    if (instant) h.g.gain.setValueAtTime(v, t);
    else { h.g.gain.setValueAtTime(h.g.gain.value, t); h.g.gain.linearRampToValueAtTime(v, t + 0.6); }
  },
  silence() { Object.keys(hums).forEach(k => this.hum(k, false, true)); motorStop(true); },
  // motore del nastro: ronzio grave; load da 0 a 1 (sovraccarico) abbassa il tono e alza il volume
  motor(on, load = 0) {
    const a = ctx();
    if (!a) return;
    if (!on || !enabled) { motorStop(false); return; }
    if (!motorNode) motorNode = makeMotor(a);
    const t = a.currentTime;
    motorNode.g.gain.cancelScheduledValues(t);
    motorNode.g.gain.setValueAtTime(motorNode.g.gain.value, t);
    motorNode.g.gain.linearRampToValueAtTime(0.02 + 0.03 * load, t + 0.4);
    motorNode.osc.forEach((o, i) => { o.frequency.cancelScheduledValues(t); o.frequency.setValueAtTime(o.frequency.value, t); o.frequency.linearRampToValueAtTime([100, 200, 300][i] * (1 - 0.18 * load), t + 0.6); });
  },
  // la sirena del turno: due note lunghe
  siren() {
    const a = ctx();
    if (!a || !enabled) return;
    [0, 1.1].forEach((d, i) => {
      const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + d;
      o.type = 'sawtooth'; o.frequency.setValueAtTime(i ? 520 : 440, t); o.frequency.linearRampToValueAtTime(i ? 560 : 470, t + 0.9);
      const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.12); g.gain.setValueAtTime(0.06, t + 0.8); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.0);
      o.connect(f); f.connect(g); g.connect(master); o.start(t); o.stop(t + 1.05);
    });
  },
  // la saracinesca: rumore di rulli che sale di tono
  shutter(ms = 1600) {
    const a = ctx();
    if (!a || !enabled) return;
    const dur = ms / 1000, n = Math.floor(a.sampleRate * dur), b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (0.6 + 0.4 * Math.sin(i / 90));
    const s = a.createBufferSource(); s.buffer = b;
    const f = a.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.4;
    const t = a.currentTime;
    f.frequency.setValueAtTime(260, t); f.frequency.linearRampToValueAtTime(620, t + dur);
    const g = a.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.15); g.gain.setValueAtTime(0.22, t + dur - 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(t);
  },
  // il contattore che apre: un tonfo secco
  clunk() { thump(70, 0.5, 0.14); burst(0.05, 0.5, 1800, 1.5); },
  vibrate(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* non disponibile */ } },
};
