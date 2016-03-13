$.proxy()
/*
Returns a function that will always run in the provided scope — 
that is, sets the meaning of this inside the passed function 
to the second argument.
*/
var myFunction = function() {
    console.log( this );
};
var myObject = {
    foo: "bar"
};
 
myFunction(); // window
 
var myProxyFunction = $.proxy( myFunction, myObject );
 
myProxyFunction(); // myObject
/*
	If you have an object with methods, you can pass the object 
	and the name of a method to return a function that will always 
	run in the scope of the object.
*/
var myObject = {
    myFn: function() {
        console.log( this );
    }
};
 
$( "#foo" ).click( myObject.myFn ); // HTMLElement #foo
$( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject