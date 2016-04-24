function merge_two_obj() {
	// jquery:
	var defaults = { validate: false, limit: 5, name: "foo" };
	var options = { validate: true, name: "bar" };
	var settings = $.extend({}, defaults, options);

	// Merge object2 into object1, recursively
	$.extend( true, object1, object2 );

	// javascript way:
	function merge_options(obj1, obj2){
	  var obj3 = {};
	  // works only for shallow objects
	  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
	  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
	  return obj3;
	}
}