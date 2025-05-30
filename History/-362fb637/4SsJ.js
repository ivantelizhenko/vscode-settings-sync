'use strict';

const img = document.querySelector('.img-fan');
const btnOn = document.querySelector('.btn--on');
const btnOff = document.querySelector('.btn--off');
const btnSpeed1 = document.querySelector('.btn--speed1');
const btnSpeed2 = document.querySelector('.btn--speed2');
const btnSpeed3 = document.querySelector('.btn--speed3');

const startFan = function (className, seconds, eventTarget) {
  const btn = eventTarget.target.closest(className);
  if (!btn) return;
  img.style.animation = `rotate ${seconds}s infinite linear`;
};

let sec = 3;

btnOn.addEventListener('click', function (e) {
  startFan('.btn--on', sec, e);
});
btnSpeed1.addEventListener('click', function (e) {
  startFan('.btn--speed1', 2, e);
});
btnSpeed2.addEventListener('click', function (e) {
  startFan('.btn--speed2', 1.5, e);
});
btnSpeed3.addEventListener('click', function (e) {
  startFan('.btn--speed3', 1, e);
});
btnOff.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn--off');
  if (!btn) return;
  img.style.animation = `none`;
});
