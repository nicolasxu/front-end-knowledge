function isArray(value) {
	return value && typeof value === 'object' && value.constructor === Array;
}

function isArray2(value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}

function isArray3() {
	// use ES5 native method
	Array.isArray([]); // return true
}