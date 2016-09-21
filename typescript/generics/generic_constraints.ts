
//  make sure type has .length property

interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	return arg;
}

// loggingIdentity(3); // error

loggingIdentity([3,4,5]); // good

