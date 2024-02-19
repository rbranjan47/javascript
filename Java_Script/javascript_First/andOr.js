'use strict';
//AND and OR operators
//it can any Data type, return any data type, this is SHORT CIRCUITING

console.log('-----------AND------------');
//truthy----> return if first value return
console.log(3 || 'rabi');

console.log('' || 'rabi'); //rabi, as first value is falsy

console.log(true || 0); //true

console.log(false || 0); //0

console.log(undefined || null); //any one

console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello, first truthy value

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

//BUT IF WE DECLARE THEN WILL GET NUMBER
cityName.numGuests = 23;

const checkCity = cityName.numGuests ? cityName.numGuests : 10;
console.log(checkCity); //10, ad numGuests is not defined

//we can solve, shot circuiting
//But if it 0, then it will not work
const guests2 = cityName.numGuests || 10;
console.log(guests2);

console.log('-----------OR------------');
console.log(0 && 'rabi'); //OR operators return falsy value
console.log(7 && 'rabi'); //if both truthy, then last value will return

console.log(44 && 'rabi' && null && undefined); //null, first falsy value

//example
if (cityName.orderTicket) {
  cityName.orderTicket(1, 'gomoh');
}

cityName.orderTicket && cityName.orderTicket(1, 'gomoh');

///////////////////////////////////////
// CODING CHALLENGE

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') 
with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement 
or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

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

//Creating each team array, Array-Destructing concept
const [players1, ,] = game.players;
console.log(players1);

const [, players2] = game.players;
console.log(players2);

//Creating variable and array using Rest Operators concept
const [gk_BayernMunich, fieldPlayer1] = [game.team1, players1];
console.log(gk_BayernMunich, fieldPlayer1);

const [gk_BorrussiaDortmund, fieldPlayer2] = [game.team1, players2];
console.log(gk_BorrussiaDortmund, fieldPlayer2);

//Spread operator concept
const allTeams = [...players2, ...players2];
console.log(allTeams);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//destructuring Object
const {
  odds: { team1: Team1, x: draw, team2: Team2 },
} = game;
console.log(Team1, draw, Team2);

//function
const printGoals = function (...scoredPlayers) {
  console.log(scoredPlayers);
  console.log(`${scoredPlayers.length} were scored!`);
};

printGoals(game.scored);

//sort circuiting
Team1 > Team2 && console.log(`Team 2 is winner`);
Team < Team2 && console.log(`Team 1 is winner`);
