const CACHE = 'roadmap-3y-v4';
const ASSETS = ['./', './index.html', './tailwind.css', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './fonts/inter-latin-wght-normal.woff2', './fonts/source-serif-4-latin-wght-normal.woff2', './fonts/source-serif-4-latin-wght-italic.woff2', './fonts/jetbrains-mono-latin-wght-normal.woff2'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
