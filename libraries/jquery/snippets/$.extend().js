$.extend()
/*
	Changes the properties of the first object using the 
	properties of subsequent objects:
*/
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( firstObject, secondObject );
 
console.log( firstObject.foo ); // "baz"
console.log( newObject.foo ); // "baz"
/*
	If you don't want to change any of the objects you
	pass to $.extend(), pass an empty object as the first argument:
*/

var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
 
var newObject = $.extend( {}, firstObject, secondObject );
 
console.log( firstObject.foo ); // "bar"
console.log( newObject.foo ); // "baz"