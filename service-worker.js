const cacheName = 'pwaTeste-v1.2';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll([
          '/index.html',
          '/about.html',
          '/signup.html',
          './assets/css/main.css',
          './assets/js/bootstrap.min.js',
          './assets/js/jquery.min.js',
          './assets/js/popper.min.js',
          './assets/img/background.png',
          './assets/img/favicon.png',
          './assets/img/logo.png',
          './assets/img/128.png',
          './assets/img/144.png',
          './assets/img/152.png',
          './assets/img/167.png',
          './assets/img/180.png',
          './assets/img/192.png',
          './assets/img/256.png',
          './assets/img/512.png',
          './images/allstar.webp',
          './images/lakers.webp',
          './images/lakers-volta-vencer-na-nba-com-retorno-de-lebron_8j092608264_widelg.webp',
        ]);
      })
      .then(() => self.skipWaiting())
      .catch(error => console.log('Erro ao adicionar ao cache', error))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  // Responde com a solicitação de rede, se houver conexão disponível
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});
