'use strict';

//dhanbad object
const cityName = {
  name: 'dhanbad',
  state: 'jharkhand',
  country: 'india',
  subCities: ['bhuli', 'Gomoh', 'govindpur', 'jharia'],
  jobs: ['private', 'government', 'semi-government'],
  openingHours: {
    mon: { open: 12, close: 22 },
    tue: { open: 11, close: 20 },
    wed: { open: 12, close: 23 },
    thur: { open: 10, close: 16 },
  },
  visit: function (firstCityIndex, lastCityIndex) {
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
};

cityName.orderTicket({
  time: '12:20 PM',
  address: ' bhuli',
  cityIndex: 0,
  jobIndex: 2,
});

//const { name, openingHours, country, subCities } = cityName;
//console.log(name, openingHours, country, subCities);

//WE CAN ALSO CHANGE THEIR KEY NAME,
//which is helpful while receiving API as objects and changing the name
const {
  name: newName,
  openingHours: newOpeningHours,
  country: newCountry,
} = cityName;
console.log(newName, newOpeningHours, newCountry);

//Creating new Object subCities, Steps:
//Create Empty Object
//Assign Object key with new name and also provide default size empty, to not to get Undefined
const { NewSubCities = [], subCities: againNewSubCities = [] } = cityName;

console.log(NewSubCities, againNewSubCities); //In this case NewSubCities will be empty
console.log(typeof NewSubCities);

//Swap Mutating Variables with objects
let a = 10;
let b = 20;

const obj = { a: 23, b: 7, c: 14 };
//Variables with objects
({ a, b } = obj);
console.log(a, b);
console.log(obj);

//Object to variable,
//To change the Objects key's value from variable value, Create new Object and assign there

//access nested Object
const { tue } = newOpeningHours;
console.log(tue);

//to access each time, without as object
const {
  wed: { open, close },
} = newOpeningHours;
console.log(open, close);

//assign nested objects key with new name
const {
  thur: { open: o, close: c },
} = newOpeningHours;
console.log(o, c);
