// Question-4. 9,3,5,2,7,1,4,6,8,10.  make it in acensending order in array javascript?
// Answer
let arr=[9,3,5,2,7,1,4,6,8,10];
for(i=0;i<arr.length;i++){
    for(j=i;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp;
        }
    }
}
console.log("sorted array is",arr);

