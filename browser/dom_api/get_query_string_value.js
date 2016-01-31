function get_query_string_value() {
	var source = "http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=2&tab=active#tab-top";
	// snippet:
	function getParameterByName(name) {
	    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
}