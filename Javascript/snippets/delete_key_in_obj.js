function delete_obj() {
	delete myJSONObject.regex;
	// or,
	delete myJSONObject['regex'];
	// or,
	var prop = "regex";
	delete myJSONObject[prop];

	// if you delete array item, it will set the index to undefined
	var array = [1,2,3,4];
	delete array[2];
	/* Expected result --> [1,2,4]
	 * Actual result   --> [1,2,undefined,4]
	 */
}