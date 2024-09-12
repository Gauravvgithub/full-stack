function anybaseaddition(base,num1,num2){
    let ans=0;
    let carry=0;
    let power=1;
    while(num1>0 || num2>0 || carry>0){
        let num1lastdigit=num1%10;
        let num2lastdigit=num2%10;
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
        let digit=num1lastdigit+num2lastdigit+carry;
        carry=Math.floor(digit/base);
        digit=digit%base;
        ans+=digit*power;
        power=power*10;
    }
    return ans;
}
let rv=anybaseaddition(8,67,43);
console.log(rv);
