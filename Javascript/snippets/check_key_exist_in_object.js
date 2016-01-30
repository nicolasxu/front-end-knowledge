function check_key_exist_in_object() {
	var source = "http://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object";
	// wrong way
	var obj = { key: undefined };
	obj["key"] != undefined // false, but the key exists!

	// right way
	"key" in obj // true, regardless of the actual value or if in prototype chain
	// if only in the ojbect itself, not on prototype chain
	obj.hasOwnProperty("key") // true
}