'use strict';

const pyramid = function (height, symbol) {
  if (symbol.length !== 1) console.log('You must write 1 length symbol ');
  const arr = Array.from({ length: height }, (_, i) => i * 2 + 1);
  const newArr = arr.map(el => symbol.padStart(el, symbol));
  newArr.forEach((el, i) => console.log(el.padStart(height + i)));
};

pyramid(5, '*');
pyramid(7, 'T');
pyramid(3, '3');
pyramid(8, 'M');
pyramid(15, 'mmmmm');
