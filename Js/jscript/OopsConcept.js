// What is Oops Concept in JavaScript?
// Oops in JavaScript
// Contructor Function and the new Operator
// Prototypes
// Prototype Inheritance and the Prototype Chain
// Prototype Inheritance on Built-in Objects
// ES6 Classes
// Setters and Getters
// Static Methods
// Object.create()
// Inheritance Between Classes : Constructor Functions
// Inheritance Between Classes : ES6 Classes
// Inheritance Between Classes : Object.create()
// Encapsulation
// Polymorphism
// Abstraction
// Chaining methods
// ES6 Classes Summary


/* What is Oops Concept in JavaScript?
   Oops in JavaScript is a programming paradigm that uses objects and classes to structure code. 
   It allows for encapsulation, inheritance, polymorphism, and abstraction, 
   making it easier to manage complex codebases and promote code reuse. 
*/


/* Constructor Function and the new Operator

   In JavaScript, a constructor function is a special type of function that is used to create and initialize objects.
   When you call a constructor function with the new operator, 
   it creates a new object, sets the prototype of the new object to the constructor's prototype, and binds the this keyword to the new object.

   Here's an example:

   function Person(name, age) {
       this.name = name;
       this.age = age;
   }

   const person1 = new Person("Alice", 30);
   const person2 = new Person("Bob", 25);

   In this example, Person is a constructor function that creates person objects with name and age properties.
   The new operator creates a new object for each person and sets the prototype chain correctly.
*/

'use strict';

const person = function(name, age) {
 //  console.log(this); // this refers to the newly created object
    this.name = name; // Assigning name property
    this.age = age; // Assigning age property
    // The function does not explicitly return anything, so it implicitly returns the newly created object
};

new person("Rabi Ranjan", 27); 
//1. Creates a new empty object with the properties name and age
//2. When function is called, this = {}
//3. Newly created object linked to the prototype of the function
//4. Function returns the newly created object

const mySelf = new  person("Rabi Ranjan", 27);
console.log(mySelf); // { name: 'Rabi Ranjan', age: 27 } //here mySelf is an instance of person

const oldFriend = new person("Ravi Hasda", 26);
console.log(oldFriend); // { name: 'Ravi Hasda', age: 26 }  //here oldFriend is an instance of person

console.log(mySelf instanceof person); // true, mySelf is an instance of person
console.log(oldFriend instanceof person); // true, oldFriend is an instance of person



/* Javascript Prototypes
   Prototypes are a fundamental concept in JavaScript that enable INHERITANCE/DELEGATION and the sharing of properties and methods between objects.
   Every JAVASCRIPT OBJECT HAS A PROTOTYPE, which is another object from which it can inherit properties and methods.
   This allows for a more efficient use of memory and promotes code reuse.
*/

console.log(person.prototype); // { constructor: [Function: person] }



//Using this prototype, we can add methods that will be shared by all instances of the person constructor function.

person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

mySelf.greet(); // Hello, my name is Rabi Ranjan and I am 27 years old.
oldFriend.greet(); // Hello, my name is Ravi Hasda and I am 26 years old.

console.log(person.prototype.isPrototypeOf(mySelf)); // true, person.prototype is in the prototype chain of mySelf
console.log(person.prototype.isPrototypeOf(oldFriend)); // true, person.prototype is in the prototype


// Inheritance of prototypes properties
person.prototype.species = "Homo sapiens";
console.log(mySelf.species); // Homo sapiens
console.log(oldFriend.species); // Homo sapiens, as it got inherited from parent property

//checking mySelf and oldFriend have species property
console.log(mySelf.hasOwnProperty('species')); // false, species is inherited
console.log(oldFriend.hasOwnProperty('species')); // false, species is inherited 


console.log(mySelf.__proto__);
console.log(mySelf.__proto__.__proto__);
console.log(mySelf.__proto__.__proto__.__proto__);

/*
__proto__ is a property in JavaScript that points to the prototype of an object. 
It helps you see the inheritance chain (prototype chain) for any object.

Here's what each line does:

mySelf.__proto__: Shows the prototype object that mySelf inherits from (usually the prototype of its constructor).
mySelf.__proto__.__proto__: Goes one level up the chain, showing the prototype of the previous prototype (often Object.prototype).
mySelf.__proto__.__proto__.__proto__: Goes up again, usually reaching null, which ends the chain.
*/

const arraysRandom = [1, 2, 3, 4, 5];
console.log(arraysRandom.__proto__);  
// [1, 2, 3, 4, 5] is an instance of Array, so its __proto__ points to Array.prototype.
// and it will have all the methods and properties of Array.prototype, such as forEach, map, filter, etc.

console.log(arraysRandom.__proto__.__proto__);  
// This will point to Object.prototype, which is the prototype of all objects in JavaScript.
console.log(arraysRandom.__proto__.__proto__.__proto__); 
// null