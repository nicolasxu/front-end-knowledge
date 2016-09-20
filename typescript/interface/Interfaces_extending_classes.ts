//  When an interface type extends a class type it inherits the members of the class but not their implementations.


// Interfaces inherit even the private and protected members of a base class.


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

class Image extends Control {
}

class Location {
    select() { }
}