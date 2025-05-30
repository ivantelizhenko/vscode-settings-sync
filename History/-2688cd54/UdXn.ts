let userInput1: unknown;
let userInput2: any;
let userName1: string;
let userName2: string;

userInput1 = 5;
userInput2 = 5;
userInput1 = true;
userInput2 = true;
userInput1 = "Andrew";
userInput2 = "Andrew";
userName1 = userInput1;
/* ERROR */ userName2 = userInput2; // All right

// but:
if (typeof userInput1 === "string") {
  userName1 = userInput1;
}

console.log(userName1, userName2);
