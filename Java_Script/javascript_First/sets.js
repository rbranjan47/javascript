'use strict';
//sets
const orderSet = new Set([
  'pizza',
  'pizza',
  'pasta',
  'chapati',
  'rice',
  'biryani',
  'biryani',
]);
console.log(orderSet); //{ 'pizza', 'pasta', 'chapati', 'rice', 'biryani' }

//We can also Iterate strings
const iterateString = new Set('rabi ranjan');
console.log(iterateString); //{ 'r', 'a', 'b', 'i', ' ', 'n', 'j' }

//Set, could also be empty
const emptySet = new Set();
console.log(emptySet); //{}

//size of sets
console.log(orderSet.size);

//adding element
orderSet.add('kabab');
orderSet.add('kabab'); //It will add
console.log(orderSet);

//we can also delete element
orderSet.delete('pizza');
console.log(orderSet);

//To delete all elements
//orderSet.clear();

//looping is like Iterating the elements
for (const orders of orderSet) console.log(orders);

//Example
const staff = [
  'waiter',
  'chef',
  'waiter',
  'manager',
  'master chef',
  'chef',
  'waiter',
];
//Let suppose, we want only different positions/staff is there and again in array
const setStaff = [...new Set(staff)]; //spread operators, again stored in array without storing duplicate values
console.log(setStaff);
