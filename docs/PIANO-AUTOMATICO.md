# Piano di lavoro automatico, terza parte della notte (13-14 ottobre 2026): Moduli 2 e 3

Scritto da Opus, da eseguire con Sonnet in autonomia, senza domande a Gianluca. I piani precedenti (fasi A-F, D, E) sono chiusi e uniti in `main`; restano nella storia di git.

Riferimenti obbligatori:
- `docs/SPEC-MOTORE-V2.md`: il motore nuovo (nucleo già scritto e provato da Opus in `src/engine/v2/`, test in `test/v2-engine.test.js`);
- `docs/LEZIONE-ED-ESERCIZIO.md`: modello di lezione ed esercizio, valido anche qui;
- `docs/SYLLABUS.md` sezione 4; `docs/DOMANDE-PER-GIANLUCA.md`; `docs/STATO-AVANZAMENTO.md`.

## 0. Protocollo

**All'inizio di ogni sessione**, anche dopo un'interruzione:
1. Leggi `docs/STATO-AVANZAMENTO.md`: dice l'ultimo compito chiuso e il prossimo.
2. `git fetch`, passa al ramo **`b4-moduli`**, `npm install` se manca `node_modules`, `timeout 200 npm run check`.
3. Riprendi dal primo compito non chiuso.

**Per ogni compito**
- Un compito alla volta, nell'ordine di questo piano. Prima di iniziarlo controlla l'ora con `date` (sezione 1).
- Chiuso un compito: check verde, commit sul ramo, push del ramo, una riga in `STATO-AVANZAMENTO.md`, commit e push.
- Commit con i trailer richiesti dalla sessione. Mai più di un'ora senza commit (anche `[wip]`).
- Un test che si rompe per un cambiamento voluto si aggiorna, con il motivo nel commit. Non si cancellano test per farli passare. **I test del motore v1 e di equivalenza non si toccano.**

**Ramo e pubblicazione**
- Ramo di lavoro: `b4-moduli` (contiene già specifica e nucleo del motore v2).
- Unione in `main` (merge senza riscrittura, poi push) solo ai gate (sezione 2): test verdi, screenshot a 390 e 1280 px guardati davvero, revisione Opus fatta, problemi gravi e medi corretti.
- Mai `push --force`, mai riscrivere `main`. `CONTACT_EMAIL` resta vuoto.

**Il motore v2**: il nucleo (`src/engine/v2/parts.js`, `sim.js`, `checks.js`) è di Opus. Se serve cambiarlo, il cambiamento è piccolo, ha un test che lo motiva e va segnalato nella revisione del gate successivo ("modifiche al nucleo: ..."). Se un livello sembra richiedere un cambiamento grande, si semplifica il livello e si annota in `DOMANDE-PER-GIANLUCA.md`.

**Quando qualcosa non è chiaro**: scegli l'opzione più semplice coerente con questo piano, annota domanda, scelta e come cambiarla in `DOMANDE-PER-GIANLUCA.md`, vai avanti.

**Regole sui contenuti**: italiano sobrio e tecnico, seconda persona singolare, frasi brevi, niente emoji, slogan, punti esclamativi o toni infantili. Sul sito: "Modulo", "Prova del modulo", "livello"; mai codici interni, "milestone", "build". Termini fissi: fase, neutro, terra, morsetto, contattore, bobina, contatto NA (normalmente aperto), contatto NC (normalmente chiuso), autoritenuta, relè termico, salvamotore, differenziale, magnetotermico. Ogni frase tecnica dubbia va in `DOMANDE-PER-GIANLUCA.md` sotto "Da far controllare al collega di laboratorio".

**Revisioni**: chi scrive non rivede. Ai gate: Agent con `model: "opus"`, `subagent_type: "general-purpose"`, sola lettura, problemi concreti con file, riga e scenario. Controllo visivo con Playwright e Chromium (`/opt/pw-browsers`), profilo di prova come nelle fasi precedenti (script nello scratchpad).

## 1. Tetto della notte

**Stop assoluto alle 05:45 di mercoledì 14 ottobre**: si chiude il compito in corso con un commit (anche `[wip]`), si aggiorna `STATO-AVANZAMENTO.md` e ci si ferma. Nessun compito nuovo dopo le 05:30, nessuna fase nuova dopo le 04:30. Dopo il reset delle 06:00 non si usa utilizzo.

| Fase | Contenuto | Gate |
|---|---|---|
| H1 | Base comune ai due moduli: motore v2 nella sessione, corrente visibile, componenti nuovi sul banco, pulsanti a impulso, prove funzionali, scena della macchina, mappa | sì |
| H2a | Modulo 2: c07 presa comandata, c08 relè ad impulsi | sì |
| H3a | Modulo 3: c12 il motore trifase, c13 marcia e arresto | sì |
| H2b | Modulo 2: c09 luce scale, c10 campanello, c11 il quadro | sì |
| H3b | Modulo 3: c14 relè termico, c15 inversione di marcia, c16 nastro trasportatore | sì |
| H4 | Prove dei moduli in 3D (appartamento di notte, nastro): solo specifica, se resta tempo | no |

Si alternano i due moduli perché entrambi abbiano livelli giocabili anche se la notte finisce prima.

## 2. Fase H1, base comune

Ordine dei compiti. Il gate di H1 si fa dopo H1.7.

**H1.1 Testi dei codici v2** (`src/content/it.js`): `work.allChecksOk` {n}, `work.checkFail` {check, label, cause, want, got, comp}, `work.checkMore` {n}, `work.secondaryMixed`, `work.unstable`, `work.tripped` {comp}, `work.burnt` {comp}, `work.loadOnEarth` {comp}, `safe.noEarth` {comp}, `safe.notProtected` {comp, by}, `safe.interlock`, `safe.stopNotPriority`, `safe.emergency`, `safe.restartAfterEmergency`, `safe.notCovered` {comp}, `safe.neutralEarth`, `safe.ok` variante `v2`. Ruoli dei colori nuovi: `bassa`, `comando`. Nomi di stato: motore fermo, gira in avanti, gira all'indietro, ronza e non parte; lampada bruciata; protezione scattata. Il testo di `work.checkFail` usa la `label` della prova ("Prova non superata: premi Marcia e rilascia, il motore resta acceso. Il motore è fermo.").

**H1.2 Sessione** (`src/engine/session.js`), come in SPEC sezione 10:
- per `level.engine === 2` la sessione tiene una simulazione (`createSim`), aggiornata con `setWires` a ogni filo; `toggleControl(id)` chiama l'azione adatta (`toggle`); nuovi `press(id)`, `release(id)`, `resetPart(id)`, `testPart(id)`, `tick(seconds)`;
- `check()` usa `evaluateV2`; il risultato ha in più `checks` (elenco delle prove con esito);
- `snapshot()` aggiunge `obs` (vedi `observe`); `lit` vale "almeno un carico acceso o un motore in marcia" per non rompere la vista;
- levetta del quadro: se il livello ha una protezione generale (`mt`, `mt3`, `sez`, `rcd` senza rank 2) la levetta della sessione non si mostra e l'alimentazione è sempre data (`setSupply(true)`), altrimenti si comporta come oggi con `setSupply`;
- progressi, XP, suggerimenti, Annulla: invariati;
- `demo.js`: per i livelli v2 la demo aggiunge i fili della soluzione e poi esegue `level.demoDo` (azioni come nelle prove, con una didascalia per ciascuna).
Test in `test/session-v2.test.js`: un livello di prova v2 si gioca dalla sessione (fili, pressione, rilascio, verifica a 3 stelle, progressi salvati).

**H1.3 Corrente visibile v2** (`src/engine/v2/flow.js`, SPEC sezione 9): stesso formato di `flowOf`. Il colore di un filo per la vista: `fase` per qualunque fase, `neutro`, `terra`, `bassa`. Test con i livelli di `test/v2-engine.test.js`: in marcia i fili di potenza e di comando del contattore sono percorsi; a motore fermo nessuno.

**H1.4 Componenti sul banco** (`src/ui2d/render.js`, `layout.js`, `art.js`): disegni semplici e leggibili, con i nomi dei morsetti normalizzati, per `pb` (pulsante NA, verde), `pbnc` (NC, rosso), `fungo` (rosso su fondo giallo), `ri`, `tmr`, `km` (bobina A1-A2, tre poli di potenza, 13-14, 21-22), `ft` (95-96, 97-98, tasto di riarmo), `mt`, `mt3`, `rcd` (tasto T), `trafo`, `bell`, `spia`, `presa`, `motor3` (U V W PE), `fc`, quadro trifase (L1 L2 L3 N PE). Stato visibile: contatti chiusi o aperti, bobina alimentata (riquadro evidenziato), protezione scattata (levetta giù e bollino rosso), motore che gira (freccia del senso; animazione solo senza `prefers-reduced-motion`). Su telefono i morsetti restano almeno 40 px di area toccabile.

**H1.5 Comandi a impulso e azioni**: pulsanti premuti finché si tiene il dito o il tasto (pointerdown/pointerup e pointercancel; Spazio e Invio con keydown/keyup); un tocco breve vale come premi e rilascia (pressione minima 250 ms). Levette di `mt`, `mt3`, `sez`, `rcd` e fungo con `toggle`; tasto T del differenziale; riarmo del termico. Etichette accessibili ("Pulsante Marcia, tieni premuto"). Orologio: `tick(0.5)` ogni 500 ms solo quando serve (SPEC sezione 10), fermo con la scheda del browser nascosta.

**H1.6 Scena** (`src/ui2d/render.js`): per i livelli v2 la stanza mostra i carichi del livello: lampade (anche bruciate), presa con una lampada da tavolo collegata, campanello (onde quando suona), e per l'industriale una **scena della macchina**: motore visto di lato con la ventola che gira e la freccia del senso, spie sul pannello, nastro con un pacco che avanza e i finecorsa alle estremità. Sotto la scena, dopo Verifica, l'elenco delle **prove funzionali** con esito (spunta o croce e motivo).

**H1.7 Mappa e palette**: in `src/content/home.js` due moduli nuovi, "Modulo 2, Civile avanzato" e "Modulo 3, Industriale", con i livelli via via pronti (i non pronti come segnaposto "in arrivo"); `UPCOMING` contiene solo le prove dei moduli. I colori `rosso` e `bianco` (non ancora in `src/engine/wires.js`, da aggiungere senza cambiare il comportamento dei livelli v1) compaiono nella palette solo nei livelli con `palette` che li include: rosso nel Modulo 3, bianco nel campanello. Aggiornare i test della mappa.

**Gate H1**: check verde; screenshot 390 e 1280 di un livello v2 di prova costruito con i componenti nuovi (si può usare c13 in bozza, non ancora nella mappa); revisione Opus di H1.2, H1.3, H1.5 (sessione, flusso, orologio) e controllo che i livelli v1 si comportino come prima.

## 3. Livelli

Ogni livello: dati in `src/content/levels.js` (con `engine: 2` dove indicato, `checks`, `safety`, `solution`, `hints`, `demoDo`), disposizione in `layout.js`, unità in `src/content/units.js` secondo il modello (lezione con spiegazione, pezzi, demo, previsione, sintesi; passi; sfida guasto), test in `test/units-content.test.js` (la soluzione passa con 3 stelle, il guasto della sfida fallisce per il motivo atteso, la correzione passa). Aiuto: passi senza tratteggio nel Modulo 2, solo obiettivo dal c14 in poi.

Morsetti: pulsante NA `3 4`, NC `1 2`; contattore `A1 A2`, `1 2 3 4 5 6`, `13 14`, `21 22`; termico `95 96`; spia `X1 X2`; motore `U V W PE`. Esempi completi di cablaggio (marcia e arresto, inversione con interblocco, nastro) in `test/v2-engine.test.js`.

### Modulo 2, Civile avanzato

| Id | Titolo | Componenti | Prove e sicurezza | Sfida guasto |
|---|---|---|---|---|
| c07-presa-comandata | Presa comandata | quadro, interruttore, presa, lampada a soffitto. **Motore v1** con `loads` e terra della presa | l'interruttore accende insieme presa e lampada; terra alla presa; fase sul morsetto L | fase e neutro scambiati sulla presa |
| c08-rele-impulsi | Relè ad impulsi | quadro, tre pulsanti NA (ingresso, soggiorno, camera), relè ad impulsi, lampada | P1 accende, P3 spegne, P2 riaccende; `phaseSwitched: ['L']` | pulsanti in serie: la lampada non si accende mai (diagnosi: i pulsanti vanno in parallelo) |
| c09-luce-scale | Luce scale a tempo | quadro, due pulsanti (piano terra, primo piano), relè temporizzato `time: 20`, due lampade | premi P1: accese; dopo 10 s ancora accese; dopo altri 12 s spente; P2 riaccende | lampade collegate direttamente alla fase: sempre accese (diagnosi: devono passare dal contatto del temporizzato) |
| c10-campanello | Campanello e trasformatore | quadro, trasformatore 230/12 V, pulsante esterno, campanello 12 V | premi: suona; rilascia: tace | campanello sulla rete a 230 V: si brucia (diagnosi: manca il trasformatore) |
| c11-quadro | Il quadro di casa | quadro, differenziale, magnetotermico luce (rank 2), magnetotermico prese (rank 2), interruttore, lampada, presa | la luce si accende; la presa è alimentata; tasto T fa scattare il differenziale (`expect.tripped: ['ID']`); `rcdCovers`, terra della presa, `phaseSwitched` | neutro della linea prese preso a monte del differenziale: scatta appena la presa è alimentata |

Lezioni del Modulo 2: pulsante e interruttore (il pulsante torna a riposo); il relè: bobina e contatto, circuito di comando e circuito della lampada; luce a tempo e risparmio; bassissima tensione di sicurezza e trasformatore; il quadro: differenziale (protegge le persone, confronta la corrente che va con quella che torna), magnetotermico (protegge la linea), sezioni dei cavi della luce e delle prese come domanda di previsione (valori da far controllare al collega: 1,5 mm² con 10 A per la luce, 2,5 mm² con 16 A per le prese).

### Modulo 3, Industriale

Tutti `engine: 2`, `src` trifase, `controlColor: 'rosso'`, palette con il rosso, `safety.protectedBy: { M: 'QM', KM: 'QM' }` (con i contattori del livello) e `safety.earth` del motore. Circuito di comando a 230 V tra L1 e neutro, preso a valle del salvamotore (da far confermare al collega: nelle macchine si usa spesso un trasformatore a 24 V).

| Id | Titolo | Componenti | Prove e sicurezza | Sfida guasto |
|---|---|---|---|---|
| c12-motore | Il motore trifase | quadro trifase, salvamotore `mt3`, motore | chiuso il salvamotore il motore gira in avanti; terra del motore | due fasi scambiate: gira all'indietro (diagnosi: scambiare due fasi inverte il senso) |
| c13-marcia-arresto | Marcia e arresto | quadro, salvamotore, contattore, pulsante di arresto NC, pulsante di marcia NA, spia di marcia, motore | marcia e rilascio: il motore resta acceso e la spia è accesa; arresto: si ferma; `stopWins`, terra | manca l'autoritenuta: il motore si ferma al rilascio |
| c14-termico | Il relè termico | come c13 più relè termico | come c13; sovraccarico (`overload on`, `wait 5`): scatta il termico e il motore si ferma (`expect.tripped: ['FR']`) | contatto 95-96 non collegato nel comando: con il sovraccarico il motore continua a girare |
| c15-inversione | Inversione di marcia | quadro, salvamotore, due contattori, arresto, marcia avanti, marcia indietro, motore | avanti; indietro; arresto; `never: [['KM1','KM2']]`, `stopWins`, terra | manca l'interblocco: premendo le due marce scatta il salvamotore |
| c16-nastro | Il nastro trasportatore | quadro, salvamotore, contattore, termico, fungo di emergenza, arresto, marcia, finecorsa, spia, motore; `machine: { motor: 'M', length: 6, endFwd: 'FC' }` | marcia: il nastro avanza e si ferma al finecorsa; emergenza durante la marcia: tutto fermo; `emergency`, `stopWins`, terra | finecorsa collegato con il contatto NA: il nastro non parte |

Lezioni del Modulo 3: tre fasi e 400 V, il motore e il senso di rotazione; circuito di potenza e circuito di comando (due schemi separati, art nuove); contattore, contatti NA e NC, autoritenuta; protezione del motore (salvamotore e relè termico, fase mancante); interblocco; emergenza (fungo con contatto NC, non riparte da solo), finecorsa.

**Gate H2a, H3a, H2b, H3b**: check verde; screenshot 390 e 1280 di lezione, banco, scena e prove dopo Verifica per ogni livello nuovo; revisione Opus del contenuto tecnico e dei dati (`checks`, `safety`, soluzioni); domande tecniche al collega annotate.

## 4. Fase H4, solo se resta tempo (non dopo le 04:30)

Specifica (non codice) delle due Prove dei moduli in 3D, sul modello del trilocale: Modulo 2, l'appartamento di notte (scale con luce a tempo, campanello, quadro con differenziale); Modulo 3, il nastro trasportatore in 3D che si muove con il motore del banco. File: `docs/SPEC-PROVE-MODULI.md`.
