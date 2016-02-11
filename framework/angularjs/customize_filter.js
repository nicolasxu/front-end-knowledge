function customize_filter() {
	// filter should take input and return a output, filtered value. 
	// In Angular, filter definition should return a function which does the filtering. 
	var source = "https://docs.angularjs.org/guide/filter";
	angular.module('myReverseFilterApp', [])
	.filter('reverse', function() {
	  return function(input, uppercase) {
	  	// in template, input is value before '|', e.g.:
	  	// {{greeting | reverse:true}}
	  	// so input is greeting, uppercase is true
	    input = input || '';
	    var out = "";
	    for (var i = 0; i < input.length; i++) {
	      out = input.charAt(i) + out;
	    }
	    // conditional based on optional argument
	    if (uppercase) {
	      out = out.toUpperCase();
	    }
	    return out;
	  };
	})
	.controller('MyController', ['$scope', function($scope) {
	  $scope.greeting = 'hello';
	}]);	

	// usage:
	/*
	<div ng-controller="MyController">
	  <input ng-model="greeting" type="text"><br>
	  No filter: {{greeting}}<br>
	  Reverse: {{greeting|reverse}}<br>
	  Reverse + uppercase: {{greeting|reverse:true}}<br>
	</div>
	*/				
}