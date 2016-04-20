var str = "abcabcabc";
var regex = /(abc)/;

var results = regex.exec(str);
/*
	If the match succeeds, the exec() method returns an array 
	and updates properties of the regular expression object.
 */

// 1. the match is at results[0]
// 2. results[1], results[2] ... are for capturing group
// 3. index in regex object is updated, so the next exec()
//    starts at the index.
// 4. return null if no match.

var myRe = /ab*/g;
var str = 'abbcdefabh';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}
/* output: 
Found abb. Next match starts at 3
Found ab. Next match starts at 9
*/

