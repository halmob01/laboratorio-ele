# Piano di lavoro automatico (notte 13-14 ottobre 2026)

Scritto da Opus per essere eseguito da Sonnet in autonomia, senza domande a Matteo. Riferimenti obbligatori: `docs/LEZIONE-ED-ESERCIZIO.md` (modello approvato), `docs/bozze/*.png` (aspetto), `docs/SYLLABUS.md` (contenuti), `docs/PIANO-DI-LAVORO.md` (ruoli).

## 0. Protocollo di lavoro autonomo

**All'inizio di ogni sessione**, anche dopo un'interruzione:
1. Leggi `docs/STATO-AVANZAMENTO.md`: dice l'ultimo compito chiuso e il prossimo.
2. `git fetch`, passa al ramo indicato lì, `npm install` se manca `node_modules`, `npm run check`.
3. Riprendi dal primo compito non chiuso.

**Per ogni compito**
- Un compito alla volta, nell'ordine di questo piano.
- Chiuso un compito: `npm run check` verde, commit sul ramo di lavoro, push del ramo, aggiorna `docs/STATO-AVANZAMENTO.md` (una riga: compito, commit, note), commit e push anche di quello.
- Commit con i trailer richiesti dalla sessione.
- Se un test esistente si rompe per un cambiamento voluto del comportamento, aggiorna il test e scrivi il motivo nel messaggio di commit. Non cancellare test per farli passare.

**Ramo e pubblicazione**
- Ramo di lavoro: `b2-modello-lezione`, creato da `main`.
- Unione in `main` (fast-forward, poi push) **solo al gate di fine fase** (A, B, C, D), e solo se: test verdi, screenshot controllati a 390 e 1280 px, revisione indipendente fatta e i suoi problemi gravi corretti. Così al mattino Matteo trova su GitHub Pages l'ultima fase completa e funzionante.
- Mai `push --force`. Mai riscrivere la storia di `main`.

**Quando qualcosa non è chiaro**
- Non fermarti. Scegli l'opzione più semplice e coerente con `LEZIONE-ED-ESERCIZIO.md`, scrivi la scelta in `docs/DOMANDE-PER-MATTEO.md` (domanda, scelta fatta, come cambiarla) e vai avanti.
- Ti fermi solo se un passo è irreversibile o rischia di rompere `main`: in quel caso chiudi la fase precedente, scrivi la situazione in `STATO-AVANZAMENTO.md` e smetti.

**Regole sui contenuti (valgono per ogni testo del gioco)**
- Italiano, tono sobrio e tecnico, frasi brevi, seconda persona singolare. Niente emoji, niente slogan, niente punti esclamativi, niente toni infantili.
- Sul sito non compaiono: codici interni (c01...), "milestone", "prologo", "build". Si usano "Modulo", "Per cominciare", "livello".
- Termini fissi: fase, neutro, terra; morsetto; quadro; levetta del quadro; giallo-verde. Colori: fase marrone, nero o grigio; neutro blu; terra giallo-verde.
- Ogni affermazione tecnica deve essere corretta per un impianto civile italiano. In caso di dubbio scrivi la frase più prudente e segnala il punto in `DOMANDE-PER-MATTEO.md` sotto "Da far controllare al collega di laboratorio".
- Non pubblicare indirizzi email. `CONTACT_EMAIL` resta vuoto.

**Revisioni**
- Chi scrive non rivede il proprio lavoro. Ai gate lancia una revisione con lo strumento Agent, `model: "opus"`, `subagent_type: "general-purpose"`, in sola lettura, chiedendo problemi concreti con file, riga e scenario. Correggi i problemi gravi e medi, annota gli altri.
- Controllo visivo: Playwright con Chromium già installato (`/opt/pw-browsers`), screenshot a 390x844 e 1280x800 di ogni schermata toccata, salvati nella scratchpad. Guardali davvero prima di chiudere il compito.

## 1. Tetto di stanotte e margine

**Stop assoluto alle 05:45 di mercoledì 14 ottobre**: a quell'ora si chiude il compito in corso con un commit (anche `[wip]`), si aggiorna `STATO-AVANZAMENTO.md` e ci si ferma, qualunque sia il punto raggiunto. Dopo il reset settimanale delle 06:00 non si usa utilizzo. L'ora si controlla con `date` prima di iniziare ogni compito.

**Stanotte si fanno solo le fasi A e B.** La fase C si inizia solo se A e B sono chiuse e unite in `main` prima delle 04:00; in quel caso si chiude livello per livello (c02, poi c03, poi c05, poi c06), con un commit e una voce in `STATO-AVANZAMENTO.md` per ciascuno, e alle 05:30 non se ne inizia uno nuovo. Le fasi D ed E **non** si fanno stanotte: aspettano l'approvazione di Matteo.

Perché: il limite della sessione si azzera ogni 5 ore e quello settimanale mercoledì alle 06:00. Il lavoro si interrompe di colpo quando il limite finisce, e quello che non è salvato con un commit può andare perso se l'ambiente viene chiuso. Il margine serve a non lasciare a metà una fase e a lasciare a Matteo utilizzo per la giornata.

**Regole per non perdere lavoro**
- Commit e push dopo ogni compito, anche piccolo (A1, A2, ...). Mai più di un'ora di lavoro senza commit: se un compito è lungo, commit intermedio con `[wip]` nel messaggio sul ramo di lavoro.
- `STATO-AVANZAMENTO.md` sempre aggiornato prima di iniziare il compito successivo.
- Se la sessione riparte e trova modifiche non salvate, le verifica con `npm run check`: se passano le salva con commit, altrimenti le scarta con `git stash` e annota il fatto.

| Fase | Contenuto | Stanotte |
|---|---|---|
| A | Nuovo modello di lezione ed esercizio, applicato a c01 | sì |
| B | Quaderno delle sintesi | sì |
| C | Lezioni, passi, sintesi e sfide guasto di c02, c03, c05, c06 | solo se avanza tempo, un livello alla volta |
| D | Livello nuovo c04, due lampade in parallelo | no, dopo approvazione |
| E | Rifiniture | no, dopo approvazione |

## 2. Fase A: modello di lezione ed esercizio su c01

### A1. Formato dei dati (`src/content/units.js`)

Sostituisce `lesson.paras`, `prediction`, `guided`, `afterGuide`. La sfida guasto (`fault`) resta com'è.

```js
unit = {
  support: 'guidato' | 'passi' | 'obiettivo',
  lesson: { pages: [ page, ... ] },          // l'ultima è sempre di tipo 'sintesi'
  steps: [ step, ... ],                       // passi dell'esercizio
  summary: [ 'punto', ... ],                  // la sintesi (usata dalla pagina sintesi e dal Quaderno)
  fault: { ...come oggi }
}

page =
  | { type: 'spiegazione', title, paras: [...], art?: '<chiave art.js>', room?: 'lit'|'dark',
      table?: { head: [a, b], rows: [[a, b], ...] }, warn?: 'testo del riquadro Attenzione' }
  | { type: 'pezzi', title, focus: ['Q'], paras: [...] }        // focus = id dei componenti in evidenza
  | { type: 'demo', title, captions: { wires: ['testo per il filo 1', ...], power: '...', controls?: ['...'] } }
  | { type: 'previsione', question, options: [{ id, text }], correct, why }
  | { type: 'sintesi', title: 'Da ricordare' }                  // i punti sono in unit.summary

step =
  | { kind: 'wire', from: 'Q.F', to: ['L.A', 'L.B'], color: 'marrone', title, text }
  | { kind: 'power', title, text }
  | { kind: 'control', id: 'S', title, text }        // azionare un comando con la luce accesa
  | { kind: 'verify', title, text }
```

Un passo `wire` è fatto quando `from` è collegato a uno dei `to` attraverso i soli fili (union-find sui fili, contatti esclusi). Il colore non conta per segnare il passo: lo giudica la verifica.

### A2. Contenuti di c01 (testi definitivi, da copiare)

`support: 'guidato'`

Pagine:
1. `spiegazione`, `room: 'lit'`, title "Una lampada al soffitto", paras:
   - "In ogni stanza c’è almeno una lampada collegata al quadro elettrico di casa."
   - "In questo livello la colleghi tu, sul banco, con due fili. Alla fine la vedrai accendersi nella stanza."
2. `pezzi`, focus `['Q']`, title "Il quadro: da qui arriva la corrente", paras:
   - "Il quadro ha due uscite. La FASE porta la corrente verso la lampada, il NEUTRO la riporta indietro."
   - "La levetta accende e spegne tutto l’impianto."
3. `pezzi`, focus `['L']`, title "La lampada: due morsetti", paras:
   - "I morsetti sono le viti che stringono il filo. La lampada ne ha due, A e B: un filo per ciascuno."
   - "Per la lampada A e B sono equivalenti: conta che i due fili vadano a due morsetti diversi."
4. `spiegazione`, art `giro`, title "Perché servono due fili", paras:
   - "La corrente scorre solo se ha un giro completo da fare: esce dalla fase, attraversa la lampada e torna al neutro."
   - "Se manca uno dei due fili il giro è interrotto. Si dice circuito aperto: la lampada resta spenta."
   - warn: "Non collegare mai la fase direttamente al neutro: è un cortocircuito e il quadro scatta."
5. `demo`, title "Guarda come si fa", captions:
   - wires: ["Filo marrone dalla FASE del quadro al morsetto A della lampada.", "Filo blu dal NEUTRO al morsetto B."]
   - power: "Levetta su: il giro è chiuso e la lampada si accende. I puntini gialli sono la corrente."
6. `previsione`: domanda, opzioni, risposta e spiegazione attuali di c01 (invariati).
7. `sintesi`.

summary:
- "Una lampada ha bisogno di due fili: fase e neutro."
- "La fase va a un morsetto, il neutro all’altro. A e B sono equivalenti."
- "Fase: marrone, nero o grigio. Neutro: blu."
- "Se manca un filo il circuito è aperto e la luce resta spenta."
- "Mai la fase direttamente sul neutro: è un cortocircuito."

steps:
1. wire Q.F → [L.A, L.B], marrone. title "Collega la fase alla lampada"; text "Colore marrone. Tocca FASE sul quadro, poi un morsetto della lampada."
2. wire Q.N → [L.A, L.B], blu. title "Collega il neutro all’altro morsetto"; text "Colore blu. Tocca NEUTRO sul quadro, poi il morsetto libero della lampada."
3. power. title "Dai corrente"; text "Tocca la levetta del quadro."
4. verify. title "Controlla l’impianto"; text "Premi Verifica."

Etichette brevi dei passi nella barra: "1 Fase", "2 Neutro", "3 Levetta", "4 Verifica" (campo `short` nello step).

### A3. Motore

Nuovo file `src/engine/steps.js`, funzioni pure, nessun DOM:
- `stepsState(level, wires, power, states, result)` restituisce `{ current: indice | null, done: [bool...] }`. I passi sono sequenziali: il passo corrente è il primo non fatto. `power` è fatto se `power` è vero; `control` è fatto se il comando è stato azionato almeno una volta con la luce accesa (la sessione tiene un insieme `operated`); `verify` è fatto se c'è un risultato con `pass`.
- `ghostFor(level, step, wires)`: per un passo `wire` restituisce `[from, to, color]`, dove `to` è il primo dei `to` ancora libero (nessun filo). Serve al tratteggio in modalità `guidato`.

Nuovo file `src/engine/demo.js`:
- `demoFrames(level, captions)` restituisce l'elenco di fotogrammi `{ wires: [...primi k fili della soluzione], power, states, caption }`: un fotogramma per ogni filo della soluzione, poi uno con la levetta su, poi uno per ogni comando azionato (per i livelli con comandi: si aziona ogni comando e si mostra la luce che cambia). Il motore calcola `lit` e `flow` per ogni fotogramma con le funzioni esistenti.

`src/engine/session.js`:
- Fasi dell'unità: `lesson` → `build` → `done`, più `fault`. La previsione diventa una pagina della lezione: `answerPrediction` funziona quando la pagina corrente è di tipo `previsione`; "Avanti" è bloccato finché non si risponde.
- `unitNext`, `unitBack` scorrono `lesson.pages`; dall'ultima pagina si passa a `build`.
- Nuovo `skipLesson()`: passa a `build` da qualsiasi pagina. Nessuna penalità oltre alla previsione non data.
- Un livello già completato (stelle > 0) si apre in `build`. "Rivedi la lezione" riporta alla pagina 1.
- La snapshot espone `unit.page`, `unit.pages`, `unit.pageData`, `steps: stepsState(...)`, `ghost` (solo se `support === 'guidato'` e modalità apprendimento), `summary`.
- Rimuovi `guided`, `afterGuide`, `guideStep` e i loro test, sostituiti dai passi.
- La modalità "contatore" resta nel motore. Nella vista compare solo nel pannello di esito dopo che il livello è superato, come "Sfida: parti dal contatore".

### A4. Vista della lezione (`src/ui2d/screens.js`, `app.js`, `style.css`)

- Una scheda centrata (max 720 px su desktop) con: riga in alto "Lezione · N di M · <tipo>" e a destra "Salta la lezione" (link su una riga), barra di avanzamento a segmenti, titolo, contenuto, pulsanti Indietro / Avanti. Sull'ultima pagina il pulsante principale è "Ora tocca a te".
- `spiegazione`: paragrafi; se `room`, la stanza (riusa il disegno esistente della stanza in versione accesa o spenta); se `art`, il disegno di `art.js`; tabella e riquadro "Attenzione" (bordo sinistro rosso, sfondo rosato) come nella bozza `lezione-testo.png`.
- `pezzi`: il banco vero del livello senza fili, i componenti fuori da `focus` con opacità 0,28, i morsetti dei componenti in `focus` con anello giallo.
- `demo`: il banco che mostra i fotogrammi di `demoFrames` uno ogni 1,8 s. Il filo nuovo si disegna con un'animazione `stroke-dashoffset` di 0,8 s. Didascalia numerata sotto (riquadro giallo chiaro), pulsante pausa/ripresa, contatore "2 / 4", "Rivedi" dall'inizio. Con `prefers-reduced-motion` niente animazione automatica: si avanza con un pulsante "Passo successivo".
- `previsione`: come oggi.
- `sintesi`: elenco puntato di `summary`, nota "La trovi anche nel Quaderno, dalla mappa".

### A5. Vista dell'esercizio

Seguire `docs/bozze/esercizio-telefono.png` e `esercizio-desktop.png`.

- Colonna centrata, max 1040 px. In ordine:
  1. barra dei passi (etichette `short`; fatti in azzurro chiaro, corrente scuro, futuri grigi) e riga del compito (titolo e testo del passo corrente). Con `support: 'obiettivo'` la barra non c'è: c'è solo l'obiettivo del livello. Con `support: 'passi'` c'è la barra ma non il tratteggio.
  2. banco, con la palette compatta sopra (cinque pallini, quello scelto con il nome);
  3. pulsanti. Telefono: riga "Annulla", "Annulla tutto", "Aiuto"; sotto, "Verifica" a tutta larghezza. Desktop: colonna di 300 px a destra del banco con Verifica, Annulla, Annulla tutto, Aiuto, Sintesi, Rivedi la lezione, e sotto la legenda "in tensione / passa corrente / la tensione si ferma".
  4. stanza grande in fondo, a tutta larghezza, con intestazione "La stanza" e stato "Luce spenta / Luce accesa".
- "Aiuto" apre un piccolo menu: "Suggerimento" (come `requestHint`, costa XP) e "Mostra la soluzione". Su telefono "Sintesi" e "Rivedi la lezione" stanno in fondo alla scheda dei passi come link.
- Quando la verifica è superata: la pagina scorre fino alla stanza (`scrollIntoView` liscio; immediato con movimento ridotto), sotto la stanza compare il pannello di esito: titolo "Impianto funzionante", riga XP, pulsanti "Sintesi", "Sfida guasto" (se c'è e non risolta), "Sfida: parti dal contatore", "Prossimo livello".
- Esito non superato: il pannello compare sotto i pulsanti, vicino al banco, con i tre controlli (funziona, colori, sicurezza) come oggi.
- Rimuovi: la riga "Parti dal Quadro/Contatore" in cima al banco; la scheda "Il morsetto" e il riquadro "Controllo del circuito" sempre visibili; la scheda di testo lunga sopra il banco.
- La barra in basso per telefono (Mappa, Livello, Classifica) resta.

### A6. Test

- Aggiorna `test/unit.test.js` e `test/ui-smoke.test.js` al nuovo flusso: pagine, salto, previsione come pagina, passi che avanzano, tratteggio solo in `guidato`, esito con scorrimento alla stanza.
- Nuovi test `test/steps.test.js` (passi di c01, colore che non conta, A e B equivalenti, ordine) e `test/demo.test.js` (numero di fotogrammi, ultimo fotogramma acceso, per tutti i livelli: l'ultimo fotogramma con la levetta su ha `lit` vero).
- Tutti i test esistenti del motore (equivalenza, flow, progressi) devono restare verdi.

### A7. Gate di fase A

1. `npm run check` verde.
2. Screenshot a 390 e 1280 di: ogni pagina della lezione di c01, l'esercizio a metà, l'esercizio superato. Confronto con le bozze.
3. Revisione indipendente Opus su `steps.js`, `demo.js`, le modifiche a `session.js` e il flusso della vista.
4. Correzioni, poi unione in `main` e push. Aggiorna la sezione 13 di `SYLLABUS.md` (stato) e `STATO-AVANZAMENTO.md`.

## 3. Fase B: Quaderno

- Rotta `#/quaderno`. Nella mappa, tra gli strumenti, "Quaderno"; nel footer desktop, sotto Gioco.
- Pagina con l'elenco dei livelli che hanno `summary`, raggruppati per modulo, ognuno con titolo e punti. Livelli non ancora giocati: sintesi visibile comunque (il Quaderno è un materiale di ripasso, non un premio).
- Pulsante "Stampa" che usa `window.print()` con un foglio di stile di stampa semplice (niente barre, nero su bianco).
- Test: la rotta funziona, mostra c01, il link dalla mappa porta lì.
- Gate: check, screenshot, unione in `main`.

## 4. Fase C: contenuti di c02, c03, c05, c06

Per ognuno: `support`, pagine della lezione, `steps`, `summary`, `fault` con diagnosi. Riusa il formato di c01. Lunghezza: 4-7 pagine, sempre con `pezzi` per i componenti nuovi, `demo`, `previsione` e `sintesi`. Usa `spiegazione` per i concetti che lo richiedono (terra e sicurezza nella presa; perché si interrompe la fase; come lavora un deviatore; come lavora un invertitore).

| Livello | support | Concetti da spiegare | Sfida guasto (dal syllabus) |
|---|---|---|---|
| c02-presa | guidato | terra e sua funzione; L, N, PE sulla presa; colore giallo-verde solo per la terra | fase e neutro scambiati sulla presa |
| c03-interrotto | passi | l'interruttore interrompe la fase, mai il neutro; perché (lampada spenta ma in tensione) | interruttore sul neutro |
| c05-deviato | passi | come è fatto un deviatore (comune C, 1, 2); i due fili di collegamento tra i deviatori | fili 1 e 2 incrociati tra i deviatori (la luce funziona solo in alcune posizioni) |
| c06-invertito | obiettivo | l'invertitore tra due deviatori; incrocio dei collegamenti | un collegamento sbagliato sull'invertitore (il guasto con il tester arriva con il multimetro, Modulo 1) |

- Per la presa la "luce che si accende" è l'apparecchio collegato: la stanza (scena `tavolo`) mostra l'apparecchio acceso quando la presa funziona. Adatta la pagina finale di conseguenza.
- Per i guasti che non si vedono a luce spenta (c03 interruttore sul neutro) la diagnosi si basa sugli aloni di tensione: assicurati che `flowVisible` sia vero durante la sfida guasto anche nei livelli `onDemand`.
- Ogni sfida guasto: i fili di partenza devono produrre un impianto davvero difettoso secondo `evaluate` (test automatico per ognuno) e la correzione indicata in `fixSay` deve portare a `pass` (test automatico).
- Elenca in `DOMANDE-PER-MATTEO.md`, sotto "Da far controllare al collega di laboratorio", ogni frase tecnica su cui non sei sicuro.
- Gate: check, screenshot delle lezioni nuove, revisione Opus dei testi rispetto al syllabus e alle regole di contenuto (correttezza tecnica, tono, coerenza dei termini), correzioni, unione in `main`.

## 5. Fase D: c04, due lampade in parallelo (non stanotte)

Richiede più carichi nel motore. È la parte più delicata: progettala prima in un file `docs/SPEC-PIU-CARICHI.md` e falla rivedere da Opus (Agent) prima di scrivere codice.

Linee guida per la specifica:
- `level.load` (una coppia) resta valido; si aggiunge `level.loads: [[a, b], ...]`. Se manca, `loads = [load]`. Nessun livello esistente cambia comportamento: i test di equivalenza devono restare verdi senza modifiche.
- `analyse` calcola `lit` per ogni carico; `lit` complessivo = tutti i carichi accesi quando devono.
- `evaluate`: "funziona" se, per ogni combinazione dei comandi, ogni carico si accende quando ci si aspetta (per c04: entrambe le lampade seguono l'interruttore).
- `flowOf`: corrente su ogni percorso fase-neutro che attraversa almeno un carico acceso.
- Layout: due portalampada affiancati; stanza con due lampade.
- Contenuti come in Fase C (support `passi`; concetto: parallelo, ogni lampada riceve fase e neutro; sfida guasto: lampade in serie, si accendono deboli o non si accendono: rappresentare come "non si accendono").
- Inserire c04 nella mappa al posto del segnaposto "Due lampade" del Modulo 0.
- Gate come le altre fasi, con revisione Opus del motore in sessione separata.

## 6. Fase E: rifiniture (non stanotte)

- Controllo ortografico e terminologico di tutti i testi in `src/content/` (elenco delle correzioni nel commit).
- Accessibilità: etichette `aria` dei pulsanti nuovi, ordine del focus nella lezione e nella pagina dell'esercizio, contrasto dei testi sulle didascalie.
- `README.md`: come si prova, come si aggiunge un livello con il nuovo formato.
- Aggiorna `docs/PIANO-DI-LAVORO.md` (B1 e B2 alla luce di quanto fatto).

## 7. Cosa trova Matteo al mattino

- `docs/STATO-AVANZAMENTO.md`: cosa è stato fatto, commit per commit, e dove ci si è fermati.
- `docs/DOMANDE-PER-MATTEO.md`: scelte fatte in autonomia da confermare e frasi tecniche da far controllare.
- Su GitHub Pages: l'ultima fase chiusa.
