
// in union type, how can you tell if it is a Fish or Bird?
// A common idiom in JavaScript to differentiate between two possible values is to check for the presence of a member.


"in Typescript, accessing member that doesn't exist will throw an errro!!!"

/*
// error, since accessing member that doesn't exist
if(pet.swim) {

} else if (pet.fly) {

}
*/

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

// To get the same code working, we’ll need to use a type assertion:


function getSamllPet(): Fish | Bird {
	return new GoldFish();
}

let pet = getSamllPet();

if( (<Fish>pet).swim ) {
	(<Fish>pet).swim();
} else if ( (<Bird>pet).fly ) {
	(<Bird>pet).fly();
}




