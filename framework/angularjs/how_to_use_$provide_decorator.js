
var source = "https://docs.angularjs.org/guide/decorators";

// what is $provide.decorator and module.decorator? 
/*
Decorators are a design pattern that is used to separate modification or 
decoration of a class without modifying the original source code. In Angular, 
decorators are functions that allow a service, directive or filter 
to be modified prior to its usage.
*/

// note:

/*
Like with $provide.decorator, the module.decorator function runs 
during the config phase of the app. That means you can define a 
module.decorator before the decorated service is defined.
*/

// example for order
angular
	.module('theApp', [])
	.factory('theFactory', theFactoryFn)
	.config(function($provide) {
	  $provide.decorator('theFactory', provideDecoratorFn); // runs first
	})
	.decorator('theFactory', moduleDecoratorFn); // runs seconds



// example 1
angular.module('myApp', [])
.config([ '$provide', function($provide) {

  $provide.decorator('myService', [
    '$delegate',
    function myServiceDecorator($delegate) {

      function helperFn() {
        // an additional fn to add to the service
      }

      $delegate.aHelpfulAddition = helperFn;
      return $delegate;
    }
  ]);
}]);


/*
Note that whatever is returned by the decorator function will 
replace that which is being decorated. For example, a missing 
return statement will wipe out the entire object being decorated.
*/