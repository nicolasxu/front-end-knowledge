
// TODO: read explanation
// http://stackoverflow.com/questions/39622778/what-is-new-in-typescript/39623422#39623422
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (a: {new(): A; prototype: {keeper: K}} ): K {

    return a.prototype.keeper;
}

findKeeper(Lion).nametag;  // typechecks!