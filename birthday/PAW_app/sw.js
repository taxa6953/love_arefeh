/* HTML is always fetched fresh from the network (cache is only an offline fallback),
   so page updates show up on the next open without bumping anything. */
const V='arefeh-v10';
const FILES=['./','arefeh-18-bearthday.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(FILES.map(f=>c.add(new Request(f,{cache:'reload'}))))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==V).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.headers.has('range')||r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  const u=new URL(r.url),isPage=r.mode==='navigate'||r.destination==='document'||/\.html?$/.test(u.pathname);
  if(isPage){
    e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})
      .catch(()=>caches.match(r,{ignoreSearch:true}).then(h=>h||caches.match('arefeh-18-bearthday.html'))));
    return;
  }
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res}).catch(()=>null);
    return hit||(await net)||Response.error();
  }));
});
