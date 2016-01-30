function element_in_array() {
	// plain javascript way:
	function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
	}

	// jquery way:
	$.inArray(value, array)
}