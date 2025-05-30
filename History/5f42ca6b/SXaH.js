'use strict';

const btnOpenModal = document.querySelector('btn__show--modal');
const btnCloseModal = document.querySelector('.btn__close');
const btnNext = document.querySelector('.btn__next');
const modalWindow = document.querySelector('.modal');

btnOpen.addEventListener('click', function (e) {
  e.preventDefault();

  modalWindow..display = 'block';
  console.log('heey');
});