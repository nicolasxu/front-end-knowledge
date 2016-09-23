/*
Computed property names

	Starting with ECMAScript 2015, the object initializer syntax also 
	supports computed property names. That allows you to put an 
	expression in brackets [], that will be computed as the property name. 

*/

let more_reference = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names";


class C {
    ["abc"]() {
        return "C";
    }
}

let c = new C();

let className = c["abc"]();
console.log(className);