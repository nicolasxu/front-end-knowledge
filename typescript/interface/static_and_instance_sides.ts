
// 
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
    // error will not pass cmpile 
}


// class has 2 side:
// static side (on attached to its upstream prototype chain)
// instance side (not on prototype chain, this)

/* 

The error is because when a class implements an interface, only 
the instance side of the class is checked. Since the constructor 
sits in the static side, it is not included in this check.

*/