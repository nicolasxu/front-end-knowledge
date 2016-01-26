function typeof_result() {
	var comment = "tyoeof anything always return lowercase string";
	var pp = [typeof xxxxx,    				// 'undefined'
	typeof Function, 				// 'function'
	typeof Array,  				  // 'function'
	typeof Number, 				  // 'function'
	typeof 333,     					// 'number'
	typeof '333',    				// 'string'
	typeof [],       			  // 'object'
	typeof {},       			  // 'object'
	typeof null == 'object',   // true
	typeof new Number(3)		// 'object' // don't new any Number, it is not designed to do so
	];
}