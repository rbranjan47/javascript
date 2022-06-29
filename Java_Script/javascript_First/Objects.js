'use strict';

const cities = [
  'mumbai',
  'bangalore',
  'chennai',
  'delhi',
  2021 - 2015,
  'hyderabad',
  'gujarat',
  ['array', 'inside', 'array'],
];

console.log(cities);

//Creating Objects, which is basically Key Value pair
const city = {
  cityName: 'mumbai',
  stateName: 'maharashtra',
  gdpRank: '1',
  relatedState: ['rajasthan', 'madhya pradesh', 'karnataka', 'hyderabad'],
};
console.log(city);

//getting the properties
//using dot(.)
console.log(city.cityName);
//using bracket[]
console.log(city['cityName']);

//we can pass partial text in bracket, and concatenate with remaining text
const nameEnd = 'Name';
console.log(city['city' + nameEnd]);
console.log(city['state' + nameEnd]);

//Brackets, evaluates the value
const promptInterest = prompt('enter city name');
if (city[promptInterest]) {
  console.log(city[promptInterest]);
} else {
  console.log('not found!🤔');
}

//changing the Object value
city.cityName = 'bangalore';
city['stateName'] = 'karnataka';
console.log(city);

//challenge
//Need to show the most growing state near karnataka i.e mumbai
const promptFavorite = prompt('enter relatedState, to know more growing ');
for (let name in city.relatedState) {
  if (city.relatedState[name] == promptFavorite) {
    console.log('yes! 😊');
    break;
  } else {
    console.log('not found! 🤨');
  }
}

//Objects methods
const intro = {
  firstName: 'rabi',
  lastName: 'ranjan',
  birthYear: 2000,
  job: 'software engineer',
  dreams: ['automation', 'developer', 'test scientist'],
  hasBTechCompleted: true,

  calAge: function () {
    return 2021 - this.birthYear;
  },
};

console.log(intro.calAge());
console.log(intro['calAge']());

//Coding challenge
// xyz is 46 year old to the teacher. and he has a/no driver license
const xyz = {
  firstName: 'x',
  lastName: 'yz',
  age: 16,

  eligible: function () {
    if (this.age >= 18) {
      return `eligible for driving license with age ${this.age}`;
    } else {
      return `not eligible for driving license with age ${this.age}`;
    }
  },
};
console.log(xyz.eligible());
console.log(xyz['eligible']());

//coding challenge
/* Mark and john comparing their BMI, 
Calculations: BMI = mass/height **2 = mass/(height*height)

1/ for each of them, create and object with properties for their full name, mass and height 
2. Create a calcBMI method on each Objects. Stores the BMI value to a property and also return it from the method.
3. Log in the console who has higher BMI together with the full name and the respective BMI.

TEST DATA: Marks weights 78kg and 1.69m tall. 
           Johns weight 92 kg and 1.95m tall.
*/

const mark_detail = {
  name: 'mark',
  weight: 78,
  height: 1.69,

  calBMI: function () {
    return this.weight / this.height ** 2;
  },
};

const john_detail = {
  name: 'john',
  weight: 92,
  height: 1.95,

  calBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark_detail.calBMI());
console.log(john_detail.calBMI());

if (mark_detail.calBMI() > john_detail.calBMI()) {
  console.log('mark bmi is higher');
} else if (john_detail.calBMI() > mark_detail.calBMI()) {
  console.log('john bmi is higher');
}

//Array to Object
const arrCreated = ['a', 'b', 'c'];
const objectCreated = {
  0: arrCreated[0],
};
console.log(objectCreated);

//But through assign
const newObjectCreated = Object.assign({}, arrCreated);
console.log(newObjectCreated);
