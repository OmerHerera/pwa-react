var cacheName="v1:static2";self.addEventListener("install",function(a){console.log("install is running ...");a.waitUntil(caches.open(cacheName).then(function(a){return a.addAll(["./","./static/css/main.ad60a821.css","./static/js/main.cda42238.js","./static/media/roboto.e5d1ccfb.woff","./static/media/logo.5d5d9eef.svg"]).then(function(){self.skipWaiting()})}))});self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b?b:fetch(a.request)}))});
