// type Combinable = number | string;
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

type ForExample1_1 = number | string;
type ForExample1_2 = "as-number" | "as-string";

function example1(arg1: ForExample1_1, arg2: ForExample1_2) {
  // function body
}

type ForExample2 = { var1: number; var2: string; var3: any[] };

function example2(arg: ForExample2) {
  // function body
}
