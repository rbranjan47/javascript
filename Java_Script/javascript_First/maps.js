('use strict');
//Maps, hold the key-value pairs, where Key can be any Data-Type
//Objects are also key-values pairs,

const cityNames = new Map();
cityNames.set(828104, 'bhuli');
cityNames.set(828105, 'dhanbad');
cityNames.set('state', 'jharkhand');
cityNames.set('nearCities', ['mumbai', 'bangalore', 'chennai', 'delhi']);

console.log(cityNames);

//Other ways
cityNames
  .set(828103, 'Marathahalli')
  .set(828116, 'Urban Bangalore')
  .set('state', 'Bangalore')
  .set('nearCities_next', ['Mangalore', 'chennai', '', 'delhi'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'open')
  .set(false, 'closed');

console.log(cityNames);
console.log(cityNames.get('state'));

const currentTime = 21;

console.log(
  cityNames.get(
    currentTime > cityNames.get('open') && currentTime < cityNames.get('close')
  )
);

console.log(cityNames.has('close')); //check key is present or not

//arrays as keys
cityNames.set([1, 3], 'test');
console.log(cityNames);

console.log(cityNames.get([1, 3])); //undefined, as both(1 & 3) are same Object

//To make accessible, make an Array with variable name and then store
const arr = [1, 3];
cityNames.set(arr, 'test 2');
console.log(cityNames.get(arr));

//Maps Iteration
//Creating new Map and passing array inside array
//*****Best Way to Write MAP *****/
const question = new Map([
  ['question', 'best programming languages?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct!'],
  [false, 'try again!'],
]);
console.log(question);

//
//
//
//Convert Object to Map
//Objects methods
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
const introMap = new Map(Object.entries(intro));
console.log(introMap);

//
//
// ITERATION
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(key, value);
}

for (const [key, ,] of question) {
  console.log(key);
}

//
//
//Print success or boolean message of question
const subjectCode = 3;
question.get('correct' == subjectCode)
  ? console.log(question.get(true))
  : console.log(question.get(false));

//
//
//
//Convert MAP to Array, using SPREAD operator
console.log(...question);

//Keys
console.log(...question.keys());

//values
console.log(...question.values());

/*
#CODING CHALLENGE
Let's continue with our football betting app! This time, we have a map with
 a log of the events that happened during the game. The values are the events 
 themselves, and the keys are the minutes in which each event 
 happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 
64 was unfair. So remove this event from the game events log.

3. Print the following string to the console: "An event happened, on average, 
every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first
 half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1, using spread operator
const events = [...gameEvents.values()];
console.log(events);

const eventsArray = [...new Set(events)];
console.log(eventsArray);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, 
    every  ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop(); ///Give the last element
console.log(time);
console.log(`An event happened, on average, 
    every  ${time / gameEvents.size} minutes`);

//4, first half or second half
for (const [min, event] of gameEvents) {
  /* if (keys < 45) console.log(`Game ${values} , first half`);
  else console.log(`Game ${values} , second half`); */

  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half}] Half ${min}: ${event}`);
}
