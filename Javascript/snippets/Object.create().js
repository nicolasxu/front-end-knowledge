// How to use Object.create();


var newObj = Object.create({/* prototype object */}, {/* property object */});
// 1. prototype object will be the prototype of newly create object. 
// 2. properties in property object will be added to the newly created object. 
// example: 
	var ss = o = Object.create({a: 1}, { p: { value: 42 } });




	
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.move(1, 1); // Outputs, 'Shape moved.'