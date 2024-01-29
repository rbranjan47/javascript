//Primitives and Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge); //oldAge is not effected by the age assignments

//Objects
const me = {
  name: 'rabi',
  age: 24,
};

const friend = me;
friend.name = 'string type';
friend.age = 27; //it also changing the me Objects values
console.log('Friend:', friend);
console.log('Me:', me);

let lastName = 'williams';
let oldLastName = 'jessica';
lastName = 'Devise';
console.log(lastName, oldLastName);

const intro = {
  name: 'rabi',
  lastName: 'ranjan',
  age: 24,
};

const copy_intro = intro;
copy_intro.lastName = 'patel';
console.log(intro);
console.log(copy_intro);

//to handle this, Object value reference issue
const intro1 = {
  name: 'rabi',
  lastName: 'ranjan',
  age: 24,
  family: ['maa', 'papa', 'didi', 'jija jii'],
};

const copy_intro1 = Object.assign({}, intro1);
copy_intro1.lastName = 'patel';
console.log(intro1);
console.log(copy_intro1);

copy_intro1.family.push('babu');
copy_intro1.family.push('babu');
console.log(intro1);
console.log(copy_intro1);
