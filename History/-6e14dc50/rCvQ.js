'use strict';

const items = document.querySelectorAll('.item');

console.log(items);
items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
