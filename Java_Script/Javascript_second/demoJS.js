var n = 2;
function square(n) {
  return n * n;
}
//calling the functions
console.log(square(n));
console.log(square(2));

var square2 = square(n);
var square3 = square(3);
console.log(square2);
console.log(square3);

// console.log(1);
// setTimeout(function () {
//   console.log(2), 5000;
// });
// setTimeout(function () {
//   console.log(3), 0;
// });
// console.log(4);

//hoisting
x = 10;
x = 'alphabets';
console.log(x);
console.log(typeof x);
var x;
