// what is index type? 

/* something that we can use [] to index into, e.g.:

	a[10]
	names['bob']

 */

interface StringArray {
	[index: number] : string;
	// define a index type:
	// index is number, return a string
}

	// when indexing with a number, javascript will always
	// convert it into a string, e.g: 
	// a[100] will be a["100"]

let myArray: StringArray;

myArray = ["Bob", "Fred"];

let myStr : string = myArray[0];



interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: number;      // error, the type of 'name' is not a subtype of the indexer
}
