// How to Traverse in Array Js?
/*
1- LOOP

2- WHILE

3- DO WHILE

4- FOREACH  - callback function

5- FOR OF  

*/

// 1- LOOP

let myarr1=[2,4,6,8,10,12,14,16,18,20];
for(let i=0;i<myarr1.length;i++){
    console.log(myarr1[i]);
}
console.log("THIS IS LOOP TRAVERSE");


console.log("--------------------");

// 2- WHILE

let myarr2=[3,6,9,12,15]
let i=0;
while(i<myarr2.length){
    console.log(myarr2[i]);
    i++;    
}
console.log("THIS IS WHILE TRAVERSE");


console.log("--------------------");

// 3- DO WHILE

let myarr3=[18,21,24,27,30]
let ii=0;
 do{
    console.log(myarr3[ii]);
    ii++;
    
}while(i<myarr3.length);
console.log([i],[ii]);

console.log("this is do while traverse");

console.log("--------------------");


// 4- FOREACH - callback function

let myarr4=[100,200,300,400,500]
myarr4.forEach(function(ABCD){
     console.log(ABCD);
})


// This is in ES6 Fat Array function foreach callback function!!

let myarr5=[600,700,800,900,1000]
myarr5.forEach((XYZ)=>{
    console.log(XYZ);
})

console.log("This is forEach Traverse");

console.log("--------------------");


// 5- FOR OF

let myarr6=[10,20,30,40,50,60];
    for(let EFGH of myarr6){
    console.log(EFGH);
}

console.log("This is forof Traverse");

console.log("--------------------");

// Question - 2. find max element and min element, find span = max-min ?
// Answer

let arr=[3,1,5,4,10,9,23,15];

let max=arr[0];
let min=arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
console.log("maximum number ->",max,",","minimum number ->",min);
console.log("Span ->",max-min);