
	var question = "what is alerted?";
	
	x = 1;
	function bar() {
	    this.x = 2;
	    return x;
	}
	var foo = new bar();
	alert(foo.x);

//	What value is alerted?













	 
	// answer: 2
	// explanation: http://www.bennadel.com/blog/2522-providing-a-return-value-in-a-javascript-constructor.htm
	// if not return complex object, e.g.: {} or [], new F() will return always newly created object
