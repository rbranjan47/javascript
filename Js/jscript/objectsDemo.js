/*
All Javascripts values are Objects, i.e.
Booleans can be Object (if defined with new Keywords)
Numbers can be Object (if defined with new Keywords)
Strngs can be Object (if defined with new Keywords)
Maths always a Object
Dates always a Object
Regular expressions always a Object
Function always a Object
Objects always a Object
Arrays always a Object

except primitives Values i.e.:
          string
          Number
          boolean
          null
          undefined
          symbol
          bigint
*/

//Array, order MUST matter when we retrive/get
const personArray = [
  'John Tan',
  'Resman',
  'Software Developer',
  'c#',
  ['corbin', 'damitra', 'scott'],
  25,
];

//Objects, order doesn't matter when we retrive/get
const personObjects = {
  title: 'Mr',
  firstname: 'John Tan',
  project: 'Resman',
  Profile: 'Software Developer',
  language: 'c#',
  leads: ['corbin', 'damitra', 'scott'],
  Age: 25,
};

//printing array
console.log(personArray);
//printing objects
console.log(personObjects);

console.log(personObjects.firstname);
//OR, in square bracket we can put any expression
console.log(personObjects['firstname']);

const nameKey = 'name';
console.log(personObjects['first' + nameKey]);

/*-----------------Objects Methods-----------------*/
/* this keyword refers 
   Object method > Object
   function > global object
   function(but strict mode) > undefined
   Event > element received the event
    */

const years = {
  firstYear: 1990,
  secondYear: 1991,
  thirdYear: 1992,
  foutrthYear: 1994,
  fifthYear: 1995,
  birthChild: ['Rohit', 'Kohli', 'Pujara', 'Bumrah'],

  // calculateAge: function (birthYears) {
  //   return 2023 - birthYears;
  // },
  calculateAge: function () {
    console.log(this);
    return 2023 - this.firstYear;
  },

  calculateAgeNext: function () {
    this.age = 2024 - this.firstYear;
    return this.age;
  },

  summaryIntro: function () {
    return `${
      this.birthChild[3]
    } is ${this.calculateAge()} year old, and next year he 
          will be ${this.calculateAgeNext()} year old. `;
  },
};

console.log(years.calculateAge());

console.log(years.summaryIntro());

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than${
      john.fullName
    }'s (${john.calcBMI()})!`
  );
} else if (john.bmi > john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than${
      mark.fullName
    }'s (${mark.calcBMI()})!`
  );
}
