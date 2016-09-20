function printLabel(labelledObj: {label: string}) {
	// requires that the object passed in has a property called label of type string. 
	//  Notice that our object actually has more properties than this, but the compiler
	// only checks that at least the ones required are present and match the types required. 

	console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};

printLabel(myObj);

// printLabel({abd: '1111'});  // error 




