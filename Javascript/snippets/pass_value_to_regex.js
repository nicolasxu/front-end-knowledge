function pass_value_to_regex() {



	var source = "http://stackoverflow.com/questions/494035/how-do-you-pass-a-variable-to-a-regular-expression-javascript";

	var str = "Tom";
	var re = new RegExp(str, "g");
	"my Tom".replace(re, "Jim");


	
}