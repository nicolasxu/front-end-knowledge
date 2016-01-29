function enum_in_javascript() {
	var source = "http://stackoverflow.com/questions/287903/enums-in-javascript";

	var SIZE = {
	  SMALL : {value: 0, name: "Small", code: "S"}, 
	  MEDIUM: {value: 1, name: "Medium", code: "M"}, 
	  LARGE : {value: 2, name: "Large", code: "L"}
	};

	var currentSize = SIZE.MEDIUM;
	// Do not compare variable currentSize with SIZE.medium directly,
	// since you are comparing the reference
	if (currentSize.value == SIZE.MEDIUM.value) {
	  // this alerts: "1: Medium"
	  alert(currentSize.value + ": " + currentSize.name);
	}
}