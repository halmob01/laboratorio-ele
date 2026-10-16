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
