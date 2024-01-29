'use strict';
//cityName object
const cityName = {
  name: 'dhanbad',
  state: 'jharkhand',
  country: 'india',
  subCities: ['bhuli', 'Gomoh', 'govindpur', 'jharia'],
  jobs: ['private', 'government', 'semi-government'],
  openingHours: {
    mon: { open: 12, close: 22 },
    tue: { open: 11, close: 20 },
    wed: { open: 12, close: 23 },
    thur: { open: 10, close: 16 },
  },
  visit: function (firstCityIndex, lastCityIndex) {
    return [this.subCities[firstCityIndex], this.subCities[lastCityIndex]];
  },

  orderTicket: function ({
    new_cityIndex = 1,
    new_jobIndex = 0,
    time,
    address,
  }) {
    console.log(
      `order of : ${time}, on ${address} in city ${this.subCities[new_cityIndex]} and doing job ${this.jobs[new_jobIndex]}`
    );
  },

  suggestionCities: function (city1, city2, city3) {
    console.log(`here is you suggested cities ${city1},${city2}, and ${city3}`);
  },

  totalPayment: function (going, ...returning) {
    console.log(going, returning);
  },
};

const subCitiesJob = [...cityName.subCities, ...cityName.jobs];
console.log(subCitiesJob); //this is array not array iterator

//for of loop, iterate the array
for (const numbers of subCitiesJob) console.log(numbers);

//iterating with each element with Index
for (const cityNumber of subCitiesJob.entries()) {
  console.log(cityNumber);
}

//de-structuring the array element
for (const [i, element] of subCitiesJob.entries()) {
  console.log(`${i + 1}:${element}`);
}

//Entire Object
const entries = Object.entries(cityName.openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`Day: ${day}, Opening time: ${open}, Closing time: ${close}`);
}

/* Coding Challenge
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for
   "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//print loop of scored array
for (const [i, player_name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player_name}`);
}

//loop to calculate average
const values = Object.values(game.odds); //we get values in array
console.log(values);
let average = 0;

for (const oddValue of values) {
  console.log(oddValue);
  average = average + oddValue;
}
console.log(average / values.length);

const {
  odds: { team1: Team1, team2: Team2 },
} = game;
console.log(Team1, Team2);

//odds lists, Question 3
for (const [team, odd] of Object.entries(game.odds)) {
  const vicStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${vicStr} : ${odd}`);
}

//Question 3, In another way
for (const [team, odd] of Object.entries(game.odds)) {
  if (team == 'x') {
    console.log(`odd of draw : ${odd}`);
  } else {
    console.log(`odd of ${game[team]} : ${odd}`);
  }
}

/*Create an Object called 'scores' which contains the names of the players who 
scored as properties, and the number of goals as the value.
Like, 
{
  Gnarby : 1, 
  Hummels: 1,
  Lewandowski: 2
}
*/
const [teamPlayer1, teamplayer2] = game.players;
const totalPlayer = [...teamPlayer1, ...teamplayer2];
console.log(totalPlayer);

for (const players of totalPlayer) {
  const scores = {
    players: players.property(players),
  };
}
