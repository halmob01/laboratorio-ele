// Cornice del trilocale a tutto schermo: i pezzi della pagina come HTML. Funzioni pure.
// Usa gli stessi stili delle prove dei moduli (chiamata, barra in alto, binario, segnaposti, rapporto): vedi style.css.

const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const CIRCUITS = [
  { id: 't01-bagno', room: 'bagno', label: 'Bagno' },
  { id: 't02-camera', room: 'camera', label: 'Camera' },
  { id: 't03-corridoio', room: 'corridoio', label: 'Corridoio' },
];

// L'ordine di lavoro che apre il modulo.
export function orderHTML(F) {
  return `<div class="pcall"><span class="pk">${esc(F.kick)}</span>
      <div class="pcall-head"><span class="pcall-time">${esc(F.order.label)}</span><span class="pcall-where">${esc(F.order.where)}</span></div>
      <h2>${esc(F.title)}</h2>
      <p class="pcall-quote">${esc(F.order.text)}</p>
      <button class="pbtn y pgo" type="button" data-tui="start">Inizia</button>
      <span class="pload" aria-hidden="true"><i></i></span></div>
    <button class="pskip" type="button" data-tui="skip">Salta</button>`;
}

export function topHTML(F, ui) {
  const t = (k, label, pressed) => `<button class="pchip" type="button" data-tui="${k}"${pressed === undefined ? '' : ` aria-pressed="${!!pressed}"`}>${label}</button>`;
  return `<a class="pmap" href="#/home">&larr; Mappa</a>
    <div class="ptitle"><span class="pk">${esc(F.kick)}</span><b>${esc(F.title)}</b></div>
    <div class="ptools">${ui.bench ? t('house', 'Torna alla casa') : ''}${t('wires', 'Fili', ui.wires)}${ui.plan !== null ? t('plan', 'Pianta', ui.plan) : ''}${t('sound', 'Suono', ui.sound)}</div>`;
}

// Le tre stanze come stazioni del binario: fatta, corrente, da fare.
export function stationsHTML(F, hs, current) {
  const li = CIRCUITS.map(c => {
    const st = hs.rooms[c.room].state;
    const cls = st === 'funziona' ? 'done' : c.id === current ? 'cur' : '';
    return `<li class="${cls}"><span class="pnode" aria-hidden="true"></span><a class="ptxt tstation" href="#/livello/${c.id}" data-tgo="${c.id}"><b>${esc(c.label)}</b> <small>${esc(F.rooms[c.id].kind)} · ${esc(st)}</small></a></li>`;
  }).join('');
  return `<h2 class="vh">Le stanze</h2><ol class="psteps">${li}</ol>`;
}

// Segnaposti sulla scena: { x, y, label, sub, act, cls }; sul telefono si legge solo il nome, lo stato e' nel colore
export function pinsHTML(pins) {
  return pins.map(p => `<button class="ppin tpin ${p.cls || ''}" type="button" ${p.act} style="transform:translate(${Math.round(p.x)}px,${Math.round(p.y)}px)"><span>${esc(p.label)}${p.sub ? `<small> · ${esc(p.sub)}</small>` : ''}</span></button>`).join('');
}

// Il finale: la Dichiarazione di conformita', il documento che l'elettricista rilascia a fine lavoro.
export function dicoHTML(F, name, when) {
  const D = F.dico;
  return `<div class="pcard preport tdico" role="dialog" aria-modal="true" aria-labelledby="tD">
      <div class="prep-head"><span class="pk">Modulo 1 completato</span><span class="prep-time">${esc(when)}</span></div>
      <h2 id="tD">${esc(D.title)}</h2><p class="tdico-sub">${esc(D.sub)}</p>
      <dl class="prep">
        <dt>Dove</dt><dd>${esc(D.where)}</dd>
        <dt>Lavori</dt><dd>${esc(D.work)}</dd>
        <dt>Esito</dt><dd>${esc(D.ok)}</dd>
        <dt>${esc(D.by)}</dt><dd class="tsign"${name ? ' data-notr' : ''}>${esc(name || 'Giocatore')}</dd>
      </dl>
      <div class="prow"><a class="pbtn y" href="#/home">Torna alla mappa</a><button class="pbtn" type="button" data-tui="closeSheet">Guarda la casa</button></div></div>`;
}
