# Progetto: le prove 3D che mancano (Modulo 5 la casa, Modulo 6 la fabbrica)

**Stato: proposta da approvare.** Nessun codice scritto. Le decisioni aperte sono in fondo (sezione 5).

Le prove 3D fatte: trilocale (M1), appartamento di notte (M2), officina (M3), nastro automatico (M4). Mancano la casa
intelligente (M5) e la fabbrica (M6). Il piano aggiornato del percorso (`docs/ARCHITETTURA-PERCORSO.md`, 16 ottobre) mette la
prova della casa alla fine del Modulo 5, dopo i livelli 5.10 (gestione dei carichi) e 5.11 (clima per zone), che non ci sono ancora.

Regole comuni, valide per tutte e due: `docs/SPEC-SCENE-3D.md` (disegno su richiesta, `stage.finish` con in `skip` solo i pezzi
che si muovono, InstancedMesh e ombre finte, luci accese con l'intensita', niente modelli pesanti), la cornice di
`docs/MILESTONE.md`, nessuna regola nella scena. Le prove non si chiamano "finali": il percorso potra' crescere.

## 1. Cosa hanno in comune: la prova "a tempo"

Le prove fatte finora sono un collaudo a passi: l'allievo agisce e il tempo passa solo quando serve. Casa e fabbrica sono
diverse: c'e' un **periodo che scorre** (una serata, un turno) e intanto succedono cose. Il motore questo lo sa gia' fare:
`level.scenario` (c44, c45) fa scorrere un turno con eventi e guasti a tempo, e la verifica giudica la partita viva.

Quindi un pezzo nuovo condiviso, che si fa una volta sola:
- **cornice a tempo** in `src/prove/`: l'ora in alto la da' il motore (tempo dello scenario), non il registro; una barra del
  periodo (tempo rimasto, eventi, guasti riparati); il registro scrive da solo gli eventi dello scenario; i comandi "pausa" e
  "tempo x N" (gia' nel pannello del processo, da portare nella cornice);
- **il cruscotto** in basso al posto della pulsantiera: valori e allarmi del pannello operatore (`obs.hmi`, gia' nel motore)
  disegnati in HTML, non in una texture della scena (niente ridisegno della scena quando cambia un numero);
- **riparare toccando**: i tasti di riparazione del banco (`fix` dei guasti dello scenario) anche sul pezzo nella scena;
- **verbale con i numeri** del periodo: prodotto, tempo di fermo, guasti riparati in tempo, energia dalla rete, ecc.

Dalle prove di reparto si riusano gia' fatti: capannone, fili vivi, pulsantiera, PLC, torretta, verbale, eventi letti dallo stato.

## 2. Modulo 6: la fabbrica, "Il turno di notte"

### L'idea in una riga
Lo stesso capannone, alle 22:00. La cella del robot di c45 e' in servizio, cablata e programmata. Tu sei il manutentore di
turno: per otto ore (compresse in pochi minuti) la cella deve produrre, e i guasti arrivano. Leggi il pannello, trovi il pezzo,
ripari in sicurezza, riarmi, e la produzione riparte.

### Il racconto
1. **Consegna del turno** (scheda, saltabile): "Turno di notte, linea 2. Obiettivo: 60 pezzi. Il collega del pomeriggio
   segnala: il finecorsa del braccio ogni tanto non risponde."
2. **Arrivo**: luci notturne del capannone, solo la campata della cella accesa; la torretta verde; il robot che lavora.
3. **Il turno**: un tempo che scorre a velocita' scelta (x4 come c45, x8 per chi va spedito). Arrivano 4-5 guasti dalla
   libreria, uno alla volta, ognuno con il suo tempo massimo:
   - finecorsa morto (il robot si ferma a meta' ciclo, "Ciclo bloccato" sul pannello dopo 40 s);
   - fungo premuto da un operatore (la potenza cade, "Sicurezze aperte");
   - portella lasciata aperta;
   - cavo di rete del pannello staccato (il pannello diventa grigio: il dato vecchio);
   - nuovi, se servono e se il collega approva: termico del nastro di ingresso, fotocellula sporca (il pezzo pronto non si vede).
4. **Momento forte**: il primo fermo vero. La torretta rossa, la cella si ferma, il conto dei pezzi si blocca e il "tempo di
   fermo" comincia a correre in rosso nella barra del turno. Si vede quanto costa ogni minuto.
5. **Fine turno**: le 6:00, la sirena del cambio turno, il verbale: pezzi, fermo totale, ogni guasto con l'ora in cui e'
   arrivato e quella in cui e' stato riparato, eventuali errori di sicurezza (riparato in tensione, riarmo saltato).

### Cosa si gioca davvero
Il metodo della manutenzione: dall'allarme al pezzo (c44), riparare a macchina in sicurezza (portella aperta, KS), riarmo e
marcia nell'ordine giusto (c45). Gli errori di sicurezza tolgono la stella come nelle altre prove.

### La scena (`src/scene3d/fabbrica.js`)
Riusa: capannone (`capannone.js`) con un'ora "notte" (sole spento, cielo scuro, una campata di plafoniere accesa), quadro con
KS, KM e PLC (pezzi del kit), pulsantiera con riarmo, torretta, fili vivi, nastro di ingresso e di uscita (`conveyor`), pezzi
come InstancedMesh con ombra finta (come i pacchi).

Pezzi nuovi del kit:
- **braccio robot** a tre movimenti (giu', spostamento, pinza) che segue `obs.process` del modello `linea` (z, x, grip):
  in `skip` solo le parti che si muovono (il carrello e la pinza), il resto accorpato;
- **recinzione con la portella** (rete metallica: una texture a griglia su piani, una chiamata per tutta la rete) e la
  portella che si apre davvero quando `P` e' aperta;
- **finecorsa** del braccio con il LED (il finecorsa morto ha il LED che non si accende piu': si trova guardando);
- **pannello operatore** fisico vicino alla cella (solo la cornice nera e lo schermo spento/acceso; i contenuti nel cruscotto HTML).

Fluidita': il robot si muove di continuo durante il turno, come il nastro dell'officina. Obiettivo in movimento: non oltre
l'officina (185 su computer, 81-100 su telefono). Ombre: solo il sole spento e una lampada con l'ombra; il robot ha l'ombra
finta (una macchia sotto il carrello). A turno finito o in pausa: 0 chiamate.

### Il motore: che cosa serve
- **Livello nuovo** `prova: { scene: 'fabbrica' }` (proposta: c51 "Il turno di notte"), cablaggio e programma di c45 gia'
  fatti (`fixed` e programma di partenza = la soluzione di c45), scenario piu' lungo (circa 1800 s simulati).
- **Guasti scelti dalla libreria a ogni partita** (piccola estensione di `level.scenario`: `pick: { from: [...], n: 4, seed }`)
  con il seme salvato nella partita, cosi' la verifica rigioca la stessa sequenza. Decisione per te (sezione 5).
- **Tempo di fermo** calcolato dal tracciato (gia' registrato: robot senza potenza o fermo a meta' ciclo): nuovo valore nel
  rapporto dello scenario, nessuna regola nuova.
- Niente regole nuove di sicurezza: bastano quelle di c45 (`restartNeedsReset`, lavoro fuori tensione sul pezzo riparato).

## 3. Modulo 5: la casa intelligente, "Una sera d'inverno"

### L'idea in una riga
La casa di Via Roma 12, quella del trilocale del Modulo 1, cinque moduli dopo: sul tetto i pannelli, in garage la batteria e
la colonnina, fuori la pompa di calore, nel quadro il PLC della casa. E' una sera di gennaio: dalle 16:30 alle 23:00 (compresse
in qualche minuto) la casa deve funzionare da sola mentre la famiglia rientra. Tu la consegni al cliente e la guardi lavorare.

### Perche' la stessa casa
E' il filo del percorso: l'allievo ha cablato quella casa con tre interruttori; ora la vede con tutto quello che ha imparato.
Si riusa la scena del trilocale (`src/trilocale/scene.js`, opzioni `night`, `bare`, `extend` come l'appartamento) e si
aggiunge l'esterno.

### Il racconto
1. **Consegna dell'impianto** (scheda): "Famiglia Rossi, Via Roma 12. L'impianto e' finito: stasera la casa va da sola.
   Controlla che tutto funzioni insieme, poi consegna."
2. **Arrivo al tramonto**: la casa vista da fuori, il sole basso sui pannelli, il contatore e la batteria in garage.
3. **La serata** (scenario a tempo), con eventi che arrivano a orari fissi:
   - 16:30 tramonto: i pannelli calano, la batteria comincia a coprire i consumi;
   - 17:15 rientro: la scena "Torno" (c49), la luce automatica del corridoio (c48), il videocitofono suona al cancello (c47);
   - 18:30 arriva l'auto e si attacca alla colonnina (c42);
   - 19:00 cena: forno, piano a induzione, scena "Cena"; il carico sale verso il limite del contatore (5.10);
   - 20:00 il clima per zone: soggiorno e camere chiedono calore, la pompa di calore parte con il consenso (5.11); qualcuno
     apre una finestra in camera;
   - 21:30 la sonda di allagamento in bagno (c50): la sirena, la tacitazione solo a sonda asciutta;
   - 23:00 "Esco"/notte: tutto spento tranne quello che deve restare.
4. **Il guasto** (uno solo, come nelle altre prove): proposta, nella gestione dei carichi. Alle 19:05, con forno, auto e pompa
   di calore insieme, il contatore stacca: **momento forte**, la casa intera al buio (riuso del buio e del "tac"
   dell'appartamento), la batteria non basta perche' il distacco e' a monte. Il programma stacca i carichi nell'ordine
   sbagliato (prima la pompa di calore, l'auto resta) o riattacca senza ritardo (pendolamento). Lo si capisce dal cruscotto
   (potenza in arrivo al limite, carichi accesi), lo si corregge nel programma a casa "ferma" (il contatore da riarmare),
   si rigioca la serata.
5. **Finale**: le 23:00, la casa vista da fuori con le finestre spente una alla volta, il verbale di consegna: energia
   prodotta, prelevata, immessa, auto carica al tanto per cento, comfort delle zone, eventi gestiti, guasto e intervento.

### Il cruscotto in basso
Al posto del quadro o della pulsantiera: il **pannello della casa** (un tablet a muro, in HTML): potenza istantanea (sole,
casa, batteria, rete con la soglia del contatore), stato della batteria, auto, le tre zone con la temperatura, i tasti delle
scene (Esco, Torno, Cena), gli allarmi. Sotto, come sempre, "Banco e schema" e Rispondi/Verifica.

### La scena (`src/scene3d/casa.js`, sopra la scena del trilocale)
Riusa: casa, stanze, luci delle stanze, finestre, tetto, sera (`setNight`), quadro (`centralino`), fili vivi, buio dello scatto.

Pezzi nuovi del kit (tutti costruiti nel codice, niente download):
- **pannelli sul tetto**: una InstancedMesh, il colore che segue la produzione (riflesso del sole basso);
- **batteria a muro** e **inverter** in garage, con la barra della carica (materiale proprio, intensita');
- **colonnina e auto**: auto semplice costruita a blocchi (una ventina di forme accorpate, un solo pezzo che si muove: niente),
  cavo di ricarica con la luce che pulsa durante la carica (un `loop` che si ferma a carica ferma);
- **pompa di calore** esterna con la ventola (unica parte in `skip`);
- **termostati** per zona (piccole targhe con il numero: texture di un canvas aggiornata solo quando cambia il grado intero),
  **rilevatore di fumo**, **sonda di allagamento** con la pozza d'acqua (piano trasparente che appare con la scala, mai `visible`),
  **posto esterno del videocitofono** al cancello, **sensore di presenza** in corridoio;
- **cielo della sera**: il colore dello sfondo e del sole seguono l'ora del modello (`hour`), con l'intensita' e non con luci
  nuove; le ombre del sole si ridisegnano solo ogni quarto d'ora simulato (il sole si muove piano), non a ogni fotogramma.

Fluidita': durante la serata non c'e' movimento continuo (solo l'ora che avanza a scatti e la ventola): disegno a scatti,
obiettivo piu' basso del trilocale in movimento (86) piu' i pezzi nuovi, circa 100-120; 0 a pausa e a serata finita.

### Il motore: che cosa serve (e' la parte grossa)
- Prima i due livelli che mancano del Modulo 5, che sono anche il loro banco di prova: **5.10 gestione dei carichi**
  (`energia` ampliato: piu' carichi con priorita', riattacco con ritardo, fasce orarie) e **5.11 clima per zone** (modello
  `zone`: temperatura per stanza, isteresi, consenso alla pompa di calore, finestra aperta). Sono gia' nel piano (P8).
- **Un modello composto `casa`** per la prova: oggi un livello ha un solo modello di processo, la casa ne chiede due
  (`energia` ampliato e `zone`) piu' gli eventi della serata. Proposta: un modello che contiene i due come sotto-stati, con la
  potenza della pompa di calore che entra nei carichi di `energia`. Piccolo, ma tocca E7: va progettato e rivisto (Opus).
- **Eventi della serata** con `level.scenario` (non guasti, ma azioni del motore a tempo: auto attaccata, finestra aperta,
  sonda bagnata): serve una voce `events` accanto a `faults`, senza tempo massimo e senza "riparato".
- Il guasto della prova come sempre in `unit.fault` (programma di partenza con l'ordine di distacco sbagliato).

## 4. Ordine di lavoro proposto

| Passo | Cosa | Dipende da | Dove |
|---|---|---|---|
| 1 | Cornice a tempo (ora dal motore, barra del periodo, cruscotto HTML, riparare toccando, verbale con i numeri) | niente | qui o in un'altra chat |
| 2 | Fabbrica: libreria dei guasti con il seme, tempo di fermo, livello c51 | 1 | |
| 3 | Fabbrica: braccio, recinzione, notte nel capannone; misure | 2 | |
| 4 | Modulo 5: livelli 5.10 e 5.11 con i modelli `energia` ampliato e `zone` | niente (parallelo a 1-3) | chat separata, motore (Opus) |
| 5 | Casa: modello composto `casa`, eventi della serata, livello della prova | 1, 4 | |
| 6 | Casa: esterno della casa, pannelli, garage, auto, clima, sensori; misure | 5 | |

La fabbrica prima: tutti i suoi livelli ci sono, il motore chiede poco. La casa aspetta 5.10 e 5.11.
Ogni scena ha il suo documento di progetto (`PROGETTO-FABBRICA.md`, `PROGETTO-CASA.md`) prima del codice, come le altre.

## 5. Decisioni per Gianluca

1. **Fabbrica, livello nuovo?** Proposta: c51 "Il turno di notte" separato da c45 (c45 resta il livello in cui si cabla e
   si programma; la prova e' la manutenzione su un impianto che funziona). In alternativa la prova e' c45 stesso in 3D.
2. **Guasti casuali o fissi?** Casuali dalla libreria (ogni partita diversa, rigiocabile) o sempre gli stessi (piu' facile da
   correggere in classe, uguale per tutti). Proposta: casuali con il seme, ma con un turno "di prova" fisso per la classe.
3. **Durata vera dei periodi**: turno di notte e serata intorno a 6-8 minuti veri ciascuno, con "tempo x N" per accelerare.
4. **Casa: la stessa di Via Roma 12?** Proposta: si'.
5. **Il guasto della casa**: ordine di distacco dei carichi sbagliato (proposta) oppure riattacco senza ritardo, oppure un
   guasto fuori dall'energia (per esempio la sonda di allagamento in serie invece che in parallelo).
6. **Auto e pompa di calore costruite nel codice** (proposta, leggere e senza licenze) o modelli liberi compressi.
7. **Nuovi guasti della fabbrica** (termico del nastro di ingresso, fotocellula sporca): da far vedere al collega.
