'use strict';

const btns = document.querySelectorAll('.login__btn');
btns.forEach((btn, i, arr) => {
  btn.addEventListener('click', function (e) {
    if (e.target.closest('.login__btn'));
    //Remove all buttons
    arr.forEach(b => b.classList.remove('login__btn--active'));

    //Add for this
    btn.classList.add('login__btn--active');

    console.log(e.target.closest('.login__btn'));
  });
});
