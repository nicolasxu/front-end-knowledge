function load_js_file() {
	// javascript:
	function includeJs(jsFilePath) {
    
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;
    document.body.appendChild(js);
	}
	includeJs("/path/to/some/file.js");

	// or use requireJS
}