// as parameters to a function
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
let tt:[number, number] = [1,4]; // correct way
let tt2 = [1,4]; // if you pass tt2 to f, it will be error
								 // since number[] type is not the [number, number] type (Tuple: Mixed type of array)


								 
f(tt);