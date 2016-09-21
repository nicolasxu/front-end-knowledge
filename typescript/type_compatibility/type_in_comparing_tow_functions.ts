let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
// this is the opposite of structural subtypeing. 
// Note that the names of the parameters are not considered, only their types.

// compiled to the following javascript


var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
