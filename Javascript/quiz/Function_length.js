function quiz8 () {
	with (function(x, undefined){}) length;
	// the result is 2
	
	// also
	function ss(a,b,c,d){}
	ss.length;
	// result is 4
}

// length field in every 
// function represents the number of paramaters.