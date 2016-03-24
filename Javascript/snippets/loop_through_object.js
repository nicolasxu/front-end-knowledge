function loop_through_object() {
	var source = "http://stackoverflow.com/questions/684672/loop-through-javascript-object";
	for (var key in p) {
	  if (p.hasOwnProperty(key)) {
	    console.log(key + " -> " + p[key]);
	  }
	}
}

// functions in String object are not enumerable, so you won't see them if you forget
// to add p.hasOwnProperty(key)