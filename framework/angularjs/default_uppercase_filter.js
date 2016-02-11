function use_default_uppercase_filter() {
	var source = "https://docs.angularjs.org/api/ng/service/$filter";
	// this is also angularjs provided.
	angular.module('filterExample', [])
		.controller('MainCtrl', function($scope, $filter) {
		  $scope.originalText = 'hello';
		  $scope.filteredText = $filter('uppercase')($scope.originalText);
		});
}