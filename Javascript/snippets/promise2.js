// How to break up from a promise chain

var source = "http://stackoverflow.com/questions/20714460/break-promise-chain-and-call-a-function-based-on-the-step-in-the-chain-where-it";


/*
Also keep in mind that if you want to break out 
of the chain in your error handler, it needs to 
return a rejected promise or throw an Error (which 
	will be caught and wrapped in a rejected promise 
	automatically). If you don't return a promise, then 
wraps the return value in a resolve promise for you.
*/

/*
This means that if you don't return anything, you 
are effectively returning a resolved promise for 
the value undefined.
*/

// How to return a reject promise? 
var return_reject_promise = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject";



Promise.reject("Testing static reject").then(function(reason) {
  // not called
}, function(reason) {
  console.log(reason); // "Testing static reject"
});

Promise.reject(new Error("fail")).then(function(error) {
  // not called
}, function(error) {
  console.log(error); // Stacktrace
});
