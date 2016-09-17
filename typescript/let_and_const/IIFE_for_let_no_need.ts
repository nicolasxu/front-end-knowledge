////////////////////////////////////////////////
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
    // you don't need to put setTimeout into a IIFE
}