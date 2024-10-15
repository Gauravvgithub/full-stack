

class Human{
    constructor(name,age,occupation,salary){
        this.name=name;
        this.age=age;
        this.occupation=occupation;
        this.salary=salary;
    }
}
let human1=new Human("gaurav",21,function () {
    return "i am a student"
},1000);
console.log(human1);


// for(const keys in human1){
//     console.log(keys);
// }// for traverse of Human Keys


// console.log(human1.salary);


class Animal extends Human{

    constructor(name,age,occupation,salary){
        super();
        this.name=name;
        this.age=age;
        this.occupation=occupation;
        this.salary=salary;
    }

}

let animal1 = new Animal("dog",10,function(){
    return "safe guarding"
},1000);

console.log(animal1);
