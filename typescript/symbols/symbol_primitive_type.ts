// let sym1 = Symbol();

// let sym2 = Symbol("key"); // optional string key


// symbol as computed property using [] operator

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"