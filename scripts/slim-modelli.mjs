// Alleggerisce i modelli glTF/GLB delle scene 3D (vedi docs/SPEC-SCENE-3D.md, sezione 5):
// niente mappe di occlusione ne' trasmissione diffusa, texture al massimo 512 px in WebP, compressione meshopt conservata.
//
// Le librerie non sono tra le dipendenze del progetto: si installano a parte, in una cartella di lavoro.
//   mkdir /tmp/gt && cd /tmp/gt && npm i @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions meshoptimizer sharp
//   NODE_PATH=/tmp/gt/node_modules node --preserve-symlinks scripts/slim-modelli.mjs ingresso.glb uscita.glb
// (oppure copiare lo script in /tmp/gt e lanciarlo da li'). Poi dichiarare le modifiche in assets/<scena>/CREDITI.md.

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { textureCompress, prune, dedup } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';

const [,, inp, out, size = '512'] = process.argv;
if (!inp || !out) { console.log('uso: node slim-modelli.mjs ingresso.glb uscita.glb [lato massimo, 512]'); process.exit(1); }
await MeshoptDecoder.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
const doc = await io.read(inp);
for (const m of doc.getRoot().listMaterials()) {
  m.setOcclusionTexture(null);                                           // ne fa le veci l'occlusione ambientale della scena
  if (m.getExtension('KHR_materials_diffuse_transmission')) m.setExtension('KHR_materials_diffuse_transmission', null);   // three non la usa
}
doc.getRoot().listExtensionsUsed().filter(e => e.extensionName === 'KHR_materials_diffuse_transmission').forEach(e => e.dispose());
await doc.transform(dedup(), prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [+size, +size], quality: 82 }));
await io.write(out, doc);
console.log('scritto', out);
