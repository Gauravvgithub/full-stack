// ES 5 ALL FUNCTIONS

// function statement
function saymyname() {
    console.log("Nitro");
}
saymyname();

function saymynaam(){
    console.log("train");
}
saymynaam();
// function expression
function saymyage(name,age){
    console.log(name,age);
    
}
saymyage("gaurav",21);
saymyage("golu",22);
saymyage("hansu",23);
saymyage("rahul",18);
saymyage("rohit",31);
saymyage("aarav",21);

function saymyyear(name,age){
    console.log(name,age);
}
saymyyear("raj",52)

//anomynous function

let mynational=function(nationality,language){
    console.log(nationality,language);
}
mynational("indian","hindi");
mynational("american","english");
mynational("sri lankan","tamil & telgu");
mynational("african","english");

let myyear=function(flag,year){
    console.log(flag,year);
}
myyear("india","1947");

// function with parameters

function sumAllnum(num1,num2){
    console.log(num1+num2);
}
sumAllnum(12,50);


function sayhello(name,age){
    console.log("my name is",name+" "+"my age is"+age);
    
}

function sumAllnum(num3,num4){
    console.log(num3+num4);
}
sumAllnum(10,10)

function saynamaste(brother,sister){
    console.log("namaste",brother+""+"namaste"+sister);
}




// function return
function gussemyage(){
    console.log("21");
    return "Gaurav Age";
    console.log("This is a Gaurav's Age!!");
    
    
}
let rv=gussemyage();
console.log(rv);

// ES 6 ALL FUNCTIONS

// fat arrow function

let d=()=>{
    console.log("i am fat arrow function");
    
}
d();

// multi parameters

const f=(naame,age,salary,address)=>{
    console.log(naame,age,salary,address);
}
f("gaurav",21,10000,"delhi");

// multiple return values






