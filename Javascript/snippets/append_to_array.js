function append_to_array() {
	// 1. append one element
	var arr = [
	    "Hi",
	    "Hello",
	    "Bonjour"
	];
	// append new value to the array
	arr.push("Hola"); 

	// 2. append an array
	var a =['a','b'];
	var b=['c','d'];
	var c = a.concat(b);
}