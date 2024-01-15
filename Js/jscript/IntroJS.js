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
