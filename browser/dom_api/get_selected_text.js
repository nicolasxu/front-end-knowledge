function get_selected_text() {
	var source = "http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text";
	// select text in textarea is different than selecting text in p tag
	// code:
	function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString(); // non IE
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text; // for IE
    }
    return text;
	}
}