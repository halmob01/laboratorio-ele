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
