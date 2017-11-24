/// Initialisation
function init() {
	browser.storage.sync.set({"dummy-key": "dummy-data"}).then(function(){
        browser.storage.sync.remove("dummy-key").then(function(){
            browser.storage.sync.get(null).then(onGot, onError);
        }, onError);
    }, onError);

    // Load search engines if they're not already loaded in storage sync
	function onGot(data){
        console.log("success");
	}

	function onError(error){
		console.log("fail");
        console.error(error);
	}
}
init();