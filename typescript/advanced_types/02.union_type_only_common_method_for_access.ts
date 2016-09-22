
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

function getSamllPet(): Fish | Bird {
	return new GoldFish();
}


let pet = getSamllPet();

pet.layEggs();

//pet.swim(); // error, since it is a union of Fish and Bird
// pet.fly();  // error, since it is a union of Fish and Bird
