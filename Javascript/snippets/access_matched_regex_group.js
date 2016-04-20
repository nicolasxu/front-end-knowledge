function access_matched_regex_group() {

	var myString = "something format_abc";
	var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
	var match = myRegexp.exec(myString);
	alert(match[1]);  // abc

	
}