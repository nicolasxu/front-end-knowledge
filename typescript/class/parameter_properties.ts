//  let you create and initialize a member in one place

class Animal {
	constructor(private name: string) {} // {} is required
	move(distance:number) {
		console.log(`${this.name} moved ${distance}`);
	}
}
