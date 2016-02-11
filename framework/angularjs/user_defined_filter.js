function filter_usage() {
	var app = angular.module("demoApp", ['ngResource']);

	app.filter("sanitize", ['$sce', function($sce) {
	  return function(htmlCode){
	    return $sce.trustAsHtml(htmlCode);
	  }
	}]);
	// <div ng-bind-html="whatever_needs_to_be_sanitized | sanitize"></div>
}