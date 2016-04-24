function remove_same_element_array() {
	// code:
	var number = 33;
	for(var i = array.length - 1; i >= 0; i--) {
    if(array[i] === number) {
       array.splice(i, 1);
    }
	}
}

// example: 
// [1,2,3,4,5,17, 33, 19, 22]