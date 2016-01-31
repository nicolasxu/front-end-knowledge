function check_url_if_hash_tag_exist() {
	var source = "http://stackoverflow.com/questions/298503/how-can-you-check-for-a-hash-in-a-url-using-javascript?ppp=fdsfds&fff=kkk";
	// example.com/page.html#anotheranchor
	if(window.location.hash) {
	  // Fragment exists
	} else {
	  // Fragment doesn't exist
	}

	// check if query string exists
	if(window.location.search) {

	} else {

	}
}