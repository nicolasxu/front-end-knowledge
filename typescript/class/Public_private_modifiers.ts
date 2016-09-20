//  In TypeScript, each member is public by default.

// in C#, it is private by default


class Animal {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}

class Rhino extends Animal {
	constructor() {
		super("Rhino");
	}
}

class Employee {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");


animal = rhino;
// animal = employee;  // error Animal is not an Employee type

