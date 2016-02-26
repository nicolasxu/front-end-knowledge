var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');

// - If deleting, delete start at the index, e.g. 2
// - If adding, element will be added at the specified index,
//   what already there will shift right. 

myFish.splice(myFish.length, 0, 'added');
// will add at the end of array