function encode_uri_best_practice() {
	var source = "http://stackoverflow.com/questions/75980/best-practice-escape-or-encodeuri-encodeuricomponent";
	// 1. escape() Don't use it, as it has been deprecated since ECMAScript v3.
	// 2. encodeURI()
	//    will encode uri only, not the query string after it. 
	//    encodeURI("http://www.google.com/a file with spaces.html")
	//    http://www.google.com/a%20file%20with%20spaces.html
	// 3. encodeURIComponent() 
	//    is for encoding query string value part only, not the key part
	//    param1 = encodeURIComponent("http://xyz.com/?a=12&b=55")
	//    the result is:
	//    "http%3A%2F%2Fxyz.com%2F%3Fa%3D12%26b%3D55"
	//		Then you may create the URL you need:
	//		url = "http://domain.com/?param1=" + param1 + "&param2=99";
	// 4. Do NOT use encodeURIComponent on the whole URI, it can only
	//    be used on value part of query string.
}