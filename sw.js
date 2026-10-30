const C="quoten-v1",F=["./","index.html","pdf.min.mjs","pdf.worker.min.mjs","manifest.webmanifest","icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
