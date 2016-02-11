function protect_against_minification() {
	// classic way
	app.controller('MyController', ['$scope', function($scope) {
	  $scope.greeting = 'hello';
	}]);

	// new way
	angular
		.controller('AvengersController', AvengersController);

		AvengerController.$inject = ['movieService', '$delegate'];

		function AvengerController(movieService, $delegate) {
			// do the work
		}
}