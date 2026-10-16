# Asset della scena 3D del trilocale

| File | Origine | Autore | Licenza | Modifiche |
|---|---|---|---|---|
| divano.glb | KhronosGroup/glTF-Sample-Assets, GlamVelvetSofa | Wayfair, LLC (2021) | CC BY 4.0 | texture ridotte a 512 px in WebP, senza mappa di occlusione, compressione meshopt |
| poltrona.glb | KhronosGroup/glTF-Sample-Assets, SheenChair | Eric Chadwick, Wayfair, LLC (2020) | CC0 1.0 | texture ridotte a 512 px in WebP, senza mappa di occlusione, tessuto e legno semplificati (circa un terzo dei triangoli), compressione meshopt |
| pianta.glb | KhronosGroup/glTF-Sample-Assets, DiffuseTransmissionPlant | Darmstadt Graphics Group GmbH (2024); modifiche di Eric Chadwick; modello originale di Rico Cilliers (CC0, Poly Haven) | CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/) | geometria semplificata al 25%, poi il vaso ancora (circa 8 mila triangoli, foglie intatte), texture 512 px in WebP, senza mappa di occlusione ne' trasmissione diffusa, meshopt |
| ambiente.exr | pacchetto npm @pmndrs/assets 1.7.0, hdri/apartment (da Poly Haven) | Poly Haven | CC0 1.0 | nessuna |
| parquet*.webp | three.js r176, examples/textures/hardwood2_* | progetto three.js | MIT (repository three.js) | ridotte e convertite in WebP |
| prato.webp | three.js r176, examples/textures/terrain/grasslight-big.jpg | progetto three.js | MIT (repository three.js) | ridotta a 512 px in WebP |

L'attribuzione CC BY 4.0 compare anche nella scena, in basso a sinistra.
Le altre texture (intonaco, piastrelle, coppi, tessuti, tappeti) sono disegnate nel codice (src/trilocale/props.js).

I modelli con licenza CC BY 4.0 sono stati modificati (semplificazione, compressione, ricolorazione).
Le texture del parquet e del prato provengono dagli esempi di three.js: la provenienza originale non e' documentata e va sostituita con materiali CC0.
