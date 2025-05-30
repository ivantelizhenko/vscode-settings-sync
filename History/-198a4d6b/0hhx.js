export default function minimumOperations(root) {
  console.log(root);
  const newArr = root.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  console.log(newArr);
}

minimumOperations([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]);
// minimumOperations([1, 3, 2, 7, 6, 5, 4]);
// minimumOperations([1, 2, 3, 4, 5, 6]);
