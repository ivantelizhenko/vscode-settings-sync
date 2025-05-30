type Combinable = number | string;
function combine(input1: Combinable | [], input2: Combinable) {
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
