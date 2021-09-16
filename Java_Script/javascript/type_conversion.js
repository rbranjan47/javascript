
//type Conversion
const inputYear = '1991';
console.log(typeof(inputYear));

console.log(inputYear+18);  //return string addition
console.log(typeof(inputYear+18));   //string

//type conversion
const converted_inputYear = Number(inputYear+18)
console.log(converted_inputYear);

//can't convert string to number
console.log(Number('rabi'));

console.log(String(23), 23);  //string , number

//type coercion, JAVASCRIPT provide it
console.log('I am '+ 23 +' year old');  //string +number + string = string
console.log('I am '+ String(23) +' year old');

console.log('50'-'25'-5);

//
let n = '1' +1;
n = n-1;
console.log(n);