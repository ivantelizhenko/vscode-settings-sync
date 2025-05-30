/**
 * if T === string, x will be string
 * if T !== string, x will be any
 */
type x<T> = T extends string ? any : T;

/**
 * if T === object, x will be T
 * if T !== object, x will be any
 */
type y<T extends object> = T extends never ? any : T;

const a: x<number> = 2;
const b: y<Hey> = {};

interface Hey {
  title: string;
  description: string;
}
