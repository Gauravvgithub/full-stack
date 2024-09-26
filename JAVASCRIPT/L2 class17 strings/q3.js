/*

q1. my name is gaurav

a. gaurav is name my

b. varuag si eman ym


*/





// a. vikas is name my

function reverse(str){
    let arrr=str.split(" ");

    let st=0;
    let end=arrr.length-1;

    while(st<end){
        let temp=arrr[st];
        arrr[st]=arrr[end];
        arrr[end]=temp;
    
        st++;
        end--;
    }
    console.log(arrr);
    
}
reverse("my name is gaurav");




/*b. sakiv si eman ym

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const name = "my name is vikas";
const reversedName = reverseString(name);
console.log(reversedName); // Output: "sakiv si eman ym"
*/