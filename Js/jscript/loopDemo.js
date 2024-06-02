// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');
// console.log('Hello World, Javascript!');

// For Loop, to run code over and over again
/* Different Kinds of Loops"
   > For
   > while
   > do while
   > for in
   > for of
*/
for (let a = 0; a <= 5; a++) {
  console.log('Hello World, Javascript! Using loop');
}

const type = [];
const values = [1995, 1996, 1997, 1998, 1999, 2000, 'Years Count', true];
for (let i = 0; i < values.length; i++) {
  console.log(values[i]); //true

  type[i] = typeof values[i];

  //push
  type.push(typeof values[i]); //pushing boolean type true
}
console.log(type);

const ages = [];
const valuesAge = [1995, 1996, 1997, 1998, 1999, 2000];
for (let i = 0; i < valuesAge.length; i++) {
  ages.push(2024 - valuesAge[i]);
}
console.log(ages);

/*----------------CONTINOUE & BRAKE----------------*/
//continoue: Brakes 1 Iteration of the loop
//Brake: Brakes the whole loop

for (let x = 0; x < valuesAge.length; x++) {
  if (typeof valuesAge[x] !== 'number') continue;

  console.log(valuesAge[x]);
}

//Reverse, for loop
for (let a = valuesAge.length - 1; a > 0; a--) {
  console.log(`decrement value at ${a}: ${valuesAge[a]}`);
}

//------Nested loop, Loop inside loop------
for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`------Starting First Loop exercise: ${exercise}`);
  for (let practice = 1; practice <= 6; practice++) {
    console.log(`Pratice Loop: ${practice}`);
  }
}

//While loop
let whileCheck = 1;
while (whileCheck <= 5) {
  console.log(`while checked at ${whileCheck}`);
  whileCheck++;
}


//For in used to iterate objects properties.
let marksClass = {
  Thomas: 24,
  Corbin: 25,
  John: 31,
  Scott: 35,
  Nick: 45,
  Damitra: 33
}

for(let a in marksClass){
  console.log("Marks of " + a + " are: "+ marksClass[a]);
}

//for of used to iterate Arrays, String, Maps, Node Lists
let arrayPoint = [10, 20, 30, 40, 50, 60];
for(let b of arrayPoint){
  console.log(b);
}


let nameIterate = "Name in Iterate!";
for(let c of nameIterate){
  console.log(c);
}
