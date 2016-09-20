interface LabelledValue {
	label: string,
	size: number
}


function printLabel (LabelledObj: LabelledValue) {
	console.log(LabelledObj.label);
}

let myObj = { size: 10, label : "size 10 Object"};


printLabel(myObj);

