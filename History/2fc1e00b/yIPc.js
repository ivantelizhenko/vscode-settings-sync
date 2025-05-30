// const number = document.querySelector('.number');
// const container = document.querySelector('.container');

// //Timer
// let time = 60;
// let numberPosition = 0;
// let containerPosition = 0;
// number.textContent = time;
// const timerFn = () => {
//   if (time > 1) {
//     --time;
//     number.textContent = time;
//     rotate();
//   } else clearInterval(timer);
// };
// const timer = setInterval(timerFn, 1000);

// //Border
// const rotate = (rotateNumber = 90, rotateContainer = 89) => {
//   numberPosition -= rotateNumber;
//   containerPosition += rotateContainer;
//   number.style.transform = `rotate(${numberPosition}deg)`;
//   container.style.transform = `rotate(${containerPosition++}deg)`;
// };

const convert = function (s, numRows) {
  const arr = s.split('');
  const obj = { 0: [], 1: [], 2: [] };
  arr.forEach((el, i) => {
    if (i % 3 === 0) obj[0].push(i);
    if (i % 3 === 1) obj[1].push(i);
    if (i % 3 === 2) obj[2].push(i);
  });
  console.log(obj);
  return [...obj];
};

convert('PAYPALISHIRING', 3);
// convert('PAYPALISHIRING', 4);
// convert('A', 1);
