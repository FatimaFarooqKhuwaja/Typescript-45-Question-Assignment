"use strict";
let personName = "Fatima";
console.log("Lower Case:", personName.toLowerCase());
console.log("Upper Case:", personName.toUpperCase());
console.log("Title Case:", personName.replace(/\bw/g, c => c.toUpperCase()));
