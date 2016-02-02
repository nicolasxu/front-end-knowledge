function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

// example 2:

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

var obj = new Counter();
obj.add([2, 5, 9]);
obj.count
// 3 
obj.sum
// 16

// Key points:
// - You can change element value in forEach(), but NOT array length.
// - forEach() always returns the value undefined and is not chainable.
//   map(), reduce() is chainable