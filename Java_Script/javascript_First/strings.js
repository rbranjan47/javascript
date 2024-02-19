'use strict';
const airline = 'Air India';
const plane = 'A325';

console.log(plane[5]); //undefined

//also through
console.log('Indigo'[3]); //i

//Methods
//1. Getting index of
console.log(airline.indexOf('i'));

//for last index of
console.log(airline.lastIndexOf('i'));

//also of entire word
console.log(airline.indexOf('India'));

//SLICE METHOD: slice(start, end)
console.log(airline.slice(4));

//return length 3 to 5, as it is not returning last index
console.log(airline.slice(3, 6));

console.log(airline.slice(airline.indexOf(' ') + 1));

console.log(airline.slice(-4));

const checkMiddleSeat = function (seat) {
  //ABCDEF, i.e. B & E are middle seats
  const s = seat.slice(-1);
  if (
    s.toLowerCase() == 'b'.toLocaleLowerCase() ||
    s.toLocaleLowerCase() == 'e'.toLocaleLowerCase()
  ) {
    console.log('middle seat');
  } else {
    console.log('side seat');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('12A');
checkMiddleSeat('17E');

//fix capitalization passenger name
const firstPassenger = 'raBi';
const PassengerLower = firstPassenger.toLocaleLowerCase();
console.log(PassengerLower);

//Only first letter
console.log(PassengerLower[0].toLocaleUpperCase() + PassengerLower.slice(1));

//comparing emails
const email = 'rbranjan47@gmail.com';
const loginEmail = '  rbranjan47@gmail.com';
console.log(email.toLocaleLowerCase() == loginEmail.toLocaleLowerCase().trim());

//replacing
const price = '288, 97$';
const priceUS = price.replace('$', '₹').replace(',', '.').replace(' ', '');
console.log(priceUS);

/* 
 const explain =
  'this is india and india is great! with india greatest prime minister!';
console.log(explain.replaceAll('india', 'bharat'));
*/

//Using REGULAR EXPRESSION
const explain =
  'this is india and india is great! with india greatest prime minister!';
console.log(explain.replace(/india/, 'bharat')); //replace method is case sensitive

//Booleans
const planes = 'A32ZX0';
console.log(planes.includes('3')); //true
console.log(planes.startsWith('a'.toLocaleUpperCase())); //true
console.log(planes.endsWith('0'));

//
//Split Methods, split into array
console.log('a+very+nice'.split('+'));
console.log('geeks@for@geeks'.split('@'));

//de-structuring
const [firstName, secondName] = 'rabi ranjan'.split(' ');

//Adding more string into destructing strings
const newName = ['kumar', firstName, secondName.toUpperCase()].join('  ');
console.log(newName);

//Capitalization, 1st method
const capitalName = function (name) {
  const nameSplit = name.split(' ');
  console.log(nameSplit);
  const nameUpper = [];

  for (const n of nameSplit) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(' '));
};

capitalName('rabi ranjan kumar');
capitalName('rabindra prasad');

const secondCapital = function (name) {
  const secondNameSplit = name.toUpperCase().split(' ');
  const secondNameUpper = [];

  for (const n of secondNameSplit) {
    secondNameUpper.push(n[0] + n.slice(1).toLowerCase());
  }
  console.log(secondNameUpper.join(' '));
};

secondCapital('india is great!');
secondCapital('mera bharat mahan!💗');
secondCapital('rocKerrrs');

//padding
const creditCard = function (number) {
  /*const numberSplit = number.split(' ');
  const numberJoin = numberSplit.join(''); //without giving space
  console.log(numberJoin);

  //hide the 8 digit in between
 const numberHide = numberJoin.replace(
    numberJoin.slice(4, 11),
    numberJoin.padEnd(8, '#')
  ); 

  const numberArr = [];
  for (const n of numberJoin) {
    if (n > 4 && n < 12) {
      console.log(numberArr.push(numberJoin.padStart(8, '*')));
    } else {
      console.log(numberArr.push(n));
    }
  }
  console.log(numberArr); */
  const str = number + ''; //convert into string
  const first = str.slice(0, 4); //0, 1, 2, 3
  const last = str.slice(-4); // starts from end -1, -2, -3, -4

  return first + last.padStart(str.length, '*');
};

console.log(creditCard('1234432198764567'));
console.log(creditCard('3782782183022781'));

//
//Coding challenge
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
//
//SELF CREATED WITH BASIC RULES
const result = function (name) {
  const newName = name.split('_');
  const first_word = newName[0];

  const second_word = newName[1];

  const secondCapital = function (name) {
    const secondWordSplit = name.toUpperCase().split(' ');
    const secondWordUpper = [];

    for (const n of secondWordSplit) {
      secondWordUpper.push(n[0] + n.slice(1).toLowerCase());
    }
    return secondWordUpper.join(' ');
  };

  const finalWord = first_word.concat(secondCapital(second_word));
  console.log(finalWord);
};

result('underscore_case');
result('first_name');
result('Some_Variable');
result('calculate_AGE');
result('delayed_departure');

//SIR Solution
const textFunction = function (text) {
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
};

textFunction('underscore_case');
textFunction('first_name');
textFunction('Some_Variable');
textFunction('calculate_AGE');
textFunction('delayed_departure');

//
//
//Strings MORE Methods
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao93766109;12:05 +_Depature;fao93766109;lis2323639855;12:30';

//🔴 Delayed Departure from FAQ to TXL(11h25)

console.log(flights.split('+'));
//In one line
for (const flight of flights.split('+')) {
  const destructuringFlights = flight.split(';');

  console.log(
    destructuringFlights[0].split('_').join(' ') +
      ' ' +
      'from' +
      ' ' +
      destructuringFlights[1].toUpperCase().slice(0, 3) +
      ' ' +
      'to' +
      ' ' +
      destructuringFlights[2].toUpperCase().slice(0, 3) +
      '(' +
      destructuringFlights[3].slice(0, 2) +
      'h' +
      destructuringFlights[3].slice(-3) +
      ')'
  );
}

//Udemy answer
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const outputTime = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace(
    /_/g,
    ' '
  )} from ${from.toUpperCase().slice(0, 3)} to ${to
    .toUpperCase()
    .slice(0, 3)} (${time.replace(':', 'h')})`.padStart(50);

  console.log(outputTime);
}
