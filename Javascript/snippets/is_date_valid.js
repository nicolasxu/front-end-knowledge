function is_date_valid() {
	var source = "http://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript";
	// after you create Date obj, var userDate = new Date(1449107515435);
	function isDateValid(inputDateObj) {
		if ( Object.prototype.toString.call(d) === "[object Date]" ) {
		  // it is a date
		  if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
		    // date is not valid
		    return false;
		  } else {
		    // date is valid
		    return true; 
		  }
		} else {
		  // not a date
		  return false; 
		}
	}
}