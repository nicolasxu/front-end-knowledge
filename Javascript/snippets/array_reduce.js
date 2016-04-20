var source = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce";



[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10 /* initial value */);

// callback func is runned one time for each key is non-undefined(holes) 
// element in the array. 

// - If no initial value, AND array is empty, error.

/* note: */
// If initial value is provided, index starts at 0.
// If initial value is not provided, index starts at 1, previousValue is the
// value at index 0. 