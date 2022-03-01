function getDomainFromURL(urlString) {
    let url = new URL(urlString);
    
    // I'm pretty sure Safari enforces https, but I do not know any http sites to confirm this.
    if (url.protocol !== "https:") {
        console.log(hostname + " does not use a valid protocol");
        return null;
    }
    
    let hostname = url.hostname;
    if (hostname.startsWith("www.")) {
        return hostname.substr(4);
    }
    
    return hostname;
}

//TODO: Store this locally, I don't understand why the API is this limited
// that I have to go and download the entire database just to get what I need
function getAllServices() {
    console.log("Downloading service list");
    let request = new Request("https://tosdr.org/api/v1/service/all.json");
    
    return fetch(request).then(function(response) {
        console.log("Downloaded list");
        return response.json();
    });
}

browser.tabs.onUpdated.addListener(function(id, info, tab) {
    if (info.status === "complete") {
        getAllServices().then(function(services) {
            let service = services["tosdr/review/" + getDomainFromURL(tab.url)];
            console.log(service);
        });
    }
});
