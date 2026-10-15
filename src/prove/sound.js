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
  silence() { Object.keys(hums).forEach(k => this.hum(k, false, true)); },
  vibrate(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* non disponibile */ } },
};
