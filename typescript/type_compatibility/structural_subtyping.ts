/*

The basic rule for TypeScript’s structural type system is that x is 
compatible with y if y has at least the same members as x. For example:



*/

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();


// example 2:

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;

/*
To check whether y can be assigned to x, the compiler checks each
 property of x to find a corresponding compatible property in y. In 
 this case, y must have a member called name that is a string. It
  does, so the assignment is allowed.
*/


function greet(n: Named) {
    alert("Hello, " + n.name);
}
greet(y); // OK

