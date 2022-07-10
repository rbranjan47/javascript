//[Hoisting --> Calling function before defining]

//function Statement
function a() {
  console.log('a function with its statements');
}

//function Expressions  -> Not support hoisting, as function stored in variable
var b_called = function b() {
  console.log('b function as expressions');
};

//functions Declaration
/*------Same as function statement------ */

//Anonymous Function --> Function without name
// function (){
// //this will give syntax error, if we user directly
// //USE ---> To assign as variable to use as value

// }

//Named Function Expression   --> On calling xyz() it will give error as stored in variable
var nameFunction = function xyz() {
  console / log('named function...');
};

//Difference Between Parameters & Arguments?
function parametersDemo(x, y) {
  sum = x + y;
  console.log(sum);
}
parametersDemo(10, 15);
//here, x & y --> Parameters
//      10 & 15 --> Arguments

//First Class Functions
/*if functions in that language are treated like other variables. 
So the functions can be assigned to any other variable or passed as an argument or can be returned by another function */
var firstClassVariables = function firstClassFunctions() {
  console.log('first class function...');
  return firstClassFunctions;
};
console.log(firstClassVariables());

//Arrow Function
arrowFunction = () => {
  console.log('arrow functions...');
};
arrowFunction();
