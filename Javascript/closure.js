function closure() {
	var description = " Accessing outer variable status from  \
                 			lexical inner scope creates a closure. The outer variable status is still \
                 			alive even if outer function returns. ";
  var link = " http://stackoverflow.com/questions/111102/how-do-javascript-closures-work/111200#111200";
  var snippets = '';

  // closure in a loop
  var funcs = [];
	for (var i = 0; i < 3; i++) {          // let's create 3 functions
	    funcs[i] = function() {            // and store them in funcs
	        console.log("My value: " + i); // each should log its value.
	    };
	}
	for (var j = 0; j < 3; j++) {
	    funcs[j]();                        // and now let's run each one to see
	}

	// fix closure in a loop
	var funcs_ = [];
	function createfunc(i) {
	    return function() { console.log("My value: " + i); };
	}
	for (var i = 0; i < 3; i++) {
	    funcs_[i] = createfunc(i);
	}
	for (var j = 0; j < 3; j++) {
	    funcs_[j]();                        // and now let's run each one to see
	}
}