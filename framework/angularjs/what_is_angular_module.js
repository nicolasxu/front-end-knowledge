function what_is_angular_module() {
	var source = "https://docs.angularjs.org/guide/module";
	var angular_app_recommended_structure = "https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub";

	/* 
		module is container for different part of the app:
			- controllers
			- services
			- filters
			- directives
			- etc..
	*/

	// example: angular app organization 
	angular.module('xmpl.directive', [/* dependencies */]); // this is creating a new module
  angular.module('xmpl.directive'); // This is not creating a module, just index previously created module

	angular.module('xmpl.filter', []);

	angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])

	  .run(function(greeter, user) {
	    // This is effectively part of the main method initialization code
	    greeter.localize({
	      salutation: 'Bonjour'
	    });
	    user.load('World');
	  })

	  .controller('XmplController', function($scope, greeter, user){
	    $scope.greeting = greeter.greet(user.name);
	  });
	  /*
		  Beware that using angular.module('myModule', []) will create 
		  the module myModule and overwrite any existing module named myModule. 
		  Use angular.module('myModule') to retrieve an existing module.
	  */
}