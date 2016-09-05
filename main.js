// Register the service worker if available.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    var event = new Event('StatusOnline');
    window.dispatchEvent(event);

    // Resync data with server.
    console.log("2. You are online");
    // Page.hideOfflineWarning();
    // Arrivals.loadData();
}, false);

window.addEventListener('offline', function(e) {
    // Queue up events for server.
    console.log("2.You are offline");
    var event = new Event('StatusOffline');
    window.dispatchEvent(event);
    // Page.showOfflineWarning();
}, false);

// Check if the user is connected.
if (navigator.onLine) {
    console.log("1. You are online");
    var event = new Event('StatusOnline');
    window.dispatchEvent(event);
} else {
    // Show offline message
    console.log("1. You are offline");
    var event = new Event('StatusOffline');
    window.dispatchEvent(event);
}

// Set Knockout view model bindings.
// ko.applyBindings(Page.vm);


