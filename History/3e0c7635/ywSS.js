// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// const x = 23;

// if (x === 23) console.log(x);

// const one = [1, 2, 3, 4, 5];
// const two = [6, 7, 8, 9, 0];
// const three = one.concat(two);
// console.log(three);

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];
const arr3 = [];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const create = `${arr[i]}ºC in ${i + 1} days`;
    arr3.push(create);
  }
  return arr3;
};
console.table(printForecast(arr2));
