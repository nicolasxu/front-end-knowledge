/*
TODO: compiling error
http://stackoverflow.com/questions/39646890/ts-node-will-not-compile-official-discriminated-unions-example


Discriminated Unions

You can combine string literal types, union types, type guards, 
and type aliases to build an advanced pattern called discriminated unions, 
also known as tagged unions or algebraic data types. 


*/

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}


type Shape = Square | Rectangle | Circle;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}