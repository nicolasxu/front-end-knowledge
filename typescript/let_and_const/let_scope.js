/*
    
    let is block scope, variable cannot be used before using.

*/
function f(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b_1 = a + 1;
        return b_1;
    }
    // Error: 'b' doesn't exist here
    return b;
    // b is declared in if block, so it is only 
    // available in its block and children blocks. 
}
//# sourceMappingURL=let_scope.js.map