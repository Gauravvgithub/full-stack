

/*

Method - Function - class/object --> method.

Overloading --> Signature same -- but parameters are different.

JavaScript Not Support OverLoading.
*/


class X {
    size(width,height){
        return width+height
    }
    size(width,height,length){
        return width+height+length
    }
}
let obj1=new X();
console.log(obj1.size(10,20));
console.log(obj1.size(10,20,30));



//------------------------------------------------------------

// method overriding with properties


class Y{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    area(){
        return "my class is Y"
    }
}
let obj2=new Y("gaurav",21);
console.log(obj2);

class Z extends Y{
    constructor(name,age){
        super();
        this.name="gaurav";
        this.age=21;
    }
    area(){
        return "my class is Z"
    }
}
let obj3= new Z("ram",21);
console.log(obj3.area("my class is super"));