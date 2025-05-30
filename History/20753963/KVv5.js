export default function pivotInteger(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const bigArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      bigArr.push(
        arr.reduce((curr, acc) => curr + acc),
        0
      );
    }
  }
  console.log(bigArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);
