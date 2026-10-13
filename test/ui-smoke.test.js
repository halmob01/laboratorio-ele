// Prova a livello di pagina: si apre index.html (quello costruito) in un browser simulato,
// si naviga come farebbe l'allievo (introduzione, nome, mappa, livelli) e si controlla che la pagina risponda.
// Richiede di aver eseguito prima `npm run build` (lo fa anche `npm run check`).

import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { levels, deriveFull } from '../src/content/index.js';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const lv = id => levels.find(l => l.id === id);

// La pagina ha un timer (il contatore): le finestre vanno chiuse o il processo non termina.
const windows = [];
after(() => windows.forEach(w => w.close()));

// opts.seen = true: introduzione e nome gia' visti. opts.storage = { chiave: valore } da preimpostare.
function openPage(opts = {}) {
  const errors = [];
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'https://example.test/' + (opts.hash || ''),
    beforeParse(w) {
      w.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      w.scrollTo = () => {};
      w.Element.prototype.scrollIntoView = () => {};
      w.addEventListener('error', e => errors.push(e.error || e.message));
      if (opts.seen) w.localStorage.setItem('fase-e-neutro-profilo', JSON.stringify({ name: opts.name || '', introSeen: true, nameAsked: true }));
      Object.entries(opts.storage || {}).forEach(([k, v]) => w.localStorage.setItem(k, JSON.stringify(v)));
    },
  });
  windows.push(dom.window);
  return { w: dom.window, d: dom.window.document, errors };
}

const fire = (w, el, type) => el.dispatchEvent(new w.Event(type, { bubbles: true, cancelable: true }));
const q = (d, s) => d.querySelector(s);
const qa = (d, s) => [...d.querySelectorAll(s)];
const term = (d, tid) => q(d, `[data-term="${tid}"]`);
const click = (w, el) => fire(w, el, 'click');

// Cambia indirizzo come farebbe un collegamento (l'evento asincrono di jsdom viene anticipato).
function go(w, hash) {
  w.location.hash = hash;
  w.dispatchEvent(new w.Event('hashchange'));
}

// Collega due morsetti come farebbe l'allievo: sceglie il colore, tocca il primo, poi il secondo.
function wire(w, d, a, b, color) {
  click(w, q(d, `[data-col="${color}"]`));
  fire(w, term(d, a), 'pointerdown');
  fire(w, term(d, b), 'pointerdown');
}
const solve = (w, d, level) => level.solution.forEach(([a, b, c]) => wire(w, d, a, b, c));
const profile = w => JSON.parse(w.localStorage.getItem('fase-e-neutro-profilo') || '{}');
const saved = w => JSON.parse(w.localStorage.getItem('fase-e-neutro-1') || '{}');

// Percorre tutte le pagine della lezione rispondendo alla previsione con `ans`.
const lessonAll = (w, d, ans = 'b') => {
  for (let i = 0; i < 12; i++) {
    if (q(d, '#lesson').hidden) break;
    const p = q(d, `[data-pred="${ans}"]`);
    if (p && !p.disabled) click(w, p);
    const b = q(d, '[data-unit="next"]');
    if (!b) break;
    click(w, b);
  }
};

// Porta c01 fino al cablaggio (lezione, previsione giusta).
function toBuild(w, d) {
  go(w, '#/livello/c01-circuito-chiuso');
  lessonAll(w, d);
}

/* ---------- primo accesso ---------- */
test('al primo accesso c\'e\' l\'introduzione, poi il nome, poi la mappa', () => {
  const { w, d, errors } = openPage();
  assert.ok(q(d, '#overlay').hidden);                    // la mappa si apre senza introduzione
  go(w, '#/livello/c01-circuito-chiuso');                // al primo tentativo di giocare
  assert.ok(!q(d, '#overlay').hidden);
  assert.match(q(d, '#overlay').textContent, /PER COMINCIARE · 1\/8/);
  assert.doesNotMatch(d.body.textContent, /prologo/i);
  for (let i = 0; i < 7; i++) click(w, q(d, '[data-intro="next"]'));
  assert.match(q(d, '#overlay').textContent, /8\/8/);
  assert.equal(q(d, '[data-intro="skip"]'), null);        // all'ultima scena non c'e' "Salta"
  click(w, q(d, '[data-intro="next"]'));
  assert.match(q(d, '#overlay').textContent, /Come ti chiami/);
  assert.equal(profile(w).introSeen, true);
  q(d, '#nameIn').value = '  Marco   ';
  fire(w, q(d, '#nameForm'), 'submit');
  assert.ok(q(d, '#overlay').hidden);
  assert.equal(profile(w).name, 'Marco');
  assert.match(q(d, '#bPlayer').textContent, /Marco/);
  assert.deepEqual(errors, []);
});

test('l\'introduzione si salta e il nome si puo\' non dare', () => {
  const { w, d } = openPage();
  go(w, '#/livello/c01-circuito-chiuso');
  click(w, q(d, '[data-intro="skip"]'));
  assert.match(q(d, '#overlay').textContent, /Come ti chiami/);
  click(w, q(d, '[data-skipname]'));
  assert.ok(q(d, '#overlay').hidden);
  assert.match(q(d, '#bPlayer').textContent, /Giocatore/);
  assert.equal(profile(w).nameAsked, true);
});

test('con l\'introduzione gia\' vista non riappare; si puo\' rivedere dalla mappa', () => {
  const { w, d } = openPage({ seen: true });
  assert.ok(q(d, '#overlay').hidden);
  click(w, q(d, '[data-open="intro"]'));
  assert.ok(!q(d, '#overlay').hidden);
  fire(w, d, 'keydown'); // nessun effetto
  d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.ok(q(d, '#overlay').hidden);
});

/* ---------- mappa ---------- */
test('la mappa mostra i livelli, il livello in arrivo e Continua', () => {
  const { d, errors } = openPage({ seen: true });
  assert.ok(!q(d, '#screen-home').hidden);
  assert.ok(q(d, '#screen-level').hidden);
  assert.equal(qa(d, '.rail .lvcard').length, 6);
  assert.equal(qa(d, '.rail .lvcard.soon').length, 1);
  assert.match(q(d, '.homemain .cont').textContent, /Il circuito chiuso/);
  assert.match(q(d, '.rail').textContent, /Due lampade/);
  assert.equal(qa(d, '.rail .lvcard a[href*="verifica"]').length, 5);   // "Già lo so" su ogni livello nuovo
  assert.match(q(d, '.homeside').textContent, /Area docente/);
  assert.equal(q(d, '.homeside button[disabled]').textContent.includes('Area docente'), true);
  assert.deepEqual(errors, []);
});

test('il piè di pagina ha le voci come pulsanti e Segnala/Scrivici solo con un indirizzo configurato', () => {
  const { w, d } = openPage({ seen: true });
  const labels = qa(d, '#footer .fbtn').map(b => b.textContent.trim());
  assert.ok(labels.includes('Legenda dei simboli') && labels.includes('Glossario') && labels.includes('Informativa'));
  assert.ok(!labels.some(l => /Segnala|Scrivici/.test(l)));        // indirizzo non ancora impostato
  assert.ok(!labels.some(l => /docente/i.test(l)));
  click(w, q(d, '#footer [data-open="glossario"]'));
  assert.match(q(d, '#overlay').textContent, /Circuito chiuso/);
  click(w, q(d, '#overlay [data-close]'));
  assert.ok(q(d, '#overlay').hidden);
  click(w, q(d, '#footer [data-open="informativa"]'));
  assert.match(q(d, '#overlay').textContent, /non viene inviato nulla/);
});

/* ---------- c01 ---------- */
test('c01: lezione, previsione, esempio guidato, corrente visibile e completamento', () => {
  const { w, d, errors } = openPage({ seen: true });
  go(w, '#/livello/c01-circuito-chiuso');
  assert.ok(q(d, '#screen-home').hidden);
  assert.ok(!q(d, '#lesson').hidden);
  assert.ok(q(d, '#work').hidden);
  assert.match(q(d, '#screen-level').className, /phase-learn/);
  assert.match(q(d, '#lesson').textContent, /1 di 7/);
  click(w, q(d, '[data-unit="next"]'));
  assert.match(q(d, '#lesson').textContent, /2 di 7/);
  click(w, q(d, '[data-unit="back"]'));
  for (let i = 0; i < 5; i++) click(w, q(d, '[data-unit="next"]'));
  assert.match(q(d, '#lesson').textContent, /Previsione/);
  assert.ok(q(d, '[data-unit="next"]').disabled);          // senza risposta non si va avanti
  click(w, q(d, '[data-pred="a"]'));
  assert.match(q(d, '#lesson').textContent, /Non proprio/);
  click(w, q(d, '[data-unit="next"]'));
  assert.match(q(d, '#lesson').textContent, /Da ricordare/);
  click(w, q(d, '[data-unit="next"]'));
  assert.ok(q(d, '#lesson').hidden);
  assert.ok(!q(d, '#work').hidden);
  assert.match(q(d, '#unit').textContent, /Collega la fase alla lampada/);
  assert.equal(qa(d, '#unit .steps li').length, 4);
  assert.equal(qa(d, '#bench .ghost.guide').length, 1);

  wire(w, d, 'Q.F', 'L.A', 'marrone');
  assert.equal(qa(d, '#bench .ghost.guide').length, 1);       // ora il tratteggio indica il neutro
  assert.match(q(d, '#unit').textContent, /Collega il neutro all’altro morsetto/);
  click(w, q(d, '[data-q]'));
  assert.match(q(d, '#status').textContent, /Quadro acceso/);
  assert.match(q(d, '#status .msg').textContent, /La tensione arriva fino a Lampada · A e lì si ferma/);
  assert.equal(qa(d, '#bench .stop').length, 1);
  assert.equal(qa(d, '#bench .halo-w.f').length, 1);
  assert.equal(qa(d, '#bench .flow.cur').length, 0);      // tensione senza corrente

  wire(w, d, 'Q.N', 'L.B', 'blu');                        // modificare i fili spegne il quadro
  assert.equal(qa(d, '#bench .ghost.guide').length, 0);
  assert.match(q(d, '#unit').textContent, /Dai corrente/);
  click(w, q(d, '[data-q]'));
  assert.match(q(d, '#status').textContent, /Luce accesa/);
  assert.equal(qa(d, '#bench .stop').length, 0);
  assert.equal(qa(d, '#bench .flow.cur').length, 2);
  assert.equal(qa(d, '#flowLegend span').length, 4);

  click(w, q(d, '#bCheck'));
  assert.match(q(d, '#result h3').textContent, /Impianto funzionante/);
  assert.match(q(d, '#unit').textContent, /Livello completato/);
  assert.match(q(d, '#result').textContent, /Punti di questo livello: 110 XP/);   // 100 + 10 senza suggerimenti, previsione sbagliata
  assert.deepEqual(errors, []);
});

test('c01: sfida guasto dalla pagina', () => {
  const { w, d } = openPage({ seen: true });
  toBuild(w, d);
  solve(w, d, lv('c01-circuito-chiuso'));
  click(w, q(d, '#bCheck'));
  click(w, q(d, '[data-act="fault"]'));
  assert.match(q(d, '#unit').textContent, /Sfida guasto/);
  assert.equal(qa(d, '#bench [data-wire]').length, 2);
  click(w, q(d, '[data-q]'));
  assert.equal(qa(d, '#bench .stop').length, 2);
  click(w, q(d, '[data-diag="b"]'));
  assert.match(q(d, '#unit').textContent, /Giusto/);
  click(w, qa(d, '#bench [data-wire]')[1]);              // si toglie il filo sul morsetto B (il secondo)
  wire(w, d, 'Q.N', 'L.B', 'blu');
  click(w, q(d, '#bCheck'));
  assert.match(q(d, '#result h3').textContent, /Impianto funzionante/);
  assert.match(q(d, '#result').textContent, /140 XP/);       // 110 + previsione giusta 10 + guasto 20 = 140
});

/* ---------- prova di salto ---------- */
test('«Già lo so»: prova di salto senza aiuti, poi il livello risulta saltato in mappa', () => {
  const { w, d, errors } = openPage({ seen: true });
  go(w, '#/livello/c01-circuito-chiuso/verifica');
  assert.match(q(d, '#unit').textContent, /Prova di salto/);
  assert.match(q(d, '#lvTag').textContent, /prova di salto/);
  assert.ok(q(d, '#bHint').hidden && q(d, '#bSol').hidden);
  assert.ok(q(d, '#modeBar').hidden);
  assert.equal(qa(d, '#bench .ghost').length, 0);
  solve(w, d, lv('c01-circuito-chiuso'));
  click(w, q(d, '[data-q]'));
  assert.equal(qa(d, '#bench .flow.cur').length, 0);           // niente corrente visibile in verifica
  click(w, q(d, '#bCheck'));
  assert.match(q(d, '#result h3').textContent, /Impianto funzionante/);
  go(w, '#/home');
  const card = q(d, '.rail .lvcard');
  assert.equal(card.dataset.status, 'saltato');
  assert.match(card.textContent, /Saltato/);
  assert.match(q(d, '.homemain .cont').textContent, /La presa/);   // Continua passa al prossimo livello
  assert.match(q(d, '#bPlayer').textContent, /110 XP/);
  assert.deepEqual(errors, []);
});

/* ---------- livelli senza unita': come prima ---------- */
test('si superano tutti i livelli cablando la soluzione (quadro e contatore)', () => {
  for (const mode of ['quadro', 'contatore']) {
    const { w, d, errors } = openPage({ seen: true });
    levels.forEach(base => {
      go(w, '#/livello/' + base.id);
      if (base.unit) lessonAll(w, d);
      if (mode === 'contatore') click(w, q(d, '[data-mode="contatore"]'));
      const lvl = mode === 'contatore' ? deriveFull(base) : base;
      assert.match(q(d, '#lvTag').textContent, new RegExp(base.name));
      solve(w, d, lvl);
      assert.equal(qa(d, '#bench [data-wire]').length, lvl.solution.length, base.id + ' ' + mode);
      click(w, q(d, '#bCheck'));
      assert.match(q(d, '#result h3').textContent, /Impianto funzionante/, base.id + ' ' + mode);
      assert.equal(qa(d, '#result .mark.ok').length, 3);
      click(w, q(d, '[data-mode="quadro"]'));
    });
    assert.deepEqual(errors, [], mode);
  }
});

test('c03: si da corrente, la luce si accende e un comando la spegne', () => {
  const { w, d } = openPage({ seen: true });
  go(w, '#/livello/c03-interrotto');
  click(w, q(d, '[data-unit="skip"]'));
  solve(w, d, lv('c03-interrotto'));
  click(w, q(d, '[data-q]'));
  assert.match(q(d, '#status').textContent, /Quadro acceso/);
  assert.match(q(d, '#status').textContent, /Luce spenta/);
  assert.match(q(d, '#status .msg').textContent, /La tensione arriva fino a Interruttore · 1 e lì si ferma/);
  click(w, q(d, '#bench [data-ctl="S"]'));
  assert.match(q(d, '#status').textContent, /Luce accesa/);
  assert.equal(q(d, '#glow').getAttribute('opacity'), '1');
  click(w, q(d, '#bench [data-ctl="S"]'));
  assert.match(q(d, '#status').textContent, /Luce spenta/);
});

test('un cortocircuito fa scattare il quadro e toccare i fili con corrente lo spegne', () => {
  const { w, d } = openPage({ seen: true });
  go(w, '#/livello/c03-interrotto');
  click(w, q(d, '[data-unit="skip"]'));
  wire(w, d, 'Q.F', 'Q.N', 'marrone');
  click(w, q(d, '[data-q]'));
  assert.match(q(d, '#status').textContent, /Quadro scattato/);
  assert.match(q(d, '#status .msg').textContent, /cortocircuito/);
  click(w, q(d, '#bClear'));
  solve(w, d, lv('c03-interrotto'));
  click(w, q(d, '[data-q]'));
  assert.match(q(d, '#status').textContent, /Quadro acceso/);
  click(w, q(d, '#bUndo'));
  assert.match(q(d, '#status').textContent, /Quadro spento/);
  assert.match(q(d, '#status .msg').textContent, /Per sicurezza/);
});

test('suggerimenti, soluzione e verifica di un cablaggio sbagliato (c02)', () => {
  const { w, d } = openPage({ seen: true });
  go(w, '#/livello/c02-presa');
  click(w, q(d, '[data-unit="skip"]'));
  click(w, q(d, '#bHint'));
  assert.match(q(d, '#info').textContent, /Suggerimento 1 di 3/);
  click(w, q(d, '#bHint'));
  assert.match(q(d, '#info').textContent, /Suggerimento 2 di 3/);
  click(w, q(d, '#bSol'));
  assert.equal(qa(d, '#bench .ghost').length, 4);   // 3 della soluzione + il tratteggio guidato
  click(w, q(d, '#bSol'));
  assert.equal(qa(d, '#bench .ghost').length, 1);
  wire(w, d, 'Q.F', 'P.L', 'blu');
  wire(w, d, 'Q.N', 'P.N', 'blu');
  wire(w, d, 'Q.PE', 'P.PE', 'gv');
  click(w, q(d, '#bCheck'));
  assert.match(q(d, '#result').textContent, /deve essere marrone, nero o grigio/);
  assert.equal(qa(d, '#result .mark.ok').length, 2);
});

test('c05: la corrente si mostra a richiesta', () => {
  const { w, d } = openPage({ seen: true });
  go(w, '#/livello/c05-deviato');
  click(w, q(d, '[data-unit="skip"]'));
  assert.ok(!q(d, '#bFlow').hidden);
  solve(w, d, lv('c05-deviato'));
  click(w, q(d, '[data-q]'));
  assert.equal(qa(d, '#bench .halo-w').length, 0);
  click(w, q(d, '#bFlow'));
  assert.ok(qa(d, '#bench .halo-w').length > 0);
  assert.ok(qa(d, '#bench .flow.cur').length > 0);
});

/* ---------- salvataggi ---------- */
test('i progressi si salvano e tornano alla riapertura', () => {
  const { w, d } = openPage({ seen: true });
  go(w, '#/livello/c02-presa');
  click(w, q(d, '[data-unit="skip"]'));
  solve(w, d, lv('c02-presa'));
  click(w, q(d, '#bCheck'));
  assert.equal(saved(w).v, 2);
  assert.equal(saved(w).stars['c02-presa'], 3);
  go(w, '#/home');
  assert.equal(qa(d, '.rail .lvcard')[1].dataset.status, 'completato');
  assert.match(qa(d, '.rail .lvcard')[1].textContent, /Rigioca/);
});

test('i salvataggi della versione precedente vengono migrati', () => {
  const { w, d } = openPage({ seen: true, storage: { 'lab-elettrico-1': { '2': 3, '3': 1 } } });
  const cards = qa(d, '.rail .lvcard');
  assert.equal(cards[2].dataset.status, 'completato');   // c03, ex livello 2
  assert.equal(cards[4].dataset.status, 'in corso');     // c05, ex livello 3 con una stella
  assert.equal(cards[0].dataset.status, 'nuovo');
});

test('un indirizzo sconosciuto porta alla mappa e il tasto Indietro funziona', () => {
  const { w, d } = openPage({ seen: true, hash: '#/livello/inesistente' });
  assert.ok(!q(d, '#screen-home').hidden);
  go(w, '#/livello/c03-interrotto');
  click(w, q(d, '[data-unit="skip"]'));
  assert.ok(q(d, '#screen-home').hidden);
  go(w, '#/home');
  assert.ok(!q(d, '#screen-home').hidden);
  const direct = openPage({ seen: true, hash: '#/livello/c06-invertito' });
  assert.match(q(direct.d, '#lvTag').textContent, /Invertito/);
});

/* ---------- lezione: salto, dimostrazione, sintesi ---------- */
test('lezione: "Salta la lezione" porta al cablaggio da qualsiasi pagina', () => {
  const { w, d, errors } = openPage({ seen: true });
  go(w, '#/livello/c01-circuito-chiuso');
  click(w, q(d, '[data-unit="next"]'));
  click(w, q(d, '[data-unit="skip"]'));
  assert.ok(q(d, '#lesson').hidden);
  assert.match(q(d, '#unit').textContent, /Collega la fase alla lampada/);
  click(w, q(d, '[data-unit="lesson"]'));                  // "Rivedi la lezione" riparte dalla prima pagina
  assert.match(q(d, '#lesson').textContent, /1 di 7/);
  assert.deepEqual(errors, []);
});

test('lezione: la dimostrazione avanza a passi e mostra la luce accesa', () => {
  const { w, d, errors } = openPage({ seen: true });
  go(w, '#/livello/c01-circuito-chiuso');
  for (let i = 0; i < 4; i++) click(w, q(d, '[data-unit="next"]'));
  assert.match(q(d, '#lesson').textContent, /Guarda come si fa/);
  click(w, q(d, '[data-demo="toggle"]'));                   // pausa (la dimostrazione parte da sola)
  click(w, q(d, '[data-demo="restart"]'));
  click(w, q(d, '[data-demo="toggle"]'));
  click(w, q(d, '[data-demo="step"]'));
  assert.match(q(d, '#demoCap').textContent, /Filo blu/);
  click(w, q(d, '[data-demo="step"]'));
  assert.match(q(d, '#demoCap').textContent, /Levetta su/);
  assert.equal(qa(d, '#demoBench .bulb.on').length, 1);
  assert.deepEqual(errors, []);
});

test('sintesi: si apre dall\'esercizio e dopo la verifica', () => {
  const { w, d } = openPage({ seen: true });
  toBuild(w, d);
  click(w, q(d, '#sideLinks [data-act="summary"]'));
  assert.match(q(d, '#overlay').textContent, /Mai la fase direttamente sul neutro/);
  click(w, q(d, '#overlay [data-close]'));
  solve(w, d, lv('c01-circuito-chiuso'));
  click(w, q(d, '#bCheck'));
  assert.ok(q(d, '#result [data-act="summary"]'));
  assert.ok(q(d, '#result [data-act="full"]'));
  assert.ok(q(d, '#work').className.includes('passed'));
});

test('quaderno: il collegamento dalla mappa porta alle sintesi e il livello c01 e\' presente', () => {
  const { w, d, errors } = openPage({ seen: true });
  const link = q(d, '#screen-home a[href="#/quaderno"]');
  assert.ok(link, 'collegamento nella mappa');
  go(w, '#/quaderno');
  assert.equal(q(d, '#screen-quaderno').hidden, false);
  assert.equal(q(d, '#screen-home').hidden, true);
  const txt = q(d, '#screen-quaderno').textContent;
  assert.match(txt, new RegExp(lv('c01-circuito-chiuso').title));
  assert.match(txt, /Stampa/);
  assert.ok(qa(d, '#screen-quaderno li').length >= 5);
  assert.deepEqual(errors, []);
  go(w, '#/home');
  assert.equal(q(d, '#screen-quaderno').hidden, true);
});
