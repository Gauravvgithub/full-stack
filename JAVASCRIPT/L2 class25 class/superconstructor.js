// SUPER CONSTRUCTOR

class Car{

    constructor(brand,model,price,color,features){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.color=color;
        this.features=features;
    }
}

class Bike extends Car{
    constructor(brand,model,price,color,features){
        super();
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.color=color;
        this.features=features;
    }
}

let Bike1=new Bike("honda","civic",1000000,"jet black",function(){
    console.log("comes with 5 star safety ratings");
    
});

console.log(Bike1);