function element_in_array() {
	// 1. plain javascript way:
	function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
	}

	// 2. jquery way:
	$.inArray(value, array);

    // 3. native way: // only for simple data type
    [1,2,3,4].indexOf(4); // 3
}