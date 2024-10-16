// // arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// //finds even numbers and sum them with filter method and reduce method

let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let evennumbers=arr.filter((numbers)=>{
    return numbers%2==0;
});
console.log(evennumbers,"this is even numbers");
let sumofevennumbers=evennumbers.reduce((acc,num)=>{
    return acc+num;
});
console.log(sumofevennumbers, " -  this is sum of even numbers");



