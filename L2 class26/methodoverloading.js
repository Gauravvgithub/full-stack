

/*

Method - Function - class/object --> method.

Overloading --> Signature same -- but parameters are different.

JavaScript Not Support OverLoading.
*/

class A {


    area(len,bred){
        return len*bred
    }
    area(len,bred,height){
        return len*bred*height
    }
}

// let obj1=new A(10,20);
let obj1=new A();
console.log(obj1.area(10,20)); //NaN
console.log(obj1.area(10,20,30)); // output 6000!!
