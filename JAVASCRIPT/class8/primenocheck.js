// function checkprimenumber (){
// let num=2;
// let nof=0;
// for(let div=2;div*div<=num;div++){
//     if(num%div==0){
//         nof=nof+1;
//         break;
//     }
// }
// if(nof==0){
//     console.log("prime");
// }else{
//     console.log("not prime");
// }
// }
// checkprimenumber();

const isPrime = num => {
    if (num < 2) return "not prime";
    for (let div = 2; div * div <= num; div++) {
        if (num % div === 0) return "not prime";
    }
    return "prime";
}
console.log(isPrime(97));



