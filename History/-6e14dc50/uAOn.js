'use strict';

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    items.forEach(item => item.classList.remove('open'));
    e.target.closest('.item').classList.add('open');
  });
});
