# Modulo 5, allievo finto sulle lezioni riscritte

Convenzioni: "Dai corrente", "Prova", "Guarda", "Apri la finestra" e "Controlla" stanno nelle tabelle ma non nei conteggi.
Per i ritorni al neutro o al negativo accetto "deve tornare, altrimenti il circuito è aperto" (lo so dai livelli prima).

---

## c47 - Il videocitofono

### 1. A che cosa serve nella vita vera
Serve a far suonare e aprire il portone da dentro casa senza mettere i 230 V sulla pulsantiera, che la tocca chiunque. Il trasformatore abbassa a 12 V e separa i due lati. Chiamata e apriporta sono due circuiti uguali messi in parallelo.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del primario | Il trasformatore deve essere alimentato dalla rete per ricavare i 12 V (so già che un carico vuole fase e neutro) | NON LO SO | Perché il portone è a bassissima tensione |
| 2 | Neutro al morsetto 2 del primario | Il primario ha bisogno di fase e neutro, come ogni carico | NON LO SO (deduco: senza ritorno non c'è circuito) | Il trasformatore ha due lati |
| 3 | Morsetto 3 del secondario al morsetto 3 del tasto di chiamata | I tasti del portone devono stare sul lato a 12 V e non sulla rete, perché li tocca chiunque | Sulla pulsantiera arrivano i 230 V: chi la tocca rischia la vita | Perché il portone è a bassissima tensione |
| 4 | Dal tasto alla suoneria | Il tasto fa suonare solo quando lo premi, perché chiude l'anello (valgono un po' meno come "perché": è la funzione del tasto) | NON LO SO (se sbaglio posto al tasto non so che cosa succede) | Un anello per ogni funzione |
| 5 | Morsetto 4 del secondario all'altro morsetto della suoneria | La corrente deve tornare al trasformatore, altrimenti l'anello non si chiude | L'anello resta aperto e la suoneria non suona | Un anello per ogni funzione |
| 6 | Morsetto 3 del secondario al tasto apriporta | Il secondo ramo parte dagli stessi morsetti, in parallelo, così i due funzionano indipendentemente | Se fossero in serie uno impedirebbe all'altro di funzionare | Un anello per ogni funzione; Domanda 2 |
| 7 | Dal tasto apriporta alla serratura | Il tasto fa aprire la serratura solo quando lo premi (stessa ragione del passo 4) | NON LO SO | I pezzi (la bobina tira il fermo) |
| 8 | Morsetto 4 del secondario all'altro morsetto della serratura | Ritorno: l'anello deve chiudersi | L'anello è aperto, la serratura non si sblocca | Un anello per ogni funzione |
| 9 | Dai corrente | - | - | Guarda come si fa |
| 10 | Prova la chiamata | - | - | - |

### 3. Parole che non ho capito
- "bassissima tensione": dice "tensione bassissima e sicura, per esempio 12 V", ma non dice fino a quanto è bassissima e perché 12 V è sicuro.
- "utilizzatore" (usato nell'anello come se lo sapessi: è il carico?).
- "nucleo" e "campo magnetico": usati per spiegare come passa l'energia, mai spiegati.
- "trasformatore di sicurezza", "reggono un corto sul secondario".
- "bus" e "segnale digitale" (nell'ultima slide, almeno dice che è un'altra cosa).
- "pulsantiera", "ramo".

### 4. Domande che mi restano
- Perché proprio 12 V e non 24 o 6?
- Se tra primario e secondario non c'è nessun filo, perché la corrente passa lo stesso? ("attraverso il campo magnetico" non l'ho capito.)
- Perché il differenziale non protegge la persona che tocca una pulsantiera a 230 V? La risposta dice solo che nel caso della serratura non scatta.
- Il tasto di chiamata ha morsetti 3 e 4: devo rispettare quale è l'ingresso e quale l'uscita, o sono uguali?

### 5. Conteggio
Passi con il perché vero: 8 su 8 (il 4 e il 7 sono deboli: dicono a che serve il tasto, non perché è fatto così). Passi con la conseguenza: 4 su 8 (3, 5, 6, 8). Capisco a che cosa serve: sì.

---

## c48 - Il sensore e l'attuatore

### 1. A che cosa serve nella vita vera
Accendere la luce di un corridoio da sola, solo se è buio e passa qualcuno, e tenerla accesa un po' dopo che sei passato. I sensori hanno contatti piccoli, quindi comandano un relè temporizzato che porta la corrente della lampada.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al sensore di luce | Il sensore è un interruttore, quindi lo metto sulla fase come ho imparato (la lezione dice solo "inizio del comando") | NON LO SO | Un interruttore che si comanda da solo |
| 2 | Sensore di luce al sensore di presenza, in serie | Servono tutte e due le condizioni insieme, buio E presenza | Se li metto in parallelo la luce si accende anche di giorno quando passa qualcuno | Due condizioni insieme: la serie; Domanda 1 |
| 3 | Sensore di presenza alla bobina A1 | I sensori comandano la bobina e non la lampada, perché i loro contatti sono piccoli | Se ci passasse tutto il carico i contatti si rovinerebbero presto | Perché la lampada non passa dal sensore |
| 4 | Neutro ad A2 | La bobina è un carico e vuole fase e neutro | Il comando resta aperto, la bobina non si eccita | I pezzi |
| 5 | Fase al contatto 1 del temporizzatore | Il contatto è libero da tensione: la fase gliela porto io, ed è un circuito di potenza separato da quello di comando | Il contatto non porta nessuna tensione alla lampada (deduco, la lezione non lo scrive per questo caso) | Il contatto è "libero da tensione" |
| 6 | Contatto 2 alla lampada | SOLO IL COME | NON LO SO | - |
| 7 | Neutro alla lampada | Il neutro deve tornare, altrimenti il circuito è aperto | La lampada non si accende | - |
| 8 | Dai corrente | - | - | - |
| 9 | Prova i sensori | - | - | Il temporizzatore |

### 3. Parole che non ho capito
- "libero da tensione" (lo spiega, ma dopo averlo detto; ho capito che significa "non porta una tensione sua").
- "attuatore" (lo spiega come "qui un relè temporizzato"; in generale non so).
- "temporizzatore" (so il relè temporizzato dai livelli prima).
- "c18" (rimanda a un livello che non ricordo come numero).

### 4. Domande che mi restano
- Dove e come si imposta il tempo di 10 secondi? "Sul pezzo", ma come?
- L'ordine dei due sensori in serie conta, o posso scambiarli?
- Se il contatto del temporizzatore resta chiuso 10 secondi dopo che la bobina perde tensione, a riposo il contatto 1-2 è aperto? Non c'è scritto.
- Perché 10 secondi e non di più, nella vita vera?

### 5. Conteggio
Passi con il perché vero: 6 su 7. Passi con la conseguenza: 5 su 7 (2, 3, 4, 5, 7; il 4, il 5 e il 7 sono dedotti). Capisco a che cosa serve: sì.

---

## c49 - La casa col PLC

### 1. A che cosa serve nella vita vera
Fare "scene": un tasto cambia più luci insieme. Con il PLC una scena nuova si scrive nel programma e non si cabla.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Gradino Torno: Set su Q0 e Set su Q1 | Le luci devono restare accese anche quando rilascio il tasto, e solo Set ricorda | Con la bobina semplice la luce si spegne appena il tasto torna a 0 | Perché Set e Reset; Domanda 1 |
| 2 | Gradino Cena: Reset su Q0 e Set su Q1 | Cena deve spegnere l'ingresso e lasciare il soggiorno acceso, e restare così a tasto rilasciato | NON LO SO per Cena (deduco lo stesso errore di Torno) | La tabella delle scene |
| 3 | Gradino Esco: Reset su Q0 e Reset su Q1, per ultimo | Il PLC legge dall'alto in basso e vince l'ultimo: Esco in fondo ha la precedenza | Se Esco non è in fondo, premendo Esco e Torno insieme le luci restano accese | Il programma gradino per gradino; Domanda 2 |
| 4 | Prova le scene | - | - | - |

### 3. Parole che non ho capito
- "scena" (spiegata subito, bene).
- "gradino" e "bobina" nel PLC (la bobina è la parte a destra; dalla lezione sul ladder lo so).
- "contatto" Torno (I1): un tasto è un contatto nel programma?

### 4. Domande che mi restano
- Nel passo 2 c'è scritto "il soggiorno resta acceso", ma la tabella dice "accesa (anche se era spenta)". Resta com'è o si accende? Per questo c'è il Set.
- Chi decide che Esco vince su Torno? La lezione dice "è una scelta di chi scrive": su quale base si sceglie nella vita vera?
- Se manca la corrente e il PLC riparte da zero, le luci come sono dopo?

### 5. Conteggio
Passi con il perché vero: 3 su 3. Passi con la conseguenza: 2 su 3 (1, 3). Capisco a che cosa serve: sì.

---

## c50 - Allarme fumo e allagamento

### 1. A che cosa serve nella vita vera
Un allarme che si ricorda: se il fumo passa, la sirena continua e qualcuno sa che c'è stato. Si ferma solo con la tacitazione, e se il pericolo c'è ancora riparte.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al tasto di tacitazione | Sta in testa a tutto, così premendolo si toglie la fase a sensori e memoria insieme | NON LO SO (la lezione non dice che cosa succede se la tacitazione sta altrove) | La tacitazione |
| 2 | Tacitazione al rilevatore di fumo | SOLO IL COME ("porta la fase alla bobina") | NON LO SO | - |
| 3 | Tacitazione alla sonda | Sono in parallelo, basta uno dei due per l'allarme | In serie servirebbero tutti e due (lo so da c48) | Un allarme che si ricorda; c48 |
| 4 | Tacitazione al contatto 11 | L'autoritenuta deve prendere la fase da qui perché premendo la tacitazione si apra anch'essa | NON LO SO | La tacitazione |
| 5 | Rilevatore alla bobina A1 | SOLO IL COME | NON LO SO | - |
| 6 | Sonda alla bobina A1 | Parallelo al rilevatore, basta uno dei due | Come il passo 3 | Un allarme che si ricorda |
| 7 | Contatto 14 alla bobina A1 (autoritenuta) | Dà la memoria: senza, la sirena seguirebbe il sensore e l'evento sparirebbe senza che nessuno lo sappia | La sirena si spegne appena il fumo sparisce | Il relè che si tiene da solo; Domanda 1 |
| 8 | Neutro ad A2 | La bobina vuole fase e neutro | Il circuito della bobina è aperto | - |
| 9 | Da A1 alla sirena | La sirena deve seguire la memoria (la bobina) e non il sensore | Se seguisse il sensore si spegnerebbe appena il fumo si dirada | Un allarme che si ricorda |
| 10 | Neutro alla sirena | Il neutro deve tornare | La sirena non suona | - |
| 11 | Dai corrente | - | - | - |
| 12 | Prova l'allarme | - | - | - |

### 3. Parole che non ho capito
- "tacitazione" (viene spiegata solo con quello che fa, ma come parola nuova non l'ho capita subito).
- "sonda di allagamento" (non dice come funziona, solo che chiude un contatto).
- "diseccita" (so eccitare, lo deduco).
- "centrale" (nella slide sui sistemi veri).
- "autoritenuta" (la so dai livelli prima).

### 4. Domande che mi restano
- La sirena sta sulla linea della bobina, ma prima mi avevate detto che il carico va sul contatto del relè e la fase la porto io. Perché qui la sirena non è sul contatto 14?
- Una sirena può stare in parallelo a una bobina senza problemi?
- Perché il tasto di tacitazione è NC e non NA? (Dice "premendolo si toglie la fase", ma non spiega perché non lo faccio con un NA sulla bobina.)
- Posso tacitare la sirena se il fumo c'è ancora e non voglio che riparta? (La lezione dice di no.)

### 5. Conteggio
Passi con il perché vero: 8 su 10 (2 e 5 solo il come). Passi con la conseguenza: 6 su 10 (3, 6, 7, 8, 9, 10; il 3, l'8 e il 10 li deduco da c48 e dai livelli prima). Capisco a che cosa serve: sì.

---

## c38 - La corrente continua

### 1. A che cosa serve nella vita vera
Collegare batterie in serie per arrivare alla tensione che serve al carico, e rispettare il verso (+ e -) dove conta, come per un LED. Il cortocircuito su una batteria è pericoloso.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | + della batteria 1 al - della batteria 2 (serie) | Le tensioni si sommano e la lampada da 12 V ha bisogno di 12 V | In parallelo la lampada si accende appena (6 V) | Serie: le tensioni si sommano; Domanda 1 |
| 2 | + libero della batteria 2 all'interruttore, rosso | LA LEZIONE NON LO DICE (dice solo "di solito sul positivo, come in alternata sulla fase", ma non dice perché) | NON LO SO | La polarità e il LED |
| 3 | Interruttore alla lampada e lampada al - della batteria 1 | La corrente deve tornare al negativo per chiudere il giro | Il circuito resta aperto, la lampada non si accende | Alternata e continua |
| 4 | LED in parallelo: anodo al positivo, catodo al negativo | Il LED conduce solo dall'anodo al catodo; in parallelo riceve la stessa tensione della lampada e si accende con lei | Al contrario il LED resta spento | La polarità e il LED |
| 5 | Accendi | - | - | - |

### 3. Parole che non ho capito
- "diodo" (spiegato come "lascia passare in un solo verso"), "anodo" e "catodo" (spiegati, ma con A e K che non ricordo quale è quale).
- "resistenza interna" della batteria, "fusibile" (usato prima di spiegare a che cosa serve in una batteria; poi lo spiega).
- "incandescenza".
- "cinquanta volte al secondo" (non so che unità).
- "polarità" (la capisco dal contesto).

### 4. Domande che mi restano
- Perché l'interruttore sta sul positivo e non sul negativo? Funzionerebbe lo stesso? (In alternata so perché sta sulla fase, qui non lo dice.)
- Quali dispositivi "si rompono" se li collego al contrario?
- Perché in alternata fase e neutro non hanno un più e un meno, se lì uno è "la fase" e l'altro "il neutro"?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 3 su 4 (1, 3, 4). Capisco a che cosa serve: sì.

---

## c39 - Il pannello fotovoltaico

### 1. A che cosa serve nella vita vera
Produrre corrente continua dal sole e darla all'inverter, che la trasforma in alternata per la casa. L'inverter lavora solo in una finestra di tensione (30-60 V), quindi scelgo in serie il numero giusto di pannelli.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | + del pannello 1 al + dell'inverter | SOLO IL COME (regola del + libero della catena) | NON LO SO | - |
| 2 | - del pannello 1 al + del pannello 2 (serie) | Le tensioni si sommano: 44 V sono dentro la finestra 30-60 V | Un pannello o due in parallelo (22 V): l'inverter non parte; tre in serie (66 V): si brucia | Serie e parallelo: quanti pannelli e come |
| 3 | - del pannello 2 al - dell'inverter | La corrente deve tornare al negativo | Il circuito resta aperto | - |
| 4 | Guarda la giornata | - | - | - |

### 3. Parole che non ho capito
- "inverter" (spiegato bene: continua in alternata).
- "sezionatore" (non spiegato).
- "stringa" (spiegata nella slide, dopo averla usata nel titolo).
- "kilowatt (kW)" e "campana": kW usato qui, spiegato solo nel livello dopo.
- "margine" e "con il freddo la tensione sale".

### 4. Domande che mi restano
- Il terzo pannello resta fuori: perché non metterlo in parallelo per avere più corrente? A che serve avere più corrente, nella vita vera?
- Perché l'inverter si brucia sopra 60 V e non si limita da solo?
- Se un pannello illuminato è sempre in tensione, come si lavora sui fili in sicurezza?

### 5. Conteggio
Passi con il perché vero: 2 su 3. Passi con la conseguenza: 2 su 3 (2, 3). Capisco a che cosa serve: sì.

---

## c40 - Il contatore e lo scambio

### 1. A che cosa serve nella vita vera
Usare in casa l'energia prodotta dai pannelli (autoconsumo) invece di regalarla alla rete, accendendo lo scaldabagno quando c'è eccedenza.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Confronto MW0 minore di -2200, Set su Q0 | Lo scaldabagno prende 2000 W e restano 200 W di scorta; l'energia immessa si paga poco, conviene usarla | Se le due soglie fossero uguali, lo scaldabagno si spegnerebbe subito e ripartirebbe di continuo | Due soglie: l'isteresi |
| 2 | Confronto MW0 maggiore di 300, Reset su Q0 | Quando la casa preleva non c'è più eccedenza; 300 W e non zero per non spegnerlo a ogni piccolo prelievo | Stessa soglia per accendere e spegnere: ripartenze continue | Due soglie: l'isteresi |
| 3 | Guarda la giornata | - | - | - |

### 3. Parole che non ho capito
- "bidirezionale" (spiegata), "autoconsumo" (spiegata), "isteresi" (spiegata).
- "kilowattora": kWh usato, ma non so ancora che differenza c'è con kW (arriva dopo).
- "parola MW0" (spiegata come numero intero).
- "scorta" dei 200 W: scorta contro che cosa?

### 4. Domande che mi restano
- Perché serve una scorta di 200 W e non basta -2000?
- Con lo scaldabagno acceso e la casa che preleva 200 W dalla rete (tra 0 e 300), resta acceso: lo pago io. Va bene?
- Perché il segno è negativo quando immetto? E se mi confondo con i segni nel programma?

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 2 su 2. Capisco a che cosa serve: sì.

---

## c41 - L'accumulo

### 1. A che cosa serve nella vita vera
Spostare l'energia dal giorno alla sera: la batteria si carica con l'eccedenza dei pannelli e restituisce quando la casa consuma. Così si preleva meno dalla rete.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase all'interruttore, poi alla spia "Batteria collegata", altro capo al neutro | La spia segnala che la batteria è in servizio (a che cosa serve la spia, non perché è cablata così) | NON LO SO | Chi comanda la batteria |
| 2 | Collega la batteria | - | - | - |
| 3 | Controlla la giornata | - | - | - |

### 3. Parole che non ho capito
- "accumulo", "carica in percentuale", "immette".
- "kWh" e "kW" (spiegati bene nella slide, con la tanica).
- "mettere in servizio batteria e inverter" (che cosa significa fisicamente?).

### 4. Domande che mi restano
- Cablo solo una spia alla fase: dov'è la batteria? Non vedo che cosa metta davvero in servizio l'interruttore.
- Cosa succede se l'interruttore è aperto: la batteria non fa niente, o resta collegata?
- Perché 3 kW come massimo?

### 5. Conteggio
Passi con il perché vero: 1 su 1 (debole: dice a che serve la spia). Passi con la conseguenza: 0 su 1. Capisco a che cosa serve: sì (l'accumulo; il cablaggio del banco mi resta poco chiaro).

---

## c42 - La colonnina

### 1. A che cosa serve nella vita vera
Ricaricare l'auto senza far staccare il contatore: la colonnina parte quando la casa ha margine e si ferma prima del limite (gestione del carico).

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Confronto MW0 minore di 500, Set su Q0 | Se la casa preleva poco c'è margine per 3,7 kW (500 + 3700 resta sotto 4500) | Con soglie troppo vicine, staccata la colonnina la casa sembra avere margine e riparte subito | Distanza tra le due soglie |
| 2 | Confronto MW0 maggiore di 4300, Reset su Q0 | Stacca prima che il contatore scatti a 4500 W | Il contatore stacca tutta la casa, che resta al buio | Distanza tra le due soglie; sintesi |
| 3 | Guarda la serata | - | - | - |

### 3. Parole che non ho capito
- "gestione del carico" (spiegata).
- "potenza massima del contratto".
- "assorbe" (lo deduco).

### 4. Domande che mi restano
- Perché 4300 e non 4400? La scorta di 200 W da che cosa dipende?
- Il contatore aspetta 20 secondi: perché non lasciare la colonnina accesa fino a 19 secondi di eccesso?
- Se i consumi salgono mentre la colonnina è accesa e il PLC si blocca, nessuno mi avvisa?

### 5. Conteggio
Passi con il perché vero: 2 su 2. Passi con la conseguenza: 2 su 2. Capisco a che cosa serve: sì.

---

## c53 - La gestione dei carichi

### 1. A che cosa serve nella vita vera
Far stare insieme più carichi sotto il limite del contatore (6 kW): si staccano quelli che possono aspettare e si riattaccano quando il margine dura, senza far scattare il contatore e senza pendolare.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | MW0 maggiore di 5800 E Q0, Reset su Q0 (stacca la colonnina) | La colonnina è il carico che può aspettare, nessuno se ne accorge | Se si stacca prima la pompa la casa resta al freddo mentre l'auto carica | La priorità; Domanda 2 |
| 2 | MW0 maggiore di 5800 E Q0 spenta (NC), Reset su Q1 (stacca la pompa) | LA LEZIONE NON LO DICE in modo chiaro: il passo dice "se non basta", ma la slide dice che nello stesso giro il gradino vede la colonnina già spenta e le stacca subito tutte e due | NON LO SO | La priorità; Il programma gradino per gradino |
| 3 | MW0 minore di 4200 con TON 30 s (T1); poi T1 con Set su Q1 | 4200 + 1500 resta sotto 5800, e il ritardo evita il pendolamento | Con una soglia più alta la pompa riattaccata riporta sopra 5800 e la stacchi subito; senza ritardo pendolano | Soglie diverse per staccare e per riattaccare; Il ritardo; Domanda 1 |
| 4 | MW0 minore di 2000 E Q1 accesa, TON 30 s (T2); poi T2 con Set su Q0 | 2000 + 3700 resta sotto 5800; riparte solo quando la pompa è già in marcia (priorità al ritorno) | Come il passo 3 | Soglie diverse; La priorità |
| 5 | Guarda la serata | - | - | - |

### 3. Parole che non ho capito
- "pendolamento" / "pendolare" (spiegato con l'esempio, ma come parola è nuova).
- "inerzia" (spiegata con "la casa è calda").
- "distacco" / "riattacco".
- "TON T1" (so il TON da PLC), "scaduto".
- "gradino già scritto" che legge in MW0 (da dove arriva il valore?).

### 4. Domande che mi restano
- Se in un solo giro si staccano subito tutte e due, a che serve la priorità allo stacco? La tabella dice "la colonnina per prima" e poi "si staccano insieme". Non capisco quale delle due è vera.
- A che cosa serve allora la condizione "Q0 spenta" nel gradino della pompa, se comunque la pompa si stacca sempre?
- Perché 30 secondi di margine e non 10 o 60?
- Il forno non lo posso staccare: se forno + resto casa fa già più di 6 kW, che cosa fa il PLC?

### 5. Conteggio
Passi con il perché vero: 3 su 4. Passi con la conseguenza: 3 su 4 (1, 3, 4). Capisco a che cosa serve: sì (il passo 2 e la priorità allo stacco mi restano confusi).

---

## c54 - Il clima per zone

### 1. A che cosa serve nella vita vera
Scaldare ogni stanza alla sua temperatura con una sola pompa di calore, e far lavorare la pompa solo quando almeno una valvola è aperta, per non guastarla.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | MW0 minore di 20 con Set su Q1; MW0 maggiore di 22 con Reset su Q1 | Due soglie diverse (isteresi) evitano che la valvola apra e chiuda di continuo | Con una sola soglia (21 °C) apre a 20,9 e chiude a 21,1 di continuo | Il termostato con isteresi |
| 2 | I0 con Reset su Q1, dopo il Set | A finestra aperta il calore esce; vince l'ultimo gradino, quindi il Reset deve stare dopo il Set | Se sta prima del Set, con la stanza fredda la valvola si riaprirebbe a finestra aperta | La finestra aperta |
| 3 | Come il soggiorno con MW1 e Q2 | Stessa ragione del passo 1 (la lezione non lo ripete) | Come il passo 1 | Il termostato con isteresi |
| 4 | Bobina Q0 con "Q1 oppure Q2" in parallelo | La pompa parte solo se almeno una valvola è aperta, altrimenti gira a vuoto | Con tutte le valvole chiuse la pompa si surriscalda e dopo un minuto si guasta | La pompa non deve girare a vuoto; Domanda 2 |
| 5 | Dai corrente | - | - | - |
| 6 | Apri la finestra | - | - | - |
| 7 | Guarda la serata | - | - | - |

### 3. Parole che non ho capito
- "pompa di calore" (non è mai spiegata: solo "produce il calore").
- "ingresso analogico", "sonda", "valvola di zona" (spiegata nella tabella).
- "isteresi" (la so da c40), "a vuoto".

### 4. Domande che mi restano
- Perché per le valvole si usa Set e Reset e per la pompa una bobina semplice? Lo deduco (la pompa segue la condizione), ma non è scritto.
- Perché la finestra aperta ha il gradino dopo e non prima? (Lo spiega, ma devo ricordare la regola dell'ultimo gradino.)
- La camera non ha una finestra con contatto: nella vita vera ce l'ha?
- Perché 20 e 22 gradi e non 19 e 23?

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 4 su 4. Capisco a che cosa serve: sì.

---

## c55 - Una sera d'inverno

### 1. A che cosa serve nella vita vera
Collaudare una casa intelligente guardandola lavorare per una serata intera prima di consegnarla, perché le regole del PLC contano quanto i fili. Ho capito anche che il misuratore ha un fondo scala e che una soglia oltre il fondo scala non scatta mai.

### 2. Passo per passo
Nessun passo del banco elencato (la sezione è vuota). Non so che cosa devo cablare o scrivere: leggo solo "chiudi il generale, guarda, leggi il pannello, correggi, consegna".

| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| - | (nessun passo) | - | - | - |

### 3. Parole che non ho capito
- "il generale" (interruttore generale, non spiegato).
- "fondo scala", "4-20 mA" (la slide li spiega, ma 4-20 mA come segnale non so che cosa sia).
- "pannello a muro", "consegnare".
- "riarmare il contatore dal pulsante" (lo nomina ma non so come).

### 4. Domande che mi restano
- Dove correggo il programma se la serata va male? Non c'è nessun passo.
- Perché la tabella dice che si stacca prima l'auto "e poi" la pompa, se in c53 si staccano nello stesso giro?
- La sonda del bagno: perché prima si asciuga e poi si tacita? (La slide risponde con "la sirena ripartirebbe", ma lo so già da c50.)

### 5. Conteggio
Passi con il perché vero: 0 su 0 (nessun passo). Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì.

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c47 videocitofono | 8 | 8 su 8 (4 e 7 deboli) | 4 su 8 | sì | 4 |
| c48 luce automatica | 7 | 6 su 7 | 5 su 7 | sì | 4 |
| c49 casa col PLC | 3 | 3 su 3 | 2 su 3 | sì | 3 |
| c50 allarme | 10 | 8 su 10 | 6 su 10 | sì | 4 |
| c38 continua | 4 | 3 su 4 | 3 su 4 | sì | 3 |
| c39 fotovoltaico | 3 | 2 su 3 | 2 su 3 | sì | 3 |
| c40 contatore | 2 | 2 su 2 | 2 su 2 | sì | 3 |
| c41 accumulo | 1 | 1 su 1 (debole) | 0 su 1 | sì (il cablaggio poco) | 3 |
| c42 colonnina | 2 | 2 su 2 | 2 su 2 | sì | 3 |
| c53 carichi | 4 | 3 su 4 | 3 su 4 | sì (priorità confusa) | 4 |
| c54 clima zone | 4 | 4 su 4 | 4 su 4 | sì | 4 |
| c55 sera d'inverno | 0 (nessun passo) | - | - | sì | 3 |
