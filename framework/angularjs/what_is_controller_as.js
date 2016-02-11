function what_is_controller_as() {
	var source = "https://docs.angularjs.org/api/ng/directive/ngController";
	// <div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
	// then you can use:
	// 	 <div>{{settings.name}}</div>
	// to access view model variables
	// then attach method this way:
	SettingsController1.prototype.greet = function() {
	  alert(this.name);
	  // doen't miss the prototype, since settings is created using 'new' operator
	};

	// in $routeProvider you also can use controllerAs
	function config($routeProvider) {
    $routeProvider
      .when('/avengers', {
        templateUrl: 'avengers.html',
        controller: 'Avengers',
        controllerAs: 'vm'
        // vm is short for View Model
      });
	}
}