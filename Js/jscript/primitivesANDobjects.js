/*
 Primitives Values i.e., which all are not Objects
          string
          Number
          boolean
          null
          undefined
          symbol
          bigint

    > All primitives are immutuable, i.e. can not be altered 
    > But, Variable assigned with primitive value, 
    can be resassigned but exiting value cannot be changed like non-primitive do
     i.e. Non-Primitive Type:
        > Object
        > Array
*/

let age = 20;
let oldAge = 26;
age = 25;

//Here, we re-assigned the age and oldAge variable, but we can not change existing value of it's type
console.log(age);
console.log(oldAge);

//But we can change non-primtive type existing value
const personInfo = {
  age: 30,
  job: 'Software Engineer',
  location: 'United States',
};

personInfo.age = 35;
personInfo.location = 'India';
//Here we are changing exisiting value of personInfo, not assigning
console.log(personInfo);

const personInfo2 = personInfo;
personInfo2.age = 25;

console.log(personInfo.age); //25, it also changes to 25 from 35, as non-primitive type's VALUES personInfo and personInfo2 pointing to same reference address in HEAP
console.log(personInfo2.age); //25

//Some Examples
let lastName = 'Ledbtter';
let oldLastName = lastName;
lastName = 'Scott';

console.log(lastName, oldLastName); //Scott Ledbetter

const firstName = 'Damitra';
const oldFirstName = firstName;
// firstName = 'Gage'; // we can not change existing value of primitive type
console.log(firstName, oldFirstName); //Damitra Damitra

//To Solve above issue 👆👆, Create Object
const firstNameObj = {
  firstName: 'Damitra',
  oldFirstName: 'Damitra',
  core: ['Software Engineer', 'Software Developer'],
};

// const firstNameObjCopy = JSON.parse(JSON.stringify(firstNameObj));  It created another new Object in Stack pinting different Refernce to HEAP
const firstNameObjCopy = Object.assign({}, firstNameObj);
firstNameObjCopy.oldFirstName = 'Gage';
firstNameObjCopy.core.push('Product Owner');

console.log('Initial: ', firstNameObj);

console.log('Final: ', firstNameObjCopy);
