/*
	
	let is block scope, variable cannot be used before using. 

*/

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b; 
    // b is declared in if block, so it is only 
    // available in its block and children blocks. 
}