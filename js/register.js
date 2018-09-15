/**
 * Establish a service worker to cache data
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js', {scope: "/"})
    .catch(function(err) {
    console.error(err);
    });
}
console.log('Service Worker registered');