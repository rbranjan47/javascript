/*
JAVASCRIPT:
    Javascript is a high-level, 
    Prototype-based object oriented,
    Multi-paradigm (an approach and mindset of structing code, style and technique),
    Interpreted or Just in compile,
    Dynamic, 
    Single Threaded, 
    Garbage Collected,
    First Class function, 
    Event Loop Concurrency Model, JS Engine runs single thread at a time
                             But, Using EVENT LOOP, multiple tasks can executed 



    Execution Context, in which peice of JS code is executed.
    
                    Creation of Global Execution Context(not insides functions)
                                             👇
                    Execution of top-level code(inside global Execution Context)
                                             👇
                    Execution of Functions and waiting for Callbacks 
                    
                   
*/

'use strict';
const name = 'Jack Ma';

const first = () => {
  let a = 1;
  const b = second(9, 10);

  a = a + b;
  return a;
};

function second(x, y) {
  var c = 10;
  return c;
}

const mainValues = first();
console.log(mainValues);

/*
 Scoping: Where can we access a certain variables/functions and where not?


 let, const variables are BLOCK SCOPE

 Whereas, var is a FUNCTIONAL SCOPE


 lexical Scope: Type of scope, Controlled by placement of functions and blocks in code.
 */

function calculateAge(birthYears) {
  const age = 2024 - birthYears;
  console.log(firstNames);

  function ageInWord() {
    const output = `your age ${age} and your name is ${firstNames}`;
    console.log(output);

    if (birthYears >= 1981 && birthYears <= 2100) {
      var calculateConditions = true;
      const strss = `Age is ${age} and conditions ${calculateConditions}!`;
      console.log(strss);
    }

    //console.log(strss);
    console.log(calculateConditions); // var is functional block, thats why it is accessible outside conditional block
  }

  //calling function ageInWord
  ageInWord();
  return age;
}

const firstNames = 'John Tan';
console.log(calculateAge(1997));

//ageInWord(); Reference Error, as we can not acces Blocked Scope function
//console.log(age);   Reference Error, as we can not access functional scope variable

/*-------------HOISTING-------------
  > Makes some types of variables accessible/usable in the code before they are actually declared.
  
                ⬇👇(behind the scene)
   Before execution, code scanned for variable declarations and for each variable, a new property is created
                      under variable Environment Object.
  
                      

                                   HOISTED?         INITAL VALUE               SCOPE

  function declarations            Yes               Actual functions         Block
  var                              Yes               Undefined                Function
  let and const                    No                un-initialized           Block
  function expressions & Arrow           based on let, const, and var

Example: 👇

*/

/* ---------------TDZ(TEMPORAL DEAD ZONE)--------------- 
    > execution, where JS variables declared with let and const but cannot be accessed or assigned any value.

    Example: 👇
*/

const nameAuto = 'Scott Ledbetter';
if (nameAuto === 'Scott Ledbetter') {
  //console.log(`name is ${nameAuto} and profession ${job}`);    Reference error, as job can not access before initialization

  const ageAuto = 2024 - 1997;
  console.log(ageAuto);

  const job = 'Software Engineer';
  console.log(job);

  console.log(`name is ${nameAuto} and profession ${job}`);
}

//console.log(`name: ${me} job: ${job} and birthYear: ${birthYear}`);  birthYear is in TDZ
var me = 'rabi ranjan';
var job = 'software engineer';
const birthYear = 1997;

//No matter where function and variables are declared, they are moved to top of their scope regardless of thier scope global and local
console.log(addNumber(2, 3));
console.log(substractNumber(10, 4));
// console.log(multiplication(10, 4));   due to arrow function declared with const variable

function addNumber(a, b) {
  return a + b;
}

function substractNumber(a, b) {
  return a - b;
}

const multiplication = (a, b) => {
  return a * b;
};

/*  ----------------- THIS Keyword -----------------
    > special variable that is created for every execution context(every function)

    > IN STRICT MODE, THIS is UNDEFINED

    > this -> is not a static. 
           -> It depends on HOW function is called. 
           -> Its values assigned when the function is actually called.

    > Method 👉 this = < Onject that is calling the Method>

    > Simple Function call 👉 this = Undefined

    > Arrow Functions 👉 this  = <this of surrounding function(lexical this)>

    > Event Listener 👉 this = <DOM element that the handler is attched to>

    > this NOT point to Function itslef, and also NOT to its variable Environment.
*/

console.log(this); //called parent object i.e. window

function calculateAge2(birthYearss) {
  const age = 2024 - birthYearss;
  console.log(`this keyword inside regularFunction: ${this} `); //In simple function undefined as mentioned 👆
}
console.log(calculateAge2(1997));

const functionArrows = birthYearsss => {
  console.log(2024 - birthYearsss);
  console.log(`this keyword inside arrowFunction: ${this} `); //In arrow function THIS keywords represents Global Scope
};
functionArrows(1996);

const personObjects = {
  title: 'Mr',
  firstname: 'John Tan',
  project: 'Resman',
  Profile: 'Software Developer',
  language: 'c#',
  leads: ['corbin', 'damitra', 'scott'],
  Age: 25,

  calculatesAge: function () {
    console.log(this);
    console.log(`this keyword inside method: ${this.firstname} `); //Object that is calling method
  },
};

personObjects.calculatesAge();

//or we can
const f = personObjects.calculatesAge; //f becomes a regular function
//f(); //since this f() function is a regular function, so undefined
//
//
//
/*----------------------Regular vs Arrow Function,THIS keyword---------------------- */
//
//
//
const personObjects2 = {
  title: 'Mr',
  firstname: 'Scott Ledbetter',
  project: 'ResMan',
  Profile: 'Software Developer',
  language: 'c#',
  leads: ['corbin', 'damitra', 'scott'],
  Age: 25,

  // startWork: () => {     //Arrow function returns undefined from Global Scope
  //   console.log(this);
  //   console.log(`Hey, this KeyWord here: ${this.title} ${this.firstname}`);
  // },
  startWork: function () {
    //Regular function returns actual value from personObject2 objects
    console.log("Using this Keyword inside function and in Object", this);
    console.log(`Hey, this KeyWord here: ${this.title} ${this.firstname}`);
  },
};

personObjects2.startWork(); //here arrow function, use this keyword for global scope i.e. window  and returning value of firstname, ... as Undefined until it defined globally

//this keyword inside Nested Function
const personObjects3 = {
  title: 'Mr',
  firstname: 'Corbin du Mont',
  project: 'ResMan',
  Profile: 'Software Product Owner',
  language: 'c#',
  leads: ['Nick', 'David', 'Benjamin'],
  Age: 30,
  startWork: function () {
    //Regular function returns actual value from personObject2 objects
    console.log(this);
    console.log(`Hey, this KeyWord here: ${this.title} ${this.firstname}`);

    const nestedThis = this; //solution - defining again this keyword inside function to use in nested function
    const detailedWork = function () {
      console.log(
        `Your Project ${nestedThis.project} and you need to work on ${nestedThis.language}`
      ); //here this is not accessible even this is a nested function,
      //To access we need to declare separately 👆
    };

    //solution 2 -> From Echma6, Using Arrow Function(as <this of surrounding function(lexical this)>)
    const detailedWorkUsingArrow = () => {
      console.log(
        `Using Arrow Function-> Your Project ${this.project} and you need to work on ${this.language}`
      ); //here this is not accessible even this is a nested function,
      //To access we need to declare separately 👆
    };
    detailedWorkUsingArrow();
  },
};

personObjects3.startWork();

/*---------------- Agrument Object ----------------
   > > Local to a function, as like local variable that is avilable with in all function except ARROW
   > > Used to Access parameters of functions, but not outside function
   > >
*/

const argumentsFunctions = function (a, b) {
  console.log(arguments[1]);
};

argumentsFunctions(1, 2);

//sum using Argument Object
let sum = 0;
const argumentsObjectSum = function (num) {
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

var sCount = argumentsObjectSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('Sum is:' + sum);


//
//Length of undefined unput keyword
const argumentsInputKeywords = function (num) {
  console.log('Length of Arrays/Arguments: ' + arguments.length);
};

argumentsInputKeywords(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 22, 20, 24, 26);

