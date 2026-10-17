// Prova dei tasti della lezione con clic veri, a 390 e 1280 px: Avanti, Indietro, demo, previsione, Sintesi,
// Rivedi la lezione, Salta la lezione; misura anche quanto ci mette a cambiare pagina. Serve index.html costruito.
// Uso: node scripts/prova-tasti-lezione.mjs c18-rele   (richiede playwright-core installato a parte e Chromium;
// percorso del browser in CHROMIUM, predefinito quello delle sessioni cloud)
import { chromium } from 'playwright-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
const level = process.argv[2] || 'c18-rele';
const page = pathToFileURL(fileURLToPath(new URL('../index.html', import.meta.url))).href;
const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const log = [];
const ok = (w, cond, msg) => log.push(`${w}px ${cond ? 'OK ' : 'NO '} ${msg}`);
for (const w of [390, 1280]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 500 ? 844 : 900 }, hasTouch: w < 500 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(page + '#/livello/' + level);
  await p.waitForTimeout(1000);
  for (let k = 0; k < 6; k++) { for (const s of ['[data-skipname]', '[data-intro="skip"]']) { const x = await p.$(s); if (x && await x.isVisible()) { await x.click(); await p.waitForTimeout(300); } } }
  const title = () => p.$eval('#lesson h2', e => e.textContent).catch(() => null);
  const kind = () => p.$eval('#lesson .kick', e => e.textContent).catch(() => '');
  const tap = async sel => { const t0 = Date.now(); await p.click(sel, { timeout: 4000 }); return Date.now() - t0; };
  const waitChange = async (before) => { const t0 = Date.now(); while (Date.now() - t0 < 3000) { if ((await title()) !== before) return Date.now() - t0; await p.waitForTimeout(20); } return -1; };
  let pages = 0, maxMs = 0;
  const t1 = await title();
  await tap('[data-unit="next"]'); let ms = await waitChange(t1); ok(w, ms >= 0, `Avanti: da "${t1}" alla pagina 2 in ${ms} ms`);
  const t2 = await title();
  await tap('[data-unit="back"]'); ms = await waitChange(t2); ok(w, (await title()) === t1, `Indietro torna a "${t1}" (${ms} ms)`);
  await tap('[data-unit="next"]'); await waitChange(t1);
  for (let i = 0; i < 15; i++) {
    const k = await kind(), t = await title(); pages++;
    if (/Guarda come si fa/.test(k)) {
      const n0 = await p.$eval('#demoN', e => e.textContent);
      await tap('[data-demo="toggle"]'); await p.waitForTimeout(300);
      const lab = await p.$eval('[data-demo="toggle"]', e => e.textContent);
      await tap('[data-demo="step"]'); await p.waitForTimeout(200);
      const n1 = await p.$eval('#demoN', e => e.textContent);
      ok(w, lab === 'Riprendi' && Number(n1) >= Number(n0), `Demo: Pausa ferma (${lab}), Passo successivo ${n0} -> ${n1}`);
      await tap('[data-demo="restart"]'); await p.waitForTimeout(300);
      const n2 = await p.$eval('#demoN', e => e.textContent);
      ok(w, Number(n2) <= 2, `Demo: Rivedi riparte da capo (${n2})`);
    }
    if (/Previsione/.test(k)) {
      const dis = await p.$eval('[data-unit="next"]', e => e.disabled);
      ok(w, dis, 'Previsione: Avanti bloccato prima di rispondere');
      await tap('[data-pred]'); await p.waitForTimeout(200);
      const fb = await p.$eval('#lesson .fb', e => e.textContent.slice(0, 20)).catch(() => null);
      const dis2 = await p.$eval('[data-unit="next"]', e => e.disabled);
      ok(w, fb && !dis2, `Previsione: risposta data, spiegazione "${fb}…", Avanti sbloccato`);
    }
    const nx = await p.$('[data-unit="next"]'); if (!nx) break;
    const label = await nx.textContent();
    await tap('[data-unit="next"]');
    ms = await waitChange(t); maxMs = Math.max(maxMs, ms);
    if (ms < 0) { ok(w, !(await p.$('#lesson h2')), `Ultima pagina "${t}": "${label}" porta all'esercizio`); break; }
  }
  ok(w, maxMs < 300, `Pagine viste ${pages + 1}, cambio pagina più lento ${maxMs} ms`);
  await p.waitForTimeout(400);
  const sum = await p.$('[data-act="summary"]');
  if (sum) { await tap('[data-act="summary"]'); await p.waitForTimeout(300); const ov = await p.$eval('#overlay', e => e.textContent.length).catch(() => 0); ok(w, ov > 50, 'Sintesi si apre durante l\'esercizio'); await p.keyboard.press('Escape'); await p.waitForTimeout(200); }
  else ok(w, false, 'tasto Sintesi non trovato');
  await tap('[data-unit="lesson"]'); await p.waitForTimeout(300);
  ok(w, !!(await title()), `Rivedi la lezione riapre "${await title()}"`);
  await tap('[data-unit="skip"]'); await p.waitForTimeout(300);
  ok(w, !(await p.$('#lesson h2')), 'Salta la lezione porta all\'esercizio');
  ok(w, errs.length === 0, 'Nessun errore JavaScript' + (errs.length ? ': ' + errs.join(' | ') : ''));
  await p.close();
}
await b.close();
console.log(log.join('\n'));
