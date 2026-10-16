// La torre di Rozzano disegnata dai due fili: marrone (fase) e blu (neutro).
// Alla base salgono dritti e paralleli, poi si attorcigliano; tre dischi in prospettiva (davanti marrone, dietro blu).
// Solo SVG e CSS: niente script durante l'animazione.
// Modi (classe sul <svg>): 'draw' disegna una volta (aggiungere 'go' per partire), 'loop' per il caricamento.

const CX = 50;
const f = n => +n.toFixed(2);

// Fusto della spira: i due fili salgono dritti e paralleli, poi si attorcigliano.
// Due giri esatti: in cima ogni filo e' di nuovo dal suo lato e prosegue senza salti.
const STRAIGHT_TO = 112, TWIST_TO = 76, GAP = 3;
const TURN = 4 * Math.PI / (STRAIGHT_TO - TWIST_TO);

function trunk(side) {
  let d = `L${CX + side * GAP} ${STRAIGHT_TO}`;
  for (let y = STRAIGHT_TO - 1.5; y >= TWIST_TO - 0.01; y -= 1.5) {
    d += `L${f(CX + side * GAP * Math.cos((STRAIGHT_TO - y) * TURN))} ${f(y)}`;
  }
  return d;
}

function spira(o) {
  // dischi: y del bordo, raggio, y dove il cono parte dal fusto
  const discs = [
    { y: 66, rx: 18, from: TWIST_TO },
    { y: 47, rx: 21, from: 59 },
    { y: 31, rx: 10, from: 35 },
  ];
  const build = side => {
    let d = o.lead ? `M${CX + side * 46} 152L${CX + side * GAP} 152` : `M${CX + side * GAP} 152`;
    d += trunk(side);
    let top = null;
    for (const k of discs) {
      const ry = k.rx * 0.17;
      if (top !== null) d += `M${CX + side * GAP} ${f(top)}L${CX + side * GAP} ${k.from}`;
      // cono fino al bordo, poi meta' disco: marrone davanti (sotto), blu dietro (sopra)
      d += `L${CX + side * k.rx} ${k.y}A${k.rx} ${f(ry)} 0 0 0 ${CX - side * k.rx} ${k.y}`;
      top = k.y - ry;
    }
    d += `M${CX + side * GAP} ${f(top)}L${CX + side * 1.5} 16L${CX} 4`;
    return d;
  };
  return {
    box: o.lead ? '0 0 100 160' : '20 0 60 160',
    fase: build(-1),
    neutro: build(1),
    spark: [CX, 4],
    width: 1.8,
  };
}

const BUILD = { spira };

/**
 * @param {'spira'} variant
 * @param {{ mode?: 'draw'|'loop'|'still', lead?: boolean, size?: number, label?: string }} o
 */
export function towerSVG(variant = 'spira', o = {}) {
  const g = (BUILD[variant] || spira)(o);
  const mode = o.mode || 'draw';
  const [, , w, h] = g.box.split(' ').map(Number);
  const size = o.size || h;
  const a11y = o.label ? `role="img" aria-label="${o.label}"` : 'aria-hidden="true"';
  // Il blu parte con un po' di ritardo: i due fili salgono quasi insieme, non a specchio perfetto.
  return `<svg class="tw tw-${variant} ${mode}" viewBox="${g.box}" width="${f(size * w / h)}" height="${size}" ${a11y}>` +
    (variant === 'spira' && mode === 'loop' ? `<g class="tw-ghost"><path d="${g.fase}"/><path d="${g.neutro}"/></g>` : '') +
    `<g fill="none" stroke-width="${g.width}" stroke-linecap="round" stroke-linejoin="round">` +
    `<path class="tw-w tw-fase" pathLength="1" d="${g.fase}"/>` +
    `<path class="tw-w tw-neutro" pathLength="1" d="${g.neutro}"/></g>` +
    `<circle class="tw-spark" cx="${g.spark[0]}" cy="${g.spark[1]}" r="2.6"/></svg>`;
}

// Riquadro di caricamento: torre in ciclo e testo.
export function loaderHTML(text) {
  return towerSVG('spira', { mode: 'loop', size: 56 }) + `<span>${text}</span>`;
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
