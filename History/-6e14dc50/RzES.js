'use strict';

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
