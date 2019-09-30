// Read it using the storage API

chrome.storage.onChanged.addListener(function(changes, namespace) {
    for(var key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
                  'Old value was "%s", new value is "%s".',
                  key,
                  namespace,
                  storageChange.oldValue,
                  storageChange.newValue);
    }
});

var token = null;
chrome.storage.local.get(['foo', 'jwtToken', 'bar'], function(items) {
    token = items.jwtToken;
    console.log('Settings retrieved', items);
    
    if(token) window.localStorage.setItem('token', token);
    else window.localStorage.removeItem('token');

    window.localStorage.setItem('sebraExtension', 'true');
})

/* document.addEventListener("hello", function(data) {
    window.localStorage.setItem('_token', 'testToken');
    chrome.runtime.sendMessage("test");
}) */