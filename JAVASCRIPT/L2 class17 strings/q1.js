// take a string as input and check the longest string in the sentence and pass that string

// console.log(checkthelongeststring("I love javascript and hate it at the same time."))

// let checkthelongeststring = (str) =>{
//     if (str.trim().lenght ===0){
//         return false;
//     }
//     let words = str.split("  ");
//     // console.log(words);

    
// }
// console.log(checkthelongeststring("I love javascript and hate it at the same time."))
// -------------------------------------------------------------------------------------------------------------------------------


/*
my name is gaurav

return longest string = gaurav

length - inbuilt method/ function

*/
function longestString(str){
    let ar=str.split(" ");
    var maxlen=0;
    for(let idx=0; idx<ar.length; idx++){
        if(ar[idx].length>maxlen){
            maxlen=ar[idx].length;
        }
    }
    return maxlen;
}
let rv=longestString("my name is gaurav javascript");
console.log(rv); // Maximum lenght word (how we find maximum lenght of word)

function longestString1(strr){
    let arr=strr.split(" ");
    var maxlenn=0;
    var ans=0;
    for(let idxx=0; idxx<arr.length; idxx++){
        if(arr[idxx].length>maxlenn){
            maxlenn=arr[idxx].length;
            ans=arr[idxx];
        }
    }
    return ans;
}
let rvv=longestString1("my name is gaurav javascript");
console.log(rvv); // this is how we print maximum lenght word (Output ======> javascript).