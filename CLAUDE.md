# Fase e Neutro: note per chi lavora sul progetto

Gioco didattico di impianti elettrici per allievi elettricisti IeFP. Interfaccia e documentazione in italiano.

- Costruzione: `npm run build` (scrive `index.html`, `trilocale.js`, `prove3d.js`: vanno sempre ricostruiti e committati).
- Test: `npm test`. Traduzioni mancanti: `node scripts/check-lang.mjs ar` (un file nuovo `src/i18n/ar-NN.js` per ogni lavoro,
  registrato in `src/i18n/ar.js`; controllare prima quale numero e' libero).
- Le regole del gioco stanno in `src/engine` e non si cambiano per esigenze della grafica.
- Più sessioni lavorano in parallelo: prima di cominciare e prima di unire in `main` seguire `docs/PROCEDURA-UNIONE.md`
  (un ramo per lavoro, numeri di livello e file arabi prenotati nella tabella, unire `main` nel proprio ramo, mai il contrario).
- Documentazione in `docs/`: le prove 3D in `docs/MILESTONE.md` e nei `docs/PROGETTO-*.md`.

## Scene 3D

Prima di creare o modificare una scena 3D leggere `docs/SPEC-SCENE-3D.md`: come sono state rese fluide e veloci da aprire
(disegno su richiesta, ombre manuali, accorpamento, preparazione dei programmi nella variante giusta, modelli leggeri,
pre-caricamento), la lista di cose da fare per una scena nuova e come misurare prima e dopo.

## Review pedagogica delle lezioni (fase 2)

Se Gianluca chiede "fai la review pedagogica del modulo N" (o di alcuni livelli), tutto quello che serve è qui:
- **Metodo e ricetta passo per passo:** `docs/METODO-REVIEW-PEDAGOGICA.md`, §7 (cosa leggere prima, ramo, prenotazione del file arabo,
  le prove dell'allievo finto prima e dopo, diagnosi, riscrittura, controlli, arabo, unione). Lo scopo: l'allievo deve capire *perché*
  fa ogni collegamento e a che cosa serve, non solo collegare.
- **Esempio finito da imitare:** `docs/review/modulo2.md` (schede dei livelli, confronto prima/dopo) e le lezioni di c17-c11 in
  `src/content/units-v2.js`.
- **Consegne da copiare per gli agenti:** `docs/review/CONSEGNE.md` (allievo finto con Sonnet, traduzione araba con Haiku).
- **Script:** `scripts/review/pacchetto-allievo.mjs <modulo>` (testo per l'allievo finto; `--commit fe4fee0` per le lezioni di
  partenza), `scripts/review/misure.mjs <modulo>` (parole per slide, lunghezza delle risposte), `scripts/review/prova-tasti.mjs <livello>`
  (tasti della lezione nel browser), `scripts/check-review-scope.mjs` (perimetro: va lanciato dopo ogni commit).
- **Specifiche delle pagine della lezione** (che cosa mostra ogni tipo di pagina, tabelle a due colonne, lunghezze, regole delle
  previsioni): `docs/LEZIONE-ED-ESERCIZIO.md`, §6. Le previsioni hanno la risposta giusta lunga quanto le altre: lo controlla `npm test`.
- **Perimetro:** nelle lezioni si cambiano spiegazioni, testi dei pezzi, previsioni, sintesi e lo stile delle lezioni; passi, sfida
  guasto, demo e il codice di banco, motore e scene no. Un difetto che tocca il codice si chiede prima a Gianluca.
- **Stato:** pilota sul Modulo 2 fatto; Modulo 3 fatto (`docs/review/modulo3.md`, ar-50); Modulo 4 fatto con c28 e verifica piena dei livelli PLC (`docs/review/modulo4.md`, ar-51); da fare Modulo 6 sicurezza (c25-c27), poi il controllo leggero del resto
  (ordine nel §7 del metodo). Le sessioni su moduli diversi possono lavorare in parallelo.

