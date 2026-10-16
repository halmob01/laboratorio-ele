// La torre di Rozzano disegnata dai due fili: marrone (fase) a sinistra, blu (neutro) a destra.
// Solo SVG e CSS: niente script durante l'animazione. Tre versioni:
//   'profilo'  la sagoma vista di lato, i due fili ne disegnano meta' ciascuno e si toccano in cima
//   'spira'    i fili attorcigliati lungo il fusto, i dischi in prospettiva (davanti marrone, dietro blu)
//   'logo'     sagoma essenziale a tratto spesso nel tondo scuro del marchio
// Modi (classe sul <svg>): 'draw' disegna una volta (aggiungere 'go' per partire), 'loop' per il caricamento.

const CX = 50;
const f = n => +n.toFixed(2);

// Meta' destra della sagoma, dal piede alla punta: [scarto dal centro, y].
const PROFILE = [
  [3.5, 152], [3.5, 80],
  [20, 71], [22, 70], [22, 68], [20, 67.5], [4, 67],   // disco basso: cono sotto, bordo, piano
  [4, 60],
  [13, 56.5], [14, 54.5], [11.5, 54],                  // corona: tre gradini, il piu' largo in alto
  [20, 50.5], [21, 48.5], [18, 48],
  [27.5, 44.5], [28, 42.5], [26, 41.5], [6, 41],
  [5, 36],
  [13, 33], [13.5, 31.5], [12, 31], [5, 31],           // dischi piccoli delle parabole
  [4.5, 26],
  [11, 23.5], [11.5, 22], [4.5, 21.5],
  [3, 19], [1.5, 11], [0, 3],                          // antenna
];

function half(points, side, cx, lead) {
  const pts = points.map(([dx, y]) => [cx + side * dx, y]);
  if (lead) pts.unshift([cx + side * lead, points[0][1]]);
  return 'M' + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join('L');
}

function profilo(o) {
  const lead = o.lead ? 46 : 0;
  return {
    box: o.lead ? '0 0 100 160' : '20 0 60 160',
    fase: half(PROFILE, -1, CX, lead),
    neutro: half(PROFILE, 1, CX, lead),
    spark: [CX, 3],
    width: 2.2,
  };
}

// Doppino attorcigliato tra y0 e y1 (dal basso verso l'alto), fase 0 o pi.
function twist(y0, y1, phase, amp = 3.2) {
  let d = '';
  for (let y = y0; y >= y1 - 0.01; y -= 1.5) {
    const x = CX + amp * Math.sin(y * 0.42 + phase);
    d += (d ? 'L' : 'M') + `${f(x)} ${f(y)}`;
  }
  return d;
}

function spira(o) {
  const discs = [
    { y: 66, rx: 18, cone: 8, from: 74 },
    { y: 56, rx: 12, cone: 3 },
    { y: 51, rx: 16, cone: 3 },
    { y: 45, rx: 21, cone: 3.5 },
    { y: 36, rx: 11, cone: 2, from: 40 },
    { y: 26, rx: 10, cone: 2, from: 30 },
  ];
  const build = (side, phase) => {
    let d = o.lead ? `M${CX + side * 46} 152L${CX + side * 3} 152` : '';
    d += twist(152, 74, phase).replace(/^M/, d ? 'L' : 'M');
    let prevTop = null;
    for (const k of discs) {
      if (k.from && prevTop !== null) d += twist(prevTop, k.from, phase);
      const ry = k.rx * 0.17;
      const start = k.y + k.cone;
      d += `M${CX + side * 3} ${f(start)}L${CX + side * k.rx} ${k.y}`;
      // marrone: meta' davanti (sotto); blu: meta' dietro (sopra). Entrambi con sweep 0.
      d += `A${k.rx} ${f(ry)} 0 0 0 ${CX - side * k.rx} ${k.y}`;
      prevTop = k.y - ry - 1;
    }
    d += `M${CX + side * 3.5} 24L${CX + side * 1.5} 14L${CX} 4`;
    return d;
  };
  return {
    box: o.lead ? '0 0 100 160' : '20 0 60 160',
    fase: build(-1, 0),
    neutro: build(1, Math.PI),
    spark: [CX, 4],
    width: 1.8,
  };
}

const LOGO = [
  [3, 58], [3, 42],
  [13, 37.5], [13, 35.5], [4, 35.5],   // disco basso
  [4, 31.5],
  [16, 27], [16, 24.5], [4, 24.5],     // corona
  [4, 21],
  [9.5, 18.5], [9.5, 17], [3, 17],     // disco piccolo
  [1.5, 13], [0, 8],
];

function logo() {
  return {
    box: '0 0 64 64',
    fase: half(LOGO, -1, 32, 0),
    neutro: half(LOGO, 1, 32, 0),
    spark: [32, 8],
    width: 3.4,
    badge: true,
  };
}

const BUILD = { profilo, spira, logo };

/**
 * @param {'profilo'|'spira'|'logo'} variant
 * @param {{ mode?: 'draw'|'loop'|'still', lead?: boolean, size?: number, label?: string }} o
 */
export function towerSVG(variant = 'profilo', o = {}) {
  const g = (BUILD[variant] || profilo)(o);
  const mode = o.mode || 'draw';
  const [, , w, h] = g.box.split(' ').map(Number);
  const size = o.size || h;
  const a11y = o.label ? `role="img" aria-label="${o.label}"` : 'aria-hidden="true"';
  const bg = g.badge ? `<circle cx="32" cy="32" r="32" class="tw-bg"/>` : '';
  // Il blu parte con un po' di ritardo: i due fili salgono quasi insieme, non a specchio perfetto.
  return `<svg class="tw tw-${variant} ${mode}" viewBox="${g.box}" width="${f(size * w / h)}" height="${size}" ${a11y}>${bg}` +
    (variant === 'spira' && mode === 'loop' ? `<g class="tw-ghost"><path d="${g.fase}"/><path d="${g.neutro}"/></g>` : '') +
    `<g fill="none" stroke-width="${g.width}" stroke-linecap="round" stroke-linejoin="round">` +
    `<path class="tw-w tw-fase" pathLength="1" d="${g.fase}"/>` +
    `<path class="tw-w tw-neutro" pathLength="1" d="${g.neutro}"/></g>` +
    `<circle class="tw-spark" cx="${g.spark[0]}" cy="${g.spark[1]}" r="${variant === 'logo' ? 3.2 : 2.6}"/></svg>`;
}

// Fa partire le torri in modo 'draw' quando entrano nella finestra (una volta sola).
export function playWhenVisible(root) {
  const items = root.querySelectorAll('.tw.draw:not(.go)');
  if (!items.length) return;
  if (typeof IntersectionObserver !== 'function') { items.forEach(el => el.classList.add('go')); return; }
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('go'); io.unobserve(e.target); }
  }, { threshold: 0.4 });
  items.forEach(el => io.observe(el));
}
