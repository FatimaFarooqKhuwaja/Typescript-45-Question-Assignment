"use strict";
let personName = "Fatima";
console.log(`Upper Case: ${personName.toUpperCase()}`);
console.log(`Lower Case: ${personName.toLocaleLowerCase()}`);
console.log(`Title Case: ${personName.replace(/\bw/g, c => c.toUpperCase())}`);
