function this_keyword() {
	var source  = "http://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work";
	var source2 = "http://www.quirksmode.org/js/this.html";
	var source3 = "http://web.archive.org/web/20110725013125/http://www.digital-web.com/articles/scope_in_javascript/"
	// need to be reviewed constantly
	// The ECMAScript Standard defines this as a keyword that "evaluates to the value of 
	//     the ThisBinding of the current execution context" (§11.1.1).
	//     ThisBinding is like a special CPU register that references to an object.
	//     The intepreter updates ThisBinding in folowing 3 cases:
	//     Case 1: Initial global execution context
	//             <script></script>
	//     Case 2: Entering eval code
	//             direct eval() or indirect eval call
	//     Case 3: Entering function code
	//       obj.myMethod() or obj["myMethod"]()
	//       Function.prototype.apply(thisArg, argArray), call(), bind()
	//       Array.prototype.every(callbackfn [ , thisArg ] ), some(), map(), filter()
	//     Case 4: new operator
	//     "this" is the new object that the interpreter created
	function quiz() {

		function quiz1() {
			function myFun() {
		  // Line D
		  // what is this here?
			}
			var obj = {
			  myMethod : function () {
			      eval("myFun()");
			  }
			};
			obj.myMethod();
			// explanation:
			//window
			//This one was tricky. When evaluating the eval code, this is obj. 
			//However, in the eval code, myFun is not called on an object, 
			//so ThisBinding is set to window for the call.
		}
	}
}