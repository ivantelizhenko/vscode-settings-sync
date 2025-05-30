type x<T> = T extends string ? "1" : "2";

const x: x<string> = "1";

console.log(typeof x);
