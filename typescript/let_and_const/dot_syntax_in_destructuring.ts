


let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]



let [first2] = [1, 2, 3, 4];
console.log(first); // outputs 1


let [, second, , fourth] = [1, 2, 3, 4];
console.log('second:' + second + ' forth:' + fourth);

