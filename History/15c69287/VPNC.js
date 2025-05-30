const number = document.querySelector('.number');

//Timer
let time = 60;
number.textContent = time;
const timerFn = () => {
  if (time > 1) {
    --time;
    number.textContent = time;
  } else clearInterval(timer);
};
const timer = setInterval(timerFn, 1000);
timer;

//Border
const colors = ['ffbb00', '4bbb7d', 'fd424b', '7048e8'];
number.style.borderColor = `#${colors[0]}`;
