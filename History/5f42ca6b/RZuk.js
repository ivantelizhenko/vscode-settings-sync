'use strict';

const btnOpenModal = document.querySelector('btn__show--modal');
const btnCloseModal = document.querySelector('.btn__close');
const btnNext = document.querySelector('.btn__next');
const modalWindow = document.querySelector('.modal');

const showModal = function () {
  modalWindow.style.display = 'block';
  document.body.addEventListener('click', e => {
    e.preventDefault();
    modalWindow.style.display = 'none';
  });
};

btnOpenModal.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', e => {
  e.preventDefault();
  modalWindow.style.display = 'none';
});
