type x<T extends string | number = number> = T;

const a: x = "2";
console.log(a);
