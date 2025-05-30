/**
 * if T === string, x will be string
 * if T !== string, x will be any
 */
type x<T> = T extends string ? any : T;

const a: x = "2"; // ERROR
const b: x = 2; // OK
const c: x<string> = "2"; // OK
const d: x<number> = 2; // OK

console.log(a, b, c, d);
