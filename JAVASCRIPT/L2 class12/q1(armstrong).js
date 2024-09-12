// 153 armstrong number
// 153 
// 1 + 125 + 27 = 153

function nod(num){
    let count=0;
    while(num>0){
        num=Math.floor(num/10);
        count++;
    }
    return count;
}
let rv=nod();
console.log(rv);

function check(num){
    let temp=num;
    let n=nod(num);
    let sum=0;
    while(temp>0){
        let ld=temp%10;
        sum=sum+Math.pow(ld,n);
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        return true;
    }else{
        return false;
    }
}

let ans=check(153);
console.log(ans);
