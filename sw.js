const CACHE_NAME = "domgo-prototype-arjs-v18";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/logo-domgo.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/domgo-marker.patt",
  "./assets/domgo-marker.png",
  "./assets/house-1.png",
  "./assets/house-2.png",
  "./assets/house-3.png",
  "./assets/apartment-1.png",
  "./assets/apartment-2.png",
  "./assets/apartment-3.png",
  "./assets/apartment-4.png",
  "./assets/apartment-5.png",
  "./assets/apartment-6.png",
  "./assets/apartment-7.png",
  "./assets/apartment-8.png",
  "./assets/apartment-9.png",
  "./assets/SPORERegular-Regular.ttf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS).catch(() => undefined)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.pathname.endsWith(".mp4") || url.hostname.includes("aframe.io") || url.hostname.includes("raw.githack.com")) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match("./index.html"))));
});
