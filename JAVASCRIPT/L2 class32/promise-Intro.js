

let promise1 = new Promise((resolve,reject)=>{
    resolve("i got chips");
    // resolve("i got chips2");

    reject("no chips available");
})
console.log(promise1);
// promise1.then((function(item){
//     console.log(item);
    
// }))
// promise1.then((function(item2){
//     console.log(item2);
    
// }))

// promise1.catch(function(itemRejected){
//     console.log(itemRejected);
    
// })

promise1.then(function(itemResolve){
    console.log(itemResolve);
    
}).catch(function(itemRejected){
    console.log(itemRejected);
    
})

