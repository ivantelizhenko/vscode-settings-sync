const arr1 = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];

const arr2 = [
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
];

export default function onesMinusZeros(arr) {
  const rows = arr.map(el => el);
  const columns = [];
  for (let i = 0; i < arr.length; i++) {
    columns.push(arr.map(el => el[i]));
  }

  const onesRows = rows.map(row => row.filter(number => number === 1).length);
  const onesColumns = columns.map(
    column => column.filter(number => number === 1).length
  );
  const zerosRows = rows.map(row => row.filter(number => number === 0).length);
  const zerosColumns = columns.map(
    column => column.filter(number => number === 0).length
  );

  console.log(`onesRows: ${onesRows}`);
  console.log(onesColumns);
  console.log(zerosRows);
  console.log(zerosColumns);
}

onesMinusZeros(arr1);
