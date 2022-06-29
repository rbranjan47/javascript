'use strict';
//let suppose we have array
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  //through ES6 we can also write mon from array
  [weekDays[0]]: { open: 12, close: 22 },
  [weekDays[1]]: { open: 11, close: 20 },
  [weekDays[2]]: { open: 12, close: 23 },
  [weekDays[3]]: { open: 10, close: 16 },
};

//cityName object
const cityName = {
  name: 'dhanbad',
  state: 'jharkhand',
  country: 'india',
  subCities: ['bhuli', 'Gomoh', 'govindpur', 'jharia'],
  jobs: ['private', 'government', 'semi-government'],

  //using enhanced ES6, Object literal
  openingHours,

  //ES6 function declaration

  //visit: function (firstCityIndex, lastCityIndex) {
  visit(firstCityIndex, lastCityIndex) {
    return [this.subCities[firstCityIndex], this.subCities[lastCityIndex]];
  },

  orderTicket: function ({
    new_cityIndex = 1,
    new_jobIndex = 0,
    time,
    address,
  }) {
    console.log(
      `order of : ${time}, on ${address} in city ${this.subCities[new_cityIndex]} and doing job ${this.jobs[new_jobIndex]}`
    );
  },

  suggestionCities: function (city1, city2, city3) {
    console.log(`here is you suggested cities ${city1},${city2}, and ${city3}`);
  },

  totalPayment: function (going, ...returning) {
    console.log(going, returning);
  },
};

console.log(cityName.openingHours.mon.open);

//Optional Chaining after Object Literal
console.log(cityName.openingHours.mon?.open);
//? -----> check if last property exists then it will define

//Also, we have multiple optional chaining
console.log(cityName.openingHours?.mon?.open);

//Example

const Days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const days of Days) {
  console.log(days);
  const openDays = cityName.openingHours[days]?.open ?? 'closed'; //closed to prevent undefined value
  //?? -----> using nullish coalescing solution
  //As closed also return for falsy value, so handled it by NUll COALESCING solution

  console.log(openDays);
}

//optional chaining is also on method
console.log(cityName.visits?.(11, 1) ?? 'methods not exists');

//also on array
const day_week = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
console.log(day_week?.[10] ?? 'not exists');
