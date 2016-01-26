function bind_function () {
	// Function.prototype.bind(thisArg, arg1, arg2....)
	

	// example: 
	var obj = {
  method: function(name){
    	this.name = name;
  	}
	};
  // in callback function, this always refer to global root
  // but unless binded to object
	setTimeout( obj.method.bind(obj, "John"), 100 );
}