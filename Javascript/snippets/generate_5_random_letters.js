function generate_5_random_letters() {
	var source = "http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript";

	function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
	}

}