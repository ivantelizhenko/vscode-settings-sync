'use strict';

const items = document.querySelectorAll('.item');

console.log(items);
items.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // 1. delete open from every item
    item.classList.remove('open');

    // 2. add open to curr item
    item.classList.add('open');
  });
});
