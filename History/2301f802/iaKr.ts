type x<T extends string | number = number> = T;

const a: x = "2"; // ERROR
const b: x<string> = "2"; // ERROR
console.log(a);
