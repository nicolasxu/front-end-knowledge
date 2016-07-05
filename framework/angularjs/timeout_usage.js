function timeout_usage() {

}
var source = "https://docs.angularjs.org/api/ng/service/$timeout";

1 + "$timeout is Angular's wrapper for window.setTimeout"

2 + "The fn function is wrapped into a try/catch block and any exceptions will be catched in $exceptionHandler service."

3 + "The return value of calling $timeout is a promise, which will be resolved when the delay has passed and the timeout function, if provided, is executed."

4 + "To cancel a timeout request, call $timeout.cancel(promise)."

$timeout(function (){
	return $timeout(function (){
		return 30;
	}, 2000);
}, 3000)
.then(function (){
	return 3;
})