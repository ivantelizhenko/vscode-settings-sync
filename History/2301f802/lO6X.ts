type x<T> = T extends string ? "1" : "2";

const x = "hey";

console.log(typeof x);
