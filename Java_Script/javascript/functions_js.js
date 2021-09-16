//function, a piece of code which are re-usable
//Function can hold more than one line of code
//return type of Javascript functions is functions

function logger() {
  console.log('this is function');
}

//calling , running or invoking the functions
logger();
logger();
logger();
logger();

//function declaration
function fruitProcessor(x, y) {
  const num = (x + y) / 2;
  return num;
}
const num_first = fruitProcessor(22, 22);

//function expression
const num2 = function (x, y) {
  return (x + y) / 2;
};
const num_second = num2(22, 22);
console.log(num_first, num_second);

//ARROW functions, shorter and faster to write
const num_third_value = (num_data_first, num_data_second) => {
  const result = (num_data_first + num_data_second) / 2;
  return result;
};
const num_third_val = num_third_value(22, 33);
console.log(num_third_val);

function cut_Fruit_pieces(fruit) {
  return fruit * 4;
}

function fruit_processor(apples, oranges) {
  const apple_pieces = cut_Fruit_pieces(apples);
  const orange_pieces = cut_Fruit_pieces(oranges);

  const juice = `Juice with ${apple_pieces} apples and ${orange_pieces} oranges`;
  return juice;
}

console.log(fruit_processor(2, 3));

//years and retirement functions
const calAge = function (birthYear) {
  return 2057 - birthYear; //here, for each functions parameters are works like local variable
};

const YearUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return -1;
  }
};
console.log(YearUntilRetirement(1997, 'Rabi Ranjan'));
console.log(YearUntilRetirement(1991, 'Rabi Patel'));

/*coding challenge:
2 teams: dolphins and Kolas!
each team complete 3 times and average is calculated!, 
A team only wins if at least double the average of other team score
1. Create a arrow functions 'calAverage' to calculate the average of 3 scores
2. functions to calculate the average of both teams
3. Create a functions to check winner 'checkWinner' passes as parameters and return win

Test Data1: Dolphins scores 44, 23, & 71. Kolas score 65, 54, & 49.
Test Data2: Dolphins scores 85, 54, & 41. Kolas score 23, 34, & 27.
*/

const calAverage = (first_score, second_score, third_score) => {
  const average_value = (first_score + second_score + third_score) / 3;
  return average_value;
};
console.log(`dolphins average: ${calAverage(44, 23, 71)}`);
console.log(`kolas average: ${calAverage(65, 54, 49)}`);

const dolphins_average = calAverage(44, 23, 71);
const kolas_average = calAverage(65, 54, 49);

const check_winner = function (avgDolphins, avgKolas) {
  debugger;
  if (avgDolphins >= 2 * avgKolas) {
    console.log(`dolphin wins 🥇`);
  } else if (avgKolas >= 2 * avgDolphins) {
    console.log(`kolas win 🥇`);
  } else {
    console.log(`no team wins 😢`);
  }
};
check_winner(dolphins_average, kolas_average);

const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degree celsius: ')),
  };

  console.log(measurement.value);
  //const measurement_value = number(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measurementKelvin());
