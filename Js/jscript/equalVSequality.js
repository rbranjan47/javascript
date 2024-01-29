//single equal(=) > Use to assignment
let a = 25;
let b;
let c = 20;
console.log((b = a));
console.log(c);
console.log((c = a));

//double equal > loose equality, perform type conversion(coercion) while comparing
let p = '18';
if (p == 18) {
  console.log('same'); // string converted into number
}

if (p === 18) {
  console.log('same');
} else {
  console.log('not same');
}

//triple equal > strict equality, does not perform type conversion(coercion)
let x = 10;
let y = 11;
let z = 10;

console.log(x === y); //false
console.log(y === z); //false
console.log(z === x); //true

const enteredValueinPrompts = prompt('hey, how are you?');
console.log(enteredValueinPrompts);
console.log(typeof enteredValueinPrompts);

if (p !== 18) {
  console.log('not equalsss');
}
