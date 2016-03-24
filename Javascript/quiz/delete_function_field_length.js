function quiz13() {
	var question = "what is alerted?";
	
	
		function foo(){}
		delete foo.length;
		alert(typeof foo.length);
	 




















	 
	// answer: "number"
	// explanation: every function has a length value telling how much params it takes
	//    in the definition. delete Function.length will have no effect. 
}