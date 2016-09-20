var numLivesForCat = 9;
// const has the same scoping behavior as let.
///////////////////////////////////////////////
var numLivesForCat2 = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//# sourceMappingURL=const_object_const.js.map