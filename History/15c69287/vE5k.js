const number = document.querySelector('.number');
const container = document.querySelector('.container');
//Timer
let time = 60;
let numberPosition = 0;
let containerPosition = -0;
number.textContent = time;
const timerFn = () => {
  if (time > 1) {
    --time;
    number.textContent = time;
    // rotate();
  } else clearInterval(timer);
};
// const timer = setInterval(timerFn, 1000);

//Border
const colors = ['ffbb00', '4bbb7d', 'fd424b', '7048e8'];
// number.style.borderTopColor = `#${colors[0]}`;
// number.style.borderBottomColor = `#${colors[1]}`;
// number.style.borderLeftColor = `#${colors[2]}`;
// number.style.borderRightColor = `#${colors[3]}`;
const rotate = (rotateNumber = -90, rotateContainer = 90) => {
  number.style.transform = `rotate(${rotateNumber}deg)`;
  container.style.transform = `rotate(${rotateContainer++}deg)`;
};
// rotate();
