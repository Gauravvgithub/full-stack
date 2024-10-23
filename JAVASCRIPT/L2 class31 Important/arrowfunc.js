

// 1. Arrow Function

/*

What is Arrow Function?
An arrow function is essentially an anonymous function with a shorter syntax. They are often assigned to variables, making them reusable. Arrow functions are also known as lambda functions in some other programming languages.

*/

// Syntax

let arrowSyntax = () => {
    return "I'm Arrow Return"
}
console.log(arrowSyntax);
console.log(arrowSyntax());

console.log("----------------------------------------");


// 1. Arrow Function without Parameters.

let arrowWithoutParams = () => {
    console.log("I'm Arrow Fucntion Without Parameter");
    
}
arrowWithoutParams();

console.log("----------------------------------------");

// 2. Arrow Function with Single Parameters.

let arrowWithSingleParams = x => x*x;
console.log(arrowWithSingleParams(4),"arrowWithSingleParams"); // asign a value to X is 4, and Sqaure it.

console.log("----------------------------------------");


// 3. Arrow Function with Multiple Parameters.

let arrowWithMultipleParams = (a,b,c) => {
    console.log(a+b+c);
    
}
arrowWithMultipleParams(10,20,30, "arrowWithMultipleParams");

console.log("----------------------------------------");


// 4. Arrow Function with Default Parameters.


/*

e = 10

f = 20

g = 30

*/


let arrowWithDefaultParams = (e,f,g = 30) => {
    console.log(e + " " + f + " " + g );
    
}
arrowWithDefaultParams(10,20, "arrowWithDefaultParams");

console.log("----------------------------------------");

// 5. Return Object Literals.

let makePerson = (firstName, lastName) =>
    ({first: firstName, last: lastName});
    console.log(makePerson("Gaurav", "Raj"), "Return Object Literals.");


console.log("----------------------------------------");


// Advance Asycn Arrow Function.

const fetchData = async () => {
    const data = await fetch('https://api.example.com/data');
    return data.json();
};