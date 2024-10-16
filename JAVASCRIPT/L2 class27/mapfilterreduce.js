/*
inbuilt method of array - or a prototype.

1. map. - this function needs callbacks functions to run or a perform.

2. filter.

3. reduce.

terms - callbacks.


*/
// ----------------------------------------------------------
// let arr=[10,20,30,"gaurav",{a:100,b:200},10000];

// // map method.

// // map method use for traverse on array.

// let rv=arr.map(function(element,index,array){ // function known as callback function.
//     console.log(element);
    
// })
// console.log(rv);

// let rv1=arr.map((element,index,array)=>{
//     console.log(element);
//     console.log(index);
//     console.log(array);
// })

//-----------------------------------------------------------

// filter method.

// return is important in filter method.

// this is also a callback function.

// let arr2=[1,2,3,4,5,6,7,8,9,10];
// let rv3=arr.filter((data)=>{
// // console.log(data);
//     return data<5;
// });
// console.log(rv3);

// let age=[21,41,18,52,4];
// let rv4=age.filter((ages)=>{
//     return ages%2==0;
// });
// console.log(rv4);

//-------------------------------------------------------------

// reduce method.

let arr3=[10,20,30,40,50,60];

let rv5=arr3.reduce((currentvalue,currentindex)=>{
    return currentvalue+currentindex;
})
console.log(rv5);
