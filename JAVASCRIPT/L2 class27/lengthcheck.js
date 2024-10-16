// Using filter method finds a lengths of names? // check the lenght?

let arr=["gaurav","hansu","raj","veera","shivaya"];
let ans=arr.filter((names)=>{
    return names.length>5; // length greater than 5.
})
console.log(ans);

let brands=["acer","hp","dell","lenovo","apple","surface","Samsung","Asus"];
let filtered=brands.filter((names)=>{
    return names.length<5; // lenght shorter than 5.
});
console.log(filtered);



