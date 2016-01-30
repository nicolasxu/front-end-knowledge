function string_contain_substr() {
	
	var source = "http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring";
	// 1. indexOf
	var s = "foo";
	alert(s.indexOf("oo") > -1);

	// 2. in ES6
	console.log("foo".includes("o"));  // true
	// 
	// if (!String.prototype.contains) {
	//   String.prototype.contains= function() {
	//     return String.prototype.indexOf.apply(this, arguments) !== -1;
	//     // this will point to String object. It is not a callback, 
	//     // so this will not point to root.
	//   };
	// }
	// 3. Regrex
	/oo/.test("foo"); // true
}