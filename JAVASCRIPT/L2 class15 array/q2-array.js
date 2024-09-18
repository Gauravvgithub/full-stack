/*
Question - 1. Find Target from Array?
arr[10,20,30,40,50,60,70,80,90,100]
target =30

*/

let arr=[10,20,30,40,50,60,70,80,90,100]
let target=30;
function searchtarget(arr,target){
    for(let maal of arr){
        if(maal==target){
            return true
        }
    }
    return -1;
}
let rv=searchtarget(arr,target)
console.log(rv);