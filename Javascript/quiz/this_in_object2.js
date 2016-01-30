function quiz5() {
	var foo = {
  	bar: function(){ return this.baz; },
  	baz: 1
	}
	typeof (f = foo.bar)();

	// result is "undefined"
}