let magicians = ["faraz", "kabeer", "uzair", "siraj"]
function show_magicians(magname:string[]){
    console.log(magname)
}
show_magicians(magicians)
function make_great(magician_name:string[]){
    console.log(magicians[0]+ " The great magician")
    console.log(magicians[1]+ " The great magician")
    console.log(magicians[2]+ " The great magician")
    console.log(magicians[3]+ " The great magician")
}
make_great(magicians);

let new_array= ["The great faraz","The great kbeer", "The great siraj", "The great uzair"]
show_magicians(new_array)


