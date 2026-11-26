// Offline support for Chaim Rush.
// On first visit, everything the games need is saved on the phone. After that:
//  - pages are fetched fresh when online (waiting at most 2.5 seconds) and fall back to the saved copy;
//  - the 3D engine, fonts and icons come straight from the saved copy and are refreshed in the background.
const CACHE = "chaimrush-v32";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "vendor/three.min.js",
  "vendor/peerjs.min.js",
  "fonts/fonts.css",
  "fonts/bungee-latin-400-normal.woff2",
  "fonts/rubik-latin-400-normal.woff2",
  "fonts/rubik-latin-500-normal.woff2",
  "fonts/rubik-latin-700-normal.woff2",
  "games/",
  "games/index.html",
  "games/quest.html",
  "games/land.html",
  "games/movies.html",
  "games/four.html",
  "games/cards.html",
  "games/words.html",
  "games/words-list.js",
  "games/masquerade.html",
  "games/masquerade-icon.png",
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("chaimrush-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function refresh(cache, req) {
  return fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; });
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === "navigate" || req.destination === "document" || /\.html$|\/$/.test(new URL(req.url).pathname);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const saved = await cache.match(req, { ignoreSearch: true });
    if (!saved) return refresh(cache, req);
    const fresh = refresh(cache, req);
    fresh.catch(() => {}); // offline: the saved copy is used
    if (!isPage || self.navigator.onLine === false) { event.waitUntil(fresh.catch(() => {})); return saved; }
    const timeout = new Promise(resolve => setTimeout(() => resolve(saved), 2500));
    try { return await Promise.race([fresh, timeout]); } catch { return saved; }
  })());
});
