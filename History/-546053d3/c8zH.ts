function removeElement(nums: number[], val: number): number {
  const newNums = nums
    .toSorted((a, b) => (a > b ? 1 : -1))
    .map(number => (number === val ? '_' : number));

  const howWasVal = nums.join('').replaceAll(`${val}`, '').split('').length;
  console.log(howWasVal);
  console.log(newNums);
  return 5;
}

removeElement([3, 2, 2, 3], 3);
