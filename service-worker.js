// ─────────────────────────────────────────
//  JS ফাংশন শিখি — Service Worker
//  Provides offline support & caching
// ─────────────────────────────────────────

const CACHE_NAME = 'js-functions-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap'
];

// ── INSTALL: cache all assets ──
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ──
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first, then network ──
self.addEventListener('fetch', (event) => {
  // Skip non-GET and chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension')) return;

  // For API calls (jsonplaceholder), always go network first
  if (event.request.url.includes('jsonplaceholder')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify({ name: 'অফলাইন ব্যবহারকারী', email: 'offline@example.com', address: { city: 'অফলাইন' }, company: { name: 'N/A' } }), {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // For Google Fonts — network first with cache fallback
  if (event.request.url.includes('fonts.googleapis') || event.request.url.includes('fonts.gstatic')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Default: cache first, network fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
