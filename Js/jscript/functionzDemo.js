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
const defaultParameterFunction = function(
  funName="JavatPoint", 
  funValue="45", 
  funZone= true){

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
const flightInformation = function(
  flightName='Air India Express', 
  flightValue= 500, 
  flightRun=true, 
  flightOrigin='Bangalore'){
    

  console.log(flightName, flightValue,flightRun, flightOrigin);

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

const name1 ="Corbin Du Mont";

const profileInfor = {
  job: "Product Manager",
  project: "ResMan",
  parentProject: "Inhabit IQ",
  location: 'USA',
  profileScore: 988, 
}

console.log(profileInfor);

//defining a function
const eligbleProductOwner = function(name, score){
  
  //assigning name(variable > name), from calling by REFERENCE
  score.name = "Mr. " + name1;

   //assigning parentProject(object variable > parentProject), from calling by VALUE
   score.parentProject = "AnyoneHome " + score.parentProject;

  //using score, from calling by VALUE
  if(score.profileScore > 800){
    console.log(`${score.name} has Qualified for Product Owner!`);
  }
  else{
    console.log(`${score.name} has Not Qualified!`);
  }
}

eligbleProductOwner(name1, profileInfor);

console.log(profileInfor);  
//parentProject of Object profileInfor get UPDATED with AnyoneHome InhabitIQ from  InhabitIQ, due to chan
// Here, parentProject passed as VALUE


console.log(name1);
//name1 is NOT UPDATED with Mr. Corbin Du Mont from Corbin Du Mont, as name1 is passed as REFERENCE 


//SO Calling by VALUE might cause SERIOUS ISSUE, be careful of it


/*>>>>>>>>>>>>>>>>>>>> FIRST CLASS FUNCTION    VS    HIGH ORDER FUNCTION <<<<<<<<<<<<<<<<<<<<<<
       - first class function
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

      - Highe Order Function
              > Function recieves another function as an argument, that returns a new function or Both
               
              > Only possible because of First Class function
              
*/
