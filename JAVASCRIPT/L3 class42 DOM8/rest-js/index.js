

function sum(...numbers){
    return numbers.reduce((a,b) => a + b, 0);
}
sum(1, 2, 5000);

console.log(sum())