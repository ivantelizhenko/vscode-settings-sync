type x<T extends string = string> = T;

const a: x<string> = 2;
console.log(a);
