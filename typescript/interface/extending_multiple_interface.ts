interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}


interface Square extends Shape, PenStroke {
	sideLength : number;
}


let square = <Square>{};

square.color = "red";
square.penWidth = 10;
square.sideLength = 100;


