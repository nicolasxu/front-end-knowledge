function default_filter_behavior() {
	var source = "https://docs.angularjs.org/api/ng/filter/filter"; // must read
	
	// in template:
	// {{ filter_expression | filter : expression : comparator}}
	// e.g. 
	// names = ['abc', 'nick_abc', 'yahoo']
	// {{names | filter: 'abc': true}} // find 'abc', case insensitive
	// in javascript:
	$filter('filter')(array, expression, comparator);

	// expression can be string, hash object, or function(value, index, array)
	// comparator is function to check if two input are equal. 
}


