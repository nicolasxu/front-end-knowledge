
var source = "https://docs.angularjs.org/guide/providers";
/*
	In Angular apps most of these objects are instantiated and 
	wired together automatically by the injector service.

	The injector creates two types of objects, services and 
	Angujar objects.

	Services are objects whose API is defined by the developer 
	writing the service.

	Angular objects conform to a specific Angular framework 
	API:  controllers, directives, filters or animations.

	The injector needs to know how to create these objects. 
	You tell it by registering a "recipe" for creating your 
	object with the injector. There are five recipe types.
	Value, Factory, Service and Constant, and Provider.

	The most verbose, but also the most comprehensive one 
	is a Provider recipe. 

	The Provider recipe is syntactically defined as a 
	custom type that implements a $get method.
	This method is a factory function just like the 
	one we use in the Factory recipe. 

 */

var myApp = angular.module("myDemoApp", []);
// constant example
myApp.constant('clientId', 'a12345654321x');

// factory example 1
myApp.factory('clientIdFactory1', function clientIdFactory() {
  return 'a12345654321x';
});

// factory example 2
myApp.factory('apiTokenFactory2', ['clientId', function apiTokenFactory(clientId) {
  var encrypt = function(data1, data2) {
    // NSA-proof encryption algorithm:
    return (data1 + ':' + data2).toUpperCase();
  };

  var secret = window.localStorage.getItem('myApp.secret');
  var apiToken = encrypt(clientId, secret);

  return apiToken; // can also return other types, e.g.: object, function...
}]);

// service example (new operator is called behind scene)
function UnicornLauncher(apiToken) {

  this.launchedCount = 0;
  this.launch = function() {
    // Make a request to the remote API and include the apiToken
    ...
    this.launchedCount++;
  }
}
myApp.factory('unicornLauncherFac', ["apiToken", function(apiToken) {
  return new UnicornLauncher(apiToken);
}]);

myApp.service('unicornLauncherService', ["apiToken", UnicornLauncher]);

// provider example
// Purpose: configurable app wide
myApp.provider('unicornLauncher', function UnicornLauncherProvider() {
  var useTinfoilShielding = false;

  this.useTinfoilShielding = function(value) {
    useTinfoilShielding = !!value;
  };

  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {

    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return new UnicornLauncher(apiToken, useTinfoilShielding);
  }];
});
// During application bootstrap, before Angular goes off 
// creating all services, it configures and instantiates all providers.
// We call this the configuration phase of the application life-cycle. 
// During this phase, services aren't accessible because they haven't 
// been created yet.
// Once the configuration phase is over, interaction with providers 
// is disallowed and the process of creating services starts. We call 
// this part of the application life-cycle the run phase.
// BUT, constant can be accessable during configuration phrase. 
myApp.config(["unicornLauncherProvider", function(unicornLauncherProvider) {
  unicornLauncherProvider.useTinfoilShielding(true);
}]);

// constant can NOT have dependencies
myApp.constant('planetName', 'Greasy Giant');
myApp.config(['unicornLauncherProvider', 'planetName', function(unicornLauncherProvider, planetName) {
  unicornLauncherProvider.useTinfoilShielding(true);
  unicornLauncherProvider.stampText(planetName);
}]);


