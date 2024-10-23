/*Question -1. 

const transactions = [
  { type: "income", value: 1000 },
  { type: "expense", value: 200 },
  { type: "income", value: 1200 },
  { type: "expense", value: 500 }
];
// Expected output: 2200

*/

// Answer 1 - 
let transactions = [
    { type: "income", value: 1000 },
    { type: "expense", value: 200 },
    { type: "income", value: 1200 },
    { type: "expense", value: 500 }
];

let totalofincome = transactions.filter((amounts) => {
    return amounts.type == "income"
}).reduce((accumulator, amounts) => {
    return accumulator + amounts.value;
}, 0);
console.log("totalofincome =>",totalofincome);

//--------------------

/*

Question -2.

Write a function that takes an array of orders, where each order has an id, quantity, and pricePerItem, and calculates the total cost of all orders?

const orders = [
  { id: 1, quantity: 2, pricePerItem: 500 },
  { id: 2, quantity: 1, pricePerItem: 1500 },
  { id: 3, quantity: 4, pricePerItem: 300 }
];
// Expected output: 3700


*/

// Answer 2 - 
let orders = [
  { id: 1, quantity: 2, pricePerItem: 500 },
  { id: 2, quantity: 1, pricePerItem: 1500 },
  { id: 3, quantity: 4, pricePerItem: 300 }
];

let totalCost = orders.reduce((accumulator, order) => {
  return accumulator + (order.quantity * order.pricePerItem);
}, 0);

console.log(totalCost);


//--------------------
/*

Question - 3.

Given an array of objects representing products, each with a name and price, write a function that returns an array of product names, but only for products that cost more than ₹500.

const products = [
  { name: "Laptop",         price: 75000 },
  { name: "Mobile",         price: 15000 },
  { name: "Book",           price: 500 },
  { name: "Headphones",     price: 2000 }
];

*/

// Answer 3 -
let products = [
    { name: "Laptop", price: 75000 },
    { name: "Mobile", price: 15000 },
    { name: "Book", price: 500 },
    { name: "Headphones", price: 2000 }
  ];
  
  let nameOfProduct=products.filter((data)=>{  
      return data.price>500 
  })
//   console.log(nameOfProduct);
  
  .map((data)=>{
    return data.name;
})
console.log(nameOfProduct);

//--------------------------------------------------------------------------------------------------------------------------------------------------------