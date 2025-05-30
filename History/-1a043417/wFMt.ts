function combine(input1: number | string | [], input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + " and " + input2.toString();
  }
  return result;
}

const combinetAges = combine(14, 30);
console.log(combinetAges);
const combinetNames = combine("Anna", "Maria");
console.log(combinetNames);

// arg1 can be 'left' only
// arg2 can be 'blue' only
// arg3 can be 45 only
function example(arg1: "left" | "right", arg2: "blue", arg3: 45) {
  // function body
}
