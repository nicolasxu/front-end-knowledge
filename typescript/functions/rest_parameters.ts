
/*
	When passing arguments for a rest parameter, you can use as many as you want; 
	you can even pass none. The compiler will build an array of the arguments 
	passed in with the name given after the ellipsis (...), allowing you to use it in your function.

*/

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

