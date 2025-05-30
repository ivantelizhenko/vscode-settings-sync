'use strict';

const img = document.querySelector('.img-fan');
const btnOn = document.querySelector('.btn--on');
const btnOff = document.querySelector('.btn--off');
const btnSpeed1 = document.querySelector('.btn--speed1');
const btnSpeed2 = document.querySelector('.btn--speed2');
const btnSpeed3 = document.querySelector('.btn--speed3');

const startFan = function (className, seconds, eventTarget = e) {
  const btn = eventTarget.target.closest(className);
  if (!btn) return;
  img.style.animation = `rotate ${seconds}s infinite linear`;
};

btnOn.addEventListener('click', function (e) {
  startFan('.btn--on', 3);
});
console.log(img);
