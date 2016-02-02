var source = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce";



[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10 /* initial value */);

// callback func is runned one time for each key is non-undefined(holes) element in the array. 

// - If no initial value, AND array is empty, error.
