/*

However, having to define a function to figure out if a type is a 
primitive is kind of a pain. Luckily, you don’t need to abstract 
typeof x === "number" into its own function because TypeScript 
will recognize it as a type guard on its own.

*/

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
    	// "number", "string", "boolean", or "symbol"
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

