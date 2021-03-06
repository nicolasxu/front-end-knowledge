var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

// The promise constructor takes one argument, 
// a callback with two parameters, resolve and reject.


// Here's how you use that promise:

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
  return result;
  // the returned value will be wrapped in a new promise object. 
  // so that you can then() it.
  // If you don't return anything, actually undefined is returned and wrapped
  // by new promise object. 
}, function(err) {
  console.log(err); // Error: "It broke"
});


// Promisifying XMLHttpRequest

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called after request is completed (can be 404), 
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}