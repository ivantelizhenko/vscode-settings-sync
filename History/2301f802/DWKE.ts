type x<T extends string = number> = T;

const a: x<string> = 2;
console.log(a);
