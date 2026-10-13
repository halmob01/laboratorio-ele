// Schermate della pagina oltre al banco: homepage, introduzione, scheda dell'unità, piè di pagina, schede informative.
// Funzioni pure: ricevono l'istantanea della sessione (e un po' di stato della vista) e restituiscono HTML.

import { MODULES, UPCOMING, INTRO, GLOSSARY, LEGEND, INFO_PRIVACY, FOOTER } from '../content/home.js';
import { RANK_NAMES, STATUS_NAMES } from '../content/it.js';
import { CONTACT_EMAIL, GAME_VERSION } from '../config.js';
import { artHTML } from './art.js';

export const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const STAR = '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.9 7.4.7-5.6 4.9 1.7 7.3L12 17.9 5.5 21.8l1.7-7.3L1.6 9.6 9 8.9z" fill="#F5B800" stroke="#1B2230" stroke-width="1.5" stroke-linejoin="round"/></svg>';

/* ---------- barra in alto ---------- */
export function appbarHTML(s, profile) {
  const name = profile.name ? esc(profile.name) : 'Giocatore';
  const rank = RANK_NAMES[s.player.rank.id];
  return `<a class="brand" href="#/home" aria-label="Fase e Neutro, vai alla mappa">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><circle cx="17" cy="17" r="17" fill="#1E2635"/><line x1="7" y1="12" x2="27" y2="12" stroke="#E9A15F" stroke-width="4" stroke-linecap="round"/><line x1="7" y1="22" x2="27" y2="22" stroke="#8CC3F2" stroke-width="4" stroke-linecap="round"/></svg>
      <span class="wordmark">Fase <i>e</i> Neutro</span>
    </a>
    <button class="player" id="bPlayer" aria-label="Giocatore ${name}, grado ${rank}, ${s.player.xp} XP. Cambia nome"><span class="pname">${name}</span><span class="prank">${rank}</span><span class="pxp">${s.player.xp} XP</span></button>`;
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
  return (last && open(last) && last) || s.levels.find(open) || null;
}

export function homeHTML(s) {
  const t = continueTarget(s);
  const byId = {};
  s.levels.forEach(l => (byId[l.id] = l));
  const cont = t
    ? `<section class="cont" aria-label="Continua"><div class="kick">${t.status === 'nuovo' ? 'COMINCIA DA QUI' : 'RIPRENDI DA QUI'}</div><h2>${esc(t.title)}</h2><p>${esc(t.blurb)}</p><a class="btn lamp" href="#/livello/${t.id}">${t.status === 'nuovo' ? 'Inizia' : 'Continua'}</a></section>`
    : `<section class="cont"><div class="kick">COMPLETATO</div><h2>Hai completato i livelli disponibili</h2><p>Altri livelli sono in preparazione.</p></section>`;
  const mods = MODULES.map(m => {
    const have = m.levels.filter(x => typeof x === 'string');
    const done = have.filter(id => byId[id] && (byId[id].status === 'completato' || byId[id].status === 'saltato')).length;
    const items = m.levels.map(x => (typeof x === 'string' ? levelCard(byId[x], s) : soonCard(x))).join('');
    return `<section class="module" aria-label="${m.tag}, ${m.title}">
        <div class="mhead"><div><div class="kick">${m.tag}</div><h2>${m.title}</h2></div><div class="count">${done} di ${have.length} completati</div></div>
        <ol class="rail">${items}</ol>
      </section>`;
  }).join('');
  const up = UPCOMING.map(m => `<div class="upc"><div class="uphead"><span class="kick">${m.tag}</span><span class="soonl">In arrivo</span></div><h3>${m.title}</h3><p>${m.note}</p></div>`).join('');
  return `<div class="homegrid">
      <div class="homemain">${cont.replace('class="cont"', 'class="cont only-narrow"')}${mods}<div class="upcoming">${up}</div></div>
      <aside class="homeside">${cont}${toolsHTML()}</aside>
    </div>`;
}

function toolsHTML() {
  return `<div class="tools" role="group" aria-label="Strumenti">
      <button class="tool" data-open="legenda">Legenda dei simboli</button>
      <button class="tool" data-open="glossario">Glossario</button>
      <button class="tool" data-open="intro">Rivedi l’introduzione</button>
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
        return `<button class="fbtn" data-open="${it.id}">${it.label}</button>`;
      }).join('');
    return items ? `<nav class="fcol" aria-label="${col.title}"><div class="ftitle">${col.title.toUpperCase()}</div>${items}</nav>` : '';
  }).join('');
  return `<div class="fwrap"><div class="fabout"><div class="wordmark">Fase <i>e</i> Neutro</div><p>Laboratorio di impianti elettrici per chi parte da zero.</p></div><div class="fcols">${cols}</div></div>`;
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
        <div class="introact"><button class="btn primary" data-intro="next">${last ? 'Vai alla mappa' : 'Avanti'}</button>${last ? '' : '<button class="btn" data-intro="skip">Salta</button>'}</div>
      </div>
    </div>`;
}

/* ---------- scheda dell'unità nel livello ---------- */
const optButtons = (opts, chosen, correctId, action) =>
  `<div class="opts">${opts.map(o => {
    const cls = chosen ? (o.id === correctId ? 'right' : o.id === chosen.option ? 'wrong' : '') : '';
    return `<button class="opt ${cls}" data-${action}="${o.id}" ${chosen ? 'disabled' : ''}>${esc(o.text)}</button>`;
  }).join('')}</div>`;

export function unitHTML(s) {
  const L = s.level, u = L.unit, code = L.code;
  if (s.playMode === 'verifica') {
    return `<div class="kick">PROVA DI SALTO</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p><p class="note">Senza suggerimenti e senza soluzione. Se la superi il livello risulta saltato e i punti si contano.</p>`;
  }
  if (!u) return `<div class="kick">LIVELLO</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p>`;
  const ph = s.unit.phase;
  if (ph === 'lesson') {
    const pg = u.lesson.pages[s.unit.page], last = s.unit.page === s.unit.pages - 1;
    return `<div class="kick">LEZIONE · ${s.unit.page + 1} di ${s.unit.pages}</div><h2>${esc(pg.title)}</h2>
      <div class="lessonart">${artHTML(pg.art)}</div>
      ${pg.paras.map(p => `<p>${esc(p)}</p>`).join('')}
      <div class="uact">${s.unit.page > 0 ? '<button class="btn" data-unit="back">Indietro</button>' : ''}<button class="btn primary" data-unit="next">${last ? 'Alla previsione' : 'Avanti'}</button></div>`;
  }
  if (ph === 'prediction') {
    const p = u.prediction, a = s.unit.pred;
    return `<div class="kick">PREVISIONE</div><h2>${esc(p.question)}</h2>
      ${optButtons(p.options, a, p.correct, 'pred')}
      ${a ? `<p class="fb ${a.correct ? 'ok' : 'ko'}"><b>${a.correct ? 'Giusto.' : 'Non proprio.'}</b> ${esc(p.why)}</p><div class="uact"><button class="btn primary" data-unit="next">Provalo sul banco</button></div>` : '<p class="note">Scegli una risposta prima di provare.</p>'}`;
  }
  if (ph === 'fault') {
    const f = u.fault, d = s.unit.diag;
    return `<div class="kick">SFIDA GUASTO</div><h2>${esc(f.diagnosis.question)}</h2><p>${esc(f.say)}</p>
      ${optButtons(f.diagnosis.options, d, f.diagnosis.correct, 'diag')}
      ${d ? `<p class="fb ${d.correct ? 'ok' : 'ko'}"><b>${d.correct ? 'Giusto.' : 'Non proprio.'}</b> ${d.correct ? esc(f.diagnosis.why) + ' ' + esc(f.fixSay) : 'Osserva i fili: gli aloni mostrano dove arriva la tensione.'}</p>` : ''}
      <div class="uact"><button class="btn" data-unit="leaveFault">Esci dalla sfida</button></div>`;
  }
  if (ph === 'done') {
    const me = s.levels[s.levelIndex];
    return `<div class="kick">COMPLETATO</div><h2>Livello superato</h2><p>${esc(L.title)}: ${me.xp} XP.</p>
      <div class="uact">${s.unit.hasFault && !s.unit.faultSolved ? '<button class="btn primary" data-unit="startFault">Sfida guasto</button>' : ''}<a class="btn ${s.unit.hasFault && !s.unit.faultSolved ? '' : 'primary'}" href="#/home">Torna alla mappa</a><button class="btn" data-unit="lesson">Rivedi la lezione</button></div>`;
  }
  // cablaggio
  let guide = '';
  if (s.guide) guide = `<div class="guide"><b>Esempio guidato</b><p>${esc(s.guide.say)}</p></div>`;
  else if (u.afterGuide && !(s.result && s.result.pass)) guide = `<p class="note">${esc(u.afterGuide)}</p>`;
  return `<div class="kick">CABLAGGIO</div><h2>${esc(L.title)}</h2><p>${esc(L.goal)}</p>${guide}<div class="uact"><button class="btn" data-unit="lesson">Rivedi la lezione</button></div>`;
}
