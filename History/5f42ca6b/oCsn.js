'use strict';

const btnClose = document.querySelector('.btn__close');
const btnNext = document.querySelector('.btn__next');
const btnOpen = document.querySelector('header__btn');
const modalWindow = document.querySelector('.modal');

btnOpen.addEventListener('click', function () {
  modalWindow.computedStyleMap.display = '';
});
