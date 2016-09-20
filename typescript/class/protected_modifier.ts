
/*

The protected modifier acts much like the private modifier with the exception 
that members declared protected can also be accessed by instances of deriving classes.

*/
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {

	private department: string;

	constructor(name: string, department: string) {
		super(name);
		this.department = department;
	}

	public getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}`;
	}
}

let howard: Employee = new Employee("Howard", "Sales");

console.log(howard.getElevatorPitch());




