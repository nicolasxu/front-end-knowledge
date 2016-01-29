function count_size_of_object () {
	var source = "http://stackoverflow.com/questions/5223/length-of-a-javascript-object-that-is-associative-array";
	
	Object.size = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	};
	// No need to add to Object.prototype, since Object is the root of all Object in JS. 
	// Get the size of an object
	var size = Object.size(myArray);
}