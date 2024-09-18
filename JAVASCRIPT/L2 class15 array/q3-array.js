/*
Question - 1. Find Pair of 5 ({2+3}=5) like this? 
arr=[1,2,3,4,5,6,7,8,9,10]
target = 5

pair {2,3},{1,4},{2,3},{3,2},{5,0}
*/

let arr=[1,2,3,4,5,6,7,8,9,10];
let target=11;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            console.log(arr[i],arr[j]); 
        }
    }
}