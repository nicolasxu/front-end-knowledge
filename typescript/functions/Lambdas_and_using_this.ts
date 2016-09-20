// arrow syntax (() => {}) will automatically capture the this available 
// when the function is created rather than when it is invoked



let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // Notice: the line below is now a lambda, allowing us to capture 'this' earlier
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker(); // problem is not using arrrow expression
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

