let o = {
    a: "foo",
    b: 12,
    c: "bar"
}


let {a: newName1, b: newName2} = o;

// console.log(a); // no such variable a
// console.log(b); // no such variable b


console.log(newName1);
console.log(newName2);