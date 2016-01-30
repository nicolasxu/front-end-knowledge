function validateEmail() {

	function validateEmail(email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(email);
	}
	// anything@anything.anything
	function validateEmail(email) {
	    var re = /\S+@\S+\.\S+/;
	    return re.test(email);
	}
}