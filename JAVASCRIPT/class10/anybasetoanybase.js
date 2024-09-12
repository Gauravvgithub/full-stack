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
function decimaltoanybase(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}
function anybasetoanybase(num1,base1,base2){
    let decimalnumber=anybasetodecimal(num1,base1);
    let finalcovertednumber=decimaltoanybase(decimalnumber,base2);
    
    console.log(finalcovertednumber);
    
}
anybasetoanybase(67,8,5);