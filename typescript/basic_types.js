// 1. number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// 2. string
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".";
/* note: ` is not ', ` is the same as ".  */
// console.log(sentence);
// 3. Array
var list = [1, 2, 3, 4];
console.log(list);
var list2 = [1.2, 3, 4];
// 4. Tuple: Mixed type of array
var x;
x = ["hello", 10];
// x = [10, 'Hello']; // error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// When accessing an element outside the set of known indices, a union type is used instead:
x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'
// 5. enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
/*
By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members.
For example, we can start the previous example at 1 instead of 0:
*/
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
/*
A handy feature of enums is that you can also go from a numeric value to the
name of that value in the enum. For example, if we had the value 2 but weren’t
sure what that mapped to in the Color enum above, we could look up the corresponding name:
*/
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
;
var colorName = Color3[2]; // lookup value 2 in Color3
console.log(colorName);
// 6. any:  opt-out of type-checking and let the values pass through compile-time checks.
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var notSure2 = 4;
// notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); // Error: no method call allowed on Object type
var list3 = [1, true, "free"];
list3[1] = 100;
// 7. void: absence of having type
function warnUser() {
    alert("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
var unusable = undefined;
// 8. type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
//# sourceMappingURL=basic_types.js.map