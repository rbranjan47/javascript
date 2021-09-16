'use strict';
console.log(this); //return window, calling global Object

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //here this keyword is undefined, as also not user strict mode
};
calAge(1991);

//for arrow function
const calAge_arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //it will call the this of surrounding function that is parent function
};
calAge_arrow(1991);

//inside Object
const year = {
  year_current: 2021,
  calAge: function () {
    console.log(this); // Here, it will call parent function i.e. year Object
  },
};
console.log(year.calAge());

//for arrow Object
const new_year = {
  newYear: 2021,
  calAge_new: () => {
    console.log(this);
  },
};
console.log(new_year.calAge_new);

const matilda = {
  year: 2017,
};

//method borrowing
matilda.calAge = year.calAge;
matilda.calAge();
