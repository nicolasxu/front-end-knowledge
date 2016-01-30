function quiz12 () {
	var question = "what is alerted?";

	function foo(a) {
	    arguments[0] = 2;
	    alert(a);
	}
	foo(1);
	 
	// answer: 2
	// explanation: overwrite arguments will over write param within the function scope
}