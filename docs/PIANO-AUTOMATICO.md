# Piano di lavoro automatico, seconda parte della notte (13-14 ottobre 2026)

Scritto da Opus, da eseguire con Sonnet in autonomia, senza domande a Matteo. Il piano precedente (fasi A, B, C, tutte chiuse e unite in `main`) resta nella storia di git.

Riferimenti obbligatori: `docs/LEZIONE-ED-ESERCIZIO.md` (modello di lezione ed esercizio), `docs/SYLLABUS.md` (sezioni 4, 6, 10 e 11 per il Modulo 1), `docs/DOMANDE-PER-MATTEO.md`, `docs/STATO-AVANZAMENTO.md`.

## 0. Protocollo

**All'inizio di ogni sessione**, anche dopo un'interruzione:
1. Leggi `docs/STATO-AVANZAMENTO.md`: dice l'ultimo compito chiuso e il prossimo.
2. `git fetch`, passa al ramo `b3-notte`, `npm install` se manca `node_modules`, `npm run check`.
3. Riprendi dal primo compito non chiuso.

**Per ogni compito**
- Un compito alla volta, nell'ordine di questo piano. Prima di iniziarlo controlla l'ora con `date` (sezione 1).
- Chiuso un compito: `npm run check` verde, commit sul ramo, push del ramo, una riga in `STATO-AVANZAMENTO.md`, commit e push.
- Commit con i trailer richiesti dalla sessione. Mai più di un'ora senza commit: se serve, commit intermedio con `[wip]`.
- Un test che si rompe per un cambiamento voluto si aggiorna, con il motivo nel commit. Non si cancellano test per farli passare.

**Ramo e pubblicazione**
- Ramo di lavoro: `b3-notte`, creato da `main` (contiene già questo piano).
- Unione in `main` (fast-forward, poi push) solo al gate di fine fase, e solo con test verdi, screenshot a 390 e 1280 px guardati davvero, revisione Opus fatta e problemi gravi e medi corretti.
- Mai `push --force`, mai riscrivere `main`. `CONTACT_EMAIL` resta vuoto.

**Quando qualcosa non è chiaro**: scegli l'opzione più semplice coerente con questo piano, annota domanda, scelta e come cambiarla in `DOMANDE-PER-MATTEO.md`, vai avanti. Ti fermi solo davanti a un passo irreversibile.

**Regole sui contenuti**: italiano sobrio e tecnico, seconda persona singolare, frasi brevi, niente emoji, slogan, punti esclamativi o toni infantili. Sul sito non compaiono codici interni, "milestone", "prologo", "build": si usano "Modulo", "Prova del modulo", "Per cominciare", "livello". Termini e colori fissi come nelle lezioni esistenti. Ogni frase tecnica dubbia va in `DOMANDE-PER-MATTEO.md`, sotto "Da far controllare al collega di laboratorio".

**Revisioni**: chi scrive non rivede. Ai gate: Agent con `model: "opus"`, `subagent_type: "general-purpose"`, sola lettura, problemi concreti con file, riga e scenario. Controllo visivo con Playwright e Chromium (`/opt/pw-browsers`); per le pagine 3D lancia Chromium con `args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist']` e aspetta almeno 1,5 s prima dello screenshot.

## 1. Tetto della notte

**Stop assoluto alle 05:45 di mercoledì 14 ottobre**: si chiude il compito in corso con un commit (anche `[wip]`), si aggiorna `STATO-AVANZAMENTO.md` e ci si ferma. Dopo il reset delle 06:00 non si usa utilizzo. Resta programmata una sola ripresa automatica alle 00:35, che segue lo stesso protocollo.

| Fase | Contenuto | Regola oraria |
|---|---|---|
| E0 | Banco su computer per i livelli con molti componenti (c05, c06) | subito, è breve |
| F | Modulo 1, Il trilocale: proposta 3D con impaginazione propria | priorità della notte |
| D | Livello c04, due lampade in parallelo | si inizia solo se F è unita in `main` prima delle 03:00 |
| E | Rifiniture | solo dopo D, e non dopo le 05:00 |

Alle 05:30 non si inizia nessun compito nuovo.

## 2. E0. Banco su computer per i livelli con molti componenti

Problema visto negli screenshot: su computer, in c05 e c06, i componenti sono impilati in una colonna stretta al centro del banco, con molto spazio vuoto ai lati e morsetti piccoli.

- In `src/ui2d/layout.js` aggiungi una disposizione per schermi larghi (stessa soglia CSS, 920 px): con 4 o più componenti, quadro in alto su tutta la larghezza, gli altri su due colonne nell'ordine del percorso della fase (c05: deviatore A e deviatore B affiancati, lampada sotto; c06: deviatore A, invertitore, deviatore B, lampada in griglia 2x2). Il telefono resta com'è.
- `composeComps(level, { wide })`; `app.js` passa `wide = !MQ.matches` e ridisegna al cambio di `MQ` (esiste già `onMQ`).
- Test: i test di layout esistenti restano verdi; aggiungi un test che con `wide` nessun componente si sovrappone e il viewBox è più largo che alto.
- Screenshot 1280 di c05 e c06 a cablaggio completo. Nessuna revisione separata: si unisce in `main` insieme alla fase F.

## 3. Fase F. Modulo 1, Il trilocale: proposta 3D

### F.0 Cosa si consegna stanotte, e cosa no

Si consegna una **proposta funzionante** da far provare a Matteo: la pagina del Modulo 1 con l'appartamento in 3D, i tre cablaggi (bagno, camera, corridoio) e la luce che si accende nella stanza giusta. Non si fanno stanotte: collaudo finale, multimetro, guasti nascosti, procedura di sicurezza, dimensionamento. Nella pagina compaiono come scheda "Collaudo finale, in arrivo" con una riga di descrizione.

### F.1 Impaginazione (diversa dal resto del sito)

Rotta: `#/modulo/1`. Nella mappa la scheda "Modulo 1, Il trilocale" (oggi in `UPCOMING`) diventa una scheda aperta con etichetta "Anteprima" e pulsante "Entra nel trilocale".

**Telefono (390 px)**, dall'alto:
1. Barra: "← Mappa" a sinistra, "Modulo 1 · Il trilocale" a destra.
2. **Scena 3D** a tutta larghezza, altezza 52vh (minimo 300 px). In sovrimpressione, in basso, tre pastiglie di stato (Bagno, Camera, Corridoio: "da cablare", "in corso", "funziona"); in alto a destra due pulsanti piccoli: "Pianta" (passa alla pianta 2D, sezione F.5) e "Vista d'insieme".
3. **Linguette dei circuiti**: Bagno, Camera, Corridoio. Sotto la linguetta attiva: una riga di presentazione del circuito ("Bagno: punto luce interrotto, un interruttore vicino alla porta"), poi il compito con i passi o l'obiettivo, palette, banco e pulsanti, come nella pagina dell'esercizio (stesse funzioni di `render.js` e `screens.js`, nessuna copia del codice).
4. Scheda "Collaudo finale", disattivata, "in arrivo".

Quando un circuito supera la verifica: la pagina torna alla scena, la telecamera si sposta sulla stanza (0,8 s; nessuna animazione con `prefers-reduced-motion`), la luce si accende e sotto il banco compare l'esito come oggi. Toccare una stanza nella scena apre la sua linguetta.

**Computer (1280 px)**: due colonne in un contenitore largo al massimo 1280 px. A sinistra la scena 3D, fissa (`position: sticky`), larga circa il 58%, alta `calc(100vh - 120px)`. A destra linguette, compito, banco e, sotto il banco, i pulsanti in riga (la colonna laterale da 280 px qui non ci sta). Pastiglie di stato e pulsanti della scena come sul telefono.

Prima del codice: bozzetto delle due impaginazioni (HTML statico, scena sostituita da un riquadro grigio), screenshot in `docs/bozze/trilocale-telefono.png` e `docs/bozze/trilocale-desktop.png`, guardali, poi scrivi il codice.

### F.2 I tre circuiti come dati

- Nuovo file `src/content/trilocale.js` con `TRILOCALE = { rooms, circuits, plan }`.
- I tre circuiti sono livelli nello stesso formato di `levels.js` (identificativi stabili `t01-bagno`, `t02-camera`, `t03-corridoio`, mai mostrati), derivati da c03, c05, c06 ma con nomi legati alla casa: "Interruttore bagno"; "Deviatore porta", "Deviatore comodino"; "Deviatore ingresso", "Invertitore soggiorno", "Deviatore camera". Il campo `where` indica la parete.
- Supporto decrescente: `support: 'passi'` per bagno e camera, `'obiettivo'` per il corridoio; passi e sintesi brevi. Niente lezione a pagine (i concetti sono nel Modulo 0): al suo posto la riga di presentazione e un collegamento "Ripassa la lezione" al livello corrispondente del Modulo 0.
- Il trilocale usa **una sessione separata**: `createSession({ levels: TRILOCALE.circuits, deriveFull, storage })` con chiave di salvataggio `fase-e-neutro-trilocale`. I punti del trilocale si sommano a quelli del giocatore nella barra in alto (somma dei due `totalXp`); annota in `DOMANDE-PER-MATTEO.md` che i valori sono provvisori.
- Stato della casa: modulo puro `src/trilocale/house.js` che, dati fili e stati dei comandi di ogni circuito, calcola `lit` di ogni stanza con `analyse` del motore. Serve perché la sessione dà l'istantanea solo del circuito selezionato, mentre la scena deve mostrare tutte e tre le stanze. Per i circuiti non selezionati si usano gli ultimi fili e stati noti, tenuti in memoria e salvati nella stessa chiave. Il quadro della casa è unico: un solo interruttore generale in scena, e il quadro di ogni circuito nel motore lo segue.
- Test (`test/trilocale.test.js`): ogni circuito con la sua soluzione passa la verifica; `house.js` accende solo la stanza giusta; azionare un comando cambia la luce secondo la tabella di verità (deviata e invertita, tutte le combinazioni).

### F.3 Scena 3D

- Libreria `three`, versione fissata esatta in `package.json` (usa `0.176.0`; se non si installa, l'ultima 0.17x disponibile, fissata esatta). Licenza MIT, annotata in `docs/LICENZE.md`.
- **Pacchetto separato**: `scripts/build.mjs` produce, oltre a `index.html`, un secondo file `trilocale.js` (esbuild, minificato) con three e la scena. `index.html` lo carica solo quando si apre `#/modulo/1`, aggiungendo un tag `<script>` al volo; durante il caricamento la scena mostra "Caricamento della scena". La pagina principale non si appesantisce. Test: `index.html` non contiene three; `trilocale.js` sotto 700 KB.
- **Senza WebGL** (o se il caricamento fallisce): al posto della scena compare la pianta 2D (F.5) con le stanze colorate quando sono accese. jsdom non ha WebGL: i test di pagina verificano proprio questo ripiego.
- **Modello**: forme semplici, nessun asset esterno stanotte. Pianta di circa 9 x 7 m: ingresso con corridoio, soggiorno, camera, bagno, cucina (cucina e soggiorno sono scena). Pavimento, muri alti 1 m (taglio "casa di bambola": dall'alto si vede dentro), porte come aperture. Arredi a blocchi: letto e comodino in camera, lavabo e doccia in bagno, divano e tavolo in soggiorno, piano cucina. Colori coerenti con il banco 2D: muri `#F3EEE4`, pavimento caldo chiaro, contorni scuri sottili.
- **Luci**: ambiente bassa e fredda (casa di notte). Per ogni stanza una `PointLight` calda (circa `#FFD27A`) e una lampadina emissiva; da spente, intensità 0 e lampadina grigia. Ombre disattivate.
- **Comandi in scena**: piastrine sui muri nelle posizioni dei comandi, con etichetta sovrapposta in HTML. Toccarle aziona il comando del circuito (se il circuito non è quello selezionato, prima lo seleziona). Il quadro generale è una scatola in ingresso con la sua levetta.
- **Telecamera**: prospettica, vista d'insieme dall'alto a circa 55 gradi. Trascinando si ruota di più o meno 35 gradi al massimo, zoom limitato, niente spostamento libero. "Vista d'insieme" riporta alla posizione iniziale.
- **Prestazioni**: `setPixelRatio(Math.min(devicePixelRatio, 1.5))`; si disegna solo quando cambia qualcosa (stato o telecamera), non in un ciclo continuo; al cambio di rotta si ferma tutto e si libera il renderer.
- Accessibilità: la scena ha `role="img"` e un'etichetta che dice quali stanze sono accese; ogni azione della scena ha un equivalente nei pulsanti della pagina.

### F.4 Integrazione

- `src/trilocale/` contiene `house.js` (puro, testato), `scene.js` (three), `page.js` (impaginazione e collegamento con la sessione). `app.js` aggiunge la rotta, la scheda nella mappa e il caricamento del pacchetto; la pagina dell'esercizio si riusa importando le funzioni esistenti.
- Il Quaderno include le sintesi dei tre circuiti sotto "Modulo 1".
- La barra in basso del telefono resta; "Mappa" è attiva anche su `#/modulo/1`.

### F.5 Pianta

Pianta in SVG generata dagli stessi dati di `rooms`: stanze con il nome, simboli del punto luce (cerchio con croce), dell'interruttore, del deviatore e dell'invertitore nelle posizioni dei comandi, linee dei circuiti con i trattini che indicano il numero di conduttori in ogni tratto (schema unifilare). È sia la vista "Pianta" della scena sia il ripiego senza WebGL. I conduttori di ogni tratto vanno in `DOMANDE-PER-MATTEO.md` da far controllare.

### F.6 Gate della fase F (insieme a E0)

1. `npm run check` verde.
2. Screenshot a 390x844 e 1280x800: mappa con la scheda del Modulo 1; trilocale appena aperto (tutto spento); bagno cablato e acceso; tre stanze accese; pianta. Guardali e confrontali con i bozzetti.
3. Prova con Playwright: aprire, cablare il bagno con clic sui morsetti, verificare, toccare l'interruttore in scena e vedere la luce spegnersi.
4. Revisione Opus in sola lettura di `src/trilocale/` e delle modifiche a `app.js` e `build.mjs`: renderer non liberato, ascoltatori non rimossi al cambio di rotta, ripiego senza WebGL, coerenza tra scena e motore.
5. Correzioni, unione in `main`, push. In `STATO-AVANZAMENTO.md`: come si apre la proposta e cosa manca.

## 4. Fase D. c04, due lampade in parallelo

Solo se F è unita in `main` prima delle 03:00.

1. **Specifica prima del codice**: `docs/SPEC-PIU-CARICHI.md`, revisione Opus della specifica, poi codice.
   - `level.load` resta; si aggiunge `level.loads: [[a, b], ...]`, con `loads = [load]` se manca. Nessun livello esistente cambia comportamento.
   - `analyse` dà lo stato di ogni carico e `lit` complessivo; `evaluate` controlla che per ogni combinazione dei comandi ogni carico si accenda quando deve (in c04 entrambe le lampade seguono l'interruttore); `flowOf` mostra la corrente su ogni percorso fase-neutro che attraversa un carico acceso.
   - Lampade in serie: il modello non simula la caduta di tensione. La serie è un errore riconosciuto dalla verifica ("le lampade sono in serie: ognuna deve ricevere fase e neutro"), senza luce debole.
2. Livello `c04-parallelo` in `levels.js` al posto del segnaposto "Due lampade" del Modulo 0: quadro, interruttore, due portalampada affiancati; stanza con due lampade.
3. Unità didattica nel formato delle altre (support `passi`): pagine su parallelo e serie, demo, previsione ("Se si brucia una lampada, l'altra resta accesa?"), sintesi, sfida guasto con le lampade in serie.
4. Gate: check, screenshot, revisione Opus del motore e dei testi, correzioni, unione in `main`.

## 5. Fase E. Rifiniture

Solo dopo D, non dopo le 05:00, in quest'ordine, fermandosi quando scade il tempo:
1. Accessibilità: fuoco sul titolo della lezione dopo "Avanti" e "Indietro"; niente `tabindex` nella stanza disegnata nella lezione.
2. Sfida guasto dopo una diagnosi sbagliata: nascondi il pulsante "Sfida guasto" per la sessione e scrivi il motivo, oppure azzera la diagnosi; scegli e annota.
3. Passi che risultano fatti anche con un cortocircuito (`steps.js`): un passo `wire` è fatto solo se nel suo gruppo non c'è la sorgente di un altro passo.
4. `README.md`: come si prova, come si aggiunge un livello, come si apre il trilocale.

## 6. Cosa trova Matteo al mattino

- Su GitHub Pages l'ultima fase chiusa: almeno la proposta del trilocale, dalla mappa, scheda "Modulo 1".
- `docs/STATO-AVANZAMENTO.md`: compiti fatti e punto di arrivo.
- `docs/DOMANDE-PER-MATTEO.md`: scelte da confermare (impaginazione 3D, punti del trilocale, conduttori nella pianta) e frasi da far controllare.
- `docs/bozze/trilocale-*.png`: i bozzetti con cui confrontare il risultato.
