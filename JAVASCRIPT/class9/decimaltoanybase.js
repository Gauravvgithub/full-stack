function decimaltoanybase(num,base){
    let ans=0;
    let pow=1; // 10 ki power zero
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}
let rv=decimaltoanybase(10,2);
console.log(rv);
