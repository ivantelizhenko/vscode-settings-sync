export default function pivotInteger(n) {
  const sumArr = Array.from({ length: n }, (el, i) => el + i);
  console.log(sumArr);
}

pivotInteger(8);
// pivotInteger(1);
// pivotInteger(4);
