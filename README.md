# Laboratorio elettrico

Laboratorio interattivo di impianti elettrici: quattro livelli (presa, punto luce interrotto, deviato, invertito).
Si collegano i fili nel banco di lavoro e si verifica il circuito: funziona, colori giusti, sicurezza.

## Uso in aula

Apri `index.html` in un browser. Non serve un server: e' un unico file autonomo.
(Solo i caratteri vengono scaricati da Google Fonts: senza rete la pagina funziona con i caratteri di sistema.)

## Struttura

Il motore elettrico, i contenuti e il disegno sono separati, cosi' la stessa logica puo' avere piu' viste (2D oggi, 3D domani).

```
src/engine/    il motore, senza DOM e senza grafica
  components.js   cosa collega dentro di se' ogni tipo di componente
  circuit.js      quali morsetti sono lo stesso punto elettrico (analisi, potenziali)
  evaluate.js     verifica di un cablaggio: restituisce codici, non frasi
  full.js         versione "dal contatore" di un livello
  session.js      stato e regole del gioco: fili, corrente, scatti, progressi, suggerimenti
  wires.js        colori dei fili ammessi per ogni ruolo
src/content/   dati e testi
  levels.js       i livelli (solo modello: componenti, morsetti, soluzione, suggerimenti)
  it.js           testi in italiano: frasi di verifica, schede dei componenti, messaggi
src/ui2d/      la vista 2D (SVG)
  layout.js       coordinate e lato dei morsetti sul banco
  render.js       disegno a partire dall'istantanea della sessione
  app.js          tocco, trascinamento, tastiera
  style.css, index.template.html, palette.js
scripts/build.mjs   riunisce tutto in index.html
test/               test di equivalenza con il motore originale, sessione, layout e pagina
```

### Il contratto tra motore e viste

- Un morsetto si indica con `"<componente>.<morsetto>"` (per esempio `Q.F`, `D1.C`).
- Una vista crea una sessione con `createSession({ levels, deriveFull, storage })`, legge l'istantanea con
  `snapshot()` (livello, fili, stato dei comandi, `power`, `trip`, `lit`, `potential(morsetto)`, risultato,
  progressi) e agisce con `addWire`, `removeWire`, `undo`, `clear`, `toggleBreaker`, `toggleControl`,
  `check`, `selectLevel`, `setMode`, `requestHint`, `toggleSolution`.
- Per ogni cambiamento la sessione chiama chi si e' iscritto con `subscribe(fn)`.
- Messaggi e verifica sono codici con parametri (`{ code: 'trip', fault: 'corto' }`); le frasi si compongono in
  `src/content/it.js`. Una vista 3D puo' usare gli stessi codici per animare invece che scrivere.
- La disposizione dei componenti appartiene alla vista: i livelli non contengono coordinate.

## Sviluppo

```
npm install        # solo la prima volta (esbuild per la build, jsdom per i test)
npm run build      # rigenera index.html
npm test           # tutti i test
npm run check      # build e test insieme
```

`index.html` e' generato: si modificano i file in `src/` e si rigenera.

I test confrontano il nuovo motore con quello originale (`test/fixtures/legacy-engine.cjs`) su migliaia di
cablaggi giusti e sbagliati, verificano che il layout ricomponga la geometria di prima, provano la sessione di
gioco da sola e aprono la pagina costruita in un browser simulato.

## Come si prova

Aprire `index.html` in un browser (nessun server necessario). Per il trilocale in 3D serve `trilocale.js` nella stessa cartella; senza, compare la pianta 2D. Le scene 3D caricano anche i file di `assets/` (texture, modelli): aprendo `index.html` direttamente dal disco (file://) Chrome li blocca e le superfici restano senza texture. Per vederle come online conviene un server locale (`python3 -m http.server`). Rotte utili: `#/livello/c04-parallelo`, `#/modulo/1` (trilocale).

## Come si aggiunge un livello

1. Definire il livello in `src/content/levels.js` (componenti, `controls`, `load` o `loads`, `solution`, suggerimenti).
2. Aggiungere la disposizione sul banco in `src/ui2d/layout.js` (voce `BASE`).
3. Scrivere l'unita' didattica in `src/content/units.js` (lezione, passi, sintesi, sfida guasto).
4. Inserirlo nella mappa in `src/content/home.js`.
5. `npm run check`: i test controllano che la soluzione passi e che il guasto fallisca.

Livelli con piu' carichi (lampade in parallelo): vedi `docs/SPEC-PIU-CARICHI.md`.
