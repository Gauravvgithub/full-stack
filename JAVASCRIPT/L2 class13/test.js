// 11 september 2024
// TEST 


/*
QUESTION - 1 -What are entry conrol loops and exit control loops?
ANSWERS - 1
 
first   - entry control loops are the loops thats checked conditions before entrying in the loop. example are - for loop and while loop.

FOR LOOP EX - 

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

WHILE LOOP EX - 
let i=0;
let result=1;
while(i<5){
i++;
if (i==3)
continue;
}
result=result+i;
console.log(result);


second  - exit control loops are the loops thats checked conditions after executes the loop body. example are - do-while loop.

*/

/*

QUESTION -2 -  Write the output of the following question:-

         for (let i = 1; i <= 3; i++) { 
         for (let j = 1; j <= 3; j++) { 
         if (i === j) continue; 
         console.log(i + j); } 
        }
ANSWER - 2
output = 
        3
        4
        3
        5
        4
        5
for (let i = 1; i <= 3; i++) { 
    for (let j = 1; j <= 3; j++) { 
    if (i === j) continue; 
    console.log(i + j); } 
}

/*
    explanation
ram =1
 i = 1
 i==3
 i++

 j=1
 j==3
 j++

 if i ==j continue 
 and print i+j

---------------------
dry run

i=1
j=1 ( condition is true) (so contine)

i=1
j=2
i==j(false) ( 1==2 false) console.log(i+j)=(1+2)=output=(3)

i=1
j=3
i==j(false) ( 1==3 false) console.log(i+j)=(1+3)=output=(4)

then return to (i) for loop 

i=2
j=1
i==j(false) ( 2==1 false) console.log(i+j)=(2+1)=output=(3)

i=2
j=2
i==j(true) ( 2==2 true)! skips the iteration!

i=2
j=3
i==j(false)(2==3 false) console.log(i+j)=(2+3)=output=(5)

then retrue to (i) for loop

i=3
j=1
i==j(false)(3==1 false) console.log(i+j)=(3+1)=output=(4)

i=3
j=2
i==j(false)(3==2 false) console.log(i+j)=(3+2)=output=(5)

i=3
j=3
i==j(condition true)! skips the iteration!
*/
//--------------------------------
/*
question -3 -  Write the output of the following question:-
        let found = false; 
        for (let i = 1; i <= 3; i++) { 
        for (let j = 1; j <= 3; j++) { 
        if (i * j > 4) { 
        found = true; break; 
   } 
       console.log(i, j); 
} 
      if (found) break; 
}
answer- output =

1 1
1 2
1 3
2 1
2 2

-----------

DRY RUN


i=1
for j=1
i*j is 1*1=1
i*j>4=false
console.log(i,j)= output=(1,1)

for j=2
i*j is 1*2=2
i*j>4=false
console.log(i,j)= output=(1,2)

for j=3
i*j is 1*3=3
i*j>4=false
console.log(i,j)= output=(1,3)

no brake continue to i=2
founds= false(still)

i=2

for j=1
i*j is 2*1=2
i*j>4=false
console.log(i,j)= output=(2,1)

for j=2
i*j is 2*2=4
i*j>4=false
console.log(i,j)= output=(2,2)

for j=3
i*j is 2*3=6
i*j>4=true
console.log(i,j)= output=(2,3)

found=true(apply break)
final output is     1 1
                    1 2
                    1 3
                    2 1
                    2 2
*/

//------------------------------------------

/* 

QUESTION - 4 -  Write the output of the following question:-
let pattern = ''; 
 for (let i = 1; i <= 5; i++) { 
for (let j = 1; j <= i; j++) {
 pattern += '*';
 } 
pattern += '\n';
 }
 console.log(pattern); 

ANSWER - 4
final output is 

*
**
***
****
*****
------------
dry run

pattern=string is empty ''
i=1
j=1 to 1
j=1= pattern="*"
pattern = '*' + '\n'=(newline)
console.log(*)

i=2
j=1 to 2
j=1= pattern="*"
j=2= pattern="**"
pattern = '*' + '\n'=(newline)
pattern = '**' + '\n'=(newline)
console.log(*
            **)

i=3
j=1 to 3
j=1= pattern="*"
j=2= pattern="**"
j=3= pattern="***"
pattern = '*' + '\n'=(newline)
pattern = '**' + '\n'=(newline)
pattern = '***' + '\n'=(newline)
console.log(*
            **
            ***)


i=4
j=1 to 4
j=1= pattern="*"
j=2= pattern="**"
j=3= pattern="***"
j=4= pattern="****"
pattern = '*' + '\n'=(newline)
pattern = '**' + '\n'=(newline)
pattern = '***' + '\n'=(newline)
pattern = '****' + '\n'=(newline)
console.log(*
            **
            ***
            ****)


i=5
j=1 to 5
j=1= pattern="*"
j=2= pattern="**"
j=3= pattern="***"
j=4= pattern="****"
pattern = '*' + '\n'=(newline)
pattern = '**' + '\n'=(newline)
pattern = '***' + '\n'=(newline)
pattern = '****' + '\n'=(newline)
console.log(*
            **
            ***
            ****
            *****)
*/
//-----------------------------------------

/*
QUESTION -5 -   ***** 
                 ****
                  *** 
                   ** 
                    * 
                    WRITE A CODE OF THIS PATTERN?
ANSWER-5
let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "*";
    let space  = ' ';
    console.log(space.repeat(n-i)+str.repeat(i));
}
FINAL OUTPUT = 
*****
 ****
  ***
   **
    *
------------------------
DRY RUN
n=5
i=n; i=5

str= string

i=5
space.repeat(n-i)
space.repeat(5-5)->'' 0space
+
asterisks: str.repeat(5)->"*****"
output="*****"

i=4
space.repeat(n-i)
space.repeat(5-4)->' ' 1space
+
asterisks: str.repeat(4)->"****"
output="****"

i=3
space.repeat(n-i)
space.repeat(5-3)->'  ' 2space
+
asterisks: str.repeat(3)->"***"
output="***"

i=2
space.repeat(n-i)
space.repeat(5-2)->'   ' 3space
+
asterisks: str.repeat(2)->"**"
output="**"

i=1
space.repeat(n-i)
space.repeat(5-2)->'    ' 4space
+
asterisks: str.repeat(1)->"*"
output="*"
-----------------
final output 
*****
 ****
  ***
   **
    *
-----------
*/

/*
QUESTION - 6 -  Write a js Program for finding Prime Numbers between 1-100?
ANSWERS-6
PRIME NUMBER 1 TO 100

let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
}
------
FINAL OUTPUT IS 
Output:

2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97


*/

/*
QUESTION - 7 - code for anybase to anybase number system conversion ?
ANSWER-7
67 BASE 8 TO BASE 5 = OUTPUT = 210

function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
    }
    return ans;
}
function decimaltoanybase(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}
function anybasetoanybase(num1,base1,base2){
    let decimalnumber=anybasetodecimal(num1,base1);
    let finalcovertednumber=decimaltoanybase(decimalnumber,base2);
    
    console.log(finalcovertednumber);
    
}
anybasetoanybase(67,8,5);
------
FINAL OUTPUT = 210
*/
/*

QUESTION - 8 - code for anybase addition ?
ANSWER - 8

function anybaseaddition(base,num1,num2){
    let ans=0;
    let carry=0;
    let power=1;
    while(num1>0 || num2>0 || carry>0){
        let num1lastdigit=num1%10;
        let num2lastdigit=num2%10;
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
        let digit=num1lastdigit+num2lastdigit+carry;
        carry=Math.floor(digit/base);
        digit=digit%base;
        ans+=digit*power;
        power=power*10;
    }
    return ans;
}
let rv=anybaseaddition(8,67,43);
console.log(rv);
---------
FINAL OUTPUT = 132

*/