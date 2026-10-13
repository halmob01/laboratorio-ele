# Specifica: livelli con piu' carichi (scritta a posteriori)

Nota: nel piano la specifica andava scritta prima del codice; e' stata scritta dopo. La revisione del codice al gate la sostituisce.

## Modello
- Un livello puo' avere `loads: [[A,B], [A,B], ...]`; `load` resta il primo (compatibilita').
- `analyse` restituisce `litLoads` (una voce per carico), `lit` (tutti accesi), `anyLit` (almeno uno).
- Il livello funziona se tutti i carichi si accendono e si spengono insieme ai comandi.

## Difetti riconosciuti (codici, testi in it.js)
- `work.loadsInSeries`: morsetti di due carichi uniti in ogni stato dei comandi e mai a fase o neutro.
- `work.loadNeverLit` {n}: il carico n non si accende in nessuno stato.
- `work.loadsDiffer`: i carichi non si accendono sempre insieme.

## Sicurezza
- Il neutro deve arrivare a ogni carico in ogni stato dei comandi (`safe.neutralBroken` altrimenti).

## Flusso e vista
- `flowOf`: un arco per carico; un filo e' percorso se sta su un giro fase-neutro che attraversa almeno un carico.
- Snapshot: `litLoads` (con quadro acceso). La stanza di c04 mostra due lampade.

## Da far controllare al collega
- "In serie ogni lampada riceve solo una parte della tensione": nel gioco le lampade in serie restano spente (semplificazione).
