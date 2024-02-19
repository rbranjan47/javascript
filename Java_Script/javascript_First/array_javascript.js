//array is an order list of values. Each value is called as element specified.

let arr = [10, 20, 30, 'rabi', true];
console.log(arr[2]); //20
console.log(arr[7]); //undefined, In case of Java Out of Index
console.log(typeof arr[3]);
console.log(arr.length);
console.log(arr[arr.length - 2]);

//some other methods
arr.push('ranjan'); //it will add but it will only at the end of the array
console.log(arr);

let first = arr[0];
console.log(first);
console.log(typeof first); //number

let last = arr[arr.length - 1];
console.log(last);
console.log(typeof last); //string

//loop
arr.forEach(function (item, index, array) {
  console.log(item, index);
});

let array = [10, 40, 30, 'rabi', false];
array.forEach(function (item, index, array) {
  console.log(item, index);
  console.log(index);
  console.log(array);
});

//adding new item
arr.push('kumar');
console.log(arr);
console.log(arr.length);

//deleting
arr.pop();
console.log(arr);
console.log(arr.length);

//added to the front
arr.unshift(56.78);
console.log(arr);
console.log(arr.length);
console.log(typeof arr[0]); //number

//deleted to the front
arr.shift();
console.log(arr);
console.log(arr.length);

arr.splice(2, 3); //arr.splice(position, number_of_RemoveItems)
console.log(arr);
console.log(arr.length);

//sort
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

const temperature = [3, -2, -6, 5, 23, 12, 'error', -65, 22, 26, 38, 14, 9.5];

//Breaking into sub-problems
//ignore the errors
//max value in temp array
//min value in temp array
//subtract min from max(amplitude) and return it

//Creating a function of calcTemperature
const calcTemperature = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;

    if (currentTemp < min) min = currentTemp;
  }
  console.log(`maximum temperature ${max}`);
  console.log(`minimum temperature ${min}`);
  return max - min;
};

const amplitude = calcTemperature(temperature);
console.log(amplitude);

//function should receive 2 arrays of list
//i.e we have merge 2 arrays
const another_temperature = [
  13,
  -12,
  -66,
  15,
  3,
  2,
  'error',
  -5,
  2,
  6,
  8,
  4,
  19.5,
];

const new_array = temperature.concat(another_temperature);
const new_amplitude = calcTemperature(new_array);
console.log(new_amplitude);
