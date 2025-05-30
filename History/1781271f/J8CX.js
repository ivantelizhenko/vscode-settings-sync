'use strict';

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const inputGuess = document.querySelector('.guess');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let gameAvailable = true;

const randomNumber = Math.trunc(Math.random() * 20 + 1);

const youWin = () => {
  if (gameAvailable) {
    document.body.style.backgroundColor = '#60b347';
    number.textContent = randomNumber;
    message.textContent = '🏆 Correct answer!';
    if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    }
    gameAvailable = false;
  }
};

const youLose = () => {
  if (gameAvailable) {
    message.textContent = '😔You lose...';
    gameAvailable = false;
    score.textContent = 0;
  }
};

let caclScore = 5;

btnCheck.addEventListener('click', function () {
  if (gameAvailable) {
    const input = Number(inputGuess.value);
    score.textContent = caclScore;
    if (input === randomNumber && input !== 0) {
      youWin();
    } else if (input === 0) {
      message.textContent = '⛔️ Not a Number';
      caclScore > 1 ? caclScore-- : youLose();
      score.textContent = caclScore;
    } else {
      message.textContent = input > randomNumber ? '📈Too high' : '📉Too low';
      caclScore > 1 ? caclScore-- : youLose();
      score.textContent = caclScore;
    }
  }
});

btnAgain.addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  gameAvailable = true;
  document.body.style.backgroundColor = '#';
});
