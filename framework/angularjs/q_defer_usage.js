// there are 2 ways to use $q
	
	// Method 1: Promise way
	// for the purpose of this example let's assume that variables `$q` and `okToGreet`
	// are available in the current lexical scope (they could have been injected or passed in).
	function method_1() {

		function asyncGreet(name) {
		  var deferred = $q.defer();

		  setTimeout(function() {
		    deferred.notify('About to greet ' + name + '.');

		    if (okToGreet(name)) {
		      deferred.resolve('Hello, ' + name + '!');
		    } else {
		      deferred.reject('Greeting ' + name + ' is not allowed.');
		    }
		  }, 1000);

		  return deferred.promise;
		}

		var promise = asyncGreet('Robin Hood');
		promise.then(function(greeting) {
		  alert('Success: ' + greeting);
		}, function(reason) {
		  alert('Failed: ' + reason);
		}, function(update) {
		  alert('Got notification: ' + update);
		});

	}

	// Method 2: // constructor way
	function method_2() {

		// for the purpose of this example let's assume that variables `$q` and `okToGreet`
		// are available in the current lexical scope (they could have been injected or passed in).

		function asyncGreet(name) {
		  // perform some asynchronous operation, resolve or reject the promise when appropriate.
		  return $q(function(resolve, reject) {
		    setTimeout(function() {
		      if (okToGreet(name)) {
		        resolve('Hello, ' + name + '!');
		      } else {
		        reject('Greeting ' + name + ' is not allowed.');
		      }
		    }, 1000);
		  });
		}

		var promise = asyncGreet('Robin Hood');
		promise.then(function(greeting) {
		  alert('Success: ' + greeting);
		}, function(reason) {
		  alert('Failed: ' + reason);
		});
	}

