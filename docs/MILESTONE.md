# Le prove 3D dei moduli (milestone)

Ogni modulo finisce con una prova in una scena 3D: l'appartamento di notte (Modulo 2), l'officina (Modulo 3), e poi il nastro
con il PLC, la casa del futuro e la fabbrica. Sono il punto d'arrivo del modulo: devono sembrarlo.

## Una cornice comune, un contenuto per prova

Tutte le prove hanno la stessa cornice, cosi' chi gioca la riconosce e sa dove guardare:

- **Ingresso**: schermata nera con modulo, titolo e una riga d'atmosfera ("Ore 22:40. Tac."). Copre il caricamento della scena
  (almeno 2,4 secondi, al massimo 8; si puo' saltare).
- **Scena a tutto schermo**, senza barra in alto e piede di pagina.
- **Missione** in alto a sinistra: titolo, obiettivo, i passi del metodo che si spuntano da soli.
- **Registro** in alto a destra: cosa e' successo, con l'ora; da qui le viste, la torcia e il suono.
- **Comandi** in basso: il quadro (o la pulsantiera) da usare, sempre a portata, anche da tastiera. Sotto, un suggerimento
  che dice il passo corrente con parole sue. Qui anche "Rispondi" e "Verifica".
- **Schema e multimetro**: il banco 2D di prima, con il multimetro e l'esito dei controlli, si apre a lato.
- **Momento forte**: quando succede la cosa che conta (lo scatto del differenziale) lampo, scossa, scritta grande e un suono.
- **Finale**: stelle, cosa era il guasto, torna alla mappa o rifai la prova.

Cambia da prova a prova:

- l'atmosfera della scena (notte, capannone, ...);
- i comandi in basso e cosa dicono (tensione a valle, stato);
- i passi del metodo e le frasi del registro;
- il momento forte (differenziale che scatta, emergenza con il lampeggiante rosso, termico che ferma il nastro, ...).

## Dove sta cosa

- `src/content/prove.js`: testi e struttura di ogni prova (titolo, comandi, passi, frasi del registro, finale).
- `src/prove/hud.js`: i pezzi della cornice come HTML e la logica di passi e registro. Funzioni pure, provate in `test/milestone.test.js`.
- `src/prove/page.js`: collega cornice, sessione e scena (tocchi, effetti, ingresso, camera che va a guardare la stanza).
- `src/scene3d/*.js`: le scene. Una scena puo' offrire `torch(on)` e `aim(x, y)` per la torcia.
- `src/ui2d/style.css`, sezione "prove 3D a tutto schermo".

Una prova senza voce in `PROVE` resta com'era: scena accanto al banco, con i pulsanti delle viste. E' il caso dell'officina,
finche' non si decidono i suoi comandi, passi e momento forte.

## Aggiungere la cornice a una prova

1. Voce in `PROVE` con `kick`, `place`, `title`, `tagline`, `clock`, `goal`, `dockTitle`, `controls`, `steps`, `log`, `win`.
2. In `hud.js`: i passi (`stepsOf`, `remember`), le frasi (`describe`) e il suggerimento (`hintOf`) per quella scena;
   in `dockHTML` i comandi, se non sono interruttori modulari.
3. Traduzioni in `src/i18n/` (il test delle lingue elenca quelle che mancano).
4. Test in `test/milestone.test.js` su una partita vera.

## Fluidita'

La resa comune delle scene sta in `src/trilocale/render.js`: ombre ridisegnate solo quando qualcosa si sposta,
oggetti fermi accorpati per materiale, occlusione ambientale a meta' risoluzione, qualita' che scende a gradini solo se
il dispositivo, misurato durante i movimenti, non ce la fa.

Nota: aprendo `index.html` con un doppio clic (indirizzo `file://`) Chrome blocca il caricamento di modelli, texture e luce
ambientale: la scena resta piu' povera. Servita da un sito (anche GitHub Pages) carica tutto.
