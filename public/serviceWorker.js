let CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/index.html',
    '/Warehouse',
    '/SideNav',
    '/',
    '/Login'
    
    

];
self.addEventListener('install', function(event) {
 
    // Perform install steps
    event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
    })
    );
    });


    
    
self.addEventListener('fetch', function(event) {
    if(!navigator.onLine)
    {
        event.respondWith(
          caches.match(event.request)
            .then(function(response) {
              if (response) {
                return response;     // if valid response is found in cache return it
              } else {
                return fetch(event.request)     //fetch from internet
                  .then(function(res) {
                    return caches.open(CACHE_DYNAMIC_NAME)
                      .then(function(cache) {
                        cache.put(event.request.url, res.clone());    //save the response for future
                        return res;   // return the fetched data
                      })
                  })
                  .catch(function(err) {       // fallback mechanism
                    return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                      .then(function(cache) {
                        return cache.match('/offline.html');
                      });
                  });
              }
          })
      );
    }
});