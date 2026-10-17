# Modulo 5, La casa intelligente: schede della review (17 ottobre 2026)

Metodo: `docs/METODO-REVIEW-PEDAGOGICA.md`. Esempi seguiti: `docs/review/modulo2.md`, `modulo3.md`, `modulo4.md`. Livelli, in ordine di
gioco: c47, c48, c49, c50, c38, c39, c40, c41, c42, c53, c54, c55. Prove dell'allievo finto: `modulo5-allievo-prima.md` (lezioni di
`fe4fee0`) e `modulo5-allievo-dopo.md` (lezioni riscritte).

## Risultato

| Livello | Perché vero, prima | Perché vero, dopo | Conseguenza, prima → dopo | Domande che restano, prima → dopo |
|---|---|---|---|---|
| c47 | 7/8 | 8/8 | 4 → 4 | 6 → 4 |
| c48 | 5/7 | 6/7 | 5 → 5 | 5 → 4 |
| c49 | 2/3 | 3/3 | 3 → 2 | 5 → 3 |
| c50 | 7/10 | 8/10 | 5 → 6 | 5 → 4 |
| c38 | 3/4 | 3/4 | 3 → 3 | 5 → 3 |
| c39 | 2/3 | 2/3 | 2 → 2 | 5 → 3 |
| c40 | 2/2 | 2/2 | 1 → 2 | 4 → 3 |
| c41 | 1/1 | 1/1 | 0 → 0 | 5 → 3 |
| c42 | 2/2 | 2/2 | 2 → 2 | 4 → 3 |
| c53 | 4/4 | 3/4 | 3 → 3 | 6 → 4 |
| c54 | 4/4 | 4/4 | 4 → 4 | 4 → 4 |
| c55 | - | - | - | 4 → 3 |
| Totale | 39/48 | 42/48 | 32 → 33 | 58 → 41 |

Contano solo i passi di cablaggio o di programma. Capisce a che cosa serve: sì in tutti i livelli, prima e dopo. Il Modulo 5 partiva già
alto sui passi: il guadagno vero è nelle domande che restano (da 58 a 41) e nella sparizione dei concetti usati prima di spiegarli.

c53 scende a 3/4 nella seconda prova perché la lezione corretta (distacco insieme) contraddiceva il testo del passo («se non basta»):
dopo la prova la lezione dice apertamente che la condizione «Q0 spenta» vorrebbe dire «prima la colonnina» ma è già vera quando il PLC
arriva al gradino della pompa. Il passo resta com'è (esercizio, vedi `docs/DOMANDE-PER-GIANLUCA.md`).

Dopo la seconda prova sono stati corretti anche: c50 (la sirena è un carico in parallelo alla bobina, non sul contatto: detto e
spiegato), c38 (perché l'interruttore sul positivo), c39 (kW = 1000 W, polarità dell'inverter, «sezionatore» tolto), c41 (sul banco si
cabla solo il comando), c47 (nucleo di ferro come nel campanello), c53 (che cos'è la pompa di calore), c55 (tabella allineata a c53).

## Quadro d'insieme

Il Modulo 5 partiva bene: scritto dopo i criteri del 16 ottobre, ha già il "Perché:" in quasi tutti i passi e l'allievo finto capiva a
che cosa serve ogni livello anche prima. I problemi erano di altro tipo:

1. **Ordine dei livelli.** Il Modulo 5 viene prima del Modulo 6, ma c40, c42, c53, c54 e c55 usavano concetti che il gioco spiega solo nel
   Modulo 6: la parola MW0, il contatto di confronto, il segnale 4-20 mA, SCALE, e "come il serbatoio di c35" per l'isteresi. Ora c40
   spiega parola e confronto (slide "Un numero dentro il PLC") e l'isteresi; c54 rimanda a c40; c55 dice in una riga perché il minimo è 4 mA.
2. **Una lezione che non diceva quello che succede sul banco (c53).** Il programma del banco stacca colonnina e pompa insieme: il PLC aggiorna
   i bit gradino per gradino, e il gradino della pompa vede già la colonnina spenta mentre la potenza è ancora sopra 5800 W (verificato in
   `src/engine/v2/plc.js`, `scan`). La lezione diceva "prima la colonnina, se non basta la pompa". Ora dice la verità: si staccano insieme,
   la priorità si vede al ritorno (prima la pompa, poi la colonnina). Poi, con il via di Gianluca,
   l'esercizio è stato corretto: un TON di 5 secondi (T3) prima di staccare la pompa, come in c55. Ora programma, passi e lezione dicono
   la stessa cosa: prima la colonnina, e la pompa solo se dopo 5 secondi la potenza è ancora alta.
3. **Precisione tecnica e semplificazioni non dette:** "bassa tensione" per i 12 V (è bassissima, come in c10); il LED senza resistenza;
   i pannelli che non si spengono; "scambio sul posto" usato come nome del contatore; la pompa che "si guasta dopo un minuto".
4. **Unità mai spiegate:** kWh e kW (c41).

## Secondo passaggio: più spiegazione (richiesta di Gianluca)

Gianluca: «soprattutto nei moduli più complessi spiega tanto, non ti fidare che siano di base scritte meglio; se ci sono cose che verranno
fatte meglio dopo, spiega il giusto per capire e poi rimanda». Dopo le due prove sono state aggiunte sette slide:

| Livello | Slide nuova | A che cosa serve |
|---|---|---|
| c38 | Dove si usa la continua | auto, caricatori, comandi a 24 V, pannelli e batterie: la continua nel lavoro vero |
| c39 | Dal tetto alla presa | tutta la strada: stringa, inverter, quadro, contatore, rete; rimanda a c40 e c41 |
| c40 | Una giornata con lo scaldabagno | esempio svolto ora per ora: potenza scambiata, Set e Reset, la nuvola |
| c42 | Una sera con la colonnina | esempio svolto: parte, si stacca quando si cucina, aspetta, riparte; l'auto si carica a pezzi |
| c49 | Come sono collegati tasti e luci | il cablaggio del PLC (lo stesso di c29), perché i tasti sono pulsanti e servono Set e Reset |
| c53 | Una sera minuto per minuto | esempio svolto con il forno, il distacco insieme, T1 e T2 (TON ripreso da c31) |
| c54 | Il programma, gradino per gradino | i sei gradini con il perché di ognuno; «consenso» spiegato |

I numeri degli esempi sono stati controllati con le soglie e le potenze del gioco (limite 4,5 e 6 kW, soglie 500/4300, 5800/4200/2000,
scaldabagno 2 kW, −2200/+300).

## Schede, in breve

| Livello | Verdetto | Che cosa è cambiato |
|---|---|---|
| c47 videocitofono | ritocco | bassissima tensione; trasformatore di sicurezza (regge un corto); com'è fatta la serratura (una bobina che tira il fermo); perché il differenziale non scatta con la serratura a 230 V |
| c48 luce automatica | ritocco | i sensori veri hanno anche l'alimentazione (nel gioco già data); il contatto del temporizzatore lo tiene chiuso il suo orologio, non la bobina |
| c49 casa con PLC | ritocco | quando conviene il PLC (scene tante o che cambiano); Cena accende il soggiorno anche se era spento |
| c50 allarme | ritocco | nelle centrali vere la tacitazione lascia un segnale acceso finché il pericolo non passa |
| c38 corrente continua | ritocco | LED in parallelo perché fa da spia; interruttore sul positivo come sulla fase; fusibile dentro la batteria; il LED vero vuole una resistenza (semplificazione dichiarata) |
| c39 fotovoltaico | ritocco | pannelli sempre in tensione, stringhe vere a centinaia di volt; margine perché col freddo la tensione sale; il terzo pannello resta fuori |
| c40 contatore | riscrittura parziale | contatore bidirezionale (non "scambio sul posto"); slide nuova su parola e confronto; isteresi spiegata qui; perché −2200 e +300 e la regola della distanza tra le soglie; sintesi senza SCALE e 4-20 mA |
| c41 accumulo | ritocco + due slide | kWh e kW (tanica e rubinetto); chi comanda la batteria (il suo inverter), che cosa fa l'interruttore del banco, oltre 3 kW si preleva |
| c42 colonnina | ritocco | l'auto si carica a pezzi e riprende; slide accorciata |
| c53 carichi | riscrittura di una slide | il distacco vero (insieme) e la priorità al ritorno; tabelle e sintesi allineate al programma |
| c54 clima | ritocco | rimando a c40 invece che a c35; le uscite cambiano a fine giro, la valvola non si apre per un attimo; pompa: semplificazione dichiarata |
| c55 sera d'inverno | ritocco | perché 4 mA e non 0; perché si asciuga la sonda prima di tacitare; come si capisce perché è saltato il contatore; il riarmo vero |

**Prova dei tasti nel browser:** `prova-tasti.mjs` tutto OK per c47-c54 (11 livelli). c55 è una prova e lo script non la gestisce.
Slide nuove con tabella (c40) controllate a 390 px.

## Da far controllare al collega di laboratorio

- c47: «i trasformatori per campanelli e citofoni sono di sicurezza: reggono un corto sul secondario o hanno una protezione dentro».
- c38: «un LED vero non si collega mai da solo a una batteria: serve una resistenza in serie (nei LED fatti per 12 V è già dentro)».
- c39: «un pannello illuminato è sempre in tensione; aprire il sezionatore stacca solo l'inverter; le stringhe vere arrivano a centinaia di volt».
- c41: «la batteria ha il suo inverter, che decide da solo quando caricare e scaricare» (nelle case vere spesso è un inverter ibrido unico).
- c54: «le pompe vere spesso hanno una protezione che le ferma, ma il riscaldamento si blocca lo stesso».
- c55: «nelle case vere il contatore si riarma dal suo pulsante».
