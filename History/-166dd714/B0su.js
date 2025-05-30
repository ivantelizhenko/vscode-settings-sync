import { lower } from "alphabet";
import { useState } from "react";

function convertToArr(string) {
  return string.split("");
}

// let output = "";

function searchPhrase(phrase) {
  const [output, setOutput] = useState("");

  const arr = convertToArr(phrase);

  for (const letter of arr) {
    for (let i = 0; i < lower.length; i++) {
      console.log(output + lower[i]);
      if (letter === " ") {
        setOutput((word) => (word += " "));
        break;
      }
      if (letter === lower[i]) {
        output += lower[i];
        break;
      }
    }
  }
}

searchPhrase("what phrase do u want");

// let i = 0;
// setInterval(() => {
//   ++i;
//   console.log(i);
// }, 1000);
