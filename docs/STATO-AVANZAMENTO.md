# Stato di avanzamento del piano automatico

Piano: `docs/PIANO-AUTOMATICO.md`. Ramo di lavoro: `b3-notte` (il ramo `b2-modello-lezione` e' chiuso e unito in `main`).

**Fase F unita in main. Prossimo compito: D (c04, due lampade in parallelo), poi E.** E0 rinviato (vedi riga sotto). Piano nuovo in `docs/PIANO-AUTOMATICO.md`.

| Data | Compito | Note |
|---|---|---|
| 2026-10-13 | Piano scritto (Opus) | |
| 2026-10-13 | Fase A completata (A1-A7) | Nuovo modello lezione/esercizio applicato a c01. 70 test verdi, screenshot 390 e 1280 controllati, revisione Opus fatta: corretti 1 grave e 4 medi. Unione in main. |
| 2026-10-13 | Fase B completata (Quaderno) | Rotta #/quaderno, collegamenti da mappa e footer, stampa. 71 test verdi, screenshot 390 e 1280. Revisione Opus non ripetuta (modifica piccola e isolata). Unione in main. |
| 2026-10-13 | Fase C completata (c02, c03, c05, c06) | Lezioni, passi, sintesi e sfide guasto, tutte verificate dai test. Revisione Opus dei testi: corrette didascalie delle demo (stato iniziale dei deviatori), sicurezza, guasto di c06. Domande per il collega in DOMANDE-PER-MATTEO.md. 91 test verdi. |
| 2026-10-13 | Piano della seconda parte della notte (Opus) | E0, F (trilocale 3D), D (c04), E |
| 2026-10-13 | E0 valutato e rinviato | La scala del banco e' limitata dall'altezza (colonna di 4-5 componenti), non dalla larghezza: una disposizione su due colonne obbligherebbe a fili che si incrociano e non migliora la leggibilita'. Resta un vuoto laterale solo estetico. Da rivedere con Matteo. |
| 2026-10-13 | F: trilocale (versione 1) | Rotta `#/modulo/1`, scena three.js in `trilocale.js` separato, pianta SVG come ripiego, circuiti t01-t03 come livelli, linguette, quaderno aggiornato. 104 test verdi. Manca: collaudo, multimetro, guasti, sicurezza. |
| 2026-10-13 | F: gate | Revisione Opus: corretti modalita' contatore sul trilocale, doppio caricamento dello script, stato della casa dopo ricaricamento, quadro generale, 'Livello successivo' da c06, tocchi durante la lezione. Unita in main. |
| 2026-10-13 | D: gate | c04 'Due lampade' (parallelo): motore multi-carico, lezione, sfida guasto in serie, stanza con due lampade. Specifica scritta a posteriori (docs/SPEC-PIU-CARICHI.md, deviazione dal piano). Revisione Opus: corretti riconoscimento serie, spia luce, aiuto sul flusso, testo del guasto. 115 test verdi. Prossimo: E (rifiniture). |
| 2026-10-13 | E: rifiniture | Fuoco sul titolo della lezione, sfida guasto ripetibile dopo diagnosi sbagliata, stanza statica senza tabindex, passi di cablaggio non fatti con cortocircuito, README (prova e nuovo livello). 117 test verdi. Resta: collaudo finale, E0, email contatto. |
| 2026-10-13 | Piano Moduli 2 e 3 (Opus) | Specifica del motore v2 (docs/SPEC-MOTORE-V2.md), nucleo in src/engine/v2 con 12 test, piano H1-H4 in PIANO-AUTOMATICO.md. Ramo b4-moduli. Prossimo: H1.1. |
| 2026-10-14 | Revisione indipendente del nucleo v2 | 4 gravi e 6 medi corretti (sicurezza phaseSwitched con protezione aperta, arresto nel solo ramo di autoritenuta, carico sulla terra, termico scavalcato, fase a terra, riarmo dopo corto, stato iniziale delle prove, colori del secondario e del comando, protectedBy). 20 test v2. Prossimo: H1.1 con Sonnet. |
| 2026-10-14 | Bug telefono: selezione dei fili | Il filo si crea al rilascio e non alla pressione: un dito che tocca un morsetto per scorrere o scivola via non crea fili per sbaglio. Tolto il riquadro di fuoco dopo il tocco. Provato con tocco, trascinamento e scivolamento. Pubblicato in main. Prossimo: H1.1 (non iniziato, stop alle 05:55). |
| 2026-10-14 | H1.1 testi dei codici v2 | Frasi per prove funzionali, guasti e sicurezza del motore v2, colori rosso e bianco, ruoli bassa e comando. Prossimo: H1.2 (sessione). |
| 2026-10-14 | H1.3 corrente visibile v2 | src/engine/v2/flow.js (flowV2): fili percorsi tra sorgenti diverse attraverso carichi, bobine e motori; punti in cui la tensione si ferma. Test. Prossimo: H1.2 (sessione). |
| 2026-10-14 | Revisione generale dei bug | Corretti: fili cancellati dal click dopo il tocco (360 px), Già lo so non cliccabile, finestre più alte dello schermo senza Chiudi (ora si chiudono anche toccando lo sfondo), barra dei passi che allargava la pagina (su telefono solo i numeri), Informativa raggiungibile da telefono, uscita dalla sfida guasto che perdeva l'esito, barra dei passi in c06, Marrone spezzato, demo e disegno dei fili più lenti, 'Comincia' a fine introduzione. Restano: fili e lezione persi ricaricando la pagina a metà livello, scritta 'livelli completati' con il trilocale da fare, scheda del compito in modalità contatore, fuoco dopo la finestra del nome. |
