'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('😑 No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('👌 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //When guess is wrog
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '👇 Too high!' : ' 👆 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const highscore = document.querySelector('.highscore').textContent;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;

  if (guess === secretNumber && highscore < score) {
    document.querySelector('.highscore').textContent = score;
  }

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
