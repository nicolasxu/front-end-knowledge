// as parameters to a function
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
var tt = [1, 4]; // correct way
var tt2 = [1, 4]; // if you pass tt2 to f, it will be error
// since number[] type is not the [number, number] type (Tuple: Mixed type of array)
f(tt);
//# sourceMappingURL=destructuring_as_function.js.map