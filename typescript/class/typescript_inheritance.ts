class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
  constructor(name: string) { 
  	super(name); 
  	// calling parent class constructor

  }
  move(distanceInMeters = 5) {
  	// defining a member method with default parameter

  	// also overwrite method in parent class
    console.log("Slithering...");
    super.move(distanceInMeters);
    // calling parent class method
  }
}


class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
    	// default parameter
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom : Animal = new Horse("Tommy the Horse");

sam.move();
tom.move();
