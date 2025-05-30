function removeElement(nums: number[], val: number): number {
  const newNums = nums
    .filter(number => number !== val)
    .toSorted(a => (typeof a !== 'number' ? 1 : -1));
  // .map(number => (number === val ? '_' : number))

  const howWasVal = nums.join('').replaceAll(`${val}`, '').split('').length;

  return howWasVal;
}

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
