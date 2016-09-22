function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// function signature

// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}

// usage:
createElement("img");
createElement("input");
