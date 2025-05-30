'use strict';

const btns = document.querySelectorAll('.login__btn');
btns.forEach(btn =>
  btn.classList.add('login__btn--active')
  btn.addEventListener('click', function (e) {
    if (e.target.closest('.login__btn'));
    btn.classList.add('login__btn--active');
  }))
);
