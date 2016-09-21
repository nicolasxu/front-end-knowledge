let x = [0, 1, null];


// let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];


// example 1
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.buton);  //<- Error
};

// example 2
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.buton);  //<- Now, no error is given
};

// example 3
function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}