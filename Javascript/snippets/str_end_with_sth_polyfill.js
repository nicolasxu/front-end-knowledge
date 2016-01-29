function str_end_with_sth() {
	var source = "http://stackoverflow.com/questions/280634/endswith-in-javascript";
	// polyfill:
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
		// find sufix string starts at .. e.g.:
		// 'sue' in "absuecdsue", 10 - 3, index 7 
		// 
	};
	// simple:
	if( "mystring#".substr(-1) === "#" ) {}
	if("mystring#".substr(-2) === "g#") {}
	// if param is negative number, it means the last xxx characters.
	// if negative, it is not an index anymore. 
	// -2, last 2 char
	// -5, last 5 char
	// -1, last 1 char
}