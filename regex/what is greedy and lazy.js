var source = "http://www.rexegg.com/regex-quantifiers.html#basics";

/*
	1. greedy or lazy only applys to quantifier (+, *)
	2. default quantifier is greedy, unless specified otherwise, e.g: +?, *?, 
  3. example:

 */
var str = "abc18374"; 
var matchDigitsGreedy = /\d+/; // default greedy
matchDigitsGreedy.exec(str); 
// result -> ["18374"]


var matchDigitLazy = /\d+?/;
matchDigitLazy.exec(str);
// result ->["1"]

/*
	Default quantifier matches 1 and more digits, 
	but does it match 1 digit, 2, or 5 digits? 
	Greedy: match as many as possible, 
	Lazy: match as few as possible. 

 */ 
