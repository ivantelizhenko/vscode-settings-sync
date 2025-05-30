"use strict";

function describeCountry(country, population, capitalCity) {
  let frase = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return frase;
}
console.log(describeCountry("Ukraine", 34, "Kiyv"));
console.log(describeCountry("German", 24, "Berlin"));
console.log(describeCountry("Russia", 124, "Moscow"));
