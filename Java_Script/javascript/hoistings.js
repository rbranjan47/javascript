//initial value of VAR variables are undefined
console.log(me);

//initial value of LET and CONST variables are Un-initialized
//console.log(job);
//console.log(year);

var me = 'rabi';
let job = 'software engineer';
const year = 24;

//functions
console.log(addDecl(1, 2));

//function expressions can not be accessible before declaration
//  console.log(functionExp(1, 2));

//Cannot access 'functionArrow' before initialization
//console.log(functionArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const functionExp = function (a, b) {
  return a + b;
};
const functionArrow = (a, b) => a + b;

//example, we are not using var
if (!products) deleteShoppingCard();

var products = 10;
function deleteShoppingCard() {
  console.log('All products deleted!'); //we will get the result, as due to hoisting Var is undefined
}

// Regular function vs Arrow functions

//  var weight = 23; //this declared in the global cause change in calDMI arrow function
//  var height = 25; // this cause we are not using the Var in javascript for the most

const mark_detail = {
  name: 'mark',
  weight: 78,
  height: 1.69,

  calBMI: function () {
    //console.log(this); //this is undefined as, Object not attached
    console.log(100 - this.weight);
    console.log(10 - this.height);

    //solution 1, calling this keyword
    const self = this;
    const isCalc1 = function () {
      console.log(self);
      console.log(self.height >= 1.5 && self.height <= 2.0);
    };

    //solution 2. using arrow function to get PArent function this
    const isCalc2 = () => {
      console.log(this);
      console.log(this.height >= 1.5 && this.height <= 2.0);
    };

    isCalc1();
    isCalc2();
  },

  calDMI: () => {
    console.log(this);
    console.log(`weight: ${this.height}`); //Undefined, as  'height' is not defined in parent function window
    console.log(`height:${this.weight} `); //Undefined, as  'height' is not defined in parent function window
  },
};

mark_detail.calBMI();
mark_detail.calDMI();

//also ARGUMENTS keyword exists in function expressions & declaration not in Arrow function
//arguments keyword in function expression
const addNum = function (a, b) {
  console.log(arguments);
  return a + b;
};
addNum(2, 5);
addNum(2, 5, 6, 7, 8, 9, 1);

//arguments in function declaration
function addNumber(a, b) {
  console.log(arguments);
  return a + b;
}
addNumber(2, 3);
addNumber(2, 3, 4, 5, 6, 7, 8, 9);

//arguments in Arrow function
const addNumbers = (a, b) => {
  console.log(arguments);
  return a + b;
};
console.log(addNumbers(2, 3));
//addNumbers(2, 3, 4, 5, 6, 7, 8, 9);
