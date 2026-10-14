// Costruisce index.html: un unico file autonomo (HTML, CSS e JavaScript) da aprire con un doppio clic.
// Uso: npm run build

import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const result = await build({
  entryPoints: [join(root, 'src/ui2d/app.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  write: false,
  legalComments: 'eof',
});

const js = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const css = await readFile(join(root, 'src/ui2d/style.css'), 'utf8');
const template = await readFile(join(root, 'src/ui2d/index.template.html'), 'utf8');

// Si usa una funzione di sostituzione per non interpretare i "$" presenti nel codice.
const html = template.replace('/*CSS*/', () => css.trimEnd()).replace('/*JS*/', () => js.trimEnd());

await writeFile(join(root, 'index.html'), html);
console.log('index.html scritto (' + Math.round(html.length / 1024) + ' KB)');

// Pacchetto della scena 3D del Modulo 1: separato, si carica solo aprendo un circuito del trilocale.
const scene = await build({
  entryPoints: [join(root, 'src/trilocale/scene.js')],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: true,
  write: false,
  legalComments: 'eof',
});
await writeFile(join(root, 'trilocale.js'), scene.outputFiles[0].text);
console.log('trilocale.js scritto (' + Math.round(scene.outputFiles[0].text.length / 1024) + ' KB)');
