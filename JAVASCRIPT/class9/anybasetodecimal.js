function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
    }
    return ans;
}
let rv=anybasetodecimal(343,8)
console.log(rv);