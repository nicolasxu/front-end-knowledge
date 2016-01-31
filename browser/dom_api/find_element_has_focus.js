function find_element_has_focus() {
	var source = "http://stackoverflow.com/questions/497094/how-do-i-find-out-which-dom-element-has-the-focus";
	// 1. DOM api
	document.activeElement;
	// It can be the the body element.

	// 2. jquery way
	$(":focus").get(0); // can only get input, textarea focus
	
}