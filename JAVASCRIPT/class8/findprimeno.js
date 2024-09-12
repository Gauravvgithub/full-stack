// let count=0
// let i,j 
// for(j=2;j<=100;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++
  
// }

// if(count==2)

// console.log(j)
// count=0

// }
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    if (num % 2 == 0 || num % 3 == 0) return false; // Multiples of 2 or 3 are not prime

    // Check from 5 to sqrt(num)
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) return false;
    }

    return true;
}

// Find and display prime numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}