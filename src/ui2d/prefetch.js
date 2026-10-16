// Pre-caricamento delle scene 3D: a pagina ferma il browser scarica in sottofondo i pacchetti 3D e i loro file, cosi'
// aprendo una prova arrivano dalla cache invece che dalla rete. Priorita' bassa (rel=prefetch): non rallenta la pagina.
// Si salta con il risparmio dati attivo o una connessione lenta, e aprendo il file con un doppio clic (file://).

const FILES = [
  'trilocale.js', 'prove3d.js',
  'assets/trilocale/ambiente.exr',
  'assets/trilocale/parquet.webp', 'assets/trilocale/parquet-ruvido.webp', 'assets/trilocale/parquet-rilievo.webp', 'assets/trilocale/prato.webp',
  'assets/trilocale/divano.glb', 'assets/trilocale/poltrona.glb', 'assets/trilocale/pianta.glb',
];

export function prefetchScenes(doc = document, win = window) {
  if (!doc || !doc.head || (win.location && win.location.protocol === 'file:')) return false;
  const c = win.navigator && win.navigator.connection;
  if (c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || ''))) return false;
  const go = () => FILES.forEach(href => {
    if (doc.head.querySelector(`link[rel="prefetch"][href="${href}"]`)) return;
    const l = doc.createElement('link');
    l.rel = 'prefetch'; l.href = href;
    doc.head.appendChild(l);
  });
  // dopo che la pagina si e' sistemata: prima conta quello che si vede
  if (win.requestIdleCallback) win.requestIdleCallback(go, { timeout: 4000 }); else win.setTimeout(go, 2500);
  return true;
}
