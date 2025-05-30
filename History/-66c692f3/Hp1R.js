'use strict';

const btns = document.querySelectorAll('.login__btn');
btns.forEach((btn, i, arr) => {
  btn.addEventListener('click', function (e) {
    const el = e.target.closest('.login__btn');
    if (el);
    //Remove all buttons
    arr.forEach(b => b.classList.remove('login__btn--active'));

    //Add for this
    btn.classList.add('login__btn--active');
    el.dataset.page === '1';
  });
});
