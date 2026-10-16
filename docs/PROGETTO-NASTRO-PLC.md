# Progetto: "Il cambio formato", la prova del nastro automatico (Modulo 4)

**Stato: realizzato** (livello c46, scena `automatico`). Differenze rispetto al progetto:
- arrivo senza saracinesca: e' giorno, si entra dal piazzale (`scene.arrival()`);
- cambiando il programma la simulazione riparte: i pacchi tornano all'inizio (la scena salta li', non li fa scorrere indietro);
- un pacco fermo davanti alla fotocellula quando il PLC riparte viene contato di nuovo (il PLC vede il fronte): e' quello che
  fa un PLC vero e si vede nel conteggio;
- la corrente nei fili si anima solo a nastro in marcia (per il riposo a 0 chiamate);
- il motore si accorpa tranne la ventola.

Misure (Chromium con rendering software): a riposo 0 chiamate; in marcia 162 su computer e 100 su telefono; programmi tutti
pronti al primo disegno a schermo tranne uno (come l'officina). Officina invariata dopo l'estrazione del capannone
(schermate uguali, 185 e 81 chiamate).

Documento di progetto per chi la realizza. Chiude il Modulo 4 (Automazione) con una prova 3D, come l'appartamento chiude il
Modulo 2 e l'officina il Modulo 3. La cornice e' quella comune (`docs/MILESTONE.md`); le regole di fluidita' quelle di
`docs/SPEC-SCENE-3D.md`, da leggere prima di toccare la scena.

## L'idea in una riga

Lo stesso capannone dell'officina, a mezzogiorno: il nastro ora lo comanda un PLC e confeziona i pacchi in lotti. Stamattina
un collega ha cambiato il programma per i lotti da 4 invece che da 3. Va collaudato nella pausa pranzo: il primo lotto
riesce, ma poi il nastro non riparte piu'. Il guasto e' nel programma, e un programma si cambia solo a nastro fermo.

## Come si lega alle altre prove

| | Officina (M3) | Nastro automatico (M4) |
|---|---|---|
| Ora e atmosfera | 6:40, alba fredda, saracinesca chiusa | 13:30, sole alto dalle finestre, pausa pranzo |
| In basso | pulsantiera, salvamotore, termico | la stessa pulsantiera, la spia del lotto, il contatore dei pacchi |
| A sinistra | il verbale: cinque prove | il verbale: cinque prove |
| Il guasto | un filo (95-96 fuori dal comando) | una riga del programma (il contatore non si azzera) |
| Si corregge | a salvamotore aperto | a nastro fermo, dall'editor del ladder nel banco |
| Finale | le 7:00, il turno parte | le 14:00, la linea riparte con i lotti da 4 |

Il testo didattico e' quello di c32 (`Il nastro con il PLC`): fotocellula sull'ingresso I2, contatore CTU, fungo e termico
che restano nei fili in serie alla bobina, consenso delle sicurezze sull'ingresso I3.

## Il racconto in atti

1. **Ordine di modifica** (5-7 s, saltabile): "Cambio formato. Da oggi i lotti sono da 4 pacchi. Il programma e' stato
   cambiato stamattina: collaudalo durante la pausa, la linea riparte alle 14." Copre il caricamento della scena.
2. **Arrivo** (3 s): la saracinesca e' gia' aperta (e' giorno), la camera entra dal piazzale sul nastro; la torretta e'
   spenta, sul nastro i pacchi aspettano fermi davanti alla fotocellula.
3. **La lezione** (solo la prima volta): due pagine e la previsione, poi la sintesi.
4. **Il collaudo**, con il verbale a sinistra che si spunta guardando lo stato vero:
   - *Marcia*: premuto Marcia il nastro parte;
   - *Lotto da 4*: dopo il quarto pacco davanti alla fotocellula il nastro si ferma e la spia "Lotto pieno" si accende;
   - *Nuovo lotto*: con Marcia parte un lotto nuovo e la spia si spegne. **Qui il guasto**: il nastro non riparte e la
     spia resta accesa (momento forte, sotto);
   - *Arresto*; *Emergenza* (come nell'officina).
5. **Diagnosi**: "Rispondi" con quattro carte; la giusta e' "il contatore non si azzera mai".
6. **Correzione a nastro fermo**: il banco a lato con l'editor del ladder; nel gradino del contatore "Si azzera con: I1
   (Marcia)". Se il nastro gira, il pulsante del banco prima chiede di fermarlo (come il salvamotore nell'officina).
7. **Ricollaudo e Verifica**: le prove si rifanno, poi Verifica.
8. **Finale**: le 14:00, la sirena, i pacchi scorrono e si impilano sul bancale quattro alla volta; il verbale di collaudo.

### Il momento forte: il nastro non riparte

Premuto Marcia a lotto pieno: niente. Il contatore sulla pulsantiera resta su 4/4, la spia resta accesa, la torretta va al
giallo lampeggiante; nel PLC (nell'armadio) il LED di I1 si accende finche' Marcia e' premuto mentre quello di Q0 resta spento.
Sottotitolo grande "Il nastro non riparte.", piccolo "Marcia arriva al PLC, ma il programma non la lascia passare.".
Si vede la catena: pulsante -> filo acceso -> LED dell'ingresso -> uscita spenta. E' la differenza con il Modulo 3: il filo
c'e' ed e' in tensione, il guasto e' dentro il programma.

## Il motore (cose nuove, piccole)

- **Modello di processo `pacchi`** (`src/engine/v2/process.js`): un flusso di pacchi a passo fisso su un nastro mosso dal
  motore (attuatore `run` dal motore M). Stato `s` (metri percorsi); espone `beam` (un pacco davanti alla fotocellula),
  `passed` (pacchi che hanno superato la fotocellula) e `out` (pacchi arrivati in fondo, sul bancale). La fotocellula e' un
  `sens` con `sense: { v: 'beam' }`, come i galleggianti di c37. Con passo 0,5 s della simulazione il pacco resta davanti
  alla fotocellula almeno 0,8 s: nessun fronte perso.
- **Regola `safety.programStopped`** (motori): cambiare il programma mentre uno di quei motori gira costa la stella di
  sicurezza (`safe.programRunning`), come cablare in tensione (`safe.liveWork`). La sessione avvisa subito
  (`programLiveNow`); Annulla tutto riporta all'impianto di partenza e cancella l'errore, come al banco.
- **Livello c46** (`c46-nastro-automatico`), `prova: { scene: 'automatico' }`: cablaggio di c32 posato (`fixed`), il
  programma guasto in `unit.fault.programs` (CTU a 4 senza reset), prove funzionali sui lotti da 4.

Le regole esistenti non cambiano.

## La scena (`src/scene3d/automatico.js`)

Riusa tutto quello che c'e':
- il capannone dell'officina (pareti, finestre, pavimento, strisce, passerella dei cavi, plafoniere, saracinesca) estratto
  in `src/scene3d/capannone.js` e usato da entrambe le scene: l'officina resta identica (controllo con screenshot);
- dal kit (`parts3d.js`): nastro, motore, torretta, pulsantiera, armadio, pacco, led, scritte;
- fili vivi (`createLiveWires`) con i percorsi dell'officina (`officina-wires.js`), estesi ai morsetti del PLC, della
  fotocellula e della spia del lotto;
- pezzi nuovi nel kit: `plcModule` (PLC sulla seconda guida DIN dell'armadio, con i LED di ingressi e uscite che seguono lo
  stato vero) e `photoCell` (fotocellula a sbarramento con il raggio visibile quando e' interrotto).

Fluidita' (lista "Scena nuova" della specifica):
- pacchi del flusso: **una `InstancedMesh`** con le **ombre finte** (un'altra `InstancedMesh`), come il turno dell'officina;
  il bancale con i pacchi impilati: un'altra `InstancedMesh` (`count` che cresce, mai `visible`);
- il raggio della fotocellula: un materiale proprio, acceso con l'intensita';
- LED del PLC: materiali propri (non si accorpano), accesi con `emissiveIntensity`;
- `stage.finish(skip)` con in `skip` solo i pezzi che si muovono (pacchi, motore, torretta, saracinesca);
- un solo `loop` per nastro e pacchi, che si ferma da solo a nastro fermo; a riposo 0 chiamate di disegno;
- luce: il sole alto entra dalle finestre (ombre del sole ferme: niente si sposta tranne i pacchi, che hanno l'ombra finta);
  plafoniere accese a meta' (giorno);
- obiettivo: in marcia non oltre le chiamate dell'officina (circa 110 senza occlusione, 185 con).

## Cornice (`src/content/prove.js`, `src/prove/hud.js`, `src/prove/page.js`)

La cornice dell'officina diventa la cornice "di reparto", per officina e nastro automatico: stessa pulsantiera in basso,
stesso verbale, stessi atti; cambiano i testi, le prove e cosa sta accanto alla pulsantiera (qui: la spia del lotto e il
contatore dei pacchi letto dal PLC, invece della leva del sovraccarico).
Eventi del collaudo in `automaticoEvents` (funzione pura, come `officinaEvents`), provati in `test/milestone.test.js` su una
partita vera.

## Testi

In `PROVE.automatico` (scheda, prove, frasi del registro, suggerimenti, verbale). Arabo in `src/i18n/ar-37.js`.

## Ordine di lavoro

1. Motore: modello `pacchi`, regola `programStopped`, livello c46 con le prove funzionali; test (soluzione che passa,
   programma guasto che non passa, programma cambiato in marcia che perde la stella di sicurezza).
2. Capannone in comune; officina invariata (screenshot prima e dopo, stesse chiamate di disegno).
3. Scena del nastro automatico; cornice; testi; arabo.
4. Misure (0 chiamate a riposo, programmi pronti al primo disegno a schermo, chiamate in marcia), screenshot a 390 e 1280.
