
let passcode: string = "secret passcode";


class Employee {
	private _fullName: string;
	// declare member begin with _

	get fullName (): string {
		return this._fullName;
	}

	set fullName(newName: string) {
		if(passcode && passcode === 'secret passcode') {
			this._fullName = newName;
		}
		else {
			console.log('Error: unauthorized update of employee name');
		}
	}
}

let employee = new Employee();

employee.fullName = "Bob Smith";

if(employee.fullName) {
	console.log(employee.fullName);
}