'use strict';

console.log('    T'); // 1 => 5
console.log('   TTT'); // 3 => 6
console.log('  TTTTT'); // 5 => 7
console.log(' TTTTTTT'); // 7 => 8
console.log('TTTTTTTTT'); // 9 => 9

console.log('    5'); // 1 => 5
console.log('   555'); // 3 => 6
console.log('  55555'); // 5 => 7
console.log(' 5555555'); // 7 => 8
console.log('555555555'); // 9 => 9

console.log('    *'); // 1 => 5
console.log('   ***'); // 3 => 6
console.log('  *****'); // 5 => 7
console.log(' *******'); // 7 => 8
console.log('**********'); // 9 => 9
const pyramid = function (height, symbol) {
  const arr = Array.from({ length: height }, (_, i) => i * 2 + 1);
  const newArr = arr
    .map(el => symbol.padStart(el, symbol))
    .forEach((el, i) => console.log(el.padStart(height + i)));
  newArr.forEach((el, i) => console.log(el.padStart(height + i)));
};

pyramid(5, '*');
