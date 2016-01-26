function if_object_is_empty() {
	var source = "http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object";
	// 1. method for ECMA5
	Object.keys({}).length; // 0
	// 2. method for Pre-ECMA5
	function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
	  return true;
	}
	// 3. lodash, jquery, underscore
	jQuery.isEmptyObject({}); // true
	_.isEmpty({}); // true
	_.isEmpty({}); // true


	
}