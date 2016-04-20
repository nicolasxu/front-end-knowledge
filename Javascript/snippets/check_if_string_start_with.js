function check_if_string_start_with() {
	// How to check if a string “StartsWith” another string?
	var source = "http://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string";

	function stringStartsWith (string, prefix) {
	  return string.slice(0, prefix.length) === prefix;
	  // if endSlice is -3 it is treated as sourceLength - 3
	}
	// or
	/^Hello/.test('Hello world')
	// or
	haystack.indexOf(needle, 0) === 0
}