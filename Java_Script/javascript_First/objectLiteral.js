/*ES6 new feature: in Object literal
1. Use One object elements inside another by declaring Object name only

2. keyName: function(para1, para2) ------can also write as------> keyName(para1, para2)

3. We can use Declared Array element inside Object.
*/
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

//es6 made 3 ways to write Object literal
console.log(cityName);
