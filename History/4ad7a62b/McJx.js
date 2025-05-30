// LECTURE: Values and Variables
/*
const myCountry = "Ukraine";
const myCountryContinent = "Eurasia";
let myCountyPopulation = 43;

console.log(myCountryContinent);
console.log(myCountyPopulation);
console.log(myCountry);
*/
// LECTURE: Data Types
/*
const isIsland = false;
const language = "English";
console.log(typeof isIsland);
console.log(typeof myCountry);
console.log(typeof myCountyPopulation);
console.log(typeof language);
*/
//myCountryPopulation = 50;
//console.log(myCountryPopulation);

// LECTURE: Basic Operators
/*
console.log(myCountyPopulation / 4);
myCountyPopulation++;
myCountyPopulation--;
console.log(myCountyPopulation);
console.log(myCountyPopulation > 6);
console.log(myCountyPopulation < 33);

let description =
  myCountry +
  " is in " +
  myCountryContinent +
  ", and it`s " +
  myCountyPopulation +
  " million people speake " +
  language +
  ".";
console.log(description);

console.log(myCountyPopulation);
*/
// LECTURE: Strings and Template Literals
/*
description = `${myCountry} is in ${myCountryContinent}, and it's ${myCountyPopulation} million people speake ${language}.`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
myCountyPopulation = 43;
if (myCountyPopulation >= 33) {
  console.log(`Ukraine's population is above average`);
} else {
  const average = 33 - myCountyPopulation;
  console.log(`Ukraine's population is ${average} above average`);
}
*/
// CHALLENGE 2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

 //Write your code below. Good luck! 🙂 

if (BMIMark <= BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) ! `);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) !`);
}
*/

//LECTURE: Type Conversion and Coercion
/*
"9" - "5"; // = 4 - number
"19" - "13" + "17"; // = 617 - string
"19" - "13" + 17; // = 23 - number
"123" < 57; // = false -- boolean
5 + 6 + "4" + 9 - 4 - 2; // = 1143 - number
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/

//LECTURE: Equality Operators: == vs. ===
/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours >= 1) {
  console.log("More than 1 border");
} else if (numNeighbours === 0) {
  console.log("No borders");
}
*/

//LECTURE: Logical Operators
/*
// language =  english
//population = <50kk
// island = not island

if (language === "English" && myCountyPopulation <= 50 && !isIsland) {
  console.log("You should live in Ukraine:)");
} else {
  console.log("Ukraine does not meet your criteria :(");
}
*/

// CHALLENGE 3
/*
const koalas1 = 97;
const koalas2 = 112;
const koalas3 = 101;
const dolphins1 = 109;
const dolphins2 = 95;
const dolphins3 = 106;

const koalasScore = (97 + 112 + 90) / 3;
const dolphinsScore = (109 + 95 + 90) / 3;
console.log(`Koalas: ${koalasScore}`, `Dolphines: ${dolphinsScore}`);

if (koalasScore  === dolphinsScore && koalasScore > 100 && dolphinsScore > 100) {
  console.log("You have a draw!");
} else if (koalasScore > dolphinsScore && koalasScore > 100) {
  console.log("Koalas wins!");
} else if (koalasScore < dolphinsScore && dolphinsScore > 100) {
  console.log("Dolphins wins!");
} else {
  console.log("you both lost(");
}
*/

//CHALLENGE OG THE VIDEO
/*
const day = 5;

if (day === 1) {
  console.log("Monday!");
} else if (day === 2) {
  console.log("Tuesday!");
} else if (day === 3) {
  console.log("Wednesday!");
} else if (day === 4) {
  console.log("Thursday!");
} else {
  console.log("the day is not found!");
}
*/

//LECTURE: The switch Statement
/*
let language;
language = "Mandarin";

switch (language) {
  case "China":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3nd place!");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
