import { lower } from "alphabet";

function convertToArr(string) {
  return string.split("");
}

// function searchPhrase(phrase) {
//   const arr = convertToArr(phrase);

//   for (const letter of arr) {
//     for (let i = 0; i < lower.length; i++) {
//       console.log(output + lower[i]);

//       if (letter === " ") {
//         output += " ";
//         break;
//       }
//       if (letter === lower[i]) {
//         output += lower[i];
//         break;
//       }
//     }
//   }
// }

// // searchPhrase("what phrase do u want");

let output = "";

let i = 0;
let m = 0;
const arr = convertToArr("havana");

const id = setInterval(() => {
  console.log(arr[m] === lower[i]);
  console.log(arr[m], arr[i]);
  if (arr[m] === lower[i]) {
    m++;
    output += lower[i];
    i = 0;
    console.log(output);
  }
  if (arr[m] === " ") {
    i = 0;
    m++;
    output += " ";
    console.log(output);
  }

  // if (arr[m] === "a" && lower[i] === "a") {
  //   output += lower[i];
  //   i = 0;
  //   m++;
  //   console.log(output);
  // }

  // if (arr[m] ?? false) console.log(output + lower[i]);
  if (!lower[i + 1] || !arr[m]) clearInterval(id);

  i++;
}, 100);
