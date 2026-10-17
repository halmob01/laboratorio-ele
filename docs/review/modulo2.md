# Modulo 2, Civile avanzato: schede della review (pilota, 17 ottobre 2026)

Metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`. Fonti: le lezioni, i passi e le sfide guasto di c17-c11 e c23, la prima prova
dell'allievo finto (`modulo2-allievo-prova1.md`), `docs/VALORI-TECNICI.md`.

## Quadro d'insieme

| Livello | Verdetto | Che cosa manca soprattutto |
|---|---|---|
| c17 multimetro | ritocco + slide nuova | tensione, corrente e potenza non sono mai state spiegate; come si cerca un guasto misurando (serve alla sfida) |
| c18 relè | **riscrittura** | a che cosa serve un relè nel lavoro vero; perché la fase va anche al comune; che cosa vogliono dire NA, NC, "eccitata" |
| c07 presa comandata | ritocco | perché si fa una presa comandata; perché L sempre sulla fase; il rischio dell'interruttore sul neutro (è la sfida) |
| c08 relè ad impulsi | ritocco | perché è meglio dei deviatori quando i punti sono tanti; richiamo al relè di c18 |
| c09 luce scale | ritocco | perché i pulsanti non comandano direttamente le lampade (è la sfida) |
| c10 campanello | ritocco | perché il pulsante sta sul secondario, perché fili di colore diverso; "bassa tensione" è il termine sbagliato |
| c19 magnetotermico | **riscrittura** | che cosa vuol dire "il cavo si scalda" (incendio nel muro); il nome magneto-termico; la tentazione del "metto un 16 così non salta" |
| c20 differenziale | ritocco ampio | che cos'è una dispersione, che cosa sono i mA, perché proprio 30 mA, perché la prova con 10 e 300 mA |
| c11 quadro | ritocco | perché il differenziale sta all'ingresso, perché ogni magnetotermico apre fase e neutro, come si trova la linea guasta (serve alla sfida) |
| c23 appartamento | va bene | solo un richiamo: non si riarma a ripetizione |

## Fili rossi del Modulo 2 (vocabolario da usare uguale in tutte le riscritture)

- **Il giro della corrente** (c01): ogni bobina, campanello o stufa è un carico come la lampada: ha bisogno di fase e neutro.
- **Si interrompe la fase** (c03): ogni comando (interruttore, pulsante, contatto di relè) sta sulla fase.
- **Comando e potenza separati** (nasce in c18): un circuito piccolo decide, un circuito che porta l'energia esegue.
  Frase fissa: *"il contatto è solo un interruttore: la tensione gliela porti tu"*. Torna in c08, c09, nel contattore (Modulo 3) e nelle uscite del PLC.
- **Qualcosa deve ricordare** (nasce in c08): il pulsante torna indietro, il relè ricorda.
- **Ogni protezione protegge qualcosa da qualcosa** (nasce in c19): il magnetotermico protegge *il cavo* dal calore, il differenziale
  protegge *le persone* dalla corrente che scappa a terra.
- **Misurare invece di indovinare** (nasce in c17).
- **Tensione, corrente, potenza** (nuovo, in c17): tensione = la spinta, c'è anche a lampada spenta; corrente = quanta elettricità passa
  davvero, solo a giro chiuso; potenza = quanto lavoro fa l'apparecchio. Frase fissa: *"più potenza vuol dire più corrente, e la corrente scalda i cavi"*.

## Regole per le previsioni del modulo

Le opzioni ora si mescolano da sole. In ogni previsione: tre opzioni di lunghezza simile, ognuna con un "perché" sbagliato ma credibile
(la convinzione che un allievo potrebbe avere davvero), nessuna assurda. Si riscrivono tutte le opzioni di c17-c11 secondo questa regola.

---

## c17 - Il multimetro

**Verdetto:** ritocco + una slide nuova all'inizio (tensione, corrente, potenza) + una slide sul metodo per cercare un guasto.

**Idea chiave:** prima di toccare e prima di cambiare pezzi, si misura: lo strumento dice quello che a occhio non si vede.
**Problema vero:** una luce non va; il guasto può essere nel filo, nel morsetto, nell'interruttore, nella lampada. Senza misure si va a tentativi
(e si rischia la scossa, perché "spento" non vuol dire "senza tensione").
**Come funziona:** tensione = si misura tra due punti con l'impianto acceso (c'è o no la spinta?); continuità = a impianto spento lo strumento
manda una sua piccola corrente e sente se il percorso è intero.
**Fili rossi:** giro della corrente, si interrompe la fase, misurare; nasce *tensione, corrente, potenza*.
**Parole nuove da spiegare:** volt, ampere, watt; tensione, corrente, potenza; continuità; puntale; "a valle".

| Passo | Perché | Se lo sbagli | Dove lo dice la lezione |
|---|---|---|---|
| 1-3 Punto luce (fase all'interruttore, alla lampada, neutro) | È il punto luce di c03: serve qualcosa su cui misurare | - | c03 (richiamo) |
| 5 Tensione tra morsetto 1 e neutro | Controlli che la fase arrivi fino all'interruttore: è la prima cosa da sapere quando una luce non va | Se leggi 0 V il guasto è prima, verso il quadro | MANCA (il perché della misura) |
| 6 Tensione ai capi dell'interruttore aperto | Ti mostra che una lampada spenta non è un impianto senza tensione | Chi si fida dell'interruttore spento prende la scossa | c'è (previsione 1) |
| 7 Continuità a quadro spento, interruttore chiuso | Controlli che l'interruttore chiuda davvero: è così che si scopre un interruttore rotto | Con il quadro acceso la misura non vale e lo strumento si può rovinare | c'è in parte (manca il "a che cosa serve nel lavoro") |

**Errori di concetto da smontare:** "lampada spenta = niente tensione" (c'è già, va tenuto); "il multimetro serve solo a chi ripara elettronica".
**Sfida guasto:** manca il neutro alla lampada, da trovare misurando. La lezione oggi non dà il metodo.

**Cambi decisi:**
1. Slide nuova, seconda: *"Tensione, corrente, potenza"*. Tensione in volt (V): la spinta; tra fase e neutro 230 V, c'è anche se non passa
   niente (come la pressione nel tubo con il rubinetto chiuso). Corrente in ampere (A): quanta elettricità passa davvero; passa solo se il giro
   è chiuso (come l'acqua che scorre a rubinetto aperto). Potenza in watt (W): quanto lavoro fa l'apparecchio, luce o calore; una lampada LED
   circa 10 W, una stufa 2000 W. Tabella con tre righe (grandezza, unità, esempio). Frase fissa sul calore dei cavi. Il multimetro di questo
   livello misura la tensione.
2. Slide nuova, prima della demo: *"Come si cerca un guasto"*: si segue il giro della corrente con il puntale nero sul neutro e il rosso che
   avanza lungo la fase: dove la tensione sparisce, lì c'è l'interruzione; se la fase arriva fino alla lampada e la lampada non va, il guasto è
   sul neutro o nella lampada. Collega la slide alla sfida guasto senza svelarla.
3. Nella slide "Due misure": a che cosa serve ciascuna nel lavoro (tensione: "c'è pericolo? arriva la corrente?"; continuità: "questo filo,
   questo interruttore, è intero?").
4. Previsioni: riequilibrare le opzioni (oggi la giusta è la più lunga).
5. Sintesi riscritta con il perché.

## c18 - Il relè

**Verdetto:** riscrittura. È il livello dove nasce *comando e potenza separati*: se qui non si capisce, il contattore, il relè di sicurezza e le
uscite del PLC restano "fili da copiare".

**Idea chiave:** con un relè un circuito piccolo comanda un circuito diverso, senza che i due si tocchino.
**Problema vero:** (allievo finto: *"Non so a che cosa serva nella vita vera... perché non basta collegare direttamente l'interruttore alla lampada?"*)
Esempi da dare: comandare un carico potente con un pulsante piccolo; comandare da lontano con fili sottili; comandare un impianto a 230 V da
un circuito a bassissima tensione (un termostato, una centralina, più avanti il PLC); dare due segnali opposti con un solo comando, come le
spie di un quadro (verde = macchina ferma, rossa = macchina in moto), che è proprio l'esercizio.
**Come funziona:** la bobina è un carico come una lampada: con fase e neutro diventa una calamita e sposta il contatto. Il contatto è solo un
interruttore: non ha tensione sua, gliela porti tu.
**Fili rossi:** giro della corrente (la bobina ha bisogno del neutro), si interrompe la fase (il comando sta sulla fase); **nasce** comando e potenza.
**Parole nuove da spiegare:** bobina, eccitata (= alimentata, la calamita è attiva), a riposo (= bobina senza tensione), contatto di scambio,
NA (normalmente aperto: aperto a riposo), NC (normalmente chiuso: chiuso a riposo), comune. I numeri: 11 comune, 12 chiuso a riposo, 14 chiuso
a bobina eccitata (seconda cifra 1-2 = NC, 3-4 = NA; la prima cifra numera il contatto).

| Passo | Perché | Se lo sbagli | Dove lo dice la lezione |
|---|---|---|---|
| 1 Fase all'interruttore di comando | Il comando sta sulla fase, come in c03 | Comando sul neutro: bobina sempre in tensione da un capo | in parte (solo in sintesi) |
| 2 Dall'interruttore ad A1 | È il circuito di comando: l'interruttore decide quando la bobina riceve tensione | - | in parte |
| 3 A2 al neutro | La bobina è un carico: la corrente deve tornare | Senza neutro la bobina non si eccita e il relè non scatta mai | MANCA |
| 4 Fase al comune 11 | Il contatto è solo un interruttore: la tensione per le lampade gliela porti tu | Senza questo filo nessuna lampada si accende, anche se il relè scatta | MANCA |
| 5 Dal 12 alla verde | 12 è chiuso a riposo: la verde dice "comando spento" | - | c'è (il come) |
| 6 Dal 14 alla rossa | 14 si chiude solo a bobina eccitata: la rossa dice "comando acceso" | Rossa sul 12: le due lampade si accendono insieme (è la sfida guasto) | MANCA (la conseguenza) |
| 7-8 Neutro alle lampade | Ogni lampada ha bisogno del suo giro | La lampada resta spenta | c01 (richiamo) |

**Errori di concetto da smontare:** "il relè dà corrente alle lampade" (no: passa quella che gli porti); "comando e lampade sono lo stesso circuito".
**Cambi decisi:**
1. Prima slide riscritta: *"Perché un relè"*: il problema (gli esempi sopra), poi che cos'è. Dire che i due circuiti possono avere tensioni diverse
   con un esempio (comando a 12 o 24 V, lampada a 230 V), e che nel gioco sono tutti e due a 230 V per semplicità.
2. Slide "pezzi" riscritta: definire NA, NC, a riposo, eccitata, il significato dei numeri.
3. Slide nuova prima della demo: *"Perché ogni filo"*, tabella con le righe sopra (raggruppate: comando, bobina, contatto, lampade).
4. Previsione: opzioni riequilibrate (vedi regole).
5. Sintesi: 4 punti con il perché (comando e potenza; contatto senza tensione sua; NC/NA a riposo; due segnali opposti).

## c07 - La presa comandata

**Verdetto:** ritocco.
**Idea chiave:** un interruttore può comandare più carichi: sta sulla fase, prima che si divida.
**Problema vero:** in un soggiorno senza luce al soffitto si vuole accendere la lampada da terra dalla porta: la presa comandata lo permette.
L'allievo finto non capisce perché farla invece di una presa normale.
**Fili rossi:** si interrompe la fase, giro della corrente.
**Parole nuove:** a valle (= dopo, nel verso in cui va la corrente dal quadro), carico (= ogni apparecchio che consuma), spina.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1 Fase all'interruttore | Il comando sta sulla fase | Interruttore sul neutro: presa e lampada restano in tensione da spente (è la sfida guasto) | in parte (manca la conseguenza sulla presa) |
| 2-3 Dal morsetto 2 a presa e lampada | La fase si divide *dopo* l'interruttore, così lui comanda tutti e due | Se la presa prende la fase prima dell'interruttore, resta sempre accesa | MANCA (il "se no") |
| 4-5 Neutri | Ogni carico ha il suo giro; il neutro non passa dall'interruttore | - | c'è |
| 6 Terra alla presa | La terra protegge chi usa l'apparecchio se l'involucro va in tensione (c02) | Presa senza terra: funziona, ma non è sicura | c'è in sintesi |

**Cambi decisi:**
1. Prima slide: il problema vero (la lampada da terra) e la differenza con le prese normali (sempre alimentate dal quadro).
2. Slide sulla presa: perché L sulla fase "per regola": chi lavora dopo di te deve trovare la fase sempre allo stesso posto. Da far controllare
   al collega (vedi sotto).
3. Riquadro Attenzione: interruttore sul neutro = presa in tensione anche a interruttore aperto; chi infila la spina pensando che sia spenta rischia.
4. Previsione e sintesi con il perché.

## c08 - Il relè ad impulsi

**Verdetto:** ritocco.
**Idea chiave:** il pulsante dà solo un colpo; a ricordare se la luce è accesa o spenta è il relè.
**Problema vero:** c'è già (il corridoio con tante porte). Manca il confronto: con deviatori e invertitori ogni punto in più vuol dire un
invertitore e altri fili che corrono per tutto il corridoio; con il relè ad impulsi ogni punto in più è un pulsante in parallelo con due fili.
**Fili rossi:** comando e potenza (richiamo esplicito a c18: "è un relè come quello di prima, ma a ogni colpo cambia stato e lo ricorda");
**nasce** qualcosa deve ricordare.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1-3 Pulsanti in parallelo (3 con 3, 4 con 4) | Basta uno qualunque premuto per mandare il colpo | In serie servirebbero tutti premuti insieme: la luce non si accende mai (è la sfida guasto) | c'è |
| 4-5 Ai morsetti della bobina | La bobina è un carico: fase dai pulsanti, ritorno al neutro | Senza neutro il relè non cambia mai stato | MANCA (richiamo) |
| 6 Fase al contatto 1 | Il contatto è solo un interruttore: la fase per la lampada gliela porti tu | La lampada non si accende mai | MANCA |
| 7-8 Lampada | Giro della lampada | - | c'è |

**Cambi decisi:** prima slide con il confronto deviatori/relè; richiamo a c18 nella slide del relè; riga "fase al contatto" con la frase fissa;
previsione e sintesi.

## c09 - La luce scale a tempo

**Verdetto:** ritocco.
**Idea chiave:** il pulsante dà il via, il relè temporizzato tiene accesa la luce per il tempo giusto e poi spegne da solo.
**Problema vero:** c'è (scale del condominio, dimenticanze, risparmio). Manca il perché del relè: se i pulsanti alimentassero direttamente le
lampade, la luce resterebbe accesa solo finché tieni premuto (è la sfida guasto); e in un condominio le lampade sono molte, mentre il pulsante
deve portare solo la piccola corrente della bobina.
**Fili rossi:** comando e potenza, qualcosa deve ricordare (qui il relè ricorda per un tempo), giro della corrente.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1-3 Pulsanti in parallelo | Uno a ogni piano, basta uno qualunque | In serie non si accende mai | c'è |
| 4-5 Bobina | Carico: fase dai pulsanti, ritorno al neutro | Il temporizzatore non parte | richiamo |
| 6 Fase al contatto | Il contatto è solo un interruttore | Le lampade non si accendono | MANCA |
| 7-10 Lampade in parallelo sul contatto | Tutte e due accese insieme; se una si brucia l'altra resta (c04) | Lampade sui pulsanti: accese solo finché premi | MANCA (la conseguenza) |

**Cambi decisi:** frase sul "perché non direttamente" nella prima slide; riga del contatto; previsione e sintesi.

## c10 - Il campanello e il trasformatore

**Verdetto:** ritocco, con una correzione tecnica.
**Idea chiave:** dove le persone toccano spesso, all'aperto o con le mani bagnate, si usa una tensione così bassa da non essere pericolosa.
**Problema vero:** c'è in parte. Manca: il pulsante sta fuori dalla porta, lo toccano tutti, anche con la pioggia; per questo è sul circuito a 12 V.
**Come funziona:** primario e secondario non si toccano: anche se si guasta qualcosa dal lato 12 V, i 230 V non arrivano al pulsante.
**Correzione tecnica:** la lezione dice "bassa tensione, per esempio 12 V". Nelle norme italiane *bassa tensione* va da 50 a 1000 V (in alternata);
12 V è **bassissima tensione**. Si usa "bassissima tensione" e si spiega in una riga. Da confermare con il collega.
**Fili rossi:** giro della corrente (il campanello è un carico sul secondario), misurare.
**Parole nuove:** primario, secondario, trasformatore, bassissima tensione.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1-2 Rete al primario | Il primario prende i 230 V e li trasforma | - | c'è |
| 3-5 Secondario, pulsante e campanello in serie | Tutto quello che la gente tocca sta a 12 V; il pulsante chiude il giro del campanello | Campanello sulla rete: si brucia (è la sfida guasto); pulsante sulla rete: chi lo tocca è vicino ai 230 V | in parte |
| Colori bianchi | Chi lavora dopo di te deve capire a colpo d'occhio che quel filo non è della rete | Un filo a 12 V scambiato per uno a 230 V o il contrario porta a errori di collegamento | MANCA |

**Cambi decisi:** "bassissima tensione" ovunque; il pulsante all'aperto come esempio; perché i colori diversi; previsione e sintesi.

## c19 - Il magnetotermico

**Verdetto:** riscrittura. È il livello più denso di numeri del modulo e quello dove il perché vero (l'incendio) non è mai detto.

**Idea chiave:** il magnetotermico protegge il cavo: deve staccare prima che il cavo si scaldi troppo.
**Problema vero:** un cavo troppo carico si scalda dentro il muro, dove nessuno lo vede: l'isolante si rovina e può fondere, e può partire un
incendio. La scena più comune nel lavoro vero: il cliente dice "mi salta sempre", e la tentazione è mettere un magnetotermico più grande:
così non salta più, ma il cavo non è più protetto.
**Come funziona:** il nome dice le due parti. *Termico*: una lamina che si scalda come il cavo e stacca piano se la corrente è un po' troppa a
lungo (sovraccarico); è lenta apposta, per non scattare a ogni piccolo picco. *Magnetico*: una bobina che stacca subito se la corrente
diventa enorme (cortocircuito). Per questo sotto 1,13 volte la portata non scatta mai e tra 1,13 e 1,45 la norma non garantisce niente: non
si può contare su "17,4 è più di 16, quindi scatta".
**Fili rossi:** tensione, corrente, potenza (da c17: la corrente si ricava dalla potenza); **nasce** ogni protezione protegge qualcosa da qualcosa.
**Parole nuove:** sezione (lo spessore del rame, in mm²), portata, sovraccarico, cortocircuito; Ib, In, Iz spiegate a parole (corrente che
serve, numero scritto sull'interruttore, corrente che il cavo regge) prima delle sigle; "la norma" (le regole che gli elettricisti devono
seguire, in Italia le norme CEI).

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1 e 6 Fase e neutro nel magnetotermico | Tutta la linea passa da lui: quando scatta stacca tutte e due | - | MANCA |
| 2-3 Uscita ai due interruttori | Le due stufe sono sulla stessa linea, quindi sullo stesso cavo e sotto lo stesso magnetotermico | - | MANCA |
| 4-5, 7-8 Stufe | Giro di ogni stufa | - | richiamo |
| 9 Portata 10 A | Regge una stufa (8,7 A) e stacca prima che il cavo superi i suoi 14,5 A | Con 16 A due stufe (17,4 A) non lo fanno scattare e il cavo scalda (è la sfida guasto) | c'è (numeri), manca il perché vero |
| 10-11 Prova con una e due stufe | Provi l'uso normale e il sovraccarico: il collaudo prima di consegnare | - | MANCA |

**Errori di concetto da smontare:** "più grande è l'interruttore, più è sicuro"; "il magnetotermico protegge l'apparecchio"; "se salta, è rotto".
**Cambi decisi:**
1. Slide 1 riscritta: *"Un cavo che si scalda"*: corrente → calore (richiamo c17), il rischio di incendio nel muro, la portata del cavo.
2. Slide "pezzi" riscritta: il nome magneto-termico e le due parti; perché è lento apposta; i numeri 1,13 e 1,45 come conseguenza.
3. Slide "Regola dei tre numeri": prima a parole, poi le sigle; esempio con i numeri del banco.
4. Slide nuova: *"Mi salta sempre"*: il caso del cliente; la risposta giusta (troppi carichi sulla linea, o un guasto) e quella sbagliata (un numero più grande).
5. Previsione: opzioni riequilibrate, con la convinzione "il cavo regge la corrente dell'interruttore" come opzione sbagliata.
6. Sintesi con il perché.

## c20 - Il differenziale

**Verdetto:** ritocco ampio.
**Idea chiave:** il differenziale protegge le persone: si accorge della corrente che scappa a terra, anche pochissima, e stacca subito.
**Problema vero:** un elettrodomestico con l'isolante rovinato: la carcassa va in tensione e chi la tocca fa da strada verso terra. Il
magnetotermico non se ne accorge. In casa molti lo chiamano "salvavita".
**Come funziona:** confronta la corrente che va (fase) con quella che torna (neutro); se manca qualcosa, quella corrente sta andando da un'altra parte.
**Perché 30 mA:** un mA è un millesimo di ampere. Già una decina di mA nel corpo impediscono di staccare la mano; poche decine possono fermare il
respiro o il cuore. Per questo 30 mA, e in una frazione di secondo. Da confermare con il collega (formulazione; i valori sono quelli di IEC 60479).
**Perché la prova con 10 e 300 mA:** un po' di dispersione è normale in molti apparecchi: il differenziale non deve scattare per niente
(sotto 15 mA non scatta); con un guasto vero deve scattare subito.
**Fili rossi:** giro della corrente (la corrente deve tornare tutta dal neutro), ogni protezione protegge qualcosa; la terra (c02) lavora insieme
al differenziale: la terra dà una strada alla corrente di guasto, il differenziale la vede e stacca.
**Parole nuove:** dispersione, involucro, soglia, mA, scattare, riarmare.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1-2 Fase e neutro nel differenziale | Deve vedere sia la corrente che va sia quella che torna | - | c'è |
| 3-4 Allo scaldabagno passando dall'interruttore | La linea è protetta a valle del differenziale | - | richiamo |
| 5 Neutro dall'uscita del differenziale | La corrente deve tornare passando da lui | Neutro preso dal quadro: scatta appena accendi (è la sfida guasto) | c'è |
| 7 Dispersione 10 e 300 mA | Provi che non scatta per niente e che scatta per un guasto vero | - | MANCA |

**Cambi decisi:** definire dispersione e mA; il perché dei 30 mA; terra e differenziale insieme; il "salvavita"; perché la prova con due valori;
previsione e sintesi.

## c11 - Il quadro di casa

**Verdetto:** ritocco.
**Idea chiave:** il quadro mette insieme le protezioni: un differenziale per le persone, un magnetotermico per ogni linea per i cavi.
**Problema vero:** c'è. Manca: perché il differenziale sta all'ingresso (uno solo protegge tutte le linee); perché ogni magnetotermico apre
fase e neutro (aprendo una linea la si isola del tutto per lavorarci); perché si preme il tasto di prova (le parti meccaniche si possono bloccare
e il differenziale non lo dice da solo).
**Sfida guasto:** chiede già di trovare la linea che disperde aprendo e richiudendo le linee: la lezione oggi non lo spiega (lo fa c23, dopo).
**Fili rossi:** ogni protezione protegge qualcosa, giro della corrente.

| Passo | Perché | Se lo sbagli | Dove |
|---|---|---|---|
| 1 Fase e neutro nel differenziale | All'ingresso protegge tutte le linee | Una linea che non passa dal differenziale resta senza protezione delle persone | in parte |
| 2 Le due linee, fase e neutro | Ogni linea ha il suo magnetotermico, adatto al suo cavo; un guasto ne spegne una sola | Neutro preso a monte del differenziale: scatta senza guasto | c'è |
| 3 Presa con terra | Come in c07 | - | richiamo |
| 4 Tasto di prova | Si controlla che il differenziale funzioni davvero | - | c'è in parte |

**Cambi decisi:** frase sul perché all'ingresso; frase sul perché fase e neutro; slide breve *"Se il differenziale non resta armato"* con il metodo
(apri le linee, riarma, richiudi una alla volta) che prepara la sfida e c23; previsione e sintesi.

## c23 - L'appartamento di notte (prova)

**Verdetto:** va bene. Il metodo è spiegato e la previsione chiede di ragionare. Unico ritocco: una frase sul perché non si riarma a ripetizione
(se c'è una dispersione vera, ogni riarmo rimette in tensione il guasto).

---

## Da far controllare al collega di laboratorio (si aggiunge a `docs/DOMANDE-PER-GIANLUCA.md`)

- c10: "bassissima tensione" al posto di "bassa tensione" per i 12 V del campanello.
- c07: come si spiega in laboratorio perché la fase va su L, visto che la spina italiana si può girare.
- c20: la frase sugli effetti della corrente nel corpo (una decina di mA, poche decine).
- c19: il caso "mi salta sempre": è il modo giusto di presentarlo agli allievi?
