const C="quoten-v3",CD="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
const L=["./","index.html","manifest.webmanifest","icon.png"],X=[CD+"pdf.min.js",CD+"pdf.worker.min.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>Promise.all([c.addAll(L),...X.map(u=>fetch(u,{mode:"no-cors"}).then(r=>c.put(u,r)))])).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>{const n=fetch(e.request).then(x=>{if(x.ok&&new URL(e.request.url).origin==location.origin){const y=x.clone();caches.open(C).then(c=>c.put(e.request,y))}return x}).catch(()=>r);return r||n})));
