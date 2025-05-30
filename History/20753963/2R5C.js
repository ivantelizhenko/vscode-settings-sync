export default function pivotInteger(n) {
  const sumArr = Array.from({ length: n }, i => {
    i + 1;
  });
  console.log(sumArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);
