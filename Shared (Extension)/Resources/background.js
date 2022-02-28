function getDomainFromURL(urlString) {
    let url = new URL(urlString);
    
    // I'm pretty sure Safari enforces https, but I do not know any http sites to confirm this.
    if (url.protocol !== "https:") {
        return null;
    }
    
    let hostname = url.hostname;
    if (hostname.startsWith("www.")) {
        return hostname.substr(4);
    }
    
    return hostname;
}

function downloadData() {
    
}

browser.tabs.onUpdated.addListener(function(id, info, tab) {
    if (info.status === "complete") {
        
    }
});
