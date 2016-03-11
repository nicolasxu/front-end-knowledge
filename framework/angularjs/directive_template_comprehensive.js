var myModule = angular.module(...);

myModule.directive('directiveName', function factory(injectables) {
  var directiveDefinitionObject = {
    priority: 0,
    template: '<div></div>', // or // function(tElement, tAttrs) { ... },
    // or
    // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },
    transclude: false,
    restrict: 'A',  // 'E' for element
    templateNamespace: 'html',
    scope: false, //  true, false, or an object
    controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
    controllerAs: 'stringIdentifier',
    bindToController: false,
    require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
    compile: function compile(tElement, tAttrs, transclude) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) { ... },
        post: function postLink(scope, iElement, iAttrs, controller) { ... }
      }
      // or
      // return function postLink( ... ) { ... }
    },
    // or
    // link: {
    //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },
    //  post: function postLink(scope, iElement, iAttrs, controller) { ... }
    // }
    // or
    // link: function postLink( ... ) { ... }
  };
  return directiveDefinitionObject;
});



// mini directive
directive('name', [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      
    }
  };
}]);


// official mini directive:
var myModule = angular.module(...);

myModule.directive('directiveName', function factory(injectables) {
  var directiveDefinitionObject = {
    link: function postLink(scope, iElement, iAttrs) { ... }
  };
  return directiveDefinitionObject;
  // or
  // return function postLink(scope, iElement, iAttrs) { ... }
});