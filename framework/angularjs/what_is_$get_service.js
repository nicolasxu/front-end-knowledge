
var short_answer = "a definition on how to creawte(new) a object", "$get only valid concept in provider definiton"

var source = "https://docs.angularjs.org/guide/providers"
/*
The Provider recipe is syntactically defined as a custom type that implements a $get method. 
This method is a factory function just like the one we use in the Factory recipe. 
In fact, if you define a Factory recipe, an empty Provider type with the $get
 method set to your factory function is automatically created under the hood.

*/

/*

You should use the Provider recipe only when you want to expose an API for 
application-wide configuration that must be made before the application starts.

*/

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

myApp.config(["unicornLauncherProvider", function(unicornLauncherProvider) {
  unicornLauncherProvider.useTinfoilShielding(true);
}]);