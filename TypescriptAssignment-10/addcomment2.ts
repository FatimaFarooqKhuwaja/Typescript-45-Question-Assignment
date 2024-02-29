//written by Fatima Farooq
//Friday-23-February-2024
//This is about the Name Cases.Writing 
let personNames:string = "Fatima";
console.log(`Upper Case: ${personNames.toUpperCase()}`);
console.log(`Lower Case: ${personNames.toLocaleLowerCase()}`);
console.log(`Title Case: ${personNames.replace(/\bw/g,c => c.toUpperCase())}`);