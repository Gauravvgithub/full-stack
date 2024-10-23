


class A{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    area(){
        return "some area"
    }

}

// let a1=new A("gaurav",21);
// console.log(a1);


class B extends A{

    constructor(name,age){
        super();
        this.name="raj";
        this.age=52;

    }
    area(){
        return "some more area"
    }
}
let b1= new B ("hansu",18);
console.log(b1);
console.log(b1.area());
