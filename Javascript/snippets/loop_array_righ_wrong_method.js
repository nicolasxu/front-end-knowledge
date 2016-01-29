function loop_array_righ_wrong_method() {
	var source = "http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea";
	// e.g.:
	var arr = ['a','b','c'];
	for (var key in arr) {  }	// wrong choice for looping through array
	// for... in is designed for looping object, not array,
	// and it will go through the prototype chain, so not recommended for 
	// looping through the array, 
	// forEach() is right choice for array
}