export default function pivotInteger(n) {
  const sumArr = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (curr, acc) => curr + acc,
    0
  );
  console.log(sumArr);
}

pivotInteger(1000);
// pivotInteger(1);
// pivotInteger(4);
