class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
		// this in typescript denotes a member access
	}

	greet() : string{
		return "Hello, " + this.greeting;
	}
}


let greeter = new Greeter("world!");
let greetMsg: string = greeter.greet();

console.log(greetMsg);