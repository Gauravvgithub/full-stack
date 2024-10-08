
// case 1
console.log(this);

/*

case 1 - global  -  this keyword - window object

case 2 - object - es5 function - this - parent object

case 3 - object -es6 function - this - {}

case 4 - object - es5 parent - es5 child - this keyword - window object

case 5- object - es5 parent - es6 child - this keyword - parent object

case 6 - object - es6 parent - es5 child - this keyword -  window object

case 7 - object - es6 parent - es6 child - this keyword - window object

*/
/*
// case 2
let objp={
    name:"gaurav",
    age:21,
    address:"south delhi",
    education:"ba",

    details: function (){
        console.log(this);

        return "hello world!!"
        
    }
}
console.log(objp.details); // function defination
console.log(objp.details()); // output parent object */

/*

// case 3

let objA={
    name:"gaurav",
    age:"21",
    address:"south delhi",
    details:()=>{
        console.log(this);
        
    }
}
console.log(objA.details());

*/
/*
// case 4

let objB={
    name:"gaurav",
    age:"21",
    address:"south delhi",
    detailsp:function parent(){
        console.log("i am a parent function");

        function child(){
            console.log(this);
            
        }
        child();
    }
}
console.log("-------------");

console.log(objB.detailsp());
*/

/*

// case 5 

let objC={
    name:"gaurav",
    age:"21",
    address:"south delhi",
    detailsp:function parent(){
        console.log("i am a parent function");

        const child=()=>{
            console.log(this);
            
        }
        child();
    }
}
console.log("-------------");

console.log(objC.detailsp());

*/


/*
// case 6

let  objG={
    name:"gaurav",
    age:21,
    address:"south delhi",
    detailsP: ()=>{
        function child() {
            console.log(this);
                        
        }
        child();
    }
}


console.log("----------");

console.log(objG.detailsP());
*/

/*
// case 7 

let objB={
    name:"gaurav",
    age:"21",
    address:"south delhi",
    detailsp:()=>{
        const child=()=>{
            console.log(this);
            
        }
        child();
    }

}
console.log("-------------");

console.log(objB.detailsp());
*/

// let obj={
//     name: "gaurav",
//     age:21,
//     address: "south delhi",
//     education: "ba",
//     salary:"10000"
// }
// console.log(this.name);//undefined
// console.log(obj.name);

// function saymydetails(obj){
//     console.log(this.name);
    
// }
// saymydetails(obj) // undefined

// console.log("----------")


// const details=(obj)=>{
//     console.log(this.name);
    
// }
// details(obj) // undefined   