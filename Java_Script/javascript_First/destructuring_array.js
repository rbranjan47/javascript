'use strict';

//dhanbad
const cityName = {
  name: 'dhanbad',
  state: 'jharkhand',
  country: 'india',
  subCities: ['bhuli', 'gomoh', 'govindpur', 'jharia'],
  jobs: ['private', 'government', 'semi-government'],

  visit: function (firstCityIndex, lastCityIndex) {
    return [this.subCities[firstCityIndex], this.subCities[lastCityIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[0];
const c = arr[0];

//through de-structuring the array
const [x, y, z] = arr;
console.log(x, y, z);

const [x1, y1, x2] = arr;
console.log(x1, y1, x2); //destructuring normally following the order of the arrays

const [fir, , , fourth] = cityName.subCities;
console.log(fir, fourth);

let [first, second] = cityName.subCities;
console.log(first, second);

//Swapping the element, but must use Let keyword, otherwise reference error with const
[first, second] = [second, first];
console.log(first, second);

//call visit city function
const firstVisit = cityName.visit(2, 0);
console.log(firstVisit);

//getting nested array's values
const Nested = [2, 4, 5, [2, 5, 3, 7], 6];
const [main, , , [secondary, ,]] = Nested;
console.log(main, secondary);
