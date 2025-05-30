import { useState } from "react";
import { lower } from "alphabet";

function convertToArr(string) {
  return string.split("");
}

// let output = "";
function Fun() {
  const [output, setOutput] = useState("");

  function searchPhrase(phrase) {
    const arr = convertToArr(phrase);

    for (const letter of arr) {
      for (let i = 0; i < lower.length; i++) {
        console.log(output + lower[i]);
        if (letter === " ") {
          setOutput((word) => (word += " "));
          break;
        }
        if (letter === lower[i]) {
          setOutput((word) => (word += lower[i]));
          break;
        }
      }
    }
  }

  searchPhrase("what phrase do u want");

  return <div></div>;
}

export default Fun;

// let i = 0;
// setInterval(() => {
//   ++i;
//   console.log(i);
// }, 1000);
