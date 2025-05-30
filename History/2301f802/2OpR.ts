type x<T extends string | number = number> = T;

const a: x = "2"; // ERROR
const a: x = 2; // OK
const b: x<string> = "2"; // OK
const b: x<number> = 2; // OK

console.log(a, b);
