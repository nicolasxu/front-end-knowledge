function set_default_param_in_function () {
	var source = "http://stackoverflow.com/questions/894860/set-a-default-parameter-value-for-a-javascript-function";

	function foo(a, b){
	  a = typeof a === 'undefined' ? 42         : a;
	  b = typeof b === 'undefined' ? 'default_b': b;
	}
}