// Grade Calculation: Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.

//ans 1 - 

let marks=99;
if(marks>90){
    console.log("Grade A");
    
}else if(marks>80 && marks<90){
    console.log("Grade B");
    
}else if(marks>70 && marks<80){
    console.log("Grade C");
    
}else if(marks>60 && marks<70){
    console.log("Grade D");
    
}else if(marks>50 && marks<60){
    console.log("Grade E");
    
}else{
    console.log("Fail");
    
}

// 2 Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

// ans 2

function oddnumber()
{
    for(let i=0; i<51; i++)
    {
        if(i%2!==0) console.log(i);
    }
}
oddnumber();

// 3 Array Methods: What will the following code output?
/* javascript
Copy code in
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); */

// ans 3 

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // output => [ 2, 4, 6, 8, 10 ]

// 4 String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".

// ans 4

function findsubstring(st, findable)
{
    let findlen = findable.length;
    for(let i =0;i <st.length-findlen;i++ )
    {
        if(st.slice(i,i+findlen)==findable)
        {
            return true;
        }
    }
    return false;
}
console.log(findsubstring("Hello", "lf"));

// 5 Objects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.

// ans 5 

let object = {1: "name",2:"position",3:"type"};
object.age = "25";
console.log(object.age);
console.log(object);

// 6 Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?

// ans 6 

function sum(a, b)
{
    return a+b;
}
console.log(sum(5,10));

// 7 this Keyword: Explain how the this keyword behaves in a method of an object. Provide an example using an object that has a method.

// ans 7 

function Employees(name,age,salary,dept){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.dept=dept;
}
let empp1=new Employees("gaurav",21,10000,"student");
console.log(empp1);
let empp2=new Employees("abcd",21,10000,"student");
console.log(empp2);
let empp3=new Employees("xyz",21,10000,"student");
console.log(empp3);

// 8 Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.

// ans 8 

function car(name, color, company)
{
    this.name = name;
    this.color = color;
    this.company = company;
}
let details = new car("R8", "WHITE", "AUDI");
console.log(details);

// 9 Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).

// ans 9 

function fibonaci(a,b,c)
{
    if(b>c)
    {
       return 0;
    }
    console.log(a+b);
    let temp = a;
    a = b;
    b = a+temp;
    return fibonaci(a,b,c);
}
console.log(0);
console.log(1);
fibonaci(0, 1, 50);

// 10 given an array, the task is to cyclically rotate the array clockwise by one time.
/*Examples:
Input: arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
Input: arr[] = {2, 3, 4, 5, 1}
Output: {1, 2, 3, 4, 5}*/

// ans 10

function rotate(arr)
{
    let a = arr[arr.length-1];
    arr.pop();
    arr.unshift(a);
    return arr;
}
console.log(rotate([1,2,3,4,5]));

function rotateArray(arr) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
}

let arr = [2, 3, 4, 5, 1];
console.log("Original array:", arr);
console.log("Rotated array:", rotateArray(arr));

// 11 For a given two-dimensional integer array/list ‘ARR’ of size (N x M), print the ‘ARR’ in a sine wave order, i.e., print the first column top to bottom, next column bottom to top, and so on.
/*For eg:-
The sine wave for the matrix:-
1 2
3 4
will be [1, 3, 4, 2].*/

// ans 11 (not attempt)

// 12 Write a JavaScript function that takes a string as input and converts all the lowercase letters to uppercase without using any inbuilt string methods such as toUpperCase() or toLowerCase(). You can assume the input will contain only alphabetical characters.
/*Example:
Input: "hello"
Output: "HELLO"
Hint:
You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:
Lowercase letters ('a' to 'z') range from 97 to 122. */

// ans 12 

function convertToUppercase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Check if the character is a lowercase letter (ASCII value between 97 and 122)
        if (charCode >= 97 && charCode <= 122) {
            // Convert the lowercase letter to uppercase by subtracting 32 from its ASCII value
            result += String.fromCharCode(charCode - 32);
        } else {
            // If the character is already uppercase, add it to the result as is
            result += str[i];
        }
    }
    return result;
}

// Example usage:
let input = "hello";
console.log("Input:", input);
console.log("Output:", convertToUppercase(input));
