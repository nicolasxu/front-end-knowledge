// You can declare a type parameter that is constrained by another type parameter. 



function copyFields<T extends U, U> (target: T, source: U) {

	for(let id in source) {
		target[id] = source[id];
	}

	return target;

}

let x = {a: 1, b: 2, c: 3, d: 4};


copyFields(x, {b: 10, d: 20});
// copyFields(x, {Q: 90}); // error since property Q isn't declare in 'x'



