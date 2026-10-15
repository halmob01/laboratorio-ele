# Progetto: "Una notte senza luce", la prima milestone che deve fare effetto

**Stato: realizzato** (vista dei fili, tre scatti, atti, suono, nuova impaginazione). Differenze rispetto al progetto:
il quadro e' in HTML e CSS (moduli DIN disegnati con gli stili) invece che in SVG; al passo "Trova il quadro" si aggiunge
un'inquadratura `dispersione` che tiene insieme quadro e stufetta durante la sequenza della linea isolata.
Verificato: 0 chiamate di disegno a riposo; screenshot di ogni atto su computer e telefono.

Documento di progetto per chi lo realizza. La prova c23 oggi funziona (cornice a tutto schermo, quadro in basso,
scatto con lampo), ma la scena 3D resta uno sfondo: il quadro e' un pannello 2D, lo scatto e' un lampo in CSS che non
spiega niente. Qui si progetta la versione che fa effetto ed e' fluida.

## L'idea in una riga

**Far vedere la corrente.** La casa e' al buio; con gli occhi dell'elettricista si vedono i fili nei muri. Quando chiudi
una linea l'energia corre dal quadro alla stanza e la stanza si accende. Quando la linea guasta e' chiusa da sola, si vede
la corrente che scappa verso terra dalla stufetta, il differenziale la sente e, tac, tutto si spegne e tace.

E' il momento piu' spettacolare e insieme quello che insegna di piu': mostra perche' il differenziale scatta.
E premia il metodo: la dispersione si vede solo quando la linea e' isolata (vedi "Tre scatti diversi").

## Il racconto in tre atti

### Atto 1: l'arrivo (5-7 s la prima volta, 2 s quando si rifa', sempre saltabile)

1. **Schermata nera** con il testo della chiamata, al posto del titolo di oggi:
   - `22:40 · Via Roma 7, interno 3`
   - «È saltata la luce e non torna su. Ho provato a rialzarla ma scatta subito.»
   - pulsante **Entra**. Il tocco sblocca l'audio (i browser lo vogliono) e dà il via.
   Dietro, intanto, si carica la scena. Se non e' pronta quando si preme Entra, compare la barra di caricamento.
2. **Esterno, notte.** La casa con il tetto, vista da lontano. Finestre calde accese (bagno, camera, corridoio),
   il blu della TV in soggiorno che tremola appena. Ronzio di frigorifero e TV a volume bassissimo.
   La camera si avvicina piano (carrellata di 2 s).
3. **Tac.** Tutte le finestre si spengono insieme, i suoni si fermano di colpo. Mezzo secondo di silenzio vero.
4. **Il tetto si alza** (c'e' gia', e' quello del trilocale) e la camera scende sull'ingresso. Buio.
   La torcia si accende da sola e punta verso il quadro.

### La lezione

Se la lezione non e' ancora stata vista, la sua scheda compare qui, sopra la casa buia, come "briefing prima di entrare".
Non cambia niente nella sessione: e' solo l'ordine in cui la pagina mostra le cose (ingresso, poi lezione, poi gioco).

### Atto 2: il buio e il metodo

1. **Trova il quadro.** Suggerimento: "Trova il quadro elettrico: di solito è vicino alla porta d'ingresso."
   Il segnaposto del quadro pulsa nella torcia. Toccandolo (o con il pulsante "Apri il quadro", anche da tastiera)
   la camera va al quadro, lo **sportello fume' si apre** (rotazione di 0,5 s), poi la camera torna alla casa e
   **i comandi salgono dal basso**. Rifacendo la prova questo passo dura un attimo, senza fermarsi.
2. **Il gioco.** Come oggi (aprire le linee, riarmare, richiudere una alla volta, rispondere, scollegare,
   verificare), ma ogni azione si vede nei fili:
   - leva su una linea con il differenziale armato: l'energia parte dal quadro e corre lungo la fase fino alla stanza
     (0,4 s), la stanza si accende, poi la corrente torna sul neutro. Per circa 1,5 s si vedono i trattini che
     scorrono, poi resta una luce ferma e tenue sui fili in tensione;
   - leva giu': i fili di quella linea si spengono all'indietro, verso il quadro;
   - passandoci sopra (mouse) o con il fuoco da tastiera, una leva illumina appena il percorso della sua linea:
     "questa leva comanda il corridoio". Si impara il legame linea-stanza senza leggerlo.
3. **Tre scatti diversi**, scelti da `tripStory()` (vedi sotto):
   - **linea isolata** (solo la linea prese chiusa, differenziale armato): la sequenza al rallentatore
     (1,6 s, saltabile con un tocco):
     - 0,0 s: l'energia corre fino alla presa e alla stufetta, le resistenze diventano arancioni;
     - 0,35 s: trattini sulla fase in uscita; sul neutro ne tornano meno. Dalla stufetta partono scintille arancioni;
       il filo di terra si accende e porta la corrente che scappa fino al quadro. In 3D, vicino alla stufetta,
       l'etichetta "Dispersione verso terra · 300 mA";
     - 0,6 s: sul modulo del differenziale nel quadro compare il bollino rosso "Δ 300 mA > 30 mA";
     - 1,1 s: **TAC**. Tutto nero di colpo, i suoni si fermano, lampo breve, vibrazione sul telefono, scritta grande:
       "Con la sola linea prese chiusa scatta: la dispersione è su questa linea."
   - **piu' linee chiuse** (per esempio si riarma senza aprire niente): niente rivelazione. Si accendono tutte le linee
     chiuse, il bollino "Δ 300 mA" compare sul differenziale, ma la terra si illumina solo dal lato del quadro con un
     punto interrogativo. Scritta: "Il differenziale sente 300 mA che non tornano, ma non sa da quale linea vengono."
     Il metodo diventa necessario: e' il cuore didattico.
   - **tasto T**: bollino "Δ" sul differenziale, nessun filo verso la casa. Scritta: "Il tasto T crea apposta una piccola
     dispersione: il differenziale funziona."
4. **Scollegare la stufetta**: la camera va in soggiorno, la spina si sfila (spostamento di 15 cm in 0,3 s, il cavo
   sparisce), le scintille si spengono.

### Atto 3: la luce torna

Dopo la Verifica riuscita (sequenza di circa 4 s, saltabile):
1. le linee si riaccendono una alla volta, con l'energia che corre (corridoio, cucina, soggiorno), e i suoni
   tornano uno alla volta (frigorifero, TV);
2. la camera risale, il tetto torna al suo posto e si rivede l'esterno dell'atto 1: le finestre di nuovo calde,
   la TV che tremola. Ora sullo schermo: "23:12 · Tutto acceso." (l'ora e' quella dell'orologio della prova);
3. scheda finale con le stelle che compaiono una alla volta, ognuna con un suono breve.

E' lo specchio dell'arrivo: la storia si chiude.

## Vista dei fili: come e' fatta

Nuovo modulo `src/scene3d/wiring.js`, usato da `appartamento.js`.

**Percorsi** (metri; muri tagliati a `WALL_H = 1.45`; i fili corrono appena sopra il taglio, `y = 1.47`, cosi' dall'alto
sembrano nella sezione del muro; scendono o salgono solo alle estremita'). Il quadro e' sul muro ovest dell'ingresso
(`HOUSE.breaker`: x 0, z 6.5; centralino a y 1.2).
- **Luce**: quadro (0.12, 1.2, 6.5) → su a 1.47 → nord lungo x = 0.12 fino a z = 4.25 → giu' all'interruttore
  (0.12, 1.1, 4.25) → su → est lungo z = 4.25 fino a x = 4.5 → su alla lampada (4.5, 2.0, 4.25).
  Conduttori: fase, neutro.
- **Prese**: quadro → est lungo il muro z = 5 (passa sopra la porta, nell'architrave) fino a x = 6.15 → giu' alla presa
  (6.15, 0.32, 5.07) → cavo della stufetta (6.15, 0.3, 5.4). Conduttori: fase, neutro, terra.
- **Cucina**: quadro → nord lungo x = 0.12 fino a z = 0.12 → est lungo z = 0.12 fino a x = 2.35 → giu' alla presa del
  forno (2.35, 0.3, 0.12). Conduttori: fase, neutro, terra.
- Fase, neutro e terra corrono affiancati, a 2,5 cm l'uno dall'altro. Dove due linee condividono un tratto,
  si affiancano.

I numeri sono un punto di partenza: si sistemano guardando gli screenshot (devono leggersi dalla vista d'insieme e
da quella del soggiorno).

**Forma**: `TubeGeometry` lungo una `CatmullRomCurve3` con tensione bassa (o `CurvePath` di segmenti retti con angoli
smussati), raggio circa 0.022 (da verificare: a 17 m di distanza deve fare circa 3 pixel piu' l'alone). Una mesh per
conduttore: 8 in tutto.

**Materiale**: `ShaderMaterial` unico, con uniform:
- `uColor`: fase ambra `#FF9F45`, neutro `#5EA8FF`, terra `#8FD14F`, dispersione `#FF5A2A`;
- `uLive` (0..1), `uFront` (0..1, quanto del percorso e' gia' in tensione: la "corsa" dell'energia),
  `uFlow` (0..1, intensita' dei trattini), `uTime`, `uDir` (+1 verso il carico, -1 verso il quadro), `uLen`;
- frammento: `base = uColor * (0.12 + 0.88 * uLive) * step(vUv.x, uFront)`;
  `dash = smoothstep(0.4, 0.5, fract(vUv.x * uLen / 0.35 - uTime * 1.6 * uDir))`;
  colore finale `base + uFlow * dash * uColor * 2.5`. Valori sopra 1 fanno partire l'alone: la catena di disegno
  attuale ha gia' il bloom (`src/trilocale/render.js`), non si aggiunge nessun passaggio.
- `transparent`, `blending: AdditiveBlending`, `depthTest: false`, `depthWrite: false`, `renderOrder` alto:
  e' la vista dell'elettricista, i fili si vedono attraverso i muri. Spenti e senza la vista attiva: invisibili.

**Interfaccia del modulo**:
- `setLine(line, { live, flow })` con transizioni animate (corsa in avanti all'accensione, all'indietro allo
  spegnimento);
- `highlight(line | null)` per il passaggio sopra la leva;
- `leak({ isolated })` per la sequenza della dispersione;
- `setVisible(on)` per l'interruttore "Fili" nella cornice. Predefinito acceso: e' la firma della prova.

**Scintille**: un solo `Points` con circa 40 particelle additive alla stufetta, animate nello shader con `uTime`.
Visibili solo durante la sequenza della dispersione.

**Etichetta 3D** "Dispersione verso terra · 300 mA": un'etichetta HTML come quelle di oggi (`addLabel`), mostrata
solo durante la sequenza.

## Suono: `src/prove/sound.js`

Tutto sintetizzato con WebAudio, niente file:
- `click()`: leva (rumore filtrato breve e un colpo basso);
- `tac()`: scatto del differenziale (piu' forte, metallico);
- `hum(name, on)`, suoni continui a volume bassissimo, legati allo stato vero:
  - frigorifero (linea cucina: 50 e 100 Hz, guadagno circa 0.015);
  - TV (linea prese: rumore filtrato che respira, circa 0.01);
  - stufetta (prese con la stufetta collegata: rumore basso e un ticchettio).

L'effetto sta nel contrasto: quando scatta, tutto tace insieme. Si accende solo dopo "Entra". Pulsante muto con la
scelta ricordata (`fase-e-neutro-suono`, gia' usata). Allo scatto, sul telefono, `navigator.vibrate([30, 40, 80])`.

## Cornice: meno testo, piu' scena

- **Missione in alto a sinistra**: titolo, il passo corrente scritto grande su una riga, sei pallini.
  Toccandola si apre l'elenco completo.
- **In alto a destra**: pulsanti a icona con testo per Fili, Torcia, Suono e Vista d'insieme, piu' "Registro"
  che apre il registro (chiuso all'inizio).
- **Quadro in basso**: moduli DIN disegnati in SVG, non piu' in CSS:
  - moduli bianchi con la targhetta stampata;
  - leva con corsa fisica e rimbalzo allo scatto;
  - spia verde quando c'e' tensione a valle;
  - sul differenziale, il tasto T giallo e la bandierina di scatto;
  - lettura "230 V / 0 V" a valle di ogni linea, come oggi;
  - il bollino "Δ" durante gli scatti.
  Passaggio e fuoco su una leva illuminano la linea nei fili.
- Il resto resta com'e' oggi: domanda, finale, schema e multimetro a lato, comandi da tastiera.

## Fluidita': regole e misure

Regole:
- **A riposo zero fotogrammi**: si continua a disegnare solo quando qualcosa cambia, come oggi.
  I trattini si muovono solo per circa 1,5 s dopo ogni azione, poi resta una luce ferma.
- **Disegno continuo solo** durante: ingresso (massimo 7 s), passaggi di atto (massimo 1,5 s), corsa dell'energia
  (massimo 2 s), sequenza della dispersione (1,6 s), finale (massimo 4 s).
- **Nessuna nuova luce con ombre** e nessun nuovo passaggio di post-elaborazione.
- **Al massimo 25 chiamate di disegno in piu'** (8 tubi, 1 nuvola di scintille, sportello, spina).
- Gli shader nuovi si preparano con `compileAsync` insieme al resto (c'e' gia'), cosi' la prima volta che si accende
  un filo non c'e' scatto.
- Su telefono (modalita' leggera): scintille ridotte a 20, nessuna carrellata lunga nell'ingresso.

Misure, da fare prima e dopo:
- chiamate di disegno per fotogramma e fotogrammi nei 5 s di riposo (devono essere 0), con il metodo dello script di
  confronto usato per l'ottimizzazione: si contano le `drawElements` e le `requestAnimationFrame` dal browser;
- screenshot di ogni atto su computer (1440×900) e telefono (390×844), con la pagina servita da `python3 -m http.server`
  (aprendo il file con un doppio clic Chrome non carica modelli e texture);
- prova finale su un portatile della scuola e su un telefono veri. Il browser di prova disegna via software e non dice
  la fluidita' reale.

## Movimento ridotto e senza 3D

- **Movimento ridotto** (`prefers-reduced-motion`): tagli al posto delle carrellate, niente scossa e niente lampo.
  Fili accesi o spenti senza trattini che scorrono. Sequenze istantanee con la loro scritta.
- **Senza WebGL**: la cornice funziona come oggi, con comandi, domanda, schema e verifica. Le sequenze si saltano.

## Cosa si tocca

| File | Cosa |
|---|---|
| `src/trilocale/scene.js` | opzione `startRoof` (si parte con il tetto); `setRoof` senza spostare la camera; accesso alle finestre di ogni stanza per accenderle nell'atto 1 (sono gia' in `ctx.rooms[id].wins`) |
| `src/scene3d/parts3d.js` | sportello fume' del centralino, apribile |
| `src/scene3d/wiring.js` | nuovo: percorsi, materiale, corsa dell'energia, scintille |
| `src/scene3d/appartamento.js` | fili, spina che si sfila, finestre, viste nuove (ingresso, quadro da vicino, esterno); API `story(nome)` per le sequenze e `highlight(linea)` |
| `src/prove/sound.js` | nuovo: suoni |
| `src/prove/hud.js` | `tripStory()` (funzione pura: isolata, piu' linee, tasto T, nessuno scatto), passo "Trova il quadro", missione compatta, quadro in SVG, bollino Δ |
| `src/prove/page.js` | gli atti come piccola macchina a stati (`arrivo → lezione → quadro → gioco → finale`), le sequenze, i suoni, il passaggio sulle leve |
| `src/content/prove.js` | testi nuovi: chiamata, suggerimenti, scritte delle sequenze |
| `src/ui2d/style.css` | cornice compatta, quadro SVG |
| `src/i18n/ar-19.js` | traduzioni arabe dei testi nuovi (il test delle lingue elenca quelle mancanti) |
| `test/milestone.test.js` | `tripStory` sui tre casi; atti (con la pagina senza WebGL si arriva al gioco con Entra); movimento ridotto |
| `docs/MILESTONE.md` | aggiornare con la vista dei fili e il suono come elementi comuni |

Le regole del gioco non cambiano: niente in `src/engine/`. La sessione non sa nulla degli atti; la pagina
sceglie solo cosa mostrare e quando.

## Ordine di lavoro (un commit per fase, test verdi e screenshot a ogni fase)

1. **Fili** (wiring.js e percorsi), senza sequenze: accesi e spenti seguendo lo stato. E' la parte che decide se
   l'idea funziona: screenshot dalla vista d'insieme e dal soggiorno, al buio e con le luci.
2. **Corsa dell'energia e passaggio sulle leve.**
3. **Scatti**: `tripStory`, la sequenza della dispersione, i suoni.
4. **Atto 1**: chiamata, esterno con le finestre, tac, tetto, ingresso, sportello del quadro.
5. **Atto 3**: il finale.
6. **Cornice compatta e quadro SVG.**
7. **Movimento ridotto, telefono, misure di fluidita', traduzioni, documentazione.**

Dopo la fase 1 conviene fermarsi e far vedere gli screenshot: se i fili non si leggono bene dalla vista d'insieme,
si cambiano spessore, altezza o colori prima di costruirci sopra.
