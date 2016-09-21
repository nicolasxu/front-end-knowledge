function loggingIdtntity<T>(arg: T[]): T[] {
	console.log(arg.length); // array has .length
	return arg;
}

// alternative syntax

function loggingItentity2<T> (arg: Array<T>) : Array<T> {
	console.log(arg.length);
	return arg;
}