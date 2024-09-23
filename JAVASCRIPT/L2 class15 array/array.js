// push array
let myarr=[1,2,3,4,5];
myarr.push(11);
console.log("push array",myarr);

// pop array

let myarr1=[11,12,13,14,15];
myarr1.pop();
console.log("pop",myarr1);

// shift array

let myarr2=[21,22,23,24,25];
myarr2.shift();
console.log("shift",myarr2);

// unshift array

let myarr3=[31,32,33,34,35];
myarr3.unshift(0);
console.log("unshift",myarr3);

// index of array

let myarr4=[41,42,43,44,45];
console.log("indexOf array -",myarr4.indexOf(42));

// includes array

let myarr5=[51,52,53,54,55];
console.log("includes array -",myarr5.includes(55));
console.log("includes array -",myarr5.includes(56));

// Join array - object converted to string

let myarr6=[61,62,63,64,65];
let var1=myarr6.join();
console.log("join array -",typeof(var1));

// new array keyword

let myarr7= new Array(71,72,73,74,75);
console.log("new Array - ",myarr7);

// slice

let myarr8=[81,82,83,84,85];
console.log("This is a Slice Array Method -",myarr8.slice(1,4));
console.log(myarr8);


// splice

let myarr9=[91,92,93,94,95];
console.log("This is a Splice Array Method -",myarr9.splice(2,4));
console.log(myarr9);


console.log("--------------------");

