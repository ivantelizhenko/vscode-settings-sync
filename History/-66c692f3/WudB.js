'use strict';

const btns = document.querySelectorAll('.login__btn');
btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    btn.classList.remove('login__btn--active');
    if (e.target.closest('.login__btn'));
    e.target.closest('.login__btn').classList.add('login__btn--active');
  });
});
