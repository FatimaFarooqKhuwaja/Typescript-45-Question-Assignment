function acceptitem(...array:string[]){
    console.log("Here is the summary of sandwich that has being ordered");
    if(array.length === 0){
        console.log("You have noy ordered any thing.")
    }
    
    else{
        console.log("You have order " +array.join(", ") + " sandwich")
    }
}
    acceptitem("pizza","red", "black");
    acceptitem("spicy","garlic", "green")
    acceptitem("recol","cheez", "mayo")