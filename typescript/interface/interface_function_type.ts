// interfaces are also capable of describing function types

interface SearchFunc {
	// defining a function signature, params and return value
	(source: string, subString: string): boolean;
}



let mySearch: SearchFunc; // create a variable of SearchFunc type

mySearch = function(src: string, sub: string) : boolean {
	//  the names of the parameters do not need to match. 
	let result = src.search(sub);

	if(result === -1) {
		return false;
	} else {
		return true; 
	}
}


// you can omit the param types, since it can be infered from your interface signature

let mySearch2: SearchFunc;


mySearch2 = function(src, sub) {

	let result = src.search(sub);

	if(result === -1) {
		return false;
	} else {
		return true; 
	}
}




