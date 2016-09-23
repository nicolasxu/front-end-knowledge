// TODO: how to fill in people linklist? 

// Just like interfaces, type aliases can also be generic 



type Container<T> = { value: T };


type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// a little bit complex example of type alias and generics

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

// let people: LinkedList<Person>;

var people: LinkedList<Person> = {name: "Alf", next: {name: "Tim", next: null}};


// var s = people.name;

// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;
