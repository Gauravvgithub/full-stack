

// let promise1 = new Promise((resolve,reject)=>{
    // resolve("i got chips");
    // reject("no chips available");
//     resolve("i got gifts 1");
//     resolve("i got gifts 2");
//     resolve("i got gifts 3");
//     resolve("i got gifts 4");
//     resolve("i got gifts 5");
// })
// console.log(promise1);

// promise1.then(function(itemRecevied){
//     console.log(itemRecevied);
    
// })

// promise1.catch(function(itemUnavailable){
//     console.log(itemUnavailable);
    
// })

// promise1.then(function (gifts1){
//     console.log(gifts1);
    
// })
// promise1.then(function (gifts2){
//     console.log(gifts2);
    
// })
// promise1.then(function (gifts1){
//     console.log(gifts1);
    
// })
// promise1.then(function (gifts1){
//     console.log(gifts1);
    
// })
// promise1.then(function (gifts1){
//     console.log(gifts1);
    
// })
// promise1.then(function (gifts1){
//     console.log(gifts1);
    
// })

//* Chaining In ----> then and catch
 
let promise2 = new Promise((res,rej)=>{
    // res("i am learning full stack development")
    rej("i am learning JavaScript")
})
console.log(promise2);
promise2.then(function(answer){
    console.log(answer);
    
}).catch(function(answer2){
    console.log(answer2);
    
})

/*

* Promises also have issuses

* 1. Promise Hell ------> and //! resolve with or by (Async await)


*/
