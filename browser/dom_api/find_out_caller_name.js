function find_out_caller_name() {
	// which function calls this function
	var source = "http://stackoverflow.com/questions/280389/how-do-you-find-out-the-caller-function-in-javascript";
	function WhoCallsMe() {
	    alert("caller is " + arguments.callee.caller.name);
	    // arguments.callee.caller.toString()
	}

	// or you can use this lib to print out stack trace:
	// https://github.com/stacktracejs/stacktrace.js
}