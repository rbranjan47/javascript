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
  // if (fruitInput == 'Papaya') {
  //   return fruitInput * 4;
  // } else if (fruitInput == 'Pineapple') {
  //   return fruitInput * 8;
  // } else if (fruitInput == 'Watermelon') {
  //   return fruitInput * 16;
  // }

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
  - 
*/