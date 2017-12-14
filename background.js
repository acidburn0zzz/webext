/// Initialisation
function init() {
	browser.storage.sync.get(null).then(onGot, onError);
}

// Load search engines if they're not already loaded in storage sync
function onGot(data){
	console.log("success");
	console.log(data);
}

function onError(error){
	console.log("fail");
        console.error(error);
}

init();
