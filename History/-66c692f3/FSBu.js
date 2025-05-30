'use strict';

const btn = document.querySelectorAll('.login__btn');
btn.forEach(btn =>
  btn.addEventListener('click', function (e) {
    if (e.target.closest('.login__btn'));
    btn.classList.toggle('.login__btn--active');
  })
);
