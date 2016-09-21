enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// example 2:

enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

// example 3:

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A", it is called reverse lookup, from value to the string



// example 4: constant enum

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
