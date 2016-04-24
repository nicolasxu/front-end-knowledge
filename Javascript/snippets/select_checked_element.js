function select_checked_element() {
	var source = "http://stackoverflow.com/questions/901712/check-checkbox-checked-property";
		/*
	<input type="checkbox" id="isAgeSelected"/>
	<div id="txtAge" style="display:none">Age is something</div>​
	*/

	// code:
	if(document.getElementById('isAgeSelected').checked) {
	    $("#txtAge").show();
	} else {
	    $("#txtAge").hide();
	}

	// example
	$('#isAgeSelected').click(function () {
	    $("#txtAge").toggle(this.checked);
	});

}