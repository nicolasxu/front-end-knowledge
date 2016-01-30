function loop_array() {
	// plain javascript 
	function logArrayElements(element, index, array) {
	  console.log('a[' + index + '] = ' + element);
	  // this, point to root object
	}

	// Note elision, there is no member at 2 so it isn't visited
	[2, 5, , 9].forEach(logArrayElements); 
	// 'this' in logArrayElements will refer to global object, 
	// which is different from this in $.each()
	
	// jquery version
	$.each([3,4,5], function(index, value){
		console.log(this);
		// note: this will point to each object in the array
	});
}