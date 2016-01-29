function convert_string_to_boolean() {
	var source = "http://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript";
	// warning!! every non-empty string will be converted to true
	var myBool = Boolean("false");  // === true
	var myBool2 = !!"false";  // === true

	// universal solution with JSON parse
	function getBool(val) {
	  return !!JSON.parse(String(val).toLowerCase());
	}
	// example:
	getBool("1"); 		//true
	getBool("0"); 		//false
	getBool("true");  //true
	getBool("false"); //false
	getBool("TRUE"); 	//true
	getBool("FALSE"); //false
	getBool(0); 			// false
	getBool(33); 			// true
}
