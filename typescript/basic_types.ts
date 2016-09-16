// 1. number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 2. string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.`
/* note: ` is not ', ` is the same as ".  */

// console.log(sentence);

// 3. Array

let list: number[] = [1,2,3,4];
console.log(list);

let list2: Array<number> = [1.2, 3, 4];

// 4. Tuple: Mixed type of array
let x: [string, number];
x = ["hello", 10];
// x = [10, 'Hello']; // error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// When accessing an element outside the set of known indices, a union type is used instead:

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'


// 5. enum
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
/*
By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. 
For example, we can start the previous example at 1 instead of 0:
*/
enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

/*
A handy feature of enums is that you can also go from a numeric value to the 
name of that value in the enum. For example, if we had the value 2 but weren’t 
sure what that mapped to in the Color enum above, we could look up the corresponding name:
*/
enum Color3 {Red = 1, Green, Blue};
let colorName: string = Color3[2]; // lookup value 2 in Color3
console.log(colorName);


// 6. any:  opt-out of type-checking and let the values pass through compile-time checks.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let notSure2: any = 4;
// notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: no method call allowed on Object type

let list3: any[] = [1, true, "free"];
list3[1] = 100;

// 7. void: absence of having type
function warnUser(): void {
    alert("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign undefined or null to them:
let unusable: void = undefined;


// 8. type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;




