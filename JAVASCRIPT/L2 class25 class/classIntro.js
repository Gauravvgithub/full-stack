
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
