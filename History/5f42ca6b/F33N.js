'use strict';

const btnOpenModal = document.querySelector('btn__show--modal');
const btnCloseModal = document.querySelector('.btn__close');
const btnNext = document.querySelector('.btn__next');
const modalWindow = document.querySelector('.modal');

const showModal = function () {
  modalWindow.style.display = 'block';
  document.body.style.filter = 'blur(20px)';
  console.log('hey');
};
showModal();
