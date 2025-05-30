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
  if (sec !== 3) return;
  startFan('.btn--on', sec, e);
});
btnSpeed1.addEventListener('click', function (e) {
  sec = 2;
  startFan('.btn--speed1', sec, e);
});
btnSpeed2.addEventListener('click', function (e) {
  sec = 1.5;
  startFan('.btn--speed2', sec, e);
});
btnSpeed3.addEventListener('click', function (e) {
  sec = 1;
  startFan('.btn--speed3', sec, e);
});
btnOff.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn--off');
  if (!btn) return;
  img.style.animation = `none`;
});
