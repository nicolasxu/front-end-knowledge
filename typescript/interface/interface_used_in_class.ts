interface ClockInterface {
    currentTime: Date;
}


class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// you can also describe method signature in interface object


interface ClockInterface2 {
    currentTime: Date;
    setTime(d: Date): string;
    // both params and return value must be the same in the implementation
    // interface method must be implemented. 
}

class Clock2 implements ClockInterface2 {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
      return this.currentTime.toString();
    }
    constructor(h: number, m: number) { }
}


