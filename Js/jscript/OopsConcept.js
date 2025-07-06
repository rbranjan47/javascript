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


/* Javascript Prototypes
   Prototypes are a fundamental concept in JavaScript that enable INHERITANCE/DELEGATION and the sharing of properties and methods between objects.
   Every JAVASCRIPT OBJECT HAS A PROTOTYPE, which is another object from which it can inherit properties and methods.
   This allows for a more efficient use of memory and promotes code reuse.
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

const mySelf = new person("Rabi Ranjan", 27);
console.log(mySelf); // { name: 'Rabi Ranjan', age: 27 } //here mySelf is an instance of person

const oldFriend = new person("Ravi Hasda", 26);
console.log(oldFriend); // { name: 'Ravi Hasda', age: 26 }  //here oldFriend is an instance of person

console.log(mySelf instanceof person); // true, mySelf is an instance of person
console.log(oldFriend instanceof person); // true, oldFriend is an instance of person

