// str.substring(indexStart[, indexEnd])
var anyString = 'abc';
anyString.substring(0, anyString.length);

// include first index, but not include the endIndex, that's way you can use str.length 
// in the 2nd param. 

// - If indexStart equals indexEnd, substring() returns an empty string.
// - If indexEnd is omitted, substring() extracts characters to the end of the string.
// - If either argument is less than 0 or is NaN, it is treated as if it were 0.
// - If either argument is greater than stringName.length, 
//   it is treated as if it were stringName.length.



// if indexStart is greater than indexEnd, then the effect of substring() 
// is as if the two arguments were swapped; for example,
//  str.substring(1, 0) == str.substring(0, 1).