
// function statement
function saymyname() {
    console.log("Nitro");
}
saymyname();

// function expression
function saymyage(name,age){
    console.log(name,age);
    
}
saymyage("gaurav",21);
saymyage("goluu",22);
saymyage("hansu",23);
saymyage("rahul",18);
saymyage("rohit",31);
saymyage("aarav",21);

//anomynous function

let mynational=function(nationality,language){
    console.log(nationality,language);
}
mynational("indian","hindi");
mynational("american","english");
mynational("sri lankan","tamil & telgu");
mynational("african","english");

// function with parameters

function sumAllnum(num1,num2){
    console.log(num1+num2);
}
sumAllnum(12,50);


function sayhello(name,age){
    console.log("my name is",name+" "+"my age is"+age);
    
}




// function return
function gussemyage(){
    console.log("21");
    return "Gaurav Age";
    console.log("This is a Gaurav's Age!!",);
    
    
}
let rv=gussemyage();
console.log(rv);






