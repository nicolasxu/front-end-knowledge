function $routeProvider_service() {
	// make sure to load ['ngRoute'] to module before using $route, $routeProvider
	// ngRoute is in difference js file, other than angular.js
	// e.g.:
	angular.module('ngRouteExampleApp', ['ngRoute'])
		.controller(/* ... */);

	// example configure the route using $routeProvider
	angular.module('ngRouteExampleApp')
		.config(function($routeProvider, $locationProvider) {
		  $routeProvider
		    .when('/Book/:bookId', {
		    templateUrl: 'book.html',
		    controller: 'BookController',
		    controllerAs: 'vm',
		    resolve: {
		      // I will cause a 1 second delay
		      delay: function($q, $timeout) {
		        var delay = $q.defer();
		        $timeout(delay.resolve, 1000);
		        return delay.promise;
		      }
		    }
		  })
		  .when('/Book/:bookId/ch/:chapterId', {
		    templateUrl: 'chapter.html',
		    controller: 'ChapterController'
		  });

		  // configure html5 to get links working on jsfiddle
		  $locationProvider.html5Mode(true);
		});
}