/*

fetch data by using promise and async await


*/

//* Q1. Fetch Data by using Promise?

let promise1 = new Promise((resolveData,rejectData)=>{
    
    async function catData(){
        let data = await fetch('https://catfact.ninja/fact')
        let actuldata = await data.json() 
        console.log(actuldata);
    }
    catData();
    
    resolveData("i fetch cat Data")
})
console.log(promise1);
promise1.then(function(catDataRecevied){
    console.log(catDataRecevied);
    
})

//* Q2. Fetch data by using Async Await?

async function catData(){
    let data = await fetch('https://catfact.ninja/fact')
    let actuldata = await data.json() 
    console.log(actuldata);
}
catData();





