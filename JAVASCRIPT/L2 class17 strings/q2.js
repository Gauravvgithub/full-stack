/*QUestion. str="my name is gaurav is gaurav name gaurav"
a. vikas freq q1
b. vikas first time - index (not using inbuilt function) q2
*/

function freqcount(str,target){
    let ar = str.split(" ");
    let count = 0;
    for (let maal of ar){
        if(maal==target){
            count++;
        }
    }
    return count;
}
let ans=freqcount("my name is gaurav is gaurav name gaurav", "my")
console.log(ans); // this is finds a frequncy of words and print.

//----------------------------------------------------

function firstIndex(str,tar){
    let arr=str.split(" ");
    let ansidx=-1;

    for(let idx=0;idx<arr.length;idx++){
        if(arr[idx]==tar){
            ansidx=idx;
            break;
        }
    }
    return ansidx;
}
let ans2=firstIndex("my name is gaurav is gaurav name gaurav", "gaurav");
console.log(ans2); // this is hpw we finds word firsttime index.
