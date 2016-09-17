
let o = {
    a: "foo",
    b: 12,
    c: "bar"
}

let {a:newName1, b:newName2, c:name3}: {a: string, b: number, c: string} = o;


console.log(newName1);
console.log(newName2);
