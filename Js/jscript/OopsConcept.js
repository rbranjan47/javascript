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

const person = function (name, age) {
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



/* Javascript Prototypes
   Prototypes are a fundamental concept in JavaScript that enable INHERITANCE and the sharing of properties and methods between objects.
   Every JAVASCRIPT OBJECT HAS A PROTOTYPE, which is another object from which it can inherit properties and methods.
   This allows for a more efficient use of memory and promotes code reuse.
*/

console.log(person.prototype); // { constructor: [Function: person] }



//Using this prototype, we can add methods that will be shared by all instances of the person constructor function.

person.prototype.greet = function () {
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

/*
Differences between OOP in JavaScript and Java:

1. Classes & Objects:
   - Java: Class-based, strictly typed. Objects are instances of classes.
   - JavaScript: Prototype-based, loosely typed. Objects can be created directly or via constructor functions/classes.

2. Inheritance:
   - Java: Classical inheritance using 'extends'.
   - JavaScript: Prototype inheritance (objects inherit from other objects). ES6 introduced 'class' and 'extends' for syntactic sugar.

3. Encapsulation:
   - Java: Uses access modifiers (private, protected, public).
   - JavaScript: No true access modifiers, but can use closures, symbols, or #private fields (ES2022).

4. Polymorphism:
   - Java: Method overloading and overriding.
   - JavaScript: Only method overriding (no overloading).

5. Abstraction:
   - Java: Abstract classes and interfaces.
   - JavaScript: No interfaces/abstract classes, but can simulate via patterns.

6. Static Methods:
   - Java: Supported.
   - JavaScript: Supported in ES6 classes.

7. Constructors:
   - Java: Constructor methods in classes.
   - JavaScript: Constructor functions or ES6 class constructors.

Examples:

// Java Example
class Animal {
    String name;
    Animal(String name) { this.name = name; }
    void speak() { System.out.println("Animal speaks"); }
}

class Dog extends Animal {
    Dog(String name) { super(name); }
    void speak() { System.out.println("Woof!"); }
}

// JavaScript Example
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log("Animal speaks");
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
    console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak(); // Woof!

// Or using ES6 classes
class AnimalES6 {
    constructor(name) { this.name = name; }
    speak() { console.log("Animal speaks"); }
}
class DogES6 extends AnimalES6 {
    speak() { console.log("Woof!"); }
}

const dog2 = new DogES6("Buddy");
dog2.speak(); // Woof!

OOP Concepts in JavaScript vs Java:
- Both support: Encapsulation, Inheritance, Polymorphism, Abstraction.
- JavaScript adds: Prototype inheritance, dynamic typing, object literals, closures for encapsulation.
- Java has: Strict typing, interfaces, abstract classes, access modifiers.

Summary:
JavaScript supports all main OOP concepts, but implements them differently (prototype-based, dynamic, flexible). 
Java is class-based, strictly typed, and uses classical inheritance.
*/

/*
//------------------------ Coding challenge ------------------------//

1. Use a constructor function to implement a Car. A car has a make and a speed property.
   The speed property is the current speed of the car in km/h.

2. Implement a method called accelerate that increases the speed of the car by 10 km/h.
   And log new speed to the console.

3. Implement a method called brake that decreases the speed of the car by 5 km/h.
   And log new speed to the console.

4. Create two instances of the Car class with different makes and speeds.
   Log the details of both cars to the console.

DATA CAR 1: 'TATA', 120 km/h
DATA CAR 2: 'MARUTI', 95 km/h
*/

function Car(make, speed) {
   this.make = make;
   this.speed = speed;
}

Car.prototype.accelerate = function () {
   this.speed = this.speed + 10;
   return this.speed;
}

Car.prototype.break = function () {
   this.speed = this.speed - 5;
   return this.speed;
}

const tata = new Car('TATA', 120);
const maruti = new Car('MARUTI', 95);

console.log(`Car 1: ${tata.make}, Speed: ${tata.speed} km/h, with Accelerate: ${tata.accelerate()} km/h, with Brake: ${tata.break()} km/h`);
console.log(`Car 2: ${maruti.make}, Speed: ${maruti.speed} km/h, with Accelerate: ${maruti.accelerate()} km/h, with Brake: ${maruti.break()} km/h`);

//Accelerate and Brake methods
console.log(tata.accelerate());
console.log(maruti.break());
console.log(tata.accelerate());
console.log(maruti.break());



//------------------------//------------------------ ES6 Classes ------------------------//------------------------//
// ES6 Classes are a syntactical sugar over JavaScript's existing prototype-based inheritance.

class PersonPrototype {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

PersonPrototype.prototype.greet = function () {
   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
const personProto1 = new PersonPrototype("Alice", 30);
const personProto2 = new PersonPrototype("Bob", 25);

personProto1.greet();
personProto2.greet();

console.log("In ES6 classes--------------------------------------------");

class PersonES6 {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
}

const person1ES6 = new PersonES6("Alice", 30);
const person2ES6 = new PersonES6("Bob", 25);

person1ES6.greet();
person2ES6.greet();

/*
 ES6 Classes vs Prototype-based Inheritance:

1. Syntax:
   - ES6 Classes: Uses class and extends keywords, providing a cleaner and more intuitive syntax.
                  function defined inside the class body.
  
   Example:
   class Animal {
       constructor(name) {
           this.name = name;
       }
       speak() {
           console.log(`${this.name} makes a noise.`);
       }
   }

   class Dog extends Animal {
       speak() {
           console.log(`${this.name} barks.`);
       }
   }

   - Prototype-Based: Uses constructor functions and prototype properties, which can be more verbose.
   Example:

   function Animal(name) {
       this.name = name;
   }
   Animal.prototype.speak = function() {
       console.log(`${this.name} makes a noise.`);
   }

   function Dog(name) {
       Animal.call(this, name);
   }
   Dog.prototype = Object.create(Animal.prototype);
   Dog.prototype.speak = function() {
       console.log(`${this.name} barks.`);
   }
*/

//* IMPORTANT ABOUT ES6 CLASSES  *//
/*
- In ES6 to make oops concept, we have to create class using class keyword.
- Classes are not hoisted, so they must be declared before they are used. like we do with function declarations.
- Classes are first class citizens, meaning they can be passed around like any other value.
- Classes are executing in strict mode by default.
*/



//------------------------ Setters and Getters ------------------------//
// Setters and getters allow you to define methods that can be used to set and get properties.

class areaofRectangleGetter_Setter {

   constructor(length, breadth) {
      this.length = length;
      this.breadth = breadth;
   }

   get areaofRectangle() {
      return this.length * this.breadth;
   }

   set areaofRectangleSetLength(length) {

      if (length > 0) {
         this.length = length;
      } else {
         console.log("Enter valid length");
      }
   }

   set areaofRectangleSetBreadth(breadth) {
      if (breadth > 0) {
         this.breadth = breadth;
      } else {
         console.log("Enter valid breadth");
      }
   }
}

const rectangle = new areaofRectangleGetter_Setter(10, 5);
console.log(`Area of Rectangle: ${rectangle.areaofRectangle}`); // Area of Rectangle: 50

rectangle.areaofRectangleSetLength = 12.55;
rectangle.areaofRectangleSetBreadth = 6.231;
console.log(`Area of Rectangle: ${rectangle.areaofRectangle}`); // Area of Rectangle: 78.5



class studentNameGetterANDSetter {
   constructor(student_name, student_rank) {
      this.student_name = student_name;
      this.student_rank = student_rank;
   }

   get studentDetails() {
      return `Name: ${this.student_name}, Rank: ${this.student_rank}`;
   }

   set studentDetailsName(name) {
      this.student_name = name;
      console.log(`Student name is: ${this.student_name}`);
   }

   set studentRank(rank) {
      if (rank > 0 && rank <= 10) {
         this.student_rank = rank;
         console.log(`Student ${this.student_name} is under top 10 and rank is: ${this.student_rank}`);
      } else {
         console.log("Enter valid rank between 1 to 10");
      }
   }
}

studentNameGetterANDSetter.studentDetailsName = "Rabi Ranjan";
studentNameGetterANDSetter.studentRank = 5;
console.log(studentNameGetterANDSetter.studentDetails); // Name: Rabi Ranjan, Rank: 5


//------------------------ Static Methods ------------------------//
// Static methods are called on the class itself, not on instances of the class.

class MathUtils {
   static add(a, b) {
      return a + b;
   }

   static subtract(a, b) {
      return a - b;
   }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(10, 4)); // 6    

//How static methods are different from instance methods?
// Static methods are called on the class itself, not on instances of the class.

//Example of static vs instance methods:
class Circle {
   constructor(radius) {
      this.radius = radius;
   }

   static calculateArea(radius) {
      return Math.PI * radius * radius;
   }

   get area() {
      return Circle.calculateArea(this.radius);
   }
}

const circle = new Circle(5);
console.log(Circle.calculateArea(5)); // 78.53981633974483
console.log(circle.area); // 78.53981633974483  

//------------------------ Object.create() ------------------------//
// Object.create() is a method that creates a new object with the specified prototype object and properties

const person01 = {
   greet() {
      console.log("Hello!");
   }
};

const john = Object.create(person01);
john.greet(); // Hello!

// Why use Object.create()?
// 1. It allows you to create an object with a specific prototype without using a constructor
// 2. It provides a way to set up inheritance without using constructor functions or classes.
// 3. It allows you to create objects with a specific prototype and properties in a more concise way.

//Difference between Object.create() and new operator?
//Example of Object.create():
const person02 = {
   greet() {
      console.log("Hi!");
   }
};

const jane = Object.create(person02);
jane.greet(); // Hi!

// Example of new operator:
function Person(name) {
   this.name = name;
}
const mike = new Person("Mike");
console.log(mike.name); // Mike
// The main difference is that Object.create() creates an object with a specific prototype, while new operator creates an instance of a constructor function.  


