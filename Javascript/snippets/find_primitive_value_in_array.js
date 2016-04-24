function find_primitive_value_in_array() {
	// it works only for primitive value
	var arrValues = ['sam', 'tom', 'shirley'];
	if (arrValues.indexOf('Sam') > -1) 
		{return true;}
	else 
		{return false;}
}

// note:
// both Array and String has indexOf() function