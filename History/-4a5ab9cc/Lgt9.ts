function add(n1: number, n2: number) {
  return n1 + n2;
}

function printToConsole(num: number): void {
  console.log("Result " + num);
}

let x;
x = add;
// console.log(x);
// printToConsole(add(5, 2));

enum Test {
  FIRST,
  SECON,
}

const obj: { first: Test; second: number } = { first: Test.FIRST, second: 2 };

console.log(Test);
console.log(typeof obj.first);
