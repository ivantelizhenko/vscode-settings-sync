'use strict';

const img = document.querySelector('.img-fan');
const btnOn = document.querySelector('.btn--on');

const rotate = getComputedStyle(document.documentElement).getPropertyValue(
  'rotate'
);
