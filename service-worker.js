"use strict";var precacheConfig=[["/bowling-epsilon-website/index.html","9aaeea72a7bf705c71c27a0cfc673766"],["/bowling-epsilon-website/static/css/main.ac9517ac.css","94da3004fb782da385f98adac11ecd8a"],["/bowling-epsilon-website/static/js/main.d51e52c1.js","7295ce85c8e89851e8c4629496eec666"],["/bowling-epsilon-website/static/media/Flaticon.09a47dd1.svg","09a47dd10bd0c408a92dd686fd5d6ba2"],["/bowling-epsilon-website/static/media/Flaticon.192ecd6d.ttf","192ecd6dada5160b2ffa5e4d4a27af46"],["/bowling-epsilon-website/static/media/Flaticon.28d6f255.woff","28d6f255675014211be939b35f3d25bb"],["/bowling-epsilon-website/static/media/Flaticon.9e3aca19.eot","9e3aca195593b17e52c188dce96e507f"],["/bowling-epsilon-website/static/media/Track.2897ef7e.otf","2897ef7e0556d132bb64549a94741a4a"],["/bowling-epsilon-website/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/bowling-epsilon-website/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/bowling-epsilon-website/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/bowling-epsilon-website/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/bowling-epsilon-website/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/bowling-epsilon-website/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/bowling-epsilon-website/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/bowling-epsilon-website/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/bowling-epsilon-website/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/bowling-epsilon-website/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/bowling-epsilon-website/static/media/nexa-rust-script-l-0.4ecf37de.otf","4ecf37de6c9894fc2249dcc32ef7a0d4"],["/bowling-epsilon-website/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/bowling-epsilon-website/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/bowling-epsilon-website/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/bowling-epsilon-website/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),i=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var i="/bowling-epsilon-website/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});