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
| Prova 3D della fabbrica "Il turno di notte" | c51 | claude/stoic-hawking-u5cka0, fabbrica-fase3b | in `main` (fasi 1-4) |
| File arabi della fabbrica 3D | ar-41, ar-45 | claude/stoic-hawking-u5cka0, fabbrica-fase3b | in `main` |
| Lavori in sicurezza, Gestione dei carichi, Clima per zone | c52, c53, c54 | livelli-casa-sicurezza | in `main` |
| File arabi dei tre livelli | ar-42 (usato, in `main`); ar-43 e ar-44 mai usati: liberi | livelli-casa-sicurezza | chiusa |
| Fabbrica fase 3b (pezzi del reparto, nessun numero) | - | fabbrica-fase3b, da `claude/stoic-hawking-u5cka0` | in `main` |
| Prova 3D della casa "Una sera d'inverno": motore, livello, cornice | c55, ar-46 | casa-motore-cornice (sessione A di `docs/PIANO-CASA.md`) | in `main` (A1-A4, 17 ottobre) |
| Prova 3D della casa: scena e scheda in mappa | ar-47 | claude/modest-tesla-prr9oc (sessione B di `docs/PIANO-CASA.md`, al posto di casa-scena-3d) | in `main` (B1-B4, 17 ottobre) |
| Review pedagogica, pilota sul Modulo 2 (testi delle lezioni c17-c11, c23; slide in c01) | ar-48 | review-modulo2 | in `main` |
| Previsioni equilibrate in tutti i livelli (risposte riscritte) | ar-49 | previsioni-equilibrate | in `main` |
| Review pedagogica del Modulo 3 (testi delle lezioni c21-c16, c52, c24; vista delle tabelle a più colonne) | ar-50 | claude/elegant-galileo-ou3t8x | in `main` |
| Review pedagogica del Modulo 4 (c28 stella-triangolo, c29-c32, c46): c28 si fa qui, non con il Modulo 6 sicurezza | ar-51 | claude/elegant-galileo-ou3t8x | in `main` |
| Review pedagogica del Modulo 5 (c47-c50, c38-c42, c53-c55) | ar-52 | review-modulo5 | in `main` |
| c53: attesa di 5 s prima di staccare la pompa (esercizio corretto) | ar-53 | c53-distacco | in `main` |
| Review pedagogica del Modulo 6 (c25-c27, c33-c37, c43-c45, c51) | ar-54 | review-modulo6 | in `main` |
| Review pedagogica delle prove 3D (c23, c24, c46, c51, c55) | ar-55 | review-prove3d | in `main` |
| Slide oltre le 110 parole (c23, c25-c27, c34, c35, c37, c43) divise o accorciate; stato della review aggiornato | ar-56 | claude/bold-heisenberg-0v4gc0 | in `main` |
| Prove 3D: regola «Da ricordare» nel rapporto finale (il campo `win` non era letto dalla vista), lucchetto in c24 e c51 | ar-57 | claude/bold-heisenberg-0v4gc0 | in `main` |

## Rami vecchi (non cancellare, non usare)

Aggiornato il 17 ottobre 2026. Tutto il lavoro utile e' in `main` e il resto si parte sempre da `origin/main`.
- **Interamente in `main`** (nessun commit in piu'): `casa-intelligente`, `casa-motore-cornice`, `fabbrica-fase3b`, `fix-titoli-c47-c50`,
  `livelli-casa-sicurezza`, `motore-lucchetto-zone-energia`, `p5-plc`, `p5-revisione`, `p6-energia`, `p6-pannello`, `p6-processi`,
  `p6-revisione`, `p7-linea`, `claude/*` (tutti i cinque). Si possono cancellare quando si vuole.
- **Storia riscritta, vecchi del 13-14 ottobre** (hanno commit "in piu'" solo perche' la storia di `main` non li contiene piu' tali e quali):
  `b1-c01`, `b2-modello-lezione`, `b3-notte`, `b4-moduli`, `b5-trilocale-3d`, `p1-modulo2`, `p2-trifase`, `p3-prove3d`,
  `separazione-motore-vista`. Tenuti per sicurezza; non unirli.

## Punto di ritorno: fine della prima fase

Il commit **`fe4fee0`** (17 ottobre 2026) e' lo stato stabile di fine prima fase: percorso completo c01-c55 in `main`, 602 test verdi,
nessuna frase araba mancante, documentazione allineata. Il codice e' identico a `98aa50e` (cambia solo la documentazione).
Il tag `fine-prima-fase` non e' stato pubblicato (il push dei tag dalla sessione non funzionava): vale il numero del commit.
Se in futuro lo si crea da GitHub (Releases, "Create a new release", sul commit `fe4fee0`), annotarlo qui.

Se qualcosa si rompe, **non** riscrivere `main`: ripartire da li' in un ramo nuovo.
- Guardare cosa e' cambiato dopo: `git diff fe4fee0 HEAD --stat` (e `git log --oneline fe4fee0..HEAD`).
- Recuperare un solo file com'era: `git checkout fe4fee0 -- percorso/del/file`, poi `npm run build` e `npm test`.
- Ripartire da zero da quel punto: `git checkout -b ripristino fe4fee0`, `npm ci`, `npm run build`, `npm test` (devono dare 602 verdi).
- Riportare `main` a quel punto solo se Gianluca lo decide: e' una scelta distruttiva (`git reset --hard` e push forzato). Meglio un
  commit di annullamento: `git revert --no-commit fe4fee0..HEAD`, controllare, committare.
