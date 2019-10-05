/* chrome.storage.onChanged.addListener(function(changes, namespace) {
    for(var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
}); */


var itemUrl = null;
var recipientUsername = null;

chrome.storage.local.get(['token'], function(items) {
    
    window.localStorage.setItem('sebraExtension', 'true');

    if(items.token) window.localStorage.setItem('token', items.token);
    else window.localStorage.removeItem('token');

    
    itemUrl = window.localStorage.getItem('itemUrl');
    recipientUsername = window.localStorage.getItem('recipientUsername');

    chrome.storage.local.set({ itemUrl: itemUrl, recipientUsername: recipientUsername });
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var event = document.createEvent('Event');
    event.initEvent('hello');
    document.dispatchEvent(event);
});