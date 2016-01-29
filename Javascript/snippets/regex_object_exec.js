var myRe = /^\s+|\s+$/g;
var str = '    hhhh     ';
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}

// If your regular expression uses the "g" flag, you can use the exec() 
// method multiple times to find successive matches in the same string. 

// if you only run it one time, then it only return the 1st match.



// Do not place the regular expression literal (or RegExp constructor) 
// within the while condition or it will create an infinite loop

// Using exec() with RegExp literals
var matches = /(hello \S+)/.exec('This is a hello world!'); 
// it will stop after first match!!!!
console.log(matches[1]);