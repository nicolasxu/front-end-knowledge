function html5mode() {
	var what_is_html5mode = "https://docs.angularjs.org/guide/$location";

	module.config(function($locationProvider){
		$locationProvider.html5Mode(true);
		// will enable html5Mode
		// also need to add <base href="/"> to index.html
	});

	// Server side
	// Using HTML5 mode requires URL rewriting on server side
	// basically you have to rewrite all your links to entry point 
	// of your application (e.g. index.html)
	
}