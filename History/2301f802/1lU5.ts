type x<T> = T extends string ? number : never;

const x = "hey";

console.log(typeof x);
