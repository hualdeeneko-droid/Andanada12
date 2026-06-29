const CACHE='andanada12-v7';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','index.html','manifest.json','assets/emoticono.jpg']))));
self.addEventListener('fetch',e=>{ if(e.request.url.includes('docs.google.com')) return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
