function static_var_in_javascript() {
	var source = "http://stackoverflow.com/questions/1535631/static-variables-in-javascript";
	// example:
	function Person(){
		// function name is available within the function, 
		// that's why recursive function call is possible. 
	  if(typeof Person.count === 'undefined'){
	    Person.count = 1;
	  }
	  else{
	    Person.count++;
	  }
	  console.log(Person.count);
	}

	var p1 = new Person();
	var p2 = new Person();
	var p3 = new Person();
	console.log(Person.count); // Person.count is kind of static var for Person class
}