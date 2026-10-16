// Schermate della pagina oltre al banco: homepage, introduzione, scheda dell'unità, piè di pagina, schede informative.
// Funzioni pure: ricevono l'istantanea della sessione (e un po' di stato della vista) e restituiscono HTML.

import { MODULES, UPCOMING, TRILOCALE, INTRO, GLOSSARY, LEGEND, INFO_PRIVACY, FOOTER } from '../content/home.js';
import { RANK_NAMES, STATUS_NAMES } from '../content/it.js';
import { CONTACT_EMAIL, GAME_VERSION } from '../config.js';
import { artHTML } from './art.js';
import { towerSVG } from './tower.js';
import { LANGS, hasLang, getLang } from '../i18n/index.js';

export const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const STAR = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.9 7.4.7-5.6 4.9 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3L1.6 9.6 9 8.9z" fill="#F5B800" stroke="#1B2230" stroke-width="1.5" stroke-linejoin="round"/></svg>';

/* ---------- lingua ---------- */
// Un globo con il codice della lingua in lettere latine (IT, AR, EN): si riconosce anche senza leggere la lingua attiva.
// Sopra c'e' il menu nativo, trasparente: tastiera, lettori di schermo e telefoni lo usano come sempre.
const GLOBE = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.8 2.6 4.2 5.8 4.2 9.5s-1.4 6.9-4.2 9.5c-2.8-2.6-4.2-5.8-4.2-9.5s1.4-6.9 4.2-9.5z"/></svg>';
export function langSelectHTML() {
  const keys = Object.keys(LANGS).filter(hasLang);
  if (keys.length < 2) return '';
  const opts = keys.map(k => `<option value="${k}"${k === getLang() ? ' selected' : ''}>${k.toUpperCase()} · ${LANGS[k].name}</option>`).join('');
  return `<label class="langpick" data-notr title="Lingua · Language · اللغة">${GLOBE}<span class="langcode" dir="ltr">${getLang().toUpperCase()}</span><select class="langsel" id="langSel" data-notr aria-label="Lingua / Language / اللغة">${opts}</select></label>`;
}

// Avviso sulle traduzioni: visibile solo fuori dall'italiano (vedi style.css).
export function trNoteHTML() {
  const link = CONTACT_EMAIL ? ` <a href="mailto:${esc(CONTACT_EMAIL)}?subject=${encodeURIComponent('Traduzione - Fase e Neutro ' + GAME_VERSION)}">Segnala un errore di traduzione</a>` : '';
  return `<p class="trnote">Traduzione non rivista da un madrelingua: può contenere errori.${link}</p>`;
}

/* ---------- barra in alto ---------- */
export function appbarHTML(s, profile) {
  const name = profile.name ? esc(profile.name) : 'Giocatore';
  const rank = RANK_NAMES[s.player.rank.id];
  return `<a class="brand" href="#/home" aria-label="Fase e Neutro, vai alla mappa">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="17" fill="#1E2635"/><line x1="7" y1="12" x2="27" y2="12" stroke="#E9A15F" stroke-width="4" stroke-linecap="round"/><line x1="7" y1="22" x2="27" y2="22" stroke="#8CC3F2" stroke-width="4" stroke-linecap="round"/></svg>
      <span class="wordmark" data-notr>Fase <i>e</i> Neutro</span>
    </a>
    <button class="player" id="bPlayer" aria-label="Giocatore ${name}, grado ${rank}, ${s.player.xp} XP. Cambia nome"><span class="pname"${profile.name ? ' data-notr' : ''}>${name}</span><span class="prank">${rank}</span><span class="pxp">${s.player.xp} XP</span></button>${langSelectHTML()}`;
}

/* ---------- homepage ---------- */
function levelCard(l, s) {
  const st = l.status;
  const pill = `<span class="pill st-${st.replace(' ', '-')}">${STATUS_NAMES[st]}</span>`;
  const stars = st === 'completato' ? `<div class="starrow" role="img" aria-label="${l.stars} stelle su 3">${STAR.repeat(l.stars)}</div>` : '';
  const main = { nuovo: 'Inizia', 'in corso': 'Continua', completato: 'Rigioca', saltato: 'Vedi la lezione' }[st];
  const skip = st === 'nuovo' || st === 'in corso'
    ? `<a class="btn ghost" href="#/livello/${l.id}/verifica" aria-label="Già lo so: prova di salto per ${esc(l.title)}">Già lo so</a>` : '';
  return `<li class="lvcard ${st === 'in corso' ? 'cur' : ''}" data-status="${st}">
      <span class="node" aria-hidden="true"></span>
      <div class="lvbody">
        <div class="lvhead"><div><h3>${esc(l.title)}</h3></div>${pill}</div>
        <p>${esc(l.blurb)}</p>${stars}
        <div class="lvact"><a class="btn main" href="#/livello/${l.id}">${main}</a>${skip}</div>
      </div>
    </li>`;
}
function soonCard(x) {
  return `<li class="lvcard soon"><span class="node" aria-hidden="true"></span>
      <div class="lvbody"><div class="lvhead"><div><h3>${esc(x.title)}</h3></div><span class="pill st-soon">In arrivo</span></div><p>${esc(x.blurb)}</p></div></li>`;
}

// Livello da proporre con "Continua": l'ultimo aperto se non e' finito, altrimenti il primo non completato.
export function continueTarget(s) {
  const open = l => l.status !== 'completato' && l.status !== 'saltato';
  const last = s.levels.find(l => l.id === s.last);
  if (last && open(last)) return last;
  const m0 = s.levels.find(l => open(l) && MODULES[0].levels.includes(l.id));
  if (m0) return m0;
  // finito il Modulo 0 si propone il trilocale; chi lo ha completato o saltato prosegue con i moduli successivi
  if (s.levels.some(l => /^t\d\d-/.test(l.id) && open(l))) return null;
  return s.levels.find(l => open(l) && !/^t\d\d-/.test(l.id)) || null;
}

// ---- milestone: la prova 3D che chiude ogni modulo ----
// Stessa scheda per tutte: la scena in grande, lo stato, cosa si usa, quanto del modulo e' fatto, un solo pulsante.
// Il binario fase/neutro del modulo piega e finisce qui (capolinea).
const GO = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const terminusHTML = () => '<div class="terminus" aria-hidden="true"><span class="flag">Capolinea del modulo</span></div>';

// Disegni tecnici per le milestone non ancora costruite: tratteggiati, su carta millimetrata.
const BLUEPRINT = {
  plc: '<path d="M180 190 L470 120 L640 160 L350 230 Z"/><path d="M180 190 L180 210 L350 250 L350 230"/><path d="M350 250 L640 180 L640 160"/><path d="M240 175 L240 120 L270 113 L270 168"/><rect x="540" y="70" width="60" height="70" rx="4"/><path d="M552 88h36M552 104h36M552 120h20"/><circle cx="300" cy="150" r="10"/><path d="M300 140 L300 120"/>',
  casa: '<path d="M200 200 L400 130 L600 200 L400 270 Z"/><path d="M200 200 L200 230 L400 300 L400 270"/><path d="M400 300 L600 230 L600 200"/><path d="M200 200 L400 90 L600 200"/><rect x="380" y="215" width="40" height="55" rx="3"/><path d="M640 120 L700 100 L700 150 L640 170 Z"/><path d="M650 128 L690 114M650 146 L690 132"/>',
  fabbrica: '<path d="M140 210 L330 140 L520 210 L330 280 Z"/><path d="M140 210 L140 240 L330 310 L330 280"/><path d="M330 310 L520 240 L520 210"/><path d="M520 180 L660 130 L660 200 L520 250"/><path d="M560 150 L560 110 L590 100 L590 140"/><rect x="190" y="150" width="50" height="30" rx="3"/><path d="M200 160h30M200 170h20"/>',
};
function blueprintHTML(kind) {
  const label = { plc: ['PLC', 'FOTOCELLULA', 'NASTRO'], casa: ['TETTO', 'CASA', 'COLONNINA'], fabbrica: ['LINEA', 'QUADRO', 'PANNELLO'] }[kind] || ['', '', ''];
  return `<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g fill="none" stroke="#8CC3F2" stroke-width="2" stroke-dasharray="7 6" stroke-linejoin="round" opacity=".85">${BLUEPRINT[kind] || BLUEPRINT.plc}</g><g fill="#8CC3F2" font-family="IBM Plex Mono,monospace" font-size="13" letter-spacing="1.5"><text x="520" y="60">${label[0]}</text><text x="150" y="105">${label[1]}</text><text x="410" y="318">${label[2]}</text></g></svg>`;
}

function milestoneCard(o) {
  // o: { id, kick, name, text, src, alt, art, st, extra, side }
  const soon = o.st === 'soon';
  const stName = soon ? 'In arrivo' : STATUS_NAMES[o.st];
  const scene = soon ? blueprintHTML(o.art) : `<img src="${esc(o.src)}" alt="${esc(o.alt || '')}" width="1200" height="600" loading="lazy" decoding="async">`;
  return `<article class="msc${soon ? ' soon' : ''}" id="${esc(o.id)}" data-st="${soon ? 'soon' : o.st.replace(' ', '-')}">
      <div class="msc-scene">${scene}<div class="msc-tags"><span class="msc-st">${stName}</span></div></div>
      <div class="msc-body"><div class="msc-main"><div class="kick">${esc(o.kick)}</div><h3>${esc(o.name)}</h3><p class="msc-txt">${esc(o.text)}</p>${o.extra || ''}</div>
        <div class="msc-side">${o.side || (soon ? '<span class="msc-ready">La scena è in preparazione</span>' : '')}</div></div>
    </article>`;
}
function progressHTML(label, done, total) {
  const w = total ? Math.round((done / total) * 100) : 0;
  return `<span class="msc-ready">${label}: ${done} di ${total}</span><div class="msc-bar" role="img" aria-label="${done} su ${total}"><i style="width:${w}%"></i></div>`;
}
const stars = l => (l.status === 'completato' ? `<div class="starrow" role="img" aria-label="${l.stars} stelle su 3">${STAR.repeat(l.stars)}</div>` : '');

function milestoneHTML(ms, l, prog) {
  if (ms.soon) return terminusHTML() + milestoneCard({ id: 'ms-' + ms.art, kick: ms.kick, name: ms.name, text: ms.text, art: ms.art, st: 'soon' });
  if (!l) return '';
  const st = l.status;
  const label = st === 'completato' ? ms.again : st === 'in corso' ? 'Continua' : ms.cta;
  const tools = ms.tools ? `<ul class="msc-tools" aria-label="Cosa userai">${ms.tools.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '';
  const side = progressHTML('Livelli del modulo', prog.done, prog.total) + stars(l) + `<a class="msc-cta${st === 'completato' ? ' again' : ''}" href="#/livello/${l.id}">${label}${st === 'completato' ? '' : GO}</a>`;
  return terminusHTML() + milestoneCard({ id: 'ms-' + l.id, kick: ms.kick, name: ms.name, text: ms.text, src: ms.src, alt: ms.alt, st, extra: tools, side });
}
// Miniatura accanto al titolo del modulo: il traguardo, visibile prima di scorrere i livelli.
function teaserHTML(ms) {
  if (!ms || ms.soon || !ms.src) return '';
  return `<button class="msteaser" type="button" data-goto="ms-${esc(ms.level)}"><img src="${esc(ms.src)}" alt="" width="56" height="28" loading="lazy" decoding="async"><span><small>Traguardo</small><b>${esc(ms.name)}</b></span></button>`;
}

export function homeHTML(s) {
  const t = continueTarget(s);
  const byId = {};
  s.levels.forEach(l => (byId[l.id] = l));
  const cont = t
    ? `<section class="cont" aria-label="Continua"><div class="kick">${t.status === 'nuovo' ? 'COMINCIA DA QUI' : 'RIPRENDI DA QUI'}</div><h2>${esc(t.title)}</h2><p>${esc(t.blurb)}</p><a class="btn lamp" href="#/livello/${t.id}">${t.status === 'nuovo' ? 'Inizia' : 'Continua'}</a></section>`
    : s.levels.some(l => /^t\d\d-/.test(l.id) && l.status !== 'completato' && l.status !== 'saltato')
      ? `<section class="cont" aria-label="Continua"><div class="kick">PROSSIMO MODULO</div><h2>Il trilocale</h2><p>Tre circuiti da cablare in una casa: quando l’impianto funziona, la luce si accende nella stanza.</p><a class="btn lamp" href="#/modulo/1">Entra nel trilocale</a></section>`
      : `<section class="cont"><div class="kick">COMPLETATO</div><h2>Hai completato i livelli disponibili</h2><p>Altri livelli sono in preparazione.</p></section>`;
  const tri = s.levels.filter(l => /^t\d\d-/.test(l.id));
  const triDone = tri.filter(l => l.stars > 0).length;
  const T = TRILOCALE;
  const roomOn = id => { const l = byId[id]; return !!l && l.stars > 0; };
  const triSt = triDone === 0 ? 'nuovo' : triDone >= tri.length ? 'completato' : 'in corso';
  const rooms = `<ul class="msc-rooms" aria-label="Le stanze">${T.rooms.map(([id, n]) => `<li class="${roomOn(id) ? 'lit' : ''}"><b>${esc(n)}</b><small>${roomOn(id) ? 'Acceso' : 'Da cablare'}</small></li>`).join('')}</ul>`;
  const triSide = progressHTML('Circuiti', triDone, tri.length) + `<a class="msc-cta${triSt === 'completato' ? ' again' : ''}" href="#/modulo/1">${triDone ? T.again : T.cta}${triSt === 'completato' ? '' : GO}</a>`;
  // il trilocale (Modulo 1) e' il capolinea del binario delle Fondamenta
  const trilocale = terminusHTML() + milestoneCard({ id: 'ms-trilocale', kick: T.kick, name: T.name, text: T.text, src: T.src, alt: T.alt, st: triSt, extra: rooms, side: triSide });
  const triTeaser = `<button class="msteaser" type="button" data-goto="ms-trilocale"><img src="${esc(T.src)}" alt="" width="56" height="28" loading="lazy" decoding="async"><span><small>Traguardo</small><b>${esc(T.name)}</b></span></button>`;
  const mods = MODULES.map(m => {
    const have = m.levels.filter(x => typeof x === 'string');
    const done = have.filter(id => byId[id] && (byId[id].status === 'completato' || byId[id].status === 'saltato')).length;
    const ms = m.milestone;
    const items = m.levels.filter(x => !(ms && x === ms.level)).map(x => (typeof x === 'string' ? levelCard(byId[x], s) : soonCard(x))).join('');
    const rail = have.filter(x => !(ms && x === ms.level));
    const railDone = rail.filter(id => byId[id] && (byId[id].status === 'completato' || byId[id].status === 'saltato')).length;
    return `<section class="module" aria-label="${m.tag}, ${m.title}">
        <div class="mhead"><div><div class="kick">${m.tag}</div><h2>${m.title}</h2></div>${m.leadsTo === 'trilocale' ? triTeaser : teaserHTML(ms)}<div class="count">${ms ? railDone + ' di ' + rail.length : done + ' di ' + have.length} completati</div></div>
        <ol class="rail">${items}</ol>${ms ? milestoneHTML(ms, byId[ms.level], { done: railDone, total: rail.length }) : m.leadsTo === 'trilocale' ? trilocale : ''}
      </section>`;
  });
  const upItems = UPCOMING.map(m => ({ n: Number(m.tag.match(/\d+/)[0]), html: `<section class="module upmod" aria-label="${m.tag}, ${esc(m.title)}">
        <div class="mhead"><div><div class="kick">${m.tag}</div><h2>${esc(m.title)}</h2></div><span class="soonl">In arrivo</span></div>
        <p class="upnote">${esc(m.note)}</p>
        <ol class="uplist">${m.levels.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
        ${terminusHTML()}${milestoneCard({ id: 'ms-' + m.project.art, kick: m.project.kick, name: m.project.name, text: m.project.text, art: m.project.art, st: 'soon' })}
      </section>` }));
  // I moduli, il trilocale e quelli in arrivo stanno in un solo elenco, nell'ordine dei numeri dei moduli.
  const num = tag => Number((tag.match(/\d+/) || [0])[0]);
  const listed = MODULES.map((m, i) => ({ n: num(m.tag), html: mods[i] })).concat(upItems);
  const ordered = listed.sort((a, b) => a.n - b.n).map(x => x.html).join('');
  return `<div class="homegrid">
      <div class="homemain">${cont.replace('class="cont"', 'class="cont only-narrow"')}${ordered}${trNoteHTML()}</div>
      <aside class="homeside">${cont}${toolsHTML()}</aside>
    </div>`;
}

function toolsHTML() {
  return `<div class="tools" role="group" aria-label="Strumenti">
      <a class="tool" href="#/quaderno">Quaderno</a>
      <button class="tool" data-open="legenda">Legenda dei simboli</button>
      <button class="tool" data-open="glossario">Glossario</button>
      <button class="tool" data-open="intro">Rivedi l’introduzione</button>
      <button class="tool only-narrow" data-open="informativa">Informativa</button>
      <button class="tool" disabled aria-disabled="true">Area docente <small>in arrivo</small></button>
    </div>`;
}

/* ---------- barra in basso (telefono) ---------- */
export function tabbarHTML(route, hasLast) {
  const item = (href, label, icon, cur, disabled) => disabled
    ? `<span class="tab dis" aria-disabled="true">${icon}${label}</span>`
    : `<a class="tab" href="${href}" ${cur ? 'aria-current="page"' : ''}>${icon}${label}</a>`;
  const map = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><line x1="3" y1="8" x2="21" y2="8" stroke="#8B4A24" stroke-width="3" stroke-linecap="round"/><line x1="3" y1="16" x2="21" y2="16" stroke="#2563A8" stroke-width="3" stroke-linecap="round"/></svg>';
  const lv = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const cl = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/></svg>';
  return item('#/home', 'Mappa', map, route.name === 'home') +
    item('#/livello/' + (hasLast || ''), 'Livello', lv, route.name === 'level', !hasLast) +
    item('#', 'Classifica', cl, false, true);
}

/* ---------- piè di pagina (solo computer) ---------- */
export function footerHTML() {
  const cols = FOOTER.map(col => {
    const items = col.items
      .filter(it => !it.mail || CONTACT_EMAIL)
      .map(it => {
        if (it.soon) return `<span class="fbtn dis" aria-disabled="true">${it.label} <small>in arrivo</small></span>`;
        if (it.mail) {
          const subj = it.mail === 'bug' ? 'Segnalazione problema - Fase e Neutro ' + GAME_VERSION : 'Fase e Neutro';
          return `<a class="fbtn" href="mailto:${esc(CONTACT_EMAIL)}?subject=${encodeURIComponent(subj)}" data-mail="${it.mail}">${it.label}</a>`;
        }
        if (it.id === 'mappa') return `<a class="fbtn" href="#/home">${it.label}</a>`;
        if (it.id === 'quaderno') return `<a class="fbtn" href="#/quaderno">${it.label}</a>`;
        return `<button class="fbtn" data-open="${it.id}">${it.label}</button>`;
      }).join('');
    return items ? `<nav class="fcol" aria-label="${col.title}"><div class="ftitle">${col.title}</div>${items}</nav>` : '';
  }).join('');
  return `<div class="fwrap"><div class="fabout"><div class="ftower">${towerSVG('profilo', { size: 110 })}<div class="wordmark" data-notr>Fase <i>e</i> Neutro</div></div><p>Laboratorio di impianti elettrici per chi parte da zero.</p>${trNoteHTML()}</div><div class="fcols">${cols}</div></div>`;
}

/* ---------- schede informative (finestre) ---------- */
export function modalHTML(kind) {
  let title = '', body = '';
  if (kind === 'legenda') {
    title = 'Legenda dei fili';
    body = `<p>Sul banco ogni filo ha uno di questi aspetti.</p><ul class="legend">${LEGEND.map(x => `<li><svg viewBox="0 0 90 26" aria-hidden="true">${legendSample(x.sample)}</svg><div><b>${x.title}</b><span>${x.text}</span></div></li>`).join('')}</ul>`;
  } else if (kind === 'glossario') {
    title = 'Glossario';
    body = `<dl class="gloss">${GLOSSARY.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`;
  } else if (kind === 'informativa') {
    title = 'Informativa';
    body = INFO_PRIVACY.map(p => `<p>${p}</p>`).join('');
  }
  return `<div class="mcard" role="dialog" aria-modal="true" aria-labelledby="mT"><div class="mtop"><h2 id="mT">${title}</h2><button class="btn" data-close="1">Chiudi</button></div><div class="mbody">${body}</div></div>`;
}
function legendSample(k) {
  const w = (col, extra = '') => `<line x1="8" y1="13" x2="82" y2="13" stroke="${col}" stroke-width="6" stroke-linecap="round" ${extra}/>`;
  if (k === 'fase') return '<line x1="8" y1="13" x2="82" y2="13" stroke="#E9A15F" stroke-opacity=".55" stroke-width="18" stroke-linecap="round"/>' + w('#8B4A24');
  if (k === 'neutro') return '<line x1="8" y1="13" x2="82" y2="13" stroke="#8CC3F2" stroke-opacity=".7" stroke-width="18" stroke-linecap="round"/>' + w('#2563A8');
  if (k === 'corrente') return w('#8B4A24') + '<line x1="8" y1="13" x2="82" y2="13" stroke="#FFE08A" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 10"/>';
  if (k === 'stop') return w('#8B4A24') + '<circle cx="82" cy="13" r="10" fill="none" stroke="#BE2530" stroke-width="3" stroke-dasharray="4 4"/>';
  return w('#9AA1AE');
}

/* ---------- finestra del nome ---------- */
export function nameDialogHTML(profile, first) {
  return `<form class="mcard namecard" id="nameForm" role="dialog" aria-modal="true" aria-labelledby="nT">
      <h2 id="nT">${first ? 'Come ti chiami?' : 'Il tuo nome'}</h2>
      <p>Scrivi il nome di battesimo o un soprannome, non il cognome. Resta salvato in questo browser.</p>
      <label for="nameIn">Nome o soprannome (massimo 20 caratteri)</label>
      <input id="nameIn" name="name" maxlength="20" autocomplete="off" autocapitalize="words" value="${esc(profile.name || '')}">
      <div class="mact"><button class="btn primary" type="submit">Salva</button><button class="btn" type="button" data-skipname="1">${first ? 'Continua senza nome' : 'Annulla'}</button></div>
    </form>`;
}

/* ---------- introduzione ---------- */
export function introHTML(i) {
  const sc = INTRO[i], last = i === INTRO.length - 1;
  return `<div class="introcard" role="dialog" aria-modal="true" aria-label="Introduzione">
      <div class="introart" key="${i}">${artHTML(sc.art)}</div>
      <div class="introbody">
        <div class="kick">PER COMINCIARE · ${i + 1}/${INTRO.length}</div>
        ${sc.text.map(t => `<p class="introtext">${t}</p>`).join('')}
        <div class="dots" aria-hidden="true">${INTRO.map((_, k) => `<i class="${k < i ? 'done' : k === i ? 'now' : ''}"></i>`).join('')}</div>
        <div class="introact"><button class="btn primary" data-intro="next">${last ? 'Comincia' : 'Avanti'}</button>${last ? '' : '<button class="btn" data-intro="skip">Salta</button>'}</div>
      </div>
    </div>`;
}

/* ---------- scheda dell'unità nel livello ---------- */
const optButtons = (opts, chosen, correctId, action, retry = false) =>
  `<div class="opts">${opts.map(o => {
    const cls = chosen ? (o.id === correctId ? 'right' : o.id === chosen.option ? 'wrong' : '') : '';
    return `<button class="opt ${cls}" data-${action}="${o.id}" ${chosen && !(retry && !chosen.correct && o.id !== chosen.option) ? 'disabled' : ''}>${esc(o.text)}</button>`;
  }).join('')}</div>`;

const KIND = { spiegazione: 'Spiegazione', pezzi: 'I pezzi', demo: 'Guarda come si fa', previsione: 'Previsione', sintesi: 'In sintesi' };

/* ---------- lezione: una scheda per pagina ---------- */
// extra: { benchBox, benchInner, roomInner, frame, frames, playing } preparati da app.js
export function lessonHTML(s, extra = {}) {
  const u = s.unit, pg = u.pageData, last = u.page === u.pages - 1;
  let body = '';
  if (pg.type === 'spiegazione') {
    if (pg.room) body += `<div class="vis"><svg viewBox="0 0 400 190" role="img" aria-label="La stanza con la lampada">${extra.roomInner || ''}</svg></div>`;
    if (pg.art) body += `<div class="vis">${artHTML(pg.art)}</div>`;
    body += pg.paras.map(t => `<p>${esc(t)}</p>`).join('');
    if (pg.table) body += `<div class="ltable"><div class="lt head"><span>${esc(pg.table.head[0])}</span><span>${esc(pg.table.head[1])}</span></div>${pg.table.rows.map(r => `<div class="lt"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></div>`).join('')}</div>`;
    if (pg.warn) body += `<div class="lwarn"><b>Attenzione.</b> ${esc(pg.warn)}</div>`;
  } else if (pg.type === 'pezzi') {
    body += `<div class="vis"><svg class="lbench" viewBox="${extra.benchBox}" role="img" aria-label="Il banco con i componenti in evidenza">${extra.benchInner || ''}</svg></div>`;
    body += pg.paras.map(t => `<p>${esc(t)}</p>`).join('');
  } else if (pg.type === 'demo') {
    const f = extra.frames || 1, i = extra.frame || 0;
    body += `<div class="vis"><svg class="lbench" id="demoBench" viewBox="${extra.benchBox}" role="img" aria-label="Dimostrazione del cablaggio">${extra.benchInner || ''}</svg></div>`;
    body += `<div class="capt"><b class="n" id="demoN">${i + 1}</b><span id="demoCap">${esc(extra.caption || '')}</span></div>`;
    body += `<div class="dplayer"><button class="btn pp" data-demo="toggle" aria-label="${extra.playing ? 'Pausa' : 'Riprendi'}">${extra.playing ? 'Pausa' : 'Riprendi'}</button><button class="btn" data-demo="step">Passo successivo</button><button class="btn" data-demo="restart">Rivedi</button><span class="pcount" id="demoCount">${i + 1} / ${f}</span></div>`;
  } else if (pg.type === 'previsione') {
    const a = u.pred;
    body += `<h3 class="q">${esc(pg.question)}</h3>${optButtons(pg.options, a, pg.correct, 'pred')}`;
    body += a ? `<p class="fb ${a.correct ? 'ok' : 'ko'}"><b>${a.correct ? 'Giusto.' : 'Non proprio.'}</b> ${esc(pg.why)}</p>` : '<p class="note">Scegli una risposta per andare avanti.</p>';
  } else if (pg.type === 'sintesi') {
    body += `<ul class="sum">${u.summary.map(t => `<li>${esc(t)}</li>`).join('')}</ul><p class="note">La trovi anche nel Quaderno, dalla mappa.</p>`;
  }
  const blocked = pg.type === 'previsione' && !u.pred;
  return `<div class="lhead"><div class="kick">Lezione · ${u.page + 1} di ${u.pages} · ${KIND[pg.type]}</div><button class="link" data-unit="skip">Salta la lezione</button></div>
    <div class="prog" aria-hidden="true">${Array.from({ length: u.pages }, (_, k) => `<b class="${k <= u.page ? 'on' : ''}"></b>`).join('')}</div>
    <h2 tabindex="-1">${esc(pg.title || '')}</h2>${body}
    <div class="uact">${u.page > 0 ? '<button class="btn" data-unit="back">Indietro</button>' : ''}<button class="btn primary grow" data-unit="next" ${blocked ? 'disabled' : ''}>${last ? 'Ora tocca a te' : 'Avanti'}</button></div>`;
}

/* ---------- sintesi (finestra) ---------- */
export function summaryHTML(s) {
  const L = s.level;
  return `<div class="mcard" role="dialog" aria-modal="true" aria-labelledby="mT"><div class="mtop"><h2 id="mT">Da ricordare</h2><button class="btn" data-close="1">Chiudi</button></div><div class="mbody"><p><b>${esc(L.title)}</b></p><ul class="sum">${s.unit.summary.map(t => `<li>${esc(t)}</li>`).join('')}</ul></div></div>`;
}

/* ---------- compito dell'esercizio ---------- */
export function stepsBarHTML(st) {
  return `<ol class="steps" aria-label="Passi">${st.list.map((x, i) => `<li class="${st.done[i] ? 'done' : i === st.current ? 'cur' : ''}"${i === st.current ? ' aria-current="step"' : ''}>${(m => m ? `<span class="sn">${esc(m[1])}</span><span class="st"> ${esc(m[2])}</span>` : esc(x.short))(String(x.short).match(/^(\d+)\s+(.*)$/))}</li>`).join('')}</ol>`;
}

export function unitHTML(s) {
  const L = s.level, u = L.unit;
  if (s.playMode === 'verifica') {
    return `<div class="kick">Prova di salto</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p><p class="note">Senza suggerimenti e senza soluzione. Se la superi il livello risulta saltato e i punti si contano.</p>`;
  }
  if (!u) return `<div class="kick">Livello</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p>`;
  const ph = s.unit.phase;
  if (ph === 'fault') {
    const f = u.fault, d = s.unit.diag;
    const pv = !!s.unit.prova;     // nella prova non si "esce dalla sfida": si torna alla mappa
    return `<div class="kick">${pv ? 'Prova' : 'Sfida guasto'}</div><h2>${esc(f.diagnosis.question)}</h2><p>${esc(f.say)}</p>
      ${optButtons(f.diagnosis.options, d, f.diagnosis.correct, 'diag', true)}
      ${d ? `<p class="fb ${d.correct ? 'ok' : 'ko'}"><b>${d.correct ? 'Giusto.' : 'Non proprio.'}</b> ${d.correct ? esc(f.diagnosis.why) + ' ' + esc(f.fixSay) : 'Osserva i fili: gli aloni mostrano dove arriva la tensione. Puoi riprovare.'}</p>` : ''}
      <div class="uact">${pv ? '<a class="btn" href="#/home">Torna alla mappa</a>' : '<button class="btn" data-unit="leaveFault">Esci dalla sfida</button>'}</div>`;
  }
  if (s.mode === 'contatore' && ph === 'done') {
    return `<div class="kick">Dal contatore</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p>`;
  }
  if (ph === 'done') {
    return `${s.steps && u.support !== 'obiettivo' ? stepsBarHTML(s.steps) : ''}<h2>Livello completato</h2><p>Puoi rifare l’impianto, rivedere la sintesi o passare al livello successivo.</p>`;
  }
  // cablaggio
  if (s.steps && u.support !== 'obiettivo') {
    const cur = s.steps.current === null ? null : s.steps.list[s.steps.current];
    return `${stepsBarHTML(s.steps)}<h2>${esc(cur ? cur.title : 'Impianto completato')}</h2><p>${esc(cur ? cur.text : 'Tutti i passi sono fatti.')}</p>`;
  }
  return `<div class="kick">Obiettivo</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p>`;
}

export function sideLinksHTML(s) {
  const u = s.unit;
  if (!u || s.playMode === 'verifica') return '';
  return `<button class="link" data-act="summary">Sintesi</button><button class="link" data-unit="lesson">Rivedi la lezione</button>`;
}

/* ---------- quaderno: le sintesi di tutti i livelli ---------- */
export function quadernoHTML(s, levelList) {
  const stars = {};
  s.levels.forEach(l => (stars[l.id] = l));
  const mods = MODULES.map(m => {
    const items = m.levels.filter(x => typeof x === 'string').map(id => levelList.find(l => l.id === id)).filter(l => l && l.unit && l.unit.summary);
    if (!items.length) return '';
    const body = items.map(l => `<article class="qlv"><h3>${esc(l.title)}</h3><ul class="sum">${l.unit.summary.map(t => `<li>${esc(t)}</li>`).join('')}</ul></article>`).join('');
    return `<section class="qmod"><div class="kick">${m.tag}</div><h2>${m.title}</h2>${body}</section>`;
  }).join('');
  const triItems = levelList.filter(l => /^t\d\d-/.test(l.id) && l.unit && l.unit.summary);
  const triHTML = triItems.length ? `<section class="qmod"><div class="kick">MODULO 1</div><h2>Il trilocale</h2>${triItems.map(l => `<article class="qlv"><h3>${esc(l.title)}</h3><ul class="sum">${l.unit.summary.map(t => `<li>${esc(t)}</li>`).join('')}</ul></article>`).join('')}</section>` : '';
  return `<div class="levelbar"><a class="back" href="#/home">&larr; Mappa</a></div><div class="card quaderno"><div class="qhead"><h1>Quaderno</h1><button class="btn" data-act="print">Stampa</button></div><p class="note">Le sintesi dei livelli, da ripassare o stampare. Sono sempre consultabili, anche per i livelli non ancora giocati.</p>${mods}${triHTML}</div>`;
}
