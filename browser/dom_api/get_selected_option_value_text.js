function native_get_select_option_value() {
	var source = "http://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript";
	/*
	<select id="ddlViewBy">
	  <option value="1">test1</option>
	  <option value="2" selected="selected">test2</option>
	  <option value="3">test3</option>
	</select>
	 */
	var e = document.getElementById("ddlViewBy");
	var selectedValue = e.options[e.selectedIndex].value; // get value
	var selectedText = e.options[e.selectedIndex].text;   // get text
}