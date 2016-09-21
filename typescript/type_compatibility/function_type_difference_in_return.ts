let x = () => ({name: "Alice"});
let y = () => ({name: "Alice", location: "Seattle"});

x = y; // OK
y = x; // Error because x() lacks a location property


// just like the structural subtyping


