type x<T extends string> = T;

const a: x<string> = 2;

console.log(a);
