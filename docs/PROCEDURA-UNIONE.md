# Procedura di unione dei rami

Più sessioni lavorano sul progetto in parallelo (livelli, motore, scene 3D). Per non scontrarsi si segue sempre questa procedura.
Scritta il 16 ottobre 2026 da Gianluca, dopo la collisione evitata tra la casa intelligente e la fabbrica 3D.

## 1. Prima di cominciare un lavoro
- Partire da `main` aggiornato: `git fetch origin && git checkout -b <nome-ramo> origin/main`.
- Un ramo per lavoro, con un nome che dice cosa fa (`casa-intelligente`, `motore-lucchetto-zone-energia`). Mai lavorare direttamente su `main`.
- **Prenotare i numeri** che due sessioni potrebbero prendere insieme, scrivendoli nella tabella in fondo a questo file e caricando subito il ramo:
  numeri dei livelli (`cNN`) e file arabi (`src/i18n/ar-NN.js`). Controllare sempre `git fetch` e la tabella prima di scegliere.

## 2. Durante il lavoro
- Commit piccoli e frequenti sul proprio ramo; `git push -u origin <ramo>` a fine di ogni blocco, così l'altra sessione vede cosa si sta toccando.
- Le regole del gioco (`src/engine`) si cambiano solo con il motivo scritto in `docs/SPEC-MOTORE-V2.md` o `docs/SPEC-PROCESSI.md` e con un test.
- Ogni testo italiano nuovo ha la traduzione araba (`node scripts/check-lang.mjs ar`).

## 3. Prima di unire in `main`
1. `git fetch origin` e guardare se `main` è avanzato.
2. Se è avanzato: **unire `main` nel proprio ramo** (`git merge origin/main`), mai il contrario, e risolvere lì i conflitti.
3. Conflitti noti e come risolverli:
   - `index.html`, `trilocale.js`, `prove3d.js` (file costruiti): non risolverli a mano. Prendere una versione qualsiasi e rifare `npm run build`.
   - `docs/STATO-AVANZAMENTO.md`: tenere le righe di tutti, in ordine di data.
   - `src/i18n/ar.js`: tenere tutte le righe `import` e tutti i `...pNN` nell'elenco di `registerLang`.
   - `src/content/home.js`: tenere i livelli di entrambi, nell'ordine del percorso.
4. Dopo l'unione: `npm run build` e `npm test` (tutti verdi, nessuna frase araba mancante). Committare anche i file costruiti.
5. Solo allora: `git checkout main && git merge --ff-only <ramo> && git push origin main`.
   Se `--ff-only` fallisce `main` è avanzato di nuovo: tornare al punto 1.

## 4. Dopo l'unione
- Segnare il lavoro in `docs/STATO-AVANZAMENTO.md`.
- I rami già interamente in `main` si cancellano (`git push origin --delete <ramo>`), salvo che l'utente voglia tenerli.

## Numeri prenotati (aggiornare a ogni nuovo ramo)

| Cosa | Numeri | Ramo / sessione | Stato |
|---|---|---|---|
| Livelli casa intelligente c47-c50 | c47-c50 | casa-intelligente | in `main` |
| File arabi di c47-c50, lucchetto | ar-38, ar-39, ar-40 | casa-intelligente, motore-lucchetto-zone-energia | in `main` |
| Prova 3D della fabbrica "Il turno di notte" | c51 | claude/stoic-hawking-u5cka0 | in lavorazione (fase 1 fatta) |
| File arabi della fabbrica 3D | ar-41 (usato), ar-45 (usato: scheda della mappa) | claude/stoic-hawking-u5cka0, fabbrica-fase3b | ar-41 e ar-45 usati |
| Lavori in sicurezza, Gestione dei carichi, Clima per zone | c52, c53, c54 | livelli-casa-sicurezza | in lavorazione |
| File arabi dei tre livelli | ar-42 (usato); ar-43 e ar-44 liberi | livelli-casa-sicurezza | ar-42 usato |
| Fabbrica fase 3b (pezzi del reparto, nessun numero) | - | fabbrica-fase3b, da `claude/stoic-hawking-u5cka0` | istruzioni in `docs/FABBRICA-FASE-3B.md` |
