// Method Overloading------------ but not supporting in javascript.

/*

Method overloading - Function/method is same but parameters are different is known as Method Overloading.

*/

class Area{
    constructor(){

    }
    area(l,b){
        return l*b;
    }

    area (l,b,h){
        return l*b*h;
    }
}
let obj1=new Area();
console.log(obj1.area(2,3)); // OutPut --> NaN (Not a Number).
console.log(obj1.area(2,3,3));

