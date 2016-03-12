function throttle_and_debounce() {
	var source = "http://benalman.com/projects/jquery-throttle-debounce-plugin/";
	var github = "https://github.com/cowboy/jquery-throttle-debounce/";

	// They all take in a function and a param, then returns a function.
	// Debounce absorb limited the number of calls.
	// Throttle absorb time intervals. 
	$(window).resize( $.throttle( 250, resize_2 ) ); // This is the line you want!
	$('input:text').keyup( $.debounce( 250, ajax_lookup ) );
}