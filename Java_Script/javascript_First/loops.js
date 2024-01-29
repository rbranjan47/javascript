//control structure ----> Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`number : ${rep}`);
}

//arrays
const arr = [
  'rabi',
  'ranjan',
  'software engineer',
  'dhanbad',
  ['bhubaneshwar', 'bangalore', 'noida'],
  2021 - 1996,
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//we can also push into new array
const arr_new = [];
for (let i = 0; i < arr.length; i++) {
  arr_new.push(arr[i]);
  console.log(arr_new[i]);
}

//continue and Break
//continue with string
console.log('ONLY STRING');
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'string') continue;
  console.log(arr[i], typeof arr[i]);
}

//Break with number
console.log('BREAK WITH NUMBER');
for (let i = 0; i < arr.length; i++) {
  //strict equality
  if (typeof arr[i] === 'number') break;

  console.log(arr[i], typeof arr[i]);
}

//Objects
console.log('OBJECTS');
const intro = {
  firstName: 'rabi',
  lastName: 'ranjan',
  birthYear: 2000,
  job: 'software engineer',
  dreams: ['automation', 'developer', 'test scientist'],
  hasBTechCompleted: true,

  calAge: function () {
    return 2021 - this.birthYear;
  },
};

for (let i in intro) {
  console.log(i, intro[i]);
}

//backwards array
console.log('BACKWARD ARRAY');
const back_arr = [
  'rabi',
  'ranjan',
  'software engineer',
  'dhanbad',
  ['bhubaneshwar', 'bangalore', 'noida'],
  2021 - 1996,
];

for (let i = back_arr.length - 1; i >= 0; i--) {
  console.log(back_arr[i]);
}

//loops in loop
console.log('LOOPS INSIDE LOOP');
for (let i = 0; i < back_arr.length; i++) {
  for (let j = 0; j < i; j++) {
    console.log(back_arr[j]);
  }
}
let a = 'rabi';
