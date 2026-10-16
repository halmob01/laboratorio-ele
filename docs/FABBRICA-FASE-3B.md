# Fabbrica, fase 3b: istruzioni per la sessione che la fa

Questo file basta per cominciare. Se ti hanno detto "fai la fase 3b della fabbrica", fai esattamente questo.

## Dove sei

Progetto "Fase e Neutro", gioco didattico di impianti elettrici (tutto in italiano: codice commentato, documenti, testi).
Si sta costruendo la prova 3D del Modulo 6, "Il turno di notte" (livello `c51-turno-notte`). Le fasi 1 e 2 sono fatte.
La fase 3 (i pezzi 3D nuovi) e' divisa in due meta' che lavorano in parallelo **su file diversi**:
- **3a**: un'altra sessione, ramo `claude/stoic-hawking-u5cka0`, file `src/scene3d/parts-cella.js` (portale del robot, finecorsa);
- **3b**: tu, ramo `fabbrica-fase3b`, file qui sotto.

## Prima di cominciare

1. Leggi `CLAUDE.md`, `docs/PROCEDURA-UNIONE.md`, `docs/SPEC-SCENE-3D.md` (regole obbligatorie di fluidita') e
   `docs/PROGETTO-FABBRICA.md` (sezione 5, la scena; sezione 8, "Fase 3 divisa in due": contratto comune e misure della cella).
2. Leggi `src/scene3d/parts3d.js` (kit: `kitMaterials`, `box`, `cylinder`, `textPlane`, `led`; esempi `pushStation`,
   `cabinetPanel`, `stackLight`, `plcModule`, `photoCell`), `src/scene3d/capannone.js` (`buildHall`, opzioni `sun` e `mood`),
   `src/scene3d/automatico.js` (come si usa `buildHall` con un'ora diversa), `src/prove/state.js` (`fabbricaState`).
3. Crea il tuo ramo dal ramo della fabbrica (non da `main`: i file della fabbrica sono li'):
   `git fetch origin && git checkout -b fabbrica-fase3b origin/claude/stoic-hawking-u5cka0`, e caricalo subito
   (`git push -u origin fabbrica-fase3b`) cosi' l'altra sessione vede che ci stai lavorando.

## Che cosa fare (solo questi file)

### 1. `src/scene3d/parts-reparto.js` (nuovo)
- `fence(M, o)`: recinzione della cella. Area interna 3,2 m (x) per 2,4 m (z), alta 2,0 m, origine a terra al centro.
  Pannelli di rete metallica con una texture a griglia disegnata su un canvas in memoria
  (`getContext('2d', { willReadFrequently: true })`) e `alphaTest` (non `transparent`: cosi' si accorpano). Montanti gialli.
  Portella larga 0,9 m sul lato +z, a 0,6 m dall'angolo -x, che ruota sui cardini quando `stato.door` e' vero (il gruppo della
  portella va in `skip`). Sulla portella l'interruttore di sicurezza con un LED (acceso a portella chiusa).
  Portella e telaio toccabili: `userData = { id: 'P', kind: 'toggle' }`.
- `ksModule(M)`: il relè di sicurezza KS come modulo da guida DIN, da mettere nell'armadio (`cabinetPanel`, guida bassa,
  accanto al PLC). LED dei due canali, dell'uscita e del riarmo che seguono `stato.ks`, `stato.emergency`, `stato.door`.
  LED come in `plcModule`: una sola InstancedMesh con il colore per istanza (una chiamata di disegno).
- `hmiStand(M)`: pannello operatore su un supporto a colonna, da mettere fuori dalla recinzione. Cornice nera e schermo acceso
  (materiale emissivo azzurrino) quando `stato.panelOn && stato.hmi && stato.hmi.link`, spento o grigio altrimenti.
  Nessun testo nello schermo: i contenuti sono nella cornice HTML.

Ogni pezzo ritorna `{ group, picks, set(stato), skip? }`. `set` ritorna `true` solo se ha cambiato qualcosa (a riposo 0
chiamate di disegno). Luci e LED si accendono con l'intensita' o il colore, mai con `visible`.

### 2. `src/scene3d/capannone.js` (solo aggiunte)
Esporta un preset `NOTTE` (le opzioni `sun` e `mood` di `buildHall` per la notte: sole quasi spento e bluastro, ambiente basso)
e, se serve, un'opzione per accendere una sola fila di plafoniere (per esempio `rowsOn: [2]`). Senza le opzioni nuove
`buildHall` deve fare esattamente quello che fa oggi: officina e nastro automatico non cambiano.

### 3. Anteprima fuori dal gioco
Nella tua cartella temporanea (non nel repository): una pagina che importa i tuoi pezzi (con esbuild, gia' nelle dipendenze) in
una scena three.js minima, e schermate con Playwright e Chromium (`executablePath: '/opt/pw-browsers/chromium'`, argomenti
`--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`; il modulo e' in `/opt/node22/lib/node_modules/playwright`).
Guarda portella chiusa e aperta, KS armato e no, pannello acceso e spento, la notte nel capannone; correggi quello che non va.

### 4. Controlli
- Officina e nastro automatico invariati: `npm run build`, servi la cartella (`python3 -m http.server`) e confronta le schermate
  di `#/livello/c24-officina` e `#/livello/c46-nastro-automatico` prima e dopo. Non usare `pkill -f` (uccide la shell).
- `npm run build` e `npm test`: tutti verdi.

## Da non toccare
`src/scene3d/parts-cella.js` (e' dell'altra meta'), `parts3d.js`, `entry.js`, `officina.js`, `automatico.js`, i file di
contenuto (`src/content`), il motore (`src/engine`), `src/prove`. Niente file arabi: i pezzi non hanno testi visibili.

## Per chiudere
Commit sul ramo `fabbrica-fase3b` con un messaggio in italiano, push. **Non unire in `main` e non toccare il ramo
`claude/stoic-hawking-u5cka0`**: lo unisce l'altra sessione prima della fase 4. Aggiungi in fondo a
`docs/STATO-AVANZAMENTO.md` una riga con: cosa hai fatto, firme delle funzioni e campi di stato che leggono, dimensioni e
coordinate (portella, cardini, interruttore, centro del pannello), quante mesh e materiali nuovi, ultimo commit, dubbi.
