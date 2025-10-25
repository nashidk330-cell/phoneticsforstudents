const CACHE_NAME = 'phonetics-notebook-cache-v1';

const LOCAL_ASSETS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  // FIX: Renamed constants.tsx to constants.ts to match the actual file name.
  '/constants.ts',
  '/icon.svg',
  '/components/Header.tsx',
  '/components/Footer.tsx',
  '/components/Sidebar.tsx',
  '/components/ContentDisplay.tsx',
  '/components/PhoneticCard.tsx',
  '/components/Introduction.tsx',
  '/components/Speak.tsx',
  '/components/IPAChart.tsx',
  '/components/FeedbackWorkspace.tsx'
];

// Install the service worker and cache local assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching local assets');
        return cache.addAll(LOCAL_ASSETS);
      })
  );
});

// Serve cached content and cache new requests
self.addEventListener('fetch', (event) => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // Return response from cache if found
        if (response) {
          return response;
        }

        // Otherwise, fetch from network
        return fetch(event.request).then((networkResponse) => {
          // Check if we received a valid response before caching
          if(networkResponse && networkResponse.status === 200) {
            // We need to clone it because a response can be consumed only once
            cache.put(event.request, networkResponse.clone());
          }
          
          // And return the network response
          return networkResponse;
        });
      });
    })
  );
});


// Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});