var cacheName = 'cache';

self.addEventListener('install', function (event) {
    console.log('Service Worker succesfull installed', event);
    event.waitUntil(
        caches.open(cacheName)
        .then(function (cache) {
            cache.addAll(
                [
                    'index.html',
                    'estilos/estilos.css',
                    'imagenes/burgerNegra.png',
                    'imagenes/pizza3.png',
                    'imagenes/sopaDeMiso.jpg',
                    'imagenes/headerBurger1.jpg',
                    'imagenes/headerBurger2.jpg',
                    'imagenes/headerBurger3.jpg',






                ],



            )
        }));
});
self.addEventListener('activate', function (event) {
    console.log('Service Worker succesfull activated', event);
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) {

                return response;
            }

            return fetch(event.request);
        }));
});