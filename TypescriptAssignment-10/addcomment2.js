//written by Fatima Farooq
//Friday-23-February-2024
//This is about the Name Cases.Writing 
var personNames = "Fatima";
console.log("Upper Case: ".concat(personNames.toUpperCase()));
console.log("Lower Case: ".concat(personNames.toLocaleLowerCase()));
console.log("Title Case: ".concat(personNames.replace(/\bw/g, function (c) { return c.toUpperCase(); })));
