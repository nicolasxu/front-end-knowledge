var source ="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort";


// IMPORTANT:
/*


If omitted, the array is sorted 
according to each character's Unicode 
code point value, according to the string 
conversion of each element.
 */

var scores = [1, 10, 2, 21]; 
scores.sort(); // [1, 10, 2, 21]


function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}