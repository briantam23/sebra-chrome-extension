// Read it using the storage API
var token = null;
var div = document.createElement("div");
var div2 = document.createElement("div");  
var jwtTokenEl = document.getElementById('sebra-ch-token')
var sebraExtension = document.getElementById('sebra-ch-extension');

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

chrome.storage.local.get(['foo', 'jwtToken'], function(items) {
    token = items.jwtToken;
    console.log('Settings retrieved', items);

    document.body.appendChild(div); 
    div.innerText = "test123";
    document.body.appendChild(div2); 
    
    if(jwtTokenEl && token) jwtTokenEl.innerText = token; 
    if(sebraExtension) sebraExtension.innerText = true; 
});
