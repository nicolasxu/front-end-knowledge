// string literal type is a type


// String literal types allow you to specify the exact value a string must have. 
// for example:


type Easing = "ease-in" | "ease-out" | "ease-in-out"; // this is string literal



class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
    	// You can pass any of the three allowed strings, but any other string will give the error
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(3,3, "ease-in-out");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
