# Modulo 2, allievo finto, seconda prova (17 ottobre 2026)

Regola che ho usato per la colonna "Che cosa succede": la scrivo solo se la lezione (o i livelli di prima) dice cosa succede proprio con quell'errore. "Se manca un filo la luce resta spenta" da solo non lo conto, perché vale per qualunque filo.

---

## Livello c17-multimetro: Il multimetro

### 1. A che cosa serve nella vita vera
Serve a trovare un guasto senza andare a tentativi, e a essere sicuri prima di lavorare che nell'impianto non ci sia tensione. Con un puntale nero sul neutro e il rosso che avanza lungo la fase, vedo dove la tensione sparisce. La continuità invece mi dice se un filo o un interruttore è intero.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 dell'interruttore | L'interruttore va sulla fase, non sul neutro (livello "Punto luce interrotto") | Se l'interruttore fosse sul neutro la luce si spegne ma la fase resta sul portalampada: pericoloso (livelli prima) | - (è nei livelli di prima) |
| 2 | Dal 2 dell'interruttore alla lampada | SOLO IL COME | NON LO SO | - |
| 3 | Neutro alla lampada | Il neutro va direttamente alla lampada, senza interruttore (livelli prima) | NON LO SO | - |
| 4 | Dai corrente (levetta) | La tensione si misura a impianto acceso | NON LO SO | "Due misure: tensione e continuità" |
| 5 | Misura tensione tra 1 (rosso) e neutro (nero): 230 V | Per sapere se la fase arriva fino all'interruttore | Se leggo 0 V, l'interruzione è prima di quel punto | "Come si cerca un guasto" |
| 6 | Puntali su 1 e 2 con interruttore aperto: 230 V | Per vedere che anche a luce spenta c'è tensione | Si può prendere la scossa anche con la luce spenta | Domanda "Metto i puntali sui due morsetti" |
| 7 | Levetta giù, interruttore chiuso, misura Continuità su 1 e 2 | Per sapere se l'interruttore chiuso chiude davvero | Se misuro la continuità con l'impianto in tensione la lettura non vale e lo strumento si può rovinare | "Due misure: tensione e continuità" |

### 3. Parole che non ho capito
- "A valle" (usato nella spiegazione dopo la domanda, spiegato solo nel livello c07).
- "Resistenza" (la continuità "legge la sua resistenza"): non so che cos'è né come si legge.
- "Circuito aperto" come lettura del display: che numero o che scritta compare?
- "Display", "scelgo la misura": dove si sceglie lo strumento nel banco non è scritto.

### 4. Domande che mi restano
- Nei livelli di prima c'è scritto che a luce spenta il tratto dopo l'interruttore non è in tensione. Qui invece tra 1 e 2 leggo 230 V. Quale delle due è giusta? Se tocco il morsetto 2 prendo la scossa oppure no?
- Perché il morsetto 2 "prende il neutro attraverso la lampada" se la lampada è spenta? La corrente non dovrebbe passare solo se il giro è chiuso?
- Nella continuità, la lampada collegata al morsetto 2 non cambia la lettura? Lo strumento non "vede" anche lei?
- "Si toglie tensione dal quadro": come si fa nel gioco? Non è un passo del banco.

### 5. Conteggio
Passi con il perché vero: 6 su 7. Passi con la conseguenza: 4 su 7. Capisco a che cosa serve: sì.

---

## Livello c18-rele: Il relè

### 1. A che cosa serve nella vita vera
Un circuito piccolo (comando) decide e un altro (potenza) esegue: un pulsante piccolo che accende un motore grande, un termostato che accende una caldaia. Con il contatto di scambio una sola bobina dà due segnali opposti, come le spie verde e rossa di un quadro.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 dell'interruttore di comando | Il comando sta sulla fase e decide quando la bobina si eccita | NON LO SO | "Perché ogni filo" (A1) |
| 2 | Dal 2 dell'interruttore ad A1 | Il comando porta la fase alla bobina | NON LO SO | "Perché ogni filo" |
| 3 | A2 al neutro | La bobina è un carico: senza ritorno non si eccita | Il relè non scatta mai | "Perché ogni filo" (A2) |
| 4 | Fase al comune 11 | Il contatto non ha tensione sua | Nessuna lampada si accende | "Perché ogni filo" (11) |
| 5 | 12 alla lampada verde | A riposo la verde dice "comando spento" | NON LO SO | "Perché ogni filo" (12) |
| 6 | 14 alla lampada rossa | A bobina eccitata la rossa dice "comando acceso" | Se la rossa fosse sul 12 si accenderebbe insieme alla verde | "Perché ogni filo" (14) |
| 7 | Neutro alla lampada verde | Ogni lampada ha bisogno del suo giro | NON LO SO | "Perché ogni filo" (Lampade) |
| 8 | Neutro alla lampada rossa | Idem | NON LO SO | "Perché ogni filo" (Lampade) |
| 9 | Dai corrente, chiudi e apri il comando | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Eccitata" (spiegata solo tra parentesi, e senza dire che cosa succede nel filo).
- "Carico" (nel "già so" non c'è; la lezione lo usa come se lo sapessi).
- "Relè ad impulsi", "contattore", "PLC", "centralina", "termostato": nominati senza spiegazione.
- "Comune", "NC", "NA": spiegati, ma "a riposo" non è definito.

### 4. Domande che mi restano
- Si dice che i due circuiti "non si toccano". Ma nei passi la fase è la stessa per il comando e per il contatto, e il neutro pure. In che cosa sono separati?
- Se i due circuiti sono tutti e due a 230 V e prendono la stessa fase, a che cosa serve il relè? Basterebbe l'interruttore diretto.
- Come si prendono due fili dalla stessa FASE (passi 1 e 4)? Vanno tutti e due sullo stesso morsetto?
- Quanta corrente può portare il contatto? (Si parla di motori grandi.)

### 5. Conteggio
Passi con il perché vero: 8 su 9. Passi con la conseguenza: 3 su 9. Capisco a che cosa serve: sì.

---

## Livello c07-presa-comandata: La presa comandata

### 1. A che cosa serve nella vita vera
Con un solo interruttore vicino alla porta accendo la luce e anche una lampada da tavolo attaccata alla presa, senza attraversare la stanza al buio.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 dell'interruttore | L'interruttore apre un solo filo, la fase | Se fosse sul neutro la luce si spegne ma la fase resta su presa e portalampada: rischio scossa | "L'interruttore sulla fase" |
| 2 | Dal 2 dell'interruttore a L della presa | La presa comandata riceve la fase dopo l'interruttore, e la fase va sempre su L così chi lavora dopo la trova al suo posto | NON LO SO | "Una presa che si accende dalla porta"; "La presa: fase, neutro e terra" |
| 3 | Dallo stesso 2 alla lampada | Un solo interruttore comanda più apparecchi se sta sulla fase prima che si divida | NON LO SO | Sintesi |
| 4 | Neutro a N della presa | Neutro su N per la regola, anche se funzionerebbe lo stesso | Polarità invertita: funziona ma presa cablata male (livello di prima) | "La presa: fase, neutro e terra" |
| 5 | Neutro alla lampada | Il neutro non passa dall'interruttore | NON LO SO | "Una presa che si accende dalla porta" |
| 6 | Terra a PE | Se l'involucro metallico va in guasto la corrente va a terra e non in chi lo tocca | Senza terra la corrente può passare in chi lo tocca | "La presa: fase, neutro e terra" |
| 7 | Dai corrente e prova l'interruttore | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "A valle" è spiegato qui ("dopo di lui"), ma non so se vale in tutti i circuiti o solo "nel verso dal quadro agli apparecchi".
- "Involucro", "guasto": quale guasto? Non è detto.
- "Alimentata/o": usato come se fosse ovvio.

### 4. Domande che mi restano
- La lezione dice che la fase si divide "a valle" dell'interruttore, ma la sintesi dice "prima che si divida". Sono la stessa cosa o no?
- Quando la corrente va a terra, dove va e perché non fa male a nessuno? Basta il filo giallo-verde da solo o ci vuole altro? (In questo livello non c'è il differenziale.)
- Perché la lampada ha i morsetti A e B nell'animazione e "un morsetto" nei passi?

### 5. Conteggio
Passi con il perché vero: 6 su 7. Passi con la conseguenza: 3 su 7. Capisco a che cosa serve: sì.

---

## Livello c08-rele-impulsi: Il relè ad impulsi

### 1. A che cosa serve nella vita vera
Accendere e spegnere la stessa luce da molti punti (corridoio con tante porte) con un pulsante per punto, senza invertitori e senza fili che corrono per tutto il corridoio.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 3 del primo pulsante | Ogni pulsante deve poter mandare l'impulso | NON LO SO | "Pulsanti in parallelo, mai in serie" (3) |
| 2 | Morsetti 3 in parallelo (due fili) | In parallelo ne basta uno premuto | In serie servirebbero tutti premuti e la luce non si accenderebbe mai | "Pulsanti in parallelo, mai in serie" |
| 3 | Morsetti 4 in parallelo (due fili) | Qualunque pulsante premuto porta la fase alla bobina | Idem | "Pulsanti in parallelo, mai in serie" (4) |
| 4 | Da un 4 ad A1 | Porta la fase alla bobina | NON LO SO | idem |
| 5 | A2 al neutro | La bobina è un carico, senza ritorno non cambia stato | Il relè non cambia mai stato | idem (A2) |
| 6 | Fase al morsetto 1 del relè | Il contatto non ha tensione sua | Senza fase la lampada non si accende (dal relè c18) | idem (1) |
| 7 | Dal 2 alla lampada | SOLO IL COME | NON LO SO | - |
| 8 | Neutro alla lampada | Ogni lampada ha il suo giro (livelli prima) | NON LO SO | - |
| 9 | Dai corrente, premi i pulsanti uno alla volta | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Impulso" (si capisce dal contesto, ma non è definito).
- "Cambia stato" e "ricorda": come fa un relè a ricordare non è spiegato.
- "Pulsanti uguali": uguali in che cosa?

### 4. Domande che mi restano
- Come fa il relè a ricordare lo stato? C'è una molla, un fermo? Se va via la corrente, la luce com'è quando torna?
- Il pulsante ha i morsetti 3 e 4: tra quali dei due si chiude il contatto? Non è detto.
- Perché la lezione non chiede il neutro ai pulsanti (solo fase)? Perché i pulsanti stanno sulla fase?
- Se un pulsante resta incastrato premuto cosa fa la luce?

### 5. Conteggio
Passi con il perché vero: 7 su 9. Passi con la conseguenza: 4 su 9. Capisco a che cosa serve: sì.

---

## Livello c09-luce-scale: La luce scale a tempo

### 1. A che cosa serve nella vita vera
La luce delle scale di un condominio si accende con un pulsante e si spegne da sola, così nessuno la lascia accesa e si risparmia energia. Con un pulsante per piano e tante lampade.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al 3 del primo pulsante | Il pulsante comanda la bobina e sta sulla fase (livelli prima) | NON LO SO | "Pulsanti in parallelo" |
| 2 | Morsetti 3 in parallelo | Basta premerne uno qualunque | In serie la luce non si accenderebbe mai (livello c08) | "Pulsanti in parallelo" |
| 3 | Morsetti 4 in parallelo | Idem | Idem | "Pulsanti in parallelo" |
| 4 | Dai 4 ad A1 | Il pulsante comanda la bobina, non le lampade | Se le lampade stessero sul pulsante resterebbero accese solo finché lo tieni premuto | "La luce che si spegne da sola" |
| 5 | A2 al neutro | La bobina è un carico (dal relè c18) | Non si eccita (c18) | - |
| 6 | Fase al morsetto 1 | Il contatto è solo un interruttore, la fase gliela porti tu | Senza non si accende nulla (c18) | "Il relè temporizzato" |
| 7 | Dal 2 alla prima lampada | Le lampade sono in parallelo sul contatto: si accendono insieme e se una si brucia le altre restano | NON LO SO | "Pulsanti in parallelo" |
| 8 | Dallo stesso 2 alla seconda | Idem | NON LO SO | idem |
| 9 | Neutro alla lampada 1 | Ogni lampada ha il suo giro | NON LO SO | - |
| 10 | Neutro alla lampada 2 | Idem | NON LO SO | - |
| 11 | Dai corrente, premi e osserva | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Relè temporizzato" e "orologio": come si imposta il tempo (20 secondi) non è detto.
- "Il tempo comincia a contare quando il pulsante viene rilasciato": non è chiaro che cosa significa "contare" per un pezzo elettrico.
- "Piccola corrente della bobina": piccola rispetto a che cosa?

### 4. Domande che mi restano
- In c18 senza tensione sulla bobina la molla riporta il contatto a riposo. Qui, dopo che rilascio il pulsante, la bobina non ha più tensione ma il contatto resta chiuso per 20 secondi. Come fa?
- Dove si imposta il tempo? Non c'è un passo.
- Perché è importante che i pulsanti portino "solo la piccola corrente della bobina"? Che cosa succederebbe se portassero quella delle lampade?
- Il passo 4 dice "dai morsetti 4 dei pulsanti" ma l'animazione parte da un solo 4: è uguale?

### 5. Conteggio
Passi con il perché vero: 10 su 11. Passi con la conseguenza: 5 su 11. Capisco a che cosa serve: sì.

---

## Livello c10-campanello: Il campanello e il trasformatore

### 1. A che cosa serve nella vita vera
Il pulsante del campanello sta fuori e lo toccano tutti, anche con le mani bagnate: quindi funziona a 12 V e il trasformatore abbassa i 230 V della rete e tiene separato il lato che si tocca.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del trasformatore | Il primario è il lato che va alla rete a 230 V | NON LO SO | "Il trasformatore" |
| 2 | Dal 2 al neutro | Il primario ha bisogno di due fili dalla rete (livelli prima) | NON LO SO | "Il trasformatore" |
| 3 | Dal 3 del secondario al pulsante (bianco) | Il pulsante sta sul secondario, in serie al campanello; il bianco dice che non è un filo della rete | NON LO SO | "Il campanello" |
| 4 | Dal 4 del pulsante al campanello | In serie: premuto chiude il giro a 12 V | NON LO SO | "Il campanello" |
| 5 | Dal 4 del secondario all'altro morsetto del campanello | Il giro a 12 V si chiude con due fili | NON LO SO | - |
| 6 | Dai corrente e premi il pulsante | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Primario" e "secondario": spiegati, ma non perché si chiamano così.
- "Nucleo di ferro", "per magnetismo": non so come l'energia passi senza fili.
- "Bassissima tensione": la lezione dà il numero (50 V) ma non dice chi lo decide.
- I morsetti si chiamano 1, 2, 3, 4 sia sul trasformatore sia sul pulsante: confondo.

### 4. Domande che mi restano
- Come fa il trasformatore ad avere 12 V e non, per esempio, 24 V? Che cosa decide il numero?
- Che cosa succede se per sbaglio collego la rete ai morsetti 3-4 invece che 1-2?
- Perché il campanello a 230 V "si brucia"? Non lo dice.
- Se i due lati sono separati, perché serve anche il colore diverso? Basta la separazione, non lo dice nessuno.

### 5. Conteggio
Passi con il perché vero: 5 su 6. Passi con la conseguenza: 0 su 6. Capisco a che cosa serve: sì.

---

## Livello c19-magnetotermico: Il magnetotermico

### 1. A che cosa serve nella vita vera
Protegge il cavo (non l'apparecchio) dal sovraccarico e dal cortocircuito, così non si scalda fino a rovinare l'isolante e a far partire un incendio dentro il muro. Se "salta sempre" si cerca il perché, non si monta uno più grosso.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del magnetotermico | LA LEZIONE NON LO DICE (perché la fase passi da lui prima degli interruttori) | NON LO SO | - |
| 2 | Dal 2 all'interruttore della stufa 1 | SOLO IL COME | NON LO SO | - |
| 3 | Dallo stesso 2 all'interruttore della stufa 2 | SOLO IL COME | NON LO SO | - |
| 4 | Dall'interruttore alla stufa 1 | SOLO IL COME | NON LO SO | - |
| 5 | Dall'interruttore alla stufa 2 | SOLO IL COME | NON LO SO | - |
| 6 | Neutro al N in alto | LA LEZIONE NON LO DICE (perché anche il neutro passa dal magnetotermico) | NON LO SO | - |
| 7 | Dal N in basso alla stufa 1 | SOLO IL COME | NON LO SO | - |
| 8 | Dallo stesso N alla stufa 2 | SOLO IL COME | NON LO SO | - |
| 9 | Scegli 10 A | Ib ≤ In ≤ Iz: 8,7 ≤ 10 ≤ 14,5; con 10 A scatta con due stufe prima che il cavo si scaldi | Con 16 A non scatta con due stufe e il cavo si scalda senza che nessuno lo sappia | "La regola dei tre numeri" |
| 10 | Prova una stufa: resta accesa | Per vedere che con una stufa (8,7 A) non scatta | NON LO SO | "La regola dei tre numeri" |
| 11 | Prova due stufe: scatta | Deve scattare prima che il cavo si scaldi | Se non scatta (16 A) il cavo si scalda | "La regola dei tre numeri"; domanda finale |
| 12 | Riarma il magnetotermico | SOLO IL COME | NON LO SO | - |

### 3. Parole che non ho capito
- "Sovraccarico" (usato nella sintesi, mai spiegato).
- "Cortocircuito": nei livelli di prima solo "fase sul neutro"; qui dice "corrente enorme" senza numeri.
- "In", "Ib", "Iz": le sigle sono spiegate, ma non da dove viene "In".
- "Norma": spiegata come "le regole" ma non dice quale.
- "Lamina", "picco".
- "N in alto" e "N in basso": non so quali sono.

### 4. Domande che mi restano
- Perché la fase e il neutro devono passare tutti e due dal magnetotermico, già in questo livello?
- Tra 1,13 e 1,45 volte In "la norma non dice che cosa deve fare". Quindi un 13 A o un 14 A su questo cavo andrebbe bene o no? Perché si sceglie 10 e non un altro numero? Quali portate esistono?
- Se il magnetotermico protegge il cavo e non l'apparecchio, chi protegge la stufa?
- Il valore di Ib con più apparecchi si somma? Con quali accese?
- 14,5 A è "valore del gioco": e nella realtà? Dipende da come è posato, ma non so come.

### 5. Conteggio
Passi con il perché vero: 3 su 12. Passi con la conseguenza: 2 su 12. Capisco a che cosa serve: sì.

---

## Livello c20-differenziale: Il differenziale

### 1. A che cosa serve nella vita vera
Protegge le persone: se una parte della corrente scappa verso terra (magari attraverso di me), il differenziale se ne accorge perché ne torna meno di quella che va, e stacca in una frazione di secondo. Il magnetotermico non se ne accorge, per questo in casa servono tutti e due.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 | Deve vedere la corrente che va | NON LO SO | "Il neutro deve passare dal differenziale" (tabella) |
| 2 | Neutro al N in alto | Deve vedere la corrente che torna | NON LO SO | idem |
| 3 | Dal 2 all'interruttore | SOLO IL COME | NON LO SO | - |
| 4 | Dall'interruttore allo scaldabagno | SOLO IL COME | NON LO SO | - |
| 5 | Neutro allo scaldabagno dal N in basso | La corrente deve tornare passando da lui | Se il neutro è preso dal quadro scatta appena accendi | tabella (N in basso) |
| 6 | Chiudi l'interruttore dello scaldabagno | SOLO IL COME | NON LO SO | - |
| 7 | Provoca la dispersione: 10 mA non scatta, 300 mA sì | Un po' di dispersione è normale e non deve scattare; un guasto vero sì | NON LO SO | tabella (Prova); "La soglia di 30 mA" |

### 3. Parole che non ho capito
- "Dispersione" (spiegata, ok), "soglia", "salvavita" (nome di casa).
- "A monte" non è usato, ma "N in alto / N in basso": non so che differenza c'è.
- "Il pannello dell'isolante": quale?
- "Scaldabagno": non è spiegato che cos'è nel gioco.

### 4. Domande che mi restano
- Si dice che una decina di mA nel corpo non fanno staccare la mano, ma il differenziale con 10 mA non scatta. Quindi in quel caso la persona resta attaccata?
- Cosa succede tra 15 e 30 mA? Scatta o no? Non è detto.
- Nei passi non c'è la terra, ma la lezione dice che terra e differenziale lavorano insieme. Dove va la dispersione dello scaldabagno senza terra?
- Perché l'obiettivo parla di 30 mA ma si prova con 10 e 300?
- Perché il neutro "preso prima" dà una dispersione? Cosa vuol dire "la vede come" se la corrente rientra comunque?

### 5. Conteggio
Passi con il perché vero: 4 su 7. Passi con la conseguenza: 1 su 7. Capisco a che cosa serve: sì.

---

## Livello c11-quadro: Il quadro di casa

### 1. A che cosa serve nella vita vera
Un differenziale all'ingresso protegge le persone su tutte le linee; poi un magnetotermico per ogni linea protegge il suo cavo. Con linee separate, se si guasta la luce le prese restano accese, e se devo lavorare su una linea apro solo quella.

### 2. Passo per passo
| N | Passo | Perché si fa così | Che cosa succede se lo sbaglio | Dove lo dice la lezione |
|---|---|---|---|---|
| 1 | Fase e neutro del quadro entrano nel differenziale in alto | Un solo differenziale all'ingresso protegge le persone su tutte le linee | NON LO SO | "Il quadro di una casa" |
| 2 | Fase e neutro si dividono nelle due linee | Se si guasta una linea, l'altra resta alimentata; una dispersione su qualunque linea fa scattare il differenziale | Se il neutro non passa dal differenziale, scatta anche senza dispersione | "I magnetotermici di linea"; Attenzione |
| 3 | La presa riceve fase e neutro dal suo magnetotermico, più la terra | La terra dà alla corrente di guasto una strada che non passa per le persone (livelli c07, c20) | Neutro preso prima del differenziale: scatta senza dispersione | Attenzione in "Se il differenziale non resta armato" |
| 4 | Prova il tasto di prova | Dentro ci sono parti che si possono bloccare, e il differenziale non lo dice da solo | NON LO SO (immagino che non scatterebbe, ma non è scritto) | "Il differenziale" |

### 3. Parole che non ho capito
- "Armato / riarmare": usato sempre, mai spiegato.
- "A valle": spiegato qui, ma "tasto di prova" come si preme non è detto.
- "Linea": è un cavo, un magnetotermico, o tutto insieme?

### 4. Domande che mi restano
- Il banco ha solo 4 passi, ma l'obiettivo e l'animazione parlano anche di interruttore e lampada (passi 7-9). Dove sono nei passi?
- Il magnetotermico apre anche il neutro, ma nei livelli di prima un interruttore sul neutro era un errore pericoloso. Perché qui va bene?
- Ogni quanto si preme il tasto di prova? "Ogni tanto" non è una regola.
- Come si sceglie la portata di ciascun magnetotermico qui? Non c'è.

### 5. Conteggio
Passi con il perché vero: 4 su 4. Passi con la conseguenza: 2 su 4. Capisco a che cosa serve: sì.

---

## Livello c23-appartamento-notte: L'appartamento di notte

### 1. A che cosa serve nella vita vera
A trovare, di notte, quale linea disperde verso terra quando il differenziale non resta armato: isolo le linee, le richiudo una alla volta, e quella che fa scattare è quella con la dispersione.

### 2. Passo per passo
Il livello non ha passi del banco (la sezione è vuota). Non ho nessuna tabella da riempire.

### 3. Parole che non ho capito
- "A monte" del differenziale (usato senza spiegazione: lo deduco).
- "Rimuovere la causa": nella sintesi dice "un apparecchio difettoso si scollega e si fa riparare", ma nella lezione non c'è.
- "Cucina": tre linee, ma non so che apparecchi ci sono.

### 4. Domande che mi restano
- Cosa devo fare esattamente sul banco? Nella lezione e nei passi non c'è.
- Il multimetro che cosa mi dice di una dispersione? Misura la tensione, non la dispersione. Come lo uso qui?
- Una volta trovata la linea, come trovo l'apparecchio difettoso? La lezione dice solo di scollegarlo.

### 5. Conteggio
Passi con il perché vero: 0 su 0. Passi con la conseguenza: 0 su 0. Capisco a che cosa serve: sì (per il metodo; non per cosa fare al banco).

---

## Tabella riassuntiva

| Livello | Passi | Perché vero | Conseguenza | Capisco a che cosa serve | Domande che restano |
|---|---|---|---|---|---|
| c17-multimetro | 7 | 6 | 4 | sì | 4 |
| c18-rele | 9 | 8 | 3 | sì | 4 |
| c07-presa-comandata | 7 | 6 | 3 | sì | 3 |
| c08-rele-impulsi | 9 | 7 | 4 | sì | 4 |
| c09-luce-scale | 11 | 10 | 5 | sì | 4 |
| c10-campanello | 6 | 5 | 0 | sì | 4 |
| c19-magnetotermico | 12 | 3 | 2 | sì | 5 |
| c20-differenziale | 7 | 4 | 1 | sì | 5 |
| c11-quadro | 4 | 4 | 2 | sì | 4 |
| c23-appartamento-notte | 0 | 0 | 0 | sì (metodo) | 3 |
