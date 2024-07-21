//Arrays > Special Variables, store more than 1 values

'use strict';

const names = ['Corbin', 'Scott', 'John', 'Thomas', 'Damitra'];
console.log(names);

console.log(names[2]);
console.log(names[2]);

//length of array
console.log('Array length: ' + names.length);

//Replacing array values.But names declared with const, since Array values is not Primitive type

names[3] = 'David';
console.log(names);

//Adding more elements
names[names.length] = 'thomas';
console.log(names);

const values = [1995, 1996, 1997, 1998, 1999, 2000];
function calcAge1(years) {
  return 2023 - years;
}

console.log(calcAge1(values[0]));
console.log(calcAge1(values[1]));
console.log(calcAge1(values[2]));
console.log(calcAge1(values[3]));
console.log(calcAge1(values[4]));
console.log(calcAge1(values[5]));
console.log(calcAge1(values[6])); //NAN

/*----------- Operation on Array -----------*/
//PUSHING IN ELEMENT-----Adding elements to Array
names.push('Nick');
console.log(names);


values.push(2001);
console.log(values);

//POPPING OUT ELEMENT-----removing elements
names.pop(); //removes last element of array i.e . Nick
console.log(names);

names.shift(); //shift array to next from first element of array i.e. corbin
console.log(names);

//Index of elements
console.log('Index: ' + names.indexOf('thomas'));

//Includes elements or not
const includesNames1 = names.includes('Damitra');
console.log(includesNames1);

const includesNames2 = names.includes('Nick');
console.log(includesNames2);

//to string, whole array
const namesString = names.toString();
console.log(namesString);

//to string, array element
const namesStringEle = names[3].toString();
console.log(namesStringEle);

//sorting of array
const valuesSorting = values.sort();
console.log(`Ascending: ${valuesSorting}`);

const valueReverseSorting = values.sort().reverse();
console.log(`Descending: ${valueReverseSorting} `);

//Iterations

let calculatedAge = '';

function calcAge2(actualValue, value, array) {
  calculatedAge += actualValue + '<br>';
}
console.log(values.forEach(calcAge2));

