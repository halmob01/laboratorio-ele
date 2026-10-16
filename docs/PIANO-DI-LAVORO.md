# Piano di lavoro di Fase e Neutro (Laboratorio elettrico)

Riepilogo di ciò che è stato scelto, delle fasi da fare e di chi fa e chi rivede ogni compito. Il dettaglio didattico sta in `docs/SYLLABUS.md`.

## 1. Scelte fatte

**Idea.** Un gioco a livelli per chi parte da zero, che si impara cablando: previsione, prova, spiegazione del perché. I livelli hanno identificativi stabili e se ne possono inserire tra quelli già fatti.

**Percorso.**
- **Milestone 0, Fondamenta:** circuito chiuso, presa, interruttore, parallelo, deviato, invertito (due livelli nuovi, quattro già esistenti).
- **Milestone 1, il trilocale:** appartamento civile con bagno interrotto, camera deviata, corridoio invertito. Pagina speciale con scena 3D e collaudo finale.
- **Milestone 2, civile avanzato:** relè ad impulsi, presa comandata con punto luce, luce temporizzata, campanello con trasformatore, quadro con protezioni.
- **Milestone 3, industriale:** trifase, teleruttore con marcia e arresto, relè termico, inversione di marcia, nastro trasportatore.
- Ogni milestone chiude con una pagina speciale in 3D (three.js, forme semplici e asset liberi dove serve).

**Didattica.**
- Ogni livello è un'unità: lezione breve con disegno animato, previsione, esempio guidato, esercizio, verifica con spiegazione del perché, sfida guasto.
- Prologo animato in più scene all'ingresso di ogni milestone, come in sito-feudo.
- Due modalità: apprendimento (aiuti) e verifica (nessun aiuto, esito registrato). Le prove di milestone sono sempre in verifica.

**Nome.** Fase e Neutro.

**Homepage e salto.** Prima schermata con intestazione, pulsante Continua, mappa dei livelli e delle milestone, strumenti. Nessun livello bloccato; "Già lo so" apre il livello in verifica come prova di salto; i livelli saltati non danno XP. Dettagli in SYLLABUS sezione 12.

**Aspetto.** Il disegno attuale non è vincolante: la pagina si ridisegna pensando prima al telefono (una colonna, schede Banco/Schema/Stanza, barra in basso). Deve funzionare bene su telefono.

**Corrente visibile.** Quattro stati di ogni filo (non collegato, in tensione sulla fase, sul neutro, percorso da corrente), punto di apertura evidenziato, aiuto che si riduce con i livelli e sparisce nelle prove.

**Schemi.** Funzionale (da c02), multifilare (da c05), unifilare in pianta (trilocale), con simbologia normalizzata e collegati al banco. Tre tipi di esercizio: dallo schema al cablaggio, dal cablaggio allo schema, riconoscere gli errori in uno schema.

**Guasti e verifiche.** Ogni livello ha la sua sfida guasto: prima il filo sbagliato, poi il multimetro con guasti nascosti, poi i guasti dei componenti. Procedura di sicurezza dalla Milestone 1. Dimensionamento di protezioni e cavi dalla presa in poi.

**Classifica.** XP semplici sul modello di sito-feudo: funziona 40, colori 30, sicurezza 30, bonus per previsione giusta, nessun suggerimento, guasto risolto; penalità per suggerimenti e soluzione mostrata; conta il miglior tentativo. Gradi crescenti. Classifica unica, azzerata dal docente tra un gruppo e l'altro.

**Dati.** Nome o soprannome a testo libero (20 caratteri), con moderazione del docente, e un identificativo casuale della partita. Per ogni livello: stelle, XP, tentativi, suggerimenti, soluzione mostrata; errori aggregati per tipo. Niente cognome, email, IP, posizione. Raccolta tramite Foglio Google come nel feudo. Prima di raccogliere dati di minorenni si parla con il referente per la privacy della scuola.

**Valori e obiettivi.** Obiettivi e valori di dimensionamento li ho scelti come punto di partenza: il collega di laboratorio può proporre modifiche e si correggono in un solo punto.

**Tecnica.** Motore senza grafica (fatto), contenuti separati, vista 2D separata, vista 3D come seconda vista sopra lo stesso motore. File finale unico `index.html`, generato con `npm run build`. Test automatici a ogni build.

## 2. Come si lavora

**Un compito alla volta**, come negli altri progetti: prima si pianifica, poi si realizza, poi qualcuno che non l'ha scritto rivede.

| Chi | Che cosa fa |
|---|---|
| Opus 5.5 | Scrive la specifica di ogni compito (una pagina: obiettivo, vincoli, come si prova). Progetta e realizza le parti difficili del motore. Rivede il motore, i formati dei dati, la sicurezza e la privacy, e la coerenza didattica con il syllabus. Fa la revisione complessiva a ogni build. |
| Sonnet 5.5 | Realizza il grosso: viste, editor, schede, scene 3D, script del foglio, lezioni e prologhi da specifica, test. Rivede il lavoro di Haiku. |
| Haiku 5.5 | Lavori ripetitivi e controlli: dati dei livelli da specifica, ortografia e terminologia in italiano, etichette di accessibilità, README e registro delle modifiche, esecuzione dei test con riepilogo, elenco di asset e licenze. |
| Gianluca | Scelte, prove su telefono e computer a ogni build, giudizio didattico finale. |
| Collega di laboratorio | Correttezza tecnica di simboli, valori, lezioni e guasti; propone modifiche. |
| Referente privacy | Informativa e raccolta dati, prima della build 3. |

**Regole**
- L'autore non rivede il proprio lavoro. Quando Opus scrive una parte critica del motore, la rivede un'altra sessione di Opus partendo da zero, con in più test scritti da Sonnet sulla sola specifica.
- Ogni build ha un ramo dedicato e si unisce a `main` solo dopo il suo gate.
- **Gate di build:** test automatici verdi, pagina costruita provata in un browser simulato, revisione complessiva di Opus, prova di Gianluca su telefono e computer.

## 3. Fasi

### B0, separazione di motore e vista (fatta)

| Compito | Realizza | Rivede |
|---|---|---|
| 0.1 Motore, contenuti e vista separati, test di equivalenza | Sonnet (fatto) | Opus, revisione indipendente prima del merge |
| 0.2 Unione a `main` | Gianluca | |

### B1, Fondamenta 1: livelli c01-c04

| Compito | Realizza | Rivede |
|---|---|---|
| 1.0 Specifica di impaginazione per telefono e homepage (schermate, navigazione, bozza di aspetto) | Opus | Gianluca |
| 1.0b Nuova impaginazione e navigazione a schermate; homepage con mappa e stati dei livelli | Sonnet | Opus; prova di Gianluca su telefono |
| 1.0c Prova di salto e regole XP dei livelli saltati | Sonnet | Opus |
| 1.1 Syllabus come dato: obiettivi, livelli con id stabili, unità; versione dei salvataggi e migrazione | Sonnet | Opus |
| 1.2 Registro locale degli eventi, XP, gradi, profilo con nome libero e filtro | Sonnet | Opus |
| 1.3 `flowOf`: percorso della corrente e punti di apertura; test con confronto a un oracolo a cammini semplici | Opus; test Sonnet | Opus, sessione separata |
| 1.4 Vista della corrente visibile: stati, legenda, segno del punto di apertura | Sonnet | Opus |
| 1.5 Simboli SVG dei primi componenti e scheda dello schema funzionale | Sonnet | Collega di laboratorio; Haiku per le etichette di accessibilità |
| 1.6 Livelli c01 e c04: modello, soluzione, suggerimenti, guasto | Haiku, dalla specifica | Sonnet, con i test automatici |
| 1.7 Lezioni brevi e testi degli errori di c01-c04 | Sonnet | Opus (coerenza), collega (tecnica), Haiku (ortografia) |
| 1.8 Prologo animato della Milestone 0, otto scene | Sonnet | Opus, Gianluca |
| 1.9 Previsione, spiegazione degli errori, modalità apprendimento e verifica | Sonnet | Opus |
| 1.10 Dimensionamento semplice (tipo E) in c02 e c04 | Sonnet | Collega, Opus |
| 1.11 Gate B1: test, riepilogo, prova | Haiku (test, riepilogo); Gianluca (prova) | Opus, revisione complessiva |

### B2, Fondamenta 2: livelli c05-c06, Milestone 0 completa

| Compito | Realizza | Rivede |
|---|---|---|
| 2.1 `netlist` e `compareNetlists` | Opus; test Sonnet | Opus, sessione separata |
| 2.2 Editor degli schemi (esercizio di tipo B) | Sonnet | Opus |
| 2.3 Schema multifilare e schemi con errori inseriti (tipo C) per c05 e c06 | Sonnet | Opus (equivalenza con le soluzioni), collega |
| 2.4 Livelli c05 e c06 con guasto "filo sbagliato" | Haiku (dati), Sonnet (lezioni) | Sonnet, Opus |
| 2.5 Gate B2 | Haiku; Gianluca | Opus |

### B3, classifica

| Compito | Realizza | Rivede |
|---|---|---|
| 3.1 Specifica dei dati raccolti e dell'informativa breve | Opus | Referente privacy, Gianluca |
| 3.2 Script e Foglio Google: invio, lettura, validazione dei campi | Sonnet | Opus (sicurezza) |
| 3.3 Classifica e pannello docente sul modello di sito-feudo | Sonnet | Opus |
| 3.4 Filtro dei nomi e informativa in gioco | Sonnet | Gianluca; Haiku per l'ortografia |
| 3.5 Ricalcolo dei punteggi sul foglio (facoltativo) | Opus (progetto), Sonnet | Opus, sessione separata |
| 3.6 Gate B3 | Haiku; Gianluca | Opus |

### B4, Milestone 1: il trilocale

| Compito | Realizza | Rivede |
|---|---|---|
| 4.1 three.js nel build, dimensione del file, alternativa senza WebGL | Sonnet | Opus |
| 4.2 Scena 3D del trilocale | Sonnet | Gianluca; Haiku per l'elenco di asset e licenze |
| 4.3 Pianta unifilare | Sonnet | Collega |
| 4.4 Motore: difetti nei componenti e multimetro | Opus; test Sonnet | Opus, sessione separata |
| 4.5 Procedura di sicurezza ed effetto sugli XP | Sonnet | Opus |
| 4.6 Collaudo del trilocale: guasto nascosto, dimensionamento delle tre linee | Sonnet | Opus, collega |
| 4.7 Gate B4 e prova in classe | Haiku; Gianluca | Opus |

### B5, Milestone 2: civile avanzato

| Compito | Realizza | Rivede |
|---|---|---|
| 5.1 Motore: componenti con stato derivato (relè, impulsi, tempo, trasformatore), calcolo fino a stato stabile | Opus; test Sonnet | Opus, sessione separata |
| 5.2 Livelli c07-c11: dati, lezioni, guasti | Sonnet; Haiku per i dati | Opus, collega |
| 5.3 Quadro e dimensionamento delle linee | Sonnet | Collega, Opus |
| 5.4 Scena 3D dell'appartamento, giorno e notte | Sonnet | Gianluca |
| 5.5 Gate B5 | Haiku; Gianluca | Opus |

### B6, Milestone 3: industriale

| Compito | Realizza | Rivede |
|---|---|---|
| 6.1 Motore: trifase, teleruttori, motore, autoritenuta, termico, interblocco | Opus; test Sonnet | Opus, sessione separata |
| 6.2 Livelli c12-c16 e guasti del trifase | Sonnet; Haiku per i dati | Opus, collega |
| 6.3 Scena 3D del nastro trasportatore | Sonnet | Gianluca |
| 6.4 Gate B6 | Haiku; Gianluca | Opus |

### B7, rifiniture

Bonus (per esempio stella-triangolo), accessibilità e prestazioni, eventuale verifica dei punteggi sul foglio se non fatta in B3. Compiti assegnati con lo stesso schema quando si arriva qui.

## 4. Attività che tornano a ogni build

- **Haiku:** correzione ortografica e controllo dei termini in tutti i testi, etichette di accessibilità, aggiornamento di README e registro delle modifiche, esecuzione dei test e riepilogo, controllo che la pagina costruita si apra.
- **Sonnet:** revisione dei lavori di Haiku.
- **Opus:** specifica di ogni compito e revisione complessiva al gate.
- **Gianluca:** prova su telefono e computer.
- **Collega di laboratorio:** lettura tecnica dei contenuti nuovi.

## 5. Ancora aperto

- Pubblicazione su GitHub Pages: serve prima il merge su `main` e l'attivazione di Pages sul repository.
- Schema multifilare: disposizione dei componenti uguale a quella del banco (consigliato) o libera?
- Controllo dei punteggi sul foglio: in B3 o dopo?
- Presa: tutti i livelli aperti, prova di salto in verifica, XP zero ai livelli non giocati. Asset 3D: forme semplici più modelli liberi dove migliorano la resa, licenza annotata.
- Numeri degli XP e soglie dei gradi: si tarano dopo la prima prova in classe.
