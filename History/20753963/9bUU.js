export default function pivotInteger(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const bigArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      bigArr.push(
        arr.slice(i, j).reduce((curr, acc) => curr + acc),
        0
      );
    }
  }
  // console.log(bigArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);

const xxxx = [1, 2, 3, 4, 5, 6, 7];
console.log(xxxx.slice(0, 2));
