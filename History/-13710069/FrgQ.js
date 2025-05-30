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

  // let diff = [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0],
  // ];

  // diff[0][0] = onesRows[0] + onesColumns[0] - zerosRows[0] - zerosColumns[0];
  // diff[0][1] = onesRows[0] + onesColumns[1] - zerosRows[0] - zerosColumns[1];
  // diff[0][2] = onesRows[0] + onesColumns[2] - zerosRows[0] - zerosColumns[2];
  // diff[1][0] = onesRows[1] + onesColumns[0] - zerosRows[1] - zerosColumns[0];
  // diff[1][1] = onesRows[1] + onesColumns[1] - zerosRows[1] - zerosColumns[1];
  // diff[1][2] = onesRows[1] + onesColumns[2] - zerosRows[1] - zerosColumns[2];
  // diff[2][0] = onesRows[2] + onesColumns[0] - zerosRows[2] - zerosColumns[0];
  // diff[2][1] = onesRows[2] + onesColumns[1] - zerosRows[2] - zerosColumns[1];
  // diff[2][2] = onesRows[2] + onesColumns[2] - zerosRows[2] - zerosColumns[2];

  const diff = [];

  for (let i = 0; i < rows.length; i++) {
    let arr = [[], [], []];
    for (let m = 0; m < columns.length; m++) {
      arr[i] = onesRows[i] + onesColumns[m] - zerosRows[i] - zerosColumns[m];
    }
  }

  // console.log(arr);
  // console.log(diff);
}

onesMinusZeros(arr1);
