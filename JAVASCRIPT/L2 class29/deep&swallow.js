
// Deep Copy - only value are passes not a address.

let num1=100;
let num2=num1;
console.log("num1 -",num1);
console.log("num2 -",num2);

num1=200;
console.log("num1 -",num1);
console.log("num2 -",num2);

console.log("This is known as a Deep Copy");

// Swallow Copy - address and value both passes.

let obj1={
    name:"gaurav",
    age:21
}
let obj2=obj1;

console.log("obj1 -",obj1);
console.log("obj2 -",obj2);

obj1.salary=1000;

console.log("obj1 -",obj1);
console.log("obj2 -",obj2);
console.log("This is known as a Swallow Copy");

