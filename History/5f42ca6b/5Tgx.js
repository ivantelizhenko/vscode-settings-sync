'use strict';

const btnOpenModal = document.querySelector('.btn__show--modal');
const btnCloseModal = document.querySelector('.btn__close');
const btnNext = document.querySelector('.btn__next');
const modalWindow = document.querySelector('.modal');

const showModal = function (e) {
  e.preventDefault();
  modalWindow.style.display = 'block';
  modalWindow.style.display = 'fixed';
};

btnOpenModal.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.style.display = 'none';
});

// document.body.addEventListener('click', e => {
//   e.preventDefault();
//   modalWindow.style.display = 'none';
// });
