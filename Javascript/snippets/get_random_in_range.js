function get_random_in_range() {
	var source = "http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range";
	// Returns a random number between min (inclusive) and max (exclusive)
	function getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}
	// Returns a random integer between min (inclusive) and max (inclusive)
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	} 

	Math.floor(Math.random() * 6) + 1  
}