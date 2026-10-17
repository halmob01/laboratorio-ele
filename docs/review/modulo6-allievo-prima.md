# Modulo 6, allievo finto sulle lezioni di partenza (fe4fee0)

Sono un allievo del primo anno: so solo quello che c'è nel file. Nelle tabelle "Perché" scrivo il motivo solo se la lezione lo dice o si deduce chiaramente dai livelli prima. Dove non è così scrivo LA LEZIONE NON LO DICE o SOLO IL COME. "Dai corrente", "Prova", "Guarda" e "Premi Verifica" sono nelle tabelle (o citati) ma non nei conteggi.

---

## c25 Il fungo a due canali

### 1. A che cosa serve nella vita vera
Serve a fermare una macchina in emergenza anche se un contatto del fungo si incolla: ci sono due contatti, uno per canale, ognuno con il suo relè, e basta che uno funzioni per fermare tutto. Lo capisco da "Perché due contatti".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | La fase ai due canali (morsetti 1 e 3 del fungo) | Ogni canale deve avere il suo percorso, così se un contatto si incolla l'altro ferma lo stesso | Se unisco i due canali perdo la ridondanza (si legge nella domanda, non proprio per questo passo) | Perché due contatti; domanda |
| 2 | Il canale 1 alla bobina di K1 (2 → A1) | Ogni canale ha il suo relè; nessun filo li unisce | Se K1 e K2 stanno sullo stesso contatto, si incollano di fatto tutti e due i canali: perdo la ridondanza | Domanda; sintesi |
| 3 | Il canale 2 alla bobina di K2 (4 → A1) | Come sopra | Come sopra | Domanda; sintesi |
| 4 | Il neutro alle bobine A2 | Il ritorno: senza neutro il circuito è aperto (lo so dai livelli prima) | NON LO SO (la lezione non lo dice qui) | - |
| 5 | La fase al contatto 11 di K1 | I contatti dei relè portano il carico: la macchina è alimentata dai contatti, non dalle bobine (lo so dal relè) | NON LO SO | I pezzi |
| 6 | 14 di K1 a 11 di K2, i due contatti in serie | In serie basta che uno si apra per fermare: ciascun canale ferma la macchina da solo | NON LO SO (non dice che cosa succede se li metto in parallelo) | I pezzi; sintesi |
| 7 | 14 di K2 alla lampada | SOLO IL COME (la lampada è "la macchina", ma perché il carico passa proprio da lì lo deduco solo da quello che sapevo) | NON LO SO | Guarda come si fa |
| 8 | Il neutro alla lampada | Il ritorno, il circuito deve chiudersi | NON LO SO | - |
| 9 | Dai corrente (non conta) | - | - | - |

### 3. Parole che non ho capito
- "ridondanza": la sintesi la spiega, ma la domanda la usa prima senza spiegarla.
- "incollato" (un relè o un contatto): si capisce dal contesto ma non è detto che cosa succede dentro.
- "canale": spiegato solo con "uno per contatto".
- "guasto doppio", "scavalcato da un cortocircuito": non spiegati.
- "relè di sicurezza": nominato come cosa del livello dopo.

### 4. Domande che mi restano
- Come faccio ad accorgermi del primo guasto (relè incollato)? La lezione dice che serve un controllo ma non quale: c'è solo il rimando al livello dopo.
- Perché la macchina non è collegata direttamente ai contatti del fungo, ma passa dai relè?
- Se K1 resta incollato e premo il fungo, K2 ferma: ma l'allievo non vede mai il caso nel banco. Come lo provo?
- Perché i due relè sono in serie sul carico e non due fusibili o altro? (non so se è una scelta o l'unico modo)

### 5. Conteggio
Passi con il perché vero: 7 su 8. Passi con la conseguenza: 3 su 8. Capisco a che cosa serve: sì.

---

## c26 Il relè di sicurezza

### 1. A che cosa serve nella vita vera
Serve a far ripartire la macchina solo quando una persona lo decide col riarmo, e a scoprire un contattore incollato prima di riarmare. Lo capisco da "Un relè che controlla" e "Il contattore incollato".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | La fase ai due canali (1 e 3 del fungo) | Due canali separati, come nel livello prima | NON LO SO | Un relè che controlla |
| 2 | Canale 1 a S12 | Il relè legge i due canali e apre le uscite se uno solo cade | NON LO SO | I pezzi; spiegazione |
| 3 | Canale 2 a S22 | Come sopra | NON LO SO | I pezzi |
| 4 | Fase ad A1 | Il relè deve essere alimentato (A1-A2) | NON LO SO | I pezzi |
| 5 | Neutro ad A2 | Il ritorno | NON LO SO | - |
| 6 | Il riarmo parte dalla fase al NC 21 del contattore | Se il contattore è incollato il NC resta aperto e il relè non si riarma: così si scopre il guasto | Se il riarmo non passa dal NC, un contattore incollato non viene scoperto e la macchina resta senza protezione fino al guasto successivo | Il contattore incollato (Attenzione) |
| 7 | 22 al pulsante di riarmo (morsetto 3) | Come passo 6: NC e pulsante sono in serie nel riarmo | Come passo 6 | I pezzi |
| 8 | Pulsante (morsetto 4) a R | Dopo un arresto la macchina non riparte da sola: serve un impulso di chi sta davanti | La macchina resta ferma, perché senza impulso il relè tiene aperte le uscite (lo deduco dalla domanda) | Un relè che controlla; domanda |
| 9 | Fase al 13 | Le uscite sono contatti NA che portano la fase alla bobina | NON LO SO | I pezzi |
| 10 | 14 al 23, le due uscite in serie | LA LEZIONE NON LO DICE (perché due uscite e non una) | NON LO SO | - |
| 11 | 24 alla bobina del contattore (A1) | Il relè di sicurezza comanda il contattore, che porta la potenza (lo so dal teleruttore) | NON LO SO | I pezzi |
| 12 | Neutro alla bobina | Il ritorno | NON LO SO | - |
| 13 | Fase al contatto di potenza (1) | Il carico passa dal contatto | NON LO SO | - |
| 14 | 2 alla macchina | Come sopra | NON LO SO | - |
| 15 | Neutro alla lampada | Il ritorno | NON LO SO | - |
| 16 | Dai corrente (non conta) | - | - | - |

### 3. Parole che non ho capito
- "discrepanza" (usata senza spiegare quanto tempo possono restare diversi i due canali).
- "retroazione" (usata in una frase lunga, mai spiegata).
- "ponticellato".
- "armarsi" / "disarmarsi" per un relè: si capisce a poco a poco.
- Nei passi il pulsante ha i morsetti 3 e 4, ma nella lezione nessuno spiega che numeri ha.
- "contatti di potenza almeno due, in serie" nelle macchine vere: non so a che cosa servono.

### 4. Domande che mi restano
- Perché le uscite sono due, 13-14 e 23-24, in serie? Non lo dice.
- Perché il relè si arma quando rilascio il pulsante e non quando lo premo?
- Il pulsante di riarmo è normalmente aperto o chiuso? Non è scritto.
- Perché il relè non porta la potenza direttamente alla lampada senza il contattore?
- La lezione dice che qui la retroazione scopre il contattore incollato "ma non può fermare la macchina mentre è incollato": allora a che cosa serve nel lavoro vero se la macchina gira lo stesso?
- La sintesi dice che il relè "apre le uscite se uno solo cade", ma il testo dice che se i canali non cambiano insieme si blocca: sono due casi diversi? Non è chiaro.

### 5. Conteggio
Passi con il perché vero: 14 su 15. Passi con la conseguenza: 3 su 15. Capisco a che cosa serve: sì.

---

## c27 Portella e barriera

### 1. A che cosa serve nella vita vera
Serve a fermare la macchina quando apro la portella o interrompo la barriera, e a non farla ripartire richiudendo, perché potrebbe esserci qualcuno dentro. Lo capisco da "Richiudere non basta".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | La fase ai due canali (fungo 1 e 3) | Due canali separati | NON LO SO | Più dispositivi, una catena |
| 2 | Fungo 2 → portella 1 | In serie: basta che uno si apra per interrompere il canale | Un contatto lasciato libero toglie un canale: sembra funzionare ma non è più sicuro | Richiudere non basta (Attenzione) |
| 3 | Portella 2 → barriera 1 | Come sopra | Come sopra | Richiudere non basta |
| 4 | Barriera 2 → S12 | Il canale arriva al relè che lo controlla | NON LO SO | Guarda come si fa |
| 5 | Fungo 4 → portella 3 | In serie | Come passo 2 | Richiudere non basta |
| 6 | Portella 4 → barriera 3 | In serie | Come passo 2 | Richiudere non basta |
| 7 | Barriera 4 → S22 | Come passo 4 | NON LO SO | - |
| 8 | Fase ad A1 | Il relè va alimentato | NON LO SO | - |
| 9 | Neutro ad A2 | Il ritorno | NON LO SO | - |
| 10 | Fase al NC 21 del contattore | Il riarmo passa dal NC: così un contattore incollato non permette il riarmo (c26) | Il contattore incollato non viene scoperto (c26) | sintesi: "contatto NC del contattore nel riarmo" |
| 11 | 22 al pulsante di riarmo | Solo il riarmo, dato da fuori, rimette in marcia | NON LO SO | Richiudere non basta |
| 12 | Pulsante a R | Come passo 11 | NON LO SO | - |
| 13 | Fase al 13 | Le uscite portano la fase alla bobina | NON LO SO | - |
| 14 | 14 al 23, uscite in serie | LA LEZIONE NON LO DICE (non è più spiegato dopo c26) | NON LO SO | - |
| 15 | 24 alla bobina del contattore | Il relè comanda il contattore | NON LO SO | - |
| 16 | Neutro alla bobina | Il ritorno | NON LO SO | - |
| 17 | Fase al contatto di potenza | Il carico passa dal contatto | NON LO SO | - |
| 18 | 2 alla lampada | Come sopra | NON LO SO | - |
| 19 | Neutro alla lampada | Il ritorno | NON LO SO | - |
| 20 | Dai corrente (non conta) | - | - | - |

### 3. Parole che non ho capito
- "barriera a raggi", "uscite statiche", "contatto a secco": mai spiegati.
- "catena" (di dispositivi di sicurezza): si capisce.
- "dispositivo a due canali".

### 4. Domande che mi restano
- La nota dice che le barriere vere "non si collegano in serie come un contatto a secco". Allora io che cosa imparo? Come si collega una barriera vera?
- Ha importanza l'ordine fungo, portella, barriera nella serie? Non lo dice.
- Perché la portella ha due contatti e li devo usare tutti e due? Capisco dal livello prima (ridondanza), ma qui non lo ripete.
- Se riarmo con la portella ancora aperta, che cosa succede? Non è scritto.
- Perché le uscite del relè sono due in serie? (ripeto c26)

### 5. Conteggio
Passi con il perché vero: 18 su 19. Passi con la conseguenza: 5 su 19. Capisco a che cosa serve: sì.

---

## c33 Il sensore 4-20 mA

### 1. A che cosa serve nella vita vera
Serve a far sapere al PLC quanto è pieno un serbatoio con un numero e non con un sì o un no, e ad accorgersi se il filo del sensore è staccato (sotto 4 mA è guasto, non serbatoio vuoto). Lo capisco bene da "Perché 4 e non 0".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | + del trasmettitore a AI0+ | SOLO IL COME (si dice "la corrente esce dal + e deve rientrare dal lato giusto": ridice il come; perché la corrente in anello lo so, perché il verso no) | Scambiati danno 0 mA | Sintesi; passo del banco |
| 2 | − del trasmettitore a AI0− | Chiude l'anello (il ritorno deve tornare, lo so) | Il PLC legge 0 mA, come con un filo staccato: lampada di guasto | Perché 4 e non 0; sintesi |
| 3 | Q1 alla lampada "Livello alto" | L'uscita è solo un contatto, la tensione la porto io con il filo | NON LO SO | Come lo legge il programma (Attenzione) |
| 4 | Q2 alla lampada "Guasto sensore" | Il guasto del sensore ha una segnalazione sua, per non credere che il serbatoio sia vuoto | NON LO SO | Perché 4 e non 0 |
| 5 | Riempi il serbatoio (Prova, non conta) | - | - | - |

### 3. Parole che non ho capito
- "trasmettitore" (si capisce: sensore che dà corrente).
- "ingresso analogico", "AI0", "MW0", "SCALE": spiegati in una riga, MW0 non spiegato.
- "milliampere".
- "polarità invertita": so che conta, ma non perché dia 0 mA.

### 4. Domande che mi restano
- Perché una polarità scambiata dà proprio 0 mA e non una corrente negativa?
- Chi alimenta il trasmettitore? Nei passi ci sono solo due fili tra trasmettitore e PLC: da dove prende l'energia per regolare la corrente?
- Perché il filo del 4-20 mA è rosso per tutti e due i capi, anche il meno? (nei livelli prima il meno era nero)
- Come fa il PLC a sapere che MW0 è in percentuale: lo decide SCALE, ma chi dice a SCALE i numeri 4 e 20?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## c34 Il variatore

### 1. A che cosa serve nella vita vera
Serve a cambiare la velocità del motore del nastro cambiando la frequenza e a farlo partire con una rampa, senza strappi. Lo capisco da "Perché serve un variatore" e "La rampa".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | L'interruttore all'ingresso I0 (fase in a, b a I0) | Chiudendolo l'ingresso vale 1 e il programma dà il consenso di marcia al variatore | Se il consenso manca il variatore si ferma, qualunque sia il riferimento | Due segnali, due strade; sintesi |
| 2 | Q0 alla spia (fase in Q0A, Q0B alla spia, altro capo al neutro) | SOLO IL COME ("la spia mostra il consenso"): non dice perché il consenso va a una spia e non al variatore | NON LO SO | Passo del banco |
| 3 | Accendi e guarda la rampa (Prova, non conta) | - | - | - |

### 3. Parole che non ho capito
- "inverter" (spiegato come sinonimo di variatore), "hertz", "frequenza": non so che cosa sia la frequenza oltre al numero 50.
- "regime", "riferimento di velocità", "AQ0" (uscita analogica), "MW0".
- "rampa" è spiegata ma "hertz al secondo" no.

### 4. Domande che mi restano
- Dove si collega il motore? Nel banco non ci sono né il motore né il variatore, solo una spia: come è fatto il collegamento vero?
- Perché la frequenza decide la velocità? Non è spiegato.
- Perché l'ingresso I0 ha bisogno del neutro o del comune IC? Non c'è nei passi (ai livelli prima ricordo che serve un comune).
- 60 % = 30 hertz: quindi 100 % sono 50 hertz? Non è scritto.

### 5. Conteggio
Passi con il perché vero: 1 su 2. Passi con la conseguenza: 1 su 2. Capisco a che cosa serve: sì.

---

## c35 Il serbatoio

### 1. A che cosa serve nella vita vera
Serve a far partire una pompa a livello basso e fermarla a livello alto senza che si accenda e si spenga di continuo, che rovina motore e contatti. Lo capisco da "Il problema con una sola soglia".

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | Gradino I1 (livello basso) con Set su Q0 | Set tiene accesa la pompa anche quando il livello risale sopra il 20 %: è la memoria dell'isteresi | Con una bobina semplice la pompa si accende e si spegne di continuo: motore rovinato e contatti consumati | Mantenere lo stato con Set e Reset; domanda 2 |
| 2 | Gradino I0 (livello alto) con Reset su Q0 | Solo un Reset spegne la pompa: è la seconda soglia | Senza Reset la pompa non si spegne mai (si deduce da "soltanto un Reset la spegne") | Mantenere lo stato con Set e Reset |
| 3 | Controlla il programma (Verifica, non conta) | - | - | - |

### 3. Parole che non ho capito
- "isteresi": la dà dopo averla usata nel titolo, ma poi la spiega ("due soglie diverse").
- "galleggiante" (ok), "merker" no.

### 4. Domande che mi restano
- Se la pompa si accende quando il PLC parte e il livello è a metà, in che stato è Q0 all'inizio?
- Perché 20 % e 80 % e non altri valori? Chi li sceglie?
- A che serve fermare la pompa all'80 %? Qui non è detto (c44 parla di traboccare).
- Se I1 e I0 scattassero insieme, vince il Reset perché sta sotto? Qui non lo dice.

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 2 su 2. Capisco a che cosa serve: sì.

---

## c36 Il PID

### 1. A che cosa serve nella vita vera
Serve a tenere una temperatura (il forno a 60 °C) regolando la potenza della resistenza in base all'errore. Lo capisco: P guarda l'errore, I quello accumulato, D la velocità.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | Accendi la regolazione (Prova, non conta) | - | - | - |
| 2 | Regola Kp, Ti e Td guardando il grafico | P dà potenza proporzionale all'errore, I elimina l'errore a regime, D anticipa e riduce il superamento | Solo P: il forno si ferma sotto i 60; Ti troppo piccolo: oscilla; D troppo alta: amplifica i disturbi | P, I, D; tabella; domanda |

### 3. Parole che non ho capito
- "guadagno", "errore a regime", "regime", "superamento", "disturbi" (che disturbi?), "integrale", "derivativa", "ritardo" del forno.
- "Td" e "Ti" come tempi: non so come si misurano o quanto valgono.

### 4. Domande che mi restano
- Ti piccolo vuol dire che l'integrale lavora di più, ma poi si dice "Kp, Ti e Td a zero" per tenere solo P: allora Ti a zero dovrebbe essere il massimo dell'integrale. È una contraddizione, oppure zero vuol dire spento?
- Da che valori parto? La lezione non dà numeri, procedo a tentativi?
- Perché il limite è 66 gradi e entro 2 gradi? Chi lo decide nel lavoro vero?
- Dove e come è collegato il trasmettitore di temperatura al PLC? Dice solo che è cablato.

### 5. Conteggio
Passi con il perché vero: 1 su 1. Passi con la conseguenza: 1 su 1. Capisco a che cosa serve: sì.

---

## c37 Il pannello operatore

### 1. A che cosa serve nella vita vera
Serve a far vedere a chi sorveglia l'impianto valori e allarmi senza aprire il quadro, con priorità e riconoscimento, e a non fidarsi di un numero fermo. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | Gradino MW0 > 90, bobina M0 | Sopra il 90 % il serbatoio rischia di traboccare; il pannello legge M0 e mostra l'allarme | NON LO SO | Un allarme è un bit; passo |
| 2 | Gradino AI0 < 3,6, bobina M1 | Il guasto si riconosce dalla corrente: con il filo interrotto MW0 resta fermo all'ultimo valore | Guardando MW0 il guasto non si vedrebbe (MW0 fermo) | Un allarme è un bit |
| 3 | Gradino MW0 < 10, bobina M2 | Un serbatoio vuoto fa girare a secco chi lo usa | NON LO SO | Passo del banco |
| 4 | Prova gli allarmi (Prova, non conta) | - | - | - |

### 3. Parole che non ho capito
- "HMI", "merker" (M0, M1, M2: si dice "merker" una volta, nei livelli prima erano "bit").
- "riconoscere" (spiegato bene dopo), "rientrato", "tacitare" no.
- "priorità" di un allarme: come la scelgo io?

### 4. Domande che mi restano
- Dove si decide che M0 è priorità alta e M2 media? Nei passi non c'è.
- "Fa girare a secco chi lo usa": chi? La pompa riempie, quindi a secco va chi prende l'acqua. Non lo capisco.
- Perché il livello alto per l'allarme è 90 % mentre la pompa si ferma all'80 % e c33 mette la lampada all'80 %?
- Se MW0 resta fermo con il filo interrotto, come mai in c33 si dice che 0 mA è "fuori scala" e il programma lo vede? Sono due modi diversi di dire la stessa cosa?
- Il cavo di rete del pannello a quale parte del PLC si collega? Non c'è un passo.

### 5. Conteggio
Passi con il perché vero: 3 su 3. Passi con la conseguenza: 1 su 3. Capisco a che cosa serve: sì.

---

## c43 La linea

### 1. A che cosa serve nella vita vera
Serve a programmare una macchina che fa una sequenza (un robot che prende un pezzo e lo porta) con un passo alla volta, ciascuno che comincia solo quando il precedente è davvero finito. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | Gradino di partenza: M0, I2, I3, I5, M9 NC; Set M1 e Set M9 | Il ciclo parte solo se c'è un pezzo, il robot è fermo al punto giusto e non c'è già un ciclo | NON LO SO | Passo; M9 nella spiegazione |
| 2 | Transizioni M1-M7: passo e "fatto", Reset del passo e Set del successivo | Un solo passo resta acceso e ciascuno comincia a passo precedente finito | Senza il segnale "fatto" il passo successivo parte subito: il braccio si sposta ancora giù e urta | La transizione; domanda 1 |
| 3 | M8 con I5, Reset M8 e Reset M9 | Il ciclo è finito e il successivo può partire | NON LO SO (non dice che cosa succede se non resetto M9) | Passo; M9 |
| 4 | Premi Marcia (Prova, non conta) | - | - | - |

### 3. Parole che non ho capito
- "marcatore" (nei livelli prima erano "bit" o "merker"), "transizione", "Set e Reset" come "uscite" del gradino.
- "T1" e "T2": dove li avvia il programma? Dice che c'è già.
- "fronte" non qui.

### 4. Domande che mi restano
- Nel PLC un bit scritto in alto si legge subito sotto: se metto i gradini in ordine, M2 viene letto nello stesso ciclo in cui è stato acceso. Non succede un salto di passi? La lezione non parla dell'ordine dei gradini.
- Chi avvia i temporizzatori T1 e T2? Il passo 2 non lo dice.
- Perché I3 (braccio su) è nel gradino di partenza se il robot "fermo al punto giusto" è già al prelievo (I5)?
- Come fa il robot a ripartire dopo un'emergenza a metà sequenza? Dice "lo vedrai nella fabbrica".

### 5. Conteggio
Passi con il perché vero: 3 su 3. Passi con la conseguenza: 1 su 3. Capisco a che cosa serve: sì.

---

## c44 Gestione guasti

### 1. A che cosa serve nella vita vera
Serve a tenere in servizio un impianto: leggere allarmi, valori e banco per trovare il pezzo guasto e ripararlo in tempo. Lo capisco.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | Dai corrente e comincia il turno (non conta) | - | - | - |
| 2 | Gestisci i guasti e consegna (è una prova di gestione, non un cablaggio: non la conto) | Si parte dagli indizi (allarme, valori, banco) per non sbagliare pezzo | Se sbaglio pezzo perdo tempo; se aspetto troppo il serbatoio trabocca | Dall'allarme al pezzo guasto; Riconoscere non è riparare |

### 3. Parole che non ho capito
- "intervento", "tempo massimo di intervento" (quanto?).
- "valori grigi", "dato vecchio" (spiegato in c37).
- "riconoscimento" dell'allarme (spiegato in c37).

### 4. Domande che mi restano
- Riparo dal banco con un tasto, ma ai livelli prima "si lavora fuori tensione, con il lucchetto": qui nessuno dice di togliere tensione. Contraddizione con "Lavori in sicurezza"?
- Il testo dice che il guasto del sensore può essere la causa di "livello troppo basso", ma in c37 con il filo interrotto MW0 resta fermo all'ultimo valore: come arriva un livello basso?
- Il galleggiante alto non scatta ma l'allarme arriva "quando manca poco": quanto manca? Perché non c'è un allarme prima, per esempio all'80 %?
- Quanto tempo ho per ogni guasto? Non è scritto.

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## c45 La fabbrica

### 1. A che cosa serve nella vita vera
Serve a mettere insieme sicurezza nei fili, programma a sequenza, allarmi e gestione dei guasti in una cella con un robot. Lo capisco abbastanza.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| 1 | I due canali: fase, fungo, portella, S12 e S22 | Aprendone uno qualunque il relè perde il canale | Un contatto lasciato libero toglie un canale e non è più sicuro (c27) | Passo; c27 |
| 2 | Uscite 13-14 e 23-24 in serie alla bobina di KM | Se un'uscita cade, il contattore si diseccita | NON LO SO | Passo |
| 3 | Riarmo dal contatto NC 21-22 di KM, poi pulsante, poi R | Se KM resta incollato il relè non si riarma | Un contattore incollato non viene scoperto (c26) | Passo; c26 |
| 4 | Transizioni dei passi M1-M8 più il gradino di partenza | Come nella linea: un passo alla volta, ciascuno comincia a passo precedente finito (c43) | Il passo successivo parte troppo presto e il robot urta (c43) | c43 |
| 5 | Allarmi: T3 con M10, I7 NC con M11 | Ciclo bloccato: il programma aspetta un segnale che non arriva; sicurezze aperte: I7 non chiuso, KM senza potenza | NON LO SO | Il turno; domanda 1 |
| 6 | Dai corrente: comincia il turno (non conta) | - | - | - |
| 7 | Riarma il relè (non conta) | - | - | - |
| 8 | Premi Marcia (non conta) | - | - | - |
| 9 | Consegna il turno (non conta) | - | - | - |

### 3. Parole che non ho capito
- "cella di produzione", "ausiliario" di KM.
- "sospendere i suoi tempi", "lasciar cadere la marcia".
- "T3", "M10", "M11", "I7" usati senza che sia detto dove si collegano.

### 4. Domande che mi restano
- La lezione dice "non c'è niente di nuovo da imparare", ma poi spiega una cosa nuova: I7 in serie ai temporizzatori e la marcia che cade quando le sicurezze si aprono. Nei passi del banco non c'è nessun passo per queste due cose: chi le scrive?
- Chi avvia T3? Il passo dice solo "T3 con la bobina M10".
- I7 è il "contatto ausiliario di KM"; ma il riarmo usa il NC 21-22. Sono due contatti diversi di KM (NA e NC)? Non è detto chiaramente.
- Dove si collega I7 al contatto di KM? Non è nei passi.
- Se il fungo toglie potenza ma il programma gira, come fa il programma a "ricordare" a che passo era? (la lezione dice solo che il tempo riparte da zero)

### 5. Conteggio
Passi con il perché vero: 5 su 5. Passi con la conseguenza: 3 su 5. Capisco a che cosa serve: sì.

---

## c51 Il turno di notte

### 1. A che cosa serve nella vita vera
Serve a fare il manutentore di notte: capire in fretta che cosa si è fermato, ripararlo con il robot senza potenza (portella aperta) e ripartire con riarmo e Marcia. Lo capisco bene.

### 2. Passo per passo
I passi del banco sono vuoti nel file (non c'è nessun elenco). Non ho passi da contare.

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice |
|---|---|---|---|---|
| - | (nessun passo nel file) | - | - | - |

### 3. Parole che non ho capito
- "LED del finecorsa" (è un LED sul sensore? non l'ho mai visto).
- "reparto", "manutentore di turno" (si capisce).
- "alimentato" riferito al robot: ok.

### 4. Domande che mi restano
- Aprire la portella toglie potenza al robot, ma nei livelli prima si diceva: sezionare, lucchetto, verificare l'assenza di tensione. Qui basta la portella? Se un altro la richiude e preme il riarmo mentre ho le mani dentro?
- Dice "il PLC ha perso la marcia": allora riparte da solo? No, ma non vedo dove si ricorda.
- Nei passi del banco manca tutto: devo scoprire io che cosa fare, e il rischio di sbagliare l'ordine (riparare con robot alimentato) è "l'errore più pericoloso": come lo verifica il gioco?

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c25 Il fungo a due canali | 8 | 7 | 3 | sì | 4 |
| c26 Il relè di sicurezza | 15 | 14 | 3 | sì | 6 |
| c27 Portella e barriera | 19 | 18 | 5 | sì | 5 |
| c33 Il sensore 4-20 mA | 4 | 3 | 2 | sì | 4 |
| c34 Il variatore | 2 | 1 | 1 | sì | 4 |
| c35 Il serbatoio | 2 | 2 | 2 | sì | 4 |
| c36 Il PID | 1 | 1 | 1 | sì | 4 |
| c37 Il pannello operatore | 3 | 3 | 1 | sì | 5 |
| c43 La linea | 3 | 3 | 1 | sì | 4 |
| c44 Gestione guasti | 0 | 0 | 0 | sì | 4 |
| c45 La fabbrica | 5 | 5 | 3 | sì | 5 |
| c51 Il turno di notte | 0 | 0 | 0 | sì | 3 |
