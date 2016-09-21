function create<T>(c: {new(): T; }): T {
    return new c();
}

// above code will translate to the following:

function create(c) {
    return new c();
}
// TODO: what is new()