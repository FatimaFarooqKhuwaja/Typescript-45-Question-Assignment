"use strict";
let magicians = ["faraz", "siraj", "kabeer", "hassan"];
function show_magicians(magician_name) {
    console.log(magician_name);
}
show_magicians(magicians);
function make_great(magname) {
    console.log("The great " + magicians[0]);
    console.log("The great " + magicians[1]);
    console.log("The great " + magicians[2]);
    console.log("The great " + magicians[3]);
}
make_great(magicians);
