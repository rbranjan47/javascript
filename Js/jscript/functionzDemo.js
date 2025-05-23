//function is a block of keywords

'use strict';

function performLogger() {
  console.log('Hey this is function!');
}

performLogger();
performLogger();



function fruitProcessing(apple, grapes, oranges) {
  console.log(`You have give me ${apple}, ${grapes}, and ${oranges}`);
  //total fruits
  const juice = Number(apple) + Number(grapes) + Number(oranges);
  return juice;
}


const totalFruits = fruitProcessing(10, 20, 30);
console.log(`Total Fruits : ${totalFruits}`);



//Function ---> Declaration vs Expressions

/*Expressions */
function calculateAge(birthYear) {
  return 2023 - birthYear;
}

console.log(calculateAge(1997));

/*Declarations */
const calculateAge2 = function (birthYears) {
  return 2023 - birthYears;
};

const age2 = calculateAge2(1997);
console.log(`Current Age: ${age2}`);



//ARROW FUNCTION ()=>{}
const calculatedAge = (birthYearss, currentYear) => {
  return currentYear - birthYearss;
};

console.log('Calculated Age: ' + calculatedAge(1997, 2024));

//this > Keywrod represent owner of function, unlike in Regular function represents the Object that calls the function



//FUNCTION CALLING ANOTHER FUNCTION
function fruitCuttingMachine(fruitInput) {
  return fruitInput * 4;
}

function fruitProcessingCutted(Papaya, Pineapple, Watermelon) {
  const fruitsPapayaPieces = fruitCuttingMachine(Papaya);
  const fruitsPineappledonPieces = fruitCuttingMachine(Pineapple);
  const fruitsWatermelonPieces = fruitCuttingMachine(Watermelon);
  console.log(`After Cutting
  Papaya: ${Number(fruitsPapayaPieces)},
  Pineapple: ${Number(fruitsPineappledonPieces)},
  Watermelon: ${Number(fruitsWatermelonPieces)}`);

  console.log(`You have give me ${Papaya}, ${Pineapple}, and ${Watermelon}`);
  //total fruits
  const juiceFinal =
    Number(fruitsPapayaPieces) +
    Number(fruitsPineappledonPieces) +
    Number(fruitsWatermelonPieces);
  return juiceFinal;
}

console.log(
  `Fruits Salad Contains: ${fruitProcessingCutted(10, 12, 14)} pieces.`
);



/*>>>>>>>>>>>>>>>>>>>> Default Parameters <<<<<<<<<<<<<<<<<<<<<<
  - To be initialized with Default values i.e. Undefined
  
  - Define default value while defining the parameter, so that it can pick the default defined value 
*/

//defined with default value: 
//funName as JavatPoint
//funValue as 45
// funZone as true
const defaultParameterFunction = function (
  funName = "JavatPoint",
  funValue = "45",
  funZone = true) {

  //before ES6, in ES5 we handle from Short-Circuiting
  // funName = funName || "JavatPoint";
  // funValue = funValue || "45";
  // funZone = funZone || true;


  const functionObjects = {
    funName,
    funValue,
    funZone,
  }
  console.log(functionObjects);
}

//without defining parameter
defaultParameterFunction();
//with only defining parameter: funName
defaultParameterFunction("geeksforgeeks");
//with only defining parameter: funName, funValue
defaultParameterFunction("geeksforgeeks", "100");
//with only defining parameter: funName, funValue, funZone
defaultParameterFunction("geeksforgeeks", "100", false);


//We can use the default parameter to define any values
const flightInformation = function (
  flightName = 'Air India Express',
  flightValue = 500,
  flightRun = true,
  flightOrigin = 'Bangalore') {


  console.log(flightName, flightValue, flightRun, flightOrigin);

  //as an Objects
  const fligthObjects = {
    flightName,
    flightValue,
    flightRun,
    flightOrigin
  }
  console.log(fligthObjects);
}

flightInformation("airIndia", 445, true, "delhi");
flightInformation("Indigo");



/*>>>>>>>>>>>>>>>>>>>> PASSING ARGUMENTS INTO FUNCTIONS: VALUE & REFERENCES <<<<<<<<<<<<<<<<<<<<<<
     -  SO Calling by VALUE might cause SERIOUS ISSUE, be careful of it
     - JS is never be like Passing by VALUE, it just look like Passing by Reference
*/

const name1 = "Corbin Du Mont";

const profileInfor = {
  job: "Product Manager",
  project: "ResMan",
  parentProject: "Inhabit IQ",
  location: 'USA',
  profileScore: 988,
}

console.log(profileInfor);

//defining a function
const eligbleProductOwner = function (name, score) {

  //assigning name(variable > name), from calling by REFERENCE
  score.name = "Mr. " + name1;

  //assigning parentProject(object variable > parentProject), from calling by VALUE
  score.parentProject = "AnyoneHome " + score.parentProject;

  //using score, from calling by VALUE
  if (score.profileScore > 800) {
    console.log(`${score.name} has Qualified for Product Owner!`);
  }
  else {
    console.log(`${score.name} has Not Qualified!`);
  }
}

eligbleProductOwner(name1, profileInfor);

console.log(profileInfor);
//parentProject of Object profileInfor get UPDATED with AnyoneHome InhabitIQ from  InhabitIQ, due to chan
// Here, parentProject passed as VALUE


console.log(name1);
//name1 is NOT UPDATED with Mr. Corbin Du Mont from Corbin Du Mont, as name1 is passed as REFERENCE 


//SO Calling by VALUE might cause SERIOUS ISSUE, be careful of it.




/*>>>>>>>>>>>>>>>>>>>> FIRST CLASS FUNCTION    VS    HIGH ORDER FUNCTION <<<<<<<<<<<<<<<<<<<<<<

       - first class function------------------
              > JS treats function as 'first-class citizens'.
              > This means functions are simply values
              
              ex. 
              Arrow Functions: 
              const add = (a, b) => a+b;

              Function Expression:
              const add = function(a,b){
                return a+b;
              }

              > We can also pass Function as Arguments
              const functionArgu = (a,b) => a+b;
              btnPerform.addEventListener('click', functionArgu);


              here, addEventListener -- Higher order function
              and, functionArgu -- CallBack Function




      - Highe Order Function------------------
              > Function recieves another function as an argument, that returns a new function or Both
               
              > Only possible because of First Class function

              Ex. function count(){                 --- this is Higher order function
              let counter =0;
              return function(){                    --- Returned Function
                while(counter < 10){ 
                 counter++;
                 }
                }
              }
              
*/


/* FUCNTIONS(i.e. Higher Order Function) ACCEPTING ANOTHER CALLBACK FUNCTION*/

const upperFirstWordFunction = function (Str) {
  const [firstStr, ...remainingStr] = Str.split(' ');
  return [firstStr.toUpperCase(), ...remainingStr].join(' ');
}

const UpperFirstLetterFunction = function (Strs) {
  let newWord = [];
  const splittedArray = Strs.split(' ');
  for (let fetchStrs of splittedArray) {
    const [firstLetter, ...spliitedStrs] = fetchStrs.split('');
    newWord.push([firstLetter.toUpperCase(), ...spliitedStrs].join(''));
  }
  return newWord.join(' ');
}

//High Order function
const highOrderAcceptingCallbackFunction = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String : ${fn(str)}`);

  console.log(`Transforemd by function: ${fn.name}`);
}


highOrderAcceptingCallbackFunction("javascript is best!", upperFirstWordFunction);  //this function calling another function to complete its function process

highOrderAcceptingCallbackFunction("javascript is best!", UpperFirstLetterFunction);

/* FUNCTION RETURNING ANOTHER FUNCTIONS */
const detail = function (trainNumber) {
  return function (trainName) {
    console.log(`${trainName} ${trainNumber}`);
  }
}

const runningDate = detail(12340);  //returning function(trainName)

runningDate("Dhanbad Express");
runningDate("New Delhi Express");  //second argument always same

//we can also pass as single function with double argument passing at 1 time
detail(12341)("Patna Express");
detail(12342)("Ranchi Express");


//OR WE CAN ACHEIVE FUNCTION RETURNING ANOTHER FUNCTION USING ARROW FUNCTION
const detailArrowFun = trainNumber => trainName => console.log(` ${trainName} ${trainNumber}`);
detailArrowFun("Jharkhand Express")(12321);
detailArrowFun("Bihar Express")(12322);


/*----------------------CALL and APPLY METHODS----------------------*/
// -- To utilise the Functions/Methods inside any Object, we use Call and Apply method
const akasaAir = {
  airline: "Akasa_Air",
  iataCode: "AAR",
  bookings: [],
  hub: "Mumbai",
  //book function
  book(flightNum, flightName, passengerName) {
    this.bookings.push(`${passengerName} booked flight: ${this.airline}, Name: ${flightName}, Code: ${this.iataCode} ${flightNum}`);
  },
};
akasaAir.book(121, "Akasa Air", 'John Tan');
akasaAir.book(123, "Akasa Air", 'Scott Ledbetter');
console.log(akasaAir.bookings);

//Here Book function defined inside akasaAir Object, to use outside store in a variable
const bookOutSide = akasaAir.book;

// -- CALL METHOD, pass arguments Separtely along with other object name
const indigo = {
  airline: "Indigo",
  iataCode: "IXI",
  bookings: [],
}

bookOutSide.call(indigo, 900, "Indigo", "Corbin Du Mont");
console.log(indigo);

// -- APPLY METHOD, pass arguments as Array along with other object name
const spicejet = {
  airline: "Spice Jet",
  iataCode: "SJ",
  bookings: [],
}

const flightData = [200, "Spice Jet", "Damitra Gage"];
//bookOutSide.apply(spicejet, [200, "Spice Jet", "Damitra Gage"]);
bookOutSide.apply(spicejet, flightData);
console.log(spicejet);

// -- BIND METHOD, Like Call and Apply but it return a New Function and will utilise again and again passing only arguments
const airIndia = {
  airline: "Air India",
  iataCode: "AIA",
  bookings:[]
}
const bookKingFisher = bookOutSide.bind(airIndia, 23, "Indigo_Kingfisher");
bookKingFisher("Thomas");
bookKingFisher("Alex");
bookKingFisher("Sam");
console.log(airIndia);

//Normal Application
const addingTaxes = (rate, value) => value + value * rate;
console.log(addingTaxes(0.2, 400));

//By Call, Apply, and Bind method
const taxJharkhand = addingTaxes.call(null, 0.3, 500);
console.log(taxJharkhand);

const taxBihar = addingTaxes.apply(null, [0.4, 200]);
console.log(taxBihar);

const taxOthers = addingTaxes.bind(null, 0.5);
console.log(taxOthers(200));
console.log(taxOthers(400));
console.log(taxOthers(600));
console.log(taxOthers(800));
console.log(taxOthers(1000));


//Higher Order Function -- 1 Function calling another function
const calculatingTax = function (fnrrate, fnvalue) {
  var taxAmt = fnvalue + fnvalue * fnrrate;
  return taxAmt;
}
const taxRateUsingHighOrderFunction = function (rate, value, fn) {
  return fn(rate, value);
}

console.log(taxRateUsingHighOrderFunction(0.2, 1600, calculatingTax));

//Optimising

const calculatingTaxOpt = function (optrate) {
  return function (optvalue) {
    return optvalue + optvalue * optrate;
  }
}

console.log(calculatingTaxOpt(0.2)(1840));

//using Arrow Functions
const calculatingTaxArrowFunction = arrwrate => arrwvalue => arrwvalue + arrwvalue * arrwrate;
console.log(calculatingTaxArrowFunction(0.3)(4500));
console.log(calculatingTaxArrowFunction(0.5)(5500));



/*-------------------------Immediately Invoked Function Expression(IIFE)-------------------------
   > Only executed Once and Never again
   > i.e., Disappear after 1 usage

*/

const runOnce = function () {
  console.log("This Function will never run again!");
}

runOnce(); //but we can utilise this again and again so,

(function () {
  console.log("This Function will never run again!");
})();  //-- we can never use this again(IIFE)


//Also in Arrow Function
(() => console.log("This Function will never run again!"))();


/*-------------------------Function--CLOSURES (Also called, Lexical Environment)-------------------------
      > Combination of functions bundled together with references to surrounding state
      > Gain Access of Outer Function Scope from Inner Function Scope
      > Closure is created everytime wherever function defined in JS

*/

//example 1
let f;
const multiplicationNum = function (a) {
  f = function () {
    console.log(a * 2);
  }
}

const additionNum = function (a) {
  f = function () {
    console.log(a + 10);
  }
}

multiplicationNum(2);
f();
additionNum(2);
f();  //closure are changed as variable are re-assigned


//example 2 -- Board Passenger
const boardPassenger = function (n, wait) {
  //const perTeam = n/3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 Teams, and each team with ${perTeam} passenger`);
  }, wait * 1000);
  console.log(`Will start onboarding in ${wait} seconds`);
}

const perTeam = 1000;
boardPassenger(150, 5);


//Challenge
/*
In below code, at the end of function attach an event that changes color from red to blue
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
})();
