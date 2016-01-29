function simple_get_date_in_format() {
	var source = "http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript";

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = mm+'/'+dd+'/'+yyyy;
	document.write(today);
}