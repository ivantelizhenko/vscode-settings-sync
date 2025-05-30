"use strict";

function describeCountry(country, population, capitalCity) {
  let frase = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return frase;
}
console.log(describeCountry("Ukraine", 34, "Kiyv"));
describeCountry("German", 24, "Berlin");
describeCountry("Russia", 124, "Moscow");
