export default function pivotInteger(n) {
  if (n < 7) return -1;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const length = arr.length;
  console.log(arr);
  console.log(length);
  const bigArr = [];

  for (let i = 0; i < arr.length - 1; i++) {}
  console.log(bigArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);
