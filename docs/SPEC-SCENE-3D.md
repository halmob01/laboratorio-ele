# Scene 3D: fluidita' e caricamento

Come sono fatte le scene 3D (trilocale, appartamento, officina) perche' siano belle, fluide e veloci da aprire.
Raccoglie quello che e' stato misurato e corretto in tre momenti (ottobre 2026):

1. **Fluidita' durante il gioco** (commit `1f0e0a0`, "Scene 3D piu' fluide, stesso aspetto").
2. **Avvio della scena** (commit `f2d7c74`, "Scene 3D: avvio piu' rapido").
3. **Officina** (commit `8e8ae73`): una scena che si muove di continuo, fili vivi, pacchi in serie.

Prima di creare una scena nuova: leggere tutto, seguire la lista "Scena nuova: cosa fare" in fondo, misurare prima e dopo.

## Architettura comune

- Pacchetti separati, caricati solo aprendo la scena: `trilocale.js` (trilocale) e `prove3d.js` (appartamento, officina, le
  prossime prove). Costruiti con esbuild da `scripts/build.mjs`; la pagina principale `index.html` non contiene three.js
  (un test lo controlla, con un tetto alla dimensione del pacchetto: alzarlo solo se serve davvero).
- Resa comune in `src/trilocale/render.js`: `createPipeline` (post-elaborazione, qualita' adattiva, preparazione dei programmi),
  `mergeStatic` (accorpamento), `isLite`, `pixelRatio`.
- Palco comune delle prove in `src/scene3d/kit.js` (`createStage`): renderer, luce ambiente, telecamera, tocchi, etichette,
  disegno su richiesta, ombre. Le scene delle prove si costruiscono sopra il palco; il trilocale ha la sua copia in
  `src/trilocale/scene.js` con le stesse regole.
- Le scene non contengono regole del gioco: ricevono uno stato (`src/prove/state.js`) e lo disegnano.

## 1. Disegnare solo quando serve

- **Disegno su richiesta**: niente ciclo continuo. `redraw()` chiede un fotogramma; `animate(ms, step)` e `loop(fn)` lo tengono
  vivo solo finche' qualcosa si muove (telecamera, lampade che si accendono, nastro in marcia). A riposo: **0 chiamate di
  disegno**. Va sempre verificato (vedi "Misurare").
- Attenzione: nel palco delle prove `loop(fn)` restituisce una funzione per fermarlo e ignora il valore di `fn`; nel trilocale
  `ctx.loop(fn)` si ferma quando `fn` restituisce `false`. Chi usa un ciclo deve fermarlo (bug gia' visto: animazione dei fili
  che non finiva mai).
- **Ombre ridisegnate solo quando un oggetto si sposta** (`moved()` / `dirtyShadows()`), mai per un movimento di telecamera o
  per una luce che cambia intensita'. `shadow.autoUpdate = false` e `needsUpdate` a mano.
- Ombre delle lampade (luci puntiformi: sei viste ciascuna) un fotogramma su tre mentre qualcosa si muove di continuo, e
  comunque appena il movimento finisce; quelle spente non si aggiornano (`r.level > 0.01`).
- **Ombre finte** per cio' che si muove spesso (pacchi sul nastro): una macchia scura sfumata (piano con texture radiale,
  `MeshBasicMaterial` trasparente, `depthWrite: false`) figlia dell'oggetto, `castShadow = false`. Cosi' le ombre del sole
  restano ferme mentre il nastro gira. Nell'officina toglie la ricostruzione dell'ombra a ogni fotogramma (prima 84 chiamate
  su 195).
- Telecamera: spostamenti brevi (0,65 s); i segnaposti HTML si spostano senza essere riscritti (riscriverli a ogni fotogramma
  fa perdere i tocchi).

## 2. Disegnare meno cose

- **Accorpare gli oggetti fermi per materiale** (`mergeStatic`, chiamato da `stage.finish(skip)` a scena costruita): una
  chiamata per materiale invece di una per oggetto. Conta il doppio con le ombre. Risultato della prima fase: appartamento da
  262 a 114 chiamate per fotogramma, trilocale da 192 a 86, officina da 214 a 97.
- Regole di `mergeStatic`: restano separati gli oggetti con `userData` (toccabili o da ritrovare: si ferma anche la discesa nei
  figli), i gruppi passati in `skip` con tutto il loro contenuto, i materiali trasparenti, gli invisibili. Quindi:
  - passare in `skip` **solo** cio' che si muove davvero (il gruppo del motore con la ventola, il braccio del finecorsa, la
    saracinesca), non interi apparecchi: pulsantiera, quadro e nastro sono quasi tutti fermi e si accorpano bene; i pezzi
    toccabili restano separati da soli grazie a `userData`;
  - un materiale che deve cambiare da solo (il tubo di una plafoniera che si accende) deve essere un materiale proprio: con un
    materiale unico l'oggetto non ha compagni e non viene accorpato.
- **Copie della stessa forma** (`InstancedMesh`) per oggetti ripetuti (i pacchi del turno, le loro ombre finte): una chiamata
  per tutti.
- **Occlusione ambientale (GTAO) senza gli oggetti trasparenti**: il suo disegno delle normali e' la scena una seconda volta;
  fili, vetri e scritte non fanno occlusione e ne sono esclusi (`_overrideVisibility` esteso in `render.js`).
- Fili e oggetti "sopra la scena" (`depthTest: false`, additivi): tubi sottili (0,009-0,016), pochi segmenti; ogni filo e' una
  chiamata. Intensita' contenute (circa 1 al massimo): oltre, il tono AgX schiarisce verso il bianco e i colori dei conduttori
  non si riconoscono piu'.

## 3. Qualita' adattiva e risoluzione

- Risoluzione massima **1,5 punti per pixel** (1,25 su telefono): oltre la differenza non si vede e il costo cresce col quadrato.
- Modalita' leggera (`isLite`: puntatore grossolano o contenitore sotto i 700 px): niente occlusione ambientale, ombre piu'
  piccole (1024), antialiasing 2x, niente ombre delle lampade.
- Occlusione ambientale a **meta' risoluzione** (passa dal filtro che la ammorbidisce: la differenza non si vede, costa un quarto).
- Qualita' adattiva a gradini, misurata **solo durante i movimenti** (24 fotogrammi; se 10 superano 40 ms si scende di un
  gradino): occlusione, poi risoluzione 1, poi antialiasing 2x, poi niente antialiasing. Si scende, non si risale.

## 4. Avvio veloce (la parte che si nota di piu' su computer)

Misurato con un profilo della CPU all'avvio: il tempo andava quasi tutto nella **compilazione sincrona dei programmi grafici
al primo disegno** (`getUniforms`), piu' due blocchi nascosti. Regole:

1. **Preparare i programmi in parallelo nella variante giusta** (`pipe.warm()` in `render.js`). three.js sceglie la variante di
   ogni programma in base al bersaglio di disegno attivo: la scena e gli effetti si disegnano in un buffer intermedio (niente
   tono finale), solo l'ultimo passo va sullo schermo. Preparare con `renderer.compileAsync(scene, camera)` verso lo schermo,
   come si faceva prima, produce varianti **mai usate** e quelle vere si compilano tutte insieme al primo fotogramma. Quindi
   `setRenderTarget(composer.renderTarget1)` prima di `compileAsync` (la variante si decide in modo sincrono nella chiamata) e
   `setRenderTarget(null)` solo per l'ultimo passo. `warm()` prepara anche i materiali di tutti i passi della
   post-elaborazione (raccolti dalle proprieta' dei passi), la profondita' delle ombre del sole e la distanza di quelle delle
   lampade.
2. **Un oggetto che arriva dopo** (un modello caricato) si prepara con `pipe.prepare(obj)` prima di aggiungerlo alla scena.
3. **Preparare dopo la luce ambiente**: l'arrivo di `scene.environment` (EXR + PMREM) cambia la variante di **tutti** i
   materiali. Si aspetta l'EXR (al massimo 4 s, `envGate`) e solo dopo si prepara e si disegna.
4. **Niente `material.needsUpdate` a scena aperta**: una texture che arriva dopo (foto del parquet, del prato) parte come
   texture di un punto dello stesso colore (`DataTexture` 1x1; attenzione: colori sRGB scritti dai byte dell'esadecimale, non
   da `THREE.Color`, che e' lineare). Quando arriva quella vera si scambia `material.map` e il programma resta lo stesso.
5. **Niente cambi di visibilita' o di numero delle luci**: luci accese e spente con l'intensita', mai con `visible` o
   `castShadow` (cambierebbero la variante di tutti i materiali).
6. **Oggetti che compaiono dopo**: tenerli nella scena gia' all'avvio, cosi' i loro programmi si preparano con gli altri:
   `InstancedMesh` con `count = 0`, oppure scala minuscola (0,0001) invece di `visible = false` (`compile` salta gli invisibili).
7. **Texture disegnate nel codice su canvas in memoria**: `getContext('2d', { willReadFrequently: true })`. Un canvas
   accelerato dalla scheda video va riletto per diventare texture: nelle misure erano 4 secondi di blocco.
8. **Pre-caricamento a pagina ferma** (`src/ui2d/prefetch.js`): dopo il caricamento, quando il browser e' libero, `<link
   rel="prefetch">` per i pacchetti 3D e i loro file; si salta con risparmio dati, connessione 2G e `file://`. Ogni file nuovo di
   una scena va aggiunto all'elenco `FILES`.

Risultato: trilocale, primo disegno a schermo da 9,5 s a 4,0 s e tempo bloccato da 11,6 s a 4,4 s; appartamento da 12,5 s a
10,0 s (misure con rendering software, che esagera i tempi; sui computer veri la compilazione in parallelo rende ancora di piu',
soprattutto su Windows, ma il rendering software non ha l'estensione per misurarla).

## 5. Modelli e texture

- Modelli glTF/GLB con compressione **meshopt** (`EXT_meshopt_compression`, decoder `MeshoptDecoder` di three), texture **WebP**
  al massimo **512 px**, **senza mappe di occlusione** (l'occlusione ambientale della scena ne fa le veci) e senza estensioni
  che three non usa (per esempio `KHR_materials_diffuse_transmission`). Ogni combinazione diversa di texture in un materiale e'
  un programma grafico in piu' da compilare: meno mappe, meno programmi.
- Semplificare la geometria dove non si vede (poltrona e vaso della pianta: da 85 a circa 48 mila triangoli nel trilocale).
- Risultato: modelli del trilocale da 1,5 MB a 0,8 MB.
- Script: `scripts/slim-modelli.mjs` (istruzioni dentro). Ogni modifica va scritta in `assets/<scena>/CREDITI.md` (le licenze
  CC BY chiedono di dichiarare le modifiche).
- Il resto si costruisce nel codice (muri, arredi, macchine, pezzi del kit in `parts3d.js`): niente download, materiali fisici
  condivisi.
- Luce ambiente: un solo EXR piccolo (512x256, 100 KB) per tutte le scene.
- Aprendo `index.html` da `file://` Chrome blocca modelli, texture ed EXR: la scena resta piu' povera. Per provare e misurare
  servire la cartella con un server (`python3 -m http.server`).

## 6. Misurare (sempre prima e dopo)

Chromium con rendering software (playwright-core, `executablePath` del Chromium preinstallato, argomenti
`--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`), pagina servita in HTTP. Script d'esempio nella
cartella di lavoro della sessione; quello che misurano:

- **Chiamate di disegno**: in `addInitScript` si avvolgono `drawElements`, `drawArrays` e le versioni instanced di
  `WebGL2RenderingContext.prototype`, e `requestAnimationFrame` per contare i fotogrammi. A riposo devono essere 0.
  Avvolgendo anche `viewport` si dividono per dimensione del bersaglio: si riconoscono la scena (dimensione della finestra),
  l'occlusione (meta'), le ombre (1024 o 2048 quadrati), l'alone (piramide di mezzi).
- **Avvio**: `PerformanceObserver` dei `longtask` (tempo bloccato), segno al primo disegno **a schermo** (avvolgere
  `bindFramebuffer` e segnare il primo disegno con framebuffer nullo: il primo disegno in assoluto e' quello del PMREM),
  programmi collegati (`linkProgram`) prima e dopo il primo disegno a schermo: dopo, devono esserci solo i modelli che arrivano.
- **Profilo della CPU** con CDP (`Profiler.start`), diviso per mezzi secondi con la catena di funzioni piu' presente: cosi' si
  sono trovati la compilazione sincrona (`getUniforms`), la ricompilazione all'arrivo della luce ambiente e il blocco del canvas
  accelerato (4 s di "garbage collector").
- Per isolare un colpevole: bloccare un tipo di file con `page.route(regex, r => r.abort())`, o lanciare con
  `--disable-accelerated-2d-canvas`.
- **Aspetto**: screenshot delle stesse inquadrature prima e dopo (la prima fase: differenza sotto lo 0,01% dei pixel).
- Schermate di sequenze: l'orologio del rendering software e' lento e le schermate costano secondi (il gioco intanto va
  avanti); per schermate esatte `page.clock` con `pauseAt` e `runFor`.

Numeri di riferimento attuali (rendering software):

| Scena | A riposo | In movimento, per fotogramma |
|---|---|---|
| Trilocale | 0 | circa 86 |
| Appartamento | 0 | circa 114 |
| Officina, nastro in marcia | 0 | 81 su telefono; 185 su computer (con l'occlusione ambientale; senza, circa 110) |
| Nastro automatico, in marcia | 0 | 100 su telefono (l'inquadratura comprende motore, scivolo e bancale); 162 su computer |
| Casa intelligente, serata che scorre | 0 | con il tetto (interno nascosto): circa 65-90 su telefono, circa 175 su computer; senza tetto (insieme): circa 155 su telefono, circa 310 su computer |

## Scena nuova: cosa fare

1. Costruirla sul palco (`createStage`) o con la stessa resa (`createPipeline`): disegno su richiesta, ombre manuali,
   qualita' adattiva e preparazione dei programmi arrivano gia'.
2. Per ogni animazione continua: un `loop` che si ferma da solo quando non serve piu'.
3. Chiamare `stage.finish(skip)` a scena costruita, con in `skip` solo cio' che si muove; dare `userData` a cio' che si tocca.
4. Ripetizioni: `InstancedMesh`. Oggetti mobili frequenti: ombra finta.
5. Luci: intensita', mai `visible`. Oggetti che compaiono dopo: nella scena da subito (scala minuscola o `count = 0`).
6. Texture caricate dopo: segnaposto di un punto, poi scambio. Texture nel codice: canvas con `willReadFrequently`.
7. Modelli: passare da `scripts/slim-modelli.mjs`, dichiarare le modifiche nei crediti, aggiungere i file a
   `src/ui2d/prefetch.js`.
8. Misurare: 0 chiamate a riposo, programmi tutti pronti al primo disegno a schermo, chiamate in movimento confrontabili con la
   tabella; screenshot su computer e telefono.
9. Verificare senza WebGL: la prova deve funzionare con la cornice e il banco anche se la scena non c'e'.

## Trappole gia' incontrate

- Scene con un processo (`level.process`): la sessione manda uno stato ogni mezzo secondo anche a macchina ferma. La scena deve
  ridisegnare solo se qualcosa e' cambiato, e `createLiveWires.sync` chiede sempre un fotogramma: chiamarlo solo quando cambia
  l'elenco dei fili o il loro stato. La corrente che corre si anima finche' scorre: nel nastro automatico solo a nastro in
  marcia (il PLC e la spia sono alimentati anche da fermi).
- Un gruppo in `skip` non si accorpa per niente: il motore intero sono una ventina di chiamate. Se si muove solo una parte
  (la ventola), in `skip` va solo quella.

- `pkill -f` con un pezzo della riga di comando puo' uccidere la shell stessa: fermare il server in un altro modo.
- Nomi di classi CSS gia' usati altrove: `.stop` del banco ha `pointer-events: none` e rendeva intoccabile il tasto Arresto.
  Prefisso proprio per ogni cornice (`pst-`, `tst-`, ...).
- Segnaposti HTML riscritti a ogni fotogramma: il tocco va perso. Spostarli, non riscriverli.
- Ridimensionare il contenitore della scena con una transizione CSS: a ogni fotogramma si riallocano i buffer degli effetti e
  la scena sparisce per un attimo. Cambiare dimensione in un colpo solo.
- Confronti tra stati per riconoscere gli eventi (nell'officina): lo stato "di prima" non va azzerato quando la prova riparte,
  o la prima azione si perde.
- Nel trilocale `ctx.animate` segna le ombre da rifare a ogni passo (serve a chi sposta oggetti con ombra). Per luci che si
  accendono, acqua che sale, oggetti senza ombra vera usare `ctx.loop` (casa: da 8 ombre del sole per un cambio di luce a 1).
- `mergeStatic` del trilocale si chiama prima di `extend`: gli oggetti aggiunti vanno accorpati dalla scena che li aggiunge.
- Viste da fuori con il tetto messo: l'interno non si vede ma si disegna lo stesso. Nella casa si nascondono gli oggetti interni
  (mai le luci) a tetto messo e a programmi pronti (`whenReady()` del trilocale): la vista esterna passa da 160 a 90 chiamate.
