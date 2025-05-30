export default function minimumOperations(root) {
  console.log(root);
  let i = 0;
  let j = 0;
  const newArr = root.sort((a, b) => {
    if (a === null || b === null) return;
    if (a < b) {
      i++;
      return 1;
    } else {
      j++;
      return -1;
    }
  });
  console.log(newArr);
  console.log(i, j);
}

// minimumOperations([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]);
minimumOperations([1, 3, 2, 7, 6, 5, 4]);
// minimumOperations([1, 2, 3, 4, 5, 6]);
