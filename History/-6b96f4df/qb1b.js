import { lower } from "alphabet";

function convertToArr(string) {
  return string.split("");
}

let output = "";

function searchPhrase(phrase) {
  const arr = convertToArr(phrase);

  for (const letter of arr) {
    for (let i = 0; i < lower.length; i++) {
      console.log(output + lower[i]);

      if (letter === " ") {
        output += " ";
        break;
      }
      if (letter === lower[i]) {
        output += lower[i];
        break;
      }
    }
  }
}

// searchPhrase("what phrase do u want");

let i = 0;
let m = 0;
const arr = convertToArr("    ");

const id = setInterval(() => {
  if (arr[m] === " " || arr[m] === lower[i]) {
    output += arr[m] === " " ? " " : lower[i];
    i = 0;
    m++;
    console.log(output);
  }

  if (arr[m]) console.log(output + lower[i]);
  if (!lower[i + 1] || !arr[m]) clearInterval(id);

  i++;
}, 50);
