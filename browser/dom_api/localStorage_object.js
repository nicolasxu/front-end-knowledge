function localStorage_object() {
	// localstorage can only strong key value pair, the value is string, not object
	
	var testObject = { 'one': 1, 'two': 2, 'three': 3 };

	// Put the object into storage
	localStorage.setItem('testObject', JSON.stringify(testObject));

	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('testObject');

	console.log('retrievedObject: ', JSON.parse(retrievedObject));
}