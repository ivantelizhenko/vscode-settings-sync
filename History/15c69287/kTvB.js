const number = document.querySelector('.number');
const container = document.querySelector('.container');
//Timer
let time = 60;
let numberPosition = 0;
let containerPosition = 0;
number.textContent = time;
const timerFn = () => {
  if (time > 1) {
    --time;
    number.textContent = time;
    rotate();
  } else clearInterval(timer);
};
const timer = setInterval(timerFn, 1000);

//Border
const rotate = (rotateNumber = 90, rotateContainer = 89) => {
  console.log(numberPosition, containerPosition);
  console.log(rotateNumber, rotateContainer);
  numberPosition -= rotateNumber;
  containerPosition += rotateContainer;
  number.style.transform = `rotate(${numberPosition}deg)`;
  container.style.transform = `rotate(${containerPosition++}deg)`;
};

// const rotate = '';
