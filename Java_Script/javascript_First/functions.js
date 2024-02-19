'use strict';
//Default function

const bookings = [];

const createBooking = function (
  number,
  passenger = 1,
  price = 200 * passenger
) {
  //
  //Assigning default value, to not to get Falsy value, (---ES5---)
  // number = number || 1;
  // passenger = passenger || 10;
  // price = price || 199;

  const booking = {
    number,
    passenger,
    price,
  };

  console.log(booking);
  bookings.push(createBooking);
};

console.log(bookings);
createBooking(1);
createBooking(1, undefined, 5); //Set undefined If we don't want to pass the value
createBooking(1, 2, 3);

//Creating communication function
//phone have default value 1
const communication = function (name, phone = 1, price = 20 * phone) {
  const communicationBooking = {
    name,
    phone,
    price,
  };
  console.log(communicationBooking);
};
communication('a', undefined);

/*
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5)); 
/*


-----------CALL BY VALUE, CALL BY REFERENCE---------------  
*/
//When we pass the primitive types as arguments in function-----> Copy the the Original value
//When we pass the Object as arguments in functions-----> Copy the reference variables
const flight = 'LH234';
const rabi = {
  name: 'rabi ranjan',
  passport: 132424152345,
};

const checkIn = function (flightNum, passenger) {
  //let suppose flight name and passenger name were changed
  flightNum = 'LH89';
  passenger.name = 'Mr.' + passenger.name;

  //condition with passport
  passenger.passport === 132424152345
    ? console.log('checked In')
    : console.log('wrong passport!');

  if (passenger.passport === 132424152345) {
    console.log('checked In');
  } else {
    console.log('wrong passport!');
  }
};

checkIn(flight, rabi);
console.log(flight);
console.log(rabi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(rabi); //It update the passport variable value through reference
checkIn(flight, rabi);
console.log(rabi); //Also changes reflected in rabi Object

/*


-----------HIGHER ORDER FUNCTION---------------  
*/
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase(); //replace all space present globally
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  //Joining
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by function: ${fn.name}`);
};

transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

//
//
//even or odd
const evenNum = function (num) {
  return num % 2 == 0;
};

const checkNum = function (number, fn) {
  console.log(`even number: ${fn(number)}`);
};

checkNum(2, evenNum);
checkNum(3, evenNum);

//
//
//Through this we achieve ABSTRACTION
const greet = function (greeting = 'hello') {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//
//
//
//even or odd
const greetHey = greet('hey'); //greetHey us greet function
greetHey('rabi');

//WE CAN ALSO CALL IN ONE FORM
greet('Hey!')('rabi');

const countEven = function (number) {
  return function () {
    const condition = number % 2 == 0 ? true : false;
    if (condition == true) {
      console.log(`given number ${number} is even`);
    } else {
      console.log(`given number ${number} is odd`);
    }
  };
};

const resultCountEven = countEven(44.785);
resultCountEven();

//WE CAN ALSO CALL IN ONE FORM
countEven(45)();

//through function
const seasons = (seasonNameFirst, seasonNameSecond) => {
  return resultSeason => {
    const seasonArray = [seasonNameFirst, seasonNameSecond];
    if (seasonArray.includes(resultSeason)) {
      console.log(`correct ${resultSeason}`);
    } else {
      console.log(`wrong, correct are: ${seasonArray[0]}, ${seasonArray[1]}`);
    }
  };
};

seasons('spring', 'winter')('summer');
seasons('spring', 'winter')('winter');

//
//Shortcut, In arrow function
const newSeasons = (seasonNameFirst, seasonNameSecond) => resultSeason => {
  const seasonArray = [seasonNameFirst, seasonNameSecond];
  if (seasonArray.includes(resultSeason)) {
    console.log(`correct ${resultSeason}`);
  } else {
    console.log(`wrong, correct are: ${seasonArray[0]}, ${seasonArray[1]}`);
  }
};

seasons('spring', 'winter')('summer');
seasons('spring', 'winter')('winter');

/*


-----------CALL & APPLY METHODS---------------  
*/

const Vistara = {
  airline: 'vistara',
  iataCode: 'vs',
  bookings: [],
  //function, using direct object literal
  book(flightNum, name) {
    console.log(
      `${name}, booked a seat on ${
        this.airline
      } flight  of code ${this.iataCode.toUpperCase()}${flightNum}`
    );

    //pushing into bookings array
    this.bookings.push({
      flight: ` ${this.iataCode.toUpperCase()}${flightNum}`,
      name,
    });
  },
};

Vistara.book(239, 'rabi');
Vistara.book(400, 'ranjan');

const indigo = {
  airline: 'indigo',
  iataCode: 'IN',
  bookings: [],
};

//If we want to use the Vistara book function, then create a new function
const book = Vistara.book;

/*  as, book is a new regular function
~~Here we will get undefined as this keyword is not working with REGULAR function~~ 
*/

//---------------------CALL METHODS--------------------------

// book(234, 'rabi');
book.call(Vistara, 234, 'rabi ranjan');
console.log(Vistara);

book.call(indigo, 234, 'rabi patel');
console.log(indigo);

//more airline using same book function
const spiceJet = {
  airline: 'spice jet', //properties name should be same, if we are using common function
  iataCode: 'SJ',
  bookings: [],
};

book.call(spiceJet, 463, 'patel kumar');

//---------------------APPLY METHODS--------------------------

const flightData = [675, 'kumar rabi'];
book.apply(spiceJet, flightData);
console.log(spiceJet);

// we can't use apply methods much more, as we use SPLIT methods
book.call(spiceJet, ...flightData);

/*
---------------------BIND METHODS--------------------------
*/
const bookED = book.bind(spiceJet);
const bookES = book.bind(indigo);

bookED(123, 'ranjan kumar');
bookES(453, 'kumar');

//If we pass only 1 parameter, i.e. partial function
const book23 = book.bind(indigo, 23); //Created new function and preset 23 in flightNum
book23('ranjan');
book23('rabi');

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//Created new function same as addTax
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(200));

//function returning function
const addTaxFunction = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxFunction(0.23)(100));

//another form of bind function
const addVat = addTaxFunction(0.25);
console.log(addVat(100));
console.log(addVat(200));

/* -----Coding challenge----- 

Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
 This data is stored in the starter object below.

Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favorite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: Javascript', '1: python', '3: Java'],
  //answers: new Array[4].fill(0),

  //method for answer
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question} \n ${this.options} \n (write your answer)`)
    );
    console.log(answer);

    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    displayResults();
    displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (ty === 'string') {
      console.log(this.answers.join(', '));
    }
  },
};

poll.registerNewAnswer();
