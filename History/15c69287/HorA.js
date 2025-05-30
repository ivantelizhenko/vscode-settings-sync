const number = document.querySelector('.number');
const container = document.querySelector('.container');
//Timer
let time = 60;
number.textContent = time;
const timerFn = () => {
  if (time > 1) {
    --time;
    number.textContent = time;
  } else clearInterval(timer);
};
// const timer = setInterval(timerFn, 1000);

//Border
const colors = ['ffbb00', '4bbb7d', 'fd424b', '7048e8'];
// number.style.borderTopColor = `#${colors[0]}`;
// number.style.borderBottomColor = `#${colors[1]}`;
// number.style.borderLeftColor = `#${colors[2]}`;
// number.style.borderRightColor = `#${colors[3]}`;
const rotate = (number, container) => {
  console.log(number, container);
  number.style.transform = `rotate(${number}deg)`;
  container.style.transform = `rotate(${container}deg)`;
};
rotate(-90, 90);
