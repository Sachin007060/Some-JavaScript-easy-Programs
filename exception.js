console.log("hello");
try{
    // console.log(a);
    console.log("..........");

    // custom exception created by the programmer... using throw keyword..
    throw "error throw by throw keyword"
    console.log("No exception occur");
}catch(err){
    console.log("Exception occur");
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("inside finally block always executes");
}
console.log("bye");

let user = prompt("are you a robot if not enter your  name: ");
console.log(user);
try{
    if(user == "yes"){
        throw "alter 😠😡😠 you cannot login"
    }else{
        console.log("Welcome "+user);
    }
}catch(error){
    console.log(error);
}