function withThrow(): never {
  throw new Error("error here");
}

function withWhile(): never {
  while (true) {}
}

let number: number;
number = 340;

//comment
function add(n1: number, n2: number) {
  if (n1 + n2 > 10) {
    return n1 + n2;
  }
}

add(10, 10);
const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await res.json();

console.log(data);
const today = new Temporal.Now.plainDateISO();
