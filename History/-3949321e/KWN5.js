'use strict';
const findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => (a > b ? 1 : -1));

  console.log(arr);
};

findMedianSortedArrays([1, 3], [2]);
// findMedianSortedArrays([1, 2], [3, 4]);
