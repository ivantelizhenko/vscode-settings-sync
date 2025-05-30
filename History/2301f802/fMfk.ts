/**
 * if T === string, x will be string
 * if T !== string, x will be any
 */
type x<T> = T extends string ? any : T;

const a: x<number> = 2;
