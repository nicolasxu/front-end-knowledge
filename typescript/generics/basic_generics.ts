function identity(arg: number) {
	return arg;

}


function identity2(arg: any): any  {
	// any works, but we loose information about what type returns. 
	return arg;
}


function identity3<T> (arg: T): T {
	// this is generic version of function
	return arg;
}

// calling generic function

let output = identity3<string>("hello");
console.log(output);

// 2nd way to call generic function: type argument inference
output = identity3("hello world!"); // type is infered 
