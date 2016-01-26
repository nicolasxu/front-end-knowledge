function strict_mode() {
	// ECMAScript 5 Strict Mode
	// example:
	/*
	
	(function(){
	  "use strict";

	  // Define your library strictly...
	})();
	*/

	// detail explanation: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
	// in strict mode:
	// 1. foo = "bar" without defining foo is error
	// 2. eval is not allowed
	// 3. overwriting arguments is not allowed: arguments = [...]; // not allowed
	// 4. with(){} is not allowed
	// 5. Attempts to delete undeletable properties will throw (delete Object.prototype)
	// 
}