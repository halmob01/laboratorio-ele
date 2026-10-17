// Riscrittura dei pannelli che non perde i clic. Un clic arriva solo se pressione e rilascio cadono sullo stesso pulsante:
// se nel frattempo il pannello viene riscritto (nelle prove e nei processi lo stato cambia di continuo), il pulsante
// e' un altro e il clic va perso. Finche' si tiene premuto dentro un pannello, la sua riscrittura aspetta il rilascio.
let pressed = null, guard = null;
const waiting = new Map();          // pannello -> riscrittura rimandata

function flush() {
  if (pressed) return;
  const w = [...waiting.values()]; waiting.clear();
  w.forEach(f => f());
}
function release() {
  if (!pressed) return;
  pressed = null; clearTimeout(guard);
  setTimeout(flush, 0);             // dopo il click, che arriva subito dopo il rilascio
}
if (typeof document !== 'undefined') {
  document.addEventListener('pointerdown', e => {
    // morsetti e pulsanti a impulso lavorano su pressione e rilascio, non sul clic: il banco si ridisegna anche mentre li tieni
    if (e.target.closest && e.target.closest('[data-term],[data-hold]')) return;
    pressed = e.target; clearTimeout(guard);
    guard = setTimeout(release, 2000);    // un rilascio perso (fuori dalla finestra) non blocca i pannelli
  }, true);
  document.addEventListener('pointerup', release, true);
  document.addEventListener('pointercancel', release, true);
}

// Esegue write() adesso, o al rilascio se si sta premendo dentro node.
export function whenFree(node, write) {
  if (pressed && node.contains(pressed)) { waiting.set(node, write); return; }
  waiting.delete(node);
  write();
}

// Scrive l'HTML di un pannello solo se e' cambiato, e non mentre si preme un suo pulsante.
export function writeHTML(node, html) {
  if (!node || node._html === html) return;
  node._html = html;
  whenFree(node, () => { node.innerHTML = node._html; });
}
