chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query( {} ,function (tabs) { // The Query {} was missing here
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.executeScript(tabs[i].id, {file: "bg-click.js"});
        }
    });
});