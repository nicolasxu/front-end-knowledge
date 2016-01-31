function refresh_page() {
	$('#something').click(function() {
	    location.reload(); // reload from cache
	    // location.reload(true) // reload from server
	})
}