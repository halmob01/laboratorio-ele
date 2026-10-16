# Piano operativo: la prova della casa intelligente in due sessioni

Scritto il 16 ottobre 2026. Due sessioni Claude lavorano **insieme** sulla prova del Modulo 5 senza scontrarsi:
ognuna ha il suo ramo, i suoi file e i suoi numeri. Cosa si costruisce: `docs/PROGETTO-CASA.md` (leggerlo tutto).

Per avviarle, scrivere in due chat diverse:
- **Sessione A**: «Fai la sessione A della casa: segui `docs/PIANO-CASA.md`.»
- **Sessione B**: «Fai la sessione B della casa: segui `docs/PIANO-CASA.md`.»

Ogni fase finisce con un commit caricato e una riga in `docs/STATO-AVANZAMENTO.md`: ci si puo' fermare alla fine di
qualunque fase (anche per i token finiti) e un'altra sessione riprende dalla fase dopo leggendo questo file e lo STATO.

## Per tutte e due, prima di cominciare

1. Leggere `CLAUDE.md`, `docs/PROCEDURA-UNIONE.md`, `docs/PROGETTO-CASA.md`, e per la sessione B `docs/SPEC-SCENE-3D.md`.
2. Creare il proprio ramo da `main` aggiornato e caricarlo subito (cosi' l'altra sessione lo vede):
   `git fetch origin && git checkout -b <ramo> origin/main && git push -u origin <ramo>`.
3. Se il ramo esiste gia' su `origin` (un'altra sessione ha cominciato prima di te), non ricrearlo: `git checkout <ramo>`,
   leggere le righe dello STATO sulla casa e riprendere dalla prima fase non fatta.
4. Non usare `pkill -f` (uccide la shell). Messaggi di commit in italiano.

## Chi tocca che cosa

| | Sessione A: motore, livello, cornice | Sessione B: scena 3D |
|---|---|---|
| Ramo | `casa-motore-cornice` | `casa-scena-3d` |
| Numeri | livello **c55**, arabo **ar-46** | arabo **ar-47** (solo il testo della scheda in mappa) |
| File suoi | `src/engine/v2/process.js`, `src/engine/v2/sim.js`, `src/content/levels-v2.js`, `src/content/units-v2.js`, `src/content/prove.js`, `src/prove/*`, `src/ui2d/style.css`, `src/i18n/ar-46.js`, `test/casa-prova.test.js` (nuovo) e i test che gia' esistono, `docs/SPEC-PROCESSI.md` | `src/scene3d/parts-casa.js` (nuovo), `src/scene3d/casa.js` (nuovo), `src/scene3d/entry.js` (una riga), `src/trilocale/scene.js` (solo opzioni nuove), `src/content/home.js` (solo la scheda del Modulo 5, fase B4), `assets/milestone/casa.jpg`, `src/i18n/ar-47.js` |
| Non tocca | tutto `src/scene3d/`, `src/trilocale/`, `src/content/home.js`, `assets/` | `src/engine`, `src/prove`, `src/content` salvo `home.js` in B4, `src/ui2d`, i test che gia' esistono |
| In comune (conflitti previsti, regole di `PROCEDURA-UNIONE.md`) | `src/i18n/ar.js` (tenere tutte le righe), `docs/STATO-AVANZAMENTO.md` (tenere tutte le righe), `index.html`, `trilocale.js`, `prove3d.js` (prendere una versione e rifare `npm run build`) | idem |

Il punto d'incontro e' il **contratto** qui sotto: A lo produce (`casaState`), B lo legge. Nessuno dei due lo cambia
senza scriverlo qui e nello STATO.

## Contratto tra cornice e scena

`casaState(snap)` in `src/prove/state.js` (lo scrive A in A3; B fino ad allora usa uno stato finto con gli stessi campi):

```js
{
  scene: 'casa',
  powered: bool,                 // generale chiuso e contatore non staccato
  blackout: bool,                // il contatore ha staccato: tutta la casa al buio (momento forte)
  hour: number,                  // ora della serata dal motore, 16.5 ... 23
  sun: 0..1,                     // altezza del sole (0 dopo il tramonto)
  kw: { pv, load, grid, batt, limit },   // potenze in kW; grid > 0 prelievo; batt > 0 la batteria si carica
  soc: 0..100,                   // carica della batteria
  ev: { plugged: bool, charging: bool, kwh: number },
  hp: { on: bool, broken: bool },        // pompa di calore: gira / guasta (a vuoto)
  zones: [{ id: 'soggiorno', T, valve: 0..1, window: bool }, { id: 'camera', T, valve: 0..1, window: false }],
  oven: bool,
  flood: { wet: bool, siren: bool },     // sonda bagnata, sirena che suona
  rooms: { cucina, bagno, camera, corridoio, ingresso, soggiorno },  // luce di ogni stanza 0..1 (persone in casa, buio se blackout)
  shift: scenarioReport,         // come la fabbrica: duration, t, done, started, faults, events
}
```

Tocchi dalla scena alla pagina (`userData` sugli oggetti toccabili, come le altre prove):
`{ id: 'QG', kind: 'toggle' }` generale nel quadro, `{ id: 'S2', kind: 'toggle' }` sonda (asciuga),
`{ id: 'TA', kind: 'press' }` tacitazione, `{ id: 'W1', kind: 'toggle' }` finestra del soggiorno.

Interfaccia della scena: la stessa di `createFabbrica` (`src/scene3d/fabbrica.js`, leggerla), cioe' `createCasa(container, cb)`
che chiama `cb.onTap(userData)` e ritorna `{ update(stato), look(nome, ms), alert(ms), stats(), screenOf, views, resize,
dispose() }`, piu' `blackout()` per il momento forte e `evening(fine)` per il finale (finestre che si spengono una alla
volta). Viste almeno `insieme`, `tetto`, `tettoia`, `quadro`, `bagno`, `esterno`. Che cosa chiama la pagina e quando lo
decide A in A3 guardando come `page.js` usa la fabbrica, chiamando i metodi solo se esistono (la scena arriva dopo); se serve
un metodo in piu' lo scrive qui. Se A o B hanno bisogno di un
campo nuovo lo aggiungono qui (solo aggiunte) e lo scrivono nello STATO.

## Sessione A: motore, livello, cornice (ramo `casa-motore-cornice`)

**A1. Motore** (Opus, regole del gioco: motivo scritto in `docs/SPEC-PROCESSI.md` e test).
- Modello `casa` in `process.js` come in `PROGETTO-CASA.md` 4.1 (chiama `zone.step` ed `energia.step`, pompa unica che
  entra nei carichi, ferma a contatore staccato).
- `level.scenario.events` in `sim.js` come in 4.2; il rapporto aggiunge `events`.
- Test: `casa` con la pompa spenta da' gli stessi numeri dei due modelli da soli; con la pompa accesa il carico sale di
  `hpKw`; al blackout la pompa si ferma; gli eventi scattano una volta all'ora giusta. La fabbrica non cambia (test di c51).
- Fine fase: `npm test` verde, commit, push, riga nello STATO.

**A2. Livello c55 e unita'**.
- `c55-sera-inverno` in fondo a `levels-v2.js` (sezione 4.3), unita' in fondo a `units-v2.js` (con il proprio
  `UNITS_V2['c55-sera-inverno'] = {...};`, non dentro un'altra), arabo in `src/i18n/ar-46.js` registrato in `ar.js`.
- `test/casa-prova.test.js`: la serata con il programma sbagliato stacca il contatore verso le 19:30; con la soluzione la
  serata arriva alle 23 con tutte le prove verdi; l'allagamento riparato in tempo e in ritardo; la diagnosi.
- Il livello in mappa **no** (lo mette B in B4): finche' non c'e' la scena il livello si apre con il pannello 2D.
- Fine fase: `npm test`, `node scripts/check-lang.mjs ar` senza mancanti, commit, push, STATO.

**A3. Cornice della casa**.
- `casaState` (contratto), cornice a tempo generica (pannello in basso scelto per nome della scena: la fabbrica resta
  identica), pannello della casa, `casaEvents`, verbale della serata, momento forte al blackout, `PROVE.casa`, stile,
  arabo in `ar-46`.
- Provare la cornice senza scena (come la fase 2 della fabbrica) in Chromium a 1280 e 390 px; schermate della fabbrica
  prima e dopo (identiche).
- Fine fase: test verdi, commit, push, STATO con l'elenco dei campi di `casaState` cosi' come sono davvero.

**A4. Unione in `main`** (solo dopo A3): seguire `PROCEDURA-UNIONE.md` (unire `main` nel ramo, build, test, poi
`main` in avanti). Segnare "in `main`" nella tabella dei numeri. Da qui B puo' fare B4.

## Sessione B: scena 3D (ramo `casa-scena-3d`)

**B1. Pezzi** in `src/scene3d/parts-casa.js` (sezione 6 di `PROGETTO-CASA.md`), provati da soli in un'anteprima fuori dal
repository (cartella temporanea della sessione, esbuild e Playwright con
`executablePath: '/opt/pw-browsers/chromium'`, argomenti `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`;
il modulo e' in `/opt/node22/lib/node_modules/playwright`). Ogni pezzo: `{ group, picks, set(stato) -> true se cambia, skip? }`,
luci con l'intensita', mai `visible`. Fine fase: commit, push, STATO con firme e misure.

**B2. Scena** `src/scene3d/casa.js` con `createCasa` sopra il trilocale (come `appartamento.js`), registrata in `entry.js`.
Esterno, tettoia, pompa, pannelli, cielo che segue `hour`, buio del blackout, toccabili del contratto. Si prova con uno
**stato finto** (scratchpad) che fa scorrere la serata: tramonto, auto che arriva, forno, finestra, allagamento, blackout.
Trilocale (`#/` del Modulo 1) e appartamento (prova del Modulo 2) invariati: schermate prima e dopo.
Fine fase: build, test, commit, push, STATO.

**B3. Misure** come in `SPEC-SCENE-3D.md` (avvio, chiamate a riposo e in movimento, computer e telefono); correggere quello
che supera gli obiettivi. Fine fase: commit, push, STATO con i numeri.

**B4. Aggancio** (solo dopo A4: c'e' il livello c55 in `main`).
- `git fetch origin && git merge origin/main` nel ramo `casa-scena-3d`, conflitti secondo `PROCEDURA-UNIONE.md`.
- La scena con lo stato vero: aprire `#/livello/c55-sera-inverno`, giocare la serata con il guasto e senza. Se manca un
  campo nel contratto lo si chiede ad A scrivendolo nello STATO, o lo si aggiunge in `state.js` se A ha finito (solo aggiunta).
- Scheda del Modulo 5 in `home.js` con `level: 'c55-sera-inverno'` e la foto `assets/milestone/casa.jpg` (schermata della
  scena), testo in arabo in `ar-47`.
- Unione in `main` con la procedura; tabella dei numeri aggiornata.

## Ordine e attese

```
A1 ── A2 ── A3 ── A4 (main) ──────────┐
B1 ── B2 ── B3 ───────────────────── B4 (main)
```
A e B partono insieme. L'unica attesa e' B4, che aspetta A4. Se B arriva a B4 prima, si ferma e lo scrive nello STATO.
Se una sessione finisce i token, la fase in corso non e' committata a meta': si riprende dall'ultima fase nello STATO.
