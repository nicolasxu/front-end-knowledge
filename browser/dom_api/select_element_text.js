function select_text() {
	var source = "http://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse";

	function SelectElementText(elementIdString) {
		// Select the text on an element by ID
		// It can only select the text of whole element.
		// element example: "#select_me"
    var doc = document, 
    		textElem = doc.getElementById(elementIdString),
    		range, 
    		selection;

    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(textElem);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection(); // create selection object        
        range = document.createRange();
        range.selectNodeContents(textElem);
        selection.removeAllRanges();
        selection.addRange(range);
    }
	}

}