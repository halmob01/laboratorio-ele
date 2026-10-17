# Modulo 6, Sicurezza e fabbrica: schede della review (17 ottobre 2026)

Metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`. Esempi seguiti: `docs/review/modulo2.md` e `modulo5.md`. Livelli, in ordine di gioco:
c25, c26, c27 (sicurezza), c33, c34, c35, c36, c37 (segnali e regolazione), c43, c44, c45 (fabbrica), c51 (prova 3D, rivista anche in
`docs/review/prove3d.md`). Prove dell'allievo finto: `modulo6-allievo-prima.md` (lezioni di `fe4fee0`) e `modulo6-allievo-dopo.md`
(lezioni riscritte).

## Risultato

| Livello | Perché vero, prima | Perché vero, dopo | Domande che restano, prima → dopo |
|---|---|---|---|
| c25 | 7/8 | 7/9 | 4 → 2 |
| c26 | 14/15 | 14/16 | 6 → 5 |
| c27 | 18/19 | 18/20 | 5 → 3 |
| c33 | 3/4 | 4/5 | 4 → 4 |
| c34 | 1/2 | 2/3 | 4 → 4 |
| c35 | 2/2 | 2/2 | 4 → 3 |
| c36 | 1/1 | 1/2 | 4 → 5 |
| c37 | 3/3 | 3/4 | 5 → 4 |
| c43 | 3/3 | 3/4 | 4 → 3 |
| c44 | 0/0 | 1/2 | 4 → 3 |
| c45 | 5/5 | 7/8 | 5 → 4 |
| c51 | - | - | 3 → 4 |
| Totale | | | 52 → 44 |

Nella seconda prova l'allievo ha contato anche i passi «Dai corrente» e «Premi Marcia»: i numeri dei passi non sono confrontabili uno a
uno. Conta di più che cosa chiedono le domande: prima erano soprattutto contraddizioni e cose mai dette (Ti = 0 che vorrebbe dire
«integrale al massimo», MW0 fermo in c37 ma «causa del livello basso» in c44, «niente di nuovo da imparare» in c45 che poi spiega I7,
riparare dal banco senza togliere tensione dopo «Lavori in sicurezza», chi avvia T1, T2 e T3). Dopo restano domande di approfondimento
(perché la frequenza decide la velocità, quanto deve durare T1, che cosa succede al pezzo in pinza senza potenza): le più utili sono state
risolte dopo la seconda prova, le altre sono da lezione in laboratorio.

## Quadro d'insieme

Il Modulo 6 è il più difficile del gioco e le lezioni di partenza erano corte per quello che chiedono. I problemi:

1. **Il perché dei fili della sicurezza.** c25-c27 dicevano che cosa collegare ma non a che cosa serve ogni filo, e non facevano vedere che
   cosa succede con un guasto. Ora: tabella «Perché ogni filo» in c25, c26, c27; tabella «Un guasto alla volta» in c25; «Dentro il relè di
   sicurezza» con i tre controlli (canali, riarmo, contattore); il riarmo al rilascio spiegato (un pulsante incastrato non riarma da solo);
   un contattore solo incollato non si ferma nemmeno col fungo, per questo nelle macchine vere sono due.
2. **Concetti usati prima di spiegarli o in contraddizione con il gioco.** c36 «Kp, Ti e Td a zero» (ora Kp = 1, e Ti = 0 vuol dire parte
   spenta, come nel motore `src/engine/v2/pid.js`); c44 «il guasto del sensore è la causa del livello basso» (falso nel gioco: SCALE lavora
   solo con AI0 ≥ 3,6 mA, MW0 resta fermo; corretta la spiegazione e la risposta giusta, senza cambiarne la lunghezza); c45 «niente di
   nuovo» (ora: due cose nuove, e quali gradini sono già nel programma); c37 «merker» e «marcatore».
3. **La sicurezza del manutentore.** c44 e c51 facevano riparare dal banco o con la sola portella aperta; ora dicono che nel lavoro vero
   si toglie tensione con il lucchetto per i fili del quadro, e che nella cella si mette il lucchetto sulla portella o si porta la chiave.
4. **Richiami.** c33 richiama MW0 e il 4-20 mA del Modulo 5 (c40, c55); c35 l'isteresi dello scaldabagno; c36 il termostato di c54.

## Slide nuove

| Livello | Slide nuova | A che cosa serve |
|---|---|---|
| c25 | Perché ogni filo; Un guasto alla volta | ogni filo con il suo perché; che cosa succede con un guasto, con due |
| c26 | Il riarmo; Dentro il relè di sicurezza; Perché ogni filo | riarmo al rilascio e discrepanza; i tre controlli; i fili in tre gruppi |
| c27 | Dove si usano | portella e barriera nel lavoro vero; l'ordine nella serie non conta |
| c33 | Due fili per tutto | il trasmettitore prende l'energia dall'anello; perché la polarità invertita dà 0 mA; perché i fili sono rossi |
| c36 | Perché non basta acceso o spento; Come si regola, un passo alla volta | il PID contro il termostato; il metodo (prima P, poi I, poi D) |
| c37 | Perché proprio 90 e 10 | le soglie degli allarmi fuori da quelle del lavoro normale; l'allarme avvisa, non comanda |
| c43 | Due domande sul programma | perché la partenza vuole I3 e I5; perché un passo non salta il successivo nello stesso giro |
| c44 | I guasti che non suonano | il galleggiante bloccato si vede dai valori prima che dall'allarme |
| c45 | Il PLC ascolta la sicurezza; Che cosa c'è già nel programma | I7 (NA 13-14 di KM), T3, i marcatori che ricordano il passo |
| c51 | Il lucchetto | portella aperta per il robot, lucchetto per chi entra, tensione tolta per i fili |

Slide oltre le 110 parole (controllo del 17 ottobre, ramo `claude/bold-heisenberg-0v4gc0`): divise senza togliere il perché.
c26 «Il contattore incollato» in due («Perché i contattori sono due», con il riarmo dai NC di tutti e due); c27 «Dove si usano» e
«Tutti in serie, su due canali»; c34 «Il variatore nel quadro» (inverter, posto nel quadro, che cosa si cabla sul banco); c37 «Un
allarme è un bit» e «Il guasto del sensore»; c43 «Quando serve un tempo» e «Il ciclo che finisce sempre». c25: la definizione di
contatto incollato passa alla slide «Un guasto alla volta», dove serve; c35: frase sulle soglie spostata nella slide prima. Tutte le
slide del modulo ora stanno sotto le 110 parole.

**Prova dei tasti nel browser:** `prova-tasti.mjs` tutto OK per c25-c27, c33-c37, c43-c45 (11 livelli). c51 è una prova.
Nota: `prova-tasti.mjs` vuole `playwright-core`; nelle sessioni cloud c'è in `/opt/node-tools/node_modules` (collegarlo con un link
simbolico in una cartella di lavoro e lanciare da lì una copia dello script con il percorso di `index.html` scritto per intero).

## Da far controllare al collega di laboratorio

Controllate sulle fonti in `docs/DOMANDE-PER-GIANLUCA.md` (sezione del 17 ottobre). Nuove di questo modulo:
- c27: «le barriere vere hanno uscite elettroniche e vanno a ingressi propri del relè di sicurezza».
- c33: «il trasmettitore consuma meno di 4 mA e prende l'energia dall'anello; con la polarità invertita passano 0 mA».
- c51: il lucchetto personale sulla portella della cella.
