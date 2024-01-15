//TYPE CONVERSION

let thisYear = '2023';

console.log(thisYear + ' is a type of ' + typeof thisYear);

let typeConverted_thisYear = Number(thisYear);
console.log(
  Number(thisYear) +
    ' is converted into type of ' +
    typeof typeConverted_thisYear
);

//we can converted a alphabetical string to a number, results NaN
const thisMonthName = 'November';
console.log(Number(thisMonthName)); //NaN > Not a number
console.log(typeof Number(thisMonthName)); //Number type

//TYPE COERCION or IMPLICIT COERCION
// > similar to type conversion, but it is performed by js engine

console.log('1' + 2);

console.log('Today is ' + 26 + 'th November ' + 2023);

console.log('30' - '10' - 5);
