/*
Operators: to perform operations. Like:
   > Arithematic
   > Assignment
   > Comparison
   > String
   > Logical
   > Bitwise
   > Ternary
*/

// > Arithematic
const a = 55;
const b = 45;
console.log(a + b);
console.log(a - b);

// > Assignment
var valueFirst = 'Hey, Good Morning';
var valueSecond;

valueSecond = valueFirst;
console.log(valueSecond);

//Arthematic
let x = 10;
x += 10;
console.log(x);
x++;
console.log(x);
x--;
x--;
console.log(x);

x -= 3;
console.log(x);

//Comparison
let sarahAge = 20;
let johnAge = 30;
console.log(sarahAge > johnAge); //false
console.log(sarahAge <= johnAge); //false

//js perform th operations from left to right, ORDER PRECEDENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log(sarahAge - 10 > johnAge - 11);

let p = (q = 30 - 20 - 5);
console.log(p, q);

//Ternary/Conditional Operator
const age = 15;
age >= 25
  ? console.log('Ready to Drive Bike 🚵')
  : console.log('Drive Bicycle 🚲');

const driveCheck = age >= 25 ? 'Ready to Drive Bike 🚵' : 'Drive Bicycle 🚲';

console.log(driveCheck);
