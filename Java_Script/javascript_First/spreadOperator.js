'use strict';
const arr = [2, 3, 4, 5];
const NewArr = [1, 2, arr[0], arr[3], arr[2]];
console.log(NewArr);

//spread Operator, allows an Iterable to expand in places where 0+ arguments are expected
const NotSpreadNewArray = [1, 2, arr];
console.log(NotSpreadNewArray);

//work for Expand, Copy, Concat
const spreadNewArray = [1, 2, ...arr];
console.log(spreadNewArray);

//if we log normally
console.log(...NewArr);
console.log(...spreadNewArray);

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

  suggestionCities: function (city1, city2, city3) {
    console.log(`here is you suggested cities ${city1},${city2}, and ${city3}`);
  },
};

const newCity = [...cityName.subCities];
console.log(newCity);
//as normal elements
console.log(...cityName.subCities);

//adding elements in array
const addNewCity = [...cityName.subCities, 'katras'];
console.log(addNewCity);

console.log(...addNewCity);

//Copy array~~ Shallow Copy & Deep Copy
//shallow copy
const newCityCopy = [...cityName.subCities];

//Join 2 arrays or more
const allArray = [
  ...cityName.subCities,
  ...newCity,
  ...addNewCity,
  ...newCityCopy,
];
console.log(allArray);
//printing elements
console.log(...allArray);

//Iterables: arrays, strings, sets, maps But NOT OBJECTS
const str = 'Rabi';
const letters = [...str];
console.log(str);
console.log(letters);
console.log(...str);

//String literals not accept multiple values separated by comma
//console.log(`${...str} ranjan`);

//Created own function to defines multiple values with using spread operator
//Created inside the Object
const citiesName = [
  prompt("Let's enter your first suggestive first city name:"),
  prompt("Let's enter your first suggestive second city name:"),
  prompt("Let's enter your first suggestive last city name:"),
]; //storing values in the array's form
console.log(citiesName);
//cityName.suggestionCities(citiesName[0], citiesName[1], citiesName[2]);

//using spread operators
cityName.suggestionCities(...citiesName); //we just passes the shallow copy of the citiesName

//Objects
//JUST LIKE ARRAY WE CAN ALSO MAKE SHALLOW COPY OF OBJECTS
const newCityName = { ownerName: 'rabi', ...cityName, ownerPlace: 'dhanbad' };
console.log(newCityName);

//AND, ALSO KEY VALUES NOT CHANGING UNTIL MAKING IT DEEP COPY
newCityName.name = 'Bokaro';
console.log(newCityName.name);
console.log(cityName.name);
