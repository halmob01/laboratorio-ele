# Modulo 2, allievo finto, prima prova (17 ottobre 2026)

Regole che ho seguito: so solo quello che c'e' scritto nel file. Nella colonna "Perche'" scrivo il motivo solo se la lezione lo dice o si deduce chiaramente dai livelli precedenti; altrimenti **LA LEZIONE NON LO DICE**. Nella colonna "Che cosa succede se lo sbaglio" conto una conseguenza solo se la lezione o i livelli precedenti dicono un effetto concreto per quel passo; altrimenti **NON LO SO**. Quando "Dove" e' "-" vuol dire che mi baso solo sulla sintesi dei livelli precedenti.

---

## Livello c17-multimetro: Il multimetro

### 1. Prima dei passi
Serve a controllare un impianto quando il guasto non si vede (un filo staccato nel morsetto, un contatto che non chiude). Si appoggiano i due puntali su due punti e il display dice cosa c'e' tra i due punti. In una casa vera: quando una luce non funziona, o prima di cambiare una lampada, per vedere se c'e' tensione.
Il banco lo collegherei cosi': fase al morsetto 1 dell'interruttore, dal morsetto 2 alla lampada, neutro all'altro morsetto della lampada (come il punto luce interrotto che gia' so). Poi do corrente e misuro.
Non so: come si "sceglie" la misura sul multimetro nella vita vera (qui dice solo "tocca Multimetro" e "scegli Continuita'"), e perche' i puntali hanno due colori.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase dal quadro al morsetto 1 dell'interruttore | L'interruttore sta sulla fase, tra quadro e lampada (livelli precedenti) | Se l'interruttore finisce sul neutro la luce si spegne ma la fase resta sul portalampada: errore pericoloso | - |
| 2 | Dal morsetto 2 alla lampada | Serve il tratto interruttore-lampada per chiudere il circuito (livelli precedenti) | Se manca il filo il circuito e' aperto e la luce resta spenta | - |
| 3 | Neutro alla lampada | Il neutro va direttamente alla lampada, senza interruttore (livelli precedenti) | Se manca il filo il circuito e' aperto e la luce resta spenta | - |
| 4 | Dai corrente (levetta del quadro) | La tensione si misura a impianto in tensione | NON LO SO | Due misure: tensione e continuita' |
| 5 | Misura la tensione tra morsetto 1 (rosso) e NEUTRO (nero): 230 V | Tra fase e neutro si leggono 230 V; serve per misurare invece di indovinare | NON LO SO | Due misure: tensione e continuita' |
| 6 | Tensione ai capi dell'interruttore aperto: 230 V | Una lampada spenta non e' senza tensione: a valle prende il neutro attraverso la lampada, per questo si puo' prendere la scossa a luce spenta | NON LO SO | Domanda sull'interruttore aperto |
| 7 | Levetta giu', interruttore chiuso, misura Continuita' sui morsetti 1 e 2 | La continuita' si misura a impianto spento; interruttore chiuso = percorso chiuso = continuita' | La lettura non vale e lo strumento si puo' rovinare (se misuro con l'impianto in tensione) | Due misure: tensione e continuita' |

### 3. Parole che non ho capito
- "quadro" e "levetta del quadro": non e' mai spiegato che cos'e' il quadro ne' perche' c'e' una levetta (e' usato come "quadro acceso/spento").
- "volt (V)": mai spiegato che cosa misura, solo il numero.
- "resistenza" ("legge la sua resistenza"): usata senza spiegazione. Anche "carico" ("attraversa un carico") la deduco soltanto.
- "a valle" / "dal lato del quadro": non spiegato dove sta la valle.
- "circa 0 V" tra neutro e terra: perche' "circa"?

### 4. Domande che mi restano
- Perche' la lampada spenta fa si' che ai capi dell'interruttore ci siano 230 V? Come fa il neutro ad arrivare "attraverso la lampada"?
- Se tra i morsetti 1 e 2 dell'interruttore aperto leggo 230 V, quale dei due morsetti e' pericoloso toccare?
- Perche' si usa il puntale rosso sul morsetto e il nero sul neutro? Cambia qualcosa se li inverto?
- Perche' la continuita' non vale se l'impianto e' in tensione? E "lo strumento si rovina" come?
- Nella domanda sul cambio lampada: perche' controllare con il multimetro se ho gia' tolto la tensione dal quadro? E come lo misuro in sicurezza se la misura va fatta con le mani vicino ai fili?
- Se la misura di tensione e di continuita' hanno impostazioni diverse, cosa succede se misuro la tensione con il multimetro su Continuita'? (non detto)
- Che resistenza ha una lampada? Che numero devo aspettarmi?

### 5. Conteggio
Passi con il perche': 7 su 7. Passi con la conseguenza: 4 su 7.

---

## Livello c18-rele: Il relè

### 1. Prima dei passi
Il relè e' un interruttore comandato da un altro circuito: una bobina piccola riceve tensione, diventa elettromagnete e sposta un contatto. In una casa vera non so a che cosa serva: la lezione dice che comando e carico non si toccano e possono avere tensioni diverse, ma non dice un esempio reale (solo "segnale per ogni stato" con due lampade). **Non so a che cosa serva nella vita vera.**
Collegherei: interruttore di comando sulla fase fino ad A1, A2 al neutro; la fase anche sul comune 11; il 12 alla lampada verde, il 14 alla rossa; neutro a entrambe le lampade.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase dal quadro al morsetto 1 dell'interruttore di comando | "Il comando sta sulla fase" | Se l'interruttore finisce sul neutro la fase resta presente: errore pericoloso (livelli precedenti) | Sintesi |
| 2 | Dal morsetto 2 dell'interruttore ad A1 | La bobina e' il circuito di comando e riceve tensione dal comando | NON LO SO | Il relè con contatto di scambio |
| 3 | Da A2 al neutro | "La bobina ha il suo ritorno al neutro" | NON LO SO | Sintesi |
| 4 | Fase al comune 11 | Il contatto e' il circuito di carico e il comune e' sempre collegato a uno dei due morsetti, quindi porta la fase alle lampade | Se manca, le lampade non ricevono fase: restano spente (circuito aperto, livelli precedenti) | Il relè con contatto di scambio |
| 5 | Dal 12 alla lampada verde | 12 e' chiuso a bobina spenta: la verde e' accesa a riposo | Se manca il filo la verde resta spenta (circuito aperto) | Domanda su quale lampada e' accesa |
| 6 | Dal 14 alla lampada rossa | 14 e' chiuso a bobina accesa: la rossa si accende solo quando la bobina e' eccitata | Se manca il filo la rossa resta spenta | Domanda su quale lampada e' accesa |
| 7 | Neutro alla lampada verde | Ogni lampada ha bisogno di fase e neutro (livelli precedenti) | Se manca il filo la verde resta spenta | - |
| 8 | Neutro alla lampada rossa | Idem | Se manca il filo la rossa resta spenta | - |
| 9 | Dai corrente, poi chiudi e apri il comando | Per vedere che con comando aperto si accende la verde e con comando chiuso la rossa | NON LO SO | Guarda come si fa |

### 3. Parole che non ho capito
- "relè", "bobina", "elettromagnete": spiegati in una riga, ma non so come una bobina sposta un contatto.
- "contatto di scambio": non spiegato bene cosa sia "scambio".
- "NC" e "NA": sigle senza spiegazione (non dice cosa vogliono dire).
- "morsetto comune 11, 12, 14": perche' proprio questi numeri (e il 13 che fine ha fatto)?
- "eccita / eccitata / si eccita": usato senza spiegazione.
- "stato" di una lampada, "segnale", "carico" (spiegato come circuito, ma anche come lampada?).
- "chiuso a riposo": non e' detto cosa e' il "riposo" (bobina senza tensione?).

### 4. Domande che mi restano
- A che cosa serve davvero un relè in una casa? Perche' non basta collegare direttamente l'interruttore alla lampada?
- Perche' la fase va sia all'interruttore di comando sia al comune 11? Sono due fili partiti dallo stesso punto?
- Cosa succede se scambio A1 e A2? E se scambio 12 e 14 (verde e rossa)?
- Cosa succede se metto il neutro su A1 e la fase su A2?
- "I due circuiti possono avere tensioni diverse": se hanno tensioni diverse, come si collega il banco? (qui sono tutte e due 230 V.)
- Perche' si usano due lampade? E con una sola lampada su 12 o su 14 cosa cambia?
- Il contatto "non resta mai a meta'": cosa succede nel momento del passaggio?

### 5. Conteggio
Passi con il perche': 9 su 9. Passi con la conseguenza: 6 su 9.

---

## Livello c07-presa-comandata: La presa comandata

### 1. Prima dei passi
Un solo interruttore comanda sia la luce sia una presa (per esempio una lampada da tavolo). Nella vita vera la lezione porta l'esempio della stanza con luce del soffitto e presa. Non so perche' si farebbe invece di una presa sempre alimentata (la lezione dice solo che "le prese normali sono collegate direttamente al quadro").
Collegherei: fase all'interruttore (1), dal 2 due fili: uno al morsetto L della presa e uno alla lampada; neutro a N della presa e alla lampada; terra a PE.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase dal quadro al morsetto 1 dell'interruttore | "Il comando sta sulla fase" | Se l'interruttore e' sul neutro la fase resta sul carico: errore pericoloso (livelli precedenti) | I pezzi: L'interruttore sulla fase |
| 2 | Dal morsetto 2 al morsetto L della presa | La presa riceve la fase dal comando, L = fase | Se scambio L e N la presa e' cablata male anche se l'apparecchio funziona (livelli precedenti e lezione) | I pezzi: La presa |
| 3 | Dallo stesso morsetto 2 alla lampada | A valle dell'interruttore la fase si divide verso presa e lampada | Se manca il filo la lampada non e' alimentata (circuito aperto) | Una presa e una luce con un solo comando |
| 4 | Neutro al morsetto N della presa | N riceve il neutro; il neutro non passa dall'interruttore | Se scambio N con L la polarita' e' invertita: funziona ma e' cablata male | I pezzi: La presa |
| 5 | Neutro al morsetto libero della lampada | Il neutro va ai carichi senza passare dall'interruttore | Se manca la lampada resta spenta | Sintesi |
| 6 | Terra del quadro al PE della presa | "La terra si collega sempre" (ma non dice perche'); dai livelli precedenti: e' il filo di sicurezza | Presa e apparecchio funzionano ma l'impianto non e' sicuro | Sintesi + livelli precedenti |
| 7 | Dai corrente, poi prova l'interruttore | Per vedere che con interruttore aperto presa e lampada sono senza tensione | NON LO SO | Guarda come si fa |

### 3. Parole che non ho capito
- "a valle dell'interruttore": non spiegato.
- "regola d'impianto": quale regola? di chi?
- "spina": mai spiegata (credo sia quella dell'apparecchio).
- "carichi": detto senza spiegazione (l'ho dedotto: presa e lampada).
- "morsetto libero" della lampada e "A / B": vanno bene entrambi? (nel mio riassunto A e B sono equivalenti, ma qui si dice "un morsetto" e poi "libero".)

### 4. Domande che mi restano
- Se la presa e' comandata dall'interruttore, un frigorifero collegato li' si spegne? Perche' dovrei volere una presa spenta?
- Nel livello precedente l'inversione L/N faceva funzionare l'apparecchio; qui dice "non si scambiano mai". Cosa puo' succedere di pericoloso se li scambio, visto che funziona?
- Perche' la terra non passa dall'interruttore? E la terra va anche alla lampada?
- Cosa succede se l'interruttore e' aperto e infilo una spina: l'apparecchio ha tensione sulla terra? E' sicuro cambiare un apparecchio su una presa comandata?
- Cosa significa "scatta il quadro" (terza risposta della domanda)? Quando succederebbe?

### 5. Conteggio
Passi con il perche': 7 su 7. Passi con la conseguenza: 6 su 7.

---

## Livello c08-rele-impulsi: Il relè ad impulsi

### 1. Prima dei passi
Serve per accendere e spegnere la stessa luce da molti punti (esempio: corridoio con molte porte). Al posto dei deviatori e degli invertitori si mettono tanti pulsanti in parallelo sulla bobina di un relè ad impulsi; a ogni pressione la luce cambia stato.
Collegherei: fase a tutti i morsetti 3 dei pulsanti (messi in comune), i morsetti 4 in comune e poi all'A1; A2 al neutro; fase al morsetto 1 del contatto, dal 2 alla lampada, neutro alla lampada.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase al morsetto 3 del pulsante dell'ingresso | "I morsetti 3 sono collegati tra loro e alla fase" | NON LO SO | Pulsanti in parallelo, mai in serie |
| 2 | Morsetti 3 dei tre pulsanti tra loro (due fili) | Pulsanti in parallelo: ne basta uno premuto | Se li metto in serie la bobina non riceve mai l'impulso e la lampada non si accende mai | Pulsanti in parallelo, mai in serie |
| 3 | Morsetti 4 dei tre pulsanti tra loro (due fili) | Idem: i morsetti 4 sono collegati tra loro e alla bobina | Idem, serie: lampada mai accesa | Pulsanti in parallelo, mai in serie |
| 4 | Da un morsetto 4 ad A1 | I morsetti 4 vanno alla bobina | NON LO SO | Pulsanti in parallelo, mai in serie |
| 5 | A2 al neutro | La bobina e' il circuito di comando; il ritorno al neutro (dal livello del relè) | NON LO SO | I pezzi: relè ad impulsi |
| 6 | Fase al morsetto 1 del contatto | Il contatto e' il circuito della lampada, separato dalla bobina | Se manca, la lampada non ha fase: resta spenta | I pezzi: relè ad impulsi |
| 7 | Dal morsetto 2 alla lampada | Il contatto e' chiuso o aperto e alimenta la lampada | Se manca la lampada resta spenta | I pezzi: relè ad impulsi |
| 8 | Neutro alla lampada | Ogni lampada ha fase e neutro | Se manca la lampada resta spenta | - |
| 9 | Dai corrente, poi premi i pulsanti uno alla volta | Per vedere che ogni impulso cambia lo stato | NON LO SO | Guarda come si fa |

### 3. Parole che non ho capito
- "impulso": non spiegato (e' una pressione?).
- "pulsante" e' spiegato; "relè ad impulsi" no come e' fatto dentro: "cambia stato a ogni impulso" ma come lo ricorda?
- "stato" della luce.
- "morsetti 3 e 4" del pulsante (nei livelli precedenti i morsetti erano 1 e 2): perche' cambiano numero?
- "contatto (1-2)" qui ma "11, 12, 14" nel relè precedente.
- "parallelo" per i pulsanti con "servono due fili": come si collegano tre pulsanti con due fili?

### 4. Domande che mi restano
- Perche' il contatto e' sul 1-2 e non sul 11-12-14? E' un altro tipo di relè?
- Perche' i pulsanti hanno 3 e 4 e non 1 e 2?
- Quale morsetto 3 va alla fase? Importa quale pulsante? (qui dice "ingresso")
- Cosa succede se premo due pulsanti insieme?
- Come fa il relè a ricordare lo stato anche senza tensione? E se manca la corrente in casa, la luce com'e' al ritorno?
- Perche' la bobina ha ritorno al neutro e non va alla terra o altro?
- Il "morsetto 4 di un pulsante" ad A1: va bene uno qualsiasi? Perche'?
- Cosa succede se scambio il morsetto 3 col 4?

### 5. Conteggio
Passi con il perche': 9 su 9. Passi con la conseguenza: 5 su 9.

---

## Livello c09-luce-scale: La luce scale a tempo

### 1. Prima dei passi
Nelle scale dei condomini, la luce si accende con un pulsante e si spegne da sola dopo un po' (cosi' non resta accesa per dimenticanza, e si risparmia energia). Il pulsante comanda la bobina del relè temporizzato, il contatto alimenta le lampade.
Collegherei come per il relè ad impulsi: pulsanti in parallelo (3 con 3, 4 con 4), poi alla bobina; A2 al neutro; fase al contatto 1, dal 2 alle due lampade, neutro alle due lampade.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase al morsetto 3 del primo pulsante | Il pulsante comanda la bobina e ha bisogno della fase | NON LO SO | Guarda come si fa |
| 2 | Morsetti 3 dei due pulsanti collegati | Pulsanti in parallelo: basta premerne uno | In serie non andrebbe (come nel relè ad impulsi) | Pulsanti in parallelo / livello c08 |
| 3 | Morsetti 4 dei due pulsanti collegati | Idem | Idem | Pulsanti in parallelo / livello c08 |
| 4 | Dai morsetti 4 ad A1 | Il pulsante comanda la bobina | NON LO SO | Sintesi |
| 5 | Da A2 al neutro | Ritorno della bobina | NON LO SO | - |
| 6 | Fase al morsetto 1 del temporizzatore | Il contatto alimenta le lampade | Senza fase le lampade restano spente | Pulsanti in parallelo |
| 7 | Dal 2 alla prima lampada | Le lampade sono alimentate dal contatto | Se manca la lampada resta spenta | Pulsanti in parallelo |
| 8 | Dallo stesso 2 alla seconda lampada | Lampade in parallelo (livelli precedenti) | Se manca la seconda resta spenta | - |
| 9 | Neutro alla lampada 1 | Ogni lampada ha fase e neutro | Se manca la lampada resta spenta | - |
| 10 | Neutro alla lampada 2 | Idem | Idem | - |
| 11 | Dai corrente, premi un pulsante, osserva | Per vedere accendersi le lampade e spegnersi dopo il tempo | NON LO SO | Guarda come si fa |

(Il passo 12 e' solo "Premi Verifica": non conteggiato. Dice "simula anche lo scorrere del tempo": non so cosa significhi.)

### 3. Parole che non ho capito
- "relè temporizzato", "tempo regolabile": regolabile come? con cosa?
- "eccitare / eccitata la bobina".
- "si esaurisce / conteggio riparte da capo": il conteggio di cosa?
- "tempo impostato": impostato dove? Nei passi non c'e' nessun passo che imposta il tempo (nell'obiettivo si parla di 20 secondi).
- "il controllo simula anche lo scorrere del tempo".

### 4. Domande che mi restano
- Dove si imposta il tempo dei 20 secondi? Si fa nel banco?
- Il passo 4 dice "dai morsetti 4 dei pulsanti alla bobina": servono due fili (uno per pulsante) o uno solo? Nel livello prima era "di un pulsante".
- Perche' il tempo comincia a contare quando rilascio il pulsante e non quando lo premo?
- Cosa succede se tengo premuto il pulsante a lungo?
- Se il contatto resta chiuso per un tempo e poi riapre, il relè temporizzato e' diverso da quello ad impulsi? Come cambia il collegamento?
- Perche' le lampade non passano dai pulsanti? Cosa succederebbe se ci passassero?
- Non c'e' un limite al numero di lampade sul contatto?

### 5. Conteggio
Passi con il perche': 11 su 11. Passi con la conseguenza: 7 su 11.

---

## Livello c10-campanello: Il campanello e il trasformatore

### 1. Prima dei passi
Il campanello lavora a bassa tensione (12 V) ed e' piu' sicuro: chi tocca il pulsante vicino alla porta non rischia, perche' il pulsante e' sul circuito a bassa tensione. La rete e' a 230 V, quindi serve un trasformatore che la abbassa. 
Collegherei: fase e neutro ai morsetti 1 e 2 (primario); dal 3 e dal 4 del secondario il pulsante e il campanello in serie; fili bianchi sul secondario.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del primario | Il primario si collega alla rete a 230 V | NON LO SO | I pezzi: Il trasformatore |
| 2 | Morsetto 2 del primario al neutro | Idem (la rete ha fase e neutro) | NON LO SO | I pezzi: Il trasformatore |
| 3 | Dal 3 del secondario al morsetto 3 del pulsante (bianco) | Il pulsante sta sul secondario, in serie al campanello | NON LO SO | I pezzi: Il campanello |
| 4 | Dal 4 del pulsante a un morsetto del campanello | Il pulsante e il campanello in serie | NON LO SO | I pezzi: Il campanello |
| 5 | Dal 4 del secondario all'altro morsetto del campanello | Chiude il circuito a 12 V | NON LO SO | Guarda come si fa |
| 6 | Dai corrente, poi premi il pulsante | Per vedere che il campanello suona solo a pulsante premuto | NON LO SO | Domanda sul pulsante non premuto |

### 3. Parole che non ho capito
- "trasformatore", "primario/secondario": detti, ma non so come funziona "dentro".
- "campo magnetico del nucleo": usato senza spiegazione.
- "bassa tensione", "rete".
- "12 V": perche' proprio 12?
- "il pulsante sta sul secondario": e' una di due scelte di montaggio, ma non vedo l'altra.
- "per esempio bianco": se non e' obbligatorio, quali colori si possono usare e quali no?

### 4. Domande che mi restano
- Cosa succede se collego il campanello per errore ai 230 V? Qui dice "si brucia" ma nel banco posso farlo: cosa dice il gioco?
- Cosa succede se scambio il primario e il secondario? Cosa succede se il secondario va alla rete?
- Importa quale dei due morsetti del primario va alla fase e quale al neutro? E 3 e 4 del secondario?
- Perche' "la fase del quadro" va al primario: il primario e' un circuito a 230 V quindi segue le regole di fase/neutro (colori marrone e blu)?
- Perche' i fili a bassa tensione possono essere di altri colori? Cosa potrebbe andare storto se uso i colori della rete?
- Il pulsante potrebbe stare sul primario? Cosa succederebbe?
- Perche' "energia passa attraverso il campo magnetico" se non c'e' nessun collegamento: come arriva l'energia?
- Se il pulsante e' premuto a lungo, il trasformatore si scalda? (non detto)

### 5. Conteggio
Passi con il perche': 6 su 6. Passi con la conseguenza: 0 su 6.

---

## Livello c19-magnetotermico: Il magnetotermico

### 1. Prima dei passi
Serve a proteggere il cavo: se passa troppa corrente il cavo si scalda, e l'interruttore deve scattare prima. In una casa vera: sta nel quadro, davanti alla linea. Non so bene come si calcola oltre alla regola dei tre numeri Ib <= In <= Iz.
Collegherei: fase al morsetto 1 del magnetotermico, dall'uscita 2 ai due interruttori delle stufe e poi alle stufe; neutro che entra nel magnetotermico (N in alto), esce (N in basso) e va alle due stufe. Poi sceglierei la portata: 10 A (8,7 <= In <= 14,5 e deve scattare con due stufe, 17,4 A).

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase del quadro al morsetto 1 del magnetotermico | LA LEZIONE NON LO DICE (dice solo che protegge il cavo, non perche' sta in testa alla linea) | NON LO SO | - |
| 2 | Dall'uscita 2 al morsetto 1 dell'interruttore della stufa 1 | Ogni stufa ha il suo interruttore sulla fase | Se l'interruttore e' sul neutro la fase resta sul carico (livelli precedenti) | Guarda come si fa |
| 3 | Dallo stesso morsetto 2 all'interruttore della stufa 2 | Due carichi in parallelo, la fase si divide a valle | Idem | Guarda come si fa |
| 4 | Dall'interruttore 1 alla stufa 1 | Chiude il circuito | Se manca la stufa non si accende | - |
| 5 | Dall'interruttore 2 alla stufa 2 | Idem | Idem | - |
| 6 | Neutro del quadro al N in alto del magnetotermico | LA LEZIONE NON LO DICE (nei livelli precedenti il neutro non passa da interruttori) | NON LO SO | - |
| 7 | Dal N in basso alla stufa 1 | Il neutro va a ogni carico | Se manca la stufa non si accende | - |
| 8 | Dallo stesso N alla stufa 2 | Idem | Idem | - |
| 9 | Tocca il numero fino a 10 A | Con una stufa (8,7 A) non deve scattare, con due (17,4 A) deve scattare: con 10 A 17,4 e' 1,74 volte la portata, sopra 1,45 volte | Con 16 A non scatta e il cavo si scalda; troppo piccolo scatta senza motivo | Regola dei tre numeri + Domanda |
| 10 | Chiudi l'interruttore della stufa 1: resta accesa | Verifico l'uso normale (Ib) | Se scatta, l'interruttore e' troppo piccolo (scatta senza motivo) | Regola dei tre numeri |
| 11 | Chiudi anche la stufa 2 e aspetta qualche secondo: scatta | Deve scattare prima che il cavo si scaldi | Con 16 A non scatta e il cavo si scalda oltre la portata | Domanda con 16 A |
| 12 | Riarma il magnetotermico (e Verifica) | LA LEZIONE NON LO DICE (mai spiegato "riarmare") | NON LO SO | - |

### 3. Parole che non ho capito
- "portata" (di cavo e di interruttore) e "In", "Ib", "Iz": le sigle Ib e Iz non sono spiegate (Ib = corrente di impiego, Iz = portata del cavo, lo ricavo dalla frase dopo).
- "sezione", "mm²", "A" (ampere), "W" (watt): non spiegati.
- "tubo incassato", "come e' posato".
- "la norma non dice che cosa deve fare": quale norma?
- "valore del gioco": cosa significa?
- "sovraccarico", "assorbe", "riarmare", "scatta".
- "corrente = potenza diviso tensione": come mai?

### 4. Domande che mi restano
- Perche' il neutro passa dal magnetotermico quando nei livelli prima non passava da nessun interruttore? Perche' il magnetotermico ha un N in alto e uno in basso?
- Perche' sul banco la portata e' 10 A e non 12, 13 o 14? Tra 1,13 e 1,45 volte In cosa succede? (La lezione dice che la norma non lo dice.)
- Il cavo regge 14,5 A: perche' non scegliere un interruttore da 14 A?
- Come si sa quanti ampere ha una stufa? E come si sceglie il cavo?
- Perche' il cavo "si scalda"? E se si scalda, cosa succede davvero (incendio)? Non e' detto.
- Cosa succede in un cortocircuito (scatta subito, ma perche' piu' in fretta)?
- Perche' le stufe hanno ciascuna un interruttore e non uno solo?
- Come riarmo e perche' devo farlo prima di Verifica?

### 5. Conteggio
Passi con il perche': 9 su 12. Passi con la conseguenza: 9 su 12.

---

## Livello c20-differenziale: Il differenziale

### 1. Prima dei passi
Il differenziale confronta la corrente che esce dalla fase con quella che rientra dal neutro: se sono diverse, una parte e' andata a terra (magari attraverso una persona) e scatta. Protegge le persone. Il magnetotermico non se ne accorge.
Collegherei: fase al morsetto 1, neutro al N in alto, dall'uscita 2 all'interruttore dello scaldabagno, poi allo scaldabagno; il neutro dello scaldabagno dal N in basso del differenziale.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase al morsetto 1 del differenziale | Il differenziale confronta fase e neutro, quindi devono passare tutte e due da lui | NON LO SO | Il neutro deve passare dal differenziale |
| 2 | Neutro al N in alto | Idem | NON LO SO | Il neutro deve passare dal differenziale |
| 3 | Dal 2 all'interruttore (morsetto 1) | Interruttore sulla fase (livelli precedenti) | Se l'interruttore e' sul neutro la fase resta sullo scaldabagno | - |
| 4 | Dal 2 dell'interruttore allo scaldabagno | Chiude il circuito | Se manca lo scaldabagno non funziona | - |
| 5 | Dal N in basso allo scaldabagno | Il neutro del carico deve passare dal differenziale | Se il neutro e' preso prima del differenziale, scatta appena accendo l'apparecchio | Il neutro deve passare dal differenziale |
| 6 | Chiudi l'interruttore dello scaldabagno | LA LEZIONE NON LO DICE (suppongo perche' passi corrente) | NON LO SO | - |
| 7 | Tocca il pannello dell'isolante: con 10 mA non scatta, poi 300 mA scatta | Mostra che sotto la soglia non scatta e sopra scatta subito | NON LO SO | La soglia di 30 mA / Domanda |
| 8 | Riarma il differenziale (e Verifica) | LA LEZIONE NON LO DICE | NON LO SO | - |

### 3. Parole che non ho capito
- "dispersione", "soglia", "mA" (milliampere), "isolante", "involucro", "scatta", "riarmare".
- "pannello dell'isolante": che cos'e' sul banco?
- "morsetto N in alto / N in basso": quale e' quale?
- "per norma non scatta sotto i 15 mA": quale norma?
- "magnetotermico della linea" (usato prima di spiegarlo in questo livello, anche se visto in c19).

### 4. Domande che mi restano
- Cosa succede tra 15 e 30 mA? Scatta o no? (La lezione dice: scatta da 30 in su, non sotto 15, nel mezzo non dice.)
- Come fa una persona a "toccare l'involucro" e cosa deve fare il differenziale per proteggerla?
- Perche' 30 mA sono pericolosi per il corpo e cosa succede a quel livello?
- Perche' il neutro entra e esce dal differenziale e la terra come c'entra?
- Perche' uno scaldabagno ha una dispersione? Quando succede nella vita vera?
- Cosa succede alla terra del quadro nel banco? Non la collego qui; serve?
- Perche' devo accendere lo scaldabagno prima di provocare la dispersione?

### 5. Conteggio
Passi con il perche': 6 su 8. Passi con la conseguenza: 3 su 8.

---

## Livello c11-quadro: Il quadro di casa

### 1. Prima dei passi
Il quadro raccoglie le protezioni di casa: all'ingresso un differenziale (protegge le persone), poi un magnetotermico per ogni linea (protegge i cavi). Se si guasta una linea le altre restano alimentate. Collegherei: fase e neutro al differenziale, dall'uscita fase e neutro ai due magnetotermici (luce e prese), luce con interruttore e lampada, presa con L, N e PE.

### 2. Passo per passo
| N | Passo | Perche' si fa | Che cosa succede se lo sbaglio | Dove |
|---|---|---|---|---|
| 1 | Fase e neutro del quadro entrano nel differenziale, in alto | Il differenziale sta all'ingresso e confronta fase e neutro | NON LO SO | Il quadro di una casa |
| 2 | Fase e neutro dal differenziale si dividono nelle due linee | Linee separate: se si guasta la luce le prese restano alimentate; il neutro deve passare dal differenziale | Se un neutro e' preso a monte, il differenziale scatta anche senza dispersione | I pezzi: Il differenziale |
| 3 | La presa riceve fase e neutro dal suo magnetotermico, piu' la terra | Livelli precedenti: la presa ha L, N e PE; il magnetotermico interrompe fase e neutro della sua linea | Senza terra l'impianto non e' sicuro; con L/N scambiati e' cablata male | I pezzi: I magnetotermici di linea |
| 4 | Prova il tasto di prova del differenziale (poi Verifica) | Simula una dispersione e controlla che funzioni; va premuto ogni tanto | NON LO SO | I pezzi: Il differenziale |

Nota da allievo: i passi del banco non nominano l'interruttore della luce e la lampada, che pero' sono nell'obiettivo e nell'animazione. Non so se devo collegarli e quali fili.

### 3. Parole che non ho capito
- "linea" (e' un gruppo di apparecchi con il suo magnetotermico? non e' definito).
- "a monte / a valle" del differenziale.
- "sovraccarico" (detto prima, mai spiegato bene).
- "uscita fase / uscita neutro" del differenziale.
- "tasto di prova" (dove sta sul banco).
- "protegge le persone" ma come, ripeto.

### 4. Domande che mi restano
- Perche' i magnetotermici sono due e non uno solo? E perche' ciascuno interrompe sia fase sia neutro (prima i neutri non passavano da interruttori)?
- Il passo 2 raggruppa molti fili: quanti sono e quali?
- Perche' il differenziale e' prima dei magnetotermici e non dopo?
- Ogni quanto si preme il tasto di prova? Che cosa vuol dire se non scatta?
- Che portata hanno i magnetotermici di luce e prese? Non sono scelte nel banco.
- Perche' la luce e la presa sono separate? (Il vantaggio e' detto, ma non il rischio opposto.)

### 5. Conteggio
Passi con il perche': 4 su 4. Passi con la conseguenza: 2 su 4.

---

## Livello c23-appartamento-notte: L'appartamento di notte

### 1. Prima dei passi
Il differenziale e' scattato e non resta armato: da qualche parte c'e' una dispersione verso terra. Si trova isolando le linee: apro tutti i magnetotermici, riarmo il differenziale, richiudo una linea alla volta; quella che lo fa scattare e' la colpevole. Poi rimuovo la causa (apparecchio difettoso: lo scollego e lo faccio riparare). Nella vita vera e' la procedura quando salta la luce di notte.
Il banco: questo livello **non ha passi del banco** (l'elenco e' vuoto). Non so come si fa nel gioco.

### 2. Passo per passo
Nessun passo elencato.

### 3. Parole che non ho capito
- "armato / riarmare / non resta armato".
- "isolare le linee", "a monte / a valle".
- "dispersione verso terra" (visto in c20, ma qui si usa senza ricordarla).
- "causa" e "apparecchio difettoso": come lo riconosco?

### 4. Domande che mi restano
- Come apro e richiudo i magnetotermici nel gioco? Come riarmo il differenziale?
- Cosa uso del multimetro? "Controllare dove c'e' tensione": quali misure faccio, dove metto i puntali?
- Come "rimuovo la causa" nel banco? Scollego una spina, un apparecchio? Quale?
- Perche' si fa a una linea alla volta e non a tentativi?
- Se scatta un magnetotermico invece del differenziale che cosa significa? (La lezione dice di capire chi e' scattato.)
- Se e' notte e non vedo, come lavoro in sicurezza? (La lezione dice "togliere tensione e misurare", ma qui la tensione l'ha tolta il differenziale.)
- Cosa succede se una linea ha una dispersione e un'altra e' in cortocircuito insieme?

### 5. Conteggio
Passi con il perche': 0 su 0. Passi con la conseguenza: 0 su 0.

---

## Tabella riassuntiva

| Livello | Passi | Con il perche' | Con la conseguenza |
|---|---|---|---|
| c17-multimetro | 7 | 7 | 4 |
| c18-rele | 9 | 9 | 6 |
| c07-presa-comandata | 7 | 7 | 6 |
| c08-rele-impulsi | 9 | 9 | 5 |
| c09-luce-scale | 11 | 11 | 7 |
| c10-campanello | 6 | 6 | 0 |
| c19-magnetotermico | 12 | 9 | 9 |
| c20-differenziale | 8 | 6 | 3 |
| c11-quadro | 4 | 4 | 2 |
| c23-appartamento-notte | 0 | 0 | 0 |
