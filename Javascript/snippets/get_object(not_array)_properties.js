var pp = {name:"nicolas", age:11};

// Object.keys() - get enumerable properties of CURRENT object, no prototype chain properties
Object.keys(pp); // => ['name', 'age']
// no pp.hasOwnProperties() necessary

// But  for...in will loop through current and prototype chain enumerable properties
// function in String object is not enumerable
// use pp.hasOwnProperties() to limit to current object
// example:
var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}

