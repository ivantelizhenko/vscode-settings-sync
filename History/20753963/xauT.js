export default function pivotInteger(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const length = arr.length;
  console.log(arr);
  console.log(length);
  const bigArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 2; j < arr.length; j++) {
      bigArr.push(
        arr.slice(i, j).reduce((curr, acc) => curr + acc),
        0
      );
    }
  }
  console.log(bigArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);
