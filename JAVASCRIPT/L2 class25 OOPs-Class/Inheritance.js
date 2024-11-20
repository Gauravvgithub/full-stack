
//----------------------------------------------------INHERITANCE-----------------------------------------------------------

class Human{

    constructor(hands,legs,behaviour,task){
        this.hands=hands;
        this.legs=legs;
        this.behaviour=behaviour;
        this.task=task;
    }
}

let human1=new Human(2,2,"good",function(){
    console.log("i am a human");
});

// class Animal{

//     constructor(hands,legs,behaviour,task){
//         this.hands=hands;
//         this.legs=legs;
//         this.behaviour=behaviour;
//         this.task=task;
//     }
// }

class Animal extends Human{

}

let animal1=new Animal(2,2,"loyal",function(){
    console.log("i am an animal");
});

console.log(animal1);

//--------TYPES OF INHERITANCE-------------


// 1.   Single Inheritance.
// 2.   Multiple Inheritance.
// 3.   Multilevel Inheritance.
// 4.   Hierarchical Inheritance.
// 5.   Hybrid Inheritance.

