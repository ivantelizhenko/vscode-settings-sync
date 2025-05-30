"use strict";
//LECTURE: Functions
/*
function describeCountry(country, population, capitalCity) {
  const frase = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return frase;
}
console.log(describeCountry("Ukraine", 34, "Kiyv"));
console.log(describeCountry("German", 24, "Berlin"));
console.log(describeCountry("Russia", 124, "Moscow"));
*/

//LECTURE: Function Declarations vs. Expressions
/*
//Function Declarations
function percentageOfWorld(country, population) {
  const percentage = `${population}` / 79;
  const frase = `${country} has ${population} million people, so it's ${percentage} of the world population.`;
  return frase;
}

const percentageOfWorldUa = percentageOfWorld(`Ukraine`, 79);
console.log(percentageOfWorldUa);
const percentageOfWorldPo = percentageOfWorld(`Poland`, 158);
console.log(percentageOfWorldPo);
const percentageOfWorldSp = percentageOfWorld(`Spain`, 237);
console.log(percentageOfWorldSp);

//Function Expression
const percentageOfWorld1 = function (country, population) {
  const percentage = `${population}` / 79;
  const frase = `${country} has ${population} million people, so it's ${percentage} of the world population.`;
  return frase;
};

console.log(percentageOfWorld1(`Ukraine`, 79));
console.log(percentageOfWorld1(`Poland`, 158));
console.log(percentageOfWorld1(`Spain`, 237));
*/

//LECTURE: Arrow Functions
/*
const percentageOfWorld1 = (country, population) => {
  const percentage = `${population}` / 79;
  const frase = `${country} has ${population} million people, so it's ${percentage} of the world population.`;
  return percentage;
};
*/
// console.log(percentageOfWorld1(`Ukraine`, 79));
// console.log(percentageOfWorld1(`Poland`, 158));
// console.log(percentageOfWorld1(`Spain`, 237));

//LECTURE: Functions Calling Other Functions
// we borow a function from "LECTURE: Arrow Function"
/*
function describePopulation(country, population) {
  const frase = `${country} has ${population} million people, which is about ${percentageOfWorld1(
    country,
    population
  )}% of the world.
  )`;
  return frase;
}
console.log(describePopulation(`China`, 158));
*/

//Coding Challenge #1
/*
let calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    return `${avgDolhins}, ${avgKoalas}`;
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    return `${avgDolhins}, ${avgKoalas}`;
  } else {
    console.log(`Nobody has won :/`);
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    return `${avgDolhins}, ${avgKoalas}`;
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    return `${avgDolhins}, ${avgKoalas}`;
  } else {
    console.log(`Nobody has won :/`);
  }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

// LECTURE: Introduction to Arrays
/*
const populations = [79, 158, 39.5, 237];

// populations =
//   populations.length >= 4 ? console.log(`true`) : console.log(`false`);

const percentage = (number) => number / 79;

let percentages = [
  percentage(populations[0]),
  percentage(populations[1]),
  percentage(populations[2]),
  percentage(populations[3]),
];

console.log(percentages);
*/

//LECTURE: Basic Array Operations (Methods)
/*
const neighbours = [
  "Russia",
  "Romania",
  "Poland",
  "Slovakia",
  "Moldova",
  "Belarus",
  "Hungary",
];

neighbours.push(`Utopia`);
console.log(neighbours);
neighbours.pop(`Utopia`);
console.log(neighbours);

german = neighbours.includes(`German`)
  ? console.log(`It's fine!`)
  : console.log("Probably not a central European country :D");

neighbours[neighbours.indexOf(`Belarus`)] = `Swedan`;
console.log(neighbours[5]);
*/

//Coding Challenge #2
// let bill = prompt(`how much money do u need to pay?`);
// bill = Number(bill);
/*
const bills = [125, 555, 44];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, total);
*/

//Challenge from video "Dot vs. Bracket Notation"
/*
const jonas = {
  firstName: `Jonas`,
  friends: [`Michael`, `Bob`, `Mark`],
};

console.log(
  `${jonas["firstName"]} has ${jonas["friends"].length} friends, and his best friend is called ${jonas["friends"][0]}. `
);
*/

//LECTURE: Introduction to Objects
/*
const myCountry = {
  country: `Ukraine`,
  capital: `Kiyv`,
  language: "Ukraine",
  population: 32,
  neighbours: [
    "Russia",
    "Romania",
    "Poland",
    "Slovakia",
    "Moldova",
    "Belarus",
    "Hungary",
  ],
};
*/
//LECTURE: Dot vs. Bracket Notation
/*
const infoMyCountry = `${myCountry.country} has ${myCountry.population} ukrainian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `;
//console.log(infoMyCountry);
*/
//test
/*
jonas = {
  birthAge: 1991,
  calcAge: function () {
    this.age = 2037 - this.birthAge;
    return this.age;
  },
};
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas);
*/

//LECTURE: Object Methods
/*
const myCountry = {
  country: `Ukraine`,
  capital: `Kiyv`,
  language: "Ukraine",
  population: 32,
  neighbours: [
    "Russia",
    "Romania",
    "Poland",
    "Slovakia",
    "Moldova",
    "Belarus",
    "Hungary",
  ],
  describe: function () {
    return `${this.country} has ${this.population} ukrainian-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. `;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry.describe(), myCountry.checkIsland());
*/

//Challenge 3
/*
const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(john.calcBMI(), mark.calcBMI());

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
  );
}
*/

//LECTURE: Iteration: The for Loop
/*
for (let rep = 1; rep <= 50; rep++)
  console.log(`Voter number ${rep} is currently voting:`);
*/

//LECTURE: Looping Arrays, Breaking and Continuing
/*
const populations = [79, 158, 39.5, 237];
const persentages = [];
const persentageOfWorld = (x) => x / 79;
for (let i = 0; i < populations.length; i++) {
  persentages.push(persentageOfWorld(populations[i]));
}
console.log(persentages);
*/

//LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    for (let n = 1; (n = x); n++)
      console.log(`Neighbour ${n}:${listOfNeighbours[i][x]}`);
  }
}
