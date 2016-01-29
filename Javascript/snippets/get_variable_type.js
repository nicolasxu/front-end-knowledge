// get_variable_type

function get_variable_type() {
	var source = "http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript";
	
	function get_type(thing){
	    if(thing === null)return "[object Null]"; // special case
	    return Object.prototype.toString.call(thing);
	}

	// example results:
	get_type(null)                    // - [object Null]
	get_type(window)                  // - [object Window]
	get_type([])                      // - [object Array]
	get_type(['1'])                   // - [object Array]
	get_type({})                      // - [object Object]
	get_type(document)                // - [object HTMLDocument]
	get_type(document.getElementById) // - [object Function]
	get_type(33)											// - [object Number]
	get_type()												// - [object Undefined]
	get_type(this)                    // - [object global]
}