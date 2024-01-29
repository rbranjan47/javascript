console.log("hello World!");


let age  = 30;
age = 31;

console.log(age);

const birthYear = 1997;
//birthYear = 2000;          Uncaught error, as const keywords cannot be re-assigned
console.log(birthYear);    


var job = 'software test engineer in development';
console.log(job);

job = 'SDET';
console.log(job);


/*
let- BLOCK scope, can be updated but cannot be re-declared
const- BLOCK scope, cannot be updated or re-decalred into scope
var- GLOBALLY scoped or FUNCTION scoped, and can be re-assigned
*/