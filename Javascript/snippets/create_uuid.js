function uuid() {
	var source = "http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript";
	// in browser
	'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = crypto.getRandomValues(new Uint8Array(1))[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	});

	// nodejs
	'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = crypto.randomBytes(1)[0]%16|0, v = c == 'x' ? r : (r&0x3|0x8);
	    return v.toString(16);
	});

	// use npm package
	"https://www.npmjs.com/package/guid";
	Guid.raw();
	// -> '6fdf6ffc-ed77-94fa-407e-a7b86ed9e59d'
}