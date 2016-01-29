function trim_string() {
	// It is already part of native javascript
	var source = "http://stackoverflow.com/questions/498970/trim-string-in-javascript";

	String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
	
}