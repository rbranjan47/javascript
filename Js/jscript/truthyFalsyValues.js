//When non-boolean value are used in boolean context with IF ELSE condition
//Then, it coerced into true or false

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(10)); //true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean('String')); //true
console.log(Boolean({})); //true
33