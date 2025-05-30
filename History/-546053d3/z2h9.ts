function removeElement(nums: number[], val: number): number {
  nums.join(' ').replaceAll(`${val}`, '_');

  return 5;
}

removeElement([3, 2, 2, 3], 3);
