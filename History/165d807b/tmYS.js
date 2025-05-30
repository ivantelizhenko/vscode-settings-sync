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
