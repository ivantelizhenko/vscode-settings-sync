function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n > 0) {
    nums1 = [
      ...nums1.filter(number => number !== 0),
      ...nums2.filter(number => number !== 0),
    ];
    nums1.sort((a, b) => (a < b ? -1 : 1));
    console.log(nums1);
  } else nums1;
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
merge([1], 1, [0], 0);
