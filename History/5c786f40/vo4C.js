"use strict";

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );
  return describeCountry;
}
describeCountry("Ukraine", 34, "Kiyv");
describeCountry("German", 24, "Berlin");
describeCountry("Poland", 24, "Warsaw");
