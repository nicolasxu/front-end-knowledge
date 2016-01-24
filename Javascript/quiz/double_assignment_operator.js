var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
//////////////////
// result is undefined


// why? 
foo.x = foo = {n: 2};
// =>

// 1. evaluating the left most assignment operator = 
(foo.x) = (foo = {n: 2});
//    result: foo.x value is {n: 2}

// 2. Evaluting next assignment operator 2nd from left
foo = {n: 2}
//    result: foo value is {n: 2}, no x in foo. This assignment
//    overrides any previously exists value in foo. 
