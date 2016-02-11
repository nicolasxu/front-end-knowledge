function watch_usage() {
	var source = "http://www.bennadel.com/blog/2852-understanding-how-to-use-scope-watch-with-controller-as-in-angularjs.htm";

}


// Create an application module for our demo.
var app = angular.module( "Demo", [] );
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// I control the root for the application.
angular.module( "Demo" ).controller(
    "AppController",
    function( $scope ) {
        // Setup our Controller instance as the view-model.
        var vm = this;
        // This is the value we will be "watching".
        vm.fooCount = 0;
        // When you watch a "vm.*" value from within the Controller, you are
        // making the assumption (ie, creating coupling) that your View is using
        // the same variable - "vm" - externally that you are using internally.
        // --
        // CAUTION: In our case, this is NOT true - the view is using the
        // "appController" alias.
        $scope.$watch(
            "vm.fooCount",
            function handleFooChange( newValue, oldValue ) {
                console.log( "vm.fooCount:", newValue );
            }
        );
        // If your Controller and your View are not using the same view-model
        // alias, then you can explicitly watch the value that your View is using.
        // Here, we're watching "appController" instead of "vm". This might make
        // you dry-heave a tiny bit; but, this is essentially what you are doing
        // when you use "vm.*" as well.
        $scope.$watch(
            "appController.fooCount",
            function handleFooChange( newValue, oldValue ) {
                console.log( "appController.fooCount:", newValue );
            }
        );
        // To better decouple your Controller from your View, you can define a
        // watch function instead of providing a string-based watch expression.
        // --
        // NOTE: Behind the scenes, this is what the $parse() service is doing
        // anyway; so, don't think of this as more work. In reality, it's actually
        // less work for AngularJS since it doesn't have to parse the expression
        // into a function.
        $scope.$watch(
            function watchFoo( scope ) {
                // Return the "result" of the watch expression.
                return( vm.fooCount ); 
                // what eve returned, will be watched,  e.g.: you can return
                return vm.fooCount + 'are being watched';
            },
            function handleFooChange( newValue, oldValue ) {
                console.log( "fn( vm.fooCount ):", newValue );
            }
        );
        // Expose public API.
        vm.incrementFoo = incrementFoo;
        // ---
        // PUBLIC METHODS.
        // ---
        // Increment the value that we will be watching.
        function incrementFoo() {
            console.log( "---->", ++vm.fooCount, "<----" );
        }
    }
);