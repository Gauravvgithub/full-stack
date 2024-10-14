

class Human{
    hands;
    legs;
    occupation;
    salary;
    task;

    constructor(hands,legs,occupation,salary,task){ // First run class Constructor
        console.log("first run mee ever");
        this.hands=hands;
        this.legs=legs;
        this.occupation=occupation;
        this.salary=salary;
        this.task=task; //property can make anything
    }
}

let human1=new Human(2,2,"student",10000,function(){console.log("i am a student");
});
console.log(human1);


let human2= new Human(2,2,"student(1.0)",1000,function(){});
console.log(human2);


console.log(human1==human2);


class Animal {
    hands;
    legs;
    color;
    gender;
    constructor(hands,legs,color,gender) {
        this.hands=hands;
        this.legs=legs;
        this.color=color;
        this.gender=gender;
    }
}

let animal1 = new Animal(2,2,"grey","male");
console.log(animal1);
