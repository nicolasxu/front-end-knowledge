/*
	look ahead
 */

// 1. positive lookahead
var pla = /q(?=u)/;

// 2. negative lookahead
var nla = /q(?!u)/;


/*
	look behind
 */

// 3. positive lookbehind
var plb = /(?<=a)b/;

// 4. negative lookbehind
var nlb = /(?<!a)b/;


