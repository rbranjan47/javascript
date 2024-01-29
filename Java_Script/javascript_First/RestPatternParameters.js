//Rest Parameter
//Improved way to handle function parameter, allowing us to handle in more easily way

//Rest parameter, is using just like spread operator
//where, Spread is used to UNPACK an array but Rest is used to PACK an array
'use strict';
//REST, because of RIGHT side of =
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr);

//REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Objects
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

  totalPayment: function (going, ...returning) {
    console.log(going, returning);
  },
};

//
const [bhuli, , gomoh, ...otherCity] = [
  ...cityName.subCities,
  ...cityName.jobs,
];
console.log(bhuli, gomoh, otherCity);

//Objects
//i.e. remaining elements is collected into new object
const { wed, ...weekdays } = cityName.openingHours;
console.log(weekdays);

//functions
const add = function (...numbers) {
  //console.log(numbers);  //till now it will array of multiple number
  let sum = 0;
  for (let i in numbers) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6, 7, 8, 9);
add(2, 3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

//even we can pass array
const x = [2, 3, 4, 5, 6, 7, 8, 9];
add(...x);

//function totalPayment
cityName.totalPayment('bokaro', 'dhanbad', 'jharia', 'jhajha', 'koderma');
//here bokaro stores in variable and rest in ... into an ARRAY
