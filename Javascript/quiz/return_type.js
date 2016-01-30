function quiz6() {

	// for example:
	(function(){return 2}, 
		function(){return 3}, 
		function(){return 10;})();
		// what is the result? why? 

	// quiz:
	var f = (function f(){ return "1"; }, function g(){ return 2; })();
	typeof f;

	// result: "number"
}



// var value = (exp, exp, exp, exp5), always equals the last expression.