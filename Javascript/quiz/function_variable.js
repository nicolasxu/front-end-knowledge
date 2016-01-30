
	
	function test1() {
		
		var f = g;
		function g(){ return 23; }
		console.log(typeof g());
		// result is "number"
	}

	function test2() {
		var f = function g(){return 23;}
		console.log(typeof g());
		// result is error, g is not defined
	}

	
	
