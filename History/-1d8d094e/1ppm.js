'use strict';
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// const twoSum = function (nums, target) {
//   let newArr = [];
//   const newNums = nums.map(el => el);

//   newNums.forEach((el, i, arr) => {
//     arr.fill('', i, i + 1);

//     for (let m = 0; m < newNums.length; m++) {
//       if (!arr[m]) continue;
//       if (el + arr[m] === target) {
//         console.log(nums.indexOf(el), nums.indexOf(arr[m]));
//       }
//     }
//   });
//   return newArr;
// };

// // console.log(twoSum([2, 7, 11, 15], 9));
// // console.log(twoSum([3, 2, 4], 6));
// // console.log(twoSum([3, 3], 6));

// // twoSum([2, 7, 11, 15], 9);
// // twoSum([3, 2, 4], 6);
// // twoSum([3, 7, 3], 6);

// const twoSum2 = function (nums, target) {
//   const newNums = nums.map(el => el);

//   nums.map((el, i, arr) => {
//     // if (el === arr.at(-1)) return;

//     for (let m = 0; m < newNums.length; m++) {
//       // el + newNums[m] === target ? console.log('YES') : console.log('No');

//       console.log(`MAIN EL: ${el}`);
//       console.log(`TRY: ${newNums[m]}`);
//     }
//   });
// };

// // twoSum2([2, 7, 11, 15], 9);
// // twoSum2([3, 2, 4], 6);
// twoSum2([3, 7, 3], 6);
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

const findNums = function (findArr, goal) {
  const resultArr = [];
  findArr.forEach((el, index, arr) => {
    if (index + 1 === arr.length) return;

    for (let i = 1; i < arr.length; i++) {
      if (!arr[i + index]) break;
      el + arr[i + index] === goal ? resultArr.push(el, arr[i + index]) : '';
    }
  });

  return resultArr;
};

const findIndex = function (mainArr, findArr) {
  const twoIndex = [];

  findArr.forEach(el => {
    const index = mainArr.findIndex(arrEl => arrEl === el);

    if (twoIndex.includes(index)) {
      mainArr.fill('', index, index + 1);
    }

    const find = mainArr.findIndex(arrEl => arrEl === el);
    twoIndex.push(find);
  });

  return twoIndex;
};

const twoSum = function (nums, target) {
  // 1) Знайти ці два числа
  const twoNums = findNums(nums, target);
  console.log(twoNums);

  // 2) Знайти їхні індекси в nums
  const twoIndex = findIndex(nums, twoNums);

  // twoNums.forEach(el => {
  //   const index = nums.findIndex(arrEl => arrEl === el);

  //   if (twoIndex.includes(index)) {
  //     console.log(nums);
  //     nums.fill('', index, index + 1);
  //   }

  //   const find = nums.findIndex(arrEl => arrEl === el);
  //   twoIndex.push(find);
  // });

  console.log(twoIndex);
};

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
