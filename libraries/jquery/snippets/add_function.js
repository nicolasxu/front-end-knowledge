var docu = "https://api.jquery.com/add/";

var $result = $('li').add('p'); // create new jquery object, 
// it does not alter li or p element
// Note 1: 
// the $('li').add('p') function will create new jquery object. 
// and it does not alter the collection at all. 

// Note 2: 
// It create a union of constructs a new jQuery object 
// from the union of those elements and the ones passed into the method