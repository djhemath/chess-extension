chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.id, {
		file: 'popup.js'
	});
});
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
  if(msg.icon1) {
     chrome.tabs.query({active:true, windowType:"normal", currentWindow: true},function(d){
        var tabId = d[0].id;
        chrome.browserAction.setIcon({path: 'run.png', tabId: tabId});
    })
  }
});
