// Disegni delle schede (introduzione e lezioni): SVG semplici, a tratto, con piccole animazioni CSS.
// Le animazioni sono in style.css (classi .art-dots, .art-glow) e si fermano con "riduci movimento".

const INK = '#1B2230';
const FASE = '#8B4A24';
const FASE_HALO = '#E9A15F';
const NEUTRO = '#2563A8';
const GV = '#4C9A2A';
const LAMP = '#F5B800';
const SOFT = '#9AA1AE';

const svg = (inner, label) =>
  `<svg viewBox="0 0 480 270" role="img" aria-label="${label}" focusable="false">${inner}</svg>`;

const line = (x1, y1, x2, y2, col = INK, w = 5, extra = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
const dots = d => `<path class="art-dots" d="${d}" fill="none" stroke="${LAMP}" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/>`;
const text = (x, y, t, col = INK, anchor = 'middle') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="IBM Plex Mono, monospace" font-size="14" fill="${col}">${t}</text>`;
const term = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#FBF9F4" stroke="${INK}" stroke-width="2.5"/>`;

function source() {
  return `<rect x="36" y="76" width="74" height="118" rx="8" fill="#FBF9F4" stroke="${INK}" stroke-width="3"/>` +
    text(73, 140, 'RETE') + term(110, 100) + term(110, 170);
}
function lamp(on) {
  const g = on ? `<circle class="art-glow" cx="386" cy="135" r="62" fill="${LAMP}" opacity=".28"/>` : '';
  return g + `<circle cx="386" cy="135" r="30" fill="${on ? LAMP : '#E6E0D2'}" stroke="${INK}" stroke-width="3"/>` +
    `<path d="M366 115 L406 155 M406 115 L366 155" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` +
    term(386, 100) + term(386, 170);
}
const loopPaths = {
  fase: 'M110 100 H386',
  neutro: 'M110 170 H386',
};

const quadro = () =>
  `<rect x="70" y="14" width="340" height="86" rx="10" fill="#1E2635" stroke="${INK}" stroke-width="3"/>` +
  `<text x="240" y="40" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="15" fill="#F3EFE6">QUADRO</text>` +
  term(140, 100) + term(340, 100) +
  `<text x="140" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#8DB7EA">NEUTRO</text>` +
  `<text x="340" y="82" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" font-weight="600" fill="#E9A15F">FASE</text>`;
const lampada2 = on =>
  `<rect x="150" y="190" width="180" height="62" rx="10" fill="${on ? LAMP : '#E6E0D2'}" stroke="${INK}" stroke-width="3"/>` +
  `<text x="240" y="242" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="15" fill="${INK}">LAMPADA</text>` +
  term(190, 190) + term(290, 190) +
  `<text x="190" y="216" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" fill="${INK}">B</text>` +
  `<text x="290" y="216" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="14" fill="${INK}">A</text>`;

const ART = {
  bancoVuoto: () => svg(quadro() + lampada2(false), 'Il quadro con le uscite fase e neutro, e sotto la lampada con i morsetti A e B'),
  bancoCablato: () =>
    svg(
      quadro() + lampada2(true) +
        `<path d="M340 107 C340 150 290 150 290 183" fill="none" stroke="${FASE}" stroke-width="6" stroke-linecap="round"/>` +
        `<path d="M140 107 C140 150 190 150 190 183" fill="none" stroke="${NEUTRO}" stroke-width="6" stroke-linecap="round"/>`,
      'Un filo marrone dalla fase a un morsetto della lampada e un filo blu dal neutro all’altro'
    ),
  lampada: () =>
    svg(
      `<rect x="30" y="20" width="420" height="230" rx="10" fill="#F3EFE6" stroke="${SOFT}" stroke-width="2"/>` +
        line(240, 20, 240, 70, INK, 3) + `<path d="M205 100 Q240 50 275 100 Z" fill="#E6E0D2" stroke="${INK}" stroke-width="3"/>` +
        `<circle cx="240" cy="108" r="14" fill="${LAMP}" stroke="${INK}" stroke-width="3"/>` +
        `<rect x="350" y="120" width="44" height="72" rx="8" fill="#FBF9F4" stroke="${INK}" stroke-width="3"/><rect x="361" y="132" width="22" height="22" rx="4" fill="#E6E0D2" stroke="${INK}" stroke-width="2"/>` +
        `<path d="M372 192 V230 H240 V122" fill="none" stroke="${SOFT}" stroke-width="3" stroke-dasharray="6 8"/>`,
      'Una lampada al soffitto comandata da un interruttore a parete, con i fili nel muro'
    ),
  giro: () =>
    svg(
      source() + lamp(false) + line(110, 100, 386, 100, FASE) + line(110, 170, 386, 170, NEUTRO) +
        dots('M110 100 H386') + dots('M386 170 H110') +
        text(248, 84, 'fase', FASE) + text(248, 196, 'neutro', NEUTRO),
      'La corrente esce dalla rete, attraversa la lampada e torna indietro'
    ),
  fili: () =>
    svg(
      line(60, 100, 420, 100, FASE, 12) + line(60, 170, 420, 170, NEUTRO, 12) +
        text(240, 76, 'fase: marrone, nero o grigio', FASE) + text(240, 208, 'neutro: blu', NEUTRO),
      'Due fili: la fase marrone e il neutro blu'
    ),
  chiuso: () =>
    svg(
      source() + lamp(true) + line(110, 100, 386, 100, FASE) + line(110, 170, 386, 170, NEUTRO) +
        dots('M110 100 H386') + dots('M386 170 H110') + text(248, 232, 'circuito chiuso: la lampada è accesa'),
      'Circuito chiuso con la lampada accesa'
    ),
  aperto: () =>
    svg(
      source() + lamp(false) + line(110, 100, 230, 100, FASE) + line(270, 100, 386, 100, FASE) + line(110, 170, 386, 170, NEUTRO) +
        `<path d="M232 90 L268 110" stroke="${SOFT}" stroke-width="3" stroke-linecap="round"/>` +
        text(250, 76, 'filo mancante', INK) + text(248, 232, 'circuito aperto: la lampada è spenta'),
      'Circuito aperto: manca un tratto di filo e la lampada è spenta'
    ),
  tensione: () =>
    svg(
      source() + lamp(false) + `<line x1="110" y1="100" x2="230" y2="100" stroke="${FASE_HALO}" stroke-opacity=".55" stroke-width="22" stroke-linecap="round"/>` +
        line(110, 100, 230, 100, FASE) + line(110, 170, 386, 170, NEUTRO) +
        `<circle cx="230" cy="100" r="13" fill="none" stroke="#BE2530" stroke-width="3" stroke-dasharray="4 4"/>` +
        text(250, 66, 'in tensione, senza corrente', INK) + text(248, 232, 'la tensione si ferma dove il filo finisce'),
      'Un filo di fase in tensione che si ferma, senza corrente'
    ),
  terra: () =>
    svg(
      `<rect x="150" y="70" width="180" height="110" rx="14" fill="#E6E0D2" stroke="${INK}" stroke-width="3"/>` +
        text(240, 130, 'apparecchio') +
        `<path d="M240 180 V220" stroke="${GV}" stroke-width="7" stroke-linecap="round"/><path d="M240 180 V220" stroke="#E8D500" stroke-width="7" stroke-dasharray="8 8"/>` +
        line(210, 226, 270, 226, INK, 4) + line(220, 238, 260, 238, INK, 4) + line(230, 250, 250, 250, INK, 4) +
        text(240, 50, 'la terra: giallo-verde'),
      'La terra, filo giallo-verde, collega la carcassa dell’apparecchio al dispersore'
    ),
  banco: () =>
    svg(
      `<rect x="40" y="40" width="160" height="80" rx="8" fill="#FBF9F4" stroke="${INK}" stroke-width="3"/>` + text(120, 84, 'quadro') + term(100, 120) + term(150, 120) +
        `<rect x="280" y="150" width="160" height="80" rx="8" fill="#FBF9F4" stroke="${INK}" stroke-width="3"/>` + text(360, 196, 'lampada') + term(320, 150) + term(400, 150) +
        `<path d="M100 120 C100 150 320 110 320 150" fill="none" stroke="${FASE}" stroke-width="6" stroke-linecap="round"/>` +
        `<path d="M150 120 C150 160 400 100 400 150" fill="none" stroke="${NEUTRO}" stroke-width="6" stroke-linecap="round"/>`,
      'Due componenti del banco collegati con un filo marrone e uno blu'
    ),
};

export function artHTML(key) {
  return ART[key] ? ART[key]() : '';
}
