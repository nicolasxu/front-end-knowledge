
// compare class is almost the same as comparing object leteral, with on exception:
// static member and constructor are not taken into consideration in determining 
// compatibilitiy. 

// but Private and protected members in a class affect their compatibility. 

// example:


class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK
