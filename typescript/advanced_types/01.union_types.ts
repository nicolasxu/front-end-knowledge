/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number | Array<number>) {
    // padding is a union of string, number and Array<number>

    // "padding can be either string or number"
}

let result = padLeft("abc", 30);     // ok
let result2 = padLeft('abc', "80"); // ok

// error 
// let indentedString = padLeft("Hello world", true); // errors during compilation


////// Important: /////////
"If it is a union type, we can only access members that are common to all types";