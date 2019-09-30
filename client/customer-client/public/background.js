/* chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    chrome.storage.local.get(['bar'], function(items) {
        if(items.bar === 'baz') chrome.storage.local.set({ bar: 'foo' });
        else chrome.storage.local.set({ bar: 'baz' });
    })
}) */