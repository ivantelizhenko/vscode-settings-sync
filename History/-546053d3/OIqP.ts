function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n > 0) {
    nums1 = [
      ...nums1.filter(number => number !== 0),
      ...nums2.filter(number => number !== 0),
    ].sort((a, b) => (a - b ? -1 : 1));
    console.log(nums1);
  }
}

merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3));
