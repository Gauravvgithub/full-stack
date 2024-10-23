

// 2. Map and Filter

// Map creates a new array by transforming each elemnet , while Filter creates a new array with elements that pass a test.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
console.log("Doubled: ", doubled);
console.log("Evens: ", evens);

