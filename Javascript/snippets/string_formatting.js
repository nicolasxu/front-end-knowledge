function string_formatting() {
	var lib_to_use = "http://epeli.github.io/underscore.string/#home";

	numberFormat(1000, 2);
	// => "1,000.00"

	numberFormat(123456789.123, 5, ".", ",");
	// => "123,456,789.12300"
}