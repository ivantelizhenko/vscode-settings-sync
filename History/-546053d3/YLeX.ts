function removeElement(nums: number[], val: number): number {
  nums.replaceAll(val, '_');

  return 5;
}

removeElement([3, 2, 2, 3], 3);
