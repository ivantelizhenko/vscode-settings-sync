type x<T> = T extends unknown ? string : never;

const x = "hey";

console.log(typeof x);
