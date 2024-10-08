/*

// this is what in a company had!!

objects
class- functions
admin
operations
aux staff


*/

let emp1={
    name:"gaurav",
    age:"21",
    address:"south delhi",
    salary: "1",
    dept:"student"
}

let emp2={
    name:"abcd",
    age:"25",
    address:"east delhi",
    salary: "10",
    dept:"operations"
}
let emp3={
    name:"xyz",
    age:"22",
    address:"new delhi",
    salary: "100",
    dept:"staff"
}

// cs - do not repeat yourself (dry)

//shortcut - values - new new object 

// constructor - new thing - new - object

// function cons , class cons 

// function cons - es5

//class cons - es6

// syntax 

// function 
/*
function Employees(name,age,salary,dept){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.dept=dept;
}
let empp1=new Employees("gaurav",21,10000,"student");
console.log(empp1);
let empp2=new Employees("abcd",21,10000,"student");
console.log(empp2);
let empp3=new Employees("xyz",21,10000,"student");
console.log(empp3);
*/

function Example(naam,umar,tankhuwa,deptt){
 this.naam=naam;
 this.umar=umar;
 this.tankhuwa=tankhuwa;
 this.deptt=deptt;

}
let ex1= new Example("gaurav",21,10000,"chattra")
let ex2= new Example("abcdd",21,10000,"chattra")

console.log(ex1==ex2);


// function Client(name,age,salary,department,task){

//     this.name=name;
//     this.age=age;
//     this.salary=salary;
//     this.department=department;
//     this.task=task;

// }
// let client1=new Client("Gaurav",21,10000,"Student",function(){
//     console.log("my name is gaurav");
// });
// console.log(client1.task());

function Users(name,age,salary,department,obj1){
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.department=department;
    this.obj1=obj1
}
let user1=new Users("gaurav",21,10000,"student",function obj1(gender,job,car,house){
    this.gender=gender;
    this.job=job;
    this.car=car;
    this.house=house
});
// console.log(user1);

// obj1.console.log("male","temp","alto","1bhk");

user1.obj1("male","temp","alto","1bhk");
console.log(user1);


