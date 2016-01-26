function new_operator () {
	var comment = "Never use new Number(), new String() or new Boolean()"
  
  var aboutNew = [new String("pancake") == new String("pancake"), 
    // false same for any class after new, since new return a object
     "pancake" == "pancake",            // true
     3 == 3,  													// true
     new Number(3) == new Number(3) ,  	// false
    ]

  function snippet() {
  	var b = new Boolean(false);
    b;        // Shows 'false' in console.
    !b;       // ALSO shows 'false' in console.
    !b == b;  // So this is true!
    !!b == !b // Negate both sides and it's false! FUCK!
    if (b) {
      // Better fucking believe this will get executed.
    }
  }
}