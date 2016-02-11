
var source = "http://www.bennadel.com/blog/2658-using-scope-watch-to-watch-functions-in-angularjs.htm";


// Since $scope is passed into the watch function (see example above), it
// means that we can watch any function that expects the scope as an
// argument and returns a value in response. A great example of this is
// the $interpolate() function - it returns a function that expects the
// scope and returns the result of the interpolated value in that scope
// context. As such, it's suited perfectly to watch interpolated values.
$scope.$watch(
    $interpolate( "Interpolate: Best frined is {{ bestFriend.name }}" ),
    function( newValue ) {
        console.log( newValue );
    }
);