/*
 > De-Structing: Extract values from Array and Object, by assigning them to variable (ECMA6)
  
  
                 >>>>>>>>>>>>>> Destructuring ARRAYS <<<<<<<<<<<<<<
 */

  'use strict';

const personDetails = {
    name: 'John Tan',
    profile: 'Software Engineer',
    locationCountry: 'United states',
    softwareLanguges: ['c#', '.net', 'java', 'javscript', 'typescript'],
    projects: ['Core', 'Affordable', 'RLC', 'Razz', 'Reporting'],
    mainProject: 'ResMan', 

    task: function(startTask, endTask){
      return [this.softwareLanguges[startTask], this.softwareLanguges[endTask]];
    }
};


const arrDemo = [10,12, 14];

const a = arrDemo[0];
const b = arrDemo[1];
const c = arrDemo[2];

console.log(typeof arrDemo);
console.log(a, b, c);



//De-Structuring Array
const [x,y,z] = arrDemo;
console.log(x,y,z);

//or 
let [projectTestFirst, , projectTestSecond] = personDetails.projects;
console.log(projectTestFirst, projectTestSecond);


//Swapping Variables
[projectTestFirst, projectTestSecond] = [projectTestSecond, projectTestFirst];
console.log(projectTestFirst, projectTestSecond);



//getting array element
const [firstTasks, endTasks] =  personDetails.task(1,3);
console.log(firstTasks, endTasks);


//nested array
const arrayNested = [2,3,,[5,6]];
const [p,q,o=1, [r,s]] = arrayNested;
console.log(p,q,o,r,s);



//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> Destructuring OBJECTS <<<<<<<<<<<<<<
*/

const {name, profile, locationCountry} = personDetails;
console.log(name, profile, locationCountry);

const travelDelhi = {
  famousPlace: "Rajiv Chowk",
  actualLocation: "New Delhi",
  country:"India",
  food: ['Biryani', 'Chap', 'Momos', 'GhupChup', 'Pizza', 'Veg Curry'],
  transportMedian:['car', 'Bike','Bus', 'Aeroplane', 'Metro', 'Train', 'Tuk-Tuk'],
  mostReligious: 'Hindu',
  cityType: 'Metro',
  cityCode: 111,
  travelTime1:{
    startTime: 8,
    endtime: 9,
    travelMode: 'Metro'
  },
  travelTime2:{
    startTime: 7,
    endtime: 10,
    travelMode: 'E-Buses',
  },
  travelTime3:{
    startTime: 10,
    endtime: 10,
    travelMode: 'Tuk-Tuk'
  },
  travelTime4:{
    startTime: 10,
    endtime: 10,
    travelMode: 'E-Bikes'
  },
  alwaysVisit: null,
}

//destructing Objects, and getting data
const {famousPlace, actualLocation, country} = travelDelhi;
console.log(famousPlace, actualLocation, country);  //error


//to make variable name DIFFERENT
const {famousPlace: placetovisit, actualLocation: originPlaces, country:originCountrys } = travelDelhi;
console.log(`${placetovisit}
${originPlaces}
${originCountrys}`);  

//We can fetch Object's Array, by creating Empty array
const {food = [], transportMedian = []} = travelDelhi;
console.log(food, transportMedian);

//Mutating Variables(string concept) i.e. Changing size and assigned values

let aa = 10;
let bb = 20;

const obj = {aa:110, bb:220, cc:330};

({aa, bb} = obj);//In order to perform De-Structing we need to wrap here with Paranthesis
console.log(aa, bb); 

//Destructing Nested Objects
const {travelTime1} = travelDelhi;
console.log(travelTime1);

// We can make variable name different in nested objects
const {travelTime2: 
  {startTime: sTime, 
    endtime:eTime,
    travelMode: tMode,
  }
  } = travelDelhi;

  console.log(sTime, eTime, tMode);


//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> SPREAD OPERATORS <<<<<<<<<<<<<<
               > an Iterable, for Arrays or String
               > In Object Literal, the spread syntax lists one by one the properties of an Objects and adds the key-value pairs to the New Object
               
               > Syntax is similar to Spread Operator but Works Opposite to it.
*/

//IMPORTANT >>>>>   Use of Spread Operator in ARRAY
const arrDemoAddition = [20, 40, 60, 80, 100];

const arrDemoArrayAddition = [10,30, 40, 50, 60, arrDemoAddition[0],arrDemoAddition[1], arrDemoAddition[2],arrDemoAddition[3], arrDemoAddition[4]];
console.log(arrDemoArrayAddition);
//or, using spread operator
const newArrDemo = [10,30, 40, 50, 60, ...arrDemoAddition];
console.log(newArrDemo);

const newArraysAfterAddition = [...newArrDemo, "Tokyo", "Professor", "Rio"];
console.log(newArraysAfterAddition);

//adding food and TranssportMedian of Above Object's Arrays
const combinedArrays = [...travelDelhi.food,...travelDelhi.transportMedian];
console.log(combinedArrays);



const str = 'Professor';
const sprededTaks = [...str];
console.log(sprededTaks);   //['P', 'r', 'o', 'f', 'e', 's', 's', 'o', 'r']

const tasks = [...str, ' ', 'P.'];  //spreaded and added mentioned text
console.log(tasks); //['P', 'r', 'o', 'f', 'e', 's', 's', 'o', 'r', 'P.']


//IMPORTANT >>>>>   We can also Use Spread Operator in FUNCTION
const orderPizza = function( ingredient1, ingredient2, ingredient3){
  console.log(`Here is your pizza with ingredients: ${ingredient1}, ${ingredient2} and ${ingredient3}`);
}

//calling orderPizza function
const callingIngredients = [
  prompt("Let make pizza with Ingredient1 with:"),
  prompt("It will also have Ingredient2 as:"),
  prompt("and final Ingredient3 as:")
]

//calling functions, Normally
orderPizza(callingIngredients[0], callingIngredients[1], callingIngredients[2]);

//calling function using SPREAD OPERATOR
orderPizza(...callingIngredients);



//IMPORTANT >>>>>   Use of Spread Operator in OBJECTS
const travelDelhiUpdated = {...travelDelhi, constituency: "Democracy", famousPlace:["Lotus Temple", "Delhi CP", "India Gate", "Akarsar Dham"]};
console.log(travelDelhiUpdated);

//Creating copy of Objects
const travelDelhiUpdatedCopied1 = Object.assign({}, travelDelhiUpdated);
console.log(travelDelhiUpdatedCopied1);

//Creating copy of Objects, using spread operator
const travelDelhiUpdatedCopied2 = {...travelDelhiUpdated};
console.log(travelDelhiUpdatedCopied2);


//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> REST PARAMETERS<<<<<<<<<<<<<<
               > Improved way to handle parameters, 
               > Allowing us to more easily handle various inputs as Parameters in a function
*/
