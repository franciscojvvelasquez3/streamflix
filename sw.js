const CACHE_NAME = 'streamflix-v1';
const assets = [
  './',
  './index.html',
  'https://vjs.zencdn.net/7.20.3/video-js.css',
  'https://vjs.zencdn.net/7.20.3/video.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});