# Domande per Matteo

Scelte fatte in autonomia durante il piano automatico, da confermare. Ogni voce: domanda, scelta fatta, come cambiarla.

## Scelte da confermare

- **Palette.** Tutti e cinque i colori sempre visibili. Per cambiarla: filtro per livello nella vista dell'esercizio.
- **Pulsanti su desktop.** In una colonna a destra del banco. Per cambiarla: CSS della pagina dell'esercizio.

## Da far controllare al collega di laboratorio

Frasi tecniche delle lezioni di c02, c03, c05, c06 su cui conviene un parere:

- c05: "fili di collegamento" tra i deviatori (nel lavoro si usano anche "fili di corsa" o "di commutazione"): quale termine usa il laboratorio?
- c06: numerazione dell'invertitore (1 e 2 in alto, 3 e 4 in basso; a riposo 1-3 e 2-4, premuto 1-4 e 2-3). Cambia da marca a marca: serve un avviso?
- c02: "PE, il morsetto al centro" sulla presa bipasso 10/16 A.
- c02: polarita' della presa. Si dice "la fase deve stare sempre su L"; in laboratorio come si insegna?
- c02: terra "collegata alla carcassa e al dispersore nel terreno": basta questo livello di dettaglio o va nominato il collettore di terra del quadro?
- c05, c06: fili di collegamento in nero e grigio (convenzione del gioco). Il laboratorio usa questi colori?
- c03: nella sfida guasto il tratto dopo l'interruttore e' blu: la verifica lo segnala come errore di colore. Va bene?
- Il guasto "fili 1 e 2 incrociati" del syllabus per c05 non e' un guasto: incrociati, il deviato funziona e supera la verifica. In c05 il guasto e' un filo di collegamento mancante; in c06 i fili del deviatore A sono su 1 e 3 dell'invertitore.

## Trilocale (proposta 3D, prima versione)

- Impaginazione: su telefono la scena sta in alto (52% dell'altezza), poi le linguette Bagno, Camera, Corridoio e sotto l'esercizio di sempre. Su computer la scena e' a sinistra e resta ferma, l'esercizio a destra. Va bene cosi'? Bozzetti in `docs/bozze/trilocale-*.png`.
- I tre circuiti sono livelli veri nella stessa sessione: i punti si sommano a quelli del Modulo 0 (stesso sistema di XP, provvisorio). Il pulsante "Livello successivo" dopo il punto luce invertito porta al bagno.
- Una stanza si accende subito se il circuito aperto e' giusto e il quadro e' acceso. Per gli altri circuiti la luce resta com'e' stata lasciata dopo la verifica, con i comandi nell'ultima posizione: una camera "funziona" ma puo' essere spenta, perche' hai lasciato un deviatore in posizione diversa. Preferisci che tutte le stanze verificate tornino accese?
- Pianta: i trattini sui tratti indicano il numero di conduttori (2 = fase e neutro, 3 = per esempio fase, neutro e ritorno). Sono valori provvisori da far controllare al collega di laboratorio, come il percorso delle linee.
- I circuiti del trilocale hanno solo una lezione breve (rimando alle lezioni del Modulo 0) e niente sfida guasto. Collaudo finale, multimetro, guasti nascosti e procedura di sicurezza non ci sono ancora.
- Il 3D si carica da un file separato (`trilocale.js`, circa 500 KB) solo quando si apre un circuito del trilocale. Dove WebGL non e' disponibile compare la pianta.

- c04 (parallelo): nel gioco due lampade in serie restano spente; in realta' si accenderebbero debolmente. Frase da far controllare al collega.

## Moduli 2 e 3 (motore v2)

Da far controllare al collega di laboratorio:
- Circuito di comando dei livelli industriali a 230 V tra L1 e neutro, a valle del salvamotore. Nelle macchine si usa spesso un trasformatore a 24 V: va bene la semplificazione?
- Colore rosso per i fili del circuito di comando in alternata (CEI EN 60204-1), ammesso nel gioco insieme ai colori di fase.
- Colori ammessi sul secondario a 12 V del campanello: tutti tranne blu e giallo-verde.
- Sezioni e protezioni per le linee di casa: 1,5 mm² con 10 A per la luce, 2,5 mm² con 16 A per le prese.
- Nel gioco il differenziale scatta anche se il neutro di una linea è preso a monte e la fase a valle (squilibrio), e se neutro e terra sono uniti a valle.
- Il relè termico scatta dopo circa 3 secondi di fase mancante o sovraccarico (tempo accorciato per il gioco).
- c14 (relè termico) ha la guida a passi invece del solo obiettivo, per distinguere il nuovo componente dai livelli precedenti; c15 e c16 hanno solo l'obiettivo, come da piano.
- c09: il tempo del temporizzatore è 20 s e nelle prove si simula con 'wait' (nel gioco i secondi sono reali). Valore da verificare: nelle scale reali si usa 30-120 s.
- c10: nel gioco il campanello da 12 V si brucia a 230 V; è una semplificazione (in realtà molti campanelli a 230 V esistono).
- c11: il circuito di c11 usa differenziale e due magnetotermici di linea, senza generale; nel quadro di una casa reale c'è anche il generale e il differenziale ha spesso corrente nominale e sensibilità (30 mA) da dichiarare.

## Moduli 2 e 3: punti da far controllare

- c14 usa il formato "passi" invece del solo obiettivo previsto dal piano: la sequenza (potenza, contatto 95, contatto 96, marcia) rende il relè termico piu' leggibile.
- Salvamotore e relè termico insieme (c14, c16): un salvamotore magnetotermico ha gia' lo sganciatore termico. Nel gioco il salvamotore funge da protezione di linea e il termico sta con il contattore. Va bene cosi' o conviene chiamarlo "interruttore magnetico"?
- c10: il pulsante sul primario del trasformatore e' accettato (3 stelle) come quello sul secondario. Elettricamente funziona; didatticamente si chiede il secondario. Serve una regola in piu'?
- Valori tecnici (tempo 20 s, 12 V, tripAfter 3 s, tempi del nastro): far controllare al collega.

## Piano e valori tecnici (14 ottobre)

- Modulo 5 (energia e casa intelligente): inserito nel percorso tra Modulo 4 e fabbrica, ramo opzionale fuori dal percorso minimo (docs/ARCHITETTURA-PERCORSO.md, sezione 3).
- Valori tecnici ricercati con fonti: docs/VALORI-TECNICI.md. Le sei domande per il collega sono in fondo a quel file.
