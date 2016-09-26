function getMyThing (){
	return "This is my thing";
}

function getMyObject() {
	return {
		a: 1,
		b: "my object"
	}
}

module.exports = {
	getMyThing: getMyThing,
	getMyObject: getMyObject
}