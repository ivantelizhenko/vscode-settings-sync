'use strict';
const findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => (a > b ? 1 : -1));

  const index = Math.ceil(arr.length / 2) - 1;
  if (arr.length % 2 !== 0) return arr.at(index);
  if (arr.length % 2 === 0) return (arr.at(index) + arr.at(index + 1)) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
