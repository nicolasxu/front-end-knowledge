function round_to_fix() {
	var source = "http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript";
	+num.toFixed(2); // toFixed() is "round to fixed 2 digits after decimal seperator"
	                 // the result is also rounded
	// returns it to a string, and then back into an integer / float.

	+1.1484.toFixed(2);     // after decimal
	+1.1484.toPrecision(5)  // total 5 digits accuracy

}