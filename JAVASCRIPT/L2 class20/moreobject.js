/*





*/


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


