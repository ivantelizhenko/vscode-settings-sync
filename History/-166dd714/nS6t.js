import alphabet from "alphabet";

function convertToArr(string) {
  return string.split("");
}

const { lower } = alphabet;

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

searchPhrase("what phrase do u want");

// let i = 0;
// setInterval(() => {
//   ++i;
//   console.log(i);
// }, 1000);
