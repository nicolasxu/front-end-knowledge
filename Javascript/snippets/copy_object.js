function copy_object() {
	// jquery way:
	// Shallow copy
	var newObject = jQuery.extend({}, oldObject);
	// Deep copy
	var newObject = jQuery.extend(true, {}, oldObject);

	// pure javascript:
	var obj = JSON.parse(JSON.stringify(obj)); // won't copy function, won't copy 
}