# Modulo 6, allievo finto sulle lezioni riscritte

Nota: i passi del banco di c51 non compaiono nel file ricevuto (la sezione è vuota), quindi per c51 non ho tabella dei passi.
"Deducibile" = il perché non è scritto nel livello, ma si ricava da un livello precedente del modulo (c25, c26, c27, c43) o dalla sintesi iniziale.

---

## c25 Il fungo a due canali

### 1. A che cosa serve nella vita vera
Il fungo di emergenza ha due contatti, uno per canale, e ogni canale comanda un suo relè. Se un contatto o un relè si incolla, l'altro canale ferma lo stesso la macchina. Serve perché con un solo contatto, se si incolla, la macchina non si ferma e nessuno lo sa. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase ai morsetti 1 e 3 del fungo | Due fili, uno per canale: un guasto su un filo non tocca l'altro canale | NON LO SO (si intuisce: si perde l'indipendenza) | Perché ogni filo |
| 2 | Morsetto 2 fungo a A1 di K1 | Il fungo non porta la corrente della macchina, comanda solo la bobina | Se le due bobine stanno sullo stesso contatto si perde la ridondanza: se si incolla, si bloccano tutti e due i canali | Il fungo e i due relè; domanda |
| 3 | Morsetto 4 fungo a A1 di K2 | Il canale 2 comanda K2 da solo, è indipendente | Come sopra | Perché ogni filo; domanda |
| 4 | Neutro ad A2 dei due relè | Ogni bobina ha bisogno del suo ritorno | NON LO SO | Perché ogni filo |
| 5 | Fase al morsetto 11 di K1 | Deducibile: il contatto è solo un interruttore, la fase la porto io | NON LO SO | - |
| 6 | 14 di K1 a 11 di K2 (contatti in serie) | Basta che se ne apra uno per fermare la macchina | Con un relè incollato l'altro ferma lo stesso (tabella dei guasti); in parallelo NON LO SO | Perché ogni filo; Un guasto alla volta |
| 7 | 14 di K2 alla lampada | SOLO IL COME (la lampada è "la macchina") | NON LO SO | - |
| 8 | Neutro alla lampada | Deducibile: circuito chiuso, serve il ritorno | Lampada spenta (circuito aperto, dai livelli prima) | Perché ogni filo |
| 9 | Levetta, poi premi il fungo | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Ridondanza": compare nella sintesi e nella spiegazione "Un guasto alla volta" prima di essere definita; la definizione sta solo nell'ultima riga della sintesi.
- "Canale": usato dall'inizio come se lo sapessi; si capisce dall'uso.
- "Scavalcato da un cortocircuito": non so come un cortocircuito scavalchi un contatto.
- "Guasto doppio" e "relè di sicurezza" (nominato, spiegato nel livello dopo).

### 4. Domande che mi restano
- Con un guasto solo la macchina si ferma comunque: se nessuno se ne accorge, qual è il danno concreto finché c'è un solo guasto?
- Come si accorge qualcuno che un relè è incollato prima che arrivi il secondo guasto? (rimandato al livello dopo)

### 5. Conteggio
Passi con il perché vero: 6 su 9 (1, 2, 3, 4, 6 scritti; 5 e 8 solo dedotti, quindi li conto 7 con la deduzione: 7 su 9). Passi con la conseguenza: 4 su 9 (2, 3, 6, 8). Capisco a che cosa serve: sì.

---

## c26 Il relè di sicurezza

### 1. A che cosa serve nella vita vera
Controlla che i due canali di fungo e portelle lavorino insieme, ferma la macchina e non la lascia ripartire da sola: serve un riarmo dato da chi è fuori. Controlla anche che il contattore non sia incollato. Serve a rendere "davvero sicuri" fungo e portelle. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase a 1 e 3 del fungo | Deducibile da c25 (un filo per canale) | NON LO SO | - |
| 2 | Morsetto 2 a S12 | I canali arrivano al relè: è lui che li controlla, non le bobine | NON LO SO | Perché ogni filo |
| 3 | Morsetto 4 a S22 | Come sopra | NON LO SO | Perché ogni filo |
| 4 | Fase ad A1 del relè | Il relè lavora sempre, anche a macchina ferma | NON LO SO | Dentro il relè di sicurezza |
| 5 | Neutro ad A2 del relè | Deducibile: ritorno dell'alimentazione | NON LO SO | - |
| 6 | Fase al 21 del contattore (NC) | Il riarmo passa dal NC: con KM incollato non arriva, il relè non si arma | Un contattore incollato non viene scoperto, macchina senza protezione fino al guasto dopo | Il contattore incollato (Attenzione) |
| 7 | 22 del contattore al morsetto 3 del pulsante di riarmo | SOLO IL COME | NON LO SO | - |
| 8 | Morsetto 4 del pulsante a R | R riceve l'impulso di riarmo; il riarmo esiste perché la macchina non parta da sola con qualcuno vicino | NON LO SO | Il riarmo; domanda |
| 9 | Fase al 13 del relè | Deducibile: l'uscita è un contatto, la fase la porto io | NON LO SO | - |
| 10 | 14 a 23 (uscite in serie) | Se un contatto interno si incolla, l'altro apre lo stesso la bobina | NON LO SO (cosa succede con un'uscita sola o in parallelo) | Perché ogni filo |
| 11 | 24 ad A1 del contattore | Il relè comanda la bobina, la potenza la porta il contattore | NON LO SO | Perché ogni filo |
| 12 | Neutro ad A2 del contattore | Deducibile: la bobina è un carico | NON LO SO | - |
| 13 | Fase al contatto 1 del contattore | Deducibile: il contatto è solo un interruttore | NON LO SO | - |
| 14 | 2 del contattore alla lampada | La macchina riceve potenza solo dal contattore | NON LO SO | Perché ogni filo |
| 15 | Neutro alla lampada | Deducibile: circuito chiuso | Lampada spenta (dai livelli prima) | - |
| 16 | Levetta, riarmo, fungo | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- S12, S22, R: la lezione dice che sono ingressi, ma non cosa vogliono dire le sigle né perché si chiamano così.
- "Discrepanza": spiegata subito, ok. "Ponticellato": spiegato in parentesi.
- "Elettronica che fa tre controlli": la tabella ne elenca tre, ma non so come li fa.
- "Si arma": uso la parola, ma "armato" non è definito.

### 4. Domande che mi restano
- Perché il relè si arma al rilascio del pulsante e non quando lo premo? La lezione dice "un pulsante incastrato non arma mai": ma allora un pulsante incastrato come riarmo cosa evita di preciso?
- Nella slide "Il riarmo" si dice che arma al rilascio, nell'animazione "Riarmo premuto: il relè si arma". Quando si arma?
- Se KM è incollato la macchina "intanto non si ferma": quindi con un solo contattore il fungo premuto non ferma la macchina?
- Perché le uscite del relè non vanno direttamente alla lampada/macchina, ma passano da un contattore? (si intuisce "potenza", ma non è scritto qui)
- Perché due uscite in serie e non una?

### 5. Conteggio
Passi con il perché vero: 14 su 16 (11 scritti, 5 dedotti da c25/da quello che so; 7 e 16 solo il come). Passi con la conseguenza: 2 su 16 (6 e 15). Capisco a che cosa serve: sì.

---

## c27 Portella e barriera

### 1. A che cosa serve nella vita vera
Mettere più dispositivi di sicurezza (fungo, portella, barriera) su un solo relè di sicurezza, così uno qualunque ferma la macchina e richiudere la portella non la fa ripartire da sola (potrebbe esserci qualcuno dentro). Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase a 1 e 3 del fungo | Deducibile (c25, c26) | NON LO SO | - |
| 2 | 2 fungo a 1 portella | In serie: basta che uno si apra e il canale 1 cade | Un contatto lasciato libero toglie un canale a quel dispositivo: sembra funzionare ma non è sicuro | Perché ogni filo; Richiudere non basta |
| 3 | 2 portella a 1 barriera | Come sopra | Come sopra | idem |
| 4 | 2 barriera a S12 | Come sopra | Come sopra | idem |
| 5 | 4 fungo a 3 portella | Stessa cosa sul canale 2 | Come sopra | idem |
| 6 | 4 portella a 3 barriera | Come sopra | Come sopra | idem |
| 7 | 4 barriera a S22 | Come sopra | Come sopra | idem |
| 8 | Fase ad A1 | Deducibile (c26) | NON LO SO | - |
| 9 | Neutro ad A2 | Deducibile | NON LO SO | - |
| 10 | Fase al 21 del contattore | Deducibile (c26: scopre il contattore incollato); la lezione dice solo "come in c26" | Deducibile da c26 | Dove si usano |
| 11 | 22 al pulsante di riarmo | SOLO IL COME | NON LO SO | - |
| 12 | Pulsante a R | Solo il riarmo, dato da fuori, rimette in marcia: potrebbe esserci qualcuno dentro | NON LO SO (la domanda parla di richiudere la portella, non di questo filo) | Richiudere non basta |
| 13 | Fase al 13 | Deducibile | NON LO SO | - |
| 14 | 14 a 23 | Deducibile (c26) | NON LO SO | - |
| 15 | 24 alla bobina | Deducibile (c26) | NON LO SO | - |
| 16 | Neutro alla bobina | Deducibile | NON LO SO | - |
| 17 | Fase al contatto 1 | Deducibile | NON LO SO | - |
| 18 | 2 alla lampada | Deducibile (c26) | NON LO SO | - |
| 19 | Neutro alla lampada | Deducibile | Lampada spenta | - |
| 20 | Levetta, riarmo, prova portella e barriera | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Un contatto lasciato libero in un dispositivo toglie un canale a quel dispositivo": la frase non l'ho capita bene.
- "Uscite elettroniche" della barriera vera: non so cosa siano.
- "Riparo apribile" e "interruttore di sicurezza": spiegati con l'esempio, ok.

### 4. Domande che mi restano
- Se la barriera vera non va in serie come un contatto, come si collega? (la lezione dice solo che qui è una semplificazione)
- L'ordine nella serie non conta: neanche se un filo si stacca tra due dispositivi? Come faccio a trovare quale dispositivo è aperto?
- Se riarmo con la portella aperta "non serve": il relè mi segnala qualcosa?

### 5. Conteggio
Passi con il perché vero: 18 su 20 (quasi tutti perché "come in c26"/in serie; 11 e 20 solo il come). Passi con la conseguenza: 7 su 20 (2-7 per il contatto libero, 10 dedotto). Capisco a che cosa serve: sì.

---

## c33 Il sensore 4-20 mA

### 1. A che cosa serve nella vita vera
Misurare il livello di un serbatoio con un segnale in corrente 4-20 mA che il PLC legge come numero. Si usa la corrente perché non cambia con la lunghezza del cavo, e 4 mA e non 0 perché così un filo staccato non si scambia per un serbatoio vuoto. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | + trasmettitore a AI0+ | La polarità conta: il trasmettitore non lascia passare la corrente al contrario | Passano 0 mA, come un filo staccato | Due fili per tutto |
| 2 | − trasmettitore a AI0− | Chiude l'anello | Scambiati: il PLC legge 0 mA | Due fili per tutto |
| 3 | Q1 alla lampada livello alto | L'uscita è solo un contatto, la tensione la porto io | NON LO SO | Come lo legge il programma (Attenzione) |
| 4 | Q2 alla lampada guasto | Il guasto ha una segnalazione sua, per distinguerlo dal livello (4 mA) | NON LO SO | Perché 4 e non 0 |
| 5 | Riempi il serbatoio (prova) | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Anello" e "ingresso analogico AI0": spiegati dall'uso. "SCALE": spiegata.
- "Trasmettitore regola la corrente": come fa, non lo so.
- "Resistenza di un morsetto ossidato": ok, è un esempio.

### 4. Domande che mi restano
- Se il trasmettitore prende l'energia dai due fili, come fa a funzionare con soli 4 mA?
- Chi dà la tensione dell'anello nel quadro vero (un alimentatore a 24 V "in molti impianti")? Su questo banco chi è?
- Perché la lampada di guasto si accende sotto 3,6 e non sotto 4? (spiegato: errori) E se la misura vera sbaglia di più?
- Come si spiega che i fili sono rossi tutti e due, quando in continua il rosso era il + e il nero il −?

### 5. Conteggio
Passi con il perché vero: 4 su 5. Passi con la conseguenza: 2 su 5. Capisco a che cosa serve: sì.

---

## c34 Il variatore

### 1. A che cosa serve nella vita vera
Cambiare la velocità di un motore (e farlo partire dolce) cambiando la frequenza che gli arriva; la frequenza sale con una rampa per non dare strappi al nastro. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Interruttore all'ingresso I0 | Chiudendolo l'ingresso vale 1 e il programma dà il consenso al variatore | NON LO SO | Due segnali, due strade |
| 2 | Q0 alla spia | La spia mostra il consenso di marcia che va al variatore | NON LO SO | Due segnali, due strade |
| 3 | Accendi e guarda la rampa | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Uscita analogica AQ0": l'ingresso analogico lo conosco da c33, l'uscita no.
- "A regime": usata nella domanda, non spiegata.
- "Consenso", "riferimento di velocità": spiegati dall'uso.
- "Uscita a relè": la nomino da anni, ma non so che differenza c'è con le altre uscite.

### 4. Domande che mi restano
- Perché la frequenza decide la velocità del motore? Dice solo "decisa dalla frequenza della rete".
- Se il variatore sta "al posto del teleruttore", il consenso fa le veci del teleruttore? Chi tiene la sicurezza (salvamotore, termico)?
- Sul banco la spia fa da variatore: nel quadro vero il Q0 va a un morsetto del variatore? Con che tensione?
- Il motore può andare oltre i 50 Hz (oltre il 100 %)?

### 5. Conteggio
Passi con il perché vero: 2 su 3. Passi con la conseguenza: 0 su 3. Capisco a che cosa serve: sì.

---

## c35 Il serbatoio

### 1. A che cosa serve nella vita vera
Programmare una pompa che riempie un serbatoio partendo al livello basso e fermandosi all'alto, senza accendersi e spegnersi di continuo (isteresi con Set e Reset). Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | I1 con Set su Q0 | Set tiene accesa la pompa anche quando il livello risale sopra il 20 % | Con una bobina semplice la pompa si accende e spegne di continuo attorno al 20 % | Mantenere lo stato; domanda 2 |
| 2 | I0 con Reset su Q0 | Solo il livello alto spegne la pompa | Dedotto: senza il Reset la pompa non si spegne più ("soltanto un Reset la spegne") | Mantenere lo stato |

### 3. Parole che non ho capito
Nessuna nuova (isteresi, Set, Reset li conosco dal Modulo 5). "Scattare" per un galleggiante: l'ho capito dall'esempio.

### 4. Domande che mi restano
- Come si scelgono 20 % e 80 %? "Le sceglie chi progetta": con quale criterio, e quanto devono distare?
- All'accensione Q0 è spento: se il serbatoio è già al 10 %, I1 è vero e parte, giusto? La lezione dice solo il caso "a metà".
- Se per un guasto un galleggiante non scatta mai (come nel c44), la pompa non si ferma: c'è una protezione?

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 2 su 2 (il secondo dedotto). Capisco a che cosa serve: sì.

---

## c36 Il PID

### 1. A che cosa serve nella vita vera
Tenere una temperatura (un forno a 60 °C) dosando la potenza da 0 a 100 %, invece del tutto-o-niente che oscilla troppo. P guarda l'errore adesso, I quello accumulato, D la velocità. Lo capisco a grandi linee.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Accendi la regolazione | SOLO IL COME | NON LO SO | - |
| 2 | Regola Kp, Ti, Td una cosa alla volta | Ognuna delle tre parti corregge un difetto della precedente (P lascia un errore, I lo toglie, D frena) | Troppo P oscilla, Ti troppo piccolo supera i 60 e oscilla, troppa D amplifica i disturbi | Come si regola, un passo alla volta |

### 3. Parole che non ho capito
- "Guadagno", "errore a regime", "regime", "superamento".
- "Disturbi" (D amplifica i disturbi): quali?
- "Ti piccolo = integrale veloce" ma "Ti = 0 vuol dire parte spenta": mi confondo.

### 4. Domande che mi restano
- Perché il limite è 66 °C? Cosa succede al forno o al pezzo sopra?
- Da quali valori di Ti parto ("da grande")? Quanto è "grande"?
- Perché non basta alzare molto Kp e fare a meno di I?
- Nella domanda, a 46 °C il forno serve 14 % di potenza: ma per stare a 60 °C la potenza necessaria è più alta o uguale?
- Il PID funziona anche se la misura (4-20 mA) si guasta?

### 5. Conteggio
Passi con il perché vero: 1 su 2. Passi con la conseguenza: 1 su 2. Capisco a che cosa serve: sì (ma le regolazioni numeriche non le saprei fare senza provare).

---

## c37 Il pannello operatore

### 1. A che cosa serve nella vita vera
Chi sorveglia l'impianto guarda un pannello (HMI) che mostra valori e allarmi che il PLC calcola come bit; gli allarmi hanno una priorità e vanno riconosciuti; un dato fermo può essere vecchio. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | M0: MW0 maggiore di 90 | Sopra il 90 % il serbatoio rischia di traboccare, si avvisa quando qualcosa non va (a 80 la pompa si ferma da sola) | Un allarme sotto le soglie del lavoro normale suonerebbe quando non serve | Perché proprio 90 e 10 |
| 2 | M1: AI0 minore di 3,6 | Sotto 3,6 mA il filo è interrotto e MW0 non si aggiorna | Guardando MW0 non si vedrebbe il guasto: resta fermo all'ultimo valore | Un allarme è un bit |
| 3 | M2: MW0 minore di 10 | Sotto il 10 % chi preleva l'acqua gira a vuoto e si rovina | Senza allarme, la pompa a valle si rovina | Perché proprio 90 e 10 |
| 4 | Prova gli allarmi | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Marcatore"/"merker": spiegato. "Bit interno": ok.
- "Rientrato": spiegato dalla tabella.
- "Priorità" scritta "nel pannello quando lo si prepara": cosa vuol dire prepararlo?

### 4. Domande che mi restano
- Come fa il pannello a sapere che M0 è "Livello troppo alto" e di priorità alta? Chi glielo dice?
- Perché il guasto del sensore ha priorità alta e il livello basso media?
- Perché SCALE si ferma sotto 3,6 mA: chi l'ha deciso, e perché?
- Cosa succede alla pompa quando suona l'allarme: il PLC la ferma, o solo avvisa?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 3 su 4. Capisco a che cosa serve: sì.

---

## c43 La linea

### 1. A che cosa serve nella vita vera
Programmare una macchina che fa passi uno dopo l'altro (robot che prende e deposita pezzi), con un marcatore per ogni passo e transizioni "passo + fatto"; il ciclo in corso finisce sempre. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Gradino di partenza (M0, I2, I3, I5, M9 NC; Set M1 e M9) | Parte solo se c'è un pezzo, il robot è fermo al punto giusto e non c'è già un ciclo | Se partisse con il braccio giù, il primo passo lo spingerebbe ancora più giù | Due domande sul programma |
| 2 | Transizioni M1-M7 con "fatto" | Un solo passo acceso alla volta, e ciascuno comincia a passo precedente finito | Senza il "fatto" il passo dopo parte subito: urto | La transizione; domanda 1 |
| 3 | Ultimo gradino: M8 con I5, Reset M8 e M9 | Il ciclo è finito e il successivo può partire | Dedotto: M9 resterebbe acceso e il ciclo non ripartirebbe | Quando serve un tempo (M9) |
| 4 | Premi Marcia / Arresto | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Montante" (un pezzo della scena: "urta il pezzo o il montante").
- "Fine giro" per il PLC: richiama la scansione, ma qui non è detto.
- "Transizione" è definita nella slide, ma usata prima.

### 4. Domande che mi restano
- Se un finecorsa non risponde, il "ciclo che finisce sempre" non finisce mai: Arresto allora non serve? (lo ritrovo in c44-c45)
- Perché Reset del passo e Set del successivo e non un solo gradino che sposta il bit?
- Quanto devono durare T1 e T2: chi li sceglie?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 3 su 4 (la terza dedotta). Capisco a che cosa serve: sì.

---

## c44 Gestione guasti

### 1. A che cosa serve nella vita vera
Gestire un impianto in servizio: leggere allarmi, valori e collegamento per capire quale pezzo è guasto, ripararlo in tempo prima che il serbatoio trabocchi. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Dai corrente e comincia il turno | SOLO IL COME | NON LO SO | - |
| 2 | Gestisci i guasti e consegna | Ogni guasto ha un tempo massimo: più aspetti più il danno cresce | Il serbatoio trabocca; se sbagli pezzo perdi tempo | Riconoscere non è riparare |

### 3. Parole che non ho capito
- "Turno" come prova di gioco (il tempo corre anche se tolgo la corrente: strano).
- "Tempo massimo di intervento": quanto?

### 4. Domande che mi restano
- A che percentuale trabocca il serbatoio? Fra l'80 % e il 90 % c'è margine ma non so quanto.
- Nel lavoro vero devo togliere tensione per rifare un filo: e il serbatoio intanto si riempie?
- Cosa succede se riparo il pezzo sbagliato: l'impianto si guasta di più o solo perdo tempo?

### 5. Conteggio
Passi con il perché vero: 1 su 2. Passi con la conseguenza: 1 su 2. Capisco a che cosa serve: sì.

---

## c45 La fabbrica

### 1. A che cosa serve nella vita vera
Mettere insieme una cella: sicurezza nei fili (a due canali con riarmo), programma a passi con gli allarmi, e gestione dei guasti; il PLC ascolta la sicurezza e ferma i tempi quando è aperta. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fungo e portella in serie sui due canali | Aprendone uno qualunque il relè perde il canale | Dedotto da c27: un contatto lasciato libero toglie un canale | Banco; c27 |
| 2 | Uscite 13-14 e 23-24 alla bobina di KM | Se un'uscita cade, il contattore si diseccita | NON LO SO | Banco |
| 3 | Riarmo dal NC 21-22 di KM | Se KM resta incollato il relè non si riarma | Deducibile da c26: l'incollato non viene scoperto | Banco; sintesi |
| 4 | Transizioni dei passi | SOLO IL COME in c45, ma si deduce da c43 (un passo alla volta, ciascuno a passo finito) | Da c43: urto | - |
| 5 | I due allarmi (T3→M10, I7 NC→M11) | Si segnala il ciclo bloccato (dopo 40 s) e le sicurezze aperte; I7 NC perché l'allarme scatta quando KM non è chiuso (dedotto dal ladder) | NON LO SO | Che cosa c'è già nel programma |
| 6 | Dai corrente: Verifica, poi levetta | SOLO IL COME | NON LO SO | - |
| 7 | Riarma il relè di sicurezza | Dopo un arresto di sicurezza la macchina non riparte da sola | Il robot non riparte (domanda 2) | Domanda; banco |
| 8 | Premi Marcia | Il PLC ha perso la marcia quando le sicurezze si sono aperte | Senza Marcia il robot non porta i pezzi successivi | Domanda; il PLC ascolta la sicurezza |

### 3. Parole che non ho capito
- "Contatto ausiliario" di KM: non è spiegato (so che I7 è il 13-14).
- "Lasciar cadere la marcia" e "il PLC ha perso la marcia": ho capito dall'uso che M0 si spegne.
- "Spia di robot alimentato": non so dove sta.

### 4. Domande che mi restano
- Se fungo premuto con pezzo in pinza toglie la potenza, chi tiene il pezzo? Non cade?
- Quanto dura un ciclo normale rispetto ai 40 secondi di "ciclo bloccato"?
- Se KM è incollato, I7 resta chiuso e "sicurezze aperte" non scatta: come lo scopro?
- Dopo il riarmo il robot finisce il ciclo interrotto: da quale passo riparte, se il tempo riparte da zero?

### 5. Conteggio
Passi con il perché vero: 7 su 8 (4 e 5 dedotti). Passi con la conseguenza: 5 su 8 (1, 3, 4 dedotte da c26/c27/c43; 7, 8 scritte). Capisco a che cosa serve: sì.

---

## c51 Il turno di notte

### 1. A che cosa serve nella vita vera
Fare il manutentore di notte: capire dal pannello dove guardare, riparare dentro la cella solo con il robot senza potenza (portella aperta), poi richiudere, riarmare e dare Marcia. Lo capisco.

### 2. Passo per passo
Nel file ricevuto i passi del banco di c51 non ci sono (sezione vuota): niente tabella. Dalla lezione si ricava la sequenza (portella aperta, ripara, esci, richiudi, riarmo, Marcia), con il perché scritto: il robot fermo è solo in attesa e riparte appena il finecorsa risponde, senza potenza non si muove.

### 3. Parole che non ho capito
- "Reparto", "fermo" (di produzione): ok dal contesto.
- "Lucina" dell'ingresso del PLC: non so dove si guarda sul banco.

### 4. Domande che mi restano
- Se la portella aperta basta a togliere potenza, a che serve il lucchetto? (la lezione dice: nessuno richiude e riarma mentre sei dentro)
- Nel gioco il lucchetto c'è, o è solo nel lavoro vero?
- "Quasi sempre un finecorsa": quali sono gli altri casi di ciclo bloccato?
- Per un lavoro sui fili del quadro vale "Lavori in sicurezza" (togliere tensione): vale anche per il PLC e il pannello della cella?

### 5. Conteggio
Passi con il perché vero: 0 su 0 (passi non riportati). Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c25 Fungo a due canali | 9 | 7 su 9 (2 dedotti) | 4 su 9 | sì | 2 |
| c26 Relè di sicurezza | 16 | 14 su 16 (5 dedotti) | 2 su 16 | sì | 5 |
| c27 Portella e barriera | 20 | 18 su 20 (da c26) | 7 su 20 | sì | 3 |
| c33 Sensore 4-20 mA | 5 | 4 su 5 | 2 su 5 | sì | 4 |
| c34 Variatore | 3 | 2 su 3 | 0 su 3 | sì | 4 |
| c35 Serbatoio | 2 | 2 su 2 | 2 su 2 | sì | 3 |
| c36 PID | 2 | 1 su 2 | 1 su 2 | sì (valori no) | 5 |
| c37 Pannello operatore | 4 | 3 su 4 | 3 su 4 | sì | 4 |
| c43 Linea | 4 | 3 su 4 | 3 su 4 | sì | 3 |
| c44 Gestione guasti | 2 | 1 su 2 | 1 su 2 | sì | 3 |
| c45 Fabbrica | 8 | 7 su 8 | 5 su 8 | sì | 4 |
| c51 Turno di notte | 0 (non riportati) | - | - | sì | 4 |
