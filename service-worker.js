const CACHE='cfon-taller-shell-v2';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cfon-taller-shell-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET'||!e.request.url.startsWith(self.registration.scope))return;
 e.respondWith(caches.open(CACHE).then(async cache=>{
  const hit=await cache.match(e.request);if(hit)return hit;
  try{return await fetch(e.request)}catch(err){
   if(e.request.mode==='navigate')return cache.match('./index.html');
   return Response.error();
  }
 }));
});
