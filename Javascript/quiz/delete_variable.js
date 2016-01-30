function quiz2() {

	(function(x){
    delete x;
    return x;
  })(1);
  // result is 1, 
  // delete is only effective on an object's properties. 
  // It has no effect on variable or function names.
}