const firstName = 'rabi';
const job = 'software engineer';
const birthYear = 1997;
const currentYear = 2023;

const name1UsingConcat =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  " years old. I'm a " +
  job +
  '!';

console.log(name1UsingConcat);

//Concatenating string using BACKTICKS(`)
const name2UsingBackticks = `I'm  ${firstName} ${
  currentYear - birthYear
} a years old. I'm a ${job}!`;
console.log(name2UsingBackticks);

console.log(
  'Printing using "slash n":  \n\
  Hey! \n\
Good Morning  \n\
How you all?'
);

//Backticks allows to write using \n\
console.log(`Printing using backticks:
Hey!
Good Morning
How you all?`);
