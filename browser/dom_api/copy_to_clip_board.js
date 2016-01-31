function copy_to_clip_board() {
	var source = "http://stackoverflow.com/questions/17527870/how-does-trello-access-the-users-clipboard";

	// 1. trello solution
	// the logic is to create an invisible textarea (1px size), then fill and select the text to copy,
	// when user press ctrl or meta key. 
	// If user then press C, then the content is copied to clipboard. If user release the key,
	// then textarea is removed from dom. 
	
	// 2. another solution
	// use clipboardjs
	var package_url = "https://zenorocha.github.io/clipboard.js/";
}