function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("You ordered a ".concat(size, ", shirt that text says ").concat(text, "."));
}
makeShirt();
makeShirt("medium");
makeShirt();
makeShirt('small', "I need big size shirt to wear.");
