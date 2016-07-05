"$delegate concept is used under Angularjs decorator pattern"
"$delegate is the original service/directive/filter passed into decorator for modification"
"$delegate represent a service/directive/filter, which is injected to decorator function , e.g: "
	$provide.decorator('myService', [
    '$delegate',
    function myServiceDecorator($delegate) {
    }]
	);

// What is decorator?
var answer = "decorator is pattern used in angularjs during config stage for modifying service/directive/filter"