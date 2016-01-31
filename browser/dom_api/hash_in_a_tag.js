function hash_in_a_tag() {
	var source = "http://stackoverflow.com/questions/134845/href-attribute-for-javascript-links-or-javascriptvoid0?page=1&tab=active#tab-top";
	/* 
	If no href attribute, then a tag just behave like span
	If put href="#", when clicked, it will take you to the top of the page
	*/
	/*
	The verdict:
	It is best to use href="javascript:void(0)"
	e.g.:
	<a href="javascript:void(0)">this is a link</a>
	 */
}