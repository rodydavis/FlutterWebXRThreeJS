'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/nyanslow.ogg": "f1f43d9ad677fb8ec0bf069405e467b0",
"/index.html": "5c5707d63a1d120fd5b061c7dc793c6f",
"/nyanlooped.ogg": "7e6c1d5b03b3f2b5f318c4aeb6bc8394",
"/main.dart.js": "783897da3c0a2dd01f5a97117465532c",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "2346276c0909f129d21ba17b06c1e91d",
"/assets/LICENSE": "a1ab8f8659fcff8b86b764ec9498640b",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
