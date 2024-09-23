

let name ="Gaurav";
let age=21;
let salary=10000;
let ismarried=false;
let marks=50;

// Object Syntex
/*

{
key: value
}

*/

let gauravdetials={
    name:"gaurav",
    age:21,
    salary:10000,
    ismarried:false,
    marks:50
}

//access

console.log(gauravdetials.ismarried);
console.log(gauravdetials.marks);

console.log(gauravdetials["name"]);

// Traverse - Loop (for in)

for(let key in gauravdetials){
    console.log(key);
    
}

for(let key in gauravdetials){
    console.log(gauravdetials[key]);
    
}

gauravdetials.education="full stack development"; // to add new key and value
console.log(gauravdetials);
