'<h1 ng-click="greeting($event)">{{name}}</h1>'

$scope.greeting = function ($event) {
		console.log($event);
		alert('greeting...');
	}