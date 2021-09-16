'use strict';

function calAge(birthYear) {
  const name = 'Name';
  console.log('first' + name);
  const age = 2037 - birthYear;

  function printAge() {
    const age_output = `you are ${age}, born in ${birthYear}`;
    console.log(age_output);
  }

  printAge();
  return age;
}
const firstName = 'rabi';
console.log(calAge(1991));
//this printAge is not accessible outside that calAge function, as it is local scope
try {
  printAge();
} catch (error) {
  console.log('local variable');
}
