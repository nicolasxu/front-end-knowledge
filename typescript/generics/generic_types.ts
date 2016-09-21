function identity<T>(arg: T) {
	return arg;
}


let myIdentity: <T>(arg: T) => T = identity;
// <T> (arg: T) => T    this is function type signature
// assign this value to variable myIdentity

// Alternative way:


let myIdentity2: {<T>(arg: T): T} = identity;


