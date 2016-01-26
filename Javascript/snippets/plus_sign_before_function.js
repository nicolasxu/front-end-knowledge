function plus_sign_before_function() {

	var source = "http://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-name";

	+function() { console.log("Foo!"); }();  // is the same as
	(function() { console.log("Foo!"); })();
	//It forces the parser to treat the part following the + as an expression. 
	//This is usually used for functions that are invoked immediately.
	//+ is just one of the options. It can also be -, !, ~, or just about any other unary operator. 
	

	
}