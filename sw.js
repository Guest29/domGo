const CACHE_NAME = 'domgo-flat-assets-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './ar.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/logo-domgo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/domgo-qr.png',
  './assets/domgo-qr-print.png',
  './assets/house-1.png',
  './assets/house-2.png',
  './assets/house-3.png',
  './assets/apartment-1.png',
  './assets/apartment-2.png',
  './assets/apartment-3.png',
  './assets/apartment-4.png',
  './assets/apartment-5.png',
  './assets/apartment-6.png',
  './assets/apartment-7.png',
  './assets/apartment-8.png',
  './assets/apartment-9.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS).catch(() => undefined)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('.mp4')) return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => cached))
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./index.html?fromNotification=1'));
});
