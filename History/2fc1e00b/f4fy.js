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
  let obj = {};

  arr.forEach((el, i) => {
    if (obj.length % 2 === 1) obj;
    if (i % numRows === 0) obj[0].push(el);
    if (i % numRows === 1) obj[1].push(el);
    if (i % numRows === 2) obj[2].push(el);
  });

  const newArr = Object.values(obj).flat().join('');

  console.log(newArr);
  return newArr;
};

convert('PAYPALISHIRING', 3);
// convert('PAYPALISHIRING', 4);
// convert('A', 1);
