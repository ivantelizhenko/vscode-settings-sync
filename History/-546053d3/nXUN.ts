function removeElement(nums: number[], val: number): number {
  const newNums = nums
    .join(' ')
    .replaceAll(`${val}`, '_')
    .split(' ')
    .sort(a => (typeof a === 'number' ? 1 : -1));

  console.log(newNums);
  return 5;
}

removeElement([3, 2, 2, 3], 3);
