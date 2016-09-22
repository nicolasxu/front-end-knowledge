// what is user defined type gard? 
// To define a type guard, we simply need to define a function whose return type is a type predicate


interface Bird {
	fly();
	layEggs();
}

interface Fish {
	swim();
	layEggs();
}

class GoldFish implements Fish {
	layEggs() {
		// implement layEgg() interface
		console.log("goldfish lays eggs");
	}
	swim() {
		// implement swim() interface
		console.log("goldfish swims");
	}
}

function isFish(pet: Fish | Bird): pet is Fish {
	// "pet is Fish" is user defined type predicate
    return (<Fish>pet).swim !== undefined;
}

function getSamllPet(): Fish | Bird {
	return new GoldFish();
}

let pet = getSamllPet();

// Both calls to 'swim' and 'fly' are now okay.

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}


