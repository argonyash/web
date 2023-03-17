'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "893c070d101083ea72b9d0eff3239b2f",
"assets/assets/fonts/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/assets/fonts/SF-Pro-Display-Heavy.ttf": "2e744d77c0b04dd70c766ab78d5e93cf",
"assets/assets/fonts/SF-Pro-Display-Light.ttf": "fdd4f443a00654b709cbba595cf6cecd",
"assets/assets/fonts/SF-Pro-Display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/assets/fonts/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/assets/images/add-image.png": "a4e0e8582bdbe35d6b9f3128ab7579dc",
"assets/assets/images/bill.png": "7625c973fe4161183ee8808fb2dff9a4",
"assets/assets/images/Black-shadow.png": "684089bc981e1c24b6f5f8341f0b0097",
"assets/assets/images/camera-ic.png": "3ce7f93b4bccdd5a98e5ee591c1512b8",
"assets/assets/images/cancel.png": "df327e75e7beb9b6a70bfb2a1aff550f",
"assets/assets/images/cancel_policy.png": "bdf49583f805f754b2c1bbc3fe8a252d",
"assets/assets/images/category.png": "01136d66d3a341c026e1fcc7f25a0f68",
"assets/assets/images/challenges.png": "2ebb1092e7ab7e8dd6985c6e4ea0053f",
"assets/assets/images/chat.png": "a84b5351523830b4189d5fe82bc49ce8",
"assets/assets/images/check.png": "df286043235379107293091880f4aaab",
"assets/assets/images/community.png": "917b20f269dedb0b39af9b8fa560088a",
"assets/assets/images/contact.png": "38ada743a902d9d17ec5c9d0dfc9bdc0",
"assets/assets/images/distance.png": "e056fc35f0fbff036ab630c7fdddc82c",
"assets/assets/images/filter.png": "56ddb97f3eb88fb2bb87dd63ebe9af37",
"assets/assets/images/flag.png": "a5dfe581e3a70d978c43753c9235dc6a",
"assets/assets/images/friends.png": "af314b1a5d6015f029284c34f5a90cc1",
"assets/assets/images/help.png": "4974e3dfc4096c201c5e84250ce84c4d",
"assets/assets/images/home-page.png": "ebeefca7d8254123cc25196f2a4e2798",
"assets/assets/images/info.png": "a8a2c62ff1cf98ad9f8abd85bd73bc32",
"assets/assets/images/invite.png": "ddbdb5e9ece85d46ed75c503efdb9748",
"assets/assets/images/invite_cup.png": "e8b1c4e230bebc4a6a22fd8a7e622edb",
"assets/assets/images/logo.png": "90b59d3ba9b6f15134f26fa94632f700",
"assets/assets/images/logout.png": "af68ec17d3ae61d0be4720e8c985cee5",
"assets/assets/images/man_icon.png": "e83f27d31c34b08348db52f647e1ccfb",
"assets/assets/images/message.png": "b15fa565f2403039451062b3a2b43c5f",
"assets/assets/images/my_workout_buddies.png": "03f8c2af5300fcbc586975697377641c",
"assets/assets/images/plus.png": "26ee5f4862ae96e5f8a8975c81a8dea1",
"assets/assets/images/pluse.png": "308436b94a7353ed1e5623d7b7a49352",
"assets/assets/images/search.png": "2d57166b6d606d661fd0ebd511d29b81",
"assets/assets/images/session.png": "477a567780f0c5cb84cfb567517efea5",
"assets/assets/images/settings.png": "eabe1458a70fe0a4bffad9feccf62033",
"assets/assets/images/star.png": "9c2548c7b1887de0a35e362c30a8f216",
"assets/assets/images/terms.png": "b5ceeb7faf1593760298c18ae91c0706",
"assets/assets/images/user.png": "2cbe6b29afb74a58d4bc08c356f9ec46",
"assets/assets/images/workout.png": "a8d893bae4c78a824b944a6bdf5ba86f",
"assets/FontManifest.json": "3629c7399ef9c6993cc91ee9ac5fde8b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/fonts/SF-Pro-Display-Light.ttf": "fdd4f443a00654b709cbba595cf6cecd",
"assets/fonts/SF-Pro-Display-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/fonts/SF-Pro-Display-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/images/add-image.png": "a4e0e8582bdbe35d6b9f3128ab7579dc",
"assets/images/bill.png": "7625c973fe4161183ee8808fb2dff9a4",
"assets/images/Black-shadow.png": "684089bc981e1c24b6f5f8341f0b0097",
"assets/images/camera-ic.png": "3ce7f93b4bccdd5a98e5ee591c1512b8",
"assets/images/cancel.png": "df327e75e7beb9b6a70bfb2a1aff550f",
"assets/images/cancel_policy.png": "bdf49583f805f754b2c1bbc3fe8a252d",
"assets/images/category.png": "01136d66d3a341c026e1fcc7f25a0f68",
"assets/images/challenges.png": "2ebb1092e7ab7e8dd6985c6e4ea0053f",
"assets/images/chat.png": "a84b5351523830b4189d5fe82bc49ce8",
"assets/images/check.png": "df286043235379107293091880f4aaab",
"assets/images/community.png": "917b20f269dedb0b39af9b8fa560088a",
"assets/images/contact.png": "38ada743a902d9d17ec5c9d0dfc9bdc0",
"assets/images/distance.png": "e056fc35f0fbff036ab630c7fdddc82c",
"assets/images/filter.png": "56ddb97f3eb88fb2bb87dd63ebe9af37",
"assets/images/flag.png": "a5dfe581e3a70d978c43753c9235dc6a",
"assets/images/friends.png": "af314b1a5d6015f029284c34f5a90cc1",
"assets/images/help.png": "4974e3dfc4096c201c5e84250ce84c4d",
"assets/images/home-page.png": "ebeefca7d8254123cc25196f2a4e2798",
"assets/images/info.png": "a8a2c62ff1cf98ad9f8abd85bd73bc32",
"assets/images/invite.png": "ddbdb5e9ece85d46ed75c503efdb9748",
"assets/images/invite_cup.png": "e8b1c4e230bebc4a6a22fd8a7e622edb",
"assets/images/logo.png": "90b59d3ba9b6f15134f26fa94632f700",
"assets/images/logout.png": "af68ec17d3ae61d0be4720e8c985cee5",
"assets/images/man_icon.png": "e83f27d31c34b08348db52f647e1ccfb",
"assets/images/message.png": "b15fa565f2403039451062b3a2b43c5f",
"assets/images/my_workout_buddies.png": "03f8c2af5300fcbc586975697377641c",
"assets/images/plus.png": "26ee5f4862ae96e5f8a8975c81a8dea1",
"assets/images/pluse.png": "308436b94a7353ed1e5623d7b7a49352",
"assets/images/search.png": "2d57166b6d606d661fd0ebd511d29b81",
"assets/images/session.png": "477a567780f0c5cb84cfb567517efea5",
"assets/images/settings.png": "eabe1458a70fe0a4bffad9feccf62033",
"assets/images/star.png": "9c2548c7b1887de0a35e362c30a8f216",
"assets/images/terms.png": "b5ceeb7faf1593760298c18ae91c0706",
"assets/images/user.png": "2cbe6b29afb74a58d4bc08c356f9ec46",
"assets/images/workout.png": "a8d893bae4c78a824b944a6bdf5ba86f",
"assets/NOTICES": "4e0c1973768b04873cd1f34c6e8e38bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "245c01563fb585bdbc81076a6a4278b9",
"/": "245c01563fb585bdbc81076a6a4278b9",
"main.dart.js": "1808a4779004ce04cd2d35cf253ce777",
"manifest.json": "b2e7bbb46c30bb029322f4050903cc0c",
"version.json": "eb7f4e3b3fc4a800a21412705d797c91"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
