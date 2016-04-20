/*
	capturing group is used when you need to 
	access the matched string in the group. 
	
Parentheses group the regex between them. 
They capture the text matched by the regex 
inside them into a numbered group that can 
be reused with a numbered backreference. 
 */

var capturingGroupRegex = /(abc){3}/;


/*
	non-capturing group is used when you don't
	need the matched content.
Non-capturing parentheses group the regex 
so you can apply regex operators, but do 
not capture anything.
 */
var nonCapturingGroupRegex = /(:?abc){3}/;


