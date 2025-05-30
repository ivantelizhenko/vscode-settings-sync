'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
/*
//String exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//First solution
const arrFlights = flights.split('+');
const newArrFlights = [];
for (const word of arrFlights) {
  newArrFlights.push(word.split(';'));
}
for (let i = 0; i < newArrFlights.length; i++) {
  newArrFlights[i][0] = newArrFlights[i][0].replaceAll('_', ' ');
  newArrFlights[i][0] = newArrFlights[i][0].includes('Delayed')
    ? '🔴' + `${newArrFlights[i][0]}`
    : newArrFlights[i][0];
  newArrFlights[i][1] = `from ${newArrFlights[i][1].toUpperCase().slice(0, 3)}`;
  newArrFlights[i][2] = `to ${newArrFlights[i][2].toUpperCase().slice(0, 3)}`;
  newArrFlights[i][3] = `(${newArrFlights[i][3].replace(':', 'h')})`;
  newArrFlights[i] = newArrFlights[i].join(' ');
  newArrFlights[i] = newArrFlights[i].padStart(newArrFlights[0].length, ' ');
}
console.log(newArrFlights.join('\n'));

//Second Solution
const bigCode = str => str.slice(0, 3).toUpperCase();
for (const words of flights.split('+')) {
  const [type, from, to, time] = words.split(';');
  const output = `${type.includes('_Delayed') ? '🔴' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} from ${bigCode(from)} to ${bigCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
*/

//Coding Challenge 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const arr = [...document.querySelector('textarea').value.split('_')];
//   const secondWord = arr[1].toLowerCase().split('');
//   secondWord[0] = secondWord[0].toUpperCase();
//   console.log(...[String(arr[0].toLowerCase() + secondWord.join('')).trim()]);
// });

//Strings
/*
const str0 = new String('write something for example');
console.log(str0); // String {'write something for example'}
console.log(typeof new String()); // object
or;
const str = 'Write Something That Have i';

console.log(str[0]); // W
console.log(str[1]); // r
console.log('something'[4]); // t

console.log(str.length); // 27
console.log('else something'.length); // 14

console.log(str.indexOf('i')); // 2
console.log(str.lastIndexOf('i')); // 26
console.log(str.indexOf('write')); //-1 *because cannot find*

console.log(str.slice(6)); // Something That Have i
console.log(str.slice(6, 15)); // Something

console.log(str.slice(0, str.indexOf(' '))); // Write
console.log(str.slice(str.lastIndexOf(' ') + 1)); // i

console.log(str.toLowerCase()); // write something yhat have i
console.log(str.toUpperCase()); // WRITE SOMETHING YHAT HAVE I

console.log(str.includes('Anything')); // false
console.log(str.startsWith('Write')); // true
console.log(str.endsWith('r')); // false

console.log(str.replace('i', 'o')); // Wrote Something That Have i

//Split and Join
const split = 'I+wanna+fly';
console.log(split.split('+')); // (3) ['I', 'wanna', 'fly']
const join = ['Do', 'you', 'like', 'your', 'toys?'];
console.log(join.join(' ')); // Do you like your toys?

// Example. Use some methods
const strBad = '  sOmEThiNg WEIrd  ';
const strGood = strBad.toLocaleLowerCase().trim();
console.log(strGood); // something weird

const smth = 'i do it!';
console.log(smth.padStart(15, '-')); // -------i do it!
console.log(smth.padEnd(15, '-')); // i do it!-------

const maskCreditCard = function (x) {
  const str = String(x);
  const seeNumbers = str.slice(-4);
  return seeNumbers.padStart(str.length, 'x');
};
*/

/*
//Coding Chellenge 3

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

//1
const events1 = new Set();
for (const [i, event] of gameEvents) {
  events1.add(gameEvents.get(i));
}
console.log(events1);

//2
gameEvents.delete(64);
// console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

//4
console.log('First half:');
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${event}`);
}
*/

/*
//Create Map (Another Way)
const question = new Map([
  ['question', 'Who is your daddy?'],
  [1, 'Some boy'],
  [2, 'Your father'],
  [3, 'I'],
  ['correct', 3],
  [true, 'Yes, baby!'],
  [false, 'Bad girl! Try again!'],
]);

//Convert Object to Map
const newObject = {
  name: 'Ivan',
  age: 19,
  city: 'Cherkassy',
};
console.log(newObject); //{name: 'Ivan', age: 19, city: 'Cherkassy'}

const newMap = new Map(Object.entries(newObject));
console.log(newMap); // Map(3) {'name' => 'Ivan', 'age' => 19, 'city' => 'Cherkassy'}

//Conver Map to Array
console.log([...question]);
//(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]);
//(7) ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]);
//(7) ['Who is your daddy?', 'Some boy', 'Your father', 'I', 3, 'Yes, baby!', 'Bad girl! Try again!']

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your choice'));
// console.log(question.get(answer === question.get('correct')));
*/

/*
//Maps
const all = new Map();
all.set('name', 'Ivan Telizhenko');
all.set(1, 'Zvenigorodka');
console.log(all.set(2, 'Cherkasy'));
// Map(3) {'name' => 'Ivan Telizhenko', 1 => 'Zvenigorodka', 2 => 'Cherkasy'}

all
  .set('friends', ['Sasha', 'Ania', 'Vlad', 'Karina'])
  .set('wakeUp', 9)
  .set('fallAsleep', 24)
  .set(true, "I'm happy")
  .set(false, "I'm starve");

console.log(all.get('name')); // Ivan Telizhenko
console.log(all.get(1)); // Zvenigorodka
console.log(all.get(true)); // I'm happy

const girlfriend = true;
const iHaveABed = true;
console.log(all.get(girlfriend && iHaveABed)); // I'm happy

console.log(all.has('friends')); // true
all.delete(1); // *now without {1 => 'Zvenigorodka'}*
// all.clear(); // *now all(Map) is clear*

all.set([1, 2], 'Test');
console.log(all.get([1, 2])); // undefined, but if...:

const arr = [1, 2];
all.set(arr, 'Test');
console.log(all.get(arr)); // Test

all.set(document.querySelector('h1'), 'Heading');
console.log(all.get(document.querySelector('h1'))); // Heading

console.log(all.size); // 10 *(without clear)*
*/

/*
// Sets
const someSet = new Set(['one', 'two', 'one', 'three', 'two', 'one', 'two']);
console.log(someSet); //  Set(3) {'one', 'two', 'three'}

console.log(new Set('Ivan')); // Set(4) {'I', 'v', 'a', 'n'}

console.log(someSet.size); // 3

console.log(someSet.has('one')); //true

console.log(someSet.has('five')); // false

someSet.add('four');
console.log(someSet); // Set(4) {'one', 'two', 'three', 'four'}

someSet.delete('one');
console.log(someSet); // Set(3) { 'two', 'three' four}

someSet.clear();
console.log(someSet); // Set(0) {size: 0}

for (const number of someSet) console.log(number);
// two
// three
// four
*/

/*
// Optional Chaining (?.)
//NOT this
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//THIS
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// On mon, we open at closed
// On thu, we open at 12
// On fri, we open at 11
// On sat, we open at 0
// On sun, we open at closed

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//(2) ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//Method does not exist

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
//Jonas
const users = [];
console.log(users[0]?.name ?? 'User array empty');
//User array empty
*/

/*
const name = 'Ivan';
const age = 19;
const married = false;
const someone = 'someone';
//We can do this
const objects1 = {
  name,
  age,
  married,
  calcAge(birthYear) {
    return 2037 - birthYear;
  },
  [someone]: 5500,
};
//NOT this
const objects2 = {
  name: name,
  age: age,
  married: married,
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};
*/

/*
//Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//Result: (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

for (const item of menu) console.log(item);
//  Focaccia
//  Bruschetta
//  Garlic Bread
//  Caprese Salad
//  Pizza
//  Pasta
//  Risotto

for (const item of menu.entries()) console.log(item);
// .entries() method creates new arrays: [*index*, *elemnt with that index*]
// (2) [0, 'Focaccia']
// (2) [1, 'Bruschetta']
// (2) [2, 'Garlic Bread']
// (2) [3, 'Caprese Salad']
// (2) [4, 'Pizza']
// (2) [5, 'Pasta']
// (2) [6, 'Risotto']

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
//We can operate with a lot of elements of arrays
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
*/

/*
//Coding Challenge 
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
  scored: [
    'Lewandowski',
    'Witsel',
    'Gnarby',
    'Gotze',
    'Gnarby',
    'Lewandowski',
    'Witsel',
    'Gnarby',
    'Hummels',
    'Witsel',
    'Gotze',
    'Gotze',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Chellenge 1
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1: team1, x: draw, team2: team2 } = game.odds;
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
const team1Win = team1 < team2 && `Probably ${game.team1} will win!`;
const team2Win = team1 > team2 && ` Probably ${game.team2} will win!`;

//Chellenge 2
//1
for (const [i, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${player}  `);
}

//2
// First my solution
let odd = 0;
for (const odds of Object.values(game.odds)) odd += odds;
odd /= Object.values(game.odds).length;
console.log(odd);

//Second my solution
// const oddsCalculate = function (oddsValue) {
//   let odd = 0;
//   for (const odds of Object.values(oddsValue)) {
//     odd += odds;
//   }
//   return (odd /= 3);
// };
// console.log(oddsCalculate(game.odds));

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd} `);
}

//4

// const scorers = {};
// ----My solution----
const scorers1 = {};
for (let i = 0; i < game.scored.length; i++) {
  scorers1[game.scored?.[i]] = game.scored.filter(
    x => x === game.scored[i]
  ).length;
}

// ----His solution----
const scorers2 = {};
for (const player of game.scored) {
  scorers2[player] ? scorers2[player]++ : (scorers2[player] = 1);
}

*/
/*
//Logical Assignment Operators
//Example 1
const rest1 = {
  name: 'Pizza',
  numGuests: 0,
};

const rest2 = {
  name: 'Pasta',
  owner: 'Giovanni Rossi',
};

//OR Short Circuiting
rest1.numGuests = rest1.numGuests || 10; // numGuests: 10
rest2.numGuests = rest2.numGuests || 10; // numGuests: 10
//OR Assignment Operator
rest1.numGuests ||= 10; // numGuests: 10
rest2.numGuests ||= 10; // numGuests: 10

// Nullish assigment operator (null or undefined)
rest1.numGuests ??= 10; // numGuests: 0
rest2.numGuests ??= 10; // numGuests: 10

//AND Short Circuiting
rest1.owner = rest1.owner && '<ANONYMOUS>'; // owner: undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; // owner: '<ANONYMOUS>'
//AND Assignment Operator
rest1.owner &&= '<ANONYMOUS>'; // we don't have element 'owner'
rest2.owner &&= '<ANONYMOUS>'; // owner: '<ANONYMOUS>'
*/

/*
// ---- The Nullish Coalescing Operator (??) ----
console.log(null ?? ''); // *just space*
console.log(undefined ?? ''); // *just space*
console.log(undefined ?? null); // null
console.log(0 ?? 7); // 0
console.log(null ?? 0); // 0
// Like OR(||)? but 0 and '' are not false.
*/

/*
// ---- OR ---- (show true value)
console.log(7 || 'ME'); // 7
console.log(null || ''); // *just space*
console.log(undefined || null); // null
console.log(0 || 7); // 7
console.log(undefined || undefined); // undefined
// if first true --> shows it, and skips others;
// if first false --> skips it, and check others for true;
// if all false --> shows first)

// ---- AND ---- (show false)
console.log('----AND---=');
console.log(7 && 'ME'); // ME
console.log(7 && 'ME' && 2); // 2
console.log(null && ''); // null
console.log('' && null); //  *just space*
console.log(0 && 7); // 0
console.log(undefined && null); // undefined
console.log(null && undefined); // null
// if first true --> shows last true, and skips all before;
// if first false --> shows it, and skip others;
// if all false --> shows first)
*/

///////////////////////////////////////
/*
//in a functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
//Example 1
add(2, 3); // 5
add(2, 5, 1, 9); // 17
add(2, 3, 4, 6, 8, 7, 3); // 33

//Example 2
const x = [3, 7];
const y = [12, 3, 7, 9];
const z = [2, 3, 7, 2, 11, 9, 5, 2];
add(...x); // 10
add(...y); // 31
add(...z); // 41
*/

/*
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//result: [1,2,7,8,9]

const newArr = [1, 2, ...arr];
console.log(newArr);
//result: [1,2,7,8,9]

console.log(...newArr);
console.log(1, 2, 7, 8, 9);
//result: 1,2,7,8,9 //the same for both

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//result: (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//result: (7) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
//result: (7) ['J', 'o', 'n', 'a', 's', ' ', 'S.']

console.log(...str);
//result: J o n a s
// console.log(`${...str} Schmedtmann`); - not work

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
//result: {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// Copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
//result: Ristorante Roma
console.log(restaurant.name);
//result: Classico Italiano
*/

///////////////////////////////////////

// Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//result: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//result: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//result: [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//result: 23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
//result: 11 23

//////////////////////////////////
/*
// Destructuring Objects(me)
const me = {
  firstName: 'ivan',
  lastName: 'telizhenko',
  year: 2023,
  birthYear: 2004,
  haveGirlfriend: true,
  table: {
    mon: {
      start: 8,
      end: 20,
    },
    tue: {
      start: 8,
      end: 20,
    },
    wed: {
      start: 8,
      end: 20,
    },
  },
};

console.log(me.year);

const { firstName, year } = me;
console.log(year);
console.log(firstName);

const { firstName: name = [], haveGirlfriend: myGirl = false, sex = [] } = me;

console.log(name, myGirl, sex);

let a = 100;
let b = 200;
const numbers = { a: 2, b: 3, c: 5 };
console.log(a, b);
({ a, b } = numbers);
console.log(a, b);

const {
  table: {
    mon: { start: o },
  },
} = me;
console.log(`start: ${o}`);
*/

///////////////////////////////////
/*
//Destruction arrays
console.log(restaurant.order(2, 0));
const [starterIndex, mainIndex] = restaurant.order(2, 0);
console.log(starterIndex, mainIndex);
//result: Garlic  Bread Pizza

//can switch variable position
const arr = [2, 3, 4];
let [x, y, z] = arr;
console.log(x, y);
//result: 2 3

[x, y, z] = [z, x, y];
console.log(z, x, y);
//result: 3 4 2

//can add starter value
const [p = 1, q = 1, r = 0] = [8];
console.log(p, q, r);
//result: 8 1 0

//can name element of array in array
const arr2 = [2, 3, [4, 5]];
const [m, , [k, l]] = arr2;
console.log(m, k, l);
//result: 2 4 5
*/
