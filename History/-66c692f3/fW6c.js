'use strict';

const btns = document.querySelectorAll('.login__btn');
const window1Main = document.querySelector('.login__main');
const window2Main = document.querySelector('.login__main--second');
const window1Aside = document.querySelector('.login__aside');

btns.forEach((btn, i, arr) => {
  btn.addEventListener('click', function (e) {
    const el = e.target.closest('.login__btn');
    if (el);
    //Remove all buttons
    arr.forEach(b => b.classList.remove('login__btn--active'));

    //Add for this
    btn.classList.add('login__btn--active');
    if (!+el.dataset.page) {
      console.log('yes');
      window1Main.classList.remove('hidden--main');
      window2Main.classList.add('hidden--main');
      window1Aside.classList.remove('hidden--aside');
    } else {
    }
  });
});
