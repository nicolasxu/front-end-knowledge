interface SquareConfig {
    color?: string;
    width?: number;
}


function createSquare(config: SquareConfig) : {color: string; area: number} {

	let newSquare = {color: "white", area: 100};

	if(config.color) {
		newSquare.color = config.color;
	}

	if(config.width) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

// let mySquare = createSquare({ c111111: "red", width11111: 100 }); // will result compiling error
// that's why it is called excess property checks.


/* To avoid excess property check, you need to explicitly type conversion */

let mySquare = createSquare({width: 100, opacity: 0.6} as SquareConfig );







