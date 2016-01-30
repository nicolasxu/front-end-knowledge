function quiz4() {


  var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  (function(){
    return typeof arguments[0]();
  })(foo.bar);
  // result is "undefined"
  // function foo.bar passed in as a callback, 
  // in callback, this will always point to root object, which is window
}