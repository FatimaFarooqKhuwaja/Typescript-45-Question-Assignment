let userName:string[] = ["admin", "Jhon", "Mickey", "Jerry", "Venn"];
for(let user of userName){
    if(user == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user}, thankyou for logging in again.`)
    }
}

