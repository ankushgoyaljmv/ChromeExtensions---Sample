
console.log("bakground appeared");
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender);
        if (request.greeting == "hello") {
            console.log("Recieved from content");
            sendResponse({ farewell: "goodbye" });
        }
    })
