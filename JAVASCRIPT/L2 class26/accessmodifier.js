
// ------------------------Access Modifier--------------------------

// Public Access Modifier

class A{
    constructor(name,age,salary){
        this.naam=name;
        this.umar=age;
        this.tanukhwa=salary;
    }

}
// let a1 = new A("gaurav",21,10000);
// console.log(a1);

class B extends A {
    constructor(name,age,salary) {
        super(name,age,salary);
    }
}
let b1=new B ("raj",21,20000);
console.log(b1);


// Types of Access Modifier :-
// 1. Public. 
// 2. Private. # (using by #).
// 3. Protected. Not Use In JS.

// In javaScrpit - Protected is not used in JavaScrpit.


//--------------------------------------------------------------------

// Private Access modifier

class C{
    name;
    age;
    #salary;
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.#salary=salary;
    }

    getter(){
        return this.#salary; // for outside the class -->> return
    }
}

let c1=new C("gaurav",21,10000);
console.log(c1);

class D extends C{
   
    constructor(name,age,salary){
        super(name,age,salary);
    }
    
}
let d1 = new D("byte",30,10000);
console.log(d1);


